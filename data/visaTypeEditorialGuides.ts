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
  }
};
