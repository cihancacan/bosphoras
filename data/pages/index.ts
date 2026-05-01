import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';
import { frPages } from './fr';
import { enPages } from './en';
import { ruPages } from './ru';
import { arPages } from './ar';
import { applyPageOverrides, privateDeskOverrides } from './private-desk-overrides';
import { translatedPrivateDeskOverrides } from './private-desk-overrides-translations';
import { stage8TrustOverrides } from './stage8-trust-overrides';

export * from './types';

export const allPages: Record<Locale, MainPageContent[]> = {
  fr: applyPageOverrides(frPages, stage8TrustOverrides.fr ?? []),
  en: applyPageOverrides(applyPageOverrides(enPages, privateDeskOverrides.en ?? []), stage8TrustOverrides.en ?? []),
  ru: applyPageOverrides(applyPageOverrides(ruPages, translatedPrivateDeskOverrides.ru ?? []), stage8TrustOverrides.ru ?? []),
  ar: applyPageOverrides(applyPageOverrides(arPages, translatedPrivateDeskOverrides.ar ?? []), stage8TrustOverrides.ar ?? []),
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
