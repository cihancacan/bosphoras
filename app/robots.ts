import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/routes';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Keep CSS, JavaScript and images crawlable for search and answer engines.
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
