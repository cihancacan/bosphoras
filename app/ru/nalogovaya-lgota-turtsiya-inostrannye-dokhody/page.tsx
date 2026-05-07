import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody';
const title = 'Налоговая льгота в Турции на иностранные доходы | Bosphoras';
const description = 'Частный гид Bosphoras по налоговому проекту Турции 2026: иностранные доходы, новые резиденты, сервисные центры, Istanbul Finance Center и стратегия переезда.';

const measures = [
  ['Потенциальная льгота на 20 лет', 'Проект касается отдельных доходов и прибыли, полученных за пределами Турции новыми международными резидентами. Ключевое условие — отсутствие резиденции и налоговой обязанности в Турции в течение трех предыдущих календарных лет.'],
  ['Планирование капитала и наследования', 'Текст также вводит имущественный аспект: для отдельных наследственных переходов, связанных с режимом, заявлена ставка 1%. Для международных семей этот вопрос требует налоговой проверки.'],
  ['Квалифицированные сервисные центры', 'Турция стремится привлечь компании, обслуживающие группы в нескольких странах: финансы, право, отчетность, HR, данные, технологии, compliance, support и международная координация.'],
  ['Международные бизнес-активности', 'Отдельные доходы от квалифицированных услуг или международных операций могут получить существенное налоговое снижение, особенно для некоторых структур, связанных с Istanbul Finance Center.'],
  ['Репатриация активов', 'Проект предусматривает механизм декларирования и перевода в Турцию валюты, ценных бумаг, акций, облигаций, золота или финансовых инструментов с режимом, зависящим от срока хранения.'],
  ['Istanbul Finance Center', 'Реформа подтверждает амбицию Стамбула как региональной финансовой платформы, с продленными преимуществами и мерами для привлечения финансовых институтов и опытных международных специалистов.'],
];

const audiences = [
  ['Международные предприниматели', 'Основатели и руководители с дивидендами, приростом капитала, доходами от бизнеса, долями или клиентами за пределами Турции.'],
  ['Инвесторы и состоятельные семьи', 'Профили, сравнивающие Турцию с Дубаем, Лиссабоном, Монако или Лондоном по резиденции, капиталу, стилю жизни и приватному доступу.'],
  ['Консультанты и мобильные руководители', 'Профессионалы, чьи доходы, клиенты или активы распределены между несколькими странами.'],
  ['Family offices', 'Семьи, которые хотят координировать из Стамбула капитал, недвижимость, здоровье, налоги, страхование, поездки и приватные отношения.'],
  ['Международные группы', 'Компании, рассматривающие региональную базу для управления, финансов, юридических вопросов, HR, данных, IT или коммерческого support.'],
  ['Международная торговля и B2B', 'Transit trade, import-export, back-office, техническая поддержка, коммерческая поддержка или услуги иностранным компаниям.'],
];

const businessModels = [
  ['Частная база в Турции', 'Подготовить резиденцию, банк, страхование, жилье, медицину, школу, безопасность семьи и налоговый анализ до переноса части частной или имущественной жизни в Турцию.'],
  ['Family office в Стамбуле', 'Создать конфиденциальный координационный центр для капитала, недвижимости, медицины, налогов, страхования, частных поездок и привилегированного доступа.'],
  ['Региональный сервисный центр', 'Создать турецкую компанию, которая централизует финансы, отчетность, консалтинг, юридические вопросы, HR, данные, IT, клиентский support или координацию дочерних компаний.'],
  ['Transit trade', 'Структурировать покупки и продажи между третьими странами через турецкую компанию с проверкой налоговых, банковских, документальных и таможенных вопросов.'],
  ['Релокация международных талантов', 'Привлечь или перевести финансовые, юридические, технологические или коммерческие профили в потенциально более конкурентную модель резиденции и работы.'],
  ['Декларированный и структурированный капитал', 'Проверить декларирование, перевод, хранение и банковский compliance активов, которые сейчас находятся за пределами Турции.'],
];

const faqs = [
  ['Льгота на 20 лет уже окончательная?', 'Нет. Это проект реформы. Перед любым решением нужны окончательное принятие, официальная публикация и правила применения.'],
  ['Кого это может касаться?', 'Новых международных резидентов, у которых не было резиденции и налоговой обязанности в Турции в течение трех предыдущих календарных лет, при соблюдении финальных условий.'],
  ['Все ли доходы подпадают под режим?', 'Нет. Речь идет об отдельных доходах и прибыли, полученных за пределами Турции. Доходы из Турции, доказательства, декларации и налоговые соглашения должны быть проверены.'],
  ['Почему это важно для инвесторов?', 'Потому что реформа может объединять резиденцию, иностранные доходы, планирование капитала, банк, страхование, частную медицину, недвижимость и организацию семьи.'],
  ['Какова роль Bosphoras?', 'Bosphoras организует частный анализ, готовит правильные вопросы, координирует квалифицированных специалистов и помогает превратить возможность в структурированный и соответствующий требованиям проект.'],
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers', en: 'https://bosphoras.com/en/turkey-tax-exemption-foreign-income', ru: url, ar: 'https://bosphoras.com/ar/turkey-tax-exemption-foreign-income', 'x-default': 'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers' } },
  openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ru_RU', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] },
};

export default function Page() {
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ru-RU', datePublished: '2026-05-07', dateModified: '2026-05-07', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale="ru" currentPath="/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Частный гид · Налоги Турции 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">Налоговая льгота в Турции на иностранные доходы: что нужно проверить инвесторам</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Турция готовит налоговую рамку для привлечения новых международных резидентов, иностранного капитала, предпринимателей, состоятельных семей, международных групп и квалифицированных талантов. Этот гид объясняет, что охватывает проект, кого он может касаться и как превратить новость в структурированный проект переезда или бизнеса.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/ru/chastnaya-konsultatsiya" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Запросить частный анализ<ArrowRight size={16} /></Link><Link href="/ru/uslugi/yuridicheskie-nalogovye-konsultatsii" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">Налоговое сопровождение</Link></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">Сигнал Турции</h2><p className="mt-5 leading-8 text-[#3e4857]">Турция стремится стать конкурентной базой между Европой, Заливом и Центральной Азией для международных резидентов, капитала, операционных холдингов, сервисных центров и состоятельных семей.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em] text-[#121826]">Что охватывает налоговый проект</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{measures.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Инвесторы, семьи, руководители, международные группы</p><h2 className="mt-4 max-w-4xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Кому стоит изучить эту реформу в первую очередь?</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{audiences.map(([t, d]) => <div key={t} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-xl text-[#121826]">{t}</h3><p className="mt-3 text-sm leading-7 text-[#3e4857]">{d}</p></div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Практические сценарии</p><h2 className="mt-4 max-w-5xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Как превратить реформу в проект переезда или бизнеса</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{businessModels.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-6 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
        <section className="px-5 pb-16 md:px-8 md:pb-24"><div className="mx-auto max-w-[1000px]"><div className="border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Что проверить до любого решения</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">Эта страница не является налоговой консультацией. Указанные меры основаны на проекте реформы и должны быть подтверждены после окончательного принятия, официальной публикации и персонального анализа квалифицированным налоговым специалистом.</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Ваша ситуация требует частного анализа?</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras готовит конфиденциальный анализ профиля: резиденция, иностранные доходы, капитал, компания, банк, страхование, недвижимость и дорожная карта переезда в Турцию.</p></div><Link href="/ru/chastnaya-konsultatsiya" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Запросить частный анализ<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Частые вопросы</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale="ru" />
    </>
  );
}
