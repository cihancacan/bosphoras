import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HotelGuideExplorer } from '@/components/travel/HotelGuideExplorer';
import { travelDestinations } from '@/data/travel/destinations';
import { travelHref } from '@/lib/travel/i18n';
import { isHotelSearchPreview } from '@/lib/travel/hotelSearchPreview';
import s from './HotelSearch.module.css';

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
  return <div lang={locale} className={s.page}>
    <header className={s.header}>
      <Link href={travelHref(locale)} className={s.brand} aria-label="Bosphoras Luxury Stays"><span className={s.brandName}>BOSPHORAS<small>LUXURY STAYS</small></span></Link>
      <nav className={s.headerNav} aria-label={fr ? 'Navigation principale' : 'Main navigation'}><a href="#destinations">{fr ? 'Nos destinations' : 'Our destinations'}</a><Link href={travelHref(locale,'hotels')}>{fr ? 'Nos adresses' : 'Our places'}</Link><a href="#booking-role">{fr ? 'Comment réserver' : 'How to book'}</a></nav>
      <div className={s.headerRight}><span className={s.previewTag}>{fr ? 'Aperçu privé' : 'Private preview'}</span><nav className={s.languages} aria-label={fr ? 'Langue' : 'Language'}>{(['fr','en'] as const).map(code=><Link key={code} href={travelHref(code,'search')} hrefLang={code} lang={code} aria-current={locale===code?'page':undefined}>{code.toUpperCase()}</Link>)}</nav></div>
    </header>
    <main>
      <HotelGuideExplorer locale={locale} destinations={travelDestinations.filter(d=>d.categories.includes('hotels')).map(({slug,name,country,region})=>({slug,name,country,region}))}/>
      <section id="booking-role" className={s.transparency} aria-labelledby="booking-role-title"><div className={s.transparencyInner}>
        <div><p className={s.eyebrow}>{fr ? 'LA CONFIANCE, SANS DÉTOUR' : 'TRAVEL WITH CLARITY'}</p><h2 id="booking-role-title">{fr ? 'L’inspiration Bosphoras. Une réservation entre les mains du spécialiste.' : 'Bosphoras inspiration. Booking in expert hands.'}</h2></div>
        <div><p>{fr ? 'Bosphoras sélectionne et vous oriente. Nous préparons la réservation en marque blanche avec Nuitée : le fournisseur identifié devra gérer paiement, confirmation, modifications, annulations, remboursements et assistance voyageurs.' : 'Bosphoras curates and guides. We are preparing white-label booking with Nuitée: the named supplier must handle payment, confirmation, changes, cancellations, refunds and traveler support.'}</p><p>{fr ? 'Pour le moment, vous explorez nos guides. Les dates et voyageurs saisis servent à préparer votre séjour ; les tarifs et disponibilités ne sont pas encore interrogés. Bosphoras ne vend pas les séjours et n’assure pas leur SAV. Les réservations ouvriront après validation du partenariat. Des liens partenaires pourront nous rémunérer.' : 'For now, explore our guides. Dates and guest choices help plan your stay; rates and availability are not queried yet. Bosphoras does not sell stays or provide after-sales support. Bookings will open after partner validation. Partner links may earn us a commission.'}</p></div>
      </div></section>
    </main>
    <footer className={s.footer}><div><strong>BOSPHORAS</strong><p>Luxury Stays · The world, through local eyes.</p></div><nav aria-label={fr?'Informations légales':'Legal information'}><Link href="/mentions-legales">{fr?'Mentions légales':'Legal notice'}</Link><Link href="/confidentialite">{fr?'Confidentialité':'Privacy'}</Link><a href="#booking-role">{fr?'Réservation et transparence':'Booking transparency'}</a></nav><span>© Bosphoras</span></footer>
  </div>;
}
