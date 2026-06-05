import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/holding-siege-regional-turquie';
const title = 'Holding et siège régional en Turquie : structure, fiscalité et substance | Bosphoras';
const description = 'Guide Bosphoras sur la holding et le siège régional en Turquie : société, gouvernance, services qualifiés, substance, fiscalité, banque, management, équipes, contrats et investisseurs étrangers.';
const updatedAt = '2026-06-05';

const points = [
  ['Pourquoi la Turquie ?', 'La Turquie peut devenir une base de coordination régionale entre Europe, Golfe, Caucase, Afrique du Nord et Asie centrale.'],
  ['Siège régional', 'Un groupe peut y structurer management, RH, finance, juridique, achats, data, support, commercial et pilotage opérationnel.'],
  ['Services qualifiés', 'Les centres de services et fonctions exportées doivent être analysés selon activité réelle, contrats, facturation et substance.'],
  ['Substance et banque', 'Bureaux, équipe, direction, comptes bancaires, contrats, comptabilité et gouvernance doivent être cohérents.'],
];

const checks = ['structure société et actionnaires','fonctions réelles du siège régional','bureaux, équipe, direction et contrats','banque, KYC, flux et reporting','fiscalité, services qualifiés et conventions','avocat, fiscaliste, comptable et assurance'];

const faqs = [
  ['Pourquoi créer une holding ou un siège régional en Turquie ?', 'La Turquie peut servir de base opérationnelle et régionale pour certains groupes qui veulent coordonner plusieurs marchés avec une présence réelle.'],
  ['La fiscalité est-elle automatique ?', 'Non. Les avantages éventuels dépendent de l’activité, de la substance, des contrats, des revenus et des règles d’application.'],
  ['Quelles fonctions peuvent être centralisées ?', 'Management, finance, RH, achats, data, marketing, support client, juridique, coordination commerciale et services de groupe.'],
  ['Quel est le rôle de Bosphoras ?', 'Bosphoras coordonne le diagnostic avec avocat, fiscaliste, comptable, banque, bureaux, recrutement et partenaires locaux.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: url, en: 'https://bosphoras.com/en/holding-regional-headquarters-turkey', ru: 'https://bosphoras.com/ru/holding-regionalnyy-ofis-turtsiya', ar: 'https://bosphoras.com/ar/holding-regional-headquarters-turkey', 'x-default': url } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'fr_FR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'fr-FR', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey holding', 'regional headquarters Turkey', 'foreign investors', 'qualified services'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="fr" currentPath="/holding-siege-regional-turquie" /><main className="bg-[#f8f1e7] text-[#101827]"><section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Guide privé · Holding Turquie · Mis à jour le 5 juin 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Holding et siège régional en Turquie : structure, fiscalité et substance</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">La Turquie peut devenir une base régionale pour coordonner management, finance, RH, achats, services, commerce international et family office. La réussite dépend d’une structure lisible : société, banque, équipe, contrats, fiscalité et substance réelle.</p><Link href="/diagnostic-prive" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander une analyse privée<ArrowRight size={16} /></Link></div></section><section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Building2 className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Les 4 points essentiels</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section><section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist avant structuration</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">Une holding ne doit pas être une coquille vide. Les fonctions, contrats, salariés, locaux et flux doivent être documentés avant toute projection fiscale.</p></div></div></section><section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section></main><Footer locale="fr" /></>
  );
}
