import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { t, localeDir } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';
import { FooterGuideLinks } from './FooterGuideLinks';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear();

  const slug = (id: string) => getSlugForPage(id, locale) ?? '/';
  const legalHref = (path: string) => getLocalePath(locale, path);

  const serviceLinks = [
    {
      label:
        locale === 'fr'
          ? 'Installation en Turquie'
          : locale === 'en'
            ? 'Relocate to Turkey'
            : locale === 'ru'
              ? 'Переезд в Турцию'
              : 'الانتقال إلى تركيا',
      href: getLocalePath(locale, slug('relocate')),
    },
    {
      label:
        locale === 'fr'
          ? 'Conseil Juridique & Fiscal'
          : locale === 'en'
            ? 'Legal & Tax Advisory'
            : locale === 'ru'
              ? 'Юридические и налоговые услуги'
              : 'الاستشارات القانونية والضريبية',
      href: getLocalePath(locale, slug('legal-tax')),
    },
    {
      label:
        locale === 'fr'
          ? "Création d'Entreprise"
          : locale === 'en'
            ? 'Company Formation'
            : locale === 'ru'
              ? 'Создание компании'
              : 'تأسيس الشركات',
      href: getLocalePath(locale, slug('business-setup')),
    },
    {
      label:
        locale === 'fr'
          ? 'Santé & Assurance'
          : locale === 'en'
            ? 'Health & Insurance'
            : locale === 'ru'
              ? 'Здоровье и страхование'
              : 'الصحة والتأمين',
      href: getLocalePath(locale, slug('health-insurance')),
    },
    {
      label:
        locale === 'fr'
          ? 'Immobilier & Relocation'
          : locale === 'en'
            ? 'Property & Relocation'
            : locale === 'ru'
              ? 'Недвижимость и переезд'
              : 'العقارات والانتقال',
      href: getLocalePath(locale, slug('property')),
    },
    {
      label:
        locale === 'fr'
          ? 'Transport VIP'
          : locale === 'en'
            ? 'VIP Transport'
            : locale === 'ru'
              ? 'VIP-транспорт'
              : 'النقل الفاخر',
      href: getLocalePath(locale, slug('transport')),
    },
  ];

  const cityLinks = [
    {
      label: locale === 'ar' ? 'إسطنبول' : locale === 'ru' ? 'Стамбул' : 'Istanbul',
      href: getLocalePath(locale, slug('istanbul')),
    },
    {
      label: locale === 'ar' ? 'بودروم' : locale === 'ru' ? 'Бодрум' : 'Bodrum',
      href: getLocalePath(locale, slug('bodrum')),
    },
    {
      label: locale === 'ar' ? 'أنطاليا' : locale === 'ru' ? 'Анталья' : 'Antalya',
      href: getLocalePath(locale, slug('antalya')),
    },
  ];

  const informationLinks = [
    {
      label:
        locale === 'fr'
          ? 'À propos'
          : locale === 'en'
            ? 'About'
            : locale === 'ru'
              ? 'О нас'
              : 'من نحن',
      href: getLocalePath(locale, slug('about')),
    },
    {
      label:
        locale === 'fr'
          ? 'Conformité & confiance'
          : locale === 'en'
            ? 'Compliance & Trust'
            : locale === 'ru'
              ? 'Комплаенс и доверие'
              : 'الامتثال والثقة',
      href: getLocalePath(locale, slug('compliance')),
    },
    {
      label:
        locale === 'fr'
          ? 'Cercle privé'
          : locale === 'en'
            ? 'Private Access Club'
            : locale === 'ru'
              ? 'Частный клуб'
              : 'النادي الخاص',
      href: getLocalePath(locale, slug('private-club')),
    },
    {
      label:
        locale === 'fr'
          ? 'Demande d’adhésion'
          : locale === 'en'
            ? 'Membership application'
            : locale === 'ru'
              ? 'Заявка на членство'
              : 'طلب عضوية',
      href: getLocalePath(locale, slug('membership-application')),
    },
    {
      label:
        locale === 'fr'
          ? 'Diagnostic privé'
          : locale === 'en'
            ? 'Private Assessment'
            : locale === 'ru'
              ? 'Частная консультация'
              : 'تقييم خاص',
      href: getLocalePath(locale, slug('private-assessment')),
    },
  ];

  const legalLinks = [
    {
      label:
        locale === 'fr'
          ? 'Mentions légales'
          : locale === 'en'
            ? 'Legal notice'
            : locale === 'ru'
              ? 'Правовая информация'
              : 'الإشعارات القانونية',
      href: legalHref('/mentions-legales'),
    },
    {
      label:
        locale === 'fr'
          ? 'CGU'
          : locale === 'en'
            ? 'Terms of Use'
            : locale === 'ru'
              ? 'Условия использования'
              : 'شروط الاستخدام',
      href: legalHref('/cgu'),
    },
    {
      label:
        locale === 'fr'
          ? 'CGV'
          : locale === 'en'
            ? 'Terms of Sale'
            : locale === 'ru'
              ? 'Условия продажи'
              : 'شروط البيع',
      href: legalHref('/cgv'),
    },
    {
      label:
        locale === 'fr'
          ? 'Confidentialité'
          : locale === 'en'
            ? 'Privacy Policy'
            : locale === 'ru'
              ? 'Политика конфиденциальности'
              : 'سياسة الخصوصية',
      href: legalHref('/confidentialite'),
    },
    {
      label: locale === 'ru' ? 'Cookies' : locale === 'ar' ? 'ملفات تعريف الارتباط' : 'Cookies',
      href: legalHref('/cookies'),
    },
    {
      label:
        locale === 'fr'
          ? 'Protection des informations confidentielles'
          : locale === 'en'
            ? 'Protection of Confidential Information'
            : locale === 'ru'
              ? 'Защита конфиденциальной информации'
              : 'حماية المعلومات السرية',
      href: legalHref('/protection-informations-confidentielles'),
    },
  ];

  const informationTitle =
    locale === 'fr'
      ? 'Informations'
      : locale === 'en'
        ? 'Information'
        : locale === 'ru'
          ? 'Информация'
          : 'معلومات';

  const legalTitle =
    locale === 'fr'
      ? 'Légal'
      : locale === 'en'
        ? 'Legal'
        : locale === 'ru'
          ? 'Правовая информация'
          : 'قانوني';

  const membershipLabel =
    locale === 'fr'
      ? 'Demande d’adhésion'
      : locale === 'en'
        ? 'Membership application'
        : locale === 'ru'
          ? 'Заявка на членство'
          : 'طلب عضوية';

  return (
    <footer
      className="border-t border-[hsl(220,35%,15%)] bg-[hsl(220,45%,8%)]"
      dir={localeDir[locale]}
      aria-label="Pied de page"
    >
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-[hsl(42,65%,52%)]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container-editorial py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link
              href={getLocalePath(locale, '/')}
              className="group mb-6 inline-flex flex-col leading-none"
              aria-label="Bosphoras — Accueil"
            >
              <span className="font-serif text-xl font-semibold uppercase tracking-[0.15em] text-[hsl(45,30%,96%)] transition-colors duration-300 group-hover:text-[hsl(42,65%,52%)]">
                Bosphoras
              </span>
              <span className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-[hsl(42,65%,45%)]">
                {t(locale, 'footer.tagline')}
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-[hsl(220,10%,55%)]">
              {locale === 'fr' &&
                'Bureau privé pour investisseurs internationaux, familles et entrepreneurs en Turquie.'}
              {locale === 'en' &&
                'Private office for international investors, families and entrepreneurs in Turkey.'}
              {locale === 'ru' &&
                'Частный офис для международных инвесторов, семей и предпринимателей в Турции.'}
              {locale === 'ar' &&
                'مكتب خاص للمستثمرين الدوليين والعائلات ورجال الأعمال في تركيا.'}
            </p>

            <div className="mt-7 space-y-2 text-sm text-[hsl(220,10%,55%)]">
              <p>88 Avenue des Ternes, 75017 Paris</p>
              <p>
                <a
                  href="tel:+33188842222"
                  className="transition-colors duration-200 hover:text-[hsl(42,65%,52%)]"
                >
                  01 88 84 22 22
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@bosphoras.com"
                  className="transition-colors duration-200 hover:text-[hsl(42,65%,52%)]"
                >
                  contact@bosphoras.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(45,30%,96%)]">
              {t(locale, 'nav.services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(220,10%,55%)] transition-colors duration-200 hover:text-[hsl(42,65%,52%)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(45,30%,96%)]">
              {t(locale, 'nav.cities')}
            </h3>
            <ul className="space-y-3">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(220,10%,55%)] transition-colors duration-200 hover:text-[hsl(42,65%,52%)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-5 mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(45,30%,96%)]">
              {informationTitle}
            </h3>
            <ul className="space-y-3">
              {informationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(220,10%,55%)] transition-colors duration-200 hover:text-[hsl(42,65%,52%)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[hsl(45,30%,96%)]">
              {legalTitle}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(220,10%,55%)] transition-colors duration-200 hover:text-[hsl(42,65%,52%)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href={getLocalePath(locale, slug('membership-application'))}
              className="mt-8 inline-flex border border-[hsl(42,65%,52%)] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[hsl(42,65%,52%)] transition-colors duration-200 hover:bg-[hsl(42,65%,52%)] hover:text-[hsl(220,45%,8%)]"
            >
              {membershipLabel}
            </Link>
          </div>
        </div>

        <FooterGuideLinks locale={locale} />

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[hsl(220,35%,15%)] pt-8 md:flex-row">
          <p className="text-xs tracking-[0.1em] text-[hsl(220,10%,40%)]">
            © {year} Bosphoras. {t(locale, 'footer.rights')}
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-[hsl(220,10%,35%)]">
            Paris · Istanbul · Londres · Almaty · Moscou · Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
