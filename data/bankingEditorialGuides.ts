import type { Locale } from '@/lib/i18n';
import type { EditorialGuide } from './highPotentialEditorialGuides';
export const bankingEditorialGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "turkey-bank-account-non-resident": {
    "fr": {
      "title": "Ouvrir un compte bancaire en Turquie sans résidence en 2026 : documents et frais",
      "metaDescription": "Compte turc non-résident : passeport, numéro fiscal, adresse, ouverture en agence, devises et garantie des dépôts de 1,2 million TL.",
      "shortAnswer": "Un non-résident peut demander un compte bancaire turc sans ikamet auprès d'un établissement qui accepte son profil. Le numéro fiscal et le passeport ne garantissent pas l'accord de la banque.",
      "bosphorasHelp": "Bosphoras coordonne la préparation de votre projet d'installation, vos rendez-vous bancaires et les échanges avec des professionnels indépendants. Demandez un accompagnement avant votre déplacement ; nous ne sommes ni une banque ni un intermédiaire financier et aucune ouverture n'est garantie.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Documents pour la première visite",
          "body": "İşbank publie une liste comprenant un passeport valide délivré depuis moins de dix ans ou un titre de séjour valide, un identifiant étranger ou fiscal et une preuve d'adresse. Une adresse figurant au passeport peut être acceptée si applicable. La banque peut réclamer des traductions, un numéro mobile, une preuve de résidence fiscale, des relevés et l'objet du compte.",
          "table": {
            "headers": [
              "Document",
              "Utilité"
            ],
            "rows": [
              [
                "Passeport",
                "Identité"
              ],
              [
                "Identifiant fiscal turc ou étranger résident",
                "Identification turque"
              ],
              [
                "Justificatif d'adresse",
                "Domicile réel"
              ],
              [
                "Justificatifs de revenus et fonds",
                "Conformité et profil"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Obtenir le numéro fiscal et préparer le rendez-vous",
          "body": "La GİB propose un formulaire de numéro fiscal potentiel aux étrangers ; renseignez exactement les données du passeport et conservez le résultat. Si vous possédez déjà un identifiant étranger, vérifiez celui à utiliser. Demandez une liste écrite à l'agence avant de réserver votre déplacement. Une procuration n'est envisageable qu'avec l'accord préalable de l'établissement et les formalités appropriées."
        },
        {
          "id": "bank-3",
          "title": "Protection des dépôts en Turquie",
          "body": "Le TMSF couvre les dépôts admissibles en livres, devises et métaux précieux dans les agences turques, intérêts compris dans le plafond. En 2026 la garantie est de 1,2 million TL par personne et établissement, pas par compte ni par devise. Les exclusions légales et le risque de change restent applicables.",
          "table": {
            "headers": [
              "Année",
              "Plafond TMSF (TL)"
            ],
            "rows": [
              [
                "2023",
                "400 000"
              ],
              [
                "2024",
                "650 000"
              ],
              [
                "2025",
                "950 000"
              ],
              [
                "2026",
                "1 200 000"
              ]
            ]
          }
        },
        {
          "id": "bank-4",
          "title": "Activer et tester les services",
          "body": "Avant tout transfert important, vérifiez l'IBAN, la devise, les frais entrants et sortants, l'application mobile, l'authentification depuis l'étranger et les limites. Une carte bancaire, un compte en euros et les virements internationaux ne sont pas forcément inclus. Confirmez les conditions avant de souscrire un dépôt à terme et conservez les documents d'ouverture."
        },
        {
          "id": "bank-5",
          "title": "Résidence fiscale et tenue des comptes",
          "body": "Déclarez à la banque vos résidences fiscales réelles et leurs numéros fiscaux. Si vous restez résident français, le compte bancaire turc doit en principe être déclaré via 3916 avec la déclaration annuelle. Ne prenez pas l'ouverture du compte comme preuve de résidence fiscale turque ou d'éligibilité à l'article 20/D."
        }
      ],
      "faqs": [
        {
          "question": "Un touriste peut-il ouvrir un compte ?",
          "answer": "Certaines banques acceptent les non-résidents ; la décision est individuelle."
        },
        {
          "question": "Faut-il déposer une somme minimale ?",
          "answer": "Il n'existe pas de seuil universel garanti ; demandez les conditions du produit et de l'agence."
        },
        {
          "question": "La garantie est-elle par compte ?",
          "answer": "Non, elle s'applique aux dépôts éligibles cumulés par personne et établissement."
        }
      ],
      "sources": [
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank : ouverture de compte"
        },
        {
          "href": "https://dijital.gib.gov.tr/foreigners/kimlikNoBasvuru",
          "label": "GİB : numéro fiscal des étrangers"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500 : ouverture de compte"
        },
        {
          "href": "https://www.tmsf.org.tr/en/Tmsf/Finansman/mevduat.sss.guncel.en",
          "label": "TMSF : garantie des dépôts"
        },
        {
          "href": "https://www.isbank.com.tr/urun-ve-hizmet-ucretleri",
          "label": "İşbank : tarifs 2026"
        }
      ]
    },
    "en": {
      "title": "Open a Turkish bank account as a non-resident in 2026: documents and fees",
      "metaDescription": "Non-resident Turkish account: passport, tax number, address, branch appointment, currencies and TRY 1.2 million deposit insurance.",
      "shortAnswer": "A non-resident may apply without an ikamet at a bank that accepts their profile. A Turkish tax number and passport do not guarantee approval.",
      "bosphorasHelp": "Bosphoras coordinates relocation planning, bank appointments and introductions to independent professionals. Request assistance before travelling. We are not a bank or financial intermediary and cannot guarantee account approval.",
      "sections": [
        {
          "id": "bank-1",
          "title": "First appointment documents",
          "body": "İşbank lists a valid passport issued within ten years or a valid residence permit, foreigner identification or tax identification number and address evidence. A passport address may be accepted where applicable. Additional translations, mobile details, tax residence evidence, statements and account purpose may be required.",
          "table": {
            "headers": [
              "Document",
              "Purpose"
            ],
            "rows": [
              [
                "Passport",
                "Identity"
              ],
              [
                "Turkish tax or foreigner ID number",
                "Local identification"
              ],
              [
                "Address evidence",
                "Actual residence"
              ],
              [
                "Income and funds evidence",
                "Due diligence"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Tax number and branch appointment",
          "body": "GİB provides an online potential tax number application for foreigners. Match passport details exactly and retain the result. If you already hold a foreigner ID number, confirm which identifier to use. Request a written checklist before travelling. Representative opening requires prior bank approval and suitable formalities."
        },
        {
          "id": "bank-3",
          "title": "Deposit insurance in Türkiye",
          "body": "TMSF covers eligible domestic-branch deposits in TRY, foreign currency and precious metals, including interest within the limit. In 2026 the cap is TRY 1.2 million per person per institution, not per account or currency. Statutory exclusions and exchange risk remain.",
          "table": {
            "headers": [
              "Year",
              "TMSF limit (TRY)"
            ],
            "rows": [
              [
                "2023",
                "400,000"
              ],
              [
                "2024",
                "650,000"
              ],
              [
                "2025",
                "950,000"
              ],
              [
                "2026",
                "1,200,000"
              ]
            ]
          }
        },
        {
          "id": "bank-4",
          "title": "Activate and test services",
          "body": "Confirm IBAN, currency, incoming and outgoing fees, mobile access, authentication abroad and limits before a large transfer. Cards, euro accounts and international transfers may not automatically be included. Check term-deposit conditions and retain opening documents."
        },
        {
          "id": "bank-5",
          "title": "Tax residence and reporting",
          "body": "Provide actual tax residences and tax IDs. French tax residents generally declare a Turkish account using form 3916 with the annual return. A bank account does not itself establish Turkish tax residence or Article 20/D eligibility."
        }
      ],
      "faqs": [
        {
          "question": "Can a visitor open an account?",
          "answer": "Some banks accept non-residents; approval is individual."
        },
        {
          "question": "Is a minimum deposit mandatory?",
          "answer": "There is no universal guaranteed minimum; ask about the branch and product."
        },
        {
          "question": "Is insurance per account?",
          "answer": "No, eligible deposits are aggregated per person and institution."
        }
      ],
      "sources": [
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank account opening"
        },
        {
          "href": "https://dijital.gib.gov.tr/foreigners/kimlikNoBasvuru",
          "label": "GİB foreigner tax number"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500 account opening"
        },
        {
          "href": "https://www.tmsf.org.tr/en/Tmsf/Finansman/mevduat.sss.guncel.en",
          "label": "TMSF deposit insurance"
        },
        {
          "href": "https://www.isbank.com.tr/urun-ve-hizmet-ucretleri",
          "label": "İşbank 2026 tariff"
        }
      ]
    },
    "ru": {
      "title": "Банковский счёт в Турции для нерезидента 2026: документы и тарифы",
      "metaDescription": "Открытие счёта без ВНЖ: паспорт, налоговый номер, адрес, визит в банк и страхование вкладов до 1,2 млн лир.",
      "shortAnswer": "Нерезидент может подать заявку без икамета в банк, принимающий его профиль. Паспорт и налоговый номер не гарантируют одобрения.",
      "bosphorasHelp": "Bosphoras помогает подготовить переезд, организовать визиты в банки и встречи с независимыми специалистами. Запросите сопровождение заранее. Мы не банк и не финансовый посредник и не гарантируем открытие счёта.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Документы для визита",
          "body": "İşbank указывает действующий загранпаспорт, выданный менее десяти лет назад, или ВНЖ, идентификатор иностранца либо налоговый номер и подтверждение адреса. Адрес в паспорте может приниматься в соответствующих случаях. Банк вправе запросить переводы, телефон, налоговое резидентство, выписки и цель счёта.",
          "table": {
            "headers": [
              "Документ",
              "Назначение"
            ],
            "rows": [
              [
                "Загранпаспорт",
                "Личность"
              ],
              [
                "Турецкий налоговый номер или ID иностранца",
                "Идентификация"
              ],
              [
                "Подтверждение адреса",
                "Фактический адрес"
              ],
              [
                "Доходы и средства",
                "Проверка клиента"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Налоговый номер и запись",
          "body": "У GİB есть электронная заявка на потенциальный налоговый номер иностранца. Укажите точные паспортные данные и сохраните результат. При наличии ID иностранца уточните нужный номер. Запросите письменный список документов до поездки. Оформление по доверенности требует согласия банка и надлежащих формальностей."
        },
        {
          "id": "bank-3",
          "title": "Страхование вкладов",
          "body": "TMSF покрывает подходящие вклады в лирах, валюте и драгоценных металлах в турецких отделениях, включая проценты в пределах лимита. В 2026 году лимит 1,2 млн лир на человека в одном учреждении, а не на каждый счёт. Действуют исключения и валютный риск.",
          "table": {
            "headers": [
              "Год",
              "Лимит TMSF (лиры)"
            ],
            "rows": [
              [
                "2023",
                "400 000"
              ],
              [
                "2024",
                "650 000"
              ],
              [
                "2025",
                "950 000"
              ],
              [
                "2026",
                "1 200 000"
              ]
            ]
          }
        },
        {
          "id": "bank-4",
          "title": "Активация и проверка",
          "body": "Перед крупным переводом проверьте IBAN, валюту, входящие и исходящие комиссии, приложение и подтверждение операций за рубежом. Карта, счёт в евро и международные платежи не всегда включены. Проверьте условия срочного вклада и сохраните документы."
        },
        {
          "id": "bank-5",
          "title": "Налоговое резидентство",
          "body": "Сообщите банку фактические налоговые резиденции и номера. Резидент Франции обычно декларирует турецкий счёт по форме 3916. Счёт не устанавливает автоматически турецкое резидентство или право на статью 20/D."
        }
      ],
      "faqs": [
        {
          "question": "Может ли турист открыть счёт?",
          "answer": "Некоторые банки принимают нерезидентов; решение индивидуально."
        },
        {
          "question": "Есть ли обязательный минимальный вклад?",
          "answer": "Единого гарантированного минимума нет; уточните условия."
        },
        {
          "question": "Страховка действует на каждый счёт?",
          "answer": "Нет, на совокупность подходящих вкладов человека в учреждении."
        }
      ],
      "sources": [
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank: открытие счёта"
        },
        {
          "href": "https://dijital.gib.gov.tr/foreigners/kimlikNoBasvuru",
          "label": "GİB: налоговый номер иностранца"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500: банковские счета"
        },
        {
          "href": "https://www.tmsf.org.tr/en/Tmsf/Finansman/mevduat.sss.guncel.en",
          "label": "TMSF: страхование вкладов"
        },
        {
          "href": "https://www.isbank.com.tr/urun-ve-hizmet-ucretleri",
          "label": "İşbank: тарифы 2026"
        }
      ]
    },
    "ar": {
      "title": "فتح حساب بنكي في تركيا لغير المقيم 2026: الوثائق والرسوم",
      "metaDescription": "فتح حساب دون إيكامت: الجواز والرقم الضريبي والعنوان وموعد الفرع وضمان الودائع حتى 1.2 مليون ليرة.",
      "shortAnswer": "يمكن لغير المقيم طلب حساب بلا إيكامت لدى مصرف يقبل وضعه. لا يضمن الجواز والرقم الضريبي الموافقة.",
      "bosphorasHelp": "تنسق Bosphoras التحضير للانتقال والمواعيد المصرفية والتواصل مع مختصين مستقلين. اطلب المساعدة قبل السفر؛ لسنا مصرفاً أو وسيطاً مالياً ولا نضمن قبول الحساب.",
      "sections": [
        {
          "id": "bank-1",
          "title": "وثائق الزيارة الأولى",
          "body": "يذكر İşbank جوازاً سارياً صادراً منذ أقل من عشر سنوات أو إقامة سارية ورقم هوية الأجنبي أو الرقم الضريبي وإثبات العنوان. قد يقبل عنوان الجواز عند انطباقه. قد يطلب المصرف ترجمة وهاتفاً وإثبات الإقامة الضريبية وكشوفاً وغرض الحساب.",
          "table": {
            "headers": [
              "الوثيقة",
              "الغرض"
            ],
            "rows": [
              [
                "الجواز",
                "الهوية"
              ],
              [
                "رقم ضريبي تركي أو هوية أجنبي",
                "التعريف المحلي"
              ],
              [
                "إثبات العنوان",
                "الموطن الفعلي"
              ],
              [
                "إثبات الدخل والأموال",
                "التحقق"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "الرقم الضريبي والموعد",
          "body": "توفر إدارة الإيرادات طلباً إلكترونياً للرقم الضريبي المحتمل للأجانب. طابق بيانات الجواز واحتفظ بالنتيجة. إذا لديك رقم هوية أجنبي فتأكد من الرقم المطلوب. اطلب قائمة مكتوبة قبل السفر. يتطلب التوكيل موافقة المصرف مسبقاً وشكليات مناسبة."
        },
        {
          "id": "bank-3",
          "title": "ضمان الودائع",
          "body": "يغطي TMSF الودائع المؤهلة بالليرة والعملات الأجنبية والمعادن الثمينة في الفروع التركية مع الفوائد ضمن الحد. الحد في 2026 هو 1.2 مليون ليرة للفرد بكل مؤسسة وليس لكل حساب أو عملة. تبقى الاستثناءات ومخاطر الصرف.",
          "table": {
            "headers": [
              "السنة",
              "حد TMSF بالليرة"
            ],
            "rows": [
              [
                "2023",
                "400,000"
              ],
              [
                "2024",
                "650,000"
              ],
              [
                "2025",
                "950,000"
              ],
              [
                "2026",
                "1,200,000"
              ]
            ]
          }
        },
        {
          "id": "bank-4",
          "title": "التفعيل والاختبار",
          "body": "قبل التحويل الكبير تحقق من IBAN والعملة والرسوم الواردة والصادرة والتطبيق والتحقق من الخارج والحدود. قد لا تشمل الخدمة البطاقة وحساب اليورو والتحويلات الدولية تلقائياً. راجع شروط الوديعة لأجل واحتفظ بالوثائق."
        },
        {
          "id": "bank-5",
          "title": "الإقامة الضريبية والتصريح",
          "body": "قدم إقاماتك الضريبية الفعلية وأرقامها. يصرح المقيم الضريبي الفرنسي بالحساب التركي عادة بالنموذج 3916 مع الإقرار السنوي. لا يثبت الحساب وحده الإقامة التركية أو أهلية المادة 20/D."
        }
      ],
      "faqs": [
        {
          "question": "هل يمكن للسائح فتح حساب؟",
          "answer": "تقبل بعض المصارف غير المقيمين والقرار فردي."
        },
        {
          "question": "هل توجد وديعة دنيا إجبارية؟",
          "answer": "لا حد موحد مضمون؛ اطلب شروط الفرع والمنتج."
        },
        {
          "question": "هل الضمان لكل حساب؟",
          "answer": "لا، لمجموع الودائع المؤهلة للفرد في المؤسسة."
        }
      ],
      "sources": [
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank: فتح الحساب"
        },
        {
          "href": "https://dijital.gib.gov.tr/foreigners/kimlikNoBasvuru",
          "label": "إدارة الضرائب: الرقم الضريبي للأجانب"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500: فتح الحساب"
        },
        {
          "href": "https://www.tmsf.org.tr/en/Tmsf/Finansman/mevduat.sss.guncel.en",
          "label": "TMSF: ضمان الودائع"
        },
        {
          "href": "https://www.isbank.com.tr/urun-ve-hizmet-ucretleri",
          "label": "İşbank: رسوم 2026"
        }
      ]
    }
  },
  "kyc-bank-turkey-foreigners": {
    "fr": {
      "title": "KYC bancaire en Turquie 2026 : documents, seuils MASAK et conformité",
      "metaDescription": "Préparez votre dossier KYC : identité, bénéficiaire effectif, origine des fonds et nouveaux seuils MASAK du 7 octobre 2026.",
      "shortAnswer": "Le KYC permet à la banque d'identifier son client, le bénéficiaire effectif, le but de la relation et son niveau de risque. Toute relation bancaire durable exige une identification, quel que soit le montant.",
      "bosphorasHelp": "Bosphoras coordonne la préparation de votre projet d'installation, vos rendez-vous bancaires et les échanges avec des professionnels indépendants. Demandez un accompagnement avant votre déplacement ; nous ne sommes ni une banque ni un intermédiaire financier et aucune ouverture n'est garantie.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Les pièces à réunir",
          "body": "Préparez passeport, adresse réelle, profession, coordonnées, identifiant fiscal, résidence fiscale et motif du compte. Pour une société, ajoutez registre, statuts, signataires, chaîne de détention et bénéficiaires effectifs. Les pièces étrangères peuvent nécessiter traduction et authentification selon le dossier.",
          "table": {
            "headers": [
              "Profil",
              "Pièces complémentaires possibles"
            ],
            "rows": [
              [
                "Salarié",
                "Contrat et bulletins"
              ],
              [
                "Entrepreneur",
                "Registre, comptes, contrats"
              ],
              [
                "Investisseur",
                "Relevés, actes et historique"
              ],
              [
                "Société",
                "Actionnariat et pouvoirs"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Réforme MASAK du 7 octobre 2026",
          "body": "Le règlement 11845 publié au Journal officiel du 7 octobre modifie les seuils d'identification des transactions ponctuelles et liées. Il ne constitue pas un plafond de transfert ni une exonération de contrôle en dessous du seuil. Les relations continues, soupçons et doutes sur l'identité exigent des vérifications indépendamment du montant.",
          "table": {
            "headers": [
              "Type de seuil",
              "Ancien (TL)",
              "Depuis le 7 octobre (TL)"
            ],
            "rows": [
              [
                "Transactions ponctuelles générales",
                "185 000",
                "370 000"
              ],
              [
                "Transferts électroniques",
                "15 000",
                "30 000"
              ],
              [
                "Transferts d'actifs numériques concernés",
                "15 000",
                "30 000"
              ]
            ]
          }
        },
        {
          "id": "bank-3",
          "title": "Vigilance renforcée et provenance",
          "body": "La banque peut examiner l'activité attendue, les pays et contreparties, les sociétés liées et la cohérence des sommes avec les revenus. Présentez les documents originaux et une explication vérifiable. N'envoyez pas les pièces par un canal non sécurisé. Les opérations liées sont appréciées ensemble ; il ne faut pas fractionner pour contourner les contrôles."
        },
        {
          "id": "bank-4",
          "title": "Répondre à une demande ou un blocage",
          "body": "Demandez la liste des pièces manquantes et le service compétent ; conservez les références de transaction et les échanges. La banque peut ne pas communiquer les détails d'une déclaration de soupçon. Si le délai dépasse celui annoncé, sollicitez le service réclamations et, si nécessaire, un conseil juridique indépendant. Aucun intermédiaire ne peut garantir le déblocage."
        }
      ],
      "faqs": [
        {
          "question": "L'ouverture sous le seuil est-elle sans KYC ?",
          "answer": "Non, l'identification est obligatoire pour une relation durable."
        },
        {
          "question": "370 000 TL est-il un plafond de virement ?",
          "answer": "Non, c'est un seuil légal d'identification dans certaines opérations."
        },
        {
          "question": "Un passeport suffit-il ?",
          "answer": "Non, d'autres documents peuvent être nécessaires."
        }
      ],
      "sources": [
        {
          "href": "https://ms.hmb.gov.tr/uploads/sites/12/2025/12/RoM-8b6373a7144bbb72.pdf",
          "label": "MASAK : règlement de vigilance (version 2025, seuils modifiés en 2026)"
        },
        {
          "href": "https://cimensurerhukuk.com/masak-tedbirler-yonetmeligi-degisikligi-2026-11845/",
          "label": "Analyse du règlement MASAK du 7 octobre 2026"
        },
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank : ouverture de compte"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500 : ouverture de compte"
        }
      ]
    },
    "en": {
      "title": "Bank KYC in Turkey 2026: documents, MASAK thresholds and compliance",
      "metaDescription": "Prepare identity, beneficial ownership and source-of-funds documents, including MASAK's new 7 October 2026 identification thresholds.",
      "shortAnswer": "KYC identifies the customer, beneficial owner, purpose and risk. Identification is required for an ongoing banking relationship regardless of amount.",
      "bosphorasHelp": "Bosphoras coordinates relocation planning, bank appointments and introductions to independent professionals. Request assistance before travelling. We are not a bank or financial intermediary and cannot guarantee account approval.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Prepare the file",
          "body": "Gather passport, actual address, occupation, contact details, tax ID, tax residence and account purpose. Companies add registry records, articles, signatories and ultimate ownership. Foreign documents may need translation and authentication.",
          "table": {
            "headers": [
              "Profile",
              "Possible additional evidence"
            ],
            "rows": [
              [
                "Employee",
                "Contract and payslips"
              ],
              [
                "Business owner",
                "Registry, accounts and contracts"
              ],
              [
                "Investor",
                "Statements, deeds and history"
              ],
              [
                "Company",
                "Ownership and signing powers"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "7 October 2026 MASAK reform",
          "body": "Regulation 11845 published on 7 October changes identification thresholds for occasional and linked transactions. These are not transfer caps or exemptions from scrutiny below the threshold. Ongoing relationships, suspicion and doubts about identity trigger checks irrespective of amount.",
          "table": {
            "headers": [
              "Threshold type",
              "Previous (TRY)",
              "From 7 October (TRY)"
            ],
            "rows": [
              [
                "General occasional transactions",
                "185,000",
                "370,000"
              ],
              [
                "Electronic transfers",
                "15,000",
                "30,000"
              ],
              [
                "Relevant crypto asset transfers",
                "15,000",
                "30,000"
              ]
            ]
          }
        },
        {
          "id": "bank-3",
          "title": "Enhanced due diligence",
          "body": "Banks may assess expected activity, jurisdictions, counterparties, linked entities and whether amounts fit documented income. Provide authentic evidence through secure channels and a verifiable explanation. Linked transactions are assessed together; do not split transfers to bypass checks."
        },
        {
          "id": "bank-4",
          "title": "Responding to requests and restrictions",
          "body": "Ask for outstanding documents and the responsible team; keep transaction references and correspondence. Banks may not disclose suspicious transaction reports. If review exceeds a stated timeframe, contact complaints staff and independent legal counsel where necessary. No intermediary can guarantee release."
        }
      ],
      "faqs": [
        {
          "question": "Is a low-value account exempt from KYC?",
          "answer": "No, ongoing relationships require identification."
        },
        {
          "question": "Is TRY 370,000 a transfer cap?",
          "answer": "No, it is an identification threshold for certain transactions."
        },
        {
          "question": "Is a passport enough?",
          "answer": "Other documentation may be necessary."
        }
      ],
      "sources": [
        {
          "href": "https://ms.hmb.gov.tr/uploads/sites/12/2025/12/RoM-8b6373a7144bbb72.pdf",
          "label": "MASAK due diligence regulation (2025 text; thresholds amended 2026)"
        },
        {
          "href": "https://cimensurerhukuk.com/masak-tedbirler-yonetmeligi-degisikligi-2026-11845/",
          "label": "MASAK amendment of 7 October 2026: legal analysis"
        },
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank account opening"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500 account opening"
        }
      ]
    },
    "ru": {
      "title": "KYC банков Турции 2026: документы и новые пороги MASAK",
      "metaDescription": "Подготовка идентификации, бенефициаров и источника средств: новые пороги MASAK с 7 октября 2026 года.",
      "shortAnswer": "KYC устанавливает личность клиента, бенефициара, цель отношений и риск. При постоянных банковских отношениях проверка обязательна независимо от суммы.",
      "bosphorasHelp": "Bosphoras помогает подготовить переезд, организовать визиты в банки и встречи с независимыми специалистами. Запросите сопровождение заранее. Мы не банк и не финансовый посредник и не гарантируем открытие счёта.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Подготовьте документы",
          "body": "Паспорт, фактический адрес, профессия, контакты, налоговый номер, резидентство и цель счёта. Для компании — реестр, устав, подписанты и конечные владельцы. Иностранные документы могут требовать перевода и удостоверения.",
          "table": {
            "headers": [
              "Профиль",
              "Дополнительные документы"
            ],
            "rows": [
              [
                "Работник",
                "Договор и зарплатные листы"
              ],
              [
                "Предприниматель",
                "Реестр, отчётность, договоры"
              ],
              [
                "Инвестор",
                "Выписки, акты, история"
              ],
              [
                "Компания",
                "Собственники и полномочия"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Изменения MASAK от 7 октября",
          "body": "Регламент 11845 от 7 октября 2026 меняет пороги идентификации разовых и связанных операций. Это не лимиты переводов и не освобождение от проверки ниже порога. Постоянные отношения, подозрения и сомнения в личности проверяются независимо от суммы.",
          "table": {
            "headers": [
              "Вид порога",
              "Ранее (лиры)",
              "С 7 октября (лиры)"
            ],
            "rows": [
              [
                "Общие разовые операции",
                "185 000",
                "370 000"
              ],
              [
                "Электронные переводы",
                "15 000",
                "30 000"
              ],
              [
                "Соответствующие переводы криптоактивов",
                "15 000",
                "30 000"
              ]
            ]
          }
        },
        {
          "id": "bank-3",
          "title": "Усиленная проверка",
          "body": "Банк оценивает ожидаемую деятельность, страны, контрагентов, связанные компании и соответствие сумм доходам. Представляйте подлинные документы по защищённому каналу и проверяемое объяснение. Связанные операции учитываются вместе; не дробите переводы ради обхода контроля."
        },
        {
          "id": "bank-4",
          "title": "Запросы и ограничения",
          "body": "Уточните недостающие документы и ответственное подразделение, сохраните номера операций и переписку. Банк может не раскрывать сведения о сообщении о подозрительной операции. При превышении заявленного срока обратитесь в службу жалоб и при необходимости к независимому юристу. Никто не гарантирует снятие ограничения."
        }
      ],
      "faqs": [
        {
          "question": "Небольшой счёт освобождён от KYC?",
          "answer": "Нет, постоянные отношения требуют идентификации."
        },
        {
          "question": "370 000 лир — лимит перевода?",
          "answer": "Нет, порог идентификации для отдельных операций."
        },
        {
          "question": "Достаточно паспорта?",
          "answer": "Могут понадобиться дополнительные документы."
        }
      ],
      "sources": [
        {
          "href": "https://ms.hmb.gov.tr/uploads/sites/12/2025/12/RoM-8b6373a7144bbb72.pdf",
          "label": "MASAK: правила проверки (редакция 2025, пороги изменены в 2026)"
        },
        {
          "href": "https://cimensurerhukuk.com/masak-tedbirler-yonetmeligi-degisikligi-2026-11845/",
          "label": "Анализ изменений MASAK от 7 октября 2026"
        },
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank: открытие счёта"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500: банковские счета"
        }
      ]
    },
    "ar": {
      "title": "التحقق المصرفي KYC في تركيا 2026: الوثائق وحدود MASAK الجديدة",
      "metaDescription": "جهز الهوية والمستفيد الفعلي ومصدر الأموال مع حدود التحقق الجديدة منذ 7 أكتوبر 2026.",
      "shortAnswer": "يحدد KYC هوية العميل والمستفيد الفعلي وغرض العلاقة ومستوى المخاطر. يلزم التحقق عند إنشاء علاقة مصرفية مستمرة مهما كان المبلغ.",
      "bosphorasHelp": "تنسق Bosphoras التحضير للانتقال والمواعيد المصرفية والتواصل مع مختصين مستقلين. اطلب المساعدة قبل السفر؛ لسنا مصرفاً أو وسيطاً مالياً ولا نضمن قبول الحساب.",
      "sections": [
        {
          "id": "bank-1",
          "title": "إعداد الملف",
          "body": "جهز الجواز والعنوان الفعلي والمهنة والاتصال والرقم الضريبي والإقامة الضريبية وغرض الحساب. للشركة أضف السجل والنظام والمخولين والمالكين النهائيين. قد تتطلب الوثائق الأجنبية ترجمة وتصديقاً.",
          "table": {
            "headers": [
              "الفئة",
              "وثائق إضافية محتملة"
            ],
            "rows": [
              [
                "موظف",
                "عقد وكشوف راتب"
              ],
              [
                "رائد أعمال",
                "سجل وحسابات وعقود"
              ],
              [
                "مستثمر",
                "كشوف وسندات وتاريخ"
              ],
              [
                "شركة",
                "ملكية وصلاحيات"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "تعديل MASAK في 7 أكتوبر",
          "body": "يعدل التنظيم 11845 المنشور في 7 أكتوبر 2026 حدود التحقق للمعاملات العرضية والمترابطة. ليست سقوفاً للتحويل أو إعفاءً من الرقابة أدناها. تتطلب العلاقات المستمرة والاشتباه والشك في الهوية تحققاً بغض النظر عن المبلغ.",
          "table": {
            "headers": [
              "نوع الحد",
              "السابق بالليرة",
              "من 7 أكتوبر بالليرة"
            ],
            "rows": [
              [
                "معاملات عرضية عامة",
                "185,000",
                "370,000"
              ],
              [
                "تحويلات إلكترونية",
                "15,000",
                "30,000"
              ],
              [
                "تحويلات الأصول الرقمية المعنية",
                "15,000",
                "30,000"
              ]
            ]
          }
        },
        {
          "id": "bank-3",
          "title": "التحقق المعزز",
          "body": "قد يدرس المصرف النشاط المتوقع والدول والأطراف والشركات المرتبطة وتناسب الأموال مع الدخل. قدم مستندات أصلية عبر قناة آمنة وشرحاً قابلاً للتحقق. تقيم المعاملات المرتبطة معاً؛ لا تجزئ التحويلات لتجاوز الرقابة."
        },
        {
          "id": "bank-4",
          "title": "الطلبات والقيود",
          "body": "اطلب قائمة النواقص والقسم المسؤول واحفظ مراجع المعاملات والمراسلات. قد لا يفصح المصرف عن تفاصيل بلاغ الاشتباه. عند تجاوز المهلة المعلنة تواصل مع الشكاوى واستعن بمحام مستقل عند الحاجة. لا يضمن أي وسيط رفع القيد."
        }
      ],
      "faqs": [
        {
          "question": "هل الحساب الصغير معفى من KYC؟",
          "answer": "لا، العلاقة المستمرة تتطلب التحقق."
        },
        {
          "question": "هل 370 ألف ليرة سقف للتحويل؟",
          "answer": "لا، هو حد للتحقق في بعض المعاملات."
        },
        {
          "question": "هل يكفي الجواز؟",
          "answer": "قد يلزم تقديم وثائق أخرى."
        }
      ],
      "sources": [
        {
          "href": "https://ms.hmb.gov.tr/uploads/sites/12/2025/12/RoM-8b6373a7144bbb72.pdf",
          "label": "MASAK: قواعد التحقق (نسخة 2025 والحدود معدلة في 2026)"
        },
        {
          "href": "https://cimensurerhukuk.com/masak-tedbirler-yonetmeligi-degisikligi-2026-11845/",
          "label": "تحليل تعديل MASAK في 7 أكتوبر 2026"
        },
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank: فتح الحساب"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500: فتح الحساب"
        }
      ]
    }
  },
  "crs-turkey-automatic-exchange": {
    "fr": {
      "title": "CRS Turquie 2026 : échange automatique des comptes bancaires et déclaration",
      "metaDescription": "Comprendre le CRS en Turquie : données transmises, calendrier annuel, résidence fiscale, comptes français et formulaire 3916.",
      "shortAnswer": "La Turquie participe à l'échange automatique CRS. Les institutions financières identifient les comptes déclarables et transmettent les informations à la GİB, qui les échange avec les administrations partenaires selon les relations actives.",
      "bosphorasHelp": "Bosphoras coordonne la préparation de votre projet d'installation, vos rendez-vous bancaires et les échanges avec des professionnels indépendants. Demandez un accompagnement avant votre déplacement ; nous ne sommes ni une banque ni un intermédiaire financier et aucune ouverture n'est garantie.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Quelles données sont échangées ?",
          "body": "Selon la catégorie de compte : identité, adresse, résidence fiscale, identifiant fiscal, numéro de compte, établissement, solde ou valeur en fin d'année, intérêts, dividendes ou produits bruts concernés. Pour certaines entités passives, les personnes qui les contrôlent peuvent être déclarées. Le CRS ne transmet pas nécessairement chaque paiement.",
          "table": {
            "headers": [
              "Donnée",
              "Utilisation"
            ],
            "rows": [
              [
                "Résidence et TIN",
                "Identification fiscale"
              ],
              [
                "Solde au 31 décembre",
                "Valeur annuelle"
              ],
              [
                "Intérêts et dividendes",
                "Revenus déclarables"
              ],
              [
                "Contrôlants d'entité passive",
                "Identification selon règles CRS"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Le calendrier de l'échange",
          "body": "Le guide GİB indique un échange annuel pouvant intervenir jusqu'à fin septembre de l'année suivante. Pour les comptes 2026, la date de référence habituelle est le 31 décembre et les échanges concernés interviennent en 2027. Les relations actives sont publiées par l'OCDE ; certaines sont non réciproques. Les obligations déclaratives ne dépendent pas de la réception effective des données."
        },
        {
          "id": "bank-3",
          "title": "Cas d'un résident français",
          "body": "Un résident fiscal français doit en principe déclarer les comptes turcs ouverts, détenus, utilisés ou clos selon les règles de déclaration 3916/3916-bis. La DGFiP indique une amende ordinaire de 1 500 € par compte non déclaré, majorée à 10 000 € dans certaines juridictions sans convention d'échange applicable. Les intérêts imposables se déclarent séparément. Les exceptions des comptes de paiement en ligne sont étroites."
        },
        {
          "id": "bank-4",
          "title": "Exonération 20/D et changement de résidence",
          "body": "Le certificat turc d'exonération des revenus étrangers ne dispense pas le titulaire de déclarer sa situation réelle à la banque. En cas de double résidence ou déménagement, actualisez l'autocertification et conservez les justificatifs. FATCA est un mécanisme américain distinct. N'assimilez ni le CRS à un nouvel impôt ni l'exonération à une confidentialité fiscale."
        }
      ],
      "faqs": [
        {
          "question": "Le CRS prélève-t-il un impôt ?",
          "answer": "Non, il s'agit d'un échange d'informations."
        },
        {
          "question": "Un compte sans intérêts peut-il être déclaré ?",
          "answer": "Oui, selon le statut et les règles applicables."
        },
        {
          "question": "Le compte est-il invisible avec un ikamet ?",
          "answer": "Non, la résidence fiscale réelle et les critères CRS priment."
        }
      ],
      "sources": [
        {
          "href": "https://ivdb.gib.gov.tr/mevzuat/tur/5/anlasma/1",
          "label": "GİB : accords de transparence fiscale"
        },
        {
          "href": "https://www.oecd.org/en/topics/sub-issues/international-standards-on-tax-transparency/automatic-exchange-of-information-exchange-relationships.html",
          "label": "OCDE : relations d'échange actives"
        },
        {
          "href": "https://www.impots.gouv.fr/particulier/questions/dois-je-declarer-mon-compte-paypal-ou-un-compte-bancaire-ouvert-letranger-et",
          "label": "DGFiP : déclaration des comptes étrangers"
        }
      ]
    },
    "en": {
      "title": "Turkey CRS 2026: automatic bank account exchange and reporting",
      "metaDescription": "Understand Turkish CRS reporting: data fields, annual timeline, tax residence, French accounts and form 3916.",
      "shortAnswer": "Turkey participates in CRS. Financial institutions identify reportable accounts and submit data to GİB for exchange with partner authorities under activated relationships.",
      "bosphorasHelp": "Bosphoras coordinates relocation planning, bank appointments and introductions to independent professionals. Request assistance before travelling. We are not a bank or financial intermediary and cannot guarantee account approval.",
      "sections": [
        {
          "id": "bank-1",
          "title": "What information is exchanged?",
          "body": "Depending on account type: identity, address, tax residence and TIN, account number, institution, year-end balance or value and relevant interest, dividends or gross proceeds. Controlling persons of certain passive entities may be reportable. CRS does not necessarily transmit each payment.",
          "table": {
            "headers": [
              "Data",
              "Purpose"
            ],
            "rows": [
              [
                "Residence and TIN",
                "Tax identification"
              ],
              [
                "31 December balance",
                "Annual value"
              ],
              [
                "Interest and dividends",
                "Reportable income"
              ],
              [
                "Passive entity controllers",
                "CRS identification"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Annual exchange timeline",
          "body": "The GİB guide describes annual exchange by the following September where applicable. The 2026 account year typically uses 31 December values and exchange occurs in 2027. OECD publishes activated relationships, some non-reciprocal. Filing obligations do not depend on actual data receipt."
        },
        {
          "id": "bank-3",
          "title": "Example: a French tax resident",
          "body": "French residents generally report Turkish accounts opened, held, used or closed under form 3916/3916-bis requirements. DGFiP lists an ordinary €1,500 penalty per undeclared account, rising to €10,000 for certain jurisdictions without an applicable exchange agreement. Taxable interest is separately reported. Online payment account exceptions are narrow."
        },
        {
          "id": "bank-4",
          "title": "Article 20/D and changes of residence",
          "body": "The Turkish foreign-income exemption certificate does not remove accurate bank self-certification requirements. Update tax residence after actual changes and document dual residence. FATCA is a distinct US regime. CRS is not a new tax; relief is not fiscal secrecy."
        }
      ],
      "faqs": [
        {
          "question": "Does CRS itself withhold tax?",
          "answer": "No, it is information exchange."
        },
        {
          "question": "Can a non-interest-bearing account be reported?",
          "answer": "Yes, depending on the applicable status and rules."
        },
        {
          "question": "Does an ikamet make accounts invisible?",
          "answer": "No, actual tax residence and CRS criteria govern."
        }
      ],
      "sources": [
        {
          "href": "https://ivdb.gib.gov.tr/mevzuat/tur/5/anlasma/1",
          "label": "GİB information exchange agreements"
        },
        {
          "href": "https://www.oecd.org/en/topics/sub-issues/international-standards-on-tax-transparency/automatic-exchange-of-information-exchange-relationships.html",
          "label": "OECD activated exchange relationships"
        },
        {
          "href": "https://www.impots.gouv.fr/particulier/questions/dois-je-declarer-mon-compte-paypal-ou-un-compte-bancaire-ouvert-letranger-et",
          "label": "French foreign account reporting"
        }
      ]
    },
    "ru": {
      "title": "CRS в Турции 2026: автоматический обмен банковскими данными",
      "metaDescription": "Как работает CRS в Турции: данные, ежегодный календарь, налоговое резидентство и французская форма 3916.",
      "shortAnswer": "Турция участвует в CRS. Финансовые учреждения определяют отчётные счета и передают сведения GİB для обмена с партнёрами по действующим отношениям.",
      "bosphorasHelp": "Bosphoras помогает подготовить переезд, организовать визиты в банки и встречи с независимыми специалистами. Запросите сопровождение заранее. Мы не банк и не финансовый посредник и не гарантируем открытие счёта.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Какие сведения передаются",
          "body": "В зависимости от счёта: личность, адрес, резидентство и налоговый номер, номер счёта, учреждение, остаток или стоимость на конец года, проценты, дивиденды или соответствующая валовая выручка. Для отдельных пассивных организаций учитываются контролирующие лица. CRS не обязательно передаёт каждый платёж.",
          "table": {
            "headers": [
              "Данные",
              "Назначение"
            ],
            "rows": [
              [
                "Резидентство и TIN",
                "Налоговая идентификация"
              ],
              [
                "Остаток на 31 декабря",
                "Годовая стоимость"
              ],
              [
                "Проценты и дивиденды",
                "Отчётные доходы"
              ],
              [
                "Контролирующие лица пассивной организации",
                "Идентификация CRS"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Календарь обмена",
          "body": "По руководству GİB ежегодный обмен возможен до конца сентября следующего года. Для 2026 года обычная дата остатка — 31 декабря, обмен в 2027. ОЭСР публикует действующие связи, в том числе невзаимные. Декларирование не зависит от факта получения сведений."
        },
        {
          "id": "bank-3",
          "title": "Пример резидента Франции",
          "body": "Французские резиденты обычно декларируют турецкие счета по форме 3916/3916-bis согласно правилам открытых, имеющихся, использованных или закрытых счетов. DGFiP указывает обычный штраф 1 500 евро за незаявленный счёт, до 10 000 в отдельных юрисдикциях без применимого соглашения. Облагаемые проценты декларируются отдельно. Исключения платёжных счетов ограничены."
        },
        {
          "id": "bank-4",
          "title": "Статья 20/D и переезд",
          "body": "Сертификат освобождения зарубежных доходов не отменяет достоверное самоудостоверение в банке. Обновляйте резидентство при реальных изменениях и документируйте двойной статус. FATCA — отдельный американский механизм. CRS не налог, а льгота не означает налоговую тайну."
        }
      ],
      "faqs": [
        {
          "question": "Удерживает ли CRS налог?",
          "answer": "Нет, это обмен сведениями."
        },
        {
          "question": "Передают ли данные счёта без процентов?",
          "answer": "Да, в зависимости от условий."
        },
        {
          "question": "Делает ли икамет счёт невидимым?",
          "answer": "Нет, важны действительное резидентство и правила CRS."
        }
      ],
      "sources": [
        {
          "href": "https://ivdb.gib.gov.tr/mevzuat/tur/5/anlasma/1",
          "label": "GİB: соглашения об обмене"
        },
        {
          "href": "https://www.oecd.org/en/topics/sub-issues/international-standards-on-tax-transparency/automatic-exchange-of-information-exchange-relationships.html",
          "label": "ОЭСР: действующие связи обмена"
        },
        {
          "href": "https://www.impots.gouv.fr/particulier/questions/dois-je-declarer-mon-compte-paypal-ou-un-compte-bancaire-ouvert-letranger-et",
          "label": "Франция: декларирование счетов"
        }
      ]
    },
    "ar": {
      "title": "CRS تركيا 2026: التبادل التلقائي لمعلومات الحسابات المصرفية",
      "metaDescription": "كيف يعمل CRS في تركيا والبيانات ومواعيد التبادل والإقامة الضريبية والتصريح الفرنسي 3916.",
      "shortAnswer": "تشارك تركيا في CRS. تحدد المؤسسات المالية الحسابات الواجب الإبلاغ عنها وترسل المعلومات لإدارة الإيرادات التي تتبادلها مع السلطات الشريكة وفق العلاقات النشطة.",
      "bosphorasHelp": "تنسق Bosphoras التحضير للانتقال والمواعيد المصرفية والتواصل مع مختصين مستقلين. اطلب المساعدة قبل السفر؛ لسنا مصرفاً أو وسيطاً مالياً ولا نضمن قبول الحساب.",
      "sections": [
        {
          "id": "bank-1",
          "title": "ما البيانات المتبادلة؟",
          "body": "بحسب نوع الحساب: الهوية والعنوان والإقامة الضريبية ورقمها والحساب والمؤسسة والرصيد أو القيمة آخر السنة والفوائد والتوزيعات والمتحصلات المعنية. قد يبلغ عن المسيطرين على بعض الكيانات السلبية. لا ينقل CRS بالضرورة كل دفعة.",
          "table": {
            "headers": [
              "البيانات",
              "الغرض"
            ],
            "rows": [
              [
                "الإقامة والرقم الضريبي",
                "التعريف الضريبي"
              ],
              [
                "رصيد 31 ديسمبر",
                "القيمة السنوية"
              ],
              [
                "الفوائد والتوزيعات",
                "الدخل الواجب الإبلاغ"
              ],
              [
                "المسيطرون على الكيان السلبي",
                "التعريف وفق CRS"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "التوقيت السنوي",
          "body": "يشير دليل إدارة الإيرادات إلى إمكانية التبادل حتى نهاية سبتمبر من السنة التالية. لسنة 2026 يكون 31 ديسمبر المرجع المعتاد للرصيد والتبادل في 2027. تنشر OECD العلاقات النشطة وبعضها غير متبادل. لا تتوقف واجبات التصريح على استلام البيانات فعلياً."
        },
        {
          "id": "bank-3",
          "title": "مثال المقيم الفرنسي",
          "body": "يصرح المقيم الفرنسي عادة بالحساب التركي المفتوح أو المحتفظ به أو المستخدم أو المغلق وفق قواعد 3916/3916-bis. تذكر الإدارة الفرنسية غرامة عادية 1,500 يورو لكل حساب غير مصرح وقد ترتفع إلى 10 آلاف في بعض الدول دون اتفاق تبادل نافذ. يصرح بالفوائد الخاضعة منفصلة. استثناء حسابات الدفع الإلكتروني محدود."
        },
        {
          "id": "bank-4",
          "title": "المادة 20/D وتغير الإقامة",
          "body": "لا تلغي شهادة إعفاء الدخل الأجنبي ضرورة التصريح الذاتي الصحيح للمصرف. حدث الإقامة عند التغيير الفعلي ووثق الازدواج. FATCA آلية أمريكية مستقلة. ليس CRS ضريبة جديدة ولا الإعفاء سرية ضريبية."
        }
      ],
      "faqs": [
        {
          "question": "هل يقتطع CRS ضريبة؟",
          "answer": "لا، هو تبادل معلومات."
        },
        {
          "question": "هل يبلغ عن حساب بلا فوائد؟",
          "answer": "نعم وفق الشروط."
        },
        {
          "question": "هل يخفي الإيكامت الحساب؟",
          "answer": "لا، العبرة بالإقامة الضريبية الفعلية وقواعد CRS."
        }
      ],
      "sources": [
        {
          "href": "https://ivdb.gib.gov.tr/mevzuat/tur/5/anlasma/1",
          "label": "إدارة الضرائب: اتفاقيات التبادل"
        },
        {
          "href": "https://www.oecd.org/en/topics/sub-issues/international-standards-on-tax-transparency/automatic-exchange-of-information-exchange-relationships.html",
          "label": "OECD: علاقات التبادل النشطة"
        },
        {
          "href": "https://www.impots.gouv.fr/particulier/questions/dois-je-declarer-mon-compte-paypal-ou-un-compte-bancaire-ouvert-letranger-et",
          "label": "فرنسا: التصريح بالحسابات الأجنبية"
        }
      ]
    }
  },
  "source-of-funds-turkey-investors": {
    "fr": {
      "title": "Justifier l’origine des fonds en Turquie 2026 : guide des investisseurs",
      "metaDescription": "Vente immobilière, dividendes, épargne, héritage ou apport : préparez un dossier d’origine des fonds traçable pour la banque turque.",
      "shortAnswer": "L'origine des fonds explique d'où provient une somme précise ; l'origine du patrimoine explique comment la richesse a été constituée. La banque peut demander les deux.",
      "bosphorasHelp": "Bosphoras coordonne la préparation de votre projet d'installation, vos rendez-vous bancaires et les échanges avec des professionnels indépendants. Demandez un accompagnement avant votre déplacement ; nous ne sommes ni une banque ni un intermédiaire financier et aucune ouverture n'est garantie.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Quels documents selon la provenance ?",
          "body": "Conservez une chaîne cohérente entre l'événement générateur, le droit de recevoir la somme et son crédit sur un compte. Traduisez les pièces si l'établissement le demande.",
          "table": {
            "headers": [
              "Provenance",
              "Justificatifs utiles"
            ],
            "rows": [
              [
                "Vente immobilière",
                "Acte, décompte notarial, relevé du crédit"
              ],
              [
                "Dividendes",
                "Comptes, décision de distribution, retenue et paiement"
              ],
              [
                "Épargne salariale",
                "Contrats, bulletins, relevés historiques"
              ],
              [
                "Succession ou donation",
                "Acte, droits et preuves de versement"
              ],
              [
                "Prêt ou apport",
                "Contrat, identité des parties et flux"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Exemple de rapprochement des montants",
          "body": "Un bien est vendu 250 000 €, 80 000 € remboursent un crédit et 10 000 € correspondent à des frais documentés. Le produit net est de 160 000 €. Un transfert de 120 000 € laisse 40 000 € sur le compte d'origine. Il s'agit d'un exemple fictif, pas d'un calcul fiscal de plus-value.",
          "table": {
            "headers": [
              "Élément",
              "Montant"
            ],
            "rows": [
              [
                "Prix de vente",
                "250 000 €"
              ],
              [
                "Crédit remboursé",
                "80 000 €"
              ],
              [
                "Frais documentés",
                "10 000 €"
              ],
              [
                "Produit net",
                "160 000 €"
              ],
              [
                "Virement",
                "120 000 €"
              ],
              [
                "Solde conservé",
                "40 000 €"
              ]
            ]
          }
        },
        {
          "id": "bank-3",
          "title": "Préparer une note explicative et les preuves",
          "body": "Indiquez qui envoie, qui reçoit, la nature économique, les dates et devises ; reliez chaque montant aux relevés. Pour des fonds issus d'une société, expliquez le droit personnel à recevoir l'argent et la décision correspondante. Ne qualifiez pas un chiffre d'affaires d'épargne personnelle. Évitez les comptes de tiers sans raison documentée."
        },
        {
          "id": "bank-4",
          "title": "Contrôles et sécurisation",
          "body": "Prévenez les deux banques d'une opération importante ; demandez le canal sécurisé et la liste des pièces. Les seuils MASAK n'annulent pas la vigilance basée sur le risque. Si un contrôle intervient, ne changez pas artificiellement le motif et ne fractionnez pas les fonds. Conservez les justificatifs de fiscalité et de transfert pour les vérifications ultérieures."
        }
      ],
      "faqs": [
        {
          "question": "Un relevé bancaire suffit-il ?",
          "answer": "Pas toujours : il prouve le mouvement mais pas nécessairement l'origine économique."
        },
        {
          "question": "La vente d'une société nécessite-t-elle des preuves ?",
          "answer": "Oui, notamment contrat de cession, paiement et pièces fiscales."
        },
        {
          "question": "Un cadeau familial peut-il être transféré ?",
          "answer": "Oui sous réserve des règles applicables et de preuves de donation, de provenance et de fiscalité."
        }
      ],
      "sources": [
        {
          "href": "https://ms.hmb.gov.tr/uploads/sites/12/2025/12/RoM-8b6373a7144bbb72.pdf",
          "label": "MASAK : règlement de vigilance (version 2025, seuils modifiés en 2026)"
        },
        {
          "href": "https://cimensurerhukuk.com/masak-tedbirler-yonetmeligi-degisikligi-2026-11845/",
          "label": "Analyse du règlement MASAK du 7 octobre 2026"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500 : ouverture de compte"
        },
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank : ouverture de compte"
        }
      ]
    },
    "en": {
      "title": "Source of funds in Turkey 2026: investor documentation guide",
      "metaDescription": "Document property proceeds, dividends, savings, inheritance or capital contributions for Turkish bank due diligence.",
      "shortAnswer": "Source of funds explains a particular payment; source of wealth explains how assets were accumulated. A bank may request both.",
      "bosphorasHelp": "Bosphoras coordinates relocation planning, bank appointments and introductions to independent professionals. Request assistance before travelling. We are not a bank or financial intermediary and cannot guarantee account approval.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Evidence by source",
          "body": "Maintain a consistent chain from the generating event to the legal entitlement and account credit. Translate documents where requested.",
          "table": {
            "headers": [
              "Source",
              "Useful documents"
            ],
            "rows": [
              [
                "Property sale",
                "Deed, closing statement, bank credit"
              ],
              [
                "Dividends",
                "Accounts, resolution, withholding and payment"
              ],
              [
                "Salary savings",
                "Contracts, payslips, historical statements"
              ],
              [
                "Inheritance or gift",
                "Deed, tax and receipt evidence"
              ],
              [
                "Loan or capital",
                "Agreement, parties and flows"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Worked reconciliation",
          "body": "Assume €250,000 property proceeds, €80,000 loan repayment and €10,000 documented costs. Net proceeds equal €160,000. A €120,000 transfer leaves €40,000 in the origin account. This is fictional, not a capital gains tax calculation.",
          "table": {
            "headers": [
              "Item",
              "Amount"
            ],
            "rows": [
              [
                "Sale price",
                "€250,000"
              ],
              [
                "Loan repaid",
                "€80,000"
              ],
              [
                "Documented costs",
                "€10,000"
              ],
              [
                "Net proceeds",
                "€160,000"
              ],
              [
                "Transfer",
                "€120,000"
              ],
              [
                "Retained balance",
                "€40,000"
              ]
            ]
          }
        },
        {
          "id": "bank-3",
          "title": "Explain the transaction",
          "body": "Identify sender, recipient, economic purpose, dates and currencies, with statement references. For company money, explain the individual's entitlement and supporting resolution. Business turnover is not personal savings. Avoid undocumented third-party accounts."
        },
        {
          "id": "bank-4",
          "title": "Due diligence and safe transmission",
          "body": "Notify both banks about a major transaction and request secure document channels and checklists. MASAK thresholds do not remove risk-based review. Do not artificially change the description or split funds to avoid checks. Keep source-tax and transfer evidence for future enquiries."
        }
      ],
      "faqs": [
        {
          "question": "Is a bank statement sufficient?",
          "answer": "Not always; it shows the movement but not necessarily economic origin."
        },
        {
          "question": "Do company sale proceeds require evidence?",
          "answer": "Yes, including sale agreement, payment and tax documents."
        },
        {
          "question": "Can a family gift be transferred?",
          "answer": "Subject to applicable rules and evidence of gift, origin and taxes."
        }
      ],
      "sources": [
        {
          "href": "https://ms.hmb.gov.tr/uploads/sites/12/2025/12/RoM-8b6373a7144bbb72.pdf",
          "label": "MASAK due diligence regulation (2025 text; thresholds amended 2026)"
        },
        {
          "href": "https://cimensurerhukuk.com/masak-tedbirler-yonetmeligi-degisikligi-2026-11845/",
          "label": "MASAK amendment of 7 October 2026: legal analysis"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500 account opening"
        },
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank account opening"
        }
      ]
    },
    "ru": {
      "title": "Подтверждение происхождения средств в Турции 2026: инвесторы",
      "metaDescription": "Продажа недвижимости, дивиденды, накопления, наследство и вклад в капитал: документы для турецкого банка.",
      "shortAnswer": "Источник средств объясняет конкретную сумму, источник состояния — накопление капитала в целом. Банк может запросить оба.",
      "bosphorasHelp": "Bosphoras помогает подготовить переезд, организовать визиты в банки и встречи с независимыми специалистами. Запросите сопровождение заранее. Мы не банк и не финансовый посредник и не гарантируем открытие счёта.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Документы по происхождению",
          "body": "Связывайте исходное событие, право на получение средств и зачисление на счёт. При необходимости переведите документы.",
          "table": {
            "headers": [
              "Источник",
              "Документы"
            ],
            "rows": [
              [
                "Продажа жилья",
                "Договор, расчёт, зачисление"
              ],
              [
                "Дивиденды",
                "Отчётность, решение, удержание и платёж"
              ],
              [
                "Накопления зарплаты",
                "Договоры, расчётные листы, выписки"
              ],
              [
                "Наследство или дарение",
                "Акт, налоги, зачисление"
              ],
              [
                "Заём или капитал",
                "Договор, стороны и потоки"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "Пример сверки сумм",
          "body": "Условная продажа за 250 000 евро, погашение кредита 80 000, подтверждённые расходы 10 000. Чистые поступления 160 000. Перевод 120 000 оставляет 40 000 на исходном счёте. Это вымышленный пример, не расчёт налога на прирост.",
          "table": {
            "headers": [
              "Статья",
              "Сумма"
            ],
            "rows": [
              [
                "Цена продажи",
                "250 000 €"
              ],
              [
                "Погашение кредита",
                "80 000 €"
              ],
              [
                "Расходы",
                "10 000 €"
              ],
              [
                "Чистые поступления",
                "160 000 €"
              ],
              [
                "Перевод",
                "120 000 €"
              ],
              [
                "Остаток",
                "40 000 €"
              ]
            ]
          }
        },
        {
          "id": "bank-3",
          "title": "Объяснение операции",
          "body": "Укажите отправителя, получателя, экономическую цель, даты, валюты и ссылки на выписки. Для денег компании подтвердите личное право на получение и решение. Оборот бизнеса не является личными сбережениями. Избегайте необоснованных счетов третьих лиц."
        },
        {
          "id": "bank-4",
          "title": "Проверка и защита данных",
          "body": "Предупредите оба банка о крупной операции и узнайте защищённый канал и список документов. Пороги MASAK не отменяют оценку риска. Не меняйте искусственно назначение и не дробите деньги для обхода проверок. Храните сведения о налогах и переводах."
        }
      ],
      "faqs": [
        {
          "question": "Достаточно ли банковской выписки?",
          "answer": "Не всегда: она показывает движение, но не обязательно происхождение."
        },
        {
          "question": "Нужны ли документы при продаже компании?",
          "answer": "Да, договор, оплата и налоговые документы."
        },
        {
          "question": "Можно ли перевести семейный подарок?",
          "answer": "При соблюдении правил и доказательствах дарения, происхождения и налогов."
        }
      ],
      "sources": [
        {
          "href": "https://ms.hmb.gov.tr/uploads/sites/12/2025/12/RoM-8b6373a7144bbb72.pdf",
          "label": "MASAK: правила проверки (редакция 2025, пороги изменены в 2026)"
        },
        {
          "href": "https://cimensurerhukuk.com/masak-tedbirler-yonetmeligi-degisikligi-2026-11845/",
          "label": "Анализ изменений MASAK от 7 октября 2026"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500: банковские счета"
        },
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank: открытие счёта"
        }
      ]
    },
    "ar": {
      "title": "إثبات مصدر الأموال في تركيا 2026: دليل المستثمرين",
      "metaDescription": "بيع العقار والتوزيعات والمدخرات والميراث والمساهمات: جهز ملف مصدر الأموال للمصرف التركي.",
      "shortAnswer": "يشرح مصدر الأموال منشأ مبلغ محدد بينما يشرح مصدر الثروة كيفية تكوين الأصول. قد يطلب المصرف الاثنين.",
      "bosphorasHelp": "تنسق Bosphoras التحضير للانتقال والمواعيد المصرفية والتواصل مع مختصين مستقلين. اطلب المساعدة قبل السفر؛ لسنا مصرفاً أو وسيطاً مالياً ولا نضمن قبول الحساب.",
      "sections": [
        {
          "id": "bank-1",
          "title": "الوثائق حسب المصدر",
          "body": "اربط الحدث المنشئ بالحق القانوني في المبلغ وإيداعه بالحساب. ترجم الوثائق عند الطلب.",
          "table": {
            "headers": [
              "المصدر",
              "وثائق مفيدة"
            ],
            "rows": [
              [
                "بيع عقار",
                "عقد وتسوية وإثبات الإيداع"
              ],
              [
                "توزيعات",
                "حسابات وقرار واقتطاع ودفع"
              ],
              [
                "ادخار الراتب",
                "عقود وكشوف راتب وحساب"
              ],
              [
                "ميراث أو هبة",
                "سند وضرائب وإثبات الاستلام"
              ],
              [
                "قرض أو مساهمة",
                "عقد وأطراف وتدفقات"
              ]
            ]
          }
        },
        {
          "id": "bank-2",
          "title": "مثال لمطابقة المبالغ",
          "body": "نفترض بيع عقار مقابل 250 ألف يورو وسداد قرض 80 ألفاً ومصاريف موثقة 10 آلاف. الصافي 160 ألفاً. تحويل 120 ألفاً يترك 40 ألفاً بالحساب الأصلي. هذا مثال افتراضي وليس حساب ضريبة مكسب.",
          "table": {
            "headers": [
              "البند",
              "المبلغ"
            ],
            "rows": [
              [
                "سعر البيع",
                "250,000 يورو"
              ],
              [
                "القرض المسدد",
                "80,000 يورو"
              ],
              [
                "المصاريف",
                "10,000 يورو"
              ],
              [
                "الصافي",
                "160,000 يورو"
              ],
              [
                "التحويل",
                "120,000 يورو"
              ],
              [
                "الرصيد المحتفظ به",
                "40,000 يورو"
              ]
            ]
          }
        },
        {
          "id": "bank-3",
          "title": "شرح المعاملة",
          "body": "حدد المرسل والمستلم والغرض الاقتصادي والتواريخ والعملات ومراجع الكشوف. لأموال الشركة أثبت الحق الشخصي في المبلغ والقرار المعني. لا يمثل إيراد الشركة مدخرات شخصية. تجنب حسابات الأطراف الثالثة دون مبرر موثق."
        },
        {
          "id": "bank-4",
          "title": "التحقق وأمن البيانات",
          "body": "أبلغ المصرفين بالمعاملة الكبيرة واطلب قناة آمنة وقائمة الوثائق. لا تلغي حدود MASAK الرقابة بحسب المخاطر. لا تغير الوصف اصطناعياً أو تجزئ التحويل لتجاوز الرقابة. احتفظ بإثبات الضرائب والتحويلات."
        }
      ],
      "faqs": [
        {
          "question": "هل يكفي كشف المصرف؟",
          "answer": "ليس دائماً؛ يثبت الحركة لا المصدر الاقتصادي بالضرورة."
        },
        {
          "question": "هل يلزم إثبات عند بيع الشركة؟",
          "answer": "نعم، العقد والدفع والوثائق الضريبية."
        },
        {
          "question": "هل يمكن تحويل هبة أسرية؟",
          "answer": "وفق القواعد مع إثبات الهبة والمصدر والضرائب."
        }
      ],
      "sources": [
        {
          "href": "https://ms.hmb.gov.tr/uploads/sites/12/2025/12/RoM-8b6373a7144bbb72.pdf",
          "label": "MASAK: قواعد التحقق (نسخة 2025 والحدود معدلة في 2026)"
        },
        {
          "href": "https://cimensurerhukuk.com/masak-tedbirler-yonetmeligi-degisikligi-2026-11845/",
          "label": "تحليل تعديل MASAK في 7 أكتوبر 2026"
        },
        {
          "href": "https://www.legal500.com/intelligence/turkey/finance-and-banking/opening-a-bank-account-in-turkey-as-a-foreign-national",
          "label": "Legal 500: فتح الحساب"
        },
        {
          "href": "https://www.isbank.com.tr/en/become-our-customer",
          "label": "İşbank: فتح الحساب"
        }
      ]
    }
  },
  "wealth-transfer-to-turkey": {
    "fr": {
      "title": "Transférer son patrimoine en Turquie en 2026 : SWIFT, change et fiscalité",
      "metaDescription": "Transfert de capitaux en Turquie : virement SWIFT, frais réels İşbank, change, douane dès 10 000 €, preuves et sécurité.",
      "shortAnswer": "Un transfert de capital entre vos propres comptes ne constitue pas automatiquement un revenu imposable. La provenance, les opérations ayant généré les fonds, les obligations fiscales et les contrôles bancaires doivent être traités séparément.",
      "bosphorasHelp": "Bosphoras coordonne la préparation de votre projet d'installation, vos rendez-vous bancaires et les échanges avec des professionnels indépendants. Demandez un accompagnement avant votre déplacement ; nous ne sommes ni une banque ni un intermédiaire financier et aucune ouverture n'est garantie.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Organiser le transfert avant le déménagement",
          "body": "Inventoriez comptes, titres et autres actifs ; distinguez transfert bancaire, vente de titres, distribution d'une société, donation et apport. Une liquidation de portefeuille ou une cession peut générer une imposition indépendamment du virement. Vérifiez les obligations dans le pays de départ, l'éligibilité 20/D éventuelle et la conservation des preuves de coût d'acquisition."
        },
        {
          "id": "bank-2",
          "title": "SWIFT : démarches et délais",
          "body": "Demandez IBAN turc à 26 caractères, BIC, nom exact du titulaire, devise du compte et instructions de correspondants. OUR met en principe les frais à la charge de l'émetteur, SHA les partage et BEN les impute au bénéficiaire. Des frais supplémentaires sont possibles. İşbank indique généralement 1 à 2 jours ouvrés pour les virements internationaux ; contrôles, jours fériés et banques intermédiaires peuvent prolonger le délai."
        },
        {
          "id": "bank-3",
          "title": "Exemple réel de commissions İşbank",
          "body": "Tarif publié du 9 janvier 2026 : pour un SWIFT sortant supérieur à 10 000 TL équivalents, taux 0,7 %, minimum et maximum selon canal. Calcul sur les montants ci-dessous, hors BSMV, change et frais correspondants OUR. Ce n'est pas le coût d'un virement entrant depuis la France ni un devis garanti.",
          "table": {
            "headers": [
              "Montant équivalent",
              "Agence (TL)",
              "Internet/İşCep (TL)"
            ],
            "rows": [
              [
                "100 000 TL",
                "3 270",
                "1 490"
              ],
              [
                "500 000 TL",
                "3 500",
                "3 500"
              ],
              [
                "1 000 000 TL",
                "7 000",
                "4 750"
              ]
            ]
          }
        },
        {
          "id": "bank-4",
          "title": "Espèces : déclarations aux frontières",
          "body": "Pour un départ de France vers la Turquie, la douane française impose la déclaration dès 10 000 € (ou équivalent) de valeurs couvertes ; à partir de 50 000 €, un justificatif de provenance est requis. La douane turque peut demander à l'entrée le montant et l'origine ; répondez exactement et respectez les restrictions selon la nature des fonds. Les règles de sortie turques sont distinctes. Pour un transfert patrimonial, le virement traçable est généralement préférable au transport physique."
        },
        {
          "id": "bank-5",
          "title": "Change, sécurité et patrimoine",
          "body": "Comparez le coût global : commission, taux de conversion effectif, frais de réception et correspondants ; un écart de change hypothétique de 1 % sur 100 000 € représente 1 000 €. Ne convertissez pas le capital intégral sans stratégie de devises et vérifiez l'éligibilité à la garantie TMSF. Contrôlez les coordonnées bancaires par un canal indépendant avant paiement. Conservez ordre SWIFT, avis de crédit, taux appliqué et dossier d'origine."
        }
      ],
      "faqs": [
        {
          "question": "Le transfert lui-même est-il imposé ?",
          "answer": "Pas automatiquement ; nature et origine des fonds déterminent les obligations."
        },
        {
          "question": "Puis-je envoyer directement en euros ?",
          "answer": "Si la banque et le compte destinataire acceptent l'euro ; confirmez la devise avant envoi."
        },
        {
          "question": "Les frais OUR garantissent-ils tous les coûts ?",
          "answer": "Non, des frais de correspondants ou de conversion peuvent s'ajouter."
        }
      ],
      "sources": [
        {
          "href": "https://www.isbank.com.tr/doviz-transferi-swift",
          "label": "İşbank : virements SWIFT"
        },
        {
          "href": "https://www.isbank.com.tr/urun-ve-hizmet-ucretleri",
          "label": "İşbank : tarifs 2026"
        },
        {
          "href": "https://www.douane.gouv.fr/demarche/vous-voyagez-avec-de-largent-liquide-especes-instruments-negociables-au-porteur-or-0",
          "label": "Douane française : argent liquide hors UE"
        },
        {
          "href": "https://www.ticaret.gov.tr/gumruk-muhafaza/sikca-sorulan-sorular",
          "label": "Douane turque : règles de transport d'espèces"
        },
        {
          "href": "https://www.tmsf.org.tr/en/Tmsf/Finansman/mevduat.sss.guncel.en",
          "label": "TMSF : garantie des dépôts"
        },
        {
          "href": "https://ivdb.gib.gov.tr/mevzuat/tur/5/anlasma/1",
          "label": "GİB : accords de transparence fiscale"
        }
      ]
    },
    "en": {
      "title": "Transfer wealth to Turkey in 2026: SWIFT, exchange and tax",
      "metaDescription": "Moving capital to Turkey: SWIFT, published İşbank fees, currency conversion, €10,000 cash declarations and secure documentation.",
      "shortAnswer": "A transfer between your own accounts is not automatically taxable income. Source, generating transactions, tax obligations and bank due diligence require separate analysis.",
      "bosphorasHelp": "Bosphoras coordinates relocation planning, bank appointments and introductions to independent professionals. Request assistance before travelling. We are not a bank or financial intermediary and cannot guarantee account approval.",
      "sections": [
        {
          "id": "bank-1",
          "title": "Plan before relocating",
          "body": "Inventory accounts, securities and other assets; distinguish bank transfer, security sale, corporate distribution, gift and capital contribution. Liquidation or disposal can trigger tax independently of the transfer. Assess departure-country obligations, possible 20/D eligibility and acquisition-cost records."
        },
        {
          "id": "bank-2",
          "title": "SWIFT details and timing",
          "body": "Request the 26-character Turkish IBAN, BIC, exact account holder, account currency and correspondent instructions. OUR generally places fees on the sender, SHA shares them and BEN charges the beneficiary. Additional fees may arise. İşbank indicates often 1–2 business days for international transfers; compliance, holidays and intermediaries may extend this."
        },
        {
          "id": "bank-3",
          "title": "Published İşbank fee example",
          "body": "9 January 2026 tariff: outgoing SWIFT above TRY 10,000 equivalent charged at 0.7% with channel-specific minimum and maximum. Calculations exclude BSMV tax, FX and OUR correspondent costs. Not the cost of an incoming transfer from France or a guaranteed quote.",
          "table": {
            "headers": [
              "Equivalent amount",
              "Branch (TRY)",
              "Internet/İşCep (TRY)"
            ],
            "rows": [
              [
                "TRY 100,000",
                "3,270",
                "1,490"
              ],
              [
                "TRY 500,000",
                "3,500",
                "3,500"
              ],
              [
                "TRY 1,000,000",
                "7,000",
                "4,750"
              ]
            ]
          }
        },
        {
          "id": "bank-4",
          "title": "Cash at the border",
          "body": "When leaving France for Turkey, French customs requires declaration from €10,000 or equivalent in covered values, with source evidence from €50,000. Turkish customs may request amount and origin upon entry; answer accurately and follow restrictions by type of funds. Turkish outbound rules are distinct. Traceable bank transfer is usually preferable for wealth transfers."
        },
        {
          "id": "bank-5",
          "title": "Currency, security and assets",
          "body": "Compare total cost: fee, effective FX rate, receiving and correspondent costs. A hypothetical 1% exchange spread on €100,000 costs €1,000. Avoid converting all assets without a currency plan and check TMSF eligibility. Verify payment details independently. Retain SWIFT instruction, credit confirmation, rate and source documents."
        }
      ],
      "faqs": [
        {
          "question": "Is the transfer itself taxed?",
          "answer": "Not automatically; source and nature determine obligations."
        },
        {
          "question": "Can I send euros directly?",
          "answer": "If the receiving account and bank accept euros; confirm first."
        },
        {
          "question": "Does OUR guarantee the total cost?",
          "answer": "No, correspondent and conversion charges may remain."
        }
      ],
      "sources": [
        {
          "href": "https://www.isbank.com.tr/doviz-transferi-swift",
          "label": "İşbank SWIFT transfers"
        },
        {
          "href": "https://www.isbank.com.tr/urun-ve-hizmet-ucretleri",
          "label": "İşbank 2026 tariff"
        },
        {
          "href": "https://www.douane.gouv.fr/demarche/vous-voyagez-avec-de-largent-liquide-especes-instruments-negociables-au-porteur-or-0",
          "label": "French customs: cash outside EU"
        },
        {
          "href": "https://www.ticaret.gov.tr/gumruk-muhafaza/sikca-sorulan-sorular",
          "label": "Turkish customs: cash transport"
        },
        {
          "href": "https://www.tmsf.org.tr/en/Tmsf/Finansman/mevduat.sss.guncel.en",
          "label": "TMSF deposit insurance"
        },
        {
          "href": "https://ivdb.gib.gov.tr/mevzuat/tur/5/anlasma/1",
          "label": "GİB information exchange agreements"
        }
      ]
    },
    "ru": {
      "title": "Перевод капитала в Турцию 2026: SWIFT, обмен и налоги",
      "metaDescription": "Перенос средств: SWIFT, опубликованные тарифы İşbank, курс, декларация наличных от 10 000 евро и безопасность.",
      "shortAnswer": "Перевод между собственными счетами не автоматически облагаемый доход. Отдельно оцениваются источник, операции, налоги и банковская проверка.",
      "bosphorasHelp": "Bosphoras помогает подготовить переезд, организовать визиты в банки и встречи с независимыми специалистами. Запросите сопровождение заранее. Мы не банк и не финансовый посредник и не гарантируем открытие счёта.",
      "sections": [
        {
          "id": "bank-1",
          "title": "План до переезда",
          "body": "Составьте перечень счетов, бумаг и активов. Отличайте перевод, продажу бумаг, дивиденды, дарение и вклад. Продажа может вызвать налог независимо от перевода. Проверьте обязанности прежней страны, возможное право на 20/D и документы первоначальной стоимости."
        },
        {
          "id": "bank-2",
          "title": "SWIFT и сроки",
          "body": "Запросите турецкий IBAN из 26 символов, BIC, точное имя, валюту и инструкции корреспондентов. OUR обычно за счёт отправителя, SHA разделяет расходы, BEN за счёт получателя. Возможны дополнительные комиссии. İşbank указывает обычно 1–2 рабочих дня; проверки, праздники и посредники могут увеличить срок."
        },
        {
          "id": "bank-3",
          "title": "Пример опубликованного тарифа İşbank",
          "body": "Тариф от 9 января 2026: исходящий SWIFT свыше эквивалента 10 000 лир стоит 0,7% с минимумом и максимумом по каналу. Без налога BSMV, обмена и корреспондентских расходов OUR. Это не входящий перевод из Франции и не гарантированная цена.",
          "table": {
            "headers": [
              "Эквивалент суммы",
              "Отделение (лиры)",
              "Интернет/İşCep (лиры)"
            ],
            "rows": [
              [
                "100 000 лир",
                "3 270",
                "1 490"
              ],
              [
                "500 000 лир",
                "3 500",
                "3 500"
              ],
              [
                "1 000 000 лир",
                "7 000",
                "4 750"
              ]
            ]
          }
        },
        {
          "id": "bank-4",
          "title": "Наличные на границе",
          "body": "При выезде из Франции в Турцию декларируются соответствующие ценности от 10 000 евро или эквивалента; от 50 000 необходимо доказательство происхождения. Турецкая таможня может спросить сумму и источник при въезде; отвечайте точно и соблюдайте ограничения по виду средств. Правила выезда из Турции отдельны. Для капитала обычно предпочтителен прослеживаемый перевод."
        },
        {
          "id": "bank-5",
          "title": "Валюта, безопасность и активы",
          "body": "Сравните комиссии, фактический курс и расходы получателя и корреспондентов. Условная разница курса 1% на 100 000 евро стоит 1 000 евро. Не конвертируйте всё без валютного плана, проверьте TMSF. Проверяйте реквизиты независимо, храните поручение SWIFT, зачисление, курс и документы происхождения."
        }
      ],
      "faqs": [
        {
          "question": "Облагается ли сам перевод?",
          "answer": "Не автоматически; важны вид и источник средств."
        },
        {
          "question": "Можно ли отправить евро?",
          "answer": "Если принимающий счёт и банк поддерживают евро."
        },
        {
          "question": "OUR гарантирует все расходы?",
          "answer": "Нет, возможны дополнительные расходы."
        }
      ],
      "sources": [
        {
          "href": "https://www.isbank.com.tr/doviz-transferi-swift",
          "label": "İşbank: SWIFT"
        },
        {
          "href": "https://www.isbank.com.tr/urun-ve-hizmet-ucretleri",
          "label": "İşbank: тарифы 2026"
        },
        {
          "href": "https://www.douane.gouv.fr/demarche/vous-voyagez-avec-de-largent-liquide-especes-instruments-negociables-au-porteur-or-0",
          "label": "Таможня Франции: наличные вне ЕС"
        },
        {
          "href": "https://www.ticaret.gov.tr/gumruk-muhafaza/sikca-sorulan-sorular",
          "label": "Таможня Турции: наличные"
        },
        {
          "href": "https://www.tmsf.org.tr/en/Tmsf/Finansman/mevduat.sss.guncel.en",
          "label": "TMSF: страхование вкладов"
        },
        {
          "href": "https://ivdb.gib.gov.tr/mevzuat/tur/5/anlasma/1",
          "label": "GİB: соглашения об обмене"
        }
      ]
    },
    "ar": {
      "title": "نقل الثروة إلى تركيا 2026: SWIFT والصرف والضرائب",
      "metaDescription": "تحويل رأس المال إلى تركيا ورسوم İşbank المنشورة والصرف والتصريح النقدي من 10 آلاف يورو وأمن التحويل.",
      "shortAnswer": "لا يعد التحويل بين حساباتك دخلاً خاضعاً تلقائياً. تدرس طبيعة الأموال ومصدرها والعمليات المنشئة والضرائب والتحقق منفصلة.",
      "bosphorasHelp": "تنسق Bosphoras التحضير للانتقال والمواعيد المصرفية والتواصل مع مختصين مستقلين. اطلب المساعدة قبل السفر؛ لسنا مصرفاً أو وسيطاً مالياً ولا نضمن قبول الحساب.",
      "sections": [
        {
          "id": "bank-1",
          "title": "التخطيط قبل الانتقال",
          "body": "احصر الحسابات والأوراق والأصول وميز التحويل وبيع الأوراق والتوزيع والهبة والمساهمة. قد يولد البيع ضريبة مستقلة عن التحويل. راجع التزامات بلد المغادرة والأهلية المحتملة للمادة 20/D ووثائق التكلفة الأصلية."
        },
        {
          "id": "bank-2",
          "title": "SWIFT والتوقيت",
          "body": "اطلب IBAN التركي من 26 رمزاً وBIC واسم صاحب الحساب والعملة وتعليمات المصارف المراسلة. OUR على المرسل عادة وSHA تقاسم وBEN على المستفيد. قد تضاف رسوم. يذكر İşbank عادة يوم عمل إلى يومين للتحويل الدولي وقد تطيل المراجعة والعطلات والمراسلون المدة."
        },
        {
          "id": "bank-3",
          "title": "مثال رسوم İşbank المنشورة",
          "body": "تعرفة 9 يناير 2026: التحويل الصادر فوق ما يعادل 10 آلاف ليرة بنسبة 0.7% وحدود دنيا وعليا بحسب القناة. الأمثلة دون ضريبة BSMV والصرف ورسوم مراسلي OUR. ليست رسوم التحويل الوارد من فرنسا أو سعراً مضموناً.",
          "table": {
            "headers": [
              "المبلغ المعادل",
              "الفرع بالليرة",
              "الإنترنت/İşCep بالليرة"
            ],
            "rows": [
              [
                "100,000 ليرة",
                "3,270",
                "1,490"
              ],
              [
                "500,000 ليرة",
                "3,500",
                "3,500"
              ],
              [
                "1,000,000 ليرة",
                "7,000",
                "4,750"
              ]
            ]
          }
        },
        {
          "id": "bank-4",
          "title": "النقد عبر الحدود",
          "body": "عند المغادرة من فرنسا إلى تركيا يصرح بالقيم المشمولة من 10 آلاف يورو أو ما يعادلها؛ ومن 50 ألفاً يلزم إثبات المصدر. قد تطلب الجمارك التركية المبلغ والمصدر عند الدخول؛ أجب بدقة واتبع القيود حسب نوع الأموال. قواعد الخروج التركية مستقلة. التحويل القابل للتتبع عادة أفضل لنقل الثروة."
        },
        {
          "id": "bank-5",
          "title": "الصرف والأمن والأصول",
          "body": "قارن الرسوم وسعر الصرف الفعلي وتكاليف الاستلام والمراسلين. فرق صرف افتراضي 1% على 100 ألف يورو يساوي ألفاً. لا تحول كل الأصول لعملة واحدة دون خطة وتحقق من TMSF. تحقق من بيانات الدفع بقناة مستقلة واحتفظ بأمر SWIFT وإثبات الإيداع والسعر ووثائق المصدر."
        }
      ],
      "faqs": [
        {
          "question": "هل التحويل ذاته خاضع للضريبة؟",
          "answer": "ليس تلقائياً؛ يحدد النوع والمصدر الالتزامات."
        },
        {
          "question": "هل أرسل اليورو مباشرة؟",
          "answer": "إذا قبل الحساب والمصرف اليورو؛ تحقق أولاً."
        },
        {
          "question": "هل يضمن OUR التكلفة الكاملة؟",
          "answer": "لا، قد تضاف رسوم مراسل أو تحويل عملة."
        }
      ],
      "sources": [
        {
          "href": "https://www.isbank.com.tr/doviz-transferi-swift",
          "label": "İşbank: تحويلات SWIFT"
        },
        {
          "href": "https://www.isbank.com.tr/urun-ve-hizmet-ucretleri",
          "label": "İşbank: رسوم 2026"
        },
        {
          "href": "https://www.douane.gouv.fr/demarche/vous-voyagez-avec-de-largent-liquide-especes-instruments-negociables-au-porteur-or-0",
          "label": "الجمارك الفرنسية: النقد خارج الاتحاد"
        },
        {
          "href": "https://www.ticaret.gov.tr/gumruk-muhafaza/sikca-sorulan-sorular",
          "label": "الجمارك التركية: نقل النقد"
        },
        {
          "href": "https://www.tmsf.org.tr/en/Tmsf/Finansman/mevduat.sss.guncel.en",
          "label": "TMSF: ضمان الودائع"
        },
        {
          "href": "https://ivdb.gib.gov.tr/mevzuat/tur/5/anlasma/1",
          "label": "إدارة الضرائب: اتفاقيات التبادل"
        }
      ]
    }
  }
};
