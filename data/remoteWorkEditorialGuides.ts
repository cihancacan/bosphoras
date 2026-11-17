import type { Locale } from '@/lib/i18n';
import type { EditorialGuide } from './highPotentialEditorialGuides';
export const remoteWorkEditorialGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "foreign-consulting-income-from-turkey": {
    "fr": {
      "title": "Consultant international en Turquie 2026 : impôts et export de services",
      "metaDescription": "Conseil et freelance depuis la Turquie : barème 2026, déduction de 100 % pour services qualifiés, facturation et TVA.",
      "shortAnswer": "Facturer un client étranger depuis la Turquie ne rend pas automatiquement les honoraires étrangers. Certains services exportés bénéficient d'une déduction distincte depuis 2026.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, la recherche de logement et les rendez-vous avec des professionnels indépendants. Demandez une étude de votre situation avant de déménager ou de modifier vos contrats.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Quels services bénéficient de la déduction ?",
          "body": "La décision 11257 porte à 100 % la déduction des bénéfices admissibles depuis le 1er janvier 2026 (article 89/13 pour les personnes physiques, 10/1-ğ pour les sociétés). Sont notamment visés architecture, ingénierie, design, logiciel, traitement et analyse de données, tenue comptable, centres d'appels, tests et certification ; certains services éducatifs ou médicaux ont des conditions spécifiques. Le conseil généraliste n'est pas couvert par son seul intitulé. Service fourni à un client non résident, utilisation exclusivement à l'étranger, facture au nom du client étranger et rapatriement intégral avant l'échéance annuelle sont essentiels."
        },
        {
          "id": "remote-2",
          "title": "Distinguer résidence, source et exonération",
          "body": "L'article 20/D concerne les personnes physiques devenues résidentes fiscales à partir du 1er janvier 2026, sous conditions de domicile et de fiscalité pendant les trois années civiles antérieures, avec exceptions légales pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou avant fin février suivante pour novembre et décembre. Les vingt ans d'exonération ne couvrent que les revenus étrangers admissibles. Le travail exercé en Turquie peut produire du revenu turc même avec un client étranger. Titre de séjour, impôt et droit au travail sont trois questions distinctes."
        },
        {
          "id": "remote-3",
          "title": "Simulation de bénéfice net en entreprise individuelle",
          "body": "Sur une base nette ordinaire de 1 000 000 TL hors salaires, sans autres revenus ni déductions, l'impôt brut du barème 2026 est de 232 500 TL. Si la totalité est admissible à la déduction 89/13, la base après déduction est nulle. La TVA, les cotisations et les frais subsistent potentiellement ; les sociétés doivent examiner séparément l'impôt minimum.",
          "table": {
            "headers": [
              "Scénario",
              "Impôt sur le revenu illustratif (TL)"
            ],
            "rows": [
              [
                "Droit commun",
                "232 500"
              ],
              [
                "Déduction 100 % admissible",
                "0"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Facturation et organisation",
          "body": "Définissez le livrable et le lieu de son utilisation, conservez contrats, factures, preuves de réalisation et crédits bancaires. Organisez l'immatriculation, la comptabilité et les obligations de TVA et de travail. L'exonération de TVA export de services répond à des critères distincts. Un versement sur compte étranger n'évite pas les obligations turques."
        },
        {
          "id": "remote-5",
          "title": "Avant toute démarche",
          "body": "Conservez un dossier daté des contrats, déplacements, déclarations fiscales, preuves de résidence et relevés de paiement. Vérifiez les obligations du pays de départ et les conventions. Pour les estimations, distinguez assiette fiscale, trésorerie, cotisations et frais. Un avantage fiscal ne supprime pas automatiquement les autres déclarations."
        }
      ],
      "faqs": [
        {
          "question": "Tous les consultants sont-ils exonérés ?",
          "answer": "Non, la liste légale et les conditions d'utilisation et de transfert doivent être respectées."
        },
        {
          "question": "Le taux de 100 % s'applique-t-il au chiffre d'affaires ?",
          "answer": "Non, la déduction vise le bénéfice admissible."
        },
        {
          "question": "Une société bénéficie-t-elle forcément de zéro impôt ?",
          "answer": "Non, notamment à cause de l'impôt minimum et des autres revenus."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 103 / 2026",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937"
        },
        {
          "label": "GİB — décision 11257, application aux logiciels",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/ozelge/39061"
        },
        {
          "label": "Esin — Decision 11257",
          "href": "https://www.esin.av.tr/2026/05/04/significant-taxpayer-favorable-amendments-to-the-foreign-participation-income-exemption-and-qualified-service-export-deduction-rates/"
        },
        {
          "label": "Bilgener — minimum corporate tax",
          "href": "https://bilgener.com/en/02-05-2026-3/"
        },
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "en": {
      "title": "International consultant in Turkey 2026: tax and service exports",
      "metaDescription": "Consulting and freelancing from Turkey: 2026 tariff, 100% qualified service-export deduction, invoicing and VAT.",
      "shortAnswer": "Billing a foreign client from Turkey does not automatically make fees foreign-source. A separate deduction applies to qualifying service exports in 2026.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent professionals. Request an assessment before moving or changing contracts.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Which services qualify?",
          "body": "Decision 11257 increases the eligible-profit deduction to 100% from 1 January 2026 under individual Article 89/13 and corporate Article 10/1-ğ. Qualifying fields include architecture, engineering, design, software, data processing and analysis, bookkeeping, call centres, tests and certification; certain education and healthcare services have specific conditions. General consulting does not qualify by label alone. A non-resident customer, exclusive overseas use, invoicing to that customer and full remittance by the annual filing deadline are essential."
        },
        {
          "id": "remote-2",
          "title": "Separate residence, source and relief",
          "body": "Article 20/D covers individuals becoming Turkish tax residents from 1 January 2026, subject to domicile and tax-history conditions over the preceding three calendar years, with statutory exceptions for certain capital income. Apply for certification by settlement year-end, or the following February for November and December settlement. Twenty-year relief covers only eligible foreign income. Work performed in Turkey can generate domestic income even with an offshore customer. Immigration, tax and work authorisation are separate."
        },
        {
          "id": "remote-3",
          "title": "Sole-trader net profit example",
          "body": "For an ordinary non-salary net base of TRY 1,000,000 with no other income or deduction, the 2026 gross tariff is TRY 232,500. If all profit qualifies under 89/13, the post-deduction base is zero. VAT, social contributions and costs may remain; companies must separately assess minimum tax.",
          "table": {
            "headers": [
              "Scenario",
              "Illustrative income tax (TRY)"
            ],
            "rows": [
              [
                "Ordinary tariff",
                "232,500"
              ],
              [
                "Qualifying 100% deduction",
                "0"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Invoicing and operations",
          "body": "Define deliverables and where they are used; retain contracts, invoices, evidence of performance and bank receipts. Arrange registration, accounting, VAT and work compliance. Export VAT relief has its own criteria. Receiving money offshore does not remove Turkish obligations."
        },
        {
          "id": "remote-5",
          "title": "Before taking action",
          "body": "Keep dated contracts, travel records, tax returns, residence evidence and payment statements. Check departure-country obligations and treaties. Distinguish taxable base, cash flow, contributions and fees in projections. Tax relief does not automatically remove other filing requirements."
        }
      ],
      "faqs": [
        {
          "question": "Does every consultant qualify?",
          "answer": "No, the statutory list, use and remittance criteria must be met."
        },
        {
          "question": "Does 100% apply to revenue?",
          "answer": "No, the deduction is on qualifying profit."
        },
        {
          "question": "Does a company necessarily pay zero?",
          "answer": "No, minimum tax and other income may change the outcome."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 103 / 2026",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937"
        },
        {
          "label": "GİB — décision 11257, application aux logiciels",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/ozelge/39061"
        },
        {
          "label": "Esin — Decision 11257",
          "href": "https://www.esin.av.tr/2026/05/04/significant-taxpayer-favorable-amendments-to-the-foreign-participation-income-exemption-and-qualified-service-export-deduction-rates/"
        },
        {
          "label": "Bilgener — minimum corporate tax",
          "href": "https://bilgener.com/en/02-05-2026-3/"
        },
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "ru": {
      "title": "Международный консультант в Турции 2026: налоги и экспорт услуг",
      "metaDescription": "Фриланс и консультации из Турции: шкала 2026, вычет 100% для подходящего экспорта, счета и НДС.",
      "shortAnswer": "Оплата иностранным клиентом не делает услуги из Турции зарубежным доходом. Отдельный вычет предусмотрен для подходящего экспорта услуг.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми специалистами. Запросите оценку до переезда или изменения договоров.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Какие услуги подходят",
          "body": "Решение № 11257 повышает вычет подходящей прибыли до 100% с 1 января 2026 года по статье 89/13 для физлиц и 10/1-ğ для компаний. Среди услуг архитектура, инженерия, дизайн, ПО, обработка и анализ данных, бухгалтерский учёт, колл-центры, тестирование и сертификация. Для некоторых медицинских и образовательных услуг действуют специальные условия. Общий консалтинг не подходит только по названию. Необходимы иностранный клиент, использование исключительно за рубежом, счёт на его имя и полный перевод прибыли до срока годовой декларации."
        },
        {
          "id": "remote-2",
          "title": "Резидентство, источник и льгота",
          "body": "Статья 20/D относится к физлицам, ставшим налоговыми резидентами с 1 января 2026 года, при соблюдении условий места жительства и налоговой истории за три предыдущих календарных года, с исключениями для отдельных доходов капитала. Сертификат запрашивается до конца года поселения или до конца следующего февраля при поселении в ноябре или декабре. Двадцатилетняя льгота охватывает только подходящие зарубежные доходы. Работа в Турции может давать местный доход даже с зарубежным клиентом. ВНЖ, налоги и право на работу различаются."
        },
        {
          "id": "remote-3",
          "title": "Пример чистой прибыли ИП",
          "body": "При обычной чистой базе вне зарплаты 1 млн лир без других доходов и вычетов налог по шкале 2026 — 232 500 лир. Если вся прибыль соответствует 89/13, база после вычета нулевая. НДС, взносы и расходы могут сохраняться; компании отдельно проверяют минимальный налог.",
          "table": {
            "headers": [
              "Сценарий",
              "Пример подоходного налога (лиры)"
            ],
            "rows": [
              [
                "Общая шкала",
                "232 500"
              ],
              [
                "Подходящий вычет 100%",
                "0"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Счета и организация",
          "body": "Определите результат услуги и место использования, храните договоры, счета, подтверждения выполнения и зачисления. Организуйте регистрацию, учёт, НДС и разрешение на работу. Льгота по НДС имеет отдельные условия. Оплата на зарубежный счёт не устраняет турецкие обязанности."
        },
        {
          "id": "remote-5",
          "title": "Перед оформлением",
          "body": "Храните датированные договоры, историю поездок, декларации, доказательства резидентства и платежей. Проверьте обязанности прежней страны и соглашения. Различайте налоговую базу, денежный поток, взносы и расходы. Льгота не отменяет автоматически другие декларации."
        }
      ],
      "faqs": [
        {
          "question": "Все консультанты освобождены?",
          "answer": "Нет, проверяются перечень услуг, использование и перевод."
        },
        {
          "question": "100% относится к обороту?",
          "answer": "Нет, к подходящей прибыли."
        },
        {
          "question": "Компания всегда платит ноль?",
          "answer": "Нет, учитываются минимальный налог и другие доходы."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 103 / 2026",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937"
        },
        {
          "label": "GİB — décision 11257, application aux logiciels",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/ozelge/39061"
        },
        {
          "label": "Esin — Decision 11257",
          "href": "https://www.esin.av.tr/2026/05/04/significant-taxpayer-favorable-amendments-to-the-foreign-participation-income-exemption-and-qualified-service-export-deduction-rates/"
        },
        {
          "label": "Bilgener — minimum corporate tax",
          "href": "https://bilgener.com/en/02-05-2026-3/"
        },
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "ar": {
      "title": "المستشار الدولي في تركيا 2026: ضريبة العمل وتصدير الخدمات",
      "metaDescription": "الاستشارات والعمل الحر من تركيا وشرائح 2026 وخصم 100% للخدمات المؤهلة والفوترة والقيمة المضافة.",
      "shortAnswer": "لا تجعل فاتورة العميل الأجنبي الأتعاب المنفذة في تركيا دخلاً أجنبياً تلقائياً. يوجد خصم مستقل لتصدير الخدمات المؤهلة.",
      "bosphorasHelp": "تنسق Bosphoras الزيارات الاستكشافية والسكن والمواعيد مع مختصين مستقلين. اطلب دراسة وضعك قبل الانتقال أو تغيير العقود.",
      "sections": [
        {
          "id": "remote-1",
          "title": "الخدمات المؤهلة",
          "body": "يرفع القرار 11257 خصم الربح المؤهل إلى 100% منذ 1 يناير 2026 وفق المادة 89/13 للأفراد و10/1-ğ للشركات. تشمل المجالات الهندسة المعمارية والهندسة والتصميم والبرمجيات ومعالجة البيانات وتحليلها والمحاسبة ومراكز الاتصال والاختبار والشهادات؛ لبعض خدمات التعليم والصحة شروط خاصة. لا تكفي تسمية الاستشارة العامة. يلزم عميل غير مقيم واستخدام حصري بالخارج وفاتورة باسمه وتحويل كامل الربح قبل أجل الإقرار السنوي."
        },
        {
          "id": "remote-2",
          "title": "الفصل بين الإقامة والمصدر والإعفاء",
          "body": "تشمل المادة 20/D الأفراد المستقرين ضريبياً منذ 1 يناير 2026 بشروط الموطن والتاريخ الضريبي خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر أو ديسمبر. يقتصر إعفاء عشرين عاماً على الدخل الأجنبي المؤهل. قد ينتج العمل في تركيا دخلاً محلياً رغم وجود عميل أجنبي. الإقامة والضريبة وإذن العمل مسائل منفصلة."
        },
        {
          "id": "remote-3",
          "title": "مثال الربح الصافي للفرد",
          "body": "لوعاء صاف عادي غير راتب قدره مليون ليرة دون دخل أو خصم آخر تبلغ ضريبة شرائح 2026 نحو 232,500 ليرة. عند أهلية الربح كله للمادة 89/13 يصبح الوعاء بعد الخصم صفراً. قد تبقى القيمة المضافة والاشتراكات والرسوم؛ تدرس الشركات الضريبة الدنيا منفصلة.",
          "table": {
            "headers": [
              "السيناريو",
              "ضريبة دخل توضيحية بالليرة"
            ],
            "rows": [
              [
                "الشرائح العامة",
                "232,500"
              ],
              [
                "خصم مؤهل 100%",
                "0"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "الفوترة والتشغيل",
          "body": "حدد مخرجات الخدمة ومكان الانتفاع واحتفظ بالعقود والفواتير وإثبات التنفيذ والإيداع. نظم التسجيل والمحاسبة والقيمة المضافة وإذن العمل. لإعفاء القيمة المضافة شروط مستقلة. لا يلغي الحساب الخارجي الالتزامات التركية."
        },
        {
          "id": "remote-5",
          "title": "قبل الإجراءات",
          "body": "احتفظ بالعقود المؤرخة وسجلات السفر والإقرارات وإثباتات الإقامة والمدفوعات. ادرس التزامات الدولة السابقة والاتفاقيات. ميز الوعاء الضريبي والتدفق النقدي والاشتراكات والرسوم. لا يلغي الإعفاء تلقائياً الإقرارات الأخرى."
        }
      ],
      "faqs": [
        {
          "question": "هل يعفى كل مستشار؟",
          "answer": "لا، يجب استيفاء قائمة الخدمات والاستخدام والتحويل."
        },
        {
          "question": "هل يشمل 100% الإيرادات؟",
          "answer": "لا، الربح المؤهل."
        },
        {
          "question": "هل تدفع الشركة صفراً دائماً؟",
          "answer": "لا، قد تؤثر الضريبة الدنيا والدخول الأخرى."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 103 / 2026",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/6937"
        },
        {
          "label": "GİB — décision 11257, application aux logiciels",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/ozelge/39061"
        },
        {
          "label": "Esin — Decision 11257",
          "href": "https://www.esin.av.tr/2026/05/04/significant-taxpayer-favorable-amendments-to-the-foreign-participation-income-exemption-and-qualified-service-export-deduction-rates/"
        },
        {
          "label": "Bilgener — minimum corporate tax",
          "href": "https://bilgener.com/en/02-05-2026-3/"
        },
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    }
  },
  "foreign-company-managed-from-turkey": {
    "fr": {
      "title": "Société étrangère dirigée depuis la Turquie 2026 : résidence et risques fiscaux",
      "metaDescription": "Diriger une SAS, LLC ou société de Dubaï depuis la Turquie : siège effectif, établissement stable, rémunérations et fiscalité.",
      "shortAnswer": "Une société immatriculée à l'étranger peut devenir résidente fiscale turque si son centre d'affaires réel se situe en Turquie. Un établissement stable peut aussi déclencher une imposition sans transfert de résidence.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, la recherche de logement et les rendez-vous avec des professionnels indépendants. Demandez une étude de votre situation avant de déménager ou de modifier vos contrats.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Siège statutaire et centre d'affaires",
          "body": "L'article 3 de la loi IS 5520 retient le siège légal ou le centre d'affaires. Si l'un se situe en Turquie, le droit interne prévoit une imposition mondiale de la société. Si les deux sont à l'étranger, une activité locale peut relever de l'imposition limitée ; la convention applicable peut restreindre cette compétence. Examinez qui prend les décisions stratégiques, signe les contrats, supervise les salariés et contrôle la banque. Une boîte postale étrangère ne prouve pas la substance."
        },
        {
          "id": "remote-2",
          "title": "Distinguer résidence, source et exonération",
          "body": "L'article 20/D concerne les personnes physiques devenues résidentes fiscales à partir du 1er janvier 2026, sous conditions de domicile et de fiscalité pendant les trois années civiles antérieures, avec exceptions légales pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou avant fin février suivante pour novembre et décembre. Les vingt ans d'exonération ne couvrent que les revenus étrangers admissibles. Le travail exercé en Turquie peut produire du revenu turc même avec un client étranger. Titre de séjour, impôt et droit au travail sont trois questions distinctes."
        },
        {
          "id": "remote-3",
          "title": "Cartographier les risques selon les faits",
          "body": "Le tableau ne constitue pas une décision fiscale : il identifie les vérifications à effectuer avant de diriger une société depuis un domicile turc.",
          "table": {
            "headers": [
              "Situation",
              "Question fiscale principale"
            ],
            "rows": [
              [
                "Direction réelle en Turquie",
                "Résidence de la société"
              ],
              [
                "Bureau ou équipe permanente locale",
                "Établissement stable"
              ],
              [
                "Actionnaire passif sans gestion locale",
                "Fiscalité personnelle et dividendes"
              ],
              [
                "Prestations intragroupe",
                "Prix de transfert, TVA, retenues"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Exemple de fiscalité d'une société résidente",
          "body": "Si une société relève effectivement de l'IS turc ordinaire à 25 % et présente 1 000 000 TL de bénéfice imposable, l'impôt arithmétique est de 250 000 TL, avant crédits, conventions et incitations. Ne pas cumuler mécaniquement deux impôts nationaux : analyser résidence conventionnelle, élimination de double imposition et obligations locales. Le salaire du dirigeant et les dividendes sont des flux distincts.",
          "table": {
            "headers": [
              "Indicateur",
              "Montant (TL)"
            ],
            "rows": [
              [
                "Bénéfice taxable",
                "1 000 000"
              ],
              [
                "IS ordinaire",
                "250 000"
              ],
              [
                "Solde avant distribution",
                "750 000"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "Avant toute démarche",
          "body": "Conservez un dossier daté des contrats, déplacements, déclarations fiscales, preuves de résidence et relevés de paiement. Vérifiez les obligations du pays de départ et les conventions. Pour les estimations, distinguez assiette fiscale, trésorerie, cotisations et frais. Un avantage fiscal ne supprime pas automatiquement les autres déclarations."
        }
      ],
      "faqs": [
        {
          "question": "Une société étrangère est-elle toujours non résidente ?",
          "answer": "Non, le centre d'affaires peut entraîner la résidence turque."
        },
        {
          "question": "Un bureau à domicile crée-t-il toujours un établissement stable ?",
          "answer": "Non, cela dépend des faits et de la convention."
        },
        {
          "question": "20/D exonère-t-il la société ?",
          "answer": "Non, uniquement les revenus personnels étrangers admissibles."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "PwC — Corporate residence",
          "href": "https://taxsummaries.pwc.com/turkey/corporate/corporate-residence"
        },
        {
          "label": "Dentons — Türkiye tax guide",
          "href": "https://www.dentons.com/en/services-and-solutions/global-tax-guide-to-doing-business-in/turkey"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "en": {
      "title": "Foreign company managed from Turkey 2026: residence and tax exposure",
      "metaDescription": "Manage a foreign LLC, SAS or UAE company from Turkey: business centre, permanent establishment, remuneration and tax.",
      "shortAnswer": "An overseas-incorporated company can become Turkish tax resident if its actual business centre is in Turkey. A permanent establishment may also create tax exposure without a residence transfer.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent professionals. Request an assessment before moving or changing contracts.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Legal seat and business centre",
          "body": "Article 3 of Corporate Tax Law 5520 tests the legal seat or business centre. If either is in Turkey, domestic law generally taxes worldwide corporate profits. If both are abroad, local activity may trigger limited liability; treaties may restrict this right. Establish who makes strategic decisions, signs contracts, manages staff and controls banking. An offshore mailing address is not proof of substance."
        },
        {
          "id": "remote-2",
          "title": "Separate residence, source and relief",
          "body": "Article 20/D covers individuals becoming Turkish tax residents from 1 January 2026, subject to domicile and tax-history conditions over the preceding three calendar years, with statutory exceptions for certain capital income. Apply for certification by settlement year-end, or the following February for November and December settlement. Twenty-year relief covers only eligible foreign income. Work performed in Turkey can generate domestic income even with an offshore customer. Immigration, tax and work authorisation are separate."
        },
        {
          "id": "remote-3",
          "title": "Map risks from the actual facts",
          "body": "The table identifies review points rather than determining liability for any individual company.",
          "table": {
            "headers": [
              "Situation",
              "Main tax question"
            ],
            "rows": [
              [
                "Actual management in Turkey",
                "Corporate residence"
              ],
              [
                "Permanent local office or team",
                "Permanent establishment"
              ],
              [
                "Passive shareholder without local management",
                "Personal tax and dividends"
              ],
              [
                "Intragroup services",
                "Transfer pricing, VAT, withholding"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Resident company tax illustration",
          "body": "If a company is subject to ordinary Turkish CIT at 25% with TRY 1,000,000 taxable profit, arithmetic tax is TRY 250,000 before credits, treaties or incentives. Do not automatically add two national tax bills; assess treaty residence, double-tax relief and local filings. Director salary and dividends are separate flows.",
          "table": {
            "headers": [
              "Indicator",
              "Amount (TRY)"
            ],
            "rows": [
              [
                "Taxable profit",
                "1,000,000"
              ],
              [
                "Ordinary CIT",
                "250,000"
              ],
              [
                "Balance before distribution",
                "750,000"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "Before taking action",
          "body": "Keep dated contracts, travel records, tax returns, residence evidence and payment statements. Check departure-country obligations and treaties. Distinguish taxable base, cash flow, contributions and fees in projections. Tax relief does not automatically remove other filing requirements."
        }
      ],
      "faqs": [
        {
          "question": "Is a foreign-incorporated company always non-resident?",
          "answer": "No, its business centre may create Turkish residence."
        },
        {
          "question": "Does a home office always create a PE?",
          "answer": "No; facts and the treaty determine exposure."
        },
        {
          "question": "Does 20/D exempt the company?",
          "answer": "No, only qualifying personal foreign income."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "PwC — Corporate residence",
          "href": "https://taxsummaries.pwc.com/turkey/corporate/corporate-residence"
        },
        {
          "label": "Dentons — Türkiye tax guide",
          "href": "https://www.dentons.com/en/services-and-solutions/global-tax-guide-to-doing-business-in/turkey"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "ru": {
      "title": "Иностранная компания под управлением из Турции 2026: резидентство и налоги",
      "metaDescription": "Управление иностранной LLC или компанией ОАЭ из Турции: центр деятельности, постоянное представительство и налоги.",
      "shortAnswer": "Компания, зарегистрированная за рубежом, может стать резидентом Турции при расположении фактического центра деятельности в стране. Постоянное представительство также может создавать налоговые обязательства.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми специалистами. Запросите оценку до переезда или изменения договоров.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Юридический адрес и центр деятельности",
          "body": "Статья 3 закона № 5520 учитывает юридический или фактический центр. При наличии одного из них в Турции обычно облагается мировая прибыль компании. Если оба за рубежом, местная деятельность может вызвать ограниченное налогообложение; соглашение может ограничивать его. Определите, кто принимает решения, подписывает договоры, руководит персоналом и банком. Зарубежный почтовый адрес не доказывает реальную деятельность."
        },
        {
          "id": "remote-2",
          "title": "Резидентство, источник и льгота",
          "body": "Статья 20/D относится к физлицам, ставшим налоговыми резидентами с 1 января 2026 года, при соблюдении условий места жительства и налоговой истории за три предыдущих календарных года, с исключениями для отдельных доходов капитала. Сертификат запрашивается до конца года поселения или до конца следующего февраля при поселении в ноябре или декабре. Двадцатилетняя льгота охватывает только подходящие зарубежные доходы. Работа в Турции может давать местный доход даже с зарубежным клиентом. ВНЖ, налоги и право на работу различаются."
        },
        {
          "id": "remote-3",
          "title": "Карта рисков",
          "body": "Таблица показывает вопросы проверки, а не определяет налог конкретной компании.",
          "table": {
            "headers": [
              "Ситуация",
              "Основной вопрос"
            ],
            "rows": [
              [
                "Фактическое управление в Турции",
                "Резидентство компании"
              ],
              [
                "Постоянный местный офис или команда",
                "Постоянное представительство"
              ],
              [
                "Пассивный акционер без местного управления",
                "Личный налог и дивиденды"
              ],
              [
                "Внутригрупповые услуги",
                "Трансфертные цены, НДС, удержание"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Пример налога резидентной компании",
          "body": "Если компания облагается по общей ставке 25% и имеет 1 млн лир облагаемой прибыли, условный налог — 250 000 лир до зачётов, соглашений и льгот. Не складывайте механически налоги двух стран: проверьте договорное резидентство, устранение двойного налога и отчётность. Зарплата директора и дивиденды различаются.",
          "table": {
            "headers": [
              "Показатель",
              "Сумма (лиры)"
            ],
            "rows": [
              [
                "Облагаемая прибыль",
                "1 000 000"
              ],
              [
                "Налог компании",
                "250 000"
              ],
              [
                "Остаток до выплаты",
                "750 000"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "Перед оформлением",
          "body": "Храните датированные договоры, историю поездок, декларации, доказательства резидентства и платежей. Проверьте обязанности прежней страны и соглашения. Различайте налоговую базу, денежный поток, взносы и расходы. Льгота не отменяет автоматически другие декларации."
        }
      ],
      "faqs": [
        {
          "question": "Зарубежная компания всегда нерезидент?",
          "answer": "Нет, центр деятельности может создать резидентство."
        },
        {
          "question": "Всегда ли домашний офис создаёт представительство?",
          "answer": "Нет, важны факты и соглашение."
        },
        {
          "question": "Освобождает ли 20/D компанию?",
          "answer": "Нет, только подходящий личный зарубежный доход."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "PwC — Corporate residence",
          "href": "https://taxsummaries.pwc.com/turkey/corporate/corporate-residence"
        },
        {
          "label": "Dentons — Türkiye tax guide",
          "href": "https://www.dentons.com/en/services-and-solutions/global-tax-guide-to-doing-business-in/turkey"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "ar": {
      "title": "إدارة شركة أجنبية من تركيا 2026: الإقامة والمخاطر الضريبية",
      "metaDescription": "إدارة شركة أجنبية أو إماراتية من تركيا ومركز الأعمال والمنشأة الدائمة والأجور والضرائب.",
      "shortAnswer": "قد تصبح الشركة المسجلة بالخارج مقيمة ضريبياً في تركيا إذا كان مركز أعمالها الفعلي فيها. وقد تنشأ ضريبة عبر منشأة دائمة دون تغير الإقامة.",
      "bosphorasHelp": "تنسق Bosphoras الزيارات الاستكشافية والسكن والمواعيد مع مختصين مستقلين. اطلب دراسة وضعك قبل الانتقال أو تغيير العقود.",
      "sections": [
        {
          "id": "remote-1",
          "title": "المقر القانوني ومركز الأعمال",
          "body": "تعتمد المادة 3 من قانون 5520 المقر القانوني أو مركز الأعمال. إذا وجد أحدهما في تركيا تخضع الشركة عادة لأرباحها العالمية وفق القانون المحلي. إذا كان الاثنان بالخارج قد ينشئ النشاط المحلي خضوعاً محدوداً مع مراعاة الاتفاقية. حدد من يقرر ويوقع ويشرف على الموظفين والحسابات. لا يثبت عنوان بريدي أجنبي النشاط الفعلي."
        },
        {
          "id": "remote-2",
          "title": "الفصل بين الإقامة والمصدر والإعفاء",
          "body": "تشمل المادة 20/D الأفراد المستقرين ضريبياً منذ 1 يناير 2026 بشروط الموطن والتاريخ الضريبي خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر أو ديسمبر. يقتصر إعفاء عشرين عاماً على الدخل الأجنبي المؤهل. قد ينتج العمل في تركيا دخلاً محلياً رغم وجود عميل أجنبي. الإقامة والضريبة وإذن العمل مسائل منفصلة."
        },
        {
          "id": "remote-3",
          "title": "خريطة المخاطر حسب الواقع",
          "body": "يحدد الجدول المسائل الواجب فحصها لا الالتزام النهائي لشركة معينة.",
          "table": {
            "headers": [
              "الوضع",
              "المسألة الضريبية"
            ],
            "rows": [
              [
                "الإدارة الفعلية في تركيا",
                "إقامة الشركة"
              ],
              [
                "مكتب أو فريق محلي دائم",
                "منشأة دائمة"
              ],
              [
                "مساهم سلبي بلا إدارة محلية",
                "ضريبة الفرد والتوزيعات"
              ],
              [
                "خدمات داخل المجموعة",
                "تسعير التحويل والقيمة المضافة والاقتطاع"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "مثال ضريبة شركة مقيمة",
          "body": "إذا خضعت الشركة لنسبة 25% العادية وحققت ربحاً خاضعاً قدره مليون ليرة فالضريبة الحسابية 250 ألفاً قبل الائتمانات والاتفاقيات والحوافز. لا تجمع ضرائب الدولتين آلياً؛ ادرس الإقامة الاتفاقية وإزالة الازدواج والإقرارات. يختلف أجر المدير عن التوزيعات.",
          "table": {
            "headers": [
              "المؤشر",
              "المبلغ بالليرة"
            ],
            "rows": [
              [
                "الربح الخاضع",
                "1,000,000"
              ],
              [
                "ضريبة الشركات العادية",
                "250,000"
              ],
              [
                "المتبقي قبل التوزيع",
                "750,000"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "قبل الإجراءات",
          "body": "احتفظ بالعقود المؤرخة وسجلات السفر والإقرارات وإثباتات الإقامة والمدفوعات. ادرس التزامات الدولة السابقة والاتفاقيات. ميز الوعاء الضريبي والتدفق النقدي والاشتراكات والرسوم. لا يلغي الإعفاء تلقائياً الإقرارات الأخرى."
        }
      ],
      "faqs": [
        {
          "question": "هل الشركة الأجنبية غير مقيمة دائماً؟",
          "answer": "لا، قد ينشئ مركز الأعمال إقامة تركية."
        },
        {
          "question": "هل ينشئ المكتب المنزلي منشأة دائمة دائماً؟",
          "answer": "لا، يعتمد على الوقائع والاتفاقية."
        },
        {
          "question": "هل تعفي 20/D الشركة؟",
          "answer": "لا، الدخل الشخصي الأجنبي المؤهل فقط."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "PwC — Corporate residence",
          "href": "https://taxsummaries.pwc.com/turkey/corporate/corporate-residence"
        },
        {
          "label": "Dentons — Türkiye tax guide",
          "href": "https://www.dentons.com/en/services-and-solutions/global-tax-guide-to-doing-business-in/turkey"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    }
  },
  "digital-nomad-tax": {
    "fr": {
      "title": "Digital nomad en Turquie 2026 : visa, salaire et fiscalité du télétravail",
      "metaDescription": "Visa nomade à 3 000 USD/mois, âge 21–55 ans, revenus salariés ou freelance et exonérations réellement applicables.",
      "shortAnswer": "Le visa digital nomad ne crée pas d'exonération fiscale automatique. Le salaire d'un travail accompli en Turquie est généralement turc ; des dispositifs séparés peuvent s'appliquer.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, la recherche de logement et les rendez-vous avec des professionnels indépendants. Demandez une étude de votre situation avant de déménager ou de modifier vos contrats.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Conditions du programme officiel",
          "body": "GoTürkiye exige 21–55 ans, diplôme universitaire, passeport valable au moins six mois à l'arrivée, photo biométrique, contrat avec employeur ou client établi hors de Turquie, et revenu de 3 000 USD mensuels ou 36 000 USD annuels. La France, le Royaume-Uni, les États-Unis, le Canada et plusieurs autres nationalités figurent sur la liste. Le certificat d'identification précède la demande de visa au consulat ; il ne vaut pas carte de séjour ni exonération fiscale."
        },
        {
          "id": "remote-2",
          "title": "Distinguer résidence, source et exonération",
          "body": "L'article 20/D concerne les personnes physiques devenues résidentes fiscales à partir du 1er janvier 2026, sous conditions de domicile et de fiscalité pendant les trois années civiles antérieures, avec exceptions légales pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou avant fin février suivante pour novembre et décembre. Les vingt ans d'exonération ne couvrent que les revenus étrangers admissibles. Le travail exercé en Turquie peut produire du revenu turc même avec un client étranger. Titre de séjour, impôt et droit au travail sont trois questions distinctes."
        },
        {
          "id": "remote-3",
          "title": "Comparer les statuts de travail",
          "body": "L'article 23/14 peut exonérer certains salaires en devises payés sur les revenus étrangers d'un employeur sans siège ni centre d'affaires en Turquie, sous conditions. Il faut vérifier l'activité turque de l'employeur et la sécurité sociale. Le freelance qualifié relève d'une autre déduction (89/13) et de ses propres critères.",
          "table": {
            "headers": [
              "Profil",
              "Règle à examiner"
            ],
            "rows": [
              [
                "Salarié d'employeur étranger",
                "Article 23/14 si conditions réunies"
              ],
              [
                "Développeur indépendant exportateur",
                "Article 89/13 si admissible"
              ],
              [
                "Consultant généraliste",
                "Barème ordinaire sauf régime applicable"
              ],
              [
                "Rentier propriétaire d'actifs étrangers",
                "20/D si admissible"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Budget et obligations",
          "body": "Avec 36 000 USD de revenu annuel et un budget hypothétique de 24 000 USD, il reste 12 000 USD avant impôts, cotisations et dépenses exceptionnelles. Ce n'est pas une estimation du coût de vie. Suivez vos jours de présence, lieux de travail, contrats et retenues. Vérifiez les autorisations pour tout travail auprès de clients locaux.",
          "table": {
            "headers": [
              "Poste",
              "Montant"
            ],
            "rows": [
              [
                "Revenu annuel",
                "36 000 USD"
              ],
              [
                "Budget annuel",
                "24 000 USD"
              ],
              [
                "Reste avant impôts",
                "12 000 USD"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "Avant toute démarche",
          "body": "Conservez un dossier daté des contrats, déplacements, déclarations fiscales, preuves de résidence et relevés de paiement. Vérifiez les obligations du pays de départ et les conventions. Pour les estimations, distinguez assiette fiscale, trésorerie, cotisations et frais. Un avantage fiscal ne supprime pas automatiquement les autres déclarations."
        }
      ],
      "faqs": [
        {
          "question": "Le seuil de 3 000 USD est-il un seuil fiscal ?",
          "answer": "Non, c'est un critère du programme migratoire."
        },
        {
          "question": "Peut-on travailler pour une société turque avec ce certificat ?",
          "answer": "Le programme vise les contrats étrangers ; le travail local nécessite le statut approprié."
        },
        {
          "question": "Le salaire est-il exonéré vingt ans ?",
          "answer": "Pas automatiquement ; 20/D ne couvre pas le travail local."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GoTürkiye — Digital Nomad",
          "href": "https://goturkiye.com/uk/digitalnomads/application-requirements-for-digital-nomad-visa-and-short-term-residence"
        },
        {
          "label": "OZM — Article 23/14",
          "href": "https://ozmconsultancy.com/remote-employee-foreign-employer-turkey-20d-vs-23-14/"
        },
        {
          "label": "GİB — décision 11257, application aux logiciels",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/ozelge/39061"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "en": {
      "title": "Digital nomad in Turkey 2026: visa, salary and remote-work tax",
      "metaDescription": "Digital nomad visa: USD 3,000/month, age 21–55, employee versus freelancer and actual tax relief.",
      "shortAnswer": "A digital nomad visa does not automatically confer a tax exemption. Salary from work performed in Turkey is generally domestic-source; separate relief may apply.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent professionals. Request an assessment before moving or changing contracts.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Official programme requirements",
          "body": "GoTürkiye requires age 21–55, university degree, passport valid at least six months on arrival, biometric photo, contract with an employer or customer outside Turkey and USD 3,000 monthly or USD 36,000 annual income. France, the UK, US, Canada and other listed nationalities qualify. The identification certificate precedes a consular visa application; it is neither a residence permit nor a tax exemption."
        },
        {
          "id": "remote-2",
          "title": "Separate residence, source and relief",
          "body": "Article 20/D covers individuals becoming Turkish tax residents from 1 January 2026, subject to domicile and tax-history conditions over the preceding three calendar years, with statutory exceptions for certain capital income. Apply for certification by settlement year-end, or the following February for November and December settlement. Twenty-year relief covers only eligible foreign income. Work performed in Turkey can generate domestic income even with an offshore customer. Immigration, tax and work authorisation are separate."
        },
        {
          "id": "remote-3",
          "title": "Compare working arrangements",
          "body": "Article 23/14 may exempt qualifying foreign-currency salaries paid from foreign earnings by an employer without a Turkish seat or business centre. Review employer activities in Turkey and social security. Eligible freelancers use a separate service-export deduction under 89/13.",
          "table": {
            "headers": [
              "Profile",
              "Rule to assess"
            ],
            "rows": [
              [
                "Foreign-employed remote worker",
                "Article 23/14 if conditions met"
              ],
              [
                "Independent software exporter",
                "Article 89/13 if eligible"
              ],
              [
                "General consultant",
                "Ordinary tax unless other relief applies"
              ],
              [
                "Passive foreign asset investor",
                "20/D if eligible"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Budget and obligations",
          "body": "On USD 36,000 annual income and an assumed USD 24,000 annual budget, USD 12,000 remains before tax, social contributions and exceptional expenses. These are planning inputs, not market prices. Track presence, work locations, contracts and withholding. Confirm authorisation for local work.",
          "table": {
            "headers": [
              "Item",
              "Amount"
            ],
            "rows": [
              [
                "Annual income",
                "USD 36,000"
              ],
              [
                "Annual budget",
                "USD 24,000"
              ],
              [
                "Balance before tax",
                "USD 12,000"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "Before taking action",
          "body": "Keep dated contracts, travel records, tax returns, residence evidence and payment statements. Check departure-country obligations and treaties. Distinguish taxable base, cash flow, contributions and fees in projections. Tax relief does not automatically remove other filing requirements."
        }
      ],
      "faqs": [
        {
          "question": "Is USD 3,000 a tax threshold?",
          "answer": "No, it is an immigration-programme requirement."
        },
        {
          "question": "Can I work for a Turkish company using this certificate?",
          "answer": "The scheme targets foreign contracts; local work requires suitable permission."
        },
        {
          "question": "Is salary exempt for twenty years?",
          "answer": "Not automatically; 20/D does not exempt local work."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GoTürkiye — Digital Nomad",
          "href": "https://goturkiye.com/uk/digitalnomads/application-requirements-for-digital-nomad-visa-and-short-term-residence"
        },
        {
          "label": "OZM — Article 23/14",
          "href": "https://ozmconsultancy.com/remote-employee-foreign-employer-turkey-20d-vs-23-14/"
        },
        {
          "label": "GİB — décision 11257, application aux logiciels",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/ozelge/39061"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "ru": {
      "title": "Цифровой кочевник в Турции 2026: виза, зарплата и налоги",
      "metaDescription": "Виза digital nomad: доход 3 000 USD в месяц, возраст 21–55, работа по найму и фриланс, налоговые льготы.",
      "shortAnswer": "Виза цифрового кочевника не даёт автоматической налоговой льготы. Зарплата за работу в Турции обычно имеет местный источник; возможны отдельные льготы.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми специалистами. Запросите оценку до переезда или изменения договоров.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Официальные требования",
          "body": "GoTürkiye требует возраст 21–55 лет, диплом вуза, паспорт на шесть месяцев с даты въезда, биометрическое фото, договор с работодателем или клиентом за пределами Турции и доход 3 000 USD в месяц либо 36 000 в год. Франция, Великобритания, США, Канада и другие страны включены в перечень. Сертификат предшествует консульской визе и не является ВНЖ или налоговой льготой."
        },
        {
          "id": "remote-2",
          "title": "Резидентство, источник и льгота",
          "body": "Статья 20/D относится к физлицам, ставшим налоговыми резидентами с 1 января 2026 года, при соблюдении условий места жительства и налоговой истории за три предыдущих календарных года, с исключениями для отдельных доходов капитала. Сертификат запрашивается до конца года поселения или до конца следующего февраля при поселении в ноябре или декабре. Двадцатилетняя льгота охватывает только подходящие зарубежные доходы. Работа в Турции может давать местный доход даже с зарубежным клиентом. ВНЖ, налоги и право на работу различаются."
        },
        {
          "id": "remote-3",
          "title": "Сравнение форм работы",
          "body": "Статья 23/14 может освобождать подходящую зарплату в валюте из зарубежных доходов работодателя без юридического или делового центра в Турции. Проверьте местную деятельность работодателя и социальное страхование. Для подходящего фриланса предусмотрен отдельный вычет 89/13.",
          "table": {
            "headers": [
              "Профиль",
              "Правило"
            ],
            "rows": [
              [
                "Удалённый работник иностранной компании",
                "Статья 23/14 при соответствии"
              ],
              [
                "Независимый экспортёр ПО",
                "Статья 89/13 при соответствии"
              ],
              [
                "Общий консультант",
                "Обычный налог без иной льготы"
              ],
              [
                "Пассивный инвестор зарубежных активов",
                "20/D при соответствии"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Бюджет и обязанности",
          "body": "При годовом доходе 36 000 USD и условных расходах 24 000 остаётся 12 000 до налогов, взносов и чрезвычайных расходов. Это план, не рыночные цены. Учитывайте дни пребывания, место работы, договоры и удержания. Для местной работы проверьте разрешения.",
          "table": {
            "headers": [
              "Статья",
              "Сумма"
            ],
            "rows": [
              [
                "Годовой доход",
                "36 000 USD"
              ],
              [
                "Годовой бюджет",
                "24 000 USD"
              ],
              [
                "Остаток до налогов",
                "12 000 USD"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "Перед оформлением",
          "body": "Храните датированные договоры, историю поездок, декларации, доказательства резидентства и платежей. Проверьте обязанности прежней страны и соглашения. Различайте налоговую базу, денежный поток, взносы и расходы. Льгота не отменяет автоматически другие декларации."
        }
      ],
      "faqs": [
        {
          "question": "3 000 USD — налоговый порог?",
          "answer": "Нет, миграционное требование."
        },
        {
          "question": "Можно ли работать на турецкую компанию?",
          "answer": "Программа для зарубежных договоров, местная работа требует подходящего статуса."
        },
        {
          "question": "Зарплата освобождается на двадцать лет?",
          "answer": "Нет автоматически; 20/D не охватывает работу в Турции."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GoTürkiye — Digital Nomad",
          "href": "https://goturkiye.com/uk/digitalnomads/application-requirements-for-digital-nomad-visa-and-short-term-residence"
        },
        {
          "label": "OZM — Article 23/14",
          "href": "https://ozmconsultancy.com/remote-employee-foreign-employer-turkey-20d-vs-23-14/"
        },
        {
          "label": "GİB — décision 11257, application aux logiciels",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/ozelge/39061"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "ar": {
      "title": "الرحالة الرقمي في تركيا 2026: التأشيرة والراتب وضرائب العمل عن بعد",
      "metaDescription": "تأشيرة الرحالة بدخل 3,000 دولار شهرياً وعمر 21–55 والعمل الحر والراتب والإعفاءات.",
      "shortAnswer": "لا تمنح تأشيرة الرحالة إعفاءً ضريبياً تلقائياً. الراتب مقابل العمل في تركيا محلي المصدر عادة وقد تطبق إعفاءات مستقلة.",
      "bosphorasHelp": "تنسق Bosphoras الزيارات الاستكشافية والسكن والمواعيد مع مختصين مستقلين. اطلب دراسة وضعك قبل الانتقال أو تغيير العقود.",
      "sections": [
        {
          "id": "remote-1",
          "title": "شروط البرنامج الرسمي",
          "body": "تشترط GoTürkiye عمر 21–55 وشهادة جامعية وجوازاً سارياً ستة أشهر على الأقل منذ الوصول وصورة بيومترية وعقداً مع جهة خارج تركيا ودخلاً 3,000 دولار شهرياً أو 36 ألفاً سنوياً. تشمل القائمة فرنسا وبريطانيا وأمريكا وكندا ودولاً أخرى. تسبق شهادة التعريف طلب التأشيرة بالقنصلية وليست إقامة أو إعفاء ضريبياً."
        },
        {
          "id": "remote-2",
          "title": "الفصل بين الإقامة والمصدر والإعفاء",
          "body": "تشمل المادة 20/D الأفراد المستقرين ضريبياً منذ 1 يناير 2026 بشروط الموطن والتاريخ الضريبي خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر أو ديسمبر. يقتصر إعفاء عشرين عاماً على الدخل الأجنبي المؤهل. قد ينتج العمل في تركيا دخلاً محلياً رغم وجود عميل أجنبي. الإقامة والضريبة وإذن العمل مسائل منفصلة."
        },
        {
          "id": "remote-3",
          "title": "مقارنة أوضاع العمل",
          "body": "قد تعفي المادة 23/14 الأجور المؤهلة بالعملة الأجنبية من أرباح أجنبية لصاحب عمل بلا مقر قانوني أو مركز أعمال في تركيا. تدرس أنشطة صاحب العمل المحلية والضمان الاجتماعي. للعمل الحر المؤهل خصم مستقل وفق 89/13.",
          "table": {
            "headers": [
              "الفئة",
              "القاعدة"
            ],
            "rows": [
              [
                "موظف عن بعد لجهة أجنبية",
                "23/14 عند الأهلية"
              ],
              [
                "مطور مستقل مصدر للبرمجيات",
                "89/13 عند الأهلية"
              ],
              [
                "مستشار عام",
                "القواعد العامة دون إعفاء آخر"
              ],
              [
                "مستثمر سلبي بأصول أجنبية",
                "20/D عند الأهلية"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "الميزانية والالتزامات",
          "body": "عند دخل سنوي 36 ألف دولار وميزانية افتراضية 24 ألفاً يبقى 12 ألفاً قبل الضرائب والاشتراكات والنفقات الاستثنائية. هذه مدخلات تخطيط لا أسعار السوق. سجل أيام الإقامة ومكان العمل والعقود والاقتطاعات. تحقق من إذن العمل المحلي.",
          "table": {
            "headers": [
              "البند",
              "المبلغ"
            ],
            "rows": [
              [
                "الدخل السنوي",
                "36,000 دولار"
              ],
              [
                "الميزانية السنوية",
                "24,000 دولار"
              ],
              [
                "المتبقي قبل الضريبة",
                "12,000 دولار"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "قبل الإجراءات",
          "body": "احتفظ بالعقود المؤرخة وسجلات السفر والإقرارات وإثباتات الإقامة والمدفوعات. ادرس التزامات الدولة السابقة والاتفاقيات. ميز الوعاء الضريبي والتدفق النقدي والاشتراكات والرسوم. لا يلغي الإعفاء تلقائياً الإقرارات الأخرى."
        }
      ],
      "faqs": [
        {
          "question": "هل 3,000 دولار حد ضريبي؟",
          "answer": "لا، شرط هجرة."
        },
        {
          "question": "هل أعمل لشركة تركية بهذه الشهادة؟",
          "answer": "البرنامج للعقود الأجنبية والعمل المحلي يحتاج وضعاً مناسباً."
        },
        {
          "question": "هل يعفى الراتب عشرين عاماً؟",
          "answer": "ليس تلقائياً، لا تشمل 20/D العمل المحلي."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GoTürkiye — Digital Nomad",
          "href": "https://goturkiye.com/uk/digitalnomads/application-requirements-for-digital-nomad-visa-and-short-term-residence"
        },
        {
          "label": "OZM — Article 23/14",
          "href": "https://ozmconsultancy.com/remote-employee-foreign-employer-turkey-20d-vs-23-14/"
        },
        {
          "label": "GİB — décision 11257, application aux logiciels",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/ozelge/39061"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    }
  },
  "turkey-tax-residence-certificate": {
    "fr": {
      "title": "Certificat de résidence fiscale en Turquie 2026 : Mukimlik et 20/D",
      "metaDescription": "Demandez le Mukimlik Belgesi : formulaires GİB, pièces pour étrangers, conventions et différence avec le certificat 20/D.",
      "shortAnswer": "Le Mukimlik Belgesi prouve la résidence fiscale aux fins d'une convention. Le certificat 20/D est une autre décision administrative portant sur l'exonération des revenus étrangers.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, la recherche de logement et les rendez-vous avec des professionnels indépendants. Demandez une étude de votre situation avant de déménager ou de modifier vos contrats.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Quel document et quel guichet ?",
          "body": "La circulaire GİB ÇVÖA/2014-3 précise que les personnes physiques étrangères, même sans assujettissement permanent, relèvent de l'administration centrale GİB pour le certificat conventionnel. Les citoyens turcs et les sociétés peuvent relever d'autres guichets selon leur dossier et le pays destinataire. Pour un étranger, la circulaire prévoit la requête annexe 3, copie du titre de séjour et questionnaire annexe 4. Confirmez les modalités de dépôt actuelles auprès du service compétent ; le portail fiscal permet de consulter les services disponibles."
        },
        {
          "id": "remote-2",
          "title": "Distinguer résidence, source et exonération",
          "body": "L'article 20/D concerne les personnes physiques devenues résidentes fiscales à partir du 1er janvier 2026, sous conditions de domicile et de fiscalité pendant les trois années civiles antérieures, avec exceptions légales pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou avant fin février suivante pour novembre et décembre. Les vingt ans d'exonération ne couvrent que les revenus étrangers admissibles. Le travail exercé en Turquie peut produire du revenu turc même avec un client étranger. Titre de séjour, impôt et droit au travail sont trois questions distinctes."
        },
        {
          "id": "remote-3",
          "title": "Trois documents à ne pas confondre",
          "body": "La demande peut nécessiter des preuves supplémentaires du domicile, des jours de séjour et des intérêts personnels. Un délai ou tarif universel n'est pas publié dans la circulaire citée.",
          "table": {
            "headers": [
              "Document",
              "Fonction",
              "Autorité"
            ],
            "rows": [
              [
                "Mukimlik Belgesi",
                "Résidence conventionnelle",
                "GİB compétente"
              ],
              [
                "İstisna Belgesi 20/D",
                "Exonération admissible",
                "Service fiscal chargé de l'imposition"
              ],
              [
                "İkamet",
                "Séjour administratif",
                "Migration Management"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Utilisation à l'étranger",
          "body": "Précisez le pays destinataire et l'année fiscale ; fournissez le certificat à l'administration ou au payeur avant l'application d'une réduction de retenue lorsque requis. Des formulaires propres au pays ou traductions peuvent être demandés. Conservez l'original et une copie. Le certificat ne garantit pas à lui seul un taux réduit si les conditions de bénéficiaire effectif ou de la convention ne sont pas remplies."
        },
        {
          "id": "remote-5",
          "title": "Avant toute démarche",
          "body": "Conservez un dossier daté des contrats, déplacements, déclarations fiscales, preuves de résidence et relevés de paiement. Vérifiez les obligations du pays de départ et les conventions. Pour les estimations, distinguez assiette fiscale, trésorerie, cotisations et frais. Un avantage fiscal ne supprime pas automatiquement les autres déclarations."
        }
      ],
      "faqs": [
        {
          "question": "Le Mukimlik donne-t-il vingt ans d'exonération ?",
          "answer": "Non, demandez séparément le certificat 20/D."
        },
        {
          "question": "Puis-je l'obtenir avec un simple numéro fiscal ?",
          "answer": "Non, la résidence fiscale réelle doit être établie."
        },
        {
          "question": "Faut-il un certificat pour chaque année ?",
          "answer": "Vérifiez la période justifiée et les exigences du pays ou payeur destinataire."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GİB — Circular 3 / Mukimlik",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fmevzuat%2Fuluslararasi_mevzuat%2FCifte_Vergilendirme%2Fcvoa_sirkuler_3.htm"
        },
        {
          "label": "GİB — Dijital Vergi Dairesi",
          "href": "https://dijital.gib.gov.tr/"
        },
        {
          "label": "Migration Management",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    },
    "en": {
      "title": "Turkey tax residence certificate 2026: Mukimlik and 20/D",
      "metaDescription": "Request a Mukimlik Belgesi: GİB forms, foreign applicant documents, treaty use and the separate Article 20/D certificate.",
      "shortAnswer": "The Mukimlik Belgesi evidences treaty tax residence. The Article 20/D certificate separately confirms eligibility for foreign-income relief.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent professionals. Request an assessment before moving or changing contracts.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Which document and authority?",
          "body": "GİB circular ÇVÖA/2014-3 assigns foreign individuals, with or without continuous tax registration, to central GİB for treaty certificates. Turkish citizens and companies may use other offices depending on their circumstances and destination country. For foreign individuals the circular specifies Annex 3 petition, residence permit copy and Annex 4 questionnaire. Confirm current filing arrangements with the competent office; the digital tax portal lists available services."
        },
        {
          "id": "remote-2",
          "title": "Separate residence, source and relief",
          "body": "Article 20/D covers individuals becoming Turkish tax residents from 1 January 2026, subject to domicile and tax-history conditions over the preceding three calendar years, with statutory exceptions for certain capital income. Apply for certification by settlement year-end, or the following February for November and December settlement. Twenty-year relief covers only eligible foreign income. Work performed in Turkey can generate domestic income even with an offshore customer. Immigration, tax and work authorisation are separate."
        },
        {
          "id": "remote-3",
          "title": "Three documents with distinct functions",
          "body": "Additional evidence of domicile, presence and personal ties may be needed. The cited circular does not publish a universal turnaround time or fee.",
          "table": {
            "headers": [
              "Document",
              "Function",
              "Authority"
            ],
            "rows": [
              [
                "Mukimlik Belgesi",
                "Treaty residence",
                "Competent GİB office"
              ],
              [
                "20/D İstisna Belgesi",
                "Qualifying tax relief",
                "Competent assessing tax office"
              ],
              [
                "İkamet",
                "Immigration residence",
                "Migration Management"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Use abroad",
          "body": "Specify destination country and tax year. Supply the certificate to the authority or payer before reduced withholding where required. Country-specific forms or translations may be requested. Keep the original and a copy. A certificate alone does not ensure treaty benefits if beneficial ownership or other treaty conditions are not fulfilled."
        },
        {
          "id": "remote-5",
          "title": "Before taking action",
          "body": "Keep dated contracts, travel records, tax returns, residence evidence and payment statements. Check departure-country obligations and treaties. Distinguish taxable base, cash flow, contributions and fees in projections. Tax relief does not automatically remove other filing requirements."
        }
      ],
      "faqs": [
        {
          "question": "Does Mukimlik grant twenty-year relief?",
          "answer": "No, apply separately for 20/D certification."
        },
        {
          "question": "Is a tax ID sufficient?",
          "answer": "No, actual tax residence must be established."
        },
        {
          "question": "Is a certificate required every year?",
          "answer": "Check the period evidenced and recipient-country or payer requirements."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GİB — Circular 3 / Mukimlik",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fmevzuat%2Fuluslararasi_mevzuat%2FCifte_Vergilendirme%2Fcvoa_sirkuler_3.htm"
        },
        {
          "label": "GİB — Dijital Vergi Dairesi",
          "href": "https://dijital.gib.gov.tr/"
        },
        {
          "label": "Migration Management",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    },
    "ru": {
      "title": "Сертификат налогового резидентства Турции 2026: Mukimlik и 20/D",
      "metaDescription": "Как получить Mukimlik Belgesi: формы GİB, документы иностранцев, соглашения и отдельный сертификат 20/D.",
      "shortAnswer": "Mukimlik Belgesi подтверждает резидентство для соглашения. Сертификат 20/D отдельно подтверждает право на освобождение зарубежных доходов.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми специалистами. Запросите оценку до переезда или изменения договоров.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Документ и орган",
          "body": "Циркуляр GİB ÇVÖA/2014-3 относит иностранных физлиц, независимо от постоянной налоговой регистрации, к центральной GİB для договорного сертификата. Для граждан Турции и компаний возможны иные органы в зависимости от дела и страны назначения. Иностранцу нужны заявление по приложению 3, копия ВНЖ и анкета приложения 4. Уточните актуальную процедуру в компетентном органе; цифровой портал содержит доступные услуги."
        },
        {
          "id": "remote-2",
          "title": "Резидентство, источник и льгота",
          "body": "Статья 20/D относится к физлицам, ставшим налоговыми резидентами с 1 января 2026 года, при соблюдении условий места жительства и налоговой истории за три предыдущих календарных года, с исключениями для отдельных доходов капитала. Сертификат запрашивается до конца года поселения или до конца следующего февраля при поселении в ноябре или декабре. Двадцатилетняя льгота охватывает только подходящие зарубежные доходы. Работа в Турции может давать местный доход даже с зарубежным клиентом. ВНЖ, налоги и право на работу различаются."
        },
        {
          "id": "remote-3",
          "title": "Три разных документа",
          "body": "Могут понадобиться доказательства места жительства, присутствия и личных связей. Циркуляр не устанавливает универсальный срок или тариф.",
          "table": {
            "headers": [
              "Документ",
              "Назначение",
              "Орган"
            ],
            "rows": [
              [
                "Mukimlik Belgesi",
                "Резидентство для соглашения",
                "Компетентная GİB"
              ],
              [
                "İstisna Belgesi 20/D",
                "Налоговая льгота",
                "Компетентная налоговая инспекция"
              ],
              [
                "İkamet",
                "Миграционное проживание",
                "Миграционная служба"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Использование за рубежом",
          "body": "Укажите страну и налоговый год. Передайте сертификат органу или плательщику до применения снижения удержания, если требуется. Возможны отдельные формы и переводы. Храните оригинал и копию. Сертификат не гарантирует льготу без выполнения условий соглашения и действительного получателя."
        },
        {
          "id": "remote-5",
          "title": "Перед оформлением",
          "body": "Храните датированные договоры, историю поездок, декларации, доказательства резидентства и платежей. Проверьте обязанности прежней страны и соглашения. Различайте налоговую базу, денежный поток, взносы и расходы. Льгота не отменяет автоматически другие декларации."
        }
      ],
      "faqs": [
        {
          "question": "Mukimlik даёт льготу на двадцать лет?",
          "answer": "Нет, отдельно заявляется 20/D."
        },
        {
          "question": "Достаточно ли налогового номера?",
          "answer": "Нет, нужно фактическое резидентство."
        },
        {
          "question": "Нужен ли сертификат каждый год?",
          "answer": "Проверьте подтверждённый период и требования страны или плательщика."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GİB — Circular 3 / Mukimlik",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fmevzuat%2Fuluslararasi_mevzuat%2FCifte_Vergilendirme%2Fcvoa_sirkuler_3.htm"
        },
        {
          "label": "GİB — Dijital Vergi Dairesi",
          "href": "https://dijital.gib.gov.tr/"
        },
        {
          "label": "Migration Management",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    },
    "ar": {
      "title": "شهادة الإقامة الضريبية في تركيا 2026: Mukimlik و20/D",
      "metaDescription": "طلب Mukimlik Belgesi ونماذج إدارة الإيرادات ووثائق الأجانب والاتفاقيات وشهادة إعفاء 20/D المستقلة.",
      "shortAnswer": "تثبت Mukimlik Belgesi الإقامة لأغراض الاتفاقيات. أما شهادة 20/D فتخص أهلية إعفاء الدخل الأجنبي بصورة مستقلة.",
      "bosphorasHelp": "تنسق Bosphoras الزيارات الاستكشافية والسكن والمواعيد مع مختصين مستقلين. اطلب دراسة وضعك قبل الانتقال أو تغيير العقود.",
      "sections": [
        {
          "id": "remote-1",
          "title": "الوثيقة والجهة المختصة",
          "body": "يسند تعميم GİB رقم ÇVÖA/2014-3 شهادات الأفراد الأجانب إلى الإدارة المركزية سواء لديهم تسجيل ضريبي مستمر أم لا. قد تختلف الجهة للمواطنين الأتراك والشركات بحسب الملف والبلد. للأجنبي طلب الملحق 3 ونسخة الإقامة واستبيان الملحق 4. أكد طريقة التقديم الحالية مع الجهة؛ تعرض البوابة الرقمية الخدمات المتاحة."
        },
        {
          "id": "remote-2",
          "title": "الفصل بين الإقامة والمصدر والإعفاء",
          "body": "تشمل المادة 20/D الأفراد المستقرين ضريبياً منذ 1 يناير 2026 بشروط الموطن والتاريخ الضريبي خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر أو ديسمبر. يقتصر إعفاء عشرين عاماً على الدخل الأجنبي المؤهل. قد ينتج العمل في تركيا دخلاً محلياً رغم وجود عميل أجنبي. الإقامة والضريبة وإذن العمل مسائل منفصلة."
        },
        {
          "id": "remote-3",
          "title": "ثلاث وثائق مختلفة",
          "body": "قد تطلب إثباتات الموطن والوجود والمصالح الشخصية. لا يحدد التعميم المذكور أجلاً أو رسماً موحداً.",
          "table": {
            "headers": [
              "الوثيقة",
              "الوظيفة",
              "الجهة"
            ],
            "rows": [
              [
                "Mukimlik Belgesi",
                "إقامة اتفاقية",
                "إدارة الإيرادات المختصة"
              ],
              [
                "İstisna Belgesi 20/D",
                "الإعفاء المؤهل",
                "مكتب الضريبة المختص"
              ],
              [
                "İkamet",
                "إقامة إدارية",
                "إدارة الهجرة"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "الاستخدام بالخارج",
          "body": "حدد الدولة والسنة الضريبية وقدم الشهادة للجهة أو الدافع قبل تطبيق تخفيض الاقتطاع عند اللزوم. قد تطلب نماذج خاصة أو ترجمة. احتفظ بالأصل والنسخة. لا تضمن الشهادة مزايا الاتفاقية دون استيفاء شروط المستفيد الفعلي وغيرها."
        },
        {
          "id": "remote-5",
          "title": "قبل الإجراءات",
          "body": "احتفظ بالعقود المؤرخة وسجلات السفر والإقرارات وإثباتات الإقامة والمدفوعات. ادرس التزامات الدولة السابقة والاتفاقيات. ميز الوعاء الضريبي والتدفق النقدي والاشتراكات والرسوم. لا يلغي الإعفاء تلقائياً الإقرارات الأخرى."
        }
      ],
      "faqs": [
        {
          "question": "هل يمنح Mukimlik إعفاء عشرين عاماً؟",
          "answer": "لا، تقدم شهادة 20/D منفصلة."
        },
        {
          "question": "هل يكفي الرقم الضريبي؟",
          "answer": "لا، تلزم إقامة ضريبية فعلية."
        },
        {
          "question": "هل أحتاج شهادة كل سنة؟",
          "answer": "تحقق من الفترة المثبتة ومتطلبات الدولة أو الدافع."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GİB — Circular 3 / Mukimlik",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fmevzuat%2Fuluslararasi_mevzuat%2FCifte_Vergilendirme%2Fcvoa_sirkuler_3.htm"
        },
        {
          "label": "GİB — Dijital Vergi Dairesi",
          "href": "https://dijital.gib.gov.tr/"
        },
        {
          "label": "Migration Management",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    }
  },
  "move-istanbul-tax": {
    "fr": {
      "title": "S'installer à Istanbul en 2026 : démarches fiscales, logement et calendrier",
      "metaDescription": "Déménager à Istanbul : calendrier avant départ et après arrivée, ikamet, adresse, numéro fiscal, certificat 20/D et budget de première année.",
      "shortAnswer": "Un déménagement fiscal à Istanbul se prépare avant le départ : domicile, revenus, autorisations, documents et obligations du pays d'origine. Il ne suffit pas de signer un bail.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, la recherche de logement et les rendez-vous avec des professionnels indépendants. Demandez une étude de votre situation avant de déménager ou de modifier vos contrats.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Avant le départ : constituer le dossier",
          "body": "Rassemblez trois années de déclarations et certificats de résidence étrangers, preuves de logement, contrats, relevés de revenus, historique de déplacement et documents familiaux. Identifiez les revenus passifs, le travail et la gestion de sociétés. Choisissez un logement adapté aux transports et aux écoles ; vérifiez que son adresse est enregistrable avant de signer. Şişli et Levent facilitent certains trajets professionnels ; la rive asiatique convient lorsque les activités s'y concentrent."
        },
        {
          "id": "remote-2",
          "title": "Distinguer résidence, source et exonération",
          "body": "L'article 20/D concerne les personnes physiques devenues résidentes fiscales à partir du 1er janvier 2026, sous conditions de domicile et de fiscalité pendant les trois années civiles antérieures, avec exceptions légales pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou avant fin février suivante pour novembre et décembre. Les vingt ans d'exonération ne couvrent que les revenus étrangers admissibles. Le travail exercé en Turquie peut produire du revenu turc même avec un client étranger. Titre de séjour, impôt et droit au travail sont trois questions distinctes."
        },
        {
          "id": "remote-3",
          "title": "Calendrier de première année",
          "body": "Exemple pour une installation fiscale effective en décembre 2026 : dépôt 20/D avant le 28 février 2027, sous réserve d'éligibilité. Les autorisations d'immigration peuvent avoir des échéances antérieures ; vérifiez-les séparément.",
          "table": {
            "headers": [
              "Étape",
              "Action"
            ],
            "rows": [
              [
                "Avant départ",
                "Dossier fiscal et logement"
              ],
              [
                "Arrivée",
                "Adresse, couverture et statut de séjour"
              ],
              [
                "Après installation",
                "Numéro fiscal si nécessaire et dossier GİB"
              ],
              [
                "28 février 2027",
                "Échéance 20/D pour décembre 2026"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Budget de déménagement",
          "body": "Exemple choisi, non devis : 4 500 € de dépôt et installation, 1 500 € de voyage et formalités, 2 000 € de réserve initiale, soit 8 000 € avant dépenses récurrentes. Ajoutez le loyer mensuel, charges, santé, école et impôts. Demandez les conditions exactes du bail et des services avant engagement.",
          "table": {
            "headers": [
              "Poste",
              "Montant"
            ],
            "rows": [
              [
                "Dépôt et installation",
                "4 500 €"
              ],
              [
                "Voyage et formalités",
                "1 500 €"
              ],
              [
                "Réserve",
                "2 000 €"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "Avant toute démarche",
          "body": "Conservez un dossier daté des contrats, déplacements, déclarations fiscales, preuves de résidence et relevés de paiement. Vérifiez les obligations du pays de départ et les conventions. Pour les estimations, distinguez assiette fiscale, trésorerie, cotisations et frais. Un avantage fiscal ne supprime pas automatiquement les autres déclarations."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je attendre la fin du visa pour toutes les démarches ?",
          "answer": "Non, chaque autorisation et certificat a son propre calendrier."
        },
        {
          "question": "Une adresse à Istanbul suffit-elle à bénéficier de 20/D ?",
          "answer": "Non, l'établissement fiscal réel et l'historique sont déterminants."
        },
        {
          "question": "Le budget de 8 000 € est-il obligatoire ?",
          "answer": "Non, il s'agit d'un exemple adaptable."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GİB — Circular 3 / Mukimlik",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fmevzuat%2Fuluslararasi_mevzuat%2FCifte_Vergilendirme%2Fcvoa_sirkuler_3.htm"
        },
        {
          "label": "GİB — Dijital Vergi Dairesi",
          "href": "https://dijital.gib.gov.tr/"
        },
        {
          "label": "Migration Management",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "en": {
      "title": "Moving to Istanbul in 2026: tax paperwork, housing and timeline",
      "metaDescription": "Relocate to Istanbul: pre-move and arrival timeline, ikamet, address, tax ID, 20/D certificate and initial cash budget.",
      "shortAnswer": "A tax relocation to Istanbul begins before departure: actual domicile, income, permissions, evidence and former-country obligations. Signing a lease alone is insufficient.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent professionals. Request an assessment before moving or changing contracts.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Prepare evidence before departure",
          "body": "Gather three years of foreign tax returns and residence certificates, housing evidence, contracts, income statements, travel history and family documents. Classify passive income, work and company management. Choose accommodation around transport and schooling; confirm address registration eligibility before signing. Şişli and Levent can suit business travel; the Asian side may suit activities concentrated there."
        },
        {
          "id": "remote-2",
          "title": "Separate residence, source and relief",
          "body": "Article 20/D covers individuals becoming Turkish tax residents from 1 January 2026, subject to domicile and tax-history conditions over the preceding three calendar years, with statutory exceptions for certain capital income. Apply for certification by settlement year-end, or the following February for November and December settlement. Twenty-year relief covers only eligible foreign income. Work performed in Turkey can generate domestic income even with an offshore customer. Immigration, tax and work authorisation are separate."
        },
        {
          "id": "remote-3",
          "title": "First-year timeline",
          "body": "For actual tax settlement in December 2026, the Article 20/D filing deadline is 28 February 2027 if eligible. Immigration permissions may have earlier deadlines; assess separately.",
          "table": {
            "headers": [
              "Stage",
              "Action"
            ],
            "rows": [
              [
                "Before departure",
                "Tax file and housing"
              ],
              [
                "Arrival",
                "Address, cover and immigration status"
              ],
              [
                "After settlement",
                "Tax ID if needed and GİB file"
              ],
              [
                "28 February 2027",
                "20/D deadline for December 2026"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Moving budget example",
          "body": "Chosen planning inputs, not a quote: €4,500 for deposit and setup, €1,500 travel and paperwork, €2,000 contingency = €8,000 before recurring costs. Add monthly rent, utilities, healthcare, schooling and taxes. Obtain actual lease and service terms before committing.",
          "table": {
            "headers": [
              "Item",
              "Amount"
            ],
            "rows": [
              [
                "Deposit and setup",
                "€4,500"
              ],
              [
                "Travel and paperwork",
                "€1,500"
              ],
              [
                "Contingency",
                "€2,000"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "Before taking action",
          "body": "Keep dated contracts, travel records, tax returns, residence evidence and payment statements. Check departure-country obligations and treaties. Distinguish taxable base, cash flow, contributions and fees in projections. Tax relief does not automatically remove other filing requirements."
        }
      ],
      "faqs": [
        {
          "question": "Can all paperwork wait until my visa expires?",
          "answer": "No, permits and certificates have separate deadlines."
        },
        {
          "question": "Is an Istanbul address enough for 20/D?",
          "answer": "No, actual tax settlement and history determine eligibility."
        },
        {
          "question": "Is €8,000 mandatory?",
          "answer": "No, it is an adjustable planning example."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GİB — Circular 3 / Mukimlik",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fmevzuat%2Fuluslararasi_mevzuat%2FCifte_Vergilendirme%2Fcvoa_sirkuler_3.htm"
        },
        {
          "label": "GİB — Dijital Vergi Dairesi",
          "href": "https://dijital.gib.gov.tr/"
        },
        {
          "label": "Migration Management",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "ru": {
      "title": "Переезд в Стамбул 2026: налоговые документы, жильё и сроки",
      "metaDescription": "Переезд в Стамбул: подготовка, икамет, адрес, налоговый номер, сертификат 20/D и первоначальный бюджет.",
      "shortAnswer": "Налоговый переезд готовится заранее: фактическое проживание, доходы, разрешения, документы и прежние обязанности. Одного договора аренды недостаточно.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми специалистами. Запросите оценку до переезда или изменения договоров.",
      "sections": [
        {
          "id": "remote-1",
          "title": "Подготовка до отъезда",
          "body": "Соберите декларации и сертификаты за три года, жильё, договоры, доходы, историю поездок и семейные документы. Разделите пассивный доход, работу и управление компаниями. Выберите жильё с учётом транспорта и школ; проверьте регистрацию адреса до подписания. Шишли и Левент удобны для отдельных деловых маршрутов, азиатская сторона — при работе и учёбе там."
        },
        {
          "id": "remote-2",
          "title": "Резидентство, источник и льгота",
          "body": "Статья 20/D относится к физлицам, ставшим налоговыми резидентами с 1 января 2026 года, при соблюдении условий места жительства и налоговой истории за три предыдущих календарных года, с исключениями для отдельных доходов капитала. Сертификат запрашивается до конца года поселения или до конца следующего февраля при поселении в ноябре или декабре. Двадцатилетняя льгота охватывает только подходящие зарубежные доходы. Работа в Турции может давать местный доход даже с зарубежным клиентом. ВНЖ, налоги и право на работу различаются."
        },
        {
          "id": "remote-3",
          "title": "Календарь первого года",
          "body": "При фактическом налоговом поселении в декабре 2026 года заявление 20/D подаётся до 28 февраля 2027 при соответствии условиям. Миграционные сроки могут наступить раньше.",
          "table": {
            "headers": [
              "Этап",
              "Действие"
            ],
            "rows": [
              [
                "До выезда",
                "Налоговый файл и жильё"
              ],
              [
                "Прибытие",
                "Адрес, страховка и статус"
              ],
              [
                "После поселения",
                "Налоговый номер при необходимости и GİB"
              ],
              [
                "28 февраля 2027",
                "Срок 20/D для декабря 2026"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "Пример бюджета переезда",
          "body": "Условные суммы, не смета: 4 500 евро на депозит и обустройство, 1 500 на поездку и документы, 2 000 резерв, итого 8 000 до регулярных расходов. Добавьте аренду, коммунальные, медицину, школу и налоги. Узнайте реальные условия до заключения договоров.",
          "table": {
            "headers": [
              "Статья",
              "Сумма"
            ],
            "rows": [
              [
                "Депозит и обустройство",
                "4 500 €"
              ],
              [
                "Поездка и документы",
                "1 500 €"
              ],
              [
                "Резерв",
                "2 000 €"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "Перед оформлением",
          "body": "Храните датированные договоры, историю поездок, декларации, доказательства резидентства и платежей. Проверьте обязанности прежней страны и соглашения. Различайте налоговую базу, денежный поток, взносы и расходы. Льгота не отменяет автоматически другие декларации."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли ждать окончания визы?",
          "answer": "Нет, у разрешений и сертификатов свои сроки."
        },
        {
          "question": "Достаточно ли адреса в Стамбуле?",
          "answer": "Нет, проверяются фактическое поселение и история."
        },
        {
          "question": "8 000 евро обязательны?",
          "answer": "Нет, это условный пример."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GİB — Circular 3 / Mukimlik",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fmevzuat%2Fuluslararasi_mevzuat%2FCifte_Vergilendirme%2Fcvoa_sirkuler_3.htm"
        },
        {
          "label": "GİB — Dijital Vergi Dairesi",
          "href": "https://dijital.gib.gov.tr/"
        },
        {
          "label": "Migration Management",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    },
    "ar": {
      "title": "الانتقال إلى إسطنبول 2026: الإجراءات الضريبية والسكن والمواعيد",
      "metaDescription": "الانتقال إلى إسطنبول قبل السفر وبعد الوصول والإيكامت والعنوان والرقم الضريبي وشهادة 20/D وميزانية البداية.",
      "shortAnswer": "يبدأ الانتقال الضريبي قبل المغادرة بالموطن الفعلي والدخل والتصاريح والوثائق والتزامات الدولة السابقة. لا يكفي عقد إيجار.",
      "bosphorasHelp": "تنسق Bosphoras الزيارات الاستكشافية والسكن والمواعيد مع مختصين مستقلين. اطلب دراسة وضعك قبل الانتقال أو تغيير العقود.",
      "sections": [
        {
          "id": "remote-1",
          "title": "التحضير قبل المغادرة",
          "body": "اجمع إقرارات وشهادات إقامة ثلاث سنوات وإثبات السكن والعقود والدخل والسفر ووثائق الأسرة. ميز الدخل السلبي والعمل وإدارة الشركات. اختر السكن حسب النقل والمدارس وتحقق من تسجيل العنوان قبل التوقيع. تناسب شيشلي وليفنت بعض التنقلات المهنية والجانب الآسيوي من تتركز أعماله ودراسته هناك."
        },
        {
          "id": "remote-2",
          "title": "الفصل بين الإقامة والمصدر والإعفاء",
          "body": "تشمل المادة 20/D الأفراد المستقرين ضريبياً منذ 1 يناير 2026 بشروط الموطن والتاريخ الضريبي خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر أو ديسمبر. يقتصر إعفاء عشرين عاماً على الدخل الأجنبي المؤهل. قد ينتج العمل في تركيا دخلاً محلياً رغم وجود عميل أجنبي. الإقامة والضريبة وإذن العمل مسائل منفصلة."
        },
        {
          "id": "remote-3",
          "title": "جدول السنة الأولى",
          "body": "عند الاستقرار الضريبي الفعلي في ديسمبر 2026 يكون آخر موعد لطلب 20/D هو 28 فبراير 2027 عند الأهلية. قد تسبق ذلك مواعيد الهجرة؛ تحقق منفصلة.",
          "table": {
            "headers": [
              "المرحلة",
              "الإجراء"
            ],
            "rows": [
              [
                "قبل المغادرة",
                "الملف الضريبي والسكن"
              ],
              [
                "الوصول",
                "العنوان والتأمين ووضع الإقامة"
              ],
              [
                "بعد الاستقرار",
                "رقم ضريبي عند الحاجة وملف GİB"
              ],
              [
                "28 فبراير 2027",
                "موعد 20/D لديسمبر 2026"
              ]
            ]
          }
        },
        {
          "id": "remote-4",
          "title": "مثال ميزانية الانتقال",
          "body": "مخصصات افتراضية لا عرض سعر: 4,500 يورو للضمان والتجهيز و1,500 للسفر والوثائق و2,000 للاحتياط، أي 8,000 قبل النفقات المتكررة. أضف الإيجار والخدمات والصحة والمدرسة والضرائب. احصل على الشروط الفعلية قبل الالتزام.",
          "table": {
            "headers": [
              "البند",
              "المبلغ"
            ],
            "rows": [
              [
                "الضمان والتجهيز",
                "4,500 يورو"
              ],
              [
                "السفر والوثائق",
                "1,500 يورو"
              ],
              [
                "الاحتياط",
                "2,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "remote-5",
          "title": "قبل الإجراءات",
          "body": "احتفظ بالعقود المؤرخة وسجلات السفر والإقرارات وإثباتات الإقامة والمدفوعات. ادرس التزامات الدولة السابقة والاتفاقيات. ميز الوعاء الضريبي والتدفق النقدي والاشتراكات والرسوم. لا يلغي الإعفاء تلقائياً الإقرارات الأخرى."
        }
      ],
      "faqs": [
        {
          "question": "هل أنتظر انتهاء التأشيرة؟",
          "answer": "لا، لكل تصريح وشهادة مواعيد مستقلة."
        },
        {
          "question": "هل يكفي العنوان في إسطنبول؟",
          "answer": "لا، الاستقرار الفعلي والتاريخ مهمان."
        },
        {
          "question": "هل 8,000 يورو إلزامية؟",
          "answer": "لا، مثال تخطيطي قابل للتعديل."
        }
      ],
      "sources": [
        {
          "label": "Communiqué 333 (JO)",
          "href": "https://www.lexpera.com.tr/resmi-gazete/metin/gelir-vergisi-genel-tebligi-seri-no-333-33300"
        },
        {
          "label": "GİB — Circular 3 / Mukimlik",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFileResources?objectKey=arsiv%2Fmevzuat%2Fuluslararasi_mevzuat%2FCifte_Vergilendirme%2Fcvoa_sirkuler_3.htm"
        },
        {
          "label": "GİB — Dijital Vergi Dairesi",
          "href": "https://dijital.gib.gov.tr/"
        },
        {
          "label": "Migration Management",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        }
      ]
    }
  }
};
