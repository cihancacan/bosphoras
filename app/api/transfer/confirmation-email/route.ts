import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendTransferConfirmationEmail } from '@/lib/transfer-confirmation-email';

function getBaseUrl(request: Request) {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL;
  if (envUrl) return envUrl.startsWith('http') ? envUrl : `https://${envUrl}`;
  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  try {
    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) return NextResponse.json({ error: 'stripe_not_configured' }, { status: 500 });

    const { sessionId } = await request.json();
    const id = String(sessionId || '').trim();
    if (!id.startsWith('cs_')) return NextResponse.json({ error: 'invalid_session' }, { status: 400 });

    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(id);
    if (session.payment_status !== 'paid') return NextResponse.json({ error: 'payment_not_paid' }, { status: 402 });

    const meta = session.metadata || {};
    const email = String(meta.email || session.customer_email || '').trim();
    if (!email) return NextResponse.json({ error: 'missing_email' }, { status: 400 });

    await sendTransferConfirmationEmail({
      locale: meta.locale || 'fr',
      email,
      firstName: String(meta.firstName || ''),
      lastName: String(meta.lastName || ''),
      phone: String(meta.phone || ''),
      pickup: String(meta.pickup || ''),
      dropoff: String(meta.dropoff || ''),
      vehicle: String(meta.vehicle || ''),
      date: [meta.date, meta.time].filter(Boolean).join(' · '),
      flightNumber: String(meta.flightNumber || ''),
      passengerCount: String(meta.passengerCount || ''),
      sessionId: id,
      baseUrl: getBaseUrl(request),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'email_failed' }, { status: 500 });
  }
}
