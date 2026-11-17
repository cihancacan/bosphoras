import type { Locale } from '@/lib/i18n';
import type { EditorialGuide } from './highPotentialEditorialGuides';
export const corporateEditorialGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "family-holding-turkey": {
    "fr": {
      "title": "Holding familiale en Turquie 2026 : création, capital et transmission",
      "metaDescription": "Créer une holding familiale turque : A.Ş., capital de 250 000 TL, dividendes, gouvernance, succession et organisation des filiales.",
      "shortAnswer": "Une holding familiale détient des participations pour le compte de ses associés. En Turquie la holding constituée comme telle relève de la forme A.Ş. et d'une autorisation ministérielle ; elle ne confond pas patrimoine familial et actifs sociaux.",
      "bosphorasHelp": "Bosphoras coordonne la préparation du projet, les rendez-vous avec les avocats, experts-comptables et fiscalistes indépendants, ainsi que l'installation sur place. Demandez une étude de structure avant tout apport ou constitution. Nous ne fournissons pas de gestion de portefeuille réglementée.",
      "sections": [
        {
          "id": "company-1",
          "title": "Choisir la structure et le capital",
          "body": "Une A.Ş. peut être constituée par un seul associé, étranger ou turc. Pour une holding au sens réglementaire, vérifiez l'autorisation préalable du ministère du Commerce et les statuts avant immatriculation. Les minima de droit commun ne couvrent pas les exigences sectorielles. Une Ltd. ordinaire peut détenir des actifs dans les limites de son objet, mais ne remplace pas automatiquement une holding réglementée.",
          "table": {
            "headers": [
              "Structure",
              "Capital minimum (TL)"
            ],
            "rows": [
              [
                "Ltd. ordinaire",
                "50 000"
              ],
              [
                "A.Ş. ordinaire",
                "250 000"
              ],
              [
                "A.Ş. non cotée à capital autorisé",
                "500 000"
              ]
            ]
          }
        },
        {
          "id": "company-2",
          "title": "Gouvernance familiale et continuité",
          "body": "Les statuts et un pacte d'associés peuvent prévoir les droits de vote, la nomination des administrateurs, les règles de cession, l'entrée des héritiers et les mécanismes de résolution des conflits. Recensez chaque actif et son propriétaire juridique ; un immeuble personnel ne devient pas social sans acte de transfert. Chiffrez les coûts fiscaux des apports et les droits des créanciers."
        },
        {
          "id": "company-3",
          "title": "Dividendes entre sociétés et distributions personnelles",
          "body": "Les dividendes d'une filiale turque vers une société mère turque sont généralement exonérés d'impôt sur les sociétés et non soumis à retenue. Une distribution ultérieure à un particulier constitue un flux différent : retenue turque ordinaire de 15 %, avec règles de déclaration et conventions. L'article 20/D ne s'applique pas aux sociétés et ne transforme pas les dividendes turcs en revenus étrangers."
        },
        {
          "id": "company-4",
          "title": "Exemple de constitution et financement",
          "body": "Sur un capital A.Ş. ordinaire souscrit de 250 000 TL en numéraire, au moins 62 500 TL sont à libérer avant l'inscription et le solde dans les 24 mois. La contribution à l'autorité de concurrence représente 0,04 % du capital, soit 100 TL ; les frais de registre, conseil, traduction et exploitation s'ajoutent. Les capitaux libérés restent des fonds de la société, pas des frais administratifs."
        },
        {
          "id": "company-5",
          "title": "Transmission et protection du patrimoine",
          "body": "Le taux successoral de 1 % de la loi 7582 concerne certaines transmissions par décès relevant de l'exonération personnelle de vingt ans ; il ne constitue pas un régime de succession universel pour les actions d'une holding. Étudiez résidence des héritiers, nationalités, droit applicable, valeur des titres et éventuels droits étrangers. Organisez les comptes et les pouvoirs pour que la société continue à fonctionner en cas d'incapacité ou de décès."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je détenir 100 % d'une holding ?",
          "answer": "En principe une A.Ş. peut avoir un seul associé ; autorisations et restrictions sectorielles restent applicables."
        },
        {
          "question": "La holding exonère-t-elle mon revenu personnel ?",
          "answer": "Non, il faut distinguer fiscalité sociale et personnelle."
        },
        {
          "question": "Le capital est-il un coût perdu ?",
          "answer": "Non, c'est un apport à la société, distinct des frais de constitution."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye : création"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "Capital minimum 2026"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/income-determination",
          "label": "PwC : revenus et participations"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC : impôt sociétés"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC : retenues"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Loi 7582 du 4 juin 2026"
        }
      ]
    },
    "en": {
      "title": "Family holding in Turkey 2026: setup, capital and succession",
      "metaDescription": "Create a Turkish family holding: A.Ş., TRY 250,000 capital, dividends, governance, succession and subsidiary ownership.",
      "shortAnswer": "A family holding owns participations for its shareholders. A Turkish holding formed as such generally requires the A.Ş. form and ministry approval; company assets remain distinct from personal assets.",
      "bosphorasHelp": "Bosphoras coordinates project preparation, appointments with independent lawyers, accountants and tax specialists, and local relocation. Request a structure assessment before incorporation or contribution. We do not provide regulated portfolio management.",
      "sections": [
        {
          "id": "company-1",
          "title": "Choose the form and capital",
          "body": "An A.Ş. can have one Turkish or foreign shareholder. A regulated holding requires prior Ministry of Trade approval and appropriate articles before registration. General capital minima do not cover sector-specific requirements. An ordinary Ltd. may own assets within its objects but is not automatically a substitute for a regulated holding.",
          "table": {
            "headers": [
              "Form",
              "Minimum capital (TRY)"
            ],
            "rows": [
              [
                "Ordinary Ltd.",
                "50,000"
              ],
              [
                "Ordinary A.Ş.",
                "250,000"
              ],
              [
                "Non-public registered-capital A.Ş.",
                "500,000"
              ]
            ]
          }
        },
        {
          "id": "company-2",
          "title": "Family governance and continuity",
          "body": "Articles and shareholder agreements can address voting, directors, share transfers, heirs and disputes. Inventory each asset and its legal owner; personal property does not become corporate property without a transfer. Assess contribution taxes and creditor rights."
        },
        {
          "id": "company-3",
          "title": "Intercompany versus personal dividends",
          "body": "Dividends from a Turkish subsidiary to a Turkish resident corporate parent are generally exempt from corporate tax and withholding. Subsequent individual distributions are separate: ordinary Turkish withholding is 15%, subject to reporting and treaties. Article 20/D is not corporate relief and does not make Turkish dividends foreign-source."
        },
        {
          "id": "company-4",
          "title": "Incorporation funding example",
          "body": "For ordinary A.Ş. cash capital of TRY 250,000, at least TRY 62,500 is paid before registration and the balance within 24 months. Competition Authority contribution of 0.04% is TRY 100. Registry, legal, translation and operating costs are additional. Paid-in capital is a company asset, not an administrative fee."
        },
        {
          "id": "company-5",
          "title": "Succession planning",
          "body": "The 1% inheritance provision in Law 7582 covers qualifying transfers by death during the personal twenty-year regime, not all holding company shares. Review heirs' residence, nationality, governing law, share values and foreign taxes. Arrange accounts and powers so operations continue if a family member dies or becomes incapacitated."
        }
      ],
      "faqs": [
        {
          "question": "Can I own 100%?",
          "answer": "Generally an A.Ş. may have one shareholder, subject to approvals and sector restrictions."
        },
        {
          "question": "Does a holding exempt personal income?",
          "answer": "No, corporate and personal taxation differ."
        },
        {
          "question": "Is share capital a sunk fee?",
          "answer": "No, it is a contribution to the company."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: incorporation"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "2026 capital requirements"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/income-determination",
          "label": "PwC: income and participations"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: corporate tax"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC: withholding"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Law 7582 of 4 June 2026"
        }
      ]
    },
    "ru": {
      "title": "Семейный холдинг в Турции 2026: учреждение, капитал и наследование",
      "metaDescription": "Турецкий семейный холдинг A.Ş.: капитал 250 000 лир, дивиденды, управление, дочерние компании и наследование.",
      "shortAnswer": "Семейный холдинг владеет долями в интересах своих акционеров. Холдинг в установленном правовом смысле оформляется как A.Ş. с разрешением министерства; личные и корпоративные активы разделены.",
      "bosphorasHelp": "Bosphoras организует подготовку проекта, встречи с независимыми юристами, бухгалтерами и налоговыми специалистами и переезд. Запросите оценку структуры до учреждения или внесения активов. Мы не оказываем лицензируемое управление портфелями.",
      "sections": [
        {
          "id": "company-1",
          "title": "Форма и капитал",
          "body": "A.Ş. может иметь одного турецкого или иностранного акционера. Для холдинга необходимо проверить предварительное разрешение Министерства торговли и устав до регистрации. Общие минимумы не заменяют отраслевые требования. Обычная Ltd. может владеть активами в пределах предмета деятельности, но не автоматически заменяет регулируемый холдинг.",
          "table": {
            "headers": [
              "Форма",
              "Минимальный капитал (лиры)"
            ],
            "rows": [
              [
                "Обычная Ltd.",
                "50 000"
              ],
              [
                "Обычная A.Ş.",
                "250 000"
              ],
              [
                "Непубличная A.Ş. с системой зарегистрированного капитала",
                "500 000"
              ]
            ]
          }
        },
        {
          "id": "company-2",
          "title": "Семейное управление",
          "body": "Устав и соглашение акционеров могут определять голосование, назначение директоров, передачу долей, вступление наследников и разрешение споров. Установите владельца каждого актива: личное имущество не становится корпоративным без передачи. Оцените налоги на внесение имущества и права кредиторов."
        },
        {
          "id": "company-3",
          "title": "Дивиденды компаний и физических лиц",
          "body": "Дивиденды турецкой дочерней компании турецкой материнской компании обычно освобождены от корпоративного налога и удержания. Последующая выплата физическому лицу — отдельный поток с обычным удержанием 15% с учётом декларации и соглашения. Статья 20/D не применяется к компаниям и не делает турецкие дивиденды иностранными."
        },
        {
          "id": "company-4",
          "title": "Пример финансирования",
          "body": "При денежном капитале обычной A.Ş. 250 000 лир до регистрации вносится не менее 62 500, остаток — в течение 24 месяцев. Взнос антимонопольному органу 0,04% составляет 100 лир. Дополнительно оплачиваются регистрация, юристы, переводы и эксплуатация. Капитал принадлежит компании, а не является пошлиной."
        },
        {
          "id": "company-5",
          "title": "Наследование",
          "body": "Ставка 1% закона № 7582 применяется к подходящим наследственным переходам в течение личной двадцатилетней льготы, а не ко всем акциям холдинга. Оцените резидентство наследников, гражданство, право, стоимость акций и зарубежные налоги. Организуйте доступ к счетам и полномочия на случай смерти или недееспособности."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли владеть 100%?",
          "answer": "Как правило, у A.Ş. может быть один акционер с учётом разрешений."
        },
        {
          "question": "Освобождает ли холдинг личные доходы?",
          "answer": "Нет, налог компании и физлица различается."
        },
        {
          "question": "Капитал — невозвратная пошлина?",
          "answer": "Нет, это вклад в компанию."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: регистрация"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "Минимальный капитал 2026"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/income-determination",
          "label": "PwC: доходы и участия"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: корпоративный налог"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC: удержания"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Закон № 7582 от 4 июня 2026"
        }
      ]
    },
    "ar": {
      "title": "تأسيس شركة قابضة عائلية في تركيا 2026: رأس المال والميراث",
      "metaDescription": "شركة قابضة عائلية A.Ş. برأس مال 250 ألف ليرة وتوزيعات الأرباح والحوكمة والشركات التابعة والميراث.",
      "shortAnswer": "تمتلك الشركة القابضة العائلية حصصاً لمساهميها. يتطلب تأسيس القابضة بالمعنى التنظيمي شكل A.Ş. وموافقة الوزارة؛ وتظل أصول الشركة منفصلة عن الأصول الشخصية.",
      "bosphorasHelp": "تنسق Bosphoras إعداد المشروع والمواعيد مع محامين ومحاسبين ومتخصصين ضريبيين مستقلين والاستقرار المحلي. اطلب دراسة الهيكل قبل التأسيس أو المساهمة بالأصول. لا نقدم إدارة محافظ منظمة.",
      "sections": [
        {
          "id": "company-1",
          "title": "الشكل ورأس المال",
          "body": "يمكن تأسيس A.Ş. بمساهم تركي أو أجنبي واحد. للقابضة المنظمة تحقق من موافقة وزارة التجارة المسبقة والنظام الأساسي قبل التسجيل. لا تغني الحدود العامة عن شروط القطاع. قد تمتلك Ltd. العادية أصولاً ضمن غرضها لكنها لا تحل تلقائياً محل القابضة المنظمة.",
          "table": {
            "headers": [
              "الشكل",
              "رأس المال الأدنى بالليرة"
            ],
            "rows": [
              [
                "Ltd. عادية",
                "50,000"
              ],
              [
                "A.Ş. عادية",
                "250,000"
              ],
              [
                "A.Ş. غير مدرجة بنظام رأس المال المسجل",
                "500,000"
              ]
            ]
          }
        },
        {
          "id": "company-2",
          "title": "الحوكمة العائلية والاستمرارية",
          "body": "يمكن للنظام الأساسي واتفاق المساهمين تحديد التصويت والمديرين ونقل الأسهم ودخول الورثة وحل الخلافات. حدد المالك القانوني لكل أصل؛ لا يصبح العقار الشخصي ملكاً للشركة دون نقل. احسب ضرائب المساهمات وحقوق الدائنين."
        },
        {
          "id": "company-3",
          "title": "توزيعات الشركات والأفراد",
          "body": "تعفى عادة توزيعات شركة تركية تابعة إلى شركة أم تركية من ضريبة الشركات والاقتطاع. التوزيع اللاحق للفرد تدفق منفصل باقتطاع عادي 15% مع قواعد الإقرار والاتفاقيات. لا تشمل المادة 20/D الشركات ولا تجعل التوزيع التركي دخلاً أجنبياً."
        },
        {
          "id": "company-4",
          "title": "مثال تمويل التأسيس",
          "body": "لرأس مال نقدي 250 ألف ليرة لشركة A.Ş. عادية يدفع 62,500 على الأقل قبل التسجيل والباقي خلال 24 شهراً. مساهمة سلطة المنافسة 0.04% أي 100 ليرة. تضاف رسوم التسجيل والمحاماة والترجمة والتشغيل. رأس المال أصل للشركة وليس رسماً."
        },
        {
          "id": "company-5",
          "title": "الميراث وحماية الأصول",
          "body": "يخص معدل 1% في القانون 7582 انتقالات الميراث المؤهلة خلال الإعفاء الشخصي لعشرين عاماً لا كل أسهم القابضة. ادرس إقامة الورثة وجنسيتهم والقانون والقيمة والضرائب الأجنبية. نظم الحسابات والصلاحيات لاستمرار العمل عند الوفاة أو العجز."
        }
      ],
      "faqs": [
        {
          "question": "هل أمتلك 100%؟",
          "answer": "يمكن مبدئياً وجود مساهم واحد مع الموافقات والقيود."
        },
        {
          "question": "هل تعفي القابضة دخلي الشخصي؟",
          "answer": "لا، تختلف ضريبة الشركة والفرد."
        },
        {
          "question": "هل رأس المال رسم مفقود؟",
          "answer": "لا، هو مساهمة في الشركة."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: تأسيس الشركات"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "رأس المال الأدنى 2026"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/income-determination",
          "label": "PwC: الدخل والمساهمات"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: ضريبة الشركات"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC: الاقتطاعات"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "القانون 7582 بتاريخ 4 يونيو 2026"
        }
      ]
    }
  },
  "wealth-holding-turkey": {
    "fr": {
      "title": "Holding patrimoniale en Turquie 2026 : dividendes étrangers, fiscalité et actifs",
      "metaDescription": "Comparez détention directe et holding turque : exonérations de participations, réforme à 80 % et simulation de dividendes étrangers.",
      "shortAnswer": "Une holding patrimoniale peut centraliser les participations et le financement. Son intérêt dépend des actifs, de la taxation des filiales et de la distribution finale ; elle n'est pas une enveloppe universellement exonérée.",
      "bosphorasHelp": "Bosphoras coordonne la préparation du projet, les rendez-vous avec les avocats, experts-comptables et fiscalistes indépendants, ainsi que l'installation sur place. Demandez une étude de structure avant tout apport ou constitution. Nous ne fournissons pas de gestion de portefeuille réglementée.",
      "sections": [
        {
          "id": "company-1",
          "title": "Détention directe ou société",
          "body": "Un portefeuille personnel relève de la fiscalité des personnes physiques ; une société turque est en principe imposable sur ses bénéfices mondiaux. L'apport d'actions ou d'immeubles peut entraîner des droits ou une plus-value. Faites inventorier les actifs, obligations, prix d'acquisition et juridictions avant toute restructuration."
        },
        {
          "id": "company-2",
          "title": "Participations étrangères : conditions 2026",
          "body": "L'exonération totale de dividendes étrangers requiert notamment une filiale de forme admissible, au moins 10 % du capital pendant un an, une charge fiscale étrangère suffisante (généralement 15 %, règles renforcées pour certaines activités financières) et rapatriement avant l'échéance déclarative. La décision 11257 du 29 avril 2026 prévoit une exonération partielle de 80 % pour une participation d'au moins 20 % du capital libéré et le rapatriement dans le délai. L'éligibilité se vérifie séparément pour chaque filiale."
        },
        {
          "id": "company-3",
          "title": "Simulation : 1 million TL de dividendes étrangers",
          "body": "Calcul au taux ordinaire de 25 % sur le solde imposable, sans autres revenus, retenues, crédits, impôt minimum ou règles internationales. L'impôt final peut différer : le minimum local et le traitement des exonérations doivent être examinés. La distribution à un associé personne physique n'est pas incluse.",
          "table": {
            "headers": [
              "Hypothèse",
              "IS arithmétique (TL)"
            ],
            "rows": [
              [
                "Aucune exonération",
                "250 000"
              ],
              [
                "Exonération 80 %",
                "50 000"
              ],
              [
                "Exonération totale admissible",
                "0"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Cessions et holdings internationales",
          "body": "Une cession de participation turque peut bénéficier d'une exonération de 50 % du gain sous conditions de détention d'au moins deux ans, de fonds spécial, d'encaissement et d'activité. Le régime spécifique des holdings internationales vise certaines cessions étrangères : notamment 75 % des actifs hors trésorerie en participations étrangères admissibles, détenues depuis au moins un an, minimum 10 % par filiale, et deux ans de détention pour la cession. Vérifiez les règles de valorisation."
        },
        {
          "id": "company-5",
          "title": "Substance, CFC et dette intragroupe",
          "body": "Documentez fonctions, décisions, personnels, contrats et financement. Les règles CFC peuvent imposer certains bénéfices étrangers non distribués. Le ratio dette liée/fonds propres de 3:1 et les prix de transfert exigent une revue. Une société ne doit pas financer des dépenses privées sans traitement juridique et comptable. La sortie de cash peut créer une retenue ou un impôt personnel."
        }
      ],
      "faqs": [
        {
          "question": "Le taux de 80 % est-il un taux d'impôt ?",
          "answer": "Non, il s'agit d'une fraction de dividende exonérée."
        },
        {
          "question": "Puis-je céder tous mes biens sans impôt ?",
          "answer": "Non, les exonérations de cession ont des critères spécifiques."
        },
        {
          "question": "La holding remplace-t-elle le certificat 20/D ?",
          "answer": "Non, ce sont deux régimes distincts."
        }
      ],
      "sources": [
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/income-determination",
          "label": "PwC : revenus et participations"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2FCK11257_not.pdf",
          "label": "GİB : décision 11257"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC : impôt sociétés"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC : retenues"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC : fiscalité des groupes"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Loi 7582 du 4 juin 2026"
        }
      ]
    },
    "en": {
      "title": "Wealth holding in Turkey 2026: foreign dividends, assets and tax",
      "metaDescription": "Compare direct ownership with Turkish corporate holding: participation relief, the 80% reform and worked foreign-dividend scenarios.",
      "shortAnswer": "A wealth holding can centralise shareholdings and funding. Its value depends on assets, subsidiary tax and eventual distributions; it is not universally tax-free.",
      "bosphorasHelp": "Bosphoras coordinates project preparation, appointments with independent lawyers, accountants and tax specialists, and local relocation. Request a structure assessment before incorporation or contribution. We do not provide regulated portfolio management.",
      "sections": [
        {
          "id": "company-1",
          "title": "Direct or corporate ownership",
          "body": "Personal portfolios follow individual tax rules; a Turkish company is generally taxable on worldwide profits. Contributing shares or property can trigger duties or gains. Inventory acquisition costs, liabilities and jurisdictions before restructuring."
        },
        {
          "id": "company-2",
          "title": "Foreign participation relief in 2026",
          "body": "Full foreign dividend exemption requires among other conditions a qualifying corporate subsidiary, at least 10% capital for one year, sufficient foreign tax burden (generally 15%, higher for certain financial activities) and remittance by the return deadline. Decision 11257 of 29 April 2026 provides 80% partial exemption for holdings of at least 20% of paid-in capital and timely remittance. Assess each subsidiary separately."
        },
        {
          "id": "company-3",
          "title": "TRY 1 million foreign dividend example",
          "body": "Arithmetic at the ordinary 25% rate on the remaining base, excluding other income, withholding, credits, minimum tax and international rules. Actual liability may differ; review local minimum tax and exemption treatment. No individual distribution is included.",
          "table": {
            "headers": [
              "Scenario",
              "Illustrative CIT (TRY)"
            ],
            "rows": [
              [
                "No relief",
                "250,000"
              ],
              [
                "80% exempt",
                "50,000"
              ],
              [
                "Qualifying full exemption",
                "0"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Disposals and international holdings",
          "body": "A Turkish participation disposal may qualify for 50% gain exemption under two-year holding, special reserve, collection and business conditions. The international holding regime covers certain overseas disposals: at least 75% of non-cash assets in qualifying foreign participations held for at least one year, minimum 10% per subsidiary, and two-year holding for the disposed participation. Verify valuation."
        },
        {
          "id": "company-5",
          "title": "Substance, CFC and funding",
          "body": "Document functions, decisions, employees, agreements and financing. CFC rules can tax certain undistributed foreign earnings. The 3:1 related-party debt/equity rule and transfer pricing require review. Do not treat company assets as private spending without legal and accounting treatment. Cash extraction may trigger withholding or personal tax."
        }
      ],
      "faqs": [
        {
          "question": "Is 80% a tax rate?",
          "answer": "No, it is an exempt fraction of dividends."
        },
        {
          "question": "Can every asset be sold tax-free?",
          "answer": "No, disposal exemptions have specific tests."
        },
        {
          "question": "Does a holding replace the 20/D certificate?",
          "answer": "No, the regimes are separate."
        }
      ],
      "sources": [
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/income-determination",
          "label": "PwC: income and participations"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2FCK11257_not.pdf",
          "label": "GİB: Decision 11257"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: corporate tax"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC: withholding"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: group taxation"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Law 7582 of 4 June 2026"
        }
      ]
    },
    "ru": {
      "title": "Имущественный холдинг в Турции 2026: дивиденды, активы и налоги",
      "metaDescription": "Прямое владение и турецкий холдинг: льготы по участиям, реформа 80% и пример расчёта зарубежных дивидендов.",
      "shortAnswer": "Холдинг может объединить доли и финансирование. Его польза зависит от активов, налогов дочерних компаний и последующих выплат; универсального освобождения нет.",
      "bosphorasHelp": "Bosphoras организует подготовку проекта, встречи с независимыми юристами, бухгалтерами и налоговыми специалистами и переезд. Запросите оценку структуры до учреждения или внесения активов. Мы не оказываем лицензируемое управление портфелями.",
      "sections": [
        {
          "id": "company-1",
          "title": "Личное или корпоративное владение",
          "body": "Личный портфель облагается по правилам физлиц; турецкая компания обычно облагается с мировой прибыли. Внесение акций или недвижимости может вызвать пошлины или налог на прирост. До реструктуризации установите стоимость приобретения, обязательства и юрисдикции."
        },
        {
          "id": "company-2",
          "title": "Зарубежные дивиденды в 2026 году",
          "body": "Полная льгота требует, среди прочего, подходящей формы дочерней компании, не менее 10% капитала в течение года, достаточной зарубежной налоговой нагрузки (обычно 15%, выше для некоторых финансовых операций) и перевода до срока декларации. Решение 11257 от 29 апреля 2026 предусматривает частичное освобождение 80% при доле не менее 20% оплаченного капитала и своевременном переводе. Проверяйте каждую компанию."
        },
        {
          "id": "company-3",
          "title": "Пример дивидендов 1 млн лир",
          "body": "Арифметический расчёт по 25% на оставшуюся базу без иных доходов, удержаний, зачётов, минимального налога и международных правил. Итог может отличаться; оцените минимальный налог и льготы. Выплата физлицу не учтена.",
          "table": {
            "headers": [
              "Сценарий",
              "Пример налога (лиры)"
            ],
            "rows": [
              [
                "Без льготы",
                "250 000"
              ],
              [
                "Освобождение 80%",
                "50 000"
              ],
              [
                "Полное освобождение при соответствии",
                "0"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Продажа долей и международные холдинги",
          "body": "Для продажи турецкой доли возможно освобождение 50% прироста при двухлетнем владении, специальном резерве, получении оплаты и условиях деятельности. Международный холдинг может применять отдельную льготу к зарубежной продаже: 75% активов без денежных средств в подходящих иностранных долях не менее года, минимум 10% каждой компании и два года владения продаваемой долей. Уточните оценку."
        },
        {
          "id": "company-5",
          "title": "Реальная деятельность, КИК и долг",
          "body": "Документируйте функции, решения, работников, договоры и финансирование. КИК могут облагать отдельную нераспределённую зарубежную прибыль. Соотношение связанных займов к капиталу 3:1 и трансфертные цены требуют проверки. Личные расходы за счёт компании необходимо правильно оформлять. Вывод средств может повлечь удержание или личный налог."
        }
      ],
      "faqs": [
        {
          "question": "80% — ставка налога?",
          "answer": "Нет, освобождаемая доля дивидендов."
        },
        {
          "question": "Можно ли продать все активы без налога?",
          "answer": "Нет, для льгот есть отдельные условия."
        },
        {
          "question": "Заменяет ли холдинг сертификат 20/D?",
          "answer": "Нет, это разные режимы."
        }
      ],
      "sources": [
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/income-determination",
          "label": "PwC: доходы и участия"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2FCK11257_not.pdf",
          "label": "GİB: решение № 11257"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: корпоративный налог"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC: удержания"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: налоги групп"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Закон № 7582 от 4 июня 2026"
        }
      ]
    },
    "ar": {
      "title": "الشركة القابضة لإدارة الثروة في تركيا 2026: التوزيعات والأصول",
      "metaDescription": "قارن الملكية المباشرة والقابضة التركية وإعفاء المساهمات بنسبة 80% ومثال التوزيعات الأجنبية.",
      "shortAnswer": "يمكن للقابضة تجميع الحصص والتمويل. تعتمد فائدتها على الأصول وضريبة الشركات التابعة والتوزيع النهائي وليست معفاة بصورة عامة.",
      "bosphorasHelp": "تنسق Bosphoras إعداد المشروع والمواعيد مع محامين ومحاسبين ومتخصصين ضريبيين مستقلين والاستقرار المحلي. اطلب دراسة الهيكل قبل التأسيس أو المساهمة بالأصول. لا نقدم إدارة محافظ منظمة.",
      "sections": [
        {
          "id": "company-1",
          "title": "الملكية المباشرة أو المؤسسية",
          "body": "تخضع المحفظة الشخصية لقواعد ضريبة الفرد بينما تخضع الشركة التركية عادة لأرباحها العالمية. قد تؤدي المساهمة بأسهم أو عقار إلى رسوم أو مكاسب خاضعة. احصر تكلفة الأصل والالتزامات والدول قبل إعادة الهيكلة."
        },
        {
          "id": "company-2",
          "title": "التوزيعات الأجنبية في 2026",
          "body": "يتطلب الإعفاء الكامل ضمن شروطه شركة تابعة مؤهلة وحصة 10% لمدة سنة وعبئاً ضريبياً أجنبياً كافياً (عادة 15% وأعلى لبعض الأعمال المالية) وتحويل الدخل قبل موعد الإقرار. يمنح القرار 11257 في 29 أبريل 2026 إعفاءً جزئياً 80% لحصة 20% على الأقل من رأس المال المدفوع والتحويل في الموعد. تدرس كل شركة تابعة منفردة."
        },
        {
          "id": "company-3",
          "title": "مثال توزيع أجنبي بمليون ليرة",
          "body": "حساب توضيحي بنسبة 25% على الوعاء المتبقي دون دخول أخرى أو اقتطاع أو ائتمان أو ضريبة دنيا أو قواعد دولية. قد يختلف الالتزام الفعلي؛ تدرس الضريبة الدنيا والإعفاءات. لا يشمل توزيع الفرد.",
          "table": {
            "headers": [
              "السيناريو",
              "ضريبة شركات توضيحية بالليرة"
            ],
            "rows": [
              [
                "دون إعفاء",
                "250,000"
              ],
              [
                "إعفاء 80%",
                "50,000"
              ],
              [
                "إعفاء كامل عند الأهلية",
                "0"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "بيع الحصص والقابضة الدولية",
          "body": "قد يعفى 50% من مكاسب بيع حصة تركية بشروط حيازة سنتين واحتياطي خاص والتحصيل والنشاط. يشمل النظام الدولي بعض مبيعات الحصص الأجنبية: 75% من الأصول غير النقدية في حصص أجنبية مؤهلة لمدة سنة على الأقل و10% من كل شركة وحيازة الحصة المبيعة سنتين. تحقق من التقييم."
        },
        {
          "id": "company-5",
          "title": "النشاط الفعلي والشركات الأجنبية والديون",
          "body": "وثق الوظائف والقرارات والموظفين والعقود والتمويل. قد تفرض قواعد الشركات الأجنبية الخاضعة للسيطرة ضريبة على أرباح غير موزعة. تراجع نسبة الدين المرتبط إلى حقوق الملكية 3:1 وتسعير التحويل. لا تستخدم أموال الشركة لنفقات خاصة دون معالجة قانونية ومحاسبية. قد يترتب على السحب اقتطاع أو ضريبة شخصية."
        }
      ],
      "faqs": [
        {
          "question": "هل 80% معدل ضريبة؟",
          "answer": "لا، نسبة من التوزيع معفاة."
        },
        {
          "question": "هل يمكن بيع جميع الأصول دون ضريبة؟",
          "answer": "لا، لكل إعفاء شروط."
        },
        {
          "question": "هل تحل القابضة محل شهادة 20/D؟",
          "answer": "لا، النظامان مستقلان."
        }
      ],
      "sources": [
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/income-determination",
          "label": "PwC: الدخل والمساهمات"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2FCK11257_not.pdf",
          "label": "إدارة الإيرادات: القرار 11257"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: ضريبة الشركات"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC: الاقتطاعات"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: ضرائب المجموعات"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "القانون 7582 بتاريخ 4 يونيو 2026"
        }
      ]
    }
  },
  "international-company-turkey": {
    "fr": {
      "title": "Créer une société internationale en Turquie 2026 : capital et régime export",
      "metaDescription": "Filiale, succursale, siège régional : étapes MERSİS, capital A.Ş./Ltd., impôt 25 % et réforme export de 2026–2027.",
      "shortAnswer": "Un investisseur étranger peut généralement constituer une société turque avec détention intégrale, sous réserve des secteurs réglementés. La forme et les avantages fiscaux dépendent de l'activité réelle.",
      "bosphorasHelp": "Bosphoras coordonne la préparation du projet, les rendez-vous avec les avocats, experts-comptables et fiscalistes indépendants, ainsi que l'installation sur place. Demandez une étude de structure avant tout apport ou constitution. Nous ne fournissons pas de gestion de portefeuille réglementée.",
      "sections": [
        {
          "id": "company-1",
          "title": "Filiale, succursale ou bureau de liaison",
          "body": "La Ltd. est une société distincte adaptée à de nombreuses PME ; l'A.Ş. convient souvent aux projets avec actionnaires et investisseurs. La succursale engage directement sa maison mère. Le bureau de liaison, soumis à autorisation, ne peut exercer d'activité commerciale en Turquie.",
          "table": {
            "headers": [
              "Forme",
              "Capital de droit commun"
            ],
            "rows": [
              [
                "Ltd.",
                "50 000 TL"
              ],
              [
                "A.Ş.",
                "250 000 TL"
              ],
              [
                "Succursale",
                "Pas de minimum général"
              ],
              [
                "Liaison",
                "Pas de vente commerciale"
              ]
            ]
          }
        },
        {
          "id": "company-2",
          "title": "Formalités d'immatriculation",
          "body": "Préparez nom, adresse, objet, statuts, associés, dirigeants et pouvoirs, puis identifiants fiscaux et inscription MERSİS. Les documents étrangers sont authentifiés selon le pays (apostille ou légalisation consulaire) et traduits en turc. Déposez au registre du commerce, payez la contribution de concurrence de 0,04 %, libérez le capital selon la forme, puis organisez comptabilité, banque, fiscalité et personnel. La Ltd. peut libérer son capital en numéraire dans les 24 mois."
        },
        {
          "id": "company-3",
          "title": "Fiscalité des bénéfices : 2026 et 2027",
          "body": "Taux ordinaire hors finance de 25 % ; 30 % pour certaines sociétés financières. En 2026 les bénéfices exclusivement issus d'exportations admissibles peuvent bénéficier de cinq points de réduction. La loi 7582 introduit 12,5 % pour les bénéfices de production industrielle admissible ou agricole à partir de 2027, sans cumul de la réduction export sur ces mêmes bénéfices. Le tableau suppose une base nette unique de 1 million TL, sans autres avantages, impôt minimum ou crédits.",
          "table": {
            "headers": [
              "Scénario",
              "IS illustratif (TL)"
            ],
            "rows": [
              [
                "Ordinaire 25 %",
                "250 000"
              ],
              [
                "Export admissible 20 % en 2026",
                "200 000"
              ],
              [
                "Production admissible 12,5 % dès 2027",
                "125 000"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Développer un siège de services international",
          "body": "La loi 7582 introduit les centres de services qualifiés pour groupes actifs dans au moins trois pays et percevant au moins 80 % de leurs recettes annuelles d'entités étrangères liées. Une déduction de 95 % des bénéfices étrangers admissibles peut durer vingt exercices si le rapatriement intervient dans les délais. Le taux de déduction atteint 100 % dans certains sites autorisés, sous conditions. Les formalités d'application et le périmètre d'activité restent déterminants."
        },
        {
          "id": "company-5",
          "title": "Exploitation et commerce transfrontalier",
          "body": "Établissez contrats, documentation des services, lieu réel de décision, facturation et TVA. Le commerce de marchandises achetées et revendues à l'étranger sans entrée en Turquie relève d'une déduction spécifique de 95 % sous conditions ; il ne se confond pas avec la simple exportation. Organisez le permis de travail des dirigeants étrangers et le suivi comptable. Les dividendes à une personne physique restent distincts de l'IS."
        }
      ],
      "faqs": [
        {
          "question": "Un associé étranger doit-il avoir un partenaire turc ?",
          "answer": "Pas en principe, sous réserve des secteurs réglementés."
        },
        {
          "question": "Le taux 12,5 % est-il déjà applicable en 2026 ?",
          "answer": "Non, la disposition s'applique aux exercices concernés à partir de 2027."
        },
        {
          "question": "La société donne-t-elle automatiquement un permis de travail ?",
          "answer": "Non, une autorisation distincte peut être nécessaire."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye : création"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "Capital minimum 2026"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC : impôt sociétés"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Loi 7582 du 4 juin 2026"
        },
        {
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx",
          "label": "Réforme officielle 2026"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC : fiscalité des groupes"
        }
      ]
    },
    "en": {
      "title": "Create an international company in Turkey 2026: capital and export tax",
      "metaDescription": "Subsidiary, branch or regional hub: MERSİS registration, A.Ş./Ltd. capital, 25% tax and 2026–2027 export reforms.",
      "shortAnswer": "Foreign investors can generally establish wholly owned Turkish companies, subject to regulated sectors. Legal form and tax incentives depend on actual activities.",
      "bosphorasHelp": "Bosphoras coordinates project preparation, appointments with independent lawyers, accountants and tax specialists, and local relocation. Request a structure assessment before incorporation or contribution. We do not provide regulated portfolio management.",
      "sections": [
        {
          "id": "company-1",
          "title": "Subsidiary, branch or liaison office",
          "body": "A Ltd. is a separate entity suitable for many SMEs; an A.Ş. often suits multiple investors. A branch directly engages its parent. A licensed liaison office cannot conduct commercial activities in Turkey.",
          "table": {
            "headers": [
              "Form",
              "General capital requirement"
            ],
            "rows": [
              [
                "Ltd.",
                "TRY 50,000"
              ],
              [
                "A.Ş.",
                "TRY 250,000"
              ],
              [
                "Branch",
                "No general minimum"
              ],
              [
                "Liaison",
                "No commercial sales"
              ]
            ]
          }
        },
        {
          "id": "company-2",
          "title": "Registration procedure",
          "body": "Prepare name, address, objects, articles, owners, managers and powers, obtain tax IDs and file through MERSİS. Authenticate foreign documents by apostille or consular legalisation as applicable and translate into Turkish. Register, pay the 0.04% competition contribution, fund capital as required and establish accounting, banking, tax and employment compliance. A Ltd. may pay cash capital within 24 months."
        },
        {
          "id": "company-3",
          "title": "Profit taxation: 2026 and 2027",
          "body": "Ordinary non-financial rate is 25%; certain financial corporations pay 30%. In 2026 exclusively qualifying export income may receive a five-point reduction. Law 7582 introduces 12.5% for eligible industrial or agricultural production profits from 2027, without stacking the export reduction on the same profits. Assume a single TRY 1 million taxable net base, no other incentives, minimum tax or credits.",
          "table": {
            "headers": [
              "Scenario",
              "Illustrative CIT (TRY)"
            ],
            "rows": [
              [
                "Ordinary 25%",
                "250,000"
              ],
              [
                "Eligible export 20% in 2026",
                "200,000"
              ],
              [
                "Eligible production 12.5% from 2027",
                "125,000"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "International service hub",
          "body": "Law 7582 creates qualified service centres for groups active in at least three countries with at least 80% of annual revenue from foreign related entities. A 95% deduction of qualifying foreign profits can run for twenty accounting periods with timely repatriation. It reaches 100% in certain authorised locations subject to conditions. Implementation and eligible activity scope matter."
        },
        {
          "id": "company-5",
          "title": "Cross-border operations",
          "body": "Document contracts, actual services, management location, invoices and VAT. Goods purchased and resold abroad without entering Turkey may qualify for a separate 95% deduction; this is not ordinary exporting. Arrange work permits for foreign managers where required and ongoing accounts. Individual dividends remain separate from company tax."
        }
      ],
      "faqs": [
        {
          "question": "Is a Turkish partner required?",
          "answer": "Generally no, except regulated-sector restrictions."
        },
        {
          "question": "Does 12.5% already apply in 2026?",
          "answer": "No, the provision applies to relevant periods from 2027."
        },
        {
          "question": "Does incorporation grant work permission?",
          "answer": "No, separate authorisation may be required."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: incorporation"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "2026 capital requirements"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: corporate tax"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Law 7582 of 4 June 2026"
        },
        {
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx",
          "label": "Official investment reform"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: group taxation"
        }
      ]
    },
    "ru": {
      "title": "Международная компания в Турции 2026: капитал и экспортные льготы",
      "metaDescription": "Дочерняя компания, филиал или региональный офис: MERSİS, капитал A.Ş./Ltd., налог 25% и реформа 2026–2027.",
      "shortAnswer": "Иностранный инвестор обычно может владеть 100% турецкой компании с учётом регулируемых отраслей. Форма и налоговые преимущества зависят от реальной деятельности.",
      "bosphorasHelp": "Bosphoras организует подготовку проекта, встречи с независимыми юристами, бухгалтерами и налоговыми специалистами и переезд. Запросите оценку структуры до учреждения или внесения активов. Мы не оказываем лицензируемое управление портфелями.",
      "sections": [
        {
          "id": "company-1",
          "title": "Дочерняя компания, филиал или представительство",
          "body": "Ltd. — отдельное лицо для многих малых и средних предприятий; A.Ş. часто подходит для инвесторов. Филиал непосредственно связан с головной компанией. Представительство с разрешением не может вести коммерческую деятельность в Турции.",
          "table": {
            "headers": [
              "Форма",
              "Общее требование к капиталу"
            ],
            "rows": [
              [
                "Ltd.",
                "50 000 лир"
              ],
              [
                "A.Ş.",
                "250 000 лир"
              ],
              [
                "Филиал",
                "Нет общего минимума"
              ],
              [
                "Представительство",
                "Без коммерческих продаж"
              ]
            ]
          }
        },
        {
          "id": "company-2",
          "title": "Регистрация",
          "body": "Подготовьте название, адрес, предмет, устав, владельцев, руководителей и полномочия, номера налогоплательщиков и MERSİS. Иностранные документы апостилируют или легализуют в зависимости от страны и переводят на турецкий. Зарегистрируйте фирму, уплатите 0,04% органу конкуренции, внесите капитал и организуйте учёт, банк, налоги и персонал. Денежный капитал Ltd. можно внести за 24 месяца."
        },
        {
          "id": "company-3",
          "title": "Налог на прибыль в 2026 и 2027 годах",
          "body": "Общая ставка вне финансового сектора — 25%, для отдельных финансовых компаний — 30%. В 2026 подходящая экспортная прибыль может получить снижение на пять процентных пунктов. Закон № 7582 вводит 12,5% для подходящей промышленной или сельскохозяйственной прибыли с 2027 без совмещения экспортного снижения на ту же прибыль. Пример: база 1 млн лир без иных льгот, минимального налога и зачётов.",
          "table": {
            "headers": [
              "Сценарий",
              "Пример налога (лиры)"
            ],
            "rows": [
              [
                "Обычный 25%",
                "250 000"
              ],
              [
                "Экспорт 20% в 2026",
                "200 000"
              ],
              [
                "Производство 12,5% с 2027",
                "125 000"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Международный сервисный центр",
          "body": "Закон № 7582 вводит квалифицированные сервисные центры групп в минимум трёх странах с не менее 80% годовой выручки от связанных зарубежных лиц. Вычет 95% подходящей иностранной прибыли возможен двадцать отчётных периодов при своевременном переводе. В отдельных разрешённых зонах он достигает 100% при условиях. Важны порядок применения и виды деятельности."
        },
        {
          "id": "company-5",
          "title": "Трансграничная деятельность",
          "body": "Документируйте договоры, услуги, управление, счета и НДС. Покупка и перепродажа товаров за рубежом без ввоза в Турцию может подпадать под отдельный вычет 95%, не обычный экспорт. Оформите разрешения на работу иностранных руководителей при необходимости и учёт. Дивиденды физлица отличаются от прибыли компании."
        }
      ],
      "faqs": [
        {
          "question": "Нужен ли турецкий партнёр?",
          "answer": "Обычно нет, кроме регулируемых отраслей."
        },
        {
          "question": "Действует ли 12,5% в 2026?",
          "answer": "Нет, для соответствующих периодов с 2027."
        },
        {
          "question": "Даёт ли компания разрешение на работу?",
          "answer": "Нет, может потребоваться отдельное разрешение."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: регистрация"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "Минимальный капитал 2026"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: корпоративный налог"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Закон № 7582 от 4 июня 2026"
        },
        {
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx",
          "label": "Официальная реформа инвестиций"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: налоги групп"
        }
      ]
    },
    "ar": {
      "title": "تأسيس شركة دولية في تركيا 2026: رأس المال وضريبة التصدير",
      "metaDescription": "الشركة التابعة والفرع والمقر الإقليمي وتسجيل MERSİS ورأس المال وضريبة 25% وإصلاح 2026–2027.",
      "shortAnswer": "يمكن للمستثمر الأجنبي عادة تأسيس شركة تركية مملوكة بالكامل مع مراعاة القطاعات المنظمة. يعتمد الشكل والحوافز على النشاط الفعلي.",
      "bosphorasHelp": "تنسق Bosphoras إعداد المشروع والمواعيد مع محامين ومحاسبين ومتخصصين ضريبيين مستقلين والاستقرار المحلي. اطلب دراسة الهيكل قبل التأسيس أو المساهمة بالأصول. لا نقدم إدارة محافظ منظمة.",
      "sections": [
        {
          "id": "company-1",
          "title": "تابعة أو فرع أو مكتب اتصال",
          "body": "Ltd. كيان مستقل مناسب لكثير من المنشآت الصغيرة والمتوسطة؛ A.Ş. مناسبة غالباً للمستثمرين. يرتبط الفرع مباشرة بالشركة الأم. لا يجوز لمكتب الاتصال المرخص ممارسة التجارة في تركيا.",
          "table": {
            "headers": [
              "الشكل",
              "رأس المال العام"
            ],
            "rows": [
              [
                "Ltd.",
                "50,000 ليرة"
              ],
              [
                "A.Ş.",
                "250,000 ليرة"
              ],
              [
                "فرع",
                "لا حد عام"
              ],
              [
                "مكتب اتصال",
                "دون مبيعات تجارية"
              ]
            ]
          }
        },
        {
          "id": "company-2",
          "title": "إجراءات التسجيل",
          "body": "جهز الاسم والعنوان والغرض والنظام والمساهمين والمديرين والصلاحيات، والأرقام الضريبية وMERSİS. تصدق الوثائق الأجنبية بالأبوستيل أو القنصلية حسب البلد وتترجم للتركية. سجل الشركة وادفع 0.04% لسلطة المنافسة وحرر رأس المال ونظم الحسابات والمصرف والضرائب والموظفين. يمكن دفع رأس مال Ltd. النقدي خلال 24 شهراً."
        },
        {
          "id": "company-3",
          "title": "ضريبة الأرباح 2026 و2027",
          "body": "المعدل العام لغير المالي 25% وبعض الشركات المالية 30%. في 2026 قد تحصل أرباح التصدير المؤهلة على تخفيض خمس نقاط. يحدد القانون 7582 معدل 12.5% لأرباح الإنتاج الصناعي أو الزراعي المؤهل اعتباراً من 2027 دون جمع تخفيض التصدير على الربح نفسه. المثال لوعاء مليون ليرة دون حوافز أخرى أو ضريبة دنيا أو ائتمان.",
          "table": {
            "headers": [
              "السيناريو",
              "ضريبة توضيحية بالليرة"
            ],
            "rows": [
              [
                "العادي 25%",
                "250,000"
              ],
              [
                "تصدير مؤهل 20% في 2026",
                "200,000"
              ],
              [
                "إنتاج مؤهل 12.5% من 2027",
                "125,000"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "مركز خدمات دولي",
          "body": "ينشئ القانون 7582 مراكز الخدمات المؤهلة للمجموعات النشطة في ثلاث دول على الأقل وتحصل على 80% من إيراداتها السنوية على الأقل من كيانات أجنبية مرتبطة. يمكن خصم 95% من الربح الأجنبي المؤهل لعشرين فترة محاسبية مع التحويل في الموعد. يصل الخصم 100% في مواقع محددة مرخصة بشروط. تظل إجراءات التطبيق والنشاط مهمة."
        },
        {
          "id": "company-5",
          "title": "التجارة العابرة للحدود",
          "body": "وثق العقود والخدمات ومكان الإدارة والفواتير والقيمة المضافة. قد يستفيد شراء وإعادة بيع السلع خارج تركيا دون دخولها من خصم خاص 95% مختلف عن التصدير العادي. نظم تصاريح عمل المديرين الأجانب عند الحاجة والمحاسبة. تختلف توزيعات الفرد عن ضريبة الشركة."
        }
      ],
      "faqs": [
        {
          "question": "هل يلزم شريك تركي؟",
          "answer": "عادة لا باستثناء القطاعات المنظمة."
        },
        {
          "question": "هل 12.5% سارية في 2026؟",
          "answer": "لا، للفترات المعنية من 2027."
        },
        {
          "question": "هل يمنح التأسيس تصريح العمل؟",
          "answer": "لا، قد يلزم تصريح منفصل."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: تأسيس الشركات"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "رأس المال الأدنى 2026"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: ضريبة الشركات"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "القانون 7582 بتاريخ 4 يونيو 2026"
        },
        {
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx",
          "label": "الإصلاح الاستثماري الرسمي"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: ضرائب المجموعات"
        }
      ]
    }
  },
  "create-company-turkey-from-dubai": {
    "fr": {
      "title": "Créer une société en Turquie depuis Dubaï en 2026 : filiale et fiscalité",
      "metaDescription": "Implanter une société turque depuis les Émirats : documents, authentification, MERSİS, convention fiscale, dividendes et établissement stable.",
      "shortAnswer": "Une société ou une personne établie aux Émirats peut généralement créer une filiale turque. Une implantation à distance exige des pouvoirs valides, une adresse et un dossier bancaire cohérent.",
      "bosphorasHelp": "Bosphoras coordonne la préparation du projet, les rendez-vous avec les avocats, experts-comptables et fiscalistes indépendants, ainsi que l'installation sur place. Demandez une étude de structure avant tout apport ou constitution. Nous ne fournissons pas de gestion de portefeuille réglementée.",
      "sections": [
        {
          "id": "company-1",
          "title": "Choisir qui détiendra les titres",
          "body": "Comparez une détention personnelle et une filiale contrôlée par une société des Émirats. Les objectifs de financement, de distribution et de sortie déterminent le choix. Une société en zone franche n'est pas automatiquement admissible aux avantages de convention. Analysez résidence fiscale réelle, bénéficiaire effectif et substance avant de choisir."
        },
        {
          "id": "company-2",
          "title": "Dossier préparé depuis les Émirats",
          "body": "Pour une société actionnaire : extrait d'activité, statuts, décision autorisant la filiale, pouvoirs, signataires et chaîne de détention. Pour une personne : passeport et numéro fiscal. Déterminez avec le registre la légalisation consulaire ou l'apostille si applicable pour chaque document, puis traduction et certification turques. Une procuration peut permettre des formalités à distance, sans garantir l'ouverture bancaire."
        },
        {
          "id": "company-3",
          "title": "Convention bilatérale : dividendes",
          "body": "L'article 10 fixe en principe un plafond de 10 % si une société bénéficiaire effective hors société de personnes détient directement au moins 25 % du capital ; 12 % dans les autres cas ordinaires, et 5 % pour certains organismes publics. Le taux turc de droit interne est de 15 %. Exemple sur 100 000 TL de dividendes bruts : les avantages conventionnels supposent résidence admissible, documentation et bénéficiaire effectif, hors impôt émirati.",
          "table": {
            "headers": [
              "Hypothèse",
              "Retenue (TL)"
            ],
            "rows": [
              [
                "Droit interne 15 %",
                "15 000"
              ],
              [
                "Plafond conventionnel 12 %",
                "12 000"
              ],
              [
                "Plafond conventionnel 10 %",
                "10 000"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Établissement stable et direction effective",
          "body": "Les contrats exécutés en Turquie, bureau permanent et pouvoirs de conclusion de contrats peuvent créer une présence fiscale distincte. Documentez où se trouvent les équipes, fonctions et décisions. La société turque reste un contribuable distinct ; les management fees, prêts et licences exigent des conditions de pleine concurrence et l'analyse des retenues et de la TVA."
        },
        {
          "id": "company-5",
          "title": "Séquence opérationnelle",
          "body": "Avant création, validez l'objet, la forme, le capital et le dossier de conformité. Après enregistrement, ouvrez le compte de société selon la politique bancaire, versez les apports traçables, mandatez un comptable et organisez les licences et le personnel. En cas de transfert personnel en Turquie, examinez séparément le certificat 20/D. Les distributions d'une filiale turque ne deviennent pas étrangères pour un résident turc par simple transit bancaire."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je constituer sans voyager ?",
          "answer": "Certaines formalités peuvent se faire par procuration ; les exigences bancaires et d'identification varient."
        },
        {
          "question": "Une société de Dubaï est-elle à 0 % automatiquement ?",
          "answer": "Non, les obligations émiraties et les conditions conventionnelles doivent être examinées."
        },
        {
          "question": "Le plafond de 10 % s'applique-t-il à tout associé ?",
          "answer": "Non, il dépend notamment d'une détention directe admissible de 25 %."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye : création"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "Capital minimum 2026"
        },
        {
          "href": "https://journalcpa.com/en/legislation/cvoa-oranlari/bae/",
          "label": "Convention Turquie–Émirats : synthèse"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC : retenues"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC : impôt sociétés"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC : fiscalité des groupes"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Loi 7582 du 4 juin 2026"
        }
      ]
    },
    "en": {
      "title": "Set up a company in Turkey from Dubai 2026: subsidiary and taxes",
      "metaDescription": "Establish a Turkish company from the UAE: documents, legalisation, registration, bilateral treaty, dividends and permanent establishment.",
      "shortAnswer": "A UAE-based individual or company can generally establish a Turkish subsidiary. Remote incorporation requires valid authority, address and coherent bank due diligence.",
      "bosphorasHelp": "Bosphoras coordinates project preparation, appointments with independent lawyers, accountants and tax specialists, and local relocation. Request a structure assessment before incorporation or contribution. We do not provide regulated portfolio management.",
      "sections": [
        {
          "id": "company-1",
          "title": "Choose the shareholder",
          "body": "Compare personal ownership with a UAE corporate parent. Funding, distributions and exit plans determine the structure. A free-zone company does not automatically qualify for treaty benefits; assess actual tax residence, beneficial ownership and substance."
        },
        {
          "id": "company-2",
          "title": "Prepare UAE documentation",
          "body": "Corporate shareholder: activity certificate, constitutional documents, resolution authorising the subsidiary, powers, signatories and ownership chain. Individual: passport and tax ID. Confirm consular legalisation or apostille where applicable for each document, then Turkish translation and certification. A power of attorney may enable remote registration without guaranteeing banking approval."
        },
        {
          "id": "company-3",
          "title": "Treaty dividend withholding",
          "body": "Article 10 generally caps withholding at 10% for a beneficial corporate owner, other than a partnership, directly holding at least 25%; 12% in other ordinary cases and 5% for specified public bodies. Turkish domestic withholding is 15%. Example on TRY 100,000 gross dividends, assuming treaty residence, evidence and beneficial ownership where applicable; excludes UAE tax.",
          "table": {
            "headers": [
              "Scenario",
              "Withholding (TRY)"
            ],
            "rows": [
              [
                "Domestic 15%",
                "15,000"
              ],
              [
                "Treaty cap 12%",
                "12,000"
              ],
              [
                "Treaty cap 10%",
                "10,000"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Permanent establishment and management",
          "body": "Contracts performed in Turkey, fixed offices and contractual authority can create local taxable presence. Document staff, functions and decisions. The Turkish subsidiary is a separate taxpayer; management charges, loans and licensing require arm's-length terms and withholding and VAT review."
        },
        {
          "id": "company-5",
          "title": "Operational sequence",
          "body": "Before incorporation confirm activities, form, capital and compliance. After registration arrange corporate banking, traceable capital contributions, accountant, licences and employees. If moving personally to Turkey, assess Article 20/D separately. Turkish subsidiary dividends do not become foreign-source merely by passing through an overseas account."
        }
      ],
      "faqs": [
        {
          "question": "Can I incorporate without travelling?",
          "answer": "Some formalities may be handled by proxy; bank identification rules vary."
        },
        {
          "question": "Is a Dubai company automatically tax-free?",
          "answer": "No; UAE and treaty requirements need review."
        },
        {
          "question": "Does the 10% cap apply to every shareholder?",
          "answer": "No, it depends in particular on a qualifying direct 25% shareholding."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: incorporation"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "2026 capital requirements"
        },
        {
          "href": "https://journalcpa.com/en/legislation/cvoa-oranlari/bae/",
          "label": "Türkiye–UAE treaty summary"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC: withholding"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: corporate tax"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: group taxation"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Law 7582 of 4 June 2026"
        }
      ]
    },
    "ru": {
      "title": "Создание компании в Турции из Дубая 2026: дочерняя компания и налоги",
      "metaDescription": "Документы из ОАЭ, легализация, MERSİS, соглашение, дивиденды и постоянное представительство в Турции.",
      "shortAnswer": "Физическое лицо или компания из ОАЭ обычно может создать турецкую дочернюю компанию. Для дистанционного оформления нужны полномочия, адрес и банковские документы.",
      "bosphorasHelp": "Bosphoras организует подготовку проекта, встречи с независимыми юристами, бухгалтерами и налоговыми специалистами и переезд. Запросите оценку структуры до учреждения или внесения активов. Мы не оказываем лицензируемое управление портфелями.",
      "sections": [
        {
          "id": "company-1",
          "title": "Выбор владельца",
          "body": "Сравните личное владение и владение через компанию ОАЭ. Учитывайте финансирование, выплаты и выход из инвестиции. Компания свободной зоны не получает договорные льготы автоматически; оцените реальное резидентство, бенефициара и деятельность."
        },
        {
          "id": "company-2",
          "title": "Документы из ОАЭ",
          "body": "Для компании: справка о деятельности, устав, решение о создании дочерней компании, полномочия подписантов и цепочка владения. Для физлица — паспорт и налоговый номер. Уточните консульскую легализацию или апостиль при применимости, затем перевод и заверение в Турции. Доверенность может позволить дистанционную регистрацию, но не гарантирует банковский счёт."
        },
        {
          "id": "company-3",
          "title": "Удержание с дивидендов по соглашению",
          "body": "Статья 10 обычно ограничивает удержание 10% для компании — фактического получателя, кроме товарищества, при прямой доле не менее 25%; 12% в остальных обычных случаях и 5% для отдельных государственных организаций. Внутренняя ставка Турции 15%. Пример с 100 000 лир валовых дивидендов при соблюдении договорных условий, без налога ОАЭ.",
          "table": {
            "headers": [
              "Сценарий",
              "Удержание (лиры)"
            ],
            "rows": [
              [
                "Внутренняя ставка 15%",
                "15 000"
              ],
              [
                "Предел 12%",
                "12 000"
              ],
              [
                "Предел 10%",
                "10 000"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Постоянное представительство и управление",
          "body": "Договоры в Турции, постоянный офис и полномочия заключать сделки могут создать местные налоги. Документируйте работников, функции и решения. Турецкая дочерняя компания самостоятельный налогоплательщик; управленческие платежи, займы и лицензии требуют рыночных условий и оценки НДС и удержаний."
        },
        {
          "id": "company-5",
          "title": "Последовательность работы",
          "body": "До регистрации определите деятельность, форму, капитал и документы. После — счёт, прослеживаемые взносы, бухгалтер, лицензии и персонал. При личном переезде проверьте статью 20/D отдельно. Дивиденды турецкой компании не становятся иностранными только от перевода через зарубежный счёт."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли оформить без поездки?",
          "answer": "Некоторые действия возможны по доверенности; банковские требования различаются."
        },
        {
          "question": "Компания Дубая всегда без налога?",
          "answer": "Нет, проверяются правила ОАЭ и соглашения."
        },
        {
          "question": "Предел 10% для всех?",
          "answer": "Нет, в частности требуется подходящая прямая доля 25%."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: регистрация"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "Минимальный капитал 2026"
        },
        {
          "href": "https://journalcpa.com/en/legislation/cvoa-oranlari/bae/",
          "label": "Соглашение Турция–ОАЭ: обзор"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC: удержания"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: корпоративный налог"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: налоги групп"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Закон № 7582 от 4 июня 2026"
        }
      ]
    },
    "ar": {
      "title": "تأسيس شركة في تركيا من دبي 2026: التابعة والضرائب",
      "metaDescription": "تأسيس شركة تركية من الإمارات والوثائق والتصديق وMERSİS والاتفاقية الضريبية والتوزيعات والمنشأة الدائمة.",
      "shortAnswer": "يمكن عادة لفرد أو شركة من الإمارات تأسيس شركة تابعة تركية. يتطلب التأسيس عن بعد صلاحيات صحيحة وعنواناً وملف تحقق مصرفياً.",
      "bosphorasHelp": "تنسق Bosphoras إعداد المشروع والمواعيد مع محامين ومحاسبين ومتخصصين ضريبيين مستقلين والاستقرار المحلي. اطلب دراسة الهيكل قبل التأسيس أو المساهمة بالأصول. لا نقدم إدارة محافظ منظمة.",
      "sections": [
        {
          "id": "company-1",
          "title": "اختيار المساهم",
          "body": "قارن الملكية الشخصية والشركة الأم الإماراتية بحسب التمويل والتوزيعات والخروج. لا تستحق شركة المنطقة الحرة مزايا الاتفاقية تلقائياً؛ ادرس الإقامة الفعلية والمستفيد الحقيقي والنشاط."
        },
        {
          "id": "company-2",
          "title": "الوثائق من الإمارات",
          "body": "للشركة المساهمة: شهادة النشاط والنظام وقرار تأسيس التابعة والصلاحيات والموقعون وسلسلة الملكية. للفرد الجواز والرقم الضريبي. تحقق من التصديق القنصلي أو الأبوستيل عند انطباقه لكل وثيقة ثم الترجمة والتوثيق التركي. قد يسمح التوكيل بالتسجيل عن بعد دون ضمان فتح الحساب."
        },
        {
          "id": "company-3",
          "title": "اقتطاع التوزيعات وفق الاتفاقية",
          "body": "تحدد المادة 10 عادة سقف 10% لشركة مستفيدة فعلية غير شركة الأشخاص تملك 25% مباشرة على الأقل، و12% لباقي الحالات العادية و5% لبعض الجهات العامة. المعدل التركي الداخلي 15%. مثال توزيع إجمالي 100 ألف ليرة مع الأهلية والوثائق والمستفيد الفعلي عند الاقتضاء دون ضريبة الإمارات.",
          "table": {
            "headers": [
              "السيناريو",
              "الاقتطاع بالليرة"
            ],
            "rows": [
              [
                "داخلي 15%",
                "15,000"
              ],
              [
                "سقف 12%",
                "12,000"
              ],
              [
                "سقف 10%",
                "10,000"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "المنشأة الدائمة والإدارة",
          "body": "قد تنشئ العقود المنفذة في تركيا والمكتب الثابت وصلاحية إبرام العقود التزاماً محلياً. وثق العاملين والوظائف والقرارات. الشركة التركية مكلف مستقل؛ تخضع رسوم الإدارة والقروض والتراخيص لأسعار السوق ودراسة القيمة المضافة والاقتطاع."
        },
        {
          "id": "company-5",
          "title": "تسلسل التنفيذ",
          "body": "قبل التأسيس حدد النشاط والشكل ورأس المال والوثائق. بعد التسجيل نظم الحساب والمساهمات القابلة للتتبع والمحاسب والتراخيص والموظفين. إذا انتقلت شخصياً فادرس المادة 20/D مستقلة. لا تصبح توزيعات التابعة التركية أجنبية لمجرد مرورها بحساب خارجي."
        }
      ],
      "faqs": [
        {
          "question": "هل أؤسس دون سفر؟",
          "answer": "بعض الإجراءات ممكنة بالتوكيل وتختلف قواعد المصرف."
        },
        {
          "question": "هل شركة دبي معفاة دائماً؟",
          "answer": "لا، تراجع قواعد الإمارات والاتفاقية."
        },
        {
          "question": "هل سقف 10% لكل مساهم؟",
          "answer": "لا، يتطلب خصوصاً حصة مباشرة مؤهلة 25%."
        }
      ],
      "sources": [
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: تأسيس الشركات"
        },
        {
          "href": "https://www.roedl.com.tr/tr/tema/sirkuler/2026/reminder-on-the-minimum-capital-requirements-for-companies-in-turkiye",
          "label": "رأس المال الأدنى 2026"
        },
        {
          "href": "https://journalcpa.com/en/legislation/cvoa-oranlari/bae/",
          "label": "ملخص الاتفاقية التركية الإماراتية"
        },
        {
          "href": "https://taxsummaries.pwc.com/Turkey/Corporate/Withholding-taxes",
          "label": "PwC: الاقتطاعات"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: ضريبة الشركات"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: ضرائب المجموعات"
        },
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "القانون 7582 بتاريخ 4 يونيو 2026"
        }
      ]
    }
  },
  "management-company-turkey": {
    "fr": {
      "title": "Société de gestion en Turquie 2026 : management fees et centres de services qualifiés",
      "metaDescription": "Créer une société de management : contrats intragroupe, prix de transfert, déduction de 95 % sur les bénéfices admissibles et licences SPK.",
      "shortAnswer": "Une société de gestion administrative ou de coordination n'est pas une société de gestion de portefeuille agréée. La loi 7582 institue un régime d'impôt sur les sociétés propre aux centres de services qualifiés, soumis à des conditions strictes.",
      "bosphorasHelp": "Bosphoras coordonne la préparation du projet, les rendez-vous avec les avocats, experts-comptables et fiscalistes indépendants, ainsi que l'installation sur place. Demandez une étude de structure avant tout apport ou constitution. Nous ne fournissons pas de gestion de portefeuille réglementée.",
      "sections": [
        {
          "id": "company-1",
          "title": "Définir les services et limites réglementaires",
          "body": "Gestion administrative, informatique, RH, reporting et coordination intragroupe peuvent relever d'une société commerciale de services. Gestion de portefeuilles de tiers, conseil en investissement réglementé et collecte de capitaux nécessitent une analyse des autorisations SPK et autres règles ; le nom de société ne suffit pas. Les services juridiques, financiers et autres professions réglementées doivent respecter leurs propres conditions."
        },
        {
          "id": "company-2",
          "title": "Centre de services qualifié : critères de la loi 7582",
          "body": "Le groupe doit agir effectivement dans au moins trois pays ; le centre est une société de capitaux qui fournit des services admissibles aux entités liées, et au moins 80 % du chiffre d'affaires annuel provient d'entités étrangères liées. L'article 10(1)(j) de la loi IS prévoit 95 % de déduction sur les bénéfices étrangers exclusivement issus de ces activités pendant vingt exercices à compter du démarrage, rapatriés avant la date de déclaration annuelle. Certains sites éligibles avec certificat à Istanbul Finance Center ou zones industrielles désignées ouvrent une déduction à 100 %. Ne présumez pas l'éligibilité sans autorisation et validation des modalités."
        },
        {
          "id": "company-3",
          "title": "Illustration de la déduction et du taux ordinaire",
          "body": "Pour 1 million TL de bénéfice net entièrement admissible, une déduction de 95 % laisse 50 000 TL à taxer à 25 %, soit 12 500 TL. La loi 7582 prévoit aussi la prise en compte de cette déduction dans le calcul de l'impôt minimum national, mais d'autres conditions, revenus ou impôts internationaux peuvent modifier le résultat. La simulation n'est ni un taux universel de 1,25 % ni un devis.",
          "table": {
            "headers": [
              "Scénario",
              "IS arithmétique (TL)"
            ],
            "rows": [
              [
                "Sans déduction",
                "250 000"
              ],
              [
                "Centre admissible à 95 %",
                "12 500"
              ],
              [
                "Site admissible à 100 %",
                "0"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Contrats intragroupe, prix et preuve du service",
          "body": "Définissez prestations, temps, coûts, clés de répartition et marge justifiée. Conservez contrats, livrables, relevés de temps et méthode de comparaison. Exemple : 600 000 TL de coûts admissibles majorés d'une marge purement illustrative de 8 % donnent 648 000 TL de facturation ; 8 % n'est pas une marge réglementaire. Examinez la retenue applicable et la TVA ou exonération d'exportation de services séparément."
        },
        {
          "id": "company-5",
          "title": "Personnel et exploitation",
          "body": "Prévoyez salariés qualifiés, équipements, gouvernance, comptes et justificatifs du seuil annuel de recettes. La loi prévoit une exonération salariale partielle pour certains personnels qualifiés jusqu'à trois fois le salaire minimum brut, ou cinq fois pour certains sites admissibles, sous conditions. Ce dispositif ne dispense pas des cotisations ni du permis de travail. Validez notamment les autorisations de secteur, le calendrier de rapatriement et la comptabilité analytique."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je gérer l'argent des clients avec une Ltd. ?",
          "answer": "Une activité réglementée exige les autorisations applicables ; la création d'une Ltd. ne suffit pas."
        },
        {
          "question": "Le régime 95 % vise-t-il toutes mes factures étrangères ?",
          "answer": "Non, il vise les bénéfices issus des activités admissibles d'un centre qualifié."
        },
        {
          "question": "Le taux effectif est-il toujours de 1,25 % ?",
          "answer": "Non, seulement le calcul illustratif sur la base admissible avec le taux ordinaire de 25 %."
        }
      ],
      "sources": [
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Loi 7582 du 4 juin 2026"
        },
        {
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx",
          "label": "Réforme officielle 2026"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC : impôt sociétés"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/deductions",
          "label": "PwC : charges déductibles"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC : fiscalité des groupes"
        },
        {
          "href": "https://spk.gov.tr/istatistikler/basvurular/portfoy-yonetim-sirketi-faaliyet-izni-basvurusu",
          "label": "SPK : autorisations de gestion"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye : création"
        }
      ]
    },
    "en": {
      "title": "Management company in Turkey 2026: service fees and qualified service centres",
      "metaDescription": "Create a management services company: intragroup fees, transfer pricing, 95% qualifying profit deduction and SPK licensing boundaries.",
      "shortAnswer": "An administrative management company is not a licensed portfolio manager. Law 7582 introduces a separate corporate tax regime for qualified service centres, with strict eligibility.",
      "bosphorasHelp": "Bosphoras coordinates project preparation, appointments with independent lawyers, accountants and tax specialists, and local relocation. Request a structure assessment before incorporation or contribution. We do not provide regulated portfolio management.",
      "sections": [
        {
          "id": "company-1",
          "title": "Define activities and regulatory boundaries",
          "body": "Administration, IT, HR, reporting and group coordination may be ordinary commercial services. Managing third-party portfolios, regulated investment advice and raising capital require assessment of SPK licences and other applicable rules. A company name does not grant permission. Legal, financial and other regulated professions have their own requirements."
        },
        {
          "id": "company-2",
          "title": "Qualified service centre criteria",
          "body": "Under Law 7582 the group must operate in at least three countries; the capital company provides eligible services to related entities and receives at least 80% of annual revenue from foreign related entities. Corporate tax Article 10(1)(j) allows a 95% deduction of qualifying foreign profits exclusively from these activities for twenty accounting periods from commencement, with remittance by the annual return deadline. Eligible certified Istanbul Finance Center or designated industrial zone locations may receive 100%, subject to conditions. Confirm implementation and authorisation before claiming."
        },
        {
          "id": "company-3",
          "title": "Deduction and ordinary-rate illustration",
          "body": "For TRY 1 million wholly qualifying net profit, 95% deduction leaves TRY 50,000 taxed at 25% = TRY 12,500. Law 7582 also accommodates this deduction in domestic minimum corporate tax computations, but other conditions, income and international tax can alter the result. This is not a universal 1.25% effective rate or quote.",
          "table": {
            "headers": [
              "Scenario",
              "Illustrative CIT (TRY)"
            ],
            "rows": [
              [
                "No deduction",
                "250,000"
              ],
              [
                "Eligible 95% centre",
                "12,500"
              ],
              [
                "Eligible 100% location",
                "0"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Intragroup agreements and evidence",
          "body": "Define services, time, cost pools, allocation keys and substantiated markup. Retain contracts, deliverables, timesheets and benchmarking. Example: TRY 600,000 eligible costs plus a purely illustrative 8% markup creates TRY 648,000 billing; 8% is not a prescribed margin. Assess withholding and VAT or service-export exemption separately."
        },
        {
          "id": "company-5",
          "title": "Staffing and operations",
          "body": "Plan qualified employees, equipment, governance, records and annual revenue threshold evidence. The law provides partial wage income-tax exemption for qualifying staff up to three times gross minimum wage, or five times for certain eligible sites, subject to conditions. This does not remove contributions or work authorisation. Confirm sector approvals, repatriation deadlines and cost accounting."
        }
      ],
      "faqs": [
        {
          "question": "Can a Ltd. manage client money?",
          "answer": "Regulated activities require applicable authorisation; incorporation alone is insufficient."
        },
        {
          "question": "Does 95% apply to all foreign invoices?",
          "answer": "No, only qualifying profits of an eligible service centre."
        },
        {
          "question": "Is the effective rate always 1.25%?",
          "answer": "No, that is illustrative arithmetic at the ordinary 25% rate."
        }
      ],
      "sources": [
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Law 7582 of 4 June 2026"
        },
        {
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx",
          "label": "Official investment reform"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: corporate tax"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/deductions",
          "label": "PwC: deductions"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: group taxation"
        },
        {
          "href": "https://spk.gov.tr/istatistikler/basvurular/portfoy-yonetim-sirketi-faaliyet-izni-basvurusu",
          "label": "SPK: management authorisation"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: incorporation"
        }
      ]
    },
    "ru": {
      "title": "Управляющая компания в Турции 2026: услуги и квалифицированные центры",
      "metaDescription": "Управленческие услуги, трансфертные цены, вычет 95% подходящей прибыли и требования лицензий SPK.",
      "shortAnswer": "Административная управляющая компания не является лицензированным управляющим портфелями. Закон № 7582 вводит отдельную корпоративную льготу квалифицированных сервисных центров при строгих условиях.",
      "bosphorasHelp": "Bosphoras организует подготовку проекта, встречи с независимыми юристами, бухгалтерами и налоговыми специалистами и переезд. Запросите оценку структуры до учреждения или внесения активов. Мы не оказываем лицензируемое управление портфелями.",
      "sections": [
        {
          "id": "company-1",
          "title": "Виды услуг и регулирование",
          "body": "Администрирование, IT, кадры, отчётность и координация группы могут быть обычными услугами. Управление портфелями третьих лиц, регулируемые инвестиционные консультации и привлечение капитала требуют оценки лицензий SPK и других правил. Название фирмы не даёт разрешения. Юридические, финансовые и другие регулируемые профессии имеют свои требования."
        },
        {
          "id": "company-2",
          "title": "Условия сервисного центра",
          "body": "По закону № 7582 группа реально работает минимум в трёх странах; центр оказывает допустимые услуги связанным компаниям и получает не менее 80% годовой выручки от связанных зарубежных лиц. Статья 10(1)(j) корпоративного закона позволяет вычесть 95% подходящей иностранной прибыли исключительно от этих услуг на двадцать отчётных периодов с начала работы при переводе до срока годовой декларации. Для отдельных сертифицированных площадок Istanbul Finance Center или определённых промышленных зон вычет может быть 100%. Проверьте порядок и разрешения."
        },
        {
          "id": "company-3",
          "title": "Пример вычета",
          "body": "При 1 млн лир полностью подходящей чистой прибыли вычет 95% оставляет базу 50 000 лир, налог 25% — 12 500. Закон также учитывает вычет при расчёте внутреннего минимального корпоративного налога, но другие доходы, условия и международные налоги меняют результат. Это не универсальная ставка 1,25%.",
          "table": {
            "headers": [
              "Сценарий",
              "Пример налога (лиры)"
            ],
            "rows": [
              [
                "Без вычета",
                "250 000"
              ],
              [
                "Центр с вычетом 95%",
                "12 500"
              ],
              [
                "Площадка с вычетом 100%",
                "0"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "Внутригрупповые договоры и доказательства",
          "body": "Определите услуги, время, расходы, распределение и обоснованную наценку. Сохраняйте договоры, результаты работ, табели и сравнения. Пример: 600 000 лир расходов и условная наценка 8% дают счёт 648 000; 8% не нормативная ставка. Отдельно проверьте удержание, НДС и экспортную льготу услуг."
        },
        {
          "id": "company-5",
          "title": "Персонал и работа",
          "body": "Подготовьте квалифицированных сотрудников, оборудование, управление, учёт и доказательства доли годовой выручки. Закон предусматривает частичное освобождение зарплаты подходящих работников до трёх минимальных брутто-зарплат, для некоторых площадок до пяти. Взносы и разрешение на работу не отменяются. Уточните разрешения, срок перевода прибыли и аналитический учёт."
        }
      ],
      "faqs": [
        {
          "question": "Может ли Ltd. управлять деньгами клиентов?",
          "answer": "Регулируемая деятельность требует разрешений; регистрации недостаточно."
        },
        {
          "question": "95% относится ко всем иностранным счетам?",
          "answer": "Нет, к подходящей прибыли квалифицированного центра."
        },
        {
          "question": "Всегда ли ставка 1,25%?",
          "answer": "Нет, это пример по обычной ставке 25%."
        }
      ],
      "sources": [
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "Закон № 7582 от 4 июня 2026"
        },
        {
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx",
          "label": "Официальная реформа инвестиций"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: корпоративный налог"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/deductions",
          "label": "PwC: расходы"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: налоги групп"
        },
        {
          "href": "https://spk.gov.tr/istatistikler/basvurular/portfoy-yonetim-sirketi-faaliyet-izni-basvurusu",
          "label": "SPK: лицензии управления"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: регистрация"
        }
      ]
    },
    "ar": {
      "title": "شركة إدارة في تركيا 2026: رسوم الإدارة ومراكز الخدمات المؤهلة",
      "metaDescription": "تأسيس شركة خدمات إدارة وتسعير التحويل وخصم 95% من الربح المؤهل وحدود تراخيص SPK.",
      "shortAnswer": "تختلف شركة الإدارة الإدارية عن مدير المحافظ المرخص. ينشئ القانون 7582 نظاماً ضريبياً مستقلاً لمراكز الخدمات المؤهلة بشروط دقيقة.",
      "bosphorasHelp": "تنسق Bosphoras إعداد المشروع والمواعيد مع محامين ومحاسبين ومتخصصين ضريبيين مستقلين والاستقرار المحلي. اطلب دراسة الهيكل قبل التأسيس أو المساهمة بالأصول. لا نقدم إدارة محافظ منظمة.",
      "sections": [
        {
          "id": "company-1",
          "title": "تحديد الأنشطة والحدود التنظيمية",
          "body": "قد تكون الإدارة وتقنية المعلومات والموارد البشرية والتقارير والتنسيق خدمات تجارية عادية. تتطلب إدارة محافظ الغير والاستشارات الاستثمارية المنظمة وجمع رأس المال دراسة تراخيص SPK والقواعد الأخرى. لا يخول اسم الشركة هذه الأنشطة. للمهن القانونية والمالية المنظمة شروطها."
        },
        {
          "id": "company-2",
          "title": "شروط مركز الخدمات المؤهل",
          "body": "وفق القانون 7582 تنشط المجموعة فعلياً في ثلاث دول على الأقل ويقدم المركز خدمات مؤهلة لكيانات مرتبطة ويحصل على 80% على الأقل من إيراداته السنوية من كيانات خارجية مرتبطة. تتيح المادة 10(1)(j) من قانون الشركات خصم 95% من الربح الأجنبي المؤهل من هذه الخدمات فقط لعشرين فترة محاسبية من بدء النشاط مع التحويل قبل موعد الإقرار السنوي. قد يصل الخصم إلى 100% لمواقع مؤهلة مع شهادة في مركز إسطنبول المالي أو مناطق صناعية محددة. تحقق من التطبيق والموافقات."
        },
        {
          "id": "company-3",
          "title": "مثال الخصم والمعدل العادي",
          "body": "لربح صاف مؤهل بالكامل قدره مليون ليرة يبقي خصم 95% وعاءً 50 ألفاً وضريبة 25% أي 12,500 ليرة. يأخذ القانون الخصم في حساب الضريبة الدنيا المحلية أيضاً لكن قد تغير الشروط والدخول الأخرى والضرائب الدولية النتيجة. ليست نسبة 1.25% عامة.",
          "table": {
            "headers": [
              "السيناريو",
              "ضريبة توضيحية بالليرة"
            ],
            "rows": [
              [
                "دون خصم",
                "250,000"
              ],
              [
                "مركز مؤهل 95%",
                "12,500"
              ],
              [
                "موقع مؤهل 100%",
                "0"
              ]
            ]
          }
        },
        {
          "id": "company-4",
          "title": "العقود داخل المجموعة وإثبات الخدمة",
          "body": "حدد الخدمات والوقت والتكاليف ومفاتيح التوزيع والهامش المبرر. احتفظ بالعقود والمخرجات وسجلات الوقت والمقارنات. مثال: تكاليف 600 ألف ليرة وهامش افتراضي 8% ينتج فاتورة 648 ألفاً؛ ليس 8% هامشاً قانونياً. ادرس الاقتطاع والقيمة المضافة وإعفاء تصدير الخدمات منفصلة."
        },
        {
          "id": "company-5",
          "title": "الموظفون والتشغيل",
          "body": "خطط للموظفين المؤهلين والمعدات والحوكمة والسجلات وإثبات نسبة الإيراد السنوي. يوفر القانون إعفاءً جزئياً لضريبة أجور الموظفين المؤهلين حتى ثلاثة أمثال الحد الأدنى الإجمالي للأجر أو خمسة لبعض المواقع بشروط. لا يلغي الاشتراكات أو تصريح العمل. تحقق من موافقات القطاع وموعد التحويل ومحاسبة التكاليف."
        }
      ],
      "faqs": [
        {
          "question": "هل تدير Ltd. أموال العملاء؟",
          "answer": "الأنشطة المنظمة تحتاج تراخيصها ولا يكفي التسجيل."
        },
        {
          "question": "هل يشمل 95% كل الفواتير الأجنبية؟",
          "answer": "لا، الربح المؤهل لمركز مؤهل فقط."
        },
        {
          "question": "هل المعدل الفعلي دائماً 1.25%؟",
          "answer": "لا، هو حساب توضيحي بالمعدل العادي 25%."
        }
      ],
      "sources": [
        {
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf",
          "label": "القانون 7582 بتاريخ 4 يونيو 2026"
        },
        {
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx",
          "label": "الإصلاح الاستثماري الرسمي"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/taxes-on-corporate-income",
          "label": "PwC: ضريبة الشركات"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/deductions",
          "label": "PwC: الخصومات"
        },
        {
          "href": "https://taxsummaries.pwc.com/turkey/corporate/group-taxation",
          "label": "PwC: ضرائب المجموعات"
        },
        {
          "href": "https://spk.gov.tr/istatistikler/basvurular/portfoy-yonetim-sirketi-faaliyet-izni-basvurusu",
          "label": "SPK: تراخيص الإدارة"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/establishing-a-business.aspx",
          "label": "Invest in Türkiye: تأسيس الشركات"
        }
      ]
    }
  }
};
