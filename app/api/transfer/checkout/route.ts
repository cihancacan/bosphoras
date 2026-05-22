import { NextResponse } from 'next/server';
import Stripe from 'stripe';

type CheckoutItem = {
  label: string;
  amount: number;
};

function getBaseUrl(request: Request) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL;
  if (envUrl) return envUrl.startsWith('http') ? envUrl : `https://${envUrl}`;
  return new URL(request.url).origin;
}

function sanitizeAmount(value: unknown) {
  const amount = Math.round(Number(value || 0));
  return Number.isFinite(amount) && amount > 0 ? amount : 0;
}

export async function POST(request: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json({ error: 'stripe_not_configured' }, { status: 500 });
    }

    const stripe = new Stripe(secretKey);
    const body = await request.json();
    const total = sanitizeAmount(body.total);

    if (!total) {
      return NextResponse.json({ error: 'invalid_total' }, { status: 400 });
    }

    const pickup = String(body.pickup || 'Départ non renseigné').slice(0, 180);
    const dropoff = String(body.dropoff || 'Arrivée non renseignée').slice(0, 180);
    const vehicle = String(body.vehicle || 'Chauffeur privé Istanbul').slice(0, 180);
    const date = String(body.date || '').slice(0, 80);
    const time = String(body.time || '').slice(0, 40);
    const flightNumber = String(body.flightNumber || '').slice(0, 80);
    const passengerCount = String(body.passengerCount || '').slice(0, 40);
    const routeMinutes = String(body.routeMinutes || '').slice(0, 40);
    const distanceKm = String(body.distanceKm || '').slice(0, 40);
    const tollPrice = sanitizeAmount(body.tollPrice);
    const tip = sanitizeAmount(body.tip);
    const customerEmail = String(body.email || '').trim() || undefined;
    const baseUrl = getBaseUrl(request);

    const extraItems: CheckoutItem[] = [];
    if (tollPrice > 0) extraItems.push({ label: 'Péage inclus', amount: tollPrice });
    if (tip > 0) extraItems.push({ label: 'Pourboire chauffeur', amount: tip });

    const descriptionParts = [
      `${pickup} → ${dropoff}`,
      date && time ? `${date} à ${time}` : '',
      routeMinutes ? `${routeMinutes} min` : '',
      distanceKm ? `${distanceKm} km` : '',
      flightNumber ? `Vol ${flightNumber}` : '',
      passengerCount ? `${passengerCount} passager(s)` : '',
    ].filter(Boolean);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: customerEmail,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: total * 100,
            product_data: {
              name: vehicle,
              description: descriptionParts.join(' · ').slice(0, 900),
            },
          },
        },
      ],
      metadata: {
        service: 'bosphoras_transfer',
        pickup,
        dropoff,
        vehicle,
        date,
        time,
        flightNumber,
        passengerCount,
        routeMinutes,
        distanceKm,
        tollPrice: String(tollPrice),
        tip: String(tip),
        extras: extraItems.map((item) => `${item.label}:${item.amount}`).join('|'),
      },
      success_url: `${baseUrl}/transferts-istanbul?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/transferts-istanbul?payment=cancelled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: 'checkout_failed' }, { status: 500 });
  }
}
