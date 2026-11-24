import { PrivateTravelCollection } from '@/components/travel/PrivateTravelCollection';
import { collectionDescriptions } from '@/lib/travel/collectionMetadata';
import { bookingCollectionPath, travelCollectionTitles } from '@/lib/travel/collectionPresentation';
import { travelText, type TravelLocale } from '@/lib/travel/i18n';
import { siteUrl } from '@/lib/routes';

export function CollectionPage({ locale }: { locale: TravelLocale }) {
  const url = siteUrl + bookingCollectionPath(locale);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url + '#webpage',
    url,
    name: travelCollectionTitles[locale],
    description: collectionDescriptions[locale],
    inLanguage: travelText(locale).hreflang,
    isPartOf: { '@type': 'WebSite', url: siteUrl, name: 'BOSPHORAS' },
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g, '\\u003c')}}/>
    <PrivateTravelCollection locale={locale}/>
  </>;
}
