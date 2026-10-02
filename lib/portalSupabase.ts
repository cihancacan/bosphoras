import { createClient } from '@supabase/supabase-js';

export const portalSupabaseUrl = 'https://udbzytlmcnljlegmolcx.supabase.co';
export const portalSupabasePublishableKey = 'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';

let browserClient: ReturnType<typeof createClient> | null = null;

export function getPortalSupabase() {
  if (!browserClient) {
    browserClient = createClient(portalSupabaseUrl, portalSupabasePublishableKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }
  return browserClient;
}


export function createIsolatedPortalSupabase() {
  return createClient(portalSupabaseUrl, portalSupabasePublishableKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
