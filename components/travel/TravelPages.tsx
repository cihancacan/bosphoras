import Link from 'next/link';
import { travelEditorial } from '@/data/travel/editorial';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { destinationBySlug, travelCategories, travelDestinations, travelRegions, approvedDestinationSlugs, approvedCategorySlugs } from '@/data/travel/destinations';
import type { TravelCategory, TravelDestination } from '@/data/travel/destinations';
import { travelHref, travelLocaleCodes, travelKeywordTitles, travelText } from '@/lib/travel/i18n';
import type { TravelLocale } from '@/lib/travel/i18n';

const ORIGIN = 'https://www.bosphoras.com';
const activeDestinations = ['istanbul','bodrum','paris','saint-tropez','dubai','bali','phuket','koh-samui','maldives','los-cabos','saint-barthelemy','porto-cervo','mustique','courchevel-1850','st-moritz','aspen','niseko','costa-careyes'];
const categoryLead: Record<TravelCategory, { keyword: string; checks: string[] }> = {
  hotels: { keyword: 'best hotels · 5 star hotels · luxury resorts · boutique hotels', checks: ['Room category, view and location', 'What is included in the final rate', 'Cancellation conditions and booking provider'] },
  villas: { keyword: 'luxury villas · private pool villas · beachfront villas', checks: ['Pool privacy, bedrooms and access', 'Included housekeeping and staff', 'Deposit, service fees and cancellation'] },
  chalets: { keyword: 'luxury chalets · ski-in ski-out · chalets with pool', checks: ['Actual proximity to lifts and slopes', 'Spa and heated-pool arrangements', 'Transfer and catering inclusions'] },
  yachts: { keyword: 'yacht charter · private yacht rental · boat rental', checks: ['Vessel type, guest limit and itinerary', 'Crew, fuel and port fees', 'Weather policy and operator confirmation'] },
  helicopters: { keyword: 'helicopter tours · private helicopter transfer', checks: ['Tour versus point-to-point transfer', 'Weather and baggage limits', 'Operator, flight approval and refund terms'] },
  'private-jets': { keyword: 'private jet charter · empty leg flights', checks: ['Quoted flight versus confirmed availability', 'Aircraft, operator and airport details', 'Cancellation and repositioning conditions'] }
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

export type TravelRoute = { kind: 'home' | 'directory' | 'destination' | 'category' | 'keyword' | 'last-minute' | 'private-collection'; destination?: TravelDestination; category?: TravelCategory; slug: string };

export function resolveTravelRoute(parts: string[] = []): TravelRoute | null {
  const path = parts.filter(Boolean);
  if (path.length === 0) return { kind: 'home', slug: '' };
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
  const pageTitle = route.kind === 'keyword' && route.category && route.destination
    ? heading(locale, route.category, route.destination.name)
    : route.kind === 'destination' && route.destination ? route.destination.name + ' — Luxury stays'
    : route.kind === 'category' && route.category ? travelKeywordTitles[route.category][locale]
    : route.kind === 'directory' ? t.destinations
    : route.kind === 'last-minute' ? t.lastMinute
    : route.kind === 'private-collection' ? t.privateCollection
    : 'Bosphoras Luxury Stays';
  const canonical = ORIGIN + travelHref(locale, route.slug);
  const ready = isApproved(route, locale);
  const languageAlternates = ready
    ? Object.fromEntries(travelLocaleCodes.filter((code) => isApproved(route, code)).map((code) => [travelText(code).hreflang, ORIGIN + travelHref(code, route.slug)]))
    : {};
  return {
    title: pageTitle + ' | Bosphoras Luxury Stays',
    description: (route.destination
      ? pageTitle + '. ' + t.value + ' ' + t.approach
      : t.slogan + ' ' + t.value).slice(0, 160),
    alternates: { canonical, ...(Object.keys(languageAlternates).length ? { languages: languageAlternates } : {}) },
    openGraph: { title: pageTitle, description: t.value, url: canonical, siteName: 'Bosphoras Luxury Stays', type: 'website' },
    robots: { index: ready, follow: true, 'max-image-preview': 'large' },
  };
}
function Header({ locale, slug }: { locale: TravelLocale; slug: string }) {
  const t = travelText(locale);
  return <header className="bg-[#0d1a23] text-[#faf6e9] border-b border-[#c5a56a]/30">
    <div className="mx-auto max-w-7xl px-5 py-5 flex flex-wrap gap-5 items-center justify-between">
      <Link href={travelHref(locale)} className="tracking-[0.20em] text-sm sm:text-base font-semibold uppercase">
        BOSPHORAS <span className="text-[#cdb37b]">LUXURY STAYS</span>
      </Link>
      <nav aria-label="Travel navigation" className="flex gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap items-center">
        <Link href={travelHref(locale,'destinations')} className="hover:text-[#e7c78a]">{t.destinations}</Link>
        <Link href={travelHref(locale,'hotels')} className="hover:text-[#e7c78a]">{travelKeywordTitles.hotels[locale]}</Link>
        <Link href={travelHref(locale,'villas')} className="hover:text-[#e7c78a]">{travelKeywordTitles.villas[locale]}</Link>
        <Link href={travelHref(locale,'private-collection')} className="hover:text-[#e7c78a]">{t.privateCollection}</Link>
      </nav>
    </div>
    <nav aria-label="Travel language versions" className="mx-auto max-w-7xl px-5 pb-4 flex flex-wrap gap-x-3 gap-y-2 text-xs">
      {travelLocaleCodes.map(code => <Link key={code} href={travelHref(code,slug)} className={code === locale ? 'text-[#f0cb8e] underline underline-offset-4' : 'text-[#b6c3c5] hover:text-white'} lang={travelText(code).hreflang} hrefLang={travelText(code).hreflang}>{code === 'pt' ? 'PT-BR' : code.toUpperCase()}</Link>)}
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
  return <Link href={href} className="group bg-white border border-[#e8e0d1] p-5 rounded-sm hover:border-[#b7955d] transition-colors min-h-[150px] flex flex-col justify-between">
    <div><p className="text-xs uppercase tracking-wider text-[#a17d48]">{destination.country}</p><h3 className="font-serif text-2xl text-[#1d2c39] mt-3">{destination.name}</h3></div>
    <span className="text-sm text-[#687887] group-hover:text-[#8b6837] mt-4">Explore →</span>
  </Link>;
}
function DestinationGrid({ locale, destinations, category }: { locale: TravelLocale; destinations: TravelDestination[]; category?: TravelCategory }) {
  return <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
    {destinations.map(d => <DestCard key={d.slug} destination={d} locale={locale} category={category}/>)}
  </div>;
}
function BreadCrumb({ locale, items }: { locale: TravelLocale; items: {label:string;slug:string}[] }) {
  return <nav aria-label="Breadcrumb" className="text-xs text-[#63717c] mb-8 flex flex-wrap gap-2">
    <Link href={travelHref(locale)}>Travel</Link>{items.map(item => <span key={item.slug}> / <Link className="hover:underline" href={travelHref(locale,item.slug)}>{item.label}</Link></span>)}
  </nav>;
}
function Schema({ locale, route }: { locale: TravelLocale; route: TravelRoute }) {
  const pathname = travelHref(locale, route.slug);
  const base = ORIGIN + pathname;
  const node = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': base + '#webpage', url: base, name: route.destination?.name || 'Bosphoras Luxury Stays', inLanguage: travelText(locale).hreflang, isPartOf: { '@type': 'WebSite', name: 'Bosphoras Luxury Stays', url: ORIGIN + '/travel' } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Travel', item: ORIGIN + travelHref(locale) },
        ...(route.slug ? [{ '@type':'ListItem', position: 2, name: route.destination?.name || route.slug, item: base }] : [])
      ] }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node).replace(/</g,'\\u003c') }} />;
}
function Approach({ locale, destination, category }: { locale: TravelLocale; destination: TravelDestination; category?: TravelCategory }) {
  const t = travelText(locale);
  const lens = headings[locale];
  const checks = category ? categoryLead[category].checks : [
    'Compare location and property character, not just star ratings',
    'Check the room or villa category rather than relying on hero photographs',
    'Understand which company confirms the booking and handles changes'
  ];
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
        {route.kind !== 'home' && <BreadCrumb locale={locale} items={
          destination ? [{label:t.destinations,slug:'destinations'},{label:destination.name,slug:'destinations/'+destination.slug}] :
          [{label:focus,slug:route.slug}]
        }/>}
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
          <section className="mt-16 border-t border-[#e2d6c7] pt-9"><h2 className="font-serif text-3xl">{t.faqs}</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <article><h3 className="font-semibold">{t.how} : {destination.name} ?</h3><p className="text-[#536679] mt-3 leading-7">{t.approach}</p></article>
              <article><h3 className="font-semibold">{t.verify} ?</h3><p className="text-[#536679] mt-3 leading-7">{t.draft}</p></article>
            </div>
          </section>
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
