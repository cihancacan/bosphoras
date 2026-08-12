import type { Locale } from '@/lib/i18n';
import { programmaticCities, type ProgrammaticCity } from './cities';
import { programmaticMarkets, type ProgrammaticMarket } from './markets';
import { programmaticServices, type ProgrammaticService } from './services';

export type ProgrammaticPage = {
  id: string;
  locale: Locale;
  slug: string;
  title: string;
  metaDescription: string;
  service: ProgrammaticService;
  city: ProgrammaticCity;
  market: ProgrammaticMarket;
  isIndexable: boolean;
};

function serviceCoreName(serviceName: string, locale: Locale): string {
  if (locale === 'fr') return serviceName.replace(/\s+en Turquie$/i, '');
  if (locale === 'en') return serviceName.replace(/\s+in Turkey$/i, '');
  if (locale === 'ru') return serviceName.replace(/\s+в Турции$/i, '');
  return serviceName.replace(/\s+في تركيا$/i, '');
}

const localeTitle: Record<Locale, (s: string, c: string, m: string) => string> = {
  fr: (s, c, m) => `${s} à ${c}, Turquie — ${m} | Bosphoras`,
  en: (s, c, m) => `${s} in ${c}, Turkey — ${m} | Bosphoras`,
  ru: (s, c, m) => `${s} — ${c}, Турция · ${m} | Bosphoras`,
  ar: (s, c, m) => `${s} في ${c}، تركيا — ${m} | Bosphoras`,
};

const localeMeta: Record<Locale, (s: string, c: string, m: string) => string> = {
  fr: (s, c, m) => `${s} à ${c}, Turquie — ${m}. Bosphoras coordonne la demande, les interlocuteurs, les conditions, les confirmations et le suivi local.`,
  en: (s, c, m) => `${s} in ${c}, Turkey — ${m}. Bosphoras coordinates the brief, selected contacts, conditions, confirmations and local follow-up.`,
  ru: (s, c, m) => `${s} — ${c}, Турция · ${m}. Bosphoras координирует задачу, выбранных исполнителей, условия, подтверждения и локальное сопровождение.`,
  ar: (s, c, m) => `${s} في ${c}، تركيا — ${m}. ينسق Bosphoras الطلب والجهات المختارة والشروط والتأكيدات والمتابعة المحلية.`,
};

export function getProgrammaticSlug(service: ProgrammaticService, city: ProgrammaticCity, market: ProgrammaticMarket): string {
  const locale = market.language;
  return `/${service.slug[locale]}-${city.slug[locale]}-${market.countrySlug}`;
}

export function generateProgrammaticPages(): ProgrammaticPage[] {
  const pages: ProgrammaticPage[] = [];

  for (const market of programmaticMarkets) {
    const locale = market.language;
    for (const city of programmaticCities) {
      for (const service of programmaticServices) {
        const slug = getProgrammaticSlug(service, city, market);
        const rawServiceName = service.name[locale];
        const serviceName = serviceCoreName(rawServiceName, locale);
        const cityName = city.name[locale];
        const countryName = market.countryName;

        pages.push({
          id: `${service.id}-${city.id}-${market.id}`,
          locale,
          slug,
          title: localeTitle[locale](serviceName, cityName, countryName),
          metaDescription: localeMeta[locale](serviceName, cityName, countryName),
          service,
          city,
          market,
          isIndexable: service.priorityLevel === 1 || service.priorityLevel === 2 || service.priorityLevel === 3,
        });
      }
    }
  }

  return pages;
}

export const programmaticPages = generateProgrammaticPages();

export function getProgrammaticPageBySlug(locale: Locale, slug: string): ProgrammaticPage | undefined {
  const normalized = slug.startsWith('/') ? slug : `/${slug}`;
  return programmaticPages.find((page) => page.locale === locale && page.slug === normalized);
}

export function getProgrammaticPagesForLocale(locale: Locale): ProgrammaticPage[] {
  return programmaticPages.filter((page) => page.locale === locale);
}

export function getProgrammaticStats() {
  return {
    services: programmaticServices.length,
    cities: programmaticCities.length,
    markets: programmaticMarkets.length,
    pages: programmaticPages.length,
  };
}
