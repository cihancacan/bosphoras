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
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => {
      const code = parseInt(hex, 16);
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : '';
    })
    .replace(/&#([0-9]+);/g, (_, dec) => {
      const code = parseInt(dec, 10);
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : '';
    })
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
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
    const n = parseLocaleNumber(String(value ?? ''));
    if (n && n > 0) return n;
  }
  return null;
}

function absolute(base: URL, value: string) {
  try { return new URL(value, base).toString(); } catch { return ''; }
}

function unique<T>(values: T[]) {
  return Array.from(new Set(values));
}

function parseLocaleNumber(value: string) {
  const clean = value.replace(/[\s\u00a0]/g, '').replace(/[^0-9.,]/g, '');
  if (!clean) return null;

  const commas = (clean.match(/,/g) || []).length;
  const dots = (clean.match(/\./g) || []).length;
  let normalized = clean;

  if (commas > 0 && dots > 0) {
    const decimalSeparator = clean.lastIndexOf(',') > clean.lastIndexOf('.') ? ',' : '.';
    const thousandsSeparator = decimalSeparator === ',' ? '.' : ',';
    normalized = clean.split(thousandsSeparator).join('');
    if (decimalSeparator === ',') normalized = normalized.replace(',', '.');
  } else if (commas > 1) {
    normalized = clean.replace(/,/g, '');
  } else if (dots > 1) {
    normalized = clean.replace(/\./g, '');
  } else if (commas === 1) {
    const parts = clean.split(',');
    normalized = parts[1].length === 3 && parts[0].length <= 3 ? parts.join('') : parts[0] + '.' + parts[1];
  } else if (dots === 1) {
    const parts = clean.split('.');
    normalized = parts[1].length === 3 && parts[0].length <= 3 ? parts.join('') : clean;
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function normalizeCurrencyToken(token: string) {
  const upper = token.trim().toUpperCase();
  if (upper === 'function heuristicPrice(text: string, currencyHint = '') {
  const patterns = [
    /(?:starting\s+price|price\s+from|price|prix|fiyat|satış\s+fiyatı|satis\s+fiyati)\s*(?:\([^)]*\))?\s*[:\-]?\s*(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)?\s*([0-9][0-9\s.,]{3,})/i,
    /(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)\s*([0-9][0-9\s.,]{3,})/i,
    /([0-9][0-9\s.,]{3,})\s*(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)/i,
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(text);
    if (!match?.[1]) continue;
    const parsed = parseLocaleNumber(match[1]);
    if (parsed && parsed >= 1000) return parsed;
  }
  return null;
}

function heuristicSurface(text: string) {
  const range = /(?:surface|size|alan|brüt|brut|net)?\s*[:\-]?\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:-|–|to)\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:m²|m2|sqm|sq\.?\s*m)/i.exec(text);
  if (range?.[1]) return parseLocaleNumber(range[1]);
  const one = /(?:surface|size|alan|brüt|brut|net)?\s*[:\-]?\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:m²|m2|sqm|sq\.?\s*m)/i.exec(text);
  return one?.[1] ? parseLocaleNumber(one[1]) : null;
}

function heuristicBedrooms(text: string) {
  const match = /(?:bedrooms?|chambres?|yatak\s*odası|yatak\s*odasi)\s*[:\-]?\s*([0-9]{1,2})(?!\s*[,\/-]\s*[0-9])/i.exec(text);
  if (match?.[1]) return Number(match[1]);
  const layout = /\b([1-9])\s*\+\s*1\b/.exec(text);
  return layout?.[1] ? Number(layout[1]) : null;
}

function heuristicDistrict(text: string) {
  const patterns = [
    /Projenin\s+Yeri\s*[:\-]?\s*(?:İstanbul|Istanbul)\s*\/\s*([^|·,]{2,60})/i,
    /(?:district|quartier|ilçe|ilce|location)\s*[:\-]?\s*([^|·,]{2,60})/i,
    /(?:İstanbul|Istanbul)\s*[\/·,-]\s*([A-ZÇĞİÖŞÜa-zçğıöşü][^|·,]{1,45})/,
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(text);
    const value = decode(match?.[1] || '').replace(/\s{2,}/g, ' ').trim();
    if (value && value.length <= 60) return value;
  }
  return '';
}

function locationFromText(text: string) {
  const lower = text.toLocaleLowerCase('tr-TR');
  const candidates = [
    { city: 'istanbul', cityName: 'Istanbul', countryCode: 'TR', countryName: 'Turkey', terms: ['istanbul','i̇stanbul'] },
    { city: 'bodrum', cityName: 'Bodrum', countryCode: 'TR', countryName: 'Turkey', terms: ['bodrum'] },
    { city: 'antalya', cityName: 'Antalya', countryCode: 'TR', countryName: 'Turkey', terms: ['antalya'] },
    { city: 'dubai', cityName: 'Dubai', countryCode: 'AE', countryName: 'United Arab Emirates', terms: ['dubai','دبي'] },
    { city: 'batumi', cityName: 'Batumi', countryCode: 'GE', countryName: 'Georgia', terms: ['batumi','ბათუმი'] },
    { city: 'almaty', cityName: 'Almaty', countryCode: 'KZ', countryName: 'Kazakhstan', terms: ['almaty','алматы'] },
    { city: 'paris', cityName: 'Paris', countryCode: 'FR', countryName: 'France', terms: ['paris'] },
    { city: 'miami', cityName: 'Miami', countryCode: 'US', countryName: 'United States', terms: ['miami'] },
    { city: 'new-york', cityName: 'New York', countryCode: 'US', countryName: 'United States', terms: ['new york','nyc'] },
    { city: 'los-angeles', cityName: 'Los Angeles', countryCode: 'US', countryName: 'United States', terms: ['los angeles'] },
  ];
  for (const item of candidates) {
    if (item.terms.some((term) => lower.includes(term))) return item;
  }
  return { city: '', cityName: '', countryCode: '', countryName: '' };
}

function heuristicDelivery(text: string) {
  const patterns = [
    /(?:handover|delivery|livraison|teslim(?:at)?(?:\s+tarihi)?)\s*[:\-]?\s*((?:Q[1-4]\s*)?20[2-4][0-9])/i,
    /((?:Q[1-4]\s*)?20[2-4][0-9])\s*(?:handover|delivery|livraison|teslim)/i,
  ];
  for (const pattern of patterns) {
    const value = decode(pattern.exec(text)?.[1] || '');
    if (value) return value;
  }
  return '';
}

