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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
          "href": "https://www.evisa.gov.tr/en/tour/thats/",
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
  },
  "turkey-residence-permit-main": {
    "fr": {
      "title": "Titre de séjour Turquie 2026 : types, durée, conditions et prix",
      "metaDescription": "Quel ikamet choisir en Turquie ? Comparez les six titres de séjour, leurs durées, les documents, le tarif de la carte et la procédure officielle.",
      "shortAnswer": "Pour rester en Turquie au-delà d'une autorisation de court séjour, il faut en principe un titre de séjour correspondant à son motif réel. La loi 6458 prévoit six catégories. Le titre de courte durée peut atteindre deux ans dans le régime général ; la résidence de longue durée est délivrée sans limite de temps sous conditions.",
      "bosphorasHelp": "Bosphoras organise les aspects pratiques de votre installation : recherche de logement, rendez-vous et mise en relation avec des professionnels indépendants. La demande de titre de séjour s'effectue auprès des autorités turques par vous-même ou un représentant habilité ; aucune délivrance n'est garantie.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Les six catégories de résidence",
          "body": "Le tableau distingue les titres de séjour de droit commun et les dispositifs exceptionnels. La durée maximale n'est jamais une promesse de délivrance : elle dépend du motif, des pièces, de la validité du passeport et de la décision administrative. Un permis de travail valide tient généralement lieu de titre de séjour pendant sa validité.",
          "table": {
            "headers": [
              "Type",
              "Durée maximale ou règle",
              "Fondement"
            ],
            "rows": [
              [
                "Courte durée",
                "Jusqu'à 2 ans en général",
                "Motif légal documenté"
              ],
              [
                "Familial",
                "Jusqu'à 3 ans",
                "Sponsor admissible ; durée limitée par son titre"
              ],
              [
                "Étudiant",
                "Selon période d'études",
                "Inscription admissible"
              ],
              [
                "Longue durée",
                "Indéterminée",
                "8 ans continus admissibles et autres critères"
              ],
              [
                "Humanitaire",
                "Durée fixée par l'autorité",
                "Circonstances exceptionnelles"
              ],
              [
                "Victimes de traite",
                "30 jours initialement",
                "Protection spécifique"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Quel titre pour votre projet ?",
          "body": "Pour habiter un logement dont vous êtes propriétaire, développer des relations commerciales ou effectuer des soins, le titre de courte durée peut être pertinent. Le regroupement auprès d'un conjoint turc ou d'un sponsor éligible relève souvent du titre familial. L'inscription dans un établissement d'enseignement peut ouvrir le titre étudiant. Après une durée suffisante de résidence régulière, la résidence de longue durée peut devenir accessible. Acheter un bien ou immatriculer une société ne garantit pas un titre."
        },
        {
          "id": "visa-detail-3",
          "title": "Comment déposer une première demande",
          "body": "Saisissez votre demande sur e-ikamet pendant votre période de séjour légal. Imprimez le formulaire et préparez les originaux et copies exigés pour le rendez-vous dans la province choisie. Le dossier est individuel, y compris pour les enfants. La liste générée par le portail indique les pièces applicables au motif sélectionné. L'administration peut demander des justificatifs supplémentaires."
        },
        {
          "id": "visa-detail-4",
          "title": "Combien coûte un ikamet en 2026 ?",
          "body": "La carte de séjour coûte 964 TL depuis le 1er janvier 2026. Le droit de séjour varie selon la nationalité, la durée et les exemptions de réciprocité. Certains ressortissants sont exonérés de ce droit, jamais du coût de fabrication de la carte. Ajoutez, selon le dossier, assurance, photos et éventuelles traductions ou authentifications. L'inscription en ligne est gratuite, les frais administratifs restant dus selon leur barème."
        },
        {
          "id": "visa-detail-5",
          "title": "Délais, rendez-vous et circulation",
          "body": "Le délai légal de décision est de 90 jours à partir de la remise complète des pièces. Une première demande faite à temps permet en principe d'attendre le rendez-vous avec son formulaire. Après dépôt complet, le document de demande approuvé et les reçus permettent, dans les conditions prévues, un retour en Turquie sous 15 jours. Le formulaire non approuvé n'est pas un visa de retour."
        },
        {
          "id": "visa-detail-6",
          "title": "Après réception de la carte",
          "body": "Contrôlez identité, type de titre, dates et adresse. Enregistrez ou actualisez votre adresse selon les délais administratifs ; un changement d'adresse doit notamment être signalé dans les 20 jours ouvrables. Préparez votre renouvellement dans les 60 jours précédant l'expiration et avant celle-ci. Si le motif change, une demande de transfert peut être nécessaire. Le titre de séjour n'autorise pas automatiquement le travail ni ne fixe seul la résidence fiscale."
        }
      ],
      "faqs": [
        {
          "question": "Un ikamet remplace-t-il un permis de travail ?",
          "answer": "Non. Un permis de travail valide peut tenir lieu de titre de séjour, mais l'inverse n'est pas automatique."
        },
        {
          "question": "La carte coûte-t-elle 964 TL en 2026 ?",
          "answer": "Oui, hors droits de séjour variables et autres frais."
        },
        {
          "question": "Combien de temps faut-il attendre ?",
          "answer": "Le délai officiel est de 90 jours à partir du dossier complet."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres — Direction de la migration"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Procédure et délais officiels"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Barème officiel 2026 des droits et de la carte"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions administratives et pièces justificatives"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Conditions légales et droits du résident"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Permis de travail et droit de séjour"
        }
      ]
    },
    "en": {
      "title": "Turkey residence permit 2026: types, eligibility, duration and fees",
      "metaDescription": "Compare Turkey's six residence permits, eligibility, duration, the 2026 card fee, required documents and official application procedure.",
      "shortAnswer": "Foreigners staying in Turkey beyond their short-stay permission generally need a residence permit reflecting their actual purpose. Law 6458 defines six categories. Ordinary short-term permits can last up to two years; long-term permits are indefinite if the requirements are met.",
      "bosphorasHelp": "Bosphoras coordinates practical relocation arrangements, accommodation and introductions to independent professionals. Residence applications are handled by the Turkish authorities, personally or through an authorised representative; approval is never guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "The six residence permit categories",
          "body": "The table distinguishes ordinary categories and exceptional protection routes. Maximum duration does not guarantee approval for that period: the purpose, documents, passport validity and administrative decision matter. A valid work permit normally serves as a residence permit during its validity.",
          "table": {
            "headers": [
              "Type",
              "Maximum or duration rule",
              "Basis"
            ],
            "rows": [
              [
                "Short-term",
                "Generally up to 2 years",
                "Documented statutory purpose"
              ],
              [
                "Family",
                "Up to 3 years",
                "Eligible sponsor; limited by sponsor's permit"
              ],
              [
                "Student",
                "Study period",
                "Eligible enrolment"
              ],
              [
                "Long-term",
                "Indefinite",
                "8 qualifying continuous years and other criteria"
              ],
              [
                "Humanitarian",
                "Duration set by authority",
                "Exceptional circumstances"
              ],
              [
                "Trafficking victim",
                "Initially 30 days",
                "Specific protection"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Choose the category around your plans",
          "body": "Living in your own home, developing commercial connections or receiving medical care may support a short-term application. Joining a Turkish spouse or eligible sponsor may qualify for family residence. Enrolment in an educational programme may support student residence. After sufficient lawful residence, long-term status may become available. Property ownership or company registration alone does not guarantee permission."
        },
        {
          "id": "visa-detail-3",
          "title": "First applications",
          "body": "Apply through e-ikamet while your stay is lawful. Print the form and prepare the originals and copies for the appointment in your province. Every foreigner needs an individual application, including children. The portal generates the document list for the selected purpose; the authority may request additional evidence."
        },
        {
          "id": "visa-detail-4",
          "title": "How much does residence cost in 2026?",
          "body": "The residence card fee is TRY 964 from 1 January 2026. Separate residence duties depend on nationality, duration and reciprocity exemptions. Some nationalities are exempt from the duty but none from the card fee. Budget for insurance, photographs and any required translations or authentication. Applying online is free, although statutory fees remain payable."
        },
        {
          "id": "visa-detail-5",
          "title": "Processing and travel while waiting",
          "body": "The statutory decision period is 90 days from submission of complete documents. A timely first application generally permits waiting until the appointment with the application form. After full submission, the approved application document and receipts may enable return within 15 days under the applicable rules. An unapproved online form is not a re-entry visa."
        },
        {
          "id": "visa-detail-6",
          "title": "After your card arrives",
          "body": "Verify identity, category, dates and address. Register or update your address within the administrative deadlines; an address change must generally be notified within 20 working days. Apply to renew in the final 60 days before expiry and before the actual expiry date. A change of purpose may require transfer. Residence alone neither authorises employment nor establishes tax residence automatically."
        }
      ],
      "faqs": [
        {
          "question": "Does a residence permit replace a work permit?",
          "answer": "No. A valid work permit can serve as residence permission, not automatically vice versa."
        },
        {
          "question": "Is the 2026 card fee TRY 964?",
          "answer": "Yes, excluding separate residence duties and incidental expenses."
        },
        {
          "question": "How long does processing take?",
          "answer": "The official period is 90 days from submission of the complete file."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories — Migration Presidency"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Official applications and processing times"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Official 2026 permit and card fees"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Residence application questions and documents"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Legal conditions and residents' rights"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Work permits and residence status"
        }
      ]
    },
    "ru": {
      "title": "Вид на жительство в Турции 2026: виды, сроки, условия и стоимость",
      "metaDescription": "Шесть видов ВНЖ в Турции: сроки, требования, документы, стоимость карты и официальный порядок оформления.",
      "shortAnswer": "Для проживания в Турции сверх разрешённого краткого срока обычно нужен ВНЖ, соответствующий фактической цели. Закон № 6458 предусматривает шесть категорий. Обычный краткосрочный ВНЖ может выдаваться до двух лет, долгосрочный — бессрочно при выполнении условий.",
      "bosphorasHelp": "Bosphoras координирует практические вопросы переезда, поиск жилья и встречи с независимыми специалистами. Заявление подаётся в турецкие органы лично или через уполномоченного представителя; выдача не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Шесть категорий ВНЖ",
          "body": "Таблица разделяет обычные основания и исключительные защитные процедуры. Максимальный срок не гарантирует выдачу на этот период: учитываются цель, документы, срок паспорта и решение органа. Действующее разрешение на работу обычно заменяет ВНЖ на период своего действия.",
          "table": {
            "headers": [
              "Вид",
              "Максимум или правило срока",
              "Основание"
            ],
            "rows": [
              [
                "Краткосрочный",
                "Обычно до 2 лет",
                "Подтверждённая законная цель"
              ],
              [
                "Семейный",
                "До 3 лет",
                "Подходящий спонсор; не дольше его ВНЖ"
              ],
              [
                "Студенческий",
                "По периоду обучения",
                "Подходящее зачисление"
              ],
              [
                "Долгосрочный",
                "Бессрочно",
                "8 учитываемых непрерывных лет и другие условия"
              ],
              [
                "Гуманитарный",
                "Срок устанавливает орган",
                "Исключительные обстоятельства"
              ],
              [
                "Для жертв торговли людьми",
                "Первоначально 30 дней",
                "Специальная защита"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Как выбрать основание",
          "body": "Собственное жильё для проживания, развитие деловых связей и лечение могут быть основаниями краткосрочного ВНЖ. Воссоединение с супругом — гражданином Турции или подходящим спонсором — может относиться к семейному ВНЖ. Обучение даёт основание для студенческого ВНЖ. После необходимого срока законного проживания возможен долгосрочный статус. Покупка квартиры или регистрация фирмы не гарантируют ВНЖ."
        },
        {
          "id": "visa-detail-3",
          "title": "Первая подача заявления",
          "body": "Заполните заявление на e-ikamet в пределах законного срока. Распечатайте форму и подготовьте оригиналы и копии для приёма в выбранной провинции. Каждый иностранец, включая ребёнка, подаёт отдельное заявление. Портал формирует список документов по цели; администрация может запросить дополнительные сведения."
        },
        {
          "id": "visa-detail-4",
          "title": "Сколько стоит ВНЖ в 2026 году?",
          "body": "Стоимость карты с 1 января 2026 года составляет 964 лиры. Отдельный сбор зависит от гражданства, срока и освобождений на основе взаимности. Некоторые гражданства освобождены от сбора, но не от оплаты карты. Учитывайте страховку, фотографии, перевод и заверение при необходимости. Онлайн-подача бесплатна, установленные сборы оплачиваются отдельно."
        },
        {
          "id": "visa-detail-5",
          "title": "Рассмотрение и поездки в ожидании",
          "body": "Официальный срок решения — 90 дней с момента предоставления полного комплекта. Своевременная первая заявка обычно позволяет ожидать приёма с формой заявления. После полного оформления утверждённый документ и квитанции могут позволить вернуться в Турцию в течение 15 дней при соблюдении условий. Неутверждённая онлайн-форма не является визой для возвращения."
        },
        {
          "id": "visa-detail-6",
          "title": "После получения карты",
          "body": "Проверьте данные, категорию, даты и адрес. Зарегистрируйте или обновите адрес в установленные сроки; об изменении обычно сообщают в течение 20 рабочих дней. Продление оформляется в последние 60 дней до истечения срока и до самой даты окончания. При изменении цели может потребоваться смена категории. ВНЖ сам по себе не разрешает работу и не определяет налоговое резидентство."
        }
      ],
      "faqs": [
        {
          "question": "Заменяет ли ВНЖ разрешение на работу?",
          "answer": "Нет. Действующее разрешение на работу может заменять ВНЖ, но не наоборот."
        },
        {
          "question": "Карта стоит 964 лиры?",
          "answer": "Да, без отдельного сбора и сопутствующих расходов."
        },
        {
          "question": "Сколько рассматривают заявление?",
          "answer": "Официальный срок — 90 дней с момента комплектной подачи."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ — миграционное управление"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Официальный порядок и сроки"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Официальные сборы и стоимость карты на 2026 год"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Вопросы оформления и документы"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Правовые требования и права резидентов"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Разрешение на работу и проживание"
        }
      ]
    },
    "ar": {
      "title": "تصريح الإقامة في تركيا 2026: الأنواع والمدد والشروط والرسوم",
      "metaDescription": "قارن أنواع الإقامة الستة في تركيا وشروطها ومددها ورسوم البطاقة لعام 2026 والوثائق وخطوات التقديم الرسمية.",
      "shortAnswer": "يحتاج الأجنبي الذي يريد البقاء بعد مدة الزيارة القصيرة عادة إلى تصريح إقامة يتناسب مع غرضه الفعلي. يحدد القانون 6458 ستة أنواع. وقد تصل الإقامة القصيرة العادية إلى سنتين، بينما تمنح الإقامة الطويلة دون مدة محددة عند استيفاء الشروط.",
      "bosphorasHelp": "تنسق Bosphoras ترتيبات الانتقال والسكن والمواعيد مع المختصين المستقلين. يقدم طلب الإقامة إلى السلطات التركية شخصياً أو عبر ممثل مخول، ولا يمكن ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "أنواع تصاريح الإقامة الستة",
          "body": "يميز الجدول بين الأنواع العادية والإجراءات الاستثنائية للحماية. الحد الأقصى لا يضمن الإصدار للمدة نفسها؛ إذ يتوقف على الغرض والوثائق وصلاحية الجواز والقرار الإداري. ويعتبر تصريح العمل الساري عادة تصريح إقامة طوال صلاحيته.",
          "table": {
            "headers": [
              "النوع",
              "الحد أو قاعدة المدة",
              "الأساس"
            ],
            "rows": [
              [
                "قصيرة الأجل",
                "حتى سنتين عموماً",
                "غرض قانوني موثق"
              ],
              [
                "عائلية",
                "حتى 3 سنوات",
                "كفيل مؤهل؛ لا تتجاوز تصريحه"
              ],
              [
                "طالب",
                "وفق مدة الدراسة",
                "تسجيل دراسي مؤهل"
              ],
              [
                "طويلة الأجل",
                "غير محددة",
                "8 سنوات متواصلة مؤهلة وشروط أخرى"
              ],
              [
                "إنسانية",
                "مدة تحددها السلطات",
                "ظروف استثنائية"
              ],
              [
                "ضحايا الاتجار بالبشر",
                "30 يوماً أولاً",
                "حماية خاصة"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "اختيار النوع حسب المشروع",
          "body": "قد يناسب التصريح القصير مالك منزل يسكن فيه أو من يقيم علاقات تجارية أو يتلقى العلاج. وقد تستند الإقامة العائلية إلى زوج تركي أو كفيل مؤهل. ويتيح التسجيل الدراسي أساساً لإقامة الطالب. وبعد المدة الكافية من الإقامة القانونية يمكن بحث الإقامة الطويلة. لا يضمن شراء العقار أو تأسيس الشركة الموافقة."
        },
        {
          "id": "visa-detail-3",
          "title": "طريقة تقديم الطلب الأول",
          "body": "قدّم عبر e-ikamet أثناء مدة بقائك القانوني. اطبع الاستمارة وجهز الأصول والنسخ المطلوبة لموعد الولاية المختارة. لكل أجنبي طلب مستقل بما في ذلك الأطفال. تحدد المنصة المستندات حسب الغرض وقد تطلب الإدارة وثائق إضافية."
        },
        {
          "id": "visa-detail-4",
          "title": "كم تبلغ تكلفة الإقامة في 2026؟",
          "body": "تبلغ رسوم بطاقة الإقامة 964 ليرة منذ 1 يناير 2026. وتختلف رسوم التصريح المنفصلة حسب الجنسية والمدة والإعفاءات المتبادلة. وقد تعفى جنسيات من رسوم التصريح لكن الجميع يدفع رسم البطاقة. أضف التأمين والصور والترجمة والتصديق عند الحاجة. تقديم الطلب الإلكتروني مجاني مع بقاء الرسوم القانونية المستحقة."
        },
        {
          "id": "visa-detail-5",
          "title": "المدة والسفر أثناء الانتظار",
          "body": "المدة القانونية للبت 90 يوماً من تاريخ تقديم المستندات كاملة. يسمح الطلب الأول المقدم في الوقت عادة بالبقاء حتى الموعد مع الاستمارة. وبعد استكمال الملف، قد يتيح مستند الطلب المعتمد مع الإيصالات العودة خلال 15 يوماً وفق الشروط. لا تعد الاستمارة الإلكترونية غير المعتمدة تأشيرة عودة."
        },
        {
          "id": "visa-detail-6",
          "title": "بعد استلام البطاقة",
          "body": "راجع الهوية والنوع والتواريخ والعنوان. سجّل أو حدّث عنوانك ضمن المواعيد؛ ويجب عادة الإبلاغ عن تغييره خلال 20 يوم عمل. قدّم التجديد خلال آخر 60 يوماً وقبل انتهاء التصريح. وقد يلزم تغيير النوع إذا تغير الغرض. لا تمنح الإقامة وحدها حق العمل ولا تحدد تلقائياً الإقامة الضريبية."
        }
      ],
      "faqs": [
        {
          "question": "هل تحل الإقامة محل تصريح العمل؟",
          "answer": "لا؛ قد يحل تصريح العمل الساري محل الإقامة وليس العكس تلقائياً."
        },
        {
          "question": "هل رسم البطاقة 964 ليرة؟",
          "answer": "نعم، دون رسوم التصريح والمصاريف الأخرى."
        },
        {
          "question": "كم يستغرق البت؟",
          "answer": "المدة الرسمية 90 يوماً من اكتمال المستندات."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة — رئاسة إدارة الهجرة"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "الإجراءات والمدد الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "الرسوم الرسمية للإقامة والبطاقة لعام 2026"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "أسئلة الإقامة والوثائق"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "الشروط القانونية وحقوق المقيمين"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "تصريح العمل وحق الإقامة"
        }
      ]
    }
  },
  "turkey-residence-permit-foreigners": {
    "fr": {
      "title": "Permis de résidence en Turquie 2026 : dossier, assurance et démarches",
      "metaDescription": "Préparez votre permis de résidence en Turquie : passeport, justificatif de logement, assurance santé, ressources, rendez-vous et frais de 2026.",
      "shortAnswer": "Une demande de résidence réussie commence par un motif légal et des documents cohérents. Le portail e-ikamet permet une première demande, un renouvellement ou un transfert de catégorie ; les pièces exigées diffèrent selon la procédure.",
      "bosphorasHelp": "Bosphoras organise les aspects pratiques de votre installation : recherche de logement, rendez-vous et mise en relation avec des professionnels indépendants. La demande de titre de séjour s'effectue auprès des autorités turques par vous-même ou un représentant habilité ; aucune délivrance n'est garantie.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Passeport et calendrier",
          "body": "Le passeport doit généralement être valable 60 jours au-delà du titre sollicité. Pour demander un an de résidence, il faut donc prévoir une validité couvrant cette année et 60 jours supplémentaires. Faites la première demande avant la fin du séjour autorisé. Un titre demandé ne prolonge pas en lui-même un visa expiré sans procédure régulière."
        },
        {
          "id": "visa-detail-2",
          "title": "Adresse et logement",
          "body": "Préparez le titre de propriété, le bail notarié ou les autres preuves d'hébergement admises selon votre cas. L'adresse renseignée doit correspondre au lieu de vie réel. Si une personne vous héberge, des engagements et documents complémentaires peuvent être demandés. Certaines zones sont fermées à de nouvelles inscriptions d'étrangers ; vérifiez l'admissibilité de l'adresse avant de signer un bail."
        },
        {
          "id": "visa-detail-3",
          "title": "Assurance et ressources",
          "body": "Pour la période sollicitée, présentez une assurance reconnue, sauf exemption applicable. Une attestation SGK, un droit découlant d'un accord bilatéral ou un contrat privé conforme peuvent convenir selon la situation. Préparez des justificatifs de ressources authentiques : revenus, pension, relevés bancaires ou activité professionnelle. Les critères financiers dépendent du titre, et le sponsor familial a des exigences spécifiques."
        },
        {
          "id": "visa-detail-4",
          "title": "Documents familiaux et étrangers",
          "body": "Un acte de mariage ou de naissance étranger peut nécessiter apostille ou légalisation et traduction turque certifiée. Les enfants disposent de leur dossier individuel ; les justificatifs d'autorité parentale peuvent être nécessaires. Les exigences d'apostille dépendent du pays émetteur et des conventions. Les documents d'identité et d'état civil doivent utiliser des données concordantes."
        },
        {
          "id": "visa-detail-5",
          "title": "Rendez-vous, paiements et pièces manquantes",
          "body": "Le portail fixe la liste de pièces et les modalités de rendez-vous. L'inscription est gratuite. La carte coûte 964 TL en 2026 ; le droit de séjour est calculé selon le dossier. Présentez les reçus et conservez les originaux disponibles. Si des pièces complémentaires sont demandées, respectez la date indiquée dans la notification ; un dossier incomplet non régularisé peut être annulé.",
          "table": {
            "headers": [
              "Poste",
              "Coût 2026"
            ],
            "rows": [
              [
                "Demande et rendez-vous e-ikamet",
                "0 TL"
              ],
              [
                "Carte individuelle",
                "964 TL"
              ],
              [
                "3 cartes",
                "2 892 TL"
              ],
              [
                "Droit de séjour",
                "Selon nationalité et durée"
              ],
              [
                "Assurance, traduction et autres pièces",
                "Selon devis et situation"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-6",
          "title": "Exemple concret de préparation",
          "body": "Un couple et un enfant souhaitent vivre un an à Istanbul. Avant de louer, ils déterminent le motif légal de chaque demande. Ils préparent trois passeports, documents d'état civil, preuves de logement, couverture santé et justificatifs financiers. Le coût des trois cartes s'élève à 2 892 TL, hors droits, assurance et autres frais. Ils déposent les demandes à temps et gardent les confirmations de rendez-vous."
        }
      ],
      "faqs": [
        {
          "question": "Une seule demande est-elle possible pour toute la famille ?",
          "answer": "Non, chaque étranger reçoit un titre et une demande individuels."
        },
        {
          "question": "Faut-il un bail pour tous les dossiers ?",
          "answer": "Non. Les justificatifs dépendent du logement et du motif."
        },
        {
          "question": "Le rendez-vous officiel est-il payant ?",
          "answer": "La demande et la prise de rendez-vous via e-ikamet sont gratuites."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres — Direction de la migration"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Procédure et délais officiels"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Barème officiel 2026 des droits et de la carte"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions administratives et pièces justificatives"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Conditions légales et droits du résident"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Permis de travail et droit de séjour"
        }
      ]
    },
    "en": {
      "title": "Turkey residence permit for foreigners 2026: documents and application",
      "metaDescription": "Prepare passports, accommodation evidence, health insurance, funds, family records, the appointment and 2026 residence fees.",
      "shortAnswer": "A residence application starts with a lawful purpose and consistent evidence. The e-ikamet portal handles first, extension and transfer applications, with a document list specific to the procedure.",
      "bosphorasHelp": "Bosphoras coordinates practical relocation arrangements, accommodation and introductions to independent professionals. Residence applications are handled by the Turkish authorities, personally or through an authorised representative; approval is never guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Passport and legal timeline",
          "body": "The passport generally must remain valid for 60 days beyond the requested permit. For one year of residence, allow that year plus 60 days. File a first application before lawful short-stay permission ends. Merely wanting a residence permit does not extend an expired visa."
        },
        {
          "id": "visa-detail-2",
          "title": "Accommodation and address",
          "body": "Prepare the title deed, notarised lease or other accepted accommodation documents appropriate to the case. The address must reflect your actual home. Staying with a host can require signed undertakings and additional evidence. Some areas are closed to new foreign registrations; establish address eligibility before committing to a lease."
        },
        {
          "id": "visa-detail-3",
          "title": "Insurance and financial means",
          "body": "Provide recognised coverage for the requested period unless exempt. Eligible SGK rights, bilateral arrangements or compliant private policies may qualify. Prepare genuine income, pension, bank or business records. Financial criteria depend on the category; family sponsors face specific requirements."
        },
        {
          "id": "visa-detail-4",
          "title": "Family and foreign civil documents",
          "body": "Foreign marriage or birth certificates may require apostille or legalisation and certified Turkish translation. Each child has an individual application, with custody or parental-consent evidence where required. Authentication depends on the issuing country and treaties. Ensure identity and civil records are consistent."
        },
        {
          "id": "visa-detail-5",
          "title": "Appointment, payment and missing documents",
          "body": "The portal sets the applicable document list and appointment arrangements. Registration is free. The 2026 card fee is TRY 964, with a separate residence duty based on the case. Keep receipts and originals. If additional evidence is requested, meet the deadline specified in the notice; an unresolved incomplete file may be cancelled.",
          "table": {
            "headers": [
              "Item",
              "2026 cost"
            ],
            "rows": [
              [
                "Online application and appointment",
                "TRY 0"
              ],
              [
                "Individual card",
                "TRY 964"
              ],
              [
                "Three cards",
                "TRY 2,892"
              ],
              [
                "Residence duty",
                "Nationality and duration dependent"
              ],
              [
                "Insurance, translations and documents",
                "By quotation and circumstances"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-6",
          "title": "Example: preparing for a family of three",
          "body": "A couple and one child plan a year in Istanbul. Before renting, identify each applicant's lawful purpose. Prepare three passports, civil documents, accommodation evidence, health cover and financial evidence. Three cards cost TRY 2,892 before duties, insurance and incidentals. Submit in time and retain appointment confirmations."
        }
      ],
      "faqs": [
        {
          "question": "Can the entire family submit a single application?",
          "answer": "No, each foreigner receives an individual permit and application."
        },
        {
          "question": "Is a lease always mandatory?",
          "answer": "No, evidence depends on the accommodation and residence basis."
        },
        {
          "question": "Is the government appointment paid?",
          "answer": "No, the e-ikamet appointment and online submission are free."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories — Migration Presidency"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Official applications and processing times"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Official 2026 permit and card fees"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Residence application questions and documents"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Legal conditions and residents' rights"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Work permits and residence status"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ в Турции для иностранцев 2026: документы и оформление",
      "metaDescription": "Подготовьте паспорт, подтверждение жилья, страховку, финансовые и семейные документы, запись и сборы на ВНЖ.",
      "shortAnswer": "Заявление на ВНЖ начинается с законной цели и согласованных документов. Через e-ikamet подают первое заявление, продление или переход на другую категорию; список документов зависит от процедуры.",
      "bosphorasHelp": "Bosphoras координирует практические вопросы переезда, поиск жилья и встречи с независимыми специалистами. Заявление подаётся в турецкие органы лично или через уполномоченного представителя; выдача не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Паспорт и сроки",
          "body": "Паспорт обычно должен действовать ещё 60 дней после запрашиваемого срока ВНЖ. Для проживания на год нужна действительность на год и дополнительные 60 дней. Первое заявление подавайте до окончания законного краткого пребывания. Само намерение получить ВНЖ не продлевает просроченную визу."
        },
        {
          "id": "visa-detail-2",
          "title": "Жильё и адрес",
          "body": "Подготовьте tapu, нотариальный договор аренды или другие подходящие подтверждения жилья. Адрес должен соответствовать фактическому проживанию. При проживании у принимающего лица могут потребоваться обязательства и дополнительные документы. Некоторые районы закрыты для новой регистрации иностранцев; проверьте адрес до подписания аренды."
        },
        {
          "id": "visa-detail-3",
          "title": "Страховка и средства",
          "body": "На запрашиваемый период представьте признанную страховку, если нет законного освобождения. Могут подходить права SGK, международный договор или соответствующий частный полис. Подготовьте подлинные документы о доходах, пенсии, счетах или бизнесе. Финансовые требования зависят от категории, для семейного спонсора действуют особые критерии."
        },
        {
          "id": "visa-detail-4",
          "title": "Семейные и иностранные документы",
          "body": "Иностранные свидетельства о браке и рождении могут требовать апостиля или легализации и заверенного перевода на турецкий. Каждому ребёнку оформляют отдельное заявление, при необходимости с документами об опеке и согласии родителей. Заверение зависит от страны выдачи и договоров. Сведения во всех документах должны совпадать."
        },
        {
          "id": "visa-detail-5",
          "title": "Приём, сборы и недостающие документы",
          "body": "Портал определяет перечень и запись. Онлайн-подача бесплатна. Карта в 2026 году стоит 964 лиры, отдельный сбор рассчитывается по делу. Сохраняйте квитанции и оригиналы. При запросе дополнительных документов соблюдайте срок уведомления; некомплектное заявление может быть отменено.",
          "table": {
            "headers": [
              "Позиция",
              "Стоимость 2026"
            ],
            "rows": [
              [
                "Онлайн-заявка и запись",
                "0 лир"
              ],
              [
                "Индивидуальная карта",
                "964 лиры"
              ],
              [
                "Три карты",
                "2 892 лиры"
              ],
              [
                "Сбор за проживание",
                "Зависит от гражданства и срока"
              ],
              [
                "Страховка, переводы и документы",
                "По тарифу и обстоятельствам"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-6",
          "title": "Пример семьи из трёх человек",
          "body": "Супруги с ребёнком хотят жить в Стамбуле год. До аренды они определяют законное основание каждого заявления. Готовят три паспорта, семейные документы, подтверждение жилья, страховку и финансовые сведения. Три карты стоят 2 892 лиры без иных сборов и расходов. Подать заявления следует своевременно и сохранить подтверждения записи."
        }
      ],
      "faqs": [
        {
          "question": "Можно подать одно заявление на семью?",
          "answer": "Нет, каждому иностранцу оформляется отдельный документ."
        },
        {
          "question": "Обязателен ли договор аренды?",
          "answer": "Нет, подтверждение зависит от жилья и основания."
        },
        {
          "question": "Платная ли запись?",
          "answer": "Нет, подача и запись в e-ikamet бесплатны."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ — миграционное управление"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Официальный порядок и сроки"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Официальные сборы и стоимость карты на 2026 год"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Вопросы оформления и документы"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Правовые требования и права резидентов"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Разрешение на работу и проживание"
        }
      ]
    },
    "ar": {
      "title": "إقامة تركيا للأجانب 2026: المستندات والتأمين وخطوات الطلب",
      "metaDescription": "جهز جواز السفر وإثبات السكن والتأمين والموارد ووثائق الأسرة والموعد ورسوم الإقامة لعام 2026.",
      "shortAnswer": "يبدأ طلب الإقامة بتحديد غرض قانوني ووثائق متسقة. تتيح منصة e-ikamet الطلب الأول والتجديد وتغيير النوع، وتختلف المستندات بحسب الإجراء.",
      "bosphorasHelp": "تنسق Bosphoras ترتيبات الانتقال والسكن والمواعيد مع المختصين المستقلين. يقدم طلب الإقامة إلى السلطات التركية شخصياً أو عبر ممثل مخول، ولا يمكن ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "الجواز والمواعيد القانونية",
          "body": "يجب عادة أن تزيد صلاحية الجواز 60 يوماً على مدة الإقامة المطلوبة. ولطلب سنة يلزم تغطية السنة وستين يوماً إضافية. قدّم طلبك الأول قبل انتهاء البقاء القانوني. لا يمدد مجرد الرغبة في الإقامة تأشيرة منتهية."
        },
        {
          "id": "visa-detail-2",
          "title": "السكن والعنوان",
          "body": "جهز سند الملكية أو عقد الإيجار الموثق أو إثبات السكن المقبول حسب الحالة. يجب أن يكون العنوان مكان إقامتك الفعلي. وقد يتطلب السكن لدى مضيف تعهدات ووثائق إضافية. بعض المناطق مغلقة أمام تسجيل أجانب جدد، فتحقق من العنوان قبل توقيع العقد."
        },
        {
          "id": "visa-detail-3",
          "title": "التأمين والموارد المالية",
          "body": "قدم تغطية معترفاً بها طوال المدة المطلوبة ما لم ينطبق إعفاء. قد تقبل حقوق SGK أو اتفاقية دولية أو وثيقة خاصة مطابقة. جهز مستندات حقيقية للدخل أو المعاش أو الحساب البنكي أو النشاط. تختلف الشروط المالية حسب النوع، وتوجد شروط خاصة لكفيل الأسرة."
        },
        {
          "id": "visa-detail-4",
          "title": "وثائق الأسرة والمستندات الأجنبية",
          "body": "قد يلزم تصديق أبوستيل أو تصديق قنصلي وترجمة تركية معتمدة لشهادات الزواج والميلاد الأجنبية. لكل طفل طلب مستقل وقد تطلب وثائق الحضانة وموافقة الوالدين. يعتمد التصديق على بلد الإصدار والاتفاقيات. يجب تطابق البيانات في جميع الوثائق."
        },
        {
          "id": "visa-detail-5",
          "title": "الموعد والدفع واستكمال المستندات",
          "body": "تحدد المنصة المستندات والموعد. التقديم الإلكتروني مجاني. وتكلفة البطاقة في 2026 هي 964 ليرة مع رسم إقامة منفصل حسب الملف. احتفظ بالإيصالات والأصول. عند طلب وثائق إضافية التزم بالمهلة الواردة في الإخطار؛ وقد يلغى الملف غير المكتمل.",
          "table": {
            "headers": [
              "البند",
              "تكلفة 2026"
            ],
            "rows": [
              [
                "الطلب والموعد الإلكتروني",
                "0 ليرة"
              ],
              [
                "بطاقة فردية",
                "964 ليرة"
              ],
              [
                "ثلاث بطاقات",
                "2,892 ليرة"
              ],
              [
                "رسم التصريح",
                "بحسب الجنسية والمدة"
              ],
              [
                "التأمين والترجمة والوثائق",
                "بحسب العرض والحالة"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-6",
          "title": "مثال لأسرة من ثلاثة أفراد",
          "body": "يريد زوجان وطفل الإقامة سنة في إسطنبول. قبل الإيجار يحددان الأساس القانوني لكل طلب. يجهزان ثلاثة جوازات ووثائق الأسرة والسكن والتغطية الصحية والموارد. تبلغ تكلفة البطاقات الثلاث 2,892 ليرة دون الرسوم الأخرى والتأمين. يقدمان الطلبات في المدة ويحفظان إثبات الموعد."
        }
      ],
      "faqs": [
        {
          "question": "هل يكفي طلب واحد للأسرة؟",
          "answer": "لا، لكل أجنبي طلب وتصريح مستقل."
        },
        {
          "question": "هل عقد الإيجار إلزامي دائماً؟",
          "answer": "لا، يعتمد الإثبات على السكن والغرض."
        },
        {
          "question": "هل الموعد الرسمي مدفوع؟",
          "answer": "لا، الطلب والموعد عبر e-ikamet مجانيان."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة — رئاسة إدارة الهجرة"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "الإجراءات والمدد الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "الرسوم الرسمية للإقامة والبطاقة لعام 2026"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "أسئلة الإقامة والوثائق"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "الشروط القانونية وحقوق المقيمين"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "تصريح العمل وحق الإقامة"
        }
      ]
    }
  },
  "turkey-ikamet-foreigners": {
    "fr": {
      "title": "Ikamet Turquie 2026 : carte de séjour, démarches et droits",
      "metaDescription": "Comprenez l'ikamet turc : demande officielle, coût de la carte, attente, voyage à l'étranger, renouvellement et droits.",
      "shortAnswer": "L'ikamet désigne couramment la carte de titre de séjour turque. Elle matérialise un droit de séjour pour un motif déterminé. Elle n'est ni un visa touristique, ni un passeport, ni une carte de citoyenneté.",
      "bosphorasHelp": "Bosphoras organise les aspects pratiques de votre installation : recherche de logement, rendez-vous et mise en relation avec des professionnels indépendants. La demande de titre de séjour s'effectue auprès des autorités turques par vous-même ou un représentant habilité ; aucune délivrance n'est garantie.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "De l'entrée à la carte",
          "body": "Vérifiez vos jours de séjour disponibles, choisissez le titre correspondant au motif réel et présentez votre demande sur e-ikamet. La première demande doit être effectuée pendant le séjour régulier. Le portail remet un formulaire, puis l'administration examine les documents et délivre, si le dossier est accepté, une carte individuelle."
        },
        {
          "id": "visa-detail-2",
          "title": "Attendre sans perdre ses droits",
          "body": "Pour les demandes déposées dans les délais, le formulaire permet de rester jusqu'au rendez-vous dans les conditions officielles. Après dépôt complet, le délai de décision est normalement de 90 jours. Conservez la preuve de présentation, les reçus, les éventuelles demandes de compléments et l'adresse de livraison. Le statut peut être suivi via le portail officiel."
        },
        {
          "id": "visa-detail-3",
          "title": "Le prix et les modes de paiement",
          "body": "Depuis janvier 2026, la fabrication de la carte coûte 964 TL. En plus, un droit de séjour peut être calculé en fonction de la nationalité et de la durée. Le portail et l'administration indiquent le montant exact. La demande en ligne est gratuite. N'achetez pas de rendez-vous à un intermédiaire ni de fausses preuves de logement.",
          "table": {
            "headers": [
              "Poste",
              "Coût 2026"
            ],
            "rows": [
              [
                "Demande et rendez-vous e-ikamet",
                "0 TL"
              ],
              [
                "Carte individuelle",
                "964 TL"
              ],
              [
                "3 cartes",
                "2 892 TL"
              ],
              [
                "Droit de séjour",
                "Selon nationalité et durée"
              ],
              [
                "Assurance, traduction et autres pièces",
                "Selon devis et situation"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Sortir de Turquie pendant l'instruction",
          "body": "Après remise complète, un document de demande approuvé par la Direction de la migration, accompagné des reçus, permet des sorties et retours sous réserve d'un retour dans les 15 jours. Pour un déplacement plus long, les règles de visa s'appliquent. Ne confondez pas la simple confirmation de rendez-vous avec le document officiel approuvé."
        },
        {
          "id": "visa-detail-5",
          "title": "Ce que l'ikamet permet et ne permet pas",
          "body": "La carte permet de résider légalement pendant sa validité, selon son motif. Elle facilite certaines démarches quotidiennes mais ne garantit pas qu'une banque ouvrira un compte. Elle ne donne pas automatiquement droit à un emploi. Le numéro d'identification étranger n'est pas un numéro de citoyenneté. Les droits à la sécurité sociale et la fiscalité suivent leurs propres règles."
        },
        {
          "id": "visa-detail-6",
          "title": "Renouvellement et déplacements de domicile",
          "body": "Déposez un renouvellement dans les 60 jours avant expiration et avant celle-ci. Lors d'un déménagement, signalez le changement dans les 20 jours ouvrables ; un changement de province implique une procédure adaptée. Si votre motif n'est plus celui de la carte, examinez une demande de transfert. Conservez vos anciennes cartes et l'historique des séjours pour les démarches futures."
        }
      ],
      "faqs": [
        {
          "question": "La carte permet-elle de travailler ?",
          "answer": "Non, sauf autorisation ou exemption distincte."
        },
        {
          "question": "Peut-on quitter la Turquie pendant l'attente ?",
          "answer": "Oui sous les conditions du document de demande approuvé, des reçus et du retour dans les 15 jours."
        },
        {
          "question": "Quand renouveler ?",
          "answer": "Dans les 60 jours avant l'expiration et avant la date limite."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres — Direction de la migration"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Procédure et délais officiels"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Barème officiel 2026 des droits et de la carte"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions administratives et pièces justificatives"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Conditions légales et droits du résident"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Permis de travail et droit de séjour"
        }
      ]
    },
    "en": {
      "title": "Turkey ikamet 2026: residence card, application and rights",
      "metaDescription": "Find out how the Turkish ikamet card works, official applications, card fees, waiting periods, overseas travel and renewals.",
      "shortAnswer": "Ikamet commonly refers to the Turkish residence permit card evidencing permission to live in Turkey for a specific purpose. It is not a tourist visa, passport or citizenship document.",
      "bosphorasHelp": "Bosphoras coordinates practical relocation arrangements, accommodation and introductions to independent professionals. Residence applications are handled by the Turkish authorities, personally or through an authorised representative; approval is never guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "From entry to the card",
          "body": "Determine your remaining lawful days and select the residence type matching your real purpose. Apply via e-ikamet during lawful stay. The portal issues a form; after examination, eligible applicants receive an individual card."
        },
        {
          "id": "visa-detail-2",
          "title": "Waiting for a decision",
          "body": "A timely application form generally permits staying until the appointment under official conditions. After complete submission, the normal statutory decision period is 90 days. Retain proof of submission, receipts, any requests for further evidence and the delivery address. Follow status through the official portal."
        },
        {
          "id": "visa-detail-3",
          "title": "Card cost and payment",
          "body": "Since January 2026 the card fee is TRY 964. A separate residence duty may apply according to nationality and duration. Obtain the exact amount from the portal and authority. Online filing is free. Do not purchase appointments or use fabricated accommodation evidence.",
          "table": {
            "headers": [
              "Item",
              "2026 cost"
            ],
            "rows": [
              [
                "Online application and appointment",
                "TRY 0"
              ],
              [
                "Individual card",
                "TRY 964"
              ],
              [
                "Three cards",
                "TRY 2,892"
              ],
              [
                "Residence duty",
                "Nationality and duration dependent"
              ],
              [
                "Insurance, translations and documents",
                "By quotation and circumstances"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Travelling while the file is pending",
          "body": "After full submission, a Migration Presidency-approved application document and fee receipts permit departures and returns within 15 days under the official rules. Longer absences are subject to visa rules. Do not confuse a simple appointment confirmation with the approved application document."
        },
        {
          "id": "visa-detail-5",
          "title": "Rights and limitations",
          "body": "The card confirms lawful residence for its validity and purpose. It may facilitate everyday administrative processes but does not guarantee a bank account. It does not automatically authorise work. A foreign identification number is not citizenship; social security and tax follow separate criteria."
        },
        {
          "id": "visa-detail-6",
          "title": "Renewal and moving home",
          "body": "Renew within the last 60 days before expiry and before the expiry date itself. Notify address changes within 20 working days; moving provinces requires the relevant procedure. If the original purpose changes, consider a transfer application. Keep old cards and your travel history for future applications."
        }
      ],
      "faqs": [
        {
          "question": "Can I work with an ikamet?",
          "answer": "Not automatically; separate work permission or exemption is required."
        },
        {
          "question": "Can I leave Turkey while waiting?",
          "answer": "Under the official approved-document and receipt procedure, return within 15 days."
        },
        {
          "question": "When should I renew?",
          "answer": "Within the last 60 days before expiry and before the permit expires."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories — Migration Presidency"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Official applications and processing times"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Official 2026 permit and card fees"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Residence application questions and documents"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Legal conditions and residents' rights"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Work permits and residence status"
        }
      ]
    },
    "ru": {
      "title": "Икамет в Турции 2026: карта ВНЖ, оформление и права",
      "metaDescription": "Как получить карту ikamet, сколько она стоит, как ждать решения, выезжать за границу и продлевать ВНЖ.",
      "shortAnswer": "Икаметом обычно называют турецкую карту ВНЖ, подтверждающую право проживания по определённой цели. Она не является туристической визой, паспортом или документом о гражданстве.",
      "bosphorasHelp": "Bosphoras координирует практические вопросы переезда, поиск жилья и встречи с независимыми специалистами. Заявление подаётся в турецкие органы лично или через уполномоченного представителя; выдача не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "От въезда до карты",
          "body": "Определите оставшийся законный срок и категорию по фактической цели. Подайте через e-ikamet в период законного пребывания. Портал выдаёт форму, после проверки документов при положительном решении оформляется индивидуальная карта."
        },
        {
          "id": "visa-detail-2",
          "title": "Ожидание решения",
          "body": "Своевременная заявка обычно позволяет находиться в стране до приёма с формой в предусмотренных условиях. После полной подачи обычный законный срок решения — 90 дней. Сохраняйте подтверждения, квитанции, запросы дополнительных документов и адрес доставки. Проверяйте статус на официальном портале."
        },
        {
          "id": "visa-detail-3",
          "title": "Стоимость и оплата",
          "body": "С января 2026 года карта стоит 964 лиры. Дополнительный сбор определяется гражданством и сроком. Точная сумма указывается порталом и администрацией. Онлайн-подача бесплатна. Не покупайте запись у посредников и не используйте фиктивные подтверждения жилья.",
          "table": {
            "headers": [
              "Позиция",
              "Стоимость 2026"
            ],
            "rows": [
              [
                "Онлайн-заявка и запись",
                "0 лир"
              ],
              [
                "Индивидуальная карта",
                "964 лиры"
              ],
              [
                "Три карты",
                "2 892 лиры"
              ],
              [
                "Сбор за проживание",
                "Зависит от гражданства и срока"
              ],
              [
                "Страховка, переводы и документы",
                "По тарифу и обстоятельствам"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Выезд во время рассмотрения",
          "body": "После полной подачи утверждённый миграционной службой документ заявления и квитанции позволяют выехать и вернуться в течение 15 дней при соблюдении условий. При более долгом отсутствии применяются визовые правила. Простое подтверждение записи не является утверждённым документом."
        },
        {
          "id": "visa-detail-5",
          "title": "Права и ограничения карты",
          "body": "Карта подтверждает законное проживание в пределах срока и цели. Она облегчает некоторые бытовые процедуры, но не гарантирует открытие счёта. Автоматического права на работу нет. Идентификационный номер иностранца не означает гражданство; социальное страхование и налоги регулируются отдельно."
        },
        {
          "id": "visa-detail-6",
          "title": "Продление и смена адреса",
          "body": "Подавайте продление в последние 60 дней до окончания, обязательно до истечения срока. Об изменении адреса сообщайте в течение 20 рабочих дней; смена провинции требует соответствующей процедуры. При изменении цели рассмотрите переход на другую категорию. Храните прежние карты и историю поездок."
        }
      ],
      "faqs": [
        {
          "question": "Можно ли работать по икамету?",
          "answer": "Не автоматически: требуется отдельное разрешение или исключение."
        },
        {
          "question": "Можно ли выехать в ожидании?",
          "answer": "При утверждённом документе и квитанциях допускается возвращение в течение 15 дней по официальным правилам."
        },
        {
          "question": "Когда продлевать?",
          "answer": "В последние 60 дней до окончания и до истечения срока."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ — миграционное управление"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Официальный порядок и сроки"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Официальные сборы и стоимость карты на 2026 год"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Вопросы оформления и документы"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Правовые требования и права резидентов"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Разрешение на работу и проживание"
        }
      ]
    },
    "ar": {
      "title": "إيكامت تركيا 2026: بطاقة الإقامة وإجراءاتها وحقوق حاملها",
      "metaDescription": "تعرف على بطاقة الإيكامت التركية وطريقة الطلب ورسومها والانتظار والسفر للخارج والتجديد.",
      "shortAnswer": "الإيكامت هو الاسم الشائع لبطاقة تصريح الإقامة التركية التي تثبت الحق في السكن لغرض محدد. وهي ليست تأشيرة سياحية أو جوازاً أو وثيقة جنسية.",
      "bosphorasHelp": "تنسق Bosphoras ترتيبات الانتقال والسكن والمواعيد مع المختصين المستقلين. يقدم طلب الإقامة إلى السلطات التركية شخصياً أو عبر ممثل مخول، ولا يمكن ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "من الدخول إلى البطاقة",
          "body": "حدد الأيام القانونية المتبقية واختر النوع الذي يناسب الغرض الفعلي. قدّم عبر e-ikamet أثناء البقاء القانوني. تصدر المنصة استمارة ثم تدرس الإدارة الوثائق وتصدر بطاقة فردية عند الموافقة."
        },
        {
          "id": "visa-detail-2",
          "title": "انتظار القرار",
          "body": "يتيح الطلب المقدم في الموعد عادة البقاء حتى المقابلة مع الاستمارة وفق الشروط. وبعد اكتمال الملف تكون المدة القانونية المعتادة للبت 90 يوماً. احتفظ بالإثبات والإيصالات وطلبات الاستكمال وعنوان التسليم. تابع الحالة عبر المنصة الرسمية."
        },
        {
          "id": "visa-detail-3",
          "title": "الرسوم والدفع",
          "body": "من يناير 2026 تبلغ رسوم البطاقة 964 ليرة. وقد تضاف رسوم تصريح حسب الجنسية والمدة. تحدد المنصة والإدارة المبلغ الدقيق. التقديم الإلكتروني مجاني. لا تشتر مواعيد من الوسطاء ولا تستخدم إثباتات سكن مزيفة.",
          "table": {
            "headers": [
              "البند",
              "تكلفة 2026"
            ],
            "rows": [
              [
                "الطلب والموعد الإلكتروني",
                "0 ليرة"
              ],
              [
                "بطاقة فردية",
                "964 ليرة"
              ],
              [
                "ثلاث بطاقات",
                "2,892 ليرة"
              ],
              [
                "رسم التصريح",
                "بحسب الجنسية والمدة"
              ],
              [
                "التأمين والترجمة والوثائق",
                "بحسب العرض والحالة"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "السفر أثناء دراسة الطلب",
          "body": "بعد استكمال الملف يتيح مستند الطلب المعتمد من إدارة الهجرة والإيصالات الخروج والعودة خلال 15 يوماً وفق القواعد. وتخضع المدة الأطول لقواعد التأشيرة. لا تخلط بين تأكيد الموعد البسيط ومستند الطلب المعتمد."
        },
        {
          "id": "visa-detail-5",
          "title": "حقوق البطاقة وحدودها",
          "body": "تثبت البطاقة الإقامة القانونية في حدود المدة والغرض. وقد تسهل إجراءات يومية لكنها لا تضمن فتح حساب بنكي. ولا تمنح تلقائياً حق العمل. رقم هوية الأجنبي لا يعني الجنسية، وللتأمينات والضرائب قواعد مستقلة."
        },
        {
          "id": "visa-detail-6",
          "title": "التجديد وتغيير السكن",
          "body": "قدّم التجديد في آخر 60 يوماً وقبل انتهاء التصريح. أبلغ عن تغيير العنوان خلال 20 يوم عمل، ويتطلب الانتقال إلى ولاية أخرى إجراء مناسباً. وإذا تغير الغرض فادرس طلب تغيير النوع. احتفظ بالبطاقات السابقة وسجل السفر للطلبات المقبلة."
        }
      ],
      "faqs": [
        {
          "question": "هل يسمح الإيكامت بالعمل؟",
          "answer": "ليس تلقائياً؛ يلزم تصريح منفصل أو إعفاء."
        },
        {
          "question": "هل يمكن الخروج أثناء الانتظار؟",
          "answer": "وفق إجراء المستند المعتمد والإيصالات، مع العودة خلال 15 يوماً."
        },
        {
          "question": "متى أجدد؟",
          "answer": "في آخر 60 يوماً وقبل انتهاء التصريح."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة — رئاسة إدارة الهجرة"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "الإجراءات والمدد الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "الرسوم الرسمية للإقامة والبطاقة لعام 2026"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "أسئلة الإقامة والوثائق"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "الشروط القانونية وحقوق المقيمين"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "تصريح العمل وحق الإقامة"
        }
      ]
    }
  },
  "turkey-short-term-residence": {
    "fr": {
      "title": "Résidence courte durée en Turquie 2026 : motifs, délais et conditions",
      "metaDescription": "Tourisme, propriété, affaires, soins, langue et investissement : découvrez les motifs de l'ikamet courte durée et les durées maximales.",
      "shortAnswer": "La résidence courte durée relève des articles 31 à 33 de la loi 6458. Elle est normalement délivrable pour deux ans au maximum par décision, mais certains motifs sont soumis à une durée plus courte ; des investissements qualifiés et certains ressortissants bénéficient d'un plafond de cinq ans.",
      "bosphorasHelp": "Bosphoras organise les aspects pratiques de votre installation : recherche de logement, rendez-vous et mise en relation avec des professionnels indépendants. La demande de titre de séjour s'effectue auprès des autorités turques par vous-même ou un représentant habilité ; aucune délivrance n'est garantie.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Les motifs légaux de courte durée",
          "body": "La loi prévoit quatorze fondements, et non un droit général à vivre en Turquie après une visite. Le tableau regroupe les motifs courants et les cas particuliers. Les documents doivent prouver l'objectif effectif. Le titre est susceptible d'être annulé s'il est utilisé à une autre fin.",
          "table": {
            "headers": [
              "Motif",
              "Pièces caractéristiques"
            ],
            "rows": [
              [
                "Recherche scientifique",
                "Autorisation ou description de recherche"
              ],
              [
                "Propriété résidentielle",
                "Titre de propriété et usage d'habitation"
              ],
              [
                "Relations commerciales",
                "Invitation ou preuves d'activité"
              ],
              [
                "Formation en entreprise",
                "Programme et durée"
              ],
              [
                "Échange éducatif",
                "Attestation de programme"
              ],
              [
                "Tourisme",
                "Programme réel, logement, ressources"
              ],
              [
                "Traitement médical",
                "Documents de soins et financement"
              ],
              [
                "Décision administrative ou judiciaire",
                "Décision ou demande officielle"
              ],
              [
                "Transition depuis titre familial",
                "Preuve de situation admissible"
              ],
              [
                "Cours de turc",
                "Inscription dans un organisme autorisé ; deux fois maximum"
              ],
              [
                "Programme d'organisme public",
                "Documents de programme ; jusqu'à 1 an"
              ],
              [
                "Diplôme supérieur turc",
                "Demande dans les 6 mois ; une fois, jusqu'à 1 an"
              ],
              [
                "Investissement qualifié",
                "Critères spécifiques ; jusqu'à 5 ans"
              ],
              [
                "Chypre du Nord",
                "Citoyenneté concernée ; jusqu'à 5 ans"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Tourisme et installation exploratoire",
          "body": "Un projet touristique prolongé peut être examiné à partir d'un itinéraire réel, du logement, de la durée et des ressources. Les autorités peuvent demander des preuves complémentaires. Une réservation ou un bail ne garantit pas l'acceptation. Préparez un projet cohérent ; évitez les motifs de convenance et les documents fictifs."
        },
        {
          "id": "visa-detail-3",
          "title": "Propriétaire immobilier",
          "body": "Le logement détenu doit être résidentiel et utilisé comme habitation pour le motif de propriété. L'administration applique également les critères d'éligibilité liés au bien, à sa date d'acquisition et à son adresse. Avant toute avance, faites vérifier le titre, les restrictions et les conditions de la catégorie par un professionnel compétent. La valeur exigée pour la résidence n'est pas le seuil de 400 000 USD de la citoyenneté par investissement."
        },
        {
          "id": "visa-detail-4",
          "title": "Affaires, traitement médical et études de langue",
          "body": "Pour établir des relations commerciales pendant plus de trois mois, une invitation des entreprises concernées ou un justificatif équivalent peut être demandé. Les soins nécessitent des preuves médicales et de prise en charge selon le dossier. Un cours de turc dans un organisme autorisé ne peut généralement fonder le titre que deux fois ; la durée suit celle du cours lorsqu'elle est inférieure à un an."
        },
        {
          "id": "visa-detail-5",
          "title": "Durées et coût",
          "body": "La durée ordinaire maximale est de deux ans ; le passeport, l'assurance et les pièces peuvent la limiter. Les diplômés d'un établissement supérieur turc peuvent demander dans les six mois suivant leur diplôme un titre unique d'un an au plus. Pour des investissements répondant aux critères spécifiques ou les citoyens de Chypre du Nord, le plafond peut atteindre cinq ans. La carte coûte 964 TL en 2026, hors droit de séjour."
        },
        {
          "id": "visa-detail-6",
          "title": "Préparer l'avenir avant l'expiration",
          "body": "Si vous souhaitez poursuivre votre séjour, examinez le maintien du motif et vos justificatifs avant les 60 derniers jours de validité. En cas de changement de projet, choisissez la catégorie correspondante via une demande de transfert dans les délais. L'existence d'un titre antérieur ne garantit pas son renouvellement. Une activité professionnelle effective nécessite une autorisation de travail distincte."
        }
      ],
      "faqs": [
        {
          "question": "La résidence touristique est-elle garantie ?",
          "answer": "Non, le motif et le dossier sont examinés individuellement."
        },
        {
          "question": "Combien de temps dure le titre courte durée ?",
          "answer": "Jusqu'à deux ans en règle générale, avec exceptions selon le motif."
        },
        {
          "question": "Peut-on travailler avec ce titre ?",
          "answer": "Non sans autorisation de travail ou exemption applicable."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres — Direction de la migration"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Procédure et délais officiels"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Barème officiel 2026 des droits et de la carte"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions administratives et pièces justificatives"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Conditions légales et droits du résident"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Permis de travail et droit de séjour"
        }
      ]
    },
    "en": {
      "title": "Turkey short-term residence permit 2026: purposes and duration",
      "metaDescription": "Compare short-term residence eligibility for tourism, home ownership, commercial contacts, medical treatment, language courses and qualifying investors.",
      "shortAnswer": "Short-term residence falls under Articles 31–33 of Law 6458. The general maximum per grant is two years. Some purposes have shorter limits, while qualifying investors and certain nationals may have a five-year maximum.",
      "bosphorasHelp": "Bosphoras coordinates practical relocation arrangements, accommodation and introductions to independent professionals. Residence applications are handled by the Turkish authorities, personally or through an authorised representative; approval is never guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Lawful short-term purposes",
          "body": "The law specifies fourteen grounds rather than a general entitlement to live in Turkey after a visit. The table groups common and exceptional grounds. Evidence must substantiate the actual purpose; using the permit for a different purpose may lead to cancellation.",
          "table": {
            "headers": [
              "Purpose",
              "Typical evidence"
            ],
            "rows": [
              [
                "Scientific research",
                "Permission or research statement"
              ],
              [
                "Residential property",
                "Title and residential use"
              ],
              [
                "Commercial connections",
                "Invitation or activity evidence"
              ],
              [
                "In-service training",
                "Programme and duration"
              ],
              [
                "Educational exchange",
                "Programme evidence"
              ],
              [
                "Tourism",
                "Actual itinerary, accommodation, means"
              ],
              [
                "Medical treatment",
                "Treatment and funding records"
              ],
              [
                "Administrative/judicial decision",
                "Official decision or request"
              ],
              [
                "Transfer from family permit",
                "Evidence of qualifying circumstances"
              ],
              [
                "Turkish course",
                "Authorised institution; maximum twice"
              ],
              [
                "Public-agency programme",
                "Programme evidence; up to one year"
              ],
              [
                "Turkish higher education graduate",
                "Within 6 months; once, up to 1 year"
              ],
              [
                "Qualifying investment",
                "Specific criteria; up to 5 years"
              ],
              [
                "Northern Cyprus",
                "Relevant citizenship; up to 5 years"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Tourism and exploratory stays",
          "body": "Extended tourism can be assessed through actual travel plans, accommodation, duration and means. Additional evidence may be required. A booking or lease does not guarantee approval. Use genuine records and a purpose matching your plans."
        },
        {
          "id": "visa-detail-3",
          "title": "Home ownership",
          "body": "Property used as the residence basis must be residential and used as housing. The authority also applies property, acquisition-date and address criteria. Before providing an advance, arrange qualified review of title, restrictions and eligibility. Property residence requirements are distinct from the USD 400,000 citizenship investment threshold."
        },
        {
          "id": "visa-detail-4",
          "title": "Business contacts, treatment and language courses",
          "body": "Commercial contact permits longer than three months can require an invitation or similar evidence from the businesses concerned. Treatment applications need relevant clinical and funding documentation. A Turkish-language course at an authorised institution can generally support a permit at most twice, with duration limited to the course when shorter than a year."
        },
        {
          "id": "visa-detail-5",
          "title": "Duration and fees",
          "body": "The general maximum is two years; passport, insurance and evidence may reduce it. Turkish higher-education graduates applying within six months of graduation can receive a one-time permit of at most one year. Qualifying investments and Northern Cyprus nationals may have a five-year maximum. The 2026 card fee is TRY 964, excluding any residence duty."
        },
        {
          "id": "visa-detail-6",
          "title": "Prepare for the end of the permit",
          "body": "Review continuing eligibility before the final 60 days of validity. If your purpose changes, apply to transfer to an appropriate category within lawful time. A previous permit does not guarantee renewal. Actual employment or professional activity may require separate work authorisation."
        }
      ],
      "faqs": [
        {
          "question": "Is tourist residence guaranteed?",
          "answer": "No; eligibility and evidence are assessed individually."
        },
        {
          "question": "How long can short-term residence last?",
          "answer": "Generally up to two years, subject to purpose-specific exceptions."
        },
        {
          "question": "Can it be used to work?",
          "answer": "Not without applicable work authorisation or exemption."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories — Migration Presidency"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Official applications and processing times"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Official 2026 permit and card fees"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Residence application questions and documents"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Legal conditions and residents' rights"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Work permits and residence status"
        }
      ]
    },
    "ru": {
      "title": "Краткосрочный ВНЖ в Турции 2026: основания и сроки",
      "metaDescription": "Туризм, собственное жильё, деловые связи, лечение, языковые курсы и инвестиции: условия краткосрочного икамета.",
      "shortAnswer": "Краткосрочный ВНЖ регулируется статьями 31–33 закона № 6458. Общий максимальный срок одной выдачи — два года. Для отдельных целей предусмотрены меньшие сроки, а для квалифицированных инвестиций и некоторых гражданств — до пяти лет.",
      "bosphorasHelp": "Bosphoras координирует практические вопросы переезда, поиск жилья и встречи с независимыми специалистами. Заявление подаётся в турецкие органы лично или через уполномоченного представителя; выдача не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Законные основания",
          "body": "Закон предусматривает четырнадцать оснований, а не общее право поселиться после туристического визита. Таблица группирует основные и особые случаи. Документы должны подтверждать фактическую цель. Использование ВНЖ не по назначению может стать основанием для отмены.",
          "table": {
            "headers": [
              "Основание",
              "Характерные документы"
            ],
            "rows": [
              [
                "Научное исследование",
                "Разрешение или описание"
              ],
              [
                "Жилое имущество",
                "Tapu и использование для проживания"
              ],
              [
                "Деловые связи",
                "Приглашение или подтверждения"
              ],
              [
                "Стажировка на предприятии",
                "Программа и срок"
              ],
              [
                "Образовательный обмен",
                "Подтверждение программы"
              ],
              [
                "Туризм",
                "Маршрут, жильё, средства"
              ],
              [
                "Лечение",
                "Медицинские и финансовые документы"
              ],
              [
                "Решение органа или суда",
                "Официальное решение"
              ],
              [
                "Переход с семейного ВНЖ",
                "Подтверждение обстоятельств"
              ],
              [
                "Курсы турецкого",
                "Уполномоченное учреждение; максимум дважды"
              ],
              [
                "Программа госоргана",
                "Документы программы; до года"
              ],
              [
                "Выпускник турецкого вуза",
                "В течение 6 месяцев; один раз, до года"
              ],
              [
                "Квалифицированные инвестиции",
                "Особые критерии; до 5 лет"
              ],
              [
                "Северный Кипр",
                "Соответствующее гражданство; до 5 лет"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Туризм и ознакомительное проживание",
          "body": "Длительная туристическая поездка оценивается по реальному маршруту, жилью, сроку и средствам. Могут потребоваться дополнительные документы. Бронирование или аренда не гарантируют одобрение. Используйте подлинные документы и основание, соответствующее планам."
        },
        {
          "id": "visa-detail-3",
          "title": "ВНЖ собственника жилья",
          "body": "Объект должен быть жилым и использоваться для проживания. Администрация также применяет критерии, относящиеся к объекту, дате приобретения и адресу. До аванса организуйте проверку права собственности, ограничений и пригодности основания. Требования к ВНЖ собственника отличаются от порога 400 000 долларов для гражданства за инвестиции."
        },
        {
          "id": "visa-detail-4",
          "title": "Деловые связи, лечение и языковые курсы",
          "body": "При деловом основании на срок более трёх месяцев может требоваться приглашение компании или аналогичный документ. Для лечения нужны медицинские документы и подтверждение оплаты по обстоятельствам. Курс турецкого языка в уполномоченном учреждении может обычно служить основанием не более двух раз, а курс короче года ограничивает срок ВНЖ."
        },
        {
          "id": "visa-detail-5",
          "title": "Сроки и сборы",
          "body": "Обычный предел — два года, но паспорт, страховка и документы могут сократить его. Выпускники турецкого вуза при подаче в течение шести месяцев после выпуска могут однократно получить ВНЖ до года. Для отвечающих критериям инвестиций и граждан Северного Кипра предел может составлять пять лет. Карта в 2026 году стоит 964 лиры без отдельного сбора."
        },
        {
          "id": "visa-detail-6",
          "title": "Что делать перед окончанием срока",
          "body": "Проверьте сохранение основания до последних 60 дней действия. Если цель изменилась, подайте заявление о переходе на подходящую категорию в законные сроки. Предыдущий ВНЖ не гарантирует продление. Фактическая работа требует отдельного разрешения или предусмотренного исключения."
        }
      ],
      "faqs": [
        {
          "question": "Гарантирован ли туристический ВНЖ?",
          "answer": "Нет, цель и документы оцениваются индивидуально."
        },
        {
          "question": "На сколько дают краткосрочный ВНЖ?",
          "answer": "Обычно до двух лет с исключениями по целям."
        },
        {
          "question": "Можно ли работать?",
          "answer": "Не без соответствующего разрешения или исключения."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ — миграционное управление"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Официальный порядок и сроки"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Официальные сборы и стоимость карты на 2026 год"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Вопросы оформления и документы"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Правовые требования и права резидентов"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Разрешение на работу и проживание"
        }
      ]
    },
    "ar": {
      "title": "الإقامة قصيرة الأجل في تركيا 2026: الأسباب والمدد والشروط",
      "metaDescription": "السياحة وملكية السكن والعلاقات التجارية والعلاج ودورات اللغة والاستثمار: شروط الإقامة القصيرة ومددها.",
      "shortAnswer": "تنظم المواد 31–33 من القانون 6458 الإقامة القصيرة. الحد العام لكل إصدار سنتان، مع مدد أقصر لأغراض محددة وحد أقصى خمس سنوات لبعض الاستثمارات المؤهلة والجنسيات.",
      "bosphorasHelp": "تنسق Bosphoras ترتيبات الانتقال والسكن والمواعيد مع المختصين المستقلين. يقدم طلب الإقامة إلى السلطات التركية شخصياً أو عبر ممثل مخول، ولا يمكن ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "الأسباب القانونية للإقامة القصيرة",
          "body": "يحدد القانون أربعة عشر أساساً ولا يمنح حقاً عاماً في السكن بعد زيارة سياحية. يجمع الجدول الأسباب الشائعة والاستثنائية. يجب إثبات الغرض الفعلي وقد يلغى التصريح عند استخدامه لغرض آخر.",
          "table": {
            "headers": [
              "الغرض",
              "الإثباتات المعتادة"
            ],
            "rows": [
              [
                "بحث علمي",
                "ترخيص أو بيان البحث"
              ],
              [
                "ملكية سكنية",
                "سند واستعمال للسكن"
              ],
              [
                "علاقات تجارية",
                "دعوة أو إثباتات"
              ],
              [
                "تدريب مهني",
                "البرنامج والمدة"
              ],
              [
                "تبادل تعليمي",
                "إثبات البرنامج"
              ],
              [
                "سياحة",
                "برنامج وسكن وموارد"
              ],
              [
                "علاج",
                "وثائق العلاج والتمويل"
              ],
              [
                "قرار إداري أو قضائي",
                "قرار أو طلب رسمي"
              ],
              [
                "انتقال من إقامة عائلية",
                "إثبات الظروف المؤهلة"
              ],
              [
                "دورات التركية",
                "مؤسسة مرخصة؛ مرتان كحد أقصى"
              ],
              [
                "برنامج جهة عامة",
                "إثبات البرنامج؛ حتى سنة"
              ],
              [
                "خريج التعليم العالي التركي",
                "خلال 6 أشهر؛ مرة واحدة حتى سنة"
              ],
              [
                "استثمار مؤهل",
                "شروط خاصة؛ حتى 5 سنوات"
              ],
              [
                "شمال قبرص",
                "الجنسية المعنية؛ حتى 5 سنوات"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "السياحة والزيارة الاستطلاعية الممتدة",
          "body": "يمكن تقييم السياحة الممتدة وفق برنامج السفر الفعلي والسكن والمدة والموارد. قد تطلب الإدارة إثباتات إضافية. لا يضمن الحجز أو عقد الإيجار الموافقة. استخدم الوثائق الحقيقية والأساس المتوافق مع خطتك."
        },
        {
          "id": "visa-detail-3",
          "title": "الإقامة بسبب ملكية منزل",
          "body": "يجب أن يكون العقار سكنياً ويستخدم للسكن. وتطبق الإدارة أيضاً معايير تخص العقار وتاريخ الشراء والعنوان. قبل دفع مقدم افحص الملكية والقيود والأهلية مع مختص. تختلف شروط إقامة المالك عن حد 400 ألف دولار الخاص بالجنسية عبر الاستثمار."
        },
        {
          "id": "visa-detail-4",
          "title": "العلاقات التجارية والعلاج ودراسة اللغة",
          "body": "قد تتطلب الإقامة للعلاقات التجارية أكثر من ثلاثة أشهر دعوة من الشركات أو إثباتاً مماثلاً. وللعلاج مستندات طبية ومالية حسب الحالة. وتتيح دورة تركية في مؤسسة مرخصة هذا الأساس عادة مرتين بحد أقصى، وتحدد مدة الدورة مدة الإقامة إذا كانت أقل من سنة."
        },
        {
          "id": "visa-detail-5",
          "title": "المدد والرسوم",
          "body": "الحد العادي سنتان وقد يقيده الجواز والتأمين والمستندات. ويمكن لخريج التعليم العالي التركي المتقدم خلال ستة أشهر من التخرج الحصول على إقامة لمرة واحدة حتى سنة. وقد يصل الحد إلى خمس سنوات للاستثمارات المؤهلة ومواطني شمال قبرص. رسوم البطاقة لعام 2026 هي 964 ليرة دون رسوم الإقامة الإضافية."
        },
        {
          "id": "visa-detail-6",
          "title": "الاستعداد قبل انتهاء التصريح",
          "body": "راجع استمرار الأساس قبل آخر 60 يوماً. وإذا تغير الغرض فقدم طلب تغيير النوع ضمن المدة القانونية. لا يضمن التصريح السابق التجديد. وقد يتطلب العمل الفعلي تصريح عمل مستقلاً أو إعفاء قانونياً."
        }
      ],
      "faqs": [
        {
          "question": "هل الإقامة السياحية مضمونة؟",
          "answer": "لا، تدرس الأهلية والوثائق لكل طلب."
        },
        {
          "question": "ما مدة الإقامة القصيرة؟",
          "answer": "حتى سنتين عموماً مع استثناءات بحسب الغرض."
        },
        {
          "question": "هل يمكن العمل بها؟",
          "answer": "لا دون تصريح عمل أو إعفاء مناسب."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة — رئاسة إدارة الهجرة"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "الإجراءات والمدد الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "الرسوم الرسمية للإقامة والبطاقة لعام 2026"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "أسئلة الإقامة والوثائق"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "الشروط القانونية وحقوق المقيمين"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "تصريح العمل وحق الإقامة"
        }
      ]
    }
  },
  "turkey-long-term-residence": {
    "fr": {
      "title": "Résidence longue durée en Turquie : 8 ans, conditions et ikamet permanent",
      "metaDescription": "Découvrez le titre de séjour permanent en Turquie : calcul des huit ans, études, absences, revenus, droits et motifs d'annulation.",
      "shortAnswer": "L'ikamet longue durée est un permis délivré sans durée d'expiration sous réserve de conditions légales. La voie ordinaire exige au moins huit années de résidence continue admissible, sans aide sociale pendant les trois dernières années, avec revenus suffisants, assurance valide et absence de menace à l'ordre ou à la sécurité publics.",
      "bosphorasHelp": "Bosphoras organise les aspects pratiques de votre installation : recherche de logement, rendez-vous et mise en relation avec des professionnels indépendants. La demande de titre de séjour s'effectue auprès des autorités turques par vous-même ou un représentant habilité ; aucune délivrance n'est garantie.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Calculer les huit années",
          "body": "Les périodes de résidence étudiant sont comptées pour moitié ; les autres titres admissibles sont normalement comptés intégralement. Ainsi quatre ans de résidence étudiant et six ans de résidence courte durée représentent huit ans comptabilisés, à condition que la continuité et toutes les autres exigences soient satisfaites. Les années touristiques sans titre ne sont pas assimilées à des années de résidence admissible.",
          "table": {
            "headers": [
              "Historique de titres",
              "Années retenues (si admissibles)"
            ],
            "rows": [
              [
                "8 ans courte durée",
                "8 ans"
              ],
              [
                "4 ans étudiant + 6 ans courte durée",
                "2 + 6 = 8 ans"
              ],
              [
                "4 ans étudiant + 4 ans courte durée",
                "2 + 4 = 6 ans"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Absences et continuité",
          "body": "Selon les règles administratives, une absence cumulée de plus de six mois sur un an ou de plus d'un an sur les cinq dernières années peut interrompre la continuité, hors motifs reconnus comme la santé, les études et le service public obligatoire. Le calcul doit reposer sur les passages de frontière et les permis, pas seulement sur la date d'obtention de la première carte. Certaines catégories de protection et de séjour humanitaire ne permettent pas le passage vers la longue durée."
        },
        {
          "id": "visa-detail-3",
          "title": "Ressources, assurance et situation personnelle",
          "body": "Présentez des revenus suffisants et stables pour subvenir à vos besoins et, le cas échéant, à ceux de votre famille. La Direction de la migration cite le salaire minimum mensuel comme référence et des besoins supplémentaires pour les personnes à charge. Les pensions, revenus de biens et justificatifs bancaires peuvent être étudiés. L'absence d'aide sociale pendant les trois dernières années et une assurance valide font partie des conditions ordinaires."
        },
        {
          "id": "visa-detail-4",
          "title": "Démarches et coût administratif",
          "body": "Sélectionnez la demande de transfert vers la résidence longue durée si vous remplissez les conditions. Préparez l'historique des titres, des entrées et sorties et les justificatifs de ressources, d'assurance et de situation. L'autorité provinciale traite la demande avec l'approbation du ministère. Selon la Direction de la migration, le droit de séjour de longue durée est gratuit ; le coût de carte de 964 TL en 2026 reste dû."
        },
        {
          "id": "visa-detail-5",
          "title": "Quels droits donne ce titre ?",
          "body": "Le titulaire dispose de droits étendus, sous réserve des lois spéciales, mais il ne devient pas citoyen turc. Il ne bénéficie pas du droit de vote ou d'éligibilité, de l'accès aux emplois publics réservés, ni de tous les avantages douaniers. Pour une activité professionnelle, vérifiez le régime d'autorisation applicable. Le titre ne remplace pas le passeport et ne donne pas automatiquement la citoyenneté."
        },
        {
          "id": "visa-detail-6",
          "title": "Conserver la résidence permanente",
          "body": "Une absence continue de plus d'un an hors de Turquie peut entraîner l'annulation, sauf motifs reconnus tels que santé, études ou service public obligatoire dans le pays d'origine. Une menace grave pour l'ordre ou la sécurité publics constitue également un motif d'annulation. En cas d'annulation liée à une absence, une nouvelle demande peut être possible sans recommencer le calcul des huit années, sous réserve des autres conditions."
        }
      ],
      "faqs": [
        {
          "question": "Une résidence de huit ans suffit-elle ?",
          "answer": "Non, la continuité, les ressources, l'assurance et les autres critères doivent être remplis."
        },
        {
          "question": "Les années étudiant comptent-elles intégralement ?",
          "answer": "Non, elles sont prises en compte pour moitié."
        },
        {
          "question": "La résidence longue durée est-elle permanente ?",
          "answer": "Elle est délivrée sans limitation de durée, mais peut être annulée dans les cas légaux."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de titres — Direction de la migration"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Procédure et délais officiels"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Barème officiel 2026 des droits et de la carte"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions administratives et pièces justificatives"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Conditions légales et droits du résident"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Permis de travail et droit de séjour"
        }
      ]
    },
    "en": {
      "title": "Turkey long-term residence permit: eight-year rule and permanent status",
      "metaDescription": "Learn how Turkey's indefinite residence permit works: qualifying eight years, student residence, absences, income, rights and cancellation.",
      "shortAnswer": "The long-term residence permit is indefinite, subject to statutory conditions. The ordinary route requires at least eight years of qualifying continuous residence, no social assistance in the previous three years, stable sufficient income, valid health cover and no threat to public order or security.",
      "bosphorasHelp": "Bosphoras coordinates practical relocation arrangements, accommodation and introductions to independent professionals. Residence applications are handled by the Turkish authorities, personally or through an authorised representative; approval is never guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Calculating eight qualifying years",
          "body": "Student residence periods count at half their duration; other qualifying permit periods ordinarily count in full. Four years of student residence plus six years of short-term residence can therefore represent eight qualifying years if continuity and all other criteria are satisfied. Tourist visits without a residence permit do not count as equivalent qualifying residence.",
          "table": {
            "headers": [
              "Permit history",
              "Qualifying years (if eligible)"
            ],
            "rows": [
              [
                "8 years short-term",
                "8 years"
              ],
              [
                "4 student + 6 short-term",
                "2 + 6 = 8 years"
              ],
              [
                "4 student + 4 short-term",
                "2 + 4 = 6 years"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Absences and continuity",
          "body": "Under published administrative rules, absences exceeding six months in one year or one year in the preceding five years can interrupt continuity, except recognised reasons such as health, education or compulsory public service. Establish the calculation using border records and permits, not simply the first card's date. Certain protection and humanitarian statuses cannot transfer to long-term residence."
        },
        {
          "id": "visa-detail-3",
          "title": "Income, insurance and personal circumstances",
          "body": "Provide sufficient stable means to support yourself and any dependants. The migration authority refers to the monthly minimum wage and additional amounts for dependants. Pension, property income and bank evidence may be assessed. No social assistance in the previous three years and valid health insurance are ordinary requirements."
        },
        {
          "id": "visa-detail-4",
          "title": "Application and fees",
          "body": "Choose the transfer application for long-term residence if eligible. Prepare the complete permit and travel history, financial and insurance evidence and personal documents. The governorate grants the permit with ministry approval. The migration authority states that the long-term residence duty is waived; the TRY 964 card fee for 2026 remains payable."
        },
        {
          "id": "visa-detail-5",
          "title": "Rights and citizenship limitations",
          "body": "Holders gain extensive rights subject to special laws but do not become Turkish citizens. Voting, election to office, certain public-service positions and vehicle-import privileges are excluded. Establish applicable work-authorisation rules separately. The permit does not replace a passport or automatically confer citizenship."
        },
        {
          "id": "visa-detail-6",
          "title": "Maintaining indefinite residence",
          "body": "Continuous absence exceeding one year may result in cancellation, except for recognised health, education or compulsory public-service reasons in the home country. A serious threat to public order or security is another cancellation ground. Following absence-based cancellation, reapplication may be possible without repeating the eight-year requirement, subject to other conditions."
        }
      ],
      "faqs": [
        {
          "question": "Are eight years alone enough?",
          "answer": "No, continuity, income, insurance and all other requirements must be met."
        },
        {
          "question": "Do student years count in full?",
          "answer": "No, they count at half duration."
        },
        {
          "question": "Is the permit permanent?",
          "answer": "It is indefinite but can be cancelled on statutory grounds."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories — Migration Presidency"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Official applications and processing times"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Official 2026 permit and card fees"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Residence application questions and documents"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Legal conditions and residents' rights"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Work permits and residence status"
        }
      ]
    },
    "ru": {
      "title": "Долгосрочный ВНЖ в Турции: восемь лет, условия и бессрочный статус",
      "metaDescription": "Условия бессрочного ВНЖ: расчёт восьми лет, учёба, выезды, доходы, права и основания отмены.",
      "shortAnswer": "Долгосрочный икамет выдаётся бессрочно при соблюдении закона. Обычная процедура требует минимум восьми лет непрерывного учитываемого проживания, отсутствия социальной помощи последние три года, стабильного достаточного дохода, действующей страховки и отсутствия угрозы общественному порядку и безопасности.",
      "bosphorasHelp": "Bosphoras координирует практические вопросы переезда, поиск жилья и встречи с независимыми специалистами. Заявление подаётся в турецкие органы лично или через уполномоченного представителя; выдача не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Как рассчитать восемь лет",
          "body": "Периоды студенческого ВНЖ учитываются наполовину, остальные подходящие периоды — обычно полностью. Четыре года студенческого ВНЖ и шесть лет краткосрочного могут составить восемь зачтённых лет при соблюдении непрерывности и остальных условий. Туристические визиты без ВНЖ не приравниваются к учитываемому проживанию.",
          "table": {
            "headers": [
              "История ВНЖ",
              "Зачтённые годы (при соответствии)"
            ],
            "rows": [
              [
                "8 лет краткосрочного",
                "8 лет"
              ],
              [
                "4 года учебы + 6 краткосрочных",
                "2 + 6 = 8 лет"
              ],
              [
                "4 года учебы + 4 краткосрочных",
                "2 + 4 = 6 лет"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Выезды и непрерывность",
          "body": "Согласно опубликованным правилам, отсутствие в общей сложности более шести месяцев за год или более года за последние пять лет может прервать непрерывность, кроме признанных причин, таких как лечение, обучение и обязательная государственная служба. Используйте данные пересечения границы и разрешений, а не только дату первой карты. Некоторые защитные и гуманитарные статусы не позволяют перейти на долгосрочный ВНЖ."
        },
        {
          "id": "visa-detail-3",
          "title": "Доходы, страховка и личные условия",
          "body": "Подтвердите достаточные стабильные средства для себя и иждивенцев. Миграционная служба указывает месячную минимальную зарплату как ориентир и дополнительные суммы для членов семьи. Могут учитываться пенсия, доход от имущества и банковские документы. Требуются отсутствие социальной помощи за три года и действующая медицинская страховка."
        },
        {
          "id": "visa-detail-4",
          "title": "Заявление и стоимость",
          "body": "При выполнении условий выберите переход на долгосрочный ВНЖ. Подготовьте историю разрешений и поездок, документы о доходах, страховке и личности. Решение принимает администрация провинции с одобрением министерства. По данным миграционной службы, сбор за долгосрочный ВНЖ не взимается, но карта стоимостью 964 лиры в 2026 году оплачивается."
        },
        {
          "id": "visa-detail-5",
          "title": "Права и отличие от гражданства",
          "body": "Владельцы имеют расширенные права с учётом специальных законов, но не становятся гражданами Турции. Исключены участие в выборах, избрание, отдельные государственные должности и льготы при ввозе автомобилей. Право на работу определяется отдельно. ВНЖ не заменяет паспорт и не даёт гражданство автоматически."
        },
        {
          "id": "visa-detail-6",
          "title": "Как сохранить бессрочный ВНЖ",
          "body": "Непрерывное отсутствие более года может привести к отмене, кроме признанных причин лечения, учёбы или обязательной государственной службы на родине. Серьёзная угроза общественному порядку или безопасности также служит основанием. После отмены из-за отсутствия возможна повторная подача без нового восьмилетнего периода при соблюдении остальных условий."
        }
      ],
      "faqs": [
        {
          "question": "Достаточно ли восьми лет?",
          "answer": "Нет, необходимы непрерывность, средства, страховка и остальные условия."
        },
        {
          "question": "Студенческие годы учитываются полностью?",
          "answer": "Нет, наполовину."
        },
        {
          "question": "ВНЖ бессрочен?",
          "answer": "Да, но может быть отменён по предусмотренным законом основаниям."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ — миграционное управление"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "Официальный порядок и сроки"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Официальные сборы и стоимость карты на 2026 год"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Вопросы оформления и документы"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "Правовые требования и права резидентов"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "Разрешение на работу и проживание"
        }
      ]
    },
    "ar": {
      "title": "الإقامة طويلة الأجل في تركيا: شرط الثماني سنوات والإقامة الدائمة",
      "metaDescription": "تعرف على شروط الإقامة غير المحددة المدة: حساب ثماني سنوات والدراسة والغياب والدخل والحقوق وحالات الإلغاء.",
      "shortAnswer": "تمنح إقامة طويلة الأجل دون مدة انتهاء عند استيفاء الشروط القانونية. ويتطلب المسار العادي ثماني سنوات على الأقل من الإقامة المتواصلة المحتسبة، وعدم تلقي المساعدة الاجتماعية في السنوات الثلاث الأخيرة، ودخلاً كافياً مستقراً وتأميناً سارياً وعدم تهديد النظام أو الأمن العام.",
      "bosphorasHelp": "تنسق Bosphoras ترتيبات الانتقال والسكن والمواعيد مع المختصين المستقلين. يقدم طلب الإقامة إلى السلطات التركية شخصياً أو عبر ممثل مخول، ولا يمكن ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "حساب السنوات الثماني",
          "body": "تحسب مدة إقامة الطالب بنسبة النصف، بينما تحسب مدد التصاريح الأخرى المؤهلة عادة بالكامل. فأربع سنوات من إقامة الطالب وست سنوات من الإقامة القصيرة قد تعادل ثماني سنوات محتسبة إذا استوفيت الاستمرارية وبقية الشروط. لا تعامل الزيارات السياحية دون تصريح كإقامة محتسبة.",
          "table": {
            "headers": [
              "سجل الإقامة",
              "السنوات المحتسبة عند التأهل"
            ],
            "rows": [
              [
                "8 سنوات قصيرة",
                "8 سنوات"
              ],
              [
                "4 سنوات طالب + 6 قصيرة",
                "2 + 6 = 8 سنوات"
              ],
              [
                "4 سنوات طالب + 4 قصيرة",
                "2 + 4 = 6 سنوات"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "الغياب واستمرارية الإقامة",
          "body": "وفق القواعد المنشورة، قد يقطع الغياب لأكثر من ستة أشهر إجمالاً في سنة أو أكثر من سنة في آخر خمس سنوات استمرارية الإقامة، باستثناء أسباب معترف بها مثل العلاج والدراسة والخدمة العامة الإلزامية. اعتمد سجل الحدود والتصاريح لا تاريخ أول بطاقة وحده. ولا تتيح بعض أوضاع الحماية والإقامة الإنسانية الانتقال إلى الطويلة."
        },
        {
          "id": "visa-detail-3",
          "title": "الموارد والتأمين والوضع الشخصي",
          "body": "قدم دليلاً على دخل ثابت يكفيك ومن تعولهم. تشير إدارة الهجرة إلى الحد الأدنى الشهري للأجور ومبالغ إضافية للمعالين. وقد تدرس المعاشات ودخل العقار والمستندات المصرفية. ومن الشروط العادية عدم تلقي المساعدة الاجتماعية في آخر ثلاث سنوات والتغطية الصحية السارية."
        },
        {
          "id": "visa-detail-4",
          "title": "الطلب والرسوم",
          "body": "اختر طلب الانتقال إلى الإقامة الطويلة إذا كنت مؤهلاً. جهز سجل التصاريح والدخول والخروج ومستندات الدخل والتأمين والهوية. تصدرها الولاية بموافقة الوزارة. وتوضح إدارة الهجرة أن رسم تصريح الإقامة الطويلة معفى، لكن رسم البطاقة البالغ 964 ليرة في 2026 يبقى مستحقاً."
        },
        {
          "id": "visa-detail-5",
          "title": "الحقوق والفرق عن الجنسية",
          "body": "يتمتع الحامل بحقوق واسعة مع مراعاة القوانين الخاصة، لكنه لا يصبح مواطناً تركياً. تستثنى حقوق الانتخاب والترشح وبعض الوظائف العامة والإعفاءات الجمركية للمركبات. حدد نظام تصريح العمل المناسب بصورة مستقلة. لا تحل الإقامة محل الجواز ولا تمنح الجنسية تلقائياً."
        },
        {
          "id": "visa-detail-6",
          "title": "الحفاظ على الإقامة الدائمة",
          "body": "قد يؤدي الغياب المتواصل أكثر من سنة إلى الإلغاء، باستثناء أسباب معترف بها مثل العلاج أو الدراسة أو الخدمة العامة الإلزامية في البلد الأصلي. كما يشكل التهديد الخطير للنظام أو الأمن العام سبباً للإلغاء. وقد يمكن إعادة الطلب بعد الإلغاء بسبب الغياب دون إعادة احتساب ثماني سنوات، مع استيفاء بقية الشروط."
        }
      ],
      "faqs": [
        {
          "question": "هل تكفي ثماني سنوات وحدها؟",
          "answer": "لا، يجب استيفاء الاستمرارية والدخل والتأمين وبقية الشروط."
        },
        {
          "question": "هل تحسب سنوات الطالب كاملة؟",
          "answer": "لا، تحسب بالنصف."
        },
        {
          "question": "هل الإقامة الطويلة دائمة؟",
          "answer": "تمنح دون مدة محددة مع إمكانية الإلغاء في الحالات القانونية."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة — رئاسة إدارة الهجرة"
        },
        {
          "href": "https://en.goc.gov.tr/general-information41",
          "label": "الإجراءات والمدد الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "الرسوم الرسمية للإقامة والبطاقة لعام 2026"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "أسئلة الإقامة والوثائق"
        },
        {
          "href": "https://en.goc.gov.tr/frequently-asked-questions-about-foreigners",
          "label": "الشروط القانونية وحقوق المقيمين"
        },
        {
          "href": "https://en.goc.gov.tr/work-permit",
          "label": "تصريح العمل وحق الإقامة"
        }
      ]
    }
  },
  "turkey-residence-renewal": {
    "fr": {
      "title": "Renouveler son ikamet en Turquie en 2026 : délai, documents et procédure",
      "metaDescription": "Renouvelez votre titre de séjour turc : calendrier des 60 jours, documents, frais de carte, adresse et voyages pendant l'instruction.",
      "shortAnswer": "Une demande de renouvellement s'effectue au plus tôt 60 jours avant l'expiration de l'ikamet et impérativement avant la date de fin. Le renouvellement n'est pas automatique : le motif doit toujours être valable et les justificatifs à jour.",
      "bosphorasHelp": "Bosphoras coordonne la préparation pratique de votre projet, les visites et les rendez-vous avec les professionnels indépendants appropriés. Les autorités instruisent les demandes de séjour ; aucun résultat administratif ou financier n'est garanti.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Fixer la date limite",
          "body": "Pour une carte expirant le 30 avril 2027, la fenêtre de dépôt commence le 1er mars 2027. Déposez avant l'expiration, sans attendre le dernier jour. Commencez à réunir les justificatifs plusieurs semaines auparavant, notamment si le passeport doit être renouvelé, l'assurance prolongée ou le bail actualisé.",
          "table": {
            "headers": [
              "Étape",
              "Quand"
            ],
            "rows": [
              [
                "Préparation des pièces",
                "Avant la fenêtre de dépôt"
              ],
              [
                "Dépôt e-ikamet",
                "60 derniers jours et avant expiration"
              ],
              [
                "Remise des pièces",
                "Selon les instructions du dossier"
              ],
              [
                "Décision",
                "90 jours à compter du dossier complet"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Utiliser la bonne démarche",
          "body": "Ouvrez e-ikamet, choisissez la prolongation et renseignez votre numéro d'étranger ainsi que votre titre actuel. En cas de changement de motif, sélectionnez la procédure de transfert appropriée. Respectez les modalités de remise des pièces indiquées dans votre formulaire généré, qui peuvent évoluer selon la province et le type de demande."
        },
        {
          "id": "visa-detail-3",
          "title": "Actualiser le dossier",
          "body": "Préparez l'ancien titre, le passeport, les photos biométriques récentes, l'assurance couvrant la nouvelle durée, les ressources et la preuve du motif de séjour. L'adresse doit être enregistrée lors d'une prolongation ou d'un transfert. Un propriétaire actualise les justificatifs fonciers ; un étudiant produit une inscription en cours ; un dossier familial doit toujours remplir les conditions du sponsor."
        },
        {
          "id": "visa-detail-4",
          "title": "Coût et preuve de dépôt",
          "body": "La carte individuelle coûte 964 TL en 2026. À cela peuvent s'ajouter les droits de séjour liés à la nationalité et à la durée, ainsi que l'assurance. Conservez les reçus et le document officiel de demande. Le formulaire et la prise de rendez-vous officiels ne sont pas des services payants d'intermédiaire."
        },
        {
          "id": "visa-detail-5",
          "title": "Voyage pendant le traitement",
          "body": "Avec le document de demande approuvé et les reçus appropriés, les règles permettent des sorties suivies d'un retour dans les 15 jours, sous réserve des autres conditions. Une simple confirmation de rendez-vous ne suffit pas. Si le dossier est refusé, lisez les droits et obligations de la notification et examinez immédiatement le délai de départ ou de contestation."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je renouveler trois mois avant ?",
          "answer": "Non : la fenêtre normale commence 60 jours avant expiration."
        },
        {
          "question": "Mon adresse est-elle importante ?",
          "answer": "Oui, son enregistrement est requis pour les demandes de prolongation et de transfert."
        },
        {
          "question": "Le renouvellement est-il garanti ?",
          "answer": "Non, le maintien des conditions est contrôlé."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Direction de la migration : types et conditions"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Formulaire et liste de pièces actualisés de la résidence courte durée (mai 2026)"
        },
        {
          "href": "https://istanbul.goc.gov.tr/ikamet-izni-hakkinda-sikca-sorulan-34-soru-34-cevap",
          "label": "Direction de la migration d'Istanbul : refus et procédure"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Agence publique d'investissement : résidence et seuils"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Loi turque 6458, articles 21 à 25 et 31 à 33"
        }
      ]
    },
    "en": {
      "title": "Renewing a Turkey ikamet in 2026: deadlines and documents",
      "metaDescription": "Understand the 60-day renewal window, updated documents, address registration, fees and travel while your application is pending.",
      "shortAnswer": "Apply for an extension no earlier than 60 days before expiry and always before your permit expires. Renewal is not automatic: your residence purpose and evidence must remain valid.",
      "bosphorasHelp": "Bosphoras coordinates practical arrangements, visits and introductions to appropriate independent professionals. Turkish authorities decide residence applications; administrative or financial outcomes are not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Set the deadline",
          "body": "For a permit expiring on 30 April 2027, the filing window opens on 1 March 2027. Apply before expiry rather than waiting until the final day. Prepare documents beforehand, particularly if your passport, insurance or accommodation arrangements need updating.",
          "table": {
            "headers": [
              "Step",
              "When"
            ],
            "rows": [
              [
                "Prepare evidence",
                "Before the filing window"
              ],
              [
                "e-ikamet filing",
                "Final 60 days and before expiry"
              ],
              [
                "Document submission",
                "As instructed"
              ],
              [
                "Decision",
                "90 days from complete file"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Choose the appropriate application",
          "body": "Open e-ikamet, select extension and enter your foreigner identification number and current permit. If your purpose has changed, use the relevant transfer process. Follow the generated form's document-submission instructions, which may vary by province and application type."
        },
        {
          "id": "visa-detail-3",
          "title": "Update the evidence",
          "body": "Prepare the previous card, passport, recent biometric photographs, insurance for the new period, resources and evidence of purpose. Address registration is mandatory for extensions and transfers. Homeowners update title records, students prove enrolment and family applicants establish continuing sponsor eligibility."
        },
        {
          "id": "visa-detail-4",
          "title": "Fees and filing evidence",
          "body": "The individual residence card fee is TRY 964 in 2026, with any nationality- and duration-specific duty and insurance in addition. Retain receipts and the approved application document. Official online filing and appointments do not require paying an intermediary."
        },
        {
          "id": "visa-detail-5",
          "title": "Travel during processing",
          "body": "The approved application document and relevant receipts may permit travel and return within 15 days under the official conditions. An appointment confirmation alone is insufficient. If refused, read the notification's obligations and promptly assess departure or challenge deadlines."
        }
      ],
      "faqs": [
        {
          "question": "Can I renew three months early?",
          "answer": "No; the normal window opens 60 days before expiry."
        },
        {
          "question": "Does my registered address matter?",
          "answer": "Yes, registration is required for extension and transfer applications."
        },
        {
          "question": "Is renewal guaranteed?",
          "answer": "No, continuing eligibility is assessed."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Migration Presidency: categories and conditions"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Updated short-term application form and document list (May 2026)"
        },
        {
          "href": "https://istanbul.goc.gov.tr/ikamet-izni-hakkinda-sikca-sorulan-34-soru-34-cevap",
          "label": "Istanbul Migration Directorate: refusals and procedures"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Government investment office: residence and thresholds"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Turkish Law 6458, Articles 21–25 and 31–33"
        }
      ]
    },
    "ru": {
      "title": "Продление икамета в Турции в 2026 году: сроки и документы",
      "metaDescription": "Срок подачи за 60 дней, продление ВНЖ, документы, адресная регистрация, сборы и выезд во время рассмотрения.",
      "shortAnswer": "Подавать на продление можно не ранее чем за 60 дней до окончания ВНЖ и обязательно до истечения срока. Продление не автоматическое: основание и подтверждающие документы должны оставаться актуальными.",
      "bosphorasHelp": "Bosphoras координирует практические вопросы, просмотры и встречи с подходящими независимыми специалистами. Решения по ВНЖ принимают турецкие органы; административные и финансовые результаты не гарантируются.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Определите крайний срок",
          "body": "Если карта действует до 30 апреля 2027 года, окно подачи открывается 1 марта 2027 года. Не откладывайте заявление до последнего дня. Заранее займитесь обновлением паспорта, страхового полиса и документов на жильё.",
          "table": {
            "headers": [
              "Этап",
              "Когда"
            ],
            "rows": [
              [
                "Подготовка",
                "До открытия окна"
              ],
              [
                "Подача e-ikamet",
                "Последние 60 дней до истечения"
              ],
              [
                "Сдача документов",
                "По инструкции"
              ],
              [
                "Решение",
                "90 дней с полного комплекта"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Выберите нужную процедуру",
          "body": "Откройте e-ikamet, выберите продление, укажите номер иностранца и действующий ВНЖ. Если цель проживания изменилась, используйте процедуру перехода на другую категорию. Следуйте указаниям сформированной анкеты по сдаче документов: порядок может различаться по провинциям и типам заявлений."
        },
        {
          "id": "visa-detail-3",
          "title": "Обновите комплект документов",
          "body": "Подготовьте прежний ВНЖ, паспорт, актуальные биометрические фотографии, страховку на новый срок, подтверждение средств и основания проживания. Для продления и перехода требуется зарегистрированный адрес. Собственник обновляет документы на недвижимость, студент подтверждает обучение, семья — соответствие спонсора условиям."
        },
        {
          "id": "visa-detail-4",
          "title": "Сборы и подтверждение подачи",
          "body": "Карта ВНЖ в 2026 году стоит 964 лиры. Дополнительно возможны сборы по гражданству и сроку, а также расходы на страховку. Сохраняйте квитанции и утверждённый документ заявления. Официальная онлайн-подача и запись бесплатны."
        },
        {
          "id": "visa-detail-5",
          "title": "Поездки во время рассмотрения",
          "body": "Утверждённый документ заявления и соответствующие квитанции могут позволить выезд с возвращением в течение 15 дней при соблюдении правил. Простого подтверждения записи недостаточно. При отказе прочтите уведомление и незамедлительно выясните сроки выезда и обжалования."
        }
      ],
      "faqs": [
        {
          "question": "Можно продлить за три месяца?",
          "answer": "Нет, обычное окно открывается за 60 дней."
        },
        {
          "question": "Важна ли регистрация адреса?",
          "answer": "Да, она требуется при продлении и смене категории."
        },
        {
          "question": "Гарантируется ли продление?",
          "answer": "Нет, соответствие условиям проверяется заново."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Миграционная служба: виды и условия"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Актуальная форма и перечень документов (май 2026)"
        },
        {
          "href": "https://istanbul.goc.gov.tr/ikamet-izni-hakkinda-sikca-sorulan-34-soru-34-cevap",
          "label": "Управление миграции Стамбула: отказы и процедуры"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Государственное инвестиционное агентство: ВНЖ и пороги"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Закон Турции № 6458, статьи 21–25 и 31–33"
        }
      ]
    },
    "ar": {
      "title": "تجديد الإيكامت في تركيا 2026: المواعيد والوثائق والإجراءات",
      "metaDescription": "تعرف على فترة التجديد قبل 60 يوماً والوثائق المحدثة وتسجيل العنوان والرسوم والسفر أثناء دراسة الطلب.",
      "shortAnswer": "يقدم طلب التجديد ابتداءً من 60 يوماً قبل انتهاء التصريح ويجب تقديمه قبل انتهاء الصلاحية. التجديد ليس تلقائياً؛ يجب استمرار الأساس القانوني وتحديث المستندات.",
      "bosphorasHelp": "تنسق Bosphoras الترتيبات العملية والزيارات والمواعيد مع المختصين المستقلين المناسبين. تبت السلطات التركية في طلبات الإقامة ولا يمكن ضمان النتائج الإدارية أو المالية.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "تحديد الموعد النهائي",
          "body": "إذا انتهت البطاقة في 30 أبريل 2027 تبدأ فترة التقديم في 1 مارس 2027. قدّم قبل الانتهاء ولا تنتظر اليوم الأخير. جهز الوثائق مسبقاً خصوصاً إذا كان الجواز أو التأمين أو إثبات السكن بحاجة إلى تحديث.",
          "table": {
            "headers": [
              "الخطوة",
              "الموعد"
            ],
            "rows": [
              [
                "تجهيز الوثائق",
                "قبل فترة التقديم"
              ],
              [
                "تقديم إلكتروني",
                "آخر 60 يوماً وقبل الانتهاء"
              ],
              [
                "تسليم الوثائق",
                "وفق التعليمات"
              ],
              [
                "القرار",
                "90 يوماً من اكتمال الملف"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "اختيار الإجراء المناسب",
          "body": "افتح e-ikamet واختر التجديد وأدخل رقم هوية الأجنبي وبيانات التصريح الحالي. إذا تغير غرض الإقامة فاختر إجراء تغيير النوع. اتبع تعليمات تسليم الوثائق في الاستمارة الصادرة حيث قد تختلف بين الولايات وأنواع الطلبات."
        },
        {
          "id": "visa-detail-3",
          "title": "تحديث المستندات",
          "body": "جهز البطاقة السابقة والجواز والصور البيومترية الحديثة والتأمين للمدة الجديدة وإثبات الموارد والغرض. تسجيل العنوان إلزامي للتجديد وتغيير النوع. يحدث المالك وثائق الملكية ويثبت الطالب تسجيله وتثبت الأسرة استمرار أهلية الكفيل."
        },
        {
          "id": "visa-detail-4",
          "title": "الرسوم وإثبات الطلب",
          "body": "رسم البطاقة الفردية لعام 2026 هو 964 ليرة. وقد تضاف رسوم بحسب الجنسية والمدة والتأمين. احتفظ بالإيصالات ومستند الطلب المعتمد. التقديم الإلكتروني والموعد الرسمي مجانيان ولا يستلزمان دفع أتعاب لوسيط."
        },
        {
          "id": "visa-detail-5",
          "title": "السفر أثناء دراسة الطلب",
          "body": "قد يسمح المستند المعتمد والإيصالات بالخروج والعودة خلال 15 يوماً وفق الشروط الرسمية. لا يكفي تأكيد الموعد وحده. إذا رفض الطلب اقرأ الالتزامات والحقوق الواردة في الإخطار وحدد بسرعة مهلة المغادرة أو الاعتراض."
        }
      ],
      "faqs": [
        {
          "question": "هل أجدد قبل ثلاثة أشهر؟",
          "answer": "لا، تبدأ الفترة العادية قبل 60 يوماً."
        },
        {
          "question": "هل يجب تسجيل العنوان؟",
          "answer": "نعم للتجديد وتغيير نوع الإقامة."
        },
        {
          "question": "هل التجديد مضمون؟",
          "answer": "لا، يعاد تقييم الشروط."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "إدارة الهجرة: الأنواع والشروط"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "نموذج الإقامة القصيرة وقائمة المستندات المحدثة (مايو 2026)"
        },
        {
          "href": "https://istanbul.goc.gov.tr/ikamet-izni-hakkinda-sikca-sorulan-34-soru-34-cevap",
          "label": "إدارة هجرة إسطنبول: الرفض والإجراءات"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "مكتب الاستثمار الحكومي: الإقامة والحدود الاستثمارية"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "القانون التركي 6458، المواد 21–25 و31–33"
        }
      ]
    }
  },
  "turkey-residence-rejection": {
    "fr": {
      "title": "Refus d'ikamet en Turquie : recours, nouvelle demande et délais",
      "metaDescription": "Que faire après un refus ou non-renouvellement de résidence en Turquie ? Notification, règle des six mois, départ et contestation.",
      "shortAnswer": "Un refus de titre de séjour doit être notifié avec les droits et obligations qui en découlent. La priorité est de relever la date de notification, la raison exacte et la situation de séjour actuelle. Un recours ne doit pas être considéré comme une prolongation automatique du droit de rester.",
      "bosphorasHelp": "Bosphoras coordonne la préparation pratique de votre projet, les visites et les rendez-vous avec les professionnels indépendants appropriés. Les autorités instruisent les demandes de séjour ; aucun résultat administratif ou financier n'est garanti.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Lire la décision officielle",
          "body": "Demandez la décision écrite et conservez une copie datée. Identifiez s'il s'agit d'un rejet, d'un refus de renouvellement, d'une annulation ou d'un dossier classé faute de pièces. L'article 25 de la loi 6458 prévoit la notification au demandeur ou à son représentant et l'indication des voies de recours. Les attaches familiales et l'intérêt de l'enfant peuvent être pertinents.",
          "table": {
            "headers": [
              "Situation",
              "Action"
            ],
            "rows": [
              [
                "Demande de pièce complémentaire",
                "Respecter le délai de la notification"
              ],
              [
                "Refus du même motif",
                "Nouvelle demande : règle des 6 mois"
              ],
              [
                "Autre motif réel",
                "Possible si séjour encore légal et conditions réunies"
              ],
              [
                "Décision contestée",
                "Faire examiner délai et suspension éventuelle"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Comprendre les motifs de refus",
          "body": "Pour un titre court, l'absence de preuve du motif, un logement non conforme, des justificatifs insuffisants ou l'utilisation du titre à une autre fin peuvent justifier un refus. Une interdiction d'entrée ou une décision d'éloignement peut également faire obstacle. Comparez les pièces réellement soumises aux exigences de la catégorie et ne tentez pas de corriger un dossier avec de fausses preuves."
        },
        {
          "id": "visa-detail-3",
          "title": "Nouvelle demande : la règle des six mois",
          "body": "La Direction de la migration d'Istanbul indique qu'une demande pour le même motif ne peut pas être renouvelée dans les six mois suivant un rejet. Si le séjour légal est toujours en cours et qu'un autre motif authentique existe, une demande distincte peut être possible. Un changement artificiel de catégorie ne remplace pas une condition légale."
        },
        {
          "id": "visa-detail-4",
          "title": "Contestation et droit de rester",
          "body": "Un avocat turc compétent peut examiner le recours administratif ou juridictionnel, son délai et une éventuelle demande de suspension. La notification et la nature de la décision déterminent les démarches. Le dépôt d'une contestation ne suspend pas de lui-même l'ensemble des obligations de séjour ou de départ ; une mesure d'éloignement distincte peut avoir ses propres délais."
        },
        {
          "id": "visa-detail-5",
          "title": "Préparer les prochaines 48 heures",
          "body": "Conservez notification, passeport, carte précédente, formulaire, reçus, pièces transmises et preuves de la situation familiale. Notez les dates d'expiration et de notification. Si le droit de séjour est incertain, consultez rapidement un avocat avant tout nouveau voyage ou demande. Organisez le départ si les autorités l'imposent ; ne vous fiez pas à une tolérance supposée."
        }
      ],
      "faqs": [
        {
          "question": "Puis-je redéposer le même motif immédiatement ?",
          "answer": "Non, le délai indiqué pour le même motif est de six mois."
        },
        {
          "question": "Un recours permet-il automatiquement de rester ?",
          "answer": "Non. Faites déterminer le statut applicable et l'éventuelle suspension."
        },
        {
          "question": "Une autre catégorie est-elle possible ?",
          "answer": "Si le séjour reste légal et le nouveau motif est réel et admissible."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Direction de la migration : types et conditions"
        },
        {
          "href": "https://istanbul.goc.gov.tr/ikamet-izni-hakkinda-sikca-sorulan-34-soru-34-cevap",
          "label": "Direction de la migration d'Istanbul : refus et procédure"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Loi turque 6458, articles 21 à 25 et 31 à 33"
        }
      ]
    },
    "en": {
      "title": "Turkey residence permit refusal: appeals, reapplication and deadlines",
      "metaDescription": "What to do after a rejected or non-renewed Turkish residence permit: notification, the six-month rule, departure obligations and legal review.",
      "shortAnswer": "A refusal should be formally notified with the applicant's rights and obligations. Establish the notification date, exact reasons and current lawful status first. Filing a challenge is not an automatic extension of residence rights.",
      "bosphorasHelp": "Bosphoras coordinates practical arrangements, visits and introductions to appropriate independent professionals. Turkish authorities decide residence applications; administrative or financial outcomes are not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Read and preserve the decision",
          "body": "Obtain the written decision and preserve a dated copy. Establish whether it concerns refusal, non-renewal, cancellation or closure for missing documents. Article 25 of Law 6458 provides for notification to the applicant or representative and explanation of appeal rights. Family ties and the child's best interests may be relevant.",
          "table": {
            "headers": [
              "Situation",
              "Action"
            ],
            "rows": [
              [
                "Further evidence requested",
                "Meet notice deadline"
              ],
              [
                "Same-purpose refusal",
                "Six-month reapplication restriction"
              ],
              [
                "Genuine different purpose",
                "Possible if stay lawful and eligible"
              ],
              [
                "Challenged decision",
                "Review deadline and potential suspension"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Identify the grounds",
          "body": "Short-term refusal may result from inadequate evidence of purpose, unsuitable housing, missing evidence or use outside the granted purpose. An entry ban or removal decision may also prevent approval. Compare the submitted evidence with the category's requirements; never use fabricated records."
        },
        {
          "id": "visa-detail-3",
          "title": "The six-month reapplication rule",
          "body": "The Istanbul Migration Directorate states that the same residence purpose cannot be used again within six months of rejection. Where lawful stay continues and a genuine different basis exists, a separate application may be possible. An artificial change of category is not a substitute for eligibility."
        },
        {
          "id": "visa-detail-4",
          "title": "Legal review and lawful stay",
          "body": "A qualified Turkish lawyer can assess the appropriate administrative or judicial challenge, applicable deadline and possible interim suspension. The notification and decision type govern the procedure. Filing a challenge alone does not suspend all residence or departure obligations; separate removal decisions may have their own deadlines."
        },
        {
          "id": "visa-detail-5",
          "title": "What to prepare in the next 48 hours",
          "body": "Keep the notification, passport, previous card, application, receipts, submitted evidence and family records. Note expiry and notification dates. If lawful status is uncertain, seek prompt legal advice before another application or trip. Arrange departure when required rather than relying on assumed enforcement discretion."
        }
      ],
      "faqs": [
        {
          "question": "Can I reapply immediately on the same basis?",
          "answer": "No, the official guidance specifies six months for the same purpose."
        },
        {
          "question": "Does an appeal automatically allow me to stay?",
          "answer": "No; determine your status and any applicable suspension."
        },
        {
          "question": "Can I apply under a different category?",
          "answer": "Potentially, if your stay remains lawful and the alternative basis is genuine."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Migration Presidency: categories and conditions"
        },
        {
          "href": "https://istanbul.goc.gov.tr/ikamet-izni-hakkinda-sikca-sorulan-34-soru-34-cevap",
          "label": "Istanbul Migration Directorate: refusals and procedures"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Turkish Law 6458, Articles 21–25 and 31–33"
        }
      ]
    },
    "ru": {
      "title": "Отказ в ВНЖ Турции: обжалование, повторная подача и сроки",
      "metaDescription": "Что делать после отказа или непродления икамета: уведомление, шестимесячное ограничение, выезд и правовая защита.",
      "shortAnswer": "Об отказе в ВНЖ должны официально уведомить с разъяснением прав и обязанностей. Сначала установите дату уведомления, точную причину отказа и текущий статус пребывания. Жалоба сама по себе не продлевает право находиться в стране.",
      "bosphorasHelp": "Bosphoras координирует практические вопросы, просмотры и встречи с подходящими независимыми специалистами. Решения по ВНЖ принимают турецкие органы; административные и финансовые результаты не гарантируются.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Изучите официальное решение",
          "body": "Получите письменное решение и сохраните датированную копию. Определите, отказано ли в выдаче, продлении, аннулирован ли ВНЖ или закрыто неполное дело. Статья 25 закона № 6458 предусматривает уведомление заявителя или представителя и разъяснение обжалования. Могут учитываться семейные связи и интересы ребёнка.",
          "table": {
            "headers": [
              "Ситуация",
              "Действие"
            ],
            "rows": [
              [
                "Запрос документов",
                "Соблюсти срок уведомления"
              ],
              [
                "Отказ по той же цели",
                "Ограничение 6 месяцев"
              ],
              [
                "Другое основание",
                "При законном пребывании и соответствии"
              ],
              [
                "Обжалование",
                "Проверить срок и приостановку"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Причины отказа",
          "body": "Краткосрочный ВНЖ могут не выдать при недостаточном подтверждении цели, неподходящем жилье, отсутствии документов или использовании разрешения не по назначению. Запрет на въезд или решение о выдворении также могут препятствовать выдаче. Сопоставьте поданные документы с требованиями; не используйте фиктивные сведения."
        },
        {
          "id": "visa-detail-3",
          "title": "Повторная подача в течение шести месяцев",
          "body": "Миграционное управление Стамбула указывает, что в течение шести месяцев после отказа нельзя подавать по той же цели. Если законный срок пребывания продолжается и имеется другое подлинное основание, можно рассмотреть новую категорию. Формальная смена основания не заменяет соответствие требованиям."
        },
        {
          "id": "visa-detail-4",
          "title": "Обжалование и законное пребывание",
          "body": "Турецкий адвокат может оценить административное или судебное обжалование, сроки и возможную приостановку решения. Процедура зависит от вида решения и уведомления. Жалоба не приостанавливает автоматически все обязанности по пребыванию или выезду; отдельное решение о выдворении может иметь собственные сроки."
        },
        {
          "id": "visa-detail-5",
          "title": "Документы на ближайшие 48 часов",
          "body": "Соберите уведомление, паспорт, старый ВНЖ, заявление, квитанции, поданные документы и подтверждения семейной ситуации. Запишите даты окончания срока и вручения решения. При неясном статусе обратитесь к адвокату до новой подачи или поездки. Если требуется выезд, организуйте его, не рассчитывая на предполагаемую терпимость."
        }
      ],
      "faqs": [
        {
          "question": "Можно сразу подать по той же цели?",
          "answer": "Нет, для прежней цели указан срок шесть месяцев."
        },
        {
          "question": "Жалоба автоматически разрешает оставаться?",
          "answer": "Нет, необходима оценка статуса и возможной приостановки."
        },
        {
          "question": "Возможно другое основание?",
          "answer": "Если пребывание законно и новая цель действительна и допустима."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Миграционная служба: виды и условия"
        },
        {
          "href": "https://istanbul.goc.gov.tr/ikamet-izni-hakkinda-sikca-sorulan-34-soru-34-cevap",
          "label": "Управление миграции Стамбула: отказы и процедуры"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Закон Турции № 6458, статьи 21–25 и 31–33"
        }
      ]
    },
    "ar": {
      "title": "رفض الإقامة في تركيا: الاعتراض وإعادة الطلب والمواعيد",
      "metaDescription": "ما العمل بعد رفض الإيكامت أو عدم تجديده؟ الإخطار وقاعدة الأشهر الستة والمغادرة والمراجعة القانونية.",
      "shortAnswer": "يجب إخطار مقدم طلب الإقامة بالرفض مع بيان حقوقه والتزاماته. الأولوية لتحديد تاريخ الإخطار والسبب الفعلي والوضع القانوني الحالي. لا يعتبر تقديم اعتراض تمديداً تلقائياً لحق البقاء.",
      "bosphorasHelp": "تنسق Bosphoras الترتيبات العملية والزيارات والمواعيد مع المختصين المستقلين المناسبين. تبت السلطات التركية في طلبات الإقامة ولا يمكن ضمان النتائج الإدارية أو المالية.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "قراءة القرار الرسمي",
          "body": "اطلب نسخة مكتوبة مؤرخة وحدد هل يتعلق القرار بالرفض أو عدم التجديد أو الإلغاء أو إغلاق الملف الناقص. تنص المادة 25 من القانون 6458 على إخطار مقدم الطلب أو ممثله وبيان طرق الاعتراض. وقد تؤخذ الروابط العائلية ومصلحة الطفل بعين الاعتبار.",
          "table": {
            "headers": [
              "الحالة",
              "الإجراء"
            ],
            "rows": [
              [
                "طلب استكمال",
                "التزم بمهلة الإخطار"
              ],
              [
                "رفض الغرض نفسه",
                "قيد الستة أشهر"
              ],
              [
                "غرض مختلف حقيقي",
                "إذا كان البقاء قانونياً والشروط مكتملة"
              ],
              [
                "اعتراض",
                "راجع المهلة وإمكان وقف التنفيذ"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "فهم أسباب الرفض",
          "body": "قد يرفض التصريح القصير بسبب عدم إثبات الغرض أو السكن غير الملائم أو نقص الوثائق أو استعمال التصريح لغير غرضه. وقد يمنع قرار إبعاد أو حظر دخول الموافقة. قارن المستندات المقدمة فعلاً بالشروط ولا تستخدم وثائق وهمية."
        },
        {
          "id": "visa-detail-3",
          "title": "إعادة الطلب وقاعدة الأشهر الستة",
          "body": "توضح إدارة هجرة إسطنبول أنه لا يمكن إعادة الطلب للغرض نفسه خلال ستة أشهر من الرفض. إذا استمر البقاء القانوني ووجد أساس مختلف حقيقي فقد يكون الطلب الجديد ممكناً. لا يغني تغيير النوع شكلياً عن استيفاء الشروط."
        },
        {
          "id": "visa-detail-4",
          "title": "الاعتراض وحق البقاء",
          "body": "يمكن لمحام تركي مختص تقييم الاعتراض الإداري أو القضائي ومهلته وطلب وقف التنفيذ المحتمل. تحدد طبيعة القرار والإخطار الإجراء المناسب. لا يعلق الاعتراض وحده جميع التزامات البقاء أو المغادرة تلقائياً؛ وقد تكون لقرار الإبعاد المنفصل مهل خاصة."
        },
        {
          "id": "visa-detail-5",
          "title": "ما ينبغي تجهيزه خلال 48 ساعة",
          "body": "احتفظ بالإخطار والجواز والبطاقة السابقة والطلب والإيصالات والوثائق المقدمة وإثباتات الأسرة. سجل تاريخ الانتهاء والإخطار. إذا لم يتضح وضعك القانوني فاستشر محامياً قبل تقديم طلب آخر أو السفر. رتب المغادرة إذا كانت مطلوبة ولا تعتمد على تساهل مفترض."
        }
      ],
      "faqs": [
        {
          "question": "هل أعيد الطلب فوراً للغرض نفسه؟",
          "answer": "لا، تشير القاعدة الرسمية إلى ستة أشهر."
        },
        {
          "question": "هل يسمح الاعتراض بالبقاء تلقائياً؟",
          "answer": "لا، يلزم تحديد الوضع وأي وقف تنفيذ."
        },
        {
          "question": "هل يمكن طلب نوع آخر؟",
          "answer": "إذا كان البقاء قانونياً والأساس الجديد حقيقياً ومؤهلاً."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "إدارة الهجرة: الأنواع والشروط"
        },
        {
          "href": "https://istanbul.goc.gov.tr/ikamet-izni-hakkinda-sikca-sorulan-34-soru-34-cevap",
          "label": "إدارة هجرة إسطنبول: الرفض والإجراءات"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "القانون التركي 6458، المواد 21–25 و31–33"
        }
      ]
    }
  },
  "turkey-residence-documents": {
    "fr": {
      "title": "Documents ikamet Turquie 2026 : liste officielle et pièces par motif",
      "metaDescription": "Préparez votre dossier de résidence : formulaire, passeport, photos, assurance, ressources, adresse, UETS et justificatifs selon le motif.",
      "shortAnswer": "Le formulaire officiel de courte durée actualisé en mai 2026 fournit les pièces communes et les justificatifs propres à chaque motif. Le dossier généré pour votre demande reste déterminant ; certaines catégories et situations exigent des documents supplémentaires.",
      "bosphorasHelp": "Bosphoras coordonne la préparation pratique de votre projet, les visites et les rendez-vous avec les professionnels indépendants appropriés. Les autorités instruisent les demandes de séjour ; aucun résultat administratif ou financier n'est garanti.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Documents communs à préparer",
          "body": "Imprimez et signez la demande. Présentez les copies des pages d'identité et de visa avec le passeport original. Le formulaire de courte durée actualisé demande deux photos biométriques de moins de six mois, sur fond blanc et conformes ICAO. Vérifiez le nombre affiché sur votre propre formulaire : des listes plus anciennes mentionnent quatre photos.",
          "table": {
            "headers": [
              "Pièce",
              "Préparation"
            ],
            "rows": [
              [
                "Formulaire",
                "Signé"
              ],
              [
                "Passeport",
                "Original et copies utiles"
              ],
              [
                "Photos",
                "2 dans le formulaire court de mai 2026"
              ],
              [
                "Logement",
                "Tapu, bail ou autre justificatif admis"
              ],
              [
                "Assurance",
                "Couverture admise ou exemption"
              ],
              [
                "Ressources et motif",
                "Selon catégorie"
              ],
              [
                "Paiements",
                "Reçus officiels"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Logement et enregistrement",
          "body": "Pour une location, utilisez le contrat conforme à la formalité requise, généralement notarié. Pour une propriété, présentez le tapu et, à la première demande, le document municipal identifiant l'adresse. L'hébergement chez un tiers peut nécessiter un engagement authentifié. La résidence doit correspondre à l'adresse effective ; le renouvellement exige l'inscription de l'adresse."
        },
        {
          "id": "visa-detail-3",
          "title": "Assurance, revenus et frais",
          "body": "Préparez une couverture admissible pour la durée demandée, sauf exemption. Des preuves de revenus réguliers peuvent être demandées selon le motif : relevés, pension ou autres justificatifs authentiques. Présentez les reçus du droit de séjour s'il est dû et des frais de carte. En 2026 la carte coûte 964 TL."
        },
        {
          "id": "visa-detail-4",
          "title": "Justificatifs selon le motif",
          "body": "Pour un propriétaire, le formulaire indique un logement d'une valeur d'au moins 200 000 USD en équivalent TL à la date d'acquisition, utilisé par le demandeur pour habiter. Un projet commercial peut exiger une invitation ou des documents de société. Les étudiants présentent l'inscription ; les familles fournissent les actes prouvant le lien et les documents du sponsor. Les actes étrangers peuvent nécessiter apostille ou légalisation et traduction certifiée."
        },
        {
          "id": "visa-detail-5",
          "title": "Contrôle avant le rendez-vous",
          "body": "Vérifiez les dates, noms et numéros sur chaque document. Si le formulaire demande une adresse de notification électronique UETS, suivez les instructions de création ou justificatif. Gardez les originaux, classés par personne, et les copies. En première demande, procédez à l'enregistrement d'adresse après acceptation dans le délai indiqué, normalement 20 jours ouvrables. En cas de demande de complément, respectez la notification."
        }
      ],
      "faqs": [
        {
          "question": "Combien de photos pour une courte durée ?",
          "answer": "Le formulaire actualisé demande deux photos ; suivez celui de votre dossier."
        },
        {
          "question": "Est-il nécessaire de présenter l'original du passeport ?",
          "answer": "Oui, apportez-le au rendez-vous."
        },
        {
          "question": "Faut-il toujours apostiller ?",
          "answer": "Cela dépend du pays, de la nature du document et des conventions."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Direction de la migration : types et conditions"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Formulaire et liste de pièces actualisés de la résidence courte durée (mai 2026)"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Agence publique d'investissement : résidence et seuils"
        }
      ]
    },
    "en": {
      "title": "Turkey ikamet documents 2026: official checklist by purpose",
      "metaDescription": "Prepare the residence form, passport, biometric photos, insurance, finances, address, UETS and purpose-specific evidence.",
      "shortAnswer": "The short-term application form updated in May 2026 identifies common and purpose-specific documents. Follow the form generated for your case; particular categories and circumstances can require additional records.",
      "bosphorasHelp": "Bosphoras coordinates practical arrangements, visits and introductions to appropriate independent professionals. Turkish authorities decide residence applications; administrative or financial outcomes are not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Common documents",
          "body": "Print and sign the application. Copy identity and visa pages and take the original passport. The updated short-term form asks for two biometric photos taken within six months, on a white background and complying with ICAO standards. Older lists mention four; use the number on your own generated form.",
          "table": {
            "headers": [
              "Document",
              "Preparation"
            ],
            "rows": [
              [
                "Application",
                "Signed"
              ],
              [
                "Passport",
                "Original and relevant copies"
              ],
              [
                "Photos",
                "2 on May 2026 short-term form"
              ],
              [
                "Housing",
                "Deed, lease or accepted evidence"
              ],
              [
                "Insurance",
                "Eligible cover or exemption"
              ],
              [
                "Means and purpose",
                "By category"
              ],
              [
                "Payments",
                "Official receipts"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Accommodation and registration",
          "body": "Provide a compliant lease, generally notarised, or a title deed. First property-based applications require municipal address identification evidence. Staying with a host may require an authenticated undertaking. Your address must be your actual residence; an extension requires registered address details."
        },
        {
          "id": "visa-detail-3",
          "title": "Insurance, means and fees",
          "body": "Provide eligible coverage for the requested period unless exempt. Depending on purpose, regular income may need proof through statements, pension or other genuine records. Include receipts for applicable residence duty and card fee. The card fee is TRY 964 in 2026."
        },
        {
          "id": "visa-detail-4",
          "title": "Purpose-specific evidence",
          "body": "The homeowner form specifies residential property worth at least USD 200,000 in TRY equivalent at acquisition and used as the applicant's own home. Commercial applicants may need invitations or company documents. Students provide enrolment, families prove relationships and sponsor eligibility. Foreign civil records may require apostille or legalisation and certified translation."
        },
        {
          "id": "visa-detail-5",
          "title": "Before the appointment",
          "body": "Check dates, names and numbers throughout. If the form requires a UETS electronic notification address, follow its registration and evidence instructions. Organise originals and copies separately for each person. After first approval, register the address within the official deadline, normally 20 working days. Respond to any request for further documents within the stated deadline."
        }
      ],
      "faqs": [
        {
          "question": "How many photographs are required?",
          "answer": "The updated short-term form specifies two; follow your generated form."
        },
        {
          "question": "Should I bring the original passport?",
          "answer": "Yes, bring it to the appointment."
        },
        {
          "question": "Is apostille always necessary?",
          "answer": "It depends on document type, issuing country and treaties."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Migration Presidency: categories and conditions"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Updated short-term application form and document list (May 2026)"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Government investment office: residence and thresholds"
        }
      ]
    },
    "ru": {
      "title": "Документы на икамет в Турции 2026: официальный список",
      "metaDescription": "Анкета, паспорт, фотографии, страховка, доход, адрес, UETS и дополнительные документы по каждому основанию.",
      "shortAnswer": "Обновлённая в мае 2026 года форма краткосрочного ВНЖ определяет общие документы и подтверждения по целям. Следуйте списку своего заявления; в отдельных категориях могут потребоваться дополнительные документы.",
      "bosphorasHelp": "Bosphoras координирует практические вопросы, просмотры и встречи с подходящими независимыми специалистами. Решения по ВНЖ принимают турецкие органы; административные и финансовые результаты не гарантируются.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Общий комплект",
          "body": "Распечатайте и подпишите заявление. Подготовьте копии страниц паспорта с данными и визой; возьмите оригинал. Актуальная краткосрочная форма требует две биометрические фотографии за последние шесть месяцев на белом фоне по стандартам ICAO. В старых списках указаны четыре; ориентируйтесь на свою анкету.",
          "table": {
            "headers": [
              "Документ",
              "Подготовка"
            ],
            "rows": [
              [
                "Анкета",
                "Подписанная"
              ],
              [
                "Паспорт",
                "Оригинал и копии"
              ],
              [
                "Фото",
                "2 в форме мая 2026"
              ],
              [
                "Жильё",
                "Tapu, аренда или иное подтверждение"
              ],
              [
                "Страховка",
                "Подходящее покрытие или освобождение"
              ],
              [
                "Средства и цель",
                "По категории"
              ],
              [
                "Оплата",
                "Официальные квитанции"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Жильё и адрес",
          "body": "Для аренды потребуется соответствующий договор, обычно нотариальный, для собственности — tapu. При первой подаче собственнику нужен муниципальный документ с адресом объекта. Проживание у другого лица может требовать заверенного обязательства. Адрес должен быть фактическим; при продлении нужна его регистрация."
        },
        {
          "id": "visa-detail-3",
          "title": "Страховка, средства и сборы",
          "body": "Представьте подходящее страховое покрытие на запрашиваемый срок, если нет освобождения. В зависимости от основания могут требоваться выписки, пенсия или другие доказательства регулярного дохода. Приложите квитанции по применимым сборам. Карта в 2026 году стоит 964 лиры."
        },
        {
          "id": "visa-detail-4",
          "title": "Дополнительные документы по цели",
          "body": "Для собственника форма предусматривает жильё стоимостью от 200 000 долларов в эквиваленте лир на дату приобретения для собственного проживания. Деловая цель может потребовать приглашения или документы компании. Студенты подтверждают учёбу, семьи — родство и статус спонсора. Иностранные акты могут требовать апостиля или легализации и заверенного перевода."
        },
        {
          "id": "visa-detail-5",
          "title": "Проверка перед приёмом",
          "body": "Сверьте имена, номера и даты. Если форма требует электронный адрес уведомлений UETS, следуйте указаниям регистрации. Разложите оригиналы и копии по заявителям. После первого одобрения зарегистрируйте адрес в установленный срок, обычно 20 рабочих дней. Дополнительные документы сдавайте в срок уведомления."
        }
      ],
      "faqs": [
        {
          "question": "Сколько фотографий нужно?",
          "answer": "В актуальной краткосрочной форме — две; следуйте своему списку."
        },
        {
          "question": "Нужен оригинал паспорта?",
          "answer": "Да, принесите на приём."
        },
        {
          "question": "Всегда нужен апостиль?",
          "answer": "Зависит от документа, страны выдачи и договоров."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Миграционная служба: виды и условия"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Актуальная форма и перечень документов (май 2026)"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Государственное инвестиционное агентство: ВНЖ и пороги"
        }
      ]
    },
    "ar": {
      "title": "وثائق الإقامة في تركيا 2026: القائمة الرسمية حسب الغرض",
      "metaDescription": "جهز الاستمارة والجواز والصور والتأمين والموارد والعنوان وUETS والمستندات الإضافية لكل نوع.",
      "shortAnswer": "يحدد نموذج الإقامة القصيرة المحدث في مايو 2026 الوثائق المشتركة والإثباتات الخاصة بالغرض. اتبع القائمة الصادرة لطلبك؛ فقد تتطلب أنواع وظروف معينة مستندات إضافية.",
      "bosphorasHelp": "تنسق Bosphoras الترتيبات العملية والزيارات والمواعيد مع المختصين المستقلين المناسبين. تبت السلطات التركية في طلبات الإقامة ولا يمكن ضمان النتائج الإدارية أو المالية.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "المستندات المشتركة",
          "body": "اطبع الطلب ووقعه وقدم نسخ صفحات الهوية والتأشيرة مع أصل الجواز. يطلب النموذج المحدث صورتين بيومتريتين خلال آخر ستة أشهر على خلفية بيضاء وفق معايير ICAO. تذكر قوائم قديمة أربع صور، فاتبع العدد الوارد في نموذجك.",
          "table": {
            "headers": [
              "الوثيقة",
              "التجهيز"
            ],
            "rows": [
              [
                "الطلب",
                "موقع"
              ],
              [
                "الجواز",
                "الأصل والنسخ"
              ],
              [
                "الصور",
                "صورتان في نموذج مايو 2026"
              ],
              [
                "السكن",
                "طابو أو عقد أو إثبات مقبول"
              ],
              [
                "التأمين",
                "تغطية مؤهلة أو إعفاء"
              ],
              [
                "الموارد والغرض",
                "بحسب النوع"
              ],
              [
                "الدفع",
                "إيصالات رسمية"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "السكن وتسجيل العنوان",
          "body": "قدم عقد إيجار مطابقاً وعادة موثقاً أو سند الملكية. وفي الطلب الأول للمالك يلزم مستند بلدي يحدد عنوان العقار. وقد يتطلب السكن عند مضيف تعهداً مصدقاً. يجب أن يكون العنوان مسكنك الفعلي وأن يكون مسجلاً للتجديد."
        },
        {
          "id": "visa-detail-3",
          "title": "التأمين والموارد والرسوم",
          "body": "قدم تغطية مؤهلة للمدة المطلوبة ما لم ينطبق إعفاء. قد يلزم إثبات دخل منتظم بكشوف الحساب أو المعاش وفق الغرض. أرفق إيصالات الرسوم المطبقة ورسوم البطاقة. تبلغ رسوم البطاقة في 2026 نحو 964 ليرة."
        },
        {
          "id": "visa-detail-4",
          "title": "الوثائق بحسب الغرض",
          "body": "يشترط نموذج المالك مسكناً بقيمة 200 ألف دولار على الأقل بما يعادلها بالليرة عند الشراء يستخدمه مقدم الطلب للسكن الشخصي. وقد يلزم للأعمال دعوة أو وثائق الشركة. يقدم الطالب إثبات التسجيل والأسرة إثبات القرابة وأهلية الكفيل. وقد تتطلب الوثائق الأجنبية أبوستيل أو تصديقاً وترجمة معتمدة."
        },
        {
          "id": "visa-detail-5",
          "title": "المراجعة قبل الموعد",
          "body": "راجع الأسماء والأرقام والتواريخ. إذا طلب النموذج عنوان الإخطار الإلكتروني UETS فاتبع تعليمات التسجيل. رتب الأصول والنسخ لكل شخص. بعد الموافقة الأولى سجل العنوان ضمن المدة الرسمية وهي عادة 20 يوم عمل. استكمل أي نقص ضمن المهلة الواردة في الإخطار."
        }
      ],
      "faqs": [
        {
          "question": "كم صورة مطلوبة؟",
          "answer": "صورتان حسب النموذج المحدث للإقامة القصيرة؛ اتبع نموذجك."
        },
        {
          "question": "هل أحضر أصل الجواز؟",
          "answer": "نعم للموعد."
        },
        {
          "question": "هل أبوستيل إلزامي دائماً؟",
          "answer": "يتوقف على الوثيقة وبلد الإصدار والاتفاقيات."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "إدارة الهجرة: الأنواع والشروط"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "نموذج الإقامة القصيرة وقائمة المستندات المحدثة (مايو 2026)"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "مكتب الاستثمار الحكومي: الإقامة والحدود الاستثمارية"
        }
      ]
    }
  },
  "turkey-residence-investor": {
    "fr": {
      "title": "Résidence Turquie pour investisseurs 2026 : seuils de 400 000 et 500 000 USD",
      "metaDescription": "Comparez les investissements qualifiés : immobilier, capital, dépôt, obligations, fonds, retraite et création d'emplois. Résidence jusqu'à cinq ans.",
      "shortAnswer": "Le titre de courte durée pour investisseur qualifié est distinct de la simple résidence de propriétaire ou d'affaires. L'article 31(1)(j) de la loi 6458 permet un titre pouvant atteindre cinq ans aux investisseurs répondant aux seuils officiels et à certains membres de leur famille, sous conditions.",
      "bosphorasHelp": "Bosphoras coordonne la préparation pratique de votre projet, les visites et les rendez-vous avec les professionnels indépendants appropriés. Les autorités instruisent les demandes de séjour ; aucun résultat administratif ou financier n'est garanti.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Les sept voies d'investissement",
          "body": "Le tableau présente les seuils publiés par l'agence gouvernementale Invest in Türkiye. Une opération doit être attestée par l'autorité compétente ; le versement d'un montant seul ne garantit ni la résidence ni la citoyenneté. Les restrictions de conservation doivent être respectées lorsque prévues.",
          "table": {
            "headers": [
              "Investissement",
              "Seuil officiel",
              "Condition spécifique"
            ],
            "rows": [
              [
                "Immobilier éligible",
                "400 000 USD",
                "Non-revente 3 ans"
              ],
              [
                "Capital fixe",
                "500 000 USD",
                "Attestation du ministère compétent"
              ],
              [
                "Emplois",
                "50 emplois",
                "Attestation du ministère du Travail"
              ],
              [
                "Dépôt bancaire",
                "500 000 USD",
                "Conservation 3 ans"
              ],
              [
                "Obligations d'État",
                "500 000 USD",
                "Conservation 3 ans"
              ],
              [
                "Fonds immobiliers ou capital-risque admissibles",
                "500 000 USD",
                "Conservation 3 ans"
              ],
              [
                "Retraite privée admissible",
                "500 000 USD",
                "Conservation 3 ans"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Immobilier et stratégie à 400 000 USD",
          "body": "Le parcours qualifié exige un actif immobilier admissible d'une valeur minimale de 400 000 USD et une restriction de revente de trois ans inscrite au titre. Il ne se confond pas avec le seuil de 200 000 USD d'un logement destiné à la résidence personnelle. Vérifiez la conformité de l'actif avant engagement et l'attestation d'éligibilité avant la demande."
        },
        {
          "id": "visa-detail-3",
          "title": "Capital, emplois et placements",
          "body": "Un apport en capital fixe d'au moins 500 000 USD ou une création d'au moins 50 emplois nécessite la validation de l'administration correspondante. Des dépôts, titres publics, parts de fonds ou contributions de retraite peuvent également être éligibles à partir de 500 000 USD selon les règles de conservation. Confirmez risques, coûts et possibilité de sortie avec des conseillers indépendants."
        },
        {
          "id": "visa-detail-4",
          "title": "Famille et durée du titre",
          "body": "Le conjoint étranger et les enfants mineurs ou à charge peuvent relever du dispositif, avec leurs propres dossiers. Le maximum de cinq ans n'est pas automatique. La résidence qualifiée peut ouvrir un parcours distinct de demande de citoyenneté ou de longue durée ; elle n'est pas la citoyenneté. Le régime vise notamment l'investisseur qui ne travaille pas en Turquie."
        },
        {
          "id": "visa-detail-5",
          "title": "Organiser une décision d'investissement",
          "body": "Comparez d'abord le projet, le rendement net, la liquidité, les frais et le risque de change. Identifiez ensuite l'autorité chargée de certifier la voie choisie et la procédure de résidence applicable. Une société créée avec un faible capital ou un simple investissement de portefeuille ne bénéficie pas automatiquement du titre de cinq ans. Le travail effectif nécessite une autorisation appropriée."
        }
      ],
      "faqs": [
        {
          "question": "Toute création de société donne-t-elle cinq ans ?",
          "answer": "Non. Il faut une voie qualifiée conforme aux seuils et critères."
        },
        {
          "question": "Un dépôt de 500 000 USD peut-il être retiré librement ?",
          "answer": "Non pour le régime qualifié : conservation minimale de trois ans."
        },
        {
          "question": "La citoyenneté est-elle automatique ?",
          "answer": "Non, elle fait l'objet d'une décision distincte."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Direction de la migration : types et conditions"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Agence publique d'investissement : résidence et seuils"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Agence publique d'investissement : propriété et citoyenneté"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Loi turque 6458, articles 21 à 25 et 31 à 33"
        }
      ]
    },
    "en": {
      "title": "Turkey investor residence 2026: USD 400,000 and 500,000 thresholds",
      "metaDescription": "Compare qualifying property, fixed capital, bank deposits, government bonds, funds, pensions and employment routes for up to five years.",
      "shortAnswer": "Qualified investor short-term residence is separate from ordinary homeowner or commercial residence. Article 31(1)(j) of Law 6458 provides for permits of up to five years for qualifying investors and eligible family members, subject to official conditions.",
      "bosphorasHelp": "Bosphoras coordinates practical arrangements, visits and introductions to appropriate independent professionals. Turkish authorities decide residence applications; administrative or financial outcomes are not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Seven investment routes",
          "body": "The table sets out thresholds published by the government investment office. The competent authority must certify the qualifying investment. Paying the amount alone does not guarantee residence or citizenship; holding restrictions apply where specified.",
          "table": {
            "headers": [
              "Investment",
              "Official threshold",
              "Specific condition"
            ],
            "rows": [
              [
                "Eligible real estate",
                "USD 400,000",
                "No resale for 3 years"
              ],
              [
                "Fixed capital",
                "USD 500,000",
                "Ministry certification"
              ],
              [
                "Job creation",
                "50 jobs",
                "Labour Ministry certification"
              ],
              [
                "Bank deposit",
                "USD 500,000",
                "Hold 3 years"
              ],
              [
                "Government bonds",
                "USD 500,000",
                "Hold 3 years"
              ],
              [
                "Eligible property/venture funds",
                "USD 500,000",
                "Hold 3 years"
              ],
              [
                "Eligible private pension",
                "USD 500,000",
                "Hold 3 years"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Property at USD 400,000",
          "body": "The qualified route requires eligible property worth at least USD 400,000 with a three-year resale restriction registered on the title. This differs from the USD 200,000 personal-home residence route. Confirm property eligibility before commitment and obtain the required certification."
        },
        {
          "id": "visa-detail-3",
          "title": "Capital, jobs and financial investments",
          "body": "Fixed capital of at least USD 500,000 or creation of at least 50 jobs requires certification by the appropriate authority. Bank deposits, government bonds, fund units and pension contributions can also qualify from USD 500,000, with applicable holding conditions. Assess risk, fees and exit restrictions with independent advisers."
        },
        {
          "id": "visa-detail-4",
          "title": "Family and permit duration",
          "body": "Foreign spouses and minor or dependent children may qualify with individual files. Five years is a maximum, not a guarantee. Qualified residence may enable a separate citizenship or long-term application; it is not itself citizenship. The category concerns investors who do not work in Turkey."
        },
        {
          "id": "visa-detail-5",
          "title": "Structure the decision before investing",
          "body": "Compare the underlying project, net return, liquidity, fees and foreign exchange risk. Identify the certifying authority and appropriate application route. Ordinary low-capital incorporation or a basic portfolio investment does not automatically create a five-year permit. Actual work requires appropriate authorisation."
        }
      ],
      "faqs": [
        {
          "question": "Does any new company give five years?",
          "answer": "No, the qualifying thresholds and conditions must be met."
        },
        {
          "question": "May a qualifying USD 500,000 deposit be withdrawn freely?",
          "answer": "No; the qualifying route requires three years of retention."
        },
        {
          "question": "Is citizenship automatic?",
          "answer": "No, it requires a separate decision."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Migration Presidency: categories and conditions"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Government investment office: residence and thresholds"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Government investment office: property and citizenship"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Turkish Law 6458, Articles 21–25 and 31–33"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ Турции для инвесторов 2026: пороги 400 000 и 500 000 долларов",
      "metaDescription": "Сравните недвижимость, основной капитал, депозит, облигации, фонды, пенсионные взносы и рабочие места для ВНЖ до пяти лет.",
      "shortAnswer": "Инвестиционный краткосрочный ВНЖ отличается от обычного ВНЖ собственника или делового ВНЖ. Статья 31(1)(j) закона № 6458 предусматривает срок до пяти лет для инвесторов, отвечающих официальным критериям, и подходящих членов семьи.",
      "bosphorasHelp": "Bosphoras координирует практические вопросы, просмотры и встречи с подходящими независимыми специалистами. Решения по ВНЖ принимают турецкие органы; административные и финансовые результаты не гарантируются.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Семь инвестиционных оснований",
          "body": "Таблица показывает пороги государственного агентства Invest in Türkiye. Компетентный орган должен подтвердить соответствие вложения критериям. Само перечисление денег не гарантирует ВНЖ или гражданство. Необходимо соблюдать установленные ограничения на отчуждение.",
          "table": {
            "headers": [
              "Инвестиция",
              "Официальный порог",
              "Условие"
            ],
            "rows": [
              [
                "Допустимая недвижимость",
                "400 000 USD",
                "Не продавать 3 года"
              ],
              [
                "Основной капитал",
                "500 000 USD",
                "Подтверждение министерства"
              ],
              [
                "Рабочие места",
                "50",
                "Подтверждение Минтруда"
              ],
              [
                "Банковский депозит",
                "500 000 USD",
                "Хранить 3 года"
              ],
              [
                "Гособлигации",
                "500 000 USD",
                "Хранить 3 года"
              ],
              [
                "Допустимые фонды недвижимости/венчурные",
                "500 000 USD",
                "Хранить 3 года"
              ],
              [
                "Допустимая частная пенсия",
                "500 000 USD",
                "Хранить 3 года"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Недвижимость от 400 000 долларов",
          "body": "Квалифицированное основание предусматривает подходящую недвижимость минимум на 400 000 долларов и ограничение перепродажи на три года в реестре. Это не то же самое, что ВНЖ для собственного жилья от 200 000 долларов. Проверьте пригодность объекта до сделки и получите подтверждение соответствия."
        },
        {
          "id": "visa-detail-3",
          "title": "Капитал, рабочие места и финансовые вложения",
          "body": "Вложение в основной капитал от 500 000 долларов либо создание не менее 50 рабочих мест подтверждается профильным органом. Депозиты, гособлигации, паи фондов и пенсионные взносы также могут соответствовать порогу 500 000 долларов при соблюдении условий удержания. Оцените риски, комиссии и ограничения выхода с независимыми специалистами."
        },
        {
          "id": "visa-detail-4",
          "title": "Семья и срок действия",
          "body": "Иностранный супруг, несовершеннолетние или зависимые дети могут иметь право при индивидуальном оформлении. Пять лет — максимум, а не гарантия. Квалифицированный ВНЖ может открыть отдельный путь к гражданству или долгосрочному проживанию, но не является гражданством. Категория предусмотрена для инвесторов, не работающих в Турции."
        },
        {
          "id": "visa-detail-5",
          "title": "Решение до вложения средств",
          "body": "Сначала сравните проект, чистую доходность, ликвидность, расходы и валютный риск. Затем определите орган подтверждения и процедуру ВНЖ. Регистрация компании с небольшим капиталом или обычная покупка ценных бумаг не дают автоматически пятилетний ВНЖ. Фактическая работа требует соответствующего разрешения."
        }
      ],
      "faqs": [
        {
          "question": "Любая компания даёт пять лет?",
          "answer": "Нет, необходимы квалифицированные инвестиции и соответствие условиям."
        },
        {
          "question": "Можно свободно снять депозит 500 000 долларов?",
          "answer": "Нет, для этого основания требуется хранение три года."
        },
        {
          "question": "Гражданство автоматическое?",
          "answer": "Нет, необходимо отдельное решение."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Миграционная служба: виды и условия"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Государственное инвестиционное агентство: ВНЖ и пороги"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Инвестиционное агентство: недвижимость и гражданство"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Закон Турции № 6458, статьи 21–25 и 31–33"
        }
      ]
    },
    "ar": {
      "title": "إقامة تركيا للمستثمرين 2026: شروط 400 ألف و500 ألف دولار",
      "metaDescription": "قارن العقار ورأس المال والودائع والسندات والصناديق والتقاعد وإيجاد الوظائف للحصول على إقامة تصل إلى خمس سنوات.",
      "shortAnswer": "تختلف الإقامة القصيرة للمستثمر المؤهل عن إقامة مالك العقار العادية أو إقامة الأعمال. تتيح المادة 31(1)(j) من القانون 6458 إقامة تصل إلى خمس سنوات للمستثمر المستوفي للشروط الرسمية وأفراد أسرته المؤهلين.",
      "bosphorasHelp": "تنسق Bosphoras الترتيبات العملية والزيارات والمواعيد مع المختصين المستقلين المناسبين. تبت السلطات التركية في طلبات الإقامة ولا يمكن ضمان النتائج الإدارية أو المالية.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "مسارات الاستثمار السبعة",
          "body": "يعرض الجدول الحدود المنشورة لدى مكتب الاستثمار الحكومي. ويجب أن تعتمد الجهة المختصة الاستثمار. لا يضمن دفع المبلغ وحده الإقامة أو الجنسية، ويلزم احترام قيود الاحتفاظ بالاستثمار عند تطبيقها.",
          "table": {
            "headers": [
              "الاستثمار",
              "الحد الرسمي",
              "الشرط"
            ],
            "rows": [
              [
                "عقار مؤهل",
                "400,000 USD",
                "عدم البيع 3 سنوات"
              ],
              [
                "رأس مال ثابت",
                "500,000 USD",
                "اعتماد الوزارة"
              ],
              [
                "وظائف",
                "50 وظيفة",
                "اعتماد وزارة العمل"
              ],
              [
                "وديعة مصرفية",
                "500,000 USD",
                "احتفاظ 3 سنوات"
              ],
              [
                "سندات حكومية",
                "500,000 USD",
                "احتفاظ 3 سنوات"
              ],
              [
                "صناديق عقار أو رأس مال مخاطر مؤهلة",
                "500,000 USD",
                "احتفاظ 3 سنوات"
              ],
              [
                "تقاعد خاص مؤهل",
                "500,000 USD",
                "احتفاظ 3 سنوات"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "العقار بقيمة 400 ألف دولار",
          "body": "يتطلب المسار المؤهل عقاراً مقبولاً بقيمة 400 ألف دولار على الأقل وقيد منع البيع لثلاث سنوات في السجل. وهو مختلف عن حد 200 ألف دولار للسكن الشخصي. تحقق من أهلية العقار قبل الالتزام واحصل على شهادة المطابقة المطلوبة."
        },
        {
          "id": "visa-detail-3",
          "title": "رأس المال والوظائف والاستثمارات المالية",
          "body": "يتطلب رأس المال الثابت بقيمة 500 ألف دولار على الأقل أو توفير 50 وظيفة اعتماد الجهة المختصة. وقد تتأهل الودائع والسندات الحكومية وحصص الصناديق ومساهمات التقاعد من 500 ألف دولار وفق شروط الاحتفاظ. قيم المخاطر والرسوم وقيود التخارج مع مستشارين مستقلين."
        },
        {
          "id": "visa-detail-4",
          "title": "الأسرة ومدة الإقامة",
          "body": "قد يتأهل الزوج الأجنبي والأطفال القصر أو المعالون بملفات مستقلة. خمس سنوات حد أقصى لا ضمان. قد تتيح الإقامة المؤهلة طلباً منفصلاً للجنسية أو الإقامة الطويلة لكنها ليست جنسية. ويتعلق هذا النوع بالمستثمرين الذين لا يعملون داخل تركيا."
        },
        {
          "id": "visa-detail-5",
          "title": "اتخاذ القرار قبل الاستثمار",
          "body": "قارن المشروع والعائد الصافي والسيولة والرسوم ومخاطر العملة أولاً. ثم حدد جهة اعتماد الاستثمار وإجراء الإقامة المناسب. لا يمنح تأسيس شركة برأس مال صغير أو شراء أوراق مالية عادية إقامة خمس سنوات تلقائياً. ويتطلب العمل الفعلي تصريحاً مناسباً."
        }
      ],
      "faqs": [
        {
          "question": "هل يمنح أي تأسيس شركة إقامة خمس سنوات؟",
          "answer": "لا، يجب استيفاء حدود وشروط الاستثمار المؤهل."
        },
        {
          "question": "هل يمكن سحب الوديعة المؤهلة بحرية؟",
          "answer": "لا، يتطلب المسار الاحتفاظ بها ثلاث سنوات."
        },
        {
          "question": "هل الجنسية تلقائية؟",
          "answer": "لا، لها قرار وإجراء منفصلان."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "إدارة الهجرة: الأنواع والشروط"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "مكتب الاستثمار الحكومي: الإقامة والحدود الاستثمارية"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "مكتب الاستثمار: العقار والجنسية"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "القانون التركي 6458، المواد 21–25 و31–33"
        }
      ]
    }
  },
  "turkey-residence-property-purchase": {
    "fr": {
      "title": "Acheter un bien en Turquie pour obtenir la résidence : seuil de 200 000 USD",
      "metaDescription": "L'ikamet par achat immobilier en 2026 : valeur de 200 000 USD, logement personnel, tapu, documents, famille et différence avec la citoyenneté.",
      "shortAnswer": "L'achat d'un logement en Turquie peut fonder une demande de résidence courte durée selon l'article 31(1)(b) de la loi 6458. Pour un nouvel achat en 2026, le formulaire officiel exige une valeur d'au moins 200 000 USD en équivalent TL à la date d'acquisition, et un usage d'habitation par le demandeur.",
      "bosphorasHelp": "Bosphoras coordonne la préparation pratique de votre projet, les visites et les rendez-vous avec les professionnels indépendants appropriés. Les autorités instruisent les demandes de séjour ; aucun résultat administratif ou financier n'est garanti.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Quels biens sont admissibles ?",
          "body": "Le bien doit être un logement détenu par le demandeur et utilisé pour y habiter. Le formulaire ne permet pas de fonder ce titre sur un logement exploité pour un revenu locatif. Un local commercial ou un terrain nu ne remplace pas un logement. Pour les acquisitions anciennes, donations ou successions, faites examiner les règles propres à la date et au mode de transfert ; le formulaire exige notamment une estimation actuelle en cas de don ou héritage."
        },
        {
          "id": "visa-detail-2",
          "title": "200 000 ou 400 000 USD : quelle différence ?",
          "body": "Le premier seuil concerne le titre de propriétaire occupant. Le seuil de 400 000 USD vise une autre procédure d'investissement qualifié, avec interdiction de revente pendant trois ans et possibilité de demander la citoyenneté sous conditions. Un appartement admissible à 250 000 USD n'ouvre pas à lui seul le parcours de citoyenneté par achat immobilier.",
          "table": {
            "headers": [
              "Projet",
              "Seuil",
              "Droit potentiel"
            ],
            "rows": [
              [
                "Logement personnel, nouvel achat",
                "200 000 USD",
                "Courte durée propriétaire"
              ],
              [
                "Investissement immobilier qualifié",
                "400 000 USD",
                "Titre investisseur et parcours citoyenneté ; 3 ans de conservation"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Contrôles à effectuer avant de payer",
          "body": "Vérifiez l'identité du vendeur, le titre foncier, les hypothèques et restrictions, la nature résidentielle du bien, sa valeur et les conditions d'inscription à l'adresse. Le prix et les paiements doivent être documentés correctement. Ne fondez pas votre décision sur la seule brochure commerciale ou une promesse de permis. Faites valider indépendamment l'éligibilité foncière et administrative."
        },
        {
          "id": "visa-detail-4",
          "title": "Dossier de résidence après acquisition",
          "body": "Préparez le tapu, le document municipal de numérotation pour la première demande, le passeport, la preuve d'assurance, les ressources et les photos prévues par le formulaire. Déposez pendant le séjour légal. La résidence courte durée est en principe limitée à deux ans par délivrance ; le maximum dépend de l'examen du dossier. Le coût de la carte est de 964 TL en 2026, hors droits de séjour et coûts d'achat."
        },
        {
          "id": "visa-detail-5",
          "title": "Conjoint, enfants et revente",
          "body": "Lorsque les membres de la famille ont des droits de propriété communs ou indivis sur le logement, la demande doit documenter leur lien et leur présence au titre. Sinon, examinez leur propre catégorie de résidence, notamment familiale lorsque le sponsor remplit les conditions. La revente du logement peut faire disparaître le motif de résidence. Préparez un autre fondement légal avant de modifier votre situation."
        }
      ],
      "faqs": [
        {
          "question": "Un bien à 150 000 USD obtenu en 2026 suffit-il ?",
          "answer": "Non pour le motif de propriétaire occupant soumis au seuil officiel de 200 000 USD."
        },
        {
          "question": "Puis-je louer le logement pour obtenir ce titre ?",
          "answer": "Le formulaire exige un usage personnel d'habitation, non locatif."
        },
        {
          "question": "L'achat garantit-il l'ikamet ?",
          "answer": "Non, les autres conditions du dossier restent applicables."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Direction de la migration : types et conditions"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Formulaire et liste de pièces actualisés de la résidence courte durée (mai 2026)"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Agence publique d'investissement : résidence et seuils"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Agence publique d'investissement : propriété et citoyenneté"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Loi turque 6458, articles 21 à 25 et 31 à 33"
        }
      ]
    },
    "en": {
      "title": "Turkey residence by property purchase 2026: USD 200,000 threshold",
      "metaDescription": "Understand the personal-home residence route: USD 200,000 value, title deed, documents, family eligibility and citizenship differences.",
      "shortAnswer": "Buying a home in Turkey may support short-term residence under Article 31(1)(b) of Law 6458. For a new acquisition in 2026, the official form requires a property worth at least USD 200,000 in TRY equivalent on the acquisition date, used by the applicant as their home.",
      "bosphorasHelp": "Bosphoras coordinates practical arrangements, visits and introductions to appropriate independent professionals. Turkish authorities decide residence applications; administrative or financial outcomes are not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "What property qualifies?",
          "body": "The applicant must own residential property and use it as a home. The form excludes letting the dwelling for rental income under this basis. Commercial premises or vacant land cannot substitute. For earlier purchases, gifts or inheritance, examine the date- and transfer-specific requirements; the form calls for a current valuation in gift or inheritance cases."
        },
        {
          "id": "visa-detail-2",
          "title": "USD 200,000 versus USD 400,000",
          "body": "The first threshold concerns owner-occupier residence. USD 400,000 concerns a separate qualifying investment route with a three-year resale restriction and potential citizenship application. An eligible USD 250,000 apartment alone does not meet the citizenship-by-property threshold.",
          "table": {
            "headers": [
              "Project",
              "Threshold",
              "Potential status"
            ],
            "rows": [
              [
                "Personal home, new purchase",
                "USD 200,000",
                "Owner short-term residence"
              ],
              [
                "Qualifying property investment",
                "USD 400,000",
                "Investor residence and citizenship route; 3-year hold"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Checks before committing funds",
          "body": "Verify the seller, registered title, mortgages and restrictions, residential classification, value and address eligibility. Ensure the price and transfer are properly documented. Do not rely solely on marketing material or a promised permit. Obtain independent property and administrative checks."
        },
        {
          "id": "visa-detail-4",
          "title": "Residence application after purchase",
          "body": "Prepare the title deed, municipal address-numbering certificate for a first application, passport, insurance evidence, financial means and required photos. Apply during lawful stay. Ordinary short-term residence generally has a maximum two-year duration per grant; approval depends on assessment. The 2026 card fee is TRY 964, apart from residence duties and acquisition costs."
        },
        {
          "id": "visa-detail-5",
          "title": "Spouse, children and resale",
          "body": "Family members with shared or joint ownership should provide evidence of their relationship and ownership. Otherwise, assess individual categories including eligible family residence. Selling the dwelling may remove the basis of residence. Establish an alternative lawful basis before changing circumstances."
        }
      ],
      "faqs": [
        {
          "question": "Is a USD 150,000 new purchase in 2026 enough?",
          "answer": "Not for the owner-occupier category subject to the USD 200,000 threshold."
        },
        {
          "question": "Can I rent out the home for this status?",
          "answer": "The form requires personal residential use, not letting for income."
        },
        {
          "question": "Does buying guarantee approval?",
          "answer": "No, all other residence criteria remain applicable."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Migration Presidency: categories and conditions"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Updated short-term application form and document list (May 2026)"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Government investment office: residence and thresholds"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Government investment office: property and citizenship"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Turkish Law 6458, Articles 21–25 and 31–33"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ Турции при покупке недвижимости 2026: порог 200 000 долларов",
      "metaDescription": "ВНЖ собственника жилья: стоимость от 200 000 долларов, личное проживание, tapu, документы, семья и отличие от гражданства.",
      "shortAnswer": "Покупка жилья в Турции может служить основанием краткосрочного ВНЖ по статье 31(1)(b) закона № 6458. Для новой покупки в 2026 году официальная форма требует стоимость не менее 200 000 долларов в эквиваленте лир на дату приобретения и использование заявителем для собственного проживания.",
      "bosphorasHelp": "Bosphoras координирует практические вопросы, просмотры и встречи с подходящими независимыми специалистами. Решения по ВНЖ принимают турецкие органы; административные и финансовые результаты не гарантируются.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Какие объекты подходят?",
          "body": "Заявитель должен владеть жилым объектом и использовать его для проживания. Форма исключает использование такого жилья для получения арендного дохода. Коммерческое помещение или незастроенный участок не заменяют жильё. Для прежних покупок, дарения и наследования уточняются требования по дате и виду перехода права; при дарении и наследовании форма требует актуальную оценку."
        },
        {
          "id": "visa-detail-2",
          "title": "Разница между 200 000 и 400 000 долларов",
          "body": "Первый порог касается ВНЖ собственника, проживающего в объекте. Порог 400 000 долларов относится к отдельной квалифицированной инвестиции с запретом продажи три года и возможностью подать на гражданство. Подходящая квартира за 250 000 долларов сама по себе не соответствует имущественному порогу гражданства.",
          "table": {
            "headers": [
              "Проект",
              "Порог",
              "Возможный статус"
            ],
            "rows": [
              [
                "Собственное жильё, новая покупка",
                "200 000 USD",
                "Краткосрочный ВНЖ собственника"
              ],
              [
                "Квалифицированная недвижимость",
                "400 000 USD",
                "Инвестиционный ВНЖ и путь к гражданству; 3 года"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Проверки до оплаты",
          "body": "Проверьте продавца, право собственности, обременения, жилое назначение, стоимость и возможность адресной регистрации. Цена и расчёты должны быть подтверждены надлежащими документами. Не полагайтесь только на рекламу или обещание ВНЖ; получите независимую проверку недвижимости и условий проживания."
        },
        {
          "id": "visa-detail-4",
          "title": "Заявление после приобретения",
          "body": "Подготовьте tapu, муниципальную справку об адресе для первой подачи, паспорт, страховку, подтверждение средств и фотографии по форме. Подайте в период законного пребывания. Обычный краткосрочный ВНЖ выдаётся максимум на два года за раз и зависит от рассмотрения. Карта в 2026 году стоит 964 лиры без иных сборов и расходов покупки."
        },
        {
          "id": "visa-detail-5",
          "title": "Супруг, дети и продажа",
          "body": "При долевой или совместной собственности родственников подтвердите их права и родство. В остальных случаях подберите индивидуальное основание, например семейный ВНЖ при соответствии спонсора требованиям. Продажа жилья может прекратить основание ВНЖ. Заранее определите другой законный статус."
        }
      ],
      "faqs": [
        {
          "question": "Достаточно покупки за 150 000 долларов в 2026 году?",
          "answer": "Нет для ВНЖ собственника с порогом 200 000 долларов."
        },
        {
          "question": "Можно сдавать жильё для этого ВНЖ?",
          "answer": "Форма требует собственного проживания, а не арендного дохода."
        },
        {
          "question": "Гарантирует ли покупка ВНЖ?",
          "answer": "Нет, необходимо соблюдать остальные требования."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Миграционная служба: виды и условия"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Актуальная форма и перечень документов (май 2026)"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Государственное инвестиционное агентство: ВНЖ и пороги"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "Инвестиционное агентство: недвижимость и гражданство"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "Закон Турции № 6458, статьи 21–25 и 31–33"
        }
      ]
    },
    "ar": {
      "title": "الإقامة في تركيا عن طريق شراء عقار 2026: حد 200 ألف دولار",
      "metaDescription": "شروط إقامة مالك السكن بقيمة 200 ألف دولار والاستعمال الشخصي والطابو والوثائق والأسرة والفرق عن الجنسية.",
      "shortAnswer": "قد يشكل شراء مسكن في تركيا أساساً للإقامة القصيرة وفق المادة 31(1)(b) من القانون 6458. وللشراء الجديد في 2026 يشترط النموذج الرسمي قيمة لا تقل عن 200 ألف دولار بما يعادلها بالليرة عند الشراء وأن يستخدمه مقدم الطلب مسكناً له.",
      "bosphorasHelp": "تنسق Bosphoras الترتيبات العملية والزيارات والمواعيد مع المختصين المستقلين المناسبين. تبت السلطات التركية في طلبات الإقامة ولا يمكن ضمان النتائج الإدارية أو المالية.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "ما العقار المؤهل؟",
          "body": "يجب أن يكون المسكن مملوكاً لمقدم الطلب ومستخدماً لسكنه الشخصي. ويستبعد النموذج استخدامه لتحقيق دخل من الإيجار في هذا المسار. لا يحل محل تجاري أو أرض خالية محل مسكن. وللشراء السابق أو الهبة أو الميراث افحص الشروط بحسب التاريخ وطريقة نقل الملكية؛ ويطلب النموذج تقييماً حديثاً للهبة والميراث."
        },
        {
          "id": "visa-detail-2",
          "title": "الفرق بين 200 ألف و400 ألف دولار",
          "body": "الحد الأول يخص إقامة المالك الذي يسكن العقار. أما 400 ألف دولار فتخص مساراً استثمارياً منفصلاً مع قيد عدم البيع ثلاث سنوات وإمكانية طلب الجنسية بشروط. لا تكفي شقة مؤهلة بقيمة 250 ألف دولار وحدها لمسار الجنسية العقارية.",
          "table": {
            "headers": [
              "المشروع",
              "الحد",
              "الوضع المحتمل"
            ],
            "rows": [
              [
                "مسكن شخصي جديد",
                "200,000 USD",
                "إقامة قصيرة للمالك"
              ],
              [
                "استثمار عقاري مؤهل",
                "400,000 USD",
                "إقامة استثمار ومسار جنسية؛ احتفاظ 3 سنوات"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "الفحوص قبل دفع المبلغ",
          "body": "تحقق من البائع وسند الملكية والرهون والقيود والتصنيف السكني والقيمة وأهلية تسجيل العنوان. وثق السعر والمدفوعات بصورة صحيحة. لا تعتمد على الإعلان أو وعد الحصول على الإقامة وحده؛ اطلب تحققاً عقارياً وإدارياً مستقلاً."
        },
        {
          "id": "visa-detail-4",
          "title": "طلب الإقامة بعد الشراء",
          "body": "جهز الطابو ومستند الترقيم البلدي للطلب الأول والجواز والتأمين وإثبات الموارد والصور المطلوبة. قدم أثناء البقاء القانوني. الحد العام للإقامة القصيرة سنتان لكل إصدار والقبول خاضع لدراسة الملف. تبلغ رسوم البطاقة 964 ليرة في 2026 باستثناء رسوم التصريح وتكاليف الشراء."
        },
        {
          "id": "visa-detail-5",
          "title": "الزوج والأطفال وإعادة البيع",
          "body": "عند وجود ملكية مشتركة لأفراد الأسرة أثبت العلاقة وحقوق الملكية. وإلا فحدد نوعاً فردياً مناسباً مثل الإقامة العائلية إذا استوفى الكفيل الشروط. قد يؤدي بيع المسكن إلى زوال أساس الإقامة. حدد أساساً قانونياً آخر قبل تغيير وضعك."
        }
      ],
      "faqs": [
        {
          "question": "هل يكفي شراء جديد بـ150 ألف دولار؟",
          "answer": "لا لمسار المالك الخاضع لحد 200 ألف دولار."
        },
        {
          "question": "هل يمكن تأجير العقار لهذا النوع؟",
          "answer": "يشترط النموذج السكن الشخصي لا دخل الإيجار."
        },
        {
          "question": "هل يضمن الشراء الإقامة؟",
          "answer": "لا، تظل بقية الشروط واجبة."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "إدارة الهجرة: الأنواع والشروط"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "نموذج الإقامة القصيرة وقائمة المستندات المحدثة (مايو 2026)"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "مكتب الاستثمار الحكومي: الإقامة والحدود الاستثمارية"
        },
        {
          "href": "https://www.invest.gov.tr/en/investmentguide/pages/acquiring-property-and-citizenship.aspx",
          "label": "مكتب الاستثمار: العقار والجنسية"
        },
        {
          "href": "https://www.goc.gov.tr/kurumlar/goc.gov.tr/Kanunlar/YUKK/YUKK-TURKCE.pdf",
          "label": "القانون التركي 6458، المواد 21–25 و31–33"
        }
      ]
    }
  },
  "turkey-residence-foreign-owner": {
    "fr": {
      "title": "Ikamet en Turquie pour propriétaire étranger : conditions 2026 et renouvellement",
      "metaDescription": "Propriétaire d'un logement en Turquie ? Découvrez les conditions de l'ikamet, la valeur de 200 000 USD, les justificatifs de propriété, l'adresse et le renouvellement.",
      "shortAnswer": "Posséder un logement turc peut justifier une demande de résidence courte durée lorsque le logement sert à votre habitation. Pour un nouvel achat en 2026, le formulaire officiel indique un seuil de 200 000 USD en équivalent livres turques au jour de l'acquisition. L'achat n'est pas une garantie d'obtention.",
      "bosphorasHelp": "Bosphoras coordonne les visites, la recherche de logement et les rendez-vous avec des professionnels indépendants. Les autorisations sont délivrées par les autorités compétentes, sans garantie de résultat.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Vérifiez le titre et l'usage réel",
          "body": "Le tapu doit documenter votre droit de propriété. Le bien doit être résidentiel et vous devez l'utiliser personnellement comme logement. Un investissement locatif, un bureau ou un terrain ne correspond pas à ce motif. Vérifiez également si l'adresse accepte les nouvelles inscriptions de ressortissants étrangers avant la signature.",
          "table": {
            "headers": [
              "Point",
              "Règle"
            ],
            "rows": [
              [
                "Nouvel achat 2026",
                "200 000 USD minimum"
              ],
              [
                "Usage",
                "Habitation personnelle"
              ],
              [
                "Titre",
                "Courte durée, généralement 2 ans maximum"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Anciennes acquisitions et transmission",
          "body": "La date d'acquisition et la nature du transfert sont importantes pour les seuils et les justificatifs. Ne supposez pas qu'un achat antérieur est automatiquement soumis au même régime qu'un nouvel achat. Pour une donation ou succession, le formulaire peut demander une valeur actualisée. Conservez acte, preuve des paiements et documents d'évaluation. Faites déterminer le régime applicable avant un renouvellement."
        },
        {
          "id": "visa-detail-3",
          "title": "Dossier individuel et famille",
          "body": "Préparez le passeport, les photographies demandées, l'assurance admissible, les ressources, les reçus et les documents de propriété. Pour une première demande, le document municipal d'identification de l'adresse peut être requis. Les membres de la famille copropriétaires documentent leurs droits ; les autres doivent choisir leur propre fondement, par exemple familial si les conditions du sponsor sont réunies."
        },
        {
          "id": "visa-detail-4",
          "title": "Maintenir la résidence au fil des années",
          "body": "Le titre de courte durée ne dépasse normalement pas deux ans par délivrance. Conservez le logement et son usage personnel, ainsi que votre adresse enregistrée. Renouvelez pendant les 60 derniers jours avant expiration. La carte coûte 964 TL en 2026, sans les droits de séjour éventuels. Une vente, un changement d'usage ou de résidence doit être évalué avant l'opération."
        },
        {
          "id": "visa-detail-5",
          "title": "Résidence ou citoyenneté : deux décisions distinctes",
          "body": "Le seuil de 200 000 USD concerne le parcours de propriétaire occupant. L'investissement immobilier qualifié pour une demande de citoyenneté répond à d'autres conditions, dont 400 000 USD et une interdiction de revente pendant trois ans. La possession du logement ne donne pas automatiquement le droit de travailler. Organisez vos démarches selon votre objectif, pas seulement selon la valeur du bien."
        }
      ],
      "faqs": [
        {
          "question": "Un logement loué à des tiers suffit-il ?",
          "answer": "Non pour le fondement de résidence personnelle du propriétaire."
        },
        {
          "question": "La vente supprime-t-elle le motif ?",
          "answer": "Elle peut le faire ; prévoyez une autre base légale avant de vendre."
        },
        {
          "question": "Le tapu garantit-il le renouvellement ?",
          "answer": "Non, les autres conditions sont réévaluées."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence — Migration"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles sur l'ikamet"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Formulaire de courte durée"
        }
      ]
    },
    "en": {
      "title": "Turkey residence for foreign property owners 2026: eligibility and renewal",
      "metaDescription": "Understand homeowner residence, the USD 200,000 threshold, title evidence, address registration and renewal in Turkey.",
      "shortAnswer": "Owning a Turkish home may support short-term residence when used as your own dwelling. For a new 2026 purchase, the official form specifies USD 200,000 in lira equivalent on acquisition. Ownership is not a guarantee of approval.",
      "bosphorasHelp": "Bosphoras coordinates visits, accommodation and meetings with independent professionals. Competent authorities decide applications; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Check title and genuine use",
          "body": "The title deed must establish ownership. The property must be residential and used as your own home; a rental investment, office or vacant land does not meet this purpose. Check address eligibility for new foreign registrations before signing.",
          "table": {
            "headers": [
              "Item",
              "Rule"
            ],
            "rows": [
              [
                "New purchase 2026",
                "USD 200,000 minimum"
              ],
              [
                "Use",
                "Personal dwelling"
              ],
              [
                "Permit",
                "Short-term, generally max 2 years"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Earlier purchases and transfers",
          "body": "Acquisition date and transfer type can affect the applicable threshold and evidence. Do not assume that an older acquisition follows the same regime as a new purchase. Gifts or inheritance may require updated valuation evidence. Retain title, payment and valuation records and establish the applicable rules before renewing."
        },
        {
          "id": "visa-detail-3",
          "title": "Individual and family documents",
          "body": "Prepare passport, required photographs, eligible insurance, means, receipts and title evidence. A municipal address identification document may be required for a first application. Relatives with shared title document their rights; others must establish an individual basis, such as qualifying family residence."
        },
        {
          "id": "visa-detail-4",
          "title": "Maintain eligibility over time",
          "body": "Ordinary short-term permits generally last no more than two years per grant. Maintain personal use and the registered address. Renew in the final 60 days before expiry. The 2026 card fee is TRY 964, excluding any residence duty. Assess the effect of selling or changing the property's use before doing so."
        },
        {
          "id": "visa-detail-5",
          "title": "Residence and citizenship are separate",
          "body": "USD 200,000 concerns the owner-occupier residence route. Qualified citizenship investment has separate conditions including USD 400,000 and a three-year resale restriction. Ownership does not automatically authorise employment. Match the route to your actual objectives."
        }
      ],
      "faqs": [
        {
          "question": "Does a home rented to others qualify?",
          "answer": "Not for the owner's personal-residence basis."
        },
        {
          "question": "Could a sale remove eligibility?",
          "answer": "Yes; establish a different lawful basis before selling."
        },
        {
          "question": "Does title guarantee renewal?",
          "answer": "No, other requirements are reassessed."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence categories — Migration Presidency"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official residence FAQ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Short-term application form"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ Турции для иностранного собственника жилья 2026: условия и продление",
      "metaDescription": "ВНЖ собственника: порог 200 000 долларов, документы на жильё, регистрация адреса и продление.",
      "shortAnswer": "Собственное жильё в Турции может быть основанием краткосрочного ВНЖ, если используется для личного проживания. Для новой покупки в 2026 году форма указывает порог 200 000 долларов в эквиваленте лир на дату приобретения. Покупка не гарантирует одобрение.",
      "bosphorasHelp": "Bosphoras координирует поездки, поиск жилья и встречи с независимыми специалистами. Решения принимают компетентные органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Право собственности и использование",
          "body": "Tapu подтверждает собственность. Объект должен быть жилым и использоваться лично заявителем; арендная инвестиция, офис или пустой участок не подходят для этого основания. Проверьте доступность регистрации иностранцев по адресу до сделки.",
          "table": {
            "headers": [
              "Параметр",
              "Условие"
            ],
            "rows": [
              [
                "Новая покупка 2026",
                "От 200 000 USD"
              ],
              [
                "Использование",
                "Личное проживание"
              ],
              [
                "ВНЖ",
                "Краткосрочный, обычно до 2 лет"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Прежние приобретения и переход права",
          "body": "Дата и способ приобретения влияют на требования. Не следует автоматически применять правила новой покупки к старому объекту. При наследовании или дарении может требоваться актуальная оценка. Храните документы о собственности, платежах и оценке, выясните применимый режим до продления."
        },
        {
          "id": "visa-detail-3",
          "title": "Документы семьи",
          "body": "Подготовьте паспорт, фотографии по форме, страховку, подтверждение средств, квитанции и документы на жильё. При первой подаче может требоваться муниципальная справка об адресе. Родственники-сособственники подтверждают свои права; остальным нужно отдельное основание, например семейный ВНЖ при соответствии спонсора."
        },
        {
          "id": "visa-detail-4",
          "title": "Сохранение основания",
          "body": "Обычный краткосрочный ВНЖ выдаётся максимум на два года за раз. Сохраняйте личное проживание и зарегистрированный адрес. Подавайте продление в последние 60 дней до окончания. Стоимость карты в 2026 году — 964 лиры без иных сборов. До продажи либо изменения назначения оцените последствия."
        },
        {
          "id": "visa-detail-5",
          "title": "ВНЖ и гражданство",
          "body": "Порог 200 000 долларов относится к ВНЖ собственника, проживающего в объекте. Для квалифицированной инвестиции с целью гражданства действуют отдельные условия: 400 000 долларов и запрет продажи на три года. Собственность сама по себе не разрешает работу. Выбирайте основание по фактической цели."
        }
      ],
      "faqs": [
        {
          "question": "Подходит ли жильё, сдаваемое другим?",
          "answer": "Нет для основания личного проживания собственника."
        },
        {
          "question": "Продажа прекращает основание?",
          "answer": "Может прекратить; подготовьте другое законное основание."
        },
        {
          "question": "Гарантирует ли tapu продление?",
          "answer": "Нет, остальные критерии проверяются заново."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ — миграционная служба"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные вопросы о ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Портал e-ikamet"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Форма краткосрочного ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "إقامة تركيا لمالك عقار أجنبي 2026: الشروط والتجديد",
      "metaDescription": "شروط إقامة المالك وحد 200 ألف دولار والطابو وتسجيل العنوان وتجديد التصريح في تركيا.",
      "shortAnswer": "قد يمنح امتلاك مسكن في تركيا أساساً للإقامة القصيرة إذا كان للسكن الشخصي. وللشراء الجديد عام 2026 يحدد النموذج الرسمي قيمة 200 ألف دولار بما يعادلها بالليرة يوم الشراء. لا يضمن التملك الموافقة.",
      "bosphorasHelp": "تنسق Bosphoras الزيارات والسكن والمواعيد مع المختصين المستقلين. تبت السلطات المختصة في الطلبات دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "الملكية والاستعمال الفعلي",
          "body": "يجب أن يثبت الطابو ملكيتك وأن يكون العقار سكنياً تستعمله شخصياً. لا يحقق الاستثمار التأجيري أو المكتب أو الأرض الخالية هذا الغرض. تحقق من أهلية العنوان لتسجيل الأجانب الجدد قبل التوقيع.",
          "table": {
            "headers": [
              "البند",
              "القاعدة"
            ],
            "rows": [
              [
                "شراء جديد 2026",
                "200 ألف دولار على الأقل"
              ],
              [
                "الاستعمال",
                "سكن شخصي"
              ],
              [
                "التصريح",
                "قصير الأجل، حتى سنتين عموماً"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "المشتريات السابقة ونقل الملكية",
          "body": "يؤثر تاريخ الشراء وطريقة نقل الملكية في الشروط. لا تفترض تطبيق قواعد الشراء الجديد على كل عقار قديم. قد يلزم تقييم حديث للهبة والميراث. احتفظ بسند الملكية والمدفوعات والتقييم وحدد النظام المطبق قبل التجديد."
        },
        {
          "id": "visa-detail-3",
          "title": "ملفات أفراد الأسرة",
          "body": "جهز الجواز والصور والتأمين المقبول وإثبات الموارد والإيصالات والطابو. قد يلزم مستند بلدي يحدد العنوان للطلب الأول. يثبت أفراد الأسرة المشتركون في الملكية حقوقهم، ويحتاج الآخرون إلى أساس مستقل مثل الإقامة العائلية عند استيفاء شروط الكفيل."
        },
        {
          "id": "visa-detail-4",
          "title": "الحفاظ على أهلية الإقامة",
          "body": "الحد العام للإقامة القصيرة سنتان لكل إصدار. حافظ على السكن الشخصي والعنوان المسجل. قدّم التجديد في آخر 60 يوماً قبل الانتهاء. رسم البطاقة لعام 2026 هو 964 ليرة دون الرسوم الأخرى. قيّم أثر البيع أو تغيير الاستعمال قبل تنفيذه."
        },
        {
          "id": "visa-detail-5",
          "title": "الإقامة والجنسية مساران منفصلان",
          "body": "يخص حد 200 ألف دولار إقامة المالك الساكن. وللاستثمار المؤهل للجنسية شروط منفصلة منها 400 ألف دولار وقيد عدم البيع ثلاث سنوات. لا يمنح التملك حق العمل تلقائياً. اختر المسار وفق هدفك الفعلي."
        }
      ],
      "faqs": [
        {
          "question": "هل يصلح مسكن مؤجر للغير؟",
          "answer": "لا لمسار السكن الشخصي للمالك."
        },
        {
          "question": "هل يزيل البيع أساس الإقامة؟",
          "answer": "قد يزيله؛ حدد أساساً قانونياً آخر أولاً."
        },
        {
          "question": "هل يضمن الطابو التجديد؟",
          "answer": "لا، تعاد دراسة بقية الشروط."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة — إدارة الهجرة"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية حول الإقامة"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة e-ikamet الرسمية"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "نموذج الإقامة القصيرة"
        }
      ]
    }
  },
  "turkey-residence-family": {
    "fr": {
      "title": "Résidence familiale Turquie 2026 : conjoint, enfants, revenus et durée",
      "metaDescription": "Comment obtenir un ikamet familial en Turquie ? Conditions du sponsor, conjoint et enfants, ressources, assurance et durée maximale de trois ans.",
      "shortAnswer": "Le titre familial permet à certains conjoints et enfants étrangers de rejoindre un citoyen turc ou un sponsor admissible. Sa durée maximale est de trois ans et ne peut dépasser celle du titre du sponsor lorsqu'il est étranger. Chaque membre a un dossier individuel.",
      "bosphorasHelp": "Bosphoras coordonne les visites, la recherche de logement et les rendez-vous avec des professionnels indépendants. Les autorisations sont délivrées par les autorités compétentes, sans garantie de résultat.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Qui peut être bénéficiaire ?",
          "body": "Le conjoint étranger, les enfants mineurs étrangers du couple ou de l'un des conjoints, et les enfants étrangers à charge peuvent relever de cette catégorie. Le mariage doit être réel et les conjoints majeurs. Le consentement du parent détenant l'autorité parentale et vivant à l'étranger peut être nécessaire. Les enfants de deux parents étrangers ne deviennent pas automatiquement titulaires par l'effet du permis de l'un."
        },
        {
          "id": "visa-detail-2",
          "title": "Conditions du sponsor",
          "body": "Le sponsor doit prouver des ressources régulières, un logement approprié, une assurance couvrant la famille, un enregistrement d'adresse et l'absence de condamnation pour certaines infractions familiales pendant les cinq années précédentes. En règle générale, le sponsor étranger a déjà résidé légalement un an ; la loi prévoit des exceptions, notamment pour certains chercheurs et conjoints de citoyens turcs."
        },
        {
          "id": "visa-detail-3",
          "title": "Calcul des ressources",
          "body": "Le revenu total ne peut être inférieur au salaire minimum et doit correspondre à au moins un tiers de ce salaire par membre de la famille. En 2026, le salaire minimum officiel est de 28 075,50 TL net et 33 030 TL brut par mois. Le tableau présente un calcul illustratif sur la base nette ; le service compétent détermine les justificatifs et la base retenue pour le dossier.",
          "table": {
            "headers": [
              "Famille (sponsor inclus)",
              "Exemple de revenu mensuel net"
            ],
            "rows": [
              [
                "2",
                "28 075,50 TL"
              ],
              [
                "3",
                "28 075,50 TL"
              ],
              [
                "4",
                "37 434,00 TL"
              ],
              [
                "5",
                "46 792,50 TL"
              ],
              [
                "6",
                "56 151,00 TL"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Documents et scolarité",
          "body": "Préparez les passeports, actes de mariage et naissance, preuves de logement et ressources, assurance et documents du sponsor. Les actes étrangers peuvent nécessiter apostille ou légalisation et traduction certifiée. Le titre familial permet en principe aux enfants de moins de 18 ans de suivre l'enseignement primaire et secondaire sans titre étudiant distinct. Vérifiez les inscriptions scolaires et la proximité des services de santé avant de choisir le logement."
        },
        {
          "id": "visa-detail-5",
          "title": "Divorce, majorité et renouvellement",
          "body": "Après trois ans de résidence familiale, un enfant devenu majeur peut solliciter un titre court. Après divorce d'un citoyen turc, la règle ordinaire de trois ans de titre familial connaît une exception pour les violences domestiques établies judiciairement ; après décès du sponsor, une transition peut être possible sans minimum. Une évolution familiale exige une évaluation du nouveau motif. Déposez le renouvellement avant l'expiration, pendant les 60 derniers jours."
        }
      ],
      "faqs": [
        {
          "question": "Deux étrangers peuvent-ils être sponsors l'un de l'autre simultanément ?",
          "answer": "Non, l'un doit remplir les conditions du sponsor."
        },
        {
          "question": "Combien de temps dure le titre familial ?",
          "answer": "Trois ans au maximum par délivrance, sans dépasser le titre du sponsor."
        },
        {
          "question": "Les enfants doivent-ils avoir un dossier ?",
          "answer": "Oui, chacun reçoit son propre titre."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence — Migration"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles sur l'ikamet"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://www.csgb.gov.tr/yayinlar/calisma-hayati-istatistikleri-e-bulteni/eylul-2026/ucret-ve-sendikal-istatistikler.html",
          "label": "Salaire minimum officiel 2026"
        }
      ]
    },
    "en": {
      "title": "Turkey family residence permit 2026: spouse, children and income",
      "metaDescription": "Family ikamet requirements, sponsor eligibility, income calculation, health insurance, children and the three-year maximum.",
      "shortAnswer": "Family residence may allow qualifying foreign spouses and children to join a Turkish citizen or eligible sponsor. Its maximum is three years and cannot exceed a foreign sponsor's permit duration. Each applicant has a separate file.",
      "bosphorasHelp": "Bosphoras coordinates visits, accommodation and meetings with independent professionals. Competent authorities decide applications; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Eligible family members",
          "body": "Foreign spouses, foreign minor children of either spouse and dependent foreign children can qualify. Both spouses must be adults in a genuine marriage. Consent from a parent abroad sharing custody may be required. A parent's permit does not automatically grant every child residence."
        },
        {
          "id": "visa-detail-2",
          "title": "Sponsor requirements",
          "body": "The sponsor must establish regular means, suitable housing, health cover for the family, address registration and no conviction for specified family offences in the previous five years. A foreign sponsor generally needs one year of lawful residence, with statutory exceptions including certain researchers and spouses of Turkish citizens."
        },
        {
          "id": "visa-detail-3",
          "title": "Income calculation",
          "body": "The sponsor's income must meet the overall minimum wage and at least one third of that wage for each family member. In 2026 the published wage is TRY 28,075.50 net and TRY 33,030 gross monthly. The table illustrates a net-wage calculation; the competent authority determines the accepted basis and evidence for the application.",
          "table": {
            "headers": [
              "Family (including sponsor)",
              "Illustrative monthly net income"
            ],
            "rows": [
              [
                "2",
                "28,075.50 TL"
              ],
              [
                "3",
                "28,075.50 TL"
              ],
              [
                "4",
                "37,434.00 TL"
              ],
              [
                "5",
                "46,792.50 TL"
              ],
              [
                "6",
                "56,151.00 TL"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Records and education",
          "body": "Prepare passports, marriage and birth records, means, housing, insurance and sponsor documentation. Foreign records may need authentication and certified translation. Family residence generally allows children under 18 to attend primary and secondary school without a separate student permit. Assess school enrolment and healthcare access before selecting a home."
        },
        {
          "id": "visa-detail-5",
          "title": "Divorce, adulthood and renewal",
          "body": "A child reaching adulthood after three years on family residence may apply for short-term residence. After divorce from a Turkish citizen the ordinary three-year condition has an exception for judicially established domestic violence; after the sponsor's death a transfer may be available without a minimum period. Reassess the legal basis when family circumstances change and renew within the final 60 days before expiry."
        }
      ],
      "faqs": [
        {
          "question": "Can two foreigners simultaneously sponsor each other?",
          "answer": "No; one must meet sponsor conditions."
        },
        {
          "question": "How long does family residence last?",
          "answer": "Up to three years per grant and no longer than the sponsor's permit."
        },
        {
          "question": "Does each child need a file?",
          "answer": "Yes, each receives an individual permit."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence categories — Migration Presidency"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official residence FAQ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://www.csgb.gov.tr/yayinlar/calisma-hayati-istatistikleri-e-bulteni/eylul-2026/ucret-ve-sendikal-istatistikler.html",
          "label": "Official 2026 minimum wage"
        }
      ]
    },
    "ru": {
      "title": "Семейный ВНЖ в Турции 2026: супруг, дети, доход и срок",
      "metaDescription": "Семейный икамет: требования к спонсору, доход, страховка, документы детей и срок до трёх лет.",
      "shortAnswer": "Семейный ВНЖ позволяет подходящим иностранным супругам и детям воссоединиться с гражданином Турции или соответствующим требованиям спонсором. Максимум — три года, но не дольше ВНЖ иностранного спонсора. Каждый подаёт отдельно.",
      "bosphorasHelp": "Bosphoras координирует поездки, поиск жилья и встречи с независимыми специалистами. Решения принимают компетентные органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Кто может получить",
          "body": "Иностранный супруг, иностранные несовершеннолетние дети обоих или одного супруга и зависимые иностранные дети могут претендовать на ВНЖ. Брак должен быть действительным, супруги совершеннолетними. Может требоваться согласие проживающего за рубежом родителя с правами опеки. ВНЖ родителя не даёт детям право автоматически."
        },
        {
          "id": "visa-detail-2",
          "title": "Требования к спонсору",
          "body": "Подтверждаются регулярные средства, подходящее жильё, страхование семьи, адресная регистрация и отсутствие судимости за определённые преступления против семьи за пять лет. Иностранному спонсору обычно нужен год законного проживания; законом предусмотрены исключения, в том числе для отдельных исследователей и супругов граждан Турции."
        },
        {
          "id": "visa-detail-3",
          "title": "Расчёт дохода",
          "body": "Общий доход не ниже минимальной зарплаты и не менее одной трети минимальной зарплаты на каждого члена семьи. В 2026 году официальная зарплата составляет 28 075,50 лиры нетто и 33 030 лир брутто в месяц. Таблица показывает пример по нетто; орган определяет применяемую базу и документы.",
          "table": {
            "headers": [
              "Семья со спонсором",
              "Пример чистого дохода в месяц"
            ],
            "rows": [
              [
                "2",
                "28 075,50 TL"
              ],
              [
                "3",
                "28 075,50 TL"
              ],
              [
                "4",
                "37 434,00 TL"
              ],
              [
                "5",
                "46 792,50 TL"
              ],
              [
                "6",
                "56 151,00 TL"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Документы и образование",
          "body": "Готовятся паспорта, свидетельства о браке и рождении, жильё, доход, страховка и документы спонсора. Иностранные акты могут требовать апостиля или легализации и заверенного перевода. По семейному ВНЖ дети до 18 лет обычно могут учиться в начальной и средней школе без отдельного студенческого ВНЖ. Уточните зачисление и доступность медицины до выбора жилья."
        },
        {
          "id": "visa-detail-5",
          "title": "Развод, совершеннолетие и продление",
          "body": "После трёх лет семейного ВНЖ совершеннолетний ребёнок может подать на краткосрочный. После развода с гражданином Турции для обычного требования трёх лет есть исключение при установленном судом домашнем насилии; после смерти спонсора переход возможен без минимального срока. При изменении обстоятельств оцените новое основание. Продлевайте в последние 60 дней до истечения."
        }
      ],
      "faqs": [
        {
          "question": "Могут ли два иностранца одновременно быть спонсорами друг друга?",
          "answer": "Нет, один должен отвечать условиям спонсора."
        },
        {
          "question": "Какой максимальный срок?",
          "answer": "Три года за выдачу, не дольше разрешения спонсора."
        },
        {
          "question": "Нужно ли ребёнку отдельное заявление?",
          "answer": "Да, каждый получает собственную карту."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ — миграционная служба"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные вопросы о ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Портал e-ikamet"
        },
        {
          "href": "https://www.csgb.gov.tr/yayinlar/calisma-hayati-istatistikleri-e-bulteni/eylul-2026/ucret-ve-sendikal-istatistikler.html",
          "label": "Минимальная зарплата 2026 года"
        }
      ]
    },
    "ar": {
      "title": "الإقامة العائلية في تركيا 2026: الزوج والأطفال والدخل والمدة",
      "metaDescription": "شروط الإيكامت العائلي والكفيل والدخل والتأمين ووثائق الأطفال والمدة القصوى ثلاث سنوات.",
      "shortAnswer": "تتيح الإقامة العائلية للأزواج والأطفال الأجانب المؤهلين الالتحاق بمواطن تركي أو كفيل مستوف للشروط. الحد ثلاث سنوات ولا يتجاوز مدة تصريح الكفيل الأجنبي. لكل فرد ملف مستقل.",
      "bosphorasHelp": "تنسق Bosphoras الزيارات والسكن والمواعيد مع المختصين المستقلين. تبت السلطات المختصة في الطلبات دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "من يحق له التقديم؟",
          "body": "قد يتأهل الزوج الأجنبي والأطفال الأجانب القصر لأحد الزوجين أو كليهما والأطفال المعالون. يجب أن يكون الزواج حقيقياً والزوجان بالغين. قد تلزم موافقة الوالد المقيم بالخارج إذا شارك في الحضانة. لا تمنح إقامة أحد الوالدين الأطفال حقاً تلقائياً."
        },
        {
          "id": "visa-detail-2",
          "title": "شروط الكفيل",
          "body": "يثبت الكفيل الموارد المنتظمة والسكن المناسب وتأمين الأسرة والعنوان المسجل وعدم الإدانة بجرائم عائلية محددة في السنوات الخمس السابقة. يحتاج الكفيل الأجنبي عادة إلى سنة من الإقامة القانونية مع استثناءات قانونية لبعض الباحثين وأزواج المواطنين الأتراك."
        },
        {
          "id": "visa-detail-3",
          "title": "حساب الدخل",
          "body": "لا يقل إجمالي الدخل عن الحد الأدنى للأجر ولا يقل نصيب كل فرد عن ثلثه. في 2026 يبلغ الأجر الرسمي 28,075.50 ليرة صافياً و33,030 ليرة إجمالاً شهرياً. يعرض الجدول مثالاً على الصافي؛ وتحدد السلطة أساس الحساب والمستندات المقبولة.",
          "table": {
            "headers": [
              "الأسرة مع الكفيل",
              "مثال صافي الدخل الشهري"
            ],
            "rows": [
              [
                "2",
                "28,075.50 TL"
              ],
              [
                "3",
                "28,075.50 TL"
              ],
              [
                "4",
                "37,434.00 TL"
              ],
              [
                "5",
                "46,792.50 TL"
              ],
              [
                "6",
                "56,151.00 TL"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "الوثائق والتعليم",
          "body": "جهز الجوازات وشهادات الزواج والميلاد والسكن والدخل والتأمين ووثائق الكفيل. قد تحتاج الوثائق الأجنبية إلى تصديق وترجمة معتمدة. يسمح التصريح العائلي عادة للأطفال دون 18 عاماً بالتعليم الابتدائي والثانوي دون إقامة طالب مستقلة. تحقق من التسجيل المدرسي والرعاية الصحية قبل اختيار المنزل."
        },
        {
          "id": "visa-detail-5",
          "title": "الطلاق وبلوغ السن والتجديد",
          "body": "بعد ثلاث سنوات من الإقامة العائلية يمكن للطفل البالغ طلب إقامة قصيرة. ويستثنى من شرط الثلاث سنوات المعتاد بعد الطلاق من مواطن تركي من ثبت تعرضه للعنف الأسري قضائياً؛ وبعد وفاة الكفيل قد يمكن الانتقال دون حد أدنى. راجع الأساس عند تغير وضع الأسرة وجدّد في آخر 60 يوماً قبل الانتهاء."
        }
      ],
      "faqs": [
        {
          "question": "هل يكفل أجنبيان بعضهما في الوقت نفسه؟",
          "answer": "لا، يجب أن يستوفي أحدهما شروط الكفيل."
        },
        {
          "question": "كم مدة الإقامة العائلية؟",
          "answer": "حتى ثلاث سنوات دون تجاوز تصريح الكفيل."
        },
        {
          "question": "هل لكل طفل طلب؟",
          "answer": "نعم، لكل فرد تصريح مستقل."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة — إدارة الهجرة"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية حول الإقامة"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة e-ikamet الرسمية"
        },
        {
          "href": "https://www.csgb.gov.tr/yayinlar/calisma-hayati-istatistikleri-e-bulteni/eylul-2026/ucret-ve-sendikal-istatistikler.html",
          "label": "الحد الأدنى الرسمي للأجور لعام 2026"
        }
      ]
    }
  },
  "turkey-residence-retiree": {
    "fr": {
      "title": "Prendre sa retraite en Turquie en 2026 : ikamet, pension et assurance",
      "metaDescription": "S'installer en Turquie à la retraite : bases légales de résidence, preuve de pension, couverture médicale, logement et préparation financière.",
      "shortAnswer": "Il n'existe pas de titre de séjour général réservé aux retraités dans les six catégories officielles. Un retraité doit choisir un fondement applicable, par exemple propriétaire occupant, tourisme lorsque justifié, famille ou résidence longue durée s'il satisfait ses conditions. Une pension est un justificatif de ressources, pas une garantie de titre.",
      "bosphorasHelp": "Bosphoras coordonne les visites, la recherche de logement et les rendez-vous avec des professionnels indépendants. Les autorisations sont délivrées par les autorités compétentes, sans garantie de résultat.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choisir le fondement avant de déménager",
          "body": "Un retraité peut préparer un projet de découverte touristique, rejoindre un sponsor familial ou habiter un logement admissible dont il est propriétaire. Un nouvel achat immobilier destiné à la résidence personnelle relève notamment du seuil de 200 000 USD indiqué dans le formulaire. La durée ordinaire courte est au plus deux ans ; ne prenez pas un bail long en supposant une approbation.",
          "table": {
            "headers": [
              "Situation",
              "Voie possible"
            ],
            "rows": [
              [
                "Propriétaire occupant",
                "Courte durée"
              ],
              [
                "Conjoint éligible",
                "Familiale"
              ],
              [
                "8 ans admissibles et autres conditions",
                "Longue durée"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Pension et justificatifs",
          "body": "Demandez à votre caisse une attestation récente de pension, avec montant et périodicité, puis réunissez l'historique bancaire. La migration accepte notamment des documents établissant des revenus de retraite comme preuves possibles. Les documents étrangers peuvent nécessiter une traduction turque assermentée et notariée. Il n'existe pas de seuil universel de pension spécifique à ce statut."
        },
        {
          "id": "visa-detail-3",
          "title": "Assurance et âge",
          "body": "Pour les titres courts et étudiants, le portail prévoit une option d'âge au-delà de 65 ans et en dessous de 18 ans. Ce traitement administratif ne signifie pas une couverture médicale gratuite. Pour la résidence familiale, le sponsor doit couvrir tous les membres. Vérifiez les droits à l'assurance publique, les conventions bilatérales et les contrats privés, surtout pour les soins chroniques."
        },
        {
          "id": "visa-detail-4",
          "title": "Organiser ses dépenses et sa fiscalité",
          "body": "Établissez un budget intégrant logement, copropriété, électricité, soins, transport et réserve pour les variations de change. Conservez un compte permettant de recevoir la pension et comparez les frais bancaires. Une présence prolongée peut modifier la résidence fiscale et l'imposition des pensions selon le droit national et les conventions. Faites analyser votre situation avant le départ définitif."
        },
        {
          "id": "visa-detail-5",
          "title": "Choisir un lieu adapté à l'année",
          "body": "Antalya peut convenir à qui privilégie le littoral et les services urbains ; Istanbul offre un réseau de soins spécialisés et des liaisons internationales ; Bodrum présente un rythme et des coûts plus saisonniers. Testez votre quartier en dehors de l'été, notamment les transports, pharmacies, hôpitaux et accessibilité du logement. Vérifiez la possibilité d'enregistrement à l'adresse avant tout engagement."
        }
      ],
      "faqs": [
        {
          "question": "Existe-t-il un visa retraite automatique ?",
          "answer": "Non, il faut un fondement admis de résidence."
        },
        {
          "question": "Une pension étrangère peut-elle servir de preuve ?",
          "answer": "Oui, les attestations de pension figurent parmi les justificatifs possibles."
        },
        {
          "question": "Plus de 65 ans signifie-t-il soins gratuits ?",
          "answer": "Non, l'exception administrative d'assurance n'est pas une couverture de santé."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence — Migration"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles sur l'ikamet"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Formulaire de courte durée"
        }
      ]
    },
    "en": {
      "title": "Retiring in Turkey 2026: residence, pension and healthcare",
      "metaDescription": "Plan retirement in Turkey: lawful residence routes, pension evidence, medical cover, housing and financial preparation.",
      "shortAnswer": "The six official residence categories do not include a general dedicated retiree permit. A retiree needs an applicable basis such as owner-occupier residence, genuine tourism, family residence or qualifying long-term status. A pension can establish means but does not guarantee a permit.",
      "bosphorasHelp": "Bosphoras coordinates visits, accommodation and meetings with independent professionals. Competent authorities decide applications; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choose a lawful route before moving",
          "body": "A retiree may organise a genuine extended visit, join an eligible sponsor or occupy an eligible home they own. A new personal-home purchase is subject to the USD 200,000 condition specified in the form. The ordinary short-term maximum is two years; do not commit to a long lease assuming approval.",
          "table": {
            "headers": [
              "Situation",
              "Possible route"
            ],
            "rows": [
              [
                "Owner-occupier",
                "Short-term"
              ],
              [
                "Eligible spouse",
                "Family"
              ],
              [
                "8 qualifying years and other conditions",
                "Long-term"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Pension and financial evidence",
          "body": "Request a recent pension statement showing amount and frequency and assemble bank statements. The migration authority lists retirement documents among possible proof of income. Foreign evidence may need sworn Turkish translation and notarisation. There is no universal dedicated retirement-pension threshold."
        },
        {
          "id": "visa-detail-3",
          "title": "Insurance and age",
          "body": "For short-term and student applications the portal provides an age option for those over 65 and under 18. That administrative treatment is not free healthcare. A family sponsor must cover all family members. Review public insurance rights, bilateral arrangements and private cover, particularly for chronic care."
        },
        {
          "id": "visa-detail-4",
          "title": "Spending and taxation",
          "body": "Budget housing, service charges, utilities, healthcare, transport and a currency buffer. Maintain a suitable pension-receiving account and compare bank charges. Extended presence can affect tax residence and pension taxation depending on domestic rules and treaties. Obtain a personalised assessment before moving permanently."
        },
        {
          "id": "visa-detail-5",
          "title": "Choose a year-round location",
          "body": "Antalya combines coastal living and urban services; Istanbul offers specialist healthcare and international connections; Bodrum has more seasonal rhythms and costs. Test the neighbourhood outside summer, including transport, pharmacies, hospitals and accessibility. Confirm address registration eligibility before committing."
        }
      ],
      "faqs": [
        {
          "question": "Is there an automatic retirement visa?",
          "answer": "No; an admissible residence basis is required."
        },
        {
          "question": "Can a foreign pension be evidence?",
          "answer": "Yes, pension documentation is listed among possible income evidence."
        },
        {
          "question": "Does being over 65 mean free healthcare?",
          "answer": "No; the application insurance treatment is not healthcare cover."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence categories — Migration Presidency"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official residence FAQ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Short-term application form"
        }
      ]
    },
    "ru": {
      "title": "Переезд на пенсии в Турцию 2026: ВНЖ, пенсия и медицина",
      "metaDescription": "Основания ВНЖ пенсионера, подтверждение пенсии, медицинское покрытие, жильё и бюджет.",
      "shortAnswer": "Среди шести официальных категорий нет общего отдельного ВНЖ для пенсионеров. Необходимо подходящее основание: собственное жильё, обоснованный туризм, семейный или долгосрочный ВНЖ при соблюдении условий. Пенсия подтверждает доход, но не гарантирует разрешение.",
      "bosphorasHelp": "Bosphoras координирует поездки, поиск жилья и встречи с независимыми специалистами. Решения принимают компетентные органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Основание до переезда",
          "body": "Пенсионер может планировать реальную ознакомительную поездку, воссоединение со спонсором или проживание в собственном подходящем жилье. Для новой покупки личного жилья форма указывает порог 200 000 долларов. Обычный краткосрочный ВНЖ — максимум два года; не заключайте долгий договор аренды в расчёте на гарантированное одобрение.",
          "table": {
            "headers": [
              "Ситуация",
              "Возможное основание"
            ],
            "rows": [
              [
                "Собственное жильё",
                "Краткосрочный"
              ],
              [
                "Подходящий супруг",
                "Семейный"
              ],
              [
                "8 зачтённых лет и другие условия",
                "Долгосрочный"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Подтверждение пенсии",
          "body": "Получите свежую справку пенсионного органа о размере и периодичности выплат и банковские выписки. Миграционная служба указывает пенсионные документы среди возможных подтверждений дохода. Иностранным документам могут потребоваться присяжный перевод на турецкий и нотариальное заверение. Единого специального порога пенсии для этой категории нет."
        },
        {
          "id": "visa-detail-3",
          "title": "Возраст и страховка",
          "body": "Для краткосрочного и студенческого ВНЖ портал предусматривает возрастную опцию для лиц старше 65 и младше 18 лет. Это не бесплатное медицинское обслуживание. Семейный спонсор страхует всех членов семьи. Проверьте государственное страхование, международные соглашения и частные полисы, особенно для хронических заболеваний."
        },
        {
          "id": "visa-detail-4",
          "title": "Расходы и налоги",
          "body": "Учтите жильё, обслуживание дома, коммунальные услуги, медицину, транспорт и резерв на колебания курса. Сравните комиссии за получение пенсии. Длительное пребывание может изменить налоговое резидентство и налогообложение пенсии по внутренним нормам и соглашениям. До переезда получите индивидуальную оценку."
        },
        {
          "id": "visa-detail-5",
          "title": "Выбор места для круглогодичной жизни",
          "body": "Анталья совмещает побережье и городские услуги, Стамбул предлагает специализированную медицину и международные рейсы, Бодрум отличается сезонностью. Оцените район вне летнего сезона, транспорт, аптеки, больницы и доступность жилья. Проверьте возможность регистрации по адресу до сделки."
        }
      ],
      "faqs": [
        {
          "question": "Есть ли автоматическая пенсионная виза?",
          "answer": "Нет, нужно допустимое основание ВНЖ."
        },
        {
          "question": "Подходит иностранная пенсия?",
          "answer": "Да, пенсионные документы могут подтверждать доход."
        },
        {
          "question": "После 65 лет медицина бесплатна?",
          "answer": "Нет, административная особенность страхования не означает медицинское покрытие."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ — миграционная служба"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные вопросы о ВНЖ"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Портал e-ikamet"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "Форма краткосрочного ВНЖ"
        }
      ]
    },
    "ar": {
      "title": "الإقامة في تركيا للمتقاعدين 2026: المعاش والتأمين والسكن",
      "metaDescription": "خطط للتقاعد في تركيا: الأساس القانوني للإقامة وإثبات المعاش والتغطية الصحية والسكن والميزانية.",
      "shortAnswer": "لا تتضمن أنواع الإقامة الرسمية الستة تصريحاً عاماً خاصاً بالمتقاعدين. يحتاج المتقاعد إلى أساس مقبول مثل السكن المملوك للاستعمال الشخصي أو السياحة المبررة أو الأسرة أو الإقامة الطويلة عند استيفاء شروطها. المعاش إثبات للموارد لا ضمان للتصريح.",
      "bosphorasHelp": "تنسق Bosphoras الزيارات والسكن والمواعيد مع المختصين المستقلين. تبت السلطات المختصة في الطلبات دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "اختيار الأساس قبل الانتقال",
          "body": "يمكن للمتقاعد تنظيم زيارة استطلاعية حقيقية أو الالتحاق بكفيل مؤهل أو السكن في منزل مؤهل يملكه. ويخضع شراء جديد للسكن الشخصي لحد 200 ألف دولار بحسب النموذج. الحد العادي للإقامة القصيرة سنتان؛ لا تلتزم بإيجار طويل بافتراض الموافقة.",
          "table": {
            "headers": [
              "الحالة",
              "المسار المحتمل"
            ],
            "rows": [
              [
                "مالك ساكن",
                "قصيرة الأجل"
              ],
              [
                "زوج مؤهل",
                "عائلية"
              ],
              [
                "8 سنوات مؤهلة وشروط أخرى",
                "طويلة الأجل"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "إثبات المعاش",
          "body": "اطلب شهادة حديثة تبين قيمة المعاش ودورية صرفه واجمع كشوف الحساب. تدرج إدارة الهجرة وثائق التقاعد ضمن إثباتات الدخل الممكنة. قد تحتاج الوثائق الأجنبية إلى ترجمة تركية محلفة وتصديق. لا يوجد حد موحد خاص بالمعاش لهذا الغرض."
        },
        {
          "id": "visa-detail-3",
          "title": "التأمين والعمر",
          "body": "تتيح المنصة خياراً متعلقاً بالعمر لمن فوق 65 ودون 18 في طلبات الإقامة القصيرة وإقامة الطالب. لا يعني ذلك رعاية صحية مجانية. يجب أن يغطي الكفيل العائلي جميع أفراد الأسرة. راجع التأمين العام والاتفاقيات الثنائية والتأمين الخاص خصوصاً للأمراض المزمنة."
        },
        {
          "id": "visa-detail-4",
          "title": "الميزانية والضرائب",
          "body": "احسب السكن والخدمات والمرافق والصحة والنقل واحتياط تقلب العملة. قارن رسوم البنوك لاستلام المعاش. قد يغير البقاء الطويل الإقامة الضريبية وضرائب المعاش وفق القوانين والاتفاقيات. احصل على تقييم فردي قبل الانتقال النهائي."
        },
        {
          "id": "visa-detail-5",
          "title": "اختيار مكان مناسب طوال العام",
          "body": "تجمع أنطاليا الساحل والخدمات الحضرية، وتوفر إسطنبول رعاية متخصصة ورحلات دولية، بينما تتسم بودروم بالموسمية. اختبر الحي خارج الصيف من حيث النقل والصيدليات والمستشفيات وسهولة السكن. تحقق من تسجيل العنوان قبل الالتزام."
        }
      ],
      "faqs": [
        {
          "question": "هل توجد تأشيرة تقاعد تلقائية؟",
          "answer": "لا، يلزم أساس إقامة مقبول."
        },
        {
          "question": "هل يصلح المعاش الأجنبي إثباتاً؟",
          "answer": "نعم، وثائق المعاش من الإثباتات الممكنة."
        },
        {
          "question": "هل الرعاية مجانية بعد 65؟",
          "answer": "لا، الخيار الإداري للتأمين ليس تغطية صحية."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة — إدارة الهجرة"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية حول الإقامة"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة e-ikamet الرسمية"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/ikamet/basvuruformuornegi/basvuruformubos?tur=0",
          "label": "نموذج الإقامة القصيرة"
        }
      ]
    }
  },
  "turkey-residence-entrepreneur": {
    "fr": {
      "title": "Entrepreneur en Turquie 2026 : résidence, société et permis de travail",
      "metaDescription": "Créer une société en Turquie : différence entre associé, dirigeant actif et investisseur, critères de permis de travail et capital requis.",
      "shortAnswer": "Créer une entreprise turque ne renouvelle pas automatiquement votre séjour et ne vous autorise pas à travailler. Il faut distinguer une visite commerciale, un titre de résidence pour motif d'affaires, un permis de travail et le régime de l'investisseur qualifié. Le ministère publie des critères spécifiques pour les associés étrangers.",
      "bosphorasHelp": "Bosphoras coordonne les visites, la recherche de logement et les rendez-vous avec des professionnels indépendants. Les autorisations sont délivrées par les autorités compétentes, sans garantie de résultat.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Prospection, association et activité effective",
          "body": "Une visite commerciale permet de rencontrer les fournisseurs et partenaires sous le régime d'entrée applicable. Une résidence courte pour relations commerciales peut répondre à certains projets documentés. Détenir des parts sans exercer de travail ne se confond pas avec gérer quotidiennement l'activité. Pour un dirigeant actif, déterminez le permis de travail ou l'exemption réellement applicable."
        },
        {
          "id": "visa-detail-2",
          "title": "Critères officiels d'un associé étranger",
          "body": "Pour les entreprises soumises à la comptabilité au bilan, le régime publié exige en principe un capital libéré de l'entreprise d'au moins 500 000 TL, une participation personnelle d'au moins 500 000 TL et une part d'au moins 20 %. Le premier permis prévoit l'emploi d'au moins cinq citoyens turcs par mois dès le début du septième mois. Ce sont des critères de permis de travail, pas le capital minimum universel de constitution d'une société.",
          "table": {
            "headers": [
              "Critère associé",
              "Valeur générale"
            ],
            "rows": [
              [
                "Capital personnel libéré",
                "500 000 TL"
              ],
              [
                "Participation",
                "20 % minimum"
              ],
              [
                "Emploi dès le mois 7",
                "5 citoyens turcs"
              ],
              [
                "Exception spécifique",
                "Participation ≥ 100 000 USD"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Exception et seuils distincts",
          "body": "Lorsque la participation en capital de l'associé étranger atteint 100 000 USD, les critères spécifiques de capital et d'emploi susmentionnés ne s'appliquent pas. L'exemption n'est toutefois pas une délivrance automatique. Ne confondez pas ce seuil avec l'investissement qualifié de 500 000 USD en capital fixe pour la voie de résidence investisseur. Des régimes sectoriels ou personnels spécifiques peuvent également exister."
        },
        {
          "id": "visa-detail-4",
          "title": "Préparer le budget et les pièces",
          "body": "Prévoyez les documents constitutifs, justificatifs de participation libérée, inscription commerciale, contrats, comptabilité et éventuels engagements d'emploi. En 2026, le coût employeur mensuel officiel d'un salarié au salaire minimum hors réduction est de 40 874,63 TL ; cinq salariés représentent 204 373,15 TL par mois à titre indicatif, hors autres frais. Vérifiez les réductions et coûts réellement applicables."
        },
        {
          "id": "visa-detail-5",
          "title": "Coordonner la société et le séjour",
          "body": "En amont, définissez précisément le rôle de l'associé, le calendrier de création, l'autorisation de travail et les obligations fiscales et sociales. Un permis de travail valide tient généralement lieu d'autorisation de résidence. Une activité locale ne doit pas commencer sous une simple autorisation touristique. En cas de recrutement, faites également examiner les critères applicables à chaque salarié étranger."
        }
      ],
      "faqs": [
        {
          "question": "Créer une SARL donne-t-il automatiquement un ikamet ?",
          "answer": "Non, le titre ou permis approprié nécessite une procédure distincte."
        },
        {
          "question": "Combien faut-il investir pour le permis d'un associé ?",
          "answer": "Le régime général prévoit 500 000 TL de participation et au moins 20 %, avec les autres conditions et exceptions."
        },
        {
          "question": "Le seuil de 100 000 USD garantit-il le permis ?",
          "answer": "Non, il écarte certains critères spécifiques, pas l'ensemble de l'examen."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Types de résidence — Migration"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://www.csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/",
          "label": "Ministère du Travail : critères des permis"
        },
        {
          "href": "https://www.csgb.gov.tr/yayinlar/calisma-hayati-istatistikleri-e-bulteni/eylul-2026/ucret-ve-sendikal-istatistikler.html",
          "label": "Salaire minimum officiel 2026"
        }
      ]
    },
    "en": {
      "title": "Turkey residence for entrepreneurs 2026: company and work permits",
      "metaDescription": "Understand investor, shareholder and active-manager status, foreign partner work permit criteria, capital and hiring costs.",
      "shortAnswer": "Creating a Turkish company does not automatically extend stay or authorise employment. Distinguish commercial visits, business-related residence, work permits and qualified investor residence. The labour ministry publishes specific requirements for foreign company partners.",
      "bosphorasHelp": "Bosphoras coordinates visits, accommodation and meetings with independent professionals. Competent authorities decide applications; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Scouting, shareholding and actual work",
          "body": "A qualifying commercial visit can involve supplier and partner meetings. A documented commercial purpose may support short-term residence. Holding shares passively differs from day-to-day management. Active managers need to establish the appropriate work permit or exemption."
        },
        {
          "id": "visa-detail-2",
          "title": "Official foreign partner criteria",
          "body": "For balance-sheet-method businesses, the published general partner rules require paid-in business capital of at least TRY 500,000, the foreign partner's own capital of at least TRY 500,000 and a shareholding of at least 20%. The initial permit requires at least five Turkish employees monthly starting in month seven. These are work permit evaluation criteria, not universal company formation capital rules.",
          "table": {
            "headers": [
              "Partner criterion",
              "General value"
            ],
            "rows": [
              [
                "Personal paid-in capital",
                "TRY 500,000"
              ],
              [
                "Shareholding",
                "20% minimum"
              ],
              [
                "Employment from month 7",
                "5 Turkish citizens"
              ],
              [
                "Specific exemption",
                "Capital share ≥ USD 100,000"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Exceptions and distinct thresholds",
          "body": "A foreign partner with capital of at least USD 100,000 is exempt from the specific financial and employment criteria above. This does not guarantee approval. Do not confuse it with the USD 500,000 fixed-capital investment route for qualified investor residence. Sectoral and personal exceptions may also apply."
        },
        {
          "id": "visa-detail-4",
          "title": "Budget and evidence",
          "body": "Prepare incorporation, paid-in share, registration, contracts, accounts and employment evidence as applicable. In 2026 the official undiscounted monthly employer cost for one minimum-wage employee is TRY 40,874.63; five represent TRY 204,373.15 before other costs. Establish applicable discounts and actual payroll costs."
        },
        {
          "id": "visa-detail-5",
          "title": "Coordinate company and immigration status",
          "body": "Define the shareholder's actual role, formation timeline, work authorisation and tax and social obligations. A valid work permit generally substitutes for residence permission. Do not commence local work under tourist permission alone. Assess criteria separately for any foreign hires."
        }
      ],
      "faqs": [
        {
          "question": "Does forming a company automatically give residence?",
          "answer": "No, the appropriate permission requires a separate process."
        },
        {
          "question": "What capital is required for a partner's work permit?",
          "answer": "The ordinary criteria include TRY 500,000 personal capital and at least 20%, subject to other conditions and exceptions."
        },
        {
          "question": "Does USD 100,000 guarantee approval?",
          "answer": "No, it removes specific criteria, not the full assessment."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence categories — Migration Presidency"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://www.csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/",
          "label": "Labour Ministry: work permit criteria"
        },
        {
          "href": "https://www.csgb.gov.tr/yayinlar/calisma-hayati-istatistikleri-e-bulteni/eylul-2026/ucret-ve-sendikal-istatistikler.html",
          "label": "Official 2026 minimum wage"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ для предпринимателя в Турции 2026: компания и разрешение на работу",
      "metaDescription": "Создание фирмы, статус собственника и управляющего, капитал и требования к разрешению на работу иностранного партнёра.",
      "shortAnswer": "Регистрация турецкой компании не продлевает пребывание автоматически и не разрешает работу. Различайте деловой визит, краткосрочный ВНЖ по деловой цели, разрешение на работу и квалифицированное инвестиционное основание. Минтруд публикует специальные критерии для иностранных участников.",
      "bosphorasHelp": "Bosphoras координирует поездки, поиск жилья и встречи с независимыми специалистами. Решения принимают компетентные органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Переговоры, доля и фактическая деятельность",
          "body": "Допустимый деловой визит может включать встречи с поставщиками и партнёрами. Подтверждённая деловая цель может служить основанием краткосрочного ВНЖ. Пассивное владение долей отличается от ежедневного управления. Активному руководителю требуется соответствующее разрешение или исключение."
        },
        {
          "id": "visa-detail-2",
          "title": "Официальные критерии иностранного участника",
          "body": "Для компаний с учётом по балансовому методу общие критерии предусматривают оплаченный капитал компании от 500 000 лир, собственный вклад иностранца от 500 000 лир и долю от 20%. Первое разрешение предусматривает трудоустройство минимум пяти граждан Турции ежемесячно с начала седьмого месяца. Это критерии разрешения на работу, а не универсальный капитал для регистрации фирмы.",
          "table": {
            "headers": [
              "Критерий участника",
              "Общее значение"
            ],
            "rows": [
              [
                "Оплаченный вклад",
                "500 000 TL"
              ],
              [
                "Доля",
                "От 20%"
              ],
              [
                "Работники с 7-го месяца",
                "5 граждан Турции"
              ],
              [
                "Специальное исключение",
                "Вклад ≥ 100 000 USD"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Исключения и разные пороги",
          "body": "Если доля капитала иностранного участника составляет минимум 100 000 долларов, указанные специальные финансовые и кадровые критерии не применяются. Это не гарантирует выдачу. Не путайте порог с 500 000 долларов основного капитала для квалифицированного инвестиционного ВНЖ. Возможны отраслевые и индивидуальные исключения."
        },
        {
          "id": "visa-detail-4",
          "title": "Бюджет и документы",
          "body": "Подготовьте учредительные документы, подтверждение оплаченного вклада, регистрацию, договоры, отчётность и кадровые документы. В 2026 году официальная месячная стоимость сотрудника на минимальной зарплате без льгот составляет 40 874,63 лиры; пять сотрудников — 204 373,15 лиры без дополнительных расходов. Уточните реальные начисления и льготы."
        },
        {
          "id": "visa-detail-5",
          "title": "Согласование бизнеса и миграционного статуса",
          "body": "Определите фактическую роль участника, график регистрации, разрешение на работу и налоговые и социальные обязательства. Действующее разрешение на работу обычно заменяет ВНЖ. Не начинайте местную работу только по туристическому статусу. При найме иностранцев проверяйте критерии отдельно."
        }
      ],
      "faqs": [
        {
          "question": "Регистрация фирмы автоматически даёт ВНЖ?",
          "answer": "Нет, необходима отдельная процедура."
        },
        {
          "question": "Какой капитал нужен участнику?",
          "answer": "Обычные критерии — вклад от 500 000 лир и доля от 20% с другими условиями и исключениями."
        },
        {
          "question": "Гарантирует ли 100 000 долларов разрешение?",
          "answer": "Нет, отменяются отдельные критерии, а не вся проверка."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Виды ВНЖ — миграционная служба"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Портал e-ikamet"
        },
        {
          "href": "https://www.csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/",
          "label": "Минтруд: критерии разрешений"
        },
        {
          "href": "https://www.csgb.gov.tr/yayinlar/calisma-hayati-istatistikleri-e-bulteni/eylul-2026/ucret-ve-sendikal-istatistikler.html",
          "label": "Минимальная зарплата 2026 года"
        }
      ]
    },
    "ar": {
      "title": "إقامة تركيا لرائد الأعمال 2026: الشركة وتصريح العمل",
      "metaDescription": "تأسيس شركة في تركيا والفرق بين الشريك والمدير والمستثمر وشروط رأس المال والتوظيف وتصريح العمل.",
      "shortAnswer": "لا يمدد تأسيس شركة تركية البقاء تلقائياً ولا يمنح حق العمل. ميز بين الزيارة التجارية والإقامة لغرض الأعمال وتصريح العمل وإقامة المستثمر المؤهل. تنشر وزارة العمل معايير خاصة بالشركاء الأجانب.",
      "bosphorasHelp": "تنسق Bosphoras الزيارات والسكن والمواعيد مع المختصين المستقلين. تبت السلطات المختصة في الطلبات دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "الاستطلاع والملكية والعمل الفعلي",
          "body": "يمكن أن تتضمن الزيارة التجارية المؤهلة اجتماعات مع الموردين والشركاء. وقد يدعم الغرض التجاري الموثق إقامة قصيرة. تختلف ملكية الحصص دون عمل عن الإدارة اليومية. يحتاج المدير النشط إلى تحديد تصريح العمل أو الإعفاء المناسب."
        },
        {
          "id": "visa-detail-2",
          "title": "المعايير الرسمية للشريك الأجنبي",
          "body": "للشركات الخاضعة للمحاسبة بالميزانية يشترط النظام العام رأس مال مدفوع للشركة لا يقل عن 500 ألف ليرة ومساهمة شخصية للأجنبي لا تقل عن 500 ألف ليرة وحصة لا تقل عن 20%. ويشترط التصريح الأول خمسة موظفين أتراك على الأقل شهرياً من بداية الشهر السابع. هذه معايير تصريح العمل لا الحد العام لتأسيس الشركات.",
          "table": {
            "headers": [
              "معيار الشريك",
              "القيمة العامة"
            ],
            "rows": [
              [
                "المساهمة المدفوعة",
                "500 ألف ليرة"
              ],
              [
                "الحصة",
                "20% على الأقل"
              ],
              [
                "التوظيف من الشهر السابع",
                "5 مواطنين أتراك"
              ],
              [
                "استثناء محدد",
                "مساهمة ≥ 100 ألف دولار"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "الاستثناءات والحدود المختلفة",
          "body": "إذا بلغت مساهمة الشريك الأجنبي 100 ألف دولار على الأقل فلا تطبق المعايير المالية والتوظيفية الخاصة المذكورة. لا يضمن ذلك الموافقة. لا تخلط هذا الحد باستثمار رأس المال الثابت البالغ 500 ألف دولار لمسار المستثمر المؤهل. قد توجد استثناءات قطاعية وشخصية."
        },
        {
          "id": "visa-detail-4",
          "title": "الميزانية والمستندات",
          "body": "جهز وثائق التأسيس والحصة المدفوعة والتسجيل والعقود والمحاسبة والتوظيف حسب الحالة. في 2026 يبلغ إجمالي تكلفة الموظف بالحد الأدنى للأجر دون تخفيض 40,874.63 ليرة شهرياً؛ وخمسة موظفين يكلفون 204,373.15 ليرة قبل المصاريف الأخرى. حدد التخفيضات والتكلفة الفعلية."
        },
        {
          "id": "visa-detail-5",
          "title": "تنسيق الشركة والإقامة",
          "body": "حدد الدور الفعلي للشريك وجدول التأسيس وتصريح العمل والالتزامات الضريبية والاجتماعية. يعتبر تصريح العمل الساري عادة تصريح إقامة. لا تبدأ العمل المحلي بتصريح سياحي فقط. راجع معايير كل موظف أجنبي عند التوظيف."
        }
      ],
      "faqs": [
        {
          "question": "هل يمنح تأسيس شركة الإقامة تلقائياً؟",
          "answer": "لا، يلزم إجراء مستقل."
        },
        {
          "question": "كم رأس المال المطلوب للشريك؟",
          "answer": "تشمل المعايير العادية 500 ألف ليرة وحصة 20% على الأقل مع بقية الشروط والاستثناءات."
        },
        {
          "question": "هل تضمن 100 ألف دولار التصريح؟",
          "answer": "لا، تعفي من معايير محددة لا من التقييم كاملاً."
        }
      ],
      "sources": [
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة — إدارة الهجرة"
        },
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة e-ikamet الرسمية"
        },
        {
          "href": "https://www.csgb.gov.tr/uigm/en/calisma-izni/calisma-izni-degerlendirme-kriterleri/",
          "label": "وزارة العمل: معايير التصاريح"
        },
        {
          "href": "https://www.csgb.gov.tr/yayinlar/calisma-hayati-istatistikleri-e-bulteni/eylul-2026/ucret-ve-sendikal-istatistikler.html",
          "label": "الحد الأدنى الرسمي للأجور لعام 2026"
        }
      ]
    }
  },
  "turkey-residence-digital-nomad": {
    "fr": {
      "title": "Visa digital nomad Turquie 2026 : 36 pays, revenu et démarches",
      "metaDescription": "Découvrez le visa nomade numérique turc : 36 nationalités, âge de 21 à 55 ans, diplôme, revenu de 3 000 USD et demande consulaire.",
      "shortAnswer": "Le programme officiel GoTürkiye est destiné aux travailleurs à distance éligibles dont l'activité est liée à des entreprises situées hors de Turquie. Il faut notamment avoir entre 21 et 55 ans, un diplôme universitaire et des revenus de 3 000 USD par mois ou 36 000 USD par an. Le certificat de pré-demande précède la demande de visa.",
      "bosphorasHelp": "Bosphoras coordonne les visites, la recherche de logement et les rendez-vous avec des professionnels indépendants. Les autorisations sont délivrées par les autorités compétentes, sans garantie de résultat.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Nationalités éligibles",
          "body": "Le programme publié comprend 36 nationalités. Le tableau les regroupe par région ; une résidence dans l'un de ces pays sans en avoir la nationalité ne suffit pas. Les citoyens de Russie, d'Ukraine et de Biélorussie figurent dans la liste, tout comme les Français et les Canadiens.",
          "table": {
            "headers": [
              "Groupe",
              "Nationalités"
            ],
            "rows": [
              [
                "UE (26)",
                "Autriche, Belgique, Bulgarie, Croatie, Danemark, Espagne, Estonie, Finlande, France, Allemagne, Grèce, Hongrie, Irlande, Italie, Lettonie, Lituanie, Luxembourg, Malte, Pays-Bas, Pologne, Portugal, République tchèque, Roumanie, Slovaquie, Slovénie, Suède"
              ],
              [
                "Autres pays européens (5)",
                "Norvège, Islande, Liechtenstein, Royaume-Uni, Suisse"
              ],
              [
                "Amérique du Nord (2)",
                "États-Unis, Canada"
              ],
              [
                "Autres pays (3)",
                "Russie, Ukraine, Biélorussie"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Les cinq pièces principales",
          "body": "Le passeport doit être valable au moins six mois à compter de l'arrivée. Ajoutez diplôme universitaire ou équivalent reconnu, contrat salarié avec une entreprise située hors de Turquie ou contrat commercial avec une entreprise étrangère pour un indépendant, photo biométrique et preuve du revenu demandé. Un revenu suffisant à lui seul ne remplace pas les autres pièces."
        },
        {
          "id": "visa-detail-3",
          "title": "Procédure en deux étapes",
          "body": "Inscrivez-vous sur GoTürkiye et téléversez les justificatifs. Après contrôle favorable, le portail délivre le Digital Nomad Identification Certificate. Présentez ce certificat et les autres pièces au centre de visas ou au consulat turc compétent. Le certificat n'est pas le visa. Pour rester au-delà de l'autorisation accordée, organisez le statut de résidence applicable via les autorités."
        },
        {
          "id": "visa-detail-4",
          "title": "Durée de séjour et fiscalité",
          "body": "Les conditions publiées du certificat ne fixent pas une durée universelle de visa ou un délai garanti de délivrance. Lisez la durée et les conditions du visa effectivement délivré. Un visa nomade n'est pas une exonération fiscale automatique et ne permet pas automatiquement de travailler pour une entreprise turque. Évaluez votre résidence fiscale, les cotisations et les obligations de votre employeur ou activité indépendante."
        },
        {
          "id": "visa-detail-5",
          "title": "Préparer votre espace de travail",
          "body": "Avant le départ, comparez les quartiers selon la qualité de la connexion, la tranquillité, le temps d'accès à l'aéroport, l'assurance et l'admissibilité de l'adresse. Testez une connexion de secours et le poste de travail dans le logement. Istanbul, İzmir, Antalya et Bodrum offrent des cadres différents. Privilégiez un hébergement flexible pendant la préparation du dossier afin de limiter le risque financier."
        }
      ],
      "faqs": [
        {
          "question": "Quel revenu minimum pour le certificat ?",
          "answer": "3 000 USD mensuels ou 36 000 USD annuels."
        },
        {
          "question": "Un indépendant est-il admissible ?",
          "answer": "Oui s'il satisfait les conditions, notamment un contrat avec une entreprise hors de Turquie."
        },
        {
          "question": "Le certificat suffit-il pour entrer ?",
          "answer": "Non, il faut obtenir le visa approprié."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://goturkiye.com/branding/press-releases/would-you-like-to-work-from-one-of-the-most-beautiful-countries-in-the-world",
          "label": "GoTürkiye : programme officiel digital nomad"
        },
        {
          "href": "https://goturkiye.com/tr/digitalnomads/dijital-gocebe-vize-ve-kisa-donem-ikamet-icin-basvuru-sartlari",
          "label": "Conditions officielles de pré-demande"
        },
        {
          "href": "https://goturkiye.com/digitalnomads/membership-agreement",
          "label": "Certificat et procédure consulaire"
        }
      ]
    },
    "en": {
      "title": "Turkey digital nomad visa 2026: 36 countries, income and application",
      "metaDescription": "Turkey's digital nomad programme: eligible nationalities, age 21–55, degree, USD 3,000 income and consular application.",
      "shortAnswer": "The official GoTürkiye programme is designed for eligible remote workers whose work is connected with businesses outside Turkey. Applicants need to be aged 21–55, have a university qualification and demonstrate USD 3,000 monthly or USD 36,000 annual income. Pre-application certification precedes the visa application.",
      "bosphorasHelp": "Bosphoras coordinates visits, accommodation and meetings with independent professionals. Competent authorities decide applications; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Eligible nationalities",
          "body": "The published programme includes 36 nationalities, grouped in the table. Living in a listed country without its citizenship does not suffice. Russia, Ukraine and Belarus are included, as are France and Canada.",
          "table": {
            "headers": [
              "Group",
              "Nationalities"
            ],
            "rows": [
              [
                "EU (26)",
                "Austria, Belgium, Bulgaria, Croatia, Czechia, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden"
              ],
              [
                "Other European countries (5)",
                "Norway, Iceland, Liechtenstein, United Kingdom, Switzerland"
              ],
              [
                "North America (2)",
                "United States, Canada"
              ],
              [
                "Other countries (3)",
                "Russia, Ukraine, Belarus"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Five primary documents",
          "body": "A passport valid for at least six months from arrival, a university degree or equivalent, and proof of remote work are required. Employees supply a contract with an employer outside Turkey; self-employed applicants supply a business contract with a company outside Turkey. Include a biometric photograph and proof of the required income. Income alone does not replace the other documents."
        },
        {
          "id": "visa-detail-3",
          "title": "Two-stage application",
          "body": "Register on GoTürkiye and upload the evidence. Following favourable review, the portal issues the Digital Nomad Identification Certificate. Take that certificate and other required documents to the appropriate Turkish visa centre or consulate. The certificate is not the visa. Arrange appropriate residence status if staying beyond the permission granted."
        },
        {
          "id": "visa-detail-4",
          "title": "Stay duration and tax position",
          "body": "The published certificate requirements do not set a universal visa duration or guaranteed processing time. Read the conditions and duration on the actual visa. Nomad status does not automatically establish tax exemption or authorise employment by a Turkish company. Assess tax residence, contributions and employer or self-employment obligations."
        },
        {
          "id": "visa-detail-5",
          "title": "Set up an effective remote base",
          "body": "Compare neighbourhood connectivity, quiet working conditions, airport access, insurance and address eligibility. Test a backup connection and the home's workspace. Istanbul, İzmir, Antalya and Bodrum offer different settings. Flexible accommodation can limit financial exposure during application preparation."
        }
      ],
      "faqs": [
        {
          "question": "What income is required?",
          "answer": "USD 3,000 monthly or USD 36,000 annually."
        },
        {
          "question": "Can freelancers qualify?",
          "answer": "Yes, subject to the criteria including a contract with a company outside Turkey."
        },
        {
          "question": "Does the certificate allow entry?",
          "answer": "No; obtain the appropriate visa."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://goturkiye.com/branding/press-releases/would-you-like-to-work-from-one-of-the-most-beautiful-countries-in-the-world",
          "label": "GoTürkiye: official digital nomad programme"
        },
        {
          "href": "https://goturkiye.com/tr/digitalnomads/dijital-gocebe-vize-ve-kisa-donem-ikamet-icin-basvuru-sartlari",
          "label": "Official pre-application requirements"
        },
        {
          "href": "https://goturkiye.com/digitalnomads/membership-agreement",
          "label": "Certificate and consular procedure"
        }
      ]
    },
    "ru": {
      "title": "Виза цифрового кочевника в Турцию 2026: 36 стран, доход и оформление",
      "metaDescription": "Программа цифровых кочевников: гражданства, возраст 21–55, диплом, доход 3 000 долларов и консульская подача.",
      "shortAnswer": "Официальная программа GoTürkiye предназначена для подходящих удалённых работников, связанных с компаниями за пределами Турции. Требуются возраст 21–55 лет, высшее образование и доход от 3 000 долларов в месяц или 36 000 в год. Сначала оформляется сертификат для подачи на визу.",
      "bosphorasHelp": "Bosphoras координирует поездки, поиск жилья и встречи с независимыми специалистами. Решения принимают компетентные органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Подходящие гражданства",
          "body": "В опубликованной программе 36 гражданств, сгруппированных в таблице. Проживания в одной из стран без гражданства недостаточно. В списке присутствуют Россия, Украина, Беларусь, Франция и Канада.",
          "table": {
            "headers": [
              "Группа",
              "Гражданства"
            ],
            "rows": [
              [
                "ЕС (26)",
                "Австрия, Бельгия, Болгария, Венгрия, Германия, Греция, Дания, Ирландия, Испания, Италия, Латвия, Литва, Люксембург, Мальта, Нидерланды, Польша, Португалия, Румыния, Словакия, Словения, Финляндия, Франция, Хорватия, Чехия, Швеция, Эстония"
              ],
              [
                "Другие страны Европы (5)",
                "Норвегия, Исландия, Лихтенштейн, Великобритания, Швейцария"
              ],
              [
                "Северная Америка (2)",
                "США, Канада"
              ],
              [
                "Другие страны (3)",
                "Россия, Украина, Беларусь"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "Пять основных документов",
          "body": "Паспорт должен действовать не менее шести месяцев с даты прибытия. Нужны диплом или его эквивалент, подтверждение удалённой работы: трудовой договор с компанией за пределами Турции либо договор с иностранной компанией для самозанятого, биометрическое фото и подтверждение дохода. Доход не заменяет остальные документы."
        },
        {
          "id": "visa-detail-3",
          "title": "Два этапа оформления",
          "body": "Зарегистрируйтесь на GoTürkiye и загрузите документы. При положительной проверке выдаётся Digital Nomad Identification Certificate — сертификат цифрового кочевника. С ним и другими документами обратитесь в компетентный визовый центр или турецкое консульство. Сертификат не является визой. Для более длительного пребывания оформляйте соответствующий статус через органы."
        },
        {
          "id": "visa-detail-4",
          "title": "Срок и налоговый статус",
          "body": "Опубликованные условия сертификата не устанавливают единого срока визы или гарантированного времени выдачи. Изучите условия фактически выданной визы. Статус не освобождает автоматически от налогов и не разрешает работу на турецкую компанию. Оцените налоговое резидентство, взносы и обязанности работодателя или самозанятого."
        },
        {
          "id": "visa-detail-5",
          "title": "Подготовка рабочего места",
          "body": "Сравните интернет, тишину, доступ к аэропорту, страховку и возможность регистрации адреса. Проверьте резервный интернет и рабочее место. Стамбул, Измир, Анталья и Бодрум предлагают разные условия. Гибкое жильё снижает финансовые риски на этапе оформления."
        }
      ],
      "faqs": [
        {
          "question": "Какой доход нужен?",
          "answer": "3 000 долларов в месяц или 36 000 в год."
        },
        {
          "question": "Подходит ли фрилансер?",
          "answer": "Да при выполнении требований, включая договор с компанией за пределами Турции."
        },
        {
          "question": "Можно въехать по сертификату?",
          "answer": "Нет, нужно получить соответствующую визу."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Портал e-ikamet"
        },
        {
          "href": "https://goturkiye.com/branding/press-releases/would-you-like-to-work-from-one-of-the-most-beautiful-countries-in-the-world",
          "label": "GoTürkiye: официальная программа цифровых кочевников"
        },
        {
          "href": "https://goturkiye.com/tr/digitalnomads/dijital-gocebe-vize-ve-kisa-donem-ikamet-icin-basvuru-sartlari",
          "label": "Официальные условия предварительной подачи"
        },
        {
          "href": "https://goturkiye.com/digitalnomads/membership-agreement",
          "label": "Сертификат и консульская процедура"
        }
      ]
    },
    "ar": {
      "title": "تأشيرة الرحالة الرقميين في تركيا 2026: 36 دولة والدخل والإجراءات",
      "metaDescription": "برنامج الرحالة الرقميين في تركيا: الجنسيات المؤهلة والعمر 21–55 والشهادة الجامعية ودخل 3 آلاف دولار والطلب القنصلي.",
      "shortAnswer": "يستهدف برنامج GoTürkiye الرسمي العاملين عن بعد المؤهلين الذين يرتبط نشاطهم بشركات خارج تركيا. يشترط العمر بين 21 و55 عاماً وشهادة جامعية ودخل 3 آلاف دولار شهرياً أو 36 ألفاً سنوياً. يسبق الحصول على شهادة الطلب الأولي طلب التأشيرة.",
      "bosphorasHelp": "تنسق Bosphoras الزيارات والسكن والمواعيد مع المختصين المستقلين. تبت السلطات المختصة في الطلبات دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "الجنسيات المؤهلة",
          "body": "يشمل البرنامج المنشور 36 جنسية موزعة في الجدول. لا تكفي الإقامة في دولة مدرجة دون جنسيتها. تشمل القائمة روسيا وأوكرانيا وبيلاروسيا وفرنسا وكندا.",
          "table": {
            "headers": [
              "المجموعة",
              "الجنسيات"
            ],
            "rows": [
              [
                "الاتحاد الأوروبي (26)",
                "النمسا، بلجيكا، بلغاريا، كرواتيا، التشيك، الدنمارك، إستونيا، فنلندا، فرنسا، ألمانيا، اليونان، المجر، إيرلندا، إيطاليا، لاتفيا، ليتوانيا، لوكسمبورغ، مالطا، هولندا، بولندا، البرتغال، رومانيا، سلوفاكيا، سلوفينيا، إسبانيا، السويد"
              ],
              [
                "دول أوروبية أخرى (5)",
                "النرويج، آيسلندا، ليختنشتاين، المملكة المتحدة، سويسرا"
              ],
              [
                "أمريكا الشمالية (2)",
                "الولايات المتحدة، كندا"
              ],
              [
                "دول أخرى (3)",
                "روسيا، أوكرانيا، بيلاروسيا"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-2",
          "title": "المستندات الخمسة الرئيسية",
          "body": "يلزم جواز صالح ستة أشهر على الأقل من تاريخ الوصول وشهادة جامعية أو ما يعادلها وإثبات العمل عن بعد: عقد موظف مع شركة خارج تركيا أو عقد تجاري للمستقل مع شركة خارجها، وصورة بيومترية وإثبات الدخل المطلوب. لا يغني الدخل عن بقية الوثائق."
        },
        {
          "id": "visa-detail-3",
          "title": "الطلب على مرحلتين",
          "body": "سجل في GoTürkiye وارفع المستندات. بعد مراجعة ناجحة تصدر شهادة تعريف الرحالة الرقمي. قدم الشهادة وبقية الوثائق لمركز التأشيرات أو القنصلية التركية المختصة. الشهادة ليست تأشيرة. نظم وضع الإقامة المناسب عند الرغبة في البقاء بعد المدة الممنوحة."
        },
        {
          "id": "visa-detail-4",
          "title": "مدة البقاء والضرائب",
          "body": "لا تحدد شروط الشهادة المنشورة مدة تأشيرة موحدة أو وقت إصدار مضموناً. اقرأ شروط التأشيرة الصادرة فعلاً. لا يمنح الوضع إعفاء ضريبياً تلقائياً أو حق العمل لشركة تركية. قيّم الإقامة الضريبية والمساهمات والتزامات جهة العمل أو النشاط المستقل."
        },
        {
          "id": "visa-detail-5",
          "title": "تجهيز بيئة العمل",
          "body": "قارن اتصال الإنترنت والهدوء والوصول إلى المطار والتأمين وأهلية العنوان. اختبر اتصالاً احتياطياً ومكان العمل في السكن. تقدم إسطنبول وإزمير وأنطاليا وبودروم بيئات مختلفة. يقلل السكن المرن المخاطر المالية أثناء التحضير."
        }
      ],
      "faqs": [
        {
          "question": "ما الحد الأدنى للدخل؟",
          "answer": "3 آلاف دولار شهرياً أو 36 ألفاً سنوياً."
        },
        {
          "question": "هل يتأهل المستقل؟",
          "answer": "نعم عند استيفاء الشروط ومنها عقد مع شركة خارج تركيا."
        },
        {
          "question": "هل تكفي الشهادة للدخول؟",
          "answer": "لا، يجب الحصول على التأشيرة المناسبة."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة e-ikamet الرسمية"
        },
        {
          "href": "https://goturkiye.com/branding/press-releases/would-you-like-to-work-from-one-of-the-most-beautiful-countries-in-the-world",
          "label": "GoTürkiye: برنامج الرحالة الرقميين الرسمي"
        },
        {
          "href": "https://goturkiye.com/tr/digitalnomads/dijital-gocebe-vize-ve-kisa-donem-ikamet-icin-basvuru-sartlari",
          "label": "الشروط الرسمية للطلب الأولي"
        },
        {
          "href": "https://goturkiye.com/digitalnomads/membership-agreement",
          "label": "الشهادة والإجراءات القنصلية"
        }
      ]
    }
  },
  "turkey-residence-family-office": {
    "fr": {
      "title": "Résidence en Turquie pour family office : patrimoine, famille et investissements",
      "metaDescription": "Préparez une installation patrimoniale en Turquie : résidence des investisseurs, famille, immobilier à 400 000 USD, gouvernance et fiscalité.",
      "shortAnswer": "Le family office n’est pas une catégorie de titre de séjour turc. Une famille internationale doit distinguer le statut personnel de ses membres, la structure de gestion du patrimoine et les autorisations professionnelles. Un investissement certifié peut ouvrir un titre de courte durée allant jusqu’à cinq ans ; la décision reste individuelle.",
      "bosphorasHelp": "Bosphoras peut organiser une visite de repérage, la recherche de logement et des rendez-vous avec des professionnels indépendants. Vous déposez votre demande via les autorités, sans promesse d’acceptation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choisir un statut pour chaque membre",
          "body": "Pour une famille qui souhaite se rapprocher d’Istanbul, établissez d’abord les nationalités, droits d’entrée, dates et motifs de chacun. Le conjoint et les enfants mineurs ou à charge d’un investisseur qualifié peuvent relever du dispositif spécifique. Dans les autres cas, examinez le titre familial, les études ou un motif de résidence propre. Une société patrimoniale ne peut pas tenir lieu de titre individuel."
        },
        {
          "id": "visa-detail-2",
          "title": "Comparer les voies d’investissement",
          "body": "L’agence publique distingue notamment l’immobilier admissible à partir de 400 000 USD, les apports en capital fixe à partir de 500 000 USD, les dépôts ou placements qualifiés à 500 000 USD et la création de 50 emplois. Les placements et l’immobilier concernés comportent des obligations de conservation de trois ans. Avant de sélectionner un actif, identifiez l’autorité de certification et vérifiez la liquidité, les coûts, les risques et les droits de sortie.",
          "table": {
            "headers": [
              "Voie",
              "Seuil / critère"
            ],
            "rows": [
              [
                "Immobilier qualifié",
                "400 000 USD, conservation 3 ans"
              ],
              [
                "Capital fixe",
                "500 000 USD"
              ],
              [
                "Dépôt ou placement admissible",
                "500 000 USD, conservation 3 ans"
              ],
              [
                "Création d’emplois",
                "50 personnes"
              ],
              [
                "Titre investisseur",
                "Jusqu’à 5 ans sous conditions"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Séparer le patrimoine de la gestion opérationnelle",
          "body": "Une personne qui possède des parts peut avoir un rôle différent d’un dirigeant qui travaille quotidiennement en Turquie. Déterminez qui signe, qui emploie le personnel et qui fournit des services à des tiers. L’autorisation de travail et les éventuelles règles de services financiers doivent être examinées avant l’activité. Le permis de résidence n’est ni une licence de gestion d’actifs ni une autorisation générale de solliciter des investisseurs."
        },
        {
          "id": "visa-detail-4",
          "title": "Fiscalité et transmission internationale",
          "body": "Préparez un inventaire des actifs, de leurs pays de détention et de la résidence fiscale actuelle des personnes et sociétés. Les obligations déclaratives, les conventions fiscales, les successions, la protection des données et l’origine des fonds doivent être analysées de manière coordonnée par des professionnels qualifiés. Le seuil d’investissement ne détermine pas à lui seul le domicile fiscal. Évitez de transférer des fonds avant validation juridique et bancaire."
        },
        {
          "id": "visa-detail-5",
          "title": "Planifier une installation en trois phases",
          "body": "Lors d’une mission exploratoire, organisez les rencontres, présélectionnez les quartiers et comparez les banques sans présumer leur acceptation. Avant tout engagement, validez le fondement de séjour, les documents d’état civil et les conditions de scolarité. Enfin, coordonnez le calendrier des dossiers, de l’adresse et des assurances. Bosphoras intervient dans l’organisation pratique, sans se substituer aux avocats, fiscalistes et gestionnaires autorisés."
        }
      ],
      "faqs": [
        {
          "question": "Existe-t-il un visa family office ?",
          "answer": "Non, il faut choisir une catégorie existante de résidence ou de travail."
        },
        {
          "question": "L’investissement garantit-il cinq ans ?",
          "answer": "Non, cinq ans est un maximum pour les investissements admissibles."
        },
        {
          "question": "La résidence donne-t-elle automatiquement la citoyenneté ?",
          "answer": "Non, une procédure et une décision distinctes sont nécessaires."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Catégories de résidence"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Agence publique : résidence pour investisseurs"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Agence publique : immobilier et citoyenneté"
        }
      ]
    },
    "en": {
      "title": "Turkey residence for family offices: wealth, family and investment",
      "metaDescription": "Plan Turkish residence for an international family: qualifying investment, USD 400,000 property route, governance, relocation and tax considerations.",
      "shortAnswer": "A family office is not a Turkish residence permit category. International families should separate individual immigration status, wealth-holding structures and professional permissions. Certified qualifying investments may support short-term permits of up to five years, subject to individual assessment.",
      "bosphorasHelp": "Bosphoras can coordinate scouting visits, housing searches and meetings with independent professionals. Applications go through the authorities; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Assess each family member separately",
          "body": "Start with nationalities, entry rights, dates and each person's actual purpose. A qualifying investor's spouse and minor or dependent children may fall under the investor route. Other families may use family residence, study or another individual basis. A wealth-holding company cannot replace individual immigration permission."
        },
        {
          "id": "visa-detail-2",
          "title": "Compare certified investment routes",
          "body": "The government investment office identifies qualifying real estate from USD 400,000, fixed capital from USD 500,000, eligible deposits or investments from USD 500,000 and creation of 50 jobs. Relevant property and financial routes require a three-year holding period. Identify the certifying authority and assess liquidity, costs, risk and exit restrictions before selecting assets.",
          "table": {
            "headers": [
              "Route",
              "Threshold / condition"
            ],
            "rows": [
              [
                "Qualifying property",
                "USD 400,000; hold 3 years"
              ],
              [
                "Fixed capital",
                "USD 500,000"
              ],
              [
                "Eligible deposit or investment",
                "USD 500,000; hold 3 years"
              ],
              [
                "Job creation",
                "50 people"
              ],
              [
                "Investor residence",
                "Up to 5 years subject to eligibility"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Separate ownership from operational management",
          "body": "A passive shareholder differs from an executive working daily in Turkey. Determine signing authority, staff employment and whether services are supplied to third parties. Work permission and applicable financial-services rules must be assessed before operations. A residence card is neither an asset-management licence nor permission to solicit investors."
        },
        {
          "id": "visa-detail-4",
          "title": "International tax and succession",
          "body": "Inventory assets, jurisdictions and existing individual and corporate tax residence. Qualified advisers should coordinate reporting obligations, tax treaties, inheritance, data protection and source-of-funds documentation. An investment threshold alone does not determine tax residence. Avoid transferring funds before appropriate legal and banking checks."
        },
        {
          "id": "visa-detail-5",
          "title": "Three phases of relocation",
          "body": "Use exploratory visits for meetings, neighbourhood selection and banking discussions without assuming acceptance. Before commitments, validate residence grounds, civil records and school arrangements. Then coordinate application dates, address registration and insurance. Bosphoras supports practical organisation rather than replacing lawyers, tax advisers or licensed managers."
        }
      ],
      "faqs": [
        {
          "question": "Is there a family office visa?",
          "answer": "No; an existing residence or work route must apply."
        },
        {
          "question": "Does investment guarantee five years?",
          "answer": "No, five years is a maximum for qualifying investments."
        },
        {
          "question": "Does residence automatically confer citizenship?",
          "answer": "No, citizenship requires a separate procedure and decision."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Government investment office: investor residence"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Government investment office: property and citizenship"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ в Турции для семейного офиса: семья, капитал и инвестиции",
      "metaDescription": "Переезд состоятельной семьи в Турцию: инвестиционный ВНЖ, недвижимость от 400 000 долларов, управление и налоги.",
      "shortAnswer": "Семейный офис не является отдельной категорией турецкого ВНЖ. Международной семье следует разделять миграционный статус каждого человека, структуру владения активами и профессиональные разрешения. Подтверждённые инвестиции могут дать основание для краткосрочного ВНЖ до пяти лет, но решение принимается индивидуально.",
      "bosphorasHelp": "Bosphoras может организовать ознакомительные поездки, поиск жилья и встречи с независимыми специалистами. Заявления подаются в государственные органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Статус каждого члена семьи",
          "body": "Определите гражданства, права въезда, даты и цели каждого. Супруг и несовершеннолетние либо зависимые дети квалифицированного инвестора могут претендовать на соответствующий режим. В иных случаях рассмотрите семейный, студенческий или другой ВНЖ. Компания, владеющая активами, не заменяет личное разрешение."
        },
        {
          "id": "visa-detail-2",
          "title": "Сравнение инвестиционных оснований",
          "body": "Государственное агентство указывает недвижимость от 400 000 долларов, основной капитал от 500 000 долларов, подходящие депозиты и вложения от 500 000 долларов либо создание 50 рабочих мест. Для соответствующих финансовых и имущественных вложений действует трёхлетний срок удержания. До выбора актива определите орган подтверждения, ликвидность, расходы, риски и ограничения выхода.",
          "table": {
            "headers": [
              "Основание",
              "Порог / условие"
            ],
            "rows": [
              [
                "Квалифицированное жильё",
                "400 000 USD; 3 года"
              ],
              [
                "Основной капитал",
                "500 000 USD"
              ],
              [
                "Допустимый депозит или вложение",
                "500 000 USD; 3 года"
              ],
              [
                "Создание рабочих мест",
                "50 человек"
              ],
              [
                "Инвестиционный ВНЖ",
                "До 5 лет при выполнении условий"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Владение и операционное управление",
          "body": "Пассивный участник отличается от руководителя, ежедневно работающего в Турции. Определите, кто подписывает документы, нанимает сотрудников и оказывает услуги третьим лицам. До деятельности выясните правила разрешений на работу и финансовых услуг. ВНЖ не является лицензией управления активами или привлечения инвесторов."
        },
        {
          "id": "visa-detail-4",
          "title": "Налоги и наследование",
          "body": "Составьте перечень активов, юрисдикций и действующего налогового резидентства людей и компаний. Квалифицированным специалистам следует согласовать отчётность, налоговые соглашения, наследование, защиту данных и подтверждение происхождения средств. Инвестиционный порог сам по себе не определяет налоговое резидентство. Не переводите средства до правовой и банковской проверки."
        },
        {
          "id": "visa-detail-5",
          "title": "Три этапа переезда",
          "body": "Во время ознакомительной поездки организуйте встречи, выберите районы и обсудите банковские услуги без ожидания гарантии. До обязательств подтвердите основание ВНЖ, семейные документы и условия обучения детей. Затем согласуйте сроки заявлений, регистрацию адреса и страховку. Bosphoras организует практические вопросы, не заменяя адвокатов, налоговых консультантов и лицензированных управляющих."
        }
      ],
      "faqs": [
        {
          "question": "Есть ли специальная виза семейного офиса?",
          "answer": "Нет, необходимо существующее основание ВНЖ или работы."
        },
        {
          "question": "Гарантируют ли инвестиции пять лет?",
          "answer": "Нет, это максимальный срок при соответствии условиям."
        },
        {
          "question": "Даёт ли ВНЖ гражданство автоматически?",
          "answer": "Нет, необходима отдельная процедура."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Категории ВНЖ"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "Инвестиционное агентство: ВНЖ инвесторов"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "Инвестиционное агентство: недвижимость и гражданство"
        }
      ]
    },
    "ar": {
      "title": "إقامة تركيا للمكاتب العائلية: الثروة والأسرة والاستثمار",
      "metaDescription": "خطط لانتقال الأسرة الدولية إلى تركيا: إقامة المستثمر والعقار من 400 ألف دولار والحوكمة والضرائب.",
      "shortAnswer": "المكتب العائلي ليس نوعاً مستقلاً من الإقامة التركية. ينبغي فصل وضع كل فرد وهيكل ملكية الثروة والتصاريح المهنية. قد يتيح الاستثمار المؤهل المعتمد إقامة قصيرة تصل إلى خمس سنوات، مع دراسة كل طلب على حدة.",
      "bosphorasHelp": "تنظم Bosphoras الزيارات الاستطلاعية والبحث عن السكن والمواعيد مع مختصين مستقلين. تقدم الطلبات عبر السلطات المختصة دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "تحديد وضع كل فرد",
          "body": "حدد الجنسيات وحقوق الدخول والتواريخ والأغراض لكل فرد. قد يتأهل زوج المستثمر المؤهل وأطفاله القصر أو المعالون للمسار الخاص. وفي غير ذلك تُدرس الإقامة العائلية أو الدراسة أو أساس فردي آخر. لا تحل شركة إدارة الثروة محل تصريح الإقامة الشخصي."
        },
        {
          "id": "visa-detail-2",
          "title": "مقارنة مسارات الاستثمار",
          "body": "يحدد مكتب الاستثمار الحكومي العقار المؤهل من 400 ألف دولار ورأس المال الثابت من 500 ألف دولار والودائع والاستثمارات المؤهلة من 500 ألف دولار أو إيجاد 50 وظيفة. وتخضع المسارات العقارية والمالية المعنية لقيود احتفاظ ثلاث سنوات. حدد جهة الاعتماد والسيولة والتكاليف والمخاطر وقيود التخارج قبل اختيار الأصل.",
          "table": {
            "headers": [
              "المسار",
              "الحد أو الشرط"
            ],
            "rows": [
              [
                "عقار مؤهل",
                "400 ألف دولار؛ 3 سنوات"
              ],
              [
                "رأس مال ثابت",
                "500 ألف دولار"
              ],
              [
                "وديعة أو استثمار مؤهل",
                "500 ألف دولار؛ 3 سنوات"
              ],
              [
                "خلق الوظائف",
                "50 شخصاً"
              ],
              [
                "إقامة المستثمر",
                "حتى 5 سنوات بشروط"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "فصل الملكية عن الإدارة الفعلية",
          "body": "يختلف الشريك غير العامل عن المدير الذي يمارس نشاطاً يومياً في تركيا. حدد صلاحيات التوقيع والتوظيف وتقديم الخدمات للغير. ينبغي التحقق من تصريح العمل وقواعد الخدمات المالية قبل النشاط. ليست الإقامة ترخيصاً لإدارة الأصول أو استقطاب المستثمرين."
        },
        {
          "id": "visa-detail-4",
          "title": "الضرائب والإرث الدولي",
          "body": "احصر الأصول والدول التي توجد فيها والإقامة الضريبية الحالية للأفراد والشركات. ينسق المختصون المؤهلون الإفصاح والاتفاقيات الضريبية والإرث وحماية البيانات وإثبات مصدر الأموال. لا يحدد مبلغ الاستثمار وحده الإقامة الضريبية. تجنب التحويل قبل التحقق القانوني والمصرفي."
        },
        {
          "id": "visa-detail-5",
          "title": "ثلاث مراحل للانتقال",
          "body": "خصص الزيارة الاستطلاعية للاجتماعات واختيار الأحياء ومناقشة الخدمات المصرفية دون افتراض القبول. قبل الالتزام تحقق من أساس الإقامة ووثائق الأسرة والمدارس. ثم نسق مواعيد الطلبات وتسجيل العنوان والتأمين. تنظم Bosphoras الجوانب العملية دون أن تحل محل المحامين والمستشارين الضريبيين ومديري الأصول المرخصين."
        }
      ],
      "faqs": [
        {
          "question": "هل توجد تأشيرة خاصة بالمكتب العائلي؟",
          "answer": "لا، يلزم أساس إقامة أو عمل قائم."
        },
        {
          "question": "هل يضمن الاستثمار خمس سنوات؟",
          "answer": "لا، خمس سنوات حد أقصى للاستثمار المؤهل."
        },
        {
          "question": "هل تمنح الإقامة الجنسية تلقائياً؟",
          "answer": "لا، يلزم إجراء وقرار منفصلان."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/pages/obtaining-a-residence-permit.aspx",
          "label": "مكتب الاستثمار الحكومي: إقامة المستثمرين"
        },
        {
          "href": "https://www.invest.gov.tr/en/InvestmentGuide/Pages/acquiring-property-and-citizenship.aspx",
          "label": "مكتب الاستثمار: العقار والجنسية"
        }
      ]
    }
  },
  "residence-istanbul-foreigners": {
    "fr": {
      "title": "Résidence à Istanbul 2026 : ikamet, quartiers et conditions d’adresse",
      "metaDescription": "S’installer à Istanbul : choisir son titre de séjour, vérifier les quartiers et adresses, préparer logement, assurance et rendez-vous.",
      "shortAnswer": "Les étrangers qui souhaitent vivre à Istanbul après leur séjour autorisé doivent déposer une demande adaptée à leur motif. La province applique les règles nationales de l’ikamet et des restrictions locales de domiciliation. Une annonce immobilière séduisante ne constitue pas une preuve d’admissibilité de l’adresse.",
      "bosphorasHelp": "Bosphoras peut organiser une visite de repérage, la recherche de logement et des rendez-vous avec des professionnels indépendants. Vous déposez votre demande via les autorités, sans promesse d’acceptation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choisir son quartier en fonction du projet",
          "body": "Pour une famille travaillant sur la rive européenne, comparez notamment Şişli, Beşiktaş et Kağıthane pour les trajets, écoles et services. Sur la rive asiatique, Kadıköy et Üsküdar peuvent offrir un autre équilibre. Ces lieux sont des exemples de recherche, pas une liste de secteurs ouverts aux étrangers. Testez le trajet réel aux heures de pointe et à partir du bâtiment exact."
        },
        {
          "id": "visa-detail-2",
          "title": "Restrictions sur les quartiers : ce qui est vérifié",
          "body": "La direction provinciale a publié le 1er juillet 2022 une annonce de fermeture de quartiers dans le cadre d’une mesure nationale portant sur 1 169 quartiers. Ce nombre historique n’est pas un décompte actuel d’Istanbul. Les annonces, exemptions et conditions varient ; aucune liste exhaustive actualisée au 17 novembre 2026 n’a été confirmée ici. Pour un nouveau dossier, donnez le mahalle, la rue, le numéro du bâtiment et du logement au service compétent avant tout dépôt de garantie.",
          "table": {
            "headers": [
              "Point de contrôle",
              "Action ou règle"
            ],
            "rows": [
              [
                "Adresse précise",
                "Confirmer l’admissibilité avant le dépôt de garantie"
              ],
              [
                "Demande officielle",
                "Avant la fin du séjour légal"
              ],
              [
                "Carte (2026)",
                "964 TL par personne"
              ],
              [
                "Décision",
                "Normalement 90 jours après dossier complet"
              ],
              [
                "Changement d’adresse",
                "20 jours ouvrables"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Location et preuve de résidence",
          "body": "Vérifiez l’identité du bailleur, son titre et le droit d’utiliser le bien à titre de logement. Le bail doit répondre aux exigences du dossier, notamment la formalité notariale applicable. Un logement meublé ou une résidence avec services ne dispense pas de fournir une preuve reconnue. Pour un achat à usage personnel, préparez les documents fonciers et vérifiez les conditions du titre de propriétaire."
        },
        {
          "id": "visa-detail-4",
          "title": "Déposer dans la bonne province",
          "body": "Utilisez e-ikamet pendant le séjour légal, choisissez le motif et l’adresse réellement occupée. Le système indique le lieu du rendez-vous et la liste des pièces. Le délai normal de décision est de 90 jours après remise complète. La carte coûte 964 TL en 2026, hors droit variable et assurance. Le rendez-vous officiel est gratuit."
        },
        {
          "id": "visa-detail-5",
          "title": "Arrivée, famille et changement d’adresse",
          "body": "Inscrivez l’adresse dans le délai prévu après approbation. Un changement d’adresse doit être déclaré dans les 20 jours ouvrables. Lors d’un transfert depuis une autre province, une nouvelle démarche est requise ; si la catégorie reste la même, les droits de séjour ne sont pas facturés de nouveau selon la FAQ officielle. Chaque enfant a son propre dossier. Comparez les écoles, la couverture santé et le temps de trajet avant de signer."
        }
      ],
      "faqs": [
        {
          "question": "Tous les quartiers d’Istanbul sont-ils ouverts ?",
          "answer": "Non, certaines adresses sont soumises à des restrictions. L’adresse exacte et le type de démarche sont déterminants."
        },
        {
          "question": "Dois-je me rendre à un bureau librement choisi ?",
          "answer": "Non, suivez le lieu et la date fixés par e-ikamet."
        },
        {
          "question": "Un bail permet-il d’obtenir automatiquement l’ikamet ?",
          "answer": "Non, le motif et l’ensemble des conditions doivent être remplis."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Catégories de résidence"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles : demandes, délais et déménagement"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Barème des frais 2026"
        },
        {
          "href": "https://istanbul.goc.gov.tr/-mahalle-kapatma-duyurusu-hk-",
          "label": "Istanbul : annonce historique des quartiers fermés (2022)"
        },
        {
          "href": "https://istanbul.goc.gov.tr/",
          "label": "Direction de la migration d’Istanbul"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157 : aide officielle aux étrangers"
        }
      ]
    },
    "en": {
      "title": "Residence in Istanbul 2026: ikamet, neighbourhoods and address eligibility",
      "metaDescription": "Moving to Istanbul: residence categories, address restrictions, housing, insurance, appointment and family arrangements.",
      "shortAnswer": "Foreigners planning to live in Istanbul beyond their lawful short visit need appropriate residence permission. National ikamet rules apply alongside local address restrictions. An attractive property listing does not establish residence eligibility.",
      "bosphorasHelp": "Bosphoras can coordinate scouting visits, housing searches and meetings with independent professionals. Applications go through the authorities; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choose a district around daily life",
          "body": "Families working on the European side might compare Şişli, Beşiktaş and Kağıthane for commutes, schools and services. Kadıköy and Üsküdar offer different options on the Asian side. These are search areas, not a list of locations open to foreign registration. Test the actual commute from the exact building at busy times."
        },
        {
          "id": "visa-detail-2",
          "title": "Neighbourhood restrictions: what is verified",
          "body": "On 1 July 2022 the provincial authority published a closure notice under a national measure covering 1,169 neighbourhoods. That historical number is not today's Istanbul count. Notices, exceptions and restrictions can change; an exhaustive list current to 17 November 2026 has not been confirmed here. Provide the competent office with the mahalle, street, building and apartment before paying a deposit.",
          "table": {
            "headers": [
              "Checkpoint",
              "Action or rule"
            ],
            "rows": [
              [
                "Exact address",
                "Confirm eligibility before paying a deposit"
              ],
              [
                "Official application",
                "Before the lawful stay ends"
              ],
              [
                "Card (2026)",
                "TRY 964 per person"
              ],
              [
                "Decision",
                "Normally 90 days after complete submission"
              ],
              [
                "Address change",
                "20 working days"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Leasing and accommodation evidence",
          "body": "Verify the landlord, title and residential use. The lease must meet the application requirements, including applicable notarisation. Furnished or serviced homes do not automatically meet the evidence requirements. For a personal-home purchase, prepare title documents and establish owner-residence eligibility."
        },
        {
          "id": "visa-detail-4",
          "title": "Apply in the correct province",
          "body": "Use e-ikamet while your stay is lawful and select your actual purpose and address. The system identifies the appointment and document list. Normal statutory processing is 90 days from complete submission. The 2026 card fee is TRY 964 besides variable duties and insurance. Government appointments are free."
        },
        {
          "id": "visa-detail-5",
          "title": "Arrival, children and address changes",
          "body": "Register the address within the required period following approval. Notify address changes within 20 working days. Moving from another province requires a new procedure; the official FAQ says duties are not collected again if the permit type stays the same. Each child needs a separate file. Assess education, health cover and commuting before committing."
        }
      ],
      "faqs": [
        {
          "question": "Are all Istanbul neighbourhoods open?",
          "answer": "No. The exact address and type of application determine applicable restrictions."
        },
        {
          "question": "Can I choose any migration office?",
          "answer": "Follow the appointment location and date assigned by e-ikamet."
        },
        {
          "question": "Does a lease guarantee ikamet?",
          "answer": "No; all requirements and a qualifying purpose must be met."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official FAQ: applications, deadlines and relocation"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Official 2026 fees"
        },
        {
          "href": "https://istanbul.goc.gov.tr/-mahalle-kapatma-duyurusu-hk-",
          "label": "Istanbul: historical neighbourhood closure notice (2022)"
        },
        {
          "href": "https://istanbul.goc.gov.tr/",
          "label": "Istanbul Migration Directorate"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: official assistance"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ в Стамбуле 2026: районы, адрес и оформление",
      "metaDescription": "Переезд в Стамбул: выбор ВНЖ, ограничения регистрации, аренда, страховка, приём и семейные документы.",
      "shortAnswer": "Иностранцам, планирующим жить в Стамбуле после разрешённой краткой поездки, необходим соответствующий ВНЖ. Общие правила действуют вместе с местными ограничениями регистрации. Объявление о квартире не подтверждает пригодность адреса.",
      "bosphorasHelp": "Bosphoras может организовать ознакомительные поездки, поиск жилья и встречи с независимыми специалистами. Заявления подаются в государственные органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Район с учётом повседневной жизни",
          "body": "Для семьи, работающей на европейской стороне, можно сравнить Шишли, Бешикташ и Кягытхане по транспорту, школам и услугам. Кадыкёй и Ускюдар предлагают другие условия на азиатской стороне. Это варианты поиска, а не перечень открытых для иностранной регистрации районов. Проверьте маршрут от конкретного дома в часы пик."
        },
        {
          "id": "visa-detail-2",
          "title": "Ограничения регистрации: подтверждённые сведения",
          "body": "1 июля 2022 года управление опубликовало сообщение об ограничениях в рамках меры, охватившей 1 169 кварталов по стране. Это историческое число, а не актуальный показатель Стамбула. Правила и исключения меняются; полный список на 17 ноября 2026 года здесь не подтверждён. До внесения залога сообщите компетентному органу квартал, улицу, номер дома и квартиры.",
          "table": {
            "headers": [
              "Проверка",
              "Действие или правило"
            ],
            "rows": [
              [
                "Точный адрес",
                "Подтвердить допустимость до залога"
              ],
              [
                "Официальное заявление",
                "До окончания законного пребывания"
              ],
              [
                "Карта (2026)",
                "964 лиры на человека"
              ],
              [
                "Решение",
                "Обычно 90 дней после полной подачи"
              ],
              [
                "Смена адреса",
                "20 рабочих дней"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Аренда и подтверждение жилья",
          "body": "Проверьте арендодателя, право собственности и жилое назначение. Договор должен соответствовать требованиям заявления, включая необходимое нотариальное оформление. Меблированная квартира или апарт-отель не освобождают от подтверждения жилья. Для собственного жилья подготовьте документы на собственность и проверьте основание ВНЖ."
        },
        {
          "id": "visa-detail-4",
          "title": "Подача в нужной провинции",
          "body": "Подавайте через e-ikamet в законный срок с реальной целью и адресом. Система определит место приёма и перечень документов. Обычный срок решения — 90 дней с полной подачи. Карта в 2026 году стоит 964 лиры без переменного сбора и страховки. Официальная запись бесплатна."
        },
        {
          "id": "visa-detail-5",
          "title": "Адрес, дети и переезд",
          "body": "Зарегистрируйте адрес в установленный срок после одобрения. Изменение адреса сообщается в течение 20 рабочих дней. Переезд из другой провинции требует новой процедуры; по официальному разъяснению, при сохранении типа ВНЖ сбор повторно не взимается. Каждому ребёнку нужен отдельный комплект. До договора оцените школы, страховку и транспорт."
        }
      ],
      "faqs": [
        {
          "question": "Все кварталы Стамбула открыты?",
          "answer": "Нет, имеют значение точный адрес и вид заявления."
        },
        {
          "question": "Можно выбрать любой офис?",
          "answer": "Следуйте месту и дате, назначенным e-ikamet."
        },
        {
          "question": "Аренда гарантирует ВНЖ?",
          "answer": "Нет, требуется соответствие всем условиям."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Категории ВНЖ"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные ответы: заявления, сроки и переезд"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Официальные сборы 2026"
        },
        {
          "href": "https://istanbul.goc.gov.tr/-mahalle-kapatma-duyurusu-hk-",
          "label": "Стамбул: объявление об ограничениях 2022 года"
        },
        {
          "href": "https://istanbul.goc.gov.tr/",
          "label": "Управление миграции Стамбула"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: официальная справочная служба"
        }
      ]
    },
    "ar": {
      "title": "الإقامة في إسطنبول 2026: الأحياء والعنوان وإجراءات الإيكامت",
      "metaDescription": "خطط للإقامة في إسطنبول: أنواع التصاريح وقيود تسجيل العنوان والسكن والتأمين والموعد والأسرة.",
      "shortAnswer": "يحتاج الأجنبي الراغب في العيش بإسطنبول بعد الزيارة القانونية إلى إقامة مناسبة. تطبق القواعد الوطنية مع القيود المحلية على تسجيل العناوين. لا يثبت الإعلان العقاري أهلية العنوان.",
      "bosphorasHelp": "تنظم Bosphoras الزيارات الاستطلاعية والبحث عن السكن والمواعيد مع مختصين مستقلين. تقدم الطلبات عبر السلطات المختصة دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "اختيار الحي وفق الحياة اليومية",
          "body": "يمكن للأسرة التي تعمل في الجانب الأوروبي مقارنة شيشلي وبشكتاش وكاغتهانة من حيث النقل والمدارس والخدمات. وتقدم كاديكوي وأوسكودار خيارات مختلفة في الجانب الآسيوي. هذه مناطق للبحث وليست قائمة أحياء مفتوحة لتسجيل الأجانب. اختبر الرحلة من المبنى المحدد في ساعات الذروة."
        },
        {
          "id": "visa-detail-2",
          "title": "قيود الأحياء والمعلومات المؤكدة",
          "body": "نشرت الإدارة في 1 يوليو 2022 إعلاناً ضمن إجراء وطني شمل 1,169 حياً. هذا رقم تاريخي وليس العدد الحالي في إسطنبول. تتغير القيود والاستثناءات ولم تتأكد هنا قائمة شاملة محدثة حتى 17 نوفمبر 2026. قدم للجهة المختصة اسم الحي والشارع ورقم المبنى والشقة قبل دفع التأمين.",
          "table": {
            "headers": [
              "نقطة التحقق",
              "الإجراء أو القاعدة"
            ],
            "rows": [
              [
                "العنوان الدقيق",
                "تحقق من الأهلية قبل دفع التأمين"
              ],
              [
                "الطلب الرسمي",
                "قبل انتهاء البقاء القانوني"
              ],
              [
                "البطاقة (2026)",
                "964 ليرة لكل فرد"
              ],
              [
                "القرار",
                "عادة 90 يوماً بعد اكتمال الملف"
              ],
              [
                "تغيير العنوان",
                "20 يوم عمل"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "الإيجار وإثبات السكن",
          "body": "تحقق من المؤجر وسند الملكية والاستعمال السكني. يجب أن يطابق العقد متطلبات الطلب بما فيها التوثيق اللازم. لا يعفي السكن المفروش أو المخدوم من إثبات السكن المقبول. ولشراء السكن الشخصي جهز مستندات الملكية وتحقق من شروط إقامة المالك."
        },
        {
          "id": "visa-detail-4",
          "title": "التقديم في الولاية الصحيحة",
          "body": "استخدم e-ikamet أثناء البقاء القانوني واختر الغرض والعنوان الفعلي. تحدد المنصة الموعد والمستندات. المدة العادية للبت 90 يوماً من اكتمال الملف. رسم البطاقة لعام 2026 هو 964 ليرة دون الرسم المتغير والتأمين. الموعد الرسمي مجاني."
        },
        {
          "id": "visa-detail-5",
          "title": "الوصول والأطفال وتغيير العنوان",
          "body": "سجل العنوان في المهلة بعد الموافقة وأبلغ عن تغييره خلال 20 يوم عمل. يتطلب الانتقال من ولاية أخرى إجراء جديداً؛ وتوضح الأسئلة الرسمية عدم تكرار رسم التصريح إذا بقي النوع نفسه. لكل طفل ملف مستقل. قارن المدارس والتأمين والتنقل قبل التوقيع."
        }
      ],
      "faqs": [
        {
          "question": "هل جميع أحياء إسطنبول مفتوحة؟",
          "answer": "لا، يعتمد الأمر على العنوان الدقيق ونوع الطلب."
        },
        {
          "question": "هل أختار أي مكتب؟",
          "answer": "اتبع الموعد والمكان المحددين عبر e-ikamet."
        },
        {
          "question": "هل يضمن الإيجار الإيكامت؟",
          "answer": "لا، يجب استيفاء الغرض والشروط الأخرى."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية: الطلبات والمواعيد والانتقال"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "الرسوم الرسمية لعام 2026"
        },
        {
          "href": "https://istanbul.goc.gov.tr/-mahalle-kapatma-duyurusu-hk-",
          "label": "إسطنبول: إعلان إغلاق الأحياء لعام 2022"
        },
        {
          "href": "https://istanbul.goc.gov.tr/",
          "label": "إدارة الهجرة في إسطنبول"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: المساعدة الرسمية للأجانب"
        }
      ]
    }
  },
  "residence-bodrum-foreigners": {
    "fr": {
      "title": "Résidence à Bodrum 2026 : ikamet, achat immobilier et vie à l’année",
      "metaDescription": "S’installer à Bodrum dans la province de Muğla : résidence, logement, achat, assurance, restrictions d’adresse et démarches.",
      "shortAnswer": "Bodrum relève de la province de Muğla pour les démarches de résidence. Qu’il s’agisse d’un projet familial, d’une résidence personnelle ou de retraite, le séjour de longue durée doit reposer sur un motif admissible. Une villa de vacances ne garantit pas un ikamet.",
      "bosphorasHelp": "Bosphoras peut organiser une visite de repérage, la recherche de logement et des rendez-vous avec des professionnels indépendants. Vous déposez votre demande via les autorités, sans promesse d’acceptation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choisir une implantation adaptée à l’année",
          "body": "Le centre de Bodrum peut faciliter les courses et les services ; Yalıkavak, Turgutreis ou Gümüşlük répondent à d’autres préférences de vie sur la péninsule. Comparez la desserte routière, l’accès aux soins, les écoles et l’activité réelle en hiver. Une adresse à proximité d’une marina ou d’une plage n’est pas nécessairement inscrivable pour une nouvelle demande. Ces secteurs ne constituent pas une liste d’admissibilité."
        },
        {
          "id": "visa-detail-2",
          "title": "Location longue durée et contrôle des adresses",
          "body": "Les restrictions nationales d’enregistrement ont aussi fait l’objet d’annonces dans Muğla. Une liste ancienne ne suffit pas à établir la situation actuelle d’une rue. Présentez les références exactes de l’habitation à la direction compétente ou contactez YİMER 157. Vérifiez aussi si le bail couvre douze mois ou uniquement la basse saison, qui supporte les charges, et si le propriétaire peut fournir les documents requis.",
          "table": {
            "headers": [
              "Point de contrôle",
              "Action ou règle"
            ],
            "rows": [
              [
                "Adresse précise",
                "Confirmer l’admissibilité avant le dépôt de garantie"
              ],
              [
                "Demande officielle",
                "Avant la fin du séjour légal"
              ],
              [
                "Carte (2026)",
                "964 TL par personne"
              ],
              [
                "Décision",
                "Normalement 90 jours après dossier complet"
              ],
              [
                "Changement d’adresse",
                "20 jours ouvrables"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Achat immobilier et fiscalité des coûts",
          "body": "Pour le titre de propriétaire occupant, le dossier doit prouver l’usage de logement personnel ainsi que les critères de valeur et d’acquisition applicables. Le seuil de 400 000 USD de l’investissement immobilier qualifié relève d’un autre dispositif. Calculez le coût complet de l’achat : frais d’acte, assurance, charges de copropriété et entretien. Un revenu locatif attendu ne suffit pas à justifier une résidence de propriétaire occupant."
        },
        {
          "id": "visa-detail-4",
          "title": "Démarches auprès de Muğla",
          "body": "Déposez sur e-ikamet avec l’adresse de Bodrum et le motif réel, avant l’expiration du droit de séjour. Le système fixe l’unité compétente et la date du rendez-vous : ne supposez pas qu’il se tiendra nécessairement dans le centre de Bodrum. Le dossier complet est normalement traité sous 90 jours. En 2026, la carte coûte 964 TL, avant les autres dépenses."
        },
        {
          "id": "visa-detail-5",
          "title": "Retraite, familles et mobilité saisonnière",
          "body": "Préparez une preuve de pension si vous êtes retraité, les documents scolaires si vous venez avec des enfants, et une assurance adaptée à votre situation. Testez le logement hors saison et prévoyez les transports vers l’aéroport de Milas-Bodrum. En cas de départ pour une autre province, la déclaration et la procédure de changement doivent être engagées dans le délai réglementaire. Pour une résidence à long terme, conservez vos historiques de voyages et de titres."
        }
      ],
      "faqs": [
        {
          "question": "Bodrum dispose-t-elle d’un visa spécial ?",
          "answer": "Non, les catégories nationales s’appliquent dans la province de Muğla."
        },
        {
          "question": "Puis-je utiliser une location saisonnière ?",
          "answer": "Seulement si les preuves de logement et les conditions du motif sont acceptées."
        },
        {
          "question": "Où obtenir la date du rendez-vous ?",
          "answer": "Sur e-ikamet, après avoir renseigné votre dossier."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Catégories de résidence"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles : demandes, délais et déménagement"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Barème des frais 2026"
        },
        {
          "href": "https://mugla.goc.gov.tr/",
          "label": "Direction de la migration de Muğla"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157 : aide officielle aux étrangers"
        }
      ]
    },
    "en": {
      "title": "Residence in Bodrum 2026: ikamet, property and year-round living",
      "metaDescription": "Moving to Bodrum, Muğla: residence eligibility, property, address checks, seasonal housing, insurance and applications.",
      "shortAnswer": "Residence applications for Bodrum fall within Muğla province. Family relocation, personal-home ownership or retirement requires a qualifying residence basis. Owning or booking a holiday villa does not guarantee a permit.",
      "bosphorasHelp": "Bosphoras can coordinate scouting visits, housing searches and meetings with independent professionals. Applications go through the authorities; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Choose a year-round base",
          "body": "Central Bodrum may simplify shopping and services; Yalıkavak, Turgutreis and Gümüşlük suit different peninsula lifestyles. Compare road access, medical care, schooling and winter services. A marina or beachfront address may not qualify for new foreign registration. These are search areas, not an eligibility list."
        },
        {
          "id": "visa-detail-2",
          "title": "Long leases and address checks",
          "body": "Muğla has published announcements under national neighbourhood restrictions. Historical notices cannot establish today's status of a specific address. Give the competent authority the exact property identifiers or contact YİMER 157. Check whether the contract covers twelve months or only the low season, who pays charges and whether the owner can provide required records.",
          "table": {
            "headers": [
              "Checkpoint",
              "Action or rule"
            ],
            "rows": [
              [
                "Exact address",
                "Confirm eligibility before paying a deposit"
              ],
              [
                "Official application",
                "Before the lawful stay ends"
              ],
              [
                "Card (2026)",
                "TRY 964 per person"
              ],
              [
                "Decision",
                "Normally 90 days after complete submission"
              ],
              [
                "Address change",
                "20 working days"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Property and acquisition costs",
          "body": "The owner-occupier route requires proof of genuine residential use and applicable value and acquisition criteria. The USD 400,000 qualifying property investment threshold belongs to a separate route. Budget title-related costs, insurance, service charges and maintenance. Expected rental income alone does not support personal-home residence."
        },
        {
          "id": "visa-detail-4",
          "title": "Applying in Muğla province",
          "body": "Apply through e-ikamet using the actual Bodrum address and purpose before current permission expires. The system assigns a unit and appointment date; do not assume the appointment will be in central Bodrum. Complete applications normally have a 90-day decision period. The 2026 card fee is TRY 964 before other expenses."
        },
        {
          "id": "visa-detail-5",
          "title": "Retirement, families and seasonal travel",
          "body": "Prepare pension evidence for retirees, education records for children and appropriate health cover. Test the home outside peak season and plan journeys to Milas-Bodrum Airport. Moving to another province requires notification and the relevant application within the official period. Retain travel and permit records for any future long-term residence application."
        }
      ],
      "faqs": [
        {
          "question": "Does Bodrum have a special visa?",
          "answer": "No, national categories apply in Muğla province."
        },
        {
          "question": "Can I use seasonal accommodation?",
          "answer": "Only if accommodation evidence and the chosen residence purpose are accepted."
        },
        {
          "question": "Where do I obtain my appointment?",
          "answer": "On e-ikamet after submitting the application details."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official FAQ: applications, deadlines and relocation"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Official 2026 fees"
        },
        {
          "href": "https://mugla.goc.gov.tr/",
          "label": "Muğla Migration Directorate"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: official assistance"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ в Бодруме 2026: недвижимость, икамет и жизнь круглый год",
      "metaDescription": "Переезд в Бодрум, провинция Мугла: основания ВНЖ, жильё, ограничения адресов, страхование и оформление.",
      "shortAnswer": "Бодрум относится к провинции Мугла. Для семейного переезда, проживания в собственном жилье или на пенсии требуется подходящее законное основание. Курортная вилла не гарантирует ВНЖ.",
      "bosphorasHelp": "Bosphoras может организовать ознакомительные поездки, поиск жилья и встречи с независимыми специалистами. Заявления подаются в государственные органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Район для круглогодичной жизни",
          "body": "В центре Бодрума проще доступны магазины и услуги; Ялыкавак, Тургутрейс и Гюмюшлюк предлагают иной уклад на полуострове. Сравните дороги, медицину, школы и работу услуг зимой. Адрес у марины или пляжа не обязательно подходит для новой регистрации. Это варианты поиска, а не перечень допустимых адресов."
        },
        {
          "id": "visa-detail-2",
          "title": "Длительная аренда и проверка адреса",
          "body": "В Мугле публиковались объявления о национальных ограничениях по кварталам. Старый список не подтверждает нынешний статус конкретного адреса. Сообщите компетентному органу точные данные жилья либо обратитесь в YİMER 157. Проверьте, действует ли договор круглый год или только зимой, кто оплачивает содержание и какие документы предоставит собственник.",
          "table": {
            "headers": [
              "Проверка",
              "Действие или правило"
            ],
            "rows": [
              [
                "Точный адрес",
                "Подтвердить допустимость до залога"
              ],
              [
                "Официальное заявление",
                "До окончания законного пребывания"
              ],
              [
                "Карта (2026)",
                "964 лиры на человека"
              ],
              [
                "Решение",
                "Обычно 90 дней после полной подачи"
              ],
              [
                "Смена адреса",
                "20 рабочих дней"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Покупка и расходы",
          "body": "Для ВНЖ собственника необходимо подтвердить личное проживание, стоимость и условия приобретения. Порог 400 000 долларов для квалифицированной инвестиции относится к отдельному режиму. Учитывайте оформление сделки, страховку, содержание и ремонт. Ожидаемая арендная прибыль не обосновывает ВНЖ для личного проживания."
        },
        {
          "id": "visa-detail-4",
          "title": "Подача в провинции Мугла",
          "body": "Подайте через e-ikamet с фактическим адресом в Бодруме и целью до окончания законного срока. Система назначит подразделение и дату: не следует предполагать, что приём будет в центре Бодрума. Срок после полной подачи обычно составляет 90 дней. В 2026 году карта стоит 964 лиры без иных расходов."
        },
        {
          "id": "visa-detail-5",
          "title": "Пенсия, семья и сезонные поездки",
          "body": "Подготовьте документы о пенсии, школьные документы детей и подходящую страховку. Проверьте жильё вне сезона и транспорт до аэропорта Милас-Бодрум. При переезде в другую провинцию соблюдайте сроки уведомления и соответствующей процедуры. Для возможного долгосрочного ВНЖ сохраняйте историю поездок и разрешений."
        }
      ],
      "faqs": [
        {
          "question": "Есть ли специальная виза Бодрума?",
          "answer": "Нет, в Мугле действуют общенациональные категории."
        },
        {
          "question": "Подходит сезонная аренда?",
          "answer": "Если принимаются документы на жильё и основание ВНЖ."
        },
        {
          "question": "Где узнать дату приёма?",
          "answer": "В e-ikamet после заполнения заявления."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Категории ВНЖ"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные ответы: заявления, сроки и переезд"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Официальные сборы 2026"
        },
        {
          "href": "https://mugla.goc.gov.tr/",
          "label": "Управление миграции Муглы"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: официальная справочная служба"
        }
      ]
    },
    "ar": {
      "title": "الإقامة في بودروم 2026: الإيكامت والعقار والعيش طوال العام",
      "metaDescription": "الانتقال إلى بودروم بولاية موغلا: شروط الإقامة والسكن وقيود العنوان والتأمين والإجراءات.",
      "shortAnswer": "تتبع بودروم ولاية موغلا في إجراءات الإقامة. يحتاج انتقال الأسرة أو التقاعد أو السكن في عقار مملوك إلى أساس قانوني مناسب. لا تضمن فيلا العطلات تصريح الإقامة.",
      "bosphorasHelp": "تنظم Bosphoras الزيارات الاستطلاعية والبحث عن السكن والمواعيد مع مختصين مستقلين. تقدم الطلبات عبر السلطات المختصة دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "اختيار منطقة للعيش طوال العام",
          "body": "قد يسهل مركز بودروم الوصول للمتاجر والخدمات، بينما تقدم ياليكافاك وتورغوت ريس وغوموشلوك أنماط حياة مختلفة. قارن الطرق والرعاية الصحية والمدارس والخدمات الشتوية. لا يعني قرب المرسى أو الشاطئ أن العنوان مؤهل للتسجيل. هذه خيارات للبحث وليست قائمة عناوين مقبولة."
        },
        {
          "id": "visa-detail-2",
          "title": "الإيجار الطويل والتحقق من العنوان",
          "body": "نشرت موغلا إعلانات ضمن القيود الوطنية على الأحياء. لا تؤكد القوائم القديمة الوضع الحالي لعنوان معين. قدم بيانات العقار الدقيقة للجهة المختصة أو اتصل بـYİMER 157. تحقق من تغطية العقد للسنة كاملة أو لموسم الشتاء فقط ومن يتحمل الرسوم وما يستطيع المالك تقديمه من وثائق.",
          "table": {
            "headers": [
              "نقطة التحقق",
              "الإجراء أو القاعدة"
            ],
            "rows": [
              [
                "العنوان الدقيق",
                "تحقق من الأهلية قبل دفع التأمين"
              ],
              [
                "الطلب الرسمي",
                "قبل انتهاء البقاء القانوني"
              ],
              [
                "البطاقة (2026)",
                "964 ليرة لكل فرد"
              ],
              [
                "القرار",
                "عادة 90 يوماً بعد اكتمال الملف"
              ],
              [
                "تغيير العنوان",
                "20 يوم عمل"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "الشراء وتكاليف العقار",
          "body": "يتطلب مسار المالك إثبات السكن الشخصي والقيمة وشروط الشراء المطبقة. ويخص حد 400 ألف دولار للاستثمار العقاري المؤهل مساراً منفصلاً. احسب تكاليف التسجيل والتأمين والخدمات والصيانة. لا يكفي عائد الإيجار المتوقع لتبرير إقامة المالك الساكن."
        },
        {
          "id": "visa-detail-4",
          "title": "التقديم لدى ولاية موغلا",
          "body": "قدم عبر e-ikamet بالعنوان الفعلي في بودروم والغرض قبل انتهاء البقاء القانوني. تحدد المنصة الوحدة والموعد؛ لا تفترض أن المقابلة ستتم وسط بودروم. المدة العادية 90 يوماً من اكتمال الملف. رسم البطاقة لعام 2026 هو 964 ليرة دون المصاريف الأخرى."
        },
        {
          "id": "visa-detail-5",
          "title": "التقاعد والأسرة والتنقل الموسمي",
          "body": "جهز إثبات المعاش ووثائق تعليم الأطفال والتأمين المناسب. اختبر السكن خارج الموسم وخطط للوصول إلى مطار ميلاس بودروم. عند الانتقال لولاية أخرى التزم بمهلة الإبلاغ والإجراء المطلوب. احتفظ بسجل السفر والتصاريح للإقامة الطويلة مستقبلاً."
        }
      ],
      "faqs": [
        {
          "question": "هل توجد تأشيرة خاصة ببودروم؟",
          "answer": "لا، تطبق الأنواع الوطنية في موغلا."
        },
        {
          "question": "هل يصلح الإيجار الموسمي؟",
          "answer": "إذا قُبل إثبات السكن والغرض المختار."
        },
        {
          "question": "أين أعرف الموعد؟",
          "answer": "عبر e-ikamet بعد استكمال بيانات الطلب."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية: الطلبات والمواعيد والانتقال"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "الرسوم الرسمية لعام 2026"
        },
        {
          "href": "https://mugla.goc.gov.tr/",
          "label": "إدارة الهجرة في موغلا"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: المساعدة الرسمية للأجانب"
        }
      ]
    }
  },
  "residence-antalya-foreigners": {
    "fr": {
      "title": "Résidence à Antalya 2026 : ikamet, quartiers, famille et retraite",
      "metaDescription": "Vivre à Antalya en 2026 : types d’ikamet, restrictions d’adresse, logement, santé, retraite et coordonnées de la migration.",
      "shortAnswer": "Antalya associe vie urbaine et littoral, mais les étrangers doivent respecter les mêmes conditions d’occupation légale que dans les autres provinces. Le titre est attribué selon un motif admissible, pas selon la popularité d’une destination.",
      "bosphorasHelp": "Bosphoras peut organiser une visite de repérage, la recherche de logement et des rendez-vous avec des professionnels indépendants. Vous déposez votre demande via les autorités, sans promesse d’acceptation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Comparer les secteurs de vie",
          "body": "Muratpaşa et le secteur de Lara peuvent intéresser les personnes qui recherchent les services urbains ; Konyaaltı combine des espaces résidentiels et le littoral ; Döşemealtı offre un environnement plus éloigné du centre. Ces exemples ne confirment pas l’ouverture administrative des adresses. Comparez école, soins, trajet et charges au niveau du bâtiment, et non seulement du district."
        },
        {
          "id": "visa-detail-2",
          "title": "Restrictions d’adresse avant de signer",
          "body": "Antalya a publié le 16 mai 2022 une annonce de fermeture dans le cadre des restrictions nationales. Une annonce de 2022 ne garantit pas le statut d’un logement en 2026, et les listes peuvent évoluer. Demandez la confirmation pour le mahalle, le bâtiment et le logement précis, avec votre nationalité et le type de demande. L’inscription de l’ancien locataire ne garantit pas votre admissibilité.",
          "table": {
            "headers": [
              "Point de contrôle",
              "Action ou règle"
            ],
            "rows": [
              [
                "Adresse précise",
                "Confirmer l’admissibilité avant le dépôt de garantie"
              ],
              [
                "Demande officielle",
                "Avant la fin du séjour légal"
              ],
              [
                "Carte (2026)",
                "964 TL par personne"
              ],
              [
                "Décision",
                "Normalement 90 jours après dossier complet"
              ],
              [
                "Changement d’adresse",
                "20 jours ouvrables"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Choisir le titre et préparer le budget",
          "body": "Pour une résidence personnelle, examinez le motif de propriétaire si vous possédez un logement admissible, ou un autre fondement réel. La retraite n’est pas une catégorie autonome ; la pension peut prouver les ressources. Les dossiers familiaux demandent les documents du sponsor et des membres. La carte coûte 964 TL par personne en 2026 ; ajoutez droits de séjour éventuels, assurance et justificatifs."
        },
        {
          "id": "visa-detail-4",
          "title": "Déposer et trouver le service compétent",
          "body": "Le rendez-vous est attribué via e-ikamet. La direction provinciale publie son adresse : Bayındır Mahallesi, Gazi Bulvarı No:2, 07030 Muratpaşa/Antalya ; téléphone +90 242 237 95 51 ou 52, courriel antalya@goc.gov.tr. Ce contact général ne remplace pas le lieu indiqué sur votre convocation. Le délai normal est de 90 jours après dossier complet."
        },
        {
          "id": "visa-detail-5",
          "title": "Préparer une installation familiale ou à la retraite",
          "body": "Vérifiez les soins nécessaires, les assurances couvrant réellement votre situation, l’accès aux pharmacies et la langue d’enseignement. Testez le logement en saison chaude et en hiver. Les dépenses incluent charges de résidence, climatisation, transport et frais scolaires éventuels. Déclarez les changements d’adresse dans les 20 jours ouvrables et préparez le renouvellement dans les 60 derniers jours de validité."
        }
      ],
      "faqs": [
        {
          "question": "Konyaaltı est-il entièrement ouvert à l’enregistrement ?",
          "answer": "Une affirmation à l’échelle du district ne suffit pas. Il faut vérifier l’adresse exacte et votre démarche."
        },
        {
          "question": "Existe-t-il un ikamet automatique pour retraités ?",
          "answer": "Non, il faut un motif de résidence admissible."
        },
        {
          "question": "Comment contacter la migration ?",
          "answer": "Via antalya@goc.gov.tr ou YİMER 157 ; respectez votre convocation."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Catégories de résidence"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles : demandes, délais et déménagement"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Barème des frais 2026"
        },
        {
          "href": "https://antalya.goc.gov.tr/iletisim",
          "label": "Coordonnées officielles à Antalya"
        },
        {
          "href": "https://antalya.goc.gov.tr/mahalle-kapatma-duyurusu-hk",
          "label": "Antalya : annonce historique des restrictions (2022)"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157 : aide officielle aux étrangers"
        }
      ]
    },
    "en": {
      "title": "Residence in Antalya 2026: ikamet, neighbourhoods and retirement",
      "metaDescription": "Living in Antalya: residence categories, address restrictions, housing, family, healthcare and migration office contact details.",
      "shortAnswer": "Antalya combines urban life and the Mediterranean coast, but foreign residents must meet the same legal conditions as elsewhere. Residence is based on a qualifying purpose rather than a destination's popularity.",
      "bosphorasHelp": "Bosphoras can coordinate scouting visits, housing searches and meetings with independent professionals. Applications go through the authorities; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Compare areas for everyday living",
          "body": "Muratpaşa and Lara may appeal to those prioritising urban services; Konyaaltı combines residential areas and coastal access; Döşemealtı is farther from the centre. These examples do not confirm administrative eligibility. Compare schools, care, commutes and charges for the actual building rather than the district alone."
        },
        {
          "id": "visa-detail-2",
          "title": "Address restrictions before committing",
          "body": "Antalya published a closure notice on 16 May 2022 under national restrictions. A 2022 notice cannot establish an address's current status in 2026. Request confirmation for the specific neighbourhood, building and apartment with your nationality and application type. A previous tenant's registration does not guarantee yours.",
          "table": {
            "headers": [
              "Checkpoint",
              "Action or rule"
            ],
            "rows": [
              [
                "Exact address",
                "Confirm eligibility before paying a deposit"
              ],
              [
                "Official application",
                "Before the lawful stay ends"
              ],
              [
                "Card (2026)",
                "TRY 964 per person"
              ],
              [
                "Decision",
                "Normally 90 days after complete submission"
              ],
              [
                "Address change",
                "20 working days"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Choose a category and plan costs",
          "body": "Owners of qualifying homes may assess personal-home residence; others need a genuine alternative basis. Retirement is not a dedicated category, although pension evidence can establish means. Family applications require sponsor and individual documentation. The 2026 card is TRY 964 per person, plus relevant duties, insurance and documentation expenses."
        },
        {
          "id": "visa-detail-4",
          "title": "Application and official contacts",
          "body": "e-ikamet assigns the appointment. The provincial directorate lists Bayındır Mahallesi, Gazi Bulvarı No:2, 07030 Muratpaşa/Antalya; telephone +90 242 237 95 51 or 52 and email antalya@goc.gov.tr. This general contact does not replace the appointment location. The usual decision period is 90 days following complete submission."
        },
        {
          "id": "visa-detail-5",
          "title": "Relocation for families and retirees",
          "body": "Assess medical needs, appropriate insurance, pharmacies and school languages. Test housing in hot weather and winter. Budget service charges, cooling, transport and school expenses. Notify address changes within 20 working days and prepare renewal in the final 60 days before expiry."
        }
      ],
      "faqs": [
        {
          "question": "Is all of Konyaaltı open to registration?",
          "answer": "District-wide assumptions are insufficient. Check the precise address and application type."
        },
        {
          "question": "Is retirement residence automatic?",
          "answer": "No, a qualifying purpose is necessary."
        },
        {
          "question": "How can I contact migration?",
          "answer": "Use antalya@goc.gov.tr or YİMER 157, and follow your assigned appointment."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Residence permit categories"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official FAQ: applications, deadlines and relocation"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Official 2026 fees"
        },
        {
          "href": "https://antalya.goc.gov.tr/iletisim",
          "label": "Official Antalya contact details"
        },
        {
          "href": "https://antalya.goc.gov.tr/mahalle-kapatma-duyurusu-hk",
          "label": "Antalya: historical closure notice (2022)"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: official assistance"
        }
      ]
    },
    "ru": {
      "title": "ВНЖ в Анталье 2026: районы, семья, пенсия и икамет",
      "metaDescription": "Жизнь в Анталье: основания ВНЖ, ограничения регистрации, жильё, медицина, пенсия и контакты миграционной службы.",
      "shortAnswer": "Анталья сочетает городской уклад и морское побережье, но для иностранцев действуют общие требования законного проживания. ВНЖ выдаётся по допустимому основанию, а не по популярности курорта.",
      "bosphorasHelp": "Bosphoras может организовать ознакомительные поездки, поиск жилья и встречи с независимыми специалистами. Заявления подаются в государственные органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Районы для повседневной жизни",
          "body": "Муратпаша и Лара интересны доступом к городским услугам; Коньяалты сочетает жилые кварталы и побережье; Дёшемеалты расположен дальше от центра. Эти примеры не подтверждают допустимость регистрации. Оценивайте школы, медицину, маршрут и расходы для конкретного дома."
        },
        {
          "id": "visa-detail-2",
          "title": "Адресные ограничения до сделки",
          "body": "16 мая 2022 года управление Антальи опубликовало объявление в рамках общенациональных ограничений. Старый список не подтверждает статус адреса в 2026 году. Уточните конкретный квартал, дом и квартиру с учётом гражданства и вида заявления. Регистрация прежнего арендатора не гарантирует вашу.",
          "table": {
            "headers": [
              "Проверка",
              "Действие или правило"
            ],
            "rows": [
              [
                "Точный адрес",
                "Подтвердить допустимость до залога"
              ],
              [
                "Официальное заявление",
                "До окончания законного пребывания"
              ],
              [
                "Карта (2026)",
                "964 лиры на человека"
              ],
              [
                "Решение",
                "Обычно 90 дней после полной подачи"
              ],
              [
                "Смена адреса",
                "20 рабочих дней"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "Категория ВНЖ и расходы",
          "body": "Собственник подходящего жилья может рассмотреть основание личного проживания; другим нужен действительный альтернативный мотив. Отдельного пенсионного ВНЖ нет, но пенсия подтверждает средства. Семейные заявления требуют документов спонсора и каждого лица. Карта в 2026 году стоит 964 лиры на человека без иных сборов, страховки и расходов."
        },
        {
          "id": "visa-detail-4",
          "title": "Подача и официальные контакты",
          "body": "Приём назначается через e-ikamet. Управление указывает адрес Bayındır Mahallesi, Gazi Bulvarı No:2, 07030 Muratpaşa/Antalya, телефоны +90 242 237 95 51 или 52 и электронную почту antalya@goc.gov.tr. Общий адрес не заменяет место, указанное в записи. Срок решения после полной подачи обычно составляет 90 дней."
        },
        {
          "id": "visa-detail-5",
          "title": "Подготовка семьи или пенсионера",
          "body": "Оцените медицинские потребности, страховое покрытие, доступ к аптекам и язык обучения. Проверьте жильё летом и зимой. Учитывайте обслуживание комплекса, охлаждение, транспорт и школу. Об изменении адреса сообщайте в течение 20 рабочих дней, продлевайте ВНЖ в последние 60 дней до окончания."
        }
      ],
      "faqs": [
        {
          "question": "Весь Коньяалты открыт для регистрации?",
          "answer": "Нужно проверять точный адрес и вид заявления."
        },
        {
          "question": "Есть автоматический пенсионный икамет?",
          "answer": "Нет, требуется подходящее основание."
        },
        {
          "question": "Как связаться с управлением?",
          "answer": "Почта antalya@goc.gov.tr или YİMER 157; следуйте назначенному приёму."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "Категории ВНЖ"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные ответы: заявления, сроки и переезд"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Официальные сборы 2026"
        },
        {
          "href": "https://antalya.goc.gov.tr/iletisim",
          "label": "Контакты миграционной службы Антальи"
        },
        {
          "href": "https://antalya.goc.gov.tr/mahalle-kapatma-duyurusu-hk",
          "label": "Анталья: объявление об ограничениях 2022 года"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: официальная справочная служба"
        }
      ]
    },
    "ar": {
      "title": "الإقامة في أنطاليا 2026: الإيكامت والأحياء والأسرة والتقاعد",
      "metaDescription": "العيش في أنطاليا: أنواع الإقامة وقيود العنوان والسكن والصحة والتقاعد وبيانات إدارة الهجرة.",
      "shortAnswer": "تجمع أنطاليا الحياة الحضرية وساحل المتوسط، لكن تخضع إقامة الأجانب للشروط الوطنية نفسها. يمنح التصريح بحسب أساس قانوني لا بحسب شهرة الوجهة.",
      "bosphorasHelp": "تنظم Bosphoras الزيارات الاستطلاعية والبحث عن السكن والمواعيد مع مختصين مستقلين. تقدم الطلبات عبر السلطات المختصة دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "مقارنة مناطق الحياة اليومية",
          "body": "قد تلائم مراد باشا ولارا من يفضل الخدمات الحضرية، وتجمع كونيالتي بين السكن والساحل، وتقع دوشمه ألتي بعيداً عن المركز. لا تؤكد هذه الأمثلة أهلية التسجيل. قارن المدارس والرعاية والتنقل والرسوم للمبنى نفسه."
        },
        {
          "id": "visa-detail-2",
          "title": "قيود العنوان قبل الالتزام",
          "body": "نشرت إدارة أنطاليا في 16 مايو 2022 إعلاناً ضمن القيود الوطنية. لا يؤكد الإعلان القديم وضع عنوان معين في 2026. اطلب التأكد من الحي والمبنى والشقة المحددة بحسب جنسيتك ونوع طلبك. لا يضمن تسجيل مستأجر سابق تسجيلك.",
          "table": {
            "headers": [
              "نقطة التحقق",
              "الإجراء أو القاعدة"
            ],
            "rows": [
              [
                "العنوان الدقيق",
                "تحقق من الأهلية قبل دفع التأمين"
              ],
              [
                "الطلب الرسمي",
                "قبل انتهاء البقاء القانوني"
              ],
              [
                "البطاقة (2026)",
                "964 ليرة لكل فرد"
              ],
              [
                "القرار",
                "عادة 90 يوماً بعد اكتمال الملف"
              ],
              [
                "تغيير العنوان",
                "20 يوم عمل"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-3",
          "title": "اختيار نوع الإقامة وتكاليفها",
          "body": "يمكن لمالك المسكن المؤهل دراسة مسار السكن الشخصي، فيما يحتاج الآخرون إلى أساس حقيقي آخر. لا توجد إقامة عامة مستقلة للتقاعد لكن المعاش قد يثبت الموارد. تتطلب الأسرة مستندات الكفيل والأفراد. رسم بطاقة 2026 هو 964 ليرة لكل فرد إضافة للرسوم الأخرى والتأمين والوثائق."
        },
        {
          "id": "visa-detail-4",
          "title": "التقديم وبيانات الاتصال الرسمية",
          "body": "تحدد منصة e-ikamet الموعد. تنشر الإدارة عنوان Bayındır Mahallesi, Gazi Bulvarı No:2, 07030 Muratpaşa/Antalya والهاتف +90 242 237 95 51 أو 52 والبريد antalya@goc.gov.tr. لا يحل العنوان العام محل مكان الموعد المحدد. المدة المعتادة للبت 90 يوماً من اكتمال الملف."
        },
        {
          "id": "visa-detail-5",
          "title": "الاستعداد للأسرة أو التقاعد",
          "body": "قيّم الاحتياجات الطبية والتغطية المناسبة والصيدليات ولغة التعليم. اختبر المسكن صيفاً وشتاء. احسب رسوم المجمع والتبريد والنقل والتعليم. أبلغ عن تغيير العنوان خلال 20 يوم عمل وجهز التجديد في آخر 60 يوماً قبل الانتهاء."
        }
      ],
      "faqs": [
        {
          "question": "هل كل كونيالتي مفتوحة للتسجيل؟",
          "answer": "يلزم التحقق من العنوان المحدد ونوع الطلب."
        },
        {
          "question": "هل إقامة التقاعد تلقائية؟",
          "answer": "لا، يلزم أساس مؤهل."
        },
        {
          "question": "كيف أتواصل مع الإدارة؟",
          "answer": "عبر antalya@goc.gov.tr أو YİMER 157 مع الالتزام بالموعد المحدد."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-permit-types",
          "label": "أنواع الإقامة"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية: الطلبات والمواعيد والانتقال"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "الرسوم الرسمية لعام 2026"
        },
        {
          "href": "https://antalya.goc.gov.tr/iletisim",
          "label": "بيانات الاتصال الرسمية في أنطاليا"
        },
        {
          "href": "https://antalya.goc.gov.tr/mahalle-kapatma-duyurusu-hk",
          "label": "أنطاليا: إعلان القيود لعام 2022"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: المساعدة الرسمية للأجانب"
        }
      ]
    }
  },
  "ikamet-istanbul": {
    "fr": {
      "title": "Ikamet Istanbul 2026 : rendez-vous, documents, prix et délais",
      "metaDescription": "Guide pratique pour demander ou renouveler un ikamet à Istanbul : e-ikamet, UETS, tarif 964 TL, rendez-vous, adresse et suivi.",
      "shortAnswer": "Pour obtenir un ikamet à Istanbul, créez personnellement une demande officielle avant l’expiration de votre séjour. Le formulaire indique les documents et le rendez-vous. Le délai réglementaire de traitement commence après remise du dossier complet, pas à la réservation du rendez-vous.",
      "bosphorasHelp": "Bosphoras peut organiser une visite de repérage, la recherche de logement et des rendez-vous avec des professionnels indépendants. Vous déposez votre demande via les autorités, sans promesse d’acceptation.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Première demande : de la saisie au rendez-vous",
          "body": "Sur e-ikamet sélectionnez la première demande, choisissez le titre correspondant à votre motif et renseignez le passeport et l’adresse. Gardez le numéro de dossier et la confirmation. Respectez la convocation ; une absence injustifiée peut entraîner la perte de la demande. Apportez les originaux et copies demandés, sans vous fier uniquement à une liste générique."
        },
        {
          "id": "visa-detail-2",
          "title": "Vérifier l’adresse et les documents",
          "body": "L’adresse doit être réelle et compatible avec votre type de demande, notamment au regard des restrictions locales. Préparez justificatifs d’hébergement, passeport, photos biométriques selon le formulaire, assurance, ressources et preuves du motif. Chaque membre de famille a un dossier propre. Demandez la confirmation administrative de l’adresse avant de signer un bail non remboursable."
        },
        {
          "id": "visa-detail-3",
          "title": "Frais officiels et reçus",
          "body": "En 2026 la carte coûte 964 TL. Le droit de séjour dépend de la nationalité, de la durée et des exemptions. Le portail calcule le montant. Pour les règlements officiels, les codes publiés sont 9207 pour la carte, 9233 pour le droit de séjour et 9234 pour le droit de visa lorsqu’il est applicable. Payez selon les instructions et gardez les reçus. Le rendez-vous n’est pas facturé.",
          "table": {
            "headers": [
              "Point de contrôle",
              "Action ou règle"
            ],
            "rows": [
              [
                "Demande officielle",
                "Avant la fin du séjour légal"
              ],
              [
                "Carte (2026)",
                "964 TL par personne"
              ],
              [
                "Décision",
                "Normalement 90 jours après dossier complet"
              ],
              [
                "Renouvellement",
                "60 derniers jours avant expiration"
              ],
              [
                "UETS",
                "Requis en renouvellement et transfert"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Renouvellement et notifications UETS",
          "body": "À partir du 15 avril 2024, les renouvellements et transferts de catégorie exigent un justificatif de compte UETS. Demandez-le auprès de PTT avec passeport, numéro d’étranger, téléphone et adresse électronique ; les personnes disposant d’une signature électronique peuvent utiliser la voie en ligne prévue. Les mineurs utilisent l’adresse de notification du parent ou tuteur. Déposez le renouvellement pendant les 60 derniers jours avant expiration."
        },
        {
          "id": "visa-detail-5",
          "title": "Suivi, livraison et aide officielle",
          "body": "Un dossier complet est normalement décidé dans les 90 jours. Surveillez les notifications et gardez disponibles les documents réclamés. En cas d’accord, vérifiez la livraison à l’adresse déclarée et accomplissez l’enregistrement dans le délai applicable. YİMER est joignable au 157 en Turquie et au +90 312 157 11 22 depuis l’étranger. Le service d’information fonctionne en semaine de 8 h à 18 h selon l’annonce d’août 2026, en turc, anglais, russe, arabe et persan."
        }
      ],
      "faqs": [
        {
          "question": "Le rendez-vous est-il payant ?",
          "answer": "Non, la demande et la prise de rendez-vous officiels sont gratuites."
        },
        {
          "question": "Quel est le coût de la carte ?",
          "answer": "964 TL en 2026, hors droits éventuels."
        },
        {
          "question": "Le compte UETS est-il requis pour renouveler ?",
          "answer": "Oui pour les renouvellements et transferts ; les mineurs utilisent le compte du parent ou tuteur."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Portail officiel e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Questions officielles : demandes, délais et déménagement"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Barème des frais 2026"
        },
        {
          "href": "https://istanbul.goc.gov.tr/",
          "label": "Direction de la migration d’Istanbul"
        },
        {
          "href": "https://en.goc.gov.tr/announcement-on-national-electronic-notification-system-for-residence-permit-extension-applications",
          "label": "UETS : notifications électroniques"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157 : aide officielle aux étrangers"
        }
      ]
    },
    "en": {
      "title": "Istanbul ikamet 2026: appointments, documents, fees and timelines",
      "metaDescription": "How to apply for or renew Istanbul ikamet: e-ikamet, UETS registration, TRY 964 card fee, appointment and tracking.",
      "shortAnswer": "Apply personally through the official service before your legal stay expires. The form identifies required documents and the appointment. The statutory processing period begins upon complete submission, not when the appointment is booked.",
      "bosphorasHelp": "Bosphoras can coordinate scouting visits, housing searches and meetings with independent professionals. Applications go through the authorities; approval is not guaranteed.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "First application and appointment",
          "body": "Select first application in e-ikamet, choose the category matching your purpose and enter your passport and address. Retain your application number and confirmation. Attend the assigned appointment; unjustified absence can invalidate the application. Bring the requested originals and copies rather than relying solely on a generic list."
        },
        {
          "id": "visa-detail-2",
          "title": "Check the address and evidence",
          "body": "Your address must be real and eligible for the application type under local restrictions. Prepare housing evidence, passport, biometric photos as specified, insurance, means and purpose-specific records. Each family member has an individual file. Confirm address eligibility before signing a non-refundable lease."
        },
        {
          "id": "visa-detail-3",
          "title": "Official payments and receipts",
          "body": "The 2026 card fee is TRY 964. Residence duty varies by nationality, duration and exemptions and is calculated by the portal. Published payment codes are 9207 for the card, 9233 for residence duty and 9234 for visa duty when applicable. Follow official payment instructions and retain receipts. The appointment itself is free.",
          "table": {
            "headers": [
              "Checkpoint",
              "Action or rule"
            ],
            "rows": [
              [
                "Official application",
                "Before the lawful stay ends"
              ],
              [
                "Card (2026)",
                "TRY 964 per person"
              ],
              [
                "Decision",
                "Normally 90 days after complete submission"
              ],
              [
                "Renewal",
                "Final 60 days before expiry"
              ],
              [
                "UETS",
                "Required for renewal and transfer"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Renewals and UETS notices",
          "body": "From 15 April 2024, extension and transfer applications require evidence of a UETS account. Obtain one through PTT with passport, foreigner ID number, phone and email, or use the prescribed online route with an electronic signature. Minors use their parent or guardian's notification account. Renew within the final 60 days before expiry."
        },
        {
          "id": "visa-detail-5",
          "title": "Tracking, card delivery and official help",
          "body": "A complete application normally has a 90-day decision period. Monitor notifications and respond to evidence requests. If approved, check card delivery to the declared address and register it within the applicable period. YİMER can be reached at 157 in Turkey or +90 312 157 11 22 abroad. The August 2026 notice specifies weekday information hours of 08:00–18:00 in Turkish, English, Russian, Arabic and Persian."
        }
      ],
      "faqs": [
        {
          "question": "Is the appointment paid?",
          "answer": "No, official filing and booking are free."
        },
        {
          "question": "What is the card fee?",
          "answer": "TRY 964 in 2026, apart from any duties."
        },
        {
          "question": "Is UETS required for renewal?",
          "answer": "Yes, for extension and transfer applications; minors use a parent's or guardian's account."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Official e-ikamet portal"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Official FAQ: applications, deadlines and relocation"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Official 2026 fees"
        },
        {
          "href": "https://istanbul.goc.gov.tr/",
          "label": "Istanbul Migration Directorate"
        },
        {
          "href": "https://en.goc.gov.tr/announcement-on-national-electronic-notification-system-for-residence-permit-extension-applications",
          "label": "UETS electronic notifications"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: official assistance"
        }
      ]
    },
    "ru": {
      "title": "Икамет в Стамбуле 2026: запись, документы, сборы и сроки",
      "metaDescription": "Порядок оформления и продления ВНЖ в Стамбуле: e-ikamet, UETS, сбор 964 лиры, приём и отслеживание.",
      "shortAnswer": "Подайте личное заявление через официальный сервис до окончания законного пребывания. Форма определяет документы и запись. Срок рассмотрения начинается с полной подачи, а не с даты записи.",
      "bosphorasHelp": "Bosphoras может организовать ознакомительные поездки, поиск жилья и встречи с независимыми специалистами. Заявления подаются в государственные органы; одобрение не гарантируется.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "Первая подача и запись",
          "body": "В e-ikamet выберите первичное заявление и категорию по цели, внесите паспорт и адрес. Сохраните номер и подтверждение. Явитесь в назначенное время: неявка без уважительной причины может привести к утрате заявления. Возьмите требуемые оригиналы и копии, не полагаясь только на общий перечень."
        },
        {
          "id": "visa-detail-2",
          "title": "Проверка адреса и документов",
          "body": "Адрес должен быть фактическим и подходить для вида заявления с учётом местных ограничений. Подготовьте жильё, паспорт, фотографии по форме, страховку, доход и подтверждение цели. Для каждого члена семьи отдельное дело. До невозвратного платежа за аренду подтвердите допустимость адреса."
        },
        {
          "id": "visa-detail-3",
          "title": "Официальные сборы и квитанции",
          "body": "Карта в 2026 году стоит 964 лиры. Сбор за проживание зависит от гражданства, срока и освобождений; сумма рассчитывается порталом. Опубликованные коды платежей: 9207 за карту, 9233 за ВНЖ и 9234 за визовый сбор при необходимости. Следуйте официальным инструкциям и храните квитанции. Запись бесплатна.",
          "table": {
            "headers": [
              "Проверка",
              "Действие или правило"
            ],
            "rows": [
              [
                "Официальное заявление",
                "До окончания законного пребывания"
              ],
              [
                "Карта (2026)",
                "964 лиры на человека"
              ],
              [
                "Решение",
                "Обычно 90 дней после полной подачи"
              ],
              [
                "Продление",
                "Последние 60 дней"
              ],
              [
                "UETS",
                "Для продления и смены категории"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "Продление и уведомления UETS",
          "body": "С 15 апреля 2024 года при продлении и смене категории требуется подтверждение аккаунта UETS. Оформите его в PTT с паспортом, номером иностранца, телефоном и почтой либо онлайн при наличии электронной подписи. Несовершеннолетние используют адрес уведомлений родителя или опекуна. Подайте продление в последние 60 дней до истечения."
        },
        {
          "id": "visa-detail-5",
          "title": "Отслеживание, доставка и справочная служба",
          "body": "Полное заявление обычно рассматривается в течение 90 дней. Следите за уведомлениями и предоставляйте запрошенные документы. При одобрении проверьте доставку на указанный адрес и зарегистрируйте его в установленный срок. YİMER доступен по номеру 157 в Турции и +90 312 157 11 22 из-за рубежа. Согласно сообщению августа 2026 года, справочная служба работает в будни с 8 до 18 на турецком, английском, русском, арабском и персидском."
        }
      ],
      "faqs": [
        {
          "question": "Запись платная?",
          "answer": "Нет, официальная подача и запись бесплатны."
        },
        {
          "question": "Сколько стоит карта?",
          "answer": "964 лиры в 2026 году без других сборов."
        },
        {
          "question": "Нужен ли UETS для продления?",
          "answer": "Да, для продления и смены категории; дети используют аккаунт родителя или опекуна."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "Официальный портал e-ikamet"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "Официальные ответы: заявления, сроки и переезд"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "Официальные сборы 2026"
        },
        {
          "href": "https://istanbul.goc.gov.tr/",
          "label": "Управление миграции Стамбула"
        },
        {
          "href": "https://en.goc.gov.tr/announcement-on-national-electronic-notification-system-for-residence-permit-extension-applications",
          "label": "Электронные уведомления UETS"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: официальная справочная служба"
        }
      ]
    },
    "ar": {
      "title": "إيكامت إسطنبول 2026: الموعد والوثائق والرسوم والمدة",
      "metaDescription": "خطوات طلب الإيكامت وتجديده في إسطنبول: e-ikamet وUETS ورسم البطاقة 964 ليرة والموعد والمتابعة.",
      "shortAnswer": "قدم طلبك شخصياً عبر الخدمة الرسمية قبل انتهاء البقاء القانوني. تحدد الاستمارة المستندات والموعد. تبدأ مدة دراسة الطلب من اكتمال الملف وليس من حجز الموعد.",
      "bosphorasHelp": "تنظم Bosphoras الزيارات الاستطلاعية والبحث عن السكن والمواعيد مع مختصين مستقلين. تقدم الطلبات عبر السلطات المختصة دون ضمان الموافقة.",
      "sections": [
        {
          "id": "visa-detail-1",
          "title": "الطلب الأول وحجز الموعد",
          "body": "اختر الطلب الأول في e-ikamet والنوع المناسب للغرض وأدخل الجواز والعنوان. احتفظ برقم الملف والتأكيد. احضر الموعد المحدد؛ قد يؤدي الغياب دون عذر إلى إلغاء الطلب. أحضر الأصول والنسخ المطلوبة ولا تعتمد على قائمة عامة فقط."
        },
        {
          "id": "visa-detail-2",
          "title": "التحقق من العنوان والوثائق",
          "body": "يجب أن يكون العنوان حقيقياً ومؤهلاً لنوع الطلب وفق القيود المحلية. جهز إثبات السكن والجواز والصور وفق الاستمارة والتأمين والموارد وإثبات الغرض. لكل فرد ملف منفصل. تحقق من أهلية العنوان قبل دفع مبلغ إيجار غير قابل للاسترداد."
        },
        {
          "id": "visa-detail-3",
          "title": "الرسوم الرسمية والإيصالات",
          "body": "رسم بطاقة 2026 هو 964 ليرة. ويتغير رسم التصريح حسب الجنسية والمدة والإعفاءات وتحسبه المنصة. رموز الدفع المنشورة هي 9207 للبطاقة و9233 لرسم الإقامة و9234 لرسم التأشيرة عند انطباقه. اتبع تعليمات الدفع الرسمية واحتفظ بالإيصالات. الموعد مجاني.",
          "table": {
            "headers": [
              "نقطة التحقق",
              "الإجراء أو القاعدة"
            ],
            "rows": [
              [
                "الطلب الرسمي",
                "قبل انتهاء البقاء القانوني"
              ],
              [
                "البطاقة (2026)",
                "964 ليرة لكل فرد"
              ],
              [
                "القرار",
                "عادة 90 يوماً بعد اكتمال الملف"
              ],
              [
                "التجديد",
                "آخر 60 يوماً قبل الانتهاء"
              ],
              [
                "UETS",
                "مطلوب للتجديد وتغيير النوع"
              ]
            ]
          }
        },
        {
          "id": "visa-detail-4",
          "title": "التجديد والإخطارات الإلكترونية UETS",
          "body": "منذ 15 أبريل 2024 يتطلب التجديد وتغيير النوع إثبات حساب UETS. افتحه لدى PTT بالجواز ورقم هوية الأجنبي والهاتف والبريد الإلكتروني أو عبر المسار الإلكتروني عند توفر التوقيع الإلكتروني. يستخدم القاصر حساب إخطار الوالد أو الوصي. قدم التجديد في آخر 60 يوماً قبل الانتهاء."
        },
        {
          "id": "visa-detail-5",
          "title": "المتابعة والتسليم والمساعدة الرسمية",
          "body": "تدرس الطلبات المكتملة عادة خلال 90 يوماً. راقب الإخطارات واستكمل المطلوب. عند الموافقة تحقق من تسليم البطاقة إلى العنوان المصرح به وسجله ضمن المهلة. يتاح YİMER على 157 داخل تركيا و+90 312 157 11 22 من الخارج. ووفق إعلان أغسطس 2026 تعمل خدمة المعلومات أيام الأسبوع من 8 إلى 18 بالتركية والإنجليزية والروسية والعربية والفارسية."
        }
      ],
      "faqs": [
        {
          "question": "هل الموعد مدفوع؟",
          "answer": "لا، الطلب والموعد الرسميان مجانيان."
        },
        {
          "question": "ما رسم البطاقة؟",
          "answer": "964 ليرة لعام 2026 دون الرسوم الأخرى."
        },
        {
          "question": "هل يلزم UETS للتجديد؟",
          "answer": "نعم للتجديد وتغيير النوع، ويستخدم القاصر حساب الوالد أو الوصي."
        }
      ],
      "sources": [
        {
          "href": "https://e-ikamet.goc.gov.tr/",
          "label": "منصة الإقامة الرسمية"
        },
        {
          "href": "https://en.goc.gov.tr/residence-",
          "label": "الأسئلة الرسمية: الطلبات والمواعيد والانتقال"
        },
        {
          "href": "https://en.goc.gov.tr/documents-for-residence-permit-fee-amount",
          "label": "الرسوم الرسمية لعام 2026"
        },
        {
          "href": "https://istanbul.goc.gov.tr/",
          "label": "إدارة الهجرة في إسطنبول"
        },
        {
          "href": "https://en.goc.gov.tr/announcement-on-national-electronic-notification-system-for-residence-permit-extension-applications",
          "label": "الإخطارات الإلكترونية UETS"
        },
        {
          "href": "https://en.goc.gov.tr/yimer-157-has-been-a-trusted-point-of-contact-for-foreigners-in-turkiye-for-11-years",
          "label": "YİMER 157: المساعدة الرسمية للأجانب"
        }
      ]
    }
  }
};
