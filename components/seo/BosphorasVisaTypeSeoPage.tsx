import Link from 'next/link';
import { AlertTriangle, ArrowRight, BriefcaseBusiness, CheckCircle2, FileText, GraduationCap, Home, Landmark, Plane, ShieldCheck, Users } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';
import { siteUrl } from '@/lib/routes';
import type { BosphorasProgrammaticSeoPage } from '@/data/bosphorasProgrammaticSeoPages';

type VisaTypeContent = {
  icon: 'plane' | 'business' | 'work' | 'student' | 'family' | 'property' | 'residence' | 'warning';
  summary: Record<Locale, string>;
  rules: Record<Locale, string[]>;
  conditions: Record<Locale, string[]>;
  documents: Record<Locale, string[]>;
  mistakes: Record<Locale, string[]>;
  transition: Record<Locale, string[]>;
  bosphoras: Record<Locale, string[]>;
};

const labels: Record<Locale, Record<string, string>> = {
  fr: { guide: 'Guide visa Turquie', updated: 'Mis à jour le 5 juin 2026', rules: 'Règles officielles à connaître', conditions: 'Conditions à vérifier', documents: 'Documents à préparer', mistakes: 'Erreurs à éviter', transition: 'Quand passer vers l’ikamet', compare: 'Comparer avec les autres options', support: 'Ce que Bosphoras peut coordonner', faq: 'Questions fréquentes', cta: 'Vérifier mon dossier' },
  en: { guide: 'Turkey visa guide', updated: 'Updated on June 5, 2026', rules: 'Official rules to understand', conditions: 'Requirements to verify', documents: 'Documents to prepare', mistakes: 'Mistakes to avoid', transition: 'When to move to ikamet', compare: 'Compare with other options', support: 'What Bosphoras can coordinate', faq: 'FAQ', cta: 'Check my file' },
  ru: { guide: 'Гид по визам Турции', updated: 'Обновлено 5 июня 2026', rules: 'Официальные правила', conditions: 'Условия для проверки', documents: 'Документы', mistakes: 'Ошибки', transition: 'Когда переходить к ikamet', compare: 'Сравнить с другими вариантами', support: 'Что координирует Bosphoras', faq: 'Частые вопросы', cta: 'Проверить dossier' },
  ar: { guide: 'دليل تأشيرات تركيا', updated: 'تم التحديث في 5 يونيو 2026', rules: 'القواعد الرسمية التي يجب فهمها', conditions: 'الشروط التي يجب فحصها', documents: 'الوثائق المطلوبة', mistakes: 'الأخطاء التي يجب تجنبها', transition: 'متى تنتقل إلى الإيكامت', compare: 'قارن مع الخيارات الأخرى', support: 'ما يمكن لـ Bosphoras تنسيقه', faq: 'الأسئلة الشائعة', cta: 'فحص ملفي' },
};

const baseRules = {
  fr: ['Selon le Ministère turc des Affaires étrangères, l’e-Visa est destiné au tourisme et au commerce uniquement.', 'Pour travailler ou étudier, il faut passer par une ambassade ou un consulat turc, pas par un simple e-Visa.', 'Le passeport doit en principe rester valable au moins 60 jours après la fin de la durée de séjour autorisée.', 'Un visa, une exemption de visa ou un e-Visa ne remplace pas automatiquement un titre de séjour turc.'],
  en: ['According to the Turkish Ministry of Foreign Affairs, e-Visa is for tourism and commerce only.', 'For work or study, the process goes through Turkish embassies or consulates, not a simple e-Visa.', 'The passport should generally remain valid at least 60 days beyond the authorised stay period.', 'A visa, visa exemption or e-Visa does not automatically replace a Turkish residence permit.'],
  ru: ['По данным МИД Турции, e-Visa предназначена только для туризма и коммерческих поездок.', 'Для работы или учебы нужно обращаться через посольства или консульства Турции, а не использовать простой e-Visa.', 'Паспорт обычно должен быть действителен минимум на 60 дней дольше разрешенного срока пребывания.', 'Виза, освобождение от визы или e-Visa не заменяют автоматически турецкий ВНЖ.'],
  ar: ['وفق وزارة الخارجية التركية، e-Visa مخصصة للسياحة والتجارة فقط.', 'للعمل أو الدراسة، يتم الإجراء عبر السفارات أو القنصليات التركية، وليس عبر e-Visa بسيطة.', 'عادة يجب أن يبقى الجواز صالحاً 60 يوماً على الأقل بعد نهاية مدة الإقامة المسموحة.', 'التأشيرة أو الإعفاء أو e-Visa لا تعوض تلقائياً تصريح الإقامة التركي.'],
};

