import type { Locale } from '@/lib/i18n';

export const ukTurkeyVisaRule = {
  keys: ['british-citizens-turkey-visa', 'british-citizens-turkey-residence', 'uk-investors-turkey-residence-tax'],
  country: { fr: 'Anglais / citoyens britanniques', en: 'British citizens', ru: 'Британцы', ar: 'البريطانيون' } as Record<Locale, string>,
  summary: {
    fr: 'Un citoyen britannique avec passeport ordinaire peut entrer en Turquie sans visa pour un voyage touristique jusqu’à 90 jours sur 180. Les passeports diplomatiques ou officiels ne suivent pas cette règle et doivent être vérifiés séparément.',
    en: 'A British citizen with an ordinary passport can enter Turkey visa-free for touristic travel up to 90 days within 180 days. Diplomatic or official passports do not follow the same rule and must be checked separately.',
    ru: 'Гражданин Великобритании с обычным паспортом может въехать в Турцию без визы для туризма до 90 дней в течение 180 дней. Дипломатические или официальные паспорта нужно проверять отдельно.',
    ar: 'المواطن البريطاني بجواز عادي يمكنه دخول تركيا بدون تأشيرة للسياحة حتى 90 يوماً خلال 180 يوماً. الجوازات الدبلوماسية أو الرسمية يجب فحصها بشكل منفصل.'
  } as Record<Locale, string>,
  rules: {
    fr: ['Passeport ordinaire britannique : sans visa jusqu’à 90 jours sur 180.', 'Passeport diplomatique ou officiel britannique : visa à vérifier avant départ.', 'Le séjour sans visa ne donne pas le droit de travailler.', 'Pour rester plus longtemps : demande de résidence / ikamet avant expiration.', 'Bosphoras vérifie le passeport, les jours déjà passés et le projet réel.'],
    en: ['Ordinary UK passport: visa-free up to 90 days within 180.', 'UK diplomatic or official passport: visa must be checked before travel.', 'Visa-free stay does not grant the right to work.', 'Longer stay: residence permit / ikamet before expiry.', 'Bosphoras checks passport type, previous days and the real project.'],
    ru: ['Обычный паспорт UK: без визы до 90 дней в 180.', 'Дипломатический или официальный паспорт UK: визу нужно проверить до поездки.', 'Безвизовый въезд не дает права работать.', 'Долгое пребывание: ВНЖ / ikamet до окончания срока.', 'Bosphoras проверяет паспорт, дни пребывания и реальный проект.'],
    ar: ['الجواز البريطاني العادي: بدون تأشيرة حتى 90 يوماً خلال 180.', 'الجواز الدبلوماسي أو الرسمي البريطاني: يجب فحص التأشيرة قبل السفر.', 'الدخول بدون تأشيرة لا يعطي حق العمل.', 'للبقاء أطول: إقامة / إيكامت قبل انتهاء المدة.', 'يفحص Bosphoras نوع الجواز والأيام السابقة والمشروع الحقيقي.']
  } as Record<Locale, string[]>
};
