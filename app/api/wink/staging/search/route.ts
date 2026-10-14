import { NextRequest, NextResponse } from 'next/server';
import { searchStagingInventory, WinkStagingError } from '@/lib/winkStaging';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

type SearchScope = { mode: 'city' | 'country' | 'global' | 'geo'; label: string; geoNameId?: string; urlName?: string; countryCode?: string;
  point?: { latitude: number; longitude: number }; radiusMeters?: number };
const scopes: Record<string, SearchScope> = {
  global: { mode: 'global', label: 'Monde entier · sans filtre de ville' },
  'country-TR': { mode: 'country', label: 'Toute la Turquie', countryCode: 'TR' },
  'country-FR': { mode: 'country', label: 'Toute la France', countryCode: 'FR' },
  'country-AE': { mode: 'country', label: 'Tous les Émirats arabes unis', countryCode: 'AE' },
  'country-TH': { mode: 'country', label: 'Toute la Thaïlande', countryCode: 'TH' },
  'city-istanbul': { mode: 'city', label: 'Istanbul', geoNameId: '745044' },
  'city-paris': { mode: 'city', label: 'Paris', geoNameId: '2988507' },
  'city-dubai': { mode: 'city', label: 'Dubaï', geoNameId: '292223' },
  'city-bangkok': { mode: 'city', label: 'Bangkok', urlName: 'bangkok-thailand' },
  'city-phuket': { mode: 'city', label: 'Phuket', geoNameId: '1151254' },
  'geo-istanbul': { mode: 'geo', label: 'Autour du centre d’Istanbul · 35 km', point: { latitude: 41.0082, longitude: 28.9784 }, radiusMeters: 35000 },
  'geo-paris': { mode: 'geo', label: 'Autour de Paris · 30 km', point: { latitude: 48.8566, longitude: 2.3522 }, radiusMeters: 30000 },
  'geo-dubai': { mode: 'geo', label: 'Autour de Dubaï · 40 km', point: { latitude: 25.2048, longitude: 55.2708 }, radiusMeters: 40000 },
  'geo-bangkok': { mode: 'geo', label: 'Autour de Bangkok · 30 km', point: { latitude: 13.7563, longitude: 100.5018 }, radiusMeters: 30000 },
  'geo-phuket': { mode: 'geo', label: 'Ouest de Phuket · 40 km', point: { latitude: 7.92, longitude: 98.31 }, radiusMeters: 40000 },
};

let lastCallAt = 0; // Best-effort safeguard; no automatic calls from page load.

const responseHeaders = { 'cache-control': 'private, no-store', 'x-robots-tag': 'noindex, nofollow' };

