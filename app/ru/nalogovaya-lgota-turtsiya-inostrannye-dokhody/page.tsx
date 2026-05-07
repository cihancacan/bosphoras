import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody';
const title = 'Налоговая льгота в Турции на иностранные доходы | Bosphoras';
const description = 'Турция готовит возможное освобождение на 20 лет для отдельных иностранных доходов. Частный анализ для инвесторов, предпринимателей, семей и международных резидентов.';

const measures = [
  { title: 'Новые международные резиденты', text: 'Проект предусматривает потенциальное освобождение до 20 лет для отдельных доходов и прибыли, полученных за пределами Турции, если физическое лицо становится резидентом Турции и не имело резиденции или налоговой обязанности в Турции в течение предыдущих 3 календарных лет.' },
  { title: 'Наследование и капитал', text: 'В период действия льготы отдельные наследственные передачи, связанные с режимом, могут облагаться по ставке 1%. Это важно для состоятельных семей и клиентов private banking.' },
  { title: 'Квалифицированные сервисные центры', text: 'Турция хочет привлечь региональные офисы и сервисные центры для управления, финансов, юриспруденции, HR, данных, технологий, compliance, международной поддержки и координации групп.' },
  { title: 'Иностранные доходы компаний', text: 'Доходы квалифицированных сервисных центров и отдельные международные торговые операции могут получить снижение налогообложения на 95%, а в некоторых случаях Istanbul Finance Center — до 100%.' },
  { title: 'Репатриация активов', text: 'Проект включает механизм декларирования и перевода иностранных активов в Турцию до 31 июля 2027 года, со сниженной ставкой и потенциально 0% в зависимости от срока хранения.' },
  { title: 'Istanbul Finance Center', text: 'Текст усиливает привлекательность Istanbul Finance Center, включая продление некоторых преимуществ до 2047 года и стимулы для опытных международных специалистов.' },
];

const profiles = ['Международные предприниматели с иностранными доходами, дивидендами или приростом капитала', 'Инвесторы, владельцы капитала, состоятельные семьи и клиенты private banking', 'Консультанты, руководители, экспаты и международно мобильные профили', 'Family offices, сравнивающие Стамбул, Дубай, Лиссабон, Монако или Лондон', 'Международные группы, которым нужен региональный центр управления или поддержки', 'Компании transit trade, международной торговли, B2B услуг и back-office'];

const models = [
  { title: 'Частная база для инвестора', text: 'Клиент структурирует резиденцию, банк, страхование, жильё, семью и налоговый анализ до переноса части частной или имущественной жизни в Турцию.' },
  { title: 'Family office в Турции', text: 'Международная семья создает точку координации в Стамбуле для капитала, недвижимости, медицины, страхования, налогов, поездок и частных отношений.' },
  { title: 'Региональный сервисный центр', text: 'Международная группа создает в Турции сервисную компанию для финансов, отчетности, консалтинга, юридической поддержки, HR, данных, IT, коммерческой координации или глобального support.' },
  { title: 'Transit trade и международная торговля', text: 'Компания в Турции структурирует покупки и продажи между третьими странами, с внимательной проверкой условий налогового снижения.' },
  { title: 'Международные таланты и руководители', text: 'Руководители и специалисты в финансах, праве, технологиях или коммерции могут быть привлечены более конкурентной моделью резиденции, работы и вознаграждения.' },
  { title: 'Декларированный и защищенный капитал', text: 'Клиент с валютой, золотом, ценными бумагами или финансовыми инструментами за рубежом может анализировать стратегию декларирования, перевода, хранения и банковского compliance в Турции.' },
];

