import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ar/family-office-turkey-istanbul';
const title = 'Family office في تركيا وإسطنبول: الضرائب والثروة والإقامة | Bosphoras';
const description = 'دليل Bosphoras حول family office في تركيا وإسطنبول: القانون رقم 7582، الدخل الأجنبي، الإقامة الضريبية، الميراث، البنوك، العقار، التأمين، الشركة، الوجود الحقيقي، الصحة الخاصة والتنسيق الخاص.';
const updatedAt = '2026-06-05';

const cards = [
  ['التعريف', 'Family office في تركيا هو هيكل تنسيق خاص للإقامة والثروة والبنوك والضرائب والعقار والتأمين والصحة والتنقل والميراث.'],
  ['لماذا إسطنبول؟', 'إسطنبول تجمع البنوك والمحامين والمستشارين الضريبيين والمكاتب الفاخرة والعقار والصحة الخاصة والعلاقات التجارية الإقليمية.'],
  ['القانون 7582', 'الإصلاح المنشور في Resmî Gazete رقم 33270 يعزز اهتمام المقيمين الجدد والدخل الأجنبي والميراث وهياكل الخدمات الدولية.'],
  ['دور Bosphoras', 'ينسق Bosphoras الجهات المفيدة دون أن يحل محل المحامين أو المستشارين الضريبيين أو البنوك أو المحاسبين.'],
];

const examples = [
  ['انتقال عائلة دولية', 'تنسيق الإقامة والسكن والمدرسة والصحة والتأمين والبنك والضرائب والأمن اليومي في إسطنبول أو بودروم أو أنطاليا.'],
  ['رائد أعمال بدخل أجنبي', 'تحليل الأرباح والتوزيعات والشركات الأجنبية والعقود والتدفقات البنكية وبلد الأصل وإمكانية تطبيق المادة 20/D.'],
  ['ثروة عقارية ومالية', 'متابعة الأصول، reporting، التأمين، الضرائب، الميراث، الهبات، العقار، الحسابات البنكية والوثائق العائلية.'],
  ['مجموعة عائلية دولية', 'تنسيق holding، مركز خدمات، private office، ضرائب، محامين، محاسبين، توظيف، مكاتب وتنقلات VIP.'],
];

const checks = ['الإقامة الضريبية الحالية والمستقبلية','مصدر الأموال والأدلة البنكية','الشركات الأجنبية والدخل خارج تركيا','الميراث والهبات والتنظيم العائلي','البنك والتأمين والعقار والصحة الخاصة','المحامي والمستشار الضريبي والمحاسب وقواعد التطبيق'];

const faqs = [
  ['ما هو family office في تركيا؟', 'هو تنظيم خاص ينسق الثروة والضرائب والبنوك والعقار والتأمين والصحة والإقامة والوثائق والقرارات العائلية من تركيا.'],
  ['هل تركيا بديل تلقائي لدبي أو موناكو؟', 'لا. تركيا يمكن أن تصبح قاعدة عائلية وتشغيلية قوية، لكن القرار يعتمد على الإقامة الضريبية والدخل وبلد الأصل واحتياجات العائلة والوجود الحقيقي.'],
  ['هل يزيد القانون 7582 أهمية family office؟', 'نعم. يعزز اهتمام بعض الملفات الدولية عبر الدخل الأجنبي والمقيمين الجدد والميراث ومراكز الخدمات المؤهلة وIstanbul Finance Center.'],
  ['هل يقدم Bosphoras استشارة ضريبية؟', 'لا. Bosphoras ينسق التحليل الخاص مع مهنيين مؤهلين ويساعد على هيكلة خارطة الطريق.'],
  ['ما الذي يجب فحصه قبل الانتقال؟', 'الإقامة الضريبية، مصدر الدخل، الاتفاقيات الضريبية، البنك، مصدر الأموال، التأمين، العقار، الميراث، الشركة والالتزامات التصريحية.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/family-office-turquie-istanbul', en: 'https://bosphoras.com/en/family-office-turkey-istanbul', ru: 'https://bosphoras.com/ru/family-office-turtsiya-stambul', ar: url, 'x-default': 'https://bosphoras.com/family-office-turquie-istanbul' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ar', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['family office Turkey', 'Istanbul family office', 'Law 7582', 'foreign income', 'tax residence', 'wealth planning'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="ar" currentPath="/ar/family-office-turkey-istanbul" /><main dir="rtl" className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">دليل خاص · Family Office تركيا · تم التحديث في 5 يونيو 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">Family office في تركيا وإسطنبول: الضرائب والثروة والإقامة</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">تركيا أصبحت قاعدة يجب دراستها للعائلات الدولية التي تريد تنظيم الإقامة والثروة والبنوك والضرائب والعقار والتأمين والصحة الخاصة والتنقل والميراث. بعد القانون رقم 7582 المنشور في Resmî Gazete رقم 33270، يجب التعامل مع الموضوع كملف منظم وموثق مع مهنيين مؤهلين.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/ar/تقييم-خاص" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link><Link href="/ar/خدمات/استشارات-قانونية-ضريبية" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">عرض الدعم الضريبي</Link></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">لماذا تجذب إسطنبول العائلات الثرية؟</h2><p className="mt-5 leading-8 text-[#3e4857]">إسطنبول تمنح وصولاً سريعاً إلى أوروبا والخليج وآسيا الوسطى والأسواق الناشئة. المدينة تجمع البنوك والمحامين والمستشارين الضريبيين والعقار الفاخر والمدارس والصحة الخاصة والفنادق وVIP transfers والمكاتب المجهزة وشبكات الأعمال الإقليمية.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em]">4 نقاط أساسية</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{cards.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1300px]"><h2 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">حالات استخدام عملية</h2><p className="mt-6 max-w-4xl text-lg leading-9 text-[#3e4857]">Family office في تركيا يمكن أن يكون بسيطاً أو منظماً جداً. المهم هو توضيح الوظائف الحقيقية والمسؤوليات والدول المعنية والوثائق المطلوبة.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{examples.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-5 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist قبل هيكلة family office</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-r-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">Family office لا يجب أن يُباع كحل ضريبي سحري. إنه تنظيم لتنسيق الثروة والعائلة، ويجب بناؤه حسب الملف والدول المعنية.</p></div></div></section>
      <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">جهة واحدة لتنسيق تركيا</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">ينسق Bosphoras المحامين والمستشارين الضريبيين والبنوك والمحاسبين والتأمين والعقار والمكاتب والصحة الخاصة وVIP transfers والخدمات العائلية حسب الملف.</p></div><Link href="/ar/تقييم-خاص" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">الأسئلة الشائعة</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="ar" /></>
  );
}
