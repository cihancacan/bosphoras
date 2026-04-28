export type Locale = 'fr' | 'en' | 'ru' | 'ar';

export const defaultLocale: Locale = 'fr';

export const locales: Locale[] = ['fr', 'en', 'ru', 'ar'];

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  ru: 'Русский',
  ar: 'العربية',
};

export const localeDir: Record<Locale, 'ltr' | 'rtl'> = {
  fr: 'ltr',
  en: 'ltr',
  ru: 'ltr',
  ar: 'rtl',
};

export const localePrefixes: Record<Locale, string> = {
  fr: '',
  en: '/en',
  ru: '/ru',
  ar: '/ar',
};

export type TranslationKey =
  | 'nav.services'
  | 'nav.cities'
  | 'nav.membership'
  | 'nav.about'
  | 'nav.contact'
  | 'nav.assessment'
  | 'hero.tagline'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'hero.cta_secondary'
  | 'trust.clients'
  | 'trust.years'
  | 'trust.cities'
  | 'trust.confidential'
  | 'trust.clients_label'
  | 'trust.years_label'
  | 'trust.cities_label'
  | 'trust.confidential_label'
  | 'services.title'
  | 'services.subtitle'
  | 'cities.title'
  | 'cities.subtitle'
  | 'membership.title'
  | 'membership.subtitle'
  | 'membership.cta'
  | 'membership.features'
  | 'assessment.title'
  | 'assessment.subtitle'
  | 'assessment.cta'
  | 'faq.title'
  | 'footer.tagline'
  | 'footer.legal'
  | 'footer.privacy'
  | 'footer.contact'
  | 'footer.rights'
  | 'common.learn_more'
  | 'common.contact_us'
  | 'common.discover'
  | 'common.request_access'
  | 'common.updated'
  | 'common.confidential';

export type Translations = Record<TranslationKey, string>;

