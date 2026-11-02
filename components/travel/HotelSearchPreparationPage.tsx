import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HotelGuideExplorer } from '@/components/travel/HotelGuideExplorer';
import { travelDestinations } from '@/data/travel/destinations';
import { travelHref } from '@/lib/travel/i18n';
import { isHotelSearchAvailable } from '@/lib/travel/hotelSearchPreview';
import { isNuiteeBookingLive, nuiteeSearchDestinations, getNuiteeWorldwideSearch } from '@/lib/travel/nuiteeLaunch';
import s from './HotelSearch.module.css';

export function hotelSearchMetadata(locale: 'fr' | 'en'): Metadata {
  const live = isNuiteeBookingLive();
  return {
    title: locale === 'fr' ? 'Rechercher un hôtel | Bosphoras Luxury Stays' : 'Find a hotel | Bosphoras Luxury Stays',
    description: locale === 'fr' ? 'Recherchez votre prochain séjour et découvrez les guides Bosphoras Luxury Stays. Réservation opérée par Nuitée.' : 'Find your next stay and explore Bosphoras Luxury Stays guides. Booking operated by Nuitée.',
    robots: { index: live, follow: live },
    alternates: { canonical: `https://www.bosphoras.com/${locale === 'en' ? 'en/' : ''}travel/search` },
  };
}

export function HotelSearchPreparationPage({ locale }: { locale: 'fr' | 'en' }) {
  if (!isHotelSearchAvailable()) notFound();
  const fr = locale === 'fr';
  const bookingReady = isNuiteeBookingLive();
  return <div lang={locale} className={s.page}>
    <header className={s.header}>
      <Link href={travelHref(locale)} className={s.brand} aria-label="Bosphoras Luxury Stays"><span className={s.brandName}><span className={s.brandLetters}>BOSPHORAS</span><small>LUXURY STAYS</small></span></Link>
      <nav className={s.headerNav} aria-label={fr ? 'Navigation principale' : 'Main navigation'}><a href="#destinations">{fr ? 'Nos destinations' : 'Our destinations'}</a><Link href={travelHref(locale,'hotels')}>{fr ? 'Nos adresses' : 'Our places'}</Link><a href="#booking-role">{fr ? 'Comment réserver' : 'How to book'}</a></nav>
      <div className={s.headerRight}><span className={s.previewTag}>Luxury Stays</span><nav className={s.languages} aria-label={fr ? 'Langue' : 'Language'}>{(['fr','en'] as const).map(code=><Link key={code} href={travelHref(code,'search')} hrefLang={code} lang={code} aria-current={locale===code?'page':undefined}>{code.toUpperCase()}</Link>)}</nav></div>
    </header>
    <main>
      <HotelGuideExplorer locale={locale} worldwideUrl={getNuiteeWorldwideSearch(locale)} bookingReady={bookingReady} bookingDestinations={nuiteeSearchDestinations} destinations={travelDestinations.filter(d=>d.categories.includes('hotels')).map(({slug,name,country,region})=>({slug,name,country,region}))}/>
      <section id="booking-role" className={s.transparency} aria-labelledby="booking-role-title"><div className={s.transparencyInner}>
        <div><p className={s.eyebrow}>{fr ? 'LA CONFIANCE, SANS DÉTOUR' : 'TRAVEL WITH CLARITY'}</p><h2 id="booking-role-title">{fr ? 'L’inspiration Bosphoras. Une réservation entre les mains du spécialiste.' : 'Bosphoras inspiration. Booking in expert hands.'}</h2></div>
        <div><p>{fr ? 'Bosphoras sélectionne et vous oriente. Le moteur de réservation est opéré par Nuitée Travel Limited, qui encaisse le paiement et gère confirmation, modifications, annulations, remboursements et assistance voyageurs.' : 'Bosphoras curates and guides. The booking engine is operated by Nuitée Travel Limited, which collects payment and handles confirmation, changes, cancellations, refunds and traveler support.'}</p><p>{bookingReady ? (fr ? 'Les tarifs et disponibilités sont vérifiés dans le moteur Nuitée. Bosphoras est un apporteur d’affaires et peut percevoir une commission. Les conditions du tarif choisi sont présentées avant le paiement.' : 'Rates and availability are checked in the Nuitée engine. Bosphoras is a referral service and may earn a commission. Your selected rate terms are shown before payment.') : (fr ? 'Les réservations ne sont pas encore ouvertes. Vous pouvez explorer nos guides et préparer votre séjour. Aucun tarif ni disponibilité n’est annoncé sur cette page.' : 'Bookings are not open yet. Explore our guides and plan your stay. This page does not quote rates or availability.')} {fr ? 'Bosphoras ne vend pas les séjours et n’assure pas leur SAV.' : 'Bosphoras does not sell stays or provide after-sales support.'}</p></div>
      </div></section>
    </main>
    <footer className={s.footer}><div><strong>BOSPHORAS</strong><p>Luxury Stays · The world, through local eyes.</p></div><nav aria-label={fr?'Informations légales':'Legal information'}><Link href="/mentions-legales">{fr?'Mentions légales':'Legal notice'}</Link><Link href="/confidentialite">{fr?'Confidentialité':'Privacy'}</Link><a href="#booking-role">{fr?'Réservation et transparence':'Booking transparency'}</a></nav><span>© Bosphoras</span></footer>
  </div>;
}
