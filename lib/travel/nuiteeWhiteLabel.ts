/**
 * Direct entry to the account-owned Nuitée white-label search.
 * Only the supplier UI handles destination, hotel, dates, prices and checkout.
 * No intermediate Bosphoras search, iframe or third-party API requests.
 */
export const NUITEE_WHITE_LABEL_ORIGIN = 'https://bosphoras.nuitee.link';

export function getNuiteeProviderLocale(locale: string): string {
  return ['fr','en','ru','ar','de','tr','es','pt','it','zh'].includes(locale) ? locale : 'en';
}

export function getNuiteeWhiteLabelSearchHref(locale: string): string {
  const url = new URL(NUITEE_WHITE_LABEL_ORIGIN);
  url.searchParams.set('language', getNuiteeProviderLocale(locale));
  url.searchParams.set('currency', 'EUR');
  url.searchParams.set('clientReference', 'bosphoras_worldwide');
  return url.toString();
}

/**
 * Experiences is a distinct Nuitée Connect product. Its access and white-label
 * entry point must be enabled by Nuitée; never guess a /activities route.
 * Set this public URL only after verifying it in the partner dashboard.
 * Until then, the Bosphoras UX uses the existing private enquiry flow.
 */
export function getNuiteeExperiencesHref(): string | null {
  const configured = process.env.NEXT_PUBLIC_NUITEE_EXPERIENCES_URL?.trim();
  if (!configured) return null;
  try {
    const url = new URL(configured);
    if (url.protocol !== 'https:') return null;
    if (url.hostname !== 'bosphoras.nuitee.link' && !url.hostname.endsWith('.nuitee.link')) return null;
    return url.toString();
  } catch {
    return null;
  }
}
