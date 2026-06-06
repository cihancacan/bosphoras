import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { siteUrl } from '@/lib/routes';
import { allPages } from '@/data/pages';
import { getCanonicalUrl } from '@/lib/routes';
import { highPotentialGuides } from '@/data/highPotentialPages';
import { programmaticPages } from '@/data/programmatic/pages';
import { ENABLE_ALL_PROGRAMMATIC_PAGES, ENABLE_PRIORITY_3_IN_SITEMAP } from '@/lib/launchConfig';
import { longTailTaxSitemapUrls } from '@/data/longTailTaxRoutes';
import { allBosphorasSeoPages } from '@/data/bosphorasSeoRegistry';
import {
  getTransferKeywordHref,
  transferKeywordClusters,
  transferLocales,
  transferMainPaths,
} from '@/lib/transferKeywordSeo';

function programmaticPriority(priorityLevel: 1 | 2 | 3) {
  if (priorityLevel === 1) return 0.75;
  if (priorityLevel === 2) return 0.65;
  return 0.45;
}

function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

function normalizeDomain(url: string) {
  return url.replace('https://www.bosphoras.com', siteUrl).replace('https://bosphoras.com', siteUrl);
}

function encodeSitemapUrl(url: string) {
  return encodeURI(normalizeDomain(url));
}

function encodedAlternates(paths: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(paths).map(([lang, url]) => [lang, encodeSitemapUrl(url)])
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();

  function addEntry(entry: MetadataRoute.Sitemap[number]) {
    const encodedUrl = encodeSitemapUrl(entry.url);
    if (seenUrls.has(encodedUrl)) return;
    seenUrls.add(encodedUrl);
    entries.push({ ...entry, url: encodedUrl });
  }

  for (const locale of locales) {
    for (const page of allPages[locale]) {
      const url = getCanonicalUrl(locale, page.slug);
      addEntry({
        url,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: page.id === 'home' ? 1.0 : page.id === 'private-assessment' ? 0.9 : 0.8,
      });
    }
  }

  for (const guide of highPotentialGuides) {
    addEntry({
      url: getCanonicalUrl(guide.locale, guide.slug),
      lastModified: new Date(guide.updatedAt),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  }

  if (ENABLE_ALL_PROGRAMMATIC_PAGES) {
    for (const page of programmaticPages) {
      if (page.service.priorityLevel === 3 && !ENABLE_PRIORITY_3_IN_SITEMAP) continue;

      addEntry({
        url: getCanonicalUrl(page.locale, page.slug),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: programmaticPriority(page.service.priorityLevel),
      });
    }
  }

  const legacySeoPages = [
    'https://www.bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers',
    'https://www.bosphoras.com/en/turkey-tax-exemption-foreign-income',
    'https://www.bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody',
    'https://www.bosphoras.com/ar/turkey-tax-exemption-foreign-income',
    'https://www.bosphoras.com/strategie-fiscale-turquie-investisseurs-etrangers',
    'https://www.bosphoras.com/en/turkey-tax-strategy-foreign-investors',
    'https://www.bosphoras.com/ru/nalogovaya-strategiya-turtsii-inostrannye-investory',
    'https://www.bosphoras.com/ar/turkey-tax-strategy-foreign-investors',
    'https://www.bosphoras.com/exoneration-fiscale-turquie-20-ans-nouveaux-residents',
    'https://www.bosphoras.com/en/turkey-20-year-tax-exemption-new-residents',
    'https://www.bosphoras.com/ru/turtsiya-20-let-nalogovaya-lgota-novye-rezidenty',
    'https://www.bosphoras.com/ar/turkey-20-year-tax-exemption-new-residents',
    'https://www.bosphoras.com/istanbul-finance-center-avantages-fiscaux-investisseurs',
    'https://www.bosphoras.com/en/istanbul-finance-center-tax-benefits-investors',
    'https://www.bosphoras.com/ru/istanbul-finance-center-nalogovye-lgoty-investory',
    'https://www.bosphoras.com/ar/istanbul-finance-center-tax-benefits-investors',
    'https://www.bosphoras.com/societe-turquie-transit-trade-commerce-international',
    'https://www.bosphoras.com/en/turkey-company-transit-trade-international-commerce',
    'https://www.bosphoras.com/ru/kompaniya-turtsiya-tranzitnaya-torgovlya',
    'https://www.bosphoras.com/ar/turkey-company-transit-trade-international-commerce',
    'https://www.bosphoras.com/centres-services-qualifies-turquie-avantages-fiscaux',
    'https://www.bosphoras.com/en/qualified-service-centers-turkey-tax-benefits',
    'https://www.bosphoras.com/ru/kvalifitsirovannye-servisnye-tsentry-turtsiya',
    'https://www.bosphoras.com/ar/qualified-service-centers-turkey-tax-benefits',
    'https://www.bosphoras.com/family-office-turquie-istanbul',
    'https://www.bosphoras.com/en/family-office-turkey-istanbul',
    'https://www.bosphoras.com/ru/family-office-turtsiya-stambul',
    'https://www.bosphoras.com/ar/family-office-turkey-istanbul',
    'https://www.bosphoras.com/industrie-fabrication-turquie-impot-societe-12-5',
    'https://www.bosphoras.com/en/turkey-manufacturing-corporate-tax-12-5',
    'https://www.bosphoras.com/ru/proizvodstvo-turtsiya-nalog-na-pribyl-12-5',
    'https://www.bosphoras.com/ar/turkey-manufacturing-corporate-tax-12-5',
    'https://www.bosphoras.com/turquie-vs-dubai-investisseurs-fiscalite',
    'https://www.bosphoras.com/en/turkey-vs-dubai-investors-tax',
    'https://www.bosphoras.com/ru/turtsiya-vs-dubai-investory-nalogi',
    'https://www.bosphoras.com/ar/turkey-vs-dubai-investors-tax',
  ];

  for (const url of [...legacySeoPages, ...longTailTaxSitemapUrls]) {
    addEntry({
      url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  }

  for (const page of allBosphorasSeoPages) {
    const alternates = {
      fr: absoluteUrl(page.slugs.fr),
      en: absoluteUrl(page.slugs.en),
      ru: absoluteUrl(page.slugs.ru),
      ar: absoluteUrl(page.slugs.ar),
      'x-default': absoluteUrl(page.slugs.fr),
    };

    for (const urlPath of Object.values(page.slugs)) {
      addEntry({
        url: absoluteUrl(urlPath),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.96,
        alternates: {
          languages: encodedAlternates(alternates),
        },
      });
    }
  }

  for (const locale of transferLocales) {
    addEntry({
      url: absoluteUrl(transferMainPaths[locale]),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.98,
    });

    for (const group of transferKeywordClusters[locale]) {
      for (const term of group.terms) {
        addEntry({
          url: absoluteUrl(getTransferKeywordHref(locale, term)),
          lastModified: now,
          changeFrequency: 'weekly',
          priority: 0.92,
        });
      }
    }
  }

  return entries;
}

export { siteUrl };
