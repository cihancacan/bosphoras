import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';
export const maxDuration = 30;

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://udbzytlmcnljlegmolcx.supabase.co';
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';

const BAYUT_HOST = 'uae-real-estate3.p.rapidapi.com';

function bearer(request: NextRequest) {
  const header = request.headers.get('authorization') || '';
  return header.startsWith('Bearer ') ? header.slice(7).trim() : '';
}

async function verifyAdmin(request: NextRequest) {
  const token = bearer(request);
  if (!token) return null;
  const client = createClient(SUPABASE_URL, PUBLISHABLE_KEY, {
    global: { headers: { Authorization: 'Bearer ' + token } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const auth = await client.auth.getUser(token);
  const user = auth.data.user;
  if (!user) return null;
  const profile = await client.from('profiles').select('role,status').eq('user_id', user.id).maybeSingle();
  if (!profile.data || profile.data.status !== 'active' || profile.data.role !== 'admin') return null;
  return { client, user };
}

function textValue(value: any): string {
  if (!value) return '';
  if (typeof value === 'string' || typeof value === 'number') return String(value).trim();
  if (typeof value === 'object') {
    for (const key of ['en','fr','tr','ru','ar','name','title','label','value']) {
      if (value[key]) {
        const result = textValue(value[key]);
        if (result) return result;
      }
    }
  }
  return '';
}

function numeric(...values: any[]) {
  for (const value of values) {
    const raw = String(value ?? '').replace(/\s/g, '').replace(/[^0-9.,-]/g, '');
    if (!raw) continue;
    const normalized = raw.includes(',') && !raw.includes('.')
      ? raw.replace(',', '.')
      : raw.replace(/,/g, '');
    const number = Number(normalized);
    if (Number.isFinite(number) && number > 0) return number;
  }
  return null;
}

function unixDelivery(value: any) {
  const n=Number(value);
  if(!Number.isFinite(n)||n<1000000000||n>4102444800)return null;
  const date=new Date(n*1000);
  return Number.isNaN(date.getTime())?null:date.toISOString().slice(0,10);
}

function dateValue(...values: any[]) {
  for (const value of values) {
    const raw = textValue(value);
    const match = raw.match(/\b(20\d{2})[-\/.](\d{1,2})[-\/.](\d{1,2})\b/);
    if (match) return match[1] + '-' + match[2].padStart(2,'0') + '-' + match[3].padStart(2,'0');
  }
  return null;
}

function imageUrl(value: any): string {
  if (!value) return '';
  if (typeof value === 'string') return /^https?:\/\//i.test(value) ? value : '';
  if (typeof value === 'object') {
    return imageUrl(value.url || value.src || value.original || value.large || value.medium);
  }
  return '';
}

function imageList(item: any) {
  const raw = [
    item.coverPhoto,
    item.cover_photo,
    item.heroImage,
    item.hero_image,
    item.image,
    ...(Array.isArray(item.images) ? item.images : []),
    ...(Array.isArray(item.photos) ? item.photos : []),
    ...(Array.isArray(item.gallery) ? item.gallery : []),
  ];
  return Array.from(new Set(raw.map(imageUrl).filter(Boolean))).slice(0, 20);
}

function slugKey(value: string) {
  return value
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,180);
}

function locationNames(item: any) {
  const candidates = Array.isArray(item.location) ? item.location : Array.isArray(item.locations) ? item.locations : [];
  return candidates.map((x:any)=>textValue(x)).filter(Boolean);
}

function mapBayut(item: any, page: number) {
  const locations = locationNames(item);
  const project = item.project || {};
  const projectLocation = [...locations].reverse().find((name:string)=>!/^dubai$|^uae$/i.test(name));
  const projectName = textValue(project.title || project.name || item.projectName) || projectLocation || textValue(item.title || item.name);
  const developerName = textValue(project.agency?.name || project.developerName || project.developer || item.developerName || item.developer || item.developer_name);
  const city = locations.find((x:string)=>/dubai/i.test(x)) || textValue(item.city) || 'Dubai';
  // Bayut item.area is numeric floor area, not the community.
  const district = textValue(item.locationName || item.community || item.district)
    || locations.filter((x:string)=>!/^uae$|^dubai$/i.test(x)).slice(-2,-1)[0]
    || locations.find((x:string)=>!/^uae$|^dubai$/i.test(x)) || '';
  const images = imageList(item);
  const externalId = textValue(project.externalID || project.externalId || project.id || item.projectId || item.externalID || item.externalId || item.id);
  const sourceUrl = textValue(item.url || item.link || item.webURL || item.webUrl);
  return {
    source_system: 'bayut',
    source_external_id: externalId || null,
    source_url: /^https?:\/\//i.test(sourceUrl) ? sourceUrl : null,
    source_page: page,
    source_payload: item,
    project_name: projectName || ('Bayut project ' + (externalId || crypto.randomUUID())),
    developer_name: developerName || null,
    country_code: 'AE',
    country_name: 'United Arab Emirates',
    city,
    district: district || null,
    currency: textValue(item.currency || item.priceCurrency) || 'AED',
    price_min: numeric(item.startingPrice, item.priceMin, item.minPrice, item.lowPrice, item.price),
    price_max: numeric(item.priceMax, item.maxPrice, item.highPrice),
    handover_text: textValue(item.handover || item.handoverDate || item.completionStatus || item.completion_status) || null,
    completion_date: dateValue(item.handoverDate, item.completionDate, item.deliveryDate)
      || unixDelivery(item.completionDetails?.completionDate) || unixDelivery(project.completionDate),
    hero_image: images[0] || null,
    images,
    dedupe_key: slugKey([developerName, projectName, city].filter(Boolean).join('|')),
  };
}

function mapEmlakjet(item: any, page: number) {
  const projectName = textValue(item.projectName || item.title || item.name);
  const developerName = textValue(item.developerName || item.developer || item.companyName || item.firm);
  const city = textValue(item.city || item.province || item.location?.city || item.location?.province);
  const district = textValue(item.district || item.county || item.location?.district || item.location?.county);
  const images = imageList(item);
  const externalId = textValue(item.externalID || item.externalId || item.id || item.projectId || item.project_id);
  const sourceUrl = textValue(item.url || item.link || item.webUrl || item.web_url);
  return {
    source_system: 'emlakjet',
    source_external_id: externalId || null,
    source_url: /^https?:\/\//i.test(sourceUrl) ? sourceUrl : null,
    source_page: page,
    source_payload: item,
    project_name: projectName || ('Emlakjet project ' + (externalId || crypto.randomUUID())),
    developer_name: developerName || null,
    country_code: 'TR',
    country_name: 'Turkey',
    city: city || null,
    district: district || null,
    currency: textValue(item.currency || item.priceCurrency) || 'TRY',
    price_min: numeric(item.startingPrice, item.priceMin, item.minPrice, item.lowPrice, item.price),
    price_max: numeric(item.priceMax, item.maxPrice, item.highPrice),
    handover_text: textValue(item.handover || item.delivery || item.completionStatus) || null,
    completion_date: dateValue(item.handoverDate, item.completionDate, item.deliveryDate),
    hero_image: images[0] || null,
    images,
    dedupe_key: slugKey([developerName, projectName, city].filter(Boolean).join('|')),
  };
}

function unwrapCollection(source: string, payload: any) {
  const data = payload?.data ?? payload;
  const projectSuggestions = Array.isArray(data?.suggestions)
    ? data.suggestions
      .filter((group:any)=>/project/i.test(textValue(group?.key)))
      .flatMap((group:any)=>Array.isArray(group?.records) ? group.records : [])
    : [];
  const candidates = source === 'bayut'
    ? [data?.properties, data?.projects, data?.results, payload?.properties]
    : [data?.projects, projectSuggestions, data?.properties, data?.results, data?.items, payload?.projects];
  return candidates.find(Array.isArray) || [];
}

function smallBatch(source: string, items: any[]) {
  if (source !== 'bayut') return items.slice(0, 8);
  const unique = new Map<string, any>();
  for (const item of items) {
    const project = item?.project || {};
    const key = textValue(project.externalID || project.externalId || project.id || item.projectId || item.externalID || item.externalId || item.id);
    if (key && !unique.has(key)) unique.set(key, item);
    if (unique.size >= 8) break;
  }
  return [...unique.values()];
}

function sourceConfiguration(source: string) {
  if (source === 'bayut') {
    const key = process.env.RAPIDAPI_BAYUT_KEY || process.env.RAPIDAPI_KEY || '';
    return { key, host: BAYUT_HOST, configured: Boolean(key) };
  }
  const key = process.env.RAPIDAPI_EMLAKJET_KEY || process.env.RAPIDAPI_KEY || '';
  const host = process.env.RAPIDAPI_EMLAKJET_HOST || '';
  return { key, host, configured: Boolean(key && host) };
}

async function fetchSource(source: string, page: number) {
  const config = sourceConfiguration(source);
  if (!config.configured) {
    const required = source === 'bayut'
      ? 'RAPIDAPI_BAYUT_KEY'
      : 'RAPIDAPI_EMLAKJET_KEY + RAPIDAPI_EMLAKJET_HOST';
    const error:any = new Error('Source non configurée. Ajoutez ' + required + ' dans les variables serveur Vercel.');
    error.code = 'NOT_CONFIGURED';
    throw error;
  }

  const endpoint = source === 'bayut' ? '/search-new-projects' : '/project-search';
  const url = new URL('https://' + config.host + endpoint);
  if (source === 'bayut') {
    url.searchParams.set('page', String(page));
    url.searchParams.set('langs','en');
    url.searchParams.set('property_type','residential');
    url.searchParams.set('sort_order','latest');
    const locationId = process.env.BAYUT_DUBAI_LOCATION_ID || '5002';
    if (locationId) url.searchParams.set('location_ids', locationId);
  } else {
    url.searchParams.set('query', process.env.EMLAKJET_PROJECT_QUERY || 'istanbul');
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': config.key,
      'x-rapidapi-host': config.host,
      Accept: 'application/json',
    },
    cache: 'no-store',
    signal: AbortSignal.timeout(20000),
  });
  const payload = await response.json().catch(()=>null);
  if (!response.ok) {
    throw new Error(source + ' répond ' + response.status + (payload?.message ? ' · ' + payload.message : '.'));
  }
  return payload;
}

