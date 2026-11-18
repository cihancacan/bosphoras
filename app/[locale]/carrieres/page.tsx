import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CareersPage } from '@/components/careers/CareersPage';
import { careerLanguageNames, type CareerLocale } from '@/lib/careers/copy';
import type { Locale } from '@/lib/i18n';

type Supported='en'|'ru'|'ar';
const allowed:Supported[]=['en','ru','ar'];
const titles:Record<Supported,string>={
  en:'Careers & recruitment | Bosphoras Istanbul',
  ru:'Карьера и вакансии | Bosphoras Стамбул',
  ar:'الوظائف والتوظيف | Bosphoras إسطنبول',
};
export function generateStaticParams(){return allowed.map(locale=>({locale}));}
export function generateMetadata({params}:{params:{locale:string}}):Metadata {
  if(!allowed.includes(params.locale as Supported))return {robots:{index:false,follow:false}};
  const locale=params.locale as Supported;
  return {
    title:titles[locale],
    description:{en:'Bosphoras Istanbul — client relations, property advisory, private concierge and operations. Apply in your preferred language.',ru:'Работа в Bosphoras в Стамбуле: обслуживание клиентов, недвижимость, консьерж-сервис и координация. Подайте заявку онлайн.',ar:'انضم إلى Bosphoras في إسطنبول: علاقات العملاء والعقارات والكونسيرج الخاص والتنسيق. قدم طلبك عبر الإنترنت.'}[locale],
    robots:{index:true,follow:true},
    alternates:{canonical:'https://www.bosphoras.com/'+locale+'/carrieres',languages:{'fr':'/carrieres','en':'/en/carrieres','ru':'/ru/carrieres','ar':'/ar/carrieres','x-default':'/carrieres'}},
  };
}
export default function Page({params,searchParams}:{params:{locale:string};searchParams?:{lang?:string}}){
  if(!allowed.includes(params.locale as Supported))notFound();
  const headerLocale=params.locale as Locale;
  const candidate=searchParams?.lang;
  const language:CareerLocale=candidate && candidate in careerLanguageNames?candidate as CareerLocale:headerLocale;
  return <CareersPage headerLocale={headerLocale} language={language}/>;
}
