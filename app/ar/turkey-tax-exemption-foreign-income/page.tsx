import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ar/turkey-tax-exemption-foreign-income';
const title = 'الإعفاء الضريبي في تركيا على الدخل الأجنبي | Bosphoras';
const description = 'تستعد تركيا لإعفاء محتمل لمدة 20 سنة على بعض الدخل الأجنبي. تحليل خاص للمستثمرين ورواد الأعمال والعائلات والمقيمين الدوليين.';

const measures = [
  { title: 'المقيمون الدوليون الجدد', text: 'ينص المشروع على إعفاء محتمل لمدة تصل إلى 20 سنة لبعض الأرباح والدخل المحقق خارج تركيا للأشخاص الذين يصبحون مقيمين في تركيا، بشرط عدم وجود إقامة أو التزام ضريبي في تركيا خلال السنوات التقويمية الثلاث السابقة.' },
  { title: 'التخطيط للثروة والميراث', text: 'خلال فترة الإعفاء، قد تخضع بعض انتقالات الميراث المرتبطة بالنظام لضريبة بنسبة 1%، ما يجعل الموضوع مهماً للعائلات الثرية وعملاء البنوك الخاصة.' },
  { title: 'مراكز الخدمات المؤهلة', text: 'تسعى تركيا لجذب المقرات الإقليمية ومراكز الخدمات في الإدارة، المالية، القانون، الموارد البشرية، البيانات، التكنولوجيا، الامتثال، الدعم الدولي وتنسيق المجموعات.' },
  { title: 'دخل الشركات من الخارج', text: 'قد تستفيد مراكز الخدمات المؤهلة وبعض عمليات التجارة الدولية من تخفيض بنسبة 95%، وقد يصل إلى 100% في بعض حالات Istanbul Finance Center.' },
  { title: 'إعادة الأصول إلى تركيا', text: 'يتضمن المشروع آلية للتصريح وتحويل الأصول الأجنبية إلى تركيا حتى 31 يوليو 2027، مع ضريبة مخفضة وقد تصل إلى 0% بحسب مدة الاحتفاظ.' },
  { title: 'Istanbul Finance Center', text: 'يعزز النص جاذبية Istanbul Finance Center، مع تمديد بعض المزايا حتى عام 2047 وحوافز إضافية للمهنيين الدوليين ذوي الخبرة.' },
];

const profiles = ['رواد الأعمال الدوليون ذوو الدخل الأجنبي أو الأرباح أو المكاسب الرأسمالية', 'المستثمرون وأصحاب الثروات والعائلات الثرية وعملاء البنوك الخاصة', 'المستشارون والمديرون التنفيذيون والمغتربون والملفات الدولية المتنقلة', 'المكاتب العائلية التي تقارن إسطنبول بدبي أو لشبونة أو موناكو أو لندن', 'المجموعات الدولية التي تبحث عن مركز إقليمي للإدارة أو الدعم', 'شركات التجارة العابرة، التجارة الدولية، خدمات B2B والعمليات الخلفية'];

const models = [
  { title: 'قاعدة خاصة للمستثمر', text: 'يقوم العميل بتنظيم الإقامة، البنك، التأمين، السكن، العائلة والتحليل الضريبي قبل نقل جزء من حياته الخاصة أو ثروته إلى تركيا.' },
  { title: 'Family office في تركيا', text: 'تؤسس العائلة الدولية نقطة تنسيق في إسطنبول للثروة، العقار، الصحة، التأمين، الضرائب، السفر والعلاقات الخاصة.' },
  { title: 'مركز خدمات إقليمي', text: 'تنشئ مجموعة دولية شركة خدمات في تركيا للمالية، التقارير، الاستشارات، القانون، الموارد البشرية، البيانات، التكنولوجيا، التنسيق التجاري أو الدعم العالمي.' },
  { title: 'التجارة العابرة والتجارة الدولية', text: 'تنظم شركة في تركيا عمليات شراء وبيع بين دول ثالثة، مع تحليل دقيق لشروط التخفيض الضريبي.' },
  { title: 'المواهب والمديرون الدوليون', text: 'قد تجذب تركيا المديرين والمهنيين في المالية والقانون والتكنولوجيا والتجارة عبر إطار أكثر تنافسية للإقامة والعمل والمكافآت.' },
  { title: 'رأس مال مصرح وآمن', text: 'يمكن لعميل يملك عملات أو ذهباً أو أوراقاً مالية أو أدوات مالية في الخارج تحليل استراتيجية التصريح والتحويل والاحتفاظ والامتثال البنكي في تركيا.' },
];

