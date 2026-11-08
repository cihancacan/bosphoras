import mappings from '@/data/travel/nuiteeMappings.json';

/** Only independently verified Nuitee IDs can open a specific property. */
export type SmartHotelSuggestion =
  | { kind: 'hotel'; id: string; label: string; detail: string }
  | { kind: 'destination'; id: string; label: string; detail: string };

const suggestions: SmartHotelSuggestion[] = [
  ...mappings.hotels
    .filter(hotel => /^lp[a-zA-Z0-9]+$/.test(hotel.hotelId) && Boolean(hotel.matchEvidence?.trim()))
    .map(hotel => ({
      kind: 'hotel' as const,
      id: hotel.hotelId,
      label: hotel.name,
      detail: hotel.destination === 'istanbul' ? 'Istanbul · Hôtel vérifié' : hotel.destination,
    })),
  ...mappings.destinations
    .filter(destination => Boolean(destination.placeId && destination.matchEvidence?.trim()))
    .map(destination => ({
      kind: 'destination' as const,
      id: destination.key,
      label: destination.displayName,
      detail: 'Destination · Explorer les hôtels',
    })),
];

export function normalizeHotelQuery(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim().toLowerCase();
}

/** Exact and prefix matches win. Never pretend an approximate match is an exact hotel. */
export function smartHotelSuggestions(query: string, limit = 7): SmartHotelSuggestion[] {
  const q = normalizeHotelQuery(query);
  if (!q) return suggestions.filter(item => item.kind === 'destination').slice(0, 5);
  const tokens = q.split(' ').filter(Boolean);
  return suggestions
    .map(item => {
      const name = normalizeHotelQuery(item.label);
      const rank = name === q ? 0 : name.startsWith(q) ? 1 : name.split(' ').some(word => word.startsWith(q)) ? 2
        : tokens.every(token => name.includes(token)) ? 3 : name.includes(q) ? 4 : 99;
      return { item, rank };
    })
    .filter(row => row.rank < 99)
    .sort((a, b) => a.rank - b.rank || (a.item.kind === 'hotel' ? -1 : 1) || a.item.label.localeCompare(b.item.label))
    .slice(0, limit)
    .map(row => row.item);
}

export function findExactVerifiedHotel(query: string): SmartHotelSuggestion | undefined {
  const normalized = normalizeHotelQuery(query);
  return suggestions.find(item => item.kind === 'hotel' && normalizeHotelQuery(item.label) === normalized);
}

export function isVerifiedSmartSelection(selection: SmartHotelSuggestion): boolean {
  return suggestions.some(item => item.kind === selection.kind && item.id === selection.id && item.label === selection.label);
}
