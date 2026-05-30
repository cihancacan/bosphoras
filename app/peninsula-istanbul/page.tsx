import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Dumbbell, Lock, MapPin, ShieldCheck, Sparkles, Utensils, Waves } from 'lucide-react';
import { buildMetadata, organizationSchema, serviceSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const locale = 'fr' as const;

const img = {
  hero: '/images/vue.penincula.ciel.jpg',
  pool: '/images/Peninsula.pool.andwiew.jpg',
  historic: '/images/peninsula.pool.and.saint-sophie.jpg',
  interior: '/images/peninsula.interior.pool.jpg',
  hammam: '/images/peninsula.hammam.jpg',
  fitness: '/images/peninsula.fitness.jpg',
  lobby: '/images/peninsula.lobby.jpg',
  spa: '/images/waiting.area.spa.jpg',
  abelia: '/images/Abelia.Pool.Bar.jpg',
  logo: '/images/logo.Peninsula.Istanbul.Grey021.svg',
};

const benefits = [
  { icon: Waves, title: 'Spa & Wellness', text: 'Piscine intérieure de 25 mètres, hammams, sauna, vapeur, salles de repos et soins sélectionnés.' },
  { icon: Dumbbell, title: 'Fitness', text: 'Salle de sport premium, cardio et renforcement, accessible selon les horaires de l’établissement.' },
  { icon: Utensils, title: 'Hospitality', text: 'Restaurants, Gallada, rendez-vous privés, moments de représentation et demandes accompagnées.' },
  { icon: Sparkles, title: 'Privilèges membres', text: 'Soins de 90 minutes, cours privés, Abelia Pool, valet et avantages selon disponibilité.' },
];

const rules = [
  'Accès réservé aux membres Bosphoras Premium validés.',
  'Modalités communiquées uniquement dans le cadre de la relation membre.',
  'Coordination assurée par le bureau Bosphoras.',
  'Sous réserve de disponibilité, validation et règles de l’établissement.',
];

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/peninsula-istanbul',
  title: 'Accès Premium Peninsula Istanbul | Bosphoras',
  description: 'Accès premium au Peninsula Istanbul pour les membres Bosphoras Premium : spa, wellness, fitness, hospitality, restaurants, Abelia Pool et coordination privée à Istanbul.',
});

