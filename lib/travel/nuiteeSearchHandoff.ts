import { hotelProviders, supplierResponsibilities, type HotelProvider } from './hotelPartners';

/** Search context only: never accept names, emails, payment data or checkout tokens. */
export type NuiteeSearchRequest = {
  destinationKey: string;
  checkin: string;
  checkout: string;
  locale: 'fr' | 'en';
  /** Explicit occupancy per room; never guess how a total party is distributed. */
  rooms: readonly { adults: number; children: readonly number[] }[];
};

export type NuiteeSearchConnection = {
  origin: string;
  supportUrl: string;
  termsUrl: string;
  sellerLegalName: string;
  /** References to private evidence; no contracts or account credentials in this file. */
  mappingPermissionReference: string;
  deepLinkEvidence: string;
  attributionEvidence: string;
  liveApprovalReference: string;
  /** Documented clientReference tag verified in the account, not an affiliate credential. */
  clientReference: string;
  verifiedAt: string;
  reviewBy: string;
  destinations: readonly { key: string; placeId: string; displayName: string; matchEvidence: string }[];
};

// LAS-3651 remains in triage. No commercial handoff is configured or exposed.
export const nuiteeSearchConnection: NuiteeSearchConnection | null = null;

type Handoff = { status: 'blocked'; reason: 'qualification' | 'destination' | 'dates' | 'occupancy' | 'locale' }
  | { status: 'ready'; url: string; supportUrl: string; termsUrl: string; sellerLegalName: string };

function httpsUrl(value: string): URL | null {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password && !url.hash &&
      (!url.port || url.port === '443') ? url : null;
  } catch { return null; }
}

function validDay(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const time = Date.parse(`${value}T00:00:00Z`);
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value;
}

/** Pure URL preparation. No HTTP call, booking, prebooking, secret or price handling. */
export function getNuiteeSearchHandoff(
  request: NuiteeSearchRequest,
  connection: NuiteeSearchConnection | null = nuiteeSearchConnection,
  providers: readonly HotelProvider[] = hotelProviders,
  now = Date.now(),
): Handoff {
  const blocked = { status: 'blocked', reason: 'qualification' } as const;
  const provider = providers.find(item => item.id === 'nuitee-connect');
  if (!connection || !provider || provider.status !== 'approved' || provider.mode !== 'supplier-hosted' ||
      provider.merchantOfRecord !== 'supplier' || !provider.agreementReference.trim() ||
      !supplierResponsibilities.every(key => provider.responsibilities[key] === true) || !Number.isFinite(now)) return blocked;
  const origin = httpsUrl(connection.origin);
  const verified = Date.parse(connection.verifiedAt);
  const review = Date.parse(connection.reviewBy);
  if (!origin || origin.pathname !== '/' || origin.search || !provider.bookingHosts.includes(origin.hostname) ||
      !httpsUrl(connection.supportUrl) || !httpsUrl(connection.termsUrl) || !connection.sellerLegalName.trim() ||
      !connection.mappingPermissionReference.trim() || !connection.deepLinkEvidence.trim() ||
      !connection.attributionEvidence.trim() || !connection.liveApprovalReference.trim() ||
      !/^[a-zA-Z0-9_-]{1,64}$/.test(connection.clientReference) ||
      !Number.isFinite(verified) || !Number.isFinite(review) || verified > now || review <= now || review <= verified) return blocked;

  const matches = connection.destinations.filter(item => item.key === request.destinationKey);
  if (matches.length !== 1 || !matches[0].matchEvidence.trim() || !matches[0].displayName.trim() ||
      !/^[a-zA-Z0-9_-]+$/.test(matches[0].placeId)) {
    return { status: 'blocked', reason: 'destination' };
  }
  if (!validDay(request.checkin) || !validDay(request.checkout) || request.checkout <= request.checkin ||
      request.checkin < new Date(now).toISOString().slice(0, 10)) return { status: 'blocked', reason: 'dates' };
  if (!Array.isArray(request.rooms) || request.rooms.length < 1 || request.rooms.length > 6 ||
      request.rooms.some(room => !room || !Number.isInteger(room.adults) || room.adults < 1 || room.adults > 12 ||
        !Array.isArray(room.children) || room.children.length > 6 ||
        room.children.some((age: number) => !Number.isInteger(age) || age < 0 || age > 17)) ||
      request.rooms.reduce((total, room) => total + room.adults, 0) > 12) return { status: 'blocked', reason: 'occupancy' };
  if (request.locale !== 'fr' && request.locale !== 'en') return { status: 'blocked', reason: 'locale' };

  // Only the documented listing route and parameters. No arbitrary query passthrough.
  const url = new URL('/hotels', origin);
  url.searchParams.set('placeId', matches[0].placeId);
  // The account's own search form also sends name; without it the search header is blank.
  url.searchParams.set('name', matches[0].displayName);
  url.searchParams.set('checkin', request.checkin);
  url.searchParams.set('checkout', request.checkout);
  // Keep the account UI's summary parameters consistent with the exact occupancies.
  url.searchParams.set('rooms', String(request.rooms.length));
  url.searchParams.set('adults', String(request.rooms.reduce((total, room) => total + room.adults, 0)));
  url.searchParams.set('occupancies', btoa(JSON.stringify(request.rooms.map(room => ({ adults: room.adults, children: [...room.children] })))));
  url.searchParams.set('language', request.locale);
  url.searchParams.set('currency', 'EUR');
  url.searchParams.set('clientReference', connection.clientReference);
  return { status: 'ready', url: url.toString(), supportUrl: connection.supportUrl, termsUrl: connection.termsUrl, sellerLegalName: connection.sellerLegalName };
}
