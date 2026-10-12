import Image from 'next/image';
import Link from 'next/link';
import { featuredCityGuides, type FeaturedCityGuideData, type FeaturedCityPhoto } from '@/data/travel/featuredCityGuides';
import { travelHref } from '@/lib/travel/i18n';
import { bodrumHotelEditorial, bodrumAreaVisuals } from '@/data/travel/bodrumPremiumEditorial';

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
function BodrumHotelGallery({hotelName,locale,expanded=false}: {hotelName:string;locale:Lang;expanded?:boolean}) {
  const entry=bodrumHotelEditorial[hotelName];
  if(!entry || !entry.photos.length) return null;
  const photos=entry.photos;
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
      {locale==='fr'?'Photographie de l’établissement':'Property photograph'} ·{' '}
      <a href={entry.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{entry.credit}</a>
      
    </figcaption>
  </figure>;
}

function BodrumAreaPhoto({index,locale}: {index:number;locale:Lang}) {
  const photo=bodrumAreaVisuals[index];
  if(!photo)return null;
  return <figure className="mt-5">
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e8dfd0]">
      <Image src={photo.src} alt={locale==='fr'?photo.fr:photo.en} fill
        sizes="(max-width: 768px) 100vw, 360px" className="object-cover" />
    </div>
    <figcaption className="mt-2 text-[11px] leading-5 text-[#66737a]">
      {locale==='fr'?photo.fr:photo.en} ·{' '}
      <a href={photo.sourcePage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{photo.credit}</a>
      {' · '}{locale==='fr'?'Image d’un hôtel du secteur, non une vue générique':'Photo of a local hotel, not a generic area view'}
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
          {guide.slug==='bodrum' && <BodrumHotelGallery hotelName={hotel.name} locale={locale}/>}
          <p className="mt-4 text-sm leading-7 text-[#53636a]">{fr?hotel.fr:hotel.en}</p>
          {guide.slug==='bodrum' && bodrumHotelEditorial[hotel.name] && <p className="mt-4 border-l-2 border-[#bb9867] pl-3 text-xs leading-6 text-[#5d6a71]">
            <strong>{fr?'Pour qui ? ':'Best suited to: '}</strong>
            {fr?bodrumHotelEditorial[hotel.name].frBest:bodrumHotelEditorial[hotel.name].enBest}
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
        {guide.slug==='bodrum' && <BodrumHotelGallery hotelName={hotel.name} locale={locale} expanded />}
        <p className="mt-6 leading-8 text-[#475862]">{fr?hotel.fr:hotel.en}</p>
        {guide.slug==='bodrum' && bodrumHotelEditorial[hotel.name] && <div className="mt-7 border-t border-[#e7dac9] pt-6">
          <h4 className="font-serif text-xl">{fr?'Notre lecture de cette adresse':'Our take on this address'}</h4>
          <p className="mt-4 text-sm leading-8 text-[#51616b]">
            {fr?bodrumHotelEditorial[hotel.name].frStory:bodrumHotelEditorial[hotel.name].enStory}
          </p>
          <p className="mt-5 text-sm leading-7 font-medium text-[#7d603b]">
            {fr?'À privilégier pour : ':'Best for: '}{fr?bodrumHotelEditorial[hotel.name].frBest:bodrumHotelEditorial[hotel.name].enBest}
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
  const hero=city.photos[city.hero],secondary=city.photos[city.secondary];
  const hubHref=travelHref(locale,'destinations/'+city.slug);
  const hotelsHref=travelHref(locale,'hotels/'+city.slug);
  return <main className="min-h-screen bg-[#faf7f0] text-[#182c38]">
    <section className="relative isolate overflow-hidden bg-[#112937] text-[#f8f3e8]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src={hero.src} alt="" fill priority sizes="100vw" className="object-cover" />
        {city.slug === 'bodrum'
          ? <div className="absolute inset-0 bg-gradient-to-r from-[#07171d]/95 via-[#101f24]/72 to-[#142933]/15"/>
          : <div className="absolute inset-0 bg-gradient-to-r from-[#081d28]/95 via-[#081d28]/75 to-[#081d28]/25"/>}
      </div>
      <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-16 sm:pb-40 sm:pt-28">
        <div className={city.slug === 'bodrum' ? 'max-w-[900px] rounded-2xl border border-white/10 bg-[#091c24]/65 px-5 py-7 shadow-2xl backdrop-blur-[3px] sm:px-10 sm:py-9' : ''}>
        <p className="text-xs uppercase tracking-[.25em] text-[#f1cc8f]">Bosphoras · Luxury Stays
          {' / '}{fr?city.eyebrowFr:city.eyebrowEn}</p>
        <h1 className={city.slug === 'bodrum' ? 'mt-9 max-w-4xl font-serif text-4xl leading-tight text-white [text-shadow:0_3px_14px_rgba(0,0,0,0.65)] sm:text-6xl lg:text-7xl' : 'mt-9 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl'}>
          {hotelPage?(fr?'Hôtels de luxe à '+city.name+' : choisir la bonne adresse.':'Luxury hotels in '+city.name+': choose the right address.')
            :(fr?city.headingFr:city.headingEn)}</h1>
        {city.slug==='bodrum' && <p className="mt-4 text-xs text-[#efe0c7]">
          {fr?'Paysage : une crique de la péninsule de Bodrum':'Landscape: a cove on the Bodrum Peninsula'} ·{' '}
          <a href="https://www.luxurytribune.com/en/bulgari-hotels-resorts-opens-a-new-address-in-turkey"
             rel="noopener noreferrer" target="_blank" className="underline underline-offset-2">Luxury Tribune</a>
        </p>}
        <p className={city.slug === 'bodrum' ? 'mt-8 max-w-3xl text-lg leading-8 text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.65)]' : 'mt-8 max-w-3xl text-lg leading-8 text-[#e4e8e5]'}>
          {hotelPage?(fr?city.hotelIntroFr:city.hotelIntroEn):(fr?city.introFr:city.introEn)}</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={hotelPage?'#selection':'#quartiers'} className="bg-[#d9b77b] px-6 py-4 text-sm font-semibold text-[#142734] hover:bg-[#f0d39d]">
            {hotelPage?(fr?'Comparer les quatre adresses':'Compare four hotels'):(fr?'Découvrir les quartiers':'Discover neighbourhoods')} →
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
        <a href={hotelPage?'#selection':'#quartiers'} className="shrink-0 hover:text-[#9e794a]">{hotelPage?(fr?'Les hôtels':'Hotels'):(fr?'Les quartiers':'Areas')}</a>
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
        ?'Une ville, plusieurs façons de séjourner.'
        :'One destination, very different places to stay.'}</h2>
      <p className="mt-6 max-w-4xl text-base leading-8 text-[#50616b]">{fr?city.editorialFr:city.editorialEn}</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {city.areas.map((area,i)=><article key={area.name} className="flex flex-col border border-[#e6ddce] bg-white p-7">
          <p className="font-serif text-3xl text-[#b18f59]">{String(i+1).padStart(2,'0')}</p>
          <h3 className="mt-5 font-serif text-2xl">{fr?area.name:area.enName}</h3>
          {city.slug==='bodrum' && <BodrumAreaPhoto index={i} locale={locale}/>}
          <p className="mt-5 text-sm leading-7 text-[#4c606b]">{fr?area.fr:area.en}</p>
          <p className="mt-auto border-t border-[#e7dfd2] pt-5 text-sm leading-7 text-[#786145]">{fr?area.frWatch:area.enWatch}</p>
        </article>)}
      </div>
    </section>
    <section id="experience" className="scroll-mt-24 bg-[#142d3a] py-16 text-[#f8f3e8] sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <CityPhoto photo={secondary} locale={locale}/>
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
