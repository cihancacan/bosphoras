import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2, Factory, ShieldCheck, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ar/turkey-manufacturing-corporate-tax-12-5';
const title = 'الصناعة في تركيا: ضريبة شركات 12.5%، التصنيع والاستثمار | Bosphoras';
const description = 'دليل Bosphoras حول الصناعة والاستثمار الصناعي في تركيا بعد القانون رقم 7582: ضريبة شركات 12.5% للتحليل على بعض دخل الإنتاج، مصنع، تصدير، مناطق صناعية منظمة، شركة، تصاريح، ضرائب، SGK، طاقة، لوجستيك ووجود حقيقي.';
const updatedAt = '2026-06-05';

const cards = [
  ['إطار 12.5% للتحليل', 'الإصلاح الضريبي 2026 يزيد اهتمام بعض المصنعين بتركيا. يجب التحقق من المعدل حسب النشاط والدخل وقواعد التطبيق.'],
  ['تصنيع حقيقي', 'لا يجب تقديم الميزة كأمر تلقائي: يجب إثبات إنتاج حقيقي، مصنع، معدات، موظفين، محاسبة ووجود صناعي فعلي.'],
  ['التصدير والأسواق الإقليمية', 'تركيا يمكن أن تكون قاعدة صناعية بين أوروبا والخليج وآسيا الوسطى وشمال إفريقيا والأسواق الناشئة.'],
  ['مشروع كامل', 'الملف الصناعي يشمل الشركة، الأرض، المنطقة الصناعية، التصاريح، الطاقة، الجمارك، SGK، الضرائب، البنك، التأمين واللوجستيك.'],
];

const examples = [
  ['مصنع نسيج أو ملابس', 'إنتاج، تعهيد، تصدير، مراقبة جودة، لوجستيك، شهادات، عمالة وتكاليف طاقة.'],
  ['Agro-industry وpackaging', 'تصنيع غذائي، تغليف، تخزين، cold chain، معايير، تصدير وتوزيع إقليمي.'],
  ['آلات وقطع ومواد', 'تصنيع مكونات، assembly، maintenance، عقود B2B، جمارك، نقل وشهادات.'],
  ['قاعدة صناعية للمستثمرين الأجانب', 'تأسيس شركة، أرض، منطقة صناعية، توظيف، بنوك، تصاريح، ضرائب وإدارة تشغيلية.'],
];

const checks = ['نشاط صناعي حقيقي داخل تركيا','نوع الدخل الذي قد يدخل في المعدل المخفض','منطقة صناعية أو أرض أو إيجار أو مصنع','معدات، موظفون، SGK، طاقة وتأمين','محاسبة، فواتير، جمارك وتصدير','محام، مستشار ضريبي، محاسب، بنك وتصاريح'];

