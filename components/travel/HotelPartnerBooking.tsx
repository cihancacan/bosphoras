import { getHotelPartnerLinks } from '@/lib/travel/hotelPartners';

/** Referral only: no price, availability, checkout, guest form or booking API. */
export function HotelPartnerBooking({ hotelKey, locale }: { hotelKey: string; locale: 'fr' | 'en' }) {
  const fr = locale === 'fr';
  const links = getHotelPartnerLinks(hotelKey);
  return <section className="mt-7 border-t border-[#e0d4c2] pt-6" aria-label={fr ? 'Réservation auprès d’un partenaire' : 'Book with a partner'}>
    <h3 className="font-serif text-xl">{fr ? 'Réserver auprès d’un partenaire' : 'Book with a partner'}</h3>
    {links.length > 0 ? <>
      <p className="mt-3 text-sm leading-7 text-[#52616c]">{fr
        ? 'Vous quittez Bosphoras pour réserver sur le site du partenaire indiqué. Ce partenaire gère le paiement, la confirmation, les modifications, les annulations, les remboursements et le service après-vente, selon ses conditions.'
        : 'You leave Bosphoras to book on the named partner’s website. That partner handles payment, confirmation, changes, cancellations, refunds and customer service under its terms.'}</p>
      <ul className="mt-4 space-y-4">{links.map(link => <li key={link.id}>
        <a href={link.url} target="_blank" rel="sponsored noopener noreferrer"
          className="inline-flex bg-[#142d39] px-5 py-3 text-sm font-semibold text-white hover:bg-[#285063] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
          {fr ? `Voir les offres sur ${link.bookingBrand}` : `View offers on ${link.bookingBrand}`} ↗
          <span className="sr-only">{fr ? ' (nouvel onglet)' : ' (opens in a new tab)'}</span>
        </a>
        <p className="mt-2 text-xs leading-6 text-[#52616c]">
          <a href={link.termsUrl} target="_blank" rel="noopener noreferrer" className="underline">{fr ? 'Conditions du partenaire' : 'Partner terms'} ↗</a>
          {' · '}<a href={link.supportUrl} target="_blank" rel="noopener noreferrer" className="underline">{fr ? 'SAV du partenaire' : 'Partner support'} ↗</a>
        </p>
      </li>)}</ul>
      <p className="mt-4 text-xs leading-6 text-[#52616c]">{fr
        ? 'Liens affiliés : Bosphoras peut percevoir une commission. Les prix, disponibilités et conditions sont à vérifier sur le site du partenaire.'
        : 'Affiliate links: Bosphoras may earn a commission. Check prices, availability and conditions on the partner’s website.'}</p>
    </> : <p className="mt-3 text-sm leading-7 text-[#52616c]">{fr
      ? 'Aucun lien de réservation partenaire vérifié n’est disponible pour cet hôtel pour le moment. Le site officiel reste consultable.'
      : 'No verified partner booking link is currently available for this hotel. You can still visit its official website.'}</p>}
    <p className="mt-3 text-xs leading-6 text-[#52616c]">{fr
      ? 'Bosphoras est un guide et un apporteur d’affaires. Bosphoras ne vend pas les séjours, n’encaisse pas leur paiement et n’assure pas leur SAV.'
      : 'Bosphoras is a guide and referral service. Bosphoras does not sell stays, collect their payment or provide after-sales support for them.'}</p>
  </section>;
}
