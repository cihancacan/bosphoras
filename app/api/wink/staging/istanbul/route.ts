import { NextResponse } from 'next/server';
import { istanbulHotels } from '@/data/travel/istanbulFlagship';
import { searchIstanbulInventory, WinkStagingError } from '@/lib/winkStaging';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const normalize = (value: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export async function POST() {
  if (process.env.VERCEL_ENV === 'production') {
    return NextResponse.json({ error: 'Wink staging is disabled in production.' }, { status: 404 });
  }

  try {
    const result = await searchIstanbulInventory();
    const content = Array.isArray(result.page?.content) ? result.page.content : [];
    const editorialNames = istanbulHotels.map((hotel) => hotel.name);
    const matchedEditorialHotels = editorialNames.filter((editorialName) => {
      const wanted = normalize(editorialName);
      return content.some((item: Record<string, any>) => {
        const actual = normalize(String(item.name || ''));
        return actual.includes(wanted) || wanted.includes(actual);
      });
    });

    return NextResponse.json(
      {
        ok: true,
        source: 'wink-staging',
        account: result.account,
        search: { city: 'Istanbul', geoNameId: '745044', checkIn: result.checkIn, nights: 2 },
        resultCount: content.length,
        matchedEditorialHotels,
        properties: content.map((item: Record<string, any>) => ({
          propertyId: item.propertyId,
          name: item.name,
          urlName: item.urlName,
          starRating: item.starRating,
          currencyCode: item.currencyCode || result.page?.currencyCode,
          roomTypes: Array.isArray(item.roomTypes) ? item.roomTypes : [],
        })),
        searchedAt: result.searchedAt,
      },
      { headers: { 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow' } },
    );
  } catch (error) {
    const stage = error instanceof WinkStagingError ? error.stage : 'configuration';
    return NextResponse.json(
      { ok: false, error: 'Wink staging request failed.', stage },
      { status: 502, headers: { 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow' } },
    );
  }
}
