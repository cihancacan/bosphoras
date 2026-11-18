import {investmentVentures,type InvestmentVentureCode} from '@/data/investmentVentures';
export const investmentSeoLocales=['fr','en','ru','ar'] as const;
export type InvestmentSeoLocale=typeof investmentSeoLocales[number];
export type InvestmentSeoCopy={title:string;description:string};
const sectors:Record<InvestmentVentureCode,[string,string,string,string]>={
 aqma:['Rénovation et bâtiment en France','Construction and renovation in France','Строительство и ремонт во Франции','البناء والتجديد في فرنسا'],
 cliniqeo:['Tourisme médical en Turquie','Medical travel in Türkiye','Медицинский туризм в Турции','السياحة الطبية في تركيا'],
 medsestra:['Soins à domicile au Kazakhstan','Home healthcare in Kazakhstan','Медицинская помощь на дому в Казахстане','الرعاية الصحية المنزلية في كازاخستان'],
 lovelockparis:['Tourisme et expériences numériques','Travel and digital experiences','Туризм и цифровые технологии','السياحة والتجارب الرقمية'],
 qenerzy:['Projet solaire de 30 MW au Kazakhstan','Proposed 30 MW solar project in Kazakhstan','Проект солнечной станции 30 МВт в Казахстане','مشروع طاقة شمسية بقدرة 30 ميغاواط في كازاخستان'],
 'bosphoras-luxury-stays':['Hôtellerie de luxe et travel tech','Luxury stays and travel technology','Отели высокого класса и туристические технологии','الفنادق الفاخرة وتقنيات السفر']
};
export function automaticInvestmentSeo(code:InvestmentVentureCode,locale:InvestmentSeoLocale):InvestmentSeoCopy{
 const name=investmentVentures.find(v=>v.code===code)?.name||code;
 const focus=sectors[code][investmentSeoLocales.indexOf(locale)];
 const copy={
 fr:{title:name+' : '+focus+' | Investissement',description:'Découvrez le projet '+name+' : '+focus+'. Explorez son modèle économique, ses conditions indicatives et les risques. Demande sans engagement.'},
 en:{title:name+': '+focus+' | Investment',description:'Explore '+name+': '+focus+'. Discover the business model, indicative financing and risks. Send a non-binding enquiry.'},
 ru:{title:name+': '+focus+' | Инвестиции',description:'Узнайте о проекте '+name+': '+focus+'. Бизнес-модель, предварительные условия финансирования и риски. Заявка без обязательств.'},
 ar:{title:name+' | '+focus+' | الاستثمار',description:'اكتشف مشروع '+name+': '+focus+'. تعرّف على نموذج العمل وشروط التمويل الأولية والمخاطر. طلب غير ملزم.'}
 }[locale];
 const shorten=(s:string,n:number)=>s.length<=n?s:s.slice(0,n-1).replace(/\s+\S*$/u,'').trim()+'…';
 return {title:shorten(copy.title,80),description:shorten(copy.description,160)};
}
