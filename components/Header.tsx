'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { t, locales, localeNames } from '@/lib/i18n';
import { getLocalePath } from '@/lib/routes';
import { getSlugForPage } from '@/data/pages/types';

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
    const pathWithoutLocale = currentPath.replace(/^\/(en|ru|ar)/, '') || '/';
    return getLocalePath(targetLocale, pathWithoutLocale);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[hsl(42,18%,84%)]/80 bg-[hsl(45,30%,96%)]/92 backdrop-blur-xl">
      <div className="container-editorial flex h-20 items-center justify-between md:h-24">
        <Link href={getLocalePath(locale, '/')} className="group flex flex-col leading-none" aria-label="Bosphoras — Accueil">
          <span className="font-serif text-2xl font-semibold uppercase tracking-[0.16em] text-[hsl(220,45%,12%)] transition-colors duration-300 group-hover:text-[hsl(42,65%,38%)]">
            Bosphoras
          </span>
          <span className="mt-1 text-[0.58rem] uppercase tracking-[0.32em] text-[hsl(42,65%,38%)]">
            {locale === 'fr' && 'Bureau Privé · Turquie'}
            {locale === 'en' && 'Private Office · Turkey'}
            {locale === 'ru' && 'Частный Офис · Турция'}
            {locale === 'ar' && 'مكتب خاص · تركيا'}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={getLocalePath(locale, href)}
              className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[hsl(220,14%,38%)] transition-colors duration-200 hover:text-[hsl(42,65%,35%)]"
            >
              {t(locale, key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[hsl(220,14%,38%)] transition-colors duration-200 hover:text-[hsl(42,65%,35%)]"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
            >
              {localeNames[locale]}
              <span className="text-[hsl(42,65%,45%)]">▾</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full z-50 mt-4 min-w-[150px] border border-[hsl(42,18%,84%)] bg-white shadow-[0_22px_60px_rgba(20,28,46,0.12)]" role="listbox">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={getLocaleHref(loc)}
                    onClick={() => setLangOpen(false)}
                    className={`block px-4 py-3 text-xs uppercase tracking-[0.12em] transition-colors duration-150 hover:bg-[hsl(45,30%,96%)] ${
                      loc === locale ? 'font-semibold text-[hsl(42,65%,38%)]' : 'text-[hsl(220,14%,38%)]'
                    }`}
                    role="option"
                    aria-selected={loc === locale}
                    lang={loc}
                  >
                    {localeNames[loc]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/')} className="border border-[hsl(220,45%,12%)] bg-[hsl(220,45%,12%)] px-6 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[hsl(45,30%,96%)] transition-colors duration-300 hover:bg-[hsl(220,35%,20%)]">
            {t(locale, 'nav.assessment')}
          </Link>
        </div>

        <button className="p-2 text-[hsl(220,45%,12%)] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[hsl(42,18%,84%)] bg-[hsl(45,30%,96%)] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={getLocalePath(locale, href)}
                onClick={() => setMenuOpen(false)}
                className="py-1 text-sm font-semibold uppercase tracking-[0.12em] text-[hsl(220,14%,38%)] transition-colors duration-200 hover:text-[hsl(42,65%,35%)]"
              >
                {t(locale, key)}
              </Link>
            ))}

            <div className="mt-3 flex flex-wrap gap-3 border-t border-[hsl(42,18%,84%)] pt-5">
              {locales.map((loc) => (
                <Link key={loc} href={getLocaleHref(loc)} onClick={() => setMenuOpen(false)} className={`text-xs uppercase tracking-[0.12em] ${loc === locale ? 'font-semibold text-[hsl(42,65%,38%)]' : 'text-[hsl(220,14%,38%)]'}`} lang={loc}>
                  {localeNames[loc]}
                </Link>
              ))}
            </div>

            <Link href={getLocalePath(locale, getSlugForPage('private-assessment', locale) ?? '/')} onClick={() => setMenuOpen(false)} className="mt-3 inline-flex justify-center border border-[hsl(220,45%,12%)] bg-[hsl(220,45%,12%)] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(45,30%,96%)]">
              {t(locale, 'nav.assessment')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
