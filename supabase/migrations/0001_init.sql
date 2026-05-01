-- =====================================================================
-- Chaclacayo Landing Page — Initial schema
-- Tables: comments (visitor forum) + chat_logs (chatbot conversations)
-- Strategy: open insert with per-IP rate limiting, RLS-enforced
-- =====================================================================

create schema if not exists extensions;
create extension if not exists pgcrypto with schema extensions;

-- ---------------------------------------------------------------------
-- 1. COMMENTS TABLE — visitor forum
-- ---------------------------------------------------------------------
create table if not exists public.comments (
  id          uuid primary key default gen_random_uuid(),
  parent_id   uuid references public.comments(id) on delete cascade,
  name        text not null check (char_length(name) between 2 and 60),
  email       text check (email is null or char_length(email) <= 120),
  message     text not null check (char_length(message) between 5 and 800),
  lang        text not null default 'es' check (lang in ('es', 'en')),
  is_visible  boolean not null default true,
  ip_hash     text,
  user_agent  text,
  created_at  timestamptz not null default now()
);

create index if not exists comments_created_at_idx
  on public.comments (created_at desc)
  where is_visible = true;

create index if not exists comments_parent_idx
  on public.comments (parent_id)
  where is_visible = true;

-- ---------------------------------------------------------------------
-- 2. CHAT_LOGS TABLE — one row per chatbot turn (for analytics + future training)
-- ---------------------------------------------------------------------
create table if not exists public.chat_logs (
  id            uuid primary key default gen_random_uuid(),
  session_token text not null,
  lang          text not null default 'es' check (lang in ('es', 'en')),
  user_message  text not null,
  bot_message   text not null,
  model         text,
  created_at    timestamptz not null default now()
);

create index if not exists chat_logs_session_idx
  on public.chat_logs (session_token, created_at desc);

-- ---------------------------------------------------------------------
-- 3. ROW LEVEL SECURITY
-- ---------------------------------------------------------------------
alter table public.comments  enable row level security;
alter table public.chat_logs enable row level security;

-- Anyone can read visible comments
drop policy if exists "comments_select_visible" on public.comments;
create policy "comments_select_visible"
  on public.comments
  for select
  to anon, authenticated
  using (is_visible = true);

-- Anyone can post a comment, but the row must satisfy length checks (already in CHECK constraints).
-- Rate limiting (max 1 comment per minute per ip_hash) is enforced via a trigger below.
drop policy if exists "comments_insert_anon" on public.comments;
create policy "comments_insert_anon"
  on public.comments
  for insert
  to anon, authenticated
  with check (
    is_visible = true
    and (parent_id is null or exists (select 1 from public.comments c2 where c2.id = parent_id))
  );

-- Only service_role can update / delete (admin work happens in Supabase dashboard or via service role)
-- (no policies for update/delete = denied for anon)

-- chat_logs: only service_role writes; nobody reads (it's an internal log)
-- (no policies = denied for anon — the Edge Function uses service_role internally)

-- ---------------------------------------------------------------------
-- 4. RATE LIMIT TRIGGER for comments (1 per request IP per 30 seconds)
-- ---------------------------------------------------------------------
create or replace function public.comment_request_ip_hash()
returns text
language plpgsql
stable
as $$
declare
  headers jsonb := '{}'::jsonb;
  raw_ip text;
begin
  begin
    headers := nullif(current_setting('request.headers', true), '')::jsonb;
  exception when others then
    headers := '{}'::jsonb;
  end;

  raw_ip := coalesce(
    nullif(split_part(headers ->> 'x-forwarded-for', ',', 1), ''),
    nullif(headers ->> 'cf-connecting-ip', ''),
    nullif(headers ->> 'x-real-ip', ''),
    'unknown'
  );

  return encode(extensions.digest('chaclacayo-comments-v1:' || btrim(raw_ip), 'sha256'), 'hex');
end;
$$;

create or replace function public.enforce_comment_rate_limit()
returns trigger
language plpgsql
as $$
begin
  new.ip_hash := coalesce(new.ip_hash, public.comment_request_ip_hash());

  if exists (
    select 1
    from public.comments
    where ip_hash = new.ip_hash
      and created_at > now() - interval '30 seconds'
  ) then
    raise exception 'rate_limit_exceeded'
      using hint = 'Please wait at least 30 seconds between comments.';
  end if;

  return new;
end;
$$;

drop trigger if exists trg_comments_rate_limit on public.comments;
create trigger trg_comments_rate_limit
  before insert on public.comments
  for each row execute function public.enforce_comment_rate_limit();

-- ---------------------------------------------------------------------
-- 5. REALTIME — broadcast new visible comments to subscribed clients
-- ---------------------------------------------------------------------
-- Add comments table to the supabase_realtime publication so clients can subscribe.
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'comments'
  ) then
    alter publication supabase_realtime add table public.comments;
  end if;
end$$;
