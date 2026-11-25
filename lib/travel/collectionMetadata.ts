import type { Metadata } from 'next';
import { siteUrl } from '@/lib/routes';
import { bookingCollectionPath, collectionReleased } from './collectionPresentation';
import { travelLanguageInfo, type TravelLocale } from './i18n';

export const collectionSearchTitles: Record<TravelLocale, string> = {
  fr: "Vols et hôtels – Comparez les prix",
  en: "Flights and hotels – Compare prices",
  de: "Flüge und Hotels – Preise vergleichen",
  tr: "Uçuşlar ve oteller – Fiyatları karşılaştırın",
  es: "Vuelos y hoteles – Compara precios",
  it: "Voli e hotel – Confronta i prezzi",
  pt: "Voos e hotéis – Compare preços",
  ru: "Авиабилеты и отели – Сравните цены",
  ar: "رحلات الطيران والفنادق – قارن الأسعار",
  zh: "机票与酒店 – 比较价格",
};

export const collectionDescriptions: Record<TravelLocale, string> = {
  fr: "Avant de réserver un vol ou un hôtel, comparez le prix que vous avez trouvé avec le tarif Bosphoras pour les mêmes dates. À vous de choisir la meilleure offre.",
  en: "Before booking a flight or hotel, compare the price you found with Bosphoras for the same dates. Check the total and conditions to choose the best offer.",
  de: "Vergleichen Sie vor der Flug- oder Hotelbuchung Ihren gefundenen Preis mit Bosphoras für dieselben Daten. Prüfen Sie Gesamtpreis und Konditionen.",
  tr: "Uçuş veya otel rezervasyonundan önce bulduğunuz fiyatı aynı tarihler için Bosphoras ile karşılaştırın. Toplam fiyatı ve koşulları inceleyip seçiminizi yapın.",
  es: "Antes de reservar un vuelo o un hotel, compara el precio que encontraste con Bosphoras para las mismas fechas. Revisa el total y las condiciones.",
  it: "Prima di prenotare un volo o un hotel, confronta il prezzo che hai trovato con Bosphoras per le stesse date. Verifica il totale e le condizioni.",
  pt: "Antes de reservar um voo ou hotel, compare o preço que encontrou com a Bosphoras para as mesmas datas. Confira o valor total e as condições.",
  ru: "Перед бронированием рейса или отеля сравните найденную цену с Bosphoras на те же даты. Проверьте итоговую стоимость и условия и выберите предложение.",
  ar: "قبل حجز رحلة طيران أو فندق، قارن السعر الذي وجدته بسعر بوسفوراس للتواريخ نفسها. راجع السعر الإجمالي والشروط واختر العرض الأنسب لك.",
  zh: "预订机票或酒店前，将您找到的价格与 Bosphoras 相同日期的报价进行比较。查看总价及预订条件，选择适合您的优惠。",
};

export function collectionLanguageAlternates() {
  const languages = Object.fromEntries(travelLanguageInfo.map(({code, hreflang}) => [hreflang, siteUrl + bookingCollectionPath(code)]));
  return { ...languages, 'x-default': siteUrl + bookingCollectionPath('fr') };
}

export function collectionMetadata(locale: TravelLocale): Metadata {
  const url = siteUrl + bookingCollectionPath(locale);
  const title = collectionSearchTitles[locale] + ' | Bosphoras';
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