const defaultContent: VisaTypeContent = {
  icon: 'plane',
  summary: {
    fr: 'Cette page explique le visa Turquie adapté à votre situation, avec les règles d’entrée, les limites, les documents et le passage possible vers l’ikamet si le séjour devient long.',
    en: 'This page explains the Turkey visa matching your situation, with entry rules, limits, documents and the possible move to ikamet if the stay becomes long-term.',
    ru: 'Эта страница объясняет подходящую визу в Турцию, правила въезда, ограничения, документы и возможный переход к ikamet при долгом пребывании.',
    ar: 'تشرح هذه الصفحة نوع تأشيرة تركيا المناسب لحالتك، مع قواعد الدخول والحدود والوثائق والانتقال المحتمل إلى الإيكامت إذا أصبحت الإقامة طويلة.',
  },
  rules: baseRules,
  conditions: {
    fr: ['nationalité et type de passeport', 'motif réel du séjour', 'durée prévue et historique des entrées', 'éligibilité e-Visa, exemption ou visa consulaire'],
    en: ['nationality and passport type', 'real purpose of stay', 'planned duration and entry history', 'eligibility for e-Visa, exemption or consular visa'],
    ru: ['гражданство и тип паспорта', 'реальная цель пребывания', 'планируемый срок и история въездов', 'право на e-Visa, освобождение или консульскую визу'],
    ar: ['الجنسية ونوع الجواز', 'سبب الإقامة الحقيقي', 'المدة المخططة وتاريخ الدخول', 'الأهلية لـ e-Visa أو الإعفاء أو التأشيرة القنصلية'],
  },
  documents: {
    fr: ['passeport ou document de voyage valide', 'preuve du motif du séjour', 'réservation ou adresse si demandée', 'assurance si passage vers résidence', 'justificatifs financiers si demandés'],
    en: ['valid passport or travel document', 'proof of travel purpose', 'booking or address if requested', 'insurance if moving to residence', 'financial evidence if requested'],
    ru: ['действительный паспорт или travel document', 'подтверждение цели пребывания', 'бронь или адрес при запросе', 'страховка при переходе к ВНЖ', 'финансовые подтверждения при запросе'],
    ar: ['جواز أو وثيقة سفر صالحة', 'إثبات سبب الإقامة', 'حجز أو عنوان عند الطلب', 'تأمين عند الانتقال إلى الإقامة', 'إثبات مالي عند الطلب'],
  },
  mistakes: {
    fr: ['confondre court séjour et droit de travailler', 'dépasser les jours autorisés', 'attendre la dernière semaine pour préparer l’ikamet', 'utiliser une mauvaise catégorie de visa'],
    en: ['confusing short stay with right to work', 'overstaying authorised days', 'waiting until the last week to prepare ikamet', 'using the wrong visa category'],
    ru: ['путать short stay с правом работать', 'превышать разрешенные дни', 'ждать последнюю неделю для ikamet', 'использовать неправильную категорию визы'],
    ar: ['خلط الإقامة القصيرة مع حق العمل', 'تجاوز الأيام المسموحة', 'انتظار الأسبوع الأخير لتحضير الإيكامت', 'استخدام فئة تأشيرة خاطئة'],
  },
  transition: {
    fr: ['séjour supérieur à la limite autorisée', 'projet familial ou immobilier', 'création de société ou activité locale', 'scolarisation ou installation durable'],
    en: ['stay longer than authorised limit', 'family or property project', 'company setup or local activity', 'schooling or long-term relocation'],
    ru: ['пребывание дольше разрешенного лимита', 'семейный или имущественный проект', 'открытие компании или локальная деятельность', 'школа или долгий переезд'],
    ar: ['البقاء بعد الحد المسموح', 'مشروع عائلي أو عقاري', 'تأسيس شركة أو نشاط محلي', 'دراسة أو انتقال طويل'],
  },
  bosphoras: {
    fr: ['vérification de la catégorie applicable', 'préparation du dossier', 'coordination avocat, assurance, banque, immobilier', 'stratégie séjour court vers résidence longue'],
    en: ['checking the applicable category', 'file preparation', 'lawyer, insurance, banking, property coordination', 'short stay to long residence strategy'],
    ru: ['проверка применимой категории', 'подготовка dossier', 'координация юриста, страховки, банка, недвижимости', 'стратегия от short stay к long residence'],
    ar: ['فحص الفئة المناسبة', 'تحضير الملف', 'تنسيق المحامي والتأمين والبنك والعقار', 'استراتيجية من إقامة قصيرة إلى إقامة طويلة'],
  },
};

