'use client';

import { useEffect } from 'react';

type TransferLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

const instantLabels: Record<TransferLocale, string> = {
  fr: 'Confirmation immédiate',
  en: 'Instant confirmation',
  ru: 'Мгновенное подтверждение',
  ar: 'تأكيد فوري',
  zh: '即时确认',
  de: 'Sofortige Bestätigung',
  es: 'Confirmación inmediata',
  it: 'Conferma immediata',
  pt: 'Confirmação imediata',
};

const reviewWords: Record<TransferLocale, string> = {
  fr: 'avis Google',
  en: 'Google reviews',
  ru: 'отзывов Google',
  ar: 'مراجعة Google',
  zh: '条 Google 评价',
  de: 'Google-Bewertungen',
  es: 'reseñas Google',
  it: 'recensioni Google',
  pt: 'avaliações Google',
};

function safeLocale(locale?: string): TransferLocale {
  return locale === 'fr' || locale === 'en' || locale === 'ru' || locale === 'ar' || locale === 'zh' || locale === 'de' || locale === 'es' || locale === 'it' || locale === 'pt' ? locale : 'en';
}

function createBadge(locale: TransferLocale) {
  const badge = document.createElement('div');
  badge.dataset.transferGoogleRatingBadge = 'true';
  badge.dir = locale === 'ar' ? 'rtl' : 'ltr';
  badge.className = 'mt-3 flex w-fit items-center gap-2 rounded-2xl border border-white/25 bg-black/28 px-3.5 py-2 text-white shadow-[0_12px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl md:mt-4 md:border-white/20 md:bg-white/10 md:px-4 md:py-2.5';
  badge.innerHTML = `
    <span aria-hidden="true" style="display:inline-grid;height:25px;width:25px;place-items:center;border-radius:999px;background:white;color:#4285F4;font-family:Arial,sans-serif;font-size:15px;font-weight:900;letter-spacing:-.08em;box-shadow:0 8px 20px rgba(0,0,0,.16);">G</span>
    <span style="display:inline-flex;align-items:center;gap:6px;white-space:nowrap;">
      <span style="color:#fbbf24;font-size:13px;letter-spacing:.04em;line-height:1;">★★★★★</span>
      <strong style="font-size:13px;letter-spacing:-.02em;line-height:1;color:white;">4,9/5</strong>
      <span style="height:14px;width:1px;background:rgba(255,255,255,.35);display:inline-block;"></span>
      <span style="font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.82);">3358 ${reviewWords[locale]}</span>
    </span>
  `;
  return badge;
}

function insertBadges(locale: TransferLocale) {
  const label = instantLabels[locale];
  const targets = Array.from(document.querySelectorAll('div,span')).filter((element) => element.textContent?.trim() === label);
  targets.forEach((target) => {
    const parent = target.parentElement;
    if (!parent || parent.querySelector('[data-transfer-google-rating-badge="true"]')) return;
    target.insertAdjacentElement('afterend', createBadge(locale));
  });
}

export function TransferGoogleRatingBadge({ locale = 'fr' }: { locale?: string }) {
  useEffect(() => {
    const l = safeLocale(locale);
    const observer = new MutationObserver(() => insertBadges(l));
    observer.observe(document.body, { childList: true, subtree: true });
    insertBadges(l);
    return () => observer.disconnect();
  }, [locale]);

  return null;
}
