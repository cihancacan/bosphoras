import type { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';
import { siteUrl } from '@/lib/routes';
import { allPages } from '@/data/pages';
import { getCanonicalUrl } from '@/lib/routes';
import { highPotentialGuides } from '@/data/highPotentialPages';
import { programmaticPages } from '@/data/programmatic/pages';
import { ENABLE_ALL_PROGRAMMATIC_PAGES, ENABLE_PRIORITY_3_IN_SITEMAP } from '@/lib/launchConfig';

function programmaticPriority(priorityLevel: 1 | 2 | 3) {
  if (priorityLevel === 1) return 0.75;
  if (priorityLevel === 2) return 0.65;
  return 0.45;
}

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
        priority: page.id === 'home' ? 1.0 : page.id === 'private-assessment' ? 0.9 : 0.8,
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

  if (ENABLE_ALL_PROGRAMMATIC_PAGES) {
    for (const page of programmaticPages) {
      if (page.service.priorityLevel === 3 && !ENABLE_PRIORITY_3_IN_SITEMAP) continue;

      entries.push({
        url: getCanonicalUrl(page.locale, page.slug),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: programmaticPriority(page.service.priorityLevel),
      });
    }
  }

  return entries;
}

export { siteUrl };
