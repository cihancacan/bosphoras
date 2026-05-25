'use client';

import { useEffect } from 'react';

// Legacy quote DOM enhancer disabled.
// This component now only swaps the hero image on mobile screens.
export function TransferQuoteEnhancer() {
  useEffect(() => {
    const applyMobileHero = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const mobileSrc = '/images/home.driver.mobile.jpg';
      const desktopSrc = '/images/home.driver.jpg';

      document.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
        const current = img.currentSrc || img.src || '';
        const isHero = current.includes('/images/home.driver.jpg') || current.includes('/_next/image') && current.includes('home.driver.jpg');
        if (!isHero) return;

        const nextSrc = isMobile ? mobileSrc : desktopSrc;
        if (!img.src.includes(nextSrc)) img.src = nextSrc;
        img.removeAttribute('srcset');
        img.style.objectFit = 'cover';
        img.style.objectPosition = 'center';
      });
    };

    applyMobileHero();
    window.addEventListener('resize', applyMobileHero);
    const observer = new MutationObserver(applyMobileHero);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', applyMobileHero);
      observer.disconnect();
    };
  }, []);

  return null;
}
