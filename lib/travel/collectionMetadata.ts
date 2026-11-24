import type { Metadata } from 'next';
import { siteUrl } from '@/lib/routes';
import { collectionReleased, travelCollectionTitles } from './collectionPresentation';
import { travelHref, travelLanguageInfo, type TravelLocale } from './i18n';

export function collectionMetadata(locale: TravelLocale): Metadata {
  const href = (language: TravelLocale) => siteUrl + travelHref(language, 'private-collection');
  const languages = Object.fromEntries(travelLanguageInfo.map(language => [language.hreflang, href(language.code)]));
  return {
    title: `${travelCollectionTitles[locale]} | BOSPHORAS`,
    alternates: { canonical: href(locale), languages: { ...languages, 'x-default': href('fr') } },
    robots: { index: collectionReleased, follow: true },
  };
}
