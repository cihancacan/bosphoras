import type { Locale } from '@/lib/i18n';
import type { EditorialGuide } from './highPotentialEditorialGuides';
export const personalWealthEditorialGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "foreign-dividends": {
    "fr": {
      "title": "Dividendes étrangers en Turquie 2026 : exonération et retenues à la source",
      "metaDescription": "Dividendes internationaux : exonération turque de 20 ans, retenues étrangères, conventions et calcul du revenu net sur 100 000 €.",
      "shortAnswer": "Les dividendes de sociétés étrangères peuvent être exonérés en Turquie pour une personne physique admise au régime 20/D. L'impôt du pays de la société distributrice peut subsister.",
      "bosphorasHelp": "Bosphoras coordonne l’étude de votre installation, la sélection du logement et les rendez-vous avec des fiscalistes indépendants. Demandez une analyse personnalisée avant de transférer votre domicile ou vos actifs.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Identifier le véritable revenu",
          "body": "Distinguez dividendes d'actions, distribution de fonds, rémunération de dirigeant et remboursement de capital. La résidence de la société et la qualification juridique déterminent la source, et non la devise ou le lieu du compte. Les dividendes d'une société turque sont des revenus locaux. Si les distributions passent par une holding, étudiez chaque étage et les règles CFC séparément."
        },
        {
          "id": "personal-2",
          "title": "Les conditions de l'exonération 20/D",
          "body": "La loi 7582 du 4 juin 2026 s'applique aux personnes physiques établies fiscalement en Turquie à compter du 1er janvier 2026, sans domicile ni en principe assujettissement turc durant les trois années civiles précédentes. Certains revenus immobiliers, mobiliers ou gains de cession turcs antérieurs sont expressément exceptés. Demandez le certificat avant la fin de l'année d'installation, ou avant fin février suivante si l'établissement intervient en novembre ou décembre. L'exonération des revenus étrangers éligibles dure vingt ans ; elle ne couvre pas les revenus turcs ni les sociétés."
        },
        {
          "id": "personal-3",
          "title": "Simulation de 100 000 € de dividendes étrangers",
          "body": "Hypothèse : 100 000 € de dividendes bruts admissibles à 20/D, avec trois retenues étrangères fictives. Les pourcentages ne représentent pas des taux applicables à un pays particulier. L'exonération turque ne rembourse pas la retenue étrangère.",
          "table": {
            "headers": [
              "Retenue hypothétique",
              "Net disponible"
            ],
            "rows": [
              [
                "0 %",
                "100 000 €"
              ],
              [
                "15 %",
                "85 000 €"
              ],
              [
                "25 %",
                "75 000 €"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Conventions et preuves",
          "body": "Vérifiez l'article dividendes de la convention applicable, la résidence conventionnelle et le bénéficiaire effectif. Conservez procès-verbal de distribution, justificatifs de paiement, relevés du courtier et attestations de retenue. Aucune déclaration turque de revenu exonéré n'est requise, même en cas de déclaration d'autres revenus ; les impôts étrangers sur ces flux ne s'imputent pas sur les revenus turcs."
        }
      ],
      "faqs": [
        {
          "question": "Le compte doit-il être étranger ?",
          "answer": "Non, le compte de réception ne détermine pas la source."
        },
        {
          "question": "La Turquie rembourse-t-elle les retenues de source ?",
          "answer": "Non, le régime 20/D ne prévoit pas leur remboursement."
        },
        {
          "question": "Les sociétés bénéficient-elles de 20/D ?",
          "answer": "Non, la fiscalité des participations des sociétés relève de dispositions distinctes."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    },
    "en": {
      "title": "Foreign dividends in Turkey 2026: exemption and withholding tax",
      "metaDescription": "Foreign dividends, 20-year Turkish relief, treaty withholding and worked net-income scenarios on €100,000.",
      "shortAnswer": "Foreign-company dividends may qualify for Article 20/D for eligible individuals. Tax in the distributing company's country may remain.",
      "bosphorasHelp": "Bosphoras coordinates relocation planning, housing selection and appointments with independent tax specialists. Request a personal assessment before transferring residence or assets.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Identify the income",
          "body": "Distinguish equity dividends, fund distributions, director remuneration and capital repayments. Corporate residence and legal classification determine the source, not currency or receiving account. Turkish company dividends are domestic income. Holding structures require separate review of each layer and CFC rules."
        },
        {
          "id": "personal-2",
          "title": "Article 20/D eligibility",
          "body": "Law 7582 of 4 June 2026 covers individuals becoming Turkish tax residents from 1 January 2026, with no Turkish domicile or generally Turkish tax liability in the preceding three calendar years. Certain prior Turkish property income, investment income and disposal gains are excepted. Apply for the certificate by settlement year-end, or the following February for November or December settlement. Qualifying foreign income is exempt for twenty years; Turkish income and corporations are not covered."
        },
        {
          "id": "personal-3",
          "title": "€100,000 dividend illustration",
          "body": "Assume €100,000 gross eligible dividends with three hypothetical source withholding rates. These rates are not quotations for specific countries. Turkish relief does not refund foreign withholding.",
          "table": {
            "headers": [
              "Hypothetical withholding",
              "Net receipt"
            ],
            "rows": [
              [
                "0%",
                "€100,000"
              ],
              [
                "15%",
                "€85,000"
              ],
              [
                "25%",
                "€75,000"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Treaties and evidence",
          "body": "Check the relevant treaty dividend article, treaty residence and beneficial ownership. Keep distribution resolutions, payment records, broker statements and withholding certificates. Exempt income is excluded from Turkish annual returns even when other income is declared; foreign tax on exempt income cannot offset other Turkish income."
        }
      ],
      "faqs": [
        {
          "question": "Must the account be abroad?",
          "answer": "No, the receiving account does not establish source."
        },
        {
          "question": "Does Turkey refund foreign withholding?",
          "answer": "No, Article 20/D does not provide such refunds."
        },
        {
          "question": "Do companies qualify for 20/D?",
          "answer": "No, corporate participation taxation follows separate provisions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    },
    "ru": {
      "title": "Иностранные дивиденды в Турции 2026: льгота и удержание налога",
      "metaDescription": "Зарубежные дивиденды, льгота на 20 лет, договоры и расчёт чистого дохода на примере 100 000 евро.",
      "shortAnswer": "Дивиденды иностранных компаний могут освобождаться по статье 20/D у подходящего физлица. Налог в стране компании может сохраняться.",
      "bosphorasHelp": "Bosphoras помогает подготовить переезд, подобрать жильё и организовать встречи с независимыми налоговыми специалистами. Запросите индивидуальную оценку до переноса резидентства или активов.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Определение дохода",
          "body": "Различайте дивиденды акций, распределение фондов, вознаграждение директора и возврат капитала. Источник зависит от резидентства компании и правовой квалификации, а не валюты или счёта. Дивиденды турецких компаний — местные доходы. Холдинг требует оценки каждого уровня и правил КИК."
        },
        {
          "id": "personal-2",
          "title": "Условия статьи 20/D",
          "body": "Закон № 7582 от 4 июня 2026 года охватывает физических лиц, ставших турецкими налоговыми резидентами с 1 января 2026 года, без места жительства и, как правило, налоговых обязательств в Турции в три предыдущих календарных года. Для отдельных прежних доходов от недвижимости, капитала и прироста предусмотрены исключения. Заявление на сертификат подают до конца года поселения либо до конца следующего февраля при поселении в ноябре или декабре. Подходящие зарубежные доходы освобождены на двадцать лет; турецкие доходы и компании не охвачены."
        },
        {
          "id": "personal-3",
          "title": "Пример дивидендов 100 000 евро",
          "body": "Предполагаются 100 000 евро подходящих валовых дивидендов и три условные ставки удержания. Они не относятся к конкретной стране. Турецкая льгота не возвращает иностранное удержание.",
          "table": {
            "headers": [
              "Условное удержание",
              "Чистый доход"
            ],
            "rows": [
              [
                "0%",
                "100 000 €"
              ],
              [
                "15%",
                "85 000 €"
              ],
              [
                "25%",
                "75 000 €"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Соглашения и документы",
          "body": "Проверьте статью о дивидендах, договорное резидентство и действительного получателя. Храните решения о распределении, платежи, выписки брокера и справки об удержании. Освобождённый доход не включается в турецкую декларацию даже при декларировании других доходов; иностранный налог не засчитывается против иных турецких доходов."
        }
      ],
      "faqs": [
        {
          "question": "Нужен ли зарубежный счёт?",
          "answer": "Нет, счёт не определяет источник."
        },
        {
          "question": "Возвращает ли Турция удержанный налог?",
          "answer": "Нет, статья 20/D этого не предусматривает."
        },
        {
          "question": "Применима ли статья 20/D к компаниям?",
          "answer": "Нет, для корпоративных участий действуют другие нормы."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    },
    "ar": {
      "title": "ضرائب التوزيعات الأجنبية في تركيا 2026: الإعفاء والاقتطاع",
      "metaDescription": "التوزيعات الدولية وإعفاء عشرين عاماً والاتفاقيات وحساب صافي دخل 100 ألف يورو.",
      "shortAnswer": "قد تعفى توزيعات الشركات الأجنبية للفرد المؤهل وفق المادة 20/D مع بقاء ضريبة دولة الشركة الموزعة.",
      "bosphorasHelp": "تنسق Bosphoras دراسة الانتقال واختيار السكن والمواعيد مع متخصصين ضريبيين مستقلين. اطلب دراسة فردية قبل نقل الموطن أو الأصول.",
      "sections": [
        {
          "id": "personal-1",
          "title": "تحديد الدخل الحقيقي",
          "body": "ميز توزيعات الأسهم والصناديق وأجر المدير ورد رأس المال. يحدد المصدر بإقامة الشركة والتصنيف القانوني لا بالعملة أو الحساب. توزيعات الشركة التركية دخل محلي. تدرس كل طبقة في القابضة وقواعد الشركات الأجنبية الخاضعة للسيطرة منفصلة."
        },
        {
          "id": "personal-2",
          "title": "شروط المادة 20/D",
          "body": "يشمل القانون 7582 بتاريخ 4 يونيو 2026 الأفراد المستقرين ضريبياً في تركيا منذ 1 يناير 2026 دون موطن أو خضوع ضريبي تركي عادة خلال السنوات التقويمية الثلاث السابقة. تستثنى بعض دخول العقار ورأس المال ومكاسب البيع التركية السابقة. يقدم طلب الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر أو ديسمبر. يعفى الدخل الأجنبي المؤهل عشرين عاماً؛ ولا يشمل الدخل التركي أو الشركات."
        },
        {
          "id": "personal-3",
          "title": "مثال توزيعات 100 ألف يورو",
          "body": "نفترض 100 ألف يورو من التوزيعات المؤهلة وثلاث نسب اقتطاع افتراضية لا تخص دولة محددة. لا يعيد الإعفاء التركي الضريبة الأجنبية.",
          "table": {
            "headers": [
              "اقتطاع مفترض",
              "الصافي"
            ],
            "rows": [
              [
                "0%",
                "100,000 يورو"
              ],
              [
                "15%",
                "85,000 يورو"
              ],
              [
                "25%",
                "75,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "الاتفاقيات والإثبات",
          "body": "راجع مادة التوزيعات والإقامة وفق الاتفاقية والمستفيد الفعلي. احتفظ بقرارات التوزيع والدفع وكشوف الوسيط وشهادات الاقتطاع. لا يدرج الدخل المعفى بالإقرار التركي حتى عند التصريح بدخل آخر؛ ولا تخصم ضريبته الأجنبية من ضرائب الدخل التركي الآخر."
        }
      ],
      "faqs": [
        {
          "question": "هل يلزم حساب أجنبي؟",
          "answer": "لا، لا يحدد حساب الاستلام المصدر."
        },
        {
          "question": "هل تعيد تركيا الاقتطاع الأجنبي؟",
          "answer": "لا توفر المادة 20/D ذلك."
        },
        {
          "question": "هل تشمل المادة الشركات؟",
          "answer": "لا، تخضع المشاركات المؤسسية لقواعد أخرى."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    }
  },
  "foreign-capital-gains": {
    "fr": {
      "title": "Plus-values étrangères en Turquie 2026 : actions, immobilier et cession",
      "metaDescription": "Fiscalité des plus-values étrangères : actions, biens immobiliers, prix de revient, retenue du pays de source et exonération 20/D.",
      "shortAnswer": "Une plus-value étrangère peut relever de l'exonération 20/D si le gain est juridiquement étranger et admissible. Le pays de situation de l'actif peut conserver un droit d'imposition.",
      "bosphorasHelp": "Bosphoras coordonne l’étude de votre installation, la sélection du logement et les rendez-vous avec des fiscalistes indépendants. Demandez une analyse personnalisée avant de transférer votre domicile ou vos actifs.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Actions, immobilier et activité professionnelle",
          "body": "Comparez la vente de titres étrangers détenus personnellement avec la vente d'un immeuble étranger ou d'un actif professionnel. La convention peut réserver ou partager le droit d'imposer, notamment pour l'immobilier. La fréquence et l'organisation des opérations peuvent modifier la qualification. Une plateforme étrangère ne suffit pas à établir la source. Un transfert de capital sans vente n'est pas une plus-value en lui-même."
        },
        {
          "id": "personal-2",
          "title": "Les conditions de l'exonération 20/D",
          "body": "La loi 7582 du 4 juin 2026 s'applique aux personnes physiques établies fiscalement en Turquie à compter du 1er janvier 2026, sans domicile ni en principe assujettissement turc durant les trois années civiles précédentes. Certains revenus immobiliers, mobiliers ou gains de cession turcs antérieurs sont expressément exceptés. Demandez le certificat avant la fin de l'année d'installation, ou avant fin février suivante si l'établissement intervient en novembre ou décembre. L'exonération des revenus étrangers éligibles dure vingt ans ; elle ne couvre pas les revenus turcs ni les sociétés."
        },
        {
          "id": "personal-3",
          "title": "Exemple de gain économique sur une cession",
          "body": "Hypothèse : coût d'achat 200 000 €, prix de vente 350 000 €, frais réels 10 000 €. Le gain économique avant impôt est de 140 000 €. La base fiscale peut différer en raison des règles de coût, indexation, change et frais déductibles.",
          "table": {
            "headers": [
              "Élément",
              "Montant"
            ],
            "rows": [
              [
                "Coût d'achat",
                "200 000 €"
              ],
              [
                "Prix de vente",
                "350 000 €"
              ],
              [
                "Frais",
                "10 000 €"
              ],
              [
                "Gain économique",
                "140 000 €"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Calendrier de cession et dossier",
          "body": "Reconstituez le coût historique, la durée de détention, les frais et les cours de change. Examinez les plus-values en report, l'exit tax du pays de départ et les droits d'imposition avant la cession. Les charges ou pertes relatives aux gains exonérés ne diminuent pas les autres revenus imposables turcs. Ne présumez pas qu'une vente antérieure au transfert devient un gain exonéré lorsqu'elle est payée plus tard."
        }
      ],
      "faqs": [
        {
          "question": "Un gain non réalisé est-il identique à un gain de cession ?",
          "answer": "Non, identifiez le fait générateur selon le droit applicable."
        },
        {
          "question": "Les gains immobiliers étrangers sont-ils toujours sans impôt ?",
          "answer": "Non, la juridiction du bien peut imposer la cession."
        },
        {
          "question": "Les cryptomonnaies sont-elles automatiquement couvertes ?",
          "answer": "Non, leur qualification et leur source nécessitent une étude spécifique."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    },
    "en": {
      "title": "Foreign capital gains in Turkey 2026: shares, property and disposals",
      "metaDescription": "Foreign capital gains: securities, property, acquisition cost, source-country tax and Article 20/D relief.",
      "shortAnswer": "Foreign gains may qualify for Article 20/D if legally foreign-source and eligible. The asset jurisdiction may retain taxation rights.",
      "bosphorasHelp": "Bosphoras coordinates relocation planning, housing selection and appointments with independent tax specialists. Request a personal assessment before transferring residence or assets.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Shares, real estate and business activity",
          "body": "Distinguish personally held foreign shares, foreign property and business asset disposals. Treaties can allocate or share taxing rights, especially for property. Transaction frequency and organisation can affect classification. An overseas platform alone does not determine source. Moving capital without a disposal is not itself a capital gain."
        },
        {
          "id": "personal-2",
          "title": "Article 20/D eligibility",
          "body": "Law 7582 of 4 June 2026 covers individuals becoming Turkish tax residents from 1 January 2026, with no Turkish domicile or generally Turkish tax liability in the preceding three calendar years. Certain prior Turkish property income, investment income and disposal gains are excepted. Apply for the certificate by settlement year-end, or the following February for November or December settlement. Qualifying foreign income is exempt for twenty years; Turkish income and corporations are not covered."
        },
        {
          "id": "personal-3",
          "title": "Economic disposal example",
          "body": "Assume acquisition cost €200,000, proceeds €350,000 and actual fees €10,000. Economic gain before tax is €140,000. Taxable gain may differ due to cost basis, indexation, exchange and allowable expense rules.",
          "table": {
            "headers": [
              "Item",
              "Amount"
            ],
            "rows": [
              [
                "Acquisition cost",
                "€200,000"
              ],
              [
                "Sale proceeds",
                "€350,000"
              ],
              [
                "Fees",
                "€10,000"
              ],
              [
                "Economic gain",
                "€140,000"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Timing and records",
          "body": "Reconstruct historic cost, holding period, fees and exchange rates. Review deferred gains, departure-country exit tax and taxing rights before disposal. Expenses or losses relating to exempt gains do not offset other taxable Turkish income. Do not assume proceeds from a pre-relocation sale become exempt when received later."
        }
      ],
      "faqs": [
        {
          "question": "Are unrealised gains equivalent to disposal gains?",
          "answer": "No; identify the applicable recognition event."
        },
        {
          "question": "Are foreign property gains always tax-free?",
          "answer": "No, the property jurisdiction may tax them."
        },
        {
          "question": "Does crypto automatically qualify?",
          "answer": "No, classification and source require specific analysis."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    },
    "ru": {
      "title": "Иностранный прирост капитала в Турции 2026: акции и недвижимость",
      "metaDescription": "Налогообложение прироста за рубежом: ценные бумаги, недвижимость, стоимость приобретения и статья 20/D.",
      "shortAnswer": "Подходящий зарубежный прирост может освобождаться по 20/D, если юридический источник иностранный. Страна актива может сохранить право налогообложения.",
      "bosphorasHelp": "Bosphoras помогает подготовить переезд, подобрать жильё и организовать встречи с независимыми налоговыми специалистами. Запросите индивидуальную оценку до переноса резидентства или активов.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Акции, недвижимость и бизнес",
          "body": "Различайте продажу личных иностранных акций, зарубежной недвижимости и активов бизнеса. Соглашения распределяют налоговые права, особенно на недвижимость. Частота и организация сделок влияют на квалификацию. Иностранная платформа сама по себе не определяет источник. Перевод капитала без продажи не является приростом."
        },
        {
          "id": "personal-2",
          "title": "Условия статьи 20/D",
          "body": "Закон № 7582 от 4 июня 2026 года охватывает физических лиц, ставших турецкими налоговыми резидентами с 1 января 2026 года, без места жительства и, как правило, налоговых обязательств в Турции в три предыдущих календарных года. Для отдельных прежних доходов от недвижимости, капитала и прироста предусмотрены исключения. Заявление на сертификат подают до конца года поселения либо до конца следующего февраля при поселении в ноябре или декабре. Подходящие зарубежные доходы освобождены на двадцать лет; турецкие доходы и компании не охвачены."
        },
        {
          "id": "personal-3",
          "title": "Пример экономической прибыли",
          "body": "Условная покупка за 200 000 евро, продажа за 350 000 и фактические расходы 10 000. Экономическая прибыль до налога — 140 000 евро. Налоговая база может отличаться из-за стоимости, индексации, курсов и вычетов.",
          "table": {
            "headers": [
              "Статья",
              "Сумма"
            ],
            "rows": [
              [
                "Покупка",
                "200 000 €"
              ],
              [
                "Продажа",
                "350 000 €"
              ],
              [
                "Расходы",
                "10 000 €"
              ],
              [
                "Экономическая прибыль",
                "140 000 €"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Сроки и документы",
          "body": "Восстановите историческую стоимость, срок владения, расходы и курсы. До продажи проверьте отложенный прирост, exit tax и налоговые права. Расходы и убытки по освобождённым доходам не уменьшают другие турецкие доходы. Оплата после переезда не означает автоматическую льготу для прежней продажи."
        }
      ],
      "faqs": [
        {
          "question": "Равен ли нереализованный прирост прибыли от продажи?",
          "answer": "Нет, важен момент признания по закону."
        },
        {
          "question": "Всегда ли зарубежная недвижимость продаётся без налога?",
          "answer": "Нет, страна объекта может облагать продажу."
        },
        {
          "question": "Криптовалюта автоматически освобождена?",
          "answer": "Нет, требуется отдельная оценка квалификации и источника."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    },
    "ar": {
      "title": "مكاسب رأس المال الأجنبية في تركيا 2026: الأسهم والعقارات",
      "metaDescription": "ضرائب بيع الأسهم والعقارات الأجنبية وتكلفة الشراء وضريبة المصدر وإعفاء المادة 20/D.",
      "shortAnswer": "قد يعفى المكسب الأجنبي المؤهل وفق 20/D عند ثبوت مصدره القانوني الأجنبي. قد تحتفظ دولة الأصل بحق فرض الضريبة.",
      "bosphorasHelp": "تنسق Bosphoras دراسة الانتقال واختيار السكن والمواعيد مع متخصصين ضريبيين مستقلين. اطلب دراسة فردية قبل نقل الموطن أو الأصول.",
      "sections": [
        {
          "id": "personal-1",
          "title": "الأسهم والعقار والنشاط التجاري",
          "body": "ميز بيع الأسهم الأجنبية الشخصية والعقار الأجنبي وأصول النشاط. توزع الاتفاقيات الحقوق الضريبية خصوصاً للعقار. قد يغير تواتر العمليات وتنظيمها التصنيف. لا تكفي منصة أجنبية لإثبات المصدر. تحويل رأس المال دون بيع ليس مكسباً بذاته."
        },
        {
          "id": "personal-2",
          "title": "شروط المادة 20/D",
          "body": "يشمل القانون 7582 بتاريخ 4 يونيو 2026 الأفراد المستقرين ضريبياً في تركيا منذ 1 يناير 2026 دون موطن أو خضوع ضريبي تركي عادة خلال السنوات التقويمية الثلاث السابقة. تستثنى بعض دخول العقار ورأس المال ومكاسب البيع التركية السابقة. يقدم طلب الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر أو ديسمبر. يعفى الدخل الأجنبي المؤهل عشرين عاماً؛ ولا يشمل الدخل التركي أو الشركات."
        },
        {
          "id": "personal-3",
          "title": "مثال ربح اقتصادي من البيع",
          "body": "نفترض تكلفة شراء 200 ألف يورو وسعر بيع 350 ألفاً ورسوم فعلية 10 آلاف. الربح الاقتصادي قبل الضريبة 140 ألفاً. قد يختلف الوعاء وفق قواعد التكلفة والفهرسة والصرف والمصاريف.",
          "table": {
            "headers": [
              "البند",
              "المبلغ"
            ],
            "rows": [
              [
                "تكلفة الشراء",
                "200,000 يورو"
              ],
              [
                "سعر البيع",
                "350,000 يورو"
              ],
              [
                "الرسوم",
                "10,000 يورو"
              ],
              [
                "الربح الاقتصادي",
                "140,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "التوقيت والوثائق",
          "body": "أعد بناء التكلفة التاريخية ومدة الحيازة والرسوم والصرف. راجع المكاسب المؤجلة وضريبة الخروج والحقوق الضريبية قبل البيع. لا تخصم خسائر ومصاريف المكاسب المعفاة من الدخول التركية الأخرى. لا يعد دفع ثمن بيع سابق بعد الانتقال إعفاءً تلقائياً."
        }
      ],
      "faqs": [
        {
          "question": "هل المكسب غير المحقق مثل مكسب البيع؟",
          "answer": "لا، يحدد الحدث المنشئ وفق القانون."
        },
        {
          "question": "هل بيع العقار الأجنبي معفى دائماً؟",
          "answer": "لا، قد تفرض دولة العقار الضريبة."
        },
        {
          "question": "هل تعفى العملات الرقمية تلقائياً؟",
          "answer": "لا، تحتاج إلى دراسة التصنيف والمصدر."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    }
  },
  "inheritance-one-percent": {
    "fr": {
      "title": "Héritage en Turquie 2026 : taux de 1 %, barème et déclaration",
      "metaDescription": "Succession turque : nouveau taux de 1 % sous conditions, abattements 2026, barème jusqu’à 10 % et délais de déclaration.",
      "shortAnswer": "La loi 7582 prévoit 1 % pour les transmissions successorales admissibles pendant la période 20/D. Ce taux ne vise pas toutes les donations ni tous les investisseurs.",
      "bosphorasHelp": "Bosphoras coordonne l’étude de votre installation, la sélection du logement et les rendez-vous avec des fiscalistes indépendants. Demandez une analyse personnalisée avant de transférer votre domicile ou vos actifs.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Périmètre et abattements",
          "body": "La fiscalité successorale turque dépend notamment de la nationalité et du lieu des actifs. Un patrimoine étranger d'un défunt étranger transmis à des héritiers étrangers peut être hors champ. Le texte de 2026 vise les transmissions provenant de bénéficiaires 20/D ; l'application lorsque seul l'héritier est bénéficiaire reste à clarifier. Le taux agit sur l'assiette taxable après abattements, non sur la valeur entière du patrimoine. En 2026 l'abattement par enfant ou conjoint est de 2 907 136 TL ; 5 817 845 TL pour le conjoint héritier unique."
        },
        {
          "id": "personal-2",
          "title": "Les conditions de l'exonération 20/D",
          "body": "La loi 7582 du 4 juin 2026 s'applique aux personnes physiques établies fiscalement en Turquie à compter du 1er janvier 2026, sans domicile ni en principe assujettissement turc durant les trois années civiles précédentes. Certains revenus immobiliers, mobiliers ou gains de cession turcs antérieurs sont expressément exceptés. Demandez le certificat avant la fin de l'année d'installation, ou avant fin février suivante si l'établissement intervient en novembre ou décembre. L'exonération des revenus étrangers éligibles dure vingt ans ; elle ne couvre pas les revenus turcs ni les sociétés."
        },
        {
          "id": "personal-3",
          "title": "Comparer le taux de 1 % et le barème ordinaire",
          "body": "Exemples d'assiette nette déjà calculée après abattements. Barème ordinaire 2026 par tranches : 1 % sur 3 M TL, 3 % sur les 7 M suivants, 5 % sur les 15 M suivants, 7 % sur les 30 M suivants, 10 % au-delà. Hors droits étrangers, frais et cas particuliers.",
          "table": {
            "headers": [
              "Assiette taxable",
              "Barème ordinaire",
              "Taux spécial 1 %"
            ],
            "rows": [
              [
                "10 M TL",
                "240 000 TL",
                "100 000 TL"
              ],
              [
                "25 M TL",
                "990 000 TL",
                "250 000 TL"
              ],
              [
                "55 M TL",
                "3 090 000 TL",
                "550 000 TL"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Déclaration et preuves de succession",
          "body": "Déclarez même lorsque la part est inférieure à l'abattement. Décès en Turquie : quatre mois si l'héritier se trouve en Turquie, six s'il se trouve à l'étranger. Décès à l'étranger : six mois si l'héritier se trouve en Turquie, quatre dans le même pays, huit dans un autre pays étranger. Préparez certificat de décès, acte d'hérédité, inventaire et dettes, certificat 20/D du défunt si pertinent et preuves de valorisation. Les donations de son vivant suivent d'autres taux."
        }
      ],
      "faqs": [
        {
          "question": "Le taux couvre-t-il les donations ?",
          "answer": "Non, la loi vise la transmission par décès."
        },
        {
          "question": "Le taux de 1 % est-il calculé sur tout le patrimoine ?",
          "answer": "Non, il s'applique à l'assiette taxable admissible."
        },
        {
          "question": "La convention France–Turquie sur le revenu couvre-t-elle les successions ?",
          "answer": "Non, examinez séparément la fiscalité successorale des deux pays."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "Resmî Gazete — 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "GİB — Veraset ve İntikal Vergisi 2026",
          "href": "https://mugla.gib.gov.tr/vergi-konulari/1_bireysel/12_veraset_ve_intikal_vergisi/12"
        },
        {
          "label": "GİB — 7338, article 9",
          "href": "https://gib.gov.tr/mevzuat/kanun/440/madde/7710"
        },
        {
          "label": "GİB — Guide héritiers, septembre 2026",
          "href": "https://www.gib.gov.tr/duyuru-arsivi/guncel/18867_mirascilarin_vergisel_yukumlulukleri_rehberi_ile_veraset_ve_intikal_vergisi_brosuru_yayimlandi"
        }
      ]
    },
    "en": {
      "title": "Turkey inheritance tax 2026: 1% rate, ordinary tariff and filings",
      "metaDescription": "Turkey's new conditional 1% inheritance tax, 2026 allowances, progressive rates up to 10% and filing deadlines.",
      "shortAnswer": "Law 7582 provides 1% on qualifying inheritances during the Article 20/D period. It does not cover every gift or investor.",
      "bosphorasHelp": "Bosphoras coordinates relocation planning, housing selection and appointments with independent tax specialists. Request a personal assessment before transferring residence or assets.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Scope and allowances",
          "body": "Turkish inheritance tax depends notably on nationality and asset location. Foreign assets of a foreign deceased passing to foreign heirs may be outside scope. The 2026 text refers to transfers from Article 20/D beneficiaries; application when only the heir qualifies remains unresolved. The rate applies to taxable value after allowances, not entire wealth. The 2026 allowance per child or spouse is TRY 2,907,136, or TRY 5,817,845 for a sole surviving spouse heir."
        },
        {
          "id": "personal-2",
          "title": "Article 20/D eligibility",
          "body": "Law 7582 of 4 June 2026 covers individuals becoming Turkish tax residents from 1 January 2026, with no Turkish domicile or generally Turkish tax liability in the preceding three calendar years. Certain prior Turkish property income, investment income and disposal gains are excepted. Apply for the certificate by settlement year-end, or the following February for November or December settlement. Qualifying foreign income is exempt for twenty years; Turkish income and corporations are not covered."
        },
        {
          "id": "personal-3",
          "title": "Compare ordinary tariff and special 1%",
          "body": "Examples assume net taxable value after allowances. Ordinary 2026 bands: 1% on first TRY 3m, 3% on next 7m, 5% on next 15m, 7% on next 30m, 10% above. Excludes foreign taxes, charges and special cases.",
          "table": {
            "headers": [
              "Taxable base",
              "Ordinary tariff",
              "Special 1%"
            ],
            "rows": [
              [
                "TRY 10m",
                "TRY 240,000",
                "TRY 100,000"
              ],
              [
                "TRY 25m",
                "TRY 990,000",
                "TRY 250,000"
              ],
              [
                "TRY 55m",
                "TRY 3,090,000",
                "TRY 550,000"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Filing and estate evidence",
          "body": "File even below the inheritance allowance. Death in Turkey: four months if the heir is in Turkey, six abroad. Death abroad: six months if heir is in Turkey, four in the same country, eight in another foreign country. Gather death and succession certificates, assets and debts, deceased's 20/D certificate where relevant and valuation evidence. Lifetime gifts follow separate rates."
        }
      ],
      "faqs": [
        {
          "question": "Does 1% cover gifts?",
          "answer": "No, the amendment concerns inheritance on death."
        },
        {
          "question": "Is 1% charged on the entire estate?",
          "answer": "No, it applies to the qualifying taxable base."
        },
        {
          "question": "Does the France–Turkey income treaty cover inheritance?",
          "answer": "No; assess estate taxation separately in both countries."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "Resmî Gazete — 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "GİB — Veraset ve İntikal Vergisi 2026",
          "href": "https://mugla.gib.gov.tr/vergi-konulari/1_bireysel/12_veraset_ve_intikal_vergisi/12"
        },
        {
          "label": "GİB — 7338, article 9",
          "href": "https://gib.gov.tr/mevzuat/kanun/440/madde/7710"
        },
        {
          "label": "GİB — Guide héritiers, septembre 2026",
          "href": "https://www.gib.gov.tr/duyuru-arsivi/guncel/18867_mirascilarin_vergisel_yukumlulukleri_rehberi_ile_veraset_ve_intikal_vergisi_brosuru_yayimlandi"
        }
      ]
    },
    "ru": {
      "title": "Налог на наследство в Турции 2026: ставка 1%, шкала и декларация",
      "metaDescription": "Наследство в Турции: льготная ставка 1%, необлагаемые суммы 2026, обычная шкала до 10% и сроки.",
      "shortAnswer": "Закон № 7582 предусматривает 1% для подходящего наследования в период льготы 20/D. Это не относится ко всем подаркам или инвесторам.",
      "bosphorasHelp": "Bosphoras помогает подготовить переезд, подобрать жильё и организовать встречи с независимыми налоговыми специалистами. Запросите индивидуальную оценку до переноса резидентства или активов.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Охват и необлагаемые суммы",
          "body": "Турецкий налог зависит, в частности, от гражданства и места активов. Иностранные активы иностранного наследодателя, переходящие иностранным наследникам, могут быть вне сферы налога. Текст 2026 года говорит о переходе от получателя 20/D; случай, когда только наследник имеет льготу, остаётся неясным. Ставка применяется к базе после вычетов. В 2026 году вычет на ребёнка или супруга 2 907 136 лир, для супруга — единственного наследника 5 817 845 лир."
        },
        {
          "id": "personal-2",
          "title": "Условия статьи 20/D",
          "body": "Закон № 7582 от 4 июня 2026 года охватывает физических лиц, ставших турецкими налоговыми резидентами с 1 января 2026 года, без места жительства и, как правило, налоговых обязательств в Турции в три предыдущих календарных года. Для отдельных прежних доходов от недвижимости, капитала и прироста предусмотрены исключения. Заявление на сертификат подают до конца года поселения либо до конца следующего февраля при поселении в ноябре или декабре. Подходящие зарубежные доходы освобождены на двадцать лет; турецкие доходы и компании не охвачены."
        },
        {
          "id": "personal-3",
          "title": "Обычная шкала и льготные 1%",
          "body": "Примеры чистой базы после вычетов. Шкала 2026: 1% на первые 3 млн лир, 3% на следующие 7 млн, 5% на 15 млн, 7% на 30 млн, 10% сверх. Без зарубежных налогов, расходов и особых случаев.",
          "table": {
            "headers": [
              "Налоговая база",
              "Обычный налог",
              "Особые 1%"
            ],
            "rows": [
              [
                "10 млн лир",
                "240 000 лир",
                "100 000 лир"
              ],
              [
                "25 млн лир",
                "990 000 лир",
                "250 000 лир"
              ],
              [
                "55 млн лир",
                "3 090 000 лир",
                "550 000 лир"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Декларация и документы",
          "body": "Подайте декларацию даже ниже наследственного вычета. Смерть в Турции: четыре месяца для наследника в Турции, шесть за рубежом. Смерть за рубежом: шесть месяцев для наследника в Турции, четыре в той же стране, восемь в другой иностранной стране. Соберите свидетельство о смерти, наследственные документы, активы и долги, сертификат 20/D умершего при применимости и оценку. Прижизненные подарки облагаются отдельно."
        }
      ],
      "faqs": [
        {
          "question": "Охватывает ли ставка подарки?",
          "answer": "Нет, речь о наследовании после смерти."
        },
        {
          "question": "Начисляется ли 1% на всё имущество?",
          "answer": "Нет, на подходящую облагаемую базу."
        },
        {
          "question": "Охватывает ли соглашение Франции и Турции о доходах наследство?",
          "answer": "Нет, наследственные налоги оцениваются отдельно."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "Resmî Gazete — 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "GİB — Veraset ve İntikal Vergisi 2026",
          "href": "https://mugla.gib.gov.tr/vergi-konulari/1_bireysel/12_veraset_ve_intikal_vergisi/12"
        },
        {
          "label": "GİB — 7338, article 9",
          "href": "https://gib.gov.tr/mevzuat/kanun/440/madde/7710"
        },
        {
          "label": "GİB — Guide héritiers, septembre 2026",
          "href": "https://www.gib.gov.tr/duyuru-arsivi/guncel/18867_mirascilarin_vergisel_yukumlulukleri_rehberi_ile_veraset_ve_intikal_vergisi_brosuru_yayimlandi"
        }
      ]
    },
    "ar": {
      "title": "ضريبة الميراث في تركيا 2026: معدل 1% والشرائح والإقرار",
      "metaDescription": "ضريبة الميراث التركية الجديدة 1% بشروط والإعفاءات لعام 2026 والشرائح حتى 10% ومواعيد الإقرار.",
      "shortAnswer": "يحدد القانون 7582 نسبة 1% للميراث المؤهل خلال فترة 20/D. لا تشمل كل الهبات أو المستثمرين.",
      "bosphorasHelp": "تنسق Bosphoras دراسة الانتقال واختيار السكن والمواعيد مع متخصصين ضريبيين مستقلين. اطلب دراسة فردية قبل نقل الموطن أو الأصول.",
      "sections": [
        {
          "id": "personal-1",
          "title": "النطاق والإعفاءات",
          "body": "تعتمد الضريبة خصوصاً على الجنسية وموقع الأصول. قد تخرج أصول المتوفى الأجنبي خارج تركيا المنتقلة لورثة أجانب من النطاق. يتحدث نص 2026 عن انتقال من مستفيدي 20/D؛ لا يزال انطباقه عندما يكون الوارث فقط مستفيداً غير محسوم. يطبق المعدل على الوعاء بعد الإعفاءات. في 2026 إعفاء كل طفل أو زوج 2,907,136 ليرة وللزوج الوارث الوحيد 5,817,845 ليرة."
        },
        {
          "id": "personal-2",
          "title": "شروط المادة 20/D",
          "body": "يشمل القانون 7582 بتاريخ 4 يونيو 2026 الأفراد المستقرين ضريبياً في تركيا منذ 1 يناير 2026 دون موطن أو خضوع ضريبي تركي عادة خلال السنوات التقويمية الثلاث السابقة. تستثنى بعض دخول العقار ورأس المال ومكاسب البيع التركية السابقة. يقدم طلب الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر أو ديسمبر. يعفى الدخل الأجنبي المؤهل عشرين عاماً؛ ولا يشمل الدخل التركي أو الشركات."
        },
        {
          "id": "personal-3",
          "title": "مقارنة الشرائح العادية ومعدل 1%",
          "body": "الأمثلة لوعاء صاف بعد الإعفاءات. الشرائح العادية 2026: 1% لأول 3 ملايين ليرة و3% للسبعة التالية و5% للخمسة عشر و7% للثلاثين و10% للزائد. دون الضرائب الأجنبية والمصاريف والحالات الخاصة.",
          "table": {
            "headers": [
              "الوعاء الخاضع",
              "الضريبة العادية",
              "المعدل الخاص 1%"
            ],
            "rows": [
              [
                "10 ملايين ليرة",
                "240,000 ليرة",
                "100,000 ليرة"
              ],
              [
                "25 مليون ليرة",
                "990,000 ليرة",
                "250,000 ليرة"
              ],
              [
                "55 مليون ليرة",
                "3,090,000 ليرة",
                "550,000 ليرة"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "الإقرار ووثائق الإرث",
          "body": "يقدم الإقرار حتى إن كانت الحصة دون الإعفاء. عند الوفاة في تركيا: أربعة أشهر إن كان الوارث في تركيا وستة بالخارج. عند الوفاة بالخارج: ستة للوارث في تركيا وأربعة في بلد الوفاة وثمانية في بلد أجنبي آخر. جهز شهادة الوفاة وحصر الإرث والأصول والديون وشهادة 20/D للمتوفى عند انطباقها والتقييم. تخضع الهبات أثناء الحياة لقواعد أخرى."
        }
      ],
      "faqs": [
        {
          "question": "هل تشمل النسبة الهبات؟",
          "answer": "لا، تتعلق بالميراث عند الوفاة."
        },
        {
          "question": "هل يفرض 1% على كامل الثروة؟",
          "answer": "لا، على الوعاء المؤهل الخاضع."
        },
        {
          "question": "هل تشمل اتفاقية الدخل الفرنسية التركية الميراث؟",
          "answer": "لا، تدرس ضرائب الميراث في البلدين بصورة مستقلة."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "Resmî Gazete — 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "GİB — Veraset ve İntikal Vergisi 2026",
          "href": "https://mugla.gib.gov.tr/vergi-konulari/1_bireysel/12_veraset_ve_intikal_vergisi/12"
        },
        {
          "label": "GİB — 7338, article 9",
          "href": "https://gib.gov.tr/mevzuat/kanun/440/madde/7710"
        },
        {
          "label": "GİB — Guide héritiers, septembre 2026",
          "href": "https://www.gib.gov.tr/duyuru-arsivi/guncel/18867_mirascilarin_vergisel_yukumlulukleri_rehberi_ile_veraset_ve_intikal_vergisi_brosuru_yayimlandi"
        }
      ]
    }
  },
  "turks-abroad-exemption": {
    "fr": {
      "title": "Turcs de l’étranger : revenir en Turquie avec l’exonération fiscale 2026",
      "metaDescription": "Retour en Turquie des citoyens turcs et binationaux : exonération 20 ans, trois années civiles, patrimoine et calendrier de certificat.",
      "shortAnswer": "La nationalité turque ne prive pas du régime 20/D. Un citoyen turc ou binational revenant de l'étranger peut en bénéficier s'il satisfait les critères réels de résidence et de fiscalité.",
      "bosphorasHelp": "Bosphoras coordonne l’étude de votre installation, la sélection du logement et les rendez-vous avec des fiscalistes indépendants. Demandez une analyse personnalisée avant de transférer votre domicile ou vos actifs.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Vérifier les trois années civiles précédentes",
          "body": "Pour un retour fiscal en 2026, l'administration examine 2023, 2024 et 2025, pas seulement les trente-six derniers mois. Un bien en Turquie ou des revenus locatifs antérieurs ne disqualifient pas nécessairement : les exceptions légales concernent certains revenus du capital, mais un domicile turc durant cette période reste déterminant. Conservez les certificats de résidence étrangers, avis fiscaux, logement, travail et déplacements. Un ancien titre d'identité ou numéro fiscal ne suffit pas à déterminer le domicile."
        },
        {
          "id": "personal-2",
          "title": "Les conditions de l'exonération 20/D",
          "body": "La loi 7582 du 4 juin 2026 s'applique aux personnes physiques établies fiscalement en Turquie à compter du 1er janvier 2026, sans domicile ni en principe assujettissement turc durant les trois années civiles précédentes. Certains revenus immobiliers, mobiliers ou gains de cession turcs antérieurs sont expressément exceptés. Demandez le certificat avant la fin de l'année d'installation, ou avant fin février suivante si l'établissement intervient en novembre ou décembre. L'exonération des revenus étrangers éligibles dure vingt ans ; elle ne couvre pas les revenus turcs ni les sociétés."
        },
        {
          "id": "personal-3",
          "title": "Quand demander le certificat ?",
          "body": "Exemples d'établissement fiscal effectif. Un ancien résident turc qui n'a pas passé trois années civiles admissibles à l'étranger ne devient pas éligible simplement parce qu'il attend une date de dépôt.",
          "table": {
            "headers": [
              "Année et mois de retour",
              "Années examinées",
              "Échéance ordinaire"
            ],
            "rows": [
              [
                "Jan.–oct. 2026",
                "2023–2025",
                "31/12/2026"
              ],
              [
                "Nov.–déc. 2026",
                "2023–2025",
                "28/02/2027"
              ],
              [
                "Jan.–oct. 2027",
                "2024–2026",
                "31/12/2027"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Patrimoine, pension et entreprise",
          "body": "Identifiez les loyers, dividendes et pensions provenant réellement de l'étranger. Une activité exercée en Turquie peut rester imposable même si payée par une société étrangère. Les organismes sociaux et la retraite suivent leur propre statut. Comme citoyen turc, analysez la fiscalité successorale sur les biens mondiaux et le nouveau taux de 1 % sous conditions. Le retour doit être cohérent avec les déclarations du pays de départ."
        }
      ],
      "faqs": [
        {
          "question": "Les binationaux sont-ils exclus ?",
          "answer": "Non, la nationalité n'est pas un critère d'exclusion de 20/D."
        },
        {
          "question": "Une résidence à l'étranger de trois ans suffit-elle automatiquement ?",
          "answer": "Non, il faut vérifier les trois années civiles, le domicile, le statut fiscal et la certification."
        },
        {
          "question": "Un ancien loyer turc interdit-il l’exonération ?",
          "answer": "Pas nécessairement, les exceptions prévues dans la loi doivent être vérifiées."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Resmî Gazete — 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "GİB — Veraset ve İntikal Vergisi 2026",
          "href": "https://mugla.gib.gov.tr/vergi-konulari/1_bireysel/12_veraset_ve_intikal_vergisi/12"
        }
      ]
    },
    "en": {
      "title": "Returning Turkish citizens abroad: Turkey's 2026 tax exemption",
      "metaDescription": "Returning Turkish and dual nationals: 20-year relief, prior three calendar years, assets and certificate deadlines.",
      "shortAnswer": "Turkish citizenship does not disqualify a person from Article 20/D. Returning Turkish and dual nationals may qualify if actual residence and tax-history tests are met.",
      "bosphorasHelp": "Bosphoras coordinates relocation planning, housing selection and appointments with independent tax specialists. Request a personal assessment before transferring residence or assets.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Review the three prior calendar years",
          "body": "For 2026 tax settlement the review covers 2023, 2024 and 2025, not simply the previous thirty-six months. Turkish property or previous rent does not necessarily disqualify; statutory exceptions cover certain investment income, but a Turkish domicile is still material. Keep foreign residence certificates, tax assessments, housing, employment and travel evidence. An existing ID or tax number does not settle domicile."
        },
        {
          "id": "personal-2",
          "title": "Article 20/D eligibility",
          "body": "Law 7582 of 4 June 2026 covers individuals becoming Turkish tax residents from 1 January 2026, with no Turkish domicile or generally Turkish tax liability in the preceding three calendar years. Certain prior Turkish property income, investment income and disposal gains are excepted. Apply for the certificate by settlement year-end, or the following February for November or December settlement. Qualifying foreign income is exempt for twenty years; Turkish income and corporations are not covered."
        },
        {
          "id": "personal-3",
          "title": "Certificate timetable",
          "body": "Examples assume genuine fiscal settlement. A former Turkish resident who has not completed three qualifying calendar years abroad does not become eligible just by delaying filing.",
          "table": {
            "headers": [
              "Return date",
              "Years reviewed",
              "Ordinary deadline"
            ],
            "rows": [
              [
                "Jan–Oct 2026",
                "2023–2025",
                "31 Dec 2026"
              ],
              [
                "Nov–Dec 2026",
                "2023–2025",
                "28 Feb 2027"
              ],
              [
                "Jan–Oct 2027",
                "2024–2026",
                "31 Dec 2027"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Assets, pensions and business",
          "body": "Classify genuinely foreign rent, dividends and pensions. Work performed in Turkey can remain taxable even when paid by an overseas company. Social insurance and pension entitlements are separate. Turkish nationals should review inheritance tax on worldwide assets and the conditional 1% rate. Keep departure-country filings consistent with the actual return."
        }
      ],
      "faqs": [
        {
          "question": "Are dual citizens excluded?",
          "answer": "No, nationality is not an exclusion criterion."
        },
        {
          "question": "Do three years abroad automatically qualify?",
          "answer": "No, review calendar years, domicile, tax status and certification."
        },
        {
          "question": "Does earlier Turkish rent rule it out?",
          "answer": "Not necessarily; examine the statutory exceptions."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Resmî Gazete — 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "GİB — Veraset ve İntikal Vergisi 2026",
          "href": "https://mugla.gib.gov.tr/vergi-konulari/1_bireysel/12_veraset_ve_intikal_vergisi/12"
        }
      ]
    },
    "ru": {
      "title": "Возвращение граждан Турции из-за рубежа: налоговая льгота 2026",
      "metaDescription": "Возвращение граждан Турции и лиц с двойным гражданством: льгота на 20 лет, три календарных года, активы и сроки.",
      "shortAnswer": "Турецкое гражданство не исключает статью 20/D. Возвращающиеся граждане могут воспользоваться льготой при соблюдении условий фактического поселения и налоговой истории.",
      "bosphorasHelp": "Bosphoras помогает подготовить переезд, подобрать жильё и организовать встречи с независимыми налоговыми специалистами. Запросите индивидуальную оценку до переноса резидентства или активов.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Три предыдущих календарных года",
          "body": "Для поселения в 2026 году проверяются 2023, 2024 и 2025 годы, а не просто последние 36 месяцев. Турецкая недвижимость или прежняя аренда не всегда исключают льготу: есть исключения для некоторых доходов капитала, однако прежнее место жительства имеет значение. Храните зарубежные сертификаты, налоговые уведомления, договоры жилья и работы и историю поездок. Наличие ID или налогового номера не определяет место жительства."
        },
        {
          "id": "personal-2",
          "title": "Условия статьи 20/D",
          "body": "Закон № 7582 от 4 июня 2026 года охватывает физических лиц, ставших турецкими налоговыми резидентами с 1 января 2026 года, без места жительства и, как правило, налоговых обязательств в Турции в три предыдущих календарных года. Для отдельных прежних доходов от недвижимости, капитала и прироста предусмотрены исключения. Заявление на сертификат подают до конца года поселения либо до конца следующего февраля при поселении в ноябре или декабре. Подходящие зарубежные доходы освобождены на двадцать лет; турецкие доходы и компании не охвачены."
        },
        {
          "id": "personal-3",
          "title": "Сроки сертификата",
          "body": "Примеры предполагают фактическое налоговое поселение. Бывший резидент без трёх подходящих календарных лет за границей не получает право, просто откладывая подачу.",
          "table": {
            "headers": [
              "Дата возвращения",
              "Проверяемые годы",
              "Обычный срок"
            ],
            "rows": [
              [
                "Янв.–окт. 2026",
                "2023–2025",
                "31.12.2026"
              ],
              [
                "Нояб.–дек. 2026",
                "2023–2025",
                "28.02.2027"
              ],
              [
                "Янв.–окт. 2027",
                "2024–2026",
                "31.12.2027"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Активы, пенсия и бизнес",
          "body": "Разделяйте действительно иностранную аренду, дивиденды и пенсии. Работа в Турции может облагаться даже при оплате иностранной компанией. Социальное страхование и пенсии регулируются отдельно. Гражданину Турции нужно проверить наследственные налоги на мировое имущество и условную ставку 1%. Декларации прежней страны должны соответствовать фактическому переезду."
        }
      ],
      "faqs": [
        {
          "question": "Исключены ли лица с двойным гражданством?",
          "answer": "Нет, гражданство не является исключающим условием."
        },
        {
          "question": "Достаточно ли трёх лет за границей?",
          "answer": "Нет, проверяются календарные годы, место жительства, налоговый статус и сертификат."
        },
        {
          "question": "Мешает ли прежняя аренда в Турции?",
          "answer": "Не обязательно, проверяются исключения закона."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Resmî Gazete — 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "GİB — Veraset ve İntikal Vergisi 2026",
          "href": "https://mugla.gib.gov.tr/vergi-konulari/1_bireysel/12_veraset_ve_intikal_vergisi/12"
        }
      ]
    },
    "ar": {
      "title": "عودة الأتراك من الخارج إلى تركيا: الإعفاء الضريبي 2026",
      "metaDescription": "عودة المواطنين الأتراك ومزدوجي الجنسية وإعفاء عشرين عاماً والسنوات الثلاث والأصول ومواعيد الشهادة.",
      "shortAnswer": "لا تستبعد الجنسية التركية الاستفادة من المادة 20/D. يمكن للعائد التركي أو مزدوج الجنسية التأهل عند استيفاء قواعد الإقامة الفعلية والتاريخ الضريبي.",
      "bosphorasHelp": "تنسق Bosphoras دراسة الانتقال واختيار السكن والمواعيد مع متخصصين ضريبيين مستقلين. اطلب دراسة فردية قبل نقل الموطن أو الأصول.",
      "sections": [
        {
          "id": "personal-1",
          "title": "مراجعة السنوات التقويمية الثلاث السابقة",
          "body": "للاستقرار في 2026 تراجع 2023 و2024 و2025 لا مجرد آخر 36 شهراً. لا يمنع العقار التركي أو الإيجار السابق الإعفاء بالضرورة؛ توجد استثناءات لبعض دخل رأس المال لكن الموطن التركي السابق مهم. احتفظ بشهادات الإقامة الأجنبية والإقرارات والسكن والعمل والسفر. لا يحسم رقم الهوية أو الضريبة الموطن."
        },
        {
          "id": "personal-2",
          "title": "شروط المادة 20/D",
          "body": "يشمل القانون 7582 بتاريخ 4 يونيو 2026 الأفراد المستقرين ضريبياً في تركيا منذ 1 يناير 2026 دون موطن أو خضوع ضريبي تركي عادة خلال السنوات التقويمية الثلاث السابقة. تستثنى بعض دخول العقار ورأس المال ومكاسب البيع التركية السابقة. يقدم طلب الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر أو ديسمبر. يعفى الدخل الأجنبي المؤهل عشرين عاماً؛ ولا يشمل الدخل التركي أو الشركات."
        },
        {
          "id": "personal-3",
          "title": "مواعيد الشهادة",
          "body": "الأمثلة تفترض الاستقرار الضريبي الفعلي. لا يصبح المقيم التركي السابق الذي لم يكمل ثلاث سنوات تقويمية مؤهلة بالخارج مؤهلاً لمجرد تأخير الطلب.",
          "table": {
            "headers": [
              "تاريخ العودة",
              "السنوات المدروسة",
              "المهلة العادية"
            ],
            "rows": [
              [
                "يناير–أكتوبر 2026",
                "2023–2025",
                "31 ديسمبر 2026"
              ],
              [
                "نوفمبر–ديسمبر 2026",
                "2023–2025",
                "28 فبراير 2027"
              ],
              [
                "يناير–أكتوبر 2027",
                "2024–2026",
                "31 ديسمبر 2027"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "الأصول والمعاش والأعمال",
          "body": "ميز الإيجارات والتوزيعات والمعاشات الأجنبية الحقيقية. قد يخضع العمل المنفذ في تركيا ولو دفعته شركة أجنبية. التأمين الاجتماعي والمعاشات مستقلة. على المواطن التركي دراسة ضريبة الميراث على الأصول العالمية والمعدل المشروط 1%. يجب أن تتوافق إقرارات الدولة السابقة مع العودة الفعلية."
        }
      ],
      "faqs": [
        {
          "question": "هل يستبعد مزدوجو الجنسية؟",
          "answer": "لا، الجنسية ليست معيار استبعاد."
        },
        {
          "question": "هل تكفي ثلاث سنوات بالخارج تلقائياً؟",
          "answer": "لا، تراجع السنوات التقويمية والموطن والضرائب والشهادة."
        },
        {
          "question": "هل يمنع الإيجار التركي السابق الإعفاء؟",
          "answer": "ليس بالضرورة، تراجع الاستثناءات القانونية."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Resmî Gazete — 7582",
          "href": "https://www.resmigazete.gov.tr/eskiler/2026/06/20260604-1.htm"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "GİB — Veraset ve İntikal Vergisi 2026",
          "href": "https://mugla.gib.gov.tr/vergi-konulari/1_bireysel/12_veraset_ve_intikal_vergisi/12"
        }
      ]
    }
  },
  "foreign-pension-tax": {
    "fr": {
      "title": "Retraite étrangère en Turquie 2026 : pensions françaises et fiscalité",
      "metaDescription": "Retraite en Turquie : pensions privées ou publiques, convention France–Turquie, exonération 20 ans et budget de retraite.",
      "shortAnswer": "Une pension liée à un emploi ou à des cotisations étrangères peut relever de 20/D si elle est qualifiée de revenu étranger. Les conventions déterminent si le pays payeur conserve le droit d'imposer.",
      "bosphorasHelp": "Bosphoras coordonne l’étude de votre installation, la sélection du logement et les rendez-vous avec des fiscalistes indépendants. Demandez une analyse personnalisée avant de transférer votre domicile ou vos actifs.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Pensions françaises : articles 18 et 19",
          "body": "Pour un résident conventionnel de Turquie, l'article 18 de la convention franco-turque attribue normalement l'imposition des pensions d'ancien emploi et rentes viagères à l'État de résidence. L'article 19 réserve à l'État payeur les pensions au titre de fonctions publiques, avec exception pour les activités industrielles ou commerciales publiques visées au paragraphe 2. Certaines indemnités d'accidents relevant de l'article 18(2) sont taxables dans l'État payeur. La qualification de chaque caisse et la résidence conventionnelle doivent être confirmées ; une simple carte ikamet ne suffit pas."
        },
        {
          "id": "personal-2",
          "title": "Les conditions de l'exonération 20/D",
          "body": "La loi 7582 du 4 juin 2026 s'applique aux personnes physiques établies fiscalement en Turquie à compter du 1er janvier 2026, sans domicile ni en principe assujettissement turc durant les trois années civiles précédentes. Certains revenus immobiliers, mobiliers ou gains de cession turcs antérieurs sont expressément exceptés. Demandez le certificat avant la fin de l'année d'installation, ou avant fin février suivante si l'établissement intervient en novembre ou décembre. L'exonération des revenus étrangers éligibles dure vingt ans ; elle ne couvre pas les revenus turcs ni les sociétés."
        },
        {
          "id": "personal-3",
          "title": "Budget d'une retraite : revenu disponible",
          "body": "Exemple pédagogique, non une estimation des prix turcs : pension brute de 36 000 €/an, dépenses choisies de logement 12 000 €, vie courante 9 600 €, santé et transport 4 800 €. Solde avant impôt et dépenses exceptionnelles 9 600 €. Il ne suppose aucune exonération automatique ni traitement des prélèvements sociaux.",
          "table": {
            "headers": [
              "Poste annuel",
              "Montant"
            ],
            "rows": [
              [
                "Pension brute",
                "36 000 €"
              ],
              [
                "Logement",
                "12 000 €"
              ],
              [
                "Vie courante",
                "9 600 €"
              ],
              [
                "Santé et transport",
                "4 800 €"
              ],
              [
                "Solde avant impôt",
                "9 600 €"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Démarches auprès des caisses et de l'administration",
          "body": "Avant le départ, demandez à chaque caisse la nature de la prestation, les retenues fiscales ou sociales et les conditions de paiement à l'étranger. Actualisez l'adresse, fournissez certificat de vie si requis et preuves de résidence conventionnelle. Évaluez la couverture maladie et la convention sociale séparément. Conservez relevés de pension et, si l'éligibilité est confirmée, le certificat 20/D. Un revenu exonéré ne permet pas d'imputer les impôts étrangers sur d'autres revenus turcs."
        }
      ],
      "faqs": [
        {
          "question": "Une pension française privée est-elle toujours exonérée ?",
          "answer": "Non, résidence conventionnelle, source, nature et critères 20/D doivent être établis."
        },
        {
          "question": "La pension de fonctionnaire suit-elle la même règle ?",
          "answer": "Non, l'article 19 prévoit en principe la taxation dans l'État payeur."
        },
        {
          "question": "L'exonération donne-t-elle droit à la santé gratuite ?",
          "answer": "Non, l'assurance et les cotisations sont distinctes."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    },
    "en": {
      "title": "Foreign pension in Turkey 2026: French pensions and tax",
      "metaDescription": "Retiring in Turkey: private and public pensions, France–Turkey treaty, 20-year relief and a retirement budget example.",
      "shortAnswer": "A pension arising from overseas employment or contributions may qualify under Article 20/D if foreign-source. Treaties determine whether the paying country retains taxation.",
      "bosphorasHelp": "Bosphoras coordinates relocation planning, housing selection and appointments with independent tax specialists. Request a personal assessment before transferring residence or assets.",
      "sections": [
        {
          "id": "personal-1",
          "title": "French pensions: Articles 18 and 19",
          "body": "For a Turkish treaty resident, Article 18 normally allocates prior employment pensions and annuities exclusively to the residence state. Article 19 generally reserves government-service pensions to the paying state, except relevant public industrial or commercial activity under paragraph 2. Certain accident-insurance payments under Article 18(2) are taxed in the paying state. Confirm each scheme's classification and treaty residence; an ikamet alone is insufficient."
        },
        {
          "id": "personal-2",
          "title": "Article 20/D eligibility",
          "body": "Law 7582 of 4 June 2026 covers individuals becoming Turkish tax residents from 1 January 2026, with no Turkish domicile or generally Turkish tax liability in the preceding three calendar years. Certain prior Turkish property income, investment income and disposal gains are excepted. Apply for the certificate by settlement year-end, or the following February for November or December settlement. Qualifying foreign income is exempt for twenty years; Turkish income and corporations are not covered."
        },
        {
          "id": "personal-3",
          "title": "Retirement cash-flow example",
          "body": "Planning example, not Turkish market prices: €36,000 gross annual pension, €12,000 housing, €9,600 living costs, €4,800 health and transport. Balance before taxes and extraordinary expenses is €9,600. No automatic relief or social contribution treatment is assumed.",
          "table": {
            "headers": [
              "Annual item",
              "Amount"
            ],
            "rows": [
              [
                "Gross pension",
                "€36,000"
              ],
              [
                "Housing",
                "€12,000"
              ],
              [
                "Living costs",
                "€9,600"
              ],
              [
                "Health and transport",
                "€4,800"
              ],
              [
                "Balance before tax",
                "€9,600"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Pension providers and tax administration",
          "body": "Before leaving ask every provider about benefit classification, tax and social withholding and overseas payment. Update addresses, provide life certificates when required and treaty residence evidence. Assess healthcare and the social-security treaty separately. Keep pension statements and the Article 20/D certificate if eligible. Foreign taxes on exempt income cannot offset other Turkish taxable income."
        }
      ],
      "faqs": [
        {
          "question": "Is a French private pension always exempt?",
          "answer": "No; establish treaty residence, source, classification and 20/D eligibility."
        },
        {
          "question": "Do government pensions follow the same rule?",
          "answer": "No, Article 19 generally retains taxation in the paying state."
        },
        {
          "question": "Does relief guarantee free healthcare?",
          "answer": "No, insurance and contributions are separate."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    },
    "ru": {
      "title": "Иностранная пенсия в Турции 2026: французские пенсии и налоги",
      "metaDescription": "Переезд на пенсию в Турцию: частные и государственные пенсии, соглашение с Францией, льгота 20 лет и бюджет.",
      "shortAnswer": "Пенсия за зарубежную работу или взносы может подпадать под 20/D при иностранном источнике. Соглашения определяют права страны выплаты.",
      "bosphorasHelp": "Bosphoras помогает подготовить переезд, подобрать жильё и организовать встречи с независимыми налоговыми специалистами. Запросите индивидуальную оценку до переноса резидентства или активов.",
      "sections": [
        {
          "id": "personal-1",
          "title": "Французские пенсии: статьи 18 и 19",
          "body": "Для договорного резидента Турции статья 18 обычно относит пенсии за прежнюю работу и пожизненные ренты только к стране резидентства. Статья 19 обычно оставляет налог на пенсию за государственную службу стране выплаты, кроме предусмотренных пунктом 2 промышленных или коммерческих государственных функций. Некоторые выплаты по страхованию несчастных случаев по статье 18(2) облагаются страной выплаты. Подтвердите квалификацию каждой пенсии и договорное резидентство; одного икамета недостаточно."
        },
        {
          "id": "personal-2",
          "title": "Условия статьи 20/D",
          "body": "Закон № 7582 от 4 июня 2026 года охватывает физических лиц, ставших турецкими налоговыми резидентами с 1 января 2026 года, без места жительства и, как правило, налоговых обязательств в Турции в три предыдущих календарных года. Для отдельных прежних доходов от недвижимости, капитала и прироста предусмотрены исключения. Заявление на сертификат подают до конца года поселения либо до конца следующего февраля при поселении в ноябре или декабре. Подходящие зарубежные доходы освобождены на двадцать лет; турецкие доходы и компании не охвачены."
        },
        {
          "id": "personal-3",
          "title": "Пример бюджета пенсионера",
          "body": "Условный план, не цены рынка Турции: валовая пенсия 36 000 евро в год, жильё 12 000, быт 9 600, здоровье и транспорт 4 800. Остаток до налога и чрезвычайных расходов — 9 600 евро. Автоматическая льгота и социальные удержания не предполагаются.",
          "table": {
            "headers": [
              "Годовая статья",
              "Сумма"
            ],
            "rows": [
              [
                "Валовая пенсия",
                "36 000 €"
              ],
              [
                "Жильё",
                "12 000 €"
              ],
              [
                "Быт",
                "9 600 €"
              ],
              [
                "Здоровье и транспорт",
                "4 800 €"
              ],
              [
                "Остаток до налога",
                "9 600 €"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "Пенсионные фонды и налоговая служба",
          "body": "Перед отъездом уточните вид выплаты, налоговые и социальные удержания и условия выплат за рубеж. Обновите адрес, предоставляйте свидетельство о нахождении в живых при необходимости и подтверждение договорного резидентства. Отдельно оцените медицинское страхование и соглашение о соцстраховании. Храните выписки и сертификат 20/D при праве на льготу. Иностранный налог на освобождённый доход не уменьшает другие турецкие налоги."
        }
      ],
      "faqs": [
        {
          "question": "Всегда ли французская частная пенсия освобождена?",
          "answer": "Нет, важны резидентство, источник, квалификация и условия 20/D."
        },
        {
          "question": "Государственная пенсия имеет те же правила?",
          "answer": "Нет, статья 19 обычно сохраняет налог страны выплаты."
        },
        {
          "question": "Означает ли льгота бесплатную медицину?",
          "answer": "Нет, страхование и взносы отдельны."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    },
    "ar": {
      "title": "المعاش الأجنبي في تركيا 2026: المعاشات الفرنسية والضرائب",
      "metaDescription": "التقاعد في تركيا والمعاش الخاص والحكومي والاتفاقية الفرنسية التركية وإعفاء عشرين عاماً وميزانية التقاعد.",
      "shortAnswer": "قد يشمل 20/D المعاش الناشئ عن عمل أو اشتراكات أجنبية عند ثبوت المصدر الأجنبي. تحدد الاتفاقيات حقوق دولة الدفع.",
      "bosphorasHelp": "تنسق Bosphoras دراسة الانتقال واختيار السكن والمواعيد مع متخصصين ضريبيين مستقلين. اطلب دراسة فردية قبل نقل الموطن أو الأصول.",
      "sections": [
        {
          "id": "personal-1",
          "title": "المعاشات الفرنسية: المادتان 18 و19",
          "body": "للمقيم في تركيا وفق الاتفاقية تخصص المادة 18 عادة ضريبة معاش العمل السابق والمعاش مدى الحياة لدولة الإقامة فقط. تحتفظ المادة 19 عادة بضريبة معاش الخدمة الحكومية لدولة الدفع مع استثناء النشاط الصناعي أو التجاري الحكومي وفق الفقرة 2. تخضع بعض مدفوعات تأمين الحوادث في المادة 18(2) لدولة الدفع. أكد تصنيف كل معاش والإقامة وفق الاتفاقية؛ لا يكفي الإيكامت."
        },
        {
          "id": "personal-2",
          "title": "شروط المادة 20/D",
          "body": "يشمل القانون 7582 بتاريخ 4 يونيو 2026 الأفراد المستقرين ضريبياً في تركيا منذ 1 يناير 2026 دون موطن أو خضوع ضريبي تركي عادة خلال السنوات التقويمية الثلاث السابقة. تستثنى بعض دخول العقار ورأس المال ومكاسب البيع التركية السابقة. يقدم طلب الشهادة قبل نهاية سنة الاستقرار أو نهاية فبراير التالي للاستقرار في نوفمبر أو ديسمبر. يعفى الدخل الأجنبي المؤهل عشرين عاماً؛ ولا يشمل الدخل التركي أو الشركات."
        },
        {
          "id": "personal-3",
          "title": "مثال ميزانية التقاعد",
          "body": "خطة افتراضية لا أسعار السوق التركية: معاش إجمالي سنوي 36 ألف يورو وسكن 12 ألفاً ومعيشة 9,600 وصحة ونقل 4,800. المتبقي قبل الضرائب والنفقات الاستثنائية 9,600 يورو. لا يفترض إعفاءً تلقائياً أو معالجة الاشتراكات الاجتماعية.",
          "table": {
            "headers": [
              "البند السنوي",
              "المبلغ"
            ],
            "rows": [
              [
                "المعاش الإجمالي",
                "36,000 يورو"
              ],
              [
                "السكن",
                "12,000 يورو"
              ],
              [
                "المعيشة",
                "9,600 يورو"
              ],
              [
                "الصحة والنقل",
                "4,800 يورو"
              ],
              [
                "المتبقي قبل الضريبة",
                "9,600 يورو"
              ]
            ]
          }
        },
        {
          "id": "personal-4",
          "title": "جهات المعاش والضرائب",
          "body": "قبل المغادرة اسأل كل جهة عن نوع المعاش والاقتطاعات الضريبية والاجتماعية والدفع بالخارج. حدث العنوان وقدم شهادة الحياة عند الحاجة وإثبات الإقامة وفق الاتفاقية. ادرس التأمين الصحي والاتفاقية الاجتماعية بشكل منفصل. احتفظ بكشوف المعاش وشهادة 20/D عند الأهلية. لا تخصم ضريبة الدخل المعفى الأجنبية من ضريبة الدخل التركي الآخر."
        }
      ],
      "faqs": [
        {
          "question": "هل المعاش الفرنسي الخاص معفى دائماً؟",
          "answer": "لا، يلزم إثبات الإقامة والمصدر والتصنيف وشروط 20/D."
        },
        {
          "question": "هل يتبع المعاش الحكومي القاعدة نفسها؟",
          "answer": "لا، تبقي المادة 19 عادة الضريبة في دولة الدفع."
        },
        {
          "question": "هل يضمن الإعفاء الرعاية الصحية المجانية؟",
          "answer": "لا، التأمين والاشتراكات منفصلة."
        }
      ],
      "sources": [
        {
          "label": "GİB — 20/D",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/660/madde/13912"
        },
        {
          "label": "GİB — Communiqué 333",
          "href": "https://www.gib.gov.tr/mevzuat/kanun/433/teblig/11874"
        },
        {
          "label": "Primetax — Article 20/D",
          "href": "https://primetax.com.tr/en/publications/primetax-guide-turkiye-s-20-year-tax-exemption-for-new-residents"
        },
        {
          "label": "PwC — Income determination",
          "href": "https://taxsummaries.pwc.com/turkey/individual/income-determination"
        },
        {
          "label": "DGFiP — Convention France–Turquie",
          "href": "https://www.impots.gouv.fr/sites/default/files/media/10_conventions/turquie/turquie_convention-avec-la-turquie_fd_1780.pdf"
        }
      ]
    }
  }
};
