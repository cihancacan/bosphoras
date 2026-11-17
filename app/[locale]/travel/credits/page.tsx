import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {TravelPhotoCredits} from '@/components/travel/TravelPhotoCredits';
import {Header,Footer} from '@/components/travel/TravelPages';
const copy={ru:{title:'Авторы и источники фотографий',description:'Авторы, источники и лицензии фотографий в путеводителях Bosphoras Luxury Stays.'},ar:{title:'حقوق الصور ومصادرها',description:'المصورون ومصادر الصور وتراخيصها في أدلة بوسفوراس للسفر.'}} as const;
function localeOf(locale:string){if(locale!=='ru'&&locale!=='ar')notFound();return locale;}
export function generateMetadata({params}:{params:{locale:string}}):Metadata{const locale=localeOf(params.locale);return {title:copy[locale].title+' | Bosphoras Luxury Stays',description:copy[locale].description,robots:{index:false,follow:true}};}
export default function Page({params}:{params:{locale:string}}){const locale=localeOf(params.locale);return <div lang={locale} dir={locale==='ar'?'rtl':'ltr'}><Header locale={locale} slug="credits" limitedLocales/><TravelPhotoCredits locale={locale}/><Footer locale={locale}/></div>;}
