import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/en/turkey-tax-exemption-foreign-income';
const title = 'Turkey tax exemption on foreign income | Bosphoras';
const description = 'Private Bosphoras guide to Turkey’s 2026 tax proposal: foreign income, new residents, qualified service centers, Istanbul Finance Center and relocation strategy.';

const measures = [
  ['Potential 20-year exemption', 'The proposal targets certain income and gains earned outside Turkey by new international residents. The key announced condition is no Turkish residence or Turkish tax liability during the previous three calendar years.'],
  ['Wealth and succession planning', 'The text also introduces a wealth-planning angle with a proposed 1% rate for certain inheritance transfers linked to the regime. For international families, this point requires tax review.'],
  ['Qualified service centers', 'Turkey aims to attract companies serving groups active in several countries: finance, legal, reporting, HR, data, technology, compliance, support and international coordination.'],
  ['International business activities', 'Certain income from qualified services or international operations may benefit from significant tax relief, with enhanced treatment for some structures connected to the Istanbul Finance Center.'],
  ['Asset repatriation', 'The proposal includes a framework to declare and transfer foreign currency, securities, shares, bonds, gold or financial instruments into Turkey, with treatment depending on the holding period.'],
  ['Istanbul Finance Center', 'The reform confirms Istanbul’s ambition as a regional financial platform, with extended advantages and measures designed to attract financial institutions and experienced international professionals.'],
];

const audiences = [
  ['International entrepreneurs', 'Founders and executives with dividends, capital gains, business income, shareholdings or clients outside Turkey.'],
  ['Investors and wealth families', 'Profiles comparing Turkey with Dubai, Lisbon, Monaco or London for residence, wealth, lifestyle and private access.'],
  ['Consultants and mobile executives', 'Professionals whose income, clients or assets are spread across several countries.'],
  ['Family offices', 'Families seeking to coordinate wealth, property, healthcare, tax, insurance, travel and private relationships from Istanbul.'],
  ['International groups', 'Companies considering a regional base for management, finance, legal, HR, data, IT or commercial support.'],
  ['International trade and B2B services', 'Transit trade, import-export, back-office, technical support, sales support or services to foreign entities.'],
];

const businessModels = [
  ['Private base in Turkey', 'Prepare residence, banking, insurance, housing, healthcare, schooling, family security and tax review before moving part of private or wealth life to Turkey.'],
  ['Family office in Istanbul', 'Create a confidential coordination point for wealth, property, healthcare, tax, insurance, private travel and privileged access.'],
  ['Regional service center', 'Set up a Turkish entity centralizing finance, reporting, advisory, legal, HR, data, IT, client support or subsidiary coordination.'],
  ['Transit trade', 'Structure purchases and sales between third countries through a Turkish company, with tax, banking, documentation and customs review.'],
  ['International talent relocation', 'Attract or relocate financial, legal, technology or commercial profiles within a potentially more competitive residence and employment framework.'],
  ['Declared and structured capital', 'Review the declaration, transfer, holding and banking compliance of assets currently held outside Turkey.'],
];

const faqs = [
  ['Is the 20-year exemption already final?', 'No. This is a proposed reform. Final adoption, official publication and implementation guidance are required before any decision.'],
  ['Who could be concerned?', 'New international residents with no Turkish residence or tax liability during the previous three calendar years may be concerned, subject to final conditions.'],
  ['Is all income covered?', 'No. The text concerns certain income and gains obtained outside Turkey. Turkish-source income, evidence, reporting duties and tax treaties must be reviewed.'],
  ['Why does this matter for investors?', 'Because the reform may combine residence, foreign income, wealth planning, banking, insurance, private healthcare, property and family organization.'],
  ['What is Bosphoras’ role?', 'Bosphoras organizes the private assessment, prepares the right questions, coordinates qualified professionals and helps turn an opportunity into a structured, compliant project.'],
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
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'en-US', datePublished: '2026-05-07', dateModified: '2026-05-07', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale="en" currentPath="/en/turkey-tax-exemption-foreign-income" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Private guide · Turkey Tax 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">Turkey tax exemption on foreign income: what investors should verify</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Turkey is preparing a tax framework designed to attract new international residents, foreign capital, entrepreneurs, wealth families, international groups and qualified talent. This guide explains what the proposal covers, who may be concerned and how to turn the news into a structured relocation or business project.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/en/private-assessment" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Request a private assessment<ArrowRight size={16} /></Link><Link href="/en/services/legal-tax-advisory" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">View tax support</Link></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">The signal from Turkey</h2><p className="mt-5 leading-8 text-[#3e4857]">Turkey wants to position itself as a competitive base between Europe, the Gulf and Central Asia for international residents, capital, operating holdings, service centers and wealth families.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em] text-[#121826]">What the tax proposal covers</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{measures.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Investors, families, executives, international groups</p><h2 className="mt-4 max-w-4xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Who should review this reform first?</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{audiences.map(([t, d]) => <div key={t} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-xl text-[#121826]">{t}</h3><p className="mt-3 text-sm leading-7 text-[#3e4857]">{d}</p></div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Concrete applications</p><h2 className="mt-4 max-w-5xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">How to turn the reform into a relocation or business project</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{businessModels.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-6 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
        <section className="px-5 pb-16 md:px-8 md:pb-24"><div className="mx-auto max-w-[1000px]"><div className="border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">What to verify before any decision</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">This page is not tax advice. The measures discussed come from a proposed reform and must be confirmed after final adoption, official publication and personalized review by a qualified tax professional.</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Does your situation deserve a private assessment?</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras prepares a confidential reading of your profile: residence, foreign income, wealth, company, banking, insurance, property and Turkey relocation roadmap.</p></div><Link href="/en/private-assessment" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Request a private assessment<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">FAQ</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale="en" />
    </>
  );
}
