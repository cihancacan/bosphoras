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
const passengerLabelNeedles = {
  lastName: ['nom', 'last name', 'фамилия', 'الاسم العائلي', '姓', 'nachname', 'apellido', 'cognome', 'apelido'],
  firstName: ['prénom', 'first name', 'имя', 'الاسم الأول', '名', 'vorname', 'nombre', 'nome'],
  phone: ['téléphone', 'phone', 'телефон', 'الهاتف', '电话', 'telefon', 'teléfono', 'telefono'],
  email: ['email', 'e-mail', '邮箱', 'البريد'],
};

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

function getFieldByNeedles(needles: string[]) {
  return Array.from(document.querySelectorAll('input, textarea')).find((el) => {
    const input = el as HTMLInputElement | HTMLTextAreaElement;
    const text = `${input.placeholder || ''} ${input.getAttribute('aria-label') || ''} ${input.dataset.transferField || ''}`.toLowerCase();
    return needles.some((needle) => text.includes(needle.toLowerCase()));
  }) as HTMLInputElement | HTMLTextAreaElement | undefined;
}

function getPassengerInputsByOrder() {
  const heading = Array.from(document.querySelectorAll('h2')).find((h) => /passager|passenger|пассаж|راكب|乘客|pasajero|passegger|passagier|passageiro/i.test(h.textContent || ''));
  const container = heading?.closest('div.rounded-\[28px\]') || heading?.parentElement;
  const inputs = Array.from((container || document).querySelectorAll('input')).filter((input) => input.type !== 'checkbox') as HTMLInputElement[];
  return inputs;
}

function getPassengerField(field: keyof typeof passengerLabelNeedles) {
  const direct = getFieldByNeedles(passengerLabelNeedles[field]);
  if (direct) return direct;
  const inputs = getPassengerInputsByOrder();
  const index = field === 'lastName' ? 0 : field === 'firstName' ? 1 : field === 'phone' ? 2 : 3;
  return inputs[index];
}

function getInputValueByNeedles(needles: string[]) {
  return getFieldByNeedles(needles)?.value?.trim() || '';
}

function getPhoneInput() {
  return (getPassengerField('phone') || Array.from(document.querySelectorAll('input')).find((el) => el.dataset.transferPhone === 'true')) as HTMLInputElement | undefined;
}

function getDialInput() {
  return document.querySelector('[data-transfer-dial-code="true"]') as HTMLInputElement | null;
}

function buildInternationalPhone() {
  const phone = getPhoneInput();
  const dial = getDialInput()?.value?.trim() || '';
  const raw = phone?.value.trim() || '';
  if (raw.startsWith('+')) return raw.replace(/[\s().-]/g, '');
  const normalizedDial = dial.startsWith('+') ? dial : `+${dial.replace(/[^0-9]/g, '')}`;
  const local = raw.replace(/[^0-9]/g, '').replace(/^0+/, '');
  return `${normalizedDial}${local}`;
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

function markField(input: HTMLInputElement | HTMLTextAreaElement | undefined, invalid: boolean) {
  if (!input) return;
  input.style.borderColor = invalid ? '#dc2626' : '';
  input.style.boxShadow = invalid ? '0 0 0 4px rgba(220,38,38,0.10)' : '';
  input.setAttribute('aria-invalid', invalid ? 'true' : 'false');
}

function markDialInput(invalid: boolean) {
  const input = getDialInput();
  if (!input) return;
  input.style.borderColor = invalid ? '#dc2626' : '';
  input.style.boxShadow = invalid ? '0 0 0 4px rgba(220,38,38,0.10)' : '';
}

function isValidEmail(email: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email); }
function isValidInternationalPhone(phone: string) { return /^\+[1-9]\d{7,14}$/.test(phone.replace(/[\s().-]/g, '')); }

