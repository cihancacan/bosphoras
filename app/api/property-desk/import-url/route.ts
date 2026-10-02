import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { lookup } from 'node:dns/promises';
import net from 'node:net';

export const runtime = 'nodejs';
export const maxDuration = 30;

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

function isPrivateIp(ip: string) {
  if (net.isIP(ip) === 4) {
    const p = ip.split('.').map(Number);
    return (
      p[0] === 10 ||
      p[0] === 127 ||
      (p[0] === 169 && p[1] === 254) ||
      (p[0] === 172 && p[1] >= 16 && p[1] <= 31) ||
      (p[0] === 192 && p[1] === 168) ||
      (p[0] === 100 && p[1] >= 64 && p[1] <= 127) ||
      p[0] === 0
    );
  }
  if (net.isIP(ip) === 6) {
    const x = ip.toLowerCase();
    return x === '::1' || x.startsWith('fc') || x.startsWith('fd') || x.startsWith('fe80:');
  }
  return true;
}

async function safeUrl(raw: string) {
  const url = new URL(raw);
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('URL non autoris\u00e9e');
  if (url.username || url.password) throw new Error('URL avec authentification non autoris\u00e9e');
  const host = url.hostname.toLowerCase();
  if (host === 'localhost' || host.endsWith('.local')) throw new Error('H\u00f4te local non autoris\u00e9');
  if (net.isIP(host) && isPrivateIp(host)) throw new Error('Adresse priv\u00e9e non autoris\u00e9e');
  if (!net.isIP(host)) {
    const addresses = await lookup(host, { all: true });
    if (!addresses.length || addresses.some((x) => isPrivateIp(x.address))) throw new Error('H\u00f4te non autoris\u00e9');
  }
  return url;
}

function decode(value = '') {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripHtml(value = '') {
  return decode(value.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' '));
}

function meta(html: string, key: string) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const a = new RegExp(`<meta[^>]+(?:property|name)=["']${escaped}["'][^>]+content=["']([^"']+)["'][^>]*>`, 'i').exec(html);
  const b = new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${escaped}["'][^>]*>`, 'i').exec(html);
  return decode(a?.[1] || b?.[1] || '');
}

function allMeta(html: string, key: string) {
  const out: string[] = [];
  const re = /<meta\s+[^>]*>/gi;
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const tag of html.match(re) || []) {
    if (!new RegExp(`(?:property|name)=["']${escaped}["']`, 'i').test(tag)) continue;
    const m = /content=["']([^"']+)["']/i.exec(tag);
    if (m?.[1]) out.push(decode(m[1]));
  }
  return out;
}

function jsonLd(html: string) {
  const blocks: any[] = [];
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    try {
      const parsed = JSON.parse(match[1].trim());
      if (Array.isArray(parsed)) blocks.push(...parsed);
      else if (parsed?.['@graph']) blocks.push(...parsed['@graph']);
      else blocks.push(parsed);
    } catch {}
  }
  return blocks;
}

function firstNumber(...values: any[]) {
  for (const value of values) {
    const n = Number(String(value ?? '').replace(/[^0-9.,-]/g, '').replace(/,/g, '.'));
    if (Number.isFinite(n) && n > 0) return n;
  }
  return null;
}

function absolute(base: URL, value: string) {
  try { return new URL(value, base).toString(); } catch { return ''; }
}

function unique<T>(values: T[]) {
  return Array.from(new Set(values));
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
  return { client, user: auth.user, token };
}

async function copyImages(client: any, userId: string, images: string[]) {
  const copied: string[] = [];
  for (let i = 0; i < Math.min(images.length, 12); i += 1) {
    try {
      const response = await fetch(images[i], { redirect: 'follow', signal: AbortSignal.timeout(12000) });
      if (!response.ok) continue;
      const type = (response.headers.get('content-type') || '').split(';')[0];
      if (!['image/jpeg','image/png','image/webp','image/avif'].includes(type)) continue;
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (bytes.byteLength > 15 * 1024 * 1024) continue;
      const ext = type === 'image/png' ? 'png' : type === 'image/webp' ? 'webp' : type === 'image/avif' ? 'avif' : 'jpg';
      const path = `imports/${userId}/${crypto.randomUUID()}.${ext}`;
      const { error } = await client.storage.from('property-images').upload(path, bytes, { contentType: type, cacheControl: '31536000' });
      if (error) continue;
      const { data } = client.storage.from('property-images').getPublicUrl(path);
      copied.push(data.publicUrl);
    } catch {}
  }
  return copied;
}

