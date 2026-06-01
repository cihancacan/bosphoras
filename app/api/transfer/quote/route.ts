import { NextResponse } from 'next/server';

type VehicleId = 'e' | 's' | 'viano' | 'sprinter';
type Mode = 'transfer' | 'hourly';

type RouteInfo = {
  minutes: number;
  distanceMeters: number | null;
};

const VEHICLE_RATES: Record<VehicleId, number> = {
  viano: 80,
  sprinter: 120,
  e: 250,
  s: 400,
};

const SAW_TERMS = ['saw', 'sabiha', 'sabiha gokcen', 'sabiha gökçen', 'gokcen', 'gökçen'];
const ASIA_TERMS = ['asia', 'asian', 'asian side', 'anatolian', 'anatolian side', 'asya', 'anadolu', 'kadikoy', 'kadıköy', 'uskudar', 'üsküdar', 'beykoz', 'atasehir', 'ataşehir'];

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c');
}

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(normalizeText(term)));
}

function fallbackMinutes(pickup: string, dropoff: string) {
  const text = normalizeText(`${pickup} ${dropoff}`);
  const ist = text.includes('istanbul airport') || text.includes(' ist') || text.includes('istanbul flughafen') || text.includes('flughafen istanbul');
  const saw = includesAny(text, SAW_TERMS);
  if (ist && saw) return 120;
  if (saw) return 90;
  if (ist) return 75;
  return 60;
}

function fallbackDistanceKm(minutes: number) {
  return Math.max(18, Math.round(minutes * 0.72));
}

function billedMinutes(minutes: number) {
  return minutes <= 60 ? 60 : Math.ceil(minutes / 30) * 30;
}

function hourlyPrice(rate: number, hours: number) {
  return Math.min(hours, 2) * rate + Math.max(hours - 2, 0) * rate * 0.8;
}

function estimateTollPrice(pickup: string, dropoff: string) {
  const text = normalizeText(`${pickup} ${dropoff}`);
  if (includesAny(text, SAW_TERMS) || includesAny(text, ASIA_TERMS)) return 15;
  return 5;
}

async function getGoogleRouteInfo(pickup: string, dropoff: string): Promise<RouteInfo | null> {
  const apiKey = process.env.GOOGLE_MAPS_SERVER_API_KEY;
  if (!apiKey) return null;

  const response = await fetch('https://routes.googleapis.com/directions/v2:computeRoutes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters',
    },
    body: JSON.stringify({
      origin: { address: pickup },
      destination: { address: dropoff },
      travelMode: 'DRIVE',
      routingPreference: 'TRAFFIC_AWARE',
      units: 'METRIC',
      languageCode: 'en-US',
      regionCode: 'TR',
    }),
    next: { revalidate: 0 },
  });

  if (!response.ok) return null;
  const data = await response.json();
  const route = data?.routes?.[0];
  const duration = route?.duration;
  const distanceMeters = Number(route?.distanceMeters);
  if (typeof duration !== 'string') return null;
  const seconds = Number(duration.replace('s', ''));
  if (!Number.isFinite(seconds) || seconds <= 0) return null;

  return {
    minutes: Math.ceil(seconds / 60),
    distanceMeters: Number.isFinite(distanceMeters) && distanceMeters > 0 ? distanceMeters : null,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const pickup = String(body.pickup || '').trim();
    const dropoff = String(body.dropoff || '').trim();
    const mode = (body.mode === 'hourly' ? 'hourly' : 'transfer') as Mode;
    const vehicleId = (body.vehicleId || 'e') as VehicleId;
    const hours = Math.max(2, Number(body.hours || 2));
    const roundTrip = mode === 'transfer' && (body.roundTrip === true || body.roundTrip === 'true');

    if (!pickup || !dropoff) {
      return NextResponse.json({ error: 'pickup_and_dropoff_required' }, { status: 400 });
    }

    const rate = VEHICLE_RATES[vehicleId] || VEHICLE_RATES.e;
    const googleRoute = await getGoogleRouteInfo(pickup, dropoff);
    const estimatedMinutes = googleRoute?.minutes || fallbackMinutes(pickup, dropoff);
    const distanceKm = googleRoute?.distanceMeters
      ? Math.round((googleRoute.distanceMeters / 1000) * 10) / 10
      : fallbackDistanceKm(estimatedMinutes);
    const billed = billedMinutes(estimatedMinutes);
    const multiplier = roundTrip ? 2 : 1;
    const oneWayVehiclePrice = mode === 'transfer' ? Math.round(rate * (billed / 60)) : Math.round(hourlyPrice(rate, hours));
    const oneWayTollPrice = mode === 'transfer' ? estimateTollPrice(pickup, dropoff) : 0;
    const vehiclePrice = mode === 'transfer' ? oneWayVehiclePrice * multiplier : oneWayVehiclePrice;
    const tollPrice = mode === 'transfer' ? oneWayTollPrice * multiplier : 0;
    const total = vehiclePrice + tollPrice;

    return NextResponse.json({
      source: googleRoute ? 'google_routes' : 'fallback',
      estimatedMinutes,
      billedMinutes: billed,
      distanceKm,
      vehiclePrice,
      tollPrice,
      total,
      roundTrip,
      oneWayVehiclePrice,
      oneWayTollPrice,
    });
  } catch (error) {
    return NextResponse.json({ error: 'quote_failed' }, { status: 500 });
  }
}
