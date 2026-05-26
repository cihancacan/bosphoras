/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      // French transfer SEO migration: keep one strong canonical URL and preserve old equity.
      { source: '/transferts-istanbul', destination: '/transfert-aeroport-istanbul', permanent: true },
      { source: '/transfer-istanbul', destination: '/transfert-aeroport-istanbul', permanent: true },
      { source: '/transfer-istanbul/transfert-aeroport-istanbul', destination: '/transfert-aeroport-istanbul', permanent: true },
      { source: '/transfer-istanbul/transfert-aeroport-saw', destination: '/transfert-aeroport-saw', permanent: true },
      { source: '/transfer-istanbul/:path*', destination: '/:path*', permanent: true },

      { source: '/services/transport-vip', destination: '/services/conciergerie-luxe-turquie', permanent: true },
      { source: '/en/services/vip-transport', destination: '/en/services/luxury-concierge-turkey', permanent: true },
      { source: '/ru/uslugi/vip-transport', destination: '/ru/uslugi/luxury-concierge-turkey', permanent: true },
      { source: '/ar/خدمات/النقل-الفاخر', destination: '/ar/خدمات/luxury-concierge-turkey', permanent: true },

      { source: '/adhesion/carte-membre', destination: '/adhesion/demande-membre', permanent: true },
      { source: '/en/membership/card', destination: '/en/membership/application', permanent: true },
      { source: '/ru/chlenstvo/karta', destination: '/ru/chlenstvo/zayavka', permanent: true },
      { source: '/ar/عضوية/البطاقة', destination: '/ar/عضوية/طلب', permanent: true },

      { source: '/adhesion/membres-premium', destination: '/adhesion/demande-membre', permanent: true },
      { source: '/en/membership/premium-cardholders', destination: '/en/membership/application', permanent: true },
      { source: '/ru/chlenstvo/premium-uchastniki', destination: '/ru/chlenstvo/zayavka', permanent: true },
      { source: '/ar/عضوية/الأعضاء-المميزون', destination: '/ar/عضوية/طلب', permanent: true },
    ];
  },
};

module.exports = nextConfig;
