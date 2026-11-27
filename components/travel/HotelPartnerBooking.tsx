import Link from 'next/link';
import { getNuiteeWhiteLabelSearchHref } from '@/lib/travel/nuiteeWhiteLabel';
import { getNuiteeHotelLinks, isNuiteeBookingLive } from '@/lib/travel/nuiteeLaunch';

type HotelBookingProps = {
  hotelKey: string;
  locale: 'fr' | 'en';
};

/**
 * Links only to Nuitée: exact verified supplier hotel pages for mapped hotels;
 * otherwise to the supplier's general search, without inventing a property ID.
 */
export function bookingTarget(hotelKey: string, locale: 'fr' | 'en') {
  const supplierLink = getNuiteeHotelLinks(hotelKey, locale).find(
    (link) => link.providerId === 'nuitee-connect'
  );
  return {
    exact: Boolean(supplierLink),
    href: supplierLink?.url ?? getNuiteeWhiteLabelSearchHref(locale),
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
        : fr ? 'Rechercher un hébergement sur Nuitée' : 'Search accommodation on Nuitée'}
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
                ? 'Recherchez un hébergement dans notre espace de réservation, opéré par Nuitée. Nuitée gère votre paiement, votre confirmation et le SAV du séjour.'
                : 'Search for accommodation in our Nuitée-operated booking space. Nuitée handles payment, confirmation and support for your stay.'}
          </p>
          <HotelNuiteeLink hotelKey={hotelKey} locale={locale} />
        </>
      ) : (
        <p className="mt-3 text-sm leading-7 text-[#53616b]">
          {fr ? 'La réservation via Nuitée est momentanément indisponible.' : 'Booking via Nuitée is temporarily unavailable.'}
        </p>
      )}
    </section>
  );
}