const contentByKey: Record<string, Partial<VisaTypeContent>> = {
  'turkey-visa-types-hub': { icon: 'residence', summary: { fr: 'La Turquie propose plusieurs voies d’entrée : sans visa, e-Visa, visa consulaire, visa travail, visa étudiant, visa famille, transit, puis éventuellement ikamet pour un séjour long.', en: 'Turkey has several entry routes: visa-free, e-Visa, consular visa, work visa, student visa, family visa, transit, and potentially ikamet for long stays.', ru: 'В Турции есть несколько вариантов въезда: без визы, e-Visa, консульская виза, рабочая, студенческая, семейная, транзит и затем ikamet для долгого пребывания.', ar: 'تركيا لديها عدة طرق دخول: بدون تأشيرة، e-Visa، تأشيرة قنصلية، عمل، دراسة، عائلة، ترانزيت، ثم إيكامت للإقامة الطويلة.' } },
  'turkey-tourist-visa': { icon: 'plane', summary: { fr: 'Le visa touristique Turquie concerne les visiteurs qui ne peuvent pas entrer sans visa ou qui ne sont pas éligibles à l’e-Visa. Il couvre tourisme et visite privée, pas travail.', en: 'Turkey tourist visa is for visitors who cannot enter visa-free or are not eligible for e-Visa. It covers tourism and private visits, not work.', ru: 'Туристическая виза нужна тем, кто не может въехать без визы или не подходит под e-Visa. Она для туризма и частных визитов, не для работы.', ar: 'تأشيرة السياحة تخص من لا يمكنه الدخول بدون تأشيرة أو ليس مؤهلاً لـ e-Visa. هي للسياحة والزيارة الخاصة، وليس للعمل.' } },
  'turkey-e-visa-main': { icon: 'plane', summary: { fr: 'L’e-Visa Turquie est une autorisation électronique officielle obtenue en ligne. Elle concerne uniquement les voyages touristiques ou commerciaux, jamais le travail ni les études.', en: 'Turkey e-Visa is an official online electronic authorisation. It is only for tourism or commerce, never work or study.', ru: 'e-Visa — официальное электронное разрешение онлайн. Она только для туризма или коммерческих поездок, не для работы и учебы.', ar: 'e-Visa هي تصريح إلكتروني رسمي عبر الإنترنت. هي فقط للسياحة أو التجارة، وليس للعمل أو الدراسة.' } },
  'turkey-business-visa': { icon: 'business', summary: { fr: 'Le visa business Turquie sert aux rendez-vous, salons, prospection, négociation, visites fournisseurs ou clients. Il ne permet pas d’être salarié ou d’exploiter localement une activité sans autorisation adaptée.', en: 'Turkey business visa is for meetings, fairs, prospecting, negotiations, supplier or client visits. It does not allow employment or local operations without proper authorisation.', ru: 'Бизнес-виза нужна для встреч, выставок, переговоров, поставщиков или клиентов. Она не дает право работать или вести деятельность без разрешения.', ar: 'تأشيرة الأعمال للاجتماعات والمعارض والاستكشاف والتفاوض وزيارات الموردين أو العملاء. لا تسمح بالتوظيف أو تشغيل نشاط محلي دون تصريح مناسب.' } },
  'turkey-investor-visa': { icon: 'business', summary: { fr: 'Le visa investisseur Turquie doit être relié à un projet concret : immobilier, société, banque, due diligence, rendez-vous juridiques ou installation. Il doit ensuite être connecté à l’ikamet si le projet se confirme.', en: 'Turkey investor visa must be linked to a real project: property, company, banking, due diligence, legal appointments or relocation. It should then connect to ikamet if confirmed.', ru: 'Виза инвестора должна быть связана с реальным проектом: недвижимость, компания, банк, due diligence, юристы или переезд. Затем нужен ikamet.', ar: 'تأشيرة المستثمر يجب أن ترتبط بمشروع حقيقي: عقار، شركة، بنك، فحص، مواعيد قانونية أو انتقال. ثم يتم ربطها بالإيكامت إذا تأكد المشروع.' } },
  'turkey-work-visa': { icon: 'work', summary: { fr: 'Le visa travail Turquie exige une logique différente : il est lié au permis de travail et à l’employeur. La demande ne doit pas être traitée comme un visa touristique.', en: 'Turkey work visa is different: it is linked to a work permit and employer. It must not be treated as a tourist visa.', ru: 'Рабочая виза отличается: она связана с разрешением на работу и работодателем. Ее нельзя считать туристической визой.', ar: 'تأشيرة العمل مختلفة: ترتبط بتصريح العمل وصاحب العمل. لا يجب التعامل معها كتأشيرة سياحية.' } },
  'turkey-student-visa': { icon: 'student', summary: { fr: 'Le visa étudiant Turquie concerne l’inscription dans une école, université ou programme reconnu. Après l’arrivée, il faut préparer la résidence étudiant selon la durée des études.', en: 'Turkey student visa concerns enrolment in a recognised school, university or programme. After arrival, student residence must be prepared according to study duration.', ru: 'Студенческая виза связана с зачислением в школу, университет или программу. После приезда нужен студенческий ВНЖ по сроку учебы.', ar: 'تأشيرة الدراسة مرتبطة بالتسجيل في مدرسة أو جامعة أو برنامج معترف به. بعد الوصول يجب تحضير إقامة الطالب حسب مدة الدراسة.' } },
  'turkey-family-visa': { icon: 'family', summary: { fr: 'Le visa famille Turquie concerne conjoint, enfants ou installation familiale. Le vrai dossier est souvent la résidence familiale ou courte durée après l’entrée.', en: 'Turkey family visa concerns spouse, children or family relocation. The real file is often family or short-term residence after entry.', ru: 'Семейная виза касается супруга, детей или семейного переезда. Часто настоящий dossier — семейный или краткосрочный ВНЖ.', ar: 'تأشيرة العائلة تخص الزوج أو الأطفال أو انتقال العائلة. غالباً الملف الحقيقي هو الإقامة العائلية أو القصيرة بعد الدخول.' } },
  'turkey-family-reunification-visa': { icon: 'family', summary: { fr: 'Le regroupement familial Turquie doit prouver le lien familial, le sponsor, l’adresse, les ressources et la résidence qui suivra.', en: 'Turkey family reunification must prove family link, sponsor, address, resources and the residence permit that follows.', ru: 'Воссоединение семьи требует доказать связь, sponsor, адрес, ресурсы и последующий ВНЖ.', ar: 'لم الشمل يتطلب إثبات الرابط العائلي والكفيل والعنوان والموارد والإقامة اللاحقة.' } },
  'turkey-property-owner-visa': { icon: 'property', summary: { fr: 'Le propriétaire immobilier étranger doit distinguer achat, visa et résidence. Un titre de propriété peut soutenir un ikamet, mais il ne garantit pas automatiquement la résidence.', en: 'A foreign property owner must distinguish purchase, visa and residence. A title deed may support ikamet but does not automatically guarantee residence.', ru: 'Иностранный собственник должен отличать покупку, визу и ВНЖ. Тапу может поддержать ikamet, но не гарантирует ВНЖ автоматически.', ar: 'مالك العقار الأجنبي يجب أن يفرق بين الشراء والتأشيرة والإقامة. سند الملكية قد يدعم الإيكامت لكنه لا يضمنها تلقائياً.' } },
  'turkey-retirement-visa': { icon: 'residence', summary: { fr: 'La Turquie n’a pas un simple visa retraite automatique pour tous. Un retraité doit organiser entrée, assurance santé, adresse, ressources, ikamet et fiscalité de la pension.', en: 'Turkey does not have a simple automatic retirement visa for everyone. A retiree must organise entry, health insurance, address, funds, ikamet and pension tax.', ru: 'В Турции нет простой автоматической retirement visa для всех. Пенсионеру нужны въезд, страховка, адрес, средства, ikamet и налоги на пенсию.', ar: 'لا توجد في تركيا تأشيرة تقاعد تلقائية للجميع. يحتاج المتقاعد إلى تنظيم الدخول والتأمين والعنوان والموارد والإيكامت وضرائب المعاش.' } },
  'turkey-digital-nomad-visa': { icon: 'business', summary: { fr: 'Un digital nomad doit distinguer entrée touristique, travail à distance, revenus étrangers, résidence administrative et résidence fiscale. Le dossier dépend des clients, du pays de facturation et du temps réel en Turquie.', en: 'A digital nomad must distinguish tourist entry, remote work, foreign income, administrative residence and tax residence. The file depends on clients, billing country and real time in Turkey.', ru: 'Digital nomad должен разделять туристический въезд, удаленную работу, иностранный доход, административную и налоговую резиденцию. Dossier зависит от клиентов, страны счетов и времени в Турции.', ar: 'الرحالة الرقمي يجب أن يفرق بين الدخول السياحي والعمل عن بعد والدخل الأجنبي والإقامة الإدارية والضريبية. الملف يعتمد على العملاء وبلد الفوترة والوقت الحقيقي في تركيا.' } },
  'turkey-transit-visa': { icon: 'plane', summary: { fr: 'Le visa transit Turquie dépend de votre nationalité, de l’aéroport, de la sortie ou non de la zone internationale, du temps d’escale et du document de voyage.', en: 'Turkey transit visa depends on nationality, airport, whether you leave the international zone, layover duration and travel document.', ru: 'Транзитная виза зависит от гражданства, аэропорта, выхода из международной зоны, длительности пересадки и документа.', ar: 'تأشيرة الترانزيت تعتمد على الجنسية والمطار وهل ستغادر المنطقة الدولية ومدة التوقف ووثيقة السفر.' } },
  'turkey-visa-overstay': { icon: 'warning', summary: { fr: 'Un dépassement de visa en Turquie peut entraîner amende, restriction d’entrée, refus ou complication d’un futur ikamet. Il faut agir avant expiration quand c’est possible.', en: 'Turkey visa overstay can lead to fines, entry restriction, refusal or complications for future ikamet. Action should be taken before expiry when possible.', ru: 'Просрочка может привести к штрафу, ограничению въезда, отказу или проблемам с ikamet. Лучше действовать до окончания срока.', ar: 'تجاوز مدة التأشيرة قد يؤدي إلى غرامة أو تقييد دخول أو رفض أو تعقيد الإيكامت. يجب التصرف قبل الانتهاء عند الإمكان.' } },
};

