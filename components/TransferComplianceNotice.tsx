'use client';

import { useEffect } from 'react';

type TransferLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

const copy: Record<TransferLocale, string> = {
  fr: 'Conformité transport - Réservation minimum 2h à l’avance',
  en: 'Transport compliance - Minimum booking 2 hours in advance',
  ru: 'Транспортное соответствие - бронирование минимум за 2 часа',
  ar: 'امتثال النقل - الحجز قبل ساعتين على الأقل',
  zh: '交通合规 - 至少提前2小时预订',
  de: 'Transportkonformität - Buchung mindestens 2 Stunden im Voraus',
  es: 'Conformidad transporte - reserva mínima con 2 horas de antelación',
  it: 'Conformità trasporto - prenotazione minima 2 ore prima',
  pt: 'Conformidade transporte - reserva mínima com 2 horas de antecedência',
};

const vehicleButtonTexts = [
  'voir les véhicules',
  'see vehicles',
  'показать автомобили',
  'عرض السيارات',
  '查看车辆',
  'fahrzeuge anzeigen',
  'ver vehículos',
  'vedi veicoli',
  'ver veículos',
];

function safeLocale(locale?: string): TransferLocale {
  return locale === 'fr' || locale === 'en' || locale === 'ru' || locale === 'ar' || locale === 'zh' || locale === 'de' || locale === 'es' || locale === 'it' || locale === 'pt' ? locale : 'en';
}

function createNotice(locale: TransferLocale) {
  const wrapper = document.createElement('p');
  wrapper.dataset.transferComplianceNotice = 'true';
  wrapper.dir = locale === 'ar' ? 'rtl' : 'ltr';
  wrapper.className = 'mt-3 text-[11px] font-black uppercase tracking-[0.10em] text-slate-700 md:mt-0 md:max-w-[260px] md:text-right md:text-[10px]';
  wrapper.textContent = copy[locale];
  return wrapper;
}

function findSeeVehiclesButton() {
  return Array.from(document.querySelectorAll('button')).find((button) => {
    const text = button.textContent?.trim().toLowerCase() || '';
    return vehicleButtonTexts.some((label) => text.includes(label));
  }) as HTMLButtonElement | undefined;
}

function insertNotice(locale: TransferLocale) {
  const oldNotice = document.querySelector('[data-transfer-compliance-notice="true"]');
  const button = findSeeVehiclesButton();
  if (!button) {
    oldNotice?.remove();
    return;
  }

  if (oldNotice) return;

  const parent = button.parentElement;
  if (!parent) return;
  parent.classList.remove('justify-end');
  parent.classList.add('items-center', 'justify-between', 'gap-3', 'flex-wrap');
  parent.insertBefore(createNotice(locale), button);
}

export function TransferComplianceNotice({ locale = 'fr' }: { locale?: string }) {
  useEffect(() => {
    const l = safeLocale(locale);
    const observer = new MutationObserver(() => insertNotice(l));
    observer.observe(document.body, { childList: true, subtree: true });
    insertNotice(l);

    return () => observer.disconnect();
  }, [locale]);

  return null;
}
