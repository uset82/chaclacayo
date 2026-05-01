-- =====================================================================
-- Chaclacayo Landing Page — App tables for leads, chat sessions/messages,
-- and property facts used by the chatbot.
-- =====================================================================

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  email text check (email is null or char_length(email) <= 160),
  phone text check (phone is null or char_length(phone) <= 60),
  message text check (message is null or char_length(message) <= 2000),
  source text not null check (source in ('form', 'chat', 'whatsapp_intent')),
  preferred_language text not null default 'es' check (preferred_language in ('es', 'en')),
  created_at timestamptz not null default now(),
  notified_at timestamptz
);

create table if not exists public.chat_sessions (
  id uuid primary key default gen_random_uuid(),
  session_token text not null unique,
  language text not null default 'es' check (language in ('es', 'en')),
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  total_prompt_tokens integer not null default 0,
  total_completion_tokens integer not null default 0,
  total_tokens integer not null default 0
);

create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.chat_sessions(id) on delete cascade,
  role text not null check (role in ('user', 'assistant', 'tool')),
  content text not null check (char_length(content) <= 8000),
  tool_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.property_facts (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  value_es text not null,
  value_en text not null,
  category text not null default 'general'
);

create index if not exists leads_created_at_idx
  on public.leads (created_at desc);

create index if not exists chat_messages_session_created_idx
  on public.chat_messages (session_id, created_at desc);

create index if not exists property_facts_category_idx
  on public.property_facts (category, key);

alter table public.leads enable row level security;
alter table public.chat_sessions enable row level security;
alter table public.chat_messages enable row level security;
alter table public.property_facts enable row level security;

-- Internal tables are service-role only: no anon policies for leads,
-- chat_sessions, or chat_messages.

create or replace function public.increment_chat_session_usage(
  p_session_id uuid,
  p_prompt_tokens integer,
  p_completion_tokens integer,
  p_total_tokens integer
)
returns void
language sql
security definer
set search_path = public
as $$
  update public.chat_sessions
  set total_prompt_tokens = total_prompt_tokens + greatest(coalesce(p_prompt_tokens, 0), 0),
      total_completion_tokens = total_completion_tokens + greatest(coalesce(p_completion_tokens, 0), 0),
      total_tokens = total_tokens + greatest(coalesce(p_total_tokens, 0), 0),
      last_seen_at = now()
  where id = p_session_id;
$$;

revoke execute on function public.increment_chat_session_usage(uuid, integer, integer, integer) from public;
grant execute on function public.increment_chat_session_usage(uuid, integer, integer, integer) to service_role;

drop policy if exists "property_facts_select_public" on public.property_facts;
create policy "property_facts_select_public"
  on public.property_facts
  for select
  to anon, authenticated
  using (true);

insert into public.property_facts (key, value_es, value_en, category)
values
  ('owner', 'Carlos Carpio. Venta directa, sin agentes ni comisiones.', 'Carlos Carpio. Direct sale, no agents, no commissions.', 'contact'),
  ('location', 'Cooperativa Alfonso Cobián, Mz B Lt 25, Chaclacayo, Lima, Perú.', 'Cooperativa Alfonso Cobián, Mz B Lt 25, Chaclacayo, Lima, Peru.', 'location'),
  ('upeu_distance', 'Aproximadamente 10 minutos en auto de la Universidad Peruana Unión (UPeU).', 'About 10 minutes by car from Universidad Peruana Unión (UPeU).', 'location'),
  ('lima_distance', 'Aproximadamente 40 minutos del centro de Lima por la Carretera Central.', 'About 40 minutes from central Lima via Carretera Central.', 'location'),
  ('climate', 'Valle cálido y templado durante todo el año, más soleado y cálido que Lima incluso en invierno.', 'Warm temperate valley year-round, sunnier and warmer than Lima even in winter.', 'lifestyle'),
  ('type', 'Casa multi-unidad ideal para hospedaje estudiantil, Airbnb o alquiler compartido.', 'Multi-unit house ideal for student housing, Airbnb, or shared rental.', 'property'),
  ('area', 'Área total: 330 m².', 'Total area: 330 m².', 'property'),
  ('rooms', '15 habitaciones, 10 cocinas, 10 baños, 3 patios y 1 azotea amplia.', '15 bedrooms, 10 kitchens, 10 bathrooms, 3 patios, and 1 large rooftop.', 'property'),
  ('utilities', 'Internet por fibra óptica disponible. Agua, luz y desagüe conectados.', 'Fibre optic internet available. Water, electricity, and sewerage connected.', 'property'),
  ('status', 'Propiedad constantemente remodelada y lista para ocupar.', 'Constantly remodeled and ready to occupy.', 'property'),
  ('legal', 'Título de propiedad, HR/PU al día, sin cargas y registrado en SUNARP.', 'Title deed, HR/PU up to date, no liens, registered in SUNARP.', 'legal'),
  ('price', 'Precio: USD 350,000, negociable caso por caso.', 'Price: USD 350,000, negotiable case by case.', 'price'),
  ('payment', 'Se acepta USD, PEN, EUR, BTC o USDT. Financiamiento bancario disponible y cuotas negociables.', 'USD, PEN, EUR, BTC, or USDT accepted. Bank financing available and instalments negotiable.', 'price'),
  ('foreign_buyers', 'Los extranjeros pueden comprar propiedad en Perú con pasaporte y carné de extranjería o RUC según el caso.', 'Foreigners can buy property in Peru with a passport and carné de extranjería or RUC depending on the case.', 'legal'),
  ('visits', 'Las visitas son con cita previa; fines de semana preferidos.', 'Visits are by appointment; weekends are preferred.', 'contact'),
  ('email', 'Email de Carlos: carloscarpio82@hotmail.com.', 'Carlos email: carloscarpio82@hotmail.com.', 'contact'),
  ('whatsapp', 'WhatsApp de Carlos: +47 450 41 112. Link: https://wa.me/4745041112', 'Carlos WhatsApp: +47 450 41 112. Link: https://wa.me/4745041112', 'contact')
on conflict (key) do update
set value_es = excluded.value_es,
    value_en = excluded.value_en,
    category = excluded.category;
