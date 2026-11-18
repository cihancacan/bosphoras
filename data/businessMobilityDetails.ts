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
          "Détenir des parts et exercer une activité professionnelle sont deux questions différentes. Le permis de travail du dirigeant étranger obéit à des critères spécifiques ; une création de société ne donne pas automatiquement un droit de travail ni un titre de séjour. Nous coordonnons ce volet avec la mobilité du fondateur. Pour un associé étranger qui souhaite travailler dans une société relevant de la comptabilité au bilan, les critères généraux prévoient une participation d’au moins 20 %, un apport personnel de 500 000 TRY minimum et un capital libéré total d’au moins 500 000 TRY. L’emploi de cinq citoyens turcs est exigé à partir du septième mois du premier permis. Un associé détenant une part de capital d’au moins 100 000 USD bénéficie d’une exemption de ces critères précis, sans garantie de permis. Il existe d’autres exceptions individuelles."
        ],
        [
          "Comment organiser la fiscalité et les flux internationaux ?",
          "Le cabinet comptable doit déterminer les obligations de TVA, d’impôt sur les bénéfices, de paie et de déclaration. Les conventions fiscales, les prix de transfert, la résidence du dirigeant et les prestations transfrontalières influencent le résultat. Un business plan de trésorerie et des preuves d’activité facilitent le dossier bancaire, sans garantir son acceptation. En novembre 2026, le taux ordinaire d’impôt sur les sociétés est de 25 % (30 % pour les entreprises financières concernées). La TVA de droit commun est de 20 %, avec des taux de 10 % et 1 % pour certaines opérations. Les entreprises exportatrices éligibles peuvent bénéficier d’une réduction de cinq points sur les bénéfices d’exportation ; un impôt minimum domestique de 10 % peut aussi s’appliquer selon les règles de calcul. Les exonérations et incitations ne sont pas automatiques."
        ],
        [
          "Puis-je ouvrir une filiale ou transférer mon équipe ?",
          "Pour un groupe étranger, nous relions l’ouverture d’une filiale ou d’une succursale au recrutement, aux contrats, à l’espace de travail et à la mobilité des cadres. Un calendrier commun permet à la direction de suivre les dépendances et les décisions."
        ],
        [
          "Domicilier sa société à Istanbul ou ailleurs en Turquie",
          "L’adresse du siège doit correspondre à une solution admissible pour l’activité : bureau, local commercial ou domiciliation appropriée. Pour une activité physique, vérifier autorisations municipales, bail, destination des lieux et obligations sectorielles avant de signer. Nous coordonnons les recherches et le dossier avec les professionnels locaux."
        ],
        [
          "Exemple : entrepreneur international en solo",
          "Un consultant souhaitant facturer des clients étrangers étudie d’abord la Ltd. Şti., son lieu de résidence, la TVA sur les prestations et la banque. S’il souhaite travailler en Turquie, le capital minimal de constitution ne suffit pas nécessairement au permis de travail. Le plan financier doit différencier capital, frais de départ et trésorerie disponible."
        ],
        [
          "Exemple : groupe étranger ouvrant une filiale",
          "Une entreprise qui veut employer des commerciaux et des ingénieurs doit comparer A.Ş., Ltd. Şti. et succursale, préciser les pouvoirs de signature et organiser les contrats intragroupe, la paie, les assurances, les locaux et les permis. Nous construisons le calendrier d’implantation avec le siège."
        ],
        [
          "Que se passe-t-il après l’immatriculation ?",
          "Le lancement comprend les accès fiscaux et comptables, les livres et registres requis, le suivi des factures électroniques si applicable, les déclarations, la paie et les décisions des associés. Nous coordonnons le passage de la constitution au fonctionnement quotidien."
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
          "Pour une société nouvelle relevant de la comptabilité au bilan, le capital libéré requis en principe est de 500 000 TRY. Une société déjà établie peut satisfaire au critère financier avec ce capital, ou 8 millions TRY de ventes nettes, ou 150 000 USD d’exportations. La règle générale d’emploi est de cinq citoyens turcs par étranger ; les entreprises réalisant au moins 50 millions TRY de ventes nettes peuvent être exemptées de ce critère pour cinq étrangers. Depuis le 3 août 2026, une dispense des critères d’emploi et financiers peut aussi concerner jusqu’à trois demandeurs internes ayant séjourné légalement au moins un an sur les trois années précédentes sous un statut éligible, sous conditions d’effectifs. Des règles sectorielles et personnelles distinctes existent."
        ],
        [
          "Quels documents préparer avant le départ ?",
          "Passeport, contrat ou lettre de mission, diplômes si nécessaires, pièces employeur, état civil et certificats des enfants ; selon le dossier, apostilles ou traductions certifiées. Le conjoint peut avoir besoin d’une procédure distincte. Nous établissons une liste nominative et un calendrier des pièces."
        ],
        [
          "Comment calculer un budget de relocation ?",
          "Séparer immigration et honoraires, logements temporaires et loyers, dépôt de garantie, déménagement, école, assurance, transport et éventuels frais de retour. Pour le budget employeur, ajouter paie, protection sociale et traitement fiscal des avantages. Nous présentons le périmètre et les postes de coût avant engagement. En 2026, le droit officiel d’un permis de travail à durée déterminée jusqu’à un an s’élève à 12 574,90 TRY, auquel s’ajoute 964 TRY pour le document sécurisé. Ces montants ne comprennent pas les traductions, les éventuels frais consulaires ou l’accompagnement. Ils évoluent chaque année."
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
        ],
        [
          "Relocation à Istanbul : où installer un cadre expatrié ?",
          "Levent et Maslak concentrent les bureaux et offrent des accès au métro M2 ; Nişantaşı et Şişli permettent une vie urbaine centrale ; Etiler et Ulus sont des options résidentielles proches des pôles d’affaires ; Zekeriyaköy et Sarıyer peuvent convenir aux familles recherchant davantage d’espace, à condition d’évaluer les trajets. Sur la rive asiatique, considérer Kadıköy, Ataşehir ou Üsküdar selon le bureau. Le choix dépend du trajet réel plutôt que du prestige du quartier."
        ],
        [
          "Écoles internationales et rentrée des enfants",
          "Parmi les établissements à étudier figurent le lycée Pierre Loti pour le cursus français, Istanbul International Community School et British International School Istanbul pour des parcours internationaux. Admissions, disponibilité, frais et conditions d’accès dépendent de l’établissement. Nous coordonnons la présélection et les démarches en fonction de l’âge, du cursus, de la langue et du domicile."
        ],
        [
          "Exemple : directeur transféré avec sa famille",
          "Le service RH fixe une date cible tandis que le collaborateur précise ses besoins. Le parcours de travail est étudié en premier ; la recherche de logement et d’école avance en parallèle. Les engagements non remboursables sont planifiés en fonction des autorisations. À l’arrivée, les services essentiels et le suivi familial sont coordonnés."
        ],
        [
          "Exemple : transfert d’une équipe technique",
          "Pour une équipe affectée à Bursa ou Kocaeli, nous distinguons chaque dossier de travail, le transport vers le site, les contrats de location, les besoins de traduction et le reporting centralisé. Un dossier par salarié et un calendrier consolidé limitent les démarches répétitives."
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
          "Ownership does not automatically confer work or residence rights. Foreign working shareholders may need a work permit under specific criteria. We coordinate this with the founder's relocation. For a foreign working shareholder in a business using balance-sheet accounting, the general criteria require at least 20% ownership, a personal capital contribution of at least TRY 500,000 and total paid-up company capital of at least TRY 500,000. Five Turkish citizens must generally be employed from month seven of the first permit. A capital share of USD 100,000 or more exempts the shareholder from these specific criteria, not from obtaining a permit. Other individual exceptions exist."
        ],
        [
          "How do taxes and international payments work?",
          "The accountant reviews corporate income tax, VAT, payroll and filings, alongside tax treaties, transfer pricing, personal residency and cross-border services. A documented business plan supports the bank's own decision. As of November 2026, the standard corporate income tax rate is 25% (30% for relevant financial-sector companies). Standard VAT is 20%, with 10% and 1% rates for certain supplies. Eligible export profits may benefit from a five-percentage-point reduction; a domestic minimum corporate tax of 10% may also apply under its specific calculation rules. Incentives are not automatic."
        ],
        [
          "Can you support a subsidiary and team move?",
          "We connect company formation with recruitment, contracts, offices and executive or employee relocation, with shared milestones for management."
        ],
        [
          "Registered address and business premises",
          "Select premises compatible with the activity, including permitted offices, commercial premises or appropriate registered-address services. Check lease use, municipal and sector licensing before committing."
        ],
        [
          "Example: independent international consultant",
          "A solo consultant should assess an LLC, personal tax residency, cross-border VAT and banking. If working locally, incorporation capital alone may not satisfy work-permit criteria. Separate capital, setup costs and working cash."
        ],
        [
          "Example: foreign group opening a subsidiary",
          "Compare a JSC, LLC and branch; define signature powers, intercompany contracts, payroll, premises and work permits before the launch."
        ],
        [
          "After registration",
          "Arrange tax and accounting access, statutory records, e-invoicing where required, filings, payroll and shareholder decisions. We coordinate operational launch."
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
          "Under the general balance-sheet accounting criteria, a new company needs TRY 500,000 paid-up capital. An established business can qualify with that capital, TRY 8 million net sales or USD 150,000 exports. Five Turkish employees per foreign worker is the general rule; businesses with at least TRY 50 million net sales can be exempt for up to five foreigners. From 3 August 2026, up to three qualifying domestic applicants with at least one year of lawful eligible residence in the preceding three years may be exempt from employment and financial criteria, subject to workforce conditions. Sector and personal exceptions also apply."
        ],
        [
          "Which documents should be ready?",
          "Passport, contract or assignment letter, qualifications when required, employer records, marriage and birth records. Apostilles and certified translations may be needed. A tailored checklist separates employee and dependant documents."
        ],
        [
          "What should a relocation budget cover?",
          "Immigration, professional fees, temporary accommodation, rent, deposit, shipment, schooling, insurance, transport and potential return costs. Employer planning should also consider payroll, social security and tax treatment of benefits. For 2026, the official fee for a fixed-term work permit of up to one year is TRY 12,574.90, plus TRY 964 for the secure certificate. Translation, potential consular costs and professional assistance are separate. Fees change annually."
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
        ],
        [
          "Where to live in Istanbul for an assignment?",
          "Levent and Maslak are business hubs on the M2 metro corridor. Nişantaşı and Şişli offer central urban living; Etiler and Ulus are residential options near business districts. Zekeriyaköy and Sarıyer offer more space but commuting matters. On the Asian side, consider Kadıköy, Ataşehir or Üsküdar according to the workplace."
        ],
        [
          "International schools",
          "Examples to consider include Lycée Pierre Loti, Istanbul International Community School and British International School Istanbul. Entry requirements, fees and availability are school-specific. We shortlist according to age, curriculum, language and commute."
        ],
        [
          "Example: executive and family move",
          "Agree the target date with HR, review the work-permit route, then coordinate housing and schooling in parallel. Non-refundable commitments should depend on authorisation milestones."
        ],
        [
          "Example: technical team transfer",
          "For a Bursa or Kocaeli assignment, track individual permit files, site transport, housing and translations against one consolidated HR schedule."
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
          "Владение долей не даёт автоматически права на работу или проживание. Иностранному работающему учредителю может требоваться разрешение по специальным критериям. Для иностранного работающего участника компании с балансовым учётом общие критерии предусматривают долю не менее 20%, личный вклад не менее 500 000 TRY и общий оплаченный капитал не менее 500 000 TRY. С седьмого месяца первого разрешения обычно требуется пять граждан Турции в штате. При доле капитала от 100 000 USD действует освобождение от этих конкретных критериев, но не от получения разрешения. Есть и другие индивидуальные исключения."
        ],
        [
          "Как организовать налоги и международные платежи?",
          "Бухгалтер определяет обязательства по налогу на прибыль, НДС, зарплате и отчётности с учётом международных соглашений, налогового резидентства и трансграничных операций. Решение об открытии счёта принимает банк. В ноябре 2026 года стандартная ставка налога на прибыль компаний составляет 25% (30% для соответствующих финансовых организаций). Основная ставка НДС — 20%, для отдельных операций действуют ставки 10% и 1%. Для соответствующей экспортной прибыли возможно снижение ставки на пять процентных пунктов; также может применяться внутренний минимальный налог 10% по специальным правилам расчёта. Льготы не предоставляются автоматически."
        ],
        [
          "Можно ли открыть филиал и перевести сотрудников?",
          "Мы связываем создание компании с наймом, офисом, договорами и переездом руководителей и сотрудников, согласуя этапы с руководством."
        ],
        [
          "Юридический адрес и офис",
          "Адрес должен соответствовать деятельности. До подписания договора проверяются назначение помещения, муниципальные и отраслевые разрешения."
        ],
        [
          "Пример: международный консультант",
          "Оценить ООО, личное налоговое резидентство, НДС международных услуг и банковский счёт. При работе в Турции минимального капитала регистрации может не хватить для разрешения. Отдельно планируются капитал, расходы и оборотные средства."
        ],
        [
          "Пример: дочерняя компания иностранной группы",
          "Сравнить ООО, АО и филиал, определить полномочия, внутригрупповые договоры, зарплату, офис и разрешения сотрудников."
        ],
        [
          "После регистрации",
          "Организовать бухгалтерию, доступ к налоговым системам, обязательные регистры, электронные счета при необходимости, отчётность и зарплату."
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
          "Для новой компании с балансовым учётом обычно требуется оплаченный капитал 500 000 TRY. Действующая компания может выполнить финансовый критерий этим капиталом, чистыми продажами от 8 млн TRY или экспортом от 150 000 USD. Общее правило — пять граждан Турции на одного иностранца; при чистых продажах от 50 млн TRY возможно освобождение для пяти иностранцев. С 3 августа 2026 года отдельное исключение действует для не более трёх заявителей внутри страны, проживавших законно не менее года за последние три года на подходящем основании, при соблюдении условий численности. Есть отраслевые и личные исключения."
        ],
        [
          "Какие документы подготовить?",
          "Паспорт, трудовой договор или письмо о назначении, дипломы при необходимости, документы компании, свидетельства о браке и рождении. Могут требоваться апостили и заверенные переводы. Для каждого члена семьи составляется отдельный перечень."
        ],
        [
          "Как рассчитать бюджет?",
          "Иммиграционные процедуры, услуги специалистов, временное жильё, аренда, депозит, перевозка вещей, школа, страхование, транспорт и возможный возврат. Для работодателя также важны зарплата, социальные взносы и налогообложение компенсаций. В 2026 году официальный сбор за срочное разрешение на работу сроком до одного года составляет 12 574,90 TRY, дополнительно взимается 964 TRY за бланк документа. Переводы, возможные консульские расходы и услуги специалистов оплачиваются отдельно. Сборы меняются ежегодно."
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
        ],
        [
          "Где жить в Стамбуле?",
          "Левент и Маслак — деловые районы вдоль метро M2, Нишанташы и Шишли — центральные районы. Этилер и Улус расположены рядом с деловыми центрами; Зекериякёй и Сарыер предлагают больше пространства, но важно время в пути. На азиатской стороне можно рассмотреть Кадыкёй, Аташехир или Ускюдар."
        ],
        [
          "Международные школы",
          "Можно изучить Lycée Pierre Loti, Istanbul International Community School и British International School Istanbul. Условия приёма, стоимость и места зависят от школы. Учитываем язык, программу и дорогу."
        ],
        [
          "Пример: переезд директора с семьёй",
          "Согласовать дату с HR, проверить право на работу, параллельно организовать жильё и школу. Невозвратные расходы планировать с учётом разрешений."
        ],
        [
          "Пример: перевод технической команды",
          "Для Бурсы или Коджаэли вести индивидуальные документы, транспорт до объекта, жильё, переводы и общий график для HR."
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
          "امتلاك الحصص لا يمنح تلقائياً حق العمل أو الإقامة. قد يحتاج الشريك العامل إلى تصريح عمل وفق شروط خاصة. بالنسبة للشريك الأجنبي العامل في شركة تخضع للمحاسبة على أساس الميزانية، تشترط المعايير العامة حصة لا تقل عن 20% ومساهمة شخصية لا تقل عن 500,000 ليرة ورأس مال مدفوع للشركة لا يقل عن 500,000 ليرة. ويشترط عادةً توظيف خمسة مواطنين أتراك ابتداءً من الشهر السابع للتصريح الأول. ويُعفى الشريك صاحب حصة رأسمالية تبلغ 100,000 دولار أو أكثر من هذه المعايير المحددة دون ضمان الحصول على التصريح. توجد استثناءات فردية أخرى."
        ],
        [
          "كيف تُنظّم الضرائب والمدفوعات الدولية؟",
          "يحدد المحاسب التزامات ضريبة الأرباح والقيمة المضافة والرواتب والتصاريح مع مراعاة الاتفاقيات الضريبية والإقامة والمعاملات العابرة للحدود. القرار المصرفي مستقل. في نوفمبر 2026 يبلغ المعدل العام لضريبة أرباح الشركات 25% و30% للشركات المالية المعنية. والمعدل العام لضريبة القيمة المضافة 20% مع معدلي 10% و1% لبعض المعاملات. وقد تستفيد أرباح التصدير المؤهلة من تخفيض خمس نقاط مئوية، كما قد تنطبق ضريبة محلية دنيا قدرها 10% وفق قواعد احتساب خاصة. الحوافز ليست تلقائية."
        ],
        [
          "هل يمكن تأسيس فرع ونقل فريق العمل؟",
          "نربط تأسيس الشركة بالتوظيف والعقود والمكاتب وانتقال المديرين والموظفين ضمن خطة مشتركة مع الإدارة."
        ],
        [
          "العنوان القانوني والمقر",
          "اختيار مقر مناسب للنشاط والتحقق من عقد الإيجار والاستخدام المسموح والتراخيص البلدية والقطاعية قبل الالتزام."
        ],
        [
          "مثال: مستشار دولي مستقل",
          "دراسة الشركة المحدودة والإقامة الضريبية وضريبة القيمة المضافة للخدمات الدولية والبنك. قد لا يكفي رأس مال التأسيس لتصريح العمل. يجب فصل رأس المال عن تكاليف التأسيس والسيولة."
        ],
        [
          "مثال: مجموعة أجنبية تؤسس شركة تابعة",
          "مقارنة الشركة المساهمة والمحدودة والفرع وتحديد صلاحيات التوقيع والعقود والرواتب والمقر والتصاريح."
        ],
        [
          "بعد التسجيل",
          "تنظيم المحاسبة والأنظمة الضريبية والسجلات والفوترة الإلكترونية عند انطباقها والإقرارات والرواتب."
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
          "تتطلب المعايير العامة للشركة الجديدة الخاضعة للمحاسبة على أساس الميزانية رأس مال مدفوعاً لا يقل عن 500,000 ليرة. ويمكن للشركة القائمة استيفاء الشرط المالي بهذا المبلغ أو بمبيعات صافية قدرها 8 ملايين ليرة أو صادرات بقيمة 150,000 دولار. والقاعدة العامة خمسة موظفين أتراك لكل أجنبي، مع إمكانية الإعفاء لخمسة أجانب لدى شركات تبلغ مبيعاتها الصافية 50 مليون ليرة على الأقل. ومن 3 أغسطس 2026 يمكن إعفاء ثلاثة متقدمين داخليين مؤهلين كحد أقصى ممن أقاموا قانونياً سنة على الأقل خلال السنوات الثلاث السابقة وفق وضع مؤهل، مع مراعاة شروط عدد العاملين. توجد استثناءات قطاعية وشخصية."
        ],
        [
          "ما الوثائق التي تُجهز قبل السفر؟",
          "جواز السفر وعقد العمل أو خطاب التكليف والمؤهلات عند الحاجة ووثائق الشركة وشهادات الزواج والميلاد. قد يلزم التصديق والترجمة المعتمدة. نحدد وثائق كل فرد من الأسرة."
        ],
        [
          "ما عناصر ميزانية الانتقال؟",
          "إجراءات الهجرة وأتعاب المختصين والسكن المؤقت والإيجار والتأمين النقدي ونقل الأمتعة والمدرسة والتأمين والمواصلات والعودة المحتملة. ويراعي صاحب العمل الرواتب والضمان الاجتماعي والمعالجة الضريبية للمزايا. في عام 2026 تبلغ الرسوم الرسمية لتصريح العمل محدد المدة حتى سنة واحدة 12,574.90 ليرة تركية، إضافة إلى 964 ليرة لإصدار الوثيقة المؤمنة. وهي لا تشمل الترجمة أو الرسوم القنصلية المحتملة أو أتعاب المختصين، وتتغير سنوياً."
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
        ],
        [
          "أين يسكن الموظف في إسطنبول؟",
          "ليفنت ومسلك منطقتان للأعمال على خط المترو M2. نيشانتاشي وشيشلي مناسبتان للحياة المركزية، وإتيلر وأولوس قريبتان من مراكز الأعمال. زكرياكوي وساريير توفران مساحة أوسع مع ضرورة تقييم التنقل. وفي الجانب الآسيوي يمكن دراسة كاديكوي وأتاشهير وأوسكودار حسب موقع العمل."
        ],
        [
          "المدارس الدولية",
          "من الخيارات للدراسة Lycée Pierre Loti وIstanbul International Community School وBritish International School Istanbul. تختلف شروط القبول والرسوم والمقاعد حسب المدرسة. نراعي اللغة والمنهج والعمر والمسافة."
        ],
        [
          "مثال: انتقال مدير مع أسرته",
          "تحديد الموعد مع الموارد البشرية ودراسة مسار تصريح العمل وتنظيم السكن والمدرسة بالتوازي. ترتبط الالتزامات غير القابلة للاسترداد بمراحل التصاريح."
        ],
        [
          "مثال: نقل فريق تقني",
          "في بورصة أو كوجالي، نتابع الملفات الفردية والنقل إلى موقع العمل والسكن والترجمة ضمن جدول موحد للموارد البشرية."
        ]
      ],
      "related": "تأسيس شركة في تركيا",
      "sources": "المصادر الرسمية: تصاريح العمل والإقامة",
      "photoAlt": "إسطنبول، وجهة للموظفين الدوليين"
    }
  }
};
export const mobilityEditorial = {
  "fr": {
    "sal": [
      "Rémunération brute minimale selon le poste — règles générales 2026",
      "Poste",
      "Multiple du SMIC brut",
      "Minimum mensuel (TRY)",
      "Cadres dirigeants et pilotes",
      "Ingénieurs et architectes",
      "Autres managers",
      "Fonctions nécessitant expertise ou qualification",
      "Autres fonctions",
      "Ces montants réglementaires ne sont ni des salaires de marché ni le coût employeur. Des critères particuliers et exemptions peuvent s’appliquer. Le SMIC brut 2026 est de 33 030 TRY."
    ],
    "cta": [
      "Parlons de votre implantation en Turquie",
      "Présentez votre activité, vos associés, la ville et la date de lancement. Nous définirons le parcours, les responsabilités et les postes de budget.",
      "Étudier mon projet d’entreprise",
      "Préparons la mobilité de vos équipes",
      "Indiquez le nombre de salariés, le lieu de travail, la date souhaitée et les besoins des familles. Nous cadrons le périmètre de mission avec vos RH.",
      "Organiser ma relocation"
    ],
    "photos": [
      "Galataport, quartier de Karaköy à Istanbul",
      "Avenue Abdi İpekçi, quartier de Nişantaşı à Istanbul",
      "Le Bosphore et le quartier d’Ortaköy à Istanbul"
    ],
    "faq": "Questions pratiques et cas concrets"
  },
  "en": {
    "sal": [
      "Minimum gross pay by role — general 2026 criteria",
      "Role",
      "Gross minimum wage multiple",
      "Monthly minimum (TRY)",
      "Senior executives and pilots",
      "Engineers and architects",
      "Other managers",
      "Specialist or skilled roles",
      "Other roles",
      "These regulatory thresholds are not market salaries or total employer costs. Specific criteria and exemptions may apply. The 2026 gross minimum wage is TRY 33,030."
    ],
    "cta": [
      "Let's plan your business in Türkiye",
      "Share your activity, shareholders, location and target launch date so we can define the scope and budget.",
      "Discuss my company setup",
      "Plan your team's relocation",
      "Share headcount, workplace, target arrival and family needs so we can scope the assignment with HR.",
      "Plan my relocation"
    ],
    "photos": [
      "Galataport, Karaköy district in Istanbul",
      "Abdi İpekçi Avenue in Nişantaşı, Istanbul",
      "Bosphorus waterfront in Ortaköy, Istanbul"
    ],
    "faq": "Practical questions and examples"
  },
  "ru": {
    "sal": [
      "Минимальная зарплата брутто по должности — общие критерии 2026",
      "Должность",
      "Кратность МРОТ брутто",
      "Минимум в месяц (TRY)",
      "Высшие руководители и пилоты",
      "Инженеры и архитекторы",
      "Другие руководители",
      "Квалифицированные специалисты",
      "Другие должности",
      "Это нормативные пороги, не рыночные зарплаты и не полная стоимость работодателя. Возможны специальные критерии и исключения. МРОТ брутто в 2026 году — 33 030 TRY."
    ],
    "cta": [
      "Запланируем открытие бизнеса в Турции",
      "Расскажите о деятельности, учредителях, городе и дате запуска.",
      "Обсудить создание компании",
      "Подготовим переезд вашей команды",
      "Укажите сотрудников, место работы, сроки и потребности семей.",
      "Организовать переезд"
    ],
    "photos": [
      "Галатапорт, район Каракёй в Стамбуле",
      "Улица Абди Ипекчи в Нишанташы, Стамбул",
      "Босфор и район Ортакёй, Стамбул"
    ],
    "faq": "Практические вопросы и примеры"
  },
  "ar": {
    "sal": [
      "الحد الأدنى للأجر الإجمالي حسب الوظيفة — المعايير العامة لعام 2026",
      "الوظيفة",
      "مضاعف الحد الأدنى الإجمالي",
      "الحد الشهري بالليرة التركية",
      "كبار المديرين والطيارون",
      "المهندسون والمعماريون",
      "المديرون الآخرون",
      "الوظائف التخصصية والمهارية",
      "الوظائف الأخرى",
      "هذه حدود تنظيمية وليست رواتب السوق أو التكلفة الكاملة لصاحب العمل. قد توجد شروط خاصة وإعفاءات. الحد الأدنى الإجمالي للأجر في 2026 هو 33,030 ليرة."
    ],
    "cta": [
      "لنخطط لتأسيس شركتك في تركيا",
      "شاركنا النشاط والشركاء والمدينة وموعد الإطلاق لتحديد نطاق العمل والميزانية.",
      "ناقش مشروع تأسيس شركتك",
      "لنخطط لانتقال فريقك",
      "شارك عدد الموظفين وموقع العمل والموعد واحتياجات الأسر.",
      "خطط لانتقالك"
    ],
    "photos": [
      "غالاطابورت في حي كاراكوي بإسطنبول",
      "شارع عبدي إيبكجي في نيشانتاشي بإسطنبول",
      "البوسفور وحي أورتاكوي في إسطنبول"
    ],
    "faq": "أسئلة عملية وأمثلة"
  }
};