function heuristicDeveloper(text: string) {
  const patterns = [
    /(?:developed\s+by|developer(?:\s+behind)?|promoteur|geliştirici|gelistirici)\s*[:\-]?\s*([A-Z0-9][A-Za-z0-9&.'’\-\s]{2,80})/i,
    /(?:güvencesi\s+ve|guvencesi\s+ve)\s*([A-ZÇĞİÖŞÜ0-9][A-Za-zÇĞİÖŞÜçğıöşü0-9&.'’\-\s]{2,60})/i,
  ];
  for (const pattern of patterns) {
    const value = decode(pattern.exec(text)?.[1] || '').split(/\s{2,}|\.|,|\||FAQ|About|Contact|Reference|Visite\s+guidée?|Guided\s+visit|See\s+properties/i)[0].trim();
    if (value && value.length <= 80) return value;
  }
  return '';
}

function heuristicPaymentPlan(text: string) {
  const candidates: Array<{label:string;percentage:number;due:string}> = [];
  const patterns = [
    [/booking|reservation|réservation|rezervasyon/i, 'Reservation', 'At booking'],
    [/during\s+construction|construction|pendant\s+construction|inşaat|insaat/i, 'During construction', 'During construction'],
    [/handover|delivery|livraison|teslim/i, 'Handover', 'At handover'],
    [/post[-\s]?handover|after\s+handover|après\s+livraison|teslim\s+sonrası|teslim\s+sonrasi/i, 'Post-handover', 'After handover'],
  ] as const;

  const snippets = text.match(/.{0,90}\b[0-9]{1,3}\s*%.{0,90}/gi) || [];
  for (const snippet of snippets.slice(0, 20)) {
    const pctMatch = /([0-9]{1,3})\s*%/.exec(snippet);
    if (!pctMatch) continue;
    const percentage = Number(pctMatch[1]);
    if (percentage <= 0 || percentage > 100) continue;
    for (const [pattern, label, due] of patterns) {
      if (!pattern.test(snippet)) continue;
      if (!candidates.some((item) => item.label === label && item.percentage === percentage)) {
        candidates.push({ label, percentage, due });
      }
      break;
    }
  }

  const total = candidates.reduce((sum, item) => sum + item.percentage, 0);
  if (!candidates.length || total > 120) return [];
  return candidates.slice(0, 6).map((item) => ({
    label: { fr: item.label, en: item.label, ru: item.label, ar: item.label },
    percentage: item.percentage,
    amount: null,
    due: { fr: item.due, en: item.due, ru: item.due, ar: item.due },
  }));
}

function extractImageUrls(html: string, base: URL) {
  const raw: string[] = [];
  const tags = html.match(/<(?:img|source)\s+[^>]*>/gi) || [];
  for (const tag of tags) {
    for (const attr of ['src','data-src','data-lazy-src','data-original']) {
      const match = new RegExp(`${attr}=["']([^"']+)["']`, 'i').exec(tag);
      if (match?.[1]) raw.push(match[1]);
    }
    const srcset = /(?:srcset|data-srcset)=["']([^"']+)["']/i.exec(tag)?.[1] || '';
    for (const item of srcset.split(',')) {
      const candidate = item.trim().split(/\s+/)[0];
      if (candidate) raw.push(candidate);
    }
  }

  return unique(raw.map((value) => {
    const absoluteUrl = absolute(base, decode(value));
    try {
      const parsed = new URL(absoluteUrl);
      if (parsed.pathname.includes('/_next/image') && parsed.searchParams.get('url')) {
        return absolute(base, decode(parsed.searchParams.get('url') || ''));
      }
      return parsed.toString();
    } catch {
      return '';
    }
  }).filter((value) => /^https?:\/\//i.test(value)));
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
  return { client, user: auth.user, token, role: profile.role };
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
      const path = `submissions/${userId}/imports/${crypto.randomUUID()}.${ext}`;
      const { error } = await client.storage.from('property-images').upload(path, bytes, { contentType: type, cacheControl: '31536000' });
      if (error) continue;
      const { data } = client.storage.from('property-images').getPublicUrl(path);
      copied.push(data.publicUrl);
    } catch {}
  }
  return copied;
}

export async function POST(request: NextRequest) {
  const portalUser = await verifyPortalUser(request);
  if (!portalUser) return NextResponse.json({ error: 'Acc\u00e8s Bosphoras actif requis.' }, { status: 401 });

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
  const htmlImages = extractImageUrls(html, url);

  const remoteImages = unique([...ogImages, ...ldImages].map((x) => absolute(url, x)).filter((x) => /^https?:\/\//i.test(x)).concat(htmlImages))
    .filter((imageUrl) => !/facebook\.com\/tr\?|logo|favicon|icon\.(?:png|svg|ico)(?:\?|$)/i.test(imageUrl))
    .slice(0, 28);
  const images = body?.copyImages === false ? remoteImages : await copyImages(portalUser.client, portalUser.user.id, remoteImages);

  const rawText = stripHtml(html).slice(0, 24000);
  const pricePair = priceAndCurrencyFromText(rawText);
  const structuredCurrency = String(nestedOffer.priceCurrency || item.priceCurrency || '').toUpperCase();
  const detectedCurrency = ['EUR','USD','TRY','GBP','CHF','AED','KZT','GEL'].includes(structuredCurrency)
    ? structuredCurrency
    : pricePair.currency || currencyFromText(rawText);
  const structuredPrice = firstNumber(nestedOffer.price, nestedOffer.lowPrice, item.price);
  const price = structuredPrice || pricePair.price || heuristicPrice(rawText, detectedCurrency);
  const surface = firstNumber(item.floorSize?.value, item.floorSize, item.area?.value, item.area) || heuristicSurface(rawText);
  const bedrooms = firstNumber(item.numberOfBedrooms, item.numberOfRooms) || heuristicBedrooms(rawText);
  const structuredLocality = decode(String(address.addressLocality || item.addressLocality || ''));
  const structuredRegion = decode(String(address.addressRegion || ''));
  const detectedLocation = locationFromText(`${title} ${structuredLocality} ${structuredRegion} ${rawText.slice(0, 7000)}`);
  const cityName = structuredLocality || detectedLocation.cityName;
  const city = detectedLocation.city || cityName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const district = structuredRegion || heuristicDistrict(rawText);
  const structuredCountry = decode(String(address.addressCountry?.name || address.addressCountry || ''));
  const countryName = structuredCountry || detectedLocation.countryName;
  const countryCode = detectedLocation.countryCode || '';
  const delivery = heuristicDelivery(rawText);
  const developer = heuristicDeveloper(rawText);
  const paymentPlan = heuristicPaymentPlan(rawText);

  const extracted = {
    sourceUrl: url.toString(),
    sourceHost: url.hostname,
    title: decode(title),
    summary: decode(description).slice(0, 700),
    description: decode(description).slice(0, 9000),
    price,
    currency: detectedCurrency,
    surfaceM2: surface,
    bedrooms,
    district,
    city,
    cityName,
    countryName,
    countryCode,
    delivery,
    developer,
    paymentPlan,
    images: images.length ? images : remoteImages,
    remoteImages,
    rawText,
  };

  const { data: job } = await portalUser.client
    .from('property_import_jobs')
    .insert({
      created_by: portalUser.user.id,
      source_url: url.toString(),
      source_host: url.hostname,
      status: 'extracted',
      extracted_data: extracted,
    })
    .select('id')
    .single();

  return NextResponse.json({ ok: true, importJobId: job?.id || null, data: extracted });
}
 || upper === 'USD' || upper.includes('US DOLLAR')) return 'USD';
  if (upper === '€' || upper === 'EUR' || upper.includes('EURO')) return 'EUR';
  if (upper === '£' || upper === 'GBP' || upper.includes('POUND')) return 'GBP';
  if (upper === '₺' || upper === 'TRY' || upper === 'TL') return 'TRY';
  if (upper === 'AED' || upper.includes('DIRHAM')) return 'AED';
  if (upper === 'CHF') return 'CHF';
  if (upper === 'KZT' || upper === '₸') return 'KZT';
  if (upper === 'GEL' || upper === '₾') return 'GEL';
  return '';
}

function priceAndCurrencyFromText(text: string) {
  const prefix = /(?:price|prix|fiyat|from|à\s+partir\s+de|starting\s+(?:at|from))?\s*(USD|EUR|AED|TRY|TL|GBP|CHF|KZT|GEL|\$|€|£|₺|₸|₾)\s*([0-9][0-9\s\u00a0.,]{2,})/i.exec(text);
  if (prefix) {
    const currency = normalizeCurrencyToken(prefix[1]);
    const price = parseLocaleNumber(prefix[2]);
    if (currency && price && price >= 1000) return { price, currency };
  }

  const suffix = /(?:price|prix|fiyat|from|à\s+partir\s+de|starting\s+(?:at|from))?\s*([0-9][0-9\s\u00a0.,]{2,})\s*(USD|EUR|AED|TRY|TL|GBP|CHF|KZT|GEL|\$|€|£|₺|₸|₾)/i.exec(text);
  if (suffix) {
    const price = parseLocaleNumber(suffix[1]);
    const currency = normalizeCurrencyToken(suffix[2]);
    if (currency && price && price >= 1000) return { price, currency };
  }

  return { price: null as number | null, currency: '' };
}

function currencyFromText(text: string) {
  const upper = text.toUpperCase();
  if (/\bAED\b|DIRHAM/.test(upper)) return 'AED';
  if (/\bUSD\b|US\s*DOLLAR|\$/.test(upper)) return 'USD';
  if (/\bEUR\b|EURO|€/.test(upper)) return 'EUR';
  if (/\bTRY\b|\bTL\b|TÜRK LİRASI|TURK LIRASI|₺/.test(upper)) return 'TRY';
  if (/\bGBP\b|POUND|£/.test(upper)) return 'GBP';
  if (/\bCHF\b|SWISS FRANC/.test(upper)) return 'CHF';
  if (/\bKZT\b|TENGE|₸/.test(upper)) return 'KZT';
  if (/\bGEL\b|LARI|₾/.test(upper)) return 'GEL';
  return '';
}

function heuristicPrice(text: string, currencyHint = '') {
  const patterns = [
    /(?:starting\s+price|price\s+from|price|prix|fiyat|satış\s+fiyatı|satis\s+fiyati)\s*(?:\([^)]*\))?\s*[:\-]?\s*(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)?\s*([0-9][0-9\s.,]{3,})/i,
    /(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)\s*([0-9][0-9\s.,]{3,})/i,
    /([0-9][0-9\s.,]{3,})\s*(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)/i,
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(text);
    if (!match?.[1]) continue;
    const parsed = parseLocaleNumber(match[1]);
    if (parsed && parsed >= 1000) return parsed;
  }
  return null;
}

function heuristicSurface(text: string) {
  const range = /(?:surface|size|alan|brüt|brut|net)?\s*[:\-]?\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:-|–|to)\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:m²|m2|sqm|sq\.?\s*m)/i.exec(text);
  if (range?.[1]) return parseLocaleNumber(range[1]);
  const one = /(?:surface|size|alan|brüt|brut|net)?\s*[:\-]?\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:m²|m2|sqm|sq\.?\s*m)/i.exec(text);
  return one?.[1] ? parseLocaleNumber(one[1]) : null;
}

