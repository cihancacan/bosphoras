import type { Locale } from '@/lib/i18n';
import type { EditorialGuide } from './highPotentialEditorialGuides';
export const citizenshipEditorialGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "ikamet-bodrum": {
    "fr": {
      "title": "Ikamet Bodrum 2026 : demande, frais et renouvellement",
      "metaDescription": "Préparez votre titre de séjour à Bodrum : procédure à Muğla, logement, rendez-vous, documents et tarif de 964 TL.",
      "shortAnswer": "L'ikamet à Bodrum relève des règles nationales et de la province de Muğla. Déposez avant la fin du séjour légal avec un motif réel et une adresse admissible.",
      "bosphorasHelp": "Bosphoras coordonne la recherche de logement, les visites et les rendez-vous avec des professionnels indépendants. Les autorités décident des demandes, sans garantie d'acceptation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Avant de louer ou d'acheter",
          "body": "Demandez le mahalle, la rue et les numéros du bâtiment et de l'appartement. Vérifiez auprès de la migration que l'adresse est admissible pour le dossier précis. Une ancienne inscription ou un bail ne garantit pas l'acceptation. Sur la péninsule, certains contrats couvrent uniquement la basse saison : clarifiez les dates, les charges et les documents du propriétaire avant de verser un acompte."
        },
        {
          "id": "visa-detail-2",
          "title": "Première demande et rendez-vous",
          "body": "Choisissez le fondement correspondant à votre situation sur e-ikamet : propriété personnelle, famille, études ou autre motif admissible. Préparez le passeport, les photos indiquées dans le formulaire, la preuve de logement, l'assurance requise et les justificatifs de ressources et de motif. La convocation indique le service compétent : le rendez-vous ne se tient pas nécessairement au centre de Bodrum."
        },
        {
          "id": "visa-detail-3",
          "title": "Prix et délais",
          "body": "La prise de rendez-vous officielle est gratuite. En 2026 la carte coûte 964 TL par personne ; les droits de séjour varient selon nationalité, durée et exemptions. Ajoutez les frais de traduction, d'assurance et de notaire éventuels. Le délai de décision de 90 jours commence à la remise complète des pièces.",
          "table": {
            "headers": [
              "Étape",
              "Règle"
            ],
            "rows": [
              [
                "Dépôt",
                "Avant expiration du séjour légal"
              ],
              [
                "Carte 2026",
                "964 TL"
              ],
              [
                "Décision",
                "90 jours après dossier complet"
              ],
              [
                "Renouvellement",
                "60 derniers jours"
              ],
              [
                "Déménagement",
                "20 jours ouvrables"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Voyager pendant l'instruction",
          "body": "La sortie avec retour dans les 15 jours requiert le document de demande approuvé et les reçus applicables. Une confirmation de rendez-vous seule ne suffit pas. Après réception, contrôlez les dates et accomplissez l'enregistrement de l'adresse dans le délai requis."
        },
        {
          "id": "visa-detail-5",
          "title": "Renouveler et déménager",
          "body": "Le renouvellement s'effectue pendant les 60 derniers jours avant expiration. Un déménagement vers une autre province, notamment Antalya ou Istanbul, nécessite une nouvelle démarche dans les 20 jours ouvrables. Pour un changement dans Muğla, déclarez l'adresse. Conservez les documents fonciers et preuves d'occupation."
        }
      ],
      "faqs": [
        {
          "question": "Bodrum a-t-elle son propre visa ?",
          "answer": "Non, les catégories nationales s'appliquent."
        },
        {
          "question": "Où se tient mon rendez-vous ?",
          "answer": "À l'adresse indiquée sur la convocation."
        },
        {
          "question": "Le bail suffit-il ?",
          "answer": "Non, le motif et tous les justificatifs doivent être admissibles."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles"
        },
        {
          "href": "https://www.goc.gov.tr/ikamet-genel-bilgiler/",
          "label": "Procédure de résidence"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Tarifs 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence"
        },
        {
          "href": "https://mugla.goc.gov.tr/",
          "label": "Migration Muğla"
        }
      ]
    },
    "en": {
      "title": "Bodrum ikamet 2026: application, fees and renewal",
      "metaDescription": "Prepare residence in Bodrum: Muğla appointments, housing evidence, deadlines, renewal and the TRY 964 card fee.",
      "shortAnswer": "Bodrum falls within Muğla province under national residence rules. Apply before lawful stay expires, using a genuine qualifying purpose and eligible address.",
      "bosphorasHelp": "Bosphoras coordinates housing searches, visits and appointments with independent professionals. Authorities decide applications; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Before renting or buying",
          "body": "Obtain the neighbourhood, street, building and apartment identifiers. Ask migration whether the exact address qualifies for your application. An earlier occupant's registration or lease does not guarantee approval. Some peninsula leases cover only the low season; confirm dates, charges and owner evidence before paying a deposit."
        },
        {
          "id": "visa-detail-2",
          "title": "First application and appointment",
          "body": "Choose your lawful basis in e-ikamet: owner-occupation, family, education or another eligible purpose. Prepare passport, photographs specified in the form, housing evidence, required insurance, means and supporting records. Your notice identifies the competent office; the appointment may not be in central Bodrum."
        },
        {
          "id": "visa-detail-3",
          "title": "Fees and decision period",
          "body": "Official appointment booking is free. The 2026 card costs TRY 964 per person; duties depend on nationality, duration and exemptions. Allow for translation, insurance and notarisation. The 90-day decision period starts after complete submission.",
          "table": {
            "headers": [
              "Step",
              "Rule"
            ],
            "rows": [
              [
                "Application",
                "Before lawful stay ends"
              ],
              [
                "2026 card",
                "TRY 964"
              ],
              [
                "Decision",
                "90 days after complete submission"
              ],
              [
                "Renewal",
                "Final 60 days"
              ],
              [
                "Move",
                "20 working days"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Travel while awaiting a decision",
          "body": "Departure and return within 15 days require the approved application document and applicable receipts. An appointment confirmation alone is insufficient. Upon receipt, verify the dates and register the address within the required period."
        },
        {
          "id": "visa-detail-5",
          "title": "Renewal and moving",
          "body": "Renew in the final 60 days before expiry. Moving to another province such as Antalya or Istanbul requires a new application within 20 working days. For a move within Muğla, notify the address change. Retain title and occupancy records."
        }
      ],
      "faqs": [
        {
          "question": "Does Bodrum have its own visa?",
          "answer": "No, national categories apply."
        },
        {
          "question": "Where is my appointment?",
          "answer": "At the location in your official notice."
        },
        {
          "question": "Is a lease sufficient?",
          "answer": "No; the purpose and all evidence must qualify."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official residence FAQ"
        },
        {
          "href": "https://www.goc.gov.tr/ikamet-genel-bilgiler/",
          "label": "Residence procedure"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "2026 fees"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence categories"
        },
        {
          "href": "https://mugla.goc.gov.tr/",
          "label": "Muğla migration"
        }
      ]
    },
    "ru": {
      "title": "Икамет в Бодруме 2026: оформление, сборы и продление",
      "metaDescription": "ВНЖ в Бодруме: запись в провинции Мугла, жильё, документы, сроки и стоимость карты 964 лиры.",
      "shortAnswer": "В Бодруме действуют общенациональные правила ВНЖ и процедуры провинции Мугла. Подайте заявление до окончания законного пребывания по действительному основанию и допустимому адресу.",
      "bosphorasHelp": "Bosphoras организует поиск жилья, поездки и встречи с независимыми специалистами. Решения принимают органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "До аренды или покупки",
          "body": "Уточните квартал, улицу, номер дома и квартиры. Проверьте допустимость адреса именно для вашего заявления. Регистрация прежнего жильца или договор не гарантируют одобрение. Некоторые договоры на полуострове действуют только вне сезона; уточните даты, расходы и документы собственника до залога."
        },
        {
          "id": "visa-detail-2",
          "title": "Первая подача и приём",
          "body": "Выберите основание в e-ikamet: собственное жильё, семья, обучение или другая допустимая цель. Подготовьте паспорт, фотографии по форме, подтверждение жилья, необходимую страховку, средства и доказательства цели. Место приёма указано в уведомлении; оно не обязательно находится в центре Бодрума."
        },
        {
          "id": "visa-detail-3",
          "title": "Сборы и сроки",
          "body": "Официальная запись бесплатна. Карта в 2026 году стоит 964 лиры на человека; сбор зависит от гражданства, срока и освобождений. Учтите переводы, страховку и нотариуса. Срок решения 90 дней отсчитывается с полной подачи.",
          "table": {
            "headers": [
              "Этап",
              "Правило"
            ],
            "rows": [
              [
                "Подача",
                "До конца законного пребывания"
              ],
              [
                "Карта 2026",
                "964 лиры"
              ],
              [
                "Решение",
                "90 дней с полной подачи"
              ],
              [
                "Продление",
                "Последние 60 дней"
              ],
              [
                "Переезд",
                "20 рабочих дней"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Поездки в ожидании решения",
          "body": "Для выезда и возвращения в течение 15 дней нужны утверждённый документ заявления и соответствующие квитанции. Одной записи недостаточно. После получения карты проверьте даты и зарегистрируйте адрес в установленный срок."
        },
        {
          "id": "visa-detail-5",
          "title": "Продление и переезд",
          "body": "Продлевайте в последние 60 дней до истечения. Переезд в другую провинцию, например Анталью или Стамбул, требует нового заявления в течение 20 рабочих дней. При переезде внутри Муглы сообщите новый адрес. Храните документы на жильё и доказательства проживания."
        }
      ],
      "faqs": [
        {
          "question": "Есть отдельная виза Бодрума?",
          "answer": "Нет, применяются общенациональные категории."
        },
        {
          "question": "Где состоится приём?",
          "answer": "По адресу из официального уведомления."
        },
        {
          "question": "Достаточно договора аренды?",
          "answer": "Нет, должны соответствовать основание и все документы."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные вопросы о ВНЖ"
        },
        {
          "href": "https://www.goc.gov.tr/ikamet-genel-bilgiler/",
          "label": "Порядок оформления ВНЖ"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Сборы 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://mugla.goc.gov.tr/",
          "label": "Миграция Муглы"
        }
      ]
    },
    "ar": {
      "title": "إيكامت بودروم 2026: الطلب والرسوم والتجديد",
      "metaDescription": "إجراءات إقامة بودروم في ولاية موغلا والسكن والموعد والوثائق والمدة ورسم البطاقة 964 ليرة.",
      "shortAnswer": "تخضع بودروم لقواعد الإقامة الوطنية وإجراءات ولاية موغلا. قدم قبل انتهاء البقاء القانوني وفق غرض حقيقي وعنوان مؤهل.",
      "bosphorasHelp": "تنسق Bosphoras البحث عن السكن والزيارات والمواعيد مع المختصين المستقلين. تبت السلطات في الطلبات دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "قبل الإيجار أو الشراء",
          "body": "حدد الحي والشارع ورقم المبنى والشقة. تحقق لدى الهجرة من أهلية العنوان لطلبك. لا يضمن تسجيل ساكن سابق أو عقد الإيجار الموافقة. تغطي بعض العقود في شبه الجزيرة موسم الشتاء فقط؛ تحقق من التواريخ والرسوم ووثائق المالك قبل دفع التأمين."
        },
        {
          "id": "visa-detail-2",
          "title": "الطلب الأول والموعد",
          "body": "اختر الأساس المناسب عبر e-ikamet: السكن المملوك أو الأسرة أو الدراسة أو غرض آخر مؤهل. جهز الجواز والصور وفق النموذج وإثبات السكن والتأمين المطلوب والموارد ووثائق الغرض. يحدد الإخطار مكان الموعد وقد لا يكون وسط بودروم."
        },
        {
          "id": "visa-detail-3",
          "title": "الرسوم والمدة",
          "body": "الموعد الرسمي مجاني. رسم البطاقة لعام 2026 هو 964 ليرة لكل فرد، وتختلف رسوم التصريح حسب الجنسية والمدة والإعفاءات. أضف الترجمة والتأمين والتوثيق. تبدأ مدة البت البالغة 90 يوماً من اكتمال الملف.",
          "table": {
            "headers": [
              "الخطوة",
              "القاعدة"
            ],
            "rows": [
              [
                "الطلب",
                "قبل انتهاء البقاء القانوني"
              ],
              [
                "بطاقة 2026",
                "964 ليرة"
              ],
              [
                "القرار",
                "90 يوماً من اكتمال الملف"
              ],
              [
                "التجديد",
                "آخر 60 يوماً"
              ],
              [
                "الانتقال",
                "20 يوم عمل"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "السفر أثناء الانتظار",
          "body": "يتطلب الخروج والعودة خلال 15 يوماً مستند الطلب المعتمد والإيصالات اللازمة. لا يكفي تأكيد الموعد وحده. بعد استلام البطاقة راجع التواريخ وسجل العنوان في المهلة."
        },
        {
          "id": "visa-detail-5",
          "title": "التجديد والانتقال",
          "body": "قدم في آخر 60 يوماً قبل الانتهاء. يتطلب الانتقال إلى ولاية أخرى مثل أنطاليا أو إسطنبول طلباً جديداً خلال 20 يوم عمل. أبلغ عن تغيير العنوان داخل موغلا واحتفظ بوثائق السكن والملكية."
        }
      ],
      "faqs": [
        {
          "question": "هل توجد تأشيرة خاصة ببودروم؟",
          "answer": "لا، تطبق الأنواع الوطنية."
        },
        {
          "question": "أين يتم الموعد؟",
          "answer": "في المكان الوارد بالإخطار الرسمي."
        },
        {
          "question": "هل يكفي عقد الإيجار؟",
          "answer": "لا، يجب استيفاء الغرض والوثائق."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "المنصة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية للإقامة"
        },
        {
          "href": "https://www.goc.gov.tr/ikamet-genel-bilgiler/",
          "label": "إجراءات الإقامة"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "رسوم 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة"
        },
        {
          "href": "https://mugla.goc.gov.tr/",
          "label": "هجرة موغلا"
        }
      ]
    }
  },
  "ikamet-antalya": {
    "fr": {
      "title": "Ikamet Antalya 2026 : démarches, rendez-vous et prix du titre",
      "metaDescription": "Demandez ou renouvelez un ikamet à Antalya : dossier, adresse, assurance, frais, UETS et délais.",
      "shortAnswer": "La procédure s'effectue sur e-ikamet pendant le séjour légal. Elle dépend de votre motif, de votre adresse à Antalya et des pièces du dossier. En 2026 la carte coûte 964 TL.",
      "bosphorasHelp": "Bosphoras coordonne la recherche de logement, les visites et les rendez-vous avec des professionnels indépendants. Les autorités décident des demandes, sans garantie d'acceptation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choisir le bon fondement",
          "body": "La retraite n'est pas une catégorie autonome ; une pension peut prouver les ressources mais il faut choisir un motif admissible. Le propriétaire occupant documente son logement et les critères de valeur applicables. Le demandeur familial doit établir les droits du sponsor. Ne choisissez pas un motif uniquement parce qu'il paraît plus facile."
        },
        {
          "id": "visa-detail-2",
          "title": "Contrôler l'adresse avant le bail",
          "body": "À Konyaaltı, Lara ou ailleurs, vérifiez le mahalle et le logement précis auprès de l'administration. Les anciennes listes de quartiers ne confirment pas la situation de 2026. Demandez le titre du bailleur et un bail conforme aux formalités requises. L'enregistrement de l'ancien locataire ne garantit pas le vôtre."
        },
        {
          "id": "visa-detail-3",
          "title": "Constituer le dossier",
          "body": "Préparez passeport, formulaire signé, photos selon la liste générée, assurance applicable et documents financiers et de logement. Chaque enfant a son propre dossier. Pour les actes étrangers, l'apostille ou la légalisation et la traduction peuvent être nécessaires. Suivez le lieu de rendez-vous donné par e-ikamet.",
          "table": {
            "headers": [
              "Étape",
              "Règle"
            ],
            "rows": [
              [
                "Dépôt",
                "Avant expiration du séjour légal"
              ],
              [
                "Carte 2026",
                "964 TL"
              ],
              [
                "Décision",
                "90 jours après dossier complet"
              ],
              [
                "Renouvellement",
                "60 derniers jours"
              ],
              [
                "Déménagement",
                "20 jours ouvrables"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Paiements et attente",
          "body": "La carte de 964 TL se distingue des droits de séjour variables. Le dépôt et la prise de rendez-vous sont gratuits. Le délai de décision normal est de 90 jours après dossier complet. Surveillez les notifications et demandes de pièces. Pour les renouvellements et transferts, vérifiez le justificatif UETS exigé."
        },
        {
          "id": "visa-detail-5",
          "title": "Après l'approbation",
          "body": "Enregistrez l'adresse dans le délai prescrit et déclarez tout déménagement sous 20 jours ouvrables. Si vous déménagez vers une autre province, déposez la demande correspondante. Renouvelez dans les 60 jours précédant l'expiration. Pour vérifier une procédure, contactez la direction d'Antalya ou YİMER au 157 depuis la Turquie."
        }
      ],
      "faqs": [
        {
          "question": "La pension garantit-elle un ikamet ?",
          "answer": "Non, elle sert de preuve de ressources."
        },
        {
          "question": "Combien de jours pour une décision ?",
          "answer": "90 jours après remise complète selon la règle générale."
        },
        {
          "question": "Le rendez-vous est-il payant ?",
          "answer": "Non sur le portail officiel."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles"
        },
        {
          "href": "https://www.goc.gov.tr/ikamet-genel-bilgiler/",
          "label": "Procédure de résidence"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Tarifs 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence"
        },
        {
          "href": "https://antalya.goc.gov.tr/",
          "label": "Migration Antalya"
        }
      ]
    },
    "en": {
      "title": "Antalya ikamet 2026: application, appointment and card fees",
      "metaDescription": "Apply or renew Antalya residence: required evidence, address, insurance, fees, UETS and decision period.",
      "shortAnswer": "Apply on e-ikamet during lawful stay. The residence purpose, exact Antalya address and supporting records determine eligibility. The 2026 card costs TRY 964.",
      "bosphorasHelp": "Bosphoras coordinates housing searches, visits and appointments with independent professionals. Authorities decide applications; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choose a qualifying purpose",
          "body": "Retirement is not a separate category; pension income can prove means but an accepted purpose is required. Owner-occupiers document the home and applicable value criteria. Family applicants prove sponsor eligibility. Do not select a category solely because it appears easier."
        },
        {
          "id": "visa-detail-2",
          "title": "Verify the address before leasing",
          "body": "In Konyaaltı, Lara or elsewhere, confirm the exact neighbourhood and apartment with migration. Historical closure lists do not establish 2026 eligibility. Obtain the landlord's title evidence and a compliant lease. The previous tenant's registration does not guarantee yours."
        },
        {
          "id": "visa-detail-3",
          "title": "Prepare the file",
          "body": "Gather passport, signed application, photographs specified by the generated list, applicable insurance, means and accommodation evidence. Each child has a separate file. Foreign civil records may require apostille or legalisation and translation. Follow the appointment location assigned through e-ikamet.",
          "table": {
            "headers": [
              "Step",
              "Rule"
            ],
            "rows": [
              [
                "Application",
                "Before lawful stay ends"
              ],
              [
                "2026 card",
                "TRY 964"
              ],
              [
                "Decision",
                "90 days after complete submission"
              ],
              [
                "Renewal",
                "Final 60 days"
              ],
              [
                "Move",
                "20 working days"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Payments and waiting",
          "body": "The TRY 964 card fee is separate from variable residence duties. Filing and appointment booking are free. The usual decision period is 90 days from complete submission. Monitor notices and document requests. Check applicable UETS evidence for extensions and transfers."
        },
        {
          "id": "visa-detail-5",
          "title": "After approval",
          "body": "Register your address within the prescribed deadline and report changes within 20 working days. Moving provinces requires the relevant application. Renew in the last 60 days before expiry. Contact Antalya migration or YİMER 157 from Turkey for procedural guidance."
        }
      ],
      "faqs": [
        {
          "question": "Does pension income guarantee approval?",
          "answer": "No, it is evidence of means."
        },
        {
          "question": "How long is the decision period?",
          "answer": "Normally 90 days from complete submission."
        },
        {
          "question": "Is the official appointment paid?",
          "answer": "No."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official residence FAQ"
        },
        {
          "href": "https://www.goc.gov.tr/ikamet-genel-bilgiler/",
          "label": "Residence procedure"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "2026 fees"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence categories"
        },
        {
          "href": "https://antalya.goc.gov.tr/",
          "label": "Antalya migration"
        }
      ]
    },
    "ru": {
      "title": "Икамет в Анталье 2026: оформление, запись и стоимость",
      "metaDescription": "Оформление и продление ВНЖ в Анталье: документы, адрес, страховка, сборы, UETS и сроки.",
      "shortAnswer": "Подавайте через e-ikamet в период законного пребывания. Учитываются основание, точный адрес и документы. Карта в 2026 году стоит 964 лиры.",
      "bosphorasHelp": "Bosphoras организует поиск жилья, поездки и встречи с независимыми специалистами. Решения принимают органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Выбор основания",
          "body": "Пенсия не является отдельной категорией ВНЖ; она подтверждает средства, но требуется допустимая цель. Собственник подтверждает личное жильё и требования к стоимости. Семейный заявитель доказывает соответствие спонсора. Не выбирайте основание только из-за предполагаемой простоты."
        },
        {
          "id": "visa-detail-2",
          "title": "Проверка адреса до аренды",
          "body": "В Коньяалты, Ларе и других районах проверьте точный квартал и квартиру в миграционной службе. Старые списки ограничений не подтверждают статус в 2026 году. Получите документы собственника и соответствующий договор. Регистрация прежнего жильца не гарантирует вашу."
        },
        {
          "id": "visa-detail-3",
          "title": "Документы",
          "body": "Подготовьте паспорт, подписанную анкету, фото по списку, необходимую страховку, финансовые документы и жильё. Для каждого ребёнка отдельное дело. Иностранные акты могут требовать апостиля или легализации и перевода. Следуйте месту приёма в уведомлении e-ikamet.",
          "table": {
            "headers": [
              "Этап",
              "Правило"
            ],
            "rows": [
              [
                "Подача",
                "До конца законного пребывания"
              ],
              [
                "Карта 2026",
                "964 лиры"
              ],
              [
                "Решение",
                "90 дней с полной подачи"
              ],
              [
                "Продление",
                "Последние 60 дней"
              ],
              [
                "Переезд",
                "20 рабочих дней"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Оплата и ожидание",
          "body": "Стоимость карты 964 лиры не включает переменный сбор за ВНЖ. Подача и запись бесплатны. Решение обычно принимается в течение 90 дней после полной подачи. Следите за уведомлениями и запросами. Для продления и смены категории проверьте требования UETS."
        },
        {
          "id": "visa-detail-5",
          "title": "После одобрения",
          "body": "Зарегистрируйте адрес вовремя и сообщите об изменении в течение 20 рабочих дней. Переезд в другую провинцию требует соответствующего заявления. Продлевайте в последние 60 дней. По вопросам обращайтесь в управление Антальи или YİMER 157 в Турции."
        }
      ],
      "faqs": [
        {
          "question": "Пенсия гарантирует ВНЖ?",
          "answer": "Нет, она подтверждает средства."
        },
        {
          "question": "Сколько длится рассмотрение?",
          "answer": "Обычно 90 дней с полной подачи."
        },
        {
          "question": "Официальная запись платная?",
          "answer": "Нет."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные вопросы о ВНЖ"
        },
        {
          "href": "https://www.goc.gov.tr/ikamet-genel-bilgiler/",
          "label": "Порядок оформления ВНЖ"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Сборы 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://antalya.goc.gov.tr/",
          "label": "Миграция Антальи"
        }
      ]
    },
    "ar": {
      "title": "إيكامت أنطاليا 2026: الإجراءات والموعد وسعر البطاقة",
      "metaDescription": "طلب وتجديد إقامة أنطاليا: الوثائق والعنوان والتأمين والرسوم وUETS والمدة.",
      "shortAnswer": "قدم عبر e-ikamet أثناء البقاء القانوني. يتوقف الطلب على الغرض والعنوان الدقيق والوثائق. رسم البطاقة 964 ليرة لعام 2026.",
      "bosphorasHelp": "تنسق Bosphoras البحث عن السكن والزيارات والمواعيد مع المختصين المستقلين. تبت السلطات في الطلبات دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "اختيار الأساس",
          "body": "التقاعد ليس نوعاً مستقلاً من الإقامة؛ قد يثبت المعاش الموارد لكن يلزم غرض مقبول. يثبت المالك الساكن العقار ومعايير القيمة المطبقة، ويثبت الطلب العائلي أهلية الكفيل. لا تختر الغرض لمجرد توقع سهولته."
        },
        {
          "id": "visa-detail-2",
          "title": "التحقق من العنوان قبل الإيجار",
          "body": "في كونيالتي ولارا وغيرها تحقق من الحي والشقة المحددين لدى الهجرة. لا تؤكد قوائم القيود القديمة وضع 2026. اطلب سند المالك والعقد المطابق. لا يضمن تسجيل المستأجر السابق تسجيلك."
        },
        {
          "id": "visa-detail-3",
          "title": "تجهيز الملف",
          "body": "جهز الجواز والاستمارة الموقعة والصور وفق القائمة والتأمين المطلوب والموارد والسكن. لكل طفل ملف مستقل. قد تحتاج الوثائق الأجنبية إلى تصديق وترجمة. اتبع مكان الموعد في إخطار e-ikamet.",
          "table": {
            "headers": [
              "الخطوة",
              "القاعدة"
            ],
            "rows": [
              [
                "الطلب",
                "قبل انتهاء البقاء القانوني"
              ],
              [
                "بطاقة 2026",
                "964 ليرة"
              ],
              [
                "القرار",
                "90 يوماً من اكتمال الملف"
              ],
              [
                "التجديد",
                "آخر 60 يوماً"
              ],
              [
                "الانتقال",
                "20 يوم عمل"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "الدفع والانتظار",
          "body": "رسم البطاقة 964 ليرة منفصل عن رسوم التصريح المتغيرة. الطلب والموعد مجانيان. المدة العادية للبت 90 يوماً بعد اكتمال الملف. تابع الإخطارات والاستكمال وتحقق من إثبات UETS للتجديد وتغيير النوع."
        },
        {
          "id": "visa-detail-5",
          "title": "بعد الموافقة",
          "body": "سجل العنوان ضمن المهلة وأبلغ عن تغييره خلال 20 يوم عمل. يتطلب الانتقال لولاية جديدة الإجراء المناسب. جدد في آخر 60 يوماً. للاستفسار اتصل بإدارة أنطاليا أو YİMER على 157 داخل تركيا."
        }
      ],
      "faqs": [
        {
          "question": "هل يضمن المعاش الإقامة؟",
          "answer": "لا، هو إثبات للموارد."
        },
        {
          "question": "كم يستغرق البت؟",
          "answer": "عادة 90 يوماً من اكتمال الملف."
        },
        {
          "question": "هل الموعد الرسمي مدفوع؟",
          "answer": "لا."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "المنصة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية للإقامة"
        },
        {
          "href": "https://www.goc.gov.tr/ikamet-genel-bilgiler/",
          "label": "إجراءات الإقامة"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "رسوم 2026"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة"
        },
        {
          "href": "https://antalya.goc.gov.tr/",
          "label": "هجرة أنطاليا"
        }
      ]
    }
  },
  "visa-residence-citizenship-difference": {
    "fr": {
      "title": "Visa, résidence ou citoyenneté turque : différences et droits en 2026",
      "metaDescription": "Comparez le visa, l'ikamet, le permis de travail et la nationalité turque : droits, durées et conditions.",
      "shortAnswer": "Le visa ou la dispense couvre une visite selon les règles d'entrée ; l'ikamet autorise la résidence ; la citoyenneté confère la nationalité turque. Aucun ne se transforme automatiquement en un autre.",
      "bosphorasHelp": "Bosphoras coordonne la recherche de logement, les visites et les rendez-vous avec des professionnels indépendants. Les autorités décident des demandes, sans garantie d'acceptation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Visite et entrée",
          "body": "La nationalité et le passeport déterminent le besoin de visa, e-Visa ou dispense. Distinguez durée de présence, validité du document et nombre d'entrées. Une autorisation touristique n'autorise pas automatiquement un travail local ou une installation durable.",
          "table": {
            "headers": [
              "Statut",
              "Durée ou condition"
            ],
            "rows": [
              [
                "Visa / dispense",
                "Selon passeport et nationalité"
              ],
              [
                "Courte durée",
                "Généralement jusqu'à 2 ans"
              ],
              [
                "Longue durée",
                "8 ans admissibles en principe"
              ],
              [
                "Naturalisation générale",
                "5 ans admissibles + critères"
              ],
              [
                "Mariage",
                "3 ans de mariage en cours + critères"
              ],
              [
                "Immobilier qualifié pour citoyenneté",
                "400 000 USD, conservation 3 ans"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Résidence et emploi",
          "body": "Le permis de séjour dépend d'un motif légal : courte durée, famille, études, longue durée ou protection particulière. Le permis de travail valide vaut généralement titre de séjour. L'inverse n'est pas automatique : un titulaire d'ikamet doit obtenir le droit de travailler applicable."
        },
        {
          "id": "visa-detail-3",
          "title": "Nationalité et naturalisation",
          "body": "Selon la loi 5901, la voie générale exige cinq ans de résidence continue admissible, des ressources, une maîtrise suffisante du turc, une volonté d'installation et d'autres conditions de santé, moralité et sécurité. La voie par mariage requiert en principe trois ans de mariage en cours avec un citoyen turc. Les investissements qualifiés relèvent d'une voie exceptionnelle, non automatique."
        },
        {
          "id": "visa-detail-4",
          "title": "Résidence permanente",
          "body": "Le titre longue durée est indéterminé sous conditions, généralement après huit années de résidence admissible. Il ne donne pas le passeport, ni le droit de vote. Le calcul des années n'est pas celui de la naturalisation, notamment pour le tourisme et les études."
        },
        {
          "id": "visa-detail-5",
          "title": "Exemple familial",
          "body": "Après une visite, une famille demande une résidence sur un motif réel avant la fin du séjour autorisé. Le parent qui travaille localement organise séparément son permis de travail. Plus tard elle examine le statut permanent ou la citoyenneté, selon leurs conditions respectives. Chaque démarche a ses propres pièces."
        }
      ],
      "faqs": [
        {
          "question": "Le visa est-il un titre de résidence ?",
          "answer": "Non, les objets sont distincts."
        },
        {
          "question": "Cinq ans garantissent-ils la citoyenneté ?",
          "answer": "Non, toutes les conditions et une décision favorable sont nécessaires."
        },
        {
          "question": "Le titre permanent délivre-t-il un passeport ?",
          "answer": "Non, la nationalité est nécessaire."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "Administration de la citoyenneté"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "Loi 5901 consolidée"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Invest in Türkiye : résidence"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Règles de visas"
        }
      ]
    },
    "en": {
      "title": "Turkey visa, residence and citizenship: differences in 2026",
      "metaDescription": "Compare visas, ikamet, work permits and Turkish citizenship: rights, durations and eligibility.",
      "shortAnswer": "A visa or exemption covers a visit under entry rules; ikamet permits residence; citizenship confers Turkish nationality. None automatically converts into another.",
      "bosphorasHelp": "Bosphoras coordinates housing searches, visits and appointments with independent professionals. Authorities decide applications; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Entry and visits",
          "body": "Nationality and passport determine whether a visa, e-Visa or exemption applies. Distinguish permitted stay, validity and entries. Tourist permission does not automatically authorise local employment or settlement.",
          "table": {
            "headers": [
              "Status",
              "Duration or condition"
            ],
            "rows": [
              [
                "Visa / exemption",
                "By passport and nationality"
              ],
              [
                "Short-term",
                "Generally up to 2 years"
              ],
              [
                "Long-term",
                "Normally 8 qualifying years"
              ],
              [
                "General naturalisation",
                "5 qualifying years + criteria"
              ],
              [
                "Marriage",
                "3 years ongoing marriage + criteria"
              ],
              [
                "Qualifying citizenship property",
                "USD 400,000; hold 3 years"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Residence and employment",
          "body": "Residence requires a statutory basis: short-term, family, student, long-term or special protection. A valid work permit generally serves as residence permission. Ordinary ikamet does not automatically authorise work; obtain the required work permission separately."
        },
        {
          "id": "visa-detail-3",
          "title": "Citizenship and naturalisation",
          "body": "Under Law 5901 general naturalisation requires five qualifying continuous years, sufficient means and Turkish, settlement intent and other health, character and security criteria. Marriage-based acquisition normally requires an ongoing marriage of at least three years to a Turkish citizen. Qualifying investment is an exceptional, non-automatic route."
        },
        {
          "id": "visa-detail-4",
          "title": "Permanent residence",
          "body": "Long-term residence is indefinite subject to conditions, ordinarily after eight qualifying years. It confers neither a passport nor voting rights. Counting periods differs from naturalisation, particularly for tourist and student residence."
        },
        {
          "id": "visa-detail-5",
          "title": "Family example",
          "body": "After a visit, a family applies on a genuine residence basis before lawful stay ends. The parent working locally arranges separate work permission. Later they assess permanent residence or citizenship under the respective conditions. Each process requires its own evidence."
        }
      ],
      "faqs": [
        {
          "question": "Is a visa a residence card?",
          "answer": "No, they serve different purposes."
        },
        {
          "question": "Does five years guarantee citizenship?",
          "answer": "No, all requirements and a favourable decision are necessary."
        },
        {
          "question": "Does permanent residence confer a passport?",
          "answer": "No, Turkish nationality is required."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence categories"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "Citizenship authority"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "Consolidated Law 5901"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Invest in Türkiye: residence"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa rules"
        }
      ]
    },
    "ru": {
      "title": "Виза, ВНЖ и гражданство Турции: различия в 2026 году",
      "metaDescription": "Виза, икамет, разрешение на работу и гражданство Турции: сравнение прав, сроков и условий.",
      "shortAnswer": "Виза или безвизовый режим позволяют приехать на установленных условиях, икамет разрешает проживание, гражданство даёт статус гражданина Турции. Один статус не становится другим автоматически.",
      "bosphorasHelp": "Bosphoras организует поиск жилья, поездки и встречи с независимыми специалистами. Решения принимают органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Въезд и визит",
          "body": "Гражданство и паспорт определяют визовый, электронный или безвизовый режим. Различайте допустимое пребывание, срок действия и число въездов. Туристический статус не разрешает автоматически работать или поселиться.",
          "table": {
            "headers": [
              "Статус",
              "Срок или условие"
            ],
            "rows": [
              [
                "Виза / безвиз",
                "По паспорту и гражданству"
              ],
              [
                "Краткосрочный",
                "Обычно до 2 лет"
              ],
              [
                "Долгосрочный",
                "Обычно 8 учитываемых лет"
              ],
              [
                "Общая натурализация",
                "5 учитываемых лет и условия"
              ],
              [
                "Брак",
                "3 года действующего брака и условия"
              ],
              [
                "Недвижимость для гражданства",
                "400 000 USD; 3 года"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Проживание и работа",
          "body": "Основанием ВНЖ служат краткосрочная, семейная, студенческая, долгосрочная или особая защитная категория. Действующее разрешение на работу обычно заменяет ВНЖ. Обычный икамет не даёт автоматического права работать; необходимо соответствующее разрешение."
        },
        {
          "id": "visa-detail-3",
          "title": "Гражданство и натурализация",
          "body": "По закону № 5901 общий порядок требует пяти учитываемых непрерывных лет, средств, знания турецкого языка, намерения поселиться и иных условий здоровья, поведения и безопасности. По браку обычно нужен действующий брак с гражданином Турции не менее трёх лет. Квалифицированные инвестиции — отдельный исключительный порядок без гарантии."
        },
        {
          "id": "visa-detail-4",
          "title": "Бессрочное проживание",
          "body": "Долгосрочный ВНЖ бессрочен при соблюдении условий, обычно после восьми учитываемых лет. Он не даёт паспорт и право голосовать. Сроки рассчитываются иначе, чем для гражданства, особенно для туризма и учёбы."
        },
        {
          "id": "visa-detail-5",
          "title": "Пример семьи",
          "body": "После визита семья подаёт на ВНЖ по реальному основанию до окончания законного срока. Работающий в Турции родитель оформляет разрешение отдельно. Позже семья оценивает бессрочный ВНЖ или гражданство по их условиям. Для каждого процесса нужны свои документы."
        }
      ],
      "faqs": [
        {
          "question": "Виза — это ВНЖ?",
          "answer": "Нет, цели разные."
        },
        {
          "question": "Пять лет гарантируют гражданство?",
          "answer": "Нет, нужны все условия и положительное решение."
        },
        {
          "question": "Бессрочный ВНЖ даёт паспорт?",
          "answer": "Нет, необходимо гражданство."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "Управление гражданства"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "Закон 5901 в действующей редакции"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Invest in Türkiye: ВНЖ"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила"
        }
      ]
    },
    "ar": {
      "title": "الفرق بين التأشيرة والإقامة والجنسية التركية في 2026",
      "metaDescription": "قارن التأشيرة والإيكامت وتصريح العمل والجنسية التركية من حيث الحقوق والمدد والشروط.",
      "shortAnswer": "تغطي التأشيرة أو الإعفاء الزيارة وفق قواعد الدخول، ويسمح الإيكامت بالسكن، وتمنح الجنسية صفة المواطن التركي. لا يتحول أي منها تلقائياً إلى الآخر.",
      "bosphorasHelp": "تنسق Bosphoras البحث عن السكن والزيارات والمواعيد مع المختصين المستقلين. تبت السلطات في الطلبات دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "الدخول والزيارة",
          "body": "تحدد الجنسية والجواز الحاجة للتأشيرة أو الإلكترونية أو الإعفاء. ميز مدة البقاء والصلاحية وعدد مرات الدخول. لا تمنح السياحة تلقائياً حق العمل المحلي أو الاستقرار.",
          "table": {
            "headers": [
              "الوضع",
              "المدة أو الشرط"
            ],
            "rows": [
              [
                "تأشيرة أو إعفاء",
                "حسب الجواز والجنسية"
              ],
              [
                "قصيرة الأجل",
                "حتى سنتين عموماً"
              ],
              [
                "طويلة الأجل",
                "8 سنوات محتسبة عموماً"
              ],
              [
                "التجنس العام",
                "5 سنوات محتسبة وشروط"
              ],
              [
                "الزواج",
                "3 سنوات زواج قائم وشروط"
              ],
              [
                "عقار مؤهل للجنسية",
                "400 ألف دولار؛ احتفاظ 3 سنوات"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "الإقامة والعمل",
          "body": "تتطلب الإقامة أساساً قانونياً قصيراً أو عائلياً أو دراسياً أو طويلاً أو للحماية الخاصة. يعتبر تصريح العمل الساري عادة تصريح إقامة، لكن الإيكامت العادي لا يجيز العمل تلقائياً؛ يلزم التصريح المناسب."
        },
        {
          "id": "visa-detail-3",
          "title": "الجنسية والتجنس",
          "body": "يتطلب المسار العام للقانون 5901 خمس سنوات متواصلة محتسبة وموارد ولغة تركية كافية ونية الاستقرار وشروط الصحة والسلوك والأمن. ويشترط مسار الزواج عادة زواجاً قائماً من مواطن تركي منذ ثلاث سنوات. تخضع الاستثمارات المؤهلة لمسار استثنائي غير تلقائي."
        },
        {
          "id": "visa-detail-4",
          "title": "الإقامة الدائمة",
          "body": "تمنح الإقامة الطويلة دون مدة محددة بشروط منها عادة ثماني سنوات محتسبة. لا تمنح الجواز أو التصويت. ويختلف حساب المدد عن التجنس خصوصاً للسياحة والدراسة."
        },
        {
          "id": "visa-detail-5",
          "title": "مثال عائلي",
          "body": "بعد الزيارة تقدم الأسرة على أساس حقيقي قبل انتهاء البقاء القانوني. ينظم الوالد العامل محلياً تصريح العمل بصورة مستقلة. ثم تدرس الأسرة الإقامة الدائمة أو الجنسية وفق شروطهما. لكل إجراء وثائقه."
        }
      ],
      "faqs": [
        {
          "question": "هل التأشيرة إقامة؟",
          "answer": "لا، الغرض مختلف."
        },
        {
          "question": "هل تضمن خمس سنوات الجنسية؟",
          "answer": "لا، يلزم استيفاء الشروط وقرار إيجابي."
        },
        {
          "question": "هل تمنح الإقامة الدائمة جوازاً؟",
          "answer": "لا، يلزم الحصول على الجنسية."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "إدارة الجنسية"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "القانون 5901 المدمج"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "مكتب الاستثمار: الإقامة"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "قواعد التأشيرات"
        }
      ]
    }
  },
  "turkey-residence-or-citizenship": {
    "fr": {
      "title": "Résidence ou citoyenneté turque en 2026 : quel statut choisir ?",
      "metaDescription": "Comparez ikamet, résidence permanente et citoyenneté en Turquie et les seuils immobiliers de 200 000 et 400 000 USD.",
      "shortAnswer": "Pour vivre en Turquie, la nationalité n'est pas obligatoire. Choisissez selon le projet réel, la durée de séjour, le droit de travailler, la famille et les objectifs patrimoniaux.",
      "bosphorasHelp": "Bosphoras coordonne la recherche de logement, les visites et les rendez-vous avec des professionnels indépendants. Les autorités décident des demandes, sans garantie d'acceptation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Pour un projet temporaire",
          "body": "Le titre de courte durée peut atteindre deux ans dans le régime ordinaire ; le titre familial jusqu'à trois ans sans dépasser le titre du sponsor étranger. Un renouvellement n'est pas garanti. L'activité professionnelle locale requiert une autorisation appropriée.",
          "table": {
            "headers": [
              "Statut",
              "Durée ou condition"
            ],
            "rows": [
              [
                "Visa / dispense",
                "Selon passeport et nationalité"
              ],
              [
                "Courte durée",
                "Généralement jusqu'à 2 ans"
              ],
              [
                "Longue durée",
                "8 ans admissibles en principe"
              ],
              [
                "Naturalisation générale",
                "5 ans admissibles + critères"
              ],
              [
                "Mariage",
                "3 ans de mariage en cours + critères"
              ],
              [
                "Immobilier qualifié pour citoyenneté",
                "400 000 USD, conservation 3 ans"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Pour s'établir",
          "body": "Le titre longue durée est indéterminé sous conditions : généralement huit ans de résidence continue admissible, ressources stables, assurance, absence d'aide sociale sur les trois dernières années et critères de sécurité. Il peut être annulé pour les motifs légaux et ne confère pas tous les droits civiques."
        },
        {
          "id": "visa-detail-3",
          "title": "Pour obtenir la nationalité",
          "body": "La citoyenneté permet de demander un passeport et une carte d'identité turcs et ouvre les droits et obligations du citoyen. La naturalisation générale exige cinq ans admissibles et d'autres conditions, dont la langue. Vérifiez les conséquences de la double nationalité au regard de votre pays d'origine."
        },
        {
          "id": "visa-detail-4",
          "title": "Acheter à 200 000 ou 400 000 USD",
          "body": "Le parcours du propriétaire occupant pour un nouvel achat est soumis au seuil de 200 000 USD et à l'usage personnel. L'immobilier qualifié pour la citoyenneté exceptionnelle requiert au moins 400 000 USD et une restriction de revente de trois ans. Ce sont des seuils distincts, pas des frais de passeport. La certification et la décision restent nécessaires."
        },
        {
          "id": "visa-detail-5",
          "title": "Évaluer avant d'investir",
          "body": "Si vous souhaitez simplement habiter en Turquie, comparez d'abord les catégories de résidence applicables. Pour l'investissement, évaluez indépendamment le prix, les frais, la liquidité et le risque de change. Aucun montant versé ne garantit la décision administrative."
        }
      ],
      "faqs": [
        {
          "question": "Faut-il être citoyen pour vivre en Turquie ?",
          "answer": "Non, un droit de résidence adéquat suffit."
        },
        {
          "question": "400 000 USD sont-ils des frais ?",
          "answer": "Non, un seuil d'investissement immobilier qualifié."
        },
        {
          "question": "Puis-je garder ma première nationalité ?",
          "answer": "Cela dépend également de sa législation."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "Administration de la citoyenneté"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "Loi 5901 consolidée"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Investissement et citoyenneté"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Invest in Türkiye : résidence"
        }
      ]
    },
    "en": {
      "title": "Turkey residence or citizenship in 2026: which should you choose?",
      "metaDescription": "Compare ikamet, permanent residence and citizenship with USD 200,000 and USD 400,000 property thresholds.",
      "shortAnswer": "Citizenship is not required to live in Turkey. Choose according to your actual plans, duration, work rights, family and asset objectives.",
      "bosphorasHelp": "Bosphoras coordinates housing searches, visits and appointments with independent professionals. Authorities decide applications; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Temporary plans",
          "body": "Ordinary short-term residence can last up to two years per grant; family residence up to three years, limited by a foreign sponsor's permit. Renewals are not guaranteed. Local work requires appropriate authorisation.",
          "table": {
            "headers": [
              "Status",
              "Duration or condition"
            ],
            "rows": [
              [
                "Visa / exemption",
                "By passport and nationality"
              ],
              [
                "Short-term",
                "Generally up to 2 years"
              ],
              [
                "Long-term",
                "Normally 8 qualifying years"
              ],
              [
                "General naturalisation",
                "5 qualifying years + criteria"
              ],
              [
                "Marriage",
                "3 years ongoing marriage + criteria"
              ],
              [
                "Qualifying citizenship property",
                "USD 400,000; hold 3 years"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Long-term settlement",
          "body": "Indefinite residence ordinarily requires eight qualifying continuous years, stable means, insurance, no social assistance in the previous three years and security eligibility. It can be cancelled on statutory grounds and does not confer all civic rights."
        },
        {
          "id": "visa-detail-3",
          "title": "Nationality",
          "body": "Citizenship allows applications for a Turkish passport and identity card and carries civic rights and duties. General naturalisation requires five qualifying years and other criteria including language. Assess multiple nationality under your original country's rules."
        },
        {
          "id": "visa-detail-4",
          "title": "USD 200,000 or USD 400,000 property",
          "body": "New owner-occupier acquisitions are subject to the USD 200,000 threshold and personal use requirements. Qualifying exceptional citizenship property requires at least USD 400,000 and a three-year resale restriction. These are distinct investment thresholds, not passport fees. Certification and approval remain necessary."
        },
        {
          "id": "visa-detail-5",
          "title": "Assess before investing",
          "body": "If your goal is living in Turkey, first compare eligible residence categories. For investment, independently assess price, expenses, liquidity and currency risk. Paying a given amount does not guarantee the administrative decision."
        }
      ],
      "faqs": [
        {
          "question": "Must I be a citizen to live in Turkey?",
          "answer": "No, suitable residence permission suffices."
        },
        {
          "question": "Is USD 400,000 a fee?",
          "answer": "No, it is a qualifying property investment threshold."
        },
        {
          "question": "Can I keep my original nationality?",
          "answer": "That also depends on the law of that country."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence categories"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "Citizenship authority"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "Consolidated Law 5901"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Investment and citizenship"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Invest in Türkiye: residence"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ или гражданство Турции 2026: что выбрать?",
      "metaDescription": "Сравните икамет, долгосрочный ВНЖ, гражданство и имущественные пороги 200 000 и 400 000 долларов.",
      "shortAnswer": "Гражданство не обязательно для проживания в Турции. Выбор зависит от цели, срока, работы, семейных и имущественных планов.",
      "bosphorasHelp": "Bosphoras организует поиск жилья, поездки и встречи с независимыми специалистами. Решения принимают органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Временное проживание",
          "body": "Обычный краткосрочный ВНЖ выдаётся до двух лет, семейный — до трёх лет и не дольше ВНЖ иностранного спонсора. Продление не гарантировано. Для работы необходимо соответствующее разрешение.",
          "table": {
            "headers": [
              "Статус",
              "Срок или условие"
            ],
            "rows": [
              [
                "Виза / безвиз",
                "По паспорту и гражданству"
              ],
              [
                "Краткосрочный",
                "Обычно до 2 лет"
              ],
              [
                "Долгосрочный",
                "Обычно 8 учитываемых лет"
              ],
              [
                "Общая натурализация",
                "5 учитываемых лет и условия"
              ],
              [
                "Брак",
                "3 года действующего брака и условия"
              ],
              [
                "Недвижимость для гражданства",
                "400 000 USD; 3 года"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Долгосрочное поселение",
          "body": "Бессрочный ВНЖ обычно требует восьми учитываемых непрерывных лет, стабильного дохода, страховки, отсутствия социальной помощи три года и соблюдения требований безопасности. Возможна отмена по закону; не предоставляются все гражданские права."
        },
        {
          "id": "visa-detail-3",
          "title": "Получение гражданства",
          "body": "Гражданство позволяет оформить паспорт и удостоверение личности Турции и даёт права и обязанности гражданина. Общая натурализация требует пяти учитываемых лет и иных условий, включая язык. Учитывайте правила множественного гражданства вашей страны."
        },
        {
          "id": "visa-detail-4",
          "title": "Недвижимость за 200 000 или 400 000 долларов",
          "body": "Новая покупка для ВНЖ собственника требует порога 200 000 долларов и личного проживания. Квалифицированный объект для исключительного гражданства стоит от 400 000 долларов с запретом продажи три года. Это разные инвестиционные пороги, не сборы за паспорт. Нужны подтверждение и решение."
        },
        {
          "id": "visa-detail-5",
          "title": "Оценка до инвестиций",
          "body": "Если цель — жизнь в Турции, сначала сравните подходящие категории ВНЖ. Для вложения независимо оцените цену, расходы, ликвидность и валютный риск. Оплата определённой суммы не гарантирует решение."
        }
      ],
      "faqs": [
        {
          "question": "Нужно ли гражданство для жизни в Турции?",
          "answer": "Нет, достаточно подходящего разрешения."
        },
        {
          "question": "400 000 долларов — пошлина?",
          "answer": "Нет, инвестиционный порог недвижимости."
        },
        {
          "question": "Можно сохранить исходное гражданство?",
          "answer": "Это зависит также от закона соответствующей страны."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "Управление гражданства"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "Закон 5901 в действующей редакции"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Инвестиции и гражданство"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Invest in Türkiye: ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "إقامة تركيا أم الجنسية التركية 2026: أيهما تختار؟",
      "metaDescription": "قارن الإيكامت والإقامة الدائمة والجنسية وحدي الاستثمار العقاري 200 ألف و400 ألف دولار.",
      "shortAnswer": "لا تشترط الجنسية للعيش في تركيا. اختر وفق الغرض والمدة والعمل والأسرة والأهداف المتعلقة بالأصول.",
      "bosphorasHelp": "تنسق Bosphoras البحث عن السكن والزيارات والمواعيد مع المختصين المستقلين. تبت السلطات في الطلبات دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "المشروع المؤقت",
          "body": "تصل الإقامة القصيرة العادية إلى سنتين والعائلية إلى ثلاث سنوات دون تجاوز تصريح الكفيل الأجنبي. التجديد غير مضمون. يلزم تصريح مناسب للعمل المحلي.",
          "table": {
            "headers": [
              "الوضع",
              "المدة أو الشرط"
            ],
            "rows": [
              [
                "تأشيرة أو إعفاء",
                "حسب الجواز والجنسية"
              ],
              [
                "قصيرة الأجل",
                "حتى سنتين عموماً"
              ],
              [
                "طويلة الأجل",
                "8 سنوات محتسبة عموماً"
              ],
              [
                "التجنس العام",
                "5 سنوات محتسبة وشروط"
              ],
              [
                "الزواج",
                "3 سنوات زواج قائم وشروط"
              ],
              [
                "عقار مؤهل للجنسية",
                "400 ألف دولار؛ احتفاظ 3 سنوات"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "الاستقرار الطويل",
          "body": "تتطلب الإقامة غير المحددة عادة ثماني سنوات متواصلة محتسبة ودخلاً ثابتاً وتأميناً وعدم تلقي مساعدة اجتماعية ثلاث سنوات واستيفاء الأمن. يمكن إلغاؤها قانوناً ولا تمنح كل الحقوق المدنية."
        },
        {
          "id": "visa-detail-3",
          "title": "الجنسية",
          "body": "تتيح الجنسية طلب الجواز والهوية التركيَّين مع حقوق المواطن والتزاماته. يحتاج التجنس العام خمس سنوات محتسبة وشروطاً أخرى منها اللغة. راجع قانون بلدك الأصلي بشأن تعدد الجنسيات."
        },
        {
          "id": "visa-detail-4",
          "title": "العقار بـ200 ألف أو 400 ألف دولار",
          "body": "يخضع الشراء الجديد لإقامة المالك لحد 200 ألف دولار والاستعمال الشخصي. ويتطلب العقار المؤهل للجنسية الاستثنائية 400 ألف دولار على الأقل وقيد عدم البيع ثلاث سنوات. هذه حدود استثمار مختلفة وليست رسوم جواز. يلزم الاعتماد والقرار."
        },
        {
          "id": "visa-detail-5",
          "title": "التقييم قبل الاستثمار",
          "body": "إذا كان هدفك السكن فقارن أنواع الإقامة المؤهلة أولاً. وللاستثمار قيّم السعر والمصاريف والسيولة ومخاطر العملة بصورة مستقلة. لا يضمن دفع مبلغ محدد القرار الإداري."
        }
      ],
      "faqs": [
        {
          "question": "هل الجنسية لازمة للسكن؟",
          "answer": "لا، يكفي تصريح إقامة مناسب."
        },
        {
          "question": "هل 400 ألف دولار رسوم؟",
          "answer": "لا، حد الاستثمار العقاري المؤهل."
        },
        {
          "question": "هل أحتفظ بجنسيتي الأصلية؟",
          "answer": "يعتمد ذلك أيضاً على قانون بلدها."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "إدارة الجنسية"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "القانون 5901 المدمج"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "الاستثمار والجنسية"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "مكتب الاستثمار: الإقامة"
        }
      ]
    }
  },
  "turkey-residence-before-citizenship": {
    "fr": {
      "title": "Résidence avant la citoyenneté turque : cinq ans admissibles et naturalisation",
      "metaDescription": "Comprenez le calcul des cinq années de résidence, les absences, les titres touristiques exclus et les documents de naturalisation.",
      "shortAnswer": "L'article 11 de la loi 5901 prévoit cinq années de résidence continue admissible pour la naturalisation générale. Cinq ans de cartes de séjour ne suffisent pas si le motif ne permet pas de les comptabiliser.",
      "bosphorasHelp": "Bosphoras coordonne la recherche de logement, les visites et les rendez-vous avec des professionnels indépendants. Les autorités décident des demandes, sans garantie d'acceptation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Quelles années sont admissibles ?",
          "body": "Le séjour légal doit démontrer l'intention de s'établir. Les directives administratives excluent la résidence touristique ; un changement ultérieur de titre ne rend pas automatiquement ces années comptabilisables. Certaines autres périodes, comme les études, peuvent être réexaminées après transition vers un motif admissible. Le calcul est différent de celui de l'ikamet longue durée.",
          "table": {
            "headers": [
              "Statut",
              "Durée ou condition"
            ],
            "rows": [
              [
                "Visa / dispense",
                "Selon passeport et nationalité"
              ],
              [
                "Courte durée",
                "Généralement jusqu'à 2 ans"
              ],
              [
                "Longue durée",
                "8 ans admissibles en principe"
              ],
              [
                "Naturalisation générale",
                "5 ans admissibles + critères"
              ],
              [
                "Mariage",
                "3 ans de mariage en cours + critères"
              ],
              [
                "Immobilier qualifié pour citoyenneté",
                "400 000 USD, conservation 3 ans"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Les absences du territoire",
          "body": "L'article 15 de la loi 5901, modifié en 2017, prévoit jusqu'à douze mois d'absence cumulée pendant la période requise. Des documents administratifs plus anciens mentionnent encore six mois : faites confirmer le calcul par le service compétent avant de fixer la date de dépôt. Rassemblez l'historique officiel des entrées et sorties ainsi que les titres successifs."
        },
        {
          "id": "visa-detail-3",
          "title": "Autres conditions légales",
          "body": "Il faut être majeur et juridiquement capable, prouver l'intention de s'établir, disposer de ressources ou d'une profession suffisante, maîtriser suffisamment le turc et satisfaire les critères de santé publique, moralité et sécurité. La durée seule ne donne pas de droit à la naturalisation."
        },
        {
          "id": "visa-detail-4",
          "title": "Dossier et maintien du séjour",
          "body": "Préparez le formulaire de naturalisation générale, documents d'identité et d'état civil authentifiés et traduits selon besoin, pièces de revenus, certificat médical demandé et historique de résidence. Déposez auprès du service de la population et de la citoyenneté compétent. La demande de nationalité ne prolonge pas automatiquement votre séjour."
        },
        {
          "id": "visa-detail-5",
          "title": "Autres voies",
          "body": "Un mariage en cours depuis au moins trois ans avec un citoyen turc peut permettre une demande distincte. L'investissement qualifié peut relever de la procédure exceptionnelle sans attendre cinq ans. La résidence longue durée, généralement après huit ans admissibles, n'est pas un préalable à la citoyenneté. Aucun délai de délivrance garanti n'est annoncé."
        }
      ],
      "faqs": [
        {
          "question": "Cinq ans de tourisme suffisent-ils ?",
          "answer": "Non, le titre touristique est exclu du calcul admissible."
        },
        {
          "question": "Le titre longue durée est-il obligatoire avant la nationalité ?",
          "answer": "Non, les procédures sont distinctes."
        },
        {
          "question": "Puis-je rester seulement grâce à la demande de nationalité ?",
          "answer": "Non, conservez un droit de séjour approprié."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "Administration de la citoyenneté"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "Loi 5901 consolidée"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/116845",
          "label": "Règlement de la citoyenneté"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Investissement et citoyenneté"
        }
      ]
    },
    "en": {
      "title": "Residence before Turkish citizenship: qualifying five years and naturalisation",
      "metaDescription": "Understand the five-year residence calculation, absences, excluded tourist permits and naturalisation evidence.",
      "shortAnswer": "Article 11 of Law 5901 requires five qualifying continuous years for general naturalisation. Five years of residence cards alone are insufficient when their purpose does not qualify.",
      "bosphorasHelp": "Bosphoras coordinates housing searches, visits and appointments with independent professionals. Authorities decide applications; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Which periods count?",
          "body": "Lawful residence must demonstrate settlement intent. Administrative guidance excludes tourist residence; switching categories later does not automatically make those years count. Certain other periods, such as study, may be reassessed after changing to an accepted purpose. The calculation differs from long-term ikamet.",
          "table": {
            "headers": [
              "Status",
              "Duration or condition"
            ],
            "rows": [
              [
                "Visa / exemption",
                "By passport and nationality"
              ],
              [
                "Short-term",
                "Generally up to 2 years"
              ],
              [
                "Long-term",
                "Normally 8 qualifying years"
              ],
              [
                "General naturalisation",
                "5 qualifying years + criteria"
              ],
              [
                "Marriage",
                "3 years ongoing marriage + criteria"
              ],
              [
                "Qualifying citizenship property",
                "USD 400,000; hold 3 years"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Absences abroad",
          "body": "Article 15 of Law 5901, amended in 2017, allows up to twelve months of cumulative absence in the required period. Older administrative documents still mention six months: confirm the calculation with the competent citizenship office before choosing a filing date. Gather the official border-crossing history and successive permits."
        },
        {
          "id": "visa-detail-3",
          "title": "Other statutory criteria",
          "body": "Applicants must be adults with legal capacity, demonstrate settlement intent, adequate income or occupation, sufficient Turkish and satisfy public-health, character and security conditions. The minimum duration alone gives no entitlement to naturalisation."
        },
        {
          "id": "visa-detail-4",
          "title": "Documents and lawful stay",
          "body": "Prepare the general naturalisation form, identity and civil records authenticated and translated as appropriate, income evidence, required health certificate and residence history. Apply through the competent population and citizenship office. Applying for nationality does not automatically extend your stay."
        },
        {
          "id": "visa-detail-5",
          "title": "Alternative routes",
          "body": "An ongoing marriage of at least three years to a Turkish citizen may enable a separate application. Qualifying investment may use the exceptional procedure without the ordinary five-year wait. Long-term residence, normally after eight qualifying years, is not a prerequisite. No guaranteed processing time is claimed."
        }
      ],
      "faqs": [
        {
          "question": "Do five tourist years count?",
          "answer": "No, tourist residence is excluded from qualifying residence."
        },
        {
          "question": "Must I obtain long-term residence first?",
          "answer": "No, the processes are distinct."
        },
        {
          "question": "Can I stay merely because I applied for nationality?",
          "answer": "No; maintain appropriate lawful residence."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence categories"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "Citizenship authority"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "Consolidated Law 5901"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/116845",
          "label": "Citizenship regulation"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Investment and citizenship"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ перед гражданством Турции: пять учитываемых лет и натурализация",
      "metaDescription": "Расчёт пяти лет, выезды, исключение туристического ВНЖ и документы общей натурализации.",
      "shortAnswer": "Статья 11 закона № 5901 предусматривает пять непрерывных учитываемых лет для общей натурализации. Пяти лет действия карт недостаточно, если основание проживания не подходит.",
      "bosphorasHelp": "Bosphoras организует поиск жилья, поездки и встречи с независимыми специалистами. Решения принимают органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Какие периоды засчитываются",
          "body": "Законное проживание должно подтверждать намерение поселиться. Административные разъяснения исключают туристический ВНЖ; последующая смена категории не делает эти годы автоматически учитываемыми. Некоторые другие периоды, включая учёбу, могут пересматриваться после перехода на допустимое основание. Расчёт отличается от долгосрочного ВНЖ.",
          "table": {
            "headers": [
              "Статус",
              "Срок или условие"
            ],
            "rows": [
              [
                "Виза / безвиз",
                "По паспорту и гражданству"
              ],
              [
                "Краткосрочный",
                "Обычно до 2 лет"
              ],
              [
                "Долгосрочный",
                "Обычно 8 учитываемых лет"
              ],
              [
                "Общая натурализация",
                "5 учитываемых лет и условия"
              ],
              [
                "Брак",
                "3 года действующего брака и условия"
              ],
              [
                "Недвижимость для гражданства",
                "400 000 USD; 3 года"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Выезды за границу",
          "body": "Статья 15 закона № 5901 в редакции 2017 года допускает суммарно до двенадцати месяцев отсутствия за требуемый период. Прежние административные материалы ещё указывают шесть месяцев: подтвердите расчёт в компетентном управлении гражданства до выбора даты подачи. Соберите официальную историю пересечения границы и прежние разрешения."
        },
        {
          "id": "visa-detail-3",
          "title": "Иные условия закона",
          "body": "Необходимы совершеннолетие и дееспособность, намерение поселиться, достаточный доход или профессия, знание турецкого и соблюдение требований здоровья, поведения и безопасности. Минимальная продолжительность сама по себе не даёт права на натурализацию."
        },
        {
          "id": "visa-detail-4",
          "title": "Документы и законное пребывание",
          "body": "Подготовьте анкету натурализации, документы личности и гражданского состояния с требуемым заверением и переводом, подтверждение доходов, медицинскую справку и историю ВНЖ. Обратитесь в компетентное управление населения и гражданства. Заявление на гражданство не продлевает пребывание автоматически."
        },
        {
          "id": "visa-detail-5",
          "title": "Другие основания",
          "body": "Действующий брак с гражданином Турции не менее трёх лет может позволить отдельную подачу. Квалифицированные инвестиции допускают исключительную процедуру без обычного пятилетнего ожидания. Долгосрочный ВНЖ, обычно после восьми лет, не является обязательным предварительным этапом. Гарантированный срок не указан."
        }
      ],
      "faqs": [
        {
          "question": "Пять туристических лет учитываются?",
          "answer": "Нет, туристическое проживание исключено."
        },
        {
          "question": "Нужен сначала бессрочный ВНЖ?",
          "answer": "Нет, процедуры различаются."
        },
        {
          "question": "Можно оставаться только по заявлению на гражданство?",
          "answer": "Нет, сохраняйте законное основание пребывания."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "Управление гражданства"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "Закон 5901 в действующей редакции"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/116845",
          "label": "Положение о гражданстве"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Инвестиции и гражданство"
        }
      ]
    },
    "ar": {
      "title": "الإقامة قبل الجنسية التركية: خمس سنوات محتسبة والتجنس",
      "metaDescription": "حساب سنوات الإقامة الخمس والغياب واستبعاد الإقامة السياحية ومستندات التجنس العام.",
      "shortAnswer": "تشترط المادة 11 من القانون 5901 خمس سنوات متواصلة محتسبة للتجنس العام. لا تكفي خمس سنوات من البطاقات إذا لم يكن أساس الإقامة مؤهلاً.",
      "bosphorasHelp": "تنسق Bosphoras البحث عن السكن والزيارات والمواعيد مع المختصين المستقلين. تبت السلطات في الطلبات دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "ما الفترات المحتسبة؟",
          "body": "يجب أن تثبت الإقامة القانونية نية الاستقرار. تستبعد الإرشادات الإدارية الإقامة السياحية، ولا يجعل تغيير النوع لاحقاً تلك السنوات محتسبة تلقائياً. قد يعاد النظر في بعض الفترات الأخرى كالدراسة بعد التحول إلى أساس مقبول. يختلف الحساب عن الإقامة الطويلة.",
          "table": {
            "headers": [
              "الوضع",
              "المدة أو الشرط"
            ],
            "rows": [
              [
                "تأشيرة أو إعفاء",
                "حسب الجواز والجنسية"
              ],
              [
                "قصيرة الأجل",
                "حتى سنتين عموماً"
              ],
              [
                "طويلة الأجل",
                "8 سنوات محتسبة عموماً"
              ],
              [
                "التجنس العام",
                "5 سنوات محتسبة وشروط"
              ],
              [
                "الزواج",
                "3 سنوات زواج قائم وشروط"
              ],
              [
                "عقار مؤهل للجنسية",
                "400 ألف دولار؛ احتفاظ 3 سنوات"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "الغياب خارج البلاد",
          "body": "تسمح المادة 15 من القانون 5901 المعدلة عام 2017 بغياب إجمالي حتى اثني عشر شهراً خلال المدة المطلوبة. لا تزال وثائق إدارية قديمة تذكر ستة أشهر؛ أكد الحساب لدى إدارة الجنسية قبل اختيار موعد الطلب. اجمع سجل الدخول والخروج الرسمي والتصاريح السابقة."
        },
        {
          "id": "visa-detail-3",
          "title": "بقية الشروط القانونية",
          "body": "يلزم بلوغ السن والأهلية ونية الاستقرار ودخل أو مهنة كافية ومعرفة كافية بالتركية وشروط الصحة العامة والسلوك والأمن. لا تمنح المدة وحدها حق التجنس."
        },
        {
          "id": "visa-detail-4",
          "title": "الوثائق واستمرار الإقامة القانونية",
          "body": "جهز نموذج التجنس العام ووثائق الهوية والأحوال المدنية المصدقة والمترجمة حسب الحاجة وإثبات الدخل والشهادة الصحية المطلوبة وسجل الإقامة. قدم لدى إدارة النفوس والجنسية المختصة. لا يمدد طلب الجنسية البقاء تلقائياً."
        },
        {
          "id": "visa-detail-5",
          "title": "المسارات البديلة",
          "body": "قد يتيح الزواج القائم من مواطن تركي منذ ثلاث سنوات طلباً مستقلاً. وقد يتيح الاستثمار المؤهل مساراً استثنائياً دون الانتظار العادي خمس سنوات. الإقامة الطويلة التي تتطلب عادة ثماني سنوات ليست شرطاً سابقاً للتجنس. لا توجد مدة إصدار مضمونة هنا."
        }
      ],
      "faqs": [
        {
          "question": "هل تحتسب خمس سنوات سياحية؟",
          "answer": "لا، تستبعد الإقامة السياحية."
        },
        {
          "question": "هل تلزم الإقامة الطويلة أولاً؟",
          "answer": "لا، الإجراءان مختلفان."
        },
        {
          "question": "هل أبقى بمجرد طلب الجنسية؟",
          "answer": "لا، حافظ على حق بقاء قانوني مناسب."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة"
        },
        {
          "href": "https://www.nvi.gov.tr/turk-vatandasliginin-kazanilmasi",
          "label": "إدارة الجنسية"
        },
        {
          "href": "https://www.lexpera.com.tr/mevzuat/kanunlar/turk-vatandasligi-kanunu-5901",
          "label": "القانون 5901 المدمج"
        },
        {
          "href": "https://mevzuat.adalet.gov.tr/mevzuat/116845",
          "label": "لائحة الجنسية"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "الاستثمار والجنسية"
        }
      ]
    }
  }
};
