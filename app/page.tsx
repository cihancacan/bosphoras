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
import { buildMetadata, organizationSchema, websiteSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/',
  title: 'Bosphoras | Bureau privé en Turquie pour investisseurs internationaux',
  description:
    'Bosphoras accompagne les investisseurs, entrepreneurs et familles souhaitant s’installer en Turquie : fiscalité, avocat, société, comptabilité, santé, assurance, immobilier, bureaux, transport VIP et accès privé à Istanbul, Bodrum, Antalya, Paris, Londres, Almaty, Moscou et Dubai.',
});

const locations = ['Paris', 'Istanbul', 'Londres', 'Almaty', 'Moscou', 'Dubai'];

const strategicServices = [
  {
    icon: Scale,
    title: 'Legal & Tax Desk',
    text: 'Avocat, fiscalité, résidence, contrats, due diligence immobilière, structuration patrimoniale et coordination avec des professionnels indépendants du droit turc.',
  },
  {
    icon: Landmark,
    title: 'Company & Accounting',
    text: 'Création d’entreprise, comptabilité, domiciliation, compte bancaire, bureaux équipés, bureaux partagés premium et présence professionnelle en Turquie.',
  },
  {
    icon: HeartPulse,
    title: 'Health & Insurance',
    text: 'Assurance santé locale ou internationale, médecins privés, cliniques sélectionnées, check-up exécutif, assistance famille et orientation médicale encadrée.',
  },
  {
    icon: Building2,
    title: 'Property & Living',
    text: 'Location, achat, villas, appartements, gestion locative, ameublement, travaux, personnel de maison et installation à Istanbul, Bodrum ou Antalya.',
  },
  {
    icon: Plane,
    title: 'VIP Logistics',
    text: 'Chauffeur privé, transfert aéroport VIP, berline, van, limousine, jets privés, hélicoptères, yachts, palaces, hôtels et villas privées.',
  },
  {
    icon: KeyRound,
    title: 'Private Access Club',
    text: 'Carte membre, restaurants, meilleures tables disponibles, clubs privés, dîners d’affaires, événements, shopping luxe et introductions sur accord mutuel.',
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

const process = [
  'Diagnostic confidentiel du profil, du pays de résidence, de la famille, du budget et des priorités.',
  'Choix de la ville, stratégie résidence/fiscalité, arbitrage entre location, achat, société ou simple présence privée.',
  'Coordination des professionnels : avocat, fiscaliste, comptable, assureur, médecin, clinique, bureau, banque, hôtel ou transport.',
  'Exécution locale : rendez-vous, visites, transferts, documents, traductions, réservations, négociation et suivi.',
  'Support continu : membership privé, préférences client, accès prioritaire, événements, relations qualifiées et services récurrents.',
];

const seoQuestions = [
  'Comment s’installer en Turquie en tant qu’étranger ?',
  'Faut-il choisir Istanbul, Bodrum ou Antalya ?',
  'Comment créer une entreprise en Turquie ?',
  'Quelle assurance santé choisir en Turquie ?',
  'Faut-il louer avant d’acheter en Turquie ?',
  'Comment organiser avocat, fiscalité, comptabilité et résidence ?',
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={websiteSchema()} />
      <Header locale={locale} currentPath="/" />

      <main className="bg-[hsl(42,32%,95%)] text-[hsl(220,45%,12%)]">
        <section className="relative isolate overflow-hidden pt-32 md:pt-40">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(42,65%,46%)]/50 to-transparent" />
          <div className="absolute -right-40 top-10 -z-10 h-[38rem] w-[38rem] rounded-full bg-[hsl(42,65%,52%)]/10 blur-3xl" />
          <div className="absolute -left-44 bottom-0 -z-10 h-[36rem] w-[36rem] rounded-full bg-[hsl(220,45%,12%)]/7 blur-3xl" />

          <div className="container-editorial pb-16 md:pb-24">
            <div className="grid gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-20">
              <div>
                <div className="mb-8 flex flex-wrap items-center gap-4">
                  <span className="h-px w-12 bg-[hsl(42,65%,36%)]" />
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[hsl(42,65%,34%)]">
                    Bureau privé · Turquie · International
                  </p>
                </div>

                <h1 className="font-serif text-[4.6rem] leading-[0.86] tracking-[-0.06em] text-[hsl(220,45%,10%)] md:text-[7.8rem] lg:text-[9.2rem]">
                  Bosphoras
                </h1>

                <p className="mt-7 max-w-3xl font-serif text-3xl leading-tight tracking-[-0.035em] text-[hsl(220,30%,20%)] md:text-5xl">
                  Votre bureau privé pour tout organiser en Turquie.
                </p>

                <p className="mt-8 max-w-2xl text-lg leading-9 text-[hsl(220,12%,38%)]">
                  Installation, fiscalité, avocat, création d’entreprise, comptabilité, bureaux, santé, assurance, immobilier, hôtels, chauffeurs, jets, yachts, restaurants, événements privés et accès membre à Istanbul, Bodrum et Antalya.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link href="/diagnostic-prive" className="group inline-flex items-center justify-center gap-3 bg-[hsl(220,45%,12%)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(45,30%,96%)] transition hover:bg-[hsl(220,35%,20%)]">
                    Recevoir mon diagnostic privé
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center border border-[hsl(42,20%,72%)] bg-white/50 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(220,45%,12%)] transition hover:border-[hsl(42,65%,36%)] hover:text-[hsl(42,65%,32%)]">
                    Découvrir le bureau privé
                  </Link>
                </div>

                <div className="mt-10 grid gap-3 border-l border-[hsl(42,65%,38%)]/35 pl-5 text-xs uppercase tracking-[0.18em] text-[hsl(220,14%,38%)]">
                  <span>{locations.join(' · ')}</span>
                  <span>Français · English · Русский · العربية</span>
                </div>
              </div>

              <aside className="relative">
                <div className="absolute -inset-4 border border-[hsl(42,25%,78%)]/80" />
                <div className="relative overflow-hidden bg-[hsl(220,45%,9%)] p-8 shadow-[0_40px_120px_rgba(20,28,46,0.22)] md:p-10">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[hsl(42,65%,68%)]">Private Access</p>
                      <p className="mt-3 font-serif text-4xl leading-none text-[hsl(45,30%,96%)]">Black</p>
                    </div>
                    <div className="text-right text-[0.62rem] uppercase tracking-[0.26em] text-[hsl(45,20%,74%)]">
                      Member<br />Invitation only
                    </div>
                  </div>

                  <div className="my-14 h-px bg-gradient-to-r from-transparent via-[hsl(42,65%,68%)]/70 to-transparent" />

                  <p className="font-serif text-4xl leading-tight tracking-[-0.035em] text-[hsl(45,30%,96%)] md:text-[3.3rem]">
                    One call.<br />One trusted desk.<br />Everything Turkey.
                  </p>

                  <div className="mt-12 grid gap-4 text-sm leading-7 text-[hsl(45,20%,78%)]">
                    <p>Pas de remises. Pas de bruit. Seulement l’accès.</p>
                    <p>Tables prioritaires, dîners privés, chauffeurs, hôtels, yachts, professionnels sélectionnés et introductions uniquement avec accord mutuel.</p>
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-px bg-[hsl(42,65%,68%)]/20 text-center">
                    <div className="bg-[hsl(220,45%,9%)] p-5">
                      <p className="font-serif text-3xl text-[hsl(42,65%,68%)]">4,9/5</p>
                      <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-[hsl(45,20%,70%)]">182 avis clients</p>
                    </div>
                    <div className="bg-[hsl(220,45%,9%)] p-5">
                      <p className="font-serif text-3xl text-[hsl(42,65%,68%)]">6</p>
                      <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-[hsl(45,20%,70%)]">Points d’ancrage</p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-8 bg-white px-8 py-7 shadow-[0_24px_70px_rgba(20,28,46,0.12)]">
                  <p className="font-serif text-2xl leading-snug text-[hsl(220,45%,12%)]">
                    “En Turquie, la vraie difficulté n’est pas de trouver un service. C’est de savoir à qui faire confiance.”
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-y border-[hsl(42,18%,82%)] bg-white/70 py-8">
          <div className="container-editorial grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            {locations.map((city) => (
              <div key={city} className="text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[hsl(220,14%,38%)]">
                {city}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,34%)]">Notre différence</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">
                Nous ne sommes pas une agence immobilière. Nous sommes le point d’entrée privé.
              </h2>
            </div>
            <div className="space-y-7 text-lg leading-9 text-[hsl(220,12%,38%)]">
              <p>
                Un investisseur sérieux ne commence pas par acheter un appartement. Il commence par comprendre où vivre, comment structurer sa résidence, quelle fiscalité vérifier, quel avocat consulter, quelle assurance choisir, quel médecin contacter, quel bureau utiliser et qui peut réellement exécuter sur place.
              </p>
              <p>
                Bosphoras coordonne cette entrée en Turquie avec une logique de bureau privé : discrétion, sélection, conformité, protection des informations confidentielles et exécution locale.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[hsl(220,45%,10%)] py-20 text-[hsl(45,30%,96%)] md:py-28">
          <div className="container-editorial">
            <div className="mb-16 max-w-4xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,68%)]">Services privés</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Un seul bureau. Une Turquie entière à organiser.</h2>
              <p className="mt-7 text-lg leading-9 text-[hsl(45,20%,76%)]">
                Chaque service est pensé pour une clientèle privée : investisseurs, entrepreneurs, familles patrimoniales, dirigeants, clients de banque privée, détenteurs de cartes premium et résidents internationaux.
              </p>
            </div>

            <div className="grid gap-px bg-[hsl(42,65%,68%)]/20 md:grid-cols-2 xl:grid-cols-3">
              {strategicServices.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="group bg-[hsl(220,45%,10%)] p-8 transition duration-300 hover:bg-[hsl(220,38%,16%)]">
                    <Icon className="mb-10 text-[hsl(42,65%,68%)]" size={30} strokeWidth={1.35} />
                    <h3 className="font-serif text-3xl text-[hsl(45,30%,96%)]">{item.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-[hsl(45,20%,74%)]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial">
            <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,34%)]">Villes stratégiques</p>
                <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">Istanbul. Bodrum. Antalya.</h2>
              </div>
              <p className="max-w-md text-base leading-8 text-[hsl(220,12%,40%)]">
                Trois villes, trois usages, trois manières d’entrer en Turquie : business, lifestyle, famille, santé, fiscalité, investissement ou résidence privée.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {cities.map((city, index) => (
                <article key={city.name} className="border border-[hsl(42,18%,82%)] bg-white p-8 shadow-[0_18px_55px_rgba(20,28,46,0.07)]">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[hsl(42,65%,34%)]">0{index + 1}</span>
                  <h3 className="mt-10 font-serif text-4xl tracking-[-0.035em]">{city.name}</h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(220,14%,38%)]">{city.role}</p>
                  <p className="mt-6 text-sm leading-7 text-[hsl(220,12%,40%)]">{city.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="container-editorial grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,34%)]">Confiance & conformité</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">Le vrai luxe, c’est la sécurité.</h2>
            </div>
            <div className="space-y-7 text-lg leading-9 text-[hsl(220,12%,38%)]">
              <p>
                Les sujets juridiques et fiscaux peuvent être coordonnés avec des professionnels indépendants du droit turc, notamment Kavlak Law Firm lorsque cela est approprié. Les décisions légales, fiscales, médicales ou assurantielles restent validées directement par les professionnels habilités.
              </p>
              <p>
                Bosphoras protège la relation : confidentialité, sélection des prestataires, données sensibles, documents, préférences privées, commissions transparentes, conformité et absence de promesses irréalistes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,34%)]">SEO & IA</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">Les questions que nos clients posent avant de venir.</h2>
            </div>
            <div className="grid gap-px bg-[hsl(42,18%,82%)]">
              {seoQuestions.map((question) => (
                <div key={question} className="bg-[hsl(42,32%,95%)] p-6 text-lg text-[hsl(220,45%,12%)]">
                  {question}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[hsl(220,45%,10%)] py-20 text-[hsl(45,30%,96%)] md:py-28">
          <div className="container-editorial grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,68%)]">Méthode Bosphoras</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">Une exécution calme, claire, confidentielle.</h2>
            </div>
            <div className="border-l border-[hsl(42,65%,68%)]/25">
              {process.map((step, index) => (
                <div key={step} className="grid grid-cols-[5rem_1fr] border-b border-[hsl(42,65%,68%)]/14 py-6 last:border-b-0">
                  <span className="font-serif text-3xl text-[hsl(42,65%,68%)]">0{index + 1}</span>
                  <p className="text-base leading-8 text-[hsl(45,20%,76%)]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 text-center md:py-28">
          <div className="container-editorial max-w-4xl">
            <Sparkles className="mx-auto mb-8 text-[hsl(42,65%,38%)]" size={34} strokeWidth={1.25} />
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,34%)]">Private Assessment</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
              Dites-nous ce que vous voulez régler en Turquie. Nous construisons la route.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[hsl(220,12%,38%)]">
              Installation, société, fiscalité, santé, immobilier, bureaux, transport, hôtels, accès privé ou membership : chaque demande commence par un échange confidentiel.
            </p>
            <Link href="/diagnostic-prive" className="mt-10 inline-flex items-center justify-center gap-3 bg-[hsl(220,45%,12%)] px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(45,30%,96%)] transition hover:bg-[hsl(220,35%,20%)]">
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