function contentFor(page: BosphorasProgrammaticSeoPage): VisaTypeContent {
  const override = contentByKey[page.key] ?? {};
  return { ...defaultContent, ...override, rules: override.rules ?? defaultContent.rules, conditions: override.conditions ?? defaultContent.conditions, documents: override.documents ?? defaultContent.documents, mistakes: override.mistakes ?? defaultContent.mistakes, transition: override.transition ?? defaultContent.transition, bosphoras: override.bosphoras ?? defaultContent.bosphoras };
}

function iconFor(type: VisaTypeContent['icon']) {
  const cls = 'h-8 w-8 text-[#8a6728]';
  if (type === 'business') return <BriefcaseBusiness className={cls} />;
  if (type === 'work') return <Landmark className={cls} />;
  if (type === 'student') return <GraduationCap className={cls} />;
  if (type === 'family') return <Users className={cls} />;
  if (type === 'property') return <Home className={cls} />;
  if (type === 'residence') return <ShieldCheck className={cls} />;
  if (type === 'warning') return <AlertTriangle className={cls} />;
  return <Plane className={cls} />;
}

function assessmentHref(locale: Locale) { return locale === 'fr' ? '/diagnostic-prive' : locale === 'en' ? '/en/private-assessment' : locale === 'ru' ? '/ru/chastnaya-konsultatsiya' : '/ar/تقييم-خاص'; }
function baseUrl(page: BosphorasProgrammaticSeoPage, locale: Locale) { return `${siteUrl}${page.slugs[locale]}`; }

