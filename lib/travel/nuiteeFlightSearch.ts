import { getNuiteeWhiteLabelSearchHref } from './nuiteeWhiteLabel';

export type FlightTrip = 'round' | 'one' | 'multi';
export type FlightCabin = 'all' | 'Economy' | 'Business' | 'First';
export type SearchAirport = { code: string; name: string };
export type FlightLeg = { from: SearchAirport; to: SearchAirport; date: string };

export const maxFlightPassengers = 9;

function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

export function getNuiteeFlightSearchHref({ locale, trip, legs, adults, childrenAges = [], infants = 0, cabin }: {
  locale: string;
  trip: FlightTrip;
  legs: FlightLeg[];
  adults: number;
  childrenAges?: number[];
  infants?: number;
  cabin: FlightCabin;
}): string | null {
  const expectedLegs = trip === 'round' ? 2 : 1;
  if (trip === 'multi' ? legs.length < 2 || legs.length > 5 : legs.length !== expectedLegs) return null;
  if (!Number.isInteger(adults) || adults < 1 || !Number.isInteger(infants) || infants < 0 || infants > adults ||
      adults + childrenAges.length + infants > maxFlightPassengers ||
      childrenAges.some(age => !Number.isInteger(age) || age < 2 || age > 11)) return null;
  if (legs.some(({from, to, date}, i) =>
    !/^[A-Z]{3}$/.test(from.code) || !/^[A-Z]{3}$/.test(to.code) || from.code === to.code ||
    !validDate(date) || (i > 0 && date < legs[i - 1].date))) return null;
  if (trip === 'round' && (legs[0].from.code !== legs[1].to.code || legs[0].to.code !== legs[1].from.code)) return null;

  // Use the same result URL and field names produced by the live Nuitée storefront.
  const url = new URL(getNuiteeWhiteLabelSearchHref(locale));
  url.pathname = '/flights/journeys';
  const params = url.searchParams;
  params.set('adults', String(adults));
  params.set('children', String(childrenAges.length));
  params.set('infants', String(infants));
  if (childrenAges.length) params.set('childrenAges', childrenAges.join(','));
  if (infants) params.set('infantAges', Array<number>(infants).fill(0).join(','));
  params.set('maxStops', '-1');
  params.set('tripType', trip === 'round' ? 'round-trip' : trip === 'one' ? 'one-way' : 'multi-city');
  if (cabin !== 'all') {
    params.set('cabinClass', cabin);
    params.set('cabinClassMatch', 'exactly');
  }

  legs.forEach(({from, to, date}, i) => {
    const prefix = trip === 'multi' ? `leg${i}` : i === 0 ? 'out' : 'in';
    params.set(`${prefix}Origin`, from.code);
    params.set(`${prefix}Destination`, to.code);
    params.set(`${prefix}Date`, date);
    params.set(`${prefix}OriginName`, from.name);
    params.set(`${prefix}DestinationName`, to.name);
  });
  return url.toString();
}
