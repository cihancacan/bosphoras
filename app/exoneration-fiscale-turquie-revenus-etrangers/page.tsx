import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Landmark, ShieldCheck, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers';
const title = 'Exonération fiscale Turquie revenus étrangers : investisseurs et résidents internationaux | Bosphoras';
const description =
  'La Turquie prépare une exonération potentielle de 20 ans sur certains revenus étrangers. Analyse privée pour investisseurs, entrepreneurs, familles et nouveaux résidents internationaux.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
    languages: {
      fr: url,
      en: 'https://bosphoras.com/en/turkey-tax-exemption-foreign-income',
      ru: 'https://bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody',
      ar: 'https://bosphoras.com/ar/turkey-tax-exemption-foreign-income',
      'x-default': url,
    },
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'Bosphoras',
    locale: 'fr_FR',
    type: 'article',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] },
};

const faqs = [
  {
    q: 'Qui pourrait être concerné par cette exonération fiscale en Turquie ?',
    a: 'Les personnes physiques qui deviendraient résidentes en Turquie et qui n’auraient pas eu de résidence ni de statut fiscal en Turquie pendant les trois années civiles précédentes, sous réserve de la version finale de la loi et de l’analyse d’un fiscaliste qualifié.',
  },
  {
    q: 'Quels revenus seraient potentiellement visés ?',
    a: 'Le projet vise certains gains et revenus obtenus en dehors de la Turquie. Les revenus turcs, les conditions d’éligibilité, les obligations déclaratives et les exclusions doivent être confirmés au cas par cas.',
  },
  {
    q: 'Peut-on déjà décider de s’installer uniquement sur cette base ?',
    a: 'Non. Il s’agit d’un projet de réforme à confirmer après adoption définitive, publication officielle et instructions d’application. Une analyse juridique et fiscale préalable est indispensable.',
  },
  {
    q: 'Comment Bosphoras peut accompagner un investisseur ?',
    a: 'Bosphoras organise un diagnostic privé, identifie les points fiscaux, familiaux, patrimoniaux et opérationnels, puis coordonne les bons professionnels en Turquie : avocat, fiscaliste, banque, assurance, immobilier et installation locale.',
  },
];

const targets = [
  'Entrepreneurs internationaux avec revenus hors Turquie',
  'Investisseurs, rentiers et familles patrimoniales',
  'Consultants, dirigeants, expatriés et profils mobilité internationale',
  'Family offices et clients de banque privée comparant Turquie, Dubaï, Portugal ou Monaco',
];

const steps = [
  'Vérifier votre historique de résidence et de fiscalité en Turquie sur les trois dernières années.',
  'Identifier la nature exacte de vos revenus étrangers : dividendes, plus-values, intérêts, activités, holdings, immobilier, portefeuille financier.',
  'Comparer l’impact fiscal avec votre pays actuel de résidence et les conventions applicables.',
  'Structurer votre arrivée : résidence, banque, assurance, logement, société, famille et conformité documentaire.',
];

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description,
            inLanguage: 'fr-FR',
            datePublished: '2026-05-07',
            dateModified: '2026-05-07',
            author: { '@type': 'Organization', name: 'Bosphoras' },
            publisher: { '@type': 'Organization', name: 'Bosphoras', logo: { '@type': 'ImageObject', url: 'https://bosphoras.com/favicon.svg' } },
            mainEntityOfPage: url,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
          },
        ]}
      />
      <Header locale="fr" currentPath="/exoneration-fiscale-turquie-revenus-etrangers" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#121826_0%,#1c2940_48%,#0b1020_100%)] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Fiscalité Turquie · Projet 2026</p>
            <h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">Exonération fiscale en Turquie sur les revenus étrangers : une opportunité à analyser avant de s’installer</h1>
            <p className="mt-8 max-w-3xl text-lg leading-9 text-white/78">La Turquie prépare un dispositif pouvant exonérer pendant 20 ans certains revenus obtenus à l’étranger par de nouveaux résidents internationaux, sous conditions strictes. Pour les investisseurs, entrepreneurs et familles exigeantes, le sujet mérite une analyse privée avant toute décision.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e0bc78]">Demander une analyse privée<ArrowRight size={16} /></Link>
              <Link href="/services/conseil-juridique-fiscal" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863] transition hover:bg-white/5">Voir l’accompagnement fiscal</Link>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="rounded-none border border-[#d8c7a1] bg-[#fffaf0] p-8 shadow-[0_20px_60px_rgba(16,24,39,0.06)]">
              <Landmark className="h-8 w-8 text-[#8a6728]" />
              <h2 className="mt-6 font-serif text-3xl">À retenir</h2>
              <p className="mt-5 leading-8 text-[#3e4857]">Le texte vise à attirer en Turquie des capitaux, talents, familles internationales et centres de décision. La promesse commerciale est forte, mais elle doit rester encadrée : projet de loi, conditions, preuves, fiscaliste, conformité.</p>
            </aside>
            <div className="space-y-10 text-lg leading-9 text-[#3e4857]">
              <div>
                <h2 className="font-serif text-4xl tracking-[-0.03em] text-[#121826]">Pourquoi cette réforme intéresse les investisseurs étrangers</h2>
                <p className="mt-5">Le dispositif annoncé pourrait permettre à certains nouveaux résidents fiscaux en Turquie de ne pas intégrer certains revenus étrangers dans l’impôt sur le revenu turc pendant une période allant jusqu’à 20 ans. Pour un profil international, cela change la conversation : la Turquie devient une base potentielle de vie, de patrimoine et d’affaires.</p>
              </div>
              <div>
                <h2 className="font-serif text-4xl tracking-[-0.03em] text-[#121826]">Les profils les plus concernés</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">{targets.map((item) => <div key={item} className="border border-[#d8c7a1] bg-white p-5"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="text-base leading-7">{item}</p></div>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Méthode Bosphoras</p>
            <h2 className="mt-4 max-w-4xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Transformer une opportunité fiscale en stratégie d’installation conforme</h2>
            <div className="mt-12 grid gap-px bg-[#d8c7a1] md:grid-cols-2 lg:grid-cols-4">{steps.map((step, index) => <article key={step} className="bg-[#fffaf0] p-7"><span className="font-serif text-4xl text-[#8a6728]">0{index + 1}</span><p className="mt-8 text-base leading-8 text-[#3e4857]">{step}</p></article>)}</div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1000px]">
            <div className="border-l-4 border-[#8a6728] bg-white p-8 shadow-[0_18px_55px_rgba(16,24,39,0.05)]">
              <ShieldCheck className="h-8 w-8 text-[#8a6728]" />
              <h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Point de prudence</h2>
              <p className="mt-5 text-lg leading-9 text-[#3e4857]">Cette page ne constitue pas un conseil fiscal. Les mesures évoquées proviennent d’un projet de réforme et doivent être confirmées après adoption définitive, publication officielle et analyse personnalisée par un avocat fiscaliste qualifié en Turquie et dans votre pays de résidence.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <Users className="h-8 w-8 text-[#d2a863]" />
              <h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Vous envisagez la Turquie comme base privée ou patrimoniale ?</h2>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras analyse votre situation, filtre les risques et coordonne les professionnels nécessaires pour prendre une décision claire, confidentielle et structurée.</p>
            </div>
            <Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827] transition hover:bg-[#e0bc78]">Recevoir mon diagnostic privé<ArrowRight size={16} /></Link>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map((item) => <article key={item.q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{item.q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{item.a}</p></article>)}</div></div></section>
      </main>
      <Footer locale="fr" />
    </>
  );
}
