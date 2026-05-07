import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { highPotentialGuides } from '@/data/highPotentialPages';

const foreignIncomeTaxGuide: Record<Locale, { href: string; label: string }> = {
  fr: {
    href: '/exoneration-fiscale-turquie-revenus-etrangers',
    label: 'Exonération fiscale en Turquie sur les revenus étrangers : ce que les investisseurs doivent vérifier',
  },
  en: {
    href: '/en/turkey-tax-exemption-foreign-income',
    label: 'Turkey tax exemption on foreign income: what investors should verify',
  },
  ru: {
    href: '/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody',
    label: 'Налоговая льгота в Турции на иностранные доходы: что нужно проверить инвесторам',
  },
  ar: {
    href: '/ar/turkey-tax-exemption-foreign-income',
    label: 'الإعفاء الضريبي في تركيا على الدخل الأجنبي: ما الذي يجب على المستثمرين التحقق منه',
  },
};

export function FooterGuideLinks({ locale }: { locale: Locale }) {
  const guides = highPotentialGuides.filter((guide) => guide.locale === locale);
  const extraGuide = foreignIncomeTaxGuide[locale];

  const title =
    locale === 'fr'
      ? 'Guides privés'
      : locale === 'en'
        ? 'Private guides'
        : locale === 'ru'
          ? 'Частные гиды'
          : 'أدلة خاصة';

  const intro =
    locale === 'fr'
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
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(45,30%,96%)]">
            {title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[hsl(220,10%,55%)]">{intro}</p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
        <Link
          href={extraGuide.href}
          className="border border-[hsl(42,65%,52%)]/45 bg-[hsl(42,65%,52%)]/[0.06] p-4 text-sm leading-6 text-[hsl(42,65%,58%)] transition-colors duration-200 hover:border-[hsl(42,65%,52%)] hover:text-[hsl(42,65%,68%)]"
        >
          {extraGuide.label}
        </Link>

        {guides.map((guide) => (
          <Link
            key={`${guide.locale}-${guide.id}`}
            href={getLocalePath(locale, guide.slug)}
            className="border border-[hsl(220,35%,15%)] bg-white/[0.02] p-4 text-sm leading-6 text-[hsl(220,10%,55%)] transition-colors duration-200 hover:border-[hsl(42,65%,52%)]/45 hover:text-[hsl(42,65%,52%)]"
          >
            {guide.h1}
          </Link>
        ))}
      </div>
    </div>
  );
}
