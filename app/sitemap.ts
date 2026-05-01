import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { siteUrl } from '@/lib/routes';
import { allPages } from '@/data/pages';
import { getCanonicalUrl } from '@/lib/routes';
import { highPotentialGuides } from '@/data/highPotentialPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of allPages[locale]) {
      const url = getCanonicalUrl(locale, page.slug);
      entries.push({
        url,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: page.id === 'home' ? 1.0 : page.id === 'private-assessment' ? 0.9 : 0.7,
      });
    }
  }

  for (const guide of highPotentialGuides) {
    entries.push({
      url: getCanonicalUrl(guide.locale, guide.slug),
      lastModified: new Date(guide.updatedAt),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  }

  return entries;
}

export { siteUrl };
