import Link from 'next/link';
import { PlaneTakeoff } from 'lucide-react';
import { collectionBookingEnabled, destinationFlightHref } from '@/lib/travel/collectionPresentation';
import type { TravelLocale } from '@/lib/travel/i18n';

const label: Record<TravelLocale, (destination: string) => string> = {
  fr: name => `Vols vers ${name} avec BOSPHORAS`,
  en: name => `Flights to ${name} with BOSPHORAS`,
  de: name => `Flüge nach ${name} mit BOSPHORAS`,
  tr: name => `BOSPHORAS ile ${name} uçuşları`,
  es: name => `Vuelos a ${name} con BOSPHORAS`,
  it: name => `Voli per ${name} con BOSPHORAS`,
  pt: name => `Voos para ${name} com BOSPHORAS`,
  ru: name => `Рейсы: ${name} с BOSPHORAS`,
  ar: name => `رحلات إلى ${name} مع BOSPHORAS`,
  zh: name => `通过 BOSPHORAS 查找前往${name}的航班`,
};

export function DestinationFlightLink({ locale, slug, name, afterHero = false }: { locale: TravelLocale; slug: string; name: string; afterHero?: boolean }) {
  if (!collectionBookingEnabled) return null;
  const link = (
    <Link href={destinationFlightHref(locale, slug)}
      className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-[#176184] underline underline-offset-4 hover:text-[#0b4360] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176184]">
      <PlaneTakeoff size={17} className="shrink-0" aria-hidden="true"/>{label[locale](name)}
    </Link>
  );
  return afterHero ? <div className="mx-auto max-w-7xl px-5 pt-5">{link}</div> : link;
}
