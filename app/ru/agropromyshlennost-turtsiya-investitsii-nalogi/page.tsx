import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ru/agropromyshlennost-turtsiya-investitsii-nalogi';
const title = 'Агроиндустрия в Турции: инвестиции, налоги и экспорт | Bosphoras';
const description = 'Гид Bosphoras по агроиндустрии в Турции: переработка продуктов, упаковка, экспорт, Закон №7582, производство, логистика, стандарты, таможня, энергия и реальная промышленная база.';
const updatedAt = '2026-06-05';

const points = [
  ['Почему Турция', 'Турция объединяет сельхозпроизводство, переработку, упаковку, порты, логистику, рабочую силу и доступ к Европе, Заливу, Центральной Азии и Северной Африке.'],
  ['Налоги к анализу', 'Закон №7582 усиливает интерес к производственным проектам, но налоговые режимы нужно проверять по деятельности, доходу, фабрике и правилам применения.'],
  ['Экспорт', 'Проект может работать на Турцию, соседние страны, Ближний Восток, Центральную Азию или ЕС в зависимости от стандартов, упаковки и сертификатов.'],
  ['Substance', 'Земля, фабрика, оборудование, сотрудники, SGK, энергия, хранение, холодная цепь, качество, контракты и бухгалтерия должны быть реальными.'],
];

const checks = ['тип продукта и санитарные стандарты','земля, фабрика, аренда или промзона','оборудование, энергия, вода и хранение','сотрудники, SGK, безопасность и качество','таможня, сертификаты, упаковка и экспорт','юрист, налоговый консультант, бухгалтер, банк'];

const faqs = [
  ['Почему инвестировать в агроиндустрию Турции?', 'Турция может быть интересна для переработки продуктов, упаковки, экспорта и региональной дистрибуции, если проект структурирован правильно.'],
  ['Налоговые льготы автоматические?', 'Нет. Нужно анализировать реальную деятельность, доход, фабрику, бухгалтерию и правила применения.'],
  ['Какие проекты можно изучать?', 'Переработка продуктов, упаковка, сухие продукты, холодная цепь, хранение, private label, экспорт и дистрибуция.'],
  ['Роль Bosphoras?', 'Bosphoras координирует локальных специалистов и партнеров: юрист, налоговый консультант, бухгалтер, банк, промзона, страхование, транспорт и энергия.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/agro-industrie-turquie-investissement-fiscalite', en: 'https://bosphoras.com/en/agribusiness-turkey-investment-tax', ru: url, ar: 'https://bosphoras.com/ar/agribusiness-turkey-investment-tax', 'x-default': 'https://bosphoras.com/agro-industrie-turquie-investissement-fiscalite' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ru_RU', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ru-RU', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey agribusiness', 'food industry Turkey', 'Law 7582'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="ru" currentPath="/ru/agropromyshlennost-turtsiya-investitsii-nalogi" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Частный гид · Агроиндустрия Турция · Обновлено 5 июня 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Агроиндустрия в Турции: инвестиции, налоги и экспорт</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Агроиндустрия Турции может быть интересна иностранным инвесторам: переработка продуктов, упаковка, холодная цепь, хранение, экспорт и региональная дистрибуция. Проект требует проверки налогов, реального производства, стандартов, энергии, таможни, SGK, банков и промышленной базы.</p><Link href="/ru/chastnaya-konsultatsiya" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Запросить частный анализ<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">4 ключевых пункта</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist перед инвестицией</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">Налоги должны следовать реальной деятельности. Фабрика, производственная линия или логистический центр должны быть документированы до налоговых прогнозов.</p></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Частые вопросы</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="ru" /></>
  );
}
