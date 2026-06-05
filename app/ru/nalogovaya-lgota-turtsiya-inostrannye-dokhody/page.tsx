import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody';
const title = 'Налоговая льгота в Турции на иностранные доходы | Закон 7582 | Bosphoras';
const description = 'Частный гид Bosphoras по Закону Турции №7582, опубликованному в Resmî Gazete №33270: 20-летняя льгота на отдельные иностранные доходы, условия, ограничения, наследование 1%, налоговая резиденция и переезд в Турцию.';
const updatedAt = '2026-06-05';
const updatedLabel = 'Обновлено 5 июня 2026';

const measures = [
  ['Закон опубликован в Resmî Gazete', 'Закон Турции №7582, опубликованный в Resmî Gazete №33270 от 4 июня 2026 года, вводит новую статью Mükerrer Madde 20/D в Закон о подоходном налоге №193. Это уже не проект, а официальный текст, который требует профессионального анализа.'],
  ['Льгота на 20 лет', 'Текст предусматривает освобождение от подоходного налога для отдельных доходов и прибыли, полученных за пределами Турции физическими лицами, считающимися поселившимися в Турции, при соблюдении условий.'],
  ['Условие трех лет', 'Ключевое условие — отсутствие места жительства и налоговой обязанности в Турции в течение трех календарных лет до признания лица поселившимся в Турции. Это должно быть подтверждено документами.'],
  ['Нет годовой декларации для этих доходов', 'Доходы и прибыль, подпадающие под статью 20/D, не декларируются ежегодно в Турции и не включаются в декларацию, поданную по другим доходам.'],
  ['Пределы применения', 'Доходы турецкого источника, деятельность в Турции, расходы, иностранные налоги, банковские доказательства и налоговые соглашения должны анализироваться отдельно. Льгота не является автоматической.'],
  ['Применение с 1 января 2026 года', 'Статья 4 применяется к лицам, считающимся поселившимися в Турции с 1 января 2026 года, начиная с даты публикации закона.'],
];

const audiences = [
  ['Новые международные резиденты', 'Физические лица, рассматривающие Турцию после нескольких лет без места жительства и налоговой обязанности в Турции.'],
  ['Предприниматели и руководители', 'Основатели, консультанты, руководители или инвесторы с дивидендами, приростом капитала, гонорарами, процентами или профессиональными доходами за пределами Турции.'],
  ['Состоятельные семьи', 'Семьи, сравнивающие Стамбул, Бодрум или Анталью с Дубаем, Монако, Лондоном, Лиссабоном или Миланом для резиденции и организации капитала.'],
  ['Family offices', 'Структуры, которым нужно анализировать резиденцию, банки, финансовые активы, иностранные компании, недвижимость, страхование, наследование и конфиденциальность.'],
  ['Международные таланты', 'Квалифицированные профили, желающие использовать Турцию как базу между Европой, Заливом, Центральной Азией и развивающимися рынками.'],
  ['Международные группы', 'Компании, которые также рассматривают региональную базу, сервисный центр, transit trade или координационный офис в Турции.'],
];

const businessModels = [
  ['Частная резиденция в Турции', 'Подготовить резиденцию, банк, медицинскую страховку, жилье, школу, безопасность семьи и налоговый анализ перед переездом.'],
  ['Структурирование иностранных доходов', 'Картировать дивиденды, прирост капитала, проценты, профессиональные доходы, management fees, активы и иностранные компании.'],
  ['Family office в Стамбуле', 'Создать дискретный центр координации для капитала, налогов, банков, недвижимости, страхования, здоровья, поездок и доверенных контактов.'],
  ['Наследование и ставка 1%', 'Изучить связь между статьей 20/D и ставкой 1% для отдельных переходов имущества по наследству в период действия льготы.'],
  ['Региональный service hub', 'Оценить, может ли турецкая компания быть базой для финансов, отчетности, юридической поддержки, HR, данных, технологий или коммерческого support.'],
  ['Дорожная карта переезда', 'Построить план: документы, сроки, налоговый консультант, адвокат, банк, жилье, страхование и согласованность по странам.'],
];

const verificationPoints = [
  'реальная дата переезда и фактическая налоговая резиденция',
  'отсутствие места жительства и налоговой обязанности в Турции за три предыдущих календарных года',
  'точный источник дохода: Турция или иностранный источник',
  'налоговые соглашения со страной происхождения',
  'банковские документы, доказательства резиденции и источник средств',
  'влияние на наследование, дарение, иностранные компании и отчетность в других странах',
];

