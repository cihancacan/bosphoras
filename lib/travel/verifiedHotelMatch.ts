import mappings from '@/data/travel/nuiteeMappings.json';

/** Exact, user-selected Google Places descriptions only. Never guess a Nuitee property ID. */
function normalized(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ').trim().replace(/^the /, '');
}

/**
 * A Places suggestion may contain the property name followed by address components.
 * Compare entire leading comma-separated components, rather than substring matching.
 * This avoids e.g. "Raffles Istanbul Airport" being mistaken for "Raffles Istanbul".
 */
export function findVerifiedHotelForPlace(placeDescription: string): { hotelId: string; name: string } | null {
  if (typeof placeDescription !== 'string' || !placeDescription.trim() || placeDescription.length > 250) return null;
  const components = placeDescription.split(/\s*[,|·]\s*/).filter(Boolean);
  if (!components.length) return null;
  const candidates = new Set(
    [1, 2, 3].filter(count => count <= components.length)
      .map(count => normalized(components.slice(0, count).join(' '))),
  );
  const matches = mappings.hotels.filter(hotel =>
    /^lp[a-zA-Z0-9]+$/.test(hotel.hotelId) && Boolean(hotel.matchEvidence?.trim()) &&
    Boolean(hotel.deepLinkEvidence?.trim()) && candidates.has(normalized(hotel.name)),
  );
  return matches.length === 1 ? { hotelId: matches[0].hotelId, name: matches[0].name } : null;
}
