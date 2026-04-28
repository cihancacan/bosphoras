import type { Locale } from '@/lib/i18n';

export interface HPSection {
  id: string;
  heading: string;
  body: string;
  bullets?: string[];
}

export interface HPFaq {
  question: string;
  answer: string;
}

export interface HPCityRelevance {
  city: 'istanbul' | 'bodrum' | 'antalya';
  note: string;
}

export interface HPInternalLink {
  label: string;
  pageId: string;
}

export interface HighPotentialPage {
  id: string;
  locale: Locale;
  pathSlug: string;
  title: string;
  metaDescription: string;
  h1: string;
  shortAnswer: string;
  toc: { id: string; label: string }[];
  sections: HPSection[];
  cityRelevance: HPCityRelevance[];
  serviceRelevance: { label: string; note: string }[];
  legalCaution: string;
  bosphorasAssistance: string;
  faqs: HPFaq[];
  internalLinks: HPInternalLink[];
  lastUpdated: string;
  keywords: string[];
}

export interface HPTopicSlugMap {
  id: string;
  slugs: Record<Locale, string>;
}

export const hpTopicSlugs: HPTopicSlugMap[] = [
  {
    id: 'tax-exemption-20-years',
    slugs: {
      fr: '/exoneration-fiscale-turquie-20-ans-etrangers',
      en: '/turkey-20-year-tax-exemption-foreigners',
      ru: '/nalogovaya-lgota-turtsiya-20-let-inostrantsy',
      ar: '/turkey-20-year-tax-exemption-foreigners',
    },
  },
  {
    id: 'relocate-istanbul-bodrum-antalya',
    slugs: {
      fr: '/comment-s-installer-en-turquie-istanbul-bodrum-antalya',
      en: '/relocate-to-turkey-istanbul-bodrum-antalya',
      ru: '/kak-pereehat-v-turtsiyu-stambul-bodrum-antalia',
      ar: '/relocate-to-turkey-istanbul-bodrum-antalya',
    },
  },
  {
    id: 'moving-to-istanbul',
    slugs: {
      fr: '/s-installer-a-istanbul-en-tant-qu-etranger',
      en: '/moving-to-istanbul-as-a-foreigner',
      ru: '/pereezd-v-stambul-dlya-inostrantsev',
      ar: '/moving-to-istanbul-as-a-foreigner',
    },
  },
  {
    id: 'moving-to-bodrum',
    slugs: {
      fr: '/s-installer-a-bodrum-familles-investisseurs',
      en: '/moving-to-bodrum-families-investors',
      ru: '/pereezd-v-bodrum-semi-investory',
      ar: '/moving-to-bodrum-families-investors',
    },
  },
  {
    id: 'tax-residency',
    slugs: {
      fr: '/residence-fiscale-turquie-etrangers',
      en: '/turkey-tax-residency-foreigners',
      ru: '/nalogovoe-rezidentstvo-turtsii-inostrantsy',
      ar: '/turkey-tax-residency-foreigners',
    },
  },
  {
    id: 'health-insurance',
    slugs: {
      fr: '/assurance-sante-turquie-expatries',
      en: '/health-insurance-turkey-expats',
      ru: '/meditsinskaya-strahovka-turtsiya-expaty',
      ar: '/health-insurance-turkey-expats',
    },
  },
  {
    id: 'company-setup',
    slugs: {
      fr: '/creer-entreprise-turquie-etranger',
      en: '/company-setup-turkey-foreigner',
      ru: '/otkryt-kompaniyu-v-turtsii-inostrantsu',
      ar: '/company-setup-turkey-foreigner',
    },
  },
  {
    id: 'dubai-investors-turkey',
    slugs: {
      fr: '/investisseurs-dubai-pourquoi-regarder-turquie',
      en: '/dubai-investors-why-look-at-turkey',
      ru: '/investory-dubaya-pochemu-turtsiya',
      ar: '/dubai-investors-why-look-at-turkey',
    },
  },
  {
    id: 'private-concierge-istanbul',
    slugs: {
      fr: '/conciergerie-privee-istanbul-investisseurs-internationaux',
      en: '/private-concierge-istanbul-international-investors',
      ru: '/chastnyy-konsyerzh-stambul-investory',
      ar: '/private-concierge-istanbul-international-investors',
    },
  },
  {
    id: 'rent-or-buy',
    slugs: {
      fr: '/louer-ou-acheter-en-turquie-avant-s-installer',
      en: '/rent-or-buy-in-turkey-before-relocating',
      ru: '/arendovat-ili-pokupat-v-turtsii',
      ar: '/rent-or-buy-in-turkey-before-relocating',
    },
  },
];

export function getHpSlug(topicId: string, locale: Locale): string | undefined {
  return hpTopicSlugs.find((t) => t.id === topicId)?.slugs[locale];
}

export function findHpTopicBySlug(locale: Locale, pathSlug: string): HPTopicSlugMap | undefined {
  const normalized = pathSlug.startsWith('/') ? pathSlug : `/${pathSlug}`;
  return hpTopicSlugs.find((t) => t.slugs[locale] === normalized);
}
