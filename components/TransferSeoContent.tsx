import { CheckCircle2 } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

const intro: Record<Locale, string[]> = {
  fr: ['Transfert aéroport Istanbul IST vers hôtel, résidence, marina, restaurant ou rendez-vous d’affaires.', 'Transfert Sabiha Gökçen SAW vers centre-ville, rive européenne, rive asiatique, Bosphore ou villa privée.', 'Chauffeur privé à Istanbul à l’heure pour shopping, réunions, visites privées, soirée, mariage ou événement.', 'Mercedes Classe E, Classe S, Viano VIP et Sprinter VIP selon nombre de passagers et bagages.'],
  en: ['Istanbul Airport IST transfer to hotel, residence, marina, restaurant or business appointment.', 'Sabiha Gökçen SAW transfer to city center, European side, Asian side, Bosphorus or private villa.', 'Private chauffeur in Istanbul by the hour for shopping, meetings, private visits, evening, wedding or event.', 'Mercedes E-Class, S-Class, Viano VIP and Sprinter VIP depending on passengers and luggage.'],
  ru: ['Трансфер из аэропорта Istanbul IST в отель, резиденцию, марину, ресторан или на деловую встречу.', 'Трансфер из Sabiha Gökçen SAW в центр, европейскую сторону, азиатскую сторону, Босфор или частную виллу.', 'Личный водитель в Стамбуле по часам для шопинга, встреч, частных поездок, вечера, свадьбы или мероприятия.', 'Mercedes E-Class, S-Class, Viano VIP и Sprinter VIP в зависимости от пассажиров и багажа.'],
  ar: ['Istanbul Airport IST transfer to hotel, residence, marina, restaurant or business appointment.', 'Sabiha Gökçen SAW transfer to city center, European side, Asian side, Bosphorus or private villa.', 'Private chauffeur in Istanbul by the hour for shopping, meetings, private visits, evening, wedding or event.', 'Mercedes E-Class, S-Class, Viano VIP and Sprinter VIP depending on passengers and luggage.'],
};

const clusters = [
  ['Transfert aéroport Istanbul', ['transfert aéroport Istanbul', 'transfert aeroport Istanbul', 'taxi privé aéroport Istanbul', 'navette privée Istanbul', 'airport transfer Istanbul', 'Istanbul airport transfer', 'Istanbul airport pickup', 'Istanbul airport to hotel transfer']],
  ['Istanbul Airport IST', ['transfert Istanbul Airport IST', 'IST airport transfer', 'transfert aéroport IST', 'chauffeur privé Istanbul Airport', 'Istanbul Airport to Sultanahmet', 'Istanbul Airport to Taksim', 'Istanbul Airport to Bosphorus hotel', 'Istanbul Airport to Nişantaşı']],
  ['Sabiha Gökçen SAW', ['transfert Sabiha Gökçen', 'transfert aéroport SAW', 'SAW airport transfer', 'Sabiha Gokcen airport transfer', 'Sabiha to Istanbul hotel', 'Sabiha Gökçen to European side', 'Sabiha Gökçen to Asian side']],
  ['Chauffeur privé Istanbul', ['chauffeur privé Istanbul', 'private chauffeur Istanbul', 'private driver Istanbul', 'chauffeur à l’heure Istanbul', 'Istanbul hourly chauffeur', 'Istanbul private car with driver', 'VIP chauffeur Istanbul', 'executive chauffeur Istanbul']],
  ['Transfert VIP Mercedes Istanbul', ['Mercedes transfer Istanbul', 'Mercedes Classe S Istanbul chauffeur', 'Mercedes E-Class Istanbul transfer', 'Viano VIP Istanbul transfer', 'Sprinter VIP Istanbul transfer', 'luxury airport transfer Istanbul', 'limousine service Istanbul', 'VIP transfer Istanbul airport']],
  ['Destinations fréquentes', ['Taksim transfer', 'Sultanahmet transfer', 'Nişantaşı transfer', 'Bebek transfer', 'Beşiktaş transfer', 'Galataport transfer', 'Karaköy transfer', 'Levent transfer', 'Maslak transfer', 'Bosphorus hotel transfer', 'Istanbul marina transfer']],
] as const;

