import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { t, localeDir } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const isRtl = localeDir[locale] === 'rtl';
  const year = new Date().getFullYear();

  const slug = (id: string) => getSlugForPage(id, locale) ?? '/';

  const serviceLinks = [
    {
      label: locale === 'fr' ? 'Installation en Turquie' : locale === 'en' ? 'Relocate to Turkey' : locale === 'ru' ? 'Переезд в Турцию' : 'الانتقال إلى تركيا',
      href: slug('relocate'),
    },
    {
      label: locale === 'fr' ? 'Conseil Juridique & Fiscal' : locale === 'en' ? 'Legal & Tax Advisory' : locale === 'ru' ? 'Юридические услуги' : 'الاستشارات القانونية والضريبية',
      href: slug('legal-tax'),
    },
    {
      label: locale === 'fr' ? "Création d'Entreprise" : locale === 'en' ? 'Company Formation' : locale === 'ru' ? 'Создание компании' : 'تأسيس الشركات',
      href: slug('business-setup'),
    },
    {
      label: locale === 'fr' ? 'Immobilier & Relocation' : locale === 'en' ? 'Property & Relocation' : locale === 'ru' ? 'Недвижимость' : 'العقارات والانتقال',
      href: slug('property'),
    },
    {
      label: locale === 'fr' ? 'Transport VIP' : locale === 'en' ? 'VIP Transport' : locale === 'ru' ? 'VIP-транспорт' : 'النقل الفاخر',
      href: slug('transport'),
    },
  ];

  const cityLinks = [
    { label: locale === 'ar' ? 'إسطنبول' : locale === 'ru' ? 'Стамбул' : 'Istanbul', href: slug('istanbul') },
    { label: locale === 'ar' ? 'بودروم' : locale === 'ru' ? 'Бодрум' : 'Bodrum', href: slug('bodrum') },
    { label: locale === 'ar' ? 'أنطاليا' : locale === 'ru' ? 'Анталья' : 'Antalya', href: slug('antalya') },
  ];

  const legalLinks = [
    { label: t(locale, 'footer.legal'), href: slug('compliance') },
    { label: t(locale, 'footer.privacy'), href: slug('compliance') },
    { label: t(locale, 'footer.contact'), href: slug('private-assessment') },
  ];

  return (
    <footer
      className="bg-[hsl(220,45%,8%)] border-t border-[hsl(220,35%,15%)]"
      dir={localeDir[locale]}
      aria-label="Pied de page"
    >
      {/* Gold rule top */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[hsl(42,65%,52%)]/40 to-transparent" aria-hidden="true" />

      <div className="container-editorial py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href={getLocalePath(locale, '/')}
              className="inline-flex flex-col leading-none group mb-6"
              aria-label="Bosphoras — Accueil"
            >
              <span className="text-[hsl(45,30%,96%)] font-serif text-xl tracking-[0.15em] uppercase font-semibold group-hover:text-[hsl(42,65%,52%)] transition-colors duration-300">
                Bosphoras
              </span>
              <span className="text-[hsl(42,65%,45%)] text-[0.6rem] tracking-[0.25em] uppercase mt-1">
                {t(locale, 'footer.tagline')}
              </span>
            </Link>
            <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed max-w-xs">
              {locale === 'fr' && 'Bureau privé pour investisseurs internationaux, familles et entrepreneurs en Turquie.'}
              {locale === 'en' && 'Private office for international investors, families and entrepreneurs in Turkey.'}
              {locale === 'ru' && 'Частный офис для международных инвесторов, семей и предпринимателей в Турции.'}
              {locale === 'ar' && 'مكتب خاص للمستثمرين الدوليين والعائلات ورجال الأعمال في تركيا.'}
            </p>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-[hsl(45,30%,96%)] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
              {t(locale, 'nav.services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalePath(locale, link.href)}
                    className="text-[hsl(220,10%,55%)] text-sm hover:text-[hsl(42,65%,52%)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations column */}
          <div>
            <h3 className="text-[hsl(45,30%,96%)] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
              {t(locale, 'nav.cities')}
            </h3>
            <ul className="space-y-3">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalePath(locale, link.href)}
                    className="text-[hsl(220,10%,55%)] text-sm hover:text-[hsl(42,65%,52%)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal column */}
          <div>
            <h3 className="text-[hsl(45,30%,96%)] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
              {locale === 'fr' ? 'Informations' : locale === 'en' ? 'Information' : locale === 'ru' ? 'Информация' : 'معلومات'}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLocalePath(locale, link.href)}
                    className="text-[hsl(220,10%,55%)] text-sm hover:text-[hsl(42,65%,52%)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={getLocalePath(locale, slug('membership-card'))}
                  className="text-[hsl(42,65%,45%)] text-sm hover:text-[hsl(42,65%,60%)] transition-colors duration-200 font-medium"
                >
                  {t(locale, 'nav.membership')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[hsl(220,35%,15%)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[hsl(220,10%,40%)] text-xs tracking-[0.1em]">
            © {year} Bosphoras. {t(locale, 'footer.rights')}
          </p>
          <p className="text-[hsl(220,10%,35%)] text-xs tracking-[0.15em] uppercase">
            Istanbul · Bodrum · Antalya
          </p>
        </div>
      </div>
    </footer>
  );
}
