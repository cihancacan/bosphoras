import Link from 'next/link';
import Image from 'next/image';
import { hotelHeroPhoto } from '@/data/travel/hotelPhotography';

/**
 * Reusable editorial hotel card (not an offer or a booking widget).
 * No ratings, prices or availability without supplier confirmation.
 * Existing authorized local images may be displayed. Keep editorial and commerce separate.
 */
export type EditorialHotel = {
  id: string;
  name: string;
  zone: string;
  officialUrl: string;
  fr: string;
  en: string;
  frBest: string;
  enBest: string;
  frWatch: string;
  enWatch: string;
};
type EditorialHotelCardProps = {
  hotel: EditorialHotel;
  index: number;
  locale: 'fr' | 'en';
};

export function EditorialHotelCard({ hotel, index, locale }: EditorialHotelCardProps) {
  const fr = locale === 'fr';
  const hero = hotelHeroPhoto(hotel.id);
  return (
    <article className="grid min-w-0 overflow-hidden bg-white border border-[#e7e0d4] lg:grid-cols-[84px_minmax(0,1.2fr)_minmax(0,1fr)]">
      <div className="flex items-center justify-between lg:block bg-[#142d39] text-[#dbc495] px-6 py-3 lg:p-6">
        <span className="font-serif text-xl lg:text-3xl tabular-nums">{String(index + 1).padStart(2, '0')}</span>
        <span className="lg:hidden text-[11px] tracking-[0.15em] uppercase">
          {fr ? 'Adresse sélectionnée' : 'Editorial selection'}
        </span>
      </div>
      <div className="min-w-0 px-6 py-7 sm:px-9 sm:py-9">
        <p className="text-xs tracking-wider uppercase text-[#9c784a] mb-4">{hotel.zone}</p>
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] leading-tight break-words">{hotel.name}</h3>
        {hero && <div className="relative mt-5 aspect-[16/9] overflow-hidden bg-[#eae5dc]">
          {hero.src.startsWith('/') ? <Image src={hero.src} alt={fr ? hero.fr : hero.en} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" /> : <img src={hero.src} alt={fr ? hero.fr : hero.en} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full object-cover" />}
        </div>}
        <p className="text-[#55656c] leading-7 mt-5">{fr ? hotel.fr : hotel.en}</p>
      </div>
      <div className="min-w-0 bg-[#fbfaf6] px-6 py-6 sm:px-9 sm:py-9 flex flex-col">
        <p className="text-xs tracking-wider uppercase text-[#9c784a] font-semibold">
          {fr ? 'À privilégier pour' : 'Especially suited to'}
        </p>
        <p className="leading-7 mt-2 font-medium">{fr ? hotel.frBest : hotel.enBest}</p>
        <p className="text-xs tracking-wider uppercase text-[#9c784a] font-semibold mt-5">
          {fr ? 'À vérifier avant de réserver' : 'Check before booking'}
        </p>
        <p className="text-sm leading-6 text-[#55656c] mt-2">{fr ? hotel.frWatch : hotel.enWatch}</p>
        <Link href={fr ? '/travel/hotels/istanbul/' + hotel.id : '/en/travel/hotels/istanbul/' + hotel.id} className="mt-7 inline-flex w-fit bg-[#142d39] px-5 py-3 text-sm font-semibold text-[#f9f4e7] hover:bg-[#285063] focus-visible:outline-2 focus-visible:outline-offset-4">
          {fr ? 'Découvrir la fiche de cet hôtel' : 'Explore this hotel profile'} →
        </Link>
        <a
          href={hotel.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 w-fit underline underline-offset-4 text-[#8d6836] hover:text-[#162d39] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d6836] font-semibold text-sm"
          aria-label={fr ? `Informations officielles sur ${hotel.name} (nouvel onglet)` : `Official information about ${hotel.name} (opens in a new tab)`}
        >
          {fr ? 'Voir le site officiel de l’hôtel' : 'Visit the official hotel website'}
          <span aria-hidden="true"> ↗</span>
        </a>
      </div>
    </article>
  );
}
