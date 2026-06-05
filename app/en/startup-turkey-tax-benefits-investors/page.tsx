import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Rocket, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/en/startup-turkey-tax-benefits-investors';
const title = 'Startups in Turkey: Tax, Stock Options and Investors | Bosphoras';
const description = 'Bosphoras guide for startups in Turkey: tax, stock options, foreign investors, technopark, R&D, company setup, banking, fundraising, teams, IP, contracts, residence and substance.';
const updatedAt = '2026-06-05';

const points = [
  ['Why Turkey?', 'Turkey can be a regional startup base: talent, controlled costs, local market, access to Europe, the Gulf, Central Asia and Istanbul’s tech ecosystem.'],
  ['Tax to verify', 'R&D, technopark, service export or foreign-income benefits must be reviewed according to activity, structure, substance and implementation rules.'],
  ['Stock options and teams', 'Incentive plans need clean structuring: vesting, contracts, tax, founder rights, employees, consultants and investors.'],
  ['Foreign investors', 'The file must reassure: cap table, banking, KYC, IP, contracts, accounting, reporting, tax and local governance.'],
];

const checks = ['company structure and cap table','founders, employees and consultants','IP, software, trademarks, contracts and licenses','banking, KYC, source of funds and reporting','R&D, technopark, service export and tax','lawyer, tax advisor, accountant and shareholders agreement'];

const faqs = [
  ['Is Turkey attractive for startups?', 'Yes for certain tech, SaaS, digital services, fintech, e-commerce, healthtech or service-export profiles, but the structure must be reviewed before launch.'],
  ['Are tax benefits automatic?', 'No. They depend on activity, location, possible R&D or technopark status, invoicing, substance and implementation rules.'],
  ['Can stock options be structured?', 'The right mechanism must be reviewed: shares, options, vesting, bonus, contracts, founder rights and personal tax.'],
  ['What is Bosphoras’ role?', 'Bosphoras coordinates the private assessment with lawyer, tax advisor, accountant, bank, offices, recruitment and local partners.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/startup-turquie-avantages-fiscaux-investisseurs', en: url, ru: 'https://bosphoras.com/ru/startup-turtsiya-nalogovye-lgoty-investory', ar: 'https://bosphoras.com/ar/startup-turkey-tax-benefits-investors', 'x-default': 'https://bosphoras.com/startup-turquie-avantages-fiscaux-investisseurs' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'en_US', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'en-US', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['startup Turkey', 'tax benefits Turkey', 'stock options', 'foreign investors', 'technopark'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="en" currentPath="/en/startup-turkey-tax-benefits-investors" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Private guide · Turkey Startups · Updated on June 5, 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Startups in Turkey: tax, stock options and investors</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Turkey can be a launch or development base for certain startups: talent, costs, regional market, offices, banking, technopark, R&D, service export and foreign investors. The topic must be structured carefully before any tax benefit is promised.</p><Link href="/en/private-assessment" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Request a private assessment<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Rocket className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">The 4 essential points</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist before setup or fundraising</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">A startup attractive to investors must be readable: cap table, IP, banking, contracts, accounting, tax and governance should be clean before fundraising.</p></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">FAQ</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="en" /></>
  );
}
