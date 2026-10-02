import type { Locale } from '@/lib/i18n';

export type PropertyCity = 'istanbul' | 'bodrum' | 'antalya';
export type PropertyCollection = 'selected-investment' | 'signature' | 'private';
export type PropertyTransaction = 'sale' | 'rent';
export type PropertyStatus = 'available' | 'reserved' | 'sold' | 'private';
export type PropertyType = 'apartment' | 'villa' | 'residence' | 'penthouse' | 'commercial';

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
  city: PropertyCity;
  district: string;
  slugs: Record<Locale, string>;
  title: LocalizedText;
  shortTitle?: LocalizedText;
  summary: LocalizedText;
  description: LocalizedText;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
  currency: 'EUR' | 'USD' | 'TRY' | 'GBP' | 'CHF' | 'AED';
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

export const propertyListings: PropertyListing[] = [];

export function getPublishedProperties(): PropertyListing[] {
  return propertyListings.filter((property) => property.published);
}

export function getPropertyBySlug(locale: Locale, slug: string): PropertyListing | undefined {
  const normalized = slug.replace(/^\//, '').replace(/\/$/, '');
  return getPublishedProperties().find((property) => property.slugs[locale].replace(/^\//, '').replace(/\/$/, '') === normalized);
}

export function getPropertyPath(locale: Locale, property: PropertyListing): string {
  const hub = propertyHubPaths[locale];
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
