import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ar/turkey-tax-exemption-foreign-income';
const title = 'الإعفاء الضريبي في تركيا على الدخل الأجنبي | Bosphoras';
const description = 'دليل خاص من Bosphoras حول مشروع الضرائب في تركيا 2026: الدخل الأجنبي، المقيمون الجدد، مراكز الخدمات المؤهلة، Istanbul Finance Center واستراتيجية الانتقال.';

const measures = [
  ['إعفاء محتمل لمدة 20 سنة', 'يستهدف المشروع بعض الدخل والأرباح المحققة خارج تركيا من قبل المقيمين الدوليين الجدد. الشرط الأساسي المعلن هو عدم وجود إقامة أو مسؤولية ضريبية في تركيا خلال السنوات التقويمية الثلاث السابقة.'],
  ['تخطيط الثروة والميراث', 'يتضمن النص أيضاً جانباً متعلقاً بالثروة، مع معدل مقترح بنسبة 1% لبعض انتقالات الميراث المرتبطة بالنظام. بالنسبة للعائلات الدولية، يتطلب هذا الجزء مراجعة ضريبية متخصصة.'],
  ['مراكز الخدمات المؤهلة', 'تسعى تركيا إلى جذب الشركات التي تخدم مجموعات تعمل في عدة دول: المالية، القانون، التقارير، الموارد البشرية، البيانات، التكنولوجيا، الامتثال، الدعم والتنسيق الدولي.'],
  ['الأنشطة التجارية الدولية', 'قد تستفيد بعض الإيرادات من الخدمات المؤهلة أو العمليات الدولية من تخفيف ضريبي مهم، مع معاملة معززة لبعض الهياكل المرتبطة بـ Istanbul Finance Center.'],
  ['إعادة الأصول إلى تركيا', 'يتضمن المشروع إطاراً للتصريح وتحويل العملات، الأوراق المالية، الأسهم، السندات، الذهب أو الأدوات المالية إلى تركيا، مع نظام يعتمد على مدة الاحتفاظ.'],
  ['Istanbul Finance Center', 'تؤكد الإصلاحات طموح إسطنبول كمنصة مالية إقليمية، مع مزايا ممتدة وتدابير لجذب المؤسسات المالية والمهنيين الدوليين ذوي الخبرة.'],
];

const audiences = [
  ['رواد الأعمال الدوليون', 'المؤسسون والمديرون ذوو الأرباح، المكاسب الرأسمالية، دخل الأعمال، المساهمات أو العملاء خارج تركيا.'],
  ['المستثمرون والعائلات الثرية', 'ملفات تقارن تركيا بدبي، لشبونة، موناكو أو لندن من حيث الإقامة، الثروة، نمط الحياة والوصول الخاص.'],
  ['المستشارون والمديرون المتنقلون', 'مهنيون تتوزع دخولهم أو عملاؤهم أو أصولهم بين عدة دول.'],
  ['المكاتب العائلية', 'عائلات ترغب في تنسيق الثروة، العقار، الصحة، الضرائب، التأمين، السفر والعلاقات الخاصة من إسطنبول.'],
  ['المجموعات الدولية', 'شركات تدرس قاعدة إقليمية للإدارة، المالية، القانون، الموارد البشرية، البيانات، التكنولوجيا أو الدعم التجاري.'],
  ['التجارة الدولية وخدمات B2B', 'التجارة العابرة، الاستيراد والتصدير، العمليات الخلفية، الدعم التقني، الدعم التجاري أو الخدمات لكيانات أجنبية.'],
];

const businessModels = [
  ['قاعدة خاصة في تركيا', 'تحضير الإقامة، البنك، التأمين، السكن، الصحة، التعليم، أمن العائلة والمراجعة الضريبية قبل نقل جزء من الحياة الخاصة أو الثروة إلى تركيا.'],
  ['Family office في إسطنبول', 'إنشاء نقطة تنسيق سرية للثروة، العقار، الصحة، الضرائب، التأمين، السفر الخاص والوصول المميز.'],
  ['مركز خدمات إقليمي', 'تأسيس كيان تركي يركز المالية، التقارير، الاستشارات، القانون، الموارد البشرية، البيانات، التكنولوجيا، دعم العملاء أو تنسيق الشركات التابعة.'],
  ['التجارة العابرة', 'تنظيم عمليات شراء وبيع بين دول ثالثة عبر شركة تركية، مع مراجعة ضريبية وبنكية ووثائقية وجمركية.'],
  ['انتقال المواهب الدولية', 'جذب أو نقل ملفات مالية، قانونية، تكنولوجية أو تجارية ضمن إطار إقامة وعمل قد يكون أكثر تنافسية.'],
  ['رأس مال مصرح ومنظم', 'مراجعة التصريح، التحويل، الاحتفاظ والامتثال البنكي للأصول الموجودة حالياً خارج تركيا.'],
];

