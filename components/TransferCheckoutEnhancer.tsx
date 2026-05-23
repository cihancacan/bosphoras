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

const paymentButtonNeedles = ['payer et confirmer', 'pay and confirm', 'оплатить', 'الدفع', '付款', 'bezahlen', 'pagar', 'paga e conferma'];

function euroToNumber(value: string) {
  const cleaned = value.replace(/[^0-9,.-]/g, '').replace(',', '.');
  const amount = Number(cleaned);
  return Number.isFinite(amount) ? Math.round(amount) : 0;
}

function textAfter(label: string) {
  const lines = document.body.innerText.split('\n').map((line) => line.trim()).filter(Boolean);
  const line = lines.find((item) => item.toLowerCase().startsWith(label.toLowerCase()));
  return line ? line.slice(label.length).trim() : '';
}

function findPassengerCard() {
  const heading = Array.from(document.querySelectorAll('h2')).find((h) => /passager|passenger|пассаж|راكب|乘客|pasajero|passegger|passagier|passageiro/i.test(h.textContent || ''));
  if (!heading) return null;
  return (heading.closest('div.rounded-\[28px\]') || heading.parentElement) as HTMLElement | null;
}

function getPassengerInputs() {
  const card = findPassengerCard();
  if (!card) return [] as HTMLInputElement[];
  return Array.from(card.querySelectorAll('input')).filter((input) => input.type !== 'checkbox') as HTMLInputElement[];
}

function getPassengerField(index: number) {
  return getPassengerInputs()[index];
}

function getPhoneInput() {
  return (findPassengerCard()?.querySelector('input[data-transfer-phone="true"]') || getPassengerField(2)) as HTMLInputElement | undefined;
}

function getDialInput() {
  return findPassengerCard()?.querySelector('[data-transfer-dial-code="true"]') as HTMLInputElement | null;
}

function buildInternationalPhone() {
  const phone = getPhoneInput();
  const dial = getDialInput()?.value?.trim() || '+33';
  const raw = phone?.value.trim() || '';
  if (raw.startsWith('+')) return raw.replace(/[\s().-]/g, '');
  const normalizedDial = dial.startsWith('+') ? dial : `+${dial.replace(/[^0-9]/g, '')}`;
  const local = raw.replace(/[^0-9]/g, '').replace(/^0+/, '');
  return `${normalizedDial}${local}`;
}

function getValueByPlaceholder(fragment: string) {
  const card = findPassengerCard();
  if (!card) return '';
  const input = Array.from(card.querySelectorAll('input, textarea')).find((el) => ((el as HTMLInputElement).placeholder || '').toLowerCase().includes(fragment.toLowerCase())) as HTMLInputElement | HTMLTextAreaElement | undefined;
  return input?.value?.trim() || '';
}

function parseRoute(routeText: string) {
  const [pickup, dropoff] = routeText.split('→').map((part) => part.trim());
  return { pickup: pickup || '', dropoff: dropoff || '' };
}

function parseDuration(durationText: string) {
  const minutesMatch = durationText.match(/(\d+)\s*min/i);
  const kmMatch = durationText.match(/([0-9]+(?:[,.][0-9]+)?)\s*km/i);
  return { routeMinutes: minutesMatch?.[1] || '', distanceKm: kmMatch?.[1]?.replace(',', '.') || '' };
}

function markField(input: HTMLInputElement | HTMLTextAreaElement | undefined | null, invalid: boolean) {
  if (!input) return;
  input.style.borderColor = invalid ? '#dc2626' : '';
  input.style.boxShadow = invalid ? '0 0 0 4px rgba(220,38,38,0.10)' : '';
  input.setAttribute('aria-invalid', invalid ? 'true' : 'false');
}

function isValidEmail(email: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email); }
function isValidInternationalPhone(phone: string) { return /^\+[1-9]\d{7,14}$/.test(phone.replace(/[\s().-]/g, '')); }

function requirePassengerDetails() {
  const fields = { lastName: getPassengerField(0), firstName: getPassengerField(1), phone: getPhoneInput(), email: getPassengerField(3) };
  const values = { lastName: fields.lastName?.value.trim() || '', firstName: fields.firstName?.value.trim() || '', phone: buildInternationalPhone(), email: fields.email?.value.trim() || '' };

  const invalidLastName = values.lastName.length < 2;
  const invalidFirstName = values.firstName.length < 2;
  const invalidPhone = !isValidInternationalPhone(values.phone);
  const invalidEmail = !isValidEmail(values.email);

  markField(fields.lastName, invalidLastName);
  markField(fields.firstName, invalidFirstName);
  markField(fields.phone, invalidPhone);
  markField(fields.email, invalidEmail);
  markField(getDialInput(), invalidPhone);

  const errors: string[] = [];
  if (invalidLastName) errors.push('Last name / Nom');
  if (invalidFirstName) errors.push('First name / Prénom');
  if (invalidPhone) errors.push('Phone with country code / Téléphone avec indicatif');
  if (invalidEmail) errors.push('Valid email / Email valide');
  if (errors.length) {
    fields.lastName?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    alert(`Please complete the required fields before payment:\n\n- ${errors.join('\n- ')}`);
    return null;
  }
  return values;
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
  input.style.minWidth = '92px';
  return input;
}

