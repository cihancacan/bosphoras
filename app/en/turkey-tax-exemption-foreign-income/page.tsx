import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/en/turkey-tax-exemption-foreign-income';
const title = 'Turkey tax exemption on foreign income: investors and international residents | Bosphoras';
const description = 'Turkey is preparing a potential 20-year exemption on certain foreign income. Private analysis for investors, entrepreneurs, families and international residents.';

const measures = [
  { title: 'New international residents', text: 'The proposal provides a potential 20-year exemption for certain gains and income obtained outside Turkey by individuals becoming Turkish residents, subject notably to no Turkish residence or tax liability during the previous 3 calendar years.' },
  { title: 'Wealth and inheritance planning', text: 'During the exemption period, certain inheritance transfers linked to the regime could be taxed at 1%, making the topic relevant for wealthy families and private banking clients.' },
  { title: 'Qualified service centers', text: 'Turkey wants to attract regional headquarters and service centers in management, finance, legal, HR, data, technology, compliance, international support and group coordination.' },
  { title: 'Foreign-sourced business income', text: 'Qualified service center income and certain international trading operations could benefit from a 95% reduction, and up to 100% in some Istanbul Finance Center cases.' },
  { title: 'Asset repatriation', text: 'The proposal includes a declaration and transfer mechanism for foreign assets into Turkey until 31 July 2027, with reduced taxation and potentially 0% depending on the holding period.' },
  { title: 'Istanbul Finance Center', text: 'The text strengthens the Istanbul Finance Center, with some advantages extended until 2047 and additional incentives for experienced international professionals.' },
];

const profiles = ['International entrepreneurs with foreign income, dividends or capital gains', 'Investors, wealth holders, private families and private banking clients', 'Consultants, executives, expatriates and globally mobile profiles', 'Family offices comparing Istanbul, Dubai, Lisbon, Monaco or London', 'International groups seeking a regional management or support center', 'Transit trade, international commerce, B2B services and back-office companies'];

const models = [
  { title: 'Private base for an investor', text: 'A client structures residence, banking, insurance, housing, family and tax analysis before moving part of private or wealth life to Turkey.' },
  { title: 'Turkey family office', text: 'An international family sets up a coordination point in Istanbul for wealth, property, healthcare, insurance, tax, travel and private relations.' },
  { title: 'Regional service center', text: 'An international group establishes a Turkish service entity for finance, reporting, advisory, legal, HR, data, IT, commercial coordination or global support.' },
  { title: 'Transit trade and international commerce', text: 'A Turkey-based company structures purchases and sales between third countries, with tax reduction conditions to be reviewed carefully.' },
  { title: 'International talent and executives', text: 'Executives and financial, legal, technology or commercial profiles may be attracted by a more competitive residence, employment and remuneration framework.' },
  { title: 'Declared and secured capital', text: 'A client holding foreign currency, gold, securities or financial instruments abroad can analyze a declaration, transfer, holding and banking compliance strategy in Turkey.' },
];

const faqs = [
  { q: 'Who can benefit from the 20-year exemption?', a: 'Potentially individuals becoming residents in Turkey who did not have Turkish residence or tax liability during the previous 3 calendar years. Eligibility must be reviewed after final adoption with a qualified tax professional.' },
  { q: 'Is all income exempt?', a: 'No. The proposal targets certain income and gains obtained outside Turkey. Turkish-source income, reporting obligations, evidence and exclusions must be analyzed case by case.' },
  { q: 'Why is this relevant for wealthy families?', a: 'Because the framework may combine residence, foreign income, wealth planning, a 1% inheritance angle in certain cases, banking, insurance, private healthcare and property.' },
  { q: 'Why is this relevant for companies?', a: 'The text also creates a framework for qualified service centers and certain international activities, with significant tax reductions when foreign-income, transfer and activity conditions are met.' },
  { q: 'Does Bosphoras provide tax advice?', a: 'No. Bosphoras organizes the private assessment, prepares the right questions, filters risks and coordinates professionals: tax lawyer, bank, accountant, insurance, property and relocation.' },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers', en: url, ru: 'https://bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody', ar: 'https://bosphoras.com/ar/turkey-tax-exemption-foreign-income', 'x-default': 'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers' } },
  openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'en_US', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] },
};

export default function Page() {
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'en-US', datePublished: '2026-05-07', dateModified: '2026-05-07', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }]} />
      <Header locale="en" currentPath="/en/turkey-tax-exemption-foreign-income" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#121826_0%,#1c2940_48%,#0b1020_100%)] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Turkey Tax · 2026 Proposal</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">Turkey tax exemption on foreign income: who can benefit from the new framework?</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Turkey is preparing a tax package designed to attract investors, entrepreneurs, international families, foreign capital, regional centers and qualified talent. The topic is not only about residence: it also touches foreign income, inheritance, service centers, transit trade, the Istanbul Finance Center and asset repatriation.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/en/private-assessment" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Request a private assessment<ArrowRight size={16} /></Link><Link href="/en/services/legal-tax-advisory" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">View tax support</Link></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">Strategic message</h2><p className="mt-5 leading-8 text-[#3e4857]">Turkey wants to become a competitive base between Europe, the Gulf and Central Asia for international residents, capital, operating holdings, service centers and wealthy families.</p></aside><div><h2 className="font-serif text-4xl text-[#121826]">What Turkey is preparing</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{measures.map((m) => <article key={m.title} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl">{m.title}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{m.text}</p></article>)}</div></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Target profiles</p><h2 className="mt-4 max-w-4xl font-serif text-4xl md:text-6xl">Profiles to target now</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{profiles.map((p) => <div key={p} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="text-base leading-7 text-[#3e4857]">{p}</p></div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Business models</p><h2 className="mt-4 max-w-5xl font-serif text-4xl md:text-6xl">Turning the tax news into a concrete project</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{models.map((m) => <article key={m.title} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-6 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl">{m.title}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{m.text}</p></article>)}</div></div></section>
        <section className="px-5 pb-16 md:px-8 md:pb-24"><div className="mx-auto max-w-[1000px]"><div className="border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl">Important caution</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">This page is not tax advice. The measures come from a proposed reform and must be confirmed after final adoption, official publication and personalized review by qualified tax professionals in Turkey and in the client’s country of residence.</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl md:text-6xl">Can your client benefit from Turkey’s new tax framework?</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras prepares a private assessment: tax profile, residence, foreign income, wealth, company, banking, insurance, property and relocation roadmap.</p></div><Link href="/en/private-assessment" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Request a private assessment<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl">FAQ</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map((f) => <article key={f.q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl">{f.q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{f.a}</p></article>)}</div></div></section>
      </main><Footer locale="en" />
    </>
  );
}
