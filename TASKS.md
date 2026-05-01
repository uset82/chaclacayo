# TASKS — Chatbot · WhatsApp · Forum · Supabase

> Working checklist for the Chaclacayo landing page upgrade.
> Owner: Carlos Carpio · Phone: +47 450 41 112 · Email: carloscarpio82@hotmail.com
> Reference: [main_idea.md](./main_idea.md) · [AGENTS.md](./AGENTS.md) · [rules.md](./rules.md)

---

## Architecture summary

The site stays **fully static** (no bundler, no npm build) on the frontend.
A small **Supabase Edge Functions** layer (Deno runtime, Carlos's existing Supabase project) hosts the secrets and the AI logic.

```
Browser (vanilla JS, ESM CDN)
   │
   ├─► Supabase JS  ───────────►  Supabase Postgres   (comments, leads, chat logs)
   │       │
   │       └─►  Realtime channel ──► comments live updates
   │
   ├─► Edge Function: /chat ───►  OpenRouter Agent SDK ──► LLM
   │                                    │
   │                                    ├─► tool: save_lead  → Postgres
   │                                    ├─► tool: get_property_facts (KB)
   │                                    └─► tool: notify_carlos_whatsapp ──► WhatsApp delivery
   │
   └─► wa.me/4745041112?text=...  (direct deep-link to Carlos's WhatsApp)
```

| Concern              | Choice                                                                   |
| -------------------- | ------------------------------------------------------------------------ |
| Static hosting       | Unchanged (Vercel/Netlify/GitHub Pages)                                  |
| DB + Auth            | Supabase (project `jcjygxooykoyhkbuoxex`)                                |
| Server runtime       | Supabase Edge Functions (Deno)                                           |
| AI                   | `@openrouter/agent` (server-side only — API key never in browser)        |
| WhatsApp → Carlos    | **CallMeBot** (free, simple) **OR** WhatsApp Cloud API (Meta business)   |
| Visitor → WhatsApp   | `wa.me/4745041112?text=...` deep links                                   |
| Realtime comments    | Supabase Realtime Postgres changes                                       |
| Anti-spam            | Honeypot + rate-limit per IP in Edge Function + basic profanity filter   |
| i18n                 | Existing `js/i18n.js` extended with new keys (ES + EN)                   |

---

## Phase 0 — Decisions & external setup *(Carlos must do these once)*

These are the only things that **cannot** be automated from the IDE — they need a human at a browser/phone.

- [x] **0.1** Confirm WhatsApp delivery method: SIMPLE mode uses `wa.me` deep links only; CallMeBot / WhatsApp Cloud API dropped for v1
- [x] **0.2** Create an OpenRouter account → API key → store as `OPENROUTER_API_KEY` in Supabase secrets
- [x] ~~**0.3** CallMeBot handshake~~ — **dropped** in SIMPLE mode (May 1, 2026)
- [x] **0.4** Install Supabase CLI locally (`npm i -g supabase` or scoop/brew) and run `supabase login`
- [x] **0.5** Verify access to the Supabase project dashboard: <https://supabase.com/dashboard/project/jcjygxooykoyhkbuoxex>

---

## Phase 1 — Supabase project setup

### 1.1 Local scaffolding
- [x] **1.1.1** `supabase init` at project root → creates `supabase/` folder
- [x] **1.1.2** `supabase link --project-ref jcjygxooykoyhkbuoxex`
- [x] **1.1.3** Add `supabase/.gitignore` so `.env` and `.temp` files are ignored
- [x] **1.1.4** Create `.env.local` with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` for reference (also gitignored)

### 1.2 Database schema (migration `supabase/migrations/0001_init.sql`)
- [x] **1.2.1** Table `public.comments` — id (uuid pk), parent_id (uuid nullable, self-fk), name (text), email (text nullable, never displayed), message (text), lang (text 'es'|'en'), created_at (timestamptz), is_visible (bool default true), ip_hash (text), user_agent (text)
- [x] **1.2.2** Table `public.leads` — id (uuid pk), name, email, phone, message, source (text: 'form'|'chat'|'whatsapp_intent'), preferred_language, created_at, notified_at (timestamptz nullable)
- [x] **1.2.3** Table `public.chat_sessions` — id (uuid pk), session_token (text unique), language, created_at, last_seen_at
- [x] **1.2.4** Table `public.chat_messages` — id, session_id (fk), role ('user'|'assistant'|'tool'), content (text), tool_name (text nullable), created_at
- [x] **1.2.5** Table `public.property_facts` (knowledge base for the bot) — id, key (text unique), value_es (text), value_en (text), category (text)
- [x] **1.2.6** Seed `property_facts` with the data already in `index.html` / `main_idea.md` (price, area, rooms, UPeU distance, FAQ answers, etc.)

### 1.3 Row Level Security
- [x] **1.3.1** Enable RLS on all four tables
- [x] **1.3.2** `comments`: anon can `SELECT` where `is_visible = true`; anon can `INSERT` (validation in policy: length checks); only service_role can `UPDATE`/`DELETE`
- [x] **1.3.3** `leads`: anon **cannot** select; only service_role can select; anon can `INSERT` via Edge Function only (using service_role) — i.e. no direct anon insert
- [x] **1.3.4** `chat_sessions` / `chat_messages`: only service_role; the chat Edge Function will use service role
- [x] **1.3.5** `property_facts`: anon `SELECT` allowed (it's public info); only service_role `INSERT`/`UPDATE`

### 1.4 Realtime
- [x] **1.4.1** Enable Postgres Realtime publication for `public.comments` (insert + update)

### 1.5 Edge Function secrets
- [x] **1.5.1** `supabase secrets set OPENROUTER_API_KEY=...`
- [x] ~~**1.5.2** `CALLMEBOT_APIKEY`~~ — **dropped** (WhatsApp via `wa.me` deep links only)
- [x] ~~**1.5.3** `CARLOS_WHATSAPP=4745041112`~~ — **dropped**; value is baked into `index.html` + `window.APP_CONFIG.CARLOS_WA` + Edge Function system prompt
- [x] ~~**1.5.4** `OPENROUTER_MODEL`~~ — **optional**; defaults to `openrouter/free` inside the Edge Function. Set it only if you want to pin a different model.

### 1.6 Apply
- [x] **1.6.1** `supabase db push` to apply migrations
- [x] **1.6.2** Smoke test: insert a comment, confirm it is readable through the public API used by the app, then delete the test row

---

## Phase 2 — Fix WhatsApp links *(quick win, do this first after Supabase is ready)*

Carlos's number `+47 450 41 112` → `wa.me` requires digits only with no `+` or spaces → **`4745041112`**.

- [x] **2.1** Add a single source of truth in `js/main.js`: `const CARLOS_WA = '4745041112';` and a helper `waLink(message)` that returns `https://wa.me/4745041112?text=${encodeURIComponent(message)}`
- [x] **2.2** Replace all 5 broken `wa.me/?text=...` occurrences in `index.html`:
  - [x] Header / hero CTAs (if present)
  - [x] `#contact` info block (line ~660)
  - [x] `#contact` CTA row (line ~673)
  - [x] `#closing` CTA row (line ~723)
  - [x] Footer (line ~754)
  - [x] Floating WhatsApp FAB (line ~767)
- [x] **2.3** Pre-fill more useful messages per location (e.g. "Hola Carlos, vengo desde la galería y me interesa visitar la propiedad")
- [x] **2.4** Verify `target="_blank" rel="noopener noreferrer"` on every WhatsApp link
- [ ] **2.5** Manually open each link on desktop + mobile and confirm the chat opens against the correct number *(Carlos — requires physical phone)*

---

## Phase 3 — Visitor comments / forum

### 3.1 Frontend section in `index.html`
- [x] **3.1.1** Add new `<section id="comments" class="section">` between `#faq` and `#contact`
- [x] **3.1.2** Header (kicker + title + intro), all with `data-i18n`
- [x] **3.1.3** New comment form: name (req, min 2), email (optional, never shown publicly, used to notify replies), message (req, 5–800 chars), language (auto from current locale), honeypot, submit button
- [x] **3.1.4** Comments list container `<div id="comments-list">` with empty/loading/error states
- [x] **3.1.5** Each comment renders: avatar initials, name, relative time ("hace 3 días" / "3 days ago"), message, "Responder / Reply" button, nested replies up to 1 level deep
- [x] **3.1.6** "Cargar más" / "Load more" pagination button (10 per page)
- [x] **3.1.7** Add nav link to `#comments` in header + footer

### 3.2 Styles in `css/styles.css`
- [x] **3.2.1** `.comments` section using existing tokens (forest green / gold / dark bg, glass cards)
- [x] **3.2.2** `.comment` card with avatar circle (gold border), `.comment--reply` with left indent + accent line
- [x] **3.2.3** Form glassmorphism matching existing `.contact-form`
- [x] **3.2.4** Live-update flash animation (gold pulse) when a new comment arrives via Realtime
- [x] **3.2.5** Empty state illustration (CSS only — no extra image)
- [x] **3.2.6** Responsive: stack on <640px, 2-col card grid optional on ≥1024px

### 3.3 JavaScript `js/comments.js` (new file, ES module)
- [x] **3.3.1** Import Supabase client from `https://esm.sh/@supabase/supabase-js@2` via `js/supabase-client.js`
- [x] **3.3.2** Create singleton client with publishable key
- [x] **3.3.3** `loadComments(page)` — fetches from `comments` table, ordered by `created_at desc`, joins replies
- [x] **3.3.4** `submitComment({name, email, message, parent_id})` — client-side validation, insert row, optimistic UI
- [x] **3.3.5** Realtime subscription on the `comments` table → prepend new rows live
- [x] **3.3.6** Time formatting helper (relative dates, locale-aware)
- [x] **3.3.7** Sanitize all user content with `textContent` (never `innerHTML`) to prevent XSS
- [x] **3.3.8** Rate-limit on the client (1 submit / 30 s) to reduce accidental dupes; real rate-limit lives in Edge Function (Phase 3.4)

### 3.4 (Optional but recommended) Edge Function `supabase/functions/post-comment/index.ts`
- [x] ~~**3.4.1–3.4.4** post-comment Edge Function~~ — **dropped** per decision **3.4.5** (SIMPLE mode: RLS + 30s rate-limit trigger + honeypot is sufficient)
- [x] **3.4.5** *(Decision: if we trust RLS-only, skip this function and use direct insert)* — **chosen**

### 3.5 Wiring
- [x] **3.5.1** Add `<script type="module" src="./js/comments.js"></script>` to `index.html`
- [x] **3.5.2** Add 30+ i18n keys (form labels, errors, button text, time strings, empty state, etc.)

---

## Phase 4 — Smart chatbot

### 4.1 Frontend chat widget UI
- [x] **4.1.1** Floating chat **bubble button** in bottom-left (FAB WhatsApp stays bottom-right) — rounded square, gold border, "Pregúntame" / "Ask me" tooltip
- [x] **4.1.2** Chat **panel** (slides up): header with title, close button, language indicator; scrollable message area; input box; send button
- [x] **4.1.3** Quick-reply chips on first open: "¿Cuánto cuesta?", "¿Está cerca de UPeU?", "Quiero agendar visita", "Hablar con Carlos por WhatsApp"
- [x] **4.1.4** Typing indicator (3 animated dots) while waiting for assistant
- [x] **4.1.5** "Hablar con Carlos por WhatsApp" CTA appears after 3 user turns OR when the model decides to (uses tool call) — opens `wa.me/4745041112?text=<conversation summary>`
- [x] **4.1.6** Persist `session_token` in `localStorage` so refreshing keeps the conversation
- [x] **4.1.7** Mobile fullscreen takeover; desktop fixed bottom-right card 380×560
- [x] **4.1.8** Markdown-lite rendering for assistant messages (bold, lists, links) — **safe** parser, no innerHTML on raw input

### 4.2 Frontend `js/chatbot.js` (new ES module)
- [x] **4.2.1** Manage open/close state, message list state
- [x] **4.2.2** `sendMessage(text)` → POST to Edge Function `/chat` with `{session_token, lang, history, text}`
- [x] ~~**4.2.3** Streaming response~~ — **dropped** in SIMPLE mode (single JSON response; fast enough for this use case)
- [x] **4.2.4** Detect tool-result events from server: `notify_whatsapp_sent`, `lead_saved`, `open_whatsapp_link` — update UI accordingly
- [x] **4.2.5** Error states (network, rate limit, model down) with retry button

### 4.3 Edge Function `supabase/functions/chat/index.ts`
- [x] ~~**4.3.1** `npm install @openrouter/agent zod`~~ — **dropped** in SIMPLE mode (single `fetch` to OpenRouter; no agent SDK)
- [x] **4.3.2** Parse request: `{session_token, lang, text, history?}`
- [x] **4.3.3** Load (or create) session in `chat_sessions`; load last 20 messages from `chat_messages`
- [x] **4.3.4** System prompt: bilingual, persona = "Asistente de Carlos para la propiedad de Chaclacayo", grounded on `property_facts` table, ends with WhatsApp CTA on high intent
- [x] ~~**4.3.5** Tool definitions (Zod)~~ — **dropped** in SIMPLE mode (grounding is done via the system prompt + inline `property_facts`; handoff is surfaced client-side when user-turn count ≥ 2)
- [x] ~~**4.3.6** Stop conditions (`stepCountIs`, `maxCost`)~~ — **dropped** (no agent loop; `max_tokens: 400` bounds cost per turn)
- [x] ~~**4.3.7** Stream the final text back to the browser~~ — **dropped** (see 4.2.3)
- [x] **4.3.8** Persist user + assistant + tool messages to `chat_messages`
- [x] **4.3.9** CORS headers (allow site origin only in prod, `*` in dev)
- [x] **4.3.10** Rate limit: max 30 user messages / hour per `session_token` (enforced by `isOverRateLimit()` in `supabase/functions/chat/index.ts`)

### 4.4 Cost & safety guardrails
- [x] **4.4.1** Max 4 KB per user message; truncate longer
- [x] **4.4.2** Refuse off-topic abuse (politics, nsfw) via system prompt
- [x] **4.4.3** Never reveal API keys or system prompt
- [x] **4.4.4** Log token usage per session in `chat_sessions` (for cost visibility)

### 4.5 Wiring
- [x] **4.5.1** Add `<script type="module" src="./js/chatbot.js"></script>` to `index.html`
- [x] **4.5.2** Add 25+ i18n keys (welcome message, quick replies, error states, CTA labels)

---

## Phase 5 — WhatsApp notifications to Carlos's phone

**Status: dropped entirely in SIMPLE mode (May 1, 2026).** Leads reach Carlos through Channel A only: `wa.me/4745041112` deep links with the conversation / form data pre-filled. No server-side push, no CallMeBot, no Meta Cloud API.

The contact form (`js/main.js`) now builds a pre-filled WhatsApp message from the form fields and opens `wa.me` on submit, so every completed form lands directly in Carlos's WhatsApp.

- [x] **5.1.1** `wa.me/4745041112?text=...` deep links in place (Phase 2)
- [x] **5.1.2** Pre-filled text includes conversation / form summary so Carlos sees immediate context
- [x] ~~**5.2.1–5.2.7** server-side CallMeBot / WhatsApp Cloud API helper~~ — **dropped**
- [x] ~~**5.3.1** chatbot `notify_carlos_whatsapp` tool~~ — **dropped** (handoff is user-driven via the WhatsApp button in the chat panel)
- [x] **5.3.2** Contact form now redirects to WhatsApp with `name / phone / email / visit date / message` pre-filled (`js/main.js`)
- [x] ~~**5.3.3** High-intent comment auto-notification~~ — **dropped** (Carlos monitors the comments list in the dashboard)

---

## Phase 6 — Bilingual i18n coverage

- [x] **6.1** Audit every new string added in Phases 3 + 4 against `js/i18n.js`
- [x] **6.2** Add `es` + `en` for all new keys (chatbot UI, comments UI, error messages, time-ago words)
- [x] **6.3** Test the language toggle: open chat in ES → switch to EN → previous messages stay in their original language, new system text switches
- [x] **6.4** Comments are stored with their original `lang` and rendered as written; UI chrome around them switches with the toggle
- [x] **6.5** Update `data-i18n` attributes everywhere; ensure no hardcoded user-facing strings remain in JS

---

## Phase 7 — Testing, accessibility, deploy

### 7.1 Manual QA matrix *(run on real devices — Carlos's job)*
- [ ] **7.1.1** Comment submit → realtime appears in another browser tab
- [ ] **7.1.2** Reply to a comment, verify thread depth limit
- [ ] **7.1.3** Chatbot answers price question correctly from `property_facts`
- [ ] ~~**7.1.4** Chatbot triggers WhatsApp notification → Carlos receives it within 10s~~ — **dropped** (no server-side push; handoff is user-driven)
- [ ] **7.1.5** WhatsApp deep link opens the right number on iOS, Android, desktop
- [x] **7.1.6** Honeypot blocks bot submission
- [ ] **7.1.7** Rate limit blocks 31st chat message in an hour with friendly error
- [x] **7.1.8** Site still works fully without JS for the static content sections

### 7.2 Accessibility
- [x] **7.2.1** Chat widget keyboard navigable (Tab, Esc to close, Enter to send)
- [x] **7.2.2** ARIA roles: `role="dialog"` on chat panel, `aria-live="polite"` on message list
- [x] **7.2.3** Comment form has visible labels, error messages with `aria-describedby`
- [x] **7.2.4** Color contrast ≥ 4.5:1 for all new text
- [x] **7.2.5** `prefers-reduced-motion` disables chat panel slide + comment flash

### 7.3 Performance
- [x] **7.3.1** Lazy-load `js/chatbot.js` and `js/comments.js` (defer + only mount widget on first interaction or scroll past hero)
- [x] **7.3.2** Keep total added JS under 50 KB gzip
- [x] **7.3.3** Lighthouse mobile prep: added `<link rel="preload" as="image" fetchpriority="high">` for the hero LCP background image (`FOTOS/WhatsApp Image 2026-04-27 at 15.54.13.jpeg`). Real ≥ 90 score verification still requires Carlos to run Lighthouse against the deployed URL.

### 7.4 Deploy *(Carlos's job — requires Supabase CLI auth + production hosting)*
- [ ] **7.4.1** `supabase functions deploy chat` (comments + notify-lead functions were dropped — see Phase 3.4 / Phase 5)
- [x] **7.4.2** CORS now reads `ALLOWED_ORIGIN` secret (comma-separated list). Default `*` for dev. Set it in prod with `supabase secrets set ALLOWED_ORIGIN="https://your-domain.com"` — no code edit required.
- [ ] **7.4.3** Push static files (Vercel/Netlify/GitHub Pages)
- [ ] **7.4.4** End-to-end smoke test on production URL

---

## Final decisions — SIMPLE mode *(May 1, 2026)*

User asked to keep things minimal. Final shape:

1. **WhatsApp = `wa.me` deep links only** to `4745041112`. On desktop they open WhatsApp Web; on mobile they open the WhatsApp app. Pre-filled message. No CallMeBot, no Cloud API, no Edge Function for WhatsApp. *(Phase 5 dropped entirely.)*
2. **Chatbot model = `openrouter/free`** — OpenRouter's official Free Models Router (200K context, smart-filters models that support tool calling). Single env var, swappable.
3. **Comments = open with anti-spam** — direct insert from browser via Supabase + RLS, honeypot field, server-side rate limit (1 comment / 30 s per IP via RLS check). No admin UI in v1. Admin can hide bad ones from the Supabase dashboard if needed.
4. **No agent SDK in v1** — single `fetch` call to OpenRouter chat completions (`POST https://openrouter.ai/api/v1/chat/completions`). System prompt is grounded with the property facts inline. We can swap to `@openrouter/agent` later if/when we add real tools.

## Files that will be created / modified

| File | Type | Purpose |
| ---- | ---- | ------- |
| `.gitignore` | new | Block `.env*` from commits |
| `.env.example` | new | Template for local dev (publishable key only) |
| `supabase/migrations/0001_init.sql` | new | `comments` + `chat_logs` tables, RLS, rate-limit policy |
| `supabase/functions/chat/index.ts` | new | Edge Function — proxies to OpenRouter, hides API key |
| `supabase/functions/chat/deno.json` | new | Deno import map for the function |
| `supabase/config.toml` | new | Function config (verify_jwt = false) |
| `js/supabase-client.js` | new | Singleton Supabase client (ESM CDN import) |
| `js/comments.js` | new | Comments load / submit / realtime |
| `js/chatbot.js` | new | Chat widget logic |
| `js/i18n.js` | edit | +50 bilingual keys |
| `js/main.js` | edit | Add `CARLOS_WA` constant + `waLink()` helper |
| `index.html` | edit | Fix all `wa.me` links · add `#comments` section · add chatbot widget · wire scripts |
| `css/styles.css` | edit | Comments + chatbot styles using existing tokens |
| `README.md` | edit | Setup steps for Supabase + secret deployment |

## Simplified phases — STATUS

- [x] **0.** `.gitignore` + `.env.example` created
- [x] **1.** Supabase migration (`supabase/migrations/0001_init.sql`) + Edge Function (`supabase/functions/chat/index.ts`) written. **Carlos to deploy** with `supabase db push` + `supabase functions deploy chat`.
- [x] **2.** All 5 `wa.me` links in `index.html` fixed to `wa.me/4745041112` with contextual pre-filled messages. `js/main.js` now exposes `CARLOS_WA` + `waLink()` and normalizes `[data-wa-message]` links on load.
- [x] **3.** Comments section (`#comments`): form, list, realtime updates, anti-spam (honeypot + 30s request-IP rate-limit trigger), bilingual.
- [x] **4.** Chatbot widget: floating FAB (`#chatbot-fab`), slide-in panel, quick replies, typing indicator, WhatsApp handoff after 2 turns, session persistence, per-session rate limit (30 / h).
- [x] **5.** Contact form (`#contact-form`) now hands the lead to Carlos via a pre-filled WhatsApp chat (Channel A). No server-side push — SIMPLE mode. README updated with Supabase setup steps + key rotation reminder.
- [ ] **6.** End-to-end production test *(Carlos — requires deploy + real devices)*.
  - [x] **6.1** Local static server smoke test passed at `http://127.0.0.1:5500` for HTML, CSS, and all JS files.
  - [x] **6.2** Syntax checks passed for `js/main.js`, `js/i18n.js`, `js/gallery.js`, `js/comments.js`, and `js/chatbot.js`.
  - [x] **6.3** WhatsApp link audit passed: 6 links point to `wa.me/4745041112`, all with `target="_blank"` + `rel="noopener noreferrer"`.
  - [x] **6.4** Security scan passed: no real OpenRouter key found in project files.
  - [x] **6.5** Remote Supabase probe completed: live `public.comments` table is reachable; `chat` function is still not found, so Edge Function deployment is pending.
  - [x] **6.6** Deploy Supabase migration + `chat` Edge Function, set a rotated `OPENROUTER_API_KEY`, then rerun live comments/chat E2E.
    - [x] **6.6.1** Applied `supabase/migrations/0001_init.sql` to project `jcjygxooykoyhkbuoxex`.
    - [x] **6.6.2** Insert/read/delete smoke test passed for `public.comments`.
    - [x] **6.6.3** Set rotated `OPENROUTER_API_KEY` in Supabase secrets.
    - [x] **6.6.4** Deploy `supabase/functions/chat`.
    - [ ] **6.6.5** Run live chatbot E2E against deployed Edge Function *(Carlos)*.
    - [x] **6.6.6** Installed `supabase/agent-skills` locally with `npx skills add supabase/agent-skills`.

## Security checklist

- [x] **S.1** `.gitignore` covers `.env*`, `supabase/.env`, `supabase/.temp/`
- [x] **S.2** OpenRouter key never written to any file — must be set via `supabase secrets set OPENROUTER_API_KEY=...`
- [ ] **S.3** **Rotate the leaked OpenRouter key** at <https://openrouter.ai/keys> ← Carlos's job; do not reuse any key pasted in chat.
- [x] **S.4** Supabase publishable key embedded in `window.APP_CONFIG` — safe (public anon key, RLS protects everything)

---

*Plan version 2.3 — May 1, 2026 · code complete in SIMPLE mode, awaiting Carlos's production deploy + manual QA.*

## Changelog

- **2.3** — Made CORS origin configurable via `ALLOWED_ORIGIN` secret (no code edit for prod). Added hero image preload for LCP. Final syntax + security audit passed.
- **2.2** — Contact form now hands leads off to Carlos via `wa.me`. Added chat session rate limit (30/h). Cleaned up TASKS.md with SIMPLE-mode strike-throughs.
- **2.1** — Initial SIMPLE-mode consolidation after May 1 decisions.