const relatedKeys = ['turkey-visa-types-hub','turkey-tourist-visa','turkey-e-visa-main','enter-turkey-without-visa','turkey-90-days-in-180','turkey-passport-or-id-card','turkey-business-visa','turkey-investor-visa','turkey-work-visa','turkey-student-visa','turkey-family-visa','turkey-transit-visa','turkey-residence-permit-main','turkey-ikamet-main','short-term-vnzh-turkey','turkey-residence-property-purchase'];

function faq(page: BosphorasProgrammaticSeoPage, content: VisaTypeContent, locale: Locale): Array<[string, string]> {
  if (locale === 'fr') return [[`${page.titles.fr} : est-ce automatique ?`, 'Non. La règle dépend de la nationalité, du type de passeport, du motif, de la durée et du dossier.'], ['Ce visa permet-il de travailler ?', content.icon === 'work' ? 'Le visa travail doit être lié à une procédure de permis de travail et à un employeur.' : 'Non. Tourisme, e-Visa ou business court ne remplacent pas un permis de travail.'], ['Quand demander un ikamet ?', 'Dès que le séjour dépasse l’autorisation d’entrée ou que le projet devient familial, immobilier, étudiant, professionnel ou long terme.']];
  if (locale === 'en') return [[`${page.titles.en}: is it automatic?`, 'No. The rule depends on nationality, passport type, purpose, duration and the file.'], ['Does this visa allow work?', content.icon === 'work' ? 'A work visa must be linked to a work permit procedure and an employer.' : 'No. Tourism, e-Visa or short business entry does not replace a work permit.'], ['When should I apply for ikamet?', 'When the stay exceeds the entry authorisation or the project becomes family, property, student, professional or long-term.']];
  if (locale === 'ru') return [[`${page.titles.ru}: это автоматически?`, 'Нет. Правило зависит от гражданства, типа паспорта, цели, срока и dossier.'], ['Можно ли работать по этой визе?', content.icon === 'work' ? 'Рабочая виза должна быть связана с процедурой work permit и работодателем.' : 'Нет. Туризм, e-Visa или короткий business entry не заменяют work permit.'], ['Когда нужен ikamet?', 'Когда stay превышает разрешение на въезд или проект становится семейным, имущественным, учебным, профессиональным или долгосрочным.']];
  return [[`${page.titles.ar}: هل هو تلقائي؟`, 'لا. القاعدة تعتمد على الجنسية ونوع الجواز والسبب والمدة والملف.'], ['هل تسمح هذه التأشيرة بالعمل؟', content.icon === 'work' ? 'تأشيرة العمل يجب أن ترتبط بتصريح عمل وصاحب عمل.' : 'لا. السياحة أو e-Visa أو دخول الأعمال القصير لا يعوض تصريح العمل.'], ['متى أحتاج إلى الإيكامت؟', 'عندما تتجاوز الإقامة مدة الدخول أو يصبح المشروع عائلياً أو عقارياً أو دراسياً أو مهنياً أو طويل الأجل.']];
}

