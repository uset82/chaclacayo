-- =====================================================================
-- Chaclacayo Landing Page — explicit Data API grants
--
-- Supabase is rolling out projects where tables in public are not exposed
-- to the Data API automatically. These grants make the intended public
-- surfaces explicit while RLS still controls row access.
-- =====================================================================

grant usage on schema public to anon, authenticated;

-- Visitor forum: public readers can fetch visible rows through RLS, and
-- visitors can insert comments through the RLS policy + trigger checks.
grant select, insert on table public.comments to anon, authenticated;

-- Property facts are public listing information used to ground the bot.
grant select on table public.property_facts to anon, authenticated;

-- Internal data stays backend-only. The Edge Function uses service_role.
revoke all on table public.leads from anon, authenticated;
revoke all on table public.chat_sessions from anon, authenticated;
revoke all on table public.chat_messages from anon, authenticated;
revoke all on table public.chat_logs from anon, authenticated;
