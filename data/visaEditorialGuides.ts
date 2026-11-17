import type { Locale } from '@/lib/i18n';
import type { EditorialGuide } from './highPotentialEditorialGuides';

export const visaEditorialGuides: Record<string, Record<Locale, EditorialGuide> | undefined> = {
  "turkey-visa-foreigners": {
    "fr": {
      "title": "Visa Turquie 2026 : faut-il un visa et comment l’obtenir ?",
      "metaDescription": "Visa, dispense, e-Visa ou consulat : les règles 2026 en Turquie selon votre passeport, le motif du voyage, les frais et la durée autorisée.",
      "shortAnswer": "Pour un court séjour en Turquie, trois cas existent : dispense de visa, visa électronique ou visa consulaire. La nationalité du document présenté, sa catégorie et le motif du voyage déterminent le parcours. Une dispense touristique n’autorise pas à occuper un emploi en Turquie.",
      "bosphorasHelp": "Bosphoras peut organiser votre séjour de repérage, vos rendez-vous, vos transferts et la préparation des démarches d’installation selon votre situation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Quel régime correspond à votre passeport ?",
          "body": "Les Français, les Britanniques titulaires d’un passeport ordinaire, les Américains, les Canadiens et les ressortissants du Kazakhstan bénéficient généralement de séjours touristiques sans visa jusqu’à 90 jours sur 180. Pour les Russes, le séjour ordinaire sans visa est limité à 60 jours par visite dans le plafond général applicable. L’Indonésie dispose d’une dispense de 30 jours par entrée, sous plafond de 90 jours sur 180. Les ressortissants chinois titulaires d’un passeport ordinaire bénéficient d’une dispense depuis le 2 janvier 2026."
        },
        {
          "id": "visa-detail-2",
          "title": "Le visa électronique : dossier, coût et réception",
          "body": "L’e-Visa est réservé aux voyages de tourisme et de commerce. Sur le portail evisa.gov.tr, choisissez le pays émetteur de votre document, les dates et renseignez exactement les informations du passeport. Le montant officiel et les éventuelles conditions supplémentaires s’affichent avant paiement. Le prix dépend de la nationalité ; il n’existe pas un tarif universel. Le règlement s’effectue par carte compatible, en dollars américains, et le document reçu doit correspondre au passeport présenté. Conservez une copie utilisable hors connexion."
        },
        {
          "id": "visa-detail-3",
          "title": "Quand demander un visa consulaire ?",
          "body": "Si votre passeport ne donne ni dispense ni accès à l’e-Visa selon les conditions indiquées, la demande se fait auprès d’une représentation turque, via le portail visa.gov.tr. Pour un projet d’emploi, d’études ou d’autres motifs particuliers, le parcours consulaire est distinct de la démarche touristique. Le ministère recommande d’engager la demande au moins un mois avant le voyage. Les justificatifs varient selon le motif : identité, hébergement, ressources, assurance et documents liés au projet peuvent être nécessaires."
        },
        {
          "id": "visa-detail-4",
          "title": "Validité du passeport et documents à l’arrivée",
          "body": "La règle générale issue de l’article 7 de la loi 6458 impose une validité qui dépasse d’au moins 60 jours la durée de séjour autorisée. Une autorisation de 90 jours suppose donc en principe 150 jours de validité au moment de l’entrée. La durée recommandée par le ministère est de six mois. Certains accords prévoient des exceptions, notamment pour des cartes nationales d’identité admises. Emportez les justificatifs de votre séjour et de votre départ."
        },
        {
          "id": "visa-detail-5",
          "title": "Voyage d’affaires, installation et droit au travail",
          "body": "Une réunion commerciale ou une visite de biens peut relever du court séjour autorisé. En revanche, exercer une activité professionnelle en Turquie suppose généralement une autorisation spécifique. La création d’une société, l’achat d’un logement ou une réservation d’hôtel ne prolongent pas automatiquement le droit au séjour. Pour une installation, définissez le motif de titre de séjour puis son calendrier avant la fin de la période autorisée."
        },
        {
          "id": "visa-detail-6",
          "title": "Préparer le déplacement de toute la famille",
          "body": "Chaque personne doit disposer du document de voyage approprié ; les enfants nécessitant un e-Visa doivent avoir leur propre autorisation. Les demandes consulaires de mineurs peuvent requérir l’accord des parents et les justificatifs de garde. Organisez les dates selon le membre de la famille dont le droit de séjour est le plus court, pas seulement selon celui qui a réservé les billets. Si les nationalités diffèrent, le régime applicable peut également différer."
        },
        {
          "id": "visa-detail-7",
          "title": "Exemple : un séjour de prospection de dix jours",
          "body": "Un entrepreneur titulaire d’un passeport français peut généralement entrer pour une courte prospection commerciale sans visa. Il programme ses visites, présente son document en cours de validité et conserve son itinéraire. S’il décide ensuite de travailler localement ou de rester plusieurs mois, il doit examiner le titre correspondant à cette nouvelle situation. Le dossier d’installation se prépare indépendamment de la réservation touristique."
        }
      ],
      "faqs": [
        {
          "question": "Le visa garantit-il l’entrée ?",
          "answer": "Non. Le contrôle aux frontières reste souverain, même avec un visa valide."
        },
        {
          "question": "Combien coûte un e-Visa ?",
          "answer": "Le tarif officiel dépend du passeport et apparaît avant paiement sur evisa.gov.tr."
        },
        {
          "question": "Peut-on travailler avec un visa touristique ?",
          "answer": "Non, une autorisation de travail ou une exemption applicable est normalement nécessaire."
        },
        {
          "question": "Quelle validité de passeport prévoir ?",
          "answer": "En règle générale, durée autorisée plus 60 jours ; six mois est la recommandation pratique du ministère."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère des Affaires étrangères : régime par nationalité"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Ministère des Affaires étrangères : conditions générales d'entrée"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa : informations officielles et frais"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Direction de la migration : conditions d'entrée et interdictions"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Direction de la migration : catégories de titres de séjour"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Portail de pré-demande du visa consulaire"
        }
      ]
    },
    "en": {
      "title": "Turkey visa 2026: entry requirements and how to apply",
      "metaDescription": "Understand visa-free travel, e-Visa, consular visas, application costs, passport validity and permitted stay in Turkey in 2026.",
      "shortAnswer": "Short visits to Turkey fall into three main routes: visa exemption, electronic visa or consular visa. Passport nationality and category and the purpose of the trip determine which route applies. Tourist permission does not authorise employment in Turkey.",
      "bosphorasHelp": "Bosphoras can coordinate your scouting visit, meetings, transport and relocation preparation around your situation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Which entry route applies to your passport?",
          "body": "French, ordinary British, US, Canadian and Kazakh passport holders generally qualify for tourist visits without a visa for up to 90 days in 180. Ordinary Russian passports have a 60-day per-visit limit within the general cap. Indonesian passports qualify for 30 days per entry, subject to 90 in 180. Ordinary Chinese passport holders became visa-exempt on 2 January 2026."
        },
        {
          "id": "visa-detail-2",
          "title": "Applying electronically: fees and documents",
          "body": "The e-Visa covers tourism and commerce only. At evisa.gov.tr select the passport-issuing country, travel dates and exact passport details. The official fee and any additional eligibility conditions are displayed before payment; there is no single universal price. Pay using a compatible card in US dollars and obtain the electronic document. Keep an offline copy and ensure the details match the passport."
        },
        {
          "id": "visa-detail-3",
          "title": "When is a consular visa necessary?",
          "body": "If neither exemption nor e-Visa is available for your passport and circumstances, apply through a Turkish mission using visa.gov.tr. Work, education and other special purposes follow separate consular pathways. The Foreign Ministry recommends starting visa applications at least a month before departure. Accommodation, funds, insurance and purpose-specific documents may be required."
        },
        {
          "id": "visa-detail-4",
          "title": "Passport validity at arrival",
          "body": "Article 7 of Law 6458 generally requires validity for at least another 60 days beyond the authorised stay. For 90 days of permission, this means at least 150 days of validity at entry. The ministry recommends six months. Some agreements make exceptions for accepted national identity cards. Carry evidence of your itinerary and return or onward plans."
        },
        {
          "id": "visa-detail-5",
          "title": "Business travel versus residence and employment",
          "body": "A meeting or property inspection can fit an authorised short visit; undertaking work in Turkey normally requires specific authorisation. Company formation, property purchase or a hotel booking does not automatically extend permission to stay. For relocation, determine the appropriate residence category and application timetable before the authorised visit ends."
        },
        {
          "id": "visa-detail-6",
          "title": "Planning travel for the whole household",
          "body": "Each traveller needs an appropriate document; children who require an e-Visa need their own authorisation. Consular applications for minors may require parental consent and custody records. Build your itinerary around the family member with the shortest permission, especially when household members have different citizenships."
        },
        {
          "id": "visa-detail-7",
          "title": "Example: a ten-day business scouting visit",
          "body": "A French ordinary-passport holder can generally enter without a visa for a short commercial scouting visit, arrange meetings and retain an itinerary. If the visitor later decides to take up employment or relocate for several months, the appropriate status needs separate consideration. A relocation file is not the same as a tourism booking."
        }
      ],
      "faqs": [
        {
          "question": "Does a visa guarantee entry?",
          "answer": "No. Border authorities retain the power to refuse entry."
        },
        {
          "question": "How much does an e-Visa cost?",
          "answer": "The government fee varies with the passport and is shown before payment."
        },
        {
          "question": "Can I work on a tourist visa?",
          "answer": "Normally no; a work permit or applicable exemption is required."
        },
        {
          "question": "How much passport validity is needed?",
          "answer": "Generally permitted stay plus 60 days; the Foreign Ministry recommends six months."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Foreign Ministry: visa rules by nationality"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Foreign Ministry: general visa rules"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa: official application information and fees"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Migration authority: entry requirements and entry bans"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Migration authority: residence permit categories"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Official consular visa pre-application portal"
        }
      ]
    },
    "ru": {
      "title": "Виза в Турцию в 2026 году: нужна ли она и как оформить",
      "metaDescription": "Безвизовый въезд, электронная и консульская виза: сроки, стоимость, документы и требования к паспорту в 2026 году.",
      "shortAnswer": "Краткосрочная поездка в Турцию возможна без визы, по электронной либо консульской визе. Порядок определяется гражданством, видом паспорта и целью поездки. Туристическое разрешение не даёт права на трудоустройство.",
      "bosphorasHelp": "Bosphoras может организовать ознакомительную поездку, встречи, трансферы и подготовку к переезду с учётом вашей ситуации.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Какой порядок действует для вашего паспорта?",
          "body": "Граждане Франции, Великобритании с обычным паспортом, США, Канады и Казахстана обычно могут приезжать без визы на срок до 90 дней из 180. Для обычных российских паспортов действует ограничение 60 дней за одну поездку в пределах общего лимита. Для Индонезии — 30 дней за въезд, всего не более 90 из 180. С 2 января 2026 года владельцы обычных паспортов Китая также освобождены от виз."
        },
        {
          "id": "visa-detail-2",
          "title": "Электронная виза: оформление и оплата",
          "body": "Электронная виза предназначена только для туризма и коммерческих поездок. На evisa.gov.tr выберите страну выдачи документа, даты и внесите паспортные данные без ошибок. Размер государственного сбора и дополнительные условия отображаются до оплаты. Единого тарифа нет. Оплата производится подходящей банковской картой в долларах США. Сохраните документ для просмотра без интернета и убедитесь, что данные совпадают с паспортом."
        },
        {
          "id": "visa-detail-3",
          "title": "Когда необходимо обращение в консульство?",
          "body": "Если паспорт и обстоятельства не позволяют использовать безвизовый режим или электронную визу, обращайтесь в турецкое представительство через visa.gov.tr. Работа, обучение и другие специальные цели оформляются по отдельной процедуре. МИД рекомендует подавать заявление не менее чем за месяц до поездки. Могут потребоваться сведения о жилье, средствах, страховке и цели визита."
        },
        {
          "id": "visa-detail-4",
          "title": "Срок действия паспорта",
          "body": "Статья 7 закона № 6458 требует, как правило, чтобы документ действовал ещё минимум 60 дней после окончания разрешённого срока пребывания. Для 90 дней это означает не менее 150 дней действия паспорта на момент въезда. МИД рекомендует шесть месяцев. Отдельные соглашения предусматривают исключения для национальных удостоверений личности. Возьмите подтверждения маршрута и дальнейшего выезда."
        },
        {
          "id": "visa-detail-5",
          "title": "Деловая поездка, ВНЖ и работа",
          "body": "Переговоры и осмотр недвижимости могут соответствовать краткосрочному визиту. Для фактической работы в Турции обычно требуется отдельное разрешение. Регистрация компании, покупка квартиры и бронирование гостиницы не продлевают допустимый срок автоматически. При переезде определите подходящее основание ВНЖ и календарь подачи до окончания разрешённого пребывания."
        },
        {
          "id": "visa-detail-6",
          "title": "Поездка всей семьёй",
          "body": "Каждому путешественнику нужен подходящий документ. Дети, которым необходима электронная виза, получают собственное разрешение. При консульском оформлении несовершеннолетним может требоваться согласие родителей и подтверждение опеки. Если гражданство членов семьи различается, планируйте поездку по самому короткому сроку разрешённого пребывания."
        },
        {
          "id": "visa-detail-7",
          "title": "Пример: десятидневная деловая поездка",
          "body": "Владелец обычного французского паспорта обычно может приехать на короткие коммерческие переговоры без визы, заранее подготовив встречи и маршрут. Если впоследствии он решит работать в Турции или переехать на несколько месяцев, понадобится отдельное определение правового статуса. Туристическое бронирование не заменяет документы для проживания."
        }
      ],
      "faqs": [
        {
          "question": "Гарантирует ли виза въезд?",
          "answer": "Нет, окончательное решение принимается на границе."
        },
        {
          "question": "Сколько стоит электронная виза?",
          "answer": "Государственный сбор зависит от паспорта и отображается до оплаты."
        },
        {
          "question": "Можно ли работать по туристической визе?",
          "answer": "Обычно нет: требуется разрешение на работу или предусмотренное исключение."
        },
        {
          "question": "Какой срок действия паспорта нужен?",
          "answer": "Как правило, разрешённый срок плюс 60 дней; МИД рекомендует шесть месяцев."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции: визовый режим по гражданству"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "МИД Турции: общие правила въезда"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa: официальная информация и сборы"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Миграционная служба: условия и запреты на въезд"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Миграционная служба: виды ВНЖ"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Портал предварительного заявления на консульскую визу"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة تركيا 2026: شروط الدخول وطريقة الحصول عليها",
      "metaDescription": "هل تحتاج إلى تأشيرة تركيا؟ تعرّف إلى الإعفاء والتأشيرة الإلكترونية والقنصلية والرسوم وصلاحية الجواز ومدد البقاء.",
      "shortAnswer": "يتبع السفر القصير إلى تركيا ثلاثة مسارات: الإعفاء من التأشيرة أو التأشيرة الإلكترونية أو التأشيرة القنصلية. يتحدد المسار بحسب جنسية وثيقة السفر ونوعها وهدف الرحلة. ولا يمنح الدخول السياحي حق العمل في تركيا.",
      "bosphorasHelp": "تستطيع Bosphoras تنسيق زيارتك الاستطلاعية واجتماعاتك وتنقلاتك والتحضير للانتقال وفق وضعك.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "ما النظام المطبق على جوازك؟",
          "body": "يستفيد حاملو الجوازات العادية الفرنسية والبريطانية والأمريكية والكندية والكازاخستانية عموماً من زيارات سياحية دون تأشيرة حتى 90 يوماً خلال 180 يوماً. وتقتصر الزيارة الواحدة لحامل الجواز الروسي العادي على 60 يوماً ضمن الحد العام. ولإندونيسيا إعفاء لمدة 30 يوماً لكل دخول مع سقف 90 يوماً خلال 180. ومنذ 2 يناير 2026 أصبح حاملو الجوازات الصينية العادية معفيين من التأشيرة."
        },
        {
          "id": "visa-detail-2",
          "title": "التأشيرة الإلكترونية: الطلب والرسوم",
          "body": "تُستخدم التأشيرة الإلكترونية للسياحة والأعمال التجارية فقط. في موقع evisa.gov.tr اختر دولة إصدار الوثيقة والتواريخ وأدخل بيانات جوازك بدقة. تظهر الرسوم الرسمية والشروط الإضافية قبل الدفع ولا يوجد سعر موحد لجميع الجنسيات. ادفع ببطاقة ملائمة بالدولار الأمريكي واحتفظ بنسخة من الوثيقة دون اتصال بالإنترنت. يجب أن تتطابق البيانات مع الجواز."
        },
        {
          "id": "visa-detail-3",
          "title": "متى يلزم طلب التأشيرة القنصلية؟",
          "body": "عندما لا تتوفر لك أهلية الإعفاء أو التأشيرة الإلكترونية، يُقدّم الطلب لدى ممثلية تركية عبر visa.gov.tr. للعمل والدراسة والأغراض الخاصة إجراءات قنصلية مختلفة. توصي وزارة الخارجية بتقديم الطلب قبل السفر بشهر على الأقل. وقد تشمل الوثائق إثبات السكن والموارد والتأمين وما يتعلق بهدف الرحلة."
        },
        {
          "id": "visa-detail-4",
          "title": "صلاحية جواز السفر لدى الوصول",
          "body": "تقتضي المادة 7 من القانون 6458 أن تمتد صلاحية الوثيقة عموماً 60 يوماً على الأقل بعد مدة البقاء المصرح بها. فإذا كانت المدة 90 يوماً، يلزم عادةً بقاء 150 يوماً من صلاحية الجواز عند الدخول. وتوصي وزارة الخارجية بستة أشهر. توجد استثناءات بموجب اتفاقيات تخص بطاقات الهوية المقبولة. احمل مستندات الرحلة وخطة المغادرة."
        },
        {
          "id": "visa-detail-5",
          "title": "زيارة الأعمال والإقامة والعمل",
          "body": "قد تندرج الاجتماعات التجارية وزيارات العقارات ضمن الزيارة القصيرة المصرح بها. لكن ممارسة العمل داخل تركيا تتطلب عادةً تصريحاً خاصاً. لا يمدد تأسيس شركة أو شراء منزل أو حجز فندق مدة البقاء تلقائياً. وعند الانتقال حدد نوع الإقامة المناسب وجدول الطلب قبل انتهاء المدة القانونية."
        },
        {
          "id": "visa-detail-6",
          "title": "التخطيط لسفر جميع أفراد الأسرة",
          "body": "يحتاج كل مسافر إلى وثيقة مناسبة، ويحتاج الطفل الذي يخضع للتأشيرة الإلكترونية إلى تصريح مستقل. وقد تتطلب الطلبات القنصلية للقاصرين موافقة الوالدين ووثائق الحضانة. إذا اختلفت الجنسيات، فابنِ جدول الرحلة وفق أقصر مدة بقاء مسموحة بين أفراد الأسرة."
        },
        {
          "id": "visa-detail-7",
          "title": "مثال: زيارة أعمال لمدة عشرة أيام",
          "body": "يستطيع حامل الجواز الفرنسي العادي عموماً دخول تركيا دون تأشيرة لزيارة تجارية قصيرة وترتيب الاجتماعات مسبقاً. وإذا قرر لاحقاً العمل داخل تركيا أو الانتقال لأشهر، يلزم تحديد وضع قانوني مناسب بشكل منفصل. لا يحل الحجز السياحي محل ملف الإقامة."
        }
      ],
      "faqs": [
        {
          "question": "هل تضمن التأشيرة الدخول؟",
          "answer": "لا، يبقى القرار النهائي لدى سلطات الحدود."
        },
        {
          "question": "كم تبلغ رسوم التأشيرة الإلكترونية؟",
          "answer": "تختلف حسب الجواز وتظهر رسمياً قبل الدفع."
        },
        {
          "question": "هل يمكن العمل بتأشيرة سياحية؟",
          "answer": "لا عموماً؛ يلزم تصريح عمل أو إعفاء قانوني ساري."
        },
        {
          "question": "ما صلاحية الجواز المطلوبة؟",
          "answer": "عادةً مدة البقاء المصرح بها مضافاً إليها 60 يوماً؛ والتوصية ستة أشهر."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية: قواعد التأشيرات حسب الجنسية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "وزارة الخارجية: القواعد العامة للدخول"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "التأشيرة الإلكترونية: معلومات الطلب والرسوم"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "إدارة الهجرة: شروط الدخول والمنع"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "إدارة الهجرة: أنواع تصاريح الإقامة"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "منصة الطلب الأولي للتأشيرة القنصلية"
        }
      ]
    }
  },
  "enter-turkey-without-visa": {
    "fr": {
      "title": "Entrer en Turquie sans visa en 2026 : documents et formalités",
      "metaDescription": "Vous êtes dispensé de visa ? Préparez votre passeport ou carte d’identité, vos justificatifs de voyage et le calcul des jours avant le départ.",
      "shortAnswer": "Entrer sans visa signifie que vous n’avez pas à obtenir d’autorisation de visa préalable pour le motif et la durée admis. Vous devez tout de même satisfaire aux conditions de frontière, présenter un document reconnu et ne pas dépasser votre quota de séjour.",
      "bosphorasHelp": "Pour un séjour privé ou familial en Turquie, Bosphoras peut organiser l’hébergement, les transferts et un programme adapté à vos dates.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Avant de réserver : identifier le bon document",
          "body": "La nationalité de votre passeport est déterminante, pas votre pays de résidence. Un titre de séjour français délivré à une personne de nationalité indienne ne lui donne pas la dispense réservée aux citoyens français. Il peut toutefois être un justificatif pour un e-Visa si les conditions sont remplies. Les titulaires d’un document de voyage particulier, notamment pour réfugiés, ne doivent pas assimiler leur situation à celle d’un passeport ordinaire."
        },
        {
          "id": "visa-detail-2",
          "title": "Carte d’identité : quand peut-on se passer de passeport ?",
          "body": "La Turquie admet les cartes nationales d’identité de plusieurs pays, notamment la France, l’Allemagne, la Belgique, l’Italie, l’Espagne, les Pays-Bas, la Suisse, le Portugal et la Grèce, selon les accords applicables. Les conditions peuvent différer lorsqu’un voyage comporte une escale dans un pays tiers. Une carte de séjour ou un permis de conduire n’est pas une carte nationale d’identité admise au titre de ces accords. Pour une autre démarche, un passeport peut être nécessaire."
        },
        {
          "id": "visa-detail-3",
          "title": "Les documents à garder à portée de main",
          "body": "Même dispensé de visa, vous pouvez être invité à expliquer la raison du séjour, l’adresse d’hébergement, les ressources disponibles et votre projet de sortie. Préparez réservation ou invitation, itinéraire, billets lorsqu’ils existent et assurance adaptée. Conservez les coordonnées du logement et les justificatifs accessibles sans réseau mobile. Le contrôle est une condition d’admission, et non une seconde procédure de visa."
        },
        {
          "id": "visa-detail-4",
          "title": "Quel coût administratif pour une entrée sans visa ?",
          "body": "Il n’y a pas de frais de demande de visa à payer pour une dispense applicable. Les coûts du transport, de l’assurance, des réservations ou de l’accompagnement privé restent distincts. Ne versez pas de prétendus frais obligatoires de délivrance d’e-Visa lorsque votre passeport et le motif de séjour sont dispensés. Un titre de séjour demandé ultérieurement relève, lui, de frais et pièces propres."
        },
        {
          "id": "visa-detail-5",
          "title": "À l’arrivée : conserver une preuve du passage",
          "body": "Le contrôle d’identité et les enregistrements de frontière déterminent les dates utiles au séjour. Gardez vos confirmations de vol ou de trajet et, lorsque délivrés, les justificatifs de passage. Si vous voyagez avec une carte nationale d’identité, conservez tout document d’entrée éventuellement remis. Un changement de passeport ne supprime pas les journées déjà passées dans le pays."
        },
        {
          "id": "visa-detail-6",
          "title": "Séjour avec des enfants et transits",
          "body": "Chaque enfant doit pouvoir voyager avec sa propre pièce admise selon son régime. Lorsqu’un mineur voyage sans un parent, la compagnie ou les autorités concernées peuvent demander des justificatifs d’autorisation parentale. Une correspondance hors de Turquie peut imposer un passeport même si le séjour turc permet une carte d’identité. Pour des documents mixtes, préparez un itinéraire compatible avec chaque voyageur."
        },
        {
          "id": "visa-detail-7",
          "title": "Exemple : un Français vient rendre visite à sa famille",
          "body": "Pour deux semaines de vacances, un Français utilisant un document reconnu peut généralement voyager sans visa, s’il dispose encore de jours autorisés. S’il a déjà effectué de longs séjours, il doit recalculer le quota avant de repartir. Le simple achat d’un billet retour ne crée pas de nouveau droit de séjour ; c’est la situation au moment de chaque entrée qui compte."
        }
      ],
      "faqs": [
        {
          "question": "Dois-je payer un e-Visa si je suis dispensé ?",
          "answer": "Non, pour la durée et le motif de la dispense."
        },
        {
          "question": "Un titre de séjour européen suffit-il ?",
          "answer": "Non. Il ne remplace pas le passeport ni la nationalité exigée, sauf condition spécifique d’éligibilité à un visa."
        },
        {
          "question": "Puis-je entrer avec mon permis de conduire ?",
          "answer": "Non, il ne remplace pas un document de voyage reconnu."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère des Affaires étrangères : régime par nationalité"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Ministère des Affaires étrangères : conditions générales d'entrée"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Direction de la migration : conditions d'entrée et interdictions"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Pays admis avec carte d'identité"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa : informations officielles et frais"
        }
      ]
    },
    "en": {
      "title": "Enter Turkey without a visa in 2026: travel documents and entry",
      "metaDescription": "Visa-exempt? Prepare your passport or national ID, supporting travel documents, family arrangements and remaining permitted days.",
      "shortAnswer": "Visa-free entry means no prior visa is required for the qualifying purpose and duration. You still need an accepted travel document, must satisfy border requirements and must remain within the permitted stay.",
      "bosphorasHelp": "For a private or family stay, Bosphoras can coordinate accommodation, transfers and a programme around your travel dates.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Identify your actual travel document before booking",
          "body": "The nationality of the passport, not the country where you live, determines exemption. A French residence card held by an Indian citizen does not confer French citizens' visa-free rights. It may be relevant to e-Visa eligibility if the conditions are met. Holders of special travel documents, including refugee travel documents, should not assume ordinary-passport rules apply."
        },
        {
          "id": "visa-detail-2",
          "title": "Entering with national identity cards",
          "body": "Türkiye accepts national ID cards from several countries, including France, Germany, Belgium, Italy, Spain, the Netherlands, Switzerland, Portugal and Greece, under the relevant agreements. Transit in another country may have different rules. A residence card or driving licence is not the national identity document covered by these arrangements. Other administrative procedures may still require a passport."
        },
        {
          "id": "visa-detail-3",
          "title": "What to have available at the border",
          "body": "Visa-exempt visitors may be asked about the purpose of travel, accommodation address, means and departure plans. Keep hotel or invitation details, itinerary, tickets where applicable and appropriate insurance accessible without an internet connection. Border admission remains a condition of entry, not an additional visa application."
        },
        {
          "id": "visa-detail-4",
          "title": "What does visa-free entry cost?",
          "body": "No visa application fee is payable for a qualifying exemption. Transport, insurance, bookings and private assistance are separate costs. Do not pay a purported compulsory e-Visa issuance fee when your passport and trip qualify for exemption. A later residence permit is a separate procedure with its own fees."
        },
        {
          "id": "visa-detail-5",
          "title": "Record your entry and exit information",
          "body": "Border records establish dates relevant to your permitted stay. Keep flight confirmations and other travel records and any entry document issued when travelling on national ID. Replacing your passport does not erase days already spent in the country."
        },
        {
          "id": "visa-detail-6",
          "title": "Children and connecting flights",
          "body": "Each child needs the appropriate accepted travel document. When a minor travels without a parent, the airline or relevant authorities may require consent or custody evidence. A connection through a third country may require a passport even where Turkish entry permits an ID card. Plan the route for every member of the household."
        },
        {
          "id": "visa-detail-7",
          "title": "Example: visiting family from France",
          "body": "A French citizen travelling for two weeks with an accepted document generally requires no visa if sufficient authorised days remain. Previous extended visits may reduce the remaining quota. A return ticket does not replenish permission; the circumstances at each entry matter."
        }
      ],
      "faqs": [
        {
          "question": "Do I pay for an e-Visa if exempt?",
          "answer": "No, for the eligible purpose and duration."
        },
        {
          "question": "Does an EU residence card suffice?",
          "answer": "No. It is not a substitute for nationality or a travel document, though it can support some visa applications."
        },
        {
          "question": "Can I enter on a driving licence?",
          "answer": "No. A recognised travel document is required."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Foreign Ministry: visa rules by nationality"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Foreign Ministry: general visa rules"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Migration authority: entry requirements and entry bans"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Countries eligible for national ID entry"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa: official application information and fees"
        }
      ]
    },
    "ru": {
      "title": "Безвизовый въезд в Турцию в 2026 году: документы и правила",
      "metaDescription": "Что взять с собой при безвизовой поездке в Турцию: паспорт или удостоверение, билеты, документы детей и оставшиеся дни.",
      "shortAnswer": "Безвизовый въезд означает отсутствие необходимости заранее оформлять визу для разрешённой цели и срока. Необходимо иметь признанный документ, соблюдать условия пограничного контроля и не превышать разрешённый срок.",
      "bosphorasHelp": "Для частной или семейной поездки Bosphoras может организовать жильё, трансфер и программу на выбранные даты.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Какой документ вы предъявляете на границе?",
          "body": "Значение имеет гражданство по паспорту, а не страна проживания. Французский ВНЖ у гражданина Индии не даёт ему безвизового права французских граждан, хотя может учитываться при электронной визе. Владельцы специальных проездных документов, в том числе документов беженцев, не должны автоматически применять правила обычных паспортов."
        },
        {
          "id": "visa-detail-2",
          "title": "Въезд по национальному удостоверению личности",
          "body": "Турция принимает национальные удостоверения ряда стран, включая Францию, Германию, Бельгию, Италию, Испанию, Нидерланды, Швейцарию, Португалию и Грецию, по действующим соглашениям. При пересадке в другой стране правила могут отличаться. Карта ВНЖ или водительское удостоверение не заменяет национальный документ, прямо признанный соглашением. Для других процедур может потребоваться паспорт."
        },
        {
          "id": "visa-detail-3",
          "title": "Что подготовить для пограничного контроля",
          "body": "У безвизового путешественника могут уточнить цель визита, адрес проживания, наличие средств и план выезда. Держите под рукой сведения о бронировании или приглашении, маршрут, билеты и подходящую страховку. Сохраните контакты жилья без доступа к интернету. Это условия въезда, а не дополнительная заявка на визу."
        },
        {
          "id": "visa-detail-4",
          "title": "Сколько стоит безвизовый въезд?",
          "body": "При применимой льготе визовый сбор не уплачивается. Транспорт, страховка, бронирования и частное сопровождение — самостоятельные расходы. Не платите за якобы обязательную электронную визу, если ваш паспорт и цель поездки освобождены от неё. Последующее оформление ВНЖ имеет отдельные сборы."
        },
        {
          "id": "visa-detail-5",
          "title": "Фиксируйте фактические даты пересечения границы",
          "body": "Пограничные записи определяют даты пребывания. Сохраняйте билеты, подтверждения поездок и документы, выданные при въезде по удостоверению личности. Замена паспорта не отменяет ранее использованные дни."
        },
        {
          "id": "visa-detail-6",
          "title": "Дети и пересадки в других странах",
          "body": "Каждому ребёнку нужен подходящий признанный документ. Если ребёнок путешествует без одного или обоих родителей, перевозчик или соответствующие органы могут запросить согласие либо документы об опеке. Пересадка в третьей стране может потребовать паспорт, даже если для самой Турции разрешено удостоверение. Учитывайте документы всех путешественников."
        },
        {
          "id": "visa-detail-7",
          "title": "Пример: двухнедельный визит к семье",
          "body": "Гражданин Франции с признанным документом может обычно приехать на две недели без визы при наличии оставшихся дней. После нескольких длительных визитов необходимо пересчитать доступный срок. Обратный билет не восстанавливает лимит: значение имеют условия на каждую дату въезда."
        }
      ],
      "faqs": [
        {
          "question": "Нужно ли платить за e-Visa при безвизовом въезде?",
          "answer": "Нет, если цель и срок подпадают под освобождение."
        },
        {
          "question": "Достаточно ли европейского ВНЖ?",
          "answer": "Нет. Он может быть подтверждающим документом для некоторых виз, но не заменяет паспорт и гражданство."
        },
        {
          "question": "Можно ли въехать по водительским правам?",
          "answer": "Нет, необходим признанный проездной документ."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции: визовый режим по гражданству"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "МИД Турции: общие правила въезда"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Миграционная служба: условия и запреты на въезд"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Страны с правом въезда по удостоверению личности"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa: официальная информация и сборы"
        }
      ]
    },
    "ar": {
      "title": "دخول تركيا بدون تأشيرة 2026: الوثائق والإجراءات",
      "metaDescription": "إذا كنت معفى من التأشيرة، تعرّف إلى الجواز أو بطاقة الهوية والوثائق المطلوبة وسفر الأطفال وحساب مدة البقاء.",
      "shortAnswer": "يعني الدخول دون تأشيرة عدم الحاجة إلى إصدار تأشيرة مسبقة للغرض والمدة المشمولين بالإعفاء. لكن يلزم تقديم وثيقة سفر معترف بها واستيفاء شروط الحدود وعدم تجاوز المدة المسموحة.",
      "bosphorasHelp": "تستطيع Bosphoras تنسيق السكن والنقل وبرنامج الزيارة الخاصة أو العائلية بحسب تواريخ سفرك.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "حدد وثيقة السفر قبل الحجز",
          "body": "العبرة بجنسية جواز السفر لا ببلد الإقامة. فبطاقة الإقامة الفرنسية التي يحملها مواطن هندي لا تمنحه الإعفاء المخصص للفرنسيين، لكنها قد تكون مستنداً داعماً للتأشيرة الإلكترونية إذا استوفى الشروط. ولا ينبغي لحاملي وثائق السفر الخاصة، مثل وثائق اللاجئين، افتراض تطبيق قواعد الجواز العادي عليهم."
        },
        {
          "id": "visa-detail-2",
          "title": "متى تُقبل بطاقة الهوية الوطنية؟",
          "body": "تقبل تركيا بطاقات الهوية الوطنية لعدد من الدول ومنها فرنسا وألمانيا وبلجيكا وإيطاليا وإسبانيا وهولندا وسويسرا والبرتغال واليونان وفق الاتفاقيات. قد تختلف شروط دولة العبور أثناء الرحلة. ولا تعد بطاقة الإقامة أو رخصة القيادة بطاقة هوية وطنية مشمولة بالاتفاق. وقد يلزم الجواز لإجراءات أخرى."
        },
        {
          "id": "visa-detail-3",
          "title": "المستندات التي ينبغي حفظها",
          "body": "قد يُطلب من المسافر المعفى بيان هدف الرحلة وعنوان السكن والموارد وخطة المغادرة. احفظ تفاصيل الحجز أو الدعوة ومسار الرحلة والتذاكر والتأمين المناسب دون الحاجة إلى اتصال بالإنترنت. هذه شروط للقبول عند الحدود وليست طلباً إضافياً للتأشيرة."
        },
        {
          "id": "visa-detail-4",
          "title": "ما رسوم الدخول المعفى من التأشيرة؟",
          "body": "لا تدفع رسوم إصدار تأشيرة إذا كان الإعفاء ينطبق على رحلتك. وتظل مصاريف النقل والتأمين والحجوزات والمساعدة الخاصة منفصلة. لا تدفع رسوماً مزعومة لتأشيرة إلكترونية إلزامية عندما يكون جوازك وغرض السفر معفيين. ولتصريح الإقامة اللاحق رسومه ومستنداته المستقلة."
        },
        {
          "id": "visa-detail-5",
          "title": "احتفظ بسجل الدخول والخروج",
          "body": "تحدد سجلات الحدود تواريخ البقاء المهمة. احتفظ بتذاكر السفر وتأكيداته وأي وثيقة دخول تُعطى عند استخدام بطاقة الهوية. لا يؤدي استبدال جواز السفر إلى محو الأيام التي قضيتها في تركيا."
        },
        {
          "id": "visa-detail-6",
          "title": "سفر الأطفال والعبور عبر دولة أخرى",
          "body": "يحتاج كل طفل إلى وثيقة سفر مقبولة بحسب وضعه. وقد تطلب شركة النقل أو السلطات مستند موافقة الوالدين أو الحضانة عند السفر دون أحدهما. وقد يتطلب التوقف في دولة ثالثة جواز سفر حتى إذا سمحت تركيا ببطاقة الهوية. اختر مساراً يتوافق مع وثائق كل أفراد الأسرة."
        },
        {
          "id": "visa-detail-7",
          "title": "مثال: زيارة عائلية لأسبوعين",
          "body": "يستطيع مواطن فرنسي يحمل وثيقة مقبولة السفر عادة دون تأشيرة لأسبوعين إذا بقي لديه رصيد أيام كافٍ. وبعد زيارات طويلة سابقة عليه إعادة حساب المدة. لا تمنح تذكرة العودة رصيداً جديداً؛ العبرة بالشروط الفعلية عند كل دخول."
        }
      ],
      "faqs": [
        {
          "question": "هل أدفع رسوم تأشيرة إلكترونية رغم الإعفاء؟",
          "answer": "لا، ما دام الغرض والمدة مشمولين بالإعفاء."
        },
        {
          "question": "هل تكفي بطاقة إقامة أوروبية؟",
          "answer": "لا، لكنها قد تكون وثيقة داعمة لبعض التأشيرات ولا تحل محل الجواز والجنسية."
        },
        {
          "question": "هل يمكن الدخول برخصة القيادة؟",
          "answer": "لا، يلزم تقديم وثيقة سفر معترف بها."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية: قواعد التأشيرات حسب الجنسية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "وزارة الخارجية: القواعد العامة للدخول"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "إدارة الهجرة: شروط الدخول والمنع"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "الدول المؤهلة للدخول ببطاقة الهوية"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "التأشيرة الإلكترونية: معلومات الطلب والرسوم"
        }
      ]
    }
  },
  "visa-free-countries-turkey": {
    "fr": {
      "title": "Pays sans visa pour la Turquie en 2026 : tableau par nationalité",
      "metaDescription": "France, Russie, Kazakhstan, Chine et pays du Golfe : consultez les durées sans visa et les exceptions par passeport ordinaire en 2026.",
      "shortAnswer": "La dispense de visa turque est définie par nationalité et par catégorie de document. Le tableau ci-dessous présente une sélection de destinations importantes pour les voyageurs internationaux, à partir du régime officiel consulté le 17 novembre 2026.",
      "bosphorasHelp": "Vous préparez un départ familial, un voyage d’affaires ou une installation ? Bosphoras peut coordonner les aspects pratiques en fonction des documents et des dates de chaque voyageur.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Pays bénéficiant d’une dispense de visa",
          "body": "Les durées présentées concernent les passeports ordinaires pour un court séjour admissible. Le plafond général de 90 jours sur 180 s’applique, avec des modalités particulières prévues par certains accords. Une limite par entrée peut se cumuler avec ce plafond : c’est notamment le cas de l’Indonésie et de la Russie. Ce tableau ne concerne pas les visas de travail ou d’études. Les lignes visa obligatoire précisent également la durée et les conditions de l’e-Visa lorsque le ministère les publie.",
          "table": {
            "headers": [
              "Nationalité",
              "Durée ou condition"
            ],
            "rows": [
              [
                "France",
                "Jusqu’à 90 jours"
              ],
              [
                "Allemagne",
                "Jusqu’à 90 jours"
              ],
              [
                "Belgique",
                "Jusqu’à 90 jours"
              ],
              [
                "Espagne",
                "Jusqu’à 90 jours"
              ],
              [
                "Italie",
                "Jusqu’à 90 jours"
              ],
              [
                "Portugal",
                "Jusqu’à 90 jours"
              ],
              [
                "Royaume-Uni (tourisme)",
                "Jusqu’à 90 jours"
              ],
              [
                "États-Unis",
                "Jusqu’à 90 jours"
              ],
              [
                "Canada",
                "Jusqu’à 90 jours"
              ],
              [
                "Australie (tourisme/transit)",
                "Jusqu’à 90 jours"
              ],
              [
                "Kazakhstan",
                "Jusqu’à 90 jours"
              ],
              [
                "Azerbaïdjan",
                "Jusqu’à 90 jours"
              ],
              [
                "Kirghizistan",
                "Jusqu’à 90 jours"
              ],
              [
                "Ouzbékistan",
                "Jusqu’à 90 jours"
              ],
              [
                "Russie",
                "60 jours par séjour"
              ],
              [
                "Ukraine",
                "Jusqu’à 90 jours"
              ],
              [
                "Émirats arabes unis",
                "Jusqu’à 90 jours"
              ],
              [
                "Arabie saoudite",
                "Jusqu’à 90 jours"
              ],
              [
                "Qatar",
                "Jusqu’à 90 jours"
              ],
              [
                "Koweït",
                "Jusqu’à 90 jours"
              ],
              [
                "Bahreïn",
                "Jusqu’à 90 jours"
              ],
              [
                "Oman",
                "Jusqu’à 90 jours"
              ],
              [
                "Maroc",
                "Jusqu’à 90 jours"
              ],
              [
                "Tunisie",
                "Jusqu’à 90 jours"
              ],
              [
                "Jordanie",
                "Jusqu’à 90 jours"
              ],
              [
                "Liban",
                "Jusqu’à 90 jours"
              ],
              [
                "Iran",
                "Jusqu’à 90 jours"
              ],
              [
                "Chine (depuis 02/01/2026)",
                "Jusqu’à 90 jours"
              ],
              [
                "Japon",
                "Jusqu’à 90 jours"
              ],
              [
                "Corée du Sud",
                "Jusqu’à 90 jours"
              ],
              [
                "Malaisie",
                "Jusqu’à 90 jours"
              ],
              [
                "Singapour",
                "Jusqu’à 90 jours"
              ],
              [
                "Indonésie",
                "30 jours par entrée ; 90/180 au total"
              ],
              [
                "Thaïlande",
                "Jusqu’à 30 jours"
              ],
              [
                "Mongolie (tourisme)",
                "Jusqu’à 30 jours"
              ],
              [
                "Brésil",
                "Jusqu’à 90 jours"
              ],
              [
                "Argentine",
                "Jusqu’à 90 jours"
              ],
              [
                "Chili",
                "Jusqu’à 90 jours"
              ],
              [
                "Inde",
                "e-Visa sous conditions — 30 jours, 1 entrée — Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Pakistan",
                "e-Visa sous conditions — 30 jours, 1 entrée — Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Bangladesh",
                "e-Visa sous conditions — 30 jours, 1 entrée — Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Afghanistan",
                "e-Visa sous conditions — 30 jours, 1 entrée — Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Népal",
                "e-Visa sous conditions — 30 jours, 1 entrée — Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Philippines",
                "e-Visa sous conditions — 30 jours, 1 entrée — Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Palestine",
                "e-Visa sous conditions — 30 jours, 1 entrée — Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Guinée équatoriale",
                "e-Visa sous conditions — 30 jours, 1 entrée — Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Yémen",
                "e-Visa sous conditions — 30 jours, 1 entrée — Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Algérie",
                "Dispense selon l’âge ou visa — 90/180 si moins de 15 ou plus de 50 ans ; e-Visa 30 jours, 1 entrée — e-Visa : 15–18 ou 35–50 ans et justificatif admissible ; autres cas : consulat"
              ],
              [
                "Irak",
                "Dispense selon l’âge ou visa — 90/180 si moins de 15 ou plus de 50 ans ; e-Visa 30 jours, 1 entrée — 15–50 ans : justificatif admissible et conditions du portail"
              ],
              [
                "Libye",
                "Dispense selon l’âge ou visa — 90/180 si moins de 16 ou plus de 45 ans ; e-Visa 30 jours, 1 entrée — 16–45 ans : justificatif admissible et conditions du portail"
              ],
              [
                "Égypte",
                "Visa obligatoire — 30 jours, 1 entrée pour l’e-Visa des 15–45 ans — Moins de 15 ou plus de 45 ans : e-Visa sans condition supplémentaire ; 15–45 : justificatif admissible et compagnie agréée"
              ],
              [
                "Mexique",
                "e-Visa possible — 30 jours, 1 entrée — Conditions du portail officiel"
              ],
              [
                "Vietnam",
                "e-Visa possible — 30 jours, 1 entrée — Conditions du portail officiel"
              ],
              [
                "Suriname",
                "e-Visa possible — 30 jours, 1 entrée — Conditions du portail officiel"
              ],
              [
                "Fidji",
                "e-Visa possible — 30 jours, 1 entrée — Conditions du portail officiel"
              ],
              [
                "Timor oriental",
                "e-Visa possible — 30 jours, 1 entrée — Conditions du portail officiel"
              ],
              [
                "Afrique du Sud",
                "e-Visa possible — 30 jours, entrées multiples — Conditions du portail officiel"
              ],
              [
                "Maurice",
                "e-Visa possible — 30 jours, entrées multiples — Conditions du portail officiel"
              ],
              [
                "Maldives",
                "e-Visa possible — Visa de 3 mois, entrées multiples — Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Bahamas",
                "e-Visa possible — Visa de 3 mois, entrées multiples — Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Barbade",
                "e-Visa possible — Visa de 3 mois, entrées multiples — Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "République dominicaine",
                "e-Visa possible — Visa de 3 mois, entrées multiples — Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Antigua-et-Barbuda",
                "e-Visa possible — Visa de 3 mois, entrées multiples — Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Sainte-Lucie",
                "e-Visa possible — Visa de 3 mois, entrées multiples — Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Arménie",
                "e-Visa possible — Durée affichée lors de la demande — Selon le document de voyage"
              ],
              [
                "Namibie",
                "e-Visa possible — Durée affichée lors de la demande — Selon le document de voyage"
              ],
              [
                "Syrie",
                "Visa consulaire — Selon visa délivré — Demande auprès d’une représentation turque"
              ],
              [
                "Tadjikistan",
                "Visa consulaire — Selon visa délivré — Demande auprès d’une représentation turque"
              ],
              [
                "Turkménistan",
                "Visa consulaire — Selon visa délivré — Demande auprès d’une représentation turque"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Europe et Amérique du Nord",
          "body": "La France, l’Allemagne, l’Italie, l’Espagne et de nombreux autres pays européens disposent d’une dispense pour les courts séjours. Les passeports britanniques ordinaires sont également dispensés pour le tourisme, de même que les passeports ordinaires des États-Unis et du Canada. Les catégories britanniques BNO, British Subject et British Protected Person nécessitent une procédure différente."
        },
        {
          "id": "visa-detail-3",
          "title": "Asie centrale, Russie et évolution de 2026",
          "body": "Le Kazakhstan, l’Azerbaïdjan, le Kirghizistan et l’Ouzbékistan disposent de dispenses pouvant atteindre 90 jours. Les voyageurs russes doivent respecter un maximum de 60 jours par séjour sans visa. Depuis le 2 janvier 2026, les titulaires de passeports ordinaires chinois bénéficient eux aussi de la dispense de 90 jours sur 180. Il ne faut pas confondre le passeport chinois ordinaire avec les documents hongkongais particuliers."
        },
        {
          "id": "visa-detail-4",
          "title": "Golfe, Afrique du Nord et exceptions d’âge",
          "body": "Les passeports ordinaires des Émirats arabes unis, d’Arabie saoudite, du Qatar, du Koweït, de Bahreïn et d’Oman disposent de dispenses. Le Maroc et la Tunisie bénéficient également de séjours jusqu’à 90 jours. En revanche, l’Algérie et l’Irak prévoient une exemption touristique pour les moins de 15 ans et les plus de 50 ans ; entre ces âges, le visa est requis. Les conditions particulières d’e-Visa varient."
        },
        {
          "id": "visa-detail-5",
          "title": "Nationalités dont le visa reste nécessaire",
          "body": "Pour un passeport indien ou pakistanais ordinaire, un visa reste nécessaire. Un e-Visa peut être accessible si les critères relatifs à un document Schengen, américain, britannique ou irlandais et les autres conditions sont remplis. Les citoyens égyptiens ordinaires doivent aussi obtenir un visa ; leur éligibilité électronique dépend notamment de l’âge et, pour certains, des documents et du transporteur. Un passeport sud-africain ordinaire est soumis à visa et peut relever du parcours électronique."
        },
        {
          "id": "visa-detail-6",
          "title": "Famille de nationalités différentes : exemple",
          "body": "Une famille composée d’un parent français et d’un parent indien ne suit pas nécessairement le même parcours. Le premier peut relever de la dispense, tandis que le second doit obtenir un visa adapté. Les enfants sont considérés selon leur propre document et leur âge lorsqu’un accord l’impose. Préparez le dossier de chaque voyageur indépendamment avant de fixer les dates."
        },
        {
          "id": "visa-detail-7",
          "title": "Ce que signifie réellement une dispense",
          "body": "L’exemption supprime le visa préalable pour la visite autorisée, mais ne dispense ni de document valable ni des autres règles d’entrée. Le droit de travailler et les titres de séjour long répondent à une autre législation. Pour un séjour prolongé, le calcul des jours et le motif du futur titre doivent être préparés avant expiration."
        }
      ],
      "faqs": [
        {
          "question": "La Chine est-elle dispensée en 2026 ?",
          "answer": "Oui, pour les passeports ordinaires depuis le 2 janvier, jusqu’à 90 jours sur 180."
        },
        {
          "question": "Tous les citoyens algériens sont-ils dispensés ?",
          "answer": "Non. La dispense des passeports ordinaires vise notamment les moins de 15 ans et les plus de 50 ans pour le tourisme."
        },
        {
          "question": "Le tableau concerne-t-il tous les passeports ?",
          "answer": "Non, les catégories diplomatiques, de service et documents spéciaux peuvent suivre d’autres règles."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère des Affaires étrangères : régime par nationalité"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Ministère des Affaires étrangères : conditions générales d'entrée"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "Portail officiel e-Visa : modalités et paiement"
        }
      ]
    },
    "en": {
      "title": "Visa-free countries for Turkey in 2026: nationality table",
      "metaDescription": "See visa-free durations and exceptions for ordinary passports from Europe, Russia, Central Asia, China, the Gulf and other key countries.",
      "shortAnswer": "Turkish visa exemption depends on nationality and travel-document category. The table provides a selection of major international markets based on the official visa regime consulted on 17 November 2026.",
      "bosphorasHelp": "Planning a family visit, business trip or relocation? Bosphoras can coordinate arrangements around each traveller's documents and dates.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Visiting without a visa: country table",
          "body": "The durations cover ordinary passports for qualifying short stays. The general ceiling is 90 in 180 days, with specific agreement-based counting rules. A per-entry limit can exist alongside that ceiling, notably for Indonesian and Russian passports. The table does not cover work or study visas. Visa-required rows also include e-Visa duration and eligibility conditions where published by the ministry.",
          "table": {
            "headers": [
              "Nationality",
              "Duration or condition"
            ],
            "rows": [
              [
                "France",
                "Up to 90 days"
              ],
              [
                "Germany",
                "Up to 90 days"
              ],
              [
                "Belgium",
                "Up to 90 days"
              ],
              [
                "Spain",
                "Up to 90 days"
              ],
              [
                "Italy",
                "Up to 90 days"
              ],
              [
                "Portugal",
                "Up to 90 days"
              ],
              [
                "United Kingdom (tourism)",
                "Up to 90 days"
              ],
              [
                "United States",
                "Up to 90 days"
              ],
              [
                "Canada",
                "Up to 90 days"
              ],
              [
                "Australia (tourism/transit)",
                "Up to 90 days"
              ],
              [
                "Kazakhstan",
                "Up to 90 days"
              ],
              [
                "Azerbaijan",
                "Up to 90 days"
              ],
              [
                "Kyrgyzstan",
                "Up to 90 days"
              ],
              [
                "Uzbekistan",
                "Up to 90 days"
              ],
              [
                "Russia",
                "60 days per visit"
              ],
              [
                "Ukraine",
                "Up to 90 days"
              ],
              [
                "United Arab Emirates",
                "Up to 90 days"
              ],
              [
                "Saudi Arabia",
                "Up to 90 days"
              ],
              [
                "Qatar",
                "Up to 90 days"
              ],
              [
                "Kuwait",
                "Up to 90 days"
              ],
              [
                "Bahrain",
                "Up to 90 days"
              ],
              [
                "Oman",
                "Up to 90 days"
              ],
              [
                "Morocco",
                "Up to 90 days"
              ],
              [
                "Tunisia",
                "Up to 90 days"
              ],
              [
                "Jordan",
                "Up to 90 days"
              ],
              [
                "Lebanon",
                "Up to 90 days"
              ],
              [
                "Iran",
                "Up to 90 days"
              ],
              [
                "China (since 2 Jan 2026)",
                "Up to 90 days"
              ],
              [
                "Japan",
                "Up to 90 days"
              ],
              [
                "South Korea",
                "Up to 90 days"
              ],
              [
                "Malaysia",
                "Up to 90 days"
              ],
              [
                "Singapore",
                "Up to 90 days"
              ],
              [
                "Indonesia",
                "30 days per entry; 90/180 total"
              ],
              [
                "Thailand",
                "Up to 30 days"
              ],
              [
                "Mongolia (tourism)",
                "Up to 30 days"
              ],
              [
                "Brazil",
                "Up to 90 days"
              ],
              [
                "Argentina",
                "Up to 90 days"
              ],
              [
                "Chile",
                "Up to 90 days"
              ],
              [
                "India",
                "Conditional e-Visa — 30 days, single entry — Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Pakistan",
                "Conditional e-Visa — 30 days, single entry — Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Bangladesh",
                "Conditional e-Visa — 30 days, single entry — Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Afghanistan",
                "Conditional e-Visa — 30 days, single entry — Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Nepal",
                "Conditional e-Visa — 30 days, single entry — Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Philippines",
                "Conditional e-Visa — 30 days, single entry — Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Palestine",
                "Conditional e-Visa — 30 days, single entry — Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Equatorial Guinea",
                "Conditional e-Visa — 30 days, single entry — Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Yemen",
                "Conditional e-Visa — 30 days, single entry — Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Algeria",
                "Age-based exemption or visa — 90/180 if under 15 or over 50; e-Visa 30 days, single entry — Conditional e-Visa ages 15–18 or 35–50 with eligible supporting document; otherwise consulate"
              ],
              [
                "Iraq",
                "Age-based exemption or visa — 90/180 if under 15 or over 50; e-Visa 30 days, single entry — Ages 15–50: eligible supporting document plus portal conditions"
              ],
              [
                "Libya",
                "Age-based exemption or visa — 90/180 if under 16 or over 45; e-Visa 30 days, single entry — Ages 16–45: eligible supporting document and portal conditions"
              ],
              [
                "Egypt",
                "Visa required — 30 days, single entry for ages 15–45 via e-Visa — Under 15 or over 45: no extra e-Visa condition; ages 15–45: eligible supporting document and approved carrier"
              ],
              [
                "Mexico",
                "e-Visa available — 30 days, single entry — Official portal conditions"
              ],
              [
                "Vietnam",
                "e-Visa available — 30 days, single entry — Official portal conditions"
              ],
              [
                "Suriname",
                "e-Visa available — 30 days, single entry — Official portal conditions"
              ],
              [
                "Fiji",
                "e-Visa available — 30 days, single entry — Official portal conditions"
              ],
              [
                "Timor-Leste",
                "e-Visa available — 30 days, single entry — Official portal conditions"
              ],
              [
                "South Africa",
                "e-Visa available — 30 days, multiple entry — Official portal conditions"
              ],
              [
                "Mauritius",
                "e-Visa available — 30 days, multiple entry — Official portal conditions"
              ],
              [
                "Maldives",
                "e-Visa available — Three-month, multiple-entry visa — Read the permitted stay on the issued visa"
              ],
              [
                "Bahamas",
                "e-Visa available — Three-month, multiple-entry visa — Read the permitted stay on the issued visa"
              ],
              [
                "Barbados",
                "e-Visa available — Three-month, multiple-entry visa — Read the permitted stay on the issued visa"
              ],
              [
                "Dominican Republic",
                "e-Visa available — Three-month, multiple-entry visa — Read the permitted stay on the issued visa"
              ],
              [
                "Antigua and Barbuda",
                "e-Visa available — Three-month, multiple-entry visa — Read the permitted stay on the issued visa"
              ],
              [
                "Saint Lucia",
                "e-Visa available — Three-month, multiple-entry visa — Read the permitted stay on the issued visa"
              ],
              [
                "Armenia",
                "e-Visa available — Duration displayed during application — Depends on travel document"
              ],
              [
                "Namibia",
                "e-Visa available — Duration displayed during application — Depends on travel document"
              ],
              [
                "Syria",
                "Consular visa — As issued — Apply through a Turkish mission"
              ],
              [
                "Tajikistan",
                "Consular visa — As issued — Apply through a Turkish mission"
              ],
              [
                "Turkmenistan",
                "Consular visa — As issued — Apply through a Turkish mission"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Europe and North America",
          "body": "France, Germany, Italy, Spain and many other European countries benefit from short-stay exemptions. Ordinary British passport holders are exempt for tourism, as are ordinary US and Canadian passport holders. British National Overseas, British Subject and British Protected Person passports follow a different route."
        },
        {
          "id": "visa-detail-3",
          "title": "Central Asia, Russia and the 2026 change",
          "body": "Kazakhstan, Azerbaijan, Kyrgyzstan and Uzbekistan have exemptions of up to 90 days. Russian ordinary passport holders have a maximum of 60 days per visa-free visit. From 2 January 2026, ordinary Chinese passport holders also qualify for 90 in 180 days. Distinguish ordinary mainland Chinese passports from specific Hong Kong travel documents."
        },
        {
          "id": "visa-detail-4",
          "title": "Gulf countries, North Africa and age-based exemptions",
          "body": "Ordinary passport holders from the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman qualify for exemptions. Morocco and Tunisia also have up to 90 days. Algeria and Iraq have tourist exemptions for ordinary-passport holders under 15 and over 50; those within the intervening age range require visas. Conditional e-Visa rules differ."
        },
        {
          "id": "visa-detail-5",
          "title": "Nationalities requiring a visa",
          "body": "Ordinary Indian and Pakistani passport holders need visas; an electronic visa may be available if they hold the specified Schengen, US, UK or Irish documentation and meet other conditions. Ordinary Egyptian passport holders also need visas, with electronic eligibility differing by age and in certain cases supporting documentation and airline. Ordinary South African passport holders require a visa and may use the electronic route."
        },
        {
          "id": "visa-detail-6",
          "title": "Mixed-nationality households",
          "body": "A French parent and an Indian parent may need different documents: the former may be exempt, the latter must obtain the appropriate visa. Each child's passport and age-based criteria matter. Prepare each traveller's documentation before setting the itinerary."
        },
        {
          "id": "visa-detail-7",
          "title": "What exemption does and does not provide",
          "body": "Exemption removes the advance visa requirement for the qualifying visit, not the other entry conditions. Employment and long-term residence follow separate legislation. For an extended stay, calculate the remaining permitted days and prepare the appropriate residence category before the current permission expires."
        }
      ],
      "faqs": [
        {
          "question": "Is China visa-exempt in 2026?",
          "answer": "Yes, for ordinary passports from 2 January, up to 90 days in 180."
        },
        {
          "question": "Are all Algerian citizens exempt?",
          "answer": "No. Ordinary-passport exemption includes tourist travellers under 15 or over 50."
        },
        {
          "question": "Do the table rules cover official passports?",
          "answer": "No. Diplomatic, service and special travel documents may be subject to different provisions."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Foreign Ministry: visa rules by nationality"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Foreign Ministry: general visa rules"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "Official e-Visa portal: applications and payment"
        }
      ]
    },
    "ru": {
      "title": "Безвизовые страны для Турции в 2026 году: таблица по гражданству",
      "metaDescription": "Таблица сроков безвизового въезда для обычных паспортов: Россия, Казахстан, Европа, Китай, страны Персидского залива и исключения.",
      "shortAnswer": "Турецкий безвизовый режим зависит от гражданства и типа проездного документа. В таблице представлены популярные направления международных поездок по официальным правилам, изученным 17 ноября 2026 года.",
      "bosphorasHelp": "Если вы планируете семейный визит, деловую поездку или переезд, Bosphoras может организовать практические вопросы с учётом документов и дат каждого путешественника.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Таблица стран с безвизовым режимом",
          "body": "Указаны обычные паспорта и разрешённые краткосрочные цели. Общий предел — 90 дней из 180, при этом отдельные соглашения имеют собственные правила подсчёта. Ограничение за один въезд может действовать вместе с общим пределом, например для Индонезии и России. Работа и учёба регулируются отдельно. Для визовых стран также указаны сроки и условия электронной визы, опубликованные МИД.",
          "table": {
            "headers": [
              "Гражданство",
              "Срок или условие"
            ],
            "rows": [
              [
                "Франция",
                "До 90 дней"
              ],
              [
                "Германия",
                "До 90 дней"
              ],
              [
                "Бельгия",
                "До 90 дней"
              ],
              [
                "Испания",
                "До 90 дней"
              ],
              [
                "Италия",
                "До 90 дней"
              ],
              [
                "Португалия",
                "До 90 дней"
              ],
              [
                "Великобритания (туризм)",
                "До 90 дней"
              ],
              [
                "США",
                "До 90 дней"
              ],
              [
                "Канада",
                "До 90 дней"
              ],
              [
                "Австралия (туризм/транзит)",
                "До 90 дней"
              ],
              [
                "Казахстан",
                "До 90 дней"
              ],
              [
                "Азербайджан",
                "До 90 дней"
              ],
              [
                "Кыргызстан",
                "До 90 дней"
              ],
              [
                "Узбекистан",
                "До 90 дней"
              ],
              [
                "Россия",
                "60 дней за визит"
              ],
              [
                "Украина",
                "До 90 дней"
              ],
              [
                "ОАЭ",
                "До 90 дней"
              ],
              [
                "Саудовская Аравия",
                "До 90 дней"
              ],
              [
                "Катар",
                "До 90 дней"
              ],
              [
                "Кувейт",
                "До 90 дней"
              ],
              [
                "Бахрейн",
                "До 90 дней"
              ],
              [
                "Оман",
                "До 90 дней"
              ],
              [
                "Марокко",
                "До 90 дней"
              ],
              [
                "Тунис",
                "До 90 дней"
              ],
              [
                "Иордания",
                "До 90 дней"
              ],
              [
                "Ливан",
                "До 90 дней"
              ],
              [
                "Иран",
                "До 90 дней"
              ],
              [
                "Китай (с 02.01.2026)",
                "До 90 дней"
              ],
              [
                "Япония",
                "До 90 дней"
              ],
              [
                "Южная Корея",
                "До 90 дней"
              ],
              [
                "Малайзия",
                "До 90 дней"
              ],
              [
                "Сингапур",
                "До 90 дней"
              ],
              [
                "Индонезия",
                "30 дней за въезд; всего 90/180"
              ],
              [
                "Таиланд",
                "До 30 дней"
              ],
              [
                "Монголия (туризм)",
                "До 30 дней"
              ],
              [
                "Бразилия",
                "До 90 дней"
              ],
              [
                "Аргентина",
                "До 90 дней"
              ],
              [
                "Чили",
                "До 90 дней"
              ],
              [
                "Индия",
                "Электронная виза при условиях — 30 дней, однократная — Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Пакистан",
                "Электронная виза при условиях — 30 дней, однократная — Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Бангладеш",
                "Электронная виза при условиях — 30 дней, однократная — Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Афганистан",
                "Электронная виза при условиях — 30 дней, однократная — Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Непал",
                "Электронная виза при условиях — 30 дней, однократная — Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Филиппины",
                "Электронная виза при условиях — 30 дней, однократная — Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Палестина",
                "Электронная виза при условиях — 30 дней, однократная — Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Экваториальная Гвинея",
                "Электронная виза при условиях — 30 дней, однократная — Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Йемен",
                "Электронная виза при условиях — 30 дней, однократная — Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Алжир",
                "Освобождение по возрасту или виза — 90/180 до 15 или старше 50; электронная виза 30 дней, один въезд — Электронная виза для 15–18 или 35–50 лет с подходящим документом; иначе консульство"
              ],
              [
                "Ирак",
                "Освобождение по возрасту или виза — 90/180 до 15 или старше 50; электронная виза 30 дней, один въезд — 15–50 лет: подходящий документ и условия портала"
              ],
              [
                "Ливия",
                "Освобождение по возрасту или виза — 90/180 до 16 или старше 45; электронная виза 30 дней, один въезд — 16–45 лет: подходящий документ и условия портала"
              ],
              [
                "Египет",
                "Виза обязательна — 30 дней, один въезд для электронной визы в 15–45 лет — До 15 или старше 45: без дополнительных условий; 15–45: подходящий документ и разрешённая авиакомпания"
              ],
              [
                "Мексика",
                "Электронная виза доступна — 30 дней, один въезд — Условия официального портала"
              ],
              [
                "Вьетнам",
                "Электронная виза доступна — 30 дней, один въезд — Условия официального портала"
              ],
              [
                "Суринам",
                "Электронная виза доступна — 30 дней, один въезд — Условия официального портала"
              ],
              [
                "Фиджи",
                "Электронная виза доступна — 30 дней, один въезд — Условия официального портала"
              ],
              [
                "Восточный Тимор",
                "Электронная виза доступна — 30 дней, один въезд — Условия официального портала"
              ],
              [
                "ЮАР",
                "Электронная виза доступна — 30 дней, многократная — Условия официального портала"
              ],
              [
                "Маврикий",
                "Электронная виза доступна — 30 дней, многократная — Условия официального портала"
              ],
              [
                "Мальдивы",
                "Электронная виза доступна — Трёхмесячная, многократная — Срок пребывания указан в выданной визе"
              ],
              [
                "Багамы",
                "Электронная виза доступна — Трёхмесячная, многократная — Срок пребывания указан в выданной визе"
              ],
              [
                "Барбадос",
                "Электронная виза доступна — Трёхмесячная, многократная — Срок пребывания указан в выданной визе"
              ],
              [
                "Доминиканская Республика",
                "Электронная виза доступна — Трёхмесячная, многократная — Срок пребывания указан в выданной визе"
              ],
              [
                "Антигуа и Барбуда",
                "Электронная виза доступна — Трёхмесячная, многократная — Срок пребывания указан в выданной визе"
              ],
              [
                "Сент-Люсия",
                "Электронная виза доступна — Трёхмесячная, многократная — Срок пребывания указан в выданной визе"
              ],
              [
                "Армения",
                "Электронная виза доступна — Срок показывается при подаче — Зависит от проездного документа"
              ],
              [
                "Намибия",
                "Электронная виза доступна — Срок показывается при подаче — Зависит от проездного документа"
              ],
              [
                "Сирия",
                "Консульская виза — Согласно выданной визе — Подача в турецкое представительство"
              ],
              [
                "Таджикистан",
                "Консульская виза — Согласно выданной визе — Подача в турецкое представительство"
              ],
              [
                "Туркменистан",
                "Консульская виза — Согласно выданной визе — Подача в турецкое представительство"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Европа и Северная Америка",
          "body": "Франция, Германия, Италия, Испания и многие другие европейские государства имеют безвизовый режим для коротких поездок. Владельцы обычного британского паспорта освобождены от виз для туризма, как и владельцы обычных паспортов США и Канады. Для британских документов BNO, British Subject и British Protected Person действуют иные процедуры."
        },
        {
          "id": "visa-detail-3",
          "title": "Средняя Азия, Россия и изменения 2026 года",
          "body": "Казахстан, Азербайджан, Кыргызстан и Узбекистан имеют безвизовые сроки до 90 дней. Владельцы обычного российского паспорта могут находиться без визы до 60 дней за один визит. С 2 января 2026 года для обычных паспортов КНР действует освобождение до 90 дней из 180. Не следует путать обычный паспорт КНР с отдельными документами Гонконга."
        },
        {
          "id": "visa-detail-4",
          "title": "Персидский залив, Северная Африка и возрастные ограничения",
          "body": "Освобождение от виз действует для обычных паспортов ОАЭ, Саудовской Аравии, Катара, Кувейта, Бахрейна и Омана. Марокко и Тунис также имеют безвизовые сроки до 90 дней. Для Алжира и Ирака предусмотрено туристическое освобождение для владельцев обычных паспортов младше 15 и старше 50 лет; в промежуточном возрасте требуется виза. Условия электронных виз различаются."
        },
        {
          "id": "visa-detail-5",
          "title": "Гражданства, для которых виза обязательна",
          "body": "Владельцам обычных паспортов Индии и Пакистана нужна виза. Электронный вариант может быть доступен при наличии предусмотренного документа Шенгенской зоны, США, Великобритании или Ирландии и соблюдении остальных условий. Для обычных паспортов Египта также нужна виза; электронная процедура зависит от возраста, а в некоторых случаях от документов и авиакомпании. Гражданам ЮАР с обычным паспортом нужна виза, возможна электронная подача."
        },
        {
          "id": "visa-detail-6",
          "title": "Семья с разным гражданством",
          "body": "Французский и индийский родители одной семьи могут иметь разные правила: один освобождён от визы, другому требуется подходящее разрешение. Для каждого ребёнка учитываются его паспорт и возрастные условия. Подготовьте документы всех участников до выбора окончательных дат."
        },
        {
          "id": "visa-detail-7",
          "title": "Что даёт и чего не даёт освобождение",
          "body": "Безвизовый режим отменяет предварительную визу для соответствующего визита, но не прочие условия въезда. Работа и долгосрочное проживание оформляются по отдельным правилам. Для продолжительного пребывания рассчитайте оставшиеся дни и заранее подготовьте подходящее основание ВНЖ."
        }
      ],
      "faqs": [
        {
          "question": "Нужна ли гражданам Китая виза в 2026 году?",
          "answer": "С 2 января владельцы обычных паспортов освобождены на срок до 90 дней из 180."
        },
        {
          "question": "Все ли граждане Алжира освобождены?",
          "answer": "Нет. Для обычных паспортов предусмотрено туристическое освобождение, в частности, для лиц младше 15 и старше 50 лет."
        },
        {
          "question": "Учитываются ли дипломатические паспорта?",
          "answer": "Нет, в таблице обычные паспорта; официальные и специальные документы имеют отдельные правила."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции: визовый режим по гражданству"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "МИД Турции: общие правила въезда"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "Официальный портал электронной визы: оформление и оплата"
        }
      ]
    },
    "ar": {
      "title": "الدول المعفاة من تأشيرة تركيا 2026: جدول الجنسيات والمدد",
      "metaDescription": "قائمة مختارة لمدد دخول تركيا دون تأشيرة: دول الخليج وأوروبا وروسيا وكازاخستان والصين والاستثناءات بحسب الجواز.",
      "shortAnswer": "يتحدد الإعفاء التركي حسب الجنسية ونوع وثيقة السفر. يعرض الجدول مجموعة من الأسواق الدولية المهمة وفق نظام التأشيرات الرسمي الذي تمت مراجعته في 17 نوفمبر 2026.",
      "bosphorasHelp": "إذا كنت تخطط لرحلة أسرية أو زيارة أعمال أو انتقال، تستطيع Bosphoras تنسيق الترتيبات بحسب وثائق كل مسافر وتواريخه.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "جدول البلدان المعفاة من التأشيرة",
          "body": "تخص المدد الجوازات العادية والزيارات القصيرة المسموح بها. السقف العام 90 يوماً خلال 180 يوماً مع قواعد خاصة لبعض الاتفاقيات. وقد يجتمع حد الزيارة الواحدة مع الحد الإجمالي، كما في إندونيسيا وروسيا. ولا يشمل الجدول تأشيرات العمل أو الدراسة. وتوضح صفوف التأشيرة الإلزامية مدة الإلكترونية وشروطها عندما تنشرها الوزارة.",
          "table": {
            "headers": [
              "الجنسية",
              "المدة أو الشرط"
            ],
            "rows": [
              [
                "فرنسا",
                "حتى 90 يوماً"
              ],
              [
                "ألمانيا",
                "حتى 90 يوماً"
              ],
              [
                "بلجيكا",
                "حتى 90 يوماً"
              ],
              [
                "إسبانيا",
                "حتى 90 يوماً"
              ],
              [
                "إيطاليا",
                "حتى 90 يوماً"
              ],
              [
                "البرتغال",
                "حتى 90 يوماً"
              ],
              [
                "المملكة المتحدة (السياحة)",
                "حتى 90 يوماً"
              ],
              [
                "الولايات المتحدة",
                "حتى 90 يوماً"
              ],
              [
                "كندا",
                "حتى 90 يوماً"
              ],
              [
                "أستراليا (السياحة والعبور)",
                "حتى 90 يوماً"
              ],
              [
                "كازاخستان",
                "حتى 90 يوماً"
              ],
              [
                "أذربيجان",
                "حتى 90 يوماً"
              ],
              [
                "قيرغيزستان",
                "حتى 90 يوماً"
              ],
              [
                "أوزبكستان",
                "حتى 90 يوماً"
              ],
              [
                "روسيا",
                "60 يوماً لكل زيارة"
              ],
              [
                "أوكرانيا",
                "حتى 90 يوماً"
              ],
              [
                "الإمارات العربية المتحدة",
                "حتى 90 يوماً"
              ],
              [
                "السعودية",
                "حتى 90 يوماً"
              ],
              [
                "قطر",
                "حتى 90 يوماً"
              ],
              [
                "الكويت",
                "حتى 90 يوماً"
              ],
              [
                "البحرين",
                "حتى 90 يوماً"
              ],
              [
                "عُمان",
                "حتى 90 يوماً"
              ],
              [
                "المغرب",
                "حتى 90 يوماً"
              ],
              [
                "تونس",
                "حتى 90 يوماً"
              ],
              [
                "الأردن",
                "حتى 90 يوماً"
              ],
              [
                "لبنان",
                "حتى 90 يوماً"
              ],
              [
                "إيران",
                "حتى 90 يوماً"
              ],
              [
                "الصين (منذ 2 يناير 2026)",
                "حتى 90 يوماً"
              ],
              [
                "اليابان",
                "حتى 90 يوماً"
              ],
              [
                "كوريا الجنوبية",
                "حتى 90 يوماً"
              ],
              [
                "ماليزيا",
                "حتى 90 يوماً"
              ],
              [
                "سنغافورة",
                "حتى 90 يوماً"
              ],
              [
                "إندونيسيا",
                "30 يوماً لكل دخول؛ الإجمالي 90/180"
              ],
              [
                "تايلاند",
                "حتى 30 يوماً"
              ],
              [
                "منغوليا (السياحة)",
                "حتى 30 يوماً"
              ],
              [
                "البرازيل",
                "حتى 90 يوماً"
              ],
              [
                "الأرجنتين",
                "حتى 90 يوماً"
              ],
              [
                "تشيلي",
                "حتى 90 يوماً"
              ],
              [
                "الهند",
                "تأشيرة إلكترونية بشروط — 30 يوماً، دخول واحد — تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "باكستان",
                "تأشيرة إلكترونية بشروط — 30 يوماً، دخول واحد — تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "بنغلاديش",
                "تأشيرة إلكترونية بشروط — 30 يوماً، دخول واحد — تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "أفغانستان",
                "تأشيرة إلكترونية بشروط — 30 يوماً، دخول واحد — تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "نيبال",
                "تأشيرة إلكترونية بشروط — 30 يوماً، دخول واحد — تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "الفلبين",
                "تأشيرة إلكترونية بشروط — 30 يوماً، دخول واحد — تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "فلسطين",
                "تأشيرة إلكترونية بشروط — 30 يوماً، دخول واحد — تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "غينيا الاستوائية",
                "تأشيرة إلكترونية بشروط — 30 يوماً، دخول واحد — تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "اليمن",
                "تأشيرة إلكترونية بشروط — 30 يوماً، دخول واحد — تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "الجزائر",
                "إعفاء حسب العمر أو تأشيرة — 90/180 دون 15 أو فوق 50؛ الإلكترونية 30 يوماً لدخول واحد — الإلكترونية للأعمار 15–18 أو 35–50 مع وثيقة مؤهلة؛ وإلا القنصلية"
              ],
              [
                "العراق",
                "إعفاء حسب العمر أو تأشيرة — 90/180 دون 15 أو فوق 50؛ الإلكترونية 30 يوماً لدخول واحد — 15–50 عاماً: وثيقة مؤهلة وشروط المنصة"
              ],
              [
                "ليبيا",
                "إعفاء حسب العمر أو تأشيرة — 90/180 دون 16 أو فوق 45؛ الإلكترونية 30 يوماً لدخول واحد — 16–45 عاماً: وثيقة مؤهلة وشروط المنصة"
              ],
              [
                "مصر",
                "تأشيرة إلزامية — 30 يوماً، دخول واحد للإلكترونية بين 15 و45 — دون 15 أو فوق 45: دون شرط إضافي؛ 15–45: وثيقة مؤهلة وناقل معتمد"
              ],
              [
                "المكسيك",
                "تأشيرة إلكترونية متاحة — 30 يوماً، دخول واحد — شروط المنصة الرسمية"
              ],
              [
                "فيتنام",
                "تأشيرة إلكترونية متاحة — 30 يوماً، دخول واحد — شروط المنصة الرسمية"
              ],
              [
                "سورينام",
                "تأشيرة إلكترونية متاحة — 30 يوماً، دخول واحد — شروط المنصة الرسمية"
              ],
              [
                "فيجي",
                "تأشيرة إلكترونية متاحة — 30 يوماً، دخول واحد — شروط المنصة الرسمية"
              ],
              [
                "تيمور الشرقية",
                "تأشيرة إلكترونية متاحة — 30 يوماً، دخول واحد — شروط المنصة الرسمية"
              ],
              [
                "جنوب إفريقيا",
                "تأشيرة إلكترونية متاحة — 30 يوماً، دخول متعدد — شروط المنصة الرسمية"
              ],
              [
                "موريشيوس",
                "تأشيرة إلكترونية متاحة — 30 يوماً، دخول متعدد — شروط المنصة الرسمية"
              ],
              [
                "المالديف",
                "تأشيرة إلكترونية متاحة — تأشيرة ثلاثة أشهر، دخول متعدد — مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "الباهاما",
                "تأشيرة إلكترونية متاحة — تأشيرة ثلاثة أشهر، دخول متعدد — مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "باربادوس",
                "تأشيرة إلكترونية متاحة — تأشيرة ثلاثة أشهر، دخول متعدد — مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "جمهورية الدومينيكان",
                "تأشيرة إلكترونية متاحة — تأشيرة ثلاثة أشهر، دخول متعدد — مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "أنتيغوا وباربودا",
                "تأشيرة إلكترونية متاحة — تأشيرة ثلاثة أشهر، دخول متعدد — مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "سانت لوسيا",
                "تأشيرة إلكترونية متاحة — تأشيرة ثلاثة أشهر، دخول متعدد — مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "أرمينيا",
                "تأشيرة إلكترونية متاحة — المدة تظهر عند الطلب — بحسب وثيقة السفر"
              ],
              [
                "ناميبيا",
                "تأشيرة إلكترونية متاحة — المدة تظهر عند الطلب — بحسب وثيقة السفر"
              ],
              [
                "سوريا",
                "تأشيرة قنصلية — وفق التأشيرة الصادرة — الطلب لدى ممثلية تركية"
              ],
              [
                "طاجيكستان",
                "تأشيرة قنصلية — وفق التأشيرة الصادرة — الطلب لدى ممثلية تركية"
              ],
              [
                "تركمانستان",
                "تأشيرة قنصلية — وفق التأشيرة الصادرة — الطلب لدى ممثلية تركية"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "أوروبا وأمريكا الشمالية",
          "body": "تتمتع فرنسا وألمانيا وإيطاليا وإسبانيا ودول أوروبية عديدة بالإعفاء للزيارات القصيرة. ويُعفى حاملو الجواز البريطاني العادي للسياحة وكذلك الجوازات الأمريكية والكندية العادية. وتختلف الإجراءات الخاصة بالجوازات البريطانية من فئات BNO وBritish Subject وBritish Protected Person."
        },
        {
          "id": "visa-detail-3",
          "title": "آسيا الوسطى وروسيا والتغيير في 2026",
          "body": "تتمتع كازاخستان وأذربيجان وقيرغيزستان وأوزبكستان بإعفاء يصل إلى 90 يوماً. ويبلغ حد الزيارة الواحدة لحاملي الجواز الروسي العادي 60 يوماً. ومنذ 2 يناير 2026 أصبح حاملو الجواز الصيني العادي معفيين حتى 90 يوماً خلال 180. ويجب التمييز بين الجواز الصيني وبعض وثائق هونغ كونغ."
        },
        {
          "id": "visa-detail-4",
          "title": "الخليج وشمال إفريقيا والاستثناءات العمرية",
          "body": "تتمتع الجوازات العادية للإمارات والسعودية وقطر والكويت والبحرين وعُمان بالإعفاء. كما يتمتع المغرب وتونس بمدة تصل إلى 90 يوماً. أما الجزائر والعراق فيوجد إعفاء سياحي لحاملي الجواز العادي دون 15 عاماً وفوق 50 عاماً، وتتطلب الأعمار الواقعة بينهما تأشيرة. وتختلف شروط التأشيرة الإلكترونية."
        },
        {
          "id": "visa-detail-5",
          "title": "الجنسيات التي لا تزال تحتاج إلى تأشيرة",
          "body": "يحتاج حامل الجواز الهندي أو الباكستاني العادي إلى تأشيرة، وقد تتاح الإلكترونية عند وجود المستند المؤهل من شنغن أو الولايات المتحدة أو المملكة المتحدة أو إيرلندا واستيفاء الشروط الأخرى. ويحتاج المصريون من حاملي الجوازات العادية إلى تأشيرة أيضاً وتتأثر أهلية الإلكترونية بالعمر، وأحياناً بالوثائق وشركة الطيران. ويحتاج حامل الجواز الجنوب إفريقي العادي إلى تأشيرة مع إمكان المسار الإلكتروني."
        },
        {
          "id": "visa-detail-6",
          "title": "الأسرة التي تضم جنسيات مختلفة",
          "body": "قد يخضع والد فرنسي ووالد هندي في الأسرة نفسها لمسارين مختلفين: الأول للإعفاء والثاني لتأشيرة مناسبة. ويُنظر إلى وثيقة كل طفل وشروط عمره على حدة. جهز ملفات المسافرين قبل تحديد المواعيد النهائية."
        },
        {
          "id": "visa-detail-7",
          "title": "ما الذي يتيحه الإعفاء فعلاً؟",
          "body": "يلغي الإعفاء الحصول المسبق على التأشيرة للزيارة المؤهلة لكنه لا يلغي بقية شروط الدخول. ويخضع العمل والإقامة الطويلة لتشريعات أخرى. وللبقاء فترة أطول احسب الأيام المتبقية وحدد أساس الإقامة قبل انتهاء حق البقاء."
        }
      ],
      "faqs": [
        {
          "question": "هل الصين معفاة في 2026؟",
          "answer": "نعم للجوازات العادية منذ 2 يناير حتى 90 يوماً خلال 180."
        },
        {
          "question": "هل جميع الجزائريين معفيون؟",
          "answer": "لا، يشمل الإعفاء السياحي للجواز العادي من هم دون 15 وفوق 50 عاماً."
        },
        {
          "question": "هل يشمل الجدول الجوازات الرسمية؟",
          "answer": "لا، قد تخضع الجوازات الدبلوماسية والخدمية والوثائق الخاصة لقواعد مختلفة."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية: قواعد التأشيرات حسب الجنسية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "وزارة الخارجية: القواعد العامة للدخول"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "منصة التأشيرة الإلكترونية الرسمية: الطلب والدفع"
        }
      ]
    }
  },
  "turkey-visa-free-stay-duration": {
    "fr": {
      "title": "Durée du séjour sans visa en Turquie : calcul des 90 jours sur 180",
      "metaDescription": "Calculez vos jours autorisés en Turquie avec des exemples datés, les séjours multiples, les dates de sortie et la règle des 180 jours.",
      "shortAnswer": "Pour les séjours courts relevant du plafond général, les 180 jours constituent une fenêtre mobile et non une année civile ou un semestre fixe. À chaque jour de présence, on examine les 179 jours précédents en plus du jour courant. Une limite plus courte par entrée peut aussi s’appliquer.",
      "bosphorasHelp": "Vous devez organiser plusieurs séjours ou une installation ? Bosphoras peut vous aider à établir un calendrier de déplacement et à coordonner votre dossier de résidence.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Comment fonctionne le compteur ?",
          "body": "Additionnez les jours de présence dans les 180 jours qui se terminent à la date étudiée. Pour un calcul prudent, comptez le jour d’entrée et le jour de sortie comme des jours de présence. Si vous quittez la Turquie, les jours déjà utilisés ne disparaissent pas dès le passage en frontière. Ils sortent du calcul progressivement lorsqu’ils deviennent antérieurs à la fenêtre."
        },
        {
          "id": "visa-detail-2",
          "title": "Exemple 1 : deux voyages avant un troisième",
          "body": "Un voyageur disposant de 90 jours sur 180 effectue un premier séjour du 1er au 30 septembre 2026 (30 jours), puis du 10 octobre au 8 novembre (30 jours). Au 20 novembre, ces 60 jours se situent encore dans la fenêtre de 180 jours. Il peut donc planifier, à ce stade et en l’absence d’autre séjour, 30 jours supplémentaires. Un séjour du 20 novembre au 19 décembre inclus utilise les 30 jours restants."
        },
        {
          "id": "visa-detail-3",
          "title": "Exemple 2 : le quota se libère progressivement",
          "body": "Pour une présence continue du 1er janvier au 31 mars 2026, les 90 jours sont consommés. Le 29 juin, la fenêtre de 180 jours inclut encore le 1er janvier ; une nouvelle présence ce jour dépasserait le plafond. Le 30 juin, le 1er janvier est hors fenêtre et un jour devient disponible. Chaque jour suivant fait sortir un jour ancien, si aucun autre séjour n’est intervenu."
        },
        {
          "id": "visa-detail-4",
          "title": "La règle de 60 ou 30 jours par entrée",
          "body": "Le plafond de 90 sur 180 ne signifie pas que chaque visite peut atteindre 90 jours. Un titulaire de passeport russe ordinaire est limité à 60 jours pour une visite sans visa ; un Indonésien est limité à 30 jours par entrée. Il faut donc faire deux calculs : durée de cette visite et cumul dans la fenêtre de référence. Respecter le total ne suffit pas lorsque la première limite est atteinte."
        },
        {
          "id": "visa-detail-5",
          "title": "Un visa à entrées multiples n’est pas un nouveau quota",
          "body": "Les dates de validité d’un visa ou e-Visa définissent la période pendant laquelle il peut être utilisé. La durée de séjour est une information différente. Même si un visa reste valable plusieurs mois, les entrées successives ne reconstituent pas automatiquement les jours autorisés. Un second passeport ne permet pas non plus de doubler le plafond général."
        },
        {
          "id": "visa-detail-6",
          "title": "Que faire avant la fin du séjour ?",
          "body": "Repérez la dernière date légale de présence dès votre arrivée. Si votre projet exige une présence plus longue, identifiez un motif de séjour légal accepté et engagez la procédure sur e-ikamet avant expiration lorsque vous y êtes éligible. L’administration traite la demande selon son propre calendrier. Un rendez-vous informel, un bail ou une réservation ne suffisent pas, à eux seuls, à prolonger la dispense."
        },
        {
          "id": "visa-detail-7",
          "title": "Dépassement de durée : quelles conséquences ?",
          "body": "Le séjour au-delà du droit autorisé peut conduire à des amendes et, selon sa durée et les circonstances, à une décision d’interdiction d’entrée. Ne considérez pas une éventuelle tolérance administrative comme des jours de séjour supplémentaires. Si une erreur s’est produite, conservez vos justificatifs, sollicitez rapidement un professionnel compétent et suivez les instructions des autorités."
        }
      ],
      "faqs": [
        {
          "question": "Sortir une journée remet-il le compteur à zéro ?",
          "answer": "Non. Les jours déjà passés en Turquie restent dans la fenêtre mobile."
        },
        {
          "question": "Compter le jour de départ ?",
          "answer": "Oui dans un calcul prudent, comptez les deux dates de passage."
        },
        {
          "question": "Deux passeports donnent-ils 180 jours ?",
          "answer": "Non. Le plafond s’applique à la personne et non à chaque passeport."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère des Affaires étrangères : régime par nationalité"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Ministère des Affaires étrangères : conditions générales d'entrée"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa : informations officielles et frais"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Direction de la migration : conditions d'entrée et interdictions"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Direction de la migration : catégories de titres de séjour"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail e-ikamet"
        }
      ]
    },
    "en": {
      "title": "Turkey visa-free stay duration: calculate 90 days in 180",
      "metaDescription": "Understand Turkey's rolling 180-day rule with dated examples, multiple trips, departure deadlines and shorter per-entry limits.",
      "shortAnswer": "For short stays under the general ceiling, the 180-day reference period rolls forward rather than resetting each calendar year or semester. On each proposed day of presence, count that day and the preceding 179 days. A shorter per-entry limit may also apply.",
      "bosphorasHelp": "Bosphoras can coordinate a travel timetable and residence preparation for repeated visits or relocation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "How the rolling day count works",
          "body": "Add the days of presence within the 180-day period ending on the date being tested. As a conservative approach include both arrival and departure days. Leaving Turkey does not instantly remove used days; they cease counting once outside the moving window."
        },
        {
          "id": "visa-detail-2",
          "title": "Example one: two stays and a third trip",
          "body": "A traveller entitled to 90 in 180 days visits from 1 to 30 September 2026 (30 days) and 10 October to 8 November (30 days). On 20 November, all 60 days remain within the window. Assuming no other visits, 30 additional days remain. A stay from 20 November through 19 December inclusive uses them."
        },
        {
          "id": "visa-detail-3",
          "title": "Example two: days return gradually",
          "body": "A continuous stay from 1 January to 31 March 2026 consumes 90 days. On 29 June, the 180-day window still includes 1 January; adding another day would exceed the cap. On 30 June, 1 January falls outside the window and one day becomes available. Subsequent dates release older days if no other visit has occurred."
        },
        {
          "id": "visa-detail-4",
          "title": "Shorter per-entry limits",
          "body": "The 90-in-180 ceiling does not mean each visit can last 90 days. An ordinary Russian passport is limited to 60 days per visa-free visit, and an Indonesian passport to 30 days per entry. Check both the current visit and rolling total. Staying within the overall cap does not override the per-entry limit."
        },
        {
          "id": "visa-detail-5",
          "title": "A multiple-entry visa is not a fresh allowance",
          "body": "Visa validity is the period during which it may be used. Permitted stay is a different measure. A visa valid for months does not automatically grant new days after each border crossing. A second passport also cannot double the general allowance."
        },
        {
          "id": "visa-detail-6",
          "title": "Plan your final lawful day in advance",
          "body": "Identify the last permissible day at arrival. If you need longer, determine an appropriate residence category and apply through e-ikamet before expiry if eligible. The authority follows its own procedure. An informal appointment, lease or reservation alone does not extend visa exemption."
        },
        {
          "id": "visa-detail-7",
          "title": "What happens after overstaying?",
          "body": "Remaining beyond permission can result in fines and, depending on duration and circumstances, entry restrictions. Possible enforcement discretion does not grant extra lawful days. If an error has occurred, retain your evidence, seek qualified guidance promptly and follow instructions from the authorities."
        }
      ],
      "faqs": [
        {
          "question": "Does leaving for a day reset the allowance?",
          "answer": "No. Days remain within the rolling window."
        },
        {
          "question": "Should I count the departure day?",
          "answer": "Yes, include both arrival and departure in a conservative calculation."
        },
        {
          "question": "Do two passports provide 180 days?",
          "answer": "No, the cap applies to the traveller, not each passport."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Foreign Ministry: visa rules by nationality"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Foreign Ministry: general visa rules"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa: official application information and fees"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Migration authority: entry requirements and entry bans"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Migration authority: residence permit categories"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        }
      ]
    },
    "ru": {
      "title": "Срок безвизового пребывания в Турции: расчёт 90 дней из 180",
      "metaDescription": "Как считать дни пребывания: примеры с датами, несколько въездов, срок выезда и отдельные ограничения на 30 и 60 дней.",
      "shortAnswer": "При краткосрочном пребывании в рамках общего лимита 180 дней — скользящий период, а не фиксированное полугодие. Для каждого дня нахождения считайте его и 179 предыдущих дней. Дополнительно может действовать меньший лимит на один въезд.",
      "bosphorasHelp": "Bosphoras может координировать календарь поездок и подготовку документов для переезда или повторных визитов.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Как работает подсчёт дней",
          "body": "Сложите все дни нахождения за 180 дней, заканчивающихся рассматриваемой датой. Для осторожного расчёта включайте дни въезда и выезда. Выезд из Турции не исключает использованные дни сразу: они перестают учитываться, когда выходят за рамки скользящего периода."
        },
        {
          "id": "visa-detail-2",
          "title": "Пример 1: две поездки и третий визит",
          "body": "При лимите 90 из 180 путешественник находился в Турции с 1 по 30 сентября 2026 года (30 дней), затем с 10 октября по 8 ноября (30 дней). На 20 ноября все 60 дней ещё учитываются. Если других поездок не было, остаётся 30 дней. Пребывание с 20 ноября по 19 декабря включительно использует остаток."
        },
        {
          "id": "visa-detail-3",
          "title": "Пример 2: дни освобождаются постепенно",
          "body": "Непрерывное пребывание с 1 января по 31 марта 2026 года составляет 90 дней. На 29 июня скользящие 180 дней ещё включают 1 января, поэтому новый день превысит лимит. На 30 июня 1 января выходит из периода и становится доступен один день. Затем старые дни освобождаются последовательно при отсутствии других поездок."
        },
        {
          "id": "visa-detail-4",
          "title": "Ограничение 30 или 60 дней за поездку",
          "body": "Общий предел 90 из 180 не означает разрешение на 90 дней за каждый визит. Для обычного российского паспорта действует 60 дней за одну безвизовую поездку, для индонезийского — 30 дней за въезд. Контролируйте два показателя: продолжительность текущего визита и сумму дней за период."
        },
        {
          "id": "visa-detail-5",
          "title": "Многократная виза не обновляет лимит",
          "body": "Срок действия визы показывает период её использования. Разрешённое количество дней — отдельный показатель. Действующая несколько месяцев виза не даёт новый лимит после каждого пересечения границы. Наличие второго паспорта также не удваивает общий срок."
        },
        {
          "id": "visa-detail-6",
          "title": "Что сделать до окончания срока",
          "body": "Определите последний разрешённый день уже при въезде. Если нужен более длительный срок, выберите подходящее законное основание и при наличии права подайте заявление через e-ikamet до окончания текущего разрешения. Администрация рассматривает заявления по установленной процедуре. Запись на неофициальную консультацию, аренда или бронь сами по себе срок не продлевают."
        },
        {
          "id": "visa-detail-7",
          "title": "Последствия превышения срока",
          "body": "Пребывание сверх разрешённого срока может повлечь штраф и в зависимости от обстоятельств запрет на въезд. Возможные особенности административной практики не дают дополнительных законных дней. Если срок уже нарушен, сохраните документы, обратитесь за квалифицированной помощью и соблюдайте указания компетентных органов."
        }
      ],
      "faqs": [
        {
          "question": "Обновляется ли лимит после выезда на один день?",
          "answer": "Нет, использованные дни остаются в скользящем периоде."
        },
        {
          "question": "Считать ли день выезда?",
          "answer": "Да, для осторожного расчёта включайте дни въезда и выезда."
        },
        {
          "question": "Дают ли два паспорта 180 дней?",
          "answer": "Нет, общий предел применяется к человеку."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции: визовый режим по гражданству"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "МИД Турции: общие правила въезда"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa: официальная информация и сборы"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Миграционная служба: условия и запреты на въезд"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Миграционная служба: виды ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        }
      ]
    },
    "ar": {
      "title": "مدة البقاء في تركيا دون تأشيرة: حساب قاعدة 90 يوماً خلال 180",
      "metaDescription": "احسب أيام الإقامة في تركيا بأمثلة مؤرخة وزيارات متعددة وحدود الدخول الواحدة ومواعيد المغادرة.",
      "shortAnswer": "بالنسبة للزيارات القصيرة الخاضعة للسقف العام، تمثل مدة 180 يوماً نافذة متحركة وليست نصف سنة ثابتة. في كل يوم بقاء احسب ذلك اليوم والأيام الـ179 السابقة. وقد يطبق أيضاً حد أقصر لكل دخول.",
      "bosphorasHelp": "تستطيع Bosphoras تنسيق جدول الزيارات المتكررة والتحضير للإقامة الطويلة وفق مشروعك.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "طريقة حساب الأيام",
          "body": "اجمع أيام وجودك خلال 180 يوماً تنتهي بالتاريخ الذي تدرسه. وللحساب الاحتياطي اعتبر يومي الدخول والخروج ضمن الأيام. لا يؤدي الخروج من تركيا إلى حذف الأيام المستعملة فوراً؛ بل تتوقف عن الاحتساب عندما تصبح خارج النافذة المتحركة."
        },
        {
          "id": "visa-detail-2",
          "title": "المثال الأول: زيارتان قبل رحلة ثالثة",
          "body": "لنفترض أن مسافراً يملك حق 90 يوماً خلال 180 زار تركيا من 1 إلى 30 سبتمبر 2026 (30 يوماً)، ثم من 10 أكتوبر إلى 8 نوفمبر (30 يوماً). في 20 نوفمبر لا تزال الأيام الستون ضمن الفترة. وإذا لم يزرها في تواريخ أخرى، يتبقى 30 يوماً. وتستهلك رحلة من 20 نوفمبر إلى 19 ديسمبر شاملة اليومين الرصيد المتبقي."
        },
        {
          "id": "visa-detail-3",
          "title": "المثال الثاني: عودة الرصيد تدريجياً",
          "body": "يستهلك البقاء من 1 يناير إلى 31 مارس 2026 تسعين يوماً. وفي 29 يونيو تظل النافذة تشمل 1 يناير، لذا يؤدي إضافة يوم جديد إلى تجاوز الحد. وفي 30 يونيو يخرج 1 يناير من النافذة ويتاح يوم واحد. وتتحرر الأيام القديمة تدريجياً إذا لم تقع زيارات أخرى."
        },
        {
          "id": "visa-detail-4",
          "title": "حد 30 أو 60 يوماً لكل دخول",
          "body": "لا يعني سقف 90 خلال 180 أن كل زيارة يمكن أن تستمر 90 يوماً. لحامل الجواز الروسي العادي حد 60 يوماً للزيارة الواحدة دون تأشيرة، وللإندونيسي 30 يوماً لكل دخول. احسب مدة الزيارة الحالية والمجموع ضمن النافذة معاً. الالتزام بالسقف الإجمالي لا يلغي الحد الخاص بكل دخول."
        },
        {
          "id": "visa-detail-5",
          "title": "التأشيرة متعددة الدخول لا تجدد الرصيد",
          "body": "تعني صلاحية التأشيرة الفترة التي يمكن استخدامها فيها، بينما تحدد مدة البقاء عدد الأيام المصرح بها. لا تمنح التأشيرة السارية لأشهر رصيداً جديداً بعد كل عبور للحدود. كما لا يضاعف الجواز الثاني الحد العام."
        },
        {
          "id": "visa-detail-6",
          "title": "ما العمل قبل انتهاء مدة البقاء؟",
          "body": "حدد آخر يوم قانوني عند الوصول. وإذا احتجت مدة أطول، فاختر أساساً مناسباً للإقامة وقدّم الطلب عبر e-ikamet قبل انتهاء المدة إذا كنت مؤهلاً. وتدرس الإدارة الملف وفق إجراءاتها. لا يؤدي الموعد غير الرسمي أو الإيجار أو الحجز وحده إلى تمديد الإعفاء."
        },
        {
          "id": "visa-detail-7",
          "title": "عواقب تجاوز المدة",
          "body": "قد يؤدي البقاء بعد انتهاء الحق إلى غرامات أو قيود على الدخول بحسب المدة والظروف. لا تعتبر أي سلطة تقديرية إدارية أياماً إضافية مشروعة. إذا وقع خطأ، احتفظ بالإثباتات واستعن سريعاً بمختص واتبع تعليمات السلطات."
        }
      ],
      "faqs": [
        {
          "question": "هل يعيد الخروج ليوم واحد الرصيد؟",
          "answer": "لا، تبقى الأيام المستعملة ضمن النافذة المتحركة."
        },
        {
          "question": "هل أحسب يوم المغادرة؟",
          "answer": "نعم، احتسب يومي الدخول والخروج احتياطياً."
        },
        {
          "question": "هل يمنح جوازان 180 يوماً؟",
          "answer": "لا، يطبق السقف على المسافر لا على كل جواز."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية: قواعد التأشيرات حسب الجنسية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "وزارة الخارجية: القواعد العامة للدخول"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "التأشيرة الإلكترونية: معلومات الطلب والرسوم"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "إدارة الهجرة: شروط الدخول والمنع"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "إدارة الهجرة: أنواع تصاريح الإقامة"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية e-ikamet"
        }
      ]
    }
  },
  "turkey-visa-30-60-90-days": {
    "fr": {
      "title": "Visa Turquie 30, 60 ou 90 jours : choisir la durée adaptée",
      "metaDescription": "30 jours par entrée, 60 jours pour certains passeports, 90 jours sur 180 : comparez les droits de séjour et préparez une visite prolongée.",
      "shortAnswer": "Les durées 30, 60 et 90 jours correspondent à des droits distincts, parfois par entrée, parfois cumulés dans une période. Elles ne sont pas proposées librement à tous les visiteurs : c’est le régime du passeport ou du visa qui les détermine.",
      "bosphorasHelp": "Bosphoras peut adapter les visites, le logement et les rendez-vous à la durée réellement disponible, et coordonner un projet de séjour plus long.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "30 jours : le court séjour",
          "body": "Des passeports ordinaires comme ceux de Thaïlande et de Mongolie bénéficient de dispenses allant jusqu’à 30 jours ; l’Indonésie prévoit 30 jours par entrée avec un total maximal de 90 sur 180. D’autres nationalités doivent obtenir un visa de 30 jours lorsqu’elles remplissent les critères d’e-Visa. Ainsi, un visa ou une dispense de même durée peut reposer sur des règles différentes."
        },
        {
          "id": "visa-detail-2",
          "title": "60 jours : le cas des voyageurs russes",
          "body": "Les titulaires d’un passeport russe ordinaire peuvent visiter la Turquie sans visa à des fins touristiques ou commerciales jusqu’à 60 jours par séjour, sous le plafond général. Un séjour établi sur 60 jours ne donne pas automatiquement droit à 60 jours supplémentaires après une brève sortie. Le voyageur doit calculer les jours encore disponibles et respecter le plafond cumulé."
        },
        {
          "id": "visa-detail-3",
          "title": "90 jours : les séjours répétés ou saisonniers",
          "body": "De nombreux passeports ordinaires, notamment français, britannique pour le tourisme, kazakh, américain et émirien, sont dispensés jusqu’à 90 jours selon le régime applicable. Ce format peut convenir à une visite de plusieurs semaines ou à plusieurs déplacements durant la même période. Il ne constitue pas une autorisation de résider durablement en Turquie."
        },
        {
          "id": "visa-detail-4",
          "title": "Comparer trois itinéraires réels",
          "body": "Pour un voyageur indonésien, une visite du 1er au 30 novembre utilise sa durée maximale par entrée. Pour un Russe entrant le 1er novembre 2026, un séjour sans interruption de 60 jours se termine le 30 décembre inclus. Pour un Français sans jours antérieurs, 90 jours à compter du 1er novembre se terminent le 29 janvier 2027 inclus. Ces exemples supposent que toutes les conditions sont remplies et ne préjugent pas du contrôle aux frontières."
        },
        {
          "id": "visa-detail-5",
          "title": "Durée autorisée et validité du visa : deux dates",
          "body": "Un visa valide jusqu’au 31 mai ne permet pas nécessairement de séjourner jusqu’à cette date. Une autorisation peut indiquer 30 jours et une période de validité plus longue. La date de sortie doit respecter la durée et les autres conditions. Pour un passeport soumis à la règle de validité supplémentaire de 60 jours, une durée de 30, 60 ou 90 jours suppose respectivement 90, 120 ou 150 jours de validité à l’entrée, hors exceptions."
        },
        {
          "id": "visa-detail-6",
          "title": "Séjours de quatre à six mois : quel parcours ?",
          "body": "Un projet de 120 ou 180 jours dépasse le plafond général du tourisme. Il faut identifier un titre de séjour correspondant au motif réel, par exemple une catégorie de séjour prévue par la loi 6458. Une demande s’effectue sur e-ikamet dans les conditions requises ; détenir un logement, des revenus ou un contrat ne garantit pas l’autorisation. Les séjours professionnels nécessitant du travail répondent par ailleurs à des règles particulières."
        },
        {
          "id": "visa-detail-7",
          "title": "Ne payez pas pour une durée qui ne vous est pas accessible",
          "body": "Un voyageur ne peut pas choisir librement un droit de 90 jours si son passeport ne donne accès qu’à un séjour de 30 jours. Le portail officiel affiche les conditions, la durée et le tarif en cas d’éligibilité électronique. Pour une dispense, choisissez le programme en fonction de la durée autorisée, non l’inverse. Une organisation privée peut coordonner les dates sans modifier les règles légales."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je choisir un visa 90 jours à la place de 30 ?",
          "answer": "Pas automatiquement : la nationalité et les conditions de visa déterminent la durée."
        },
        {
          "question": "Un Russe peut-il rester 90 jours en une seule visite sans visa ?",
          "answer": "Non, la dispense ordinaire est limitée à 60 jours par séjour."
        },
        {
          "question": "Comment rester six mois ?",
          "answer": "Il faut un droit de séjour correspondant à la durée et au motif, généralement un titre de séjour approprié."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère des Affaires étrangères : régime par nationalité"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Ministère des Affaires étrangères : conditions générales d'entrée"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa : informations officielles et frais"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Direction de la migration : conditions d'entrée et interdictions"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Direction de la migration : catégories de titres de séjour"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail e-ikamet"
        }
      ]
    },
    "en": {
      "title": "Turkey visa 30, 60 or 90 days: choose the right stay",
      "metaDescription": "Compare per-entry limits of 30 or 60 days, 90-in-180 permission, example departure dates and options for extended stays.",
      "shortAnswer": "The 30, 60 and 90-day periods represent different rights, sometimes per entry and sometimes cumulative. They are not freely selectable by every visitor: the passport and visa regime determine the permission.",
      "bosphorasHelp": "Bosphoras can coordinate accommodation, visits and appointments around your available stay and support preparation for longer relocation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "30-day permissions",
          "body": "Ordinary Thai and Mongolian passports have exemptions of up to 30 days. Indonesia provides 30 per entry under a 90-in-180 cap. Other nationalities may require a 30-day visa when eligible for e-Visa. Identical durations can have different underlying conditions."
        },
        {
          "id": "visa-detail-2",
          "title": "60-day visits for Russian passport holders",
          "body": "Ordinary Russian passport holders can visit visa-free for tourism or business for up to 60 days per visit within the general ceiling. Using the 60 days does not automatically grant another 60 after a brief exit. Calculate the remaining days and observe cumulative limits."
        },
        {
          "id": "visa-detail-3",
          "title": "90-day stays and repeat trips",
          "body": "Many ordinary passports, including French, ordinary British for tourism, Kazakh, US and UAE passports, qualify for up to 90 days under the applicable regime. This can suit multi-week visits or several trips in one reference period, but does not permit indefinite residence."
        },
        {
          "id": "visa-detail-4",
          "title": "Compare three example itineraries",
          "body": "An Indonesian traveller arriving on 1 November uses a 30-day per-entry allowance through 30 November. For an ordinary Russian passport holder arriving on 1 November 2026, 60 consecutive days end on 30 December inclusive. For a French traveller with no earlier days used, 90 days from 1 November end on 29 January 2027 inclusive. All examples assume eligibility and the absence of additional restrictions."
        },
        {
          "id": "visa-detail-5",
          "title": "Visa validity and authorised days are different",
          "body": "A visa valid until 31 May does not necessarily allow the holder to stay until that date. It may authorise 30 days within a longer validity period. Observe both limits. Under the ordinary passport-validity rule, 30, 60 and 90 days of permission require 90, 120 and 150 days of remaining document validity respectively at entry, unless an exception applies."
        },
        {
          "id": "visa-detail-6",
          "title": "Planning a four-to-six-month stay",
          "body": "A 120 or 180-day plan exceeds the general short-stay ceiling. Identify a residence category that matches the actual purpose under Law 6458. Apply via e-ikamet when eligible and within required dates. Housing, funds or a contract do not guarantee approval. Undertaking employment requires separate legal consideration."
        },
        {
          "id": "visa-detail-7",
          "title": "Do not pay for a duration you cannot obtain",
          "body": "You cannot simply select 90 days when your passport allows only 30 under the relevant regime. The official portal displays eligibility conditions, duration and fee for an electronic visa. Visa-exempt travellers should fit the itinerary to available permission. Private coordination can organise the dates but cannot alter entry law."
        }
      ],
      "faqs": [
        {
          "question": "Can I choose 90 days instead of 30?",
          "answer": "Not automatically; nationality and visa rules establish the duration."
        },
        {
          "question": "Can Russians stay for 90 consecutive days visa-free?",
          "answer": "No, ordinary-passport exemption is limited to 60 days per visit."
        },
        {
          "question": "How can I stay six months?",
          "answer": "You need permission covering the purpose and duration, generally an appropriate residence permit."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Foreign Ministry: visa rules by nationality"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Foreign Ministry: general visa rules"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa: official application information and fees"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Migration authority: entry requirements and entry bans"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Migration authority: residence permit categories"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        }
      ]
    },
    "ru": {
      "title": "Виза в Турцию на 30, 60 или 90 дней: сроки и выбор маршрута",
      "metaDescription": "Сравните разрешённые сроки, ограничения на один въезд, примеры дат выезда и варианты пребывания дольше туристического лимита.",
      "shortAnswer": "30, 60 и 90 дней — разные разрешённые сроки, иногда за один въезд, иногда суммарно за определённый период. Выбор не является свободным: всё зависит от паспорта и визового режима.",
      "bosphorasHelp": "Bosphoras может организовать жильё, посещения и встречи с учётом доступного срока и помочь с подготовкой более длительного переезда.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "30 дней: короткая поездка",
          "body": "Обычные паспорта Таиланда и Монголии позволяют безвизовые визиты до 30 дней. Для Индонезии — 30 дней за въезд при суммарном пределе 90 из 180. Для других гражданств 30 дней могут предоставляться по электронной визе при наличии права на неё. Одинаковая продолжительность не означает одинаковые условия."
        },
        {
          "id": "visa-detail-2",
          "title": "60 дней для российских путешественников",
          "body": "Владельцы обычных российских паспортов освобождены от виз для туристических и коммерческих поездок до 60 дней за визит в пределах общего лимита. После 60 дней короткий выезд не даёт автоматически ещё 60. Нужно определить остаток дней с учётом совокупного ограничения."
        },
        {
          "id": "visa-detail-3",
          "title": "90 дней: несколько визитов или сезонная поездка",
          "body": "Многие обычные паспорта, включая французский, британский для туризма, казахстанский, американский и эмиратский, дают безвизовый срок до 90 дней по соответствующим правилам. Это подходит для долгой поездки или нескольких визитов, но не даёт права на постоянное проживание."
        },
        {
          "id": "visa-detail-4",
          "title": "Три примера с датами",
          "body": "Индонезийский путешественник, прибывший 1 ноября, использует 30 дней за въезд до 30 ноября включительно. Владелец обычного российского паспорта при въезде 1 ноября 2026 года использует 60 последовательных дней до 30 декабря включительно. Для гражданина Франции без прежних поездок 90 дней с 1 ноября заканчиваются 29 января 2027 года. Предполагается соблюдение всех условий и отсутствие дополнительных ограничений."
        },
        {
          "id": "visa-detail-5",
          "title": "Срок действия визы и разрешённое пребывание",
          "body": "Если виза действительна до 31 мая, это не означает право оставаться до этой даты. Она может разрешать 30 дней в более продолжительном периоде действия. Соблюдайте оба ограничения. При общем правиле дополнительных 60 дней действия паспорта срок пребывания в 30, 60 или 90 дней требует соответственно 90, 120 или 150 дней действия документа при въезде, кроме исключений."
        },
        {
          "id": "visa-detail-6",
          "title": "Как планировать четыре–шесть месяцев",
          "body": "Планы на 120 или 180 дней выходят за пределы общего туристического лимита. Определите соответствующее реальной цели основание ВНЖ по закону № 6458. При наличии права подайте заявление через e-ikamet в установленные сроки. Жильё, средства и договор сами по себе не гарантируют выдачу. Для работы действуют отдельные требования."
        },
        {
          "id": "visa-detail-7",
          "title": "Не оплачивайте недоступный срок",
          "body": "Нельзя произвольно выбрать 90 дней, если в вашем случае разрешены только 30. Официальный портал показывает условия, срок и сбор электронной визы. При безвизовом режиме маршрут следует строить по допустимому сроку. Частное сопровождение помогает организовать поездку, но не изменяет закон."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли выбрать 90 дней вместо 30?",
          "answer": "Не автоматически: срок определяется визовым режимом и паспортом."
        },
        {
          "question": "Можно ли российскому гражданину оставаться 90 дней подряд без визы?",
          "answer": "Нет, обычная безвизовая поездка ограничена 60 днями."
        },
        {
          "question": "Как остаться на полгода?",
          "answer": "Нужно законное основание соответствующей продолжительности, обычно подходящий ВНЖ."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции: визовый режим по гражданству"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "МИД Турции: общие правила въезда"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "e-Visa: официальная информация и сборы"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "Миграционная служба: условия и запреты на въезд"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Миграционная служба: виды ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة تركيا 30 أو 60 أو 90 يوماً: المدة المناسبة لرحلتك",
      "metaDescription": "قارن حدود الدخول لمدة 30 و60 يوماً وقاعدة 90 خلال 180 مع أمثلة تواريخ المغادرة وخيارات الإقامة الأطول.",
      "shortAnswer": "تمثل 30 و60 و90 يوماً حقوق بقاء مختلفة، بعضها لكل دخول وبعضها تراكمي خلال مدة معينة. لا يختارها جميع المسافرين بحرية؛ يحددها الجواز ونظام التأشيرة.",
      "bosphorasHelp": "تستطيع Bosphoras تنسيق السكن والزيارات والمواعيد ضمن مدتك القانونية والتحضير لمشروع انتقال أطول.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "30 يوماً: الزيارة القصيرة",
          "body": "يتمتع حاملو الجوازات العادية التايلاندية والمنغولية بإعفاء يصل إلى 30 يوماً. ولإندونيسيا 30 يوماً لكل دخول بشرط عدم تجاوز 90 خلال 180. وقد يحصل أصحاب جنسيات أخرى على تأشيرة إلكترونية لمدة 30 يوماً عند التأهل. لا تعني المدة المتساوية أن الشروط واحدة."
        },
        {
          "id": "visa-detail-2",
          "title": "60 يوماً للجواز الروسي",
          "body": "يستفيد حاملو الجوازات الروسية العادية من إعفاء للسياحة أو الزيارة التجارية يصل إلى 60 يوماً لكل زيارة ضمن السقف العام. لا يؤدي استهلاك الستين يوماً والخروج لفترة قصيرة إلى الحصول تلقائياً على ستين يوماً أخرى. احسب الرصيد المتبقي والتزم بالحد التراكمي."
        },
        {
          "id": "visa-detail-3",
          "title": "90 يوماً: الزيارات المتكررة والموسمية",
          "body": "تتمتع جوازات عادية عديدة، منها الفرنسية والبريطانية للسياحة والكازاخستانية والأمريكية والإماراتية، بإعفاء يصل إلى 90 يوماً حسب النظام المناسب. وقد يناسب هذا زيارة تمتد لأسابيع أو عدة رحلات في الفترة نفسها، لكنه لا يمنح حق الإقامة الدائمة."
        },
        {
          "id": "visa-detail-4",
          "title": "ثلاثة أمثلة لتواريخ المغادرة",
          "body": "للمسافر الإندونيسي الذي يدخل في 1 نوفمبر، تنتهي مدة 30 يوماً لكل دخول في 30 نوفمبر. وللروسي الذي يدخل 1 نوفمبر 2026 تنتهي مدة 60 يوماً متواصلة في 30 ديسمبر شاملة اليوم الأخير. وللفرنسي الذي لم يستخدم أياماً سابقة تنتهي 90 يوماً بدءاً من 1 نوفمبر في 29 يناير 2027. تفترض الأمثلة استيفاء الشروط وعدم وجود قيود إضافية."
        },
        {
          "id": "visa-detail-5",
          "title": "صلاحية التأشيرة ومدة البقاء تاريخان مختلفان",
          "body": "لا تعني تأشيرة صالحة حتى 31 مايو بالضرورة أن حاملها يستطيع البقاء حتى ذلك التاريخ. فقد تمنح 30 يوماً ضمن فترة صلاحية أطول. التزم بالقيدين. ووفق قاعدة صلاحية الجواز الإضافية 60 يوماً، تتطلب مدد 30 أو 60 أو 90 يوماً بقاء 90 أو 120 أو 150 يوماً من صلاحية الوثيقة عند الدخول، ما لم ينطبق استثناء."
        },
        {
          "id": "visa-detail-6",
          "title": "زيارة من أربعة إلى ستة أشهر",
          "body": "تتجاوز خطة 120 أو 180 يوماً السقف العام للزيارات القصيرة. حدد أساساً للإقامة يتناسب مع الغرض الفعلي وفق القانون 6458، وقدّم الطلب عبر e-ikamet إذا كنت مؤهلاً ضمن المواعيد المطلوبة. لا يضمن السكن أو الموارد أو العقد الموافقة. ويخضع العمل لشروط منفصلة."
        },
        {
          "id": "visa-detail-7",
          "title": "لا تدفع مقابل مدة ليست متاحة لك",
          "body": "لا يمكنك اختيار 90 يوماً تلقائياً إذا كان نظام جوازك يسمح بثلاثين فقط. تعرض المنصة الرسمية شروط التأهل والمدة والرسوم للتأشيرة الإلكترونية. وعند الإعفاء اختر برنامجاً يتوافق مع حق البقاء المتاح. يساعد التنسيق الخاص على تنظيم المواعيد لكنه لا يغير القانون."
        }
      ],
      "faqs": [
        {
          "question": "هل يمكن اختيار 90 يوماً بدلاً من 30؟",
          "answer": "ليس تلقائياً؛ يحدد نظام التأشيرة والجواز المدة."
        },
        {
          "question": "هل يستطيع الروسي البقاء 90 يوماً متواصلة دون تأشيرة؟",
          "answer": "لا، حد الزيارة الواحدة للجواز العادي هو 60 يوماً."
        },
        {
          "question": "كيف أبقى ستة أشهر؟",
          "answer": "تحتاج حق بقاء يناسب المدة والغرض، وعادة تصريح إقامة مناسب."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية: قواعد التأشيرات حسب الجنسية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "وزارة الخارجية: القواعد العامة للدخول"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "التأشيرة الإلكترونية: معلومات الطلب والرسوم"
        },
        {
          "href": "https://en.goc.gov.tr/entry-into-turkey",
          "label": "إدارة الهجرة: شروط الدخول والمنع"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "إدارة الهجرة: أنواع تصاريح الإقامة"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية e-ikamet"
        }
      ]
    }
  },
  "turkey-visa-or-evisa": {
    "fr": {
      "title": "Visa ou e-Visa Turquie 2026 : tableau des pays et durées",
      "metaDescription": "Comparez 36 nationalités : visa électronique, consulat, séjour sans visa, 30 ou 90 jours, entrées multiples et conditions particulières.",
      "shortAnswer": "Le visa électronique turc est une autorisation pour le tourisme ou le commerce, et non un permis de travail. Selon votre passeport, vous pouvez être dispensé de visa, devoir demander un e-Visa ou passer par un consulat. Voici le régime applicable à des nationalités fréquemment rencontrées, vérifié le 17 novembre 2026.",
      "bosphorasHelp": "Bosphoras organise vos déplacements et votre installation selon la durée de séjour réellement disponible.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Visa, e-Visa ou dispense : le tableau par passeport",
          "body": "Les lignes concernent les passeports ordinaires. Une durée de validité de trois mois n’est pas nécessairement une autorisation de présence de trois mois. Les conditions complémentaires du portail font partie de l’admissibilité.",
          "table": {
            "headers": [
              "Nationalité",
              "Régime",
              "Durée / entrées",
              "Conditions"
            ],
            "rows": [
              [
                "Inde",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Pakistan",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Bangladesh",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Afghanistan",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Népal",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Philippines",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Palestine",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Guinée équatoriale",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Yémen",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Algérie",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 15 ou plus de 50 ans ; e-Visa 30 jours, 1 entrée",
                "e-Visa : 15–18 ou 35–50 ans et justificatif admissible ; autres cas : consulat"
              ],
              [
                "Irak",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 15 ou plus de 50 ans ; e-Visa 30 jours, 1 entrée",
                "15–50 ans : justificatif admissible et conditions du portail"
              ],
              [
                "Libye",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 16 ou plus de 45 ans ; e-Visa 30 jours, 1 entrée",
                "16–45 ans : justificatif admissible et conditions du portail"
              ],
              [
                "Égypte",
                "Visa obligatoire",
                "30 jours, 1 entrée pour l’e-Visa des 15–45 ans",
                "Moins de 15 ou plus de 45 ans : e-Visa sans condition supplémentaire ; 15–45 : justificatif admissible et compagnie agréée"
              ],
              [
                "Mexique",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Vietnam",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Suriname",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Fidji",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Timor oriental",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Afrique du Sud",
                "e-Visa possible",
                "30 jours, entrées multiples",
                "Conditions du portail officiel"
              ],
              [
                "Maurice",
                "e-Visa possible",
                "30 jours, entrées multiples",
                "Conditions du portail officiel"
              ],
              [
                "Maldives",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Bahamas",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Barbade",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "République dominicaine",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Antigua-et-Barbuda",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Sainte-Lucie",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Arménie",
                "e-Visa possible",
                "Durée affichée lors de la demande",
                "Selon le document de voyage"
              ],
              [
                "Namibie",
                "e-Visa possible",
                "Durée affichée lors de la demande",
                "Selon le document de voyage"
              ],
              [
                "Syrie",
                "Visa consulaire",
                "Selon visa délivré",
                "Demande auprès d’une représentation turque"
              ],
              [
                "Tadjikistan",
                "Visa consulaire",
                "Selon visa délivré",
                "Demande auprès d’une représentation turque"
              ],
              [
                "Turkménistan",
                "Visa consulaire",
                "Selon visa délivré",
                "Demande auprès d’une représentation turque"
              ],
              [
                "France",
                "Dispense de visa",
                "90 jours sur 180",
                "Pas de frais de visa"
              ],
              [
                "Kazakhstan",
                "Dispense de visa",
                "90 jours sur 180",
                "Pas de frais de visa"
              ],
              [
                "Russie",
                "Dispense de visa",
                "60 jours par séjour",
                "Plafond général de 90/180"
              ],
              [
                "Indonésie",
                "Dispense de visa",
                "30 jours par entrée",
                "90/180 au total"
              ],
              [
                "Chine",
                "Dispense de visa",
                "90 jours sur 180",
                "Pas de frais de visa"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "À qui s’adresse l’e-Visa ?",
          "body": "Pour un Indien, un Pakistanais ou un Philippin, le régime ordinaire exige un visa. L’accès électronique peut être accordé avec un visa ou un titre de séjour admissible en cours de validité émis par un pays Schengen, les États-Unis, le Royaume-Uni ou l’Irlande. Le justificatif doit encore être valide lors de l’entrée en Turquie ; un e-Visa d’un autre pays n’est pas accepté comme justificatif. Un ancien visa à entrée unique déjà utilisé peut convenir si sa date de validité couvre l’entrée."
        },
        {
          "id": "visa-detail-3",
          "title": "Algérie, Égypte, Irak et Libye : l’âge change les droits",
          "body": "En Algérie, seuls certains âges entre 15 et 50 ans ouvrent le parcours électronique conditionnel, tandis que les moins de 15 ans et les plus de 50 ans sont dispensés pour le tourisme. L’Irak prévoit une règle proche mais l’e-Visa conditionnel concerne les 15–50 ans. En Libye, les seuils sont 16 et 45 ans. Pour l’Égypte, les 15–45 ans doivent notamment voyager avec Turkish Airlines, AJet, Pegasus, EgyptAir ou Air Cairo et présenter un document admissible."
        },
        {
          "id": "visa-detail-4",
          "title": "Combien coûte l’e-Visa et quand le recevoir ?",
          "body": "Le prix gouvernemental est affiché dans l’application officielle après la sélection du passeport et de la date. Il dépend de la nationalité et n’est pas un forfait universel. La demande en ligne peut être rapide ; prévoyez au moins 48 heures avant le départ. Après validation du courriel, réglez dans les 48 heures avec une carte compatible 3D Secure. Le lien de téléchargement est envoyé après paiement. Une erreur de nom ou de numéro peut rendre le visa inutilisable."
        },
        {
          "id": "visa-detail-5",
          "title": "Quand choisir le visa consulaire ?",
          "body": "Si vous ne réunissez pas les conditions électroniques, demandez le visa auprès de la représentation turque compétente. Pour travailler ou étudier, choisissez le motif approprié plutôt qu’une autorisation touristique. Le consulat peut exiger rendez-vous, documents de ressources, logement, assurance et pièces relatives au projet. Certains consulats recommandent une anticipation de trois mois."
        },
        {
          "id": "visa-detail-6",
          "title": "Exemple : trois voyageurs vers Istanbul",
          "body": "Un Français venant dix jours n’a normalement pas de frais de visa. Un Mexicain peut demander un e-Visa de 30 jours à entrée unique. Un Indien avec un titre de séjour français valide peut être éligible à un e-Visa conditionnel de 30 jours ; sans justificatif admissible, il doit suivre la voie consulaire. Chacun doit préparer ses propres documents."
        }
      ],
      "faqs": [
        {
          "question": "L’e-Visa permet-il de travailler ?",
          "answer": "Non. Il est destiné au tourisme et au commerce."
        },
        {
          "question": "Un titre de séjour Schengen donne-t-il automatiquement un e-Visa ?",
          "answer": "Non. Il peut servir de justificatif lorsque le passeport est éligible et les autres conditions réunies."
        },
        {
          "question": "Quel est le prix exact ?",
          "answer": "Il apparaît sur le portail officiel avant paiement ; aucun prix unique ne s’applique à tous."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Régime des visas par nationalité — ministère turc des Affaires étrangères"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "Portail officiel e-Visa : modalités et paiement"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Validité des justificatifs pour l’e-Visa"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Conditions générales des visas turcs"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Demande consulaire officielle"
        }
      ]
    },
    "en": {
      "title": "Turkey visa or e-Visa 2026: nationality and stay table",
      "metaDescription": "Compare 36 nationalities: visa-free travel, electronic or consular visas, 30-day stays, multiple entries and conditions.",
      "shortAnswer": "Turkey's electronic visa covers tourism and commerce, not employment. Depending on your passport, you may be visa-exempt, qualify for an e-Visa or need a consular visa. The following rules for common travel markets were checked on 17 November 2026.",
      "bosphorasHelp": "Bosphoras coordinates travel and relocation arrangements around your actual permitted stay.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Visa, e-Visa or exemption by passport",
          "body": "The table covers ordinary passports. A three-month visa validity is not necessarily three months of permitted presence. Additional official portal conditions form part of eligibility.",
          "table": {
            "headers": [
              "Nationality",
              "Route",
              "Stay / entries",
              "Conditions"
            ],
            "rows": [
              [
                "India",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Pakistan",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Bangladesh",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Afghanistan",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Nepal",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Philippines",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Palestine",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Equatorial Guinea",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Yemen",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Algeria",
                "Age-based exemption or visa",
                "90/180 if under 15 or over 50; e-Visa 30 days, single entry",
                "Conditional e-Visa ages 15–18 or 35–50 with eligible supporting document; otherwise consulate"
              ],
              [
                "Iraq",
                "Age-based exemption or visa",
                "90/180 if under 15 or over 50; e-Visa 30 days, single entry",
                "Ages 15–50: eligible supporting document plus portal conditions"
              ],
              [
                "Libya",
                "Age-based exemption or visa",
                "90/180 if under 16 or over 45; e-Visa 30 days, single entry",
                "Ages 16–45: eligible supporting document and portal conditions"
              ],
              [
                "Egypt",
                "Visa required",
                "30 days, single entry for ages 15–45 via e-Visa",
                "Under 15 or over 45: no extra e-Visa condition; ages 15–45: eligible supporting document and approved carrier"
              ],
              [
                "Mexico",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "Vietnam",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "Suriname",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "Fiji",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "Timor-Leste",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "South Africa",
                "e-Visa available",
                "30 days, multiple entry",
                "Official portal conditions"
              ],
              [
                "Mauritius",
                "e-Visa available",
                "30 days, multiple entry",
                "Official portal conditions"
              ],
              [
                "Maldives",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Bahamas",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Barbados",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Dominican Republic",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Antigua and Barbuda",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Saint Lucia",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Armenia",
                "e-Visa available",
                "Duration displayed during application",
                "Depends on travel document"
              ],
              [
                "Namibia",
                "e-Visa available",
                "Duration displayed during application",
                "Depends on travel document"
              ],
              [
                "Syria",
                "Consular visa",
                "As issued",
                "Apply through a Turkish mission"
              ],
              [
                "Tajikistan",
                "Consular visa",
                "As issued",
                "Apply through a Turkish mission"
              ],
              [
                "Turkmenistan",
                "Consular visa",
                "As issued",
                "Apply through a Turkish mission"
              ],
              [
                "France",
                "Visa-free",
                "90 days in 180",
                "No visa fee"
              ],
              [
                "Kazakhstan",
                "Visa-free",
                "90 days in 180",
                "No visa fee"
              ],
              [
                "Russia",
                "Visa-free",
                "60 days per visit",
                "General 90/180 ceiling"
              ],
              [
                "Indonesia",
                "Visa-free",
                "30 days per entry",
                "90/180 total"
              ],
              [
                "China",
                "Visa-free",
                "90 days in 180",
                "No visa fee"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Who qualifies for a conditional e-Visa?",
          "body": "Ordinary Indian, Pakistani and Philippine passports require a visa. Electronic eligibility may depend on a valid visa or residence permit from a Schengen country, the US, UK or Ireland. It must remain valid at Turkish entry; electronic visas issued by other countries cannot serve as supporting documents. A previously used single-entry visa can qualify if its validity still covers arrival."
        },
        {
          "id": "visa-detail-3",
          "title": "Age-dependent rules for Algeria, Egypt, Iraq and Libya",
          "body": "Algerian electronic eligibility is restricted to certain age bands between 15 and 50; younger than 15 and older than 50 may be exempt for tourism. Iraq's conditional e-Visa covers ages 15–50. Libya uses thresholds of 16 and 45. Egyptian applicants aged 15–45 also require eligible supporting documentation and travel with Turkish Airlines, AJet, Pegasus, EgyptAir or Air Cairo."
        },
        {
          "id": "visa-detail-4",
          "title": "Cost and timing",
          "body": "The official fee appears after passport and date selection; amounts vary by nationality. Apply at least 48 hours before departure as a practical precaution. After email confirmation, pay within 48 hours using a compatible 3D Secure card. The download link arrives after payment. A mismatch in name or passport number can invalidate the document."
        },
        {
          "id": "visa-detail-5",
          "title": "When to apply through a consulate",
          "body": "If the electronic route is unavailable, apply with the appropriate Turkish mission. Employment and study require purpose-specific procedures. A consulate may request an appointment, financial evidence, accommodation, insurance and purpose-specific documentation. Some missions advise applying three months ahead."
        },
        {
          "id": "visa-detail-6",
          "title": "Three travellers visiting Istanbul",
          "body": "A French tourist visiting ten days normally owes no visa fee. A Mexican ordinary-passport holder may obtain a 30-day single-entry e-Visa. An Indian citizen with a valid French residence permit may qualify for a conditional 30-day e-Visa; without eligible supporting documents, the consular route applies. Each traveller must prepare individual documentation."
        }
      ],
      "faqs": [
        {
          "question": "Does an e-Visa allow work?",
          "answer": "No; it covers tourism and commerce."
        },
        {
          "question": "Does a Schengen permit guarantee e-Visa eligibility?",
          "answer": "No. Passport eligibility and other conditions still apply."
        },
        {
          "question": "What is the exact fee?",
          "answer": "The official portal displays it before payment; fees are not universal."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa regime by nationality — Turkish Foreign Ministry"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "Official e-Visa portal: applications and payment"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Supporting document validity for e-Visa"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General Turkish visa rules"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Official consular visa application"
        }
      ]
    },
    "ru": {
      "title": "Виза или e-Visa в Турцию 2026: таблица стран и сроков",
      "metaDescription": "Сравните 36 гражданств: безвизовый въезд, электронная и консульская виза, 30 дней, многократный въезд и условия.",
      "shortAnswer": "Электронная виза Турции предназначена для туризма и коммерческих визитов, а не работы. В зависимости от паспорта могут действовать освобождение, электронная или консульская виза. Правила в таблице проверены 17 ноября 2026 года.",
      "bosphorasHelp": "Bosphoras организует поездки и переезд с учётом разрешённого срока пребывания.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Визовый режим по паспорту",
          "body": "Таблица относится к обычным паспортам. Виза, действующая три месяца, не обязательно разрешает находиться в стране три месяца. Условия официального портала также обязательны.",
          "table": {
            "headers": [
              "Гражданство",
              "Режим",
              "Срок / въезды",
              "Условия"
            ],
            "rows": [
              [
                "Индия",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Пакистан",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Бангладеш",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Афганистан",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Непал",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Филиппины",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Палестина",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Экваториальная Гвинея",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Йемен",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Алжир",
                "Освобождение по возрасту или виза",
                "90/180 до 15 или старше 50; электронная виза 30 дней, один въезд",
                "Электронная виза для 15–18 или 35–50 лет с подходящим документом; иначе консульство"
              ],
              [
                "Ирак",
                "Освобождение по возрасту или виза",
                "90/180 до 15 или старше 50; электронная виза 30 дней, один въезд",
                "15–50 лет: подходящий документ и условия портала"
              ],
              [
                "Ливия",
                "Освобождение по возрасту или виза",
                "90/180 до 16 или старше 45; электронная виза 30 дней, один въезд",
                "16–45 лет: подходящий документ и условия портала"
              ],
              [
                "Египет",
                "Виза обязательна",
                "30 дней, один въезд для электронной визы в 15–45 лет",
                "До 15 или старше 45: без дополнительных условий; 15–45: подходящий документ и разрешённая авиакомпания"
              ],
              [
                "Мексика",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Вьетнам",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Суринам",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Фиджи",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Восточный Тимор",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "ЮАР",
                "Электронная виза доступна",
                "30 дней, многократная",
                "Условия официального портала"
              ],
              [
                "Маврикий",
                "Электронная виза доступна",
                "30 дней, многократная",
                "Условия официального портала"
              ],
              [
                "Мальдивы",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Багамы",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Барбадос",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Доминиканская Республика",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Антигуа и Барбуда",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Сент-Люсия",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Армения",
                "Электронная виза доступна",
                "Срок показывается при подаче",
                "Зависит от проездного документа"
              ],
              [
                "Намибия",
                "Электронная виза доступна",
                "Срок показывается при подаче",
                "Зависит от проездного документа"
              ],
              [
                "Сирия",
                "Консульская виза",
                "Согласно выданной визе",
                "Подача в турецкое представительство"
              ],
              [
                "Таджикистан",
                "Консульская виза",
                "Согласно выданной визе",
                "Подача в турецкое представительство"
              ],
              [
                "Туркменистан",
                "Консульская виза",
                "Согласно выданной визе",
                "Подача в турецкое представительство"
              ],
              [
                "Франция",
                "Без визы",
                "90 дней из 180",
                "Без визового сбора"
              ],
              [
                "Казахстан",
                "Без визы",
                "90 дней из 180",
                "Без визового сбора"
              ],
              [
                "Россия",
                "Без визы",
                "60 дней за визит",
                "Общий предел 90/180"
              ],
              [
                "Индонезия",
                "Без визы",
                "30 дней за въезд",
                "Всего 90/180"
              ],
              [
                "Китай",
                "Без визы",
                "90 дней из 180",
                "Без визового сбора"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Кому доступна условная электронная виза?",
          "body": "Гражданам Индии, Пакистана и Филиппин с обычными паспортами нужна виза. Для электронной подачи может потребоваться действующая виза или ВНЖ страны Шенгена, США, Великобритании или Ирландии. Документ должен оставаться действительным при въезде; электронные визы других стран не принимаются как подтверждение. Ранее использованная однократная виза может подойти, если срок её действия не истёк."
        },
        {
          "id": "visa-detail-3",
          "title": "Возрастные условия для Алжира, Египта, Ирака и Ливии",
          "body": "В Алжире условная электронная виза доступна отдельным возрастным группам между 15 и 50 годами; лица младше 15 и старше 50 освобождаются для туризма. В Ираке условная виза охватывает возраст 15–50 лет. В Ливии пороги составляют 16 и 45 лет. Египтянам 15–45 лет нужны подходящий документ и перелёт Turkish Airlines, AJet, Pegasus, EgyptAir или Air Cairo."
        },
        {
          "id": "visa-detail-4",
          "title": "Стоимость и сроки оформления",
          "body": "Государственный сбор показывается после выбора паспорта и даты и зависит от гражданства. Желательно подать за 48 часов до вылета. После подтверждения электронной почты оплатите в течение 48 часов картой с 3D Secure. Ссылка на документ поступит после оплаты. Несовпадение имени или номера паспорта может сделать визу недействительной."
        },
        {
          "id": "visa-detail-5",
          "title": "Когда обращаться в консульство",
          "body": "Если электронная подача недоступна, обращайтесь в компетентное представительство Турции. Для работы и учёбы существуют отдельные процедуры. Могут потребоваться запись, финансовые документы, жильё, страховка и подтверждение цели. Некоторые консульства рекомендуют подавать за три месяца."
        },
        {
          "id": "visa-detail-6",
          "title": "Пример: трое едут в Стамбул",
          "body": "Французу на десять дней обычно не нужна виза. Гражданин Мексики может оформить однократную электронную визу на 30 дней. Гражданин Индии с действующим французским ВНЖ может иметь право на условную электронную визу на 30 дней; без подходящего документа потребуется консульская процедура. Документы оформляются индивидуально."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли работать по электронной визе?",
          "answer": "Нет, она предназначена для туризма и коммерческих визитов."
        },
        {
          "question": "Гарантирует ли ВНЖ Шенгена электронную визу?",
          "answer": "Нет, важны гражданство и остальные условия."
        },
        {
          "question": "Как узнать сбор?",
          "answer": "Официальный портал показывает сумму до оплаты."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила по гражданству — МИД Турции"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "Официальный портал электронной визы: оформление и оплата"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Срок действия подтверждающих документов"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила Турции"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Официальная консульская подача"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة تركيا أم التأشيرة الإلكترونية 2026: جدول الجنسيات والمدد",
      "metaDescription": "قارن 36 جنسية: الإعفاء والتأشيرة الإلكترونية والقنصلية ومدد 30 يوماً والدخول المتعدد والشروط الخاصة.",
      "shortAnswer": "تخصص التأشيرة الإلكترونية التركية للسياحة والأعمال التجارية لا للتوظيف. وقد تكون معفى أو مؤهلاً للإلكترونية أو بحاجة إلى القنصلية بحسب جوازك. تمت مراجعة قواعد الجدول في 17 نوفمبر 2026.",
      "bosphorasHelp": "تنسق Bosphoras رحلتك وترتيبات الانتقال وفق مدة البقاء المصرح بها.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "جدول التأشيرات بحسب الجواز",
          "body": "تخص البيانات الجوازات العادية. ولا تعني صلاحية تأشيرة لثلاثة أشهر بالضرورة حق البقاء ثلاثة أشهر. وتعد الشروط الإضافية في المنصة جزءاً من الأهلية.",
          "table": {
            "headers": [
              "الجنسية",
              "النظام",
              "المدة / الدخول",
              "الشروط"
            ],
            "rows": [
              [
                "الهند",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "باكستان",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "بنغلاديش",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "أفغانستان",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "نيبال",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "الفلبين",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "فلسطين",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "غينيا الاستوائية",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "اليمن",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "الجزائر",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 15 أو فوق 50؛ الإلكترونية 30 يوماً لدخول واحد",
                "الإلكترونية للأعمار 15–18 أو 35–50 مع وثيقة مؤهلة؛ وإلا القنصلية"
              ],
              [
                "العراق",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 15 أو فوق 50؛ الإلكترونية 30 يوماً لدخول واحد",
                "15–50 عاماً: وثيقة مؤهلة وشروط المنصة"
              ],
              [
                "ليبيا",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 16 أو فوق 45؛ الإلكترونية 30 يوماً لدخول واحد",
                "16–45 عاماً: وثيقة مؤهلة وشروط المنصة"
              ],
              [
                "مصر",
                "تأشيرة إلزامية",
                "30 يوماً، دخول واحد للإلكترونية بين 15 و45",
                "دون 15 أو فوق 45: دون شرط إضافي؛ 15–45: وثيقة مؤهلة وناقل معتمد"
              ],
              [
                "المكسيك",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "فيتنام",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "سورينام",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "فيجي",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "تيمور الشرقية",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "جنوب إفريقيا",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول متعدد",
                "شروط المنصة الرسمية"
              ],
              [
                "موريشيوس",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول متعدد",
                "شروط المنصة الرسمية"
              ],
              [
                "المالديف",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "الباهاما",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "باربادوس",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "جمهورية الدومينيكان",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "أنتيغوا وباربودا",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "سانت لوسيا",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "أرمينيا",
                "تأشيرة إلكترونية متاحة",
                "المدة تظهر عند الطلب",
                "بحسب وثيقة السفر"
              ],
              [
                "ناميبيا",
                "تأشيرة إلكترونية متاحة",
                "المدة تظهر عند الطلب",
                "بحسب وثيقة السفر"
              ],
              [
                "سوريا",
                "تأشيرة قنصلية",
                "وفق التأشيرة الصادرة",
                "الطلب لدى ممثلية تركية"
              ],
              [
                "طاجيكستان",
                "تأشيرة قنصلية",
                "وفق التأشيرة الصادرة",
                "الطلب لدى ممثلية تركية"
              ],
              [
                "تركمانستان",
                "تأشيرة قنصلية",
                "وفق التأشيرة الصادرة",
                "الطلب لدى ممثلية تركية"
              ],
              [
                "فرنسا",
                "إعفاء",
                "90 يوماً خلال 180",
                "دون رسوم تأشيرة"
              ],
              [
                "كازاخستان",
                "إعفاء",
                "90 يوماً خلال 180",
                "دون رسوم تأشيرة"
              ],
              [
                "روسيا",
                "إعفاء",
                "60 يوماً لكل زيارة",
                "السقف العام 90/180"
              ],
              [
                "إندونيسيا",
                "إعفاء",
                "30 يوماً لكل دخول",
                "إجمالي 90/180"
              ],
              [
                "الصين",
                "إعفاء",
                "90 يوماً خلال 180",
                "دون رسوم تأشيرة"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "من المؤهل للتأشيرة الإلكترونية المشروطة؟",
          "body": "يحتاج حاملو الجوازات العادية الهندية والباكستانية والفلبينية إلى تأشيرة. وقد يلزم للإلكترونية وجود تأشيرة أو إقامة سارية من دولة شنغن أو الولايات المتحدة أو بريطانيا أو إيرلندا. يجب أن تبقى الوثيقة سارية عند الوصول، ولا تقبل التأشيرات الإلكترونية الصادرة من بلدان أخرى كوثائق داعمة. وقد تقبل تأشيرة دخول واحد سبق استخدامها إذا بقيت سارية."
        },
        {
          "id": "visa-detail-3",
          "title": "شروط العمر للجزائر ومصر والعراق وليبيا",
          "body": "تقتصر الإلكترونية المشروطة للجزائريين على فئات عمرية محددة بين 15 و50 عاماً، بينما يعفى سياحياً من هم دون 15 وفوق 50. وفي العراق تشمل المشروطة الأعمار 15–50. وفي ليبيا الحدّان 16 و45. ويحتاج المصريون بين 15 و45 إلى وثيقة داعمة مؤهلة والسفر مع الخطوط التركية أو AJet أو Pegasus أو EgyptAir أو Air Cairo."
        },
        {
          "id": "visa-detail-4",
          "title": "الرسوم وموعد الطلب",
          "body": "تظهر الرسوم الحكومية بعد تحديد الجواز والتاريخ وتختلف حسب الجنسية. يفضل الطلب قبل المغادرة بـ48 ساعة على الأقل. وبعد تأكيد البريد الإلكتروني أكمل الدفع خلال 48 ساعة ببطاقة تدعم 3D Secure. يرسل رابط التنزيل بعد الدفع. وقد يؤدي اختلاف الاسم أو رقم الجواز إلى بطلان التأشيرة."
        },
        {
          "id": "visa-detail-5",
          "title": "متى تلزم القنصلية؟",
          "body": "إذا لم تتوفر أهلية المسار الإلكتروني، قدّم لدى الممثلية التركية المختصة. وللعمل والدراسة إجراءات منفصلة. وقد يطلب موعد وموارد مالية وسكن وتأمين ومستندات الغرض. وتنصح بعض القنصليات بالتقديم قبل ثلاثة أشهر."
        },
        {
          "id": "visa-detail-6",
          "title": "مثال: ثلاثة مسافرين إلى إسطنبول",
          "body": "لا يحتاج الفرنسي الذي يزور عشرة أيام عادةً إلى دفع رسوم تأشيرة. ويمكن للمكسيكي الحصول على إلكترونية لمدة 30 يوماً لدخول واحد. وقد يتأهل الهندي صاحب الإقامة الفرنسية السارية لتأشيرة إلكترونية مشروطة لمدة 30 يوماً؛ وبدون الوثيقة الداعمة يلجأ للقنصلية. ويعد كل مسافر وثائقه الخاصة."
        }
      ],
      "faqs": [
        {
          "question": "هل تسمح الإلكترونية بالعمل؟",
          "answer": "لا، تخص السياحة والأعمال التجارية."
        },
        {
          "question": "هل تضمن إقامة شنغن الحصول على الإلكترونية؟",
          "answer": "لا، يجب أن تتوافق الجنسية وبقية الشروط."
        },
        {
          "question": "كيف أعرف السعر؟",
          "answer": "تعرض المنصة الرسمية الرسوم قبل الدفع؛ لا يوجد سعر موحد."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "نظام التأشيرات حسب الجنسية — وزارة الخارجية التركية"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "منصة التأشيرة الإلكترونية الرسمية: الطلب والدفع"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "صلاحية الوثائق الداعمة للتأشيرة الإلكترونية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات التركية"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "الطلب القنصلي الرسمي"
        }
      ]
    }
  },
  "turkey-entry-requirements-foreigners": {
    "fr": {
      "title": "Conditions d’entrée en Turquie en 2026 : passeport, visa et contrôles",
      "metaDescription": "Préparez l’entrée en Turquie : validité du passeport, règles de visa, justificatifs, enfants, transit et calcul du séjour.",
      "shortAnswer": "Le passage à la frontière turque suppose un document reconnu, un droit d’entrée correspondant au motif et une durée encore disponible. Les formalités diffèrent selon le passeport et le trajet, mais les vérifications suivantes permettent de préparer un dossier complet.",
      "bosphorasHelp": "Bosphoras peut coordonner les étapes pratiques de votre arrivée, les transferts et l’organisation de votre séjour.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Validité du passeport : la règle des 60 jours",
          "body": "L’article 7 de la loi 6458 exige en principe une validité supérieure de 60 jours à la durée de séjour autorisée, même si le voyage personnel est plus court. Le tableau présente les trois durées usuelles. Le ministère recommande six mois. Des exceptions existent pour certains documents nationaux, accords et passeports officiels.",
          "table": {
            "headers": [
              "Durée autorisée",
              "Validité minimale à l’arrivée"
            ],
            "rows": [
              [
                "30 jours",
                "90 jours"
              ],
              [
                "60 jours",
                "120 jours"
              ],
              [
                "90 jours",
                "150 jours"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Déterminer le régime avant l’embarquement",
          "body": "Un Français ou un Kazakh bénéficie normalement de 90 jours sans visa sur 180 ; un Russe est limité à 60 jours par visite ; un Indonésien à 30 jours par entrée. Pour un visa électronique, comparez nom, numéro, date de naissance et date de validité avec le document utilisé. Un titre de séjour d’un autre pays ne remplace pas automatiquement le visa turc."
        },
        {
          "id": "visa-detail-3",
          "title": "Pièces utiles aux frontières",
          "body": "Préparez l’adresse précise de l’hébergement, les billets de retour ou de continuation lorsqu’ils existent, les coordonnées de l’hôte et des ressources adaptées au séjour. Selon le motif, une invitation commerciale ou un justificatif de déplacement peut être pertinent. Ne présentez pas une fausse réservation ou un document qui n’est plus valable."
        },
        {
          "id": "visa-detail-4",
          "title": "Transit aérien : sortir de la zone internationale change la situation",
          "body": "Une correspondance sans quitter la zone internationale ne nécessite généralement pas de visa turc de transit. En revanche, récupérer des bagages, changer d’aéroport entre IST et SAW ou passer au contrôle d’entrée peut nécessiter une autorisation d’entrée complète. Confirmez si votre itinéraire comporte des billets séparés et une récupération de bagages."
        },
        {
          "id": "visa-detail-5",
          "title": "Enfants, double nationalité et pièces distinctes",
          "body": "Chaque enfant doit disposer du document reconnu et du visa individuel si nécessaire. En cas de voyage sans l’un des parents, préparez les justificatifs exigés par le pays de départ ou la compagnie, notamment les autorisations de sortie. Une double nationalité ne permet pas de doubler la durée touristique. Utilisez des informations cohérentes pour éviter des difficultés de rapprochement des passages."
        },
        {
          "id": "visa-detail-6",
          "title": "À l’arrivée : documenter les jours autorisés",
          "body": "Notez la date réelle d’entrée et la dernière date de sortie légale. Une dispense ou un visa n’est pas une promesse d’admission ; les autorités peuvent refuser l’entrée pour les motifs légaux. Une installation longue ou un emploi exige un statut distinct. Préparer ce statut en amont évite de transformer un court séjour en dépassement."
        }
      ],
      "faqs": [
        {
          "question": "Mon passeport expire dans quatre mois ; puis-je entrer ?",
          "answer": "Pour une autorisation de 90 jours, la règle générale demande 150 jours de validité. Vérifiez les exceptions liées au document."
        },
        {
          "question": "Faut-il un visa pour changer d’aéroport ?",
          "answer": "Oui si votre régime l’exige, car le changement implique une entrée sur le territoire."
        },
        {
          "question": "Un visa garantit-il le passage de frontière ?",
          "answer": "Non, les autorités conservent le pouvoir de contrôler l’admission."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Régime des visas par nationalité — ministère turc des Affaires étrangères"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "Portail officiel e-Visa : modalités et paiement"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "Validité du passeport — article 7 de la loi 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Conditions générales des visas turcs"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Demande consulaire officielle"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Demande officielle de titre de séjour"
        }
      ]
    },
    "en": {
      "title": "Turkey entry requirements 2026: passports, visa and border checks",
      "metaDescription": "Passport validity, visa eligibility, border documents, children, airport transit and permitted stay explained for travel to Turkey.",
      "shortAnswer": "Entry requires a recognised travel document, appropriate permission for your purpose and sufficient remaining authorised days. Rules depend on the passport and itinerary; prepare the following evidence before departure.",
      "bosphorasHelp": "Bosphoras can coordinate arrivals, transfers and arrangements for your stay.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Passport validity: the additional 60 days rule",
          "body": "Article 7 of Law 6458 generally requires document validity extending at least 60 days beyond the permitted stay, even when the planned visit is shorter. The table shows typical periods. The ministry recommends six months. Exceptions exist for certain national IDs, agreements and official passports.",
          "table": {
            "headers": [
              "Permitted stay",
              "Minimum validity at arrival"
            ],
            "rows": [
              [
                "30 days",
                "90 days"
              ],
              [
                "60 days",
                "120 days"
              ],
              [
                "90 days",
                "150 days"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Establish eligibility before boarding",
          "body": "French and Kazakh ordinary passports generally qualify for 90 days in 180; Russians have a 60-day per-visit exemption and Indonesians 30 days per entry. For an e-Visa, match name, passport number, date of birth and validity with the travel document. Residence permission elsewhere does not automatically substitute for Turkish visa permission."
        },
        {
          "id": "visa-detail-3",
          "title": "Useful documents for border checks",
          "body": "Keep the accommodation address, return or onward tickets where applicable, host contact and evidence of appropriate means. Depending on purpose, carry a business invitation or travel documentation. Do not present fictitious reservations or invalid supporting records."
        },
        {
          "id": "visa-detail-4",
          "title": "Airport transit: leaving the international zone changes the rules",
          "body": "A connection without leaving the international transit area generally does not require a Turkish transit visa. Collecting baggage, changing airports between IST and SAW or passing entry control can require full entry permission. Review separate tickets and whether checked bags must be reclaimed."
        },
        {
          "id": "visa-detail-5",
          "title": "Children, dual nationality and individual documents",
          "body": "Children require their own recognised travel documents and individual visas where required. If travelling without a parent, prepare consent or custody documentation required by the departure country or carrier. Dual nationality does not double the tourist allowance. Use consistent travel records."
        },
        {
          "id": "visa-detail-6",
          "title": "Record the authorised period at arrival",
          "body": "Note your actual entry and final lawful day. A valid visa does not guarantee admission; authorities may refuse entry on statutory grounds. Long-term residence or employment requires appropriate separate status. Plan before using up the current permission."
        }
      ],
      "faqs": [
        {
          "question": "My passport expires in four months. Can I enter?",
          "answer": "A 90-day permission generally requires 150 days of document validity, unless an exception applies."
        },
        {
          "question": "Do I need a visa to change airports?",
          "answer": "If your nationality requires one, yes: transferring between airports entails entering Turkey."
        },
        {
          "question": "Does a visa guarantee admission?",
          "answer": "No; border authorities retain their powers."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa regime by nationality — Turkish Foreign Ministry"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "Official e-Visa portal: applications and payment"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "Passport validity — Article 7 of Law 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General Turkish visa rules"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Official consular visa application"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official residence permit application"
        }
      ]
    },
    "ru": {
      "title": "Условия въезда в Турцию в 2026 году: паспорт, виза и контроль",
      "metaDescription": "Срок действия паспорта, визовый режим, документы на границе, дети, транзит и сроки пребывания.",
      "shortAnswer": "Для въезда необходим признанный документ, подходящее основание и достаточный остаток разрешённых дней. Требования зависят от паспорта и маршрута; заранее подготовьте документы.",
      "bosphorasHelp": "Bosphoras может организовать встречу, трансферы и практические вопросы поездки.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Срок действия паспорта: дополнительные 60 дней",
          "body": "Статья 7 закона № 6458 обычно требует, чтобы паспорт действовал минимум ещё 60 дней после разрешённого срока пребывания, даже если сама поездка короче. В таблице приведены стандартные сроки. МИД рекомендует шесть месяцев. Для некоторых удостоверений, соглашений и официальных паспортов предусмотрены исключения.",
          "table": {
            "headers": [
              "Разрешённый срок",
              "Минимальная действительность при въезде"
            ],
            "rows": [
              [
                "30 дней",
                "90 дней"
              ],
              [
                "60 дней",
                "120 дней"
              ],
              [
                "90 дней",
                "150 дней"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Проверка режима до посадки",
          "body": "Обычные французские и казахстанские паспорта обычно дают до 90 дней из 180 без визы; российские — до 60 дней за визит, индонезийские — 30 за въезд. Сверьте электронную визу с паспортом: имя, номер, дату рождения и сроки. ВНЖ другого государства сам по себе не заменяет турецкую визу."
        },
        {
          "id": "visa-detail-3",
          "title": "Документы на границе",
          "body": "Сохраните адрес жилья, обратный или дальнейший билет при наличии, контакты принимающей стороны и подтверждение достаточных средств. Для делового визита может быть полезно приглашение. Не предъявляйте фиктивные бронирования или просроченные документы."
        },
        {
          "id": "visa-detail-4",
          "title": "Транзит и выход из международной зоны",
          "body": "При пересадке без выхода из международной зоны турецкая транзитная виза обычно не требуется. Получение багажа, смена аэропорта IST на SAW или прохождение паспортного контроля может потребовать полноценного въездного разрешения. Уточните, нужно ли получать багаж при раздельных билетах."
        },
        {
          "id": "visa-detail-5",
          "title": "Дети и двойное гражданство",
          "body": "Каждому ребёнку нужен собственный признанный документ и отдельная виза при необходимости. При поездке без родителя подготовьте согласие и документы об опеке, предусмотренные правилами страны отправления или перевозчика. Двойное гражданство не удваивает туристический срок. Используйте согласованные сведения о поездках."
        },
        {
          "id": "visa-detail-6",
          "title": "Фиксация разрешённого срока после въезда",
          "body": "Запишите дату фактического въезда и последний разрешённый день. Виза не гарантирует допуска: пограничные органы вправе отказать по законным основаниям. Для работы или длительного проживания необходимо отдельное основание. Планируйте его до окончания текущего срока."
        }
      ],
      "faqs": [
        {
          "question": "Паспорт действует ещё четыре месяца. Можно ли въехать?",
          "answer": "Для 90 дней обычно нужно 150 дней действия документа, кроме исключений."
        },
        {
          "question": "Нужна ли виза для смены аэропорта?",
          "answer": "Да, если гражданство требует визы, поскольку необходимо пересечь границу."
        },
        {
          "question": "Гарантирует ли виза въезд?",
          "answer": "Нет, пограничный контроль сохраняет полномочия."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила по гражданству — МИД Турции"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "Официальный портал электронной визы: оформление и оплата"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "Срок действия паспорта — статья 7 закона № 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила Турции"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Официальная консульская подача"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальная подача на ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "شروط دخول تركيا 2026: الجواز والتأشيرة والحدود",
      "metaDescription": "صلاحية الجواز ونظام التأشيرات ومستندات الحدود وسفر الأطفال والعبور ومدد البقاء في تركيا.",
      "shortAnswer": "يتطلب الدخول وثيقة معترفاً بها وحق دخول مناسباً للغرض ورصيداً كافياً من الأيام. تختلف الشروط حسب الجواز والمسار، فجهز المستندات قبل السفر.",
      "bosphorasHelp": "تستطيع Bosphoras تنسيق الوصول والتنقل وترتيبات إقامتك.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "صلاحية الجواز وقاعدة الستين يوماً",
          "body": "تتطلب المادة 7 من القانون 6458 عموماً صلاحية تزيد 60 يوماً على مدة البقاء المصرح بها حتى لو كانت الرحلة أقصر. تعرض الأمثلة المدد المعتادة. وتوصي الوزارة بستة أشهر. توجد استثناءات لبعض بطاقات الهوية والاتفاقيات والجوازات الرسمية.",
          "table": {
            "headers": [
              "مدة البقاء المصرح بها",
              "الحد الأدنى للصلاحية عند الوصول"
            ],
            "rows": [
              [
                "30 يوماً",
                "90 يوماً"
              ],
              [
                "60 يوماً",
                "120 يوماً"
              ],
              [
                "90 يوماً",
                "150 يوماً"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "تحديد نظام الدخول قبل الصعود",
          "body": "تتمتع الجوازات الفرنسية والكازاخستانية العادية عادةً بـ90 يوماً خلال 180؛ والروسية بـ60 يوماً للزيارة، والإندونيسية بـ30 يوماً لكل دخول. طابق الاسم ورقم الجواز وتاريخ الميلاد والصلاحية مع الإلكترونية. لا تحل إقامة دولة أخرى تلقائياً محل تأشيرة تركيا."
        },
        {
          "id": "visa-detail-3",
          "title": "مستندات مفيدة عند الحدود",
          "body": "احتفظ بعنوان السكن وتذاكر العودة أو المتابعة عند وجودها وبيانات المضيف وإثبات الموارد المناسبة. وقد تفيد دعوة عمل بحسب الغرض. لا تقدم حجوزات وهمية أو مستندات منتهية."
        },
        {
          "id": "visa-detail-4",
          "title": "العبور وتغيير المطار",
          "body": "لا تتطلب عادةً رحلة الربط دون مغادرة المنطقة الدولية تأشيرة عبور تركية. لكن استلام الأمتعة أو تغيير المطار بين IST وSAW أو اجتياز مراقبة الدخول قد يتطلب حق دخول كاملاً. تحقق من التذاكر المنفصلة وضرورة استلام الأمتعة."
        },
        {
          "id": "visa-detail-5",
          "title": "الأطفال والجنسية المزدوجة",
          "body": "يحتاج كل طفل إلى وثيقته المعترف بها وتأشيرته عند اللزوم. وعند السفر دون أحد الوالدين جهز الموافقات ووثائق الحضانة التي تطلبها دولة المغادرة أو شركة النقل. لا تضاعف الجنسية المزدوجة مدة السياحة. استخدم بيانات متسقة في الرحلات."
        },
        {
          "id": "visa-detail-6",
          "title": "تسجيل المدة القانونية بعد الوصول",
          "body": "دوّن تاريخ الدخول الفعلي وآخر يوم قانوني. لا تضمن التأشيرة القبول؛ فللسلطات حق الرفض لأسباب قانونية. ويتطلب العمل أو الإقامة الطويلة وضعاً مستقلاً. خطط قبل انتهاء مدة البقاء الحالية."
        }
      ],
      "faqs": [
        {
          "question": "تنتهي صلاحية جوازي بعد أربعة أشهر، هل يمكن الدخول؟",
          "answer": "تتطلب مدة 90 يوماً عادةً صلاحية 150 يوماً ما لم ينطبق استثناء."
        },
        {
          "question": "هل أحتاج تأشيرة عند تغيير المطار؟",
          "answer": "نعم إذا كانت جنسيتك تتطلبها لأنك ستدخل الأراضي التركية."
        },
        {
          "question": "هل تضمن التأشيرة الدخول؟",
          "answer": "لا، تبقى صلاحيات الرقابة على الحدود قائمة."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "نظام التأشيرات حسب الجنسية — وزارة الخارجية التركية"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/-2/",
          "label": "منصة التأشيرة الإلكترونية الرسمية: الطلب والدفع"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "صلاحية الجواز — المادة 7 من القانون 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات التركية"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "الطلب القنصلي الرسمي"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة طلب تصريح الإقامة الرسمية"
        }
      ]
    }
  },
  "travel-turkey-without-passport": {
    "fr": {
      "title": "Aller en Turquie sans passeport en 2026 : qui peut voyager ?",
      "metaDescription": "Voyage sans passeport en Turquie : nationalités admises avec une carte d’identité, durée du séjour, enfants et escales.",
      "shortAnswer": "Il est possible de voyager en Turquie sans passeport pour les citoyens de certaines nationalités qui présentent leur carte nationale d’identité reconnue. Cette facilité n’est pas ouverte à tous les résidents européens. La carte doit être un véritable document de voyage admis selon l’accord applicable.",
      "bosphorasHelp": "Bosphoras peut organiser un trajet et un séjour adaptés aux documents de toute votre famille.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Qui peut voyager sans passeport ?",
          "body": "Le ministère turc recense 21 nationalités et territoires concernés. Une carte française, allemande, belge, suisse, italienne ou roumaine peut notamment être utilisée suivant les règles applicables. À l’inverse, un passeport russe, britannique, kazakh ou marocain peut être dispensé de visa, mais leur carte nationale ne figure pas parmi les documents admis dans cette liste."
        },
        {
          "id": "visa-detail-2",
          "title": "Une carte de séjour française n’est pas une carte d’identité française",
          "body": "Un citoyen marocain résidant en France reste soumis au régime de son passeport marocain. Le titre de séjour français n’est pas une carte nationale d’identité de citoyen français. Le même principe vaut pour le permis de conduire et les cartes professionnelles. Un document spécial de voyage de réfugié a son propre régime."
        },
        {
          "id": "visa-detail-3",
          "title": "Vérifier la date de validité",
          "body": "Utilisez de préférence une carte valide. Des accords particuliers concernant certains documents expirés existent pour quelques nationalités, mais ils ne signifient pas que toute carte expirée est acceptée. Une extension administrative de validité dans le pays émetteur n’est pas automatiquement reconnue pour chaque étape du voyage."
        },
        {
          "id": "visa-detail-4",
          "title": "Escales et trajet international",
          "body": "Un vol direct Paris–Istanbul permet d’utiliser les documents admis par les deux pays. En revanche, une escale avec sortie de zone internationale peut imposer un passeport. Les règles d’un pays tiers restent indépendantes de l’accord turc ; vérifiez également que le transporteur accepte le document sur ce trajet."
        },
        {
          "id": "visa-detail-5",
          "title": "Enfants et documents de passage",
          "body": "Un enfant doit disposer de sa propre carte admise ou de son passeport. Un livret de famille n’est pas un document d’entrée. Lorsque les autorités remettent un justificatif de passage à une personne voyageant sans passeport, conservez-le jusqu’à la sortie. Notez les dates pour calculer la durée de séjour."
        },
        {
          "id": "visa-detail-6",
          "title": "Quand emporter malgré tout le passeport ?",
          "body": "Pour un projet de résidence, d’emploi, d’ouverture de compte ou d’achat immobilier, un passeport et des documents supplémentaires peuvent être exigés. Si votre visite dépasse le tourisme, emporter le passeport est prudent même lorsque la carte suffit à franchir la frontière. Le droit d’entrée ne remplace pas les pièces d’une démarche administrative."
        }
      ],
      "faqs": [
        {
          "question": "Un Britannique peut-il voyager avec son permis de conduire ?",
          "answer": "Non. Le Royaume-Uni ne figure pas dans la liste des cartes nationales admises."
        },
        {
          "question": "Puis-je entrer avec ma carte de séjour française ?",
          "answer": "Non, elle ne remplace pas le passeport."
        },
        {
          "question": "Un enfant doit-il avoir sa propre carte ?",
          "answer": "Oui, ou un autre document reconnu."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Régime des visas par nationalité — ministère turc des Affaires étrangères"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Liste officielle des 21 nationalités admises avec une carte d’identité"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "Validité du passeport — article 7 de la loi 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Conditions générales des visas turcs"
        }
      ]
    },
    "en": {
      "title": "Travel to Turkey without a passport in 2026: who qualifies?",
      "metaDescription": "National ID travel to Turkey, eligible countries, children, document validity and connecting flights explained.",
      "shortAnswer": "Certain nationalities can visit Turkey without a passport by presenting a recognised national identity card. This is not a benefit available to all European residents. The document must be accepted under the relevant arrangements.",
      "bosphorasHelp": "Bosphoras can organise routes and stays around your household's travel documents.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Who can travel without a passport?",
          "body": "The Turkish ministry lists 21 eligible nationalities and territories. French, German, Belgian, Swiss, Italian and Romanian national IDs are among recognised documents under the relevant rules. Russian, British, Kazakh and Moroccan ordinary passports may be visa-exempt, but their national ID cards are not on that list."
        },
        {
          "id": "visa-detail-2",
          "title": "A residence permit is not a citizenship ID",
          "body": "A Moroccan citizen residing in France remains subject to Moroccan passport rules. A French residence card is not a French national citizen ID. Driving licences and professional cards do not substitute. Special refugee travel documents follow distinct rules."
        },
        {
          "id": "visa-detail-3",
          "title": "Document expiry and exceptions",
          "body": "Prefer a valid national ID. Specific agreements accept certain expired documents for some nationalities, but that does not mean all expired cards qualify. Domestic extensions of validity may not be recognised at every travel stage."
        },
        {
          "id": "visa-detail-4",
          "title": "Connections and transit countries",
          "body": "Direct Paris–Istanbul travel can use documents accepted by both countries. A connection requiring entry into a third country may require a passport. Transit rules are independent of Turkey's agreement; the carrier must also accept the document for the itinerary."
        },
        {
          "id": "visa-detail-5",
          "title": "Children and border records",
          "body": "Children need their own accepted ID or passport. A family record book is not a travel document. Retain any border entry document issued to a national-ID traveller until departure and record the dates for the stay calculation."
        },
        {
          "id": "visa-detail-6",
          "title": "When carrying a passport remains advisable",
          "body": "Residence applications, employment, banking or property procedures may require a passport and supporting documentation. If travelling beyond tourism, carry your passport where possible even if the national ID is sufficient for border entry. Entry permission does not replace procedural documentation."
        }
      ],
      "faqs": [
        {
          "question": "Can a British traveller use a driving licence?",
          "answer": "No. The UK is not on the list of eligible national IDs."
        },
        {
          "question": "Is a French residence card sufficient?",
          "answer": "No; it does not replace a passport."
        },
        {
          "question": "Do children need their own ID?",
          "answer": "Yes, or another recognised travel document."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa regime by nationality — Turkish Foreign Ministry"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Official list of 21 nationalities eligible for national ID entry"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "Passport validity — Article 7 of Law 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General Turkish visa rules"
        }
      ]
    },
    "ru": {
      "title": "В Турцию без паспорта в 2026 году: кто может поехать",
      "metaDescription": "Въезд по национальному удостоверению, список гражданств, сроки действия, дети и пересадки.",
      "shortAnswer": "Граждане некоторых стран могут посещать Турцию без паспорта по признанному национальному удостоверению личности. Это право не распространяется на всех жителей Европы. Документ должен соответствовать действующим соглашениям.",
      "bosphorasHelp": "Bosphoras может организовать поездку с учётом документов всех членов семьи.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Кто может путешествовать без паспорта?",
          "body": "МИД Турции перечисляет 21 гражданство и территорию. Среди признанных документов — национальные удостоверения Франции, Германии, Бельгии, Швейцарии, Италии и Румынии. Российские, британские, казахстанские и марокканские обычные паспорта могут быть безвизовыми, но национальные карты этих стран не включены в перечень."
        },
        {
          "id": "visa-detail-2",
          "title": "Карта ВНЖ не является удостоверением гражданина",
          "body": "Гражданин Марокко, живущий во Франции, подчиняется правилам марокканского паспорта. Французский ВНЖ не является удостоверением гражданина Франции. Водительские права и служебные карты также не заменяют проездной документ. Для документов беженцев действует особый режим."
        },
        {
          "id": "visa-detail-3",
          "title": "Срок действия документа",
          "body": "Предпочтительно использовать действующую карту. Для отдельных гражданств существуют соглашения о некоторых просроченных документах, но они не распространяются на все карты. Внутреннее продление срока действия может не признаваться на всех этапах поездки."
        },
        {
          "id": "visa-detail-4",
          "title": "Пересадки в других странах",
          "body": "При прямом рейсе Париж–Стамбул используются документы, признанные обеими странами. Пересадка с выходом в третью страну может потребовать паспорт. Правила транзита независимы от турецкого соглашения; перевозчик также должен принимать документ на маршруте."
        },
        {
          "id": "visa-detail-5",
          "title": "Дети и подтверждение пересечения границы",
          "body": "Ребёнку необходимо собственное признанное удостоверение или паспорт. Семейная книжка не является проездным документом. Храните до выезда выданные на границе подтверждения для путешествующих по карте и фиксируйте даты для подсчёта пребывания."
        },
        {
          "id": "visa-detail-6",
          "title": "Когда всё же взять паспорт",
          "body": "Для ВНЖ, работы, открытия банковского счёта или покупки недвижимости могут требоваться паспорт и дополнительные документы. Если цель поездки выходит за пределы туризма, лучше взять паспорт даже при возможности въезда по карте. Право пересечения границы не заменяет документы для других процедур."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли британцу въехать по водительским правам?",
          "answer": "Нет, Великобритания отсутствует в перечне национальных удостоверений."
        },
        {
          "question": "Достаточно ли французского ВНЖ?",
          "answer": "Нет, он не заменяет паспорт."
        },
        {
          "question": "Нужна ли ребёнку собственная карта?",
          "answer": "Да, либо иной признанный документ."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила по гражданству — МИД Турции"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Официальный список 21 гражданства для въезда по удостоверению"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "Срок действия паспорта — статья 7 закона № 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила Турции"
        }
      ]
    },
    "ar": {
      "title": "السفر إلى تركيا بدون جواز سفر 2026: من يحق له ذلك؟",
      "metaDescription": "تعرف على السفر ببطاقة الهوية الوطنية والجنسيات المؤهلة وصلاحية الوثائق والأطفال والرحلات المتصلة.",
      "shortAnswer": "يمكن لمواطني بعض الدول زيارة تركيا دون جواز عند تقديم بطاقة هوية وطنية معترف بها. لا يشمل ذلك كل المقيمين في أوروبا، بل يجب أن تكون الوثيقة مشمولة بالاتفاق المعمول به.",
      "bosphorasHelp": "تنسق Bosphoras المسار والسكن وفق وثائق جميع أفراد الأسرة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "من يحق له السفر دون جواز؟",
          "body": "تسرد الخارجية التركية 21 جنسية وإقليماً. ومن الوثائق المقبولة بطاقات الهوية الفرنسية والألمانية والبلجيكية والسويسرية والإيطالية والرومانية وفق القواعد. وقد تكون الجوازات الروسية والبريطانية والكازاخستانية والمغربية معفاة من التأشيرة، لكن بطاقاتها الوطنية غير مدرجة في القائمة."
        },
        {
          "id": "visa-detail-2",
          "title": "بطاقة الإقامة ليست بطاقة مواطنة",
          "body": "يخضع المغربي المقيم في فرنسا لقواعد جوازه المغربي. ولا تعد إقامة فرنسا بطاقة هوية وطنية لمواطن فرنسي. ولا تحل رخصة القيادة أو البطاقة المهنية محل وثيقة السفر. وتخضع وثائق اللاجئين لنظام خاص."
        },
        {
          "id": "visa-detail-3",
          "title": "صلاحية الوثيقة والاستثناءات",
          "body": "استخدم بطاقة سارية قدر الإمكان. توجد اتفاقيات خاصة تقبل بعض الوثائق المنتهية لجنسيات محددة، ولا تشمل جميع البطاقات. وقد لا يُعترف بالتمديد المحلي للصلاحية في كل مرحلة من الرحلة."
        },
        {
          "id": "visa-detail-4",
          "title": "العبور في الدول الأخرى",
          "body": "في رحلة مباشرة من باريس إلى إسطنبول يمكن استخدام الوثائق التي يقبلها البلدان. وقد تتطلب رحلة الربط التي تدخل دولة ثالثة جوازاً. فقواعد العبور مستقلة عن الاتفاق التركي، ويجب أن يقبل الناقل الوثيقة على المسار."
        },
        {
          "id": "visa-detail-5",
          "title": "الأطفال وإثبات الدخول",
          "body": "يحتاج الطفل إلى بطاقة معترف بها خاصة به أو جواز. الدفتر العائلي ليس وثيقة سفر. احتفظ بأي مستند دخول يصدر عند السفر بالهوية حتى المغادرة وسجل التواريخ لحساب المدة."
        },
        {
          "id": "visa-detail-6",
          "title": "متى يستحسن حمل الجواز رغم الإعفاء؟",
          "body": "قد تتطلب إجراءات الإقامة والعمل والحسابات البنكية وشراء العقار جوازاً ووثائق إضافية. وإذا تجاوز غرض الرحلة السياحة، يستحسن حمل الجواز حتى لو كانت البطاقة كافية عند الحدود. لا يحل حق الدخول محل وثائق الإجراءات الأخرى."
        }
      ],
      "faqs": [
        {
          "question": "هل يدخل البريطاني برخصة القيادة؟",
          "answer": "لا، المملكة المتحدة غير مدرجة في قائمة بطاقات الهوية."
        },
        {
          "question": "هل تكفي بطاقة إقامة فرنسية؟",
          "answer": "لا، لا تحل محل الجواز."
        },
        {
          "question": "هل يحتاج الطفل إلى بطاقة خاصة؟",
          "answer": "نعم، أو وثيقة سفر معترف بها أخرى."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "نظام التأشيرات حسب الجنسية — وزارة الخارجية التركية"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "القائمة الرسمية لـ21 جنسية يسمح لها بالدخول ببطاقة الهوية"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "صلاحية الجواز — المادة 7 من القانون 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات التركية"
        }
      ]
    }
  },
  "turkey-id-card-entry": {
    "fr": {
      "title": "Turquie avec carte d’identité en 2026 : règles et durée de séjour",
      "metaDescription": "Carte d’identité française, européenne ou autre : documents admis, 90 jours sur 180, cas particuliers et formalités à l’arrivée.",
      "shortAnswer": "La carte d’identité peut remplacer le passeport pour une visite touristique lorsque la nationalité et le document sont reconnus par la Turquie. Pour les Français et de nombreuses nationalités européennes admises, le séjour peut atteindre 90 jours dans les limites applicables.",
      "bosphorasHelp": "Bosphoras prépare votre arrivée et organise les déplacements en fonction de votre document de voyage.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Le cas des voyageurs français",
          "body": "Pour un court séjour, une carte nationale d’identité française reconnue peut être présentée à la place du passeport. Le voyageur doit respecter la durée d’exemption de visa et disposer d’un document en bon état. La règle générale permet jusqu’à 90 jours sur 180. Une simple carte Vitale, un permis de conduire ou un titre de séjour n’est pas une alternative."
        },
        {
          "id": "visa-detail-2",
          "title": "Les documents nationaux admis",
          "body": "La liste du ministère comprend 21 nationalités ou territoires. La Belgique, l’Allemagne, les Pays-Bas, la Suisse, la Pologne et la Roumanie en font notamment partie. Les voyageurs doivent produire le document national reconnu, pas une photocopie ni une carte émise par une institution privée.",
          "table": {
            "headers": [
              "Nationalité ou territoire",
              "Document et durée"
            ],
            "rows": [
              [
                "Allemagne",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Belgique",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "France",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Géorgie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Pays-Bas",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Espagne",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Suisse",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Italie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Chypre du Nord (selon la liste turque)",
                "Régime spécifique ; pas de durée de 90 jours indiquée dans la fiche officielle"
              ],
              [
                "Liechtenstein",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Luxembourg",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Malte",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Portugal",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Ukraine",
                "Carte biométrique valide, trajet direct depuis l’Ukraine selon le ministère"
              ],
              [
                "Grèce",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Pologne",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Bulgarie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Hongrie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Moldavie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Azerbaïdjan",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Roumanie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Ukraine : une condition de trajet spécifique",
          "body": "La fiche officielle concernant l’Ukraine prévoit l’utilisation d’une carte biométrique valide pour le voyage direct d’Ukraine vers la Turquie. Un départ depuis un autre pays ne doit pas être présumé couvert par cette règle. Dans cette situation, le passeport constitue l’option la plus simple lorsqu’il est disponible."
        },
        {
          "id": "visa-detail-4",
          "title": "Durée autorisée malgré l’absence de visa",
          "body": "La carte d’identité ne donne pas une durée supplémentaire. Si vous avez séjourné 45 jours puis 35 jours dans la fenêtre de référence de 180 jours, il ne reste que dix jours au total à la date considérée, si aucun ancien jour n’est sorti de la fenêtre. Le compteur doit être recalculé chaque jour de présence."
        },
        {
          "id": "visa-detail-5",
          "title": "À l’aéroport et dans les hôtels",
          "body": "Présentez votre document original au contrôle. Conservez l’éventuel justificatif d’entrée délivré si vous n’avez pas de passeport tamponné. Les hôtels peuvent demander un document d’identité pour l’enregistrement. Utilisez les mêmes données d’identité pour les réservations."
        },
        {
          "id": "visa-detail-6",
          "title": "Carte d’identité et installation durable",
          "body": "L’entrée avec une carte ne dispense pas des pièces de demande d’ikamet. Les formalités de résidence, d’emploi ou d’achat peuvent nécessiter un passeport alors que le séjour touristique admettait la carte. Si vous envisagez un changement de statut, préparez ces pièces avant le départ."
        }
      ],
      "faqs": [
        {
          "question": "La carte d’identité française suffit-elle pour un séjour touristique ?",
          "answer": "Oui, lorsqu’elle est reconnue et les conditions d’entrée sont remplies."
        },
        {
          "question": "La carte permet-elle de rester plus longtemps ?",
          "answer": "Non. La durée dépend du régime de séjour, pas du choix carte ou passeport."
        },
        {
          "question": "Une photocopie suffit-elle ?",
          "answer": "Non, présentez l’original reconnu."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Régime des visas par nationalité — ministère turc des Affaires étrangères"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Liste officielle des 21 nationalités admises avec une carte d’identité"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "Validité du passeport — article 7 de la loi 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Conditions générales des visas turcs"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Demande officielle de titre de séjour"
        }
      ]
    },
    "en": {
      "title": "Turkey with a national ID card in 2026: entry and stay rules",
      "metaDescription": "French and other eligible national ID cards, permitted stay, the 90-in-180 rule and special conditions for entering Turkey.",
      "shortAnswer": "A recognised national identity card can replace a passport for a short tourist visit where Turkey accepts the nationality and document. French and many other eligible European citizens may stay up to 90 days within the relevant limits.",
      "bosphorasHelp": "Bosphoras can coordinate your arrival and onward arrangements around the documents you use.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "French national ID holders",
          "body": "For a short visit, an accepted French national ID can be used instead of a passport. The traveller must comply with visa-exemption limits and carry a document in good condition. The general ceiling is 90 in 180 days. A health insurance card, driving licence or residence card is not a substitute."
        },
        {
          "id": "visa-detail-2",
          "title": "Recognised national documents",
          "body": "The ministry's list comprises 21 nationalities and territories, including Belgium, Germany, the Netherlands, Switzerland, Poland and Romania. Present the original recognised document rather than a photocopy or private institution card.",
          "table": {
            "headers": [
              "Nationality or territory",
              "Document and duration"
            ],
            "rows": [
              [
                "Germany",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Belgium",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "France",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Georgia",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Netherlands",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Spain",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Switzerland",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Italy",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Northern Cyprus (as listed by Türkiye)",
                "Special regime; official entry does not specify a 90-day limit"
              ],
              [
                "Liechtenstein",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Luxembourg",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Malta",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Portugal",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Ukraine",
                "Valid biometric ID for direct travel from Ukraine, per ministry"
              ],
              [
                "Greece",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Poland",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Bulgaria",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Hungary",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Moldova",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Azerbaijan",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Romania",
                "National ID accepted; short stay up to 90 days under agreement"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Ukraine and the direct-journey condition",
          "body": "The official Ukraine entry specifies a valid biometric ID for direct travel from Ukraine to Turkey. Departure from a different country should not be assumed to qualify. A passport is the simplest alternative when available."
        },
        {
          "id": "visa-detail-4",
          "title": "Permitted stay despite visa exemption",
          "body": "The ID card confers no extra time. If you have used 45 days and then 35 days in the reference window, only ten remain at that point, assuming no older days have moved outside the rolling period. Recalculate on each day of presence."
        },
        {
          "id": "visa-detail-5",
          "title": "Airport and hotel registration",
          "body": "Present the recognised original document at the border. Keep any entry record issued if you do not have a stamped passport. Hotels may request identity documentation for registration. Use matching personal details when booking."
        },
        {
          "id": "visa-detail-6",
          "title": "National ID and longer-term relocation",
          "body": "Entry by national ID does not remove residence-permit documentation. Residence, work or property procedures may require a passport even where tourist entry permits an ID. Prepare these documents before changing status."
        }
      ],
      "faqs": [
        {
          "question": "Does a French national ID suffice for tourism?",
          "answer": "Yes, if recognised and entry requirements are met."
        },
        {
          "question": "Does national ID allow a longer stay?",
          "answer": "No. The entry regime determines the duration."
        },
        {
          "question": "Is a photocopy enough?",
          "answer": "No; present the recognised original."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa regime by nationality — Turkish Foreign Ministry"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Official list of 21 nationalities eligible for national ID entry"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "Passport validity — Article 7 of Law 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General Turkish visa rules"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official residence permit application"
        }
      ]
    },
    "ru": {
      "title": "В Турцию по национальному удостоверению в 2026 году: правила",
      "metaDescription": "Национальные удостоверения Франции и других стран, срок пребывания, 90 дней из 180 и особые условия.",
      "shortAnswer": "Признанное удостоверение личности может заменить паспорт для короткой туристической поездки, если Турция допускает соответствующее гражданство и документ. Для граждан Франции и многих европейских стран возможен срок до 90 дней в рамках применимых ограничений.",
      "bosphorasHelp": "Bosphoras может организовать встречу и дальнейшие поездки с учётом ваших документов.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Французское национальное удостоверение",
          "body": "Для короткой поездки признанное французское удостоверение может заменить паспорт. Необходимо соблюдать безвизовый срок и иметь документ в хорошем состоянии. Общий предел составляет 90 дней из 180. Медицинская карта, водительские права и ВНЖ не заменяют документ."
        },
        {
          "id": "visa-detail-2",
          "title": "Признанные национальные документы",
          "body": "В перечне МИД — 21 гражданство и территория, включая Бельгию, Германию, Нидерланды, Швейцарию, Польшу и Румынию. Предъявляйте оригинал признанного документа, а не копию или частную карту.",
          "table": {
            "headers": [
              "Гражданство или территория",
              "Документ и срок"
            ],
            "rows": [
              [
                "Германия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Бельгия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Франция",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Грузия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Нидерланды",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Испания",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Швейцария",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Италия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Северный Кипр (по перечню Турции)",
                "Особый режим; в официальной записи нет ограничения 90 дней"
              ],
              [
                "Лихтенштейн",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Люксембург",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Мальта",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Португалия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Украина",
                "Действующая биометрическая карта при прямой поездке из Украины согласно МИД"
              ],
              [
                "Греция",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Польша",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Болгария",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Венгрия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Молдова",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Азербайджан",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Румыния",
                "Национальное удостоверение; до 90 дней по соглашению"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Украина и условие прямого маршрута",
          "body": "В официальной записи для Украины указана действующая биометрическая карта для прямой поездки из Украины в Турцию. Не следует считать, что выезд из другой страны подпадает под это правило. При наличии паспорта он является простым альтернативным вариантом."
        },
        {
          "id": "visa-detail-4",
          "title": "Срок пребывания по удостоверению",
          "body": "Карта не добавляет разрешённых дней. Если уже использованы 45 и 35 дней за расчётные 180 дней, в этот момент остаётся 10 дней, при условии что старые даты ещё не выпали из периода. Срок пересчитывается на каждый день пребывания."
        },
        {
          "id": "visa-detail-5",
          "title": "Контроль в аэропорту и регистрация в отеле",
          "body": "Предъявляйте оригинал на границе. Сохраняйте выданное подтверждение въезда при отсутствии штампа в паспорте. Отель может попросить документ для регистрации. Используйте одинаковые персональные данные при бронировании."
        },
        {
          "id": "visa-detail-6",
          "title": "Удостоверение и длительное проживание",
          "body": "Въезд по карте не освобождает от документов на ВНЖ. Для проживания, работы или недвижимости может потребоваться паспорт, несмотря на допуск по карте для туризма. Подготовьте документы до смены статуса."
        }
      ],
      "faqs": [
        {
          "question": "Достаточно ли французского удостоверения для туризма?",
          "answer": "Да, если документ признан и выполнены условия въезда."
        },
        {
          "question": "Даёт ли карта больший срок?",
          "answer": "Нет, срок определяется режимом въезда."
        },
        {
          "question": "Подойдёт ли копия?",
          "answer": "Нет, предъявляется признанный оригинал."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила по гражданству — МИД Турции"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Официальный список 21 гражданства для въезда по удостоверению"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "Срок действия паспорта — статья 7 закона № 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила Турции"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальная подача на ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "دخول تركيا ببطاقة الهوية 2026: الشروط ومدة البقاء",
      "metaDescription": "بطاقات الهوية الفرنسية وغيرها من الوثائق المؤهلة وقاعدة 90 يوماً خلال 180 والشروط الخاصة للدخول.",
      "shortAnswer": "يمكن أن تحل بطاقة الهوية المعترف بها محل الجواز للزيارة السياحية القصيرة إذا قبلت تركيا الجنسية والوثيقة. وقد تصل مدة البقاء للفرنسيين وكثير من الأوروبيين المؤهلين إلى 90 يوماً ضمن القيود المطبقة.",
      "bosphorasHelp": "تستطيع Bosphoras تنسيق وصولك وتنقلاتك وفق وثائق السفر المستخدمة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "بطاقة الهوية الوطنية الفرنسية",
          "body": "يمكن استخدام بطاقة فرنسية معترف بها بدلاً من الجواز للزيارة القصيرة. يجب احترام مدة الإعفاء وتقديم وثيقة سليمة. السقف العام 90 يوماً خلال 180. لا تحل بطاقة التأمين الصحي أو رخصة القيادة أو الإقامة محل الوثيقة."
        },
        {
          "id": "visa-detail-2",
          "title": "الوثائق الوطنية المعترف بها",
          "body": "تضم قائمة الوزارة 21 جنسية وإقليماً، منها بلجيكا وألمانيا وهولندا وسويسرا وبولندا ورومانيا. قدم أصل الوثيقة المعترف بها لا صورة منها ولا بطاقة خاصة.",
          "table": {
            "headers": [
              "الجنسية أو الإقليم",
              "الوثيقة والمدة"
            ],
            "rows": [
              [
                "ألمانيا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "بلجيكا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "فرنسا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "جورجيا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "هولندا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "إسبانيا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "سويسرا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "إيطاليا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "شمال قبرص (وفق القائمة التركية)",
                "نظام خاص؛ لا يذكر المدخل الرسمي حد 90 يوماً"
              ],
              [
                "ليختنشتاين",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "لوكسمبورغ",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "مالطا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "البرتغال",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "أوكرانيا",
                "بطاقة بيومترية سارية للرحلات المباشرة من أوكرانيا وفق الوزارة"
              ],
              [
                "اليونان",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "بولندا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "بلغاريا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "المجر",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "مولدوفا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "أذربيجان",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "رومانيا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "أوكرانيا وشرط الرحلة المباشرة",
          "body": "تذكر القاعدة الرسمية لأوكرانيا بطاقة بيومترية سارية للرحلات المباشرة من أوكرانيا إلى تركيا. لا تفترض شمول المغادرة من دولة أخرى. وعند توفر الجواز فهو بديل بسيط."
        },
        {
          "id": "visa-detail-4",
          "title": "المدة رغم الإعفاء من التأشيرة",
          "body": "لا تمنح بطاقة الهوية أياماً إضافية. فإذا استخدمت 45 يوماً ثم 35 ضمن نافذة 180، يتبقى عشرة أيام في ذلك الوقت إذا لم تخرج أيام قديمة من النافذة. أعد الحساب لكل يوم من البقاء."
        },
        {
          "id": "visa-detail-5",
          "title": "المطار وتسجيل الفندق",
          "body": "قدم أصل الوثيقة عند الحدود. احتفظ بأي إثبات دخول يصدر عند عدم وجود ختم في جواز. وقد يطلب الفندق وثيقة الهوية للتسجيل. استخدم بيانات شخصية متطابقة في الحجوزات."
        },
        {
          "id": "visa-detail-6",
          "title": "بطاقة الهوية والانتقال الطويل",
          "body": "لا يلغي الدخول بالبطاقة مستندات الإقامة. فقد يلزم الجواز للعمل والإقامة والعقار رغم قبول الهوية للسياحة. جهز هذه الوثائق قبل تغيير الوضع القانوني."
        }
      ],
      "faqs": [
        {
          "question": "هل تكفي بطاقة فرنسية للسياحة؟",
          "answer": "نعم إذا كانت معترفاً بها واستوفيت شروط الدخول."
        },
        {
          "question": "هل تسمح البطاقة بمدة أطول؟",
          "answer": "لا، المدة يحددها نظام الدخول."
        },
        {
          "question": "هل تكفي صورة البطاقة؟",
          "answer": "لا، قدم الأصل المعترف به."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "نظام التأشيرات حسب الجنسية — وزارة الخارجية التركية"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "القائمة الرسمية لـ21 جنسية يسمح لها بالدخول ببطاقة الهوية"
        },
        {
          "href": "https://www.mfa.gov.tr/passport-validity-requirements-while-entering-turkey-in-accordance-with-law-on-foreigners-and-international-protection.en.mfa",
          "label": "صلاحية الجواز — المادة 7 من القانون 6458"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات التركية"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة طلب تصريح الإقامة الرسمية"
        }
      ]
    }
  },
  "countries-enter-turkey-id-card": {
    "fr": {
      "title": "Quels pays peuvent entrer en Turquie avec une carte d’identité ? Liste 2026",
      "metaDescription": "Liste officielle des 21 nationalités et territoires admis avec une carte nationale d’identité en Turquie, conditions, durée et exceptions.",
      "shortAnswer": "Le ministère turc des Affaires étrangères publie une liste de 21 nationalités et territoires autorisés à utiliser une carte nationale d’identité reconnue. Le tableau reprend cette liste consultée le 17 novembre 2026. Les accords de séjour et conditions documentaires continuent de s’appliquer.",
      "bosphorasHelp": "Bosphoras peut organiser votre voyage privé ou professionnel en tenant compte des documents et nationalités de tous les participants.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Liste officielle des cartes d’identité admises",
          "body": "Le tableau indique les nationalités ou territoires figurant dans la liste turque. La durée de séjour reste distincte de l’admission du document. Les conditions particulières de trajet, notamment pour l’Ukraine, sont signalées.",
          "table": {
            "headers": [
              "Nationalité ou territoire",
              "Document et durée"
            ],
            "rows": [
              [
                "Allemagne",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Belgique",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "France",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Géorgie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Pays-Bas",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Espagne",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Suisse",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Italie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Chypre du Nord (selon la liste turque)",
                "Régime spécifique ; pas de durée de 90 jours indiquée dans la fiche officielle"
              ],
              [
                "Liechtenstein",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Luxembourg",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Malte",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Portugal",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Ukraine",
                "Carte biométrique valide, trajet direct depuis l’Ukraine selon le ministère"
              ],
              [
                "Grèce",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Pologne",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Bulgarie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Hongrie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Moldavie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Azerbaïdjan",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ],
              [
                "Roumanie",
                "Carte nationale admise ; séjour court jusqu’à 90 jours selon accord"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Citoyens européens : attention aux différences",
          "body": "L’Union européenne n’est pas un passeport uniforme pour les déplacements hors de l’UE. Les Français, Allemands, Belges et Roumains figurent dans la liste, alors que d’autres citoyens européens peuvent bénéficier d’une dispense de visa avec leur passeport sans que leur carte nationale soit admise. La nationalité précise est donc décisive."
        },
        {
          "id": "visa-detail-3",
          "title": "Durée de séjour des nationalités admises",
          "body": "Pour les nationalités de la liste bénéficiant du régime touristique de 90 jours, la présence totale reste soumise aux limites de leur accord et au plafond général. Une carte nationale n’ouvre pas un droit au séjour permanent. L’entrée d’un citoyen de Chypre du Nord relève d’un régime spécifique ; la fiche officielle ne fixe pas la même durée touristique."
        },
        {
          "id": "visa-detail-4",
          "title": "Documents non admis et voyageurs étrangers résidents",
          "body": "Une carte de résidence européenne, un permis de conduire ou une carte professionnelle ne donne pas les droits réservés aux cartes nationales admises. Une famille composée de plusieurs nationalités doit vérifier ses documents individuellement ; un enfant possédant une autre nationalité ne bénéficie pas automatiquement du régime des parents."
        },
        {
          "id": "visa-detail-5",
          "title": "Privilégier une carte valide et un trajet compatible",
          "body": "La reconnaissance de documents expirés dans certains cas est une exception, pas un principe général. Préférez une carte valide et un vol direct lorsque le régime du pays de transit est incertain. Pour l’Ukraine, la règle ministérielle mentionne spécifiquement la carte biométrique valide lors d’un départ direct d’Ukraine."
        },
        {
          "id": "visa-detail-6",
          "title": "Préparer un séjour prolongé",
          "body": "Pour une visite de longue durée, le titre de séjour doit être envisagé avant la fin de la durée autorisée. Emportez votre passeport si des démarches d’installation, de travail, de banque ou de propriété sont prévues. La possibilité d’entrer avec une carte ne remplace pas les justificatifs exigés par ces procédures."
        }
      ],
      "faqs": [
        {
          "question": "Combien de nationalités figurent sur la liste ?",
          "answer": "21, selon la liste officielle du ministère turc consultée le 17 novembre 2026."
        },
        {
          "question": "Les Russes peuvent-ils entrer avec leur carte interne ?",
          "answer": "Non, la Russie ne figure pas dans la liste des cartes admises ; le passeport international est la voie habituelle."
        },
        {
          "question": "Une carte d’identité garantit-elle 90 jours ?",
          "answer": "Non, la durée dépend du régime applicable à la nationalité et des jours déjà utilisés."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Régime des visas par nationalité — ministère turc des Affaires étrangères"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Liste officielle des 21 nationalités admises avec une carte d’identité"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Conditions générales des visas turcs"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Demande officielle de titre de séjour"
        }
      ]
    },
    "en": {
      "title": "Countries entering Turkey with national ID: official 2026 list",
      "metaDescription": "The official 21-country and territory list for national ID entry to Turkey, stay duration, document conditions and exceptions.",
      "shortAnswer": "The Turkish Foreign Ministry lists 21 nationalities and territories eligible to present recognised national identity cards. The table reflects the list consulted on 17 November 2026. Applicable stay limits and document conditions still apply.",
      "bosphorasHelp": "Bosphoras can coordinate a private or business trip around each traveller's nationality and documents.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Official national ID entry list",
          "body": "The table identifies the nationalities and territories listed by Turkey. Permitted duration is separate from document admission. Special itinerary conditions, notably Ukraine's, are highlighted.",
          "table": {
            "headers": [
              "Nationality or territory",
              "Document and duration"
            ],
            "rows": [
              [
                "Germany",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Belgium",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "France",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Georgia",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Netherlands",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Spain",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Switzerland",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Italy",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Northern Cyprus (as listed by Türkiye)",
                "Special regime; official entry does not specify a 90-day limit"
              ],
              [
                "Liechtenstein",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Luxembourg",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Malta",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Portugal",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Ukraine",
                "Valid biometric ID for direct travel from Ukraine, per ministry"
              ],
              [
                "Greece",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Poland",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Bulgaria",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Hungary",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Moldova",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Azerbaijan",
                "National ID accepted; short stay up to 90 days under agreement"
              ],
              [
                "Romania",
                "National ID accepted; short stay up to 90 days under agreement"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "European citizenship is not a single external travel rule",
          "body": "French, German, Belgian and Romanian citizens appear in the list. Other European citizens may be visa-exempt with passports without having national ID entry rights. Your precise nationality matters outside the EU."
        },
        {
          "id": "visa-detail-3",
          "title": "Permitted duration for eligible nationalities",
          "body": "For listed nationalities with 90-day tourist permission, the total stay remains subject to the relevant agreement and general ceiling. An ID is not a permanent residence permit. Northern Cyprus follows a special regime; the official entry does not set the same tourist duration."
        },
        {
          "id": "visa-detail-4",
          "title": "Non-qualifying documents and foreign residents",
          "body": "An EU residence card, driving licence or professional badge does not confer the rights associated with national citizen identity cards. Mixed-nationality households should assess each document independently; a child's different nationality may have different rules."
        },
        {
          "id": "visa-detail-5",
          "title": "Use valid documents and compatible itineraries",
          "body": "Acceptance of some expired documents is an exception, not a general right. Prefer a valid ID and a direct flight when transit rules are uncertain. Ukraine's official entry specifically mentions a valid biometric ID for direct travel from Ukraine."
        },
        {
          "id": "visa-detail-6",
          "title": "Longer-term residence planning",
          "body": "For a stay exceeding short-visit limits, assess residence permission before expiry. Carry a passport if planning relocation, work, banking or property procedures. The right to enter on national ID does not replace supporting documents for those applications."
        }
      ],
      "faqs": [
        {
          "question": "How many nationalities are listed?",
          "answer": "21 under the Turkish ministry list consulted on 17 November 2026."
        },
        {
          "question": "Can Russians enter with an internal ID?",
          "answer": "Russia is not on the list; the international passport is the usual document."
        },
        {
          "question": "Does an ID guarantee 90 days?",
          "answer": "No. The nationality's regime and previously used days determine the available period."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Visa regime by nationality — Turkish Foreign Ministry"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Official list of 21 nationalities eligible for national ID entry"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "General Turkish visa rules"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official residence permit application"
        }
      ]
    },
    "ru": {
      "title": "Страны для въезда в Турцию по удостоверению личности: список 2026",
      "metaDescription": "21 гражданство и территория из официального перечня, условия документов, сроки пребывания и исключения.",
      "shortAnswer": "МИД Турции публикует перечень из 21 гражданства и территории с правом въезда по признанному национальному удостоверению личности. Таблица составлена по списку, просмотренному 17 ноября 2026 года. Ограничения пребывания и требования к документам сохраняются.",
      "bosphorasHelp": "Bosphoras может организовать частную или деловую поездку с учётом гражданства и документов всех участников.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Официальный перечень удостоверений",
          "body": "В таблице приведены гражданства и территории из турецкого списка. Разрешённый срок пребывания отличается от признания самого документа. Особые условия маршрута, в частности для Украины, выделены.",
          "table": {
            "headers": [
              "Гражданство или территория",
              "Документ и срок"
            ],
            "rows": [
              [
                "Германия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Бельгия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Франция",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Грузия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Нидерланды",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Испания",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Швейцария",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Италия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Северный Кипр (по перечню Турции)",
                "Особый режим; в официальной записи нет ограничения 90 дней"
              ],
              [
                "Лихтенштейн",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Люксембург",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Мальта",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Португалия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Украина",
                "Действующая биометрическая карта при прямой поездке из Украины согласно МИД"
              ],
              [
                "Греция",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Польша",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Болгария",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Венгрия",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Молдова",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Азербайджан",
                "Национальное удостоверение; до 90 дней по соглашению"
              ],
              [
                "Румыния",
                "Национальное удостоверение; до 90 дней по соглашению"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Европейское гражданство и различия правил",
          "body": "В перечень входят Франция, Германия, Бельгия и Румыния. Граждане других европейских стран могут пользоваться безвизовым въездом по паспорту, но это не обязательно даёт право въезда по карте. При поездке за пределы ЕС решающее значение имеет конкретное гражданство."
        },
        {
          "id": "visa-detail-3",
          "title": "Допустимое пребывание",
          "body": "Для граждан стран с туристическим сроком 90 дней действуют ограничения соответствующего соглашения и общий предел. Карта не даёт постоянного проживания. Для Северного Кипра действует специальный режим; официальная запись не устанавливает такой же туристический срок."
        },
        {
          "id": "visa-detail-4",
          "title": "Другие карты и иностранные резиденты",
          "body": "Европейский ВНЖ, водительские права и служебные карты не дают прав национального удостоверения гражданина. В семье с разными гражданствами документы оцениваются отдельно. Ребёнку может требоваться иной порядок, чем родителям."
        },
        {
          "id": "visa-detail-5",
          "title": "Действительные документы и подходящий маршрут",
          "body": "Признание некоторых просроченных документов является исключением. Предпочтительна действующая карта и прямой рейс, если правила транзита неизвестны. В записи по Украине прямо указана действующая биометрическая карта для прямой поездки из Украины."
        },
        {
          "id": "visa-detail-6",
          "title": "Подготовка длительного проживания",
          "body": "Если планируется более долгий срок, определите основание ВНЖ до окончания разрешённого пребывания. Для переезда, работы, банковских операций и покупки недвижимости возьмите паспорт. Въезд по карте не заменяет документы для этих процедур."
        }
      ],
      "faqs": [
        {
          "question": "Сколько гражданств в списке?",
          "answer": "21 по перечню МИД Турции, просмотренному 17 ноября 2026 года."
        },
        {
          "question": "Можно ли россиянам въехать по внутреннему удостоверению?",
          "answer": "Россия не входит в список; обычно используется заграничный паспорт."
        },
        {
          "question": "Гарантирует ли карта 90 дней?",
          "answer": "Нет, срок зависит от гражданства и использованных дней."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Визовые правила по гражданству — МИД Турции"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "Официальный список 21 гражданства для въезда по удостоверению"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "Общие визовые правила Турции"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальная подача на ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "الدول التي تدخل تركيا ببطاقة الهوية: القائمة الرسمية 2026",
      "metaDescription": "قائمة 21 جنسية وإقليماً يسمح لها باستخدام بطاقة الهوية الوطنية في تركيا مع مدد البقاء والشروط والاستثناءات.",
      "shortAnswer": "تنشر الخارجية التركية قائمة تضم 21 جنسية وإقليماً يحق لها تقديم بطاقة هوية وطنية معترف بها. يستند الجدول إلى القائمة التي تمت مراجعتها في 17 نوفمبر 2026. وتظل شروط الوثائق ومدد البقاء سارية.",
      "bosphorasHelp": "تنسق Bosphoras الرحلات الخاصة والمهنية بحسب جنسية ووثائق كل مشارك.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "القائمة الرسمية لبطاقات الهوية",
          "body": "يتضمن الجدول الجنسيات والأقاليم المدرجة في القائمة التركية. وتختلف مدة البقاء المسموحة عن قبول الوثيقة. ونوضح الشروط الخاصة بالمسار، ولا سيما أوكرانيا.",
          "table": {
            "headers": [
              "الجنسية أو الإقليم",
              "الوثيقة والمدة"
            ],
            "rows": [
              [
                "ألمانيا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "بلجيكا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "فرنسا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "جورجيا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "هولندا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "إسبانيا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "سويسرا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "إيطاليا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "شمال قبرص (وفق القائمة التركية)",
                "نظام خاص؛ لا يذكر المدخل الرسمي حد 90 يوماً"
              ],
              [
                "ليختنشتاين",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "لوكسمبورغ",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "مالطا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "البرتغال",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "أوكرانيا",
                "بطاقة بيومترية سارية للرحلات المباشرة من أوكرانيا وفق الوزارة"
              ],
              [
                "اليونان",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "بولندا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "بلغاريا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "المجر",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "مولدوفا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "أذربيجان",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ],
              [
                "رومانيا",
                "بطاقة الهوية مقبولة؛ حتى 90 يوماً وفق الاتفاق"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "اختلاف القواعد للمواطنين الأوروبيين",
          "body": "تظهر فرنسا وألمانيا وبلجيكا ورومانيا في القائمة. وقد يعفى مواطنون أوروبيون آخرون من التأشيرة بجوازاتهم دون أن تقبل بطاقاتهم الوطنية للدخول. الجنسية المحددة هي العامل الحاسم خارج الاتحاد الأوروبي."
        },
        {
          "id": "visa-detail-3",
          "title": "مدد البقاء للجنسيات المؤهلة",
          "body": "للجنسيات ذات مدة السياحة 90 يوماً تظل القيود الخاصة بالاتفاق والسقف العام مطبقة. ولا تمنح البطاقة إقامة دائمة. ويخضع شمال قبرص لنظام خاص لا تذكر القاعدة الرسمية فيه مدة السياحة نفسها."
        },
        {
          "id": "visa-detail-4",
          "title": "البطاقات غير المؤهلة والمقيمون الأجانب",
          "body": "لا تمنح بطاقة إقامة أوروبية أو رخصة قيادة أو بطاقة مهنية حقوق بطاقة المواطنة الوطنية. وعلى الأسرة متعددة الجنسيات دراسة كل وثيقة على حدة، فقد يحتاج الطفل إلى إجراءات تختلف عن الوالدين."
        },
        {
          "id": "visa-detail-5",
          "title": "وثيقة سارية ومسار ملائم",
          "body": "قبول بعض الوثائق المنتهية استثناء وليس قاعدة عامة. اختر بطاقة سارية ورحلة مباشرة حين تكون قواعد العبور غير واضحة. وتذكر القاعدة الخاصة بأوكرانيا بطاقة بيومترية سارية للرحلة المباشرة من أوكرانيا."
        },
        {
          "id": "visa-detail-6",
          "title": "التخطيط للإقامة الأطول",
          "body": "لدخول يتجاوز سقف الزيارات القصيرة، حدد أساس الإقامة قبل انتهاء المدة. احمل الجواز إذا كنت تنوي الانتقال أو العمل أو فتح حساب أو شراء عقار. لا يغني دخول الهوية عن وثائق تلك الإجراءات."
        }
      ],
      "faqs": [
        {
          "question": "كم جنسية في القائمة؟",
          "answer": "21 وفق قائمة الخارجية التركية التي تمت مراجعتها في 17 نوفمبر 2026."
        },
        {
          "question": "هل يدخل الروسي ببطاقته الداخلية؟",
          "answer": "روسيا ليست ضمن القائمة؛ يستخدم عادةً الجواز الدولي."
        },
        {
          "question": "هل تضمن البطاقة 90 يوماً؟",
          "answer": "لا، المدة تعتمد على نظام الجنسية والأيام المستخدمة سابقاً."
        }
      ],
      "sources": [
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "نظام التأشيرات حسب الجنسية — وزارة الخارجية التركية"
        },
        {
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-T%C3%BCrkiye-with-their-national-id_s.en.mfa",
          "label": "القائمة الرسمية لـ21 جنسية يسمح لها بالدخول ببطاقة الهوية"
        },
        {
          "href": "https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa",
          "label": "القواعد العامة للتأشيرات التركية"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة طلب تصريح الإقامة الرسمية"
        }
      ]
    }
  },
  "turkey-evisa-foreigners": {
    "fr": {
      "title": "e-Visa Turquie 2026 : durée, prix et conditions pour les étrangers",
      "metaDescription": "Découvrez les durées de l’e-Visa turc, les entrées uniques ou multiples, les frais officiels, les justificatifs et les démarches selon votre nationalité.",
      "shortAnswer": "L’e-Visa est un visa turc dématérialisé pour les visites touristiques et commerciales. Il n’est nécessaire que si votre document de voyage est soumis à visa et permet cette voie. Il ne constitue ni un titre de séjour ni un permis de travail.",
      "bosphorasHelp": "Parlons de votre voyage en Turquie. Bosphoras coordonne les transferts, séjours et rendez-vous selon les besoins de votre projet.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Qui peut obtenir un e-Visa ?",
          "body": "Les passeports français, chinois et kazakhs ordinaires relèvent généralement d’une dispense pour un séjour de 90 jours au maximum selon leur régime. En revanche, les passeports indiens et pakistanais nécessitent un visa ; la procédure électronique est accessible sous conditions. Des pays comme le Mexique ou le Vietnam disposent d’un parcours électronique à entrée unique. Les règles détaillées par nationalité figurent dans le tableau.",
          "table": {
            "headers": [
              "Nationalité / document",
              "Régime",
              "Durée / entrées",
              "Conditions"
            ],
            "rows": [
              [
                "Inde",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Pakistan",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Bangladesh",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Népal",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Algérie",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 15 ou plus de 50 ans ; e-Visa 30 jours, 1 entrée",
                "e-Visa : 15–18 ou 35–50 ans et justificatif admissible ; autres cas : consulat"
              ],
              [
                "Irak",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 15 ou plus de 50 ans ; e-Visa 30 jours, 1 entrée",
                "15–50 ans : justificatif admissible et conditions du portail"
              ],
              [
                "Libye",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 16 ou plus de 45 ans ; e-Visa 30 jours, 1 entrée",
                "16–45 ans : justificatif admissible et conditions du portail"
              ],
              [
                "Égypte",
                "Visa obligatoire",
                "30 jours, 1 entrée pour l’e-Visa des 15–45 ans",
                "Moins de 15 ou plus de 45 ans : e-Visa sans condition supplémentaire ; 15–45 : justificatif admissible et compagnie agréée"
              ],
              [
                "Mexique",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Vietnam",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Afrique du Sud",
                "e-Visa possible",
                "30 jours, entrées multiples",
                "Conditions du portail officiel"
              ],
              [
                "Maldives",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "France",
                "Dispense de visa",
                "90 jours sur 180",
                "Pas de frais de visa"
              ],
              [
                "Kazakhstan",
                "Dispense de visa",
                "90 jours sur 180",
                "Pas de frais de visa"
              ],
              [
                "Russie",
                "Dispense de visa",
                "60 jours par séjour",
                "Plafond général de 90/180"
              ],
              [
                "Indonésie",
                "Dispense de visa",
                "30 jours par entrée",
                "90/180 au total"
              ],
              [
                "Chine",
                "Dispense de visa",
                "90 jours sur 180",
                "Pas de frais de visa"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Combien de jours peut-on rester ?",
          "body": "Un e-Visa de 30 jours à entrée unique permet une seule entrée et une présence maximale de 30 jours, dans sa période de validité. Les Maldives et la Jamaïque disposent d’un régime électronique à entrées multiples de trois mois selon le ministère ; la durée de présence exacte doit être lue sur l’autorisation. Les ressortissants sud-africains peuvent obtenir un e-Visa à entrées multiples pour 30 jours de séjour. La durée cumulée n’est jamais automatiquement renouvelée à chaque franchissement."
        },
        {
          "id": "visa-detail-3",
          "title": "Prix de l’e-Visa et délais",
          "body": "Le montant officiel varie en fonction du pays et du document. Il apparaît lors de la demande, avant le règlement en dollars américains. Un voyageur dispensé n’a aucun frais de visa à payer. Les éventuels honoraires d’un prestataire privé ne sont pas des droits gouvernementaux. La démarche peut être effectuée rapidement en ligne, mais il est prudent de la commencer au moins deux jours avant le voyage."
        },
        {
          "id": "visa-detail-4",
          "title": "Quels justificatifs sont nécessaires ?",
          "body": "Préparez votre passeport, vos dates et une adresse électronique accessible. Pour les pays soumis à conditions, un visa ou titre de séjour admis en cours de validité à la date d’entrée peut être indispensable. Les e-Visas étrangers ne sont pas acceptés comme justificatifs. Selon la nationalité, des exigences supplémentaires peuvent concerner la compagnie aérienne, l’hébergement ou les ressources."
        },
        {
          "id": "visa-detail-5",
          "title": "Exemple de voyage : deux semaines à Istanbul",
          "body": "Un titulaire d’un passeport indien et d’un titre de séjour français valide peut demander un e-Visa conditionnel de 30 jours, si les autres critères sont réunis. Il prévoit quatorze jours à Istanbul, garde son visa et son justificatif accessibles et quitte le pays avant la limite. Si le même voyageur souhaite revenir après son départ avec un visa à entrée unique déjà utilisé, il doit disposer d’un nouveau droit d’entrée."
        },
        {
          "id": "visa-detail-6",
          "title": "Au-delà d’une visite touristique",
          "body": "L’e-Visa ne permet pas de prendre un poste rémunéré en Turquie. Un projet d’études, d’emploi ou de résidence de longue durée requiert un autre statut. Avant de réserver un séjour de plusieurs mois, mettez en cohérence vos dates, votre motif et votre situation de résidence. Bosphoras peut organiser les étapes pratiques de ce projet."
        }
      ],
      "faqs": [
        {
          "question": "L’e-Visa est-il obligatoire pour un Français ?",
          "answer": "Non, pour un court séjour couvert par la dispense."
        },
        {
          "question": "Puis-je entrer plusieurs fois avec un e-Visa ?",
          "answer": "Seulement si le visa délivré autorise plusieurs entrées, dans sa durée et sa validité."
        },
        {
          "question": "Le prix est-il identique pour tous ?",
          "answer": "Non, il dépend du document sélectionné sur le portail officiel."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Portail officiel : nationalités éligibles"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère turc : règles par passeport"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Procédure officielle de demande et paiement"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Documents et validité"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Justificatifs de visa et de résidence"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Nationalités sans visa à l’arrivée"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Demande de visa consulaire"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel de résidence"
        }
      ]
    },
    "en": {
      "title": "Turkey e-Visa 2026: duration, fees and eligibility",
      "metaDescription": "Learn which passports qualify for a Turkish e-Visa, permitted stays, single or multiple entries, fees and supporting documents.",
      "shortAnswer": "The Turkish e-Visa is an electronic authorisation for tourism and commercial visits. It is relevant only when your travel document requires a visa and is eligible for this route. It is neither a work permit nor a residence permit.",
      "bosphorasHelp": "Discuss your Turkey visit with Bosphoras to coordinate transfers, accommodation and meetings around your plans.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Who qualifies?",
          "body": "Ordinary French, Chinese and Kazakh passports generally qualify for visa-free visits of up to 90 days under applicable rules. Indian and Pakistani passports require visas but can qualify electronically with supporting documents. Mexican and Vietnamese ordinary passports have a single-entry electronic route. The table explains nationality-specific distinctions.",
          "table": {
            "headers": [
              "Nationality / document",
              "Route",
              "Stay / entries",
              "Conditions"
            ],
            "rows": [
              [
                "India",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Pakistan",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Bangladesh",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Nepal",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Algeria",
                "Age-based exemption or visa",
                "90/180 if under 15 or over 50; e-Visa 30 days, single entry",
                "Conditional e-Visa ages 15–18 or 35–50 with eligible supporting document; otherwise consulate"
              ],
              [
                "Iraq",
                "Age-based exemption or visa",
                "90/180 if under 15 or over 50; e-Visa 30 days, single entry",
                "Ages 15–50: eligible supporting document plus portal conditions"
              ],
              [
                "Libya",
                "Age-based exemption or visa",
                "90/180 if under 16 or over 45; e-Visa 30 days, single entry",
                "Ages 16–45: eligible supporting document and portal conditions"
              ],
              [
                "Egypt",
                "Visa required",
                "30 days, single entry for ages 15–45 via e-Visa",
                "Under 15 or over 45: no extra e-Visa condition; ages 15–45: eligible supporting document and approved carrier"
              ],
              [
                "Mexico",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "Vietnam",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "South Africa",
                "e-Visa available",
                "30 days, multiple entry",
                "Official portal conditions"
              ],
              [
                "Maldives",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "France",
                "Visa-free",
                "90 days in 180",
                "No visa fee"
              ],
              [
                "Kazakhstan",
                "Visa-free",
                "90 days in 180",
                "No visa fee"
              ],
              [
                "Russia",
                "Visa-free",
                "60 days per visit",
                "General 90/180 ceiling"
              ],
              [
                "Indonesia",
                "Visa-free",
                "30 days per entry",
                "90/180 total"
              ],
              [
                "China",
                "Visa-free",
                "90 days in 180",
                "No visa fee"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "How long can you stay?",
          "body": "A 30-day single-entry e-Visa permits one entry and at most 30 days of presence within its validity. The ministry describes three-month multiple-entry visas for Maldives and Jamaica passport holders; read the actual stay allowance on the visa. South African nationals have a multiple-entry e-Visa allowing 30 days of stay. Border crossings do not automatically renew the total allowance."
        },
        {
          "id": "visa-detail-3",
          "title": "Government fees and application timing",
          "body": "The official fee depends on nationality and travel document and appears before payment in US dollars. Visa-exempt visitors owe no visa application fee. Private assistance charges are separate from government fees. Online applications can be quick, but starting at least two days before travel is prudent."
        },
        {
          "id": "visa-detail-4",
          "title": "Supporting documents",
          "body": "Prepare your passport, travel dates and an accessible email address. Conditional applicants may need an eligible visa or residence permit valid on arrival. Foreign electronic visas are not accepted as supporting documents. Nationality-specific requirements may also involve the airline, accommodation or financial means."
        },
        {
          "id": "visa-detail-5",
          "title": "Example: two weeks in Istanbul",
          "body": "An Indian passport holder with a valid French residence permit may obtain a conditional 30-day e-Visa if all remaining criteria are met. For a fourteen-day visit, carry both the visa and supporting permit and depart before expiry. Returning after using a single-entry visa requires new entry permission."
        },
        {
          "id": "visa-detail-6",
          "title": "Beyond a short visit",
          "body": "An e-Visa does not authorise employment in Turkey. Study, employment and long-term relocation require appropriate separate status. Align your purpose, dates and residence plan before booking several months of accommodation. Bosphoras can coordinate practical arrangements."
        }
      ],
      "faqs": [
        {
          "question": "Do French citizens need an e-Visa?",
          "answer": "No, for a qualifying visa-exempt visit."
        },
        {
          "question": "Can I enter several times?",
          "answer": "Only if the issued visa permits multiple entries and its other limits are respected."
        },
        {
          "question": "Are fees universal?",
          "answer": "No; the official application calculates them from your document."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Official eligible-country list"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Foreign Ministry: passport-specific rules"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Official application and payment procedure"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Required documents and validity"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Supporting visas and residence permits"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Nationalities not eligible for visa on arrival"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Consular visa application"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official residence portal"
        }
      ]
    },
    "ru": {
      "title": "Электронная виза в Турцию 2026: сроки, стоимость и условия",
      "metaDescription": "Узнайте, кому доступна турецкая e-Visa, сколько дней можно находиться в стране, какие документы и сборы предусмотрены.",
      "shortAnswer": "Турецкая электронная виза предназначена для туризма и коммерческих поездок. Она нужна, если для вашего документа требуется виза и доступна электронная процедура. Она не заменяет ВНЖ или разрешение на работу.",
      "bosphorasHelp": "Bosphoras может организовать трансферы, проживание и встречи с учётом вашего проекта.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Кому доступна электронная виза?",
          "body": "Обычные паспорта Франции, Китая и Казахстана, как правило, позволяют безвизовые поездки до 90 дней по применимому режиму. Гражданам Индии и Пакистана нужна виза, электронный вариант доступен при выполнении условий. Для Мексики и Вьетнама предусмотрена однократная электронная виза. В таблице приведены различия по гражданствам.",
          "table": {
            "headers": [
              "Гражданство / документ",
              "Режим",
              "Срок / въезды",
              "Условия"
            ],
            "rows": [
              [
                "Индия",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Пакистан",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Бангладеш",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Непал",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Алжир",
                "Освобождение по возрасту или виза",
                "90/180 до 15 или старше 50; электронная виза 30 дней, один въезд",
                "Электронная виза для 15–18 или 35–50 лет с подходящим документом; иначе консульство"
              ],
              [
                "Ирак",
                "Освобождение по возрасту или виза",
                "90/180 до 15 или старше 50; электронная виза 30 дней, один въезд",
                "15–50 лет: подходящий документ и условия портала"
              ],
              [
                "Ливия",
                "Освобождение по возрасту или виза",
                "90/180 до 16 или старше 45; электронная виза 30 дней, один въезд",
                "16–45 лет: подходящий документ и условия портала"
              ],
              [
                "Египет",
                "Виза обязательна",
                "30 дней, один въезд для электронной визы в 15–45 лет",
                "До 15 или старше 45: без дополнительных условий; 15–45: подходящий документ и разрешённая авиакомпания"
              ],
              [
                "Мексика",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Вьетнам",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "ЮАР",
                "Электронная виза доступна",
                "30 дней, многократная",
                "Условия официального портала"
              ],
              [
                "Мальдивы",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Франция",
                "Без визы",
                "90 дней из 180",
                "Без визового сбора"
              ],
              [
                "Казахстан",
                "Без визы",
                "90 дней из 180",
                "Без визового сбора"
              ],
              [
                "Россия",
                "Без визы",
                "60 дней за визит",
                "Общий предел 90/180"
              ],
              [
                "Индонезия",
                "Без визы",
                "30 дней за въезд",
                "Всего 90/180"
              ],
              [
                "Китай",
                "Без визы",
                "90 дней из 180",
                "Без визового сбора"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Разрешённый срок пребывания",
          "body": "Однократная электронная виза на 30 дней разрешает один въезд и пребывание до 30 дней в пределах срока действия. Для Мальдив и Ямайки МИД указывает многократный трёхмесячный режим; допустимый срок пребывания указан в самой визе. Для граждан ЮАР предусмотрена многократная электронная виза с пребыванием до 30 дней. Пересечение границы не обновляет общий лимит автоматически."
        },
        {
          "id": "visa-detail-3",
          "title": "Стоимость и сроки подачи",
          "body": "Государственный сбор зависит от гражданства и документа; сумма показывается перед оплатой в долларах США. При безвизовом режиме сбор за визу не требуется. Оплата частного сопровождения не является государственным сбором. Онлайн-заявка может оформляться быстро, но лучше подать её минимум за два дня до поездки."
        },
        {
          "id": "visa-detail-4",
          "title": "Какие документы подготовить",
          "body": "Понадобятся паспорт, даты и доступная электронная почта. При условном режиме требуется подходящая виза или ВНЖ, действительные на дату въезда. Электронные визы других государств не принимаются как подтверждение. В зависимости от гражданства могут учитываться перевозчик, проживание и средства."
        },
        {
          "id": "visa-detail-5",
          "title": "Пример: две недели в Стамбуле",
          "body": "Гражданин Индии с действующим французским ВНЖ может оформить условную электронную визу на 30 дней при соблюдении остальных требований. На двухнедельную поездку он берёт визу и подтверждающий документ и выезжает до окончания срока. Для повторного въезда после использования однократной визы необходимо новое основание."
        },
        {
          "id": "visa-detail-6",
          "title": "Если поездка становится переездом",
          "body": "Электронная виза не разрешает трудоустройство. Для учёбы, работы или длительного проживания предусмотрены другие процедуры. Согласуйте цель, даты и основание проживания до бронирования на несколько месяцев. Bosphoras может организовать практические этапы."
        }
      ],
      "faqs": [
        {
          "question": "Нужна ли электронная виза французам?",
          "answer": "Нет при соответствующей безвизовой поездке."
        },
        {
          "question": "Можно ли въезжать неоднократно?",
          "answer": "Только по многократной визе в пределах её условий."
        },
        {
          "question": "Одинаков ли сбор для всех?",
          "answer": "Нет, сумма зависит от документа."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Официальный список гражданств"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции: правила по паспорту"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Официальный порядок подачи и оплаты"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Документы и сроки действия"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Подтверждающие визы и ВНЖ"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Гражданства без визы по прибытии"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Консульская подача"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "التأشيرة الإلكترونية لتركيا 2026: المدة والرسوم والشروط",
      "metaDescription": "تعرف على الجنسيات المؤهلة للتأشيرة الإلكترونية ومدة البقاء والدخول الواحد والمتعدد والرسوم والوثائق الداعمة.",
      "shortAnswer": "التأشيرة الإلكترونية التركية مخصصة للسياحة والزيارات التجارية. وتهم من يحتاج إلى تأشيرة ويؤهله جوازه للمسار الإلكتروني. وهي ليست تصريح إقامة أو عمل.",
      "bosphorasHelp": "تنسق Bosphoras النقل والسكن والاجتماعات وفق احتياجات مشروعك.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "من المؤهل للتأشيرة الإلكترونية؟",
          "body": "تتيح الجوازات العادية الفرنسية والصينية والكازاخستانية عموماً زيارات معفاة حتى 90 يوماً وفق النظام المطبق. ويحتاج الهندي والباكستاني إلى تأشيرة مع إمكانية الطلب الإلكتروني بشروط. وللمكسيك وفيتنام مسار إلكتروني لدخول واحد. يبين الجدول الاختلافات حسب الجنسية.",
          "table": {
            "headers": [
              "الجنسية / الوثيقة",
              "النظام",
              "المدة / الدخول",
              "الشروط"
            ],
            "rows": [
              [
                "الهند",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "باكستان",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "بنغلاديش",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "نيبال",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "الجزائر",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 15 أو فوق 50؛ الإلكترونية 30 يوماً لدخول واحد",
                "الإلكترونية للأعمار 15–18 أو 35–50 مع وثيقة مؤهلة؛ وإلا القنصلية"
              ],
              [
                "العراق",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 15 أو فوق 50؛ الإلكترونية 30 يوماً لدخول واحد",
                "15–50 عاماً: وثيقة مؤهلة وشروط المنصة"
              ],
              [
                "ليبيا",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 16 أو فوق 45؛ الإلكترونية 30 يوماً لدخول واحد",
                "16–45 عاماً: وثيقة مؤهلة وشروط المنصة"
              ],
              [
                "مصر",
                "تأشيرة إلزامية",
                "30 يوماً، دخول واحد للإلكترونية بين 15 و45",
                "دون 15 أو فوق 45: دون شرط إضافي؛ 15–45: وثيقة مؤهلة وناقل معتمد"
              ],
              [
                "المكسيك",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "فيتنام",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "جنوب إفريقيا",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول متعدد",
                "شروط المنصة الرسمية"
              ],
              [
                "المالديف",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "فرنسا",
                "إعفاء",
                "90 يوماً خلال 180",
                "دون رسوم تأشيرة"
              ],
              [
                "كازاخستان",
                "إعفاء",
                "90 يوماً خلال 180",
                "دون رسوم تأشيرة"
              ],
              [
                "روسيا",
                "إعفاء",
                "60 يوماً لكل زيارة",
                "السقف العام 90/180"
              ],
              [
                "إندونيسيا",
                "إعفاء",
                "30 يوماً لكل دخول",
                "إجمالي 90/180"
              ],
              [
                "الصين",
                "إعفاء",
                "90 يوماً خلال 180",
                "دون رسوم تأشيرة"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "كم يوماً يمكن البقاء؟",
          "body": "تتيح التأشيرة الإلكترونية لمدة 30 يوماً لدخول واحد زيارة واحدة ضمن مدة صلاحيتها. وتذكر الوزارة تأشيرات متعددة الدخول لثلاثة أشهر للمالديف وجامايكا؛ وتحدد الوثيقة الصادرة مدة البقاء الفعلية. ولجنوب إفريقيا تأشيرة متعددة الدخول تسمح بالبقاء 30 يوماً. لا يجدد عبور الحدود الرصيد تلقائياً."
        },
        {
          "id": "visa-detail-3",
          "title": "الرسوم وموعد الطلب",
          "body": "تختلف الرسوم الحكومية بحسب الجنسية والوثيقة وتظهر قبل الدفع بالدولار الأمريكي. ولا يدفع المعفى رسوم تأشيرة. وتختلف أتعاب المساعدة الخاصة عن الرسوم الحكومية. قد تكون الإجراءات الإلكترونية سريعة، لكن يفضل البدء قبل السفر بيومين على الأقل."
        },
        {
          "id": "visa-detail-4",
          "title": "الوثائق المطلوبة",
          "body": "جهز الجواز والتواريخ وبريداً إلكترونياً متاحاً. وقد يحتاج المتقدم المشروط إلى تأشيرة أو إقامة مؤهلة سارية عند الوصول. لا تقبل التأشيرات الإلكترونية الأجنبية وثائق داعمة. وتختلف الشروط المتعلقة بالناقل والسكن والموارد حسب الجنسية."
        },
        {
          "id": "visa-detail-5",
          "title": "مثال: أسبوعان في إسطنبول",
          "body": "قد يحصل مواطن هندي يحمل إقامة فرنسية سارية على إلكترونية مشروطة لمدة 30 يوماً عند استيفاء بقية الشروط. يحمل التأشيرة والإقامة طوال زيارة الأسبوعين ويغادر قبل انتهاء المدة. وعند استخدام تأشيرة دخول واحد يحتاج إلى حق دخول جديد إذا أراد العودة."
        },
        {
          "id": "visa-detail-6",
          "title": "من الزيارة إلى الانتقال",
          "body": "لا تسمح الإلكترونية بالتوظيف داخل تركيا. وللدراسة والعمل والإقامة الطويلة أوضاع قانونية منفصلة. نسق الغرض والتواريخ والإقامة قبل حجز عدة أشهر. تستطيع Bosphoras تنظيم الخطوات العملية."
        }
      ],
      "faqs": [
        {
          "question": "هل يحتاج الفرنسي إلى تأشيرة إلكترونية؟",
          "answer": "لا في زيارة مشمولة بالإعفاء."
        },
        {
          "question": "هل يمكن الدخول عدة مرات؟",
          "answer": "فقط إذا كانت التأشيرة متعددة الدخول مع احترام حدودها."
        },
        {
          "question": "هل الرسوم موحدة؟",
          "answer": "لا، تحدد بناء على وثيقة السفر."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "القائمة الرسمية للجنسيات المؤهلة"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية: الشروط حسب الجواز"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "الإجراءات الرسمية للطلب والدفع"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "الوثائق والصلاحية"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "التأشيرات والإقامات الداعمة"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "الجنسيات غير المؤهلة للتأشيرة عند الوصول"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "طلب التأشيرة القنصلية"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        }
      ]
    }
  },
  "apply-turkey-evisa": {
    "fr": {
      "title": "Demande e-Visa Turquie 2026 : formulaire, paiement et réception",
      "metaDescription": "Découvrez comment demander l’e-Visa turc en ligne, payer en dollars, télécharger votre visa et éviter les erreurs de dossier.",
      "shortAnswer": "Pour demander un e-Visa turc, commencez par le portail gouvernemental evisa.gov.tr. La demande comporte la sélection du document de voyage, la saisie des informations, la vérification du courriel puis le paiement. Aucun déplacement au consulat n’est normalement nécessaire pour un demandeur éligible.",
      "bosphorasHelp": "Parlons de votre voyage en Turquie. Bosphoras coordonne les transferts, séjours et rendez-vous selon les besoins de votre projet.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Avant le formulaire : préparer le dossier",
          "body": "Rassemblez le passeport de chaque voyageur, les dates prévues, les justificatifs exigés par la nationalité et une carte bancaire compatible. Si votre nationalité est dispensée de visa, n’engagez pas une demande payante inutile. Pour les enfants, une autorisation individuelle est requise lorsque le visa est obligatoire."
        },
        {
          "id": "visa-detail-2",
          "title": "Les étapes de demande en ligne",
          "body": "Ouvrez la rubrique de nouvelle demande sur le site officiel. Sélectionnez le pays ou territoire émetteur et le type de document. Choisissez la date prévue d’arrivée, puis lisez les conditions et les caractéristiques proposées. Saisissez les informations exactement comme elles apparaissent sur le passeport, y compris les prénoms et le numéro. Vérifiez la date de naissance et les dates de délivrance et d’expiration avant validation."
        },
        {
          "id": "visa-detail-3",
          "title": "Confirmer le courriel et effectuer le paiement",
          "body": "Après réception du message de vérification, validez l’adresse électronique et effectuez le paiement dans les 48 heures. Le portail accepte les cartes Visa, Mastercard ou UnionPay compatibles avec les transactions internationales et 3D Secure. La carte peut appartenir à une autre personne. Le règlement est effectué en dollars américains ; votre banque peut convertir le montant et appliquer ses propres frais."
        },
        {
          "id": "visa-detail-4",
          "title": "Réception du visa et contrôle avant départ",
          "body": "Le lien de téléchargement est envoyé après paiement. Enregistrez le PDF sur votre téléphone et, si possible, imprimez-le. Contrôlez le nom, le numéro du document, les dates de validité, le nombre d’entrées et la durée de présence. Si vous souhaitez arriver avant la date de début, une nouvelle demande est nécessaire. Une modification du visa délivré n’est pas possible."
        },
        {
          "id": "visa-detail-5",
          "title": "Demandes familiales et de groupe",
          "body": "Une demande familiale peut regrouper de deux à dix personnes ; le dispositif de groupe permet de traiter dix à trois cents voyageurs. Cela ne transforme pas les visas individuels en autorisation collective. Vérifiez l’éligibilité de chacun, surtout si les passeports diffèrent. Avant paiement, comparez les données de tous les membres et conservez leurs documents distinctement."
        },
        {
          "id": "visa-detail-6",
          "title": "Erreur de paiement ou de passeport : que faire ?",
          "body": "Si la transaction paraît bloquée ou échouée, contactez l’assistance officielle avant de payer à nouveau. Une faute sur le passeport après émission peut imposer la création d’une nouvelle demande, sans remboursement. Ne communiquez pas vos informations à un intermédiaire non identifié. Pour un séjour de prospection ou une installation, Bosphoras peut également coordonner les rendez-vous et le calendrier du voyage."
        }
      ],
      "faqs": [
        {
          "question": "Combien de temps avant le départ ?",
          "answer": "Le portail recommande de commencer au moins 48 heures avant le voyage."
        },
        {
          "question": "Puis-je payer avec la carte de mon conjoint ?",
          "answer": "Oui, si elle est compatible avec les conditions du paiement."
        },
        {
          "question": "Peut-on corriger un visa émis ?",
          "answer": "Non. Une nouvelle demande peut être nécessaire."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Portail officiel : nationalités éligibles"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère turc : règles par passeport"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Procédure officielle de demande et paiement"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Documents et validité"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Justificatifs de visa et de résidence"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Nationalités sans visa à l’arrivée"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Demande de visa consulaire"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel de résidence"
        }
      ]
    },
    "en": {
      "title": "Apply for a Turkey e-Visa 2026: form, payment and download",
      "metaDescription": "Follow the official Turkish e-Visa process, prepare documents, pay online and download your authorisation without avoidable errors.",
      "shortAnswer": "Start at the Turkish government portal evisa.gov.tr. Eligible applicants select their document, enter their details, confirm email and pay online; a consular visit is not ordinarily necessary.",
      "bosphorasHelp": "Discuss your Turkey visit with Bosphoras to coordinate transfers, accommodation and meetings around your plans.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Prepare the information first",
          "body": "Gather each traveller's passport, dates, nationality-specific supporting documents and a compatible bank card. If exempt from visa requirements, do not pay for an unnecessary visa. Each child requiring a visa needs an individual authorisation."
        },
        {
          "id": "visa-detail-2",
          "title": "Complete the online application",
          "body": "Choose a new application and specify issuing country or territory and travel-document type. Enter your intended arrival date and read eligibility and visa characteristics. Copy your passport names and number precisely. Double-check date of birth and issue and expiry dates before submission."
        },
        {
          "id": "visa-detail-3",
          "title": "Verify email and pay",
          "body": "After receiving the verification message, confirm the email and pay within 48 hours. Visa, Mastercard and UnionPay cards must support international transactions and 3D Secure. The cardholder need not be the traveller. Payment is in USD; your bank may convert the sum and add its own charges."
        },
        {
          "id": "visa-detail-4",
          "title": "Download and check the visa",
          "body": "The download link follows payment. Save the PDF offline and preferably print it. Check name, passport number, validity dates, entry count and stay allowance. Arrival before the validity start date requires a fresh application. An issued visa cannot be amended."
        },
        {
          "id": "visa-detail-5",
          "title": "Family and group applications",
          "body": "Family applications can include two to ten travellers; group applications can include ten to three hundred. Individuals still receive separate authorisations. Review each traveller's eligibility, especially with mixed passports, and retain the individual documents."
        },
        {
          "id": "visa-detail-6",
          "title": "Payment and document errors",
          "body": "If a payment seems unsuccessful or suspended, contact official support before attempting another payment. Passport errors discovered after issuance may require a fresh, non-refundable application. Avoid handing sensitive documents to unverified intermediaries. Bosphoras can coordinate the travel itinerary and meetings for a scouting visit or relocation."
        }
      ],
      "faqs": [
        {
          "question": "When should I apply?",
          "answer": "The portal advises at least 48 hours before travel."
        },
        {
          "question": "Can I pay with another person's card?",
          "answer": "Yes, if it meets payment requirements."
        },
        {
          "question": "Can an issued visa be corrected?",
          "answer": "No; a new application may be required."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Official eligible-country list"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Foreign Ministry: passport-specific rules"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Official application and payment procedure"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Required documents and validity"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Supporting visas and residence permits"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Nationalities not eligible for visa on arrival"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Consular visa application"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official residence portal"
        }
      ]
    },
    "ru": {
      "title": "Как оформить e-Visa в Турцию в 2026 году: анкета и оплата",
      "metaDescription": "Пошаговое оформление турецкой электронной визы: документы, оплата, скачивание и исправление ошибок.",
      "shortAnswer": "Для подачи используйте государственный портал evisa.gov.tr. Подходящие заявители выбирают документ, вносят данные, подтверждают почту и оплачивают сбор онлайн. Обычно посещать консульство не требуется.",
      "bosphorasHelp": "Bosphoras может организовать трансферы, проживание и встречи с учётом вашего проекта.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Подготовка документов",
          "body": "Соберите паспорта всех путешественников, даты, дополнительные документы по гражданству и подходящую банковскую карту. При безвизовом режиме не оплачивайте ненужную визу. Каждому ребёнку, которому требуется виза, оформляется отдельное разрешение."
        },
        {
          "id": "visa-detail-2",
          "title": "Заполнение электронной анкеты",
          "body": "Откройте новую заявку, выберите страну или территорию выдачи и тип документа. Укажите дату предполагаемого въезда и прочитайте условия и характеристики визы. Внесите имена и номер точно по паспорту. Перед отправкой проверьте дату рождения, выдачи и окончания действия."
        },
        {
          "id": "visa-detail-3",
          "title": "Подтверждение почты и оплата",
          "body": "После получения сообщения подтвердите адрес и внесите платёж в течение 48 часов. Карты Visa, Mastercard и UnionPay должны поддерживать международные платежи и 3D Secure. Карта может принадлежать другому лицу. Сумма списывается в долларах США с возможной конвертацией и банковской комиссией."
        },
        {
          "id": "visa-detail-4",
          "title": "Получение и проверка визы",
          "body": "После оплаты приходит ссылка на скачивание. Сохраните PDF для просмотра без интернета и желательно распечатайте. Проверьте имя, паспорт, даты действия, количество въездов и срок пребывания. Для въезда раньше начальной даты нужна новая заявка. Выданная виза не изменяется."
        },
        {
          "id": "visa-detail-5",
          "title": "Семейные и групповые заявки",
          "body": "Семейная заявка объединяет от двух до десяти человек, групповая — от десяти до трёхсот. Каждый получает собственную визу. Проверьте право каждого участника, особенно при разных гражданствах, и сохраните отдельные документы."
        },
        {
          "id": "visa-detail-6",
          "title": "Ошибки оплаты или данных",
          "body": "Если платёж завис или не прошёл, обратитесь в официальную поддержку до повторной оплаты. Ошибка в паспортных данных после выдачи может потребовать новой заявки без возврата средств. Не отправляйте документы непроверенным посредникам. Bosphoras может организовать поездку и встречи для ознакомительного визита или переезда."
        }
      ],
      "faqs": [
        {
          "question": "Когда подавать заявку?",
          "answer": "Рекомендуется не менее чем за 48 часов до поездки."
        },
        {
          "question": "Можно ли оплатить чужой картой?",
          "answer": "Да, если соблюдены требования оплаты."
        },
        {
          "question": "Можно ли изменить готовую визу?",
          "answer": "Нет, может потребоваться новая заявка."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Официальный список гражданств"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции: правила по паспорту"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Официальный порядок подачи и оплаты"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Документы и сроки действия"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Подтверждающие визы и ВНЖ"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Гражданства без визы по прибытии"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Консульская подача"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "طلب التأشيرة الإلكترونية لتركيا 2026: الخطوات والدفع والتنزيل",
      "metaDescription": "خطوات الطلب الرسمي للتأشيرة الإلكترونية التركية وإدخال البيانات والدفع وتنزيل الوثيقة وتجنب الأخطاء.",
      "shortAnswer": "ابدأ من المنصة الحكومية evisa.gov.tr. يختار المؤهل وثيقة السفر ويدخل البيانات ويؤكد البريد الإلكتروني ويدفع عبر الإنترنت دون الحاجة عادة إلى زيارة القنصلية.",
      "bosphorasHelp": "تنسق Bosphoras النقل والسكن والاجتماعات وفق احتياجات مشروعك.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "تجهيز البيانات والوثائق",
          "body": "جهز جواز كل مسافر والتواريخ والوثائق المطلوبة بحسب الجنسية وبطاقة مصرفية مناسبة. إذا كنت معفى فلا تدفع مقابل تأشيرة غير لازمة. ويحتاج كل طفل خاضع للتأشيرة إلى تصريح منفصل."
        },
        {
          "id": "visa-detail-2",
          "title": "ملء الطلب الإلكتروني",
          "body": "اختر طلباً جديداً ودولة أو إقليم إصدار وثيقة السفر ونوعها. حدد تاريخ الوصول واقرأ شروط الأهلية وخصائص التأشيرة. أدخل الأسماء ورقم الجواز كما وردت تماماً. راجع تاريخ الميلاد والإصدار والانتهاء قبل الإرسال."
        },
        {
          "id": "visa-detail-3",
          "title": "تأكيد البريد والدفع",
          "body": "بعد تلقي رسالة التحقق أكد البريد وأكمل الدفع خلال 48 ساعة. يجب أن تدعم بطاقات Visa وMastercard وUnionPay المعاملات الدولية و3D Secure. يمكن أن تكون البطاقة لشخص آخر. يتم الدفع بالدولار الأمريكي وقد يطبق البنك التحويل ورسومه."
        },
        {
          "id": "visa-detail-4",
          "title": "تنزيل التأشيرة ومراجعتها",
          "body": "يصل رابط التنزيل بعد الدفع. احفظ PDF دون اتصال واطبعه إن أمكن. تحقق من الاسم ورقم الجواز وتواريخ الصلاحية وعدد الدخول ومدة البقاء. يتطلب الوصول قبل بداية صلاحيتها طلباً جديداً. لا يمكن تعديل التأشيرة بعد إصدارها."
        },
        {
          "id": "visa-detail-5",
          "title": "الطلبات العائلية والجماعية",
          "body": "يشمل الطلب العائلي شخصين إلى عشرة، والجماعي عشرة إلى ثلاثمائة. ومع ذلك يحصل كل فرد على تأشيرة مستقلة. راجع أهلية كل فرد خصوصاً عند اختلاف الجوازات واحتفظ بالوثائق منفصلة."
        },
        {
          "id": "visa-detail-6",
          "title": "أخطاء الدفع والجواز",
          "body": "إذا تعطل الدفع فتواصل مع الدعم الرسمي قبل تكراره. قد يتطلب خطأ بيانات الجواز بعد الإصدار طلباً جديداً دون استرداد. لا تسلم الوثائق لوسيط غير موثوق. تستطيع Bosphoras تنسيق برنامج السفر والاجتماعات للزيارة الاستطلاعية أو الانتقال."
        }
      ],
      "faqs": [
        {
          "question": "متى أقدم الطلب؟",
          "answer": "يفضل قبل السفر بـ48 ساعة على الأقل."
        },
        {
          "question": "هل يمكن الدفع ببطاقة شخص آخر؟",
          "answer": "نعم إذا استوفت متطلبات الدفع."
        },
        {
          "question": "هل يمكن تعديل التأشيرة الصادرة؟",
          "answer": "لا، قد يلزم طلب جديد."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "القائمة الرسمية للجنسيات المؤهلة"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية: الشروط حسب الجواز"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "الإجراءات الرسمية للطلب والدفع"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "الوثائق والصلاحية"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "التأشيرات والإقامات الداعمة"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "الجنسيات غير المؤهلة للتأشيرة عند الوصول"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "طلب التأشيرة القنصلية"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        }
      ]
    }
  },
  "turkey-evisa-eligible-countries": {
    "fr": {
      "title": "Pays éligibles à l’e-Visa Turquie en 2026 : liste et durée",
      "metaDescription": "Comparez les pays et documents figurant sur le portail e-Visa, les durées, les conditions Schengen et les exceptions d’âge.",
      "shortAnswer": "Le tableau recense les entrées de la liste d’éligibilité du portail turc et précise le régime des passeports ordinaires décrit par le ministère. L’inscription dans la liste ne suffit pas à garantir un visa : certaines catégories sont dispensées ou soumises à des conditions particulières.",
      "bosphorasHelp": "Parlons de votre voyage en Turquie. Bosphoras coordonne les transferts, séjours et rendez-vous selon les besoins de votre projet.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Tableau complet des pays et documents proposés",
          "body": "Les lignes distinguent les passeports ordinaires, les visas conditionnels, les exemptions et les cas où les deux sources officielles ne donnent pas de durée électronique confirmée. Pour ces derniers, la procédure consulaire publiée reste une option et il faut vérifier l’offre réelle avant tout paiement. Le tableau ne confond pas une période de validité de trois mois avec 90 jours de présence.",
          "table": {
            "headers": [
              "Nationalité / document",
              "Régime",
              "Durée / entrées",
              "Conditions"
            ],
            "rows": [
              [
                "Afghanistan",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Afrique du Sud",
                "e-Visa possible",
                "30 jours, entrées multiples",
                "Conditions du portail officiel"
              ],
              [
                "Algérie",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 15 ou plus de 50 ans ; e-Visa 30 jours, 1 entrée",
                "e-Visa : 15–18 ou 35–50 ans et justificatif admissible ; autres cas : consulat"
              ],
              [
                "Antigua-et-Barbuda",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Arménie",
                "e-Visa possible",
                "Durée affichée lors de la demande",
                "Selon le document de voyage"
              ],
              [
                "Bahamas",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Bangladesh",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Barbade",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Bermudes",
                "Dans la liste du portail ; visa requis selon le ministère",
                "Non confirmée",
                "Offre électronique non précisée ; voie consulaire à vérifier"
              ],
              [
                "Bhoutan",
                "Liste e-Visa ; consulat selon le ministère",
                "15 jours par visa consulaire",
                "Durée électronique non confirmée"
              ],
              [
                "Cambodge",
                "Dans la liste du portail ; visa requis selon le ministère",
                "Non confirmée",
                "Offre électronique non précisée ; voie consulaire à vérifier"
              ],
              [
                "Cap-Vert",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour admissible + autres conditions"
              ],
              [
                "Chypre (passeport grec chypriote)",
                "e-Visa ou consulat",
                "Durée non précisée",
                "Visa à la frontière supprimé depuis le 2 janvier 2026"
              ],
              [
                "Croatie",
                "Dispense pour passeport ordinaire",
                "Jusqu’à 90 jours",
                "Pas d’e-Visa nécessaire si dispense applicable"
              ],
              [
                "Dominique",
                "Dans la liste du portail ; visa requis selon le ministère",
                "Non confirmée",
                "Offre électronique non précisée ; voie consulaire à vérifier"
              ],
              [
                "Égypte",
                "Visa obligatoire",
                "30 jours, 1 entrée pour l’e-Visa des 15–45 ans",
                "Moins de 15 ou plus de 45 ans : e-Visa sans condition supplémentaire ; 15–45 : justificatif admissible et compagnie agréée"
              ],
              [
                "Estonie",
                "Dispense pour passeport ordinaire",
                "Jusqu’à 90 jours",
                "Pas d’e-Visa nécessaire si dispense applicable"
              ],
              [
                "Fidji",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Grenade",
                "Dans la liste du portail ; visa requis selon le ministère",
                "Non confirmée",
                "Offre électronique non précisée ; voie consulaire à vérifier"
              ],
              [
                "Guinée équatoriale",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Haïti",
                "Dans la liste du portail ; visa requis selon le ministère",
                "Non confirmée",
                "Offre électronique non précisée ; voie consulaire à vérifier"
              ],
              [
                "Hong Kong (BN(O))",
                "e-Visa possible",
                "Visa de trois mois, entrées multiples",
                "Durée de présence indiquée sur le visa"
              ],
              [
                "Îles Salomon",
                "Liste e-Visa ; consulat selon le ministère",
                "15 jours par visa consulaire",
                "Durée électronique non confirmée"
              ],
              [
                "Inde",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Irak",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 15 ou plus de 50 ans ; e-Visa 30 jours, 1 entrée",
                "15–50 ans : justificatif admissible et conditions du portail"
              ],
              [
                "Jamaïque",
                "e-Visa possible",
                "Visa de trois mois, entrées multiples",
                "Durée de présence indiquée sur le visa"
              ],
              [
                "Lettonie",
                "Dispense pour passeport ordinaire",
                "Jusqu’à 90 jours",
                "Pas d’e-Visa nécessaire si dispense applicable"
              ],
              [
                "Libye",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 16 ou plus de 45 ans ; e-Visa 30 jours, 1 entrée",
                "16–45 ans : justificatif admissible et conditions du portail"
              ],
              [
                "Lituanie",
                "Dispense pour passeport ordinaire",
                "Jusqu’à 90 jours",
                "Pas d’e-Visa nécessaire si dispense applicable"
              ],
              [
                "Maldives",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Maurice",
                "e-Visa possible",
                "30 jours, entrées multiples",
                "Conditions du portail officiel"
              ],
              [
                "Mexique",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Namibie",
                "e-Visa possible",
                "Durée affichée lors de la demande",
                "Selon le document de voyage"
              ],
              [
                "Népal",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Pakistan",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Palestine",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Philippines",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "République dominicaine",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Saint-Vincent-et-les-Grenadines",
                "e-Visa possible",
                "Visa de trois mois, entrées multiples",
                "Durée de présence indiquée sur le visa"
              ],
              [
                "Sainte-Lucie",
                "e-Visa possible",
                "Visa de 3 mois, entrées multiples",
                "Vérifier la durée de présence inscrite sur le visa"
              ],
              [
                "Sénégal",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour admissible + autres conditions"
              ],
              [
                "Sri Lanka",
                "e-Visa sous conditions",
                "Durée à confirmer",
                "Justificatif Schengen, USA, Royaume-Uni ou Irlande"
              ],
              [
                "Suriname",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Taïwan",
                "e-Visa possible",
                "Un mois, 1 entrée",
                "Conditions du portail"
              ],
              [
                "Timor oriental",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Vanuatu",
                "Liste e-Visa ; consulat selon le ministère",
                "15 jours par visa consulaire",
                "Durée électronique non confirmée"
              ],
              [
                "Vietnam",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "Yémen",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Passeports nécessitant un document Schengen ou équivalent",
          "body": "Pour l’Inde, le Pakistan, le Bangladesh, le Népal, les Philippines ou le Sénégal, l’admissibilité électronique dépend notamment de justificatifs acceptés. Un visa ou titre de séjour délivré par un pays Schengen, les États-Unis, le Royaume-Uni ou l’Irlande peut satisfaire cette condition. La date d’entrée turque doit être couverte par sa validité ; les visas électroniques étrangers ne sont pas recevables comme preuve."
        },
        {
          "id": "visa-detail-3",
          "title": "Régimes particuliers selon l’âge et le document",
          "body": "L’Algérie, l’Irak et la Libye combinent certaines dispenses touristiques basées sur l’âge et des accès électroniques sous conditions. L’Égypte impose un visa aux passeports ordinaires, avec des formalités supplémentaires pour certaines tranches d’âge. Pour les documents hongkongais, le passeport SAR ordinaire est distinct du BN(O) et du document d’identité pour visa."
        },
        {
          "id": "visa-detail-4",
          "title": "Pourquoi certaines lignes ne donnent-elles pas un nombre de jours ?",
          "body": "Le portail d’éligibilité peut inclure des pays dont la fiche ministérielle décrit seulement un visa consulaire ou une dispense. Ce n’est pas une autorisation électronique automatique pour tous les documents du pays. Nous distinguons donc les durées confirmées des cas non précisés, plutôt que d’annoncer une durée fictive. Une simulation sur le portail officiel avec le document exact permet de connaître l’offre applicable."
        },
        {
          "id": "visa-detail-5",
          "title": "Exemple : préparer une famille multinationale",
          "body": "Un parent français, un conjoint indien et un enfant titulaire d’un passeport indien n’ont pas les mêmes règles. Le parent français peut être dispensé ; les deux autres doivent disposer chacun d’une autorisation adéquate et remplir les critères de leur document. Le fait que l’un des adultes ait un titre de séjour européen ne rend pas automatiquement l’autre ou l’enfant admissible."
        },
        {
          "id": "visa-detail-6",
          "title": "Anticiper le consulat si nécessaire",
          "body": "Lorsque le justificatif demandé manque, qu’un régime électronique ne couvre pas votre document ou que vous voyagez pour travailler ou étudier, organisez la démarche consulaire. Ne comptez pas sur un visa à l’arrivée : pour de nombreuses nationalités éligibles à l’e-Visa, cette possibilité est exclue. Bosphoras peut coordonner les étapes pratiques de votre déplacement."
        }
      ],
      "faqs": [
        {
          "question": "La liste officielle suffit-elle pour voyager ?",
          "answer": "Non. Il faut une autorisation délivrée si votre passeport est soumis à visa."
        },
        {
          "question": "Le Sénégal est-il éligible ?",
          "answer": "Oui sous conditions, pour un e-Visa d’un mois à entrée unique."
        },
        {
          "question": "Un visa étranger expiré est-il suffisant ?",
          "answer": "Non, le justificatif doit être valide lors de l’entrée."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Portail officiel : nationalités éligibles"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère turc : règles par passeport"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Procédure officielle de demande et paiement"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Documents et validité"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Justificatifs de visa et de résidence"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Nationalités sans visa à l’arrivée"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Demande de visa consulaire"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel de résidence"
        }
      ]
    },
    "en": {
      "title": "Turkey e-Visa eligible countries 2026: list and permitted stays",
      "metaDescription": "Compare countries and documents on Turkey's e-Visa list, durations, supporting visas and age-based exceptions.",
      "shortAnswer": "The table covers the official portal's eligible entries and the Foreign Ministry's ordinary-passport rules. Being listed is not a guarantee of an electronic visa: exemptions and document-specific restrictions matter.",
      "bosphorasHelp": "Discuss your Turkey visit with Bosphoras to coordinate transfers, accommodation and meetings around your plans.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Complete table of portal entries",
          "body": "The rows distinguish ordinary passports, conditional visas, exemptions and cases where official sources do not confirm an electronic stay duration. In the latter cases the published consular procedure remains an option; establish what the portal actually offers before paying. A three-month validity period is not automatically 90 days of permitted presence.",
          "table": {
            "headers": [
              "Nationality / document",
              "Route",
              "Stay / entries",
              "Conditions"
            ],
            "rows": [
              [
                "Afghanistan",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Algeria",
                "Age-based exemption or visa",
                "90/180 if under 15 or over 50; e-Visa 30 days, single entry",
                "Conditional e-Visa ages 15–18 or 35–50 with eligible supporting document; otherwise consulate"
              ],
              [
                "Antigua and Barbuda",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Armenia",
                "e-Visa available",
                "Duration displayed during application",
                "Depends on travel document"
              ],
              [
                "Bahamas",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Bangladesh",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Barbados",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Bermuda",
                "Portal list; visa required per ministry",
                "Not confirmed",
                "Electronic offer unspecified; check consular route"
              ],
              [
                "Bhutan",
                "e-Visa list; ministry specifies consular route",
                "15-day consular visa",
                "Electronic duration unconfirmed"
              ],
              [
                "Cambodia",
                "Portal list; visa required per ministry",
                "Not confirmed",
                "Electronic offer unspecified; check consular route"
              ],
              [
                "Cape Verde",
                "Conditional e-Visa",
                "30 days, single entry",
                "Eligible visa/residence permit and other conditions"
              ],
              [
                "Croatia",
                "Ordinary passport visa exemption",
                "Up to 90 days",
                "No e-Visa needed for qualifying travel"
              ],
              [
                "Cyprus (Greek Cypriot passport)",
                "e-Visa or consulate",
                "Duration unspecified",
                "Border visa issuance ended on 2 January 2026"
              ],
              [
                "Dominica",
                "Portal list; visa required per ministry",
                "Not confirmed",
                "Electronic offer unspecified; check consular route"
              ],
              [
                "Dominican Republic",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Egypt",
                "Visa required",
                "30 days, single entry for ages 15–45 via e-Visa",
                "Under 15 or over 45: no extra e-Visa condition; ages 15–45: eligible supporting document and approved carrier"
              ],
              [
                "Equatorial Guinea",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Estonia",
                "Ordinary passport visa exemption",
                "Up to 90 days",
                "No e-Visa needed for qualifying travel"
              ],
              [
                "Fiji",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "Grenada",
                "Portal list; visa required per ministry",
                "Not confirmed",
                "Electronic offer unspecified; check consular route"
              ],
              [
                "Haiti",
                "Portal list; visa required per ministry",
                "Not confirmed",
                "Electronic offer unspecified; check consular route"
              ],
              [
                "Hong Kong (BN(O))",
                "e-Visa available",
                "Three-month visa, multiple entry",
                "Stay allowance on issued visa"
              ],
              [
                "India",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Iraq",
                "Age-based exemption or visa",
                "90/180 if under 15 or over 50; e-Visa 30 days, single entry",
                "Ages 15–50: eligible supporting document plus portal conditions"
              ],
              [
                "Jamaica",
                "e-Visa available",
                "Three-month visa, multiple entry",
                "Stay allowance on issued visa"
              ],
              [
                "Latvia",
                "Ordinary passport visa exemption",
                "Up to 90 days",
                "No e-Visa needed for qualifying travel"
              ],
              [
                "Libya",
                "Age-based exemption or visa",
                "90/180 if under 16 or over 45; e-Visa 30 days, single entry",
                "Ages 16–45: eligible supporting document and portal conditions"
              ],
              [
                "Lithuania",
                "Ordinary passport visa exemption",
                "Up to 90 days",
                "No e-Visa needed for qualifying travel"
              ],
              [
                "Maldives",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Mauritius",
                "e-Visa available",
                "30 days, multiple entry",
                "Official portal conditions"
              ],
              [
                "Mexico",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "Namibia",
                "e-Visa available",
                "Duration displayed during application",
                "Depends on travel document"
              ],
              [
                "Nepal",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Pakistan",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Palestine",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Philippines",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Saint Lucia",
                "e-Visa available",
                "Three-month, multiple-entry visa",
                "Read the permitted stay on the issued visa"
              ],
              [
                "Saint Vincent and the Grenadines",
                "e-Visa available",
                "Three-month visa, multiple entry",
                "Stay allowance on issued visa"
              ],
              [
                "Senegal",
                "Conditional e-Visa",
                "30 days, single entry",
                "Eligible visa/residence permit and other conditions"
              ],
              [
                "Solomon Islands",
                "e-Visa list; ministry specifies consular route",
                "15-day consular visa",
                "Electronic duration unconfirmed"
              ],
              [
                "South Africa",
                "e-Visa available",
                "30 days, multiple entry",
                "Official portal conditions"
              ],
              [
                "Sri Lanka",
                "Conditional e-Visa",
                "Duration not specified",
                "Schengen, US, UK or Irish supporting document"
              ],
              [
                "Suriname",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "Taiwan",
                "e-Visa available",
                "One month, single entry",
                "Portal conditions"
              ],
              [
                "Timor-Leste",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "Vanuatu",
                "e-Visa list; ministry specifies consular route",
                "15-day consular visa",
                "Electronic duration unconfirmed"
              ],
              [
                "Vietnam",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "Yemen",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Passports requiring supporting documentation",
          "body": "For India, Pakistan, Bangladesh, Nepal, the Philippines and Senegal, electronic eligibility depends in part on accepted documentation. An eligible visa or residence permit issued by a Schengen state, the US, UK or Ireland can satisfy this criterion. It must cover the entry date; foreign electronic visas do not count as supporting evidence."
        },
        {
          "id": "visa-detail-3",
          "title": "Age and document-specific rules",
          "body": "Algeria, Iraq and Libya combine age-based tourist exemptions with conditional electronic routes. Egypt requires visas for ordinary passports, with additional conditions for some age groups. Hong Kong SAR ordinary passports, BN(O) passports and documents of identity for visa purposes follow distinct rules."
        },
        {
          "id": "visa-detail-4",
          "title": "Why some rows have no numerical stay duration",
          "body": "The eligibility FAQ can list countries whose ministry entry describes only consular visas or exemptions. Listing alone does not establish that every document qualifies. Confirmed durations are therefore separated from unspecified cases rather than inventing a stay period. The official application form identifies the offering for the exact document."
        },
        {
          "id": "visa-detail-5",
          "title": "Example: a mixed-nationality family",
          "body": "A French parent, an Indian spouse and a child holding an Indian passport do not share a single entry status. The French parent may be exempt; both other travellers must obtain their own appropriate authorisations and satisfy the criteria. One adult's European residence card does not automatically qualify the other adult or the child."
        },
        {
          "id": "visa-detail-6",
          "title": "Plan consular applications where necessary",
          "body": "When required supporting documents are absent, your passport is ineligible or the purpose is employment or study, organise a consular application. Do not rely on visa on arrival: many e-Visa nationalities cannot use it. Bosphoras can coordinate practical travel arrangements."
        }
      ],
      "faqs": [
        {
          "question": "Does being listed alone allow travel?",
          "answer": "No. Visa-required travellers need an issued authorisation."
        },
        {
          "question": "Can Senegalese nationals qualify?",
          "answer": "Yes, subject to conditions, for a one-month single-entry e-Visa."
        },
        {
          "question": "Can I use an expired supporting visa?",
          "answer": "No, it must be valid on arrival."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Official eligible-country list"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Foreign Ministry: passport-specific rules"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Official application and payment procedure"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Required documents and validity"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Supporting visas and residence permits"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Nationalities not eligible for visa on arrival"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Consular visa application"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official residence portal"
        }
      ]
    },
    "ru": {
      "title": "Страны для электронной визы в Турцию 2026: список и сроки",
      "metaDescription": "Сравните гражданства и документы из перечня e-Visa, разрешённые сроки, условия и возрастные исключения.",
      "shortAnswer": "Таблица охватывает позиции официального портала и правила МИД для обычных паспортов. Присутствие страны в перечне не гарантирует визу: необходимо учитывать освобождения и условия для конкретного документа.",
      "bosphorasHelp": "Bosphoras может организовать трансферы, проживание и встречи с учётом вашего проекта.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Полная таблица позиций портала",
          "body": "В таблице различаются обычные паспорта, условные визы, освобождения и случаи, когда источники не подтверждают срок электронной визы. В последнем случае остаётся опубликованная консульская процедура; до оплаты выясните реальную доступность онлайн. Три месяца действия визы не всегда равны 90 дням пребывания.",
          "table": {
            "headers": [
              "Гражданство / документ",
              "Режим",
              "Срок / въезды",
              "Условия"
            ],
            "rows": [
              [
                "Алжир",
                "Освобождение по возрасту или виза",
                "90/180 до 15 или старше 50; электронная виза 30 дней, один въезд",
                "Электронная виза для 15–18 или 35–50 лет с подходящим документом; иначе консульство"
              ],
              [
                "Антигуа и Барбуда",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Армения",
                "Электронная виза доступна",
                "Срок показывается при подаче",
                "Зависит от проездного документа"
              ],
              [
                "Афганистан",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Багамы",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Бангладеш",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Барбадос",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Бермуды",
                "В списке портала; МИД требует визу",
                "Не подтверждён",
                "Электронный режим не уточнён; консульская процедура"
              ],
              [
                "Бутан",
                "В списке e-Visa; МИД указывает консульство",
                "Консульская виза на 15 дней",
                "Электронный срок не подтверждён"
              ],
              [
                "Вануату",
                "В списке e-Visa; МИД указывает консульство",
                "Консульская виза на 15 дней",
                "Электронный срок не подтверждён"
              ],
              [
                "Восточный Тимор",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Вьетнам",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Гаити",
                "В списке портала; МИД требует визу",
                "Не подтверждён",
                "Электронный режим не уточнён; консульская процедура"
              ],
              [
                "Гонконг (BN(O))",
                "e-Visa доступна",
                "Три месяца, многократная",
                "Срок пребывания указан в визе"
              ],
              [
                "Гренада",
                "В списке портала; МИД требует визу",
                "Не подтверждён",
                "Электронный режим не уточнён; консульская процедура"
              ],
              [
                "Доминика",
                "В списке портала; МИД требует визу",
                "Не подтверждён",
                "Электронный режим не уточнён; консульская процедура"
              ],
              [
                "Доминиканская Республика",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Египет",
                "Виза обязательна",
                "30 дней, один въезд для электронной визы в 15–45 лет",
                "До 15 или старше 45: без дополнительных условий; 15–45: подходящий документ и разрешённая авиакомпания"
              ],
              [
                "Индия",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Ирак",
                "Освобождение по возрасту или виза",
                "90/180 до 15 или старше 50; электронная виза 30 дней, один въезд",
                "15–50 лет: подходящий документ и условия портала"
              ],
              [
                "Йемен",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Кабо-Верде",
                "Условная e-Visa",
                "30 дней, один въезд",
                "Подходящая виза или ВНЖ и другие условия"
              ],
              [
                "Камбоджа",
                "В списке портала; МИД требует визу",
                "Не подтверждён",
                "Электронный режим не уточнён; консульская процедура"
              ],
              [
                "Кипр (греко-кипрский паспорт)",
                "e-Visa или консульство",
                "Срок не указан",
                "Визы на границе отменены с 2 января 2026"
              ],
              [
                "Латвия",
                "Обычный паспорт без визы",
                "До 90 дней",
                "Электронная виза не нужна при освобождении"
              ],
              [
                "Ливия",
                "Освобождение по возрасту или виза",
                "90/180 до 16 или старше 45; электронная виза 30 дней, один въезд",
                "16–45 лет: подходящий документ и условия портала"
              ],
              [
                "Литва",
                "Обычный паспорт без визы",
                "До 90 дней",
                "Электронная виза не нужна при освобождении"
              ],
              [
                "Маврикий",
                "Электронная виза доступна",
                "30 дней, многократная",
                "Условия официального портала"
              ],
              [
                "Мальдивы",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Мексика",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Намибия",
                "Электронная виза доступна",
                "Срок показывается при подаче",
                "Зависит от проездного документа"
              ],
              [
                "Непал",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Пакистан",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Палестина",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Сенегал",
                "Условная e-Visa",
                "30 дней, один въезд",
                "Подходящая виза или ВНЖ и другие условия"
              ],
              [
                "Сент-Винсент и Гренадины",
                "e-Visa доступна",
                "Три месяца, многократная",
                "Срок пребывания указан в визе"
              ],
              [
                "Сент-Люсия",
                "Электронная виза доступна",
                "Трёхмесячная, многократная",
                "Срок пребывания указан в выданной визе"
              ],
              [
                "Соломоновы Острова",
                "В списке e-Visa; МИД указывает консульство",
                "Консульская виза на 15 дней",
                "Электронный срок не подтверждён"
              ],
              [
                "Суринам",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Тайвань",
                "e-Visa доступна",
                "Один месяц, один въезд",
                "Условия портала"
              ],
              [
                "Фиджи",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Филиппины",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Хорватия",
                "Обычный паспорт без визы",
                "До 90 дней",
                "Электронная виза не нужна при освобождении"
              ],
              [
                "Шри-Ланка",
                "Условная e-Visa",
                "Срок не указан",
                "Документ Шенгена, США, Великобритании или Ирландии"
              ],
              [
                "Экваториальная Гвинея",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Эстония",
                "Обычный паспорт без визы",
                "До 90 дней",
                "Электронная виза не нужна при освобождении"
              ],
              [
                "ЮАР",
                "Электронная виза доступна",
                "30 дней, многократная",
                "Условия официального портала"
              ],
              [
                "Ямайка",
                "e-Visa доступна",
                "Три месяца, многократная",
                "Срок пребывания указан в визе"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Подтверждающая виза или ВНЖ",
          "body": "Для Индии, Пакистана, Бангладеш, Непала, Филиппин и Сенегала электронная процедура зависит от подходящих документов. Виза или ВНЖ страны Шенгена, США, Великобритании или Ирландии могут соответствовать требованиям. Документы должны действовать на дату въезда; электронные визы других стран не подходят."
        },
        {
          "id": "visa-detail-3",
          "title": "Особенности возраста и типа документа",
          "body": "В Алжире, Ираке и Ливии существуют возрастные туристические освобождения и условные электронные визы. Египет требует визы для обычных паспортов, с дополнительными требованиями для отдельных возрастов. Обычные паспорта Гонконга, BN(O) и документы личности для визовых целей имеют разные режимы."
        },
        {
          "id": "visa-detail-4",
          "title": "Почему для некоторых стран не указан срок",
          "body": "Официальный FAQ может перечислять страны, для которых МИД описывает лишь консульскую процедуру или освобождение. Это не означает право на электронную визу с любым паспортом. Подтверждённые сроки отделены от неустановленных. Анкета официального портала показывает условия для конкретного документа."
        },
        {
          "id": "visa-detail-5",
          "title": "Пример семьи с разным гражданством",
          "body": "У французского родителя, индийского супруга и ребёнка с индийским паспортом разные условия. Француз может быть освобождён от визы, а остальным нужны отдельные разрешения и подходящие документы. Европейский ВНЖ одного взрослого не делает автоматически подходящими документы остальных."
        },
        {
          "id": "visa-detail-6",
          "title": "Когда обращаться в консульство",
          "body": "Если отсутствует необходимый документ, электронная процедура недоступна либо цель — работа или учёба, оформляйте подходящую консульскую визу. Не рассчитывайте на визу по прибытии: многие гражданства с электронной процедурой её не имеют. Bosphoras может организовать практические вопросы поездки."
        }
      ],
      "faqs": [
        {
          "question": "Достаточно ли присутствия страны в списке?",
          "answer": "Нет, при визовом режиме требуется выданное разрешение."
        },
        {
          "question": "Доступна ли электронная виза гражданам Сенегала?",
          "answer": "Да, при соблюдении условий, на один месяц и один въезд."
        },
        {
          "question": "Подойдёт ли просроченная подтверждающая виза?",
          "answer": "Нет, она должна действовать на дату въезда."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Официальный список гражданств"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции: правила по паспорту"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Официальный порядок подачи и оплаты"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Документы и сроки действия"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Подтверждающие визы и ВНЖ"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Гражданства без визы по прибытии"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Консульская подача"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "الدول المؤهلة لتأشيرة تركيا الإلكترونية 2026: القائمة والمدد",
      "metaDescription": "قارن الجنسيات والوثائق المدرجة في منصة التأشيرة الإلكترونية والمدد وشروط الوثائق الداعمة والاستثناءات العمرية.",
      "shortAnswer": "يشمل الجدول مدخلات المنصة الرسمية وقواعد الخارجية للجوازات العادية. لا يضمن إدراج الجنسية إصدار التأشيرة؛ إذ تظل الإعفاءات والشروط الخاصة بالوثيقة سارية.",
      "bosphorasHelp": "تنسق Bosphoras النقل والسكن والاجتماعات وفق احتياجات مشروعك.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "جدول مدخلات المنصة الرسمية",
          "body": "يميز الجدول الجوازات العادية والتأشيرات المشروطة والإعفاءات والحالات التي لا تؤكد فيها المصادر مدة إلكترونية محددة. وفي الحالة الأخيرة تبقى الإجراءات القنصلية المنشورة خياراً ويجب التأكد من العرض الإلكتروني قبل الدفع. لا تعني صلاحية ثلاثة أشهر بالضرورة بقاء 90 يوماً.",
          "table": {
            "headers": [
              "الجنسية / الوثيقة",
              "النظام",
              "المدة / الدخول",
              "الشروط"
            ],
            "rows": [
              [
                "أرمينيا",
                "تأشيرة إلكترونية متاحة",
                "المدة تظهر عند الطلب",
                "بحسب وثيقة السفر"
              ],
              [
                "إستونيا",
                "إعفاء للجواز العادي",
                "حتى 90 يوماً",
                "لا حاجة للإلكترونية عند الإعفاء"
              ],
              [
                "أفغانستان",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "الباهاما",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "الجزائر",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 15 أو فوق 50؛ الإلكترونية 30 يوماً لدخول واحد",
                "الإلكترونية للأعمار 15–18 أو 35–50 مع وثيقة مؤهلة؛ وإلا القنصلية"
              ],
              [
                "الرأس الأخضر",
                "إلكترونية مشروطة",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة مؤهلة وشروط أخرى"
              ],
              [
                "السنغال",
                "إلكترونية مشروطة",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة مؤهلة وشروط أخرى"
              ],
              [
                "العراق",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 15 أو فوق 50؛ الإلكترونية 30 يوماً لدخول واحد",
                "15–50 عاماً: وثيقة مؤهلة وشروط المنصة"
              ],
              [
                "الفلبين",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "المالديف",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "المكسيك",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "الهند",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "اليمن",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "أنتيغوا وباربودا",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "باربادوس",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "باكستان",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "برمودا",
                "مدرجة في المنصة؛ التأشيرة مطلوبة وفق الوزارة",
                "غير مؤكدة",
                "المسار الإلكتروني غير محدد؛ تحقق من القنصلية"
              ],
              [
                "بنغلاديش",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "بوتان",
                "مدرجة إلكترونياً؛ الوزارة تذكر القنصلية",
                "تأشيرة قنصلية 15 يوماً",
                "المدة الإلكترونية غير مؤكدة"
              ],
              [
                "تايوان",
                "إلكترونية متاحة",
                "شهر، دخول واحد",
                "شروط المنصة"
              ],
              [
                "تيمور الشرقية",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "جامايكا",
                "إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر متعددة الدخول",
                "مدة البقاء على التأشيرة"
              ],
              [
                "جزر سليمان",
                "مدرجة إلكترونياً؛ الوزارة تذكر القنصلية",
                "تأشيرة قنصلية 15 يوماً",
                "المدة الإلكترونية غير مؤكدة"
              ],
              [
                "جمهورية الدومينيكان",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "جنوب إفريقيا",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول متعدد",
                "شروط المنصة الرسمية"
              ],
              [
                "دومينيكا",
                "مدرجة في المنصة؛ التأشيرة مطلوبة وفق الوزارة",
                "غير مؤكدة",
                "المسار الإلكتروني غير محدد؛ تحقق من القنصلية"
              ],
              [
                "سانت فنسنت والغرينادين",
                "إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر متعددة الدخول",
                "مدة البقاء على التأشيرة"
              ],
              [
                "سانت لوسيا",
                "تأشيرة إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر، دخول متعدد",
                "مدة البقاء مذكورة في التأشيرة الصادرة"
              ],
              [
                "سريلانكا",
                "إلكترونية مشروطة",
                "المدة غير محددة",
                "وثيقة شنغن أو أمريكا أو بريطانيا أو إيرلندا"
              ],
              [
                "سورينام",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "غرينادا",
                "مدرجة في المنصة؛ التأشيرة مطلوبة وفق الوزارة",
                "غير مؤكدة",
                "المسار الإلكتروني غير محدد؛ تحقق من القنصلية"
              ],
              [
                "غينيا الاستوائية",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "فانواتو",
                "مدرجة إلكترونياً؛ الوزارة تذكر القنصلية",
                "تأشيرة قنصلية 15 يوماً",
                "المدة الإلكترونية غير مؤكدة"
              ],
              [
                "فلسطين",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "فيتنام",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "فيجي",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "قبرص (جواز قبرصي يوناني)",
                "إلكترونية أو قنصلية",
                "المدة غير محددة",
                "أوقف إصدار التأشيرة عند الحدود منذ 2 يناير 2026"
              ],
              [
                "كرواتيا",
                "إعفاء للجواز العادي",
                "حتى 90 يوماً",
                "لا حاجة للإلكترونية عند الإعفاء"
              ],
              [
                "كمبوديا",
                "مدرجة في المنصة؛ التأشيرة مطلوبة وفق الوزارة",
                "غير مؤكدة",
                "المسار الإلكتروني غير محدد؛ تحقق من القنصلية"
              ],
              [
                "لاتفيا",
                "إعفاء للجواز العادي",
                "حتى 90 يوماً",
                "لا حاجة للإلكترونية عند الإعفاء"
              ],
              [
                "ليبيا",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 16 أو فوق 45؛ الإلكترونية 30 يوماً لدخول واحد",
                "16–45 عاماً: وثيقة مؤهلة وشروط المنصة"
              ],
              [
                "ليتوانيا",
                "إعفاء للجواز العادي",
                "حتى 90 يوماً",
                "لا حاجة للإلكترونية عند الإعفاء"
              ],
              [
                "مصر",
                "تأشيرة إلزامية",
                "30 يوماً، دخول واحد للإلكترونية بين 15 و45",
                "دون 15 أو فوق 45: دون شرط إضافي؛ 15–45: وثيقة مؤهلة وناقل معتمد"
              ],
              [
                "موريشيوس",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول متعدد",
                "شروط المنصة الرسمية"
              ],
              [
                "ناميبيا",
                "تأشيرة إلكترونية متاحة",
                "المدة تظهر عند الطلب",
                "بحسب وثيقة السفر"
              ],
              [
                "نيبال",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "هايتي",
                "مدرجة في المنصة؛ التأشيرة مطلوبة وفق الوزارة",
                "غير مؤكدة",
                "المسار الإلكتروني غير محدد؛ تحقق من القنصلية"
              ],
              [
                "هونغ كونغ (BN(O))",
                "إلكترونية متاحة",
                "تأشيرة ثلاثة أشهر متعددة الدخول",
                "مدة البقاء على التأشيرة"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "الجوازات التي تحتاج إلى وثائق داعمة",
          "body": "تتوقف الأهلية الإلكترونية للهند وباكستان وبنغلاديش ونيبال والفلبين والسنغال جزئياً على الوثائق المقبولة. وقد تحقق تأشيرة أو إقامة مؤهلة من شنغن أو أمريكا أو بريطانيا أو إيرلندا هذا الشرط. يجب أن تكون سارية عند الدخول؛ ولا تقبل التأشيرات الإلكترونية الأجنبية كإثبات."
        },
        {
          "id": "visa-detail-3",
          "title": "شروط خاصة بالعمر ونوع الوثيقة",
          "body": "تجمع الجزائر والعراق وليبيا بين إعفاءات سياحية عمرية ومسارات إلكترونية مشروطة. وتفرض مصر تأشيرة على الجوازات العادية مع شروط إضافية لبعض الأعمار. وتختلف قواعد جواز هونغ كونغ العادي عن وثائق BN(O) ووثائق الهوية لأغراض التأشيرة."
        },
        {
          "id": "visa-detail-4",
          "title": "لماذا لا تظهر مدة محددة لبعض الدول؟",
          "body": "قد يدرج دليل الأهلية دولاً تصف الخارجية إجراءاتها القنصلية أو إعفاءاتها فقط. فلا يعني ذلك حقاً إلكترونياً لكل وثيقة. لذلك نفصل المدد المؤكدة عن غير المحددة. ويبين نموذج المنصة الرسمية الخيارات للوثيقة الفعلية."
        },
        {
          "id": "visa-detail-5",
          "title": "مثال أسرة متعددة الجنسيات",
          "body": "تختلف شروط والد فرنسي وزوج هندي وطفل بجواز هندي. قد يعفى الفرنسي بينما يحتاج الآخران إلى تصاريح مستقلة واستيفاء الشروط. لا تمنح إقامة أوروبية لدى أحد البالغين بقية الأسرة الأهلية تلقائياً."
        },
        {
          "id": "visa-detail-6",
          "title": "التخطيط للمسار القنصلي عند الحاجة",
          "body": "إذا غابت الوثيقة الداعمة أو تعذر المسار الإلكتروني أو كان الغرض العمل أو الدراسة، فرتب التأشيرة القنصلية المناسبة. لا تعتمد على إصدار التأشيرة عند الوصول لأن كثيراً من الجنسيات الإلكترونية لا يحق لها ذلك. يمكن لـBosphoras تنسيق الجوانب العملية للرحلة."
        }
      ],
      "faqs": [
        {
          "question": "هل يكفي وجود الجنسية في القائمة؟",
          "answer": "لا، يجب الحصول على تصريح صادر إذا كانت التأشيرة مطلوبة."
        },
        {
          "question": "هل السنغال مؤهلة؟",
          "answer": "نعم بشروط، لتأشيرة شهر واحد ودخول واحد."
        },
        {
          "question": "هل تقبل تأشيرة داعمة منتهية؟",
          "answer": "لا، يجب أن تكون سارية عند الدخول."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "القائمة الرسمية للجنسيات المؤهلة"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية: الشروط حسب الجواز"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "الإجراءات الرسمية للطلب والدفع"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "الوثائق والصلاحية"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "التأشيرات والإقامات الداعمة"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "الجنسيات غير المؤهلة للتأشيرة عند الوصول"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "طلب التأشيرة القنصلية"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        }
      ]
    }
  },
  "turkey-evisa-investors": {
    "fr": {
      "title": "e-Visa Turquie pour investisseurs : visites, prospection et création d’entreprise",
      "metaDescription": "Découvrez les activités commerciales autorisées pendant une visite, les formalités selon le passeport et le passage vers un permis de travail ou de séjour.",
      "shortAnswer": "Un investisseur étranger peut utiliser une dispense ou un e-Visa adapté pour une mission commerciale de courte durée. Cela permet notamment d’organiser des réunions et visites, mais ne confère pas automatiquement le droit de travailler au sein d’une société turque.",
      "bosphorasHelp": "Parlons de votre voyage en Turquie. Bosphoras coordonne les transferts, séjours et rendez-vous selon les besoins de votre projet.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choisir le statut selon l’activité réelle",
          "body": "Une visite de prospection peut comporter des rendez-vous avec des fournisseurs, des professionnels de l’immobilier ou des conseillers. La gestion quotidienne sur place, l’exercice d’une profession et l’emploi rémunéré peuvent nécessiter un permis de travail. Le projet économique et la situation individuelle déterminent la démarche ; le mot investisseur ne constitue pas à lui seul une catégorie universelle de visa électronique."
        },
        {
          "id": "visa-detail-2",
          "title": "Préparer une mission de cinq jours",
          "body": "Avant l’arrivée, planifiez les rendez-vous et rassemblez les pièces nécessaires. Jour 1 : cadrage du projet et rendez-vous introductifs. Jours 2 et 3 : visites ciblées de biens, bureaux ou fournisseurs, regroupées géographiquement. Jour 4 : étude financière et échange avec les professionnels indépendants. Jour 5 : synthèse, vérification des documents à obtenir et départ. Ce programme peut rester compatible avec une visite commerciale de courte durée."
        },
        {
          "id": "visa-detail-3",
          "title": "Durée disponible selon votre passeport",
          "body": "Un Français en visite touristique ou commerciale admissible relève généralement de la dispense. Un Russe peut bénéficier de 60 jours par visite touristique ou commerciale ; un Indien doit obtenir un visa, avec une option électronique conditionnelle pour un mois. Un Mexicain peut demander un e-Visa de 30 jours à entrée unique. Le tableau résume les parcours, sans créer un régime spécial pour les investisseurs.",
          "table": {
            "headers": [
              "Nationalité / document",
              "Régime",
              "Durée / entrées",
              "Conditions"
            ],
            "rows": [
              [
                "Inde",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Pakistan",
                "e-Visa sous conditions",
                "30 jours, 1 entrée",
                "Visa ou titre de séjour valide Schengen, USA, Royaume-Uni ou Irlande ; autres critères"
              ],
              [
                "Algérie",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 15 ou plus de 50 ans ; e-Visa 30 jours, 1 entrée",
                "e-Visa : 15–18 ou 35–50 ans et justificatif admissible ; autres cas : consulat"
              ],
              [
                "Irak",
                "Dispense selon l’âge ou visa",
                "90/180 si moins de 15 ou plus de 50 ans ; e-Visa 30 jours, 1 entrée",
                "15–50 ans : justificatif admissible et conditions du portail"
              ],
              [
                "Mexique",
                "e-Visa possible",
                "30 jours, 1 entrée",
                "Conditions du portail officiel"
              ],
              [
                "France",
                "Dispense de visa",
                "90 jours sur 180",
                "Pas de frais de visa"
              ],
              [
                "Kazakhstan",
                "Dispense de visa",
                "90 jours sur 180",
                "Pas de frais de visa"
              ],
              [
                "Russie",
                "Dispense de visa",
                "60 jours par séjour",
                "Plafond général de 90/180"
              ],
              [
                "Chine",
                "Dispense de visa",
                "90 jours sur 180",
                "Pas de frais de visa"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Créer une société ou acquérir un bien",
          "body": "Une acquisition immobilière et une constitution de société ont chacune leurs formalités propres. Pour un achat, préparez les vérifications foncières et le mode de paiement ; pour une société, définissez capital, associés, activité et pouvoirs du représentant. Le droit d’entrée n’est pas une autorisation administrative pour chaque opération et ne garantit pas le droit de résidence."
        },
        {
          "id": "visa-detail-5",
          "title": "Faire plusieurs missions sans dépasser vos droits",
          "body": "Si vous revenez régulièrement, distinguez la période de validité, le nombre d’entrées et le cumul des jours de séjour. Réservez des rendez-vous en tenant compte des dates légales de départ. Un visa à entrée unique utilisé ne peut pas servir à un second voyage. Un visa à entrées multiples reste soumis au nombre de jours figurant sur l’autorisation."
        },
        {
          "id": "visa-detail-6",
          "title": "Quand prévoir une installation durable ?",
          "body": "Si la mission aboutit à une présence prolongée ou à une activité de dirigeant actif, préparez un statut de résidence ou de travail approprié. Bosphoras peut coordonner l’itinéraire, les transferts, les visites et les rendez-vous avec des professionnels indépendants, pour que chaque démarche soit préparée avant votre déplacement."
        }
      ],
      "faqs": [
        {
          "question": "Existe-t-il un e-Visa automatiquement réservé aux investisseurs ?",
          "answer": "Non, l’admissibilité dépend du passeport et du motif commercial autorisé."
        },
        {
          "question": "Puis-je travailler avec cet e-Visa ?",
          "answer": "Non, il ne remplace pas le permis de travail applicable."
        },
        {
          "question": "L’achat d’un bien prolonge-t-il le visa ?",
          "answer": "Non, un droit de séjour supplémentaire exige une procédure distincte."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Portail officiel : nationalités éligibles"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère turc : règles par passeport"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Procédure officielle de demande et paiement"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Documents et validité"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Justificatifs de visa et de résidence"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Nationalités sans visa à l’arrivée"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Demande de visa consulaire"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel de résidence"
        }
      ]
    },
    "en": {
      "title": "Turkey e-Visa for investors: business visits and company plans",
      "metaDescription": "Plan a short commercial visit to Turkey, passport-specific visa routes, property inspections and subsequent residence or work permission.",
      "shortAnswer": "An international investor may use an appropriate exemption or e-Visa for short commercial visits. Meetings and site inspections differ from permission to work in a Turkish company.",
      "bosphorasHelp": "Discuss your Turkey visit with Bosphoras to coordinate transfers, accommodation and meetings around your plans.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choose status around actual activity",
          "body": "A scouting visit may include meetings with suppliers, property professionals and advisers. Day-to-day management, professional activity and employment may require work permission. The actual activity and personal status determine the procedure; being an investor does not itself create a universal electronic visa category."
        },
        {
          "id": "visa-detail-2",
          "title": "A practical five-day visit",
          "body": "Prepare meetings and relevant documents before arrival. Day one: project briefing and introductory meetings. Days two and three: geographically grouped property, office or supplier visits. Day four: financial discussion with independent professionals. Day five: review, outstanding documents and departure. This timetable can fit an authorised short commercial visit."
        },
        {
          "id": "visa-detail-3",
          "title": "Available days depend on your passport",
          "body": "A French traveller on a qualifying visit generally has visa exemption. Russians may have a 60-day tourist or commercial visit; Indians require visas, with a conditional one-month electronic option. Mexican citizens can obtain a 30-day single-entry e-Visa. The table summarises routes without inventing an investor-specific entitlement.",
          "table": {
            "headers": [
              "Nationality / document",
              "Route",
              "Stay / entries",
              "Conditions"
            ],
            "rows": [
              [
                "India",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Pakistan",
                "Conditional e-Visa",
                "30 days, single entry",
                "Valid Schengen, US, UK or Irish visa/residence permit; other conditions"
              ],
              [
                "Algeria",
                "Age-based exemption or visa",
                "90/180 if under 15 or over 50; e-Visa 30 days, single entry",
                "Conditional e-Visa ages 15–18 or 35–50 with eligible supporting document; otherwise consulate"
              ],
              [
                "Iraq",
                "Age-based exemption or visa",
                "90/180 if under 15 or over 50; e-Visa 30 days, single entry",
                "Ages 15–50: eligible supporting document plus portal conditions"
              ],
              [
                "Mexico",
                "e-Visa available",
                "30 days, single entry",
                "Official portal conditions"
              ],
              [
                "France",
                "Visa-free",
                "90 days in 180",
                "No visa fee"
              ],
              [
                "Kazakhstan",
                "Visa-free",
                "90 days in 180",
                "No visa fee"
              ],
              [
                "Russia",
                "Visa-free",
                "60 days per visit",
                "General 90/180 ceiling"
              ],
              [
                "China",
                "Visa-free",
                "90 days in 180",
                "No visa fee"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Company setup and property purchase",
          "body": "Property acquisition and incorporation have separate formalities. For property, prepare title checks and payment arrangements; for a company, determine capital, shareholders, activity and representative powers. Entry permission is not authorisation for every activity and does not guarantee residence."
        },
        {
          "id": "visa-detail-5",
          "title": "Planning recurring commercial trips",
          "body": "Distinguish visa validity, entries and cumulative permitted days. Schedule meetings around lawful departure dates. An already-used single-entry visa cannot be reused for a second trip. Multiple-entry visas remain subject to their printed stay allowance."
        },
        {
          "id": "visa-detail-6",
          "title": "When to prepare relocation",
          "body": "If the project develops into extended presence or active management, establish appropriate residence or work status. Bosphoras can coordinate itineraries, transfers, visits and appointments with independent professionals before travel."
        }
      ],
      "faqs": [
        {
          "question": "Is there an automatic investor e-Visa?",
          "answer": "No; passport and qualifying commercial purpose determine eligibility."
        },
        {
          "question": "Can I work on it?",
          "answer": "No, it does not replace applicable work authorisation."
        },
        {
          "question": "Does buying property extend my visa?",
          "answer": "No, a separate residence procedure is needed."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Official eligible-country list"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Foreign Ministry: passport-specific rules"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Official application and payment procedure"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Required documents and validity"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Supporting visas and residence permits"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Nationalities not eligible for visa on arrival"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Consular visa application"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official residence portal"
        }
      ]
    },
    "ru": {
      "title": "Электронная виза в Турцию для инвесторов: деловые визиты и бизнес",
      "metaDescription": "Как организовать деловую поездку, просмотры недвижимости, переговоры, регистрацию компании и последующий легальный статус.",
      "shortAnswer": "Иностранный инвестор может воспользоваться подходящим безвизовым режимом или электронной визой для краткого коммерческого визита. Переговоры и ознакомительные поездки отличаются от права работать в турецкой компании.",
      "bosphorasHelp": "Bosphoras может организовать трансферы, проживание и встречи с учётом вашего проекта.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Статус зависит от фактической деятельности",
          "body": "Ознакомительная поездка может включать переговоры с поставщиками, специалистами по недвижимости и консультантами. Повседневное управление, профессиональная деятельность и трудоустройство могут требовать разрешения на работу. Сам статус инвестора не даёт универсального права на электронную визу."
        },
        {
          "id": "visa-detail-2",
          "title": "Пример пятидневной поездки",
          "body": "Заранее подготовьте встречи и документы. Первый день — обсуждение проекта и знакомство с участниками. Второй и третий — просмотры недвижимости, офисов или производств по районам. Четвёртый — финансовое обсуждение с независимыми специалистами. Пятый — итоги, список необходимых документов и отъезд. Такой график может соответствовать краткому коммерческому визиту."
        },
        {
          "id": "visa-detail-3",
          "title": "Сроки зависят от паспорта",
          "body": "Гражданин Франции при подходящей поездке обычно освобождён от визы. Российские паспорта позволяют туристический или коммерческий визит до 60 дней. Гражданам Индии нужна виза, электронная на месяц доступна при условиях. Мексиканцам доступна однократная электронная виза на 30 дней. В таблице указаны обычные правила, а не отдельная льгота инвесторам.",
          "table": {
            "headers": [
              "Гражданство / документ",
              "Режим",
              "Срок / въезды",
              "Условия"
            ],
            "rows": [
              [
                "Индия",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Пакистан",
                "Электронная виза при условиях",
                "30 дней, однократная",
                "Действующая виза или ВНЖ Шенгена, США, Великобритании или Ирландии; дополнительные условия"
              ],
              [
                "Алжир",
                "Освобождение по возрасту или виза",
                "90/180 до 15 или старше 50; электронная виза 30 дней, один въезд",
                "Электронная виза для 15–18 или 35–50 лет с подходящим документом; иначе консульство"
              ],
              [
                "Ирак",
                "Освобождение по возрасту или виза",
                "90/180 до 15 или старше 50; электронная виза 30 дней, один въезд",
                "15–50 лет: подходящий документ и условия портала"
              ],
              [
                "Мексика",
                "Электронная виза доступна",
                "30 дней, один въезд",
                "Условия официального портала"
              ],
              [
                "Франция",
                "Без визы",
                "90 дней из 180",
                "Без визового сбора"
              ],
              [
                "Казахстан",
                "Без визы",
                "90 дней из 180",
                "Без визового сбора"
              ],
              [
                "Россия",
                "Без визы",
                "60 дней за визит",
                "Общий предел 90/180"
              ],
              [
                "Китай",
                "Без визы",
                "90 дней из 180",
                "Без визового сбора"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Регистрация компании и покупка недвижимости",
          "body": "У каждой процедуры свои документы. При покупке подготовьте проверку права собственности и расчёты; при регистрации — капитал, участников, деятельность и полномочия представителя. Разрешение на въезд не заменяет другие разрешения и не гарантирует ВНЖ."
        },
        {
          "id": "visa-detail-5",
          "title": "Повторные деловые поездки",
          "body": "Различайте срок действия визы, число въездов и общее разрешённое пребывание. Планируйте встречи с учётом срока выезда. Использованная однократная виза не действует для повторного въезда. Многократная также ограничена указанным сроком пребывания."
        },
        {
          "id": "visa-detail-6",
          "title": "Когда готовить переезд",
          "body": "Если проект требует длительного пребывания или активного управления, определите подходящий ВНЖ или разрешение на работу. Bosphoras может организовать маршрут, трансферы, просмотры и встречи с независимыми специалистами до вашего прибытия."
        }
      ],
      "faqs": [
        {
          "question": "Есть ли автоматическая электронная виза инвестора?",
          "answer": "Нет, учитываются паспорт и допустимая коммерческая цель."
        },
        {
          "question": "Можно ли работать по ней?",
          "answer": "Нет, она не заменяет разрешение на работу."
        },
        {
          "question": "Продлевает ли покупка жилья визу?",
          "answer": "Нет, для проживания предусмотрена отдельная процедура."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Официальный список гражданств"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции: правила по паспорту"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Официальный порядок подачи и оплаты"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Документы и сроки действия"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Подтверждающие визы и ВНЖ"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Гражданства без визы по прибытии"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Консульская подача"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "التأشيرة الإلكترونية لتركيا للمستثمرين: زيارات الأعمال وتأسيس الشركات",
      "metaDescription": "خطط لزيارة استثمارية قصيرة ومعرفة قواعد الجواز وزيارات العقارات والاجتماعات والانتقال لاحقاً إلى إقامة أو تصريح عمل.",
      "shortAnswer": "يمكن للمستثمر الأجنبي استخدام الإعفاء أو تأشيرة إلكترونية مناسبة لزيارة تجارية قصيرة. وتختلف الاجتماعات والزيارات الاستطلاعية عن حق العمل داخل شركة تركية.",
      "bosphorasHelp": "تنسق Bosphoras النقل والسكن والاجتماعات وفق احتياجات مشروعك.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "اختيار الوضع بحسب النشاط الفعلي",
          "body": "قد تتضمن الزيارة اجتماعات مع الموردين ومختصي العقار والمستشارين. وقد تتطلب الإدارة اليومية والعمل المهني والتوظيف تصريح عمل. تتحدد الإجراءات بالنشاط والوضع الفردي، ولا تمنح صفة المستثمر حقاً إلكترونياً عاماً."
        },
        {
          "id": "visa-detail-2",
          "title": "برنامج عملي لخمسـة أيام",
          "body": "جهز الاجتماعات والوثائق مسبقاً. اليوم الأول: تحديد المشروع واجتماعات تمهيدية. الثاني والثالث: زيارات العقارات والمكاتب والموردين ضمن مناطق محددة. الرابع: دراسة مالية مع مختصين مستقلين. الخامس: مراجعة النتائج والوثائق المطلوبة والمغادرة. وقد يناسب البرنامج زيارة تجارية قصيرة مصرحاً بها."
        },
        {
          "id": "visa-detail-3",
          "title": "المدة المتاحة حسب الجواز",
          "body": "يستفيد الفرنسي عادة من الإعفاء للزيارة المؤهلة، والروسي من 60 يوماً للزيارة السياحية أو التجارية. ويحتاج الهندي إلى تأشيرة مع خيار إلكتروني مشروط لشهر، والمكسيكي إلى إلكترونية لـ30 يوماً لدخول واحد. يلخص الجدول هذه المسارات دون افتراض امتياز خاص للمستثمرين.",
          "table": {
            "headers": [
              "الجنسية / الوثيقة",
              "النظام",
              "المدة / الدخول",
              "الشروط"
            ],
            "rows": [
              [
                "الهند",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "باكستان",
                "تأشيرة إلكترونية بشروط",
                "30 يوماً، دخول واحد",
                "تأشيرة أو إقامة سارية لشنغن أو أمريكا أو بريطانيا أو إيرلندا؛ شروط أخرى"
              ],
              [
                "الجزائر",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 15 أو فوق 50؛ الإلكترونية 30 يوماً لدخول واحد",
                "الإلكترونية للأعمار 15–18 أو 35–50 مع وثيقة مؤهلة؛ وإلا القنصلية"
              ],
              [
                "العراق",
                "إعفاء حسب العمر أو تأشيرة",
                "90/180 دون 15 أو فوق 50؛ الإلكترونية 30 يوماً لدخول واحد",
                "15–50 عاماً: وثيقة مؤهلة وشروط المنصة"
              ],
              [
                "المكسيك",
                "تأشيرة إلكترونية متاحة",
                "30 يوماً، دخول واحد",
                "شروط المنصة الرسمية"
              ],
              [
                "فرنسا",
                "إعفاء",
                "90 يوماً خلال 180",
                "دون رسوم تأشيرة"
              ],
              [
                "كازاخستان",
                "إعفاء",
                "90 يوماً خلال 180",
                "دون رسوم تأشيرة"
              ],
              [
                "روسيا",
                "إعفاء",
                "60 يوماً لكل زيارة",
                "السقف العام 90/180"
              ],
              [
                "الصين",
                "إعفاء",
                "90 يوماً خلال 180",
                "دون رسوم تأشيرة"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "تأسيس شركة وشراء عقار",
          "body": "لكل إجراء متطلبات مستقلة. افحص سند الملكية وطريقة الدفع عند الشراء، وحدد رأس المال والشركاء والنشاط وصلاحيات الممثل عند التأسيس. لا يحل تصريح الدخول محل التراخيص الأخرى ولا يضمن الإقامة."
        },
        {
          "id": "visa-detail-5",
          "title": "التخطيط للزيارات التجارية المتكررة",
          "body": "ميز صلاحية التأشيرة وعدد مرات الدخول وإجمالي أيام البقاء. رتب المواعيد وفق آخر يوم قانوني للمغادرة. لا يعاد استخدام تأشيرة دخول واحد بعد استهلاكها، وتظل المتعددة خاضعة لمدة البقاء المذكورة."
        },
        {
          "id": "visa-detail-6",
          "title": "متى يلزم التحضير للانتقال الطويل؟",
          "body": "إذا تطلب المشروع وجوداً ممتداً أو إدارة نشطة، فحدد وضع الإقامة أو العمل المناسب. تستطيع Bosphoras تنسيق المسار والنقل والزيارات والاجتماعات مع مختصين مستقلين قبل السفر."
        }
      ],
      "faqs": [
        {
          "question": "هل توجد إلكترونية تلقائية للمستثمر؟",
          "answer": "لا، يعتمد التأهل على الجواز والغرض التجاري المقبول."
        },
        {
          "question": "هل تسمح بالعمل؟",
          "answer": "لا، لا تحل محل تصريح العمل."
        },
        {
          "question": "هل يمدد شراء العقار التأشيرة؟",
          "answer": "لا، الإقامة إجراء مستقل."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "القائمة الرسمية للجنسيات المؤهلة"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية: الشروط حسب الجواز"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "الإجراءات الرسمية للطلب والدفع"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "الوثائق والصلاحية"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "التأشيرات والإقامات الداعمة"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "الجنسيات غير المؤهلة للتأشيرة عند الوصول"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "طلب التأشيرة القنصلية"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        }
      ]
    }
  },
  "turkey-electronic-visa-requirements": {
    "fr": {
      "title": "Visa électronique Turquie 2026 : conditions, passeport et justificatifs",
      "metaDescription": "Validité minimale du passeport, visas Schengen ou équivalents, conditions d’âge, compagnie aérienne, ressources et erreurs à éviter.",
      "shortAnswer": "Les conditions de l’e-Visa turc ne sont pas identiques pour tous les voyageurs. La nationalité, le document, l’âge, la date d’entrée et les justificatifs peuvent modifier l’admissibilité. Voici comment préparer un dossier qui correspond aux règles de votre passeport.",
      "bosphorasHelp": "Parlons de votre voyage en Turquie. Bosphoras coordonne les transferts, séjours et rendez-vous selon les besoins de votre projet.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Validité du passeport : calculer le minimum",
          "body": "L’article 7 de la loi 6458 prévoit en règle générale une validité du document supérieure de 60 jours à la durée autorisée. Ainsi, une permission de séjour de 30 jours nécessite normalement 90 jours de validité à l’arrivée ; pour 90 jours de séjour, le minimum est de 150 jours. Des conditions propres à certaines nationalités et des exceptions légales existent. Le ministère recommande une marge de six mois.",
          "table": {
            "headers": [
              "Séjour autorisé",
              "Validité minimale à l’entrée"
            ],
            "rows": [
              [
                "30 jours",
                "90 jours"
              ],
              [
                "60 jours",
                "120 jours"
              ],
              [
                "90 jours",
                "150 jours"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Justificatif Schengen, américain, britannique ou irlandais",
          "body": "Lorsque le régime l’exige, présentez une véritable autorisation admissible et valide à l’entrée. Une ancienne autorisation à entrée unique utilisée peut être acceptée si sa validité couvre cette date. Un visa électronique délivré par un autre pays n’est pas admis comme justificatif. Il ne suffit pas de posséder une réservation de rendez-vous pour obtenir un titre de séjour."
        },
        {
          "id": "visa-detail-3",
          "title": "Critères d’âge : des situations précises",
          "body": "Les passeports ordinaires algériens des moins de 15 ans et des plus de 50 ans bénéficient d’une exemption touristique ; les 15–18 et 35–50 ans peuvent relever du parcours électronique avec justificatif admis. Pour l’Irak, le groupe 15–50 ans est soumis à visa, avec possibilité électronique conditionnelle. La Libye utilise des seuils de 16 et 45 ans. En Égypte, les 15–45 ans doivent notamment remplir les conditions documentaires et voyager avec l’une des compagnies mentionnées par le ministère."
        },
        {
          "id": "visa-detail-4",
          "title": "Compagnie aérienne, hôtel et ressources",
          "body": "Selon la demande, des conditions supplémentaires peuvent concerner le transporteur, le billet de retour, la réservation d’hébergement et les ressources disponibles. Pour certains voyageurs égyptiens, le ministère cite Turkish Airlines, AJet, Pegasus, EgyptAir et Air Cairo. Il ne faut pas appliquer cette liste à toutes les nationalités sans distinction ; les conditions figurent sur votre parcours de demande."
        },
        {
          "id": "visa-detail-5",
          "title": "Informations exactes et validité de l’autorisation",
          "body": "Le nom et les autres éléments d’identité doivent coïncider avec le passeport présenté. Le visa délivré ne peut pas être corrigé. Vérifiez également le nombre d’entrées, les dates et la durée. Une arrivée avant la date de validité du visa requiert une nouvelle demande. Une demande payée ne garantit pas l’admission par les autorités de frontière."
        },
        {
          "id": "visa-detail-6",
          "title": "Exemple de vérification avant embarquement",
          "body": "Un voyageur pakistanais sollicitant l’e-Visa conditionnel prépare son passeport, un titre de séjour britannique admissible valide à l’arrivée et les autres documents demandés. Il choisit une date compatible avec la validité des deux documents et conserve les preuves en version hors connexion. S’il ne remplit pas les conditions, il doit organiser un visa consulaire avant son voyage. Bosphoras peut coordonner le calendrier de son projet."
        }
      ],
      "faqs": [
        {
          "question": "Un visa Schengen déjà utilisé peut-il servir ?",
          "answer": "Oui s’il est admissible et reste valide à la date d’entrée, même s’il était à entrée unique."
        },
        {
          "question": "Un e-Visa étranger est-il accepté comme preuve ?",
          "answer": "Non, le portail officiel l’exclut."
        },
        {
          "question": "Un passeport valide 90 jours suffit-il toujours ?",
          "answer": "Non, cela dépend de la durée autorisée et des autres critères."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Portail officiel : nationalités éligibles"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Ministère turc : règles par passeport"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Procédure officielle de demande et paiement"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Documents et validité"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Justificatifs de visa et de résidence"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Nationalités sans visa à l’arrivée"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Demande de visa consulaire"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel de résidence"
        }
      ]
    },
    "en": {
      "title": "Turkey electronic visa requirements 2026: passport and supporting documents",
      "metaDescription": "Understand passport validity, qualifying supporting visas, age rules, airlines and document checks before applying for a Turkish e-Visa.",
      "shortAnswer": "Turkish e-Visa requirements depend on nationality, travel document, age, intended arrival and supporting evidence. Prepare a file matching the rules for your own document.",
      "bosphorasHelp": "Discuss your Turkey visit with Bosphoras to coordinate transfers, accommodation and meetings around your plans.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Calculate minimum passport validity",
          "body": "Article 7 of Law 6458 generally requires another 60 days beyond the authorised stay. Thirty permitted days normally require 90 days of remaining document validity on entry; 90 permitted days require 150. Specific nationality requirements and statutory exceptions apply. The ministry recommends six months of validity.",
          "table": {
            "headers": [
              "Permitted stay",
              "Minimum validity at entry"
            ],
            "rows": [
              [
                "30 days",
                "90 days"
              ],
              [
                "60 days",
                "120 days"
              ],
              [
                "90 days",
                "150 days"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Schengen, US, UK or Irish supporting documents",
          "body": "Where required, present an eligible visa or residence permit valid at arrival. A previously used single-entry visa can be accepted when still valid on that date. Electronic visas from other countries are not accepted as supporting evidence. A residence application appointment alone does not replace an issued permit."
        },
        {
          "id": "visa-detail-3",
          "title": "Specific age criteria",
          "body": "Ordinary Algerian passport holders under 15 and over 50 have a tourist exemption; ages 15–18 and 35–50 may access conditional electronic visas with eligible documents. Iraqi nationals aged 15–50 need visas with a conditional electronic route. Libya's thresholds are 16 and 45. Egyptian applicants aged 15–45 must meet specified documentation and airline requirements."
        },
        {
          "id": "visa-detail-4",
          "title": "Airline, accommodation and means",
          "body": "Additional conditions may relate to the carrier, return ticket, accommodation and sufficient means. For certain Egyptian travellers the ministry names Turkish Airlines, AJet, Pegasus, EgyptAir and Air Cairo. Do not assume that list applies to every nationality; follow the conditions shown for your application."
        },
        {
          "id": "visa-detail-5",
          "title": "Exact identity information and validity",
          "body": "The visa's details must match the passport presented. An issued visa cannot be amended. Check entry count, validity and stay allowance. Arrival before the start date requires a new application. Payment does not guarantee border admission."
        },
        {
          "id": "visa-detail-6",
          "title": "Example of a pre-departure document check",
          "body": "A Pakistani applicant preparing a conditional e-Visa gathers a passport, eligible UK residence permit valid on arrival and all other required evidence. The planned date must fit both documents' validity. Save them offline and use the consular route if the conditions cannot be met. Bosphoras can coordinate the project timetable."
        }
      ],
      "faqs": [
        {
          "question": "Can I use a previously used Schengen visa?",
          "answer": "Yes if eligible and still valid at entry, including a used single-entry visa."
        },
        {
          "question": "Is a foreign e-Visa accepted as proof?",
          "answer": "No, the official portal excludes it."
        },
        {
          "question": "Is 90 days of passport validity always sufficient?",
          "answer": "No; it depends on permitted stay and other conditions."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Official eligible-country list"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "Foreign Ministry: passport-specific rules"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Official application and payment procedure"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Required documents and validity"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Supporting visas and residence permits"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Nationalities not eligible for visa on arrival"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Consular visa application"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official residence portal"
        }
      ]
    },
    "ru": {
      "title": "Условия электронной визы в Турцию 2026: паспорт и документы",
      "metaDescription": "Срок действия паспорта, подтверждающие визы и ВНЖ, возрастные условия, авиакомпании и проверка документов.",
      "shortAnswer": "Условия электронной визы зависят от гражданства, проездного документа, возраста, даты въезда и подтверждений. Подготовьте документы по правилам именно вашего паспорта.",
      "bosphorasHelp": "Bosphoras может организовать трансферы, проживание и встречи с учётом вашего проекта.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Минимальный срок действия паспорта",
          "body": "Статья 7 закона № 6458 обычно требует 60 дополнительных дней сверх разрешённого пребывания. Для 30 дней это означает минимум 90 дней действия документа на дату въезда, для 90 дней — 150. Возможны специальные требования и законные исключения. МИД рекомендует шесть месяцев.",
          "table": {
            "headers": [
              "Разрешённый срок",
              "Минимальная действительность при въезде"
            ],
            "rows": [
              [
                "30 дней",
                "90 дней"
              ],
              [
                "60 дней",
                "120 дней"
              ],
              [
                "90 дней",
                "150 дней"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Виза или ВНЖ Шенгена, США, Великобритании или Ирландии",
          "body": "Если требуется подтверждение, предъявите подходящий документ, действующий на дату въезда. Ранее использованная однократная виза может приниматься, пока её срок не истёк. Электронные визы других государств не являются допустимым подтверждением. Запись на подачу ВНЖ не заменяет выданное разрешение."
        },
        {
          "id": "visa-detail-3",
          "title": "Возрастные условия",
          "body": "Граждане Алжира с обычными паспортами младше 15 и старше 50 освобождены для туризма; в возрасте 15–18 и 35–50 возможна условная электронная виза с подходящим документом. Для Ирака в возрасте 15–50 требуется виза с условной электронной процедурой. Ливия использует пороги 16 и 45. Для египтян 15–45 действуют требования к документу и перевозчику."
        },
        {
          "id": "visa-detail-4",
          "title": "Авиакомпания, жильё и средства",
          "body": "Дополнительные условия могут касаться авиакомпании, обратного билета, жилья и финансов. Для некоторых граждан Египта МИД указывает Turkish Airlines, AJet, Pegasus, EgyptAir и Air Cairo. Этот список не следует распространять на все гражданства; учитывайте требования своей заявки."
        },
        {
          "id": "visa-detail-5",
          "title": "Совпадение данных и срок действия",
          "body": "Сведения в визе должны совпадать с предъявляемым паспортом. Выданную визу изменить нельзя. Проверьте число въездов, даты и разрешённое пребывание. Для прибытия до начала действия нужна новая заявка. Оплата не гарантирует допуск через границу."
        },
        {
          "id": "visa-detail-6",
          "title": "Пример проверки перед вылетом",
          "body": "Гражданин Пакистана для условной электронной визы готовит паспорт, подходящий британский ВНЖ, действующий при въезде, и остальные документы. Дата поездки должна соответствовать срокам обоих документов. Сохраните их без доступа к интернету. Если условия не выполнены, оформляется консульская виза. Bosphoras может согласовать календарь проекта."
        }
      ],
      "faqs": [
        {
          "question": "Подходит ли использованная шенгенская виза?",
          "answer": "Да, если она подходит и действует на дату въезда, даже однократная."
        },
        {
          "question": "Принимается ли иностранная электронная виза?",
          "answer": "Нет, портал исключает её."
        },
        {
          "question": "Всегда ли достаточно 90 дней действия паспорта?",
          "answer": "Нет, это зависит от срока пребывания и других условий."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "Официальный список гражданств"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "МИД Турции: правила по паспорту"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "Официальный порядок подачи и оплаты"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "Документы и сроки действия"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "Подтверждающие визы и ВНЖ"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "Гражданства без визы по прибытии"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "Консульская подача"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "شروط التأشيرة الإلكترونية لتركيا 2026: الجواز والوثائق الداعمة",
      "metaDescription": "صلاحية الجواز والتأشيرات الداعمة وشروط العمر وشركات الطيران والتحقق من الوثائق قبل الطلب.",
      "shortAnswer": "تتحدد شروط الإلكترونية التركية بحسب الجنسية والوثيقة والعمر وتاريخ الدخول والإثباتات. جهز ملفاً مطابقاً للقواعد الخاصة بجوازك.",
      "bosphorasHelp": "تنسق Bosphoras النقل والسكن والاجتماعات وفق احتياجات مشروعك.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "حساب الحد الأدنى لصلاحية الجواز",
          "body": "تطلب المادة 7 من القانون 6458 عموماً 60 يوماً إضافية بعد المدة المصرح بها. تتطلب 30 يوماً عادة صلاحية 90 يوماً عند الوصول، وتتطلب 90 يوماً صلاحية 150 يوماً. توجد شروط خاصة واستثناءات قانونية. وتوصي الوزارة بستة أشهر.",
          "table": {
            "headers": [
              "مدة البقاء",
              "الصلاحية الدنيا عند الدخول"
            ],
            "rows": [
              [
                "30 يوماً",
                "90 يوماً"
              ],
              [
                "60 يوماً",
                "120 يوماً"
              ],
              [
                "90 يوماً",
                "150 يوماً"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "وثائق شنغن وأمريكا وبريطانيا وإيرلندا",
          "body": "عندما يشترط النظام وثيقة داعمة، قدم تأشيرة أو إقامة مؤهلة سارية عند الوصول. قد تقبل تأشيرة دخول واحد سبق استخدامها إذا بقيت سارية في ذلك التاريخ. لا تقبل التأشيرات الإلكترونية الأجنبية كإثبات. ولا يحل موعد تقديم طلب الإقامة محل التصريح الصادر."
        },
        {
          "id": "visa-detail-3",
          "title": "شروط العمر المحددة",
          "body": "يعفى حاملو الجوازات الجزائرية العادية دون 15 وفوق 50 للسياحة، وقد تتاح الإلكترونية المشروطة للأعمار 15–18 و35–50 مع وثيقة مؤهلة. وللعراقيين 15–50 تأشيرة مع إمكانية إلكترونية مشروطة. وفي ليبيا الحدّان 16 و45. وللمصريين 15–45 شروط تتعلق بالوثائق والناقل."
        },
        {
          "id": "visa-detail-4",
          "title": "شركة الطيران والسكن والموارد",
          "body": "قد تشمل الشروط الناقل وتذكرة العودة والسكن والموارد المالية. وتذكر الوزارة لبعض المصريين شركات Turkish Airlines وAJet وPegasus وEgyptAir وAir Cairo. لا تعمم هذه القائمة على جميع الجنسيات، واتبع شروط طلبك."
        },
        {
          "id": "visa-detail-5",
          "title": "تطابق البيانات وصلاحية الوثيقة",
          "body": "يجب تطابق بيانات التأشيرة مع الجواز المقدم. ولا يمكن تعديل التأشيرة الصادرة. راجع عدد الدخول وتواريخ الصلاحية والمدة. يلزم طلب جديد للوصول قبل بداية الصلاحية. لا يضمن الدفع قبول الدخول عند الحدود."
        },
        {
          "id": "visa-detail-6",
          "title": "مثال للتحقق قبل المغادرة",
          "body": "يجهز الباكستاني المتقدم للإلكترونية المشروطة جوازه وإقامة بريطانية مؤهلة سارية عند الوصول وبقية المستندات. يختار تاريخاً يتوافق مع صلاحية الوثيقتين ويحفظ نسخاً دون اتصال. وإذا لم يستوف الشروط، يتقدم للقنصلية. تستطيع Bosphoras تنسيق جدول المشروع."
        }
      ],
      "faqs": [
        {
          "question": "هل تقبل تأشيرة شنغن سبق استخدامها؟",
          "answer": "نعم إذا كانت مؤهلة وسارية عند الدخول حتى لو كانت لدخول واحد."
        },
        {
          "question": "هل تقبل إلكترونية أجنبية كإثبات؟",
          "answer": "لا، تستبعدها المنصة الرسمية."
        },
        {
          "question": "هل تكفي صلاحية جواز 90 يوماً دائماً؟",
          "answer": "لا، يعتمد ذلك على مدة البقاء والشروط الأخرى."
        }
      ],
      "sources": [
        {
          "href": "https://www.evisa.gov.tr/en/info/who-is-eligible-for-e-visa/",
          "label": "القائمة الرسمية للجنسيات المؤهلة"
        },
        {
          "href": "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa",
          "label": "وزارة الخارجية: الشروط حسب الجواز"
        },
        {
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
          "label": "الإجراءات الرسمية للطلب والدفع"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-do-i-need-for-my-e-visa-application/",
          "label": "الوثائق والصلاحية"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/what-are-the-criteria-for-the-validity-of-my-supporting-document-visa-or-residence-permit-from-schengen-or-oecd-member-countries/",
          "label": "التأشيرات والإقامات الداعمة"
        },
        {
          "href": "https://www.evisa.gov.tr/en/info/can-the-citizens-of-all-the-countries-eligible-for-e-visa-obtain-sticker-type-of-visa-on-arrival/",
          "label": "الجنسيات غير المؤهلة للتأشيرة عند الوصول"
        },
        {
          "href": "https://www.konsolosluk.gov.tr/Visa",
          "label": "طلب التأشيرة القنصلية"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        }
      ]
    }
  }
};
