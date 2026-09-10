/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return require('./data/seo-redirects.json').map((redirect) => ({
      ...redirect,
      source: encodeURI(redirect.source),
      destination: encodeURI(redirect.destination),
    }));
  },
};

module.exports = nextConfig;
