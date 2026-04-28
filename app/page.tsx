import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Check,
  HeartPulse,
  KeyRound,
  Landmark,
  Plane,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import { buildMetadata, faqSchema, organizationSchema, websiteSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const locale = 'fr' as const;

const homeFaqs = [
  {
    question: 'Bosphoras est-il une agence immobilière en Turquie ?',
    answer:
      'Non. Bosphoras est un bureau privé international. L’immobilier peut faire partie du parcours, mais seulement après la stratégie : ville, résidence, fiscalité, avocat, santé, assurance, banque, société, bureaux et niveau de vie recherché.',
  },
  {
    question: 'Bosphoras accompagne-t-il les investisseurs étrangers à Istanbul, Bodrum et Antalya ?',
    answer:
      'Oui. Bosphoras coordonne l’installation, les démarches, les services privés et les professionnels sélectionnés à Istanbul, Bodrum et Antalya pour des investisseurs, entrepreneurs, familles et clients internationaux.',
  },
  {
    question: 'Pouvez-vous coordonner avocat, fiscalité, comptabilité et création d’entreprise en Turquie ?',
    answer:
      'Oui. Bosphoras peut organiser l’accès à des professionnels indépendants : avocats, fiscalistes, comptables, assureurs, bureaux et partenaires opérationnels. Les décisions juridiques et fiscales restent validées par les professionnels habilités.',
  },
  {
    question: 'Bosphoras propose-t-il une carte membre ou un accès privé ?',
    answer:
      'Oui. La carte Bosphoras Private Access est pensée comme une carte membre, non bancaire, donnant accès à une assistance prioritaire, des événements privés, des réservations, des introductions qualifiées et un suivi personnalisé.',
  },
];

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/',
  title: 'Bosphoras | Bureau privé en Turquie, Istanbul, Bodrum, Antalya',
  description:
    'Bosphoras, marque de Panorama Grup, est un bureau privé en Turquie pour investisseurs étrangers : installation, fiscalité, avocat, création d’entreprise, santé, assurance, immobilier, bureaux, chauffeur VIP et accès privé. 4,9/5 sur 247 avis Google. Paris, Istanbul, Londres, Almaty, Moscou, Dubai.',
});

const locations = ['Paris', 'Istanbul', 'Londres', 'Almaty', 'Moscou', 'Dubai'];

const services = [
  { icon: Scale, title: 'Legal & Tax', text: 'Avocat, fiscalité, résidence, due diligence, contrats et structuration avec des professionnels indépendants.' },
  { icon: Landmark, title: 'Business', text: 'Création d’entreprise, comptabilité, domiciliation, banque, bureaux privés et présence professionnelle.' },
  { icon: HeartPulse, title: 'Health', text: 'Assurance santé, médecins privés, cliniques sélectionnées, check-up exécutif et assistance famille.' },
  { icon: Building2, title: 'Living', text: 'Location, achat, villas, appartements, quartiers, gestion locative, ameublement et installation.' },
  { icon: Plane, title: 'Hospitality', text: 'Chauffeurs, transferts VIP, palaces, restaurants, jets, hélicoptères, yachts et villas privées.' },
  { icon: KeyRound, title: 'Access', text: 'Carte membre, dîners privés, clubs, meilleures tables disponibles, shopping luxe et introductions qualifiées.' },
];

const cities = [
  { name: 'Istanbul', kicker: 'Capital of decisions', text: 'Business, droit, fiscalité, banques, bureaux premium, santé privée, Bosphore et réseau international.' },
  { name: 'Bodrum', kicker: 'Discreet Mediterranean life', text: 'Villas, marinas, yachts, résidences secondaires, beach clubs et lifestyle confidentiel.' },
  { name: 'Antalya', kicker: 'Long-term comfort', text: 'Famille, climat, santé, mer, communautés internationales et installation longue durée.' },
];

const method = [
  'Diagnostic confidentiel',
  'Stratégie ville, résidence et fiscalité',
  'Coordination des professionnels',
  'Exécution locale et suivi',
  'Accès membre et relation long terme',
];

