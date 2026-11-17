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
  }
};
