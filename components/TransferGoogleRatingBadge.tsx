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

const ratingLabels: Record<TransferLocale, string> = {
  fr: 'Avis Google 4,9/5 — 3358 avis',
  en: 'Google Reviews 4.9/5 — 3358 reviews',
  ru: 'Отзывы Google 4,9/5 — 3358 отзывов',
  ar: 'تقييمات Google 4.9/5 — 3358 مراجعة',
  zh: 'Google 评价 4.9/5 — 3358 条评价',
  de: 'Google Bewertungen 4,9/5 — 3358 Bewertungen',
  es: 'Reseñas Google 4,9/5 — 3358 reseñas',
  it: 'Recensioni Google 4,9/5 — 3358 recensioni',
  pt: 'Avaliações Google 4,9/5 — 3358 avaliações',
};

function safeLocale(locale?: string): TransferLocale {
  return locale === 'fr' || locale === 'en' || locale === 'ru' || locale === 'ar' || locale === 'zh' || locale === 'de' || locale === 'es' || locale === 'it' || locale === 'pt' ? locale : 'en';
}

function createBadge(locale: TransferLocale) {
  const badge = document.createElement('div');
  badge.dataset.transferGoogleRatingBadge = 'true';
  badge.dir = locale === 'ar' ? 'rtl' : 'ltr';
  badge.className = 'mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/92 px-4 py-2 text-[11px] font-black uppercase tracking-[0.10em] text-slate-950 shadow-[0_12px_34px_rgba(0,0,0,0.20)] backdrop-blur-xl md:mt-4 md:bg-white md:px-4 md:py-2.5 md:text-[11px]';
  badge.innerHTML = `
    <span aria-hidden="true" style="display:inline-flex;height:22px;width:22px;align-items:center;justify-content:center;border-radius:999px;background:#fff;border:1px solid rgba(15,23,42,.10);font-weight:900;font-size:13px;letter-spacing:-.08em;"><span style="color:#4285F4;">G</span></span>
    <span style="color:#f59e0b;letter-spacing:.02em;">★★★★★</span>
    <span>${ratingLabels[locale]}</span>
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
