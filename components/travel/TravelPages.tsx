import Link from 'next/link';
import Image from 'next/image';
import { travelEditorial } from '@/data/travel/editorial';
import { IstanbulFlagship } from '@/components/travel/IstanbulFlagship';
import { FeaturedCityGuide } from '@/components/travel/FeaturedCityGuide';
import { featuredCityGuide } from '@/data/travel/featuredCityGuides';
import { kohSamuiFaq } from '@/data/travel/kohSamuiFaq';
import { stMoritzDraftFaq } from '@/data/travel/stMoritzDraftFaq';
import { aspenDraftFaq } from '@/data/travel/aspenDraftFaq';
import { nisekoDraftFaq } from '@/data/travel/nisekoDraftFaq';
import { megeveDraftFaq } from '@/data/travel/megeveDraftFaq';
import { jacksonHoleDraftFaq } from '@/data/travel/jacksonHoleDraftFaq';
import { bigSkyDraftFaq } from '@/data/travel/bigSkyDraftFaq';
import { valDisereDraftFaq } from '@/data/travel/valDisereDraftFaq';
import { verbierDraftFaq } from '@/data/travel/verbierDraftFaq';
import { gstaadDraftFaq } from '@/data/travel/gstaadDraftFaq';
import { zermattDraftFaq } from '@/data/travel/zermattDraftFaq';
import { monacoDraftFaq } from '@/data/travel/monacoDraftFaq';
import { saintJeanCapFerratDraftFaq } from '@/data/travel/saintJeanCapFerratDraftFaq';
import { capDAntibesDraftFaq } from '@/data/travel/capDAntibesDraftFaq';
import { lakeComoDraftFaq } from '@/data/travel/lakeComoDraftFaq';
import { capriDraftFaq } from '@/data/travel/capriDraftFaq';
import { positanoDraftFaq } from '@/data/travel/positanoDraftFaq';
import { ravelloDraftFaq } from '@/data/travel/ravelloDraftFaq';
import { mykonosDraftFaq } from '@/data/travel/mykonosDraftFaq';
import { antiparosDraftFaq } from '@/data/travel/antiparosDraftFaq';
import { confirmedMonacoAssets } from '@/data/travel/monacoPremiumEditorial';
import { confirmedCapFerratAssets } from '@/data/travel/saintJeanCapFerratPremiumEditorial';
import { confirmedCapDAntibesAssets } from '@/data/travel/capDAntibesPremiumEditorial';
import { confirmedLakeComoAssets } from '@/data/travel/lakeComoPremiumEditorial';
import { confirmedCapriAssets } from '@/data/travel/capriPremiumEditorial';
import { confirmedPositanoAssets } from '@/data/travel/positanoPremiumEditorial';
import { confirmedRavelloAssets } from '@/data/travel/ravelloPremiumEditorial';
import { confirmedMykonosAssets } from '@/data/travel/mykonosPremiumEditorial';
import { confirmedAntiparosAssets } from '@/data/travel/antiparosPremiumEditorial';
import { alpineAvailablePhotoPathsByCity } from '@/data/travel/alpinePremiumEditorial';
import { maldivesFaq } from '@/data/travel/maldivesFaq';
import { losCabosFaq } from '@/data/travel/losCabosFaq';
import { saintBarthelemyFaq } from '@/data/travel/saintBarthelemyFaq';
import { courchevel1850Faq } from '@/data/travel/courchevel1850Faq';
import { mustiqueFaq } from '@/data/travel/mustiqueFaq';
import { portoCervoFaq } from '@/data/travel/portoCervoFaq';
import { HotelEditorialDetail } from '@/components/travel/HotelEditorialDetail';
import { istanbulHotels, istanbulEditorialSourceDate } from '@/data/travel/istanbulFlagship';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { destinationBySlug, travelCategories, travelDestinations, travelRegions, approvedDestinationSlugs, approvedCategorySlugs } from '@/data/travel/destinations';
import type { TravelCategory, TravelDestination } from '@/data/travel/destinations';
import { travelHref, travelLocaleCodes, travelKeywordTitles, travelText } from '@/lib/travel/i18n';
import type { TravelLocale } from '@/lib/travel/i18n';

