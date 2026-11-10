'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { EditorialProse } from '@/components/travel/EditorialProse';
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

export function EditorialHotelCard({ hotel, locale }: EditorialHotelCardProps) {
  const fr = locale === 'fr';
  const hero = hotelHeroPhoto(hotel.id);
  return (
    <article className="grid min-w-0 overflow-hidden border border-[#e1e5e5] bg-white lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <div className="min-w-0 px-6 py-7 sm:px-9 sm:py-9">
        {hero && <HotelCardPicture src={hero.src} alt={fr ? hero.fr : hero.en} hotelName={hotel.name} />}
        <p className="mt-5 text-xs uppercase tracking-wider text-[#193344]">{hotel.zone}</p>
        <h3 className="mt-3 break-words font-sans text-2xl font-normal leading-tight sm:text-3xl">{hotel.name}</h3>
        <p className="mt-4 line-clamp-2 text-sm leading-7 text-[#55656c]">{fr?hotel.fr:hotel.en}</p>
        <Link href={fr ? '/travel/hotels/istanbul/' + hotel.id : '/en/travel/hotels/istanbul/' + hotel.id} className="mt-5 inline-flex w-fit text-sm font-medium text-[#193344] underline underline-offset-4">
          {fr ? 'Découvrir la fiche' : 'Explore the hotel'} →
        </Link>
      </div>
      <div className="min-w-0 bg-[#f5f5f3] px-6 py-6 sm:px-9 sm:py-9 flex flex-col">
        <HotelPartnerBooking hotelKey={hotelPartnerKey('istanbul', hotel.id)} locale={locale} />
        <details className="mt-6 border-t border-[#e1e5e5] pt-4">
          <summary className="cursor-pointer text-sm font-medium text-[#193344]">{fr?'En savoir plus':'Read more'}</summary>
          <div className="mt-5">
            <EditorialProse text={fr?hotel.fr:hotel.en} className="mb-5 text-sm text-[#55656c]" maxChars={265} />
            <p className="text-xs tracking-wider uppercase text-[#193344] font-semibold">{fr ? 'À privilégier pour' : 'Especially suited to'}</p>
          </div>
        <EditorialProse text={fr ? hotel.frBest : hotel.enBest} className="mt-3 text-sm font-medium text-[#435761] sm:text-base" maxChars={260} />
        <p className="text-xs tracking-wider uppercase text-[#193344] font-semibold mt-5">
          {fr ? 'À vérifier avant de réserver' : 'Check before booking'}
        </p>
        <EditorialProse text={fr ? hotel.frWatch : hotel.enWatch} className="mt-3 text-sm text-[#55656c]" maxChars={245} />
        </details>
      </div>
    </article>
  );
}

function HotelCardPicture({ src, alt, hotelName }: { src: string; alt: string; hotelName: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="relative mt-5 aspect-[16/9] overflow-hidden bg-[#f5f5f3]">
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#172e3c] p-4 text-center text-[#f3e8d6]">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#ffffff]">Bosphoras · Luxury Stays</span>
          <span className="mt-3 font-sans font-normal text-lg">{hotelName}</span>
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
