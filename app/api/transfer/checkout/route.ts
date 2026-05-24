import { NextResponse } from 'next/server';
import Stripe from 'stripe';

type CheckoutItem = { label: string; amount: number };
type Locale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

const localePaths: Record<Locale, string> = {
  fr: '/transferts-istanbul',
  en: '/en/istanbul-airport-transfer',
  ru: '/ru/transfer-aeroport-stambul',
  ar: '/ar/istanbul-airport-transfer',
  zh: '/zh/istanbul-airport-transfer',
  de: '/de/flughafentransfer-istanbul',
  es: '/es/traslado-aeropuerto-estambul',
  it: '/it/transfer-aeroporto-istanbul',
  pt: '/pt/transfer-aeroporto-istambul',
};

function getBaseUrl(request: Request) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL;
  if (envUrl) return envUrl.startsWith('http') ? envUrl : `https://${envUrl}`;
  return new URL(request.url).origin;
}

function getLocale(request: Request, body: any): Locale {
  const explicit = String(body.locale || '').toLowerCase();
  if (explicit in localePaths) return explicit as Locale;
  const ref = request.headers.get('referer') || '';
  const path = ref ? new URL(ref).pathname.toLowerCase() : '';
  if (path.startsWith('/en/')) return 'en';
  if (path.startsWith('/ru/')) return 'ru';
  if (path.startsWith('/ar/')) return 'ar';
  if (path.startsWith('/zh/')) return 'zh';
  if (path.startsWith('/de/')) return 'de';
  if (path.startsWith('/es/')) return 'es';
  if (path.startsWith('/it/')) return 'it';
  if (path.startsWith('/pt/')) return 'pt';
  return 'fr';
}

function sanitizeAmount(value: unknown) {
  const amount = Math.round(Number(value || 0));
  return Number.isFinite(amount) && amount > 0 ? amount : 0;
}

function isValidEmail(email: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email); }
function isValidInternationalPhone(phone: string) { return /^\+[1-9]\d{7,14}$/.test(phone.replace(/[\s().-]/g, '')); }

export async function POST(request: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) return NextResponse.json({ error: 'stripe_not_configured' }, { status: 500 });
    const stripe = new Stripe(secretKey);
    const body = await request.json();
    const locale = getLocale(request, body);
    const total = sanitizeAmount(body.total);
    if (!total) return NextResponse.json({ error: 'invalid_total' }, { status: 400 });

    const firstName = String(body.firstName || '').trim().slice(0, 80);
    const lastName = String(body.lastName || '').trim().slice(0, 80);
    const phone = String(body.phone || '').trim().slice(0, 40);
    const customerEmail = String(body.email || '').trim().slice(0, 120);
    if (firstName.length < 2 || lastName.length < 2 || !isValidInternationalPhone(phone) || !isValidEmail(customerEmail)) return NextResponse.json({ error: 'passenger_details_required' }, { status: 400 });

    const pickup = String(body.pickup || 'Départ non renseigné').slice(0, 180);
    const dropoff = String(body.dropoff || 'Arrivée non renseignée').slice(0, 180);
    const vehicle = String(body.vehicle || 'Chauffeur privé Istanbul').slice(0, 180);
    const date = String(body.date || '').slice(0, 80);
    const time = String(body.time || '').slice(0, 40);
    const flightNumber = String(body.flightNumber || '').slice(0, 80);
    const passengerCount = String(body.passengerCount || '').slice(0, 40);
    const routeMinutes = String(body.routeMinutes || '').slice(0, 40);
    const distanceKm = String(body.distanceKm || '').slice(0, 40);
    const note = String(body.note || '').slice(0, 450);
    const tollPrice = sanitizeAmount(body.tollPrice);
    const tip = sanitizeAmount(body.tip);
    const baseUrl = getBaseUrl(request);
    const extraItems: CheckoutItem[] = [];
    if (tollPrice > 0) extraItems.push({ label: 'Péage inclus', amount: tollPrice });
    if (tip > 0) extraItems.push({ label: 'Pourboire chauffeur', amount: tip });

    const descriptionParts = [`${pickup} → ${dropoff}`, date && time ? `${date} à ${time}` : date, routeMinutes ? `${routeMinutes} min` : '', distanceKm ? `${distanceKm} km` : '', flightNumber ? `Vol ${flightNumber}` : '', passengerCount ? `${passengerCount} passager(s)` : '', `${firstName} ${lastName}`, phone].filter(Boolean);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: customerEmail,
      line_items: [{ quantity: 1, price_data: { currency: 'eur', unit_amount: total * 100, product_data: { name: vehicle, description: descriptionParts.join(' · ').slice(0, 900) } } }],
      metadata: { service: 'bosphoras_transfer', locale, firstName, lastName, phone, email: customerEmail, pickup, dropoff, vehicle, date, time, flightNumber, passengerCount, routeMinutes, distanceKm, tollPrice: String(tollPrice), tip: String(tip), note, extras: extraItems.map((item) => `${item.label}:${item.amount}`).join('|') },
      success_url: `${baseUrl}${localePaths[locale]}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}${localePaths[locale]}?payment=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: 'checkout_failed' }, { status: 500 });
  }
}
