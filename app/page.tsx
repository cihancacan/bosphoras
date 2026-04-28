import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Shield, Building2, HeartPulse, Briefcase, Car, KeyRound } from 'lucide-react';
import { buildMetadata, organizationSchema, websiteSchema } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/',
  title: 'Bosphoras — Votre Bureau Privé en Turquie',
  description:
    "Bosphoras est le bureau privé des investisseurs, entrepreneurs et familles internationales en Turquie : avocat, fiscalité, société, santé, assurance, immobilier, bureaux, transport VIP et accès privé.",
});

const pillars = [
  {
    icon: Shield,
    title: 'Legal & Tax',
    text: 'Avocat, fiscalité, résidence, contrats, due diligence et structuration avec des professionnels indépendants sélectionnés.',
  },
  {
    icon: Briefcase,
    title: 'Business Setup',
    text: 'Création d’entreprise, comptabilité, domiciliation, banque, bureaux privés et présence professionnelle en Turquie.',
  },
  {
    icon: HeartPulse,
    title: 'Health & Insurance',
    text: 'Assurances santé locales ou internationales, médecins privés, cliniques sélectionnées et check-up exécutif.',
  },
  {
    icon: Building2,
    title: 'Property & Living',
    text: 'Location, achat, quartiers, villas, appartements, gestion locative, ameublement et installation familiale.',
  },
  {
    icon: Car,
    title: 'VIP Hospitality',
    text: 'Chauffeur privé, transferts VIP, palaces, restaurants, dîners d’affaires, jets, hélicoptères et yachts.',
  },
  {
    icon: KeyRound,
    title: 'Private Access',
    text: 'Carte membre, événements privés, introductions qualifiées, meilleures tables disponibles et accès discret.',
  },
];

const cities = [
  {
    name: 'Istanbul',
    label: 'Business · Finance · Santé privée',
    text: 'Pour les entrepreneurs, investisseurs et familles qui veulent une capitale économique, juridique, médicale et internationale.',
  },
  {
    name: 'Bodrum',
    label: 'Villas · Yachts · Lifestyle discret',
    text: 'Pour les clients qui recherchent une résidence secondaire, une marina, une villa et une vie privée méditerranéenne.',
  },
  {
    name: 'Antalya',
    label: 'Famille · Santé · Qualité de vie',
    text: 'Pour les familles, expatriés et investisseurs qui privilégient climat, confort, santé, mer et installation longue durée.',
  },
];

