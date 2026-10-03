import type { Locale } from '@/lib/i18n';
import { ExternalLink, MapPin } from 'lucide-react';

function copy(locale:Locale){
  if(locale==='fr')return{eyebrow:'Localisation',title:'Situer le bien',note:'La carte utilise la localisation renseignée dans l’annonce. Lorsque l’adresse exacte n’est pas publiée, le repère correspond à la zone indiquée.',open:'Ouvrir dans Google Maps'};
  if(locale==='ru')return{eyebrow:'Локация',title:'Объект на карте',note:'Карта использует локацию из объявления. Если точный адрес не опубликован, показан указанный район.',open:'Открыть в Google Maps'};
  if(locale==='ar')return{eyebrow:'الموقع',title:'موقع العقار على الخريطة',note:'تستخدم الخريطة الموقع المذكور في الإعلان. إذا لم يُنشر العنوان الدقيق، يظهر موقع المنطقة المحددة.',open:'فتح في Google Maps'};
  return{eyebrow:'Location',title:'Property location',note:'The map uses the location stated in the listing. When the exact address is not published, the marker represents the stated area.',open:'Open in Google Maps'};
}

export function PropertyLocationMap({locale,location}:{locale:Locale;location:string}){
  const c=copy(locale);
  const query=encodeURIComponent(location);
  return <section className="mt-14 border-t border-[#cbc5ba] pt-7">
    <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
      <div><p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#5c7f72]">{c.eyebrow}</p><h2 className="mt-2 font-serif text-3xl tracking-[-0.03em] text-[#202724]">{c.title}</h2></div>
      <a href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-[#456d60]">{c.open}<ExternalLink size={13}/></a>
    </div>
    <div className="overflow-hidden border border-[#d5cfc4] bg-[#e5e2db]">
      <iframe
        title={`${c.title} — ${location}`}
        src={`https://www.google.com/maps?q=${query}&z=14&output=embed`}
        className="h-[300px] w-full border-0 sm:h-[380px] lg:h-[430px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
    <div className="mt-3 flex items-start gap-2 text-xs leading-5 text-[#777a75]"><MapPin size={13} className="mt-0.5 shrink-0 text-[#5c7f72]"/><span>{location}. {c.note}</span></div>
  </section>;
}
