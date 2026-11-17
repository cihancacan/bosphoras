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

export interface ProjectUnitOption {
  label: string;
  bedrooms?: number;
  bathrooms?: number;
  areaM2?: number;
  price?: number;
  currency?: string;
  availability: 'confirmed' | 'on_request';
  source: 'unit' | 'source_offer';
}

export interface PropertyListing {
  projectId?: string;
  projectAmenityCodes?: string[];
  publicListingId?: string;
  projectPriceMax?: number;
  projectLatitude?: number;
  projectLongitude?: number;
  projectUnitOptions?: ProjectUnitOption[];
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

export function isInternationalProperty(property: Pick<PropertyListing,'countryCode'|'countryName'>): boolean {
  return property.countryCode ? property.countryCode.toUpperCase() !== 'TR' : Boolean(property.countryName && !/^(turkey|türkiye|turquie|турция|تركيا)$/i.test(property.countryName.trim()));
}

export function getPropertyPath(locale: Locale, property: PropertyListing, global = isInternationalProperty(property)): string {
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

  const format = (value:number) => new Intl.NumberFormat(
    locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : locale === 'ar' ? 'ar' : 'en-GB',
    { style: 'currency', currency: property.currency, maximumFractionDigits: 0 }
  ).format(value);
  const fromLabel = locale === 'fr' ? 'À partir de ' : locale === 'en' ? 'From ' : locale === 'ru' ? 'От ' : 'ابتداءً من ';
  if(property.projectId) {
    const low=property.totalPrice;
    const high=property.projectPriceMax;
    const observed = locale==='fr'?'Prix indicatif repéré : ':locale==='en'?'Indicative observed price: ':locale==='ru'?'Ориентировочная цена: ':'سعر إرشادي: ';
    return high && high>low ? format(low)+' – '+format(high) : observed + format(low);
  }
  return format(property.totalPrice);
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

const propertyCityNames: Record<string,Record<Locale,string>> = {
 istanbul:{fr:'Istanbul',en:'Istanbul',ru:'Стамбул',ar:'إسطنبول'},
 bodrum:{fr:'Bodrum',en:'Bodrum',ru:'Бодрум',ar:'بودروم'},
 antalya:{fr:'Antalya',en:'Antalya',ru:'Анталья',ar:'أنطاليا'},
 dubai:{fr:'Dubaï',en:'Dubai',ru:'Дубай',ar:'دبي'},
};
const propertyDistrictNames:Record<string,Record<Locale,string>>={
 buyukcekmece:{fr:'Büyükçekmece',en:'Büyükçekmece',ru:'Бююкчекмедже',ar:'بيوك تشكمجه'},
 yalikavak:{fr:'Yalıkavak',en:'Yalıkavak',ru:'Ялыкавак',ar:'ياليكافاك'},
 'al jaddaf':{fr:'Al Jaddaf',en:'Al Jaddaf',ru:'Аль-Джадаф',ar:'الجداف'},
 'business bay':{fr:'Business Bay',en:'Business Bay',ru:'Бизнес-Бей',ar:'الخليج التجاري'},
 'binghatti hills':{fr:'Binghatti Hills',en:'Binghatti Hills',ru:'Binghatti Hills',ar:'بن غاطي هيلز'},
 'damac hills 2 (akoya by damac)':{fr:'DAMAC Hills 2 (Akoya by DAMAC)',en:'DAMAC Hills 2 (Akoya by DAMAC)',ru:'DAMAC Hills 2 (Akoya by DAMAC)',ar:'داماك هيلز 2 (أكويا من داماك)'},
 'dubai land residence complex (dlrc)':{fr:'Dubai Land Residence Complex (DLRC)',en:'Dubai Land Residence Complex (DLRC)',ru:'Dubai Land Residence Complex (DLRC)',ar:'مجمع دبي لاند السكني (DLRC)'},
 'nad al sheba gardens':{fr:'Nad Al Sheba Gardens',en:'Nad Al Sheba Gardens',ru:'Nad Al Sheba Gardens',ar:'ند الشبا غاردنز'},
 'the valley by emaar':{fr:'The Valley by Emaar',en:'The Valley by Emaar',ru:'The Valley by Emaar',ar:'ذا فالي من إعمار'},
 'dubai silicon oasis (dso)':{fr:'Dubai Silicon Oasis (DSO)',en:'Dubai Silicon Oasis (DSO)',ru:'Dubai Silicon Oasis (DSO)',ar:'واحة دبي للسيليكون (DSO)'},
};
function propertyPlaceKey(value:string){return value.toLowerCase().replace(/ı/g,'i').normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim();}
export function propertyCountryLabel(property:PropertyListing,locale:Locale){const name=property.countryName||property.countryCode;try{return /^[A-Z]{2}$/.test(property.countryCode)?new Intl.DisplayNames([locale],{type:'region'}).of(property.countryCode)||name:name;}catch{return name;}}
export function propertyCityLabel(property:PropertyListing,locale:Locale){const name=property.cityName||property.city||'';return propertyCityNames[propertyPlaceKey(name)]?.[locale]||propertyCityNames[propertyPlaceKey(property.city||'')]?.[locale]||name;}
export function propertyDistrictLabel(property:PropertyListing,locale:Locale){const name=property.district||'';return propertyDistrictNames[propertyPlaceKey(name)]?.[locale]||name;}
export function propertyLocationLabel(property: PropertyListing, locale?:Locale): string {
  return (locale?[propertyDistrictLabel(property,locale),propertyCityLabel(property,locale),propertyCountryLabel(property,locale)]:[property.district,property.cityName,property.countryName]).filter(Boolean).join(' · ');
}
export function propertyUnitLabel(label:string,locale:Locale){const key=label.trim();if(/^studio$/i.test(key))return {fr:'Studio',en:'Studio',ru:'Студия',ar:'استوديو'}[locale];if(/^(typologie sur demande|unit types? on request|on request)$/i.test(key))return {fr:'Typologie sur demande',en:'Unit type on request',ru:'Тип квартиры по запросу',ar:'نوع الوحدة عند الطلب'}[locale];const m=key.match(/^(\d+)\s*(?:BR|bedrooms?)$/i);if(!m)return label;const n=Number(m[1]);if(locale==='ru'){const k=n%10,t=n%100;return n+' '+(t>=11&&t<=14?'спален':k===1?'спальня':k>=2&&k<=4?'спальни':'спален');}if(locale==='ar')return n===1?'غرفة نوم واحدة':n===2?'غرفتا نوم':new Intl.NumberFormat('ar').format(n)+' غرف نوم';return n+(locale==='fr'?(n===1?' chambre':' chambres'):(n===1?' bedroom':' bedrooms'));}
export function propertyDeliveryLabel(value:LocalizedText|undefined,locale:Locale){const text=value?.[locale]||'';if(!/^\d{4}-\d{2}-\d{2}$/.test(text))return text;const date=new Date(text+'T00:00:00Z');if(Number.isNaN(date.getTime()))return text;return new Intl.DateTimeFormat(locale==='fr'?'fr-FR':locale==='en'?'en-GB':locale==='ru'?'ru-RU':'ar',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC',calendar:'gregory'}).format(date);}


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
