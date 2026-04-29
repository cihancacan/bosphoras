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
  title: 'Diagnostic privé | Contact Bosphoras',
  description:
    'Contactez Bosphoras pour un diagnostic privé en Turquie : installation, fiscalité, société, santé, assurance, immobilier, bureaux, transport VIP, hôtels, événements et accès privé.',
});

const contactCards = [
  {
    icon: Phone,
    title: 'Téléphone',
    text: 'Échange direct avec notre bureau.',
    value: '01 88 84 22 22',
    href: 'tel:+33188842222',
  },
  {
    icon: Mail,
    title: 'Email confidentiel',
    text: 'Pour transmettre une demande structurée.',
    value: 'contact@bosphoras.com',
    href: 'mailto:contact@bosphoras.com',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    text: 'Bosphoras · Panorama Grup',
    value: '88 Avenue des Ternes, 75017 Paris',
    href: 'https://maps.google.com/?q=88+Avenue+des+Ternes+75017+Paris',
  },
];

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
    title: 'Comprendre votre profil',
    text: 'Pays de résidence, famille, activité, budget, niveau de confidentialité, calendrier et priorités.',
  },
  {
    title: 'Identifier les bons interlocuteurs',
    text: 'Avocat, fiscaliste, comptable, assureur, médecin, bureau, hôtel, transporteur ou partenaire privé.',
  },
  {
    title: 'Construire la route',
    text: 'Une feuille de route claire pour organiser votre installation, vos affaires ou vos services privés en Turquie.',
  },
];

export default function PrivateAssessmentPage() {
  return (
    <>
      <Header locale={locale} currentPath="/diagnostic-prive" />

      <main className="bg-[#f8f1e7] pt-28 text-[#101827] md:pt-32">
        <section className="relative overflow-hidden border-b border-[#d8c7a1] bg-[radial-gradient(circle_at_82%_10%,rgba(196,151,84,0.20),transparent_28%),linear-gradient(135deg,#f8f1e7_0%,#fffaf0_55%,#efe4d2_100%)]">
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                'linear-gradient(#d8c7a1 1px, transparent 1px), linear-gradient(90deg, #d8c7a1 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />

          <div className="container-editorial relative z-10 grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">
                Bosphoras · Diagnostic privé
              </p>

              <h1 className="max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">
                Parlons de ce que vous voulez régler en Turquie.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-9 text-[#3e4857]">
                Installation, société, fiscalité, santé, assurance, immobilier, bureaux, transport,
                hôtels, événements ou accès privé : chaque demande commence par un échange
                confidentiel, structuré et orienté solution.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:contact@bosphoras.com?subject=Demande%20de%20diagnostic%20priv%C3%A9%20Bosphoras"
                  className="inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] transition hover:bg-[#263246]"
                >
                  Envoyer une demande
                  <ArrowRight size={15} />
                </a>

                <a
                  href="tel:+33188842222"
                  className="inline-flex items-center justify-center border border-[#a77a35] bg-[#fffaf0]/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728] transition hover:bg-[#fffaf0]"
                >
                  Appeler le bureau
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
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

                <div className="border border-[#d8c7a1] bg-[#fffaf0]/80 p-5">
                  <MapPin className="mb-4 h-5 w-5 text-[#8a6728]" />
                  <p className="text-[0.62rem] uppercase leading-6 tracking-[0.16em] text-[#5c6676]">
                    Paris · Istanbul · Londres · Almaty · Moscou · Dubai
                  </p>
                </div>
              </div>
            </div>

            <aside className="relative">
              <div className="absolute -inset-4 border border-[#d8c7a1]" />
              <div className="relative border border-[#d8c7a1] bg-[#121826] p-8 text-[#fffaf0] shadow-[0_40px_120px_rgba(16,24,39,0.22)] md:p-10">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#d2a863]">
                  Private Desk
                </p>

                <p className="mt-10 font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
                  One trusted desk. Everything Turkey.
                </p>

                <p className="mt-8 text-base leading-8 text-[#d8cfbf]">
                  Un seul point d’entrée pour filtrer les bons interlocuteurs, coordonner les
                  démarches et protéger votre temps.
                </p>

                <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#d2a863] to-transparent" />

                <div className="grid gap-4 text-sm leading-7 text-[#d8cfbf] sm:grid-cols-2">
                  <p>Avocat · Fiscalité</p>
                  <p>Société · Comptabilité</p>
                  <p>Santé · Assurance</p>
                  <p>Immobilier · Bureaux</p>
                  <p>Transport · Hôtels</p>
                  <p>Accès privé</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="container-editorial py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group border border-[#d8c7a1] bg-[#fffaf0] p-7 shadow-[0_18px_55px_rgba(16,24,39,0.045)] transition hover:border-[#8a6728]"
                >
                  <Icon className="h-7 w-7 text-[#8a6728]" strokeWidth={1.4} />
                  <h2 className="mt-8 font-serif text-3xl text-[#121826]">{card.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#3e4857]">{card.text}</p>
                  <p className="mt-5 text-sm font-semibold text-[#8a6728]">{card.value}</p>
                </a>
              );
            })}
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-20 text-[#fffaf0] md:px-8 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d2a863]">
                Demandes prises en charge
              </p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                Un bureau privé pour les sujets qui demandent méthode, réseau et discrétion.
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
          <div className="mb-12 max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#8a6728]">
              Méthode
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">
              Trois étapes avant d’agir.
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
