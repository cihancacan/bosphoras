import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Ship, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/import-export-turquie-transit-trade';
const title = 'Import-export en Turquie : transit trade et commerce international | Bosphoras';
const description = 'Guide Bosphoras sur l’import-export en Turquie : transit trade, société turque, commerce international, fournisseurs, clients, douane, logistique, banque, paiements, fiscalité et substance.';
const updatedAt = '2026-06-05';

const points = [
  ['Pourquoi la Turquie ?', 'La Turquie connecte Europe, Golfe, Caucase, Afrique du Nord et Asie centrale avec ports, routes, fournisseurs, production et réseau commercial régional.'],
  ['Transit trade', 'Une société turque peut être étudiée pour coordonner achat, vente, facturation, transport et documentation entre plusieurs pays.'],
  ['Documents et banque', 'Contrats, factures, devises, assurance, transport, douane, origine des fonds et paiements doivent être alignés.'],
  ['Substance commerciale', 'Bureaux, équipe, fournisseurs, clients, contrats, comptabilité et preuve d’activité réelle sont essentiels.'],
];

const checks = ['produits, fournisseurs et clients','contrats, factures, incoterms et assurance','banque, paiements, devises et source des fonds','transport, douane, certificats et documents','société, bureaux, équipe et comptabilité','fiscalité, TVA, marges et obligations déclaratives'];

const faqs = [
  ['Pourquoi créer une société d’import-export en Turquie ?', 'La Turquie peut servir de plateforme commerciale régionale grâce à sa position, ses fournisseurs, sa logistique et son accès à plusieurs marchés.'],
  ['Le transit trade est-il automatique ?', 'Non. Il faut structurer les contrats, documents, flux bancaires, transport, fiscalité et substance selon le dossier.'],
  ['Quels secteurs sont concernés ?', 'Textile, alimentaire, matériaux, machines, pièces industrielles, construction, cosmétique, packaging et biens de consommation.'],
  ['Quel est le rôle de Bosphoras ?', 'Bosphoras coordonne l’analyse avec avocat, fiscaliste, comptable, banque, transitaires, assureurs et partenaires locaux.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: url, en: 'https://bosphoras.com/en/import-export-turkey-transit-trade', ru: 'https://bosphoras.com/ru/import-export-turtsiya-tranzitnaya-torgovlya', ar: 'https://bosphoras.com/ar/import-export-turkey-transit-trade', 'x-default': url } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'fr_FR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'fr-FR', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey import export', 'transit trade Turkey', 'international commerce'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="fr" currentPath="/import-export-turquie-transit-trade" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Guide privé · Import-export Turquie · Mis à jour le 5 juin 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Import-export en Turquie : transit trade et commerce international</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">La Turquie peut devenir une base commerciale pour acheter, vendre, facturer, stocker ou coordonner des flux entre plusieurs pays. Le sujet doit être structuré avec prudence : société, banque, contrats, douane, logistique, fiscalité et substance réelle.</p><Link href="/diagnostic-prive" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander une analyse privée<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Ship className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Les 4 points essentiels</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist avant de lancer l’activité</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">Le commerce international doit être documenté : le risque vient souvent d’un mauvais alignement entre contrat, facture, transport, banque et fiscalité.</p></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="fr" /></>
  );
}
