// lib/supabase.js — Shared server-side Supabase client for all API routes
// Uses the BAYU Supabase project (single shared database)

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.BAYU_SUPABASE_URL;
const supabaseServiceKey = process.env.BAYU_SUPABASE_SERVICE_ROLE_KEY;

// Singleton — reuse across API routes
let _adminClient = null;

/**
 * Server-side Supabase admin client (service role key).
 * Bypasses RLS — use only in API routes, never in client-side code.
 */
export function getSupabaseAdmin() {
  if (!_adminClient) {
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error(
        'Missing BAYU_SUPABASE_URL or BAYU_SUPABASE_SERVICE_ROLE_KEY in environment.'
      );
    }
    _adminClient = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return _adminClient;
}
