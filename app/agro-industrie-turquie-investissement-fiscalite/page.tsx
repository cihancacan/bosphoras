import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/agro-industrie-turquie-investissement-fiscalite';
const title = 'Agro-industrie en Turquie : investissement, fiscalité et export | Bosphoras';
const description = 'Guide Bosphoras sur l’agro-industrie en Turquie pour investisseurs étrangers : usine alimentaire, transformation, packaging, export, fiscalité, loi n°7582, production, logistique, normes, douane, énergie et substance industrielle.';
const updatedAt = '2026-06-05';

const cards = [
  ['Pourquoi l’agro-industrie ?', 'La Turquie combine production agricole, transformation alimentaire, packaging, ports, logistique, main-d’œuvre et accès aux marchés Europe, Golfe, Asie centrale et Afrique du Nord.'],
  ['Fiscalité à analyser', 'La loi n°7582 renforce l’intérêt des activités de production. Les dispositifs fiscaux doivent être validés selon l’activité réelle, le revenu, l’usine et les règles d’application.'],
  ['Export et distribution', 'Un projet agro-industriel peut viser le marché turc, les pays voisins, le Moyen-Orient, l’Asie centrale ou l’Union européenne selon normes, emballage et certificats.'],
  ['Substance industrielle', 'Terrain, usine, machines, salariés, SGK, énergie, stockage, chaîne froide, qualité, contrats fournisseurs et comptabilité doivent être cohérents.'],
];

const examples = [
  ['Transformation alimentaire', 'Légumes, fruits, céréales, produits laitiers, sauces, conserves, snacks ou produits secs nécessitent normes, traçabilité et contrôle qualité.'],
  ['Packaging et marque privée', 'Création d’une ligne d’emballage, private label, export, design, certifications, distribution et contrats B2B.'],
  ['Stockage et chaîne froide', 'Entrepôts, frigorifique, assurance, énergie, traçabilité, transport, délais et conformité sanitaire.'],
  ['Export régional', 'Coordination douane, certificats, logistique, distributeurs, contrats, paiements, devises et marchés cibles.'],
];

const checks = ['type de produit et normes sanitaires','terrain, usine, bail ou zone industrielle','machines, énergie, eau, stockage et chaîne froide','salariés, SGK, sécurité et qualité','douane, certificats, emballage et export','avocat, fiscaliste, comptable, banque et assurance'];

const faqs = [
  ['Pourquoi investir dans l’agro-industrie en Turquie ?', 'La Turquie offre une base intéressante pour transformation alimentaire, packaging, export et distribution régionale, mais le projet doit être structuré avec normes, logistique et fiscalité.'],
  ['L’avantage fiscal est-il automatique ?', 'Non. Les dispositifs fiscaux liés à la production doivent être analysés selon l’activité réelle, les revenus, l’usine, la comptabilité et les règles d’application.'],
  ['Quels secteurs peuvent être étudiés ?', 'Transformation alimentaire, emballage, produits secs, chaîne froide, stockage, private label, export, distribution et production industrielle peuvent être étudiés.'],
  ['Quel est le rôle de Bosphoras ?', 'Bosphoras coordonne les interlocuteurs locaux : avocat, fiscaliste, comptable, banque, zone industrielle, immobilier, assurance, transport, énergie et partenaires opérationnels.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: url, en: 'https://bosphoras.com/en/agribusiness-turkey-investment-tax', ru: 'https://bosphoras.com/ru/agropromyshlennost-turtsiya-investitsii-nalogi', ar: 'https://bosphoras.com/ar/agribusiness-turkey-investment-tax', 'x-default': url } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'fr_FR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'fr-FR', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey agribusiness', 'food industry Turkey', 'Law 7582', 'industrial investment', 'foreign investors'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="fr" currentPath="/agro-industrie-turquie-investissement-fiscalite" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Guide privé · Agro-industrie Turquie · Mis à jour le 5 juin 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Agro-industrie en Turquie : investissement, fiscalité et export</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">L’agro-industrie turque peut devenir une source d’opportunités pour les investisseurs étrangers : transformation alimentaire, packaging, chaîne froide, stockage, export et distribution régionale. Le dossier doit être analysé avec prudence : fiscalité, production réelle, normes, énergie, douane, SGK, banque et substance industrielle.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander une analyse privée<ArrowRight size={16} /></Link><Link href="/services/conseil-juridique-fiscal" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">Voir l’accompagnement fiscal</Link></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1300px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Les 4 points essentiels</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{cards.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><Building2 className="mb-5 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1300px]"><h2 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">Exemples concrets de projets</h2><p className="mt-6 max-w-4xl text-lg leading-9 text-[#3e4857]">Chaque projet agro-industriel doit être étudié selon le produit, la norme, la logistique, l’énergie, la chaîne de valeur et le marché cible.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{examples.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist avant investissement</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">La fiscalité doit suivre une activité réelle. Une usine, une ligne de production ou un centre logistique doivent être documentés avant toute projection fiscale.</p></div></div></section>
      <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Structurer avant d’investir</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras coordonne la lecture privée du projet : société, fiscalité, banque, terrain, usine, énergie, certification, assurance, transport, export et partenaires locaux.</p></div><Link href="/diagnostic-prive" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander un diagnostic privé<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="fr" /></>
  );
}
