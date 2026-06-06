import Link from 'next/link';
import { ArrowRight, AlertTriangle, CheckCircle2, FileText, Globe2, Landmark, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';
import { siteUrl } from '@/lib/routes';
import type { BosphorasProgrammaticSeoPage } from '@/data/bosphorasProgrammaticSeoPages';

const labels: Record<Locale, Record<string, string>> = {
  fr: {
    guide: 'Guide visa & résidence Turquie',
    updated: 'Mis à jour le 5 juin 2026',
    direct: 'Ce que vous devez vérifier avant de voyager en Turquie',
    entry: 'Sans visa, e-Visa, visa consulaire ou carte d’identité',
    stay: 'Durée de séjour et règle des 180 jours',
    residence: 'Après l’entrée : résidence, ikamet et installation',
    documents: 'Documents généralement à préparer',
    profiles: 'Profils accompagnés par Bosphoras',
    warning: 'Information importante',
    faq: 'Questions fréquentes',
    cta: 'Faire vérifier mon dossier',
  },
  en: {
    guide: 'Turkey visa & residence guide',
    updated: 'Updated on June 5, 2026',
    direct: 'What to verify before travelling to Turkey',
    entry: 'Visa-free entry, e-Visa, consular visa or ID card',
    stay: 'Stay duration and 180-day rule',
    residence: 'After entry: residence permit, ikamet and relocation',
    documents: 'Documents usually required',
    profiles: 'Profiles supported by Bosphoras',
    warning: 'Important information',
    faq: 'FAQ',
    cta: 'Check my file privately',
  },
  ru: {
    guide: 'Гид по визе и ВНЖ в Турции',
    updated: 'Обновлено 5 июня 2026',
    direct: 'Что проверить перед поездкой в Турцию',
    entry: 'Без визы, e-Visa, консульская виза или ID-карта',
    stay: 'Срок пребывания и правило 180 дней',
    residence: 'После въезда: ВНЖ, ikamet и переезд',
    documents: 'Документы, которые обычно нужны',
    profiles: 'Профили, которые сопровождает Bosphoras',
    warning: 'Важная информация',
    faq: 'Частые вопросы',
    cta: 'Проверить мой dossier',
  },
  ar: {
    guide: 'دليل التأشيرة والإقامة في تركيا',
    updated: 'تم التحديث في 5 يونيو 2026',
    direct: 'ما يجب التحقق منه قبل السفر إلى تركيا',
    entry: 'دخول بدون تأشيرة، e-Visa، تأشيرة قنصلية أو بطاقة هوية',
    stay: 'مدة الإقامة وقاعدة 180 يوماً',
    residence: 'بعد الدخول: الإقامة، الإيكامت والانتقال',
    documents: 'الوثائق المطلوبة عادة',
    profiles: 'الملفات التي يرافقها Bosphoras',
    warning: 'معلومة مهمة',
    faq: 'الأسئلة الشائعة',
    cta: 'فحص ملفي بشكل خاص',
  },
};

function assessmentHref(locale: Locale) {
  return locale === 'fr' ? '/diagnostic-prive' : locale === 'en' ? '/en/private-assessment' : locale === 'ru' ? '/ru/chastnaya-konsultatsiya' : '/ar/تقييم-خاص';
}

function baseUrl(page: BosphorasProgrammaticSeoPage, locale: Locale) {
  return `${siteUrl}${page.slugs[locale]}`;
}

function intro(page: BosphorasProgrammaticSeoPage, locale: Locale) {
  const title = page.titles[locale];
  if (locale === 'fr') return `${title} : cette page vous aide à comprendre si vous pouvez entrer en Turquie sans visa, avec un e-Visa, avec un visa consulaire, avec une carte d’identité selon votre nationalité, ou si vous devez préparer un titre de séjour / ikamet pour rester plus longtemps.`;
  if (locale === 'en') return `${title}: this page helps you understand whether you can enter Turkey visa-free, with an e-Visa, with a consular visa, with a national ID card depending on nationality, or whether you should prepare a residence permit / ikamet for a longer stay.`;
  if (locale === 'ru') return `${title}: эта страница помогает понять, можно ли въехать в Турцию без визы, по e-Visa, по консульской визе, по ID-карте в зависимости от гражданства, или нужно готовить ВНЖ / ikamet для более длительного пребывания.`;
  return `${title}: تساعدك هذه الصفحة على فهم ما إذا كان بإمكانك دخول تركيا بدون تأشيرة، أو عبر e-Visa، أو بتأشيرة قنصلية، أو ببطاقة هوية حسب الجنسية، أو إذا كان يجب تحضير إقامة / إيكامت للبقاء مدة أطول.`;
}

function directPoints(locale: Locale) {
  if (locale === 'fr') return [
    'La Turquie applique des règles différentes selon la nationalité, le type de passeport, le motif de voyage et la durée prévue.',
    'Certains voyageurs peuvent entrer sans visa, d’autres doivent demander un e-Visa, et certains profils doivent passer par une demande consulaire.',
    'Certains pays bénéficient d’accords permettant l’entrée avec une carte nationale d’identité au lieu d’un passeport, mais cette possibilité doit être vérifiée avant le départ.',
    'Un séjour touristique ou business court ne donne pas automatiquement le droit de travailler, de s’installer durablement ou de devenir résident fiscal.',
    'Pour rester au-delà de la durée autorisée, il faut préparer une stratégie de résidence : ikamet, assurance, adresse, documents, rendez-vous et conformité.',
  ];
  if (locale === 'en') return [
    'Turkey applies different rules depending on nationality, passport type, travel purpose and intended stay duration.',
    'Some travellers enter visa-free, some need an e-Visa, and some profiles must apply through a consulate.',
    'Some countries benefit from agreements allowing entry with a national ID card instead of a passport, but eligibility must be verified before travel.',
    'A short tourism or business stay does not automatically allow work, long-term relocation or tax residence.',
    'To stay beyond the authorised period, you need a residence strategy: ikamet, insurance, address, documents, appointment and compliance.',
  ];
  if (locale === 'ru') return [
    'Правила Турции зависят от гражданства, типа паспорта, цели поездки и планируемого срока пребывания.',
    'Некоторые путешественники въезжают без визы, некоторым нужна e-Visa, а некоторые должны оформлять визу через консульство.',
    'Для граждан некоторых стран возможен въезд по национальной ID-карте вместо паспорта, но это нужно проверить до поездки.',
    'Короткая туристическая или деловая поездка не дает автоматически право работать, жить длительно или становиться налоговым резидентом.',
    'Для пребывания дольше разрешенного срока нужна стратегия ВНЖ: ikamet, страховка, адрес, документы, запись и compliance.',
  ];
  return [
    'تطبق تركيا قواعد مختلفة حسب الجنسية ونوع جواز السفر وسبب السفر ومدة الإقامة المتوقعة.',
    'بعض المسافرين يدخلون بدون تأشيرة، وبعضهم يحتاج إلى e-Visa، وبعض الملفات تحتاج إلى طلب عبر القنصلية.',
    'بعض الدول لديها اتفاقات تسمح بالدخول ببطاقة الهوية الوطنية بدل جواز السفر، لكن يجب التحقق من الأهلية قبل السفر.',
    'الإقامة السياحية أو التجارية القصيرة لا تعطي تلقائياً حق العمل أو الاستقرار الطويل أو الإقامة الضريبية.',
    'للبقاء بعد المدة المسموحة يجب إعداد استراتيجية إقامة: إيكامت، تأمين، عنوان، وثائق، موعد وامتثال.',
  ];
}

function stayRules(locale: Locale) {
  if (locale === 'fr') return [
    ['30 jours', 'Certaines nationalités peuvent recevoir une autorisation courte. La durée exacte dépend du pays, du passeport et du type d’entrée.'],
    ['60 jours', 'Certaines nationalités bénéficient d’une durée intermédiaire par entrée ou dans une période déterminée. Vérification obligatoire avant voyage.'],
    ['90 jours sur 180 jours', 'C’est le format le plus connu pour de nombreux voyageurs, mais il ne concerne pas tous les pays. Il faut compter les jours déjà passés en Turquie.'],
    ['Dépassement de durée', 'Un dépassement peut créer amende, restriction d’entrée ou difficulté future pour un ikamet. Il faut anticiper avant expiration.'],
  ];
  if (locale === 'en') return [
    ['30 days', 'Some nationalities receive a short stay authorisation. The exact duration depends on country, passport and entry type.'],
    ['60 days', 'Some nationalities benefit from an intermediate duration per entry or within a defined period. Verification is required before travel.'],
    ['90 days within 180 days', 'This is the most common format for many travellers, but it does not apply to every country. Previous days spent in Turkey must be counted.'],
    ['Overstay', 'Overstaying can create fines, entry restrictions or future residence permit difficulties. It must be handled before expiry.'],
  ];
  if (locale === 'ru') return [
    ['30 дней', 'Для некоторых граждан действует короткий срок. Точная длительность зависит от страны, паспорта и типа въезда.'],
    ['60 дней', 'Для некоторых граждан возможен промежуточный срок за въезд или в установленный период. Перед поездкой нужна проверка.'],
    ['90 дней в 180 дней', 'Это распространенный формат для многих путешественников, но не для всех стран. Нужно считать уже проведенные дни в Турции.'],
    ['Превышение срока', 'Overstay может привести к штрафу, ограничению въезда или проблемам при будущем ikamet. Нужно действовать до истечения срока.'],
  ];
  return [
    ['30 يوماً', 'بعض الجنسيات تحصل على مدة قصيرة. المدة الدقيقة تعتمد على الدولة ونوع الجواز ونوع الدخول.'],
    ['60 يوماً', 'بعض الجنسيات تستفيد من مدة متوسطة لكل دخول أو ضمن فترة محددة. يجب التحقق قبل السفر.'],
    ['90 يوماً خلال 180 يوماً', 'هذا الشكل شائع لكثير من المسافرين، لكنه لا ينطبق على كل الدول. يجب احتساب الأيام السابقة في تركيا.'],
    ['تجاوز المدة', 'تجاوز المدة قد يؤدي إلى غرامة أو تقييد دخول أو صعوبة لاحقة في الإقامة. يجب التعامل معه قبل انتهاء المدة.'],
  ];
}

function residenceRules(locale: Locale) {
  if (locale === 'fr') return [
    'L’ikamet est le titre de séjour turc permettant de rester au-delà de la durée d’entrée autorisée lorsque le dossier est accepté.',
    'La résidence courte durée peut concerner certains profils : propriétaire immobilier, investisseur, famille, retraité, entrepreneur, projet d’installation ou séjour prolongé.',
    'La demande exige généralement une adresse en Turquie, une assurance santé adaptée, des photos, passeport, justificatifs, rendez-vous et paiement des frais applicables.',
    'Le renouvellement doit être préparé avant l’expiration. Un refus ou un dossier incomplet peut compliquer les entrées futures.',
    'La résidence administrative ne crée pas automatiquement la résidence fiscale : il faut analyser présence réelle, centre des intérêts, revenus, famille et conventions fiscales.',
  ];
  if (locale === 'en') return [
    'Ikamet is the Turkish residence permit allowing a foreigner to stay beyond the authorised entry period when the file is approved.',
    'Short-term residence may apply to profiles such as property owners, investors, families, retirees, entrepreneurs, relocation projects or extended stays.',
    'The application usually requires a Turkish address, suitable health insurance, photos, passport, supporting documents, appointment and applicable fees.',
    'Renewal must be prepared before expiry. A refusal or incomplete file may complicate future entries.',
    'Administrative residence does not automatically create tax residence: real presence, centre of interests, income, family and tax treaties must be analysed.',
  ];
  if (locale === 'ru') return [
    'Ikamet — это турецкий вид на жительство, который позволяет иностранцу оставаться дольше разрешенного срока въезда, если dossier одобрен.',
    'Краткосрочный ВНЖ может подходить собственникам недвижимости, инвесторам, семьям, пенсионерам, предпринимателям, проектам переезда или длительного пребывания.',
    'Обычно нужны адрес в Турции, подходящая медицинская страховка, фотографии, паспорт, подтверждающие документы, запись и оплата сборов.',
    'Продление нужно готовить до истечения срока. Отказ или неполный dossier могут осложнить будущий въезд.',
    'Административная резиденция не создает автоматически налоговую резиденцию: нужно анализировать реальное присутствие, центр интересов, доходы, семью и налоговые соглашения.',
  ];
  return [
    'الإيكامت هو تصريح الإقامة التركي الذي يسمح للأجنبي بالبقاء بعد مدة الدخول المسموحة إذا تم قبول الملف.',
    'الإقامة قصيرة الأجل قد تناسب مالكي العقار، المستثمرين، العائلات، المتقاعدين، رواد الأعمال، مشاريع الانتقال أو الإقامة الطويلة.',
    'عادةً يحتاج الملف إلى عنوان في تركيا، تأمين صحي مناسب، صور، جواز سفر، وثائق داعمة، موعد ورسوم مطبقة.',
    'يجب تحضير التجديد قبل انتهاء الصلاحية. الرفض أو الملف الناقص قد يعقد الدخول لاحقاً.',
    'الإقامة الإدارية لا تعني تلقائياً الإقامة الضريبية: يجب تحليل التواجد الحقيقي ومركز المصالح والدخل والعائلة والاتفاقيات الضريبية.',
  ];
}

function documents(locale: Locale) {
  if (locale === 'fr') return ['passeport ou carte d’identité si accord applicable','validité du document de voyage','justificatif d’adresse en Turquie','assurance santé compatible avec la résidence','photos biométriques','preuve de ressources ou documents financiers si demandés','titre de propriété ou contrat de location si pertinent','documents familiaux traduits/apostillés si nécessaire','historique des jours de présence en Turquie','vérification officielle des règles selon nationalité'];
  if (locale === 'en') return ['passport or national ID if an agreement applies','travel document validity','proof of address in Turkey','health insurance compatible with residence','biometric photos','proof of means or financial documents if requested','title deed or rental contract when relevant','family documents translated/apostilled when needed','history of days spent in Turkey','official rule check according to nationality'];
  if (locale === 'ru') return ['паспорт или ID-карта, если действует соглашение','срок действия travel document','подтверждение адреса в Турции','медицинская страховка для ВНЖ','биометрические фото','финансовые документы при необходимости','тапу или договор аренды при необходимости','семейные документы с переводом/апостилем при необходимости','история дней пребывания в Турции','официальная проверка правил по гражданству'];
  return ['جواز سفر أو بطاقة هوية إذا كان الاتفاق ينطبق','صلاحية وثيقة السفر','إثبات عنوان في تركيا','تأمين صحي مناسب للإقامة','صور بيومترية','إثبات موارد أو وثائق مالية عند الطلب','سند ملكية أو عقد إيجار عند الحاجة','وثائق عائلية مترجمة/مصدقة عند الحاجة','تاريخ أيام الإقامة في تركيا','تحقق رسمي من القواعد حسب الجنسية'];
}

function profiles(locale: Locale) {
  if (locale === 'fr') return ['visiteur sans visa qui veut prolonger son séjour','investisseur immobilier venant visiter Istanbul, Bodrum ou Antalya','famille préparant une installation en Turquie','entrepreneur ou dirigeant venant créer une société','Britannique / Anglais souhaitant comprendre visa, résidence et ikamet','retraité avec projet de long séjour','digital nomad ou consultant avec revenus étrangers','family office recherchant une installation coordonnée'];
  if (locale === 'en') return ['visa-free visitor planning to extend the stay','property investor visiting Istanbul, Bodrum or Antalya','family preparing relocation to Turkey','entrepreneur or founder creating a company','British citizen checking visa, residence and ikamet','retiree planning a long stay','digital nomad or consultant with foreign income','family office needing coordinated relocation'];
  if (locale === 'ru') return ['посетитель без визы, который хочет продлить пребывание','инвестор в недвижимость в Istanbul, Bodrum или Antalya','семья, готовящая переезд в Турцию','предприниматель или founder компании','гражданин UK, проверяющий visa, residence и ikamet','пенсионер для длительного проживания','digital nomad или consultant с иностранными доходами','family office для координированного переезда'];
  return ['زائر بدون تأشيرة يريد تمديد الإقامة','مستثمر عقاري يزور Istanbul أو Bodrum أو Antalya','عائلة تحضر للانتقال إلى تركيا','رائد أعمال أو مؤسس شركة','مواطن بريطاني يريد فهم التأشيرة والإقامة والإيكامت','متقاعد يخطط لإقامة طويلة','رحالة رقمي أو مستشار بدخل أجنبي','family office يحتاج انتقالاً منسقاً'];
}

function faq(page: BosphorasProgrammaticSeoPage, locale: Locale): Array<[string, string]> {
  if (locale === 'fr') return [
    ['Combien de jours puis-je rester en Turquie sans visa ?', 'Cela dépend de votre nationalité. Certaines situations sont de 30, 60 ou 90 jours, souvent dans une période de 180 jours. La règle exacte doit être vérifiée avant le départ.'],
    ['Puis-je entrer en Turquie avec une carte d’identité ?', 'Certains pays bénéficient d’accords permettant l’entrée avec une carte nationale d’identité. Cette possibilité ne concerne pas toutes les nationalités et doit être confirmée avant le voyage.'],
    ['L’e-Visa Turquie remplace-t-il toujours le visa consulaire ?', 'Non. L’e-Visa dépend de la nationalité, du passeport et du motif du voyage. Certains profils doivent passer par une procédure consulaire.'],
    ['Que faire si je veux rester plus longtemps ?', 'Il faut préparer un dossier de résidence / ikamet avant l’expiration de la durée autorisée : adresse, assurance, documents, rendez-vous et conformité.'],
    ['Bosphoras peut-il vérifier les règles pour mon pays ?', 'Oui. Bosphoras prépare une vérification privée du dossier et coordonne, si nécessaire, les partenaires juridiques, administratifs, assurance, banque et installation.'],
  ];
  if (locale === 'en') return [
    ['How many days can I stay in Turkey without a visa?', 'It depends on nationality. Some situations allow 30, 60 or 90 days, often within a 180-day period. The exact rule must be checked before travel.'],
    ['Can I enter Turkey with a national ID card?', 'Some countries benefit from agreements allowing entry with a national ID card. This does not apply to every nationality and must be confirmed before travel.'],
    ['Does Turkey e-Visa always replace a consular visa?', 'No. e-Visa eligibility depends on nationality, passport and travel purpose. Some profiles must use a consular procedure.'],
    ['What if I want to stay longer?', 'You should prepare a residence permit / ikamet file before the authorised stay expires: address, insurance, documents, appointment and compliance.'],
    ['Can Bosphoras verify the rules for my country?', 'Yes. Bosphoras prepares a private file check and coordinates legal, administrative, insurance, banking and relocation partners when needed.'],
  ];
  if (locale === 'ru') return [
    ['Сколько дней можно быть в Турции без визы?', 'Это зависит от гражданства. В некоторых случаях это 30, 60 или 90 дней, часто в периоде 180 дней. Точное правило нужно проверить перед поездкой.'],
    ['Можно ли въехать в Турцию по ID-карте?', 'Для некоторых стран действуют соглашения о въезде по национальной ID-карте. Это не касается всех гражданств и должно быть подтверждено перед поездкой.'],
    ['e-Visa всегда заменяет консульскую визу?', 'Нет. e-Visa зависит от гражданства, паспорта и цели поездки. Некоторые профили должны оформлять визу через консульство.'],
    ['Что делать, если я хочу остаться дольше?', 'Нужно подготовить ВНЖ / ikamet до истечения разрешенного срока: адрес, страховка, документы, запись и compliance.'],
    ['Bosphoras может проверить правила для моей страны?', 'Да. Bosphoras готовит частную проверку dossier и координирует юридических, административных, страховых, банковских и relocation партнеров.'],
  ];
  return [
    ['كم يوماً يمكنني البقاء في تركيا بدون تأشيرة؟', 'يعتمد ذلك على الجنسية. بعض الحالات تكون 30 أو 60 أو 90 يوماً، غالباً ضمن فترة 180 يوماً. يجب التحقق من القاعدة الدقيقة قبل السفر.'],
    ['هل يمكنني دخول تركيا ببطاقة الهوية؟', 'بعض الدول لديها اتفاقات تسمح بالدخول ببطاقة الهوية الوطنية. هذا لا ينطبق على كل الجنسيات ويجب تأكيده قبل السفر.'],
    ['هل تعوض e-Visa دائماً التأشيرة القنصلية؟', 'لا. أهلية e-Visa تعتمد على الجنسية والجواز وسبب السفر. بعض الملفات تحتاج إلى إجراء قنصلي.'],
    ['ماذا أفعل إذا أردت البقاء مدة أطول؟', 'يجب تحضير ملف الإقامة / الإيكامت قبل انتهاء المدة المسموحة: عنوان، تأمين، وثائق، موعد وامتثال.'],
    ['هل يستطيع Bosphoras التحقق من القواعد لبلدي؟', 'نعم. يحضر Bosphoras فحصاً خاصاً للملف وينسق الشركاء القانونيين والإداريين والتأمين والبنك والانتقال عند الحاجة.'],
  ];
}

export function BosphorasVisaResidenceSeoPage({ page, locale }: { page: BosphorasProgrammaticSeoPage; locale: Locale }) {
  const l = labels[locale];
  const pageFaq = faq(page, locale);
  const canonical = baseUrl(page, locale);
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: page.titles[locale], description: intro(page, locale), inLanguage: locale, datePublished: '2026-06-05', dateModified: '2026-06-05', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: canonical, keywords: page.focus.join(', ') }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: pageFaq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale={locale} currentPath={page.slugs[locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1300px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{l.guide} · {l.updated}</p><h1 className="mt-6 max-w-5xl font-serif text-4xl leading-tight tracking-[-0.04em] md:text-7xl">{page.titles[locale]}</h1><p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{intro(page, locale)}</p><Link href={assessmentHref(locale)} className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{l.cta}<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Globe2 className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.direct}</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{directPoints(locale).map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.entry}</h2><div className="mt-8 grid gap-4 md:grid-cols-4">{['Visa-free', 'e-Visa', 'Consular visa', 'ID card'].map((item) => <article key={item} className="border border-[#d8c7a1] bg-white p-6"><h3 className="font-serif text-2xl text-[#121826]">{item}</h3><p className="mt-4 text-sm leading-7 text-[#3e4857]">{locale === 'fr' ? 'La bonne option dépend de votre nationalité, du type de passeport, de la durée du séjour et du motif du voyage.' : locale === 'en' ? 'The right option depends on nationality, passport type, stay duration and travel purpose.' : locale === 'ru' ? 'Правильный вариант зависит от гражданства, типа паспорта, срока пребывания и цели поездки.' : 'الخيار الصحيح يعتمد على الجنسية ونوع الجواز ومدة الإقامة وسبب السفر.'}</p></article>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><FileText className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.stay}</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{stayRules(locale).map(([title, body]) => <article key={title} className="border border-[#d8c7a1] bg-white p-7"><h3 className="font-serif text-2xl text-[#121826]">{title}</h3><p className="mt-4 text-sm leading-8 text-[#3e4857]">{body}</p></article>)}</div><div className="mt-8 border-l-4 border-[#8a6728] bg-white p-7"><AlertTriangle className="h-8 w-8 text-[#8a6728]" /><p className="mt-4 leading-8 text-[#3e4857]">{locale === 'fr' ? 'Bosphoras ne conseille pas de se baser sur une liste copiée en ligne. Les règles de visa, e-Visa, exemption, carte d’identité et durée de séjour doivent être vérifiées à partir des sources officielles avant chaque départ.' : locale === 'en' ? 'Bosphoras does not recommend relying on copied online lists. Visa, e-Visa, exemption, ID card and stay duration rules must be checked from official sources before every trip.' : locale === 'ru' ? 'Bosphoras не рекомендует полагаться на скопированные списки из интернета. Правила visa, e-Visa, exemption, ID card и срок пребывания нужно проверять по официальным источникам перед каждой поездкой.' : 'لا ينصح Bosphoras بالاعتماد على قوائم منسوخة من الإنترنت. يجب التحقق من قواعد التأشيرة وe-Visa والإعفاء وبطاقة الهوية ومدة الإقامة من المصادر الرسمية قبل كل سفر.'}</p></div></div></section>
        <section className="bg-[#121826] px-5 py-16 text-white md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><ShieldCheck className="h-8 w-8 text-[#d2a863]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{l.residence}</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{residenceRules(locale).map((item) => <div key={item} className="border border-white/15 bg-white/5 p-5 text-sm leading-7 text-white/75">{item}</div>)}</div></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.documents}</h2><div className="mt-8 grid gap-3 md:grid-cols-2">{documents(locale).map((item) => <div key={item} className="flex gap-3 border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]"><CheckCircle2 className="mt-1 h-4 w-4 flex-none text-[#8a6728]" />{item}</div>)}</div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1200px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.profiles}</h2><div className="mt-8 grid gap-3 md:grid-cols-4">{profiles(locale).map((item) => <div key={item} className="border border-[#d8c7a1] bg-white p-5 text-sm leading-7 text-[#3e4857]">{item}</div>)}</div></div></section>
        <section className="px-5 pb-20 md:px-8 md:pb-28"><div className="mx-auto max-w-[1100px]"><h2 className="font-serif text-4xl tracking-[-0.03em]">{l.faq}</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{pageFaq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
