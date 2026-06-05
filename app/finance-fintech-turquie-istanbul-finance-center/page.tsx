import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Landmark, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/finance-fintech-turquie-istanbul-finance-center';
const title = 'Finance et fintech en Turquie : Istanbul Finance Center | Bosphoras';
const description = 'Guide Bosphoras sur la finance et la fintech en Turquie : Istanbul Finance Center, loi n°7582, services financiers, banques, fintech, paiement, conformité, licence, résidence, fiscalité et substance.';
const updatedAt = '2026-06-05';

const points = [
  ['Pourquoi Istanbul ?', 'Istanbul combine banques, talents tech, marché local, accès régional, bureaux premium et ambition de hub financier entre Europe, Golfe et Asie centrale.'],
  ['Istanbul Finance Center', 'L’IFM peut renforcer l’intérêt de certains acteurs financiers, sociétés de services, groupes internationaux et investisseurs, sous conditions précises.'],
  ['Fintech et conformité', 'Paiement, wallets, marketplace, SaaS financier, data, reporting ou services B2B doivent être analysés avec licence, banque, KYC, AML et contrats.'],
  ['Substance réelle', 'Le projet doit prouver une activité réelle : équipe, bureaux, banque, contrats, clients, comptabilité, reporting et gouvernance locale.'],
];

const checks = ['modèle financier ou fintech exact','licence, conformité, KYC et AML','banque, flux, contrats et clients','société, bureaux, équipe et comptabilité','fiscalité, revenus étrangers et services exportés','avocat, fiscaliste, comptable et partenaire bancaire'];

const faqs = [
  ['Pourquoi étudier la finance en Turquie ?', 'La Turquie peut servir de base régionale pour certains services financiers, fintech, reporting, paiement, support B2B ou fonctions liées à Istanbul Finance Center.'],
  ['L’Istanbul Finance Center donne-t-il un avantage automatique ?', 'Non. Les avantages éventuels doivent être vérifiés selon l’activité, la licence, la substance, les revenus et les règles d’application.'],
  ['Quels projets fintech peuvent être étudiés ?', 'Paiement, wallets, SaaS financier, data, reporting, marketplace, support bancaire, conformité, B2B finance ou fonctions de groupe international.'],
  ['Quel est le rôle de Bosphoras ?', 'Bosphoras coordonne le diagnostic avec avocat, fiscaliste, comptable, banque, bureaux, recrutement et partenaires locaux.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: url, en: 'https://bosphoras.com/en/finance-fintech-turkey-istanbul-finance-center', ru: 'https://bosphoras.com/ru/finansy-fintech-turtsiya-istanbul-finance-center', ar: 'https://bosphoras.com/ar/finance-fintech-turkey-istanbul-finance-center', 'x-default': url } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'fr_FR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'fr-FR', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Istanbul Finance Center', 'Turkey fintech', 'financial services Turkey', 'Law 7582'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="fr" currentPath="/finance-fintech-turquie-istanbul-finance-center" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Guide privé · Finance Turquie · Mis à jour le 5 juin 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Finance et fintech en Turquie : Istanbul Finance Center</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">La Turquie veut renforcer Istanbul comme hub financier régional. Pour une fintech, un family office, un groupe international ou une société de services financiers, le sujet doit être analysé avec prudence : licence, banque, conformité, KYC, fiscalité, substance et gouvernance.</p><Link href="/diagnostic-prive" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Demander une analyse privée<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Les 4 points essentiels</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist avant implantation</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">Un projet finance ou fintech doit être lisible pour banques et autorités : conformité, contrats, flux, équipe, substance et fiscalité doivent être cohérents.</p></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Questions fréquentes</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="fr" /></>
  );
}
