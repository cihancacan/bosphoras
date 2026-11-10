'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HotelPartnerBooking } from '@/components/travel/HotelPartnerBooking';
import { hotelPartnerKey } from '@/lib/travel/hotelPartners';
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
    <article className="grid min-w-0 overflow-hidden border border-[#dce3e6] bg-white lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <div className="min-w-0 px-6 py-7 sm:px-9 sm:py-9">
        <p className="text-xs tracking-wider uppercase text-[#526774] mb-4">{hotel.zone}</p>
        <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] leading-tight break-words">{hotel.name}</h3>
        {hero && <HotelCardPicture src={hero.src} alt={fr ? hero.fr : hero.en} hotelName={hotel.name} />}
        <p className="text-[#55656c] leading-7 mt-5">{fr ? hotel.fr : hotel.en}</p>
      </div>
      <div className="min-w-0 bg-[#f5f6f5] px-6 py-6 sm:px-9 sm:py-9 flex flex-col">
        <p className="text-xs tracking-wider uppercase text-[#526774] font-semibold">
          {fr ? 'À privilégier pour' : 'Especially suited to'}
        </p>
        <p className="leading-7 mt-2 font-medium">{fr ? hotel.frBest : hotel.enBest}</p>
        <p className="text-xs tracking-wider uppercase text-[#526774] font-semibold mt-5">
          {fr ? 'À vérifier avant de réserver' : 'Check before booking'}
        </p>
        <p className="text-sm leading-6 text-[#55656c] mt-2">{fr ? hotel.frWatch : hotel.enWatch}</p>
        <Link href={fr ? '/travel/hotels/istanbul/' + hotel.id : '/en/travel/hotels/istanbul/' + hotel.id} className="mt-7 inline-flex w-fit bg-[#193344] px-5 py-3 text-sm font-semibold text-[#f9f4e7] hover:bg-[#285063] focus-visible:outline-2 focus-visible:outline-offset-4">
          {fr ? 'Découvrir la fiche de cet hôtel' : 'Explore this hotel profile'} →
        </Link>
        <HotelPartnerBooking hotelKey={hotelPartnerKey('istanbul', hotel.id)} locale={locale} officialUrl={hotel.officialUrl} hotelName={hotel.name} />
      </div>
    </article>
  );
}

function HotelCardPicture({ src, alt, hotelName }: { src: string; alt: string; hotelName: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative mt-5 aspect-[16/9] overflow-hidden bg-[#e1e8ea]">
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#172e3c] p-4 text-center text-[#f3e8d6]">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#dbb780]">Bosphoras · Luxury Stays</span>
          <span className="mt-3 font-serif text-lg">{hotelName}</span>
        </div>
      ) : src.startsWith('/') ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
      ) : (
        <img src={src} alt={alt} loading="lazy" decoding="async" referrerPolicy="no-referrer"
          onError={() => setFailed(true)} className="absolute inset-0 h-full w-full object-cover" />
      )}
    </div>
  );
}