export async function POST(request: NextRequest) {
  // Nothing runs on the live site, or on any unrelated pull-request preview.
  if (process.env.VERCEL_ENV !== 'preview' ||
      process.env.VERCEL_GIT_COMMIT_REF !== 'feature/luxury-travel-seo-destinations-20261012') {
    return NextResponse.json({ error: 'Staging only.' }, { status: 404, headers: responseHeaders });
  }

  const origin = request.headers.get('origin');
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: 'Requête provenant d’une autre origine.' }, { status: 403, headers: responseHeaders });
  }

  let raw: Record<string, unknown>;
  try { raw = await request.json(); }
  catch { return NextResponse.json({ error: 'Format JSON invalide.' }, { status: 400, headers: responseHeaders }); }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return NextResponse.json({ error: 'Paramètres invalides.' }, { status: 400, headers: responseHeaders });
  }
  const scopeCode = typeof raw.scope === 'string' ? raw.scope : '';
  const selectedScope = scopes[scopeCode];
  const checkIn = typeof raw.checkIn === 'string' ? raw.checkIn : '';
  const nights = raw.nights;
  const adults = raw.adults;
  const rooms = raw.rooms;
  const parsedDate = /^\d{4}-\d{2}-\d{2}$/.test(checkIn) ? new Date(checkIn + 'T00:00:00Z') : null;
  const today = new Date(); today.setUTCHours(0, 0, 0, 0);
  const max = new Date(today); max.setUTCDate(today.getUTCDate() + 180);
  if (!selectedScope || !parsedDate || Number.isNaN(parsedDate.getTime()) ||
      parsedDate.toISOString().slice(0, 10) !== checkIn ||
      parsedDate <= today || parsedDate > max ||
      !Number.isInteger(nights) || Number(nights) < 1 || Number(nights) > 14 ||
      !Number.isInteger(adults) || Number(adults) < 1 || Number(adults) > 4 ||
      !Number.isInteger(rooms) || Number(rooms) < 1 || Number(rooms) > 2) {
    return NextResponse.json({ error: 'Choisis une zone, une date future (180 jours maximum), 1 à 14 nuits, 1 à 4 adultes et 1 ou 2 chambres.' },
      { status: 400, headers: responseHeaders });
  }

  const now = Date.now();
  if (now - lastCallAt < 15000) {
    return NextResponse.json({ error: 'Attends 15 secondes avant la recherche suivante pour limiter les appels Wink.' },
      { status: 429, headers: { ...responseHeaders, 'retry-after': '15' } });
  }
  lastCallAt = now;

  try {
    const result = await searchStagingInventory({
      scope: selectedScope.mode, urlName: selectedScope.urlName, geoNameId: selectedScope.geoNameId, countryCode: selectedScope.countryCode,
      point: selectedScope.point, radiusMeters: selectedScope.radiusMeters,
      checkIn, nights: Number(nights), adults: Number(adults),
      rooms: Number(rooms), size: 3,
    });
    return NextResponse.json({
      ok: true, source: 'wink-staging', city: selectedScope.label, scope: selectedScope.mode,
      method: result.method, filters: 'aucun filtre optionnel',
      searchedAt: result.searchedAt,
      accountConfirmed: result.accountConfirmed, checkIn, nights, adults, rooms,
      pageCount: result.resultCount, totalElements: result.totalElements,
      totalPages: result.totalPages, currency: result.currency, currencyExponent: result.currencyExponent, customizationConfigured: result.customizationConfigured, hotels: result.hotels,
      diagnostics: {
        responseShapeValid: result.responseShapeValid,
        pageNumberOfElements: result.pageNumberOfElements,
        pageSize: result.pageSize,
        queryMethod: result.method,
        citySlug: selectedScope.urlName,
      },
      info: result.totalElements === 0
        ? selectedScope.mode === 'global'
          ? 'RankGlobal ne renvoie aucun hôtel classé : ce classement n’est pas un catalogue mondial exhaustif. Wink indique que le Staging contient peu de données.'
          : selectedScope.mode === 'country'
            ? 'RankByCountry ne renvoie aucun hôtel classé : essaye SearchByCity ou SearchByGeo. Le Staging Wink n’a pas toute la production.'
            : selectedScope.mode === 'geo'
              ? 'SearchByGeo a répondu avec zéro propriété dans ce rayon pour cet itinéraire : la ville GeoNames n’est donc pas le seul obstacle. Le Staging peut ne contenir aucun inventaire disponible dans cette zone.'
              : 'Aucune offre pour ces dates. Wink confirme que le staging contient uniquement des hôtels de test à Bangkok ; cela ne mesure pas la couverture Production.'
        : 'Données de test Wink staging : aucune disponibilité ou possibilité de réservation en production n’est garantie.',
    }, { headers: responseHeaders });
  } catch (error) {
    const stage = error instanceof WinkStagingError ? error.stage : 'configuration';
    const grpcCode = error instanceof WinkStagingError ? error.grpcCode : undefined;
    return NextResponse.json({
      ok: false, error: 'La recherche Wink a échoué.',
      stage, ...(grpcCode === undefined ? {} : { grpcCode }),
    }, { status: 502, headers: responseHeaders });
  }
}
