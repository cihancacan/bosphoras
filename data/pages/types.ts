import type { Locale } from '@/lib/i18n';

export type JsonLdType =
  | 'WebSite'
  | 'AboutPage'
  | 'Service'
  | 'Place'
  | 'CollectionPage'
  | 'ContactPage'
  | 'FAQPage';

export interface PageSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface PageFaq {
  question: string;
  answer: string;
}

export interface PageCta {
  label: string;
  href: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface InternalLink {
  pageId: string;
  label: string;
}

export interface MainPageContent {
  id: string;
  locale: Locale;
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  shortIntro: string;
  sections: PageSection[];
  faqs?: PageFaq[];
  cta: PageCta;
  jsonLdType: JsonLdType;
  internalLinks: InternalLink[];
}

export interface PageSlugMap {
  id: string;
  jsonLdType: JsonLdType;
  slugs: Record<Locale, string>;
}

export const pageSlugs: PageSlugMap[] = [
  {
    id: 'home',
    jsonLdType: 'WebSite',
    slugs: { fr: '/', en: '/', ru: '/', ar: '/' },
  },
  {
    id: 'about',
    jsonLdType: 'AboutPage',
    slugs: {
      fr: '/a-propos',
      en: '/about',
      ru: '/o-nas',
      ar: '/من-نحن',
    },
  },
  {
    id: 'services',
    jsonLdType: 'CollectionPage',
    slugs: {
      fr: '/services',
      en: '/services',
      ru: '/uslugi',
      ar: '/خدمات',
    },
  },
  {
    id: 'relocate',
    jsonLdType: 'Service',
    slugs: {
      fr: '/services/installation-en-turquie',
      en: '/services/relocate-to-turkey',
      ru: '/uslugi/pereezd-v-turtsiyu',
      ar: '/خدمات/الانتقال-إلى-تركيا',
    },
  },
  {
    id: 'istanbul',
    jsonLdType: 'Place',
    slugs: {
      fr: '/destinations/istanbul',
      en: '/destinations/istanbul',
      ru: '/napravleniya/stambul',
      ar: '/وجهات/إسطنبول',
    },
  },
  {
    id: 'bodrum',
    jsonLdType: 'Place',
    slugs: {
      fr: '/destinations/bodrum',
      en: '/destinations/bodrum',
      ru: '/napravleniya/bodrum',
      ar: '/وجهات/بودروم',
    },
  },
  {
    id: 'antalya',
    jsonLdType: 'Place',
    slugs: {
      fr: '/destinations/antalya',
      en: '/destinations/antalya',
      ru: '/napravleniya/antalya',
      ar: '/وجهات/أنطاليا',
    },
  },
  {
    id: 'legal-tax',
    jsonLdType: 'Service',
    slugs: {
      fr: '/services/conseil-juridique-fiscal',
      en: '/services/legal-tax-advisory',
      ru: '/uslugi/yuridicheskie-nalogovye-konsultatsii',
      ar: '/خدمات/استشارات-قانونية-ضريبية',
    },
  },
  {
    id: 'business-setup',
    jsonLdType: 'Service',
    slugs: {
      fr: '/services/creation-entreprise',
      en: '/services/business-setup',
      ru: '/uslugi/sozdanie-kompanii',
      ar: '/خدمات/تأسيس-الشركات',
    },
  },
  {
    id: 'health-insurance',
    jsonLdType: 'Service',
    slugs: {
      fr: '/services/sante-assurance',
      en: '/services/health-insurance',
      ru: '/uslugi/zdorove-strakhovanie',
      ar: '/خدمات/الصحة-والتأمين',
    },
  },
  {
    id: 'property',
    jsonLdType: 'Service',
    slugs: {
      fr: '/services/immobilier-relocation',
      en: '/services/property-relocation',
      ru: '/uslugi/nedvizhimost-pereezd',
      ar: '/خدمات/العقارات-والانتقال',
    },
  },
  {
    id: 'offices',
    jsonLdType: 'Service',
    slugs: {
      fr: '/services/bureaux',
      en: '/services/offices',
      ru: '/uslugi/ofisy',
      ar: '/خدمات/المكاتب',
    },
  },
  {
    id: 'transport',
    jsonLdType: 'Service',
    slugs: {
      fr: '/services/transport-vip',
      en: '/services/vip-transport',
      ru: '/uslugi/vip-transport',
      ar: '/خدمات/النقل-الفاخر',
    },
  },
  {
    id: 'private-club',
    jsonLdType: 'Service',
    slugs: {
      fr: '/cercle-prive',
      en: '/private-access-club',
      ru: '/chastnyy-klub',
      ar: '/النادي-الخاص',
    },
  },
  {
    id: 'membership-card',
    jsonLdType: 'Service',
    slugs: {
      fr: '/adhesion/carte-membre',
      en: '/membership/card',
      ru: '/chlenstvo/karta',
      ar: '/عضوية/البطاقة',
    },
  },
  {
    id: 'membership-application',
    jsonLdType: 'ContactPage',
    slugs: {
      fr: '/adhesion/demande-membre',
      en: '/membership/application',
      ru: '/chlenstvo/zayavka',
      ar: '/عضوية/طلب',
    },
  },
  {
    id: 'premium-cardholders',
    jsonLdType: 'Service',
    slugs: {
      fr: '/adhesion/membres-premium',
      en: '/membership/premium-cardholders',
      ru: '/chlenstvo/premium-uchastniki',
      ar: '/عضوية/الأعضاء-المميزون',
    },
  },
  {
    id: 'compliance',
    jsonLdType: 'AboutPage',
    slugs: {
      fr: '/conformite-confiance',
      en: '/compliance-trust',
      ru: '/komplaens-doverie',
      ar: '/الامتثال-والثقة',
    },
  },
  {
    id: 'partners',
    jsonLdType: 'AboutPage',
    slugs: {
      fr: '/partenaires-reseau',
      en: '/partners-network',
      ru: '/partnery-set',
      ar: '/الشركاء-والشبكة',
    },
  },
  {
    id: 'faq',
    jsonLdType: 'FAQPage',
    slugs: {
      fr: '/questions-frequentes',
      en: '/faq',
      ru: '/voprosy-otvety',
      ar: '/أسئلة-شائعة',
    },
  },
  {
    id: 'private-assessment',
    jsonLdType: 'ContactPage',
    slugs: {
      fr: '/diagnostic-prive',
      en: '/private-assessment',
      ru: '/chastnaya-konsultatsiya',
      ar: '/تقييم-خاص',
    },
  },
];

export function getSlugForPage(pageId: string, locale: Locale): string | undefined {
  return pageSlugs.find((p) => p.id === pageId)?.slugs[locale];
}

export function getJsonLdTypeForPage(pageId: string): JsonLdType | undefined {
  return pageSlugs.find((p) => p.id === pageId)?.jsonLdType;
}

export function findPageBySlug(
  locale: Locale,
  slug: string
): PageSlugMap | undefined {
  const normalized = slug.startsWith('/') ? slug : `/${slug}`;
  return pageSlugs.find((p) => p.slugs[locale] === normalized);
}
