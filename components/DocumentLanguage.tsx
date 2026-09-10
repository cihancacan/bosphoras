"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
const languages = new Set(['fr', 'en', 'ru', 'ar', 'zh', 'de', 'es', 'it', 'pt']);
export function DocumentLanguage() {
  const pathname = usePathname();
  useEffect(() => {
    const first = pathname?.split('/')[1] || '';
    const locale = languages.has(first) ? first : 'fr';
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [pathname]);
  return null;
}
