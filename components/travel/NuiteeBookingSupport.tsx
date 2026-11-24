import { Headphones } from 'lucide-react';
import type { TravelLocale } from '@/lib/travel/i18n';
import { getNuiteeWhiteLabelSearchHref, NUITEE_WHITE_LABEL_ORIGIN } from '@/lib/travel/nuiteeWhiteLabel';

export const reservationSupportId = 'assistance-reservation';

const supportCopy: Record<TravelLocale, { title: string; help: string; terms: string }> = {
  fr: { title: 'Assistance réservation', help: 'Centre d’aide', terms: 'Conditions d’utilisation' },
  en: { title: 'Booking support', help: 'Help centre', terms: 'Terms of use' },
  de: { title: 'Buchungshilfe', help: 'Hilfe-Center', terms: 'Nutzungsbedingungen' },
  tr: { title: 'Rezervasyon desteği', help: 'Yardım merkezi', terms: 'Kullanım koşulları' },
  es: { title: 'Ayuda con la reserva', help: 'Centro de ayuda', terms: 'Condiciones de uso' },
  it: { title: 'Assistenza prenotazioni', help: 'Centro assistenza', terms: 'Condizioni d’uso' },
  pt: { title: 'Assistência de reserva', help: 'Central de ajuda', terms: 'Termos de uso' },
  ru: { title: 'Поддержка бронирования', help: 'Центр помощи', terms: 'Условия использования' },
  ar: { title: 'دعم الحجز', help: 'مركز المساعدة', terms: 'شروط الاستخدام' },
  zh: { title: '预订支持', help: '帮助中心', terms: '使用条款' },
};

export const reservationSupportLabel = (locale: TravelLocale) => supportCopy[locale].title;

export function NuiteeBookingSupport({ locale, termsHref }: { locale: TravelLocale; termsHref: string }) {
  const labels = supportCopy[locale];
  const help = new URL('/help-center', NUITEE_WHITE_LABEL_ORIGIN);
  help.search = new URL(getNuiteeWhiteLabelSearchHref(locale)).search;
  const linkClass = 'inline-flex min-h-11 items-center text-sm font-semibold text-[#175d74] underline decoration-[#a7c1ca] underline-offset-4 hover:decoration-current';

  return (
    <section id={reservationSupportId} lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} aria-labelledby="assistance-reservation-title"
      className="mb-10 flex scroll-mt-24 flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-2xl border border-[#dce6e9] bg-white px-5 py-4 sm:px-7">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef5f6] text-[#175d74]"><Headphones size={20} aria-hidden="true"/></span>
        <h2 id="assistance-reservation-title" className="text-lg font-bold text-[#183341]">{labels.title}</h2>
      </div>
      <div className="flex flex-wrap gap-x-6">
        <a href={help.toString()} className={linkClass}>{labels.help}</a>
        <a href={termsHref} className={linkClass}>{labels.terms}</a>
      </div>
    </section>
  );
}
