import type { Locale } from './i18n';

export const siteUrl = 'https://bosphoras.com';

export function getLocalePath(locale: Locale, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'fr') return cleanPath === '/' ? '/' : cleanPath;
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

export function getAlternateUrls(
  path: string = ''
): Record<string, string> {
  const locales: Locale[] = ['fr', 'en', 'ru', 'ar'];
  const result: Record<string, string> = {};
  const cleanPath = path === '/' ? '' : path;

  for (const locale of locales) {
    if (locale === 'fr') {
      result['fr'] = `${siteUrl}${cleanPath || '/'}`;
    } else {
      result[locale] = `${siteUrl}/${locale}${cleanPath}`;
    }
  }

  result['x-default'] = `${siteUrl}${cleanPath || '/'}`;
  return result;
}

export function getCanonicalUrl(locale: Locale, path: string = ''): string {
  const cleanPath = path === '/' ? '' : path;
  if (locale === 'fr') return `${siteUrl}${cleanPath || '/'}`;
  return `${siteUrl}/${locale}${cleanPath}`;
}
