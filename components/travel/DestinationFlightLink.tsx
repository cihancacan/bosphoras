import Link from 'next/link';
import { BedDouble, PlaneTakeoff } from 'lucide-react';
import { bookingCollectionPath, collectionBookingEnabled, destinationFlightHref } from '@/lib/travel/collectionPresentation';
import type { TravelLocale } from '@/lib/travel/i18n';

const copy: Record<TravelLocale, {hotels: string; flights: string; find: string; prices: string}> = {
  fr: {hotels:'Comparer les hôtels', flights:'Comparer les vols', find:'Trouver un hôtel', prices:'Comparer les prix des hôtels'},
  en: {hotels:'Compare hotels', flights:'Compare flights', find:'Find a hotel', prices:'Compare hotel prices'},
  de: {hotels:'Hotels vergleichen', flights:'Flüge vergleichen', find:'Ein Hotel finden', prices:'Hotelpreise vergleichen'},
  tr: {hotels:'Otelleri karşılaştır', flights:'Uçuşları karşılaştır', find:'Otel bul', prices:'Otel fiyatlarını karşılaştır'},
  es: {hotels:'Comparar hoteles', flights:'Comparar vuelos', find:'Encontrar un hotel', prices:'Comparar precios de hoteles'},
  it: {hotels:'Confronta gli hotel', flights:'Confronta i voli', find:'Trova un hotel', prices:'Confronta i prezzi degli hotel'},
  pt: {hotels:'Comparar hotéis', flights:'Comparar voos', find:'Encontrar um hotel', prices:'Comparar preços de hotéis'},
  ru: {hotels:'Сравнить отели', flights:'Сравнить авиабилеты', find:'Найти отель', prices:'Сравнить цены на отели'},
  ar: {hotels:'قارن الفنادق', flights:'قارن رحلات الطيران', find:'ابحث عن فندق', prices:'قارن أسعار الفنادق'},
  zh: {hotels:'比较酒店', flights:'比较航班', find:'查找酒店', prices:'比较酒店价格'},
};

type Mode = 'both' | 'find' | 'prices' | 'flights';

// Hotel partner search currently accepts no destination or district prefill.
// Open the localized hotel tab rather than implying a district filter is active.
export function DestinationFlightLink({ locale, slug, afterHero = false, mode = 'both' }: { locale: TravelLocale; slug: string; name: string; afterHero?: boolean; mode?: Mode }) {
  if (!collectionBookingEnabled) return null;
  const t = copy[locale];
  const base = 'inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176184]';
  const secondary = base + ' border border-[#d9e3e7] bg-white text-[#193344] hover:border-[#193344] hover:bg-[#f5f7f8]';
  const hotelLink = (
    <Link href={bookingCollectionPath(locale) + '?service=hotels'} className={mode==='both' ? base + ' bg-[#193344] text-white hover:bg-[#25485e]' : secondary}>
      <BedDouble size={17} className="shrink-0" aria-hidden="true"/><span>{mode==='find'?t.find:mode==='prices'?t.prices:t.hotels}</span>
    </Link>
  );
  const flightLink = (
    <Link href={destinationFlightHref(locale, slug)} className={secondary}>
      <PlaneTakeoff size={17} className="shrink-0" aria-hidden="true"/><span>{t.flights}</span>
    </Link>
  );
  const links = <div lang={locale} dir={locale==='ar'?'rtl':'ltr'} className="flex flex-wrap items-center gap-2 sm:gap-3">
    {mode!=='flights'&&hotelLink}
    {(mode==='both'||mode==='flights')&&flightLink}
  </div>;
  return afterHero ? <div className="mx-auto max-w-7xl px-5 pt-5">{links}</div> : links;
}
