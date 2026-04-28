import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Check,
  HeartPulse,
  KeyRound,
  Landmark,
  LockKeyhole,
  Plane,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
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
  {
    question: 'Les informations partagées avec Bosphoras sont-elles confidentielles ?',
    answer:
      'Oui. La confidentialité est au cœur du service. Bosphoras traite les informations clients avec discrétion, limitation d’accès, protection des données, respect des consentements et coordination uniquement lorsque nécessaire.',
  },
];

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/',
  title: 'Bosphoras | Bureau privé en Turquie, Istanbul, Bodrum, Antalya',
  description:
    'Bosphoras, marque de Panorama Grup, est un bureau privé en Turquie pour investisseurs étrangers : installation, fiscalité, avocat, création d’entreprise, santé, assurance, immobilier, bureaux, chauffeur VIP et accès privé. 4,9/5 sur 247 avis. Paris, Istanbul, Londres, Almaty, Moscou, Dubai.',
});

const locations = ['Paris', 'Istanbul', 'Londres', 'Almaty', 'Moscou', 'Dubai'];

const privateDesks = [
  {
    icon: Scale,
    title: 'Legal & Tax Desk',
    text: 'Avocat, fiscalité, résidence, contrats, due diligence immobilière, structuration patrimoniale et coordination avec des professionnels indépendants du droit turc.',
    keywords: 'avocat Turquie · fiscalité Turquie · résidence fiscale · due diligence',
  },
  {
    icon: Landmark,
    title: 'Business Setup & Accounting',
    text: 'Création d’entreprise, comptabilité, domiciliation, compte bancaire, bureaux équipés, bureaux partagés premium et présence professionnelle en Turquie.',
    keywords: 'création société Turquie · comptable Turquie · bureau privé Istanbul',
  },
  {
    icon: HeartPulse,
    title: 'Health & Insurance',
    text: 'Assurance santé locale ou internationale, médecins privés, cliniques sélectionnées, check-up exécutif, assistance famille et orientation médicale encadrée.',
    keywords: 'assurance santé Turquie · clinique privée Istanbul · médecins privés',
  },
  {
    icon: Building2,
    title: 'Property & Relocation',
    text: 'Location, achat, villas, appartements, quartiers, gestion locative, ameublement, personnel de maison et installation à Istanbul, Bodrum ou Antalya.',
    keywords: 's’installer en Turquie · louer avant achat · Istanbul Bodrum Antalya',
  },
  {
    icon: Plane,
    title: 'VIP Transport & Hospitality',
    text: 'Chauffeur privé, transfert aéroport VIP, berline, van, limousine, jets privés, hélicoptères, yachts, palaces, hôtels et villas privées.',
    keywords: 'chauffeur privé Istanbul · yacht Bodrum · jet privé Turquie',
  },
  {
    icon: KeyRound,
    title: 'Private Access Club',
    text: 'Carte membre, restaurants, meilleures tables disponibles, clubs privés, dîners d’affaires, événements, shopping luxe et introductions sur accord mutuel.',
    keywords: 'private access · carte membre · conciergerie privée Istanbul',
  },
];

const cities = [
  {
    name: 'Istanbul',
    role: 'Business · Finance · Droit · Santé privée',
    text: 'La ville des décisions : avocats, fiscalité, banques, bureaux premium, hôpitaux privés, quartiers internationaux, Bosphore, palaces et réseau d’affaires.',
  },
  {
    name: 'Bodrum',
    role: 'Villas · Yachts · Marina · Discrétion',
    text: 'La destination des familles patrimoniales, résidences secondaires, villas, yachts, beach clubs, séjours privés et lifestyle méditerranéen discret.',
  },
  {
    name: 'Antalya',
    role: 'Famille · Santé · Climat · Long terme',
    text: 'Une base rationnelle pour vivre longtemps : climat, mer, communautés internationales, santé privée, familles, qualité de vie et coûts plus maîtrisés.',
  },
];

const audiences = [
  'Investisseurs étrangers',
  'Entrepreneurs internationaux',
  'Familles patrimoniales',
  'Clients de banque privée',
  'Détenteurs de cartes premium',
  'Résidents de Dubai',
  'Francophones',
  'Russophones',
  'Arabophones',
  'Kazakhstan · Russie · Golfe',
];

