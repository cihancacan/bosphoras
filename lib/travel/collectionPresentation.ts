import { travelHref, type TravelLocale } from './i18n';

export const collectionReleased = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
  && process.env.NEXT_PUBLIC_BOSPHORAS_BOOKING_RELEASE === 'true';
export const collectionBookingEnabled = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' || collectionReleased;

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
  istanbul: 'IST', bodrum: 'BJV', paris: 'PAR', dubai: 'DXB', maldives: 'MLE',
};

export function destinationFlightHref(locale: TravelLocale, destinationSlug: string): string | null {
  const airport = destinationAirports[destinationSlug];
  return airport ? `${travelHref(locale, 'private-collection')}?service=flights&arrival=${airport}` : null;
}
