import Link from 'next/link';
import Image from 'next/image';
import { EditorialHotelCard } from '@/components/travel/EditorialHotelCard';
import { istanbulCityScenes } from '@/data/travel/istanbulCityScenes';
import { istanbulHotels, istanbulDistricts, istanbulFaqs, istanbulJourneys, istanbulEditorialSourceDate } from '@/data/travel/istanbulFlagship';

type Language = 'fr' | 'en';
const anchor = 'scroll-mt-24';

export function IstanbulFlagship({ locale }: { locale: Language }) {
  const fr = locale === 'fr';
  const intro = fr
    ? 'À Istanbul, le vrai luxe commence par une question simple : souhaitez-vous vivre au bord du Bosphore, découvrir la ville à pied ou retrouver le calme d’une grande suite ? Nous comparons les adresses à partir de l’expérience qu’elles permettent, pas seulement de leur nombre d’étoiles.'
    : 'In Istanbul, the right luxury stay begins with a simple question: do you want life beside the Bosphorus, historic sights on foot or the privacy of a generous suite? Our editorial approach starts with the experience, not the number of stars.';
  return <main id="istanbul-luxury-guide" className="bg-[#f8f5ee] text-[#17252d]">
    <section className="relative isolate min-h-[620px] overflow-hidden bg-[#122734] text-[#f8f2e6]">
      {/* Existing site asset. Original image rights must be checked before production reuse. */}
      <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center opacity-70" style={{backgroundImage:"linear-gradient(90deg,rgba(6,20,31,.96) 0%,rgba(6,20,31,.80) 46%,rgba(6,20,31,.25) 100%),url('/images/hero-istanbul.jpg')"}} />
      <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-24 sm:pt-24 sm:pb-36">
        <p className="text-xs uppercase tracking-[0.28em] text-[#e9c78a] mb-8">{fr ? 'Bosphoras · Carnet de voyage' : 'Bosphoras · Destination journal'} / Istanbul</p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
          {fr ? 'Les hôtels de luxe à Istanbul, sans compromis sur le lieu.' : 'Luxury hotels in Istanbul. First, choose the place.'}
        </h1>
        <p className="mt-8 text-lg sm:text-xl leading-8 max-w-2xl text-[#e4e4dd]">{intro}</p>
        <div className="flex flex-wrap gap-3 mt-10">
          <a href="#selection" className="bg-[#d7b77f] hover:bg-[#edd3a7] text-[#142734] px-6 py-4 font-semibold text-sm transition-colors">{fr ? 'Découvrir les neuf adresses' : 'Explore nine notable addresses'} <span aria-hidden="true">↗</span></a>
          <a href="#quartiers" className="border border-[#e4d4ba] hover:bg-white/10 px-6 py-4 text-sm transition-colors">{fr ? 'Choisir son quartier' : 'Choose your neighbourhood'}</a>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 border-t border-white/20 bg-[#0e2330]/70">
        <div className="mx-auto max-w-7xl px-5 py-4 flex flex-wrap justify-between gap-3 text-xs tracking-wide text-[#e9e4da]">
          <span>{fr ? '9 adresses étudiées · 5 quartiers comparés' : '9 researched addresses · 5 areas compared'}</span>
          <span>{fr ? 'Guide éditorial · Réservations partenaires à venir' : 'Editorial guide · Partner bookings to follow'}</span>
        </div>
      </div>
    </section>

    <nav aria-label={fr ? 'Sections du guide d’Istanbul' : 'Istanbul guide sections'} className="sticky top-0 z-20 bg-[#f8f5ee]/95 backdrop-blur border-b border-[#ddd3c2]">
      <div className="mx-auto max-w-7xl px-5 flex gap-7 py-4 text-xs sm:text-sm overflow-x-auto whitespace-nowrap">
        <a className="shrink-0 hover:text-[#926b36]" href="#quartiers">{fr ? 'Les quartiers' : 'Neighbourhoods'}</a>
        <a className="shrink-0 hover:text-[#926b36]" href="#selection">{fr ? 'Les adresses' : 'The addresses'}</a>
        <a className="shrink-0 hover:text-[#926b36]" href="#experience">{fr ? 'Votre type de séjour' : 'Your kind of stay'}</a>
        <a className="shrink-0 hover:text-[#926b36]" href="#conseils">{fr ? 'Les bons réflexes' : 'What to check'}</a>
        <a className="shrink-0 hover:text-[#926b36]" href="#chambres">{fr ? 'Comparer les chambres' : 'Compare room types'}</a>
        <a className="shrink-0 hover:text-[#926b36]" href="#questions">FAQ</a>
      </div>
    </nav>

    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24">
      <div className="grid lg:grid-cols-[1fr,1.15fr] gap-8 lg:gap-20 items-start">
        <div>
          <p className="text-[#9c784a] text-xs font-semibold tracking-[.22em] uppercase mb-5">{fr ? 'Notre parti pris' : 'Our perspective'}</p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight">{fr ? 'Le Bosphore n’est pas seulement une vue. C’est une manière d’habiter la ville.' : 'The Bosphorus is more than a view. It changes how you experience the city.'}</h2>
        </div>
        <div className="space-y-5 text-base sm:text-lg leading-8 text-[#52616a]">
          <p>{fr ? 'Un café devant l’eau, des bateaux qui passent, les silhouettes des palais et les coupoles de la vieille ville : les grands hôtels d’Istanbul offrent des façons très différentes de vivre ces instants.' : 'Coffee beside the water, ferries moving between continents, palaces on the shore and the domes of the old city: Istanbul’s finest stays frame those moments in very different ways.'}</p>
          <p>{fr ? 'À Karaköy, on sort à pied vers les musées et les restaurants. À Çırağan, les jardins et la terrasse deviennent une destination en soi. À Sultanahmet, le privilège consiste à rejoindre les monuments avant la foule. À Nişantaşı, le luxe prend le rythme de la ville contemporaine.' : 'In Karaköy, museums and restaurants are part of the walk. In Çırağan, the terrace and gardens become a destination. In Sultanahmet, the privilege is arriving at historic monuments early. In Nişantaşı, luxury follows a more contemporary urban rhythm.'}</p>
          <p className="font-medium text-[#17252d]">{fr ? 'Notre sélection commence toujours par cette différence.' : 'That distinction comes before any hotel shortlist.'}</p>
        </div>
      </div>
    </section>

    <section id="quartiers" className={anchor + ' bg-[#f0ebe1] py-16 sm:py-24'}>
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl mb-10">
          <p className="text-[#9c784a] text-xs font-semibold tracking-[.22em] uppercase mb-4">{fr ? '01 · Comprendre Istanbul' : '01 · Read the city'}</p>
          <h2 className="font-serif text-4xl sm:text-5xl">{fr ? 'Où dormir à Istanbul ? Les cinq ambiances à comparer.' : 'Where to stay in Istanbul: five different moods.'}</h2>
          <p className="text-[#52616a] leading-7 mt-5">{fr ? 'Avant de comparer les suites, choisissez votre Istanbul. Une distance courte sur la carte ne garantit ni la même atmosphère ni les mêmes temps de trajet.' : 'Before comparing suites, choose your Istanbul. Short map distances do not always mean the same atmosphere or easy journeys.'}</p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {istanbulDistricts.map((d,i)=><article key={d.id} className="bg-[#fbfaf6] p-7 border border-[#ded4c5] flex flex-col gap-5">
            <div className="flex items-start justify-between"><span className="font-serif text-3xl text-[#b39263]">{String(i+1).padStart(2,'0')}</span><span className="text-xs text-[#9c784a] uppercase tracking-wider">Istanbul · Europe</span></div>
            <h3 className="font-serif text-2xl">{d.name}</h3>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#d8d3c8]">
                {d.id === 'sultanahmet' && (
                  <Image src={istanbulCityScenes[d.id].src} alt="" aria-hidden="true"
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 390px"
                    className="scale-110 object-cover opacity-55 blur-lg" />
                )}
                <Image src={istanbulCityScenes[d.id].src} alt={fr ? istanbulCityScenes[d.id].fr : istanbulCityScenes[d.id].en}
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 390px"
                  className={d.id === 'sultanahmet' ? 'object-contain' : 'object-cover'} />
              </div>
              <figcaption className="mt-2 text-[11px] leading-5 text-[#6a7479]">
                <a target="_blank" rel="noopener noreferrer" href={istanbulCityScenes[d.id].sourcePage}
                  className="underline underline-offset-2">{istanbulCityScenes[d.id].author}</a>
                {' · '}
                <a target="_blank" rel="noopener noreferrer" href={istanbulCityScenes[d.id].licenseUrl}
                  className="underline underline-offset-2">{istanbulCityScenes[d.id].license}</a>
                {' · WebP'}
              </figcaption>
            </figure>
            <p className="text-[#52616a] leading-7">{fr?d.fr:d.en}</p>
            <p className="mt-auto border-t border-[#e5dfd6] pt-4 text-sm font-medium text-[#8b683e]">{fr?d.frTip:d.enTip}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section id="selection" className={anchor + ' mx-auto max-w-7xl px-5 py-16 sm:py-24'}>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
        <div className="max-w-3xl">
          <p className="text-[#9c784a] text-xs font-semibold tracking-[.22em] uppercase mb-4">{fr ? '02 · Les adresses' : '02 · The shortlist'}</p>
          <h2 className="font-serif text-4xl sm:text-5xl">{fr ? 'Neuf hôtels remarquables. Neuf raisons de les envisager.' : 'Nine remarkable hotels, nine distinct reasons to consider them.'}</h2>
        </div>
        <p className="max-w-sm text-[#637077] text-sm leading-6">{fr ? 'Sélection éditoriale fondée sur les informations des établissements. Ce n’est ni un classement ni une liste d’offres réservables sur Bosphoras.' : 'An editorial shortlist grounded in the operators’ own information, not a ranking or a list of hotels already bookable with Bosphoras.'}</p>
      </div>
      <div className="space-y-4">
        {istanbulHotels.map((hotel,i)=><EditorialHotelCard key={hotel.id} hotel={hotel} index={i} locale={locale}/>)}
      </div>
      <p className="text-[#647078] text-sm leading-6 mt-7">{fr ? 'Les neuf fiches incluent des galeries locales et des vues de quartier documentées. Les prix et disponibilités ne seront affichés qu’après validation du partenaire de réservation.' : 'All nine profiles include locally stored hotel galleries and documented neighbourhood photography. Rates and availability will appear only after booking-partner verification.'}</p>
    </section>

    <section id="experience" className={anchor + ' bg-[#142d39] text-[#f8f2e6] py-16 sm:py-24'}>
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-[#d2b786] text-xs font-semibold tracking-[.22em] uppercase mb-4">{fr?'03 · Composer son séjour':'03 · Shape your stay'}</p>
        <h2 className="font-serif text-4xl sm:text-5xl max-w-4xl">{fr ? 'Trois façons de vivre Istanbul, sans multiplier les étapes.' : 'Three ways to experience Istanbul, without overplanning.'}</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-11">
          {istanbulJourneys.map((journey,i)=><article key={i} className="border-t border-[#bb9a64] pt-7">
            <p className="font-serif text-3xl text-[#d2b786]">{String(i+1).padStart(2,'0')}</p>
            <h3 className="font-serif text-2xl mt-4">{fr?journey.frTitle:journey.enTitle}</h3>
            <p className="text-[#c8d5d7] leading-7 mt-4">{fr?journey.fr:journey.en}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section id="conseils" className={anchor + ' mx-auto max-w-7xl px-5 py-16 sm:py-24'}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <p className="text-[#9c784a] text-xs font-semibold tracking-[.22em] uppercase mb-4">{fr ? '04 · Bien réserver' : '04 · Book thoughtfully'}</p>
          <h2 className="font-serif text-4xl sm:text-5xl">{fr ? 'Une vue exceptionnelle se réserve, elle ne se suppose pas.' : 'A remarkable view must be booked, not assumed.'}</h2>
          <p className="mt-6 text-[#55656c] leading-8">{fr ? 'À Istanbul, le mot “Bosphorus” dans le nom d’un hôtel ne décrit pas automatiquement la chambre achetée. Sur plusieurs adresses, les vues ville, cour, jardin et détroit coexistent. La nuance change l’expérience.' : 'In Istanbul, “Bosphorus” in a hotel name does not automatically describe the room you have purchased. City, garden, courtyard and strait views can coexist in the same property. This detail changes the experience.'}</p>
        </div>
        <div className="bg-[#f0ebe1] p-7 sm:p-10">
          <h3 className="font-serif text-2xl">{fr ? 'La liste à vérifier avant de payer' : 'A practical pre-booking checklist'}</h3>
          <ul className="list-none mt-6 space-y-4 text-[#46565f] leading-7">
            {(fr ? [
              'Catégorie exacte, étage et orientation réelle de la chambre.',
              'Balcon ou terrasse privative, si c’est votre priorité.',
              'Superficie et configuration : suite ouverte ou chambres séparées.',
              'Accueil des enfants, chambres communicantes et sécurité de la piscine.',
              'Conditions de paiement, annulation, taxes et petits déjeuners.',
              'Transferts depuis IST ou SAW et temps de trajet réalistes.'
            ] : [
              'Exact room category, floor and orientation.',
              'Whether a balcony or private terrace is actually included.',
              'Layout: an open-plan suite versus separate bedrooms.',
              'Children’s policies, connecting rooms and pool safety.',
              'Payment, cancellation, taxes and breakfast inclusions.',
              'Transfers from IST or SAW and realistic journey planning.'
            ]).map(x=><li key={x} className="flex gap-3"><span aria-hidden="true" className="text-[#9c784a]">◆</span><span>{x}</span></li>)}
          </ul>
        </div>
      </div>
    </section>


    <section id="chambres" className={anchor + ' bg-[#f0ebe1] py-16 sm:py-24'}>
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-[#9c784a] text-xs font-semibold tracking-[.22em] uppercase mb-4">{fr ? '05 · Décrypter les catégories' : '05 · Understand room categories'}</p>
        <h2 className="font-serif text-4xl sm:text-5xl max-w-4xl">{fr ? 'Un même palace. Deux chambres. Deux Istanbul.' : 'One landmark hotel. Two rooms. Two different Istanbul experiences.'}</h2>
        <p className="text-[#53636d] leading-8 mt-7 max-w-4xl">{fr
          ? 'Le Peninsula Istanbul illustre parfaitement pourquoi il ne suffit pas de rechercher « hôtel Bosphore » : le nom et l’emplacement de l’établissement ne garantissent pas l’orientation de la chambre. Voici deux catégories décrites sur son site officiel, à titre d’exemple — sans indication de tarif ou de disponibilité.'
          : 'The Peninsula Istanbul shows why searching for a “Bosphorus hotel” is not enough: the hotel name and waterfront address do not guarantee the room’s orientation. Below are two room categories documented on its official website, presented as examples without prices or availability claims.'}</p>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <article className="border border-[#d8cdbc] bg-[#fcfaf5] p-7 sm:p-9">
            <p className="text-[#956f3e] text-xs font-semibold uppercase tracking-[.17em]">{fr ? 'Choix 1 · Le quartier en perspective' : 'Option 1 · Neighbourhood outlook'}</p>
            <h3 className="font-serif text-3xl mt-4">Grand Deluxe Room</h3>
            <p className="mt-4 text-[#425663] leading-7">{fr ? '57 à 80 m² selon le bâtiment et la chambre. La catégorie indiquée sur le site officiel est « City View » : elle regarde le quartier de Karaköy, et non le Bosphore.' : '57–80 m² depending on the building and room. The official category is described as “City View”, overlooking Karaköy rather than the Bosphorus.'}</p>
            <p className="mt-4 text-sm text-[#8f6938] font-semibold">{fr ? 'Ce que l’on achète : l’espace et la ville, pas une vue mer.' : 'What you are choosing: space and the city, not a strait-facing view.'}</p>
            <a href="https://www.peninsula.com/en/istanbul/luxury-hotel-room-suite-types/grand-deluxe-room" target="_blank" rel="noopener noreferrer" className="inline-block underline underline-offset-4 text-[#896538] mt-6 text-sm font-medium">{fr ? 'Vérifier la chambre sur le site officiel' : 'Verify the room on the official website'} ↗</a>
          </article>
          <article className="border border-[#bd9e6e] bg-white p-7 sm:p-9">
            <p className="text-[#956f3e] text-xs font-semibold uppercase tracking-[.17em]">{fr ? 'Choix 2 · La terrasse face au détroit' : 'Option 2 · A balcony facing the strait'}</p>
            <h3 className="font-serif text-3xl mt-4">Deluxe Bosphorus Suite with Balcony</h3>
            <p className="mt-4 text-[#425663] leading-7">{fr ? 'Une suite annoncée à 118 m², avec un balcon privé de 15 m² donnant sur le Bosphore, selon la description officielle. C’est une expérience très différente, davantage tournée vers le temps passé dans la suite et sa vue.' : 'A 118 m² suite with a 15 m² private balcony overlooking the Bosphorus, according to the official description. This is a different experience, designed around time spent in the suite and its outlook.'}</p>
            <p className="mt-4 text-sm text-[#8f6938] font-semibold">{fr ? 'Ce que l’on réserve : une catégorie explicitement décrite avec balcon et vue Bosphore.' : 'What to book: a category explicitly described with both balcony and Bosphorus view.'}</p>
            <a href="https://www.peninsula.com/en/istanbul/luxury-hotel-room-suite-types/deluxe-bosphorus-suite-with-balcony" target="_blank" rel="noopener noreferrer" className="inline-block underline underline-offset-4 text-[#896538] mt-6 text-sm font-medium">{fr ? 'Vérifier la suite sur le site officiel' : 'Verify the suite on the official website'} ↗</a>
          </article>
        </div>
        <p className="text-sm leading-7 text-[#53636d] mt-7">{fr ? 'Ces descriptions ne remplacent jamais la confirmation de la catégorie, des inclusions et des conditions en vigueur au moment de réserver.' : 'These descriptions never replace confirmation of the booked category, inclusions and prevailing terms at the time of purchase.'}</p>
      </div>
    </section>

    <section id="questions" className={anchor + ' bg-[#f0ebe1] py-16 sm:py-24'}>
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-[#9c784a] text-xs font-semibold tracking-[.22em] uppercase mb-4">{fr ? '06 · Questions utiles' : '06 · Helpful answers'}</p>
        <h2 className="font-serif text-4xl sm:text-5xl mb-10">{fr ? 'Avant de choisir votre hôtel à Istanbul' : 'Before choosing your Istanbul hotel'}</h2>
        <div className="divide-y divide-[#d7cbbc] border-y border-[#d7cbbc]">
          {istanbulFaqs.map((faq,i)=><details key={i} className="group py-6">
            <summary className="cursor-pointer list-none flex justify-between items-start gap-6 font-serif text-xl sm:text-2xl marker:hidden">{fr?faq.qFr:faq.qEn}<span aria-hidden="true" className="font-sans text-lg text-[#a8824a] group-open:rotate-45 transition-transform">+</span></summary>
            <p className="text-[#53616c] leading-7 max-w-3xl mt-4">{fr?faq.aFr:faq.aEn}</p>
          </details>)}
        </div>
      </div>
    </section>

    <section className="bg-[#142d39] px-5 py-16 sm:py-20 text-center text-[#f8f2e6]">
      <p className="tracking-[.24em] uppercase text-[#d5b984] text-xs mb-5">Bosphoras Luxury Stays</p>
      <h2 className="font-serif text-3xl sm:text-5xl max-w-4xl mx-auto">{fr ? 'La bonne adresse change toute la façon de découvrir Istanbul.' : 'The right address changes the way you experience Istanbul.'}</h2>
      <p className="max-w-2xl mx-auto mt-6 leading-7 text-[#c8d5d7]">{fr ? 'Nous préparons les offres partenaires et la réservation directe auprès des fournisseurs. En attendant, les sites officiels mentionnés dans ce guide permettent de vérifier les caractéristiques actuelles des établissements.' : 'We are preparing partner inventory and supplier-powered booking. For now, the hotels’ official websites in this guide provide the relevant property information.'}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a href="#selection" className="bg-[#d7b77f] text-[#142734] px-6 py-3 text-sm font-semibold">{fr?'Revoir les adresses':'Review the shortlist'}</a>
        <Link href={fr?'/travel/destinations/istanbul':'/en/travel/destinations/istanbul'} className="border border-[#d7b77f] text-[#f8f2e6] px-6 py-3 text-sm">{fr?'Explorer Istanbul':'Explore Istanbul'}</Link>
      </div>
    </section>

    <p className="max-w-7xl mx-auto px-5 py-6 text-xs text-[#647078] leading-6">
      {fr ? 'Note éditoriale : informations hôtelières recoupées sur les sites officiels au ' : 'Editorial note: hotel information checked against official operator websites on '}
      <time dateTime={istanbulEditorialSourceDate}>{fr ? '12 octobre 2026' : '12 October 2026'}</time>.
      {' '}{fr ? 'Aucune visite personnelle, exclusivité, disponibilité ni partenariat de réservation n’est revendiqué dans cette page.' : 'No personal inspection, exclusivity, availability or booking partnership is claimed on this page.'}
    </p>
  </main>;
}
