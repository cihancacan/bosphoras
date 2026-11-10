import Link from 'next/link';
import { travelHref } from '@/lib/travel/i18n';
import { getNuiteeHotelLinks, isNuiteeBookingLive, nuiteeLaunch } from '@/lib/travel/nuiteeLaunch';

type HotelBookingProps = {
  hotelKey: string;
  locale: 'fr' | 'en';
};

/**
 * Links only to Nuitée: exact verified supplier hotel pages for mapped hotels;
 * otherwise to the supplier's general search, without inventing a property ID.
 */
function bookingTarget(hotelKey: string, locale: 'fr' | 'en') {
  const supplierLink = getNuiteeHotelLinks(hotelKey, locale).find(
    (link) => link.providerId === 'nuitee-connect'
  );
  const hotelId = supplierLink ? new URL(supplierLink.url).pathname.split('/').pop() : undefined;
  return {
    exact: Boolean(hotelId),
    href: hotelId
      ? `${travelHref(locale, 'search')}?hotel=${encodeURIComponent(hotelId)}`
      : travelHref(locale, 'search'),
  };
}

export function HotelNuiteeLink({ hotelKey, locale }: HotelBookingProps) {
  if (!isNuiteeBookingLive()) return null;
  const fr = locale === 'fr';
  const target = bookingTarget(hotelKey, locale);
  return (
    <Link
      href={target.href}
      rel="sponsored"
      className="mt-5 inline-flex w-fit items-center justify-center bg-[#193344] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#25485e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {target.exact
        ? fr ? 'Voir les chambres et réserver' : 'View rooms and book'
        : fr ? 'Rechercher cet hôtel sur Nuitée' : 'Find this hotel on Nuitée'}
      <span aria-hidden="true" className="ml-2">→</span>
    </Link>
  );
}

export function HotelPartnerBooking({ hotelKey, locale }: HotelBookingProps) {
  const fr = locale === 'fr';
  const live = isNuiteeBookingLive();
  const exact = live && bookingTarget(hotelKey, locale).exact;

  return (
    <section className="mt-7 border-t border-[#e1e5e5] pt-6" aria-label={fr ? 'Réservation Nuitée' : 'Nuitée booking'}>
      <h3 className="font-sans text-xl font-normal text-[#202629]">
        {fr ? 'Préparer votre réservation' : 'Plan your booking'}
      </h3>
      {live ? (
        <>
          <p className="mt-3 text-sm leading-7 text-[#53616b]">
            {exact
              ? fr
                ? 'Consultez les chambres et les disponibilités dans notre espace de réservation, opéré par Nuitée. Nuitée gère votre paiement, votre confirmation et le SAV du séjour.'
                : 'View rooms and availability in our booking space, operated by Nuitée. Nuitée handles payment, confirmation and support for your stay.'
              : fr
                ? 'Recherchez cet établissement dans notre espace de réservation, opéré par Nuitée. Nuitée gère votre paiement, votre confirmation et le SAV du séjour.'
                : 'Search for this property in our Nuitée-operated booking space. Nuitée handles payment, confirmation and support for your stay.'}
          </p>
          <HotelNuiteeLink hotelKey={hotelKey} locale={locale} />
          <p className="mt-3 text-xs leading-6 text-[#53616b]">
            {fr ? 'Réservation et assistance : ' : 'Booking and support: '}
            {nuiteeLaunch.sellerLegalName}.{' '}
            <a href={nuiteeLaunch.origin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              {fr ? 'Conditions dans le moteur du partenaire' : 'Terms in the partner booking engine'} ↗
            </a>
            {' · '}
            <a href={`${nuiteeLaunch.origin}/help-center`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              {fr ? 'SAV du partenaire' : 'Partner support'} ↗
            </a>
          </p>
        </>
      ) : (
        <p className="mt-3 text-sm leading-7 text-[#53616b]">
          {fr ? 'La réservation via Nuitée est momentanément indisponible.' : 'Booking via Nuitée is temporarily unavailable.'}
        </p>
      )}
    </section>
  );
}
