import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers';
const title = 'Exonération fiscale en Turquie sur les revenus étrangers | Bosphoras';
const description = 'Guide privé Bosphoras sur le projet fiscal turc 2026 : revenus étrangers, nouveaux résidents, centres de services qualifiés, Istanbul Finance Center et installation en Turquie.';

const measures = [
  ['Exonération potentielle de 20 ans', 'Le projet vise certains revenus et gains obtenus hors de Turquie par de nouveaux résidents internationaux. La condition centrale annoncée concerne l’absence de résidence et d’assujettissement fiscal en Turquie pendant les trois années civiles précédentes.'],
  ['Transmission et patrimoine', 'Le texte introduit aussi un angle patrimonial avec un taux annoncé à 1 % pour certaines transmissions par héritage liées au dispositif. Pour les familles internationales, ce point doit être étudié avec un fiscaliste.'],
  ['Centres de services qualifiés', 'La Turquie souhaite attirer des sociétés qui servent des groupes actifs dans plusieurs pays : finance, juridique, reporting, RH, données, technologie, conformité, support et coordination internationale.'],
  ['Activités internationales', 'Certains revenus de services qualifiés ou d’opérations internationales pourraient bénéficier d’une réduction fiscale importante, avec un traitement renforcé pour certaines structures liées à l’Istanbul Finance Center.'],
  ['Rapatriement d’actifs', 'Le projet prévoit un mécanisme pour déclarer et transférer en Turquie des devises, titres, actions, obligations, or ou instruments financiers, avec un traitement variable selon la durée de conservation.'],
  ['Istanbul Finance Center', 'La réforme confirme l’ambition d’Istanbul comme plateforme financière régionale, avec des avantages prolongés et des mesures destinées à attirer institutions financières et profils expérimentés.'],
];

const audiences = [
  ['Entrepreneurs internationaux', 'Dirigeants ayant dividendes, plus-values, revenus d’activité, participations ou clients hors Turquie.'],
  ['Investisseurs et familles patrimoniales', 'Profils qui comparent la Turquie avec Dubaï, Lisbonne, Monaco ou Londres pour leur résidence, leur patrimoine et leur qualité de vie.'],
  ['Consultants et dirigeants mobiles', 'Professionnels dont les revenus, clients ou actifs sont répartis entre plusieurs pays.'],
  ['Family offices', 'Familles qui souhaitent coordonner depuis Istanbul patrimoine, immobilier, santé, fiscalité, assurance, déplacements et relations privées.'],
  ['Groupes internationaux', 'Sociétés qui envisagent une base régionale pour management, finance, juridique, RH, data, IT ou support commercial.'],
  ['Commerce international et services B2B', 'Structures de transit trade, import-export, back-office, support technique, assistance commerciale ou services à des entités étrangères.'],
];

const businessModels = [
  ['Base privée en Turquie', 'Préparer résidence, banque, assurance, logement, santé, école, sécurité familiale et fiscalité avant de transférer une partie de sa vie privée ou patrimoniale.'],
  ['Family office à Istanbul', 'Créer un point de coordination confidentiel pour patrimoine, immobilier, santé, fiscalité, assurances, déplacements et accès privé.'],
  ['Centre régional de services', 'Installer une entité turque qui centralise finance, reporting, conseil, juridique, RH, data, IT, support client ou coordination de filiales.'],
  ['Transit trade', 'Organiser des achats et ventes entre pays tiers depuis une société turque, avec analyse fiscale, bancaire, documentaire et douanière.'],
  ['Talents internationaux', 'Attirer ou relocaliser des profils financiers, juridiques, technologiques ou commerciaux dans un cadre de résidence plus compétitif.'],
  ['Capital déclaré et structuré', 'Analyser la déclaration, le transfert, la conservation et la conformité bancaire d’actifs détenus à l’étranger.'],
];

const faqs = [
  ['L’exonération de 20 ans est-elle déjà définitive ?', 'Non. Il s’agit d’un projet de réforme. Il faut attendre l’adoption finale, la publication officielle et les précisions d’application avant toute décision.'],
  ['Qui peut être concerné ?', 'Les nouveaux résidents internationaux qui n’ont pas eu de résidence ni d’assujettissement fiscal en Turquie pendant les trois années civiles précédentes pourraient être concernés, sous conditions.'],
  ['Tous les revenus sont-ils visés ?', 'Non. Le texte concerne certains revenus et gains obtenus hors de Turquie. Les revenus turcs, les preuves, les obligations déclaratives et les conventions fiscales doivent être vérifiés.'],
  ['Pourquoi cela intéresse les investisseurs ?', 'Parce que la réforme peut combiner résidence, revenus étrangers, patrimoine, banque, assurance, santé privée, immobilier et organisation familiale.'],
  ['Quel est le rôle de Bosphoras ?', 'Bosphoras organise le diagnostic privé, prépare les questions utiles, coordonne les professionnels qualifiés et aide à transformer une opportunité en projet structuré et conforme.'],
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
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'fr-FR', datePublished: '2026-05-07', dateModified: '2026-05-07', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale="fr" currentPath="/exoneration-fiscale-turquie-revenus-etrangers" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Guide privé · Fiscalité Turquie 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">Exonération fiscale en Turquie sur les revenus étrangers : ce que les investisseurs doivent vérifier</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">La Turquie prépare un cadre fiscal destiné à attirer nouveaux résidents internationaux, capitaux étrangers, entrepreneurs, familles patrimoniales, groupes internationaux et talents qualifiés. Cette page explique ce que le texte prévoit, qui peut être concerné et comment transformer l’actualité en projet d’installation structuré.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander une analyse privée<ArrowRight size={16} /></Link><Link href="/services/conseil-juridique-fiscal" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">Voir l’accompagnement fiscal</Link></div></div></section>

        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">Le signal envoyé par la Turquie</h2><p className="mt-5 leading-8 text-[#3e4857]">La Turquie veut devenir une base compétitive entre Europe, Golfe et Asie centrale pour les résidents internationaux, les capitaux, les holdings opérationnelles, les centres de services et les familles patrimoniales.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em] text-[#121826]">Ce que le projet fiscal prévoit</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{measures.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Investisseurs, familles, dirigeants, groupes internationaux</p><h2 className="mt-4 max-w-4xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Qui doit étudier cette réforme en priorité ?</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{audiences.map(([t, d]) => <div key={t} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-xl text-[#121826]">{t}</h3><p className="mt-3 text-sm leading-7 text-[#3e4857]">{d}</p></div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Applications concrètes</p><h2 className="mt-4 max-w-5xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Comment transformer la réforme en projet d’installation ou d’affaires</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{businessModels.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-6 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
        <section className="px-5 pb-16 md:px-8 md:pb-24"><div className="mx-auto max-w-[1000px]"><div className="border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">À vérifier avant toute décision</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">Cette page ne constitue pas un conseil fiscal. Les mesures évoquées proviennent d’un projet de réforme et doivent être confirmées après adoption définitive, publication officielle et analyse personnalisée par un avocat fiscaliste qualifié.</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Votre situation mérite-t-elle une analyse privée ?</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras prépare une lecture confidentielle de votre profil : résidence, revenus étrangers, patrimoine, société, banque, assurance, immobilier et feuille de route d’installation en Turquie.</p></div><Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Recevoir mon diagnostic privé<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale="fr" />
    </>
  );
}
