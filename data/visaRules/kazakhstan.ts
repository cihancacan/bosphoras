import type { Locale } from '@/lib/i18n';

export const kazakhstanTurkeyVisaRule = {
  keys: ['kazakh-citizens-turkey-visa', 'kazakh-citizens-turkey-residence', 'kazakh-investors-turkey-residence-tax'],
  country: { fr: 'Kazakhstanais', en: 'Kazakh citizens', ru: 'Kazakh citizens', ar: 'Kazakh citizens' } as Record<Locale, string>,
  summary: {
    fr: 'Un citoyen kazakh avec passeport ordinaire ou officiel peut entrer en Turquie sans visa jusqu a 90 jours sur une periode de 180 jours. Pour vivre plus longtemps, il faut preparer un ikamet.',
    en: 'Kazakh ordinary and official passport holders can enter Turkey visa free up to 90 days within a 180 day period. For a longer stay, ikamet must be prepared.',
    ru: 'Kazakh ordinary and official passport holders can enter Turkey visa free up to 90 days within a 180 day period. For a longer stay, ikamet must be prepared.',
    ar: 'Kazakh ordinary and official passport holders can enter Turkey visa free up to 90 days within a 180 day period. For a longer stay, ikamet must be prepared.'
  } as Record<Locale, string>,
  rules: {
    fr: ['Passeport ordinaire kazakh : sans visa 90 jours sur 180.', 'Passeport officiel kazakh : sans visa 90 jours sur 180.', 'Pour installation longue : ikamet avant expiration.', 'Attention au calcul des jours deja passes en Turquie.'],
    en: ['Kazakh ordinary passport: visa free 90 days within 180.', 'Kazakh official passport: visa free 90 days within 180.', 'Long relocation: ikamet before expiry.', 'Previous days spent in Turkey must be counted.'],
    ru: ['Kazakh ordinary passport: visa free 90 days within 180.', 'Kazakh official passport: visa free 90 days within 180.', 'Long relocation: ikamet before expiry.', 'Previous days spent in Turkey must be counted.'],
    ar: ['Kazakh ordinary passport: visa free 90 days within 180.', 'Kazakh official passport: visa free 90 days within 180.', 'Long relocation: ikamet before expiry.', 'Previous days spent in Turkey must be counted.']
  } as Record<Locale, string[]>
};
