'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Locale } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { highPotentialGuides } from '@/data/highPotentialPages';

const foreignIncomeTaxGuide: Record<Locale, { href: string; label: string }> = {
  fr: { href: '/exoneration-fiscale-turquie-revenus-etrangers', label: 'Exonération fiscale en Turquie sur les revenus étrangers : ce que les investisseurs doivent vérifier' },
  en: { href: '/en/turkey-tax-exemption-foreign-income', label: 'Turkey tax exemption on foreign income: what investors should verify' },
  ru: { href: '/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody', label: 'Налоговая льгота в Турции на иностранные доходы: что нужно проверить инвесторам' },
  ar: { href: '/ar/turkey-tax-exemption-foreign-income', label: 'الإعفاء الضريبي في تركيا على الدخل الأجنبي: ما الذي يجب على المستثمرين التحقق منه' },
};

const taxClusterGuides: Record<Locale, Array<{ href: string; label: string }>> = {
  fr: [
    { href: '/strategie-fiscale-turquie-investisseurs-etrangers', label: 'Stratégie fiscale Turquie 2026 pour investisseurs étrangers' },
    { href: '/exoneration-fiscale-turquie-20-ans-nouveaux-residents', label: 'Exonération fiscale Turquie 20 ans pour nouveaux résidents' },
    { href: '/istanbul-finance-center-avantages-fiscaux-investisseurs', label: 'Istanbul Finance Center : avantages fiscaux pour investisseurs' },
    { href: '/societe-turquie-transit-trade-commerce-international', label: 'Créer une société en Turquie pour le transit trade' },
    { href: '/centres-services-qualifies-turquie-avantages-fiscaux', label: 'Centres de services qualifiés en Turquie' },
    { href: '/family-office-turquie-istanbul', label: 'Family office en Turquie à Istanbul' },
    { href: '/industrie-fabrication-turquie-impot-societe-12-5', label: 'Industrie en Turquie : impôt société 12,5 % pour fabricants' },
    { href: '/turquie-vs-dubai-investisseurs-fiscalite', label: 'Turquie vs Dubaï pour investisseurs et fiscalité' },
  ],
  en: [
    { href: '/en/turkey-tax-strategy-foreign-investors', label: 'Turkey tax strategy 2026 for foreign investors' },
    { href: '/en/turkey-20-year-tax-exemption-new-residents', label: 'Turkey 20-year tax exemption for new residents' },
    { href: '/en/istanbul-finance-center-tax-benefits-investors', label: 'Istanbul Finance Center tax benefits for investors' },
    { href: '/en/turkey-company-transit-trade-international-commerce', label: 'Create a Turkey company for transit trade' },
    { href: '/en/qualified-service-centers-turkey-tax-benefits', label: 'Qualified service centers in Turkey' },
    { href: '/en/family-office-turkey-istanbul', label: 'Family office in Turkey and Istanbul' },
    { href: '/en/turkey-manufacturing-corporate-tax-12-5', label: 'Manufacturing in Turkey: 12.5% corporate tax' },
    { href: '/en/turkey-vs-dubai-investors-tax', label: 'Turkey vs Dubai for investors and tax' },
  ],
  ru: [
    { href: '/ru/nalogovaya-strategiya-turtsii-inostrannye-investory', label: 'Налоговая стратегия Турции 2026 для иностранных инвесторов' },
    { href: '/ru/turtsiya-20-let-nalogovaya-lgota-novye-rezidenty', label: '20-летняя налоговая льгота Турции для новых резидентов' },
    { href: '/ru/istanbul-finance-center-nalogovye-lgoty-investory', label: 'Istanbul Finance Center: налоговые льготы для инвесторов' },
    { href: '/ru/kompaniya-turtsiya-tranzitnaya-torgovlya', label: 'Компания в Турции для транзитной торговли' },
    { href: '/ru/kvalifitsirovannye-servisnye-tsentry-turtsiya', label: 'Квалифицированные сервисные центры в Турции' },
    { href: '/ru/family-office-turtsiya-stambul', label: 'Family office в Турции и Стамбуле' },
    { href: '/ru/proizvodstvo-turtsiya-nalog-na-pribyl-12-5', label: 'Производство в Турции: налог на прибыль 12,5%' },
    { href: '/ru/turtsiya-vs-dubai-investory-nalogi', label: 'Турция vs Дубай для инвесторов и налогов' },
  ],
  ar: [
    { href: '/ar/turkey-tax-strategy-foreign-investors', label: 'استراتيجية الضرائب في تركيا 2026 للمستثمرين الأجانب' },
    { href: '/ar/turkey-20-year-tax-exemption-new-residents', label: 'الإعفاء الضريبي في تركيا 20 سنة للمقيمين الجدد' },
    { href: '/ar/istanbul-finance-center-tax-benefits-investors', label: 'Istanbul Finance Center: مزايا ضريبية للمستثمرين' },
    { href: '/ar/turkey-company-transit-trade-international-commerce', label: 'تأسيس شركة في تركيا للتجارة العابرة' },
    { href: '/ar/qualified-service-centers-turkey-tax-benefits', label: 'مراكز الخدمات المؤهلة في تركيا' },
    { href: '/ar/family-office-turkey-istanbul', label: 'Family office في تركيا وإسطنبول' },
    { href: '/ar/turkey-manufacturing-corporate-tax-12-5', label: 'الصناعة في تركيا: ضريبة شركات 12.5%' },
    { href: '/ar/turkey-vs-dubai-investors-tax', label: 'تركيا vs دبي للمستثمرين والضرائب' },
  ],
};