function requirePassengerDetails() {
  const fields = { lastName: getPassengerField('lastName'), firstName: getPassengerField('firstName'), phone: getPhoneInput(), email: getPassengerField('email') };
  const values = { lastName: fields.lastName?.value.trim() || '', firstName: fields.firstName?.value.trim() || '', phone: buildInternationalPhone(), email: fields.email?.value.trim() || '' };

  const invalidLastName = values.lastName.length < 2;
  const invalidFirstName = values.firstName.length < 2;
  const invalidPhone = !isValidInternationalPhone(values.phone);
  const invalidEmail = !isValidEmail(values.email);

  markField(fields.lastName, invalidLastName); markField(fields.firstName, invalidFirstName); markField(fields.phone, invalidPhone); markField(fields.email, invalidEmail); markDialInput(invalidPhone);

  const errors: string[] = [];
  if (invalidLastName) errors.push('Last name / Nom');
  if (invalidFirstName) errors.push('First name / Prénom');
  if (invalidPhone) errors.push('Phone with country code / Téléphone avec indicatif');
  if (invalidEmail) errors.push('Valid email / Email valide');
  if (errors.length) { fields.lastName?.scrollIntoView({ behavior: 'smooth', block: 'center' }); alert(`Please complete the required fields before payment:\n\n- ${errors.join('\n- ')}`); return null; }
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
  const lastName = getPassengerField('lastName') as HTMLInputElement | undefined;
  const firstName = getPassengerField('firstName') as HTMLInputElement | undefined;
  const targetPhone = getPhoneInput();
  const email = getPassengerField('email') as HTMLInputElement | undefined;

  if (lastName) { lastName.required = true; lastName.autocomplete = 'family-name'; lastName.dataset.transferField = 'lastName'; }
  if (firstName) { firstName.required = true; firstName.autocomplete = 'given-name'; firstName.dataset.transferField = 'firstName'; }
  if (targetPhone) {
    targetPhone.placeholder = 'Phone number *'; targetPhone.required = true; targetPhone.type = 'tel'; targetPhone.inputMode = 'tel'; targetPhone.autocomplete = 'tel-national'; targetPhone.dataset.transferPhone = 'true'; targetPhone.dataset.transferField = 'phone';
    if (!targetPhone.parentElement?.dataset.transferPhoneGroup) {
      const wrapper = document.createElement('div'); wrapper.dataset.transferPhoneGroup = 'true'; wrapper.className = 'grid grid-cols-[92px_1fr] gap-2 md:col-span-2';
      targetPhone.parentElement?.insertBefore(wrapper, targetPhone); wrapper.appendChild(createDialInput()); wrapper.appendChild(targetPhone);
    }
  }
  if (email) { email.required = true; email.type = 'email'; email.autocomplete = 'email'; email.dataset.transferField = 'email'; }
}

function findPaymentButton() {
  return Array.from(document.querySelectorAll('button')).find((button) => {
    const text = button.textContent?.trim().toLowerCase() || '';
    return paymentButtonNeedles.some((needle) => text.includes(needle));
  }) as HTMLButtonElement | undefined;
}

function addMobileSummaryButton() {
  if (document.querySelector('[data-transfer-mobile-next="true"]')) return;
  const backButton = Array.from(document.querySelectorAll('button')).find((button) => /retour|back|назад|رجوع|返回|zurück|volver|indietro|voltar/i.test(button.textContent || '')) as HTMLButtonElement | undefined;
  const summary = Array.from(document.querySelectorAll('aside')).find((aside) => /summary|résumé|итого|الملخص|摘要|zusammenfassung|resumen|riepilogo|resumo/i.test(aside.textContent || '')) as HTMLElement | undefined;
  if (!backButton || !summary || !findPaymentButton()) return;
  const next = document.createElement('button');
  next.type = 'button'; next.dataset.transferMobileNext = 'true'; next.textContent = 'Suivant';
  next.className = 'ml-2 rounded-2xl bg-black px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white md:hidden';
  next.onclick = () => summary.scrollIntoView({ behavior: 'smooth', block: 'start' });
  backButton.insertAdjacentElement('afterend', next);
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
  const tip = euroToNumber(getInputValueByNeedles(['pourboire', 'tip', 'чаевые', 'إكرامية', '小费', 'trinkgeld', 'propina', 'mancia', 'gorjeta']) || '0');

  if (!total) { alert('Please verify the amount before payment.'); return; }
  const original = button.innerHTML; button.disabled = true; button.innerHTML = 'Redirecting to Stripe...';

  try {
    const response = await fetch('/api/transfer/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ total, pickup: route.pickup || 'Pickup', dropoff: route.dropoff || 'Drop-off', vehicle: textAfter('Voiture :') || textAfter('Car :'), date: textAfter('Date :'), flightNumber: textAfter('Vol :') || textAfter('Flight :'), passengerCount: textAfter('Passagers :') || textAfter('Passengers :'), routeMinutes: duration.routeMinutes, distanceKm: duration.distanceKm, tollPrice, tip, firstName: passenger.firstName, lastName: passenger.lastName, phone: passenger.phone, email: passenger.email, note: getInputValueByNeedles(['note', 'special', 'souhait', 'примечание', 'ملاحظة', '备注']) }) });
    const data = await response.json(); if (!response.ok || !data.url) throw new Error(data.error || 'checkout_failed'); window.location.href = data.url;
  } catch {
    alert('Stripe payment is not available yet. Please verify the Stripe key in Vercel.'); button.disabled = false; button.innerHTML = original;
  }
}

export function TransferCheckoutEnhancer() {
  useEffect(() => {
    const observer = new MutationObserver(() => { modernizePassengerFields(); addMobileSummaryButton(); });
    observer.observe(document.body, { childList: true, subtree: true });
    modernizePassengerFields(); addMobileSummaryButton();
    const onClick = (event: MouseEvent) => { const button = (event.target as HTMLElement | null)?.closest('button') as HTMLButtonElement | null; if (!button || !findPaymentButton() || button !== findPaymentButton()) return; event.preventDefault(); event.stopPropagation(); startCheckout(button); };
    document.addEventListener('click', onClick, true);
    return () => { observer.disconnect(); document.removeEventListener('click', onClick, true); };
  }, []);
  return null;
}
