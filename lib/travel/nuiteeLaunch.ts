import mappings from '@/data/travel/nuiteeMappings.json';
import resolvedHotelMappings from '@/data/travel/nuiteeResolvedMappings.json';
import { hotelProviders, supplierResponsibilities, getHotelPartnerLinks, type HotelProvider, type HotelPartnerLink } from './hotelPartners';
import type { NuiteeSearchConnection } from './nuiteeSearchHandoff';
import { NUITEE_WHITE_LABEL_ORIGIN, getNuiteeWhiteLabelSearchHref } from './nuiteeWhiteLabel';

const bookingHosts = ['bosphoras.nuitee.link'];

/** Supplier-verified bulk matches, separated from the nine hand-checked Istanbul hotels. */
const allHotelMappings = [...mappings.hotels, ...resolvedHotelMappings.hotels];

/** Operational evidence only. No API key, card, bank details or traveler data. */
export const nuiteeLaunch = {
  origin: NUITEE_WHITE_LABEL_ORIGIN,
  sellerLegalName: 'Nuitée Travel Limited',
  agreementReference: 'LAS-3651: Lina Elkhettar reply, 2026-11-02; Connect terms 2025-09-12',
  mappingPermissionReference: 'LAS-3651: explicit permission for editorial hotel and destination links, 2026-11-02',
  ownerApprovalReference: 'Owner requested real commercial launch, 2026-11-02',
  productionVerifiedAt: '2026-11-02T18:20:00Z',
  paymentModelReference: 'LAS-3651: supplier-hosted Whitelabel MoR and traveler support confirmed; owner completed required card onboarding and requested connection, 2026-11-02. Bosphoras makes no booking/payment API calls.',
  attributionEvidence: 'Account-owned host verified in Connect and live site. Rome search 2026-11-05/06 through official widget: clientReference=bosphoras_search persists on supplier listing and hotel page, with supplier session/tracking IDs. LAS-3651 confirms the method; no completed sale or payout tested.',
  verifiedAt: '2026-11-02T00:00:00Z',
  reviewBy: '2026-12-02T00:00:00Z',
};

export function isNuiteeBookingLive(now = Date.now()): boolean {
  let origin: URL;
  try { origin = new URL(nuiteeLaunch.origin); } catch { return false; }
  if (origin.protocol !== 'https:' || !bookingHosts.includes(origin.hostname) || origin.pathname !== '/' ||
      origin.search || origin.hash || origin.username || origin.password || (origin.port && origin.port !== '443')) return false;
  const production = Date.parse(nuiteeLaunch.productionVerifiedAt);
  return Boolean(nuiteeLaunch.paymentModelReference.trim() && nuiteeLaunch.attributionEvidence.trim() &&
    nuiteeLaunch.ownerApprovalReference.trim() && Number.isFinite(production) && production <= now &&
    Date.parse(nuiteeLaunch.verifiedAt) <= now && Date.parse(nuiteeLaunch.reviewBy) > now);
}

export function getNuiteeProviders(now = Date.now()): readonly HotelProvider[] {
  return hotelProviders.map(provider => provider.id !== 'nuitee-connect' ? provider : {
    ...provider,
    status: isNuiteeBookingLive(now) ? 'approved' : 'pending',
    agreementReference: nuiteeLaunch.agreementReference,
    responsibilities: Object.fromEntries(supplierResponsibilities.map(key => [key, true])) as HotelProvider['responsibilities'],
    bookingHosts,
  });
}

export const nuiteeSearchDestinations = mappings.destinations.map(({ key, displayName }) => ({ key, name: displayName }));

export function getNuiteeWorldwideSearch(locale: 'fr' | 'en', now = Date.now()): string | null {
  if (!isNuiteeBookingLive(now)) return null;
  return getNuiteeWhiteLabelSearchHref(locale);
}

