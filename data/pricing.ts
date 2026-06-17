import type { Locale } from '@/lib/i18n';

export type PricingKey = 'annualAdmission' | 'monthlyRetainer' | 'privateDesk';

export type PricingItem = {
  key: PricingKey;
  year: '2026';
  amount: string;
  period?: string;
  labels: Record<Locale, string>;
  shortLabels: Record<Locale, string>;
  descriptions: Record<Locale, string>;
};

export const pricingYear = '2026' as const;

export const pricing: Record<PricingKey, PricingItem> = {
  annualAdmission: {
    key: 'annualAdmission',
    year: pricingYear,
    amount: '15,000 USD',
    period: pricingYear,
    labels: {
      fr: 'Adhésion annuelle 2026',
      en: 'Annual admission 2026',
      ru: 'Ежегодное вступление 2026',
      ar: 'الاشتراك السنوي 2026',
    },
    shortLabels: {
      fr: 'Adhésion 2026',
      en: 'Admission 2026',
      ru: 'Вступление 2026',
      ar: 'اشتراك 2026',
    },
    descriptions: {
      fr: 'Accès au cercle privé Bosphoras, qualification du dossier et ouverture de la relation client.',
      en: 'Access to the Bosphoras private circle, client qualification and relationship onboarding.',
      ru: 'Доступ к закрытому кругу Bosphoras, квалификация профиля и начало сопровождения.',
      ar: 'الدخول إلى الدائرة الخاصة في Bosphoras، دراسة الملف وبدء العلاقة مع العميل.',
    },
  },
  monthlyRetainer: {
    key: 'monthlyRetainer',
    year: pricingYear,
    amount: '3,500 USD',
    period: 'monthly',
    labels: {
      fr: 'Retainer mensuel 2026',
      en: 'Monthly retainer 2026',
      ru: 'Ежемесячный retainer 2026',
      ar: 'الرسوم الشهرية 2026',
    },
    shortLabels: {
      fr: 'Retainer mensuel 2026',
      en: 'Monthly retainer 2026',
      ru: 'Ежемесячный retainer 2026',
      ar: 'الرسوم الشهرية 2026',
    },
    descriptions: {
      fr: 'Accompagnement mensuel prioritaire, coordination privée et suivi des sujets Turquie.',
      en: 'Priority monthly support, private coordination and follow-up on Turkey-related matters.',
      ru: 'Ежемесячное приоритетное сопровождение, частная координация и контроль задач по Турции.',
      ar: 'متابعة شهرية ذات أولوية، تنسيق خاص ومتابعة الملفات المتعلقة بتركيا.',
    },
  },
  privateDesk: {
    key: 'privateDesk',
    year: pricingYear,
    amount: '7,500 USD',
    period: pricingYear,
    labels: {
      fr: 'Private Desk 2026',
      en: 'Private Desk 2026',
      ru: 'Private Desk 2026',
      ar: 'Private Desk 2026',
    },
    shortLabels: {
      fr: 'Private Desk 2026',
      en: 'Private Desk 2026',
      ru: 'Private Desk 2026',
      ar: 'Private Desk 2026',
    },
    descriptions: {
      fr: 'Bureau privé Turquie 360° pour investisseurs, familles patrimoniales et clients internationaux.',
      en: '360° private Turkey desk for investors, wealth families and international clients.',
      ru: 'Частный офис 360° по Турции для инвесторов, состоятельных семей и международных клиентов.',
      ar: 'مكتب خاص 360° في تركيا للمستثمرين والعائلات الثرية والعملاء الدوليين.',
    },
  },
};

export function getPricingItem(key: PricingKey) {
  return pricing[key];
}

export function getPricingLabel(key: PricingKey, locale: Locale) {
  return pricing[key].labels[locale];
}

export function getPricingShortLabel(key: PricingKey, locale: Locale) {
  return pricing[key].shortLabels[locale];
}

export function getPricingAmount(key: PricingKey) {
  return pricing[key].amount;
}

export function getPricingDescription(key: PricingKey, locale: Locale) {
  return pricing[key].descriptions[locale];
}

export const pricingList = [pricing.annualAdmission, pricing.monthlyRetainer, pricing.privateDesk];
