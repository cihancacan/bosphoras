'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Check, Headphones, LockKeyhole, Search, SlidersHorizontal } from 'lucide-react';
import { travelHref } from '@/lib/travel/i18n';
import { readWidgetOccupancy, completeRoomAllocation, type RoomAllocation, type SearchRoom } from '@/lib/travel/nuiteeWidgetOccupancy';
import s from './HotelReservation.module.css';
import { findVerifiedHotelForPlace } from '@/lib/travel/verifiedHotelMatch';

type SearchPayload = {
  place?: { place_id?: string; description?: string };
  checkin?: string; checkout?: string;
  occupancies?: string;
  rooms?: number;
};
type SearchSDK = {
  init: (options: { domain: string; deepLinkParams: string; labelsOverride: { searchAction: string; placePlaceholderText: string } }) => void;
  SearchBar: { create: (options: { selector: string; primaryColor: string; onSearchClick: (data: SearchPayload) => void }) => void };
};

const cities = [
  { key: 'istanbul', name: 'Istanbul', country: 'Türkiye', image: '/images/travel/istanbul/four-seasons-bosphorus/four-seasons-bosphorus-01-hero.webp' },
  { key: 'paris', name: 'Paris', country: 'France', image: '/images/travel/paris-premium/destination/paris-eiffel-seine-wide.webp' },
  { key: 'bali', name: 'Bali', country: 'Indonesia', image: '/images/travel/bali-premium/destination/bali-uluwatu-ocean-hero.webp' },
];