const faqs = [
  ['20-летняя льгота теперь опубликована официально?', 'Да. Текст соответствует Закону Турции №7582, опубликованному в Resmî Gazete №33270 от 4 июня 2026 года. Он вводит Mükerrer Madde 20/D в Закон о подоходном налоге. Это не означает автоматическую льготу для всех иностранцев.'],
  ['Кого это может касаться?', 'Физических лиц, считающихся поселившимися в Турции, при условии отсутствия места жительства и налоговой обязанности в Турции в течение трех предыдущих календарных лет. Каждый файл нужно проверять отдельно.'],
  ['Нужно ли декларировать эти иностранные доходы ежегодно?', 'Текст указывает, что доходы и прибыль в рамках льготы не декларируются ежегодно и не включаются в декларацию, поданную по другим доходам. Перед применением нужна профессиональная проверка.'],
  ['Все ли доходы покрываются?', 'Нет. Речь идет о доходах и прибыли, полученных за пределами Турции. Доходы из Турции, местные компании, деятельность в Турции, расходы и иностранные налоги должны анализироваться отдельно.'],
  ['Какова роль Bosphoras?', 'Bosphoras не дает налоговых консультаций. Bosphoras координирует частный анализ, готовит вопросы, организует контакт с квалифицированными специалистами и помогает построить понятную дорожную карту в Турции.'],
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
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ru-RU', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['налоговая льгота в Турции', 'иностранные доходы', 'Resmî Gazete 33270', 'Закон 7582', 'Mükerrer Madde 20/D', 'налоговая резиденция в Турции'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale="ru" currentPath="/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Частный гид · Налоги Турции 2026 · {updatedLabel}</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">Налоговая льгота в Турции на иностранные доходы: Закон 7582 и статья 20/D</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Закон Турции №7582, опубликованный в Resmî Gazete №33270 от 4 июня 2026 года, вводит 20-летнюю льготу для отдельных иностранных доходов и прибыли новых налоговых резидентов при соблюдении условий. Эта страница объясняет текст, ограничения, профили и проверки перед переездом в Турцию.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/ru/chastnaya-konsultatsiya" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Запросить частный анализ<ArrowRight size={16} /></Link><Link href="/ru/uslugi/yuridicheskie-nalogovye-konsultatsii" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">Налоговое сопровождение</Link></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">Официальный сигнал Турции</h2><p className="mt-5 leading-8 text-[#3e4857]">Опубликованный текст подтверждает стратегию привлечения новых международных резидентов, иностранного капитала, состоятельных семей, сервисных центров и международных групп. Это налоговый вопрос, а не коммерческое обещание.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em] text-[#121826]">Что предусматривает опубликованный закон</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{measures.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Инвесторы, семьи, руководители, международные группы</p><h2 className="mt-4 max-w-4xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Кому стоит изучить эту реформу в первую очередь?</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{audiences.map(([t, d]) => <div key={t} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-xl text-[#121826]">{t}</h3><p className="mt-3 text-sm leading-7 text-[#3e4857]">{d}</p></div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Практическое применение</p><h2 className="mt-4 max-w-5xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">Как превратить реформу в проект переезда или бизнеса</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{businessModels.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-6 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
        <section className="bg-white px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Проверки до применения льготы</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{verificationPoints.map((point) => <div key={point} className="flex gap-3 border border-[#d8c7a1] bg-[#fffaf0] p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{point}</div>)}</div></div></section>
        <section className="px-5 pb-16 md:px-8 md:pb-24"><div className="mx-auto max-w-[1000px]"><div className="border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">Что проверить перед любым решением</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">Эта страница не является налоговой консультацией. Статья 20/D должна анализироваться с учетом фактической резиденции, источника дохода, налоговых соглашений, обязанностей отчетности в других странах и будущих разъяснений турецкой администрации.</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">Международный профиль нужно анализировать до действий</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras координирует конфиденциальный анализ: налоговая резиденция, иностранные доходы, капитал, компания, банк, страхование, недвижимость и дорожная карта переезда в Турцию.</p></div><Link href="/ru/chastnaya-konsultatsiya" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Запросить частный анализ<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Частые вопросы</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale="ru" />
    </>
  );
}
