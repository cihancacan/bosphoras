import type { Metadata } from 'next';
import { siteUrl } from '@/lib/routes';
import { bookingCollectionPath, collectionReleased, travelCollectionTitles } from './collectionPresentation';
import { travelLanguageInfo, type TravelLocale } from './i18n';

const searchTitles: Record<TravelLocale, string> = {
  fr: 'Vols et hôtels', en: 'Flights and hotels', de: 'Flüge und Hotels', tr: 'Uçuşlar ve oteller',
  es: 'Vuelos y hoteles', it: 'Voli e hotel', pt: 'Voos e hotéis',
  ru: 'Авиабилеты и отели', ar: 'الرحلات الجوية والفنادق', zh: '机票与酒店',
};

export const collectionDescriptions: Record<TravelLocale, string> = {
  fr: 'Comparez les vols et les hôtels avec BOSPHORAS. Choisissez vos dates, consultez les tarifs et explorez nos guides pour préparer votre prochain voyage.',
  en: 'Compare flights and hotels with BOSPHORAS. Pick your dates, check prices and explore our destination guides to plan your next journey.',
  de: 'Vergleichen Sie Flüge und Hotels mit BOSPHORAS. Wählen Sie Ihre Reisedaten, prüfen Sie Preise und entdecken Sie unsere Reiseführer.',
  tr: 'BOSPHORAS ile uçuşları ve otelleri karşılaştırın. Tarihlerinizi seçin, fiyatları inceleyin ve seyahat rehberlerimizi keşfedin.',
  es: 'Compara vuelos y hoteles con BOSPHORAS. Elige tus fechas, consulta los precios y explora nuestras guías de destino para tu próximo viaje.',
  it: 'Confronta voli e hotel con BOSPHORAS. Scegli le date, consulta i prezzi e scopri le nostre guide per organizzare il tuo prossimo viaggio.',
  pt: 'Compare voos e hotéis com a BOSPHORAS. Escolha as datas, confira os preços e explore nossos guias de destinos para planejar sua próxima viagem.',
  ru: 'Сравните авиабилеты и отели с BOSPHORAS. Выберите даты, проверьте цены и изучите путеводители, чтобы спланировать следующую поездку.',
  ar: 'قارن الرحلات الجوية والفنادق مع بوسفوراس. اختر التواريخ واطّلع على الأسعار واستكشف أدلة الوجهات للتخطيط لرحلتك المقبلة.',
  zh: '通过 BOSPHORAS 比较机票与酒店。选择出行日期、查看价格，并浏览目的地指南，为下一次旅行做好准备。',
};

export function collectionLanguageAlternates() {
  const languages = Object.fromEntries(travelLanguageInfo.map(({code, hreflang}) => [hreflang, siteUrl + bookingCollectionPath(code)]));
  return { ...languages, 'x-default': siteUrl + bookingCollectionPath('fr') };
}

export function collectionMetadata(locale: TravelLocale): Metadata {
  const url = siteUrl + bookingCollectionPath(locale);
  const title = searchTitles[locale] + ' | ' + travelCollectionTitles[locale] + ' | BOSPHORAS';
  const description = collectionDescriptions[locale];
  const image = siteUrl + '/images/travel/saint-tropez-premium/destination/saint-tropez-pampelonne-bay.webp';
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url, languages: collectionLanguageAlternates() },
    robots: { index: collectionReleased, follow: true, 'max-image-preview': 'large' },
    openGraph: { type: 'website', siteName: 'BOSPHORAS', title, description, url, images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