function heuristicBedrooms(text: string) {
  const match = /(?:bedrooms?|chambres?|yatak\s*odası|yatak\s*odasi)\s*[:\-]?\s*([0-9]{1,2})(?!\s*[,\/-]\s*[0-9])/i.exec(text);
  if (match?.[1]) return Number(match[1]);
  const layout = /\b([1-9])\s*\+\s*1\b/.exec(text);
  return layout?.[1] ? Number(layout[1]) : null;
}

function heuristicDistrict(text: string) {
  const patterns = [
    /Projenin\s+Yeri\s*[:\-]?\s*(?:İstanbul|Istanbul)\s*\/\s*([^|·,]{2,60})/i,
    /(?:district|quartier|ilçe|ilce|location)\s*[:\-]?\s*([^|·,]{2,60})/i,
    /(?:İstanbul|Istanbul)\s*[\/·,-]\s*([A-ZÇĞİÖŞÜa-zçğıöşü][^|·,]{1,45})/,
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(text);
    const value = decode(match?.[1] || '').replace(/\s{2,}/g, ' ').trim();
    if (value && value.length <= 60) return value;
  }
  return '';
}

function locationFromText(text: string) {
  const lower = text.toLocaleLowerCase('tr-TR');
  const candidates = [
    { city: 'istanbul', cityName: 'Istanbul', countryCode: 'TR', countryName: 'Turkey', terms: ['istanbul','i̇stanbul'] },
    { city: 'bodrum', cityName: 'Bodrum', countryCode: 'TR', countryName: 'Turkey', terms: ['bodrum'] },
    { city: 'antalya', cityName: 'Antalya', countryCode: 'TR', countryName: 'Turkey', terms: ['antalya'] },
    { city: 'dubai', cityName: 'Dubai', countryCode: 'AE', countryName: 'United Arab Emirates', terms: ['dubai','دبي'] },
    { city: 'batumi', cityName: 'Batumi', countryCode: 'GE', countryName: 'Georgia', terms: ['batumi','ბათუმი'] },
    { city: 'almaty', cityName: 'Almaty', countryCode: 'KZ', countryName: 'Kazakhstan', terms: ['almaty','алматы'] },
    { city: 'paris', cityName: 'Paris', countryCode: 'FR', countryName: 'France', terms: ['paris'] },
    { city: 'miami', cityName: 'Miami', countryCode: 'US', countryName: 'United States', terms: ['miami'] },
    { city: 'new-york', cityName: 'New York', countryCode: 'US', countryName: 'United States', terms: ['new york','nyc'] },
    { city: 'los-angeles', cityName: 'Los Angeles', countryCode: 'US', countryName: 'United States', terms: ['los angeles'] },
  ];
  for (const item of candidates) {
    if (item.terms.some((term) => lower.includes(term))) return item;
  }
  return { city: '', cityName: '', countryCode: '', countryName: '' };
}

function heuristicDelivery(text: string) {
  const patterns = [
    /(?:handover|delivery|livraison|teslim(?:at)?(?:\s+tarihi)?)\s*[:\-]?\s*((?:Q[1-4]\s*)?20[2-4][0-9])/i,
    /((?:Q[1-4]\s*)?20[2-4][0-9])\s*(?:handover|delivery|livraison|teslim)/i,
  ];
  for (const pattern of patterns) {
    const value = decode(pattern.exec(text)?.[1] || '');
    if (value) return value;
  }
  return '';
}

