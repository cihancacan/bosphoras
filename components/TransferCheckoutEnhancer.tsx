'use client';

import { useEffect } from 'react';

const countryDialCodes = [
  { code: '+33', flag: '🇫🇷', label: 'France' },
  { code: '+90', flag: '🇹🇷', label: 'Turkey' },
  { code: '+7', flag: '🇰🇿', label: 'Kazakhstan' },
  { code: '+7', flag: '🇷🇺', label: 'Russia' },
  { code: '+44', flag: '🇬🇧', label: 'United Kingdom' },
  { code: '+49', flag: '🇩🇪', label: 'Germany' },
  { code: '+34', flag: '🇪🇸', label: 'Spain' },
  { code: '+39', flag: '🇮🇹', label: 'Italy' },
  { code: '+351', flag: '🇵🇹', label: 'Portugal' },
  { code: '+32', flag: '🇧🇪', label: 'Belgium' },
  { code: '+41', flag: '🇨🇭', label: 'Switzerland' },
  { code: '+31', flag: '🇳🇱', label: 'Netherlands' },
  { code: '+43', flag: '🇦🇹', label: 'Austria' },
  { code: '+46', flag: '🇸🇪', label: 'Sweden' },
  { code: '+47', flag: '🇳🇴', label: 'Norway' },
  { code: '+45', flag: '🇩🇰', label: 'Denmark' },
  { code: '+358', flag: '🇫🇮', label: 'Finland' },
  { code: '+48', flag: '🇵🇱', label: 'Poland' },
  { code: '+420', flag: '🇨🇿', label: 'Czech Republic' },
  { code: '+40', flag: '🇷🇴', label: 'Romania' },
  { code: '+359', flag: '🇧🇬', label: 'Bulgaria' },
  { code: '+30', flag: '🇬🇷', label: 'Greece' },
  { code: '+385', flag: '🇭🇷', label: 'Croatia' },
  { code: '+381', flag: '🇷🇸', label: 'Serbia' },
  { code: '+387', flag: '🇧🇦', label: 'Bosnia and Herzegovina' },
  { code: '+382', flag: '🇲🇪', label: 'Montenegro' },
  { code: '+383', flag: '🇽🇰', label: 'Kosovo' },
  { code: '+389', flag: '🇲🇰', label: 'North Macedonia' },
  { code: '+36', flag: '🇭🇺', label: 'Hungary' },
  { code: '+372', flag: '🇪🇪', label: 'Estonia' },
  { code: '+371', flag: '🇱🇻', label: 'Latvia' },
  { code: '+370', flag: '🇱🇹', label: 'Lithuania' },
  { code: '+380', flag: '🇺🇦', label: 'Ukraine' },
  { code: '+373', flag: '🇲🇩', label: 'Moldova' },
  { code: '+375', flag: '🇧🇾', label: 'Belarus' },
  { code: '+995', flag: '🇬🇪', label: 'Georgia' },
  { code: '+374', flag: '🇦🇲', label: 'Armenia' },
  { code: '+994', flag: '🇦🇿', label: 'Azerbaijan' },
  { code: '+996', flag: '🇰🇬', label: 'Kyrgyzstan' },
  { code: '+998', flag: '🇺🇿', label: 'Uzbekistan' },
  { code: '+992', flag: '🇹🇯', label: 'Tajikistan' },
  { code: '+993', flag: '🇹🇲', label: 'Turkmenistan' },
  { code: '+971', flag: '🇦🇪', label: 'United Arab Emirates' },
  { code: '+966', flag: '🇸🇦', label: 'Saudi Arabia' },
  { code: '+974', flag: '🇶🇦', label: 'Qatar' },
  { code: '+965', flag: '🇰🇼', label: 'Kuwait' },
  { code: '+973', flag: '🇧🇭', label: 'Bahrain' },
  { code: '+968', flag: '🇴🇲', label: 'Oman' },
  { code: '+962', flag: '🇯🇴', label: 'Jordan' },
  { code: '+961', flag: '🇱🇧', label: 'Lebanon' },
  { code: '+20', flag: '🇪🇬', label: 'Egypt' },
  { code: '+212', flag: '🇲🇦', label: 'Morocco' },
  { code: '+213', flag: '🇩🇿', label: 'Algeria' },
  { code: '+216', flag: '🇹🇳', label: 'Tunisia' },
  { code: '+1', flag: '🇺🇸', label: 'United States' },
  { code: '+1', flag: '🇨🇦', label: 'Canada' },
  { code: '+52', flag: '🇲🇽', label: 'Mexico' },
  { code: '+55', flag: '🇧🇷', label: 'Brazil' },
  { code: '+54', flag: '🇦🇷', label: 'Argentina' },
  { code: '+56', flag: '🇨🇱', label: 'Chile' },
  { code: '+57', flag: '🇨🇴', label: 'Colombia' },
  { code: '+51', flag: '🇵🇪', label: 'Peru' },
  { code: '+598', flag: '🇺🇾', label: 'Uruguay' },
  { code: '+86', flag: '🇨🇳', label: 'China' },
  { code: '+852', flag: '🇭🇰', label: 'Hong Kong' },
  { code: '+886', flag: '🇹🇼', label: 'Taiwan' },
  { code: '+81', flag: '🇯🇵', label: 'Japan' },
  { code: '+82', flag: '🇰🇷', label: 'South Korea' },
  { code: '+91', flag: '🇮🇳', label: 'India' },
  { code: '+92', flag: '🇵🇰', label: 'Pakistan' },
  { code: '+880', flag: '🇧🇩', label: 'Bangladesh' },
  { code: '+62', flag: '🇮🇩', label: 'Indonesia' },
  { code: '+60', flag: '🇲🇾', label: 'Malaysia' },
  { code: '+65', flag: '🇸🇬', label: 'Singapore' },
  { code: '+66', flag: '🇹🇭', label: 'Thailand' },
  { code: '+84', flag: '🇻🇳', label: 'Vietnam' },
  { code: '+63', flag: '🇵🇭', label: 'Philippines' },
  { code: '+61', flag: '🇦🇺', label: 'Australia' },
  { code: '+64', flag: '🇳🇿', label: 'New Zealand' },
  { code: '+27', flag: '🇿🇦', label: 'South Africa' },
  { code: '+234', flag: '🇳🇬', label: 'Nigeria' },
  { code: '+254', flag: '🇰🇪', label: 'Kenya' },
  { code: '+233', flag: '🇬🇭', label: 'Ghana' },
  { code: '+221', flag: '🇸🇳', label: 'Senegal' },
  { code: '+225', flag: '🇨🇮', label: 'Côte d’Ivoire' },
];

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

