import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const paths = [
  'submissions/a68b8063-4edc-4c62-b825-78eb2aba885b/imports/b6bdee9c-b400-40db-a889-97f22df7ec59.png',
  'submissions/a68b8063-4edc-4c62-b825-78eb2aba885b/imports/c1546fb8-5776-484c-b82c-64a342108fd1.png',
  'submissions/a68b8063-4edc-4c62-b825-78eb2aba885b/imports/b3c8058f-fff9-49ab-ae16-0c04947e8bee.png',
  'submissions/a68b8063-4edc-4c62-b825-78eb2aba885b/imports/bf54e6bc-9736-4837-96de-925d4181e36d.png',
  'submissions/a68b8063-4edc-4c62-b825-78eb2aba885b/imports/0fe22798-9236-40a0-b67d-8bc3c080023f.jpg',
  'submissions/a68b8063-4edc-4c62-b825-78eb2aba885b/imports/d5f6cb24-20be-48fc-a696-7c515dd93292.jpg',
  'submissions/a68b8063-4edc-4c62-b825-78eb2aba885b/imports/930cbce2-d7f8-49c3-9e16-7cece9c768f3.jpg',
  'submissions/a68b8063-4edc-4c62-b825-78eb2aba885b/imports/4bede25a-ae90-48a5-8d3a-48a2df522965.png',
  'submissions/a68b8063-4edc-4c62-b825-78eb2aba885b/imports/1b5c032c-7124-41cd-b521-2eb55a54ebb2.png',
  'submissions/a68b8063-4edc-4c62-b825-78eb2aba885b/imports/83e6b327-e328-48a9-8045-016502ca0510.png',
];

export async function GET() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://udbzytlmcnljlegmolcx.supabase.co';
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';
  const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data, error } = await supabase.storage.from('property-images').remove(paths);
  if (error) return NextResponse.json({ ok:false, error:error.message }, { status:500 });
  return NextResponse.json({ ok:true, requested:paths.length, removed:data?.length ?? 0 });
}
