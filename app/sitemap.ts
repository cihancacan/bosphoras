import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { siteUrl } from '@/lib/routes';
import { allPages } from '@/data/pages';
import { getCanonicalUrl } from '@/lib/routes';
import { highPotentialGuides } from '@/data/highPotentialPages';
import { programmaticPages } from '@/data/programmatic/pages';
import { ENABLE_ALL_PROGRAMMATIC_PAGES, ENABLE_PRIORITY_3_IN_SITEMAP } from '@/lib/launchConfig';

function programmaticPriority(priorityLevel: 1 | 2 | 3) {
  if (priorityLevel === 1) return 0.75;
  if (priorityLevel === 2) return 0.65;
  return 0.45;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of allPages[locale]) {
      const url = getCanonicalUrl(locale, page.slug);
      entries.push({
        url,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: page.id === 'home' ? 1.0 : page.id === 'private-assessment' ? 0.9 : 0.8,
      });
    }
  }

  for (const guide of highPotentialGuides) {
    entries.push({
      url: getCanonicalUrl(guide.locale, guide.slug),
      lastModified: new Date(guide.updatedAt),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  }

  if (ENABLE_ALL_PROGRAMMATIC_PAGES) {
    for (const page of programmaticPages) {
      if (page.service.priorityLevel === 3 && !ENABLE_PRIORITY_3_IN_SITEMAP) continue;

      entries.push({
        url: getCanonicalUrl(page.locale, page.slug),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: programmaticPriority(page.service.priorityLevel),
      });
    }
  }

  const foreignIncomeTaxPages = [
    'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers',
    'https://bosphoras.com/en/turkey-tax-exemption-foreign-income',
    'https://bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody',
    'https://bosphoras.com/ar/turkey-tax-exemption-foreign-income',
  ];

  const turkeyTaxClusterPages = [
    'https://bosphoras.com/strategie-fiscale-turquie-investisseurs-etrangers',
    'https://bosphoras.com/en/turkey-tax-strategy-foreign-investors',
    'https://bosphoras.com/ru/nalogovaya-strategiya-turtsii-inostrannye-investory',
    'https://bosphoras.com/ar/turkey-tax-strategy-foreign-investors',
    'https://bosphoras.com/exoneration-fiscale-turquie-20-ans-nouveaux-residents',
    'https://bosphoras.com/en/turkey-20-year-tax-exemption-new-residents',
    'https://bosphoras.com/ru/turtsiya-20-let-nalogovaya-lgota-novye-rezidenty',
    'https://bosphoras.com/ar/turkey-20-year-tax-exemption-new-residents',
    'https://bosphoras.com/istanbul-finance-center-avantages-fiscaux-investisseurs',
    'https://bosphoras.com/en/istanbul-finance-center-tax-benefits-investors',
    'https://bosphoras.com/ru/istanbul-finance-center-nalogovye-lgoty-investory',
    'https://bosphoras.com/ar/istanbul-finance-center-tax-benefits-investors',
    'https://bosphoras.com/societe-turquie-transit-trade-commerce-international',
    'https://bosphoras.com/en/turkey-company-transit-trade-international-commerce',
    'https://bosphoras.com/ru/kompaniya-turtsiya-tranzitnaya-torgovlya',
    'https://bosphoras.com/ar/turkey-company-transit-trade-international-commerce',
    'https://bosphoras.com/centres-services-qualifies-turquie-avantages-fiscaux',
    'https://bosphoras.com/en/qualified-service-centers-turkey-tax-benefits',
    'https://bosphoras.com/ru/kvalifitsirovannye-servisnye-tsentry-turtsiya',
    'https://bosphoras.com/ar/qualified-service-centers-turkey-tax-benefits',
    'https://bosphoras.com/family-office-turquie-istanbul',
    'https://bosphoras.com/en/family-office-turkey-istanbul',
    'https://bosphoras.com/ru/family-office-turtsiya-stambul',
    'https://bosphoras.com/ar/family-office-turkey-istanbul',
    'https://bosphoras.com/industrie-fabrication-turquie-impot-societe-12-5',
    'https://bosphoras.com/en/turkey-manufacturing-corporate-tax-12-5',
    'https://bosphoras.com/ru/proizvodstvo-turtsiya-nalog-na-pribyl-12-5',
    'https://bosphoras.com/ar/turkey-manufacturing-corporate-tax-12-5',
    'https://bosphoras.com/turquie-vs-dubai-investisseurs-fiscalite',
    'https://bosphoras.com/en/turkey-vs-dubai-investors-tax',
    'https://bosphoras.com/ru/turtsiya-vs-dubai-investory-nalogi',
    'https://bosphoras.com/ar/turkey-vs-dubai-investors-tax',
  ];

  const secondWavePages = [
    'https://bosphoras.com/agro-industrie-turquie-investissement-fiscalite',
    'https://bosphoras.com/en/agribusiness-turkey-investment-tax',
    'https://bosphoras.com/ru/agropromyshlennost-turtsiya-investitsii-nalogi',
    'https://bosphoras.com/ar/agribusiness-turkey-investment-tax',
    'https://bosphoras.com/startup-turquie-avantages-fiscaux-investisseurs',
    'https://bosphoras.com/en/startup-turkey-tax-benefits-investors',
    'https://bosphoras.com/ru/startup-turtsiya-nalogovye-lgoty-investory',
    'https://bosphoras.com/ar/startup-turkey-tax-benefits-investors',
    'https://bosphoras.com/finance-fintech-turquie-istanbul-finance-center',
    'https://bosphoras.com/en/finance-fintech-turkey-istanbul-finance-center',
    'https://bosphoras.com/ru/finansy-fintech-turtsiya-istanbul-finance-center',
    'https://bosphoras.com/ar/finance-fintech-turkey-istanbul-finance-center',
    'https://bosphoras.com/import-export-turquie-transit-trade',
    'https://bosphoras.com/en/import-export-turkey-transit-trade',
    'https://bosphoras.com/ru/import-export-turtsiya-tranzitnaya-torgovlya',
    'https://bosphoras.com/ar/import-export-turkey-transit-trade',
    'https://bosphoras.com/holding-siege-regional-turquie',
    'https://bosphoras.com/en/holding-regional-headquarters-turkey',
    'https://bosphoras.com/ru/holding-regionalnyy-ofis-turtsiya',
    'https://bosphoras.com/ar/holding-regional-headquarters-turkey',
    'https://bosphoras.com/residence-fiscale-turquie-immobilier-investisseurs',
    'https://bosphoras.com/en/turkey-tax-residence-property-investors',
    'https://bosphoras.com/ru/nalogovaya-rezidentsiya-turtsiya-nedvizhimost-investory',
    'https://bosphoras.com/ar/turkey-tax-residence-property-investors',
    'https://bosphoras.com/turquie-vs-portugal-residence-fiscale-investisseurs',
    'https://bosphoras.com/en/turkey-vs-portugal-tax-residence-investors',
    'https://bosphoras.com/ru/turtsiya-vs-portugaliya-nalogovaya-rezidentsiya',
    'https://bosphoras.com/ar/turkey-vs-portugal-tax-residence-investors',
    'https://bosphoras.com/turquie-vs-monaco-family-office-residence',
    'https://bosphoras.com/en/turkey-vs-monaco-family-office-residence',
    'https://bosphoras.com/ru/turtsiya-vs-monako-family-office-rezidentsiya',
    'https://bosphoras.com/ar/turkey-vs-monaco-family-office-residence',
    'https://bosphoras.com/turquie-singapour-hong-kong-transit-trade',
    'https://bosphoras.com/en/turkey-singapore-hong-kong-transit-trade',
    'https://bosphoras.com/ru/turtsiya-singapur-gonkong-tranzitnaya-torgovlya',
    'https://bosphoras.com/ar/turkey-singapore-hong-kong-transit-trade',
  ];

  for (const url of [...foreignIncomeTaxPages, ...turkeyTaxClusterPages, ...secondWavePages]) {
    entries.push({
      url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  }

  return entries;
}

export { siteUrl };
