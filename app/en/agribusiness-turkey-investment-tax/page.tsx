import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/en/agribusiness-turkey-investment-tax';
const title = 'Agribusiness in Turkey: Investment, Tax and Export | Bosphoras';
const description = 'Bosphoras guide to agribusiness in Turkey for foreign investors: food processing, packaging, export, Law No. 7582, production, logistics, quality standards, customs, energy, cold chain and industrial substance.';
const updatedAt = '2026-06-05';

const cards = [
  ['Why agribusiness?', 'Turkey combines agricultural output, food processing, packaging, ports, logistics, workforce and access to Europe, the Gulf, Central Asia and North Africa.'],
  ['Tax to review', 'Law No. 7582 increases the interest of production activities. Tax benefits must be verified according to real activity, income, factory and implementation rules.'],
  ['Export and distribution', 'A food industry project may target Turkey, neighboring countries, the Middle East, Central Asia or the EU depending on standards, packaging and certificates.'],
  ['Industrial substance', 'Land, factory, machines, staff, SGK, energy, storage, cold chain, quality, supplier contracts and accounting must be consistent.'],
];

const examples = [
  ['Food processing', 'Vegetables, fruit, cereals, dairy, sauces, canned food, snacks or dry products require standards, traceability and quality control.'],
  ['Packaging and private label', 'Packaging line, private label, export, design, certifications, distribution and B2B contracts.'],
  ['Storage and cold chain', 'Warehouses, cold storage, insurance, energy, traceability, transport, deadlines and sanitary compliance.'],
  ['Regional export', 'Customs, certificates, logistics, distributors, contracts, payments, currencies and target markets.'],
];

const checks = ['product type and sanitary standards','land, factory, lease or industrial zone','machines, energy, water, storage and cold chain','staff, SGK, safety and quality','customs, certificates, packaging and export','lawyer, tax advisor, accountant, bank and insurance'];

const faqs = [
  ['Why invest in agribusiness in Turkey?', 'Turkey can be attractive for food processing, packaging, export and regional distribution, but the project must be structured with standards, logistics and tax review.'],
  ['Are tax benefits automatic?', 'No. Tax regimes linked to production must be reviewed according to real activity, income, factory, accounting and implementation rules.'],
  ['Which sectors may be reviewed?', 'Food processing, packaging, dry products, cold chain, storage, private label, export, distribution and industrial production may be reviewed.'],
  ['What is Bosphoras’ role?', 'Bosphoras coordinates local contacts: lawyer, tax advisor, accountant, bank, industrial zone, property, insurance, transport, energy and operational partners.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/agro-industrie-turquie-investissement-fiscalite', en: url, ru: 'https://bosphoras.com/ru/agropromyshlennost-turtsiya-investitsii-nalogi', ar: 'https://bosphoras.com/ar/agribusiness-turkey-investment-tax', 'x-default': 'https://bosphoras.com/agro-industrie-turquie-investissement-fiscalite' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'en_US', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'en-US', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey agribusiness', 'food industry Turkey', 'Law 7582', 'industrial investment', 'foreign investors'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="en" currentPath="/en/agribusiness-turkey-investment-tax" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Private guide · Turkey Agribusiness · Updated on June 5, 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Agribusiness in Turkey: investment, tax and export</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Turkey’s agribusiness sector may create opportunities for foreign investors: food processing, packaging, cold chain, storage, export and regional distribution. The file must be reviewed carefully: tax, real production, standards, energy, customs, SGK, banking and industrial substance.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/en/private-assessment" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Request a private assessment<ArrowRight size={16} /></Link><Link href="/en/services/legal-tax-advisory" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">View tax support</Link></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1300px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">The 4 essential points</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{cards.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><Building2 className="mb-5 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1300px]"><h2 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">Concrete project examples</h2><p className="mt-6 max-w-4xl text-lg leading-9 text-[#3e4857]">Each agribusiness project must be assessed according to the product, standard, logistics, energy, value chain and target market.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{examples.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist before investing</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">Tax should follow a real activity. A factory, production line or logistics center must be documented before any tax projection.</p></div></div></section>
      <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Structure before investing</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras coordinates the private review: company, tax, bank, land, factory, energy, certification, insurance, transport, export and local partners.</p></div><Link href="/en/private-assessment" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Request a private assessment<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">FAQ</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="en" /></>
  );
}
