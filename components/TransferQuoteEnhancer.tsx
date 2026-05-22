'use client';

import { useEffect } from 'react';

type VehicleId = 'e' | 's' | 'viano' | 'sprinter';

const vehicleMatchers: Array<{ id: VehicleId; name: string }> = [
  { id: 'e', name: 'Mercedes Classe E' },
  { id: 's', name: 'Mercedes Classe S' },
  { id: 'viano', name: 'Mercedes Viano VIP' },
  { id: 'sprinter', name: 'Mercedes Sprinter VIP' },
];

function parseRouteText() {
  const pageText = document.body.innerText;
  if (!pageText.includes('Sélectionnez votre véhicule')) return null;
  const routeLine = Array.from(document.querySelectorAll('p')).find((p) => p.textContent?.includes('→'))?.textContent || '';
  const [pickup, dropoff] = routeLine.split('→').map((part) => part.trim()).filter(Boolean);
  if (!pickup || !dropoff) return null;
  return { pickup, dropoff };
}

function findVehicleButton(name: string) {
  return Array.from(document.querySelectorAll('button')).find((button) => button.textContent?.includes(name)) as HTMLButtonElement | undefined;
}

function findPriceElement(card: HTMLElement) {
  return Array.from(card.querySelectorAll('p')).find((p) => /€|\.\.\./.test(p.textContent || '') && (p.textContent || '').length < 20) as HTMLElement | undefined;
}

function formatEuro(value: number) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
}

async function quoteVehicle(pickup: string, dropoff: string, vehicleId: VehicleId) {
  const response = await fetch('/api/transfer/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pickup, dropoff, mode: 'transfer', vehicleId, hours: 2 }),
  });
  if (!response.ok) throw new Error('quote_failed');
  return response.json() as Promise<{ estimatedMinutes: number; billedMinutes: number; tollPrice: number; total: number; source: string }>;
}

export function TransferQuoteEnhancer() {
  useEffect(() => {
    let lastRouteKey = '';
    let running = false;

    const refreshQuotes = async () => {
      const route = parseRouteText();
      if (!route || running) return;
      const routeKey = `${route.pickup}__${route.dropoff}`;
      if (routeKey === lastRouteKey) return;
      lastRouteKey = routeKey;
      running = true;

      try {
        const firstInfo = document.querySelector('p.text-sm.font-semibold.text-gray-500') as HTMLElement | null;
        if (firstInfo) firstInfo.textContent = 'Calcul du trajet avec Google Maps...';

        await Promise.all(vehicleMatchers.map(async (vehicle) => {
          const card = findVehicleButton(vehicle.name);
          if (!card) return;
          const priceEl = findPriceElement(card);
          if (priceEl) priceEl.textContent = '...';

          const quote = await quoteVehicle(route.pickup, route.dropoff, vehicle.id);
          if (priceEl) priceEl.textContent = formatEuro(quote.total);

          const meta = card.querySelector('[data-google-quote]') as HTMLElement | null;
          if (meta) meta.remove();
          const note = document.createElement('span');
          note.dataset.googleQuote = 'true';
          note.textContent = quote.tollPrice > 0 ? `Google Maps · ${quote.estimatedMinutes} min · péage inclus` : `Google Maps · ${quote.estimatedMinutes} min`;
          note.className = 'inline-flex gap-1 text-xs font-bold uppercase tracking-[0.1em] text-gray-600';
          const details = Array.from(card.querySelectorAll('div')).find((div) => div.textContent?.includes('Suivi vol'));
          details?.appendChild(note);
        }));

        const sample = await quoteVehicle(route.pickup, route.dropoff, 'e');
        if (firstInfo) firstInfo.textContent = `${sample.estimatedMinutes} min estimées · ${sample.billedMinutes} min facturées · Google Maps`;
      } catch {
        const firstInfo = document.querySelector('p.text-sm.font-semibold.text-gray-500') as HTMLElement | null;
        if (firstInfo) firstInfo.textContent = 'Estimation disponible · Google Maps indisponible';
      } finally {
        running = false;
      }
    };

    const observer = new MutationObserver(() => refreshQuotes());
    observer.observe(document.body, { childList: true, subtree: true });
    refreshQuotes();

    return () => observer.disconnect();
  }, []);

  return null;
}