const secondWaveGuides: Record<Locale, Array<{ href: string; label: string }>> = {
  fr: [
    { href: '/agro-industrie-turquie-investissement-fiscalite', label: 'Agro-industrie en Turquie : investissement, fiscalité et export' },
    { href: '/startup-turquie-avantages-fiscaux-investisseurs', label: 'Startups en Turquie : fiscalité, stock-options et investisseurs' },
    { href: '/finance-fintech-turquie-istanbul-finance-center', label: 'Finance et fintech en Turquie : Istanbul Finance Center' },
    { href: '/import-export-turquie-transit-trade', label: 'Import-export en Turquie : transit trade et commerce international' },
    { href: '/holding-siege-regional-turquie', label: 'Holding et siège régional en Turquie' },
    { href: '/residence-fiscale-turquie-immobilier-investisseurs', label: 'Résidence fiscale, immobilier et investisseurs en Turquie' },
    { href: '/turquie-vs-portugal-residence-fiscale-investisseurs', label: 'Turquie vs Portugal : résidence fiscale pour investisseurs' },
    { href: '/turquie-vs-monaco-family-office-residence', label: 'Turquie vs Monaco : family office et résidence privée' },
    { href: '/turquie-singapour-hong-kong-transit-trade', label: 'Turquie, Singapour, Hong Kong : transit trade et hubs commerciaux' },
  ],
  en: [
    { href: '/en/agribusiness-turkey-investment-tax', label: 'Agribusiness in Turkey: investment, tax and export' },
    { href: '/en/startup-turkey-tax-benefits-investors', label: 'Startups in Turkey: tax, stock options and investors' },
    { href: '/en/finance-fintech-turkey-istanbul-finance-center', label: 'Finance and fintech in Turkey: Istanbul Finance Center' },
    { href: '/en/import-export-turkey-transit-trade', label: 'Import-export in Turkey: transit trade and international commerce' },
    { href: '/en/holding-regional-headquarters-turkey', label: 'Holding and regional headquarters in Turkey' },
    { href: '/en/turkey-tax-residence-property-investors', label: 'Tax residence, property and investors in Turkey' },
    { href: '/en/turkey-vs-portugal-tax-residence-investors', label: 'Turkey vs Portugal: tax residence for investors' },
    { href: '/en/turkey-vs-monaco-family-office-residence', label: 'Turkey vs Monaco: family office and private residence' },
    { href: '/en/turkey-singapore-hong-kong-transit-trade', label: 'Turkey, Singapore, Hong Kong: transit trade and commercial hubs' },
  ],
  ru: [
    { href: '/ru/agropromyshlennost-turtsiya-investitsii-nalogi', label: 'Агроиндустрия в Турции: инвестиции, налоги и экспорт' },
    { href: '/ru/startup-turtsiya-nalogovye-lgoty-investory', label: 'Стартапы в Турции: налоги, опционы и инвесторы' },
    { href: '/ru/finansy-fintech-turtsiya-istanbul-finance-center', label: 'Финансы и fintech в Турции: Istanbul Finance Center' },
    { href: '/ru/import-export-turtsiya-tranzitnaya-torgovlya', label: 'Импорт-экспорт в Турции: transit trade и международная торговля' },
    { href: '/ru/holding-regionalnyy-ofis-turtsiya', label: 'Холдинг и региональный офис в Турции' },
    { href: '/ru/nalogovaya-rezidentsiya-turtsiya-nedvizhimost-investory', label: 'Налоговая резиденция, недвижимость и инвесторы в Турции' },
    { href: '/ru/turtsiya-vs-portugaliya-nalogovaya-rezidentsiya', label: 'Турция vs Португалия: налоговая резиденция для инвесторов' },
    { href: '/ru/turtsiya-vs-monako-family-office-rezidentsiya', label: 'Турция vs Монако: family office и частная резиденция' },
    { href: '/ru/turtsiya-singapur-gonkong-tranzitnaya-torgovlya', label: 'Турция, Сингапур, Гонконг: transit trade и торговые хабы' },
  ],
  ar: [
    { href: '/ar/agribusiness-turkey-investment-tax', label: 'الصناعات الغذائية في تركيا: الاستثمار والضرائب والتصدير' },
    { href: '/ar/startup-turkey-tax-benefits-investors', label: 'الشركات الناشئة في تركيا: الضرائب وخيارات الأسهم والمستثمرون' },
    { href: '/ar/finance-fintech-turkey-istanbul-finance-center', label: 'المالية و fintech في تركيا: Istanbul Finance Center' },
    { href: '/ar/import-export-turkey-transit-trade', label: 'الاستيراد والتصدير في تركيا: التجارة العابرة والتجارة الدولية' },
    { href: '/ar/holding-regional-headquarters-turkey', label: 'الهولدينغ والمقر الإقليمي في تركيا' },
    { href: '/ar/turkey-tax-residence-property-investors', label: 'الإقامة الضريبية والعقار والمستثمرون في تركيا' },
    { href: '/ar/turkey-vs-portugal-tax-residence-investors', label: 'تركيا vs البرتغال: الإقامة الضريبية للمستثمرين' },
    { href: '/ar/turkey-vs-monaco-family-office-residence', label: 'تركيا vs موناكو: family office والإقامة الخاصة' },
    { href: '/ar/turkey-singapore-hong-kong-transit-trade', label: 'تركيا وسنغافورة وهونغ كونغ: التجارة العابرة والمراكز التجارية' },
  ],
};