function heuristicDeveloper(text: string) {
  const patterns = [
    /(?:developed\s+by|developer(?:\s+behind)?|promoteur|geliştirici|gelistirici)\s*[:\-]?\s*([A-Z0-9][A-Za-z0-9&.'’\-\s]{2,80})/i,
    /(?:güvencesi\s+ve|guvencesi\s+ve)\s*([A-ZÇĞİÖŞÜ0-9][A-Za-zÇĞİÖŞÜçğıöşü0-9&.'’\-\s]{2,60})/i,
  ];
  for (const pattern of patterns) {
    const value = decode(pattern.exec(text)?.[1] || '').split(/\s{2,}|\.|,|\||FAQ|About/i)[0].trim();
    if (value && value.length <= 80) return value;
  }
  return '';
}

function heuristicPaymentPlan(text: string) {
  const candidates: Array<{label:string;percentage:number;due:string}> = [];
  const patterns = [
    [/booking|reservation|réservation|rezervasyon/i, 'Reservation', 'At booking'],
    [/during\s+construction|construction|pendant\s+construction|inşaat|insaat/i, 'During construction', 'During construction'],
    [/handover|delivery|livraison|teslim/i, 'Handover', 'At handover'],
    [/post[-\s]?handover|after\s+handover|après\s+livraison|teslim\s+sonrası|teslim\s+sonrasi/i, 'Post-handover', 'After handover'],
  ] as const;

  const snippets = text.match(/.{0,90}\b[0-9]{1,3}\s*%.{0,90}/gi) || [];
  for (const snippet of snippets.slice(0, 20)) {
    const pctMatch = /([0-9]{1,3})\s*%/.exec(snippet);
    if (!pctMatch) continue;
    const percentage = Number(pctMatch[1]);
    if (percentage <= 0 || percentage > 100) continue;
    for (const [pattern, label, due] of patterns) {
      if (!pattern.test(snippet)) continue;
      if (!candidates.some((item) => item.label === label && item.percentage === percentage)) {
        candidates.push({ label, percentage, due });
      }
      break;
    }
  }

  const total = candidates.reduce((sum, item) => sum + item.percentage, 0);
  if (!candidates.length || total > 120) return [];
  return candidates.slice(0, 6).map((item) => ({
    label: { fr: item.label, en: item.label, ru: item.label, ar: item.label },
    percentage: item.percentage,
    amount: null,
    due: { fr: item.due, en: item.due, ru: item.due, ar: item.due },
  }));
}

function extractImageUrls(html: string, base: URL) {
  const raw: string[] = [];
  const tags = html.match(/<(?:img|source)\s+[^>]*>/gi) || [];
  for (const tag of tags) {
    for (const attr of ['src','data-src','data-lazy-src','data-original']) {
      const match = new RegExp(`${attr}=["']([^"']+)["']`, 'i').exec(tag);
      if (match?.[1]) raw.push(match[1]);
    }
    const srcset = /(?:srcset|data-srcset)=["']([^"']+)["']/i.exec(tag)?.[1] || '';
    for (const item of srcset.split(',')) {
      const candidate = item.trim().split(/\s+/)[0];
      if (candidate) raw.push(candidate);
    }
  }

  return unique(raw.map((value) => {
    const absoluteUrl = absolute(base, decode(value));
    try {
      const parsed = new URL(absoluteUrl);
      if (parsed.pathname.includes('/_next/image') && parsed.searchParams.get('url')) {
        return absolute(base, decode(parsed.searchParams.get('url') || ''));
      }
      return parsed.toString();
    } catch {
      return '';
    }
  }).filter((value) => /^https?:\/\//i.test(value)));
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
  return { client, user: auth.user, token, role: profile.role };
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
      const path = `submissions/${userId}/imports/${crypto.randomUUID()}.${ext}`;
      const { error } = await client.storage.from('property-images').upload(path, bytes, { contentType: type, cacheControl: '31536000' });
      if (error) continue;
      const { data } = client.storage.from('property-images').getPublicUrl(path);
      copied.push(data.publicUrl);
    } catch {}
  }
  return copied;
}

export async function POST(request: NextRequest) {
  const portalUser = await verifyPortalUser(request);
  if (!portalUser) return NextResponse.json({ error: 'Acc\u00e8s Bosphoras actif requis.' }, { status: 401 });

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
  const htmlImages = extractImageUrls(html, url);

  const remoteImages = unique([...ogImages, ...ldImages].map((x) => absolute(url, x)).filter((x) => /^https?:\/\//i.test(x)).concat(htmlImages))
    .filter((imageUrl) => !/facebook\.com\/tr\?|logo|favicon|icon\.(?:png|svg|ico)(?:\?|$)/i.test(imageUrl))
    .slice(0, 28);
  const images = body?.copyImages === false ? remoteImages : await copyImages(portalUser.client, portalUser.user.id, remoteImages);

  const rawText = stripHtml(html).slice(0, 24000);
  const structuredCurrency = String(nestedOffer.priceCurrency || item.priceCurrency || '').toUpperCase();
  const detectedCurrency = ['EUR','USD','TRY','GBP','CHF','AED','KZT','GEL'].includes(structuredCurrency)
    ? structuredCurrency
    : currencyFromText(rawText);
  const structuredPrice = firstNumber(nestedOffer.price, nestedOffer.lowPrice, item.price);
  const price = structuredPrice || heuristicPrice(rawText, detectedCurrency);
  const surface = firstNumber(item.floorSize?.value, item.floorSize, item.area?.value, item.area) || heuristicSurface(rawText);
  const bedrooms = firstNumber(item.numberOfBedrooms, item.numberOfRooms) || heuristicBedrooms(rawText);
  const structuredLocality = decode(String(address.addressLocality || item.addressLocality || ''));
  const structuredRegion = decode(String(address.addressRegion || ''));
  const detectedLocation = locationFromText(`${title} ${structuredLocality} ${structuredRegion} ${rawText.slice(0, 7000)}`);
  const cityName = structuredLocality || detectedLocation.cityName;
  const city = detectedLocation.city || cityName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const district = structuredRegion || heuristicDistrict(rawText);
  const structuredCountry = decode(String(address.addressCountry?.name || address.addressCountry || ''));
  const countryName = structuredCountry || detectedLocation.countryName;
  const countryCode = detectedLocation.countryCode || '';
  const delivery = heuristicDelivery(rawText);
  const developer = heuristicDeveloper(rawText);
  const paymentPlan = heuristicPaymentPlan(rawText);

  const extracted = {
    sourceUrl: url.toString(),
    sourceHost: url.hostname,
    title: decode(title),
    summary: decode(description).slice(0, 700),
    description: decode(description).slice(0, 9000),
    price,
    currency: detectedCurrency,
    surfaceM2: surface,
    bedrooms,
    district,
    city,
    cityName,
    countryName,
    countryCode,
    delivery,
    developer,
    paymentPlan,
    images: images.length ? images : remoteImages,
    remoteImages,
    rawText,
  };

  const { data: job } = await portalUser.client
    .from('property_import_jobs')
    .insert({
      created_by: portalUser.user.id,
      source_url: url.toString(),
      source_host: url.hostname,
      status: 'extracted',
      extracted_data: extracted,
    })
    .select('id')
    .single();

  return NextResponse.json({ ok: true, importJobId: job?.id || null, data: extracted });
}
 || upper === 'USD') return 'USD';
  if (upper === '€' || upper === 'EUR') return 'EUR';
  if (upper === '£' || upper === 'GBP') return 'GBP';
  if (upper === '₺' || upper === 'TRY' || upper === 'TL') return 'TRY';
  if (upper === 'AED') return 'AED';
  if (upper === 'CHF') return 'CHF';
  if (upper === 'KZT' || upper === '₸') return 'KZT';
  if (upper === 'GEL' || upper === '₾') return 'GEL';
  return '';
}

function heuristicPrice(text: string, currencyHint = '') {
  const patterns = [
    /(?:starting\s+price|price\s+from|price|prix|fiyat|satış\s+fiyatı|satis\s+fiyati)\s*(?:\([^)]*\))?\s*[:\-]?\s*(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)?\s*([0-9][0-9\s.,]{3,})/i,
    /(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)\s*([0-9][0-9\s.,]{3,})/i,
    /([0-9][0-9\s.,]{3,})\s*(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)/i,
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(text);
    if (!match?.[1]) continue;
    const parsed = parseLocaleNumber(match[1]);
    if (parsed && parsed >= 1000) return parsed;
  }
  return null;
}

function heuristicSurface(text: string) {
  const range = /(?:surface|size|alan|brüt|brut|net)?\s*[:\-]?\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:-|–|to)\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:m²|m2|sqm|sq\.?\s*m)/i.exec(text);
  if (range?.[1]) return parseLocaleNumber(range[1]);
  const one = /(?:surface|size|alan|brüt|brut|net)?\s*[:\-]?\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:m²|m2|sqm|sq\.?\s*m)/i.exec(text);
  return one?.[1] ? parseLocaleNumber(one[1]) : null;
}

