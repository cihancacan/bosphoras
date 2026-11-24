import { Info } from 'lucide-react';
import type { TravelLocale } from '@/lib/travel/i18n';

const comingSoon: Record<TravelLocale, string> = {
  fr: 'Bientôt disponible', en: 'Coming soon', de: 'Demnächst verfügbar', tr: 'Yakında',
  es: 'Próximamente', it: 'In arrivo', pt: 'Em breve', ru: 'Скоро', ar: 'قريبًا', zh: '即将推出',
};

export function BookingComingSoon({ locale }: { locale: TravelLocale }) {
  return (
    <span className="inline-flex items-center justify-center gap-1 text-[11px] font-semibold leading-tight text-[#536a77]">
      <Info size={12} className="shrink-0" aria-hidden="true"/>{comingSoon[locale]}
    </span>
  );
}
