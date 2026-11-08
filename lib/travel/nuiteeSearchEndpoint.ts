import { getNuiteeSearchHandoff, type NuiteeSearchRequest } from './nuiteeSearchHandoff';
import { getNuiteeProviders, getNuiteeSearchConnection } from './nuiteeLaunch';

const headers = { 'Cache-Control': 'no-store', 'Content-Type': 'application/json' };
const json = (body: unknown, status: number) => new Response(JSON.stringify(body), { status, headers });

/** Search handoff only. This endpoint never calls a supplier booking or payment API. */
export async function handleNuiteeSearch(request: Request): Promise<Response> {
  const connection = getNuiteeSearchConnection();
  if (!connection) return json({ code: 'BOOKING_NOT_OPEN' }, 503);
  let data: unknown;
  try {
    const text = await request.text();
    if (text.length > 4096) return json({ code: 'INVALID_SEARCH' }, 400);
    data = JSON.parse(text);
  } catch { return json({ code: 'INVALID_SEARCH' }, 400); }
  if (!data || typeof data !== 'object' || Array.isArray(data)) return json({ code: 'INVALID_SEARCH' }, 400);
  const input = data as Record<string, unknown>;
  const fields = ['hotelId', 'destinationKey', 'placeId', 'displayName', 'checkin', 'checkout', 'locale', 'rooms'];
  if (Object.keys(input).some(key => !fields.includes(key)) ||
    !['checkin', 'checkout', 'locale'].every(key => typeof input[key] === 'string') ||
    (input.hotelId !== undefined
      ? typeof input.hotelId !== 'string' || input.destinationKey !== undefined || input.placeId !== undefined || input.displayName !== undefined
      : input.destinationKey !== undefined
        ? typeof input.destinationKey !== 'string' || input.placeId !== undefined || input.displayName !== undefined
        : typeof input.placeId !== 'string' || typeof input.displayName !== 'string') || !Array.isArray(input.rooms) ||
    input.rooms.some(room => !room || typeof room !== 'object' || Array.isArray(room) ||
      Object.keys(room).some(key => key !== 'adults' && key !== 'children'))) return json({ code: 'INVALID_SEARCH' }, 400);
  const handoff = getNuiteeSearchHandoff(input as unknown as NuiteeSearchRequest, connection, getNuiteeProviders());
  if (handoff.status === 'blocked') return json({ code: handoff.reason === 'qualification' ? 'BOOKING_NOT_OPEN' : 'INVALID_SEARCH', field: handoff.reason }, handoff.reason === 'qualification' ? 503 : 400);
  return json({ url: handoff.url }, 200);
}