function heuristicBedrooms(text: string) {
  const match = /(?:bedrooms?|chambres?|yatak\s*odası|yatak\s*odasi)\s*[:\-]?\s*([0-9]{1,2})(?!\s*[,\/-]\s*[0-9])/i.exec(text);
  if (match?.[1]) return Number(match[1]);
  const layout = /\b([1-9])\s*\+\s*1\b/.exec(text);
  return layout?.[1] ? Number(layout[1]) : null;
}

function heuristicDistrict(text: string) {
  const patterns = [
    /Projenin\s+Yeri\s*[:\-]?\s*(?:İstanbul|Istanbul)\s*\/\s*([^|·,]{2,60})/i,
    /(?:district|quartier|ilçe|ilce|location)\s*[:\-]?\s*([^|·,]{2,60})/i,
    /(?:İstanbul|Istanbul)\s*[\/·,-]\s*([A-ZÇĞİÖŞÜa-zçğıöşü][^|·,]{1,45})/,
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(text);
    const value = decode(match?.[1] || '').replace(/\s{2,}/g, ' ').trim();
    if (value && value.length <= 60) return value;
  }
  return '';
}

function locationFromText(text: string) {
  const lower = text.toLocaleLowerCase('tr-TR');
  const candidates = [
    { city: 'istanbul', cityName: 'Istanbul', countryCode: 'TR', countryName: 'Turkey', terms: ['istanbul','i̇stanbul'] },
    { city: 'bodrum', cityName: 'Bodrum', countryCode: 'TR', countryName: 'Turkey', terms: ['bodrum'] },
    { city: 'antalya', cityName: 'Antalya', countryCode: 'TR', countryName: 'Turkey', terms: ['antalya'] },
    { city: 'dubai', cityName: 'Dubai', countryCode: 'AE', countryName: 'United Arab Emirates', terms: ['dubai','دبي'] },
    { city: 'batumi', cityName: 'Batumi', countryCode: 'GE', countryName: 'Georgia', terms: ['batumi','ბათუმი'] },
    { city: 'almaty', cityName: 'Almaty', countryCode: 'KZ', countryName: 'Kazakhstan', terms: ['almaty','алматы'] },
    { city: 'paris', cityName: 'Paris', countryCode: 'FR', countryName: 'France', terms: ['paris'] },
    { city: 'miami', cityName: 'Miami', countryCode: 'US', countryName: 'United States', terms: ['miami'] },
    { city: 'new-york', cityName: 'New York', countryCode: 'US', countryName: 'United States', terms: ['new york','nyc'] },
    { city: 'los-angeles', cityName: 'Los Angeles', countryCode: 'US', countryName: 'United States', terms: ['los angeles'] },
  ];
  for (const item of candidates) {
    if (item.terms.some((term) => lower.includes(term))) return item;
  }
  return { city: '', cityName: '', countryCode: '', countryName: '' };
}

function heuristicDelivery(text: string) {
  const patterns = [
    /(?:handover|delivery|livraison|teslim(?:at)?(?:\s+tarihi)?)\s*[:\-]?\s*((?:Q[1-4]\s*)?20[2-4][0-9])/i,
    /((?:Q[1-4]\s*)?20[2-4][0-9])\s*(?:handover|delivery|livraison|teslim)/i,
  ];
  for (const pattern of patterns) {
    const value = decode(pattern.exec(text)?.[1] || '');
    if (value) return value;
  }
  return '';
}