const process = [
  'Diagnostic confidentiel du profil, du pays de résidence, de la famille, du budget et des priorités.',
  'Choix de la ville, stratégie résidence/fiscalité, arbitrage entre location, achat, société ou simple présence privée.',
  'Coordination des professionnels : avocat, fiscaliste, comptable, assureur, médecin, clinique, bureau, banque, hôtel ou transport.',
  'Exécution locale : rendez-vous, visites, transferts, documents, traductions, réservations, négociation et suivi.',
  'Support continu : membership privé, préférences client, accès prioritaire, événements, relations qualifiées et services récurrents.',
];

const seoQuestions = [
  'Comment s’installer en Turquie en tant qu’étranger ?',
  'Istanbul, Bodrum ou Antalya : quelle ville choisir selon votre profil ?',
  'Faut-il louer avant d’acheter en Turquie ?',
  'Comment créer une entreprise en Turquie en tant qu’étranger ?',
  'Quelle assurance santé choisir en Turquie pour une famille expatriée ?',
  'Comment organiser avocat, fiscalité, comptabilité et résidence en Turquie ?',
  'Pourquoi les investisseurs de Dubai regardent-ils Istanbul, Bodrum et Antalya ?',
  'Comment trouver une conciergerie privée à Istanbul pour investisseurs internationaux ?',
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={websiteSchema()} />
      <StructuredData data={faqSchema(homeFaqs)} />
      <Header locale={locale} currentPath="/" />

      <main className="bg-[#f4efe6] text-[hsl(220,45%,10%)]">
        <section className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_70%_10%,rgba(197,145,55,0.22),transparent_28%),linear-gradient(135deg,#07111f_0%,#111827_45%,#060a12_100%)] pt-32 text-[#f7f1e7] md:pt-40">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7b46a] to-transparent" />

          <div className="container-editorial relative z-10 pb-20 md:pb-28">
            <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
              <div>
                <div className="mb-9 flex flex-wrap items-center gap-4">
                  <span className="h-px w-14 bg-[#d7b46a]" />
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-[#d7b46a]">
                    Paris · Istanbul · Londres · Almaty · Moscou · Dubai
                  </p>
                </div>

                <h1 className="font-serif text-[4.7rem] leading-[0.82] tracking-[-0.065em] text-[#fbf6eb] md:text-[8.4rem] lg:text-[10.5rem]">
                  Bosphoras
                </h1>

                <p className="mt-8 max-w-4xl font-serif text-3xl leading-tight tracking-[-0.04em] text-[#ead9b8] md:text-6xl">
                  Le bureau privé des investisseurs étrangers en Turquie.
                </p>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-[#d8d0c5]">
                  Un seul interlocuteur pour organiser votre installation, vos affaires et votre vie privée : avocat, fiscalité, société, comptabilité, bureaux, assurance santé, médecins, immobilier, chauffeurs, hôtels, jets, yachts, restaurants, événements privés et accès membre à Istanbul, Bodrum et Antalya.
                </p>

                <div className="mt-10 grid max-w-3xl gap-3 text-sm leading-7 text-[#c9c0b5] md:grid-cols-2">
                  <div className="border border-white/10 bg-white/[0.04] p-5">
                    <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[#d7b46a]">Réponse courte</p>
                    <p>Bosphoras n’est pas une agence immobilière : c’est un private desk pour entrer en Turquie avec méthode, réseau, confidentialité et exécution.</p>
                  </div>
                  <div className="border border-white/10 bg-white/[0.04] p-5">
                    <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[#d7b46a]">Preuve sociale</p>
                    <p><strong className="text-[#fbf6eb]">4,9/5</strong> — 247 avis Google · accompagnement privé multilingue.</p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link href="/diagnostic-prive" className="group inline-flex items-center justify-center gap-3 bg-[#d7b46a] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#07111f] transition hover:bg-[#efd08a]">
                    Recevoir mon diagnostic privé
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center border border-white/20 bg-white/[0.03] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#fbf6eb] transition hover:border-[#d7b46a] hover:text-[#d7b46a]">
                    Voir le bureau privé
                  </Link>
                </div>
              </div>

              <aside className="relative self-start lg:mt-4">
                <div className="absolute -inset-4 border border-[#d7b46a]/35" />
                <div className="relative bg-[#030712] p-8 shadow-[0_40px_140px_rgba(0,0,0,0.45)] md:p-10">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[#d7b46a]">Private Access</p>
                      <p className="mt-3 font-serif text-5xl leading-none text-[#fbf6eb]">Black</p>
                    </div>
                    <div className="text-right text-[0.62rem] uppercase tracking-[0.25em] text-[#b9aa91]">
                      Member<br />Invitation only
                    </div>
                  </div>

                  <div className="my-14 h-px bg-gradient-to-r from-transparent via-[#d7b46a] to-transparent" />

                  <p className="font-serif text-4xl leading-tight tracking-[-0.035em] text-[#fbf6eb] md:text-[3.35rem]">
                    One call.<br />One trusted desk.<br />Everything Turkey.
                  </p>

                  <div className="mt-12 grid gap-4 text-sm leading-7 text-[#c9c0b5]">
                    <p>Pas de remises. Pas de bruit. Seulement l’accès.</p>
                    <p>Tables prioritaires, dîners privés, chauffeurs, hôtels, yachts, professionnels sélectionnés et introductions uniquement avec accord mutuel.</p>
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-px bg-[#d7b46a]/25 text-center">
                    <div className="bg-[#030712] p-5">
                      <p className="font-serif text-4xl text-[#d7b46a]">4,9/5</p>
                      <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#b9aa91]">247 avis Google</p>
                    </div>
                    <div className="bg-[#030712] p-5">
                      <p className="font-serif text-4xl text-[#d7b46a]">6</p>
                      <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#b9aa91]">Localisations</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-8 border border-[#d7b46a]/25 bg-[#fbf6eb] px-8 py-7 text-[#07111f] shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
                  <p className="font-serif text-2xl leading-snug">
                    “En Turquie, la vraie difficulté n’est pas de trouver un service. C’est de savoir à qui faire confiance.”
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-y border-[#c9b78e] bg-[#fbf6eb] py-8">
          <div className="container-editorial grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            {locations.map((city) => (
              <div key={city} className="text-center text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#263244]">
                {city}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#9a742b]">Positionnement validé</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                Nous ne vendons pas la Turquie. Nous la rendons lisible, sûre et actionnable.
              </h2>
            </div>
            <div className="space-y-7 text-lg leading-9 text-[#3d4655]">
              <p>
                Un investisseur sérieux ne commence pas par acheter un appartement. Il commence par comprendre où vivre, comment structurer sa résidence, quelle fiscalité vérifier, quel avocat consulter, quelle assurance choisir, quel médecin contacter, quel bureau utiliser et qui peut réellement exécuter sur place.
              </p>
              <p>
                Bosphoras est conçu comme un bureau privé international : un point d’entrée unique pour les clients qui veulent agir en Turquie sans improvisation, sans perte de temps et sans exposition inutile.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#07111f] py-20 text-[#fbf6eb] md:py-28">
          <div className="container-editorial">
            <div className="mb-16 max-w-4xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d7b46a]">Bureaux spécialisés</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Un seul bureau. Tous les leviers pour entrer en Turquie.</h2>
              <p className="mt-7 text-lg leading-9 text-[#c9c0b5]">
                Chaque domaine est traité avec une logique de sélection : professionnels indépendants, confidentialité, conformité, niveau d’exécution et capacité réelle à accompagner une clientèle étrangère exigeante.
              </p>
            </div>

            <div className="grid gap-px bg-[#d7b46a]/25 md:grid-cols-2 xl:grid-cols-3">
              {privateDesks.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="group bg-[#07111f] p-8 transition duration-300 hover:bg-[#101b2c]">
                    <Icon className="mb-9 text-[#d7b46a]" size={31} strokeWidth={1.25} />
                    <h3 className="font-serif text-3xl text-[#fbf6eb]">{item.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-[#c9c0b5]">{item.text}</p>
                    <p className="mt-6 border-t border-white/10 pt-5 text-[0.64rem] uppercase tracking-[0.2em] text-[#d7b46a]">{item.keywords}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial">
            <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#9a742b]">Villes stratégiques</p>
                <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Istanbul. Bodrum. Antalya.</h2>
              </div>
              <p className="max-w-2xl text-lg leading-9 text-[#3d4655]">
                La bonne ville dépend du profil : business, fiscalité, famille, santé, mer, discrétion, bureaux, écoles, banques, lifestyle ou résidence longue durée.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {cities.map((city, index) => (
                <article key={city.name} className="border border-[#d8c7a1] bg-[#fbf6eb] p-8 shadow-[0_18px_60px_rgba(20,28,46,0.08)]">
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#9a742b]">0{index + 1}</span>
                  <h3 className="mt-10 font-serif text-5xl tracking-[-0.04em]">{city.name}</h3>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#303b4c]">{city.role}</p>
                  <p className="mt-6 text-sm leading-7 text-[#3d4655]">{city.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fbf6eb] py-20 md:py-28">
          <div className="container-editorial grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#9a742b]">Confiance & conformité</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Le vrai luxe, c’est de protéger le client.</h2>
            </div>
            <div className="grid gap-4 text-base leading-8 text-[#3d4655] md:grid-cols-2">
              {[
                'Confidentialité renforcée et limitation des accès aux informations sensibles.',
                'KYC, origine des fonds, documents, préférences et dossiers privés traités avec prudence.',
                'Coordination avec des avocats, fiscalistes, comptables, assureurs, médecins et prestataires habilités.',
                'Aucune promesse de résultat fiscal, juridique, administratif, médical ou financier.',
                'Introductions privées uniquement avec consentement mutuel.',
                'Bosphoras coordonne, filtre et exécute sans se substituer aux professions réglementées.',
              ].map((item) => (
                <div key={item} className="border border-[#d8c7a1] bg-white p-6">
                  <ShieldCheck className="mb-5 text-[#9a742b]" size={24} strokeWidth={1.3} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#9a742b]">SEO & IA friendly</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Les intentions de recherche que Bosphoras couvre dès la page d’accueil.</h2>
            </div>
            <div className="grid gap-px bg-[#d8c7a1]">
              {seoQuestions.map((question) => (
                <div key={question} className="bg-[#f4efe6] p-6 text-lg text-[#07111f]">
                  {question}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#07111f] py-20 text-[#fbf6eb] md:py-28">
          <div className="container-editorial grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d7b46a]">Méthode Bosphoras</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Une exécution calme, claire, confidentielle.</h2>
            </div>
            <div className="border-l border-[#d7b46a]/25">
              {process.map((step, index) => (
                <div key={step} className="grid grid-cols-[5rem_1fr] border-b border-[#d7b46a]/15 py-6 last:border-b-0">
                  <span className="font-serif text-3xl text-[#d7b46a]">0{index + 1}</span>
                  <p className="text-base leading-8 text-[#c9c0b5]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#9a742b]">Clientèle</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Un bureau pensé pour les profils qui ne peuvent pas se permettre l’improvisation.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {audiences.map((audience) => (
                <div key={audience} className="flex items-center gap-3 border border-[#d8c7a1] bg-[#fbf6eb] p-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#303b4c]">
                  <Check size={15} className="text-[#9a742b]" />
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#07111f] py-20 text-center text-[#fbf6eb] md:py-28">
          <div className="container-editorial max-w-4xl">
            <Sparkles className="mx-auto mb-8 text-[#d7b46a]" size={34} strokeWidth={1.25} />
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[#d7b46a]">Private Assessment</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
              Dites-nous ce que vous voulez régler en Turquie. Nous construisons la route.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#c9c0b5]">
              Installation, société, fiscalité, santé, immobilier, bureaux, transport, hôtels, accès privé ou membership : chaque demande commence par un échange confidentiel.
            </p>
            <Link href="/diagnostic-prive" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d7b46a] px-9 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#07111f] transition hover:bg-[#efd08a]">
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