const faqs = [
  { q: 'من يمكن أن يستفيد من الإعفاء لمدة 20 سنة؟', a: 'قد يشمل الأشخاص الذين يصبحون مقيمين في تركيا ولم تكن لديهم إقامة أو مسؤولية ضريبية في تركيا خلال السنوات التقويمية الثلاث السابقة. يجب التحقق من الأهلية بعد الاعتماد النهائي مع مستشار ضريبي مؤهل.' },
  { q: 'هل كل الدخل معفى؟', a: 'لا. يستهدف المشروع بعض الدخل والأرباح المحققة خارج تركيا. يجب تحليل الدخل التركي، الالتزامات التصريحية، الأدلة والاستثناءات حالة بحالة.' },
  { q: 'لماذا يهم هذا العائلات الثرية؟', a: 'لأن النظام قد يجمع بين الإقامة، الدخل الأجنبي، التخطيط للثروة، جانب ميراث بنسبة 1% في بعض الحالات، البنوك، التأمين، الصحة الخاصة والعقار.' },
  { q: 'لماذا يهم هذا الشركات؟', a: 'ينشئ النص أيضاً إطاراً لمراكز الخدمات المؤهلة وبعض الأنشطة الدولية، مع تخفيضات ضريبية كبيرة إذا تم استيفاء شروط الدخل الأجنبي والتحويل والنشاط.' },
  { q: 'هل يقدم Bosphoras استشارة ضريبية؟', a: 'لا. يقوم Bosphoras بتنظيم التحليل الخاص، تحضير الأسئلة الصحيحة، تصفية المخاطر وتنسيق المهنيين: محامٍ ضريبي، بنك، محاسب، تأمين، عقار وانتقال.' },
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
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ar', datePublished: '2026-05-07', dateModified: '2026-05-07', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }]} />
      <Header locale="ar" currentPath="/ar/turkey-tax-exemption-foreign-income" />
      <main dir="rtl" className="bg-[#f8f1e7] text-[#101827]">
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#121826_0%,#1c2940_48%,#0b1020_100%)] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">ضرائب تركيا · مشروع 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">الإعفاء الضريبي في تركيا على الدخل الأجنبي: من يمكن أن يستفيد من الإطار الجديد؟</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">تستعد تركيا لحزمة ضريبية تهدف إلى جذب المستثمرين ورواد الأعمال والعائلات الدولية ورؤوس الأموال الأجنبية والمراكز الإقليمية والمواهب المؤهلة. الموضوع لا يتعلق فقط بالإقامة: بل يشمل الدخل الأجنبي، الميراث، مراكز الخدمات، التجارة العابرة، Istanbul Finance Center وإعادة الأصول.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/ar/تقييم-خاص" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link><Link href="/ar/خدمات/استشارات-قانونية-ضريبية" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">عرض الدعم الضريبي</Link></div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">الرسالة الاستراتيجية</h2><p className="mt-5 leading-8 text-[#3e4857]">تريد تركيا أن تصبح قاعدة تنافسية بين أوروبا والخليج وآسيا الوسطى للمقيمين الدوليين، رؤوس الأموال، الهياكل التشغيلية، مراكز الخدمات والعائلات الثرية.</p></aside><div><h2 className="font-serif text-4xl text-[#121826]">ما الذي تستعد له تركيا</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{measures.map((m) => <article key={m.title} className="border border-[#d8c7a1] bg-white p-6"><Sparkles className="mb-5 h-5 w-5 text-[#8a6728]" /><h3 className="font-serif text-2xl">{m.title}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{m.text}</p></article>)}</div></div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">الفئات المستهدفة</p><h2 className="mt-4 max-w-4xl font-serif text-4xl md:text-6xl">الفئات التي يجب استهدافها الآن</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{profiles.map((p) => <div key={p} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="text-base leading-7 text-[#3e4857]">{p}</p></div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">نماذج الأعمال</p><h2 className="mt-4 max-w-5xl font-serif text-4xl md:text-6xl">كيف تتحول الأخبار الضريبية إلى مشروع حقيقي</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{models.map((m) => <article key={m.title} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-6 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl">{m.title}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{m.text}</p></article>)}</div></div></section>
        <section className="px-5 pb-16 md:px-8 md:pb-24"><div className="mx-auto max-w-[1000px]"><div className="border-r-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl">تنبيه مهم</h2><p className="mt-5 text-lg leading-9 text-[#3e4857]">هذه الصفحة لا تشكل استشارة ضريبية. التدابير مبنية على مشروع إصلاح ويجب تأكيدها بعد الاعتماد النهائي والنشر الرسمي والتحليل الشخصي من قبل مختصين مؤهلين في تركيا وبلد إقامة العميل.</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl md:text-6xl">هل يمكن لعميلكم الاستفادة من الإطار الضريبي التركي الجديد؟</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">يعد Bosphoras تحليلاً خاصاً: الملف الضريبي، الإقامة، الدخل الأجنبي، الثروة، الشركة، البنك، التأمين، العقار وخارطة طريق الانتقال.</p></div><Link href="/ar/تقييم-خاص" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl">الأسئلة الشائعة</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map((f) => <article key={f.q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl">{f.q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{f.a}</p></article>)}</div></div></section>
      </main><Footer locale="ar" />
    </>
  );
}
