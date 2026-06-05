import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/en/holding-regional-headquarters-turkey';
const title = 'Holding and Regional Headquarters in Turkey: Structure, Tax and Substance | Bosphoras';
const description = 'Bosphoras guide to holding and regional headquarters in Turkey: company, governance, qualified services, substance, tax, banking, management, teams, contracts and foreign investors.';
const updatedAt = '2026-06-05';

const points = [
  ['Why Turkey?', 'Turkey can become a regional coordination base between Europe, the Gulf, Caucasus, North Africa and Central Asia.'],
  ['Regional headquarters', 'A group may structure management, HR, finance, legal, purchasing, data, support, sales coordination and operational control.'],
  ['Qualified services', 'Service centers and exported functions must be reviewed according to real activity, contracts, invoicing and substance.'],
  ['Substance and banking', 'Offices, team, management, bank accounts, contracts, accounting and governance must be consistent.'],
];

const checks = ['company structure and shareholders','real functions of the regional headquarters','offices, team, management and contracts','banking, KYC, flows and reporting','tax, qualified services and treaties','lawyer, tax advisor, accountant and insurance'];

const faqs = [
  ['Why create a holding or regional headquarters in Turkey?', 'Turkey may serve as an operational and regional base for groups that want to coordinate several markets with real presence.'],
  ['Are tax benefits automatic?', 'No. Any potential benefits depend on activity, substance, contracts, income and implementation rules.'],
  ['Which functions can be centralized?', 'Management, finance, HR, purchasing, data, marketing, client support, legal, commercial coordination and group services.'],
  ['What is Bosphoras’ role?', 'Bosphoras coordinates the private assessment with lawyer, tax advisor, accountant, bank, offices, recruitment and local partners.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/holding-siege-regional-turquie', en: url, ru: 'https://bosphoras.com/ru/holding-regionalnyy-ofis-turtsiya', ar: 'https://bosphoras.com/ar/holding-regional-headquarters-turkey', 'x-default': 'https://bosphoras.com/holding-siege-regional-turquie' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'en_US', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'en-US', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey holding', 'regional headquarters Turkey', 'foreign investors', 'qualified services'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="en" currentPath="/en/holding-regional-headquarters-turkey" /><main className="bg-[#f8f1e7] text-[#101827]"><section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Private guide · Turkey Holding · Updated on June 5, 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Holding and regional headquarters in Turkey: structure, tax and substance</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Turkey can become a regional base to coordinate management, finance, HR, purchasing, services, international commerce and family office functions. Success depends on a readable structure: company, bank, team, contracts, tax and real substance.</p><Link href="/en/private-assessment" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Request a private assessment<ArrowRight size={16} /></Link></div></section><section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Building2 className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">The 4 essential points</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section><section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist before structuring</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">A holding should not be an empty shell. Functions, contracts, employees, premises and flows must be documented before any tax projection.</p></div></div></section><section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">FAQ</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section></main><Footer locale="en" /></>
  );
}
