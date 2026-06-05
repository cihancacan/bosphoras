import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Ship } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ru/import-export-turtsiya-tranzitnaya-torgovlya';
const title = 'Импорт-экспорт в Турции: transit trade и международная торговля | Bosphoras';
const description = 'Гид Bosphoras по import-export в Турции: transit trade, турецкая компания, поставщики, клиенты, таможня, логистика, банк, платежи, налоги и substance.';
const updatedAt = '2026-06-05';

const points = [
  ['Почему Турция?', 'Турция соединяет Европу, Залив, Кавказ, Северную Африку и Центральную Азию через порты, дороги, suppliers, production и regional trade network.'],
  ['Transit trade', 'Турецкая компания может быть изучена для coordination purchase, sale, invoicing, transport и documentation между несколькими странами.'],
  ['Документы и банк', 'Contracts, invoices, currencies, insurance, transport, customs, source of funds и payments должны быть согласованы.'],
  ['Commercial substance', 'Offices, team, suppliers, clients, contracts, accounting и доказательство реальной деятельности являются essential.'],
];

const checks = ['products, suppliers и clients','contracts, invoices, incoterms и insurance','banking, payments, currencies и source of funds','transport, customs, certificates и documents','company, offices, team и accounting','tax, VAT, margins и reporting duties'];

const faqs = [
  ['Почему открывать import-export компанию в Турции?', 'Турция может служить regional trade platform благодаря location, suppliers, logistics и access to several markets.'],
  ['Transit trade автоматический?', 'Нет. Contracts, documents, banking flows, transport, tax и substance должны быть структурированы case by case.'],
  ['Какие сектора подходят?', 'Textiles, food, materials, machinery, industrial parts, construction, cosmetics, packaging и consumer goods.'],
  ['Роль Bosphoras?', 'Bosphoras координирует assessment с lawyer, tax advisor, accountant, bank, freight forwarders, insurers и local partners.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/import-export-turquie-transit-trade', en: 'https://bosphoras.com/en/import-export-turkey-transit-trade', ru: url, ar: 'https://bosphoras.com/ar/import-export-turkey-transit-trade', 'x-default': 'https://bosphoras.com/import-export-turquie-transit-trade' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ru_RU', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ru-RU', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey import export', 'transit trade Turkey', 'international commerce'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="ru" currentPath="/ru/import-export-turtsiya-tranzitnaya-torgovlya" /><main className="bg-[#f8f1e7] text-[#101827]"><section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Частный гид · Import-export Turquie · 5 июня 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Импорт-экспорт в Турции: transit trade и международная торговля</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Турция может стать commercial base для покупки, продажи, invoicing, storage или coordination flows между несколькими странами. Нужно правильно structurer company, bank, contracts, customs, logistics, tax и real substance.</p><Link href="/ru/chastnaya-konsultatsiya" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Запросить частный анализ<ArrowRight size={16} /></Link></div></section><section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Ship className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">4 ключевых пункта</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section><section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist перед запуском</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div></div></section><section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Частые вопросы</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section></main><Footer locale="ru" /></>
  );
}
