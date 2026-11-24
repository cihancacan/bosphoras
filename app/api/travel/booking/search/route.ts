import { handleNuiteeSearch } from '@/lib/travel/nuiteeSearchEndpoint';
import { isNuiteeBookingLive } from '@/lib/travel/nuiteeLaunch';
import { collectionReleased } from '@/lib/travel/collectionPresentation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const POST = handleNuiteeSearch;

export function HEAD() {
  const ready = (process.env.VERCEL_ENV === 'preview' || collectionReleased) && isNuiteeBookingLive();
  return new Response(null, { status: ready ? 204 : 404, headers: { 'Cache-Control': 'no-store' } });
}
