import { NextResponse } from 'next/server';

type VehicleId = 'e' | 's' | 'viano' | 'sprinter';
type Mode = 'transfer' | 'hourly';

const VEHICLE_RATES: Record<VehicleId, number> = {
  e: 250,
  s: 400,
  viano: 150,
  sprinter: 200,
};

const AIRPORT_TERMS = ['airport', 'ist', 'saw', 'aéroport', 'havalimani', 'havalimanı'];
const TOLL_TERMS = ['istanbul airport', ' ist', 'sabiha', 'saw', 'asia', 'asian', 'kadikoy', 'kadıköy', 'uskudar', 'üsküdar', 'beykoz'];

function fallbackMinutes(pickup: string, dropoff: string) {
  const text = `${pickup} ${dropoff}`.toLowerCase();
  const ist = text.includes('istanbul airport') || text.includes(' ist');
  const saw = text.includes('sabiha') || text.includes('saw');
  if (ist && saw) return 120;
  if (saw) return 90;
  if (ist) return 75;
  return 60;
}

function billedMinutes(minutes: number) {
  return minutes <= 60 ? 60 : Math.ceil(minutes / 30) * 30;
}

function hourlyPrice(rate: number, hours: number) {
  return Math.min(hours, 2) * rate + Math.max(hours - 2, 0) * rate * 0.8;
}

function estimateTollPrice(pickup: string, dropoff: string) {
  const text = `${pickup} ${dropoff}`.toLowerCase();
  const hasAirport = AIRPORT_TERMS.some((term) => text.includes(term));
  const hasTollRoute = TOLL_TERMS.some((term) => text.includes(term));
  if (!hasAirport && !hasTollRoute) return 0;
  if (text.includes('saw') || text.includes('sabiha')) return 25;
  return 15;
}

async function getGoogleRouteMinutes(pickup: string, dropoff: string) {
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
  const duration = data?.routes?.[0]?.duration;
  if (typeof duration !== 'string') return null;
  const seconds = Number(duration.replace('s', ''));
  if (!Number.isFinite(seconds) || seconds <= 0) return null;
  return Math.ceil(seconds / 60);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const pickup = String(body.pickup || '').trim();
    const dropoff = String(body.dropoff || '').trim();
    const mode = (body.mode === 'hourly' ? 'hourly' : 'transfer') as Mode;
    const vehicleId = (body.vehicleId || 'e') as VehicleId;
    const hours = Math.max(2, Number(body.hours || 2));

    if (!pickup || !dropoff) {
      return NextResponse.json({ error: 'pickup_and_dropoff_required' }, { status: 400 });
    }

    const rate = VEHICLE_RATES[vehicleId] || VEHICLE_RATES.e;
    const googleMinutes = await getGoogleRouteMinutes(pickup, dropoff);
    const estimatedMinutes = googleMinutes || fallbackMinutes(pickup, dropoff);
    const billed = billedMinutes(estimatedMinutes);
    const vehiclePrice = mode === 'transfer' ? Math.round(rate * (billed / 60)) : Math.round(hourlyPrice(rate, hours));
    const tollPrice = estimateTollPrice(pickup, dropoff);
    const total = vehiclePrice + tollPrice;

    return NextResponse.json({
      source: googleMinutes ? 'google_routes' : 'fallback',
      estimatedMinutes,
      billedMinutes: billed,
      vehiclePrice,
      tollPrice,
      total,
    });
  } catch (error) {
    return NextResponse.json({ error: 'quote_failed' }, { status: 500 });
  }
}
