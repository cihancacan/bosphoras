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

  const result = await generateText({
    model: process.env.PROPERTY_TRANSLATION_MODEL || 'openai/gpt-5.6-luna',
    system: instructions,
    prompt: JSON.stringify(source),
    maxOutputTokens: 5000,
  });

  const text = result.text?.trim();
  if (!text) return NextResponse.json({ error: 'Réponse IA vide.' }, { status: 502 });

  let translated: any;
  try {
    translated = cleanJson(text);
  } catch {
    return NextResponse.json({ error: 'La réponse IA n’est pas un JSON exploitable.', detail: text.slice(0, 800) }, { status: 502 });
  }

  if (body?.importJobId) {
    await portalUser.client
      .from('property_import_jobs')
      .update({ status: 'translated', translated_data: translated })
      .eq('id', body.importJobId);
  }

  return NextResponse.json({ ok: true, data: translated });
}
