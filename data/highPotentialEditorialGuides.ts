import type { Locale } from '@/lib/i18n';

export type EditorialSection = { id: string; title: string; body: string; bullets?: string[] };
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
          "body": "Un entrepreneur domicilié à l’étranger en 2023–2025 qui s’établit en Turquie le 17 novembre 2026 dispose, selon le calendrier du communiqué, jusqu’au 28 février 2027 pour demander son certificat. Il distingue les dividendes étrangers de sa rémunération pour le travail exercé en Turquie. Bosphoras peut organiser la collecte des pièces et la coordination du dossier avec un fiscaliste indépendant."
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
          "body": "An entrepreneur domiciled abroad throughout 2023–2025 who settles in Turkey on 17 November 2026 has until 28 February 2027 under the communiqué to apply for the certificate. Separate foreign dividends from remuneration for work carried out in Turkey. Bosphoras can coordinate documentation and introductions to independent tax specialists."
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
          "body": "Предприниматель, проживавший за рубежом в 2023–2025 годах и ставший резидентом Турции 17 ноября 2026 года, может подать заявление до 28 февраля 2027 года. Иностранные дивиденды следует отделить от вознаграждения за работу в Турции. Bosphoras помогает организовать документы и взаимодействие с независимыми налоговыми специалистами."
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
          "body": "رائد أعمال عاش خارج تركيا خلال 2023–2025 وأصبح مقيماً فيها في 17 نوفمبر 2026 يمكنه طلب الشهادة حتى 28 فبراير 2027 وفق التعميم. عليه فصل توزيعات الأرباح الأجنبية عن أجر العمل داخل تركيا. تساعد Bosphoras في تنظيم المستندات والتنسيق مع مستشارين ضريبيين مستقلين."
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
          "body": "La demande de VNH (ikamet) se fait sur la plateforme officielle e-ikamet avant la fin du séjour autorisé. Préparez les pièces correspondant à votre motif, l’assurance le cas échéant, le dossier du logement et les justificatifs de ressources. La migration prévoit une décision dans un délai maximal de 90 jours à partir du dépôt complet, sous réserve de prolongation notifiée. Bosphoras peut coordonner logement, traduction et rendez-vous sans se substituer à l’administration."
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
        }
      ]
    }
  }
};
