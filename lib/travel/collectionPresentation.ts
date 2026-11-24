import { travelHref, type TravelLocale } from './i18n';

export const collectionReleased = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  && process.env.NEXT_PUBLIC_BOSPHORAS_BOOKING_RELEASE === 'true';
export const collectionBookingEnabled = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' || collectionReleased;

// Keep the existing partner integrations available for future activation.
export const additionalBookingServicesPaused = collectionBookingEnabled;

export const travelCollectionTitles: Record<TravelLocale, string> = {
  fr: 'Voyages d’exception',
  en: 'Exceptional journeys',
  de: 'Außergewöhnliche Reisen',
  tr: 'Benzersiz seyahatler',
  es: 'Viajes de excepción',
  it: 'Viaggi d’eccezione',
  pt: 'Viagens excepcionais',
  ru: 'Особенные путешествия',
  ar: 'رحلات استثنائية',
  zh: '非凡旅程',
};

export const privateTravelLabels: Record<TravelLocale, string> = {
  fr: 'Voyages privés', en: 'Private travel', de: 'Privatreisen', tr: 'Özel seyahatler',
  es: 'Viajes privados', it: 'Viaggi privati', pt: 'Viagens privadas',
  ru: 'Частные путешествия', ar: 'السفر الخاص', zh: '私人旅行',
};

const destinationAirports: Readonly<Partial<Record<string, string>>> = {
  istanbul: 'IST', bodrum: 'BJV', antalya: 'AYT', paris: 'PAR', dubai: 'DXB', bali: 'DPS',
  'new-york': 'JFK', miami: 'MIA', 'los-angeles': 'LAX', 'saint-barthelemy': 'SBH',
  mykonos: 'JMK', ibiza: 'IBZ', tivat: 'TIV', aspen: 'ASE', 'jackson-hole': 'JAC',
  nantucket: 'ACK', 'turks-and-caicos': 'PLS', maldives: 'MLE', 'los-cabos': 'SJD',
  phuket: 'HKT', 'koh-samui': 'USM', krabi: 'KBV', bangkok: 'BKK', 'chiang-mai': 'CNX',
  sumba: 'WGP', palawan: 'PPS', tokyo: 'HND', 'da-nang': 'DAD', 'phu-quoc': 'PQC',
  singapore: 'SIN', sentosa: 'SIN', udaipur: 'UDR', jaipur: 'JAI', paro: 'PBH',
  'siem-reap': 'SAI', 'luang-prabang': 'LPQ', langkawi: 'LGK',
};

export function destinationFlightHref(locale: TravelLocale, destinationSlug: string): string {
  const airport = destinationAirports[destinationSlug];
  const params = new URLSearchParams({ service: 'flights' });
  if (airport) params.set('arrival', airport);
  return travelHref(locale, 'private-collection') + '?' + params;
}
