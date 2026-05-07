import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers';
const title = 'Exonération fiscale Turquie revenus étrangers : investisseurs et résidents internationaux | Bosphoras';
const description = 'La Turquie prépare une exonération potentielle de 20 ans sur certains revenus étrangers. Analyse privée pour investisseurs, entrepreneurs, familles et nouveaux résidents internationaux.';

const measures = [
  { title: 'Nouveaux résidents internationaux', text: 'Le texte prévoit une exemption potentielle pendant 20 ans pour certains gains et revenus obtenus hors de Turquie par des personnes devenant résidentes en Turquie, sous réserve notamment de ne pas avoir eu résidence ni assujettissement fiscal en Turquie pendant les 3 années civiles précédentes.' },
  { title: 'Transmission patrimoniale', text: 'Pendant la période d’exemption, certaines transmissions par héritage liées au dispositif pourraient être taxées à 1 %, ce qui intéresse directement les familles patrimoniales et les clients de banque privée.' },
  { title: 'Centres de services qualifiés', text: 'La Turquie veut attirer les sièges régionaux, centres de management, finance, juridique, RH, data, technologie, conformité, support international et coordination de groupes actifs dans au moins 3 pays.' },
  { title: 'Revenus étrangers des entreprises', text: 'Les revenus de centres de services qualifiés et certaines opérations de commerce international pourraient bénéficier d’une réduction de 95 %, voire 100 % dans certains cas liés à l’Istanbul Finance Center.' },
  { title: 'Rapatriement d’actifs', text: 'Le projet prévoit un mécanisme de déclaration et transfert d’actifs étrangers vers la Turquie jusqu’au 31 juillet 2027, avec une fiscalité réduite et pouvant aller jusqu’à 0 % selon la durée de conservation.' },
  { title: 'Istanbul Finance Center', text: 'Le texte renforce l’attractivité de l’Istanbul Finance Center, notamment avec l’extension de certains avantages fiscaux jusqu’en 2047 et des avantages pour les profils internationaux expérimentés.' },
];

const profiles = [
  'Entrepreneurs internationaux avec dividendes, plus-values ou revenus d’activité hors Turquie',
  'Investisseurs, rentiers, familles patrimoniales et clients de banque privée',
  'Consultants, dirigeants, expatriés et profils à mobilité internationale',
  'Family offices comparant Istanbul, Dubaï, Lisbonne, Monaco ou Londres',
  'Groupes internationaux cherchant un centre régional de management ou support',
  'Sociétés de transit trade, import-export international, services B2B et back-office',
];

const models = [
  { title: 'Base privée pour investisseur', text: 'Le client organise sa résidence, sa banque, son assurance, son logement, sa famille et son cadre fiscal avant de transférer une partie de sa vie privée ou patrimoniale vers la Turquie.' },
  { title: 'Family office Turquie', text: 'Une famille internationale structure un point de coordination à Istanbul pour patrimoine, immobilier, santé, assurance, fiscalité, déplacements et relations privées.' },
  { title: 'Centre régional de services', text: 'Un groupe international installe en Turquie une entité de services pour finance, reporting, conseil, juridique, RH, data, IT, coordination commerciale ou support international.' },
  { title: 'Transit trade et commerce international', text: 'Une société basée en Turquie organise des achats et ventes de marchandises entre pays tiers, sans nécessairement faire entrer les biens en Turquie, avec analyse des conditions de réduction fiscale.' },
  { title: 'Talents et dirigeants internationaux', text: 'Des dirigeants, cadres financiers, juridiques, technologiques ou commerciaux peuvent être attirés par un cadre de résidence, d’emploi et de rémunération plus compétitif.' },
  { title: 'Capital déclaré et sécurisé', text: 'Un client qui possède devises, or, titres ou instruments financiers à l’étranger peut analyser une stratégie de déclaration, transfert, conservation et conformité bancaire en Turquie.' },
];

