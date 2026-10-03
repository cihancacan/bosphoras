'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';

interface Props {
  images: string[];
  title: string;
  summary: string;
  location: string;
}

export function PropertyGallery({ images, title, summary, location }: Props) {
  const safeImages = images.filter(Boolean);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const current = safeImages[index] || '';

  function move(delta: number) {
    if (safeImages.length < 2) return;
    setIndex((value) => (value + delta + safeImages.length) % safeImages.length);
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

  return (
    <div className="min-w-0">
      <div
        className="relative aspect-[4/3] w-full min-w-0 overflow-hidden bg-[#dedbd3] sm:aspect-[16/10] lg:aspect-[4/3]"
        onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
        onTouchEnd={onTouchEnd}
      >
        {current ? (
          <button type="button" onClick={() => setOpen(true)} className="absolute inset-0 block h-full w-full" aria-label="Ouvrir la galerie">
            <Image src={current} alt={title} fill unoptimized priority className="object-cover" sizes="(max-width: 1024px) 100vw, 760px" />
          </button>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-[#77736b]">Bosphoras Property Desk</div>
        )}

        {safeImages.length > 1 ? (
          <>
            <button type="button" onClick={() => move(-1)} className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 border border-white/60 bg-black/25 p-2.5 text-white backdrop-blur-md transition hover:bg-black/45 sm:block" aria-label="Photo précédente"><ChevronLeft size={20}/></button>
            <button type="button" onClick={() => move(1)} className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 border border-white/60 bg-black/25 p-2.5 text-white backdrop-blur-md transition hover:bg-black/45 sm:block" aria-label="Photo suivante"><ChevronRight size={20}/></button>
          </>
        ) : null}

        <div className="absolute left-3 top-3 z-20 flex items-center gap-2 sm:left-4 sm:top-4">
          <span className="bg-[#17211e]/78 px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md">{index + 1} / {Math.max(safeImages.length,1)}</span>
          <button type="button" onClick={() => setOpen(true)} className="bg-[#17211e]/78 p-2 text-white backdrop-blur-md" aria-label="Agrandir la photo"><Expand size={15}/></button>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/20 bg-[#111816]/55 px-4 py-3 text-white backdrop-blur-xl sm:px-5 sm:py-4">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-[#d9c7a0]">{location}</p>
          <p className="mt-1 max-w-3xl overflow-hidden text-[0.82rem] leading-5 text-white/90 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:text-sm sm:leading-6">{summary}</p>
        </div>
      </div>

      {safeImages.length > 1 ? (
        <div className="mt-2 flex w-full snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {safeImages.map((image, imageIndex) => (
            <button
              key={image + imageIndex}
              type="button"
              onClick={() => setIndex(imageIndex)}
              className={`relative aspect-[4/3] w-[27%] min-w-[92px] max-w-[132px] shrink-0 snap-start overflow-hidden border transition sm:w-28 ${imageIndex === index ? 'border-[#315f52] opacity-100' : 'border-transparent opacity-65 hover:opacity-100'}`}
              aria-label={`Afficher la photo ${imageIndex + 1}`}
            >
              <Image src={image} alt={`${title} — ${imageIndex + 1}`} fill unoptimized className="object-cover" sizes="132px"/>
            </button>
          ))}
        </div>
      ) : null}

      {open && current ? (
        <div className="fixed inset-0 z-[100] bg-[#090d0c]/98" role="dialog" aria-modal="true" aria-label={title}>
          <button type="button" onClick={() => setOpen(false)} className="absolute right-3 top-3 z-30 border border-white/25 bg-black/30 p-3 text-white sm:right-5 sm:top-5" aria-label="Fermer"><X size={22}/></button>
          {safeImages.length > 1 ? <button type="button" onClick={() => move(-1)} className="absolute left-3 top-1/2 z-30 -translate-y-1/2 border border-white/25 bg-black/30 p-3 text-white sm:left-5" aria-label="Photo précédente"><ChevronLeft size={26}/></button> : null}
          {safeImages.length > 1 ? <button type="button" onClick={() => move(1)} className="absolute right-3 top-1/2 z-30 -translate-y-1/2 border border-white/25 bg-black/30 p-3 text-white sm:right-5" aria-label="Photo suivante"><ChevronRight size={26}/></button> : null}
          <div
            className="relative h-full w-full"
            onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
            onTouchEnd={onTouchEnd}
          >
            <Image src={current} alt={title} fill unoptimized className="object-contain" sizes="100vw"/>
          </div>
          <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 bg-black/50 px-4 py-2 text-xs font-semibold text-white">{index + 1} / {safeImages.length}</div>
        </div>
      ) : null}
    </div>
  );
}
