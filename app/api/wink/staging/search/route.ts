import { NextRequest, NextResponse } from 'next/server';
import { searchStagingInventory, WinkStagingError } from '@/lib/winkStaging';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const cities: Record<string, { geoNameId: string; label: string }> = {
  istanbul: { geoNameId: '745044', label: 'Istanbul' },
  paris: { geoNameId: '2988507', label: 'Paris' },
  dubai: { geoNameId: '292223', label: 'Dubai' },
  bangkok: { geoNameId: '1609350', label: 'Bangkok' },
  phuket: { geoNameId: '1151254', label: 'Phuket' },
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
  const cityCode = typeof raw.city === 'string' ? raw.city : '';
  const city = cities[cityCode];
  const checkIn = typeof raw.checkIn === 'string' ? raw.checkIn : '';
  const nights = raw.nights;
  const adults = raw.adults;
  const rooms = raw.rooms;
  const parsedDate = /^\d{4}-\d{2}-\d{2}$/.test(checkIn) ? new Date(checkIn + 'T00:00:00Z') : null;
  const today = new Date(); today.setUTCHours(0, 0, 0, 0);
  const max = new Date(today); max.setUTCDate(today.getUTCDate() + 180);
  if (!city || !parsedDate || Number.isNaN(parsedDate.getTime()) ||
      parsedDate.toISOString().slice(0, 10) !== checkIn ||
      parsedDate < today || parsedDate > max ||
      !Number.isInteger(nights) || Number(nights) < 1 || Number(nights) > 14 ||
      !Number.isInteger(adults) || Number(adults) < 1 || Number(adults) > 4 ||
      !Number.isInteger(rooms) || Number(rooms) < 1 || Number(rooms) > 2) {
    return NextResponse.json({ error: 'Choisis une ville, une date future (180 jours maximum), 1 à 14 nuits, 1 à 4 adultes et 1 ou 2 chambres.' },
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
      geoNameId: city.geoNameId, checkIn, nights: Number(nights), adults: Number(adults),
      rooms: Number(rooms), size: 10,
    });
    return NextResponse.json({
      ok: true, source: 'wink-staging', city: city.label, searchedAt: result.searchedAt,
      accountConfirmed: result.accountConfirmed, checkIn, nights, adults, rooms,
      pageCount: result.resultCount, totalElements: result.totalElements,
      totalPages: result.totalPages, currency: result.currency, hotels: result.hotels,
      info: result.totalElements === 0
        ? 'La recherche a répondu correctement, mais aucun établissement ne correspond dans le catalogue Wink staging pour ces dates et cette ville.'
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
