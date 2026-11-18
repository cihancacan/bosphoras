import { homeEditorial, homeIntentIds } from '@/data/homeEditorial';
import { nonDomPaths } from '@/data/nonDomGuide';
import { corporateRelocationPaths } from '@/components/services/CorporateRelocationServicePage';
import { getNuiteeWhiteLabelSearchHref } from '@/lib/travel/nuiteeWhiteLabel';
import { taxRelocationPaths, taxRelocationLabels } from '@/data/taxRelocationPaths';
import { taxRelocationEditorial } from '@/data/taxRelocationEditorial';
import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Home,
  KeyRound,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { getSlugForPage } from '@/data/pages/types';
import { getLocalePath } from '@/lib/routes';
import { withAssessmentContext } from '@/lib/assessmentContext';
import { fetchPublishedProperties } from '@/lib/propertyStore';
import {
  formatEntryCapital,
  formatPropertyPrice,
  getPropertyPath,
  globalPropertyHubPaths,
  paymentBadge,
  propertyLocationLabel,
} from '@/data/propertyDesk';

const primaryButton =
  'inline-flex min-h-[48px] items-center justify-center gap-3 bg-[#193344] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#25485e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#193344]';
const darkButton =
  'inline-flex min-h-[48px] items-center justify-center gap-3 bg-[#193344] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#25485e]';
const textLink =
  'inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#193344] underline decoration-[#e1e5e5] underline-offset-4 transition hover:text-[#193344]';

type SalesCopy = {
  pathsEyebrow: string;
  pathsTitle: string;
  pathsIntro: string;
  propertyTitle: string;
  propertyText: string;
  propertyCta: string;
  businessTitle: string;
  businessText: string;
  businessCta: string;
  relocationTitle: string;
  relocationText: string;
  relocationCta: string;
  propertyEyebrow: string;
  propertySectionTitle: string;
  propertySectionText: string;
  allProperties: string;
  selectionFallback: string;
  globalEyebrow: string;
  globalTitle: string;
  globalText: string;
  globalCta: string;
  businessEyebrow: string;
  businessSectionTitle: string;
  businessSectionText: string;
  businessSteps: string[];
  relocationEyebrow: string;
  relocationSectionTitle: string;
  relocationSectionText: string;
  relocationSteps: string[];
  differenceEyebrow: string;
  differenceTitle: string;
  differenceText: string;
  differencePoints: string[];
  accessEyebrow: string;
  accessTitle: string;
  accessText: string;
  accessPoints: string[];
  accessCta: string;
  peninsulaCta: string;
  complexProject: string;
  complexProjectCta: string;
  finalTitle: string;
  finalText: string;
  finalCta: string;
  phone: string;
  whatsapp: string;
};

