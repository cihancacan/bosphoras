import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const INDEXING_ENDPOINT = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

function isAllowedUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && ['bosphoras.com', 'www.bosphoras.com'].includes(parsed.hostname);
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const url = body?.url;

  if (!url || typeof url !== 'string') {
    return NextResponse.json({ error: 'URL manquante.' }, { status: 400 });
  }

  if (!isAllowedUrl(url)) {
    return NextResponse.json(
      { error: 'URL refusée. Utilise seulement une URL https://bosphoras.com ou https://www.bosphoras.com.' },
      { status: 400 }
    );
  }

  const accessToken = request.cookies.get('google_access_token')?.value;

  if (!accessToken) {
    return NextResponse.json({ error: 'Non connecté à Google. Clique d’abord sur Connexion Google.' }, { status: 401 });
  }

  const indexingResponse = await fetch(INDEXING_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });

  const data = await indexingResponse.json().catch(() => ({}));

  return NextResponse.json(
    {
      ok: indexingResponse.ok,
      status: indexingResponse.status,
      result: data,
    },
    { status: indexingResponse.ok ? 200 : indexingResponse.status }
  );
}