function heuristicDeveloper(text: string) {
  const patterns = [
    /(?:developed\s+by|developer(?:\s+behind)?|promoteur|geliştirici|gelistirici)\s*[:\-]?\s*([A-Z0-9][A-Za-z0-9&.'’\-\s]{2,80})/i,
    /(?:güvencesi\s+ve|guvencesi\s+ve)\s*([A-ZÇĞİÖŞÜ0-9][A-Za-zÇĞİÖŞÜçğıöşü0-9&.'’\-\s]{2,60})/i,
  ];
  for (const pattern of patterns) {
    const value = decode(pattern.exec(text)?.[1] || '').split(/\s{2,}|\.|,|\||FAQ|About|Contact|Reference|Visite\s+guidée?|Guided\s+visit|See\s+properties/i)[0].trim();
    if (value && value.length <= 80) return value;
  }
  return '';
}

function heuristicPaymentPlan(text: string) {
  const candidates: Array<{label:string;percentage:number;due:string}> = [];
  const patterns = [
    [/booking|reservation|réservation|rezervasyon/i, 'Reservation', 'At booking'],
    [/during\s+construction|construction|pendant\s+construction|inşaat|insaat/i, 'During construction', 'During construction'],
    [/handover|delivery|livraison|teslim/i, 'Handover', 'At handover'],
    [/post[-\s]?handover|after\s+handover|après\s+livraison|teslim\s+sonrası|teslim\s+sonrasi/i, 'Post-handover', 'After handover'],
  ] as const;

  const snippets = text.match(/.{0,90}\b[0-9]{1,3}\s*%.{0,90}/gi) || [];
  for (const snippet of snippets.slice(0, 20)) {
    const pctMatch = /([0-9]{1,3})\s*%/.exec(snippet);
    if (!pctMatch) continue;
    const percentage = Number(pctMatch[1]);
    if (percentage <= 0 || percentage > 100) continue;
    for (const [pattern, label, due] of patterns) {
      if (!pattern.test(snippet)) continue;
      if (!candidates.some((item) => item.label === label && item.percentage === percentage)) {
        candidates.push({ label, percentage, due });
      }
      break;
    }
  }

  const total = candidates.reduce((sum, item) => sum + item.percentage, 0);
  if (!candidates.length || total > 120) return [];
  return candidates.slice(0, 6).map((item) => ({
    label: { fr: item.label, en: item.label, ru: item.label, ar: item.label },
    percentage: item.percentage,
    amount: null,
    due: { fr: item.due, en: item.due, ru: item.due, ar: item.due },
  }));
}

function extractImageUrls(html: string, base: URL) {
  const raw: string[] = [];
  const tags = html.match(/<(?:img|source)\s+[^>]*>/gi) || [];
  for (const tag of tags) {
    for (const attr of ['src','data-src','data-lazy-src','data-original']) {
      const match = new RegExp(`${attr}=["']([^"']+)["']`, 'i').exec(tag);
      if (match?.[1]) raw.push(match[1]);
    }
    const srcset = /(?:srcset|data-srcset)=["']([^"']+)["']/i.exec(tag)?.[1] || '';
    for (const item of srcset.split(',')) {
      const candidate = item.trim().split(/\s+/)[0];
      if (candidate) raw.push(candidate);
    }
  }

  return unique(raw.map((value) => {
    const absoluteUrl = absolute(base, decode(value));
    try {
      const parsed = new URL(absoluteUrl);
      if (parsed.pathname.includes('/_next/image') && parsed.searchParams.get('url')) {
        return absolute(base, decode(parsed.searchParams.get('url') || ''));
      }
      return parsed.toString();
    } catch {
      return '';
    }
  }).filter((value) => /^https?:\/\//i.test(value)));
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
  return { client, user: auth.user, token, role: profile.role };
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
      const path = `submissions/${userId}/imports/${crypto.randomUUID()}.${ext}`;
      const { error } = await client.storage.from('property-images').upload(path, bytes, { contentType: type, cacheControl: '31536000' });
      if (error) continue;
      const { data } = client.storage.from('property-images').getPublicUrl(path);
      copied.push(data.publicUrl);
    } catch {}
  }
  return copied;
}

export async function POST(request: NextRequest) {
  const portalUser = await verifyPortalUser(request);
  if (!portalUser) return NextResponse.json({ error: 'Acc\u00e8s Bosphoras actif requis.' }, { status: 401 });

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
  const htmlImages = extractImageUrls(html, url);

  const remoteImages = unique([...ogImages, ...ldImages].map((x) => absolute(url, x)).filter((x) => /^https?:\/\//i.test(x)).concat(htmlImages))
    .filter((imageUrl) => !/facebook\.com\/tr\?|logo|favicon|icon\.(?:png|svg|ico)(?:\?|$)/i.test(imageUrl))
    .slice(0, 28);
  const images = body?.copyImages === false ? remoteImages : await copyImages(portalUser.client, portalUser.user.id, remoteImages);

  const rawText = stripHtml(html).slice(0, 24000);
  const pricePair = priceAndCurrencyFromText(rawText);
  const structuredCurrency = String(nestedOffer.priceCurrency || item.priceCurrency || '').toUpperCase();
  const detectedCurrency = ['EUR','USD','TRY','GBP','CHF','AED','KZT','GEL'].includes(structuredCurrency)
    ? structuredCurrency
    : pricePair.currency || currencyFromText(rawText);
  const structuredPrice = firstNumber(nestedOffer.price, nestedOffer.lowPrice, item.price);
  const price = structuredPrice || pricePair.price || heuristicPrice(rawText, detectedCurrency);
  const surface = firstNumber(item.floorSize?.value, item.floorSize, item.area?.value, item.area) || heuristicSurface(rawText);
  const bedrooms = firstNumber(item.numberOfBedrooms, item.numberOfRooms) || heuristicBedrooms(rawText);
  const structuredLocality = decode(String(address.addressLocality || item.addressLocality || ''));
  const structuredRegion = decode(String(address.addressRegion || ''));
  const detectedLocation = locationFromText(`${title} ${structuredLocality} ${structuredRegion} ${rawText.slice(0, 7000)}`);
  const cityName = structuredLocality || detectedLocation.cityName;
  const city = detectedLocation.city || cityName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const district = structuredRegion || heuristicDistrict(rawText);
  const structuredCountry = decode(String(address.addressCountry?.name || address.addressCountry || ''));
  const countryName = structuredCountry || detectedLocation.countryName;
  const countryCode = detectedLocation.countryCode || '';
  const delivery = heuristicDelivery(rawText);
  const developer = heuristicDeveloper(rawText);
  const paymentPlan = heuristicPaymentPlan(rawText);

  const extracted = {
    sourceUrl: url.toString(),
    sourceHost: url.hostname,
    title: decode(title),
    summary: decode(description).slice(0, 700),
    description: decode(description).slice(0, 9000),
    price,
    currency: detectedCurrency,
    surfaceM2: surface,
    bedrooms,
    district,
    city,
    cityName,
    countryName,
    countryCode,
    delivery,
    developer,
    paymentPlan,
    images: images.length ? images : remoteImages,
    remoteImages,
    rawText,
  };

  const { data: job } = await portalUser.client
    .from('property_import_jobs')
    .insert({
      created_by: portalUser.user.id,
      source_url: url.toString(),
      source_host: url.hostname,
      status: 'extracted',
      extracted_data: extracted,
    })
    .select('id')
    .single();

  return NextResponse.json({ ok: true, importJobId: job?.id || null, data: extracted });
}
 || upper === 'USD' || upper.includes('US DOLLAR')) return 'USD';
  if (upper === '€' || upper === 'EUR' || upper.includes('EURO')) return 'EUR';
  if (upper === '£' || upper === 'GBP' || upper.includes('POUND')) return 'GBP';
  if (upper === '₺' || upper === 'TRY' || upper === 'TL') return 'TRY';
  if (upper === 'AED' || upper.includes('DIRHAM')) return 'AED';
  if (upper === 'CHF') return 'CHF';
  if (upper === 'KZT' || upper === '₸') return 'KZT';
  if (upper === 'GEL' || upper === '₾') return 'GEL';
  return '';
}

function priceAndCurrencyFromText(text: string) {
  const prefix = /(?:price|prix|fiyat|from|à\s+partir\s+de|starting\s+(?:at|from))?\s*(USD|EUR|AED|TRY|TL|GBP|CHF|KZT|GEL|\$|€|£|₺|₸|₾)\s*([0-9][0-9\s\u00a0.,]{2,})/i.exec(text);
  if (prefix) {
    const currency = normalizeCurrencyToken(prefix[1]);
    const price = parseLocaleNumber(prefix[2]);
    if (currency && price && price >= 1000) return { price, currency };
  }

  const suffix = /(?:price|prix|fiyat|from|à\s+partir\s+de|starting\s+(?:at|from))?\s*([0-9][0-9\s\u00a0.,]{2,})\s*(USD|EUR|AED|TRY|TL|GBP|CHF|KZT|GEL|\$|€|£|₺|₸|₾)/i.exec(text);
  if (suffix) {
    const price = parseLocaleNumber(suffix[1]);
    const currency = normalizeCurrencyToken(suffix[2]);
    if (currency && price && price >= 1000) return { price, currency };
  }

  return { price: null as number | null, currency: '' };
}

function currencyFromText(text: string) {
  const upper = text.toUpperCase();
  if (/\bAED\b|DIRHAM/.test(upper)) return 'AED';
  if (/\bUSD\b|US\s*DOLLAR|\$/.test(upper)) return 'USD';
  if (/\bEUR\b|EURO|€/.test(upper)) return 'EUR';
  if (/\bTRY\b|\bTL\b|TÜRK LİRASI|TURK LIRASI|₺/.test(upper)) return 'TRY';
  if (/\bGBP\b|POUND|£/.test(upper)) return 'GBP';
  if (/\bCHF\b|SWISS FRANC/.test(upper)) return 'CHF';
  if (/\bKZT\b|TENGE|₸/.test(upper)) return 'KZT';
  if (/\bGEL\b|LARI|₾/.test(upper)) return 'GEL';
  return '';
}

function heuristicPrice(text: string, currencyHint = '') {
  const patterns = [
    /(?:starting\s+price|price\s+from|price|prix|fiyat|satış\s+fiyatı|satis\s+fiyati)\s*(?:\([^)]*\))?\s*[:\-]?\s*(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)?\s*([0-9][0-9\s.,]{3,})/i,
    /(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)\s*([0-9][0-9\s.,]{3,})/i,
    /([0-9][0-9\s.,]{3,})\s*(?:AED|USD|EUR|TRY|TL|GBP|CHF|€|£|₺|\$)/i,
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(text);
    if (!match?.[1]) continue;
    const parsed = parseLocaleNumber(match[1]);
    if (parsed && parsed >= 1000) return parsed;
  }
  return null;
}

function heuristicSurface(text: string) {
  const range = /(?:surface|size|alan|brüt|brut|net)?\s*[:\-]?\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:-|–|to)\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:m²|m2|sqm|sq\.?\s*m)/i.exec(text);
  if (range?.[1]) return parseLocaleNumber(range[1]);
  const one = /(?:surface|size|alan|brüt|brut|net)?\s*[:\-]?\s*([0-9]{2,4}(?:[.,][0-9]+)?)\s*(?:m²|m2|sqm|sq\.?\s*m)/i.exec(text);
  return one?.[1] ? parseLocaleNumber(one[1]) : null;
}

function heuristicBedrooms(text: string) {
  const match = /(?:bedrooms?|chambres?|yatak\s*odası|yatak\s*odasi)\s*[:\-]?\s*([0-9]{1,2})(?!\s*[,\/-]\s*[0-9])/i.exec(text);
  if (match?.[1]) return Number(match[1]);
  const layout = /\b([1-9])\s*\+\s*1\b/.exec(text);
  return layout?.[1] ? Number(layout[1]) : null;
}

function heuristicDistrict(text: string) {
  const patterns = [
    /Projenin\s+Yeri\s*[:\-]?\s*(?:İstanbul|Istanbul)\s*\/\s*([^|·,]{2,60})/i,
    /(?:district|quartier|ilçe|ilce|location)\s*[:\-]?\s*([^|·,]{2,60})/i,
    /(?:İstanbul|Istanbul)\s*[\/·,-]\s*([A-ZÇĞİÖŞÜa-zçğıöşü][^|·,]{1,45})/,
  ];
  for (const pattern of patterns) {
    const match = pattern.exec(text);
    const value = decode(match?.[1] || '').replace(/\s{2,}/g, ' ').trim();
    if (value && value.length <= 60) return value;
  }
  return '';
}

function locationFromText(text: string) {
  const lower = text.toLocaleLowerCase('tr-TR');
  const candidates = [
    { city: 'istanbul', cityName: 'Istanbul', countryCode: 'TR', countryName: 'Turkey', terms: ['istanbul','i̇stanbul'] },
    { city: 'bodrum', cityName: 'Bodrum', countryCode: 'TR', countryName: 'Turkey', terms: ['bodrum'] },
    { city: 'antalya', cityName: 'Antalya', countryCode: 'TR', countryName: 'Turkey', terms: ['antalya'] },
    { city: 'dubai', cityName: 'Dubai', countryCode: 'AE', countryName: 'United Arab Emirates', terms: ['dubai','دبي'] },
    { city: 'batumi', cityName: 'Batumi', countryCode: 'GE', countryName: 'Georgia', terms: ['batumi','ბათუმი'] },
    { city: 'almaty', cityName: 'Almaty', countryCode: 'KZ', countryName: 'Kazakhstan', terms: ['almaty','алматы'] },
    { city: 'paris', cityName: 'Paris', countryCode: 'FR', countryName: 'France', terms: ['paris'] },
    { city: 'miami', cityName: 'Miami', countryCode: 'US', countryName: 'United States', terms: ['miami'] },
    { city: 'new-york', cityName: 'New York', countryCode: 'US', countryName: 'United States', terms: ['new york','nyc'] },
    { city: 'los-angeles', cityName: 'Los Angeles', countryCode: 'US', countryName: 'United States', terms: ['los angeles'] },
  ];
  for (const item of candidates) {
    if (item.terms.some((term) => lower.includes(term))) return item;
  }
  return { city: '', cityName: '', countryCode: '', countryName: '' };
}

function heuristicDelivery(text: string) {
  const patterns = [
    /(?:handover|delivery|livraison|teslim(?:at)?(?:\s+tarihi)?)\s*[:\-]?\s*((?:Q[1-4]\s*)?20[2-4][0-9])/i,
    /((?:Q[1-4]\s*)?20[2-4][0-9])\s*(?:handover|delivery|livraison|teslim)/i,
  ];
  for (const pattern of patterns) {
    const value = decode(pattern.exec(text)?.[1] || '');
    if (value) return value;
  }
  return '';
}

function heuristicDeveloper(text: string) {
  const patterns = [
    /(?:developed\s+by|developer(?:\s+behind)?|promoteur|geliştirici|gelistirici)\s*[:\-]?\s*([A-Z0-9][A-Za-z0-9&.'’\-\s]{2,80})/i,
    /(?:güvencesi\s+ve|guvencesi\s+ve)\s*([A-ZÇĞİÖŞÜ0-9][A-Za-zÇĞİÖŞÜçğıöşü0-9&.'’\-\s]{2,60})/i,
  ];
  for (const pattern of patterns) {
    const value = decode(pattern.exec(text)?.[1] || '').split(/\s{2,}|\.|,|\||FAQ|About/i)[0].trim();
    if (value && value.length <= 80) return value;
  }
  return '';
}

function heuristicPaymentPlan(text: string) {
  const candidates: Array<{label:string;percentage:number;due:string}> = [];
  const patterns = [
    [/booking|reservation|réservation|rezervasyon/i, 'Reservation', 'At booking'],
    [/during\s+construction|construction|pendant\s+construction|inşaat|insaat/i, 'During construction', 'During construction'],
    [/handover|delivery|livraison|teslim/i, 'Handover', 'At handover'],
    [/post[-\s]?handover|after\s+handover|après\s+livraison|teslim\s+sonrası|teslim\s+sonrasi/i, 'Post-handover', 'After handover'],
  ] as const;

  const snippets = text.match(/.{0,90}\b[0-9]{1,3}\s*%.{0,90}/gi) || [];
  for (const snippet of snippets.slice(0, 20)) {
    const pctMatch = /([0-9]{1,3})\s*%/.exec(snippet);
    if (!pctMatch) continue;
    const percentage = Number(pctMatch[1]);
    if (percentage <= 0 || percentage > 100) continue;
    for (const [pattern, label, due] of patterns) {
      if (!pattern.test(snippet)) continue;
      if (!candidates.some((item) => item.label === label && item.percentage === percentage)) {
        candidates.push({ label, percentage, due });
      }
      break;
    }
  }

  const total = candidates.reduce((sum, item) => sum + item.percentage, 0);
  if (!candidates.length || total > 120) return [];
  return candidates.slice(0, 6).map((item) => ({
    label: { fr: item.label, en: item.label, ru: item.label, ar: item.label },
    percentage: item.percentage,
    amount: null,
    due: { fr: item.due, en: item.due, ru: item.due, ar: item.due },
  }));
}

function extractImageUrls(html: string, base: URL) {
  const raw: string[] = [];
  const tags = html.match(/<(?:img|source)\s+[^>]*>/gi) || [];
  for (const tag of tags) {
    for (const attr of ['src','data-src','data-lazy-src','data-original']) {
      const match = new RegExp(`${attr}=["']([^"']+)["']`, 'i').exec(tag);
      if (match?.[1]) raw.push(match[1]);
    }
    const srcset = /(?:srcset|data-srcset)=["']([^"']+)["']/i.exec(tag)?.[1] || '';
    for (const item of srcset.split(',')) {
      const candidate = item.trim().split(/\s+/)[0];
      if (candidate) raw.push(candidate);
    }
  }

  return unique(raw.map((value) => {
    const absoluteUrl = absolute(base, decode(value));
    try {
      const parsed = new URL(absoluteUrl);
      if (parsed.pathname.includes('/_next/image') && parsed.searchParams.get('url')) {
        return absolute(base, decode(parsed.searchParams.get('url') || ''));
      }
      return parsed.toString();
    } catch {
      return '';
    }
  }).filter((value) => /^https?:\/\//i.test(value)));
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
  return { client, user: auth.user, token, role: profile.role };
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
      const path = `submissions/${userId}/imports/${crypto.randomUUID()}.${ext}`;
      const { error } = await client.storage.from('property-images').upload(path, bytes, { contentType: type, cacheControl: '31536000' });
      if (error) continue;
      const { data } = client.storage.from('property-images').getPublicUrl(path);
      copied.push(data.publicUrl);
    } catch {}
  }
  return copied;
}

export async function POST(request: NextRequest) {
  const portalUser = await verifyPortalUser(request);
  if (!portalUser) return NextResponse.json({ error: 'Acc\u00e8s Bosphoras actif requis.' }, { status: 401 });

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
  const htmlImages = extractImageUrls(html, url);

  const remoteImages = unique([...ogImages, ...ldImages].map((x) => absolute(url, x)).filter((x) => /^https?:\/\//i.test(x)).concat(htmlImages))
    .filter((imageUrl) => !/facebook\.com\/tr\?|logo|favicon|icon\.(?:png|svg|ico)(?:\?|$)/i.test(imageUrl))
    .slice(0, 28);
  const images = body?.copyImages === false ? remoteImages : await copyImages(portalUser.client, portalUser.user.id, remoteImages);

  const rawText = stripHtml(html).slice(0, 24000);
  const structuredCurrency = String(nestedOffer.priceCurrency || item.priceCurrency || '').toUpperCase();
  const detectedCurrency = ['EUR','USD','TRY','GBP','CHF','AED','KZT','GEL'].includes(structuredCurrency)
    ? structuredCurrency
    : currencyFromText(rawText);
  const structuredPrice = firstNumber(nestedOffer.price, nestedOffer.lowPrice, item.price);
  const price = structuredPrice || heuristicPrice(rawText, detectedCurrency);
  const surface = firstNumber(item.floorSize?.value, item.floorSize, item.area?.value, item.area) || heuristicSurface(rawText);
  const bedrooms = firstNumber(item.numberOfBedrooms, item.numberOfRooms) || heuristicBedrooms(rawText);
  const structuredLocality = decode(String(address.addressLocality || item.addressLocality || ''));
  const structuredRegion = decode(String(address.addressRegion || ''));
  const detectedLocation = locationFromText(`${title} ${structuredLocality} ${structuredRegion} ${rawText.slice(0, 7000)}`);
  const cityName = structuredLocality || detectedLocation.cityName;
  const city = detectedLocation.city || cityName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const district = structuredRegion || heuristicDistrict(rawText);
  const structuredCountry = decode(String(address.addressCountry?.name || address.addressCountry || ''));
  const countryName = structuredCountry || detectedLocation.countryName;
  const countryCode = detectedLocation.countryCode || '';
  const delivery = heuristicDelivery(rawText);
  const developer = heuristicDeveloper(rawText);
  const paymentPlan = heuristicPaymentPlan(rawText);

  const extracted = {
    sourceUrl: url.toString(),
    sourceHost: url.hostname,
    title: decode(title),
    summary: decode(description).slice(0, 700),
    description: decode(description).slice(0, 9000),
    price,
    currency: detectedCurrency,
    surfaceM2: surface,
    bedrooms,
    district,
    city,
    cityName,
    countryName,
    countryCode,
    delivery,
    developer,
    paymentPlan,
    images: images.length ? images : remoteImages,
    remoteImages,
    rawText,
  };

  const { data: job } = await portalUser.client
    .from('property_import_jobs')
    .insert({
      created_by: portalUser.user.id,
      source_url: url.toString(),
      source_host: url.hostname,
      status: 'extracted',
      extracted_data: extracted,
    })
    .select('id')
    .single();

  return NextResponse.json({ ok: true, importJobId: job?.id || null, data: extracted });
}