const routes = ['Istanbul Airport IST → Taksim', 'Istanbul Airport IST → Sultanahmet', 'Istanbul Airport IST → Nişantaşı', 'Istanbul Airport IST → Beşiktaş', 'Istanbul Airport IST → Galataport', 'Istanbul Airport IST → Bebek', 'Istanbul Airport IST → Levent / Maslak', 'Istanbul Airport IST → Bosphorus hotels', 'Sabiha Gökçen SAW → Taksim', 'Sabiha Gökçen SAW → Sultanahmet', 'Sabiha Gökçen SAW → Kadıköy', 'Sabiha Gökçen SAW → Üsküdar', 'Sabiha Gökçen SAW → Nişantaşı', 'Sabiha Gökçen SAW → Beşiktaş', 'Sabiha Gökçen SAW → Bosphorus', 'Sabiha Gökçen SAW → Istanbul Airport IST'];

const useCases = ['Airport meet & greet', 'Flight tracking', 'Business meetings', 'Hotel to restaurant transfer', 'Shopping in Nişantaşı', 'Bosphorus dinner transfer', 'Private hourly chauffeur', 'Wedding guest transfer', 'VIP family transfer', 'Corporate roadshow', 'Yacht marina transfer', 'Clinic visit transfer'];

export function TransferSeoContent({ locale }: { locale: Locale }) {
  return (
    <>
      <section id="airports" className="bg-white px-5 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1180px] rounded-[2rem] border border-[#e5e7eb] bg-[#fafafa] p-6 md:p-10">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.20em] text-[#6b7280]">SEO / AI friendly</p>
          <h2 className="max-w-4xl text-3xl font-black tracking-[-0.04em] text-[#111827] md:text-5xl">{locale === 'fr' ? 'Transfert aéroport Istanbul IST & SAW, chauffeur privé et réservation à l’heure.' : 'Istanbul Airport IST & SAW transfer, private chauffeur and hourly booking.'}</h2>
          <div className="mt-8 grid gap-3 text-base leading-7 text-[#374151] md:grid-cols-2">{intro[locale].map((item) => <div key={item} className="rounded-3xl border border-[#e5e7eb] bg-white p-5"><CheckCircle2 className="mb-4 h-5 w-5 text-[#111827]" /><p>{item}</p></div>)}</div>
        </div>
      </section>
      <section id="vehicles" className="bg-white px-5 pb-12 md:px-8 md:pb-20"><div className="mx-auto max-w-[1180px]"><div className="grid gap-5 md:grid-cols-3">{clusters.map(([title, terms]) => <article key={title} className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.04)]"><h2 className="text-xl font-black tracking-[-0.03em] text-slate-950">{title}</h2><div className="mt-4 flex flex-wrap gap-2">{terms.map((term) => <span key={term} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">{term}</span>)}</div></article>)}</div></div></section>
      <section className="bg-[#f8fafc] px-5 py-12 md:px-8 md:py-20"><div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-xs font-black uppercase tracking-[0.20em] text-slate-500">Airport transfer routes</p><h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">Popular Istanbul airport transfer routes</h2><p className="mt-5 text-base leading-8 text-slate-600">Book a private transfer from Istanbul Airport IST or Sabiha Gökçen SAW to the main hotel districts, business areas, Bosphorus addresses, marinas and private residences in Istanbul.</p></div><div className="grid gap-2 sm:grid-cols-2">{routes.map((route) => <div key={route} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">{route}</div>)}</div></div></section>
      <section className="bg-white px-5 py-12 md:px-8 md:py-20"><div className="mx-auto max-w-[1180px] rounded-[2rem] bg-[#0b1220] p-6 text-white md:p-10"><p className="text-xs font-black uppercase tracking-[0.20em] text-slate-400">Private chauffeur Istanbul</p><h2 className="mt-3 max-w-4xl text-3xl font-black tracking-[-0.04em] md:text-5xl">Private driver, hourly chauffeur and VIP mobility in Istanbul</h2><div className="mt-8 grid gap-3 md:grid-cols-3 lg:grid-cols-4">{useCases.map((useCase) => <div key={useCase} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-200">{useCase}</div>)}</div></div></section>
    </>
  );
}
