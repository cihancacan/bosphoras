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

async function getUrlFromRequest(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    const body = await request.json().catch(() => null);
    return typeof body?.url === 'string' ? body.url : null;
  }

  const formData = await request.formData().catch(() => null);
  const formUrl = formData?.get('url');
  return typeof formUrl === 'string' ? formUrl : null;
}

export async function POST(request: NextRequest) {
  const url = await getUrlFromRequest(request);

  if (!url) {
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
