/** Server-only configuration. Production never falls back to staging credentials. */
export type WinkEnvironment = 'staging' | 'production';
export const WINK_HOSTS = {
  staging: { tokenUrl: 'https://staging-iam.wink.travel/oauth2/token', partnerHost: 'staging-partner.wink.travel:443', bookingOrigin: 'https://staging-book.wink.travel' },
  production: { tokenUrl: 'https://iam.wink.travel/oauth2/token', partnerHost: 'partner.wink.travel:443', bookingOrigin: 'https://book.wink.travel' },
} as const;

export function getWinkConfiguration(environment: WinkEnvironment, env = process.env) {
  const names = environment === 'production'
    ? { clientId: 'WINK_PRODUCTION_CLIENT_ID', clientSecret: 'WINK_PRODUCTION_CLIENT_SECRET', accountId: 'WINK_PRODUCTION_AFFILIATE_ID', customizationId: 'WINK_PRODUCTION_CUSTOMIZATION_ID' }
    : { clientId: 'WINK_CLIENT_ID_V3', clientSecret: 'WINK_CLIENT_SECRET_V3', accountId: 'WINK_STAGING_AFFILIATE_ID', customizationId: 'WINK_STAGING_CUSTOMIZATION_ID' };
  const missing = Object.values(names).filter(name => !env[name]?.trim());
  return {
    environment, ...WINK_HOSTS[environment], missing,
    clientId: env[names.clientId]?.trim(), clientSecret: env[names.clientSecret]?.trim(),
    accountId: env[names.accountId]?.trim(), customizationId: env[names.customizationId]?.trim(),
  };
}