async function usage(client: any) {
  const now = new Date();
  const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString();
  const rows = await client.from('project_source_sync_runs')
    .select('source_system,request_count,fetched_count,upserted_count,status,created_at')
    .gte('created_at', monthStart);
  const out:any = {};
  for (const row of rows.data || []) {
    out[row.source_system] ||= { requests:0, fetched:0, upserted:0, runs:0 };
    out[row.source_system].requests += Number(row.request_count || 0);
    out[row.source_system].fetched += Number(row.fetched_count || 0);
    out[row.source_system].upserted += Number(row.upserted_count || 0);
    out[row.source_system].runs += 1;
  }
  return out;
}

export async function GET(request: NextRequest) {
  const portal = await verifyAdmin(request);
  if (!portal) return NextResponse.json({ error:'Accès administrateur requis.' }, { status:401 });
  const stats = await usage(portal.client);
  return NextResponse.json({
    sources: {
      bayut: {
        configured: sourceConfiguration('bayut').configured,
        monthlyLimit: 300,
        ...(stats.bayut || { requests:0, fetched:0, upserted:0, runs:0 }),
      },
      emlakjet: {
        configured: sourceConfiguration('emlakjet').configured,
        monthlyLimit: 400,
        ...(stats.emlakjet || { requests:0, fetched:0, upserted:0, runs:0 }),
      },
    },
  });
}

