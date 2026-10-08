'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Images, X } from 'lucide-react';

interface Props {
  images: string[];
  title: string;
  summary: string;
  location: string;
  compact?: boolean;
}

export function PropertyGallery({ images, title, summary, location, compact = false }: Props) {
  const safeImages = images.filter(Boolean);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const current = safeImages[index] || '';

  function move(delta: number) {
    if (safeImages.length < 2) return;
    setIndex((value) => (value + delta + safeImages.length) % safeImages.length);
  }

  function openAt(nextIndex: number) {
    setIndex(nextIndex);
    setOpen(true);
  }

  function onTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStart === null) return;
    const end = event.changedTouches[0]?.clientX ?? touchStart;
    const delta = end - touchStart;
    if (Math.abs(delta) > 45) move(delta > 0 ? -1 : 1);
    setTouchStart(null);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, safeImages.length]);

  if (!safeImages.length) {
    return (
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-[1.8rem] border border-[#d8d3c8] bg-[#e8e5de] text-xs font-semibold uppercase tracking-[0.2em] text-[#77736b]">
        Bosphoras Property Desk
      </div>
    );
  }

  return (
    <div className="min-w-0">
      <div
        className="relative overflow-hidden rounded-none bg-[#dedbd3] sm:rounded-[1.8rem] lg:hidden"
        onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
        onTouchEnd={onTouchEnd}
      >
        <div className={compact?'relative aspect-[16/10] sm:aspect-[2/1]':'relative aspect-[4/3] sm:aspect-[16/10]'}>
          <button type="button" onClick={() => openAt(index)} className="absolute inset-0 block h-full w-full" aria-label="Open gallery">
            <Image src={current} alt={title} fill unoptimized priority className="object-cover" sizes="100vw" />
          </button>
          {safeImages.length > 1 ? (
            <>
              <button type="button" onClick={() => move(-1)} className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/50 bg-black/25 p-2.5 text-white backdrop-blur-md" aria-label="Previous photo"><ChevronLeft size={20}/></button>
              <button type="button" onClick={() => move(1)} className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/50 bg-black/25 p-2.5 text-white backdrop-blur-md" aria-label="Next photo"><ChevronRight size={20}/></button>
            </>
          ) : null}
          <div className="absolute right-3 top-3 z-20 inline-flex items-center gap-2 rounded-full bg-[#111816]/72 px-3 py-2 text-[0.68rem] font-semibold text-white backdrop-blur-md">
            <Images size={14}/>{index + 1}/{safeImages.length}
          </div>
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-5 pb-5 pt-16 text-white">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-white/75">{location}</p>
            {summary ? <p className="mt-1 line-clamp-2 max-w-2xl text-sm leading-6 text-white/92">{summary}</p> : null}
          </div>
        </div>
      </div>

      <div className={`hidden ${compact?'h-[380px]':'h-[480px]'} ${safeImages.length>1?'grid-cols-[minmax(0,1.72fr)_minmax(300px,.72fr)]':'grid-cols-1'} grid-rows-2 gap-2 overflow-hidden rounded-[1.5rem] lg:grid`}>
        <button type="button" onClick={() => openAt(0)} className="group relative row-span-2 overflow-hidden bg-[#d8d4cb] text-left" aria-label="Open main photo">
          <Image src={safeImages[0]} alt={title} fill unoptimized priority className="object-cover transition duration-700 group-hover:scale-[1.015]" sizes="72vw" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 via-black/25 to-transparent px-8 pb-7 pt-28 text-white">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white/75">{location}</p>
            {summary ? <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-6 text-white/92">{summary}</p> : null}
          </div>
        </button>

        {safeImages[1] ? (
          <button type="button" onClick={() => openAt(1)} className={`group relative overflow-hidden bg-[#d8d4cb] ${!safeImages[2] ? 'row-span-2' : ''}`} aria-label="Open second photo">
            <Image src={safeImages[1]} alt={`${title} — 2`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-[1.025]" sizes="28vw" />
          </button>
        ) : null}

        {safeImages[2] ? (
          <button type="button" onClick={() => openAt(2)} className="group relative overflow-hidden bg-[#d8d4cb]" aria-label="Open third photo">
            <Image src={safeImages[2]} alt={`${title} — 3`} fill unoptimized className="object-cover transition duration-700 group-hover:scale-[1.025]" sizes="28vw" />
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-[#111816]/76 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md">
              <Images size={15}/>{safeImages.length}
            </span>
          </button>
        ) : null}
      </div>

      {safeImages.length > 3 ? (
        <div className="mt-3 hidden snap-x gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex">
          {safeImages.slice(3, 9).map((image, offset) => {
            const imageIndex = offset + 3;
            return (
              <button key={image + imageIndex} type="button" onClick={() => openAt(imageIndex)} className="group relative aspect-[16/10] w-[150px] shrink-0 overflow-hidden rounded-xl bg-[#dedbd3]" aria-label={`Open photo ${imageIndex + 1}`}>
                <Image src={image} alt={`${title} — ${imageIndex + 1}`} fill unoptimized className="object-cover transition duration-500 group-hover:scale-[1.04]" sizes="150px"/>
              </button>
            );
          })}
          {safeImages.length > 9 ? (
            <button type="button" onClick={() => openAt(9)} className="flex aspect-[16/10] w-[150px] shrink-0 items-center justify-center rounded-xl border border-[#cfc9bd] bg-[#fbfaf6] text-sm font-semibold text-[#244b3f]">
              +{safeImages.length - 9}
            </button>
          ) : null}
        </div>
      ) : null}

      {open && current ? (
        <div className="fixed inset-0 z-[100] bg-[#090d0c]/98" role="dialog" aria-modal="true" aria-label={title}>
          <button type="button" onClick={() => setOpen(false)} className="absolute right-3 top-3 z-30 rounded-full border border-white/25 bg-black/30 p-3 text-white sm:right-5 sm:top-5" aria-label="Close"><X size={22}/></button>
          {safeImages.length > 1 ? <button type="button" onClick={() => move(-1)} className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/25 bg-black/30 p-3 text-white sm:left-5" aria-label="Previous photo"><ChevronLeft size={26}/></button> : null}
          {safeImages.length > 1 ? <button type="button" onClick={() => move(1)} className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/25 bg-black/30 p-3 text-white sm:right-5" aria-label="Next photo"><ChevronRight size={26}/></button> : null}
          <div
            className="relative h-full w-full"
            onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
            onTouchEnd={onTouchEnd}
          >
            <Image src={current} alt={title} fill unoptimized className="object-contain" sizes="100vw"/>
          </div>
          <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold text-white">{index + 1} / {safeImages.length}</div>
        </div>
      ) : null}
    </div>
  );
}
