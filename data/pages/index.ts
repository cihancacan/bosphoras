import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';
import { frPages } from './fr';
import { enPages } from './en';
import { ruPages } from './ru';
import { arPages } from './ar';
import { applyPageOverrides, privateDeskOverrides } from './private-desk-overrides';

export * from './types';

export const allPages: Record<Locale, MainPageContent[]> = {
  fr: frPages,
  en: applyPageOverrides(enPages, privateDeskOverrides.en ?? []),
  ru: applyPageOverrides(ruPages, privateDeskOverrides.ru ?? []),
  ar: applyPageOverrides(arPages, privateDeskOverrides.ar ?? []),
};

export function getPage(
  locale: Locale,
  pageId: string
): MainPageContent | undefined {
  return allPages[locale].find((p) => p.id === pageId);
}

export function getPageBySlug(
  locale: Locale,
  slug: string
): MainPageContent | undefined {
  const normalized = slug.startsWith('/') ? slug : `/${slug}`;
  return allPages[locale].find((p) => p.slug === normalized);
}

export function getAllPagesForLocale(locale: Locale): MainPageContent[] {
  return allPages[locale];
}