const audiences = ['Investisseurs étrangers', 'Entrepreneurs', 'Familles patrimoniales', 'Clients de banque privée', 'Résidents de Dubai', 'Francophones · Russophones · Arabophones'];

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={websiteSchema()} />
      <StructuredData data={faqSchema(homeFaqs)} />
      <Header locale={locale} currentPath="/" />

      <main className="bg-[#05070c] text-[#f8efe0]">
        <section className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(217,182,109,0.22),transparent_26%),radial-gradient(circle_at_10%_72%,rgba(217,182,109,0.10),transparent_24%),linear-gradient(135deg,#05070c_0%,#09111f_46%,#05070c_100%)]" />
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
          <div className="absolute left-8 right-8 top-28 hidden h-[calc(100%-8rem)] border border-[#d9b66d]/15 lg:block" />

          <div className="container-editorial relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-16 lg:grid-cols-[1fr_0.72fr] lg:gap-16">
            <div className="pt-10">
              <div className="mb-10 flex flex-wrap items-center gap-4">
                <span className="h-px w-16 bg-[#d9b66d]" />
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.36em] text-[#d9b66d]">Private Office · Turkey</p>
              </div>

              <h1 className="font-serif text-[4.7rem] leading-[0.78] tracking-[-0.075em] text-[#fff7e8] md:text-[9rem] lg:text-[11rem]">
                Bosphoras
              </h1>

              <p className="mt-9 max-w-4xl font-serif text-3xl leading-[1.05] tracking-[-0.045em] text-[#dec58e] md:text-6xl">
                Le point d’entrée privé des investisseurs étrangers en Turquie.
              </p>

              <p className="mt-8 max-w-2xl text-lg leading-9 text-[#c9c0b5]">
                Un bureau confidentiel pour organiser installation, fiscalité, avocat, société, santé, assurance, immobilier, bureaux, chauffeurs, hôtels, jets, yachts, restaurants, événements et accès membre à Istanbul, Bodrum et Antalya.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/diagnostic-prive" className="group inline-flex items-center justify-center gap-3 bg-[#d9b66d] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#05070c] transition hover:bg-[#f1d590]">
                  Recevoir mon diagnostic privé
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center border border-[#d9b66d]/45 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f8efe0] transition hover:border-[#d9b66d] hover:text-[#d9b66d]">
                  Découvrir le bureau privé
                </Link>
              </div>

              <div className="mt-12 grid gap-3 sm:grid-cols-3">
                <div className="border border-white/10 bg-white/[0.035] p-5">
                  <div className="mb-3 flex gap-1 text-[#d9b66d]">{[0, 1, 2, 3, 4].map((s) => <Star key={s} size={14} fill="currentColor" />)}</div>
                  <p className="font-serif text-3xl text-[#fff7e8]">4,9/5</p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-[#a99f90]">247 avis Google</p>
                </div>
                <div className="border border-white/10 bg-white/[0.035] p-5">
                  <p className="font-serif text-3xl text-[#fff7e8]">6</p>
                  <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#a99f90]">Paris · Istanbul · Londres · Almaty · Moscou · Dubai</p>
                </div>
                <div className="border border-white/10 bg-white/[0.035] p-5">
                  <p className="font-serif text-3xl text-[#fff7e8]">4</p>
                  <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#a99f90]">Français · English · Русский · العربية</p>
                </div>
              </div>
            </div>

            <aside className="relative hidden lg:block">
              <div className="absolute -inset-5 border border-[#d9b66d]/20" />
              <div className="relative bg-[#080b12] p-8 shadow-[0_45px_150px_rgba(0,0,0,0.55)]">
                <div className="border border-[#d9b66d]/25 p-8">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.35em] text-[#d9b66d]">Bosphoras Private Access</p>
                  <p className="mt-8 font-serif text-6xl leading-none text-[#fff7e8]">Black</p>
                  <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#d9b66d] to-transparent" />
                  <p className="font-serif text-4xl leading-tight text-[#fff7e8]">One call.<br />One trusted desk.<br />Everything Turkey.</p>
                  <p className="mt-9 text-sm leading-8 text-[#c9c0b5]">Pas de remises. Pas de bruit. Seulement l’accès. Tables prioritaires, dîners privés, professionnels sélectionnés, chauffeurs, hôtels, yachts et introductions avec accord mutuel.</p>
                </div>
              </div>
              <div className="mt-8 bg-[#f8efe0] p-8 text-[#07111f] shadow-[0_35px_90px_rgba(0,0,0,0.24)]">
                <p className="font-serif text-2xl leading-snug">“En Turquie, la vraie difficulté n’est pas de trouver un service. C’est de savoir à qui faire confiance.”</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-[#d9b66d]/20 bg-[#080b12] py-8">
          <div className="container-editorial grid gap-4 md:grid-cols-6">
            {locations.map((location) => <div key={location} className="text-center text-[0.66rem] font-bold uppercase tracking-[0.22em] text-[#d9b66d]">{location}</div>)}
          </div>
        </section>

        <section className="bg-[#f6efe3] py-24 text-[#07111f] md:py-32">
          <div className="container-editorial grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Positionnement</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Pas une agence. Un bureau privé.</h2>
            </div>
            <div className="space-y-7 text-xl leading-10 text-[#344052]">
              <p>Un investisseur sérieux ne commence pas par acheter un appartement. Il commence par comprendre où vivre, comment structurer sa résidence, quelle fiscalité vérifier, quel avocat consulter, quelle assurance choisir, quel médecin contacter, quel bureau utiliser et qui peut réellement exécuter sur place.</p>
              <p>Bosphoras rend la Turquie lisible, sûre et actionnable : un seul interlocuteur, un réseau sélectionné, une logique de confidentialité et une coordination locale entre Paris, Istanbul, Londres, Almaty, Moscou et Dubai.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#05070c] py-24 md:py-32">
          <div className="container-editorial">
            <div className="mb-16 max-w-4xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d9b66d]">Private desks</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#fff7e8] md:text-7xl">Six bureaux. Une seule porte d’entrée.</h2>
            </div>
            <div className="grid gap-px bg-[#d9b66d]/25 md:grid-cols-2 xl:grid-cols-3">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="group bg-[#05070c] p-9 transition hover:bg-[#0c1220]">
                    <Icon size={30} strokeWidth={1.25} className="mb-12 text-[#d9b66d]" />
                    <h3 className="font-serif text-4xl text-[#fff7e8]">{item.title}</h3>
                    <p className="mt-5 text-sm leading-8 text-[#c9c0b5]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f6efe3] py-24 text-[#07111f] md:py-32">
          <div className="container-editorial">
            <div className="mb-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Territoires</p>
                <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Istanbul. Bodrum. Antalya.</h2>
              </div>
              <p className="text-xl leading-10 text-[#344052]">La bonne ville dépend du profil : business, fiscalité, famille, santé, mer, discrétion, bureaux, écoles, banques, lifestyle ou résidence longue durée.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {cities.map((city, index) => (
                <article key={city.name} className="border border-[#d9c69d] bg-[#fffaf0] p-9 shadow-[0_22px_75px_rgba(20,28,46,0.08)]">
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-[#8a6728]">0{index + 1} · {city.kicker}</p>
                  <h3 className="mt-10 font-serif text-5xl tracking-[-0.04em]">{city.name}</h3>
                  <p className="mt-6 text-base leading-8 text-[#344052]">{city.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080b12] py-24 md:py-32">
          <div className="container-editorial grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d9b66d]">Confiance</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#fff7e8] md:text-7xl">Le luxe commence par la protection.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {['Confidentialité renforcée et limitation des accès aux informations sensibles.', 'KYC, origine des fonds, documents et préférences privées traités avec prudence.', 'Coordination avec avocats, fiscalistes, comptables, assureurs, médecins et prestataires habilités.', 'Aucune promesse de résultat fiscal, juridique, administratif, médical ou financier.', 'Introductions privées uniquement avec consentement mutuel.', 'Bosphoras coordonne et filtre sans se substituer aux professions réglementées.'].map((item) => (
                <div key={item} className="border border-[#d9b66d]/20 bg-white/[0.03] p-7 text-sm leading-8 text-[#c9c0b5]">
                  <ShieldCheck className="mb-5 text-[#d9b66d]" size={25} strokeWidth={1.25} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6efe3] py-24 text-[#07111f] md:py-32">
          <div className="container-editorial grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Questions fréquentes</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Avant de venir en Turquie.</h2>
            </div>
            <div className="grid gap-px bg-[#d9c69d]">
              {homeFaqs.map((faq) => (
                <article key={faq.question} className="bg-[#f6efe3] p-8">
                  <h3 className="font-serif text-3xl leading-snug">{faq.question}</h3>
                  <p className="mt-4 text-base leading-8 text-[#344052]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#05070c] py-24 md:py-32">
          <div className="container-editorial grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d9b66d]">Méthode</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#fff7e8] md:text-7xl">Une exécution calme, claire, confidentielle.</h2>
            </div>
            <div className="border-l border-[#d9b66d]/25">
              {method.map((step, index) => (
                <div key={step} className="grid grid-cols-[5rem_1fr] border-b border-[#d9b66d]/15 py-7 last:border-b-0">
                  <span className="font-serif text-3xl text-[#d9b66d]">0{index + 1}</span>
                  <p className="text-lg leading-8 text-[#c9c0b5]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6efe3] py-24 text-[#07111f] md:py-32">
          <div className="container-editorial grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Clientèle</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Pour ceux qui ne peuvent pas se permettre l’improvisation.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div key={audience} className="border border-[#d9c69d] bg-[#fffaf0] p-5 text-sm font-bold uppercase tracking-[0.12em] text-[#344052]">
                  <Check size={15} className="mr-3 inline text-[#8a6728]" />{audience}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#05070c] py-24 text-center md:py-32">
          <div className="container-editorial max-w-4xl">
            <Sparkles className="mx-auto mb-8 text-[#d9b66d]" size={36} strokeWidth={1.25} />
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#d9b66d]">Private Assessment</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#fff7e8] md:text-7xl">Dites-nous ce que vous voulez régler en Turquie. Nous construisons la route.</h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#c9c0b5]">Installation, société, fiscalité, santé, immobilier, bureaux, transport, hôtels, accès privé ou membership : chaque demande commence par un échange confidentiel.</p>
            <Link href="/diagnostic-prive" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d9b66d] px-9 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#05070c] transition hover:bg-[#f1d590]">
              Recevoir mon diagnostic privé
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
