import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ar/agribusiness-turkey-investment-tax';
const title = 'الصناعات الغذائية في تركيا: الاستثمار والضرائب والتصدير | Bosphoras';
const description = 'دليل Bosphoras حول الصناعات الغذائية في تركيا: تصنيع غذائي، تغليف، تصدير، القانون رقم 7582، إنتاج، لوجستيك، معايير، جمارك، طاقة ووجود صناعي حقيقي.';
const updatedAt = '2026-06-05';

const points = [
  ['لماذا تركيا؟', 'تركيا تجمع الإنتاج الزراعي، التصنيع الغذائي، التغليف، الموانئ، اللوجستيك، العمالة والوصول إلى أوروبا والخليج وآسيا الوسطى وشمال إفريقيا.'],
  ['الضرائب للتحليل', 'القانون رقم 7582 يعزز اهتمام مشاريع الإنتاج، لكن أي نظام ضريبي يجب فحصه حسب النشاط والدخل والمصنع وقواعد التطبيق.'],
  ['التصدير', 'يمكن أن يستهدف المشروع تركيا، الدول المجاورة، الشرق الأوسط، آسيا الوسطى أو الاتحاد الأوروبي حسب المعايير والتغليف والشهادات.'],
  ['الوجود الصناعي', 'الأرض، المصنع، المعدات، الموظفون، SGK، الطاقة، التخزين، الجودة، العقود والمحاسبة يجب أن تكون حقيقية.'],
];

const checks = ['نوع المنتج والمعايير الصحية','الأرض أو المصنع أو المنطقة الصناعية','المعدات والطاقة والماء والتخزين','الموظفون وSGK والجودة','الجمارك والشهادات والتغليف والتصدير','محام، مستشار ضريبي، محاسب وبنك'];

const faqs = [
  ['لماذا الاستثمار في الصناعات الغذائية في تركيا؟', 'تركيا يمكن أن تكون مناسبة للتصنيع الغذائي، التغليف، التصدير والتوزيع الإقليمي إذا كان المشروع منظماً بشكل صحيح.'],
  ['هل المزايا الضريبية تلقائية؟', 'لا. يجب تحليل النشاط الحقيقي والدخل والمصنع والمحاسبة وقواعد التطبيق.'],
  ['ما المشاريع التي يمكن دراستها؟', 'التصنيع الغذائي، التغليف، المنتجات الجافة، سلسلة التبريد، التخزين، private label، التصدير والتوزيع.'],
  ['ما هو دور Bosphoras؟', 'ينسق Bosphoras المتخصصين والشركاء المحليين: محام، مستشار ضريبي، محاسب، بنك، منطقة صناعية، تأمين، نقل وطاقة.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/agro-industrie-turquie-investissement-fiscalite', en: 'https://bosphoras.com/en/agribusiness-turkey-investment-tax', ru: 'https://bosphoras.com/ru/agropromyshlennost-turtsiya-investitsii-nalogi', ar: url, 'x-default': 'https://bosphoras.com/agro-industrie-turquie-investissement-fiscalite' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ar', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey agribusiness', 'food industry Turkey', 'Law 7582'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="ar" currentPath="/ar/agribusiness-turkey-investment-tax" /><main dir="rtl" className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">دليل خاص · الصناعات الغذائية في تركيا · تم التحديث في 5 يونيو 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">الصناعات الغذائية في تركيا: الاستثمار والضرائب والتصدير</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">قطاع الصناعات الغذائية في تركيا قد يكون مناسباً للمستثمرين الأجانب: تصنيع غذائي، تغليف، سلسلة تبريد، تخزين، تصدير وتوزيع إقليمي. يجب فحص الضرائب، الإنتاج الحقيقي، المعايير، الطاقة، الجمارك، SGK، البنوك والوجود الصناعي.</p><Link href="/ar/تقييم-خاص" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">4 نقاط أساسية</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist قبل الاستثمار</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-r-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">الضرائب يجب أن تتبع نشاطاً حقيقياً. المصنع أو خط الإنتاج أو المركز اللوجستي يجب أن يكون موثقاً قبل أي توقع ضريبي.</p></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">الأسئلة الشائعة</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="ar" /></>
  );
}