/** Only mapped hotel IDs or verified destination keys may prefill the public page. */
export function getNuiteeReservationStart(locale: 'fr' | 'en', selection: { hotel?: string; destination?: string } = {}, now = Date.now()): string | null {
  if (!isNuiteeBookingLive(now)) return null;
  if (selection.hotel) {
    const hotel = allHotelMappings.find(item => item.hotelId === selection.hotel);
    if (!hotel) return null;
    const url = new URL(`/hotels/${hotel.hotelId}`, nuiteeLaunch.origin);
    url.searchParams.set('language', locale);
    url.searchParams.set('currency', 'EUR');
    url.searchParams.set('clientReference', `bosphoras_${hotel.destination}_${hotel.hotelId}`);
    return url.toString();
  }
  if (selection.destination) {
    const destination = mappings.destinations.find(item => item.key === selection.destination);
    if (!destination) return null;
    const url = new URL('/hotels', nuiteeLaunch.origin);
    url.searchParams.set('placeId', destination.placeId);
    url.searchParams.set('name', destination.displayName);
    url.searchParams.set('language', locale);
    url.searchParams.set('currency', 'EUR');
    url.searchParams.set('clientReference', 'bosphoras_destinations');
    return url.toString();
  }
  return null;
}

export function getNuiteeSearchConnection(now = Date.now()): NuiteeSearchConnection | null {
  if (!isNuiteeBookingLive(now)) return null;
  return {
    origin: nuiteeLaunch.origin,
    supportUrl: `${nuiteeLaunch.origin}/help-center`,
    // Traveler terms open from the supplier's footer and again before payment.
    termsUrl: nuiteeLaunch.origin,
    sellerLegalName: nuiteeLaunch.sellerLegalName,
    mappingPermissionReference: nuiteeLaunch.mappingPermissionReference,
    deepLinkEvidence: 'docs/hotel-partners-batch-7.md: supplier search protocol and exact room allocation',
    attributionEvidence: nuiteeLaunch.attributionEvidence,
    liveApprovalReference: nuiteeLaunch.ownerApprovalReference,
    clientReference: 'bosphoras_search',
    verifiedAt: nuiteeLaunch.verifiedAt,
    reviewBy: nuiteeLaunch.reviewBy,
    destinations: mappings.destinations,
    hotels: allHotelMappings.map(hotel => ({ hotelId: hotel.hotelId, destination: hotel.destination, name: hotel.name, matchEvidence: hotel.matchEvidence })),
  };
}

/** Candidates are not commercial links until account activation and tracking are verified. */
export function getNuiteeHotelLinks(hotelKey: string, locale: 'fr' | 'en', now = Date.now()): HotelPartnerLink[] {
  if (!isNuiteeBookingLive(now)) return [];
  const candidates: HotelPartnerLink[] = allHotelMappings.filter(item => item.editorialKeys.includes(hotelKey)).flatMap((hotel: {
    destination: string; editorialKeys: string[]; hotelId: string; name: string;
    matchEvidence: string; deepLinkEvidence: string;
  }) => {
    if (!/^lp[a-zA-Z0-9]+$/.test(hotel.hotelId) || !hotel.matchEvidence.trim() || !hotel.deepLinkEvidence.trim()) return [];
    return hotel.editorialKeys.map(key => {
      const url = new URL(`/hotels/${hotel.hotelId}`, nuiteeLaunch.origin);
      url.searchParams.set('language', locale);
      url.searchParams.set('currency', 'EUR');
      url.searchParams.set('clientReference', `bosphoras_${hotel.destination}_${hotel.hotelId}`);
      return {
        id: `nuitee:${key}`, providerId: 'nuitee-connect' as const, hotelKey: key,
        bookingBrand: 'Bosphoras Luxury Stays · Nuitée', sellerLegalName: nuiteeLaunch.sellerLegalName,
        supplierAgreementReference: nuiteeLaunch.agreementReference,
        supplierResponsibilities: Object.fromEntries(supplierResponsibilities.map(key => [key, true])) as HotelPartnerLink['supplierResponsibilities'],
        url: url.toString(), supportUrl: `${nuiteeLaunch.origin}/help-center`, termsUrl: nuiteeLaunch.origin,
        verifiedAt: nuiteeLaunch.verifiedAt, reviewBy: nuiteeLaunch.reviewBy,
        propertyMatchEvidence: hotel.matchEvidence, deepLinkEvidence: hotel.deepLinkEvidence,
        attributionEvidence: nuiteeLaunch.attributionEvidence,
      };
    });
  });
  return getHotelPartnerLinks(hotelKey, candidates, getNuiteeProviders(now), now);
}