const faqs = [
  ['هل الإعفاء لمدة 20 سنة نهائي بالفعل؟', 'لا. هذا مشروع إصلاح. قبل أي قرار، يجب انتظار الاعتماد النهائي، النشر الرسمي وقواعد التطبيق.'],
  ['من يمكن أن يكون معنياً؟', 'قد يشمل المقيمين الدوليين الجدد الذين لم تكن لديهم إقامة أو مسؤولية ضريبية في تركيا خلال السنوات التقويمية الثلاث السابقة، وفق الشروط النهائية.'],
  ['هل يشمل النظام كل الدخل؟', 'لا. يتعلق النص ببعض الدخل والأرباح المحققة خارج تركيا. يجب مراجعة الدخل التركي، الأدلة، التصريحات والاتفاقيات الضريبية.'],
  ['لماذا يهم هذا المستثمرين؟', 'لأن الإصلاح قد يجمع بين الإقامة، الدخل الأجنبي، تخطيط الثروة، البنك، التأمين، الصحة الخاصة، العقار وتنظيم العائلة.'],
  ['ما هو دور Bosphoras؟', 'ينظم Bosphoras التحليل الخاص، يحضر الأسئلة المناسبة، ينسق المهنيين المؤهلين ويساعد على تحويل الفرصة إلى مشروع منظم ومتوافق.'],
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers', en: 'https://bosphoras.com/en/turkey-tax-exemption-foreign-income', ru: 'https://bosphoras.com/ru/nalogovaya-lgota-turtsiya-inostrannye-dokhody', ar: url, 'x-default': 'https://bosphoras.com/exoneration-fiscale-turquie-revenus-etrangers' } },
  openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] },
};

export default function Page() {
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ar', datePublished: '2026-05-07', dateModified: '2026-05-07', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale="ar" currentPath="/ar/turkey-tax-exemption-foreign-income" />
      <main dir="rtl" className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">دليل خاص · ضرائب تركيا 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">الإعفاء الضريبي في تركيا على الدخل الأجنبي: ما الذي يجب على المستثمرين التحقق منه</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">تستعد تركيا لإطار ضريبي يهدف إلى جذب مقيمين دوليين جدد، رؤوس أموال أجنبية، رواد أعمال، عائلات ثرية، مجموعات دولية ومواهب مؤهلة. يشرح هذا الدليل ما يغطيه المشروع، من قد يكون معنياً وكيف يمكن تحويل الخبر إلى مشروع إقامة أو أعمال منظم.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/ar/تقييم-خاص" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link><Link href="/ar/خدمات/استشارات-قانونية-ضريبية" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">عرض الدعم الضريبي</Link></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">الإشارة التي ترسلها تركيا</h2><p className="mt-5 leading-8 text-[#3e4857]">تسعى تركيا إلى أن تصبح قاعدة تنافسية بين أوروبا والخليج وآسيا الوسطى للمقيمين الدوليين، رؤوس الأموال، الهياكل التشغيلية، مراكز الخدمات والعائلات الثرية.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em] text-[#121826]">ما الذي يغطيه المشروع الضريبي</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{measures.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">مستثمرون، عائلات، مديرون، مجموعات دولية</p><h2 className="mt-4 max-w-4xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">من الذي يجب أن يدرس هذا الإصلاح أولاً؟</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{audiences.map(([t, d]) => <div key={t} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-xl text-[#121826]">{t}</h3><p className="mt-3 text-sm leading-7 text-[#3e4857]">{d}</p></div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">تطبيقات عملية</p><h2 className="mt-4 max-w-5xl font-serif text-4xl tracking-[-0.035em] md:text-6xl">كيف يمكن تحويل الإصلاح إلى مشروع إقامة أو أعمال</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{businessModels.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-6 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
        <section className="px-5 pb-16 md:px-8 md:pb-24"><div className="mx-auto max-w-[1000px]"><div className="border-r-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">ما الذي يجب التحقق منه قبل أي قرار</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">هذه الصفحة لا تشكل استشارة ضريبية. التدابير المذكورة مبنية على مشروع إصلاح ويجب تأكيدها بعد الاعتماد النهائي، النشر الرسمي والتحليل الشخصي من قبل مختص ضريبي مؤهل.</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">هل تستحق حالتكم تحليلاً خاصاً؟</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">يعد Bosphoras قراءة سرية لملفكم: الإقامة، الدخل الأجنبي، الثروة، الشركة، البنك، التأمين، العقار وخارطة طريق الانتقال إلى تركيا.</p></div><Link href="/ar/تقييم-خاص" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">الأسئلة الشائعة</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale="ar" />
    </>
  );
}
