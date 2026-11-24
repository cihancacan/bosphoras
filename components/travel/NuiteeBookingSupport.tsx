import { Headphones, Mail, Phone } from 'lucide-react';
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

export function NuiteeBookingSupport({ locale }: { locale: TravelLocale }) {
  const labels = supportCopy[locale];
  const french = locale === 'fr';
  const cookieLabels: Record<TravelLocale, string> = {
    fr: 'Préférences de cookies', en: 'Cookie preferences', de: 'Cookie-Einstellungen',
    tr: 'Çerez tercihleri', es: 'Preferencias de cookies', it: 'Preferenze cookie',
    pt: 'Preferências de cookies', ru: 'Настройки файлов cookie', ar: 'تفضيلات ملفات تعريف الارتباط', zh: 'Cookie 偏好设置',
  };
  const email = 'vip.support@nuitee.com';
  const phoneNumbers = [
    { number: '+1 315 239 0836', href: 'tel:+13152390836' },
    { number: '+44 20 4630 0278', href: 'tel:+442046300278' },
  ];
  const subject = french ? '[BOSPHORAS] Assistance réservation' : '[BOSPHORAS] Booking support';
  const message = french
    ? 'Bonjour,\n\nJ’ai réservé via BOSPHORAS.\n\nRéférence de réservation :\nAdresse e-mail utilisée :\nMa demande :\n\nMerci.'
    : 'Hello,\n\nI booked through BOSPHORAS.\n\nBooking reference:\nEmail used for the booking:\nHow you can help:\n\nThank you.';
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  // Conditions and cookie preferences open from the booking site's footer.
  const documents = new URL(getNuiteeWhiteLabelSearchHref(french ? 'fr' : 'en'));
  const terms = new URL(documents);
  const cookies = new URL(documents);
  terms.hash = ':~:text=' + encodeURIComponent(french ? 'Conditions générales' : 'Terms and conditions');
  cookies.hash = ':~:text=' + encodeURIComponent(french ? 'Préférences en matière de cookies' : 'Cookie preferences');
  const help = new URL('/help-center', NUITEE_WHITE_LABEL_ORIGIN);
  help.search = new URL(getNuiteeWhiteLabelSearchHref(locale)).search;
  const linkClass = 'inline-flex min-h-11 items-center text-sm font-semibold text-[#175d74] underline decoration-[#a7c1ca] underline-offset-4 hover:decoration-current';

  return (
    <section id={reservationSupportId} lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} aria-labelledby="assistance-reservation-title"
      className="mb-10 scroll-mt-24 rounded-2xl border border-[#dce6e9] bg-white px-5 py-5 sm:px-7">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef5f6] text-[#175d74]"><Headphones size={20} aria-hidden="true"/></span>
        <h2 id="assistance-reservation-title" className="text-lg font-bold text-[#183341]">{labels.title}</h2>
      </div>
      <p className="mt-2 text-sm text-[#4c6572]" lang={french ? 'fr' : 'en'}>
        {french ? 'Une question sur votre réservation ? Assistance 24 h/24 et 7 j/7.' : 'Questions about your booking? Support is available 24/7.'}
      </p>
      <div className="mt-4 grid gap-3 border-t border-[#e4ecef] pt-3 md:grid-cols-2">
        <a href={mailto} className={linkClass + ' gap-2'}><Mail size={17} aria-hidden="true"/><span dir="ltr">{email}</span></a>
        <div>
          <div className="flex flex-wrap gap-x-5">
            {phoneNumbers.map(({number,href})=><a key={href} href={href} className={linkClass + ' gap-2'}><Phone size={16} aria-hidden="true"/><span dir="ltr">{number}</span></a>)}
          </div>
          <p className="text-sm text-[#4c6572]" lang={french ? 'fr' : 'en'}>
            {french ? 'Au téléphone, précisez « réservation via BOSPHORAS » et donnez votre référence de réservation.' : 'When calling, say you booked through BOSPHORAS and provide your booking reference.'}
          </p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-x-6">
        <a href={help.toString()} className={linkClass}>{labels.help}</a>
        <a href={terms.toString()} className={linkClass}>{labels.terms}</a>
        <a href={cookies.toString()} className={linkClass}>{cookieLabels[locale]}</a>
      </div>
    </section>
  );
}
