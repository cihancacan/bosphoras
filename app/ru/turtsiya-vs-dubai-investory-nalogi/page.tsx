import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Scale } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ru/turtsiya-vs-dubai-investory-nalogi';
const title = 'Турция vs Дубай для инвесторов: резиденция, бизнес и стратегия | Bosphoras';
const description = 'Сравнение Bosphoras Турция vs Дубай для инвесторов: резиденция, Закон №7582, иностранные доходы, Istanbul Finance Center, производство, family office, банки и substance.';
const updatedAt = '2026-06-05';

const points = [
  ['Разные модели', 'Дубай остается сильным международным hub. Турция добавляет промышленность, family office, медицину, недвижимость и региональные операции.'],
  ['Турция 2026', 'Закон №7582 усиливает интерес к Турции для отдельных профилей: иностранные доходы, новые резиденты, наследование, IFM, сервисные центры и производство.'],
  ['Реальная база', 'Выбор должен учитывать резиденцию, банк, компанию, офисы, команду, контракты, семью и страну происхождения.'],
  ['Двойная стратегия', 'Некоторые инвесторы могут сочетать две юрисдикции по функциям: семья, операции, производство, торговля, услуги или активы.'],
];

const checks = ['налоговая резиденция','иностранные и местные доходы','банк и источник средств','компания и substance','семья, школа, медицина, недвижимость','юрист, налоговый консультант, бухгалтер'];

const faqs = [
  ['Турция лучше Дубая?', 'Не автоматически. Решение зависит от резиденции, доходов, семьи, страны происхождения, substance и реального проекта.'],
  ['Почему Турция интересна в 2026?', 'Из-за Закона №7582, иностранных доходов, новых резидентов, Istanbul Finance Center, сервисных центров, transit trade и производства.'],
  ['Можно сочетать Турцию и Дубай?', 'Да. В некоторых случаях одна страна подходит для одних функций, другая — для семейной, операционной или промышленной базы.'],
  ['Роль Bosphoras?', 'Bosphoras координирует частный анализ турецкой стороны с квалифицированными специалистами и локальными партнерами.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/turquie-vs-dubai-investisseurs-fiscalite', en: 'https://bosphoras.com/en/turkey-vs-dubai-investors-tax', ru: url, ar: 'https://bosphoras.com/ar/turkey-vs-dubai-investors-tax', 'x-default': 'https://bosphoras.com/turquie-vs-dubai-investisseurs-fiscalite' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ru_RU', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ru-RU', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey vs Dubai', 'foreign investors', 'Law 7582'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="ru" currentPath="/ru/turtsiya-vs-dubai-investory-nalogi" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Частный гид · Турция vs Дубай · Обновлено 5 июня 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Турция vs Дубай для инвесторов: резиденция, бизнес и стратегия</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Дубай и Турция не выполняют одну и ту же роль. Дубай остается крупным международным hub, а Турция усиливает позиции для инвесторов, которым важны семья, операции, производство, недвижимость, сервисы и региональная база.</p><Link href="/ru/chastnaya-konsultatsiya" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Запросить частный анализ<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Scale className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Сравнение по реальному профилю</h2><p className="mt-6 text-lg leading-9 text-[#3e4857]">Серьезный выбор начинается не с лозунга, а с анализа резиденции, доходов, семьи, банка, компаний, затрат, substance, рынка и долгосрочной стратегии.</p><div className="mt-10 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist перед решением</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Частые вопросы</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="ru" /></>
  );
}
