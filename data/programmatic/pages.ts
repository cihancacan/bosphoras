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

const localeTitle: Record<Locale, (s: string, c: string, m: string) => string> = {
  fr: (s, c, m) => `${s} à ${c} pour ${m} | Bosphoras`,
  en: (s, c, m) => `${s} in ${c} for ${m} | Bosphoras`,
  ru: (s, c, m) => `${s} — ${c} для ${m} | Bosphoras`,
  ar: (s, c, m) => `${s} في ${c} لـ ${m} | Bosphoras`,
};

const localeMeta: Record<Locale, (s: string, c: string, m: string) => string> = {
  fr: (s, c, m) => `${s} à ${c} pour clients ${m}. Bosphoras coordonne les professionnels, la logistique, la conformité et l’accès privé en Turquie.`,
  en: (s, c, m) => `${s} in ${c} for ${m} clients. Bosphoras coordinates professionals, logistics, compliance and private access in Turkey.`,
  ru: (s, c, m) => `${s} в ${c} для клиентов из ${m}. Bosphoras координирует специалистов, логистику, compliance и private access в Турции.`,
  ar: (s, c, m) => `${s} في ${c} لعملاء ${m}. ينسق Bosphoras المهنيين واللوجستيات والامتثال والوصول الخاص في تركيا.`,
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
        const serviceName = service.name[locale];
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
