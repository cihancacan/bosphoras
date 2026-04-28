import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  Bell,
  Building2,
  Globe,
  Home,
  KeyRound,
  Lock,
  MapPin,
  Scale,
  Shield,
  Star,
} from 'lucide-react';
import { buildMetadata, faqSchema, organizationSchema, websiteSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const locale = 'fr' as const;
const heroImage = '/images/bosphoras-hero.jpg';

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
    'Bosphoras, marque de Panorama Grup, est votre bureau privé en Turquie : avocat, fiscalité, société, comptabilité, santé, assurance, immobilier, bureaux, transport VIP, hôtels, événements et accès privé à Istanbul, Bodrum et Antalya. 4,9/5 sur 247 avis Google. Paris, Istanbul, Londres, Almaty, Moscou, Dubai.',
});

const expertises = [
  {
    icon: Scale,
    title: 'Legal & Tax',
    text: 'Conseil juridique et fiscal sur mesure pour particuliers et entreprises. Conformité, optimisation et protection de vos intérêts.',
  },
  {
    icon: Building2,
    title: 'Business Setup',
    text: 'Création de société, licences et autorisations. Structuration et accompagnement complet pour vos projets en Turquie.',
  },
  {
    icon: Shield,
    title: 'Health & Insurance',
    text: 'Assurance santé internationale, solutions sur mesure et accès aux meilleurs établissements médicaux en Turquie.',
  },
  {
    icon: Home,
    title: 'Property & Relocation',
    text: 'Immobilier, résidence, permis de séjour. Installation clé en main pour vous et vos proches.',
  },
  {
    icon: Bell,
    title: 'VIP Hospitality',
    text: 'Transferts privés, hôtels d’exception, conciergerie 24/7 et organisation d’événements sur mesure.',
  },
  {
    icon: KeyRound,
    title: 'Private Access',
    text: 'Accès privilégié et relations de confiance à Istanbul, Bodrum, Antalya et dans toute la Turquie.',
  },
];

const destinations = [
  {
    title: 'ISTANBUL',
    text: 'Carrefour historique entre l’Europe et l’Asie, Istanbul est le cœur économique et culturel de la Turquie.',
    objectPosition: '72% center',
  },
  {
    title: 'BODRUM',
    text: 'Art de vivre, nature et discrétion. Bodrum, destination prisée de la Méditerranée.',
    objectPosition: '48% center',
  },
  {
    title: 'ANTALYA',
    text: 'Entre mer et montagnes, Antalya offre un cadre de vie exceptionnel toute l’année.',
    objectPosition: '60% center',
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={websiteSchema()} />
      <StructuredData data={faqSchema(homeFaqs)} />

      <Header locale={locale} currentPath="/" />

      <main className="bg-[#f8f3eb] text-[#101827]">
        <section className="relative min-h-[92vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Istanbul au coucher du soleil avec monuments historiques et skyline moderne"
              fill
              priority
              sizes="100vw"
              className="object-cover [object-position:72%_center] md:[object-position:center_center]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,10,18,0.88)_0%,rgba(4,10,18,0.70)_35%,rgba(4,10,18,0.28)_62%,rgba(4,10,18,0.28)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,18,0.72)_0%,rgba(4,10,18,0.10)_38%,rgba(4,10,18,0.76)_100%)]" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-[1500px] flex-col px-5 pt-28 md:px-8 md:pt-36">
            <div className="max-w-3xl pt-10 md:pt-16">
              <p className="mb-7 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-[#d0a45d]">
                Bureau privé · Turquie · International
              </p>

              <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.035em] text-white md:text-6xl md:leading-[1.05]">
                Votre bureau privé en Turquie
              </h1>

              <div className="mt-6 h-[2px] w-16 bg-[#c79a54]" />

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/90 md:text-xl md:leading-9">
                Un seul interlocuteur pour organiser votre installation, vos affaires et votre vie privée : avocat,
                fiscalité, société, comptabilité, santé, assurance, immobilier, bureaux, transport VIP, hôtels,
                événements et accès privé à Istanbul, Bodrum et Antalya.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/diagnostic-prive"
                  className="inline-flex items-center justify-center bg-[#c79a54] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#d9ae6a]"
                >
                  Recevoir mon diagnostic privé
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-white/40 bg-white/5 px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
                >
                  Découvrir nos services
                </Link>
              </div>
            </div>

            <div className="mt-auto grid gap-4 border-t border-white/12 py-5 text-sm text-white/90 md:grid-cols-3">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-[#d2a863]" fill="currentColor" />
                <span>4,9/5 · 247 avis Google</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d2a863]" />
                <span>Paris · Istanbul · Londres · Almaty · Moscou · Dubai</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#d2a863]" />
                <span>Français · English · Русский · العربية</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e5d8c5] bg-[#fbf8f2] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-5 text-6xl leading-none text-[#c79a54]">“</div>
            <p className="mx-auto max-w-4xl font-serif text-3xl leading-tight tracking-[-0.025em] text-[#1a2232] md:text-5xl md:leading-[1.18]">
              En Turquie, la vraie difficulté n’est pas de trouver un service. C’est de savoir à qui faire confiance.
            </p>
            <div className="mx-auto mt-8 h-[2px] w-16 bg-[#c79a54]" />
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b0813e]">Nos expertises</p>
              <h2 className="mt-4 font-serif text-3xl tracking-[-0.025em] text-[#172032] md:text-5xl">
                Une approche globale. Une exécution locale.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {expertises.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="border border-[#eadfce] bg-[#fcfaf6] p-6 text-center shadow-[0_18px_55px_rgba(16,24,39,0.04)]">
                    <Icon className="mx-auto h-8 w-8 text-[#c79a54]" strokeWidth={1.5} />
                    <h3 className="mt-5 font-serif text-2xl text-[#172032]">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#5c6676]">{item.text}</p>
                    <div className="mx-auto mt-6 h-[2px] w-10 bg-[#c79a54]" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b0813e]">Nos destinations</p>
              <h2 className="mt-4 font-serif text-3xl tracking-[-0.025em] text-[#172032] md:text-5xl">
                Trois villes. Un même niveau d’exigence.
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {destinations.map((item) => (
                <article key={item.title} className="group relative overflow-hidden rounded-[6px] bg-[#07111f]">
                  <div className="relative h-[360px] md:h-[420px]">
                    <Image
                      src={heroImage}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: item.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,20,0.05)_0%,rgba(6,12,20,0.84)_100%)]" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <h3 className="font-serif text-4xl">{item.title}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-white/90">{item.text}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#d2a863]">
                      Découvrir <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 md:px-8 md:pb-24">
          <div className="mx-auto max-w-[1500px] border border-[#24334a] bg-[linear-gradient(90deg,#07111f_0%,#0b1930_45%,#07111f_100%)] p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div className="text-white">
                <p className="font-serif text-3xl tracking-[-0.025em] md:text-5xl">
                  Parlons de vos projets en toute confidentialité.
                </p>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/80">
                  Un entretien privé pour comprendre vos besoins et vous proposer des solutions sur mesure.
                </p>
              </div>

              <div className="md:text-right">
                <Link
                  href="/diagnostic-prive"
                  className="inline-flex items-center justify-center bg-[#c79a54] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#d9ae6a]"
                >
                  Recevoir mon diagnostic privé
                </Link>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/80">
                  <Lock className="h-4 w-4 text-[#d2a863]" />
                  Confidentialité absolue garantie
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
