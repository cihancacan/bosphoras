import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Ship } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ar/import-export-turkey-transit-trade';
const title = 'الاستيراد والتصدير في تركيا: التجارة العابرة والتجارة الدولية | Bosphoras';
const description = 'دليل Bosphoras حول الاستيراد والتصدير في تركيا: transit trade، شركة تركية، تجارة دولية، موردون، عملاء، جمارك، لوجستيك، بنك، مدفوعات، ضرائب ووجود حقيقي.';
const updatedAt = '2026-06-05';

const points = [
  ['لماذا تركيا؟', 'تركيا تربط أوروبا والخليج والقوقاز وشمال إفريقيا وآسيا الوسطى عبر الموانئ والطرق والموردين والإنتاج والشبكة التجارية الإقليمية.'],
  ['Transit trade', 'يمكن دراسة شركة تركية لتنسيق الشراء والبيع والفوترة والنقل والوثائق بين عدة دول.'],
  ['الوثائق والبنك', 'العقود والفواتير والعملات والتأمين والنقل والجمارك ومصدر الأموال والمدفوعات يجب أن تكون متوافقة.'],
  ['الوجود التجاري', 'المكاتب، الفريق، الموردون، العملاء، العقود، المحاسبة وإثبات النشاط الحقيقي عناصر أساسية.'],
];

const checks = ['المنتجات والموردون والعملاء','العقود والفواتير وincoterms والتأمين','البنك والمدفوعات والعملات ومصدر الأموال','النقل والجمارك والشهادات والوثائق','الشركة والمكاتب والفريق والمحاسبة','الضرائب وTVA والهوامش والتصريحات'];

const faqs = [
  ['لماذا إنشاء شركة استيراد وتصدير في تركيا؟', 'تركيا يمكن أن تكون منصة تجارية إقليمية بفضل موقعها ومورديها ولوجستيكها والوصول إلى عدة أسواق.'],
  ['هل transit trade تلقائي؟', 'لا. يجب هيكلة العقود والوثائق والتدفقات البنكية والنقل والضرائب والوجود الحقيقي حسب كل ملف.'],
  ['ما القطاعات المعنية؟', 'النسيج، الغذاء، المواد، الآلات، القطع الصناعية، البناء، التجميل، التغليف والسلع الاستهلاكية.'],
  ['ما هو دور Bosphoras؟', 'ينسق Bosphoras التحليل مع محام ومستشار ضريبي ومحاسب وبنك ووكلاء شحن وتأمين وشركاء محليين.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/import-export-turquie-transit-trade', en: 'https://bosphoras.com/en/import-export-turkey-transit-trade', ru: 'https://bosphoras.com/ru/import-export-turtsiya-tranzitnaya-torgovlya', ar: url, 'x-default': 'https://bosphoras.com/import-export-turquie-transit-trade' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ar', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['Turkey import export', 'transit trade Turkey', 'international commerce'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="ar" currentPath="/ar/import-export-turkey-transit-trade" /><main dir="rtl" className="bg-[#f8f1e7] text-[#101827]"><section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">دليل خاص · Import-export Turquie · 5 يونيو 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">الاستيراد والتصدير في تركيا: التجارة العابرة والتجارة الدولية</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">تركيا يمكن أن تصبح قاعدة تجارية للشراء والبيع والفوترة والتخزين أو تنسيق التدفقات بين عدة دول. يجب تنظيم الشركة والبنك والعقود والجمارك واللوجستيك والضرائب والوجود الحقيقي.</p><Link href="/ar/تقييم-خاص" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link></div></section><section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Ship className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">4 نقاط أساسية</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section><section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist قبل الإطلاق</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div></div></section><section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">الأسئلة الشائعة</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section></main><Footer locale="ar" /></>
  );
}
