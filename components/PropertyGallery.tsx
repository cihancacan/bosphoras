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
  const current = safeImages[index] || '';

  function move(delta: number) {
    if (safeImages.length < 2) return;
    setIndex((value) => (value + delta + safeImages.length) % safeImages.length);
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
    <div>
      <div className="relative aspect-[16/10] min-h-[360px] overflow-hidden rounded-[1.65rem] border border-[#d8dfdc] bg-[#dfe7e3] shadow-[0_22px_70px_rgba(20,40,34,.10)] md:min-h-[520px]">
        {current ? (
          <button type="button" onClick={() => setOpen(true)} className="absolute inset-0 block h-full w-full text-left" aria-label="Ouvrir la galerie">
            <Image src={current} alt={title} fill unoptimized priority className="object-cover" sizes="(max-width: 1024px) 100vw, 820px" />
          </button>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] text-[#71817c]">Bosphoras Property Desk</div>
        )}

        {safeImages.length > 1 ? (
          <>
            <button type="button" onClick={() => move(-1)} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-[#10231e]/55 p-2.5 text-white backdrop-blur-md transition hover:bg-[#10231e]/80" aria-label="Photo précédente"><ChevronLeft size={20}/></button>
            <button type="button" onClick={() => move(1)} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-[#10231e]/55 p-2.5 text-white backdrop-blur-md transition hover:bg-[#10231e]/80" aria-label="Photo suivante"><ChevronRight size={20}/></button>
          </>
        ) : null}

        <button type="button" onClick={() => setOpen(true)} className="absolute right-4 top-4 z-20 inline-flex items-center gap-2 rounded-full border border-white/40 bg-[#10231e]/50 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-md">
          <Expand size={14}/>{safeImages.length || 1} photo{safeImages.length > 1 ? 's' : ''}
        </button>

        <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-[#0c1d19]/58 px-5 py-4 text-white backdrop-blur-xl md:px-7 md:py-5">
          <p className="text-[0.67rem] font-semibold uppercase tracking-[0.13em] text-[#dfc69a]">{location}</p>
          <p className="mt-1.5 max-w-3xl text-sm leading-6 text-white/90">{summary}</p>
        </div>
      </div>

      {safeImages.length > 1 ? (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {safeImages.map((image, imageIndex) => (
            <button key={image + imageIndex} type="button" onClick={() => setIndex(imageIndex)} className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border-2 bg-[#e8eeeb] transition ${imageIndex === index ? 'border-[#2f6d59]' : 'border-transparent opacity-75 hover:opacity-100'}`}>
              <Image src={image} alt={`${title} — ${imageIndex + 1}`} fill unoptimized className="object-cover" sizes="112px"/>
            </button>
          ))}
        </div>
      ) : null}

      {open && current ? (
        <div className="fixed inset-0 z-[100] bg-[#07110f]/95 p-4 backdrop-blur-sm md:p-8" role="dialog" aria-modal="true" aria-label={title}>
          <button type="button" onClick={() => setOpen(false)} className="absolute right-5 top-5 z-20 rounded-full border border-white/20 bg-black/25 p-3 text-white" aria-label="Fermer"><X size={22}/></button>
          {safeImages.length > 1 ? <button type="button" onClick={() => move(-1)} className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/25 p-3 text-white" aria-label="Photo précédente"><ChevronLeft size={26}/></button> : null}
          {safeImages.length > 1 ? <button type="button" onClick={() => move(1)} className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/25 p-3 text-white" aria-label="Photo suivante"><ChevronRight size={26}/></button> : null}
          <div className="relative mx-auto h-full max-w-[1500px]">
            <Image src={current} alt={title} fill unoptimized className="object-contain" sizes="100vw"/>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/45 px-4 py-2 text-xs font-semibold text-white">{index + 1} / {safeImages.length}</div>
        </div>
      ) : null}
    </div>
  );
}