export default function PeninsulaIstanbulPage() {
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={serviceSchema({ name: 'Accès Premium Peninsula Istanbul', description: 'Accès premium coordonné au Peninsula Istanbul pour les membres Bosphoras Premium.', url: 'https://bosphoras.com/peninsula-istanbul' })} />
      <Header locale={locale} currentPath="/peninsula-istanbul" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative overflow-hidden bg-[#121826] pt-28 text-[#fffaf0] md:pt-36">
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(18,24,38,0.94)_0%,rgba(18,24,38,0.78)_42%,rgba(18,24,38,0.34)_100%),url('/images/vue.penincula.ciel.jpg')] bg-cover bg-center" />
          <div className="container-editorial relative z-10 grid min-h-[82vh] items-center gap-12 pb-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <img src={img.logo} alt="The Peninsula Istanbul" className="mb-8 h-8 w-auto opacity-90" />
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.34em] text-[#d2a863]">Bosphoras Premium Members</p>
              <h1 className="max-w-5xl font-serif text-4xl leading-[1.02] tracking-[-0.045em] md:text-6xl lg:text-7xl">Accès premium au Peninsula Istanbul</h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#e7ddcb] md:text-xl md:leading-10">Une adresse choisie pour nos membres : là où le Bosphore rencontre la Corne d’Or, face à la péninsule historique, dans un quartier où Istanbul raconte à chaque pas son passé impérial et son énergie moderne.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/adhesion/demande-membre" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e0bc78]">Demander une adhésion<ArrowRight size={15} /></Link>
                <Link href="/" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863] transition hover:bg-white/5">Retour Bosphoras</Link>
              </div>
            </div>
            <aside className="border border-[#d2a863]/35 bg-[#fffaf0]/10 p-7 backdrop-blur md:p-9">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#d2a863]">Pourquoi cette adresse</p>
              <p className="mt-6 font-serif text-3xl leading-tight text-white">La meilleure vue d’Istanbul n’est pas seulement une vue. C’est une mémoire.</p>
              <p className="mt-5 text-sm leading-7 text-[#e7ddcb]">Depuis Karaköy, le regard traverse les siècles : Galata, les routes marchandes, Byzance, Constantinople, la conquête ottomane et l’Istanbul contemporaine.</p>
            </aside>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Le choix Bosphoras</p><h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Faire partie d’Istanbul, pas seulement y séjourner.</h2></div><div className="space-y-7 text-lg leading-9 text-[#3e4857]"><p>Nous n’avons pas choisi le Peninsula uniquement pour son confort. Nous l’avons choisi parce qu’il se trouve à Karaköy, l’ancienne Galata, face à la péninsule historique, entre la Corne d’Or et le Bosphore.</p><p>Depuis cette rive, on comprend pourquoi Istanbul a attiré les Romains, les Byzantins, les Génois, les Ottomans, les marchands, les ambassadeurs et les puissances du monde. Pour un membre Bosphoras, cette adresse devient un point d’ancrage au cœur d’une histoire vivante.</p></div></div></section>

        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px]"><div className="mb-12 max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6728]">Expérience membre</p><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Wellness, fitness, hospitality et accès privés.</h2></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{benefits.map((item) => { const Icon = item.icon; return <article key={item.title} className="border border-[#d8c7a1] bg-white p-7 shadow-[0_18px_55px_rgba(16,24,39,0.045)]"><Icon className="h-8 w-8 text-[#8a6728]" strokeWidth={1.35} /><h3 className="mt-8 font-serif text-3xl text-[#121826]">{item.title}</h3><p className="mt-5 text-sm leading-7 text-[#3e4857]">{item.text}</p></article>; })}</div></div></section>

        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] overflow-hidden border border-[#d8c7a1] bg-[#121826] text-[#fffaf0] lg:grid-cols-[1.05fr_0.95fr]"><div className="p-8 md:p-12 lg:p-16"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Cadre membre</p><h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Un privilège intégré à l’expérience Bosphoras Premium.</h2><div className="mt-8 grid gap-3 text-sm leading-7 text-[#f3e4c7] sm:grid-cols-2">{rules.map((rule) => <div key={rule} className="border border-[#d2a863]/25 p-4"><ShieldCheck className="mb-4 h-5 w-5 text-[#d2a863]" strokeWidth={1.35} /><p>{rule}</p></div>)}</div></div><div className="min-h-[420px] bg-[linear-gradient(135deg,rgba(18,24,38,0.15),rgba(18,24,38,0.65)),url('/images/peninsula.interior.pool.jpg')] bg-cover bg-center" /></div></section>

        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px]"><div className="mb-12 max-w-4xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6728]">Galerie privée</p><h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-6xl">L’adresse principale des membres Bosphoras à Istanbul.</h2></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[{src:img.pool,title:'Vue Bosphore & piscine'},{src:img.historic,title:'Péninsule historique'},{src:img.hammam,title:'Hammam & rituels'},{src:img.fitness,title:'Fitness premium'},{src:img.spa,title:'Salon spa'},{src:img.abelia,title:'Abelia Pool Bar'},{src:img.lobby,title:'Lobby & hospitality'},{src:img.interior,title:'Piscine intérieure'}].map((image) => <figure key={image.src} className="group overflow-hidden border border-[#d8c7a1] bg-white shadow-[0_18px_55px_rgba(16,24,39,0.045)]"><div className="aspect-[4/5] overflow-hidden"><img src={image.src} alt={image.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><figcaption className="p-5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#8a6728]">{image.title}</figcaption></figure>)}</div></div></section>

        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-3"><article className="border border-[#d8c7a1] bg-white p-8"><MapPin className="mb-8 h-8 w-8 text-[#8a6728]" strokeWidth={1.35} /><h3 className="font-serif text-3xl text-[#121826]">Karaköy · Galataport</h3><p className="mt-5 text-sm leading-7 text-[#3e4857]">Une adresse centrale, entre quartier historique, promenade contemporaine et vue sur la péninsule impériale.</p></article><article className="border border-[#d8c7a1] bg-white p-8"><Lock className="mb-8 h-8 w-8 text-[#8a6728]" strokeWidth={1.35} /><h3 className="font-serif text-3xl text-[#121826]">Discrétion</h3><p className="mt-5 text-sm leading-7 text-[#3e4857]">Les modalités sont traitées dans la relation membre, avec coordination par le bureau Bosphoras.</p></article><article className="border border-[#d8c7a1] bg-white p-8"><Sparkles className="mb-8 h-8 w-8 text-[#8a6728]" strokeWidth={1.35} /><h3 className="font-serif text-3xl text-[#121826]">Bosphoras Premium</h3><p className="mt-5 text-sm leading-7 text-[#3e4857]">Un privilège qui donne une présence concrète dans l’une des meilleures adresses d’Istanbul.</p></article></div></section>

        <section className="px-5 py-20 md:px-8 md:py-28"><div className="mx-auto max-w-[1500px] border border-[#24334a] bg-[linear-gradient(90deg,#121826_0%,#1d2940_45%,#121826_100%)] p-6 md:p-10"><div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center"><div className="text-white"><p className="font-serif text-3xl tracking-[-0.025em] md:text-5xl">Demander l’accès membre Bosphoras Premium.</p><p className="mt-4 max-w-xl text-base leading-8 text-white/80">Le Peninsula Istanbul devient l’une des adresses principales de l’expérience Bosphoras Premium.</p></div><div className="flex flex-col gap-3 md:items-end"><Link href="/adhesion/demande-membre" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#e0bc78]">Demander une adhésion<ArrowRight size={15} /></Link><Link href="/services/conciergerie-luxe-turquie" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#d2a863] transition hover:bg-white/5">Conciergerie de luxe</Link></div></div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
