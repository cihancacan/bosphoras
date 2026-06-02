import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { siteUrl } from '@/lib/routes';
import { allPages } from '@/data/pages';
import { getCanonicalUrl } from '@/lib/routes';
import { highPotentialGuides } from '@/data/highPotentialPages';
import { programmaticPages } from '@/data/programmatic/pages';
import { ENABLE_ALL_PROGRAMMATIC_PAGES, ENABLE_PRIORITY_3_IN_SITEMAP } from '@/lib/launchConfig';
import { longTailTaxSitemapUrls } from '@/data/longTailTaxRoutes';
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();

  function addEntry(entry: MetadataRoute.Sitemap[number]) {
    if (seenUrls.has(entry.url)) return;
    seenUrls.add(entry.url);
    entries.push(entry);
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

  const foreignIncomeTaxPages = [
    'https://www.bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers',
    'https://www.bosphoras.com/en/turkey-tax-exemption-foreign-income',
    'https://www.bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody',
    'https://www.bosphoras.com/ar/turkey-tax-exemption-foreign-income',
  ];

  const turkeyTaxClusterPages = [
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

  const secondWavePages = [
    'https://www.bosphoras.com/agro-industrie-turquie-investissement-fiscalite',
    'https://www.bosphoras.com/en/agribusiness-turkey-investment-tax',
    'https://www.bosphoras.com/ru/agropromyshlennost-turtsiya-investitsii-nalogi',
    'https://www.bosphoras.com/ar/agribusiness-turkey-investment-tax',
    'https://www.bosphoras.com/startup-turquie-avantages-fiscaux-investisseurs',
    'https://www.bosphoras.com/en/startup-turkey-tax-benefits-investors',
    'https://www.bosphoras.com/ru/startup-turtsiya-nalogovye-lgoty-investory',
    'https://www.bosphoras.com/ar/startup-turkey-tax-benefits-investors',
    'https://www.bosphoras.com/finance-fintech-turquie-istanbul-finance-center',
    'https://www.bosphoras.com/en/finance-fintech-turkey-istanbul-finance-center',
    'https://www.bosphoras.com/ru/finansy-fintech-turtsiya-istanbul-finance-center',
    'https://www.bosphoras.com/ar/finance-fintech-turkey-istanbul-finance-center',
    'https://www.bosphoras.com/import-export-turquie-transit-trade',
    'https://www.bosphoras.com/en/import-export-turkey-transit-trade',
    'https://www.bosphoras.com/ru/import-export-turtsiya-tranzitnaya-torgovlya',
    'https://www.bosphoras.com/ar/import-export-turkey-transit-trade',
    'https://www.bosphoras.com/holding-siege-regional-turquie',
    'https://www.bosphoras.com/en/holding-regional-headquarters-turkey',
    'https://www.bosphoras.com/ru/holding-regionalnyy-ofis-turtsiya',
    'https://www.bosphoras.com/ar/holding-regional-headquarters-turkey',
    'https://www.bosphoras.com/residence-fiscale-turquie-immobilier-investisseurs',
    'https://www.bosphoras.com/en/turkey-tax-residence-property-investors',
    'https://www.bosphoras.com/ru/nalogovaya-rezidentsiya-turtsiya-nedvizhimost-investory',
    'https://www.bosphoras.com/ar/turkey-tax-residence-property-investors',
    'https://www.bosphoras.com/turquie-vs-portugal-residence-fiscale-investisseurs',
    'https://www.bosphoras.com/en/turkey-vs-portugal-tax-residence-investors',
    'https://www.bosphoras.com/ru/turtsiya-vs-portugaliya-nalogovaya-rezidentsiya',
    'https://www.bosphoras.com/ar/turkey-vs-portugal-tax-residence-investors',
    'https://www.bosphoras.com/turquie-vs-monaco-family-office-residence',
    'https://www.bosphoras.com/en/turkey-vs-monaco-family-office-residence',
    'https://www.bosphoras.com/ru/turtsiya-vs-monako-family-office-rezidentsiya',
    'https://www.bosphoras.com/ar/turkey-vs-monaco-family-office-residence',
    'https://www.bosphoras.com/turquie-singapour-hong-kong-transit-trade',
    'https://www.bosphoras.com/en/turkey-singapore-hong-kong-transit-trade',
    'https://www.bosphoras.com/ru/turtsiya-singapur-gonkong-tranzitnaya-torgovlya',
    'https://www.bosphoras.com/ar/turkey-singapore-hong-kong-transit-trade',
  ];

  for (const url of [...foreignIncomeTaxPages, ...turkeyTaxClusterPages, ...secondWavePages, ...longTailTaxSitemapUrls]) {
    addEntry({
      url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    });
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
