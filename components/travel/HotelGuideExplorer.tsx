'use client';

import { useId, useMemo, useState } from 'react';
import Link from 'next/link';
import { travelHref } from '@/lib/travel/i18n';

type Destination = { slug: string; name: string; country: string };
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase();

export function HotelGuideExplorer({ locale, destinations }: { locale: 'fr' | 'en'; destinations: Destination[] }) {
  const fr = locale === 'fr';
  const id = useId();
  const [query, setQuery] = useState('');
  const matches = useMemo(() => destinations.filter(destination => normalize(`${destination.name} ${destination.country}`).includes(normalize(query.trim()))), [destinations, query]);
  const visible = query.trim() ? matches : matches.slice(0, 8);
  return <>
    <section className="rounded-2xl border border-[#dfd4c2] bg-white p-6 shadow-sm sm:p-8" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="font-serif text-3xl">{fr ? 'Où souhaitez-vous séjourner ?' : 'Where would you like to stay?'}</h2>
      <p id={`${id}-status`} className="mt-3 text-sm leading-7 text-[#52616c]">{fr ? 'La recherche de prix et de disponibilités ouvrira après validation du fournisseur. En attendant, explorez nos guides par destination.' : 'Price and availability search will open after supplier validation. Meanwhile, explore our destination guides.'}</p>
      <div className="mt-6 grid gap-5 lg:grid-cols-[2fr_1fr_1fr]">
        <div><label htmlFor={`${id}-destination`} className="text-sm font-semibold">{fr ? 'Destination ou pays' : 'Destination or country'}</label><input id={`${id}-destination`} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={fr ? 'Istanbul, Paris, Maldives…' : 'Istanbul, Paris, Maldives…'} aria-describedby={`${id}-status`} className="mt-2 w-full rounded-lg border border-[#b4b8b7] bg-[#fcfbf8] px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80623d]" /></div>
        <div><label htmlFor={`${id}-dates`} className="text-sm font-semibold">{fr ? 'Dates du séjour' : 'Stay dates'}</label><input id={`${id}-dates`} disabled value={fr ? 'Prochainement' : 'Coming soon'} className="mt-2 w-full rounded-lg border border-[#dfd4c2] bg-[#f8f5ee] px-4 py-3 text-[#52616c]" /></div>
        <div><label htmlFor={`${id}-guests`} className="text-sm font-semibold">{fr ? 'Voyageurs et chambres' : 'Guests and rooms'}</label><input id={`${id}-guests`} disabled value={fr ? 'Prochainement' : 'Coming soon'} className="mt-2 w-full rounded-lg border border-[#dfd4c2] bg-[#f8f5ee] px-4 py-3 text-[#52616c]" /></div>
      </div>
      <button type="button" disabled aria-describedby={`${id}-status`} className="mt-6 rounded-lg bg-[#142d39]/15 px-6 py-4 text-sm font-semibold text-[#52616c]">{fr ? 'Rechercher les disponibilités · bientôt' : 'Search availability · coming soon'}</button>
    </section>
    <section className="mt-12" aria-labelledby={`${id}-guides`}>
      <div className="flex flex-wrap items-end justify-between gap-4"><h2 id={`${id}-guides`} className="font-serif text-3xl">{fr ? 'Explorer les guides' : 'Explore the guides'}</h2><p role="status" className="text-sm text-[#52616c]">{query.trim() ? (fr ? `${matches.length} destination(s) correspondante(s)` : `${matches.length} matching destination(s)`) : (fr ? 'Quelques destinations pour commencer' : 'A few destinations to start with')}</p></div>
      {visible.length ? <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{visible.map(destination => <li key={destination.slug}><Link href={travelHref(locale,`hotels/${destination.slug}`)} className="block h-full rounded-xl border border-[#dfd4c2] bg-[#fffdf9] p-5 hover:border-[#80623d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"><span className="block font-serif text-xl">{destination.name}</span><span className="mt-2 block text-xs text-[#63717c]">{destination.country}</span><span className="mt-5 block text-sm text-[#80623d]">{fr ? 'Lire le guide' : 'Read the guide'} →</span></Link></li>)}</ul> : <p className="mt-6 rounded-lg border border-[#dfd4c2] p-6 text-sm leading-7">{fr ? 'Aucun guide ne correspond à cette recherche. Essayez une autre destination ou un pays. Ce résultat concerne nos guides, pas les disponibilités hôtelières du fournisseur.' : 'No guide matches this search. Try another destination or country. These results concern our guides, not the supplier’s hotel availability.'}</p>}
    </section>
  </>;
}
