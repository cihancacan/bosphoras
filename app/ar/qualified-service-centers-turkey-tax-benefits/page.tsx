import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Landmark, ShieldCheck, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ar/qualified-service-centers-turkey-tax-benefits';
const title = 'مراكز الخدمات المؤهلة في تركيا: المزايا الضريبية والشروط والأمثلة | Bosphoras';
const description = 'دليل Bosphoras حول مراكز الخدمات المؤهلة في تركيا بعد القانون رقم 7582 المنشور في Resmî Gazete رقم 33270: Nitelikli hizmet merkezi، المجموعات الدولية، الدخل الأجنبي، وظائف الدعم، الوجود الحقيقي، المكاتب، الموظفون والعقود.';
const updatedAt = '2026-06-05';

const cards = [
  ['التعريف', 'مركز الخدمات المؤهل، Nitelikli hizmet merkezi، هو هيكل تركي لتقديم خدمات إلى شركات مرتبطة خارج تركيا.'],
  ['الملفات المعنية', 'مجموعات دولية، هولدينغ تشغيلي، family offices، استشارات، IT platforms، finance، HR، reporting وcustomer support.'],
  ['الدخل الأجنبي', 'النموذج يعتمد على خدمات مفوترة لكيانات أجنبية مرتبطة، مع توثيق واضح لمصدر الدخل والعلاقة داخل المجموعة.'],
  ['الوجود المحلي الحقيقي', 'يجب إثبات حضور حقيقي: مكاتب، موظفون، عقود، فواتير، حوكمة، بنك، محاسبة وعمليات فعلية.'],
];

const examples = [
  ['مركز مالي إقليمي', 'Reporting، consolidation، controlling، treasury، intra-group invoicing والمتابعة البنكية لعدة دول.'],
  ['دعم قانوني وامتثال', 'فريق في إسطنبول للعقود، compliance، governance، المتابعة التنظيمية والتوثيق الداخلي.'],
  ['IT وdata وback-office hub', 'هيكل تركي يدير IT support، data، process، operations، customer support والتنسيق بين الدول.'],
  ['منصة HR وtalent', 'تركيا يمكن أن تكون قاعدة للتوظيف، التدريب، international mobility، payroll coordination ودعم فرق المجموعة.'],
];

const checks = ['هيكل المجموعة والدول المعنية','الشركات الأجنبية المرتبطة','طبيعة الخدمات المقدمة من تركيا','العقود والفواتير وtransfer pricing','المكاتب والموظفون والحوكمة والمحاسبة','البنك وKYC والتدفقات المالية والأدلة التشغيلية'];

const faqs = [
  ['ما هو مركز الخدمات المؤهل في تركيا؟', 'هو شركة تركية تقدم خدمات مؤهلة لشركات مرتبطة في الخارج، مع نشاط حقيقي وتوثيق قوي ومنطق مجموعة دولية.'],
  ['هل الميزة الضريبية تلقائية؟', 'لا. الأهلية تعتمد على النشاط والدخل والشركات الأجنبية المرتبطة والوجود المحلي الحقيقي والأدلة وقواعد التطبيق.'],
  ['ما الخدمات التي يمكن أن تكون معنية؟', 'Finance، accounting، legal، HR، data، IT، audit، reporting، purchasing، sales، customer support، compliance ووظائف المقر يمكن تحليلها.'],
  ['لماذا هذا مهم للمستثمرين الأجانب؟', 'تركيا تسعى لجذب وظائف إقليمية حقيقية. مركز الخدمات المؤهل يمكن أن يكون بديلاً لدبي أو سنغافورة أو أمستردام أو لندن حسب احتياجات المجموعة.'],
  ['ما هو دور Bosphoras؟', 'ينسق Bosphoras التحليل الخاص مع المحامين والمستشارين الضريبيين والمحاسبين والبنوك والمكاتب والتوظيف والشركاء المحليين. Bosphoras لا يحل محل المهنيين المنظمين.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/centres-services-qualifies-turquie-avantages-fiscaux', en: 'https://bosphoras.com/en/qualified-service-centers-turkey-tax-benefits', ru: 'https://bosphoras.com/ru/kvalifitsirovannye-servisnye-tsentry-turtsiya', ar: url, 'x-default': 'https://bosphoras.com/centres-services-qualifies-turquie-avantages-fiscaux' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ar', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Law 7582', 'Resmî Gazete 33270', 'qualified service center', 'Nitelikli hizmet merkezi', 'Turkey tax benefits', 'foreign investors'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="ar" currentPath="/ar/qualified-service-centers-turkey-tax-benefits" /><main dir="rtl" className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">دليل خاص · ضرائب تركيا 2026 · تم التحديث في 5 يونيو 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">مراكز الخدمات المؤهلة في تركيا: المزايا الضريبية والشروط والأمثلة</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">القانون التركي رقم 7582 المنشور في Resmî Gazete رقم 33270 بتاريخ 4 يونيو 2026 يقدم مفهوم مركز الخدمات المؤهل، Nitelikli hizmet merkezi. بالنسبة للمستثمرين الأجانب والمجموعات الدولية، الموضوع ليس مجرد تأسيس شركة في تركيا، بل بناء منصة خدمات حقيقية وموثقة وعملية مرتبطة بالدخل الأجنبي.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/ar/تقييم-خاص" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link><Link href="/ar/خدمات/استشارات-قانونية-ضريبية" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">عرض الدعم الضريبي</Link></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">لماذا أنشأت تركيا هذا الإطار؟</h2><p className="mt-5 leading-8 text-[#3e4857]">الهدف هو جذب وظائف المقر والدعم التي تخدم الأسواق الأجنبية: finance، reporting، legal، compliance، data، IT، HR، purchasing، sales وcustomer support. يمكن لإسطنبول أن تصبح قاعدة بين أوروبا والخليج وآسيا الوسطى والأسواق الناشئة.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em]">4 نقاط أساسية</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{cards.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1300px]"><h2 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">أمثلة عملية لمراكز الخدمات</h2><p className="mt-6 max-w-4xl text-lg leading-9 text-[#3e4857]">مركز الخدمات المؤهل قد يهم مجموعات تركية أو أوروبية أو شرق أوسطية أو آسيوية تريد تنسيق وظائف إقليمية حقيقية من إسطنبول. يجب التحقق من كل حالة مع مهنيين مؤهلين.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{examples.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-5 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist قبل الهيكلة</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-r-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">النقطة الأساسية هي الوجود الحقيقي. شركة بدون فريق أو مكتب أو عقود حقيقية أو نشاط عملي قابل للدفاع لا يجب تقديمها كمركز خدمات مؤهل.</p></div></div></section>
      <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">الهيكلة قبل التنفيذ</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">ينسق Bosphoras تحليلاً خاصاً مع الجهات المحلية المناسبة: محام، مستشار ضريبي، محاسب، بنك، مكاتب، توظيف وشركاء تشغيليون.</p></div><Link href="/ar/تقييم-خاص" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">الأسئلة الشائعة</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="ar" /></>
  );
}
