import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileText, Landmark, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';

const paths: Record<Locale, string> = {
  fr: '/expatrie-francais-turquie-fiscalite-revenus-etrangers',
  en: '/en/french-expat-turkey-tax-foreign-income',
  ru: '/ru/frantsuzskiy-expat-turtsiya-nalogi-inostrannye-dohody',
  ar: '/ar/french-expat-turkey-tax-foreign-income',
};

const assessmentHref: Record<Locale, string> = {
  fr: '/diagnostic-prive',
  en: '/en/private-assessment',
  ru: '/ru/chastnaya-konsultatsiya',
  ar: '/ar/تقييم-خاص',
};

type PageContent = {
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  hero: string;
  cta: string;
  asideTitle: string;
  finalTitle: string;
  finalText: string;
  faqTitle: string;
  checklist: string[];
  sections: Array<[string, string]>;
  faq: Array<[string, string]>;
};

const content: Record<Locale, PageContent> = {
  fr: {
    title: 'Expatrié français en Turquie : fiscalité, revenus étrangers et résidence fiscale',
    metaTitle: 'Expatrié français en Turquie : fiscalité et revenus étrangers 2026',
    description: 'Guide pour Français qui envisagent de vivre en Turquie : résidence fiscale, revenus étrangers, société française, immobilier en France, dividendes, plus-values et convention France-Turquie.',
    eyebrow: 'Français en Turquie · Fiscalité internationale',
    hero: 'Vivre en Turquie peut être une décision attractive pour un Français : qualité de vie, Istanbul, Bodrum, Antalya, coût de vie, accès international, immobilier, santé et fiscalité potentiellement compétitive. Mais avant de s’installer, il faut savoir si le départ fiscal de France est réellement sécurisé.',
    cta: 'Demander une analyse privée',
    asideTitle: 'À vérifier avant de quitter la France',
    finalTitle: 'Quitter la France fiscalement ne se résume pas à prendre un billet pour Istanbul',
    finalText: 'Bosphoras peut organiser une analyse privée de votre projet : résidence fiscale française, futur lieu de vie en Turquie, revenus étrangers, sociétés, dividendes, immobilier, banque, assurance, famille et coordination avec les bons fiscalistes et avocats.',
    faqTitle: 'Questions fréquentes',
    checklist: ['Votre résidence fiscale actuelle en France', 'Votre foyer et votre lieu de vie principal', 'Vos sociétés françaises ou étrangères', 'Vos dividendes, plus-values et revenus financiers', 'Vos biens immobiliers en France', 'Vos pensions, retraites ou revenus professionnels', 'La convention fiscale France-Turquie', 'Votre calendrier d’installation en Turquie'],
    sections: [
      ['Pourquoi un Français doit préparer son installation fiscale en Turquie', 'La Turquie attire de plus en plus de Français qui cherchent une nouvelle base de vie ou une solution patrimoniale plus flexible. Mais le sujet fiscal doit être traité avant le déménagement, pas après. L’administration française peut continuer à considérer une personne comme résidente fiscale si son foyer, son activité, ses sociétés, son patrimoine principal ou son centre d’intérêts économiques restent en France. Une installation en Turquie doit donc être préparée avec méthode.'],
      ['Résidence fiscale : le vrai point de départ', 'Un Français ne devient pas automatiquement non-résident fiscal français parce qu’il obtient une résidence en Turquie. Il faut regarder le foyer familial, le lieu de séjour principal, l’activité professionnelle, le centre des intérêts économiques, les revenus, les sociétés et les actifs. Si la famille reste en France, si l’entreprise est toujours dirigée depuis la France ou si les revenus principaux restent français, le départ fiscal peut être contesté.'],
      ['Ce que la Turquie peut offrir à un expatrié français', 'La Turquie peut offrir une combinaison rare : proximité avec l’Europe, cadre de vie, immobilier, services médicaux, écoles internationales, vie familiale, accès régional et fiscalité potentiellement attractive sur certains revenus étrangers. Istanbul peut convenir aux entrepreneurs et dirigeants, Bodrum aux familles et profils patrimoniaux, Antalya aux retraités et personnes recherchant un cadre de vie plus doux. Le bon choix dépend du profil personnel et fiscal.'],
      ['Revenus étrangers et future exonération turque', 'La mesure annoncée en Turquie peut intéresser les Français qui disposent de revenus étrangers ou internationaux : dividendes de sociétés hors Turquie, plus-values, revenus financiers, pensions étrangères, revenus immobiliers hors Turquie ou revenus professionnels internationaux. Mais il faut distinguer les revenus de source française, les revenus de source turque et les revenus réellement étrangers. La qualification du revenu est essentielle.'],
      ['Société française : attention à la direction effective', 'Un entrepreneur français peut vouloir vivre en Turquie tout en conservant une société en France. Dans ce cas, il faut analyser où la société est réellement dirigée, où sont les clients, où sont signés les contrats, où se trouve l’équipe, où se prennent les décisions et comment les dividendes sont distribués. Si la société reste française, la France peut conserver des droits d’imposition. Si la direction effective se déplace, d’autres risques apparaissent.'],
      ['Dividendes français et retenue à la source', 'Un actionnaire qui reçoit des dividendes d’une société française doit vérifier le traitement en France, la retenue éventuelle à la source, la convention fiscale France-Turquie et le traitement possible en Turquie. Le calendrier est important : distribution avant l’installation, pendant la transition ou après l’installation en Turquie peuvent conduire à des analyses différentes.'],
      ['Immobilier en France : loyers et plus-values', 'Beaucoup de Français conservent un appartement, une résidence secondaire, un immeuble locatif ou des locaux commerciaux en France. En général, un bien situé en France reste un actif fortement rattaché à la France. Les loyers, la plus-value de vente, les charges, les obligations déclaratives et l’impact sur le centre des intérêts économiques doivent être étudiés avant le départ.'],
      ['Retraite, pension et revenus personnels', 'Un retraité français qui envisage la Turquie doit vérifier la nature de sa pension : retraite privée, pension publique, retraite complémentaire, pension professionnelle ou autres revenus. La fiscalité des pensions dépend souvent de la convention fiscale et de la nature exacte du revenu. L’assurance santé, la couverture médicale, le logement et la situation familiale doivent aussi être intégrés.'],
      ['Famille, école, santé et mode de vie', 'Une expatriation réussie ne repose pas uniquement sur l’impôt. Le pays où vit la famille, l’école des enfants, l’assurance santé, le logement, les comptes bancaires, les preuves de vie réelle et le rythme de présence sont importants. Une personne qui prétend vivre en Turquie mais garde toute sa vie familiale et économique en France peut s’exposer à des difficultés.'],
      ['Comment Bosphoras peut accompagner un Français', 'Bosphoras ne remplace pas un fiscaliste français ou turc. Son rôle est de coordonner le dossier : comprendre votre situation, préparer les questions importantes, organiser les interlocuteurs, structurer votre installation, vous accompagner sur la résidence, la banque, l’assurance, l’immobilier, la famille et les partenaires professionnels. L’objectif est de prendre une décision claire, conforme et adaptée à votre vie réelle.'],
    ],
    faq: [
      ['Un Français peut-il devenir résident fiscal en Turquie ?', 'Oui, mais cela dépend de la réalité de son installation et de sa situation en France. Il faut analyser foyer, activité, intérêts économiques, sociétés, immobilier et convention fiscale France-Turquie.'],
      ['Faut-il vendre son immobilier en France avant de partir ?', 'Pas forcément. Mais l’immobilier français peut conserver un lien fiscal fort avec la France. Les loyers, plus-values et obligations déclaratives doivent être analysés.'],
      ['Les dividendes d’une société française peuvent-ils être exonérés en Turquie ?', 'Potentiellement selon le texte final turc et le profil, mais la France peut conserver une retenue ou un droit d’imposition. La convention fiscale doit être étudiée.'],
      ['Un retraité français peut-il vivre en Turquie ?', 'Oui, mais la pension, l’assurance santé, la couverture médicale, le logement et la convention fiscale doivent être étudiés avant l’installation.'],
      ['Bosphoras donne-t-il un conseil fiscal ?', 'Non. Bosphoras coordonne l’analyse privée et les bons interlocuteurs : fiscalistes, avocats, banques, comptables, assurance et partenaires d’installation en Turquie.'],
    ],
  },
  en: {
    title: 'International expat in Turkey: tax residence, foreign income and relocation planning',
    metaTitle: 'International expat in Turkey: tax residence and foreign income 2026',
    description: 'Guide for English-speaking expatriates and investors considering Turkey: tax residence, foreign income, companies, dividends, capital gains, property, pensions and relocation planning.',
    eyebrow: 'English-speaking expats · Turkey tax planning',
    hero: 'Turkey is becoming an attractive base for English-speaking entrepreneurs, investors, remote executives and international families. Before relocating, the key question is not only where you want to live, but how your tax residence, foreign income, companies and assets will be treated.',
    cta: 'Request a private assessment',
    asideTitle: 'Before relocating to Turkey',
    finalTitle: 'A successful relocation combines tax, family, banking and real life',
    finalText: 'Bosphoras can organize a private review of your situation: current residence, foreign income, companies, dividends, property, banking, insurance, family needs and relocation structure in Turkey.',
    faqTitle: 'Frequently asked questions',
    checklist: ['Your current country of tax residence', 'Your home, family and center of interests', 'Your foreign companies and management location', 'Your dividends, capital gains and financial income', 'Your real estate outside Turkey', 'Your pensions or professional income', 'Applicable tax treaties', 'Your relocation timeline and documentation'],
    sections: [
      ['Why English-speaking expats should prepare before moving', 'Turkey can be attractive for entrepreneurs, investors, consultants, remote executives, digital nomads and families looking for a new base between Europe, the Gulf and Asia. But tax residence should not be improvised. Your former country may still consider you tax resident if your home, family, companies, assets or economic interests remain there. A Turkish residence permit alone does not solve the tax question.'],
      ['Tax residence is a factual situation', 'Tax authorities generally look at real life: where you live, where your family lives, where decisions are made, where companies are managed, where income is earned and where your main assets are located. Becoming resident in Turkey requires more than spending time in the country. The relocation should be coherent from a lifestyle, banking, legal and tax perspective.'],
      ['Why Turkey may become more attractive', 'Turkey may become more visible for internationally mobile people if the announced foreign-income exemption is confirmed. For some profiles, Turkey can combine lifestyle, real estate, healthcare, international schools, regional business access and potentially competitive taxation. The country may be compared with Dubai, Cyprus, Italy, Portugal or Monaco, but the right choice depends on the individual situation.'],
      ['Foreign income must be separated from Turkish-source income', 'International expats often have several income streams: foreign dividends, capital gains, advisory fees, remote work income, rental income, pensions or distributions from companies. Each category must be reviewed separately. Income paid from abroad is not always treated as foreign income if the activity is performed from Turkey or if the company is effectively managed from Turkey.'],
      ['Foreign companies and effective management', 'Many English-speaking expats own companies in the UK, US, UAE, Singapore, Hong Kong, Cyprus or other jurisdictions. If the owner moves to Turkey, it is important to review where the company is effectively managed, where contracts are signed, where the team operates, where clients are located and how profits are distributed. A company can remain foreign, but the personal move of its owner can still create tax questions.'],
      ['Dividends and capital gains', 'Dividends and capital gains are usually central for investors. Before relocating, you should review the country of the company or asset, withholding tax, tax treaties, the timing of distributions or sales, and your tax residence at the time of each event. A sale of shares before moving, during a transition period or after becoming Turkish tax resident may not produce the same result.'],
      ['Property outside Turkey', 'Many expats keep real estate in their former country: a home, rental apartment, commercial unit or family property. The country where the property is located often keeps taxing rights on rent and capital gains. Keeping property abroad can also affect the analysis of your center of economic interests. It should be reviewed before claiming a clean relocation.'],
      ['Remote work and consulting from Turkey', 'A consultant, freelancer, founder or remote executive may work from Turkey for foreign clients. This situation requires precision. Where is the work performed? Where are contracts signed? Where is the company registered? Where are invoices issued? Where are payments received? These questions determine whether income remains foreign or becomes linked to activity in Turkey.'],
      ['Family, health insurance and banking', 'A tax relocation must match real life. Family residence, schools, health insurance, housing, bank accounts, KYC, source of funds and documentation all matter. A client who says they relocated to Turkey while their family, companies and main assets remain elsewhere may face challenges in the former country.'],
      ['How Bosphoras supports English-speaking clients', 'Bosphoras acts as a private coordination desk. It does not replace tax counsel, but it helps prepare the file, identify sensitive points and coordinate tax advisors, lawyers, banks, accountants, insurers, real estate and relocation partners in Turkey. The goal is to decide whether Turkey can be a serious, compliant and practical base for you and your family.'],
    ],
    faq: [
      ['Can an English-speaking expat become tax resident in Turkey?', 'Yes, but the result depends on real life, family, days of presence, income, companies, assets and the tax treaty with the former country.'],
      ['Does a Turkish residence permit automatically change my tax residence?', 'No. A residence permit is not enough. Tax residence depends on factual and legal criteria.'],
      ['Can foreign dividends be treated favorably in Turkey?', 'Potentially, depending on the final Turkish rules, the source country, withholding tax, treaty position and timing.'],
      ['Can I keep my foreign company while living in Turkey?', 'Potentially, but effective management, contracts, clients, substance and distributions must be reviewed.'],
      ['Does Bosphoras provide tax advice?', 'No. Bosphoras coordinates the private review and connects clients with suitable tax advisors, lawyers, banks and relocation partners.'],
    ],
  },
  ru: {
    title: 'Русскоязычный экспат в Турции: налоги, иностранные доходы и резиденция',
    metaTitle: 'Русскоязычный экспат в Турции: налоги и иностранные доходы 2026',
    description: 'Гид для русскоязычных инвесторов и экспатов в Турции: налоговая резиденция, иностранные доходы, активы, компании, дивиденды, недвижимость, банки и переезд семьи.',
    eyebrow: 'Русскоязычные клиенты · Налоговая резиденция Турции',
    hero: 'Турция стала одной из самых понятных и близких стран для русскоязычных предпринимателей, инвесторов и семей. Но перед переездом важно заранее понять, как будут рассматриваться иностранные доходы, компании, банки, активы и налоговая резиденция.',
    cta: 'Запросить частный анализ',
    asideTitle: 'Что проверить до переезда',
    finalTitle: 'Переезд в Турцию должен быть структурирован, а не сделан на эмоциях',
    finalText: 'Bosphoras может организовать частный анализ вашей ситуации: текущая налоговая резиденция, иностранные доходы, компании, банковские счета, недвижимость, семья, страхование, compliance и структура жизни в Турции.',
    faqTitle: 'Частые вопросы',
    checklist: ['Текущая налоговая резиденция', 'Связь с Россией, Казахстаном, СНГ или другой страной', 'Иностранные доходы по категориям', 'Компании и место фактического управления', 'Дивиденды, прирост капитала и портфели', 'Недвижимость за пределами Турции', 'Банки, KYC и происхождение средств', 'Семья, школа, медицина и жилье в Турции'],
    sections: [
      ['Почему русскоязычным клиентам важно готовить налоговый переезд', 'Для русскоязычных предпринимателей, инвесторов и семей Турция часто выглядит естественным выбором: география, авиасообщение, недвижимость, медицина, школы, русскоязычная среда и комфорт жизни. Но налоговый переезд нельзя строить только на удобстве. Нужно понять, где вы остаетесь налоговым резидентом, где находятся ваши активы, где управляются компании и как будут квалифицироваться иностранные доходы.'],
      ['Налоговая резиденция — это не только ВНЖ', 'Получить вид на жительство или купить недвижимость в Турции недостаточно для полноценного налогового переезда. Важно, где реально живет семья, где находится бизнес, где принимаются решения, где банковские счета, где источники дохода и какие документы подтверждают переезд. Если основные экономические интересы остаются в другой стране, это может создать налоговые риски.'],
      ['Почему Турция интересна русскоязычным инвесторам', 'Турция может быть удобной базой для семьи, бизнеса и капитала. Стамбул подходит для предпринимателей и международной активности, Анталья и Аланья — для семей и комфортной жизни, Бодрум — для более премиального формата. При этом новая налоговая инициатива по иностранным доходам может усилить интерес к Турции среди клиентов, которые сравнивают ее с Дубаем, Кипром, ОАЭ, Европой или Казахстаном.'],
      ['Иностранные доходы: что нужно разделить', 'Русскоязычный клиент может иметь доходы из разных стран: дивиденды от иностранной компании, доходы от бизнеса, аренду недвижимости, проценты, портфельные инвестиции, криптоактивы, продажу долей или консультационные доходы. Нельзя рассматривать все это как один тип дохода. Каждую категорию нужно проверять отдельно с учетом страны источника, банка, налогового соглашения и даты переезда.'],
      ['Компании за рубежом и фактическое управление', 'Если у клиента есть компания в Казахстане, ОАЭ, Европе, Великобритании, США или другой юрисдикции, после переезда в Турцию важно проверить место фактического управления. Где принимаются решения? Где подписываются договоры? Где находятся клиенты и команда? Где распределяется прибыль? Если владелец живет в Турции, это не всегда меняет статус компании, но может создать вопросы, которые нужно заранее закрыть.'],
      ['Дивиденды и инвестиционный портфель', 'Дивиденды, проценты, купоны, доходы от ценных бумаг и прирост капитала часто являются ключевой темой для состоятельных клиентов. Нужно проверить страну источника, налог у источника, банк или брокера, соглашение об избежании двойного налогообложения, дату выплаты и налоговую резиденцию клиента в момент получения дохода.'],
      ['Недвижимость за пределами Турции', 'Многие русскоязычные семьи сохраняют недвижимость в стране происхождения, Европе, ОАЭ или других странах. Такая недвижимость может продолжать облагаться в стране расположения. Кроме того, крупный объект недвижимости может влиять на анализ центра экономических интересов. Перед переездом нужно понять, какие активы остаются за рубежом и как они будут декларироваться.'],
      ['Банки, compliance и происхождение средств', 'Для русскоязычных клиентов банковский вопрос часто не менее важен, чем налоговый. Турецкие и международные банки могут задавать вопросы о происхождении средств, источнике дохода, структуре компаний, санкционных рисках, налоговой резиденции и документах. Подготовленный файл облегчает открытие счетов, страхование, покупку недвижимости и дальнейшую жизнь в Турции.'],
      ['Семья, школа, медицина и образ жизни', 'Налоговая резиденция должна соответствовать реальной жизни. Если семья переезжает в Турцию, дети учатся в Турции, жилье находится в Турции, медицинская страховка оформлена, банковская и бытовая жизнь организована, позиция становится более логичной. Если же все ключевые элементы жизни остаются в прежней стране, переезд выглядит менее убедительно.'],
      ['Как Bosphoras сопровождает русскоязычных клиентов', 'Bosphoras помогает структурировать проект переезда: собрать данные, определить риски, подготовить вопросы для налоговых специалистов, координировать юристов, банки, бухгалтеров, страхование, недвижимость и семейную установку. Цель — не обещать налоговый результат, а понять, можно ли сделать Турцию серьезной, удобной и соответствующей базой для жизни, капитала и бизнеса.'],
    ],
    faq: [
      ['Может ли русскоязычный инвестор стать налоговым резидентом Турции?', 'Да, но это зависит от реальной жизни, семьи, сроков пребывания, активов, доходов, компаний и налоговых правил прежней страны.'],
      ['ВНЖ в Турции автоматически меняет налоговую резиденцию?', 'Нет. ВНЖ помогает с проживанием, но налоговая резиденция зависит от фактических и юридических критериев.'],
      ['Можно ли сохранить иностранную компанию?', 'Потенциально да, но нужно анализировать фактическое управление, клиентов, договоры, счета, дивиденды и налоговые соглашения.'],
      ['Что важно для банков в Турции?', 'Банки обычно смотрят источник средств, налоговую резиденцию, структуру бизнеса, документы, происхождение капитала и compliance-профиль клиента.'],
      ['Bosphoras дает налоговую консультацию?', 'Нет. Bosphoras координирует частный анализ и связывает клиента с налоговыми специалистами, юристами, банками и партнерами по переезду.'],
    ],
  },
  ar: {
    title: 'المستثمر العربي في تركيا: الإقامة الضريبية والدخل الأجنبي وتنظيم الانتقال',
    metaTitle: 'المستثمر العربي في تركيا: الإقامة الضريبية والدخل الأجنبي 2026',
    description: 'دليل للمستثمرين والعائلات العربية في تركيا: الإقامة الضريبية، الدخل الأجنبي، الشركات، الأرباح، العقار، البنوك، الخليج وتنظيم الانتقال العائلي.',
    eyebrow: 'المستثمرون العرب · الإقامة الضريبية في تركيا',
    hero: 'تجذب تركيا عدداً متزايداً من المستثمرين ورواد الأعمال والعائلات العربية. لكن قبل الانتقال إلى إسطنبول أو بودروم أو أنطاليا، يجب فهم أثر الإقامة الضريبية على الدخل الأجنبي والشركات والأصول والبنوك.',
    cta: 'طلب تحليل خاص',
    asideTitle: 'قبل الانتقال إلى تركيا',
    finalTitle: 'الانتقال إلى تركيا يجب أن يجمع بين الضرائب والعائلة والبنوك ونمط الحياة',
    finalText: 'يمكن لـ Bosphoras تنظيم مراجعة خاصة لوضعك: الإقامة الحالية، الدخل الأجنبي، الشركات، الأرباح، العقار، البنوك، التأمين، العائلة وهيكلة الانتقال إلى تركيا.',
    faqTitle: 'الأسئلة الشائعة',
    checklist: ['بلد الإقامة الضريبية الحالي', 'العائلة ومكان الحياة الفعلي', 'الشركات داخل الخليج أو خارجه', 'الأرباح والمكاسب الرأسمالية والدخل المالي', 'العقار في بلدك أو خارج تركيا', 'البنوك وKYC ومصدر الأموال', 'الاتفاقيات الضريبية المطبقة', 'جدول الانتقال والسكن والتأمين'],
    sections: [
      ['لماذا يجب على المستثمر العربي التحضير قبل الانتقال', 'تركيا قريبة ثقافياً وجغرافياً من كثير من العائلات العربية، وتوفر مزيجاً من العقار، الصحة، التعليم، السياحة، نمط الحياة والعمل. لكن الانتقال لا يجب أن يعتمد فقط على شراء عقار أو الحصول على إقامة. إذا كانت الشركات أو الأصول أو العائلة أو مركز المصالح الاقتصادية ما زالت في بلد آخر، يجب تحليل الوضع الضريبي قبل اتخاذ القرار.'],
      ['الإقامة الضريبية ليست مجرد إقامة قانونية', 'تصريح الإقامة أو شراء عقار في تركيا لا يكفي وحده لتحديد الإقامة الضريبية. تنظر السلطات عادةً إلى مكان الحياة الفعلية، العائلة، الأعمال، الحسابات البنكية، مصدر الدخل، الشركات والأصول. إذا أصبحت تركيا مركز حياتك الحقيقي، يمكن أن تتغير النتائج الضريبية. لكن إذا بقيت كل المصالح في بلد آخر، فقد يبقى ذلك البلد معنياً بوضعك الضريبي.'],
      ['لماذا تركيا جذابة للعائلات العربية', 'تركيا يمكن أن تكون قاعدة مناسبة للعائلات العربية التي تبحث عن قرب جغرافي، حياة عائلية، عقار، مدارس، مستشفيات، خصوصية، خدمات وبيئة أعمال. إسطنبول تناسب رجال الأعمال والشركات، بودروم تناسب نمط حياة فاخر، أنطاليا تناسب العائلات والراحة. ومع الإصلاحات الضريبية المعلنة حول الدخل الأجنبي، قد تصبح تركيا أكثر جاذبية لبعض المستثمرين.'],
      ['الدخل الأجنبي للمستثمر العربي', 'قد يكون لدى المستثمر العربي أرباح من شركة في الخليج، دخل عقاري، محفظة استثمارية، أرباح رأسمالية، دخل من تجارة دولية، توزيعات من holding أو دخل مهني من خارج تركيا. كل نوع يحتاج إلى تحليل منفصل. يجب معرفة بلد المصدر، وجود ضريبة مقتطعة، الاتفاقية الضريبية، البنك المستخدم وتوقيت الانتقال إلى تركيا.'],
      ['الشركات في الخليج أو الخارج', 'كثير من المستثمرين العرب يملكون شركات في الإمارات، السعودية، قطر، الكويت، البحرين، أوروبا أو دول أخرى. عند الانتقال إلى تركيا، يجب دراسة مكان الإدارة الفعلية للشركة، مكان العملاء، العقود، الحسابات البنكية، توزيع الأرباح وطريقة اتخاذ القرار. الشركة قد تبقى في الخارج، لكن إقامة المالك في تركيا قد تفتح أسئلة جديدة.'],
      ['الأرباح والمكاسب الرأسمالية', 'الأرباح الموزعة من شركة أجنبية، بيع أسهم، بيع عقار خارج تركيا أو بيع حصة في شركة كلها أمور تحتاج إلى تخطيط. التوقيت مهم جداً. عملية بيع قبل الانتقال أو بعده لا تؤدي دائماً إلى نفس النتيجة. يجب مراجعة بلد المصدر، الضريبة المقتطعة، الاتفاقية الضريبية، البنك وإثبات الإقامة.'],
      ['العقار خارج تركيا وداخلها', 'قد يحتفظ المستثمر العربي بعقار في بلده، في الخليج، في أوروبا أو في مناطق أخرى. هذا العقار قد يبقى خاضعاً للضريبة في بلد وجوده. أما العقار التركي، مثل شقة في إسطنبول أو فيلا في بودروم أو عقار استثماري في أنطاليا، فيجب تحليله كأصل تركي قد ينتج دخلاً من مصدر تركي.'],
      ['البنوك ومصدر الأموال', 'البنوك التركية والدولية قد تطلب مستندات حول مصدر الأموال، هيكل الشركات، الإقامة الضريبية، التحويلات، العقارات، الميراث أو بيع الأصول. بالنسبة للمستثمر العربي، ملف مرتب يساعد في فتح الحسابات، شراء العقارات، تنظيم التأمين، إدارة العائلة والتعامل مع الشركاء المهنيين.'],
      ['العائلة، الصحة والتعليم', 'كثير من القرارات لا تكون ضريبية فقط. العائلة تحتاج إلى سكن، مدارس، تأمين صحي، أطباء، تنقلات وخدمات يومية. إذا كانت العائلة ستعيش فعلياً في تركيا، فهذا يدعم منطق الإقامة. أما إذا بقيت العائلة والمصالح الأساسية في بلد آخر، فيجب التعامل مع المسألة بحذر.'],
      ['كيف يرافق Bosphoras المستثمرين العرب', 'Bosphoras يعمل كمكتب خاص للتنسيق. لا يقدم وعداً ضريبياً ولا يحل محل المستشار الضريبي، لكنه ينظم الملف: فهم الوضع، تحديد المخاطر، تجهيز الأسئلة، تنسيق المحامين والمستشارين الضريبيين والبنوك والمحاسبين والتأمين والعقار وخدمات الانتقال. الهدف هو معرفة ما إذا كانت تركيا قاعدة مناسبة لك ولعائلتك وثروتك.'],
    ],
    faq: [
      ['هل يمكن للمستثمر العربي أن يصبح مقيماً ضريبياً في تركيا؟', 'نعم، لكن ذلك يعتمد على مكان الحياة الفعلية، العائلة، الدخل، الشركات، الأصول، عدد أيام الإقامة والاتفاقيات الضريبية.'],
      ['هل شراء عقار في تركيا يكفي لتغيير الإقامة الضريبية؟', 'لا. شراء العقار قد يساعد في الإقامة القانونية أو نمط الحياة، لكنه لا يكفي وحده لتحديد الإقامة الضريبية.'],
      ['هل يمكن الاحتفاظ بشركة في الخليج أثناء العيش في تركيا؟', 'محتمل، لكن يجب مراجعة الإدارة الفعلية، العملاء، العقود، الحسابات، توزيع الأرباح والاتفاقيات الضريبية.'],
      ['هل الدخل من الخليج يعتبر دخلاً أجنبياً في تركيا؟', 'قد يكون كذلك، لكن يجب تحليل نوع الدخل، بلد المصدر، الاتفاقية الضريبية، الضريبة المقتطعة وتوقيت الانتقال.'],
      ['هل يقدم Bosphoras استشارة ضريبية؟', 'لا. Bosphoras ينسق المراجعة الخاصة ويربط العميل بالمستشارين الضريبيين والمحامين والبنوك وشركاء الانتقال المناسبين.'],
    ],
  },
};