const ORIGIN = 'https://www.bosphoras.com';
const activeDestinations = ['istanbul','bodrum','antalya','paris','saint-tropez','dubai','bali','phuket','koh-samui','maldives','los-cabos','saint-barthelemy','porto-cervo','mustique','courchevel-1850','st-moritz','aspen','niseko','megeve','jackson-hole','big-sky','val-disere','verbier','costa-careyes'];
const categoryLead: Record<TravelCategory, { keyword: string; checks: string[] }> = {
  hotels: { keyword: 'best hotels · 5 star hotels · luxury resorts · boutique hotels', checks: ['Room category, view and location', 'What is included in the final rate', 'Cancellation conditions and booking provider'] },
  villas: { keyword: 'luxury villas · private pool villas · beachfront villas', checks: ['Pool privacy, bedrooms and access', 'Included housekeeping and staff', 'Deposit, service fees and cancellation'] },
  chalets: { keyword: 'luxury chalets · ski-in ski-out · chalets with pool', checks: ['Actual proximity to lifts and slopes', 'Spa and heated-pool arrangements', 'Transfer and catering inclusions'] },
  yachts: { keyword: 'yacht charter · private yacht rental · boat rental', checks: ['Vessel type, guest limit and itinerary', 'Crew, fuel and port fees', 'Weather policy and operator confirmation'] },
  helicopters: { keyword: 'helicopter tours · private helicopter transfer', checks: ['Tour versus point-to-point transfer', 'Weather and baggage limits', 'Operator, flight approval and refund terms'] },
  'private-jets': { keyword: 'private jet charter · empty leg flights', checks: ['Quoted flight versus confirmed availability', 'Aircraft, operator and airport details', 'Cancellation and repositioning conditions'] }
};
const frenchCategoryChecks: Record<TravelCategory, string[]> = {
  hotels: ['La catégorie exacte de la chambre, sa vue et son emplacement', 'Les prestations comprises dans le tarif final', 'Les conditions d’annulation et le partenaire chargé de la réservation'],
  villas: ['L’intimité de la piscine, le nombre de chambres et les accès', 'Le personnel et l’entretien réellement inclus', 'La caution, les frais de service et les conditions d’annulation'],
  chalets: ['La distance réelle des remontées mécaniques et des pistes', 'Le caractère privatif du spa et de la piscine chauffée', 'Les transferts, les repas et les services compris'],
  yachts: ['Le type de bateau, la capacité et l’itinéraire', 'L’équipage, le carburant et les frais de port', 'Les conditions météo et la confirmation de l’opérateur'],
  helicopters: ['La différence entre survol touristique et transfert privé', 'Les limites météo, bagages et capacité', 'L’opérateur aérien, la confirmation du vol et les remboursements'],
  'private-jets': ['La différence entre un devis et une disponibilité confirmée', 'L’appareil, l’opérateur et les aéroports desservis', 'Les règles d’annulation et de repositionnement']
};
const generalChecksByLocale: Record<TravelLocale, string[]> = {
  fr: ['Comparer la localisation et l’expérience proposée', 'Vérifier ce qui est inclus dans le tarif', 'Lire les conditions de réservation et d’annulation'],
  en: ['Compare location and experience', 'Verify what the final price includes', 'Review booking and cancellation terms'],
  ru: ['Уточните местоположение и категорию размещения', 'Проверьте, что включено в итоговую стоимость', 'Изучите условия бронирования и отмены'],
  ar: ['تحقق من الموقع وفئة الإقامة الفعلية', 'تأكد مما يشمله السعر النهائي', 'راجع شروط الحجز والإلغاء'],
  de: ['Lage und genaue Unterkunftskategorie prüfen', 'Leistungen im Endpreis vergleichen', 'Buchungs- und Stornierungsbedingungen lesen'],
  tr: ['Konumu ve konaklama kategorisini doğrulayın', 'Toplam fiyata nelerin dahil olduğunu kontrol edin', 'Rezervasyon ve iptal koşullarını inceleyin'],
  es: ['Comprobar ubicación y categoría real del alojamiento', 'Verificar qué incluye el precio final', 'Revisar las condiciones de reserva y cancelación'],
  zh: ['核对位置与实际房型', '确认最终价格包含的服务', '查看预订及取消条款'],
  pt: ['Conferir localização e categoria da acomodação', 'Verificar o que o preço final inclui', 'Ler as condições de reserva e cancelamento'],
  it: ['Verificare posizione e categoria della sistemazione', 'Controllare cosa è incluso nel prezzo finale', 'Leggere le condizioni di prenotazione e cancellazione']
};
const headings = {
  fr: ['Une sélection, pas un catalogue','Choisir une adresse d’exception','Réservation et transparence'],
  en: ['Selection, not a catalogue','Choosing an exceptional stay','Booking and transparency'],
  ru: ['Отбор вместо каталога','Как выбрать особенное место','Прозрачное бронирование'],
  ar: ['اختيار مدروس لا كتالوج','اختيار إقامة استثنائية','حجز واضح وشفاف'],
  de: ['Auswahl statt Massenkatalog','Die richtige Unterkunft wählen','Buchung mit Transparenz'],
  tr: ['Katalog değil, özenli seçim','Doğru konaklamayı seçmek','Şeffaf rezervasyon'],
  es: ['Selección, no catálogo','Elegir una estancia excepcional','Reserva transparente'],
  zh: ['精选，而非海量目录','如何挑选非凡旅居','透明预订'],
  pt: ['Seleção em vez de catálogo','Como escolher uma estadia excepcional','Reserva transparente'],
  it: ['Selezione, non catalogo','Come scegliere un soggiorno speciale','Prenotazione trasparente']
} as const;

export type TravelRoute = { kind: 'home' | 'directory' | 'destination' | 'category' | 'keyword' | 'hotel' | 'last-minute' | 'private-collection'; destination?: TravelDestination; category?: TravelCategory; hotel?: (typeof istanbulHotels)[number]; slug: string };