export async function POST(request: NextRequest) {
  const portal = await verifyAdmin(request);
  if (!portal) return NextResponse.json({ error:'Accès administrateur requis.' }, { status:401 });

  const body = await request.json().catch(()=>({}));
  const source = String(body?.source || '').toLowerCase();
  const page = Math.max(1, Math.min(1000, Number(body?.page || 1)));
  if (!['bayut','emlakjet'].includes(source)) {
    return NextResponse.json({ error:'Source inconnue.' }, { status:400 });
  }

  let fetchedCount = 0;
  let upsertedCount = 0;
  try {
    const payload = await fetchSource(source, page);
    const items = smallBatch(source, unwrapCollection(source, payload));
    fetchedCount = items.length;

    for (const raw of items) {
      const candidate:any = source === 'bayut' ? mapBayut(raw, page) : mapEmlakjet(raw, page);
      if (!candidate.project_name || !candidate.dedupe_key) continue;

      let existing:any = null;
      if (candidate.source_external_id) {
        const q = await portal.client.from('project_import_candidates')
          .select('id,review_status,matched_project_id,imported_project_id')
          .eq('source_system', source)
          .eq('source_external_id', candidate.source_external_id)
          .maybeSingle();
        existing = q.data;
      } else {
        const q = await portal.client.from('project_import_candidates')
          .select('id,review_status,matched_project_id,imported_project_id')
          .eq('source_system', source)
          .eq('dedupe_key', candidate.dedupe_key)
          .limit(1)
          .maybeSingle();
        existing = q.data;
      }

      let matchedProjectId = existing?.matched_project_id || null;
      if (!matchedProjectId && candidate.source_external_id) {
        const q = await portal.client.from('real_estate_projects')
          .select('id')
          .eq('source_system', source)
          .eq('external_id', candidate.source_external_id)
          .limit(1)
          .maybeSingle();
        matchedProjectId = q.data?.id || null;
      }
      if (!matchedProjectId) {
        let query = portal.client.from('real_estate_projects').select('id,name,city').ilike('name', candidate.project_name).limit(1);
        if (candidate.city) query = query.ilike('city', candidate.city);
        const q = await query.maybeSingle();
        matchedProjectId = q.data?.id || null;
      }

      const row = {
        ...candidate,
        matched_project_id: matchedProjectId,
        last_seen_at: new Date().toISOString(),
      };

      if (existing?.id) {
        const preserved = ['imported','rejected','duplicate'].includes(existing.review_status)
          ? existing.review_status
          : 'new';
        const update = await portal.client.from('project_import_candidates')
          .update({ ...row, review_status: preserved })
          .eq('id', existing.id);
        if (update.error) throw update.error;
      } else {
        const insert = await portal.client.from('project_import_candidates')
          .insert({ ...row, first_seen_at: new Date().toISOString() });
        if (insert.error) throw insert.error;
      }
      upsertedCount += 1;
    }

    await portal.client.from('project_source_sync_runs').insert({
      source_system: source,
      source_page: page,
      request_count: 1,
      fetched_count: fetchedCount,
      upserted_count: upsertedCount,
      status: 'success',
      created_by: portal.user.id,
    });

    return NextResponse.json({
      ok: true,
      source,
      page,
      fetched: fetchedCount,
      candidates: upsertedCount,
      usage: await usage(portal.client),
    });
  } catch (error:any) {
    const status = error?.code === 'NOT_CONFIGURED' ? 409 : 502;
    await portal.client.from('project_source_sync_runs').insert({
      source_system: source,
      source_page: page,
      request_count: error?.code === 'NOT_CONFIGURED' ? 0 : 1,
      fetched_count: fetchedCount,
      upserted_count: upsertedCount,
      status: 'failed',
      error_message: String(error?.message || error).slice(0, 1000),
      created_by: portal.user.id,
    });
    return NextResponse.json({ error: error?.message || 'Synchronisation impossible.' }, { status });
  }
}