function getInput(placeholder: string) {
  return Array.from(document.querySelectorAll('input, textarea')).find((el) =>
    (el as HTMLInputElement).placeholder?.toLowerCase() === placeholder.toLowerCase()
  ) as HTMLInputElement | HTMLTextAreaElement | undefined;
}

function getInputValue(placeholder: string) {
  return getInput(placeholder)?.value?.trim() || '';
}

function getPhoneInput() {
  return Array.from(document.querySelectorAll('input')).find((el) =>
    el.placeholder?.toLowerCase().includes('téléphone') ||
    el.placeholder?.toLowerCase().includes('numero') ||
    el.placeholder?.toLowerCase().includes('numéro') ||
    el.dataset.transferPhone === 'true'
  ) as HTMLInputElement | undefined;
}

function getDialSelect() {
  return document.querySelector('[data-transfer-dial-code="true"]') as HTMLSelectElement | null;
}

function buildInternationalPhone() {
  const phone = getPhoneInput();
  const dial = getDialSelect()?.value || '';
  const raw = phone?.value.trim() || '';
  if (raw.startsWith('+')) return raw.replace(/[\s().-]/g, '');
  const local = raw.replace(/[^0-9]/g, '').replace(/^0+/, '');
  return `${dial}${local}`;
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

function markField(input: HTMLInputElement | HTMLTextAreaElement | undefined, invalid: boolean) {
  if (!input) return;
  input.style.borderColor = invalid ? '#dc2626' : '';
  input.style.boxShadow = invalid ? '0 0 0 4px rgba(220,38,38,0.10)' : '';
  input.setAttribute('aria-invalid', invalid ? 'true' : 'false');
}

function markDialSelect(invalid: boolean) {
  const select = getDialSelect();
  if (!select) return;
  select.style.borderColor = invalid ? '#dc2626' : '';
  select.style.boxShadow = invalid ? '0 0 0 4px rgba(220,38,38,0.10)' : '';
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidInternationalPhone(phone: string) {
  const normalized = phone.replace(/[\s().-]/g, '');
  return /^\+[1-9]\d{7,14}$/.test(normalized);
}

function requirePassengerDetails() {
  const fields = {
    lastName: getInput('Nom *') || getInput('Nom'),
    firstName: getInput('Prénom *') || getInput('Prénom'),
    phone: getPhoneInput(),
    email: getInput('Email *') || getInput('Email'),
  };

  const values = {
    lastName: fields.lastName?.value.trim() || '',
    firstName: fields.firstName?.value.trim() || '',
    phone: buildInternationalPhone(),
    email: fields.email?.value.trim() || '',
  };

  const errors: string[] = [];
  const invalidLastName = values.lastName.length < 2;
  const invalidFirstName = values.firstName.length < 2;
  const invalidPhone = !isValidInternationalPhone(values.phone);
  const invalidEmail = !isValidEmail(values.email);

  markField(fields.lastName, invalidLastName);
  markField(fields.firstName, invalidFirstName);
  markField(fields.phone, invalidPhone);
  markField(fields.email, invalidEmail);
  markDialSelect(invalidPhone);

  if (invalidLastName) errors.push('Nom');
  if (invalidFirstName) errors.push('Prénom');
  if (invalidPhone) errors.push('Téléphone avec indicatif pays, exemple +33 6 12 34 56 78');
  if (invalidEmail) errors.push('Adresse email valide');

  if (errors.length) {
    fields.lastName?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    alert(`Merci de compléter les champs obligatoires avant le paiement :\n\n- ${errors.join('\n- ')}`);
    return null;
  }

  return values;
}

function createDialSelect() {
  const select = document.createElement('select');
  select.dataset.transferDialCode = 'true';
  select.className = 'h-14 rounded-2xl border border-gray-200 bg-gray-50 px-3 text-sm font-black text-gray-900 outline-none focus:border-black';
  select.setAttribute('aria-label', 'Indicatif pays');
  select.style.minWidth = '116px';

  countryDialCodes.forEach((country) => {
    const option = document.createElement('option');
    option.value = country.code;
    option.textContent = `${country.flag} ${country.code}`;
    option.title = country.label;
    select.appendChild(option);
  });

  select.value = '+33';
  return select;
}

function modernizePassengerFields() {
  const phone = getInput('Téléphone') as HTMLInputElement | undefined;
  const currentPhone = getPhoneInput();
  const targetPhone = phone || currentPhone;
  const email = (getInput('Email') || getInput('Email *')) as HTMLInputElement | undefined;
  const lastName = (getInput('Nom') || getInput('Nom *')) as HTMLInputElement | undefined;
  const firstName = (getInput('Prénom') || getInput('Prénom *')) as HTMLInputElement | undefined;

  if (lastName) {
    lastName.placeholder = 'Nom *';
    lastName.required = true;
    lastName.autocomplete = 'family-name';
  }
  if (firstName) {
    firstName.placeholder = 'Prénom *';
    firstName.required = true;
    firstName.autocomplete = 'given-name';
  }
  if (targetPhone) {
    targetPhone.placeholder = 'Numéro de téléphone *';
    targetPhone.required = true;
    targetPhone.type = 'tel';
    targetPhone.inputMode = 'tel';
    targetPhone.autocomplete = 'tel-national';
    targetPhone.dataset.transferPhone = 'true';

    if (!targetPhone.parentElement?.dataset.transferPhoneGroup) {
      const wrapper = document.createElement('div');
      wrapper.dataset.transferPhoneGroup = 'true';
      wrapper.className = 'grid grid-cols-[116px_1fr] gap-2 md:col-span-2';
      targetPhone.parentElement?.insertBefore(wrapper, targetPhone);
      wrapper.appendChild(createDialSelect());
      wrapper.appendChild(targetPhone);
    }
  }
  if (email) {
    email.placeholder = 'Email *';
    email.required = true;
    email.type = 'email';
    email.autocomplete = 'email';
  }
}

async function startCheckout(button: HTMLButtonElement) {
  modernizePassengerFields();
  const passenger = requirePassengerDetails();
  if (!passenger) return;

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
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        phone: passenger.phone,
        email: passenger.email,
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
    const observer = new MutationObserver(modernizePassengerFields);
    observer.observe(document.body, { childList: true, subtree: true });
    modernizePassengerFields();

    const onClick = (event: MouseEvent) => {
      const button = (event.target as HTMLElement | null)?.closest('button') as HTMLButtonElement | null;
      if (!button || !button.textContent?.toLowerCase().includes('payer et confirmer')) return;
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
