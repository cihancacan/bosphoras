import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Clock,
  Globe,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { buildMetadata } from '@/lib/seo';

const locale = 'fr' as const;

export const metadata: Metadata = buildMetadata({
  locale,
  path: '/diagnostic-prive',
  title: 'Contact privé | Diagnostic Bosphoras',
  description:
    'Contactez Bosphoras pour un diagnostic privé en Turquie : installation, fiscalité, société, santé, assurance, immobilier, bureaux, transport VIP, hôtels, événements et accès privé.',
});

const needs = [
  'Installation en Turquie',
  'Création d’entreprise',
  'Fiscalité & résidence',
  'Avocat & conformité',
  'Santé & assurance',
  'Immobilier & relocation',
  'Bureaux privés ou partagés',
  'Transport VIP & hospitality',
  'Hôtels, yachts, événements',
  'Accès privé & membership',
];

const process = [
  {
    title: 'Analyse confidentielle',
    text: 'Nous étudions votre profil, votre pays de résidence, votre calendrier, votre budget et vos priorités.',
  },
  {
    title: 'Sélection des bons interlocuteurs',
    text: 'Avocat, fiscaliste, comptable, assureur, médecin, bureau, transporteur, hôtel ou partenaire privé.',
  },
  {
    title: 'Organisation de la suite',
    text: 'Nous vous proposons une feuille de route claire pour avancer sans perte de temps.',
  },
];

