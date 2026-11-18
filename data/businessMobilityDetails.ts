import type { Locale } from '@/lib/i18n';
export type MobilityKind = 'business' | 'relocation';
export interface MobilityDetails { title:string; intro:string; headers:string[]; rows:string[][]; chart:string; note:string; flowTitle:string; steps:string[]; answers:string[][]; related:string; sources:string; photoAlt:string; }
export const mobilityDetails: Record<Locale,Record<MobilityKind,MobilityDetails>> = {
  "fr": {
    "business": {
      "title": "Créer son entreprise en Turquie : les décisions essentielles",
      "intro": "Un entrepreneur étranger peut généralement détenir la totalité du capital d’une société turque, sous réserve des règles propres à certains secteurs. Notre accompagnement relie les choix juridiques, les démarches et la mise en activité. Vous démarrez avec un plan de constitution, un budget et une liste de pièces adaptés à votre projet.",
      "headers": [
        "Forme juridique",
        "Capital minimum",
        "Quand la choisir"
      ],
      "rows": [
        [
          "Ltd. Şti. (société à responsabilité limitée)",
          "50 000 TRY",
          "PME, conseil, commerce et prestations ; 1 à 50 associés."
        ],
        [
          "A.Ş. (société anonyme)",
          "250 000 TRY",
          "Projet de croissance, investisseurs, gouvernance ou transmission de titres."
        ],
        [
          "Succursale",
          "Pas de minimum général",
          "Extension de la société mère étrangère, sans personnalité juridique indépendante."
        ],
        [
          "Bureau de liaison",
          "Pas de capital social indépendant",
          "Représentation sans activité commerciale locale, sous autorisation."
        ]
      ],
      "chart": "Capital social minimum des deux sociétés usuelles",
      "note": "Le capital n’est pas un honoraire : il appartient à la société. En règle générale, une A.Ş. verse au moins 25 % avant l’immatriculation et le solde sous 24 mois ; une Ltd. Şti. peut libérer son capital dans les 24 mois. Les activités réglementées peuvent exiger davantage.",
      "flowTitle": "De l’idée à une entreprise opérationnelle",
      "steps": [
        "Analyse de l’activité et des associés",
        "Choix de la forme, adresse et statuts",
        "Identifiants fiscaux, MERSİS et documents",
        "Immatriculation au registre du commerce",
        "Comptabilité, banque et licences",
        "Facturation, recrutement et suivi"
      ],
      "answers": [
        [
          "Quels documents faut-il préparer ?",
          "Pour un associé personne physique : passeport, traduction certifiée, numéro fiscal et, selon le cas, titre de séjour. Pour une société étrangère : preuve d’existence, décision d’investissement, pouvoirs du représentant, statuts et pièces demandées par le registre. Les documents étrangers peuvent nécessiter apostille ou légalisation, traduction et certification. Une procuration adaptée peut permettre de déléguer certaines démarches."
        ],
        [
          "Combien coûte la création d’entreprise ?",
          "Le devis distingue capital, frais de registre et de chambre, notaire et traductions, accompagnement professionnel, adresse ou bureau, banque et licences éventuelles. Le budget de fonctionnement ajoute comptabilité, loyer, assurances, paie et impôts. Le capital minimum n’est donc pas le coût total. Nous définissons ces postes selon la ville, les associés et l’activité."
        ],
        [
          "Combien de temps faut-il ?",
          "Le registre peut traiter une constitution dans la journée lorsque le dossier est complet. Il faut aussi prévoir la collecte et la certification des pièces, la préparation de l’adresse, la banque et les éventuelles autorisations. Le calendrier de mise en activité n’est pas identique au délai d’immatriculation."
        ],
        [
          "Puis-je diriger ma société depuis la Turquie ?",
          "Détenir des parts et exercer une activité professionnelle sont deux questions différentes. Le permis de travail du dirigeant étranger obéit à des critères spécifiques ; une création de société ne donne pas automatiquement un droit de travail ni un titre de séjour. Nous coordonnons ce volet avec la mobilité du fondateur."
        ],
        [
          "Comment organiser la fiscalité et les flux internationaux ?",
          "Le cabinet comptable doit déterminer les obligations de TVA, d’impôt sur les bénéfices, de paie et de déclaration. Les conventions fiscales, les prix de transfert, la résidence du dirigeant et les prestations transfrontalières influencent le résultat. Un business plan de trésorerie et des preuves d’activité facilitent le dossier bancaire, sans garantir son acceptation."
        ],
        [
          "Puis-je ouvrir une filiale ou transférer mon équipe ?",
          "Pour un groupe étranger, nous relions l’ouverture d’une filiale ou d’une succursale au recrutement, aux contrats, à l’espace de travail et à la mobilité des cadres. Un calendrier commun permet à la direction de suivre les dépendances et les décisions."
        ]
      ],
      "related": "Relocation des dirigeants et salariés en Turquie",
      "sources": "Sources officielles : création et capital social",
      "photoAlt": "Istanbul, environnement d’implantation en Turquie"
    },
    "relocation": {
      "title": "Préparer une mobilité internationale : visa, travail et installation",
      "intro": "Le projet concerne aussi bien un cadre envoyé à Istanbul qu’une équipe transférée vers une usine ou une filiale régionale. Nous coordonnons les démarches du collaborateur et de sa famille avec le calendrier RH. Le premier objectif est de sécuriser le droit au travail et la prise de poste, puis l’installation quotidienne.",
      "headers": [
        "Situation",
        "Démarche",
        "Responsabilité à clarifier"
      ],
      "rows": [
        [
          "Salarié recruté à l’étranger",
          "Demande au consulat puis dossier employeur en Turquie",
          "Employeur et collaborateur"
        ],
        [
          "Salarié déjà en Turquie",
          "Demande intérieure si les conditions sont remplies",
          "Employeur et professionnel compétent"
        ],
        [
          "Mission courte ou détachement",
          "Qualification de la mission et éventuelle exemption légale",
          "Employeur et conseil habilité"
        ],
        [
          "Conjoint et enfants",
          "Statut de séjour et pièces familiales propres à chacun",
          "Famille et équipe de coordination"
        ]
      ],
      "chart": "Le délai administratif n’est qu’une partie du projet",
      "note": "Le ministère du Travail indique un délai d’examen de 30 jours pour une demande complète. Ce délai ne comprend pas la préparation, les rendez-vous consulaires ni l’arrivée. Un permis de travail valide tient généralement lieu de titre de séjour pour son titulaire ; le conjoint et les enfants doivent disposer de leur propre statut.",
      "flowTitle": "Calendrier de mobilité à construire avec les RH",
      "steps": [
        "Cadrage de la mission et du contrat",
        "Dossier de travail et de séjour",
        "Logement, école et assurance en parallèle",
        "Arrivée et démarches locales",
        "Prise de poste et installation",
        "Suivi, renouvellements et clôture"
      ],
      "answers": [
        [
          "Quelles sont les obligations de l’employeur ?",
          "Les critères généraux de permis de travail incluent notamment des exigences d’emploi local et de capacité financière. Pour certaines entreprises, le principe est de cinq salariés turcs par étranger ; il existe des exceptions et des règles spécifiques. Depuis le 3 août 2026, certains dossiers intérieurs de petites structures peuvent relever d’un assouplissement conditionnel. Nous identifions le régime applicable avec l’employeur avant les engagements."
        ],
        [
          "Quels documents préparer avant le départ ?",
          "Passeport, contrat ou lettre de mission, diplômes si nécessaires, pièces employeur, état civil et certificats des enfants ; selon le dossier, apostilles ou traductions certifiées. Le conjoint peut avoir besoin d’une procédure distincte. Nous établissons une liste nominative et un calendrier des pièces."
        ],
        [
          "Comment calculer un budget de relocation ?",
          "Séparer immigration et honoraires, logements temporaires et loyers, dépôt de garantie, déménagement, école, assurance, transport et éventuels frais de retour. Pour le budget employeur, ajouter paie, protection sociale et traitement fiscal des avantages. Nous présentons le périmètre et les postes de coût avant engagement."
        ],
        [
          "Comment choisir le logement et l’école ?",
          "Le temps de trajet vers le site de travail et l’école doit guider le quartier. Nous comparons les logements disponibles, conditions du bail, accès aux transports et besoins familiaux ; les écoles sont présélectionnées en fonction de la langue, du programme, des admissions, du budget et du trajet."
        ],
        [
          "Comment organiser une mobilité de plusieurs salariés ?",
          "Un brief unique identifie les profils, dates et familles. Le suivi distingue les pièces individuelles, étapes employeur, dépenses par dossier, décisions en attente et échéances. Les services sont modulables selon le niveau d’assistance souhaité."
        ],
        [
          "Que se passe-t-il après l’arrivée ?",
          "Nous coordonnons les rendez-vous, l’installation du logement, les services essentiels et le suivi des points ouverts. Pour les RH, le dossier distingue les livrables achevés, les renouvellements à anticiper et les responsabilités de chacun."
        ]
      ],
      "related": "Créer une filiale ou une société en Turquie",
      "sources": "Sources officielles : permis de travail et résidence",
      "photoAlt": "Istanbul, ville d’accueil des collaborateurs internationaux"
    }
  },
  "en": {
    "business": {
      "title": "Setting up a company in Türkiye: key decisions",
      "intro": "Foreign founders can generally own all of a Turkish company, subject to sector-specific restrictions. Bosphoras coordinates the formation and operational launch around the intended activity, ownership, banking, premises and budget.",
      "headers": [
        "Legal form",
        "Minimum capital",
        "Typical use"
      ],
      "rows": [
        [
          "Ltd. Şti. (LLC)",
          "TRY 50,000",
          "Closely held trading and service businesses; 1–50 shareholders."
        ],
        [
          "A.Ş. (JSC)",
          "TRY 250,000",
          "Growth, investment, governance and equity transactions."
        ],
        [
          "Branch",
          "No general minimum",
          "Extension of the foreign parent without separate legal personality."
        ],
        [
          "Liaison office",
          "No separate share capital",
          "Licensed non-commercial representation."
        ]
      ],
      "chart": "Minimum share capital for common company forms",
      "note": "Share capital is company funding, not a service charge. A JSC normally pays at least 25% before registration and the balance within 24 months; an LLC may pay its capital within 24 months. Regulated sectors may require higher amounts.",
      "flowTitle": "From business plan to operations",
      "steps": [
        "Activity and ownership review",
        "Legal form, address and articles",
        "Tax IDs, MERSIS and documents",
        "Trade registry incorporation",
        "Accounting, banking and licences",
        "Invoicing, recruitment and follow-up"
      ],
      "answers": [
        [
          "Which documents are required?",
          "Individual shareholders typically need a passport, certified translation and tax ID; corporate shareholders need registry evidence, resolutions, authority documents and other requested records. Foreign documents may need apostille or legalisation and certified translation. Suitable powers of attorney may allow parts of the process to be delegated."
        ],
        [
          "What does incorporation cost?",
          "A budget separates capital, registry and chamber charges, notary and translation fees, professional fees, premises, banking and licensing. Running costs include accounting, rent, insurance, payroll and taxes. We define the scope and cost items around the actual activity and city."
        ],
        [
          "How long does it take?",
          "The registry can process a complete incorporation in one day. Document preparation, certification, premises, banking and licences add time. Registration and operational readiness are different milestones."
        ],
        [
          "Can a foreign shareholder work in the company?",
          "Ownership does not automatically confer work or residence rights. Foreign working shareholders may need a work permit under specific criteria. We coordinate this with the founder's relocation."
        ],
        [
          "How do taxes and international payments work?",
          "The accountant reviews corporate income tax, VAT, payroll and filings, alongside tax treaties, transfer pricing, personal residency and cross-border services. A documented business plan supports the bank's own decision."
        ],
        [
          "Can you support a subsidiary and team move?",
          "We connect company formation with recruitment, contracts, offices and executive or employee relocation, with shared milestones for management."
        ]
      ],
      "related": "Corporate relocation in Türkiye",
      "sources": "Official sources: incorporation and share capital",
      "photoAlt": "Istanbul, location for business expansion"
    },
    "relocation": {
      "title": "Planning an international assignment: immigration and settling in",
      "intro": "Whether an executive is moving to Istanbul or a team is transferring to an industrial site, we coordinate the assignment with HR, the employee and their family, from work authorisation to daily life.",
      "headers": [
        "Situation",
        "Pathway",
        "Responsibilities"
      ],
      "rows": [
        [
          "Employee hired abroad",
          "Consular application then Turkish employer filing",
          "Employer and employee"
        ],
        [
          "Employee already in Türkiye",
          "Domestic application if eligible",
          "Employer and qualified professional"
        ],
        [
          "Short assignment or secondment",
          "Assess legal work-permit exemption or permit route",
          "Employer and qualified adviser"
        ],
        [
          "Spouse and children",
          "Individual eligible residence status and family documents",
          "Family and coordination team"
        ]
      ],
      "chart": "Administrative review is only one part of the timeline",
      "note": "The Labour Ministry states that a complete work permit application is reviewed within 30 days. Preparation, consular appointments and arrival are separate. A valid work permit generally serves as residence permission for its holder; dependants need their own status.",
      "flowTitle": "A mobility timeline aligned with HR",
      "steps": [
        "Assignment and contract brief",
        "Work and residence documents",
        "Housing, school and insurance in parallel",
        "Arrival and local appointments",
        "Start work and settle in",
        "Follow-up and renewals"
      ],
      "answers": [
        [
          "What must employers consider?",
          "General work-permit criteria include local employment and financial capacity; a five Turkish employees per foreign worker principle applies in certain cases, with exceptions. Conditional flexibility for eligible domestic applications at some small employers applies from 3 August 2026. We identify the applicable route with qualified professionals."
        ],
        [
          "Which documents should be ready?",
          "Passport, contract or assignment letter, qualifications when required, employer records, marriage and birth records. Apostilles and certified translations may be needed. A tailored checklist separates employee and dependant documents."
        ],
        [
          "What should a relocation budget cover?",
          "Immigration, professional fees, temporary accommodation, rent, deposit, shipment, schooling, insurance, transport and potential return costs. Employer planning should also consider payroll, social security and tax treatment of benefits."
        ],
        [
          "How do you select housing and schools?",
          "We consider workplace and school commutes, budget, lease conditions, transport, language, curriculum and admissions. Shortlisting is coordinated around the family's needs."
        ],
        [
          "Can you coordinate multiple employees?",
          "A consolidated brief tracks profiles, arrivals, family requirements, individual documents, employer steps, decisions and costs. Assistance is scoped per employee."
        ],
        [
          "What happens after arrival?",
          "We coordinate appointments, accommodation setup, practical necessities and remaining items, including renewal planning and reporting to HR."
        ]
      ],
      "related": "Establish a company in Türkiye",
      "sources": "Official sources: work and residence permits",
      "photoAlt": "Istanbul, destination for international employees"
    }
  },
  "ru": {
    "business": {
      "title": "Создание компании в Турции: ключевые решения",
      "intro": "Иностранный инвестор обычно может владеть всем капиталом турецкой компании, с учётом отраслевых ограничений. Bosphoras координирует регистрацию и запуск бизнеса с учётом деятельности, учредителей, банка и бюджета.",
      "headers": [
        "Форма",
        "Минимальный капитал",
        "Для каких задач"
      ],
      "rows": [
        [
          "Ltd. Şti. (аналог ООО)",
          "50 000 TRY",
          "Торговля, услуги, небольшой бизнес; от 1 до 50 участников."
        ],
        [
          "A.Ş. (акционерное общество)",
          "250 000 TRY",
          "Рост, привлечение инвесторов, корпоративное управление."
        ],
        [
          "Филиал",
          "Общего минимума нет",
          "Подразделение иностранной компании без отдельного юридического лица."
        ],
        [
          "Представительство",
          "Нет отдельного уставного капитала",
          "Некоммерческая деятельность при наличии разрешения."
        ]
      ],
      "chart": "Минимальный уставный капитал основных форм",
      "note": "Уставный капитал принадлежит компании и не является платой за услуги. Для A.Ş. обычно вносится не менее 25% до регистрации, остаток — в течение 24 месяцев. Для Ltd. Şti. капитал можно внести в течение 24 месяцев. Для регулируемых отраслей возможны более высокие требования.",
      "flowTitle": "От бизнес-плана к работе компании",
      "steps": [
        "Анализ деятельности и учредителей",
        "Форма, адрес и устав",
        "Налоговые номера, MERSİS и документы",
        "Торговый реестр",
        "Бухгалтерия, банк и лицензии",
        "Счета, найм и сопровождение"
      ],
      "answers": [
        [
          "Какие документы нужны?",
          "Физическому лицу — паспорт, заверенный перевод и налоговый номер; юридическому лицу — документы реестра, решение об учреждении, полномочия представителя и другие требуемые документы. Для иностранных документов могут потребоваться апостиль или легализация и заверенный перевод. Часть процедур можно поручить представителю."
        ],
        [
          "Сколько стоит регистрация?",
          "Бюджет разделяет капитал, сборы реестра и палаты, нотариуса, переводы, услуги специалистов, адрес и лицензии. Текущие расходы включают бухгалтерию, аренду, страхование, зарплату и налоги. Смета зависит от города и деятельности."
        ],
        [
          "Сколько времени занимает процесс?",
          "Реестр может зарегистрировать компанию за день при полном комплекте документов. Подготовка и заверение документов, адрес, банк и лицензии требуют отдельного времени."
        ],
        [
          "Можно ли работать в своей компании?",
          "Владение долей не даёт автоматически права на работу или проживание. Иностранному работающему учредителю может требоваться разрешение по специальным критериям."
        ],
        [
          "Как организовать налоги и международные платежи?",
          "Бухгалтер определяет обязательства по налогу на прибыль, НДС, зарплате и отчётности с учётом международных соглашений, налогового резидентства и трансграничных операций. Решение об открытии счёта принимает банк."
        ],
        [
          "Можно ли открыть филиал и перевести сотрудников?",
          "Мы связываем создание компании с наймом, офисом, договорами и переездом руководителей и сотрудников, согласуя этапы с руководством."
        ]
      ],
      "related": "Корпоративная релокация в Турцию",
      "sources": "Официальные источники: регистрация и капитал",
      "photoAlt": "Стамбул — город для развития бизнеса"
    },
    "relocation": {
      "title": "Международная релокация: работа, документы и адаптация",
      "intro": "Мы координируем переезд руководителей и команд в Стамбул и другие регионы Турции совместно с работодателем, HR, сотрудником и его семьёй.",
      "headers": [
        "Ситуация",
        "Порядок действий",
        "Ответственность"
      ],
      "rows": [
        [
          "Сотрудник за рубежом",
          "Обращение в консульство, затем заявление работодателя",
          "Работодатель и сотрудник"
        ],
        [
          "Сотрудник уже в Турции",
          "Подача внутри страны при соблюдении условий",
          "Работодатель и специалист"
        ],
        [
          "Краткая командировка",
          "Проверка необходимости разрешения или законного исключения",
          "Работодатель и консультант"
        ],
        [
          "Супруг и дети",
          "Собственное основание проживания и семейные документы",
          "Семья и координатор"
        ]
      ],
      "chart": "Рассмотрение заявления — лишь часть переезда",
      "note": "Министерство труда указывает срок рассмотрения полного заявления в 30 дней. Подготовка, консульские визиты и переезд в него не входят. Действующее разрешение на работу обычно заменяет ВНЖ для его владельца; членам семьи нужен собственный статус.",
      "flowTitle": "План переезда совместно с HR",
      "steps": [
        "Цель назначения и договор",
        "Документы для работы и проживания",
        "Жильё, школа и страхование параллельно",
        "Прибытие и местные процедуры",
        "Начало работы и адаптация",
        "Сопровождение и продление"
      ],
      "answers": [
        [
          "Что должен учитывать работодатель?",
          "Общие критерии разрешения на работу включают численность местных сотрудников и финансовые показатели. В ряде случаев действует правило пяти граждан Турции на одного иностранца с исключениями. С 3 августа 2026 года для отдельных внутренних заявлений малых работодателей действуют условные послабления. Применимый порядок уточняется со специалистами."
        ],
        [
          "Какие документы подготовить?",
          "Паспорт, трудовой договор или письмо о назначении, дипломы при необходимости, документы компании, свидетельства о браке и рождении. Могут требоваться апостили и заверенные переводы. Для каждого члена семьи составляется отдельный перечень."
        ],
        [
          "Как рассчитать бюджет?",
          "Иммиграционные процедуры, услуги специалистов, временное жильё, аренда, депозит, перевозка вещей, школа, страхование, транспорт и возможный возврат. Для работодателя также важны зарплата, социальные взносы и налогообложение компенсаций."
        ],
        [
          "Как выбрать жильё и школу?",
          "Учитываем дорогу до работы и школы, бюджет, договор аренды, транспорт, язык обучения, программу и условия приёма."
        ],
        [
          "Можно ли организовать переезд группы сотрудников?",
          "Единый план фиксирует даты, состав семей, документы, действия работодателя, расходы и нерешённые вопросы. Объём поддержки определяется по каждому сотруднику."
        ],
        [
          "Что происходит после приезда?",
          "Координация встреч, обустройство жилья, подключение услуг, контроль оставшихся вопросов и планирование продлений с отчётностью для HR."
        ]
      ],
      "related": "Создание компании в Турции",
      "sources": "Официальные источники: работа и проживание",
      "photoAlt": "Стамбул — место назначения иностранных сотрудников"
    }
  },
  "ar": {
    "business": {
      "title": "تأسيس شركة في تركيا: القرارات الأساسية",
      "intro": "يمكن للمستثمر الأجنبي عموماً امتلاك كامل رأس مال الشركة التركية مع مراعاة القيود الخاصة ببعض القطاعات. تنسّق بوسفوراس تأسيس الشركة وإطلاق نشاطها وفقاً للمشروع والشركاء والاحتياجات المصرفية والميزانية.",
      "headers": [
        "الشكل القانوني",
        "الحد الأدنى لرأس المال",
        "الاستخدام المناسب"
      ],
      "rows": [
        [
          "Ltd. Şti. شركة محدودة المسؤولية",
          "50,000 ليرة تركية",
          "التجارة والخدمات والمشاريع الصغيرة والمتوسطة؛ من شريك إلى 50 شريكاً."
        ],
        [
          "A.Ş. شركة مساهمة",
          "250,000 ليرة تركية",
          "النمو واستقطاب المستثمرين والحوكمة ونقل الأسهم."
        ],
        [
          "فرع شركة أجنبية",
          "لا يوجد حد أدنى عام",
          "امتداد للشركة الأم دون شخصية قانونية مستقلة."
        ],
        [
          "مكتب تمثيل",
          "لا يوجد رأس مال مستقل",
          "تمثيل غير تجاري بموجب ترخيص."
        ]
      ],
      "chart": "الحد الأدنى لرأس مال الشكلين الشائعين",
      "note": "رأس المال ملك للشركة وليس رسوماً للخدمة. في الشركة المساهمة يُدفع عادةً 25% على الأقل قبل التسجيل والباقي خلال 24 شهراً، بينما يمكن دفع رأس مال الشركة المحدودة خلال 24 شهراً. قد تفرض القطاعات المنظمة متطلبات أعلى.",
      "flowTitle": "من فكرة المشروع إلى بدء النشاط",
      "steps": [
        "دراسة النشاط والشركاء",
        "اختيار الشكل والعنوان والنظام الأساسي",
        "الأرقام الضريبية ونظام MERSİS والوثائق",
        "التسجيل التجاري",
        "المحاسبة والبنك والتراخيص",
        "الفوترة والتوظيف والمتابعة"
      ],
      "answers": [
        [
          "ما الوثائق المطلوبة؟",
          "يحتاج الشريك الفرد عادة إلى جواز سفر وترجمة مصدقة ورقم ضريبي. وتحتاج الشركة الأجنبية إلى وثائق التسجيل وقرار التأسيس والتفويض والوثائق الأخرى المطلوبة. وقد يلزم التصديق أو الأبوستيل والترجمة المعتمدة. ويمكن تفويض بعض الإجراءات بموجب وكالة مناسبة."
        ],
        [
          "كم تكلفة تأسيس الشركة؟",
          "نفصل بين رأس المال ورسوم السجل والغرفة والتوثيق والترجمة وأتعاب المختصين والمقر والتراخيص. وتضاف إلى ميزانية التشغيل المحاسبة والإيجار والتأمين والرواتب والضرائب. تتحدد التكلفة وفق المدينة وطبيعة النشاط."
        ],
        [
          "كم يستغرق التأسيس؟",
          "قد يُنجز التسجيل في يوم واحد بعد اكتمال الملف، لكن إعداد الوثائق والتصديقات والعنوان والحساب المصرفي والتراخيص يحتاج إلى وقت منفصل."
        ],
        [
          "هل يستطيع الشريك الأجنبي العمل في شركته؟",
          "امتلاك الحصص لا يمنح تلقائياً حق العمل أو الإقامة. قد يحتاج الشريك العامل إلى تصريح عمل وفق شروط خاصة."
        ],
        [
          "كيف تُنظّم الضرائب والمدفوعات الدولية؟",
          "يحدد المحاسب التزامات ضريبة الأرباح والقيمة المضافة والرواتب والتصاريح مع مراعاة الاتفاقيات الضريبية والإقامة والمعاملات العابرة للحدود. القرار المصرفي مستقل."
        ],
        [
          "هل يمكن تأسيس فرع ونقل فريق العمل؟",
          "نربط تأسيس الشركة بالتوظيف والعقود والمكاتب وانتقال المديرين والموظفين ضمن خطة مشتركة مع الإدارة."
        ]
      ],
      "related": "خدمات انتقال الموظفين والشركات إلى تركيا",
      "sources": "المصادر الرسمية: تأسيس الشركة ورأس المال",
      "photoAlt": "إسطنبول، وجهة لتأسيس الأعمال"
    },
    "relocation": {
      "title": "التخطيط للانتقال الدولي: العمل والإقامة والاستقرار",
      "intro": "سواء كان الانتقال لمدير تنفيذي إلى إسطنبول أو لفريق إلى منشأة صناعية، ننسق المشروع مع الموارد البشرية والموظف وأسرته من إجراءات العمل إلى الاستقرار اليومي.",
      "headers": [
        "الحالة",
        "الإجراء",
        "المسؤولية"
      ],
      "rows": [
        [
          "موظف خارج تركيا",
          "طلب لدى القنصلية ثم تقديم صاحب العمل في تركيا",
          "صاحب العمل والموظف"
        ],
        [
          "موظف داخل تركيا",
          "طلب داخلي عند استيفاء الشروط",
          "صاحب العمل والمختص"
        ],
        [
          "مهمة قصيرة أو إعارة",
          "تحديد الحاجة إلى تصريح أو إعفاء قانوني",
          "صاحب العمل والمستشار"
        ],
        [
          "الزوج أو الزوجة والأطفال",
          "وضع إقامة مستقل ووثائق عائلية",
          "الأسرة وفريق التنسيق"
        ]
      ],
      "chart": "مدة دراسة الطلب جزء من خطة الانتقال",
      "note": "تشير وزارة العمل إلى أن دراسة طلب تصريح العمل المكتمل تتم خلال 30 يوماً. ولا يشمل ذلك التحضير والمواعيد القنصلية والقدوم. ويُعد تصريح العمل الساري عادةً بديلاً عن تصريح الإقامة لحامله، بينما يحتاج أفراد الأسرة إلى وضع إقامة خاص بهم.",
      "flowTitle": "خطة انتقال منسقة مع الموارد البشرية",
      "steps": [
        "تحديد المهمة والعقد",
        "وثائق العمل والإقامة",
        "السكن والمدرسة والتأمين بالتوازي",
        "القدوم والإجراءات المحلية",
        "بدء العمل والاستقرار",
        "المتابعة والتجديد"
      ],
      "answers": [
        [
          "ما الالتزامات التي يراجعها صاحب العمل؟",
          "تشمل الشروط العامة لتصريح العمل التوظيف المحلي والقدرة المالية. تنطبق في حالات معينة قاعدة خمسة موظفين أتراك لكل أجنبي مع وجود استثناءات. ومن 3 أغسطس 2026 توجد تسهيلات مشروطة لبعض الطلبات الداخلية لدى المنشآت الصغيرة. نحدد المسار المناسب مع المختصين."
        ],
        [
          "ما الوثائق التي تُجهز قبل السفر؟",
          "جواز السفر وعقد العمل أو خطاب التكليف والمؤهلات عند الحاجة ووثائق الشركة وشهادات الزواج والميلاد. قد يلزم التصديق والترجمة المعتمدة. نحدد وثائق كل فرد من الأسرة."
        ],
        [
          "ما عناصر ميزانية الانتقال؟",
          "إجراءات الهجرة وأتعاب المختصين والسكن المؤقت والإيجار والتأمين النقدي ونقل الأمتعة والمدرسة والتأمين والمواصلات والعودة المحتملة. ويراعي صاحب العمل الرواتب والضمان الاجتماعي والمعالجة الضريبية للمزايا."
        ],
        [
          "كيف نختار السكن والمدرسة؟",
          "نقارن زمن التنقل إلى العمل والمدرسة والميزانية وشروط الإيجار والمواصلات ولغة الدراسة والمنهج والقبول."
        ],
        [
          "هل تنسقون انتقال عدة موظفين؟",
          "تجمع الخطة تواريخ الوصول ومتطلبات الأسر والملفات الفردية وإجراءات صاحب العمل والتكاليف والقرارات المعلقة. ويُحدد نطاق الدعم لكل موظف."
        ],
        [
          "ماذا بعد الوصول؟",
          "ننسق المواعيد وتجهيز السكن والخدمات الأساسية وإغلاق النقاط المتبقية والتخطيط للتجديدات والمتابعة مع الموارد البشرية."
        ]
      ],
      "related": "تأسيس شركة في تركيا",
      "sources": "المصادر الرسمية: تصاريح العمل والإقامة",
      "photoAlt": "إسطنبول، وجهة للموظفين الدوليين"
    }
  }
};