const copy: Record<Locale, SalesCopy> = {
  fr: {
    pathsEyebrow: 'Votre point de départ',
    pathsTitle: 'Que voulez-vous faire en Turquie ?',
    pathsIntro: 'Commencez par votre besoin réel. Bosphoras organise ensuite les démarches, les professionnels et les services nécessaires autour de votre projet.',
    propertyTitle: 'Investir dans l’immobilier',
    propertyText: 'Projets sélectionnés à Istanbul, Bodrum et Antalya : prix, plans de paiement, analyse, visites et accompagnement jusqu’à l’achat.',
    propertyCta: 'Voir les projets',
    businessTitle: 'Créer mon entreprise',
    businessText: 'Création de société, comptabilité, banque, bureau et mise en place opérationnelle coordonnés par un interlocuteur unique.',
    businessCta: 'Créer mon entreprise',
    relocationTitle: 'M’installer en Turquie',
    relocationText: 'Résidence, logement, assurance, famille, banque et installation quotidienne organisés de bout en bout.',
    relocationCta: 'Préparer mon installation',
    propertyEyebrow: 'Immobilier sélectionné',
    propertySectionTitle: 'Des opportunités concrètes, pas un catalogue infini.',
    propertySectionText: 'Nous privilégions une sélection courte de projets que nous pouvons expliquer, comparer et suivre. Vous voyez le produit avant de nous confier le reste.',
    allProperties: 'Voir toutes les opportunités immobilières',
    selectionFallback: 'Notre sélection publique évolue. Consultez le Property Desk pour voir les projets actuellement disponibles.',
    globalEyebrow: 'Investissement international',
    globalTitle: 'Vous recherchez aussi des opportunités hors de Turquie ?',
    globalText: 'Bosphoras sélectionne progressivement des programmes neufs et des opportunités internationales pour ses clients investisseurs, avec plans de paiement promoteurs et lecture comparative.',
    globalCta: 'Voir la sélection internationale',
    businessEyebrow: 'Entreprendre',
    businessSectionTitle: 'Créer votre société sans multiplier les interlocuteurs.',
    businessSectionText: 'Bosphoras coordonne la mise en place opérationnelle avec les professionnels adaptés, puis peut rester votre point de contact pour la suite.',
    businessSteps: ['Création de société', 'Comptabilité & fiscalité', 'Banque & interlocuteurs', 'Bureau & installation'],
    relocationEyebrow: 'Relocation',
    relocationSectionTitle: 'Vous arrivez avec votre projet. Nous organisons le reste.',
    relocationSectionText: 'Pour une installation personnelle ou familiale, nous coordonnons les étapes pratiques afin que vous puissiez vous concentrer sur votre décision, pas sur les démarches.',
    relocationSteps: ['Résidence & démarches', 'Logement & quartiers', 'Assurance & santé', 'Famille & vie quotidienne'],
    differenceEyebrow: 'La différence Bosphoras',
    differenceTitle: 'Pas une agence. Votre bureau privé en Turquie.',
    differenceText: 'Acheter un bien, créer une société ou obtenir une résidence n’est souvent que le début. Bosphoras reste l’interlocuteur qui relie votre projet aux bonnes personnes et à l’exécution locale.',
    differencePoints: ['Un interlocuteur qui connaît l’ensemble du dossier', 'Des professionnels sélectionnés selon le besoin', 'Une coordination discrète avant, pendant et après la transaction'],
    accessEyebrow: 'Bosphoras Private Access',
    accessTitle: 'Pour ceux dont la Turquie devient une partie de leur vie.',
    accessText: 'Private Access est la continuité haut de gamme de la relation Bosphoras : traitement prioritaire, introductions qualifiées, hospitality et coordination privée. Ce n’est pas nécessaire pour acheter, créer une société ou vous installer.',
    accessPoints: ['Traitement prioritaire', 'Introductions qualifiées', 'Hospitality & conciergerie', 'Accès et expériences membres'],
    accessCta: 'Découvrir Private Access',
    peninsulaCta: 'Découvrir l’accès Peninsula',
    complexProject: 'Votre situation est plus complexe ?',
    complexProjectCta: 'Présenter mon projet à Bosphoras',
    finalTitle: 'Quel est votre projet en Turquie ?',
    finalText: 'Dites-nous simplement ce que vous souhaitez faire. Nous vous orienterons vers la bonne porte d’entrée.',
    finalCta: 'Parler à un conseiller Bosphoras',
    phone: '+90 546 769 99 96',
    whatsapp: 'WhatsApp @bosphoras',
  },
  en: {
    pathsEyebrow: 'Your starting point',
    pathsTitle: 'What do you want to do in Turkey?',
    pathsIntro: 'Start with the outcome you want. Bosphoras then coordinates the formalities, professionals and services around your project.',
    propertyTitle: 'Invest in property',
    propertyText: 'Selected projects in Istanbul, Bodrum and Antalya: pricing, payment plans, analysis, viewings and support through purchase.',
    propertyCta: 'View projects',
    businessTitle: 'Set up my company',
    businessText: 'Company formation, accounting, banking, office and operational setup coordinated through one point of contact.',
    businessCta: 'Set up my company',
    relocationTitle: 'Relocate to Turkey',
    relocationText: 'Residence, housing, insurance, family, banking and day-to-day setup coordinated from start to finish.',
    relocationCta: 'Plan my relocation',
    propertyEyebrow: 'Selected property',
    propertySectionTitle: 'Concrete opportunities, not an endless catalogue.',
    propertySectionText: 'We prefer a focused selection of projects we can explain, compare and follow. You see the product before entrusting us with the rest.',
    allProperties: 'View all property opportunities',
    selectionFallback: 'Our public selection changes regularly. Visit the Property Desk to see currently available projects.',
    globalEyebrow: 'International investment',
    globalTitle: 'Also looking at opportunities outside Turkey?',
    globalText: 'Bosphoras gradually selects new developments and international opportunities for its investor clients, with developer payment plans and comparative investment review.',
    globalCta: 'View international selection',
    businessEyebrow: 'Business',
    businessSectionTitle: 'Set up your company without multiplying contacts.',
    businessSectionText: 'Bosphoras coordinates the operational setup with the right professionals and can remain your point of contact afterwards.',
    businessSteps: ['Company formation', 'Accounting & tax', 'Banking contacts', 'Office & setup'],
    relocationEyebrow: 'Relocation',
    relocationSectionTitle: 'You arrive with a plan. We organise the rest.',
    relocationSectionText: 'For personal or family relocation, we coordinate practical steps so you can focus on the decision rather than the administration.',
    relocationSteps: ['Residence & formalities', 'Housing & districts', 'Insurance & healthcare', 'Family & daily life'],
    differenceEyebrow: 'The Bosphoras difference',
    differenceTitle: 'Not an agency. Your private office in Turkey.',
    differenceText: 'Buying a property, setting up a company or securing residence is often only the beginning. Bosphoras remains the point of contact connecting your project to the right people and local execution.',
    differencePoints: ['One contact who understands the whole file', 'Professionals selected for the actual need', 'Discreet coordination before, during and after the transaction'],
    accessEyebrow: 'Bosphoras Private Access',
    accessTitle: 'For clients whose life increasingly includes Turkey.',
    accessText: 'Private Access is the premium continuation of the Bosphoras relationship: priority handling, qualified introductions, hospitality and private coordination. It is not required to buy property, form a company or relocate.',
    accessPoints: ['Priority handling', 'Qualified introductions', 'Hospitality & concierge', 'Member access & experiences'],
    accessCta: 'Discover Private Access',
    peninsulaCta: 'Discover Peninsula access',
    complexProject: 'Is your situation more complex?',
    complexProjectCta: 'Present my project to Bosphoras',
    finalTitle: 'What is your project in Turkey?',
    finalText: 'Tell us simply what you want to achieve. We will direct you to the right starting point.',
    finalCta: 'Speak with a Bosphoras adviser',
    phone: '+90 546 769 99 96',
    whatsapp: 'WhatsApp @bosphoras',
  },
  ru: {
    pathsEyebrow: 'С чего начать',
    pathsTitle: 'Что вы хотите сделать в Турции?',
    pathsIntro: 'Начните с вашей реальной цели. Bosphoras затем координирует процедуры, специалистов и сервисы вокруг проекта.',
    propertyTitle: 'Инвестировать в недвижимость',
    propertyText: 'Отобранные проекты в Стамбуле, Бодруме и Анталье: цены, планы оплаты, анализ, просмотры и сопровождение покупки.',
    propertyCta: 'Смотреть проекты',
    businessTitle: 'Создать компанию',
    businessText: 'Регистрация компании, бухгалтерия, банковские контакты, офис и операционная настройка через одного координатора.',
    businessCta: 'Создать компанию',
    relocationTitle: 'Переехать в Турцию',
    relocationText: 'Резиденция, жильё, страхование, семья, банк и бытовая адаптация — от начала до конца.',
    relocationCta: 'Подготовить переезд',
    propertyEyebrow: 'Отобранная недвижимость',
    propertySectionTitle: 'Конкретные возможности вместо бесконечного каталога.',
    propertySectionText: 'Мы предпочитаем короткую подборку проектов, которые можем объяснить, сравнить и сопровождать.',
    allProperties: 'Все объекты и проекты',
    selectionFallback: 'Публичная подборка регулярно обновляется. Откройте Property Desk, чтобы увидеть актуальные проекты.',
    globalEyebrow: 'Международные инвестиции',
    globalTitle: 'Рассматриваете возможности за пределами Турции?',
    globalText: 'Bosphoras постепенно добавляет для своих инвесторов отобранные новостройки и международные проекты с планами оплаты от застройщиков и сравнительным анализом.',
    globalCta: 'Смотреть международную подборку',
    businessEyebrow: 'Бизнес',
    businessSectionTitle: 'Создайте компанию без десятка разных контактов.',
    businessSectionText: 'Bosphoras координирует операционный запуск с подходящими специалистами и может оставаться вашим единым контактом после регистрации.',
    businessSteps: ['Регистрация компании', 'Бухгалтерия и налоги', 'Банковские контакты', 'Офис и запуск'],
    relocationEyebrow: 'Relocation',
    relocationSectionTitle: 'Вы приезжаете с проектом. Остальное организуем мы.',
    relocationSectionText: 'При личном или семейном переезде мы координируем практические этапы, чтобы вы занимались решением, а не бюрократией.',
    relocationSteps: ['Резиденция и процедуры', 'Жильё и районы', 'Страхование и медицина', 'Семья и повседневная жизнь'],
    differenceEyebrow: 'Разница Bosphoras',
    differenceTitle: 'Не агентство. Ваш частный офис в Турции.',
    differenceText: 'Покупка недвижимости, компания или резиденция часто только начало. Bosphoras остаётся контактом, который связывает проект с нужными людьми и исполнением на месте.',
    differencePoints: ['Один контакт знает весь ваш проект', 'Специалисты подбираются под конкретную задачу', 'Дискретная координация до, во время и после сделки'],
    accessEyebrow: 'Bosphoras Private Access',
    accessTitle: 'Для тех, чья жизнь всё больше связана с Турцией.',
    accessText: 'Private Access — премиальное продолжение отношений с Bosphoras: приоритет, квалифицированные знакомства, hospitality и частная координация. Членство не требуется для покупки недвижимости, создания компании или переезда.',
    accessPoints: ['Приоритетная обработка', 'Квалифицированные знакомства', 'Hospitality & concierge', 'Доступ и мероприятия'],
    accessCta: 'Открыть Private Access',
    peninsulaCta: 'Доступ Peninsula',
    complexProject: 'У вас более сложная ситуация?',
    complexProjectCta: 'Рассказать о проекте Bosphoras',
    finalTitle: 'Какой у вас проект в Турции?',
    finalText: 'Кратко опишите, что вы хотите сделать. Мы направим вас к правильной точке входа.',
    finalCta: 'Поговорить с консультантом Bosphoras',
    phone: '+90 546 769 99 96',
    whatsapp: 'WhatsApp @bosphoras',
  },
  ar: {
    pathsEyebrow: 'نقطة البداية',
    pathsTitle: 'ماذا تريدون أن تفعلوا في تركيا؟',
    pathsIntro: 'ابدؤوا بالهدف الحقيقي. ثم ينسق Bosphoras الإجراءات والمهنيين والخدمات حول مشروعكم.',
    propertyTitle: 'الاستثمار في العقار',
    propertyText: 'مشاريع مختارة في إسطنبول وبودروم وأنطاليا: الأسعار، خطط الدفع، التحليل، الزيارات ومرافقة الشراء.',
    propertyCta: 'عرض المشاريع',
    businessTitle: 'تأسيس شركتي',
    businessText: 'تأسيس الشركة والمحاسبة والبنوك والمكتب والتشغيل من خلال جهة اتصال واحدة.',
    businessCta: 'تأسيس شركتي',
    relocationTitle: 'الانتقال إلى تركيا',
    relocationText: 'الإقامة والسكن والتأمين والعائلة والبنك والحياة اليومية من البداية إلى النهاية.',
    relocationCta: 'تحضير الانتقال',
    propertyEyebrow: 'عقارات مختارة',
    propertySectionTitle: 'فرص حقيقية، لا كتالوج لا ينتهي.',
    propertySectionText: 'نفضل مجموعة مركزة من المشاريع التي يمكننا شرحها ومقارنتها ومتابعتها.',
    allProperties: 'عرض جميع الفرص العقارية',
    selectionFallback: 'تتغير مجموعتنا العامة باستمرار. افتحوا Property Desk لرؤية المشاريع المتاحة حالياً.',
    globalEyebrow: 'الاستثمار الدولي',
    globalTitle: 'هل تبحثون أيضاً عن فرص خارج تركيا؟',
    globalText: 'يضيف Bosphoras تدريجياً مشاريع جديدة وفرصاً دولية مختارة لعملائه المستثمرين، مع خطط دفع من المطورين وقراءة استثمارية مقارنة.',
    globalCta: 'عرض الاختيار الدولي',
    businessEyebrow: 'الأعمال',
    businessSectionTitle: 'أسسوا شركتكم دون تعدد جهات الاتصال.',
    businessSectionText: 'ينسق Bosphoras الإعداد التشغيلي مع المختصين المناسبين ويمكن أن يبقى جهة الاتصال الرئيسية بعد التأسيس.',
    businessSteps: ['تأسيس الشركة', 'المحاسبة والضرائب', 'التواصل البنكي', 'المكتب والتشغيل'],
    relocationEyebrow: 'الانتقال',
    relocationSectionTitle: 'تأتون بالمشروع. ونحن ننظم الباقي.',
    relocationSectionText: 'للانتقال الفردي أو العائلي، ننسق الخطوات العملية لتتمكنوا من التركيز على القرار بدلاً من الإجراءات.',
    relocationSteps: ['الإقامة والإجراءات', 'السكن والأحياء', 'التأمين والصحة', 'العائلة والحياة اليومية'],
    differenceEyebrow: 'الفرق مع Bosphoras',
    differenceTitle: 'لسنا وكالة. نحن مكتبكم الخاص في تركيا.',
    differenceText: 'شراء عقار أو تأسيس شركة أو الحصول على إقامة غالباً ليس سوى البداية. يبقى Bosphoras جهة الاتصال التي تربط المشروع بالأشخاص المناسبين والتنفيذ المحلي.',
    differencePoints: ['جهة اتصال واحدة تفهم الملف بالكامل', 'اختيار المختصين حسب الحاجة الحقيقية', 'تنسيق سري قبل وأثناء وبعد العملية'],
    accessEyebrow: 'Bosphoras Private Access',
    accessTitle: 'لمن تصبح تركيا جزءاً متزايداً من حياتهم.',
    accessText: 'Private Access هو الامتداد المميز للعلاقة مع Bosphoras: أولوية، تعارفات مؤهلة، hospitality وتنسيق خاص. العضوية ليست مطلوبة لشراء العقار أو تأسيس الشركة أو الانتقال.',
    accessPoints: ['معالجة أولوية', 'تعارفات مؤهلة', 'Hospitality وconcierge', 'وصول وتجارب للأعضاء'],
    accessCta: 'اكتشاف Private Access',
    peninsulaCta: 'اكتشاف وصول Peninsula',
    complexProject: 'هل وضعكم أكثر تعقيداً؟',
    complexProjectCta: 'عرض مشروعي على Bosphoras',
    finalTitle: 'ما هو مشروعكم في تركيا؟',
    finalText: 'أخبرونا ببساطة بما تريدون تحقيقه وسنوجهكم إلى نقطة البداية المناسبة.',
    finalCta: 'التحدث مع مستشار Bosphoras',
    phone: '+90 546 769 99 96',
    whatsapp: 'WhatsApp @bosphoras',
  },
};

