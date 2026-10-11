"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
const languages = new Set(['fr', 'en', 'ru', 'ar', 'zh', 'de', 'es', 'it', 'pt', 'tr']);
export function DocumentLanguage() {
  const pathname = usePathname();
  useEffect(() => {
    const first = pathname?.split('/')[1] || '';
    const locale = languages.has(first) ? first : 'fr';
    // Travel uses country-specific language variants without changing legacy pages.
    const isTravel = pathname?.split('/').includes('travel') ?? false;
    const htmlLocale = isTravel && locale === 'zh' ? 'zh-CN'
      : isTravel && locale === 'pt' ? 'pt-BR'
      : locale;
    document.documentElement.lang = htmlLocale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [pathname]);
  return null;
}
