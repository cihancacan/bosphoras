// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

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

async function verifyAdmin(request: NextRequest) {
  const token = bearer(request);
  if (!token) return null;
  const client = createClient(SUPABASE_URL, PUBLISHABLE_KEY, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: auth } = await client.auth.getUser(token);
  if (!auth.user) return null;
  const { data: profile } = await client.from('profiles').select('role,status').eq('user_id', auth.user.id).maybeSingle();
  if (!profile || profile.role !== 'admin' || profile.status !== 'active') return null;
  return { client, user: auth.user };
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
  const admin = await verifyAdmin(request);
  if (!admin) return NextResponse.json({ error: 'Accès administrateur requis.' }, { status: 401 });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Traduction IA non configurée. Ajoutez OPENAI_API_KEY aux variables serveur Vercel.' },
      { status: 503 }
    );
  }

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
    'If the city is explicitly Istanbul, Bodrum or Antalya, return the lowercase city key; otherwise return an empty string.',
    'For missing information return an empty string, null or an empty array.',
    'JSON shape exactly: {"city":"","district":"","title":{"fr":"","en":"","ru":"","ar":""},"summary":{"fr":"","en":"","ru":"","ar":""},"description":{"fr":"","en":"","ru":"","ar":""},"seoTitle":{"fr":"","en":"","ru":"","ar":""},"seoDescription":{"fr":"","en":"","ru":"","ar":""},"technicalNotes":[],"strengths":[],"watchpoints":[]}.',
    'technicalNotes, strengths and watchpoints must be arrays of objects with fr,en,ru,ar keys and only include points supported by the source.',
  ].join('\n');

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.OPENAI_TRANSLATION_MODEL || 'gpt-6-luna',
      instructions,
      input: JSON.stringify(source),
      max_output_tokens: 5000,
      store: false,
    }),
    signal: AbortSignal.timeout(40000),
  });

  if (!response.ok) {
    const detail = await response.text();
    return NextResponse.json({ error: 'La traduction IA a échoué.', detail: detail.slice(0, 600) }, { status: 502 });
  }

  const raw = await response.json();
  const text = outputText(raw);
  if (!text) return NextResponse.json({ error: 'Réponse IA vide.' }, { status: 502 });

  let translated: any;
  try {
    translated = cleanJson(text);
  } catch {
    return NextResponse.json({ error: 'La réponse IA n’est pas un JSON exploitable.', detail: text.slice(0, 800) }, { status: 502 });
  }

  if (body?.importJobId) {
    await admin.client
      .from('property_import_jobs')
      .update({ status: 'translated', translated_data: translated })
      .eq('id', body.importJobId);
  }

  return NextResponse.json({ ok: true, data: translated });
}