const buttonLabels: Record<Locale, { more: string; less: string }> = {
  fr: { more: 'Afficher plus de guides', less: 'Réduire les guides' },
  en: { more: 'Show more guides', less: 'Show fewer guides' },
  ru: { more: 'Показать больше гидов', less: 'Свернуть гиды' },
  ar: { more: 'عرض المزيد من الأدلة', less: 'عرض عدد أقل' },
};

const INITIAL_GUIDES = 5;
const STEP_GUIDES = 5;

export function FooterGuideLinks({ locale }: { locale: Locale }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_GUIDES);
  const regularGuides = highPotentialGuides
    .filter((guide) => guide.locale === locale)
    .map((guide) => ({ href: getLocalePath(locale, guide.slug), label: guide.h1 }));

  const allGuides = [foreignIncomeTaxGuide[locale], ...taxClusterGuides[locale], ...secondWaveGuides[locale], ...regularGuides];
  const visibleGuides = allGuides.slice(0, visibleCount);
  const hasMore = visibleCount < allGuides.length;
  const hasExpanded = visibleCount > INITIAL_GUIDES;

  const title = locale === 'fr' ? 'Guides privés' : locale === 'en' ? 'Private guides' : locale === 'ru' ? 'Частные гиды' : 'أدلة خاصة';
  const intro = locale === 'fr'
    ? 'Les sujets les plus recherchés par les étrangers, investisseurs et familles qui envisagent la Turquie.'
    : locale === 'en'
      ? 'High-intent topics for foreigners, investors and families considering Turkey.'
      : locale === 'ru'
        ? 'Ключевые темы для иностранцев, инвесторов и семей, рассматривающих Турцию.'
        : 'مواضيع مهمة للأجانب والمستثمرين والعائلات الذين يفكرون في تركيا.';

  return (
    <div className="mt-14 border-t border-[hsl(220,35%,15%)] pt-10">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(45,30%,96%)]">{title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[hsl(220,10%,55%)]">{intro}</p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
        {visibleGuides.map((guide, index) => (
          <Link
            key={guide.href}
            href={guide.href}
            className={`p-4 text-sm leading-6 transition-colors duration-200 ${
              index === 0
                ? 'border border-[hsl(42,65%,52%)]/45 bg-[hsl(42,65%,52%)]/[0.06] text-[hsl(42,65%,58%)] hover:border-[hsl(42,65%,52%)] hover:text-[hsl(42,65%,68%)]'
                : 'border border-[hsl(42,65%,52%)]/25 bg-[hsl(42,65%,52%)]/[0.035] text-[hsl(220,10%,62%)] hover:border-[hsl(42,65%,52%)]/45 hover:text-[hsl(42,65%,52%)]'
            }`}
          >
            {guide.label}
          </Link>
        ))}
      </div>

      {(hasMore || hasExpanded) && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {hasMore && (
            <button
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + STEP_GUIDES, allGuides.length))}
              className="border border-[hsl(42,65%,52%)]/45 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(42,65%,58%)] transition-colors duration-200 hover:bg-[hsl(42,65%,52%)]/[0.08] hover:text-[hsl(42,65%,68%)]"
            >
              {buttonLabels[locale].more} +5
            </button>
          )}

          {hasExpanded && (
            <button
              type="button"
              onClick={() => setVisibleCount(INITIAL_GUIDES)}
              className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(220,10%,55%)] transition-colors duration-200 hover:text-[hsl(42,65%,52%)]"
            >
              {buttonLabels[locale].less}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
