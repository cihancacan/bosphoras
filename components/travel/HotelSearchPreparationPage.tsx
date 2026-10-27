import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/travel/TravelPages';
import { HotelGuideExplorer } from '@/components/travel/HotelGuideExplorer';
import { travelDestinations } from '@/data/travel/destinations';
import { isHotelSearchPreview } from '@/lib/travel/hotelSearchPreview';

export function hotelSearchMetadata(locale: 'fr' | 'en'): Metadata {
  return {
    title: locale === 'fr' ? 'Rechercher un hôtel | Bosphoras Luxury Stays' : 'Find a hotel | Bosphoras Luxury Stays',
    description: locale === 'fr' ? 'Préparez votre séjour et explorez les guides Bosphoras. Recherche et réservation hôtelières en préparation.' : 'Plan your stay and explore Bosphoras guides. Hotel search and booking are being prepared.',
    robots: { index: false, follow: false },
    alternates: { canonical: `https://www.bosphoras.com/${locale === 'en' ? 'en/' : ''}travel/search` },
  };
}

export function HotelSearchPreparationPage({ locale }: { locale: 'fr' | 'en' }) {
  if (!isHotelSearchPreview()) notFound();
  const fr = locale === 'fr';
  return <div lang={locale} className="min-h-screen bg-[#f8f5ee] text-[#1c2d39]">
    <Header locale={locale} slug="search" limitedLocales />
    <main>
      <section className="relative isolate overflow-hidden bg-[#112632] px-5 py-16 text-[#faf6e9] sm:py-24">
        <Image src="/images/travel/istanbul/four-seasons-bosphorus/four-seasons-bosphorus-01-hero.webp" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0d1a23]/95 via-[#0d1a23]/80 to-[#0d1a23]/35" />
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.24em] text-[#e7c78a]">Bosphoras Luxury Stays</p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">{fr ? 'Votre prochaine adresse, partout dans le monde.' : 'Your next place to stay, anywhere in the world.'}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e1e5e3]">{fr ? 'Un guide pour choisir. Un moteur hôtelier pour trouver votre séjour, y compris au-delà de nos sélections.' : 'A guide to help you choose. A hotel search to find your stay, beyond our editorial selections.'}</p>
          <p className="mt-7 inline-block rounded-full border border-[#e7c78a]/50 px-4 py-2 text-xs text-[#f1d9ac]">{fr ? 'Aperçu privé · réservation non ouverte' : 'Private preview · booking not yet open'}</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 py-12">
        <HotelGuideExplorer locale={locale} destinations={travelDestinations.filter(destination => destination.categories.includes('hotels')).map(({ slug, name, country }) => ({ slug, name, country }))} />
        <section className="mt-12 grid gap-8 border-t border-[#dfd4c2] pt-10 md:grid-cols-2" aria-labelledby="booking-role">
          <div><p className="text-xs uppercase tracking-[0.18em] text-[#80623d]">{fr ? 'Un parcours clair' : 'A clear booking journey'}</p><h2 id="booking-role" className="mt-3 font-serif text-3xl">{fr ? 'La marque Bosphoras, la réservation chez le fournisseur.' : 'The Bosphoras brand, booking handled by the supplier.'}</h2></div>
          <div className="space-y-4 text-sm leading-7 text-[#52616c]">
            <p>{fr ? 'Nous préparons un parcours de recherche et de réservation en marque blanche avec Nuitée. Après validation du partenariat, le fournisseur indiqué prendra en charge le paiement, la confirmation, les modifications, les annulations, les remboursements et le service client.' : 'We are preparing a white-label hotel search and booking journey with Nuitée. Once the partnership is validated, the named supplier will handle payment, confirmation, changes, cancellations, refunds and customer support.'}</p>
            <p>{fr ? 'Bosphoras reste un guide et un apporteur d’affaires. Aucun paiement ni demande de SAV de séjour ne sera traité par Bosphoras. Les conditions du fournisseur seront présentées avant toute réservation.' : 'Bosphoras remains a guide and referral service. Bosphoras will not process stay payments or after-sales requests. Supplier terms will be presented before any booking.'}</p>
            <p>{fr ? 'Les guides pourront aussi proposer une option Expedia lorsque le lien de l’hôtel et le suivi de commission auront été vérifiés. Bosphoras pourra percevoir une commission.' : 'Guides may also offer an Expedia option once the hotel link and commission tracking have been verified. Bosphoras may earn a commission.'}</p>
          </div>
        </section>
      </div>
    </main>
    <Footer locale={locale} />
  </div>;
}