const translations: Record<Locale, Translations> = {
  fr: {
    'nav.services': 'Services',
    'nav.cities': 'Destinations',
    'nav.membership': 'Adhésion',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.assessment': 'Évaluation privée',
    'hero.tagline': 'Bureau Privé · Turquie',
    'hero.title': 'Votre bureau privé\nen Turquie.',
    'hero.subtitle':
      "Un appel. Un interlocuteur de confiance. Toute la Turquie. Bosphoras coordonne, en toute discrétion, le juridique, le fiscal, l'entreprise, la santé, l'assurance, l'immobilier, le transport et l'accès privé — à Istanbul, Bodrum et Antalya.",
    'hero.cta': 'Recevoir mon diagnostic privé',
    'hero.cta_secondary': 'Découvrir nos services',
    'trust.clients': '280+',
    'trust.years': '12',
    'trust.cities': '3',
    'trust.confidential': '100%',
    'trust.clients_label': 'Clients accompagnés',
    'trust.years_label': "Années d'expérience",
    'trust.cities_label': 'Villes couvertes',
    'trust.confidential_label': 'Confidentialité garantie',
    'services.title': 'Un seul bureau.\nToute la Turquie.',
    'services.subtitle':
      "Du juridique à la santé, de l'entreprise à l'accès privé : Bosphoras coordonne pour vous des professionnels indépendants sélectionnés. Nous ne vendons pas un appartement — nous orchestrons votre vie en Turquie.",
    'cities.title': 'Istanbul. Bodrum. Antalya.',
    'cities.subtitle':
      "Trois destinations d'exception, une présence permanente et des réseaux établis pour vous servir partout où vous choisissez de vous établir.",
    'membership.title': "Pas de remises.\nPas de bruit.\nSeulement l'accès.",
    'membership.subtitle':
      "La carte Bosphoras Private Access n'est ni une carte bancaire ni un moyen de paiement. Elle réunit une sélection discrète de membres qui partagent les mêmes exigences de qualité, de confidentialité et de service.",
    'membership.cta': 'Demander un accès privé',
    'membership.features':
      'Interlocuteur dédié · Hospitalité prioritaire · Dîners privés · Présentations sur consentement mutuel',
    'assessment.title': 'Un échange confidentiel\npour commencer.',
    'assessment.subtitle':
      'Partagez votre situation avec notre bureau. Nous étudions vos priorités — installation, fiscalité, entreprise, santé, immobilier — et vous orientons vers les professionnels indépendants pertinents.',
    'assessment.cta': 'Recevoir mon diagnostic privé',
    'faq.title': 'Questions fréquentes',
    'footer.tagline': 'Votre bureau privé en Turquie',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'common.learn_more': 'En savoir plus',
    'common.contact_us': 'Nous contacter',
    'common.discover': 'Découvrir',
    'common.request_access': 'Demander un accès',
    'common.updated': 'Mis à jour le',
    'common.confidential': 'Strictement confidentiel',
  },
  en: {
    'nav.services': 'Services',
    'nav.cities': 'Destinations',
    'nav.membership': 'Membership',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.assessment': 'Private Assessment',
    'hero.tagline': 'Private Desk · Turkey',
    'hero.title': 'Your private desk\nin Turkey.',
    'hero.subtitle':
      'One call. One trusted desk. Everything Turkey. Bosphoras quietly coordinates legal, tax, business, healthcare, insurance, property, transport and private access — in Istanbul, Bodrum and Antalya.',
    'hero.cta': 'Request a Private Assessment',
    'hero.cta_secondary': 'Explore our services',
    'trust.clients': '280+',
    'trust.years': '12',
    'trust.cities': '3',
    'trust.confidential': '100%',
    'trust.clients_label': 'Clients served',
    'trust.years_label': 'Years of experience',
    'trust.cities_label': 'Cities covered',
    'trust.confidential_label': 'Confidentiality assured',
    'services.title': 'One desk.\nAll of Turkey.',
    'services.subtitle':
      'From legal and tax to healthcare, business, transport and private access — Bosphoras coordinates a curated network of independent professionals. We do not sell apartments. We orchestrate your life in Turkey.',
    'cities.title': 'Istanbul. Bodrum. Antalya.',
    'cities.subtitle':
      'Three exceptional destinations, a permanent presence and established networks to serve you wherever you choose to settle.',
    'membership.title': 'No discounts.\nNo noise.\nJust access.',
    'membership.subtitle':
      'Bosphoras Private Access is not a bank card or a payment instrument. It is a discreet members card that gathers a selected circle who share the same standards of quality, confidentiality and service.',
    'membership.cta': 'Request Private Access',
    'membership.features':
      'Dedicated contact · Priority hospitality · Private dinners · Introductions on mutual consent only',
    'assessment.title': 'Begin with a confidential\nconversation.',
    'assessment.subtitle':
      'Share your situation with our desk. We map your priorities — relocation, tax, company, health, property — and direct you to the relevant independent professionals.',
    'assessment.cta': 'Request a Private Assessment',
    'faq.title': 'Frequently asked questions',
    'footer.tagline': 'Your Private Desk in Turkey',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy policy',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'common.learn_more': 'Learn more',
    'common.contact_us': 'Contact us',
    'common.discover': 'Discover',
    'common.request_access': 'Request access',
    'common.updated': 'Updated on',
    'common.confidential': 'Strictly confidential',
  },
  ru: {
    'nav.services': 'Услуги',
    'nav.cities': 'Направления',
    'nav.membership': 'Членство',
    'nav.about': 'О нас',
    'nav.contact': 'Контакт',
    'nav.assessment': 'Частная консультация',
    'hero.tagline': 'Частный офис · Турция',
    'hero.title': 'Ваш частный офис\nв Турции.',
    'hero.subtitle':
      'Один звонок. Один доверенный офис. Вся Турция. Bosphoras конфиденциально координирует юридические, налоговые, корпоративные, медицинские и страховые вопросы, недвижимость, транспорт и частный доступ — в Стамбуле, Бодруме и Анталье.',
    'hero.cta': 'Получить частную консультацию',
    'hero.cta_secondary': 'Изучить наши услуги',
    'trust.clients': '280+',
    'trust.years': '12',
    'trust.cities': '3',
    'trust.confidential': '100%',
    'trust.clients_label': 'Обслуженных клиентов',
    'trust.years_label': 'Лет опыта',
    'trust.cities_label': 'Городов присутствия',
    'trust.confidential_label': 'Конфиденциальность',
    'services.title': 'Один офис.\nВся Турция.',
    'services.subtitle':
      'От юридических и налоговых вопросов до здоровья, бизнеса, транспорта и частного доступа — Bosphoras координирует подобранную сеть независимых специалистов. Мы не продаём квартиры. Мы организуем вашу жизнь в Турции.',
    'cities.title': 'Стамбул. Бодрум. Анталья.',
    'cities.subtitle':
      'Три исключительных направления, постоянное присутствие и устоявшиеся сети для обслуживания вас там, где вы выбираете обосноваться.',
    'membership.title': 'Без скидок.\nБез шума.\nТолько доступ.',
    'membership.subtitle':
      'Bosphoras Private Access — это не банковская карта и не платёжный инструмент. Это сдержанная карта члена клуба, объединяющая избранный круг, разделяющий одни и те же стандарты качества, конфиденциальности и сервиса.',
    'membership.cta': 'Запросить частный доступ',
    'membership.features':
      'Выделенный контакт · Приоритетная гостеприимность · Частные ужины · Знакомства только по взаимному согласию',
    'assessment.title': 'Начнём с конфиденциальной\nбеседы.',
    'assessment.subtitle':
      'Поделитесь своей ситуацией с нашим бюро. Мы определяем ваши приоритеты — переезд, налоги, компания, здоровье, недвижимость — и направляем к независимым специалистам.',
    'assessment.cta': 'Получить частную консультацию',
    'faq.title': 'Часто задаваемые вопросы',
    'footer.tagline': 'Ваш частный офис в Турции',
    'footer.legal': 'Правовая информация',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.contact': 'Контакт',
    'footer.rights': 'Все права защищены.',
    'common.learn_more': 'Узнать больше',
    'common.contact_us': 'Связаться с нами',
    'common.discover': 'Откройте для себя',
    'common.request_access': 'Запросить доступ',
    'common.updated': 'Обновлено',
    'common.confidential': 'Строго конфиденциально',
  },
  ar: {
    'nav.services': 'الخدمات',
    'nav.cities': 'الوجهات',
    'nav.membership': 'العضوية',
    'nav.about': 'حول',
    'nav.contact': 'تواصل',
    'nav.assessment': 'تقييم خاص',
    'hero.tagline': 'مكتب خاص · تركيا',
    'hero.title': 'مكتبكم الخاص\nفي تركيا.',
    'hero.subtitle':
      'مكالمة واحدة. مكتب موثوق واحد. تركيا بأكملها. تنسّق بوسفوراس بسرية الشؤون القانونية والضريبية وتأسيس الشركات والرعاية الصحية والتأمين والعقارات والنقل والوصول الخاص — في إسطنبول وبودروم وأنطاليا.',
    'hero.cta': 'اطلب تقييماً خاصاً',
    'hero.cta_secondary': 'استكشف خدماتنا',
    'trust.clients': '+280',
    'trust.years': '12',
    'trust.cities': '3',
    'trust.confidential': '100%',
    'trust.clients_label': 'عملاء تمت خدمتهم',
    'trust.years_label': 'سنوات الخبرة',
    'trust.cities_label': 'مدن التغطية',
    'trust.confidential_label': 'سرية مضمونة',
    'services.title': 'مكتب واحد.\nتركيا بأكملها.',
    'services.subtitle':
      'من القانون والضرائب إلى الصحة والشركات والنقل والوصول الخاص — تنسّق بوسفوراس شبكة منتقاة من المهنيين المستقلين. نحن لا نبيع الشقق. نحن نُنظّم حياتكم في تركيا.',
    'cities.title': 'إسطنبول. بودروم. أنطاليا.',
    'cities.subtitle':
      'ثلاث وجهات استثنائية، وحضور دائم وشبكات راسخة لخدمتكم أينما اخترتم الاستقرار.',
    'membership.title': 'بلا خصومات.\nبلا ضجيج.\nالوصول فقط.',
    'membership.subtitle':
      'بطاقة بوسفوراس Private Access ليست بطاقة بنكية ولا أداة دفع. إنها بطاقة عضوية خاصة تجمع دائرة منتقاة تشترك في نفس معايير الجودة والسرية والخدمة.',
    'membership.cta': 'اطلب وصولاً خاصاً',
    'membership.features':
      'مسؤول مخصص · ضيافة ذات أولوية · عشاءات خاصة · تعارف خاص بموافقة متبادلة فقط',
    'assessment.title': 'لنبدأ بمحادثة\nسرية.',
    'assessment.subtitle':
      'شاركوا وضعكم مع مكتبنا. نُحدّد أولوياتكم — الانتقال، الضرائب، الشركة، الصحة، العقارات — ونوجّهكم إلى المهنيين المستقلين المعنيين.',
    'assessment.cta': 'اطلب تقييماً خاصاً',
    'faq.title': 'الأسئلة الشائعة',
    'footer.tagline': 'مكتبكم الخاص في تركيا',
    'footer.legal': 'إشعار قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.contact': 'تواصل',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'common.learn_more': 'اعرف المزيد',
    'common.contact_us': 'تواصل معنا',
    'common.discover': 'اكتشف',
    'common.request_access': 'طلب الوصول',
    'common.updated': 'تحديث',
    'common.confidential': 'سري للغاية',
  },
};

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key] ?? translations['fr'][key] ?? key;
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/ru')) return 'ru';
  if (pathname.startsWith('/ar')) return 'ar';
  return 'fr';
}
