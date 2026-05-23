'use client';

import { useEffect } from 'react';

const countryDialCodes = [
  { code: '+33', flag: '🇫🇷', label: 'France' },
  { code: '+49', flag: '🇩🇪', label: 'Germany' },
  { code: '+44', flag: '🇬🇧', label: 'United Kingdom' },
  { code: '+41', flag: '🇨🇭', label: 'Switzerland' },
  { code: '+32', flag: '🇧🇪', label: 'Belgium' },
  { code: '+1', flag: '🇺🇸', label: 'United States' },
  { code: '+1', flag: '🇨🇦', label: 'Canada' },
  { code: '+90', flag: '🇹🇷', label: 'Turkey' },
  { code: '+7', flag: '🇰🇿', label: 'Kazakhstan' },
  { code: '+7', flag: '🇷🇺', label: 'Russia' },
  { code: '+34', flag: '🇪🇸', label: 'Spain' },
  { code: '+39', flag: '🇮🇹', label: 'Italy' },
  { code: '+351', flag: '🇵🇹', label: 'Portugal' },
  { code: '+31', flag: '🇳🇱', label: 'Netherlands' },
  { code: '+43', flag: '🇦🇹', label: 'Austria' },
  { code: '+971', flag: '🇦🇪', label: 'United Arab Emirates' },
  { code: '+966', flag: '🇸🇦', label: 'Saudi Arabia' },
  { code: '+974', flag: '🇶🇦', label: 'Qatar' },
  { code: '+965', flag: '🇰🇼', label: 'Kuwait' },
  { code: '+86', flag: '🇨🇳', label: 'China' },
  { code: '+81', flag: '🇯🇵', label: 'Japan' },
  { code: '+82', flag: '🇰🇷', label: 'South Korea' },
  { code: '+91', flag: '🇮🇳', label: 'India' },
  { code: '+212', flag: '🇲🇦', label: 'Morocco' },
  { code: '+213', flag: '🇩🇿', label: 'Algeria' },
  { code: '+216', flag: '🇹🇳', label: 'Tunisia' },
  { code: '+20', flag: '🇪🇬', label: 'Egypt' },
  { code: '+380', flag: '🇺🇦', label: 'Ukraine' },
  { code: '+995', flag: '🇬🇪', label: 'Georgia' },
  { code: '+994', flag: '🇦🇿', label: 'Azerbaijan' },
  { code: '+998', flag: '🇺🇿', label: 'Uzbekistan' },
  { code: '+996', flag: '🇰🇬', label: 'Kyrgyzstan' },
  { code: '+52', flag: '🇲🇽', label: 'Mexico' },
  { code: '+55', flag: '🇧🇷', label: 'Brazil' },
  { code: '+61', flag: '🇦🇺', label: 'Australia' },
  { code: '+27', flag: '🇿🇦', label: 'South Africa' },
];

const nextLabels: Record<string, string> = {
  fr: 'Suivant', en: 'Next', ru: 'Далее', ar: 'التالي', zh: '下一步', de: 'Weiter', es: 'Siguiente', it: 'Avanti', pt: 'Seguinte',
};

const backNeedles = ['retour', 'back', 'назад', 'رجوع', '返回', 'zurück', 'volver', 'indietro', 'voltar'];

function currentLocale() {
  const path = window.location.pathname.toLowerCase();
  if (path.startsWith('/en/')) return 'en';
  if (path.startsWith('/ru/')) return 'ru';
  if (path.startsWith('/ar/')) return 'ar';
  if (path.startsWith('/zh/')) return 'zh';
  if (path.startsWith('/de/')) return 'de';
  if (path.startsWith('/es/')) return 'es';
  if (path.startsWith('/it/')) return 'it';
  if (path.startsWith('/pt/')) return 'pt';
  return 'fr';
}

function euroToNumber(value: string) {
  const cleaned = value.replace(/[^0-9,.-]/g, '').replace(',', '.');
  const amount = Number(cleaned);
  return Number.isFinite(amount) ? Math.round(amount) : 0;
}

function getSummary() {
  return Array.from(document.querySelectorAll('aside')).find((aside) => /€/.test(aside.textContent || '')) as HTMLElement | undefined;
}

function getPassengerCard() {
  const summary = getSummary();
  return summary?.previousElementSibling as HTMLElement | undefined;
}

