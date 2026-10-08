import type {Locale} from '@/lib/i18n';
import {Waves,Dumbbell,Sparkles,Flame,Clapperboard,Flower2,Activity,Baby,Trophy,Footprints,Trees,ShieldCheck,Wind,Bell,CircleDot} from 'lucide-react';
const items=[
 {code:'pool',icon:Waves,fr:'Piscine',en:'Swimming pool',ru:'Бассейн',ar:'مسبح'},
 {code:'gym',icon:Dumbbell,fr:'Salle de sport',en:'Fitness studio',ru:'Фитнес-зал',ar:'صالة رياضية'},
 {code:'spa',icon:Sparkles,fr:'Spa',en:'Spa',ru:'Спа',ar:'سبا'},
 {code:'hammam',icon:Wind,fr:'Hammam',en:'Hammam',ru:'Хаммам',ar:'حمام'},
 {code:'sauna',icon:Wind,fr:'Sauna',en:'Sauna',ru:'Сауна',ar:'ساونا'},
 {code:'bbq',icon:Flame,fr:'Barbecue',en:'Barbecue',ru:'Барбекю',ar:'شواء'},
 {code:'cinema',icon:Clapperboard,fr:'Cinéma',en:'Cinema',ru:'Кинотеатр',ar:'سينما'},
 {code:'yoga',icon:Flower2,fr:'Yoga',en:'Yoga studio',ru:'Йога',ar:'يوغا'},
 {code:'boxing',icon:Activity,fr:'Boxe',en:'Boxing',ru:'Бокс',ar:'ملاكمة'},
 {code:'kids',icon:Baby,fr:'Espace enfants',en:'Kids’ play area',ru:'Детская зона',ar:'منطقة أطفال'},
 {code:'tennis',icon:Trophy,fr:'Tennis',en:'Tennis',ru:'Теннис',ar:'تنس'},
 {code:'basketball',icon:CircleDot,fr:'Basketball',en:'Basketball',ru:'Баскетбол',ar:'كرة السلة'},
 {code:'jogging',icon:Footprints,fr:'Jogging',en:'Jogging tracks',ru:'Беговые дорожки',ar:'مسارات للجري'},
 {code:'garden',icon:Trees,fr:'Jardins',en:'Gardens',ru:'Сады',ar:'حدائق'},
 {code:'concierge',icon:Bell,fr:'Conciergerie',en:'Concierge',ru:'Консьерж',ar:'كونسيرج'},
 {code:'security',icon:ShieldCheck,fr:'Sécurité',en:'Security',ru:'Охрана',ar:'أمن'},
] as const;
export function ProjectAmenityIcons({codes,locale}:{codes:string[];locale:Locale}){
 const unique=[...new Set(codes||[])];
 const data=unique.map(code=>items.find(x=>x.code===code)).filter(Boolean);
 if(!data.length)return null;
 return <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
   {data.map((item:any)=>{
     const Icon=item.icon;
     return <div key={item.code} className="flex items-center gap-3 rounded-xl border border-[#d9dfd8] bg-[#fafbf8] px-3 py-3">
       <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e6ede5] text-[#2d654e]"><Icon size={19} strokeWidth={1.7}/></span>
       <span className="text-xs font-semibold text-[#385247]">{item[locale]||item.fr}</span>
     </div>;
   })}
 </div>;
}
