export const dynamic = 'force-dynamic';

const cosmosOrigin = 'https://cosmosyachting.com';
const supportedLocales = new Set(['fr', 'en', 'ru', 'ar', 'de', 'tr', 'es', 'zh', 'pt', 'it']);
const headers = {
  'Cache-Control': 'private, no-store',
  'Content-Type': 'text/html; charset=utf-8',
  'Content-Security-Policy': [
    "default-src 'none'",
    `script-src ${cosmosOrigin}`,
    "style-src 'unsafe-inline'",
    `frame-src ${cosmosOrigin}`,
    "frame-ancestors 'none'",
    "base-uri 'none'",
  ].join('; '),
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Robots-Tag': 'noindex, nofollow',
};

function getPartnerReference() {
  if (process.env.VERCEL_ENV !== 'preview') return null;

  const reference = process.env.BOSPHORAS_COSMOS_WIDGET_PARTNER;
  return reference && reference.length <= 160 && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(reference)
    ? reference
    : null;
}

async function canEmbedStorefront(storefrontUrl: string, pageOrigin: string) {
  try {
    const response = await fetch(`${storefrontUrl}?embed=1`, {
      method: 'HEAD',
      cache: 'no-store',
      redirect: 'error',
      signal: AbortSignal.timeout(3500),
    });
    if (!response.ok) return false;

    const policies = (response.headers.get('content-security-policy') ?? '').split(',');
    const ancestorRules = policies.flatMap(policy => {
      const directive = policy.split(';').find(item => /^\s*frame-ancestors\s/i.test(item));
      return directive ? [directive.trim().split(/\s+/).slice(1)] : [];
    });
    // Cosmos grants embedding to the exact HTTPS domain through frame-ancestors.
    if (ancestorRules.length) return ancestorRules.every(origins => origins.includes(pageOrigin));
    return !response.headers.get('x-frame-options');
  } catch {
    return false;
  }
}

export function HEAD() {
  return new Response(null, { status: getPartnerReference() ? 204 : 404, headers });
}

export async function GET(request: Request) {
  const reference = getPartnerReference();
  if (!reference) return new Response(null, { status: 404, headers });

  const requestUrl = new URL(request.url);
  const requestedLocale = requestUrl.searchParams.get('locale') ?? '';
  const locale = supportedLocales.has(requestedLocale) ? requestedLocale : 'en';
  const backPath = `${locale === 'fr' ? '' : `/${locale}`}/travel/private-collection?service=yachts`;
  const french = locale === 'fr';
  const title = french ? 'Rechercher un yacht' : 'Search for a yacht';
  const storefrontLabel = french ? 'Ouvrir la vitrine Cosmos' : 'Open the Cosmos storefront';
  const storefrontUrl = `${cosmosOrigin}/partner/${reference}`;
  const widgetAllowed = await canEmbedStorefront(storefrontUrl, requestUrl.origin);
  const storefrontNote = french
    ? 'La recherche, les disponibilités et les tarifs se consultent sur notre vitrine Cosmos Yachting.'
    : 'Search for yachts and check availability and rates on our Cosmos Yachting storefront.';

  return new Response(`<!doctype html>
<html lang="${french ? 'fr' : 'en'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} · BOSPHORAS</title>
  <style>
    body { margin: 0; background: #fff; color: #172c3c; font: 16px system-ui, sans-serif; }
    main { max-width: 72rem; margin: auto; padding: 1rem; }
    nav { display: flex; flex-wrap: wrap; justify-content: space-between; gap: .75rem; }
    a { color: #006dad; }
    h1 { margin: 1.25rem 0 1rem; font-size: clamp(1.5rem, 4vw, 2.25rem); }
    iframe { display: block; max-width: 100%; }
    .fallback { padding: 1rem 1.25rem; border: 1px solid #dde6eb; border-radius: .75rem; }
  </style>
</head>
<body>
  <main>
    <nav>
      <a href="${backPath}">← BOSPHORAS</a>
      <a href="${storefrontUrl}" rel="sponsored noopener">${storefrontLabel}</a>
    </nav>
    <h1>${title} · Cosmos Yachting</h1>
    ${widgetAllowed
      ? `<script src="${cosmosOrigin}/partner-widget.js" data-partner="${reference}" data-height="920" data-title="${title} · Cosmos Yachting"></script>`
      : `<div class="fallback"><p>${storefrontNote}</p><a href="${storefrontUrl}" rel="sponsored noopener">${storefrontLabel}</a></div>`}
  </main>
</body>
</html>`, { headers });
}