export function resolveTravelRoute(parts: string[] = []): TravelRoute | null {
  const path = parts.filter(Boolean);
  if (path.length === 0) return { kind: 'home', slug: '' };
  if (path.length === 3 && path[0] === 'hotels' && path[1] === 'istanbul') {
    const hotel = istanbulHotels.find((item) => item.id === path[2]);
    return hotel ? { kind: 'hotel', hotel, slug: path.join('/') } : null;
  }
  if (path.length === 1 && path[0] === 'destinations') return { kind: 'directory', slug: 'destinations' };
  if (path.length === 1 && path[0] === 'last-minute') return { kind: 'last-minute', slug: 'last-minute' };
  if (path.length === 1 && path[0] === 'private-collection') return { kind: 'private-collection', slug: 'private-collection' };
  if (path.length === 2 && path[0] === 'destinations') {
    const destination = destinationBySlug.get(path[1]);
    return destination ? { kind: 'destination', destination, slug: path.join('/') } : null;
  }
  const category = path[0] as TravelCategory;
  if (travelCategories.includes(category)) {
    if (path.length === 1) return { kind: 'category', category, slug: category };
    if (path.length === 2) {
      const destination = destinationBySlug.get(path[1]);
      if (destination?.categories.includes(category)) {
        return { kind: 'keyword', category, destination, slug: path.join('/') };
      }
    }
  }
  return null;
}
function heading(locale: TravelLocale, category: TravelCategory, name: string) {
  const keyword = travelKeywordTitles[category][locale];
  if (locale === 'zh') return name + ' · ' + keyword;
  if (locale === 'tr') return name + ' · ' + keyword;
  return keyword + (locale === 'en' ? ' in ' : locale === 'fr' ? ' à ' : locale === 'es' ? ' en ' : locale === 'it' ? ' a ' : locale === 'pt' ? ' em ' : ' · ') + name;
}
function isApproved(route: TravelRoute, locale: TravelLocale): boolean {
  // Only publish after written local-language editorial review and a permitted booking path.
  // Every language remains browseable in preview while unapproved pages are noindex.
  if (route.kind === 'keyword' && route.destination && route.category) {
    return approvedCategorySlugs.has(route.category + '/' + route.destination.slug + '/' + locale);
  }
  if (route.kind === 'destination' && route.destination) {
    return approvedDestinationSlugs.has(route.destination.slug + '/' + locale);
  }
  return false;
}
export function travelPageMetadata(locale: TravelLocale, parts: string[] = []): Metadata {
  const route = resolveTravelRoute(parts);
  if (!route) return { title: 'Not found', robots: { index: false } };
  const t = travelText(locale);
  const isFlagship = route.kind === 'keyword' && route.destination?.slug === 'istanbul' && route.category === 'hotels' && (locale === 'fr' || locale === 'en');
  const featureGuide = (locale === 'fr' || locale === 'en') ? featuredCityGuide(route.destination?.slug) : undefined;
  const isFeaturedHotelGuide = Boolean(featureGuide && route.kind === 'keyword' && route.category === 'hotels');
  const isFeaturedDestinationGuide = Boolean(featureGuide && route.kind === 'destination');
  const pageTitle = route.kind === 'hotel' && route.hotel
    ? route.hotel.name + (locale === 'fr' ? ' : guide de séjour à Istanbul' : ' : Istanbul stay guide')
    : isFlagship
    ? locale === 'fr' ? 'Meilleurs hôtels de luxe à Istanbul : Bosphore, palaces et quartiers' : 'Best luxury hotels in Istanbul: Bosphorus, palaces and neighbourhoods'
    : isFeaturedHotelGuide && featureGuide
    ? (featureGuide.slug==='courchevel-1850' ? (locale==='fr'?'Courchevel 1850 : quatre palaces et hôtels de luxe':'Courchevel 1850: Four Exceptional Alpine Palaces') : featureGuide.slug==='mustique' ? (locale==='fr'?'Mustique : un hôtel et trois villas privées':'Mustique: One Hotel and Three Luxury Villas') : featureGuide.slug==='porto-cervo' ? (locale==='fr'?'Hôtels de luxe à Porto Cervo : 4 adresses d’exception':'Luxury Hotels in Porto Cervo: Four Curated Sardinian Retreats') : featureGuide.slug==='saint-barthelemy' ? (locale==='fr'?'Hôtels de luxe à Saint-Barth : 4 adresses d’exception':'Luxury Hotels in St Barth: Four Curated Island Retreats') : featureGuide.slug==='los-cabos' ? (locale==='fr' ? 'Hôtels de luxe à Los Cabos : 4 resorts d’exception' : 'Luxury Hotels in Los Cabos: Four Exceptional Resorts') : featureGuide.slug==='maldives' ? (locale==='fr' ? 'Hôtels de luxe aux Maldives : notre sélection d’îles privées et de villas' : 'Luxury Hotels in the Maldives: Curated Private Islands & Villas') : featureGuide.slug==='koh-samui' ? (locale==='fr' ? 'Hôtels de luxe à Koh Samui : notre sélection d’adresses d’exception' : 'Luxury Hotels in Koh Samui: Our Curated Island Collection') : (locale === 'fr' ? 'Hôtels de luxe à ' + featureGuide.name + ' : sélection et quartiers' : 'Luxury hotels in ' + featureGuide.name + ': curated guide and locations'))
    : isFeaturedDestinationGuide && featureGuide
    ? (featureGuide.slug==='courchevel-1850' ? (locale==='fr'?'Courchevel 1850 : hôtels de luxe, ski et Jardin Alpin':'Courchevel 1850: Luxury Hotels, Skiing & Jardin Alpin') : featureGuide.slug==='mustique' ? (locale==='fr'?'Mustique : hôtel, villas privées et plages':'Mustique: Hotel, Villas and Private Beaches') : featureGuide.slug==='porto-cervo' ? (locale==='fr'?'Porto Cervo : hôtels de luxe, plages et marina':'Porto Cervo: Luxury Hotels, Sardinian Beaches & Marina') : featureGuide.slug==='saint-barthelemy' ? (locale==='fr'?'Saint-Barth : plages, hôtels de luxe et criques':'St Barth: Luxury Hotels, Beaches and Island Guide') : featureGuide.slug==='los-cabos' ? (locale==='fr'?'Los Cabos : plages, hôtels de luxe et désert de Baja':'Los Cabos: Baja Beaches, Desert Luxury & Private Resorts') : featureGuide.slug==='maldives' ? (locale==='fr'?'Maldives : atolls, hôtels de luxe et îles privées':'Maldives: Luxury Atolls, Private Islands & Resorts') : (locale === 'fr' ? featureGuide.name + ' : où séjourner, hôtels et expériences de luxe' : featureGuide.name + ': luxury stays, neighbourhoods and experiences'))
    : route.kind === 'keyword' && route.category && route.destination
    ? heading(locale, route.category, route.destination.name)
    : route.kind === 'destination' && route.destination ? route.destination.name + ' — Luxury stays'
    : route.kind === 'category' && route.category ? travelKeywordTitles[route.category][locale]
    : route.kind === 'directory' ? t.destinations
    : route.kind === 'last-minute' ? t.lastMinute
    : route.kind === 'private-collection' ? t.privateCollection
    : 'Bosphoras Luxury Stays';
  const canonical = ORIGIN + travelHref(locale, route.slug);
  const specificEditorial = route.destination ? travelEditorial[route.destination.slug] : undefined;
  const localizedIntro = locale === 'fr' ? specificEditorial?.frIntro : locale === 'en' ? specificEditorial?.enIntro : undefined;
  const description = route.kind === 'hotel' && route.hotel
    ? (locale === 'fr' ? route.hotel.fr : route.hotel.en).slice(0, 160)
    : isFlagship
    ? locale === 'fr'
      ? 'Guide indépendant des meilleurs hôtels de luxe à Istanbul : Bosphore, quartiers, palaces, vues, neuf adresses à comparer et conseils avant réservation.'
      : 'An independent guide to luxury hotels in Istanbul: Bosphorus views, historic palaces, neighbourhoods, nine hotel profiles and practical booking advice.'
    : (isFeaturedHotelGuide || isFeaturedDestinationGuide) && featureGuide
    ? (featureGuide.slug==='porto-cervo' ? (locale==='fr'?'Cala di Volpe, Romazzino Belmond, Pitrizza et Cervo Hotel : quatre belles adresses, criques et conseils pour la Costa Smeralda.':'Explore Cala di Volpe, Romazzino Belmond, Pitrizza and Cervo Hotel: four curated Sardinian stays, hidden coves and Porto Cervo tips.') : featureGuide.slug==='saint-barthelemy' ? (locale==='fr'?'Cheval Blanc, Eden Rock, Le Toiny et Rosewood Le Guanahani : découvrez notre sélection à Saint-Barth, ses plages et nos conseils locaux.':'Explore Cheval Blanc, Eden Rock, Le Toiny and Rosewood Le Guanahani: our St Barth hotel collection, best beaches and island tips.') : featureGuide.slug==='los-cabos' ? (locale==='fr'?'Découvrez One&Only Palmilla, Waldorf Astoria Pedregal, Las Ventanas et Zadún : notre sélection de luxe et conseils de plages à Los Cabos.':'Explore One&Only Palmilla, Waldorf Astoria Pedregal, Las Ventanas and Zadún: curated Los Cabos luxury resorts, swimming beaches and Baja tips.') : featureGuide.slug==='maldives' ? (locale==='fr' ? 'Quatre hôtels de luxe aux Maldives : Soneva Jani, Cheval Blanc, One&Only et Four Seasons. Comparez atolls, villas sur l’eau et îles privées.' : 'Discover four exceptional Maldives luxury resorts. Compare private islands, overwater villas, seaplane transfers and the best atolls for your stay.') : featureGuide.slug==='koh-samui' ? (locale==='fr' ? 'Découvrez nos quatre hôtels de luxe à Koh Samui : villas privées, plages confidentielles, spas et conseils pour choisir la bonne côte.' : 'Explore four luxury hotels in Koh Samui: private pool villas, secluded beaches, wellness retreats and a curated island guide.') : (locale === 'fr' ? (isFeaturedHotelGuide ? featureGuide.hotelIntroFr : featureGuide.introFr) : (isFeaturedHotelGuide ? featureGuide.hotelIntroEn : featureGuide.introEn))).slice(0, 160)
    : localizedIntro
    ? (pageTitle + '. ' + localizedIntro).slice(0, 160)
    : (route.destination ? pageTitle + '. ' + t.value + ' ' + t.approach : t.slogan + ' ' + t.value).slice(0, 160);
  const ready = isApproved(route, locale);
  const languageAlternates = ready
    ? Object.fromEntries(travelLocaleCodes.filter((code) => isApproved(route, code)).map((code) => [travelText(code).hreflang, ORIGIN + travelHref(code, route.slug)]))
    : {};
  return {
    title: pageTitle + ' | Bosphoras Luxury Stays',
    description,
    alternates: { canonical, ...(Object.keys(languageAlternates).length ? { languages: languageAlternates } : {}) },
    openGraph: { title: pageTitle, description: (featureGuide?.slug === 'st-moritz'||featureGuide?.slug==='aspen'||featureGuide?.slug==='niseko'||featureGuide?.slug==='megeve'||featureGuide?.slug==='jackson-hole'||featureGuide?.slug==='big-sky'||featureGuide?.slug==='val-disere'||featureGuide?.slug==='verbier'||featureGuide?.slug==='gstaad'||featureGuide?.slug==='zermatt'||featureGuide?.slug==='monaco'||featureGuide?.slug==='saint-jean-cap-ferrat'||featureGuide?.slug==='cap-dantibes'||featureGuide?.slug==='lake-como'||featureGuide?.slug==='capri'||featureGuide?.slug==='positano'||featureGuide?.slug==='ravello'||featureGuide?.slug==='mykonos'||featureGuide?.slug==='antiparos'||featureGuide?.slug === 'koh-samui'||featureGuide?.slug==='maldives'||featureGuide?.slug==='los-cabos'||featureGuide?.slug==='saint-barthelemy'||featureGuide?.slug==='porto-cervo') ? description : t.value, url: canonical, siteName: 'Bosphoras Luxury Stays', type: 'website' },
    robots: { index: ready, follow: true, 'max-image-preview': 'large' },
  };
}
function Header({ locale, slug, limitedLocales = false }: { locale: TravelLocale; slug: string; limitedLocales?: boolean }) {
  const t = travelText(locale);
  return <header className="bg-[#0d1a23] text-[#faf6e9] border-b border-[#c5a56a]/30">
    <div className="mx-auto max-w-7xl px-5 py-5 flex flex-wrap gap-5 items-center justify-between">
      <Link href={travelHref(locale)} className="tracking-[0.20em] text-sm sm:text-base font-semibold uppercase">
        BOSPHORAS <span className="text-[#cdb37b]">LUXURY STAYS</span>
      </Link>
      <nav aria-label="Travel primary navigation" className="flex gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap items-center">
        <Link href={travelHref(locale,'destinations')} className="hover:text-[#e7c78a]">{t.destinations}</Link>
        <Link href={travelHref(locale,'last-minute')} className="hover:text-[#e7c78a]">{t.lastMinute}</Link>
        <Link href={travelHref(locale,'private-collection')} className="hover:text-[#e7c78a]">{t.privateCollection}</Link>
      </nav>
    </div>
    <nav aria-label="Travel categories" className="mx-auto max-w-7xl px-5 pb-4 flex gap-6 overflow-x-auto whitespace-nowrap text-xs sm:text-sm">
      {travelCategories.map(category => <Link key={category} className="hover:text-[#e7c78a] shrink-0" href={travelHref(locale,category)}>{travelKeywordTitles[category][locale]}</Link>)}
    </nav>
    <nav aria-label="Travel language versions" className="mx-auto max-w-7xl px-5 pb-4 flex flex-wrap gap-x-3 gap-y-2 text-xs">
      {travelLocaleCodes.filter(code => !limitedLocales || code === 'fr' || code === 'en').map(code => <Link key={code} href={travelHref(code,slug)} className={code === locale ? 'text-[#f0cb8e] underline underline-offset-4' : 'text-[#b6c3c5] hover:text-white'} lang={travelText(code).hreflang} hrefLang={travelText(code).hreflang}>{code === 'pt' ? 'PT-BR' : code.toUpperCase()}</Link>)}
    </nav>
  </header>;
}
function Footer({ locale }: { locale: TravelLocale }) {
  const t = travelText(locale);
  return <footer className="bg-[#0d1a23] text-[#eee5d8] mt-20">
    <div className="mx-auto max-w-7xl px-5 py-12 grid gap-8 md:grid-cols-3 text-sm">
      <section><p className="font-semibold tracking-[0.17em] uppercase">Bosphoras Luxury Stays</p><p className="text-[#cdb37b] mt-3">{t.slogan}</p><p className="text-[#bac5c8] mt-3">{t.value}</p></section>
      <nav aria-label="Travel collections"><p className="font-semibold mb-3">{t.collections}</p><div className="grid gap-2">{travelCategories.map(category => <Link key={category} href={travelHref(locale,category)}>{travelKeywordTitles[category][locale]}</Link>)}</div></nav>
      <section><p className="font-semibold mb-3">{t.booking}</p><p className="text-[#bac5c8]">{t.draft}</p><p className="mt-4"><Link className="underline" href="/mentions-legales">Mentions légales</Link> · <Link className="underline" href="/confidentialite">Confidentialité</Link></p></section>
    </div>
    <p className="border-t border-white/10 py-5 px-5 text-center text-xs text-[#9aa9ad]">© Bosphoras · The World, Through Local Eyes</p>
  </footer>;
}
function DestCard({ locale, destination, category }: { locale: TravelLocale; destination: TravelDestination; category?: TravelCategory }) {
  const href = category ? travelHref(locale,category + '/' + destination.slug) : travelHref(locale,'destinations/' + destination.slug);
  const city = featuredCityGuide(destination.slug);
  const hero = city?.photos[city.hero];
  return <Link href={href} className="group overflow-hidden bg-white border border-[#e8e0d1] rounded-sm hover:border-[#b7955d] transition-colors min-h-[150px] flex flex-col justify-between">
    {hero && <div className="relative aspect-[16/9] overflow-hidden bg-[#c8d2d0]">
      <Image src={hero.src} alt={locale === 'fr' ? hero.fr : hero.en} fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 430px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
    </div>}
    <div className="flex flex-1 flex-col justify-between p-5">
      <div><p className="text-xs uppercase tracking-wider text-[#a17d48]">{destination.country}</p>
        <h3 className="font-serif text-2xl text-[#1d2c39] mt-3">{destination.name}</h3></div>
      <span className="text-sm text-[#687887] group-hover:text-[#8b6837] mt-4">{travelText(locale).explore} →</span>
    </div>
  </Link>;
}
function DestinationGrid({ locale, destinations, category }: { locale: TravelLocale; destinations: TravelDestination[]; category?: TravelCategory }) {
  return <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
    {destinations.map(d => <DestCard key={d.slug} destination={d} locale={locale} category={category}/>)}
  </div>;
}
type TravelCrumb = { label: string; slug: string };
function travelCrumbs(locale: TravelLocale, route: TravelRoute): TravelCrumb[] {
  const t = travelText(locale);
  if (route.kind === 'home') return [];
  if (route.kind === 'hotel' && route.hotel) return [
    { label: travelKeywordTitles.hotels[locale], slug: 'hotels' },
    { label: locale === 'fr' ? 'Hôtels à Istanbul' : 'Hotels in Istanbul', slug: 'hotels/istanbul' },
    { label: route.hotel.name, slug: route.slug }
  ];
  if (route.kind === 'destination' && route.destination)
    return [{ label: t.destinations, slug: 'destinations' }, { label: route.destination.name, slug: route.slug }];
  if (route.kind === 'keyword' && route.category && route.destination)
    return [
      { label: travelKeywordTitles[route.category][locale], slug: route.category },
      { label: heading(locale, route.category, route.destination.name), slug: route.slug }
    ];
  if (route.kind === 'category' && route.category)
    return [{ label: travelKeywordTitles[route.category][locale], slug: route.slug }];
  return [{ label: route.kind === 'directory' ? t.destinations : route.kind === 'last-minute' ? t.lastMinute : t.privateCollection, slug: route.slug }];
}
function BreadCrumb({ locale, items }: { locale: TravelLocale; items: TravelCrumb[] }) {
  return <nav aria-label="Breadcrumb" className="text-xs text-[#63717c] mb-8 flex flex-wrap gap-2">
    <Link href={travelHref(locale)}>Travel</Link>{items.map(item => <span key={item.slug}> / <Link className="hover:underline" href={travelHref(locale,item.slug)}>{item.label}</Link></span>)}
  </nav>;
}
function Schema({ locale, route }: { locale: TravelLocale; route: TravelRoute }) {
  const pathname = travelHref(locale, route.slug);
  const base = ORIGIN + pathname;
  const crumbs = travelCrumbs(locale, route);
  const isIstanbulGuide = route.kind === 'keyword'
    && route.destination?.slug === 'istanbul'
    && route.category === 'hotels'
    && (locale === 'fr' || locale === 'en');
  const kohGuide = ((locale==='fr'||locale==='en') && (route.kind==='destination'||(route.kind==='keyword' && route.category==='hotels'))) ? featuredCityGuide(route.destination?.slug) : undefined;
  const isKohSamui = kohGuide?.slug==='koh-samui' && (locale==='fr'||locale==='en');
  const isMaldives = kohGuide?.slug==='maldives' && (locale==='fr'||locale==='en');
  const isLosCabos = kohGuide?.slug==='los-cabos' && (locale==='fr'||locale==='en');
  const isSaintBarth = kohGuide?.slug==='saint-barthelemy' && (locale==='fr'||locale==='en');
  const isCourchevel = kohGuide?.slug==='courchevel-1850' && (locale==='fr'||locale==='en');
  const isMustique = kohGuide?.slug==='mustique' && (locale==='fr'||locale==='en');
  const isMonaco = kohGuide?.slug==='monaco' && (locale==='fr'||locale==='en');
  const isCapFerrat = kohGuide?.slug==='saint-jean-cap-ferrat' && (locale==='fr'||locale==='en');
  const isCapDAntibes = kohGuide?.slug==='cap-dantibes' && (locale==='fr'||locale==='en');
  const isLakeComo = kohGuide?.slug==='lake-como' && (locale==='fr'||locale==='en');
  const isCapri = kohGuide?.slug==='capri' && (locale==='fr'||locale==='en');
  const isPositano = kohGuide?.slug==='positano' && (locale==='fr'||locale==='en');
  const isRavello = kohGuide?.slug==='ravello' && (locale==='fr'||locale==='en');
  const isMykonos = kohGuide?.slug==='mykonos' && (locale==='fr'||locale==='en');
  const isAntiparos = kohGuide?.slug==='antiparos' && (locale==='fr'||locale==='en');
  const isAlpine = Boolean(kohGuide && Object.prototype.hasOwnProperty.call(alpineAvailablePhotoPathsByCity,kohGuide.slug));
  const alpineFaq = kohGuide?.slug==='st-moritz'?stMoritzDraftFaq:kohGuide?.slug==='aspen'?aspenDraftFaq:kohGuide?.slug==='megeve'?megeveDraftFaq:kohGuide?.slug==='jackson-hole'?jacksonHoleDraftFaq:kohGuide?.slug==='big-sky'?bigSkyDraftFaq:kohGuide?.slug==='val-disere'?valDisereDraftFaq:kohGuide?.slug==='verbier'?verbierDraftFaq:kohGuide?.slug==='gstaad'?gstaadDraftFaq:kohGuide?.slug==='zermatt'?zermattDraftFaq:kohGuide?.slug==='monaco'?monacoDraftFaq:kohGuide?.slug==='saint-jean-cap-ferrat'?saintJeanCapFerratDraftFaq:kohGuide?.slug==='cap-dantibes'?capDAntibesDraftFaq:kohGuide?.slug==='lake-como'?lakeComoDraftFaq:kohGuide?.slug==='capri'?capriDraftFaq:kohGuide?.slug==='positano'?positanoDraftFaq:kohGuide?.slug==='ravello'?ravelloDraftFaq:kohGuide?.slug==='mykonos'?mykonosDraftFaq:kohGuide?.slug==='antiparos'?antiparosDraftFaq:nisekoDraftFaq;
  const isPortoCervo = kohGuide?.slug==='porto-cervo' && (locale==='fr'||locale==='en');
  // Unapproved alpine hotel and destination photos are excluded from JSON-LD as well as the UI.
  const clearedImageSet = kohGuide?.slug==='monaco' ? confirmedMonacoAssets : kohGuide?.slug==='saint-jean-cap-ferrat' ? confirmedCapFerratAssets : kohGuide?.slug==='cap-dantibes' ? confirmedCapDAntibesAssets : kohGuide?.slug==='lake-como' ? confirmedLakeComoAssets : kohGuide?.slug==='capri' ? confirmedCapriAssets : kohGuide?.slug==='positano' ? confirmedPositanoAssets : kohGuide?.slug==='ravello' ? confirmedRavelloAssets : kohGuide?.slug==='mykonos' ? confirmedMykonosAssets : kohGuide?.slug==='antiparos' ? confirmedAntiparosAssets : kohGuide && Object.prototype.hasOwnProperty.call(alpineAvailablePhotoPathsByCity,kohGuide.slug)
    ? (alpineAvailablePhotoPathsByCity as Record<string, Set<string>>)[kohGuide.slug] : undefined;
  const schemaHeroPhoto = kohGuide ? kohGuide.photos[kohGuide.hero] : undefined;
  const schemaHeroIsCleared = Boolean(schemaHeroPhoto && (!clearedImageSet || clearedImageSet.has(schemaHeroPhoto.src)));
  const node = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': base + '#webpage', url: base, name: route.hotel?.name || route.destination?.name || 'Bosphoras Luxury Stays', inLanguage: travelText(locale).hreflang, isPartOf: { '@type': 'WebSite', name: 'Bosphoras Luxury Stays', url: ORIGIN + '/travel' } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Travel', item: ORIGIN + travelHref(locale) },
        ...crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 2, name: crumb.label, item: ORIGIN + travelHref(locale, crumb.slug) }))
      ] },
      ...(isIstanbulGuide ? [
        {
          '@type': 'Article',
          '@id': base + '#article',
          headline: locale === 'fr' ? 'Hôtels de luxe à Istanbul : neuf adresses, cinq quartiers et conseils de séjour' : 'Luxury hotels in Istanbul: nine addresses, five areas and booking advice',
          description: locale === 'fr' ? 'Guide indépendant pour choisir son hôtel de luxe à Istanbul selon le quartier, les vues et le type de séjour.' : 'Independent luxury hotel guide to Istanbul neighbourhoods, views and different styles of stay.',
          inLanguage: locale,
          mainEntityOfPage: base,
          dateModified: istanbulEditorialSourceDate,
          author: { '@type': 'Organization', name: 'Bosphoras Luxury Stays', url: ORIGIN + '/travel' },
          publisher: { '@type': 'Organization', name: 'Bosphoras Luxury Stays', url: ORIGIN + '/travel' }
        },
        {
          '@type': 'ItemList',
          '@id': base + '#editorial-hotels',
          name: locale === 'fr' ? 'Hôtels étudiés à Istanbul' : 'Istanbul hotels reviewed',
          itemListOrder: 'https://schema.org/ItemListUnordered',
          numberOfItems: istanbulHotels.length,
          itemListElement: istanbulHotels.map((hotel, index) => ({
            '@type': 'ListItem', position: index + 1, name: hotel.name, url: hotel.officialUrl
          }))
        }
      ] : []),
      ...((isKohSamui || isMaldives || isLosCabos || isSaintBarth || isPortoCervo || isMustique || isCourchevel || isAlpine || isMonaco || isCapFerrat || isCapDAntibes || isLakeComo || isCapri || isPositano || isRavello || isMykonos || isAntiparos) && kohGuide ? [
        { '@type':'Article', '@id':base+'#editorial-guide',
          headline:locale==='fr'?((isCapFerrat||isCapDAntibes||isLakeComo||isCapri||isPositano||isRavello||isMykonos||isAntiparos)?kohGuide.headingFr:isAlpine?kohGuide.headingFr:isCourchevel?'Courchevel 1850 : quatre palaces et cinq secteurs':isMustique?'Mustique : un hôtel et trois villas':isPortoCervo?'Porto Cervo : quatre hôtels et cinq façons de séjourner':isSaintBarth?'Saint-Barth : quatre hôtels d’exception et cinq secteurs':isLosCabos?'Hôtels de luxe à Los Cabos : quatre resorts et cinq zones':isMaldives?'Hôtels de luxe aux Maldives : quatre îles et cinq façons de séjourner':'Hôtels de luxe à Koh Samui : quatre adresses et cinq secteurs'):((isCapFerrat||isCapDAntibes||isLakeComo||isCapri||isPositano||isRavello||isMykonos||isAntiparos)?kohGuide.headingEn:isAlpine?kohGuide.headingEn:isCourchevel?'Courchevel 1850: four luxury palaces and five areas':isMustique?'Mustique: one hotel and three private villas':isPortoCervo?'Luxury hotels in Porto Cervo: four stays and five areas':isSaintBarth?'Luxury hotels in St Barth: four island hotels and five areas':isLosCabos?'Luxury hotels in Los Cabos: four resorts and five areas':isMaldives?'Luxury hotels in the Maldives: four resorts and five ways to stay':'Luxury hotels in Koh Samui: four hotels and five areas'),
          description:locale==='fr'?kohGuide.introFr:kohGuide.introEn,
          inLanguage:locale,mainEntityOfPage:base,
          ...(schemaHeroIsCleared && schemaHeroPhoto ? {image:ORIGIN+schemaHeroPhoto.src} : {}),
          author:{'@type':'Organization',name:'Bosphoras Luxury Stays',url:ORIGIN+'/travel'},
          publisher:{'@type':'Organization',name:'Bosphoras Luxury Stays',url:ORIGIN+'/travel'}
        },
        { '@type':'ItemList', '@id':base+'#curated-luxury-hotels',
          name:locale==='fr'?(isLakeComo?'Quatre hôtels d’exception au lac de Côme':isCapri?'Quatre hôtels à Capri et Anacapri':isPositano?'Quatre hôtels de charme à Positano':isRavello?'Quatre palais historiques à Ravello':isMykonos?'Quatre hôtels de luxe à Mykonos':isAntiparos?'Quatre adresses raffinées à Antiparos':isCapDAntibes?'Quatre adresses de séjour sélectionnées au Cap d’Antibes':isCapFerrat?'Quatre adresses de séjour sélectionnées à Saint-Jean-Cap-Ferrat':isAlpine?'Quatre hôtels de luxe sélectionnés à '+kohGuide.name:isCourchevel?'Quatre palaces sélectionnés à Courchevel 1850':isMustique?'Un hôtel et trois villas sélectionnés à Mustique':isPortoCervo?'Quatre hôtels de luxe sélectionnés à Porto Cervo':isSaintBarth?'Quatre hôtels de luxe sélectionnés à Saint-Barth':isLosCabos?'Quatre resorts de luxe sélectionnés à Los Cabos':isMaldives?'Quatre hôtels de luxe sélectionnés aux Maldives':'Quatre hôtels de luxe sélectionnés à Koh Samui'):(isLakeComo?'Four curated Lake Como luxury hotels':isCapri?'Four curated Capri and Anacapri hotels':isPositano?'Four curated Positano hotels':isRavello?'Four historic Ravello hotels':isMykonos?'Four curated Mykonos hotels':isAntiparos?'Four curated Antiparos hotels':isCapDAntibes?'Four curated hotels in Cap d’Antibes':isCapFerrat?'Four curated places to stay in Saint-Jean-Cap-Ferrat':isAlpine?'Four curated luxury hotels in '+kohGuide.name:isCourchevel?'Four curated palaces in Courchevel 1850':isMustique?'One hotel and three selected villas in Mustique':isPortoCervo?'Four curated luxury hotels in Porto Cervo':isSaintBarth?'Four curated luxury hotels in St Barth':isLosCabos?'Four curated luxury resorts in Los Cabos':isMaldives?'Four curated luxury hotels in the Maldives':'Four curated luxury hotels in Koh Samui'),
          numberOfItems:kohGuide.hotels.length,
          itemListElement:kohGuide.hotels.map((hotel,index)=>({
            '@type':'ListItem',position:index+1,name:hotel.name,url:hotel.officialUrl
          }))
        },
        { '@type':'FAQPage', '@id':base+'#faq',
          mainEntity:(isLakeComo?lakeComoDraftFaq:isCapri?capriDraftFaq:isPositano?positanoDraftFaq:isRavello?ravelloDraftFaq:isMykonos?mykonosDraftFaq:isAntiparos?antiparosDraftFaq:isCapDAntibes?capDAntibesDraftFaq:isCapFerrat?saintJeanCapFerratDraftFaq:isMonaco?monacoDraftFaq:isAlpine?alpineFaq:isCourchevel?courchevel1850Faq:isMustique?mustiqueFaq:isPortoCervo?portoCervoFaq:isSaintBarth?saintBarthelemyFaq:isLosCabos?losCabosFaq:isMaldives?maldivesFaq:kohSamuiFaq)[locale as 'fr'|'en'].map(faq=>({
            '@type':'Question',name:faq.q,acceptedAnswer:{'@type':'Answer',text:faq.a}
          }))
        }
      ] : [])
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node).replace(/</g,'\\u003c') }} />;
}
function Approach({ locale, destination, category }: { locale: TravelLocale; destination: TravelDestination; category?: TravelCategory }) {
  const t = travelText(locale);
  const lens = headings[locale];
  const checks = category && locale === 'fr' ? frenchCategoryChecks[category]
    : category && locale === 'en' ? categoryLead[category].checks
    : generalChecksByLocale[locale];
  return <div className="grid md:grid-cols-3 gap-6 mt-10">
    <article className="border-t border-[#b7955d] pt-5">
      <h2 className="font-serif text-2xl mb-3">{lens[0]}</h2>
      <p className="text-[#465968] leading-7">{t.value}</p>
      {locale === 'en' && <p className="mt-4 text-[#465968] leading-7">{travelEditorial[destination.slug]?.enIntro || destination.angle}</p>}
      {locale === 'fr' && travelEditorial[destination.slug] && <p className="mt-4 text-[#465968] leading-7">{travelEditorial[destination.slug].frIntro}</p>}
      <p className="mt-4 text-[#465968] leading-7">{t.approach}</p>
    </article>
    <article className="border-t border-[#b7955d] pt-5">
      <h2 className="font-serif text-2xl mb-3">{lens[1]}</h2>
      <ul className="list-disc list-inside space-y-3 text-[#465968] leading-7">{checks.map(v=><li key={v}>{v}</li>)}</ul>
      {locale === 'en' && travelEditorial[destination.slug] && <p className="mt-5 text-[#465968] leading-7">{travelEditorial[destination.slug].enDetail}</p>}
      {locale === 'fr' && travelEditorial[destination.slug] && <p className="mt-5 text-[#465968] leading-7">{travelEditorial[destination.slug].frDetail}</p>}
    </article>
    <article className="border-t border-[#b7955d] pt-5">
      <h2 className="font-serif text-2xl mb-3">{lens[2]}</h2>
      <p className="text-[#465968] leading-7">{t.draft}</p>
      <p className="mt-4 text-[#465968] leading-7">{t.independent} · {t.booking}</p>
    </article>
  </div>;
}
export function TravelExperiencePage({ locale, parts = [] }: { locale: TravelLocale; parts?: string[] }) {
  const route = resolveTravelRoute(parts);
  if (!route) notFound();
  const t = travelText(locale);
  const regionPairs = Object.keys(travelRegions).map(region => ({
    region, label: travelRegions[region], destinations: travelDestinations.filter(x=>x.region===region)
  })).filter(x=>x.destinations.length);
  const featured = activeDestinations.map(slug=>destinationBySlug.get(slug)).filter((x):x is TravelDestination=>Boolean(x));
  const category = route.category;
  const destination = route.destination;
  const filtered = category ? travelDestinations.filter(d=>d.categories.includes(category)) : [];
  const focus = route.kind === 'keyword' && destination && category
    ? heading(locale,category,destination.name)
    : route.kind === 'destination' && destination ? destination.name
    : route.kind === 'category' && category ? travelKeywordTitles[category][locale]
    : route.kind === 'directory' ? t.destinations
    : route.kind === 'last-minute' ? t.lastMinute
    : route.kind === 'private-collection' ? t.privateCollection
    : 'The World, Through Local Eyes.';
  if (route.kind === 'hotel' && route.hotel) {
    if (locale !== 'fr' && locale !== 'en') notFound();
    return <div lang={t.hreflang} dir="ltr" className="min-h-screen bg-[#f8f5ee]">
      <Schema locale={locale} route={route}/>
      <Header locale={locale} slug={route.slug} limitedLocales/>
      <HotelEditorialDetail hotel={route.hotel} locale={locale}/>
      <Footer locale={locale}/>
    </div>;
  }
  if (route.kind === 'keyword' && destination?.slug === 'istanbul' && category === 'hotels' && (locale === 'fr' || locale === 'en')) {
    return <div lang={t.hreflang} dir="ltr" className="min-h-screen bg-[#f8f5ee]">
      <Schema locale={locale} route={route}/>
      <Header locale={locale} slug={route.slug}/>
      <IstanbulFlagship locale={locale}/>
      <Footer locale={locale}/>
    </div>;
  }
  const selectedCity = featuredCityGuide(destination?.slug);
  if (selectedCity && (locale === 'fr' || locale === 'en') &&
      (route.kind === 'destination' || (route.kind === 'keyword' && category === 'hotels'))) {
    return <div lang={t.hreflang} dir="ltr" className="min-h-screen bg-[#f8f5ee]">
      <Schema locale={locale} route={route}/>
      <Header locale={locale} slug={route.slug} limitedLocales/>
      <FeaturedCityGuide city={selectedCity} locale={locale} variant={route.kind === 'destination' ? 'destination' : 'hotels'}/>
      <Footer locale={locale}/>
    </div>;
  }
  return <div lang={t.hreflang} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-[#f9f7f1] text-[#1c2d39]">
    <Schema locale={locale} route={route}/>
    <Header locale={locale} slug={route.slug}/>
    <main>
      <section className="bg-[#112632] text-[#f8f4e8] px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs tracking-[0.24em] uppercase text-[#d5b883] mb-6">BOSPHORAS · LUXURY STAYS</p>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-tight max-w-5xl">{focus}</h1>
          <p className="max-w-2xl text-lg leading-8 text-[#c8d5d9] mt-8">{t.tagline}</p>
          <p className="max-w-3xl text-sm text-[#aebfc6] mt-5">{t.value}</p>
          {destination && <p className="mt-6 text-sm text-[#e6cc94]">{destination.country} · {travelRegions[destination.region] || destination.region}</p>}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 py-12">
        {route.kind !== 'home' && <BreadCrumb locale={locale} items={travelCrumbs(locale, route)}/>}
        {route.kind === 'home' && <>
          <section className="mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl">{t.collections}</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-8">{travelCategories.map(c=><Link key={c} href={travelHref(locale,c)} className="bg-white border border-[#e3dacb] p-7 hover:border-[#b7955d]">
              <h3 className="font-serif text-2xl">{travelKeywordTitles[c][locale]}</h3><p className="text-sm text-[#647583] mt-4">{categoryLead[c].keyword}</p>
            </Link>)}</div>
          </section>
          <section className="mb-16"><div className="flex items-center justify-between flex-wrap gap-4"><h2 className="font-serif text-3xl sm:text-4xl">{t.destinations}</h2><Link className="underline text-[#83633f]" href={travelHref(locale,'destinations')}>{t.all} →</Link></div><DestinationGrid locale={locale} destinations={featured}/></section>
        </>}
        {route.kind === 'directory' && <div className="space-y-16">{regionPairs.map(group=><section key={group.region}><h2 className="font-serif text-3xl">{group.label}</h2><p className="text-sm text-[#5e6e7b] mt-2">{group.destinations.length} destinations</p><DestinationGrid locale={locale} destinations={group.destinations}/></section>)}</div>}
        {route.kind === 'category' && category && <section>
          <p className="text-sm text-[#677888]">{categoryLead[category].keyword}</p>
          <h2 className="font-serif text-3xl mt-4">{t.destinations}</h2>
          <DestinationGrid locale={locale} destinations={filtered} category={category}/>
        </section>}
        {route.kind === 'destination' && destination && <>
          <section><h2 className="font-serif text-3xl">{t.perspective} · {destination.name}</h2>
          <Approach locale={locale} destination={destination}/>
          <div className="mt-14"><h2 className="font-serif text-3xl">{t.collections}</h2><div className="grid md:grid-cols-3 gap-4 mt-7">
            {destination.categories.map(c=><Link className="border bg-white border-[#e3dacb] hover:border-[#a88c62] p-6" key={c} href={travelHref(locale,c+'/'+destination.slug)}><h3 className="font-serif text-xl">{heading(locale,c,destination.name)}</h3><p className="text-[#637481] text-xs mt-3">{categoryLead[c].keyword}</p></Link>)}
          </div></div></section>
        </>}
        {route.kind === 'keyword' && destination && category && <>
          <section className="max-w-4xl"><h2 className="font-serif text-3xl">{t.how} · {destination.name}</h2>
          <p className="leading-8 mt-5 text-[#435666]">{t.approach}</p>
          {locale === 'en' && <p className="leading-8 mt-5 text-[#435666]">{travelEditorial[destination.slug]?.enIntro || destination.angle}</p>}
          {locale === 'fr' && travelEditorial[destination.slug] && <p className="leading-8 mt-5 text-[#435666]">{travelEditorial[destination.slug].frIntro}</p>}
          {locale === 'en' && travelEditorial[destination.slug] && <p className="leading-8 mt-5 text-[#435666]">{travelEditorial[destination.slug].enDetail}</p>}
          {locale === 'fr' && travelEditorial[destination.slug] && <p className="leading-8 mt-5 text-[#435666]">{travelEditorial[destination.slug].frDetail}</p>}
          <p className="mt-5 text-sm text-[#7b6342]">{categoryLead[category].keyword}</p></section>
          <Approach locale={locale} destination={destination} category={category}/>
          {/* Genuine destination FAQs are held back until locally researched and editorially reviewed.
              Repeating boilerplate Q&A across hundreds of keyword URLs would reduce page quality. */}
        </>}
        {(route.kind === 'last-minute'||route.kind === 'private-collection') && <section className="max-w-4xl">
          <h2 className="font-serif text-3xl">{t.draftTitle}</h2><p className="text-[#536679] leading-8 mt-5">{t.draft}</p>
          <p className="text-[#536679] leading-8 mt-4">{t.value}</p>
          <Link className="inline-block mt-8 border border-[#aa8956] px-5 py-3 hover:bg-white" href={travelHref(locale,'destinations')}>{t.all} →</Link>
        </section>}
        {route.kind !== 'directory' && <section className="mt-20 border-t border-[#e2d6c7] pt-10">
          <h2 className="font-serif text-3xl">{t.explore}</h2>
          <DestinationGrid locale={locale} destinations={featured.filter(d=>d.slug!==destination?.slug).slice(0,6)}/>
        </section>}
      </div>
    </main>
    <Footer locale={locale}/>
  </div>;
}
