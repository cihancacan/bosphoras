import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Landmark, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/en/finance-fintech-turkey-istanbul-finance-center';
const title = 'Finance and Fintech in Turkey: Istanbul Finance Center | Bosphoras';
const description = 'Bosphoras guide to finance and fintech in Turkey: Istanbul Finance Center, Law No. 7582, financial services, banking, fintech, payments, compliance, license, residence, tax and substance.';
const updatedAt = '2026-06-05';

const points = [
  ['Why Istanbul?', 'Istanbul combines banks, tech talent, local market, regional access, premium offices and the ambition to be a financial hub between Europe, the Gulf and Central Asia.'],
  ['Istanbul Finance Center', 'The IFC may increase the interest of certain financial players, service companies, international groups and investors, subject to precise conditions.'],
  ['Fintech and compliance', 'Payments, wallets, marketplace, financial SaaS, data, reporting or B2B services must be reviewed with license, bank, KYC, AML and contracts.'],
  ['Real substance', 'The project must prove real activity: team, offices, bank, contracts, clients, accounting, reporting and local governance.'],
];

const checks = ['exact financial or fintech model','license, compliance, KYC and AML','banking, flows, contracts and clients','company, offices, team and accounting','tax, foreign income and exported services','lawyer, tax advisor, accountant and banking partner'];

const faqs = [
  ['Why study finance in Turkey?', 'Turkey may serve as a regional base for certain financial services, fintech, reporting, payment, B2B support or functions linked to Istanbul Finance Center.'],
  ['Does Istanbul Finance Center create automatic benefits?', 'No. Any potential benefits must be verified according to activity, license, substance, income and implementation rules.'],
  ['Which fintech projects can be reviewed?', 'Payments, wallets, financial SaaS, data, reporting, marketplace, banking support, compliance, B2B finance or international group functions.'],
  ['What is Bosphoras’ role?', 'Bosphoras coordinates the private assessment with lawyer, tax advisor, accountant, bank, offices, recruitment and local partners.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/finance-fintech-turquie-istanbul-finance-center', en: url, ru: 'https://bosphoras.com/ru/finansy-fintech-turtsiya-istanbul-finance-center', ar: 'https://bosphoras.com/ar/finance-fintech-turkey-istanbul-finance-center', 'x-default': 'https://bosphoras.com/finance-fintech-turquie-istanbul-finance-center' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'en_US', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'en-US', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Istanbul Finance Center', 'Turkey fintech', 'financial services Turkey', 'Law 7582'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="en" currentPath="/en/finance-fintech-turkey-istanbul-finance-center" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Private guide · Turkey Finance · Updated on June 5, 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Finance and fintech in Turkey: Istanbul Finance Center</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Turkey wants to strengthen Istanbul as a regional financial hub. For a fintech, family office, international group or financial services company, the file must be reviewed carefully: license, banking, compliance, KYC, tax, substance and governance.</p><Link href="/en/private-assessment" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Request a private assessment<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">The 4 essential points</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist before setup</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">A finance or fintech project must be readable for banks and authorities: compliance, contracts, flows, team, substance and tax must be coherent.</p></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">FAQ</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="en" /></>
  );
}
