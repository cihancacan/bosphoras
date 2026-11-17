import type { Locale } from '@/lib/i18n';

export type EditorialSection = { id: string; title: string; body: string; bullets?: string[]; table?: { headers: string[]; rows: string[][] } };
export type EditorialGuide = { title: string; metaDescription: string; shortAnswer: string; bosphorasHelp: string; sections: EditorialSection[]; faqs: { question: string; answer: string }[]; sources: { label: string; href: string }[] };

export const editorialGuideUpdatedAt = '2026-11-17';
export const editorialGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "tax-exemption-20-years": {
    "fr": {
      "title": "Exonération fiscale 20 ans en Turquie : conditions 2026",
      "metaDescription": "Loi 7582 : découvrez les revenus étrangers exonérés, les 3 années d’éligibilité, le certificat fiscal et les délais de demande en Turquie.",
      "shortAnswer": "La Turquie exonère pendant 20 ans certains revenus de source étrangère des personnes physiques qui deviennent résidentes à compter du 1er janvier 2026 et remplissent les conditions de l’article 20/D. Il s’agit d’une loi en vigueur, et non d’un projet.",
      "bosphorasHelp": "Préparer votre demande d’exonération et votre calendrier d’installation avec Bosphoras.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Qui bénéficie de la réforme fiscale de 2026 ?",
          "body": "La loi n° 7582, publiée le 4 juin 2026, introduit l’article additionnel 20/D dans la loi sur l’impôt sur le revenu. Le dispositif vise les personnes physiques nouvellement établies en Turquie, indépendamment de leur nationalité. Pour une installation en 2026, les trois années civiles examinées sont 2023, 2024 et 2025 : absence de domicile et, en principe, d’assujettissement fiscal en Turquie. Une ancienne imposition turque limitée à certains loyers, revenus de capitaux ou plus-values ne disqualifie pas automatiquement le demandeur."
        },
        {
          "id": "detail-2",
          "title": "Quels revenus sont exonérés ?",
          "body": "Le critère essentiel est la source étrangère du revenu. Des dividendes de sociétés étrangères, des loyers d’un immeuble situé hors de Turquie ou des gains réalisés à l’étranger peuvent entrer dans le régime selon leur qualification. Les recettes de source turque restent soumises aux règles ordinaires. Un compte bancaire étranger ou un client étranger ne suffit pas à transformer une prestation exécutée en Turquie en revenu étranger. Les sociétés ne bénéficient pas en tant que telles de cette exonération personnelle."
        },
        {
          "id": "detail-3",
          "title": "Comment obtenir le certificat d’exonération ?",
          "body": "Le communiqué fiscal n° 333 du 4 juillet 2026 prévoit une demande auprès du service fiscal compétent. Elle doit être déposée au plus tard à la fin de l’année civile d’établissement ; pour une installation en novembre ou décembre, jusqu’au dernier jour de février suivant. Préparez vos preuves de résidence antérieure, votre historique fiscal, l’adresse turque et les pièces justifiant la nature et la provenance des revenus. L’administration délivre le certificat après contrôle."
        },
        {
          "id": "detail-4",
          "title": "Déclarations, fiscalité étrangère et succession",
          "body": "Les revenus couverts ne figurent pas dans la déclaration annuelle turque ; si vous devez déclarer d’autres revenus, ils en restent exclus. Les charges liées aux revenus exonérés ne peuvent réduire les revenus imposables ; les impôts étrangers correspondants ne sont pas imputables sur l’impôt turc. Le pays de source peut continuer à taxer. La loi prévoit également un taux successoral de 1 % pour certaines transmissions par décès pendant la période du régime ; ce n’est pas une exonération générale des droits de succession."
        },
        {
          "id": "detail-5",
          "title": "Exemple concret : installation en novembre 2026",
          "body": "Un entrepreneur domicilié à l’étranger en 2023–2025 qui s’établit en Turquie le 17 novembre 2026 dispose, selon le calendrier du communiqué, jusqu’au 28 février 2027 pour demander son certificat. Il distingue les dividendes étrangers de sa rémunération pour le travail exercé en Turquie."
        },
        {
          "id": "practical-1",
          "title": "Un calcul concret : que représente l'exonération en livres turques ?",
          "body": "Imaginons un nouveau résident qui reçoit l'équivalent de 1 000 000 TL de dividendes étrangers intégralement éligibles et dispose de 400 000 TL de revenu net imposable en Turquie. En application du barème 2026 de l'article 103, l'impôt brut sur ces 400 000 TL s'élève à 70 500 TL. Les dividendes couverts ne s'ajoutent pas à cette base. Si, dans un scénario simplifié sans exonération ni autre abattement, les 1 400 000 TL étaient intégralement imposables selon le barème ordinaire hors salaires, le calcul donnerait 372 500 TL. La différence théorique représente 302 000 TL.\n\nIl s'agit d'une illustration du fonctionnement du barème, non d'une simulation personnelle de dividendes : retenues étrangères, conventions, autres exonérations et crédits peuvent changer le résultat réel. L'avantage doit se mesurer sur le revenu net après fiscalité des deux pays, et non sur un taux publicitaire de 0 %."
        },
        {
          "id": "practical-2",
          "title": "Salarié, retraité, investisseur ou entrepreneur : les situations diffèrent",
          "body": "Un investisseur qui vit de dividendes de sociétés étrangères et de loyers d'immeubles situés à l'étranger présente un profil pertinent. Un salarié qui travaille physiquement depuis Istanbul pour un employeur étranger ne doit pas supposer que la rémunération est étrangère en raison du seul lieu de paiement. L'article 7 de la loi 193 examine notamment le lieu de l'activité et l'utilisation du service. Une pension étrangère peut relever de règles spécifiques à sa catégorie et à la convention du pays payeur.\n\nPour un dirigeant, il faut également distinguer ses dividendes personnels de l'activité de l'entreprise : la réforme ne neutralise pas les obligations de la société, son éventuel établissement en Turquie ou la rémunération de ses fonctions. Un dossier clair commence par un inventaire des flux, des contrats et des lieux d'activité."
        },
        {
          "id": "practical-3",
          "title": "Le dossier fiscal : de la preuve du départ au certificat turc",
          "body": "La preuve utile n'est pas seulement un tampon de passeport. Pour les années précédant le transfert, réunissez les avis d'imposition, certificats de résidence fiscale disponibles, contrats de logement, historiques d'entrée et sortie et justificatifs de l'activité à l'étranger. Pour la nouvelle installation, conservez les pièces d'adresse, de domicile et le numéro fiscal turc, ainsi que les relevés des sources de revenus.\n\nClassez ensuite chaque revenu dans un tableau comportant le pays de source, le payeur, la nature juridique, la date de perception et l'impôt déjà prélevé. Cette méthode permet de documenter la distinction entre revenu turc et revenu étranger et de préparer la demande prévue par le formulaire annexé au communiqué 333."
        },
        {
          "id": "practical-4",
          "title": "Que se passe-t-il si les conditions ne sont plus réunies ?",
          "body": "Le régime ne constitue pas une dispense de toute obligation fiscale. Si l'administration établit que les critères n'étaient pas satisfaits, la loi traite les impôts non établis comme une perte fiscale. Il est donc utile de conserver les pièces pendant toute la durée pertinente et de documenter les changements de situation : déménagement, nouvel emploi, création de société ou acquisition d'un actif turc.\n\nBosphoras vous aide à transformer ces informations en un calendrier de transfert : analyse des flux de revenus, constitution du dossier, mise en relation avec les professionnels fiscaux indépendants et coordination de votre installation. Vous disposez ainsi d'une vue d'ensemble avant de modifier votre situation patrimoniale."
        }
      ],
      "faqs": [
        {
          "question": "Le régime est-il réellement entré en vigueur ?",
          "answer": "Oui. Loi 7582, publiée le 4 juin 2026, applicable aux personnes établies depuis le 1er janvier 2026 ; modalités publiées le 4 juillet."
        },
        {
          "question": "Un ancien propriétaire en Turquie est-il exclu ?",
          "answer": "Pas nécessairement : la loi prévoit une exception pour certains assujettissements antérieurs liés aux revenus patrimoniaux ou aux plus-values."
        },
        {
          "question": "Faut-il déclarer les revenus étrangers exonérés ?",
          "answer": "Non en Turquie pour les revenus couverts. Les obligations du pays de source et les autres revenus imposables restent distincts."
        }
      ],
      "sources": [
        {
          "label": "Journal officiel — loi 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "GİB — communiqué fiscal n° 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "GİB — guide pratique de l’exonération",
          "href": "https://www.gib.gov.tr/duyuru-arsivi/guncel/18801_yurt_disindan_elde_edilen_kazanc_ve_iratlarda_vergi_istisnasi_rehberi_ile_infografik_yayimlandi_"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/660/madde/13912",
          "label": "Texte de l’article 4 de la loi 7582 — GİB"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937",
          "label": "Barème 2026 de l’impôt sur le revenu — GİB"
        }
      ]
    },
    "en": {
      "title": "Turkey 20-year tax exemption: 2026 eligibility and application",
      "metaDescription": "Turkey’s Law 7582: eligible foreign income, three-year lookback, exemption certificate and filing deadlines for new residents.",
      "shortAnswer": "Turkey now exempts eligible foreign-source income from personal income tax for 20 years for qualifying individuals who become resident from 1 January 2026. Article 20/D is enacted law, not a proposal.",
      "bosphorasHelp": "Plan your eligibility file and relocation timetable with Bosphoras.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Who qualifies under the new law?",
          "body": "Law 7582, published on 4 June 2026, added recurring Article 20/D to the Income Tax Law. It applies to individuals meeting the residence conditions, regardless of nationality. For someone settling in 2026, the three prior calendar years are 2023, 2024 and 2025. They must generally have had neither a Turkish domicile nor Turkish tax liability. Prior Turkish tax liability solely from specified property income, investment income or capital gains does not automatically bar eligibility."
        },
        {
          "id": "detail-2",
          "title": "What income is covered?",
          "body": "The source of income is decisive. Foreign company dividends, rental income from overseas property and gains arising abroad may qualify depending on classification. Turkish-source income remains subject to ordinary rules. A foreign bank account or foreign customer does not by itself make work performed in Turkey foreign-source income. This is a personal income tax exemption, not a corporate tax holiday."
        },
        {
          "id": "detail-3",
          "title": "How to obtain the exemption certificate",
          "body": "General Income Tax Communiqué 333 of 4 July 2026 requires an application to the competent tax office by the end of the calendar year of settlement. Those settling in November or December have until the end of February of the following year. Assemble evidence of previous residence, tax history, Turkish address and documentation of income type and source. The tax office issues the certificate after checking eligibility."
        },
        {
          "id": "detail-4",
          "title": "Reporting, foreign taxes and inheritance",
          "body": "Covered income is omitted from the Turkish annual return, including when other income requires filing. Related costs cannot offset taxable income, and foreign taxes on exempt income cannot be credited against Turkish income tax. The source country may still levy tax. The law also establishes a 1% inheritance tax rate for qualifying transfers on death during the exemption period; it is not a general inheritance tax exemption."
        },
        {
          "id": "detail-5",
          "title": "Worked example: moving in November 2026",
          "body": "An entrepreneur domiciled abroad throughout 2023–2025 who settles in Turkey on 17 November 2026 has until 28 February 2027 under the communiqué to apply for the certificate. Separate foreign dividends from remuneration for work carried out in Turkey."
        },
        {
          "id": "practical-1",
          "title": "A worked calculation in Turkish lira",
          "body": "Consider a qualifying new resident receiving the equivalent of TRY 1,000,000 in fully eligible foreign dividends and TRY 400,000 of taxable net Turkish income. Under the 2026 Article 103 schedule, gross tax on TRY 400,000 is TRY 70,500; the covered dividends are excluded. If all TRY 1,400,000 were taxable under the ordinary non-employment scale with no exemptions or deductions, the illustrative tax would be TRY 372,500, a theoretical difference of TRY 302,000.\n\nThis demonstrates the mechanics of the progressive schedule, not an individual dividend tax calculation. Withholding tax, treaty provisions, separate reliefs and credits may alter the real result. Measure the benefit after taxes in both countries, rather than treating a 0% headline as your effective global tax rate."
        },
        {
          "id": "practical-2",
          "title": "Employees, retirees, investors and business owners",
          "body": "An investor living on overseas company dividends and rents from overseas property is a relevant candidate. An employee physically working from Istanbul for a foreign employer should not assume the remuneration is foreign-source simply because it is paid abroad. Article 7 of Law 193 considers factors such as where an activity is performed and services are used. An overseas pension may be subject to special category and treaty rules.\n\nA company director must also distinguish personal dividends from corporate activities. The exemption does not remove corporate tax obligations, a possible Turkish establishment or taxation of remuneration for duties. Begin with an inventory of income flows, contracts and working locations."
        },
        {
          "id": "practical-3",
          "title": "Build the evidence file before applying",
          "body": "Passport stamps alone are not a complete record. Gather tax notices, available residence certificates, housing contracts, entry and exit records and evidence of overseas activity for the preceding years. For the Turkish move, retain evidence of your new address and domicile, Turkish tax number and records of income sources.\n\nFor each income stream, record the source country, payer, legal category, receipt date and taxes already withheld. This helps document domestic versus foreign-source income and prepares the application using the form annexed to Communiqué 333."
        },
        {
          "id": "practical-4",
          "title": "What happens if eligibility is challenged?",
          "body": "The regime does not remove all tax obligations. If the authorities later determine the statutory criteria were not met, the law treats the unpaid assessed amounts as a tax loss. Keep records for the applicable periods and document changes such as a move, new job, business formation or Turkish asset acquisition.\n\nBosphoras can coordinate a relocation timetable, the income inventory and supporting file, introductions to independent tax professionals and practical arrangements. Start before changing your property, company or residence structure."
        }
      ],
      "faqs": [
        {
          "question": "Is the reform in force?",
          "answer": "Yes. Law 7582 was published on 4 June 2026 and applies to qualifying arrivals from 1 January 2026; implementation rules followed on 4 July."
        },
        {
          "question": "Does previous Turkish property ownership disqualify me?",
          "answer": "Not automatically. The law makes exceptions for certain prior property, investment and capital gains tax liabilities."
        },
        {
          "question": "Must exempt income be included in a Turkish tax return?",
          "answer": "No, for income covered by the exemption. Other taxable income and source-country obligations are separate."
        }
      ],
      "sources": [
        {
          "label": "Official Gazette — Law 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "GİB — Tax Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "GİB — exemption guide",
          "href": "https://www.gib.gov.tr/duyuru-arsivi/guncel/18801_yurt_disindan_elde_edilen_kazanc_ve_iratlarda_vergi_istisnasi_rehberi_ile_infografik_yayimlandi_"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/660/madde/13912",
          "label": "Law 7582, Article 4 — GİB"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937",
          "label": "2026 income tax schedule — GİB"
        }
      ]
    },
    "ru": {
      "title": "Налоговая льгота в Турции на 20 лет: условия 2026",
      "metaDescription": "Закон № 7582: освобождение иностранных доходов, условия за три предыдущих года, налоговое свидетельство и сроки подачи заявления.",
      "shortAnswer": "В Турции действует освобождение от подоходного налога на 20 лет для доходов из иностранных источников у физических лиц, которые стали резидентами с 1 января 2026 года и выполняют условия статьи 20/D. Это действующий закон, а не законопроект.",
      "bosphorasHelp": "Подготовьте документы для получения льготы и план переезда вместе с Bosphoras.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Кто может воспользоваться льготой?",
          "body": "Закон № 7582, опубликованный 4 июня 2026 года, дополнил закон о подоходном налоге статьёй 20/D. Льгота доступна физическим лицам независимо от гражданства при соблюдении условий. При переезде в 2026 году проверяются 2023, 2024 и 2025 годы: в Турции не должно было быть места постоянного жительства и, как правило, налоговых обязательств. Прежнее налогообложение отдельных доходов от недвижимости, капитала или прироста стоимости не исключает льготу автоматически."
        },
        {
          "id": "detail-2",
          "title": "Какие доходы освобождаются от налога?",
          "body": "Определяющее значение имеет иностранный источник дохода. Дивиденды иностранных компаний, доходы от аренды зарубежной недвижимости и полученная за рубежом прибыль могут подпадать под льготу в зависимости от квалификации. Доходы из турецких источников облагаются по общим правилам. Иностранный счёт или клиент сами по себе не делают доход от работы в Турции иностранным. Льгота касается физического лица, а не компании."
        },
        {
          "id": "detail-3",
          "title": "Как получить свидетельство об освобождении?",
          "body": "Согласно циркуляру № 333 от 4 июля 2026 года, заявление подаётся в компетентную налоговую инспекцию до конца календарного года приобретения статуса резидента. При переезде в ноябре или декабре срок продлевается до конца февраля следующего года. Подготовьте подтверждение прежнего проживания, налоговую историю, турецкий адрес и документы о характере и источнике доходов. Инспекция выдаёт свидетельство после проверки."
        },
        {
          "id": "detail-4",
          "title": "Декларации, иностранные налоги и наследство",
          "body": "Доходы, подпадающие под льготу, не включаются в годовую турецкую декларацию, даже если необходимо декларировать другие доходы. Связанные расходы не уменьшают налогооблагаемый доход, а иностранный налог по освобождённым доходам не засчитывается в Турции. Государство источника может сохранять право налогообложения. Закон также устанавливает ставку налога на наследство 1% для соответствующих передач имущества в случае смерти в период льготы."
        },
        {
          "id": "detail-5",
          "title": "Пример: переезд в ноябре 2026 года",
          "body": "Предприниматель, проживавший за рубежом в 2023–2025 годах и ставший резидентом Турции 17 ноября 2026 года, может подать заявление до 28 февраля 2027 года. Иностранные дивиденды следует отделить от вознаграждения за работу в Турции."
        },
        {
          "id": "practical-1",
          "title": "Пример расчёта в турецких лирах",
          "body": "Представим нового резидента, получившего эквивалент 1 000 000 лир дивидендов, полностью подпадающих под льготу, и 400 000 лир чистого налогооблагаемого дохода в Турции. По шкале статьи 103 на 2026 год налог с 400 000 лир составляет 70 500 лир. Освобождённые дивиденды не увеличивают базу. Если бы все 1 400 000 лир облагались по обычной шкале для доходов, не являющихся заработной платой, без вычетов и льгот, налог составил бы 372 500 лир. Теоретическая разница — 302 000 лир.\n\nЭто пример работы прогрессивной шкалы, а не персональный расчёт налога на дивиденды. Удержания за рубежом, международные соглашения и другие льготы могут изменить итог. Важен общий налог в обеих странах, а не рекламное обещание нулевой ставки."
        },
        {
          "id": "practical-2",
          "title": "Наёмные работники, пенсионеры, инвесторы и предприниматели",
          "body": "Инвестор, получающий дивиденды иностранных компаний и арендную плату за зарубежную недвижимость, может рассматривать этот режим. Работник, который фактически трудится из Стамбула на иностранного работодателя, не должен считать зарплату иностранным доходом лишь потому, что она поступает из-за рубежа. Статья 7 закона № 193 учитывает, в частности, место работы и использования услуг. Иностранная пенсия может подпадать под отдельные правила и соглашение со страной выплаты.\n\nРуководителю компании следует отделять личные дивиденды от деятельности самой организации. Льгота не отменяет корпоративные налоговые обязательства, вопрос постоянного представительства или налогообложение вознаграждения за работу."
        },
        {
          "id": "practical-3",
          "title": "Как подготовить документы к заявлению",
          "body": "Для подтверждения предыдущих лет соберите налоговые уведомления, доступные справки о резидентстве, договоры на жильё, сведения о въездах и выездах и подтверждение деятельности за границей. После переезда сохраняйте документы о турецком адресе, месте постоянного проживания, налоговом номере и источниках доходов.\n\nДля каждого дохода укажите страну источника, плательщика, юридическую категорию, дату получения и удержанный налог. Такой перечень позволяет разграничить турецкие и иностранные доходы и подготовить заявление по форме из приложения к циркуляру № 333."
        },
        {
          "id": "practical-4",
          "title": "Что будет, если условия льготы оспорены?",
          "body": "Льгота не освобождает от всех налоговых обязанностей. Если налоговая служба установит, что условия не выполнялись, закон рассматривает неначисленные суммы как налоговые потери. Сохраняйте подтверждающие документы и фиксируйте изменения: переезд, новую работу, открытие компании или приобретение турецкого актива.\n\nBosphoras может организовать подготовку перечня доходов и документов, взаимодействие с независимыми налоговыми специалистами и практические этапы переезда. Это позволяет оценить последствия до изменения структуры бизнеса или активов."
        }
      ],
      "faqs": [
        {
          "question": "Льгота уже действует?",
          "answer": "Да. Закон опубликован 4 июня 2026 года и распространяется на соответствующих новым условиям резидентов с 1 января; правила применения опубликованы 4 июля."
        },
        {
          "question": "Исключает ли прежняя покупка недвижимости льготу?",
          "answer": "Не обязательно. Для некоторых прежних налоговых обязательств по недвижимости, капиталу и приросту стоимости предусмотрено исключение."
        },
        {
          "question": "Нужно ли декларировать освобождённые доходы?",
          "answer": "Нет, в турецкой декларации — для доходов, покрываемых льготой. Остальные доходы и обязательства в стране источника рассматриваются отдельно."
        }
      ],
      "sources": [
        {
          "label": "Официальный вестник — закон № 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "GİB — циркуляр № 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "GİB — руководство по льготе",
          "href": "https://www.gib.gov.tr/duyuru-arsivi/guncel/18801_yurt_disindan_elde_edilen_kazanc_ve_iratlarda_vergi_istisnasi_rehberi_ile_infografik_yayimlandi_"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/660/madde/13912",
          "label": "Статья 4 закона № 7582 — GİB"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937",
          "label": "Шкала подоходного налога 2026 — GİB"
        }
      ]
    },
    "ar": {
      "title": "الإعفاء الضريبي في تركيا 20 عاماً: شروط 2026",
      "metaDescription": "شرح قانون 7582: الدخل الأجنبي المعفى، شروط السنوات الثلاث السابقة، شهادة الإعفاء ومواعيد التقديم للمقيمين الجدد.",
      "shortAnswer": "أقرّت تركيا إعفاءً من ضريبة دخل الأفراد لمدة 20 عاماً على الدخل المؤهل من مصادر أجنبية لمن يصبحون مقيمين اعتباراً من 1 يناير 2026 ويستوفون شروط المادة 20/D. القانون نافذ وليس مجرد مشروع.",
      "bosphorasHelp": "جهّز ملف الاستفادة من الإعفاء وخطة انتقالك بالتنسيق مع Bosphoras.",
      "sections": [
        {
          "id": "detail-1",
          "title": "من يحق له الاستفادة من الإعفاء؟",
          "body": "أضاف القانون رقم 7582 المنشور في 4 يونيو 2026 المادة 20/D إلى قانون ضريبة الدخل. ويشمل الأفراد المستوفين للشروط بصرف النظر عن الجنسية. عند الاستقرار في 2026 تُراجع السنوات الميلادية 2023 و2024 و2025، ويُشترط عدم وجود موطن في تركيا أو خضوع ضريبي فيها من حيث المبدأ. ولا تمنع بعض الالتزامات الضريبية السابقة الناشئة عن إيرادات العقارات أو رأس المال أو الأرباح الرأسمالية الاستفادة تلقائياً."
        },
        {
          "id": "detail-2",
          "title": "ما أنواع الدخل المشمولة بالإعفاء؟",
          "body": "المعيار الأساسي هو مصدر الدخل الأجنبي. قد تشمل الاستفادة توزيعات أرباح الشركات الأجنبية وإيجارات العقارات خارج تركيا والأرباح المتحققة في الخارج بحسب تصنيفها. أما الدخل من مصادر تركية فيخضع للقواعد العادية. وجود حساب مصرفي أو عميل أجنبي لا يجعل العمل المؤدى داخل تركيا دخلاً أجنبياً تلقائياً. الإعفاء يخص ضريبة دخل الأفراد وليس ضريبة أرباح الشركات."
        },
        {
          "id": "detail-3",
          "title": "كيف تحصل على شهادة الإعفاء؟",
          "body": "حدّد التعميم الضريبي رقم 333 الصادر في 4 يوليو 2026 تقديم الطلب إلى دائرة الضرائب المختصة قبل نهاية سنة الاستقرار. ولمن يستقر في نوفمبر أو ديسمبر يمتد الموعد إلى نهاية فبراير من السنة التالية. جهّز إثباتات الإقامة السابقة والسجل الضريبي والعنوان التركي ومستندات نوع الدخل ومصدره. تصدر الدائرة الشهادة بعد مراجعة الشروط."
        },
        {
          "id": "detail-4",
          "title": "الإقرار الضريبي والضرائب الأجنبية والميراث",
          "body": "لا تُدرج الإيرادات المشمولة بالإعفاء في الإقرار السنوي التركي حتى عند تقديم إقرار بسبب إيرادات أخرى. ولا يمكن خصم تكاليفها من الدخل الخاضع للضريبة أو احتساب الضرائب الأجنبية عليها كرصيد ضريبي في تركيا. وقد تبقى ضريبة مستحقة في بلد المصدر. وينص القانون أيضاً على معدل قدره 1% لبعض حالات انتقال التركة بالوفاة أثناء مدة الاستفادة، وليس إعفاءً عاماً من ضرائب الميراث."
        },
        {
          "id": "detail-5",
          "title": "مثال عملي: الاستقرار في نوفمبر 2026",
          "body": "رائد أعمال عاش خارج تركيا خلال 2023–2025 وأصبح مقيماً فيها في 17 نوفمبر 2026 يمكنه طلب الشهادة حتى 28 فبراير 2027 وفق التعميم. عليه فصل توزيعات الأرباح الأجنبية عن أجر العمل داخل تركيا."
        },
        {
          "id": "practical-1",
          "title": "مثال حسابي بالليرة التركية",
          "body": "لنفترض أن مقيماً جديداً حصل على ما يعادل مليون ليرة من توزيعات أرباح أجنبية مؤهلة بالكامل للإعفاء، إضافة إلى 400 ألف ليرة من صافي دخل خاضع للضريبة في تركيا. وفق شرائح المادة 103 لعام 2026، تبلغ الضريبة الإجمالية على 400 ألف ليرة 70,500 ليرة، ولا تضاف التوزيعات المعفاة إلى الوعاء. ولو خضع كامل مبلغ 1.4 مليون ليرة للشرائح العادية لغير الرواتب دون إعفاءات أو خصومات، لبلغت الضريبة 372,500 ليرة، أي فرق نظري قدره 302 ألف ليرة.\n\nهذا المثال يوضح آلية الشرائح التصاعدية ولا يمثل حساباً شخصياً لضريبة التوزيعات؛ فقد تغير الاقتطاعات الأجنبية والاتفاقيات والإعفاءات الأخرى النتيجة الفعلية. المهم هو صافي الدخل بعد الضرائب في البلدين."
        },
        {
          "id": "practical-2",
          "title": "الموظفون والمتقاعدون والمستثمرون وأصحاب الشركات",
          "body": "يمكن للمستثمر الذي يحصل على توزيعات شركات أجنبية وإيجارات عقارات خارج تركيا دراسة هذا النظام. أما الموظف الذي يعمل فعلياً من إسطنبول لصالح جهة أجنبية، فلا يصبح راتبه دخلاً أجنبياً لمجرد تحويله من الخارج؛ إذ تراعي المادة 7 من القانون 193 مكان أداء النشاط والاستفادة من الخدمة. وقد تخضع المعاشات الأجنبية لقواعد خاصة واتفاقيات مع بلد الدفع.\n\nوعلى مدير الشركة الفصل بين توزيعاته الشخصية ونشاط الشركة ذاتها. لا يلغي الإعفاء التزامات الشركة الضريبية أو احتمال وجود منشأة لها في تركيا أو الضريبة على مقابل العمل."
        },
        {
          "id": "practical-3",
          "title": "إعداد وثائق طلب شهادة الإعفاء",
          "body": "اجمع إشعارات الضرائب وشهادات الإقامة الضريبية المتاحة وعقود السكن وسجل الدخول والخروج وإثباتات النشاط في الخارج عن السنوات السابقة. وبعد الانتقال احتفظ بإثبات العنوان والموطن التركي والرقم الضريبي ومستندات مصادر الإيرادات.\n\nأنشئ سجلاً لكل مصدر دخل يوضح بلد المصدر والجهة الدافعة والتصنيف القانوني وتاريخ الاستلام والضريبة المقتطعة. يساعد هذا على التمييز بين الإيرادات التركية والأجنبية وتجهيز الطلب وفق النموذج الملحق بالتعميم 333."
        },
        {
          "id": "practical-4",
          "title": "ماذا يحدث إذا تبين عدم توافر الشروط؟",
          "body": "لا يعفي النظام من جميع الالتزامات الضريبية. إذا تبين للإدارة لاحقاً عدم استيفاء الشروط، يعتبر القانون الضرائب التي لم تُفرض خسارة ضريبية. احتفظ بالمستندات للفترات القانونية ذات الصلة ووثّق التغييرات مثل الانتقال أو وظيفة جديدة أو تأسيس شركة أو شراء أصل في تركيا.\n\nتستطيع Bosphoras تنسيق إعداد سجل الإيرادات والوثائق والتواصل مع مختصين ضريبيين مستقلين والخطوات العملية للانتقال، بما يساعد على فهم النتائج قبل تعديل هيكل الأعمال أو الأصول."
        }
      ],
      "faqs": [
        {
          "question": "هل دخل الإعفاء حيز التنفيذ؟",
          "answer": "نعم، نُشر القانون في 4 يونيو 2026 ويشمل المؤهلين للاستفادة منذ 1 يناير 2026، ونُشرت قواعد التطبيق في 4 يوليو."
        },
        {
          "question": "هل يمنع امتلاك عقار سابق في تركيا الاستفادة؟",
          "answer": "ليس بالضرورة؛ يستثني القانون بعض الالتزامات السابقة المتعلقة بدخل العقارات ورأس المال والأرباح الرأسمالية."
        },
        {
          "question": "هل يجب التصريح بالدخل الأجنبي المعفى؟",
          "answer": "لا، بالنسبة إلى الدخل المشمول في الإقرار التركي. وتبقى الالتزامات في بلد المصدر والدخل الآخر منفصلة."
        }
      ],
      "sources": [
        {
          "label": "الجريدة الرسمية — القانون 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "إدارة الضرائب — التعميم 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "إدارة الضرائب — دليل الإعفاء",
          "href": "https://www.gib.gov.tr/duyuru-arsivi/guncel/18801_yurt_disindan_elde_edilen_kazanc_ve_iratlarda_vergi_istisnasi_rehberi_ile_infografik_yayimlandi_"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/660/madde/13912",
          "label": "المادة 4 من القانون 7582 — إدارة الضرائب"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937",
          "label": "شرائح ضريبة الدخل 2026 — إدارة الضرائب"
        }
      ]
    }
  },
  "relocate-turkey-cities": {
    "fr": {
      "title": "Vivre en Turquie en 2026 : Istanbul, Bodrum ou Antalya ?",
      "metaDescription": "Comparez quartiers, transport, écoles, santé, logement et permis de séjour pour réussir votre installation en Turquie.",
      "shortAnswer": "Istanbul est généralement la meilleure base pour les activités internationales, Bodrum pour une vie maritime et Antalya pour un projet familial sur la côte. Le choix dépend de vos déplacements quotidiens, du logement, de l’école et de votre statut de séjour.",
      "bosphorasHelp": "Construisez un plan d’installation concret : ville, quartier, logement, budget et calendrier.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Istanbul, Bodrum et Antalya : trois modes de vie",
          "body": "Istanbul offre des quartiers d’affaires comme Levent et Maslak, de nombreux établissements de santé et deux grandes plateformes aéroportuaires. Bodrum privilégie l’environnement maritime, les villas et les ports de plaisance ; la saison change fortement le fonctionnement quotidien. Antalya combine vie urbaine à l’année et proximité des plages, notamment à Konyaaltı et Lara."
        },
        {
          "id": "detail-2",
          "title": "Se déplacer et choisir son quartier",
          "body": "Selon DHMİ, l’aéroport de Milas-Bodrum se trouve à 37 km du centre de Bodrum et celui d’Antalya à 13 km de son centre. À Istanbul, la rive et les correspondances de métro importent davantage que la distance en kilomètres. Avant tout bail, faites le trajet domicile-école ou domicile-bureau aux heures réelles de pointe."
        },
        {
          "id": "detail-3",
          "title": "Visa, ikamet et droit de travailler",
          "body": "La dispense de visa dépend du passeport et ne permet pas de dépasser les durées autorisées. Au-delà du séjour permis, un titre de séjour adapté est nécessaire ; la demande se fait sur e-ikamet. Le dossier inclut généralement passeport, photos, adresse, justificatifs de ressources et assurance selon le cas. Le titre de séjour ne donne pas automatiquement le droit de travailler."
        },
        {
          "id": "detail-4",
          "title": "Budget mensuel : comment éviter les mauvaises surprises",
          "body": "Additionnez loyer, charges de résidence (aidat), énergie, alimentation, transports, école, assurance et loisirs. Prévoyez un budget initial distinct : dépôt de garantie, déménagement, éventuels frais d’agence et traductions. Demandez les prix en livres turques et comparez les échéances et la devise des engagements ; un prix touristique de juillet ne représente pas nécessairement un bail annuel."
        },
        {
          "id": "detail-5",
          "title": "Votre calendrier d’installation",
          "body": "Avant le départ, choisissez deux quartiers et contactez les écoles. À l’arrivée, logez temporairement et testez les trajets. Avant de signer, examinez le bail, la possibilité d’enregistrer l’adresse et l’état du logement. Ensuite, organisez le dossier de séjour dans les délais, la couverture santé, la banque et votre situation fiscale. Bosphoras peut coordonner ces étapes dans la ville choisie."
        },
        {
          "id": "practical-1",
          "title": "Choisir la ville selon votre projet, et non selon sa réputation",
          "body": "Si votre travail exige plusieurs rendez-vous internationaux par semaine, concentrez la recherche sur Istanbul et les axes de métro reliant les bureaux aux aéroports. Si vous travaillez à distance et privilégiez une maison avec jardin, Bodrum mérite une comparaison entre les secteurs de Yalıkavak, Bitez et Ortakent. Si vos enfants sont scolarisés et que vous souhaitez une vie urbaine au bord de la mer, commencez par les quartiers de Konyaaltı et Lara à Antalya.\n\nPour un premier repérage, réservez plusieurs journées en dehors d'une période de vacances. Passez une matinée dans le quartier, déjeunez près d'une école ou d'un hôpital, faites un trajet en transport en commun et visitez deux logements réellement disponibles à l'année. Cette démarche produit des critères de choix plus fiables qu'une simple visite de plage."
        },
        {
          "id": "practical-2",
          "title": "Quel budget prévoir pour une famille ?",
          "body": "Prenons une hypothèse de travail, et non un relevé de prix du marché : 60 000 TL de loyer, 5 000 TL de charges, 5 000 TL d'énergie et internet, 20 000 TL de courses et 10 000 TL de transport représentent déjà 100 000 TL par mois, auxquels il faut ajouter l'école, l'assurance et les loisirs. Si le loyer est versé au mois, son montant annuel à lui seul représente 720 000 TL.\n\nPour comparer les trois villes, demandez pour chacune un devis de logement annuel, une offre d'assurance et le tarif de l'école envisagée. À Istanbul, le coût des trajets et du stationnement peut peser lourd ; à Bodrum, l'entretien d'une villa et la voiture ; à Antalya, les frais d'école ou de climatisation. L'objectif est de comparer le même niveau de service plutôt que des loyers isolés."
        },
        {
          "id": "practical-3",
          "title": "Le titre de séjour qui correspond à votre situation",
          "body": "Le séjour touristique est plafonné à 90 jours sur 180 en règle générale, avec des durées parfois plus courtes selon le passeport. Un séjour court pour tourisme, un titre étudiant, un titre familial et un permis de travail ne répondent pas au même besoin. Un titre de courte durée peut notamment être demandé pour un logement détenu en propriété ou pour certains motifs prévus par la loi 6458 ; sa délivrance reste une décision administrative.\n\nPour une famille, le sponsor doit généralement justifier de ressources mensuelles totales au moins égales au salaire minimum, avec au moins un tiers de ce salaire par membre, ainsi que d'une assurance appropriée. Le dossier familial dépend également du statut du sponsor. Le portail e-ikamet et la Direction de la migration détaillent les catégories et pièces."
        },
        {
          "id": "practical-4",
          "title": "Le premier mois en Turquie, étape par étape",
          "body": "Avant l'arrivée, réunissez passeports, actes de mariage et de naissance ainsi que les documents scolaires. Selon leur origine, des formalités d'apostille, de légalisation et de traduction peuvent être nécessaires. À l'arrivée, utilisez un logement temporaire pour repérer les trajets. Le bail définitif doit être cohérent avec l'enregistrement d'adresse et le motif de séjour.\n\nPendant les semaines suivantes, organisez les rendez-vous nécessaires, l'assurance santé, le numéro fiscal et les services du logement. Identifiez simultanément le pays dans lequel vous êtes résident fiscal. Si votre déménagement concerne plusieurs personnes, une entreprise ou un patrimoine, Bosphoras peut centraliser la préparation du séjour, des visites et des rendez-vous, afin que chaque étape s'inscrive dans le même calendrier."
        }
      ],
      "faqs": [
        {
          "question": "Quelle ville choisir avec des enfants ?",
          "answer": "Antalya est une option côtière à étudier ; Istanbul est pertinente si l’école ou le travail y sont situés. À Bodrum, vérifiez les services en hiver."
        },
        {
          "question": "Puis-je m’installer avec un visa touristique ?",
          "answer": "Le séjour touristique ne remplace pas un permis de séjour ou de travail. Respectez la durée autorisée de votre passeport."
        },
        {
          "question": "Faut-il acheter immédiatement ?",
          "answer": "Un logement temporaire puis une location peuvent éviter une acquisition dans un quartier mal adapté."
        }
      ],
      "sources": [
        {
          "label": "Ministère des Affaires étrangères — visas",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Direction de la migration — titres de séjour",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Portail officiel e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "DHMİ — accès à Milas-Bodrum",
          "href": "https://www.dhmi.gov.tr/Sayfalar/Havalimani/Milasbodrum/Ulasim.aspx"
        },
        {
          "label": "DHMİ — accès à Antalya",
          "href": "https://dhmi.gov.tr/Sayfalar/Havalimani/Antalya/Ulasim.aspx"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Ministère turc des Affaires étrangères — règles de visa"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Direction de la migration — procédures administratives"
        }
      ]
    },
    "en": {
      "title": "Living in Turkey in 2026: Istanbul, Bodrum or Antalya?",
      "metaDescription": "Compare neighbourhoods, transport, schools, healthcare, housing and residence permits before relocating to Turkey.",
      "shortAnswer": "Istanbul is generally the strongest international business base, Bodrum suits coastal living, and Antalya combines family-oriented urban life with the coast. Everyday travel, schools, housing and legal residence matter more than holiday impressions.",
      "bosphorasHelp": "Build a practical relocation plan covering city, neighbourhood, housing, budget and timing.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Three cities, three ways of life",
          "body": "Istanbul offers business districts such as Levent and Maslak, a wide healthcare network and two major airports. Bodrum offers villas, marinas and coastal living, with pronounced seasonal changes. Antalya combines year-round urban services with beaches in areas including Konyaaltı and Lara."
        },
        {
          "id": "detail-2",
          "title": "Transport and neighbourhood selection",
          "body": "According to airport authority DHMİ, Milas-Bodrum Airport is 37 km from central Bodrum and Antalya Airport is 13 km from central Antalya. In Istanbul, the side of the Bosphorus and rail connections are more useful than straight-line distance. Test the school or office commute at actual peak hours before signing a lease."
        },
        {
          "id": "detail-3",
          "title": "Visa, residence permit and work rights",
          "body": "Visa-free entry depends on your passport and permitted duration. Beyond that period, obtain an appropriate residence permit through e-ikamet. Typical documents include your passport, photographs, address, evidence of resources and insurance where required. A residence permit does not automatically confer permission to work."
        },
        {
          "id": "detail-4",
          "title": "Build a realistic monthly budget",
          "body": "Combine rent, building management fees (aidat), utilities, food, transport, school, insurance and leisure. Keep a separate arrival budget for deposits, moving, possible agency fees and translations. Compare prices in Turkish lira and contract currency and payment dates; July holiday prices are not a reliable annual rental benchmark."
        },
        {
          "id": "detail-5",
          "title": "A practical relocation timeline",
          "body": "Before departure, shortlist two neighbourhoods and contact schools. Use temporary accommodation to test journeys. Before signing, check the lease, address registration eligibility and property condition. Then arrange residence documentation within the permitted period, healthcare, banking and tax matters. Bosphoras can coordinate these steps in your chosen city."
        },
        {
          "id": "practical-1",
          "title": "Choose the city around the life you will lead",
          "body": "If your work requires several international appointments each week, start with Istanbul and its office-to-airport rail corridors. If you work remotely and want a garden, compare Yalıkavak, Bitez and Ortakent around Bodrum. For school-age children and seaside urban living, begin with Konyaaltı and Lara in Antalya.\n\nUse a scouting visit outside a holiday period. Spend a morning in a neighbourhood, visit the school or hospital area, test public transport and view two properties available on annual leases. These observations are more useful for a relocation than a beach visit."
        },
        {
          "id": "practical-2",
          "title": "A household budget you can actually compare",
          "body": "As an illustrative scenario, not a market quotation, TRY 60,000 rent, TRY 5,000 building fees, TRY 5,000 utilities and internet, TRY 20,000 groceries and TRY 10,000 transport already total TRY 100,000 each month before schooling, insurance and leisure. The rent alone would be TRY 720,000 over a year.\n\nFor each city, request an annual rental quote, a health insurance offer and the fees of the intended school. Istanbul may entail substantial commuting and parking costs; Bodrum can add villa upkeep and car dependency; Antalya may add school or cooling costs. Compare equivalent lifestyles rather than isolated rents."
        },
        {
          "id": "practical-3",
          "title": "Which residence category fits your circumstances?",
          "body": "Ordinary tourist stay cannot generally exceed 90 days in a rolling 180-day period, and some passports have shorter limits. A tourist visit, student permit, family permit and work authorisation serve different purposes. A short-term residence permit can cover home ownership and other grounds listed in Law 6458, subject to approval.\n\nA family residence sponsor generally needs total monthly resources of at least the minimum wage and at least one third of that wage per family member, as well as appropriate health coverage. The sponsor's legal status also matters. The migration authority and e-ikamet describe the relevant categories and documents."
        },
        {
          "id": "practical-4",
          "title": "Your first month in Turkey",
          "body": "Before arriving, prepare passports, marriage and birth certificates and school records. Depending on the issuing country, apostilles, legalisation and translations may be necessary. On arrival, use temporary housing to test daily travel. Your final lease should be compatible with address registration and the residence category.\n\nIn the following weeks, arrange required appointments, health insurance, a tax number and household utilities. Assess your tax residence alongside these tasks. Bosphoras can coordinate property visits and practical appointments around one relocation calendar, especially when moving a family or business."
        }
      ],
      "faqs": [
        {
          "question": "Which city works best for families?",
          "answer": "Antalya is a coastal option; Istanbul may suit a particular school or job. In Bodrum, assess winter services before committing."
        },
        {
          "question": "Can I move on a tourist visa?",
          "answer": "Tourist entry is not a substitute for residence or work authorisation. Observe your passport’s permitted stay."
        },
        {
          "question": "Should I buy immediately?",
          "answer": "Temporary accommodation followed by renting can help avoid buying in the wrong neighbourhood."
        }
      ],
      "sources": [
        {
          "label": "Ministry of Foreign Affairs — visas",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Migration authority — residence permit types",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Official e-ikamet portal",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "DHMİ — Milas-Bodrum airport access",
          "href": "https://www.dhmi.gov.tr/Sayfalar/Havalimani/Milasbodrum/Ulasim.aspx"
        },
        {
          "label": "DHMİ — Antalya airport access",
          "href": "https://dhmi.gov.tr/Sayfalar/Havalimani/Antalya/Ulasim.aspx"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Turkish Foreign Ministry — visa rules"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Migration authority — application procedures"
        }
      ]
    },
    "ru": {
      "title": "Жизнь в Турции в 2026 году: Стамбул, Бодрум или Анталья?",
      "metaDescription": "Сравните районы, транспорт, школы, медицину, жильё и правила получения ВНЖ перед переездом в Турцию.",
      "shortAnswer": "Стамбул подходит для международного бизнеса, Бодрум — для жизни у моря, Анталья сочетает городской комфорт и побережье. При выборе важны ежедневные поездки, школа, жильё и законный статус проживания.",
      "bosphorasHelp": "Составьте конкретный план переезда: город, район, жильё, бюджет и сроки.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Три города — три образа жизни",
          "body": "В Стамбуле находятся деловые районы Левент и Маслак, множество медицинских учреждений и два крупных аэропорта. Бодрум известен виллами и яхтенными гаванями, но повседневная жизнь меняется в зависимости от сезона. Анталья сочетает городские услуги круглый год и пляжи, например в Коньяалты и Ларе."
        },
        {
          "id": "detail-2",
          "title": "Транспорт и выбор района",
          "body": "По данным DHMİ, аэропорт Милас-Бодрум расположен в 37 км от центра Бодрума, аэропорт Антальи — в 13 км от центра города. В Стамбуле важнее сторона Босфора и доступ к метро, чем расстояние по прямой. До подписания договора проверьте дорогу до школы или офиса в часы пик."
        },
        {
          "id": "detail-3",
          "title": "Виза, ВНЖ и право на работу",
          "body": "Безвизовый срок зависит от паспорта. Для проживания дольше разрешённого срока требуется подходящий ВНЖ, заявление подаётся через e-ikamet. Обычно нужны паспорт, фотографии, адрес, подтверждение средств и страховка в зависимости от основания. ВНЖ сам по себе не даёт права работать."
        },
        {
          "id": "detail-4",
          "title": "Как составить реальный бюджет",
          "body": "Сложите аренду, платежи за обслуживание комплекса (aidat), коммунальные услуги, питание, транспорт, школу, страховку и досуг. Отдельно предусмотрите залог, переезд, возможную комиссию и переводы документов. Сравнивайте цены в лирах, валюту и сроки платежей: летние туристические тарифы не отражают стоимость годовой аренды."
        },
        {
          "id": "detail-5",
          "title": "План переезда по этапам",
          "body": "До отъезда выберите два района и свяжитесь со школами. После приезда остановитесь во временном жилье и проверьте маршруты. Перед заключением договора оцените состояние жилья и возможность регистрации адреса. Затем займитесь ВНЖ в установленные сроки, медицинским страхованием, банком и налоговым статусом. Bosphoras может координировать эти этапы."
        },
        {
          "id": "practical-1",
          "title": "Выбирайте город с учётом будущей жизни",
          "body": "Если работа требует нескольких международных встреч в неделю, рассмотрите Стамбул и районы, связанные метро с офисами и аэропортами. При удалённой работе и желании жить в доме с садом сравните Ялыкавак, Битез и Ортакент в Бодруме. Для семьи со школьниками, предпочитающей город у моря, хорошей отправной точкой станут Коньяалты и Лара в Анталье.\n\nВо время ознакомительной поездки вне курортного сезона проведите утро в районе, посетите окрестности школы и больницы, воспользуйтесь общественным транспортом и осмотрите два объекта с годовой арендой. Так вы получите более полезную картину, чем во время отдыха на пляже."
        },
        {
          "id": "practical-2",
          "title": "Реальный подход к семейному бюджету",
          "body": "Условный пример, а не рыночная котировка: аренда 60 000 лир, обслуживание комплекса 5 000, коммунальные услуги и интернет 5 000, продукты 20 000 и транспорт 10 000 составляют 100 000 лир в месяц ещё до расходов на школу, страховку и досуг. Одна аренда за год — 720 000 лир.\n\nВ каждом городе запросите стоимость годовой аренды, предложение страховой компании и тариф выбранной школы. В Стамбуле заметны расходы на поездки и парковку, в Бодруме — содержание виллы и автомобиль, в Анталье — школа и кондиционирование. Сравнивайте одинаковый уровень жизни, а не только аренду."
        },
        {
          "id": "practical-3",
          "title": "Какое основание для ВНЖ подходит вам?",
          "body": "Туристическое пребывание обычно ограничено 90 днями за скользящий период в 180 дней; для некоторых паспортов действуют меньшие сроки. Туристический визит, студенческий или семейный ВНЖ и разрешение на работу имеют разные основания. Краткосрочный ВНЖ может оформляться при наличии собственного жилья или по другим основаниям закона № 6458, при одобрении заявления.\n\nДля семейного ВНЖ спонсору, как правило, требуется общий доход не ниже минимальной зарплаты и не менее трети этой суммы на каждого члена семьи, а также соответствующая страховка. Значение имеет и статус спонсора. Категории и документы описаны миграционной службой и на портале e-ikamet."
        },
        {
          "id": "practical-4",
          "title": "Первый месяц после переезда",
          "body": "До поездки подготовьте паспорта, свидетельства о браке и рождении и школьные документы. В зависимости от страны выдачи могут понадобиться апостиль, легализация и переводы. Временное жильё позволит проверить ежедневные маршруты. Окончательный договор аренды должен соответствовать условиям регистрации адреса и основаниям ВНЖ.\n\nЗатем организуйте необходимые визиты, страховку, налоговый номер и подключение бытовых услуг. Одновременно определитесь с налоговым резидентством. Bosphoras может объединить просмотры жилья и организационные вопросы в один календарь переезда, особенно при переезде семьи или компании."
        }
      ],
      "faqs": [
        {
          "question": "Какой город выбрать семье?",
          "answer": "Анталья привлекательна для жизни у моря, Стамбул — при привязке к школе или работе. В Бодруме важно оценить условия зимой."
        },
        {
          "question": "Можно ли жить по туристической визе?",
          "answer": "Туристический въезд не заменяет ВНЖ или разрешение на работу. Соблюдайте разрешённый срок пребывания."
        },
        {
          "question": "Нужно ли сразу покупать жильё?",
          "answer": "Временное жильё и аренда помогут избежать покупки в неподходящем районе."
        }
      ],
      "sources": [
        {
          "label": "МИД Турции — визовый режим",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Миграционная служба — виды ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Официальный портал e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "DHMİ — транспорт аэропорта Милас-Бодрум",
          "href": "https://www.dhmi.gov.tr/Sayfalar/Havalimani/Milasbodrum/Ulasim.aspx"
        },
        {
          "label": "DHMİ — транспорт аэропорта Антальи",
          "href": "https://dhmi.gov.tr/Sayfalar/Havalimani/Antalya/Ulasim.aspx"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "МИД Турции — визовые правила"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Миграционная служба — порядок оформления"
        }
      ]
    },
    "ar": {
      "title": "العيش في تركيا 2026: إسطنبول أم بودروم أم أنطاليا؟",
      "metaDescription": "قارن الأحياء والمواصلات والمدارس والرعاية الصحية والسكن وتصاريح الإقامة قبل الانتقال للعيش في تركيا.",
      "shortAnswer": "تتميز إسطنبول ببيئة الأعمال الدولية، وبودروم بالحياة الساحلية، وأنطاليا بالجمع بين الخدمات الحضرية والشاطئ. يعتمد قرار الاستقرار على التنقل اليومي والمدارس والسكن والوضع القانوني للإقامة.",
      "bosphorasHelp": "ضع خطة انتقال عملية تشمل المدينة والحي والسكن والميزانية والجدول الزمني.",
      "sections": [
        {
          "id": "detail-1",
          "title": "ثلاث مدن وثلاثة أنماط للحياة",
          "body": "تضم إسطنبول مناطق أعمال مثل ليفنت ومسلك وشبكة واسعة من المؤسسات الطبية ومطارين رئيسيين. وتتميز بودروم بالفيلات ومراسي اليخوت والحياة الساحلية التي تتغير باختلاف المواسم. أما أنطاليا فتجمع بين الخدمات طوال العام والشواطئ في مناطق مثل كونيالتي ولارا."
        },
        {
          "id": "detail-2",
          "title": "المواصلات واختيار الحي",
          "body": "وفق هيئة المطارات التركية DHMİ، يبعد مطار ميلاس بودروم 37 كم عن مركز بودروم، بينما يبعد مطار أنطاليا 13 كم عن مركز المدينة. وفي إسطنبول يعتمد التنقل على ضفة البوسفور والربط بالمترو أكثر من المسافة المباشرة. جرّب طريق المدرسة أو المكتب في ساعات الذروة قبل توقيع عقد الإيجار."
        },
        {
          "id": "detail-3",
          "title": "التأشيرة وتصريح الإقامة والعمل",
          "body": "تعتمد مدة الدخول دون تأشيرة على جواز السفر. وللبقاء بعد المدة المسموحة يلزم تصريح إقامة مناسب عبر منصة e-ikamet. تشمل المستندات عادةً جواز السفر والصور والعنوان وإثبات الموارد والتأمين بحسب الحالة. ولا يمنح تصريح الإقامة وحده حق العمل تلقائياً."
        },
        {
          "id": "detail-4",
          "title": "إعداد ميزانية شهرية واقعية",
          "body": "اجمع الإيجار ورسوم إدارة المجمع (aidat) وفواتير الخدمات والغذاء والنقل والمدرسة والتأمين والترفيه. خصص ميزانية منفصلة للتأمين النقدي والانتقال ورسوم الوساطة المحتملة وترجمة الوثائق. قارن الأسعار بالليرة التركية وعملة العقد ومواعيد الدفع؛ فأسعار يوليو السياحية لا تعبّر بالضرورة عن الإيجار السنوي."
        },
        {
          "id": "detail-5",
          "title": "خطة الانتقال خطوة بخطوة",
          "body": "قبل السفر اختر حيين وتواصل مع المدارس. أقم مؤقتاً عند الوصول لتجربة طرق التنقل. وقبل توقيع العقد راجع حالة العقار وإمكانية تسجيل العنوان. ثم نظّم طلب الإقامة خلال المدة القانونية والتأمين والخدمات المصرفية والوضع الضريبي. تستطيع Bosphoras تنسيق هذه الخطوات في مدينتك المختارة."
        },
        {
          "id": "practical-1",
          "title": "اختر المدينة وفق حياتك اليومية",
          "body": "إذا تطلب عملك اجتماعات دولية متكررة خلال الأسبوع، ابدأ بإسطنبول والأحياء المرتبطة بالمكاتب والمطارات عبر المترو. وإذا كنت تعمل عن بُعد وتفضّل منزلاً بحديقة، فقارن ياليكافاك وبيتيز وأورتاكينت في بودروم. أما للأسرة التي لديها أطفال في سن المدرسة وتبحث عن مدينة ساحلية، فابدأ بكونيالتي ولارا في أنطاليا.\n\nخلال زيارة استطلاعية خارج موسم الإجازات، اقضِ صباحاً في الحي، وتعرّف إلى محيط المدرسة والمستشفى، وجرّب النقل العام، وزُر عقارين متاحين للإيجار السنوي. تعطيك هذه التجربة صورة أدق من زيارة سياحية للشاطئ."
        },
        {
          "id": "practical-2",
          "title": "ميزانية أسرة قابلة للمقارنة",
          "body": "مثال افتراضي وليس تسعيراً للسوق: إيجار 60 ألف ليرة، ورسوم مجمع 5 آلاف، وخدمات وإنترنت 5 آلاف، وغذاء 20 ألفاً، ونقل 10 آلاف؛ أي 100 ألف ليرة شهرياً قبل المدرسة والتأمين والترفيه. ويبلغ الإيجار وحده 720 ألف ليرة سنوياً.\n\nاطلب في كل مدينة عرض إيجار سنوي وعرض تأمين صحي ورسوم المدرسة المقصودة. قد ترتفع كلفة التنقل والوقوف في إسطنبول، وصيانة الفيلا والسيارة في بودروم، والمدرسة والتكييف في أنطاليا. قارن مستوى معيشة مماثلاً بدلاً من الإيجارات وحدها."
        },
        {
          "id": "practical-3",
          "title": "ما نوع الإقامة المناسب لوضعك؟",
          "body": "يبلغ الحد العام للبقاء السياحي 90 يوماً خلال 180 يوماً متحركة، وقد تكون المدة أقصر لبعض جوازات السفر. وتختلف زيارة السياحة عن إقامة الدراسة أو الأسرة أو تصريح العمل. يمكن طلب إقامة قصيرة الأجل على أساس امتلاك مسكن أو أسباب أخرى ينص عليها القانون 6458، مع خضوع الطلب للموافقة.\n\nيتطلب تصريح الإقامة العائلية، كقاعدة عامة، دخلاً إجمالياً للكفيل لا يقل عن الحد الأدنى للأجر، وبما لا يقل عن ثلثه لكل فرد، وتأميناً صحياً مناسباً. كما يعتمد على الوضع القانوني للكفيل. وتوضح إدارة الهجرة ومنصة e-ikamet الفئات والمستندات."
        },
        {
          "id": "practical-4",
          "title": "الشهر الأول بعد الانتقال",
          "body": "جهّز قبل السفر جوازات السفر وشهادات الزواج والميلاد والسجلات المدرسية. وقد يلزم التصديق أو الأبوستيل والترجمة بحسب بلد إصدار الوثيقة. وعند الوصول استخدم سكناً مؤقتاً لتجربة طرق التنقل اليومية. يجب أن يتوافق عقد الإيجار النهائي مع تسجيل العنوان وسبب الإقامة.\n\nثم نظّم المواعيد المطلوبة والتأمين والرقم الضريبي وخدمات المنزل، وادرس بالتوازي وضع الإقامة الضريبية. تستطيع Bosphoras تنسيق زيارات السكن والمواعيد العملية ضمن جدول انتقال واحد، خصوصاً عند انتقال أسرة أو نشاط تجاري."
        }
      ],
      "faqs": [
        {
          "question": "ما المدينة المناسبة للعائلات؟",
          "answer": "أنطاليا خيار ساحلي، وإسطنبول مناسبة عند ارتباط الأسرة بمدرسة أو عمل فيها. في بودروم ينبغي تقييم الخدمات شتاءً."
        },
        {
          "question": "هل يمكن الاستقرار بتأشيرة سياحية؟",
          "answer": "الدخول السياحي لا يحل محل تصريح الإقامة أو العمل. التزم بمدة البقاء المسموحة لجواز سفرك."
        },
        {
          "question": "هل أشتري منزلاً فوراً؟",
          "answer": "يساعد السكن المؤقت ثم الإيجار على تفادي شراء عقار في حي غير مناسب."
        }
      ],
      "sources": [
        {
          "label": "وزارة الخارجية — التأشيرات",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "إدارة الهجرة — أنواع تصاريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "منصة e-ikamet الرسمية",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "هيئة المطارات — الوصول إلى مطار ميلاس بودروم",
          "href": "https://www.dhmi.gov.tr/Sayfalar/Havalimani/Milasbodrum/Ulasim.aspx"
        },
        {
          "label": "هيئة المطارات — الوصول إلى مطار أنطاليا",
          "href": "https://dhmi.gov.tr/Sayfalar/Havalimani/Antalya/Ulasim.aspx"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "وزارة الخارجية التركية — قواعد التأشيرات"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "إدارة الهجرة — إجراءات التقديم"
        }
      ]
    }
  },
  "moving-istanbul": {
    "fr": {
      "title": "S’installer à Istanbul en 2026 : quartiers, logement et ikamet",
      "metaDescription": "Guide pratique pour vivre à Istanbul : choisir la rive, les quartiers, l’école, le logement, les transports et préparer le permis de séjour.",
      "shortAnswer": "Pour réussir votre installation à Istanbul, choisissez d’abord la zone de travail ou l’école, puis un quartier bien connecté et un logement dont l’adresse permet vos démarches. Organisez ensuite le séjour, l’assurance et le budget.",
      "bosphorasHelp": "Préparez votre installation à Istanbul avec un itinéraire de visites et un dossier adapté à votre famille.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Quelle rive et quels quartiers ?",
          "body": "Levent et Maslak sont intéressants pour les bureaux ; Şişli et Nişantaşı pour une vie centrale et commerçante ; Beşiktaş et Etiler pour la proximité de nombreux services. Sur la rive asiatique, Kadıköy convient à une vie urbaine et aux ferries, Ataşehir aux activités tertiaires. Sarıyer peut convenir à une recherche d’espace, mais les trajets et l’école doivent rester prioritaires."
        },
        {
          "id": "detail-2",
          "title": "Transport : choisir par temps de trajet",
          "body": "La ligne M4 relie Kadıköy à Sabiha Gökçen : 23 stations et 33,5 km, selon Metro Istanbul. Le réseau Marmaray et les ferries permettent de traverser le Bosphore sans dépendre uniquement des ponts. Ne comparez pas deux appartements seulement sur une carte : testez le trajet réel au bureau, à l’école et à l’aéroport fréquenté."
        },
        {
          "id": "detail-3",
          "title": "Trouver un logement et maîtriser les charges",
          "body": "Demandez le loyer, les charges aidat, les conditions de révision, le dépôt, le chauffage, le stationnement et l’inventaire. Contrôlez le propriétaire, le contrat, l’état du bâtiment et les documents techniques disponibles. Pour un projet de séjour, examinez la possibilité de déclarer l’adresse avant de verser une somme non remboursable."
        },
        {
          "id": "detail-4",
          "title": "Écoles, soins et vie familiale",
          "body": "Contactez les établissements pour les places, la langue d’enseignement, le calendrier et les frais de transport scolaire. Choisissez la couverture santé selon les conditions du séjour et les hôpitaux accessibles. Pour une famille, une école proche et un parcours médical simple peuvent être plus utiles qu’une adresse prestigieuse."
        },
        {
          "id": "detail-5",
          "title": "Démarches de résidence et première installation",
          "body": "La demande de titre de séjour (ikamet) se fait sur la plateforme officielle e-ikamet avant la fin du séjour autorisé. Préparez les pièces correspondant à votre motif, l’assurance le cas échéant, le dossier du logement et les justificatifs de ressources. La migration prévoit une décision dans un délai maximal de 90 jours à partir du dépôt complet, sous réserve de prolongation notifiée. Bosphoras peut coordonner logement, traduction et rendez-vous sans se substituer à l’administration."
        },
        {
          "id": "practical-1",
          "title": "Les quartiers qui changent réellement votre quotidien",
          "body": "Autour de Nişantaşı et Osmanbey, la marche et la proximité des commerces sont souvent des atouts ; les immeubles et les possibilités de stationnement sont très variables. Vers Levent et Maslak, vous gagnez en accès aux bureaux et à la ligne M2, avec une vie de quartier différente selon la résidence. À Etiler, cherchez la proximité des écoles et des services. À Kağıthane, certaines zones bénéficient de connexions ferroviaires utiles, mais la pente et l'accès piéton doivent être regardés rue par rue.\n\nSur la rive asiatique, Kadıköy et Moda offrent une vie de quartier animée ; Üsküdar se distingue par les correspondances de transport ; Ataşehir convient à certains pôles professionnels. Une vue sur le Bosphore n'est pas un critère suffisant si le trajet scolaire dépasse une durée raisonnable chaque jour. La bonne adresse associe qualité du bâtiment, accès aux services et temps de déplacement."
        },
        {
          "id": "practical-2",
          "title": "Se déplacer sans dépendre systématiquement de la voiture",
          "body": "Le métro M2 traverse les zones de Taksim, Osmanbey, Şişli, Gayrettepe, Levent et le secteur d'İTÜ-Ayazağa vers Maslak. À Gayrettepe, il permet une correspondance avec le M11 vers l'aéroport d'Istanbul ; à Şişli-Mecidiyeköy, avec M7 et le Metrobüs. Sur l'autre rive, le M4 dessert Kadıköy et Sabiha Gökçen. Le M8 relie Bostancı au nord de la rive asiatique. Marmaray permet des traversées ferroviaires du détroit.\n\nSi vous cherchez un logement à proximité d'une station, calculez aussi le trajet à pied jusqu'au quai et le nombre de correspondances. Dans un quartier en pente, un appartement situé à 600 mètres du métro n'offre pas nécessairement le même confort qu'un autre situé à la même distance."
        },
        {
          "id": "practical-3",
          "title": "Comprendre le bail turc avant de réserver un appartement",
          "body": "Les articles 342 et 344 du Code turc des obligations (loi 6098) encadrent deux points importants : la garantie contractuelle ne peut dépasser trois mois de loyer pour un bail d'habitation, et la révision conventionnelle lors du renouvellement est en principe limitée à l'évolution de la moyenne sur douze mois de l'indice des prix à la consommation, sous réserve des règles particulières, notamment après cinq ans.\n\nDistinguez le dépôt du loyer payé d'avance et des charges de copropriété. Faites établir le montant exact de l'aidat, les personnes responsables des réparations, le mobilier inclus et les conditions de restitution. Pour un loyer hypothétique de 60 000 TL, un dépôt de deux mois représente 120 000 TL ; ajouté au premier mois, cela mobilise déjà 180 000 TL, avant les autres frais. Ce calcul n'est pas un prix moyen d'Istanbul."
        },
        {
          "id": "practical-4",
          "title": "Le bâtiment compte autant que le quartier",
          "body": "Pour acheter ou louer durablement, demandez l'année de construction, l'état des parties communes, le type de chauffage, la documentation disponible concernant le bâtiment et les transformations réalisées. L'année de construction seule ne permet pas de garantir la résistance sismique. Pour une acquisition, un contrôle indépendant du bâtiment et des documents fonciers est préférable à une simple promesse commerciale.\n\nDans les résidences avec piscine, sécurité et salle de sport, vérifiez que les équipements fonctionnent à l'année et sont effectivement inclus dans les charges. Une belle résidence peut devenir coûteuse si le trajet en voiture est indispensable pour chaque activité. Bosphoras peut préparer une sélection selon votre budget global, vos trajets, vos enfants et vos exigences de logement."
        }
      ],
      "faqs": [
        {
          "question": "Quel quartier choisir pour travailler à Levent ?",
          "answer": "Commencez par Levent, Etiler, Şişli ou une zone reliée au métro M2 ; comparez le temps réel de trajet."
        },
        {
          "question": "Quelle rive est préférable ?",
          "answer": "La rive où se trouvent votre école et votre travail est souvent la plus pratique. La traversée quotidienne peut changer fortement votre qualité de vie."
        },
        {
          "question": "Un bail garantit-il l’ikamet ?",
          "answer": "Non. L’adresse et le contrat font partie du dossier, mais la décision relève de l’administration."
        }
      ],
      "sources": [
        {
          "label": "Metro Istanbul — ligne M4",
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M4"
        },
        {
          "label": "Direction de la migration — titres de séjour",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Portail officiel e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "YİMER — questions sur l’immigration",
          "href": "https://yimer.gov.tr/EN/SSS"
        },
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M2",
          "label": "Metro Istanbul — ligne M2 et correspondances"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/103273?query=6098",
          "label": "Code turc des obligations, art. 342 et 344"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Direction de la migration — procédures administratives"
        }
      ]
    },
    "en": {
      "title": "Moving to Istanbul in 2026: neighbourhoods, housing and permits",
      "metaDescription": "Find the right Istanbul neighbourhood, school and transport links; understand leases, building fees and residence permit steps.",
      "shortAnswer": "Choose your workplace or school first, then a connected neighbourhood and housing suitable for address registration. Organise residence documentation, insurance and your budget together.",
      "bosphorasHelp": "Plan Istanbul property visits and a relocation file suited to your household.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Which side and which neighbourhood?",
          "body": "Levent and Maslak suit office access; Şişli and Nişantaşı offer central shopping and services; Beşiktaş and Etiler have many amenities. On the Asian side, Kadıköy offers urban life and ferries, while Ataşehir is a business option. Sarıyer may offer more space but the commute and school should come first."
        },
        {
          "id": "detail-2",
          "title": "Transport: travel time matters",
          "body": "The M4 connects Kadıköy to Sabiha Gökçen Airport across 23 stations and 33.5 km, according to Metro Istanbul. Marmaray and ferries offer Bosphorus crossings without relying solely on road bridges. Test actual journeys to work, school and your usual airport rather than comparing map distances only."
        },
        {
          "id": "detail-3",
          "title": "Housing and the full cost of renting",
          "body": "Ask for rent, building fees (aidat), renewal terms, deposit, heating, parking and inventory. Confirm the landlord, contract, building condition and available technical documentation. For a relocation, check whether the address can be registered before making non-refundable payments."
        },
        {
          "id": "detail-4",
          "title": "Schools, healthcare and family life",
          "body": "Ask schools about availability, teaching language, calendar and bus fees. Choose health coverage appropriate to your residence status and accessible hospitals. A nearby school and straightforward healthcare journey may matter more to a family than a prestigious address."
        },
        {
          "id": "detail-5",
          "title": "Residence application and settling in",
          "body": "Apply through the official e-ikamet portal before your authorised stay ends. Prepare documents for your residence category, applicable insurance, housing and evidence of resources. Migration authorities state a maximum of 90 days from submission of a complete application, subject to notified extension. Bosphoras can coordinate housing, translations and appointments without replacing public authorities."
        },
        {
          "id": "practical-1",
          "title": "Neighbourhoods that change everyday life",
          "body": "Nişantaşı and Osmanbey offer walkability and shopping, although building quality and parking vary. Levent and Maslak improve access to offices and M2. In Etiler, proximity to schools and services may matter most. Some Kağıthane addresses offer useful rail links, but assess slopes and pedestrian access street by street.\n\nOn the Asian side, Kadıköy and Moda offer lively neighbourhoods, Üsküdar useful transport connections, and Ataşehir proximity to some business hubs. A Bosphorus view cannot compensate for an impractical school commute. A suitable address combines a sound building, amenities and manageable travel times."
        },
        {
          "id": "practical-2",
          "title": "Rail links that reduce car dependency",
          "body": "M2 serves Taksim, Osmanbey, Şişli, Gayrettepe, Levent and the İTÜ-Ayazağa area towards Maslak. At Gayrettepe, it connects with M11 towards Istanbul Airport; at Şişli-Mecidiyeköy, with M7 and Metrobus. On the opposite side, M4 connects Kadıköy and Sabiha Gökçen. M8 runs inland from Bostancı. Marmaray provides rail crossings of the strait.\n\nWhen choosing an address near a station, account for walking time to the platform and transfers. In a hilly district, two homes 600 metres from a station may offer very different journeys."
        },
        {
          "id": "practical-3",
          "title": "Understand the Turkish residential lease",
          "body": "Articles 342 and 344 of the Turkish Code of Obligations (Law 6098) regulate two important points: a residential security deposit cannot exceed three months' rent, and agreed renewal rent increases are generally limited by the change in the twelve-month average consumer price index, with special rules including after five years.\n\nDistinguish deposits, rent prepaid and building fees. Ask for the exact aidat, repair responsibilities, inventory and deposit return terms. At a hypothetical TRY 60,000 monthly rent, a two-month deposit and first month total TRY 180,000 before other costs. This is an illustration, not an Istanbul market average."
        },
        {
          "id": "practical-4",
          "title": "The building is as important as the district",
          "body": "For long-term renting or buying, ask about construction date, common areas, heating, available building documents and alterations. Construction year alone cannot guarantee earthquake resistance. An independent building and title assessment is more valuable for a purchase than a sales assurance.\n\nIn compounds with a pool, security and gym, establish whether amenities operate year-round and are included in the fees. An attractive compound may prove expensive if every trip requires a car. Bosphoras can coordinate a shortlist based on your total budget, commute, family and housing needs."
        }
      ],
      "faqs": [
        {
          "question": "Where should I live if I work in Levent?",
          "answer": "Start with Levent, Etiler, Şişli or an M2-connected area; compare actual commute times."
        },
        {
          "question": "Which side of Istanbul is best?",
          "answer": "The one containing your school and workplace is often more practical; daily crossings can materially affect quality of life."
        },
        {
          "question": "Does renting guarantee a residence permit?",
          "answer": "No. A lease and address support the application, but the decision rests with the authorities."
        }
      ],
      "sources": [
        {
          "label": "Metro Istanbul — M4 line",
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M4"
        },
        {
          "label": "Migration authority — residence permit types",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Official e-ikamet portal",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "YİMER — immigration FAQ",
          "href": "https://yimer.gov.tr/EN/SSS"
        },
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M2",
          "label": "Metro Istanbul — M2 and transfers"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/103273?query=6098",
          "label": "Turkish Code of Obligations, Articles 342 and 344"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Migration authority — application procedures"
        }
      ]
    },
    "ru": {
      "title": "Переезд в Стамбул в 2026 году: районы, жильё и ВНЖ",
      "metaDescription": "Как выбрать берег Босфора, район, школу и транспорт, снять квартиру и подготовить документы на ВНЖ в Стамбуле.",
      "shortAnswer": "Сначала определите место работы или школу, затем выберите район с удобным транспортом и жильё, пригодное для регистрации адреса. После этого согласуйте бюджет, страховку и оформление ВНЖ.",
      "bosphorasHelp": "Составьте маршрут просмотров жилья и план переезда в Стамбул с учётом потребностей семьи.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Какой берег и район выбрать?",
          "body": "Левент и Маслак удобны для офисов, Шишли и Нишанташи — для центральной городской жизни, Бешикташ и Этилер — для доступа к многочисленным услугам. На азиатском берегу Кадыкёй привлекателен городской средой и паромами, Аташехир — деловыми возможностями. В Сарыере можно искать больше пространства, но учитывайте дорогу до школы и работы."
        },
        {
          "id": "detail-2",
          "title": "Транспорт: ориентируйтесь на время в пути",
          "body": "По данным Metro Istanbul, линия M4 соединяет Кадыкёй с аэропортом имени Сабихи Гёкчен: 23 станции, 33,5 км. Marmaray и паромы позволяют пересекать Босфор без зависимости только от автомобильных мостов. Проверяйте фактическое время поездок до работы, школы и аэропорта."
        },
        {
          "id": "detail-3",
          "title": "Аренда жилья и дополнительные расходы",
          "body": "Уточните аренду, плату за обслуживание комплекса (aidat), условия продления, залог, отопление, парковку и перечень имущества. Проверьте собственника, договор, состояние здания и доступные технические документы. До невозвратной оплаты выясните, можно ли зарегистрировать адрес для проживания."
        },
        {
          "id": "detail-4",
          "title": "Школы, медицина и жизнь с детьми",
          "body": "Уточняйте в школах наличие мест, язык обучения, календарь и стоимость школьного автобуса. Выбирайте страховку с учётом статуса проживания и доступных больниц. Для семьи близкая школа и удобный доступ к врачам часто важнее престижного адреса."
        },
        {
          "id": "detail-5",
          "title": "ВНЖ и первые шаги после приезда",
          "body": "Заявление на ВНЖ подаётся через официальный портал e-ikamet до истечения разрешённого срока пребывания. Подготовьте документы по основанию проживания, необходимую страховку, подтверждение жилья и средств. Миграционная служба указывает срок до 90 дней с подачи полного комплекта с возможностью уведомления о продлении. Bosphoras может координировать жильё, переводы и встречи, не заменяя государственные органы."
        },
        {
          "id": "practical-1",
          "title": "Районы, определяющие повседневную жизнь",
          "body": "Нишанташи и Османбей удобны для пеших прогулок и покупок, хотя состояние домов и парковка различаются. Левент и Маслак обеспечивают доступ к офисам и линии M2. В Этилере важна близость школ и услуг. Некоторые адреса в Кягытхане удобно связаны с метро, но оценивайте уклон улицы и пешеходный маршрут.\n\nНа азиатской стороне Кадыкёй и Мода отличаются оживлённой городской средой, Ускюдар — транспортными пересадками, Аташехир — близостью к ряду деловых центров. Вид на Босфор не компенсирует неудобную ежедневную поездку в школу. Хороший адрес объединяет качество здания, услуги и комфортный маршрут."
        },
        {
          "id": "practical-2",
          "title": "Метро и поездки без постоянной зависимости от автомобиля",
          "body": "Линия M2 обслуживает Таксим, Османбей, Шишли, Гайреттепе, Левент и район İTÜ-Ayazağa в направлении Маслака. В Гайреттепе есть пересадка на M11 к аэропорту Стамбула, в Шишли-Меджидиекёй — на M7 и метробус. На другом берегу M4 соединяет Кадыкёй с аэропортом Сабихи Гёкчен, M8 идёт от Бостанджи вглубь азиатской части. Marmaray позволяет пересекать пролив по железной дороге.\n\nПри выборе дома у станции учитывайте пеший маршрут до платформы и число пересадок. В холмистых районах два дома в 600 метрах от метро могут быть совершенно разными по удобству."
        },
        {
          "id": "practical-3",
          "title": "Как устроен турецкий договор аренды",
          "body": "Статьи 342 и 344 Кодекса обязательств Турции (закон № 6098) регулируют важные условия: обеспечительный депозит за жилое помещение не может превышать трёхмесячную аренду, а согласованное повышение при продлении, как правило, ограничено изменением среднего индекса потребительских цен за двенадцать месяцев. Существуют особые правила, в том числе после пяти лет.\n\nОтличайте залог от аванса и платы за обслуживание комплекса. Уточните aidat, ответственность за ремонт, перечень мебели и возврат депозита. При условной аренде 60 000 лир в месяц залог за два месяца плюс первый месяц составят 180 000 лир без остальных расходов. Это пример, а не средняя цена Стамбула."
        },
        {
          "id": "practical-4",
          "title": "Здание не менее важно, чем район",
          "body": "При долгосрочной аренде или покупке выясните год строительства, состояние общих помещений, отопление, наличие документации и проведённые изменения. Один год строительства не гарантирует сейсмостойкость. При покупке независимая проверка здания и правоустанавливающих документов полезнее рекламных заверений.\n\nВ комплексе с бассейном, охраной и спортзалом уточните, работают ли удобства круглый год и включены ли они в плату. Даже привлекательный комплекс может оказаться дорогим, если для каждой поездки нужна машина. Bosphoras может организовать подбор по общему бюджету, маршрутам и потребностям семьи."
        }
      ],
      "faqs": [
        {
          "question": "Где жить, если офис в Левенте?",
          "answer": "Начните с Левента, Этилера, Шишли или районов у линии M2, сравнив реальные поездки."
        },
        {
          "question": "Какой берег лучше?",
          "answer": "Чаще удобнее жить на той же стороне, где школа и работа; ежедневный переезд через пролив влияет на качество жизни."
        },
        {
          "question": "Гарантирует ли договор аренды ВНЖ?",
          "answer": "Нет. Договор и адрес являются частью документов, решение принимает миграционная служба."
        }
      ],
      "sources": [
        {
          "label": "Metro Istanbul — линия M4",
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M4"
        },
        {
          "label": "Миграционная служба — виды ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Официальный портал e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "YİMER — вопросы миграции",
          "href": "https://yimer.gov.tr/EN/SSS"
        },
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M2",
          "label": "Metro Istanbul — линия M2 и пересадки"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/103273?query=6098",
          "label": "Кодекс обязательств, статьи 342 и 344"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Миграционная служба — порядок оформления"
        }
      ]
    },
    "ar": {
      "title": "الانتقال إلى إسطنبول 2026: أفضل الأحياء والسكن والإقامة",
      "metaDescription": "دليل العيش في إسطنبول: اختيار ضفة البوسفور والحي والمدارس والمواصلات وعقد الإيجار وخطوات تصريح الإقامة.",
      "shortAnswer": "ابدأ بتحديد مكان العمل أو المدرسة، ثم اختر حياً يسهل التنقل منه وسكناً مناسباً لتسجيل عنوانك. ونظّم بعد ذلك ميزانيتك والتأمين وإجراءات الإقامة.",
      "bosphorasHelp": "خطط لزيارة العقارات وإعداد ملف انتقال إلى إسطنبول يناسب أسرتك.",
      "sections": [
        {
          "id": "detail-1",
          "title": "أي ضفة وأي حي يناسبك؟",
          "body": "تتميز ليفنت ومسلك بقربهما من المكاتب، وتوفر شيشلي ونيشانتاشي حياة مركزية وخدمات تجارية، وتضم بشكتاش وإتيلر مرافق متنوعة. على الضفة الآسيوية تجمع كاديكوي بين الحياة الحضرية والعبّارات، بينما تعد أتاشهير خياراً للأعمال. قد توفر ساريير مساحات أكبر، لكن طريق المدرسة والعمل يبقى أولوية."
        },
        {
          "id": "detail-2",
          "title": "المواصلات: الوقت أهم من المسافة",
          "body": "بحسب شركة مترو إسطنبول، يربط خط M4 كاديكوي بمطار صبيحة كوكجن عبر 23 محطة بطول 33.5 كم. ويتيح مرمراي والعبّارات عبور البوسفور دون الاعتماد على الجسور وحدها. جرّب الرحلات الفعلية إلى العمل والمدرسة والمطار المعتاد قبل اختيار المنزل."
        },
        {
          "id": "detail-3",
          "title": "السكن والتكلفة الكاملة للإيجار",
          "body": "اطلب تفاصيل الإيجار ورسوم إدارة المجمع (aidat) والتجديد والتأمين النقدي والتدفئة وموقف السيارة ومحتويات العقار. راجع هوية المالك والعقد وحالة المبنى والوثائق الفنية المتاحة. وقبل دفع مبلغ غير قابل للاسترداد، تأكد من إمكانية تسجيل عنوان السكن لأغراض الإقامة."
        },
        {
          "id": "detail-4",
          "title": "المدارس والرعاية الصحية والحياة الأسرية",
          "body": "استفسر من المدارس عن المقاعد ولغة التدريس والتقويم ورسوم الحافلة المدرسية. اختر تأميناً صحياً يناسب وضع الإقامة والمستشفيات القريبة. قد تكون المدرسة القريبة وسهولة الوصول إلى الطبيب أهم للأسرة من عنوان فاخر."
        },
        {
          "id": "detail-5",
          "title": "طلب الإقامة وخطوات الاستقرار",
          "body": "يُقدّم طلب تصريح الإقامة عبر منصة e-ikamet الرسمية قبل انتهاء مدة البقاء المسموحة. جهّز مستندات سبب الإقامة والتأمين المطلوب وإثبات السكن والموارد. وتحدد إدارة الهجرة مهلة تصل إلى 90 يوماً من تقديم الملف كاملاً مع إمكان التمديد بعد الإخطار. تستطيع Bosphoras تنسيق السكن والترجمات والمواعيد دون الحلول محل السلطات."
        },
        {
          "id": "practical-1",
          "title": "أحياء تؤثر فعلاً في حياتك اليومية",
          "body": "تتميز نيشانتاشي وعثمان بيه بسهولة المشي والتسوق، مع تفاوت حالة المباني ومواقف السيارات. وتسهّل ليفنت ومسلك الوصول إلى المكاتب وخط M2. وفي إتيلر تبرز أهمية القرب من المدارس والخدمات. وتتوفر في بعض مواقع كاغتهانة روابط جيدة بالمترو، لكن يجب تقييم انحدار الشوارع ومسار المشي.\n\nعلى الضفة الآسيوية تتميز كاديكوي ومودا بالحياة الحضرية، وأوسكودار بتعدد وصلات النقل، وأتاشهير بقربها من بعض مراكز الأعمال. لا يعوّض منظر البوسفور رحلة مدرسية يومية شاقة. يجمع العنوان المناسب بين جودة المبنى والخدمات وسهولة التنقل."
        },
        {
          "id": "practical-2",
          "title": "خطوط النقل التي تخفف الاعتماد على السيارة",
          "body": "يمر خط M2 بتقسيم وعثمان بيه وشيشلي وغايريتيبه وليفنت ومنطقة İTÜ-Ayazağa باتجاه مسلك. وفي غايريتيبه يوجد اتصال بخط M11 إلى مطار إسطنبول، وفي شيشلي مجيدية كوي بخط M7 والمتروبوس. وعلى الضفة الأخرى يصل M4 بين كاديكوي ومطار صبيحة كوكجن، ويمتد M8 من بوستانجي إلى داخل الضفة الآسيوية. كما يتيح مرمراي عبور المضيق بالقطار.\n\nعند اختيار السكن قرب محطة، احسب مسافة المشي الفعلية إلى الرصيف وعدد مرات تبديل الخط. قد يختلف منزلان يبعدان 600 متر عن المترو كثيراً في سهولة الوصول بسبب المنحدرات."
        },
        {
          "id": "practical-3",
          "title": "فهم عقد الإيجار التركي قبل الحجز",
          "body": "تنظّم المادتان 342 و344 من قانون الالتزامات التركي رقم 6098 نقطتين مهمتين: لا يجوز أن يتجاوز الضمان النقدي المتفق عليه ثلاثة أشهر من إيجار المسكن، وتخضع زيادة الإيجار المتفق عليها عند التجديد من حيث المبدأ لحد تغير متوسط مؤشر أسعار المستهلك خلال اثني عشر شهراً، مع قواعد خاصة منها ما يطبق بعد خمس سنوات.\n\nميّز بين التأمين النقدي والإيجار المدفوع مقدماً ورسوم المجمع. اطلب تحديد رسوم aidat ومسؤولية الإصلاح وقائمة الأثاث وشروط إعادة الضمان. إذا افترضنا إيجاراً قدره 60 ألف ليرة شهرياً، فإن ضمان شهرين مع الشهر الأول يساوي 180 ألف ليرة قبل المصاريف الأخرى. هذا مثال حسابي وليس متوسط إيجارات إسطنبول."
        },
        {
          "id": "practical-4",
          "title": "جودة المبنى لا تقل أهمية عن الحي",
          "body": "للسكن الطويل أو الشراء، اسأل عن سنة البناء وحالة المناطق المشتركة والتدفئة والوثائق المتاحة والتعديلات المنفذة. لا تكفي سنة البناء وحدها لضمان مقاومة الزلازل. وعند الشراء يكون الفحص المستقل للمبنى ووثائق الملكية أكثر قيمة من الوعود التسويقية.\n\nفي المجمعات التي تضم مسبحاً وأمناً ونادياً رياضياً، استفسر عن عمل المرافق طوال العام وشمولها في الرسوم. وقد يصبح المجمع الجميل مكلفاً إذا احتاجت كل رحلة إلى سيارة. تستطيع Bosphoras تنسيق اختيار السكن بحسب ميزانيتك الكاملة وطرق التنقل واحتياجات أسرتك."
        }
      ],
      "faqs": [
        {
          "question": "أين أسكن إذا كنت أعمل في ليفنت؟",
          "answer": "ابدأ بليفنت وإتيلر وشيشلي أو الأحياء المتصلة بخط M2 وقارن أوقات التنقل الفعلية."
        },
        {
          "question": "أي ضفة أفضل للعيش؟",
          "answer": "غالباً تكون ضفة المدرسة والعمل أكثر عملية؛ فالعبور اليومي يؤثر في جودة الحياة."
        },
        {
          "question": "هل يضمن عقد الإيجار الحصول على الإقامة؟",
          "answer": "لا، العقد والعنوان جزء من الملف والقرار بيد إدارة الهجرة."
        }
      ],
      "sources": [
        {
          "label": "مترو إسطنبول — خط M4",
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M4"
        },
        {
          "label": "إدارة الهجرة — أنواع تصاريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "منصة e-ikamet الرسمية",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "مركز YİMER — أسئلة الهجرة",
          "href": "https://yimer.gov.tr/EN/SSS"
        },
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M2",
          "label": "مترو إسطنبول — خط M2 والربط"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/103273?query=6098",
          "label": "قانون الالتزامات التركي، المادتان 342 و344"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "إدارة الهجرة — إجراءات التقديم"
        }
      ]
    }
  },
  "moving-bodrum": {
    "fr": {
      "title": "Vivre à Bodrum en 2026 : quartiers, villas et vie à l’année",
      "metaDescription": "Yalıkavak, Türkbükü, Bitez, Gündoğan : comparez les quartiers, les coûts d’une villa, les transports et les démarches pour vivre à Bodrum.",
      "shortAnswer": "Bodrum peut convenir à une résidence principale ou secondaire si le quartier fonctionne pour vous en hiver comme en été. Le choix se joue entre accès aux services, mer, mobilité et coût complet du logement.",
      "bosphorasHelp": "Organisez des visites de quartiers et de villas adaptées à votre projet, avec un budget à l’année.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Quels quartiers de Bodrum choisir ?",
          "body": "Yalıkavak est adapté aux amateurs de marina et de villas ; Türkbükü privilégie les baies et une ambiance estivale haut de gamme. Bitez et Ortakent permettent d’étudier un compromis entre plage et vie quotidienne ; Gündoğan et Gümüşlük offrent d’autres cadres côtiers. Le centre de Bodrum est intéressant pour accéder aux commerces et services. Visitez en dehors de la haute saison avant de vous engager."
        },
        {
          "id": "detail-2",
          "title": "Aéroport et déplacements sur la péninsule",
          "body": "L’aéroport de Milas-Bodrum est à 37 km du centre de Bodrum selon DHMİ, avec navettes HAVAŞ et MUTTAŞ, taxis et voitures de location. Une villa sur une autre baie peut être bien plus éloignée. Conduisez les trajets vers l’école, les commerces et les soins ; mesurez la disponibilité des transports en hiver."
        },
        {
          "id": "detail-3",
          "title": "Le coût réel d’une villa ou d’un appartement",
          "body": "Au-delà du prix d’achat ou du loyer, budgétez charges de résidence, piscine, jardin, sécurité, eau, électricité, chauffage, climatisation et entretien saisonnier. Lors d’une visite, examinez pression d’eau, réserve éventuelle, isolation, humidité, connexion internet et accès routier. Demandez les factures sur douze mois et les prestations incluses dans les charges."
        },
        {
          "id": "detail-4",
          "title": "Acheter ou louer : documents et résidence",
          "body": "Pour acheter, examinez le titre de propriété (tapu), l’identité du vendeur, les charges ou hypothèques, les autorisations et la conformité du bâti. Le permis de séjour fondé sur l’immobilier concerne un logement utilisé à cette fin et dépend de conditions administratives ; acheter une villa ne garantit pas le titre de séjour. Une location annuelle permet de tester l’usage réel."
        },
        {
          "id": "detail-5",
          "title": "S’installer avec des enfants ou comme résidence secondaire",
          "body": "Pour une installation familiale, vérifiez les admissions scolaires, la médecine de proximité, l’accessibilité des urgences et les activités en hiver. Pour une résidence secondaire, organisez la surveillance, l’assurance et l’entretien pendant vos absences. Bosphoras peut coordonner les visites, l’analyse des coûts et les professionnels locaux."
        },
        {
          "id": "practical-1",
          "title": "Du centre à Turgutreis : comprendre la géographie des baies",
          "body": "Bodrum centre convient particulièrement à ceux qui recherchent les commerces, la promenade et les services proches. Bitez et Ortakent sont à considérer pour une vie familiale combinant plage et services. À Yalıkavak, l'environnement de la marina et le parc de villas attirent une clientèle internationale. Gündoğan propose une autre ambiance de baie ; Türkbükü est connue pour son animation estivale. Turgutreis, sur la partie occidentale de la péninsule, est une alternative pour qui apprécie les commerces et les couchers de soleil.\n\nLe bon choix ne se résume pas à une hiérarchie de prestige. Une maison dans les hauteurs procure parfois une vue remarquable, mais peut nécessiter une voiture pour les courses, les enfants et les soins. Les zones près des plages ne fonctionnent pas toutes de la même manière en hiver."
        },
        {
          "id": "practical-2",
          "title": "Une villa à l'année : établir son coût complet",
          "body": "À titre de scénario budgétaire, une location à 80 000 TL par mois représente 960 000 TL par an. Si les charges et l'entretien extérieur sont estimés à 10 000 TL par mois et les dépenses d'eau, électricité et internet à 7 000 TL, le coût illustratif atteint 1 164 000 TL par an, avant voiture, alimentation et autres dépenses. Ce n'est pas une estimation du marché ; les montants doivent être remplacés par les devis de votre bien.\n\nPour une propriété avec piscine, demandez un contrat précisant fréquence et contenu de l'entretien, gestion du jardin, consommation des pompes, traitement de l'eau et interventions hors saison. Une villa vide pendant plusieurs mois nécessite un dispositif de surveillance et une assurance compatible. Le coût annuel doit être établi avant l'offre d'achat."
        },
        {
          "id": "practical-3",
          "title": "Acheter en Turquie : à quel moment devient-on propriétaire ?",
          "body": "Le transfert de propriété intervient par inscription auprès du registre foncier, et non par la seule signature d'un contrat de réservation ou d'une promesse. Le guide public Invest in Türkiye rappelle qu'il faut examiner hypothèques, saisies et autres restrictions. Les personnes étrangères éligibles peuvent en principe acquérir sans titre de séjour préalable, sous réserve des règles de nationalité, de zone et de surface.\n\nSur la péninsule de Bodrum, la parcelle, la conformité des extensions, les accès, les droits d'usage de la piscine et les éventuelles restrictions d'urbanisme méritent un examen précis. Le portail cadastral officiel permet d'identifier une parcelle ; il ne remplace pas le contrôle des droits du vendeur et des charges au registre. Ne confondez pas réservation, acte de vente et décision d'immigration."
        },
        {
          "id": "practical-4",
          "title": "Vivre à Bodrum avec une famille : les déplacements décisifs",
          "body": "Avant d'acheter une villa, choisissez l'établissement scolaire et mesurez le trajet depuis chaque baie aux horaires de rentrée et de sortie. Discutez du transport scolaire, de la langue d'enseignement et du calendrier. Repérez également l'hôpital, la pharmacie et les services ouverts hors saison. Pour un mode de vie avec de jeunes enfants, une rue piétonne, un terrain sécurisé et la proximité des commerces peuvent compter davantage qu'une piscine privée.\n\nBosphoras peut organiser des visites autour de ces critères et coordonner l'évaluation indépendante du coût de possession. Un projet de résidence secondaire peut être préparé différemment d'une résidence principale : calendrier d'occupation, entretien en votre absence et facilité d'accès à l'aéroport."
        }
      ],
      "faqs": [
        {
          "question": "Bodrum convient-elle toute l’année ?",
          "answer": "Oui pour certains quartiers et modes de vie ; comparez les services disponibles en hiver, les trajets et l’humidité des logements."
        },
        {
          "question": "À quelle distance se situe l’aéroport ?",
          "answer": "DHMİ annonce 37 km entre le centre de Bodrum et l’aéroport de Milas-Bodrum ; la distance varie selon la baie."
        },
        {
          "question": "Acheter donne-t-il automatiquement le droit de séjour ?",
          "answer": "Non. Un logement peut constituer un motif de demande, sans garantir l’accord administratif."
        }
      ],
      "sources": [
        {
          "label": "DHMİ — accès à Milas-Bodrum",
          "href": "https://www.dhmi.gov.tr/Sayfalar/Havalimani/Milasbodrum/Ulasim.aspx"
        },
        {
          "label": "Direction de la migration — titres de séjour",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Invest in Türkiye — acquisition immobilière"
        },
        {
          "href": "https://parselsorgu.tkgm.gov.tr/",
          "label": "Consultation cadastrale officielle — TKGM"
        }
      ]
    },
    "en": {
      "title": "Living in Bodrum in 2026: neighbourhoods, villas and relocation",
      "metaDescription": "Compare Yalıkavak, Türkbükü, Bitez and Gündoğan, villa running costs, airport access and residence permit considerations.",
      "shortAnswer": "Bodrum can work as a primary or second home if the neighbourhood suits your needs in winter as well as summer. Compare everyday services, coastal access, mobility and the full cost of housing.",
      "bosphorasHelp": "Arrange neighbourhood and villa visits around your priorities and year-round budget.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Which Bodrum neighbourhood suits you?",
          "body": "Yalıkavak suits marina and villa living; Türkbükü is known for bays and an upscale summer atmosphere. Bitez and Ortakent offer possible balances between beaches and daily services, while Gündoğan and Gümüşlük offer different coastal settings. Central Bodrum is useful for shopping and services. Visit outside peak season before committing."
        },
        {
          "id": "detail-2",
          "title": "Airport access and peninsula transport",
          "body": "DHMİ places Milas-Bodrum Airport 37 km from central Bodrum, with HAVAŞ and MUTTAŞ shuttle services, taxis and car hire. A villa on another bay may be considerably farther. Drive the school, shopping and healthcare routes and assess winter transport availability."
        },
        {
          "id": "detail-3",
          "title": "The true running cost of a villa",
          "body": "Beyond purchase price or rent, budget for site fees, pool, garden, security, water, electricity, heating, cooling and seasonal maintenance. Inspect water pressure, any storage tank, insulation, damp, internet and road access. Ask for twelve months of bills and a written breakdown of included services."
        },
        {
          "id": "detail-4",
          "title": "Renting, buying and residence documentation",
          "body": "For a purchase, review the title deed (tapu), seller identity, encumbrances, authorisations and building compliance. A property-based residence application concerns housing used as a home and is subject to administrative conditions; buying a villa does not guarantee a permit. Annual renting allows you to test real living conditions."
        },
        {
          "id": "detail-5",
          "title": "Family relocation or a second home",
          "body": "For family relocation, check school admissions, nearby medical services, emergency access and winter activities. For a second home, organise oversight, insurance and maintenance during absences. Bosphoras can coordinate property visits, cost review and local professional support."
        },
        {
          "id": "practical-1",
          "title": "From central Bodrum to Turgutreis: understand the bays",
          "body": "Central Bodrum is practical for shopping, waterfront walks and services. Bitez and Ortakent can balance beaches with family life. Yalıkavak combines marina surroundings and villa living; Gündoğan offers a different bay setting; Türkbükü is known for summer activity. Turgutreis on the western peninsula is an alternative for local amenities and sunsets.\n\nThe decision is not simply a hierarchy of prestige. A hillside home may have exceptional views but require a car for shopping, children and healthcare. Beach areas also differ considerably in winter."
        },
        {
          "id": "practical-2",
          "title": "The annual cost of a villa",
          "body": "As an illustrative scenario, TRY 80,000 monthly rent equals TRY 960,000 a year. Add hypothetical building and outdoor maintenance of TRY 10,000 a month and water, electricity and internet of TRY 7,000, and the illustrative annual total is TRY 1,164,000 before transport, food and other expenses. This is not a market price estimate; replace each amount with quotes for the property.\n\nFor a pool property, obtain a contract covering maintenance frequency, gardening, pump electricity, water treatment and off-season repairs. A home left empty for months needs suitable oversight and insurance. Establish running costs before making an offer."
        },
        {
          "id": "practical-3",
          "title": "When does a buyer actually become the owner?",
          "body": "Ownership transfers through registration at the land registry rather than a reservation agreement or preliminary sale contract alone. The official Invest in Türkiye guide recommends reviewing mortgages, liens and restrictions. Eligible foreign individuals can generally acquire without a pre-existing residence permit, subject to nationality, geographic and area restrictions.\n\nAcross the Bodrum peninsula, examine the cadastral plot, compliance of extensions, access rights, pool use and planning limitations. The official cadastral portal helps identify a plot but does not substitute for confirming seller title and encumbrances. Distinguish reservation, registered ownership and the immigration decision."
        },
        {
          "id": "practical-4",
          "title": "Family life: the journeys that matter",
          "body": "Choose the school before committing to a villa and test the journey from each bay at arrival and collection times. Discuss school transport, teaching language and calendar. Identify hospitals, pharmacies and businesses open outside summer. For a household with young children, walkability, secure outdoor space and nearby shops can matter more than a private pool.\n\nBosphoras can coordinate visits around those priorities and introductions for independent running-cost and technical assessment. A second home involves a different plan from a main residence: periods of use, maintenance while away and airport access."
        }
      ],
      "faqs": [
        {
          "question": "Is Bodrum suitable year-round?",
          "answer": "Some areas and lifestyles are well suited. Assess winter services, transport and housing damp before committing."
        },
        {
          "question": "How far is the airport?",
          "answer": "DHMİ states 37 km from central Bodrum to Milas-Bodrum Airport; distance varies by bay."
        },
        {
          "question": "Does buying guarantee residence rights?",
          "answer": "No. Suitable housing may support an application, but does not guarantee approval."
        }
      ],
      "sources": [
        {
          "label": "DHMİ — Milas-Bodrum airport access",
          "href": "https://www.dhmi.gov.tr/Sayfalar/Havalimani/Milasbodrum/Ulasim.aspx"
        },
        {
          "label": "Migration authority — residence permit types",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Invest in Türkiye — acquiring property"
        },
        {
          "href": "https://parselsorgu.tkgm.gov.tr/",
          "label": "Official cadastral parcel lookup — TKGM"
        }
      ]
    },
    "ru": {
      "title": "Жизнь в Бодруме в 2026 году: районы, виллы и переезд",
      "metaDescription": "Ялыкавак, Тюркбюкю, Битез и Гюндоган: районы, содержание виллы, транспорт и оформление проживания.",
      "shortAnswer": "Бодрум подходит для постоянного или второго дома, если район отвечает вашим потребностям и летом, и зимой. Оцените доступность услуг, море, транспорт и полную стоимость жилья.",
      "bosphorasHelp": "Организуйте просмотры районов и вилл с учётом ваших целей и годового бюджета.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Какие районы Бодрума стоит рассмотреть?",
          "body": "Ялыкавак привлекателен яхтенной гаванью и виллами, Тюркбюкю — бухтами и атмосферой высокого сезона. Битез и Ортакент позволяют искать баланс между пляжем и повседневными услугами. Гюндоган и Гюмюшлюк предлагают другие варианты жизни у моря. Центр Бодрума удобен для магазинов и услуг. Посетите районы за пределами летнего сезона."
        },
        {
          "id": "detail-2",
          "title": "Аэропорт и транспорт на полуострове",
          "body": "По данным DHMİ, аэропорт Милас-Бодрум находится в 37 км от центра города. Доступны автобусы HAVAŞ и MUTTAŞ, такси и аренда автомобилей. Вилла в другой бухте может находиться значительно дальше. Проверьте дорогу до школ, магазинов и больниц и доступность транспорта зимой."
        },
        {
          "id": "detail-3",
          "title": "Сколько на самом деле стоит содержание жилья?",
          "body": "Кроме цены покупки или аренды учитывайте обслуживание комплекса, бассейн, сад, охрану, воду, электричество, отопление, кондиционирование и сезонные работы. Осмотрите напор воды, наличие резервуара, теплоизоляцию, влажность, интернет и подъезд. Попросите счета за двенадцать месяцев и перечень включённых услуг."
        },
        {
          "id": "detail-4",
          "title": "Покупка, аренда и документы на ВНЖ",
          "body": "При покупке проверьте право собственности (tapu), личность продавца, обременения, разрешения и соответствие постройки документам. ВНЖ на основании недвижимости связан с жилым объектом, используемым для проживания, и административными условиями. Покупка виллы не гарантирует ВНЖ. Годовая аренда помогает оценить условия в реальности."
        },
        {
          "id": "detail-5",
          "title": "Семейный переезд или второй дом",
          "body": "Для семьи уточните наличие мест в школах, доступ к врачам и экстренным службам, а также занятия зимой. Для второго дома организуйте присмотр, страхование и обслуживание в отсутствие владельцев. Bosphoras может координировать просмотры, оценку расходов и работу местных специалистов."
        },
        {
          "id": "practical-1",
          "title": "От центра Бодрума до Тургутрейса: особенности бухт",
          "body": "Центр Бодрума удобен для магазинов, прогулок по набережной и услуг. Битез и Ортакент позволяют сочетать пляж и семейную жизнь. Ялыкавак привлекает яхтенной гаванью и виллами, Гюндоган предлагает иной характер бухты, Тюркбюкю известен летней активностью. Тургутрейс на западе полуострова стоит рассмотреть любителям местных магазинов и закатов.\n\nВыбор не сводится к престижности. Дом на склоне может иметь прекрасный вид, но требовать автомобиля для покупок, перевозки детей и визитов к врачу. Пляжные районы также сильно различаются зимой."
        },
        {
          "id": "practical-2",
          "title": "Годовая стоимость проживания на вилле",
          "body": "Условный пример: аренда 80 000 лир в месяц составляет 960 000 лир в год. Если добавить 10 000 лир в месяц за обслуживание комплекса и территории и 7 000 за воду, электричество и интернет, годовая сумма достигнет 1 164 000 лир без питания, автомобиля и прочих расходов. Это не рыночная оценка; замените числа предложениями по конкретному объекту.\n\nДля виллы с бассейном запросите договор, где указаны частота обслуживания, уход за садом, энергопотребление насосов, обработка воды и зимние работы. Пустующий несколько месяцев дом требует присмотра и подходящей страховки. Определите годовые расходы до предложения о покупке."
        },
        {
          "id": "practical-3",
          "title": "Когда покупатель становится собственником?",
          "body": "Право собственности переходит после регистрации в земельном реестре, а не в результате одного лишь договора бронирования или предварительной сделки. Государственный портал Invest in Türkiye рекомендует проверять ипотеку, аресты и ограничения. Иностранные граждане, имеющие право приобретения, обычно могут покупать без предварительного ВНЖ при соблюдении требований к гражданству, местности и площади.\n\nНа полуострове Бодрум важно проверить границы участка, законность пристроек, подъезд, право пользования бассейном и градостроительные ограничения. Кадастровый портал помогает определить участок, но не заменяет проверку прав продавца и обременений. Бронирование, регистрация собственности и решение о ВНЖ — разные процедуры."
        },
        {
          "id": "practical-4",
          "title": "Семья и маршруты, которые определяют качество жизни",
          "body": "До покупки виллы выберите школу и проверьте дорогу из каждой бухты в часы начала и окончания занятий. Уточните школьный автобус, язык преподавания и календарь. Найдите больницу, аптеку и магазины, работающие зимой. Для маленьких детей безопасность территории, пешие маршруты и близость магазинов могут оказаться важнее частного бассейна.\n\nBosphoras может организовать просмотры по этим критериям и взаимодействие с независимыми специалистами по оценке расходов и состояния жилья. Для второго дома план отличается от постоянного проживания: периоды использования, обслуживание в ваше отсутствие и доступ к аэропорту."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли жить в Бодруме круглый год?",
          "answer": "Да, в подходящих районах. Проверьте зимние услуги, транспорт и состояние жилья."
        },
        {
          "question": "Как далеко аэропорт?",
          "answer": "По данным DHMİ, от центра Бодрума до аэропорта 37 км; расстояние зависит от бухты."
        },
        {
          "question": "Гарантирует ли покупка ВНЖ?",
          "answer": "Нет. Жилая недвижимость может быть основанием для заявления, но не гарантирует одобрение."
        }
      ],
      "sources": [
        {
          "label": "DHMİ — транспорт аэропорта Милас-Бодрум",
          "href": "https://www.dhmi.gov.tr/Sayfalar/Havalimani/Milasbodrum/Ulasim.aspx"
        },
        {
          "label": "Миграционная служба — виды ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Invest in Türkiye — покупка недвижимости"
        },
        {
          "href": "https://parselsorgu.tkgm.gov.tr/",
          "label": "Кадастровый портал — TKGM"
        }
      ]
    },
    "ar": {
      "title": "العيش في بودروم 2026: الأحياء والفيلات والإقامة طوال العام",
      "metaDescription": "قارن ياليكافاك وتوركبوكو وبيتيز وغوندوغان وتكاليف الفيلات والمطار وشروط السكن قبل الانتقال إلى بودروم.",
      "shortAnswer": "يمكن أن تكون بودروم مكاناً للسكن الأساسي أو الثاني إذا لبّى الحي احتياجاتك في الشتاء والصيف. قارن الخدمات اليومية والقرب من البحر والمواصلات والتكلفة الإجمالية للسكن.",
      "bosphorasHelp": "نظّم زيارات للأحياء والفيلات وفق أهدافك وميزانيتك السنوية.",
      "sections": [
        {
          "id": "detail-1",
          "title": "ما الأحياء المناسبة في بودروم؟",
          "body": "تتميز ياليكافاك بمرسى اليخوت والفيلات، بينما تشتهر توركبوكو بالخلجان والأجواء الصيفية الراقية. وتوفر بيتيز وأورتاكينت خيارات تجمع بين الشاطئ والخدمات اليومية، فيما تقدم غوندوغان وغوموشلوك بيئات ساحلية مختلفة. ويفيد مركز بودروم في الوصول إلى المتاجر والخدمات. زُر الأحياء خارج ذروة الموسم قبل الالتزام."
        },
        {
          "id": "detail-2",
          "title": "المطار والتنقل في شبه الجزيرة",
          "body": "بحسب هيئة المطارات DHMİ، يبعد مطار ميلاس بودروم 37 كم عن مركز المدينة، وتتوفر حافلات HAVAŞ وMUTTAŞ وسيارات الأجرة والتأجير. وقد تبعد الفيلا في خليج آخر مسافة أكبر. جرّب طرق المدرسة والمتاجر والرعاية الصحية وتحقق من توفر النقل شتاءً."
        },
        {
          "id": "detail-3",
          "title": "التكلفة الفعلية لصيانة الفيلا",
          "body": "أضف إلى ثمن الشراء أو الإيجار رسوم المجمع والمسبح والحديقة والأمن والماء والكهرباء والتدفئة والتكييف والصيانة الموسمية. افحص ضغط الماء وخزان التخزين إن وُجد والعزل والرطوبة والإنترنت وطريق الوصول. اطلب فواتير اثني عشر شهراً وتفاصيل الخدمات المشمولة في الرسوم."
        },
        {
          "id": "detail-4",
          "title": "الإيجار والشراء ومستندات الإقامة",
          "body": "عند الشراء راجع سند الملكية (tapu) وهوية البائع والرهون والتراخيص ومطابقة البناء للوثائق. يتعلق طلب الإقامة على أساس العقار بمسكن يُستخدم للسكن ويخضع لشروط إدارية؛ شراء الفيلا لا يضمن التصريح. ويساعد الإيجار السنوي على تجربة ظروف الحياة الفعلية."
        },
        {
          "id": "detail-5",
          "title": "الانتقال مع الأسرة أو اختيار منزل ثانٍ",
          "body": "للانتقال الأسري، راجع قبول المدارس والرعاية الطبية القريبة والوصول إلى الطوارئ والأنشطة الشتوية. وللمنزل الثاني، رتّب الإشراف والتأمين والصيانة أثناء الغياب. تستطيع Bosphoras تنسيق زيارات العقارات وتقييم التكاليف والتواصل مع المختصين المحليين."
        },
        {
          "id": "practical-1",
          "title": "من مركز بودروم إلى تورغوت ريس: جغرافيا الخلجان",
          "body": "يتميز مركز بودروم بقرب المتاجر والممشى والخدمات. وتوفر بيتيز وأورتاكينت خيارات تجمع الشاطئ والحياة العائلية، فيما تجمع ياليكافاك بين المرسى والفيلات، وتقدم غوندوغان طابع خليج مختلفاً، وتشتهر توركبوكو بنشاطها الصيفي. وتشكل تورغوت ريس في غرب شبه الجزيرة خياراً لمن يفضّل المتاجر المحلية ومشاهد الغروب.\n\nلا يقتصر الاختيار على مكانة الحي؛ فقد يتمتع منزل على المرتفعات بإطلالة رائعة لكنه يتطلب سيارة للتسوق والمدرسة والرعاية الصحية. كما تختلف المناطق الشاطئية كثيراً في الشتاء."
        },
        {
          "id": "practical-2",
          "title": "التكلفة السنوية الكاملة للفيلا",
          "body": "مثال افتراضي: إيجار 80 ألف ليرة شهرياً يساوي 960 ألف ليرة سنوياً. وإذا أضفنا 10 آلاف ليرة شهرياً لرسوم المجمع والصيانة الخارجية و7 آلاف للماء والكهرباء والإنترنت، تبلغ التكلفة السنوية التوضيحية 1,164,000 ليرة قبل السيارة والغذاء والمصاريف الأخرى. لا تمثل هذه الأرقام تقديراً لأسعار السوق؛ استبدلها بعروض العقار المحدد.\n\nللفيلا التي تضم مسبحاً، اطلب عقداً يبيّن وتيرة الصيانة وخدمة الحديقة واستهلاك المضخات ومعالجة المياه والإصلاحات خارج الموسم. يحتاج المنزل الخالي لأشهر إلى إشراف وتأمين مناسبين. حدّد التكلفة السنوية قبل تقديم عرض الشراء."
        },
        {
          "id": "practical-3",
          "title": "متى يصبح المشتري مالكاً للعقار؟",
          "body": "تنتقل الملكية بالتسجيل لدى دائرة السجل العقاري، لا بمجرد توقيع عقد حجز أو اتفاق بيع أولي. ويذكّر دليل الاستثمار الرسمي Invest in Türkiye بأهمية مراجعة الرهون والحجوزات والقيود. ويمكن للأجانب المؤهلين الشراء عموماً دون تصريح إقامة مسبق، وفق شروط الجنسية والمنطقة والمساحة.\n\nفي شبه جزيرة بودروم، راجع حدود القطعة ومطابقة الإضافات وحقوق الوصول والمسبح والقيود التنظيمية. تساعد منصة المسح العقاري الرسمية على تحديد القطعة، لكنها لا تغني عن التحقق من ملكية البائع والقيود في السجل. الحجز ونقل الملكية وقرار الإقامة إجراءات منفصلة."
        },
        {
          "id": "practical-4",
          "title": "الحياة الأسرية والرحلات اليومية",
          "body": "قبل شراء فيلا، اختر المدرسة وجرّب طريقها من كل خليج في مواعيد بداية الدوام ونهايته. استفسر عن الحافلات ولغة التدريس والتقويم، وحدّد المستشفى والصيدلية والمتاجر العاملة شتاءً. قد تكون المساحات الآمنة للمشي والأطفال وقرب المتاجر أهم من مسبح خاص.\n\nتستطيع Bosphoras تنسيق الزيارات وفق هذه المعايير والتواصل مع مختصين مستقلين لتقييم حالة السكن وتكاليفه. ويختلف المنزل الثاني عن السكن الرئيسي من حيث فترات الاستخدام والصيانة أثناء الغياب وسهولة الوصول إلى المطار."
        }
      ],
      "faqs": [
        {
          "question": "هل تصلح بودروم للعيش طوال العام؟",
          "answer": "نعم في أحياء مناسبة، مع تقييم الخدمات الشتوية والنقل وحالة العقار."
        },
        {
          "question": "كم يبعد المطار؟",
          "answer": "تذكر هيئة المطارات مسافة 37 كم بين مركز بودروم ومطار ميلاس بودروم؛ وتختلف المسافة بحسب الخليج."
        },
        {
          "question": "هل يضمن شراء العقار تصريح الإقامة؟",
          "answer": "لا. قد يوفر المسكن أساساً للتقديم لكنه لا يضمن الموافقة الإدارية."
        }
      ],
      "sources": [
        {
          "label": "هيئة المطارات — الوصول إلى مطار ميلاس بودروم",
          "href": "https://www.dhmi.gov.tr/Sayfalar/Havalimani/Milasbodrum/Ulasim.aspx"
        },
        {
          "label": "إدارة الهجرة — أنواع تصاريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "هيئة الاستثمار التركية — شراء العقارات"
        },
        {
          "href": "https://parselsorgu.tkgm.gov.tr/",
          "label": "المنصة الرسمية للاستعلام العقاري"
        }
      ]
    }
  },
  "tax-residency": {
    "fr": {
      "title": "Résidence fiscale en Turquie en 2026 : critères et impôts",
      "metaDescription": "Domicile, six mois de présence, impôt mondial, conventions et nouvelle exonération de 20 ans : comprenez votre statut fiscal turc.",
      "shortAnswer": "En droit turc, une personne peut devenir fiscalement résidente par son domicile en Turquie ou par un séjour continu de plus de six mois au cours d’une année civile, sous réserve des exceptions légales. La réforme 2026 prévoit en outre une exonération ciblée de revenus étrangers pour certains nouveaux résidents.",
      "bosphorasHelp": "Établissez votre calendrier fiscal et la cartographie de vos revenus avant votre déménagement.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Les critères de résidence : domicile ou plus de six mois",
          "body": "L’article 4 de la loi n° 193 sur l’impôt sur le revenu retient le domicile en Turquie ou une présence continue de plus de six mois dans une année civile ; les absences temporaires ne rompent pas cette continuité. Il ne suffit donc pas de compter 183 jours ni de disposer d’un ikamet. L’article 5 prévoit des exceptions pour certains séjours temporaires (études, soins, mission déterminée, tourisme, etc.)."
        },
        {
          "id": "detail-2",
          "title": "Résident et non-résident : quelle différence fiscale ?",
          "body": "En principe, le résident imposable à titre complet relève de l’impôt turc sur ses revenus de source turque et étrangère, tandis que le non-résident est imposable sur ses revenus de source turque. Il existe des règles particulières et des exonérations. Distinguez salaire, activité indépendante, loyers, dividendes, intérêts et plus-values ; la localisation du compte bancaire ne détermine pas à elle seule la source."
        },
        {
          "id": "detail-3",
          "title": "Double résidence et conventions fiscales",
          "body": "Deux pays peuvent vous considérer comme résident selon leurs lois internes. La convention fiscale applicable peut départager les situations en examinant notamment le foyer permanent, le centre des intérêts vitaux et le séjour habituel selon ses dispositions. Les conventions répartissent aussi le droit d’imposer chaque catégorie de revenu et prévoient des mécanismes contre la double imposition. Le déménagement seul n’efface pas vos obligations antérieures."
        },
        {
          "id": "detail-4",
          "title": "Le nouveau régime fiscal de 20 ans",
          "body": "La loi 7582, publiée le 4 juin 2026, exonère certaines recettes de source étrangère des nouveaux résidents établis depuis le 1er janvier 2026 qui satisfont aux conditions des trois années civiles précédentes. Le communiqué 333 impose une demande de certificat à la fin de l’année d’établissement, ou à la fin février suivante pour novembre et décembre. Les revenus turcs restent soumis au régime ordinaire."
        },
        {
          "id": "detail-5",
          "title": "Exemple et documents pour préparer le transfert",
          "body": "Une personne qui s’établit à Istanbul en septembre tout en gardant une activité et un logement à l’étranger doit examiner le domicile et la convention, pas seulement la présence. Constituez un calendrier d’entrées et sorties, les justificatifs de logement et de famille, les certificats fiscaux antérieurs, contrats, relevés et documents de revenus. Bosphoras peut organiser la coordination avec les professionnels des deux pays."
        },
        {
          "id": "practical-1",
          "title": "Combien paie-t-on d'impôt sur le revenu en Turquie en 2026 ?",
          "body": "Le barème progressif ordinaire hors salaires débute à 15 % jusqu'à 190 000 TL, puis 20 % de 190 000 à 400 000 TL, 27 % jusqu'à 1 000 000 TL, 35 % jusqu'à 5 300 000 TL et 40 % au-delà. Pour les salaires, le passage de la tranche à 27 % à celle à 35 % intervient à 1 500 000 TL, au lieu de 1 000 000 TL. Les taux marginaux s'appliquent par tranche, pas à l'ensemble du revenu.\n\nExemple : 600 000 TL de revenu net imposable hors salaires, sans autre disposition, donnent 70 500 TL sur les premiers 400 000 TL plus 54 000 TL sur les 200 000 TL suivants, soit 124 500 TL d'impôt brut. Le calcul réel dépend notamment des déductions, retenues et exonérations applicables. Le barème est révisé chaque année."
        },
        {
          "id": "practical-2",
          "title": "Une convention fiscale ne rend pas automatiquement vos revenus étrangers exonérés",
          "body": "Un propriétaire qui s'installe en Turquie et conserve un appartement en France doit distinguer deux questions : quel pays est son État de résidence au sens de la convention, et quel pays peut taxer les loyers de l'immeuble ? Les revenus immobiliers restent généralement imposables dans le pays de situation du bien. Le traitement dans le pays de résidence dépend de la convention et des exonérations internes.\n\nUn dirigeant qui continue à travailler pour une société étrangère doit identifier la nature et la source de chaque flux : salaire, rémunération de mandat, dividende ou revenu professionnel. Les conventions ont des articles distincts pour ces catégories. Une décision cohérente exige donc un inventaire précis plutôt qu'une règle unique des six mois."
        },
        {
          "id": "practical-3",
          "title": "La différence entre résidence, numéro fiscal et permis de travail",
          "body": "Le numéro fiscal turc est un identifiant administratif utile, notamment pour certaines opérations bancaires et immobilières. Il ne constitue pas en lui-même une preuve de résidence fiscale. Le permis de séjour répond aux règles d'immigration, tandis que le permis de travail autorise une activité selon ses propres conditions. La résidence fiscale est appréciée selon les articles 4 et 5 de la loi 193 et, en présence d'un conflit international, la convention applicable.\n\nCes quatre éléments peuvent évoluer à des dates différentes. Il est donc utile de noter la date d'installation du domicile, la chronologie des entrées et sorties, le début du bail, l'activité professionnelle et les échéances fiscales dans un calendrier unique."
        },
        {
          "id": "practical-4",
          "title": "Le coût d'un changement de résidence se calcule avant le départ",
          "body": "Un transfert bien préparé comporte trois inventaires : la situation familiale et le domicile, les revenus et actifs par pays, et les engagements professionnels ou commerciaux. Réunissez les déclarations précédentes et les certificats de résidence qui existent, puis classez les revenus selon leur catégorie et leur source. Examinez séparément les obligations de la société si vous dirigez une entreprise.\n\nVous pouvez confier à Bosphoras la coordination de cette préparation, la sélection des professionnels indépendants dans les juridictions concernées et les démarches pratiques d'installation. L'objectif est de déterminer les conséquences dès la préparation du départ, plutôt que de découvrir les incompatibilités après avoir signé un bail ou déplacé son activité."
        }
      ],
      "faqs": [
        {
          "question": "Un ikamet suffit-il à devenir résident fiscal ?",
          "answer": "Non. Les critères fiscaux et migratoires sont distincts."
        },
        {
          "question": "Moins de six mois signifie-t-il toujours non-résident ?",
          "answer": "Non. Un domicile en Turquie peut suffire ; les conventions et les exceptions doivent être prises en compte."
        },
        {
          "question": "La réforme 2026 exonère-t-elle tous les résidents ?",
          "answer": "Non. Elle cible les nouveaux résidents remplissant les conditions de l’article 20/D, pour les revenus étrangers couverts."
        }
      ],
      "sources": [
        {
          "label": "GİB — loi 193, article 4",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6991"
        },
        {
          "label": "GİB — exceptions, article 5",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/7214"
        },
        {
          "label": "GİB — loi sur l’impôt sur le revenu",
          "href": "https://antalya.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "Journal officiel — loi 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "GİB — communiqué fiscal n° 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937",
          "label": "Barème 2026 de l’impôt sur le revenu — GİB"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/660/madde/13912",
          "label": "Texte de l’article 4 de la loi 7582 — GİB"
        }
      ]
    },
    "en": {
      "title": "Turkey tax residency in 2026: rules, taxes and exemptions",
      "metaDescription": "Understand domicile, the six-month rule, worldwide income, tax treaties and Turkey’s new 20-year foreign-income exemption.",
      "shortAnswer": "Under Turkish domestic law, a person may become tax resident through a Turkish domicile or continuous presence of more than six months in a calendar year, subject to statutory exceptions. The 2026 reform adds a targeted foreign-income exemption for qualifying new residents.",
      "bosphorasHelp": "Map your tax timeline and sources of income before moving.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Residence criteria: domicile or more than six months",
          "body": "Article 4 of Income Tax Law 193 uses domicile in Turkey or continuous presence for more than six months in a calendar year; temporary departures do not break continuity. Counting 183 days or holding an ikamet is not sufficient by itself. Article 5 provides exceptions for certain temporary stays, including study, medical treatment, a defined assignment or travel."
        },
        {
          "id": "detail-2",
          "title": "Resident versus non-resident taxation",
          "body": "Generally, full-liability residents are subject to Turkish income tax on Turkish and foreign income, while limited-liability non-residents are taxed on Turkish-source income. Special rules and exemptions apply. Separate employment, professional activity, rental income, dividends, interest and capital gains. The location of a bank account does not alone establish income source."
        },
        {
          "id": "detail-3",
          "title": "Dual residence and double tax treaties",
          "body": "Two countries may regard you as resident under their domestic rules. An applicable double tax treaty may resolve this by reference to permanent home, centre of vital interests and habitual abode, according to its specific provisions. Treaties also allocate taxation rights by income category and provide double tax relief mechanisms. Moving does not eliminate earlier obligations."
        },
        {
          "id": "detail-4",
          "title": "The new 20-year foreign-income exemption",
          "body": "Law 7582, published on 4 June 2026, exempts qualifying foreign-source income of new residents settling from 1 January 2026 who meet the three-prior-calendar-year conditions. Communiqué 333 requires a certificate application by year-end or the end of the following February for November and December arrivals. Turkish-source income remains under ordinary rules."
        },
        {
          "id": "detail-5",
          "title": "Example and documents for a tax move",
          "body": "Someone settling in Istanbul in September while retaining business activity and housing overseas should assess domicile and treaty rules, not only physical presence. Assemble an entry-exit calendar, housing and family evidence, prior tax certificates, contracts, statements and income documentation. Bosphoras can coordinate introductions to professionals in both jurisdictions."
        },
        {
          "id": "practical-1",
          "title": "What are the 2026 Turkish income tax rates?",
          "body": "The ordinary progressive non-employment schedule starts at 15% up to TRY 190,000, then 20% to TRY 400,000, 27% to TRY 1,000,000, 35% to TRY 5,300,000 and 40% above that. For employment income, the 27% bracket extends to TRY 1,500,000 rather than TRY 1,000,000. Marginal rates apply to each slice, not to all income.\n\nFor example, taxable net non-employment income of TRY 600,000, with no other adjustment, produces TRY 70,500 on the first TRY 400,000 and TRY 54,000 on the remainder, or gross tax of TRY 124,500. Actual tax depends on applicable deductions, withholding and exemptions. The schedule changes annually."
        },
        {
          "id": "practical-2",
          "title": "A tax treaty does not automatically exempt overseas income",
          "body": "Someone moving to Turkey while retaining a rental apartment in France faces two distinct questions: residence for treaty purposes and taxing rights over the property income. Real estate income generally remains taxable where the property is located. Treatment in the residence country depends on the treaty and domestic exemptions.\n\nA director continuing to work for a foreign company must distinguish employment income, director remuneration, dividends and professional income. Treaties address these categories separately. A proper income inventory is more useful than applying a blanket six-month rule."
        },
        {
          "id": "practical-3",
          "title": "Tax residence, tax number and work authorisation are different",
          "body": "A Turkish tax number identifies an individual for administrative transactions, including some banking and property arrangements. It does not itself prove tax residence. A residence permit follows immigration rules; work authorisation has separate conditions. Tax residence is determined under Articles 4 and 5 of Law 193 and the applicable treaty if two countries claim residence.\n\nThese events can occur on different dates. Record the date of establishment of domicile, entry and exit dates, lease start, work activity and filing deadlines in a single timeline."
        },
        {
          "id": "practical-4",
          "title": "Assess the total tax outcome before moving",
          "body": "A well-prepared relocation maps family and domicile, income and assets by country, and professional or business arrangements. Compile prior tax returns and available residence certificates, then classify each source of income. If you own a company, assess its obligations separately.\n\nBosphoras can help coordinate the preparatory file, independent advisers across relevant jurisdictions and relocation arrangements. The aim is to understand the consequences before signing a long lease or moving business operations."
        }
      ],
      "faqs": [
        {
          "question": "Does an ikamet make me tax resident?",
          "answer": "Not automatically. Tax and immigration residence use different criteria."
        },
        {
          "question": "Does staying under six months guarantee non-residence?",
          "answer": "No. Turkish domicile may establish residence; statutory exceptions and treaties matter."
        },
        {
          "question": "Does the 2026 exemption cover every resident?",
          "answer": "No. It is for qualifying new residents under Article 20/D and qualifying foreign-source income."
        }
      ],
      "sources": [
        {
          "label": "GİB — Law 193, Article 4",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6991"
        },
        {
          "label": "GİB — exceptions, Article 5",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/7214"
        },
        {
          "label": "GİB — Income Tax Law",
          "href": "https://antalya.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "Official Gazette — Law 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "GİB — Tax Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937",
          "label": "2026 income tax schedule — GİB"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/660/madde/13912",
          "label": "Law 7582, Article 4 — GİB"
        }
      ]
    },
    "ru": {
      "title": "Налоговое резидентство Турции в 2026 году: правила и льготы",
      "metaDescription": "Место жительства, правило шести месяцев, налогообложение мирового дохода, соглашения и новая льгота на 20 лет.",
      "shortAnswer": "По турецкому законодательству налоговое резидентство может возникнуть при наличии постоянного места жительства в Турции или непрерывном проживании более шести месяцев в календарном году с учётом исключений. Реформа 2026 года вводит целевую льготу для иностранных доходов новых резидентов.",
      "bosphorasHelp": "Составьте налоговый календарь и перечень источников доходов до переезда.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Критерии резидентства: место жительства или более шести месяцев",
          "body": "Статья 4 закона № 193 о подоходном налоге предусматривает место жительства в Турции либо непрерывное пребывание более шести месяцев в календарном году. Временные выезды не прерывают этот срок. Поэтому недостаточно только считать 183 дня или иметь ВНЖ. Статья 5 устанавливает исключения для некоторых временных целей, включая учёбу, лечение, конкретное задание и путешествие."
        },
        {
          "id": "detail-2",
          "title": "Как различается налогообложение резидентов и нерезидентов?",
          "body": "По общему правилу, резиденты с полной налоговой обязанностью облагаются налогом на турецкие и иностранные доходы, нерезиденты — на доходы из турецких источников. Действуют специальные правила и льготы. Различайте зарплату, самостоятельную деятельность, аренду, дивиденды, проценты и прирост капитала. Местонахождение банковского счёта само по себе не определяет источник дохода."
        },
        {
          "id": "detail-3",
          "title": "Двойное резидентство и налоговые соглашения",
          "body": "Два государства могут считать человека резидентом по своему внутреннему праву. Применимое соглашение может разрешить конфликт с учётом постоянного жилья, центра жизненных интересов и обычного места проживания согласно его положениям. Соглашения также распределяют права налогообложения отдельных видов доходов и предусматривают устранение двойного налогообложения. Переезд не отменяет прежние обязательства."
        },
        {
          "id": "detail-4",
          "title": "Новая льгота на 20 лет",
          "body": "Закон № 7582, опубликованный 4 июня 2026 года, освобождает соответствующие иностранные доходы новых резидентов с 1 января 2026 года при соблюдении условий за три предшествующих календарных года. Циркуляр № 333 требует подать заявление на свидетельство до конца года либо до конца следующего февраля при переезде в ноябре или декабре. Турецкие доходы облагаются по общим правилам."
        },
        {
          "id": "detail-5",
          "title": "Пример и документы для подготовки переезда",
          "body": "При переезде в Стамбул в сентябре с сохранением работы и жилья за рубежом необходимо учитывать не только срок пребывания, но и постоянное место жительства и соглашение. Соберите календарь въездов и выездов, документы о жилье и семье, прежние налоговые свидетельства, договоры, выписки и сведения о доходах. Bosphoras может организовать взаимодействие со специалистами в обеих странах."
        },
        {
          "id": "practical-1",
          "title": "Какие ставки подоходного налога действуют в 2026 году?",
          "body": "Обычная прогрессивная шкала для доходов, не являющихся зарплатой: 15% до 190 000 лир, далее 20% до 400 000, 27% до 1 000 000, 35% до 5 300 000 и 40% сверх этой суммы. Для зарплаты диапазон ставки 27% заканчивается на 1 500 000 лир, а не на 1 000 000. Каждая ставка относится к соответствующей части дохода, а не ко всей сумме.\n\nНапример, при чистом налогооблагаемом доходе 600 000 лир, не являющемся зарплатой, без дополнительных корректировок налог составляет 70 500 лир на первые 400 000 и 54 000 на оставшиеся 200 000, итого 124 500 лир. Реальный расчёт учитывает вычеты, удержания и льготы. Шкала обновляется ежегодно."
        },
        {
          "id": "practical-2",
          "title": "Налоговое соглашение не означает автоматическое освобождение зарубежных доходов",
          "body": "При переезде в Турцию с сохранением сдаваемой квартиры во Франции возникают два разных вопроса: где находится налоговое резидентство для целей соглашения и какая страна вправе облагать аренду. Доходы от недвижимости обычно могут облагаться там, где расположен объект. Порядок в стране резидентства зависит от соглашения и внутренних льгот.\n\nРуководитель иностранной компании отдельно определяет зарплату, вознаграждение за функции директора, дивиденды и профессиональные доходы. Для них предусмотрены разные статьи соглашений. Поэтому подробная классификация доходов важнее универсального правила шести месяцев."
        },
        {
          "id": "practical-3",
          "title": "Налоговое резидентство, налоговый номер и право на работу — разные понятия",
          "body": "Турецкий налоговый номер служит идентификатором для административных, банковских и имущественных операций; он сам по себе не доказывает налоговое резидентство. ВНЖ регулируется миграционным законодательством, разрешение на работу — отдельными правилами. Налоговый статус определяется статьями 4 и 5 закона № 193 и соответствующим соглашением при конфликте двух государств.\n\nЭти события могут приходиться на разные даты. В едином календаре фиксируйте появление постоянного места жительства, въезды и выезды, начало договора аренды, работу и сроки налоговой отчётности."
        },
        {
          "id": "practical-4",
          "title": "Оцените последствия смены резидентства до отъезда",
          "body": "Хорошая подготовка охватывает семейную ситуацию и жильё, доходы и активы по странам и профессиональные обязательства. Соберите предыдущие декларации и доступные справки о резидентстве, затем классифицируйте каждый доход. Если вы владеете компанией, её обязательства анализируются отдельно.\n\nBosphoras может координировать подготовку документов, подбор независимых консультантов в соответствующих странах и практические вопросы переезда. Это позволяет оценить последствия до долгосрочной аренды или перемещения бизнеса."
        }
      ],
      "faqs": [
        {
          "question": "Достаточно ли ВНЖ для налогового резидентства?",
          "answer": "Нет. Налоговый и миграционный статусы определяются по разным критериям."
        },
        {
          "question": "Менее шести месяцев гарантируют статус нерезидента?",
          "answer": "Нет. Постоянное место жительства в Турции может быть достаточным; важны исключения и соглашения."
        },
        {
          "question": "Льгота 2026 года действует для всех?",
          "answer": "Нет. Она касается новых резидентов, соответствующих статье 20/D, и определённых иностранных доходов."
        }
      ],
      "sources": [
        {
          "label": "GİB — закон № 193, статья 4",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6991"
        },
        {
          "label": "GİB — исключения, статья 5",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/7214"
        },
        {
          "label": "GİB — закон о подоходном налоге",
          "href": "https://antalya.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "Официальный вестник — закон № 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "GİB — циркуляр № 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937",
          "label": "Шкала подоходного налога 2026 — GİB"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/660/madde/13912",
          "label": "Статья 4 закона № 7582 — GİB"
        }
      ]
    },
    "ar": {
      "title": "الإقامة الضريبية في تركيا 2026: الشروط والضرائب والإعفاءات",
      "metaDescription": "تعرّف إلى الموطن وقاعدة الأشهر الستة والدخل العالمي والاتفاقيات الضريبية والإعفاء الجديد لمدة 20 عاماً.",
      "shortAnswer": "وفق القانون التركي، قد تنشأ الإقامة الضريبية بوجود موطن في تركيا أو بالبقاء المتواصل أكثر من ستة أشهر خلال سنة ميلادية، مع مراعاة الاستثناءات القانونية. ويضيف إصلاح 2026 إعفاءً محدداً للدخل الأجنبي للمقيمين الجدد المؤهلين.",
      "bosphorasHelp": "أعد جدولك الضريبي وحدد مصادر دخلك قبل الانتقال.",
      "sections": [
        {
          "id": "detail-1",
          "title": "معايير الإقامة: الموطن أو أكثر من ستة أشهر",
          "body": "تحدد المادة 4 من قانون ضريبة الدخل رقم 193 الموطن في تركيا أو البقاء المتواصل فيها أكثر من ستة أشهر في سنة ميلادية؛ ولا تقطع المغادرات المؤقتة هذه المدة. لذلك لا يكفي عدّ 183 يوماً أو امتلاك تصريح إقامة. وتنص المادة 5 على استثناءات لبعض الإقامات المؤقتة للدراسة والعلاج والمهمات المحددة والسفر."
        },
        {
          "id": "detail-2",
          "title": "الفرق الضريبي بين المقيم وغير المقيم",
          "body": "من حيث المبدأ يخضع المقيم ذو الالتزام الضريبي الكامل لضريبة الدخل على إيراداته التركية والأجنبية، بينما يخضع غير المقيم للضريبة على الدخل من مصادر تركية. وتوجد قواعد وإعفاءات خاصة. ميّز بين الراتب والنشاط المهني والإيجارات وتوزيعات الأرباح والفوائد والأرباح الرأسمالية. موقع الحساب المصرفي وحده لا يحدد مصدر الدخل."
        },
        {
          "id": "detail-3",
          "title": "ازدواج الإقامة والاتفاقيات الضريبية",
          "body": "قد تعتبرك دولتان مقيماً وفق قوانينهما الداخلية. ويمكن للاتفاقية الضريبية المطبقة حسم التعارض بالنظر إلى المسكن الدائم ومركز المصالح الحيوية ومكان الإقامة المعتادة وفق أحكامها. وتوزع الاتفاقيات حقوق فرض الضرائب بحسب نوع الدخل وتحدد آليات تفادي الازدواج. الانتقال وحده لا يلغي الالتزامات السابقة."
        },
        {
          "id": "detail-4",
          "title": "الإعفاء الجديد لمدة 20 عاماً",
          "body": "يعفي القانون 7582 المنشور في 4 يونيو 2026 الإيرادات المؤهلة من المصادر الأجنبية للمقيمين الجدد منذ 1 يناير 2026 عند استيفاء شروط السنوات الميلادية الثلاث السابقة. ويُلزم التعميم 333 بطلب شهادة الإعفاء قبل نهاية سنة الاستقرار أو نهاية فبراير التالية لمن يستقر في نوفمبر أو ديسمبر. ويبقى الدخل التركي خاضعاً للقواعد العادية."
        },
        {
          "id": "detail-5",
          "title": "مثال ومستندات التحضير للانتقال الضريبي",
          "body": "شخص يستقر في إسطنبول في سبتمبر مع الاحتفاظ بنشاط ومسكن في الخارج يحتاج إلى دراسة الموطن والاتفاقية وليس مدة البقاء فقط. جهّز جدول الدخول والخروج وإثباتات السكن والأسرة والشهادات الضريبية السابقة والعقود والكشوف ومستندات الدخل. تستطيع Bosphoras تنسيق التواصل مع المختصين في البلدين."
        },
        {
          "id": "practical-1",
          "title": "ما شرائح ضريبة الدخل في تركيا لعام 2026؟",
          "body": "تبدأ الشرائح التصاعدية للدخل غير الناتج عن الرواتب بنسبة 15% حتى 190 ألف ليرة، ثم 20% حتى 400 ألف، و27% حتى مليون، و35% حتى 5.3 ملايين، و40% لما يزيد على ذلك. وبالنسبة إلى الرواتب تمتد شريحة 27% حتى 1.5 مليون بدلاً من مليون ليرة. وتطبق كل نسبة على الجزء الواقع في شريحتها لا على كامل المبلغ.\n\nمثلاً، إذا بلغ صافي الدخل الخاضع للضريبة من غير الرواتب 600 ألف ليرة دون تعديلات أخرى، تكون الضريبة 70,500 ليرة على أول 400 ألف، و54 ألفاً على المبلغ المتبقي، أي 124,500 ليرة إجمالاً. ويتأثر الحساب الفعلي بالخصومات والاقتطاعات والإعفاءات. وتتجدد الشرائح سنوياً."
        },
        {
          "id": "practical-2",
          "title": "الاتفاقية الضريبية لا تعفي الدخل الأجنبي تلقائياً",
          "body": "من ينتقل إلى تركيا ويحتفظ بشقة مؤجرة في فرنسا يواجه سؤالين منفصلين: ما بلد الإقامة لأغراض الاتفاقية، وأي بلد يحق له فرض الضريبة على الإيجار؟ يكون الدخل العقاري عموماً قابلاً للضريبة في بلد موقع العقار، بينما تعتمد المعاملة في بلد الإقامة على الاتفاقية والإعفاءات الداخلية.\n\nعلى مدير الشركة الأجنبية الفصل بين الراتب ومكافأة الإدارة وتوزيعات الأرباح والدخل المهني. وتعالج الاتفاقيات هذه الفئات في مواد مختلفة؛ لذلك فإن تصنيف الإيرادات بدقة أكثر فائدة من تطبيق قاعدة موحدة للأشهر الستة."
        },
        {
          "id": "practical-3",
          "title": "الإقامة الضريبية والرقم الضريبي وتصريح العمل مفاهيم مختلفة",
          "body": "الرقم الضريبي التركي معرّف إداري يفيد في بعض المعاملات المصرفية والعقارية، لكنه لا يثبت الإقامة الضريبية بذاته. يخضع تصريح الإقامة لقواعد الهجرة، وتصريح العمل لشروط مستقلة. ويُحدد الوضع الضريبي وفق المادتين 4 و5 من القانون 193 والاتفاقية المطبقة إذا ادّعت دولتان الإقامة.\n\nقد تقع هذه الأحداث في تواريخ مختلفة. دوّن في جدول واحد تاريخ اتخاذ الموطن والدخول والخروج وبداية عقد الإيجار والنشاط المهني ومواعيد تقديم الإقرارات."
        },
        {
          "id": "practical-4",
          "title": "احسب نتائج انتقالك الضريبي قبل المغادرة",
          "body": "يشمل التحضير الجيد الوضع الأسري والسكن والدخل والأصول حسب البلدان والالتزامات المهنية والتجارية. اجمع الإقرارات السابقة وشهادات الإقامة المتوفرة، ثم صنّف كل مصدر دخل. وإذا كنت تملك شركة، ادرس التزاماتها على نحو مستقل.\n\nتستطيع Bosphoras تنسيق تجهيز المستندات واختيار المستشارين المستقلين في الدول المعنية وإجراءات الانتقال العملية، بهدف فهم النتائج قبل توقيع عقد طويل أو نقل النشاط التجاري."
        }
      ],
      "faqs": [
        {
          "question": "هل يكفي تصريح الإقامة لاكتساب الإقامة الضريبية؟",
          "answer": "لا، تختلف معايير الإقامة الضريبية عن معايير الهجرة."
        },
        {
          "question": "هل البقاء أقل من ستة أشهر يضمن عدم الإقامة الضريبية؟",
          "answer": "لا، قد يكفي وجود موطن في تركيا مع مراعاة الاستثناءات والاتفاقيات."
        },
        {
          "question": "هل يشمل إعفاء 2026 جميع المقيمين؟",
          "answer": "لا، يخص المقيمين الجدد المستوفين لشروط المادة 20/D والدخل الأجنبي المؤهل."
        }
      ],
      "sources": [
        {
          "label": "إدارة الضرائب — المادة 4 من القانون 193",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6991"
        },
        {
          "label": "إدارة الضرائب — الاستثناءات، المادة 5",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/7214"
        },
        {
          "label": "إدارة الضرائب — قانون ضريبة الدخل",
          "href": "https://antalya.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "الجريدة الرسمية — القانون 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "إدارة الضرائب — التعميم 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937",
          "label": "شرائح ضريبة الدخل 2026 — إدارة الضرائب"
        },
        {
          "href": "https://gib.gov.tr/mevzuat/kanun/660/madde/13912",
          "label": "المادة 4 من القانون 7582 — إدارة الضرائب"
        }
      ]
    }
  },
  "health-insurance-expats": {
    "fr": {
      "title": "Assurance santé en Turquie en 2026 : expatriés, ikamet et SGK",
      "metaDescription": "Assurance privée, SGK, couverture familiale et permis de séjour : comparez les garanties, les exclusions et le coût réel de vos soins en Turquie.",
      "shortAnswer": "L'assurance exigée pour le titre de séjour n'est pas nécessairement celle qui protège le mieux votre famille. En Turquie, les expatriés peuvent relever de plusieurs dispositifs : contrat privé pour étrangers, assurance santé privée plus complète, couverture publique SGK ou droits issus d'une convention internationale. Le bon choix dépend de votre statut, de vos besoins médicaux et des établissements que vous utiliserez.",
      "bosphorasHelp": "Vous préparez votre installation ? Bosphoras peut coordonner la comparaison des garanties auprès de professionnels de l'assurance et organiser votre parcours administratif et médical local.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Quelle assurance est acceptée pour l'ikamet ?",
          "body": "La Direction de la migration exige en principe une couverture valable sur la durée demandée. Elle reconnaît notamment les justificatifs SGK, les droits aux soins découlant d'accords bilatéraux et les polices privées répondant aux conditions applicables. Pour une famille, les personnes couvertes doivent correspondre au dossier. Certaines situations prévues par la loi bénéficient d'exceptions, par exemple des soins dont la prise en charge est documentée.\n\nUne police de voyage limitée aux urgences n'est pas interchangeable avec n'importe quelle assurance de résidence. Demandez une attestation mentionnant chaque assuré, les dates exactes de couverture et la conformité au motif de séjour. Une durée de couverture d'un an ne justifie pas automatiquement un permis de deux ans."
        },
        {
          "id": "detail-2",
          "title": "SGK et GSS : comment fonctionne la couverture publique ?",
          "body": "Les salariés régulièrement déclarés peuvent accéder au système de sécurité sociale suivant leur statut. Pour certains étrangers résidant légalement en Turquie, l'affiliation volontaire à l'assurance maladie générale (GSS) peut être accessible après une année de résidence continue, sous conditions de réciprocité et d'absence de couverture étrangère applicable. La demande s'effectue auprès de la SGK locale.\n\nL'affiliation ne signifie pas que tout établissement privé ou tout traitement est intégralement remboursé. Les règles d'éligibilité, la participation financière et les accords des hôpitaux influencent la facture. Il faut distinguer les droits du titulaire et ceux des personnes à charge."
        },
        {
          "id": "detail-3",
          "title": "Assurance privée : lire le contrat comme un patient",
          "body": "Comparez la couverture hospitalière, les consultations ambulatoires, les analyses, l'imagerie, les médicaments, les urgences, les plafonds annuels et le réseau d'établissements. Examinez les délais de carence, les maladies préexistantes, les traitements chroniques, la maternité, le dentaire et la possibilité de renouveler le contrat.\n\nUn plafond global élevé n'a guère d'intérêt si les actes fréquents sont fortement limités ou si votre hôpital n'appartient pas au réseau. Demandez si l'assureur règle directement l'établissement ou si vous devez avancer les frais et demander ensuite un remboursement."
        },
        {
          "id": "detail-4",
          "title": "Familles, enfants et grossesse : anticiper avant le départ",
          "body": "Pour une famille, la pédiatrie, les urgences de nuit et les hospitalisations sont des postes prioritaires. Vérifiez les conditions relatives aux nouveau-nés, aux vaccinations et aux consultations de suivi. Une grossesse déjà commencée peut ne pas être couverte par une nouvelle police ; la maternité peut être soumise à conditions ou délais de carence.\n\nAvant de choisir votre quartier, repérez un hôpital accessible et les médecins dont vous pourriez avoir besoin. Une couverture moins chère mais inutilisable près de votre domicile peut entraîner des dépenses et déplacements supplémentaires."
        },
        {
          "id": "detail-5",
          "title": "Comparer les coûts : un exemple concret",
          "body": "Imaginons deux contrats fictifs : 12 000 TL de prime annuelle avec une participation de 40 % aux soins ambulatoires, contre 22 000 TL avec une participation de 10 %. Pour 40 000 TL de soins ambulatoires intégralement admis, le premier coûte 28 000 TL au total et le second 26 000 TL, hors exclusions et plafonds. La police la moins chère à la souscription n'est donc pas toujours la plus économique.\n\nCe calcul n'est pas un tarif du marché. Pour obtenir une comparaison réelle, utilisez l'âge de chaque assuré, les mêmes garanties, les établissements souhaités et les devis écrits, puis ajoutez les dépenses prévisibles qui restent à votre charge."
        },
        {
          "id": "detail-6",
          "title": "Parcours pratique : de la souscription aux soins",
          "body": "Préparez passeports, dates de séjour, numéro fiscal ou identifiant étranger si disponible, informations de résidence et déclarations médicales demandées par l'assureur. Demandez les conditions écrites et l'attestation avant de payer. Conservez ensuite les numéros d'assistance et les règles de prise en charge.\n\nEn cas d'urgence médicale, le 112 est le numéro d'appel en Turquie. Pour les soins programmés, prenez connaissance du réseau de votre contrat avant le rendez-vous. Bosphoras peut coordonner la recherche de prestataires et les rendez-vous, sans se substituer aux médecins ou à l'assureur."
        },
        {
          "id": "practical-1",
          "title": "Que se passe-t-il lors d'une hospitalisation privée ?",
          "body": "En cas d'intervention programmée, demandez à l'établissement un devis indiquant le médecin, le bloc opératoire, l'anesthésie, les examens, la chambre, les médicaments et les consultations de suivi. Les établissements et assureurs n'utilisent pas tous les mêmes forfaits. Un devis ne constitue pas une confirmation de remboursement : une autorisation préalable écrite peut être nécessaire, notamment pour une hospitalisation. En cas d'urgence, la priorité reste l'accès aux soins."
        },
        {
          "id": "practical-2",
          "title": "Assurance internationale ou contrat local ?",
          "body": "Un contrat international peut être pertinent si vous voyagez fréquemment ou souhaitez être soigné dans plusieurs pays. Comparez le territoire couvert, le rapatriement, les soins dans le pays d'origine, la durée maximale des voyages et les franchises. Un contrat local peut mieux correspondre à un réseau hospitalier turc, mais sa couverture hors de Turquie dépend de ses conditions. Deux polices peuvent être complémentaires ; examinez l'ordre de prise en charge pour éviter les doublons."
        },
        {
          "id": "practical-3",
          "title": "Bien organiser sa première année de couverture",
          "body": "À l'arrivée, choisissez d'abord les garanties correspondant au titre de séjour et à votre état de santé. Notez la date de fin de votre couverture, celle du titre de séjour et le délai de renouvellement. Après une année de résidence continue, si vous envisagez la GSS, demandez le détail des droits et cotisations avant de mettre fin à votre assurance existante. Une interruption de couverture peut entraîner des frais imprévus. Conservez les attestations, ordonnances et factures en un seul dossier."
        }
      ],
      "faqs": [
        {
          "question": "L'assurance pour l'ikamet couvre-t-elle tous les soins ?",
          "answer": "Non. Elle peut satisfaire un critère administratif tout en comportant des plafonds et exclusions importants."
        },
        {
          "question": "Puis-je obtenir la SGK après un an ?",
          "answer": "Certains résidents étrangers peuvent demander la GSS après une année de résidence continue, selon leur couverture étrangère et les autres conditions légales."
        },
        {
          "question": "Comment comparer deux devis ?",
          "answer": "Comparez à garanties, réseau, âge, franchise, coassurance et exclusions identiques, et calculez le coût annuel total."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Direction de la migration — conditions d'assurance"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres de séjour"
        },
        {
          "href": "https://en.goc.gov.tr/kurumlar/goc.gov.tr/files/SGK_KITAPCIK_ing.pdf",
          "label": "Guide officiel SGK pour étrangers"
        }
      ]
    },
    "en": {
      "title": "Health insurance in Turkey 2026: expat cover, residence and SGK",
      "metaDescription": "Compare residence-permit insurance, SGK, private hospital cover, family benefits, exclusions and actual healthcare costs in Turkey.",
      "shortAnswer": "Insurance accepted for a residence permit is not necessarily the best protection for your household. Expats may use an eligible private policy, broader private medical insurance, the SGK public system or rights under international agreements. Start with your legal status and the care you expect to need.",
      "bosphorasHelp": "Bosphoras can coordinate discussions with qualified insurance professionals and practical arrangements for your family's healthcare and residence plans.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Insurance accepted for an ikamet",
          "body": "The migration authority generally requires cover for the requested residence period. Evidence may include recognised SGK coverage, documented healthcare rights under bilateral agreements or a compliant private policy. Family applications require appropriate coverage of the relevant household members. Certain documented medical-treatment cases have statutory exceptions.\n\nAsk for a certificate listing each insured person, effective dates and suitability for the application. A short emergency-only travel policy cannot be assumed to satisfy every residence category, and a one-year policy does not automatically support a two-year permit."
        },
        {
          "id": "detail-2",
          "title": "SGK and general health insurance",
          "body": "Employees properly registered in Turkey may qualify for social security through their employment. Certain foreign residents can apply for voluntary general health insurance (GSS) after continuous residence exceeding one year, subject to reciprocity and the absence of applicable foreign social insurance. Applications are made to the relevant SGK office.\n\nPublic coverage is not a blanket promise of free care at any private hospital. Eligibility, contracted facilities and patient contributions matter. Establish whether dependants qualify separately from the principal insured person."
        },
        {
          "id": "detail-3",
          "title": "How to read a private health policy",
          "body": "Compare inpatient and outpatient care, examinations, laboratory tests, imaging, medicines, emergencies, annual limits and hospital networks. Review waiting periods, pre-existing and chronic conditions, maternity, dental treatment and renewal terms.\n\nA high overall limit offers little value when regular treatments have small sub-limits or your preferred hospital is excluded. Establish whether the insurer settles directly with the hospital or reimburses you afterwards."
        },
        {
          "id": "detail-4",
          "title": "Children, pregnancy and family healthcare",
          "body": "Prioritise paediatrics, overnight emergency access and hospital admissions. Ask about newborn enrolment, vaccinations and follow-up appointments. A pregnancy already under way may not be covered by a newly issued policy; maternity cover may have waiting periods and restrictions.\n\nIdentify a hospital near your intended home and the specialists your family expects to use. The lowest-priced policy can become expensive if it requires frequent travel or substantial out-of-pocket spending."
        },
        {
          "id": "detail-5",
          "title": "Illustrative annual cost comparison",
          "body": "Consider two hypothetical policies: TRY 12,000 annual premium with 40% outpatient coinsurance, versus TRY 22,000 with 10% coinsurance. At TRY 40,000 of fully eligible outpatient treatment, annual premium plus patient contribution is TRY 28,000 for the first and TRY 26,000 for the second, ignoring limits and exclusions.\n\nThese are calculation inputs, not market quotations. Obtain written quotes for matching benefits, ages, hospital networks and expected treatment, then account for excluded costs."
        },
        {
          "id": "detail-6",
          "title": "Getting insured and using the policy",
          "body": "Prepare passports, dates, residence information, tax or foreign identity numbers where available, and requested medical declarations. Obtain the full terms and application certificate before payment. Save assistance contacts and the claims process.\n\nFor a medical emergency in Turkey, call 112. For scheduled care, confirm the network and pre-authorisation rules. Bosphoras can coordinate appointments and introductions without replacing healthcare or insurance professionals."
        },
        {
          "id": "practical-1",
          "title": "What happens during private hospital admission?",
          "body": "For planned procedures, request an itemised quotation for the doctor, theatre, anaesthesia, investigations, room, medicines and follow-up. Hospital packages and insurance benefits do not always match. A quotation is not confirmation of reimbursement; written insurer pre-authorisation may be required, particularly for admission. In a medical emergency, obtaining care comes first."
        },
        {
          "id": "practical-2",
          "title": "International medical cover versus a local policy",
          "body": "International cover can suit frequent travellers or people needing access to care in several countries. Compare territorial scope, evacuation, home-country treatment, maximum trip length and deductibles. A local policy may fit a Turkish hospital network more closely, but cover abroad depends on its terms. If maintaining two policies, establish coordination of benefits to avoid redundant costs."
        },
        {
          "id": "practical-3",
          "title": "Organise your first year of coverage",
          "body": "Initially choose protection appropriate for your residence application and medical circumstances. Record policy expiry, permit expiry and renewal periods. After more than a year of continuous residence, if considering GSS, establish eligibility and contributions before cancelling existing coverage. A gap may leave you with unexpected medical bills. Keep certificates, prescriptions and invoices together."
        }
      ],
      "faqs": [
        {
          "question": "Does ikamet insurance cover every treatment?",
          "answer": "No. Immigration compliance and comprehensive clinical coverage are different."
        },
        {
          "question": "Can I apply for SGK after a year?",
          "answer": "Some foreign residents qualify for GSS after continuous residence exceeding one year, subject to the other legal criteria."
        },
        {
          "question": "How should I compare quotes?",
          "answer": "Use matching benefits, networks, deductibles, coinsurance and exclusions, and calculate annual total cost."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Migration authority — insurance requirements"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://en.goc.gov.tr/kurumlar/goc.gov.tr/files/SGK_KITAPCIK_ing.pdf",
          "label": "Official SGK guide for foreigners"
        }
      ]
    },
    "ru": {
      "title": "Медицинская страховка в Турции 2026: ВНЖ, SGK и семья",
      "metaDescription": "Сравните страховку для ВНЖ, систему SGK и частные полисы: больницы, лимиты, исключения и реальные расходы на лечение.",
      "shortAnswer": "Страховка, подходящая для ВНЖ, не всегда обеспечивает достаточную защиту семьи. Иностранцы могут пользоваться соответствующим частным полисом, расширенным медицинским страхованием, системой SGK или правами по международному соглашению. Выбор зависит от статуса проживания и медицинских потребностей.",
      "bosphorasHelp": "Bosphoras может организовать консультации со специалистами по страхованию и помочь с практическими этапами переезда и медицинского обслуживания.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Какая страховка подходит для ВНЖ?",
          "body": "Миграционная служба, как правило, требует покрытие на весь запрашиваемый срок. Допустимыми подтверждениями могут быть документы SGK, права на медицинскую помощь по двустороннему соглашению или соответствующий частный полис. Для семьи важно включить в покрытие нужных членов. Закон предусматривает исключения для отдельных случаев лечения с подтверждённой оплатой.\n\nЗапросите документ с именами застрахованных, точным сроком и соответствием основанию ВНЖ. Обычная туристическая страховка только от экстренных случаев подходит не всегда."
        },
        {
          "id": "detail-2",
          "title": "SGK и государственное медицинское страхование",
          "body": "Работающие по официальному договору могут получать социальное страхование на основании занятости. Некоторые иностранные резиденты вправе обратиться за добровольным общим медицинским страхованием GSS после непрерывного проживания более года, при соблюдении принципа взаимности и отсутствии применимого иностранного страхования. Заявление подаётся в местное отделение SGK.\n\nГосударственное страхование не означает бесплатное лечение в любой частной больнице. Важны договор учреждения с SGK, доплаты и права членов семьи."
        },
        {
          "id": "detail-3",
          "title": "Что искать в частном полисе",
          "body": "Сравните стационар, амбулаторное лечение, анализы, обследования, лекарства, экстренную помощь, годовые лимиты и сеть больниц. Изучите периоды ожидания, хронические и ранее выявленные заболевания, ведение беременности, стоматологию и условия продления.\n\nВысокий общий лимит мало полезен, если обычные процедуры ограничены отдельными суммами. Уточните, оплачивает ли страховщик счёт напрямую или возмещает расходы после оплаты."
        },
        {
          "id": "detail-4",
          "title": "Дети, беременность и семейная медицина",
          "body": "Для семьи особенно важны педиатрия, круглосуточная неотложная помощь и госпитализация. Уточните условия включения новорождённых, вакцинации и контрольных визитов. Уже наступившая беременность может не покрываться новым договором; для родов возможны сроки ожидания.\n\nДо выбора жилья найдите доступную больницу и необходимых специалистов. Экономия на полисе невыгодна, если приходится далеко ездить или самостоятельно оплачивать большинство визитов."
        },
        {
          "id": "detail-5",
          "title": "Пример сравнения годовых расходов",
          "body": "Допустим, один условный полис стоит 12 000 лир в год с доплатой пациента 40% за амбулаторные услуги, другой — 22 000 лир с доплатой 10%. При полностью покрываемых услугах на 40 000 лир общая сумма составит соответственно 28 000 и 26 000 лир без учёта лимитов и исключений.\n\nЭто пример расчёта, а не рыночные цены. Запрашивайте предложения с одинаковыми условиями, возрастом, сетью клиник и ожидаемым лечением."
        },
        {
          "id": "detail-6",
          "title": "От оформления до визита в клинику",
          "body": "Подготовьте паспорта, сроки пребывания, сведения об адресе, налоговый или иностранный идентификатор при наличии и медицинские сведения, запрашиваемые страховщиком. Получите полный текст условий до оплаты и сохраните контакты поддержки.\n\nПри экстренной медицинской ситуации звоните 112. Для плановых визитов уточните сеть и правила предварительного согласования. Bosphoras может организовать контакты и записи, не заменяя медицинских специалистов и страховщика."
        },
        {
          "id": "practical-1",
          "title": "Как проходит госпитализация в частной клинике?",
          "body": "Для планового вмешательства запросите смету с оплатой врача, операционной, анестезии, обследований, палаты, лекарств и последующих визитов. Пакеты клиники и условия страховщика могут различаться. Смета не подтверждает возмещение: особенно при госпитализации может потребоваться письменное предварительное согласование. В экстренной ситуации приоритетом остаётся получение медицинской помощи."
        },
        {
          "id": "practical-2",
          "title": "Международная или местная страховка?",
          "body": "Международный полис может подойти при частых поездках или лечении в нескольких странах. Сравните территорию действия, эвакуацию, лечение в стране происхождения, допустимую длительность поездок и франшизу. Местный полис может лучше соответствовать сети турецких больниц, но покрытие за рубежом определяется договором. При наличии двух полисов уточните порядок возмещения."
        },
        {
          "id": "practical-3",
          "title": "Как организовать первый год страхования",
          "body": "Выберите полис с учётом основания ВНЖ и здоровья. Запишите сроки действия страховки и ВНЖ и даты продления. После непрерывного проживания более года, если планируете GSS, выясните права и взносы до отмены действующего полиса. Перерыв в покрытии может привести к непредвиденным расходам. Храните справки, рецепты и счета вместе."
        }
      ],
      "faqs": [
        {
          "question": "Покрывает ли страховка для ВНЖ любое лечение?",
          "answer": "Нет. Соответствие миграционным требованиям и полнота медицинского покрытия — разные вещи."
        },
        {
          "question": "Доступна ли SGK после года проживания?",
          "answer": "Отдельные категории иностранцев могут обратиться за GSS после непрерывного проживания более года при соблюдении остальных условий."
        },
        {
          "question": "Как сравнить два предложения?",
          "answer": "Сравнивайте сеть, лимиты, доплаты, исключения и общие годовые расходы при одинаковых гарантиях."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Миграционная служба — условия страхования"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://en.goc.gov.tr/kurumlar/goc.gov.tr/files/SGK_KITAPCIK_ing.pdf",
          "label": "Официальное руководство SGK для иностранцев"
        }
      ]
    },
    "ar": {
      "title": "التأمين الصحي في تركيا 2026: الإقامة والتأمين الحكومي والخاص",
      "metaDescription": "قارن التأمين المناسب للإقامة في تركيا والتغطية الحكومية SGK والخاصة، وتكاليف العلاج وشروط تغطية الأسرة.",
      "shortAnswer": "قد يفي التأمين بمتطلبات تصريح الإقامة دون أن يوفر الحماية الطبية التي تحتاجها الأسرة. يمكن للمقيمين الأجانب الاستفادة من وثائق خاصة مناسبة أو تغطية طبية أوسع أو نظام SGK أو حقوق بموجب اتفاقيات دولية. يعتمد الاختيار على وضع الإقامة والاحتياجات الصحية.",
      "bosphorasHelp": "تستطيع Bosphoras تنسيق التواصل مع مختصي التأمين وترتيبات الرعاية الصحية والإقامة بما يتناسب مع احتياجات أسرتك.",
      "sections": [
        {
          "id": "detail-1",
          "title": "ما التأمين المقبول لتصريح الإقامة؟",
          "body": "تشترط إدارة الهجرة عموماً تغطية صالحة طوال مدة الإقامة المطلوبة. ويمكن إثباتها عبر وثائق SGK المعترف بها أو الحقوق الصحية بموجب اتفاقيات ثنائية أو وثيقة خاصة مطابقة للشروط. وفي ملف الأسرة يجب أن تشمل التغطية الأشخاص المعنيين. توجد استثناءات قانونية لبعض حالات العلاج الموثقة التكاليف.\n\nاحصل على شهادة توضح أسماء المؤمن عليهم والتواريخ ومدى ملاءمتها لنوع الإقامة. لا تفترض أن تأمين السفر المخصص للطوارئ يفي بجميع متطلبات الإقامة."
        },
        {
          "id": "detail-2",
          "title": "نظام SGK والتأمين الصحي العام",
          "body": "قد يحصل الموظفون المسجلون رسمياً على التغطية الاجتماعية المرتبطة بالعمل. ويمكن لبعض المقيمين الأجانب التقدم للتأمين الصحي العام GSS بعد إقامة متواصلة تتجاوز سنة، وفق شروط المعاملة بالمثل وعدم وجود تغطية أجنبية سارية. يقدم الطلب إلى مكتب SGK المختص.\n\nلا يعني التأمين العام أن العلاج مجاني في كل مستشفى خاص. تؤثر اتفاقيات المستشفيات والمساهمات المالية وأهلية أفراد الأسرة في التغطية."
        },
        {
          "id": "detail-3",
          "title": "كيف تقرأ وثيقة التأمين الخاص؟",
          "body": "قارن التنويم والعلاج الخارجي والفحوصات والتصوير والأدوية والطوارئ والحدود السنوية وشبكة المستشفيات. راجع مدد الانتظار والأمراض السابقة والمزمنة والحمل والأسنان وشروط التجديد.\n\nلا يفيد الحد السنوي المرتفع إذا كانت الخدمات المتكررة مقيدة بحدود صغيرة أو إذا لم يشمل العقد مستشفاك. اسأل هل يسدد المؤمن الفاتورة مباشرة أم تدفعها ثم تطلب التعويض."
        },
        {
          "id": "detail-4",
          "title": "الأطفال والحمل والرعاية الأسرية",
          "body": "تشمل أولويات الأسرة طب الأطفال والطوارئ الليلية والتنويم. اسأل عن إضافة المواليد والتطعيمات وزيارات المتابعة. وقد لا تشمل الوثيقة الجديدة حملاً بدأ بالفعل، وقد تفرض تغطية الولادة مدة انتظار.\n\nقبل اختيار السكن، حدد مستشفى قريباً والأطباء الذين تحتاجهم الأسرة. قد يؤدي التأمين الرخيص إلى مصاريف إضافية إذا تطلب التنقل أو الدفع الذاتي المتكرر."
        },
        {
          "id": "detail-5",
          "title": "مثال حسابي للتكلفة السنوية",
          "body": "لنفترض وثيقتين افتراضيتين: الأولى بقسط 12 ألف ليرة ومساهمة المريض بنسبة 40% في العلاج الخارجي، والثانية بقسط 22 ألفاً ومساهمة 10%. إذا بلغت الخدمات المؤهلة بالكامل 40 ألف ليرة، تصبح التكلفة الإجمالية 28 ألفاً للأولى و26 ألفاً للثانية دون حساب الحدود والاستثناءات.\n\nهذه أرقام توضيحية وليست أسعار السوق. اطلب عروضاً مكتوبة تتطابق في الضمانات والأعمار وشبكة المستشفيات والخدمات المتوقعة."
        },
        {
          "id": "detail-6",
          "title": "من الاشتراك إلى الاستفادة من العلاج",
          "body": "جهز جوازات السفر ومدة الإقامة والعنوان والرقم الضريبي أو رقم هوية الأجنبي عند توفره والإقرارات الطبية المطلوبة. احصل على الشروط الكاملة قبل الدفع واحتفظ بأرقام المساعدة وطريقة طلب التعويض.\n\nفي الطوارئ الطبية اتصل بالرقم 112 في تركيا. وللعلاج المجدول راجع الشبكة ومتطلبات الموافقة المسبقة. تستطيع Bosphoras تنسيق المواعيد والتواصل دون الحلول محل الأطباء أو شركات التأمين."
        },
        {
          "id": "practical-1",
          "title": "كيف تتم الإقامة في مستشفى خاص؟",
          "body": "للإجراءات المجدولة اطلب عرضاً مفصلاً يشمل الطبيب وغرفة العمليات والتخدير والفحوصات والغرفة والأدوية والمتابعة. قد تختلف باقات المستشفى عن مزايا التأمين. لا يعد عرض السعر تأكيداً للتعويض، وقد تلزم موافقة مسبقة مكتوبة خصوصاً للتنويم. وفي الطوارئ تبقى الأولوية للحصول على الرعاية."
        },
        {
          "id": "practical-2",
          "title": "التأمين الدولي أم المحلي؟",
          "body": "قد يناسب التأمين الدولي من يسافر كثيراً أو يحتاج العلاج في بلدان متعددة. قارن النطاق الجغرافي والإجلاء الطبي والعلاج في بلد الأصل والمدة القصوى للرحلات والتحمل المالي. وقد تناسب الوثيقة المحلية شبكة المستشفيات التركية بصورة أفضل، وفق شروط التغطية خارج تركيا. عند وجود وثيقتين تحقق من تنسيق التعويض لتجنب الازدواج."
        },
        {
          "id": "practical-3",
          "title": "تنظيم السنة الأولى من التغطية",
          "body": "اختر تأميناً يناسب طلب الإقامة وحالتك الصحية، ودوّن انتهاء الوثيقة والإقامة ومواعيد التجديد. وبعد أكثر من سنة من الإقامة المتواصلة، إذا كنت تفكر في GSS، فحدد الأهلية والاشتراكات قبل إلغاء وثيقتك الحالية. قد يؤدي انقطاع التغطية إلى فواتير غير متوقعة. احتفظ بالشهادات والوصفات والفواتير في ملف واحد."
        }
      ],
      "faqs": [
        {
          "question": "هل يغطي تأمين الإقامة جميع العلاجات؟",
          "answer": "لا، تختلف المطابقة الإدارية عن التغطية الطبية الشاملة."
        },
        {
          "question": "هل يمكن طلب SGK بعد سنة؟",
          "answer": "يمكن لبعض الأجانب طلب GSS بعد إقامة متواصلة تتجاوز سنة عند استيفاء بقية الشروط."
        },
        {
          "question": "كيف أقارن عرضين؟",
          "answer": "قارن الشبكة والحدود والمساهمات والاستثناءات والتكلفة السنوية على أساس ضمانات متماثلة."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "إدارة الهجرة — شروط التأمين"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع تصاريح الإقامة"
        },
        {
          "href": "https://en.goc.gov.tr/kurumlar/goc.gov.tr/files/SGK_KITAPCIK_ing.pdf",
          "label": "الدليل الرسمي للتأمينات الاجتماعية للأجانب"
        }
      ]
    }
  },
  "company-setup-foreigner": {
    "fr": {
      "title": "Créer une société en Turquie en 2026 : capital, fiscalité et permis",
      "metaDescription": "SARL ou société anonyme, capital de 50 000 TL ou 250 000 TL, MERSİS, impôts et permis de travail : le guide pour entrepreneurs étrangers.",
      "shortAnswer": "Un étranger peut généralement détenir seul une société turque, sans associé local obligatoire dans les secteurs ouverts. Le choix entre limited şirket et anonim şirket doit toutefois découler de l'activité, du financement, du rôle du dirigeant et du besoin éventuel de travailler en Turquie.",
      "bosphorasHelp": "Bosphoras coordonne la préparation du projet, les rendez-vous avec les professionnels indépendants et les démarches locales liées à l'implantation de votre entreprise.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Limited ou anonim : quelle structure choisir ?",
          "body": "La limited şirket (Ltd. Şti.) accepte de un à cinquante associés et exige un capital minimal de 50 000 TL. L'anonim şirket (A.Ş.) peut être constituée par un seul actionnaire et son capital minimal ordinaire est de 250 000 TL. Ces seuils s'appliquent aux créations depuis janvier 2024. L'A.Ş. est souvent étudiée lorsqu'une entrée de nouveaux actionnaires ou une gouvernance plus structurée est envisagée.\n\nPour une A.Ş. ordinaire, au moins 25 % du capital souscrit doivent généralement être libérés avant l'immatriculation et le solde sous 24 mois. Une limited peut libérer son capital sous 24 mois. Le capital n'est pas un honoraire de création : il reste un financement de la société."
        },
        {
          "id": "detail-2",
          "title": "Immatriculation : la procédure MERSİS",
          "body": "Définissez l'objet social, l'adresse, les associés, le capital et les pouvoirs de représentation. Les statuts sont préparés dans le système central MERSİS, puis l'inscription est traitée par le registre du commerce compétent. Pour un associé étranger, préparez le passeport, les traductions et, selon le cas, les documents de la société mère ou la procuration dûment légalisés.\n\nAprès immatriculation, organisez le numéro fiscal, les livres et obligations comptables, la banque et l'inscription sociale lorsque nécessaire. Le guichet peut réaliser l'inscription rapidement une fois le dossier complet ; cela ne signifie pas que la banque, les licences sectorielles et le fonctionnement commercial sont opérationnels le même jour."
        },
        {
          "id": "detail-3",
          "title": "Combien paie une société turque ?",
          "body": "Le taux général de l'impôt sur les sociétés est de 25 %, avec des régimes et taux particuliers. La TVA ordinaire est de 20 % ; certaines catégories relèvent de 10 % ou 1 %. La TVA collectée et la TVA déductible sont distinctes de l'impôt sur les bénéfices.\n\nSi une société dispose d'un bénéfice imposable de 1 000 000 TL au taux général, l'impôt brut est de 250 000 TL avant crédits et dispositions spécifiques. Le bénéfice après impôt n'est pas automatiquement le revenu net de l'associé : salaire, dividendes, retenues, charges sociales et éventuelle convention fiscale doivent être distingués."
        },
        {
          "id": "detail-4",
          "title": "Être associé et travailler sont deux choses différentes",
          "body": "Créer une société avec 50 000 TL ne donne pas automatiquement un permis de travail. Pour les associés étrangers actifs relevant des critères généraux du ministère du Travail, la part individuelle et le capital libéré de la société doivent notamment atteindre 500 000 TL, avec au moins 20 % du capital détenu. Le critère de cinq salariés turcs s'applique en principe à partir du septième mois du premier permis. Une participation d'au moins 100 000 USD peut dispenser de ces critères spécifiques ; d'autres exceptions existent.\n\nLe rôle d'associé passif et celui de gérant actif doivent donc être définis dès l'origine. Une immatriculation économique n'est pas une autorisation personnelle de travail."
        },
        {
          "id": "detail-5",
          "title": "Budget de démarrage et trésorerie",
          "body": "Prévoyez séparément capital, frais d'immatriculation, traduction, comptabilité, éventuel local, assurance, paie et trésorerie d'exploitation. Exemple hypothétique : 500 000 TL de capital libéré, puis 70 000 TL de dépenses mensuelles réelles exigeraient une gestion rigoureuse du financement. Si le capital est entièrement disponible, ces dépenses représenteraient environ sept mois de trésorerie avant recettes, sans compter les autres coûts.\n\nCet exemple n'est pas un devis. Un commerce avec stock et salariés a un besoin différent d'une société de conseil. Faites établir un budget de six à douze mois et distinguez capital immobilisé, fonds réellement disponibles et charges récurrentes."
        },
        {
          "id": "detail-6",
          "title": "Banque, facturation et activité internationale",
          "body": "La banque peut demander les statuts, les pouvoirs des signataires, l'identité des bénéficiaires effectifs, l'origine des fonds et le modèle économique. Préparez également contrats, factures, devis, pays des clients et fournisseurs. Le compte professionnel doit rester distinct des dépenses personnelles.\n\nUne société turque facturant à l'étranger ne bénéficie pas automatiquement d'une exonération. La TVA à l'exportation de services et les dispositifs fiscaux incitatifs répondent à des conditions spécifiques. Un bon projet commence par les flux commerciaux réels, puis adopte la structure qui convient, plutôt que l'inverse."
        },
        {
          "id": "practical-1",
          "title": "Peut-on constituer la société à distance ?",
          "body": "Une procuration peut permettre certaines formalités de constitution, à condition de définir les pouvoirs et de respecter les exigences de traduction et d'authentification. L'actionnaire personne morale étrangère doit documenter son existence, ses décisions et ses signataires. La présence physique peut néanmoins être demandée par une banque ou un interlocuteur administratif. Anticipez ces étapes avant de réserver un déplacement."
        },
        {
          "id": "practical-2",
          "title": "Le coût du personnel et des obligations courantes",
          "body": "Le recrutement entraîne des obligations de paie, de sécurité sociale et de déclarations périodiques. Le coût employeur ne se résume donc pas au salaire net. Faites calculer le coût brut complet de chaque poste, puis ajoutez comptabilité, logiciel de facturation, local et charges de fonctionnement. Un modèle commercial à faible marge peut être viable avec peu de salariés mais ne pas correspondre aux critères du permis de travail d'un dirigeant étranger."
        },
        {
          "id": "practical-3",
          "title": "Un calendrier de démarrage en trois phases",
          "body": "Phase de préparation : secteur, licence éventuelle, actionnaires, statuts, financement et rôle du dirigeant. Phase d'immatriculation : MERSİS, registre, obligations fiscales et sociales. Phase opérationnelle : compte bancaire, contrats clients, facturation, recrutement et permis de travail si nécessaire. Pour une implantation étrangère, nous recommandons de distinguer ces trois jalons afin de ne pas promettre une date de lancement simplement parce que les statuts sont signés."
        }
      ],
      "faqs": [
        {
          "question": "Faut-il un associé turc ?",
          "answer": "Non dans les secteurs ouverts aux investisseurs étrangers, sous réserve des restrictions sectorielles."
        },
        {
          "question": "Quel est le capital minimum d'une limited ?",
          "answer": "50 000 TL pour une nouvelle société ; les conditions d'un permis de travail sont différentes."
        },
        {
          "question": "La création donne-t-elle automatiquement un permis de travail ?",
          "answer": "Non. Les associés actifs peuvent devoir satisfaire les critères du ministère du Travail."
        },
        {
          "question": "Quel est le taux normal de l'impôt sur les sociétés ?",
          "answer": "25 %, hors taux spéciaux et dispositifs applicables."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye — constitution d'entreprise"
        },
        {
          "href": "https://icticaret.ticaret.gov.tr/haberler/anonim-ve-limited-sirketlerde-asgari-sermaye-tutarlari-artirilmistir",
          "label": "Ministère du Commerce — capital minimum"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/tax-guide.aspx",
          "label": "Invest in Türkiye — guide fiscal"
        },
        {
          "href": "https://csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/",
          "label": "Ministère du Travail — critères des permis"
        }
      ]
    },
    "en": {
      "title": "Starting a company in Turkey 2026: capital, tax and work permits",
      "metaDescription": "Compare Turkish LLC and JSC structures, TRY 50,000 and TRY 250,000 minimum capital, MERSIS registration, tax and founder work permits.",
      "shortAnswer": "Foreign investors can generally own a Turkish company without a local partner in open sectors. The choice between an LLC and a JSC should reflect funding, governance, commercial activity and whether the founder will work in Turkey.",
      "bosphorasHelp": "Bosphoras can coordinate your incorporation planning, meetings with independent advisers and local establishment arrangements.",
      "sections": [
        {
          "id": "detail-1",
          "title": "LLC or joint-stock company?",
          "body": "A limited şirket accommodates one to fifty shareholders and requires at least TRY 50,000 in share capital. An ordinary anonim şirket may have a single shareholder and requires TRY 250,000. These incorporation thresholds have applied since January 2024. A JSC may be preferable when planning new shareholders or a more formal governance structure.\n\nAn ordinary JSC generally pays at least a quarter of its subscribed capital before registration and the balance within 24 months. An LLC may pay its subscribed capital within 24 months. Capital is company funding, not an incorporation fee."
        },
        {
          "id": "detail-2",
          "title": "Registration through MERSIS",
          "body": "Define the business purpose, address, ownership, capital and signing powers. Prepare the articles in the central MERSIS system and complete registration at the relevant trade registry. Foreign founders should prepare passports, translations and any duly authenticated parent-company or power-of-attorney documents.\n\nAfter registration, organise tax identification, accounting records, banking and social security registration where applicable. Registration of a complete file can be quick; banking, sector-specific licensing and operational readiness are separate."
        },
        {
          "id": "detail-3",
          "title": "Company tax and VAT",
          "body": "Turkey's ordinary corporate income tax rate is 25%, subject to special rates and incentives. Standard VAT is 20%, with reduced 10% and 1% categories. VAT accounting is separate from profit taxation.\n\nAt TRY 1,000,000 of taxable corporate profit and the standard rate, gross corporate tax is TRY 250,000 before specific reliefs. After-tax company profit is not automatically the shareholder's net personal income: salary, dividend withholding, social contributions and tax treaty treatment differ."
        },
        {
          "id": "detail-4",
          "title": "Ownership does not grant permission to work",
          "body": "Forming an LLC with TRY 50,000 does not automatically confer a work permit. Under the labour ministry's general criteria for active foreign company partners, the individual's capital participation and paid-up corporate capital generally need to reach TRY 500,000, with at least 20% ownership. The five Turkish employee requirement generally applies from month seven of the first permit. A capital participation of at least USD 100,000 can exempt the applicant from these specific criteria; other exemptions exist.\n\nDefine passive ownership and active management separately before incorporating. Registration is not a personal work authorisation."
        },
        {
          "id": "detail-5",
          "title": "Funding and the operating budget",
          "body": "Budget separately for capital, registration, translation, accounting, premises, payroll, insurance and working capital. Illustratively, TRY 500,000 of fully available funding and TRY 70,000 in monthly spending represent around seven months before income and other costs.\n\nThis is a cash-flow example, not a fee quote. A stocked retail business has different funding needs from a consultancy. Build a six- to twelve-month operating forecast and distinguish committed capital from spendable cash."
        },
        {
          "id": "detail-6",
          "title": "Banking, invoicing and international clients",
          "body": "A bank may require the articles, signing mandates, beneficial ownership information, source of funds and an explanation of the business. Prepare contracts, invoices, customer and supplier countries and maintain separate company and personal finances.\n\nForeign customers do not automatically make all company income exempt. Export-of-service VAT treatment and investment incentives have their own conditions. Design the structure around real business activity and flows."
        },
        {
          "id": "practical-1",
          "title": "Can the company be formed remotely?",
          "body": "A properly scoped power of attorney may support incorporation steps, subject to authentication and translation requirements. A foreign corporate shareholder must establish its legal existence, corporate decision and signatory authority. A bank or administrative counterparty may nevertheless request physical attendance. Identify these steps before making travel plans."
        },
        {
          "id": "practical-2",
          "title": "Staffing and ongoing operating costs",
          "body": "Hiring creates payroll, social insurance and reporting obligations; the employer's cost exceeds take-home salary. Calculate the full gross employment cost, then add accounting, invoicing software, premises and running expenses. A low-overhead business may be viable with few employees yet not meet a foreign director's general work permit criteria."
        },
        {
          "id": "practical-3",
          "title": "A three-phase launch plan",
          "body": "Preparation: sector, licences, shareholders, articles, funding and management responsibilities. Registration: MERSIS, trade registry, tax and social security formalities. Operations: banking, customer contracts, invoicing, recruitment and any required work permits. Treat these as separate milestones rather than assuming signed articles mean the business is operational."
        }
      ],
      "faqs": [
        {
          "question": "Is a Turkish shareholder mandatory?",
          "answer": "Not generally in open sectors, subject to sector-specific restrictions."
        },
        {
          "question": "What is the LLC minimum capital?",
          "answer": "TRY 50,000 for new companies; work permit criteria differ."
        },
        {
          "question": "Does incorporation grant a work permit?",
          "answer": "No. Active foreign partners may need to meet separate labour ministry criteria."
        },
        {
          "question": "What is the standard corporate tax rate?",
          "answer": "25%, before specific rates and incentives."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye — incorporation"
        },
        {
          "href": "https://icticaret.ticaret.gov.tr/haberler/anonim-ve-limited-sirketlerde-asgari-sermaye-tutarlari-artirilmistir",
          "label": "Trade Ministry — minimum capital"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/tax-guide.aspx",
          "label": "Invest in Türkiye — tax guide"
        },
        {
          "href": "https://csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/",
          "label": "Labour Ministry — work permit criteria"
        }
      ]
    },
    "ru": {
      "title": "Как открыть компанию в Турции в 2026 году: капитал, налоги, работа",
      "metaDescription": "ООО или АО, капитал 50 000 или 250 000 лир, MERSİS, налоги и разрешение на работу для иностранного учредителя.",
      "shortAnswer": "Иностранный инвестор обычно может самостоятельно владеть турецкой компанией в открытых отраслях. Выбирая между limited şirket и anonim şirket, учитывайте финансирование, управление, вид деятельности и необходимость лично работать в Турции.",
      "bosphorasHelp": "Bosphoras может организовать подготовку проекта, встречи с независимыми консультантами и местные процедуры по открытию бизнеса.",
      "sections": [
        {
          "id": "detail-1",
          "title": "ООО или акционерное общество?",
          "body": "В limited şirket может быть от одного до пятидесяти участников, минимальный капитал — 50 000 лир. Обычная anonim şirket может иметь одного акционера, минимальный капитал — 250 000 лир. Эти пороги действуют для новых компаний с января 2024 года. Акционерное общество стоит рассмотреть при планируемом привлечении инвесторов или более сложной системе управления.\n\nДля обычного АО минимум четверть подписанного капитала обычно вносится до регистрации, остаток — в течение 24 месяцев. ООО может внести капитал в течение 24 месяцев. Капитал — ресурс компании, а не плата за оформление."
        },
        {
          "id": "detail-2",
          "title": "Регистрация через MERSİS",
          "body": "Определите деятельность, адрес, участников, капитал и полномочия подписантов. Устав оформляется в центральной системе MERSİS, затем подаётся в торговый реестр. Иностранному учредителю потребуются паспорт, переводы и при необходимости должным образом заверенные документы материнской компании или доверенность.\n\nПосле регистрации организуйте налоговый учёт, бухгалтерские книги, банк и при необходимости социальное страхование. Регистрация готового пакета может пройти быстро, но банковский счёт, лицензии и начало работы требуют отдельных действий."
        },
        {
          "id": "detail-3",
          "title": "Налог на прибыль и НДС",
          "body": "Общая ставка налога на прибыль компаний составляет 25%, существуют специальные ставки и льготы. Обычный НДС — 20%, для отдельных категорий — 10% или 1%. Учёт НДС отличается от налогообложения прибыли.\n\nПри налогооблагаемой прибыли 1 000 000 лир налог по общей ставке составит 250 000 лир до специальных корректировок. Прибыль после налога не равна чистому доходу владельца: зарплата, дивиденды, удержания, социальные взносы и международные соглашения рассматриваются отдельно."
        },
        {
          "id": "detail-4",
          "title": "Владение компанией и право работать",
          "body": "Регистрация ООО с капиталом 50 000 лир не даёт автоматического разрешения на работу. По общим критериям для работающих иностранных участников их доля капитала и оплаченный капитал компании должны достигать 500 000 лир, при доле участия не менее 20%. Требование пяти турецких работников обычно применяется с седьмого месяца первого разрешения. Доля капитала от 100 000 долларов может освобождать от этих конкретных критериев; существуют и другие исключения.\n\nРазграничивайте пассивное владение и фактическое управление до регистрации. Компания не заменяет персональное разрешение на работу."
        },
        {
          "id": "detail-5",
          "title": "Стартовый бюджет и оборотные средства",
          "body": "Отдельно учитывайте капитал, оформление, переводы, бухгалтерию, помещение, персонал, страхование и оборотные средства. Условно при доступных 500 000 лир и ежемесячных расходах 70 000 лир финансирования хватит примерно на семь месяцев без учёта доходов и иных расходов.\n\nЭто пример движения денежных средств, а не предложение услуг. Розничному бизнесу с товарным запасом нужно иное финансирование, чем консультационной компании. Составьте план на шесть–двенадцать месяцев."
        },
        {
          "id": "detail-6",
          "title": "Банк, счета и зарубежные клиенты",
          "body": "Банк может запросить устав, полномочия подписантов, сведения о конечных владельцах, происхождении средств и бизнес-модели. Подготовьте договоры и счета, список стран клиентов и поставщиков. Отделяйте расходы компании от личных.\n\nИностранный клиент сам по себе не освобождает прибыль от налогов. Правила НДС при экспорте услуг и льготы имеют самостоятельные условия. Структура должна соответствовать реальной деятельности."
        },
        {
          "id": "practical-1",
          "title": "Можно ли зарегистрировать компанию удалённо?",
          "body": "Доверенность с точно определёнными полномочиями может позволить выполнить часть процедур при соблюдении требований заверения и перевода. Иностранному юридическому лицу необходимо подтвердить регистрацию, корпоративное решение и полномочия подписантов. Банк или государственный орган всё же может потребовать личного присутствия. Определите эти этапы заранее."
        },
        {
          "id": "practical-2",
          "title": "Сотрудники и текущие обязательства",
          "body": "Наём персонала влечёт начисление зарплаты, социальные взносы и отчётность. Расход работодателя больше чистой зарплаты сотрудника. Рассчитайте полную стоимость каждого рабочего места, бухгалтерии, выставления счетов, помещения и эксплуатации. Бизнес с небольшим штатом может быть прибыльным, но не соответствовать общим критериям разрешения на работу иностранного директора."
        },
        {
          "id": "practical-3",
          "title": "Три этапа начала работы",
          "body": "Подготовка: отрасль, лицензии, участники, устав, финансирование и обязанности руководства. Регистрация: MERSİS, реестр, налоговые и социальные формальности. Запуск: банк, договоры, счета, персонал и необходимые разрешения на работу. Это разные контрольные точки; подписание устава не означает готовность к коммерческой деятельности."
        }
      ],
      "faqs": [
        {
          "question": "Нужен ли турецкий участник?",
          "answer": "Как правило, нет в открытых отраслях, с учётом отраслевых ограничений."
        },
        {
          "question": "Какой минимальный капитал ООО?",
          "answer": "50 000 лир для новой компании; требования разрешения на работу отличаются."
        },
        {
          "question": "Даёт ли регистрация разрешение на работу?",
          "answer": "Нет. Для работающего иностранного участника действуют отдельные критерии."
        },
        {
          "question": "Какова общая ставка налога на прибыль?",
          "answer": "25% без специальных ставок и льгот."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye — регистрация компании"
        },
        {
          "href": "https://icticaret.ticaret.gov.tr/haberler/anonim-ve-limited-sirketlerde-asgari-sermaye-tutarlari-artirilmistir",
          "label": "Министерство торговли — минимальный капитал"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/tax-guide.aspx",
          "label": "Invest in Türkiye — налоговый справочник"
        },
        {
          "href": "https://csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/",
          "label": "Министерство труда — критерии разрешений"
        }
      ]
    },
    "ar": {
      "title": "تأسيس شركة في تركيا 2026: رأس المال والضرائب وتصريح العمل",
      "metaDescription": "تعرف على الشركة المحدودة والمساهمة، رأس المال 50 أو 250 ألف ليرة، تسجيل MERSİS والضرائب وتصريح عمل المؤسس الأجنبي.",
      "shortAnswer": "يستطيع المستثمر الأجنبي عموماً امتلاك شركة تركية دون شريك محلي في القطاعات المفتوحة. ويعتمد الاختيار بين الشركة المحدودة والمساهمة على التمويل والإدارة والنشاط والحاجة إلى العمل شخصياً في تركيا.",
      "bosphorasHelp": "تنسق Bosphoras إعداد مشروع التأسيس والمواعيد مع المختصين المستقلين والإجراءات المحلية لبدء النشاط.",
      "sections": [
        {
          "id": "detail-1",
          "title": "شركة محدودة أم مساهمة؟",
          "body": "يمكن أن تضم الشركة المحدودة limited şirket من شريك واحد إلى خمسين شريكاً برأس مال أدنى قدره 50 ألف ليرة. ويمكن تأسيس الشركة المساهمة العادية anonim şirket بمساهم واحد ورأس مال أدنى قدره 250 ألف ليرة. تسري هذه الحدود على الشركات الجديدة منذ يناير 2024. وقد تكون المساهمة مناسبة لخطط دخول مستثمرين جدد أو اعتماد إدارة أكثر تنظيماً.\n\nيُدفع عادةً ربع رأس المال المكتتب به في المساهمة العادية قبل التسجيل والباقي خلال 24 شهراً، بينما يمكن دفع رأس مال المحدودة خلال 24 شهراً. رأس المال تمويل للشركة وليس رسم تأسيس."
        },
        {
          "id": "detail-2",
          "title": "التسجيل عبر نظام MERSİS",
          "body": "حدد النشاط والعنوان والشركاء ورأس المال وصلاحيات التوقيع. تُعد الوثائق التأسيسية في النظام المركزي MERSİS ثم تُقدم للسجل التجاري المختص. يحتاج المؤسس الأجنبي إلى جواز السفر والترجمات ووثائق الشركة الأم أو الوكالة المصدقة بحسب الحالة.\n\nبعد التسجيل نظّم الملف الضريبي والسجلات المحاسبية والحساب المصرفي والتأمينات الاجتماعية عند الحاجة. قد يكون تسجيل ملف كامل سريعاً، لكن الحساب البنكي والتراخيص وبدء النشاط إجراءات مستقلة."
        },
        {
          "id": "detail-3",
          "title": "ضريبة أرباح الشركات والقيمة المضافة",
          "body": "المعدل العام لضريبة أرباح الشركات 25% مع وجود معدلات وحوافز خاصة. والمعدل العادي لضريبة القيمة المضافة 20%، مع فئات مخفضة بنسبة 10% و1%. يختلف حساب القيمة المضافة عن ضريبة الأرباح.\n\nإذا بلغ الربح الخاضع للضريبة مليون ليرة، فالضريبة الإجمالية بالمعدل العادي 250 ألف ليرة قبل أي تعديلات خاصة. ولا يمثل الربح بعد الضريبة بالضرورة الدخل الشخصي الصافي للشريك؛ إذ تختلف الرواتب والتوزيعات والاقتطاعات والاشتراكات والاتفاقيات."
        },
        {
          "id": "detail-4",
          "title": "امتلاك الشركة لا يمنح تلقائياً حق العمل",
          "body": "تأسيس شركة محدودة برأس مال 50 ألف ليرة لا يمنح تصريح العمل تلقائياً. وفق المعايير العامة لوزارة العمل للشركاء الأجانب العاملين، ينبغي عادةً أن يبلغ رأس المال المدفوع للشركة ومساهمة الأجنبي 500 ألف ليرة على الأقل، مع حصة لا تقل عن 20%. ويطبق شرط توظيف خمسة أتراك عموماً اعتباراً من الشهر السابع للتصريح الأول. وقد تعفي حصة لا تقل عن 100 ألف دولار من هذين الشرطين المحددين، وتوجد استثناءات أخرى.\n\nلذلك ميّز بين المساهم غير العامل والمدير الذي يمارس النشاط فعلياً قبل التسجيل."
        },
        {
          "id": "detail-5",
          "title": "ميزانية التأسيس والسيولة",
          "body": "افصل رأس المال عن التسجيل والترجمة والمحاسبة والمقر والرواتب والتأمين والسيولة التشغيلية. في مثال افتراضي، توفر 500 ألف ليرة قابلة للاستخدام مع مصاريف شهرية قدرها 70 ألفاً يعني نحو سبعة أشهر من التمويل قبل احتساب الإيرادات والتكاليف الأخرى.\n\nهذا مثال للتدفق النقدي وليس عرض سعر. تختلف متطلبات متجر بمخزون وموظفين عن شركة استشارية؛ ضع توقعات تشغيلية لستة إلى اثني عشر شهراً."
        },
        {
          "id": "detail-6",
          "title": "الحساب المصرفي والفواتير والعمل الدولي",
          "body": "قد يطلب البنك النظام الأساسي وصلاحيات التوقيع وبيانات المستفيد الحقيقي ومصدر الأموال ونموذج النشاط. جهز العقود والفواتير وبلدان العملاء والموردين وافصل حساب الشركة عن المصاريف الشخصية.\n\nوجود عميل أجنبي لا يعفي أرباح الشركة تلقائياً. وتخضع معاملة تصدير الخدمات والحوافز لشروط مستقلة. اختر الهيكل وفق النشاط والتدفقات التجارية الفعلية."
        },
        {
          "id": "practical-1",
          "title": "هل يمكن تأسيس الشركة عن بُعد؟",
          "body": "قد تتيح وكالة محددة الصلاحيات تنفيذ بعض إجراءات التأسيس وفق متطلبات التصديق والترجمة. ويجب على الشركة الأجنبية المساهمة إثبات وجودها القانوني وقرارها وصلاحيات ممثليها. ومع ذلك قد يطلب البنك أو الجهة الإدارية حضوراً شخصياً. حدد هذه المراحل قبل ترتيب السفر."
        },
        {
          "id": "practical-2",
          "title": "تكلفة الموظفين والالتزامات المستمرة",
          "body": "يترتب على التوظيف التزامات الرواتب والتأمينات والإقرارات، لذا تتجاوز تكلفة صاحب العمل صافي راتب الموظف. احسب التكلفة الإجمالية لكل وظيفة ثم أضف المحاسبة وبرامج الفواتير والمقر والتشغيل. قد يكون نشاط قليل الموظفين مجدياً لكنه لا يستوفي المعايير العامة لتصريح عمل المدير الأجنبي."
        },
        {
          "id": "practical-3",
          "title": "خطة إطلاق من ثلاث مراحل",
          "body": "التحضير: القطاع والتراخيص والشركاء والنظام الأساسي والتمويل ودور المدير. التسجيل: MERSİS والسجل والضرائب والتأمينات. التشغيل: البنك والعقود والفواتير والتوظيف وتصاريح العمل اللازمة. افصل بين هذه المراحل ولا تعتبر توقيع وثائق التأسيس دليلاً على جاهزية النشاط."
        }
      ],
      "faqs": [
        {
          "question": "هل يجب وجود شريك تركي؟",
          "answer": "لا عموماً في القطاعات المفتوحة، مع مراعاة القيود القطاعية."
        },
        {
          "question": "ما الحد الأدنى لرأس مال المحدودة؟",
          "answer": "50 ألف ليرة للشركة الجديدة؛ تختلف شروط تصريح العمل."
        },
        {
          "question": "هل يمنح التأسيس تصريح عمل؟",
          "answer": "لا، يخضع الشريك الأجنبي العامل لمعايير مستقلة."
        },
        {
          "question": "ما المعدل العام لضريبة الشركات؟",
          "answer": "25% قبل المعدلات والحوافز الخاصة."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "هيئة الاستثمار — تأسيس الشركات"
        },
        {
          "href": "https://icticaret.ticaret.gov.tr/haberler/anonim-ve-limited-sirketlerde-asgari-sermaye-tutarlari-artirilmistir",
          "label": "وزارة التجارة — الحد الأدنى لرأس المال"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/tax-guide.aspx",
          "label": "هيئة الاستثمار — الدليل الضريبي"
        },
        {
          "href": "https://csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/",
          "label": "وزارة العمل — معايير تصاريح العمل"
        }
      ]
    }
  },
  "dubai-investors-turkey": {
    "fr": {
      "title": "Investir en Turquie depuis Dubaï : immobilier, entreprise et fiscalité",
      "metaDescription": "Diversifiez depuis les Émirats : accord commercial Turquie–EAU, immobilier, change, fiscalité et exemples de rendement net.",
      "shortAnswer": "La Turquie peut compléter une implantation aux Émirats plutôt que la remplacer. Elle offre des perspectives immobilières, industrielles et commerciales différentes. La décision doit reposer sur le rendement net dans votre devise, les droits juridiques acquis et la fiscalité de chaque investissement.",
      "bosphorasHelp": "Bosphoras peut coordonner une étude de votre projet, des visites et des échanges avec les professionnels juridiques, fiscaux et immobiliers concernés.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Un corridor économique entre Turquie et Émirats",
          "body": "L'accord de partenariat économique global CEPA, signé en mars 2023, est entré en vigueur le 1er septembre 2023. Il couvre notamment marchandises, services, règles d'origine et facilitation des investissements. Selon le ministère turc du Commerce, environ 80 % des lignes tarifaires entrent dans le champ des concessions. Cela ne signifie pas que 80 % des marchandises achetées bénéficient automatiquement d'un droit nul.\n\nUn entrepreneur peut rechercher des fournisseurs turcs, une implantation de production ou un partenaire commercial avant de s'engager. Les règles d'origine, le code douanier du produit, la logistique, les contrats et le service après-vente déterminent l'avantage effectif."
        },
        {
          "id": "detail-2",
          "title": "Comparer Dubaï et Istanbul sans confondre les impôts",
          "body": "Aux Émirats, le régime ordinaire de l'impôt sur les sociétés applique en principe 0 % jusqu'à 375 000 AED de bénéfice imposable et 9 % au-delà. Les entreprises de zones franches qualifiées suivent des règles spécifiques. En Turquie, le taux général des sociétés est de 25 %, avant dispositions particulières. Une comparaison doit intégrer substance, coûts, retenues, fiscalité personnelle et conventions.\n\nDistinguez résidence fiscale de l'investisseur, lieu de constitution de la société et lieu de l'activité réelle. Un visa émirien ou un compte à Dubaï ne suffit pas à déterminer le traitement fiscal de tous les revenus."
        },
        {
          "id": "detail-3",
          "title": "Immobilier : analyser le rendement en devise de référence",
          "body": "Exemple hypothétique : achat d'un appartement de 250 000 USD, loyer annuel de 18 000 USD équivalents, 3 000 USD de charges et entretien et 2 000 USD de vacance et gestion. Le rendement brut est de 7,2 %, le rendement opérationnel avant impôt et financement est de 5,2 %, calculé sur le prix seul. En ajoutant les frais d'acquisition, le rendement sur le capital total diminue.\n\nSi le loyer est perçu en livres turques, une dépréciation de cette devise peut réduire votre revenu en AED ou USD même si le montant du loyer augmente en monnaie locale. Comparez le scénario central et un scénario défavorable avec le même horizon."
        },
        {
          "id": "detail-4",
          "title": "Citoyenneté, résidence et propriété : trois droits distincts",
          "body": "La procédure exceptionnelle de citoyenneté par achat immobilier prévoit un seuil de 400 000 USD et une restriction de revente de trois ans, sous réserve de l'éligibilité du bien, des justificatifs et de l'approbation des autorités. Un achat de moindre montant n'ouvre pas automatiquement la citoyenneté et le titre de séjour répond à d'autres critères.\n\nLa propriété se transfère au registre foncier, pas par un simple contrat de réservation. Examinez hypothèques, identité du vendeur, autorisations et paiement avant tout engagement. Pour un investisseur à distance, une procuration précisément définie peut faciliter les démarches sans abandonner le contrôle des décisions."
        },
        {
          "id": "detail-5",
          "title": "Trois stratégies à étudier selon votre profil",
          "body": "Pour un investisseur patrimonial, une acquisition résidentielle doit répondre à un marché locatif identifiable et à un horizon de sortie réaliste. Pour un entrepreneur, une société de distribution ou de production doit partir de commandes, fournisseurs et coûts d'exploitation documentés. Pour une famille, le choix d'une résidence secondaire implique école, santé, entretien et mobilité.\n\nCes stratégies ne sont pas interchangeables : la rentabilité d'une activité commerciale ne se mesure pas avec le rendement locatif d'un appartement. Construisez pour chacune un budget, une période de détention, un risque de change et une hypothèse de sortie."
        },
        {
          "id": "detail-6",
          "title": "Organiser une première mission d'investissement",
          "body": "Avant le déplacement, définissez le montant total disponible, la devise de référence, le rendement net recherché et la durée. Préparez les justificatifs de l'origine des fonds et identifiez les documents à examiner. Pendant un séjour, privilégiez les réunions préparées avec vendeurs, professionnels indépendants et partenaires opérationnels.\n\nAprès les visites, comparez les offres selon des critères identiques : prix total, droits acquis, charges, revenus réellement documentés et possibilités de sortie. Bosphoras peut centraliser cette organisation et la circulation des documents, sans promettre de rendement ni de décision administrative."
        },
        {
          "id": "practical-1",
          "title": "Le change peut modifier le résultat sans changer le bien",
          "body": "Dans un scénario purement illustratif, un revenu locatif net turc de 600 000 TL représente 15 000 USD à un taux de 40 TL par dollar. Si le taux passe à 50 TL par dollar et que le revenu reste identique, il ne représente plus que 12 000 USD, soit une baisse de 20 %. Ce ne sont pas des cours actuels. Le même raisonnement s'applique aux dépenses, au prix de revente et au rapatriement des revenus."
        },
        {
          "id": "practical-2",
          "title": "Étudier un fournisseur ou un projet industriel",
          "body": "Avant d'engager du capital, identifiez le produit, les certifications, la capacité de production, les délais et les références commerciales. Demandez des prix selon les Incoterms, des échantillons et des conditions de paiement. Séparez les coûts à l'usine de la livraison, de l'assurance, du dédouanement et du service après-vente. Une visite d'usine et un contrôle indépendant des documents sont plus instructifs qu'une présentation commerciale seule."
        },
        {
          "id": "practical-3",
          "title": "Financer et suivre un actif à distance",
          "body": "Conservez une documentation complète du prix, du transfert bancaire et des droits acquis. Pour une propriété locative, exigez des relevés de loyers et de charges ; pour une société, suivez les comptes, la trésorerie, les contrats et les pouvoirs de signature. Déterminez qui peut engager des dépenses, dans quelles limites, et comment vous recevez les justificatifs. Un suivi structuré protège la qualité de la décision autant que la sélection initiale."
        }
      ],
      "faqs": [
        {
          "question": "La Turquie est-elle automatiquement fiscalement plus intéressante que Dubaï ?",
          "answer": "Non. Le type de revenu, la résidence, la société et les charges doivent être comparés."
        },
        {
          "question": "Un achat immobilier de 400 000 USD donne-t-il la citoyenneté ?",
          "answer": "Il peut ouvrir la procédure exceptionnelle si toutes les conditions sont remplies ; l'approbation n'est pas automatique."
        },
        {
          "question": "Comment comparer les rendements ?",
          "answer": "Utilisez le revenu net, le capital total engagé, une même devise et des hypothèses de change et de sortie explicites."
        }
      ],
      "sources": [
        {
          "href": "https://www.trade.gov.tr/free-trade-agreements/united-arab-emirates",
          "label": "Ministère du Commerce — accord CEPA"
        },
        {
          "href": "https://tax.gov.ae/en/faq.aspx?keyword=What+are+the+UAE+CT+rates",
          "label": "Autorité fiscale des Émirats — impôt sociétés"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/tax-guide.aspx",
          "label": "Invest in Türkiye — guide fiscal"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Invest in Türkiye — propriété et citoyenneté"
        }
      ]
    },
    "en": {
      "title": "Investing in Turkey from Dubai: property, business and tax",
      "metaDescription": "Explore Türkiye–UAE CEPA, property due diligence, currency risk, tax structure and net-yield examples for Dubai-based investors.",
      "shortAnswer": "Turkey can complement rather than replace a UAE base. It offers different property, manufacturing and trading opportunities. Compare net return in your reference currency, enforceable legal rights and taxation of the actual investment.",
      "bosphorasHelp": "Bosphoras can coordinate project preparation, property visits and meetings with independent legal, tax and property professionals.",
      "sections": [
        {
          "id": "detail-1",
          "title": "The Türkiye–UAE economic corridor",
          "body": "The Comprehensive Economic Partnership Agreement signed in March 2023 took effect on 1 September 2023. It covers goods, services, rules of origin and investment facilitation. The Turkish trade ministry reports that roughly 80% of tariff lines fall within market-access concessions. This is not a blanket zero-duty guarantee for every product.\n\nA business can evaluate Turkish suppliers, manufacturing or distribution partners, starting with product classification, origin, logistics, contracts and after-sales support."
        },
        {
          "id": "detail-2",
          "title": "Comparing corporate tax without mixing regimes",
          "body": "The ordinary UAE corporate tax regime generally applies 0% on taxable profit up to AED 375,000 and 9% above it. Qualifying free-zone entities have specific conditions. Turkey's general corporate rate is 25% before special measures. Compare operating cost, substance, withholding, personal taxation and applicable treaties.\n\nDistinguish the investor's tax residence, corporate registration and actual place of activity. A UAE visa or bank account does not determine taxation of every income stream."
        },
        {
          "id": "detail-3",
          "title": "Calculate property returns in a reference currency",
          "body": "Illustratively, a USD 250,000 apartment producing USD 18,000 equivalent annual rent, with USD 3,000 maintenance and USD 2,000 vacancy and management allowances, yields 7.2% gross and 5.2% operating yield before finance and tax, on purchase price alone. Acquisition costs lower the return on total capital.\n\nWhen rent is collected in Turkish lira, depreciation can reduce AED or USD income even if local-currency rent rises. Compare base and downside scenarios over the same holding period."
        },
        {
          "id": "detail-4",
          "title": "Citizenship, residence and ownership are separate",
          "body": "Exceptional citizenship through property purchase has a USD 400,000 threshold and a three-year resale restriction, subject to property eligibility, documentation and approval. A lower-priced acquisition does not automatically confer citizenship; residence permits follow separate criteria.\n\nTitle transfers at the land registry, not through a booking contract alone. Review liens, seller identity, permits and payment arrangements before commitment. A carefully limited power of attorney can assist a remote investor without surrendering decision control."
        },
        {
          "id": "detail-5",
          "title": "Three investment approaches",
          "body": "A property investor needs identifiable rental demand and a realistic exit. A trading or manufacturing entrepreneur needs documented orders, suppliers and operating costs. A family second-home project must account for schools, healthcare, maintenance and mobility.\n\nThese objectives are not interchangeable. Prepare a budget, holding period, currency exposure and exit assumption for each rather than applying a residential yield benchmark to operating businesses."
        },
        {
          "id": "detail-6",
          "title": "Prepare your first investment visit",
          "body": "Define capital, reference currency, net-return objectives and time horizon before travel. Prepare source-of-funds evidence and a list of documents to obtain. Arrange targeted meetings with sellers, independent advisers and operational partners.\n\nAfter visits, compare total costs, rights obtained, recurring expenses, documented income and exit options. Bosphoras can coordinate the practical process and documents without promising returns or official approvals."
        },
        {
          "id": "practical-1",
          "title": "Currency changes can alter the result without changing the asset",
          "body": "In a purely illustrative calculation, TRY 600,000 annual net rent is USD 15,000 at an exchange rate of TRY 40 per dollar. At TRY 50 per dollar with unchanged rent, it becomes USD 12,000, a 20% reduction. These are not current exchange quotes. Apply the same analysis to expenses, resale value and remittance."
        },
        {
          "id": "practical-2",
          "title": "Evaluating a supplier or industrial project",
          "body": "Identify the product, certifications, capacity, lead times and commercial references before deploying capital. Request prices under defined Incoterms, samples and payment conditions. Separate factory cost from freight, insurance, customs and after-sales service. Site visits and independent documentary checks are more useful than a presentation alone."
        },
        {
          "id": "practical-3",
          "title": "Funding and monitoring an asset remotely",
          "body": "Retain acquisition, bank transfer and ownership documentation. For rental property, require rent and expense statements; for a company, monitor accounts, cash flow, contracts and signing powers. Define spending authority, limits and supporting documentation. Ongoing oversight matters as much as the initial asset selection."
        }
      ],
      "faqs": [
        {
          "question": "Is Turkey automatically more tax-efficient than Dubai?",
          "answer": "No. The income type, residence, company and expenses determine the comparison."
        },
        {
          "question": "Does USD 400,000 in property guarantee citizenship?",
          "answer": "It can support an exceptional application when every requirement is met; approval is not automatic."
        },
        {
          "question": "How should I compare yields?",
          "answer": "Use net income, total invested capital, a common currency and explicit currency and exit assumptions."
        }
      ],
      "sources": [
        {
          "href": "https://www.trade.gov.tr/free-trade-agreements/united-arab-emirates",
          "label": "Trade Ministry — CEPA agreement"
        },
        {
          "href": "https://tax.gov.ae/en/faq.aspx?keyword=What+are+the+UAE+CT+rates",
          "label": "UAE Federal Tax Authority — corporate tax"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/tax-guide.aspx",
          "label": "Invest in Türkiye — tax guide"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Invest in Türkiye — property and citizenship"
        }
      ]
    },
    "ru": {
      "title": "Инвестиции в Турцию из Дубая: недвижимость, бизнес и налоги",
      "metaDescription": "Соглашение Турции и ОАЭ, недвижимость, валютные риски, налоги и пример чистой доходности для инвесторов из Дубая.",
      "shortAnswer": "Турция может стать дополнением к присутствию в ОАЭ, а не его заменой. Недвижимость, производство и торговля предлагают разные возможности. Оценивайте чистую доходность в выбранной валюте, юридические права и налогообложение конкретных вложений.",
      "bosphorasHelp": "Bosphoras может организовать подготовку проекта, просмотры объектов и встречи с независимыми специалистами по праву, налогам и недвижимости.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Экономические связи Турции и ОАЭ",
          "body": "Соглашение CEPA, подписанное в марте 2023 года, вступило в силу 1 сентября 2023 года. Оно охватывает товары, услуги, правила происхождения и содействие инвестициям. По данным министерства торговли Турции, около 80% тарифных позиций включены в сферу уступок. Это не означает нулевую пошлину на каждый товар.\n\nПредпринимателю стоит оценивать поставщиков, производство и дистрибуцию с учётом кода товара, происхождения, логистики, договоров и обслуживания клиентов."
        },
        {
          "id": "detail-2",
          "title": "Сравнение налоговых режимов",
          "body": "В обычном режиме ОАЭ ставка корпоративного налога составляет 0% на налогооблагаемую прибыль до 375 000 дирхамов и 9% сверх этого уровня. Для соответствующих компаний свободных зон действуют особые правила. В Турции общая ставка для компаний — 25% до применения специальных положений.\n\nУчитывайте операционные расходы, фактическую деятельность, удержания, личные налоги и соглашения. Различайте налоговое резидентство инвестора, регистрацию компании и место фактической работы. Виза ОАЭ или счёт в Дубае не определяют налогообложение всех доходов."
        },
        {
          "id": "detail-3",
          "title": "Доходность недвижимости в выбранной валюте",
          "body": "Условный пример: квартира за 250 000 долларов приносит эквивалент 18 000 долларов арендной платы в год. При расходах на содержание 3 000 и резерве на простой и управление 2 000 долларов валовая доходность — 7,2%, операционная до налогов и кредита — 5,2% от цены покупки. Дополнительные расходы приобретения снижают доходность на весь вложенный капитал.\n\nПри оплате аренды в лирах ослабление валюты может сократить доход в долларах или дирхамах даже при росте местной арендной платы. Рассчитайте основной и неблагоприятный сценарии."
        },
        {
          "id": "detail-4",
          "title": "Гражданство, ВНЖ и собственность",
          "body": "Исключительная процедура получения гражданства через недвижимость предусматривает стоимость от 400 000 долларов и ограничение продажи на три года при соблюдении требований и одобрении. Более дешёвая покупка не даёт гражданство автоматически, а ВНЖ регулируется отдельно.\n\nСобственность переходит после регистрации в земельном реестре, а не при бронировании. Проверьте обременения, продавца, разрешения и порядок расчётов. Для удалённого покупателя подходит доверенность с точно ограниченными полномочиями."
        },
        {
          "id": "detail-5",
          "title": "Три инвестиционные стратегии",
          "body": "Для арендной недвижимости нужны понятный спрос и реалистичный срок выхода. Для торговли или производства — подтверждённые заказы, поставщики и операционные расходы. Для семейного второго дома — школы, медицина, содержание и транспорт.\n\nЭти цели различаются. Для каждой определите бюджет, срок владения, валютный риск и сценарий выхода, не оценивая бизнес по показателям арендной квартиры."
        },
        {
          "id": "detail-6",
          "title": "Как организовать первую инвестиционную поездку",
          "body": "До поездки определите объём капитала, валюту расчёта, желаемый чистый доход и горизонт. Подготовьте подтверждение происхождения средств и список документов. Организуйте целевые встречи с продавцами, независимыми консультантами и деловыми партнёрами.\n\nПосле посещений сравните полную стоимость, права, регулярные расходы, подтверждённые доходы и ликвидность. Bosphoras может координировать процесс и документы без обещаний доходности или решений государственных органов."
        },
        {
          "id": "practical-1",
          "title": "Валютный курс влияет на результат без изменения актива",
          "body": "В условном примере чистая аренда 600 000 лир в год равна 15 000 долларов при курсе 40 лир за доллар. При курсе 50 и неизменной сумме аренды это 12 000 долларов, то есть снижение на 20%. Это не текущие котировки. Аналогично оценивайте расходы, цену продажи и перевод доходов."
        },
        {
          "id": "practical-2",
          "title": "Проверка поставщика или промышленного проекта",
          "body": "До вложений определите продукт, сертификаты, мощности, сроки и деловые рекомендации. Запросите цены с указанием Incoterms, образцы и условия оплаты. Отделите заводскую цену от перевозки, страхования, таможни и обслуживания. Посещение производства и независимая проверка документов полезнее одной презентации."
        },
        {
          "id": "practical-3",
          "title": "Финансирование и контроль актива на расстоянии",
          "body": "Сохраняйте документы о цене, банковских переводах и правах собственности. Для аренды требуйте отчёты о поступлениях и расходах; для компании контролируйте счета, деньги, договоры и полномочия. Определите, кто вправе расходовать средства, в каких пределах и как предоставляются подтверждения. Последующий контроль столь же важен, как и выбор актива."
        }
      ],
      "faqs": [
        {
          "question": "Всегда ли Турция выгоднее Дубая по налогам?",
          "answer": "Нет. Важны виды дохода, резидентство, компания и расходы."
        },
        {
          "question": "Гарантирует ли покупка на 400 000 долларов гражданство?",
          "answer": "Она может стать основанием для заявления при соблюдении всех условий, но не гарантирует одобрение."
        },
        {
          "question": "Как сравнить доходность?",
          "answer": "Используйте чистый доход, общие вложения, одинаковую валюту и сценарии курса и продажи."
        }
      ],
      "sources": [
        {
          "href": "https://www.trade.gov.tr/free-trade-agreements/united-arab-emirates",
          "label": "Министерство торговли — соглашение CEPA"
        },
        {
          "href": "https://tax.gov.ae/en/faq.aspx?keyword=What+are+the+UAE+CT+rates",
          "label": "Налоговая служба ОАЭ — корпоративный налог"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/tax-guide.aspx",
          "label": "Invest in Türkiye — налоговый справочник"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Invest in Türkiye — недвижимость и гражданство"
        }
      ]
    },
    "ar": {
      "title": "الاستثمار في تركيا من دبي: العقارات والأعمال والضرائب",
      "metaDescription": "دليل المستثمرين في الإمارات: اتفاقية الشراكة مع تركيا، شراء العقار ومخاطر العملة والضرائب وحساب العائد الصافي.",
      "shortAnswer": "يمكن أن تكمل تركيا وجودك في الإمارات بدلاً من استبداله. فهي تقدم فرصاً عقارية وصناعية وتجارية مختلفة. قيّم العائد الصافي بعملتك المرجعية والحقوق القانونية والضرائب الخاصة بكل استثمار.",
      "bosphorasHelp": "تستطيع Bosphoras تنسيق إعداد المشروع وزيارات العقارات والاجتماعات مع مختصين مستقلين في القانون والضرائب والعقار.",
      "sections": [
        {
          "id": "detail-1",
          "title": "العلاقات الاقتصادية بين تركيا والإمارات",
          "body": "دخلت اتفاقية الشراكة الاقتصادية الشاملة CEPA الموقعة في مارس 2023 حيز التنفيذ في 1 سبتمبر 2023. وتشمل السلع والخدمات وقواعد المنشأ وتسهيل الاستثمار. وتفيد وزارة التجارة التركية بأن نحو 80% من البنود التعريفية تدخل في نطاق التنازلات الخاصة بالنفاذ إلى الأسواق. لا يعني ذلك إعفاء كل سلعة من الرسوم تلقائياً.\n\nيمكن دراسة الموردين والتصنيع والتوزيع في تركيا وفق التصنيف الجمركي والمنشأ والنقل والعقود وخدمة العملاء."
        },
        {
          "id": "detail-2",
          "title": "مقارنة الضرائب دون الخلط بين الأنظمة",
          "body": "يطبق النظام العادي لضريبة الشركات في الإمارات عموماً 0% على الربح الخاضع حتى 375 ألف درهم و9% على ما يزيد. وتخضع شركات المناطق الحرة المؤهلة لشروط خاصة. وفي تركيا يبلغ المعدل العام لضريبة الشركات 25% قبل الأحكام الخاصة.\n\nقارن تكاليف التشغيل والنشاط الفعلي والاقتطاعات والضرائب الشخصية والاتفاقيات. ميّز بين الإقامة الضريبية للمستثمر ومكان تسجيل الشركة وممارسة النشاط. لا تحدد تأشيرة الإمارات أو الحساب البنكي في دبي وحدهما معاملة جميع الإيرادات."
        },
        {
          "id": "detail-3",
          "title": "قياس عائد العقار بالعملة المرجعية",
          "body": "مثال افتراضي: شقة بقيمة 250 ألف دولار بإيجار سنوي يعادل 18 ألف دولار، وصيانة ورسوم ثلاثة آلاف، واحتياطي شغور وإدارة ألفين. العائد الإجمالي 7.2% والتشغيلي قبل الضرائب والتمويل 5.2% محسوباً على سعر الشراء وحده. وتقل النسبة عند إضافة تكاليف الاستحواذ.\n\nإذا كان الإيجار بالليرة التركية فقد يؤدي ضعف العملة إلى انخفاض الإيراد بالدولار أو الدرهم رغم ارتفاع الإيجار المحلي. قارن السيناريو الأساسي والسلبي للفترة نفسها."
        },
        {
          "id": "detail-4",
          "title": "الجنسية والإقامة والملكية حقوق منفصلة",
          "body": "تحدد إجراءات الجنسية الاستثنائية عن طريق شراء العقار قيمة لا تقل عن 400 ألف دولار وقيداً يمنع البيع ثلاث سنوات، مع شروط أهلية العقار والمستندات والموافقة. ولا يمنح الشراء بقيمة أقل الجنسية تلقائياً، إذ تخضع الإقامة لمعايير منفصلة.\n\nتنتقل الملكية بالتسجيل العقاري وليس بمجرد الحجز. راجع الرهون وهوية البائع والتراخيص والدفع. ويمكن لوكالة محددة الصلاحيات أن تسهّل الإجراءات للمستثمر عن بُعد."
        },
        {
          "id": "detail-5",
          "title": "ثلاث استراتيجيات حسب هدفك",
          "body": "يحتاج الاستثمار الإيجاري إلى طلب واضح وخطة خروج واقعية. ويحتاج مشروع التجارة أو التصنيع إلى طلبات وموردين وتكاليف تشغيل موثقة. أما المنزل الثاني للأسرة فيتطلب الاهتمام بالمدارس والرعاية والصيانة والنقل.\n\nتختلف هذه الأهداف؛ أعد ميزانية وفترة احتفاظ ومخاطر عملة وخطة خروج لكل مشروع، بدلاً من قياس نشاط تجاري بعائد شقة مؤجرة."
        },
        {
          "id": "detail-6",
          "title": "تنظيم أول زيارة استثمارية",
          "body": "حدد رأس المال والعملة المرجعية والعائد الصافي المطلوب والأفق الزمني قبل السفر. جهز إثبات مصدر الأموال وقائمة المستندات. رتّب اجتماعات هادفة مع البائعين والمستشارين المستقلين والشركاء التجاريين.\n\nبعد الزيارات قارن التكلفة الكاملة والحقوق والمصاريف المتكررة والإيرادات الموثقة وإمكانات الخروج. تستطيع Bosphoras تنسيق العملية والمستندات دون ضمان عائد أو موافقة حكومية."
        },
        {
          "id": "practical-1",
          "title": "كيف يؤثر الصرف في العائد دون تغير العقار؟",
          "body": "في مثال افتراضي، يعادل صافي إيجار سنوي 600 ألف ليرة مبلغ 15 ألف دولار بسعر 40 ليرة للدولار. وإذا أصبح السعر 50 ليرة مع ثبات الإيجار، يعادل 12 ألف دولار، أي انخفاضاً بنسبة 20%. هذه ليست أسعار صرف حالية. طبق التحليل نفسه على المصروفات وإعادة البيع وتحويل الإيرادات."
        },
        {
          "id": "practical-2",
          "title": "دراسة مورد أو مشروع صناعي",
          "body": "قبل توظيف رأس المال حدد المنتج والشهادات والطاقة الإنتاجية والمواعيد والمراجع التجارية. اطلب أسعاراً وفق شروط Incoterms وعينات وشروط دفع. افصل سعر المصنع عن الشحن والتأمين والجمارك وخدمة ما بعد البيع. زيارة المصنع والفحص المستقل للوثائق أكثر فائدة من العرض التسويقي وحده."
        },
        {
          "id": "practical-3",
          "title": "تمويل الأصل ومتابعته عن بُعد",
          "body": "احتفظ بمستندات الشراء والتحويل البنكي والحقوق المكتسبة. اطلب تقارير الإيجار والمصاريف للعقار، وتابع الحسابات والسيولة والعقود وصلاحيات التوقيع للشركة. حدد من يحق له الإنفاق وحدوده وكيف يقدم المستندات المؤيدة. المتابعة المنظمة لا تقل أهمية عن اختيار الأصل."
        }
      ],
      "faqs": [
        {
          "question": "هل تركيا دائماً أفضل ضريبياً من دبي؟",
          "answer": "لا؛ تتحدد المقارنة بنوع الدخل والإقامة والشركة والتكاليف."
        },
        {
          "question": "هل يضمن شراء عقار بقيمة 400 ألف دولار الجنسية؟",
          "answer": "قد يتيح التقدم للإجراءات الاستثنائية عند استيفاء جميع الشروط، ولا يضمن الموافقة."
        },
        {
          "question": "كيف أقارن العوائد؟",
          "answer": "استخدم الدخل الصافي وإجمالي رأس المال والعملة نفسها مع فرضيات واضحة لسعر الصرف والخروج."
        }
      ],
      "sources": [
        {
          "href": "https://www.trade.gov.tr/free-trade-agreements/united-arab-emirates",
          "label": "وزارة التجارة — اتفاقية الشراكة CEPA"
        },
        {
          "href": "https://tax.gov.ae/en/faq.aspx?keyword=What+are+the+UAE+CT+rates",
          "label": "الهيئة الاتحادية للضرائب — ضريبة الشركات"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/tax-guide.aspx",
          "label": "هيئة الاستثمار — الدليل الضريبي"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "هيئة الاستثمار — العقارات والجنسية"
        }
      ]
    }
  },
  "private-concierge-istanbul": {
    "fr": {
      "title": "Conciergerie privée à Istanbul : voyages d'affaires, familles et VIP",
      "metaDescription": "Organisez vos séjours à Istanbul : transferts, hôtels, rendez-vous, immobilier, interprétariat et accompagnement privé sur mesure.",
      "shortAnswer": "Une conciergerie privée est utile lorsque l'organisation d'un séjour dépasse la simple réservation d'un hôtel. À Istanbul, la coordination des déplacements, rendez-vous, visites et services familiaux peut libérer un temps considérable pour votre projet.",
      "bosphorasHelp": "Transmettez vos dates, le nombre de voyageurs et vos priorités à Bosphoras. Nous pouvons organiser une proposition personnalisée avec les prestataires adaptés et un interlocuteur de coordination.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Préparer votre arrivée : deux aéroports et des trajets différents",
          "body": "Istanbul Airport (IST) se situe sur la rive européenne, Sabiha Gökçen (SAW) sur la rive asiatique. Le choix de l'aéroport doit être rapproché du quartier de séjour. Si la majorité des rendez-vous sont à Levent, Maslak ou Şişli, prévoyez une implantation européenne adaptée aux correspondances. Si les activités sont à Kadıköy ou Ataşehir, la rive asiatique peut éviter des traversées inutiles.\n\nPour un transfert avec enfants, précisez le nombre et l'âge des enfants, les sièges nécessaires, le nombre de bagages et les dimensions particulières. Pour une arrivée professionnelle, transmettez le numéro du vol, le point de rencontre souhaité et l'heure du premier rendez-vous. Le trajet doit tenir compte des aléas réels, pas uniquement de la distance."
        },
        {
          "id": "detail-2",
          "title": "Un séjour professionnel organisé autour de vos objectifs",
          "body": "Pour une mission immobilière, commerciale ou juridique, l'hébergement doit être choisi selon l'agenda et pas seulement selon le prestige. Les quartiers de Levent et Maslak regroupent de nombreux bureaux ; Şişli, Nişantaşı et Beşiktaş permettent de combiner rendez-vous et services. La proximité du M2 peut faciliter les déplacements sur la rive européenne.\n\nAvant le séjour, rassemblez les documents nécessaires à chaque réunion et confirmez les interlocuteurs. Un programme réaliste laisse des plages libres pour les retards de circulation, le déjeuner, la préparation d'une réunion ou un appel à votre siège."
        },
        {
          "id": "detail-3",
          "title": "Exemple de programme : trois jours de mission",
          "body": "Jour d'arrivée : transfert, installation et réunion de cadrage. Deuxième jour : deux ou trois rendez-vous regroupés dans un même secteur, avec du temps entre les visites. Dernier jour : synthèse, documents à réunir, suivi des décisions et transfert de départ. Si une visite immobilière est prévue sur l'autre rive, consacrez-lui une demi-journée dédiée plutôt que de multiplier les traversées.\n\nIl s'agit d'une structure adaptable. Un client venu pour une opération importante bénéficiera davantage de rendez-vous préparés et de documents utilisables que d'un programme surchargé."
        },
        {
          "id": "detail-4",
          "title": "Hôtellerie, expériences et voyages en famille",
          "body": "Pour l'hôtel, comparez emplacement, catégorie de chambre, accès aux transports, conditions d'annulation et services réellement inclus. Une suite peut être pertinente avec enfants ou pour travailler, mais les couchages et la capacité doivent être confirmés. Pour un séjour culturel, regroupez les visites par zone : Sultanahmet pour la ville historique, Karaköy et Galata pour les promenades, le Bosphore pour les expériences sur l'eau.\n\nUn trajet nautique privé dépend des disponibilités, de la capacité du bateau et de la météo. Les restaurants et expériences doivent être confirmés par les prestataires ; la conciergerie coordonne la demande sans présenter une disponibilité non confirmée comme acquise."
        },
        {
          "id": "detail-5",
          "title": "Interprétariat, confidentialité et coordination",
          "body": "Un interprète de liaison peut accompagner une visite ou une réunion, tandis qu'une traduction assermentée répond à des exigences documentaires spécifiques. Une réunion juridique ou médicale mérite un interprète ayant une compétence adaptée. Transmettez le sujet et les éventuels documents utiles à l'avance.\n\nN'envoyez que les informations nécessaires à la prestation. Les passeports et justificatifs financiers ne doivent pas circuler dans des chaînes de messages inutiles. Les engagements commerciaux et paiements doivent rester validés par le client, qui conserve la maîtrise de ses décisions."
        },
        {
          "id": "detail-6",
          "title": "Comment obtenir une proposition claire",
          "body": "Indiquez les dates, aéroports, nombre de personnes, langues, zones de rendez-vous et services nécessaires. Distinguez les réservations déjà confirmées des demandes à organiser. Une proposition utile doit distinguer prestations, conditions d'annulation, prix des prestataires et honoraires de coordination lorsqu'ils s'appliquent.\n\nPour les séjours récurrents et les projets longs, une organisation suivie peut être plus pertinente que des demandes isolées. Bosphoras peut centraliser les informations du séjour et la coordination des intervenants suivant le périmètre convenu."
        },
        {
          "id": "practical-1",
          "title": "Choisir un véhicule adapté au programme",
          "body": "Un transfert simple entre aéroport et hôtel ne nécessite pas la même organisation qu'un véhicule avec chauffeur pour plusieurs rendez-vous. Pour la journée, précisez les points d'arrêt, la durée prévue, les heures d'attente et les éventuels déplacements hors d'Istanbul. Demandez si les péages, parkings et heures supplémentaires sont inclus. Pour un groupe, le volume des bagages doit être compatible avec le véhicule même si le nombre de sièges est suffisant."
        },
        {
          "id": "practical-2",
          "title": "Gérer un imprévu sans désorganiser le séjour",
          "body": "Un retard de vol peut décaler le transfert et une réunion ; une activité sur le Bosphore peut être modifiée par la météo. Prévoyez dès la réservation les règles de report, d'annulation et les interlocuteurs à prévenir. Lorsque plusieurs réservations dépendent l'une de l'autre, un calendrier partagé et des coordonnées de contact fiables réduisent les risques de rendez-vous manqués."
        },
        {
          "id": "practical-3",
          "title": "Transformer un séjour de repérage en projet concret",
          "body": "Pour un investissement ou une installation, le résultat d'un séjour peut être un dossier pratique : quartier retenu, critères de logement, professionnels rencontrés, documents obtenus, montants à confirmer et prochaines décisions. Gardez cette synthèse séparée des réservations touristiques. Vous pourrez ainsi reprendre le projet à distance après le départ, avec un interlocuteur qui connaît déjà vos besoins."
        }
      ],
      "faqs": [
        {
          "question": "Faut-il réserver un hôtel avant de vous contacter ?",
          "answer": "Non. L'adresse peut être choisie en fonction de l'agenda et des déplacements."
        },
        {
          "question": "La conciergerie peut-elle organiser des rendez-vous professionnels ?",
          "answer": "Elle peut coordonner les demandes, les disponibilités confirmées, les trajets et l'interprétariat selon le projet."
        },
        {
          "question": "Les réservations sont-elles garanties ?",
          "answer": "Seules les confirmations effectives du prestataire font foi ; les demandes restent soumises à disponibilité."
        }
      ],
      "sources": [
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M2",
          "label": "Metro Istanbul — M2 et correspondances"
        },
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M4",
          "label": "Metro Istanbul — accès à Sabiha Gökçen"
        }
      ]
    },
    "en": {
      "title": "Private concierge in Istanbul: business trips, families and VIP stays",
      "metaDescription": "Plan Istanbul airport transfers, hotels, meetings, property visits, interpreters and personalised private travel coordination.",
      "shortAnswer": "A private concierge becomes useful when a stay involves more than a hotel booking. In Istanbul, coordinating travel, meetings, visits and family arrangements can free up time for the purpose of your trip.",
      "bosphorasHelp": "Share your dates, traveller numbers and priorities with Bosphoras so we can coordinate a suitable proposal within the agreed service scope.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Arrival planning and Istanbul's two airports",
          "body": "Istanbul Airport (IST) is on the European side, Sabiha Gökçen (SAW) on the Asian side. Choose arrival logistics relative to your accommodation and agenda. European-side meetings in Levent, Maslak or Şişli may favour a well-connected European base. Kadıköy and Ataşehir activities may be easier from the Asian side.\n\nFor transfers with children, specify child ages, required seats, luggage and special dimensions. For business arrivals, give the flight number, meeting point and first appointment time. Plan for actual traffic rather than distance alone."
        },
        {
          "id": "detail-2",
          "title": "Build a business stay around the agenda",
          "body": "For a property, trading or legal mission, choose the hotel around appointments rather than prestige. Levent and Maslak contain many offices; Şişli, Nişantaşı and Beşiktaş combine services with central locations. Access to M2 can help on the European side.\n\nPrepare documents and confirm participants before travel. Keep spaces in the schedule for traffic, lunch, meeting preparation or calls rather than filling every hour."
        },
        {
          "id": "detail-3",
          "title": "A practical three-day mission",
          "body": "Arrival day: transfer, check-in and an initial briefing. Second day: two or three appointments grouped in the same area with time between them. Final day: review decisions, documents and follow-up tasks before departure. If a property visit is on the opposite side of the Bosphorus, dedicate a half-day to that area rather than crossing repeatedly.\n\nAdapt this framework to the purpose of the visit. A focused business trip benefits more from prepared meetings and actionable documents than an overloaded schedule."
        },
        {
          "id": "detail-4",
          "title": "Hotels, experiences and family stays",
          "body": "Compare hotel location, room category, transport, cancellation terms and included services. Suites may suit families or working travellers, but confirm capacity and bedding. Group sightseeing geographically: Sultanahmet for historic sites, Karaköy and Galata for walks, the Bosphorus for water-based experiences.\n\nPrivate boat trips depend on availability, vessel capacity and weather. Restaurants and experiences require provider confirmation; a request is not a secured reservation until confirmed."
        },
        {
          "id": "detail-5",
          "title": "Interpreting, discretion and coordination",
          "body": "A liaison interpreter can accompany meetings, whereas certified translation serves specific documentary purposes. Legal and medical meetings call for appropriate subject competence. Share the topic and relevant documents in advance.\n\nProvide only information necessary to the task. Avoid circulating passports or financial records through unnecessary message chains. Keep commercial commitments and payments subject to the client's decision."
        },
        {
          "id": "detail-6",
          "title": "What to include in a concierge request",
          "body": "Provide dates, airports, guest numbers, languages, meeting areas and services requested. Separate existing bookings from new requirements. A clear proposal distinguishes services, cancellations, provider costs and coordination fees where applicable.\n\nFor recurring stays, coordinated support may be more useful than disconnected requests. Bosphoras can centralise itinerary information and provider coordination within the agreed scope."
        },
        {
          "id": "practical-1",
          "title": "Choose a vehicle for the actual itinerary",
          "body": "An airport-to-hotel transfer differs from a chauffeur booking for several meetings. For a day booking, specify stops, expected duration, waiting periods and travel outside Istanbul. Establish whether tolls, parking and overtime are included. For groups, luggage volume must fit the vehicle even if the seat count is adequate."
        },
        {
          "id": "practical-2",
          "title": "Handle disruption without losing the itinerary",
          "body": "Flight delays may shift transfers and meetings; weather can affect Bosphorus activities. Establish rebooking and cancellation rules and contacts when arranging services. When bookings depend on one another, a shared schedule and reliable contact information help reduce missed appointments."
        },
        {
          "id": "practical-3",
          "title": "Turn a scouting trip into an actionable project",
          "body": "The outcome of an investment or relocation visit can be a practical file: shortlisted district, property criteria, advisers met, documents received, amounts to confirm and next decisions. Keep this separate from leisure bookings. It enables the project to continue remotely after departure with a coordinator familiar with your priorities."
        }
      ],
      "faqs": [
        {
          "question": "Do I need to book a hotel first?",
          "answer": "No. Accommodation can be chosen around your itinerary."
        },
        {
          "question": "Can a concierge arrange business meetings?",
          "answer": "It can coordinate requests, confirmed appointments, journeys and interpreting within the project scope."
        },
        {
          "question": "Are requests guaranteed?",
          "answer": "No. Bookings depend on actual confirmations from providers."
        }
      ],
      "sources": [
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M2",
          "label": "Metro Istanbul — M2 connections"
        },
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M4",
          "label": "Metro Istanbul — Sabiha Gökçen access"
        }
      ]
    },
    "ru": {
      "title": "Частный консьерж в Стамбуле: деловые поездки, семьи и VIP",
      "metaDescription": "Трансферы, отели, деловые встречи, просмотры недвижимости, переводчики и индивидуальная организация поездки в Стамбул.",
      "shortAnswer": "Частная консьерж-служба полезна, когда поездка включает не только бронирование отеля. В Стамбуле согласование транспорта, встреч, просмотров и семейных дел помогает освободить время для основной цели визита.",
      "bosphorasHelp": "Сообщите Bosphoras даты, число гостей и приоритеты. Мы можем организовать подходящее предложение в рамках согласованного объёма услуг.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Два аэропорта: как планировать приезд",
          "body": "Аэропорт Стамбул (IST) находится на европейской стороне, Сабиха Гёкчен (SAW) — на азиатской. Сопоставьте аэропорт с местом проживания и встречами. Для Левента, Маслака и Шишли удобна европейская сторона; для Кадыкёя и Аташехира — азиатская, чтобы избежать лишних переездов через пролив.\n\nПри поездке с детьми укажите их возраст, необходимые кресла и объём багажа. Для делового прилёта сообщите номер рейса, точку встречи и время первого мероприятия. Учитывайте реальное движение, а не только расстояние."
        },
        {
          "id": "detail-2",
          "title": "Деловая поездка вокруг рабочих задач",
          "body": "Для сделки с недвижимостью, переговоров или юридической встречи выбирайте отель в соответствии с расписанием. В Левенте и Маслаке много офисов, Шишли, Нишанташи и Бешикташ удобны для сочетания встреч и городских услуг. Близость M2 помогает на европейской стороне.\n\nЗаранее соберите документы и подтвердите участников встреч. Оставьте время на пробки, обед и подготовку, вместо того чтобы заполнять расписание без перерывов."
        },
        {
          "id": "detail-3",
          "title": "Пример трёхдневной деловой программы",
          "body": "В день приезда — трансфер, размещение и установочная встреча. Во второй день — две или три встречи в одном районе с запасом времени. В последний — подведение итогов, перечень документов, дальнейшие действия и трансфер. Если объект находится на другом берегу, лучше выделить полдня, чем многократно пересекать Босфор.\n\nПрограмму следует адаптировать под задачу. Для серьёзной сделки полезнее подготовленные встречи и результаты, чем перегруженный график."
        },
        {
          "id": "detail-4",
          "title": "Отели, впечатления и поездки с детьми",
          "body": "Сравните район отеля, категорию номера, транспорт, отмену и включённые услуги. Люкс может быть удобен семье или для работы, но уточните спальные места и вместимость. Группируйте экскурсии по районам: Султанахмет для исторических памятников, Каракёй и Галата для прогулок, Босфор для водных маршрутов.\n\nЧастная прогулка на катере зависит от наличия судна, вместимости и погоды. Рестораны и другие услуги требуют подтверждения исполнителя; запрос не равен бронированию."
        },
        {
          "id": "detail-5",
          "title": "Переводчики и конфиденциальность",
          "body": "Устный переводчик может сопровождать деловую встречу, тогда как заверенный перевод нужен для отдельных документов. Для медицинских и юридических вопросов важна профильная компетенция. Сообщите тему и необходимые документы заранее.\n\nПередавайте только сведения, необходимые для выполнения задачи. Избегайте лишней пересылки паспортов и финансовых документов. Коммерческие обязательства и платежи сохраняйте под контролем клиента."
        },
        {
          "id": "detail-6",
          "title": "Как получить конкретное предложение",
          "body": "Укажите даты, аэропорты, количество гостей, языки, районы встреч и требуемые услуги. Отделите подтверждённые бронирования от новых запросов. В предложении должны быть понятны услуги, условия отмены, стоимость исполнителей и координационные платежи при их наличии.\n\nДля регулярных поездок единая организация может быть удобнее разрозненных запросов. Bosphoras может координировать маршрут и исполнителей в согласованном объёме."
        },
        {
          "id": "practical-1",
          "title": "Автомобиль под конкретный маршрут",
          "body": "Трансфер аэропорт–отель отличается от аренды машины с водителем для нескольких встреч. Для поездки на день укажите остановки, время, ожидание и выезды за пределы Стамбула. Уточните включение парковки, платных дорог и дополнительного времени. Для группы объём багажа должен соответствовать автомобилю, даже если сидений достаточно."
        },
        {
          "id": "practical-2",
          "title": "Как справляться с изменениями программы",
          "body": "Задержка рейса может сдвинуть трансфер и встречу, погода — прогулку по Босфору. При бронировании уточните правила переноса и отмены и контакты ответственных. Если услуги зависят друг от друга, общий календарь и надёжная связь снижают риск пропущенных встреч."
        },
        {
          "id": "practical-3",
          "title": "Как превратить ознакомительную поездку в проект",
          "body": "Результатом визита для инвестиций или переезда может стать практический файл: выбранные районы, требования к жилью, контакты консультантов, полученные документы, суммы к уточнению и следующие решения. Отделите его от туристических бронирований. После отъезда вы сможете продолжить проект дистанционно с координатором, знакомым с вашими потребностями."
        }
      ],
      "faqs": [
        {
          "question": "Нужно ли заранее бронировать отель?",
          "answer": "Нет. Место проживания можно выбрать по расписанию."
        },
        {
          "question": "Можно ли организовать деловые встречи?",
          "answer": "Консьерж может координировать запросы, подтверждённые встречи, транспорт и переводчиков."
        },
        {
          "question": "Гарантируются ли бронирования?",
          "answer": "Нет. Требуется фактическое подтверждение исполнителя."
        }
      ],
      "sources": [
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M2",
          "label": "Metro Istanbul — линия M2"
        },
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M4",
          "label": "Metro Istanbul — аэропорт Сабихи Гёкчен"
        }
      ]
    },
    "ar": {
      "title": "كونسيرج خاص في إسطنبول: رحلات الأعمال والعائلات وخدمات كبار الزوار",
      "metaDescription": "نظّم رحلتك إلى إسطنبول: الاستقبال من المطار والفنادق والاجتماعات وزيارات العقارات والترجمة والتنسيق الشخصي.",
      "shortAnswer": "تظهر قيمة الكونسيرج الخاص عندما تتجاوز الرحلة مجرد حجز فندق. يساعد تنسيق التنقل والاجتماعات والزيارات واحتياجات الأسرة في إسطنبول على توفير الوقت للهدف الأساسي من السفر.",
      "bosphorasHelp": "أرسل إلى Bosphoras التواريخ وعدد المسافرين والأولويات لننسق مقترحاً ملائماً ضمن نطاق الخدمات المتفق عليه.",
      "sections": [
        {
          "id": "detail-1",
          "title": "اختيار المطار وترتيب الوصول",
          "body": "يقع مطار إسطنبول IST على الضفة الأوروبية وصبيحة كوكجن SAW على الضفة الآسيوية. اربط اختيار المطار بالسكن وجدول الاجتماعات. وقد تناسب الضفة الأوروبية أعمال ليفنت ومسلك وشيشلي، بينما تتيح الضفة الآسيوية سهولة الوصول إلى كاديكوي وأتاشهير.\n\nعند السفر مع الأطفال حدد أعمارهم والمقاعد المطلوبة والأمتعة. ولرحلات الأعمال أرسل رقم الرحلة ونقطة اللقاء وموعد الاجتماع الأول، مع احتساب حركة المرور الفعلية."
        },
        {
          "id": "detail-2",
          "title": "رحلة أعمال تُبنى على جدولك",
          "body": "في زيارات العقار والتجارة والاجتماعات القانونية، اختر الفندق وفق مواعيدك لا وفق الفخامة وحدها. تتركز مكاتب كثيرة في ليفنت ومسلك، وتجمع شيشلي ونيشانتاشي وبشكتاش بين الخدمات والموقع المركزي. وقد يسهل خط M2 التنقل في الجانب الأوروبي.\n\nجهز الوثائق وأكد الحضور قبل السفر. اترك فترات للزحام والغداء والتحضير للاجتماعات بدلاً من ملء كل ساعة من الجدول."
        },
        {
          "id": "detail-3",
          "title": "مثال لبرنامج أعمال من ثلاثة أيام",
          "body": "يوم الوصول: الاستقبال والتسجيل واجتماع تمهيدي. اليوم الثاني: اجتماعان أو ثلاثة في منطقة واحدة مع وقت كافٍ بينها. اليوم الأخير: مراجعة القرارات والمستندات والمتابعة ثم الانتقال للمطار. وإذا كان العقار على الضفة الأخرى، خصص نصف يوم لتلك المنطقة بدلاً من تكرار عبور البوسفور.\n\nالبرنامج قابل للتعديل بحسب هدف الزيارة. الاجتماعات المعدة مسبقاً والمستندات المفيدة أفضل من جدول مزدحم لا يحقق نتائج."
        },
        {
          "id": "detail-4",
          "title": "الفنادق والتجارب والرحلات العائلية",
          "body": "قارن موقع الفندق وفئة الغرفة والمواصلات والإلغاء والخدمات المشمولة. قد يناسب الجناح الأسرة أو العمل، مع تأكيد عدد الأسرّة والسعة. اجمع الزيارات حسب المنطقة: السلطان أحمد للمعالم التاريخية وكاراكوي وغلاتا للمشي والبوسفور للتجارب البحرية.\n\nتعتمد الرحلة البحرية الخاصة على توفر القارب وسعته والطقس. كما تحتاج المطاعم والتجارب إلى تأكيد مقدم الخدمة؛ فالطلب وحده لا يعني أن الحجز مضمون."
        },
        {
          "id": "detail-5",
          "title": "الترجمة والخصوصية والتنسيق",
          "body": "يمكن لمترجم شفهي مرافقة الاجتماعات، بينما تلزم الترجمة المحلفة لأغراض وثائقية محددة. وتتطلب الاجتماعات الطبية والقانونية خبرة مناسبة في المجال. أرسل موضوع الاجتماع والمستندات الضرورية مسبقاً.\n\nشارك البيانات المطلوبة فقط وتجنب تداول جوازات السفر والمستندات المالية دون داعٍ. تبقى القرارات التجارية والدفعات خاضعة لموافقة العميل."
        },
        {
          "id": "detail-6",
          "title": "كيف تحصل على مقترح واضح؟",
          "body": "حدد التواريخ والمطارات وعدد الضيوف واللغات ومناطق الاجتماعات والخدمات المطلوبة. افصل الحجوزات المؤكدة عن الطلبات الجديدة. ويُفترض أن يبين المقترح الخدمات وشروط الإلغاء وأسعار مقدميها ورسوم التنسيق إن وجدت.\n\nفي الرحلات المتكررة قد يكون التنظيم الموحد أفضل من الطلبات المنفصلة. تستطيع Bosphoras تنسيق معلومات الرحلة ومقدمي الخدمات ضمن النطاق المتفق عليه."
        },
        {
          "id": "practical-1",
          "title": "اختيار المركبة المناسبة للبرنامج",
          "body": "يختلف النقل من المطار إلى الفندق عن حجز سيارة بسائق لعدة اجتماعات. حدد المحطات والمدة والانتظار وأي تنقل خارج إسطنبول. اسأل عن شمول رسوم الطرق والمواقف والوقت الإضافي. وفي السفر الجماعي تأكد من مساحة الأمتعة حتى لو كان عدد المقاعد كافياً."
        },
        {
          "id": "practical-2",
          "title": "التعامل مع التغييرات دون تعطيل الرحلة",
          "body": "قد يؤخر تأخر الطائرة النقل والاجتماع، وقد يؤثر الطقس في أنشطة البوسفور. حدد قواعد التعديل والإلغاء وجهات الاتصال عند الحجز. وإذا كانت الخدمات مترابطة، فإن الجدول المشترك ووسائل التواصل الموثوقة تقلل احتمال تفويت المواعيد."
        },
        {
          "id": "practical-3",
          "title": "تحويل زيارة الاستطلاع إلى مشروع عملي",
          "body": "قد تنتج عن زيارة استثمارية أو انتقال قائمة بالأحياء المرشحة ومعايير السكن والمختصين الذين التقيتهم والوثائق المستلمة والمبالغ والقرارات المقبلة. افصل هذا الملف عن الحجوزات السياحية. وهكذا يمكن متابعة المشروع عن بُعد بعد المغادرة مع منسق يعرف أولوياتك."
        }
      ],
      "faqs": [
        {
          "question": "هل يلزم حجز الفندق قبل التواصل؟",
          "answer": "لا، يمكن اختيار السكن وفق جدولك وتنقلاتك."
        },
        {
          "question": "هل يمكن تنسيق اجتماعات الأعمال؟",
          "answer": "يمكن تنسيق الطلبات والمواعيد المؤكدة والنقل والترجمة بحسب المشروع."
        },
        {
          "question": "هل الحجوزات مضمونة؟",
          "answer": "لا، يعتمد الحجز على التأكيد الفعلي من مقدم الخدمة."
        }
      ],
      "sources": [
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M2",
          "label": "مترو إسطنبول — خط M2"
        },
        {
          "href": "https://www.metro.istanbul/en/Hatlarimiz/HatDetay?hat=M4",
          "label": "مترو إسطنبول — الوصول إلى مطار صبيحة"
        }
      ]
    }
  },
  "rent-or-buy-before-relocating": {
    "fr": {
      "title": "Louer ou acheter en Turquie en 2026 : coûts, tapu et résidence",
      "metaDescription": "Comparez loyer et achat immobilier en Turquie : dépôt, frais de tapu, rendement, droit de séjour et exemple chiffré sur trois ans.",
      "shortAnswer": "Louer permet de tester le quartier et votre projet de résidence avec une mise initiale plus faible. Acheter peut être pertinent à long terme, si le bien correspond à votre usage et si les coûts et droits acquis ont été évalués. La meilleure décision dépend de votre horizon et non d'une règle universelle.",
      "bosphorasHelp": "Bosphoras peut coordonner une sélection de logements, des visites et l'examen indépendant des aspects documentaires, techniques et financiers de votre acquisition ou location.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Quand la location est-elle le choix rationnel ?",
          "body": "La location est particulièrement intéressante pendant une première installation, lorsque votre école, votre bureau, votre statut de séjour ou la ville définitive restent incertains. À Istanbul, les trajets quotidiens peuvent changer le choix du quartier ; à Bodrum, les conditions hivernales peuvent différer fortement de l'été ; à Antalya, l'accès aux écoles et à la santé peut primer sur la vue mer.\n\nAvant le bail, obtenez l'identité du propriétaire, l'adresse complète, les charges, le dépôt, les modalités de révision et l'inventaire. L'article 342 du Code des obligations limite la garantie d'un bail d'habitation à trois mois de loyer. La hausse conventionnelle de renouvellement est en principe encadrée par l'article 344, avec des dispositions particulières."
        },
        {
          "id": "detail-2",
          "title": "Quels frais prévoir lors d'un achat ?",
          "body": "Le droit de mutation au registre foncier (tapu harcı) est normalement de 2 % du prix déclaré pour chaque partie, acheteur et vendeur, sur une base qui ne peut être inférieure à la valeur fiscale du bien. Sur un appartement de 8 000 000 TL, la part acheteur représente donc 160 000 TL et celle du vendeur 160 000 TL. La répartition économique finale doit être claire dans la négociation.\n\nAjoutez les frais administratifs, les éventuels honoraires d'agence, l'évaluation si exigée, les traductions, l'assurance et les travaux. Le prix affiché n'est pas le montant total nécessaire à l'achat. Pour un logement neuf, la TVA éventuelle dépend de l'opération."
        },
        {
          "id": "detail-3",
          "title": "Comparer trois années : exemple chiffré",
          "body": "Supposons un loyer fixe de 45 000 TL mensuels pour un bien affiché à 8 000 000 TL. Sur trois ans, la location représente 1 620 000 TL hors charges, révision et dépôt récupérable. Pour l'achat, supposons 160 000 TL de droit de mutation côté acheteur et 100 000 TL annuels de coûts propres au propriétaire ; cela représente 460 000 TL de dépenses sur trois ans hors financement, autres frais et revente.\n\nL'achat mobilise en plus 8 000 000 TL de capital. Si ce capital avait un rendement alternatif hypothétique de 5 % par an, son coût d'opportunité simple serait 1 200 000 TL sur trois ans. La variation du prix du bien, l'inflation et la devise peuvent changer le résultat. Ce scénario n'est ni un prix de marché ni une prévision : remplacez les chiffres par ceux de votre propre dossier."
        },
        {
          "id": "detail-4",
          "title": "Le tapu et les documents qui établissent la propriété",
          "body": "Le contrat de réservation ne transfère pas la propriété. Le changement de propriétaire intervient au registre foncier. Vérifiez le titre (tapu), l'identité et la capacité du vendeur, hypothèques, saisies, droits de tiers, autorisations, conformité des travaux et situation de la copropriété. Le portail cadastral officiel permet d'identifier la parcelle mais ne suffit pas à prouver l'absence de charges.\n\nUn investisseur étranger éligible n'a généralement pas besoin d'un titre de séjour préalable pour acheter ; des restrictions liées à la nationalité, à la zone et à la superficie existent. Préparez le mode de paiement et les justificatifs requis avant de prendre un engagement financier irréversible."
        },
        {
          "id": "detail-5",
          "title": "Résidence, citoyenneté et achat : éviter les confusions",
          "body": "L'achat immobilier peut servir de motif pour un titre de séjour dans les conditions prévues, mais ne garantit pas son obtention. La citoyenneté exceptionnelle par investissement immobilier suit une autre procédure : seuil minimal de 400 000 USD et restriction de revente de trois ans, entre autres conditions. Un bien simplement présenté comme « éligible » par un vendeur ne constitue pas une décision de l'administration.\n\nPour un projet de résidence familiale, l'adresse et le statut de chaque membre doivent être compatibles avec les démarches envisagées. Évaluez ces points avant une réservation non remboursable."
        },
        {
          "id": "detail-6",
          "title": "Une méthode pour décider sans pression commerciale",
          "body": "Établissez votre horizon probable : moins de deux ans, trois à cinq ans, ou long terme. Comparez des biens équivalents selon quartier, qualité du bâtiment, surface utile, transports et charges. Demandez deux budgets : celui de l'installation locative et celui de l'acquisition complète. Analysez ensuite un scénario de départ anticipé et un scénario de revente difficile.\n\nPour un premier repérage, louer temporairement puis visiter plusieurs quartiers aide à définir les bons critères. Pour un projet d'achat déjà mûr, Bosphoras peut organiser la sélection et les visites, puis coordonner les professionnels indépendants avant la signature."
        },
        {
          "id": "practical-1",
          "title": "Surface, plan et usages : comparer le logement réel",
          "body": "Une annonce peut présenter une surface brute qui inclut des éléments communs ou des murs. Demandez la surface utile, le plan, la distribution des pièces, les espaces extérieurs et les droits d'usage. Vérifiez si le stationnement, la cave et les équipements collectifs sont rattachés juridiquement au bien ou simplement proposés à l'usage. Pour une acquisition, la surface annoncée et les droits enregistrés ne doivent pas être confondus."
        },
        {
          "id": "practical-2",
          "title": "Résidence principale ou location d'investissement ?",
          "body": "Si vous achetez pour y vivre, l'école, les transports, le confort thermique et la qualité du bâtiment constituent des critères de valeur au quotidien. Si vous achetez pour louer, examinez la demande locative réelle, les périodes de vacance, les frais de gestion et le régime applicable aux locations envisagées. Ne calculez pas un rendement annuel à partir de quelques semaines de haute saison sans tenir compte du taux d'occupation et des coûts."
        },
        {
          "id": "practical-3",
          "title": "Préparer l'offre, le paiement et la remise des clés",
          "body": "Avant une offre, dressez une liste des points à résoudre : documents fonciers, état technique, prix et devise, modalités de paiement, délais et conditions de remboursement d'une avance. Pour une location comme pour un achat, établissez un inventaire daté des équipements, compteurs et clés. Conservez les justificatifs des paiements et assurez-vous que vous disposez des coordonnées du gestionnaire et des contacts nécessaires au fonctionnement du logement."
        }
      ],
      "faqs": [
        {
          "question": "Un étranger peut-il acheter sans ikamet ?",
          "answer": "En principe oui pour les personnes éligibles, sous réserve des restrictions légales."
        },
        {
          "question": "Quels sont les droits de mutation ordinaires ?",
          "answer": "2 % pour l'acheteur et 2 % pour le vendeur, sur la base légale applicable."
        },
        {
          "question": "L'achat garantit-il la résidence ?",
          "answer": "Non. Il peut constituer un motif de demande, sans garantir l'approbation."
        },
        {
          "question": "Est-il préférable de louer la première année ?",
          "answer": "Souvent lorsque la ville, les déplacements et la durée de résidence sont encore incertains."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Invest in Türkiye — propriété et citoyenneté"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fyardim-kaynaklar%2Finfografikler%2Fpdfs%2Ftapuharci.pdf",
          "label": "GİB — droits de mutation immobiliers"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/103273?query=6098",
          "label": "Code des obligations — loi 6098"
        },
        {
          "href": "https://parselsorgu.tkgm.gov.tr/",
          "label": "Cadastre officiel — consultation des parcelles"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres de séjour"
        }
      ]
    },
    "en": {
      "title": "Rent or buy in Turkey in 2026: costs, title and residence",
      "metaDescription": "Compare Turkish rental and purchase costs, title transfer fees, legal ownership, residence and a three-year worked example.",
      "shortAnswer": "Renting lets you test a location and relocation plan with less initial capital. Buying may suit a longer horizon when the property meets your needs and its costs and legal rights are understood. The right decision depends on your plans.",
      "bosphorasHelp": "Bosphoras can coordinate housing searches, property visits and independent documentary, technical and financial review for your rental or purchase.",
      "sections": [
        {
          "id": "detail-1",
          "title": "When renting makes sense",
          "body": "Renting is particularly useful on arrival when schools, workplace, residence status or final city are unresolved. Istanbul commutes can change your preferred neighbourhood, Bodrum's winter differs from summer, and Antalya families may prioritise schools and healthcare over the sea view.\n\nBefore signing, establish landlord identity, full address, fees, deposit, renewal terms and inventory. Article 342 of the Turkish Code of Obligations caps residential security deposits at three months' rent. Contractual renewal increases are generally governed by Article 344, including special provisions."
        },
        {
          "id": "detail-2",
          "title": "Purchase costs and title deed fees",
          "body": "The ordinary title transfer charge is 2% for each party, buyer and seller, on the declared transaction amount subject to the statutory minimum valuation base. An TRY 8,000,000 property therefore entails TRY 160,000 for the buyer and TRY 160,000 for the seller. Agree the economic allocation clearly.\n\nAdd administration, possible agency fees, valuation where required, translation, insurance and repairs. Asking price is not total acquisition cost. VAT on a new property depends on the particular transaction."
        },
        {
          "id": "detail-3",
          "title": "Compare three years of renting and ownership",
          "body": "Suppose a fixed monthly rent of TRY 45,000 for a property priced at TRY 8,000,000. Three years' rent totals TRY 1,620,000 before fees, increases and refundable deposits. For purchase, assume TRY 160,000 buyer transfer charge and TRY 100,000 annual ownership-specific costs, giving TRY 460,000 over three years before financing, other costs and resale.\n\nBuying also ties up TRY 8,000,000. At a hypothetical 5% simple annual alternative return, opportunity cost is TRY 1,200,000 over three years. Asset value, inflation and currency changes can alter the conclusion. These inputs are illustrations rather than market quotations or forecasts."
        },
        {
          "id": "detail-4",
          "title": "Title and documentary due diligence",
          "body": "A reservation agreement does not transfer ownership. Title changes at the land registry. Review the tapu, seller identity and authority, mortgages, liens, third-party rights, building permits, alterations and building-management records. The official cadastral portal can identify the plot but cannot establish clean title by itself.\n\nEligible foreign buyers generally need no pre-existing residence permit, subject to nationality, location and area restrictions. Prepare payment arrangements and required supporting documents before an irreversible commitment."
        },
        {
          "id": "detail-5",
          "title": "Property, residence and citizenship are separate",
          "body": "Home ownership may support a residence application under applicable criteria but does not guarantee approval. Exceptional citizenship through property investment is a separate procedure requiring at least USD 400,000 and a three-year resale restriction, among other conditions. Marketing descriptions are not administrative decisions.\n\nFor family relocation, establish address suitability and each household member's residence pathway before making a non-refundable payment."
        },
        {
          "id": "detail-6",
          "title": "Choose without sales pressure",
          "body": "Define your probable horizon: under two years, three to five years or long term. Compare equivalent properties by district, building, usable area, transport and fees. Obtain both a rental-start budget and a complete acquisition budget. Assess early departure and a difficult resale scenario.\n\nTemporary renting and neighbourhood visits can help when criteria are still forming. For an established buying project, Bosphoras can coordinate selection, viewings and introductions to independent specialists before signing."
        },
        {
          "id": "practical-1",
          "title": "Compare the actual home, not just advertised floor area",
          "body": "An advertised gross area may include walls or common-area elements. Request the usable area, floor plan, room distribution, outdoor spaces and usage rights. Establish whether parking, storage and communal facilities are legally attached or merely offered for use. For buyers, advertised size and registered rights are distinct."
        },
        {
          "id": "practical-2",
          "title": "A primary residence or a rental investment?",
          "body": "For owner occupation, school, transport, thermal comfort and building condition provide everyday value. For rental investment, assess tenant demand, vacancy, management and the applicable rental regime. Do not annualise peak-season weekly income without occupancy and operating costs."
        },
        {
          "id": "practical-3",
          "title": "Offer, payment and handover",
          "body": "Before an offer, list issues to resolve: title documents, technical condition, price and currency, payment stages, deadlines and refund terms for any advance. For both renting and buying, make a dated inventory of equipment, meters and keys at handover. Retain payment evidence and obtain building management and maintenance contacts."
        }
      ],
      "faqs": [
        {
          "question": "Can foreigners buy without an ikamet?",
          "answer": "Generally yes for eligible persons, subject to legal restrictions."
        },
        {
          "question": "What are ordinary transfer duties?",
          "answer": "2% for the buyer and 2% for the seller on the applicable legal valuation base."
        },
        {
          "question": "Does buying guarantee residence?",
          "answer": "No; ownership may support an application but approval is separate."
        },
        {
          "question": "Is renting first better?",
          "answer": "Often when the neighbourhood, commute and duration of residence are uncertain."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Invest in Türkiye — property and citizenship"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fyardim-kaynaklar%2Finfografikler%2Fpdfs%2Ftapuharci.pdf",
          "label": "GİB — property transfer duty"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/103273?query=6098",
          "label": "Code of Obligations — Law 6098"
        },
        {
          "href": "https://parselsorgu.tkgm.gov.tr/",
          "label": "Official cadastral parcel lookup"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        }
      ]
    },
    "ru": {
      "title": "Аренда или покупка недвижимости в Турции в 2026 году: расходы и ВНЖ",
      "metaDescription": "Сравните аренду и покупку: залог, сбор за tapu, право собственности, ВНЖ и пример расчёта на три года.",
      "shortAnswer": "Аренда позволяет проверить район и планы переезда с меньшими первоначальными вложениями. Покупка может быть оправданна при долгосрочных целях, если оценены все расходы и юридические права. Решение зависит от ваших планов.",
      "bosphorasHelp": "Bosphoras может организовать подбор жилья, просмотры и взаимодействие с независимыми специалистами по документам, техническому состоянию и финансам.",
      "sections": [
        {
          "id": "detail-1",
          "title": "Когда аренда разумнее покупки?",
          "body": "Аренда особенно полезна в начале переезда, когда школа, офис, статус проживания или окончательный город не определены. В Стамбуле выбор меняют ежедневные маршруты, в Бодруме — зимние условия, в Анталье для семьи важны школы и медицина.\n\nПеред договором проверьте собственника, адрес, платежи, залог, продление и список имущества. Статья 342 Кодекса обязательств ограничивает обеспечение жилой аренды тремя месячными платежами. Согласованное повышение при продлении регулируется статьёй 344 с особыми положениями."
        },
        {
          "id": "detail-2",
          "title": "Расходы при приобретении и сбор за tapu",
          "body": "Обычный сбор за переход права собственности составляет по 2% для покупателя и продавца от заявленной цены с учётом установленной минимальной налоговой базы. При цене 8 000 000 лир доля покупателя — 160 000 лир, продавца — также 160 000. Фактическое распределение расходов следует согласовать.\n\nДобавьте административные расходы, возможную комиссию, оценку при необходимости, перевод, страхование и ремонт. Цена в объявлении не равна полной стоимости сделки. НДС для нового жилья зависит от конкретной операции."
        },
        {
          "id": "detail-3",
          "title": "Расчёт аренды и покупки на три года",
          "body": "Предположим, фиксированная аренда 45 000 лир в месяц при цене объекта 8 000 000 лир. За три года аренда составит 1 620 000 лир без обслуживания, повышения цены и возвращаемого залога. При покупке условные расходы включают 160 000 лир сбора покупателя и 100 000 лир ежегодных расходов собственника: всего 460 000 за три года без кредита, иных затрат и продажи.\n\nПокупка дополнительно связывает 8 000 000 лир капитала. При условной альтернативной простой доходности 5% в год упущенный доход за три года составит 1 200 000 лир. Цена объекта, инфляция и курс меняют результат. Это пример расчёта, а не рыночное предложение или прогноз."
        },
        {
          "id": "detail-4",
          "title": "Tapu и проверка документов",
          "body": "Договор бронирования не передаёт собственность. Переход права происходит в земельном реестре. Проверьте tapu, продавца и его полномочия, ипотеку, аресты, права третьих лиц, разрешения, изменения здания и состояние управления комплексом. Кадастровый портал помогает найти участок, но сам по себе не подтверждает отсутствие обременений.\n\nИностранцы с правом приобретения обычно могут покупать без предварительного ВНЖ при соблюдении ограничений по гражданству, территории и площади. Подготовьте порядок оплаты и документы до необратимого обязательства."
        },
        {
          "id": "detail-5",
          "title": "ВНЖ, гражданство и собственность",
          "body": "Владение жильём может быть основанием для подачи на ВНЖ, но не гарантирует одобрение. Исключительная процедура гражданства через недвижимость предусматривает порог 400 000 долларов и ограничение продажи три года наряду с другими условиями. Рекламное описание объекта не является решением администрации.\n\nДля семейного переезда выясните пригодность адреса и основание проживания каждого члена семьи до невозвратного платежа."
        },
        {
          "id": "detail-6",
          "title": "Как принять решение без давления",
          "body": "Определите срок: менее двух лет, три–пять лет или долгосрочно. Сравните равнозначные объекты по району, зданию, полезной площади, транспорту и платежам. Рассчитайте отдельно начало аренды и полную стоимость приобретения, затем сценарии досрочного отъезда и сложной перепродажи.\n\nЕсли критерии ещё не сформированы, полезны временная аренда и поездки по районам. При готовом проекте покупки Bosphoras может организовать подбор, просмотры и взаимодействие с независимыми специалистами до подписания."
        },
        {
          "id": "practical-1",
          "title": "Как сравнивать реальную площадь и права пользования",
          "body": "В объявлении общая площадь может включать стены и общие зоны. Запросите полезную площадь, планировку, открытые пространства и права пользования. Уточните, закреплены ли парковка, кладовая и общие удобства за объектом юридически или доступны лишь для пользования. Площадь объявления и зарегистрированные права — разные вещи."
        },
        {
          "id": "practical-2",
          "title": "Собственное жильё или арендная инвестиция?",
          "body": "Для собственного проживания важны школа, транспорт, теплоизоляция и состояние здания. Для сдачи — спрос, простой, управление и правовой режим аренды. Не рассчитывайте годовую доходность по нескольким неделям высокого сезона без учёта загрузки и затрат."
        },
        {
          "id": "practical-3",
          "title": "Предложение, расчёты и передача ключей",
          "body": "До предложения составьте перечень вопросов: документы на право собственности, техническое состояние, цена и валюта, этапы оплаты, сроки и возврат аванса. При аренде и покупке оформите датированный перечень оборудования, показаний счётчиков и ключей. Храните подтверждения оплаты и контакты управляющей компании и обслуживающих организаций."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли купить без ВНЖ?",
          "answer": "Как правило, да для имеющих право покупки иностранцев при соблюдении ограничений."
        },
        {
          "question": "Каков сбор за переход собственности?",
          "answer": "Обычно 2% для покупателя и 2% для продавца от применимой законной базы."
        },
        {
          "question": "Гарантирует ли покупка ВНЖ?",
          "answer": "Нет, это возможное основание заявления, решение принимается отдельно."
        },
        {
          "question": "Лучше ли вначале арендовать?",
          "answer": "Часто да, пока район, ежедневные маршруты и срок проживания не определены."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Invest in Türkiye — недвижимость и гражданство"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fyardim-kaynaklar%2Finfografikler%2Fpdfs%2Ftapuharci.pdf",
          "label": "GİB — сбор за переход права собственности"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/103273?query=6098",
          "label": "Кодекс обязательств — закон 6098"
        },
        {
          "href": "https://parselsorgu.tkgm.gov.tr/",
          "label": "Официальный кадастровый портал"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "الإيجار أم شراء عقار في تركيا 2026: التكاليف والطابو والإقامة",
      "metaDescription": "قارن تكاليف الإيجار والشراء ورسوم الطابو والملكية وتصريح الإقامة مع مثال حسابي لثلاث سنوات.",
      "shortAnswer": "يتيح الإيجار تجربة الحي وخطة الانتقال برأس مال أولي أقل. وقد يكون الشراء مناسباً على المدى الطويل إذا كان العقار ملائماً وتم تقييم تكاليفه وحقوقه القانونية. يعتمد القرار على أهدافك ومدتك.",
      "bosphorasHelp": "تستطيع Bosphoras تنسيق اختيار السكن والزيارات والتواصل مع المختصين المستقلين لفحص الجوانب الوثائقية والفنية والمالية.",
      "sections": [
        {
          "id": "detail-1",
          "title": "متى يكون الإيجار أكثر ملاءمة؟",
          "body": "يفيد الإيجار خاصةً عند بداية الانتقال إذا لم تتحدد المدرسة أو مقر العمل أو وضع الإقامة أو المدينة النهائية. ففي إسطنبول تؤثر الرحلات اليومية في اختيار الحي، وفي بودروم تختلف ظروف الشتاء عن الصيف، وفي أنطاليا قد تتقدم المدارس والرعاية الصحية على إطلالة البحر.\n\nقبل التوقيع راجع هوية المالك والعنوان والرسوم والتأمين النقدي وشروط التجديد وقائمة الأثاث. تحدد المادة 342 من قانون الالتزامات ضمان السكن بثلاثة أشهر إيجار، وتنظم المادة 344 الزيادة عند التجديد مع قواعد خاصة."
        },
        {
          "id": "detail-2",
          "title": "تكاليف الشراء ورسوم الطابو",
          "body": "تبلغ رسوم نقل الملكية العادية 2% للمشتري و2% للبائع على القيمة المصرح بها مع مراعاة الحد الأدنى القانوني للوعاء. عند شراء عقار بقيمة 8 ملايين ليرة يكون نصيب المشتري 160 ألفاً ونصيب البائع 160 ألفاً. ينبغي توضيح توزيع المصاريف في الاتفاق.\n\nأضف الرسوم الإدارية وعمولة الوسيط المحتملة والتقييم المطلوب والترجمة والتأمين والإصلاحات. السعر المعلن ليس التكلفة الكاملة، وتختلف ضريبة القيمة المضافة للعقار الجديد بحسب المعاملة."
        },
        {
          "id": "detail-3",
          "title": "مثال: مقارنة الإيجار والشراء خلال ثلاث سنوات",
          "body": "لنفترض إيجاراً شهرياً ثابتاً قدره 45 ألف ليرة لعقار سعره 8 ملايين. تبلغ الإيجارات خلال ثلاث سنوات 1,620,000 ليرة قبل الرسوم والزيادات والتأمين المسترد. وعند الشراء، إذا افترضنا رسوم مشتري 160 ألفاً وتكاليف ملكية سنوية 100 ألف، يكون المجموع 460 ألف ليرة قبل التمويل والمصاريف الأخرى وإعادة البيع.\n\nلكن الشراء يربط أيضاً 8 ملايين ليرة من رأس المال. بعائد بديل افتراضي بسيط 5% سنوياً، تبلغ تكلفة الفرصة 1.2 مليون ليرة على ثلاث سنوات. وقد تتغير النتيجة وفق قيمة العقار والتضخم والعملة. هذه فرضيات توضيحية لا أسعار سوق أو توقعات."
        },
        {
          "id": "detail-4",
          "title": "الطابو والوثائق التي تثبت الملكية",
          "body": "لا ينقل عقد الحجز الملكية؛ بل يتم النقل بالتسجيل لدى السجل العقاري. تحقق من سند الملكية وهوية البائع وصلاحياته والرهون والحجوزات وحقوق الغير والتراخيص والتعديلات وإدارة المجمع. تساعد منصة المسح العقاري في تحديد القطعة لكنها لا تثبت وحدها خلو السند من القيود.\n\nيمكن للأجنبي المؤهل الشراء عموماً دون تصريح إقامة سابق وفق قيود الجنسية والمنطقة والمساحة. جهز طريقة الدفع والمستندات المطلوبة قبل الالتزام غير القابل للرجوع."
        },
        {
          "id": "detail-5",
          "title": "الملكية والإقامة والجنسية إجراءات مختلفة",
          "body": "قد يشكل العقار أساساً لطلب الإقامة وفق الشروط المطبقة، لكنه لا يضمن الموافقة. وتخضع الجنسية الاستثنائية عبر الاستثمار العقاري لإجراءات مستقلة، تشمل حداً أدنى 400 ألف دولار وقيداً على البيع لمدة ثلاث سنوات وشروطاً أخرى. الإعلان التسويقي عن أهلية العقار ليس قراراً إدارياً.\n\nعند الانتقال مع الأسرة، راجع ملاءمة العنوان وسبب الإقامة لكل فرد قبل دفع مبلغ غير قابل للاسترداد."
        },
        {
          "id": "detail-6",
          "title": "اتخاذ القرار دون ضغط البيع",
          "body": "حدد الأفق المحتمل: أقل من سنتين، أو ثلاث إلى خمس سنوات، أو مدة طويلة. قارن عقارات متشابهة في الحي وجودة المبنى والمساحة والمواصلات والرسوم. احسب ميزانية بدء الإيجار وميزانية الشراء الكاملة، ثم ادرس سيناريو المغادرة المبكرة وصعوبة إعادة البيع.\n\nيفيد السكن المؤقت وزيارة الأحياء إذا لم تتشكل المعايير بعد. وعند نضج مشروع الشراء تستطيع Bosphoras تنسيق الاختيار والزيارات والتواصل مع مختصين مستقلين قبل التوقيع."
        },
        {
          "id": "practical-1",
          "title": "مقارنة المساحة الفعلية وحقوق الاستخدام",
          "body": "قد تشمل المساحة الإجمالية المعلنة الجدران أو أجزاء مشتركة. اطلب المساحة الصافية والمخطط وتوزيع الغرف والمساحات الخارجية وحقوق الاستخدام. تحقق هل مواقف السيارات والمخازن والمرافق المشتركة مرتبطة قانونياً بالعقار أم متاحة للاستخدام فقط. المساحة المعلنة والحقوق المسجلة أمران مختلفان."
        },
        {
          "id": "practical-2",
          "title": "سكن أساسي أم استثمار إيجاري؟",
          "body": "للسكن الشخصي تبرز المدرسة والنقل والراحة الحرارية وحالة المبنى. وللاستثمار الإيجاري ادرس الطلب والشغور والإدارة والنظام القانوني للإيجار. لا تعمم إيرادات أسابيع الذروة على السنة دون احتساب الإشغال والتكاليف."
        },
        {
          "id": "practical-3",
          "title": "العرض والدفع وتسليم المفاتيح",
          "body": "قبل العرض حدد المسائل المطلوبة: وثائق الملكية والحالة الفنية والسعر والعملة ومراحل الدفع والمواعيد وشروط إعادة العربون. في الإيجار والشراء أعد محضراً مؤرخاً للمعدات والعدادات والمفاتيح. احتفظ بإثباتات الدفع وأرقام إدارة المبنى وخدمات الصيانة."
        }
      ],
      "faqs": [
        {
          "question": "هل يمكن للأجنبي الشراء دون إقامة؟",
          "answer": "نعم عموماً للمؤهلين مع مراعاة القيود القانونية."
        },
        {
          "question": "كم تبلغ رسوم نقل الملكية؟",
          "answer": "عادةً 2% للمشتري و2% للبائع على الوعاء القانوني المطبق."
        },
        {
          "question": "هل يضمن الشراء الإقامة؟",
          "answer": "لا، قد يدعم طلب الإقامة لكن الموافقة إجراء منفصل."
        },
        {
          "question": "هل الأفضل الاستئجار أولاً؟",
          "answer": "غالباً إذا لم تتحدد الأحياء والتنقلات والمدة المتوقعة."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "هيئة الاستثمار — العقارات والجنسية"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fyardim-kaynaklar%2Finfografikler%2Fpdfs%2Ftapuharci.pdf",
          "label": "إدارة الضرائب — رسوم نقل الملكية"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/103273?query=6098",
          "label": "قانون الالتزامات رقم 6098"
        },
        {
          "href": "https://parselsorgu.tkgm.gov.tr/",
          "label": "المنصة الرسمية للاستعلام العقاري"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع تصاريح الإقامة"
        }
      ]
    }
  }
};
