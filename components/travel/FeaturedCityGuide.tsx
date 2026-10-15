import Image from 'next/image';
import type { BodrumHotelEditorial } from '@/data/travel/bodrumPremiumEditorial';
import { alpineHotelEditorialByCity,alpineAreaVisualsByCity,alpineAvailablePhotoPathsByCity } from '@/data/travel/alpinePremiumEditorial';
import { stMoritzDraftFaq } from '@/data/travel/stMoritzDraftFaq';
import { aspenDraftFaq } from '@/data/travel/aspenDraftFaq';
import { nisekoDraftFaq } from '@/data/travel/nisekoDraftFaq';
import { megeveDraftFaq } from '@/data/travel/megeveDraftFaq';
import { jacksonHoleDraftFaq } from '@/data/travel/jacksonHoleDraftFaq';
import { bigSkyDraftFaq } from '@/data/travel/bigSkyDraftFaq';
import { valDisereDraftFaq } from '@/data/travel/valDisereDraftFaq';
import { verbierDraftFaq } from '@/data/travel/verbierDraftFaq';
import Link from 'next/link';
import { featuredCityGuides, type FeaturedCityGuideData, type FeaturedCityPhoto } from '@/data/travel/featuredCityGuides';
import { travelHref } from '@/lib/travel/i18n';
import { bodrumHotelEditorial, bodrumAreaVisuals } from '@/data/travel/bodrumPremiumEditorial';
import { antalyaHotelEditorial, antalyaAreaVisuals } from '@/data/travel/antalyaPremiumEditorial';
import { dubaiHotelEditorial, dubaiAreaVisuals } from '@/data/travel/dubaiPremiumEditorial';
import { parisHotelEditorial, parisAreaVisuals } from '@/data/travel/parisPremiumEditorial';
import { saintTropezHotelEditorial, saintTropezAreaVisuals } from '@/data/travel/saintTropezPremiumEditorial';
import { baliHotelEditorial, baliAreaVisuals } from '@/data/travel/baliPremiumEditorial';
import { phuketHotelEditorial, phuketAreaVisuals } from '@/data/travel/phuketPremiumEditorial';
import { kohSamuiHotelEditorial, kohSamuiAreaVisuals } from '@/data/travel/kohSamuiPremiumEditorial';
import { kohSamuiFaq } from '@/data/travel/kohSamuiFaq';
import { maldivesHotelEditorial, maldivesAreaVisuals } from '@/data/travel/maldivesPremiumEditorial';
import { maldivesFaq } from '@/data/travel/maldivesFaq';
import { losCabosFaq } from '@/data/travel/losCabosFaq';
import { saintBarthelemyFaq } from '@/data/travel/saintBarthelemyFaq';
import { courchevel1850Faq } from '@/data/travel/courchevel1850Faq';
import { courchevel1850HotelEditorial, courchevel1850AreaVisuals } from '@/data/travel/courchevel1850PremiumEditorial';
import courchevel1850HotelManifest from '@/data/travel/courchevel1850PremiumImageSources.json';
import courchevel1850DestinationManifest from '@/data/travel/courchevel1850DestinationImageSources.json';
import { mustiqueHotelEditorial, mustiqueAreaVisuals } from '@/data/travel/mustiquePremiumEditorial';
import mustiqueHotelManifest from '@/data/travel/mustiquePremiumImageSources.json';
import mustiqueDestinationManifest from '@/data/travel/mustiqueDestinationImageSources.json';
import { mustiqueFaq } from '@/data/travel/mustiqueFaq';
import { portoCervoFaq } from '@/data/travel/portoCervoFaq';
import { portoCervoHotelEditorial, portoCervoAreaVisuals } from '@/data/travel/portoCervoPremiumEditorial';
import portoCervoHotelManifest from '@/data/travel/portoCervoPremiumImageSources.json';
import portoCervoDestinationManifest from '@/data/travel/portoCervoDestinationImageSources.json';
import { losCabosHotelEditorial, losCabosAreaVisuals } from '@/data/travel/losCabosPremiumEditorial';
import { saintBarthelemyHotelEditorial, saintBarthelemyAreaVisuals } from '@/data/travel/saintBarthelemyPremiumEditorial';
import saintBarthelemyHotelManifest from '@/data/travel/saintBarthelemyPremiumImageSources.json';
import saintBarthelemyDestinationManifest from '@/data/travel/saintBarthelemyDestinationImageSources.json';
import losCabosHotelManifest from '@/data/travel/losCabosPremiumImageSources.json';
import losCabosDestinationManifest from '@/data/travel/losCabosDestinationImageSources.json';
import maldivesHotelManifest from '@/data/travel/maldivesPremiumImageSources.json';
import maldivesDestinationManifest from '@/data/travel/maldivesDestinationImageSources.json';
import kohSamuiHotelManifest from '@/data/travel/kohSamuiPremiumImageSources.json';
import kohSamuiDestinationManifest from '@/data/travel/kohSamuiDestinationImageSources.json';
import phuketPhotoManifest from '@/data/travel/phuketPremiumImageSources.json';
import baliPhotoManifest from '@/data/travel/baliPremiumImageSources.json';
import saintTropezPhotoManifest from '@/data/travel/saintTropezPremiumImageSources.json';
import parisPhotoManifest from '@/data/travel/parisPremiumImageSources.json';
import dubaiPhotoManifest from '@/data/travel/dubaiPremiumImageSources.json';
const hotelEditorialByCity:Record<FeaturedCityGuideData['slug'],Record<string,BodrumHotelEditorial>>={bodrum:bodrumHotelEditorial,antalya:antalyaHotelEditorial,dubai:dubaiHotelEditorial,paris:parisHotelEditorial,'saint-tropez':saintTropezHotelEditorial,bali:baliHotelEditorial,phuket:phuketHotelEditorial,'koh-samui':kohSamuiHotelEditorial,maldives:maldivesHotelEditorial,'los-cabos':losCabosHotelEditorial,'saint-barthelemy':saintBarthelemyHotelEditorial,'porto-cervo':portoCervoHotelEditorial, mustique:mustiqueHotelEditorial,'courchevel-1850':courchevel1850HotelEditorial, ...alpineHotelEditorialByCity};
const confirmedDubaiAssets=new Set(dubaiPhotoManifest.items.filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedParisAssets=new Set(parisPhotoManifest.items.filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedSaintTropezAssets=new Set(saintTropezPhotoManifest.items.filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedBaliAssets=new Set(baliPhotoManifest.items.filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedPhuketAssets=new Set(phuketPhotoManifest.items.filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedKohSamuiAssets=new Set([...kohSamuiHotelManifest.items,...kohSamuiDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedMaldivesAssets=new Set([...maldivesHotelManifest.items,...maldivesDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedLosCabosAssets=new Set([...losCabosHotelManifest.items,...losCabosDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedSaintBarthelemyAssets=new Set([...saintBarthelemyHotelManifest.items,...saintBarthelemyDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedCourchevelAssets=new Set([...courchevel1850HotelManifest.items,...courchevel1850DestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedMustiqueAssets=new Set([...mustiqueHotelManifest.items,...mustiqueDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));
const confirmedPortoCervoAssets=new Set([...portoCervoHotelManifest.items,...portoCervoDestinationManifest.items].filter(photo=>photo.status==='downloaded').map(photo=>photo.localPath));

const isAlpineCity=(slug:FeaturedCityGuideData['slug']):slug is keyof typeof alpineAvailablePhotoPathsByCity => Object.prototype.hasOwnProperty.call(alpineAvailablePhotoPathsByCity,slug);
const alpineFaqByCity={'st-moritz':stMoritzDraftFaq,aspen:aspenDraftFaq,niseko:nisekoDraftFaq,megeve:megeveDraftFaq,'jackson-hole':jacksonHoleDraftFaq,'big-sky':bigSkyDraftFaq,'val-disere':valDisereDraftFaq,verbier:verbierDraftFaq} as const;
type Lang = 'fr' | 'en';
type Variant = 'destination' | 'hotels';

function Caption({ photo, locale }: {photo:FeaturedCityPhoto;locale:Lang}) {
  return <figcaption className="mt-3 text-xs leading-5 text-[#66737a]">
    {locale === 'fr' ? photo.fr : photo.en}
    {' · '}
    <a href={photo.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{photo.author}</a>
    {' · '}
    <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{photo.license}</a>
    {' · '}{locale === 'fr' ? 'Image optimisée en WebP' : 'Optimised WebP photo'}
  </figcaption>;
}
function CityPhoto({photo,locale,priority=false}: {photo:FeaturedCityPhoto;locale:Lang;priority?:boolean}) {
  return <figure className="min-w-0">
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e0d8c9]">
      <Image src={photo.src} alt={locale === 'fr' ? photo.fr : photo.en} fill priority={priority}
        sizes="(max-width: 1024px) 100vw, 700px" className="object-cover" />
    </div>
    <Caption photo={photo} locale={locale} />
  </figure>;
}


/** The photo must depict THIS hotel. No implied room view, booking inventory or verified photo rights. */
function PremiumHotelGallery({hotelName,city,locale,expanded=false}: {hotelName:string;city:FeaturedCityGuideData['slug'];locale:Lang;expanded?:boolean}) {
  const entry=hotelEditorialByCity[city][hotelName];
  if(!entry || !entry.photos.length) return null;
  const photos=city==='dubai' ? entry.photos.filter(photo=>confirmedDubaiAssets.has(photo.src)) : city==='paris' ? entry.photos.filter(photo=>confirmedParisAssets.has(photo.src)) : city==='saint-tropez' ? entry.photos.filter(photo=>confirmedSaintTropezAssets.has(photo.src)) : city==='bali' ? entry.photos.filter(photo=>confirmedBaliAssets.has(photo.src)) : city==='phuket' ? entry.photos.filter(photo=>confirmedPhuketAssets.has(photo.src)) : city==='koh-samui' ? entry.photos.filter(photo=>confirmedKohSamuiAssets.has(photo.src)) : city==='maldives' ? entry.photos.filter(photo=>confirmedMaldivesAssets.has(photo.src)) : city==='los-cabos' ? entry.photos.filter(photo=>confirmedLosCabosAssets.has(photo.src)) : city==='saint-barthelemy' ? entry.photos.filter(photo=>confirmedSaintBarthelemyAssets.has(photo.src)) : city==='porto-cervo' ? entry.photos.filter(photo=>confirmedPortoCervoAssets.has(photo.src)) : city==='mustique' ? entry.photos.filter(photo=>confirmedMustiqueAssets.has(photo.src)) : city==='courchevel-1850' ? entry.photos.filter(photo=>confirmedCourchevelAssets.has(photo.src)) : isAlpineCity(city) ? entry.photos.filter(photo=>alpineAvailablePhotoPathsByCity[city].has(photo.src)) : entry.photos;
  if(!photos.length) return null;
  const first=photos[0];
  return <figure className="mt-5">
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e8dfd0]">
      <Image src={first.src} alt={locale==='fr'?first.fr:first.en} fill
        sizes="(max-width: 768px) 100vw, 620px" className="object-cover"/>
    </div>
    {expanded && photos.length>1 && <div className="mt-2 grid grid-cols-2 gap-2">
      {photos.slice(1,3).map(photo=><div key={photo.src} className="relative aspect-[16/10] overflow-hidden bg-[#e8dfd0]">
        <Image src={photo.src} alt={locale==='fr'?photo.fr:photo.en} fill
          sizes="(max-width: 768px) 50vw, 300px" className="object-cover" />
      </div>)}
    </div>}
    <figcaption className="mt-3 text-xs leading-5 text-[#68747b]">
      <span className="block">{locale==='fr'?first.fr:first.en} ·{' '}
        <a href={first.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{first.credit}</a>
      </span>
      {expanded && photos.slice(1,3).map(photo=><span key={photo.src} className="block">
        {locale==='fr'?photo.fr:photo.en} ·{' '}
        <a href={photo.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{photo.credit}</a>
      </span>)}
    </figcaption>
  </figure>;
}

function DestinationAreaPhoto({city,index,locale}: {city:FeaturedCityGuideData['slug'];index:number;locale:Lang}) {
  const photo=city==='bodrum' ? bodrumAreaVisuals[index] : city==='antalya' ? antalyaAreaVisuals[index] : city==='dubai' ? dubaiAreaVisuals[index] : city==='paris' ? parisAreaVisuals[index] : city==='saint-tropez' ? saintTropezAreaVisuals[index] : city==='bali' ? baliAreaVisuals[index] : city==='phuket' ? phuketAreaVisuals[index] : city==='koh-samui' ? kohSamuiAreaVisuals[index] : city==='maldives' ? maldivesAreaVisuals[index] : city==='los-cabos' ? losCabosAreaVisuals[index] : city==='saint-barthelemy' ? saintBarthelemyAreaVisuals[index] : city==='courchevel-1850' ? courchevel1850AreaVisuals[index] : city==='mustique' ? mustiqueAreaVisuals[index] : isAlpineCity(city) ? alpineAreaVisualsByCity[city][index] : portoCervoAreaVisuals[index];
  if(!photo || ((city==='koh-samui' && !confirmedKohSamuiAssets.has(photo.src)) || (city==='maldives' && !confirmedMaldivesAssets.has(photo.src)) || (city==='los-cabos' && !confirmedLosCabosAssets.has(photo.src)) || (city==='saint-barthelemy' && !confirmedSaintBarthelemyAssets.has(photo.src)) || (city==='porto-cervo' && !confirmedPortoCervoAssets.has(photo.src)) || (city==='mustique' && !confirmedMustiqueAssets.has(photo.src)) || (city==='courchevel-1850' && !confirmedCourchevelAssets.has(photo.src)) || (isAlpineCity(city) && !alpineAvailablePhotoPathsByCity[city].has(photo.src))))return null;
  return <figure className="mt-5">
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e8dfd0]">
      <Image src={photo.src} alt={locale==='fr'?photo.fr:photo.en} fill
        sizes="(max-width: 768px) 100vw, 360px" className="object-cover" />
    </div>
    <figcaption className="mt-2 text-[11px] leading-5 text-[#66737a]">
      {locale==='fr'?photo.fr:photo.en} ·{' '}
      <a href={photo.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{photo.credit}</a>
      {' · '}{locale==='fr'?'Photographie documentée du secteur':'Documented local-area photograph'}
    </figcaption>
  </figure>;
}

function HotelTeaser({ guide, locale }: {guide:FeaturedCityGuideData;locale:Lang}) {
  const fr=locale==='fr';
  return <section id="adresses" className="scroll-mt-24 bg-[#eae4d9] py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-5">
      <p className="text-[#997447] text-xs font-semibold tracking-[.2em] uppercase">
        {fr?'03 · Notre sélection':'03 · Our shortlist'}</p>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-3xl font-serif text-3xl sm:text-5xl">
          {fr?'Des adresses pour des séjours différents.':'Addresses for different kinds of stays.'}
        </h2>
        <Link href={travelHref(locale,'hotels/'+guide.slug)}
          className="bg-[#142c38] px-5 py-4 text-sm font-semibold text-white hover:bg-[#254755]">
          {fr?'Lire le guide des hôtels':'Explore the hotel guide'} →
        </Link>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {guide.hotels.map((hotel,index)=><article key={hotel.name} className="flex flex-col bg-white p-6">
          <span className="text-xs tracking-[.15em] text-[#9b794b]">{String(index+1).padStart(2,'0')} · {hotel.area}</span>
          <h3 className="mt-4 font-serif text-2xl">{hotel.name}</h3>
          {Boolean(hotelEditorialByCity[guide.slug]) && <PremiumHotelGallery city={guide.slug} hotelName={hotel.name} locale={locale}/>}
          <p className="mt-4 text-sm leading-7 text-[#53636a]">{fr?hotel.fr:hotel.en}</p>
          {Boolean(hotelEditorialByCity[guide.slug]) && hotelEditorialByCity[guide.slug][hotel.name] && <p className="mt-4 border-l-2 border-[#bb9867] pl-3 text-xs leading-6 text-[#5d6a71]">
            <strong>{fr?'Pour qui ? ':'Best suited to: '}</strong>
            {fr?hotelEditorialByCity[guide.slug][hotel.name].frBest:hotelEditorialByCity[guide.slug][hotel.name].enBest}
          </p>}
        </article>)}
      </div>
      <p className="mt-6 text-sm text-[#667078]">
        {fr?'Sélection éditoriale indépendante : aucune disponibilité ni relation de distribution n’est revendiquée.':'Independent editorial shortlist: no availability or supplier partnership is claimed.'}
      </p>
    </div>
  </section>;
}
function HotelSelection({guide,locale}: {guide:FeaturedCityGuideData;locale:Lang}) {
  const fr=locale==='fr';
  return <section id="selection" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:py-24">
    <p className="text-xs uppercase tracking-[.2em] text-[#947048]">{fr?'01 · Les adresses':'01 · The shortlist'}</p>
    <h2 className="mt-4 max-w-4xl font-serif text-3xl sm:text-5xl">{fr
      ? 'Quatre styles, quatre raisons de choisir.'
      : 'Four distinctive reasons to stay.'}</h2>
    <p className="mt-6 max-w-3xl text-base leading-8 text-[#52616b]">{fr?guide.hotelIntroFr:guide.hotelIntroEn}</p>
    <div className="mt-9 grid gap-5 md:grid-cols-2">
      {guide.hotels.map((hotel,i)=><article key={hotel.name} className="flex flex-col border border-[#e0d5c3] bg-white p-7 sm:p-9">
        <p className="text-xs uppercase tracking-[.14em] text-[#9a7849]">
          {String(i+1).padStart(2,'0')} · {hotel.area}</p>
        <h3 className="mt-4 font-serif text-3xl">{hotel.name}</h3>
        {Boolean(hotelEditorialByCity[guide.slug]) && <PremiumHotelGallery city={guide.slug} hotelName={hotel.name} locale={locale} expanded />}
        <p className="mt-6 leading-8 text-[#475862]">{fr?hotel.fr:hotel.en}</p>
        {Boolean(hotelEditorialByCity[guide.slug]) && hotelEditorialByCity[guide.slug][hotel.name] && <div className="mt-7 border-t border-[#e7dac9] pt-6">
          <h4 className="font-serif text-xl">{fr?'Notre lecture de cette adresse':'Our take on this address'}</h4>
          <p className="mt-4 text-sm leading-8 text-[#51616b]">
            {fr?hotelEditorialByCity[guide.slug][hotel.name].frStory:hotelEditorialByCity[guide.slug][hotel.name].enStory}
          </p>
          <p className="mt-5 text-sm leading-7 font-medium text-[#7d603b]">
            {fr?'À privilégier pour : ':'Best for: '}{fr?hotelEditorialByCity[guide.slug][hotel.name].frBest:hotelEditorialByCity[guide.slug][hotel.name].enBest}
          </p>
        </div>}
        <p className="mt-6 border-l-2 border-[#b18c55] pl-4 text-sm leading-7 text-[#53636c]">
          <strong>{fr?'Avant de réserver : ':'Before booking: '}</strong>{fr?hotel.frWatch:hotel.enWatch}
        </p>
        <a href={hotel.officialUrl} rel="noopener noreferrer" target="_blank"
          className="mt-auto pt-8 text-sm font-semibold text-[#855f2e] underline underline-offset-4">
          {fr?'Consulter le site officiel':'Visit the official hotel website'} ↗
        </a>
      </article>)}
    </div>
    <p className="mt-7 text-sm leading-7 text-[#667078]">{fr
      ? 'Cette sélection ne constitue pas un classement, une offre tarifaire ou une confirmation de réservation.'
      : 'This is neither a ranking, a rate offer nor confirmation of booking availability.'}</p>
  </section>;
}
function Advice({guide,locale}: {guide:FeaturedCityGuideData;locale:Lang}) {
  const fr=locale==='fr';
  return <section id="conseils" className="scroll-mt-24 bg-[#f1ebe0] py-16 sm:py-24">
    <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
      <div>
        <p className="text-xs uppercase tracking-[.2em] text-[#987545]">{fr?'Avant de partir':'Before you travel'}</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl">{fr?'Les détails qui changent l’expérience.':'Details that change the experience.'}</h2>
        <p className="mt-5 leading-8 text-[#52636e]">{fr?guide.editorialFr:guide.editorialEn}</p>
      </div>
      <div className="bg-white p-7 sm:p-10">
        <h3 className="font-serif text-2xl">{fr?'Notre liste de vérification':'Our pre-booking checklist'}</h3>
        <ul className="mt-6 space-y-4">{(fr?guide.checksFr:guide.checksEn).map(item=><li key={item} className="flex gap-3 text-sm leading-7 text-[#435761]">
          <span aria-hidden="true" className="font-semibold text-[#947048]">◆</span><span>{item}</span>
        </li>)}</ul>
        <p className="mt-7 border-t border-[#e7ddd0] pt-5 text-sm leading-7 text-[#596a72]">{fr
          ? 'Les liens des établissements mènent vers leurs informations officielles. Les réservations Bosphoras seront activées uniquement après validation du fournisseur et de la disponibilité réelle.'
          : 'Hotel links lead to official property information. Bosphoras booking will only be enabled after provider approval and verified real-time inventory.'}</p>
      </div>
    </div>
  </section>;
}

export function FeaturedCityGuide({ city, locale, variant }: {city:FeaturedCityGuideData;locale:Lang;variant:Variant}) {
  const fr=locale==='fr',hotelPage=variant==='hotels';
  const destinationAssets=isAlpineCity(city.slug)?alpineAvailablePhotoPathsByCity[city.slug]:city.slug==='courchevel-1850'?confirmedCourchevelAssets:city.slug==='mustique'?confirmedMustiqueAssets:city.slug==='porto-cervo'?confirmedPortoCervoAssets:city.slug==='saint-barthelemy'?confirmedSaintBarthelemyAssets:city.slug==='los-cabos'?confirmedLosCabosAssets:city.slug==='maldives'?confirmedMaldivesAssets:null;
  const hero=(destinationAssets && !destinationAssets.has(city.photos[city.hero].src)) ? (Object.values(city.photos).find(photo=>destinationAssets.has(photo.src)) || city.photos[city.hero]) : city.photos[city.hero];
  const requestedSecondary=city.photos[city.secondary];
  const secondary=(city.slug==='koh-samui' && !confirmedKohSamuiAssets.has(requestedSecondary.src)) ? city.photos['ang-thong'] : (destinationAssets && !destinationAssets.has(requestedSecondary.src)) ? (Object.values(city.photos).find(photo=>destinationAssets.has(photo.src) && photo.src!==hero.src) || hero) : requestedSecondary;
  const hubHref=travelHref(locale,'destinations/'+city.slug);
  const hotelsHref=travelHref(locale,'hotels/'+city.slug);
  return <main className="min-h-screen bg-[#faf7f0] text-[#182c38]">
    <section className="relative isolate overflow-hidden bg-[#112937] text-[#f8f3e8]">
      <div className="absolute inset-0" aria-hidden="true">
        {(destinationAssets ? destinationAssets.has(hero.src) : true) && <Image src={hero.src} alt={fr?hero.fr:hero.en} fill priority sizes="100vw" className="object-cover" />}
        {city.slug === 'bodrum'
          ? <div className="absolute inset-0 bg-gradient-to-r from-[#07171d]/95 via-[#101f24]/72 to-[#142933]/15"/>
          : city.slug === 'antalya'
          ? <div className="absolute inset-0 bg-gradient-to-r from-[#111e25]/80 via-[#1a2730]/35 to-transparent"/>
          : city.slug === 'dubai'
          ? <div className="absolute inset-0 bg-gradient-to-r from-[#0c1d2e]/64 via-[#10283b]/25 to-transparent"/>
          : city.slug === 'paris'
          ? <div className="absolute inset-0 bg-gradient-to-r from-[#1b1c23]/85 via-[#242c33]/55 to-[#3b4144]/10"/>
          : city.slug === 'saint-tropez'
          ? <div className="absolute inset-0 bg-gradient-to-r from-[#081e28]/75 via-[#133244]/32 to-transparent"/>
          : city.slug === 'bali'
          ? <div className="absolute inset-0 bg-gradient-to-r from-[#08252c]/78 via-[#123c3d]/28 to-transparent"/>
          : city.slug === 'phuket'
          ? <div className="absolute inset-0 bg-gradient-to-r from-[#092932]/76 via-[#0f3440]/28 to-transparent"/>
          : city.slug === 'koh-samui'
          ? <div className="absolute inset-0 bg-gradient-to-r from-[#082832]/78 via-[#103944]/28 to-transparent"/>
          : city.slug==='maldives' ? <div className="absolute inset-0 bg-gradient-to-r from-[#082f3a]/77 via-[#10455a]/23 to-transparent"/>
          : city.slug==='los-cabos' ? <div className="absolute inset-0 bg-gradient-to-r from-[#102b3a]/77 via-[#3f534e]/25 to-transparent"/>
          : city.slug==='saint-barthelemy' ? <div className="absolute inset-0 bg-gradient-to-r from-[#122e3f]/76 via-[#1d4a59]/25 to-transparent"/>
          : city.slug==='porto-cervo' ? <div className="absolute inset-0 bg-gradient-to-r from-[#0d3039]/75 via-[#1b6861]/27 to-transparent"/> : <div className="absolute inset-0 bg-gradient-to-r from-[#081d28]/95 via-[#081d28]/75 to-[#081d28]/25"/>}
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-16 sm:pb-40 sm:pt-28">
        <div className={(city.slug === 'bodrum'||city.slug === 'antalya'||city.slug === 'dubai'||city.slug === 'paris'||city.slug === 'saint-tropez'||city.slug === 'bali'||city.slug === 'phuket'||city.slug === 'koh-samui'||city.slug === 'maldives'||city.slug === 'los-cabos'||city.slug === 'saint-barthelemy'||city.slug === 'porto-cervo') ? 'max-w-[900px] rounded-2xl border border-white/10 bg-[#091c24]/65 px-5 py-7 shadow-2xl backdrop-blur-[3px] sm:px-10 sm:py-9' : ''}>
        <p className="text-xs uppercase tracking-[.25em] text-[#f1cc8f]">Bosphoras · Luxury Stays
          {' / '}{fr?city.eyebrowFr:city.eyebrowEn}</p>
        <h1 className={(city.slug === 'bodrum'||city.slug === 'antalya'||city.slug === 'dubai'||city.slug === 'paris'||city.slug === 'saint-tropez'||city.slug === 'bali'||city.slug === 'phuket'||city.slug === 'koh-samui'||city.slug === 'maldives'||city.slug === 'los-cabos'||city.slug === 'saint-barthelemy'||city.slug === 'porto-cervo') ? 'mt-9 max-w-4xl font-serif text-4xl leading-tight text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.65)] sm:text-6xl lg:text-7xl' : 'mt-9 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl'}>
          {hotelPage?(city.slug==='courchevel-1850'?(fr?'Courchevel 1850 : quatre palaces d’exception':'Courchevel 1850: four exceptional alpine palaces'):city.slug==='mustique'?(fr?'Mustique : un hôtel et trois villas de luxe':'Mustique: one hotel and three luxury villas'):city.slug==='porto-cervo'?(fr?'Hôtels de luxe à Porto Cervo : nos quatre adresses iconiques':'Luxury hotels in Porto Cervo: four iconic Sardinian stays'):city.slug==='saint-barthelemy'?(fr?'Hôtels de luxe à Saint-Barth : quatre adresses iconiques':'Luxury hotels in St Barth: four iconic island stays'):city.slug==='los-cabos'?(fr?'Hôtels de luxe à Los Cabos : quatre resorts d’exception':'Luxury hotels in Los Cabos: four exceptional resorts'):city.slug==='maldives'?(fr?'Hôtels de luxe aux Maldives : villas et îles privées d’exception':'Luxury hotels in the Maldives: exceptional private islands and villas'):city.slug==='koh-samui'?(fr?'Hôtels de luxe à Koh Samui : notre sélection d’adresses d’exception':'Luxury hotels in Koh Samui: our curated island collection'):(fr?'Hôtels de luxe à '+city.name+' : choisir la bonne adresse.':'Luxury hotels in '+city.name+': choose the right address.'))
            :(fr?city.headingFr:city.headingEn)}</h1>
        {(city.slug==='bodrum'||city.slug==='antalya'||city.slug==='dubai'||city.slug==='paris'||city.slug==='saint-tropez'||city.slug==='bali'||city.slug==='phuket'||city.slug==='koh-samui'||city.slug==='maldives'||city.slug==='los-cabos'||city.slug==='saint-barthelemy'||city.slug==='porto-cervo'||city.slug==='mustique'||city.slug==='courchevel-1850') && <p className="mt-4 text-xs text-[#efe0c7]">
          {city.slug==='bodrum'?(fr?'Paysage : une crique de la péninsule de Bodrum':'Landscape: a Bodrum Peninsula cove')
            :city.slug==='antalya'?(fr?'Illustration IA inspirée d’Antalya · Vue artistique, non photographique':'AI illustration inspired by Antalya · Artistic view, not a photograph')
            :city.slug==='dubai'?(fr?'Palm West Beach · plage et skyline dans la lumière dorée':'Palm West Beach · sunny beachfront and golden skyline')
            :city.slug==='paris'?(fr?'La Seine, le Louvre et le pont des Arts · photographie de Paris':'The Seine, the Louvre and Pont des Arts · genuine Paris photograph')
            :city.slug==='saint-tropez'?(fr?'Saint-Tropez · village et Vieux-Port vus du ciel':'Saint-Tropez · aerial view of the village and Old Port')
            :city.slug==='bali'?(fr?'Bali · falaises ensoleillées d’Uluwatu et océan Indien':'Bali · sunlit Uluwatu cliffs and the Indian Ocean')
            :city.slug==='phuket'?(fr?'Phuket · plage de Kata Noi et eaux turquoise de l’Andaman':'Phuket · Kata Noi beach and turquoise Andaman Sea')
            :city.slug==='porto-cervo'?(fr?'Porto Cervo · marina et baies de la Costa Smeralda':'Porto Cervo · marina and Emerald Coast coves'):city.slug==='saint-barthelemy'?(fr?'Saint-Barth · port de Gustavia et mer des Caraïbes':'St Barth · Gustavia harbour and Caribbean Sea'):city.slug==='los-cabos'?(fr?'Los Cabos · El Arco et la côte de Baja':'Los Cabos · El Arco on the Baja coast'):city.slug==='maldives'?(fr?'Maldives · lagon corallien de l’océan Indien':'Maldives · Indian Ocean coral lagoon'):(fr?'Koh Samui · rivage tropical du golfe de Thaïlande':'Koh Samui · tropical Gulf of Thailand coast')} ·{' '}
          {city.slug==='antalya' ? <span>{hero.author}</span>
            : <a href={hero.sourcePage} rel="noopener noreferrer" target="_blank" className="underline underline-offset-2">{hero.author}</a>}
        </p>}
        <p className={(city.slug === 'bodrum'||city.slug === 'antalya'||city.slug === 'dubai'||city.slug === 'paris'||city.slug === 'saint-tropez'||city.slug === 'bali'||city.slug === 'phuket'||city.slug === 'koh-samui'||city.slug === 'maldives'||city.slug === 'los-cabos'||city.slug === 'saint-barthelemy'||city.slug === 'porto-cervo') ? 'mt-8 max-w-3xl text-lg leading-8 text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.65)]' : 'mt-8 max-w-3xl text-lg leading-8 text-[#e4e8e5]'}>
          {hotelPage?(fr?city.hotelIntroFr:city.hotelIntroEn):(fr?city.introFr:city.introEn)}</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={hotelPage?'#selection':'#quartiers'} className="bg-[#d9b77b] px-6 py-4 text-sm font-semibold text-[#142734] hover:bg-[#f0d39d]">
            {hotelPage?(city.slug==='mustique'?(fr?'Comparer hôtel et villas':'Compare hotel and villas'):(fr?'Comparer les quatre adresses':'Compare four hotels')):(city.slug==='porto-cervo'?(fr?'Découvrir la Costa Smeralda':'Explore the Emerald Coast'):city.slug==='saint-barthelemy'?(fr?'Choisir son paysage':'Choose your setting'):city.slug==='los-cabos'?(fr?'Découvrir la côte':'Explore the coastline'):city.slug==='maldives'?(fr?'Découvrir les atolls':'Explore the atolls'):(fr?'Découvrir les quartiers':'Discover neighbourhoods'))} →
          </a>
          <Link href={hotelPage?hubHref:hotelsHref} className="border border-white/70 px-6 py-4 text-sm hover:bg-white/10">
            {hotelPage?(fr?'Voir le guide de la ville':'Explore the city guide'):(fr?'Voir les hôtels sélectionnés':'See the selected hotels')}
          </Link>
        </div>
      </div>
      <p className="absolute bottom-0 inset-x-0 bg-[#112734]/80 px-5 py-4 text-center text-xs text-[#e8e0d2]">
        {fr?'Guide indépendant · Aucun prix ni disponibilité en direct à ce stade':'Independent guide · No live rates or availability at this stage'}
      </p>
    </section>
    <nav className="sticky top-0 z-20 border-b border-[#e0d7c8] bg-[#faf7f0]/95 px-5 backdrop-blur" aria-label={fr?'Naviguer dans le guide':'Guide sections'}>
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto py-4 text-xs sm:text-sm">
        <a href={hotelPage?'#selection':'#quartiers'} className="shrink-0 hover:text-[#9e794a]">{hotelPage?(fr?'Les hôtels':'Hotels'):(city.slug==='porto-cervo'?(fr?'Les secteurs':'Areas'):city.slug==='saint-barthelemy'?(fr?'Les lieux':'Places'):city.slug==='los-cabos'?(fr?'Les secteurs':'Areas'):city.slug==='maldives'?(fr?'Les atolls':'Atolls'):(fr?'Les quartiers':'Areas'))}</a>
        <a href="#experience" className="shrink-0 hover:text-[#9e794a]">{fr?'L’expérience':'Experiences'}</a>
        <a href="#conseils" className="shrink-0 hover:text-[#9e794a]">{fr?'Les conseils':'Advice'}</a>
      </div>
    </nav>
    {hotelPage&&<HotelSelection guide={city} locale={locale}/>}
    <section id={hotelPage?'quartiers':'quartiers'} className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#947048]">
        {hotelPage?(fr?'02 · Comprendre la destination':'02 · Read the destination'):(fr?'01 · Choisir son paysage':'01 · Choose your surroundings')}
      </p>
      <h2 className="mt-4 max-w-4xl font-serif text-3xl sm:text-5xl">{fr
        ?city.slug==='porto-cervo'?'Une côte mythique, cinq façons de séjourner.':city.slug==='saint-barthelemy'?'Une île, cinq atmosphères à découvrir.':city.slug==='los-cabos'?'Entre désert et océan, cinq paysages à choisir.':city.slug==='maldives'?'Un archipel, plusieurs façons de vivre le luxe.':'Une ville, plusieurs façons de séjourner.'
        :city.slug==='porto-cervo'?'One legendary coast, five ways to stay.':city.slug==='saint-barthelemy'?'One island, five distinct atmospheres.':city.slug==='los-cabos'?'Five distinctive landscapes between desert and sea.':city.slug==='maldives'?'An archipelago, many ways to experience luxury.':'One destination, very different places to stay.'}</h2>
      <p className="mt-6 max-w-4xl text-base leading-8 text-[#50616b]">{fr?city.editorialFr:city.editorialEn}</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {city.areas.map((area,i)=><article key={area.name} className="flex flex-col border border-[#e6ddce] bg-white p-7">
          <p className="font-serif text-3xl text-[#b18f59]">{String(i+1).padStart(2,'0')}</p>
          <h3 className="mt-5 font-serif text-2xl">{fr?area.name:area.enName}</h3>
          {(city.slug==='bodrum'||city.slug==='antalya'||city.slug==='dubai'||city.slug==='paris'||city.slug==='saint-tropez'||city.slug==='bali'||city.slug==='phuket'||city.slug==='koh-samui'||city.slug==='maldives'||city.slug==='los-cabos'||city.slug==='saint-barthelemy'||city.slug==='porto-cervo'||city.slug==='mustique'||city.slug==='courchevel-1850'||isAlpineCity(city.slug)) && <DestinationAreaPhoto city={city.slug} index={i} locale={locale}/>}
          <p className="mt-5 text-sm leading-7 text-[#4c606b]">{fr?area.fr:area.en}</p>
          <p className="mt-auto border-t border-[#e7dfd2] pt-5 text-sm leading-7 text-[#786145]">{fr?area.frWatch:area.enWatch}</p>
        </article>)}
      </div>
    </section>
    {city.slug==='koh-samui' && <section id="explorer-koh-samui" className="bg-[#f1ece2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs uppercase tracking-[.2em] text-[#9a744a]">{fr?'Plus loin que votre villa':'Beyond your villa'}</p>
        <h2 className="mt-4 max-w-4xl font-serif text-3xl sm:text-5xl">{fr?'Quatre autres façons de découvrir Koh Samui.':'Four more sides of Koh Samui to explore.'}</h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#53646c]">{fr
          ?'Derrière les piscines privées, Koh Samui révèle ses temples, son archipel protégé et des rivages aux ambiances très différentes. Choisissez vos excursions selon la saison, la météo et votre envie de bouger.'
          :'Beyond private pools, Samui reveals temples, protected island scenery and coastlines with very different moods. Choose excursions to suit the season, sea conditions and your pace.'}</p>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {([
            {key:'ang-thong',fr:'L’archipel d’Ang Thong',en:'Ang Thong islands',frDetail:'Sortie en mer à préparer selon la météo et les conditions du parc marin.',enDetail:'Plan a boat excursion around the weather and marine-park conditions.'},
            {key:'big-buddha',fr:'Le temple du Grand Bouddha',en:'Big Buddha temple',frDetail:'Une parenthèse culturelle à découvrir avec une tenue respectueuse du lieu.',enDetail:'A cultural stop best visited with respectful temple attire.'},
            {key:'chaweng-coast',fr:'L’énergie de Chaweng',en:'Lively Chaweng',frDetail:'Une plage plus animée, pour changer du calme des hôtels isolés.',enDetail:'A busier stretch of beach to contrast with secluded resorts.'},
            {key:'silver-beach',fr:'La petite Silver Beach',en:'Small-scale Silver Beach',frDetail:'Une crique à découvrir près de Lamai, selon l’affluence et l’état de la mer.',enDetail:'A pretty small cove near Lamai, best checked for crowds and sea conditions.'}
          ] as const).map(item=><article key={item.key} className="bg-white p-4">
            <CityPhoto photo={city.photos[item.key]} locale={locale}/>
            <h3 className="mt-4 font-serif text-xl text-[#19323e]">{fr?item.fr:item.en}</h3>
            <p className="mt-3 text-sm leading-6 text-[#546772]">{fr?item.frDetail:item.enDetail}</p>
          </article>)}
        </div>
      </div>
    </section>}
    {city.slug==='maldives' && <section id="explorer-maldives" className="bg-[#f1ece2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs uppercase tracking-[.2em] text-[#9a744a]">{fr?'La vie entre deux horizons':'Beyond the horizon'}</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-5xl">{fr?'Depuis le ciel, jusque sous la surface.':'From the sky to life beneath the water.'}</h2>
        <div className="mt-9 grid gap-6 sm:grid-cols-2">
          {([{key:'seaplane',frTitle:'L’arrivée en hydravion',enTitle:'The seaplane arrival',frDetail:'Préparer les correspondances et les horaires de vols de jour.',enDetail:'Plan connections and daylight operating windows.'},{key:'manta-reef',frTitle:'Les raies manta',enTitle:'Manta encounters',frDetail:'Une rencontre avec la nature qui dépend de la saison et ne peut être garantie.',enDetail:'Seasonal wildlife sightings can never be guaranteed.'}] as const).map(item=>confirmedMaldivesAssets.has(city.photos[item.key].src) && <article key={item.key} className="bg-white p-5">
            <CityPhoto photo={city.photos[item.key]} locale={locale}/>
            <h3 className="mt-4 font-serif text-2xl">{fr?item.frTitle:item.enTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-[#53646c]">{fr?item.frDetail:item.enDetail}</p>
          </article>)}
        </div>
      </div>
    </section>}
    {city.slug==='los-cabos' && <section id="explorer-los-cabos" className="bg-[#f1ece2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs uppercase tracking-[.2em] text-[#9a744a]">{fr?'Au-delà des resorts':'Beyond the resorts'}</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-5xl">{fr?'Du désert aux deux mers.':'Desert, cliffs and two seas.'}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {([{key:'el-arco',frTitle:'El Arco',enTitle:'Land’s End',frText:'Naviguer vers les rochers de Cabo San Lucas.',enText:'Private boat trips toward Cabo San Lucas rock arch.'},{key:'cabo-marina',frTitle:'Marina de Cabo',enTitle:'Cabo Marina',frText:'Yachts, restaurants et départs en mer.',enText:'Yachts, dining and the starting point for boat trips.'},{key:'whales',frTitle:'Les baleines',enTitle:'Whale season',frText:'Observation hivernale responsable, sans garantie.',enText:'Responsible winter wildlife trips, without guaranteed sightings.'},{key:'baja-coast',frTitle:'La côte de Baja',enTitle:'The Baja coast',frText:'Rochers et cactus au bord de l’océan.',enText:'Desert cliffs and golden light by the sea.'}] as const).map(item=><article key={item.key} className="bg-white p-4">
            {confirmedLosCabosAssets.has(city.photos[item.key].src) && <CityPhoto photo={city.photos[item.key]} locale={locale}/>}
            <h3 className="mt-4 font-serif text-xl">{fr?item.frTitle:item.enTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-[#53646c]">{fr?item.frText:item.enText}</p>
          </article>)}
        </div>
      </div>
    </section>}
    {city.slug==='saint-barthelemy' && <section id="explorer-saint-barth" className="bg-[#f0e9df] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs uppercase tracking-[.2em] text-[#a37d54]">{fr?'L’île, au-delà des hôtels':'The island, beyond the hotels'}</p>
        <h2 className="mt-4 font-serif text-3xl sm:text-5xl">{fr?'Quatre autres moments à Saint-Barth.':'Four more sides of St Barth.'}</h2>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {([{key:'colombier-bay',frTitle:'Colombier',enTitle:'Colombier Bay',frDetail:'Une crique sauvage à rejoindre en bateau ou à pied selon les parcours autorisés.',enDetail:'A secluded bay reached by boat or an authorised trail.'},{key:'gustavia-aerial',frTitle:'Gustavia',enTitle:'Gustavia harbour',frDetail:'Le port, les terrasses et les ruelles sous les toits rouges.',enDetail:'The harbour, sunset restaurants and red-roofed streets.'},{key:'saline-beach',frTitle:'Grande Saline',enTitle:'Grande Saline beach',frDetail:'Une plage spectaculaire, sans présumer des conditions de baignade.',enDetail:'A wild beach; always check sea conditions.'},{key:'saint-barth-sailing',frTitle:'Voile et criques',enTitle:'Sailing and coves',frDetail:'Une sortie privée adaptée à la houle et aux règles des zones protégées.',enDetail:'Private sailing adjusted to swell and protected-area rules.'}] as const).map(item=><article key={item.key} className="bg-white p-4">
            {confirmedSaintBarthelemyAssets.has(city.photos[item.key].src) && <CityPhoto photo={city.photos[item.key]} locale={locale}/>}
            <h3 className="mt-4 font-serif text-xl">{fr?item.frTitle:item.enTitle}</h3>
            <p className="mt-3 text-sm leading-7 text-[#53646c]">{fr?item.frDetail:item.enDetail}</p>
          </article>)}
        </div>
      </div>
    </section>}
    {city.slug==='porto-cervo' && <section id="explorer-porto-cervo" className="bg-[#f1ece2] py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5">
      <p className="text-xs uppercase tracking-[.2em] text-[#9a744a]">{fr?'Criques et art de vivre':'Coves and the good life'}</p>
      <h2 className="mt-4 font-serif text-3xl sm:text-5xl">{fr?'Quatre autres facettes de Porto Cervo.':'Four more sides of Porto Cervo.'}</h2>
      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {([{key:'porto-cervo-marina',fr:'La marina',en:'The marina',frText:'Une promenade emblématique entre bateaux et maisons pastel.',enText:'An iconic harbour promenade.'},{key:'spiaggia-del-principe',fr:'La plage du Prince',en:'The Prince’s beach',frText:'Une anse à découvrir tôt, après vérification des accès.',enText:'A luminous cove best explored early.'},{key:'capriccioli-beach',fr:'Capriccioli',en:'Capriccioli',frText:'Granite, sable et eaux turquoise.',enText:'Granite, sand and clear sea.'},{key:'sardinia-sailing',fr:'La mer en bateau',en:'Sailing the coast',frText:'Découvrir les baies au rythme de la météo.',enText:'Discover the coastline by boat, weather permitting.'}] as const).map(item=><article key={item.key} className="bg-white p-4">
          {confirmedPortoCervoAssets.has(city.photos[item.key].src) && <CityPhoto photo={city.photos[item.key]} locale={locale}/>}
          <h3 className="mt-4 font-serif text-xl">{fr?item.fr:item.en}</h3>
          <p className="mt-3 text-sm leading-7 text-[#53646c]">{fr?item.frText:item.enText}</p>
        </article>)}
      </div>
    </div></section>}
    <section id="experience" className="scroll-mt-24 bg-[#142d3a] py-16 text-[#f8f3e8] sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {(destinationAssets ? destinationAssets.has(secondary.src) : true) && <CityPhoto photo={secondary} locale={locale}/>}
          <div>
            <p className="text-xs uppercase tracking-[.2em] text-[#d7b77d]">
              {fr?'02 · L’esprit du lieu':'02 · A sense of place'}</p>
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl">{fr
              ?'L’expérience avant le catalogue.':'Experience before inventory.'}</h2>
            <p className="mt-6 text-base leading-8 text-[#d2dcdf]">{fr?city.introFr:city.introEn}</p>
            <p className="mt-5 text-sm leading-7 text-[#bdcccf]">
              {fr?'Cette vue illustre la destination ; elle ne garantit pas la vue depuis un hôtel.'
                :'This is a destination photograph, not a promised view from any hotel.'}</p>
          </div>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {city.experiences.map((experience,i)=><article key={experience.frTitle} className="border-t border-[#bb9b65] pt-6">
            <p className="font-serif text-3xl text-[#d6b47a]">{String(i+1).padStart(2,'0')}</p>
            <h3 className="mt-4 font-serif text-2xl">{fr?experience.frTitle:experience.enTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-[#ccdbdc]">{fr?experience.fr:experience.en}</p>
          </article>)}
        </div>
      </div>
    </section>
    {hotelPage?<section className="mx-auto max-w-7xl px-5 py-12">
      <Link className="text-sm font-semibold text-[#896b3d] underline underline-offset-4" href={hubHref}>
        ← {fr?'Retour au guide complet de la destination':'Back to the complete destination guide'}
      </Link>
    </section>:<HotelTeaser guide={city} locale={locale}/>}
    {(city.slug==='koh-samui'||city.slug==='maldives'||city.slug==='los-cabos'||city.slug==='saint-barthelemy'||city.slug==='porto-cervo'||city.slug==='mustique'||city.slug==='courchevel-1850'||isAlpineCity(city.slug)) && <section id={isAlpineCity(city.slug)?'faq-'+city.slug:city.slug==='courchevel-1850'?'faq-courchevel-1850':city.slug==='mustique'?'faq-mustique':city.slug==='porto-cervo'?'faq-porto-cervo':city.slug==='saint-barthelemy'?'faq-saint-barthelemy':city.slug==='los-cabos'?'faq-los-cabos':city.slug==='maldives'?'faq-maldives':'faq-koh-samui'} className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
      <p className="text-xs uppercase tracking-[.2em] text-[#947048]">{fr?'Questions fréquentes':'Frequently asked questions'}</p>
      <h2 className="mt-4 font-serif text-3xl sm:text-5xl">{isAlpineCity(city.slug)?(fr?'Préparer votre séjour à '+city.name:'Planning your stay in '+city.name):city.slug==='courchevel-1850'?(fr?'Préparer votre séjour à Courchevel 1850':'Plan your stay in Courchevel 1850'):city.slug==='mustique'?(fr?'Préparer votre séjour à Mustique':'Planning your Mustique stay'):city.slug==='porto-cervo'?(fr?'Préparer votre séjour sur la Costa Smeralda':'Planning your Costa Smeralda stay'):city.slug==='saint-barthelemy'?(fr?'Préparer votre voyage à Saint-Barth':'Planning your St Barth stay'):city.slug==='los-cabos'?(fr?'Préparer un séjour de luxe à Los Cabos':'Planning a luxury stay in Los Cabos'):city.slug==='maldives'?(fr?'Préparer votre séjour de luxe aux Maldives':'Planning a luxury stay in the Maldives'):(fr?'Préparer un séjour de luxe à Koh Samui':'Plan a luxury stay in Koh Samui')}</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {(isAlpineCity(city.slug)?alpineFaqByCity[city.slug]:city.slug==='courchevel-1850'?courchevel1850Faq:city.slug==='mustique'?mustiqueFaq:city.slug==='porto-cervo'?portoCervoFaq:city.slug==='saint-barthelemy'?saintBarthelemyFaq:city.slug==='los-cabos'?losCabosFaq:city.slug==='maldives'?maldivesFaq:kohSamuiFaq)[locale].map(item=><article key={item.q} className="border border-[#e5dbcb] bg-white p-7">
          <h3 className="font-serif text-xl text-[#173340]">{item.q}</h3>
          <p className="mt-4 text-sm leading-7 text-[#54666d]">{item.a}</p>
        </article>)}
      </div>
    </section>}
    <Advice guide={city} locale={locale}/>
    <section className="mx-auto max-w-7xl px-5 py-16">
      <h2 className="font-serif text-3xl">{fr?'Continuer votre découverte':'Continue exploring'}</h2>
      <div className="mt-7 grid gap-3 sm:grid-cols-3">
        {Object.values(featuredCityGuides).filter(other=>other.slug!==city.slug).map(other=>
          <Link key={other.slug} href={travelHref(locale,'destinations/'+other.slug)}
            className="border border-[#e4d8c7] bg-white p-6 hover:border-[#bb9964]">
            <span className="text-xs uppercase tracking-[.15em] text-[#9b794b]">Bosphoras · Luxury Stays</span>
            <span className="mt-3 block font-serif text-2xl">{other.name}</span>
            <span className="mt-4 block text-xs text-[#566977]">{fr?'Découvrir la destination':'Explore this destination'} →</span>
          </Link>)}
        <Link href={travelHref(locale,'hotels/istanbul')}
          className="border border-[#e4d8c7] bg-white p-6 hover:border-[#bb9964]">
          <span className="text-xs uppercase tracking-[.15em] text-[#9b794b]">Bosphoras · Luxury Stays</span>
          <span className="mt-3 block font-serif text-2xl">Istanbul</span>
          <span className="mt-4 block text-xs text-[#566977]">{fr?'Les hôtels du Bosphore':'Bosphorus hotel guide'} →</span>
        </Link>
      </div>
    </section>
  </main>;
}
