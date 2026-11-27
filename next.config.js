/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // HTTP language complements the locale-specific main content and client
  // document language. Keep static rendering and existing routes intact.
  async headers() {
    const languages = { en:'en', ru:'ru', ar:'ar', de:'de', tr:'tr', es:'es', it:'it', pt:'pt-BR', zh:'zh-CN' };
    return [
      { source: '/travel/:path*', headers: [{ key:'Content-Language', value:'fr' }] },
      ...Object.entries(languages).map(([prefix, language]) => ({
        source: '/' + prefix + '/travel/:path*',
        headers: [{ key:'Content-Language', value:language }],
      })),
    ];
  },
  async redirects() {
    return require('./data/seo-redirects.json').map((redirect) => ({
      ...redirect,
      source: encodeURI(redirect.source),
      destination: encodeURI(redirect.destination),
    }));
  },
};

module.exports = nextConfig;
