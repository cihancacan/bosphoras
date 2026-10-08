import { createClient } from '@supabase/supabase-js';
import type { Locale } from '@/lib/i18n';
import {
  getPublishedProperties as getStaticPublishedProperties,
  getPropertyBySlug as getStaticPropertyBySlug,
  type LocalizedText,
  type PropertyListing,
} from '@/data/propertyDesk';

type PropertyRow = Record<string, any>;

const PROPERTY_SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  'https://udbzytlmcnljlegmolcx.supabase.co';

const PROPERTY_SUPABASE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';

function publicClient() {
  const url = PROPERTY_SUPABASE_URL;
  const anonKey = PROPERTY_SUPABASE_PUBLISHABLE_KEY;

  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function localized(value: unknown): LocalizedText {
  const record = value && typeof value === 'object' ? (value as Record<string, string>) : {};
  return {
    fr: record.fr || '',
    en: record.en || '',
    ru: record.ru || '',
    ar: record.ar || '',
  };
}

function mapRow(row: PropertyRow): PropertyListing {
  return {
    id: row.external_id || row.id,
    projectId: row.real_estate_project_id || undefined,
    publicListingId: row.id,
    projectPriceMax: row.project_price_max === null || row.project_price_max === undefined ? undefined : Number(row.project_price_max),
    projectUnitOptions: Array.isArray(row.project_unit_options) ? row.project_unit_options : [],
    projectLatitude: row.project_latitude === null || row.project_latitude === undefined ? undefined : Number(row.project_latitude),
    projectLongitude: row.project_longitude === null || row.project_longitude === undefined ? undefined : Number(row.project_longitude),
    published: Boolean(row.published),
    featured: Boolean(row.featured),
    status: row.status,
    collection: row.collection,
    transaction: row.transaction_type,
    propertyType: row.property_type,
    countryCode: row.country_code || 'TR',
    countryName: row.country_name || 'Turkey',
    city: row.city || '',
    cityName: row.city_name || row.city || '',
    district: row.district,
    slugs: {
      fr: row.slug_fr,
      en: row.slug_en,
      ru: row.slug_ru,
      ar: row.slug_ar,
    },
    title: localized(row.title),
    shortTitle: row.short_title ? localized(row.short_title) : undefined,
    summary: localized(row.summary),
    description: localized(row.description),
    seoTitle: localized(row.seo_title),
    seoDescription: localized(row.seo_description),
    currency: row.currency,
    totalPrice: row.total_price === null || row.total_price === undefined ? undefined : Number(row.total_price),
    priceOnRequest: Boolean(row.price_on_request),
    entryCapital: row.entry_capital === null || row.entry_capital === undefined ? undefined : Number(row.entry_capital),
    surfaceM2: row.surface_m2 === null || row.surface_m2 === undefined ? undefined : Number(row.surface_m2),
    bedrooms: row.bedrooms === null || row.bedrooms === undefined ? undefined : Number(row.bedrooms),
    bathrooms: row.bathrooms === null || row.bathrooms === undefined ? undefined : Number(row.bathrooms),
    delivery: row.delivery ? localized(row.delivery) : undefined,
    developer: row.developer || undefined,
    partner: row.partner || undefined,
    sourceUrl: row.source_url || undefined,
    sourceHost: row.source_host || undefined,
    sourceLastCheckedAt: row.source_last_checked_at || undefined,
    sourcePartnerName: row.source_partner_name || undefined,
    paymentPlan: Array.isArray(row.payment_plan)
      ? row.payment_plan.map((step: any) => ({
          label: localized(step.label),
          due: localized(step.due),
          amount: step.amount === null || step.amount === undefined ? undefined : Number(step.amount),
          percentage: step.percentage === null || step.percentage === undefined ? undefined : Number(step.percentage),
        }))
      : undefined,
    paymentPlanEnabled: row.payment_plan_enabled !== false,
    paymentInterestMode: row.payment_interest_mode || 'not_specified',
    paymentInterestRate: row.payment_interest_rate === null || row.payment_interest_rate === undefined ? undefined : Number(row.payment_interest_rate),
    cashDiscountPct: row.cash_discount_pct === null || row.cash_discount_pct === undefined ? undefined : Number(row.cash_discount_pct),
    cashPrice: row.cash_price === null || row.cash_price === undefined ? undefined : Number(row.cash_price),
    installmentPrice: row.installment_price === null || row.installment_price === undefined ? undefined : Number(row.installment_price),
    paymentNotes: row.payment_notes ? localized(row.payment_notes) : undefined,
    highlights: Array.isArray(row.highlights) ? row.highlights.map(localized) : undefined,
    technicalNotes: Array.isArray(row.technical_notes) ? row.technical_notes.map(localized) : undefined,
    strengths: Array.isArray(row.strengths) ? row.strengths.map(localized) : undefined,
    watchpoints: Array.isArray(row.watchpoints) ? row.watchpoints.map(localized) : undefined,
    images: Array.isArray(row.images) ? row.images : [],
    heroImage: row.hero_image || undefined,
    verifiedAt: row.verified_at || undefined,
    publishedAt: row.published_at || undefined,
    updatedAt: row.updated_at || new Date().toISOString(),
  };
}

export async function fetchPublishedProperties(): Promise<PropertyListing[]> {
  const client = publicClient();
  if (!client) return getStaticPublishedProperties();

  const { data, error } = await client
    .from('property_listings')
    .select('*')
    .eq('published', true)
    .eq('review_status', 'approved')
    .order('featured', { ascending: false })
    .order('published_at', { ascending: false, nullsFirst: false });

  if (error || !data) {
    console.error('[property-desk] public listing read failed', error?.message);
    return getStaticPublishedProperties();
  }

  return data.map(mapRow);
}

export async function fetchPropertyBySlug(locale: Locale, slug: string): Promise<PropertyListing | undefined> {
  const client = publicClient();
  if (!client) return getStaticPropertyBySlug(locale, slug);

  const column = `slug_${locale}`;
  const normalized = slug.replace(/^\//, '').replace(/\/$/, '');
  const { data, error } = await client
    .from('property_listings')
    .select('*')
    .eq('published', true)
    .eq('review_status', 'approved')
    .eq(column, normalized)
    .maybeSingle();

  if (error) {
    console.error('[property-desk] public detail read failed', error.message);
    return getStaticPropertyBySlug(locale, slug);
  }

  return data ? mapRow(data) : undefined;
}
