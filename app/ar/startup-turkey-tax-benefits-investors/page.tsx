import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Rocket } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';

const url = 'https://bosphoras.com/ar/startup-turkey-tax-benefits-investors';
const title = 'الشركات الناشئة في تركيا: الضرائب والمستثمرون | Bosphoras';
const description = 'دليل Bosphoras للشركات الناشئة في تركيا: الضرائب، المستثمرون الأجانب، technopark، R&D، الشركة، البنك، التمويل، الفريق، IP، العقود والوجود الحقيقي.';
const updatedAt = '2026-06-05';

const points = [
  ['لماذا تركيا؟', 'تركيا يمكن أن تكون قاعدة إقليمية للشركات الناشئة بفضل المواهب، التكاليف، السوق المحلي، إسطنبول والربط بين أوروبا والخليج وآسيا الوسطى.'],
  ['الضرائب', 'R&D، technopark، تصدير الخدمات أو الدخل الأجنبي يجب تحليلها حسب النشاط والهيكل والوجود الحقيقي وقواعد التطبيق.'],
  ['الفريق والمستثمرون', 'يجب توضيح cap table، المؤسسين، الفريق، العقود، البنك، KYC، IP، المحاسبة والحوكمة قبل أي تمويل.'],
  ['دور Bosphoras', 'ينسق Bosphoras التحليل الخاص مع محام ومستشار ضريبي ومحاسب وبنك ومكاتب وشركاء محليين.'],
];

const checks = ['هيكل الشركة وcap table','المؤسسون والموظفون','IP، software، contracts وlicenses','البنك وKYC ومصدر الأموال','R&D، technopark وتصدير الخدمات','محام، مستشار ضريبي ومحاسب'];

const faqs = [
  ['هل تركيا مناسبة للشركات الناشئة؟', 'نعم لبعض ملفات tech، SaaS، الخدمات الرقمية، fintech، e-commerce أو تصدير الخدمات، بشرط دراسة الهيكل قبل الإطلاق.'],
  ['هل المزايا الضريبية تلقائية؟', 'لا. تعتمد على النشاط والموقع ووضع R&D أو technopark المحتمل والفوترة والوجود الحقيقي.'],
  ['ما الذي يجب ترتيبه قبل التمويل؟', 'cap table، IP، العقود، البنك، المحاسبة، الضرائب والحوكمة.'],
  ['ما هو دور Bosphoras؟', 'Bosphoras ينسق ولا يحل محل المهنيين المنظمين.'],
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/startup-turquie-avantages-fiscaux-investisseurs', en: 'https://bosphoras.com/en/startup-turkey-tax-benefits-investors', ru: 'https://bosphoras.com/ru/startup-turtsiya-nalogovye-lgoty-investory', ar: url, 'x-default': 'https://bosphoras.com/startup-turquie-avantages-fiscaux-investisseurs' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] }, twitter: { card: 'summary_large_image', title, description, images: ['/images/og-default.jpg'] } };

export default function Page() {
  return (
    <><StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: title, description, inLanguage: 'ar', datePublished: '2026-05-07', dateModified: updatedAt, author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: url, about: ['startup Turkey', 'tax benefits Turkey', 'foreign investors', 'technopark'] }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} /><Header locale="ar" currentPath="/ar/startup-turkey-tax-benefits-investors" /><main dir="rtl" className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">دليل خاص · الشركات الناشئة في تركيا · تم التحديث في 5 يونيو 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">الشركات الناشئة في تركيا: الضرائب والمستثمرون</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">تركيا يمكن أن تكون قاعدة إطلاق أو تطوير لبعض الشركات الناشئة. يجب دراسة الشركة، البنك، الفريق، العقود، الملكية الفكرية، الضرائب والوجود الحقيقي قبل وعد أي ميزة أو جذب المستثمرين.</p><Link href="/ar/تقييم-خاص" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Rocket className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">4 نقاط أساسية</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map(([t, d]) => <article key={t} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl">{t}</h3><p className="mt-4 leading-7 text-[#3e4857]">{d}</p></article>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">Checklist قبل التأسيس أو التمويل</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{checks.map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1000px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">الأسئلة الشائعة</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{faqs.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main><Footer locale="ar" /></>
  );
}
