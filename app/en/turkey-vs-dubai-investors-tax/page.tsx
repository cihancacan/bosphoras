import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Scale, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/en/turkey-vs-dubai-investors-tax';
const title = 'Turkey vs Dubai for Investors: Tax, Residence and Business | Bosphoras';
const description = 'Bosphoras comparison of Turkey and Dubai for foreign investors: residence, Law No. 7582, foreign income, Istanbul Finance Center, transit trade, manufacturing, family office, banking, substance and wealth strategy.';
const updatedAt = '2026-06-05';

const points = [
  ['Different models', 'Dubai remains a strong international hub. Turkey adds industry, family life, healthcare, property, logistics and regional operations.'],
  ['Turkey 2026 angle', 'Law No. 7582 increases interest for certain profiles through foreign income, new residents, inheritance, IFC, qualified services and production.'],
  ['Substance first', 'The decision must be based on real residence, banking, company, offices, teams, contracts and country of origin, not only tax slogans.'],
  ['Dual presence', 'Some investors may combine both jurisdictions depending on holding, residence, family, manufacturing, trade, services or property goals.'],
];

const checks = ['real tax residence','foreign and local income','banking and source of funds','company substance and contracts','family, school, healthcare and property','lawyer, tax advisor and tax treaties'];

const faqs = [
  ['Is Turkey better than Dubai for tax?', 'Not automatically. The right choice depends on residence, income, family needs, country of origin, substance and the real project.'],
  ['Why is Turkey more interesting in 2026?', 'Law No. 7582 reinforces foreign income, new resident rules, inheritance, Istanbul Finance Center, transit trade, qualified service centers and manufacturing.'],
  ['Can Turkey and Dubai be combined?', 'Yes. Some profiles may use Dubai for certain functions and Turkey for family, operations, manufacturing, services or regional presence.'],
  ['What is Bosphoras’ role?', 'Bosphoras coordinates the Turkey-side private review with qualified advisors and local partners, without replacing regulated professionals.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/turquie-vs-dubai-investisseurs-fiscalite', en: url, ru: 'https://bosphoras.com/ru/turtsiya-vs-dubai-investory-nalogi', ar: 'https://bosphoras.com/ar/turkey-vs-dubai-investors-tax', 'x-default': 'https://bosphoras.com/turquie-vs-dubai-investisseurs-fiscalite' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'en_US', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'en-US', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey vs Dubai', 'foreign investors', 'tax residence', 'Law 7582'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="en" currentPath="/en/turkey-vs-dubai-investors-tax" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Private guide · Turkey vs Dubai · Updated on June 5, 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Turkey vs Dubai for investors: tax, residence and business</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Dubai and Turkey do not play the same role. Dubai remains a major international hub; Turkey is becoming stronger for certain investors through Law No. 7582, Istanbul Finance Center, transit trade, manufacturing, foreign income, family office and real regional presence.</p><Link href="/en/private-assessment" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Request a private assessment<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Scale className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Compare without caricature</h2><p className="mt-6 text-lg leading-9 text-[#3e4857]">A serious comparison starts with residence, income, family, banking, companies, operating costs, substance, language, target markets and wealth strategy.</p><div className="mt-10 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist before deciding</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">The comparison should avoid slogans and focus on real residence, flows, family, companies, banking and operational substance.</p></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">FAQ</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="en" /></>
  );
}
