import type { Locale } from '@/lib/i18n';
import type { MainPageContent } from './types';

export const legalTaxSeoOverrides: Partial<Record<Locale, MainPageContent[]>> = {
  fr: [
    {
      id: 'legal-tax',
      locale: 'fr',
      slug: '/services/conseil-juridique-fiscal',
      title: 'Conseil juridique et fiscal en Turquie pour investisseurs | Bosphoras',
      h1: 'Conseil juridique et fiscal en Turquie : décider avant d’agir',
      metaDescription:
        'Conseil juridique et fiscal en Turquie pour expatriés, familles, entrepreneurs et investisseurs : résidence fiscale, société, immobilier, banque, conformité et coordination avec avocats.',
      shortIntro:
        'En Turquie, une décision personnelle devient vite une décision juridique, fiscale et patrimoniale : résidence, achat immobilier, société, compte bancaire, transfert de fonds, assurance, succession, famille, revenus étrangers. Bosphoras ne remplace pas les avocats ni les fiscalistes. Notre rôle est plus stratégique : poser les bonnes questions avant la signature, coordonner les professionnels compétents et vous aider à comprendre les conséquences avant d’agir.',
      sections: [
        {
          heading: 'L’erreur la plus coûteuse : consulter trop tard',
          body:
            'Beaucoup de projets commencent par une opportunité : un appartement à Istanbul, une villa à Bodrum, une société à créer, une résidence à demander, un compte bancaire à ouvrir. Mais si le juridique et le fiscal arrivent après la décision, le client découvre parfois trop tard les risques : résidence fiscale mal anticipée, structure de société inadaptée, flux bancaires mal documentés, contrat trop faible, achat immobilier insuffisamment vérifié. Bosphoras place l’analyse en amont pour éviter les décisions irréversibles.',
          bullets: [
            'Comprendre le profil du client, son pays de résidence et l’origine des fonds',
            'Identifier les sujets sensibles avant achat, création de société ou installation familiale',
            'Préparer les questions à poser aux avocats, fiscalistes, comptables et banques',
            'Éviter les promesses rapides sur la fiscalité, la résidence, la citoyenneté ou le rendement',
          ],
        },
        {
          heading: 'Une coordination juridique, fiscale et patrimoniale',
          body:
            'Un projet en Turquie ne doit pas être regardé uniquement depuis la Turquie. Un résident français, kazakh, britannique, du Golfe ou d’un autre pays n’a pas les mêmes obligations, ni les mêmes risques. Bosphoras coordonne une lecture croisée : droit turc, fiscalité locale, fiscalité du pays de départ, immobilier, société, banque, famille et protection patrimoniale. Cette vision intégrée évite les angles morts.',
          bullets: [
            'Résidence fiscale et résidence administrative : deux sujets différents à ne pas confondre',
            'Société turque : activité réelle, comptabilité, TVA, paie, banque et conformité',
            'Immobilier : vérification, titre, contrat, paiement, succession et location éventuelle',
            'Banque et transferts : documentation, conformité, origine des fonds et calendrier',
          ],
        },
        {
          heading: 'Ce que Bosphoras fait — et ce que Bosphoras ne fait pas',
          body:
            'Notre position est volontairement claire. Bosphoras n’est pas un cabinet d’avocats, ne donne pas d’avis fiscal réglementé et ne promet aucun résultat administratif. Nous préparons le dossier, sélectionnons les bons interlocuteurs, organisons les échanges, traduisons les enjeux, centralisons les décisions et veillons à ce que le client ne soit pas seul face à une succession de prestataires isolés.',
          bullets: [
            'Coordination avec avocats, fiscalistes, comptables, notaires, banques et assureurs',
            'Préparation des documents, questions, priorités et scénarios à analyser',
            'Suivi confidentiel des échanges et des prochaines étapes',
            'Aucune substitution aux professions réglementées et aucune promesse de résultat',
          ],
        },
        {
          heading: 'Cas fréquents : résidence, société, immobilier, famille',
          body:
            'Le besoin peut sembler simple au départ : vivre en Turquie, acheter un bien, créer une société, ouvrir un bureau, protéger sa famille ou organiser ses revenus. En réalité, ces sujets se croisent. Une société peut modifier votre exposition fiscale. Un achat immobilier peut poser des questions de succession. Une installation familiale peut créer des obligations dans plusieurs pays. Un transfert de fonds peut nécessiter une documentation claire.',
          bullets: [
            'Expatriation ou installation partielle en Turquie',
            'Création de société, holding, activité de conseil, import-export ou services internationaux',
            'Achat immobilier, location, résidence secondaire ou base familiale',
            'Coordination avec conseillers existants en France, Kazakhstan, Dubai, Royaume-Uni ou autre juridiction',
          ],
        },
        {
          heading: 'Une méthode pensée pour les clients internationaux',
          body:
            'Le vrai luxe n’est pas d’aller vite. C’est de ne pas se tromper. Bosphoras fonctionne comme un bureau privé : diagnostic, cartographie des risques, sélection des professionnels, coordination des rendez-vous, suivi des documents et synthèse des décisions. Le client garde un interlocuteur unique, mais chaque sujet sensible reste traité par le professionnel compétent.',
          bullets: [
            'Diagnostic confidentiel de la situation personnelle, familiale, fiscale et professionnelle',
            'Feuille de route juridique et fiscale avant décision importante',
            'Coordination locale à Istanbul, Bodrum et Antalya selon les besoins',
            'Accompagnement possible en Private Desk ou via Bosphoras Private Access pour les profils validés',
          ],
        },
      ],
      faqs: [
        { question: 'Bosphoras est-il un cabinet d’avocats ou un cabinet fiscal ?', answer: 'Non. Bosphoras est un bureau privé de coordination. Les avis juridiques et fiscaux sont rendus par des professionnels habilités. Bosphoras organise, filtre, prépare et coordonne les échanges.' },
        { question: 'Pouvez-vous analyser ma résidence fiscale entre la France et la Turquie ?', answer: 'Bosphoras peut coordonner l’analyse avec des fiscalistes compétents dans les juridictions concernées. La résidence fiscale dépend de critères précis et ne doit jamais être décidée sur une simple impression.' },
        { question: 'Faut-il créer une société en Turquie pour investir ou travailler ?', answer: 'Pas toujours. Une société peut être utile dans certains cas, mais inutile ou risquée dans d’autres. Il faut d’abord analyser l’activité réelle, la banque, la comptabilité, la TVA, la paie, les flux et la situation fiscale personnelle.' },
        { question: 'Pouvez-vous sécuriser un achat immobilier en Turquie ?', answer: 'Bosphoras peut coordonner les vérifications avec avocats, agents sélectionnés, notaires ou professionnels compétents. L’objectif est de comprendre le titre, le contrat, le paiement, les risques et les conséquences patrimoniales.' },
        { question: 'Bosphoras garantit-il un avantage fiscal en Turquie ?', answer: 'Non. Aucun avantage fiscal ne doit être promis sans analyse. Bosphoras privilégie une approche prudente, documentée et conforme.' },
        { question: 'Puis-je garder mes conseillers actuels ?', answer: 'Oui. Bosphoras peut travailler avec vos avocats, fiscalistes, family office ou comptables existants afin d’éviter les contradictions entre pays.' },
      ],
      cta: { label: 'Faire analyser mon projet en Turquie', href: '/diagnostic-prive', secondaryLabel: 'Voir l’installation en Turquie', secondaryHref: '/services/installation-en-turquie' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'Installation en Turquie' },
        { pageId: 'business-setup', label: 'Création d’entreprise en Turquie' },
        { pageId: 'property', label: 'Immobilier et relocation' },
        { pageId: 'compliance', label: 'Conformité et confiance' },
        { pageId: 'private-assessment', label: 'Diagnostic privé' },
      ],
    },
  ],
  en: [
    {
      id: 'legal-tax',
      locale: 'en',
      slug: '/services/legal-tax-advisory',
      title: 'Legal and tax advisory in Turkey for investors | Bosphoras',
      h1: 'Legal and tax coordination in Turkey: decide before you act',
      metaDescription:
        'Legal and tax coordination in Turkey for expatriates, families, entrepreneurs and investors: tax residence, company setup, property, banking, compliance and lawyers.',
      shortIntro:
        'In Turkey, a private decision quickly becomes a legal, tax and patrimonial decision: residence, property purchase, company setup, bank account, transfer of funds, insurance, succession, family and foreign income. Bosphoras does not replace lawyers or tax advisors. Our role is strategic: ask the right questions before signature, coordinate qualified professionals and help you understand the consequences before you act.',
      sections: [
        { heading: 'The most expensive mistake: consulting too late', body: 'Many projects begin with an opportunity: an apartment in Istanbul, a villa in Bodrum, a company to create, a residence application, a bank account. But when legal and tax questions come after the decision, the client may discover risks too late: poorly anticipated tax residence, unsuitable company structure, undocumented banking flows, weak contracts or insufficient property checks. Bosphoras brings the analysis upstream.', bullets: ['Understand the client profile, residence country and source of funds', 'Identify sensitive issues before purchase, incorporation or family relocation', 'Prepare the right questions for lawyers, tax advisors, accountants and banks', 'Avoid quick promises on tax, residence, citizenship or returns'] },
        { heading: 'Legal, tax and patrimonial coordination', body: 'A project in Turkey should not be assessed only from Turkey. A French, Kazakh, British, Gulf or other resident does not face the same obligations or risks. Bosphoras coordinates a cross-border reading: Turkish law, local taxation, tax rules in the departure country, property, company, banking, family and asset protection.', bullets: ['Tax residence and administrative residence: two different subjects', 'Turkish company: real activity, accounting, VAT, payroll, banking and compliance', 'Property: title, contract, payment, succession and potential rental use', 'Banking and transfers: documentation, compliance, source of funds and timing'] },
        { heading: 'What Bosphoras does — and does not do', body: 'Our position is deliberately clear. Bosphoras is not a law firm, does not provide regulated tax opinions and does not promise administrative outcomes. We prepare the file, select the right contacts, organize exchanges, translate the issues, centralize decisions and make sure the client is not left alone with disconnected providers.', bullets: ['Coordination with lawyers, tax advisors, accountants, notaries, banks and insurers', 'Preparation of documents, questions, priorities and scenarios to review', 'Confidential follow-up of exchanges and next steps', 'No replacement of regulated professionals and no promised result'] },
        { heading: 'Common cases: residence, company, property, family', body: 'The initial need may seem simple: live in Turkey, buy property, create a company, open an office, protect the family or organize income. In practice, these subjects overlap. A company may change tax exposure. A property purchase may raise succession issues. Family relocation may create obligations in several countries. A fund transfer may require clean documentation.', bullets: ['Full or partial relocation to Turkey', 'Company formation, holding, consulting, import-export or international services', 'Property purchase, rental, second home or family base', 'Coordination with existing advisors in France, Kazakhstan, Dubai, the UK or other jurisdictions'] },
        { heading: 'A method designed for international clients', body: 'True luxury is not speed. It is not making the wrong decision. Bosphoras operates like a private desk: assessment, risk mapping, professional selection, appointment coordination, document follow-up and decision synthesis. The client keeps one point of contact while each sensitive issue remains handled by the qualified professional.', bullets: ['Confidential assessment of personal, family, tax and professional situation', 'Legal and tax roadmap before any major decision', 'Local coordination in Istanbul, Bodrum and Antalya when needed', 'Support through Private Desk or Bosphoras Private Access for validated profiles'] },
      ],
      faqs: [
        { question: 'Is Bosphoras a law firm or tax firm?', answer: 'No. Bosphoras is a private coordination desk. Legal and tax opinions are delivered by qualified professionals. Bosphoras organizes, filters, prepares and coordinates the exchanges.' },
        { question: 'Can you analyze my tax residence between my country and Turkey?', answer: 'Bosphoras can coordinate the analysis with tax advisors in the relevant jurisdictions. Tax residence depends on precise criteria and should never be decided on a simple impression.' },
        { question: 'Do I need a Turkish company to invest or work?', answer: 'Not always. A company may help in some cases, but may be unnecessary or risky in others. Real activity, banking, accounting, VAT, payroll, flows and personal tax exposure should be reviewed first.' },
        { question: 'Can you help secure a property purchase in Turkey?', answer: 'Bosphoras can coordinate checks with lawyers, selected agents, notaries or qualified professionals. The objective is to understand title, contract, payment, risks and patrimonial consequences.' },
        { question: 'Does Bosphoras guarantee a tax benefit in Turkey?', answer: 'No. No tax advantage should be promised without analysis. Bosphoras favors a prudent, documented and compliant approach.' },
        { question: 'Can I keep my existing advisors?', answer: 'Yes. Bosphoras can coordinate with your existing lawyers, tax advisors, family office or accountants to avoid contradictions between countries.' },
      ],
      cta: { label: 'Review my Turkey project', href: '/private-assessment', secondaryLabel: 'Relocate to Turkey', secondaryHref: '/services/relocate-to-turkey' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'Relocation to Turkey' },
        { pageId: 'business-setup', label: 'Company formation in Turkey' },
        { pageId: 'property', label: 'Property and relocation' },
        { pageId: 'compliance', label: 'Compliance and trust' },
        { pageId: 'private-assessment', label: 'Private assessment' },
      ],
    },
  ],
  ru: [
    {
      id: 'legal-tax',
      locale: 'ru',
      slug: '/uslugi/yuridicheskie-nalogovye-konsultatsii',
      title: 'Юридическая и налоговая координация в Турции | Bosphoras',
      h1: 'Юридические и налоговые вопросы в Турции: сначала понять, потом действовать',
      metaDescription:
        'Юридическая и налоговая координация в Турции для семей, инвесторов и предпринимателей: налоговая резиденция, компания, недвижимость, банки, compliance и юристы.',
      shortIntro:
        'В Турции личное решение быстро становится юридическим, налоговым и имущественным вопросом: резиденция, покупка недвижимости, компания, банковский счёт, перевод средств, страхование, наследование, семья и иностранные доходы. Bosphoras не заменяет юристов и налоговых консультантов. Наша роль стратегическая: задать правильные вопросы до подписи, скоординировать компетентных специалистов и помочь понять последствия до действия.',
      sections: [
        { heading: 'Самая дорогая ошибка — обратиться слишком поздно', body: 'Многие проекты начинаются с возможности: квартира в Стамбуле, вилла в Бодруме, компания, ВНЖ, банковский счёт. Но если юридические и налоговые вопросы появляются после решения, клиент может слишком поздно увидеть риски: налоговая резиденция, неправильная структура компании, слабый контракт, недостаточная проверка недвижимости или неподготовленные банковские потоки.', bullets: ['Понять профиль клиента, страну резиденции и происхождение средств', 'Определить чувствительные вопросы до покупки, компании или семейного переезда', 'Подготовить вопросы для юристов, налоговых консультантов, бухгалтеров и банков', 'Избежать быстрых обещаний по налогам, резиденции, гражданству или доходности'] },
        { heading: 'Юридическая, налоговая и имущественная координация', body: 'Проект в Турции нельзя анализировать только из Турции. Резидент Франции, Казахстана, Великобритании, стран Залива или другой юрисдикции имеет разные обязанности и риски. Bosphoras координирует международный взгляд: турецкое право, местные налоги, страна выезда, недвижимость, компания, банк, семья и защита капитала.', bullets: ['Налоговая резиденция и административная резиденция — разные понятия', 'Турецкая компания: реальная деятельность, бухгалтерия, НДС, зарплата, банк и compliance', 'Недвижимость: title, договор, оплата, наследование и возможная аренда', 'Банк и переводы: документы, compliance, происхождение средств и timing'] },
        { heading: 'Что делает Bosphoras — и чего не делает', body: 'Позиция Bosphoras намеренно ясная. Мы не юридическая фирма, не выдаём регулируемые налоговые заключения и не обещаем административный результат. Мы готовим файл, выбираем правильных interlocutors, организуем обмен, объясняем риски и не оставляем клиента один на один с разрозненными подрядчиками.', bullets: ['Координация с юристами, налоговыми консультантами, бухгалтерами, нотариусами, банками и страховщиками', 'Подготовка документов, вопросов, приоритетов и сценариев', 'Конфиденциальное сопровождение обменов и следующих шагов', 'Без замены регулируемых профессий и без обещания результата'] },
        { heading: 'Частые случаи: резиденция, компания, недвижимость, семья', body: 'Запрос может казаться простым: жить в Турции, купить объект, открыть компанию, офис, защитить семью или организовать доходы. На практике эти темы пересекаются. Компания может изменить налоговый риск. Недвижимость может вызвать вопросы наследования. Семейный переезд может создать обязанности в нескольких странах. Перевод средств требует документации.', bullets: ['Полная или частичная установка в Турции', 'Компания, holding, consulting, import-export или международные услуги', 'Покупка недвижимости, аренда, вторая резиденция или семейная база', 'Координация с текущими советниками во Франции, Казахстане, Dubai, UK или другой юрисдикции'] },
        { heading: 'Метод для международных клиентов', body: 'Настоящая роскошь — не скорость. Настоящая роскошь — не ошибиться. Bosphoras работает как частный офис: диагностика, карта рисков, выбор специалистов, координация встреч, документы и синтез решений. У клиента остаётся один контакт, а чувствительные вопросы ведут компетентные профессионалы.', bullets: ['Конфиденциальная диагностика личной, семейной, налоговой и профессиональной ситуации', 'Юридическая и налоговая дорожная карта до важных решений', 'Локальная координация в Стамбуле, Бодруме и Анталье', 'Сопровождение через Private Desk или Bosphoras Private Access для подтверждённых профилей'] },
      ],
      faqs: [
        { question: 'Bosphoras является юридической или налоговой фирмой?', answer: 'Нет. Bosphoras — частный координационный офис. Юридические и налоговые заключения дают квалифицированные специалисты. Bosphoras организует, фильтрует, готовит и координирует обмен.' },
        { question: 'Можно ли анализировать налоговую резиденцию между моей страной и Турцией?', answer: 'Да, Bosphoras может скоординировать анализ с налоговыми консультантами в нужных юрисдикциях. Налоговая резиденция зависит от точных критериев.' },
        { question: 'Нужна ли турецкая компания для инвестиций или работы?', answer: 'Не всегда. Компания может быть полезна, но иногда она лишняя или рискованная. Сначала нужно проверить деятельность, банк, бухгалтерию, НДС, зарплату, потоки и личные налоги.' },
        { question: 'Можно ли сопровождать покупку недвижимости?', answer: 'Bosphoras может координировать проверки с юристами, выбранными агентами, нотариусами или компетентными специалистами, чтобы понять title, договор, оплату, риски и имущественные последствия.' },
        { question: 'Гарантируете ли вы налоговые преимущества в Турции?', answer: 'Нет. Налоговые преимущества нельзя обещать без анализа. Bosphoras придерживается осторожного, документированного и compliant подхода.' },
        { question: 'Могу ли я оставить своих текущих советников?', answer: 'Да. Bosphoras может координироваться с вашими юристами, налоговыми консультантами, family office или бухгалтерами, чтобы избежать противоречий между странами.' },
      ],
      cta: { label: 'Проверить мой проект в Турции', href: '/chastnaya-konsultatsiya', secondaryLabel: 'Переезд в Турцию', secondaryHref: '/uslugi/pereezd-v-turtsiyu' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'Переезд в Турцию' },
        { pageId: 'business-setup', label: 'Создание компании в Турции' },
        { pageId: 'property', label: 'Недвижимость и relocation' },
        { pageId: 'compliance', label: 'Compliance и доверие' },
        { pageId: 'private-assessment', label: 'Частная консультация' },
      ],
    },
  ],
  ar: [
    {
      id: 'legal-tax',
      locale: 'ar',
      slug: '/خدمات/استشارات-قانونية-ضريبية',
      title: 'استشارات قانونية وضريبية في تركيا للمستثمرين | Bosphoras',
      h1: 'التنسيق القانوني والضريبي في تركيا: افهم قبل أن تتصرف',
      metaDescription:
        'تنسيق قانوني وضريبي في تركيا للعائلات والمستثمرين ورواد الأعمال: الإقامة الضريبية، الشركة، العقار، البنوك، الامتثال والمحامون.',
      shortIntro:
        'في تركيا، يتحول القرار الشخصي بسرعة إلى قرار قانوني وضريبي ومالي: إقامة، شراء عقار، تأسيس شركة، حساب بنكي، تحويل أموال، تأمين، ميراث، عائلة ودخل أجنبي. Bosphoras لا يحل محل المحامين أو المستشارين الضريبيين. دورنا استراتيجي: طرح الأسئلة الصحيحة قبل التوقيع، تنسيق المهنيين المؤهلين ومساعدة العميل على فهم النتائج قبل التصرف.',
      sections: [
        { heading: 'الخطأ الأكثر تكلفة: الاستشارة المتأخرة', body: 'تبدأ الكثير من المشاريع بفرصة: شقة في إسطنبول، فيلا في بودروم، شركة، إقامة، حساب بنكي. لكن عندما تأتي الأسئلة القانونية والضريبية بعد القرار، قد تظهر المخاطر متأخرة: إقامة ضريبية غير واضحة، هيكل شركة غير مناسب، تدفقات بنكية غير موثقة، عقد ضعيف أو فحص عقاري غير كافٍ. Bosphoras يضع التحليل قبل القرار.', bullets: ['فهم ملف العميل وبلد الإقامة ومصدر الأموال', 'تحديد المواضيع الحساسة قبل الشراء أو الشركة أو انتقال العائلة', 'تحضير الأسئلة للمحامين والمستشارين الضريبيين والمحاسبين والبنوك', 'تجنب الوعود السريعة حول الضرائب أو الإقامة أو الجنسية أو العائد'] },
        { heading: 'تنسيق قانوني وضريبي ومالي', body: 'لا يجب تحليل مشروع في تركيا من زاوية تركيا فقط. المقيم في فرنسا أو كازاخستان أو بريطانيا أو الخليج أو أي دولة أخرى لديه التزامات ومخاطر مختلفة. ينسق Bosphoras قراءة متقاطعة: القانون التركي، الضرائب المحلية، بلد المغادرة، العقار، الشركة، البنك، العائلة وحماية الثروة.', bullets: ['الإقامة الضريبية والإقامة الإدارية موضوعان مختلفان', 'الشركة التركية: نشاط فعلي، محاسبة، VAT، رواتب، بنك وامتثال', 'العقار: سند الملكية، العقد، الدفع، الميراث والاستخدام التأجيري المحتمل', 'البنوك والتحويلات: مستندات، امتثال، مصدر الأموال والجدول الزمني'] },
        { heading: 'ما يفعله Bosphoras وما لا يفعله', body: 'موقفنا واضح. Bosphoras ليس مكتب محاماة، ولا يعطي رأياً ضريبياً منظماً، ولا يعد بنتيجة إدارية. نحن نجهز الملف، نختار جهات الاتصال المناسبة، ننظم التبادلات، نشرح المخاطر، نركز القرارات ونمنع بقاء العميل وحده أمام مزودين منفصلين.', bullets: ['تنسيق مع محامين، مستشارين ضريبيين، محاسبين، موثقين، بنوك وشركات تأمين', 'تحضير المستندات والأسئلة والأولويات والسيناريوهات', 'متابعة سرية للتبادلات والخطوات التالية', 'لا نستبدل المهنيين المنظمين ولا نعد بنتيجة'] },
        { heading: 'الحالات المتكررة: إقامة، شركة، عقار، عائلة', body: 'قد يبدو الطلب بسيطاً: العيش في تركيا، شراء عقار، تأسيس شركة، فتح مكتب، حماية العائلة أو تنظيم الدخل. عملياً، هذه المواضيع تتقاطع. الشركة قد تغير التعرض الضريبي. العقار قد يفتح أسئلة ميراث. انتقال العائلة قد يخلق التزامات في أكثر من بلد. تحويل الأموال يحتاج إلى توثيق واضح.', bullets: ['انتقال كامل أو جزئي إلى تركيا', 'تأسيس شركة، holding، consulting، import-export أو خدمات دولية', 'شراء عقار، إيجار، منزل ثانٍ أو قاعدة عائلية', 'تنسيق مع مستشارين حاليين في فرنسا أو كازاخستان أو دبي أو بريطانيا أو غيرها'] },
        { heading: 'منهجية للعملاء الدوليين', body: 'الترف الحقيقي ليس السرعة. الترف الحقيقي هو عدم ارتكاب القرار الخطأ. يعمل Bosphoras كمكتب خاص: تقييم، خريطة مخاطر، اختيار المهنيين، تنسيق المواعيد، متابعة المستندات وتلخيص القرارات. يحتفظ العميل بجهة واحدة، بينما تبقى المواضيع الحساسة لدى المختصين المؤهلين.', bullets: ['تقييم سري للوضع الشخصي والعائلي والضريبي والمهني', 'خارطة طريق قانونية وضريبية قبل أي قرار مهم', 'تنسيق محلي في إسطنبول وبودروم وأنطاليا عند الحاجة', 'مرافقة عبر Private Desk أو Bosphoras Private Access للملفات المعتمدة'] },
      ],
      faqs: [
        { question: 'هل Bosphoras مكتب محاماة أو مكتب ضريبي؟', answer: 'لا. Bosphoras مكتب تنسيق خاص. الآراء القانونية والضريبية يقدمها مهنيون مؤهلون. نحن ننظم ونرشح ونحضر وننسق التبادلات.' },
        { question: 'هل يمكن تحليل الإقامة الضريبية بين بلدي وتركيا؟', answer: 'يمكن لـ Bosphoras تنسيق التحليل مع مستشارين ضريبيين في الجهات المعنية. الإقامة الضريبية تعتمد على معايير دقيقة ولا يجب تحديدها بالانطباع فقط.' },
        { question: 'هل أحتاج إلى شركة تركية للاستثمار أو العمل؟', answer: 'ليس دائماً. قد تكون الشركة مفيدة في بعض الحالات وغير ضرورية أو خطرة في حالات أخرى. يجب تحليل النشاط، البنك، المحاسبة، VAT، الرواتب والتعرض الضريبي الشخصي أولاً.' },
        { question: 'هل يمكنكم تنسيق شراء عقار في تركيا؟', answer: 'يمكن لـ Bosphoras تنسيق الفحوصات مع محامين ووكلاء مختارين وموثقين أو مهنيين مؤهلين لفهم السند والعقد والدفع والمخاطر والنتائج المالية.' },
        { question: 'هل تضمنون ميزة ضريبية في تركيا؟', answer: 'لا. لا يجب وعد أي ميزة ضريبية دون تحليل. يفضل Bosphoras نهجاً حذراً وموثقاً ومتوافقاً.' },
        { question: 'هل يمكنني الاحتفاظ بمستشاريّ الحاليين؟', answer: 'نعم. يمكن لـ Bosphoras التنسيق مع محاميك أو مستشاريك الضريبيين أو family office أو محاسبيك لتجنب التناقضات بين الدول.' },
      ],
      cta: { label: 'مراجعة مشروعي في تركيا', href: '/تقييم-خاص', secondaryLabel: 'الانتقال إلى تركيا', secondaryHref: '/خدمات/الانتقال-إلى-تركيا' },
      jsonLdType: 'Service',
      internalLinks: [
        { pageId: 'relocate', label: 'الانتقال إلى تركيا' },
        { pageId: 'business-setup', label: 'تأسيس شركة في تركيا' },
        { pageId: 'property', label: 'العقار والانتقال' },
        { pageId: 'compliance', label: 'الامتثال والثقة' },
        { pageId: 'private-assessment', label: 'تقييم خاص' },
      ],
    },
  ],
};
