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
          "href": "https://www.visa.gov.tr/",
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
          "href": "https://www.visa.gov.tr/",
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
          "href": "https://www.visa.gov.tr/",
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
          "href": "https://www.visa.gov.tr/",
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
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-turkey-with-their-national-id_s.en.mfa",
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
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-turkey-with-their-national-id_s.en.mfa",
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
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-turkey-with-their-national-id_s.en.mfa",
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
          "href": "https://www.mfa.gov.tr/countries-whose-citizens-are-allowed-to-enter-turkey-with-their-national-id_s.en.mfa",
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
          "body": "Les durées présentées concernent les passeports ordinaires pour un court séjour admissible. Le plafond général de 90 jours sur 180 s’applique, avec des modalités particulières prévues par certains accords. Une limite par entrée peut se cumuler avec ce plafond : c’est notamment le cas de l’Indonésie et de la Russie. Ce tableau ne concerne pas les visas de travail ou d’études.",
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
                "Algérie",
                "Moins de 15 ou plus de 50 ans : jusqu’à 90 jours ; sinon visa"
              ],
              [
                "Irak",
                "Moins de 15 ou plus de 50 ans : jusqu’à 90 jours ; sinon visa"
              ],
              [
                "Inde",
                "Visa requis ; e-Visa selon admissibilité"
              ],
              [
                "Pakistan",
                "Visa requis ; e-Visa selon admissibilité"
              ],
              [
                "Égypte",
                "Visa requis ; e-Visa selon admissibilité"
              ],
              [
                "Afrique du Sud",
                "Visa requis ; e-Visa selon admissibilité"
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
          "label": "e-Visa : informations officielles et frais"
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
          "body": "The durations cover ordinary passports for qualifying short stays. The general ceiling is 90 in 180 days, with specific agreement-based counting rules. A per-entry limit can exist alongside that ceiling, notably for Indonesian and Russian passports. The table does not cover work or study visas.",
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
                "Algeria",
                "Under 15 or over 50: up to 90 days; otherwise visa"
              ],
              [
                "Iraq",
                "Under 15 or over 50: up to 90 days; otherwise visa"
              ],
              [
                "India",
                "Visa required; e-Visa if eligible"
              ],
              [
                "Pakistan",
                "Visa required; e-Visa if eligible"
              ],
              [
                "Egypt",
                "Visa required; e-Visa if eligible"
              ],
              [
                "South Africa",
                "Visa required; e-Visa if eligible"
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
          "label": "e-Visa: official application information and fees"
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
          "body": "Указаны обычные паспорта и разрешённые краткосрочные цели. Общий предел — 90 дней из 180, при этом отдельные соглашения имеют собственные правила подсчёта. Ограничение за один въезд может действовать вместе с общим пределом, например для Индонезии и России. Работа и учёба регулируются отдельно.",
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
                "Алжир",
                "Младше 15 или старше 50: до 90 дней; иначе виза"
              ],
              [
                "Ирак",
                "Младше 15 или старше 50: до 90 дней; иначе виза"
              ],
              [
                "Индия",
                "Нужна виза; e-Visa при наличии права"
              ],
              [
                "Пакистан",
                "Нужна виза; e-Visa при наличии права"
              ],
              [
                "Египет",
                "Нужна виза; e-Visa при наличии права"
              ],
              [
                "ЮАР",
                "Нужна виза; e-Visa при наличии права"
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
          "label": "e-Visa: официальная информация и сборы"
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
          "body": "تخص المدد الجوازات العادية والزيارات القصيرة المسموح بها. السقف العام 90 يوماً خلال 180 يوماً مع قواعد خاصة لبعض الاتفاقيات. وقد يجتمع حد الزيارة الواحدة مع الحد الإجمالي، كما في إندونيسيا وروسيا. ولا يشمل الجدول تأشيرات العمل أو الدراسة.",
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
                "الجزائر",
                "دون 15 أو فوق 50 عاماً: حتى 90 يوماً؛ وإلا تأشيرة"
              ],
              [
                "العراق",
                "دون 15 أو فوق 50 عاماً: حتى 90 يوماً؛ وإلا تأشيرة"
              ],
              [
                "الهند",
                "تأشيرة مطلوبة؛ إلكترونية عند التأهل"
              ],
              [
                "باكستان",
                "تأشيرة مطلوبة؛ إلكترونية عند التأهل"
              ],
              [
                "مصر",
                "تأشيرة مطلوبة؛ إلكترونية عند التأهل"
              ],
              [
                "جنوب إفريقيا",
                "تأشيرة مطلوبة؛ إلكترونية عند التأهل"
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
          "label": "التأشيرة الإلكترونية: معلومات الطلب والرسوم"
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
  }
};
