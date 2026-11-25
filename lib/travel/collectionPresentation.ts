import { travelHref, type TravelLocale } from './i18n';

export const collectionReleased = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';
export const collectionBookingEnabled = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' || collectionReleased;

// Keep the existing partner integrations available for future activation.
export const additionalBookingServicesPaused = collectionBookingEnabled;

export const travelCollectionTitles: Record<TravelLocale, string> = {
  fr: "Vous avez trouvé votre voyage. Et le bon prix ?",
  en: "Found your trip. Found the right price?",
  de: "Ihre Reise steht fest. Stimmt auch der Preis?",
  tr: "Seyahatinizi buldunuz. Peki ya doğru fiyatı?",
  es: "Ya encontraste tu viaje. ¿Y el mejor precio?",
  it: "Hai trovato il tuo viaggio. E il prezzo giusto?",
  pt: "Já encontrou sua viagem. E o melhor preço?",
  ru: "Поездку уже выбрали. А выгодную цену?",
  ar: "وجدت رحلتك. فهل وجدت السعر الأنسب؟",
  zh: "行程选好了，价格也合适吗？",
};

export const collectionIntroductions: Record<TravelLocale, string> = {
  fr: "Retrouvez le vol ou l’hôtel que vous avez repéré. Pour les mêmes dates, voyez si vous pouvez réserver moins cher avec Bosphoras.",
  en: "Find the flight or hotel you have your eye on. Check the same dates to see if you could book for less with Bosphoras.",
  de: "Suchen Sie den Flug oder das Hotel, das Sie bereits gefunden haben. Prüfen Sie, ob Sie für dieselben Daten bei Bosphoras günstiger buchen können.",
  tr: "Beğendiğiniz uçuşu veya oteli yeniden arayın. Aynı tarihler için Bosphoras ile daha uygun fiyata rezervasyon yapıp yapamayacağınızı görün.",
  es: "Busca el vuelo o el hotel que te interesa. Comprueba si puedes reservar por menos con Bosphoras para las mismas fechas.",
  it: "Cerca il volo o l’hotel che hai scelto. Per le stesse date, scopri se puoi prenotare a meno con Bosphoras.",
  pt: "Busque o voo ou o hotel que você escolheu. Para as mesmas datas, veja se pode reservar por menos com a Bosphoras.",
  ru: "Найдите выбранный рейс или отель. Проверьте, можно ли забронировать на те же даты дешевле с Bosphoras.",
  ar: "ابحث عن رحلة الطيران أو الفندق الذي اخترته. تحقّق مما إذا كان بإمكانك الحجز بسعر أقل مع بوسفوراس للتواريخ نفسها.",
  zh: "搜索您看中的航班或酒店，选择相同日期，看看通过 Bosphoras 预订是否更划算。",
};

export const hotelBookingLabels: Record<TravelLocale, string> = {
  fr: 'Hôtels', en: 'Hotels', de: 'Hotels', tr: 'Oteller', es: 'Hoteles',
  it: 'Hotel', pt: 'Hotéis', ru: 'Отели', ar: 'الفنادق', zh: '酒店',
};

export const privateTravelLabels: Record<TravelLocale, string> = {
  fr: 'Voyages privés', en: 'Private travel', de: 'Privatreisen', tr: 'Özel seyahatler',
  es: 'Viajes privados', it: 'Viaggi privati', pt: 'Viagens privadas',
  ru: 'Частные путешествия', ar: 'السفر الخاص', zh: '私人旅行',
};

const destinationAirports: Readonly<Partial<Record<string, string>>> = {
  istanbul: 'IST', bodrum: 'BJV', antalya: 'AYT', paris: 'PAR', dubai: 'DXB', bali: 'DPS',
  'new-york': 'JFK', miami: 'MIA', 'los-angeles': 'LAX', 'saint-barthelemy': 'SBH',
  mykonos: 'JMK', ibiza: 'IBZ', tivat: 'TIV', aspen: 'ASE', 'jackson-hole': 'JAC',
  nantucket: 'ACK', 'turks-and-caicos': 'PLS', maldives: 'MLE', 'los-cabos': 'SJD',
  phuket: 'HKT', 'koh-samui': 'USM', krabi: 'KBV', bangkok: 'BKK', 'chiang-mai': 'CNX',
  sumba: 'WGP', palawan: 'PPS', tokyo: 'HND', 'da-nang': 'DAD', 'phu-quoc': 'PQC',
  singapore: 'SIN', sentosa: 'SIN', udaipur: 'UDR', jaipur: 'JAI', paro: 'PBH',
  'siem-reap': 'SAI', 'luang-prabang': 'LPQ', langkawi: 'LGK',
};

export function bookingCollectionPath(locale: TravelLocale): string {
  return locale === 'fr' && collectionBookingEnabled ? '/voyages' : travelHref(locale, 'private-collection');
}

export function destinationFlightHref(locale: TravelLocale, destinationSlug: string): string {
  const airport = destinationAirports[destinationSlug];
  const params = new URLSearchParams({ service: 'flights' });
  if (airport) params.set('arrival', airport);
  return bookingCollectionPath(locale) + '?' + params;
}