function route(locale: Locale, id: Parameters<typeof getSlugForPage>[0]) {
  return getLocalePath(locale, getSlugForPage(id, locale) ?? '/');
}

const pathPhotos = ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Levent_Financial_Center_-_Istanbul.jpg/800px-Levent_Financial_Center_-_Istanbul.jpg','/images/travel/istanbul/ritz-carlton/ritz-carlton-03-balcony.webp','https://images.pexels.com/photos/33116568/pexels-photo-33116568.jpeg?auto=compress&cs=tinysrgb&w=900','/images/travel/istanbul/mandarin-oriental/mandarin-oriental-02-suite.webp','/images/travel/istanbul/city/ortakoy-bosphorus.webp','https://images.pexels.com/photos/29224559/pexels-photo-29224559.jpeg?auto=compress&cs=tinysrgb&w=900'];
const compactPathText:Record<Locale,string[]> = {
fr:['Société, banque et comptabilité.','Résidence fiscale et Non-Dom.','Cadres, salariés et familles.','Biens et programmes sélectionnés.','Résidence, logement et écoles.','Entreprises, projets et financement.'],
en:['Company, banking and accounting.','Tax residency and non-dom.','Executives, employees and families.','Selected property and developments.','Residence, homes and schools.','Business projects and funding.'],
ru:['Компания, банки и бухгалтерия.','Налоговое резидентство и Non-Dom.','Руководители, сотрудники и семьи.','Отобранная недвижимость.','ВНЖ, жильё и школы.','Проекты и финансирование.'],
ar:['تأسيس الشركات والبنوك والمحاسبة.','الإقامة الضريبية وNon-Dom.','انتقال المدراء والموظفين والعائلات.','عقارات ومشاريع مختارة.','الإقامة والسكن والمدارس.','المشاريع والتمويل.']
};
const photoAlt:Record<Locale,string[]> = {
fr:['Quartier financier de Levent à Istanbul','Vue sur le Bosphore depuis un balcon du Ritz-Carlton','Salle de réunion avec vue sur le Bosphore à Istanbul','Suite contemporaine au Mandarin Oriental Istanbul','Mosquée d’Ortaköy et Bosphore','Ouvriers et machines dans une usine de Konya'],
en:['Levent financial district in Istanbul','Bosphorus view from The Ritz-Carlton','Meeting room overlooking the Bosphorus in Istanbul','Contemporary suite at Mandarin Oriental Istanbul','Ortaköy Mosque and the Bosphorus','Workers and machinery in a Konya factory'],
ru:['Финансовый район Левент в Стамбуле','Вид на Босфор из The Ritz-Carlton','Переговорная с видом на Босфор в Стамбуле','Современный номер Mandarin Oriental Istanbul','Мечеть Ортакёй и Босфор','Рабочие и оборудование завода в Конье'],
ar:['حي ليفنت المالي في إسطنبول','إطلالة البوسفور من ريتز كارلتون','غرفة اجتماعات مطلة على البوسفور في إسطنبول','جناح معاصر في ماندارين أورينتال إسطنبول','مسجد أورتاكوي والبوسفور','عمال وآلات في مصنع بقونية']
};
const cityPhotos = ['/images/travel/istanbul/city/dolmabahce-palace.webp','/images/travel/bodrum-premium/destination/bodrum-turquoise-bay-v2.webp','/images/travel/antalya-premium/destination/kemer-panorama.webp'];
const extraPhotos = ['/images/travel/istanbul/four-seasons-bosphorus/four-seasons-bosphorus-02-waterfront.webp','/images/home.driver.jpg','/images/travel/istanbul/ciragan/ciragan-03-hotel.webp','/images/travel/istanbul/shangri-la/shangri-la-03-lobby.webp'];
const shell='mx-auto max-w-[1320px]';
const heading='font-sans font-normal text-2xl leading-tight tracking-[-0.03em] sm:text-3xl md:text-4xl text-[#193344]';
const image=(src:string,alt:string,klass='aspect-[16/10]')=><div className={klass+' overflow-hidden bg-[#e5e8e8]'}><img src={src} alt={alt} width={800} height={500} loading="lazy" decoding="async" className="h-full w-full object-cover"/></div>;
export async function HomeProjectPaths({ locale }: { locale: Locale }) {
 const c=copy[locale],e=homeEditorial[locale];
 const propertyHref=route(locale,'property'),globalPropertyHref=getLocalePath(locale,globalPropertyHubPaths[locale]);
 const businessHref=route(locale,'business-setup'),relocationHref=route(locale,'relocate');
 const investmentHref=locale==='fr'?'/investissement':'/'+locale+'/investment';
 const projectsHref=locale==='fr'?'/investissement/projets':'/'+locale+'/investment/projects';
 const entrepreneurHref=locale==='fr'?'/investissement/entrepreneurs':'/'+locale+'/investment/entrepreneurs';
 const hrefs=[businessHref,taxRelocationPaths[locale],corporateRelocationPaths[locale],propertyHref,relocationHref,investmentHref];
 const mobilityHref=({fr:'/transfert-aeroport-istanbul',en:'/en/istanbul-airport-transfer',ru:'/ru/transfer-aeroport-stambul',ar:'/ar/istanbul-airport-transfer'})[locale];
 const extraHrefs=[getNuiteeWhiteLabelSearchHref(locale),mobilityHref,route(locale,'luxury-concierge'),route(locale,'private-club')];
 const properties=(await fetchPublishedProperties()).filter(property=>property.countryCode==='TR'||/turkey|türkiye|turquie|турц|تركيا/i.test(property.countryName)).slice(0,3);
 return <>
 <section id="votre-projet" className="scroll-mt-24 px-4 py-9 sm:px-6 md:px-8 md:py-16"><div className={shell}><h2 className={heading}>{e.pathsTitle}</h2><p className="mt-4 max-w-3xl leading-8 text-[#465159]">{e.pathsIntro}</p><div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-5 sm:gap-y-7 lg:grid-cols-3 lg:gap-x-6">{e.paths.map(([title,description,cta],i)=><Link href={hrefs[i]} key={title} data-cta-id={'home_path_'+homeIntentIds[i]} className="group flex min-w-0 flex-col border-b border-[#d9e0e2] pb-3 sm:pb-4">{image(pathPhotos[i],photoAlt[locale][i],'aspect-[4/3] sm:aspect-[16/10]')}<h3 className="mt-3 break-words font-sans text-[0.98rem] font-medium leading-snug text-[#193344] sm:text-lg md:text-xl">{title}</h3><p className="mt-2 text-xs leading-5 text-[#465159] sm:hidden">{compactPathText[locale][i]}</p><p className="mt-2 hidden text-sm leading-6 text-[#465159] sm:block">{description}</p><span className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-medium leading-snug text-[#193344] sm:text-sm">{cta}<ArrowRight size={14} aria-hidden="true" className="shrink-0 rtl:rotate-180"/></span></Link>)}</div><p className="mt-4 text-[10px] leading-5 text-[#53616b]"><a className="underline" href="https://commons.wikimedia.org/wiki/File:Levent_Financial_Center_-_Istanbul.jpg" target="_blank" rel="noreferrer">Levent — Maurice Flesier</a> · <a className="underline" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a> · <a className="underline" href="https://www.pexels.com/photo/modern-meeting-room-overlooking-bosphorus-33116568/" target="_blank" rel="noreferrer">Muaz Semih Güven / Pexels</a> · <a className="underline" href="https://www.pexels.com/photo/industrial-workers-operating-machinery-in-factory-29224559/" target="_blank" rel="noreferrer">Cemrecan Yurtman / Pexels</a></p></div></section>
 <section className="bg-[#193344] text-white"><div className="mx-auto grid max-w-[1600px] lg:grid-cols-2"><div className="flex flex-col justify-center p-5 md:p-9 lg:p-10"><p className="text-sm text-[#d8e2e8]">{e.taxKicker}</p><p className="mt-3 text-5xl font-light tracking-tight md:text-7xl" dir="ltr">{locale==='fr'?'20 ans':locale==='en'?'20 years':locale==='ru'?'20 лет':'20 عاماً'}</p><h2 className="mt-3 text-2xl font-normal leading-tight md:text-3xl">{e.taxTitle}</h2><p className="mt-4 leading-8 text-[#e2e9ed]">{e.taxText}</p><div className="mt-7 flex flex-wrap items-center gap-5"><Link href={taxRelocationPaths[locale]} data-cta-id="home_tax" className="inline-flex min-h-[48px] items-center bg-white px-5 py-3 text-sm font-medium text-[#193344]">{e.taxCta}</Link><Link href={nonDomPaths[locale]} className="text-sm underline underline-offset-4">{e.guideCta}</Link></div></div><div className="min-h-[180px] sm:min-h-[240px] lg:min-h-full relative"><img src="/images/travel/istanbul/raffles/raffles-03-suite.webp" alt="" width={1000} height={750} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/></div></div></section>
 <section className="px-4 py-9 sm:px-6 md:px-8 md:py-16"><div className={shell+' grid gap-10 lg:grid-cols-2 lg:items-center'}><div>{image('/images/travel/istanbul/st-regis/st-regis-02-atrium.webp','', 'aspect-[4/3]')}</div><div><h2 className={heading}>{e.trustTitle}</h2><p className="mt-5 leading-8 text-[#465159]">{e.trustText}</p><ul className="mt-5 divide-y divide-[#e1e5e5]">{e.trustItems.map(v=><li key={v} className="flex items-center gap-3 py-3 text-[#193344]"><CheckCircle2 size={18} aria-hidden="true" className="shrink-0"/>{v}</li>)}</ul><Link className={textLink+' mt-4'} href={route(locale,'partners')}>{e.trustCta}</Link><Link href={route(locale,'compliance')} className={textLink+' ms-4 mt-4'}>{({fr:'Conformité et confiance',en:'Compliance and trust',ru:'Комплаенс и доверие',ar:'الامتثال والثقة'})[locale]}</Link></div></div></section>
      <section className="border-y border-[#e1e5e5] bg-white px-4 py-9 sm:px-6 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              
              <h2 className="mt-4 max-w-3xl font-sans font-normal text-2xl leading-tight tracking-[-0.035em] text-[#193344] md:text-4xl">{c.propertySectionTitle}</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#465159] lg:justify-self-end">{c.propertySectionText}</p>
          </div>

          {properties.length > 0 ? (
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {properties.map((property) => {
                const title = property.shortTitle?.[locale] || property.title[locale] || property.developer || property.cityName;
                const image = property.heroImage || property.images[0];
                const entry = formatEntryCapital(property, locale);
                const badge = paymentBadge(property, locale);
                return (
                  <Link
                    key={property.id}
                    href={getPropertyPath(locale, property)}
                    className="group overflow-hidden border border-[#e1e5e5] bg-[#f5f5f3] transition hover:border-[#193344] hover:shadow-[0_12px_32px_rgba(25,51,68,0.08)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f3]">
                      {image ? (
                        <img src={image} alt={title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[#193344]"><Building2 className="h-10 w-10" strokeWidth={1.2} /></div>
                      )}
                      {badge && <span className="absolute left-4 top-4 bg-[#193344]/92 px-3 py-2 text-[0.66rem] font-medium tracking-[0.01em] text-[#f5f5f3]">{badge}</span>}
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#193344]">{propertyLocationLabel(property)}</p>
                      <h3 className="mt-3 font-sans font-normal text-2xl leading-tight text-[#193344]">{title}</h3>
                      <div className="mt-5 flex items-end justify-between gap-4 border-t border-[#e1e5e5] pt-5">
                        <div>
                          <p className="text-lg font-semibold text-[#193344]">{formatPropertyPrice(property, locale)}</p>
                          {entry && <p className="mt-1 text-xs text-[#5d6672]">{entry}</p>}
                        </div>
                        <ArrowRight className="h-5 w-5 shrink-0 text-[#193344] transition group-hover:translate-x-1 rtl:rotate-180" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 border border-[#e1e5e5] bg-[#f5f5f3] p-7 text-base leading-8 text-[#465159]">{c.selectionFallback}</div>
          )}

          <Link href={propertyHref} className={darkButton + ' mt-8'}>{c.allProperties}<ArrowRight size={16} aria-hidden="true" /></Link>

          <div className="mt-7 border border-[#193344] bg-[#193344] p-5 text-white md:p-7">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.20em] text-[#d9e3e8]">{c.globalEyebrow}</p>
                <h3 className="mt-4 max-w-3xl font-sans font-normal text-2xl leading-tight tracking-[-0.03em] md:text-3xl">{c.globalTitle}</h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#e2e9ed] md:text-base">{c.globalText}</p>
              </div>
              <Link href={globalPropertyHref} className="inline-flex min-h-[48px] items-center justify-center gap-3 border border-[#d9e3e8]/55 px-6 py-4 text-sm font-semibold text-[#ffffff] transition hover:bg-white/10">
                {c.globalCta}<ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>


 <section className="bg-[#f5f5f0] px-4 py-9 sm:px-6 md:px-8 md:py-14"><div className={shell+' grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center'}><div><h2 className={heading}>{e.investmentTitle}</h2><p className="mt-5 leading-8 text-[#465159]">{e.investmentText}</p></div><div className="flex flex-wrap gap-4 lg:justify-end"><Link href={projectsHref} className={darkButton}>{e.investmentCtas[0]}</Link><Link href={entrepreneurHref} className={textLink}>{e.investmentCtas[1]}</Link></div></div></section>
 <section className="px-4 py-9 sm:px-6 md:px-8 md:py-16"><div className={shell}><h2 className={heading}>{e.methodTitle}</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{e.method.map(([title,desc])=><article key={title} className="border-t border-[#b9c5ca] pt-5"><h3 className="text-2xl font-normal text-[#193344]">{title}</h3><p className="mt-3 leading-7 text-[#465159]">{desc}</p></article>)}</div></div></section>
 <section className="bg-[#f5f5f0] px-4 py-9 sm:px-6 md:px-8 md:py-16"><div className={shell}><h2 className={heading}>{e.lifeTitle}</h2><p className="mt-4 max-w-3xl leading-8 text-[#465159]">{e.lifeIntro}</p><div className="mt-6 grid grid-cols-3 gap-2 sm:gap-5 md:gap-6">{e.cities.map(([title,desc],i)=><Link href={route(locale,['istanbul','bodrum','antalya'][i])} key={title} className="group">{image(cityPhotos[i],title,'aspect-[4/5]')}<h3 className="mt-3 break-words text-sm sm:text-xl md:text-2xl text-[#193344] font-normal">{title}</h3><p className="mt-2 hidden sm:block text-sm leading-6 text-[#465159]">{desc}</p></Link>)}</div></div></section>
 <section className="px-4 py-9 sm:px-6 md:px-8 md:py-16"><div className={shell}><h2 className={heading}>{e.extrasTitle}</h2><div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-6 lg:grid-cols-4">{e.extras.map(([title,desc,cta],i)=><article key={title}>{image(extraPhotos[i],'')}<h3 className="mt-3 text-base sm:text-xl font-normal text-[#193344]">{title}</h3><p className="mt-2 text-xs leading-5 sm:text-sm sm:leading-6 text-[#465159]">{desc}</p><Link href={extraHrefs[i]} className={textLink+' mt-3'}>{cta}<ArrowRight size={15} aria-hidden="true"/></Link></article>)}</div></div></section>
 <section className="border-y border-[#e1e5e5] bg-[#f5f5f0] px-4 py-8 sm:px-6 md:px-8 md:py-12"><div className={shell}><h2 className={heading}>{e.guidesTitle}</h2><p className="mt-4 leading-7 text-[#465159]">{e.guidesText}</p><div className="mt-5 flex flex-wrap gap-x-8 gap-y-2">{[nonDomPaths[locale],businessHref,corporateRelocationPaths[locale]].map((href,i)=><Link key={href} className={textLink} href={href}>{e.guides[i]}</Link>)}</div></div></section>
 </>;
}
export function HomeFinalContact({locale}:{locale:Locale}){
 const e=homeEditorial[locale],c=copy[locale],source=locale==='fr'?'/':'/'+locale;
 const href=route(locale,'private-assessment');
 return <section id="contact" className="bg-[#193344] px-4 py-10 text-white sm:px-6 md:px-8 md:py-16"><div className={shell+' grid gap-10 lg:grid-cols-2 lg:items-center'}><div><h2 className="text-3xl font-normal tracking-tight md:text-4xl">{e.formTitle}</h2><p className="mt-5 max-w-lg leading-8 text-[#e2e9ed]">{e.formText}</p><p className="mt-5 text-sm text-[#e2e9ed]">{e.reassurance}</p><a href="https://wa.me/905467699996" target="_blank" rel="noreferrer" data-cta-id="home_whatsapp" className="mt-7 inline-flex min-h-[48px] gap-2 items-center border border-white/60 px-5 py-3 text-white"><MessageCircle size={18} aria-hidden="true"/>{e.contact}</a><a href="tel:+905467699996" className="mt-5 block text-sm text-white underline underline-offset-4">{c.phone}</a></div><form action={href} method="get" className="space-y-5 bg-white p-6 text-[#193344] md:p-8"><input type="hidden" name="source" value={source}/><input type="hidden" name="source_title" value="Bosphoras"/><input type="hidden" name="home_intake" value="1"/><label className="block text-sm font-medium">{e.formLabels[0]}<select name="subject" required className="mt-2 block w-full border border-[#b9c5ca] bg-white p-3 text-base">{homeIntentIds.map((id,i)=><option key={id} value={id}>{i===6?e.other:e.paths[i][0]}</option>)}</select></label><label className="block text-sm font-medium">{e.formLabels[1]}<input name="country" type="text" autoComplete="country-name" maxLength={80} className="mt-2 block w-full border border-[#b9c5ca] bg-white p-3 text-base"/></label><label className="block text-sm font-medium">{e.formLabels[2]}<select name="horizon" className="mt-2 block w-full border border-[#b9c5ca] bg-white p-3 text-base"><option value="">—</option>{e.horizons.map((v,i)=><option key={v} value={i}>{v}</option>)}</select></label><button type="submit" className="w-full min-h-[52px] bg-[#193344] text-white px-5 py-4 font-medium hover:bg-[#25485e]">{e.formLabels[3]}</button></form></div></section>;
}
