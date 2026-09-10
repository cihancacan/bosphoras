import type { Locale } from './i18n';
import { pageSlugs } from '@/data/pages/types';

export const siteUrl = 'https://www.bosphoras.com';

export function getLocalePath(locale: Locale, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'fr') return cleanPath === '/' ? '/' : cleanPath;
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

export function getAlternateUrls(
  path: string = '',
  sourceLocale: Locale = 'fr'
): Record<string, string> | null {
  const locales: Locale[] = ['fr', 'en', 'ru', 'ar'];
  const result: Record<string, string> = {};
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const group = pageSlugs.find((page) => page.slugs[sourceLocale] === normalized);
  // Never invent a translated URL by copying a slug into another language.
  if (!group || ['transport', 'membership-card', 'premium-cardholders'].includes(group.id)) return null;

  for (const locale of locales) {
    result[locale] = getCanonicalUrl(locale, group.slugs[locale]);
  }

  result['x-default'] = result.fr;
  return result;
}

export function getCanonicalUrl(locale: Locale, path: string = ''): string {
  const cleanPath = path === '/' ? '' : path;
  if (locale === 'fr') return `${siteUrl}${cleanPath || '/'}`;
  return `${siteUrl}/${locale}${cleanPath}`;
}
