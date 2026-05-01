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

export function Header({ locale, currentPath = '/' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks: Array<{ key: 'nav.services' | 'nav.cities' | 'nav.membership' | 'nav.about'; href: string }> = [
    { key: 'nav.services', href: getSlugForPage('services', locale) ?? '/' },
    { key: 'nav.cities', href: getSlugForPage('istanbul', locale) ?? '/' },
    { key: 'nav.membership', href: getSlugForPage('private-club', locale) ?? '/' },
    { key: 'nav.about', href: getSlugForPage('about', locale) ?? '/' },
  ];

  const getLocaleHref = (targetLocale: Locale) => {
    const guideSlug = getEquivalentHighPotentialSlug(currentPath, targetLocale);
    if (guideSlug) return getLocalePath(targetLocale, guideSlug);

    const pathWithoutLocale = currentPath.replace(/^\/(en|ru|ar)/, '') || '/';

    const matchedPage = pageSlugs.find((page) =>
      locales.some((loc) => page.slugs[loc] === pathWithoutLocale)
    );

    if (matchedPage) {
      return getLocalePath(targetLocale, matchedPage.slugs[targetLocale]);
    }

    return getLocalePath(targetLocale, pathWithoutLocale);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[hsl(220,35%,15%)] bg-[hsl(220,45%,8%)] shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[hsl(42,65%,52%)]/40 to-transparent" aria-hidden="true" />
      <div className="container-editorial flex h-[4.9rem] items-center justify-between md:h-[5.4rem]">
        <Link href={getLocalePath(locale, '/')} className="group flex flex-col leading-none" aria-label="Bosphoras — Accueil">
          <span className="font-serif text-[1.22rem] font-normal uppercase tracking-[0.22em] text-[hsl(45,30%,96%)] transition-colors duration-300 group-hover:text-[hsl(42,65%,52%)] md:text-[1.35rem]">
            Bosphoras
          </span>
          <span className="mt-1 text-[0.54rem] uppercase tracking-[0.30em] text-[hsl(42,65%,45%)]">
            {locale === 'fr' && 'Bureau Privé · Turquie'}
            {locale === 'en' && 'Private Office · Turkey'}
            {locale === 'ru' && 'Частный Офис · Турция'}
            {locale === 'ar' && 'مكتب خاص · تركيا'}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navLinks.map(({ key, href }) => (
            <Link key={key} href={getLocalePath(locale, href)} className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[hsl(220,10%,55%)] transition-colors duration-200 hover:text-[hsl(42,65%,52%)]">
              {t(locale, key)}
            </Link>
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

          <Link href={getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/')} className="border border-[hsl(42,65%,52%)] bg-[hsl(42,65%,52%)] px-6 py-3 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-[hsl(220,45%,8%)] transition-colors duration-300 hover:bg-[hsl(42,65%,60%)]">
            {t(locale, 'nav.assessment')}
          </Link>
        </div>

        <button className="p-2 text-[hsl(45,30%,96%)] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[hsl(220,35%,15%)] bg-[hsl(220,45%,8%)] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(({ key, href }) => (
              <Link key={key} href={getLocalePath(locale, href)} onClick={() => setMenuOpen(false)} className="py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[hsl(220,10%,55%)] transition-colors duration-200 hover:text-[hsl(42,65%,52%)]">
                {t(locale, key)}
              </Link>
            ))}

            <div className="mt-3 flex flex-wrap gap-3 border-t border-[hsl(220,35%,15%)] pt-5">
              {locales.map((loc) => (
                <Link key={loc} href={getLocaleHref(loc)} onClick={() => setMenuOpen(false)} className={`text-xs uppercase tracking-[0.12em] ${loc === locale ? 'font-semibold text-[hsl(42,65%,52%)]' : 'text-[hsl(220,10%,55%)]'}`} lang={loc}>
                  {localeNames[loc]}
                </Link>
              ))}
            </div>

            <Link href={getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/')} onClick={() => setMenuOpen(false)} className="mt-3 inline-flex justify-center border border-[hsl(42,65%,52%)] bg-[hsl(42,65%,52%)] px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[hsl(220,45%,8%)]">
              {t(locale, 'nav.assessment')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