export async function POST(request: NextRequest) {
  const admin = await verifyAdmin(request);
  if (!admin) return NextResponse.json({ error: 'Acc\u00e8s administrateur requis.' }, { status: 401 });

  const body = await request.json().catch(() => null);
  const source = String(body?.url || '').trim();
  if (!source) return NextResponse.json({ error: 'URL manquante.' }, { status: 400 });

  let url: URL;
  try { url = await safeUrl(source); }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'URL invalide.' }, { status: 400 }); }

  const response = await fetch(url, {
    redirect: 'follow',
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; BosphorasPropertyDesk/1.0; +https://www.bosphoras.com)',
      Accept: 'text/html,application/xhtml+xml',
    },
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) return NextResponse.json({ error: `La page distante r\u00e9pond ${response.status}.` }, { status: 422 });
  const html = await response.text();
  if (html.length > 6_000_000) return NextResponse.json({ error: 'Page trop volumineuse.' }, { status: 422 });

  const nodes = jsonLd(html).filter((x) => x && typeof x === 'object');
  const offer = nodes.find((x) => x['@type'] === 'Offer' || x.offers) || {};
  const item = offer.itemOffered || nodes.find((x) => ['Apartment','House','Residence','Product','RealEstateListing','Accommodation'].includes(x['@type'])) || {};
  const nestedOffer = Array.isArray(item.offers) ? item.offers[0] : item.offers || offer;
  const address = item.address || offer.address || {};

  const title =
    meta(html, 'og:title') ||
    decode(/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1] || '') ||
    String(item.name || offer.name || '');

  const description =
    meta(html, 'og:description') ||
    meta(html, 'description') ||
    stripHtml(String(item.description || offer.description || ''));

  const ogImages = allMeta(html, 'og:image');
  const ldImages = [item.image, offer.image, ...nodes.map((x) => x.image)]
    .flat(Infinity)
    .filter((x) => typeof x === 'string') as string[];
  const htmlImages = (html.match(/<img\s+[^>]*src=["'][^"']+["'][^>]*>/gi) || [])
    .map((tag) => /src=["']([^"']+)["']/i.exec(tag)?.[1] || '')
    .filter(Boolean);

  const remoteImages = unique([...ogImages, ...ldImages, ...htmlImages].map((x) => absolute(url, x)).filter((x) => /^https?:\/\//i.test(x))).slice(0, 20);
  const images = body?.copyImages === false ? remoteImages : await copyImages(admin.client, admin.user.id, remoteImages);

  const price = firstNumber(nestedOffer.price, nestedOffer.lowPrice, item.price);
  const currency = String(nestedOffer.priceCurrency || item.priceCurrency || '').toUpperCase();
  const surface = firstNumber(item.floorSize?.value, item.floorSize, item.area?.value, item.area);
  const bedrooms = firstNumber(item.numberOfBedrooms, item.numberOfRooms);
  const district = String(address.addressLocality || address.addressRegion || item.addressLocality || '');
  const country = String(address.addressCountry?.name || address.addressCountry || '');

  const extracted = {
    sourceUrl: url.toString(),
    sourceHost: url.hostname,
    title,
    summary: description.slice(0, 500),
    description: description.slice(0, 7000),
    price,
    currency: ['EUR','USD','TRY','GBP','CHF'].includes(currency) ? currency : '',
    surfaceM2: surface,
    bedrooms,
    district,
    country,
    images: images.length ? images : remoteImages,
    remoteImages,
    rawText: stripHtml(html).slice(0, 12000),
  };

  const { data: job } = await admin.client
    .from('property_import_jobs')
    .insert({
      created_by: admin.user.id,
      source_url: url.toString(),
      source_host: url.hostname,
      status: 'extracted',
      extracted_data: extracted,
    })
    .select('id')
    .single();

  return NextResponse.json({ ok: true, importJobId: job?.id || null, data: extracted });
}
