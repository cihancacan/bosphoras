'use client';

import { useId, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, Heart, MapPin, Minus, Plus, Search, Users, X } from 'lucide-react';
import { travelHref } from '@/lib/travel/i18n';
import s from './HotelSearch.module.css';

type Destination = { slug: string; name: string; country: string; region: string };
type Mood = 'all' | 'coast' | 'city' | 'mountain' | 'saved';
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const photos: Record<string, string> = {
  istanbul: '/images/travel/istanbul/four-seasons-bosphorus/four-seasons-bosphorus-01-hero.webp',
  paris: '/images/travel/paris-premium/destination/paris-eiffel-seine-wide.webp',
  maldives: '/images/travel/maldives-premium/destination/lagoon-aerial.webp',
  bali: '/images/travel/bali-premium/destination/bali-uluwatu-ocean-hero.webp',
  'saint-tropez': '/images/travel/saint-tropez-premium/destination/saint-tropez-harbour-hero.webp',
  dubai: '/images/travel/dubai-premium/destination/palm-aerial-bright.webp',
  'courchevel-1850': '/images/travel/courchevel-1850-premium/destination/alps-1.webp',
};
const coast = new Set(['bodrum','antalya','bali','maldives','saint-tropez','phuket','koh-samui','los-cabos','saint-barthelemy','porto-cervo','mustique','capri','positano','mykonos','ibiza','formentera','comporta','palm-beach','canouan','necker-island','punta-mita']);
const cities = new Set(['istanbul','paris','dubai','new-york','miami','los-angeles','london','tokyo','singapore','monaco']);
const slides = ['istanbul','maldives','courchevel-1850'];
const featured = ['maldives','paris','bali','istanbul','courchevel-1850','saint-tropez','dubai'];