/** Official supplier search and hosted booking. No keys, guest data or payment API. */
export function HotelReservationSearch({ locale, origin, initialUrl }: { locale: 'fr' | 'en'; origin: string; initialUrl: string | null }) {
  const fr = locale === 'fr';
  const widgetId = `booking-search-${useId().replace(/:/g, '')}`;
  const widget = useRef<HTMLDivElement>(null);
  const submitting = useRef(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [bookingUrl, setBookingUrl] = useState(initialUrl);
  const [summary, setSummary] = useState('');
  const [pending, setPending] = useState<{ data: SearchPayload; plan: RoomAllocation } | null>(null);
  const [roomAdults, setRoomAdults] = useState<string[]>([]);
  const [childRooms, setChildRooms] = useState<string[]>([]);
  const allocated = pending ? completeRoomAllocation(pending.plan, roomAdults.map(Number), childRooms.map(value => value === '' ? -1 : Number(value))) : null;
  const engineUrl = `${origin}/?${new URLSearchParams({ language: locale, currency: 'EUR', clientReference: 'bosphoras_search' })}`;

  const submitSearch = useCallback(async (data: SearchPayload, rooms: SearchRoom[]) => {
    if (submitting.current) return;
    setError('');
    if (!data.place?.place_id || !data.place.description || !data.checkin || !data.checkout) {
      setError(fr ? 'Choisissez une destination proposée et vos dates.' : 'Choose a suggested destination and your dates.'); return;
    }
    submitting.current = true; setBusy(true);
    const hotel = findVerifiedHotelForPlace(data.place.description);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch('/api/travel/booking/search', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
        body: JSON.stringify({ ...(hotel
          ? { hotelId: hotel.hotelId }
          : { placeId: data.place.place_id, displayName: data.place.description }),
          checkin: data.checkin, checkout: data.checkout, rooms, locale }),
      });
      const body = await response.json();
      if (!response.ok || typeof body.url !== 'string' || new URL(body.url).origin !== origin) throw new Error('invalid search');
      // Navigate directly to the supplier-owned booking site; embedding a full
      // second app in an iframe prolonged the perceived loading experience.
      setBookingUrl(body.url); setPending(null);
      const date = (day: string) => new Date(`${day}T12:00:00`).toLocaleDateString(fr ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'short' });
      setSummary(`${hotel?.name || data.place.description} · ${date(data.checkin)} – ${date(data.checkout)}`);
      window.location.assign(body.url);
    } catch { setError(fr ? 'La recherche n’a pas abouti. Réessayez ou ouvrez le moteur en plein écran.' : 'Search could not complete. Try again or open the full-screen booking engine.'); }
    finally { window.clearTimeout(timeout); submitting.current = false; setBusy(false); }
  }, [fr, locale, origin]);

  const search = useCallback((data: SearchPayload) => {
    if (submitting.current) return;
    setError(''); setPending(null);
    try {
      const selection = readWidgetOccupancy(data);
      if (selection.mode === 'allocate') {
        setPending({ data, plan: selection });
        setRoomAdults(Array(selection.roomCount).fill(''));
        setChildRooms(Array(selection.children.length).fill(''));
      } else void submitSearch(data, selection.rooms);
    } catch { setError(fr ? 'Veuillez vérifier les voyageurs et les chambres.' : 'Please check your guests and rooms.'); }
  }, [fr, submitSearch]);

  const resetSearch = useCallback(() => {
    if (initialUrl) { window.location.assign(travelHref(locale, 'search')); return; }
    setBookingUrl(null);
    setSummary('');
    setPending(null);
    setError('');
    setWidgetReady(false);
  }, [initialUrl, locale]);

  useEffect(() => {
    if (bookingUrl || !sdkReady || !widget.current) return;
    const sdk = (window as Window & { LiteAPI?: SearchSDK }).LiteAPI;
    if (!sdk?.SearchBar) { setError(fr ? 'Le moteur de recherche n’a pas pu être chargé.' : 'The search engine could not load.'); return; }
    widget.current.replaceChildren();
    try {
      sdk.init({ domain: new URL(origin).hostname, deepLinkParams: new URLSearchParams({ language: locale, currency: 'EUR', clientReference: 'bosphoras_search' }).toString(), labelsOverride: { searchAction: fr ? 'Rechercher' : 'Search', placePlaceholderText: fr ? 'Ville, région ou hôtel' : 'City, region or hotel' } });
      sdk.SearchBar.create({ selector: `#${widgetId}`, primaryColor: '#172b2c', onSearchClick: search });
      setWidgetReady(true);
    } catch { setError(fr ? 'Le moteur de recherche n’a pas pu être chargé.' : 'The search engine could not load.'); }
    const element = widget.current;
    return () => { element.replaceChildren(); };
  }, [sdkReady, fr, locale, origin, search, widgetId, bookingUrl]);

  return <>
    <Script src="https://components.liteapi.travel/v1.0/sdk.umd.js" strategy="afterInteractive" onReady={() => setSdkReady(true)} onError={() => setError(fr ? 'Le moteur de recherche n’a pas pu être chargé.' : 'The search engine could not load.')} />
    {!bookingUrl && <section className={s.searchHero} aria-labelledby="reservation-title">
      <div className={s.heroPhotos} aria-hidden="true"><span className={s.heroSlide} /><span className={s.heroSlide} /><span className={s.heroSlide} /><span className={s.heroVeil} /></div>
      <div className={s.heroInner}>
        <h1 id="reservation-title">{fr ? 'Des adresses qui valent le voyage.' : 'Hotels worth travelling for.'}</h1>
        <p className={s.heroText}>{fr ? 'Découvrez des hôtels remarquables, aux quatre coins du monde.' : 'Discover remarkable hotels around the world.'}</p>
        <div className={s.searchPanel} aria-label={fr ? 'Rechercher des hôtels' : 'Search hotels'} aria-busy={busy}>
          {!widgetReady && <div className={s.widgetLoading} role="status"><Search size={20} />{fr ? 'Chargement de la recherche…' : 'Loading hotel search…'}</div>}
          <div ref={widget} id={widgetId} className={s.widget} />
          {pending && <form className={s.allocation} onSubmit={event => { event.preventDefault(); if (allocated) void submitSearch(pending.data, allocated); }} aria-labelledby={`${widgetId}-allocation-title`}>
            <h2 id={`${widgetId}-allocation-title`}>{fr ? 'Qui séjourne dans chaque chambre ?' : 'Who is staying in each room?'}</h2>
            <p>{fr ? `${pending.plan.adults} adultes à répartir dans ${pending.plan.roomCount} chambres. Précisez la répartition pour rechercher les bons tarifs.` : `Assign ${pending.plan.adults} adults to ${pending.plan.roomCount} rooms to search the right rates.`}</p>
            <div className={s.allocationGrid}>{roomAdults.map((count, index) => <label key={index}>{fr ? 'Chambre' : 'Room'} {index + 1}<span>{fr ? 'Adultes' : 'Adults'}</span><select required value={count} onChange={event => setRoomAdults(current => current.map((value, i) => i === index ? event.target.value : value))}><option value="">{fr ? 'Choisir…' : 'Choose…'}</option>{Array.from({ length: pending.plan.adults }, (_, i) => i + 1).map(value => <option key={value} value={value}>{value}</option>)}</select></label>)}</div>
            {pending.plan.children.map((age, index) => <label key={index} className={s.childAllocation}>{fr ? `Enfant ${index + 1} · ${age} ans` : `Child ${index + 1} · age ${age}`}<select required value={childRooms[index]} onChange={event => setChildRooms(current => current.map((value, i) => i === index ? event.target.value : value))}><option value="">{fr ? 'Choisir la chambre…' : 'Choose room…'}</option>{roomAdults.map((_, i) => <option key={i} value={i}>{fr ? 'Chambre' : 'Room'} {i + 1}</option>)}</select></label>)}
            <div className={s.allocationActions}><button type="submit" disabled={!allocated || busy}>{fr ? 'Afficher les hôtels' : 'Show hotels'} <ArrowRight size={16}/></button><button type="button" onClick={() => setPending(null)}>{fr ? 'Modifier la recherche' : 'Edit search'}</button></div>
          </form>}
          {busy && <p className={s.formStatus} role="status">{fr ? 'Recherche de votre séjour…' : 'Searching for your stay…'}</p>}
          {error && <p className={s.error} role="alert">{error} <a href={engineUrl} target="_blank" rel="sponsored noopener noreferrer">{fr ? 'Ouvrir la réservation' : 'Open the booking engine'} ↗</a></p>}
          <noscript><a href={engineUrl} rel="sponsored">{fr ? 'Rechercher et réserver' : 'Search and book'} →</a></noscript>
        </div>
        <p className={s.searchNote}><LockKeyhole size={13} />{fr ? 'Tarifs et disponibilités actualisés · Réservation sécurisée' : 'Live rates and availability · Secure booking'}</p>
      </div>
    </section>}

    {bookingUrl ? <section className={s.results} aria-labelledby="hotel-results-title">
      <div className={s.resultsHeading}><div><p className={s.eyebrow}>{fr ? 'VOTRE RECHERCHE' : 'YOUR SEARCH'}</p><h1 id="hotel-results-title">{summary || (fr ? 'Choisissez votre chambre' : 'Choose your room')}</h1></div><div className={s.resultsActions}><button type="button" onClick={resetSearch}>{fr ? 'Nouvelle recherche' : 'New search'}</button><a href={bookingUrl} target="_blank" rel="sponsored noopener noreferrer">{fr ? 'Ouvrir en plein écran' : 'Open full screen'} <ArrowUpRight size={15} /></a></div></div>
      <div className={s.directBookingHandoff} role="status">
        <strong>{fr ? 'Ouverture des disponibilités chez Nuitée…' : 'Opening availability with Nuitee…'}</strong>
        <p>{fr ? 'Vous allez accéder directement aux résultats et aux tarifs de notre partenaire de réservation, sans chargement intégré.' : 'You are being taken directly to our booking partner’s hotel results and rates, without the embedded page.'}</p>
        <a href={bookingUrl} rel="sponsored noopener noreferrer">{fr ? 'Accéder aux résultats maintenant' : 'Open hotel results now'} <ArrowUpRight size={16} /></a>
      </div>
      <p className={s.frameNote}>{fr ? 'La réservation, les paiements et le service après-vente sont gérés par Nuitée.' : 'Nuitee handles reservations, payments and after-sales support.'}</p>
    </section> : <>
      <div className={s.benefits}>
        <div><SlidersHorizontal size={22} /><p><strong>{fr ? 'Comparez à votre rythme' : 'Compare at your pace'}</strong><span>{fr ? 'Prix, emplacement, équipements : affinez votre recherche.' : 'Refine your search by price, location and amenities.'}</span></p></div>
        <div><Check size={22} /><p><strong>{fr ? 'Choisissez en toute clarté' : 'Choose with clarity'}</strong><span>{fr ? 'Chambre, repas et conditions d’annulation avant de réserver.' : 'Room, meals and cancellation conditions before booking.'}</span></p></div>
        <div><Headphones size={22} /><p><strong>{fr ? 'Un spécialiste à vos côtés' : 'Specialist support'}</strong><span>{fr ? 'Paiement, confirmation et assistance assurés par notre partenaire.' : 'Payments, confirmation and stay support handled by our partner.'}</span></p></div>
      </div>
      <section className={s.inspiration} aria-labelledby="booking-destinations-title"><div className={s.sectionTitle}><div><p className={s.eyebrow}>{fr ? 'OÙ PARTIREZ-VOUS ?' : 'WHERE WILL YOU GO?'}</p><h2 id="booking-destinations-title">{fr ? 'À chaque envie, sa destination.' : 'A destination for every kind of stay.'}</h2></div><a href={engineUrl} target="_blank" rel="sponsored noopener noreferrer">{fr ? 'Toutes les destinations' : 'All destinations'} <ArrowUpRight size={16}/></a></div>
        <div className={s.cityGrid}>{cities.map(city => <a key={city.key} href={`${travelHref(locale, 'search')}?destination=${city.key}`} className={s.city}><Image src={city.image} alt="" fill sizes="(max-width: 640px) 90vw, 32vw" /><span><small>{city.country}</small><strong>{city.name}</strong><span>{fr ? 'Rechercher un hôtel' : 'Find a hotel'} <ArrowRight size={16}/></span></span></a>)}</div>
      </section>
      <aside className={s.guideAside}><div><p className={s.eyebrow}>{fr ? 'LE REGARD BOSPHORAS' : 'THE BOSPHORAS EDIT'} </p><h2>{fr ? 'Besoin d’inspiration avant de choisir ?' : 'Looking for inspiration before you choose?'}</h2><p>{fr ? 'Nos guides vous font découvrir les destinations et les adresses que nous aimons.' : 'Explore our guides to destinations and places we love.'}</p></div><Link href={travelHref(locale, 'hotels')}>{fr ? 'Explorer les guides' : 'Explore the guides'} <ArrowRight size={17}/></Link></aside>
    </>}
  </>;
}
