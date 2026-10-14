'use client';

import { useState } from 'react';

type Hotel = { name: string; starRating: number; available: boolean; roomTypesCount: number; heroImageUrl: string | null; direct: boolean; bookingUrl: string | null; offers: { roomName: string; totalMinor: string; quantity: number; startDate: string; endDate: string; refundable: boolean }[] };
type SearchResult = {
  ok: boolean; city?: string; checkIn?: string; nights?: number; adults?: number; rooms?: number;
  pageCount?: number; totalElements?: number; totalPages?: number; searchedAt?: string;
  currency?: string; currencyExponent?: number; customizationConfigured?: boolean; hotels?: Hotel[]; accountConfirmed?: boolean; info?: string; method?: string; filters?: string;
  diagnostics?: { responseShapeValid: boolean; pageNumberOfElements: number; pageSize: number; queryMethod: string; citySlug?: string };
  error?: string; stage?: string; grpcCode?: number;
};
const searchAreas = [{ slug: 'city-bangkok', label: 'Bangkok · hôtels tests Wink' }];
function dateInDays(days: number) {
  const d = new Date(); d.setUTCDate(d.getUTCDate() + days); return d.toISOString().slice(0, 10);
}

export function WinkStagingSearchLab() {
  const [scope, setScope] = useState('city-bangkok');
  const [checkIn, setCheckIn] = useState(() => dateInDays(14));
  const [nights, setNights] = useState(1);
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
          Wink confirme que Staging contient uniquement des hôtels tests à Bangkok. Cette recherche utilise le slug bangkok-thailand, des dates futures et aucun filtre facultatif. La couverture commerciale doit être vérifiée séparément en Production.
        </p>
      </header>
      <aside className="mb-7 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-950">
        <strong>Environnement de test : Bangkok uniquement.</strong> Aucun filtre facultatif (étoiles, nom,
        style de séjour ou « réservation directe uniquement ») n’est activé. Les dates et voyageurs restent
        indispensables pour calculer les prix. Le classement mondial RankGlobal n’est pas un catalogue exhaustif :
        l’élargissement à « Monde » ne peut pas ajouter des hôtels qui ne sont pas présents dans cette base de test.
        <span className="mt-2 block">Wink confirme que Staging contient nettement moins de données que Production.{' '}
          <a className="font-semibold underline underline-offset-2" href="https://wink.travel/developers/setup/" target="_blank" rel="noopener noreferrer">
            Voir la documentation officielle
          </a>.
        </span>
      </aside>
      <section className="mb-7 rounded-xl border border-[#cbd6d7] bg-white p-5 text-sm leading-relaxed text-[#243940]">
        <h2 className="text-base font-semibold">Préparer l’accès au catalogue commercial</h2>
        <p className="mt-2">
          Il faut un compte affilié et une application Machine-to-Machine <strong>Wink Production</strong>,
          avec des identifiants différents du Staging. Le compte Staging actuel ne fournit pas
          automatiquement l’inventaire commercial. Ne publie aucun jeton ou Client Secret dans le chat.
        </p>
        <p className="mt-3">
          <a className="font-semibold text-[#24556b] underline underline-offset-2" href="https://app.wink.travel" target="_blank" rel="noopener noreferrer">
            Ouvrir Wink Production
          </a>
          {' · '}
          <a className="font-semibold text-[#24556b] underline underline-offset-2" href="https://wink.travel/developers/quickstart/" target="_blank" rel="noopener noreferrer">
            Étapes officielles de connexion Production
          </a>
        </p>
        <p className="mt-3 text-xs text-slate-600">
          Bosphoras reste en Preview, sans recherche de prix en Production ni changement du site public.
        </p>
      </section>
      <form onSubmit={submit} className="rounded-2xl border border-[#dedbd3] bg-white p-5 shadow-sm sm:p-7">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <label className="block text-sm font-semibold">Périmètre de recherche
            <select value={scope} onChange={e => setScope(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm">
              {searchAreas.map(c => <option key={c.slug} value={c.slug}>{c.label}</option>)}
            </select>
          </label>
          <label className="block text-sm font-semibold">Date d’arrivée
            <input required type="date" min={dateInDays(1)} max={dateInDays(180)} value={checkIn}
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
          <p className="text-xs leading-relaxed text-slate-500">Une recherche de prix par clic, 3 hôtels au maximum affichés par page pour limiter les coûts. Aucun filtre étoiles, style, disponibilité ou direct uniquement.</p>
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
          {result.grpcCode === 4 && <p className="mt-3 text-sm text-slate-700">Wink Staging peut être en veille et mettre environ une minute à redémarrer. Attends une minute, puis relance une seule recherche.</p>}
        </div> : <>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a37d4c]">Réponse API obtenue · Staging Wink</p>
          <h2 className="mt-2 font-serif text-3xl">{result.totalElements === 0 ? (result.method === 'RankGlobal' || result.method === 'RankByCountry' ? 'Classement Wink vide en staging' : 'Aucun hôtel retourné par la recherche') : `${result.totalElements} établissement(s) identifié(s)`}</h2>
          <p className="mt-2 text-slate-600">{result.city}, arrivée {result.checkIn}, {result.nights} nuit(s), {result.adults} adulte(s), {result.rooms} chambre(s).</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl bg-[#f6f5f2] p-4"><div className="text-xs text-slate-500">Total API</div><div className="mt-1 text-3xl font-semibold">{result.totalElements ?? '—'}</div></div>
            <div className="rounded-xl bg-[#f6f5f2] p-4"><div className="text-xs text-slate-500">Cette page</div><div className="mt-1 text-3xl font-semibold">{result.pageCount ?? '—'}</div></div>
            <div className="rounded-xl bg-[#f6f5f2] p-4"><div className="text-xs text-slate-500">Pages de résultats</div><div className="mt-1 text-3xl font-semibold">{result.totalPages ?? '—'}</div></div>
            <div className="rounded-xl bg-[#f6f5f2] p-4"><div className="text-xs text-slate-500">Compte affilié</div><div className="mt-2 font-semibold">{result.accountConfirmed ? 'Reconnu' : 'Non confirmé'}</div></div>
          </div>
          <p className="mt-5 text-sm text-slate-600">{result.info}</p>
          {result.totalElements === 0 && <div className="mt-4 rounded-xl border border-[#d7dedc] bg-[#f6f8f6] p-4 text-sm text-slate-700">
            <strong>Ce n’est pas un filtre caché.</strong> Le serveur Wink a renvoyé une réponse valide,
            mais aucune offre pour ces critères dans son environnement de test.
            Si Bangkok affiche des propriétés avec les mêmes dates, le catalogue Staging est bien accessible.
            Pour chercher dans le catalogue commercial, il faut brancher les identifiants Production.
          </div>}
          <p className="mt-2 text-xs text-slate-500">Méthode Wink : <strong>{result.method || '—'}</strong> · Ville : {result.diagnostics?.citySlug || '—'} · Aucun filtre facultatif appliqué. La page affiche au maximum 3 fiches ; le « Total API » est indépendant de cette limite.</p>
          {result.diagnostics && <p className="mt-2 text-xs text-slate-500">Réponse gRPC reconnue : {result.diagnostics.responseShapeValid ? 'oui' : 'non'} · Lignes de la page selon Wink : {result.diagnostics.pageNumberOfElements} · Taille de page : {result.diagnostics.pageSize}. Les identifiants secrets et les comptes ne sont jamais affichés.</p>}
          {!result.customizationConfigured && <p className="mt-3 text-sm text-amber-800">Lien de réservation bloqué : l’identifiant de personnalisation staging doit être configuré et vérifié pour attribuer les réservations à Bosphoras.</p>}
          {result.hotels && result.hotels.length > 0 && <div className="mt-7 space-y-3">
            {result.hotels.map((hotel, index) => <div key={index} className="flex items-center gap-4 rounded-xl border border-slate-200 p-3">
              {hotel.heroImageUrl && <img src={hotel.heroImageUrl} alt={hotel.name} loading="lazy" className="h-20 w-28 rounded-lg object-cover" />}
              <div className="min-w-0">
                <div className="font-semibold">{hotel.name || 'Établissement sans nom'}</div>
                <div className="mt-1 text-sm text-slate-500">{hotel.starRating > 0 ? `${hotel.starRating} étoiles · ` : ''}{hotel.roomTypesCount} type(s) de chambre · {hotel.available ? 'Disponibilité indiquée dans le test' : 'Pas de disponibilité confirmée'}</div>
                <p className="mt-2 text-sm">{hotel.direct ? 'Inventaire direct' : 'Inventaire intermédiaire'}</p>
                {hotel.offers.map((offer, i) => <p key={i} className="mt-2 text-sm">{offer.roomName} · {Number.isSafeInteger(Number(offer.totalMinor)) && Number(offer.totalMinor) > 0 && Number.isInteger(result.currencyExponent)
                  ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: result.currency }).format(Number(offer.totalMinor) / 10 ** result.currencyExponent!) : 'Prix à confirmer'} pour le séjour, {offer.quantity} chambre(s) · {offer.startDate} → {offer.endDate}</p>)}
                {hotel.bookingUrl && <a href={hotel.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold underline">Ouvrir la réservation de test Wink</a>}
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