function passengerInputs() {
  const card = getPassengerCard();
  if (!card) return [] as HTMLInputElement[];
  return Array.from(card.querySelectorAll('input')).filter((input) => input.type !== 'checkbox' && input.dataset.transferDialCode !== 'true') as HTMLInputElement[];
}

function getDialInput() {
  return getPassengerCard()?.querySelector('input[data-transfer-dial-code="true"]') as HTMLInputElement | null;
}

function createDialDatalist() {
  const datalist = document.createElement('datalist');
  datalist.id = 'transfer-dial-codes';
  countryDialCodes.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.code;
    option.label = `${country.flag} ${country.label}`;
    datalist.appendChild(option);
  });
  return datalist;
}

function createDialInput() {
  if (!document.getElementById('transfer-dial-codes')) document.body.appendChild(createDialDatalist());
  const input = document.createElement('input');
  input.dataset.transferDialCode = 'true';
  input.className = 'h-14 rounded-2xl border border-gray-200 bg-gray-50 px-3 text-sm font-black text-gray-900 outline-none focus:border-black';
  input.setAttribute('aria-label', 'Country code');
  input.setAttribute('list', 'transfer-dial-codes');
  input.inputMode = 'tel';
  input.value = '+33';
  return input;
}

function enhancePhonePrefix() {
  const inputs = passengerInputs();
  const phone = inputs[2];
  if (!phone || phone.parentElement?.dataset.transferPhoneGroup) return;
  phone.type = 'tel';
  phone.inputMode = 'tel';
  phone.autocomplete = 'tel-national';
  phone.placeholder = phone.placeholder || 'Phone number';
  const wrapper = document.createElement('div');
  wrapper.dataset.transferPhoneGroup = 'true';
  wrapper.className = 'grid grid-cols-[92px_1fr] gap-2 md:col-span-2';
  phone.parentElement?.insertBefore(wrapper, phone);
  wrapper.appendChild(createDialInput());
  wrapper.appendChild(phone);
}

function findBackButton(card: HTMLElement) {
  const buttons = Array.from(card.querySelectorAll('button')) as HTMLButtonElement[];
  return buttons.find((button) => {
    const text = button.textContent?.trim().toLowerCase() || '';
    return backNeedles.some((needle) => text.includes(needle));
  });
}

function addMobileNextButton() {
  if (document.querySelector('[data-transfer-mobile-next="true"]')) return;
  const card = getPassengerCard();
  const summary = getSummary();
  if (!card || !summary) return;
  const backButton = findBackButton(card);
  if (!backButton) return;

  const originalParent = backButton.parentElement;
  if (!originalParent) return;
  originalParent.dataset.transferNavigationRow = 'true';
  originalParent.classList.add('w-full', 'items-center', 'justify-between', 'gap-3');
  originalParent.classList.remove('justify-start', 'justify-center', 'gap-4');

  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.transferMobileNext = 'true';
  button.textContent = nextLabels[currentLocale()] || nextLabels.en;
  button.className = backButton.className || 'rounded-2xl border border-black px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-black md:hidden';
  button.classList.add('md:hidden');
  button.onclick = () => {
    const top = summary.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };
  originalParent.appendChild(button);
}

function buildPhone() {
  const inputs = passengerInputs();
  const phoneRaw = inputs[2]?.value.trim() || '';
  if (phoneRaw.startsWith('+')) return phoneRaw.replace(/[\s().-]/g, '');
  const dialRaw = getDialInput()?.value.trim() || '+33';
  const dial = dialRaw.startsWith('+') ? dialRaw : `+${dialRaw.replace(/[^0-9]/g, '')}`;
  const local = phoneRaw.replace(/[^0-9]/g, '').replace(/^0+/, '');
  return `${dial}${local}`;
}

