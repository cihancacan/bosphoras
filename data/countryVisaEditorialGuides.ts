import type { Locale } from '@/lib/i18n';
import type { EditorialGuide } from './highPotentialEditorialGuides';

export const countryVisaEditorialGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "french-citizens-turkey-visa": {
    "fr": {
      "title": "Français en Turquie en 2026 : visa, carte d’identité et ikamet",
      "metaDescription": "Faut-il un passeport pour la Turquie ? 90 jours sans visa, carte d’identité française, enfants et ikamet : préparez votre séjour ou votre déménagement.",
      "shortAnswer": "Un Français peut visiter la Turquie sans visa jusqu’à 90 jours sur une période de 180 jours, avec une carte nationale d’identité admise ou un passeport valide. Pour vivre au-delà du quota, un statut de résidence adapté est nécessaire.",
      "bosphorasHelp": "Bosphoras peut organiser votre séjour de découverte, la recherche de logement et des rendez-vous avec des professionnels indépendants pour préparer votre installation.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Entrer en Turquie avec une carte d’identité française",
          "body": "France Diplomatie confirme que la carte nationale d’identité française est admise pour le tourisme. Privilégiez un document en excellent état et conservant 150 jours de validité à l’entrée, en particulier si vous utilisez un passeport. Certaines anciennes cartes délivrées aux adultes entre 2004 et 2013 ont bénéficié d’une prorogation de cinq ans reconnue par la Turquie ; un passeport en cours de validité évite les difficultés d’embarquement.",
          "table": {
            "headers": [
              "Situation",
              "Règle"
            ],
            "rows": [
              [
                "Tourisme",
                "90 jours sur 180"
              ],
              [
                "Carte nationale d’identité",
                "Admise si valide"
              ],
              [
                "Passeport",
                "Prévoir 150 jours de validité"
              ],
              [
                "Installation durable",
                "Permis adapté"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Calculer les jours avant de réserver",
          "body": "Additionnez les jours de présence physique, y compris les jours d’arrivée et de départ, dans la fenêtre mobile de 180 jours. Si vous passez 25 jours à Istanbul puis 40 jours à Antalya, il vous reste au plus 25 jours tant que les 65 premiers sont encore dans la fenêtre. Revenir en France pour un week-end ne remet pas le compteur à zéro."
        },
        {
          "id": "country-documentation",
          "title": "Enfants, double nationalité et travail",
          "body": "Chaque enfant a besoin de son propre document. France Diplomatie recommande une autorisation de voyage lorsqu’un mineur voyage sans l’un de ses parents ; lorsque les règles françaises d’autorisation de sortie du territoire s’appliquent, préparez le formulaire et les justificatifs. Les Franco-Turcs doivent également détenir un document français valide pour le retour en France. Une exemption touristique ne permet pas de prendre un emploi en Turquie."
        },
        {
          "id": "country-ikamet",
          "title": "Demander un ikamet avant la fin du séjour",
          "body": "Une résidence de courte durée peut être délivrée pour deux ans au maximum par demande, hors catégories particulières. Le motif doit être admissible. Sur e-ikamet, préparez le formulaire pendant votre séjour légal, puis suivez les indications de convocation : passeport, quatre photos biométriques, justificatifs du motif, de logement, de moyens et assurance selon la situation. Pour un propriétaire, le logement doit être résidentiel et utilisé pour habiter ; un achat ne garantit pas le permis. Vérifiez l’adresse avant de signer. Une fois le dossier complet remis, l’administration dispose en principe de 90 jours pour statuer."
        },
        {
          "id": "country-fees",
          "title": "Budget réel de la demande en 2026",
          "body": "Le rendez-vous officiel n’est pas payant. La carte de séjour coûte 964 TL en 2026 par personne. Le droit de séjour est distinct et dépend du passeport, de la durée et des exemptions ; le portail calcule les droits applicables. Prévoyez aussi l’assurance, les traductions, les éventuels frais notariés et la caution du logement. Ne versez pas de frais à un site imitant le portail officiel.",
          "table": {
            "headers": [
              "Poste",
              "Montant ou règle"
            ],
            "rows": [
              [
                "Rendez-vous officiel",
                "Gratuit"
              ],
              [
                "Carte de séjour 2026",
                "964 TL/personne"
              ],
              [
                "Droits de séjour",
                "Selon nationalité et durée"
              ],
              [
                "Assurance et documents",
                "Selon le dossier"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Préparer un projet d’installation durable",
          "body": "Séjournez à proximité de vos futurs lieux de vie avant de choisir un bail : Istanbul pour les activités professionnelles et les écoles, Antalya pour un séjour côtier à l’année, Bodrum pour un mode de vie maritime avec des variations saisonnières. Pour un dossier familial, préparez les actes de naissance et de mariage, avec apostille ou traduction lorsqu’elle est exigée. Le permis de travail et la résidence fiscale nécessitent une analyse distincte. Avant un départ de France, gardez vos documents d’état civil, preuves de revenus et dossiers scolaires accessibles ; examinez séparément le transfert de votre couverture santé et votre résidence fiscale."
        }
      ],
      "faqs": [
        {
          "question": "Peut-on partir avec une carte d’identité française ?",
          "answer": "Oui, sous réserve de sa validité et des règles d’entrée."
        },
        {
          "question": "Le visa touristique coûte-t-il quelque chose ?",
          "answer": "Non, un Français bénéficiant de l’exemption n’a pas à acheter d’e-Visa."
        },
        {
          "question": "Le dépôt d’une demande garantit-il l'ikamet ?",
          "answer": "Non. Les autorités examinent le motif, l’adresse et les pièces."
        },
        {
          "question": "Un ikamet autorise-t-il automatiquement à travailler ?",
          "answer": "Non. Un droit au travail distinct est nécessaire."
        }
      ],
      "sources": [
        {
          "label": "France Diplomatie : entrée et séjour",
          "href": "https://www.diplomatie.gouv.fr/fr/information-par-pays/turquie/conseils-aux-voyageurs-entree-sejour"
        },
        {
          "label": "Ministère turc des Affaires étrangères",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Règles générales des visas turcs",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "Tarifs officiels 2026",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Questions sur le titre de séjour",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "en": {
      "title": "French citizens in Turkey 2026: visa, national ID & residence",
      "metaDescription": "Travel to Turkey without a visa using a French national ID or passport. Discover the 90/180 rule, family documents and how to apply for an ikamet.",
      "shortAnswer": "French nationals can visit Turkey visa-free for up to 90 days in any 180-day period using an accepted national identity card or valid passport. Longer residence requires appropriate legal status.",
      "bosphorasHelp": "Bosphoras can coordinate an exploratory stay, housing searches and appointments with independent professionals to prepare your relocation.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Can French citizens travel with a national ID?",
          "body": "French consular guidance confirms that national identity cards are accepted for tourism. Use an undamaged document and allow 150 days of validity from entry, particularly when travelling with a passport. Certain cards issued to adults between 2004 and 2013 were extended by five years, an extension Turkey recognises; a current passport helps prevent boarding difficulties.",
          "table": {
            "headers": [
              "Situation",
              "Rule"
            ],
            "rows": [
              [
                "Tourism",
                "90 days in 180"
              ],
              [
                "French national ID",
                "Accepted, if valid"
              ],
              [
                "Passport",
                "Allow 150 days of validity"
              ],
              [
                "Long-term move",
                "Appropriate permit"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Calculate your travel allowance",
          "body": "Count all days physically spent in Turkey, including arrival and departure, within the rolling 180-day window. A 25-day Istanbul visit followed by 40 days in Antalya leaves at most 25 days while the earlier visits remain in the window. A weekend back in France does not reset the allowance."
        },
        {
          "id": "country-documentation",
          "title": "Children, dual citizenship and work",
          "body": "Children need their own travel document. French guidance recommends travel consent when a child is travelling without one parent; follow French exit-authorisation requirements when applicable. French-Turkish dual nationals need a valid French document for returning to France. Visa-free tourism does not provide permission to take up employment."
        },
        {
          "id": "country-ikamet",
          "title": "Applying for an ikamet before your stay ends",
          "body": "A short-term residence permit can normally be issued for up to two years at a time, subject to special categories and a qualifying purpose. Start the official e-ikamet application while lawfully present. Follow the appointment notice and prepare a passport, four biometric photographs, evidence of purpose, accommodation and means, and insurance where required. An owner-occupier must use the residential property as a home; buying does not guarantee approval. Confirm address eligibility before signing a contract. The decision period is normally 90 days from complete submission."
        },
        {
          "id": "country-fees",
          "title": "What a residence application costs in 2026",
          "body": "The official appointment is free. The 2026 residence card charge is TRY 964 per person. Separate residence duties depend on passport nationality, duration and exemptions and are calculated by the portal. Budget for medical insurance, translations, possible notarisation and a housing deposit. Avoid lookalike application websites charging appointment fees.",
          "table": {
            "headers": [
              "Item",
              "Cost or rule"
            ],
            "rows": [
              [
                "Official appointment",
                "Free"
              ],
              [
                "2026 residence card",
                "TRY 964/person"
              ],
              [
                "Residence duties",
                "Nationality and duration dependent"
              ],
              [
                "Insurance and documents",
                "Case dependent"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Planning a longer-term move",
          "body": "Test your everyday surroundings before committing to a lease: Istanbul for business and schools, Antalya for year-round coastal living, and Bodrum for a maritime lifestyle with seasonal variation. Families should prepare birth and marriage records, with apostilles or translations when required. Work authorisation and tax residence are separate from immigration residence. Before leaving France, keep civil records, financial evidence and school files accessible, and assess health cover and tax residence separately."
        }
      ],
      "faqs": [
        {
          "question": "Can I travel with a French identity card?",
          "answer": "Yes, subject to its validity and entry rules."
        },
        {
          "question": "Do French tourists need to buy an e-Visa?",
          "answer": "No, if they qualify for visa exemption."
        },
        {
          "question": "Does applying guarantee an ikamet?",
          "answer": "No. The authorities assess your purpose, address and evidence."
        },
        {
          "question": "Can I work automatically with an ikamet?",
          "answer": "No. Separate work authorisation is necessary."
        }
      ],
      "sources": [
        {
          "label": "French foreign ministry entry guidance",
          "href": "https://www.diplomatie.gouv.fr/fr/information-par-pays/turquie/conseils-aux-voyageurs-entree-sejour"
        },
        {
          "label": "Turkish Ministry of Foreign Affairs",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "General Turkish visa rules",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "Official 2026 fees",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Residence permit questions",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "ru": {
      "title": "Французам в Турцию в 2026 году: без визы, ID-карта и ВНЖ",
      "metaDescription": "Условия въезда с французским паспортом или ID-картой, правило 90/180, документы детей и оформление икамета.",
      "shortAnswer": "Граждане Франции могут приезжать в Турцию без визы на 90 дней в течение 180 дней по действительному паспорту или принимаемой национальной ID-карте. Для длительного проживания нужен соответствующий правовой статус.",
      "bosphorasHelp": "Bosphoras помогает организовать ознакомительную поездку, поиск жилья и консультации независимых специалистов для подготовки к переезду.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Въезд по французской ID-карте",
          "body": "Французские консульские органы подтверждают возможность туристической поездки по национальному удостоверению личности. Используйте документ без повреждений и предусмотрите 150 дней срока действия после въезда, особенно для паспорта. Срок некоторых карточек, выданных взрослым в 2004–2013 годах, продлён на пять лет и признаётся Турцией; действующий загранпаспорт помогает избежать затруднений при посадке.",
          "table": {
            "headers": [
              "Ситуация",
              "Правило"
            ],
            "rows": [
              [
                "Туризм",
                "90 дней из 180"
              ],
              [
                "Французская ID-карта",
                "Допускается при действительности"
              ],
              [
                "Паспорт",
                "Предусмотреть 150 дней действия"
              ],
              [
                "Длительное проживание",
                "Подходящее разрешение"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Как считать дни",
          "body": "В скользящем периоде 180 дней учитываются все дни пребывания, включая въезд и выезд. После 25 дней в Стамбуле и 40 дней в Анталье остаётся не более 25 дней, пока предыдущие поездки входят в расчёт. Короткое возвращение во Францию не обнуляет лимит."
        },
        {
          "id": "country-documentation",
          "title": "Дети, двойное гражданство и работа",
          "body": "Ребёнку нужен собственный документ. Французское консульское руководство рекомендует разрешение на поездку без одного из родителей; при необходимости оформите документы для выезда из Франции. Лицам с французским и турецким гражданством нужен действительный французский документ для возвращения во Францию. Безвизовый туризм не разрешает трудоустройство."
        },
        {
          "id": "country-ikamet",
          "title": "Как подать заявление на ВНЖ до окончания законного срока",
          "body": "Краткосрочный ВНЖ обычно выдаётся не более чем на два года за один раз, за исключением специальных категорий. Необходимо законное основание. Заполните заявление на официальном портале e-ikamet, пока ваше пребывание законно. По требованиям приглашения подготовьте паспорт, четыре биометрические фотографии, документы о цели проживания, жилье, средствах и страховку. Для ВНЖ собственника жильё должно использоваться для проживания; покупка не гарантирует разрешение. Проверьте допустимость адреса до сделки. Срок рассмотрения полного комплекта документов обычно составляет до 90 дней."
        },
        {
          "id": "country-fees",
          "title": "Расходы на оформление в 2026 году",
          "body": "Запись на официальный приём бесплатна. Стоимость карточки ВНЖ в 2026 году составляет 964 турецкие лиры на человека. Отдельный сбор за проживание зависит от гражданства, срока и льгот; расчёт выполняется на портале. Учтите страховку, переводы, нотариальные услуги при необходимости и залог за жильё. Не оплачивайте запись на сторонних сайтах, копирующих официальный портал.",
          "table": {
            "headers": [
              "Расход",
              "Сумма или правило"
            ],
            "rows": [
              [
                "Запись на приём",
                "Бесплатно"
              ],
              [
                "Карточка ВНЖ в 2026 году",
                "964 лиры на человека"
              ],
              [
                "Сбор за проживание",
                "Зависит от гражданства и срока"
              ],
              [
                "Страховка и документы",
                "По обстоятельствам"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Подготовка к длительному переезду",
          "body": "До заключения договора аренды изучите повседневную жизнь в выбранном районе. Стамбул подходит для деловых встреч и выбора школ, Анталья — для круглогодичного проживания у моря, Бодрум — для жизни на побережье с выраженной сезонностью. Для семейного дела подготовьте свидетельства о рождении и браке с апостилем или переводом, если они требуются. Разрешение на работу и налоговое резидентство оформляются и определяются отдельно. Перед отъездом из Франции подготовьте документы ЗАГС, подтверждения доходов и школьные документы; отдельно решите вопросы медицинского страхования и налогового резидентства."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли ехать по французской ID-карте?",
          "answer": "Да, при соблюдении требований к действительности и въезду."
        },
        {
          "question": "Нужна ли французским туристам платная электронная виза?",
          "answer": "Нет, при наличии права на безвизовый въезд."
        },
        {
          "question": "Гарантирует ли заявление получение ВНЖ?",
          "answer": "Нет. Миграционная служба оценивает основание, адрес и документы."
        },
        {
          "question": "Даёт ли ВНЖ право на работу автоматически?",
          "answer": "Нет. Требуется отдельное разрешение на работу."
        }
      ],
      "sources": [
        {
          "label": "МИД Франции: правила въезда",
          "href": "https://www.diplomatie.gouv.fr/fr/information-par-pays/turquie/conseils-aux-voyageurs-entree-sejour"
        },
        {
          "label": "МИД Турции",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Общие визовые правила Турции",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Виды ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Официальный портал e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Официальные сборы на 2026 год",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Вопросы о ВНЖ",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "ar": {
      "title": "الفرنسيون في تركيا 2026: السفر ببطاقة الهوية والإقامة",
      "metaDescription": "هل يحتاج الفرنسي إلى جواز سفر لدخول تركيا؟ تعرف على الإعفاء 90 من 180 يوماً وبطاقة الهوية ووثائق الأطفال والإيكامت.",
      "shortAnswer": "يمكن للمواطن الفرنسي زيارة تركيا دون تأشيرة لمدة 90 يوماً خلال 180 يوماً باستخدام جواز صالح أو بطاقة هوية وطنية مقبولة. يلزم وضع قانوني مناسب للإقامة الأطول.",
      "bosphorasHelp": "تنسق Bosphoras الإقامة الاستكشافية والبحث عن السكن والمواعيد مع مختصين مستقلين استعداداً للانتقال.",
      "sections": [
        {
          "id": "country-entry",
          "title": "دخول تركيا ببطاقة الهوية الفرنسية",
          "body": "تؤكد الإرشادات القنصلية الفرنسية قبول بطاقة الهوية الوطنية للسياحة. استخدم وثيقة سليمة واحرص على صلاحيتها لمدة 150 يوماً عند الدخول، خصوصاً عند استخدام الجواز. اعترفت تركيا بتمديد صلاحية بعض البطاقات الصادرة للبالغين بين 2004 و2013 لمدة خمس سنوات؛ يفضل الجواز الساري لتجنب مشكلات الصعود للطائرة.",
          "table": {
            "headers": [
              "الحالة",
              "القاعدة"
            ],
            "rows": [
              [
                "السياحة",
                "90 يوماً من 180"
              ],
              [
                "بطاقة الهوية الفرنسية",
                "مقبولة إذا كانت صالحة"
              ],
              [
                "الجواز",
                "يفضل توفر صلاحية 150 يوماً"
              ],
              [
                "الإقامة الطويلة",
                "تصريح مناسب"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "حساب مدة الزيارة",
          "body": "احسب كل يوم تقضيه داخل تركيا بما فيه يوم الدخول والخروج ضمن نافذة متحركة من 180 يوماً. بعد زيارة إسطنبول 25 يوماً وأنطاليا 40 يوماً يتبقى 25 يوماً على الأكثر ما دامت الأيام السابقة ضمن النافذة. لا تعيد عطلة قصيرة في فرنسا احتساب المدة من الصفر."
        },
        {
          "id": "country-documentation",
          "title": "الأطفال وازدواج الجنسية والعمل",
          "body": "يحتاج كل طفل إلى وثيقة سفر خاصة به. توصي الإرشادات الفرنسية بإذن سفر عند غياب أحد الوالدين مع تطبيق قواعد الإذن بالخروج من فرنسا عند انطباقها. يحتاج مزدوجو الجنسية الفرنسية والتركية إلى وثيقة فرنسية سارية للعودة إلى فرنسا. لا يمنح الإعفاء السياحي حق العمل."
        },
        {
          "id": "country-ikamet",
          "title": "طلب الإقامة قبل انتهاء مدة البقاء القانوني",
          "body": "يمكن إصدار تصريح الإقامة قصيرة الأجل عادة لمدة تصل إلى سنتين في كل مرة باستثناء الفئات الخاصة، ويجب وجود غرض مؤهل. ابدأ الطلب عبر بوابة الإقامة الرسمية أثناء وجودك القانوني واتبع تعليمات الموعد. جهز الجواز وأربع صور بيومترية وإثبات غرض الإقامة والسكن والموارد والتأمين وفق حالتك. يجب أن يستخدم المالك عقاره السكني للإقامة؛ لا يضمن الشراء الموافقة. تحقق من أهلية العنوان قبل التوقيع. تبلغ مدة اتخاذ القرار عادة 90 يوماً من تقديم الملف المكتمل."
        },
        {
          "id": "country-fees",
          "title": "تكاليف طلب الإقامة في 2026",
          "body": "حجز الموعد الرسمي مجاني. تبلغ رسوم بطاقة الإقامة لعام 2026 مبلغ 964 ليرة تركية لكل شخص. أما رسوم الإقامة المنفصلة فتختلف بحسب الجنسية والمدة والإعفاءات ويحسبها الموقع الرسمي. خصص ميزانية للتأمين والترجمة والتوثيق عند الحاجة وتأمين السكن. تجنب المواقع المقلدة التي تطلب رسوماً لحجز الموعد.",
          "table": {
            "headers": [
              "البند",
              "المبلغ أو القاعدة"
            ],
            "rows": [
              [
                "الموعد الرسمي",
                "مجاني"
              ],
              [
                "بطاقة الإقامة 2026",
                "964 ليرة للشخص"
              ],
              [
                "رسوم الإقامة",
                "بحسب الجنسية والمدة"
              ],
              [
                "التأمين والوثائق",
                "بحسب الملف"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "التخطيط للانتقال على المدى الطويل",
          "body": "تعرف إلى الحي قبل الالتزام بعقد إيجار طويل؛ إسطنبول مناسبة للأعمال والمدارس، وأنطاليا للحياة الساحلية طوال العام، وبودروم لنمط الحياة البحري مع اختلاف الخدمات حسب الموسم. جهز شهادات الميلاد والزواج مع التصديق أو الترجمة عند الطلب. تصريح العمل والإقامة الضريبية يختلفان عن تصريح الإقامة الإداري. قبل مغادرة فرنسا جهز وثائق الحالة المدنية وإثبات الدخل وسجلات الدراسة وادرس التأمين الصحي والإقامة الضريبية بشكل مستقل."
        }
      ],
      "faqs": [
        {
          "question": "هل تكفي بطاقة الهوية الفرنسية؟",
          "answer": "نعم، مع مراعاة شروط الصلاحية والدخول."
        },
        {
          "question": "هل يحتاج الفرنسي إلى شراء تأشيرة إلكترونية؟",
          "answer": "لا إذا كان مشمولاً بالإعفاء السياحي."
        },
        {
          "question": "هل يضمن تقديم الطلب الحصول على الإقامة؟",
          "answer": "لا، تدرس السلطات الغرض والعنوان والوثائق."
        },
        {
          "question": "هل يسمح تصريح الإقامة بالعمل تلقائياً؟",
          "answer": "لا، يلزم الحصول على إذن عمل منفصل."
        }
      ],
      "sources": [
        {
          "label": "وزارة الخارجية الفرنسية: الدخول والإقامة",
          "href": "https://www.diplomatie.gouv.fr/fr/information-par-pays/turquie/conseils-aux-voyageurs-entree-sejour"
        },
        {
          "label": "وزارة الخارجية التركية",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "القواعد العامة للتأشيرات التركية",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "الرسوم الرسمية لعام 2026",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "أسئلة حول تصريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    }
  },
  "kazakh-citizens-turkey-visa": {
    "fr": {
      "title": "Visa Turquie pour les Kazakhstanais 2026 : séjour et ikamet",
      "metaDescription": "90 jours sans visa sur 180 pour les citoyens du Kazakhstan : passeport, durée de séjour, démarches de résidence, famille et frais 2026.",
      "shortAnswer": "Les titulaires d’un passeport kazakh ordinaire bénéficient d’un séjour sans visa de 90 jours sur 180 en Turquie, selon les ministères des deux pays. Un projet de résidence durable exige une démarche distincte.",
      "bosphorasHelp": "Bosphoras peut organiser votre séjour de découverte, la recherche de logement et des rendez-vous avec des professionnels indépendants pour préparer votre installation.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Entrée depuis le Kazakhstan",
          "body": "Le ministère kazakh confirme l’accord d’exemption. Voyagez avec votre passeport international, et non votre simple carte d’identité kazakhe. Prévoyez au moins 150 jours de validité à l’arrivée, idéalement six mois. Gardez les coordonnées du logement, les billets de retour et les preuves de moyens accessibles. Le passeport de chaque enfant doit être contrôlé séparément.",
          "table": {
            "headers": [
              "Situation",
              "Règle"
            ],
            "rows": [
              [
                "Tourisme",
                "90 jours sur 180"
              ],
              [
                "Passeport international",
                "150 jours de validité à prévoir"
              ],
              [
                "e-Visa touristique",
                "Non requis dans le quota"
              ],
              [
                "Emploi ou études",
                "Formalités spécifiques"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Séjours fractionnés et départs",
          "body": "Si vous séjournez 35 jours au printemps puis 40 jours en été, vous avez utilisé 75 jours dans la mesure où les deux visites restent dans la fenêtre de 180 jours. Le solde est de 15 jours. Un retour à Almaty ou Astana ne crée pas un nouveau quota complet."
        },
        {
          "id": "country-documentation",
          "title": "Étudier, travailler ou vivre en famille",
          "body": "Une entrée touristique n’autorise pas l’emploi. Pour un cursus universitaire, préparez l’admission et les démarches de visa étudiant avant le départ. Si un membre de la famille possède une autre nationalité, ses règles d’entrée dépendent de son propre document. Le consulat kazakh à Izmir rappelle la nécessité de respecter les délais de séjour."
        },
        {
          "id": "country-ikamet",
          "title": "Demander un ikamet avant la fin du séjour",
          "body": "Une résidence de courte durée peut être délivrée pour deux ans au maximum par demande, hors catégories particulières. Le motif doit être admissible. Sur e-ikamet, préparez le formulaire pendant votre séjour légal, puis suivez les indications de convocation : passeport, quatre photos biométriques, justificatifs du motif, de logement, de moyens et assurance selon la situation. Pour un propriétaire, le logement doit être résidentiel et utilisé pour habiter ; un achat ne garantit pas le permis. Vérifiez l’adresse avant de signer. Une fois le dossier complet remis, l’administration dispose en principe de 90 jours pour statuer."
        },
        {
          "id": "country-fees",
          "title": "Budget réel de la demande en 2026",
          "body": "Le rendez-vous officiel n’est pas payant. La carte de séjour coûte 964 TL en 2026 par personne. Le droit de séjour est distinct et dépend du passeport, de la durée et des exemptions ; le portail calcule les droits applicables. Prévoyez aussi l’assurance, les traductions, les éventuels frais notariés et la caution du logement. Ne versez pas de frais à un site imitant le portail officiel.",
          "table": {
            "headers": [
              "Poste",
              "Montant ou règle"
            ],
            "rows": [
              [
                "Rendez-vous officiel",
                "Gratuit"
              ],
              [
                "Carte de séjour 2026",
                "964 TL/personne"
              ],
              [
                "Droits de séjour",
                "Selon nationalité et durée"
              ],
              [
                "Assurance et documents",
                "Selon le dossier"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Préparer un projet d’installation durable",
          "body": "Séjournez à proximité de vos futurs lieux de vie avant de choisir un bail : Istanbul pour les activités professionnelles et les écoles, Antalya pour un séjour côtier à l’année, Bodrum pour un mode de vie maritime avec des variations saisonnières. Pour un dossier familial, préparez les actes de naissance et de mariage, avec apostille ou traduction lorsqu’elle est exigée. Le permis de travail et la résidence fiscale nécessitent une analyse distincte. Vérifiez la concordance des noms latins sur les passeports, actes kazakhs et futurs contrats turcs. Une différence de translittération peut retarder le traitement."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je sortir vers le Kazakhstan et revenir immédiatement pour 90 jours ?",
          "answer": "Non ; seuls les jours effectivement libérés de la période de 180 jours redeviennent disponibles."
        },
        {
          "question": "La carte d’identité du Kazakhstan suffit-elle ?",
          "answer": "Utilisez un passeport international valide."
        },
        {
          "question": "Le dépôt d’une demande garantit-il l'ikamet ?",
          "answer": "Non. Les autorités examinent le motif, l’adresse et les pièces."
        },
        {
          "question": "Un ikamet autorise-t-il automatiquement à travailler ?",
          "answer": "Non. Un droit au travail distinct est nécessaire."
        }
      ],
      "sources": [
        {
          "label": "Ministère kazakh des Affaires étrangères",
          "href": "https://www.gov.kz/org/mfa/activities/34741?lang=en"
        },
        {
          "label": "Consulat du Kazakhstan à Izmir",
          "href": "https://www.gov.kz/org/mfa-izmir/press/article/details/226195?lang=ru"
        },
        {
          "label": "Ministère turc des Affaires étrangères",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Règles générales des visas turcs",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "Tarifs officiels 2026",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Questions sur le titre de séjour",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "en": {
      "title": "Turkey visa for Kazakhstan citizens 2026: 90 days & ikamet",
      "metaDescription": "Kazakhstan passport holders: visa-free travel for 90 days in 180, passport validity, family relocation, residence costs and application steps.",
      "shortAnswer": "Kazakh ordinary passport holders can visit Turkey visa-free for 90 days in a 180-day period, according to both governments. Living in Turkey long term requires separate residence arrangements.",
      "bosphorasHelp": "Bosphoras can coordinate an exploratory stay, housing searches and appointments with independent professionals to prepare your relocation.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Documents for travel from Kazakhstan",
          "body": "Kazakhstan’s foreign ministry confirms the visa waiver. Travel with your international passport rather than a domestic identity card. Allow at least 150 days of validity on arrival, ideally six months. Keep your accommodation details, return booking and financial evidence available. Check each child’s passport separately.",
          "table": {
            "headers": [
              "Situation",
              "Rule"
            ],
            "rows": [
              [
                "Tourism",
                "90 days in 180"
              ],
              [
                "International passport",
                "Allow 150 days of validity"
              ],
              [
                "Tourist e-Visa",
                "Not required within allowance"
              ],
              [
                "Work or study",
                "Purpose-specific procedures"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Multiple visits to Turkey",
          "body": "A 35-day spring visit and a 40-day summer visit consume 75 days while both remain in the rolling 180-day window, leaving 15. Returning to Almaty or Astana does not create a new 90-day allowance."
        },
        {
          "id": "country-documentation",
          "title": "Study, employment and family life",
          "body": "Tourist entry does not authorise employment. For university study, arrange admission and the appropriate student visa procedure before departure. A family member with a different citizenship follows the rules for their own passport. Kazakhstan’s consulate in Izmir stresses the importance of complying with authorised stay limits."
        },
        {
          "id": "country-ikamet",
          "title": "Applying for an ikamet before your stay ends",
          "body": "A short-term residence permit can normally be issued for up to two years at a time, subject to special categories and a qualifying purpose. Start the official e-ikamet application while lawfully present. Follow the appointment notice and prepare a passport, four biometric photographs, evidence of purpose, accommodation and means, and insurance where required. An owner-occupier must use the residential property as a home; buying does not guarantee approval. Confirm address eligibility before signing a contract. The decision period is normally 90 days from complete submission."
        },
        {
          "id": "country-fees",
          "title": "What a residence application costs in 2026",
          "body": "The official appointment is free. The 2026 residence card charge is TRY 964 per person. Separate residence duties depend on passport nationality, duration and exemptions and are calculated by the portal. Budget for medical insurance, translations, possible notarisation and a housing deposit. Avoid lookalike application websites charging appointment fees.",
          "table": {
            "headers": [
              "Item",
              "Cost or rule"
            ],
            "rows": [
              [
                "Official appointment",
                "Free"
              ],
              [
                "2026 residence card",
                "TRY 964/person"
              ],
              [
                "Residence duties",
                "Nationality and duration dependent"
              ],
              [
                "Insurance and documents",
                "Case dependent"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Planning a longer-term move",
          "body": "Test your everyday surroundings before committing to a lease: Istanbul for business and schools, Antalya for year-round coastal living, and Bodrum for a maritime lifestyle with seasonal variation. Families should prepare birth and marriage records, with apostilles or translations when required. Work authorisation and tax residence are separate from immigration residence. Check that Latin-alphabet names on passports, Kazakh civil records and Turkish contracts match; inconsistent transliteration can delay paperwork."
        }
      ],
      "faqs": [
        {
          "question": "Can I return to Kazakhstan and immediately get another 90 days?",
          "answer": "No. Only days falling outside the rolling window become available again."
        },
        {
          "question": "Can I use my Kazakhstan domestic ID?",
          "answer": "Use a valid international passport instead."
        },
        {
          "question": "Does applying guarantee an ikamet?",
          "answer": "No. The authorities assess your purpose, address and evidence."
        },
        {
          "question": "Can I work automatically with an ikamet?",
          "answer": "No. Separate work authorisation is necessary."
        }
      ],
      "sources": [
        {
          "label": "Kazakhstan Ministry of Foreign Affairs",
          "href": "https://www.gov.kz/org/mfa/activities/34741?lang=en"
        },
        {
          "label": "Kazakhstan consulate in Izmir",
          "href": "https://www.gov.kz/org/mfa-izmir/press/article/details/226195?lang=ru"
        },
        {
          "label": "Turkish Ministry of Foreign Affairs",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "General Turkish visa rules",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "Official 2026 fees",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Residence permit questions",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "ru": {
      "title": "Гражданам Казахстана в Турцию в 2026 году: 90 дней без визы и ВНЖ",
      "metaDescription": "Правило 90/180 для граждан Казахстана, срок паспорта, документы семьи, оформление ВНЖ и стоимость икамета в Турции.",
      "shortAnswer": "Граждане Казахстана с обычными загранпаспортами могут находиться в Турции без визы до 90 дней в течение 180 дней. Для длительного проживания необходимо оформлять соответствующий статус.",
      "bosphorasHelp": "Bosphoras помогает организовать ознакомительную поездку, поиск жилья и консультации независимых специалистов для подготовки к переезду.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Въезд из Казахстана",
          "body": "МИД Казахстана подтверждает безвизовый режим. Для поездки используйте заграничный паспорт, а не удостоверение личности. Предусмотрите не менее 150 дней действия паспорта на дату въезда, лучше шесть месяцев. Держите под рукой обратный билет, адрес проживания и подтверждение средств. Проверьте документы каждого ребёнка.",
          "table": {
            "headers": [
              "Ситуация",
              "Правило"
            ],
            "rows": [
              [
                "Туризм",
                "90 дней из 180"
              ],
              [
                "Загранпаспорт",
                "Предусмотреть 150 дней действия"
              ],
              [
                "Электронная туристическая виза",
                "Не нужна в пределах лимита"
              ],
              [
                "Работа и учёба",
                "Отдельные процедуры"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Сколько дней осталось",
          "body": "Если весной вы прожили в Турции 35 дней, а летом 40, то при нахождении обеих поездок в 180-дневном периоде использовано 75 дней и осталось 15. Возвращение в Алматы или Астану не обнуляет лимит."
        },
        {
          "id": "country-documentation",
          "title": "Учёба, работа и переезд семьи",
          "body": "Туристический въезд не даёт права работать. Для учёбы заранее оформите зачисление и соответствующую визу. Если член семьи имеет другое гражданство, условия определяются по его документу. Консульство Казахстана в Измире напоминает о необходимости соблюдать разрешённый срок."
        },
        {
          "id": "country-ikamet",
          "title": "Как подать заявление на ВНЖ до окончания законного срока",
          "body": "Краткосрочный ВНЖ обычно выдаётся не более чем на два года за один раз, за исключением специальных категорий. Необходимо законное основание. Заполните заявление на официальном портале e-ikamet, пока ваше пребывание законно. По требованиям приглашения подготовьте паспорт, четыре биометрические фотографии, документы о цели проживания, жилье, средствах и страховку. Для ВНЖ собственника жильё должно использоваться для проживания; покупка не гарантирует разрешение. Проверьте допустимость адреса до сделки. Срок рассмотрения полного комплекта документов обычно составляет до 90 дней."
        },
        {
          "id": "country-fees",
          "title": "Расходы на оформление в 2026 году",
          "body": "Запись на официальный приём бесплатна. Стоимость карточки ВНЖ в 2026 году составляет 964 турецкие лиры на человека. Отдельный сбор за проживание зависит от гражданства, срока и льгот; расчёт выполняется на портале. Учтите страховку, переводы, нотариальные услуги при необходимости и залог за жильё. Не оплачивайте запись на сторонних сайтах, копирующих официальный портал.",
          "table": {
            "headers": [
              "Расход",
              "Сумма или правило"
            ],
            "rows": [
              [
                "Запись на приём",
                "Бесплатно"
              ],
              [
                "Карточка ВНЖ в 2026 году",
                "964 лиры на человека"
              ],
              [
                "Сбор за проживание",
                "Зависит от гражданства и срока"
              ],
              [
                "Страховка и документы",
                "По обстоятельствам"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Подготовка к длительному переезду",
          "body": "До заключения договора аренды изучите повседневную жизнь в выбранном районе. Стамбул подходит для деловых встреч и выбора школ, Анталья — для круглогодичного проживания у моря, Бодрум — для жизни на побережье с выраженной сезонностью. Для семейного дела подготовьте свидетельства о рождении и браке с апостилем или переводом, если они требуются. Разрешение на работу и налоговое резидентство оформляются и определяются отдельно. Сверьте написание имён латиницей в паспортах и казахстанских документах ЗАГС с турецкими договорами, чтобы не возникли расхождения при оформлении."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли выехать в Казахстан и сразу получить новые 90 дней?",
          "answer": "Нет, дни освобождаются по мере выхода из скользящего периода."
        },
        {
          "question": "Достаточно ли удостоверения личности Казахстана?",
          "answer": "Используйте действующий загранпаспорт."
        },
        {
          "question": "Гарантирует ли заявление получение ВНЖ?",
          "answer": "Нет. Миграционная служба оценивает основание, адрес и документы."
        },
        {
          "question": "Даёт ли ВНЖ право на работу автоматически?",
          "answer": "Нет. Требуется отдельное разрешение на работу."
        }
      ],
      "sources": [
        {
          "label": "МИД Казахстана",
          "href": "https://www.gov.kz/org/mfa/activities/34741?lang=en"
        },
        {
          "label": "Консульство Казахстана в Измире",
          "href": "https://www.gov.kz/org/mfa-izmir/press/article/details/226195?lang=ru"
        },
        {
          "label": "МИД Турции",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Общие визовые правила Турции",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Виды ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Официальный портал e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Официальные сборы на 2026 год",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Вопросы о ВНЖ",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة تركيا لمواطني كازاخستان 2026: 90 يوماً والإقامة",
      "metaDescription": "دليل الكازاخستانيين لدخول تركيا دون تأشيرة 90 من 180 يوماً وصلاحية الجواز وإقامة الأسرة ورسوم الإيكامت.",
      "shortAnswer": "يتمتع حاملو جوازات كازاخستان العادية بإعفاء من تأشيرة تركيا لمدة 90 يوماً خلال 180 يوماً، أما الاستقرار الطويل فيتطلب تصريحاً مناسباً.",
      "bosphorasHelp": "تنسق Bosphoras الإقامة الاستكشافية والبحث عن السكن والمواعيد مع مختصين مستقلين استعداداً للانتقال.",
      "sections": [
        {
          "id": "country-entry",
          "title": "وثائق السفر من كازاخستان",
          "body": "تؤكد وزارة خارجية كازاخستان اتفاق الإعفاء. استخدم جواز سفرك الدولي بدلاً من بطاقة الهوية المحلية. احرص على صلاحية لا تقل عن 150 يوماً عند الوصول ويفضل ستة أشهر. احتفظ بعنوان السكن وحجز العودة وإثبات الموارد. افحص جواز كل طفل على حدة.",
          "table": {
            "headers": [
              "الحالة",
              "القاعدة"
            ],
            "rows": [
              [
                "السياحة",
                "90 يوماً من 180"
              ],
              [
                "الجواز الدولي",
                "يفضل توفر صلاحية 150 يوماً"
              ],
              [
                "التأشيرة السياحية الإلكترونية",
                "غير مطلوبة ضمن المدة"
              ],
              [
                "العمل والدراسة",
                "إجراءات خاصة"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "زيارات متعددة خلال ستة أشهر",
          "body": "إذا قضيت 35 يوماً في الربيع و40 يوماً في الصيف فقد استخدمت 75 يوماً طالما بقيت الزيارتان ضمن نافذة 180 يوماً، ويتبقى 15 يوماً. لا تعيد العودة إلى ألماتي أو أستانا الرصيد إلى 90 يوماً."
        },
        {
          "id": "country-documentation",
          "title": "الدراسة والعمل والحياة العائلية",
          "body": "لا يسمح الدخول السياحي بالتوظيف. للدراسة الجامعية جهز القبول وإجراءات تأشيرة الدراسة قبل المغادرة. يخضع أفراد الأسرة من جنسيات مختلفة لقواعد جوازاتهم الخاصة. وتؤكد قنصلية كازاخستان في إزمير أهمية احترام مدة البقاء القانونية."
        },
        {
          "id": "country-ikamet",
          "title": "طلب الإقامة قبل انتهاء مدة البقاء القانوني",
          "body": "يمكن إصدار تصريح الإقامة قصيرة الأجل عادة لمدة تصل إلى سنتين في كل مرة باستثناء الفئات الخاصة، ويجب وجود غرض مؤهل. ابدأ الطلب عبر بوابة الإقامة الرسمية أثناء وجودك القانوني واتبع تعليمات الموعد. جهز الجواز وأربع صور بيومترية وإثبات غرض الإقامة والسكن والموارد والتأمين وفق حالتك. يجب أن يستخدم المالك عقاره السكني للإقامة؛ لا يضمن الشراء الموافقة. تحقق من أهلية العنوان قبل التوقيع. تبلغ مدة اتخاذ القرار عادة 90 يوماً من تقديم الملف المكتمل."
        },
        {
          "id": "country-fees",
          "title": "تكاليف طلب الإقامة في 2026",
          "body": "حجز الموعد الرسمي مجاني. تبلغ رسوم بطاقة الإقامة لعام 2026 مبلغ 964 ليرة تركية لكل شخص. أما رسوم الإقامة المنفصلة فتختلف بحسب الجنسية والمدة والإعفاءات ويحسبها الموقع الرسمي. خصص ميزانية للتأمين والترجمة والتوثيق عند الحاجة وتأمين السكن. تجنب المواقع المقلدة التي تطلب رسوماً لحجز الموعد.",
          "table": {
            "headers": [
              "البند",
              "المبلغ أو القاعدة"
            ],
            "rows": [
              [
                "الموعد الرسمي",
                "مجاني"
              ],
              [
                "بطاقة الإقامة 2026",
                "964 ليرة للشخص"
              ],
              [
                "رسوم الإقامة",
                "بحسب الجنسية والمدة"
              ],
              [
                "التأمين والوثائق",
                "بحسب الملف"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "التخطيط للانتقال على المدى الطويل",
          "body": "تعرف إلى الحي قبل الالتزام بعقد إيجار طويل؛ إسطنبول مناسبة للأعمال والمدارس، وأنطاليا للحياة الساحلية طوال العام، وبودروم لنمط الحياة البحري مع اختلاف الخدمات حسب الموسم. جهز شهادات الميلاد والزواج مع التصديق أو الترجمة عند الطلب. تصريح العمل والإقامة الضريبية يختلفان عن تصريح الإقامة الإداري. راجع تطابق كتابة الأسماء بالحروف اللاتينية في الجوازات والوثائق الكازاخستانية والعقود التركية لتجنب تأخير المعاملات."
        }
      ],
      "faqs": [
        {
          "question": "هل تعيد العودة إلى كازاخستان الرصيد إلى 90 يوماً؟",
          "answer": "لا، تستعاد الأيام عند خروجها من نافذة 180 يوماً."
        },
        {
          "question": "هل تكفي بطاقة الهوية الكازاخستانية؟",
          "answer": "استخدم جواز سفر دولياً سارياً."
        },
        {
          "question": "هل يضمن تقديم الطلب الحصول على الإقامة؟",
          "answer": "لا، تدرس السلطات الغرض والعنوان والوثائق."
        },
        {
          "question": "هل يسمح تصريح الإقامة بالعمل تلقائياً؟",
          "answer": "لا، يلزم الحصول على إذن عمل منفصل."
        }
      ],
      "sources": [
        {
          "label": "وزارة خارجية كازاخستان",
          "href": "https://www.gov.kz/org/mfa/activities/34741?lang=en"
        },
        {
          "label": "قنصلية كازاخستان في إزمير",
          "href": "https://www.gov.kz/org/mfa-izmir/press/article/details/226195?lang=ru"
        },
        {
          "label": "وزارة الخارجية التركية",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "القواعد العامة للتأشيرات التركية",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "الرسوم الرسمية لعام 2026",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "أسئلة حول تصريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    }
  },
  "russian-citizens-turkey-visa": {
    "fr": {
      "title": "Visa Turquie pour les Russes 2026 : 60 jours et règle 90/180",
      "metaDescription": "Russie–Turquie : 60 jours sans visa par séjour, 90 jours sur 180 au total, validité du passeport et démarches d’ikamet avant expiration.",
      "shortAnswer": "Le passeport russe ordinaire permet des voyages touristiques et d’affaires sans visa de 60 jours au maximum par séjour, sans dépasser 90 jours cumulés sur 180. Ce régime n’autorise pas l’emploi.",
      "bosphorasHelp": "Bosphoras peut organiser votre séjour de découverte, la recherche de logement et des rendez-vous avec des professionnels indépendants pour préparer votre installation.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Deux limites à respecter simultanément",
          "body": "Le ministère turc indique 60 jours pour chaque séjour des titulaires de passeports russes ordinaires. Le guide consulaire russe précise le cumul maximal de 90 jours sur 180. Vous ne pouvez donc pas transformer un séjour de 60 jours en un séjour continu de 90 jours sans autorisation adaptée.",
          "table": {
            "headers": [
              "Situation",
              "Règle"
            ],
            "rows": [
              [
                "Maximum par séjour",
                "60 jours"
              ],
              [
                "Cumul",
                "90 jours sur 180"
              ],
              [
                "Passeport international",
                "120 jours minimum pour le quota de 60 ; 6 mois recommandés"
              ],
              [
                "Séjour continu de 75 jours",
                "Visa ou statut adapté"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Exemples pour éviter un dépassement",
          "body": "Après 60 jours à Antalya puis un départ, il reste au plus 30 jours si le premier séjour se trouve toujours dans la période de référence. Après deux séjours de 45 jours, aucun jour ne reste dans cette même fenêtre. Si vous devez résider 75 jours d’affilée, préparez un visa adapté avant le départ ou, si vous êtes déjà en Turquie et remplissez les conditions, déposez une demande de résidence avant l’expiration du droit de séjour."
        },
        {
          "id": "country-documentation",
          "title": "Passeport russe et motifs de visite",
          "body": "Utilisez un passeport international russe valable au moins 120 jours à l’arrivée pour un séjour autorisé de 60 jours, conformément à la règle des 60 jours de validité supplémentaires ; six mois sont recommandés. Le passeport intérieur russe n’est pas le document touristique usuel. Une visite commerciale ne permet pas d’occuper un emploi : travail et études nécessitent les démarches correspondantes."
        },
        {
          "id": "country-ikamet",
          "title": "Demander un ikamet avant la fin du séjour",
          "body": "Une résidence de courte durée peut être délivrée pour deux ans au maximum par demande, hors catégories particulières. Le motif doit être admissible. Sur e-ikamet, préparez le formulaire pendant votre séjour légal, puis suivez les indications de convocation : passeport, quatre photos biométriques, justificatifs du motif, de logement, de moyens et assurance selon la situation. Pour un propriétaire, le logement doit être résidentiel et utilisé pour habiter ; un achat ne garantit pas le permis. Vérifiez l’adresse avant de signer. Une fois le dossier complet remis, l’administration dispose en principe de 90 jours pour statuer."
        },
        {
          "id": "country-fees",
          "title": "Budget réel de la demande en 2026",
          "body": "Le rendez-vous officiel n’est pas payant. La carte de séjour coûte 964 TL en 2026 par personne. Le droit de séjour est distinct et dépend du passeport, de la durée et des exemptions ; le portail calcule les droits applicables. Prévoyez aussi l’assurance, les traductions, les éventuels frais notariés et la caution du logement. Ne versez pas de frais à un site imitant le portail officiel.",
          "table": {
            "headers": [
              "Poste",
              "Montant ou règle"
            ],
            "rows": [
              [
                "Rendez-vous officiel",
                "Gratuit"
              ],
              [
                "Carte de séjour 2026",
                "964 TL/personne"
              ],
              [
                "Droits de séjour",
                "Selon nationalité et durée"
              ],
              [
                "Assurance et documents",
                "Selon le dossier"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Préparer un projet d’installation durable",
          "body": "Séjournez à proximité de vos futurs lieux de vie avant de choisir un bail : Istanbul pour les activités professionnelles et les écoles, Antalya pour un séjour côtier à l’année, Bodrum pour un mode de vie maritime avec des variations saisonnières. Pour un dossier familial, préparez les actes de naissance et de mariage, avec apostille ou traduction lorsqu’elle est exigée. Le permis de travail et la résidence fiscale nécessitent une analyse distincte. Pour votre budget, préparez un moyen de paiement conforme et une solution de secours : les cartes ou virements internationaux peuvent rencontrer des restrictions. Ne présumez pas qu’une carte bancaire délivrée en Russie fonctionnera en Turquie."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je rester 90 jours sans sortir ?",
          "answer": "Pas avec la seule exemption de 60 jours par séjour du passeport russe ordinaire."
        },
        {
          "question": "Après 60 jours, puis-je revenir pour 60 jours supplémentaires ?",
          "answer": "Non si les 60 premiers jours restent dans la fenêtre : le cumul maximum est 90."
        },
        {
          "question": "Le dépôt d’une demande garantit-il l'ikamet ?",
          "answer": "Non. Les autorités examinent le motif, l’adresse et les pièces."
        },
        {
          "question": "Un ikamet autorise-t-il automatiquement à travailler ?",
          "answer": "Non. Un droit au travail distinct est nécessaire."
        }
      ],
      "sources": [
        {
          "label": "Informations consulaires en russe",
          "href": "https://www.mfa.gov.tr/consular-info.ru.mfa"
        },
        {
          "label": "Guide du consulat russe à Istanbul",
          "href": "https://istanbul.mid.ru/upload/iblock/a18/a18338616dcbf623e3ffd4e04d10c9fe.pdf"
        },
        {
          "label": "Ministère turc des Affaires étrangères",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Règles générales des visas turcs",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "Tarifs officiels 2026",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Questions sur le titre de séjour",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "en": {
      "title": "Turkey visa for Russian citizens 2026: 60 days & 90/180 rule",
      "metaDescription": "Russian passports: 60 days per visa-free visit, 90 days in 180 overall, passport validity and residence permit options for longer stays.",
      "shortAnswer": "Ordinary Russian passport holders may make visa-free tourist and business visits of up to 60 days at a time, subject to a total of 90 days in any 180-day period. This does not authorise employment.",
      "bosphorasHelp": "Bosphoras can coordinate an exploratory stay, housing searches and appointments with independent professionals to prepare your relocation.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Two different limits",
          "body": "The Turkish foreign ministry gives ordinary Russian passport holders a 60-day visit allowance. Russian consular guidance confirms a cumulative 90-day cap in 180 days. A continuous 90-day stay is therefore not available under the ordinary 60-day exemption alone.",
          "table": {
            "headers": [
              "Situation",
              "Rule"
            ],
            "rows": [
              [
                "Maximum per visit",
                "60 days"
              ],
              [
                "Cumulative allowance",
                "90 days in 180"
              ],
              [
                "International passport",
                "120 days for full 60-day allowance; 6 months recommended"
              ],
              [
                "75-day continuous stay",
                "Appropriate visa or residence status"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Worked examples",
          "body": "After spending 60 days in Antalya and leaving Turkey, at most 30 days remain if that first visit is still inside the window. Two 45-day visits use the entire 90-day quota. If you need 75 consecutive days, obtain an appropriate visa before departure or, if already lawfully in Turkey and eligible, apply for residence before your permitted stay expires."
        },
        {
          "id": "country-documentation",
          "title": "Russian passport and purpose",
          "body": "Use a Russian international passport with at least 120 days of validity on arrival for the full 60-day exemption under the additional-60-day rule; six months is recommended. A domestic Russian passport is not the standard travel document for this trip. Business visits do not confer employment rights; study and employment require the corresponding procedures."
        },
        {
          "id": "country-ikamet",
          "title": "Applying for an ikamet before your stay ends",
          "body": "A short-term residence permit can normally be issued for up to two years at a time, subject to special categories and a qualifying purpose. Start the official e-ikamet application while lawfully present. Follow the appointment notice and prepare a passport, four biometric photographs, evidence of purpose, accommodation and means, and insurance where required. An owner-occupier must use the residential property as a home; buying does not guarantee approval. Confirm address eligibility before signing a contract. The decision period is normally 90 days from complete submission."
        },
        {
          "id": "country-fees",
          "title": "What a residence application costs in 2026",
          "body": "The official appointment is free. The 2026 residence card charge is TRY 964 per person. Separate residence duties depend on passport nationality, duration and exemptions and are calculated by the portal. Budget for medical insurance, translations, possible notarisation and a housing deposit. Avoid lookalike application websites charging appointment fees.",
          "table": {
            "headers": [
              "Item",
              "Cost or rule"
            ],
            "rows": [
              [
                "Official appointment",
                "Free"
              ],
              [
                "2026 residence card",
                "TRY 964/person"
              ],
              [
                "Residence duties",
                "Nationality and duration dependent"
              ],
              [
                "Insurance and documents",
                "Case dependent"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Planning a longer-term move",
          "body": "Test your everyday surroundings before committing to a lease: Istanbul for business and schools, Antalya for year-round coastal living, and Bodrum for a maritime lifestyle with seasonal variation. Families should prepare birth and marriage records, with apostilles or translations when required. Work authorisation and tax residence are separate from immigration residence. Arrange lawful payment methods and a backup before travel; international cards and transfers may face restrictions. Do not assume a Russian-issued card will work in Turkey."
        }
      ],
      "faqs": [
        {
          "question": "Can I remain for 90 consecutive days without leaving?",
          "answer": "Not solely under the ordinary Russian 60-day visa exemption."
        },
        {
          "question": "Can I return for another 60 days after a 60-day visit?",
          "answer": "No if those first days remain in the window; the total cap is 90."
        },
        {
          "question": "Does applying guarantee an ikamet?",
          "answer": "No. The authorities assess your purpose, address and evidence."
        },
        {
          "question": "Can I work automatically with an ikamet?",
          "answer": "No. Separate work authorisation is necessary."
        }
      ],
      "sources": [
        {
          "label": "Turkish consular information in Russian",
          "href": "https://www.mfa.gov.tr/consular-info.ru.mfa"
        },
        {
          "label": "Russian consular guide in Istanbul",
          "href": "https://istanbul.mid.ru/upload/iblock/a18/a18338616dcbf623e3ffd4e04d10c9fe.pdf"
        },
        {
          "label": "Turkish Ministry of Foreign Affairs",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "General Turkish visa rules",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "Official 2026 fees",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Residence permit questions",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "ru": {
      "title": "Россиянам в Турцию в 2026 году: 60 дней без визы, 90/180 и ВНЖ",
      "metaDescription": "Сколько можно жить в Турции по российскому загранпаспорту: 60 дней за въезд, 90 за 180, срок действия паспорта и оформление ВНЖ.",
      "shortAnswer": "По обычному российскому загранпаспорту разрешены безвизовые туристические и деловые поездки не дольше 60 дней за один визит и суммарно не более 90 дней в каждом 180-дневном периоде. Работа по этому режиму не допускается.",
      "bosphorasHelp": "Bosphoras помогает организовать ознакомительную поездку, поиск жилья и консультации независимых специалистов для подготовки к переезду.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Два ограничения одновременно",
          "body": "МИД Турции указывает 60 дней без визы для обычного российского загранпаспорта. Консульский справочник России уточняет общий предел — 90 дней за 180. Таким образом, нельзя непрерывно находиться в стране 90 дней лишь на основании стандартного безвизового режима.",
          "table": {
            "headers": [
              "Ситуация",
              "Правило"
            ],
            "rows": [
              [
                "Один визит",
                "До 60 дней"
              ],
              [
                "Общий срок",
                "90 дней из 180"
              ],
              [
                "Загранпаспорт",
                "Минимум 120 дней для полного срока; рекомендуется 6 месяцев"
              ],
              [
                "75 дней подряд",
                "Подходящая виза или ВНЖ"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Примеры расчёта",
          "body": "После 60 дней в Анталье и выезда остаётся не более 30 дней, пока предыдущий визит входит в окно расчёта. Две поездки по 45 дней исчерпывают весь лимит. Для непрерывного пребывания 75 дней заранее оформите соответствующую визу, либо, если уже законно находитесь в Турции и имеете основание, подайте заявление на ВНЖ до окончания разрешённого срока."
        },
        {
          "id": "country-documentation",
          "title": "Загранпаспорт и цель поездки",
          "body": "Для полного 60-дневного срока действия загранпаспорта должно хватать минимум на 120 дней с даты въезда; рекомендуется шесть месяцев. Внутренний российский паспорт не является обычным документом для такой поездки. Деловой визит не означает право трудоустройства; для работы или обучения нужны соответствующие процедуры."
        },
        {
          "id": "country-ikamet",
          "title": "Как подать заявление на ВНЖ до окончания законного срока",
          "body": "Краткосрочный ВНЖ обычно выдаётся не более чем на два года за один раз, за исключением специальных категорий. Необходимо законное основание. Заполните заявление на официальном портале e-ikamet, пока ваше пребывание законно. По требованиям приглашения подготовьте паспорт, четыре биометрические фотографии, документы о цели проживания, жилье, средствах и страховку. Для ВНЖ собственника жильё должно использоваться для проживания; покупка не гарантирует разрешение. Проверьте допустимость адреса до сделки. Срок рассмотрения полного комплекта документов обычно составляет до 90 дней."
        },
        {
          "id": "country-fees",
          "title": "Расходы на оформление в 2026 году",
          "body": "Запись на официальный приём бесплатна. Стоимость карточки ВНЖ в 2026 году составляет 964 турецкие лиры на человека. Отдельный сбор за проживание зависит от гражданства, срока и льгот; расчёт выполняется на портале. Учтите страховку, переводы, нотариальные услуги при необходимости и залог за жильё. Не оплачивайте запись на сторонних сайтах, копирующих официальный портал.",
          "table": {
            "headers": [
              "Расход",
              "Сумма или правило"
            ],
            "rows": [
              [
                "Запись на приём",
                "Бесплатно"
              ],
              [
                "Карточка ВНЖ в 2026 году",
                "964 лиры на человека"
              ],
              [
                "Сбор за проживание",
                "Зависит от гражданства и срока"
              ],
              [
                "Страховка и документы",
                "По обстоятельствам"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Подготовка к длительному переезду",
          "body": "До заключения договора аренды изучите повседневную жизнь в выбранном районе. Стамбул подходит для деловых встреч и выбора школ, Анталья — для круглогодичного проживания у моря, Бодрум — для жизни на побережье с выраженной сезонностью. Для семейного дела подготовьте свидетельства о рождении и браке с апостилем или переводом, если они требуются. Разрешение на работу и налоговое резидентство оформляются и определяются отдельно. Заранее подготовьте законные способы оплаты и резервный вариант: международные карты и переводы могут быть ограничены. Не рассчитывайте на гарантированную работу карты российского банка."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли находиться 90 дней подряд без визы?",
          "answer": "Нет, если основанием является только обычный 60-дневный безвизовый режим."
        },
        {
          "question": "Можно ли после 60 дней въехать ещё на 60?",
          "answer": "Нет, пока первые 60 дней входят в 180-дневный период."
        },
        {
          "question": "Гарантирует ли заявление получение ВНЖ?",
          "answer": "Нет. Миграционная служба оценивает основание, адрес и документы."
        },
        {
          "question": "Даёт ли ВНЖ право на работу автоматически?",
          "answer": "Нет. Требуется отдельное разрешение на работу."
        }
      ],
      "sources": [
        {
          "label": "Консульская информация МИД Турции",
          "href": "https://www.mfa.gov.tr/consular-info.ru.mfa"
        },
        {
          "label": "Справочник консульства России в Стамбуле",
          "href": "https://istanbul.mid.ru/upload/iblock/a18/a18338616dcbf623e3ffd4e04d10c9fe.pdf"
        },
        {
          "label": "МИД Турции",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Общие визовые правила Турции",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Виды ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Официальный портал e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Официальные сборы на 2026 год",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Вопросы о ВНЖ",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة تركيا للروس 2026: 60 يوماً وقاعدة 90 من 180",
      "metaDescription": "دليل حاملي الجواز الروسي: مدة 60 يوماً لكل زيارة و90 من 180 يوماً، صلاحية الجواز وإجراءات الإقامة الأطول.",
      "shortAnswer": "يجوز لحامل جواز السفر الروسي العادي دخول تركيا للسياحة والأعمال دون تأشيرة لمدة تصل إلى 60 يوماً في الزيارة الواحدة، وبحد إجمالي 90 يوماً خلال 180 يوماً. لا يشمل ذلك العمل.",
      "bosphorasHelp": "تنسق Bosphoras الإقامة الاستكشافية والبحث عن السكن والمواعيد مع مختصين مستقلين استعداداً للانتقال.",
      "sections": [
        {
          "id": "country-entry",
          "title": "حدان مختلفان للمدة",
          "body": "تحدد الخارجية التركية مدة 60 يوماً لكل زيارة لحامل الجواز الروسي العادي. ويوضح الدليل القنصلي الروسي أن المجموع لا يتجاوز 90 يوماً خلال 180 يوماً. لذلك لا يسمح الإعفاء العادي وحده بالإقامة 90 يوماً متتالية.",
          "table": {
            "headers": [
              "الحالة",
              "القاعدة"
            ],
            "rows": [
              [
                "الزيارة الواحدة",
                "60 يوماً"
              ],
              [
                "الحد الإجمالي",
                "90 يوماً من 180"
              ],
              [
                "الجواز الدولي",
                "120 يوماً للمدة الكاملة؛ يفضل 6 أشهر"
              ],
              [
                "75 يوماً متتالية",
                "تأشيرة أو إقامة مناسبة"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "أمثلة عملية للحساب",
          "body": "بعد البقاء 60 يوماً في أنطاليا ثم المغادرة، يتبقى 30 يوماً على الأكثر إذا ظلت الزيارة الأولى داخل النافذة. وتستهلك زيارتان مدة كل منهما 45 يوماً كامل الرصيد. للبقاء 75 يوماً متتالية جهز تأشيرة مناسبة قبل السفر، أو تقدم بطلب إقامة قبل انتهاء المدة القانونية إذا كنت داخل تركيا ومستوفياً للشروط."
        },
        {
          "id": "country-documentation",
          "title": "الجواز الروسي وغرض السفر",
          "body": "استخدم جوازاً دولياً صالحاً لمدة 120 يوماً على الأقل عند الوصول للاستفادة من مدة الإعفاء الكاملة البالغة 60 يوماً، ويفضل ستة أشهر. ليس الجواز الداخلي الروسي وثيقة السفر المعتادة لهذه الرحلة. لا تمنح زيارة الأعمال حق التوظيف؛ يلزم اتباع إجراءات الدراسة أو العمل المناسبة."
        },
        {
          "id": "country-ikamet",
          "title": "طلب الإقامة قبل انتهاء مدة البقاء القانوني",
          "body": "يمكن إصدار تصريح الإقامة قصيرة الأجل عادة لمدة تصل إلى سنتين في كل مرة باستثناء الفئات الخاصة، ويجب وجود غرض مؤهل. ابدأ الطلب عبر بوابة الإقامة الرسمية أثناء وجودك القانوني واتبع تعليمات الموعد. جهز الجواز وأربع صور بيومترية وإثبات غرض الإقامة والسكن والموارد والتأمين وفق حالتك. يجب أن يستخدم المالك عقاره السكني للإقامة؛ لا يضمن الشراء الموافقة. تحقق من أهلية العنوان قبل التوقيع. تبلغ مدة اتخاذ القرار عادة 90 يوماً من تقديم الملف المكتمل."
        },
        {
          "id": "country-fees",
          "title": "تكاليف طلب الإقامة في 2026",
          "body": "حجز الموعد الرسمي مجاني. تبلغ رسوم بطاقة الإقامة لعام 2026 مبلغ 964 ليرة تركية لكل شخص. أما رسوم الإقامة المنفصلة فتختلف بحسب الجنسية والمدة والإعفاءات ويحسبها الموقع الرسمي. خصص ميزانية للتأمين والترجمة والتوثيق عند الحاجة وتأمين السكن. تجنب المواقع المقلدة التي تطلب رسوماً لحجز الموعد.",
          "table": {
            "headers": [
              "البند",
              "المبلغ أو القاعدة"
            ],
            "rows": [
              [
                "الموعد الرسمي",
                "مجاني"
              ],
              [
                "بطاقة الإقامة 2026",
                "964 ليرة للشخص"
              ],
              [
                "رسوم الإقامة",
                "بحسب الجنسية والمدة"
              ],
              [
                "التأمين والوثائق",
                "بحسب الملف"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "التخطيط للانتقال على المدى الطويل",
          "body": "تعرف إلى الحي قبل الالتزام بعقد إيجار طويل؛ إسطنبول مناسبة للأعمال والمدارس، وأنطاليا للحياة الساحلية طوال العام، وبودروم لنمط الحياة البحري مع اختلاف الخدمات حسب الموسم. جهز شهادات الميلاد والزواج مع التصديق أو الترجمة عند الطلب. تصريح العمل والإقامة الضريبية يختلفان عن تصريح الإقامة الإداري. رتب وسائل دفع قانونية وخياراً احتياطياً، إذ قد تواجه البطاقات والتحويلات الدولية قيوداً. لا تعتمد على عمل بطاقة مصرفية روسية دون التأكد."
        }
      ],
      "faqs": [
        {
          "question": "هل يمكن البقاء 90 يوماً متتالية دون تأشيرة؟",
          "answer": "ليس بالاعتماد على الإعفاء العادي البالغ 60 يوماً وحده."
        },
        {
          "question": "هل يمكن العودة لمدة 60 يوماً بعد زيارة 60 يوماً؟",
          "answer": "لا إذا ظلت الأيام الأولى ضمن النافذة، فالحد الإجمالي 90 يوماً."
        },
        {
          "question": "هل يضمن تقديم الطلب الحصول على الإقامة؟",
          "answer": "لا، تدرس السلطات الغرض والعنوان والوثائق."
        },
        {
          "question": "هل يسمح تصريح الإقامة بالعمل تلقائياً؟",
          "answer": "لا، يلزم الحصول على إذن عمل منفصل."
        }
      ],
      "sources": [
        {
          "label": "المعلومات القنصلية باللغة الروسية",
          "href": "https://www.mfa.gov.tr/consular-info.ru.mfa"
        },
        {
          "label": "دليل القنصلية الروسية في إسطنبول",
          "href": "https://istanbul.mid.ru/upload/iblock/a18/a18338616dcbf623e3ffd4e04d10c9fe.pdf"
        },
        {
          "label": "وزارة الخارجية التركية",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "القواعد العامة للتأشيرات التركية",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "الرسوم الرسمية لعام 2026",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "أسئلة حول تصريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    }
  },
  "american-citizens-turkey-visa": {
    "fr": {
      "title": "Visa Turquie pour les Américains 2026 : exemption 90 jours et résidence",
      "metaDescription": "Passeport américain : plus d’e-Visa touristique pour 90 jours sur 180. Validité, cachets, études, travail et ikamet pour vivre en Turquie.",
      "shortAnswer": "Les titulaires de passeports touristiques américains bénéficient de 90 jours sans visa sur 180. Les passeports officiels ne relèvent pas de cette exemption. Pour un séjour durable, une procédure de résidence distincte s’applique.",
      "bosphorasHelp": "Bosphoras peut organiser votre séjour de découverte, la recherche de logement et des rendez-vous avec des professionnels indépendants pour préparer votre installation.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Les nouvelles habitudes de voyage américaines",
          "body": "Depuis la suppression de l’obligation de visa touristique pour les passeports ordinaires américains, il n’est plus nécessaire d’acheter un e-Visa pour les courts séjours exemptés. Le Département d’État recommande un passeport valable six mois après l’entrée et au moins une page vierge. Les déplacements officiels nécessitent un visa.",
          "table": {
            "headers": [
              "Situation",
              "Règle"
            ],
            "rows": [
              [
                "Tourisme",
                "90 jours sur 180"
              ],
              [
                "e-Visa touristique",
                "Non requis pour passeport ordinaire exempté"
              ],
              [
                "Passeport",
                "6 mois recommandés par les États-Unis"
              ],
              [
                "Voyage officiel",
                "Visa requis"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Compter les jours et conserver les preuves",
          "body": "Un séjour de 50 jours en hiver puis de 25 jours au printemps laisse 15 jours si les 75 jours figurent toujours dans la fenêtre mobile de 180 jours. Vérifiez les cachets d’entrée et de sortie : les autorités peuvent les demander lors de contrôles. Une courte sortie vers un pays voisin ne remet pas à zéro le quota."
        },
        {
          "id": "country-documentation",
          "title": "Études, travail et investissement",
          "body": "Selon le Département d’État, les voyageurs qui souhaitent travailler, étudier ou mener certaines recherches doivent obtenir le visa adapté avant l’arrivée. Une visite de biens ne dispense pas des autorisations nécessaires à une activité professionnelle. Un citoyen américain doit aussi examiner les obligations fiscales américaines liées à sa citoyenneté en cas de déménagement."
        },
        {
          "id": "country-ikamet",
          "title": "Demander un ikamet avant la fin du séjour",
          "body": "Une résidence de courte durée peut être délivrée pour deux ans au maximum par demande, hors catégories particulières. Le motif doit être admissible. Sur e-ikamet, préparez le formulaire pendant votre séjour légal, puis suivez les indications de convocation : passeport, quatre photos biométriques, justificatifs du motif, de logement, de moyens et assurance selon la situation. Pour un propriétaire, le logement doit être résidentiel et utilisé pour habiter ; un achat ne garantit pas le permis. Vérifiez l’adresse avant de signer. Une fois le dossier complet remis, l’administration dispose en principe de 90 jours pour statuer."
        },
        {
          "id": "country-fees",
          "title": "Budget réel de la demande en 2026",
          "body": "Le rendez-vous officiel n’est pas payant. La carte de séjour coûte 964 TL en 2026 par personne. Le droit de séjour est distinct et dépend du passeport, de la durée et des exemptions ; le portail calcule les droits applicables. Prévoyez aussi l’assurance, les traductions, les éventuels frais notariés et la caution du logement. Ne versez pas de frais à un site imitant le portail officiel.",
          "table": {
            "headers": [
              "Poste",
              "Montant ou règle"
            ],
            "rows": [
              [
                "Rendez-vous officiel",
                "Gratuit"
              ],
              [
                "Carte de séjour 2026",
                "964 TL/personne"
              ],
              [
                "Droits de séjour",
                "Selon nationalité et durée"
              ],
              [
                "Assurance et documents",
                "Selon le dossier"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Préparer un projet d’installation durable",
          "body": "Séjournez à proximité de vos futurs lieux de vie avant de choisir un bail : Istanbul pour les activités professionnelles et les écoles, Antalya pour un séjour côtier à l’année, Bodrum pour un mode de vie maritime avec des variations saisonnières. Pour un dossier familial, préparez les actes de naissance et de mariage, avec apostille ou traduction lorsqu’elle est exigée. Le permis de travail et la résidence fiscale nécessitent une analyse distincte. Avant le départ des États-Unis, réunissez les dossiers scolaires et actes d’état civil, assurez une couverture santé internationale et consultez un professionnel pour vos éventuelles déclarations fiscales américaines."
        }
      ],
      "faqs": [
        {
          "question": "Dois-je encore acheter un e-Visa américain ?",
          "answer": "Non pour le tourisme avec un passeport ordinaire dans le quota."
        },
        {
          "question": "Un investissement me permet-il de rester au-delà de 90 jours ?",
          "answer": "Non à lui seul : un statut approprié est nécessaire."
        },
        {
          "question": "Le dépôt d’une demande garantit-il l'ikamet ?",
          "answer": "Non. Les autorités examinent le motif, l’adresse et les pièces."
        },
        {
          "question": "Un ikamet autorise-t-il automatiquement à travailler ?",
          "answer": "Non. Un droit au travail distinct est nécessaire."
        }
      ],
      "sources": [
        {
          "label": "Département d’État américain",
          "href": "https://travel.state.gov/en/international-travel/travel-advisories/turkey.html"
        },
        {
          "label": "Ministère turc des Affaires étrangères",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Règles générales des visas turcs",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "Tarifs officiels 2026",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Questions sur le titre de séjour",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "en": {
      "title": "Turkey visa for US citizens 2026: visa-free 90 days & residence",
      "metaDescription": "US passport holders no longer need a tourist e-Visa for 90 days in 180. Learn passport rules, entry stamps, work, study and ikamet options.",
      "shortAnswer": "US ordinary tourist passport holders can visit Turkey visa-free for up to 90 days in 180. Official passports are not covered by this exemption. Longer settlement requires a separate lawful status.",
      "bosphorasHelp": "Bosphoras can coordinate an exploratory stay, housing searches and appointments with independent professionals to prepare your relocation.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Do Americans still need a tourist e-Visa?",
          "body": "Ordinary US passport holders covered by the waiver no longer need to purchase an e-Visa for short tourist visits. The US Department of State recommends six months' passport validity from arrival and at least one blank page. Official and diplomatic travel requires a visa.",
          "table": {
            "headers": [
              "Situation",
              "Rule"
            ],
            "rows": [
              [
                "Tourism",
                "90 days in 180"
              ],
              [
                "Tourist e-Visa",
                "Not needed for exempt ordinary passports"
              ],
              [
                "Passport",
                "6 months recommended by US guidance"
              ],
              [
                "Official travel",
                "Visa required"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Counting days and keeping records",
          "body": "A 50-day winter trip followed by 25 days in spring leaves 15 days while all 75 days remain inside the rolling 180-day window. Check entry and exit stamps: officials may ask for proof of lawful presence. A brief trip to a nearby country does not reset the allowance."
        },
        {
          "id": "country-documentation",
          "title": "Work, study and investment",
          "body": "US government guidance states that those planning to work, study or undertake certain research activities must obtain the appropriate visa before arrival. Property viewings do not replace permissions needed to conduct professional activity. US citizens who move abroad should separately assess US tax obligations tied to citizenship."
        },
        {
          "id": "country-ikamet",
          "title": "Applying for an ikamet before your stay ends",
          "body": "A short-term residence permit can normally be issued for up to two years at a time, subject to special categories and a qualifying purpose. Start the official e-ikamet application while lawfully present. Follow the appointment notice and prepare a passport, four biometric photographs, evidence of purpose, accommodation and means, and insurance where required. An owner-occupier must use the residential property as a home; buying does not guarantee approval. Confirm address eligibility before signing a contract. The decision period is normally 90 days from complete submission."
        },
        {
          "id": "country-fees",
          "title": "What a residence application costs in 2026",
          "body": "The official appointment is free. The 2026 residence card charge is TRY 964 per person. Separate residence duties depend on passport nationality, duration and exemptions and are calculated by the portal. Budget for medical insurance, translations, possible notarisation and a housing deposit. Avoid lookalike application websites charging appointment fees.",
          "table": {
            "headers": [
              "Item",
              "Cost or rule"
            ],
            "rows": [
              [
                "Official appointment",
                "Free"
              ],
              [
                "2026 residence card",
                "TRY 964/person"
              ],
              [
                "Residence duties",
                "Nationality and duration dependent"
              ],
              [
                "Insurance and documents",
                "Case dependent"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Planning a longer-term move",
          "body": "Test your everyday surroundings before committing to a lease: Istanbul for business and schools, Antalya for year-round coastal living, and Bodrum for a maritime lifestyle with seasonal variation. Families should prepare birth and marriage records, with apostilles or translations when required. Work authorisation and tax residence are separate from immigration residence. Before leaving the US, collect school and civil records, arrange international health coverage and review any continuing US tax reporting with a specialist."
        }
      ],
      "faqs": [
        {
          "question": "Do I still need to buy a Turkish e-Visa as a US tourist?",
          "answer": "No, with an ordinary passport within the exemption."
        },
        {
          "question": "Can an investment let me stay beyond 90 days automatically?",
          "answer": "No; appropriate residence status is still required."
        },
        {
          "question": "Does applying guarantee an ikamet?",
          "answer": "No. The authorities assess your purpose, address and evidence."
        },
        {
          "question": "Can I work automatically with an ikamet?",
          "answer": "No. Separate work authorisation is necessary."
        }
      ],
      "sources": [
        {
          "label": "US Department of State",
          "href": "https://travel.state.gov/en/international-travel/travel-advisories/turkey.html"
        },
        {
          "label": "Turkish Ministry of Foreign Affairs",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "General Turkish visa rules",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "Official 2026 fees",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Residence permit questions",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "ru": {
      "title": "Гражданам США в Турцию в 2026 году: 90 дней без визы и ВНЖ",
      "metaDescription": "Американский паспорт, отмена туристической e-Visa, правило 90/180, документы на границе, работа и оформление икамета.",
      "shortAnswer": "Владельцы обычных туристических паспортов США могут посещать Турцию без визы до 90 дней в течение 180 дней. Для служебных паспортов действуют другие правила. Длительное проживание требует отдельного статуса.",
      "bosphorasHelp": "Bosphoras помогает организовать ознакомительную поездку, поиск жилья и консультации независимых специалистов для подготовки к переезду.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Нужна ли американцам электронная виза",
          "body": "Для обычных паспортов США, подпадающих под безвизовый режим, больше не требуется покупать туристическую электронную визу. Госдепартамент рекомендует паспорт со сроком действия шесть месяцев от въезда и хотя бы одной чистой страницей. Для официальных и дипломатических поездок требуется виза.",
          "table": {
            "headers": [
              "Ситуация",
              "Правило"
            ],
            "rows": [
              [
                "Туризм",
                "90 дней из 180"
              ],
              [
                "Туристическая электронная виза",
                "Не нужна для обычного паспорта в пределах льготы"
              ],
              [
                "Паспорт",
                "США рекомендуют 6 месяцев действия"
              ],
              [
                "Служебная поездка",
                "Нужна виза"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Учёт поездок и отметок",
          "body": "После зимнего визита на 50 дней и весеннего на 25 дней остаётся 15 дней, если все 75 входят в скользящий 180-дневный период. Проверьте отметки о въезде и выезде: они могут понадобиться при контроле. Краткий выезд в соседнюю страну не обнуляет лимит."
        },
        {
          "id": "country-documentation",
          "title": "Работа, учёба и инвестиции",
          "body": "По рекомендациям Госдепартамента для работы, обучения или отдельных видов научной деятельности соответствующую визу необходимо получать до прибытия. Осмотр недвижимости не заменяет разрешений на профессиональную деятельность. При переезде гражданам США также следует отдельно учитывать налоговые обязательства, связанные с гражданством."
        },
        {
          "id": "country-ikamet",
          "title": "Как подать заявление на ВНЖ до окончания законного срока",
          "body": "Краткосрочный ВНЖ обычно выдаётся не более чем на два года за один раз, за исключением специальных категорий. Необходимо законное основание. Заполните заявление на официальном портале e-ikamet, пока ваше пребывание законно. По требованиям приглашения подготовьте паспорт, четыре биометрические фотографии, документы о цели проживания, жилье, средствах и страховку. Для ВНЖ собственника жильё должно использоваться для проживания; покупка не гарантирует разрешение. Проверьте допустимость адреса до сделки. Срок рассмотрения полного комплекта документов обычно составляет до 90 дней."
        },
        {
          "id": "country-fees",
          "title": "Расходы на оформление в 2026 году",
          "body": "Запись на официальный приём бесплатна. Стоимость карточки ВНЖ в 2026 году составляет 964 турецкие лиры на человека. Отдельный сбор за проживание зависит от гражданства, срока и льгот; расчёт выполняется на портале. Учтите страховку, переводы, нотариальные услуги при необходимости и залог за жильё. Не оплачивайте запись на сторонних сайтах, копирующих официальный портал.",
          "table": {
            "headers": [
              "Расход",
              "Сумма или правило"
            ],
            "rows": [
              [
                "Запись на приём",
                "Бесплатно"
              ],
              [
                "Карточка ВНЖ в 2026 году",
                "964 лиры на человека"
              ],
              [
                "Сбор за проживание",
                "Зависит от гражданства и срока"
              ],
              [
                "Страховка и документы",
                "По обстоятельствам"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Подготовка к длительному переезду",
          "body": "До заключения договора аренды изучите повседневную жизнь в выбранном районе. Стамбул подходит для деловых встреч и выбора школ, Анталья — для круглогодичного проживания у моря, Бодрум — для жизни на побережье с выраженной сезонностью. Для семейного дела подготовьте свидетельства о рождении и браке с апостилем или переводом, если они требуются. Разрешение на работу и налоговое резидентство оформляются и определяются отдельно. До отъезда из США соберите школьные и гражданские документы, оформите медицинское страхование и обсудите налоговую отчётность с профильным специалистом."
        }
      ],
      "faqs": [
        {
          "question": "Нужно ли гражданину США покупать e-Visa для туризма?",
          "answer": "Нет при обычном паспорте и соблюдении лимита."
        },
        {
          "question": "Позволяют ли инвестиции автоматически остаться дольше 90 дней?",
          "answer": "Нет, требуется соответствующий статус."
        },
        {
          "question": "Гарантирует ли заявление получение ВНЖ?",
          "answer": "Нет. Миграционная служба оценивает основание, адрес и документы."
        },
        {
          "question": "Даёт ли ВНЖ право на работу автоматически?",
          "answer": "Нет. Требуется отдельное разрешение на работу."
        }
      ],
      "sources": [
        {
          "label": "Госдепартамент США",
          "href": "https://travel.state.gov/en/international-travel/travel-advisories/turkey.html"
        },
        {
          "label": "МИД Турции",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Общие визовые правила Турции",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Виды ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Официальный портал e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Официальные сборы на 2026 год",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Вопросы о ВНЖ",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة تركيا للأمريكيين 2026: 90 يوماً دون تأشيرة والإقامة",
      "metaDescription": "دليل الجواز الأمريكي بعد الإعفاء من التأشيرة السياحية الإلكترونية: قاعدة 90 من 180 يوماً وصلاحية الجواز والإقامة والعمل.",
      "shortAnswer": "يمكن لحاملي جوازات السفر الأمريكية السياحية العادية زيارة تركيا دون تأشيرة لمدة 90 يوماً خلال 180 يوماً. لا ينطبق الإعفاء على الجوازات الرسمية، وتتطلب الإقامة الطويلة وضعاً قانونياً منفصلاً.",
      "bosphorasHelp": "تنسق Bosphoras الإقامة الاستكشافية والبحث عن السكن والمواعيد مع مختصين مستقلين استعداداً للانتقال.",
      "sections": [
        {
          "id": "country-entry",
          "title": "هل يحتاج الأمريكي إلى تأشيرة إلكترونية؟",
          "body": "لم يعد حامل الجواز الأمريكي العادي المشمول بالإعفاء يحتاج إلى شراء تأشيرة إلكترونية للزيارة السياحية القصيرة. توصي الخارجية الأمريكية بجواز صالح ستة أشهر من الوصول وصفحة فارغة واحدة على الأقل. تحتاج الرحلات الرسمية والدبلوماسية إلى تأشيرة.",
          "table": {
            "headers": [
              "الحالة",
              "القاعدة"
            ],
            "rows": [
              [
                "السياحة",
                "90 يوماً من 180"
              ],
              [
                "التأشيرة السياحية الإلكترونية",
                "غير مطلوبة للجواز العادي المعفى"
              ],
              [
                "الجواز",
                "توصي الولايات المتحدة بصلاحية 6 أشهر"
              ],
              [
                "الرحلات الرسمية",
                "تأشيرة مطلوبة"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "حساب الرصيد والاحتفاظ بسجلات السفر",
          "body": "بعد قضاء 50 يوماً شتاءً و25 يوماً في الربيع يتبقى 15 يوماً إذا كانت الأيام السابقة كلها ضمن نافذة 180 يوماً. تحقق من أختام الدخول والخروج فقد تطلب لإثبات البقاء القانوني. لا يعيد الخروج القصير لدولة مجاورة احتساب المدة من البداية."
        },
        {
          "id": "country-documentation",
          "title": "العمل والدراسة والاستثمار",
          "body": "توضح الخارجية الأمريكية أن العمل والدراسة وبعض أنشطة البحث تتطلب تأشيرة مناسبة قبل الوصول. لا تغني معاينة العقارات عن التصاريح اللازمة للنشاط المهني. وعلى المواطن الأمريكي الذي ينتقل للخارج دراسة التزاماته الضريبية المرتبطة بجنسيته بشكل منفصل."
        },
        {
          "id": "country-ikamet",
          "title": "طلب الإقامة قبل انتهاء مدة البقاء القانوني",
          "body": "يمكن إصدار تصريح الإقامة قصيرة الأجل عادة لمدة تصل إلى سنتين في كل مرة باستثناء الفئات الخاصة، ويجب وجود غرض مؤهل. ابدأ الطلب عبر بوابة الإقامة الرسمية أثناء وجودك القانوني واتبع تعليمات الموعد. جهز الجواز وأربع صور بيومترية وإثبات غرض الإقامة والسكن والموارد والتأمين وفق حالتك. يجب أن يستخدم المالك عقاره السكني للإقامة؛ لا يضمن الشراء الموافقة. تحقق من أهلية العنوان قبل التوقيع. تبلغ مدة اتخاذ القرار عادة 90 يوماً من تقديم الملف المكتمل."
        },
        {
          "id": "country-fees",
          "title": "تكاليف طلب الإقامة في 2026",
          "body": "حجز الموعد الرسمي مجاني. تبلغ رسوم بطاقة الإقامة لعام 2026 مبلغ 964 ليرة تركية لكل شخص. أما رسوم الإقامة المنفصلة فتختلف بحسب الجنسية والمدة والإعفاءات ويحسبها الموقع الرسمي. خصص ميزانية للتأمين والترجمة والتوثيق عند الحاجة وتأمين السكن. تجنب المواقع المقلدة التي تطلب رسوماً لحجز الموعد.",
          "table": {
            "headers": [
              "البند",
              "المبلغ أو القاعدة"
            ],
            "rows": [
              [
                "الموعد الرسمي",
                "مجاني"
              ],
              [
                "بطاقة الإقامة 2026",
                "964 ليرة للشخص"
              ],
              [
                "رسوم الإقامة",
                "بحسب الجنسية والمدة"
              ],
              [
                "التأمين والوثائق",
                "بحسب الملف"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "التخطيط للانتقال على المدى الطويل",
          "body": "تعرف إلى الحي قبل الالتزام بعقد إيجار طويل؛ إسطنبول مناسبة للأعمال والمدارس، وأنطاليا للحياة الساحلية طوال العام، وبودروم لنمط الحياة البحري مع اختلاف الخدمات حسب الموسم. جهز شهادات الميلاد والزواج مع التصديق أو الترجمة عند الطلب. تصريح العمل والإقامة الضريبية يختلفان عن تصريح الإقامة الإداري. قبل مغادرة الولايات المتحدة جهز وثائق الأسرة والدراسة والتأمين الصحي الدولي وناقش الالتزامات الضريبية الأمريكية مع مختص."
        }
      ],
      "faqs": [
        {
          "question": "هل أحتاج إلى شراء تأشيرة إلكترونية للسياحة؟",
          "answer": "لا لحامل الجواز الأمريكي العادي ضمن فترة الإعفاء."
        },
        {
          "question": "هل يتيح الاستثمار البقاء أكثر من 90 يوماً تلقائياً؟",
          "answer": "لا، يلزم وضع إقامة ملائم."
        },
        {
          "question": "هل يضمن تقديم الطلب الحصول على الإقامة؟",
          "answer": "لا، تدرس السلطات الغرض والعنوان والوثائق."
        },
        {
          "question": "هل يسمح تصريح الإقامة بالعمل تلقائياً؟",
          "answer": "لا، يلزم الحصول على إذن عمل منفصل."
        }
      ],
      "sources": [
        {
          "label": "وزارة الخارجية الأمريكية",
          "href": "https://travel.state.gov/en/international-travel/travel-advisories/turkey.html"
        },
        {
          "label": "وزارة الخارجية التركية",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "القواعد العامة للتأشيرات التركية",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "الرسوم الرسمية لعام 2026",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "أسئلة حول تصريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    }
  },
  "canadian-citizens-turkey-visa": {
    "fr": {
      "title": "Visa Turquie pour les Canadiens 2026 : 90 jours sans visa et ikamet",
      "metaDescription": "Canadiens en Turquie : 90 jours sur 180, passeport valable 150 jours, visas travail et affaires, résidence longue durée et coûts.",
      "shortAnswer": "Le passeport canadien ordinaire donne accès à 90 jours de tourisme sans visa sur 180. Le gouvernement canadien indique une validité du passeport d’au moins 150 jours à l’entrée. Les autres motifs de séjour doivent être examinés séparément.",
      "bosphorasHelp": "Bosphoras peut organiser votre séjour de découverte, la recherche de logement et des rendez-vous avec des professionnels indépendants pour préparer votre installation.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Voyager depuis le Canada",
          "body": "Aucun e-Visa touristique n’est requis pour un passeport ordinaire canadien dans la période autorisée. Pour les passeports officiels, les règles diffèrent. Le guide canadien demande au moins 150 jours de validité du passeport et invite à respecter les conditions de transport. Gardez le cachet d’entrée et les documents du voyage.",
          "table": {
            "headers": [
              "Situation",
              "Règle"
            ],
            "rows": [
              [
                "Tourisme",
                "90 jours sur 180"
              ],
              [
                "Passeport canadien",
                "150 jours minimum à l’entrée"
              ],
              [
                "Affaires, études, travail",
                "Visa approprié"
              ],
              [
                "Séjour hivernal de 4 mois",
                "Statut de résidence adapté"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Hiver en Turquie et séjours répétés",
          "body": "Si vous passez 70 jours en Turquie l’hiver puis revenez après quelques semaines, vous n’avez au plus que 20 jours utilisables tant que les 70 jours précédents sont dans la fenêtre mobile. Pour séjourner les 90 jours complets à nouveau après 90 jours consécutifs, il faut attendre que ceux-ci sortent de la période de calcul."
        },
        {
          "id": "country-documentation",
          "title": "Affaires, santé, télétravail et études",
          "body": "Le gouvernement du Canada précise que les visas d’affaires, de travail, d’études et de traitement médical sont requis pour les motifs correspondants. Il indique aussi le visa digital nomad pour le télétravail, avec certificat préalable. Les binationaux turco-canadiens doivent présenter un document turc valide à l’entrée. Un séjour hivernal de plus de 90 jours exige un statut adapté."
        },
        {
          "id": "country-ikamet",
          "title": "Demander un ikamet avant la fin du séjour",
          "body": "Une résidence de courte durée peut être délivrée pour deux ans au maximum par demande, hors catégories particulières. Le motif doit être admissible. Sur e-ikamet, préparez le formulaire pendant votre séjour légal, puis suivez les indications de convocation : passeport, quatre photos biométriques, justificatifs du motif, de logement, de moyens et assurance selon la situation. Pour un propriétaire, le logement doit être résidentiel et utilisé pour habiter ; un achat ne garantit pas le permis. Vérifiez l’adresse avant de signer. Une fois le dossier complet remis, l’administration dispose en principe de 90 jours pour statuer."
        },
        {
          "id": "country-fees",
          "title": "Budget réel de la demande en 2026",
          "body": "Le rendez-vous officiel n’est pas payant. La carte de séjour coûte 964 TL en 2026 par personne. Le droit de séjour est distinct et dépend du passeport, de la durée et des exemptions ; le portail calcule les droits applicables. Prévoyez aussi l’assurance, les traductions, les éventuels frais notariés et la caution du logement. Ne versez pas de frais à un site imitant le portail officiel.",
          "table": {
            "headers": [
              "Poste",
              "Montant ou règle"
            ],
            "rows": [
              [
                "Rendez-vous officiel",
                "Gratuit"
              ],
              [
                "Carte de séjour 2026",
                "964 TL/personne"
              ],
              [
                "Droits de séjour",
                "Selon nationalité et durée"
              ],
              [
                "Assurance et documents",
                "Selon le dossier"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Préparer un projet d’installation durable",
          "body": "Séjournez à proximité de vos futurs lieux de vie avant de choisir un bail : Istanbul pour les activités professionnelles et les écoles, Antalya pour un séjour côtier à l’année, Bodrum pour un mode de vie maritime avec des variations saisonnières. Pour un dossier familial, préparez les actes de naissance et de mariage, avec apostille ou traduction lorsqu’elle est exigée. Le permis de travail et la résidence fiscale nécessitent une analyse distincte. Vérifiez la continuité de votre assurance provinciale canadienne en cas d’absence prolongée et prévoyez une couverture internationale ; le droit à l’assurance et la résidence fiscale ne suivent pas automatiquement l’ikamet."
        }
      ],
      "faqs": [
        {
          "question": "Les Canadiens paient-ils encore un e-Visa touristique ?",
          "answer": "Non avec un passeport ordinaire et un séjour couvert par l’exemption."
        },
        {
          "question": "Puis-je télétravailler comme touriste ?",
          "answer": "Le guide du Canada indique une procédure de visa digital nomad pour le télétravail."
        },
        {
          "question": "Le dépôt d’une demande garantit-il l'ikamet ?",
          "answer": "Non. Les autorités examinent le motif, l’adresse et les pièces."
        },
        {
          "question": "Un ikamet autorise-t-il automatiquement à travailler ?",
          "answer": "Non. Un droit au travail distinct est nécessaire."
        }
      ],
      "sources": [
        {
          "label": "Gouvernement du Canada",
          "href": "https://travel.gc.ca/destinations/turkiye"
        },
        {
          "label": "Ministère turc des Affaires étrangères",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Règles générales des visas turcs",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "Tarifs officiels 2026",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Questions sur le titre de séjour",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "en": {
      "title": "Turkey visa for Canadian citizens 2026: 90 days & ikamet",
      "metaDescription": "Canadian passport holders: visa-free travel for 90 in 180 days, 150-day passport validity, business and remote-work visas, residence and costs.",
      "shortAnswer": "Ordinary Canadian passports permit visa-free tourism for 90 days in 180. Canadian government guidance requires at least 150 days' passport validity on entry. Non-tourist travel purposes must be assessed separately.",
      "bosphorasHelp": "Bosphoras can coordinate an exploratory stay, housing searches and appointments with independent professionals to prepare your relocation.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Travel from Canada",
          "body": "No tourist e-Visa is needed for ordinary Canadian passport holders within the allowance. Official passports follow different rules. Canada’s guidance specifies at least 150 days of passport validity and notes that carriers may impose stricter conditions. Retain your entry stamp and travel documents.",
          "table": {
            "headers": [
              "Situation",
              "Rule"
            ],
            "rows": [
              [
                "Tourism",
                "90 days in 180"
              ],
              [
                "Canadian passport",
                "At least 150 days from entry"
              ],
              [
                "Business, study and work",
                "Appropriate visa"
              ],
              [
                "Four-month winter stay",
                "Appropriate residence status"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Winter stays and repeat visits",
          "body": "A 70-day winter stay followed by a return a few weeks later leaves at most 20 available days while the original 70 remain in the rolling window. After 90 consecutive days, a full new 90-day allowance requires the previous stay to fall outside the calculation period."
        },
        {
          "id": "country-documentation",
          "title": "Business, healthcare, remote work and study",
          "body": "Canadian guidance specifies visas for business, work, study and medical travel, and a digital nomad visa process involving prior certification for remote work. Turkish-Canadian dual nationals must present valid Turkish identification on entry. A winter stay longer than 90 days requires an appropriate immigration status."
        },
        {
          "id": "country-ikamet",
          "title": "Applying for an ikamet before your stay ends",
          "body": "A short-term residence permit can normally be issued for up to two years at a time, subject to special categories and a qualifying purpose. Start the official e-ikamet application while lawfully present. Follow the appointment notice and prepare a passport, four biometric photographs, evidence of purpose, accommodation and means, and insurance where required. An owner-occupier must use the residential property as a home; buying does not guarantee approval. Confirm address eligibility before signing a contract. The decision period is normally 90 days from complete submission."
        },
        {
          "id": "country-fees",
          "title": "What a residence application costs in 2026",
          "body": "The official appointment is free. The 2026 residence card charge is TRY 964 per person. Separate residence duties depend on passport nationality, duration and exemptions and are calculated by the portal. Budget for medical insurance, translations, possible notarisation and a housing deposit. Avoid lookalike application websites charging appointment fees.",
          "table": {
            "headers": [
              "Item",
              "Cost or rule"
            ],
            "rows": [
              [
                "Official appointment",
                "Free"
              ],
              [
                "2026 residence card",
                "TRY 964/person"
              ],
              [
                "Residence duties",
                "Nationality and duration dependent"
              ],
              [
                "Insurance and documents",
                "Case dependent"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Planning a longer-term move",
          "body": "Test your everyday surroundings before committing to a lease: Istanbul for business and schools, Antalya for year-round coastal living, and Bodrum for a maritime lifestyle with seasonal variation. Families should prepare birth and marriage records, with apostilles or translations when required. Work authorisation and tax residence are separate from immigration residence. Review provincial healthcare coverage during extended absence and arrange international insurance. Health entitlement and tax residence do not automatically follow the ikamet."
        }
      ],
      "faqs": [
        {
          "question": "Do Canadians still pay for a tourist e-Visa?",
          "answer": "No, with an ordinary passport within the exemption."
        },
        {
          "question": "Can I work remotely as a tourist?",
          "answer": "Canadian government guidance specifies the digital nomad visa process for remote work."
        },
        {
          "question": "Does applying guarantee an ikamet?",
          "answer": "No. The authorities assess your purpose, address and evidence."
        },
        {
          "question": "Can I work automatically with an ikamet?",
          "answer": "No. Separate work authorisation is necessary."
        }
      ],
      "sources": [
        {
          "label": "Government of Canada",
          "href": "https://travel.gc.ca/destinations/turkiye"
        },
        {
          "label": "Turkish Ministry of Foreign Affairs",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "General Turkish visa rules",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "Official 2026 fees",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Residence permit questions",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "ru": {
      "title": "Гражданам Канады в Турцию в 2026 году: 90 дней без визы и ВНЖ",
      "metaDescription": "Канадский паспорт, правило 90/180, срок действия 150 дней, визы для работы и бизнеса, зимовка и оформление ВНЖ.",
      "shortAnswer": "По обычному канадскому паспорту разрешены туристические поездки без визы на 90 дней в течение 180 дней. Согласно канадским рекомендациям, паспорт должен действовать не менее 150 дней с даты въезда. Другие цели поездки требуют отдельного рассмотрения.",
      "bosphorasHelp": "Bosphoras помогает организовать ознакомительную поездку, поиск жилья и консультации независимых специалистов для подготовки к переезду.",
      "sections": [
        {
          "id": "country-entry",
          "title": "Поездка из Канады",
          "body": "При обычном канадском паспорте электронная туристическая виза в пределах лимита не нужна. Для служебных паспортов действуют иные правила. Канадское руководство требует 150 дней срока действия паспорта и предупреждает о возможных дополнительных требованиях перевозчиков. Сохраняйте отметку о въезде и документы поездки.",
          "table": {
            "headers": [
              "Ситуация",
              "Правило"
            ],
            "rows": [
              [
                "Туризм",
                "90 дней из 180"
              ],
              [
                "Паспорт Канады",
                "150 дней действия с даты въезда"
              ],
              [
                "Бизнес, учёба, работа",
                "Соответствующая виза"
              ],
              [
                "Зимовка четыре месяца",
                "Подходящий статус проживания"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "Зимовка и повторные поездки",
          "body": "После 70 дней зимнего отдыха и возвращения через несколько недель остаётся не более 20 дней, пока первые 70 входят в скользящий период. После 90 дней подряд для получения нового полного лимита необходимо дождаться выхода прежних дней из расчёта."
        },
        {
          "id": "country-documentation",
          "title": "Бизнес, лечение, дистанционная работа и учёба",
          "body": "Канадское правительство указывает на необходимость соответствующих виз для деловых поездок, работы, обучения и лечения; для дистанционной работы предусмотрена процедура визы цифрового кочевника с предварительным сертификатом. Лица с канадским и турецким гражданством должны предъявить действующий турецкий документ. Для зимовки дольше 90 дней нужен подходящий статус."
        },
        {
          "id": "country-ikamet",
          "title": "Как подать заявление на ВНЖ до окончания законного срока",
          "body": "Краткосрочный ВНЖ обычно выдаётся не более чем на два года за один раз, за исключением специальных категорий. Необходимо законное основание. Заполните заявление на официальном портале e-ikamet, пока ваше пребывание законно. По требованиям приглашения подготовьте паспорт, четыре биометрические фотографии, документы о цели проживания, жилье, средствах и страховку. Для ВНЖ собственника жильё должно использоваться для проживания; покупка не гарантирует разрешение. Проверьте допустимость адреса до сделки. Срок рассмотрения полного комплекта документов обычно составляет до 90 дней."
        },
        {
          "id": "country-fees",
          "title": "Расходы на оформление в 2026 году",
          "body": "Запись на официальный приём бесплатна. Стоимость карточки ВНЖ в 2026 году составляет 964 турецкие лиры на человека. Отдельный сбор за проживание зависит от гражданства, срока и льгот; расчёт выполняется на портале. Учтите страховку, переводы, нотариальные услуги при необходимости и залог за жильё. Не оплачивайте запись на сторонних сайтах, копирующих официальный портал.",
          "table": {
            "headers": [
              "Расход",
              "Сумма или правило"
            ],
            "rows": [
              [
                "Запись на приём",
                "Бесплатно"
              ],
              [
                "Карточка ВНЖ в 2026 году",
                "964 лиры на человека"
              ],
              [
                "Сбор за проживание",
                "Зависит от гражданства и срока"
              ],
              [
                "Страховка и документы",
                "По обстоятельствам"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "Подготовка к длительному переезду",
          "body": "До заключения договора аренды изучите повседневную жизнь в выбранном районе. Стамбул подходит для деловых встреч и выбора школ, Анталья — для круглогодичного проживания у моря, Бодрум — для жизни на побережье с выраженной сезонностью. Для семейного дела подготовьте свидетельства о рождении и браке с апостилем или переводом, если они требуются. Разрешение на работу и налоговое резидентство оформляются и определяются отдельно. Проверьте условия сохранения медицинского страхования вашей канадской провинции при длительном отсутствии и оформите международную страховку. ВНЖ сам по себе не определяет страховые и налоговые права."
        }
      ],
      "faqs": [
        {
          "question": "Нужно ли канадцам платить за электронную туристическую визу?",
          "answer": "Нет, при обычном паспорте и соблюдении лимита."
        },
        {
          "question": "Можно ли работать удалённо как турист?",
          "answer": "Канадское руководство указывает процедуру визы цифрового кочевника для удалённой работы."
        },
        {
          "question": "Гарантирует ли заявление получение ВНЖ?",
          "answer": "Нет. Миграционная служба оценивает основание, адрес и документы."
        },
        {
          "question": "Даёт ли ВНЖ право на работу автоматически?",
          "answer": "Нет. Требуется отдельное разрешение на работу."
        }
      ],
      "sources": [
        {
          "label": "Правительство Канады",
          "href": "https://travel.gc.ca/destinations/turkiye"
        },
        {
          "label": "МИД Турции",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "Общие визовые правила Турции",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
        },
        {
          "label": "Виды ВНЖ",
          "href": "https://en.goc.gov.tr/residence-permit-types"
        },
        {
          "label": "Официальный портал e-ikamet",
          "href": "https://e-ikamet.goc.gov.tr/"
        },
        {
          "label": "Официальные сборы на 2026 год",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "Вопросы о ВНЖ",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة تركيا للكنديين 2026: 90 يوماً دون تأشيرة والإيكامت",
      "metaDescription": "تعرف على قاعدة 90 من 180 يوماً للجواز الكندي وصلاحية 150 يوماً وتأشيرات الأعمال والعمل عن بعد والإقامة الطويلة.",
      "shortAnswer": "يسمح الجواز الكندي العادي بالسياحة دون تأشيرة لمدة 90 يوماً خلال 180 يوماً. تشترط إرشادات الحكومة الكندية صلاحية الجواز 150 يوماً على الأقل عند الدخول. تختلف إجراءات الأغراض غير السياحية.",
      "bosphorasHelp": "تنسق Bosphoras الإقامة الاستكشافية والبحث عن السكن والمواعيد مع مختصين مستقلين استعداداً للانتقال.",
      "sections": [
        {
          "id": "country-entry",
          "title": "السفر من كندا",
          "body": "لا يحتاج حامل الجواز الكندي العادي إلى تأشيرة إلكترونية سياحية ضمن المدة المسموحة. تختلف قواعد الجوازات الرسمية. تشترط كندا صلاحية 150 يوماً وتنبّه إلى احتمال وجود شروط إضافية لدى شركات النقل. احتفظ بختم الدخول ووثائق الرحلة.",
          "table": {
            "headers": [
              "الحالة",
              "القاعدة"
            ],
            "rows": [
              [
                "السياحة",
                "90 يوماً من 180"
              ],
              [
                "الجواز الكندي",
                "صلاحية 150 يوماً على الأقل عند الدخول"
              ],
              [
                "الأعمال والدراسة والعمل",
                "تأشيرة مناسبة"
              ],
              [
                "إقامة شتوية أربعة أشهر",
                "وضع إقامة مناسب"
              ]
            ]
          }
        },
        {
          "id": "country-calculation",
          "title": "الإقامة الشتوية وتكرار الزيارات",
          "body": "بعد قضاء 70 يوماً في تركيا خلال الشتاء ثم العودة بعد أسابيع، يتبقى 20 يوماً على الأكثر ما دامت الأيام السابقة ضمن نافذة الحساب. بعد 90 يوماً متتالية لا تستعاد مدة 90 يوماً كاملة إلا بعدما تخرج الأيام السابقة من فترة الحساب."
        },
        {
          "id": "country-documentation",
          "title": "الأعمال والعلاج والعمل عن بعد والدراسة",
          "body": "تشير الحكومة الكندية إلى ضرورة التأشيرات المناسبة للأعمال والعمل والدراسة والعلاج، وإلى إجراءات تأشيرة الرحالة الرقميين للعمل عن بعد مع شهادة مسبقة. يجب على مزدوج الجنسية التركية والكندية تقديم وثيقة تركية سارية عند الدخول. وللإقامة الشتوية أكثر من 90 يوماً يلزم وضع قانوني مناسب."
        },
        {
          "id": "country-ikamet",
          "title": "طلب الإقامة قبل انتهاء مدة البقاء القانوني",
          "body": "يمكن إصدار تصريح الإقامة قصيرة الأجل عادة لمدة تصل إلى سنتين في كل مرة باستثناء الفئات الخاصة، ويجب وجود غرض مؤهل. ابدأ الطلب عبر بوابة الإقامة الرسمية أثناء وجودك القانوني واتبع تعليمات الموعد. جهز الجواز وأربع صور بيومترية وإثبات غرض الإقامة والسكن والموارد والتأمين وفق حالتك. يجب أن يستخدم المالك عقاره السكني للإقامة؛ لا يضمن الشراء الموافقة. تحقق من أهلية العنوان قبل التوقيع. تبلغ مدة اتخاذ القرار عادة 90 يوماً من تقديم الملف المكتمل."
        },
        {
          "id": "country-fees",
          "title": "تكاليف طلب الإقامة في 2026",
          "body": "حجز الموعد الرسمي مجاني. تبلغ رسوم بطاقة الإقامة لعام 2026 مبلغ 964 ليرة تركية لكل شخص. أما رسوم الإقامة المنفصلة فتختلف بحسب الجنسية والمدة والإعفاءات ويحسبها الموقع الرسمي. خصص ميزانية للتأمين والترجمة والتوثيق عند الحاجة وتأمين السكن. تجنب المواقع المقلدة التي تطلب رسوماً لحجز الموعد.",
          "table": {
            "headers": [
              "البند",
              "المبلغ أو القاعدة"
            ],
            "rows": [
              [
                "الموعد الرسمي",
                "مجاني"
              ],
              [
                "بطاقة الإقامة 2026",
                "964 ليرة للشخص"
              ],
              [
                "رسوم الإقامة",
                "بحسب الجنسية والمدة"
              ],
              [
                "التأمين والوثائق",
                "بحسب الملف"
              ]
            ]
          }
        },
        {
          "id": "country-relocation",
          "title": "التخطيط للانتقال على المدى الطويل",
          "body": "تعرف إلى الحي قبل الالتزام بعقد إيجار طويل؛ إسطنبول مناسبة للأعمال والمدارس، وأنطاليا للحياة الساحلية طوال العام، وبودروم لنمط الحياة البحري مع اختلاف الخدمات حسب الموسم. جهز شهادات الميلاد والزواج مع التصديق أو الترجمة عند الطلب. تصريح العمل والإقامة الضريبية يختلفان عن تصريح الإقامة الإداري. تحقق من استمرار التغطية الصحية في المقاطعة الكندية أثناء الغياب الطويل ورتب تأميناً دولياً. لا تتحدد حقوق التأمين أو الإقامة الضريبية تلقائياً ببطاقة الإقامة التركية."
        }
      ],
      "faqs": [
        {
          "question": "هل يدفع الكندي رسوم تأشيرة إلكترونية للسياحة؟",
          "answer": "لا إذا كان حاملاً لجواز عادي ضمن الإعفاء."
        },
        {
          "question": "هل يمكن العمل عن بعد بصفة سائح؟",
          "answer": "تشير إرشادات كندا إلى إجراءات تأشيرة الرحالة الرقميين للعمل عن بعد."
        },
        {
          "question": "هل يضمن تقديم الطلب الحصول على الإقامة؟",
          "answer": "لا، تدرس السلطات الغرض والعنوان والوثائق."
        },
        {
          "question": "هل يسمح تصريح الإقامة بالعمل تلقائياً؟",
          "answer": "لا، يلزم الحصول على إذن عمل منفصل."
        }
      ],
      "sources": [
        {
          "label": "حكومة كندا",
          "href": "https://travel.gc.ca/destinations/turkiye"
        },
        {
          "label": "وزارة الخارجية التركية",
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
        },
        {
          "label": "القواعد العامة للتأشيرات التركية",
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa"
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
          "label": "الرسوم الرسمية لعام 2026",
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount"
        },
        {
          "label": "أسئلة حول تصريح الإقامة",
          "href": "https://en.goc.gov.tr/residence-"
        }
      ]
    }
  }
};
