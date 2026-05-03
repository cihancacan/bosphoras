'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { t, locales, localeNames } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage, pageSlugs } from '@/data/pages/types';
import { getEquivalentHighPotentialSlug } from '@/data/highPotentialPages';

interface HeaderProps {
  locale: Locale;
  currentPath?: string;
}

type MenuItem = { label: string; href: string; description?: string };

type MenuGroup = {
  label: string;
  href: string;
  items: MenuItem[];
};

export function Header({ locale, currentPath = '/' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const slug = (id: string) => getSlugForPage(id, locale) ?? '/';
  const linkTo = (id: string) => getLocalePath(locale, slug(id));

  const labels = {
    services: locale === 'fr' ? 'Services' : locale === 'en' ? 'Services' : locale === 'ru' ? 'Услуги' : 'الخدمات',
    destinations: locale === 'fr' ? 'Destinations' : locale === 'en' ? 'Destinations' : locale === 'ru' ? 'Направления' : 'الوجهات',
    privateAccess: locale === 'fr' ? 'Private Access' : locale === 'en' ? 'Private Access' : locale === 'ru' ? 'Private Access' : 'Private Access',
    information: locale === 'fr' ? 'Informations' : locale === 'en' ? 'Information' : locale === 'ru' ? 'Информация' : 'معلومات',
  };

  const groups: MenuGroup[] = [
    {
      label: labels.services,
      href: linkTo('services'),
      items: [
        {
          label: locale === 'fr' ? 'Installation en Turquie' : locale === 'en' ? 'Relocate to Turkey' : locale === 'ru' ? 'Переезд в Турцию' : 'الانتقال إلى تركيا',
          href: linkTo('relocate'),
          description: locale === 'fr' ? 'Résidence, famille, ville, démarches.' : locale === 'en' ? 'Residence, family, city, formalities.' : locale === 'ru' ? 'Резиденция, семья, город, процедуры.' : 'الإقامة، العائلة، المدينة والإجراءات.',
        },
        {
          label: locale === 'fr' ? 'Conseil Juridique & Fiscal' : locale === 'en' ? 'Legal & Tax Advisory' : locale === 'ru' ? 'Право и налоги' : 'القانون والضرائب',
          href: linkTo('legal-tax'),
          description: locale === 'fr' ? 'Avocats, fiscalistes, conformité.' : locale === 'en' ? 'Lawyers, tax advisors, compliance.' : locale === 'ru' ? 'Юристы, налоги, compliance.' : 'محامون، ضرائب وامتثال.',
        },
        {
          label: locale === 'fr' ? "Création d'Entreprise" : locale === 'en' ? 'Company Formation' : locale === 'ru' ? 'Создание компании' : 'تأسيس الشركات',
          href: linkTo('business-setup'),
          description: locale === 'fr' ? 'Société, comptabilité, bureaux.' : locale === 'en' ? 'Company, accounting, offices.' : locale === 'ru' ? 'Компания, бухгалтерия, офисы.' : 'شركة، محاسبة ومكاتب.',
        },
        {
          label: locale === 'fr' ? 'Santé & Assurance' : locale === 'en' ? 'Health & Insurance' : locale === 'ru' ? 'Здоровье и страхование' : 'الصحة والتأمين',
          href: linkTo('health-insurance'),
          description: locale === 'fr' ? 'Médecins, cliniques, assurances.' : locale === 'en' ? 'Doctors, clinics, insurance.' : locale === 'ru' ? 'Врачи, клиники, страхование.' : 'أطباء، عيادات وتأمين.',
        },
        {
          label: locale === 'fr' ? 'Immobilier & Relocation' : locale === 'en' ? 'Property & Relocation' : locale === 'ru' ? 'Недвижимость и переезд' : 'العقار والانتقال',
          href: linkTo('property'),
          description: locale === 'fr' ? 'Achat, location, installation.' : locale === 'en' ? 'Purchase, rental, relocation.' : locale === 'ru' ? 'Покупка, аренда, установка.' : 'شراء، إيجار وانتقال.',
        },
        {
          label: locale === 'fr' ? 'Conciergerie de Luxe' : locale === 'en' ? 'Luxury Concierge' : locale === 'ru' ? 'Luxury Concierge' : 'كونسيرج فاخر',
          href: linkTo('luxury-concierge'),
          description: locale === 'fr' ? 'Transport VIP, palaces, yachts, jets, shopping.' : locale === 'en' ? 'VIP transport, palaces, yachts, jets, shopping.' : locale === 'ru' ? 'VIP transport, palaces, яхты, jets, shopping.' : 'نقل VIP، فنادق فاخرة، يخوت، طائرات وتسوق.',
        },
      ],
    },
    {
      label: labels.destinations,
      href: linkTo('istanbul'),
      items: [
        { label: locale === 'ru' ? 'Стамбул' : locale === 'ar' ? 'إسطنبول' : 'Istanbul', href: linkTo('istanbul') },
        { label: locale === 'ru' ? 'Бодрум' : locale === 'ar' ? 'بودروم' : 'Bodrum', href: linkTo('bodrum') },
        { label: locale === 'ru' ? 'Анталья' : locale === 'ar' ? 'أنطاليا' : 'Antalya', href: linkTo('antalya') },
      ],
    },
    {
      label: labels.privateAccess,
      href: linkTo('private-club'),
      items: [
        { label: locale === 'fr' ? 'Cercle privé' : locale === 'en' ? 'Private Access Club' : locale === 'ru' ? 'Частный клуб' : 'النادي الخاص', href: linkTo('private-club') },
        { label: locale === 'fr' ? 'Demande d’adhésion' : locale === 'en' ? 'Membership application' : locale === 'ru' ? 'Заявка на членство' : 'طلب عضوية', href: linkTo('membership-application') },
        { label: locale === 'fr' ? 'Diagnostic privé' : locale === 'en' ? 'Private Assessment' : locale === 'ru' ? 'Частная консультация' : 'تقييم خاص', href: linkTo('private-assessment') },
      ],
    },
    {
      label: labels.information,
      href: linkTo('about'),
      items: [
        { label: locale === 'fr' ? 'À propos' : locale === 'en' ? 'About' : locale === 'ru' ? 'О нас' : 'من نحن', href: linkTo('about') },
        { label: locale === 'fr' ? 'Conformité & confiance' : locale === 'en' ? 'Compliance & Trust' : locale === 'ru' ? 'Комплаенс и доверие' : 'الامتثال والثقة', href: linkTo('compliance') },
        { label: locale === 'fr' ? 'Partenaires & réseau' : locale === 'en' ? 'Partners & Network' : locale === 'ru' ? 'Партнеры и сеть' : 'الشركاء والشبكة', href: linkTo('partners') },
      ],
    },
  ];

  const getLocaleHref = (targetLocale: Locale) => {
    const guideSlug = getEquivalentHighPotentialSlug(currentPath, targetLocale);
    if (guideSlug) return getLocalePath(targetLocale, guideSlug);

    const pathWithoutLocale = currentPath.replace(/^\/(en|ru|ar)/, '') || '/';

    const matchedPage = pageSlugs.find((page) =>
      locales.some((loc) => page.slugs[loc] === pathWithoutLocale)
    );

    if (matchedPage) return getLocalePath(targetLocale, matchedPage.slugs[targetLocale]);
    return getLocalePath(targetLocale, pathWithoutLocale);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[hsl(220,35%,15%)] bg-[hsl(220,45%,8%)] shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[hsl(42,65%,52%)]/40 to-transparent" aria-hidden="true" />
      <div className="container-editorial flex h-[4.9rem] items-center justify-between md:h-[5.4rem]">
        <Link href={getLocalePath(locale, '/')} className="group flex flex-col leading-none" aria-label="Bosphoras — Accueil">
          <span className="font-serif text-[1.22rem] font-normal uppercase tracking-[0.22em] text-[hsl(45,30%,96%)] transition-colors duration-300 group-hover:text-[hsl(42,65%,52%)] md:text-[1.35rem]">Bosphoras</span>
          <span className="mt-1 text-[0.54rem] uppercase tracking-[0.30em] text-[hsl(42,65%,45%)]">
            {locale === 'fr' && 'Bureau Privé · Turquie'}
            {locale === 'en' && 'Private Office · Turkey'}
            {locale === 'ru' && 'Частный Офис · Турция'}
            {locale === 'ar' && 'مكتب خاص · تركيا'}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {groups.map((group) => (
            <div key={group.label} className="group relative py-7">
              <Link href={group.href} className="inline-flex items-center gap-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[hsl(220,10%,55%)] transition-colors duration-200 hover:text-[hsl(42,65%,52%)]">
                {group.label}
                <span className="text-[hsl(42,65%,45%)]">▾</span>
              </Link>
              <div className="invisible absolute left-0 top-full z-50 w-[360px] translate-y-2 border border-[hsl(42,65%,52%)]/25 bg-[hsl(220,45%,8%)] p-3 opacity-0 shadow-[0_28px_80px_rgba(0,0,0,0.32)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {group.items.map((item) => (
                  <Link key={item.href} href={item.href} className="block border-b border-white/5 px-4 py-3 last:border-b-0 hover:bg-white/[0.04]">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[hsl(45,30%,96%)]">{item.label}</span>
                    {item.description && <span className="mt-1 block text-xs leading-5 text-[hsl(220,10%,55%)]">{item.description}</span>}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[hsl(220,10%,55%)] transition-colors duration-200 hover:text-[hsl(42,65%,52%)]" aria-expanded={langOpen} aria-haspopup="listbox">
              {localeNames[locale]}
              <span className="text-[hsl(42,65%,45%)]">▾</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full z-50 mt-4 min-w-[150px] border border-[hsl(42,65%,52%)]/25 bg-[hsl(220,45%,8%)] shadow-[0_28px_80px_rgba(0,0,0,0.32)]" role="listbox">
                {locales.map((loc) => (
                  <Link key={loc} href={getLocaleHref(loc)} onClick={() => setLangOpen(false)} className={`block px-4 py-3 text-xs uppercase tracking-[0.12em] transition-colors duration-150 hover:bg-white/5 ${loc === locale ? 'font-semibold text-[hsl(42,65%,52%)]' : 'text-[hsl(220,10%,55%)]'}`} role="option" aria-selected={loc === locale} lang={loc}>
                    {localeNames[loc]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={linkTo('private-assessment')} className="border border-[hsl(42,65%,52%)] bg-[hsl(42,65%,52%)] px-6 py-3 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[hsl(220,45%,8%)] transition-colors duration-300 hover:bg-[hsl(42,65%,60%)]">
            {t(locale, 'nav.assessment')}
          </Link>
        </div>

        <button className="p-2 text-[hsl(45,30%,96%)] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[hsl(220,35%,15%)] bg-[hsl(220,45%,8%)] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-3">
            {groups.map((group) => (
              <div key={group.label} className="border-b border-white/5 pb-3">
                <button onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)} className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold uppercase tracking-[0.12em] text-[hsl(220,10%,55%)]">
                  {group.label}
                  <span className="text-[hsl(42,65%,45%)]">▾</span>
                </button>
                {openGroup === group.label && (
                  <div className="mt-2 space-y-1 pl-3">
                    <Link href={group.href} onClick={() => setMenuOpen(false)} className="block py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[hsl(42,65%,52%)]">
                      {locale === 'fr' ? 'Voir tout' : locale === 'en' ? 'View all' : locale === 'ru' ? 'Смотреть всё' : 'عرض الكل'}
                    </Link>
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-[hsl(220,10%,65%)]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-3 flex flex-wrap gap-3 border-t border-[hsl(220,35%,15%)] pt-5">
              {locales.map((loc) => (
                <Link key={loc} href={getLocaleHref(loc)} onClick={() => setMenuOpen(false)} className={`text-xs uppercase tracking-[0.12em] ${loc === locale ? 'font-semibold text-[hsl(42,65%,52%)]' : 'text-[hsl(220,10%,55%)]'}`} lang={loc}>
                  {localeNames[loc]}
                </Link>
              ))}
            </div>

            <Link href={linkTo('private-assessment')} onClick={() => setMenuOpen(false)} className="mt-3 inline-flex justify-center border border-[hsl(42,65%,52%)] bg-[hsl(42,65%,52%)] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[hsl(220,45%,8%)]">
              {t(locale, 'nav.assessment')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