function mark(input: HTMLInputElement | undefined | null, invalid: boolean) {
  if (!input) return;
  input.style.borderColor = invalid ? '#dc2626' : '';
  input.style.boxShadow = invalid ? '0 0 0 4px rgba(220,38,38,0.10)' : '';
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function isPhone(value: string) {
  return /^\+[1-9]\d{7,14}$/.test(value.replace(/[\s().-]/g, ''));
}

function validatePassenger() {
  const inputs = passengerInputs();
  const lastName = inputs[0];
  const firstName = inputs[1];
  const phone = inputs[2];
  const email = inputs[3];
  const values = {
    lastName: lastName?.value.trim() || '',
    firstName: firstName?.value.trim() || '',
    phone: buildPhone(),
    email: email?.value.trim() || '',
  };
  const badLast = values.lastName.length < 2;
  const badFirst = values.firstName.length < 2;
  const badPhone = !isPhone(values.phone);
  const badEmail = !isEmail(values.email);
  mark(lastName, badLast);
  mark(firstName, badFirst);
  mark(phone, badPhone);
  mark(getDialInput(), badPhone);
  mark(email, badEmail);
  if (badLast || badFirst || badPhone || badEmail) {
    lastName?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    alert('Merci de compléter nom, prénom, téléphone avec indicatif et email avant le paiement.');
    return null;
  }
  return values;
}

function lineValue(keywords: string[]) {
  const summary = getSummary();
  const lines = (summary?.innerText || document.body.innerText).split('\n').map((line) => line.trim()).filter(Boolean);
  const line = lines.find((item) => keywords.some((k) => item.toLowerCase().startsWith(k.toLowerCase())));
  if (!line) return '';
  const index = line.indexOf(':');
  return index >= 0 ? line.slice(index + 1).trim() : line;
}

function amountFromSummary() {
  const summary = getSummary();
  const spans = Array.from(summary?.querySelectorAll('span') || []);
  const amount = spans.reverse().find((span) => /€/.test(span.textContent || ''))?.textContent || '';
  return euroToNumber(amount);
}

async function startCheckout(button: HTMLButtonElement) {
  enhancePhonePrefix();
  const passenger = validatePassenger();
  if (!passenger) return;
  const total = amountFromSummary();
  if (!total) {
    alert('Merci de vérifier le montant avant le paiement.');
    return;
  }

  const trip = lineValue(['Trajet', 'Trip', 'Route', 'Маршрут', 'المسار', '路线', 'Fahrt', 'Trayecto', 'Tragitto', 'Trajeto']);
  const [pickup, dropoff] = trip.split('→').map((part) => part.trim());
  const durationText = lineValue(['Durée', 'Duration', 'Длительность']);
  const minutes = durationText.match(/(\d+)\s*min/i)?.[1] || '';
  const km = durationText.match(/([0-9]+(?:[,.][0-9]+)?)\s*km/i)?.[1]?.replace(',', '.') || '';
  const toll = euroToNumber(lineValue(['Péage', 'Toll', 'Maut', 'Peaje', 'Pedaggio', 'Portagem']));
  const original = button.innerHTML;
  button.disabled = true;
  button.innerHTML = 'Stripe...';

  try {
    const response = await fetch('/api/transfer/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        total,
        pickup: pickup || 'Pickup',
        dropoff: dropoff || 'Drop-off',
        vehicle: lineValue(['Voiture', 'Car', 'Auto', 'Fahrzeug', 'Coche', 'Veículo']),
        date: lineValue(['Date', 'Datum', 'Fecha', 'Data']),
        flightNumber: lineValue(['Vol', 'Flight', 'Flug', 'Vuelo', 'Volo', 'Voo']),
        passengerCount: lineValue(['Passagers', 'Passengers', 'Passagiere', 'Pasajeros', 'Passeggeri', 'Passageiros']),
        routeMinutes: minutes,
        distanceKm: km,
        tollPrice: toll,
        tip: 0,
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        phone: passenger.phone,
        email: passenger.email,
      }),
    });
    const data = await response.json();
    if (!response.ok || !data.url) throw new Error(data.error || 'checkout_failed');
    window.location.href = data.url;
  } catch {
    alert('Le paiement Stripe n’est pas disponible. Vérifiez la configuration Stripe dans Vercel.');
    button.disabled = false;
    button.innerHTML = original;
  }
}

function isPaymentButton(button: HTMLButtonElement) {
  return Boolean(button.closest('aside') && /€/.test(button.closest('aside')?.textContent || ''));
}

export function TransferCheckoutEnhancer() {
  useEffect(() => {
    const refresh = () => {
      enhancePhonePrefix();
      addMobileNextButton();
    };
    const observer = new MutationObserver(refresh);
    observer.observe(document.body, { childList: true, subtree: true });
    refresh();

    const onClick = (event: MouseEvent) => {
      const button = (event.target as HTMLElement | null)?.closest('button') as HTMLButtonElement | null;
      if (!button || !isPaymentButton(button)) return;
      event.preventDefault();
      event.stopPropagation();
      startCheckout(button);
    };
    document.addEventListener('click', onClick, true);
    return () => {
      observer.disconnect();
      document.removeEventListener('click', onClick, true);
    };
  }, []);
  return null;
}
