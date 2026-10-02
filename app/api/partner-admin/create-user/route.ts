import { NextRequest, NextResponse } from 'next/server';
import { createHash, randomBytes } from 'crypto';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://udbzytlmcnljlegmolcx.supabase.co';
const PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_yQPc71ry-F3aqBLhj6OPig_cFs_u-Pa';

function bearer(request: NextRequest) {
  const header = request.headers.get('authorization') || '';
  return header.startsWith('Bearer ') ? header.slice(7).trim() : '';
}

function generatedPassword() {
  return `Bos-${randomBytes(6).toString('base64url')}9!`;
}

export async function POST(request: NextRequest) {
  const token = bearer(request);
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRole) {
    return NextResponse.json({ error: 'SUPABASE_SERVICE_ROLE_KEY is not configured on Vercel.' }, { status: 503 });
  }

  const publicClient = createClient(SUPABASE_URL, PUBLISHABLE_KEY, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: userData, error: userError } = await publicClient.auth.getUser(token);
  if (userError || !userData.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: adminProfile } = await publicClient
    .from('profiles')
    .select('role,status')
    .eq('user_id', userData.user.id)
    .maybeSingle();

  if (!adminProfile || adminProfile.role !== 'admin' || adminProfile.status !== 'active') {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 });
  }

  const body = await request.json().catch(() => null) as any;
  const email = String(body?.email || '').trim().toLowerCase();
  const fullName = String(body?.fullName || '').trim();
  const companyName = String(body?.companyName || '').trim();
  const password = String(body?.password || '').trim() || generatedPassword();

  if (!email || !email.includes('@') || !fullName || !companyName || password.length < 8) {
    return NextResponse.json({ error: 'Company, full name, valid email and an 8+ character password are required.' }, { status: 400 });
  }

  const admin = createClient(SUPABASE_URL, serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: existing } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
  if (existing?.users?.some((u) => u.email?.toLowerCase() === email)) {
    return NextResponse.json({ error: 'An account already exists for this email.' }, { status: 409 });
  }

  const inviteCode = randomBytes(18).toString('base64url');
  const inviteHash = createHash('sha256').update(inviteCode).digest('hex');

  const { data: company, error: companyError } = await admin
    .from('partner_companies')
    .insert({ name: companyName, email, status: 'pending' })
    .select('id')
    .single();
  if (companyError || !company) return NextResponse.json({ error: companyError?.message || 'Could not create partner company.' }, { status: 500 });

  await admin.from('partner_admin_terms').insert({ partner_id: company.id });
  const { error: inviteError } = await admin.from('partner_invites').insert({
    email,
    full_name: fullName,
    partner_id: company.id,
    invite_code_hash: inviteHash,
    created_by: userData.user.id,
  });
  if (inviteError) return NextResponse.json({ error: inviteError.message }, { status: 500 });

  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName, invite_code: inviteCode },
  });

  if (createError || !created.user) {
    await admin.from('partner_companies').delete().eq('id', company.id);
    return NextResponse.json({ error: createError?.message || 'Could not create partner user.' }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    email,
    password,
    userId: created.user.id,
    partnerId: company.id,
  });
}
