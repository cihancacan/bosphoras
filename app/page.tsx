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
  ShieldCheck,
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

const locations = ['Paris', 'Istanbul', 'Londres', 'Almaty', 'Moscou', 'Dubai'];

const cities = [
  {
    title: 'Istanbul',
    subtitle: 'Business · Droit · Fiscalité · Santé privée',
    text: 'Le cœur économique et juridique de la Turquie : banques, bureaux premium, hôpitaux privés, quartiers internationaux et réseau d’affaires.',
  },
  {
    title: 'Bodrum',
    subtitle: 'Villas · Yachts · Lifestyle discret',
    text: 'Une destination patrimoniale et confidentielle pour les résidences secondaires, marinas, séjours privés et art de vivre méditerranéen.',
  },
  {
    title: 'Antalya',
    subtitle: 'Famille · Santé · Qualité de vie',
    text: 'Une base de vie rationnelle pour les familles : climat, mer, santé privée, communautés internationales et installation longue durée.',
  },
];

const method = [
  'Diagnostic confidentiel du profil, du pays de résidence, de la famille, du budget et des priorités.',
  'Choix de la ville, stratégie résidence/fiscalité, arbitrage entre location, achat, société ou simple présence privée.',
  'Coordination des professionnels : avocat, fiscaliste, comptable, assureur, médecin, clinique, bureau, banque, hôtel ou transport.',
  'Exécution locale : rendez-vous, visites, transferts, documents, traductions, réservations, négociation et suivi.',
  'Support continu : membership privé, préférences client, accès prioritaire, événements, relations qualifiées et services récurrents.',
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={websiteSchema()} />
      <StructuredData data={faqSchema(homeFaqs)} />

      <Header locale={locale} currentPath="/" />

      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative min-h-[92vh] overflow-hidden bg-[radial-gradient(circle_at_78%_16%,rgba(196,151,84,0.22),transparent_27%),radial-gradient(circle_at_12%_70%,rgba(10,20,35,0.08),transparent_25%),linear-gradient(135deg,#f8f1e7_0%,#fffaf0_48%,#efe4d2_100%)] pt-24 md:pt-32">
          <div className="absolute inset-x-8 top-28 hidden h-[calc(100%-8rem)] border border-[#d8c7a1] lg:block" />
          <div className="absolute inset-0 opacity-[0.28]" style={{ backgroundImage: 'linear-gradient(#d8c7a1 1px, transparent 1px), linear-gradient(90deg, #d8c7a1 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

          <div className="container-editorial relative z-10 grid min-h-[calc(92vh-7rem)] items-center gap-10 pb-12 pt-2 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-16 lg:pt-0">
            <div>
              <h1 className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-[-0.045em] text-[#121826] md:text-6xl lg:text-7xl">
                Votre bureau privé en Turquie
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#3e4857] md:mt-8 md:text-xl md:leading-10">
                Un seul interlocuteur pour organiser votre installation, vos affaires et votre vie privée : avocat, fiscalité, société, comptabilité, santé, assurance, immobilier, bureaux, transport VIP, hôtels, événements et accès privé à Istanbul, Bodrum et Antalya.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
                <Link href="/diagnostic-prive" className="inline-flex items-center justify-center bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]">
                  Recevoir mon diagnostic privé
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center border border-[#a77a35] bg-[#fffaf0]/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728] transition hover:bg-[#fffaf0]">
                  Découvrir nos services
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12">
                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5 shadow-[0_18px_45px_rgba(16,24,39,0.04)]">
                  <MapPin className="mb-4 h-5 w-5 text-[#b0813e]" />
                  <p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">Paris · Istanbul · Londres · Almaty · Moscou · Dubai</p>
                </div>
                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5 shadow-[0_18px_45px_rgba(16,24,39,0.04)]">
                  <Globe className="mb-4 h-5 w-5 text-[#b0813e]" />
                  <p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">Français · English · Русский · العربية</p>
                </div>
              </div>
            </div>

            <aside className="relative hidden md:block">
              <div className="absolute -inset-4 border border-[#d8c7a1]" />
              <div className="relative border border-[#d8c7a1] bg-[#121826] p-8 text-[#fffaf0] shadow-[0_40px_120px_rgba(16,24,39,0.22)] md:p-10">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#d2a863]">Bosphoras Private Desk</p>
                <p className="mt-10 font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
                  One trusted desk. Everything Turkey.
                </p>
                <p className="mt-8 text-base leading-8 text-[#d8cfbf]">
                  Pas de bruit. Pas d’improvisation. Un bureau privé pour filtrer, coordonner et sécuriser les bonnes personnes au bon moment.
                </p>
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#d2a863] to-transparent" />
                <div className="grid gap-4 text-sm leading-7 text-[#d8cfbf] sm:grid-cols-2">
                  <p>Avocat · fiscalité · société · comptabilité</p>
                  <p>Santé · assurance · immobilier · bureaux</p>
                  <p>Chauffeur · hôtels · yachts · événements</p>
                  <p>Accès privé · relation long terme</p>
                </div>
              </div>

              <div className="relative mt-8 border border-[#d8c7a1] bg-[#fffaf0] px-8 py-7 shadow-[0_22px_70px_rgba(16,24,39,0.10)]">
                <p className="font-serif text-2xl leading-snug text-[#121826]">
                  “En Turquie, la vraie difficulté n’est pas de trouver un service. C’est de savoir à qui faire confiance.”
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-[#d8c7a1] bg-[#fffaf0] py-8">
          <div className="container-editorial grid gap-4 md:grid-cols-6">
            {locations.map((location) => (
              <div key={location} className="text-center text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#8a6728]">
                {location}
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Notre différence</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                Pas une agence. Un bureau privé.
              </h2>
            </div>
            <div className="space-y-7 text-lg leading-9 text-[#3e4857]">
              <p>
                Un investisseur sérieux ne commence pas par acheter un appartement. Il commence par comprendre où vivre, comment structurer sa résidence, quelle fiscalité vérifier, quel avocat consulter, quelle assurance choisir, quel médecin contacter, quel bureau utiliser et qui peut réellement exécuter sur place.
              </p>
              <p>
                Bosphoras rend la Turquie lisible, sûre et actionnable : un seul interlocuteur, un réseau sélectionné, une logique de confidentialité et une coordination locale entre Paris, Istanbul, Londres, Almaty, Moscou et Dubai.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-20 text-[#fffaf0] md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d2a863]">Nos expertises</p>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.035em] md:text-6xl">
                Une approche globale. Une exécution locale.
              </h2>
            </div>

            <div className="grid gap-px bg-[#d2a863]/25 md:grid-cols-2 xl:grid-cols-6">
              {expertises.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="bg-[#121826] p-7 transition hover:bg-[#192237]">
                    <Icon className="h-8 w-8 text-[#d2a863]" strokeWidth={1.45} />
                    <h3 className="mt-8 font-serif text-3xl text-[#fffaf0]">{item.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-[#d8cfbf]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8a6728]">Nos destinations</p>
              <h2 className="mt-4 font-serif text-3xl tracking-[-0.025em] text-[#172032] md:text-5xl">
                Trois villes. Un même niveau d’exigence.
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {cities.map((item, index) => (
                <article key={item.title} className="border border-[#d8c7a1] bg-[#fffaf0] p-8 shadow-[0_18px_55px_rgba(16,24,39,0.05)]">
                  <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-[#8a6728]">0{index + 1}</p>
                  <h3 className="mt-10 font-serif text-5xl tracking-[-0.04em] text-[#172032]">{item.title}</h3>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#4a5260]">{item.subtitle}</p>
                  <p className="mt-6 text-base leading-8 text-[#3e4857]">{item.text}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#8a6728]">
                    Découvrir <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf0] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Confiance</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                Le vrai luxe, c’est de protéger le client.
              </h2>
            </div>
            <div className="grid gap-4 text-base leading-8 text-[#3e4857] md:grid-cols-2">
              {[
                'Confidentialité renforcée et limitation des accès aux informations sensibles.',
                'KYC, origine des fonds, documents et préférences privées traités avec prudence.',
                'Coordination avec avocats, fiscalistes, comptables, assureurs, médecins et prestataires habilités.',
                'Aucune promesse de résultat fiscal, juridique, administratif, médical ou financier.',
                'Introductions privées uniquement avec consentement mutuel.',
                'Bosphoras coordonne et filtre sans se substituer aux professions réglementées.',
              ].map((item) => (
                <div key={item} className="border border-[#d8c7a1] bg-white p-6">
                  <ShieldCheck className="mb-5 text-[#8a6728]" size={24} strokeWidth={1.3} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">Questions fréquentes</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                Avant de venir en Turquie.
              </h2>
            </div>
            <div className="grid gap-px bg-[#d8c7a1]">
              {homeFaqs.map((faq) => (
                <article key={faq.question} className="bg-[#f8f1e7] p-8">
                  <h3 className="font-serif text-3xl leading-snug text-[#121826]">{faq.question}</h3>
                  <p className="mt-4 text-base leading-8 text-[#3e4857]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-20 text-[#fffaf0] md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d2a863]">Méthode</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                Une exécution calme, claire, confidentielle.
              </h2>
            </div>
            <div className="border-l border-[#d2a863]/25">
              {method.map((step, index) => (
                <div key={step} className="grid grid-cols-[5rem_1fr] border-b border-[#d2a863]/15 py-7 last:border-b-0">
                  <span className="font-serif text-3xl text-[#d2a863]">0{index + 1}</span>
                  <p className="text-base leading-8 text-[#d8cfbf]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1500px] border border-[#24334a] bg-[linear-gradient(90deg,#121826_0%,#1d2940_45%,#121826_100%)] p-6 md:p-10">
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
                <Link href="/diagnostic-prive" className="inline-flex items-center justify-center bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#e0bc78]">
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