export function HotelGuideExplorer({ locale, destinations }: { locale: 'fr' | 'en'; destinations: Destination[] }) {
  const fr = locale === 'fr';
  const id = useId();
  const results = useRef<HTMLElement>(null);
  const destinationInput = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [mood, setMood] = useState<Mood>('all');
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState<'dates' | 'guests' | null>(null);
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [saved, setSaved] = useState<string[]>([]);
  const [limit, setLimit] = useState(6);
  const [submitted, setSubmitted] = useState(false);
  const activeSlide = destinations.find(d => d.slug === slides[slide]);
  const filtered = destinations.filter(d => normalize(`${d.name} ${d.country}`).includes(normalize(query.trim())) &&
    (mood === 'all' || (mood === 'saved' && saved.includes(d.slug)) || (mood === 'coast' && coast.has(d.slug)) || (mood === 'city' && cities.has(d.slug)) || (mood === 'mountain' && d.region === 'alps')))
    .sort((a,b) => (featured.indexOf(a.slug) < 0 ? 100 : featured.indexOf(a.slug)) - (featured.indexOf(b.slug) < 0 ? 100 : featured.indexOf(b.slug)));
  const shortDate = (value: string) => value ? new Date(`${value}T12:00:00`).toLocaleDateString(fr ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'short' }) : '';
  const dateLabel = arrival ? `${shortDate(arrival)}${departure ? ` — ${shortDate(departure)}` : ''}` : (fr ? 'Choisir mes dates' : 'Choose dates');
  const explore = (event: React.FormEvent) => {
    event.preventDefault(); setSubmitted(true); setOpen(null);
    results.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };
  const changeMood = (value: Mood) => { setMood(value); setLimit(6); };
  return <>
    <section className={s.hero} aria-label={fr ? 'Inspiration de voyage' : 'Travel inspiration'}>
      {slides.map((slug,index) => <div key={slug} className={`${s.heroImage} ${slide === index ? s.heroImageActive : ''}`} aria-hidden="true"><Image src={photos[slug]} alt="" fill priority={index === 0} sizes="100vw" /></div>)}
      <div className={s.heroShade} />
      <div className={s.heroContent}>
        <p className={s.eyebrow}>{fr ? 'LE VOYAGE COMMENCE PAR UNE ADRESSE' : 'EVERY GREAT JOURNEY STARTS WITH A PLACE'}</p>
        <h1>{fr ? <>Trouvez votre<br/>prochaine <em>exception.</em></> : <>Find your next<br/><em>extraordinary stay.</em></>}</h1>
        <p className={s.heroSubtitle}>{fr ? 'Palaces au bord de l’eau, refuges confidentiels, échappées lointaines. À chaque envie, une nouvelle destination.' : 'Waterfront palaces, intimate hideaways, faraway escapes. A new destination for every kind of journey.'}</p>
      </div>
      <div className={s.heroLocation}><MapPin size={15}/><span>{activeSlide?.name}</span><span className={s.slideCount}>0{slide+1} / 03</span><div className={s.slideDots}>{slides.map((slug,index) => <button key={slug} type="button" onClick={() => setSlide(index)} aria-label={`${fr ? 'Voir' : 'Show'} ${destinations.find(d=>d.slug===slug)?.name}`} aria-pressed={slide === index} className={slide === index ? s.dotActive : ''}/>)}</div></div>
    </section>

    <div className={s.searchWrap}>
      <div className={s.searchCard}>
        <div className={s.searchTopline}><span><span className={s.goldDot}/>{fr ? 'VOTRE SÉJOUR, SELON VOS ENVIES' : 'YOUR STAY, YOUR WAY'}</span><span className={s.editorialLabel}>{fr ? 'Sélection éditoriale' : 'Editorial collection'}</span></div>
        <form onSubmit={explore} className={s.searchForm}>
          <div className={s.destinationField}><MapPin size={21} strokeWidth={1.5}/><div><label htmlFor={`${id}-destination`}>{fr ? 'DESTINATION' : 'DESTINATION'}</label><input ref={destinationInput} id={`${id}-destination`} type="search" autoComplete="off" value={query} onChange={e=>{setQuery(e.target.value);setLimit(6);setSubmitted(false);}} placeholder={fr ? 'Une ville, une île, une envie…' : 'A city, an island, an escape…'} /></div></div>
          <div className={s.fieldWrap}>
            <button type="button" className={s.fieldButton} aria-expanded={open === 'dates'} aria-controls={`${id}-dates`} onClick={()=>setOpen(open === 'dates' ? null : 'dates')}><CalendarDays size={21} strokeWidth={1.5}/><span><small>{fr ? 'ARRIVÉE — DÉPART' : 'CHECK-IN — CHECK-OUT'}</small><strong>{dateLabel}</strong></span><ChevronDown size={14}/></button>
            {open === 'dates' && <div className={s.popover} id={`${id}-dates`} onKeyDown={e=>{if(e.key==='Escape')setOpen(null);}}><div className={s.popoverHeading}><strong>{fr ? 'Vos dates de séjour' : 'Your stay dates'}</strong><button type="button" aria-label={fr ? 'Fermer les dates' : 'Close dates'} onClick={()=>setOpen(null)}><X size={17}/></button></div><label>{fr ? 'Arrivée' : 'Check-in'}<input type="date" value={arrival} required={Boolean(departure)} onInput={e=>{setArrival(e.currentTarget.value);if(departure && e.currentTarget.value>=departure)setDeparture('');}} onChange={e=>{setArrival(e.target.value);if(departure && e.target.value>=departure)setDeparture('');}} /></label><label>{fr ? 'Départ' : 'Check-out'}<input type="date" min={arrival ? new Date(new Date(`${arrival}T12:00:00`).getTime()+86400000).toISOString().slice(0,10) : undefined} value={departure} required={Boolean(arrival)} onInput={e=>setDeparture(e.currentTarget.value)} onChange={e=>setDeparture(e.target.value)} /></label><p>{fr ? 'Ces dates préparent votre recherche. Aucune disponibilité n’est encore vérifiée.' : 'These dates prepare your search. Availability has not been checked.'}</p><button type="button" className={s.applyButton} onClick={()=>setOpen(null)}>{fr ? 'Appliquer' : 'Apply'}<Check size={16}/></button></div>}
          </div>
          <div className={s.fieldWrap}>
            <button type="button" className={s.fieldButton} aria-expanded={open === 'guests'} aria-controls={`${id}-guests`} onClick={()=>setOpen(open === 'guests' ? null : 'guests')}><Users size={21} strokeWidth={1.5}/><span><small>{fr ? 'VOYAGEURS' : 'GUESTS'}</small><strong>{adults} {fr ? 'adultes' : 'adults'} · {rooms} {fr ? (rooms>1?'chambres':'chambre') : (rooms>1?'rooms':'room')}</strong></span><ChevronDown size={14}/></button>
            {open === 'guests' && <div className={s.popover} id={`${id}-guests`} onKeyDown={e=>{if(e.key==='Escape')setOpen(null);}}><div className={s.popoverHeading}><strong>{fr ? 'Qui vous accompagne ?' : 'Who is coming?'}</strong><button type="button" aria-label={fr ? 'Fermer les voyageurs' : 'Close guests'} onClick={()=>setOpen(null)}><X size={17}/></button></div>{[{label:fr?'Adultes':'Adults',value:adults,min:1,max:12,set:setAdults},{label:fr?'Chambres':'Rooms',value:rooms,min:1,max:6,set:setRooms}].map(counter=><div className={s.counter} key={counter.label}><span>{counter.label}</span><div><button type="button" disabled={counter.value===counter.min} aria-label={`${fr?'Diminuer':'Decrease'} ${counter.label}`} onClick={()=>counter.set(counter.value-1)}><Minus size={15}/></button><output aria-live="polite">{counter.value}</output><button type="button" disabled={counter.value===counter.max} aria-label={`${fr?'Augmenter':'Increase'} ${counter.label}`} onClick={()=>counter.set(counter.value+1)}><Plus size={15}/></button></div></div>)}<button type="button" className={s.applyButton} onClick={()=>setOpen(null)}>{fr ? 'Appliquer' : 'Apply'}<Check size={16}/></button></div>}
          </div>
          <button type="submit" className={s.searchButton}><Search size={19}/>{fr ? 'Explorer' : 'Explore'}<ArrowRight size={19}/></button>
        </form>
        <div className={s.searchBottom}><div>{fr ? 'Envies du moment :' : 'Find your inspiration:'}{['Istanbul','Paris','Bali','Maldives'].map(name=><button type="button" key={name} onClick={()=>{setQuery(name);setMood('all');setLimit(6);destinationInput.current?.focus();}}>{name}</button>)}</div><p>{fr ? 'Tarifs et réservations bientôt disponibles' : 'Rates and booking coming soon'}</p></div>
      </div>
    </div>

    <section ref={results} id="destinations" className={s.destinations} aria-labelledby={`${id}-results`}>
      <div className={s.sectionHeading}><div><p className={s.eyebrow}>{fr ? 'LE MONDE, À VOTRE RYTHME' : 'THE WORLD, AT YOUR PACE'}</p><h2 id={`${id}-results`}>{query.trim() ? (fr ? 'Votre prochaine escale.' : 'Your next escape.') : (fr ? 'L’inspiration a ses adresses.' : 'Places that inspire.')}</h2></div><Link href={travelHref(locale,'destinations')} className={s.textLink}>{fr ? 'Toutes les destinations' : 'All destinations'}<ArrowUpRight size={17}/></Link></div>
      <div className={s.filterBar}><div className={s.filters}>{([{id:'all',fr:'Tout explorer',en:'Explore all'},{id:'coast',fr:'Bord de mer',en:'By the sea'},{id:'city',fr:'Villes iconiques',en:'Iconic cities'},{id:'mountain',fr:'À la montagne',en:'In the mountains'},{id:'saved',fr:`Mes envies${saved.length ? ` (${saved.length})` : ''}`,en:`Saved places${saved.length ? ` (${saved.length})` : ''}`} ] as {id:Mood;fr:string;en:string}[]).map(item=><button key={item.id} type="button" aria-pressed={mood===item.id} onClick={()=>changeMood(item.id)} className={mood===item.id?s.filterActive:''}>{item.id==='saved'&&<Heart size={14}/>} {fr?item.fr:item.en}</button>)}</div><p role="status">{filtered.length} {fr ? (filtered.length===1?'destination':'destinations') : (filtered.length===1?'destination':'destinations')}</p></div>
      {submitted && (arrival || rooms!==1 || adults!==2) && <p className={s.preferenceSummary}><Check size={15}/>{fr ? 'Vos préférences :' : 'Your preferences:'} {arrival && dateLabel} · {adults} {fr?'adultes':'adults'} · {rooms} {fr?'chambre(s)':'room(s)'}. {fr ? 'Les résultats ci-dessous sont des guides, sans vérification de disponibilité.' : 'The results below are guides, without an availability check.'}</p>}
      {filtered.length>0 ? <div className={s.cardGrid}>{filtered.slice(0,limit).map((d,index)=><article className={s.destinationCard} key={d.slug}><Link href={travelHref(locale,`hotels/${d.slug}`)} className={s.cardImageLink} aria-label={`${fr?'Découvrir':'Explore'} ${d.name}`}>
        {photos[d.slug] ? <Image src={photos[d.slug]} alt={d.name} fill sizes="(max-width: 640px) 90vw, (max-width: 960px) 45vw, 32vw" className={s.cardImage}/> : <div className={s.typographicCard}><span>{d.name}</span><MapPin size={38} strokeWidth={1}/></div>}
        <span className={s.cardBadge}>{fr?'Le guide Bosphoras':'The Bosphoras guide'}</span><span className={s.cardNumber}>0{index+1}</span>
      </Link><button type="button" className={`${s.saveButton} ${saved.includes(d.slug)?s.saved:''}`} aria-pressed={saved.includes(d.slug)} aria-label={`${saved.includes(d.slug)?(fr?'Retirer':'Unsave'):(fr?'Enregistrer':'Save')} ${d.name}`} onClick={()=>setSaved(current=>current.includes(d.slug)?current.filter(slug=>slug!==d.slug):[...current,d.slug])}><Heart size={18} fill={saved.includes(d.slug)?'currentColor':'none'}/></button><div className={s.cardDetails}><div><p>{d.country}</p><h3><Link href={travelHref(locale,`hotels/${d.slug}`)}>{d.name}</Link></h3></div><Link href={travelHref(locale,`hotels/${d.slug}`)} className={s.cardArrow} aria-label={`${fr?'Lire le guide de':'Read the guide to'} ${d.name}`}><ArrowUpRight size={21}/></Link></div></article>)}</div> : <div className={s.emptyState}><Search size={30} strokeWidth={1}/><h3>{fr ? 'Une autre envie d’ailleurs ?' : 'Somewhere else in mind?'}</h3><p>{mood==='saved' ? (fr ? 'Enregistrez les destinations qui vous inspirent avec le cœur sur chaque carte.' : 'Save places that inspire you using the heart on each card.') : (fr ? 'Aucun guide ne correspond à ces critères. Essayez une ville, un pays ou une autre ambiance.' : 'No guide matches these choices. Try another city, country or travel mood.')}</p><button type="button" className={s.outlineButton} onClick={()=>{setQuery('');changeMood('all');}}>{fr ? 'Tout explorer' : 'Explore all'}<ArrowRight size={16}/></button></div>}
      {filtered.length>limit && <div className={s.loadMore}><button type="button" className={s.outlineButton} onClick={()=>setLimit(current=>current+6)}>{fr ? 'Encore un peu d’inspiration' : 'A little more inspiration'}<Plus size={17}/></button></div>}
    </section>
  </>;
}
