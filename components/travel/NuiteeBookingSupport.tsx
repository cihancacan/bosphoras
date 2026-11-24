import { Headphones, Mail, Phone } from 'lucide-react';
import type { TravelLocale } from '@/lib/travel/i18n';
import { getNuiteeWhiteLabelSearchHref, NUITEE_WHITE_LABEL_ORIGIN } from '@/lib/travel/nuiteeWhiteLabel';

export const nuiteeSupportId = 'assistance-nuitee';
const email = 'vip.support@nuitee.com';
const numbers = [
  { number: '+1 315 239 0836', href: 'tel:+13152390836' },
  { number: '+44 20 4630 0278', href: 'tel:+442046300278' },
];

export function NuiteeBookingSupport({ locale }: { locale: TravelLocale }) {
  const french = locale === 'fr';
  const subject = french ? '[BOSPHORAS] Aide sur une réservation Nuitée' : '[BOSPHORAS] Nuitée booking support';
  const body = french
    ? 'Bonjour,\n\nJ’ai réservé via BOSPHORAS sur votre marque blanche Nuitée.\n\nRéférence de réservation Nuitée\n\nAdresse e-mail utilisée pour la réservation\n\nMa demande\n\nMerci.'
    : 'Hello,\n\nI booked through BOSPHORAS on your Nuitée storefront.\n\nNuitée booking reference\n\nEmail used for the booking\n\nHow you can help\n\nThank you.';
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const storefront = new URL(getNuiteeWhiteLabelSearchHref(locale));
  const help = new URL('/help-center', NUITEE_WHITE_LABEL_ORIGIN);
  help.search = storefront.search;
  const supportLink = 'inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#175d74] underline decoration-[#a7c1ca] underline-offset-4 hover:decoration-current';

  return (
    <section id={nuiteeSupportId} lang={french ? 'fr' : 'en'} dir="ltr" aria-labelledby="nuitee-assistance-title"
      className="mb-10 scroll-mt-24 rounded-2xl border border-[#dce6e9] bg-white px-5 py-6 sm:px-7 sm:py-7">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef5f6] text-[#175d74]"><Headphones size={21} aria-hidden="true"/></span>
        <div>
          <h2 id="nuitee-assistance-title" className="text-lg font-bold text-[#183341]">{french ? 'Assistance réservations Nuitée' : 'Nuitée booking support'}</h2>
          <p className="mt-1 text-sm leading-6 text-[#4c6572]">{french ? 'Pour les vols et hôtels réservés avec Nuitée, le service client est disponible 24 h/24 et 7 j/7.' : 'For flights and hotels booked with Nuitée, customer service is available 24 hours a day, 7 days a week.'}</p>
        </div>
      </div>
      <div className="mt-5 grid gap-3 border-t border-[#e4ecef] pt-4 md:grid-cols-2 md:gap-7">
        <div>
          <a className={supportLink} href={mailto}><Mail size={17} aria-hidden="true"/>{email}</a>
          <p className="text-sm leading-6 text-[#4c6572]">{french ? 'Le message indique déjà que votre réservation vient de BOSPHORAS.' : 'The draft email already identifies your booking as coming through BOSPHORAS.'}</p>
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-x-5">
            {numbers.map(({number,href}) => <a key={number} className={supportLink} href={href}><Phone size={16} aria-hidden="true"/><span dir="ltr" className="tabular-nums">{number}</span></a>)}
          </div>
          <p className="text-sm leading-6 text-[#4c6572]">{french ? 'Au téléphone, précisez « réservation via BOSPHORAS » et communiquez votre référence Nuitée.' : 'When calling, say you booked through BOSPHORAS and give your Nuitée booking reference.'}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-x-6">
        <a href={help.toString()} className={supportLink}>{french ? 'Centre d’aide Nuitée' : 'Nuitée help centre'}</a>
        <a href={storefront.toString()} className={supportLink}>{french ? 'Conditions, confidentialité et cookies sur Nuitée' : 'Terms, privacy and cookies on Nuitée'}</a>
      </div>
    </section>
  );
}
