import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const TOKEN_URL = 'https://oauth2.googleapis.com/token';

function getBaseUrl(request: NextRequest) {
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  return `${proto}://${host}`;
}

export async function GET(request: NextRequest) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI || `${getBaseUrl(request)}/api/auth/google/callback`;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'GOOGLE_CLIENT_ID ou GOOGLE_CLIENT_SECRET manquant dans les variables Vercel.' },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const savedState = request.cookies.get('google_oauth_state')?.value;

  if (!code) {
    return NextResponse.json({ error: 'Code OAuth Google manquant.' }, { status: 400 });
  }

  if (!state || !savedState || state !== savedState) {
    return NextResponse.json({ error: 'Vérification OAuth impossible. Recommence la connexion Google.' }, { status: 400 });
  }

  const tokenResponse = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  const tokenData = await tokenResponse.json();

  if (!tokenResponse.ok || !tokenData.access_token) {
    return NextResponse.json(
      { error: 'Google a refusé la connexion OAuth.', details: tokenData },
      { status: 400 }
    );
  }

  const response = NextResponse.redirect(`${getBaseUrl(request)}/indexation-google?connected=1`);

  response.cookies.delete('google_oauth_state');
  response.cookies.set('google_access_token', tokenData.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: tokenData.expires_in || 3600,
  });

  if (tokenData.refresh_token) {
    response.cookies.set('google_refresh_token', tokenData.refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return response;
}
