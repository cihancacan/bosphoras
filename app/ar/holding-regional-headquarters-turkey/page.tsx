import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const url = 'https://bosphoras.com/ar/holding-regional-headquarters-turkey';
const title = 'الهولدينغ والمقر الإقليمي في تركيا | Bosphoras';
const description = 'دليل Bosphoras حول الهولدينغ والمقر الإقليمي في تركيا: الشركة، الفريق، المكتب، البنك، العقود، الإدارة والوجود الحقيقي.';

const points = [
  'تركيا يمكن أن تكون قاعدة إقليمية بين أوروبا والخليج والقوقاز وآسيا الوسطى.',
  'المقر الإقليمي يمكن أن ينسق الإدارة والمالية والموارد البشرية والمبيعات والدعم.',
  'المشروع يجب أن يملك وجوداً حقيقياً: مكتب، فريق، بنك، عقود ومحاسبة.',
  'Bosphoras ينسق التحليل الخاص والشركاء المحليين.'
];

export const metadata: Metadata = { title, description, alternates: { canonical: url, languages: { fr: 'https://bosphoras.com/holding-siege-regional-turquie', en: 'https://bosphoras.com/en/holding-regional-headquarters-turkey', ru: 'https://bosphoras.com/ru/holding-regionalnyy-ofis-turtsiya', ar: url, 'x-default': 'https://bosphoras.com/holding-siege-regional-turquie' } }, openGraph: { title, description, url, siteName: 'Bosphoras', locale: 'ar_AR', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: title }] } };

export default function Page() {
  return (
    <><Header locale="ar" currentPath="/ar/holding-regional-headquarters-turkey" /><main dir="rtl" className="bg-[#f8f1e7] text-[#101827]"><section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1200px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">دليل خاص · Holding Turkey · 5 يونيو 2026</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">الهولدينغ والمقر الإقليمي في تركيا</h1><p className="mt-8 max-w-3xl text-lg leading-9 text-white/80">تركيا يمكن أن تصبح قاعدة لتنسيق عدة أسواق. قبل الإطلاق يجب تحليل هيكل الشركة، الفريق، المكتب، البنك، العقود، الإدارة والوجود الحقيقي.</p><Link href="/ar/تقييم-خاص" className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">طلب تحليل خاص<ArrowRight size={16} /></Link></div></section><section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><Building2 className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">النقاط الأساسية</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{points.map((item) => <article key={item} className="border border-[#d8c7a1] bg-white p-6"><CheckCircle2 className="mb-4 h-5 w-5 text-[#8a6728]" /><p className="leading-7 text-[#3e4857]">{item}</p></article>)}</div></div></section></main><Footer locale="ar" /></>
  );
}
