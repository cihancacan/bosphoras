'use client';

import { useEffect } from 'react';
import type { Locale } from '@/lib/i18n';

const slogans: Record<Locale, string> = {
  fr: 'Private Mobility · Istanbul',
  en: 'Private Mobility · Istanbul',
  ru: 'Private Mobility · Стамбул',
  ar: 'Private Mobility · إسطنبول',
};

export function TransferHeaderSlogan({ locale }: { locale: Locale }) {
  useEffect(() => {
    const subtitle = document.querySelector('a[aria-label="Bosphoras — Accueil"] span:nth-child(2)');
    if (subtitle) subtitle.textContent = slogans[locale];
  }, [locale]);

  return null;
}
