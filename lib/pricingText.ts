import type { Locale } from '@/lib/i18n';
import { getPricingAmount, getPricingLabel, getPricingShortLabel, pricingYear } from '@/data/pricing';

const monthlyPeriod: Record<Locale, string> = {
  fr: '/ mois',
  en: '/ month',
  ru: '/ месяц',
  ar: '/ شهر',
};

const annualPeriod: Record<Locale, string> = {
  fr: '/ an',
  en: '/ year',
  ru: '/ год',
  ar: '/ سنة',
};

export function annualAdmissionLine(locale: Locale, short = false) {
  const label = short ? getPricingShortLabel('annualAdmission', locale) : getPricingLabel('annualAdmission', locale);
  return `${label} : ${getPricingAmount('annualAdmission')}`;
}

export function monthlyRetainerLine(locale: Locale, short = false) {
  const label = short ? getPricingShortLabel('monthlyRetainer', locale) : getPricingLabel('monthlyRetainer', locale);
  return `${label} : ${getPricingAmount('monthlyRetainer')} ${monthlyPeriod[locale]}`;
}

export function privateDeskLine(locale: Locale, short = false) {
  const label = short ? getPricingShortLabel('privateDesk', locale) : getPricingLabel('privateDesk', locale);
  return `${label} : ${getPricingAmount('privateDesk')} ${annualPeriod[locale]}`;
}

export function privateDeskStartingText(locale: Locale) {
  const amount = getPricingAmount('privateDesk');
  if (locale === 'fr') return `à partir de ${amount} ${annualPeriod.fr}`;
  if (locale === 'en') return `from ${amount} ${annualPeriod.en}`;
  if (locale === 'ru') return `from ${amount} ${annualPeriod.ru}`;
  return `from ${amount} ${annualPeriod.ar}`;
}

export function formatPricingText(text: string, locale: Locale) {
  return text
    .replaceAll('{pricingYear}', pricingYear)
    .replaceAll('{annualAdmissionAmount}', getPricingAmount('annualAdmission'))
    .replaceAll('{monthlyRetainerAmount}', getPricingAmount('monthlyRetainer'))
    .replaceAll('{privateDeskAmount}', getPricingAmount('privateDesk'))
    .replaceAll('{annualAdmissionLine}', annualAdmissionLine(locale))
    .replaceAll('{monthlyRetainerLine}', monthlyRetainerLine(locale))
    .replaceAll('{privateDeskLine}', privateDeskLine(locale))
    .replaceAll('{privateDeskStarting}', privateDeskStartingText(locale))
    .replaceAll('10 000 USD', getPricingAmount('annualAdmission'))
    .replaceAll('10,000 USD', getPricingAmount('annualAdmission'))
    .replaceAll('1 000 USD', getPricingAmount('monthlyRetainer'))
    .replaceAll('1,000 USD', getPricingAmount('monthlyRetainer'))
    .replaceAll('6 000 USD', getPricingAmount('privateDesk'))
    .replaceAll('6,000 USD', getPricingAmount('privateDesk'));
}
