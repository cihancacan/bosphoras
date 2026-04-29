import type { Metadata } from 'next';
import {
  ArrowRight,
  BadgeCheck,
  Globe,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/adhesion/demande-membre',
  title: 'Demande d’adhésion privée | Bosphoras Private Access',
  description:
    'Demande d’adhésion Bosphoras Private Access : cercle privé sur parrainage, recommandation ou validation du profil. Admission annuelle, retainer mensuel, accès prioritaire au bureau privé Bosphoras en Turquie.',
});

const keyPoints = [
  'Sur parrainage, recommandation ou validation du profil.',
  'Une seule adhésion. Un seul niveau de service.',
  'Admission annuelle : 10 000 USD.',
  'Retainer mensuel : 1 000 USD / mois.',
  'Prestations externes, honoraires professionnels et réservations facturés séparément.',
];

const services = [
  'Installation en Turquie',
  'Business / société / fiscalité',
  'Santé / assurance',
  'Immobilier / relocation',
  'Transport VIP / hospitality',
  'Accès privé / lifestyle',
  'Plusieurs besoins',
];

export default function MembershipApplicationPage() {
  return (
    <>
      <Header locale={locale} currentPath="/adhesion/demande-membre" />

      <main className="bg-[#f8f1e7] pt-24 text-[#101827] md:pt-28">
        <section className="relative overflow-hidden border-b border-[#d8c7a1] bg-[radial-gradient(circle_at_82%_8%,rgba(196,151,84,0.20),transparent_28%),linear-gradient(135deg,#f8f1e7_0%,#fffaf0_55%,#efe4d2_100%)]">
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                'linear-gradient(#d8c7a1 1px, transparent 1px), linear-gradient(90deg, #d8c7a1 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />

          <div className="container-editorial relative z-10 grid gap-12 py-12 md:py-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div className="lg:pt-8">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">
                Bosphoras Private Access
              </p>

              <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">
                Demande d’adhésion privée
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#3e4857] md:text-lg">
                Bosphoras Private Access est réservé aux profils sélectionnés recherchant un accès discret, fiable et prioritaire en Turquie.
              </p>

              <div className="mt-8 border border-[#d8c7a1] bg-[#fffaf0]/85 p-6 shadow-[0_18px_55px_rgba(16,24,39,0.045)]">
                <p className="font-serif text-2xl leading-tight text-[#121826]">
                  Une seule adhésion. Un seul niveau de service.
                </p>
                <p className="mt-4 text-sm leading-7 text-[#3e4857]">
                  Nous ne sélectionnons pas uniquement un budget. Nous sélectionnons un profil, une intention et une compatibilité avec notre réseau.
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {keyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-7 text-[#3e4857]">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#8a6728]" strokeWidth={1.5} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5">
                  <Lock className="mb-4 h-5 w-5 text-[#8a6728]" />
                  <p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">
                    Candidature confidentielle
                  </p>
                </div>

                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5">
                  <Globe className="mb-4 h-5 w-5 text-[#8a6728]" />
                  <p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">
                    Paris · Istanbul · Londres · Almaty · Moscou · Dubai
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 hidden border border-[#d8c7a1] md:block" />

              <form
                action="mailto:contact@bosphoras.com"
                method="post"
                encType="text/plain"
                className="relative border border-[#d8c7a1] bg-[#fffaf0] p-6 shadow-[0_35px_100px_rgba(16,24,39,0.12)] md:p-8"
              >
                <div className="mb-8 flex items-center justify-between gap-6 border-b border-[#d8c7a1] pb-6">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#8a6728]">
                      Candidature membre
                    </p>
                    <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#121826] md:text-4xl">
                      Votre profil
                    </h2>
                  </div>
                  <BadgeCheck className="hidden h-8 w-8 text-[#8a6728] sm:block" strokeWidth={1.4} />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Nom complet *
                    </span>
                    <input
                      required
                      name="Nom complet"
                      type="text"
                      placeholder="Votre nom"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Téléphone WhatsApp *
                    </span>
                    <input
                      required
                      name="Téléphone WhatsApp"
                      type="tel"
                      placeholder="+33..."
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Email *
                    </span>
                    <input
                      required
                      name="Email"
                      type="email"
                      placeholder="votre@email.com"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Pays de résidence *
                    </span>
                    <input
                      required
                      name="Pays de résidence"
                      type="text"
                      placeholder="France, UAE, Kazakhstan..."
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Parrain / recommandation
                    </span>
                    <input
                      name="Parrain ou recommandation"
                      type="text"
                      placeholder="Nom du parrain, si applicable"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Profil principal *
                    </span>
                    <select
                      required
                      name="Profil principal"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    >
                      <option value="">Sélectionner</option>
                      <option value="Entrepreneur">Entrepreneur</option>
                      <option value="Investisseur">Investisseur</option>
                      <option value="Dirigeant">Dirigeant</option>
                      <option value="Profession libérale">Profession libérale</option>
                      <option value="Family office">Family office</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Société / activité
                    </span>
                    <input
                      name="Société ou activité"
                      type="text"
                      placeholder="Nom de société, secteur, activité"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      LinkedIn / site internet
                    </span>
                    <input
                      name="LinkedIn ou site internet"
                      type="text"
                      placeholder="Lien LinkedIn ou site"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Budget annuel estimé
                    </span>
                    <select
                      name="Budget annuel estimé pour services privés"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    >
                      <option value="">Sélectionner</option>
                      <option value="Moins de 25 000 USD">Moins de 25 000 USD</option>
                      <option value="25 000 - 50 000 USD">25 000 - 50 000 USD</option>
                      <option value="50 000 - 100 000 USD">50 000 - 100 000 USD</option>
                      <option value="100 000 USD+">100 000 USD+</option>
                      <option value="Préfère en discuter en privé">Préfère en discuter en privé</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Besoin principal *
                    </span>
                    <select
                      required
                      name="Besoin principal"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    >
                      <option value="">Sélectionner</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                    Pourquoi souhaitez-vous rejoindre Bosphoras Private Access ? *
                  </span>
                  <textarea
                    required
                    name="Motivation et demande"
                    rows={6}
                    placeholder="Expliquez brièvement votre situation, votre projet en Turquie et ce que vous attendez du bureau privé Bosphoras."
                    className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm leading-7 outline-none transition focus:border-[#8a6728]"
                  />
                </label>

                <div className="mt-6 border border-[#d8c7a1] bg-[#f8f1e7] p-5">
                  <p className="font-serif text-2xl text-[#121826]">Conditions d’accès</p>
                  <p className="mt-3 text-sm leading-7 text-[#3e4857]">
                    Private Access fonctionne sur un cycle de 12 mois à compter de la validation du profil. Les conditions sont révisables chaque année.
                  </p>
                  <div className="mt-4 grid gap-3 text-sm leading-7 text-[#3e4857] sm:grid-cols-2">
                    <p><strong>Admission annuelle :</strong> 10 000 USD</p>
                    <p><strong>Retainer mensuel :</strong> 1 000 USD / mois</p>
                  </div>
                </div>

                <label className="mt-5 flex gap-3 text-sm leading-6 text-[#5c6676]">
                  <input
                    required
                    name="Conditions acceptées"
                    type="checkbox"
                    value="Oui"
                    className="mt-1 h-4 w-4 border-[#d8c7a1]"
                  />
                  <span>
                    Je confirme que les informations transmises sont exactes et j’accepte que Bosphoras me contacte concernant ma demande d’adhésion.
                  </span>
                </label>

                <label className="mt-3 flex gap-3 text-sm leading-6 text-[#5c6676]">
                  <input
                    required
                    name="Validation nécessaire acceptée"
                    type="checkbox"
                    value="Oui"
                    className="mt-1 h-4 w-4 border-[#d8c7a1]"
                  />
                  <span>
                    Je comprends que l’adhésion est soumise à validation et peut être refusée sans obligation de justification.
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246] md:w-auto"
                >
                  Envoyer ma candidature
                  <ArrowRight size={15} />
                </button>

                <p className="mt-5 text-xs leading-6 text-[#7a8494]">
                  Le formulaire ouvre votre messagerie afin d’envoyer la demande à contact@bosphoras.com. Pour un envoi direct vers CRM, une connexion technique pourra être ajoutée ensuite.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-16 text-[#fffaf0] md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d2a863]">
                Accès membre
              </p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                Ce n’est pas une carte de réduction.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#d8cfbf]">
              <p>
                Bosphoras Private Access est un accès privé à un bureau de coordination, d’introduction et d’exécution en Turquie.
              </p>
              <p>
                L’adhésion donne accès au traitement prioritaire, aux introductions qualifiées et à la coordination confidentielle. Les prestations externes, honoraires de professionnels, réservations, transports, hôtels, événements et frais spécifiques sont facturés séparément.
              </p>
              <p>
                Pour les clients qui souhaitent un accompagnement sans statut membre, Bosphoras Private Desk peut être proposé à partir de 6 000 USD / an ou sur devis personnalisé.
              </p>
            </div>
          </div>
        </section>

        <section className="container-editorial py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: UserCheck,
                title: 'Sélection',
                text: 'La candidature est étudiée selon le profil, l’intention et la compatibilité avec notre réseau.',
              },
              {
                icon: ShieldCheck,
                title: 'Confidentialité',
                text: 'Les demandes sont traitées avec discrétion, limitation des accès et partage strictement nécessaire.',
              },
              {
                icon: Sparkles,
                title: 'Accès',
                text: 'Un bureau privé pour coordonner les bons interlocuteurs en Turquie avec priorité et continuité.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border border-[#d8c7a1] bg-[#fffaf0] p-8 shadow-[0_18px_55px_rgba(16,24,39,0.045)]">
                  <Icon className="h-7 w-7 text-[#8a6728]" strokeWidth={1.4} />
                  <h3 className="mt-8 font-serif text-3xl text-[#121826]">{item.title}</h3>
                  <p className="mt-5 text-base leading-8 text-[#3e4857]">{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 border border-[#d8c7a1] bg-[#fffaf0] p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-serif text-3xl text-[#121826]">Une demande classique ?</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#3e4857]">
                  Si vous souhaitez un accompagnement sans accès membre, le Private Desk démarre à partir de 6 000 USD / an ou sur devis personnalisé.
                </p>
              </div>
              <a
                href="/diagnostic-prive"
                className="inline-flex items-center justify-center gap-3 bg-[#121826] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]"
              >
                Demande classique
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
