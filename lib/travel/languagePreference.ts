import { isTravelLocale, type TravelLocale } from '@/lib/travel/i18n';

export const travelLanguageCookie = 'bosphoras_travel_language';

/** Automatic negotiation is limited to neutral Travel entry routes, never SEO guide URLs. */
export function preferredTravelLanguage(header:string|null, saved?:string):TravelLocale{
 if(saved&&isTravelLocale(saved)) return saved;
 const preferences=(header||'').split(',').map((item,index)=>{
  const [tag,...options]=item.toLowerCase().trim().split(';');
  const qualityParam=options.find(option=>option.trim().startsWith('q='));
  const quality=qualityParam?Number(qualityParam.trim().slice(2)):1;
  return {language:tag.split('-')[0],quality,index};
 }).filter(item=>Number.isFinite(item.quality)&&item.quality>0&&item.quality<=1)
   .sort((a,b)=>b.quality-a.quality||a.index-b.index);
 for(const item of preferences){if(isTravelLocale(item.language))return item.language;}
 return 'fr';
}
export function rememberTravelLanguage(locale:TravelLocale){
 try{document.cookie=travelLanguageCookie+'='+locale+'; Path=/; Max-Age=31536000; SameSite=Lax'+(window.location.protocol==='https:'?'; Secure':'');}
 catch{/* Cookie blocking must not prevent explicit language navigation. */}
}
