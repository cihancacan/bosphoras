import type { Locale } from '@/lib/i18n';
import { ExternalLink, MapPin } from 'lucide-react';

function copy(locale:Locale){
  if(locale==='fr')return{eyebrow:'Localisation',title:'Situer le bien',note:'La carte utilise la localisation renseignée dans l’annonce. Lorsque l’adresse exacte n’est pas publiée, le repère correspond à la zone indiquée.',open:'Ouvrir dans Google Maps'};
  if(locale==='ru')return{eyebrow:'Локация',title:'Объект на карте',note:'Карта использует локацию из объявления. Если точный адрес не опубликован, показан указанный район.',open:'Открыть в Google Maps'};
  if(locale==='ar')return{eyebrow:'الموقع',title:'موقع العقار على الخريطة',note:'تستخدم الخريطة الموقع المذكور في الإعلان. إذا لم يُنشر العنوان الدقيق، يظهر موقع المنطقة المحددة.',open:'فتح في Google Maps'};
  return{eyebrow:'Location',title:'Property location',note:'The map uses the location stated in the listing. When the exact address is not published, the marker represents the stated area.',open:'Open in Google Maps'};
}

export function PropertyLocationMap({locale,location,latitude,longitude,compact=false}:{locale:Locale;location:string;latitude?:number;longitude?:number;compact?:boolean}){
  const c=copy(locale);
  const precise=typeof latitude==='number'&&Number.isFinite(latitude)&&latitude>=-90&&latitude<=90
    &&typeof longitude==='number'&&Number.isFinite(longitude)&&longitude>=-180&&longitude<=180;
  const query=encodeURIComponent(precise?latitude+','+longitude:location);
  return <section className={compact?'border border-[#d5cfc4] bg-[#fbfaf6] p-3 sm:p-4':'mt-14 border-t border-[#cbc5ba] pt-7'}>
    <div className={compact?'mb-3 flex flex-wrap items-end justify-between gap-4':'mb-5 flex flex-wrap items-end justify-between gap-4'}>
      <div><p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#5c7f72]">{c.eyebrow}</p><h2 className="mt-2 font-serif text-3xl tracking-[-0.03em] text-[#202724]">{c.title}</h2></div>
      <a href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-[#456d60]">{c.open}<ExternalLink size={13}/></a>
    </div>
    <div className="overflow-hidden border border-[#d5cfc4] bg-[#e5e2db]">
      <iframe
        title={`${c.title} — ${location}`}
        src={`https://www.google.com/maps?q=${query}&z=14&output=embed`}
        className={compact?'h-[230px] w-full border-0 sm:h-[280px] lg:h-[300px]':'h-[300px] w-full border-0 sm:h-[380px] lg:h-[430px]'}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
    <div className="mt-3 flex items-start gap-2 text-xs leading-5 text-[#777a75]"><MapPin size={13} className="mt-0.5 shrink-0 text-[#5c7f72]"/><span>{location}. {precise?(locale==='fr'?'Repère de coordonnées renseignées et vérifiées par Bosphoras.':locale==='en'?'Coordinate marker entered and verified by Bosphoras.':locale==='ru'?'Точка координат, подтверждённая Bosphoras.':'إحداثيات تم التحقق منها بواسطة Bosphoras.'):c.note}</span></div>
  </section>;
}
