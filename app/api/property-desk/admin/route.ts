import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

const LOCALES = ['fr', 'en', 'ru', 'ar'] as const;
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/avif']);
const MAX_IMAGE_BYTES = 15 * 1024 * 1024;
const MAX_IMAGES = 16;

type Locale = (typeof LOCALES)[number];

function adminTokenFrom(request: NextRequest) {
  const header = request.headers.get('authorization') || '';
  return header.startsWith('Bearer ') ? header.slice(7).trim() : '';
}

function getAdminClient() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://udbzytlmcnljlegmolcx.supabase.co';
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRole) return null;
  return createClient(url, serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function isCompleteLocalized(value: unknown) {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return LOCALES.every((locale) => typeof record[locale] === 'string' && String(record[locale]).trim().length > 0);
}

function slugValue(value: unknown) {
  return String(value || '')
    .trim()
    .replace(/^\/+|\/+$/g, '');
}

function safeSegment(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 90) || 'image';
}

function toNullableNumber(value: unknown) {
  if (value === null || value === undefined || value === '') return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function validatePayload(payload: any) {
  const errors: string[] = [];
  if (!payload || typeof payload !== 'object') return ['Invalid payload'];
  if (!['available', 'reserved', 'sold', 'private'].includes(payload.status)) errors.push('Invalid status');
  if (!['selected-investment', 'signature', 'private'].includes(payload.collection)) errors.push('Invalid collection');
  if (!['sale', 'rent'].includes(payload.transaction)) errors.push('Invalid transaction');
  if (!['apartment', 'villa', 'residence', 'penthouse', 'commercial'].includes(payload.propertyType)) errors.push('Invalid propertyType');
  if (!String(payload.countryCode || '').trim()) errors.push('Country code is required');
  if (!String(payload.countryName || '').trim()) errors.push('Country name is required');
  if (!String(payload.city || '').trim()) errors.push('City is required');
  if (!String(payload.district || '').trim()) errors.push('District is required');
  if (!['EUR', 'USD', 'TRY', 'GBP', 'CHF', 'AED', 'KZT', 'GEL'].includes(payload.currency)) errors.push('Invalid currency');

  const slugs = payload.slugs || {};
  for (const locale of LOCALES) {
    if (!slugValue(slugs[locale])) errors.push(`Missing slug ${locale}`);
  }

  if (!isCompleteLocalized(payload.title)) errors.push('Titles are required in all languages');
  if (!isCompleteLocalized(payload.summary)) errors.push('Summaries are required in all languages');
  if (!isCompleteLocalized(payload.description)) errors.push('Descriptions are required in all languages');
  if (!isCompleteLocalized(payload.seoTitle)) errors.push('SEO titles are required in all languages');
  if (!isCompleteLocalized(payload.seoDescription)) errors.push('SEO descriptions are required in all languages');

  return errors;
}

export async function POST(request: NextRequest) {
  const configuredToken = process.env.PROPERTY_ADMIN_TOKEN;
  if (!configuredToken) {
    return NextResponse.json({ error: 'Property Desk admin is not configured yet.' }, { status: 503 });
  }

  const providedToken = adminTokenFrom(request);
  if (!providedToken || providedToken !== configuredToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: 'Supabase is not configured for Bosphoras yet.' }, { status: 503 });
  }

  const form = await request.formData();
  const payloadRaw = form.get('payload');
  if (typeof payloadRaw !== 'string') {
    return NextResponse.json({ error: 'Missing payload' }, { status: 400 });
  }

  let payload: any;
  try {
    payload = JSON.parse(payloadRaw);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const validationErrors = validatePayload(payload);
  if (validationErrors.length) {
    return NextResponse.json({ error: 'Validation failed', details: validationErrors }, { status: 400 });
  }

  const files = form
    .getAll('images')
    .filter((item): item is File => typeof File !== 'undefined' && item instanceof File && item.size > 0)
    .slice(0, MAX_IMAGES);

  for (const file of files) {
    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      return NextResponse.json({ error: `Unsupported image type: ${file.type}` }, { status: 400 });
    }
    if (file.size > MAX_IMAGE_BYTES) {
      return NextResponse.json({ error: `Image too large: ${file.name}` }, { status: 400 });
    }
  }

  const externalId = safeSegment(String(payload.externalId || crypto.randomUUID()));
  const uploadedUrls: string[] = [];

  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    const extension = safeSegment(file.name.split('.').pop() || 'jpg');
    const baseName = safeSegment(file.name.replace(/\.[^.]+$/, ''));
    const storagePath = `${externalId}/${String(index + 1).padStart(2, '0')}-${baseName}.${extension}`;
    const bytes = Buffer.from(await file.arrayBuffer());

    const { error: uploadError } = await supabase.storage
      .from('property-images')
      .upload(storagePath, bytes, {
        contentType: file.type,
        cacheControl: '31536000',
        upsert: false,
      });

    if (uploadError) {
      return NextResponse.json({ error: `Image upload failed: ${uploadError.message}` }, { status: 500 });
    }

    const { data } = supabase.storage.from('property-images').getPublicUrl(storagePath);
    uploadedUrls.push(data.publicUrl);
  }

  const row = {
    external_id: externalId,
    published: Boolean(payload.published),
    featured: Boolean(payload.featured),
    status: payload.status,
    collection: payload.collection,
    transaction_type: payload.transaction,
    property_type: payload.propertyType,
    country_code: String(payload.countryCode).trim().toUpperCase(),
    country_name: String(payload.countryName).trim(),
    city: String(payload.city).trim(),
    city_name: String(payload.cityName || payload.city).trim(),
    district: String(payload.district).trim(),
    slug_fr: slugValue(payload.slugs.fr),
    slug_en: slugValue(payload.slugs.en),
    slug_ru: slugValue(payload.slugs.ru),
    slug_ar: slugValue(payload.slugs.ar),
    title: payload.title,
    short_title: payload.shortTitle || null,
    summary: payload.summary,
    description: payload.description,
    seo_title: payload.seoTitle,
    seo_description: payload.seoDescription,
    currency: payload.currency,
    total_price: toNullableNumber(payload.totalPrice),
    price_on_request: Boolean(payload.priceOnRequest),
    entry_capital: toNullableNumber(payload.entryCapital),
    surface_m2: toNullableNumber(payload.surfaceM2),
    bedrooms: toNullableNumber(payload.bedrooms),
    bathrooms: toNullableNumber(payload.bathrooms),
    delivery: payload.delivery || null,
    developer: String(payload.developer || '').trim() || null,
    partner: String(payload.partner || '').trim() || null,
    payment_plan: Array.isArray(payload.paymentPlan) ? payload.paymentPlan : [],
    highlights: Array.isArray(payload.highlights) ? payload.highlights : [],
    technical_notes: Array.isArray(payload.technicalNotes) ? payload.technicalNotes : [],
    strengths: Array.isArray(payload.strengths) ? payload.strengths : [],
    watchpoints: Array.isArray(payload.watchpoints) ? payload.watchpoints : [],
    images: uploadedUrls,
    hero_image: uploadedUrls[0] || null,
    verified_at: payload.verifiedAt || null,
    published_at: payload.published ? new Date().toISOString() : null,
  };

  const { data, error } = await supabase
    .from('property_listings')
    .insert(row)
    .select('id, external_id, published, slug_fr, slug_en, slug_ru, slug_ar')
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, property: data, images: uploadedUrls }, { status: 201 });
}
