'use client';

import { useState } from 'react';

type Hotel = { name: string; starRating: number; available: boolean; roomTypesCount: number; heroImageUrl: string | null };
type SearchResult = {
  ok: boolean; city?: string; checkIn?: string; nights?: number; adults?: number; rooms?: number;
  pageCount?: number; totalElements?: number; totalPages?: number; searchedAt?: string;
  currency?: string; hotels?: Hotel[]; accountConfirmed?: boolean; info?: string; method?: string; filters?: string;
  error?: string; stage?: string; grpcCode?: number;
};
const searchAreas = [
  { slug: 'global', label: '🌍 Monde entier · sans ville' },
  { slug: 'country-TR', label: '🇹🇷 Toute la Turquie' },
  { slug: 'country-FR', label: '🇫🇷 Toute la France' },
  { slug: 'country-AE', label: '🇦🇪 Tous les Émirats' },
  { slug: 'country-TH', label: '🇹🇭 Toute la Thaïlande' },
  { slug: 'city-istanbul', label: 'Istanbul seulement' },
  { slug: 'city-paris', label: 'Paris seulement' },
  { slug: 'city-dubai', label: 'Dubaï seulement' },
  { slug: 'city-bangkok', label: 'Bangkok seulement' },
  { slug: 'city-phuket', label: 'Phuket seulement' },
];
function dateInDays(days: number) {
  const d = new Date(); d.setUTCDate(d.getUTCDate() + days); return d.toISOString().slice(0, 10);
}

