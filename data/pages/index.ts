import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';
import { frPages } from './fr';
import { enPages } from './en';
import { ruPages } from './ru';
import { arPages } from './ar';
import { applyPageOverrides, privateDeskOverrides } from './private-desk-overrides';
import { translatedPrivateDeskOverrides } from './private-desk-overrides-translations';
import { stage8TrustOverrides } from './stage8-trust-overrides';
import { legalTranslations } from './legal-translations';
import { formPagesOverrides } from './form-pages-overrides';
import { frAlignedTranslations } from './fr-aligned-translations';
import { luxuryConciergeOverrides } from './luxury-concierge-overrides';
import { uxSeoCleanupOverrides } from './ux-seo-cleanup-overrides';
import { missingRouteOverrides } from './missing-route-overrides';
import { fixLocalizedFormLinks } from './form-link-fixes';

export * from './types';

const frAll = applyPageOverrides(
  applyPageOverrides(
    applyPageOverrides(
      applyPageOverrides(frPages, stage8TrustOverrides.fr ?? []),
      formPagesOverrides.fr ?? []
    ),
    luxuryConciergeOverrides.fr ?? []
  ),
  uxSeoCleanupOverrides.fr ?? []
);
const enAllBase = applyPageOverrides(
  applyPageOverrides(
    applyPageOverrides(
      applyPageOverrides(enPages, privateDeskOverrides.en ?? []),
      stage8TrustOverrides.en ?? []
    ),
    legalTranslations.en ?? []
  ),
  formPagesOverrides.en ?? []
);
const ruAllBase = applyPageOverrides(
  applyPageOverrides(
    applyPageOverrides(
      applyPageOverrides(ruPages, translatedPrivateDeskOverrides.ru ?? []),
      stage8TrustOverrides.ru ?? []
    ),
    legalTranslations.ru ?? []
  ),
  formPagesOverrides.ru ?? []
);
const arAllBase = applyPageOverrides(
  applyPageOverrides(
    applyPageOverrides(
      applyPageOverrides(arPages, translatedPrivateDeskOverrides.ar ?? []),
      stage8TrustOverrides.ar ?? []
    ),
    legalTranslations.ar ?? []
  ),
  formPagesOverrides.ar ?? []
);

const enAll = applyPageOverrides(
  applyPageOverrides(
    applyPageOverrides(enAllBase, frAlignedTranslations.en ?? []),
    luxuryConciergeOverrides.en ?? []
  ),
  uxSeoCleanupOverrides.en ?? []
);
const ruAll = applyPageOverrides(
  applyPageOverrides(
    applyPageOverrides(
      applyPageOverrides(ruAllBase, frAlignedTranslations.ru ?? []),
      luxuryConciergeOverrides.ru ?? []
    ),
    uxSeoCleanupOverrides.ru ?? []
  ),
  missingRouteOverrides.ru ?? []
);
const arAll = applyPageOverrides(
  applyPageOverrides(
    applyPageOverrides(
      applyPageOverrides(arAllBase, frAlignedTranslations.ar ?? []),
      luxuryConciergeOverrides.ar ?? []
    ),
    uxSeoCleanupOverrides.ar ?? []
  ),
  missingRouteOverrides.ar ?? []
);

export const allPages: Record<Locale, MainPageContent[]> = {
  fr: fixLocalizedFormLinks('fr', frAll),
  en: fixLocalizedFormLinks('en', enAll),
  ru: fixLocalizedFormLinks('ru', ruAll),
  ar: fixLocalizedFormLinks('ar', arAll),
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
