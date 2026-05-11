import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, FileText, Landmark, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StructuredData } from '@/components/StructuredData';
import type { Locale } from '@/lib/i18n';

const paths: Record<Locale, string> = {
  fr: '/residence-fiscale-turquie-revenus-etrangers',
  en: '/en/turkey-tax-residence-foreign-income',
  ru: '/ru/nalogovaya-rezidentsiya-turtsiya-inostrannye-dohody',
  ar: '/ar/turkey-tax-residence-foreign-income',
};

type PageContent = {
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cta: string;
  checklistTitle: string;
  checklist: string[];
  sections: Array<[string, string]>;
  faq: Array<[string, string]>;
};

const content: Record<Locale, PageContent> = {
  fr: {
    title: 'Résidence fiscale Turquie et revenus étrangers : ce que les investisseurs doivent vérifier avant de s’installer',
    metaTitle: 'Résidence fiscale Turquie et revenus étrangers : guide investisseurs 2026',
    description: 'Résidence fiscale en Turquie, revenus étrangers, exonération potentielle de 20 ans, condition des 3 années précédentes, revenus turcs imposables : le guide complet pour investisseurs, expatriés et familles patrimoniales.',
    eyebrow: 'Fiscalité internationale · Turquie',
    intro: 'La grande question n’est pas simplement : la Turquie exonère-t-elle les revenus étrangers ? La vraie question est plus stratégique : si vous devenez résident fiscal en Turquie, quels revenus seront imposables, quels revenus étrangers pourraient être exonérés, et quels risques fiscaux peuvent encore exister dans votre pays d’origine ?',
    cta: 'Demander une analyse privée',
    checklistTitle: 'Checklist avant de devenir résident fiscal en Turquie',
    checklist: ['Pays de résidence fiscale actuel et risques de sortie', 'Nombre de jours passés en Turquie et dans le pays d’origine', 'Nature exacte des revenus étrangers', 'Revenus de source turque à conserver ou créer', 'Conventions fiscales applicables', 'Banque, KYC, origine des fonds et conformité', 'Famille, logement, école, assurance santé', 'Calendrier de transfert, déclaration et preuves documentaires'],
    sections: [
      ['Pourquoi cette recherche va devenir très importante', 'Beaucoup de personnes ne chercheront pas directement “exonération fiscale Turquie 20 ans”. Elles chercheront plutôt “résidence fiscale Turquie revenus étrangers”, “vivre en Turquie impôts”, “impôts en Turquie pour expatriés”, “revenus étrangers Turquie fiscalité” ou “résident fiscal Turquie dividendes étrangers”. Cette intention est beaucoup plus qualifiée : la personne ne veut pas lire une simple actualité, elle veut comprendre si elle peut organiser sa résidence, sa famille, ses revenus, sa banque, ses sociétés et son patrimoine autour de la Turquie. Pour Bosphoras, cette page est une page pilier, car elle relie résidence fiscale, exonération potentielle, revenus étrangers, dividendes, plus-values, retraite, héritage, non-dom Turquie, family office, banque, immobilier et installation privée.'],
      ['Ce que signifie devenir résident fiscal en Turquie', 'Avant de parler d’exonération, il faut comprendre le principe général. Un résident fiscal turc est généralement imposé sur son revenu mondial, alors qu’un non-résident est imposé sur certains revenus de source turque. La résidence fiscale ne se résume donc pas à obtenir un logement ou une carte de résidence. Elle dépend de la réalité de la vie : où la personne vit, où se trouve son foyer, où sont ses intérêts économiques, où sont ses sociétés, où sont ses comptes bancaires, où sont ses biens immobiliers et où sont générés ses revenus. La réforme annoncée peut créer une exception attractive, mais elle ne remplace pas cette analyse de base.'],
      ['Ce que la nouvelle réforme pourrait changer', 'Le point nouveau est la volonté de la Turquie d’attirer des personnes vivant à l’étranger, y compris des citoyens turcs de la diaspora, avec une fenêtre fiscale longue sur certains revenus obtenus hors de Turquie. Le message à retenir n’est pas “venez en Turquie, zéro impôt”. Le bon message est : la Turquie pourrait devenir une base fiscale très attractive pour certains revenus étrangers de nouveaux résidents, sous conditions, après analyse personnalisée. Les revenus de source turque resteraient à traiter selon les règles turques.'],
      ['La condition des trois années précédentes', 'La condition centrale annoncée est l’absence de résidence fiscale ou de contribuabilité en Turquie pendant les trois années civiles précédant l’installation. Cela veut dire qu’avant de conseiller un client, il faut vérifier s’il a déjà vécu en Turquie récemment, eu une adresse fiscale turque, déclaré des revenus en Turquie, possédé un bien immobilier générant des revenus, créé une société locale ou passé une partie importante de son temps dans le pays. Cette condition protège le régime contre les profils déjà installés et cible surtout les personnes qui viennent réellement de l’étranger.'],
      ['Quels revenus étrangers doivent être analysés ?', 'Le mot “revenus étrangers” est trop large pour une vraie stratégie. Il faut distinguer les dividendes étrangers, les plus-values sur actions, la vente de participations, les intérêts, les revenus professionnels hors Turquie, les pensions étrangères, les revenus immobiliers hors Turquie, les revenus de société étrangère, les distributions de holding, les trusts, assurances-vie ou instruments financiers. Chaque catégorie peut avoir une retenue à la source dans le pays d’origine, une convention fiscale spécifique et des obligations de déclaration.'],
      ['Les dividendes étrangers', 'Un entrepreneur peut recevoir des dividendes d’une société située en France, aux Émirats, au Kazakhstan, au Royaume-Uni, aux États-Unis ou ailleurs. Il faut vérifier où la société est située, où les bénéfices sont générés, si une retenue à la source existe, si une convention fiscale s’applique, si le dividende est considéré comme étranger côté turc et si la distribution intervient avant ou après la résidence fiscale turque. C’est une requête SEO très qualifiée, car elle vise des fondateurs, holdings, actionnaires et clients de banque privée.'],
      ['Les plus-values étrangères', 'Les plus-values peuvent venir de la vente d’actions étrangères, de parts de société, d’un portefeuille financier, d’un bien immobilier hors Turquie ou d’une participation dans une holding. La date de vente est essentielle : une plus-value réalisée avant l’installation, pendant la transition ou après la résidence fiscale turque ne se traite pas forcément de la même manière. Il faut documenter le prix d’acquisition, le prix de vente, le pays de source, la banque dépositaire, la convention fiscale et le calendrier exact.'],
      ['Les revenus professionnels étrangers', 'Un consultant, un dirigeant, un développeur, un entrepreneur SaaS ou un digital nomad peut facturer des clients étrangers depuis une société étrangère ou depuis une activité personnelle. Il faut déterminer où le travail est réellement effectué, où se trouvent les clients, où se trouve la société, où est signé le contrat, où est le compte bancaire, où sont les équipes et où se trouve la direction effective. Cette analyse évite de confondre revenu étranger, activité exercée depuis la Turquie et revenu de source turque.'],
      ['Les revenus immobiliers étrangers et les pensions', 'Un investisseur peut conserver un appartement, un immeuble ou des locaux commerciaux dans son pays d’origine. Le pays de situation du bien conserve souvent un droit d’imposition. Les pensions et retraites étrangères doivent aussi être étudiées avec prudence : pension privée, pension publique, retraite professionnelle ou prestation sociale ne suivent pas toujours les mêmes règles. Les conventions fiscales sont donc centrales, surtout pour les Français, Belges, Suisses, Britanniques, Kazakhs, ressortissants du Golfe ou Turcs de l’étranger.'],
      ['Ce qui resterait imposable en Turquie', 'Même dans un scénario favorable, la Turquie ne deviendrait pas automatiquement un pays où tout est exonéré. Les revenus de source turque doivent être analysés séparément : salaire versé par une société turque, honoraires facturés à un client turc, revenus locatifs d’un bien situé en Turquie, dividendes d’une société turque, activité commerciale exercée en Turquie, plus-value sur un actif turc ou revenus liés à une entreprise locale. La différence entre revenus étrangers et revenus turcs est le cœur du sujet.'],
      ['Les risques avec le pays d’origine', 'Un client peut penser : je pars en Turquie, donc je ne paie plus dans mon pays. C’est dangereux. Le pays d’origine peut continuer à considérer la personne comme résidente fiscale si la famille reste là-bas, si le centre des intérêts économiques reste là-bas, si les sociétés sont toujours dirigées depuis là-bas, si les biens immobiliers sont importants ou si la personne y passe encore beaucoup de temps. Pour un Français, il faut analyser foyer, séjour principal, activité professionnelle, centre des intérêts économiques, sociétés françaises, immobilier, dividendes, plus-values, convention fiscale France-Turquie et obligations déclaratives de sortie.'],
      ['Exemples de profils concernés', 'Un entrepreneur avec société étrangère doit vérifier la société, les clients, la direction effective et le calendrier des dividendes. Un investisseur avec portefeuille financier doit analyser dividendes, intérêts, plus-values, banque dépositaire et pays de source. Une famille patrimoniale doit intégrer résidence de chaque membre, succession, donations, assurances-vie, immobilier et sociétés familiales. Un digital nomad doit vérifier clients, contrat, lieu réel de la prestation, société, banque et risque de requalification.'],
      ['Pourquoi Bosphoras doit rester prudent', 'Cette réforme est attractive, mais elle ne doit pas être vendue comme une promesse automatique. Le positionnement premium est clair : Bosphoras ne promet pas une exonération ; Bosphoras organise une analyse privée, vérifie le profil, structure le dossier et coordonne fiscalistes, avocats, banques, comptables, assurances et partenaires d’installation. L’objectif est de savoir si la Turquie peut devenir une base sérieuse, conforme et utile pour le client.'],
    ],
    faq: [
      ['La Turquie taxe-t-elle les revenus mondiaux des résidents ?', 'Oui, selon le principe général, un résident fiscal turc est imposable sur son revenu mondial. Le régime annoncé pourrait créer une exception pour certains revenus étrangers de nouveaux résidents, sous conditions.'],
      ['L’exonération de 20 ans est-elle déjà définitive ?', 'Elle doit être traitée avec prudence jusqu’à l’adoption définitive, la publication officielle et les règles d’application. Une page SEO peut anticiper la demande, mais une décision client doit attendre une analyse professionnelle.'],
      ['Les revenus turcs seront-ils exonérés ?', 'Non. Le principe annoncé distingue les revenus étrangers, potentiellement exonérés sous conditions, et les revenus de source turque, qui resteraient imposables en Turquie.'],
      ['Un Français peut-il devenir résident fiscal turc et ne plus payer d’impôt en France ?', 'Pas automatiquement. Il faut analyser le foyer, le séjour principal, l’activité professionnelle, le centre des intérêts économiques, les sociétés, les biens, les revenus, la famille, les jours de présence et la convention fiscale France-Turquie.'],
      ['Les dividendes étrangers peuvent-ils être exonérés en Turquie ?', 'Potentiellement, si le texte final couvre bien ce type de revenu et si le profil respecte les conditions. Il faut aussi vérifier le pays de source, la retenue à la source, la convention fiscale et la date de résidence.'],
      ['Les plus-values étrangères peuvent-elles être exonérées ?', 'Les revenus et gains étrangers sont au cœur de la réforme annoncée, mais la réponse dépendra du texte définitif, du pays de source, de la date de vente, de la nature de l’actif et du profil fiscal du client.'],
      ['Bosphoras donne-t-il un conseil fiscal ?', 'Non. Bosphoras agit comme bureau privé de coordination. L’objectif est de préparer le dossier, identifier les risques, coordonner fiscalistes, avocats, banques, comptables, assurances et partenaires d’installation en Turquie.'],
    ],
  },
  en: {
    title: 'Turkey tax residence and foreign income: what investors should verify before relocating',
    metaTitle: 'Turkey tax residence and foreign income: investor guide 2026',
    description: 'Turkish tax residence, foreign income, potential 20-year exemption, previous 3-year condition and Turkish-source income: a complete guide for investors, expats and wealth families.',
    eyebrow: 'International tax · Turkey',
    intro: 'The real question is not only whether Turkey exempts foreign income. The strategic question is: if you become a Turkish tax resident, which income remains taxable, which foreign income may qualify for the new window, and what tax risks may still exist in your former country of residence?',
    cta: 'Request a private assessment',
    checklistTitle: 'Checklist before becoming tax resident in Turkey',
    checklist: ['Current tax residence and exit risks', 'Days spent in Turkey and former country', 'Exact nature of foreign income', 'Turkish-source income to keep or create', 'Applicable tax treaties', 'Banking, KYC, source of funds and compliance', 'Family, housing, school and health insurance', 'Transfer timeline, filings and documentary evidence'],
    sections: [
      ['Why this search will become central', 'Many investors will not search only for “Turkey 20-year tax exemption”. They will search for “Turkey tax residence foreign income”, “living in Turkey taxes”, “foreign income Turkey tax”, “Turkey expat tax” or “resident in Turkey foreign dividends”. This is a high-intent search: the person wants to know whether Turkey can become a real base for residence, family, income, banking, companies and wealth planning.'],
      ['What Turkish tax residence means', 'Before discussing any exemption, the general framework matters. Turkish tax residents are generally taxed on worldwide income, while non-residents are taxed on certain Turkish-source income. Tax residence is not just a residence permit or an apartment. It depends on real life, home, economic interests, companies, bank accounts, assets, income sources and evidence.'],
      ['What the announced reform could change', 'Turkey wants to attract people living abroad, including the Turkish diaspora, through a long foreign-income window. The right message is not “move to Turkey and pay zero tax”. The right message is: Turkey may become a highly attractive tax base for certain foreign income of qualifying new residents, subject to conditions and professional review.'],
      ['The previous three-year condition', 'The announced central condition is no Turkish tax residence or taxpayer status during the three calendar years preceding the relocation. Before advising a client, the file must check whether the person recently lived in Turkey, had a Turkish tax address, declared Turkish income, owned income-producing Turkish property, created a Turkish company or spent significant time in the country.'],
      ['Foreign income categories to review', 'Foreign income is not one single category. Dividends, capital gains, sale of shares, interest, professional income outside Turkey, foreign pensions, foreign real estate income, foreign company income, holding distributions, trusts, life insurance and financial instruments require separate analysis. Each category may involve withholding tax, tax treaties and reporting duties.'],
      ['Foreign dividends', 'An entrepreneur may receive dividends from a company located in France, the UAE, Kazakhstan, the United Kingdom, the United States or elsewhere. The analysis must check where the company is located, where profits are generated, whether withholding tax applies, whether a treaty applies, whether the dividend is foreign-source for Turkish purposes and whether the distribution occurs before or after Turkish tax residence begins.'],
      ['Foreign capital gains', 'Capital gains may result from selling foreign shares, company interests, a financial portfolio, property outside Turkey or a holding participation. Timing is critical. A gain realized before relocation, during the transition or after Turkish tax residence may not be treated the same way. Acquisition price, sale price, source country, custodian bank, treaty and timeline must be documented.'],
      ['Foreign professional income', 'A consultant, founder, SaaS entrepreneur, executive or digital nomad may invoice foreign clients through a foreign company or personally. It is necessary to determine where the work is performed, where clients are located, where the contract is signed, where the bank account is held, where the team operates and where effective management sits.'],
      ['Foreign rental income and pensions', 'An investor may keep real estate in the former country. The country where the property is located often keeps taxing rights. Foreign pensions also require caution because private pensions, public pensions, professional pensions and social benefits may follow different treaty rules.'],
      ['What remains taxable in Turkey', 'Even in a favorable scenario, Turkey would not automatically become a place where everything is exempt. Turkish employment income, Turkish clients, Turkish rental income, dividends from Turkish companies, local business activity, gains on Turkish assets and Turkish-source income must be reviewed separately.'],
      ['Risks in the departure country', 'A client may think: I move to Turkey, therefore I stop paying tax at home. That is dangerous. The former country may still consider the person tax resident if family, home, economic interests, companies, assets, management, real estate or days of presence remain there. A Turkish exemption does not automatically protect against a challenge abroad.'],
      ['Relevant profiles', 'This topic concerns entrepreneurs with foreign companies, investors with financial portfolios, families with international assets, digital nomads, consultants, executives, retired people, Turkish diaspora members and private banking clients comparing Turkey with Dubai, Italy, Portugal, Monaco or Cyprus.'],
      ['Bosphoras positioning', 'Bosphoras does not promise an exemption. Bosphoras structures the private assessment, identifies risks and coordinates tax advisors, lawyers, banks, accountants, insurance providers and relocation partners. The goal is to determine whether Turkey can become a serious, compliant and useful base for the client.'],
    ],
    faq: [
      ['Does Turkey tax residents on worldwide income?', 'As a general rule, Turkish tax residents are taxable on worldwide income. The announced regime may create a specific exception for certain foreign income of qualifying new residents.'],
      ['Is the 20-year exemption already final?', 'It must be treated carefully until final adoption, official publication and implementing rules. SEO can anticipate demand; client decisions require professional review.'],
      ['Will Turkish-source income be exempt?', 'No. The announced approach distinguishes foreign income, potentially exempt under conditions, from Turkish-source income, which would remain taxable in Turkey.'],
      ['Can a foreign investor simply move to Turkey and stop paying tax abroad?', 'Not safely without review. The former country may still claim tax residence depending on home, family, economic interests, companies, assets, days of presence and treaties.'],
      ['Can foreign dividends be exempt in Turkey?', 'Potentially, if the final text covers this income and the profile qualifies. Source country, withholding tax, treaty and timing must also be reviewed.'],
      ['Can foreign capital gains be exempt?', 'Foreign gains are part of the announced logic, but the answer depends on final legislation, source country, asset type, sale date and the client’s tax profile.'],
      ['Does Bosphoras provide tax advice?', 'No. Bosphoras acts as a private coordination desk, preparing the file and coordinating qualified tax advisors, lawyers, banks and relocation partners.'],
    ],
  },
  ru: {
    title: 'Налоговая резиденция Турции и иностранные доходы: что проверить инвестору до переезда',
    metaTitle: 'Налоговая резиденция Турции и иностранные доходы: гид 2026',
    description: 'Налоговая резиденция Турции, иностранные доходы, потенциальное освобождение на 20 лет, условие предыдущих 3 лет и доходы из турецкого источника для инвесторов и семей.',
    eyebrow: 'Международные налоги · Турция',
    intro: 'Главный вопрос не только в том, освобождает ли Турция иностранные доходы. Стратегический вопрос шире: если вы становитесь налоговым резидентом Турции, какие доходы остаются облагаемыми, какие иностранные доходы могут попасть в новую льготную рамку и какие риски остаются в стране прежней резиденции?',
    cta: 'Запросить частный анализ',
    checklistTitle: 'Чеклист до налоговой резиденции в Турции',
    checklist: ['Текущая налоговая резиденция и риски выхода', 'Дни в Турции и стране выезда', 'Точная природа иностранных доходов', 'Доходы из турецкого источника', 'Применимые налоговые соглашения', 'Банк, KYC, происхождение средств и compliance', 'Семья, жилье, школа, медицинская страховка', 'Календарь переезда, декларации и документы'],
    sections: [
      ['Почему этот запрос станет важным', 'Инвесторы будут искать не только “20-летняя налоговая льгота Турции”. Они будут искать налоговую резиденцию Турции, иностранные доходы, налоги при жизни в Турции, режим non-dom и дивиденды иностранных компаний. Это запрос с высокой коммерческой ценностью, потому что человек хочет понять, может ли Турция стать реальной базой для семьи, доходов, банков, компаний и капитала.'],
      ['Что означает налоговая резиденция Турции', 'В общем подходе налоговые резиденты Турции облагаются по мировому доходу, а нерезиденты — по отдельным доходам из турецкого источника. Резиденция — это не только ВНЖ или квартира. Важны реальное проживание, дом, семья, экономические интересы, компании, счета, активы, источники дохода и документы.'],
      ['Что может изменить новая реформа', 'Турция хочет привлечь людей, живущих за рубежом, включая турецкую диаспору, через длинное окно для иностранных доходов. Правильный месседж: Турция может стать привлекательной налоговой базой для отдельных иностранных доходов новых резидентов, при выполнении условий и после профессионального анализа.'],
      ['Условие предыдущих трех лет', 'Ключевое условие — отсутствие налоговой резиденции или статуса налогоплательщика в Турции в течение трех календарных лет до переезда. Нужно проверить, жил ли клиент в Турции, имел ли налоговый адрес, декларировал ли доходы, владел ли доходной недвижимостью, создавал ли компанию или проводил много времени в стране.'],
      ['Какие иностранные доходы анализировать', 'Иностранный доход нельзя рассматривать единым блоком. Дивиденды, прирост капитала, продажа долей, проценты, профессиональные доходы вне Турции, иностранные пенсии, аренда недвижимости за рубежом, доходы иностранных компаний, холдинговые выплаты, trusts, страхование жизни и финансовые инструменты требуют отдельного анализа.'],
      ['Иностранные дивиденды', 'Предприниматель может получать дивиденды из Франции, ОАЭ, Казахстана, Великобритании, США или другой страны. Нужно проверить страну компании, источник прибыли, удержание налога у источника, налоговое соглашение, квалификацию дивиденда как иностранного дохода и дату выплаты относительно начала резиденции в Турции.'],
      ['Иностранные приросты капитала', 'Прирост капитала может возникнуть при продаже иностранных акций, долей, портфеля, недвижимости за пределами Турции или участия в холдинге. Время продажи критично. Сделка до переезда, во время перехода или после резиденции может иметь разные последствия.'],
      ['Профессиональные доходы за рубежом', 'Консультант, основатель, SaaS-предприниматель, руководитель или digital nomad может выставлять счета иностранным клиентам. Нужно определить, где выполняется работа, где клиенты, где подписан контракт, где банк, где команда и где находится фактическое управление.'],
      ['Иностранная аренда и пенсии', 'Инвестор может сохранить недвижимость в стране выезда. Страна расположения имущества часто сохраняет право налогообложения. Пенсии также требуют осторожности: частные, государственные, профессиональные и социальные выплаты могут иметь разные правила по соглашениям.'],
      ['Что остается облагаемым в Турции', 'Даже при благоприятном сценарии Турция не становится страной, где все освобождено. Турецкая зарплата, турецкие клиенты, аренда недвижимости в Турции, дивиденды турецкой компании, локальный бизнес и доходы из турецкого источника анализируются отдельно.'],
      ['Риски в стране выезда', 'Клиент может думать: я переехал в Турцию, значит перестал платить дома. Это опасно. Страна выезда может продолжать считать человека резидентом, если там остаются семья, дом, экономические интересы, компании, активы, управление, недвижимость или дни присутствия.'],
      ['Профили, которых это касается', 'Тема касается предпринимателей с иностранными компаниями, инвесторов с портфелями, семей с международными активами, digital nomads, консультантов, руководителей, пенсионеров, турецкой диаспоры и клиентов private banking, сравнивающих Турцию с Дубаем, Италией, Португалией, Монако или Кипром.'],
      ['Позиционирование Bosphoras', 'Bosphoras не обещает освобождение. Bosphoras структурирует частный анализ, выявляет риски и координирует налоговых специалистов, юристов, банки, бухгалтеров, страхование и релокацию. Цель — понять, может ли Турция стать серьезной и соответствующей базой для клиента.'],
    ],
    faq: [
      ['Облагает ли Турция резидентов по мировому доходу?', 'В общем правиле да. Объявленный режим может создать специальное исключение для отдельных иностранных доходов новых резидентов.'],
      ['20-летняя льгота уже окончательная?', 'Нужно дождаться окончательного принятия, публикации и правил применения. Решения клиента требуют профессионального анализа.'],
      ['Будут ли освобождены турецкие доходы?', 'Нет. Заявленная логика касается иностранных доходов. Доходы из турецкого источника остаются облагаемыми в Турции.'],
      ['Можно ли просто переехать и перестать платить налог в прежней стране?', 'Без анализа это рискованно. Страна выезда может сохранить налоговые права в зависимости от дома, семьи, интересов, компаний, активов, дней присутствия и соглашений.'],
      ['Могут ли иностранные дивиденды быть освобождены?', 'Потенциально, если финальный текст охватывает такой доход и профиль соответствует условиям. Нужно также проверить страну источника, удержание налога, соглашение и дату выплаты.'],
      ['Может ли прирост капитала быть освобожден?', 'Иностранные доходы и gains входят в логику реформы, но ответ зависит от финального закона, страны источника, типа актива, даты продажи и профиля клиента.'],
      ['Bosphoras дает налоговую консультацию?', 'Нет. Bosphoras работает как частный координационный офис, готовит файл и координирует налоговых специалистов, юристов, банки и партнеров по релокации.'],
    ],
  },
  ar: {
    title: 'الإقامة الضريبية في تركيا والدخل الأجنبي: ما يجب على المستثمر التحقق منه قبل الانتقال',
    metaTitle: 'الإقامة الضريبية في تركيا والدخل الأجنبي: دليل المستثمرين 2026',
    description: 'دليل حول الإقامة الضريبية في تركيا، الدخل الأجنبي، الإعفاء المحتمل لمدة 20 سنة، شرط السنوات الثلاث السابقة والدخل من مصدر تركي للمستثمرين والعائلات.',
    eyebrow: 'ضرائب دولية · تركيا',
    intro: 'السؤال الحقيقي ليس فقط هل تعفي تركيا الدخل الأجنبي. السؤال الاستراتيجي هو: إذا أصبحت مقيماً ضريبياً في تركيا، ما الدخل الذي يبقى خاضعاً للضريبة، وما الدخل الأجنبي الذي قد يدخل في النافذة الجديدة، وما المخاطر التي تبقى في بلد الإقامة السابق؟',
    cta: 'طلب تحليل خاص',
    checklistTitle: 'قائمة تحقق قبل الإقامة الضريبية في تركيا',
    checklist: ['الإقامة الضريبية الحالية ومخاطر الخروج', 'الأيام في تركيا وبلد المغادرة', 'طبيعة الدخل الأجنبي بدقة', 'الدخل من مصدر تركي', 'الاتفاقيات الضريبية المطبقة', 'البنك وKYC ومصدر الأموال والامتثال', 'العائلة والسكن والمدرسة والتأمين الصحي', 'جدول الانتقال والتصريحات والأدلة'],
    sections: [
      ['لماذا سيصبح هذا البحث مهماً', 'لن يبحث المستثمرون فقط عن الإعفاء الضريبي التركي لمدة 20 سنة. سيبحثون عن الإقامة الضريبية في تركيا، الدخل الأجنبي، الضرائب عند العيش في تركيا، نظام non-dom، أو أرباح الشركات الأجنبية. هذه نية بحث قوية لأن الشخص يريد معرفة ما إذا كانت تركيا يمكن أن تصبح قاعدة حقيقية للعائلة والدخل والبنوك والشركات والثروة.'],
      ['ما معنى الإقامة الضريبية في تركيا', 'في الإطار العام، يخضع المقيم الضريبي في تركيا للدخل العالمي، بينما يخضع غير المقيم لبعض الدخل من مصدر تركي. الإقامة الضريبية ليست مجرد تصريح إقامة أو شقة. المهم هو الحياة الفعلية، السكن، العائلة، المصالح الاقتصادية، الشركات، الحسابات البنكية، الأصول، مصادر الدخل والأدلة.'],
      ['ما الذي قد تغيره الإصلاحات الجديدة', 'تريد تركيا جذب الأشخاص المقيمين في الخارج، بما في ذلك الجالية التركية، من خلال نافذة طويلة للدخل الأجنبي. الرسالة الصحيحة ليست “انتقل إلى تركيا ولا تدفع أي ضريبة”. الرسالة الصحيحة هي أن تركيا قد تصبح قاعدة ضريبية جذابة لبعض الدخل الأجنبي للمقيمين الجدد المؤهلين، وفق شروط وبعد تحليل مهني.'],
      ['شرط السنوات الثلاث السابقة', 'الشرط المركزي هو عدم وجود إقامة ضريبية أو صفة مكلف ضريبي في تركيا خلال السنوات التقويمية الثلاث السابقة للانتقال. يجب التحقق مما إذا كان العميل عاش مؤخراً في تركيا، أو كان له عنوان ضريبي، أو صرّح بدخل، أو امتلك عقاراً مدراً للدخل، أو أنشأ شركة، أو قضى وقتاً مهماً في البلاد.'],
      ['ما الدخل الأجنبي الذي يجب تحليله', 'لا يجب اعتبار الدخل الأجنبي كتلة واحدة. الأرباح، المكاسب الرأسمالية، بيع الأسهم، الفوائد، الدخل المهني خارج تركيا، المعاشات الأجنبية، الإيجارات الأجنبية، دخل الشركات الأجنبية، توزيعات الهولدينغ، trusts، التأمين على الحياة والأدوات المالية تحتاج إلى تحليل منفصل.'],
      ['الأرباح الأجنبية', 'قد يتلقى رائد أعمال أرباحاً من شركة في فرنسا أو الإمارات أو كازاخستان أو بريطانيا أو الولايات المتحدة أو غيرها. يجب التحقق من بلد الشركة، مصدر الأرباح، وجود ضريبة مقتطعة، الاتفاقية الضريبية، اعتبار الدخل أجنبياً في تركيا وتوقيت التوزيع قبل أو بعد الإقامة التركية.'],
      ['المكاسب الرأسمالية الأجنبية', 'قد تنتج المكاسب عن بيع أسهم أجنبية، حصص شركة، محفظة مالية، عقار خارج تركيا أو مشاركة في holding. التوقيت مهم جداً: البيع قبل الانتقال أو أثناء المرحلة الانتقالية أو بعد الإقامة قد لا تكون له نفس النتائج.'],
      ['الدخل المهني الأجنبي', 'قد يفوتر مستشار أو مؤسس أو رائد SaaS أو مدير أو digital nomad عملاء أجانب من خلال شركة أجنبية أو شخصياً. يجب تحديد أين يتم العمل فعلياً، أين العملاء، أين يوقع العقد، أين البنك، أين الفريق وأين الإدارة الفعلية.'],
      ['الإيجارات والمعاشات الأجنبية', 'قد يحتفظ المستثمر بعقار في بلد المغادرة. بلد وجود العقار غالباً يحتفظ بحق ضريبي. المعاشات تحتاج أيضاً إلى حذر لأن المعاشات الخاصة والعامة والمهنية والاجتماعية قد تخضع لقواعد مختلفة حسب الاتفاقيات.'],
      ['ما يبقى خاضعاً للضريبة في تركيا', 'حتى في سيناريو إيجابي، لا تصبح تركيا بلداً يكون فيه كل شيء معفى. الراتب التركي، العملاء الأتراك، إيجارات العقارات التركية، أرباح شركة تركية، النشاط المحلي والدخل من مصدر تركي يجب تحليلها بشكل منفصل.'],
      ['المخاطر في بلد المغادرة', 'قد يعتقد العميل: انتقلت إلى تركيا، إذن انتهت الضرائب في بلدي. هذا خطر. قد يستمر بلد المغادرة في اعتباره مقيماً ضريبياً إذا بقيت العائلة أو المنزل أو المصالح الاقتصادية أو الشركات أو الأصول أو الإدارة أو العقارات أو أيام الحضور هناك.'],
      ['الملفات المعنية', 'الموضوع يخص رواد الأعمال بشركات أجنبية، المستثمرين بمحافظ مالية، العائلات ذات الأصول الدولية، digital nomads، المستشارين، المديرين، المتقاعدين، الجالية التركية وعملاء private banking الذين يقارنون تركيا بدبي وإيطاليا والبرتغال وموناكو وقبرص.'],
      ['تموضع Bosphoras', 'لا يعد Bosphoras بالإعفاء. يقوم Bosphoras بتنظيم التحليل الخاص، تحديد المخاطر وتنسيق المستشارين الضريبيين والمحامين والبنوك والمحاسبين والتأمين وشركاء الانتقال. الهدف هو معرفة ما إذا كانت تركيا قاعدة جدية ومتوافقة ومفيدة للعميل.'],
    ],
    faq: [
      ['هل تفرض تركيا الضريبة على الدخل العالمي للمقيمين؟', 'كقاعدة عامة نعم. النظام المعلن قد ينشئ استثناءً خاصاً لبعض الدخل الأجنبي للمقيمين الجدد المؤهلين.'],
      ['هل إعفاء 20 سنة نهائي الآن؟', 'يجب انتظار الاعتماد النهائي والنشر وقواعد التطبيق. قرارات العملاء تحتاج إلى تحليل مهني.'],
      ['هل يعفى الدخل التركي؟', 'لا. الاتجاه المعلن يتعلق بالدخل الأجنبي. الدخل من مصدر تركي يبقى خاضعاً للضريبة في تركيا.'],
      ['هل يمكن الانتقال ببساطة والتوقف عن دفع الضرائب في البلد السابق؟', 'ليس بأمان دون مراجعة. قد يحتفظ بلد المغادرة بحقوق ضريبية حسب المنزل والعائلة والمصالح والشركات والأصول وأيام الحضور والاتفاقيات.'],
      ['هل يمكن إعفاء الأرباح الأجنبية؟', 'محتمل إذا شمل النص النهائي هذا النوع من الدخل وكان الملف مؤهلاً. يجب أيضاً التحقق من بلد المصدر والضريبة المقتطعة والاتفاقية والتوقيت.'],
      ['هل يمكن إعفاء المكاسب الرأسمالية الأجنبية؟', 'الدخل والمكاسب الأجنبية ضمن منطق الإصلاح، لكن الجواب يعتمد على القانون النهائي وبلد المصدر ونوع الأصل وتاريخ البيع وملف العميل.'],
      ['هل يقدم Bosphoras استشارة ضريبية؟', 'لا. Bosphoras يعمل كمكتب تنسيق خاص، يجهز الملف وينسق المستشارين الضريبيين والمحامين والبنوك وشركاء الانتقال.'],
    ],
  },
};