export function getExpatTurkeyTaxClientMetadata(locale: Locale): Metadata {
  const c = content[locale];
  const canonical = `https://bosphoras.com${paths[locale]}`;
  return {
    title: `${c.metaTitle} | Bosphoras`,
    description: c.description,
    alternates: {
      canonical,
      languages: {
        fr: 'https://bosphoras.com/expatrie-francais-turquie-fiscalite-revenus-etrangers',
        en: 'https://bosphoras.com/en/french-expat-turkey-tax-foreign-income',
        ru: 'https://bosphoras.com/ru/frantsuzskiy-expat-turtsiya-nalogi-inostrannye-dohody',
        ar: 'https://bosphoras.com/ar/french-expat-turkey-tax-foreign-income',
        'x-default': 'https://bosphoras.com/expatrie-francais-turquie-fiscalite-revenus-etrangers',
      },
    },
    openGraph: { title: c.title, description: c.description, url: canonical, siteName: 'Bosphoras', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: c.title }] },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: ['/images/og-default.jpg'] },
  };
}

export function ExpatTurkeyTaxClientPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: c.title, description: c.description, inLanguage: locale, datePublished: '2026-05-11', dateModified: '2026-05-11', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: `https://bosphoras.com${paths[locale]}` }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale={locale} currentPath={paths[locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40">
          <div className="mx-auto max-w-[1400px]">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{c.eyebrow}</p>
            <h1 className="mt-6 max-w-6xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">{c.title}</h1>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{c.hero}</p>
            <Link href={assessmentHref[locale]} className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{c.cta}<ArrowRight size={16} /></Link>
          </div>
        </section>
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <aside className="h-fit border border-[#d8c7a1] bg-[#fffaf0] p-8 lg:sticky lg:top-28">
              <Landmark className="h-8 w-8 text-[#8a6728]" />
              <h2 className="mt-6 font-serif text-3xl">{c.asideTitle}</h2>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[#3e4857]">
                {c.checklist.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#8a6728]" />{item}</li>)}
              </ul>
            </aside>
            <div className="space-y-5">
              {c.sections.map(([sectionTitle, text], index) => (
                <article key={sectionTitle} className="border border-[#d8c7a1] bg-white p-7 md:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{String(index + 1).padStart(2, '0')}</p>
                  <h2 className="mt-4 font-serif text-3xl tracking-[-0.025em] text-[#121826] md:text-4xl">{sectionTitle}</h2>
                  <p className="mt-5 text-base leading-8 text-[#3e4857]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <ShieldCheck className="h-8 w-8 text-[#8a6728]" />
            <h2 className="mt-6 font-serif text-4xl tracking-[-0.03em] md:text-6xl">{c.finalTitle}</h2>
            <p className="mt-6 text-lg leading-9 text-[#3e4857]">{c.finalText}</p>
            <Link href={assessmentHref[locale]} className="mt-8 inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white">{c.cta}<ArrowRight size={16} /></Link>
          </div>
        </section>
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-[1100px]">
            <FileText className="h-8 w-8 text-[#8a6728]" />
            <h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">{c.faqTitle}</h2>
            <div className="mt-8 grid gap-px bg-[#d8c7a1]">
              {c.faq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
