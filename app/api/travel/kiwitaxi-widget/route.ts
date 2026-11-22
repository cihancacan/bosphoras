export const dynamic = 'force-dynamic';

const scriptUrl = 'https://widget-white-label.kiwitaxi.com/js/kiwitaxi-white-label.js';
const languages = new Set(['de', 'en', 'es', 'fr', 'it', 'pt', 'ru']);
const pageLocales = new Set([...languages,'ar','tr','zh']);
const headers = {
  'Cache-Control': 'private, no-store',
  'Content-Type': 'text/html; charset=utf-8',
  'Content-Security-Policy': [
    "default-src 'none'",
    'script-src https://widget-white-label.kiwitaxi.com',
    "style-src 'unsafe-inline' https://*.kiwitaxi.com",
    'frame-src https://*.kiwitaxi.com https://kiwitaxi.com',
    'connect-src https://*.kiwitaxi.com https://kiwitaxi.com',
    'img-src https://*.kiwitaxi.com https://kiwitaxi.com data:',
    "frame-ancestors 'none'",
    "base-uri 'none'",
  ].join('; '),
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
  'X-Robots-Tag': 'noindex, nofollow',
};

function getAttribution() {
  if (process.env.VERCEL_ENV !== 'preview') return null;

  try {
    const { pap, pap_bid } = JSON.parse(process.env.BOSPHORAS_KIWITAXI_ATTRIBUTION ?? '{}');
    const valid = (value: unknown): value is string =>
      typeof value === 'string' && /^[a-z0-9_-]{3,80}$/i.test(value);
    return valid(pap) && valid(pap_bid) ? { pap, pap_bid } : null;
  } catch {
    return null;
  }
}

export function HEAD() {
  return new Response(null, { status: getAttribution() ? 204 : 404, headers });
}

export function GET(request: Request) {
  const attribution = getAttribution();
  if (!attribution) return new Response(null, { status: 404, headers });

  const requestedLanguage = new URL(request.url).searchParams.get('locale') ?? '';
  const language = languages.has(requestedLanguage) ? requestedLanguage : 'en';
  const pageLocale = pageLocales.has(requestedLanguage) ? requestedLanguage : 'en';
  const backUrl = `${pageLocale === 'fr' ? '' : `/${pageLocale}`}/travel/private-collection?service=transfers`;
  const config = JSON.stringify({
    language,
    transfers_limit: 10,
    transfer_options: [],
    transfer_options_limit: 12,
    display_currency: 'EUR',
    country: {},
    place_from: {},
    place_to: {},
    max_height: 0,
    disable_currency_selector: false,
    hide_form_extras: false,
    deep_link: false,
    hide_external_links: false,
    ref_params: attribution,
    scroll_offset: 0,
  });

  return new Response(`<!doctype html>
<html lang="${language}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>BOSPHORAS · Kiwitaxi</title>
  <style>
    body { margin: 0; background: #fff; color: #172c3c; font: 16px system-ui, sans-serif; }
    main { max-width: 72rem; margin: auto; padding: 1rem; }
    nav { margin-bottom: 1.25rem; }
    a { color: #006dad; }
    iframe { display: block; max-width: 100%; }
  </style>
</head>
<body>
  <main>
  <nav><a href="${backUrl}">← BOSPHORAS</a></nav>
  <div data-kiwitaxi-white-label>
    <div data-kiwitaxi-white-label-element></div>
    <script type="application/json" data-kiwitaxi-white-label-config>${config}</script>
  </div>
  </main>
  <script src="${scriptUrl}"></script>
</body>
</html>`, { headers });
}
