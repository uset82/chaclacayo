// js/supabase-client.js
// Shared Supabase singleton — imported by comments.js and (optionally) chatbot.js
// Uses the official ESM build via esm.sh, no bundler required.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const cfg = window.APP_CONFIG ?? {};

if (!cfg.SUPABASE_URL || !cfg.SUPABASE_PUBLISHABLE_KEY) {
  console.error("[supabase] Missing APP_CONFIG values. Comments and realtime will not work.");
}

export const supabase = createClient(
  cfg.SUPABASE_URL,
  cfg.SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    realtime: {
      params: { eventsPerSecond: 5 },
    },
  }
);
