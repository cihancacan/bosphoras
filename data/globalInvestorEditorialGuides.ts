import type { Locale } from '@/lib/i18n';
import type { EditorialGuide } from './highPotentialEditorialGuides';
export const globalInvestorEditorialGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "turkey-vs-qatar-expat-tax": {
    "fr": {
      "title": "Turquie ou Qatar en 2026 : fiscalité des expatriés, salaires et indépendants",
      "metaDescription": "Comparez Qatar et Turquie : salaire exonéré, activité indépendante à 10 %, résidence fiscale et exonération turque de 20 ans.",
      "shortAnswer": "Le Qatar n'impose pas les salaires des employés mais peut taxer les bénéfices professionnels de source qatarie à 10 %. La Turquie exonère certains revenus étrangers des nouveaux résidents admissibles.",
      "bosphorasHelp": "Bosphoras organise les rendez-vous avec des professionnels indépendants, la recherche d'un logement et les séjours de découverte. Demandez une étude de votre projet et de vos revenus avant de vous engager.",
      "sections": [
        {
          "id": "global-1",
          "title": "Qatar : résidence et source du revenu",
          "body": "Le domicile permanent ou une présence de plus de 183 jours dans l'année, continue ou non, peut établir la résidence d'un étranger. La résidence conventionnelle suit les critères du traité applicable. Le Qatar applique une fiscalité territoriale : l'emploi salarié n'est pas soumis à l'impôt sur le revenu, mais une activité indépendante locale profitable peut l'être. Le visa de travail et le droit d'exercer une activité indépendante doivent être examinés séparément."
        },
        {
          "id": "global-2",
          "title": "Comparer les profils",
          "body": "Un salarié et un entrepreneur n'ont pas le même revenu imposable. Le régime turc 20/D ne transforme pas le travail effectué en Turquie en revenu étranger.",
          "table": {
            "headers": [
              "Profil",
              "Qatar",
              "Turquie"
            ],
            "rows": [
              [
                "Salarié local",
                "Salaire non imposé",
                "Barème ordinaire sauf exception"
              ],
              [
                "Indépendant",
                "10 % si bénéfice qatari imposable",
                "Barème ou dispositif export admissible"
              ],
              [
                "Investisseur passif",
                "Fiscalité selon source et catégorie",
                "20/D si admissible"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Impôt qatari : simulation d'un indépendant",
          "body": "Bénéfice net imposable de source qatarie, taux de 10 %, sans crédit ni exonération. Ce n'est pas le calcul d'un salaire ni d'une société pétrolière.",
          "table": {
            "headers": [
              "Bénéfice (QAR)",
              "Impôt (QAR)"
            ],
            "rows": [
              [
                "100 000",
                "10 000"
              ],
              [
                "300 000",
                "30 000"
              ],
              [
                "500 000",
                "50 000"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Choisir selon le revenu disponible",
          "body": "Pour une offre salariée à Doha, comparez rémunération, logement éventuellement pris en charge, couverture familiale, école, transport et retraite. Pour un indépendant, ajoutez licence et comptabilité ; pour un rentier examinez les retenues étrangères, la convention et les conditions turques de 20/D. Gardez contrat, justificatifs de domicile et déclarations de départ."
        },
        {
          "id": "global-5",
          "title": "Le régime turc 20/D en pratique",
          "body": "Applicable aux personnes physiques nouvellement établies depuis le 1er janvier 2026 : absence de domicile et, en principe, d'assujettissement fiscal en Turquie durant les trois années civiles précédentes, exceptions légales pour certains revenus du capital. Certificat avant fin d'année ou fin février suivante pour novembre/décembre. Les revenus étrangers admissibles sont exonérés pendant 20 ans, sans minimum d'investissement. Les revenus de source turque, les entreprises et les retenues étrangères ne sont pas automatiquement exonérés."
        }
      ],
      "faqs": [
        {
          "question": "Doha est-elle toujours à zéro impôt ?",
          "answer": "Non, des bénéfices professionnels locaux peuvent être imposés."
        },
        {
          "question": "183 jours suffisent-ils pour un traité ?",
          "answer": "Non, les critères conventionnels peuvent différer."
        },
        {
          "question": "Le revenu étranger est-il toujours exonéré en Turquie ?",
          "answer": "Non, uniquement si sa qualification et le dispositif applicable le permettent."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Qatar GTA",
          "href": "https://www.gta.gov.qa/en/laws"
        },
        {
          "label": "PwC Qatar — residence",
          "href": "https://taxsummaries.pwc.com/Qatar/Individual/Residence"
        },
        {
          "label": "PwC Qatar — income",
          "href": "https://taxsummaries.pwc.com/Qatar/Individual/Taxes-on-personal-income"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Qatar 2026: expat tax, salaries and self-employment",
      "metaDescription": "Compare Qatar and Turkey: tax-free employment salaries, 10% taxable business income, residence and Turkey's 20-year relief.",
      "shortAnswer": "Qatar does not tax employee wages but may tax qualifying Qatar-source business profits at 10%. Turkey offers conditional relief for eligible newcomers' foreign income.",
      "bosphorasHelp": "Bosphoras coordinates independent specialist appointments, housing and exploratory stays. Request an assessment of your project and income before committing.",
      "sections": [
        {
          "id": "global-1",
          "title": "Qatar: residence and source",
          "body": "A permanent home or presence exceeding 183 days in a year, continuous or intermittent, can establish foreign individuals' domestic residence. Treaty residence follows the applicable treaty. Qatar uses territorial taxation; employment wages are untaxed, but profitable local self-employment may be taxable. Work and independent business permissions need separate assessment."
        },
        {
          "id": "global-2",
          "title": "Compare personal profiles",
          "body": "Salary and business profit are different tax bases. Turkey's Article 20/D does not make work performed in Turkey foreign-source.",
          "table": {
            "headers": [
              "Profile",
              "Qatar",
              "Turkey"
            ],
            "rows": [
              [
                "Local employee",
                "Employment wages untaxed",
                "Ordinary scale unless relief applies"
              ],
              [
                "Self-employed",
                "10% if taxable Qatar-source profit",
                "Ordinary tariff or eligible export relief"
              ],
              [
                "Passive investor",
                "Source and category rules",
                "20/D if eligible"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Qatar self-employment tax illustration",
          "body": "Assume taxable Qatar-source net business profit at 10%, no credits or relief. This is not employment or oil-sector company taxation.",
          "table": {
            "headers": [
              "Profit (QAR)",
              "Tax (QAR)"
            ],
            "rows": [
              [
                "100,000",
                "10,000"
              ],
              [
                "300,000",
                "30,000"
              ],
              [
                "500,000",
                "50,000"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Choose by disposable income",
          "body": "For a Doha job compare pay, housing allowances, family cover, school, transport and retirement. For independent activity add licensing and accounting; for passive wealth assess foreign withholding, treaties and Article 20/D. Retain contracts, domicile evidence and departure filings."
        },
        {
          "id": "global-5",
          "title": "Turkey's Article 20/D in practice",
          "body": "For individuals newly settled from 1 January 2026: no Turkish domicile and generally no Turkish tax liability in the preceding three calendar years, with statutory exceptions for certain capital income. Certificate by settlement year-end or the following February for November/December. Eligible foreign income is exempt for 20 years, with no investment minimum. Domestic income, companies and foreign withholding are not automatically exempt."
        }
      ],
      "faqs": [
        {
          "question": "Is Doha always tax-free?",
          "answer": "No, local business profits may be taxable."
        },
        {
          "question": "Are 183 days sufficient for treaties?",
          "answer": "No, treaty criteria can differ."
        },
        {
          "question": "Is foreign income always exempt in Turkey?",
          "answer": "No, classification and eligibility matter."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Qatar GTA",
          "href": "https://www.gta.gov.qa/en/laws"
        },
        {
          "label": "PwC Qatar — residence",
          "href": "https://taxsummaries.pwc.com/Qatar/Individual/Residence"
        },
        {
          "label": "PwC Qatar — income",
          "href": "https://taxsummaries.pwc.com/Qatar/Individual/Taxes-on-personal-income"
        }
      ]
    },
    "ru": {
      "title": "Турция или Катар 2026: налоги экспатов, зарплата и бизнес",
      "metaDescription": "Сравните Катар и Турцию: необлагаемая зарплата, налог 10% на подходящую прибыль, резидентство и льгота на 20 лет.",
      "shortAnswer": "Катар не облагает зарплату работников, но подходящая местная предпринимательская прибыль может облагаться по 10%. Турция освобождает отдельные зарубежные доходы новых резидентов.",
      "bosphorasHelp": "Bosphoras организует встречи с независимыми специалистами, подбор жилья и ознакомительные поездки. Запросите оценку проекта и доходов до принятия обязательств.",
      "sections": [
        {
          "id": "global-1",
          "title": "Катар: резидентство и источник",
          "body": "Постоянное жильё или пребывание более 183 дней в году непрерывно либо с перерывами может установить внутреннее резидентство иностранца. Соглашения имеют собственные критерии. Катар применяет территориальный подход: зарплата не облагается, местная самостоятельная деятельность может облагаться. Право на работу и бизнес оформляется отдельно."
        },
        {
          "id": "global-2",
          "title": "Сравнение профилей",
          "body": "Зарплата и прибыль бизнеса — разные базы. Статья 20/D не превращает работу в Турции в зарубежный доход.",
          "table": {
            "headers": [
              "Профиль",
              "Катар",
              "Турция"
            ],
            "rows": [
              [
                "Наёмный работник",
                "Зарплата без налога",
                "Общая шкала при отсутствии льготы"
              ],
              [
                "Самозанятый",
                "10% на облагаемую местную прибыль",
                "Общая шкала или экспортная льгота"
              ],
              [
                "Пассивный инвестор",
                "Правила источника и категории",
                "20/D при соответствии"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Пример налога Катара",
          "body": "Чистая облагаемая местная прибыль по ставке 10% без зачётов и льгот. Это не расчёт зарплаты или нефтяной компании.",
          "table": {
            "headers": [
              "Прибыль (QAR)",
              "Налог (QAR)"
            ],
            "rows": [
              [
                "100 000",
                "10 000"
              ],
              [
                "300 000",
                "30 000"
              ],
              [
                "500 000",
                "50 000"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Сравните располагаемый доход",
          "body": "Для работы в Дохе оцените оплату, жилищные надбавки, семейную страховку, школу, транспорт и пенсию. Для бизнеса добавьте лицензии и учёт, для инвестора — удержания, соглашения и статью 20/D. Храните договоры, документы проживания и декларации прежней страны."
        },
        {
          "id": "global-5",
          "title": "Турецкая статья 20/D на практике",
          "body": "Для физлиц, поселившихся с 1 января 2026: отсутствие места жительства и обычно налоговых обязательств в Турции в три предыдущих календарных года с исключениями для некоторых доходов капитала. Сертификат до конца года или конца следующего февраля для ноября/декабря. Подходящий зарубежный доход освобождён на 20 лет без минимума инвестиций. Местный доход, компании и иностранные удержания не освобождаются автоматически."
        }
      ],
      "faqs": [
        {
          "question": "В Дохе всегда нет налогов?",
          "answer": "Нет, местная прибыль может облагаться."
        },
        {
          "question": "Достаточно ли 183 дней для соглашения?",
          "answer": "Нет, договорные критерии могут отличаться."
        },
        {
          "question": "Всегда ли иностранные доходы освобождены в Турции?",
          "answer": "Нет, важны квалификация и условия."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Qatar GTA",
          "href": "https://www.gta.gov.qa/en/laws"
        },
        {
          "label": "PwC Qatar — residence",
          "href": "https://taxsummaries.pwc.com/Qatar/Individual/Residence"
        },
        {
          "label": "PwC Qatar — income",
          "href": "https://taxsummaries.pwc.com/Qatar/Individual/Taxes-on-personal-income"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم قطر 2026: ضرائب المغتربين والرواتب والعمل المستقل",
      "metaDescription": "قارن قطر وتركيا: الرواتب غير الخاضعة وضريبة 10% على الربح المؤهل والإقامة والإعفاء التركي لعشرين عاماً.",
      "shortAnswer": "لا تفرض قطر ضريبة دخل على رواتب الموظفين لكن قد تخضع الأرباح المهنية القطرية المؤهلة بنسبة 10%. تعفي تركيا بعض الدخول الأجنبية للمقيمين الجدد المؤهلين.",
      "bosphorasHelp": "تنسق Bosphoras المواعيد مع مختصين مستقلين والسكن والرحلات الاستكشافية. اطلب دراسة مشروعك ودخلك قبل الالتزام.",
      "sections": [
        {
          "id": "global-1",
          "title": "قطر: الإقامة والمصدر",
          "body": "قد يثبت المسكن الدائم أو البقاء أكثر من 183 يوماً في السنة متصلة أو متقطعة الإقامة الداخلية للأجنبي. تخضع الإقامة الاتفاقية لشروط المعاهدة. النظام القطري إقليمي؛ الراتب غير خاضع لكن النشاط المستقل المحلي قد يخضع. تدرس تصاريح العمل والنشاط منفصلة."
        },
        {
          "id": "global-2",
          "title": "مقارنة الفئات",
          "body": "يختلف وعاء الراتب عن ربح النشاط. لا تحول المادة 20/D العمل المنفذ في تركيا إلى دخل أجنبي.",
          "table": {
            "headers": [
              "الفئة",
              "قطر",
              "تركيا"
            ],
            "rows": [
              [
                "موظف محلي",
                "راتب غير خاضع",
                "الشرائح العامة ما لم ينطبق إعفاء"
              ],
              [
                "مستقل",
                "10% على الربح القطري الخاضع",
                "الشرائح أو خصم تصدير مؤهل"
              ],
              [
                "مستثمر سلبي",
                "حسب المصدر والفئة",
                "20/D عند الأهلية"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "مثال ضريبة المستقل في قطر",
          "body": "نفترض ربحاً محلياً صافياً خاضعاً بنسبة 10% دون ائتمان أو إعفاء. ليس حساباً للراتب أو لشركة نفطية.",
          "table": {
            "headers": [
              "الربح بالريال القطري",
              "الضريبة بالريال القطري"
            ],
            "rows": [
              [
                "100,000",
                "10,000"
              ],
              [
                "300,000",
                "30,000"
              ],
              [
                "500,000",
                "50,000"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "الاختيار وفق الدخل المتاح",
          "body": "لعرض عمل في الدوحة قارن الأجر وبدل السكن والتأمين العائلي والمدرسة والنقل والتقاعد. للمستقل أضف الترخيص والمحاسبة وللمستثمر ادرس الاقتطاعات والاتفاقيات والمادة 20/D. احتفظ بالعقود وإثباتات الموطن وإقرارات المغادرة."
        },
        {
          "id": "global-5",
          "title": "المادة التركية 20/D عملياً",
          "body": "للأفراد المستقرين منذ 1 يناير 2026: عدم وجود موطن وعدم الخضوع عادة في تركيا في السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. الشهادة قبل نهاية السنة أو نهاية فبراير التالي لنوفمبر وديسمبر. يعفى الدخل الأجنبي المؤهل عشرين عاماً دون حد استثمار أدنى. لا تعفى الدخول المحلية والشركات والاقتطاعات الأجنبية تلقائياً."
        }
      ],
      "faqs": [
        {
          "question": "هل الدوحة بلا ضرائب دائماً؟",
          "answer": "لا، قد تخضع أرباح النشاط المحلي."
        },
        {
          "question": "هل تكفي 183 يوماً للاتفاقية؟",
          "answer": "لا، قد تختلف الشروط الاتفاقية."
        },
        {
          "question": "هل يعفى كل دخل أجنبي في تركيا؟",
          "answer": "لا، يتوقف على التصنيف والأهلية."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Qatar GTA",
          "href": "https://www.gta.gov.qa/en/laws"
        },
        {
          "label": "PwC Qatar — residence",
          "href": "https://taxsummaries.pwc.com/Qatar/Individual/Residence"
        },
        {
          "label": "PwC Qatar — income",
          "href": "https://taxsummaries.pwc.com/Qatar/Individual/Taxes-on-personal-income"
        }
      ]
    }
  },
  "turkey-vs-luxembourg-holding": {
    "fr": {
      "title": "Holding Turquie ou Luxembourg en 2026 : dividendes, plus-values et substance",
      "metaDescription": "Comparez holding turque et SOPARFI luxembourgeoise : exemption mère-fille, seuils de 1,2 et 6 M€, réforme turque de 80 %.",
      "shortAnswer": "Le Luxembourg offre une exonération de participations sous conditions. La Turquie dispose d'un régime complet et d'une exonération partielle de 80 % pour certaines participations étrangères. Comparez aussi la sortie vers l'actionnaire.",
      "bosphorasHelp": "Bosphoras organise les rendez-vous avec des professionnels indépendants, la recherche d'un logement et les séjours de découverte. Demandez une étude de votre projet et de vos revenus avant de vous engager.",
      "sections": [
        {
          "id": "global-1",
          "title": "Luxembourg : le régime mère-fille",
          "body": "La SOPARFI est une société fiscalement ordinaire détenant des participations. Pour les dividendes, le régime mère-fille exige notamment une filiale admissible et 10 % du capital ou un prix d'acquisition d'au moins 1,2 M€, avec détention ou engagement de 12 mois. Pour les plus-values le seuil alternatif est de 6 M€. Les conditions de taxation comparable, charges et récupération de déductions restent déterminantes. À Luxembourg-ville le taux combiné ordinaire est de 23,87 % pour une base supérieure à 200 000 €."
        },
        {
          "id": "global-2",
          "title": "Comparer les participations",
          "body": "En Turquie le régime complet demande notamment 10 % pendant un an, charge fiscale étrangère suffisante et rapatriement dans les délais. La décision 11257 prévoit aussi une exonération de 80 % à partir d'une détention de 20 % du capital libéré avec rapatriement dans les délais.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Luxembourg"
            ],
            "rows": [
              [
                "Dividendes éligibles",
                "Exonération totale ou partielle",
                "10 % ou 1,2 M€ ; 12 mois"
              ],
              [
                "Plus-values",
                "Exonérations spécifiques",
                "10 % ou 6 M€ ; 12 mois"
              ],
              [
                "IS ordinaire",
                "25 % hors finance",
                "23,87 % Luxembourg-ville (base > 200 k€)"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Simulation de 1 M€ de dividendes étrangers reçus",
          "body": "En équivalent euros, le taux turc de 25 % sur 20 % de base produit 50 000 €. Une exonération intégrale admissible produit zéro sur ce flux. Hors retenue, impôt minimum, crédits, charges, impôt sur la fortune et distribution finale.",
          "table": {
            "headers": [
              "Régime",
              "Impôt illustratif (€)"
            ],
            "rows": [
              [
                "Turquie sans exemption",
                "250 000"
              ],
              [
                "Turquie exemption 80 %",
                "50 000"
              ],
              [
                "Luxembourg sans exemption (ville)",
                "238 700"
              ],
              [
                "Exemption intégrale admissible",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Substance et coût total du groupe",
          "body": "Cartographiez les filiales, leurs pays et la résidence effective du conseil. Comparez fiscalité de cession, retenues au départ des filiales et de la holding, frais annuels, impôt sur la fortune luxembourgeois, CFC, prix de transfert et conventions. Le régime personnel 20/D ne couvre pas la holding ; une distribution à son associé nécessite une analyse propre."
        },
        {
          "id": "global-5",
          "title": "Le régime turc 20/D en pratique",
          "body": "Applicable aux personnes physiques nouvellement établies depuis le 1er janvier 2026 : absence de domicile et, en principe, d'assujettissement fiscal en Turquie durant les trois années civiles précédentes, exceptions légales pour certains revenus du capital. Certificat avant fin d'année ou fin février suivante pour novembre/décembre. Les revenus étrangers admissibles sont exonérés pendant 20 ans, sans minimum d'investissement. Les revenus de source turque, les entreprises et les retenues étrangères ne sont pas automatiquement exonérés."
        }
      ],
      "faqs": [
        {
          "question": "La SOPARFI est-elle exonérée de tout impôt ?",
          "answer": "Non, il s'agit d'une société imposable bénéficiant d'exonérations ciblées."
        },
        {
          "question": "Le seuil de 1,2 M€ vaut-il pour les plus-values ?",
          "answer": "Non, le seuil alternatif des plus-values est de 6 M€."
        },
        {
          "question": "80 % signifie-t-il 80 % d'impôt ?",
          "answer": "Non, c'est une fraction de dividende exonérée."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Guichet Luxembourg — mère-filiale",
          "href": "https://guichet.public.lu/content/guichet/fr/entreprises/fiscalite/developpement-restructuration/acquisition-societes/regime-mere-filiale.html"
        },
        {
          "label": "PwC — Luxembourg CIT",
          "href": "https://taxsummaries.pwc.com/luxembourg/corporate/taxes-on-corporate-income"
        },
        {
          "label": "PwC Türkiye — Decision 11257",
          "href": "https://www.pwc.com.tr/en/hizmetlerimiz/vergi/bultenler/2026/foreign-dividends-exemption-decree-no-11257.html"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Luxembourg holding 2026: dividends, gains and substance",
      "metaDescription": "Compare Turkish holdings and Luxembourg SOPARFI: participation exemption, €1.2m and €6m thresholds and Turkey's 80% reform.",
      "shortAnswer": "Luxembourg offers conditional participation exemption. Turkey has full relief and an 80% partial exemption for certain foreign participations. Consider eventual shareholder distributions too.",
      "bosphorasHelp": "Bosphoras coordinates independent specialist appointments, housing and exploratory stays. Request an assessment of your project and income before committing.",
      "sections": [
        {
          "id": "global-1",
          "title": "Luxembourg participation exemption",
          "body": "A SOPARFI is an ordinary taxable company holding participations. Dividend relief requires a qualifying subsidiary and generally 10% ownership or at least €1.2m acquisition cost, with a 12-month holding or commitment. For gains the alternative cost threshold is €6m. Comparable taxation, expense and recapture conditions matter. Luxembourg City ordinary combined tax is 23.87% on taxable income exceeding €200,000."
        },
        {
          "id": "global-2",
          "title": "Compare participation rules",
          "body": "Turkey's full exemption requires among other things 10% for one year, adequate foreign tax and timely remittance. Decision 11257 also provides an 80% exemption with at least 20% paid-in capital ownership and timely remittance.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Luxembourg"
            ],
            "rows": [
              [
                "Eligible dividends",
                "Full or partial relief",
                "10% or €1.2m; 12 months"
              ],
              [
                "Gains",
                "Specific exemptions",
                "10% or €6m; 12 months"
              ],
              [
                "Ordinary CIT",
                "25% non-financial",
                "23.87% Luxembourg City (base > €200k)"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "€1m incoming foreign dividend illustration",
          "body": "In euro equivalents, Turkish 25% on 20% taxable base yields €50,000. Qualifying full exemption yields zero on this flow. Excludes source withholding, minimum tax, credits, expenses, wealth tax and final distributions.",
          "table": {
            "headers": [
              "Regime",
              "Illustrative tax (€)"
            ],
            "rows": [
              [
                "Turkey no exemption",
                "250,000"
              ],
              [
                "Turkey 80% exemption",
                "50,000"
              ],
              [
                "Luxembourg no exemption (city)",
                "238,700"
              ],
              [
                "Qualifying full exemption",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Substance and total group cost",
          "body": "Map subsidiaries, countries and actual board residence. Compare exit tax, upstream and downstream withholding, running costs, Luxembourg net wealth tax, CFC, transfer pricing and treaties. Personal Article 20/D is not company relief; shareholder distributions need separate analysis."
        },
        {
          "id": "global-5",
          "title": "Turkey's Article 20/D in practice",
          "body": "For individuals newly settled from 1 January 2026: no Turkish domicile and generally no Turkish tax liability in the preceding three calendar years, with statutory exceptions for certain capital income. Certificate by settlement year-end or the following February for November/December. Eligible foreign income is exempt for 20 years, with no investment minimum. Domestic income, companies and foreign withholding are not automatically exempt."
        }
      ],
      "faqs": [
        {
          "question": "Is a SOPARFI entirely tax-free?",
          "answer": "No, it is taxable with targeted relief."
        },
        {
          "question": "Does the €1.2m threshold cover gains?",
          "answer": "No, the alternative gains threshold is €6m."
        },
        {
          "question": "Is 80% a tax rate?",
          "answer": "No, it is the exempt dividend fraction."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Guichet Luxembourg — mère-filiale",
          "href": "https://guichet.public.lu/content/guichet/fr/entreprises/fiscalite/developpement-restructuration/acquisition-societes/regime-mere-filiale.html"
        },
        {
          "label": "PwC — Luxembourg CIT",
          "href": "https://taxsummaries.pwc.com/luxembourg/corporate/taxes-on-corporate-income"
        },
        {
          "label": "PwC Türkiye — Decision 11257",
          "href": "https://www.pwc.com.tr/en/hizmetlerimiz/vergi/bultenler/2026/foreign-dividends-exemption-decree-no-11257.html"
        }
      ]
    },
    "ru": {
      "title": "Холдинг в Турции или Люксембурге 2026: дивиденды и прирост",
      "metaDescription": "Сравните турецкий холдинг и SOPARFI: пороги 1,2 и 6 млн евро, льгота 80% и реальные функции.",
      "shortAnswer": "Люксембург освобождает подходящие доходы от участия. Турция предусматривает полное освобождение и частичную льготу 80% для отдельных иностранных долей. Важны выплаты владельцу.",
      "bosphorasHelp": "Bosphoras организует встречи с независимыми специалистами, подбор жилья и ознакомительные поездки. Запросите оценку проекта и доходов до принятия обязательств.",
      "sections": [
        {
          "id": "global-1",
          "title": "Люксембург: режим участия",
          "body": "SOPARFI — обычная облагаемая компания. Для освобождения дивидендов нужны подходящая дочерняя компания и обычно 10% капитала или стоимость приобретения от 1,2 млн евро при владении или обязательстве на 12 месяцев. Для прироста альтернативный порог 6 млн. Важны сопоставимый налог, расходы и восстановление вычетов. В городе Люксембурге общая ставка 23,87% при базе свыше 200 тыс. евро."
        },
        {
          "id": "global-2",
          "title": "Сравнение режимов",
          "body": "Полное освобождение Турции требует, среди прочего, 10% в течение года, достаточного иностранного налога и своевременного перевода. Решение 11257 предусматривает 80% освобождения при 20% оплаченного капитала и своевременном переводе.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Люксембург"
            ],
            "rows": [
              [
                "Подходящие дивиденды",
                "Полная или частичная льгота",
                "10% или 1,2 млн €; 12 месяцев"
              ],
              [
                "Прирост",
                "Отдельные льготы",
                "10% или 6 млн €; 12 месяцев"
              ],
              [
                "Обычный налог",
                "25% вне финансов",
                "23,87% город Люксембург (база > 200 тыс. €)"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Пример иностранных дивидендов 1 млн евро",
          "body": "В эквиваленте евро 25% на 20% базы дают 50 тыс. евро. Полное освобождение даёт ноль на этот поток. Без удержаний, минимального налога, зачётов, расходов, налога на состояние и выплат владельцу.",
          "table": {
            "headers": [
              "Режим",
              "Пример налога (€)"
            ],
            "rows": [
              [
                "Турция без льготы",
                "250 000"
              ],
              [
                "Турция льгота 80%",
                "50 000"
              ],
              [
                "Люксембург без льготы (город)",
                "238 700"
              ],
              [
                "Полная льгота при соответствии",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Реальная деятельность и стоимость группы",
          "body": "Определите дочерние компании, страны и фактическое место решений. Сравните налог при продаже, удержания, расходы, налог на чистое состояние Люксембурга, КИК, трансфертные цены и соглашения. Личная статья 20/D не охватывает холдинг; выплаты акционеру оцениваются отдельно."
        },
        {
          "id": "global-5",
          "title": "Турецкая статья 20/D на практике",
          "body": "Для физлиц, поселившихся с 1 января 2026: отсутствие места жительства и обычно налоговых обязательств в Турции в три предыдущих календарных года с исключениями для некоторых доходов капитала. Сертификат до конца года или конца следующего февраля для ноября/декабря. Подходящий зарубежный доход освобождён на 20 лет без минимума инвестиций. Местный доход, компании и иностранные удержания не освобождаются автоматически."
        }
      ],
      "faqs": [
        {
          "question": "SOPARFI полностью без налога?",
          "answer": "Нет, обычная компания с целевыми льготами."
        },
        {
          "question": "Порог 1,2 млн действует на прирост?",
          "answer": "Нет, альтернативный порог 6 млн."
        },
        {
          "question": "80% — ставка налога?",
          "answer": "Нет, освобождаемая доля дивидендов."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Guichet Luxembourg — mère-filiale",
          "href": "https://guichet.public.lu/content/guichet/fr/entreprises/fiscalite/developpement-restructuration/acquisition-societes/regime-mere-filiale.html"
        },
        {
          "label": "PwC — Luxembourg CIT",
          "href": "https://taxsummaries.pwc.com/luxembourg/corporate/taxes-on-corporate-income"
        },
        {
          "label": "PwC Türkiye — Decision 11257",
          "href": "https://www.pwc.com.tr/en/hizmetlerimiz/vergi/bultenler/2026/foreign-dividends-exemption-decree-no-11257.html"
        }
      ]
    },
    "ar": {
      "title": "شركة قابضة في تركيا أم لوكسمبورغ 2026: التوزيعات والمكاسب",
      "metaDescription": "قارن القابضة التركية وSOPARFI وإعفاء المشاركات وحدي 1.2 و6 ملايين يورو والإعفاء التركي 80%.",
      "shortAnswer": "تقدم لوكسمبورغ إعفاء مشاركات بشروط، بينما توفر تركيا إعفاءً كاملاً أو جزئياً بنسبة 80% لبعض الحصص الأجنبية. تدرس توزيعات المساهم أيضاً.",
      "bosphorasHelp": "تنسق Bosphoras المواعيد مع مختصين مستقلين والسكن والرحلات الاستكشافية. اطلب دراسة مشروعك ودخلك قبل الالتزام.",
      "sections": [
        {
          "id": "global-1",
          "title": "لوكسمبورغ: نظام الشركة الأم والتابعة",
          "body": "SOPARFI شركة عادية خاضعة. يتطلب إعفاء التوزيع شركة تابعة مؤهلة وحصة 10% عادة أو تكلفة شراء 1.2 مليون يورو مع حيازة أو التزام 12 شهراً. الحد البديل للمكاسب 6 ملايين. تهم الضريبة المماثلة والمصاريف واسترداد الخصومات. المعدل المجمع العادي في مدينة لوكسمبورغ 23.87% لوعاء يتجاوز 200 ألف يورو."
        },
        {
          "id": "global-2",
          "title": "مقارنة المشاركات",
          "body": "يتطلب الإعفاء التركي الكامل ضمن شروطه حصة 10% لسنة وضريبة أجنبية كافية وتحويلاً في الموعد. يتيح القرار 11257 إعفاء 80% لحصة 20% من رأس المال المدفوع مع التحويل في الموعد.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "لوكسمبورغ"
            ],
            "rows": [
              [
                "التوزيعات المؤهلة",
                "إعفاء كامل أو جزئي",
                "10% أو 1.2 مليون يورو؛ 12 شهراً"
              ],
              [
                "المكاسب",
                "إعفاءات خاصة",
                "10% أو 6 ملايين يورو؛ 12 شهراً"
              ],
              [
                "ضريبة الشركات العادية",
                "25% لغير المالي",
                "23.87% في المدينة لوعاء فوق 200 ألف يورو"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "مثال توزيع أجنبي بمليون يورو",
          "body": "بالمعادل باليورو ينتج 25% على 20% من الوعاء 50 ألفاً. الإعفاء الكامل المؤهل صفر على هذا التدفق. دون اقتطاع أو ضريبة دنيا أو ائتمان أو مصاريف أو ضريبة ثروة أو توزيع نهائي.",
          "table": {
            "headers": [
              "النظام",
              "ضريبة توضيحية باليورو"
            ],
            "rows": [
              [
                "تركيا دون إعفاء",
                "250,000"
              ],
              [
                "تركيا إعفاء 80%",
                "50,000"
              ],
              [
                "لوكسمبورغ دون إعفاء (المدينة)",
                "238,700"
              ],
              [
                "إعفاء كامل مؤهل",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "النشاط الفعلي وتكلفة المجموعة",
          "body": "حدد الشركات التابعة والدول ومكان قرارات الإدارة. قارن ضريبة البيع والاقتطاعات والتكاليف وضريبة صافي الثروة في لوكسمبورغ والشركات الأجنبية الخاضعة للسيطرة وتسعير التحويل والاتفاقيات. لا تشمل المادة الشخصية 20/D القابضة؛ يدرس توزيع المساهم منفصلاً."
        },
        {
          "id": "global-5",
          "title": "المادة التركية 20/D عملياً",
          "body": "للأفراد المستقرين منذ 1 يناير 2026: عدم وجود موطن وعدم الخضوع عادة في تركيا في السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. الشهادة قبل نهاية السنة أو نهاية فبراير التالي لنوفمبر وديسمبر. يعفى الدخل الأجنبي المؤهل عشرين عاماً دون حد استثمار أدنى. لا تعفى الدخول المحلية والشركات والاقتطاعات الأجنبية تلقائياً."
        }
      ],
      "faqs": [
        {
          "question": "هل SOPARFI معفاة كلياً؟",
          "answer": "لا، شركة خاضعة ذات إعفاءات محددة."
        },
        {
          "question": "هل حد 1.2 مليون للمكاسب؟",
          "answer": "لا، الحد البديل للمكاسب 6 ملايين."
        },
        {
          "question": "هل 80% معدل ضريبي؟",
          "answer": "لا، نسبة التوزيع المعفاة."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Guichet Luxembourg — mère-filiale",
          "href": "https://guichet.public.lu/content/guichet/fr/entreprises/fiscalite/developpement-restructuration/acquisition-societes/regime-mere-filiale.html"
        },
        {
          "label": "PwC — Luxembourg CIT",
          "href": "https://taxsummaries.pwc.com/luxembourg/corporate/taxes-on-corporate-income"
        },
        {
          "label": "PwC Türkiye — Decision 11257",
          "href": "https://www.pwc.com.tr/en/hizmetlerimiz/vergi/bultenler/2026/foreign-dividends-exemption-decree-no-11257.html"
        }
      ]
    }
  },
  "turkey-singapore-hong-kong-trade": {
    "fr": {
      "title": "Turquie, Singapour ou Hong Kong 2026 : commerce international et transit trade",
      "metaDescription": "Trading international : déduction turque de 95 %, Singapour à 17 %, Hong Kong à 8,25–16,5 %, conditions et simulations.",
      "shortAnswer": "La réforme turque 2026 offre une déduction de 95 % des bénéfices admissibles de commerce de transit. Singapour et Hong Kong offrent d'autres avantages selon la source, les bénéfices et la substance.",
      "bosphorasHelp": "Bosphoras organise les rendez-vous avec des professionnels indépendants, la recherche d'un logement et les séjours de découverte. Demandez une étude de votre projet et de vos revenus avant de vous engager.",
      "sections": [
        {
          "id": "global-1",
          "title": "Commerce de transit : ce qui est réellement admissible",
          "body": "La loi 7582 vise les marchandises achetées puis revendues à l'étranger sans entrer en Turquie et certaines intermédiations entre achats et ventes étrangers. La déduction est de 95 % (100 % dans certains sites et conditions) si les bénéfices sont transférés avant l'échéance de déclaration. Elle est prise en compte pour le minimum local. Une importation turque suivie d'une exportation ne constitue pas ce transit. Conservez contrats d'achat et vente, documents de transport, preuves de livraison et de paiement."
        },
        {
          "id": "global-2",
          "title": "Comparer les hubs commerciaux",
          "body": "Singapour impose normalement 17 % et accorde une exemption partielle en SGD ; certains dividendes, bénéfices de succursales et services étrangers reçus peuvent être exonérés sous conditions. Hong Kong applique 8,25 % aux deux premiers millions HKD de bénéfices imposables d'une société admissible, 16,5 % au-delà ; le régime réduit est réservé à une entité désignée par groupe lié. La source des bénéfices dépend des opérations réelles. FSIE peut imposer des revenus passifs étrangers reçus à Hong Kong par des groupes multinationaux.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Singapour",
              "Hong Kong"
            ],
            "rows": [
              [
                "Taux ordinaire société",
                "25 %",
                "17 %",
                "16,5 %"
              ],
              [
                "Avantage",
                "95 % du bénéfice transit admissible",
                "Exemption partielle du bénéfice",
                "8,25 % sur première tranche admissible"
              ],
              [
                "Condition centrale",
                "Flux de marchandises et rapatriement",
                "Source, résidence, conditions",
                "Source, groupe, substance"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Bénéfice de transit de 1 M TL en Turquie",
          "body": "Base nette entièrement admissible, taux ordinaire 25 %. 95 % de déduction laisse 50 000 TL de base et 12 500 TL d'impôt. Hors impôts internationaux, autres revenus et coûts. Le graphe compare uniquement les régimes turcs, pas des monnaies différentes.",
          "table": {
            "headers": [
              "Scénario",
              "IS illustratif (TL)"
            ],
            "rows": [
              [
                "Sans déduction",
                "250 000"
              ],
              [
                "Déduction 95 %",
                "12 500"
              ],
              [
                "Déduction 100 % admissible",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Organiser le négoce réel",
          "body": "Comparez fournisseurs, clients, transit physique, Incoterms, financement, assurance, banque, sanctions et droits de douane dans les pays concernés. Pour Singapour, l'IRAS prévoit une remise d'IS de 40 % pour l'année d'imposition 2026 avec règles propres ; ne la confondez pas avec le taux permanent. Pour Hong Kong documentez négociations et exécution des contrats. Le meilleur hub est celui où les fonctions et risques sont réellement assumés."
        },
        {
          "id": "global-5",
          "title": "Le régime turc 20/D en pratique",
          "body": "Applicable aux personnes physiques nouvellement établies depuis le 1er janvier 2026 : absence de domicile et, en principe, d'assujettissement fiscal en Turquie durant les trois années civiles précédentes, exceptions légales pour certains revenus du capital. Certificat avant fin d'année ou fin février suivante pour novembre/décembre. Les revenus étrangers admissibles sont exonérés pendant 20 ans, sans minimum d'investissement. Les revenus de source turque, les entreprises et les retenues étrangères ne sont pas automatiquement exonérés."
        }
      ],
      "faqs": [
        {
          "question": "Une facture étrangère suffit-elle pour le transit ?",
          "answer": "Non, les flux de biens et les conditions légales doivent être démontrés."
        },
        {
          "question": "Hong Kong est-il toujours offshore à 0 % ?",
          "answer": "Non, la source et FSIE peuvent conduire à l'impôt."
        },
        {
          "question": "95 % de déduction signifie-t-il 5 % d'impôt ?",
          "answer": "Non, le taux ordinaire s'applique au solde de base."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Invest in Türkiye — reform 2026",
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx"
        },
        {
          "label": "Dentons — Türkiye",
          "href": "https://www.dentons.com/en/services-and-solutions/global-tax-guide-to-doing-business-in/turkey"
        },
        {
          "label": "IRAS — rates and reliefs",
          "href": "https://www.iras.gov.sg/quick-links/tax-rates/corporate-income-tax-rates"
        },
        {
          "label": "Singapore MOF",
          "href": "https://www.mof.gov.sg/policies/taxes/corporate-income-tax/"
        },
        {
          "label": "Hong Kong IRD — rates",
          "href": "https://www.ird.gov.hk/eng/faq/2tr.htm"
        },
        {
          "label": "Hong Kong IRD — FSIE",
          "href": "https://www.ird.gov.hk/eng/tax/bus_fsie.htm"
        }
      ]
    },
    "en": {
      "title": "Turkey, Singapore or Hong Kong 2026: international trade hubs",
      "metaDescription": "Transit trade: Turkey's 95% deduction, Singapore's 17% rate and Hong Kong's 8.25–16.5% rates, eligibility and examples.",
      "shortAnswer": "Turkey's 2026 reform introduces 95% relief for qualifying transit trade profits. Singapore and Hong Kong offer different advantages depending on source, profit and substance.",
      "bosphorasHelp": "Bosphoras coordinates independent specialist appointments, housing and exploratory stays. Request an assessment of your project and income before committing.",
      "sections": [
        {
          "id": "global-1",
          "title": "Qualifying transit trading",
          "body": "Law 7582 covers goods bought and resold abroad without entering Turkey and certain intermediation in foreign purchases and sales. Deduction is 95% (100% at certain qualifying sites) with timely repatriation by the filing deadline. It is recognised in domestic minimum tax calculation. Turkish imports followed by exports are different. Retain purchase and sale contracts, shipping, delivery and payment evidence."
        },
        {
          "id": "global-2",
          "title": "Compare trading hubs",
          "body": "Singapore's standard rate is 17%, with partial exemption in SGD; certain foreign dividends, branch profits and services received may qualify for relief. Hong Kong eligible corporations pay 8.25% on the first HKD 2m of assessable profit and 16.5% above; one nominated entity per connected group can use the lower tier. Profit source depends on actual operations. FSIE can tax specified foreign passive income received in Hong Kong by multinational groups.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Singapore",
              "Hong Kong"
            ],
            "rows": [
              [
                "Ordinary CIT",
                "25%",
                "17%",
                "16.5%"
              ],
              [
                "Relief",
                "95% eligible transit profit",
                "Partial profit exemption",
                "8.25% eligible first tier"
              ],
              [
                "Key test",
                "Goods flows and remittance",
                "Source, residence, conditions",
                "Source, group, substance"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "TRY 1m Turkish transit profit example",
          "body": "Fully qualifying net base at ordinary 25%. A 95% deduction leaves TRY 50,000 taxable and TRY 12,500 tax. Excludes international taxes, other income and costs. This chart compares Turkish regimes, not different currencies.",
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
                "95% deduction",
                "12,500"
              ],
              [
                "Qualifying 100% deduction",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Organise actual trade",
          "body": "Compare suppliers, clients, shipping, Incoterms, finance, insurance, banks, sanctions and customs. For Singapore, IRAS lists a 40% CIT rebate for YA 2026 under separate rules; it is not the permanent rate. For Hong Kong document contract negotiation and execution. Actual business functions and risks matter more than the registered address."
        },
        {
          "id": "global-5",
          "title": "Turkey's Article 20/D in practice",
          "body": "For individuals newly settled from 1 January 2026: no Turkish domicile and generally no Turkish tax liability in the preceding three calendar years, with statutory exceptions for certain capital income. Certificate by settlement year-end or the following February for November/December. Eligible foreign income is exempt for 20 years, with no investment minimum. Domestic income, companies and foreign withholding are not automatically exempt."
        }
      ],
      "faqs": [
        {
          "question": "Does a foreign invoice establish transit eligibility?",
          "answer": "No, document goods flows and statutory conditions."
        },
        {
          "question": "Is Hong Kong always offshore tax-free?",
          "answer": "No, source and FSIE can create taxation."
        },
        {
          "question": "Does a 95% deduction mean 5% tax?",
          "answer": "No, apply the ordinary rate to the remaining base."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Invest in Türkiye — reform 2026",
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx"
        },
        {
          "label": "Dentons — Türkiye",
          "href": "https://www.dentons.com/en/services-and-solutions/global-tax-guide-to-doing-business-in/turkey"
        },
        {
          "label": "IRAS — rates and reliefs",
          "href": "https://www.iras.gov.sg/quick-links/tax-rates/corporate-income-tax-rates"
        },
        {
          "label": "Singapore MOF",
          "href": "https://www.mof.gov.sg/policies/taxes/corporate-income-tax/"
        },
        {
          "label": "Hong Kong IRD — rates",
          "href": "https://www.ird.gov.hk/eng/faq/2tr.htm"
        },
        {
          "label": "Hong Kong IRD — FSIE",
          "href": "https://www.ird.gov.hk/eng/tax/bus_fsie.htm"
        }
      ]
    },
    "ru": {
      "title": "Турция, Сингапур или Гонконг 2026: международная транзитная торговля",
      "metaDescription": "Транзит: вычет Турции 95%, ставка Сингапура 17%, Гонконга 8,25–16,5%, условия и расчёты.",
      "shortAnswer": "Реформа Турции 2026 года даёт вычет 95% подходящей транзитной прибыли. Сингапур и Гонконг применяют другие правила источника, прибыли и деятельности.",
      "bosphorasHelp": "Bosphoras организует встречи с независимыми специалистами, подбор жилья и ознакомительные поездки. Запросите оценку проекта и доходов до принятия обязательств.",
      "sections": [
        {
          "id": "global-1",
          "title": "Подходящая транзитная торговля",
          "body": "Закон № 7582 охватывает товары, купленные и проданные за рубежом без ввоза в Турцию, и отдельное посредничество в зарубежных сделках. Вычет 95% (100% в отдельных подходящих местах) при переводе прибыли до срока декларации учитывается при внутреннем минимальном налоге. Импорт в Турцию с последующим экспортом отличается. Храните договоры, транспортные документы, доказательства поставки и оплаты."
        },
        {
          "id": "global-2",
          "title": "Сравнение торговых центров",
          "body": "Сингапур применяет 17% с частичным освобождением в SGD; некоторые полученные иностранные дивиденды, прибыль филиала и услуги могут освобождаться при условиях. В Гонконге подходящие компании платят 8,25% на первые 2 млн HKD облагаемой прибыли и 16,5% сверх; льгота доступна одному назначенному лицу связанной группы. Источник определяется операциями. FSIE может облагать определённые зарубежные пассивные доходы международных групп.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Сингапур",
              "Гонконг"
            ],
            "rows": [
              [
                "Обычная ставка",
                "25%",
                "17%",
                "16,5%"
              ],
              [
                "Льгота",
                "95% подходящей транзитной прибыли",
                "Частичное освобождение прибыли",
                "8,25% на первую подходящую часть"
              ],
              [
                "Условия",
                "Товары и перевод",
                "Источник, резидентство, условия",
                "Источник, группа, деятельность"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Пример транзитной прибыли 1 млн лир",
          "body": "Полностью подходящая чистая база по ставке 25%. Вычет 95% оставляет базу 50 000 и налог 12 500 лир. Без международных налогов, других доходов и затрат. Сравнение только турецких режимов.",
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
                "Вычет 95%",
                "12 500"
              ],
              [
                "Подходящий вычет 100%",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Организация реальной торговли",
          "body": "Сравните поставщиков, клиентов, перевозки, Incoterms, финансирование, страхование, банки, санкции и таможню. IRAS предусматривает скидку 40% на налог за год оценки 2026 по отдельным правилам; это не постоянная ставка. В Гонконге документируйте переговоры и исполнение. Важнее фактические функции и риски, а не адрес."
        },
        {
          "id": "global-5",
          "title": "Турецкая статья 20/D на практике",
          "body": "Для физлиц, поселившихся с 1 января 2026: отсутствие места жительства и обычно налоговых обязательств в Турции в три предыдущих календарных года с исключениями для некоторых доходов капитала. Сертификат до конца года или конца следующего февраля для ноября/декабря. Подходящий зарубежный доход освобождён на 20 лет без минимума инвестиций. Местный доход, компании и иностранные удержания не освобождаются автоматически."
        }
      ],
      "faqs": [
        {
          "question": "Достаточно ли иностранного счёта-фактуры?",
          "answer": "Нет, нужны товарные потоки и соблюдение закона."
        },
        {
          "question": "Гонконг всегда без налога?",
          "answer": "Нет, источник и FSIE могут вызвать налог."
        },
        {
          "question": "Вычет 95% означает налог 5%?",
          "answer": "Нет, обычная ставка применяется к остаточной базе."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Invest in Türkiye — reform 2026",
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx"
        },
        {
          "label": "Dentons — Türkiye",
          "href": "https://www.dentons.com/en/services-and-solutions/global-tax-guide-to-doing-business-in/turkey"
        },
        {
          "label": "IRAS — rates and reliefs",
          "href": "https://www.iras.gov.sg/quick-links/tax-rates/corporate-income-tax-rates"
        },
        {
          "label": "Singapore MOF",
          "href": "https://www.mof.gov.sg/policies/taxes/corporate-income-tax/"
        },
        {
          "label": "Hong Kong IRD — rates",
          "href": "https://www.ird.gov.hk/eng/faq/2tr.htm"
        },
        {
          "label": "Hong Kong IRD — FSIE",
          "href": "https://www.ird.gov.hk/eng/tax/bus_fsie.htm"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم سنغافورة أم هونغ كونغ 2026: التجارة الدولية وتجارة الترانزيت",
      "metaDescription": "تجارة الترانزيت وخصم تركيا 95% ومعدل سنغافورة 17% وهونغ كونغ 8.25–16.5% والشروط والحسابات.",
      "shortAnswer": "يمنح الإصلاح التركي 2026 خصم 95% من أرباح الترانزيت المؤهلة. تختلف مزايا سنغافورة وهونغ كونغ بحسب المصدر والربح والنشاط الفعلي.",
      "bosphorasHelp": "تنسق Bosphoras المواعيد مع مختصين مستقلين والسكن والرحلات الاستكشافية. اطلب دراسة مشروعك ودخلك قبل الالتزام.",
      "sections": [
        {
          "id": "global-1",
          "title": "تجارة الترانزيت المؤهلة",
          "body": "يشمل القانون 7582 السلع المشتراة والمباعة خارج تركيا دون دخولها وبعض الوساطات في المعاملات الأجنبية. الخصم 95% أو 100% في مواقع مؤهلة معينة مع تحويل الربح قبل موعد الإقرار، ويؤخذ في حساب الضريبة الدنيا المحلية. يختلف الاستيراد إلى تركيا ثم التصدير. احتفظ بعقود الشراء والبيع والشحن والتسليم والدفع."
        },
        {
          "id": "global-2",
          "title": "مقارنة المراكز التجارية",
          "body": "معدل سنغافورة العادي 17% مع إعفاء جزئي بالدولار السنغافوري؛ قد تعفى توزيعات وأرباح فروع وخدمات أجنبية مستلمة بشروط. في هونغ كونغ تدفع الشركة المؤهلة 8.25% على أول مليوني دولار هونغ كونغ من الربح الخاضع و16.5% للزائد؛ تستفيد جهة واحدة معينة لكل مجموعة مرتبطة. يتوقف المصدر على العمليات الفعلية. قد يخضع الدخل الأجنبي السلبي المحدد للمجموعات متعددة الجنسيات وفق FSIE.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "سنغافورة",
              "هونغ كونغ"
            ],
            "rows": [
              [
                "المعدل العادي",
                "25%",
                "17%",
                "16.5%"
              ],
              [
                "الميزة",
                "خصم 95% من ربح الترانزيت المؤهل",
                "إعفاء جزئي للربح",
                "8.25% للشريحة الأولى المؤهلة"
              ],
              [
                "الشرط",
                "مسار السلع والتحويل",
                "المصدر والإقامة والشروط",
                "المصدر والمجموعة والنشاط"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "مثال ربح ترانزيت تركي بمليون ليرة",
          "body": "وعاء صاف مؤهل بالكامل بمعدل 25%. يبقي خصم 95% وعاء 50 ألفاً وضريبة 12,500 ليرة. دون الضرائب الدولية والدخول الأخرى والتكاليف. يقارن الرسم الأنظمة التركية لا العملات المختلفة.",
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
                "خصم 95%",
                "12,500"
              ],
              [
                "خصم 100% مؤهل",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "تنظيم التجارة الفعلية",
          "body": "قارن الموردين والعملاء والشحن وIncoterms والتمويل والتأمين والمصارف والعقوبات والجمارك. تعلن IRAS تخفيضاً 40% لضريبة الشركات لسنة التقييم 2026 بشروط مستقلة وليس معدلاً دائماً. وثق التفاوض والتنفيذ في هونغ كونغ. الوظائف والمخاطر الفعلية أهم من العنوان المسجل."
        },
        {
          "id": "global-5",
          "title": "المادة التركية 20/D عملياً",
          "body": "للأفراد المستقرين منذ 1 يناير 2026: عدم وجود موطن وعدم الخضوع عادة في تركيا في السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. الشهادة قبل نهاية السنة أو نهاية فبراير التالي لنوفمبر وديسمبر. يعفى الدخل الأجنبي المؤهل عشرين عاماً دون حد استثمار أدنى. لا تعفى الدخول المحلية والشركات والاقتطاعات الأجنبية تلقائياً."
        }
      ],
      "faqs": [
        {
          "question": "هل تكفي فاتورة أجنبية؟",
          "answer": "لا، يلزم إثبات حركة السلع والشروط القانونية."
        },
        {
          "question": "هل هونغ كونغ معفاة دائماً؟",
          "answer": "لا، قد ينشأ خضوع بحسب المصدر وFSIE."
        },
        {
          "question": "هل خصم 95% يعني ضريبة 5%؟",
          "answer": "لا، يطبق المعدل العادي على الوعاء المتبقي."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Invest in Türkiye — reform 2026",
          "href": "https://www.invest.gov.tr/en/news/news-from-turkey/pages/powerhouse-for-investments-reform-package-enters-into-force-following-publication-in-the-official-gazette.aspx"
        },
        {
          "label": "Dentons — Türkiye",
          "href": "https://www.dentons.com/en/services-and-solutions/global-tax-guide-to-doing-business-in/turkey"
        },
        {
          "label": "IRAS — rates and reliefs",
          "href": "https://www.iras.gov.sg/quick-links/tax-rates/corporate-income-tax-rates"
        },
        {
          "label": "Singapore MOF",
          "href": "https://www.mof.gov.sg/policies/taxes/corporate-income-tax/"
        },
        {
          "label": "Hong Kong IRD — rates",
          "href": "https://www.ird.gov.hk/eng/faq/2tr.htm"
        },
        {
          "label": "Hong Kong IRD — FSIE",
          "href": "https://www.ird.gov.hk/eng/tax/bus_fsie.htm"
        }
      ]
    }
  },
  "turkey-vs-dubai-tax": {
    "fr": {
      "title": "Turquie ou Dubaï en 2026–2029 : impôt des entrepreneurs et investisseurs",
      "metaDescription": "Comparez l'exonération turque de 20 ans, le seuil UAE de 1 M AED et l'allègement des petites entreprises prolongé jusqu'en 2029.",
      "shortAnswer": "Les Émirats excluent salaires et investissements personnels admissibles de l'impôt sur les sociétés des personnes physiques. La Turquie applique 20/D aux revenus étrangers admissibles. Les entrepreneurs doivent comparer les règles de bénéfice et résidence, pas seulement le taux zéro.",
      "bosphorasHelp": "Bosphoras organise les rendez-vous avec des professionnels indépendants, la recherche d'un logement et les séjours de découverte. Demandez une étude de votre projet et de vos revenus avant de vous engager.",
      "sections": [
        {
          "id": "global-1",
          "title": "Dubaï : seuils, assiette et nouveauté 2029",
          "body": "Une personne physique exerçant une activité aux Émirats relève de l'impôt sur les sociétés si son chiffre d'affaires professionnel dépasse 1 M AED sur l'année civile. Salaires, investissements personnels et investissements immobiliers personnels admissibles sont exclus de ce chiffre d'affaires. Régime ordinaire : 0 % sur les premiers 375 000 AED de bénéfice taxable, puis 9 %. Le ministère des Finances a prolongé en août 2026 le Small Business Relief pour les périodes se terminant au plus tard le 31 décembre 2029 : chiffre d'affaires au plus 3 M AED, autres conditions et option requises. Il ne s'applique pas à tous les contribuables, notamment aux personnes qualifiées de zone franche."
        },
        {
          "id": "global-2",
          "title": "Comparer résidence et activité",
          "body": "La résidence personnelle aux Émirats peut résulter de 183 jours sur 12 mois ou de 90 jours avec statut et logement permanent ou emploi/activité admissibles, ou du foyer principal et centre d'intérêts. Les conventions peuvent imposer d'autres conditions. En Turquie le domicile ou le séjour de plus de six mois dans l'année civile peut établir la résidence ; 20/D exige un historique admissible et un certificat.",
          "table": {
            "headers": [
              "Profil",
              "Turquie",
              "Dubaï"
            ],
            "rows": [
              [
                "Rentier étranger",
                "20/D sous conditions",
                "Investissement personnel admissible hors CT"
              ],
              [
                "Consultant actif",
                "Barème ou déduction export admissible",
                "CT selon CA et bénéfices"
              ],
              [
                "Société",
                "IS et incitations spécifiques",
                "CT ordinaire ; zone franche sous conditions"
              ],
              [
                "Petite entreprise",
                "Régimes turcs distincts",
                "SBR jusqu'à fin 2029 si admissible"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Exemple émirati : 500 000 AED de bénéfice imposable",
          "body": "Hypothèse d'une activité individuelle avec CA supérieur à 1 M AED et bénéfice taxable de 500 000 AED, sans SBR ni autre avantage : 125 000 × 9 % = 11 250 AED. Si les conditions SBR sont remplies et l'option valablement exercée, le bénéfice est réputé nul. Ce n'est pas un seuil de chiffre d'affaires de 375 000 AED.",
          "table": {
            "headers": [
              "Scénario",
              "Impôt indicatif (AED)"
            ],
            "rows": [
              [
                "Bénéfice taxable 500 000, régime ordinaire",
                "11 250"
              ],
              [
                "Même cas, SBR admissible",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Comparer après impôts et frais réels",
          "body": "Chiffrez séparément licence, comptabilité, visa, santé, logement et école. Évaluez la gestion effective d'une société de Dubaï depuis la Turquie : cela peut créer résidence d'entreprise ou établissement stable. Pour chaque dividende ou loyer, vérifiez la retenue du pays de source et les conditions du traité. Préparez les justificatifs de résidence et la demande 20/D ou TRC selon le pays."
        },
        {
          "id": "global-5",
          "title": "Le régime turc 20/D en pratique",
          "body": "Applicable aux personnes physiques nouvellement établies depuis le 1er janvier 2026 : absence de domicile et, en principe, d'assujettissement fiscal en Turquie durant les trois années civiles précédentes, exceptions légales pour certains revenus du capital. Certificat avant fin d'année ou fin février suivante pour novembre/décembre. Les revenus étrangers admissibles sont exonérés pendant 20 ans, sans minimum d'investissement. Les revenus de source turque, les entreprises et les retenues étrangères ne sont pas automatiquement exonérés."
        }
      ],
      "faqs": [
        {
          "question": "Une zone franche garantit-elle zéro impôt ?",
          "answer": "Non, seuls les revenus et personnes qualifiés remplissant les conditions peuvent en bénéficier."
        },
        {
          "question": "Le SBR s'arrête-t-il en 2026 ?",
          "answer": "Non, la décision 131 de 2026 l'étend aux périodes finissant au plus tard le 31 décembre 2029."
        },
        {
          "question": "Un visa de Dubaï prouve-t-il la résidence fiscale ?",
          "answer": "Non, les critères de résidence et de convention restent à établir."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "UAE FTA — natural person",
          "href": "https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics/basis.of.taxation.natural.person.aspx"
        },
        {
          "label": "UAE FTA — TRC",
          "href": "https://www.tax.gov.ae/en/services/issuance.of.tax.certificates.aspx"
        },
        {
          "label": "UAE MOF — 2029 extension",
          "href": "https://mof.gov.ae/en/news/ministry-of-finance-announces-extension-of-small-business-relief-for-corporate-tax-purposes-until-31-december-2029/"
        },
        {
          "label": "UAE MOF — Decision 116",
          "href": "https://mof.gov.ae/wp-content/uploads/2023/04/Cabinet-Decision-No-116-of-2022-on-the-annual-Taxable-Income-subject-to-Corporate-Tax.pdf"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Dubai 2026–2029: entrepreneur and investor taxation",
      "metaDescription": "Compare Turkey's 20-year relief, UAE AED 1m business threshold and Small Business Relief extended through 2029.",
      "shortAnswer": "The UAE excludes wages and qualifying personal investments from natural-person corporate tax. Turkey's 20/D covers eligible foreign income. Entrepreneurs must compare profit and residence tests, not just zero-tax headlines.",
      "bosphorasHelp": "Bosphoras coordinates independent specialist appointments, housing and exploratory stays. Request an assessment of your project and income before committing.",
      "sections": [
        {
          "id": "global-1",
          "title": "Dubai: thresholds and the 2029 extension",
          "body": "A natural person conducting UAE business enters corporate tax if business turnover exceeds AED 1m in a calendar year. Wages, qualifying personal investments and real estate investments are excluded. Ordinary tax is 0% on the first AED 375,000 of taxable profit and 9% above. In August 2026 the Ministry extended Small Business Relief to periods ending by 31 December 2029: revenue no more than AED 3m, other requirements and an election. It is unavailable to certain taxpayers, including qualifying free zone persons."
        },
        {
          "id": "global-2",
          "title": "Compare residence and activity",
          "body": "UAE domestic residence can arise from 183 days in 12 months, or 90 with eligible status and permanent home or employment/business, or primary home and centre of interests. Treaties may differ. Turkey considers domicile or over six months in a calendar year; 20/D requires prior-history eligibility and certification.",
          "table": {
            "headers": [
              "Profile",
              "Turkey",
              "Dubai"
            ],
            "rows": [
              [
                "Foreign-income investor",
                "Conditional Article 20/D",
                "Eligible personal investments outside CT"
              ],
              [
                "Active consultant",
                "Ordinary tariff or qualifying export relief",
                "CT according to turnover and profit"
              ],
              [
                "Company",
                "CIT and particular incentives",
                "Ordinary CT; conditional free zone rules"
              ],
              [
                "Small business",
                "Separate Turkish reliefs",
                "SBR through 2029 if eligible"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "UAE AED 500,000 taxable profit example",
          "body": "Assume individual business turnover above AED 1m, AED 500,000 taxable profit and no SBR or other relief: AED 125,000 × 9% = AED 11,250. An eligible valid SBR election treats taxable income as nil. AED 375,000 is a profit threshold, not turnover.",
          "table": {
            "headers": [
              "Scenario",
              "Illustrative tax (AED)"
            ],
            "rows": [
              [
                "500,000 taxable profit, ordinary rate",
                "11,250"
              ],
              [
                "Same case, eligible SBR",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Compare after tax and actual costs",
          "body": "Budget licensing, accounting, visas, healthcare, housing and schooling. Managing a Dubai company from Turkey may create corporate residence or permanent establishment. Check source withholding and treaty conditions for each dividend and rent flow. Prepare residence evidence and either Article 20/D certification or UAE TRC as applicable."
        },
        {
          "id": "global-5",
          "title": "Turkey's Article 20/D in practice",
          "body": "For individuals newly settled from 1 January 2026: no Turkish domicile and generally no Turkish tax liability in the preceding three calendar years, with statutory exceptions for certain capital income. Certificate by settlement year-end or the following February for November/December. Eligible foreign income is exempt for 20 years, with no investment minimum. Domestic income, companies and foreign withholding are not automatically exempt."
        }
      ],
      "faqs": [
        {
          "question": "Does a free zone guarantee zero tax?",
          "answer": "No, qualifying income and taxpayer status have conditions."
        },
        {
          "question": "Does SBR end in 2026?",
          "answer": "No, Decision 131 of 2026 extends it to periods ending by 31 December 2029."
        },
        {
          "question": "Does a Dubai visa prove tax residence?",
          "answer": "No, residence and treaty requirements must be established."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "UAE FTA — natural person",
          "href": "https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics/basis.of.taxation.natural.person.aspx"
        },
        {
          "label": "UAE FTA — TRC",
          "href": "https://www.tax.gov.ae/en/services/issuance.of.tax.certificates.aspx"
        },
        {
          "label": "UAE MOF — 2029 extension",
          "href": "https://mof.gov.ae/en/news/ministry-of-finance-announces-extension-of-small-business-relief-for-corporate-tax-purposes-until-31-december-2029/"
        },
        {
          "label": "UAE MOF — Decision 116",
          "href": "https://mof.gov.ae/wp-content/uploads/2023/04/Cabinet-Decision-No-116-of-2022-on-the-annual-Taxable-Income-subject-to-Corporate-Tax.pdf"
        }
      ]
    },
    "ru": {
      "title": "Турция или Дубай 2026–2029: налоги предпринимателей и инвесторов",
      "metaDescription": "Сравните льготу Турции на 20 лет, порог ОАЭ 1 млн AED и льготу малого бизнеса до 2029 года.",
      "shortAnswer": "ОАЭ исключают зарплату и подходящие личные инвестиции из корпоративного налога физлиц. Турция освобождает подходящий зарубежный доход по 20/D. Бизнесу важны прибыль и резидентство.",
      "bosphorasHelp": "Bosphoras организует встречи с независимыми специалистами, подбор жилья и ознакомительные поездки. Запросите оценку проекта и доходов до принятия обязательств.",
      "sections": [
        {
          "id": "global-1",
          "title": "Дубай: пороги и продление до 2029",
          "body": "Физлицо с бизнесом в ОАЭ облагается корпоративным налогом при обороте свыше 1 млн AED за календарный год. Зарплата и подходящие личные и недвижимые инвестиции не включаются. Общая ставка 0% на первые 375 тыс. AED облагаемой прибыли, 9% сверх. В августе 2026 льгота Small Business Relief продлена до периодов, завершающихся не позднее 31 декабря 2029: выручка до 3 млн AED, дополнительные условия и выбор режима. Некоторые лица, включая квалифицированных участников свободных зон, исключены."
        },
        {
          "id": "global-2",
          "title": "Резидентство и деятельность",
          "body": "Внутреннее резидентство ОАЭ может возникнуть при 183 днях за 12 месяцев, 90 днях с подходящим статусом и постоянным жильём или работой/бизнесом либо главном доме и центре интересов. Соглашения могут отличаться. Турция учитывает место жительства или более шести месяцев в году; для 20/D нужна подходящая история и сертификат.",
          "table": {
            "headers": [
              "Профиль",
              "Турция",
              "Дубай"
            ],
            "rows": [
              [
                "Инвестор зарубежных активов",
                "20/D при соответствии",
                "Подходящие личные инвестиции вне CT"
              ],
              [
                "Активный консультант",
                "Общая шкала или экспортная льгота",
                "CT по обороту и прибыли"
              ],
              [
                "Компания",
                "Корпоративный налог и льготы",
                "Обычный CT; условия свободных зон"
              ],
              [
                "Малый бизнес",
                "Отдельные турецкие режимы",
                "SBR до конца 2029 при соответствии"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Пример облагаемой прибыли 500 000 AED",
          "body": "Оборот индивидуального бизнеса более 1 млн AED, прибыль 500 тыс. AED, без SBR и иных льгот: 125 000 × 9% = 11 250 AED. При подходящем выборе SBR облагаемая прибыль считается нулевой. Порог 375 000 относится к прибыли, не обороту.",
          "table": {
            "headers": [
              "Сценарий",
              "Пример налога (AED)"
            ],
            "rows": [
              [
                "500 000 прибыли, общая ставка",
                "11 250"
              ],
              [
                "Тот же случай с подходящим SBR",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Сравните чистый доход и расходы",
          "body": "Учтите лицензии, учёт, визы, медицину, жильё и школу. Управление компанией Дубая из Турции может создать резидентство компании или постоянное представительство. Проверьте удержания и соглашения по каждому дивиденду и аренде. Подготовьте доказательства резидентства и сертификат 20/D или TRC."
        },
        {
          "id": "global-5",
          "title": "Турецкая статья 20/D на практике",
          "body": "Для физлиц, поселившихся с 1 января 2026: отсутствие места жительства и обычно налоговых обязательств в Турции в три предыдущих календарных года с исключениями для некоторых доходов капитала. Сертификат до конца года или конца следующего февраля для ноября/декабря. Подходящий зарубежный доход освобождён на 20 лет без минимума инвестиций. Местный доход, компании и иностранные удержания не освобождаются автоматически."
        }
      ],
      "faqs": [
        {
          "question": "Гарантирует ли свободная зона нулевой налог?",
          "answer": "Нет, действуют условия для доходов и лиц."
        },
        {
          "question": "SBR заканчивается в 2026?",
          "answer": "Нет, решение 131 от 2026 продлевает до периодов, заканчивающихся 31 декабря 2029."
        },
        {
          "question": "Виза Дубая доказывает налоговое резидентство?",
          "answer": "Нет, проверяются условия и соглашения."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "UAE FTA — natural person",
          "href": "https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics/basis.of.taxation.natural.person.aspx"
        },
        {
          "label": "UAE FTA — TRC",
          "href": "https://www.tax.gov.ae/en/services/issuance.of.tax.certificates.aspx"
        },
        {
          "label": "UAE MOF — 2029 extension",
          "href": "https://mof.gov.ae/en/news/ministry-of-finance-announces-extension-of-small-business-relief-for-corporate-tax-purposes-until-31-december-2029/"
        },
        {
          "label": "UAE MOF — Decision 116",
          "href": "https://mof.gov.ae/wp-content/uploads/2023/04/Cabinet-Decision-No-116-of-2022-on-the-annual-Taxable-Income-subject-to-Corporate-Tax.pdf"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم دبي 2026–2029: ضرائب رواد الأعمال والمستثمرين",
      "metaDescription": "قارن إعفاء تركيا لعشرين عاماً وحد مليون درهم وتخفيف ضريبة الأعمال الصغيرة الإماراتي الممتد إلى 2029.",
      "shortAnswer": "تستبعد الإمارات الرواتب والاستثمارات الشخصية المؤهلة من ضريبة الشركات للأفراد. تعفي تركيا الدخل الأجنبي المؤهل وفق 20/D. يدرس رائد الأعمال الربح والإقامة لا شعار الضريبة الصفرية.",
      "bosphorasHelp": "تنسق Bosphoras المواعيد مع مختصين مستقلين والسكن والرحلات الاستكشافية. اطلب دراسة مشروعك ودخلك قبل الالتزام.",
      "sections": [
        {
          "id": "global-1",
          "title": "دبي: الحدود والتمديد إلى 2029",
          "body": "يخضع الفرد صاحب نشاط في الإمارات عند تجاوز إيراد النشاط مليون درهم في السنة التقويمية. تستبعد الرواتب والاستثمارات الشخصية والعقارية المؤهلة. المعدل العادي صفر على أول 375 ألف درهم من الربح الخاضع و9% للزائد. مددت وزارة المالية في أغسطس 2026 تخفيف الأعمال الصغيرة للفترات المنتهية حتى 31 ديسمبر 2029: إيراد لا يتجاوز 3 ملايين مع شروط أخرى واختيار النظام. تستثنى بعض الجهات ومنها الأشخاص المؤهلون في المناطق الحرة."
        },
        {
          "id": "global-2",
          "title": "مقارنة الإقامة والنشاط",
          "body": "قد تثبت الإقامة الداخلية الإماراتية بـ183 يوماً خلال 12 شهراً أو 90 يوماً مع وضع مناسب ومسكن دائم أو عمل أو نشاط أو مسكن رئيسي ومركز مصالح. قد تختلف الاتفاقيات. تدرس تركيا الموطن أو البقاء أكثر من ستة أشهر في السنة؛ وتتطلب 20/D تاريخاً مؤهلاً وشهادة.",
          "table": {
            "headers": [
              "الفئة",
              "تركيا",
              "دبي"
            ],
            "rows": [
              [
                "مستثمر دخل أجنبي",
                "20/D بشروط",
                "استثمارات شخصية مؤهلة خارج CT"
              ],
              [
                "مستشار نشط",
                "شرائح عامة أو خصم تصدير مؤهل",
                "CT وفق الإيراد والربح"
              ],
              [
                "شركة",
                "ضريبة الشركات وحوافز خاصة",
                "CT عادية وشروط المناطق الحرة"
              ],
              [
                "أعمال صغيرة",
                "أنظمة تركية مستقلة",
                "SBR حتى نهاية 2029 عند الأهلية"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "مثال ربح خاضع 500 ألف درهم",
          "body": "نفترض إيراد نشاط فردي فوق مليون درهم وربحاً خاضعاً 500 ألفاً دون SBR أو إعفاء آخر: 125 ألفاً × 9% = 11,250. عند اختيار SBR بصورة مؤهلة يعتبر الربح الخاضع صفراً. حد 375 ألفاً للربح لا الإيراد.",
          "table": {
            "headers": [
              "السيناريو",
              "ضريبة توضيحية بالدرهم"
            ],
            "rows": [
              [
                "ربح 500 ألف بالنظام العادي",
                "11,250"
              ],
              [
                "الحالة نفسها مع SBR مؤهل",
                "0"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "المقارنة بعد الضرائب والتكاليف",
          "body": "احسب الترخيص والمحاسبة والتأشيرة والصحة والسكن والمدرسة. قد تنشئ إدارة شركة دبي من تركيا إقامة للشركة أو منشأة دائمة. تحقق من اقتطاع المصدر والاتفاقيات لكل توزيع وإيجار. جهز إثبات الإقامة والشهادة 20/D أو TRC بحسب البلد."
        },
        {
          "id": "global-5",
          "title": "المادة التركية 20/D عملياً",
          "body": "للأفراد المستقرين منذ 1 يناير 2026: عدم وجود موطن وعدم الخضوع عادة في تركيا في السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. الشهادة قبل نهاية السنة أو نهاية فبراير التالي لنوفمبر وديسمبر. يعفى الدخل الأجنبي المؤهل عشرين عاماً دون حد استثمار أدنى. لا تعفى الدخول المحلية والشركات والاقتطاعات الأجنبية تلقائياً."
        }
      ],
      "faqs": [
        {
          "question": "هل تضمن المنطقة الحرة صفراً؟",
          "answer": "لا، هناك شروط للأشخاص والدخل المؤهل."
        },
        {
          "question": "هل ينتهي SBR في 2026؟",
          "answer": "لا، يمدده القرار 131 لسنة 2026 حتى الفترات المنتهية في 31 ديسمبر 2029."
        },
        {
          "question": "هل تثبت تأشيرة دبي الإقامة الضريبية؟",
          "answer": "لا، يجب إثبات شروط الإقامة والاتفاقية."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "UAE FTA — natural person",
          "href": "https://tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics/basis.of.taxation.natural.person.aspx"
        },
        {
          "label": "UAE FTA — TRC",
          "href": "https://www.tax.gov.ae/en/services/issuance.of.tax.certificates.aspx"
        },
        {
          "label": "UAE MOF — 2029 extension",
          "href": "https://mof.gov.ae/en/news/ministry-of-finance-announces-extension-of-small-business-relief-for-corporate-tax-purposes-until-31-december-2029/"
        },
        {
          "label": "UAE MOF — Decision 116",
          "href": "https://mof.gov.ae/wp-content/uploads/2023/04/Cabinet-Decision-No-116-of-2022-on-the-annual-Taxable-Income-subject-to-Corporate-Tax.pdf"
        }
      ]
    }
  },
  "residence-property-investors": {
    "fr": {
      "title": "Immobilier et résidence fiscale en Turquie 2026 : 200 000 $, citoyenneté et rendement",
      "metaDescription": "Investir en Turquie : ikamet propriétaire dès 200 000 USD, citoyenneté dès 400 000 USD, article 20/D et calcul de rendement locatif net.",
      "shortAnswer": "Acheter un logement turc, obtenir un titre de séjour et devenir résident fiscal sont trois démarches distinctes. Les loyers d'un immeuble turc ne deviennent pas des revenus étrangers.",
      "bosphorasHelp": "Bosphoras organise les rendez-vous avec des professionnels indépendants, la recherche d'un logement et les séjours de découverte. Demandez une étude de votre projet et de vos revenus avant de vous engager.",
      "sections": [
        {
          "id": "global-1",
          "title": "Seuils immobiliers et usage du bien",
          "body": "Le formulaire officiel e-ikamet exige pour le motif propriétaire un logement valant au moins 200 000 USD en équivalent TL à la date d'acquisition et utilisé personnellement comme habitation, non pour la location. Le programme de citoyenneté immobilière exige au moins 400 000 USD, attestation d'éligibilité et inscription d'une interdiction de revente pendant trois ans. Aucun ne garantit l'article 20/D. Avant achat, vérifiez nationalité admissible, tapu, sûretés, permis, conformité du bâtiment et possibilité d'enregistrer l'adresse."
        },
        {
          "id": "global-2",
          "title": "Distinguer les trois objectifs",
          "body": "L'administration fiscale examine les faits du domicile et de la présence. Certains loyers turcs perçus avant l'installation ne font pas automatiquement perdre l'éligibilité 20/D, mais ils restent un revenu turc. Les conditions migratoires, fiscales et de citoyenneté ne sont pas interchangeables.",
          "table": {
            "headers": [
              "Objectif",
              "Montant immobilier",
              "Autres conditions"
            ],
            "rows": [
              [
                "Résidence propriétaire",
                "200 000 USD",
                "Habitation personnelle, dossier accepté"
              ],
              [
                "Citoyenneté immobilière",
                "400 000 USD",
                "Attestation et blocage 3 ans"
              ],
              [
                "Exonération personnelle 20/D",
                "Aucun minimum",
                "Résidence réelle, historique et certificat"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Rendement locatif : exemple avant impôt",
          "body": "Investissement fictif destiné à la location, distinct du logement servant au titre propriétaire : prix 250 000 USD, coûts d'acquisition supposés 10 000, loyer annuel brut 18 000, vacance et charges 5 000. Capital total 260 000 ; net avant impôts et financement 13 000 USD, soit 5 %. Ce n'est ni une estimation du marché ni une promesse de rendement.",
          "table": {
            "headers": [
              "Poste",
              "Montant (USD)"
            ],
            "rows": [
              [
                "Prix et coûts d'acquisition",
                "260 000"
              ],
              [
                "Loyers bruts annuels",
                "18 000"
              ],
              [
                "Vacance et charges",
                "5 000"
              ],
              [
                "Net annuel avant impôts",
                "13 000"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Fiscalité et contrôle avant signature",
          "body": "Une location en Turquie est généralement imposable en Turquie même lorsque le propriétaire vit à l'étranger. Vérifiez les déclarations, charges déductibles, exonérations éventuelles et les autorisations de location touristique. Estimez frais de titre, évaluation, change, entretien, assurance et impôts avant signature ; demandez des justificatifs, pas une promesse commerciale. Le domicile inscrit n'est pas à lui seul une preuve fiscale définitive."
        },
        {
          "id": "global-5",
          "title": "Le régime turc 20/D en pratique",
          "body": "Applicable aux personnes physiques nouvellement établies depuis le 1er janvier 2026 : absence de domicile et, en principe, d'assujettissement fiscal en Turquie durant les trois années civiles précédentes, exceptions légales pour certains revenus du capital. Certificat avant fin d'année ou fin février suivante pour novembre/décembre. Les revenus étrangers admissibles sont exonérés pendant 20 ans, sans minimum d'investissement. Les revenus de source turque, les entreprises et les retenues étrangères ne sont pas automatiquement exonérés."
        }
      ],
      "faqs": [
        {
          "question": "Un achat à 200 000 USD donne-t-il vingt ans sans impôt ?",
          "answer": "Non, le permis et le régime 20/D sont indépendants."
        },
        {
          "question": "Puis-je louer le logement utilisé pour l'ikamet propriétaire ?",
          "answer": "Ce motif exige un usage résidentiel personnel ; louer le bien compromet son fondement."
        },
        {
          "question": "Le rendement affiché est-il garanti ?",
          "answer": "Non, le calcul est un scénario fictif avant impôts et financement."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Göç İdaresi — e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0"
        },
        {
          "label": "Invest in Türkiye — acquisition and citizenship",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx"
        },
        {
          "label": "GİB — 13.10.2026 ruling",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/ozelge/39058"
        }
      ]
    },
    "en": {
      "title": "Turkey property investment and tax residence 2026: $200k, citizenship and yield",
      "metaDescription": "Property investors: $200,000 owner residence, $400,000 citizenship, Article 20/D and net rental yield worked example.",
      "shortAnswer": "Buying Turkish property, obtaining immigration residence and establishing tax residence are separate. Rent from Turkish real estate remains domestic-source.",
      "bosphorasHelp": "Bosphoras coordinates independent specialist appointments, housing and exploratory stays. Request an assessment of your project and income before committing.",
      "sections": [
        {
          "id": "global-1",
          "title": "Property thresholds and use",
          "body": "The official e-ikamet owner checklist requires a home worth at least USD 200,000 in TRY equivalent at acquisition, used personally as a residence rather than rented. Property citizenship requires at least USD 400,000, eligibility verification and a three-year resale restriction. Neither guarantees Article 20/D. Before buying check nationality eligibility, title, encumbrances, permits, building compliance and address registration."
        },
        {
          "id": "global-2",
          "title": "Distinguish three goals",
          "body": "Tax authorities examine actual domicile and presence. Certain Turkish rental income before settlement does not automatically preclude 20/D, but remains Turkish-source. Immigration, personal tax and citizenship criteria are independent.",
          "table": {
            "headers": [
              "Goal",
              "Property value",
              "Other conditions"
            ],
            "rows": [
              [
                "Owner residence",
                "USD 200,000",
                "Personal residential use, approved file"
              ],
              [
                "Property citizenship",
                "USD 400,000",
                "Eligibility and three-year hold"
              ],
              [
                "Personal 20/D relief",
                "No minimum",
                "Actual residence, history and certificate"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Illustrative rental investment yield",
          "body": "Fictional rental investment, separate from the home supporting owner residence: USD 250,000 purchase, assumed 10,000 acquisition costs, annual gross rent 18,000, vacancy and expenses 5,000. Total capital 260,000; pre-tax and pre-financing net 13,000 or 5%. Not a market estimate or guaranteed return.",
          "table": {
            "headers": [
              "Item",
              "Amount (USD)"
            ],
            "rows": [
              [
                "Price and acquisition costs",
                "260,000"
              ],
              [
                "Annual gross rent",
                "18,000"
              ],
              [
                "Vacancy and expenses",
                "5,000"
              ],
              [
                "Annual pre-tax net",
                "13,000"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Tax and due diligence before signing",
          "body": "Turkish rental property usually remains taxable in Turkey even if the owner lives abroad. Check filing, deductible expenses, available exemptions and tourist letting permissions. Estimate title, valuation, FX, maintenance, insurance and taxes; request documentary evidence rather than promises. Registered address alone is not conclusive tax evidence."
        },
        {
          "id": "global-5",
          "title": "Turkey's Article 20/D in practice",
          "body": "For individuals newly settled from 1 January 2026: no Turkish domicile and generally no Turkish tax liability in the preceding three calendar years, with statutory exceptions for certain capital income. Certificate by settlement year-end or the following February for November/December. Eligible foreign income is exempt for 20 years, with no investment minimum. Domestic income, companies and foreign withholding are not automatically exempt."
        }
      ],
      "faqs": [
        {
          "question": "Does a $200,000 purchase grant twenty tax-free years?",
          "answer": "No, residence permission and 20/D are separate."
        },
        {
          "question": "Can I rent the owner-permit home?",
          "answer": "This ground requires personal residential use; renting undermines it."
        },
        {
          "question": "Is the rental yield guaranteed?",
          "answer": "No, it is fictional arithmetic before tax and financing."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Göç İdaresi — e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0"
        },
        {
          "label": "Invest in Türkiye — acquisition and citizenship",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx"
        },
        {
          "label": "GİB — 13.10.2026 ruling",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/ozelge/39058"
        }
      ]
    },
    "ru": {
      "title": "Недвижимость и налоговое резидентство Турции 2026: 200 тыс. $, гражданство и доходность",
      "metaDescription": "ВНЖ собственника от 200 000 USD, гражданство от 400 000 USD, статья 20/D и пример чистой арендной доходности.",
      "shortAnswer": "Покупка недвижимости, ВНЖ и налоговое резидентство — разные процедуры. Аренда турецкого объекта остаётся местным доходом.",
      "bosphorasHelp": "Bosphoras организует встречи с независимыми специалистами, подбор жилья и ознакомительные поездки. Запросите оценку проекта и доходов до принятия обязательств.",
      "sections": [
        {
          "id": "global-1",
          "title": "Пороги и использование жилья",
          "body": "Официальный список e-ikamet требует для ВНЖ собственника жильё стоимостью не менее 200 тыс. USD в эквиваленте лир на дату покупки, используемое лично для проживания, а не аренды. Для гражданства — минимум 400 тыс. USD, подтверждение права и запрет продажи на три года. Ни один путь не гарантирует 20/D. До покупки проверьте гражданство, тапу, обременения, разрешения, здание и регистрацию адреса."
        },
        {
          "id": "global-2",
          "title": "Три разных цели",
          "body": "Налоговая проверяет фактический дом и присутствие. Отдельные прежние турецкие арендные доходы не всегда исключают 20/D, но остаются местными. Миграция, налоги и гражданство имеют разные условия.",
          "table": {
            "headers": [
              "Цель",
              "Стоимость недвижимости",
              "Другие условия"
            ],
            "rows": [
              [
                "ВНЖ собственника",
                "200 000 USD",
                "Личное проживание, одобрение"
              ],
              [
                "Гражданство через недвижимость",
                "400 000 USD",
                "Подтверждение и владение 3 года"
              ],
              [
                "Личная льгота 20/D",
                "Нет минимума",
                "Реальное резидентство, история, сертификат"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "Условный пример доходности аренды",
          "body": "Вымышленный арендный объект отдельно от жилья для ВНЖ: цена 250 тыс. USD, условные расходы покупки 10 тыс., годовая валовая аренда 18 тыс., простой и расходы 5 тыс. Капитал 260 тыс.; доход до налога и финансирования 13 тыс., или 5%. Не рыночная оценка и не гарантия.",
          "table": {
            "headers": [
              "Статья",
              "Сумма (USD)"
            ],
            "rows": [
              [
                "Цена и расходы покупки",
                "260 000"
              ],
              [
                "Валовая аренда за год",
                "18 000"
              ],
              [
                "Простой и расходы",
                "5 000"
              ],
              [
                "Чистый доход до налога",
                "13 000"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "Налоги и проверка до сделки",
          "body": "Аренда турецкой недвижимости обычно облагается в Турции даже для владельца за границей. Проверьте декларацию, вычеты, льготы и разрешение туристической аренды. Оцените оформление, оценку, курсы, обслуживание, страховку и налоги. Запрашивайте документы, а не обещания. Зарегистрированный адрес не является окончательным доказательством резидентства."
        },
        {
          "id": "global-5",
          "title": "Турецкая статья 20/D на практике",
          "body": "Для физлиц, поселившихся с 1 января 2026: отсутствие места жительства и обычно налоговых обязательств в Турции в три предыдущих календарных года с исключениями для некоторых доходов капитала. Сертификат до конца года или конца следующего февраля для ноября/декабря. Подходящий зарубежный доход освобождён на 20 лет без минимума инвестиций. Местный доход, компании и иностранные удержания не освобождаются автоматически."
        }
      ],
      "faqs": [
        {
          "question": "Покупка за 200 тыс. даёт 20 лет без налога?",
          "answer": "Нет, ВНЖ и 20/D независимы."
        },
        {
          "question": "Можно ли сдавать жильё для ВНЖ собственника?",
          "answer": "Основание требует личного проживания; сдача ставит его под угрозу."
        },
        {
          "question": "Доходность гарантирована?",
          "answer": "Нет, это условный расчёт до налога и финансирования."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Göç İdaresi — e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0"
        },
        {
          "label": "Invest in Türkiye — acquisition and citizenship",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx"
        },
        {
          "label": "GİB — 13.10.2026 ruling",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/ozelge/39058"
        }
      ]
    },
    "ar": {
      "title": "العقار والإقامة الضريبية في تركيا 2026: 200 ألف دولار والجنسية والعائد",
      "metaDescription": "إقامة مالك العقار من 200 ألف دولار والجنسية من 400 ألف والمادة 20/D ومثال صافي العائد الإيجاري.",
      "shortAnswer": "شراء عقار تركي والحصول على الإقامة الإدارية والاستقرار الضريبي إجراءات مستقلة. يبقى إيجار العقار التركي محلي المصدر.",
      "bosphorasHelp": "تنسق Bosphoras المواعيد مع مختصين مستقلين والسكن والرحلات الاستكشافية. اطلب دراسة مشروعك ودخلك قبل الالتزام.",
      "sections": [
        {
          "id": "global-1",
          "title": "الحدود العقارية واستخدام المسكن",
          "body": "تطلب قائمة e-ikamet الرسمية للإقامة على أساس الملكية مسكناً بقيمة 200 ألف دولار على الأقل بمعادل الليرة عند الشراء ويستخدمه المالك شخصياً للسكن لا للتأجير. تتطلب الجنسية العقارية 400 ألف دولار على الأقل وإثبات الأهلية وقيد عدم البيع ثلاث سنوات. لا يضمن أي منهما المادة 20/D. افحص الجنسية المؤهلة والطابو والرهون والتراخيص والمبنى وتسجيل العنوان."
        },
        {
          "id": "global-2",
          "title": "تمييز الأهداف الثلاثة",
          "body": "تدرس الإدارة الموطن والوجود الفعلي. لا تمنع بعض الإيجارات التركية السابقة الاستفادة تلقائياً لكنها تبقى محلية المصدر. شروط الهجرة والضريبة والجنسية مستقلة.",
          "table": {
            "headers": [
              "الهدف",
              "قيمة العقار",
              "شروط أخرى"
            ],
            "rows": [
              [
                "إقامة المالك",
                "200,000 دولار",
                "سكن شخصي وقبول الملف"
              ],
              [
                "الجنسية العقارية",
                "400,000 دولار",
                "إثبات الأهلية وقيد ثلاث سنوات"
              ],
              [
                "الإعفاء الشخصي 20/D",
                "لا حد أدنى",
                "إقامة فعلية وتاريخ وشهادة"
              ]
            ]
          }
        },
        {
          "id": "global-3",
          "title": "مثال عائد إيجاري افتراضي",
          "body": "استثمار للتأجير منفصل عن مسكن الإقامة: سعر 250 ألف دولار وتكاليف شراء مفترضة 10 آلاف وإيجار سنوي إجمالي 18 ألفاً وشغور ومصاريف 5 آلاف. رأس المال 260 ألفاً والصافي قبل الضريبة والتمويل 13 ألفاً أي 5%. ليس سعراً سوقياً أو عائداً مضموناً.",
          "table": {
            "headers": [
              "البند",
              "المبلغ بالدولار"
            ],
            "rows": [
              [
                "السعر وتكاليف الشراء",
                "260,000"
              ],
              [
                "الإيجار السنوي الإجمالي",
                "18,000"
              ],
              [
                "الشغور والمصاريف",
                "5,000"
              ],
              [
                "الصافي السنوي قبل الضريبة",
                "13,000"
              ]
            ]
          }
        },
        {
          "id": "global-4",
          "title": "الضريبة والتحقق قبل التوقيع",
          "body": "يخضع إيجار العقار التركي عادة في تركيا ولو عاش المالك بالخارج. راجع الإقرار والمصاريف القابلة للخصم والإعفاءات وترخيص التأجير السياحي. احسب رسوم الملكية والتقييم والصرف والصيانة والتأمين والضرائب. اطلب الوثائق لا الوعود. لا يعد العنوان المسجل وحده دليلاً ضريبياً نهائياً."
        },
        {
          "id": "global-5",
          "title": "المادة التركية 20/D عملياً",
          "body": "للأفراد المستقرين منذ 1 يناير 2026: عدم وجود موطن وعدم الخضوع عادة في تركيا في السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. الشهادة قبل نهاية السنة أو نهاية فبراير التالي لنوفمبر وديسمبر. يعفى الدخل الأجنبي المؤهل عشرين عاماً دون حد استثمار أدنى. لا تعفى الدخول المحلية والشركات والاقتطاعات الأجنبية تلقائياً."
        }
      ],
      "faqs": [
        {
          "question": "هل شراء 200 ألف يمنح عشرين عاماً دون ضريبة؟",
          "answer": "لا، الإقامة و20/D مستقلان."
        },
        {
          "question": "هل أؤجر مسكن إقامة المالك؟",
          "answer": "يشترط هذا الأساس السكن الشخصي؛ التأجير يقوضه."
        },
        {
          "question": "هل العائد مضمون؟",
          "answer": "لا، حساب افتراضي قبل الضريبة والتمويل."
        }
      ],
      "sources": [
        {
          "label": "GİB — Article 20/D",
          "href": "https://gib.gov.tr/mevzuat/kanun/433/madde/13924"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Göç İdaresi — e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0"
        },
        {
          "label": "Invest in Türkiye — acquisition and citizenship",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx"
        },
        {
          "label": "GİB — 13.10.2026 ruling",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/ozelge/39058"
        }
      ]
    }
  }
};
