import Link from 'next/link';
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

export function FooterGuideLinks({ locale }: { locale: Locale }) {
  const guides = highPotentialGuides.filter((guide) => guide.locale === locale);
  const extraGuide = foreignIncomeTaxGuide[locale];
  const taxGuides = taxClusterGuides[locale];

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
        <Link href={extraGuide.href} className="border border-[hsl(42,65%,52%)]/45 bg-[hsl(42,65%,52%)]/[0.06] p-4 text-sm leading-6 text-[hsl(42,65%,58%)] transition-colors duration-200 hover:border-[hsl(42,65%,52%)] hover:text-[hsl(42,65%,68%)]">
          {extraGuide.label}
        </Link>

        {taxGuides.map((guide) => (
          <Link key={guide.href} href={guide.href} className="border border-[hsl(42,65%,52%)]/25 bg-[hsl(42,65%,52%)]/[0.035] p-4 text-sm leading-6 text-[hsl(220,10%,62%)] transition-colors duration-200 hover:border-[hsl(42,65%,52%)]/45 hover:text-[hsl(42,65%,52%)]">
            {guide.label}
          </Link>
        ))}

        {guides.map((guide) => (
          <Link key={`${guide.locale}-${guide.id}`} href={getLocalePath(locale, guide.slug)} className="border border-[hsl(220,35%,15%)] bg-white/[0.02] p-4 text-sm leading-6 text-[hsl(220,10%,55%)] transition-colors duration-200 hover:border-[hsl(42,65%,52%)]/45 hover:text-[hsl(42,65%,52%)]">
            {guide.h1}
          </Link>
        ))}
      </div>
    </div>
  );
}
