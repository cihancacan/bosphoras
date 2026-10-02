import type { Locale } from '@/lib/i18n';

export type PropertyCollection = 'selected-investment' | 'signature' | 'private';
export type PropertyTransaction = 'sale' | 'rent';
export type PropertyStatus = 'available' | 'reserved' | 'sold' | 'private';
export type PropertyType = 'apartment' | 'villa' | 'residence' | 'penthouse' | 'commercial';
export type PaymentInterestMode = 'not_specified' | 'interest_free' | 'interest_bearing';

export type LocalizedText = Record<Locale, string>;

export interface PropertyPaymentStep {
  label: LocalizedText;
  amount?: number;
  percentage?: number;
  due: LocalizedText;
}

export interface PropertyListing {
  id: string;
  published: boolean;
  featured?: boolean;
  status: PropertyStatus;
  collection: PropertyCollection;
  transaction: PropertyTransaction;
  propertyType: PropertyType;
  countryCode: string;
  countryName: string;
  city: string;
  cityName: string;
  district: string;
  slugs: Record<Locale, string>;
  title: LocalizedText;
  shortTitle?: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
  currency: 'EUR' | 'USD' | 'TRY' | 'GBP' | 'CHF' | 'AED' | 'KZT' | 'GEL';
  totalPrice?: number;
  priceOnRequest?: boolean;
  entryCapital?: number;
  surfaceM2?: number;
  bedrooms?: number;
  bathrooms?: number;
  delivery?: LocalizedText;
  developer?: string;
  partner?: string;
  sourceUrl?: string;
  sourceHost?: string;
  sourceLastCheckedAt?: string;
  sourcePartnerName?: string;
  paymentPlan?: PropertyPaymentStep[];
  paymentPlanEnabled?: boolean;
  paymentInterestMode?: PaymentInterestMode;
  paymentInterestRate?: number;
  cashDiscountPct?: number;
  cashPrice?: number;
  installmentPrice?: number;
  paymentNotes?: LocalizedText;
  highlights?: LocalizedText[];
  technicalNotes?: LocalizedText[];
  strengths?: LocalizedText[];
  watchpoints?: LocalizedText[];
  images: string[];
  heroImage?: string;
  verifiedAt?: string;
  publishedAt?: string;
  updatedAt: string;
}

export const propertyHubPaths: Record<Locale, string> = {
  fr: '/immobilier-turquie',
  en: '/property-turkey',
  ru: '/nedvizhimost-v-turtsii',
  ar: '/عقارات-تركيا',
};

export const globalPropertyHubPaths: Record<Locale, string> = {
  fr: '/investissement-immobilier-international',
  en: '/international-property-investment',
  ru: '/zarubezhnaya-nedvizhimost-investitsii',
  ar: '/الاستثمار-العقاري-الدولي',
};

export const propertyListings: PropertyListing[] = [];

export function getPublishedProperties(): PropertyListing[] {
  return propertyListings.filter((property) => property.published);
}

export function getPropertyBySlug(locale: Locale, slug: string): PropertyListing | undefined {
  const normalized = slug.replace(/^\//, '').replace(/\/$/, '');
  return getPublishedProperties().find((property) => property.slugs[locale].replace(/^\//, '').replace(/\/$/, '') === normalized);
}

export function getPropertyPath(locale: Locale, property: PropertyListing, global = false): string {
  const hub = global ? globalPropertyHubPaths[locale] : propertyHubPaths[locale];
  const slug = property.slugs[locale].replace(/^\//, '');
  return `${hub}/${slug}`;
}

export function formatPropertyPrice(property: PropertyListing, locale: Locale): string {
  if (property.priceOnRequest || !property.totalPrice) {
    return locale === 'fr'
      ? 'Prix sur demande'
      : locale === 'en'
      ? 'Price on request'
      : locale === 'ru'
      ? 'Цена по запросу'
      : 'السعر عند الطلب';
  }

  return new Intl.NumberFormat(
    locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : locale === 'ar' ? 'ar' : 'en-GB',
    {
      style: 'currency',
      currency: property.currency,
      maximumFractionDigits: 0,
    }
  ).format(property.totalPrice);
}

export function formatEntryCapital(property: PropertyListing, locale: Locale): string | null {
  if (!property.entryCapital) return null;
  const amount = new Intl.NumberFormat(
    locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : locale === 'ar' ? 'ar' : 'en-GB',
    {
      style: 'currency',
      currency: property.currency,
      maximumFractionDigits: 0,
    }
  ).format(property.entryCapital);

  return locale === 'fr'
    ? `Capital aujourd’hui : ${amount}`
    : locale === 'en'
    ? `Capital today: ${amount}`
    : locale === 'ru'
    ? `Капитал сегодня: ${amount}`
    : `رأس المال اليوم: ${amount}`;
}

export function propertyLocationLabel(property: PropertyListing): string {
  return [property.district, property.cityName, property.countryName].filter(Boolean).join(' · ');
}

export function paymentBadge(property: PropertyListing, locale: Locale): string | null {
  if (!property.paymentPlanEnabled) return null;
  if (property.paymentInterestMode === 'interest_free') {
    return locale === 'fr' ? 'Échelonnement 0 %' : locale === 'en' ? '0% instalments' : locale === 'ru' ? 'Рассрочка 0%' : 'تقسيط 0٪';
  }
  if (property.paymentInterestMode === 'interest_bearing' && property.paymentInterestRate !== undefined) {
    return locale === 'fr'
      ? `Échelonnement avec taux ${property.paymentInterestRate}%`
      : locale === 'en'
      ? `Instalments at ${property.paymentInterestRate}%`
      : locale === 'ru'
      ? `Рассрочка ${property.paymentInterestRate}%`
      : `تقسيط بنسبة ${property.paymentInterestRate}٪`;
  }
  return locale === 'fr' ? 'Plan de paiement disponible' : locale === 'en' ? 'Payment plan available' : locale === 'ru' ? 'Есть рассрочка' : 'خطة دفع متاحة';
}