const faqs = [
  { q: 'Qui peut profiter de l’exonération de 20 ans ?', a: 'Potentiellement les personnes physiques qui deviennent résidentes en Turquie et qui n’ont pas eu de résidence ni d’assujettissement fiscal en Turquie pendant les 3 années civiles précédentes. L’éligibilité doit être vérifiée après adoption finale et avec un fiscaliste qualifié.' },
  { q: 'Est-ce que tous les revenus sont exonérés ?', a: 'Non. Le texte vise certains revenus et gains obtenus hors de Turquie. Les revenus de source turque, les obligations déclaratives, les preuves et les exclusions doivent être analysés au cas par cas.' },
  { q: 'Pourquoi cela intéresse les familles fortunées ?', a: 'Parce que le dispositif combine potentiellement résidence, revenus étrangers, planification patrimoniale, héritage à 1 % dans certains cas, banques, assurance, santé privée et immobilier. C’est une décision globale, pas seulement fiscale.' },
  { q: 'Pourquoi cela intéresse les entreprises ?', a: 'Le texte crée aussi un cadre pour les centres de services qualifiés et certaines activités internationales, avec des réductions fiscales importantes si les conditions de revenus étrangers, transfert et activité sont réunies.' },
  { q: 'Bosphoras donne-t-il un conseil fiscal ?', a: 'Non. Bosphoras organise le diagnostic privé, prépare les questions, filtre les risques et coordonne les bons professionnels : avocat fiscaliste, banque, comptable, assurance, immobilier et relocation.' },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url, languages: { fr: url, en: 'https://bosphoras.com/en/turkey-tax-exemption-foreign-income', ru: 'https://bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody', ar: 'https://bosphoras.com/ar/turkey-tax-exemption-foreign-income', 'x-default': url } },
  openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'fr_FR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] },
};

export default function Page() {
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'fr-FR', datePublished: '2026-05-07', dateModified: '2026-05-07', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }]} />
      <Header locale="fr" currentPath="/exoneration-fiscale-turquie-revenus-etrangers" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#121826_0%,#1c2940_48%,#0b1020_100%)] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40">
          <div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Fiscalité Turquie · Projet 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">Exonération fiscale en Turquie sur les revenus étrangers : qui peut profiter de la réforme ?</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">La Turquie prépare un paquet fiscal conçu pour attirer investisseurs, entrepreneurs, familles internationales, capitaux étrangers, centres régionaux et talents qualifiés. Le sujet ne concerne pas seulement la résidence : il touche aussi les revenus étrangers, l’héritage, les centres de services, le transit trade, l’Istanbul Finance Center et le rapatriement d’actifs.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander une analyse privée<ArrowRight size={16} /></Link><Link href="/services/conseil-juridique-fiscal" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">Voir l’accompagnement fiscal</Link></div></div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8 shadow-[0_20px_60px_rgba(16,24,39,0.06)]"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">Le message stratégique</h2><p className="mt-5 leading-8 text-[#3e4857]">La Turquie veut devenir une base compétitive entre Europe, Golfe et Asie centrale pour les résidents internationaux, les capitaux, les holdings opérationnelles, les centres de services et les familles patrimoniales.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em] text-[#121826]">Ce que la Turquie prévoit</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{measures.map((m) => <article key={m.title} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{m.title}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{m.text}</p></article>)}</div></div></div></section>

        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Personnes concernées</p><h2 className="mt-4 max-w-4xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Les profils à cibler maintenant</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{profiles.map((p) => <div key={p} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="text-base leading-7 text-[#3e4857]">{p}</p></div>)}</div></div></section>

        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Modèles de business possibles</p><h2 className="mt-4 max-w-5xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Comment transformer l’actualité fiscale en projet concret</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{models.map((m) => <article key={m.title} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-6 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{m.title}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{m.text}</p></article>)}</div></div></section>

        <section className="px-5 pb-16 md:px-8 md:pb-24"><div className="mx-auto max-w-[1000px]"><div className="border-l-4 border-[#8a6728] bg-white p-8 shadow-[0_18px_55px_rgba(16,24,39,0.05)]"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Point de prudence</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">Cette page ne constitue pas un conseil fiscal. Les mesures évoquées proviennent d’un projet de réforme et doivent être confirmées après adoption définitive, publication officielle et analyse personnalisée par un avocat fiscaliste qualifié en Turquie et dans le pays de résidence du client.</p></div></div></section>

        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Votre client peut-il profiter du nouveau cadre fiscal turc ?</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras prépare une analyse privée : profil fiscal, résidence, revenus étrangers, patrimoine, société, banque, assurance, immobilier et feuille de route d’installation.</p></div><Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Recevoir mon diagnostic privé<ArrowRight size={16} /></Link></div></section>

        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map((f) => <article key={f.q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{f.q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{f.a}</p></article>)}</div></div></section>
      </main>
      <Footer locale="fr" />
    </>
  );
}
