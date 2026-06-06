import type { Locale } from '@/lib/i18n';

export const franceTurkeyVisaRule = {
  keys: ['french-citizens-turkey-visa', 'french-citizens-turkey-residence', 'french-investors-turkey-residence-tax'],
  country: { fr: 'Francais', en: 'French citizens', ru: 'French citizens', ar: 'French citizens' } as Record<Locale, string>,
  summary: {
    fr: 'Un citoyen francais avec passeport ordinaire ou officiel peut generalement voyager en Turquie sans visa jusqu a 90 jours. Cette entree courte ne remplace pas un titre de sejour.',
    en: 'French ordinary and official passport holders are generally visa exempt for travel to Turkey up to 90 days. This short stay does not replace a residence permit.',
    ru: 'French ordinary and official passport holders are generally visa exempt for travel to Turkey up to 90 days. This short stay does not replace a residence permit.',
    ar: 'French ordinary and official passport holders are generally visa exempt for travel to Turkey up to 90 days. This short stay does not replace a residence permit.'
  } as Record<Locale, string>,
  rules: {
    fr: ['Passeport ordinaire francais : sans visa jusqu a 90 jours.', 'Passeport officiel francais : sans visa jusqu a 90 jours.', 'Pour rester plus longtemps : preparer l ikamet avant expiration.'],
    en: ['French ordinary passport: visa free up to 90 days.', 'French official passport: visa free up to 90 days.', 'Longer stay: prepare ikamet before expiry.'],
    ru: ['French ordinary passport: visa free up to 90 days.', 'French official passport: visa free up to 90 days.', 'Longer stay: prepare ikamet before expiry.'],
    ar: ['French ordinary passport: visa free up to 90 days.', 'French official passport: visa free up to 90 days.', 'Longer stay: prepare ikamet before expiry.']
  } as Record<Locale, string[]>
};
