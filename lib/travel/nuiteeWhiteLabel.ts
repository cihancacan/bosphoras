/**
 * Direct entry to the account-owned Nuitée white-label search.
 * Only the supplier UI handles destination, hotel, dates, prices and checkout.
 * No intermediate Bosphoras search, iframe or third-party API requests.
 */
export const NUITEE_WHITE_LABEL_ORIGIN = 'https://cihan-cacan-7d0sw.nuitee.link';

export function getNuiteeWhiteLabelSearchHref(locale: string): string {
  const url = new URL(NUITEE_WHITE_LABEL_ORIGIN);
  url.searchParams.set('language', locale === 'fr' ? 'fr' : 'en');
  url.searchParams.set('currency', 'EUR');
  url.searchParams.set('clientReference', 'bosphoras_worldwide');
  return url.toString();
}
