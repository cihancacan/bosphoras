'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { EditorialProse } from '@/components/travel/EditorialProse';
import { HotelPartnerBooking } from '@/components/travel/HotelPartnerBooking';
import { hotelPartnerKey } from '@/lib/travel/hotelPartners';
import Link from 'next/link';
import { istanbulHotels } from '@/data/travel/istanbulFlagship';

type Hotel = (typeof istanbulHotels)[number];
import { istanbulHotelPhotos, type HotelPhoto } from '@/data/travel/hotelPhotography';
import { istanbulCityScenes, hotelCityStories } from '@/data/travel/istanbulCityScenes';


function EditorialPhoto({ photo, locale, className, priority = false }: { photo: HotelPhoto; locale: 'fr' | 'en'; className: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const alt = locale === 'fr' ? photo.fr : photo.en;
  if (failed) return <span className="absolute inset-0 flex items-center justify-center bg-[#f5f5f3] p-5 text-center text-xs text-[#53626b]">{locale === 'fr' ? 'Photo temporairement indisponible' : 'Photo temporarily unavailable'}</span>;
  if (photo.src.startsWith('/')) return <Image src={photo.src} alt={alt} fill priority={priority} sizes="(max-width: 1024px) 100vw, 1100px" className={className} />;
  return <img src={photo.src} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding="async" referrerPolicy="no-referrer" onError={() => setFailed(true)} className={'absolute inset-0 h-full w-full ' + className} />;
}

export function HotelEditorialDetail({ hotel, locale }: { hotel: Hotel; locale: 'fr' | 'en' }) {
  const fr = locale === 'fr';
  const photos = istanbulHotelPhotos[hotel.id] ?? [];
  const localStory = hotelCityStories[hotel.id];
  const cityScene = istanbulCityScenes[localStory.scene];
  const [active, setActive] = useState(0);
  const [enlarged, setEnlarged] = useState(false);

  useEffect(() => {
    if (!enlarged || !photos.length) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setEnlarged(false);
      if (event.key === 'ArrowRight') setActive((i) => (i + 1) % photos.length);
      if (event.key === 'ArrowLeft') setActive((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [enlarged, photos.length]);

  const back = fr ? '/travel/hotels/istanbul' : '/en/travel/hotels/istanbul';
  const title = fr ? 'Adresse sélectionnée' : 'Editorial selection';
  return (
    <main className="bg-[#ffffff] text-[#202629]">
      <section className="bg-[#193344] text-[#ffffff]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
          <Link href={back} className="text-xs uppercase tracking-[0.16em] text-[#e0e9ee] hover:underline">
            ← {fr ? 'Retour au guide des hôtels d’Istanbul' : 'Back to Istanbul hotel guide'}
          </Link>
          <p className="mt-12 text-xs uppercase tracking-[0.2em] text-[#e0e9ee]">{title} · {hotel.zone}</p>
          <h1 className="mt-5 max-w-5xl font-sans font-normal text-4xl leading-tight sm:text-6xl">{hotel.name}</h1>
          <EditorialProse text={fr ? hotel.frBest : hotel.enBest} className="mt-7 max-w-3xl text-base text-[#d7e0e0] sm:text-lg" />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:py-20">
        {photos.length > 0 ? (
          <section aria-label={fr ? 'Photographies de l’hôtel' : 'Hotel photo gallery'} className="mb-16">
            <button type="button" className="relative block aspect-[16/9] w-full overflow-hidden bg-[#f5f5f3] text-left lg:aspect-[2/1]"
              onClick={() => setEnlarged(true)} aria-label={fr ? 'Agrandir la photographie' : 'Enlarge photograph'}>
              <EditorialPhoto key={photos[active].src} photo={photos[active]} locale={locale} className="object-cover" priority />
              <span className="absolute bottom-4 right-4 bg-[#193344]/90 px-4 py-2 text-xs font-semibold text-white">
                {fr ? 'Agrandir' : 'Enlarge'}
              </span>
            </button>
            
            <div className="mt-5 flex gap-3 overflow-x-auto pb-2" aria-label={fr ? 'Choisir une photographie' : 'Choose a photograph'}>
              {photos.map((photo, index) => (
                <button type="button" key={photo.src} onClick={() => setActive(index)}
                  aria-label={(fr ? 'Afficher la photographie ' : 'Show photograph ') + (index + 1)}
                  aria-pressed={active === index}
                  className={'relative h-20 w-32 shrink-0 overflow-hidden border-2 sm:h-24 sm:w-40 ' + (active === index ? 'border-[#193344]' : 'border-transparent')}>
                  <EditorialPhoto photo={photo} locale={locale} className="object-cover" />
                </button>
              ))}
            </div>
          </section>
        ) : (
          <div className="mb-12 border-y border-[#e1e5e5] py-6 text-sm text-[#64707a]">
            {fr ? 'Galerie photographique en préparation. La sélection éditoriale reste consultable ci-dessous.' : 'Photo gallery in preparation. The editorial profile remains available below.'}
          </div>
        )}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(270px,1fr)]">
          <article className="max-w-3xl">
            <h2 className="font-sans font-normal text-3xl sm:text-4xl">{fr ? 'Pourquoi cette adresse ?' : 'Why consider this address?'}</h2>
            <EditorialProse text={fr ? hotel.fr : hotel.en} className="mt-6 max-w-2xl text-base text-[#475964] sm:text-lg" />
            <h2 className="mt-12 font-sans font-normal text-2xl">{fr ? 'L’expérience à privilégier' : 'The experience to prioritise'}</h2>
            <EditorialProse text={fr ? hotel.frBest : hotel.enBest} className="mt-4 text-base text-[#475964]" />
            <h2 className="mt-12 font-sans font-normal text-2xl">{fr ? 'À vérifier avant la réservation' : 'What to check before booking'}</h2>
            <EditorialProse text={fr ? hotel.frWatch : hotel.enWatch} className="mt-4 text-base text-[#475964]" />
          </article>
          <aside className="h-fit border border-[#e1e5e5] bg-white p-7">
            <HotelPartnerBooking hotelKey={hotelPartnerKey('istanbul', hotel.id)} locale={locale} />
          </aside>
        </div>

        <section aria-label={fr ? 'Autour de l’hôtel' : 'Around the hotel'} className="mt-20 border-t border-[#e1e5e5] pt-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#193344]">
              {fr ? 'L’expérience de quartier' : 'The neighbourhood experience'}
            </p>
            <h2 className="mt-4 font-sans font-normal text-3xl sm:text-4xl">{fr ? localStory.frTitle : localStory.enTitle}</h2>
          </div>
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12">
            <figure className="min-w-0">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#d8d3ca]">
                <Image src={cityScene.src} alt={fr ? cityScene.fr : cityScene.en}
                  fill sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover" />
              </div>
              
            </figure>
            <div>
              <EditorialProse text={fr ? localStory.fr : localStory.en} className="text-base text-[#475964]" />

            </div>
          </div>
        </section>
        <section className="mt-20 border-t border-[#e1e5e5] pt-10">
          <h2 className="font-sans font-normal text-3xl">{fr ? 'Autres adresses à découvrir' : 'Other addresses to explore'}</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {istanbulHotels.filter((item) => item.id !== hotel.id).slice(0,6).map((item) => (
              <Link key={item.id} href={(fr ? '/travel' : '/en/travel') + '/hotels/istanbul/' + item.id}
                className="border border-[#e1e5e5] bg-white p-5 hover:border-[#193344]">
                <span className="text-xs text-[#193344]">{item.zone}</span>
                <span className="mt-2 block font-sans font-normal text-xl">{item.name}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
      {enlarged && photos.length > 0 && (
        <div role="dialog" aria-modal="true" aria-label={fr ? 'Photographie agrandie' : 'Enlarged photograph'}
          className="fixed inset-0 z-[100] flex flex-col bg-[#0b161f]/95 p-4 text-white sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm">{active + 1} / {photos.length}</p>
            <button autoFocus type="button" onClick={() => setEnlarged(false)}
              className="border border-white/50 px-5 py-3 text-sm">{fr ? 'Fermer' : 'Close'} ✕</button>
          </div>
          <div className="relative mt-5 min-h-0 flex-1">
            <EditorialPhoto key={photos[active].src} photo={photos[active]} locale={locale} className="object-contain" />
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button type="button" onClick={() => setActive((i)=>(i-1+photos.length)%photos.length)}
              className="border border-white/50 px-5 py-3">← {fr ? 'Précédente' : 'Previous'}</button>
            <button type="button" onClick={() => setActive((i)=>(i+1)%photos.length)}
              className="border border-white/50 px-5 py-3">{fr ? 'Suivante' : 'Next'} →</button>
          </div>
        </div>
      )}
    </main>
  );
}