export function BosphorasVisaTypeSeoPage({ page, locale, allPages }: { page: BosphorasProgrammaticSeoPage; locale: Locale; allPages: BosphorasProgrammaticSeoPage[] }) {
  const l = labels[locale];
  const content = contentFor(page);
  const canonical = baseUrl(page, locale);
  const pageFaq = faq(page, content, locale);
  const related = relatedKeys.map((key) => allPages.find((item) => item.key === key)).filter(Boolean) as BosphorasProgrammaticSeoPage[];
  const description = `${page.titles[locale]} — ${content.summary[locale]}`.slice(0, 300);
  return <>
    <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: page.titles[locale], description, inLanguage: locale, datePublished: '2026-06-05', dateModified: '2026-06-05', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: canonical, keywords: page.focus.join(', ') }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: pageFaq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
    <Header locale={locale} currentPath={page.slugs[locale]} />
    <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
      <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{l.guide} · {l.updated}</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">{page.titles[locale]}</h1><p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{content.summary[locale]}</p><Link href={assessmentHref(locale)} className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{l.cta}<ArrowRight size={16} /></Link></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]">{iconFor(content.icon)}<h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.rules}</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{content.rules[locale].map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2"><div><FileText className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.conditions}</h2><div className="mt-8 grid gap-3">{content.conditions[locale].map((item) => <p key={item} className="border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]">{item}</p>)}</div></div><div><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.documents}</h2><div className="mt-8 grid gap-3">{content.documents[locale].map((item) => <p key={item} className="border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]">{item}</p>)}</div></div></div></section>
      <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2"><div><AlertTriangle className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.mistakes}</h2><div className="mt-8 grid gap-3">{content.mistakes[locale].map((item) => <p key={item} className="border border-white/15 bg-white/5 p-5 text-sm leading-7 text-white/75">{item}</p>)}</div></div><div><Home className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.transition}</h2><div className="mt-8 grid gap-3">{content.transition[locale].map((item) => <p key={item} className="border border-white/15 bg-white/5 p-5 text-sm leading-7 text-white/75">{item}</p>)}</div></div></div></section>
      <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.support}</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{content.bosphoras[locale].map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div></div></section>
      <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.compare}</h2><div className="mt-8 grid gap-3 md:grid-cols-4">{related.map((item) => <Link key={item.key} href={item.slugs[locale]} className="border border-[#d8c7a1] bg-white p-5 text-sm font-semibold leading-7 text-[#121826] hover:bg-[#f8f1e7]">{item.titles[locale]}</Link>)}</div></div></section>
      <section className="px-5 pb-20 md:px-8 md:pb-28"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.faq}</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{pageFaq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
    </main>
    <Footer locale={locale} />
  </>;
}
