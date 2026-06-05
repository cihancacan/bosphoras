import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/centres-services-qualifies-turquie-avantages-fiscaux';
const title = 'Centres de services qualifiés en Turquie : avantages fiscaux, conditions et exemples | Bosphoras';
const description = 'Guide SEO Bosphoras sur les centres de services qualifiés en Turquie après la loi n°7582 publiée au Resmî Gazete n°33270 : Nitelikli hizmet merkezi, revenus étrangers, fonctions support, groupes internationaux, substance locale, bureaux, salariés, contrats et fiscalité.';
const updatedAt = '2026-06-05';

const cards = [
  ['Définition', 'Un centre de services qualifié, ou Nitelikli hizmet merkezi, est une structure turque destinée à fournir des services à des sociétés liées situées hors de Turquie.'],
  ['Profils concernés', 'Groupes internationaux, holdings opérationnelles, family offices, sociétés de conseil, plateformes IT, finance, RH, reporting ou support client.'],
  ['Revenus étrangers', 'Le modèle repose sur des prestations facturées à des entités étrangères liées, avec une documentation claire de la source des revenus.'],
  ['Substance locale', 'La société doit démontrer une vraie présence : bureaux, salariés, contrats, factures, gouvernance, banque, comptabilité et activité réelle.'],
];

const examples = [
  ['Centre finance régional', 'Une société turque peut centraliser reporting, consolidation, contrôle de gestion, trésorerie, facturation intra-groupe et suivi bancaire pour plusieurs pays.'],
  ['Support juridique et conformité', 'Un groupe peut installer à Istanbul une équipe de coordination pour contrats, conformité, gouvernance, suivi réglementaire et documentation interne.'],
  ['Hub IT, data et back-office', 'Une structure turque peut gérer support informatique, données, process, opérations, service client et coordination entre filiales étrangères.'],
  ['Plateforme RH et talents', 'La Turquie peut servir de base pour recrutement, formation, mobilité internationale, paie coordonnée et support des équipes du groupe.'],
];

const checks = [
  'structure du groupe et pays concernés',
  'sociétés liées situées à l’étranger',
  'nature exacte des services rendus depuis la Turquie',
  'contrats, factures et prix de transfert',
  'bureaux, salariés, gouvernance et comptabilité',
  'banque, KYC, flux financiers et preuves opérationnelles',
];

const faqs = [
  ['Qu’est-ce qu’un centre de services qualifié en Turquie ?', 'C’est une société turque qui fournit des services qualifiés à des sociétés liées situées à l’étranger. Le sujet vise surtout les groupes internationaux capables de démontrer une activité réelle en Turquie.'],
  ['La loi n°7582 rend-elle l’avantage automatique ?', 'Non. La loi crée un cadre, mais l’éligibilité dépend de l’activité, des revenus, du lien avec les sociétés étrangères, de la substance locale, des documents et des règles d’application.'],
  ['Quels services peuvent être concernés ?', 'Finance, comptabilité, juridique, RH, data, IT, audit, reporting, achats, ventes, support client, conformité et fonctions de siège peuvent être étudiés selon le dossier.'],
  ['Pourquoi cette page est importante pour les investisseurs étrangers ?', 'Parce que la Turquie cherche à attirer des fonctions régionales réelles. Un centre de services qualifié peut devenir une alternative à Dubaï, Singapour, Amsterdam ou Londres selon les besoins du groupe.'],
  ['Quel est le rôle de Bosphoras ?', 'Bosphoras coordonne l’analyse privée avec avocat, fiscaliste, comptable, banque, bureaux, recrutement et partenaires locaux. Bosphoras ne remplace pas les professionnels réglementés.'],
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url, languages: { fr: url, en: 'https://bosphoras.com/en/qualified-service-centers-turkey-tax-benefits', ru: 'https://bosphoras.com/ru/kvalifitsirovannye-servisnye-tsentry-turtsiya', ar: 'https://bosphoras.com/ar/qualified-service-centers-turkey-tax-benefits', 'x-default': url } },
  openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'fr_FR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] },
};

export default function Page() {
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'fr-FR', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Law 7582', 'Resmî Gazete 33270', 'qualified service center', 'Nitelikli hizmet merkezi', 'Turkey tax benefits', 'foreign investors'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale="fr" currentPath="/centres-services-qualifies-turquie-avantages-fiscaux" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Guide privé · Fiscalité Turquie 2026 · Mis à jour le 5 juin 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Centres de services qualifiés en Turquie : avantages fiscaux, conditions et exemples</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">La loi turque n°7582 publiée au Resmî Gazete n°33270 du 4 juin 2026 introduit la notion de centre de services qualifié, Nitelikli hizmet merkezi. Pour un investisseur étranger ou un groupe international, le sujet ne consiste pas seulement à créer une société en Turquie : il faut construire une vraie plateforme de services, documentée, opérationnelle et cohérente avec les revenus étrangers.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander une analyse privée<ArrowRight size={16} /></Link><Link href="/services/conseil-juridique-fiscal" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">Voir l’accompagnement fiscal</Link></div></div></section>

        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">Pourquoi la Turquie crée ce cadre ?</h2><p className="mt-5 leading-8 text-[#3e4857]">L’objectif est d’attirer des fonctions de siège et de support qui servent des marchés étrangers : finance, reporting, juridique, conformité, data, IT, RH, achats, ventes et service client. Istanbul devient ainsi une base possible entre Europe, Golfe, Asie centrale et marchés émergents.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em]">Les 4 points essentiels</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{cards.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></div></section>

        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1300px]"><h2 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">Exemples concrets de centres de services</h2><p className="mt-6 max-w-4xl text-lg leading-9 text-[#3e4857]">Le centre de services qualifié peut intéresser un groupe turc, européen, moyen-oriental ou asiatique qui veut coordonner depuis Istanbul des fonctions régionales réelles. Chaque cas doit être validé avec des professionnels qualifiés.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{examples.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-5 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>

        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist avant de structurer le dossier</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">Le point central est la substance. Une société sans équipe, sans bureaux, sans contrats réels ou sans activité opérationnelle défendable ne doit pas être présentée comme centre de services qualifié.</p></div></div></section>

        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Structurer avant d’agir</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras coordonne une lecture privée du dossier avec les bons interlocuteurs locaux : avocat, fiscaliste, comptable, banque, bureaux, recrutement et partenaires opérationnels.</p></div><Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander un diagnostic privé<ArrowRight size={16} /></Link></div></section>

        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale="fr" />
    </>
  );
}
