import type { Locale } from '@/lib/i18n';
import type { EditorialGuide } from './highPotentialEditorialGuides';
export const internationalComparisonGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "turkey-vs-italy-non-dom": {
    "fr": {
      "title": "Turquie ou Italie 2026 : exonération 20 ans ou flat tax de 300 000 € ?",
      "metaDescription": "Comparez le non-dom italien à 300 000 €/an et le régime turc de 20 ans : conditions, famille, revenus étrangers et simulations.",
      "shortAnswer": "Pour les nouveaux arrivants de 2026, l'Italie impose un forfait de 300 000 € par an sur les revenus étrangers couverts. La Turquie exonère les flux admissibles à 20/D sans forfait annuel.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, votre recherche de logement et des rendez-vous avec des fiscalistes indépendants. Demandez une étude de votre projet de transfert.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Le régime turc : article 20/D",
          "body": "La loi 7582, en vigueur depuis le 4 juin 2026, exonère pendant 20 ans les revenus étrangers admissibles des personnes physiques nouvellement résidentes. Les trois années civiles précédentes doivent être sans domicile ni, en principe, assujettissement fiscal turc, avec exceptions pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou fin février suivante pour novembre et décembre. Aucun investissement minimum n'est imposé par 20/D. Les revenus turcs, impôts étrangers et bénéfices de sociétés ne sont pas exonérés par cette mesure."
        },
        {
          "id": "compare-2",
          "title": "Italie : article 24-bis",
          "body": "Depuis le 1er janvier 2026, le forfait annuel est de 300 000 €, plus 50 000 € par proche admissible inclus. Il faut avoir été non-résident italien pendant au moins neuf des dix années précédentes. Le dispositif dure au maximum 15 ans. Les revenus italiens restent imposables normalement ; les plus-values sur participations qualifiées des cinq premières années sont exclues du forfait. Les anciens bénéficiaires peuvent conserver leur montant antérieur."
        },
        {
          "id": "compare-3",
          "title": "Comparer les régimes en 2026",
          "body": "Les avantages ne portent pas toujours sur les mêmes catégories de revenu. Le tableau suppose que les conditions de chaque régime sont remplies.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Italie"
            ],
            "rows": [
              [
                "Durée",
                "20 ans",
                "15 ans"
              ],
              [
                "Historique",
                "3 années civiles",
                "9 sur 10 ans"
              ],
              [
                "Revenus étrangers couverts",
                "Exonération",
                "300 000 €/an"
              ],
              [
                "Famille",
                "Éligibilité individuelle",
                "50 000 €/proche"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Forfait italien selon la composition familiale",
          "body": "Nouveaux arrivants en 2026, proches admissibles inclus. Hors impôts italiens ordinaires, impôts de source et autres charges.",
          "table": {
            "headers": [
              "Simulation",
              "Montant annuel"
            ],
            "rows": [
              [
                "Une personne",
                "300 000 €"
              ],
              [
                "Couple",
                "350 000 €"
              ],
              [
                "Titulaire + 3 proches",
                "450 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Vérifier avant de déménager",
          "body": "Conservez les preuves de résidence, les avis fiscaux, les relevés et contrats ventilés par nature et source. Comparez les conventions, retenues à la source, obligations de société et couverture sociale. Le titre de séjour ne détermine pas le domicile fiscal."
        }
      ],
      "faqs": [
        {
          "question": "Le forfait est-il encore de 200 000 € ?",
          "answer": "Non pour les transferts dès janvier 2026."
        },
        {
          "question": "La Turquie est-elle toujours préférable ?",
          "answer": "Non, les catégories de revenus, la résidence et les autres impôts peuvent changer le résultat."
        },
        {
          "question": "Le changement de visa suffit-il ?",
          "answer": "Non, il faut établir la résidence fiscale et satisfaire les conditions propres à chaque dispositif."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Camera dei deputati — IRPEF 2026",
          "href": "https://temi.camera.it/temi/19_tl18_irpef.html"
        },
        {
          "label": "PwC — Italy",
          "href": "https://taxsummaries.pwc.com/Italy/Individual/Taxes-on-personal-income"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Italy 2026: 20-year relief or €300,000 flat tax?",
      "metaDescription": "Compare Italy’s €300,000 new-resident flat tax with Turkey’s 20-year exemption, family fees, eligibility and worked scenarios.",
      "shortAnswer": "Italy's 2026 new-arrival charge is €300,000 annually on covered foreign income. Turkey exempts qualifying Article 20/D income without an annual flat charge.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent tax specialists. Request a relocation assessment.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Turkey: Article 20/D",
          "body": "Law 7582 has been in force since 4 June 2026. It exempts qualifying foreign income of eligible new individual residents for 20 years. The three preceding calendar years must have no Turkish domicile or generally Turkish tax liability, subject to exceptions for certain capital income. Apply for a certificate by settlement year-end, or the following February for November and December arrivals. Article 20/D imposes no minimum investment. Turkish income, foreign taxes and company profits are not exempted by this measure."
        },
        {
          "id": "compare-2",
          "title": "Italy: Article 24-bis",
          "body": "For residence transfers from 1 January 2026, the annual charge is €300,000 plus €50,000 per eligible relative opting in. Applicants must have been non-resident in Italy for at least nine of the preceding ten years. The maximum duration is 15 years. Italian-source income follows ordinary rules; gains on qualifying shareholdings in the first five years are excluded. Earlier entrants may retain their previous charge."
        },
        {
          "id": "compare-3",
          "title": "Compare regimes in 2026",
          "body": "Benefits do not necessarily cover the same income categories. The table assumes eligibility for each respective regime.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Italy"
            ],
            "rows": [
              [
                "Duration",
                "20 years",
                "15 years"
              ],
              [
                "History",
                "3 calendar years",
                "9 of 10 years"
              ],
              [
                "Covered foreign income",
                "Exemption",
                "€300,000/year"
              ],
              [
                "Family",
                "Individual eligibility",
                "€50,000/relative"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Italian family charge scenarios",
          "body": "2026 new arrivals with eligible relatives opting in. Excludes ordinary Italian tax, source tax and other charges.",
          "table": {
            "headers": [
              "Scenario",
              "Annual amount"
            ],
            "rows": [
              [
                "One person",
                "€300,000"
              ],
              [
                "Couple",
                "€350,000"
              ],
              [
                "Main taxpayer + 3 relatives",
                "€450,000"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Before relocating",
          "body": "Retain residence evidence, tax assessments, statements and contracts classified by income type and source. Review treaties, withholding, corporate obligations and social insurance. Immigration residence does not establish tax domicile."
        }
      ],
      "faqs": [
        {
          "question": "Is the flat tax still €200,000?",
          "answer": "Not for residence transfers from January 2026."
        },
        {
          "question": "Is Turkey always preferable?",
          "answer": "No; income categories, actual residence and other taxes affect the outcome."
        },
        {
          "question": "Is a new visa sufficient?",
          "answer": "No; establish tax residence and satisfy the regime-specific conditions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Camera dei deputati — IRPEF 2026",
          "href": "https://temi.camera.it/temi/19_tl18_irpef.html"
        },
        {
          "label": "PwC — Italy",
          "href": "https://taxsummaries.pwc.com/Italy/Individual/Taxes-on-personal-income"
        }
      ]
    },
    "ru": {
      "title": "Турция или Италия 2026: 20 лет льготы или налог 300 000 евро?",
      "metaDescription": "Сравните итальянский non-dom за 300 000 евро в год и турецкую льготу на 20 лет: семья, условия и расчёты.",
      "shortAnswer": "Для новых резидентов Италии 2026 года фиксированный налог на охватываемый зарубежный доход — 300 000 евро в год. Турция освобождает подходящие доходы по статье 20/D без ежегодного фиксированного налога.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми налоговыми специалистами. Запросите оценку переезда.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Турция: статья 20/D",
          "body": "Закон № 7582 действует с 4 июня 2026 года и освобождает подходящие иностранные доходы новых резидентов-физлиц на 20 лет. В три предыдущих календарных года не должно быть места жительства и, как правило, налоговых обязательств в Турции, кроме отдельных доходов капитала. Сертификат запрашивается до конца года поселения, а при поселении в ноябре или декабре — до конца следующего февраля. Минимальная инвестиция не требуется. Турецкие доходы, иностранные налоги и прибыль компаний не освобождаются этой нормой."
        },
        {
          "id": "compare-2",
          "title": "Италия: статья 24-bis",
          "body": "Для переездов с 1 января 2026 года налог составляет 300 000 евро и 50 000 за каждого подходящего родственника. Требуется отсутствие резидентства не менее девяти из предыдущих десяти лет. Максимальный срок — 15 лет. Итальянские доходы облагаются обычно; прирост по квалифицированным долям в первые пять лет исключён. Прежние участники могут сохранить старый размер налога."
        },
        {
          "id": "compare-3",
          "title": "Сравнение режимов в 2026 году",
          "body": "Льготы не всегда охватывают одинаковые виды дохода. Таблица предполагает выполнение условий каждого режима.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Италия"
            ],
            "rows": [
              [
                "Срок",
                "20 лет",
                "15 лет"
              ],
              [
                "История",
                "3 календарных года",
                "9 из 10 лет"
              ],
              [
                "Охваченные доходы",
                "Освобождение",
                "300 000 €/год"
              ],
              [
                "Семья",
                "Индивидуальные условия",
                "50 000 € за родственника"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Итальянский налог для семьи",
          "body": "Новые резиденты 2026 года, подходящие родственники включены. Без обычных налогов Италии, налогов источника и других расходов.",
          "table": {
            "headers": [
              "Сценарий",
              "Сумма в год"
            ],
            "rows": [
              [
                "Один человек",
                "300 000 €"
              ],
              [
                "Супруги",
                "350 000 €"
              ],
              [
                "Участник + 3 родственника",
                "450 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "До переезда",
          "body": "Соберите документы о проживании, налогах, доходах и договорах по видам и источникам. Проверьте соглашения, удержание, обязательства компаний и страхование. ВНЖ не определяет налоговый статус."
        }
      ],
      "faqs": [
        {
          "question": "Остался ли налог 200 000 евро?",
          "answer": "Нет для переезда с января 2026 года."
        },
        {
          "question": "Турция всегда выгоднее?",
          "answer": "Нет, результат зависит от доходов, резидентства и иных налогов."
        },
        {
          "question": "Достаточно ли сменить визу?",
          "answer": "Нет, необходимо установить налоговое резидентство и выполнить условия конкретного режима."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Camera dei deputati — IRPEF 2026",
          "href": "https://temi.camera.it/temi/19_tl18_irpef.html"
        },
        {
          "label": "PwC — Italy",
          "href": "https://taxsummaries.pwc.com/Italy/Individual/Taxes-on-personal-income"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم إيطاليا 2026: إعفاء 20 عاماً أم ضريبة 300 ألف يورو؟",
      "metaDescription": "قارن نظام إيطاليا بمبلغ 300 ألف يورو سنوياً والإعفاء التركي لعشرين عاماً وشروط الأسرة والدخل والحسابات.",
      "shortAnswer": "يدفع القادم الجديد إلى إيطاليا في 2026 مبلغ 300 ألف يورو سنوياً على الدخل الأجنبي المشمول. تعفي تركيا الدخل المؤهل للمادة 20/D دون ضريبة مقطوعة سنوية.",
      "bosphorasHelp": "تنسق Bosphoras الرحلة الاستكشافية والسكن والمواعيد مع مختصين ضريبيين مستقلين. اطلب دراسة مشروع الانتقال.",
      "sections": [
        {
          "id": "compare-1",
          "title": "تركيا: المادة 20/D",
          "body": "القانون 7582 نافذ منذ 4 يونيو 2026 ويعفي الدخل الأجنبي المؤهل للمقيمين الجدد من الأفراد لمدة 20 عاماً. يشترط عدم وجود موطن وعدم الخضوع الضريبي عادة في تركيا خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر وديسمبر. لا يوجد حد أدنى للاستثمار. لا تعفي المادة الدخل التركي أو الضرائب الأجنبية أو أرباح الشركات."
        },
        {
          "id": "compare-2",
          "title": "إيطاليا: المادة 24-bis",
          "body": "للانتقال اعتباراً من 1 يناير 2026 يبلغ المبلغ 300 ألف يورو و50 ألفاً لكل قريب مؤهل مشمول. يشترط عدم الإقامة الضريبية في تسع سنوات من العشر السابقة. المدة القصوى 15 عاماً. يخضع الدخل الإيطالي للقواعد العامة وتستثنى مكاسب حصص مؤهلة في السنوات الخمس الأولى. قد يحتفظ المستفيد السابق بالمبلغ القديم."
        },
        {
          "id": "compare-3",
          "title": "مقارنة النظامين في 2026",
          "body": "لا تشمل المزايا بالضرورة فئات الدخل نفسها. يفترض الجدول استيفاء شروط كل نظام.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "إيطاليا"
            ],
            "rows": [
              [
                "المدة",
                "20 عاماً",
                "15 عاماً"
              ],
              [
                "الفترة السابقة",
                "3 سنوات تقويمية",
                "9 من 10 سنوات"
              ],
              [
                "الدخل المشمول",
                "إعفاء",
                "300,000 يورو سنوياً"
              ],
              [
                "الأسرة",
                "أهلية فردية",
                "50,000 يورو لكل قريب"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "الضريبة الإيطالية للأسرة",
          "body": "القادمون في 2026 مع الأقارب المؤهلين، دون الضرائب الأخرى في إيطاليا ودولة المصدر.",
          "table": {
            "headers": [
              "السيناريو",
              "المبلغ السنوي"
            ],
            "rows": [
              [
                "فرد",
                "300,000 يورو"
              ],
              [
                "زوجان",
                "350,000 يورو"
              ],
              [
                "المستفيد + 3 أقارب",
                "450,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "قبل الانتقال",
          "body": "احتفظ بإثباتات الإقامة والضرائب والكشوف والعقود بحسب نوع الدخل ومصدره. ادرس الاتفاقيات والاقتطاعات والتزامات الشركات والتأمين الاجتماعي. لا تحدد الإقامة الإدارية الموطن الضريبي."
        }
      ],
      "faqs": [
        {
          "question": "هل ما زالت 200 ألف يورو؟",
          "answer": "لا للانتقال منذ يناير 2026."
        },
        {
          "question": "هل تركيا أفضل دائماً؟",
          "answer": "لا، يتوقف الأمر على الدخل والإقامة والضرائب الأخرى."
        },
        {
          "question": "هل يكفي تغيير التأشيرة؟",
          "answer": "لا، يجب إثبات الإقامة الضريبية واستيفاء شروط النظام."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Camera dei deputati — IRPEF 2026",
          "href": "https://temi.camera.it/temi/19_tl18_irpef.html"
        },
        {
          "label": "PwC — Italy",
          "href": "https://taxsummaries.pwc.com/Italy/Individual/Taxes-on-personal-income"
        }
      ]
    }
  },
  "turkey-vs-portugal-tax": {
    "fr": {
      "title": "Turquie ou Portugal 2026 : IFICI, fin du NHR et revenus étrangers",
      "metaDescription": "Comparez IFICI à 20 % pendant 10 ans, la fin du NHR et l’exonération turque de 20 ans : conditions et échéances.",
      "shortAnswer": "Le NHR portugais standard a été abrogé au 1er janvier 2024, sous réserve des droits acquis et transitions. IFICI exige une activité éligible contrairement à 20/D.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, votre recherche de logement et des rendez-vous avec des fiscalistes indépendants. Demandez une étude de votre projet de transfert.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Le régime turc : article 20/D",
          "body": "La loi 7582, en vigueur depuis le 4 juin 2026, exonère pendant 20 ans les revenus étrangers admissibles des personnes physiques nouvellement résidentes. Les trois années civiles précédentes doivent être sans domicile ni, en principe, assujettissement fiscal turc, avec exceptions pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou fin février suivante pour novembre et décembre. Aucun investissement minimum n'est imposé par 20/D. Les revenus turcs, impôts étrangers et bénéfices de sociétés ne sont pas exonérés par cette mesure."
        },
        {
          "id": "compare-2",
          "title": "Portugal : IFICI et conditions",
          "body": "L'article 58-A EBF exige cinq années antérieures sans résidence fiscale portugaise et une activité qualifiée, notamment recherche, innovation ou certains emplois dans des entités admissibles. Sur dix ans, le taux de 20 % vise les revenus portugais A/B admissibles. Les revenus étrangers sont généralement exonérés hors pensions de catégorie H ; certaines juridictions listées relèvent de règles à 35 %. La demande ordinaire est due le 15 janvier de l'année suivante, soit le 15 janvier 2027 pour une installation en 2026."
        },
        {
          "id": "compare-3",
          "title": "Comparer les régimes en 2026",
          "body": "Les avantages ne portent pas toujours sur les mêmes catégories de revenu. Le tableau suppose que les conditions de chaque régime sont remplies.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Portugal"
            ],
            "rows": [
              [
                "Durée",
                "20 ans",
                "10 ans"
              ],
              [
                "Historique",
                "3 années civiles",
                "5 ans"
              ],
              [
                "Activité éligible",
                "Non requise par 20/D",
                "Obligatoire"
              ],
              [
                "Revenus étrangers",
                "Éligibles exonérés",
                "Généralement exonérés hors pensions"
              ],
              [
                "Travail local",
                "Droit commun",
                "20 % si admissible"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Impôt IFICI sur le travail portugais",
          "body": "Base nette A/B admissible au taux de 20 %. Hors cotisations, autres revenus et déductions. Ne compare pas des salaires turcs et portugais.",
          "table": {
            "headers": [
              "Simulation",
              "Montant annuel"
            ],
            "rows": [
              [
                "Base 50 000 €",
                "10 000 €"
              ],
              [
                "Base 100 000 €",
                "20 000 €"
              ],
              [
                "Base 200 000 €",
                "40 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Vérifier avant de déménager",
          "body": "Conservez les preuves de résidence, les avis fiscaux, les relevés et contrats ventilés par nature et source. Comparez les conventions, retenues à la source, obligations de société et couverture sociale. Le titre de séjour ne détermine pas le domicile fiscal."
        }
      ],
      "faqs": [
        {
          "question": "Peut-on encore demander le NHR standard ?",
          "answer": "Non, sauf droits acquis et dispositions transitoires admissibles."
        },
        {
          "question": "Une pension étrangère est-elle exonérée par IFICI ?",
          "answer": "Non, la catégorie H est exclue."
        },
        {
          "question": "Le changement de visa suffit-il ?",
          "answer": "Non, il faut établir la résidence fiscale et satisfaire les conditions propres à chaque dispositif."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Autoridade Tributária — IFICI",
          "href": "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00643.aspx"
        },
        {
          "label": "Autoridade Tributária — NHR",
          "href": "https://info.portaldasfinancas.gov.pt/en/tax-information/getting-started-in-portugal/non-habitual-resident/register-as-a-non-habitual-resident/Pages/default.aspx"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Portugal 2026: IFICI, NHR repeal and foreign income",
      "metaDescription": "Compare Portugal’s 20% IFICI over 10 years with Turkey’s 20-year relief: eligibility, foreign income and deadlines.",
      "shortAnswer": "Standard Portuguese NHR was repealed on 1 January 2024, subject to acquired and transitional rights. IFICI requires eligible activity unlike Article 20/D.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent tax specialists. Request a relocation assessment.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Turkey: Article 20/D",
          "body": "Law 7582 has been in force since 4 June 2026. It exempts qualifying foreign income of eligible new individual residents for 20 years. The three preceding calendar years must have no Turkish domicile or generally Turkish tax liability, subject to exceptions for certain capital income. Apply for a certificate by settlement year-end, or the following February for November and December arrivals. Article 20/D imposes no minimum investment. Turkish income, foreign taxes and company profits are not exempted by this measure."
        },
        {
          "id": "compare-2",
          "title": "Portugal: IFICI eligibility",
          "body": "Article 58-A EBF requires five preceding years without Portuguese tax residence and eligible activity such as research, innovation or skilled employment at qualifying entities. The 20% rate applies to qualifying Portuguese A/B income for ten years. Foreign income is generally exempt except category H pensions; certain listed jurisdictions trigger special 35% rules. The ordinary deadline is 15 January of the following year, 15 January 2027 for 2026 arrivals."
        },
        {
          "id": "compare-3",
          "title": "Compare regimes in 2026",
          "body": "Benefits do not necessarily cover the same income categories. The table assumes eligibility for each respective regime.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Portugal"
            ],
            "rows": [
              [
                "Duration",
                "20 years",
                "10 years"
              ],
              [
                "History",
                "3 calendar years",
                "5 years"
              ],
              [
                "Qualifying work",
                "Not required by 20/D",
                "Required"
              ],
              [
                "Foreign income",
                "Eligible income exempt",
                "Generally exempt excluding pensions"
              ],
              [
                "Local work",
                "Ordinary law",
                "20% if eligible"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "IFICI tax on Portuguese work",
          "body": "Eligible net A/B taxable base at 20%, excluding contributions, other income and deductions. Not a Turkey–Portugal salary comparison.",
          "table": {
            "headers": [
              "Scenario",
              "Annual amount"
            ],
            "rows": [
              [
                "€50,000 base",
                "€10,000"
              ],
              [
                "€100,000 base",
                "€20,000"
              ],
              [
                "€200,000 base",
                "€40,000"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Before relocating",
          "body": "Retain residence evidence, tax assessments, statements and contracts classified by income type and source. Review treaties, withholding, corporate obligations and social insurance. Immigration residence does not establish tax domicile."
        }
      ],
      "faqs": [
        {
          "question": "Can I still enter ordinary NHR?",
          "answer": "No, except acquired and qualifying transitional rights."
        },
        {
          "question": "Are foreign pensions exempt under IFICI?",
          "answer": "No, category H is excluded."
        },
        {
          "question": "Is a new visa sufficient?",
          "answer": "No; establish tax residence and satisfy the regime-specific conditions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Autoridade Tributária — IFICI",
          "href": "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00643.aspx"
        },
        {
          "label": "Autoridade Tributária — NHR",
          "href": "https://info.portaldasfinancas.gov.pt/en/tax-information/getting-started-in-portugal/non-habitual-resident/register-as-a-non-habitual-resident/Pages/default.aspx"
        }
      ]
    },
    "ru": {
      "title": "Турция или Португалия 2026: IFICI вместо NHR и зарубежные доходы",
      "metaDescription": "Сравните IFICI 20% на 10 лет и турецкую льготу на 20 лет: условия, доходы и сроки.",
      "shortAnswer": "Обычный NHR отменён с 1 января 2024 года с сохранением приобретённых и переходных прав. IFICI требует подходящей деятельности, в отличие от 20/D.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми налоговыми специалистами. Запросите оценку переезда.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Турция: статья 20/D",
          "body": "Закон № 7582 действует с 4 июня 2026 года и освобождает подходящие иностранные доходы новых резидентов-физлиц на 20 лет. В три предыдущих календарных года не должно быть места жительства и, как правило, налоговых обязательств в Турции, кроме отдельных доходов капитала. Сертификат запрашивается до конца года поселения, а при поселении в ноябре или декабре — до конца следующего февраля. Минимальная инвестиция не требуется. Турецкие доходы, иностранные налоги и прибыль компаний не освобождаются этой нормой."
        },
        {
          "id": "compare-2",
          "title": "Португалия: условия IFICI",
          "body": "Статья 58-A EBF требует отсутствия португальского резидентства пять предыдущих лет и подходящей деятельности, например исследований, инноваций или квалифицированной работы в соответствующей организации. Ставка 20% действует на подходящие португальские доходы A/B десять лет. Зарубежные доходы обычно освобождены, кроме пенсий H; для некоторых юрисдикций действуют правила 35%. Срок обычно 15 января следующего года, для 2026 года — 15 января 2027."
        },
        {
          "id": "compare-3",
          "title": "Сравнение режимов в 2026 году",
          "body": "Льготы не всегда охватывают одинаковые виды дохода. Таблица предполагает выполнение условий каждого режима.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Португалия"
            ],
            "rows": [
              [
                "Срок",
                "20 лет",
                "10 лет"
              ],
              [
                "История",
                "3 календарных года",
                "5 лет"
              ],
              [
                "Работа",
                "Не требуется 20/D",
                "Обязательна"
              ],
              [
                "Иностранные доходы",
                "Подходящие освобождены",
                "Обычно освобождены, кроме пенсий"
              ],
              [
                "Местная работа",
                "Общие правила",
                "20% при соответствии"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Пример налога IFICI",
          "body": "Подходящая чистая база A/B по ставке 20% без взносов, иных доходов и вычетов. Это не сравнение зарплат в двух странах.",
          "table": {
            "headers": [
              "Сценарий",
              "Сумма в год"
            ],
            "rows": [
              [
                "База 50 000 €",
                "10 000 €"
              ],
              [
                "База 100 000 €",
                "20 000 €"
              ],
              [
                "База 200 000 €",
                "40 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "До переезда",
          "body": "Соберите документы о проживании, налогах, доходах и договорах по видам и источникам. Проверьте соглашения, удержание, обязательства компаний и страхование. ВНЖ не определяет налоговый статус."
        }
      ],
      "faqs": [
        {
          "question": "Доступен ли обычный NHR?",
          "answer": "Нет, кроме приобретённых и переходных прав."
        },
        {
          "question": "Освобождены ли иностранные пенсии?",
          "answer": "Нет, категория H исключена."
        },
        {
          "question": "Достаточно ли сменить визу?",
          "answer": "Нет, необходимо установить налоговое резидентство и выполнить условия конкретного режима."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Autoridade Tributária — IFICI",
          "href": "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00643.aspx"
        },
        {
          "label": "Autoridade Tributária — NHR",
          "href": "https://info.portaldasfinancas.gov.pt/en/tax-information/getting-started-in-portugal/non-habitual-resident/register-as-a-non-habitual-resident/Pages/default.aspx"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم البرتغال 2026: IFICI ونهاية NHR والدخل الأجنبي",
      "metaDescription": "قارن IFICI بنسبة 20% لعشر سنوات وإعفاء تركيا لعشرين عاماً وشروط الدخل والمواعيد.",
      "shortAnswer": "ألغي NHR العادي منذ 1 يناير 2024 مع الحقوق المكتسبة والانتقالية. يتطلب IFICI نشاطاً مؤهلاً بخلاف المادة 20/D.",
      "bosphorasHelp": "تنسق Bosphoras الرحلة الاستكشافية والسكن والمواعيد مع مختصين ضريبيين مستقلين. اطلب دراسة مشروع الانتقال.",
      "sections": [
        {
          "id": "compare-1",
          "title": "تركيا: المادة 20/D",
          "body": "القانون 7582 نافذ منذ 4 يونيو 2026 ويعفي الدخل الأجنبي المؤهل للمقيمين الجدد من الأفراد لمدة 20 عاماً. يشترط عدم وجود موطن وعدم الخضوع الضريبي عادة في تركيا خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر وديسمبر. لا يوجد حد أدنى للاستثمار. لا تعفي المادة الدخل التركي أو الضرائب الأجنبية أو أرباح الشركات."
        },
        {
          "id": "compare-2",
          "title": "البرتغال: شروط IFICI",
          "body": "تتطلب المادة 58-A عدم الإقامة الضريبية خمس سنوات سابقة ونشاطاً مؤهلاً مثل البحث والابتكار أو عمل متخصص لدى جهة مستوفية للشروط. يطبق 20% على الدخل البرتغالي المؤهل A/B لعشر سنوات. يعفى الدخل الأجنبي عادة باستثناء المعاشات H، وتطبق قواعد 35% لبعض الدول المدرجة. الموعد العادي 15 يناير من السنة التالية، أي 15 يناير 2027 للقادمين في 2026."
        },
        {
          "id": "compare-3",
          "title": "مقارنة النظامين في 2026",
          "body": "لا تشمل المزايا بالضرورة فئات الدخل نفسها. يفترض الجدول استيفاء شروط كل نظام.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "البرتغال"
            ],
            "rows": [
              [
                "المدة",
                "20 عاماً",
                "10 أعوام"
              ],
              [
                "الفترة السابقة",
                "3 سنوات تقويمية",
                "5 سنوات"
              ],
              [
                "النشاط",
                "غير مطلوب في 20/D",
                "مطلوب"
              ],
              [
                "الدخل الأجنبي",
                "المؤهل معفى",
                "معفى عادة عدا المعاشات"
              ],
              [
                "العمل المحلي",
                "القواعد العامة",
                "20% عند الأهلية"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "مثال ضريبة IFICI على العمل",
          "body": "وعاء صاف مؤهل A/B بنسبة 20% دون اشتراكات أو دخل آخر أو خصومات. ليس مقارنة رواتب البلدين.",
          "table": {
            "headers": [
              "السيناريو",
              "المبلغ السنوي"
            ],
            "rows": [
              [
                "وعاء 50,000 يورو",
                "10,000 يورو"
              ],
              [
                "وعاء 100,000 يورو",
                "20,000 يورو"
              ],
              [
                "وعاء 200,000 يورو",
                "40,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "قبل الانتقال",
          "body": "احتفظ بإثباتات الإقامة والضرائب والكشوف والعقود بحسب نوع الدخل ومصدره. ادرس الاتفاقيات والاقتطاعات والتزامات الشركات والتأمين الاجتماعي. لا تحدد الإقامة الإدارية الموطن الضريبي."
        }
      ],
      "faqs": [
        {
          "question": "هل NHR العادي متاح؟",
          "answer": "لا، باستثناء الحقوق المكتسبة والانتقالية المؤهلة."
        },
        {
          "question": "هل المعاش الأجنبي معفى؟",
          "answer": "لا، فئة H مستثناة."
        },
        {
          "question": "هل يكفي تغيير التأشيرة؟",
          "answer": "لا، يجب إثبات الإقامة الضريبية واستيفاء شروط النظام."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Autoridade Tributária — IFICI",
          "href": "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/Pages/faqs-00643.aspx"
        },
        {
          "label": "Autoridade Tributária — NHR",
          "href": "https://info.portaldasfinancas.gov.pt/en/tax-information/getting-started-in-portugal/non-habitual-resident/register-as-a-non-habitual-resident/Pages/default.aspx"
        }
      ]
    }
  },
  "turkey-vs-spain-beckham-law": {
    "fr": {
      "title": "Turquie ou Espagne 2026 : loi Beckham et exonération des revenus étrangers",
      "metaDescription": "Loi Beckham 24 % jusqu’à 600 000 €, 47 % au-delà : comparez six ans en Espagne et vingt ans en Turquie.",
      "shortAnswer": "Le régime espagnol vise les travailleurs déplacés et d'autres activités admissibles. Le régime turc concerne les revenus étrangers qualifiés : les deux bases fiscales diffèrent.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, votre recherche de logement et des rendez-vous avec des fiscalistes indépendants. Demandez une étude de votre projet de transfert.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Le régime turc : article 20/D",
          "body": "La loi 7582, en vigueur depuis le 4 juin 2026, exonère pendant 20 ans les revenus étrangers admissibles des personnes physiques nouvellement résidentes. Les trois années civiles précédentes doivent être sans domicile ni, en principe, assujettissement fiscal turc, avec exceptions pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou fin février suivante pour novembre et décembre. Aucun investissement minimum n'est imposé par 20/D. Les revenus turcs, impôts étrangers et bénéfices de sociétés ne sont pas exonérés par cette mesure."
        },
        {
          "id": "compare-2",
          "title": "Espagne : article 93",
          "body": "Il faut notamment ne pas avoir été résident pendant les cinq périodes précédentes et remplir un motif de déplacement admissible : emploi, télétravail salarié, certaines fonctions de direction, entrepreneuriat ou activité qualifiée. Le régime couvre l'année d'acquisition et les cinq suivantes. Le modèle 149 est généralement dû dans les six mois du début d'activité documenté, puis le modèle 151 pour la déclaration. Les revenus salariaux suivent les règles spéciales même si versés de l'étranger ; les revenus d'épargne imposables suivent un barème distinct de 19 à 30 %."
        },
        {
          "id": "compare-3",
          "title": "Comparer les régimes en 2026",
          "body": "Les avantages ne portent pas toujours sur les mêmes catégories de revenu. Le tableau suppose que les conditions de chaque régime sont remplies.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Espagne"
            ],
            "rows": [
              [
                "Durée",
                "20 ans",
                "6 périodes"
              ],
              [
                "Historique",
                "3 années civiles",
                "5 périodes"
              ],
              [
                "Motif professionnel",
                "Non exigé par 20/D",
                "Motif admissible"
              ],
              [
                "Travail local",
                "Barème ordinaire",
                "24 % à 600 000 € ; 47 % au-delà"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Simulation du barème Beckham",
          "body": "Base imposable hors épargne soumise au régime spécial, sans cotisations ni autres revenus. À 800 000 €, 144 000 + 94 000 = 238 000 €.",
          "table": {
            "headers": [
              "Simulation",
              "Montant annuel"
            ],
            "rows": [
              [
                "Base 100 000 €",
                "24 000 €"
              ],
              [
                "Base 600 000 €",
                "144 000 €"
              ],
              [
                "Base 800 000 €",
                "238 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Vérifier avant de déménager",
          "body": "Conservez les preuves de résidence, les avis fiscaux, les relevés et contrats ventilés par nature et source. Comparez les conventions, retenues à la source, obligations de société et couverture sociale. Le titre de séjour ne détermine pas le domicile fiscal."
        }
      ],
      "faqs": [
        {
          "question": "Un rentier est-il automatiquement admis ?",
          "answer": "Non, un motif légal est nécessaire."
        },
        {
          "question": "24 % s'applique-t-il à tout le revenu ?",
          "answer": "Non, le surplus de base au-delà de 600 000 € est à 47 %."
        },
        {
          "question": "Le changement de visa suffit-il ?",
          "answer": "Non, il faut établir la résidence fiscale et satisfaire les conditions propres à chaque dispositif."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Agencia Tributaria — Modelo 149",
          "href": "https://sede.agenciatributaria.gob.es/Sede/procedimientos/G606.shtml"
        },
        {
          "label": "Agencia Tributaria — Art. 93",
          "href": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/regimenes-opcionales/regimen-especial-impatriados.html"
        },
        {
          "label": "Agencia Tributaria — rates",
          "href": "https://www3.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/regimen-fiscal-especial-aplicable-trabajadores.html"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Spain 2026: Beckham Law and foreign-income relief",
      "metaDescription": "Compare Beckham Law’s 24% to €600,000 and 47% excess, six tax years and Turkey’s 20-year relief.",
      "shortAnswer": "Spain's regime targets relocated employees and other qualifying activities; Turkey's targets qualifying foreign income. The taxable bases differ.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent tax specialists. Request a relocation assessment.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Turkey: Article 20/D",
          "body": "Law 7582 has been in force since 4 June 2026. It exempts qualifying foreign income of eligible new individual residents for 20 years. The three preceding calendar years must have no Turkish domicile or generally Turkish tax liability, subject to exceptions for certain capital income. Apply for a certificate by settlement year-end, or the following February for November and December arrivals. Article 20/D imposes no minimum investment. Turkish income, foreign taxes and company profits are not exempted by this measure."
        },
        {
          "id": "compare-2",
          "title": "Spain: Article 93",
          "body": "Applicants must generally have been non-resident for five preceding tax periods and satisfy a relocation ground: employment, qualifying remote employment, certain directorships, entrepreneurship or skilled activity. The scheme covers the acquisition year plus five. Form 149 is generally due within six months of documented activity commencement, with Form 151 for reporting. Employment income follows special rules even if paid abroad; taxable savings use a separate 19–30% tariff."
        },
        {
          "id": "compare-3",
          "title": "Compare regimes in 2026",
          "body": "Benefits do not necessarily cover the same income categories. The table assumes eligibility for each respective regime.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Spain"
            ],
            "rows": [
              [
                "Duration",
                "20 years",
                "6 tax periods"
              ],
              [
                "History",
                "3 calendar years",
                "5 periods"
              ],
              [
                "Work ground",
                "Not required by 20/D",
                "Qualifying ground"
              ],
              [
                "Local employment",
                "Ordinary tariff",
                "24% to €600,000; 47% excess"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Beckham tariff illustration",
          "body": "Non-savings base under the special regime, excluding contributions and other income. At €800,000: €144,000 + €94,000 = €238,000.",
          "table": {
            "headers": [
              "Scenario",
              "Annual amount"
            ],
            "rows": [
              [
                "€100,000 base",
                "€24,000"
              ],
              [
                "€600,000 base",
                "€144,000"
              ],
              [
                "€800,000 base",
                "€238,000"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Before relocating",
          "body": "Retain residence evidence, tax assessments, statements and contracts classified by income type and source. Review treaties, withholding, corporate obligations and social insurance. Immigration residence does not establish tax domicile."
        }
      ],
      "faqs": [
        {
          "question": "Does passive investment automatically qualify?",
          "answer": "No, a statutory relocation ground is needed."
        },
        {
          "question": "Does 24% apply to all income?",
          "answer": "No, the excess above €600,000 is taxed at 47%."
        },
        {
          "question": "Is a new visa sufficient?",
          "answer": "No; establish tax residence and satisfy the regime-specific conditions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Agencia Tributaria — Modelo 149",
          "href": "https://sede.agenciatributaria.gob.es/Sede/procedimientos/G606.shtml"
        },
        {
          "label": "Agencia Tributaria — Art. 93",
          "href": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/regimenes-opcionales/regimen-especial-impatriados.html"
        },
        {
          "label": "Agencia Tributaria — rates",
          "href": "https://www3.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/regimen-fiscal-especial-aplicable-trabajadores.html"
        }
      ]
    },
    "ru": {
      "title": "Турция или Испания 2026: закон Бекхэма и иностранные доходы",
      "metaDescription": "Сравните 24% до 600 000 евро и 47% сверх порога, шесть лет в Испании и двадцать лет льготы в Турции.",
      "shortAnswer": "Испанский режим предназначен для переехавших работников и других подходящих видов деятельности. Турецкий — для подходящих иностранных доходов. Базы различны.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми налоговыми специалистами. Запросите оценку переезда.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Турция: статья 20/D",
          "body": "Закон № 7582 действует с 4 июня 2026 года и освобождает подходящие иностранные доходы новых резидентов-физлиц на 20 лет. В три предыдущих календарных года не должно быть места жительства и, как правило, налоговых обязательств в Турции, кроме отдельных доходов капитала. Сертификат запрашивается до конца года поселения, а при поселении в ноябре или декабре — до конца следующего февраля. Минимальная инвестиция не требуется. Турецкие доходы, иностранные налоги и прибыль компаний не освобождаются этой нормой."
        },
        {
          "id": "compare-2",
          "title": "Испания: статья 93",
          "body": "Требуются отсутствие резидентства в пять предыдущих налоговых периодов и допустимая причина переезда: работа по найму, подходящая удалённая работа, отдельные руководящие функции, предпринимательство или квалифицированная деятельность. Режим действует год приобретения резидентства и пять следующих. Форма 149 обычно подаётся в течение шести месяцев с подтверждённого начала работы, форма 151 — декларация. Зарплата облагается по специальным правилам даже при выплате из-за рубежа; облагаемые сберегательные доходы имеют шкалу 19–30%."
        },
        {
          "id": "compare-3",
          "title": "Сравнение режимов в 2026 году",
          "body": "Льготы не всегда охватывают одинаковые виды дохода. Таблица предполагает выполнение условий каждого режима.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Испания"
            ],
            "rows": [
              [
                "Срок",
                "20 лет",
                "6 периодов"
              ],
              [
                "История",
                "3 календарных года",
                "5 периодов"
              ],
              [
                "Основание работы",
                "Не требуется 20/D",
                "Допустимое основание"
              ],
              [
                "Местная работа",
                "Общая шкала",
                "24% до 600 000 €, 47% сверх"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Пример шкалы Бекхэма",
          "body": "База вне сберегательных доходов, без взносов и других доходов. При 800 000 евро: 144 000 + 94 000 = 238 000 евро.",
          "table": {
            "headers": [
              "Сценарий",
              "Сумма в год"
            ],
            "rows": [
              [
                "База 100 000 €",
                "24 000 €"
              ],
              [
                "База 600 000 €",
                "144 000 €"
              ],
              [
                "База 800 000 €",
                "238 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "До переезда",
          "body": "Соберите документы о проживании, налогах, доходах и договорах по видам и источникам. Проверьте соглашения, удержание, обязательства компаний и страхование. ВНЖ не определяет налоговый статус."
        }
      ],
      "faqs": [
        {
          "question": "Пассивный инвестор автоматически подходит?",
          "answer": "Нет, нужно законное основание."
        },
        {
          "question": "24% применяется ко всему доходу?",
          "answer": "Нет, превышение 600 000 облагается по 47%."
        },
        {
          "question": "Достаточно ли сменить визу?",
          "answer": "Нет, необходимо установить налоговое резидентство и выполнить условия конкретного режима."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Agencia Tributaria — Modelo 149",
          "href": "https://sede.agenciatributaria.gob.es/Sede/procedimientos/G606.shtml"
        },
        {
          "label": "Agencia Tributaria — Art. 93",
          "href": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/regimenes-opcionales/regimen-especial-impatriados.html"
        },
        {
          "label": "Agencia Tributaria — rates",
          "href": "https://www3.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/regimen-fiscal-especial-aplicable-trabajadores.html"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم إسبانيا 2026: قانون بيكهام وإعفاء الدخل الأجنبي",
      "metaDescription": "قارن 24% حتى 600 ألف يورو و47% للزائد وست سنوات ضريبية في إسبانيا مع إعفاء تركيا لعشرين عاماً.",
      "shortAnswer": "يستهدف النظام الإسباني الموظفين المنتقلين وغيرهم من أصحاب الأنشطة المؤهلة. يعفي النظام التركي الدخل الأجنبي المؤهل، وتختلف الأوعية.",
      "bosphorasHelp": "تنسق Bosphoras الرحلة الاستكشافية والسكن والمواعيد مع مختصين ضريبيين مستقلين. اطلب دراسة مشروع الانتقال.",
      "sections": [
        {
          "id": "compare-1",
          "title": "تركيا: المادة 20/D",
          "body": "القانون 7582 نافذ منذ 4 يونيو 2026 ويعفي الدخل الأجنبي المؤهل للمقيمين الجدد من الأفراد لمدة 20 عاماً. يشترط عدم وجود موطن وعدم الخضوع الضريبي عادة في تركيا خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر وديسمبر. لا يوجد حد أدنى للاستثمار. لا تعفي المادة الدخل التركي أو الضرائب الأجنبية أو أرباح الشركات."
        },
        {
          "id": "compare-2",
          "title": "إسبانيا: المادة 93",
          "body": "يشترط عادة عدم الإقامة خلال الفترات الضريبية الخمس السابقة وسبب انتقال مؤهل مثل العمل أو العمل عن بعد للموظف أو بعض مهام الإدارة أو النشاط الريادي أو المتخصص. يشمل سنة اكتساب الإقامة وخمس سنوات تالية. يقدم النموذج 149 عادة خلال ستة أشهر من بدء النشاط الموثق و151 للإقرار. يخضع الراتب للقواعد الخاصة ولو دفع من الخارج، ولدخل الادخار الخاضع شرائح مستقلة 19–30%."
        },
        {
          "id": "compare-3",
          "title": "مقارنة النظامين في 2026",
          "body": "لا تشمل المزايا بالضرورة فئات الدخل نفسها. يفترض الجدول استيفاء شروط كل نظام.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "إسبانيا"
            ],
            "rows": [
              [
                "المدة",
                "20 عاماً",
                "6 فترات"
              ],
              [
                "الفترة السابقة",
                "3 سنوات تقويمية",
                "5 فترات"
              ],
              [
                "سبب العمل",
                "غير مطلوب في 20/D",
                "سبب مؤهل"
              ],
              [
                "العمل المحلي",
                "الشرائح العادية",
                "24% حتى 600 ألف و47% للزائد"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "مثال حساب بيكهام",
          "body": "وعاء غير ادخاري خاضع للنظام دون اشتراكات أو دخل آخر. عند 800 ألف يورو: 144 ألفاً + 94 ألفاً = 238 ألفاً.",
          "table": {
            "headers": [
              "السيناريو",
              "المبلغ السنوي"
            ],
            "rows": [
              [
                "وعاء 100,000 يورو",
                "24,000 يورو"
              ],
              [
                "وعاء 600,000 يورو",
                "144,000 يورو"
              ],
              [
                "وعاء 800,000 يورو",
                "238,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "قبل الانتقال",
          "body": "احتفظ بإثباتات الإقامة والضرائب والكشوف والعقود بحسب نوع الدخل ومصدره. ادرس الاتفاقيات والاقتطاعات والتزامات الشركات والتأمين الاجتماعي. لا تحدد الإقامة الإدارية الموطن الضريبي."
        }
      ],
      "faqs": [
        {
          "question": "هل يتأهل المستثمر السلبي تلقائياً؟",
          "answer": "لا، يلزم سبب قانوني للانتقال."
        },
        {
          "question": "هل 24% لكل الدخل؟",
          "answer": "لا، الزائد عن 600 ألف يخضع لـ47%."
        },
        {
          "question": "هل يكفي تغيير التأشيرة؟",
          "answer": "لا، يجب إثبات الإقامة الضريبية واستيفاء شروط النظام."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Agencia Tributaria — Modelo 149",
          "href": "https://sede.agenciatributaria.gob.es/Sede/procedimientos/G606.shtml"
        },
        {
          "label": "Agencia Tributaria — Art. 93",
          "href": "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/regimenes-opcionales/regimen-especial-impatriados.html"
        },
        {
          "label": "Agencia Tributaria — rates",
          "href": "https://www3.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c15-calculo-impuesto-determinacion-cuotas-integras/regimen-fiscal-especial-aplicable-trabajadores.html"
        }
      ]
    }
  },
  "turkey-vs-greece-non-dom": {
    "fr": {
      "title": "Turquie ou Grèce 2026 : non-dom, forfait 100 000 € et retraite",
      "metaDescription": "Comparez l’article grec 5A à 100 000 €/an, l’investissement de 500 000 €, le régime retraite à 7 % et l’exonération turque.",
      "shortAnswer": "La Grèce propose un forfait de 100 000 € sur les revenus étrangers via l'article 5A et un régime distinct à 7 % pour certains retraités. La Turquie prévoit 20 ans d'exonération conditionnelle.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, votre recherche de logement et des rendez-vous avec des fiscalistes indépendants. Demandez une étude de votre projet de transfert.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Le régime turc : article 20/D",
          "body": "La loi 7582, en vigueur depuis le 4 juin 2026, exonère pendant 20 ans les revenus étrangers admissibles des personnes physiques nouvellement résidentes. Les trois années civiles précédentes doivent être sans domicile ni, en principe, assujettissement fiscal turc, avec exceptions pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou fin février suivante pour novembre et décembre. Aucun investissement minimum n'est imposé par 20/D. Les revenus turcs, impôts étrangers et bénéfices de sociétés ne sont pas exonérés par cette mesure."
        },
        {
          "id": "compare-2",
          "title": "Grèce : trois dispositifs différents",
          "body": "Le 5A requiert la non-résidence pendant sept des huit années précédentes et normalement 500 000 € d'investissement admissible sous trois ans, avec exception pour certains permis d'investissement. Le forfait de 100 000 € par an dure 15 ans ; 20 000 € par proche inclus. Demande avant le 31 mars selon les règles d'entrée. Le 5B vise des bénéficiaires de pensions étrangères : 7 % des revenus étrangers pendant 15 ans, conditions distinctes. Le 5C exonère 50 % de certains revenus professionnels grecs pendant sept ans. Les revenus locaux ne sont pas couverts par 5A."
        },
        {
          "id": "compare-3",
          "title": "Comparer les régimes en 2026",
          "body": "Les avantages ne portent pas toujours sur les mêmes catégories de revenu. Le tableau suppose que les conditions de chaque régime sont remplies.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Grèce"
            ],
            "rows": [
              [
                "Durée",
                "20 ans",
                "15 ans (5A)"
              ],
              [
                "Historique",
                "3 années civiles",
                "7 sur 8 ans"
              ],
              [
                "Investissement",
                "Aucun minimum 20/D",
                "500 000 € en principe"
              ],
              [
                "Forfait annuel",
                "Aucun",
                "100 000 €"
              ],
              [
                "Proche inclus",
                "Éligibilité individuelle",
                "20 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Coût annuel du 5A grec",
          "body": "Hypothèse : tous les membres inclus sont admissibles ; seuls les forfaits grecs sont représentés, sans imposition étrangère ou locale.",
          "table": {
            "headers": [
              "Simulation",
              "Montant annuel"
            ],
            "rows": [
              [
                "Une personne",
                "100 000 €"
              ],
              [
                "Couple",
                "120 000 €"
              ],
              [
                "Titulaire + 3 proches",
                "160 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Vérifier avant de déménager",
          "body": "Conservez les preuves de résidence, les avis fiscaux, les relevés et contrats ventilés par nature et source. Comparez les conventions, retenues à la source, obligations de société et couverture sociale. Le titre de séjour ne détermine pas le domicile fiscal."
        }
      ],
      "faqs": [
        {
          "question": "Le 7 % est-il ouvert à tout investisseur ?",
          "answer": "Non, le 5B vise les bénéficiaires admissibles de pensions étrangères."
        },
        {
          "question": "Le forfait comprend-il l'investissement ?",
          "answer": "Non, il s'agit de deux obligations distinctes."
        },
        {
          "question": "Le changement de visa suffit-il ?",
          "answer": "Non, il faut établir la résidence fiscale et satisfaire les conditions propres à chaque dispositif."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "AADE — Articles 5A, 5B, 5C",
          "href": "https://www.aade.gr/en/greeks-abroad-non-residents/income-taxation/tax-incentives-order-attract-new-tax-residents"
        },
        {
          "label": "AADE — official guide",
          "href": "https://www.aade.gr/sites/default/files/2025-11/forologika_kinitra_ENG.pdf"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Greece 2026: non-dom, €100,000 flat tax and pension relief",
      "metaDescription": "Compare Greece’s Article 5A €100,000 annual charge, €500,000 investment, 7% pensioner regime and Turkish 20-year relief.",
      "shortAnswer": "Greece offers a €100,000 annual foreign-income charge under Article 5A and separate 7% relief for certain pensioners. Turkey offers conditional 20-year exemption.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent tax specialists. Request a relocation assessment.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Turkey: Article 20/D",
          "body": "Law 7582 has been in force since 4 June 2026. It exempts qualifying foreign income of eligible new individual residents for 20 years. The three preceding calendar years must have no Turkish domicile or generally Turkish tax liability, subject to exceptions for certain capital income. Apply for a certificate by settlement year-end, or the following February for November and December arrivals. Article 20/D imposes no minimum investment. Turkish income, foreign taxes and company profits are not exempted by this measure."
        },
        {
          "id": "compare-2",
          "title": "Greece: three separate regimes",
          "body": "5A requires non-residence in seven of eight preceding years and normally €500,000 qualifying investment within three years, with an exception for certain investment residence permits. The €100,000 annual charge lasts 15 years, plus €20,000 per covered relative. Apply by 31 March under entry rules. 5B offers eligible foreign pension recipients 7% on overseas income for 15 years under separate conditions. 5C exempts 50% of qualifying Greek work income for seven years. Domestic income is outside 5A."
        },
        {
          "id": "compare-3",
          "title": "Compare regimes in 2026",
          "body": "Benefits do not necessarily cover the same income categories. The table assumes eligibility for each respective regime.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Greece"
            ],
            "rows": [
              [
                "Duration",
                "20 years",
                "15 years (5A)"
              ],
              [
                "History",
                "3 calendar years",
                "7 of 8 years"
              ],
              [
                "Investment",
                "No 20/D minimum",
                "Normally €500,000"
              ],
              [
                "Annual charge",
                "None",
                "€100,000"
              ],
              [
                "Relative",
                "Individual eligibility",
                "€20,000"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Greek 5A annual family charge",
          "body": "Assume all included family members are eligible. Greek flat charge only, excluding foreign and domestic taxes.",
          "table": {
            "headers": [
              "Scenario",
              "Annual amount"
            ],
            "rows": [
              [
                "One person",
                "€100,000"
              ],
              [
                "Couple",
                "€120,000"
              ],
              [
                "Main taxpayer + 3 relatives",
                "€160,000"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Before relocating",
          "body": "Retain residence evidence, tax assessments, statements and contracts classified by income type and source. Review treaties, withholding, corporate obligations and social insurance. Immigration residence does not establish tax domicile."
        }
      ],
      "faqs": [
        {
          "question": "Can every investor obtain the 7% regime?",
          "answer": "No, 5B targets eligible foreign pension recipients."
        },
        {
          "question": "Does the charge include the investment?",
          "answer": "No, they are separate obligations."
        },
        {
          "question": "Is a new visa sufficient?",
          "answer": "No; establish tax residence and satisfy the regime-specific conditions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "AADE — Articles 5A, 5B, 5C",
          "href": "https://www.aade.gr/en/greeks-abroad-non-residents/income-taxation/tax-incentives-order-attract-new-tax-residents"
        },
        {
          "label": "AADE — official guide",
          "href": "https://www.aade.gr/sites/default/files/2025-11/forologika_kinitra_ENG.pdf"
        }
      ]
    },
    "ru": {
      "title": "Турция или Греция 2026: non-dom, налог 100 000 евро и пенсии",
      "metaDescription": "Сравните греческую статью 5A: 100 000 евро в год, инвестицию 500 000 евро, режим 7% для пенсионеров и льготу Турции.",
      "shortAnswer": "Греция предлагает фиксированный налог 100 000 евро по 5A и отдельные 7% для подходящих пенсионеров. Турция предлагает условное освобождение на 20 лет.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми налоговыми специалистами. Запросите оценку переезда.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Турция: статья 20/D",
          "body": "Закон № 7582 действует с 4 июня 2026 года и освобождает подходящие иностранные доходы новых резидентов-физлиц на 20 лет. В три предыдущих календарных года не должно быть места жительства и, как правило, налоговых обязательств в Турции, кроме отдельных доходов капитала. Сертификат запрашивается до конца года поселения, а при поселении в ноябре или декабре — до конца следующего февраля. Минимальная инвестиция не требуется. Турецкие доходы, иностранные налоги и прибыль компаний не освобождаются этой нормой."
        },
        {
          "id": "compare-2",
          "title": "Греция: три разных режима",
          "body": "5A требует нерезидентства семь из восьми предыдущих лет и обычно инвестиции 500 000 евро в течение трёх лет, кроме отдельных инвестиционных ВНЖ. Налог 100 000 евро в год действует 15 лет, доплата за родственника — 20 000. Срок подачи 31 марта по правилам вступления. 5B предусматривает 7% на зарубежные доходы подходящих получателей иностранной пенсии на 15 лет. 5C освобождает половину подходящего трудового дохода в Греции на семь лет. Местные доходы не охвачены 5A."
        },
        {
          "id": "compare-3",
          "title": "Сравнение режимов в 2026 году",
          "body": "Льготы не всегда охватывают одинаковые виды дохода. Таблица предполагает выполнение условий каждого режима.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Греция"
            ],
            "rows": [
              [
                "Срок",
                "20 лет",
                "15 лет (5A)"
              ],
              [
                "История",
                "3 календарных года",
                "7 из 8 лет"
              ],
              [
                "Инвестиции",
                "Нет минимума 20/D",
                "Обычно 500 000 €"
              ],
              [
                "Налог в год",
                "Нет",
                "100 000 €"
              ],
              [
                "Родственник",
                "Индивидуальные условия",
                "20 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Годовой налог семьи по 5A",
          "body": "Все включённые родственники соответствуют условиям. Только греческий фиксированный налог, без местных и иностранных налогов.",
          "table": {
            "headers": [
              "Сценарий",
              "Сумма в год"
            ],
            "rows": [
              [
                "Один человек",
                "100 000 €"
              ],
              [
                "Супруги",
                "120 000 €"
              ],
              [
                "Участник + 3 родственника",
                "160 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "До переезда",
          "body": "Соберите документы о проживании, налогах, доходах и договорах по видам и источникам. Проверьте соглашения, удержание, обязательства компаний и страхование. ВНЖ не определяет налоговый статус."
        }
      ],
      "faqs": [
        {
          "question": "Доступны ли 7% любому инвестору?",
          "answer": "Нет, 5B для подходящих получателей иностранной пенсии."
        },
        {
          "question": "Включает ли налог инвестицию?",
          "answer": "Нет, это разные обязательства."
        },
        {
          "question": "Достаточно ли сменить визу?",
          "answer": "Нет, необходимо установить налоговое резидентство и выполнить условия конкретного режима."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "AADE — Articles 5A, 5B, 5C",
          "href": "https://www.aade.gr/en/greeks-abroad-non-residents/income-taxation/tax-incentives-order-attract-new-tax-residents"
        },
        {
          "label": "AADE — official guide",
          "href": "https://www.aade.gr/sites/default/files/2025-11/forologika_kinitra_ENG.pdf"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم اليونان 2026: non-dom وضريبة 100 ألف يورو والتقاعد",
      "metaDescription": "قارن المادة 5A اليونانية بمبلغ 100 ألف يورو سنوياً واستثمار 500 ألف ونظام المتقاعدين 7% وإعفاء تركيا.",
      "shortAnswer": "تقدم اليونان ضريبة مقطوعة 100 ألف يورو بموجب 5A ونظاماً مستقلاً بنسبة 7% لبعض المتقاعدين. تقدم تركيا إعفاءً مشروطاً لعشرين عاماً.",
      "bosphorasHelp": "تنسق Bosphoras الرحلة الاستكشافية والسكن والمواعيد مع مختصين ضريبيين مستقلين. اطلب دراسة مشروع الانتقال.",
      "sections": [
        {
          "id": "compare-1",
          "title": "تركيا: المادة 20/D",
          "body": "القانون 7582 نافذ منذ 4 يونيو 2026 ويعفي الدخل الأجنبي المؤهل للمقيمين الجدد من الأفراد لمدة 20 عاماً. يشترط عدم وجود موطن وعدم الخضوع الضريبي عادة في تركيا خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر وديسمبر. لا يوجد حد أدنى للاستثمار. لا تعفي المادة الدخل التركي أو الضرائب الأجنبية أو أرباح الشركات."
        },
        {
          "id": "compare-2",
          "title": "اليونان: ثلاثة أنظمة",
          "body": "يشترط 5A عدم الإقامة سبع سنوات من الثماني السابقة واستثماراً مؤهلاً عادة بقيمة 500 ألف يورو خلال ثلاث سنوات مع استثناء لبعض تصاريح الاستثمار. تبلغ الضريبة 100 ألف سنوياً لمدة 15 عاماً و20 ألفاً لكل قريب مشمول. التقديم حتى 31 مارس وفق قواعد الدخول. يطبق 5B نسبة 7% على الدخل الأجنبي لمستفيدي المعاش المؤهلين لمدة 15 عاماً. يعفي 5C نصف الدخل المهني اليوناني المؤهل سبع سنوات. لا يشمل 5A الدخل المحلي."
        },
        {
          "id": "compare-3",
          "title": "مقارنة النظامين في 2026",
          "body": "لا تشمل المزايا بالضرورة فئات الدخل نفسها. يفترض الجدول استيفاء شروط كل نظام.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "اليونان"
            ],
            "rows": [
              [
                "المدة",
                "20 عاماً",
                "15 عاماً (5A)"
              ],
              [
                "الفترة السابقة",
                "3 سنوات تقويمية",
                "7 من 8 سنوات"
              ],
              [
                "الاستثمار",
                "لا حد في 20/D",
                "500,000 يورو عادة"
              ],
              [
                "الضريبة السنوية",
                "لا مبلغ مقطوع",
                "100,000 يورو"
              ],
              [
                "القريب",
                "أهلية فردية",
                "20,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "الضريبة السنوية للأسرة وفق 5A",
          "body": "يفترض أهلية الأقارب المشمولين. الضريبة المقطوعة اليونانية فقط دون ضرائب المصدر والدخل المحلي.",
          "table": {
            "headers": [
              "السيناريو",
              "المبلغ السنوي"
            ],
            "rows": [
              [
                "فرد",
                "100,000 يورو"
              ],
              [
                "زوجان",
                "120,000 يورو"
              ],
              [
                "المستفيد + 3 أقارب",
                "160,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "قبل الانتقال",
          "body": "احتفظ بإثباتات الإقامة والضرائب والكشوف والعقود بحسب نوع الدخل ومصدره. ادرس الاتفاقيات والاقتطاعات والتزامات الشركات والتأمين الاجتماعي. لا تحدد الإقامة الإدارية الموطن الضريبي."
        }
      ],
      "faqs": [
        {
          "question": "هل 7% متاحة لكل مستثمر؟",
          "answer": "لا، 5B لمستفيدي المعاش الأجنبي المؤهلين."
        },
        {
          "question": "هل يشمل المبلغ الاستثمار؟",
          "answer": "لا، هما التزامان منفصلان."
        },
        {
          "question": "هل يكفي تغيير التأشيرة؟",
          "answer": "لا، يجب إثبات الإقامة الضريبية واستيفاء شروط النظام."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "AADE — Articles 5A, 5B, 5C",
          "href": "https://www.aade.gr/en/greeks-abroad-non-residents/income-taxation/tax-incentives-order-attract-new-tax-residents"
        },
        {
          "label": "AADE — official guide",
          "href": "https://www.aade.gr/sites/default/files/2025-11/forologika_kinitra_ENG.pdf"
        }
      ]
    }
  },
  "turkey-vs-cyprus-non-dom": {
    "fr": {
      "title": "Turquie ou Chypre 2026 : non-dom, dividendes et résidence 60 jours",
      "metaDescription": "Comparez l’exonération turque de 20 ans avec le non-dom chypriote, la règle des 60 jours et la cotisation santé de 2,65 %.",
      "shortAnswer": "Le non-dom de la République de Chypre exonère les dividendes et intérêts de la contribution SDC, mais la cotisation GHS peut subsister. Le régime turc exonère les revenus étrangers admissibles.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, votre recherche de logement et des rendez-vous avec des fiscalistes indépendants. Demandez une étude de votre projet de transfert.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Le régime turc : article 20/D",
          "body": "La loi 7582, en vigueur depuis le 4 juin 2026, exonère pendant 20 ans les revenus étrangers admissibles des personnes physiques nouvellement résidentes. Les trois années civiles précédentes doivent être sans domicile ni, en principe, assujettissement fiscal turc, avec exceptions pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou fin février suivante pour novembre et décembre. Aucun investissement minimum n'est imposé par 20/D. Les revenus turcs, impôts étrangers et bénéfices de sociétés ne sont pas exonérés par cette mesure."
        },
        {
          "id": "compare-2",
          "title": "Chypre : résidence et domicile distincts",
          "body": "La résidence fiscale peut résulter de plus de 183 jours ou de la règle des 60 jours : présence d'au moins 60 jours, pas plus de 183 jours dans un autre pays, activité/emploi/mandat admissible maintenu et logement permanent détenu ou loué. Depuis 2026, l'ancienne condition d'absence de résidence fiscale dans un autre État est supprimée, mais les conventions restent applicables. Le domicile est distinct : présomption après 17 années sur les 20 précédentes. Les non-dom bénéficient de l'exonération SDC sur intérêts et dividendes, avec GHS de 2,65 % sur les revenus concernés, plafond annuel global 180 000 €. Le SDC sur loyers est supprimé depuis 2026, mais l'impôt sur le revenu et le GHS peuvent subsister."
        },
        {
          "id": "compare-3",
          "title": "Comparer les régimes en 2026",
          "body": "Les avantages ne portent pas toujours sur les mêmes catégories de revenu. Le tableau suppose que les conditions de chaque régime sont remplies.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Chypre"
            ],
            "rows": [
              [
                "Durée",
                "20 ans",
                "Domicile présumé après 17/20 ans"
              ],
              [
                "Dividendes",
                "Étrangers admissibles exonérés",
                "SDC exonéré pour non-dom"
              ],
              [
                "Intérêts",
                "Étrangers admissibles exonérés",
                "SDC exonéré pour non-dom"
              ],
              [
                "Loyers locaux",
                "Droit commun",
                "Impôt ordinaire ; SDC supprimé"
              ],
              [
                "Santé",
                "Règles séparées",
                "GHS 2,65 % selon situation"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Cotisation GHS sur les dividendes chypriotes ou étrangers",
          "body": "Exemple pour un résident chypriote non-dom avec dividendes soumis au GHS, aucun autre revenu consommant le plafond annuel et sans impôt étranger. Maximum 180 000 × 2,65 % = 4 770 €.",
          "table": {
            "headers": [
              "Simulation",
              "Montant annuel"
            ],
            "rows": [
              [
                "Dividendes 50 000 €",
                "1 325 €"
              ],
              [
                "Dividendes 100 000 €",
                "2 650 €"
              ],
              [
                "Dividendes 200 000 €",
                "4 770 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Vérifier avant de déménager",
          "body": "Conservez les preuves de résidence, les avis fiscaux, les relevés et contrats ventilés par nature et source. Comparez les conventions, retenues à la source, obligations de société et couverture sociale. Le titre de séjour ne détermine pas le domicile fiscal."
        }
      ],
      "faqs": [
        {
          "question": "60 jours suffisent-ils seuls ?",
          "answer": "Non, toutes les conditions du régime et les conventions doivent être examinées."
        },
        {
          "question": "Les dividendes non-dom sont-ils sans aucune charge ?",
          "answer": "Pas nécessairement : GHS et retenue étrangère peuvent rester dus."
        },
        {
          "question": "Le changement de visa suffit-il ?",
          "answer": "Non, il faut établir la résidence fiscale et satisfaire les conditions propres à chaque dispositif."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Cyprus Tax Department — residency and domicile",
          "href": "https://www.gov.cy/mof-tax/en/documents/tax-residency-domicility/"
        },
        {
          "label": "HIO — GHS",
          "href": "https://www.gesy.org.cy/sites/Sites?d=Desktop&locale=en_US&lookuphost=%2Fen-us%2F&lookuppage=hiofinancing"
        },
        {
          "label": "PwC — tax reform 2026",
          "href": "https://www.pwc.com.cy/en/services/tax-legal-services/tax-advisory-services/the-cyprus-tax-reform.html"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Cyprus 2026: non-dom, dividends and 60-day residence",
      "metaDescription": "Compare Turkey’s 20-year relief with Cyprus non-dom, the 60-day residence route and 2.65% health contribution.",
      "shortAnswer": "Republic of Cyprus non-doms are exempt from SDC on dividends and interest, but GHS may remain due. Turkey exempts eligible foreign income.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent tax specialists. Request a relocation assessment.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Turkey: Article 20/D",
          "body": "Law 7582 has been in force since 4 June 2026. It exempts qualifying foreign income of eligible new individual residents for 20 years. The three preceding calendar years must have no Turkish domicile or generally Turkish tax liability, subject to exceptions for certain capital income. Apply for a certificate by settlement year-end, or the following February for November and December arrivals. Article 20/D imposes no minimum investment. Turkish income, foreign taxes and company profits are not exempted by this measure."
        },
        {
          "id": "compare-2",
          "title": "Cyprus: tax residence and domicile are separate",
          "body": "Residence can arise from more than 183 days or the 60-day route: at least 60 days present, no more than 183 in another country, continuing qualifying business/employment/office and a permanent owned or rented home. From 2026 the former no-other-tax-residence condition is removed, but treaties remain relevant. Domicile is separate, with deemed domicile after 17 of the previous 20 years. Non-doms are exempt from SDC on dividends and interest; GHS of 2.65% may apply with an aggregate annual €180,000 base cap. Rental SDC is abolished from 2026, but income tax and GHS may remain."
        },
        {
          "id": "compare-3",
          "title": "Compare regimes in 2026",
          "body": "Benefits do not necessarily cover the same income categories. The table assumes eligibility for each respective regime.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Cyprus"
            ],
            "rows": [
              [
                "Duration",
                "20 years",
                "Deemed domicile after 17/20 years"
              ],
              [
                "Dividends",
                "Eligible foreign income exempt",
                "Non-dom SDC exemption"
              ],
              [
                "Interest",
                "Eligible foreign income exempt",
                "Non-dom SDC exemption"
              ],
              [
                "Local rent",
                "Ordinary law",
                "Income tax; SDC abolished"
              ],
              [
                "Health",
                "Separate rules",
                "GHS 2.65% as applicable"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "GHS contribution on Cyprus or overseas dividends",
          "body": "Example: Cyprus non-dom resident with dividends subject to GHS, no other income using the annual cap, no source tax. Maximum €180,000 × 2.65% = €4,770.",
          "table": {
            "headers": [
              "Scenario",
              "Annual amount"
            ],
            "rows": [
              [
                "€50,000 dividends",
                "€1,325"
              ],
              [
                "€100,000 dividends",
                "€2,650"
              ],
              [
                "€200,000 dividends",
                "€4,770"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Before relocating",
          "body": "Retain residence evidence, tax assessments, statements and contracts classified by income type and source. Review treaties, withholding, corporate obligations and social insurance. Immigration residence does not establish tax domicile."
        }
      ],
      "faqs": [
        {
          "question": "Are 60 days sufficient on their own?",
          "answer": "No, all requirements and treaties must be assessed."
        },
        {
          "question": "Are non-dom dividends entirely charge-free?",
          "answer": "Not necessarily: GHS and foreign withholding may remain."
        },
        {
          "question": "Is a new visa sufficient?",
          "answer": "No; establish tax residence and satisfy the regime-specific conditions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Cyprus Tax Department — residency and domicile",
          "href": "https://www.gov.cy/mof-tax/en/documents/tax-residency-domicility/"
        },
        {
          "label": "HIO — GHS",
          "href": "https://www.gesy.org.cy/sites/Sites?d=Desktop&locale=en_US&lookuphost=%2Fen-us%2F&lookuppage=hiofinancing"
        },
        {
          "label": "PwC — tax reform 2026",
          "href": "https://www.pwc.com.cy/en/services/tax-legal-services/tax-advisory-services/the-cyprus-tax-reform.html"
        }
      ]
    },
    "ru": {
      "title": "Турция или Кипр 2026: non-dom, дивиденды и резидентство за 60 дней",
      "metaDescription": "Сравните турецкую льготу на 20 лет, кипрский non-dom, правило 60 дней и медицинский взнос 2,65%.",
      "shortAnswer": "Налоговые резиденты Республики Кипр со статусом non-dom освобождены от SDC на дивиденды и проценты, но GHS может сохраняться. Турция освобождает подходящие иностранные доходы.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми налоговыми специалистами. Запросите оценку переезда.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Турция: статья 20/D",
          "body": "Закон № 7582 действует с 4 июня 2026 года и освобождает подходящие иностранные доходы новых резидентов-физлиц на 20 лет. В три предыдущих календарных года не должно быть места жительства и, как правило, налоговых обязательств в Турции, кроме отдельных доходов капитала. Сертификат запрашивается до конца года поселения, а при поселении в ноябре или декабре — до конца следующего февраля. Минимальная инвестиция не требуется. Турецкие доходы, иностранные налоги и прибыль компаний не освобождаются этой нормой."
        },
        {
          "id": "compare-2",
          "title": "Кипр: резидентство и домицилий",
          "body": "Резидентство возникает при пребывании более 183 дней либо по правилу 60 дней: не менее 60 на Кипре, не более 183 в другой стране, продолжающаяся подходящая работа, бизнес или должность и постоянное жильё в собственности или аренде. С 2026 года отменено прежнее требование отсутствия налогового резидентства в другой стране, но соглашения сохраняются. Домицилий определяется отдельно и предполагается после 17 из 20 предшествующих лет. Non-dom освобождается от SDC на дивиденды и проценты; GHS 2,65% возможен при совокупном годовом лимите базы 180 000 евро. SDC на аренду отменён с 2026 года, но подоходный налог и GHS могут сохраняться."
        },
        {
          "id": "compare-3",
          "title": "Сравнение режимов в 2026 году",
          "body": "Льготы не всегда охватывают одинаковые виды дохода. Таблица предполагает выполнение условий каждого режима.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Кипр"
            ],
            "rows": [
              [
                "Срок",
                "20 лет",
                "Домицилий предполагается после 17 из 20 лет"
              ],
              [
                "Дивиденды",
                "Подходящие иностранные освобождены",
                "Льгота SDC non-dom"
              ],
              [
                "Проценты",
                "Подходящие иностранные освобождены",
                "Льгота SDC non-dom"
              ],
              [
                "Местная аренда",
                "Общие правила",
                "Подоходный налог; SDC отменён"
              ],
              [
                "Медицина",
                "Отдельные правила",
                "GHS 2,65% по условиям"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Взнос GHS с дивидендов",
          "body": "Пример для резидента Кипра non-dom без других доходов, использующих годовой лимит, и иностранных налогов. Максимум 180 000 × 2,65% = 4 770 евро.",
          "table": {
            "headers": [
              "Сценарий",
              "Сумма в год"
            ],
            "rows": [
              [
                "Дивиденды 50 000 €",
                "1 325 €"
              ],
              [
                "Дивиденды 100 000 €",
                "2 650 €"
              ],
              [
                "Дивиденды 200 000 €",
                "4 770 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "До переезда",
          "body": "Соберите документы о проживании, налогах, доходах и договорах по видам и источникам. Проверьте соглашения, удержание, обязательства компаний и страхование. ВНЖ не определяет налоговый статус."
        }
      ],
      "faqs": [
        {
          "question": "Достаточно ли только 60 дней?",
          "answer": "Нет, проверяются все условия и соглашения."
        },
        {
          "question": "Дивиденды non-dom полностью свободны от сборов?",
          "answer": "Не обязательно, возможны GHS и иностранное удержание."
        },
        {
          "question": "Достаточно ли сменить визу?",
          "answer": "Нет, необходимо установить налоговое резидентство и выполнить условия конкретного режима."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Cyprus Tax Department — residency and domicile",
          "href": "https://www.gov.cy/mof-tax/en/documents/tax-residency-domicility/"
        },
        {
          "label": "HIO — GHS",
          "href": "https://www.gesy.org.cy/sites/Sites?d=Desktop&locale=en_US&lookuphost=%2Fen-us%2F&lookuppage=hiofinancing"
        },
        {
          "label": "PwC — tax reform 2026",
          "href": "https://www.pwc.com.cy/en/services/tax-legal-services/tax-advisory-services/the-cyprus-tax-reform.html"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم قبرص 2026: non-dom والتوزيعات وإقامة 60 يوماً",
      "metaDescription": "قارن إعفاء تركيا لعشرين عاماً ونظام قبرص non-dom وقاعدة 60 يوماً ومساهمة الصحة 2.65%.",
      "shortAnswer": "يعفى المقيم غير المتوطن في جمهورية قبرص من SDC على التوزيعات والفوائد لكن قد تستحق مساهمة GHS. تعفي تركيا الدخل الأجنبي المؤهل.",
      "bosphorasHelp": "تنسق Bosphoras الرحلة الاستكشافية والسكن والمواعيد مع مختصين ضريبيين مستقلين. اطلب دراسة مشروع الانتقال.",
      "sections": [
        {
          "id": "compare-1",
          "title": "تركيا: المادة 20/D",
          "body": "القانون 7582 نافذ منذ 4 يونيو 2026 ويعفي الدخل الأجنبي المؤهل للمقيمين الجدد من الأفراد لمدة 20 عاماً. يشترط عدم وجود موطن وعدم الخضوع الضريبي عادة في تركيا خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر وديسمبر. لا يوجد حد أدنى للاستثمار. لا تعفي المادة الدخل التركي أو الضرائب الأجنبية أو أرباح الشركات."
        },
        {
          "id": "compare-2",
          "title": "قبرص: الإقامة والموطن منفصلان",
          "body": "تثبت الإقامة بأكثر من 183 يوماً أو قاعدة 60 يوماً: 60 يوماً على الأقل في قبرص وعدم تجاوز 183 في دولة أخرى واستمرار عمل أو نشاط أو منصب مؤهل ومسكن دائم مملوك أو مستأجر. ألغي منذ 2026 شرط عدم الإقامة الضريبية في دولة أخرى لكن الاتفاقيات تبقى سارية. يفترض الموطن بعد 17 سنة من العشرين السابقة. يعفى non-dom من SDC على التوزيعات والفوائد وقد تستحق GHS بنسبة 2.65% مع سقف إجمالي للوعاء السنوي 180 ألف يورو. ألغي SDC على الإيجار منذ 2026 مع احتمال بقاء ضريبة الدخل وGHS."
        },
        {
          "id": "compare-3",
          "title": "مقارنة النظامين في 2026",
          "body": "لا تشمل المزايا بالضرورة فئات الدخل نفسها. يفترض الجدول استيفاء شروط كل نظام.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "قبرص"
            ],
            "rows": [
              [
                "المدة",
                "20 عاماً",
                "الموطن المفترض بعد 17 من 20 سنة"
              ],
              [
                "التوزيعات",
                "الأجنبية المؤهلة معفاة",
                "إعفاء SDC لغير المتوطن"
              ],
              [
                "الفوائد",
                "الأجنبية المؤهلة معفاة",
                "إعفاء SDC"
              ],
              [
                "الإيجار المحلي",
                "القواعد العامة",
                "ضريبة الدخل وإلغاء SDC"
              ],
              [
                "الصحة",
                "قواعد منفصلة",
                "GHS 2.65% حسب الحالة"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "مساهمة GHS على التوزيعات",
          "body": "مثال لمقيم قبرصي غير متوطن دون دخل آخر يستنفد السقف السنوي ودون ضريبة المصدر. الحد الأقصى 180 ألف × 2.65% = 4,770 يورو.",
          "table": {
            "headers": [
              "السيناريو",
              "المبلغ السنوي"
            ],
            "rows": [
              [
                "توزيعات 50,000 يورو",
                "1,325 يورو"
              ],
              [
                "توزيعات 100,000 يورو",
                "2,650 يورو"
              ],
              [
                "توزيعات 200,000 يورو",
                "4,770 يورو"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "قبل الانتقال",
          "body": "احتفظ بإثباتات الإقامة والضرائب والكشوف والعقود بحسب نوع الدخل ومصدره. ادرس الاتفاقيات والاقتطاعات والتزامات الشركات والتأمين الاجتماعي. لا تحدد الإقامة الإدارية الموطن الضريبي."
        }
      ],
      "faqs": [
        {
          "question": "هل تكفي 60 يوماً وحدها؟",
          "answer": "لا، تراجع جميع الشروط والاتفاقيات."
        },
        {
          "question": "هل التوزيعات معفاة من كل الرسوم؟",
          "answer": "ليس بالضرورة، قد تستحق GHS واقتطاعات أجنبية."
        },
        {
          "question": "هل يكفي تغيير التأشيرة؟",
          "answer": "لا، يجب إثبات الإقامة الضريبية واستيفاء شروط النظام."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://mersin.gib.gov.tr/mevzuat/kanun/433"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Cyprus Tax Department — residency and domicile",
          "href": "https://www.gov.cy/mof-tax/en/documents/tax-residency-domicility/"
        },
        {
          "label": "HIO — GHS",
          "href": "https://www.gesy.org.cy/sites/Sites?d=Desktop&locale=en_US&lookuphost=%2Fen-us%2F&lookuppage=hiofinancing"
        },
        {
          "label": "PwC — tax reform 2026",
          "href": "https://www.pwc.com.cy/en/services/tax-legal-services/tax-advisory-services/the-cyprus-tax-reform.html"
        }
      ]
    }
  },
  "turkey-vs-monaco-tax": {
    "fr": {
      "title": "Turquie ou Monaco 2026 : fiscalité, Français et patrimoine",
      "metaDescription": "Comparez Monaco sans impôt personnel, l’exception française de 1963 et l’exonération turque de 20 ans. Résidence, patrimoine et budget.",
      "shortAnswer": "Monaco ne prélève généralement pas d'impôt personnel sur le revenu, mais les Français visés par la convention de 1963 restent imposables en France sur leurs revenus mondiaux. La Turquie applique une exonération ciblée aux nouveaux résidents éligibles.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, votre recherche de logement et des rendez-vous avec des fiscalistes indépendants. Demandez une étude de votre projet de transfert.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Le régime turc : article 20/D",
          "body": "La loi 7582, en vigueur depuis le 4 juin 2026, exonère pendant 20 ans les revenus étrangers admissibles des personnes physiques nouvellement résidentes. Les trois années civiles précédentes doivent être sans domicile ni, en principe, assujettissement fiscal turc, avec exceptions pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou fin février suivante pour novembre et décembre. Aucun investissement minimum n'est imposé par 20/D. Les revenus turcs, impôts étrangers et bénéfices de sociétés ne sont pas exonérés par cette mesure."
        },
        {
          "id": "compare-2",
          "title": "Monaco : une exception essentielle pour les Français",
          "body": "La convention du 18 mai 1963, article 7, maintient en principe l'imposition française des ressortissants français établis à Monaco, sauf exceptions historiques et situations particulières. La nationalité et l'historique de résidence doivent être analysés. Un véritable domicile monégasque suppose une installation effective, un logement, des ressources et une carte de séjour appropriée. Les sociétés, activités internationales, donations et successions obéissent à des règles distinctes."
        },
        {
          "id": "compare-3",
          "title": "Comparer les régimes en 2026",
          "body": "Les avantages ne portent pas toujours sur les mêmes catégories de revenu. Le tableau suppose que les conditions de chaque régime sont remplies.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Monaco"
            ],
            "rows": [
              [
                "Impôt personnel",
                "20/D : revenus étrangers admissibles exonérés",
                "Pas d'impôt monégasque sur le revenu en principe"
              ],
              [
                "Français",
                "Nationalité non déterminante pour 20/D",
                "Convention de 1963 : imposition française en principe"
              ],
              [
                "Durée",
                "20 ans",
                "Pas de durée fixe pour l'absence d'impôt"
              ],
              [
                "Logement",
                "Résidence effective et titre adapté",
                "Résidence effective et logement"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Budget de logement : scénarios, non prix de marché",
          "body": "Pour évaluer la capacité de financement d'une installation, testez trois loyers mensuels hypothétiques de 3 000, 6 000 et 10 000 €. Le graphique présente uniquement le loyer annuel, sans charges, dépôt, école, santé ni impôts. Il ne s'agit pas de tarifs observés à Monaco ou en Turquie.",
          "table": {
            "headers": [
              "Loyer mensuel hypothétique",
              "Loyer annuel"
            ],
            "rows": [
              [
                "3 000 €/mois",
                "36 000 €"
              ],
              [
                "6 000 €/mois",
                "72 000 €"
              ],
              [
                "10 000 €/mois",
                "120 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Vérifier avant de déménager",
          "body": "Conservez les preuves de résidence, les avis fiscaux, les relevés et contrats ventilés par nature et source. Comparez les conventions, retenues à la source, obligations de société et couverture sociale. Le titre de séjour ne détermine pas le domicile fiscal. Pour préparer un transfert, comparez aussi la fiscalité des successions et des donations, le logement et la situation du pays d'origine. La convention franco-monégasque ne doit pas être confondue avec la convention franco-turque."
        }
      ],
      "faqs": [
        {
          "question": "Un Français paie-t-il zéro impôt à Monaco ?",
          "answer": "En principe non, s'il relève de l'article 7 de la convention franco-monégasque."
        },
        {
          "question": "Une société ou un logement suffit-il ?",
          "answer": "Non, la résidence doit correspondre aux faits et les autres obligations subsistent."
        },
        {
          "question": "Le changement de visa suffit-il ?",
          "answer": "Non, il faut établir la résidence fiscale et satisfaire les conditions propres à chaque dispositif."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "BOFiP — Convention 1963, article 7",
          "href": "https://bofip.impots.gouv.fr/bofip/12995-PGP.html/identifiant%3DBOI-INT-CVB-MCO-10-20210602"
        },
        {
          "label": "Légifrance — article 121 Z quinquies",
          "href": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051183437/2026-06-15"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Monaco 2026: tax, French nationals and wealth",
      "metaDescription": "Compare Monaco’s personal income tax rules, the French treaty exception and Turkey’s 20-year relief, residence and housing scenarios.",
      "shortAnswer": "Monaco generally levies no personal income tax, but French nationals covered by the 1963 treaty remain taxable in France on worldwide income. Turkey offers targeted relief to qualifying new residents.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent tax specialists. Request a relocation assessment.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Turkey: Article 20/D",
          "body": "Law 7582 has been in force since 4 June 2026. It exempts qualifying foreign income of eligible new individual residents for 20 years. The three preceding calendar years must have no Turkish domicile or generally Turkish tax liability, subject to exceptions for certain capital income. Apply for a certificate by settlement year-end, or the following February for November and December arrivals. Article 20/D imposes no minimum investment. Turkish income, foreign taxes and company profits are not exempted by this measure."
        },
        {
          "id": "compare-2",
          "title": "Monaco: the French nationality exception",
          "body": "Article 7 of the 18 May 1963 convention generally keeps French citizens settling in Monaco within French income taxation, subject to historic and other specific exceptions. Nationality and residence history matter. Genuine Monaco residence involves actual settlement, accommodation, sufficient resources and appropriate immigration status. Companies, business activities, gifts and inheritances follow separate rules."
        },
        {
          "id": "compare-3",
          "title": "Compare regimes in 2026",
          "body": "Benefits do not necessarily cover the same income categories. The table assumes eligibility for each respective regime.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Monaco"
            ],
            "rows": [
              [
                "Personal income",
                "Article 20/D: qualifying foreign income exempt",
                "Generally no Monaco income tax"
              ],
              [
                "French citizens",
                "Nationality not decisive for 20/D",
                "Generally French tax under 1963 treaty"
              ],
              [
                "Duration",
                "20 years",
                "No fixed period for absence of income tax"
              ],
              [
                "Housing",
                "Actual residence and appropriate status",
                "Actual residence and accommodation"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Housing budget scenarios, not market rents",
          "body": "Test hypothetical monthly rents of €3,000, €6,000 and €10,000. The chart shows annual rent alone, excluding charges, deposits, schooling, healthcare and tax. These are not observed Monaco or Turkey prices.",
          "table": {
            "headers": [
              "Hypothetical monthly rent",
              "Annual rent"
            ],
            "rows": [
              [
                "€3,000/month",
                "€36,000"
              ],
              [
                "€6,000/month",
                "€72,000"
              ],
              [
                "€10,000/month",
                "€120,000"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Before relocating",
          "body": "Retain residence evidence, tax assessments, statements and contracts classified by income type and source. Review treaties, withholding, corporate obligations and social insurance. Immigration residence does not establish tax domicile. Compare inheritance and gift taxation, housing and former-country obligations before relocating. The French–Monaco treaty is distinct from the French–Turkey treaty."
        }
      ],
      "faqs": [
        {
          "question": "Do French citizens pay zero tax in Monaco?",
          "answer": "Generally not if Article 7 of the bilateral treaty applies."
        },
        {
          "question": "Is a company or apartment enough?",
          "answer": "No; actual residence and remaining obligations matter."
        },
        {
          "question": "Is a new visa sufficient?",
          "answer": "No; establish tax residence and satisfy the regime-specific conditions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "BOFiP — Convention 1963, article 7",
          "href": "https://bofip.impots.gouv.fr/bofip/12995-PGP.html/identifiant%3DBOI-INT-CVB-MCO-10-20210602"
        },
        {
          "label": "Légifrance — article 121 Z quinquies",
          "href": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051183437/2026-06-15"
        }
      ]
    },
    "ru": {
      "title": "Турция или Монако 2026: налоги, граждане Франции и капитал",
      "metaDescription": "Сравните налоги Монако, исключение для французов по договору 1963 года и турецкую льготу на 20 лет.",
      "shortAnswer": "В Монако обычно нет личного подоходного налога, но граждане Франции, подпадающие под договор 1963 года, облагаются во Франции по мировому доходу. Турция предоставляет целевую льготу подходящим новым резидентам.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми налоговыми специалистами. Запросите оценку переезда.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Турция: статья 20/D",
          "body": "Закон № 7582 действует с 4 июня 2026 года и освобождает подходящие иностранные доходы новых резидентов-физлиц на 20 лет. В три предыдущих календарных года не должно быть места жительства и, как правило, налоговых обязательств в Турции, кроме отдельных доходов капитала. Сертификат запрашивается до конца года поселения, а при поселении в ноябре или декабре — до конца следующего февраля. Минимальная инвестиция не требуется. Турецкие доходы, иностранные налоги и прибыль компаний не освобождаются этой нормой."
        },
        {
          "id": "compare-2",
          "title": "Монако: исключение для граждан Франции",
          "body": "Статья 7 соглашения от 18 мая 1963 года обычно сохраняет французское налогообложение французов, поселившихся в Монако, кроме исторических и отдельных исключений. Проверяются гражданство и история проживания. Необходимы фактическое поселение, жильё, средства и соответствующий миграционный статус. Компании, деятельность, дарение и наследование регулируются отдельно."
        },
        {
          "id": "compare-3",
          "title": "Сравнение режимов в 2026 году",
          "body": "Льготы не всегда охватывают одинаковые виды дохода. Таблица предполагает выполнение условий каждого режима.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Монако"
            ],
            "rows": [
              [
                "Личный налог",
                "20/D: подходящие зарубежные доходы освобождены",
                "Обычно нет местного подоходного налога"
              ],
              [
                "Граждане Франции",
                "Гражданство не решает право на 20/D",
                "Обычно налог Франции по договору 1963 года"
              ],
              [
                "Срок",
                "20 лет",
                "Нет фиксированного срока"
              ],
              [
                "Жильё",
                "Фактическое проживание и статус",
                "Фактическое проживание и жильё"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Примеры бюджета жилья, не рыночные цены",
          "body": "Условная аренда 3 000, 6 000 или 10 000 евро в месяц. На графике только годовая аренда без сборов, депозита, школы, медицины и налогов. Это не цены рынка Монако или Турции.",
          "table": {
            "headers": [
              "Условная аренда в месяц",
              "Аренда в год"
            ],
            "rows": [
              [
                "3 000 €/месяц",
                "36 000 €"
              ],
              [
                "6 000 €/месяц",
                "72 000 €"
              ],
              [
                "10 000 €/месяц",
                "120 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "До переезда",
          "body": "Соберите документы о проживании, налогах, доходах и договорах по видам и источникам. Проверьте соглашения, удержание, обязательства компаний и страхование. ВНЖ не определяет налоговый статус. До переезда сравните наследование, дарение, жильё и обязанности прежней страны. Французско-монакское соглашение отличается от французско-турецкого."
        }
      ],
      "faqs": [
        {
          "question": "Платят ли французы нулевой налог в Монако?",
          "answer": "Обычно нет при применении статьи 7 договора."
        },
        {
          "question": "Достаточно ли компании или квартиры?",
          "answer": "Нет, учитываются фактическое проживание и прочие обязанности."
        },
        {
          "question": "Достаточно ли сменить визу?",
          "answer": "Нет, необходимо установить налоговое резидентство и выполнить условия конкретного режима."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "BOFiP — Convention 1963, article 7",
          "href": "https://bofip.impots.gouv.fr/bofip/12995-PGP.html/identifiant%3DBOI-INT-CVB-MCO-10-20210602"
        },
        {
          "label": "Légifrance — article 121 Z quinquies",
          "href": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051183437/2026-06-15"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم موناكو 2026: الضرائب والفرنسيون والثروة",
      "metaDescription": "قارن ضرائب موناكو واستثناء الفرنسيين باتفاقية 1963 وإعفاء تركيا لعشرين عاماً والإقامة وميزانية السكن.",
      "shortAnswer": "لا تفرض موناكو عادة ضريبة دخل شخصي، لكن الفرنسيين المشمولين باتفاقية 1963 يخضعون في فرنسا على دخلهم العالمي. تقدم تركيا إعفاءً محدداً للمقيمين الجدد المؤهلين.",
      "bosphorasHelp": "تنسق Bosphoras الرحلة الاستكشافية والسكن والمواعيد مع مختصين ضريبيين مستقلين. اطلب دراسة مشروع الانتقال.",
      "sections": [
        {
          "id": "compare-1",
          "title": "تركيا: المادة 20/D",
          "body": "القانون 7582 نافذ منذ 4 يونيو 2026 ويعفي الدخل الأجنبي المؤهل للمقيمين الجدد من الأفراد لمدة 20 عاماً. يشترط عدم وجود موطن وعدم الخضوع الضريبي عادة في تركيا خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر وديسمبر. لا يوجد حد أدنى للاستثمار. لا تعفي المادة الدخل التركي أو الضرائب الأجنبية أو أرباح الشركات."
        },
        {
          "id": "compare-2",
          "title": "موناكو: استثناء الجنسية الفرنسية",
          "body": "تبقي المادة 7 من اتفاقية 18 مايو 1963 الفرنسيين المستقرين في موناكو خاضعين عادة لضريبة فرنسا مع استثناءات تاريخية وحالات خاصة. تدرس الجنسية وتاريخ الإقامة. يتطلب الاستقرار الفعلي مسكناً وموارد ووضع إقامة ملائماً. تخضع الشركات والأعمال والهبات والميراث لقواعد منفصلة."
        },
        {
          "id": "compare-3",
          "title": "مقارنة النظامين في 2026",
          "body": "لا تشمل المزايا بالضرورة فئات الدخل نفسها. يفترض الجدول استيفاء شروط كل نظام.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "موناكو"
            ],
            "rows": [
              [
                "ضريبة الفرد",
                "إعفاء الدخل الأجنبي المؤهل 20/D",
                "لا ضريبة دخل محلية عادة"
              ],
              [
                "الفرنسيون",
                "الجنسية ليست معيار 20/D",
                "ضريبة فرنسا عادة وفق اتفاقية 1963"
              ],
              [
                "المدة",
                "20 عاماً",
                "لا مدة ثابتة لغياب الضريبة"
              ],
              [
                "السكن",
                "إقامة فعلية ووضع مناسب",
                "إقامة فعلية ومسكن"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "أمثلة ميزانية السكن لا أسعار السوق",
          "body": "افترض إيجاراً شهرياً 3 آلاف أو 6 آلاف أو 10 آلاف يورو. يوضح الرسم الإيجار السنوي فقط دون رسوم أو ضمان أو تعليم أو صحة أو ضرائب. ليست أسعاراً مرصودة في موناكو أو تركيا.",
          "table": {
            "headers": [
              "الإيجار الشهري المفترض",
              "الإيجار السنوي"
            ],
            "rows": [
              [
                "3,000 يورو شهرياً",
                "36,000 يورو"
              ],
              [
                "6,000 يورو شهرياً",
                "72,000 يورو"
              ],
              [
                "10,000 يورو شهرياً",
                "120,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "قبل الانتقال",
          "body": "احتفظ بإثباتات الإقامة والضرائب والكشوف والعقود بحسب نوع الدخل ومصدره. ادرس الاتفاقيات والاقتطاعات والتزامات الشركات والتأمين الاجتماعي. لا تحدد الإقامة الإدارية الموطن الضريبي. قارن ضريبة الميراث والهبات والسكن والتزامات الدولة السابقة. تختلف اتفاقية فرنسا وموناكو عن اتفاقية فرنسا وتركيا."
        }
      ],
      "faqs": [
        {
          "question": "هل يدفع الفرنسي ضريبة صفرية في موناكو؟",
          "answer": "عادة لا إذا انطبقت المادة 7 من الاتفاقية."
        },
        {
          "question": "هل تكفي شركة أو شقة؟",
          "answer": "لا، يهم الاستقرار الفعلي والالتزامات الأخرى."
        },
        {
          "question": "هل يكفي تغيير التأشيرة؟",
          "answer": "لا، يجب إثبات الإقامة الضريبية واستيفاء شروط النظام."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "BOFiP — Convention 1963, article 7",
          "href": "https://bofip.impots.gouv.fr/bofip/12995-PGP.html/identifiant%3DBOI-INT-CVB-MCO-10-20210602"
        },
        {
          "label": "Légifrance — article 121 Z quinquies",
          "href": "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051183437/2026-06-15"
        }
      ]
    }
  },
  "turkey-vs-switzerland-tax": {
    "fr": {
      "title": "Turquie ou Suisse 2026 : forfait fiscal et revenus étrangers",
      "metaDescription": "Forfait suisse : seuil fédéral de 435 000 CHF, règle des sept loyers, conditions et comparaison avec l’exonération turque de 20 ans.",
      "shortAnswer": "L'imposition suisse d'après la dépense est réservée à certains étrangers sans activité lucrative en Suisse. Le montant de 435 000 CHF est un plancher de base fédérale, pas un impôt annuel.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, votre recherche de logement et des rendez-vous avec des fiscalistes indépendants. Demandez une étude de votre projet de transfert.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Le régime turc : article 20/D",
          "body": "La loi 7582, en vigueur depuis le 4 juin 2026, exonère pendant 20 ans les revenus étrangers admissibles des personnes physiques nouvellement résidentes. Les trois années civiles précédentes doivent être sans domicile ni, en principe, assujettissement fiscal turc, avec exceptions pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou fin février suivante pour novembre et décembre. Aucun investissement minimum n'est imposé par 20/D. Les revenus turcs, impôts étrangers et bénéfices de sociétés ne sont pas exonérés par cette mesure."
        },
        {
          "id": "compare-2",
          "title": "Suisse : imposition d'après la dépense",
          "body": "L'article 14 LIFD vise les personnes sans nationalité suisse, nouvellement imposables à titre illimité ou de retour après dix ans d'absence, sans activité lucrative en Suisse. Les deux époux vivant ensemble doivent remplir les conditions. La base fédérale est au moins le maximum des dépenses mondiales, du plancher 2026 de 435 000 CHF et de sept fois le loyer annuel ou de la règle applicable à la pension. Un calcul de contrôle et les règles cantonales peuvent augmenter l'impôt. Zurich, notamment, a supprimé ce régime."
        },
        {
          "id": "compare-3",
          "title": "Comparer les régimes en 2026",
          "body": "Les avantages ne portent pas toujours sur les mêmes catégories de revenu. Le tableau suppose que les conditions de chaque régime sont remplies.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Suisse"
            ],
            "rows": [
              [
                "Historique",
                "3 années civiles",
                "Première installation ou 10 ans d'absence"
              ],
              [
                "Nationalité",
                "Non déterminante pour 20/D",
                "Non suisse"
              ],
              [
                "Activité locale",
                "Revenus locaux normalement imposés",
                "Activité lucrative suisse incompatible"
              ],
              [
                "Base",
                "Revenus étrangers admissibles exonérés",
                "Dépenses, minimums et calcul de contrôle"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Calcul illustratif de la base fédérale suisse",
          "body": "Seuls le minimum fédéral de 435 000 CHF en 2026 et sept fois le loyer annuel sont comparés. Les dépenses mondiales, le calcul de contrôle et les minimums cantonaux peuvent conduire à une base ou un impôt supérieur. Ce tableau ne calcule pas l'impôt dû.",
          "table": {
            "headers": [
              "Loyer annuel",
              "Base fédérale illustrative"
            ],
            "rows": [
              [
                "Loyer 48 000 CHF/an",
                "435 000 CHF"
              ],
              [
                "Loyer 72 000 CHF/an",
                "504 000 CHF"
              ],
              [
                "Loyer 120 000 CHF/an",
                "840 000 CHF"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Vérifier avant de déménager",
          "body": "Conservez les preuves de résidence, les avis fiscaux, les relevés et contrats ventilés par nature et source. Comparez les conventions, retenues à la source, obligations de société et couverture sociale. Le titre de séjour ne détermine pas le domicile fiscal. Faites chiffrer séparément la fiscalité fédérale, cantonale et communale, et comparez les cantons pratiquant effectivement le régime. Documentez votre train de vie mondial."
        }
      ],
      "faqs": [
        {
          "question": "Le minimum de 435 000 CHF est-il un impôt ?",
          "answer": "Non, c'est un plancher de base imposable fédérale."
        },
        {
          "question": "Puis-je travailler en Suisse avec le forfait ?",
          "answer": "Une activité lucrative en Suisse est incompatible avec ce régime."
        },
        {
          "question": "Le changement de visa suffit-il ?",
          "answer": "Non, il faut établir la résidence fiscale et satisfaire les conditions propres à chaque dispositif."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "DFF — Lump-sum taxation",
          "href": "https://www.efd.admin.ch/en/lump-sum-taxation"
        },
        {
          "label": "Fedlex — LIFD art. 14",
          "href": "https://www.fedlex.admin.ch/eli/cc/1991/1184_1184_1184/fr"
        },
        {
          "label": "AFC — 2026 thresholds",
          "href": "https://www.estv.admin.ch/fr/deductions-taux-baremes-impot-federal-direct"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Switzerland 2026: lump-sum taxation and foreign income",
      "metaDescription": "Swiss expenditure taxation: CHF 435,000 federal base floor, seven-times-rent rule and comparison with Turkey’s 20-year relief.",
      "shortAnswer": "Swiss expenditure taxation applies to certain foreign nationals without gainful activity in Switzerland. CHF 435,000 is the federal assessment floor, not annual tax.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent tax specialists. Request a relocation assessment.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Turkey: Article 20/D",
          "body": "Law 7582 has been in force since 4 June 2026. It exempts qualifying foreign income of eligible new individual residents for 20 years. The three preceding calendar years must have no Turkish domicile or generally Turkish tax liability, subject to exceptions for certain capital income. Apply for a certificate by settlement year-end, or the following February for November and December arrivals. Article 20/D imposes no minimum investment. Turkish income, foreign taxes and company profits are not exempted by this measure."
        },
        {
          "id": "compare-2",
          "title": "Switzerland: expenditure taxation",
          "body": "Article 14 DFTA applies to non-Swiss nationals newly subject to unlimited taxation or returning after ten years away, with no gainful activity in Switzerland. Both spouses living together must qualify. The federal base is at least the highest of worldwide living costs, the CHF 435,000 2026 floor and seven times annual rent or the applicable board rule. A control calculation and cantonal rules can increase tax. Zurich is among cantons that abolished the regime."
        },
        {
          "id": "compare-3",
          "title": "Compare regimes in 2026",
          "body": "Benefits do not necessarily cover the same income categories. The table assumes eligibility for each respective regime.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Switzerland"
            ],
            "rows": [
              [
                "History",
                "3 calendar years",
                "First settlement or 10 years away"
              ],
              [
                "Nationality",
                "Not decisive for 20/D",
                "Non-Swiss"
              ],
              [
                "Local work",
                "Domestic income ordinarily taxed",
                "Swiss gainful work incompatible"
              ],
              [
                "Base",
                "Qualifying foreign income exempt",
                "Expenses, floors and control calculation"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Illustrative Swiss federal assessment base",
          "body": "Compares only the 2026 federal CHF 435,000 floor and seven times annual rent. Worldwide expenses, control calculations and cantonal minima may increase the base or tax. This is not the tax payable.",
          "table": {
            "headers": [
              "Annual rent",
              "Illustrative federal base"
            ],
            "rows": [
              [
                "CHF 48,000 annual rent",
                "CHF 435,000"
              ],
              [
                "CHF 72,000 annual rent",
                "CHF 504,000"
              ],
              [
                "CHF 120,000 annual rent",
                "CHF 840,000"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Before relocating",
          "body": "Retain residence evidence, tax assessments, statements and contracts classified by income type and source. Review treaties, withholding, corporate obligations and social insurance. Immigration residence does not establish tax domicile. Obtain separate federal, cantonal and municipal estimates. Compare cantons offering the regime and document worldwide living costs."
        }
      ],
      "faqs": [
        {
          "question": "Is CHF 435,000 an annual tax?",
          "answer": "No, it is a federal taxable-base floor."
        },
        {
          "question": "Can I work in Switzerland under the forfait?",
          "answer": "Gainful activity in Switzerland is incompatible."
        },
        {
          "question": "Is a new visa sufficient?",
          "answer": "No; establish tax residence and satisfy the regime-specific conditions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "DFF — Lump-sum taxation",
          "href": "https://www.efd.admin.ch/en/lump-sum-taxation"
        },
        {
          "label": "Fedlex — LIFD art. 14",
          "href": "https://www.fedlex.admin.ch/eli/cc/1991/1184_1184_1184/fr"
        },
        {
          "label": "AFC — 2026 thresholds",
          "href": "https://www.estv.admin.ch/fr/deductions-taux-baremes-impot-federal-direct"
        }
      ]
    },
    "ru": {
      "title": "Турция или Швейцария 2026: налог по расходам и зарубежный доход",
      "metaDescription": "Швейцарский forfait: федеральная база от 435 000 франков, семь годовых арендных плат и льгота Турции на 20 лет.",
      "shortAnswer": "Налог по расходам доступен отдельным иностранцам без оплачиваемой деятельности в Швейцарии. 435 000 франков — минимальная федеральная налоговая база, а не налог.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми налоговыми специалистами. Запросите оценку переезда.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Турция: статья 20/D",
          "body": "Закон № 7582 действует с 4 июня 2026 года и освобождает подходящие иностранные доходы новых резидентов-физлиц на 20 лет. В три предыдущих календарных года не должно быть места жительства и, как правило, налоговых обязательств в Турции, кроме отдельных доходов капитала. Сертификат запрашивается до конца года поселения, а при поселении в ноябре или декабре — до конца следующего февраля. Минимальная инвестиция не требуется. Турецкие доходы, иностранные налоги и прибыль компаний не освобождаются этой нормой."
        },
        {
          "id": "compare-2",
          "title": "Швейцария: налогообложение по расходам",
          "body": "Статья 14 федерального закона применяется к лицам без швейцарского гражданства, впервые получившим неограниченную налоговую обязанность или вернувшимся после десяти лет отсутствия, без оплачиваемой деятельности в стране. Оба супруга должны соответствовать условиям. База не ниже максимума мировых расходов, федерального минимума 435 000 CHF на 2026 год и семикратной годовой аренды либо правила пансиона. Контрольный расчёт и кантональные нормы могут повышать налог. В Цюрихе режим отменён."
        },
        {
          "id": "compare-3",
          "title": "Сравнение режимов в 2026 году",
          "body": "Льготы не всегда охватывают одинаковые виды дохода. Таблица предполагает выполнение условий каждого режима.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Швейцария"
            ],
            "rows": [
              [
                "История",
                "3 календарных года",
                "Первый переезд или 10 лет отсутствия"
              ],
              [
                "Гражданство",
                "Не определяет 20/D",
                "Не швейцарское"
              ],
              [
                "Местная работа",
                "Общие налоги на местные доходы",
                "Оплачиваемая деятельность несовместима"
              ],
              [
                "База",
                "Подходящие зарубежные доходы освобождены",
                "Расходы, минимумы и контроль"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Пример федеральной налоговой базы",
          "body": "Сравниваются только минимум 435 000 CHF и семь годовых арендных плат. Расходы, контроль и кантональные минимумы могут увеличить базу или налог. Это не размер налога.",
          "table": {
            "headers": [
              "Годовая аренда",
              "Пример федеральной базы"
            ],
            "rows": [
              [
                "Аренда 48 000 CHF/год",
                "435 000 CHF"
              ],
              [
                "Аренда 72 000 CHF/год",
                "504 000 CHF"
              ],
              [
                "Аренда 120 000 CHF/год",
                "840 000 CHF"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "До переезда",
          "body": "Соберите документы о проживании, налогах, доходах и договорах по видам и источникам. Проверьте соглашения, удержание, обязательства компаний и страхование. ВНЖ не определяет налоговый статус. Получите отдельный расчёт федерального, кантонального и муниципального налога. Сравните кантоны, сохранившие режим, и подтвердите мировые расходы."
        }
      ],
      "faqs": [
        {
          "question": "435 000 CHF — годовой налог?",
          "answer": "Нет, это минимальная федеральная база."
        },
        {
          "question": "Можно ли работать в стране с forfait?",
          "answer": "Оплачиваемая деятельность в Швейцарии несовместима."
        },
        {
          "question": "Достаточно ли сменить визу?",
          "answer": "Нет, необходимо установить налоговое резидентство и выполнить условия конкретного режима."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "DFF — Lump-sum taxation",
          "href": "https://www.efd.admin.ch/en/lump-sum-taxation"
        },
        {
          "label": "Fedlex — LIFD art. 14",
          "href": "https://www.fedlex.admin.ch/eli/cc/1991/1184_1184_1184/fr"
        },
        {
          "label": "AFC — 2026 thresholds",
          "href": "https://www.estv.admin.ch/fr/deductions-taux-baremes-impot-federal-direct"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم سويسرا 2026: الضريبة على أساس الإنفاق والدخل الأجنبي",
      "metaDescription": "قارن حد الوعاء السويسري 435 ألف فرنك وقاعدة سبعة أمثال الإيجار وشروط الإعفاء التركي لعشرين عاماً.",
      "shortAnswer": "يطبق النظام السويسري على بعض الأجانب الذين لا يمارسون نشاطاً ربحياً في سويسرا. مبلغ 435 ألف فرنك حد أدنى للوعاء الفيدرالي لا الضريبة السنوية.",
      "bosphorasHelp": "تنسق Bosphoras الرحلة الاستكشافية والسكن والمواعيد مع مختصين ضريبيين مستقلين. اطلب دراسة مشروع الانتقال.",
      "sections": [
        {
          "id": "compare-1",
          "title": "تركيا: المادة 20/D",
          "body": "القانون 7582 نافذ منذ 4 يونيو 2026 ويعفي الدخل الأجنبي المؤهل للمقيمين الجدد من الأفراد لمدة 20 عاماً. يشترط عدم وجود موطن وعدم الخضوع الضريبي عادة في تركيا خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر وديسمبر. لا يوجد حد أدنى للاستثمار. لا تعفي المادة الدخل التركي أو الضرائب الأجنبية أو أرباح الشركات."
        },
        {
          "id": "compare-2",
          "title": "سويسرا: الضريبة على أساس الإنفاق",
          "body": "تخص المادة 14 غير السويسريين الخاضعين لأول مرة بصورة غير محدودة أو العائدين بعد غياب عشر سنوات دون نشاط ربحي في سويسرا. يجب استيفاء الزوجين المقيمين معاً للشروط. لا يقل الوعاء عن أعلى النفقات العالمية والحد الفيدرالي 435 ألف فرنك لعام 2026 وسبعة أمثال الإيجار السنوي أو قاعدة الإقامة الشاملة. قد يزيد حساب الرقابة وقواعد الكانتون الضريبة. ألغت زيورخ هذا النظام."
        },
        {
          "id": "compare-3",
          "title": "مقارنة النظامين في 2026",
          "body": "لا تشمل المزايا بالضرورة فئات الدخل نفسها. يفترض الجدول استيفاء شروط كل نظام.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "سويسرا"
            ],
            "rows": [
              [
                "الفترة السابقة",
                "3 سنوات تقويمية",
                "أول استقرار أو غياب 10 سنوات"
              ],
              [
                "الجنسية",
                "ليست معيار 20/D",
                "غير سويسرية"
              ],
              [
                "العمل المحلي",
                "الدخل المحلي وفق القواعد العامة",
                "النشاط الربحي المحلي غير متوافق"
              ],
              [
                "الوعاء",
                "إعفاء الدخل الأجنبي المؤهل",
                "النفقات والحدود وحساب الرقابة"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "مثال الوعاء الفيدرالي السويسري",
          "body": "تقتصر المقارنة على الحد 435 ألف فرنك وسبعة أمثال الإيجار السنوي. قد تزيد النفقات وحساب الرقابة وحدود الكانتون الوعاء أو الضريبة. ليست ضريبة مستحقة.",
          "table": {
            "headers": [
              "الإيجار السنوي",
              "وعاء فيدرالي توضيحي"
            ],
            "rows": [
              [
                "إيجار 48,000 فرنك سنوياً",
                "435,000 فرنك"
              ],
              [
                "إيجار 72,000 فرنك سنوياً",
                "504,000 فرنك"
              ],
              [
                "إيجار 120,000 فرنك سنوياً",
                "840,000 فرنك"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "قبل الانتقال",
          "body": "احتفظ بإثباتات الإقامة والضرائب والكشوف والعقود بحسب نوع الدخل ومصدره. ادرس الاتفاقيات والاقتطاعات والتزامات الشركات والتأمين الاجتماعي. لا تحدد الإقامة الإدارية الموطن الضريبي. اطلب حساب الضرائب الفيدرالية والكانتونية والبلدية منفصلة وقارن الكانتونات التي تطبق النظام ووثق النفقات العالمية."
        }
      ],
      "faqs": [
        {
          "question": "هل 435 ألف فرنك ضريبة سنوية؟",
          "answer": "لا، حد أدنى للوعاء الفيدرالي."
        },
        {
          "question": "هل يمكن العمل في سويسرا بالنظام؟",
          "answer": "النشاط الربحي في سويسرا غير متوافق معه."
        },
        {
          "question": "هل يكفي تغيير التأشيرة؟",
          "answer": "لا، يجب إثبات الإقامة الضريبية واستيفاء شروط النظام."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "DFF — Lump-sum taxation",
          "href": "https://www.efd.admin.ch/en/lump-sum-taxation"
        },
        {
          "label": "Fedlex — LIFD art. 14",
          "href": "https://www.fedlex.admin.ch/eli/cc/1991/1184_1184_1184/fr"
        },
        {
          "label": "AFC — 2026 thresholds",
          "href": "https://www.estv.admin.ch/fr/deductions-taux-baremes-impot-federal-direct"
        }
      ]
    }
  },
  "turkey-vs-uk-non-dom": {
    "fr": {
      "title": "Turquie ou Royaume-Uni 2026 : fin du non-dom et régime FIG de 4 ans",
      "metaDescription": "Non-dom britannique supprimé depuis avril 2025 : conditions FIG, dix ans d’absence, quatre ans d’avantage et comparaison avec la Turquie.",
      "shortAnswer": "Le régime FIG britannique exonère certains revenus et gains étrangers sur demande pendant les quatre premières années fiscales de résidence après dix années de non-résidence. La Turquie prévoit vingt ans sous des conditions différentes.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, votre recherche de logement et des rendez-vous avec des fiscalistes indépendants. Demandez une étude de votre projet de transfert.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Le régime turc : article 20/D",
          "body": "La loi 7582, en vigueur depuis le 4 juin 2026, exonère pendant 20 ans les revenus étrangers admissibles des personnes physiques nouvellement résidentes. Les trois années civiles précédentes doivent être sans domicile ni, en principe, assujettissement fiscal turc, avec exceptions pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou fin février suivante pour novembre et décembre. Aucun investissement minimum n'est imposé par 20/D. Les revenus turcs, impôts étrangers et bénéfices de sociétés ne sont pas exonérés par cette mesure."
        },
        {
          "id": "compare-2",
          "title": "Royaume-Uni : le FIG remplace la remittance basis",
          "body": "Depuis le 6 avril 2025, le Royaume-Uni impose en principe les revenus mondiaux à leur naissance. Le FIG permet de demander une exonération annuelle ciblée sur dividendes, intérêts, bénéfices étrangers et gains admissibles après dix années fiscales consécutives de non-résidence. Les années non utilisées ne sont pas reportées. Les revenus d'emploi relèvent notamment du dispositif Overseas Workday Relief distinct. Une demande FIG fait perdre les abattements personnels d'impôt sur le revenu et sur les plus-values. Déclaration Self Assessment, SA109 et annexes pertinentes ; la fiscalité successorale fondée sur la résidence nécessite un examen séparé."
        },
        {
          "id": "compare-3",
          "title": "Comparer les régimes en 2026",
          "body": "Les avantages ne portent pas toujours sur les mêmes catégories de revenu. Le tableau suppose que les conditions de chaque régime sont remplies.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Royaume-Uni"
            ],
            "rows": [
              [
                "Durée",
                "20 ans",
                "4 années fiscales"
              ],
              [
                "Antériorité",
                "3 années civiles",
                "10 années fiscales consécutives"
              ],
              [
                "Formalité",
                "Certificat 20/D",
                "Demande annuelle Self Assessment"
              ],
              [
                "Revenus rapatriés",
                "Source juridique déterminante",
                "Flux FIG exonérés rapatriables"
              ],
              [
                "Abattements",
                "Règles turques distinctes",
                "Perte d'abattements avec demande FIG"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Exemple : période d'éligibilité restante",
          "body": "Pour une première résidence fiscale britannique en 2026/27, quatre années consécutives sont possibles jusqu'à 2029/30. Si la première année est 2025/26, il reste trois années à compter de 2026/27 ; si 2023/24, une seule. Le graphique mesure la durée, pas l'économie fiscale.",
          "table": {
            "headers": [
              "Première année fiscale",
              "Années restantes à partir de 2026/27"
            ],
            "rows": [
              [
                "Début 2026/27",
                "4 ans"
              ],
              [
                "Début 2025/26",
                "3 ans"
              ],
              [
                "Début 2023/24",
                "1 an"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Vérifier avant de déménager",
          "body": "Conservez les preuves de résidence, les avis fiscaux, les relevés et contrats ventilés par nature et source. Comparez les conventions, retenues à la source, obligations de société et couverture sociale. Le titre de séjour ne détermine pas le domicile fiscal. Examinez les revenus antérieurs à avril 2025 et les dispositions transitoires, notamment la Temporary Repatriation Facility si applicable. Les gains passés ne sont pas automatiquement couverts par FIG."
        }
      ],
      "faqs": [
        {
          "question": "Le non-dom ancien existe-t-il encore ?",
          "answer": "La remittance basis a été remplacée le 6 avril 2025."
        },
        {
          "question": "Peut-on reporter une année FIG inutilisée ?",
          "answer": "Non, la période de quatre années est consécutive."
        },
        {
          "question": "Le changement de visa suffit-il ?",
          "answer": "Non, il faut établir la résidence fiscale et satisfaire les conditions propres à chaque dispositif."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "HMRC — FIG eligibility",
          "href": "https://www.gov.uk/guidance/check-if-you-can-claim-the-4-year-foreign-income-and-gains-regime"
        },
        {
          "label": "HMRC — HS266 2026",
          "href": "https://www.gov.uk/government/publications/foreign-income-and-gains-fig-regime-self-assessment-helpsheet-hs266/hs266-foreign-income-and-gains-fig-regime-2026"
        }
      ]
    },
    "en": {
      "title": "Turkey vs UK 2026: end of non-dom and four-year FIG regime",
      "metaDescription": "UK non-dom ended in April 2025: FIG eligibility, ten years abroad, four-year relief and comparison with Turkey.",
      "shortAnswer": "The UK FIG regime provides claim-based relief for eligible foreign income and gains for the first four tax years after ten non-resident years. Turkey offers twenty years under different conditions.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent tax specialists. Request a relocation assessment.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Turkey: Article 20/D",
          "body": "Law 7582 has been in force since 4 June 2026. It exempts qualifying foreign income of eligible new individual residents for 20 years. The three preceding calendar years must have no Turkish domicile or generally Turkish tax liability, subject to exceptions for certain capital income. Apply for a certificate by settlement year-end, or the following February for November and December arrivals. Article 20/D imposes no minimum investment. Turkish income, foreign taxes and company profits are not exempted by this measure."
        },
        {
          "id": "compare-2",
          "title": "UK: FIG replaces the remittance basis",
          "body": "Since 6 April 2025 the UK generally taxes worldwide income as it arises. FIG allows annual claims for eligible dividends, interest, overseas profits and gains after ten consecutive non-resident tax years. Unused years cannot be carried forward. Employment income may fall under separate Overseas Workday Relief. A FIG claim removes personal income tax and capital gains allowances. File Self Assessment, SA109 and relevant supplementary pages; residence-based inheritance tax requires separate review."
        },
        {
          "id": "compare-3",
          "title": "Compare regimes in 2026",
          "body": "Benefits do not necessarily cover the same income categories. The table assumes eligibility for each respective regime.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "United Kingdom"
            ],
            "rows": [
              [
                "Duration",
                "20 years",
                "4 tax years"
              ],
              [
                "History",
                "3 calendar years",
                "10 consecutive tax years"
              ],
              [
                "Filing",
                "20/D certificate",
                "Annual Self Assessment claim"
              ],
              [
                "Remittance",
                "Legal source decisive",
                "Relieved FIG can be remitted"
              ],
              [
                "Allowances",
                "Separate Turkish rules",
                "Loss of allowances when claiming FIG"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Illustrative remaining eligibility",
          "body": "First UK residence in 2026/27 allows four consecutive qualifying years through 2029/30. A 2025/26 start leaves three years from 2026/27; a 2023/24 start leaves one. The chart measures years, not tax savings.",
          "table": {
            "headers": [
              "First tax year",
              "Years remaining from 2026/27"
            ],
            "rows": [
              [
                "Start 2026/27",
                "4 years"
              ],
              [
                "Start 2025/26",
                "3 years"
              ],
              [
                "Start 2023/24",
                "1 year"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Before relocating",
          "body": "Retain residence evidence, tax assessments, statements and contracts classified by income type and source. Review treaties, withholding, corporate obligations and social insurance. Immigration residence does not establish tax domicile. Review pre-April 2025 income and transitional rules, including the Temporary Repatriation Facility if applicable. Past gains do not automatically qualify for FIG."
        }
      ],
      "faqs": [
        {
          "question": "Does the old non-dom system remain?",
          "answer": "The remittance basis was replaced on 6 April 2025."
        },
        {
          "question": "Can unused FIG years be carried forward?",
          "answer": "No, the four-year window is consecutive."
        },
        {
          "question": "Is a new visa sufficient?",
          "answer": "No; establish tax residence and satisfy the regime-specific conditions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "HMRC — FIG eligibility",
          "href": "https://www.gov.uk/guidance/check-if-you-can-claim-the-4-year-foreign-income-and-gains-regime"
        },
        {
          "label": "HMRC — HS266 2026",
          "href": "https://www.gov.uk/government/publications/foreign-income-and-gains-fig-regime-self-assessment-helpsheet-hs266/hs266-foreign-income-and-gains-fig-regime-2026"
        }
      ]
    },
    "ru": {
      "title": "Турция или Великобритания 2026: отмена non-dom и режим FIG",
      "metaDescription": "Режим FIG вместо non-dom с апреля 2025 года: десять лет нерезидентства, четыре года льготы и сравнение с Турцией.",
      "shortAnswer": "FIG освобождает по заявлению подходящие иностранные доходы и прирост в первые четыре налоговых года после десяти лет нерезидентства. Турция предусматривает двадцать лет по другим условиям.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми налоговыми специалистами. Запросите оценку переезда.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Турция: статья 20/D",
          "body": "Закон № 7582 действует с 4 июня 2026 года и освобождает подходящие иностранные доходы новых резидентов-физлиц на 20 лет. В три предыдущих календарных года не должно быть места жительства и, как правило, налоговых обязательств в Турции, кроме отдельных доходов капитала. Сертификат запрашивается до конца года поселения, а при поселении в ноябре или декабре — до конца следующего февраля. Минимальная инвестиция не требуется. Турецкие доходы, иностранные налоги и прибыль компаний не освобождаются этой нормой."
        },
        {
          "id": "compare-2",
          "title": "Великобритания: FIG вместо remittance basis",
          "body": "С 6 апреля 2025 года Великобритания обычно облагает мировой доход по мере возникновения. Ежегодная заявка FIG охватывает подходящие дивиденды, проценты, зарубежную прибыль и прирост после десяти последовательных лет нерезидентства. Неиспользованные годы не переносятся. Доходы от работы могут подпадать под отдельный Overseas Workday Relief. При заявке FIG теряются личные необлагаемые суммы подоходного налога и прироста капитала. Подаются Self Assessment, SA109 и приложения; наследственный налог оценивается отдельно."
        },
        {
          "id": "compare-3",
          "title": "Сравнение режимов в 2026 году",
          "body": "Льготы не всегда охватывают одинаковые виды дохода. Таблица предполагает выполнение условий каждого режима.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Великобритания"
            ],
            "rows": [
              [
                "Срок",
                "20 лет",
                "4 налоговых года"
              ],
              [
                "История",
                "3 календарных года",
                "10 последовательных налоговых лет"
              ],
              [
                "Оформление",
                "Сертификат 20/D",
                "Ежегодная заявка Self Assessment"
              ],
              [
                "Перевод средств",
                "Важен юридический источник",
                "Освобождённый FIG можно переводить"
              ],
              [
                "Вычеты",
                "Отдельные правила",
                "Утрата необлагаемых сумм при FIG"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Пример оставшегося срока",
          "body": "Первое резидентство в 2026/27 позволяет четыре года до 2029/30. При начале в 2025/26 остаются три года с 2026/27, при начале в 2023/24 — один. График показывает годы, а не экономию налога.",
          "table": {
            "headers": [
              "Первый налоговый год",
              "Осталось лет с 2026/27"
            ],
            "rows": [
              [
                "Начало 2026/27",
                "4 года"
              ],
              [
                "Начало 2025/26",
                "3 года"
              ],
              [
                "Начало 2023/24",
                "1 год"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "До переезда",
          "body": "Соберите документы о проживании, налогах, доходах и договорах по видам и источникам. Проверьте соглашения, удержание, обязательства компаний и страхование. ВНЖ не определяет налоговый статус. Проверьте доходы до апреля 2025 и переходные правила, включая Temporary Repatriation Facility при применимости. Прежний прирост не автоматически освобождён FIG."
        }
      ],
      "faqs": [
        {
          "question": "Сохранился ли старый non-dom?",
          "answer": "Remittance basis заменён с 6 апреля 2025 года."
        },
        {
          "question": "Можно ли перенести неиспользованный год?",
          "answer": "Нет, четыре года идут подряд."
        },
        {
          "question": "Достаточно ли сменить визу?",
          "answer": "Нет, необходимо установить налоговое резидентство и выполнить условия конкретного режима."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "HMRC — FIG eligibility",
          "href": "https://www.gov.uk/guidance/check-if-you-can-claim-the-4-year-foreign-income-and-gains-regime"
        },
        {
          "label": "HMRC — HS266 2026",
          "href": "https://www.gov.uk/government/publications/foreign-income-and-gains-fig-regime-self-assessment-helpsheet-hs266/hs266-foreign-income-and-gains-fig-regime-2026"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم المملكة المتحدة 2026: نهاية non-dom ونظام FIG",
      "metaDescription": "قارن نظام FIG منذ أبريل 2025 وشرط عشر سنوات خارج بريطانيا وأربع سنوات إعفاء مع تركيا.",
      "shortAnswer": "يعفي FIG الدخل والمكاسب الأجنبية المؤهلة بطلب خلال أول أربع سنوات ضريبية بعد عشر سنوات من عدم الإقامة. تقدم تركيا عشرين عاماً بشروط مختلفة.",
      "bosphorasHelp": "تنسق Bosphoras الرحلة الاستكشافية والسكن والمواعيد مع مختصين ضريبيين مستقلين. اطلب دراسة مشروع الانتقال.",
      "sections": [
        {
          "id": "compare-1",
          "title": "تركيا: المادة 20/D",
          "body": "القانون 7582 نافذ منذ 4 يونيو 2026 ويعفي الدخل الأجنبي المؤهل للمقيمين الجدد من الأفراد لمدة 20 عاماً. يشترط عدم وجود موطن وعدم الخضوع الضريبي عادة في تركيا خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر وديسمبر. لا يوجد حد أدنى للاستثمار. لا تعفي المادة الدخل التركي أو الضرائب الأجنبية أو أرباح الشركات."
        },
        {
          "id": "compare-2",
          "title": "بريطانيا: FIG بدل نظام التحويل",
          "body": "منذ 6 أبريل 2025 تخضع الدخول العالمية عادة عند تحققها. يسمح FIG بطلب سنوي للدخل والمكاسب الأجنبية المؤهلة مثل التوزيعات والفوائد والأرباح بعد عشر سنوات ضريبية متتالية من عدم الإقامة. لا ترحل السنوات غير المستخدمة. قد يخضع دخل العمل لإعفاء Overseas Workday Relief المنفصل. يفقد طالب FIG المبالغ الشخصية المعفاة لضريبة الدخل ومكاسب رأس المال. يقدم Self Assessment وSA109 والملاحق، وتدرس ضريبة الميراث بشكل منفصل."
        },
        {
          "id": "compare-3",
          "title": "مقارنة النظامين في 2026",
          "body": "لا تشمل المزايا بالضرورة فئات الدخل نفسها. يفترض الجدول استيفاء شروط كل نظام.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "المملكة المتحدة"
            ],
            "rows": [
              [
                "المدة",
                "20 عاماً",
                "4 سنوات ضريبية"
              ],
              [
                "الفترة السابقة",
                "3 سنوات تقويمية",
                "10 سنوات ضريبية متتالية"
              ],
              [
                "الإجراء",
                "شهادة 20/D",
                "طلب سنوي Self Assessment"
              ],
              [
                "تحويل الأموال",
                "المصدر القانوني حاسم",
                "يمكن تحويل الدخل المعفى FIG"
              ],
              [
                "المبالغ المعفاة",
                "قواعد تركية مستقلة",
                "فقدانها عند طلب FIG"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "مثال المدة المتبقية",
          "body": "بدء الإقامة الضريبية البريطانية في 2026/27 يتيح أربع سنوات حتى 2029/30. بدء 2025/26 يترك ثلاثاً من 2026/27، وبدء 2023/24 سنة واحدة. يقيس الرسم السنوات لا التوفير الضريبي.",
          "table": {
            "headers": [
              "السنة الأولى",
              "السنوات المتبقية من 2026/27"
            ],
            "rows": [
              [
                "بدء 2026/27",
                "4 سنوات"
              ],
              [
                "بدء 2025/26",
                "3 سنوات"
              ],
              [
                "بدء 2023/24",
                "سنة واحدة"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "قبل الانتقال",
          "body": "احتفظ بإثباتات الإقامة والضرائب والكشوف والعقود بحسب نوع الدخل ومصدره. ادرس الاتفاقيات والاقتطاعات والتزامات الشركات والتأمين الاجتماعي. لا تحدد الإقامة الإدارية الموطن الضريبي. ادرس الدخل السابق لأبريل 2025 والقواعد الانتقالية ومنها Temporary Repatriation Facility عند انطباقها؛ لا يشمل FIG المكاسب القديمة تلقائياً."
        }
      ],
      "faqs": [
        {
          "question": "هل بقي نظام non-dom القديم؟",
          "answer": "استبدل نظام التحويل في 6 أبريل 2025."
        },
        {
          "question": "هل ترحل سنة FIG غير مستخدمة؟",
          "answer": "لا، السنوات الأربع متتالية."
        },
        {
          "question": "هل يكفي تغيير التأشيرة؟",
          "answer": "لا، يجب إثبات الإقامة الضريبية واستيفاء شروط النظام."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "HMRC — FIG eligibility",
          "href": "https://www.gov.uk/guidance/check-if-you-can-claim-the-4-year-foreign-income-and-gains-regime"
        },
        {
          "label": "HMRC — HS266 2026",
          "href": "https://www.gov.uk/government/publications/foreign-income-and-gains-fig-regime-self-assessment-helpsheet-hs266/hs266-foreign-income-and-gains-fig-regime-2026"
        }
      ]
    }
  },
  "turkey-vs-malta-non-dom": {
    "fr": {
      "title": "Turquie ou Malte 2026–2027 : non-dom, 15 % et nouveau minimum de 35 000 €",
      "metaDescription": "Malte change en 2027 : comparez remittance basis, minimums de 5 000 €, 15 000 € et 35 000 €, transition jusqu’en 2031 et Turquie.",
      "shortAnswer": "Malte distingue le non-dom ordinaire des programmes spéciaux à 15 %. Les nouveaux programmes à compter du 1er janvier 2027 relèvent le minimum annuel des investisseurs à 35 000 €, contre 15 000 € dans les anciens GRP/RP.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, votre recherche de logement et des rendez-vous avec des fiscalistes indépendants. Demandez une étude de votre projet de transfert.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Le régime turc : article 20/D",
          "body": "La loi 7582, en vigueur depuis le 4 juin 2026, exonère pendant 20 ans les revenus étrangers admissibles des personnes physiques nouvellement résidentes. Les trois années civiles précédentes doivent être sans domicile ni, en principe, assujettissement fiscal turc, avec exceptions pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou fin février suivante pour novembre et décembre. Aucun investissement minimum n'est imposé par 20/D. Les revenus turcs, impôts étrangers et bénéfices de sociétés ne sont pas exonérés par cette mesure."
        },
        {
          "id": "compare-2",
          "title": "Malte : revenus rapatriés et réforme 2027",
          "body": "Le régime ordinaire impose les revenus maltais et les revenus étrangers reçus à Malte ; les plus-values étrangères restent généralement hors champ même rapatriées. Le minimum ordinaire de 5 000 € s'applique notamment si le revenu étranger atteint 35 000 €, sous exceptions et crédits. Pour les programmes GRP/RP, le taux spécial de 15 % porte sur les revenus étrangers rapatriés, minimum annuel de 15 000 €. Le Legal Notice 195/2026 crée à compter du 1er janvier 2027 un régime unifié : minimum de 35 000 € pour Global et EU/EEA/Swiss Resident Status, 15 000 € pour retraités et 20 000 € pour pensionnés ONU ; logement acheté dès 700 000 € ou loyer annuel dès 14 000 €, statut cinq ans renouvelable. Les dossiers admissibles déposés avant fin 2026 peuvent conserver les anciennes règles jusqu'à fin 2031, sous conditions."
        },
        {
          "id": "compare-3",
          "title": "Comparer les régimes en 2026",
          "body": "Les avantages ne portent pas toujours sur les mêmes catégories de revenu. Le tableau suppose que les conditions de chaque régime sont remplies.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Malte"
            ],
            "rows": [
              [
                "Revenus étrangers",
                "Éligibles exonérés pendant 20 ans",
                "Remittance basis : imposition si reçus à Malte"
              ],
              [
                "Minimum ordinaire",
                "Aucun forfait 20/D",
                "5 000 € si applicable"
              ],
              [
                "GRP/RP 2026",
                "Non applicable",
                "15 % avec minimum 15 000 €"
              ],
              [
                "Investisseur ITP dès 2027",
                "Non applicable",
                "15 % avec minimum 35 000 €"
              ],
              [
                "Qualification",
                "Certificat fiscal",
                "Statut spécifique et conditions continues"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Simulation des programmes investisseurs maltais",
          "body": "Exemple sans crédit d'impôt étranger ni revenu local : impôt égal au maximum entre 15 % du revenu étranger rapatrié et le minimum du programme. Ici le tableau compare le programme spécial 2026 avec le nouveau statut investisseur 2027, pas le non-dom ordinaire.",
          "table": {
            "headers": [
              "Revenu rapatrié",
              "GRP/RP 2026",
              "ITP investisseur 2027"
            ],
            "rows": [
              [
                "50 000 € rapatriés",
                "15 000 €",
                "35 000 €"
              ],
              [
                "150 000 € rapatriés",
                "22 500 €",
                "35 000 €"
              ],
              [
                "300 000 € rapatriés",
                "45 000 €",
                "45 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Vérifier avant de déménager",
          "body": "Conservez les preuves de résidence, les avis fiscaux, les relevés et contrats ventilés par nature et source. Comparez les conventions, retenues à la source, obligations de société et couverture sociale. Le titre de séjour ne détermine pas le domicile fiscal. Séparez le capital historique, les revenus et les plus-values dans vos relevés bancaires. La qualification des transferts est essentielle. Comparez le minimum de 2027 et les frais d'entrée avant toute demande."
        }
      ],
      "faqs": [
        {
          "question": "Le minimum de 15 000 € reste-t-il en 2027 ?",
          "answer": "Pour certains bénéficiaires transitoires, oui ; les nouvelles demandes investisseurs relèvent en principe du minimum de 35 000 €."
        },
        {
          "question": "Tous les non-dom paient-ils 15 % ?",
          "answer": "Non, le taux vise les programmes spéciaux ; le régime ordinaire est distinct."
        },
        {
          "question": "Le changement de visa suffit-il ?",
          "answer": "Non, il faut établir la résidence fiscale et satisfaire les conditions propres à chaque dispositif."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "MTCA — Tax residence",
          "href": "https://mtca.gov.mt/personal-tax/individual/tax-residence"
        },
        {
          "label": "MTCA — Remittance guidance",
          "href": "https://cfr.gov.mt/en/inlandrevenue/legal-technical/Documents/MTCA%20GUIDELINES%20ON%20THE%20REMITTANCE%20UNDER%20THE%20INCOME%20TAX.pdf"
        },
        {
          "label": "Malta legislation — LN 195/2026",
          "href": "https://legislation.mt/eli/ln/2026/195/eng/portalpdf"
        },
        {
          "label": "PwC — ITP 2027",
          "href": "https://www.pwc.com/mt/en/publications/tax-legal/new-individual-tax-programme-rules.html"
        },
        {
          "label": "Deloitte — ITP 2026",
          "href": "https://www.deloitte.com/mt/en/services/tax/perspectives/tax-alerts/2026/individual-tax-programme-rules-2026.html"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Malta 2026–2027: non-dom, 15% and €35,000 new minimum",
      "metaDescription": "Malta changes in 2027: remittance basis, €5,000, €15,000 and €35,000 minima, transition to 2031 and Turkey’s exemption.",
      "shortAnswer": "Malta distinguishes ordinary non-dom taxation from special 15% programmes. From 1 January 2027 the new investor programmes increase the minimum annual tax to €35,000 from €15,000 under legacy GRP/RP.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent tax specialists. Request a relocation assessment.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Turkey: Article 20/D",
          "body": "Law 7582 has been in force since 4 June 2026. It exempts qualifying foreign income of eligible new individual residents for 20 years. The three preceding calendar years must have no Turkish domicile or generally Turkish tax liability, subject to exceptions for certain capital income. Apply for a certificate by settlement year-end, or the following February for November and December arrivals. Article 20/D imposes no minimum investment. Turkish income, foreign taxes and company profits are not exempted by this measure."
        },
        {
          "id": "compare-2",
          "title": "Malta: remittances and the 2027 reform",
          "body": "Ordinary remittance taxation covers Maltese income and foreign income received in Malta; foreign capital gains generally remain outside tax even if remitted. The €5,000 ordinary minimum applies notably when foreign income reaches €35,000, subject to exceptions and credits. Legacy GRP/RP charge 15% on remitted foreign income with a €15,000 minimum. Legal Notice 195/2026 introduces a unified framework from 1 January 2027: €35,000 minimum for Global and EU/EEA/Swiss Resident Status, €15,000 for retired pensioners and €20,000 for UN pensioners; qualifying property from €700,000 or annual rent from €14,000, five-year renewable status. Eligible applications by end-2026 can retain legacy terms through end-2031 subject to conditions."
        },
        {
          "id": "compare-3",
          "title": "Compare regimes in 2026",
          "body": "Benefits do not necessarily cover the same income categories. The table assumes eligibility for each respective regime.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Malta"
            ],
            "rows": [
              [
                "Foreign income",
                "Eligible exempt for 20 years",
                "Remittance basis: taxable if received in Malta"
              ],
              [
                "Ordinary minimum",
                "No 20/D flat charge",
                "€5,000 if applicable"
              ],
              [
                "Legacy GRP/RP 2026",
                "Not applicable",
                "15%, €15,000 minimum"
              ],
              [
                "New investor ITP 2027",
                "Not applicable",
                "15%, €35,000 minimum"
              ],
              [
                "Qualification",
                "Tax certificate",
                "Specific status and ongoing criteria"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Malta investor programme illustration",
          "body": "Assume no foreign tax credit or domestic income: tax is the greater of 15% of remitted foreign income and the relevant programme minimum. Compares legacy 2026 and new 2027 investor status, not ordinary non-dom.",
          "table": {
            "headers": [
              "Remitted income",
              "Legacy GRP/RP 2026",
              "Investor ITP 2027"
            ],
            "rows": [
              [
                "€50,000 remitted",
                "€15,000",
                "€35,000"
              ],
              [
                "€150,000 remitted",
                "€22,500",
                "€35,000"
              ],
              [
                "€300,000 remitted",
                "€45,000",
                "€45,000"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Before relocating",
          "body": "Retain residence evidence, tax assessments, statements and contracts classified by income type and source. Review treaties, withholding, corporate obligations and social insurance. Immigration residence does not establish tax domicile. Separate historical capital, income and gains in bank records. Remittance classification matters. Compare new minimums and entry costs before applying."
        }
      ],
      "faqs": [
        {
          "question": "Does the €15,000 minimum survive 2027?",
          "answer": "Yes for eligible transitional beneficiaries; new investor applicants generally face €35,000."
        },
        {
          "question": "Do all non-doms pay 15%?",
          "answer": "No, special programmes and ordinary taxation differ."
        },
        {
          "question": "Is a new visa sufficient?",
          "answer": "No; establish tax residence and satisfy the regime-specific conditions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "MTCA — Tax residence",
          "href": "https://mtca.gov.mt/personal-tax/individual/tax-residence"
        },
        {
          "label": "MTCA — Remittance guidance",
          "href": "https://cfr.gov.mt/en/inlandrevenue/legal-technical/Documents/MTCA%20GUIDELINES%20ON%20THE%20REMITTANCE%20UNDER%20THE%20INCOME%20TAX.pdf"
        },
        {
          "label": "Malta legislation — LN 195/2026",
          "href": "https://legislation.mt/eli/ln/2026/195/eng/portalpdf"
        },
        {
          "label": "PwC — ITP 2027",
          "href": "https://www.pwc.com/mt/en/publications/tax-legal/new-individual-tax-programme-rules.html"
        },
        {
          "label": "Deloitte — ITP 2026",
          "href": "https://www.deloitte.com/mt/en/services/tax/perspectives/tax-alerts/2026/individual-tax-programme-rules-2026.html"
        }
      ]
    },
    "ru": {
      "title": "Турция или Мальта 2026–2027: non-dom, 15% и минимум 35 000 евро",
      "metaDescription": "Налоги Мальты меняются в 2027 году: remittance basis, минимумы 5 000, 15 000 и 35 000 евро, переход до 2031 года.",
      "shortAnswer": "Мальта различает обычный non-dom и специальные программы 15%. С 1 января 2027 года минимум новых инвесторских программ возрастает с 15 000 до 35 000 евро в год.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми налоговыми специалистами. Запросите оценку переезда.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Турция: статья 20/D",
          "body": "Закон № 7582 действует с 4 июня 2026 года и освобождает подходящие иностранные доходы новых резидентов-физлиц на 20 лет. В три предыдущих календарных года не должно быть места жительства и, как правило, налоговых обязательств в Турции, кроме отдельных доходов капитала. Сертификат запрашивается до конца года поселения, а при поселении в ноябре или декабре — до конца следующего февраля. Минимальная инвестиция не требуется. Турецкие доходы, иностранные налоги и прибыль компаний не освобождаются этой нормой."
        },
        {
          "id": "compare-2",
          "title": "Мальта: переводы и реформа 2027",
          "body": "Обычный режим облагает мальтийский доход и зарубежный доход, полученный на Мальте; зарубежный прирост капитала обычно не облагается даже при переводе. Минимум 5 000 евро применяется, в частности, при зарубежном доходе от 35 000 евро с учётом исключений и зачётов. GRP/RP: 15% переведённого иностранного дохода, минимум 15 000 евро. Legal Notice 195/2026 с 1 января 2027 вводит единую программу: минимум 35 000 для Global и EU/EEA/Swiss Resident Status, 15 000 для пенсионеров и 20 000 для пенсионеров ООН; покупка жилья от 700 000 или аренда от 14 000 в год, статус на пять лет с продлением. Подходящие заявки до конца 2026 могут сохранить прежние правила до конца 2031 года."
        },
        {
          "id": "compare-3",
          "title": "Сравнение режимов в 2026 году",
          "body": "Льготы не всегда охватывают одинаковые виды дохода. Таблица предполагает выполнение условий каждого режима.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Мальта"
            ],
            "rows": [
              [
                "Иностранный доход",
                "Подходящий освобождён 20 лет",
                "Налог при получении на Мальте"
              ],
              [
                "Обычный минимум",
                "Нет фиксированного платежа 20/D",
                "5 000 € при применимости"
              ],
              [
                "GRP/RP 2026",
                "Не применяется",
                "15%, минимум 15 000 €"
              ],
              [
                "Новый ITP 2027",
                "Не применяется",
                "15%, минимум 35 000 €"
              ],
              [
                "Оформление",
                "Налоговый сертификат",
                "Специальный статус и условия"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Пример налога инвестора на Мальте",
          "body": "Без иностранных зачётов и местного дохода: налог не ниже 15% переведённого дохода и минимума соответствующей программы. Сравниваются прежняя программа 2026 и новая инвесторская 2027, не обычный non-dom.",
          "table": {
            "headers": [
              "Переведённый доход",
              "GRP/RP 2026",
              "ITP инвестор 2027"
            ],
            "rows": [
              [
                "Перевод 50 000 €",
                "15 000 €",
                "35 000 €"
              ],
              [
                "Перевод 150 000 €",
                "22 500 €",
                "35 000 €"
              ],
              [
                "Перевод 300 000 €",
                "45 000 €",
                "45 000 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "До переезда",
          "body": "Соберите документы о проживании, налогах, доходах и договорах по видам и источникам. Проверьте соглашения, удержание, обязательства компаний и страхование. ВНЖ не определяет налоговый статус. Разделяйте прежний капитал, доходы и прирост в банковских выписках. Важна квалификация переводов. Сравните новые минимумы и расходы до подачи."
        }
      ],
      "faqs": [
        {
          "question": "Останется ли минимум 15 000 в 2027?",
          "answer": "Для подходящих переходных участников да, новые инвесторы обычно платят минимум 35 000."
        },
        {
          "question": "Все ли non-dom платят 15%?",
          "answer": "Нет, специальные программы отличаются от обычного режима."
        },
        {
          "question": "Достаточно ли сменить визу?",
          "answer": "Нет, необходимо установить налоговое резидентство и выполнить условия конкретного режима."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "MTCA — Tax residence",
          "href": "https://mtca.gov.mt/personal-tax/individual/tax-residence"
        },
        {
          "label": "MTCA — Remittance guidance",
          "href": "https://cfr.gov.mt/en/inlandrevenue/legal-technical/Documents/MTCA%20GUIDELINES%20ON%20THE%20REMITTANCE%20UNDER%20THE%20INCOME%20TAX.pdf"
        },
        {
          "label": "Malta legislation — LN 195/2026",
          "href": "https://legislation.mt/eli/ln/2026/195/eng/portalpdf"
        },
        {
          "label": "PwC — ITP 2027",
          "href": "https://www.pwc.com/mt/en/publications/tax-legal/new-individual-tax-programme-rules.html"
        },
        {
          "label": "Deloitte — ITP 2026",
          "href": "https://www.deloitte.com/mt/en/services/tax/perspectives/tax-alerts/2026/individual-tax-programme-rules-2026.html"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم مالطا 2026–2027: non-dom و15% وحد 35 ألف يورو",
      "metaDescription": "تغييرات مالطا 2027: نظام التحويل وحدود 5 و15 و35 ألف يورو والفترة الانتقالية حتى 2031 وإعفاء تركيا.",
      "shortAnswer": "تميز مالطا بين non-dom العادي والبرامج الخاصة بنسبة 15%. من 1 يناير 2027 يرتفع الحد الأدنى السنوي لبرامج المستثمرين الجدد من 15 إلى 35 ألف يورو.",
      "bosphorasHelp": "تنسق Bosphoras الرحلة الاستكشافية والسكن والمواعيد مع مختصين ضريبيين مستقلين. اطلب دراسة مشروع الانتقال.",
      "sections": [
        {
          "id": "compare-1",
          "title": "تركيا: المادة 20/D",
          "body": "القانون 7582 نافذ منذ 4 يونيو 2026 ويعفي الدخل الأجنبي المؤهل للمقيمين الجدد من الأفراد لمدة 20 عاماً. يشترط عدم وجود موطن وعدم الخضوع الضريبي عادة في تركيا خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر وديسمبر. لا يوجد حد أدنى للاستثمار. لا تعفي المادة الدخل التركي أو الضرائب الأجنبية أو أرباح الشركات."
        },
        {
          "id": "compare-2",
          "title": "مالطا: التحويلات وإصلاح 2027",
          "body": "يفرض النظام العادي ضريبة على الدخل المالطي والدخل الأجنبي المستلم في مالطا؛ تبقى مكاسب رأس المال الأجنبية عادة خارج الضريبة حتى عند تحويلها. ينطبق حد 5 آلاف يورو خصوصاً عند بلوغ الدخل الأجنبي 35 ألفاً مع الاستثناءات والائتمانات. يفرض GRP/RP القديم 15% على الدخل الأجنبي المحول بحد 15 ألفاً. يبدأ النظام الموحد وفق Legal Notice 195/2026 في يناير 2027: حد 35 ألفاً لفئتي Global وEU/EEA/Swiss، و15 ألفاً للمتقاعدين و20 ألفاً لمتقاعدي الأمم المتحدة؛ شراء مسكن من 700 ألف أو إيجار سنوي من 14 ألفاً، ووضع لخمس سنوات قابل للتجديد. قد تستمر القواعد القديمة للطلبات المؤهلة حتى نهاية 2026 إلى نهاية 2031."
        },
        {
          "id": "compare-3",
          "title": "مقارنة النظامين في 2026",
          "body": "لا تشمل المزايا بالضرورة فئات الدخل نفسها. يفترض الجدول استيفاء شروط كل نظام.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "مالطا"
            ],
            "rows": [
              [
                "الدخل الأجنبي",
                "المؤهل معفى 20 عاماً",
                "ضريبة عند استلامه في مالطا"
              ],
              [
                "الحد العادي",
                "لا مبلغ مقطوع 20/D",
                "5,000 يورو عند الانطباق"
              ],
              [
                "GRP/RP 2026",
                "لا ينطبق",
                "15% بحد 15 ألفاً"
              ],
              [
                "ITP للمستثمر 2027",
                "لا ينطبق",
                "15% بحد 35 ألفاً"
              ],
              [
                "الأهلية",
                "شهادة ضريبية",
                "وضع خاص وشروط مستمرة"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "مثال ضريبة برامج المستثمرين",
          "body": "دون ائتمان ضريبي أجنبي أو دخل محلي: الضريبة هي الأعلى بين 15% من الدخل الأجنبي المحول والحد الأدنى للبرنامج. نقارن البرنامج القديم 2026 والجديد 2027 لا النظام العادي.",
          "table": {
            "headers": [
              "الدخل المحول",
              "GRP/RP 2026",
              "ITP المستثمر 2027"
            ],
            "rows": [
              [
                "تحويل 50,000 يورو",
                "15,000 يورو",
                "35,000 يورو"
              ],
              [
                "تحويل 150,000 يورو",
                "22,500 يورو",
                "35,000 يورو"
              ],
              [
                "تحويل 300,000 يورو",
                "45,000 يورو",
                "45,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "قبل الانتقال",
          "body": "احتفظ بإثباتات الإقامة والضرائب والكشوف والعقود بحسب نوع الدخل ومصدره. ادرس الاتفاقيات والاقتطاعات والتزامات الشركات والتأمين الاجتماعي. لا تحدد الإقامة الإدارية الموطن الضريبي. افصل رأس المال القديم والدخل والمكاسب في الكشوف المصرفية. تصنيف التحويلات أساسي. قارن الحدود الجديدة وتكاليف الدخول قبل الطلب."
        }
      ],
      "faqs": [
        {
          "question": "هل يبقى حد 15 ألفاً في 2027؟",
          "answer": "نعم لبعض الحالات الانتقالية، أما المستثمر الجديد فحده عادة 35 ألفاً."
        },
        {
          "question": "هل يدفع كل non-dom نسبة 15%؟",
          "answer": "لا، تختلف البرامج الخاصة عن النظام العادي."
        },
        {
          "question": "هل يكفي تغيير التأشيرة؟",
          "answer": "لا، يجب إثبات الإقامة الضريبية واستيفاء شروط النظام."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "MTCA — Tax residence",
          "href": "https://mtca.gov.mt/personal-tax/individual/tax-residence"
        },
        {
          "label": "MTCA — Remittance guidance",
          "href": "https://cfr.gov.mt/en/inlandrevenue/legal-technical/Documents/MTCA%20GUIDELINES%20ON%20THE%20REMITTANCE%20UNDER%20THE%20INCOME%20TAX.pdf"
        },
        {
          "label": "Malta legislation — LN 195/2026",
          "href": "https://legislation.mt/eli/ln/2026/195/eng/portalpdf"
        },
        {
          "label": "PwC — ITP 2027",
          "href": "https://www.pwc.com/mt/en/publications/tax-legal/new-individual-tax-programme-rules.html"
        },
        {
          "label": "Deloitte — ITP 2026",
          "href": "https://www.deloitte.com/mt/en/services/tax/perspectives/tax-alerts/2026/individual-tax-programme-rules-2026.html"
        }
      ]
    }
  },
  "turkey-vs-andorra-tax": {
    "fr": {
      "title": "Turquie ou Andorre 2026 : IRPF à 10 % et exonération des revenus étrangers",
      "metaDescription": "Comparez la résidence fiscale andorrane, les seuils IRPF 24 000 et 40 000 €, le taux de 10 % et l’exonération turque de 20 ans.",
      "shortAnswer": "Andorre impose en principe les revenus mondiaux des résidents à un taux général de 10 %, avec franchises et bonifications. La Turquie prévoit une exonération ciblée des revenus étrangers éligibles.",
      "bosphorasHelp": "Bosphoras organise votre séjour de découverte, votre recherche de logement et des rendez-vous avec des fiscalistes indépendants. Demandez une étude de votre projet de transfert.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Le régime turc : article 20/D",
          "body": "La loi 7582, en vigueur depuis le 4 juin 2026, exonère pendant 20 ans les revenus étrangers admissibles des personnes physiques nouvellement résidentes. Les trois années civiles précédentes doivent être sans domicile ni, en principe, assujettissement fiscal turc, avec exceptions pour certains revenus du capital. Le certificat est demandé avant la fin de l'année d'établissement, ou fin février suivante pour novembre et décembre. Aucun investissement minimum n'est imposé par 20/D. Les revenus turcs, impôts étrangers et bénéfices de sociétés ne sont pas exonérés par cette mesure."
        },
        {
          "id": "compare-2",
          "title": "Andorre : résidence et fiscalité générale",
          "body": "L'article 8 de la loi 5/2014 retient plus de 183 jours dans l'année civile ou le centre principal des activités ou intérêts économiques. Une présomption familiale peut s'appliquer. Le titre de séjour est distinct de la résidence fiscale. Sur certains revenus de base générale, le minimum personnel est de 24 000 € et la bonification maximale de 800 € produit un taux équivalent de 5 % sur la tranche de 24 000 à 40 000 €. Le taux général est de 10 %. Pour la base d'épargne, les premiers 3 000 € sont exonérés, sous les règles applicables. Déclaration du 1er avril au 30 septembre de l'année suivante."
        },
        {
          "id": "compare-3",
          "title": "Comparer les régimes en 2026",
          "body": "Les avantages ne portent pas toujours sur les mêmes catégories de revenu. Le tableau suppose que les conditions de chaque régime sont remplies.",
          "table": {
            "headers": [
              "Critère",
              "Turquie",
              "Andorre"
            ],
            "rows": [
              [
                "Assiette",
                "Éligible : revenus étrangers exonérés",
                "En principe revenus mondiaux"
              ],
              [
                "Durée",
                "20 ans",
                "Régime ordinaire sans terme fixe"
              ],
              [
                "Taux",
                "Revenus locaux : droit commun",
                "10 % général"
              ],
              [
                "Résidence",
                "Domicile ou séjour selon droit turc",
                "183 jours dépassés ou centre économique"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Simulation IRPF andorran sur revenu général admissible",
          "body": "Personne seule, revenu net général éligible au minimum de 24 000 € et à la bonification maximale de 800 €, sans autres réductions ni cotisations. Il ne s'agit pas d'une simulation des dividendes ou de l'épargne.",
          "table": {
            "headers": [
              "Revenu net général",
              "IRPF illustratif"
            ],
            "rows": [
              [
                "24 000 €",
                "0 €"
              ],
              [
                "40 000 €",
                "800 €"
              ],
              [
                "60 000 €",
                "2 800 €"
              ],
              [
                "100 000 €",
                "6 800 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Vérifier avant de déménager",
          "body": "Conservez les preuves de résidence, les avis fiscaux, les relevés et contrats ventilés par nature et source. Comparez les conventions, retenues à la source, obligations de société et couverture sociale. Le titre de séjour ne détermine pas le domicile fiscal. Comparez les cotisations sociales, le traitement des dividendes et des plus-values, les conventions et les obligations de séjour. Le taux général ne suffit pas à comparer tous les profils."
        }
      ],
      "faqs": [
        {
          "question": "Le taux de 10 % s'applique-t-il au revenu brut entier ?",
          "answer": "Non, l'assiette, les franchises et bonifications dépendent de la catégorie."
        },
        {
          "question": "183 jours sont-ils toujours nécessaires ?",
          "answer": "Le centre des intérêts économiques peut également établir la résidence fiscale."
        },
        {
          "question": "Le changement de visa suffit-il ?",
          "answer": "Non, il faut établir la résidence fiscale et satisfaire les conditions propres à chaque dispositif."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Govern d'Andorra — IRPF rates",
          "href": "https://www.govern.ad/ca/l/4191537"
        },
        {
          "label": "Govern d'Andorra — tax residence",
          "href": "https://www.govern.ad/ca/l/4191384"
        },
        {
          "label": "Llei 5/2014",
          "href": "https://www.portaljuridicandorra.ad/L2014005_0"
        },
        {
          "label": "Govern d'Andorra — IRPF",
          "href": "https://www.govern.ad/ca/impost-sobre-la-renda-de-les-persones-f%C3%ADsiques"
        }
      ]
    },
    "en": {
      "title": "Turkey vs Andorra 2026: 10% income tax and foreign-income relief",
      "metaDescription": "Compare Andorra’s residence rules, €24,000 and €40,000 thresholds, 10% general rate and Turkey’s 20-year exemption.",
      "shortAnswer": "Andorra generally taxes residents on worldwide income at a 10% general rate with allowances and reductions. Turkey offers targeted foreign-income relief.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing and appointments with independent tax specialists. Request a relocation assessment.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Turkey: Article 20/D",
          "body": "Law 7582 has been in force since 4 June 2026. It exempts qualifying foreign income of eligible new individual residents for 20 years. The three preceding calendar years must have no Turkish domicile or generally Turkish tax liability, subject to exceptions for certain capital income. Apply for a certificate by settlement year-end, or the following February for November and December arrivals. Article 20/D imposes no minimum investment. Turkish income, foreign taxes and company profits are not exempted by this measure."
        },
        {
          "id": "compare-2",
          "title": "Andorra: residence and general taxation",
          "body": "Article 8 of Law 5/2014 tests more than 183 days in a calendar year or the main centre of economic activities or interests. A family presumption can apply. Immigration residence is separate. For certain general-base income the €24,000 personal allowance and maximum €800 rebate create an effective 5% band between €24,000 and €40,000. The general rate is 10%. The savings base has a €3,000 exempt amount under applicable rules. Returns are filed 1 April to 30 September of the following year."
        },
        {
          "id": "compare-3",
          "title": "Compare regimes in 2026",
          "body": "Benefits do not necessarily cover the same income categories. The table assumes eligibility for each respective regime.",
          "table": {
            "headers": [
              "Criterion",
              "Turkey",
              "Andorra"
            ],
            "rows": [
              [
                "Scope",
                "Eligible foreign income exempt",
                "Generally worldwide income"
              ],
              [
                "Duration",
                "20 years",
                "Ordinary regime without fixed term"
              ],
              [
                "Rate",
                "Domestic income: ordinary rules",
                "10% general"
              ],
              [
                "Residence",
                "Domicile or presence under Turkish law",
                "Over 183 days or economic centre"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Illustrative Andorran general income tax",
          "body": "Single person with net general income eligible for the €24,000 allowance and €800 maximum rebate, no other deductions or contributions. Not a dividend or savings-income model.",
          "table": {
            "headers": [
              "Net general income",
              "Illustrative IRPF"
            ],
            "rows": [
              [
                "€24,000",
                "€0"
              ],
              [
                "€40,000",
                "€800"
              ],
              [
                "€60,000",
                "€2,800"
              ],
              [
                "€100,000",
                "€6,800"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "Before relocating",
          "body": "Retain residence evidence, tax assessments, statements and contracts classified by income type and source. Review treaties, withholding, corporate obligations and social insurance. Immigration residence does not establish tax domicile. Compare social contributions, dividends, gains, treaties and residence requirements. The general rate does not determine every investor's total liability."
        }
      ],
      "faqs": [
        {
          "question": "Does 10% apply to all gross income?",
          "answer": "No, the base, allowances and rebates depend on income type."
        },
        {
          "question": "Are 183 days always required?",
          "answer": "The centre of economic interests can also establish tax residence."
        },
        {
          "question": "Is a new visa sufficient?",
          "answer": "No; establish tax residence and satisfy the regime-specific conditions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Govern d'Andorra — IRPF rates",
          "href": "https://www.govern.ad/ca/l/4191537"
        },
        {
          "label": "Govern d'Andorra — tax residence",
          "href": "https://www.govern.ad/ca/l/4191384"
        },
        {
          "label": "Llei 5/2014",
          "href": "https://www.portaljuridicandorra.ad/L2014005_0"
        },
        {
          "label": "Govern d'Andorra — IRPF",
          "href": "https://www.govern.ad/ca/impost-sobre-la-renda-de-les-persones-f%C3%ADsiques"
        }
      ]
    },
    "ru": {
      "title": "Турция или Андорра 2026: IRPF 10% и иностранные доходы",
      "metaDescription": "Сравните резидентство Андорры, пороги 24 000 и 40 000 евро, общую ставку 10% и льготу Турции на 20 лет.",
      "shortAnswer": "Андорра обычно облагает мировые доходы резидентов по общей ставке 10% с вычетами и льготами. Турция освобождает подходящий иностранный доход.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, подбор жилья и встречи с независимыми налоговыми специалистами. Запросите оценку переезда.",
      "sections": [
        {
          "id": "compare-1",
          "title": "Турция: статья 20/D",
          "body": "Закон № 7582 действует с 4 июня 2026 года и освобождает подходящие иностранные доходы новых резидентов-физлиц на 20 лет. В три предыдущих календарных года не должно быть места жительства и, как правило, налоговых обязательств в Турции, кроме отдельных доходов капитала. Сертификат запрашивается до конца года поселения, а при поселении в ноябре или декабре — до конца следующего февраля. Минимальная инвестиция не требуется. Турецкие доходы, иностранные налоги и прибыль компаний не освобождаются этой нормой."
        },
        {
          "id": "compare-2",
          "title": "Андорра: резидентство и налог",
          "body": "Статья 8 закона 5/2014 учитывает более 183 дней в календарном году или главный центр экономической деятельности и интересов. Возможна семейная презумпция. Миграционный статус отличается от налогового. Для отдельных общих доходов минимум 24 000 евро и максимальная скидка 800 евро дают эквивалентную ставку 5% на часть от 24 000 до 40 000. Общая ставка 10%. Для сберегательной базы первые 3 000 евро освобождены по применимым правилам. Декларация с 1 апреля по 30 сентября следующего года."
        },
        {
          "id": "compare-3",
          "title": "Сравнение режимов в 2026 году",
          "body": "Льготы не всегда охватывают одинаковые виды дохода. Таблица предполагает выполнение условий каждого режима.",
          "table": {
            "headers": [
              "Критерий",
              "Турция",
              "Андорра"
            ],
            "rows": [
              [
                "Охват",
                "Подходящие зарубежные освобождены",
                "Обычно мировой доход"
              ],
              [
                "Срок",
                "20 лет",
                "Общий режим без срока"
              ],
              [
                "Ставка",
                "Местные доходы по общим правилам",
                "Общая 10%"
              ],
              [
                "Резидентство",
                "Место жительства или пребывание",
                "Более 183 дней или экономический центр"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "Пример IRPF на общий доход",
          "body": "Один налогоплательщик, чистый общий доход с минимумом 24 000 евро и скидкой до 800 евро, без иных вычетов и взносов. Это не расчёт дивидендов или сбережений.",
          "table": {
            "headers": [
              "Чистый общий доход",
              "Пример IRPF"
            ],
            "rows": [
              [
                "24 000 €",
                "0 €"
              ],
              [
                "40 000 €",
                "800 €"
              ],
              [
                "60 000 €",
                "2 800 €"
              ],
              [
                "100 000 €",
                "6 800 €"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "До переезда",
          "body": "Соберите документы о проживании, налогах, доходах и договорах по видам и источникам. Проверьте соглашения, удержание, обязательства компаний и страхование. ВНЖ не определяет налоговый статус. Сравните взносы, дивиденды, прирост, соглашения и условия проживания. Общая ставка не определяет налог любого инвестора."
        }
      ],
      "faqs": [
        {
          "question": "10% начисляются на весь валовой доход?",
          "answer": "Нет, база и льготы зависят от категории."
        },
        {
          "question": "Всегда ли необходимо 183 дня?",
          "answer": "Центр экономических интересов также может установить резидентство."
        },
        {
          "question": "Достаточно ли сменить визу?",
          "answer": "Нет, необходимо установить налоговое резидентство и выполнить условия конкретного режима."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Govern d'Andorra — IRPF rates",
          "href": "https://www.govern.ad/ca/l/4191537"
        },
        {
          "label": "Govern d'Andorra — tax residence",
          "href": "https://www.govern.ad/ca/l/4191384"
        },
        {
          "label": "Llei 5/2014",
          "href": "https://www.portaljuridicandorra.ad/L2014005_0"
        },
        {
          "label": "Govern d'Andorra — IRPF",
          "href": "https://www.govern.ad/ca/impost-sobre-la-renda-de-les-persones-f%C3%ADsiques"
        }
      ]
    },
    "ar": {
      "title": "تركيا أم أندورا 2026: ضريبة 10% وإعفاء الدخل الأجنبي",
      "metaDescription": "قارن الإقامة الضريبية في أندورا وحدي 24 و40 ألف يورو والمعدل العام 10% وإعفاء تركيا لعشرين عاماً.",
      "shortAnswer": "تفرض أندورا عادة ضريبة على الدخل العالمي للمقيم بنسبة عامة 10% مع إعفاءات وتخفيضات، بينما تعفي تركيا الدخل الأجنبي المؤهل.",
      "bosphorasHelp": "تنسق Bosphoras الرحلة الاستكشافية والسكن والمواعيد مع مختصين ضريبيين مستقلين. اطلب دراسة مشروع الانتقال.",
      "sections": [
        {
          "id": "compare-1",
          "title": "تركيا: المادة 20/D",
          "body": "القانون 7582 نافذ منذ 4 يونيو 2026 ويعفي الدخل الأجنبي المؤهل للمقيمين الجدد من الأفراد لمدة 20 عاماً. يشترط عدم وجود موطن وعدم الخضوع الضريبي عادة في تركيا خلال السنوات التقويمية الثلاث السابقة مع استثناءات لبعض دخل رأس المال. تقدم الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر وديسمبر. لا يوجد حد أدنى للاستثمار. لا تعفي المادة الدخل التركي أو الضرائب الأجنبية أو أرباح الشركات."
        },
        {
          "id": "compare-2",
          "title": "أندورا: الإقامة والضريبة العامة",
          "body": "تدرس المادة 8 من القانون 5/2014 البقاء أكثر من 183 يوماً خلال السنة التقويمية أو المركز الرئيسي للنشاط والمصالح الاقتصادية. قد ينطبق افتراض عائلي. الإقامة الإدارية منفصلة. لبعض الدخل العام إعفاء شخصي 24 ألف يورو وتخفيض أقصاه 800 يورو ينتج معدل 5% على الجزء بين 24 و40 ألفاً. المعدل العام 10%. يعفى أول 3 آلاف يورو من وعاء الادخار وفق القواعد. يقدم الإقرار بين 1 أبريل و30 سبتمبر من السنة التالية."
        },
        {
          "id": "compare-3",
          "title": "مقارنة النظامين في 2026",
          "body": "لا تشمل المزايا بالضرورة فئات الدخل نفسها. يفترض الجدول استيفاء شروط كل نظام.",
          "table": {
            "headers": [
              "المعيار",
              "تركيا",
              "أندورا"
            ],
            "rows": [
              [
                "النطاق",
                "الدخل الأجنبي المؤهل معفى",
                "الدخل العالمي عادة"
              ],
              [
                "المدة",
                "20 عاماً",
                "نظام عادي بلا مدة ثابتة"
              ],
              [
                "المعدل",
                "الدخل المحلي وفق القواعد العامة",
                "10% عام"
              ],
              [
                "الإقامة",
                "الموطن أو البقاء وفق القانون التركي",
                "أكثر من 183 يوماً أو مركز المصالح"
              ]
            ]
          }
        },
        {
          "id": "compare-4",
          "title": "مثال ضريبة الدخل العام في أندورا",
          "body": "فرد بدخل عام صاف مؤهل لإعفاء 24 ألف يورو وتخفيض أقصاه 800 دون خصومات أو اشتراكات أخرى. لا يمثل المثال التوزيعات أو دخل الادخار.",
          "table": {
            "headers": [
              "الدخل العام الصافي",
              "ضريبة توضيحية"
            ],
            "rows": [
              [
                "24,000 يورو",
                "0 يورو"
              ],
              [
                "40,000 يورو",
                "800 يورو"
              ],
              [
                "60,000 يورو",
                "2,800 يورو"
              ],
              [
                "100,000 يورو",
                "6,800 يورو"
              ]
            ]
          }
        },
        {
          "id": "compare-5",
          "title": "قبل الانتقال",
          "body": "احتفظ بإثباتات الإقامة والضرائب والكشوف والعقود بحسب نوع الدخل ومصدره. ادرس الاتفاقيات والاقتطاعات والتزامات الشركات والتأمين الاجتماعي. لا تحدد الإقامة الإدارية الموطن الضريبي. قارن الاشتراكات والتوزيعات والمكاسب والاتفاقيات وشروط الإقامة. لا يحدد المعدل العام ضريبة كل مستثمر."
        }
      ],
      "faqs": [
        {
          "question": "هل يطبق 10% على كل الدخل الإجمالي؟",
          "answer": "لا، يختلف الوعاء والإعفاءات بحسب الفئة."
        },
        {
          "question": "هل يلزم دائماً 183 يوماً؟",
          "answer": "قد يثبت مركز المصالح الاقتصادية الإقامة الضريبية أيضاً."
        },
        {
          "question": "هل يكفي تغيير التأشيرة؟",
          "answer": "لا، يجب إثبات الإقامة الضريبية واستيفاء شروط النظام."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://cdn.gib.gov.tr/api/gibportal-file/file/getFile?objectKey=DUYURU%2FUNIVERSAL%2F2026%2F7582SayiliKanun.pdf"
        },
        {
          "label": "GİB — 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Govern d'Andorra — IRPF rates",
          "href": "https://www.govern.ad/ca/l/4191537"
        },
        {
          "label": "Govern d'Andorra — tax residence",
          "href": "https://www.govern.ad/ca/l/4191384"
        },
        {
          "label": "Llei 5/2014",
          "href": "https://www.portaljuridicandorra.ad/L2014005_0"
        },
        {
          "label": "Govern d'Andorra — IRPF",
          "href": "https://www.govern.ad/ca/impost-sobre-la-renda-de-les-persones-f%C3%ADsiques"
        }
      ]
    }
  }
};
