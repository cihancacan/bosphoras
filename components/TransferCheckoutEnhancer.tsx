'use client';

import { useEffect } from 'react';

function euroToNumber(value: string) {
  const cleaned = value.replace(/[^0-9,.-]/g, '').replace(',', '.');
  const amount = Number(cleaned);
  return Number.isFinite(amount) ? Math.round(amount) : 0;
}

function textAfter(label: string) {
  const lines = document.body.innerText.split('\n').map((line) => line.trim()).filter(Boolean);
  const line = lines.find((item) => item.startsWith(label));
  return line ? line.replace(label, '').trim() : '';
}

function getInputValue(placeholder: string) {
  const input = Array.from(document.querySelectorAll('input, textarea')).find((el) =>
    (el as HTMLInputElement).placeholder?.toLowerCase() === placeholder.toLowerCase()
  ) as HTMLInputElement | HTMLTextAreaElement | undefined;
  return input?.value?.trim() || '';
}

function parseRoute(routeText: string) {
  const [pickup, dropoff] = routeText.split('→').map((part) => part.trim());
  return { pickup: pickup || '', dropoff: dropoff || '' };
}

function parseDuration(durationText: string) {
  const minutesMatch = durationText.match(/(\d+)\s*min/i);
  const kmMatch = durationText.match(/([0-9]+(?:[,.][0-9]+)?)\s*km/i);
  return {
    routeMinutes: minutesMatch?.[1] || '',
    distanceKm: kmMatch?.[1]?.replace(',', '.') || '',
  };
}

function findPaymentButton() {
  return Array.from(document.querySelectorAll('button')).find((button) =>
    button.textContent?.trim().toLowerCase().includes('payer et confirmer')
  ) as HTMLButtonElement | undefined;
}

async function startCheckout(button: HTMLButtonElement) {
  const totalText = Array.from(document.querySelectorAll('span')).find((span) => /€/.test(span.textContent || '') && (span.textContent || '').length < 20)?.textContent || '';
  const total = euroToNumber(totalText);
  const route = parseRoute(textAfter('Trajet :'));
  const duration = parseDuration(textAfter('Durée :'));
  const tollText = textAfter('Péage :');
  const tollPrice = euroToNumber(tollText);
  const tip = euroToNumber(getInputValue('Autre montant libre') || '0');

  if (!total || !route.pickup || !route.dropoff) {
    alert('Merci de vérifier le trajet et le montant avant le paiement.');
    return;
  }

  const original = button.innerHTML;
  button.disabled = true;
  button.innerHTML = 'Redirection vers Stripe...';

  try {
    const response = await fetch('/api/transfer/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        total,
        pickup: route.pickup,
        dropoff: route.dropoff,
        vehicle: textAfter('Voiture :'),
        date: textAfter('Date :'),
        time: '',
        flightNumber: textAfter('Vol :'),
        passengerCount: textAfter('Passagers :'),
        routeMinutes: duration.routeMinutes,
        distanceKm: duration.distanceKm,
        tollPrice,
        tip,
        email: getInputValue('Email'),
        note: getInputValue('Note / souhait particulier'),
      }),
    });

    const data = await response.json();
    if (!response.ok || !data.url) throw new Error(data.error || 'checkout_failed');
    window.location.href = data.url;
  } catch (error) {
    alert('Le paiement Stripe n’est pas encore disponible. Vérifiez la clé Stripe dans Vercel.');
    button.disabled = false;
    button.innerHTML = original;
  }
}

export function TransferCheckoutEnhancer() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const button = (event.target as HTMLElement | null)?.closest('button') as HTMLButtonElement | null;
      if (!button || !button.textContent?.toLowerCase().includes('payer et confirmer')) return;
      event.preventDefault();
      event.stopPropagation();
      startCheckout(button);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