function modernizePassengerFields() {
  const card = findPassengerCard();
  if (!card) return;
  const inputs = getPassengerInputs();
  const lastName = inputs[0];
  const firstName = inputs[1];
  const targetPhone = inputs[2];
  const email = inputs[3];

  if (lastName) { lastName.required = true; lastName.autocomplete = 'family-name'; }
  if (firstName) { firstName.required = true; firstName.autocomplete = 'given-name'; }
  if (targetPhone) {
    targetPhone.placeholder = 'Phone number *';
    targetPhone.required = true;
    targetPhone.type = 'tel';
    targetPhone.inputMode = 'tel';
    targetPhone.autocomplete = 'tel-national';
    targetPhone.dataset.transferPhone = 'true';
    if (!targetPhone.parentElement?.dataset.transferPhoneGroup) {
      const wrapper = document.createElement('div');
      wrapper.dataset.transferPhoneGroup = 'true';
      wrapper.className = 'grid grid-cols-[92px_1fr] gap-2 md:col-span-2';
      targetPhone.parentElement?.insertBefore(wrapper, targetPhone);
      wrapper.appendChild(createDialInput());
      wrapper.appendChild(targetPhone);
    }
  }
  if (email) { email.required = true; email.type = 'email'; email.autocomplete = 'email'; }
}

function findPaymentButton() {
  return Array.from(document.querySelectorAll('button')).find((button) => {
    const text = button.textContent?.trim().toLowerCase() || '';
    return paymentButtonNeedles.some((needle) => text.includes(needle));
  }) as HTMLButtonElement | undefined;
}

function addMobileSummaryButton() {
  if (document.querySelector('[data-transfer-mobile-next="true"]')) return;
  const card = findPassengerCard();
  const paymentButton = findPaymentButton();
  const summary = Array.from(document.querySelectorAll('aside')).find((aside) => /summary|résumé|итого|الملخص|摘要|zusammenfassung|resumen|riepilogo|resumo/i.test(aside.textContent || '')) as HTMLElement | undefined;
  if (!card || !summary || !paymentButton) return;

  const footer = document.createElement('div');
  footer.dataset.transferMobileNext = 'true';
  footer.className = 'mt-5 flex justify-end md:hidden';
  const next = document.createElement('button');
  next.type = 'button';
  next.textContent = 'Suivant';
  next.className = 'rounded-2xl border border-slate-300 bg-white px-5 py-3 text-[11px] font-black uppercase tracking-[0.12em] text-slate-700 shadow-sm';
  next.onclick = () => summary.scrollIntoView({ behavior: 'smooth', block: 'start' });
  footer.appendChild(next);
  card.appendChild(footer);
}

async function startCheckout(button: HTMLButtonElement) {
  modernizePassengerFields();
  const passenger = requirePassengerDetails();
  if (!passenger) return;

  const totalText = Array.from(document.querySelectorAll('span')).find((span) => /€/.test(span.textContent || '') && (span.textContent || '').length < 20)?.textContent || '';
  const total = euroToNumber(totalText);
  const route = parseRoute(textAfter('Trajet :') || textAfter('Trip :') || textAfter('Route :'));
  const duration = parseDuration(textAfter('Durée :') || textAfter('Duration :'));
  const tollPrice = euroToNumber(textAfter('Péage :') || textAfter('Toll :'));
  const tip = euroToNumber(getValueByPlaceholder('montant') || getValueByPlaceholder('amount') || '0');

  if (!total) { alert('Please verify the amount before payment.'); return; }
  const original = button.innerHTML;
  button.disabled = true;
  button.innerHTML = 'Redirecting to Stripe...';

  try {
    const response = await fetch('/api/transfer/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        total,
        pickup: route.pickup || 'Pickup',
        dropoff: route.dropoff || 'Drop-off',
        vehicle: textAfter('Voiture :') || textAfter('Car :'),
        date: textAfter('Date :'),
        flightNumber: textAfter('Vol :') || textAfter('Flight :'),
        passengerCount: textAfter('Passagers :') || textAfter('Passengers :'),
        routeMinutes: duration.routeMinutes,
        distanceKm: duration.distanceKm,
        tollPrice,
        tip,
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        phone: passenger.phone,
        email: passenger.email,
        note: getValueByPlaceholder('note') || getValueByPlaceholder('special'),
      }),
    });
    const data = await response.json();
    if (!response.ok || !data.url) throw new Error(data.error || 'checkout_failed');
    window.location.href = data.url;
  } catch {
    alert('Stripe payment is not available yet. Please verify the Stripe key in Vercel.');
    button.disabled = false;
    button.innerHTML = original;
  }
}

export function TransferCheckoutEnhancer() {
  useEffect(() => {
    const observer = new MutationObserver(() => { modernizePassengerFields(); addMobileSummaryButton(); });
    observer.observe(document.body, { childList: true, subtree: true });
    modernizePassengerFields();
    addMobileSummaryButton();
    const onClick = (event: MouseEvent) => {
      const button = (event.target as HTMLElement | null)?.closest('button') as HTMLButtonElement | null;
      const paymentButton = findPaymentButton();
      if (!button || !paymentButton || button !== paymentButton) return;
      event.preventDefault();
      event.stopPropagation();
      startCheckout(button);
    };
    document.addEventListener('click', onClick, true);
    return () => { observer.disconnect(); document.removeEventListener('click', onClick, true); };
  }, []);
  return null;
}
