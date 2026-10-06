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
import { fetchPublishedProperties } from '@/lib/propertyStore';
import {
  formatEntryCapital,
  formatPropertyPrice,
  getPropertyPath,
  paymentBadge,
  propertyLocationLabel,
} from '@/data/propertyDesk';

const primaryButton =
  'inline-flex min-h-[48px] items-center justify-center gap-3 bg-[#d2a863] px-6 py-4 text-sm font-semibold text-[#101827] transition hover:bg-[#e0bc78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8a6728]';
const darkButton =
  'inline-flex min-h-[48px] items-center justify-center gap-3 bg-[#121826] px-6 py-4 text-sm font-semibold text-[#fffaf0] transition hover:bg-[#263246]';
const textLink =
  'inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#795a22] underline decoration-[#d8c7a1] underline-offset-4 transition hover:text-[#8a6728]';

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

export async function HomeProjectPaths({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const propertyHref = route(locale, 'property');
  const businessHref = route(locale, 'business-setup');
  const relocationHref = route(locale, 'relocate');
  const assessmentHref = route(locale, 'private-assessment');
  const privateAccessHref = route(locale, 'private-club');
  const properties = (await fetchPublishedProperties()).slice(0, 3);
  const peninsulaHref = locale === 'fr' ? '/peninsula-istanbul' : `/${locale}/peninsula-istanbul`;

  const paths = [
    { icon: Building2, title: c.propertyTitle, text: c.propertyText, cta: c.propertyCta, href: propertyHref },
    { icon: BriefcaseBusiness, title: c.businessTitle, text: c.businessText, cta: c.businessCta, href: businessHref },
    { icon: Home, title: c.relocationTitle, text: c.relocationText, cta: c.relocationCta, href: relocationHref },
  ];

  return (
    <>
      <section id="votre-projet" className="scroll-mt-24 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">{c.pathsEyebrow}</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">{c.pathsTitle}</h2>
            <p className="max-w-2xl text-base leading-8 text-[#46505f] lg:justify-self-end">{c.pathsIntro}</p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {paths.map(({ icon: Icon, title, text, cta, href }) => (
              <Link
                key={title}
                href={href}
                className="group flex min-h-[330px] flex-col border border-[#d8c7a1] bg-[#fffaf0] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8a6728] hover:shadow-[0_24px_70px_rgba(16,24,39,0.10)] md:p-9"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-[#d8c7a1] bg-white text-[#8a6728]">
                  <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.4} />
                </div>
                <h3 className="mt-8 font-serif text-3xl leading-tight text-[#121826]">{title}</h3>
                <p className="mt-4 text-base leading-8 text-[#46505f]">{text}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-[#795a22]">
                  {cta}<ArrowRight aria-hidden="true" size={16} className="transition group-hover:translate-x-1 rtl:rotate-180" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#46505f]">
            <span>{c.complexProject}</span>
            <Link href={assessmentHref} className={textLink}>{c.complexProjectCta}<ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8c7a1] bg-white px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">{c.propertyEyebrow}</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-6xl">{c.propertySectionTitle}</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-[#46505f] lg:justify-self-end">{c.propertySectionText}</p>
          </div>

          {properties.length > 0 ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {properties.map((property) => {
                const title = property.shortTitle?.[locale] || property.title[locale] || property.developer || property.cityName;
                const image = property.heroImage || property.images[0];
                const entry = formatEntryCapital(property, locale);
                const badge = paymentBadge(property, locale);
                return (
                  <Link
                    key={property.id}
                    href={getPropertyPath(locale, property)}
                    className="group overflow-hidden border border-[#d8c7a1] bg-[#fffaf0] transition hover:border-[#8a6728] hover:shadow-[0_24px_70px_rgba(16,24,39,0.10)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#e8dfd0]">
                      {image ? (
                        <img src={image} alt={title} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[#8a6728]"><Building2 className="h-10 w-10" strokeWidth={1.2} /></div>
                      )}
                      {badge && <span className="absolute left-4 top-4 bg-[#121826]/92 px-3 py-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#fffaf0]">{badge}</span>}
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]">{propertyLocationLabel(property)}</p>
                      <h3 className="mt-3 font-serif text-2xl leading-tight text-[#121826]">{title}</h3>
                      <div className="mt-5 flex items-end justify-between gap-4 border-t border-[#d8c7a1] pt-5">
                        <div>
                          <p className="text-lg font-semibold text-[#121826]">{formatPropertyPrice(property, locale)}</p>
                          {entry && <p className="mt-1 text-xs text-[#5d6672]">{entry}</p>}
                        </div>
                        <ArrowRight className="h-5 w-5 shrink-0 text-[#8a6728] transition group-hover:translate-x-1 rtl:rotate-180" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 border border-[#d8c7a1] bg-[#fffaf0] p-7 text-base leading-8 text-[#46505f]">{c.selectionFallback}</div>
          )}

          <Link href={propertyHref} className={darkButton + ' mt-8'}>{c.allProperties}<ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden border border-[#d8c7a1] bg-[#fffaf0] lg:grid-cols-2">
          <div className="p-7 md:p-12 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">{c.businessEyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-5xl">{c.businessSectionTitle}</h2>
            <p className="mt-6 text-base leading-8 text-[#46505f]">{c.businessSectionText}</p>
            <Link href={businessHref} className={darkButton + ' mt-8'}>{c.businessCta}<ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="bg-[#121826] p-7 text-[#fffaf0] md:p-12 lg:p-14">
            <div className="grid gap-4 sm:grid-cols-2">
              {c.businessSteps.map((step, index) => (
                <div key={step} className="border border-white/15 bg-white/[0.035] p-5">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#d2a863]">0{index + 1}</span>
                  <p className="mt-5 font-serif text-2xl">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ece3d5] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">{c.relocationEyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-5xl">{c.relocationSectionTitle}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#46505f]">{c.relocationSectionText}</p>
            <Link href={relocationHref} className={darkButton + ' mt-8'}>{c.relocationCta}<ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.relocationSteps.map((step) => (
              <div key={step} className="flex min-h-[120px] items-start gap-4 border border-[#d8c7a1] bg-[#fffaf0] p-6">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8a6728]" strokeWidth={1.5} />
                <p className="font-serif text-2xl leading-snug text-[#121826]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071426] px-5 py-20 text-[#fffaf0] md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{c.differenceEyebrow}</p>
            <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.differenceTitle}</h2>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-[#d8cfbf]">{c.differenceText}</p>
          </div>
          <div className="space-y-4 lg:pt-10">
            {c.differencePoints.map((point) => (
              <div key={point} className="flex gap-4 border-t border-[#d2a863]/25 py-5">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#d2a863]" strokeWidth={1.4} />
                <p className="text-base leading-8 text-[#e8e0d2]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1320px] border border-[#d8c7a1] bg-[#fffaf0] p-7 md:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#8a6728]">{c.accessEyebrow}</p>
              <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-[-0.04em] text-[#121826] md:text-5xl">{c.accessTitle}</h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#46505f]">{c.accessText}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={privateAccessHref} className={darkButton}>{c.accessCta}<ArrowRight size={16} aria-hidden="true" /></Link>
                <Link href={peninsulaHref} className={textLink}>{c.peninsulaCta}<ArrowRight size={15} aria-hidden="true" /></Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {c.accessPoints.map((point) => (
                <div key={point} className="flex min-h-[110px] items-center gap-4 border border-[#d8c7a1] bg-white p-5">
                  <KeyRound className="h-5 w-5 shrink-0 text-[#8a6728]" strokeWidth={1.4} />
                  <p className="font-serif text-xl leading-snug text-[#121826]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function HomeFinalContact({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const assessmentHref = route(locale, 'private-assessment');

  return (
    <section className="bg-[#121826] px-5 py-16 text-[#fffaf0] md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">Bosphoras Private Office</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.04em] md:text-6xl">{c.finalTitle}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#e0d8c9]">{c.finalText}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href={assessmentHref} data-cta-id="home_final" className={primaryButton}>{c.finalCta}<ArrowRight aria-hidden="true" size={16} /></Link>
          <a href="https://wa.me/905467699996" target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-3 border border-white/25 px-6 py-4 text-sm font-semibold text-[#fffaf0] transition hover:bg-white/10">
            <MessageCircle size={17} aria-hidden="true" />{c.whatsapp}
          </a>
        </div>
        <a href="tel:+905467699996" className="mt-5 inline-flex text-sm text-[#d8cfbf] underline decoration-white/25 underline-offset-4 hover:text-white">{c.phone}</a>
      </div>
    </section>
  );
}