export function WinkStagingSearchLab() {
  const [scope, setScope] = useState('global');
  const [checkIn, setCheckIn] = useState(() => dateInDays(14));
  const [nights, setNights] = useState(2);
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    setResult(null);
    try {
      const response = await fetch('/api/wink/staging/search', {
        method: 'POST', cache: 'no-store', credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scope, checkIn, nights, adults, rooms }),
      });
      const data = await response.json() as SearchResult;
      setResult(data);
    } catch {
      setResult({ ok: false, error: 'Impossible de joindre le diagnostic sur ce Preview. Vérifie que tu es connecté à Vercel.' });
    } finally { setPending(false); }
  }

  return <main className="min-h-screen bg-[#f6f5f2] text-[#17242b]">
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <div className="mb-7 flex items-center justify-between gap-4">
        <a className="text-sm font-semibold text-[#24556b] underline underline-offset-4" href="/travel">← Bosphoras Luxury Stays</a>
        <span className="rounded-full border border-amber-500/40 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">Wink · Staging uniquement</span>
      </div>
      <header className="mb-9 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#b18a52]">Diagnostic privé · API de réservation</p>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">Recherche d’hôtels Wink</h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Commence par « Monde entier » pour découvrir ce que contient Wink Staging sans filtre géographique,
          puis compare avec un pays ou une ville. Les dates et voyageurs restent obligatoires pour calculer les offres.
          Zéro résultat ne signifie pas qu’il n’existe aucun hôtel dans la destination.
        </p>
      </header>
      <form onSubmit={submit} className="rounded-2xl border border-[#dedbd3] bg-white p-5 shadow-sm sm:p-7">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <label className="block text-sm font-semibold">Périmètre de recherche
            <select value={scope} onChange={e => setScope(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm">
              {searchAreas.map(c => <option key={c.slug} value={c.slug}>{c.label}</option>)}
            </select>
          </label>
          <label className="block text-sm font-semibold">Date d’arrivée
            <input required type="date" min={dateInDays(0)} max={dateInDays(180)} value={checkIn}
              onChange={e=>setCheckIn(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 text-sm" />
          </label>
          <label className="block text-sm font-semibold">Nuits
            <select value={nights} onChange={e=>setNights(Number(e.target.value))} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm">
              {[1,2,3,4,5,7,10,14].map(n => <option value={n} key={n}>{n}</option>)}
            </select>
          </label>
          <label className="block text-sm font-semibold">Adultes
            <select value={adults} onChange={e=>setAdults(Number(e.target.value))} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm">
              {[1,2,3,4].map(n => <option value={n} key={n}>{n}</option>)}
            </select>
          </label>
          <label className="block text-sm font-semibold">Chambres
            <select value={rooms} onChange={e=>setRooms(Number(e.target.value))} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm">
              {[1,2].map(n => <option value={n} key={n}>{n}</option>)}
            </select>
          </label>
        </div>
        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs leading-relaxed text-slate-500">Un seul appel Wink par clic, 5 hôtels au maximum affichés par page pour limiter les coûts. Aucun filtre étoiles, style, disponibilité ou direct uniquement.</p>
          <button disabled={pending} className="w-full rounded-lg bg-[#163a48] px-7 py-3 font-semibold text-white transition hover:bg-[#24596a] disabled:opacity-50 sm:w-auto">
            {pending ? 'Recherche auprès de Wink…' : 'Rechercher les hôtels'}
          </button>
        </div>
      </form>

      {result && <section aria-live="polite" className="mt-7 rounded-2xl border border-[#dedbd3] bg-white p-6 sm:p-8">
        {!result.ok ? <div>
          <h2 className="font-serif text-2xl text-rose-800">Recherche non aboutie</h2>
          <p className="mt-2 text-slate-700">{result.error}</p>
          {result.stage && <p className="mt-3 text-sm text-slate-500">Étape : <strong>{result.stage}</strong>{result.grpcCode !== undefined ? ` · code gRPC ${result.grpcCode}` : ''}</p>}
        </div> : <>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a37d4c]">Réponse API obtenue · Staging Wink</p>
          <h2 className="mt-2 font-serif text-3xl">{result.totalElements === 0 ? 'Aucun hôtel retourné' : `${result.totalElements} établissement(s) identifié(s)`}</h2>
          <p className="mt-2 text-slate-600">{result.city}, arrivée {result.checkIn}, {result.nights} nuit(s), {result.adults} adulte(s), {result.rooms} chambre(s).</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl bg-[#f6f5f2] p-4"><div className="text-xs text-slate-500">Total API</div><div className="mt-1 text-3xl font-semibold">{result.totalElements ?? '—'}</div></div>
            <div className="rounded-xl bg-[#f6f5f2] p-4"><div className="text-xs text-slate-500">Cette page</div><div className="mt-1 text-3xl font-semibold">{result.pageCount ?? '—'}</div></div>
            <div className="rounded-xl bg-[#f6f5f2] p-4"><div className="text-xs text-slate-500">Pages de résultats</div><div className="mt-1 text-3xl font-semibold">{result.totalPages ?? '—'}</div></div>
            <div className="rounded-xl bg-[#f6f5f2] p-4"><div className="text-xs text-slate-500">Compte affilié</div><div className="mt-2 font-semibold">{result.accountConfirmed ? 'Reconnu' : 'Non confirmé'}</div></div>
          </div>
          <p className="mt-5 text-sm text-slate-600">{result.info}</p>
          <p className="mt-2 text-xs text-slate-500">Méthode Wink : {result.method || '—'} · Aucun filtre facultatif appliqué. Total API distinct des 5 premières fiches.</p>
          {result.hotels && result.hotels.length > 0 && <div className="mt-7 space-y-3">
            {result.hotels.map((hotel, index) => <div key={index} className="flex items-center gap-4 rounded-xl border border-slate-200 p-3">
              {hotel.heroImageUrl && <img src={hotel.heroImageUrl} alt={hotel.name} loading="lazy" className="h-20 w-28 rounded-lg object-cover" />}
              <div className="min-w-0">
                <div className="font-semibold">{hotel.name || 'Établissement sans nom'}</div>
                <div className="mt-1 text-sm text-slate-500">{hotel.starRating > 0 ? `${hotel.starRating} étoiles · ` : ''}{hotel.roomTypesCount} type(s) de chambre · {hotel.available ? 'Disponibilité indiquée dans le test' : 'Pas de disponibilité confirmée'}</div>
              </div>
            </div>)}
          </div>}
          <p className="mt-7 text-xs text-slate-500">Aucune réservation ne peut être confirmée ici. Ce tableau sert uniquement à diagnostiquer l’intégration avant ouverture commerciale.</p>
        </>}
      </section>}
      <footer className="mt-8 text-sm leading-relaxed text-slate-500">
        Accès réservé à l’environnement Preview Vercel protégé. La recherche principale de Bosphoras reste éditoriale tant que le catalogue Wink n’est pas validé.
      </footer>
    </div>
  </main>;
}
