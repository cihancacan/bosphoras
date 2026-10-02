// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { generateText } from 'ai';

export const runtime = 'nodejs';
export const maxDuration = 45;

const SUPABASE_URL =
  process.env.SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://udbzytlmcnljlegmolcx.supabase.co';

const PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';

function bearer(request: NextRequest) {
  const h = request.headers.get('authorization') || '';
  return h.startsWith('Bearer ') ? h.slice(7).trim() : '';
}

async function verifyPortalUser(request: NextRequest) {
  const token = bearer(request);
  if (!token) return null;
  const client = createClient(SUPABASE_URL, PUBLISHABLE_KEY, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: auth } = await client.auth.getUser(token);
  if (!auth.user) return null;
  const { data: profile } = await client.from('profiles').select('role,status').eq('user_id', auth.user.id).maybeSingle();
  if (!profile || profile.status !== 'active' || !['admin','partner'].includes(profile.role)) return null;
  return { client, user: auth.user, role: profile.role };
}

function outputText(response: any) {
  const texts: string[] = [];
  for (const item of response?.output || []) {
    for (const part of item?.content || []) {
      if (part?.type === 'output_text' && typeof part.text === 'string') texts.push(part.text);
    }
  }
  return texts.join('\n').trim();
}

function cleanJson(text: string) {
  const trimmed = text.trim().replace(/^\`\`\`json\s*/i, '').replace(/\`\`\`$/,'').trim();
  return JSON.parse(trimmed);
}

async function translateText(text: string, target: 'fr'|'en'|'ru'|'ar') {
  const clean = String(text || '').trim();
  if (!clean) return '';

  const chunks: string[] = [];
  let remaining = clean;
  while (remaining.length > 3200) {
    let cut = remaining.lastIndexOf('. ', 3200);
    if (cut < 1600) cut = remaining.lastIndexOf(' ', 3200);
    if (cut < 1200) cut = 3200;
    chunks.push(remaining.slice(0, cut + 1).trim());
    remaining = remaining.slice(cut + 1).trim();
  }
  if (remaining) chunks.push(remaining);

  const translated = await Promise.all(chunks.map(async (chunk) => {
    const params = new URLSearchParams({
      client: 'gtx',
      sl: 'auto',
      tl: target,
      dt: 't',
      q: chunk,
    });
    const response = await fetch('https://translate.googleapis.com/translate_a/single', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: params.toString(),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) throw new Error(`Translation fallback responded ${response.status}`);
    const payload = await response.json();
    const parts = Array.isArray(payload?.[0]) ? payload[0] : [];
    return parts.map((part:any) => String(part?.[0] || '')).join('').trim();
  }));

  return translated.join(' ').trim();
}

function fallbackPropertyType(text: string) {
  const lower = text.toLowerCase();
  if (/villa|müstakil|mustakil/.test(lower)) return 'villa';
  if (/penthouse/.test(lower)) return 'penthouse';
  if (/commercial|retail|office|shop|ticari|ofis|mağaza|magaza/.test(lower)) return 'commercial';
  if (/residence|residans/.test(lower)) return 'residence';
  if (/apartment|appartement|daire|konut/.test(lower)) return 'apartment';
  return '';
}

function fallbackCity(text: string) {
  const lower = text.toLocaleLowerCase('tr-TR');
  if (lower.includes('istanbul') || lower.includes('i̇stanbul')) return 'istanbul';
  if (lower.includes('bodrum')) return 'bodrum';
  if (lower.includes('antalya')) return 'antalya';
  return '';
}

async function buildTranslationFallback(data: any, source: any) {
  const targets = ['fr','en','ru','ar'] as const;
  const [titlePairs, summaryPairs, descriptionPairs, deliveryPairs] = await Promise.all([
    Promise.all(targets.map(async (locale) => [locale, await translateText(source.title, locale)])),
    Promise.all(targets.map(async (locale) => [locale, await translateText(source.summary || source.description, locale)])),
    Promise.all(targets.map(async (locale) => [locale, await translateText(source.description || source.rawText?.slice(0,5000), locale)])),
    Promise.all(targets.map(async (locale) => [locale, await translateText(String(data.delivery || ''), locale)])),
  ]);

  const title = Object.fromEntries(titlePairs);
  const summary = Object.fromEntries(summaryPairs);
  const description = Object.fromEntries(descriptionPairs);
  const delivery = Object.fromEntries(deliveryPairs);
  const city = data.city || fallbackCity(`${source.title} ${source.district} ${source.rawText}`);
  const propertyType = fallbackPropertyType(`${source.title} ${source.description} ${source.rawText}`);

  const seoTitle = Object.fromEntries(targets.map((locale) => {
    const base = String(title[locale] || source.title || '').trim();
    const where = String(source.district || '').trim();
    return [locale, [base, where].filter(Boolean).join(' — ').slice(0, 72)];
  }));
  const seoDescription = Object.fromEntries(targets.map((locale) => [
    locale,
    String(summary[locale] || description[locale] || '').replace(/\s+/g,' ').trim().slice(0, 170),
  ]));

  const watchpoints:any[] = [];
  if (!data.price) {
    watchpoints.push({
      fr: 'Prix non détecté automatiquement : à confirmer avant publication.',
      en: 'Price was not detected automatically: confirm before publishing.',
      ru: 'Цена не определена автоматически: подтвердите перед публикацией.',
      ar: 'لم يتم اكتشاف السعر تلقائياً: يجب تأكيده قبل النشر.',
    });
  }
  if (!data.surfaceM2) {
    watchpoints.push({
      fr: 'Surface non détectée automatiquement : vérifier la brochure ou la fiche partenaire.',
      en: 'Surface area was not detected automatically: check the brochure or partner listing.',
      ru: 'Площадь не определена автоматически: проверьте буклет или карточку партнёра.',
      ar: 'لم يتم اكتشاف المساحة تلقائياً: راجع الكتيب أو صفحة الشريك.',
    });
  }

  return {
    city,
    district: data.district || '',
    propertyType,
    developer: data.developer || '',
    price: data.price ?? null,
    currency: data.currency || '',
    surfaceM2: data.surfaceM2 ?? null,
    bedrooms: data.bedrooms ?? null,
    bathrooms: data.bathrooms ?? null,
    entryCapital: null,
    delivery,
    paymentPlan: Array.isArray(data.paymentPlan) ? data.paymentPlan : [],
    highlights: [],
    title,
    summary,
    description,
    seoTitle,
    seoDescription,
    technicalNotes: [],
    strengths: [],
    watchpoints,
  };
}

export async function POST(request: NextRequest) {
  const portalUser = await verifyPortalUser(request);
  if (!portalUser) return NextResponse.json({ error: 'Accès Bosphoras actif requis.' }, { status: 401 });


  const body = await request.json().catch(() => null);
  const data = body?.data;
  if (!data || typeof data !== 'object') return NextResponse.json({ error: 'Données source manquantes.' }, { status: 400 });

  const source = {
    title: String(data.title || '').slice(0, 500),
    summary: String(data.summary || '').slice(0, 1200),
    description: String(data.description || '').slice(0, 7000),
    rawText: String(data.rawText || '').slice(0, 7000),
    price: data.price ?? null,
    currency: data.currency || '',
    surfaceM2: data.surfaceM2 ?? null,
    bedrooms: data.bedrooms ?? null,
    district: data.district || '',
    country: data.country || '',
    city: data.city || '',
    developer: data.developer || '',
    delivery: data.delivery || '',
    paymentPlan: Array.isArray(data.paymentPlan) ? data.paymentPlan : [],
    sourceUrl: data.sourceUrl || '',
  };

  const instructions = [
    'You are preparing a Bosphoras Property Desk real-estate draft from a partner source page.',
    'Return ONLY valid JSON and no markdown.',
    'Do not invent facts, amenities, yields, delivery dates, legal claims or payment terms.',
    'Rewrite rather than copy marketing prose. Keep factual data faithful to the source.',
    'Use a premium, concise, factual private-office tone, not exaggerated sales language.',
    'Create natural versions in French, English, Russian and Arabic.',
    'SEO copy must remain readable and not keyword-stuffed.',
    'SEO titles are suggestions, not source facts. Keep them concise (roughly 45-65 characters when practical), lead with the real property type/location, and include Turkey only when natural.',
    'Meta descriptions are suggestions, not source facts. Aim for a concise investor-oriented summary (roughly 135-165 characters when practical) with location, property type and the strongest verified differentiator.',
    'In French use natural search language such as immobilier Turquie, immobilier Istanbul/Bodrum/Antalya, appartement/villa à vendre only when it accurately describes the source. In English use property in Turkey / property in the city naturally. Do the equivalent in Russian and Arabic.',
    'Never add phrases such as guaranteed return, best investment, citizenship eligible, sea view, delivery date or payment plan unless the source explicitly supports them.',
    'If the city is explicitly Istanbul, Bodrum or Antalya, return the lowercase city key; otherwise return an empty string.',
    'For missing information return an empty string, null or an empty array.',
    'JSON shape exactly: {"city":"","district":"","propertyType":"","developer":"","price":null,"currency":"","surfaceM2":null,"bedrooms":null,"bathrooms":null,"entryCapital":null,"delivery":{"fr":"","en":"","ru":"","ar":""},"paymentPlan":[],"highlights":[],"title":{"fr":"","en":"","ru":"","ar":""},"summary":{"fr":"","en":"","ru":"","ar":""},"description":{"fr":"","en":"","ru":"","ar":""},"seoTitle":{"fr":"","en":"","ru":"","ar":""},"seoDescription":{"fr":"","en":"","ru":"","ar":""},"technicalNotes":[],"strengths":[],"watchpoints":[]}.',
    'technicalNotes, strengths, highlights and watchpoints must be arrays of objects with fr,en,ru,ar keys and only include points supported by the source.',
    'propertyType must be one of apartment,residence,villa,penthouse,commercial or empty.',
    'developer, price, currency, surfaceM2, bedrooms, bathrooms, delivery, entryCapital and paymentPlan must only be filled when explicitly supported by the source.',
    'paymentPlan must be an array of {label:{fr,en,ru,ar}, percentage:number|null, amount:number|null, due:{fr,en,ru,ar}}. Do not infer missing installments.',
    'If a numeric fact is present in rawText even when structured data missed it, extract it. Keep numeric fields as plain numbers without separators or currency symbols.',
    'Currency must be one of EUR, USD, TRY, GBP, CHF or empty. Convert Turkish lira symbols/TRY/TL into TRY; do not convert monetary values between currencies.',
  ].join('\n');

  let translated: any = null;
  let mode = 'ai';
  let aiError = '';

  try {
    const result = await generateText({
      model: process.env.PROPERTY_TRANSLATION_MODEL || 'openai/gpt-5.6-luna',
      system: instructions,
      prompt: JSON.stringify(source),
      maxOutputTokens: 5000,
    });

    const text = result.text?.trim();
    if (!text) throw new Error('Réponse IA vide.');
    translated = cleanJson(text);
  } catch (error) {
    mode = 'translation-fallback';
    aiError = error instanceof Error ? error.message : 'AI translation unavailable';
    try {
      translated = await buildTranslationFallback(data, source);
    } catch (fallbackError) {
      const detail = fallbackError instanceof Error ? fallbackError.message : 'Translation fallback unavailable';
      return NextResponse.json(
        {
          error: 'La traduction automatique est momentanément indisponible.',
          detail,
          aiError,
          extractedDataStillAvailable: true,
        },
        { status: 503 }
      );
    }
  }

  if (body?.importJobId) {
    await portalUser.client
      .from('property_import_jobs')
      .update({ status: 'translated', translated_data: translated, error_message: mode === 'ai' ? null : aiError.slice(0,1000) })
      .eq('id', body.importJobId);
  }

  return NextResponse.json({ ok: true, data: translated, mode, aiError: mode === 'ai' ? null : aiError.slice(0,500) }););
}
