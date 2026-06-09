import { NextResponse } from 'next/server';

type VehicleId = 'e' | 's' | 'viano' | 'sprinter';
type Mode = 'transfer' | 'hourly';

type RouteInfo = {
  minutes: number;
  distanceMeters: number | null;
  source: 'google_routes' | 'fallback';
  googleStatus?: number;
  googleError?: string;
};

const VEHICLE_RATES: Record<VehicleId, number> = {
  viano: 85,
  sprinter: 120,
  e: 250,
  s: 400,
};

const SAW_TERMS = ['saw', 'sabiha', 'sabiha gokcen', 'sabiha gökçen', 'gokcen', 'gökçen'];
const IST_TERMS = ['istanbul airport', ' ist', 'ist airport', 'havalimani ist', 'havalimanı ist'];
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
  const normalizedTerms = terms.map(normalizeText);
  return normalizedTerms.some((term) => text.includes(term));
}

function fallbackMinutes(pickup: string, dropoff: string) {
  const text = normalizeText(`${pickup} ${dropoff}`);
  const ist = includesAny(text, IST_TERMS);
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
  if (includesAny(text, SAW_TERMS) || includesAny(text, ASIA_TERMS)) return 12;
  return 10;
}

function googleAddress(value: string) {
  const normalized = normalizeText(value);
  if (includesAny(normalized, SAW_TERMS)) return 'Sabiha Gokcen International Airport, Istanbul, Turkey';
  if (includesAny(normalized, IST_TERMS)) return 'Istanbul Airport, Istanbul, Turkey';
  return `${value}, Istanbul, Turkey`;
}

function safeGoogleError(value: unknown) {
  const text = typeof value === 'string' ? value : JSON.stringify(value || '');
  return text.slice(0, 220);
}

async function getGoogleRouteInfo(pickup: string, dropoff: string): Promise<RouteInfo | null> {
  const apiKey = process.env.GOOGLE_MAPS_SERVER_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return { minutes: fallbackMinutes(pickup, dropoff), distanceMeters: null, source: 'fallback', googleError: 'missing_google_maps_key' };
  }

  try {
    const response = await fetch('https://routes.googleapis.com/directions/v2:computeRoutes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters',
      },
      body: JSON.stringify({
        origin: { address: googleAddress(pickup) },
        destination: { address: googleAddress(dropoff) },
        travelMode: 'DRIVE',
        routingPreference: 'TRAFFIC_AWARE',
        units: 'METRIC',
        languageCode: 'en-US',
        regionCode: 'TR',
      }),
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      const body = await response.text().catch(() => '');
      return { minutes: fallbackMinutes(pickup, dropoff), distanceMeters: null, source: 'fallback', googleStatus: response.status, googleError: safeGoogleError(body) };
    }

    const data = await response.json();
    const route = data?.routes?.[0];
    const duration = route?.duration;
    const distanceMeters = Number(route?.distanceMeters);
    if (typeof duration !== 'string') {
      return { minutes: fallbackMinutes(pickup, dropoff), distanceMeters: null, source: 'fallback', googleError: 'missing_route_duration' };
    }
    const seconds = Number(duration.replace('s', ''));
    if (!Number.isFinite(seconds) || seconds <= 0) {
      return { minutes: fallbackMinutes(pickup, dropoff), distanceMeters: null, source: 'fallback', googleError: 'invalid_route_duration' };
    }

    return {
      minutes: Math.ceil(seconds / 60),
      distanceMeters: Number.isFinite(distanceMeters) && distanceMeters > 0 ? distanceMeters : null,
      source: 'google_routes',
    };
  } catch (error) {
    return { minutes: fallbackMinutes(pickup, dropoff), distanceMeters: null, source: 'fallback', googleError: safeGoogleError(error) };
  }
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
    const route = await getGoogleRouteInfo(pickup, dropoff);
    const estimatedMinutes = route?.minutes || fallbackMinutes(pickup, dropoff);
    const distanceKm = route?.distanceMeters
      ? Math.round((route.distanceMeters / 1000) * 10) / 10
      : fallbackDistanceKm(estimatedMinutes);
    const billed = billedMinutes(estimatedMinutes);
    const multiplier = roundTrip ? 2 : 1;
    const oneWayVehiclePrice = mode === 'transfer' ? Math.round(rate * (billed / 60)) : Math.round(hourlyPrice(rate, hours));
    const oneWayTollPrice = mode === 'transfer' ? estimateTollPrice(pickup, dropoff) : 0;
    const vehiclePrice = mode === 'transfer' ? oneWayVehiclePrice * multiplier : oneWayVehiclePrice;
    const tollPrice = mode === 'transfer' ? oneWayTollPrice * multiplier : 0;
    const total = vehiclePrice + tollPrice;

    return NextResponse.json({
      source: route?.source || 'fallback',
      googleStatus: route?.googleStatus,
      googleError: route?.googleError,
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
    return NextResponse.json({ error: 'quote_failed', detail: safeGoogleError(error) }, { status: 500 });
  }
}
