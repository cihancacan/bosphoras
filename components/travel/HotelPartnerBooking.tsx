import { getHotelPartnerLinks, hotelProviders } from '@/lib/travel/hotelPartners';
import Link from 'next/link';
import { travelHref } from '@/lib/travel/i18n';
import { getNuiteeHotelLinks, isNuiteeBookingLive } from '@/lib/travel/nuiteeLaunch';

/** Referral only: no price, availability, checkout, guest form or booking API. */
export function HotelPartnerBooking({ hotelKey, locale, officialUrl, hotelName }: { hotelKey: string; locale: 'fr' | 'en'; officialUrl?: string; hotelName?: string }) {
  const fr = locale === 'fr';
  const links = [...getNuiteeHotelLinks(hotelKey, locale), ...getHotelPartnerLinks(hotelKey)];
  const bookingLive = isNuiteeBookingLive();
  return <section className="mt-7 border-t border-[#e0d4c2] pt-6" aria-label={fr ? 'Réservation auprès d’un partenaire' : 'Book with a partner'}>
    <h3 className="font-serif text-xl">{fr ? 'Réserver auprès d’un partenaire' : 'Book with a partner'}</h3>
    {links.length > 0 ? <>
      <p className="mt-3 text-sm leading-7 text-[#52616c]">{fr
        ? 'Vous quittez Bosphoras pour réserver sur le site du partenaire indiqué. Ce partenaire gère le paiement, la confirmation, les modifications, les annulations, les remboursements et le service après-vente, selon ses conditions.'
        : 'You leave Bosphoras to book on the named partner’s website. That partner handles payment, confirmation, changes, cancellations, refunds and customer service under its terms.'}</p>
      <ul className="mt-4 space-y-4">{links.map(link => <li key={link.id}>
        <a href={link.url} target="_blank" rel="sponsored noopener noreferrer"
          className="inline-flex bg-[#142d39] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285063] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
          {hotelProviders.find(provider => provider.id === link.providerId)?.mode === 'supplier-hosted'
            ? (fr ? 'Voir les tarifs et réserver' : 'Check rates and book')
            : (fr ? `Voir les offres sur ${link.bookingBrand}` : `View offers on ${link.bookingBrand}`)} ↗
          <span className="sr-only">{fr ? ' (nouvel onglet)' : ' (opens in a new tab)'}</span>
        </a>
        <p className="mt-2 text-xs leading-6 text-[#52616c]">
          {fr ? `Réservation et assistance : ${link.sellerLegalName}. ` : `Booking and support: ${link.sellerLegalName}. `}
          <a href={link.termsUrl} target="_blank" rel="noopener noreferrer" className="underline">{fr ? 'Conditions dans le moteur du partenaire' : 'Terms in the partner booking engine'} ↗</a>
          {' · '}<a href={link.supportUrl} target="_blank" rel="noopener noreferrer" className="underline">{fr ? 'SAV du partenaire' : 'Partner support'} ↗</a>
        </p>
      </li>)}</ul>
      <p className="mt-4 text-xs leading-6 text-[#52616c]">{fr
        ? 'Liens affiliés : Bosphoras peut percevoir une commission. Les prix, disponibilités et conditions sont à vérifier sur le site du partenaire.'
        : 'Affiliate links: Bosphoras may earn a commission. Check prices, availability and conditions on the partner’s website.'}</p>
    </> : <p className="mt-3 text-sm leading-7 text-[#52616c]">{fr
      ? 'Aucun lien de réservation partenaire vérifié n’est disponible pour cet hôtel pour le moment. Le site officiel reste consultable.'
      : 'No verified partner booking link is currently available for this hotel. You can still visit its official website.'}</p>}
    {links.length===0 && bookingLive && <Link href={travelHref(locale,'search')} className="mt-4 inline-flex bg-[#142d39] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285063]">{fr?'Rechercher d’autres hôtels':'Search other hotels'} →</Link>}
    {officialUrl && <p className="mt-4 text-xs text-[#52616c]"><a href={officialUrl} target="_blank" rel="noopener noreferrer" aria-label={fr ? `Informations officielles${hotelName ? ` sur ${hotelName}` : ""} (nouvel onglet)` : `Official information${hotelName ? ` about ${hotelName}` : ""} (opens in a new tab)`} className="underline underline-offset-4">{fr?'Informations sur le site officiel de l’hôtel':'Information on the hotel’s official website'} ↗</a></p>}

    <p className="mt-3 text-xs leading-6 text-[#52616c]">{fr
      ? 'Bosphoras est un guide et un apporteur d’affaires. Bosphoras ne vend pas les séjours, n’encaisse pas leur paiement et n’assure pas leur SAV.'
      : 'Bosphoras is a guide and referral service. Bosphoras does not sell stays, collect their payment or provide after-sales support for them.'}</p>
  </section>;
}