export default function PrivateAssessmentPage() {
  return (
    <>
      <Header locale={locale} currentPath="/diagnostic-prive" />

      <main className="bg-[#f8f1e7] pt-24 text-[#101827] md:pt-28">
        <section className="relative overflow-hidden border-b border-[#d8c7a1] bg-[radial-gradient(circle_at_82%_8%,rgba(196,151,84,0.20),transparent_28%),linear-gradient(135deg,#f8f1e7_0%,#fffaf0_55%,#efe4d2_100%)]">
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                'linear-gradient(#d8c7a1 1px, transparent 1px), linear-gradient(90deg, #d8c7a1 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />

          <div className="container-editorial relative z-10 grid gap-12 py-12 md:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div className="lg:pt-8">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">
                Bosphoras · Contact privé
              </p>

              <h1 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">
                Demander un diagnostic privé
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#3e4857] md:text-lg">
                Décrivez votre demande. Nous analysons le sujet et revenons vers vous avec la bonne approche.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5">
                  <Lock className="mb-4 h-5 w-5 text-[#8a6728]" />
                  <p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">
                    Confidentialité renforcée
                  </p>
                </div>

                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5">
                  <Globe className="mb-4 h-5 w-5 text-[#8a6728]" />
                  <p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">
                    Français · English · Русский · العربية
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3 text-sm text-[#3e4857]">
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#8a6728]" />
                  <a href="tel:+33188842222" className="hover:text-[#8a6728]">
                    01 88 84 22 22
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#8a6728]" />
                  <a href="mailto:contact@bosphoras.com" className="hover:text-[#8a6728]">
                    contact@bosphoras.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#8a6728]" />
                  Paris · Istanbul · Londres · Almaty · Moscou · Dubai
                </p>
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
                      Formulaire confidentiel
                    </p>
                    <h2 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-[#121826] md:text-4xl">
                      Votre demande
                    </h2>
                  </div>
                  <ShieldCheck className="hidden h-8 w-8 text-[#8a6728] sm:block" strokeWidth={1.4} />
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
                      Téléphone *
                    </span>
                    <input
                      required
                      name="Téléphone"
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
                      Pays de résidence
                    </span>
                    <input
                      name="Pays de résidence"
                      type="text"
                      placeholder="France, UAE, Kazakhstan..."
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Ville ciblée
                    </span>
                    <select
                      name="Ville ciblée"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    >
                      <option value="">Sélectionner</option>
                      <option value="Istanbul">Istanbul</option>
                      <option value="Bodrum">Bodrum</option>
                      <option value="Antalya">Antalya</option>
                      <option value="Plusieurs villes">Plusieurs villes</option>
                      <option value="Je ne sais pas encore">Je ne sais pas encore</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Sujet principal *
                    </span>
                    <select
                      required
                      name="Sujet principal"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    >
                      <option value="">Sélectionner</option>
                      <option value="Installation en Turquie">Installation en Turquie</option>
                      <option value="Fiscalité / résidence fiscale">Fiscalité / résidence fiscale</option>
                      <option value="Création d’entreprise">Création d’entreprise</option>
                      <option value="Immobilier / relocation">Immobilier / relocation</option>
                      <option value="Santé / assurance">Santé / assurance</option>
                      <option value="Transport VIP / hospitality">Transport VIP / hospitality</option>
                      <option value="Accès privé / membership">Accès privé / membership</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Délai souhaité
                    </span>
                    <select
                      name="Délai souhaité"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    >
                      <option value="">Sélectionner</option>
                      <option value="Urgent">Urgent</option>
                      <option value="Sous 30 jours">Sous 30 jours</option>
                      <option value="1 à 3 mois">1 à 3 mois</option>
                      <option value="3 à 6 mois">3 à 6 mois</option>
                      <option value="Projet exploratoire">Projet exploratoire</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                      Budget / enveloppe
                    </span>
                    <select
                      name="Budget ou enveloppe"
                      className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8a6728]"
                    >
                      <option value="">Sélectionner</option>
                      <option value="À définir">À définir</option>
                      <option value="50k - 150k">50k - 150k</option>
                      <option value="150k - 500k">150k - 500k</option>
                      <option value="500k - 1M">500k - 1M</option>
                      <option value="1M+">1M+</option>
                    </select>
                  </label>
                </div>

                <label className="mt-4 block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#5c6676]">
                    Message *
                  </span>
                  <textarea
                    required
                    name="Message"
                    rows={6}
                    placeholder="Expliquez votre situation, vos objectifs et ce que vous souhaitez organiser en Turquie."
                    className="w-full border border-[#d8c7a1] bg-white px-4 py-3 text-sm leading-7 outline-none transition focus:border-[#8a6728]"
                  />
                </label>

                <label className="mt-5 flex gap-3 text-sm leading-6 text-[#5c6676]">
                  <input
                    required
                    name="Confidentialité acceptée"
                    type="checkbox"
                    value="Oui"
                    className="mt-1 h-4 w-4 border-[#d8c7a1]"
                  />
                  <span>
                    J’accepte que Bosphoras me contacte au sujet de cette demande. Je comprends que
                    les informations transmises seront traitées avec confidentialité.
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246] md:w-auto"
                >
                  Envoyer ma demande
                  <ArrowRight size={15} />
                </button>

                <p className="mt-5 text-xs leading-6 text-[#7a8494]">
                  Le formulaire ouvre votre messagerie afin d’envoyer la demande à contact@bosphoras.com.
                  Pour un formulaire connecté directement au CRM, il faudra ensuite brancher un service
                  d’envoi ou une API.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-16 text-[#fffaf0] md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d2a863]">
                Demandes prises en charge
              </p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                Les sujets que nous pouvons coordonner.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {needs.map((need) => (
                <div
                  key={need}
                  className="flex items-center gap-3 border border-[#d2a863]/20 bg-white/[0.03] p-4 text-sm leading-7 text-[#d8cfbf]"
                >
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#d2a863]" strokeWidth={1.4} />
                  <span>{need}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-editorial py-16 md:py-24">
          <div className="mb-10 max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">
              Méthode
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">
              La suite après votre demande.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((item, index) => (
              <article
                key={item.title}
                className="border border-[#d8c7a1] bg-[#fffaf0] p-8 shadow-[0_18px_55px_rgba(16,24,39,0.045)]"
              >
                <p className="font-serif text-4xl text-[#8a6728]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-8 font-serif text-3xl text-[#121826]">{item.title}</h3>
                <p className="mt-5 text-base leading-8 text-[#3e4857]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 pb-20 md:px-8 md:pb-28">
          <div className="mx-auto max-w-[1500px] border border-[#24334a] bg-[linear-gradient(90deg,#121826_0%,#1d2940_45%,#121826_100%)] p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div className="text-white">
                <Sparkles className="mb-6 h-7 w-7 text-[#d2a863]" strokeWidth={1.4} />
                <p className="font-serif text-3xl tracking-[-0.025em] md:text-5xl">
                  Votre demande reste confidentielle.
                </p>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/80">
                  Bosphoras ne remplace pas les professionnels réglementés. Notre rôle est de
                  filtrer, coordonner et organiser les bons interlocuteurs autour de votre projet.
                </p>
              </div>

              <div className="md:text-right">
                <a
                  href="mailto:contact@bosphoras.com?subject=Demande%20confidentielle%20Bosphoras"
                  className="inline-flex items-center justify-center bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#e0bc78]"
                >
                  Écrire à Bosphoras
                </a>

                <div className="mt-5 inline-flex items-center gap-2 text-sm text-white/80">
                  <Clock className="h-4 w-4 text-[#d2a863]" />
                  Réponse après analyse de la demande
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