function assessmentHref(locale: Locale) {
  return locale === 'fr' ? '/diagnostic-prive' : locale === 'en' ? '/en/private-assessment' : locale === 'ru' ? '/ru/chastnaya-konsultatsiya' : '/ar/تقييم-خاص';
}

export function getTaxResidenceForeignIncomeMetadata(locale: Locale): Metadata {
  const c = content[locale];
  const canonical = `https://bosphoras.com${paths[locale]}`;
  return {
    title: `${c.metaTitle} | Bosphoras`,
    description: c.description,
    alternates: { canonical, languages: { fr: `https://bosphoras.com${paths.fr}`, en: `https://bosphoras.com${paths.en}`, ru: `https://bosphoras.com${paths.ru}`, ar: `https://bosphoras.com${paths.ar}`, 'x-default': `https://bosphoras.com${paths.fr}` } },
    openGraph: { title: c.title, description: c.description, url: canonical, siteName: 'Bosphoras', type: 'article', images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: c.title }] },
    twitter: { card: 'summary_large_image', title: c.title, description: c.description, images: ['/images/og-default.jpg'] },
  };
}

export function TaxResidenceForeignIncomeFullPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <>
      <StructuredData data={[{ '@context': 'https://schema.org', '@type': 'Article', headline: c.title, description: c.description, inLanguage: locale, datePublished: '2026-05-11', dateModified: '2026-05-11', author: { '@type': 'Organization', name: 'Bosphoras' }, publisher: { '@type': 'Organization', name: 'Bosphoras' }, mainEntityOfPage: `https://bosphoras.com${paths[locale]}` }, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }]} />
      <Header locale={locale} currentPath={paths[locale]} />
      <main dir={locale === 'ar' ? 'rtl' : 'ltr'} className="bg-[#f8f1e7] text-[#101827]">
        <section className="bg-[#121826] px-5 pb-20 pt-32 text-white md:px-8 md:pt-40"><div className="mx-auto max-w-[1400px]"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d2a863]">{c.eyebrow}</p><h1 className="mt-6 max-w-6xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-7xl">{c.title}</h1><p className="mt-8 max-w-4xl text-lg leading-9 text-white/80">{c.intro}</p><Link href={assessmentHref(locale)} className="mt-10 inline-flex items-center justify-center gap-3 bg-[#d2a863] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101827]">{c.cta}<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.75fr_1.25fr]"><aside className="h-fit border border-[#d8c7a1] bg-[#fffaf0] p-8 lg:sticky lg:top-28"><Landmark className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-3xl">{c.checklistTitle}</h2><ul className="mt-6 space-y-3 text-sm leading-7 text-[#3e4857]">{c.checklist.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#8a6728]" />{item}</li>)}</ul></aside><div className="space-y-5">{c.sections.map(([title, text], index) => <article key={title} className="border border-[#d8c7a1] bg-white p-7 md:p-9"><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6728]">{String(index + 1).padStart(2, '0')}</p><h2 className="mt-4 font-serif text-3xl tracking-[-0.025em] text-[#121826] md:text-4xl">{title}</h2><p className="mt-5 text-base leading-8 text-[#3e4857]">{text}</p></article>)}</div></div></section>
        <section className="bg-[#fffaf0] px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><ShieldCheck className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em] md:text-6xl">Bosphoras Private Desk</h2><p className="mt-6 text-lg leading-9 text-[#3e4857]">{c.description}</p><Link href={assessmentHref(locale)} className="mt-8 inline-flex items-center justify-center gap-3 bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white">{c.cta}<ArrowRight size={16} /></Link></div></section>
        <section className="px-5 py-16 md:px-8 md:py-24"><div className="mx-auto max-w-[1100px]"><FileText className="h-8 w-8 text-[#8a6728]" /><h2 className="mt-6 font-serif text-4xl tracking-[-0.03em]">FAQ</h2><div className="mt-8 grid gap-px bg-[#d8c7a1]">{c.faq.map(([q, a]) => <article key={q} className="bg-[#f8f1e7] p-7"><h3 className="font-serif text-2xl text-[#121826]">{q}</h3><p className="mt-4 leading-8 text-[#3e4857]">{a}</p></article>)}</div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
