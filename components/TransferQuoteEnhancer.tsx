'use client';

import { useEffect } from 'react';

// Enhances the transfer page hero and keeps vehicle price cards ordered from lowest to highest.
export function TransferQuoteEnhancer() {
  useEffect(() => {
    const applyMobileHero = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const mobileSrc = '/images/home.driver.mobile.jpg';
      const desktopSrc = '/images/home.driver.jpg';

      document.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
        const current = img.currentSrc || img.src || '';
        const isHero = current.includes('/images/home.driver.jpg') || current.includes('/images/home.driver.mobile.jpg') || (current.includes('/_next/image') && current.includes('home.driver'));
        if (!isHero) return;

        const nextSrc = isMobile ? mobileSrc : desktopSrc;
        if (!img.src.includes(nextSrc)) img.src = nextSrc;
        img.removeAttribute('srcset');
        img.style.objectFit = 'cover';
        img.style.objectPosition = 'center';
        img.style.transformOrigin = 'center center';
        img.style.transform = isMobile ? 'scale(0.96)' : 'scale(1)';
        const parent = img.parentElement;
        if (parent) parent.style.backgroundColor = '';
      });
    };

    const getPrice = (button: HTMLButtonElement) => {
      const priceText = Array.from(button.querySelectorAll('p'))
        .map((item) => item.textContent || '')
        .find((text) => text.includes('€'));
      if (!priceText || priceText.includes('...')) return Number.POSITIVE_INFINITY;
      const normalized = priceText.replace(/[^0-9]/g, '');
      return normalized ? Number(normalized) : Number.POSITIVE_INFINITY;
    };

    const sortVisibleVehiclePrices = () => {
      document.querySelectorAll<HTMLDivElement>('div.grid.gap-4').forEach((grid) => {
        const vehicleButtons = Array.from(grid.children).filter(
          (child): child is HTMLButtonElement => child instanceof HTMLButtonElement && Boolean(child.textContent?.includes('€'))
        );

        if (vehicleButtons.length < 2) return;

        const sortedButtons = [...vehicleButtons].sort((a, b) => getPrice(a) - getPrice(b));
        const isAlreadySorted = sortedButtons.every((button, index) => button === vehicleButtons[index]);
        if (isAlreadySorted) return;

        sortedButtons.forEach((button) => grid.appendChild(button));
      });
    };

    const enhancePage = () => {
      applyMobileHero();
      sortVisibleVehiclePrices();
    };

    enhancePage();
    window.addEventListener('resize', enhancePage);
    const observer = new MutationObserver(enhancePage);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', enhancePage);
      observer.disconnect();
    };
  }, []);

  return null;
}
