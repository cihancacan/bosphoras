import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Rocket, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ru/startup-turtsiya-nalogovye-lgoty-investory';
const title = 'Стартапы в Турции: налоги, опционы и инвесторы | Bosphoras';
const description = 'Гид Bosphoras для стартапов в Турции: налоги, опционы, иностранные инвесторы, technopark, R&D, компания, банк, fundraising, команда, IP, контракты, резиденция и substance.';
const updatedAt = '2026-06-05';

const points = [
  ['Почему Турция?', 'Турция может быть региональной базой для стартапов: таланты, расходы, локальный рынок, доступ к Европе, Заливу, Центральной Азии и tech ecosystem Стамбула.'],
  ['Налоги к проверке', 'R&D, technopark, export услуг или иностранные доходы должны анализироваться по деятельности, структуре, substance и правилам применения.'],
  ['Опционы и команда', 'Incentive plans требуют структуры: vesting, контракты, налоги, права founders, сотрудники, consultants и инвесторы.'],
  ['Иностранные инвесторы', 'Dossier должно быть понятным: cap table, банк, KYC, IP, контракты, бухгалтерия, reporting, налоги и governance.'],
];

const checks = ['структура компании и cap table','founders, сотрудники и consultants','IP, software, trademarks, contracts и licenses','банк, KYC, источник средств и reporting','R&D, technopark, export услуг и налоги','юрист, налоговый консультант, бухгалтер и shareholders agreement'];

const faqs = [
  ['Турция интересна для стартапа?', 'Да, для отдельных tech, SaaS, digital services, fintech, e-commerce, healthtech или service-export профилей, но структуру нужно проверить до запуска.'],
  ['Налоговые льготы автоматические?', 'Нет. Они зависят от деятельности, локации, возможного R&D или technopark статуса, invoicing, substance и правил применения.'],
  ['Можно структурировать опционы?', 'Нужно выбрать подходящий механизм: shares, options, vesting, bonus, contracts, founder rights и personal tax.'],
  ['Роль Bosphoras?', 'Bosphoras координирует частный анализ с юристом, налоговым консультантом, бухгалтером, банком, офисами, рекрутингом и локальными партнерами.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/startup-turquie-avantages-fiscaux-investisseurs', en: 'https://bosphoras.com/en/startup-turkey-tax-benefits-investors', ru: url, ar: 'https://bosphoras.com/ar/startup-turkey-tax-benefits-investors', 'x-default': 'https://bosphoras.com/startup-turquie-avantages-fiscaux-investisseurs' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ru_RU', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ru-RU', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['startup Turkey', 'tax benefits Turkey', 'stock options', 'foreign investors', 'technopark'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="ru" currentPath="/ru/startup-turtsiya-nalogovye-lgoty-investory" /><main className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Частный гид · Стартапы Турция · Обновлено 5 июня 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Стартапы в Турции: налоги, опционы и инвесторы</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Турция может быть базой запуска или развития для отдельных стартапов: таланты, расходы, региональный рынок, офисы, банк, technopark, R&D, export услуг и иностранные инвесторы. Тему нужно структурировать осторожно до обещания налоговой выгоды.</p><Link href="/ru/chastnaya-konsultatsiya" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Запросить частный анализ<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Rocket className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">4 ключевых пункта</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist перед созданием или fundraising</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">Стартап должен быть понятен инвестору: cap table, IP, банк, контракты, бухгалтерия, налоги и governance должны быть чистыми до fundraising.</p></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Частые вопросы</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="ru" /></>
  );
}
