import type { Locale } from '@/lib/i18n';
import type { EditorialGuide } from './highPotentialEditorialGuides';

export const visaTypeEditorialGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "turkey-visa-types-hub": {
    "fr": {
      "title": "Quel visa pour la Turquie en 2026 ? Les 5 catégories et démarches",
      "metaDescription": "Tourisme, e-Visa, affaires, travail, études, famille : trouvez le visa adapté à votre projet en Turquie, avec durées, documents et démarches officielles.",
      "shortAnswer": "La Turquie distingue cinq grandes familles de visas. Le e-Visa est un mode de délivrance réservé au tourisme et au commerce, tandis que l’ikamet est un permis de séjour, pas un visa. Le choix dépend du passeport, du motif et de la durée.",
      "bosphorasHelp": "Bosphoras organise les séjours de découverte, les visites et les rendez-vous avec des spécialistes indépendants selon votre projet, sans se substituer aux autorités consulaires.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Les cinq catégories officielles",
          "body": "Les autorités turques classent les demandes selon la raison du déplacement. Une même catégorie peut comprendre plusieurs motifs ; par exemple, une foire commerciale et des vacances relèvent de la première famille.",
          "table": {
            "headers": [
              "Catégorie",
              "Motifs principaux"
            ],
            "rows": [
              [
                "Tourisme / affaires",
                "Vacances, réunions, foires, transit"
              ],
              [
                "Officiel",
                "Mission officielle, courrier"
              ],
              [
                "Études",
                "Université, formation, stage"
              ],
              [
                "Travail",
                "Emploi, missions professionnelles autorisées"
              ],
              [
                "Autres",
                "Famille, soins, accompagnement, marins"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Exemption, visa électronique ou consulat",
          "body": "La dispense de visa est déterminée par nationalité, type de passeport et objet de la visite. Le e-Visa est possible uniquement si les conditions du portail sont satisfaites ; les autres demandes passent par le consulat turc compétent. Une carte de séjour d’un pays tiers ne change pas votre nationalité, mais peut servir de justificatif pour certains e-Visas."
        },
        {
          "id": "visa-type-3",
          "title": "Durée et validité du passeport",
          "body": "Le plafond général des courts séjours est de 90 jours dans une fenêtre glissante de 180 jours, avec des limites nationales parfois inférieures. Le passeport doit en principe rester valable 60 jours après la durée de séjour autorisée : pour 30 jours, 90 jours de validité ; pour 90 jours, 150 jours. Six mois sont recommandés, sous réserve des exceptions officielles."
        },
        {
          "id": "visa-type-4",
          "title": "Préparer un dossier consulaire",
          "body": "Prévoyez environ un mois d’anticipation recommandé par le ministère, passeport, formulaire, justificatifs de voyage, assurance et documents du motif. Les frais consulaires varient selon la nationalité et le type de visa ; ils ne sont pas remboursés en cas de refus. Les mineurs doivent présenter les accords parentaux applicables."
        },
        {
          "id": "visa-type-5",
          "title": "Rester, étudier ou travailler",
          "body": "Un visa ne garantit pas l’entrée ni le droit au travail. Au-delà de la durée autorisée, une demande de résidence doit correspondre à un motif admissible. Un permis de travail valide tient généralement lieu de titre de séjour. Un achat immobilier ou une société ne suffit pas à créer un droit automatique."
        }
      ],
      "faqs": [
        {
          "question": "Le e-Visa est-il un visa de travail ?",
          "answer": "Non, il est réservé aux voyages touristiques et commerciaux."
        },
        {
          "question": "L'ikamet est-il un visa ?",
          "answer": "Non, il s’agit d’un titre autorisant la résidence."
        },
        {
          "question": "Deux passeports donnent-ils deux quotas ?",
          "answer": "Non, le plafond de court séjour s’applique à la personne."
        }
      ],
      "sources": [
        {
          "label": "Ministère turc : catégories de visas",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Exigences par nationalité",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Demande de visa consulaire",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Portail officiel e-Visa",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Types de permis de séjour",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Portail officiel e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Ministère du Travail",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        }
      ]
    },
    "en": {
      "title": "Turkey visa types 2026: which visa do you need?",
      "metaDescription": "Tourist, e-Visa, business, work, study or family travel: compare Turkey’s five official visa categories, stay limits and application routes.",
      "shortAnswer": "Turkey recognises five main visa families. An e-Visa is a delivery method for tourism or commerce; an ikamet is a residence permit. Your passport, purpose and length of stay determine the correct route.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, visits and appointments with independent specialists according to your plans; it does not replace consular authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Five official visa families",
          "body": "The Turkish foreign ministry classifies applications by the purpose of travel. A trade fair and a holiday can fall within the same main category, while employment and education have separate procedures.",
          "table": {
            "headers": [
              "Category",
              "Typical purposes"
            ],
            "rows": [
              [
                "Tourist / business",
                "Holidays, meetings, fairs, transit"
              ],
              [
                "Official",
                "Official duty, courier"
              ],
              [
                "Student / education",
                "University, training, internship"
              ],
              [
                "Employment",
                "Work and authorised assignments"
              ],
              [
                "Other",
                "Family, treatment, accompaniment, seafarers"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Visa waiver, electronic visa or consulate",
          "body": "Visa exemption depends on citizenship, passport type and the purpose of travel. An e-Visa is available only when the official portal’s conditions are met. Other applicants use the competent Turkish consulate. A foreign residence card does not change citizenship but can be a supporting document for some e-Visas."
        },
        {
          "id": "visa-type-3",
          "title": "Stay limits and passport validity",
          "body": "Short visits are generally capped at 90 days in a rolling 180-day window, with lower limits for certain passports. As a rule, the passport must remain valid for 60 days beyond the authorised stay: 90 days of validity for a 30-day allowance, or 150 days for a 90-day allowance. Six months is recommended, subject to official exceptions."
        },
        {
          "id": "visa-type-4",
          "title": "Prepare the consular application",
          "body": "The foreign ministry recommends applying at least one month ahead. Assemble the passport, application, travel evidence, insurance and purpose-specific documents. Consular fees vary by nationality and visa type; rejected applications are not refunded. Minors require relevant parental consent."
        },
        {
          "id": "visa-type-5",
          "title": "Residence, education and employment",
          "body": "A visa does not guarantee entry or authorise employment. Staying beyond the allowance requires eligible residence status. A valid work permit generally also serves as residence authorisation. Buying property or establishing a company creates no automatic right to remain."
        }
      ],
      "faqs": [
        {
          "question": "Is an e-Visa a work visa?",
          "answer": "No, it is for tourism and commerce."
        },
        {
          "question": "Is an ikamet a visa?",
          "answer": "No, it is a residence permit."
        },
        {
          "question": "Do two passports double the stay allowance?",
          "answer": "No, short-stay limits apply to the traveller."
        }
      ],
      "sources": [
        {
          "label": "Turkish foreign ministry: visa categories",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Nationality-based requirements",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Consular visa application",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Official e-Visa portal",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Residence permit categories",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Official e-ikamet portal",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Ministry of Labour",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        }
      ]
    },
    "ru": {
      "title": "Виды виз в Турцию в 2026 году: какую визу выбрать?",
      "metaDescription": "Туризм, электронная виза, бизнес, работа, учёба и семья: пять официальных категорий, сроки и порядок оформления.",
      "shortAnswer": "В Турции действует пять основных категорий виз. Электронная виза предназначена для туристических и коммерческих поездок, а икамет является видом на жительство. Выбор зависит от паспорта, цели и срока поездки.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, просмотры и встречи с независимыми специалистами с учётом вашей цели, не подменяя консульские органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Пять официальных категорий",
          "body": "МИД Турции классифицирует заявления по цели визита. Отдых и посещение торговой выставки относятся к одной основной категории, а трудоустройство и обучение имеют отдельные процедуры.",
          "table": {
            "headers": [
              "Категория",
              "Цели"
            ],
            "rows": [
              [
                "Туристическая / деловая",
                "Отдых, встречи, выставки, транзит"
              ],
              [
                "Служебная",
                "Официальная миссия, курьер"
              ],
              [
                "Учебная",
                "Университет, курсы, стажировка"
              ],
              [
                "Рабочая",
                "Работа и разрешённые задания"
              ],
              [
                "Прочие",
                "Семья, лечение, сопровождение, моряки"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Безвизовый режим, e-Visa или консульство",
          "body": "Освобождение от визы определяется гражданством, типом паспорта и целью визита. Электронная виза доступна только при выполнении условий официального портала. Остальные заявления подаются в компетентное консульство. Иностранный ВНЖ не меняет гражданство, но иногда служит дополнительным документом для e-Visa."
        },
        {
          "id": "visa-type-3",
          "title": "Срок пребывания и паспорта",
          "body": "Общий предел кратких визитов — 90 дней в скользящем периоде 180 дней; для отдельных паспортов установлены меньшие сроки. Обычно паспорт должен действовать ещё 60 дней сверх разрешённого пребывания: 90 дней при допуске на 30 дней и 150 при допуске на 90. Рекомендуется запас в шесть месяцев с учётом официальных исключений."
        },
        {
          "id": "visa-type-4",
          "title": "Документы для консульства",
          "body": "МИД рекомендует подавать заявление не менее чем за месяц. Подготовьте паспорт, анкету, подтверждения поездки, страховку и документы по цели визита. Сбор зависит от гражданства и вида визы и не возвращается при отказе. Для несовершеннолетних требуется соответствующее согласие родителей."
        },
        {
          "id": "visa-type-5",
          "title": "Проживание, учёба и работа",
          "body": "Виза не гарантирует въезд и не всегда даёт право работать. Для пребывания сверх лимита нужно подходящее основание для ВНЖ. Действующее разрешение на работу обычно заменяет ВНЖ. Покупка недвижимости и регистрация компании сами по себе не дают права остаться."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли работать по e-Visa?",
          "answer": "Нет, она предназначена для туризма и коммерческих визитов."
        },
        {
          "question": "Икамет — это виза?",
          "answer": "Нет, это вид на жительство."
        },
        {
          "question": "Удваивают ли два паспорта лимит?",
          "answer": "Нет, ограничение применяется к человеку."
        }
      ],
      "sources": [
        {
          "label": "МИД Турции: категории виз",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Условия по гражданству",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Консульская заявка на визу",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Официальный портал e-Visa",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Категории ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Официальный портал e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Министерство труда",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        }
      ]
    },
    "ar": {
      "title": "أنواع تأشيرات تركيا 2026: ما التأشيرة المناسبة لك؟",
      "metaDescription": "قارن فئات التأشيرات التركية الخمس للسياحة والأعمال والعمل والدراسة والأسرة، مع المدة والوثائق وطريقة التقديم.",
      "shortAnswer": "تعتمد تركيا خمس فئات رئيسية للتأشيرات. التأشيرة الإلكترونية مخصصة للسياحة والتجارة، أما الإيكامت فهو تصريح إقامة. يتحدد المسار وفق جواز السفر والغرض والمدة.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الاستكشافية والمعاينات والمواعيد مع مختصين مستقلين وفق مشروعك، ولا تحل محل السلطات القنصلية.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "الفئات الرسمية الخمس",
          "body": "تصنف وزارة الخارجية الطلبات بحسب الغرض من الزيارة. تندرج العطلات والمعارض التجارية ضمن فئة رئيسية واحدة، بينما تتبع الدراسة والتوظيف إجراءات مستقلة.",
          "table": {
            "headers": [
              "الفئة",
              "الأغراض"
            ],
            "rows": [
              [
                "السياحة والأعمال",
                "العطلات والاجتماعات والمعارض والعبور"
              ],
              [
                "الرسمية",
                "المهام الرسمية والبريد الدبلوماسي"
              ],
              [
                "الدراسة",
                "الجامعة والتدريب والدورات"
              ],
              [
                "العمل",
                "التوظيف والمهام المهنية المصرح بها"
              ],
              [
                "أخرى",
                "الأسرة والعلاج والمرافقة والبحارة"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "الإعفاء أو التأشيرة الإلكترونية أو القنصلية",
          "body": "يتوقف الإعفاء على الجنسية ونوع الجواز والغرض. يمكن الحصول على التأشيرة الإلكترونية إذا استوفيت شروط البوابة الرسمية، وإلا يقدم الطلب لدى القنصلية المختصة. لا يغير تصريح الإقامة في دولة أخرى جنسيتك، لكنه قد يشكل وثيقة داعمة لبعض الطلبات الإلكترونية."
        },
        {
          "id": "visa-type-3",
          "title": "مدة البقاء وصلاحية الجواز",
          "body": "الحد العام للزيارات القصيرة 90 يوماً خلال نافذة متحركة من 180 يوماً، وتطبق مدد أقصر لبعض الجنسيات. يجب عادة أن تتجاوز صلاحية الجواز مدة البقاء المسموحة بستين يوماً: 90 يوماً لإقامة مسموحة من 30 يوماً و150 يوماً لمدة 90 يوماً. يفضل توفر ستة أشهر مع مراعاة الاستثناءات الرسمية."
        },
        {
          "id": "visa-type-4",
          "title": "تجهيز الطلب القنصلي",
          "body": "توصي الخارجية بالتقديم قبل شهر على الأقل. جهز الجواز والاستمارة وإثباتات الرحلة والتأمين ومستندات الغرض. تختلف الرسوم بحسب الجنسية والفئة ولا تسترد عند الرفض. يحتاج القاصرون إلى موافقات الوالدين المطلوبة."
        },
        {
          "id": "visa-type-5",
          "title": "الإقامة والدراسة والعمل",
          "body": "لا تضمن التأشيرة الدخول ولا تمنح بالضرورة حق العمل. يتطلب البقاء بعد المدة تصريحاً مؤهلاً. يحل تصريح العمل الساري عادة محل تصريح الإقامة. ولا يمنح شراء عقار أو تأسيس شركة حق الإقامة تلقائياً."
        }
      ],
      "faqs": [
        {
          "question": "هل التأشيرة الإلكترونية تصريح عمل؟",
          "answer": "لا، هي للسياحة والتجارة."
        },
        {
          "question": "هل الإيكامت تأشيرة؟",
          "answer": "لا، هو تصريح إقامة."
        },
        {
          "question": "هل يضاعف امتلاك جوازين مدة البقاء؟",
          "answer": "لا، يطبق الحد على المسافر نفسه."
        }
      ],
      "sources": [
        {
          "label": "وزارة الخارجية التركية: فئات التأشيرات",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "الشروط بحسب الجنسية",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "طلب التأشيرة القنصلية",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "بوابة التأشيرة الإلكترونية الرسمية",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "أنواع تصاريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "بوابة الإقامة الرسمية",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "وزارة العمل",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        }
      ]
    }
  },
  "turkey-tourist-visa": {
    "fr": {
      "title": "Visa touristique Turquie 2026 : durée, prix et documents",
      "metaDescription": "Voyagez en Turquie : exemption ou visa touristique, règle des 90 jours sur 180, passeport, dossier, coûts et conditions pour les familles.",
      "shortAnswer": "Le visa touristique n’est nécessaire que si votre passeport ne bénéficie pas d’une dispense applicable. Selon votre nationalité, vous pouvez entrer sans visa, demander un e-Visa ou déposer un dossier consulaire.",
      "bosphorasHelp": "Bosphoras organise les séjours de découverte, les visites et les rendez-vous avec des spécialistes indépendants selon votre projet, sans se substituer aux autorités consulaires.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Choisir la bonne procédure",
          "body": "Pour les vacances, commencez par votre nationalité et votre type de passeport, non votre pays de résidence. Un Français, un Américain ou un Canadien titulaire d’un passeport ordinaire obtient généralement 90 jours sur 180 sans visa ; un Russe dispose de 60 jours par séjour dans le plafond de 90 jours sur 180.",
          "table": {
            "headers": [
              "Procédure",
              "Coût du visa",
              "Formalité"
            ],
            "rows": [
              [
                "Exemption",
                "0",
                "Document de voyage admissible"
              ],
              [
                "e-Visa",
                "Variable selon passeport",
                "Formulaire officiel et paiement"
              ],
              [
                "Visa consulaire",
                "Tarif du consulat",
                "Dossier et rendez-vous"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Calcul du séjour",
          "body": "Comptez le jour d’entrée et de sortie. Un voyage de 45 jours puis un second de 30 jours consomme 75 jours : il reste 15 jours tant que toutes ces dates entrent dans les 180 jours, sauf limite nationale plus restrictive. Vérifiez séparément la date de validité du document et le nombre de jours autorisés."
        },
        {
          "id": "visa-type-3",
          "title": "Dossier touristique au consulat",
          "body": "Préparez le passeport, les photos demandées, le formulaire, l’assurance médicale, la preuve de logement et les justificatifs de ressources et de retour. Si vous êtes invité chez un proche, fournissez une invitation avec identité, coordonnées, lien avec l’invité et dates. Pour une société invitante, un justificatif fiscal peut être demandé. Le ministère recommande de déposer un mois avant."
        },
        {
          "id": "visa-type-4",
          "title": "Enfants et séjour à l’hôtel",
          "body": "Chaque voyageur doit disposer de son propre document admissible. Pour un enfant demandant un visa, préparez les autorisations des deux parents ou les documents de garde adaptés. Une confirmation hôtelière et un billet retour aident à démontrer un séjour cohérent, mais ne garantissent pas l’admission."
        },
        {
          "id": "visa-type-5",
          "title": "Prolonger des vacances",
          "body": "Un séjour touristique ne donne pas le droit de travailler. Si vous envisagez quatre mois à Istanbul ou Antalya, ne comptez pas sur une nouvelle entrée immédiate ; envisagez un titre adapté et déposez avant l’expiration si vous remplissez les conditions. Une demande de résidence touristique n’est pas automatiquement acceptée."
        }
      ],
      "faqs": [
        {
          "question": "Un visa touristique est-il toujours payant ?",
          "answer": "Non, les voyageurs dispensés n’ont aucun frais de visa."
        },
        {
          "question": "Puis-je travailler en vacances ?",
          "answer": "Non, une autorisation de travail distincte est nécessaire."
        },
        {
          "question": "Puis-je acheter un billet avant l’obtention du visa ?",
          "answer": "Privilégiez une réservation modifiable pour éviter une perte en cas de refus."
        }
      ],
      "sources": [
        {
          "label": "Ministère turc : catégories de visas",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Exigences par nationalité",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Demande de visa consulaire",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Portail officiel e-Visa",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Types de permis de séjour",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Portail officiel e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        }
      ]
    },
    "en": {
      "title": "Turkey tourist visa 2026: stay limits, fees and documents",
      "metaDescription": "Find out whether you need a Turkish tourist visa, how to count 90 days in 180, what documents to prepare and what families should know.",
      "shortAnswer": "A tourist visa is necessary only when your passport is not covered by an applicable exemption. Nationality determines whether you can enter visa-free, use an e-Visa or apply at a consulate.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, visits and appointments with independent specialists according to your plans; it does not replace consular authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Select the correct route",
          "body": "For holidays, check nationality and passport type rather than country of residence. Ordinary French, US and Canadian passports generally allow 90 days in 180 visa-free; Russian passports allow up to 60 days per visit within a 90-day total.",
          "table": {
            "headers": [
              "Route",
              "Visa cost",
              "Procedure"
            ],
            "rows": [
              [
                "Exemption",
                "None",
                "Eligible travel document"
              ],
              [
                "e-Visa",
                "Nationality-dependent",
                "Official online form and payment"
              ],
              [
                "Consular visa",
                "Consular fee",
                "Application and appointment"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Count the authorised stay",
          "body": "Include arrival and departure days. A 45-day visit followed by 30 days uses 75 days, leaving 15 while all dates remain in the 180-day window, unless a lower national limit applies. Visa validity and permitted length of stay are different."
        },
        {
          "id": "visa-type-3",
          "title": "Consular tourist documents",
          "body": "Prepare passport, required photos, form, medical insurance, accommodation evidence and proof of funds and return arrangements. If staying with someone, provide an invitation with identity, contact details, relationship and travel dates. A company invitation may require tax registration evidence. Apply at least a month ahead as recommended."
        },
        {
          "id": "visa-type-4",
          "title": "Children and accommodation",
          "body": "Each traveller requires an eligible document. For a minor’s visa application, provide required parental consent or relevant custody records. Hotel confirmation and return tickets make the itinerary clearer but do not guarantee admission."
        },
        {
          "id": "visa-type-5",
          "title": "Extending a holiday",
          "body": "Tourist status does not authorise work. For a planned four-month stay in Istanbul or Antalya, do not rely on a short border trip; consider an eligible residence route and apply before lawful stay expires. Tourist residence is not automatically granted."
        }
      ],
      "faqs": [
        {
          "question": "Is every tourist visa paid?",
          "answer": "No. Exempt travellers have no visa fee."
        },
        {
          "question": "Can I take a job during a holiday?",
          "answer": "No, separate work authorisation is required."
        },
        {
          "question": "Should I buy non-refundable flights before approval?",
          "answer": "Flexible bookings reduce losses if a visa is refused."
        }
      ],
      "sources": [
        {
          "label": "Turkish foreign ministry: visa categories",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Nationality-based requirements",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Consular visa application",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Official e-Visa portal",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Residence permit categories",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Official e-ikamet portal",
          "href": "https://e-ikamet.goc.gov.tr/"
        }
      ]
    },
    "ru": {
      "title": "Туристическая виза в Турцию 2026: сроки, цена и документы",
      "metaDescription": "Нужна ли туристическая виза, как считать 90 дней из 180, какие документы подготовить и сколько стоит оформление.",
      "shortAnswer": "Туристическая виза нужна только при отсутствии применимого безвизового режима. В зависимости от гражданства доступен безвизовый въезд, e-Visa или консульское оформление.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, просмотры и встречи с независимыми специалистами с учётом вашей цели, не подменяя консульские органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Выбор способа въезда",
          "body": "Проверьте гражданство и тип паспорта, а не страну проживания. Обычные паспорта Франции, США и Канады обычно дают 90 безвизовых дней из 180; российские — до 60 за визит с общим пределом 90.",
          "table": {
            "headers": [
              "Способ",
              "Стоимость визы",
              "Процедура"
            ],
            "rows": [
              [
                "Безвизовый въезд",
                "Бесплатно",
                "Допустимый документ"
              ],
              [
                "e-Visa",
                "Зависит от гражданства",
                "Анкета и оплата на официальном сайте"
              ],
              [
                "Консульская виза",
                "По тарифу консульства",
                "Документы и приём"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Расчёт срока",
          "body": "Учитывайте дни въезда и выезда. Поездки на 45 и 30 дней используют 75 дней, оставляя 15, если все они входят в окно 180 дней и нет более строгого ограничения. Срок действия визы и разрешённое пребывание — разные понятия."
        },
        {
          "id": "visa-type-3",
          "title": "Документы в консульство",
          "body": "Подготовьте паспорт, фотографии, анкету, медицинскую страховку, подтверждения проживания, средств и обратной поездки. При проживании у знакомых нужно приглашение с данными приглашающего, контактами, сроками и характером отношений. Для приглашения от компании может требоваться налоговая регистрация. Рекомендуется подаваться за месяц."
        },
        {
          "id": "visa-type-4",
          "title": "Дети и проживание",
          "body": "Для каждого путешественника нужен собственный допустимый документ. При оформлении визы несовершеннолетнему подготовьте согласие родителей или документы об опеке. Бронь отеля и обратный билет подтверждают план поездки, но не гарантируют въезд."
        },
        {
          "id": "visa-type-5",
          "title": "Продление отдыха",
          "body": "Туристический статус не разрешает работу. Для четырёх месяцев в Стамбуле или Анталье нельзя рассчитывать на немедленный повторный въезд: рассмотрите подходящее основание для ВНЖ и подайте заявление до истечения законного срока. Туристический ВНЖ не выдаётся автоматически."
        }
      ],
      "faqs": [
        {
          "question": "Всегда ли туристическая виза платная?",
          "answer": "Нет, при безвизовом въезде визового сбора нет."
        },
        {
          "question": "Можно ли устроиться на работу во время отдыха?",
          "answer": "Нет, требуется разрешение на работу."
        },
        {
          "question": "Стоит ли покупать невозвратный билет до визы?",
          "answer": "Гибкая бронь снижает потери при отказе."
        }
      ],
      "sources": [
        {
          "label": "МИД Турции: категории виз",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Условия по гражданству",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Консульская заявка на визу",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Официальный портал e-Visa",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Категории ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Официальный портал e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة السياحة إلى تركيا 2026: المدة والرسوم والوثائق",
      "metaDescription": "اكتشف هل تحتاج إلى تأشيرة سياحية، وكيف تحسب 90 يوماً من 180، وما الوثائق والرسوم المطلوبة للعائلات والمسافرين.",
      "shortAnswer": "تحتاج إلى التأشيرة السياحية إذا لم يشمل جوازك إعفاء مناسباً. بحسب الجنسية يمكن الدخول دون تأشيرة أو طلب تأشيرة إلكترونية أو التقديم لدى القنصلية.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الاستكشافية والمعاينات والمواعيد مع مختصين مستقلين وفق مشروعك، ولا تحل محل السلطات القنصلية.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "اختيار الإجراء الصحيح",
          "body": "راجع الجنسية ونوع الجواز لا بلد الإقامة. تمنح الجوازات الفرنسية والأمريكية والكندية العادية عادة إعفاء 90 يوماً من 180، بينما يسمح الجواز الروسي بستين يوماً لكل زيارة ضمن مجموع 90 يوماً.",
          "table": {
            "headers": [
              "الإجراء",
              "رسوم التأشيرة",
              "الخطوة"
            ],
            "rows": [
              [
                "الإعفاء",
                "مجاني",
                "وثيقة سفر مقبولة"
              ],
              [
                "التأشيرة الإلكترونية",
                "بحسب الجنسية",
                "استمارة ودفع رسميان"
              ],
              [
                "القنصلية",
                "بحسب التعرفة",
                "ملف وموعد"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "حساب المدة المسموحة",
          "body": "احسب يوم الدخول والخروج. تستخدم زيارة من 45 يوماً وأخرى من 30 يوماً 75 يوماً، ويتبقى 15 ما دامت الزيارتان ضمن نافذة 180 يوماً ما لم ينطبق حد أقصر. تختلف صلاحية التأشيرة عن مدة البقاء."
        },
        {
          "id": "visa-type-3",
          "title": "وثائق الطلب القنصلي",
          "body": "جهز الجواز والصور والاستمارة والتأمين الطبي وإثبات السكن والموارد والعودة. إذا كنت مدعواً لدى شخص، جهز دعوة تتضمن هويته وبياناته وعلاقته بك وتواريخ الزيارة. وقد يلزم إثبات التسجيل الضريبي للشركة الداعية. يوصى بالتقديم قبل شهر."
        },
        {
          "id": "visa-type-4",
          "title": "الأطفال والسكن",
          "body": "يحتاج كل مسافر إلى وثيقة مقبولة خاصة به. لطلب تأشيرة قاصر جهز موافقة الوالدين أو وثائق الحضانة المناسبة. يوضح حجز الفندق وتذكرة العودة برنامج السفر لكنهما لا يضمنان الدخول."
        },
        {
          "id": "visa-type-5",
          "title": "تمديد العطلة",
          "body": "لا يسمح الوضع السياحي بالعمل. إذا أردت قضاء أربعة أشهر في إسطنبول أو أنطاليا، فلا تعتمد على خروج قصير وعودة فورية؛ ادرس مسار إقامة مؤهلاً وقدم الطلب قبل انتهاء المدة القانونية. لا تمنح الإقامة السياحية تلقائياً."
        }
      ],
      "faqs": [
        {
          "question": "هل التأشيرة السياحية مدفوعة دائماً؟",
          "answer": "لا، لا يدفع المشمول بالإعفاء رسوم تأشيرة."
        },
        {
          "question": "هل يمكن التوظف أثناء العطلة؟",
          "answer": "لا، يلزم إذن عمل مستقل."
        },
        {
          "question": "هل أحجز تذاكر غير قابلة للاسترداد قبل التأشيرة؟",
          "answer": "تقلل الحجوزات المرنة الخسائر عند الرفض."
        }
      ],
      "sources": [
        {
          "label": "وزارة الخارجية التركية: فئات التأشيرات",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "الشروط بحسب الجنسية",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "طلب التأشيرة القنصلية",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "بوابة التأشيرة الإلكترونية الرسمية",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "أنواع تصاريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "بوابة الإقامة الرسمية",
          "href": "https://e-ikamet.goc.gov.tr/"
        }
      ]
    }
  },
  "turkey-e-visa-main": {
    "fr": {
      "title": "e-Visa Turquie 2026 : demande officielle, prix et durée",
      "metaDescription": "Demandez votre e-Visa sur le portail officiel : nationalités éligibles, justificatifs, frais, durée de séjour et erreurs à éviter avant de payer.",
      "shortAnswer": "Le e-Visa turc est une autorisation électronique pour le tourisme ou le commerce. Il n’est ni nécessaire pour un voyageur dispensé de visa, ni utilisable pour le travail ou les études.",
      "bosphorasHelp": "Bosphoras organise les séjours de découverte, les visites et les rendez-vous avec des spécialistes indépendants selon votre projet, sans se substituer aux autorités consulaires.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Vérifier son éligibilité",
          "body": "Saisissez votre nationalité, type de document et date de voyage dans le portail e-Visa. Certains passeports nécessitent une preuve supplémentaire, telle qu’un visa ou titre de séjour valide de l’espace Schengen, des États-Unis, du Royaume-Uni ou de l’Irlande, lorsque cette condition s’applique. Le visa électronique d’un autre pays n’est pas accepté comme justificatif de ce type."
        },
        {
          "id": "visa-type-2",
          "title": "Formulaire, paiement et document",
          "body": "Vérifiez chaque caractère du nom, du numéro de passeport et de la date de naissance. Le prix affiché dépend du passeport et des conditions ; le paiement est libellé en dollars américains et une carte dans une autre devise peut être convertie. Après validation, téléchargez le document depuis le lien reçu et conservez une copie hors ligne.",
          "table": {
            "headers": [
              "Étape",
              "À contrôler"
            ],
            "rows": [
              [
                "Éligibilité",
                "Passeport et date"
              ],
              [
                "Formulaire",
                "Identité identique au passeport"
              ],
              [
                "Paiement",
                "Montant affiché en USD"
              ],
              [
                "Téléchargement",
                "PDF conservé hors ligne"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Validité versus durée de séjour",
          "body": "Une période de validité ne correspond pas au nombre de jours autorisés sur place. Si un e-Visa autorise 30 jours, une validité de plusieurs mois n’autorise pas à y résider pendant toute cette période. Respectez également les entrées autorisées et le plafond de court séjour."
        },
        {
          "id": "visa-type-4",
          "title": "Erreur ou changement de dates",
          "body": "Une fois émis, les données ne sont plus modifiables. Si le numéro de passeport est erroné ou que l’arrivée précède la date autorisée, une nouvelle demande est nécessaire. Le visa incorrect n’est pas remboursé. Évitez les sites imitant le formulaire officiel."
        },
        {
          "id": "visa-type-5",
          "title": "Un séjour plus long ou un autre motif",
          "body": "Le portail électronique ne délivre pas un permis de travail ni un visa d’études. Pour un déplacement incompatible, contactez la représentation turque ; pour rester durablement, un statut de résidence approprié est requis. Les conditions d’entrée restent contrôlées à la frontière."
        }
      ],
      "faqs": [
        {
          "question": "Existe-t-il un prix unique ?",
          "answer": "Non, consultez le montant officiel correspondant à votre document avant paiement."
        },
        {
          "question": "Mon e-Visa est-il un permis de travail ?",
          "answer": "Non, il sert au tourisme ou au commerce."
        },
        {
          "question": "Puis-je modifier mon numéro de passeport après émission ?",
          "answer": "Non, une nouvelle demande est nécessaire."
        }
      ],
      "sources": [
        {
          "label": "Ministère turc : catégories de visas",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Exigences par nationalité",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Portail officiel e-Visa",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Demande de visa consulaire",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Types de permis de séjour",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    },
    "en": {
      "title": "Turkey e-Visa 2026: official application, fees & stay limits",
      "metaDescription": "Apply on Turkey’s official e-Visa portal: eligibility, supporting documents, payment, validity, permitted stay and mistakes to avoid.",
      "shortAnswer": "The Turkish e-Visa is an electronic entry authorisation for tourism or commerce. Visa-exempt travellers do not need one; it does not cover employment or study.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, visits and appointments with independent specialists according to your plans; it does not replace consular authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Check eligibility",
          "body": "Enter nationality, travel document type and arrival date in the official portal. Some passports require supporting evidence such as a valid Schengen, US, UK or Irish visa or residence permit where that condition applies. Another country's electronic visa is not accepted as that supporting document."
        },
        {
          "id": "visa-type-2",
          "title": "Application, payment and download",
          "body": "Match every character of your name, passport number and birth date to your travel document. The fee depends on the passport and applicable conditions; payment is denominated in US dollars, with conversion possible from another card currency. After approval, download the document and save an offline copy.",
          "table": {
            "headers": [
              "Step",
              "Check"
            ],
            "rows": [
              [
                "Eligibility",
                "Passport and arrival date"
              ],
              [
                "Form",
                "Exact passport details"
              ],
              [
                "Payment",
                "Displayed USD fee"
              ],
              [
                "Download",
                "Offline PDF"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Validity versus permitted stay",
          "body": "The validity window is not the length of time you may remain. A 30-day allowance within a longer validity window still permits only the stated stay. Observe the permitted number of entries and short-stay limits."
        },
        {
          "id": "visa-type-4",
          "title": "Errors and date changes",
          "body": "After issue the information cannot be edited. A wrong passport number or arrival earlier than the authorised date requires a new application. An incorrect e-Visa is not refunded. Avoid websites imitating the government form."
        },
        {
          "id": "visa-type-5",
          "title": "Long stays or different purposes",
          "body": "Electronic visas do not grant work or study rights. Use the Turkish mission for another visa purpose and an appropriate residence status for long-term living. Border officials retain authority over admission."
        }
      ],
      "faqs": [
        {
          "question": "Is there one universal fee?",
          "answer": "No; check the official fee for your travel document before paying."
        },
        {
          "question": "Does an e-Visa let me work?",
          "answer": "No, it covers tourism or commerce."
        },
        {
          "question": "Can I change my passport number after issue?",
          "answer": "No, submit a new application."
        }
      ],
      "sources": [
        {
          "label": "Turkish foreign ministry: visa categories",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Nationality-based requirements",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Official e-Visa portal",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Consular visa application",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Residence permit categories",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    },
    "ru": {
      "title": "Электронная виза в Турцию 2026: официальный сайт, цена и сроки",
      "metaDescription": "Как оформить e-Visa: доступность по гражданству, подтверждающие документы, оплата в долларах, срок пребывания и ошибки.",
      "shortAnswer": "Турецкая электронная виза предназначена для туристических и коммерческих поездок. При действующем безвизовом режиме она не нужна; работать или учиться по ней нельзя.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, просмотры и встречи с независимыми специалистами с учётом вашей цели, не подменяя консульские органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Проверка права на e-Visa",
          "body": "Укажите гражданство, тип документа и дату въезда на официальном портале. Для некоторых паспортов требуется действующая виза или ВНЖ Шенгенской зоны, США, Великобритании или Ирландии, если это предусмотрено условиями. Электронная виза другой страны не принимается в качестве такого подтверждения."
        },
        {
          "id": "visa-type-2",
          "title": "Анкета, оплата и скачивание",
          "body": "Сверьте написание имени, номер паспорта и дату рождения. Сбор зависит от паспорта и условий; оплата производится в долларах США, возможна конвертация с карты в другой валюте. После оформления скачайте документ и сохраните копию без доступа к интернету.",
          "table": {
            "headers": [
              "Шаг",
              "Проверка"
            ],
            "rows": [
              [
                "Условия",
                "Паспорт и дата въезда"
              ],
              [
                "Анкета",
                "Точное соответствие паспорту"
              ],
              [
                "Оплата",
                "Указанная сумма в долларах"
              ],
              [
                "Скачивание",
                "Сохранённый PDF"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Действие визы и срок пребывания",
          "body": "Период действия не равен разрешённому количеству дней. Если виза действительна несколько месяцев, но разрешает 30 дней, жить всё это время в стране нельзя. Соблюдайте число разрешённых въездов и предел краткого пребывания."
        },
        {
          "id": "visa-type-4",
          "title": "Ошибка или перенос поездки",
          "body": "После выдачи изменить данные невозможно. При неверном номере паспорта или более ранней дате прибытия требуется новое заявление. Плата за ошибочную визу не возвращается. Избегайте сайтов, копирующих официальный сервис."
        },
        {
          "id": "visa-type-5",
          "title": "Длительное пребывание или другая цель",
          "body": "Электронная виза не даёт право работать или учиться. При иной цели обращайтесь в турецкое представительство; для длительного проживания нужен подходящий статус. Окончательное решение о въезде принимается на границе."
        }
      ],
      "faqs": [
        {
          "question": "Одинакова ли цена для всех?",
          "answer": "Нет, проверьте сбор по вашему паспорту до оплаты."
        },
        {
          "question": "Можно ли работать по электронной визе?",
          "answer": "Нет, она предназначена для туризма и коммерческих поездок."
        },
        {
          "question": "Можно ли исправить паспорт после выдачи?",
          "answer": "Нет, нужно новое заявление."
        }
      ],
      "sources": [
        {
          "label": "МИД Турции: категории виз",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Условия по гражданству",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Официальный портал e-Visa",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Консульская заявка на визу",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Категории ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    },
    "ar": {
      "title": "التأشيرة الإلكترونية لتركيا 2026: الطلب الرسمي والرسوم والمدة",
      "metaDescription": "دليل التقديم عبر بوابة التأشيرة الإلكترونية الرسمية: الجنسيات المؤهلة والوثائق والدفع وصلاحية التأشيرة والأخطاء الشائعة.",
      "shortAnswer": "التأشيرة الإلكترونية التركية إذن دخول للسياحة أو التجارة. لا يحتاجها المشمول بالإعفاء، ولا تستخدم للتوظيف أو الدراسة.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الاستكشافية والمعاينات والمواعيد مع مختصين مستقلين وفق مشروعك، ولا تحل محل السلطات القنصلية.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "التحقق من الأهلية",
          "body": "أدخل جنسيتك ونوع وثيقة السفر وتاريخ الوصول في الموقع الرسمي. تشترط بعض الجوازات تأشيرة أو تصريح إقامة سارياً لمنطقة شنغن أو الولايات المتحدة أو بريطانيا أو أيرلندا إذا انطبق هذا الشرط. لا تقبل التأشيرة الإلكترونية لدولة أخرى بوصفها وثيقة داعمة من هذا النوع."
        },
        {
          "id": "visa-type-2",
          "title": "الطلب والدفع والتنزيل",
          "body": "طابق كل حرف من الاسم ورقم الجواز وتاريخ الميلاد مع الوثيقة. تختلف الرسوم بحسب الجواز والشروط؛ ويكون الدفع بالدولار الأمريكي مع إمكانية التحويل من عملة البطاقة. بعد إصدار التأشيرة نزّل الوثيقة واحتفظ بنسخة دون اتصال بالإنترنت.",
          "table": {
            "headers": [
              "الخطوة",
              "التحقق"
            ],
            "rows": [
              [
                "الأهلية",
                "الجواز وتاريخ الوصول"
              ],
              [
                "الاستمارة",
                "التطابق مع بيانات الجواز"
              ],
              [
                "الدفع",
                "الرسوم المعروضة بالدولار"
              ],
              [
                "التنزيل",
                "نسخة PDF محفوظة"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "صلاحية التأشيرة ومدة الإقامة",
          "body": "لا تعني فترة الصلاحية عدد الأيام التي يسمح بالبقاء فيها. إذا سمحت التأشيرة بثلاثين يوماً ضمن صلاحية أطول فلا يجوز البقاء طوال الصلاحية. التزم بعدد مرات الدخول والحد الإجمالي للزيارات القصيرة."
        },
        {
          "id": "visa-type-4",
          "title": "الأخطاء وتغيير المواعيد",
          "body": "لا يمكن تعديل البيانات بعد الإصدار. يتطلب الخطأ في رقم الجواز أو الوصول قبل التاريخ المسموح طلباً جديداً. لا تسترد رسوم التأشيرة غير الصحيحة. تجنب المواقع التي تقلد النموذج الحكومي."
        },
        {
          "id": "visa-type-5",
          "title": "الإقامة الأطول أو غرض آخر",
          "body": "لا تمنح التأشيرة الإلكترونية حق العمل أو الدراسة. راجع البعثة التركية لغرض آخر، واستخدم مسار الإقامة المناسب للعيش على المدى الطويل. يبقى قرار الدخول من اختصاص سلطات الحدود."
        }
      ],
      "faqs": [
        {
          "question": "هل توجد رسوم موحدة؟",
          "answer": "لا، تحقق من المبلغ الرسمي بحسب جوازك قبل الدفع."
        },
        {
          "question": "هل تسمح التأشيرة الإلكترونية بالعمل؟",
          "answer": "لا، تقتصر على السياحة والتجارة."
        },
        {
          "question": "هل يمكن تعديل رقم الجواز بعد الإصدار؟",
          "answer": "لا، يلزم تقديم طلب جديد."
        }
      ],
      "sources": [
        {
          "label": "وزارة الخارجية التركية: فئات التأشيرات",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "الشروط بحسب الجنسية",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "بوابة التأشيرة الإلكترونية الرسمية",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "طلب التأشيرة القنصلية",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "أنواع تصاريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    }
  },
  "turkey-business-visa": {
    "fr": {
      "title": "Visa d’affaires Turquie 2026 : réunions, commerce et prospection",
      "metaDescription": "Organisez votre voyage d’affaires en Turquie : exemption, e-Visa, invitation professionnelle, documents et limite entre prospection et emploi.",
      "shortAnswer": "Les réunions commerciales, salons et visites de fournisseurs relèvent du déplacement d’affaires. Selon votre passeport, une exemption, un e-Visa ou un visa consulaire peut convenir. L’exercice d’un emploi exige une autorisation distincte.",
      "bosphorasHelp": "Bosphoras organise les séjours de découverte, les visites et les rendez-vous avec des spécialistes indépendants selon votre projet, sans se substituer aux autorités consulaires.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Quelles activités pour un voyage commercial ?",
          "body": "Une visite de fournisseurs, une négociation, une conférence ou un salon peut relever du motif commercial. Les tâches opérationnelles ou l’exécution d’un contrat sur place nécessitent une analyse du permis de travail, même sans salaire turc.",
          "table": {
            "headers": [
              "Projet",
              "Statut à examiner"
            ],
            "rows": [
              [
                "Réunion avec un fournisseur",
                "Visite commerciale"
              ],
              [
                "Salon ou conférence",
                "Visite commerciale"
              ],
              [
                "Installation d’une machine",
                "Permis ou exemption de travail"
              ],
              [
                "Direction quotidienne d’une société",
                "Autorisation de travail"
              ],
              [
                "Installation durable",
                "Résidence admissible"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Choisir le visa selon le passeport",
          "body": "Certaines nationalités sont dispensées pour les affaires, d’autres utilisent le e-Visa sous conditions. Consultez les règles spécifiques : une dispense pour le tourisme ne couvre pas nécessairement un autre motif. Pour un visa consulaire, le ministère recommande une demande au moins un mois avant le voyage."
        },
        {
          "id": "visa-type-3",
          "title": "Préparer l’invitation et le dossier",
          "body": "Demandez à l’entreprise turque une invitation précisant l’entité, les interlocuteurs, la date et la raison de la réunion, avec les coordonnées et informations d’enregistrement. Ajoutez votre lettre de mission, preuve de ressources, logement, assurance et passeport. Le consulat peut exiger d’autres documents."
        },
        {
          "id": "visa-type-4",
          "title": "Créer une société et travailler",
          "body": "Posséder des parts est différent de gérer une entreprise en Turquie. Le ministère du Travail distingue notamment les associés non dirigeants ou certains administrateurs non résidents, qui peuvent relever d’une exemption, des dirigeants actifs qui doivent disposer du droit de travailler. Examinez la procédure avant de commencer une activité."
        },
        {
          "id": "visa-type-5",
          "title": "Organiser une mission utile",
          "body": "Planifiez les rendez-vous par quartier et ville : Istanbul pour les sièges et les salons, Bursa pour l’industrie, Izmir pour les échanges portuaires. Préparez une liste des partenaires, traductions, offres et documents à examiner ; ne réservez pas de déplacement non modifiable avant votre autorisation si elle est nécessaire."
        }
      ],
      "faqs": [
        {
          "question": "Un e-Visa permet-il des réunions d’affaires ?",
          "answer": "Oui, lorsqu’il est accessible et que le motif relève du commerce."
        },
        {
          "question": "Puis-je travailler pour un client turc pendant la visite ?",
          "answer": "Un permis ou une exemption de travail peut être nécessaire avant toute prestation."
        },
        {
          "question": "Le visa d’affaires équivaut-il à l’ikamet ?",
          "answer": "Non, il couvre le court séjour autorisé."
        }
      ],
      "sources": [
        {
          "label": "Ministère turc : catégories de visas",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Exigences par nationalité",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Demande de visa consulaire",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Portail officiel e-Visa",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Ministère du Travail",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        },
        {
          "label": "Types de permis de séjour",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    },
    "en": {
      "title": "Turkey business visa 2026: meetings, trade and market visits",
      "metaDescription": "Plan your Turkish business trip: visa waiver or e-Visa, invitation letters, documents and the boundary between commercial visits and employment.",
      "shortAnswer": "Supplier meetings, exhibitions and commercial negotiations fall within business travel. Depending on passport rules, an exemption, e-Visa or consular visa may apply. Employment requires separate authorisation.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, visits and appointments with independent specialists according to your plans; it does not replace consular authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "What qualifies as a commercial visit?",
          "body": "Supplier visits, negotiations, conferences and trade shows may fall under commerce. Operational tasks or delivery of services in Turkey require work-status assessment even without a Turkish salary.",
          "table": {
            "headers": [
              "Activity",
              "Route to assess"
            ],
            "rows": [
              [
                "Supplier meeting",
                "Business visit"
              ],
              [
                "Conference or trade show",
                "Business visit"
              ],
              [
                "Equipment installation",
                "Work permit or exemption"
              ],
              [
                "Day-to-day company management",
                "Work authorisation"
              ],
              [
                "Long-term relocation",
                "Eligible residence"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Choose the passport-specific route",
          "body": "Some nationalities enjoy business visa exemptions; others can use an e-Visa if eligible. A tourism waiver does not necessarily cover another purpose. For a consular visa, the ministry recommends applying at least a month in advance."
        },
        {
          "id": "visa-type-3",
          "title": "Invitation letter and documents",
          "body": "Ask the Turkish company for an invitation identifying the entity, contacts, meeting dates and purpose, with registration information. Add your employer's assignment letter, evidence of funds, accommodation, insurance and passport. The consulate may request additional evidence."
        },
        {
          "id": "visa-type-4",
          "title": "Company ownership and employment",
          "body": "Holding shares is different from managing a business in Turkey. The labour ministry distinguishes non-managing partners and certain non-resident directors who may fall within exemptions from active directors requiring permission to work. Establish the correct status before starting activities."
        },
        {
          "id": "visa-type-5",
          "title": "Make the trip productive",
          "body": "Schedule meetings by neighbourhood and city: Istanbul for headquarters and fairs, Bursa for manufacturing and Izmir for port trade. Prepare partner details, translations and documents for review. Avoid non-refundable travel arrangements before required authorisation is granted."
        }
      ],
      "faqs": [
        {
          "question": "Can I use an e-Visa for meetings?",
          "answer": "Yes, if eligible and the activity qualifies as commerce."
        },
        {
          "question": "Can I deliver services for a Turkish client during a visit?",
          "answer": "A work permit or exemption may be required before performing the service."
        },
        {
          "question": "Is a business visa a residence permit?",
          "answer": "No, it covers the permitted short stay."
        }
      ],
      "sources": [
        {
          "label": "Turkish foreign ministry: visa categories",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Nationality-based requirements",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Consular visa application",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Official e-Visa portal",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Ministry of Labour",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        },
        {
          "label": "Residence permit categories",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    },
    "ru": {
      "title": "Деловая виза в Турцию 2026: переговоры, выставки и документы",
      "metaDescription": "Деловая поездка в Турцию: безвизовый режим, e-Visa, приглашение компании и отличие переговоров от трудовой деятельности.",
      "shortAnswer": "Переговоры, выставки и встречи с поставщиками относятся к деловым поездкам. В зависимости от паспорта доступен безвизовый режим, e-Visa или консульская виза. Для трудовой деятельности требуется отдельное разрешение.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, просмотры и встречи с независимыми специалистами с учётом вашей цели, не подменяя консульские органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Что относится к деловому визиту",
          "body": "Посещение поставщиков, переговоры, конференции и выставки могут относиться к коммерческим целям. Выполнение рабочих задач или услуг в Турции требует проверки права на работу, даже если зарплата выплачивается за рубежом.",
          "table": {
            "headers": [
              "Цель",
              "Какой статус проверить"
            ],
            "rows": [
              [
                "Встреча с поставщиком",
                "Деловой визит"
              ],
              [
                "Выставка или конференция",
                "Деловой визит"
              ],
              [
                "Монтаж оборудования",
                "Разрешение или освобождение от него"
              ],
              [
                "Управление компанией",
                "Право на работу"
              ],
              [
                "Длительный переезд",
                "Подходящий ВНЖ"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Правила для вашего паспорта",
          "body": "Одни гражданства освобождены от визы для деловых визитов, другим доступна e-Visa при соблюдении условий. Туристическое освобождение не всегда распространяется на иные цели. Для консульской визы рекомендуется подавать за месяц."
        },
        {
          "id": "visa-type-3",
          "title": "Приглашение и документы",
          "body": "Запросите у турецкой компании приглашение с её реквизитами, контактами, датами и целью встречи. Добавьте письмо о командировке, подтверждение средств и жилья, страховку и паспорт. Консульство вправе потребовать дополнительные документы."
        },
        {
          "id": "visa-type-4",
          "title": "Владение компанией и работа",
          "body": "Владение долей не равно управлению компанией. Министерство труда различает неуправляющих участников и некоторых нерезидентов — членов совета директоров, которые могут подпадать под освобождение, и активных руководителей, которым нужно право на работу. Определите статус до начала деятельности."
        },
        {
          "id": "visa-type-5",
          "title": "Организация деловой поездки",
          "body": "Группируйте встречи по районам: Стамбул удобен для головных офисов и выставок, Бурса — для производства, Измир — для портовой торговли. Подготовьте контакты, переводы и документы для проверки. Не приобретайте невозвратные билеты до получения необходимых разрешений."
        }
      ],
      "faqs": [
        {
          "question": "Подходит ли e-Visa для переговоров?",
          "answer": "Да, при наличии права на её получение и коммерческой цели."
        },
        {
          "question": "Можно ли выполнять услуги для турецкого клиента?",
          "answer": "До выполнения услуг может требоваться разрешение на работу или освобождение от него."
        },
        {
          "question": "Заменяет ли деловая виза ВНЖ?",
          "answer": "Нет, она разрешает только установленный краткий срок."
        }
      ],
      "sources": [
        {
          "label": "МИД Турции: категории виз",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Условия по гражданству",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Консульская заявка на визу",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "Официальный портал e-Visa",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Министерство труда",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        },
        {
          "label": "Категории ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة الأعمال إلى تركيا 2026: الاجتماعات والتجارة والوثائق",
      "metaDescription": "جهز رحلة الأعمال إلى تركيا: الإعفاء والتأشيرة الإلكترونية ودعوة الشركة والفرق بين الزيارة التجارية وممارسة العمل.",
      "shortAnswer": "تندرج الاجتماعات التجارية والمعارض وزيارات الموردين ضمن رحلات الأعمال. قد يناسبك الإعفاء أو التأشيرة الإلكترونية أو القنصلية بحسب الجواز. يتطلب التوظيف إذناً مستقلاً.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الاستكشافية والمعاينات والمواعيد مع مختصين مستقلين وفق مشروعك، ولا تحل محل السلطات القنصلية.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "ما الأنشطة التي تشملها الزيارة التجارية؟",
          "body": "قد تشمل زيارة الموردين والتفاوض والمؤتمرات والمعارض. أما تنفيذ المهام التشغيلية أو الخدمات داخل تركيا فيتطلب تقييم تصريح العمل حتى إذا لم تتقاض أجراً تركياً.",
          "table": {
            "headers": [
              "النشاط",
              "المسار المطلوب تقييمه"
            ],
            "rows": [
              [
                "اجتماع مع مورد",
                "زيارة تجارية"
              ],
              [
                "معرض أو مؤتمر",
                "زيارة تجارية"
              ],
              [
                "تركيب معدات",
                "تصريح عمل أو إعفاء"
              ],
              [
                "إدارة الشركة يومياً",
                "إذن عمل"
              ],
              [
                "انتقال طويل الأجل",
                "إقامة مؤهلة"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "اختيار الإجراء بحسب الجواز",
          "body": "تستفيد بعض الجنسيات من الإعفاء للزيارات التجارية، وتتاح لأخرى التأشيرة الإلكترونية بالشروط المحددة. لا يغطي الإعفاء السياحي بالضرورة أغراضاً أخرى. توصي الخارجية بتقديم الطلب القنصلي قبل شهر."
        },
        {
          "id": "visa-type-3",
          "title": "الدعوة والملف",
          "body": "اطلب دعوة من الشركة التركية تبين بيانات الجهة وجهات الاتصال والتواريخ وغرض الاجتماع ومعلومات التسجيل. أرفق خطاب المهمة وإثبات الموارد والسكن والتأمين والجواز. قد تطلب القنصلية وثائق إضافية."
        },
        {
          "id": "visa-type-4",
          "title": "ملكية الشركة وممارسة العمل",
          "body": "تختلف ملكية الحصص عن إدارة الشركة داخل تركيا. تميز وزارة العمل الشركاء غير المديرين وبعض أعضاء مجالس الإدارة غير المقيمين الذين قد يشملهم الإعفاء عن المديرين النشطين الذين يلزمهم حق العمل. حدد الوضع قبل بدء النشاط."
        },
        {
          "id": "visa-type-5",
          "title": "تنظيم رحلة أعمال مثمرة",
          "body": "رتب المواعيد بحسب المناطق: إسطنبول للمقار والمعارض، وبورصة للصناعة، وإزمير للتجارة عبر الموانئ. جهز قائمة الشركاء والترجمات والوثائق للمراجعة. تجنب الحجز غير القابل للاسترداد قبل الموافقات المطلوبة."
        }
      ],
      "faqs": [
        {
          "question": "هل التأشيرة الإلكترونية مناسبة للاجتماعات التجارية؟",
          "answer": "نعم إذا كنت مؤهلاً وكان الغرض تجارياً."
        },
        {
          "question": "هل يمكن تقديم خدمات لعميل تركي أثناء الزيارة؟",
          "answer": "قد يلزم تصريح عمل أو إعفاء قبل تقديم الخدمة."
        },
        {
          "question": "هل تأشيرة الأعمال تصريح إقامة؟",
          "answer": "لا، تغطي مدة الزيارة القصيرة المسموحة."
        }
      ],
      "sources": [
        {
          "label": "وزارة الخارجية التركية: فئات التأشيرات",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "الشروط بحسب الجنسية",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "طلب التأشيرة القنصلية",
          "href": "https://www.visa.gov.tr/"
        },
        {
          "label": "بوابة التأشيرة الإلكترونية الرسمية",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "وزارة العمل",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        },
        {
          "label": "أنواع تصاريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        }
      ]
    }
  },
  "turkey-investor-visa": {
    "fr": {
      "title": "Visa investisseur Turquie 2026 : immobilier, société et résidence",
      "metaDescription": "Investir en Turquie : visa de prospection, ikamet investisseur jusqu’à 5 ans, immobilier à 400 000 $, capital et permis de travail.",
      "shortAnswer": "Il n’existe pas de visa d’entrée universel garantissant la résidence à tout investisseur. Il faut distinguer la visite de prospection, l’ikamet fondé sur l’investissement admissible et la citoyenneté exceptionnelle, ainsi que le droit au travail.",
      "bosphorasHelp": "Bosphoras organise les séjours de découverte, les visites et les rendez-vous avec des spécialistes indépendants selon votre projet, sans se substituer aux autorités consulaires.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Venir prospecter avant d’investir",
          "body": "Pour visiter des biens, rencontrer des avocats ou négocier une opération, utilisez le régime d’entrée correspondant au passeport et au motif commercial. Une exemption ou un e-Visa peut convenir. N’engagez pas de fonds avant d’avoir examiné la conformité de l’opération et les documents."
        },
        {
          "id": "visa-type-2",
          "title": "Résidence et citoyenneté : seuils",
          "body": "La loi 6458 permet une résidence de courte durée ordinaire lorsque le motif est admissible, généralement au maximum deux ans. Les investissements qualifiés de l’article 31(1)(j) peuvent ouvrir un titre jusqu’à cinq ans pour l’investisseur non actif et certains membres de sa famille. Les seuils ci-dessous concernent l’investissement qualifié, pas le visa touristique.",
          "table": {
            "headers": [
              "Voie d’investissement",
              "Seuil",
              "Engagement"
            ],
            "rows": [
              [
                "Immobilier éligible",
                "400 000 USD",
                "Pas de revente 3 ans"
              ],
              [
                "Dépôt bancaire",
                "500 000 USD",
                "Maintien 3 ans"
              ],
              [
                "Capital fixe",
                "500 000 USD",
                "Attestation compétente"
              ],
              [
                "Création d'emplois",
                "50 personnes",
                "Attestation compétente"
              ],
              [
                "Fonds ou obligations admissibles",
                "500 000 USD",
                "Maintien 3 ans"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Immobilier : contrôler avant de signer",
          "body": "Un étranger autorisé à acquérir n’a pas nécessairement besoin d’un ikamet avant l’achat. Mais un titre de propriété ne garantit ni la résidence ni la citoyenneté. Examinez parcelle, titre foncier, restrictions, valeur, flux de paiement et certificat de conformité. Pour la citoyenneté, l’opération doit satisfaire l’ensemble des exigences et faire l’objet d’une décision favorable."
        },
        {
          "id": "visa-type-4",
          "title": "Investir dans une société et la gérer",
          "body": "Le droit de détenir des titres ne se confond pas avec celui de travailler. Pour les associés actifs soumis aux critères ordinaires de permis de travail en comptabilité au bilan, les seuils incluent une participation d’au moins 20 % et 500 000 TL de capital personnel et libéré dans l’entreprise ; cinq salariés turcs sont requis à partir du septième mois, sauf régimes ou dérogations applicables. Vérifiez le statut exact avant la prise de fonction."
        },
        {
          "id": "visa-type-5",
          "title": "Construire le budget et éviter les promesses",
          "body": "Séparez le prix d’acquisition, les frais fonciers et juridiques, les traductions, la fiscalité, la liquidité et le risque de change. Un droit au séjour ne garantit pas un régime fiscal favorable. Pour une famille, examinez l’éligibilité de chaque membre et le calendrier. Exigez des justificatifs officiels plutôt qu’une garantie commerciale de passeport."
        }
      ],
      "faqs": [
        {
          "question": "Acheter pour 400 000 $ donne-t-il un passeport automatiquement ?",
          "answer": "Non, il faut une acquisition éligible, les attestations et une décision favorable."
        },
        {
          "question": "Puis-je gérer ma société avec un ikamet investisseur ?",
          "answer": "Pas automatiquement ; vérifiez le permis de travail ou l’exemption applicable."
        },
        {
          "question": "Le visa d’entrée et le titre investisseur sont-ils identiques ?",
          "answer": "Non, ce sont des étapes juridiquement distinctes."
        }
      ],
      "sources": [
        {
          "label": "Ministère turc : catégories de visas",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Exigences par nationalité",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Portail officiel e-Visa",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Types de permis de séjour",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Agence d’investissement : résidence",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/obtaining-a-residence-permit.aspx"
        },
        {
          "label": "Immobilier et citoyenneté",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx"
        },
        {
          "label": "Ministère du Travail",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        },
        {
          "label": "Critères du permis de travail",
          "href": "https://csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/"
        }
      ]
    },
    "en": {
      "title": "Turkey investor visa 2026: property, companies & residence",
      "metaDescription": "Investment visits, qualifying residence for up to 5 years, $400,000 property, company capital and work permits: compare the Turkish routes.",
      "shortAnswer": "There is no universal investor entry visa that guarantees residency. Distinguish exploratory travel, qualifying investment residence, exceptional citizenship and permission to work.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, visits and appointments with independent specialists according to your plans; it does not replace consular authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Visit before committing",
          "body": "For property viewings, professional meetings and negotiations, use the entry route appropriate to your passport and commercial purpose. A visa waiver or e-Visa may suffice. Review the transaction and evidence of eligibility before committing funds."
        },
        {
          "id": "visa-type-2",
          "title": "Investment residence and citizenship thresholds",
          "body": "Ordinary short-term residence under Law 6458 is usually capped at two years per issue. Qualifying investments under Article 31(1)(j) may provide up to five years for non-working investors and eligible family members. These thresholds concern qualifying investment routes, not tourist visas.",
          "table": {
            "headers": [
              "Route",
              "Minimum",
              "Commitment"
            ],
            "rows": [
              [
                "Eligible property",
                "USD 400,000",
                "No resale for 3 years"
              ],
              [
                "Bank deposit",
                "USD 500,000",
                "Hold for 3 years"
              ],
              [
                "Fixed capital",
                "USD 500,000",
                "Competent authority certification"
              ],
              [
                "Employment",
                "50 jobs",
                "Competent authority certification"
              ],
              [
                "Eligible funds or bonds",
                "USD 500,000",
                "Hold for 3 years"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Property due diligence",
          "body": "An eligible foreign buyer generally does not need a residence permit before purchase. But a title deed alone guarantees neither residence nor citizenship. Assess the parcel, title, restrictions, valuation, payment trail and compliance certificate. Citizenship requires a qualifying transaction and a favourable official decision."
        },
        {
          "id": "visa-type-4",
          "title": "Owning versus managing a company",
          "body": "Share ownership and working are different. Standard work-permit criteria for active partners in balance-sheet businesses include a minimum 20% share, TRY 500,000 in personal capital and at least that amount in paid-up company capital, plus five Turkish employees from month seven, subject to applicable exceptions. Assess the exact requirements before beginning management duties."
        },
        {
          "id": "visa-type-5",
          "title": "Budget and risk",
          "body": "Separate acquisition, title and legal fees, translation, tax, liquidity and exchange-rate risk. Immigration status does not guarantee favourable tax treatment. Assess each family member's eligibility and timing. Require official evidence rather than a commercial promise of a passport."
        }
      ],
      "faqs": [
        {
          "question": "Does a $400,000 purchase guarantee a passport?",
          "answer": "No; the transaction must qualify, be certified and receive approval."
        },
        {
          "question": "Can I manage my business on an investor residence permit?",
          "answer": "Not automatically; assess work authorisation or the applicable exemption."
        },
        {
          "question": "Is investor residence the same as an entry visa?",
          "answer": "No, these are legally distinct procedures."
        }
      ],
      "sources": [
        {
          "label": "Turkish foreign ministry: visa categories",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Nationality-based requirements",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Official e-Visa portal",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Residence permit categories",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Investment agency: residence",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/obtaining-a-residence-permit.aspx"
        },
        {
          "label": "Property and citizenship",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx"
        },
        {
          "label": "Ministry of Labour",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        },
        {
          "label": "Work permit criteria",
          "href": "https://csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/"
        }
      ]
    },
    "ru": {
      "title": "Виза инвестора в Турцию 2026: недвижимость, бизнес и ВНЖ",
      "metaDescription": "Инвестиционная поездка, ВНЖ до пяти лет, недвижимость от $400 000, капитал и разрешение на работу — сравнение вариантов.",
      "shortAnswer": "Единой въездной визы инвестора, гарантирующей ВНЖ, нет. Необходимо различать ознакомительный визит, ВНЖ на основании соответствующих инвестиций, гражданство и право на работу.",
      "bosphorasHelp": "Bosphoras организует ознакомительные поездки, просмотры и встречи с независимыми специалистами с учётом вашей цели, не подменяя консульские органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Поездка до вложения средств",
          "body": "Для просмотра недвижимости, встреч и переговоров используйте режим въезда, соответствующий паспорту и деловой цели. Возможны безвизовый режим или e-Visa. До перечисления средств проверьте документы и соответствие сделки установленным критериям."
        },
        {
          "id": "visa-type-2",
          "title": "Инвестиционные пороги и сроки",
          "body": "Обычный краткосрочный ВНЖ по закону № 6458 обычно выдаётся не более чем на два года. Квалифицированные инвестиции по статье 31(1)(j) могут дать ВНЖ до пяти лет неработающему инвестору и соответствующим требованиям членам семьи. Эти пороги относятся к инвестиционным основаниям, а не к туристической визе.",
          "table": {
            "headers": [
              "Способ",
              "Минимум",
              "Условие"
            ],
            "rows": [
              [
                "Подходящая недвижимость",
                "400 000 долларов",
                "Не продавать 3 года"
              ],
              [
                "Банковский вклад",
                "500 000 долларов",
                "Хранить 3 года"
              ],
              [
                "Основной капитал",
                "500 000 долларов",
                "Подтверждение ведомства"
              ],
              [
                "Рабочие места",
                "50",
                "Подтверждение ведомства"
              ],
              [
                "Допустимые фонды или облигации",
                "500 000 долларов",
                "Хранить 3 года"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Проверка недвижимости",
          "body": "Иностранец, имеющий право приобретения, обычно не обязан получать ВНЖ до покупки. Но тапу не гарантирует ни ВНЖ, ни гражданство. Проверьте участок, право собственности, ограничения, оценку, платёжные документы и свидетельство соответствия. Для гражданства необходима соответствующая критериям сделка и положительное решение."
        },
        {
          "id": "visa-type-4",
          "title": "Владение и управление компанией",
          "body": "Владение долями не равносильно праву работать. Обычные критерии разрешения на работу для активных участников предприятий с балансовым учётом предусматривают долю от 20%, личный вклад и оплаченный капитал предприятия не менее 500 000 лир, а также пять турецких работников с седьмого месяца, если не действуют исключения. Проверьте применимые требования до начала управления."
        },
        {
          "id": "visa-type-5",
          "title": "Расходы и риски",
          "body": "Отдельно рассчитайте стоимость покупки, регистрационные и юридические расходы, переводы, налоги, ликвидность и валютные риски. Миграционный статус не гарантирует налоговую льготу. Оцените условия для каждого члена семьи и требуйте официальные подтверждения вместо обещаний паспорта."
        }
      ],
      "faqs": [
        {
          "question": "Гарантирует ли покупка на $400 000 паспорт?",
          "answer": "Нет, требуется соответствующая сделка, подтверждение и положительное решение."
        },
        {
          "question": "Можно ли управлять компанией с ВНЖ инвестора?",
          "answer": "Не автоматически; проверьте разрешение на работу или освобождение."
        },
        {
          "question": "Равен ли ВНЖ инвестора въездной визе?",
          "answer": "Нет, это разные правовые процедуры."
        }
      ],
      "sources": [
        {
          "label": "МИД Турции: категории виз",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Условия по гражданству",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Официальный портал e-Visa",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "Категории ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Агентство инвестиций: ВНЖ",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/obtaining-a-residence-permit.aspx"
        },
        {
          "label": "Недвижимость и гражданство",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx"
        },
        {
          "label": "Министерство труда",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        },
        {
          "label": "Критерии разрешения на работу",
          "href": "https://csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة المستثمر في تركيا 2026: العقار والشركة والإقامة",
      "metaDescription": "قارن زيارة الاستكشاف وإقامة المستثمر حتى خمس سنوات وشراء عقار بـ400 ألف دولار وتأسيس الشركات وتصاريح العمل.",
      "shortAnswer": "لا توجد تأشيرة دخول موحدة للمستثمر تضمن الإقامة للجميع. يجب التمييز بين زيارة الاستكشاف والإقامة القائمة على استثمار مؤهل والجنسية الاستثنائية وحق العمل.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الاستكشافية والمعاينات والمواعيد مع مختصين مستقلين وفق مشروعك، ولا تحل محل السلطات القنصلية.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "زيارة استكشافية قبل الاستثمار",
          "body": "لمعاينة العقارات والاجتماع بالمتخصصين والتفاوض استخدم نظام الدخول المناسب للجواز والغرض التجاري. قد يكفي الإعفاء أو التأشيرة الإلكترونية. تحقق من أهلية العملية ووثائقها قبل دفع الأموال."
        },
        {
          "id": "visa-type-2",
          "title": "حدود الاستثمار والإقامة والجنسية",
          "body": "تصدر الإقامة قصيرة الأجل العادية وفق القانون 6458 لمدة لا تتجاوز سنتين عادة. وقد تمنح الاستثمارات المؤهلة بموجب المادة 31(1)(j) إقامة حتى خمس سنوات للمستثمر غير العامل وأفراد أسرته المؤهلين. تخص الحدود التالية مسارات الاستثمار المؤهل لا التأشيرة السياحية.",
          "table": {
            "headers": [
              "المسار",
              "الحد الأدنى",
              "الالتزام"
            ],
            "rows": [
              [
                "عقار مؤهل",
                "400,000 دولار",
                "عدم البيع ثلاث سنوات"
              ],
              [
                "وديعة مصرفية",
                "500,000 دولار",
                "الاحتفاظ ثلاث سنوات"
              ],
              [
                "رأس مال ثابت",
                "500,000 دولار",
                "تصديق الجهة المختصة"
              ],
              [
                "توفير وظائف",
                "50 وظيفة",
                "تصديق الجهة المختصة"
              ],
              [
                "صناديق أو سندات مؤهلة",
                "500,000 دولار",
                "الاحتفاظ ثلاث سنوات"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "التحقق من العقار قبل الشراء",
          "body": "لا يشترط عادة تصريح إقامة قبل الشراء للأجنبي المخول بالتملك. لكن سند الملكية لا يضمن الإقامة أو الجنسية. افحص العقار والملكية والقيود والتقييم والتحويلات وشهادة المطابقة. تتطلب الجنسية عملية مؤهلة وقراراً رسمياً بالموافقة."
        },
        {
          "id": "visa-type-4",
          "title": "امتلاك الشركة وإدارتها",
          "body": "تختلف ملكية الحصص عن حق العمل. تشمل المعايير العادية لتصريح العمل للشركاء النشطين في منشآت المحاسبة بالميزانية حصة لا تقل عن 20% ورأس مال شخصي ومدفوع للشركة لا يقل عن 500 ألف ليرة، وخمسة موظفين أتراك ابتداءً من الشهر السابع ما لم تنطبق استثناءات. تحقق من الشروط قبل الإدارة."
        },
        {
          "id": "visa-type-5",
          "title": "الميزانية والمخاطر",
          "body": "افصل سعر الشراء عن رسوم التسجيل والمحاماة والترجمة والضرائب والسيولة ومخاطر العملة. لا تضمن الإقامة مزايا ضريبية. ادرس أهلية كل فرد من الأسرة والمواعيد واطلب إثباتات رسمية بدلاً من وعود تجارية بجواز السفر."
        }
      ],
      "faqs": [
        {
          "question": "هل يضمن شراء عقار بـ400 ألف دولار الجنسية؟",
          "answer": "لا، يجب استيفاء شروط العملية والحصول على التصديقات والموافقة."
        },
        {
          "question": "هل تسمح إقامة المستثمر بإدارة شركتي؟",
          "answer": "ليس تلقائياً؛ تحقق من تصريح العمل أو الإعفاء."
        },
        {
          "question": "هل إقامة المستثمر هي تأشيرة الدخول؟",
          "answer": "لا، هما إجراءان قانونيان مختلفان."
        }
      ],
      "sources": [
        {
          "label": "وزارة الخارجية التركية: فئات التأشيرات",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "الشروط بحسب الجنسية",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "بوابة التأشيرة الإلكترونية الرسمية",
          "href": "https://www.evisa.gov.tr/en/tour/thats/"
        },
        {
          "label": "أنواع تصاريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "هيئة الاستثمار: الإقامة",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/obtaining-a-residence-permit.aspx"
        },
        {
          "label": "العقار والجنسية",
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx"
        },
        {
          "label": "وزارة العمل",
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/"
        },
        {
          "label": "معايير تصريح العمل",
          "href": "https://csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/"
        }
      ]
    }
  },
  "turkey-work-visa": {
    "fr": {
      "title": "Visa de travail Turquie 2026 : permis, employeur, prix et délais",
      "metaDescription": "Travail en Turquie : procédure consulaire, référence à 16 chiffres, permis d’un an, frais 2026 de 12 574,90 TL et renouvellement.",
      "shortAnswer": "Pour exercer un emploi en Turquie, un étranger doit généralement obtenir un permis de travail ou relever d’une exemption applicable. Une entrée touristique ou un ikamet ordinaire ne suffit pas.",
      "bosphorasHelp": "Bosphoras coordonne vos démarches pratiques, la recherche de logement et les rendez-vous avec des professionnels indépendants adaptés à votre situation. Les décisions relèvent des autorités.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Postuler depuis l’étranger",
          "body": "Présentez votre passeport, formulaire et lettre d’employeur à la représentation turque de votre pays de citoyenneté ou résidence légale. Le consulat remet une référence à 16 chiffres. Transmettez-la immédiatement à votre employeur en Turquie, qui dépose le dossier électronique dans les dix jours ouvrables suivant votre demande consulaire."
        },
        {
          "id": "visa-type-2",
          "title": "Demander depuis la Turquie",
          "body": "L’employeur peut généralement déposer via e-Devlet si vous possédez un titre de séjour délivré pour au moins six mois et toujours valable. Des exceptions peuvent être prévues par l’administration. Préparez contrat, diplôme si requis, photographie et justificatifs de l’entreprise. Les critères de recrutement et de rémunération dépendent notamment de la profession."
        },
        {
          "id": "visa-type-3",
          "title": "Durées et frais officiels 2026",
          "body": "Le ministère examine normalement un dossier complet dans les 30 jours. Le premier permis salarié est généralement limité à un an, puis à deux et trois ans lors des prolongations auprès du même employeur, selon conditions. Les droits et la carte sont distincts et doivent être payés dans les 30 jours de notification.",
          "table": {
            "headers": [
              "Poste",
              "Montant 2026"
            ],
            "rows": [
              [
                "Permis jusqu’à 1 an",
                "12 574,90 TL"
              ],
              [
                "Plus d’un an à 2 ans",
                "25 149,80 TL"
              ],
              [
                "Plus de 2 ans à 3 ans",
                "37 724,70 TL"
              ],
              [
                "Carte",
                "964 TL"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "Entrer et commencer son activité",
          "body": "Après approbation depuis l’étranger, payez les frais indiqués, obtenez le visa consulaire et entrez en Turquie. Enregistrez l’adresse dans les 20 jours après l’entrée. L’activité doit commencer dans le mois suivant l’arrivée et au plus tard six mois après le début de validité du permis, avec les formalités sociales nécessaires."
        },
        {
          "id": "visa-type-5",
          "title": "Renouvellement, changement et famille",
          "body": "Renouvelez au cours des 60 derniers jours avant expiration. Changer d’employeur implique en principe une nouvelle demande. Le permis de travail valide tient lieu de résidence pendant sa validité ; les proches n’acquièrent pas automatiquement un droit au travail ni un titre familial."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je travailler avec un e-Visa ?",
          "answer": "Non, le e-Visa touristique ou commercial ne vaut pas permis de travail."
        },
        {
          "question": "Qui dépose le dossier ?",
          "answer": "L’employeur réalise la demande électronique pour un salarié."
        },
        {
          "question": "Le permis d’un an coûte-t-il seulement 12 574,90 TL ?",
          "answer": "Il faut ajouter 964 TL pour le document, ainsi que les frais consulaires éventuels."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère turc des Affaires étrangères"
        },
        {
          "href": "https://csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "Ministère du Travail : démarches"
        },
        {
          "href": "https://www.calismaizni.gov.tr/",
          "label": "Portail des permis de travail"
        },
        {
          "href": "https://csgb.gov.tr/uigm/en/general-information/harc-ve-degerli-k%C3%A2git-bedelinin-odenmesi/",
          "label": "Tarifs des permis de travail 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres de séjour"
        }
      ]
    },
    "en": {
      "title": "Turkey work visa 2026: permits, employer, fees & deadlines",
      "metaDescription": "Work legally in Turkey: 16-digit consular reference, employer application, 30-day processing, 2026 fees and renewal requirements.",
      "shortAnswer": "Foreigners generally need a work permit or an applicable exemption to take employment in Turkey. Tourist entry or an ordinary residence permit is insufficient.",
      "bosphorasHelp": "Bosphoras coordinates practical relocation arrangements, housing and appointments with independent specialists suited to your circumstances. Decisions remain with public authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Apply from abroad",
          "body": "Present your passport, application and employer letter to the Turkish mission in your country of citizenship or lawful residence. Receive a 16-digit reference number and send it to your Turkish employer immediately; the employer submits the online application within ten working days of your consular application."
        },
        {
          "id": "visa-type-2",
          "title": "Apply from inside Turkey",
          "body": "An employer can generally apply electronically if you have a still-valid residence permit originally issued for at least six months. Exceptions may apply. Prepare the contract, photograph, qualifications where required and company evidence. Hiring and salary criteria depend partly on the occupation."
        },
        {
          "id": "visa-type-3",
          "title": "2026 official fees and permit duration",
          "body": "A complete application is normally assessed within 30 days. The first employment permit is generally limited to one year, followed by extensions of up to two and three years with the same employer, subject to conditions. Pay the separate document and permit charges within 30 days of notice.",
          "table": {
            "headers": [
              "Item",
              "2026 fee"
            ],
            "rows": [
              [
                "Up to one year",
                "TRY 12,574.90"
              ],
              [
                "Over one to two years",
                "TRY 25,149.80"
              ],
              [
                "Over two to three years",
                "TRY 37,724.70"
              ],
              [
                "Document",
                "TRY 964"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "Enter and begin employment",
          "body": "After overseas approval, pay the notified charges, collect the consular visa and enter Turkey. Register your address within 20 days of arrival. Start work within one month of entry and no later than six months from the permit's start, completing social security obligations."
        },
        {
          "id": "visa-type-5",
          "title": "Renewals, new employers and relatives",
          "body": "Apply for renewal within the final 60 days. A different employer generally requires a new initial application. A valid work permit serves as residence authorisation, but relatives do not automatically gain a family permit or permission to work."
        }
      ],
      "faqs": [
        {
          "question": "Can I work on an e-Visa?",
          "answer": "No; tourist or commercial e-Visas do not authorise employment."
        },
        {
          "question": "Who files the application?",
          "answer": "The employer submits the online employment application."
        },
        {
          "question": "Is TRY 12,574.90 the entire cost?",
          "answer": "No; add TRY 964 for the document and any applicable consular charges."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Turkish foreign ministry"
        },
        {
          "href": "https://csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "Ministry of Labour: application procedure"
        },
        {
          "href": "https://www.calismaizni.gov.tr/",
          "label": "Work permit portal"
        },
        {
          "href": "https://csgb.gov.tr/uigm/en/general-information/harc-ve-degerli-k%C3%A2git-bedelinin-odenmesi/",
          "label": "2026 work permit fees"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        }
      ]
    },
    "ru": {
      "title": "Рабочая виза в Турцию 2026: разрешение, работодатель и стоимость",
      "metaDescription": "Как оформить разрешение на работу: номер из 16 цифр, заявление работодателя, срок рассмотрения и официальные сборы 2026 года.",
      "shortAnswer": "Для трудоустройства иностранцу обычно требуется разрешение на работу либо предусмотренное законом освобождение. Туристический въезд и обычный ВНЖ не заменяют разрешение.",
      "bosphorasHelp": "Bosphoras помогает организовать переезд, поиск жилья и встречи с независимыми специалистами с учётом вашей ситуации. Решения принимают государственные органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Подача из-за границы",
          "body": "Подайте паспорт, анкету и письмо работодателя в турецкое представительство страны гражданства или законного проживания. Получите 16-значный номер и сразу передайте его работодателю в Турции. Работодатель подаёт электронное заявление в течение десяти рабочих дней после консульской подачи."
        },
        {
          "id": "visa-type-2",
          "title": "Подача внутри Турции",
          "body": "Работодатель обычно может подать заявление через e-Devlet, если у вас есть действующий ВНЖ, выданный на срок не менее шести месяцев. Возможны исключения. Подготовьте договор, фотографию, документы об образовании при необходимости и сведения о компании. Требования к зарплате и найму зависят от профессии."
        },
        {
          "id": "visa-type-3",
          "title": "Сроки и сборы в 2026 году",
          "body": "Полное заявление обычно рассматривается до 30 дней. Первое разрешение на работу по найму обычно выдаётся до года; последующие продления у того же работодателя — до двух и трёх лет при соблюдении условий. Сборы за разрешение и документ оплачиваются отдельно в течение 30 дней после уведомления.",
          "table": {
            "headers": [
              "Позиция",
              "Сбор 2026"
            ],
            "rows": [
              [
                "До одного года",
                "12 574,90 лиры"
              ],
              [
                "Свыше года до двух лет",
                "25 149,80 лиры"
              ],
              [
                "Свыше двух до трёх лет",
                "37 724,70 лиры"
              ],
              [
                "Карточка",
                "964 лиры"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "Въезд и начало работы",
          "body": "После одобрения заявки из-за рубежа оплатите указанные сборы, получите консульскую визу и въезжайте в страну. Зарегистрируйте адрес в течение 20 дней. Приступите к работе в течение месяца после въезда и не позднее шести месяцев от начала действия разрешения, выполнив требования социального страхования."
        },
        {
          "id": "visa-type-5",
          "title": "Продление, смена работодателя и семья",
          "body": "Подавайте на продление в последние 60 дней. Смена работодателя обычно требует нового заявления. Действующее разрешение на работу заменяет ВНЖ на срок своего действия, но не даёт родственникам автоматического права на работу или семейный ВНЖ."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли работать по e-Visa?",
          "answer": "Нет, туристическая или коммерческая электронная виза не разрешает трудоустройство."
        },
        {
          "question": "Кто подаёт заявление?",
          "answer": "Электронную заявку на наёмного работника подаёт работодатель."
        },
        {
          "question": "Вся стоимость — 12 574,90 лиры?",
          "answer": "Нет, дополнительно оплачивается карточка за 964 лиры и возможные консульские сборы."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции"
        },
        {
          "href": "https://csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "Министерство труда: оформление"
        },
        {
          "href": "https://www.calismaizni.gov.tr/",
          "label": "Портал разрешений на работу"
        },
        {
          "href": "https://csgb.gov.tr/uigm/en/general-information/harc-ve-degerli-k%C3%A2git-bedelinin-odenmesi/",
          "label": "Сборы за разрешения на работу 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة العمل في تركيا 2026: التصريح وصاحب العمل والرسوم",
      "metaDescription": "دليل تصريح العمل في تركيا والرقم القنصلي المكون من 16 خانة وطلب صاحب العمل والرسوم الرسمية ومواعيد التجديد.",
      "shortAnswer": "يتطلب التوظيف في تركيا عادة تصريح عمل للأجنبي أو إعفاء قانونياً من التصريح. لا يكفي الدخول السياحي أو تصريح الإقامة العادي.",
      "bosphorasHelp": "تنسق Bosphoras ترتيبات الانتقال والبحث عن السكن والمواعيد مع مختصين مستقلين بحسب حالتك، وتبقى القرارات من اختصاص السلطات.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "التقديم من الخارج",
          "body": "قدم الجواز والاستمارة وخطاب صاحب العمل إلى البعثة التركية في بلد جنسيتك أو إقامتك القانونية. تحصل على رقم مرجعي من 16 خانة وترسله فوراً إلى صاحب العمل في تركيا، الذي يقدم الطلب الإلكتروني خلال عشرة أيام عمل من التقديم القنصلي."
        },
        {
          "id": "visa-type-2",
          "title": "التقديم من داخل تركيا",
          "body": "يمكن لصاحب العمل عادة تقديم الطلب عبر الحكومة الإلكترونية إذا كان لديك تصريح إقامة سار صدر لمدة ستة أشهر على الأقل. قد توجد استثناءات. جهز العقد والصورة والمؤهلات عند طلبها ووثائق الشركة. تختلف معايير التوظيف والأجر بحسب المهنة."
        },
        {
          "id": "visa-type-3",
          "title": "الرسوم والمدة في 2026",
          "body": "يدرس الملف المكتمل عادة خلال 30 يوماً. يصدر تصريح الموظف الأول عادة لمدة سنة على الأكثر، ويمكن تجديده لسنتين ثم ثلاث لدى صاحب العمل نفسه وفق الشروط. تدفع رسوم التصريح والوثيقة منفصلة خلال 30 يوماً من الإخطار.",
          "table": {
            "headers": [
              "البند",
              "رسوم 2026"
            ],
            "rows": [
              [
                "حتى سنة",
                "12,574.90 ليرة"
              ],
              [
                "أكثر من سنة وحتى سنتين",
                "25,149.80 ليرة"
              ],
              [
                "أكثر من سنتين وحتى ثلاث",
                "37,724.70 ليرة"
              ],
              [
                "البطاقة",
                "964 ليرة"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "الدخول وبدء العمل",
          "body": "بعد الموافقة على الطلب الخارجي ادفع الرسوم المحددة واحصل على التأشيرة القنصلية وادخل تركيا. سجل العنوان خلال 20 يوماً من الوصول. ابدأ العمل خلال شهر من الدخول وفي غضون ستة أشهر من بداية صلاحية التصريح على الأكثر، مع استكمال التزامات الضمان الاجتماعي."
        },
        {
          "id": "visa-type-5",
          "title": "التجديد وتغيير صاحب العمل والأسرة",
          "body": "قدم التجديد في آخر 60 يوماً. يتطلب تغيير صاحب العمل عادة طلباً جديداً. يحل تصريح العمل الساري محل الإقامة خلال صلاحيته، ولا يمنح الأسرة تلقائياً تصريح إقامة عائلية أو حق العمل."
        }
      ],
      "faqs": [
        {
          "question": "هل تسمح التأشيرة الإلكترونية بالتوظيف؟",
          "answer": "لا، لا تمنح التأشيرة السياحية أو التجارية حق العمل."
        },
        {
          "question": "من يقدم طلب الموظف؟",
          "answer": "يقدم صاحب العمل الطلب الإلكتروني."
        },
        {
          "question": "هل 12,574.90 ليرة هي التكلفة الكاملة؟",
          "answer": "لا، تضاف 964 ليرة للبطاقة والرسوم القنصلية إن انطبقت."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية التركية"
        },
        {
          "href": "https://csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "وزارة العمل: إجراءات التقديم"
        },
        {
          "href": "https://www.calismaizni.gov.tr/",
          "label": "بوابة تصاريح العمل"
        },
        {
          "href": "https://csgb.gov.tr/uigm/en/general-information/harc-ve-degerli-k%C3%A2git-bedelinin-odenmesi/",
          "label": "رسوم تصاريح العمل 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع تصاريح الإقامة"
        }
      ]
    }
  },
  "turkey-student-visa": {
    "fr": {
      "title": "Visa étudiant Turquie 2026 : université, ikamet et travail",
      "metaDescription": "Étudier en Turquie : admission, visa étudiant, carte de séjour à 964 TL, assurance, droit au travail et démarches après le diplôme.",
      "shortAnswer": "La procédure comprend l’admission dans un établissement, le visa d’études lorsqu’il est requis et un titre étudiant pour poursuivre un cursus en Turquie. L’inscription seule ne remplace pas le statut de séjour.",
      "bosphorasHelp": "Bosphoras coordonne vos démarches pratiques, la recherche de logement et les rendez-vous avec des professionnels indépendants adaptés à votre situation. Les décisions relèvent des autorités.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Choisir le cursus et préparer le départ",
          "body": "Obtenez une admission nominative indiquant établissement, niveau et dates. Préparez passeport, diplômes, relevés, éventuelles équivalences et preuve de ressources ; le consulat peut exiger traductions et assurance. Les frais de scolarité varient selon établissement, filière et langue d’enseignement : demandez un échéancier séparant inscription, cours et logement."
        },
        {
          "id": "visa-type-2",
          "title": "Après l’arrivée : titre étudiant",
          "body": "Les étudiants en licence, cycle court, master, doctorat et spécialisation médicale ou dentaire peuvent demander le titre étudiant. Suivez les instructions du bureau international et du portail e-ikamet. Présentez inscription effective, passeport, adresse, photos et assurance selon votre situation. Le titre ne peut pas dépasser la durée d’un cursus inférieur à un an.",
          "table": {
            "headers": [
              "Situation",
              "Durée"
            ],
            "rows": [
              [
                "Cursus inférieur à un an",
                "Au plus la durée des études"
              ],
              [
                "Enseignement primaire ou secondaire",
                "Un an renouvelable sous conditions"
              ],
              [
                "Diplôme supérieur obtenu",
                "Demande courte durée dans les 6 mois, une fois, jusqu’à 1 an"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Assurance, carte et budget",
          "body": "La carte ikamet coûte 964 TL en 2026 ; les droits de résidence dépendent de la situation et des exemptions. Les étudiants étrangers peuvent demander l’assurance publique dans les trois mois suivant leur première inscription, sous conditions ; sinon prévoyez une assurance conforme. Budgétez séparément le logement, les transports, les repas et le matériel."
        },
        {
          "id": "visa-type-4",
          "title": "Travailler pendant les études",
          "body": "Un étudiant diplômant peut travailler s’il obtient un permis. Pour les étudiants de cycle court ou licence, le droit commence après la première année. Les conditions sont distinctes de l’admission. Le titre étudiant peut permettre de parrainer uniquement conjoint et enfants pour une résidence familiale, sous conditions, et non tous les proches."
        },
        {
          "id": "visa-type-5",
          "title": "Après le diplôme",
          "body": "Un diplômé de l’enseignement supérieur turc peut, dans les six mois suivant l’obtention du diplôme, demander une résidence courte durée au plus un an, une seule fois pour ce motif. Pour prendre un emploi, préparez la procédure de permis de travail. Vérifiez l’expiration de votre titre avant la fin du cursus."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je travailler dès la première année de licence ?",
          "answer": "En principe non ; le droit commence après la première année et exige un permis."
        },
        {
          "question": "Une admission garantit-elle le titre ?",
          "answer": "Non, les conditions d’immigration restent à satisfaire."
        },
        {
          "question": "Puis-je rester après mon diplôme ?",
          "answer": "Une demande spécifique dans les six mois est possible, sous conditions."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère turc des Affaires étrangères"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Règles générales des visas"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres de séjour"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Tarifs des cartes de résidence 2026"
        },
        {
          "href": "https://csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "Ministère du Travail : démarches"
        }
      ]
    },
    "en": {
      "title": "Turkey student visa 2026: university, ikamet and work rights",
      "metaDescription": "Study in Turkey: admission, student visa, residence card fee, health insurance, employment rules and post-graduation options.",
      "shortAnswer": "Studying in Turkey involves admission, an education visa where required and appropriate student residence status. Enrolment alone does not replace permission to stay.",
      "bosphorasHelp": "Bosphoras coordinates practical relocation arrangements, housing and appointments with independent specialists suited to your circumstances. Decisions remain with public authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Admission and preparation",
          "body": "Obtain an acceptance letter specifying institution, programme and dates. Prepare passport, academic records, any required equivalency documents, funds, translations and insurance. Tuition varies by university, discipline and teaching language; request a fee schedule separating tuition, enrolment and housing."
        },
        {
          "id": "visa-type-2",
          "title": "Student residence after arrival",
          "body": "Associate, undergraduate, master's, doctoral and medical or dental specialisation students can apply for student residence. Follow your international office and e-ikamet instructions. Prepare enrolment evidence, passport, address, photographs and required insurance. A permit for a programme shorter than a year cannot exceed the study period.",
          "table": {
            "headers": [
              "Situation",
              "Period"
            ],
            "rows": [
              [
                "Programme shorter than a year",
                "No longer than the programme"
              ],
              [
                "Primary or secondary school",
                "One year, renewable subject to conditions"
              ],
              [
                "Higher education graduate",
                "Apply within 6 months, once, up to 1 year"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Insurance and 2026 costs",
          "body": "The residence card costs TRY 964 in 2026; residence duties depend on the circumstances and exemptions. Foreign students may apply for public health insurance within three months of first enrolment if eligible; otherwise arrange compliant coverage. Budget separately for housing, transport, food and learning materials."
        },
        {
          "id": "visa-type-4",
          "title": "Employment and dependants",
          "body": "Degree students need a work permit to work. Associate and undergraduate students gain eligibility after their first year. Employment rules are separate from admission. A student residence permit can support family-permit applications for an eligible spouse and children only, not other relatives."
        },
        {
          "id": "visa-type-5",
          "title": "After graduation",
          "body": "Graduates of Turkish higher education can apply once for short-term residence for up to one year within six months of graduation, subject to conditions. For employment, arrange work authorisation. Check your current residence expiry before finishing your course."
        }
      ],
      "faqs": [
        {
          "question": "Can I work during the first undergraduate year?",
          "answer": "Generally no; eligibility starts after year one and requires a work permit."
        },
        {
          "question": "Does admission guarantee residence?",
          "answer": "No; immigration requirements still apply."
        },
        {
          "question": "Can I stay after graduation?",
          "answer": "A specific application within six months may be available."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Turkish foreign ministry"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General visa rules"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "2026 residence card fees"
        },
        {
          "href": "https://csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "Ministry of Labour: application procedure"
        }
      ]
    },
    "ru": {
      "title": "Студенческая виза в Турцию 2026: вуз, ВНЖ и работа",
      "metaDescription": "Поступление в турецкий вуз, учебная виза, карточка ВНЖ за 964 лиры, страховка, право на работу и статус после выпуска.",
      "shortAnswer": "Для обучения в Турции нужны зачисление, учебная виза при необходимости и соответствующий статус проживания. Само зачисление не заменяет ВНЖ.",
      "bosphorasHelp": "Bosphoras помогает организовать переезд, поиск жилья и встречи с независимыми специалистами с учётом вашей ситуации. Решения принимают государственные органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Поступление и подготовка",
          "body": "Получите именное письмо о зачислении с учебной программой и датами. Подготовьте паспорт, дипломы, выписки, документы об эквивалентности при необходимости, подтверждение средств, переводы и страховку. Стоимость зависит от вуза, программы и языка преподавания; запросите разбивку оплаты обучения и жилья."
        },
        {
          "id": "visa-type-2",
          "title": "Студенческий ВНЖ после въезда",
          "body": "Учащиеся программ неполного высшего образования, бакалавриата, магистратуры, докторантуры и медицинской или стоматологической специализации могут оформить студенческий ВНЖ. Следуйте указаниям международного отдела и e-ikamet. Подготовьте документ о зачислении, паспорт, адрес, фото и необходимую страховку. ВНЖ для программы короче года не превышает её срока.",
          "table": {
            "headers": [
              "Ситуация",
              "Срок"
            ],
            "rows": [
              [
                "Программа короче года",
                "Не дольше обучения"
              ],
              [
                "Начальная или средняя школа",
                "Год с возможностью продления"
              ],
              [
                "Выпускник турецкого вуза",
                "Подача в течение 6 месяцев, один раз, до года"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Страховка и расходы",
          "body": "Карточка ВНЖ в 2026 году стоит 964 лиры; сбор за проживание зависит от обстоятельств и льгот. Иностранные студенты могут при соблюдении условий обратиться за государственным страхованием в первые три месяца после первого зачисления; иначе оформите подходящую страховку. Отдельно рассчитайте жильё, транспорт, питание и учебные материалы."
        },
        {
          "id": "visa-type-4",
          "title": "Работа и семья",
          "body": "Студентам требуется разрешение на работу. Для программ неполного высшего образования и бакалавриата право появляется после первого года. Учебный ВНЖ позволяет выступать спонсором только супруга и детей при соблюдении требований семейного ВНЖ, а не остальных родственников."
        },
        {
          "id": "visa-type-5",
          "title": "После выпуска",
          "body": "В течение шести месяцев после окончания турецкой программы высшего образования можно один раз подать на краткосрочный ВНЖ сроком до года по этому основанию. Для трудоустройства оформите разрешение на работу. Проверьте дату окончания действующего ВНЖ заранее."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли работать на первом курсе бакалавриата?",
          "answer": "Обычно нет: право возникает после первого года при наличии разрешения."
        },
        {
          "question": "Гарантирует ли поступление ВНЖ?",
          "answer": "Нет, миграционные требования сохраняются."
        },
        {
          "question": "Можно ли остаться после выпуска?",
          "answer": "При соблюдении условий возможна специальная подача в течение шести месяцев."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Сборы за карточку ВНЖ в 2026 году"
        },
        {
          "href": "https://csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "Министерство труда: оформление"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة الدراسة في تركيا 2026: الجامعة والإقامة والعمل",
      "metaDescription": "دليل القبول الجامعي وتأشيرة الدراسة وبطاقة الإقامة بـ964 ليرة والتأمين وحق العمل وخيارات البقاء بعد التخرج.",
      "shortAnswer": "تتطلب الدراسة في تركيا قبولاً وتأشيرة دراسية عند الحاجة ووضع إقامة طلابية مناسباً. لا يغني التسجيل الجامعي وحده عن الإقامة القانونية.",
      "bosphorasHelp": "تنسق Bosphoras ترتيبات الانتقال والبحث عن السكن والمواعيد مع مختصين مستقلين بحسب حالتك، وتبقى القرارات من اختصاص السلطات.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "القبول والاستعداد للسفر",
          "body": "احصل على خطاب قبول باسمك يحدد المؤسسة والبرنامج والتواريخ. جهز الجواز والشهادات وكشوف الدرجات والمعادلة عند الحاجة وإثبات الموارد والترجمات والتأمين. تختلف الرسوم الدراسية باختلاف الجامعة والتخصص واللغة؛ اطلب تفصيلاً لرسوم التسجيل والدراسة والسكن."
        },
        {
          "id": "visa-type-2",
          "title": "الإقامة الطلابية بعد الوصول",
          "body": "يمكن لطلاب الدبلوم الجامعي والبكالوريوس والماجستير والدكتوراه والتخصص الطبي أو طب الأسنان طلب إقامة طالب. اتبع تعليمات المكتب الدولي والبوابة الرسمية، وجهز إثبات التسجيل والجواز والعنوان والصور والتأمين المطلوب. لا تتجاوز الإقامة مدة برنامج يقل عن سنة.",
          "table": {
            "headers": [
              "الحالة",
              "المدة"
            ],
            "rows": [
              [
                "برنامج أقل من سنة",
                "لا تتجاوز مدة الدراسة"
              ],
              [
                "التعليم الابتدائي أو الثانوي",
                "سنة قابلة للتجديد بشروط"
              ],
              [
                "خريج التعليم العالي",
                "طلب خلال 6 أشهر لمرة واحدة حتى سنة"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "التأمين وتكاليف 2026",
          "body": "تبلغ رسوم بطاقة الإقامة 964 ليرة في 2026 وتختلف الرسوم الأخرى بحسب الحالة والإعفاءات. يمكن للطلاب الأجانب طلب التأمين الصحي العام بشروط خلال ثلاثة أشهر من التسجيل الأول؛ وإلا يلزم تأمين ملائم. احسب السكن والنقل والطعام والمواد الدراسية بصورة مستقلة."
        },
        {
          "id": "visa-type-4",
          "title": "العمل والأسرة",
          "body": "يحتاج الطالب إلى تصريح عمل. يبدأ حق طلاب الدبلوم والبكالوريوس بعد السنة الأولى. تختلف شروط العمل عن القبول الدراسي. ويمكن للطالب كفالة الزوج والأطفال فقط في طلبات الإقامة العائلية متى استوفوا الشروط، وليس بقية الأقارب."
        },
        {
          "id": "visa-type-5",
          "title": "بعد التخرج",
          "body": "يمكن لخريج التعليم العالي التركي طلب إقامة قصيرة الأجل لمدة تصل إلى سنة لمرة واحدة خلال ستة أشهر من التخرج، وفق الشروط. إذا أردت التوظيف فرتب تصريح العمل وتحقق من تاريخ انتهاء إقامتك قبل نهاية البرنامج."
        }
      ],
      "faqs": [
        {
          "question": "هل يمكن العمل في السنة الأولى من البكالوريوس؟",
          "answer": "لا عادة، يبدأ الحق بعد السنة الأولى مع تصريح عمل."
        },
        {
          "question": "هل يضمن القبول الجامعي الإقامة؟",
          "answer": "لا، تبقى شروط الهجرة واجبة."
        },
        {
          "question": "هل يمكن البقاء بعد التخرج؟",
          "answer": "قد يتاح طلب خاص خلال ستة أشهر وفق الشروط."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية التركية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع تصاريح الإقامة"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "بوابة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "رسوم بطاقة الإقامة 2026"
        },
        {
          "href": "https://csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "وزارة العمل: إجراءات التقديم"
        }
      ]
    }
  },
  "turkey-family-visa": {
    "fr": {
      "title": "Visa familial Turquie 2026 : conjoint, enfants et ikamet",
      "metaDescription": "Vivre en famille en Turquie : visa d’entrée, ikamet jusqu’à 3 ans, revenus du répondant, assurance, actes et scolarité des enfants.",
      "shortAnswer": "Le visa d’entrée pour motif familial et le titre de séjour familial sont distincts. La résidence familiale peut concerner le conjoint étranger et les enfants mineurs ou à charge d’un répondant admissible.",
      "bosphorasHelp": "Bosphoras coordonne vos démarches pratiques, la recherche de logement et les rendez-vous avec des professionnels indépendants adaptés à votre situation. Les décisions relèvent des autorités.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Qui peut bénéficier du titre familial ?",
          "body": "Le répondant peut notamment être citoyen turc, étranger titulaire d’un titre admissible, bénéficiaire de protection subsidiaire ou réfugié. Les enfants du conjoint peuvent être concernés. Un parent adulte, frère ou sœur n’obtient pas automatiquement ce titre. Pour une famille de nationalités différentes, contrôlez les règles d’entrée de chaque passeport."
        },
        {
          "id": "visa-type-2",
          "title": "Revenus, assurance et conditions",
          "body": "Le répondant doit généralement justifier un revenu global au moins égal au salaire minimum et une part d’au moins un tiers de ce minimum par membre de famille, une assurance couvrant tous, une adresse enregistrée et un casier adapté pour les infractions familiales sur les cinq années précédentes. La condition de résidence d’un an du répondant étranger comporte des exceptions légales.",
          "table": {
            "headers": [
              "Famille au total",
              "Seuil minimal théorique"
            ],
            "rows": [
              [
                "2 personnes",
                "1 salaire minimum"
              ],
              [
                "3 personnes",
                "1 salaire minimum"
              ],
              [
                "4 personnes",
                "4/3 du salaire minimum"
              ],
              [
                "5 personnes",
                "5/3 du salaire minimum"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Préparer les actes et le dossier",
          "body": "Réunissez passeports, acte de mariage, actes de naissance, justificatifs de garde ou consentement parental, preuves de logement, de revenus et d’assurance. Prévoyez apostille ou légalisation selon le pays émetteur et traduction turque certifiée lorsque requise. Les deux époux doivent avoir au moins 18 ans et le mariage doit être authentique."
        },
        {
          "id": "visa-type-4",
          "title": "Durée, frais et enfants",
          "body": "Le titre familial est délivré jusqu’à trois ans sans dépasser le titre du répondant. La carte coûte 964 TL par personne en 2026 : pour deux demandeurs, cela représente 1 928 TL hors autres droits. Les enfants titulaires peuvent suivre le primaire et le secondaire jusqu’à 18 ans sans titre étudiant distinct."
        },
        {
          "id": "visa-type-5",
          "title": "Protéger la continuité du séjour",
          "body": "Déposez avant la fin de votre séjour légal et renouvelez dans les 60 derniers jours. Si le répondant change de statut, décède ou divorce, un autre permis peut être possible selon conditions. Le mariage avec un citoyen turc ne donne pas automatiquement la nationalité ni le droit de travailler."
        }
      ],
      "faqs": [
        {
          "question": "Les deux parents et les enfants peuvent-ils demander ensemble ?",
          "answer": "Oui, préparez les dossiers individuels et les justificatifs communs du répondant."
        },
        {
          "question": "Un enfant doit-il obtenir un titre étudiant ?",
          "answer": "Pas pour le primaire et secondaire avant 18 ans s’il possède un titre familial valide."
        },
        {
          "question": "Le mariage garantit-il l’ikamet ?",
          "answer": "Non, il faut satisfaire l’ensemble des conditions."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Règles générales des visas"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres de séjour"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles sur la résidence"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Tarifs des cartes de résidence 2026"
        }
      ]
    },
    "en": {
      "title": "Turkey family visa 2026: spouse, children and residence",
      "metaDescription": "Move to Turkey with your family: residence up to 3 years, sponsor income, insurance, marriage documents and children's schooling.",
      "shortAnswer": "Family entry visas and family residence permits are distinct. Eligible sponsors may support residence applications for a foreign spouse and minor or dependent children.",
      "bosphorasHelp": "Bosphoras coordinates practical relocation arrangements, housing and appointments with independent specialists suited to your circumstances. Decisions remain with public authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Eligible family members",
          "body": "Sponsors may include Turkish citizens, foreign holders of eligible residence permits, refugees and subsidiary-protection beneficiaries. A spouse's children may qualify. Adult parents and siblings do not automatically qualify. In mixed-nationality families, check entry rules for every passport."
        },
        {
          "id": "visa-type-2",
          "title": "Sponsor income and insurance",
          "body": "The sponsor generally needs total monthly income at least equal to the minimum wage, and at least one third of that amount per family member, medical insurance covering everyone, a registered address and evidence of no family-related convictions in the preceding five years. The one-year residence condition for foreign sponsors has statutory exceptions.",
          "table": {
            "headers": [
              "Total family size",
              "Theoretical minimum"
            ],
            "rows": [
              [
                "2 people",
                "1 minimum wage"
              ],
              [
                "3 people",
                "1 minimum wage"
              ],
              [
                "4 people",
                "4/3 of minimum wage"
              ],
              [
                "5 people",
                "5/3 of minimum wage"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Prepare civil records",
          "body": "Collect passports, marriage and birth records, custody or parental consent, housing, income and insurance evidence. Arrange apostille or legalisation according to the issuing country and certified Turkish translations when required. Both spouses must be at least 18 and the marriage genuine."
        },
        {
          "id": "visa-type-4",
          "title": "Duration, costs and schooling",
          "body": "Family residence lasts up to three years and cannot outlast the sponsor's permit. The 2026 residence card costs TRY 964 per applicant: two applicants pay TRY 1,928 in card fees alone. Family-permit holders can attend primary and secondary school until age 18 without a separate student permit."
        },
        {
          "id": "visa-type-5",
          "title": "Maintain lawful status",
          "body": "Apply before lawful stay expires and renew during the final 60 days. If a sponsor's status changes, dies or divorces, another residence basis may be available subject to conditions. Marriage to a Turkish citizen does not automatically confer citizenship or work rights."
        }
      ],
      "faqs": [
        {
          "question": "Can family members apply together?",
          "answer": "Prepare individual files and shared sponsor evidence."
        },
        {
          "question": "Does a child need a student permit?",
          "answer": "Not for primary or secondary school before 18 with valid family residence."
        },
        {
          "question": "Does marriage guarantee residence?",
          "answer": "No, the remaining conditions must also be met."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General visa rules"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official residence FAQ"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "2026 residence card fees"
        }
      ]
    },
    "ru": {
      "title": "Семейная виза в Турцию 2026: супруг, дети и семейный ВНЖ",
      "metaDescription": "Семейный переезд в Турцию: ВНЖ до трёх лет, доход спонсора, страховка, документы о браке и обучение детей.",
      "shortAnswer": "Въездная виза по семейным обстоятельствам и семейный ВНЖ — разные процедуры. Семейный ВНЖ может оформляться иностранному супругу и несовершеннолетним или зависимым детям подходящего спонсора.",
      "bosphorasHelp": "Bosphoras помогает организовать переезд, поиск жилья и встречи с независимыми специалистами с учётом вашей ситуации. Решения принимают государственные органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Кто входит в семью",
          "body": "Спонсором может быть гражданин Турции, иностранец с подходящим ВНЖ, беженец или получатель дополнительной защиты. Дети супруга также могут иметь право. Родители взрослых заявителей, братья и сёстры автоматически не подпадают под категорию. Для семьи с разными гражданствами проверьте правила каждого паспорта."
        },
        {
          "id": "visa-type-2",
          "title": "Доход, страховка и условия",
          "body": "Спонсору обычно нужен совокупный доход не ниже минимальной зарплаты и не менее её трети на каждого члена семьи, страховка для всех, зарегистрированный адрес и подтверждение отсутствия судимости за преступления против семьи за последние пять лет. Для требования о годе проживания иностранного спонсора предусмотрены законные исключения.",
          "table": {
            "headers": [
              "Размер семьи",
              "Расчётный минимум"
            ],
            "rows": [
              [
                "2 человека",
                "1 минимальная зарплата"
              ],
              [
                "3 человека",
                "1 минимальная зарплата"
              ],
              [
                "4 человека",
                "4/3 минимальной зарплаты"
              ],
              [
                "5 человек",
                "5/3 минимальной зарплаты"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Документы для заявления",
          "body": "Соберите паспорта, свидетельства о браке и рождении, документы об опеке или согласии родителей, подтверждения жилья, дохода и страховки. При необходимости оформите апостиль или легализацию и заверенный перевод на турецкий. Оба супруга должны быть старше или не моложе 18 лет, брак должен быть действительным и не фиктивным."
        },
        {
          "id": "visa-type-4",
          "title": "Срок, сборы и школа",
          "body": "Семейный ВНЖ выдаётся до трёх лет, не дольше разрешения спонсора. В 2026 году одна карточка стоит 964 лиры, две — 1 928 лир без других сборов. До 18 лет обладатель семейного ВНЖ может учиться в начальной и средней школе без отдельного учебного ВНЖ."
        },
        {
          "id": "visa-type-5",
          "title": "Сохранение законного статуса",
          "body": "Подайте заявление до окончания законного пребывания и продлевайте в последние 60 дней. Изменение статуса спонсора, его смерть или развод могут позволить оформить иной ВНЖ по установленным условиям. Брак с гражданином Турции не даёт автоматически гражданство или право работать."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли подать документы всей семьёй?",
          "answer": "Да, с индивидуальными заявлениями и общими документами спонсора."
        },
        {
          "question": "Нужен ли ребёнку учебный ВНЖ?",
          "answer": "До 18 лет для школы не нужен при действующем семейном ВНЖ."
        },
        {
          "question": "Гарантирует ли брак ВНЖ?",
          "answer": "Нет, необходимо соблюсти все требования."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные вопросы о ВНЖ"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Сборы за карточку ВНЖ в 2026 году"
        }
      ]
    },
    "ar": {
      "title": "التأشيرة العائلية في تركيا 2026: الزوج والأطفال والإقامة",
      "metaDescription": "دليل الانتقال العائلي إلى تركيا والإقامة حتى ثلاث سنوات ودخل الكفيل والتأمين ووثائق الزواج وتعليم الأطفال.",
      "shortAnswer": "تختلف تأشيرة الدخول لأسباب عائلية عن تصريح الإقامة العائلية، الذي قد يشمل الزوج الأجنبي والأطفال القاصرين أو المعالين لكفيل مؤهل.",
      "bosphorasHelp": "تنسق Bosphoras ترتيبات الانتقال والبحث عن السكن والمواعيد مع مختصين مستقلين بحسب حالتك، وتبقى القرارات من اختصاص السلطات.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "من يحق له طلب الإقامة العائلية؟",
          "body": "قد يكون الكفيل مواطناً تركياً أو أجنبياً يحمل إقامة مؤهلة أو لاجئاً أو مستفيداً من الحماية الفرعية. وقد يشمل الطلب أطفال الزوج. لا يحصل والدا الشخص البالغ أو إخوته على هذه الإقامة تلقائياً. راجع قواعد كل جواز عند اختلاف جنسيات الأسرة."
        },
        {
          "id": "visa-type-2",
          "title": "الدخل والتأمين والشروط",
          "body": "يشترط عادة دخل إجمالي لا يقل عن الحد الأدنى للأجور وألا تقل حصة كل فرد عن ثلثه، وتأمين صحي للجميع وعنوان مسجل وإثبات عدم الإدانة بجرائم ضد الأسرة خلال السنوات الخمس السابقة. توجد استثناءات قانونية من شرط إقامة الكفيل الأجنبي سنة واحدة.",
          "table": {
            "headers": [
              "عدد أفراد الأسرة",
              "الحد الأدنى النظري"
            ],
            "rows": [
              [
                "شخصان",
                "حد أدنى واحد للأجر"
              ],
              [
                "3 أشخاص",
                "حد أدنى واحد للأجر"
              ],
              [
                "4 أشخاص",
                "أربعة أثلاث الحد الأدنى"
              ],
              [
                "5 أشخاص",
                "خمسة أثلاث الحد الأدنى"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "الوثائق المطلوبة",
          "body": "جهز الجوازات وشهادات الزواج والميلاد والحضانة أو موافقة الوالدين وإثبات السكن والدخل والتأمين. احصل على التصديق المناسب بحسب الدولة المصدرة والترجمة التركية المعتمدة عند الطلب. يجب ألا يقل عمر الزوجين عن 18 عاماً وأن يكون الزواج حقيقياً."
        },
        {
          "id": "visa-type-4",
          "title": "المدة والتكاليف والمدرسة",
          "body": "تصدر الإقامة العائلية حتى ثلاث سنوات ولا تتجاوز مدة إقامة الكفيل. رسم البطاقة في 2026 هو 964 ليرة لكل شخص، وبطاقتان تكلفان 1,928 ليرة دون الرسوم الأخرى. يستطيع الطفل حامل الإقامة العائلية الدراسة الابتدائية والثانوية حتى 18 عاماً دون إقامة طالب منفصلة."
        },
        {
          "id": "visa-type-5",
          "title": "استمرار الوضع القانوني",
          "body": "قدم قبل انتهاء البقاء القانوني وجدد في آخر 60 يوماً. عند تغير وضع الكفيل أو وفاته أو الطلاق قد يتاح تصريح آخر وفق الشروط. لا يمنح الزواج من مواطن تركي الجنسية أو حق العمل تلقائياً."
        }
      ],
      "faqs": [
        {
          "question": "هل يمكن تقديم طلبات الأسرة معاً؟",
          "answer": "نعم، جهز ملفات فردية ووثائق الكفيل المشتركة."
        },
        {
          "question": "هل يحتاج الطفل إلى إقامة دراسية؟",
          "answer": "لا للتعليم الابتدائي والثانوي قبل 18 عاماً إذا كانت إقامته العائلية سارية."
        },
        {
          "question": "هل يضمن الزواج الإقامة؟",
          "answer": "لا، يجب استيفاء بقية الشروط."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع تصاريح الإقامة"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "بوابة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية حول الإقامة"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "رسوم بطاقة الإقامة 2026"
        }
      ]
    }
  },
  "turkey-family-reunification-visa": {
    "fr": {
      "title": "Regroupement familial Turquie 2026 : étapes, dossier et délais",
      "metaDescription": "Rejoindre son conjoint en Turquie : visa familial, conditions du répondant, actes étrangers, enfants, délais et renouvellement de l’ikamet.",
      "shortAnswer": "Rejoindre un proche en Turquie nécessite de vérifier d’abord son statut et la relation familiale admissible, puis l’entrée légale et la demande de résidence familiale. Il n’existe pas de regroupement automatique pour tous les liens familiaux.",
      "bosphorasHelp": "Bosphoras coordonne vos démarches pratiques, la recherche de logement et les rendez-vous avec des professionnels indépendants adaptés à votre situation. Les décisions relèvent des autorités.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Étape 1 : examiner le répondant",
          "body": "Un conjoint turc ou un étranger disposant d’un statut admissible peut soutenir la demande du conjoint et des enfants mineurs ou à charge. Vérifiez assurance commune, adresse enregistrée, revenus et casier exigé. En principe, le répondant étranger doit avoir résidé un an ; des exceptions légales existent, notamment selon son statut. Un parent d’un adulte ne relève pas systématiquement de ce régime."
        },
        {
          "id": "visa-type-2",
          "title": "Étape 2 : documents établis à l’étranger",
          "body": "Demandez des actes récents de mariage et de naissance et les jugements de garde, le cas échéant. Selon l’État émetteur, faites apostiller ou légaliser les documents puis réaliser la traduction certifiée. Comparez les noms, dates et translittérations. Si la garde est partagée et l’autre parent vit à l’étranger, son accord peut être requis."
        },
        {
          "id": "visa-type-3",
          "title": "Étape 3 : entrée et dépôt",
          "body": "Si une autorisation consulaire est requise pour le motif familial, présentez le dossier à la représentation turque compétente. L’entrée ne vaut pas ikamet. Une fois légalement en Turquie, déposez sur e-ikamet avant expiration, puis remettez les pièces indiquées. Le délai ordinaire de décision est de 90 jours à partir du dossier complet.",
          "table": {
            "headers": [
              "Moments clés",
              "Repères"
            ],
            "rows": [
              [
                "Préparation en amont",
                "Actes, traductions et preuve du répondant"
              ],
              [
                "Dépôt résidence",
                "Avant fin du séjour légal"
              ],
              [
                "Décision",
                "90 jours après dossier complet"
              ],
              [
                "Renouvellement",
                "Derniers 60 jours"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "Étape 4 : budget et durée",
          "body": "Pour trois demandeurs, les cartes 2026 représentent 2 892 TL au total (964 TL chacune), hors droits variables, assurance et formalités. La résidence familiale ne dépasse ni trois ans par délivrance, ni l’échéance du titre du répondant. Un conjoint étranger ne peut pas travailler sur ce seul fondement."
        },
        {
          "id": "visa-type-5",
          "title": "Décès, séparation ou situation de l’enfant",
          "body": "En cas de divorce d’un citoyen turc, un passage en résidence courte durée peut être possible après trois ans de titre familial ; cette durée n’est pas exigée lorsque la violence domestique est judiciairement établie. Des voies existent également après le décès du répondant et pour certains jeunes de 18 ans ayant détenu le titre familial trois ans. Un refus doit être examiné avec son avis officiel et les voies de recours."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je faire venir mes parents adultes ?",
          "answer": "Le titre familial ne les couvre pas automatiquement ; recherchez un autre motif admissible."
        },
        {
          "question": "Le délai de 90 jours commence-t-il à la prise de rendez-vous ?",
          "answer": "Non, il commence avec la remise du dossier complet."
        },
        {
          "question": "Que faire si mon conjoint perd son statut ?",
          "answer": "Examinez immédiatement un changement de fondement de résidence avant toute expiration."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère turc des Affaires étrangères"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Règles générales des visas"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres de séjour"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles sur la résidence"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Tarifs des cartes de résidence 2026"
        }
      ]
    },
    "en": {
      "title": "Turkey family reunification visa 2026: steps and documents",
      "metaDescription": "Join your spouse in Turkey: sponsor requirements, foreign marriage records, child consent, residence processing and renewal deadlines.",
      "shortAnswer": "Family reunification starts with the sponsor's status and the eligible family relationship, followed by lawful entry and the family residence application. Not every family relationship qualifies automatically.",
      "bosphorasHelp": "Bosphoras coordinates practical relocation arrangements, housing and appointments with independent specialists suited to your circumstances. Decisions remain with public authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Step 1: assess the sponsor",
          "body": "A Turkish spouse or foreigner with qualifying status may support an eligible spouse and minor or dependent children. Review joint insurance, registered address, income and required criminal record. Foreign sponsors generally need one year of residence, subject to statutory exceptions. An adult applicant's parents do not automatically qualify."
        },
        {
          "id": "visa-type-2",
          "title": "Step 2: prepare foreign civil documents",
          "body": "Obtain current marriage and birth records and custody orders where applicable. Arrange apostille or legalisation according to the issuing state and certified translations. Compare name spellings and dates. Shared custody may require consent from the parent living abroad."
        },
        {
          "id": "visa-type-3",
          "title": "Step 3: entry and application",
          "body": "Where consular clearance is required for family travel, apply at the appropriate mission. Entry is not a residence permit. While lawfully in Turkey, file through e-ikamet before expiry and submit the requested evidence. The usual decision deadline starts upon complete submission.",
          "table": {
            "headers": [
              "Milestone",
              "Timing"
            ],
            "rows": [
              [
                "Preparation",
                "Civil records and sponsor evidence"
              ],
              [
                "Residence filing",
                "Before lawful stay expires"
              ],
              [
                "Decision",
                "90 days after complete submission"
              ],
              [
                "Renewal",
                "Final 60 days"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "Step 4: fees and duration",
          "body": "The cards for three applicants in 2026 cost TRY 2,892 total (TRY 964 each), excluding variable duties, insurance and paperwork. Family residence is limited to three years per issue and cannot outlast the sponsor's permit. A foreign spouse needs separate work authorisation."
        },
        {
          "id": "visa-type-5",
          "title": "Bereavement, divorce or children reaching adulthood",
          "body": "After divorce from a Turkish citizen, transfer to short-term residence may be available after three years on family residence; that period is waived if a court establishes domestic violence. Routes also exist following a sponsor's death and for certain 18-year-olds who held family residence for three years. Review any refusal notice and appeal rights."
        }
      ],
      "faqs": [
        {
          "question": "Can I bring my adult parents?",
          "answer": "They are not automatically covered; consider another eligible basis."
        },
        {
          "question": "Does the 90-day period begin when I book the appointment?",
          "answer": "No, it starts when complete documents are submitted."
        },
        {
          "question": "What if my spouse loses residence status?",
          "answer": "Assess a lawful change of residence basis before expiry."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Turkish foreign ministry"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General visa rules"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official residence FAQ"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "2026 residence card fees"
        }
      ]
    },
    "ru": {
      "title": "Воссоединение семьи в Турции 2026: порядок, документы и сроки",
      "metaDescription": "Как переехать к супругу в Турцию: требования к спонсору, иностранные свидетельства, согласие родителей, сроки подачи и продления.",
      "shortAnswer": "Воссоединение семьи начинается с проверки статуса спонсора и семейной связи. Затем оформляются законный въезд и семейный ВНЖ. Не каждое родство даёт автоматическое право.",
      "bosphorasHelp": "Bosphoras помогает организовать переезд, поиск жилья и встречи с независимыми специалистами с учётом вашей ситуации. Решения принимают государственные органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Шаг 1: проверить спонсора",
          "body": "Турецкий супруг или иностранец с подходящим статусом может поддержать заявление супруга и несовершеннолетних либо зависимых детей. Проверьте страховку, адрес, доход и справку о судимости. Для иностранного спонсора обычно нужен год проживания, но предусмотрены исключения. Родители взрослого заявителя автоматически не входят в эту категорию."
        },
        {
          "id": "visa-type-2",
          "title": "Шаг 2: подготовить документы из другой страны",
          "body": "Получите актуальные свидетельства о браке и рождении, а при необходимости решения об опеке. В зависимости от страны оформите апостиль или легализацию и заверенный перевод. Сверьте имена и даты. При совместной опеке может требоваться согласие родителя, живущего за границей."
        },
        {
          "id": "visa-type-3",
          "title": "Шаг 3: въезд и подача",
          "body": "Если для семейной поездки нужна консульская виза, обратитесь в компетентное представительство. Въезд не заменяет ВНЖ. В Турции подайте заявление через e-ikamet до окончания законного пребывания и предоставьте документы. Срок решения отсчитывается от полного комплекта.",
          "table": {
            "headers": [
              "Этап",
              "Срок"
            ],
            "rows": [
              [
                "Подготовка",
                "Свидетельства и документы спонсора"
              ],
              [
                "Подача на ВНЖ",
                "До окончания законного пребывания"
              ],
              [
                "Решение",
                "90 дней после полного комплекта"
              ],
              [
                "Продление",
                "Последние 60 дней"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "Шаг 4: расходы и срок",
          "body": "Три карточки в 2026 году стоят 2 892 лиры (по 964), не считая других сборов, страховки и документов. Семейный ВНЖ не превышает три года и срок разрешения спонсора. Для работы иностранному супругу нужно отдельное разрешение."
        },
        {
          "id": "visa-type-5",
          "title": "Смерть, развод и совершеннолетие",
          "body": "После развода с гражданином Турции переход на краткосрочный ВНЖ может быть возможен после трёх лет семейного ВНЖ; условие срока не применяется при установленном судом домашнем насилии. Отдельные основания предусмотрены после смерти спонсора и для некоторых достигших 18 лет детей, имевших семейный ВНЖ три года. При отказе изучите уведомление и порядок обжалования."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли перевезти взрослых родителей?",
          "answer": "Семейный ВНЖ автоматически их не охватывает; рассмотрите иное основание."
        },
        {
          "question": "Начинается ли срок 90 дней с записи на приём?",
          "answer": "Нет, с подачи полного комплекта."
        },
        {
          "question": "Что делать при потере статуса супругом?",
          "answer": "Незамедлительно оценить возможность изменения основания до истечения срока."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные вопросы о ВНЖ"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Сборы за карточку ВНЖ в 2026 году"
        }
      ]
    },
    "ar": {
      "title": "لم الشمل في تركيا 2026: الشروط والوثائق وخطوات الإقامة",
      "metaDescription": "دليل الالتحاق بالزوج في تركيا وشروط الكفيل والوثائق الأجنبية وموافقة الوالدين ومواعيد الطلب والتجديد.",
      "shortAnswer": "يبدأ لم الشمل بالتحقق من وضع الكفيل وصلة القرابة المؤهلة ثم الدخول القانوني وطلب الإقامة العائلية. لا تشمل الإجراءات جميع الأقارب تلقائياً.",
      "bosphorasHelp": "تنسق Bosphoras ترتيبات الانتقال والبحث عن السكن والمواعيد مع مختصين مستقلين بحسب حالتك، وتبقى القرارات من اختصاص السلطات.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "الخطوة الأولى: التحقق من الكفيل",
          "body": "يمكن للزوج التركي أو الأجنبي صاحب الوضع المؤهل دعم طلب الزوج والأطفال القاصرين أو المعالين. تحقق من التأمين والعنوان والدخل والسجل المطلوب. يحتاج الكفيل الأجنبي عادة إلى سنة إقامة مع وجود استثناءات قانونية. لا يشمل هذا المسار والدي الشخص البالغ تلقائياً."
        },
        {
          "id": "visa-type-2",
          "title": "الخطوة الثانية: الوثائق الأجنبية",
          "body": "اطلب شهادات الزواج والميلاد الحديثة وأحكام الحضانة عند الحاجة. احصل على الأبوستيل أو التصديق بحسب الدولة المصدرة ثم الترجمة المعتمدة. راجع الأسماء والتواريخ. عند الحضانة المشتركة قد تشترط موافقة الوالد المقيم في الخارج."
        },
        {
          "id": "visa-type-3",
          "title": "الخطوة الثالثة: الدخول والتقديم",
          "body": "إذا تطلبت السفر العائلي تأشيرة قنصلية فقدم لدى البعثة المختصة. لا يغني الدخول عن تصريح الإقامة. خلال وجودك القانوني قدم عبر البوابة قبل انتهاء المدة وسلم الوثائق المطلوبة. تبدأ مهلة القرار عند اكتمال الملف.",
          "table": {
            "headers": [
              "المرحلة",
              "التوقيت"
            ],
            "rows": [
              [
                "التحضير",
                "وثائق الحالة المدنية والكفيل"
              ],
              [
                "طلب الإقامة",
                "قبل انتهاء البقاء القانوني"
              ],
              [
                "القرار",
                "90 يوماً بعد اكتمال الملف"
              ],
              [
                "التجديد",
                "آخر 60 يوماً"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "الخطوة الرابعة: الرسوم والمدة",
          "body": "تكلف ثلاث بطاقات في 2026 مبلغ 2,892 ليرة (964 لكل بطاقة) دون الرسوم المتغيرة والتأمين والوثائق. لا تتجاوز الإقامة العائلية ثلاث سنوات أو صلاحية إقامة الكفيل. يحتاج الزوج الأجنبي إلى إذن منفصل للعمل."
        },
        {
          "id": "visa-type-5",
          "title": "الوفاة والطلاق وبلوغ سن الرشد",
          "body": "قد يتاح الانتقال إلى إقامة قصيرة الأجل بعد الطلاق من مواطن تركي لمن حمل الإقامة العائلية ثلاث سنوات؛ يعفى من هذه المدة إذا ثبت العنف الأسري قضائياً. وتوجد مسارات بعد وفاة الكفيل ولأطفال مؤهلين بلغوا 18 عاماً وحملوا الإقامة العائلية ثلاث سنوات. عند الرفض ادرس الإخطار وطرق الطعن."
        }
      ],
      "faqs": [
        {
          "question": "هل يمكن إحضار الوالدين البالغين؟",
          "answer": "لا تشملهم الإقامة العائلية تلقائياً؛ ادرس أساساً آخر مؤهلاً."
        },
        {
          "question": "هل تبدأ مهلة 90 يوماً من حجز الموعد؟",
          "answer": "لا، تبدأ من تسليم الملف المكتمل."
        },
        {
          "question": "ماذا لو فقد الزوج وضع إقامته؟",
          "answer": "ادرس تغيير أساس الإقامة قانونياً قبل انتهاء المدة."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية التركية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع تصاريح الإقامة"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "بوابة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية حول الإقامة"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "رسوم بطاقة الإقامة 2026"
        }
      ]
    }
  },
  "turkey-property-owner-visa": {
    "fr": {
      "title": "Visa propriétaire en Turquie 2026 : ikamet dès 200 000 $ ?",
      "metaDescription": "Acheter en Turquie : conditions du titre de séjour propriétaire à 200 000 $, tapu, adresse, frais et différence avec la citoyenneté à 400 000 $.",
      "shortAnswer": "L’achat d’un logement peut constituer un motif de résidence courte durée. Pour les acquisitions concernées par le seuil actuel, le formulaire officiel exige une valeur d’au moins 200 000 USD équivalents en livres turques à la date d’acquisition. Le titre n’est pas automatique.",
      "bosphorasHelp": "Bosphoras coordonne vos démarches pratiques, la recherche de logement et les rendez-vous avec des professionnels indépendants adaptés à votre situation. Les décisions relèvent des autorités.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Choisir le bon objectif",
          "body": "Un acheteur admissible peut acquérir sans être titulaire d’un ikamet. L’entrée pour visiter un bien dépend des règles touristiques ou commerciales. Le titre propriétaire correspond à un logement effectivement utilisé pour votre résidence ; la citoyenneté immobilière est une procédure exceptionnelle distincte.",
          "table": {
            "headers": [
              "Objectif",
              "Règle principale"
            ],
            "rows": [
              [
                "Visiter et acheter",
                "Régime d’entrée selon passeport"
              ],
              [
                "Résidence propriétaire",
                "Logement admissible à partir de 200 000 USD pour les acquisitions soumises au seuil"
              ],
              [
                "Citoyenneté par immobilier",
                "400 000 USD et interdiction de vente 3 ans"
              ],
              [
                "Travail",
                "Autorisation distincte"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Vérifier le seuil avant l’achat",
          "body": "Le seuil doit être apprécié à la date d’acquisition selon les justificatifs fonciers et règles applicables. Les biens acquis avant l’entrée en vigueur du régime actuel, les successions et donations peuvent nécessiter une analyse particulière ; le formulaire prévoit un rapport d’évaluation actuel pour les biens hérités ou donnés. Un prix publicitaire seul ne prouve pas l’éligibilité."
        },
        {
          "id": "visa-type-3",
          "title": "Tapu, logement et adresse",
          "body": "Vérifiez la nature résidentielle, la propriété au nom du demandeur, les charges et restrictions, ainsi que l’admissibilité de l’adresse aux nouvelles inscriptions. Le logement doit servir à y vivre : un bien mis en location pour générer des revenus ne répond pas à ce motif. Pour une copropriété familiale, préparez les preuves du lien familial et de la propriété."
        },
        {
          "id": "visa-type-4",
          "title": "Dossier, durée et frais",
          "body": "Déposez e-ikamet avant la fin du séjour légal. Préparez le titre de propriété, passeport, photos, assurance, justificatifs de ressources et adresse selon les instructions. Le permis courte durée ordinaire est généralement limité à deux ans par délivrance. La carte coûte 964 TL en 2026, hors droits de séjour et autres frais. Le traitement ordinaire est de 90 jours à compter du dossier complet."
        },
        {
          "id": "visa-type-5",
          "title": "Acheter sans risque inutile",
          "body": "Avant le versement d’un acompte, faites contrôler par un professionnel indépendant le titre, les droits du vendeur, les restrictions de nationalité et d’adresse, le prix déclaré et les paiements. Budgétez frais fonciers, charges de copropriété et entretien. Si vous visez la citoyenneté, exigez l’examen spécifique du seuil de 400 000 USD et de la conformité de l’opération."
        }
      ],
      "faqs": [
        {
          "question": "Un logement de 150 000 $ suffit-il ?",
          "answer": "Pas pour une nouvelle acquisition soumise au seuil de 200 000 USD. Un bien ancien peut relever d’autres règles."
        },
        {
          "question": "Puis-je louer mon logement et obtenir le titre propriétaire ?",
          "answer": "Le motif exige un logement utilisé pour habiter, non pour générer des revenus locatifs."
        },
        {
          "question": "200 000 $ donnent-ils la nationalité ?",
          "answer": "Non, le dispositif de citoyenneté immobilière exige notamment 400 000 USD et trois ans sans vente."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres de séjour"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/Ikamet/BasvuruFormuOrnegiUzatma/BasvuruFormuBos?tur=0",
          "label": "Formulaire officiel et justificatifs immobiliers"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Agence nationale d’investissement"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Tarifs des cartes de résidence 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles sur la résidence"
        }
      ]
    },
    "en": {
      "title": "Turkey property owner visa 2026: $200,000 residence route",
      "metaDescription": "Buying a home in Turkey: $200,000 residence threshold, title deed, eligible address, fees and the separate $400,000 citizenship route.",
      "shortAnswer": "Home ownership may qualify for short-term residence. For purchases subject to the current threshold, the official form requires a residential value of at least USD 200,000 equivalent in Turkish lira on the acquisition date. Approval is not automatic.",
      "bosphorasHelp": "Bosphoras coordinates practical relocation arrangements, housing and appointments with independent specialists suited to your circumstances. Decisions remain with public authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Choose your objective",
          "body": "Eligible foreign buyers may acquire property without residence status. Entry for viewings depends on tourist or commercial rules. Owner residence requires an eligible home used for living; exceptional citizenship through real estate is separate.",
          "table": {
            "headers": [
              "Objective",
              "Main requirement"
            ],
            "rows": [
              [
                "Visit and buy",
                "Passport-specific entry route"
              ],
              [
                "Owner residence",
                "Eligible home from USD 200,000 for acquisitions subject to threshold"
              ],
              [
                "Property citizenship",
                "USD 400,000 and 3-year no-sale restriction"
              ],
              [
                "Employment",
                "Separate authorisation"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Check the threshold before buying",
          "body": "The threshold is assessed at acquisition under applicable title and evidence rules. Properties acquired before the current regime, inheritance and gifts may require separate assessment; the official form requests a current valuation report for inherited or donated properties. An advertised price alone does not establish eligibility."
        },
        {
          "id": "visa-type-3",
          "title": "Title, residential use and address",
          "body": "Review residential classification, ownership in the applicant's name, encumbrances and restrictions, and address eligibility for new registrations. The property must be used as a home, not for rental income under this residence basis. Joint family ownership requires evidence of both title and relationship."
        },
        {
          "id": "visa-type-4",
          "title": "Application, duration and cost",
          "body": "Apply through e-ikamet before lawful stay expires. Prepare title deed, passport, photographs, insurance, financial and address evidence as required. Ordinary short-term residence is usually limited to two years per issue. The 2026 card charge is TRY 964 excluding residence duties and other costs. Complete applications are ordinarily decided within 90 days."
        },
        {
          "id": "visa-type-5",
          "title": "Protect the purchase",
          "body": "Before paying a deposit, obtain independent review of title, seller authority, nationality and address restrictions, declared value and payments. Budget title fees, building charges and maintenance. If citizenship is your goal, separately check the USD 400,000 threshold and all transaction conditions."
        }
      ],
      "faqs": [
        {
          "question": "Is a USD 150,000 home enough?",
          "answer": "Not for a new purchase subject to the USD 200,000 threshold; earlier acquisitions may follow different rules."
        },
        {
          "question": "Can I rent out the home and use this permit?",
          "answer": "This basis requires residential use by the owner, not rental-income use."
        },
        {
          "question": "Does USD 200,000 qualify for citizenship?",
          "answer": "No; real estate citizenship requires at least USD 400,000 and a three-year no-sale commitment, among other conditions."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/Ikamet/BasvuruFormuOrnegiUzatma/BasvuruFormuBos?tur=0",
          "label": "Official property residence application evidence"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "National investment agency"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "2026 residence card fees"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official residence FAQ"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ по недвижимости в Турции 2026: порог 200 000 долларов",
      "metaDescription": "Покупка жилья для ВНЖ: порог $200 000, тапу, допустимость адреса, расходы и отличие от гражданства за $400 000.",
      "shortAnswer": "Покупка жилья может служить основанием краткосрочного ВНЖ. Для сделок, подпадающих под действующий порог, официальный формуляр требует стоимость не менее 200 000 долларов США в эквиваленте лир на дату приобретения. Одобрение не гарантировано.",
      "bosphorasHelp": "Bosphoras помогает организовать переезд, поиск жилья и встречи с независимыми специалистами с учётом вашей ситуации. Решения принимают государственные органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Определите цель покупки",
          "body": "Иностранец, имеющий право приобретения, может купить объект без ВНЖ. Для осмотра действуют туристические или деловые правила въезда. ВНЖ собственника предполагает использование подходящего жилья для проживания, а инвестиционное гражданство оформляется отдельно.",
          "table": {
            "headers": [
              "Цель",
              "Основное условие"
            ],
            "rows": [
              [
                "Осмотр и покупка",
                "Правила въезда по паспорту"
              ],
              [
                "ВНЖ собственника",
                "Жильё от 200 000 долларов для сделок под действующим порогом"
              ],
              [
                "Гражданство за недвижимость",
                "400 000 долларов и запрет продажи 3 года"
              ],
              [
                "Работа",
                "Отдельное разрешение"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Проверка стоимости до сделки",
          "body": "Порог оценивается на дату приобретения по применимым правилам и документам. Для ранее приобретённых объектов, наследства и дарения может потребоваться отдельная оценка; официальный формуляр предусматривает актуальный отчёт об оценке подаренных или унаследованных объектов. Цена объявления не подтверждает право на ВНЖ."
        },
        {
          "id": "visa-type-3",
          "title": "Тапу, использование и адрес",
          "body": "Проверьте жилое назначение, право собственности заявителя, обременения и допустимость адреса для новой регистрации. Объект должен использоваться для проживания собственника, а не для получения арендного дохода по этому основанию. При совместной семейной собственности подготовьте документы о родстве и долях."
        },
        {
          "id": "visa-type-4",
          "title": "Документы, сроки и расходы",
          "body": "Подайте через e-ikamet до окончания законного пребывания. Подготовьте тапу, паспорт, фотографии, страховку, документы о средствах и адресе. Обычный краткосрочный ВНЖ обычно выдаётся до двух лет. Карточка стоит 964 лиры в 2026 году без других сборов. Срок рассмотрения полного комплекта обычно до 90 дней."
        },
        {
          "id": "visa-type-5",
          "title": "Безопасная покупка",
          "body": "До внесения задатка поручите независимому специалисту проверить титул, полномочия продавца, ограничения по гражданству и адресу, заявленную стоимость и платежи. Учтите регистрационные сборы, коммунальные расходы и обслуживание. Для гражданства отдельно проверьте порог 400 000 долларов и все требования сделки."
        }
      ],
      "faqs": [
        {
          "question": "Достаточно ли жилья за $150 000?",
          "answer": "Не для новой сделки под порогом $200 000; для прежних покупок могут действовать иные правила."
        },
        {
          "question": "Можно ли сдавать объект и оформить ВНЖ собственника?",
          "answer": "По этому основанию жильё используется для проживания, а не получения дохода от аренды."
        },
        {
          "question": "Даёт ли $200 000 право на гражданство?",
          "answer": "Нет, для гражданства за недвижимость требуется от $400 000 и запрет продажи на три года наряду с другими условиями."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/Ikamet/BasvuruFormuOrnegiUzatma/BasvuruFormuBos?tur=0",
          "label": "Официальный перечень документов собственника"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Государственное агентство инвестиций"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Сборы за карточку ВНЖ в 2026 году"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные вопросы о ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "إقامة مالك العقار في تركيا 2026: شرط 200 ألف دولار",
      "metaDescription": "شراء منزل في تركيا للإقامة: حد 200 ألف دولار والطابو والعنوان والرسوم والفرق عن الجنسية باستثمار 400 ألف دولار.",
      "shortAnswer": "قد يوفر شراء مسكن أساساً للإقامة قصيرة الأجل. بالنسبة للمشتريات الخاضعة للحد الحالي يشترط النموذج الرسمي قيمة لا تقل عن 200 ألف دولار بما يعادلها بالليرة يوم الشراء، ولا تضمن الملكية الموافقة.",
      "bosphorasHelp": "تنسق Bosphoras ترتيبات الانتقال والبحث عن السكن والمواعيد مع مختصين مستقلين بحسب حالتك، وتبقى القرارات من اختصاص السلطات.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "تحديد هدف الشراء",
          "body": "يمكن للأجنبي المخول بالتملك الشراء دون إقامة مسبقة. يخضع دخول المعاينة لقواعد السياحة أو الأعمال. تتطلب إقامة المالك مسكناً يستخدمه للسكن، بينما الجنسية عبر الاستثمار العقاري مسار مستقل.",
          "table": {
            "headers": [
              "الهدف",
              "الشرط الرئيسي"
            ],
            "rows": [
              [
                "المعاينة والشراء",
                "نظام الدخول بحسب الجواز"
              ],
              [
                "إقامة المالك",
                "مسكن مؤهل من 200 ألف دولار للمشتريات الخاضعة للحد"
              ],
              [
                "الجنسية العقارية",
                "400 ألف دولار وعدم البيع ثلاث سنوات"
              ],
              [
                "العمل",
                "إذن مستقل"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "التحقق من الحد قبل الشراء",
          "body": "يقيم الحد في تاريخ التملك وفق الوثائق والقواعد المعمول بها. قد تحتاج العقارات المشتراة قبل النظام الحالي أو الموروثة أو الموهوبة إلى تقييم منفصل؛ يطلب النموذج الرسمي تقرير تقييم حديثاً للعقارات الموروثة أو الموهوبة. لا يكفي سعر الإعلان لإثبات الأهلية."
        },
        {
          "id": "visa-type-3",
          "title": "الطابو والسكن والعنوان",
          "body": "تحقق من الصفة السكنية والملكية باسم مقدم الطلب والقيود والرهون وأهلية العنوان للتسجيل الجديد. يجب استخدام العقار للسكن لا لتحقيق دخل الإيجار على هذا الأساس. في الملكية العائلية المشتركة جهز مستندات القرابة والملكية."
        },
        {
          "id": "visa-type-4",
          "title": "الطلب والمدة والتكاليف",
          "body": "قدم عبر بوابة الإقامة قبل انتهاء البقاء القانوني. جهز الطابو والجواز والصور والتأمين وإثبات الموارد والعنوان بحسب التعليمات. تصدر الإقامة قصيرة الأجل العادية عادة لمدة تصل إلى سنتين. رسوم البطاقة في 2026 هي 964 ليرة دون الحقوق الأخرى. يدرس الملف المكتمل عادة خلال 90 يوماً."
        },
        {
          "id": "visa-type-5",
          "title": "حماية قرار الشراء",
          "body": "قبل دفع العربون اطلب مراجعة مستقلة للملكية وصلاحية البائع وقيود الجنسية والعنوان والقيمة المعلنة والتحويلات. احسب رسوم التسجيل والصيانة والمصاريف المشتركة. إذا كانت الجنسية هدفك فافحص بصورة منفصلة حد 400 ألف دولار وجميع شروط العملية."
        }
      ],
      "faqs": [
        {
          "question": "هل يكفي عقار بقيمة 150 ألف دولار؟",
          "answer": "لا لشراء جديد خاضع لحد 200 ألف دولار؛ قد تختلف قواعد العقارات القديمة."
        },
        {
          "question": "هل أستطيع تأجير العقار وطلب إقامة المالك؟",
          "answer": "يشترط هذا الأساس استخدام المسكن للإقامة لا لتحقيق دخل الإيجار."
        },
        {
          "question": "هل يمنح استثمار 200 ألف دولار الجنسية؟",
          "answer": "لا، يشترط مسار الجنسية العقارية 400 ألف دولار على الأقل وعدم البيع ثلاث سنوات وغيرها من الشروط."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع تصاريح الإقامة"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "بوابة الإقامة الرسمية"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/Ikamet/BasvuruFormuOrnegiUzatma/BasvuruFormuBos?tur=0",
          "label": "نموذج الإقامة ووثائق العقار الرسمية"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "هيئة الاستثمار الوطنية"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "رسوم بطاقة الإقامة 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية حول الإقامة"
        }
      ]
    }
  },
  "turkey-retirement-visa": {
    "fr": {
      "title": "Prendre sa retraite en Turquie en 2026 : visa, ikamet et santé",
      "metaDescription": "Retraite en Turquie : séjour 90/180, résidence, pension étrangère, assurance santé, budget logement et carte d’ikamet à 964 TL.",
      "shortAnswer": "La Turquie ne dispose pas d’une catégorie autonome de visa de retraite dans sa nomenclature générale. Un retraité peut effectuer un court séjour selon son passeport, puis demander un titre correspondant à un motif légal admissible.",
      "bosphorasHelp": "Bosphoras coordonne les séjours de découverte, la sélection de logements et les rendez-vous avec des professionnels indépendants. L’obtention du statut relève des autorités compétentes.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Choisir la durée de votre installation",
          "body": "Pour découvrir le pays, utilisez la dispense ou le visa correspondant à votre nationalité. De nombreux passeports ordinaires autorisent 90 jours sur 180, mais certains ont des limites plus courtes. Pour passer six mois ou toute l’année en Turquie, un titre de séjour approprié est nécessaire. Une pension étrangère constitue une preuve de ressources, pas un motif garantissant à lui seul un permis."
        },
        {
          "id": "visa-type-2",
          "title": "Retraite, location ou achat",
          "body": "La résidence courte durée ordinaire peut être octroyée jusqu’à deux ans par demande selon le motif. Une demande touristique est évaluée individuellement ; un bail et une pension ne garantissent pas l’accord. Un logement détenu et effectivement utilisé par son propriétaire peut fournir un autre motif, soumis aux conditions foncières et de valeur applicables. Le titre de longue durée exige notamment huit années de résidence admissible.",
          "table": {
            "headers": [
              "Projet",
              "Statut à examiner"
            ],
            "rows": [
              [
                "Découverte de quelques semaines",
                "Visa ou exemption"
              ],
              [
                "Résidence locative",
                "Motif de séjour admissible"
              ],
              [
                "Logement personnel acheté",
                "Titre propriétaire si éligible"
              ],
              [
                "Installation durable",
                "Longue durée après 8 ans admissibles et conditions"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Préparer les ressources et les soins",
          "body": "Rassemblez attestations de pension, relevés bancaires, passeport, justificatifs de domicile, photographies et documents demandés. Avant le déménagement, vérifiez les conditions d’assurance selon l’âge, les maladies préexistantes et les soins réguliers. Les dispenses de justificatif d’assurance pour certains âges ne signifient pas que les soins sont gratuits. N’interrompez pas une couverture existante sans solution de remplacement."
        },
        {
          "id": "visa-type-4",
          "title": "Comparer un budget annuel réel",
          "body": "En plus du loyer, prévoyez charges de résidence, chauffage ou climatisation, santé, transport et retours dans votre pays. La carte de séjour 2026 coûte 964 TL par personne, hors droits de séjour variables. Antalya offre un environnement maritime à l’année ; Bodrum impose d’anticiper la saisonnalité des loyers et Istanbul facilite l’accès à des établissements médicaux spécialisés. Examinez les quartiers proches des transports et des soins."
        },
        {
          "id": "visa-type-5",
          "title": "Pension, fiscalité et renouvellement",
          "body": "Le versement de la pension et sa taxation dépendent du régime d’origine, de la résidence fiscale et de la convention applicable. La résidence administrative n’est pas une détermination fiscale. Préparez le renouvellement dans les 60 derniers jours du titre et conservez les preuves de revenus et d’adresse. Faites examiner les conséquences fiscales avant un transfert durable du foyer."
        }
      ],
      "faqs": [
        {
          "question": "Existe-t-il un visa retraite automatique ?",
          "answer": "Non, il faut identifier un motif de résidence prévu par la réglementation."
        },
        {
          "question": "Une pension suffit-elle à obtenir un ikamet ?",
          "answer": "Non, elle aide à démontrer les ressources mais les autres conditions s’appliquent."
        },
        {
          "question": "Dois-je acheter un logement ?",
          "answer": "Non systématiquement ; le motif de résidence doit toutefois être admissible."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Exemptions par nationalité"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Frais de résidence 2026"
        }
      ]
    },
    "en": {
      "title": "Retire in Turkey 2026: visa, residence, healthcare and costs",
      "metaDescription": "Planning retirement in Turkey? Compare lawful stay, residence options, foreign pension evidence, healthcare, housing and 2026 card fees.",
      "shortAnswer": "Turkey's general visa classification does not include a standalone retirement visa. Retirees can visit under their passport-specific rules and apply for a residence permit based on an eligible legal purpose.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing selection and appointments with independent specialists. Immigration decisions remain with the competent authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Decide how long you want to live in Turkey",
          "body": "For an exploratory trip, use the exemption or visa applicable to your passport. Many ordinary passports allow 90 days in 180, but others have shorter allowances. Spending six months or the whole year in Turkey requires appropriate residence status. A foreign pension provides evidence of means; it is not by itself a guaranteed residence basis."
        },
        {
          "id": "visa-type-2",
          "title": "Renting, buying and residence categories",
          "body": "Ordinary short-term residence can be granted for up to two years per issue according to purpose. Tourist residence is assessed individually; a lease and pension do not guarantee approval. Owner-occupied residential property may provide another basis, subject to applicable property and value rules. Long-term residence requires at least eight eligible years and other conditions.",
          "table": {
            "headers": [
              "Plan",
              "Status to assess"
            ],
            "rows": [
              [
                "Exploratory holiday",
                "Visa or exemption"
              ],
              [
                "Rented home",
                "Eligible residence purpose"
              ],
              [
                "Owner-occupied home",
                "Property residence if eligible"
              ],
              [
                "Permanent settlement",
                "Long-term residence after 8 eligible years and conditions"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Prepare finances and healthcare",
          "body": "Gather pension statements, bank records, passport, address evidence, photographs and required documents. Review insurance conditions relating to age, existing illnesses and regular treatment before moving. Age-based exemptions from insurance-document requirements do not make treatment free. Do not cancel existing coverage before arranging a replacement."
        },
        {
          "id": "visa-type-4",
          "title": "Build a realistic annual budget",
          "body": "Budget rent, building fees, heating or air conditioning, healthcare, transport and return journeys. Turkey's 2026 residence card costs TRY 964 per person, excluding variable residence duties. Antalya offers year-round coastal living, Bodrum requires attention to seasonal rents, and Istanbul offers access to specialist medical facilities. Consider neighbourhoods near transport and healthcare."
        },
        {
          "id": "visa-type-5",
          "title": "Pensions, tax and renewals",
          "body": "Pension payment and taxation depend on the originating scheme, tax residence and relevant treaty. Immigration residence does not determine tax residence. Apply for renewal in the final 60 days and retain income and address evidence. Obtain an independent tax assessment before transferring your permanent home."
        }
      ],
      "faqs": [
        {
          "question": "Is there an automatic retirement visa?",
          "answer": "No. You need a residence purpose recognised by the rules."
        },
        {
          "question": "Does a pension guarantee an ikamet?",
          "answer": "No; it supports proof of means but other requirements still apply."
        },
        {
          "question": "Must I buy a property?",
          "answer": "Not necessarily, but you must qualify under a residence category."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa rules by nationality"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "2026 residence fees"
        }
      ]
    },
    "ru": {
      "title": "Пенсия в Турции в 2026 году: виза, ВНЖ, медицина и расходы",
      "metaDescription": "Как пенсионеру переехать в Турцию: сроки безвизового пребывания, ВНЖ, подтверждение пенсии, страховка, жильё и сборы 2026 года.",
      "shortAnswer": "В общей классификации турецких виз нет отдельной пенсионной визы. Пенсионер может приехать по правилам своего паспорта и оформить ВНЖ на соответствующем законном основании.",
      "bosphorasHelp": "Bosphoras помогает организовать ознакомительные поездки, подбор жилья и консультации независимых специалистов. Решения о статусе принимают компетентные органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "На какой срок переезжать",
          "body": "Для ознакомительной поездки используйте визу или безвизовый режим по вашему гражданству. Многие обычные паспорта дают право на 90 дней из 180, но существуют более короткие лимиты. Для проживания полгода или весь год необходим подходящий статус. Зарубежная пенсия подтверждает средства, но сама по себе не гарантирует ВНЖ."
        },
        {
          "id": "visa-type-2",
          "title": "Аренда, покупка и виды ВНЖ",
          "body": "Обычный краткосрочный ВНЖ может выдаваться до двух лет на соответствующем основании. Туристические заявления рассматриваются индивидуально; договор аренды и пенсия не гарантируют одобрения. Собственное жильё, используемое для проживания, может стать другим основанием при соблюдении требований к недвижимости и стоимости. Долгосрочный ВНЖ требует не менее восьми подходящих лет и выполнения других условий.",
          "table": {
            "headers": [
              "План",
              "Какой статус проверить"
            ],
            "rows": [
              [
                "Ознакомительная поездка",
                "Виза или безвизовый въезд"
              ],
              [
                "Аренда жилья",
                "Допустимое основание ВНЖ"
              ],
              [
                "Собственное жильё",
                "ВНЖ собственника при соответствии"
              ],
              [
                "Постоянный переезд",
                "Долгосрочный ВНЖ после 8 подходящих лет"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Доходы и медицинское обслуживание",
          "body": "Подготовьте справки о пенсии, банковские выписки, паспорт, подтверждение адреса, фотографии и необходимые документы. Оцените условия страхования с учётом возраста, хронических заболеваний и регулярного лечения. Освобождение от предъявления страховки по возрасту не означает бесплатную медицину. Не прекращайте действующее страхование без замены."
        },
        {
          "id": "visa-type-4",
          "title": "Годовой бюджет",
          "body": "Кроме аренды учтите коммунальные платежи, обслуживание дома, отопление и кондиционирование, медицину, транспорт и поездки домой. Карточка ВНЖ стоит 964 лиры в 2026 году без переменных сборов. Анталья подходит для круглогодичной жизни у моря, в Бодруме важна сезонность цен, а в Стамбуле доступны специализированные клиники. Оцените расстояние до транспорта и врачей."
        },
        {
          "id": "visa-type-5",
          "title": "Пенсия, налоги и продление",
          "body": "Порядок выплаты и налогообложения пенсии зависит от страны её происхождения, налогового резидентства и соглашения. Миграционный ВНЖ не определяет налоговый статус. Подавайте на продление в последние 60 дней и храните документы о доходах и жилье. До постоянного переезда получите независимую налоговую консультацию."
        }
      ],
      "faqs": [
        {
          "question": "Существует ли автоматическая пенсионная виза?",
          "answer": "Нет, необходимо предусмотренное законом основание ВНЖ."
        },
        {
          "question": "Гарантирует ли пенсия икамет?",
          "answer": "Нет, она подтверждает доход, но действуют остальные требования."
        },
        {
          "question": "Обязательно ли покупать жильё?",
          "answer": "Нет, если имеется другое подходящее основание."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила по гражданству"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Сборы за ВНЖ в 2026 году"
        }
      ]
    },
    "ar": {
      "title": "التقاعد في تركيا 2026: التأشيرة والإقامة والصحة والتكاليف",
      "metaDescription": "دليل المتقاعدين في تركيا: مدة الزيارة وخيارات الإقامة والمعاش الأجنبي والتأمين والسكن ورسوم بطاقة الإقامة.",
      "shortAnswer": "لا توجد فئة مستقلة لتأشيرة التقاعد في التصنيف التركي العام. يمكن للمتقاعد زيارة تركيا وفق قواعد جوازه ثم طلب تصريح إقامة على أساس قانوني مؤهل.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الاستكشافية واختيار السكن والمواعيد مع مختصين مستقلين، وتبقى قرارات الإقامة من اختصاص السلطات.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "تحديد مدة الاستقرار",
          "body": "للرحلة الاستكشافية استخدم الإعفاء أو التأشيرة المناسبة لجوازك. تسمح جوازات كثيرة بتسعين يوماً من 180 بينما تخضع أخرى لمدد أقصر. للبقاء ستة أشهر أو طوال العام يلزم وضع إقامة مناسب. يشكل المعاش الأجنبي إثباتاً للموارد لكنه لا يضمن الإقامة بمفرده."
        },
        {
          "id": "visa-type-2",
          "title": "الإيجار والشراء وخيارات الإقامة",
          "body": "قد تصدر الإقامة قصيرة الأجل العادية حتى سنتين حسب الغرض. تدرس طلبات الإقامة السياحية بصورة فردية ولا يضمن عقد الإيجار والمعاش الموافقة. قد يوفر المسكن المملوك والمستخدم للسكن أساساً آخر وفق متطلبات العقار والقيمة. تتطلب الإقامة طويلة الأجل ثماني سنوات مؤهلة على الأقل وشروطاً إضافية.",
          "table": {
            "headers": [
              "الخطة",
              "الوضع المطلوب تقييمه"
            ],
            "rows": [
              [
                "زيارة استكشافية",
                "تأشيرة أو إعفاء"
              ],
              [
                "مسكن مستأجر",
                "غرض إقامة مؤهل"
              ],
              [
                "مسكن مملوك",
                "إقامة المالك عند استيفاء الشروط"
              ],
              [
                "استقرار دائم",
                "إقامة طويلة الأجل بعد 8 سنوات مؤهلة والشروط"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "الموارد والرعاية الصحية",
          "body": "جهز شهادات المعاش والكشوف المصرفية والجواز وإثبات العنوان والصور والوثائق المطلوبة. افحص شروط التأمين بحسب العمر والأمراض السابقة والعلاج المنتظم. لا يعني الإعفاء من إثبات التأمين لبعض الأعمار أن العلاج مجاني. لا توقف تغطية قائمة قبل ترتيب بديل."
        },
        {
          "id": "visa-type-4",
          "title": "ميزانية سنوية واقعية",
          "body": "احسب الإيجار ورسوم المبنى والتدفئة والتكييف والعلاج والنقل وزيارات بلدك الأصلي. تبلغ رسوم بطاقة الإقامة لعام 2026 مبلغ 964 ليرة للشخص دون الرسوم المتغيرة. تناسب أنطاليا الحياة الساحلية طوال العام، بينما تتطلب بودروم الانتباه للموسمية، وتوفر إسطنبول مؤسسات طبية متخصصة. اختر حياً قريباً من المواصلات والرعاية."
        },
        {
          "id": "visa-type-5",
          "title": "المعاش والضرائب والتجديد",
          "body": "تتوقف طريقة صرف المعاش والضريبة على نظامه الأصلي والإقامة الضريبية والاتفاقية المعنية. لا يحدد تصريح الإقامة وضعك الضريبي. قدم التجديد في آخر 60 يوماً واحتفظ بإثباتات الدخل والعنوان. اطلب تقييماً ضريبياً مستقلاً قبل نقل مقر معيشتك بصورة دائمة."
        }
      ],
      "faqs": [
        {
          "question": "هل توجد تأشيرة تقاعد تلقائية؟",
          "answer": "لا، يلزم أساس إقامة معترف به قانوناً."
        },
        {
          "question": "هل يضمن المعاش الإيكامت؟",
          "answer": "لا، يثبت الموارد وتبقى بقية الشروط واجبة."
        },
        {
          "question": "هل يجب شراء عقار؟",
          "answer": "ليس بالضرورة إذا توفر أساس إقامة آخر مؤهل."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "الإعفاءات حسب الجنسية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامات"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "بوابة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "رسوم الإقامة 2026"
        }
      ]
    }
  },
  "turkey-digital-nomad-visa": {
    "fr": {
      "title": "Visa digital nomad Turquie 2026 : âge, salaire et demande",
      "metaDescription": "Télétravail en Turquie : programme officiel pour les 21–55 ans, revenus de 3 000 $ par mois, diplôme, certificat et démarches consulaires.",
      "shortAnswer": "Le programme Digital Nomads Türkiye prévoit un certificat d’identification avant la demande de visa. Les candidats doivent notamment être âgés de 21 à 55 ans, titulaires d’un diplôme universitaire, citoyens d’un pays éligible et justifier d’au moins 3 000 USD mensuels ou 36 000 USD annuels.",
      "bosphorasHelp": "Bosphoras coordonne les séjours de découverte, la sélection de logements et les rendez-vous avec des professionnels indépendants. L’obtention du statut relève des autorités compétentes.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Vérifier la nationalité et le profil",
          "body": "Le programme accepte une liste déterminée de nationalités, comprenant notamment la France, l’Allemagne, le Royaume-Uni, les États-Unis, le Canada, la Russie et plusieurs autres pays européens. Le Kazakhstan ne figure pas dans la liste publiée par le programme. La nationalité, et non le pays de résidence, est déterminante. Le candidat doit exercer à distance pour une entreprise ou des clients établis hors de Turquie.",
          "table": {
            "headers": [
              "Condition",
              "Exigence publiée"
            ],
            "rows": [
              [
                "Âge",
                "21–55 ans"
              ],
              [
                "Études",
                "Diplôme universitaire"
              ],
              [
                "Revenu",
                "3 000 USD/mois ou 36 000 USD/an"
              ],
              [
                "Passeport",
                "Au moins 6 mois de validité à l’arrivée"
              ],
              [
                "Activité",
                "Entreprise ou clients hors de Turquie"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Dossier du certificat numérique",
          "body": "Préparez passeport, photographie biométrique, diplôme, preuve de revenus et contrat de travail ou contrat de prestation avec une entreprise hors de Turquie. Pour un indépendant, fournissez les contrats et justificatifs démontrant l’activité étrangère. Déposez sur digitalnomads.goturkiye.com ; le certificat n’est pas lui-même le visa."
        },
        {
          "id": "visa-type-3",
          "title": "Du certificat au visa et au séjour",
          "body": "Après obtention du certificat, effectuez la demande auprès de la représentation turque compétente ou suivez la procédure indiquée pour les candidats déjà présents légalement en Turquie. Les frais, dates et durée du visa dépendent de la décision applicable : ne présumez pas d'une durée uniforme ni d'un droit de résidence de plusieurs années. Vérifiez le statut requis pour tout séjour prolongé."
        },
        {
          "id": "visa-type-4",
          "title": "Travail à distance et fiscalité",
          "body": "Le programme vise une activité liée à l’étranger. Un contrat turc, une prestation locale ou la gestion opérationnelle d’une société turque peut nécessiter un permis de travail. Le certificat ne dispense pas automatiquement des obligations fiscales turques ou du pays d’origine. Examinez résidence fiscale, convention et protection sociale avant de déplacer votre activité."
        },
        {
          "id": "visa-type-5",
          "title": "Organiser son cadre de travail",
          "body": "Avant de signer un bail, vérifiez la connexion fixe réelle dans le logement, l’espace de travail, les nuisances, les transports et les charges. Istanbul offre un réseau d’espaces de travail et de rendez-vous ; Antalya convient au séjour côtier prolongé ; Bodrum demande de contrôler la disponibilité des services hors saison. Gardez un budget pour assurance, formalités et retour d’urgence."
        }
      ],
      "faqs": [
        {
          "question": "Le seuil est-il de 3 000 USD par mois ?",
          "answer": "Oui, ou 36 000 USD annuels selon les conditions officielles du programme."
        },
        {
          "question": "Puis-je travailler pour une société turque ?",
          "answer": "Le programme vise des employeurs ou clients étrangers ; une activité locale nécessite une analyse distincte."
        },
        {
          "question": "Le certificat est-il déjà un visa ?",
          "answer": "Non, il précède les formalités de visa applicables."
        }
      ],
      "sources": [
        {
          "href": "https://digitalnomads.goturkiye.com/",
          "label": "Programme officiel Digital Nomads Türkiye"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Exemptions par nationalité"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "Ministère du Travail"
        }
      ]
    },
    "en": {
      "title": "Turkey digital nomad visa 2026: eligibility, $3,000 income & application",
      "metaDescription": "Work remotely in Turkey: official programme, age 21–55, $3,000 monthly income, university degree, identification certificate and visa steps.",
      "shortAnswer": "Digital Nomads Türkiye requires an identification certificate before visa processing. Applicants must generally be aged 21–55, hold a university degree, have eligible citizenship and demonstrate at least USD 3,000 monthly or USD 36,000 annual income.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing selection and appointments with independent specialists. Immigration decisions remain with the competent authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Check nationality and employment",
          "body": "The programme accepts a defined list of nationalities including France, Germany, the UK, the US, Canada, Russia and several other European countries. Kazakhstan is not on the published list. Citizenship rather than country of residence determines eligibility. Applicants must work remotely for a business or clients outside Turkey.",
          "table": {
            "headers": [
              "Condition",
              "Published requirement"
            ],
            "rows": [
              [
                "Age",
                "21–55"
              ],
              [
                "Education",
                "University degree"
              ],
              [
                "Income",
                "USD 3,000/month or USD 36,000/year"
              ],
              [
                "Passport",
                "At least 6 months' validity on arrival"
              ],
              [
                "Work",
                "Non-Turkish employer or clients"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Prepare the identification certificate",
          "body": "Gather passport, biometric photograph, university degree, evidence of income and an employment or service contract with a company outside Turkey. Freelancers should provide contracts and evidence of overseas activity. Apply through digitalnomads.goturkiye.com; the identification certificate itself is not a visa."
        },
        {
          "id": "visa-type-3",
          "title": "From certificate to visa and residence",
          "body": "Once certified, apply at the competent Turkish mission or follow the designated procedure for applicants already lawfully in Turkey. Fees, validity and permitted stay depend on the applicable decision: do not assume a universal visa duration or a multi-year residence entitlement. Check the required status for longer stays."
        },
        {
          "id": "visa-type-4",
          "title": "Remote work and tax",
          "body": "The programme targets foreign-based activity. Turkish employment, local services or active management of a Turkish company may require a work permit. Certification does not automatically remove Turkish or home-country tax obligations. Assess tax residence, treaty provisions and social insurance before transferring your work."
        },
        {
          "id": "visa-type-5",
          "title": "Choose your working environment",
          "body": "Before signing a lease, verify the actual home internet connection, workspace, noise levels, transport and building charges. Istanbul offers meeting and coworking options, Antalya is a year-round coastal base, and Bodrum requires checks on off-season services. Reserve funds for insurance, documents and emergency travel."
        }
      ],
      "faqs": [
        {
          "question": "Is the income requirement USD 3,000 per month?",
          "answer": "Yes, or USD 36,000 annually under the published criteria."
        },
        {
          "question": "Can I work for a Turkish company?",
          "answer": "The programme targets foreign employers or clients; local work requires separate assessment."
        },
        {
          "question": "Is the identification certificate a visa?",
          "answer": "No, visa formalities are still required."
        }
      ],
      "sources": [
        {
          "href": "https://digitalnomads.goturkiye.com/",
          "label": "Official Digital Nomads Türkiye programme"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa rules by nationality"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "Ministry of Labour"
        }
      ]
    },
    "ru": {
      "title": "Виза цифрового кочевника в Турцию 2026: доход, возраст и оформление",
      "metaDescription": "Программа для удалённой работы: возраст 21–55 лет, доход от $3 000 в месяц, диплом, сертификат и подача на визу.",
      "shortAnswer": "Для программы Digital Nomads Türkiye сначала оформляется идентификационный сертификат. Кандидату обычно требуется возраст 21–55 лет, диплом вуза, подходящее гражданство и подтверждённый доход от 3 000 долларов в месяц или 36 000 в год.",
      "bosphorasHelp": "Bosphoras помогает организовать ознакомительные поездки, подбор жилья и консультации независимых специалистов. Решения о статусе принимают компетентные органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Гражданство и характер работы",
          "body": "В опубликованный перечень входят Франция, Германия, Великобритания, США, Канада, Россия и ряд других европейских стран. Казахстан не входит в опубликованный список. Значение имеет гражданство, а не страна проживания. Работа должна выполняться дистанционно для работодателя или клиентов за пределами Турции.",
          "table": {
            "headers": [
              "Условие",
              "Опубликованное требование"
            ],
            "rows": [
              [
                "Возраст",
                "21–55 лет"
              ],
              [
                "Образование",
                "Диплом вуза"
              ],
              [
                "Доход",
                "$3 000 в месяц или $36 000 в год"
              ],
              [
                "Паспорт",
                "От 6 месяцев действия при въезде"
              ],
              [
                "Работа",
                "Работодатель или клиенты за пределами Турции"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Документы для сертификата",
          "body": "Подготовьте загранпаспорт, биометрическую фотографию, диплом, подтверждение дохода и трудовой либо гражданско-правовой договор с иностранной компанией. Самозанятым пригодятся договоры и подтверждения зарубежной деятельности. Подайте заявку на digitalnomads.goturkiye.com; сертификат не является самой визой."
        },
        {
          "id": "visa-type-3",
          "title": "От сертификата к визе",
          "body": "После получения сертификата обратитесь в компетентное турецкое представительство или следуйте процедуре для уже законно находящихся в Турции заявителей. Сборы, даты действия и разрешённый срок зависят от конкретного решения. Не рассчитывайте на единый для всех срок визы или многолетний ВНЖ без дополнительного оформления."
        },
        {
          "id": "visa-type-4",
          "title": "Удалённая работа и налоги",
          "body": "Программа касается деятельности, связанной с зарубежным рынком. Турецкий трудовой договор, услуги местным клиентам или оперативное управление турецкой компанией могут требовать разрешения на работу. Сертификат не освобождает автоматически от налогов. До переезда оцените налоговое резидентство, соглашения и социальное страхование."
        },
        {
          "id": "visa-type-5",
          "title": "Условия для работы",
          "body": "До аренды проверьте фактический интернет в квартире, рабочее место, шум, транспорт и обслуживание дома. Стамбул удобен для встреч и коворкингов, Анталья — для круглогодичной жизни у моря, а в Бодруме важно проверить услуги вне сезона. Предусмотрите расходы на страховку, документы и экстренные поездки."
        }
      ],
      "faqs": [
        {
          "question": "Нужен ли доход от $3 000 в месяц?",
          "answer": "Да, либо $36 000 в год согласно опубликованным критериям."
        },
        {
          "question": "Можно ли работать на турецкую компанию?",
          "answer": "Программа ориентирована на зарубежных работодателей и клиентов; местная работа оценивается отдельно."
        },
        {
          "question": "Сертификат уже является визой?",
          "answer": "Нет, необходимо пройти соответствующее визовое оформление."
        }
      ],
      "sources": [
        {
          "href": "https://digitalnomads.goturkiye.com/",
          "label": "Официальная программа цифровых кочевников Турции"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила по гражданству"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "Министерство труда"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة الرحالة الرقميين في تركيا 2026: الدخل والعمر وطريقة الطلب",
      "metaDescription": "برنامج العمل عن بعد في تركيا: عمر 21–55 عاماً ودخل 3,000 دولار شهرياً وشهادة جامعية وشهادة تعريف وإجراءات التأشيرة.",
      "shortAnswer": "يتطلب برنامج الرحالة الرقميين في تركيا شهادة تعريف قبل إجراءات التأشيرة. تشمل الشروط عمر 21 إلى 55 عاماً وشهادة جامعية وجنسية مؤهلة ودخلاً لا يقل عن 3,000 دولار شهرياً أو 36,000 سنوياً.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الاستكشافية واختيار السكن والمواعيد مع مختصين مستقلين، وتبقى قرارات الإقامة من اختصاص السلطات.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "الجنسية وطبيعة العمل",
          "body": "تشمل قائمة الجنسيات المنشورة فرنسا وألمانيا وبريطانيا والولايات المتحدة وكندا وروسيا وعدداً من الدول الأوروبية الأخرى. لا تظهر كازاخستان في القائمة المنشورة. العبرة بالجنسية لا بلد الإقامة، ويجب أن يكون العمل عن بعد لصاحب عمل أو عملاء خارج تركيا.",
          "table": {
            "headers": [
              "الشرط",
              "المتطلب المنشور"
            ],
            "rows": [
              [
                "العمر",
                "21–55 عاماً"
              ],
              [
                "التعليم",
                "شهادة جامعية"
              ],
              [
                "الدخل",
                "3,000 دولار شهرياً أو 36,000 سنوياً"
              ],
              [
                "الجواز",
                "صلاحية لا تقل عن 6 أشهر عند الوصول"
              ],
              [
                "العمل",
                "صاحب عمل أو عملاء خارج تركيا"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "وثائق شهادة التعريف",
          "body": "جهز الجواز والصورة البيومترية والشهادة الجامعية وإثبات الدخل وعقد العمل أو الخدمات مع شركة خارج تركيا. للمستقلين جهز العقود وإثبات النشاط الخارجي. قدم عبر digitalnomads.goturkiye.com؛ شهادة التعريف ليست التأشيرة نفسها."
        },
        {
          "id": "visa-type-3",
          "title": "من الشهادة إلى التأشيرة والإقامة",
          "body": "بعد الشهادة قدم لدى البعثة التركية المختصة أو اتبع الإجراء المخصص للمقيمين قانونياً داخل تركيا. تتوقف الرسوم والصلاحية والمدة المسموحة على القرار المعني؛ لا تفترض مدة موحدة أو إقامة لسنوات. تحقق من الوضع اللازم إذا رغبت في البقاء مدة أطول."
        },
        {
          "id": "visa-type-4",
          "title": "العمل عن بعد والضرائب",
          "body": "يستهدف البرنامج النشاط المرتبط بالخارج. قد يتطلب العمل لشركة تركية أو تقديم خدمات محلية أو إدارة شركة تركية فعلياً تصريح عمل. لا تعفي الشهادة تلقائياً من الالتزامات الضريبية. ادرس الإقامة الضريبية والاتفاقيات والتأمين الاجتماعي قبل الانتقال."
        },
        {
          "id": "visa-type-5",
          "title": "اختيار بيئة العمل",
          "body": "قبل الإيجار افحص الاتصال الفعلي بالإنترنت ومكان العمل والضوضاء والمواصلات ورسوم المبنى. توفر إسطنبول أماكن للاجتماعات والعمل المشترك، وتناسب أنطاليا المعيشة الساحلية، وتحتاج بودروم إلى التحقق من الخدمات خارج الموسم. خصص ميزانية للتأمين والوثائق والسفر الطارئ."
        }
      ],
      "faqs": [
        {
          "question": "هل يشترط دخل 3,000 دولار شهرياً؟",
          "answer": "نعم أو 36,000 دولار سنوياً وفق الشروط المنشورة."
        },
        {
          "question": "هل يمكن العمل لشركة تركية؟",
          "answer": "يستهدف البرنامج أصحاب العمل والعملاء خارج تركيا؛ يدرس العمل المحلي بصورة مستقلة."
        },
        {
          "question": "هل شهادة التعريف تأشيرة؟",
          "answer": "لا، تسبق إجراءات التأشيرة المطلوبة."
        }
      ],
      "sources": [
        {
          "href": "https://digitalnomads.goturkiye.com/",
          "label": "برنامج الرحالة الرقميين الرسمي في تركيا"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "الإعفاءات حسب الجنسية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامات"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "بوابة الإقامة الرسمية"
        },
        {
          "href": "https://www.csgb.gov.tr/en/frequently-asked-questions/directorate-general-of-international-labour-force/work-permit/",
          "label": "وزارة العمل"
        }
      ]
    }
  },
  "turkey-transit-visa": {
    "fr": {
      "title": "Visa transit Turquie 2026 : escale à Istanbul et sortie d’aéroport",
      "metaDescription": "Escale à IST ou SAW : découvrez quand un visa de transit est nécessaire, le e-ATV, les bagages, billets séparés et sorties vers Istanbul.",
      "shortAnswer": "Une correspondance internationale sans franchir le contrôle des passeports ne nécessite généralement pas de visa d’entrée turc. Certaines nationalités et certains itinéraires exigent toutefois une autorisation de transit aéroportuaire électronique. Sortir de la zone internationale nécessite le droit d’entrer en Turquie.",
      "bosphorasHelp": "Bosphoras coordonne les séjours de découverte, la sélection de logements et les rendez-vous avec des professionnels indépendants. L’obtention du statut relève des autorités compétentes.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Rester en zone internationale",
          "body": "Si votre billet permet un transfert international sans retrait de bagages ni sortie du terminal, vous restez en transit. Vérifiez que vos bagages sont enregistrés vers la destination finale et que vous disposez de la carte d’embarquement suivante. Un visa pour le pays de destination peut être requis par la compagnie."
        },
        {
          "id": "visa-type-2",
          "title": "Cas particulier de l’e-ATV",
          "body": "Le ministère turc prévoit une autorisation électronique de transit aéroportuaire pour certaines nationalités et correspondances, notamment des itinéraires vers le Mexique, le Panama, la Colombie et le Venezuela. La règle peut dépendre du passeport et de la destination : renseignez les données exactes sur le portail e-Visa et vérifiez les exigences de la compagnie avant le départ. Ne confondez pas e-ATV et autorisation d’entrer en Turquie."
        },
        {
          "id": "visa-type-3",
          "title": "Quand faut-il entrer en Turquie ?",
          "body": "Pour retirer un bagage, changer d’aéroport entre Istanbul Airport (IST) et Sabiha Gökçen (SAW), effectuer une correspondance domestique ou dormir dans un hôtel côté ville, il faut franchir le contrôle frontalier. Le régime d’entrée ordinaire s’applique même pour quelques heures.",
          "table": {
            "headers": [
              "Correspondance",
              "Règle à examiner"
            ],
            "rows": [
              [
                "International → international, sans sortie",
                "Transit ; vérifier éventuel e-ATV"
              ],
              [
                "Billets séparés et bagage à récupérer",
                "Entrée en Turquie"
              ],
              [
                "IST → SAW",
                "Entrée en Turquie"
              ],
              [
                "International → vol intérieur",
                "Contrôle d’entrée"
              ],
              [
                "Visite d’Istanbul pendant l’escale",
                "Visa ou exemption d’entrée"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "Préparer une escale en ville",
          "body": "N’organisez une visite que si vous avez droit d’entrer et suffisamment de temps pour le contrôle, les bagages, les trajets et la sécurité. Les deux aéroports sont éloignés et les temps routiers varient fortement. Pour une escale de nuit, distinguez hôtel en zone internationale et hôtel accessible après immigration ; réservez le type adapté."
        },
        {
          "id": "visa-type-5",
          "title": "Retards et correspondances manquées",
          "body": "Avec des billets séparés, la protection en cas de correspondance manquée peut être limitée. En cas d’annulation, contactez immédiatement le transporteur pour une solution côté transit si vous ne pouvez pas entrer. N’achetez pas un e-Visa touristique si vous êtes inéligible : une décision à la frontière ne remplace pas les conditions de visa."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je visiter Istanbul sans visa pendant quatre heures ?",
          "answer": "Seulement si vous bénéficiez d’une exemption ou possédez une autorisation d’entrée applicable."
        },
        {
          "question": "Changer d’aéroport exige-t-il de passer l’immigration ?",
          "answer": "Oui, IST et SAW sont deux aéroports distincts."
        },
        {
          "question": "Le e-ATV permet-il de visiter la ville ?",
          "answer": "Non, une autorisation de transit ne donne pas par elle-même un droit d’entrée."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Exemptions par nationalité"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Règles générales des visas turcs"
        },
        {
          "href": "https://www.evisa.gov.tr/en/",
          "label": "Portail officiel e-Visa"
        },
        {
          "href": "https://www.visa.gov.tr/",
          "label": "Demande consulaire"
        }
      ]
    },
    "en": {
      "title": "Turkey transit visa 2026: Istanbul layovers, e-ATV & airport transfers",
      "metaDescription": "Connecting at IST or SAW? Check airport transit authorisation, baggage transfers, separate tickets and visa rules for leaving the international zone.",
      "shortAnswer": "International airside connections generally do not require a Turkish entry visa. Certain nationalities and itineraries require electronic airport transit authorisation. Leaving the international transit area requires permission to enter Turkey.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing selection and appointments with independent specialists. Immigration decisions remain with the competent authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Remain airside",
          "body": "If your booking allows an international transfer without collecting baggage or leaving the terminal, you remain in transit. Check that bags are tagged to the final destination and that you have the onward boarding pass. The airline may require proof of admission to your final destination."
        },
        {
          "id": "visa-type-2",
          "title": "Electronic airport transit authorisation",
          "body": "Turkey has electronic airport transit authorisation requirements for certain citizenships and routes, notably some journeys to Mexico, Panama, Colombia and Venezuela. Requirements depend on passport and destination: enter your exact details on the official e-Visa portal and check the airline's requirements before departure. An e-ATV is not Turkish entry authorisation."
        },
        {
          "id": "visa-type-3",
          "title": "When entry clearance is necessary",
          "body": "Collecting baggage, transferring between Istanbul Airport (IST) and Sabiha Gökçen (SAW), taking a domestic connection or sleeping in a landside hotel requires passing immigration. Ordinary entry rules apply even for a few hours.",
          "table": {
            "headers": [
              "Connection",
              "Rule to assess"
            ],
            "rows": [
              [
                "International to international, airside",
                "Transit; check e-ATV"
              ],
              [
                "Separate tickets and baggage collection",
                "Entry into Turkey"
              ],
              [
                "IST to SAW",
                "Entry into Turkey"
              ],
              [
                "International to domestic flight",
                "Immigration clearance"
              ],
              [
                "Istanbul sightseeing",
                "Entry visa or exemption"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "Plan a city layover",
          "body": "Leave the airport only if eligible for entry and if your schedule allows time for immigration, baggage, road travel and security. The two airports are far apart and journey times vary. For an overnight transfer, distinguish an airside transit hotel from a landside hotel requiring entry clearance."
        },
        {
          "id": "visa-type-5",
          "title": "Delays and missed flights",
          "body": "Separate-ticket journeys may offer limited missed-connection protection. If a flight is cancelled, contact the airline for an airside alternative if you cannot enter Turkey. Do not purchase a tourist e-Visa unless eligible: border officials still apply entry requirements."
        }
      ],
      "faqs": [
        {
          "question": "Can I visit Istanbul for four hours without a visa?",
          "answer": "Only if you have a qualifying visa exemption or entry authorisation."
        },
        {
          "question": "Does changing airports require immigration clearance?",
          "answer": "Yes. IST and SAW are different airports."
        },
        {
          "question": "Does an e-ATV let me visit Istanbul?",
          "answer": "No, transit authorisation does not itself grant entry."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa rules by nationality"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General Turkish visa rules"
        },
        {
          "href": "https://www.evisa.gov.tr/en/",
          "label": "Official e-Visa portal"
        },
        {
          "href": "https://www.visa.gov.tr/",
          "label": "Consular visa applications"
        }
      ]
    },
    "ru": {
      "title": "Транзитная виза в Турцию 2026: пересадка в Стамбуле и e-ATV",
      "metaDescription": "Пересадки IST и SAW: когда нужна транзитная виза, электронное разрешение e-ATV, получение багажа и выход в город.",
      "shortAnswer": "При международной пересадке без прохождения паспортного контроля въездная виза Турции обычно не требуется. Для отдельных гражданств и маршрутов необходимо электронное разрешение на аэропортовый транзит. Для выхода из международной зоны нужно право въезда.",
      "bosphorasHelp": "Bosphoras помогает организовать ознакомительные поездки, подбор жилья и консультации независимых специалистов. Решения о статусе принимают компетентные органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Пересадка в международной зоне",
          "body": "Если билет предусматривает международный трансфер без получения багажа и выхода из терминала, вы остаётесь в транзитной зоне. Проверьте регистрацию багажа до конечного пункта и наличие посадочного талона на следующий рейс. Авиакомпания может проверять право въезда в страну назначения."
        },
        {
          "id": "visa-type-2",
          "title": "Электронное транзитное разрешение",
          "body": "Турция предусматривает электронное разрешение на аэропортовый транзит для отдельных гражданств и маршрутов, в том числе некоторых поездок в Мексику, Панаму, Колумбию и Венесуэлу. Условия зависят от паспорта и направления. Укажите точные данные на официальном портале e-Visa и уточните требования перевозчика. e-ATV не является разрешением на въезд в Турцию."
        },
        {
          "id": "visa-type-3",
          "title": "Когда требуется въезд",
          "body": "Получение багажа, переезд между Istanbul Airport (IST) и Sabiha Gökçen (SAW), пересадка на внутренний рейс или ночёвка в гостинице за паспортным контролем требуют пересечения границы. Обычные правила въезда действуют даже при выходе на несколько часов.",
          "table": {
            "headers": [
              "Пересадка",
              "Что проверить"
            ],
            "rows": [
              [
                "Международная без выхода",
                "Транзит и возможное e-ATV"
              ],
              [
                "Раздельные билеты и получение багажа",
                "Право въезда"
              ],
              [
                "IST → SAW",
                "Право въезда"
              ],
              [
                "Международный → внутренний рейс",
                "Паспортный контроль"
              ],
              [
                "Прогулка по Стамбулу",
                "Виза или безвизовый въезд"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "Выход в город во время пересадки",
          "body": "Покидайте аэропорт только при наличии права въезда и запаса времени на паспортный контроль, багаж, дорогу и досмотр. Аэропорты находятся далеко друг от друга, а дорожные условия меняются. Для ночёвки выбирайте гостиницу в международной зоне либо за её пределами в зависимости от права въезда."
        },
        {
          "id": "visa-type-5",
          "title": "Задержка или пропущенный рейс",
          "body": "При раздельных билетах защита пассажира при пропущенной пересадке может быть ограничена. При отмене рейса обратитесь к перевозчику за вариантом в транзитной зоне, если въезд недоступен. Не покупайте электронную туристическую визу при отсутствии права на неё."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли выйти в Стамбул на четыре часа без визы?",
          "answer": "Только при наличии безвизового режима или подходящего разрешения на въезд."
        },
        {
          "question": "При смене аэропорта нужен паспортный контроль?",
          "answer": "Да, IST и SAW — разные аэропорты."
        },
        {
          "question": "Разрешает ли e-ATV выйти в город?",
          "answer": "Нет, транзитное разрешение само по себе не даёт права въезда."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила по гражданству"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила Турции"
        },
        {
          "href": "https://www.evisa.gov.tr/en/",
          "label": "Официальный портал e-Visa"
        },
        {
          "href": "https://www.visa.gov.tr/",
          "label": "Консульское оформление виз"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة الترانزيت في تركيا 2026: مطارات إسطنبول وتصريح e-ATV",
      "metaDescription": "دليل التوقف في IST وSAW: تصريح العبور الإلكتروني واستلام الأمتعة والتذاكر المنفصلة وشروط الخروج إلى إسطنبول.",
      "shortAnswer": "لا تتطلب الرحلات الدولية المتصلة داخل منطقة العبور عادة تأشيرة دخول تركية. لكن بعض الجنسيات والمسارات تحتاج تصريح عبور إلكترونياً. يتطلب الخروج من المنطقة الدولية حق الدخول إلى تركيا.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الاستكشافية واختيار السكن والمواعيد مع مختصين مستقلين، وتبقى قرارات الإقامة من اختصاص السلطات.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "البقاء داخل منطقة العبور",
          "body": "إذا سمحت التذكرة بالانتقال بين رحلتين دوليتين دون استلام الحقائب أو مغادرة المنطقة الدولية فتبقى في العبور. تحقق من تسجيل الحقائب حتى الوجهة النهائية ومن بطاقة الصعود التالية. قد تتحقق شركة الطيران من حق دخول الدولة النهائية."
        },
        {
          "id": "visa-type-2",
          "title": "تصريح العبور الإلكتروني",
          "body": "تفرض تركيا تصريح عبور إلكترونياً لبعض الجنسيات والمسارات، ومنها بعض الرحلات إلى المكسيك وبنما وكولومبيا وفنزويلا. تعتمد الشروط على الجواز والوجهة؛ أدخل بياناتك الدقيقة في البوابة الرسمية وتحقق من شركة الطيران قبل السفر. لا يشكل e-ATV إذناً لدخول تركيا."
        },
        {
          "id": "visa-type-3",
          "title": "متى يلزم دخول تركيا؟",
          "body": "يتطلب استلام الأمتعة أو الانتقال بين مطار إسطنبول IST وصبيحة كوكجن SAW أو متابعة رحلة داخلية أو المبيت في فندق خارج المنطقة الدولية عبور مراقبة الجوازات. تطبق شروط الدخول العادية حتى لبضع ساعات.",
          "table": {
            "headers": [
              "الرحلة المتصلة",
              "القاعدة"
            ],
            "rows": [
              [
                "دولية إلى دولية دون خروج",
                "عبور والتحقق من e-ATV المحتمل"
              ],
              [
                "تذاكر منفصلة واستلام أمتعة",
                "حق دخول تركيا"
              ],
              [
                "IST إلى SAW",
                "حق دخول تركيا"
              ],
              [
                "دولية إلى داخلية",
                "مراقبة الدخول"
              ],
              [
                "زيارة إسطنبول",
                "تأشيرة دخول أو إعفاء"
              ]
            ]
          }
        },
        {
          "id": "visa-type-4",
          "title": "التخطيط للخروج إلى المدينة",
          "body": "لا تغادر المطار إلا إذا كان الدخول مسموحاً ولديك وقت كافٍ للجوازات والأمتعة والتنقل والتفتيش. المطاران متباعدان وتتغير مدة الطريق. في التوقف الليلي ميز بين فندق منطقة العبور وفندق يتطلب الدخول عبر الحدود."
        },
        {
          "id": "visa-type-5",
          "title": "التأخر وفقدان الرحلة التالية",
          "body": "قد تكون حماية المسافر محدودة عند حجز تذاكر منفصلة. عند الإلغاء تواصل مع الناقل لبديل داخل منطقة العبور إذا لم تستطع دخول تركيا. لا تشتر تأشيرة سياحية إلكترونية ما لم تكن مؤهلاً؛ تظل شروط الحدود سارية."
        }
      ],
      "faqs": [
        {
          "question": "هل يمكن زيارة إسطنبول لأربع ساعات بلا تأشيرة؟",
          "answer": "فقط إذا كنت مشمولاً بإعفاء أو إذن دخول مناسب."
        },
        {
          "question": "هل تغيير المطار يتطلب مراقبة الجوازات؟",
          "answer": "نعم، IST وSAW مطاران منفصلان."
        },
        {
          "question": "هل يسمح e-ATV بالخروج إلى المدينة؟",
          "answer": "لا يمنح تصريح العبور وحده حق الدخول."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "الإعفاءات حسب الجنسية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات التركية"
        },
        {
          "href": "https://www.evisa.gov.tr/en/",
          "label": "بوابة التأشيرة الإلكترونية الرسمية"
        },
        {
          "href": "https://www.visa.gov.tr/",
          "label": "طلبات التأشيرة القنصلية"
        }
      ]
    }
  },
  "turkey-30-days-visa-free": {
    "fr": {
      "title": "Turquie sans visa 30 jours en 2026 : pays, calcul et passeport",
      "metaDescription": "Quels passeports permettent 30 jours sans visa en Turquie ? Exemples par nationalité, cumul 90/180, validité et options pour rester plus longtemps.",
      "shortAnswer": "Certaines nationalités disposent d’une dispense de visa limitée à 30 jours, parfois par séjour et parfois dans une période définie. Le plafond général de 90 jours sur 180 n’allonge pas une dispense nationale de 30 jours.",
      "bosphorasHelp": "Bosphoras coordonne les séjours de découverte, la sélection de logements et les rendez-vous avec des professionnels indépendants. L’obtention du statut relève des autorités compétentes.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Exemples de nationalités concernées",
          "body": "Le ministère turc publie les conditions par passeport ordinaire. Des distinctions existent pour les passeports officiels et les motifs non touristiques. Les règles publiées à la date du voyage priment.",
          "table": {
            "headers": [
              "Passeport ordinaire",
              "Dispense publiée pour les visites"
            ],
            "rows": [
              [
                "Azerbaïdjan",
                "Jusqu’à 90 jours ; pas la catégorie 30 jours"
              ],
              [
                "Mongolie",
                "30 jours"
              ],
              [
                "Maldives",
                "30 jours"
              ],
              [
                "Indonésie",
                "30 jours"
              ],
              [
                "Thaïlande",
                "30 jours"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "30 jours ne signifie pas 90 jours",
          "body": "Relevez la durée maximale autorisée de votre nationalité et la période de cumul éventuelle. Une dispense de 30 jours ne permet pas de séjourner 90 jours en continu. Une sortie suivie d’une nouvelle admission n’est pas un droit garanti, et le plafond de 90 jours sur 180 reste applicable aux courts séjours."
        },
        {
          "id": "visa-type-3",
          "title": "Exemple de calendrier",
          "body": "Une entrée le 5 janvier correspond au premier jour ; le 3 février est le trentième jour, si la durée accordée est de 30 jours. Prévoyez une marge avant cette date. Pour des séjours répétés, gardez les dates exactes et vérifiez le cumul applicable à votre passeport ; n’utilisez pas le simple solde 90/180 comme prolongation automatique."
        },
        {
          "id": "visa-type-4",
          "title": "Passeport et documents",
          "body": "Selon la règle générale des 60 jours supplémentaires, une autorisation de 30 jours exige un passeport restant valable au moins 90 jours à l’arrivée, sauf exceptions prévues. Six mois sont recommandés. Gardez les justificatifs de logement, ressources et retour et vérifiez les conditions propres à votre document."
        },
        {
          "id": "visa-type-5",
          "title": "Rester au-delà de 30 jours",
          "body": "Ne comptez pas sur un renouvellement à la frontière. Pour une visite continue plus longue, examinez avant le départ le visa consulaire approprié ou, si vous êtes déjà légalement en Turquie, un fondement de résidence admissible à demander avant expiration. L’achat d’un e-Visa n’est possible que pour les nationalités et motifs éligibles."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je rester 90 jours avec une dispense de 30 jours ?",
          "answer": "Non, les 30 jours restent la limite nationale applicable."
        },
        {
          "question": "Le trentième jour inclut-il le jour d’arrivée ?",
          "answer": "Oui, comptez le jour d’entrée comme premier jour."
        },
        {
          "question": "Une sortie d’un jour suffit-elle ?",
          "answer": "Non, une nouvelle admission et un nouveau quota ne sont pas garantis."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Exemptions par nationalité"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Règles générales des visas turcs"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://www.evisa.gov.tr/en/",
          "label": "Portail officiel e-Visa"
        }
      ]
    },
    "en": {
      "title": "Turkey 30 days visa-free 2026: countries, passport and stay limits",
      "metaDescription": "Which passports allow 30 visa-free days in Turkey? Nationality examples, calendar calculation, the 90/180 cap and options for longer visits.",
      "shortAnswer": "Some nationalities have a 30-day visa exemption, either per visit or within a specified reference period. The general 90-in-180-day ceiling does not turn a national 30-day allowance into 90 days.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing selection and appointments with independent specialists. Immigration decisions remain with the competent authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Examples by nationality",
          "body": "The Turkish foreign ministry publishes conditions for ordinary passports. Official passports and non-tourist travel can follow different rules. Use the rules applying on the travel date.",
          "table": {
            "headers": [
              "Ordinary passport",
              "Published allowance for visits"
            ],
            "rows": [
              [
                "Azerbaijan",
                "Up to 90 days; not a 30-day category"
              ],
              [
                "Mongolia",
                "30 days"
              ],
              [
                "Maldives",
                "30 days"
              ],
              [
                "Indonesia",
                "30 days"
              ],
              [
                "Thailand",
                "30 days"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "A 30-day allowance is not 90 days",
          "body": "Identify your nationality's authorised maximum and any cumulative period. A 30-day waiver cannot support a continuous 90-day stay. Leaving and returning does not guarantee a new admission, and the general 90-day ceiling within 180 days still applies to short visits."
        },
        {
          "id": "visa-type-3",
          "title": "Worked calendar example",
          "body": "An arrival on 5 January counts as day one; 3 February is day 30 if your authorised allowance is 30 days. Leave a margin before that date. For repeat trips, retain precise travel dates and follow the cumulative rule for your passport rather than treating the general 90/180 balance as an automatic extension."
        },
        {
          "id": "visa-type-4",
          "title": "Passport and supporting documents",
          "body": "Under the general additional-60-day validity rule, a full 30-day allowance requires at least 90 days of passport validity on arrival, subject to official exceptions. Six months is recommended. Carry accommodation, financial and return-travel evidence and check passport-specific conditions."
        },
        {
          "id": "visa-type-5",
          "title": "Staying beyond your allowance",
          "body": "Do not rely on a border run. For a longer continuous visit, assess the appropriate consular visa before departure or an eligible residence basis before lawful stay expires if already in Turkey. An e-Visa is available only to eligible nationalities and purposes."
        }
      ],
      "faqs": [
        {
          "question": "Can a 30-day exemption be used for 90 days?",
          "answer": "No, the national 30-day limit still applies."
        },
        {
          "question": "Does the arrival day count?",
          "answer": "Yes, it counts as day one."
        },
        {
          "question": "Does a one-day exit reset the allowance?",
          "answer": "No, readmission and a fresh allowance are not guaranteed."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa rules by nationality"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General Turkish visa rules"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://www.evisa.gov.tr/en/",
          "label": "Official e-Visa portal"
        }
      ]
    },
    "ru": {
      "title": "Турция без визы на 30 дней в 2026 году: страны и расчёт срока",
      "metaDescription": "Каким гражданам доступны 30 дней без визы: примеры стран, срок паспорта, расчёт дней и ограничение 90/180.",
      "shortAnswer": "У некоторых гражданств безвизовый срок ограничен 30 днями за визит или за установленный период. Общий предел 90 дней из 180 не превращает национальный 30-дневный лимит в 90 дней.",
      "bosphorasHelp": "Bosphoras помогает организовать ознакомительные поездки, подбор жилья и консультации независимых специалистов. Решения о статусе принимают компетентные органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Примеры гражданств",
          "body": "МИД Турции публикует условия для обычных паспортов. Для служебных паспортов и нетуристических целей возможны другие правила. Применяются условия на дату поездки.",
          "table": {
            "headers": [
              "Обычный паспорт",
              "Опубликованный срок визита"
            ],
            "rows": [
              [
                "Азербайджан",
                "До 90 дней; не категория 30 дней"
              ],
              [
                "Монголия",
                "30 дней"
              ],
              [
                "Мальдивы",
                "30 дней"
              ],
              [
                "Индонезия",
                "30 дней"
              ],
              [
                "Таиланд",
                "30 дней"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "Почему 30 дней не равны 90",
          "body": "Уточните максимальный срок по своему гражданству и период суммирования. Тридцатидневное освобождение не позволяет непрерывно жить 90 дней. Выезд и повторный въезд не гарантируют новый срок, а общий предел 90 дней из 180 продолжает действовать."
        },
        {
          "id": "visa-type-3",
          "title": "Пример по календарю",
          "body": "Въезд 5 января считается первым днём, а 3 февраля — тридцатым при разрешённом сроке 30 дней. Планируйте выезд с запасом. Для повторных визитов храните точные даты и учитывайте правила конкретного паспорта, не рассматривая остаток общего лимита 90/180 как автоматическое продление."
        },
        {
          "id": "visa-type-4",
          "title": "Паспорт и документы",
          "body": "По общему правилу дополнительных 60 дней для 30-дневного пребывания паспорт должен действовать не менее 90 дней с даты въезда, с учётом установленных исключений. Рекомендуется шесть месяцев. Подготовьте данные о жилье, средствах и обратной поездке."
        },
        {
          "id": "visa-type-5",
          "title": "Если нужно остаться дольше",
          "body": "Не рассчитывайте на продление после короткого выезда. Для длительного непрерывного визита оформляйте подходящую консульскую визу заранее либо подавайте на законное основание ВНЖ до окончания разрешённого срока. e-Visa доступна только при подходящем гражданстве и цели."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли оставаться 90 дней при лимите 30?",
          "answer": "Нет, действует национальный 30-дневный срок."
        },
        {
          "question": "Считается ли день въезда?",
          "answer": "Да, это первый день."
        },
        {
          "question": "Обнуляет ли срок выезд на сутки?",
          "answer": "Нет, повторный допуск и новый срок не гарантируются."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила по гражданству"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила Турции"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://www.evisa.gov.tr/en/",
          "label": "Официальный портал e-Visa"
        }
      ]
    },
    "ar": {
      "title": "تركيا 30 يوماً دون تأشيرة في 2026: الدول وحساب المدة",
      "metaDescription": "تعرف على الجوازات التي تسمح بثلاثين يوماً دون تأشيرة وحساب الأيام وصلاحية الجواز وحد 90 من 180 وخيارات البقاء.",
      "shortAnswer": "تتيح بعض الجنسيات إعفاءً لمدة 30 يوماً لكل زيارة أو خلال فترة محددة. لا يحول الحد العام البالغ 90 يوماً من 180 الإعفاء الوطني لمدة 30 يوماً إلى 90 يوماً.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الاستكشافية واختيار السكن والمواعيد مع مختصين مستقلين، وتبقى قرارات الإقامة من اختصاص السلطات.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "أمثلة بحسب الجنسية",
          "body": "تنشر الخارجية التركية قواعد الجوازات العادية. قد تختلف شروط الجوازات الرسمية والأغراض غير السياحية. تطبق القواعد السارية يوم السفر.",
          "table": {
            "headers": [
              "الجواز العادي",
              "المدة المنشورة"
            ],
            "rows": [
              [
                "أذربيجان",
                "حتى 90 يوماً وليست ضمن فئة 30 يوماً"
              ],
              [
                "منغوليا",
                "30 يوماً"
              ],
              [
                "المالديف",
                "30 يوماً"
              ],
              [
                "إندونيسيا",
                "30 يوماً"
              ],
              [
                "تايلاند",
                "30 يوماً"
              ]
            ]
          }
        },
        {
          "id": "visa-type-2",
          "title": "ثلاثون يوماً ليست تسعين",
          "body": "تحقق من الحد الوطني المسموح وفترة الجمع. لا يسمح إعفاء 30 يوماً بالبقاء 90 يوماً متتالية. لا يضمن الخروج والعودة الحصول على مدة جديدة ويظل الحد العام 90 من 180 سارياً للزيارات القصيرة."
        },
        {
          "id": "visa-type-3",
          "title": "مثال على التقويم",
          "body": "يعد الوصول في 5 يناير اليوم الأول ويوافق 3 فبراير اليوم الثلاثين إذا كانت المدة المسموحة 30 يوماً. اترك هامشاً قبل الموعد. للزيارات المتكررة احتفظ بالتواريخ الدقيقة واتبع قاعدة جوازك بدلاً من اعتبار رصيد 90/180 تمديداً تلقائياً."
        },
        {
          "id": "visa-type-4",
          "title": "الجواز والوثائق",
          "body": "وفق قاعدة الستين يوماً الإضافية يلزم عادة جواز صالح لمدة 90 يوماً على الأقل عند الوصول لزيارة من 30 يوماً، مع مراعاة الاستثناءات. يفضل توفر ستة أشهر. جهز إثبات السكن والموارد والعودة وتحقق من شروط وثيقتك."
        },
        {
          "id": "visa-type-5",
          "title": "البقاء أكثر من ثلاثين يوماً",
          "body": "لا تعتمد على الخروج إلى الحدود والعودة. للزيارة المتواصلة الأطول افحص التأشيرة القنصلية المناسبة قبل السفر أو أساس الإقامة المؤهل قبل انتهاء البقاء القانوني إذا كنت داخل تركيا. لا تتاح التأشيرة الإلكترونية إلا للجنسيات والأغراض المؤهلة."
        }
      ],
      "faqs": [
        {
          "question": "هل يمكن البقاء 90 يوماً بإعفاء 30 يوماً؟",
          "answer": "لا، يبقى الحد الخاص بالجنسية سارياً."
        },
        {
          "question": "هل يحتسب يوم الدخول؟",
          "answer": "نعم، هو اليوم الأول."
        },
        {
          "question": "هل يعيد الخروج ليوم واحد احتساب الفترة؟",
          "answer": "لا، لا يضمن قبول الدخول مجدداً أو مدة جديدة."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "الإعفاءات حسب الجنسية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات التركية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامات"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "بوابة الإقامة الرسمية"
        },
        {
          "href": "https://www.evisa.gov.tr/en/",
          "label": "بوابة التأشيرة الإلكترونية الرسمية"
        }
      ]
    }
  },
  "turkey-60-days-visa-free": {
    "fr": {
      "title": "Turquie sans visa 60 jours en 2026 : Russes et règle 90/180",
      "metaDescription": "Séjour de 60 jours sans visa : règles pour le passeport russe, calcul 90 jours sur 180, exemples et solutions pour rester plus longtemps.",
      "shortAnswer": "Les titulaires de passeports russes ordinaires peuvent généralement séjourner sans visa jusqu’à 60 jours par visite touristique ou commerciale, dans la limite cumulée de 90 jours sur 180. Il faut respecter les deux limites.",
      "bosphorasHelp": "Bosphoras coordonne les séjours de découverte, la sélection de logements et les rendez-vous avec des professionnels indépendants. L’obtention du statut relève des autorités compétentes.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "Les 60 jours et le plafond de 90 jours",
          "body": "La liste du ministère turc indique une exemption de 60 jours pour le passeport russe ordinaire. Elle ne s’applique pas à toutes les nationalités. Pour un passeport autorisant 90 jours, comme celui de nombreux pays européens ou du Kazakhstan, la limite par visite peut être différente. Les conditions spécifiques au document et au motif prévalent."
        },
        {
          "id": "visa-type-2",
          "title": "Trois situations concrètes",
          "body": "Le temps passé hors de Turquie ne compte pas comme séjour, mais les jours précédents restent dans la fenêtre glissante de 180 jours tant qu’ils n’en sont pas sortis.",
          "table": {
            "headers": [
              "Visites antérieures encore dans la fenêtre",
              "Solde maximal avant autre restriction"
            ],
            "rows": [
              [
                "60 jours",
                "30 jours"
              ],
              [
                "45 + 45 jours",
                "0 jour"
              ],
              [
                "20 + 20 jours",
                "50 jours"
              ],
              [
                "Aucun jour",
                "60 jours pour une seule visite russe"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Calculer une date de départ",
          "body": "Pour une entrée le 1er mars, le 29 avril est le soixantième jour, en comptant l’arrivée. Ne réservez pas un départ le 30 avril si seuls 60 jours sont autorisés. Après une sortie, un nouveau passage dépend également du cumul et de l’admission par les autorités ; il n’existe pas de droit automatique à 60 jours supplémentaires."
        },
        {
          "id": "visa-type-4",
          "title": "Validité du document",
          "body": "La règle générale impose 60 jours de validité supplémentaires au-delà de la durée autorisée. Pour une dispense de 60 jours, prévoyez au moins 120 jours de validité à l’arrivée, sauf exception officielle ; six mois sont recommandés. Le passeport intérieur russe ne remplace pas le document de voyage international."
        },
        {
          "id": "visa-type-5",
          "title": "Séjour continu et installation",
          "body": "Pour rester 75 jours d’affilée, il faut examiner une autorisation adaptée plutôt que dépasser la dispense russe de 60 jours. Si vous êtes déjà légalement sur place et disposez d’un motif admissible, commencez une demande de résidence avant expiration. Un voyage commercial n’autorise pas l’emploi local."
        }
      ],
      "faqs": [
        {
          "question": "Après 60 jours puis-je rester encore 30 sans sortir ?",
          "answer": "Non, la limite de 60 jours par visite reste applicable."
        },
        {
          "question": "Puis-je revenir une semaine après ?",
          "answer": "Une admission est possible si toutes les conditions sont réunies et si le solde le permet, sans garantie."
        },
        {
          "question": "Deux séjours de 60 jours sont-ils possibles dans la même fenêtre ?",
          "answer": "Non, cela dépasserait le plafond de 90 jours sur 180."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Exemptions par nationalité"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Règles générales des visas turcs"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        }
      ]
    },
    "en": {
      "title": "Turkey 60 days visa-free 2026: Russian passport & 90/180 rule",
      "metaDescription": "Understand Turkey’s 60-day visa-free visit limit for Russian passports, cumulative 90/180 calculations, passport rules and longer residence options.",
      "shortAnswer": "Ordinary Russian passport holders can generally visit Turkey visa-free for up to 60 days per tourist or business visit, within a cumulative 90 days in 180. Both limits must be respected.",
      "bosphorasHelp": "Bosphoras coordinates exploratory stays, housing selection and appointments with independent specialists. Immigration decisions remain with the competent authorities.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "60 days per visit and 90 days overall",
          "body": "Turkey's foreign ministry lists a 60-day visa exemption for ordinary Russian passports. It does not apply to every nationality. Passports with a 90-day allowance, such as those of many European countries and Kazakhstan, may follow a different per-visit rule. Passport-specific requirements and permitted travel purposes govern."
        },
        {
          "id": "visa-type-2",
          "title": "Three worked calculations",
          "body": "Time abroad is excluded from physical presence, but earlier Turkish visits remain in the rolling 180-day window until their dates fall outside it.",
          "table": {
            "headers": [
              "Previous days still in the window",
              "Maximum remaining before other restrictions"
            ],
            "rows": [
              [
                "60 days",
                "30 days"
              ],
              [
                "45 + 45 days",
                "0 days"
              ],
              [
                "20 + 20 days",
                "50 days"
              ],
              [
                "None",
                "60 days for a single Russian visit"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Calculate a departure date",
          "body": "With entry on 1 March, 29 April is day 60, counting the arrival date. Do not book departure for 30 April if you have only 60 days. After leaving, readmission depends on your cumulative balance and border approval; another 60 days are not automatically granted."
        },
        {
          "id": "visa-type-4",
          "title": "Passport validity",
          "body": "The general rule requires 60 additional days of validity beyond the authorised stay. For a full 60-day waiver, allow at least 120 days from arrival, subject to official exceptions; six months is recommended. A Russian domestic passport is not the usual international travel document."
        },
        {
          "id": "visa-type-5",
          "title": "Longer visits and relocation",
          "body": "To remain for 75 consecutive days, assess an appropriate authorisation instead of exceeding the Russian 60-day exemption. If already lawfully present with an eligible residence purpose, apply before your stay expires. Business travel does not authorise local employment."
        }
      ],
      "faqs": [
        {
          "question": "Can I stay another 30 days continuously after 60?",
          "answer": "No, the per-visit 60-day maximum still applies."
        },
        {
          "question": "Can I return a week later?",
          "answer": "Only if all entry requirements and the remaining allowance permit it; admission is not guaranteed."
        },
        {
          "question": "Can I make two 60-day trips in one window?",
          "answer": "No, that would exceed 90 days within 180."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa rules by nationality"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General Turkish visa rules"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        }
      ]
    },
    "ru": {
      "title": "Турция без визы на 60 дней в 2026 году: россияне и правило 90/180",
      "metaDescription": "Как считать 60 дней за визит и 90 за 180 по российскому паспорту: примеры, срок паспорта и варианты длительного проживания.",
      "shortAnswer": "По обычному российскому загранпаспорту туристические и коммерческие поездки обычно возможны без визы до 60 дней за визит при суммарном ограничении 90 дней за 180. Соблюдать нужно оба срока.",
      "bosphorasHelp": "Bosphoras помогает организовать ознакомительные поездки, подбор жилья и консультации независимых специалистов. Решения о статусе принимают компетентные органы.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "60 дней за въезд и 90 суммарно",
          "body": "МИД Турции указывает 60-дневный безвизовый срок для обычных российских загранпаспортов. Это не универсальное правило для всех стран. Для граждан многих европейских стран и Казахстана действует иной лимит — до 90 дней. Применяются условия конкретного паспорта и цели поездки."
        },
        {
          "id": "visa-type-2",
          "title": "Примеры расчёта остатка",
          "body": "Дни за пределами Турции не входят в фактическое пребывание, но прежние поездки учитываются, пока остаются внутри скользящего 180-дневного периода.",
          "table": {
            "headers": [
              "Прежние дни внутри окна",
              "Максимальный остаток до иных ограничений"
            ],
            "rows": [
              [
                "60 дней",
                "30 дней"
              ],
              [
                "45 + 45 дней",
                "0 дней"
              ],
              [
                "20 + 20 дней",
                "50 дней"
              ],
              [
                "Нет предыдущих дней",
                "60 дней за один российский визит"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "Дата окончания визита",
          "body": "При въезде 1 марта шестидесятый день наступает 29 апреля, включая день въезда. Не планируйте вылет на 30 апреля, если разрешены только 60 дней. При повторном въезде проверяются остаток общего лимита и условия допуска. Новые 60 дней не предоставляются автоматически."
        },
        {
          "id": "visa-type-4",
          "title": "Действие загранпаспорта",
          "body": "По общему правилу паспорт должен действовать на 60 дней дольше разрешённого пребывания. Для полного 60-дневного срока нужно предусмотреть не менее 120 дней с даты въезда, если нет установленного исключения. Рекомендуется запас в шесть месяцев. Внутренний паспорт РФ не заменяет загранпаспорт."
        },
        {
          "id": "visa-type-5",
          "title": "Длительное пребывание",
          "body": "Для непрерывного пребывания 75 дней нужно заранее рассмотреть подходящее разрешение, а не превышать 60-дневный срок. При законном пребывании и наличии основания подайте на ВНЖ до истечения разрешённого срока. Деловая поездка не даёт права на трудоустройство в Турции."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли после 60 дней остаться ещё на 30 без выезда?",
          "answer": "Нет, действует ограничение 60 дней за визит."
        },
        {
          "question": "Можно ли вернуться через неделю?",
          "answer": "При наличии остатка и соблюдении условий возможен въезд, но он не гарантирован."
        },
        {
          "question": "Можно ли дважды приехать на 60 дней за 180?",
          "answer": "Нет, это превышает суммарный лимит 90 дней."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила по гражданству"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила Турции"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        }
      ]
    },
    "ar": {
      "title": "تركيا 60 يوماً دون تأشيرة 2026: الجواز الروسي وقاعدة 90/180",
      "metaDescription": "دليل الإعفاء لمدة 60 يوماً للجواز الروسي وحساب 90 من 180 وصلاحية الجواز وخيارات الإقامة الأطول.",
      "shortAnswer": "يمكن لحامل الجواز الروسي العادي عادة زيارة تركيا للسياحة والأعمال دون تأشيرة حتى 60 يوماً لكل زيارة، وبمجموع لا يتجاوز 90 يوماً خلال 180 يوماً. يجب احترام الحدين معاً.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الاستكشافية واختيار السكن والمواعيد مع مختصين مستقلين، وتبقى قرارات الإقامة من اختصاص السلطات.",
      "sections": [
        {
          "id": "visa-type-1",
          "title": "ستون يوماً لكل زيارة وتسعون بالمجموع",
          "body": "تذكر الخارجية التركية إعفاء الجواز الروسي العادي لمدة 60 يوماً. لا تشمل هذه القاعدة جميع الجنسيات؛ قد تسري مدة مختلفة على جوازات أوروبية كثيرة وجواز كازاخستان ذات حد 90 يوماً. تطبق الشروط الخاصة بالوثيقة والغرض."
        },
        {
          "id": "visa-type-2",
          "title": "أمثلة لحساب الرصيد",
          "body": "لا تحتسب أيام الوجود خارج تركيا ضمن البقاء الفعلي، لكن تظل الزيارات السابقة محسوبة ما دامت داخل نافذة 180 يوماً المتحركة.",
          "table": {
            "headers": [
              "الأيام السابقة داخل النافذة",
              "الحد المتبقي قبل القيود الأخرى"
            ],
            "rows": [
              [
                "60 يوماً",
                "30 يوماً"
              ],
              [
                "45 + 45 يوماً",
                "صفر"
              ],
              [
                "20 + 20 يوماً",
                "50 يوماً"
              ],
              [
                "لا أيام سابقة",
                "60 يوماً للزيارة الروسية الواحدة"
              ]
            ]
          }
        },
        {
          "id": "visa-type-3",
          "title": "حساب يوم المغادرة",
          "body": "إذا وصلت في 1 مارس، يوافق اليوم الستون 29 أبريل مع احتساب يوم الدخول. لا تحجز المغادرة في 30 أبريل إذا كانت المدة المسموحة 60 يوماً فقط. بعد الخروج تتوقف العودة على الرصيد المتبقي وقرار الدخول؛ لا تمنح 60 يوماً جديدة تلقائياً."
        },
        {
          "id": "visa-type-4",
          "title": "صلاحية الجواز",
          "body": "تشترط القاعدة العامة أن تتجاوز صلاحية الجواز مدة البقاء المسموحة بستين يوماً. لزيارة كاملة من 60 يوماً وفر صلاحية 120 يوماً على الأقل من الوصول مع مراعاة الاستثناءات؛ يفضل ستة أشهر. لا يحل الجواز الداخلي الروسي محل وثيقة السفر الدولية."
        },
        {
          "id": "visa-type-5",
          "title": "الإقامة المتصلة لمدة أطول",
          "body": "للبقاء 75 يوماً متتالية ابحث عن إذن مناسب بدلاً من تجاوز الإعفاء البالغ 60 يوماً. إذا كنت داخل تركيا قانونياً ولديك غرض مؤهل، قدم طلب الإقامة قبل انتهاء المدة. لا تمنح زيارة الأعمال حق التوظيف المحلي."
        }
      ],
      "faqs": [
        {
          "question": "هل يمكن البقاء 30 يوماً إضافية دون خروج بعد 60 يوماً؟",
          "answer": "لا، يبقى حد 60 يوماً لكل زيارة سارياً."
        },
        {
          "question": "هل يمكن العودة بعد أسبوع؟",
          "answer": "إذا سمح الرصيد واستوفيت شروط الدخول، دون ضمان قبول العودة."
        },
        {
          "question": "هل يمكن زيارتان من 60 يوماً خلال 180 يوماً؟",
          "answer": "لا، يتجاوز ذلك الحد الإجمالي البالغ 90 يوماً."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "الإعفاءات حسب الجنسية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات التركية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامات"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "بوابة الإقامة الرسمية"
        }
      ]
    }
  }
};