const faqs = [
  { q: 'Кто может воспользоваться льготой на 20 лет?', a: 'Потенциально физические лица, становящиеся резидентами Турции, если они не имели резиденции или налоговой обязанности в Турции в течение предыдущих 3 календарных лет. Право нужно проверять после финального принятия закона со специалистом.' },
  { q: 'Все ли доходы освобождаются?', a: 'Нет. Проект касается отдельных доходов и прибыли, полученных за пределами Турции. Доходы из турецких источников, декларации, доказательства и исключения должны анализироваться индивидуально.' },
  { q: 'Почему это важно для состоятельных семей?', a: 'Потому что режим может объединять резиденцию, иностранные доходы, планирование капитала, наследственный аспект 1% в отдельных случаях, банки, страхование, частную медицину и недвижимость.' },
  { q: 'Почему это важно для компаний?', a: 'Текст также создает рамку для квалифицированных сервисных центров и отдельных международных активностей, с существенными налоговыми снижениями при выполнении условий.' },
  { q: 'Bosphoras дает налоговую консультацию?', a: 'Нет. Bosphoras организует частный анализ, готовит правильные вопросы, фильтрует риски и координирует специалистов: налоговый юрист, банк, бухгалтер, страхование, недвижимость и relocation.' },
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
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ru-RU', datePublished: '2026-05-07', dateModified: '2026-05-07', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }]} />
      <Header locale="ru" currentPath="/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody" />
      <main className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#121826_0%,#1c2940_48%,#0b1020_100%)] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Налоги Турции · Законопроект 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">Налоговая льгота в Турции на иностранные доходы: кто может воспользоваться новым режимом?</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">Турция готовит налоговый пакет для привлечения инвесторов, предпринимателей, международных семей, иностранного капитала, региональных центров и квалифицированных талантов. Это касается не только резиденции: речь также об иностранных доходах, наследовании, сервисных центрах, transit trade, Istanbul Finance Center и репатриации активов.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/ru/chastnaya-konsultatsiya" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Запросить частный анализ<ArrowRight size={16} /></Link><Link href="/ru/uslugi/yuridicheskie-nalogovye-konsultatsii" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">Налоговое сопровождение</Link></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">Стратегический сигнал</h2><p className="mt-5 leading-8 text-[#3e4857]">Турция хочет стать конкурентной базой между Европой, Заливом и Центральной Азией для международных резидентов, капитала, операционных холдингов, сервисных центров и состоятельных семей.</p></aside><div><h2 className="font-serif text-4xl text-[#121826]">Что готовит Турция</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{measures.map((m) => <article key={m.title} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl">{m.title}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{m.text}</p></article>)}</div></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Целевые профили</p><h2 className="mt-4 max-w-4xl font-serif text-4xl md:text-6xl">Кого нужно таргетировать сейчас</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{profiles.map((p) => <div key={p} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="text-base leading-7 text-[#3e4857]">{p}</p></div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Бизнес-модели</p><h2 className="mt-4 max-w-5xl font-serif text-4xl md:text-6xl">Как превратить налоговую новость в конкретный проект</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{models.map((m) => <article key={m.title} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-6 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl">{m.title}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{m.text}</p></article>)}</div></div></section>
        <section className="px-5 pb-16 md:px-8 md:pb-24"><div className="mx-auto max-w-[1000px]"><div className="border-l-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl">Важное предупреждение</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">Эта страница не является налоговой консультацией. Меры основаны на проекте реформы и должны быть подтверждены после окончательного принятия, официальной публикации и персонального анализа специалистами в Турции и стране резиденции клиента.</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl md:text-6xl">Может ли ваш клиент воспользоваться новым налоговым режимом Турции?</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">Bosphoras готовит частный анализ: налоговый профиль, резиденция, иностранные доходы, капитал, компания, банк, страхование, недвижимость и дорожная карта переезда.</p></div><Link href="/ru/chastnaya-konsultatsiya" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">Запросить частный анализ<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl">Частые вопросы</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map((f) => <article key={f.q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl">{f.q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{f.a}</p></article>)}</div></div></section>
      </main><Footer locale="ru" />
    </>
  );
}