const process = [
  'Diagnostic privé',
  'Stratégie ville, résidence et fiscalité',
  'Coordination avocat, comptable, santé et assurance',
  'Organisation logement, bureau, transport et vie privée',
  'Suivi long terme et accès membre',
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={organizationSchema()} />
      <StructuredData data={websiteSchema()} />
      <Header locale={locale} currentPath="/" />

      <main className="bg-[hsl(45,30%,96%)] text-[hsl(220,45%,12%)]">
        <section className="relative isolate overflow-hidden pt-32 md:pt-40">
          <div className="absolute left-1/2 top-0 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[hsl(42,65%,52%)]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-[hsl(220,45%,12%)]/6 blur-3xl" />

          <div className="container-editorial pb-20 md:pb-28">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-12 bg-[hsl(42,65%,38%)]" />
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[hsl(42,65%,35%)]">
                    Istanbul · Bodrum · Antalya
                  </p>
                </div>

                <h1 className="font-serif text-[4.4rem] leading-[0.88] tracking-[-0.055em] text-[hsl(220,45%,12%)] md:text-[7.2rem] lg:text-[8.4rem]">
                  Bosphoras
                </h1>

                <p className="mt-7 max-w-2xl font-serif text-3xl leading-tight tracking-[-0.03em] text-[hsl(220,28%,24%)] md:text-5xl">
                  Votre bureau privé en Turquie.
                </p>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-[hsl(220,12%,42%)]">
                  Un seul interlocuteur pour organiser votre installation, vos affaires et votre vie privée en Turquie : avocat, fiscalité, société, comptabilité, santé, assurance, immobilier, bureaux, transport VIP, hôtels, événements et accès privé.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link href="/diagnostic-prive" className="group inline-flex items-center justify-center gap-3 bg-[hsl(220,45%,12%)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(45,30%,96%)] transition hover:bg-[hsl(220,35%,20%)]">
                    Recevoir mon diagnostic privé
                    <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center border border-[hsl(42,20%,75%)] bg-white/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(220,45%,12%)] transition hover:border-[hsl(42,65%,38%)] hover:text-[hsl(42,65%,35%)]">
                    Découvrir nos services
                  </Link>
                </div>

                <div className="mt-10 grid gap-2 border-l border-[hsl(42,65%,38%)]/35 pl-5 text-xs uppercase tracking-[0.2em] text-[hsl(220,14%,42%)]">
                  <span>Paris · Londres · Istanbul · Almaty</span>
                  <span>Français · English · Русский · العربية</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 border border-[hsl(42,25%,78%)]/80" />
                <div className="relative bg-[hsl(220,45%,12%)] p-7 shadow-[0_38px_110px_rgba(20,28,46,0.18)] md:p-9">
                  <div className="mb-16 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[hsl(42,65%,68%)]">Private Access</p>
                      <p className="mt-3 font-serif text-3xl leading-none text-[hsl(45,30%,96%)]">Black</p>
                    </div>
                    <p className="text-right text-[0.62rem] uppercase tracking-[0.28em] text-[hsl(45,20%,75%)]">Member<br />0007</p>
                  </div>

                  <div className="mb-16 h-px bg-gradient-to-r from-transparent via-[hsl(42,65%,68%)]/70 to-transparent" />

                  <p className="font-serif text-4xl leading-tight tracking-[-0.03em] text-[hsl(45,30%,96%)] md:text-5xl">
                    One call.<br />One trusted desk.<br />Everything Turkey.
                  </p>

                  <div className="mt-12 grid gap-4 text-sm leading-7 text-[hsl(45,20%,78%)]">
                    <p>Pas de remises. Pas de bruit. Seulement l’accès.</p>
                    <p>Réservations prioritaires, dîners privés, introductions sur accord mutuel et assistance dédiée.</p>
                  </div>
                </div>

                <div className="relative mt-8 bg-white px-7 py-6 shadow-[0_20px_60px_rgba(20,28,46,0.12)]">
                  <p className="font-serif text-2xl leading-snug text-[hsl(220,45%,12%)]">
                    “En Turquie, la vraie difficulté n’est pas de trouver un service. C’est de savoir à qui faire confiance.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[hsl(42,18%,84%)] bg-white/55 py-10">
          <div className="container-editorial grid gap-6 md:grid-cols-4">
            {['Bureau privé', 'Réseau sélectionné', 'Confidentialité', 'Exécution locale'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(220,14%,42%)]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[hsl(42,65%,38%)]/40 text-[hsl(42,65%,35%)]"><Check size={13} /></span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,38%)]">Positionnement</p>
                <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
                  Nous ne sommes pas une agence immobilière.
                </h2>
              </div>
              <div className="space-y-7 text-lg leading-9 text-[hsl(220,12%,42%)]">
                <p>
                  Bosphoras commence par la stratégie : ville, résidence, fiscalité, avocat, santé, assurance, banque, société, bureau, location ou achat. L’immobilier arrive seulement lorsque la décision est sécurisée.
                </p>
                <p>
                  Notre métier n’est pas de tout faire nous-mêmes. Notre métier est de savoir qui appeler, quand l’appeler, comment encadrer la relation et comment protéger le client.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[hsl(220,45%,12%)] py-20 text-[hsl(45,30%,96%)] md:py-28">
          <div className="container-editorial">
            <div className="mb-14 max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,68%)]">Services privés</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">Un seul bureau. Toute la Turquie.</h2>
              <p className="mt-6 text-lg leading-8 text-[hsl(45,20%,75%)]">
                Chaque domaine est traité avec des professionnels sélectionnés : juridiques, fiscaux, comptables, médicaux, assurantiels, immobiliers, hôteliers et lifestyle.
              </p>
            </div>

            <div className="grid gap-px bg-[hsl(42,65%,68%)]/20 md:grid-cols-2 xl:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="group bg-[hsl(220,45%,12%)] p-8 transition hover:bg-[hsl(220,38%,16%)]">
                    <Icon className="mb-10 text-[hsl(42,65%,68%)]" size={28} strokeWidth={1.4} />
                    <h3 className="font-serif text-3xl text-[hsl(45,30%,96%)]">{pillar.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-[hsl(45,20%,72%)]">{pillar.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,38%)]">Trois points d’entrée</p>
                <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">Istanbul. Bodrum. Antalya.</h2>
              </div>
              <p className="max-w-md text-base leading-8 text-[hsl(220,12%,42%)]">
                Nous adaptons le parcours selon la ville, le profil familial, la stratégie fiscale, la santé, le business et le niveau de service attendu.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {cities.map((city, index) => (
                <article key={city.name} className="relative overflow-hidden border border-[hsl(42,18%,84%)] bg-white p-8 shadow-[0_18px_50px_rgba(20,28,46,0.06)]">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[hsl(42,65%,38%)]">0{index + 1}</span>
                  <h3 className="mt-10 font-serif text-4xl tracking-[-0.03em]">{city.name}</h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(220,14%,42%)]">{city.label}</p>
                  <p className="mt-6 text-sm leading-7 text-[hsl(220,12%,42%)]">{city.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="container-editorial grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,38%)]">Encadrement</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">Le luxe commence par la sécurité.</h2>
            </div>
            <div className="space-y-7 text-lg leading-9 text-[hsl(220,12%,42%)]">
              <p>
                Les sujets juridiques et fiscaux peuvent être coordonnés avec des professionnels indépendants du droit turc, notamment Kavlak Law Firm lorsque cela est approprié.
              </p>
              <p>
                Bosphoras ne remplace pas un avocat, un médecin, un comptable, un assureur ou un prestataire réglementé. Notre rôle est de filtrer, organiser, coordonner et préserver vos intérêts dans chaque étape.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-editorial">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,38%)]">Méthode</p>
                <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-6xl">Une exécution calme, claire, confidentielle.</h2>
              </div>
              <div className="border-l border-[hsl(42,25%,78%)]">
                {process.map((step, index) => (
                  <div key={step} className="grid grid-cols-[5rem_1fr] border-b border-[hsl(42,18%,84%)] py-6 last:border-b-0">
                    <span className="font-serif text-3xl text-[hsl(42,65%,38%)]">0{index + 1}</span>
                    <p className="text-lg text-[hsl(220,45%,12%)]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[hsl(220,45%,12%)] py-20 text-center text-[hsl(45,30%,96%)] md:py-28">
          <div className="container-editorial max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(42,65%,68%)]">Private Assessment</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl">Dites-nous ce que vous voulez régler en Turquie. Nous construisons la route.</h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[hsl(45,20%,76%)]">
              Installation, société, fiscalité, santé, immobilier, bureaux, transport, hôtels, accès privé ou membership : chaque demande commence par un échange confidentiel.
            </p>
            <Link href="/diagnostic-prive" className="mt-10 inline-flex items-center justify-center gap-3 bg-[hsl(42,65%,60%)] px-9 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(220,45%,12%)] transition hover:bg-[hsl(42,65%,68%)]">
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
