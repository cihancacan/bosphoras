import mappings from '@/data/travel/nuiteeMappings.json';
import { hotelProviders, supplierResponsibilities, getHotelPartnerLinks, type HotelProvider, type HotelPartnerLink } from './hotelPartners';
import type { NuiteeSearchConnection } from './nuiteeSearchHandoff';

const bookingHosts = ['cihan-cacan-7d0sw.nuitee.link'];

/** Operational evidence only. No API key, card, bank details or traveler data. */
export const nuiteeLaunch = {
  origin: 'https://cihan-cacan-7d0sw.nuitee.link',
  sellerLegalName: 'Nuitée Travel Limited',
  agreementReference: 'LAS-3651: Lina Elkhettar reply, 2026-11-02; Connect terms 2025-09-12',
  mappingPermissionReference: 'LAS-3651: explicit permission for editorial hotel and destination links, 2026-11-02',
  ownerApprovalReference: 'Owner requested real commercial launch, 2026-11-02',
  // Step 4 is awaiting clarification of the account-card charging mandate.
  productionVerifiedAt: '',
  cardClarificationReference: '',
  attributionEvidence: '',
  verifiedAt: '2026-11-02T00:00:00Z',
  reviewBy: '2026-12-02T00:00:00Z',
};

export function isNuiteeBookingLive(now = Date.now()): boolean {
  let origin: URL;
  try { origin = new URL(nuiteeLaunch.origin); } catch { return false; }
  if (origin.protocol !== 'https:' || !bookingHosts.includes(origin.hostname) || origin.pathname !== '/' ||
      origin.search || origin.hash || origin.username || origin.password || (origin.port && origin.port !== '443')) return false;
  const production = Date.parse(nuiteeLaunch.productionVerifiedAt);
  return Boolean(nuiteeLaunch.cardClarificationReference.trim() && nuiteeLaunch.attributionEvidence.trim() &&
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
  const url = new URL(nuiteeLaunch.origin);
  url.searchParams.set('language', locale);
  url.searchParams.set('currency', 'EUR');
  url.searchParams.set('clientReference', 'bosphoras_worldwide');
  return url.toString();
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
  };
}

/** Candidates are not commercial links until account activation and tracking are verified. */
export function getNuiteeHotelLinks(hotelKey: string, locale: 'fr' | 'en', now = Date.now()): HotelPartnerLink[] {
  if (!isNuiteeBookingLive(now)) return [];
  const candidates: HotelPartnerLink[] = mappings.hotels.flatMap((hotel: {
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
