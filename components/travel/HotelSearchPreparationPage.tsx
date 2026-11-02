import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HotelReservationSearch } from './HotelReservationSearch';
import { travelHref } from '@/lib/travel/i18n';
import { isHotelSearchAvailable } from '@/lib/travel/hotelSearchPreview';
import { getNuiteeReservationStart, isNuiteeBookingLive, nuiteeLaunch } from '@/lib/travel/nuiteeLaunch';
import s from './HotelReservation.module.css';

export function hotelSearchMetadata(locale: 'fr' | 'en'): Metadata {
  const live = isNuiteeBookingLive();
  return {
    title: locale === 'fr' ? 'Rechercher et réserver un hôtel | Bosphoras Luxury Stays' : 'Find and book a hotel | Bosphoras Luxury Stays',
    description: locale === 'fr' ? 'Recherchez votre hôtel par destination, dates et voyageurs. Comparez les chambres et réservez avec Nuitée, partenaire de Bosphoras Luxury Stays.' : 'Search hotels by destination, dates and guests. Compare rooms and book with Nuitée, the Bosphoras Luxury Stays booking partner.',
    robots: { index: live, follow: live },
    alternates: { canonical: `https://www.bosphoras.com/${locale === 'en' ? 'en/' : ''}travel/search` },
  };
}

export type HotelSearchParams = { hotel?: string | string[]; destination?: string | string[] };

export function HotelSearchPreparationPage({ locale, searchParams = {} }: { locale: 'fr' | 'en'; searchParams?: HotelSearchParams }) {
  if (!isHotelSearchAvailable()) notFound();
  const fr = locale === 'fr';
  const live = isNuiteeBookingLive();
  const selection = { hotel: typeof searchParams.hotel === 'string' ? searchParams.hotel : undefined, destination: typeof searchParams.destination === 'string' ? searchParams.destination : undefined };
  const initialUrl = getNuiteeReservationStart(locale, selection);
  if ((searchParams.hotel || searchParams.destination) && !initialUrl) notFound();
  return <div lang={locale} className={s.page}>
    <header className={s.header}>
      <Link href={travelHref(locale)} className={s.brand} aria-label="Bosphoras Luxury Stays"><strong>BOSPHORAS</strong><small>LUXURY STAYS</small></Link>
      <nav className={s.nav} aria-label={fr ? 'Navigation principale' : 'Main navigation'}>
        <Link href={travelHref(locale, 'search')} aria-current="page">{fr ? 'Réserver un hôtel' : 'Book a hotel'}</Link>
        <Link href={travelHref(locale, 'hotels')} data-secondary="true">{fr ? 'Les guides' : 'Travel guides'}</Link>
        <a href={`${nuiteeLaunch.origin}/help-center`} target="_blank" rel="noopener noreferrer" data-secondary="true">{fr ? 'Aide réservations' : 'Booking help'} ↗</a>
        <span className={s.languages}>{(['fr','en'] as const).map(code => <Link key={code} href={`${travelHref(code,'search')}${selection.hotel ? `?hotel=${encodeURIComponent(selection.hotel)}` : selection.destination ? `?destination=${encodeURIComponent(selection.destination)}` : ''}`} hrefLang={code} lang={code} aria-current={locale === code ? 'page' : undefined}>{code.toUpperCase()}</Link>)}</span>
      </nav>
    </header>
    <main>
      {live ? <HotelReservationSearch key={`${locale}:${initialUrl || 'search'}`} locale={locale} origin={nuiteeLaunch.origin} initialUrl={initialUrl} /> : <section className={s.disclosure}><h1>{fr ? 'Les réservations sont momentanément indisponibles.' : 'Bookings are temporarily unavailable.'}</h1><Link href={travelHref(locale,'hotels')}>{fr ? 'Explorer nos guides' : 'Explore our guides'}</Link></section>}
      <section className={s.disclosure} aria-labelledby="booking-role-title"><div><h2 id="booking-role-title">{fr ? 'Bosphoras vous inspire. Nuitée prend soin de votre réservation.' : 'Bosphoras inspires you. Nuitée takes care of your booking.'}</h2><p>{fr ? 'Le moteur et la réservation sont opérés par Nuitée Travel Limited, qui encaisse le paiement et assure confirmation, modifications, annulations, remboursements et assistance voyageurs. Bosphoras est un apporteur d’affaires et peut percevoir une commission. Les tarifs et conditions du séjour sont présentés par Nuitée avant paiement.' : 'The booking engine is operated by Nuitée Travel Limited, which collects payment and handles confirmation, changes, cancellations, refunds and traveler support. Bosphoras is a referral service and may earn a commission. Nuitée presents stay prices and conditions before payment.'}</p></div></section>
    </main>
    <footer className={s.footer}><span>© Bosphoras · Luxury Stays</span><nav aria-label={fr ? 'Informations et assistance' : 'Information and support'}><Link href="/mentions-legales">{fr ? 'Mentions légales' : 'Legal notice'}</Link><Link href="/confidentialite">{fr ? 'Confidentialité' : 'Privacy'}</Link><a href={`${nuiteeLaunch.origin}/help-center`} target="_blank" rel="noopener noreferrer">{fr ? 'Assistance Nuitée' : 'Nuitée support'} ↗</a></nav></footer>
  </div>;
}