const faqs = [
  ['هل معدل 12.5% تلقائي لكل المصنعين؟', 'لا. يجب فحص النشاط ونوع الدخل والإنتاج الحقيقي والشركة والمحاسبة وقواعد التطبيق والشروط الدقيقة للنظام.'],
  ['ما القطاعات التي يمكن تحليلها؟', 'النسيج، الصناعات الغذائية، التغليف، المواد، الآلات، قطع الغيار، التحويل، assembly، المعدات والإنتاج التصديري يمكن تحليلها حسب الملف.'],
  ['لماذا تركيا مهمة للتصنيع؟', 'تركيا تجمع الجغرافيا والعمالة وشبكة الموردين واللوجستيك والجمارك والمناطق الصناعية والتصدير والقرب من أسواق إقليمية متعددة.'],
  ['ما هو دور Bosphoras؟', 'ينسق Bosphoras الجهات المحلية: محام، مستشار ضريبي، محاسب، بنك، منطقة صناعية، عقار، توظيف، تأمين، نقل وشركاء تشغيليون.'],
  ['ما المخاطر التي يجب فحصها قبل الاستثمار؟', 'التصاريح، الأرض، الطاقة، compliance، البيئة، SGK، الجمارك، الضرائب، عقود الموردين، الجودة، التمويل، التأمين والحوكمة المحلية.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/industrie-fabrication-turquie-impot-societe-12-5', en: 'https://bosphoras.com/en/turkey-manufacturing-corporate-tax-12-5', ru: 'https://bosphoras.com/ru/proizvodstvo-turtsiya-nalog-na-pribyl-12-5', ar: url, 'x-default': 'https://bosphoras.com/industrie-fabrication-turquie-impot-societe-12-5' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ar', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey manufacturing', 'corporate tax 12.5%', 'Law 7582', 'industry in Turkey', 'foreign investors', 'industrial investment'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="ar" currentPath="/ar/turkey-manufacturing-corporate-tax-12-5" /><main dir="rtl" className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">دليل خاص · صناعة تركيا 2026 · تم التحديث في 5 يونيو 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">الصناعة في تركيا: ضريبة 12.5%، التصنيع والاستثمار</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">تركيا تعزز جاذبيتها الصناعية بإطار ضريبي يجب تحليله لبعض دخل الإنتاج. بالنسبة للمستثمر الأجنبي، الموضوع لا يقتصر على معدل 12.5%: يجب فحص التصنيع الحقيقي، الوجود الفعلي، التصاريح، المنطقة الصناعية، الموظفين، الطاقة، الجمارك، المحاسبة وقواعد التطبيق.</p><div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/ar/تقييم-خاص" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link><Link href="/ar/خدمات/استشارات-قانونية-ضريبية" className="inline-flex items-center justify-center border border-[#d2a863]/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#d2a863]">عرض الدعم الضريبي</Link></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[0.85fr_1.15fr]"><aside className="border border-[#d8c7a1] bg-[#fffaf0] p-8"><Factory className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">لماذا تجذب تركيا المصنعين؟</h2><p className="mt-5 leading-8 text-[#3e4857]">تركيا تجمع العمالة والخبرة الصناعية والمناطق الصناعية المنظمة وشبكات الموردين والموانئ والطرق والجمارك والقرب من أوروبا والوصول إلى أسواق الخليج وآسيا الوسطى وشمال إفريقيا.</p></aside><div><h2 className="font-serif text-4xl tracking-[-0.03em]">4 نقاط أساسية</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{cards.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1300px]"><h2 className="font-serif text-4xl tracking-[-0.035em] md:text-6xl">أمثلة عملية لمشاريع صناعية</h2><p className="mt-6 max-w-4xl text-lg leading-9 text-[#3e4857]">كل صناعة لها قيودها: أرض، طاقة، تراخيص، تخزين، جودة، جمارك، معايير وموارد بشرية. يجب أن يسبق التشخيص أي التزام مالي.</p><div className="mt-10 grid gap-5 md:grid-cols-2">{examples.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-7"><Building2 className="mb-5 h-6 w-6 text-[#8a6728]" /><h3 className="font-serif text-2xl text-[#121826]">{t}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist قبل الاستثمار في مصنع</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div><div className="mt-8 border-r-4 border-[#8a6728] bg-white p-8"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><p className="mt-5 text-lg leading-9 text-[#3e4857]">المعدل المخفض له قيمة فقط إذا كان المشروع الصناعي حقيقياً وموثقاً ومتوافقاً وقابلاً للإدارة. الضرائب يجب أن تتبع العملية وليس العكس.</p></div></div></section>
      <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center"><div><Users className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.035em] md:text-6xl">هيكلة الاستثمار قبل الشراء</h2><p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">ينسق Bosphoras تحليلاً خاصاً للمشروع الصناعي: الشركة، الضرائب، البنك، الأرض، المنطقة الصناعية، التصاريح، التأمين، الطاقة، التوظيف، النقل والشركاء المحليون.</p></div><Link href="/ar/تقييم-خاص" className="inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">الأسئلة الشائعة</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="ar" /></>
  );
}
