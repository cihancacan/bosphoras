export const careerLanguageNames = {
  fr:'Français',en:'English',ru:'Русский',ar:'العربية',tr:'Türkçe',
  de:'Deutsch',es:'Español',it:'Italiano',pt:'Português',zh:'中文',
} as const;
export type CareerLocale = keyof typeof careerLanguageNames;
export const careerLanguages = Object.keys(careerLanguageNames) as CareerLocale[];
export const careerAreas = ['client-relations','property-advisory','concierge','operations','general'] as const;
export type CareerArea = typeof careerAreas[number];
const keys = ['eyebrow','headline','intro','location','approachTitle','approachText','deskTitle','desk1','desk2','desk3','desk4','profileTitle','profileText','formTitle','formIntro','name','email','phone','languages','area','experience','profile','cv','cvNote','consent','submit','sending','success','storedOnly','error','required','privacy','select','role1','role2','role3','role4','role5'] as const;
type CopyKey = typeof keys[number];
type Copy = Record<CopyKey,string>;
const c: Record<CareerLocale,string[]> = {
fr:[
'REJOINDRE BOSPHORAS','Construire une relation qui dure.',
'Bosphoras réunit à Istanbul des métiers de conseil, de service et d’accompagnement sur mesure. Nous accueillons les candidatures de personnes qui partagent notre exigence de discrétion, de précision et d’attention aux autres.','ISTANBUL · GALATAPORT',
'Notre manière de travailler','Chaque échange engage notre réputation. Nous privilégions l’écoute, la clarté des réponses et la qualité du suivi, sur le terrain comme à distance.',
'Des métiers complémentaires','Relations clients & accueil premium','Conseil immobilier en Turquie et à l’international','Conciergerie & expériences privées','Coordination opérationnelle et suivi des dossiers',
'Les qualités que nous recherchons','Une expression irréprochable, la maîtrise du français ou de l’anglais, une expérience confirmée de la relation client, de la disponibilité et une présentation professionnelle soignée. Nous recrutons sur les compétences et le sens du service.',
'Présenter une candidature','Parlez-nous de votre parcours et des langues que vous utilisez professionnellement. Les candidatures spontanées sont les bienvenues.',
'Nom et prénom','Adresse e-mail','Téléphone / WhatsApp','Langues parlées (niveau professionnel)','Domaine d’intérêt','Parcours et expérience','Profil LinkedIn ou portfolio (facultatif)','CV — PDF ou DOCX (facultatif)','Maximum 2 Mo. Le CV est adressé uniquement à notre équipe de recrutement, en pièce jointe d’un e-mail.',
'J’accepte que Bosphoras utilise mes données pour examiner ma candidature et me recontacter.','Envoyer ma candidature','Envoi en cours…','Votre candidature a bien été enregistrée. Nous reviendrons vers vous prochainement.','Votre candidature est enregistrée. L’envoi des e-mails n’a pas pu être confirmé : notre équipe peut retrouver votre dossier dans le CRM.','Une erreur est survenue. Veuillez réessayer.','Champs obligatoires','Vos informations sont traitées de façon confidentielle et uniquement pour le recrutement.','Sélectionner un domaine',
'Relations clients','Conseil immobilier','Conciergerie','Opérations & suivi','Candidature spontanée'
],
en:[
'CAREERS AT BOSPHORAS','A relationship worth building.',
'Based in Istanbul, Bosphoras brings together advisory, service and tailored client support. We welcome people who share our standards of discretion, precision and genuine care.','ISTANBUL · GALATAPORT',
'How we work','Every conversation reflects our reputation. We value attentive listening, clear answers and consistent follow-through, in person and remotely.',
'Where you can contribute','Premium client relations & reception','Property advisory in Türkiye and internationally','Private concierge & experiences','Operations and client follow-up',
'What matters to us','Excellent communication, professional fluency in French or English, proven client-facing experience, availability and a polished professional manner. We recruit for skills and service mindset.',
'Submit your application','Tell us about your experience and the languages you use professionally. Speculative applications are welcome.',
'Full name','Email address','Phone / WhatsApp','Languages spoken professionally','Area of interest','Background and experience','LinkedIn or portfolio (optional)','CV — PDF or DOCX (optional)','Maximum 2 MB. Your CV is emailed as a private attachment to our recruitment team.',
'I agree that Bosphoras may process my details to review my application and contact me.','Submit application','Sending…','Your application has been recorded. We will be in touch soon.','Your application is saved. Email delivery could not be confirmed; our team can review your file in the CRM.','Something went wrong. Please try again.','Required fields','Your information is handled confidentially for recruitment purposes only.','Select a department',
'Client relations','Property advisory','Concierge','Operations & follow-up','General application'
],
ru:[
'КАРЬЕРА В BOSPHORAS','Работа, основанная на доверии.',
'Bosphoras объединяет в Стамбуле консультационные и сервисные направления. Мы рассматриваем кандидатов, для которых важны конфиденциальность, точность и уважение к клиенту.','СТАМБУЛ · ГАЛАТАПОРТ',
'Как мы работаем','Каждый разговор отражает нашу репутацию. Мы ценим внимательность, понятные ответы и последовательное сопровождение лично и дистанционно.',
'Направления работы','Премиальное обслуживание клиентов','Недвижимость в Турции и за рубежом','Частный консьерж-сервис','Координация и сопровождение',
'Что для нас важно','Грамотная речь, свободный профессиональный французский или английский, опыт работы с клиентами, доступность и безупречная деловая коммуникация. Для нас важны компетенции и отношение к работе.',
'Отправить кандидатуру','Расскажите о своём опыте и языках, которыми владеете на рабочем уровне. Возможны инициативные заявки.',
'Имя и фамилия','Электронная почта','Телефон / WhatsApp','Языки для профессионального общения','Направление','Опыт и квалификация','LinkedIn или портфолио (необязательно)','Резюме — PDF или DOCX (необязательно)','Не более 2 МБ. Резюме направляется по почте только команде подбора персонала.',
'Я согласен(на) на обработку данных для рассмотрения кандидатуры и обратной связи.','Отправить заявку','Отправка…','Ваша заявка зарегистрирована. Мы свяжемся с вами в ближайшее время.','Заявка сохранена. Доставка писем не подтверждена; команда увидит её в CRM.','Произошла ошибка. Попробуйте ещё раз.','Обязательные поля','Ваши данные используются конфиденциально только для подбора персонала.','Выберите направление',
'Работа с клиентами','Недвижимость','Консьерж-сервис','Операции и сопровождение','Открытая кандидатура'
],
ar:[
'العمل في BOSPHORAS','علاقات مهنية تدوم.',
'تجمع Bosphoras في إسطنبول خدمات الاستشارة والعناية بالعملاء. نرحب بمن يقدّر السرية والدقة والاهتمام الحقيقي بالآخرين.','إسطنبول · غالاتابورت',
'أسلوب عملنا','كل تواصل يعكس سمعتنا. نثمّن الإصغاء والإجابات الواضحة والمتابعة الدقيقة حضورياً وعن بُعد.',
'مجالات العمل','علاقات العملاء الراقية والاستقبال','الاستشارات العقارية في تركيا وخارجها','الكونسيرج والتجارب الخاصة','التنسيق التشغيلي ومتابعة الملفات',
'ما نبحث عنه','تواصل ممتاز وإتقان مهني للفرنسية أو الإنجليزية وخبرة في خدمة العملاء وتوفر وأسلوب مهني راقٍ. نختار على أساس الكفاءة والالتزام بالخدمة.',
'قدّم طلبك','عرّفنا بخبرتك واللغات التي تستخدمها في العمل. نرحب بالترشح التلقائي.',
'الاسم الكامل','البريد الإلكتروني','الهاتف / واتساب','اللغات المستخدمة مهنياً','القسم المطلوب','المسيرة والخبرة','لينكدإن أو ملف أعمال (اختياري)','السيرة الذاتية PDF أو DOCX (اختياري)','الحد الأقصى 2 ميغابايت. ترسل سيرتك الذاتية فقط إلى فريق التوظيف عبر البريد الإلكتروني.',
'أوافق على معالجة بياناتي لدراسة طلبي والتواصل معي.','إرسال الطلب','جارٍ الإرسال…','تم تسجيل طلبك. سنتواصل معك قريباً.','تم حفظ الطلب. لم يتأكد إرسال الرسائل؛ يمكن لفريقنا الاطلاع عليه في نظام إدارة العلاقات.','حدث خطأ. يرجى المحاولة مجدداً.','حقول إلزامية','تُعالج معلوماتك بسرية ولأغراض التوظيف فقط.','اختر مجالاً',
'علاقات العملاء','الاستشارات العقارية','الكونسيرج','التنسيق والمتابعة','طلب عام'
],
tr:[
'BOSPHORAS KARİYER','Güvene dayanan ilişkiler.',
'Bosphoras, İstanbul’da danışmanlık ve kişiye özel hizmet alanlarını bir araya getiriyor. Gizliliğe, titizliğe ve özenli iletişime değer veren adaylarla tanışmak istiyoruz.','İSTANBUL · GALATAPORT',
'Çalışma anlayışımız','Her görüşme itibarımızı temsil eder. Dikkatle dinlemeye, açık iletişime ve yüz yüze ya da uzaktan kesintisiz takibe önem veririz.',
'Çalışma alanları','Üst düzey müşteri ilişkileri','Türkiye ve yurt dışı gayrimenkul danışmanlığı','Özel concierge hizmetleri','Operasyon ve dosya takibi',
'Aradığımız nitelikler','Güçlü iletişim, profesyonel düzeyde Fransızca veya İngilizce, müşteri ilişkileri deneyimi, ulaşılabilirlik ve özenli profesyonel duruş. Yetkinliğe ve hizmet anlayışına değer veririz.',
'Başvuru yapın','Deneyiminizi ve iş hayatında kullandığınız dilleri anlatın. Genel başvuruları da kabul ediyoruz.',
'Ad soyad','E-posta','Telefon / WhatsApp','Profesyonel diller','İlgilendiğiniz alan','Deneyim ve geçmiş','LinkedIn veya portföy (isteğe bağlı)','Özgeçmiş — PDF / DOCX (isteğe bağlı)','En fazla 2 MB. Özgeçmişiniz yalnızca işe alım ekibimize e-posta eki olarak iletilir.',
'Başvurumun değerlendirilmesi ve benimle iletişime geçilmesi için verilerimin işlenmesini kabul ediyorum.','Başvuruyu gönder','Gönderiliyor…','Başvurunuz kaydedildi. En kısa zamanda sizinle iletişime geçeceğiz.','Başvuru kaydedildi. E-posta gönderimi doğrulanamadı; ekibimiz CRM üzerinden görebilir.','Bir hata oluştu. Lütfen tekrar deneyin.','Zorunlu alanlar','Bilgileriniz yalnızca işe alım için gizlilikle işlenir.','Alan seçin',
'Müşteri ilişkileri','Gayrimenkul danışmanlığı','Concierge','Operasyon ve takip','Genel başvuru'
],
de:[
'KARRIERE BEI BOSPHORAS','Vertrauen beginnt mit Menschen.',
'Bosphoras vereint in Istanbul Beratung und individuelle Dienstleistungen. Wir freuen uns über Menschen mit Diskretion, Genauigkeit und echter Aufmerksamkeit für Kunden.','ISTANBUL · GALATAPORT',
'Unsere Arbeitsweise','Jeder Kontakt prägt unseren Ruf. Wir legen Wert auf Zuhören, klare Antworten und eine verlässliche Betreuung vor Ort und aus der Ferne.',
'Unsere Bereiche','Exklusive Kundenbetreuung','Immobilienberatung in der Türkei und international','Private Concierge-Services','Koordination und Betreuung',
'Was uns wichtig ist','Ausgezeichnete Kommunikation, verhandlungssicheres Französisch oder Englisch, Erfahrung im Kundenkontakt, Verfügbarkeit und professionelles Auftreten. Wir achten auf Kompetenz und Serviceorientierung.',
'Jetzt bewerben','Erzählen Sie uns von Ihrem Werdegang und Ihren Arbeitssprachen. Initiativbewerbungen sind willkommen.',
'Vor- und Nachname','E-Mail-Adresse','Telefon / WhatsApp','Beruflich genutzte Sprachen','Interessengebiet','Erfahrung und Werdegang','LinkedIn oder Portfolio (optional)','Lebenslauf — PDF / DOCX (optional)','Maximal 2 MB. Ihr Lebenslauf wird nur unserem Recruiting-Team als E-Mail-Anhang zugesandt.',
'Ich stimme der Verarbeitung meiner Daten zur Prüfung meiner Bewerbung und zur Kontaktaufnahme zu.','Bewerbung senden','Wird gesendet…','Ihre Bewerbung ist eingegangen. Wir melden uns in Kürze.','Ihre Bewerbung wurde gespeichert. Der E-Mail-Versand ist nicht bestätigt; das Team findet sie im CRM.','Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.','Pflichtfelder','Ihre Angaben werden vertraulich und ausschließlich für die Personalauswahl behandelt.','Bereich wählen',
'Kundenbetreuung','Immobilienberatung','Concierge','Betrieb & Betreuung','Initiativbewerbung'
],
es:[
'TRABAJA EN BOSPHORAS','Relaciones que perduran.',
'Bosphoras reúne en Estambul servicios de asesoría y atención personalizada. Buscamos personas que valoren la discreción, la precisión y el trato atento.','ESTAMBUL · GALATAPORT',
'Nuestra forma de trabajar','Cada conversación refleja nuestra reputación. Valoramos la escucha, las respuestas claras y un seguimiento constante, presencial y a distancia.',
'Áreas profesionales','Atención al cliente premium','Asesoría inmobiliaria en Turquía e internacional','Conserjería y experiencias privadas','Operaciones y seguimiento',
'Lo que valoramos','Comunicación excelente, dominio profesional del francés o inglés, experiencia en atención al cliente, disponibilidad y presencia profesional. Seleccionamos por capacidad y vocación de servicio.',
'Presenta tu candidatura','Cuéntanos tu experiencia y los idiomas que usas profesionalmente. Aceptamos candidaturas espontáneas.',
'Nombre completo','Correo electrónico','Teléfono / WhatsApp','Idiomas de uso profesional','Área de interés','Trayectoria y experiencia','LinkedIn o portafolio (opcional)','CV — PDF / DOCX (opcional)','Máximo 2 MB. Tu CV se envía únicamente al equipo de selección como adjunto por correo.',
'Acepto el tratamiento de mis datos para evaluar mi candidatura y contactar conmigo.','Enviar candidatura','Enviando…','Tu candidatura ha quedado registrada. Nos pondremos en contacto pronto.','La candidatura está guardada. No se confirmó el envío de correos; el equipo puede verla en el CRM.','Se produjo un error. Vuelve a intentarlo.','Campos obligatorios','Tus datos se tratan de forma confidencial y solo para selección de personal.','Selecciona un área',
'Relaciones con clientes','Asesoría inmobiliaria','Conserjería','Operaciones y seguimiento','Candidatura espontánea'
],
it:[
'LAVORA CON BOSPHORAS','Relazioni costruite nel tempo.',
'Bosphoras riunisce a Istanbul consulenza e servizi personalizzati. Cerchiamo persone che condividano riservatezza, precisione e autentica attenzione per i clienti.','ISTANBUL · GALATAPORT',
'Il nostro metodo','Ogni conversazione riflette la nostra reputazione. Apprezziamo l’ascolto, le risposte chiare e un’assistenza costante, di persona e a distanza.',
'Aree di attività','Relazioni con i clienti premium','Consulenza immobiliare in Turchia e all’estero','Concierge ed esperienze private','Operazioni e gestione delle pratiche',
'Il profilo ideale','Comunicazione eccellente, francese o inglese professionale, esperienza con i clienti, disponibilità e comportamento professionale curato. Valutiamo competenza e sensibilità al servizio.',
'Invia la candidatura','Raccontaci la tua esperienza e le lingue che usi nel lavoro. Sono benvenute candidature spontanee.',
'Nome e cognome','Indirizzo e-mail','Telefono / WhatsApp','Lingue usate professionalmente','Area di interesse','Esperienza professionale','LinkedIn o portfolio (facoltativo)','CV — PDF / DOCX (facoltativo)','Massimo 2 MB. Il CV viene inviato solo al nostro team di selezione come allegato e-mail.',
'Acconsento al trattamento dei miei dati per valutare la candidatura e ricontattarmi.','Invia candidatura','Invio in corso…','La candidatura è stata registrata. Ti contatteremo presto.','La candidatura è salvata. L’invio delle e-mail non è stato confermato; il team la trova nel CRM.','Si è verificato un errore. Riprova.','Campi obbligatori','Le informazioni sono trattate con riservatezza esclusivamente per la selezione.','Seleziona un’area',
'Relazioni clienti','Consulenza immobiliare','Concierge','Operazioni e follow-up','Candidatura spontanea'
],
pt:[
'CARREIRAS NA BOSPHORAS','Relações construídas com confiança.',
'A Bosphoras reúne em Istambul consultoria e serviços personalizados. Procuramos pessoas que valorizem a discrição, a precisão e a atenção genuína aos clientes.','ISTAMBUL · GALATAPORT',
'A nossa forma de trabalhar','Cada conversa reflete a nossa reputação. Privilegiamos a escuta, respostas claras e acompanhamento consistente, presencialmente ou à distância.',
'Áreas de atuação','Relações com clientes premium','Consultoria imobiliária na Turquia e internacional','Concierge e experiências privadas','Operações e acompanhamento',
'O que valorizamos','Comunicação excelente, fluência profissional em francês ou inglês, experiência com clientes, disponibilidade e postura profissional. Selecionamos pela competência e dedicação ao serviço.',
'Candidate-se','Conte-nos a sua experiência e os idiomas que utiliza profissionalmente. Aceitamos candidaturas espontâneas.',
'Nome completo','E-mail','Telefone / WhatsApp','Idiomas profissionais','Área de interesse','Experiência e percurso','LinkedIn ou portfólio (opcional)','CV — PDF / DOCX (opcional)','Máximo 2 MB. O CV é enviado apenas à nossa equipa de recrutamento como anexo de e-mail.',
'Autorizo o tratamento dos meus dados para avaliar a candidatura e entrar em contacto comigo.','Enviar candidatura','A enviar…','A candidatura foi registada. Entraremos em contacto em breve.','Candidatura guardada. O envio do e-mail não foi confirmado; a equipa pode vê-la no CRM.','Ocorreu um erro. Tente novamente.','Campos obrigatórios','Os seus dados são tratados confidencialmente apenas para recrutamento.','Selecionar área',
'Relações com clientes','Consultoria imobiliária','Concierge','Operações e acompanhamento','Candidatura espontânea'
],
zh:[
'加入 BOSPHORAS','以信任建立长久合作。',
'Bosphoras 在伊斯坦布尔提供咨询及个性化高端服务。我们欢迎重视保密、严谨和客户体验的专业人才。','伊斯坦布尔 · GALATAPORT',
'我们的工作方式','每次沟通都代表品牌声誉。我们重视倾听、清晰答复以及线上线下持续跟进。',
'职业方向','高端客户关系与接待','土耳其及国际房地产咨询','私人礼宾与专属体验','运营协调与客户跟进',
'我们重视','优秀的沟通能力、专业水平的法语或英语、客户服务经验、工作时间灵活性以及得体的职业素养。我们以能力和服务意识为依据。',
'提交申请','请介绍您的工作经验和常用工作语言。欢迎主动投递简历。',
'姓名','电子邮箱','电话 / WhatsApp','工作中使用的语言','意向岗位','工作经历','LinkedIn 或作品集（选填）','简历 — PDF / DOCX（选填）','最大 2 MB。简历仅作为电子邮件附件发送至招聘团队。',
'我同意 Bosphoras 为审阅我的申请并与我联系而处理个人信息。','提交申请','正在发送…','我们已收到您的申请，将尽快与您联系。','申请已保存。邮件发送状态尚未确认；团队可在 CRM 中查看。','发生错误，请重试。','必填项','您的信息仅用于招聘，并予以保密处理。','选择部门',
'客户关系','房地产咨询','私人礼宾','运营与跟进','主动申请'
]
};
export function careerCopy(locale: CareerLocale): Copy {
  const values = c[locale] || c.fr;
  return Object.fromEntries(keys.map((key,i)=>[key,values[i] ?? c.en[i]])) as Copy;
}
export const careerAcknowledgements: Record<CareerLocale,{subject:string;body:string}> = {
fr:{subject:'Nous avons bien reçu votre candidature — Bosphoras',body:'Bonjour,\n\nNous vous confirmons la bonne réception de votre candidature auprès de Bosphoras. Notre équipe prendra connaissance de votre parcours avec attention et reviendra vers vous prochainement.\n\nNous vous remercions pour votre intérêt et la confiance accordée à notre maison.\n\nÉquipe Recrutement Bosphoras\nIstanbul · Galataport'},
en:{subject:'Your application has been received — Bosphoras',body:'Hello,\n\nThank you for applying to Bosphoras. We confirm that your application has been received. Our team will review your experience carefully and get back to you soon.\n\nWe appreciate your interest in joining us.\n\nBosphoras Recruitment Team\nIstanbul · Galataport'},
ru:{subject:'Ваша заявка получена — Bosphoras',body:'Здравствуйте!\n\nБлагодарим вас за интерес к Bosphoras. Ваша заявка успешно получена. Наша команда внимательно рассмотрит ваш опыт и свяжется с вами в ближайшее время.\n\nС уважением,\nКоманда по подбору персонала Bosphoras\nСтамбул · Галатапорт'},
ar:{subject:'تم استلام طلب التوظيف — Bosphoras',body:'مرحباً،\n\nنؤكد استلام طلب التوظيف الخاص بكم لدى Bosphoras. سيراجع فريقنا خبراتكم بعناية وسنتواصل معكم قريباً.\n\nنشكر لكم اهتمامكم بالانضمام إلينا.\n\nفريق التوظيف في Bosphoras\nإسطنبول · غالاتابورت'},
tr:{subject:'Başvurunuz alındı — Bosphoras',body:'Merhaba,\n\nBosphoras’a yaptığınız iş başvurusu tarafımıza ulaşmıştır. Ekibimiz deneyiminizi özenle değerlendirecek ve en kısa zamanda sizinle iletişime geçecektir.\n\nİlginiz için teşekkür ederiz.\n\nBosphoras İnsan Kaynakları\nİstanbul · Galataport'},
de:{subject:'Ihre Bewerbung ist eingegangen — Bosphoras',body:'Guten Tag,\n\nwir bestätigen den Eingang Ihrer Bewerbung bei Bosphoras. Unser Team prüft Ihren Werdegang sorgfältig und meldet sich in Kürze bei Ihnen.\n\nVielen Dank für Ihr Interesse.\n\nBosphoras Recruiting-Team\nIstanbul · Galataport'},
es:{subject:'Hemos recibido tu candidatura — Bosphoras',body:'Hola,\n\nConfirmamos que hemos recibido tu candidatura en Bosphoras. Nuestro equipo revisará tu experiencia con atención y se pondrá en contacto contigo próximamente.\n\nGracias por tu interés.\n\nEquipo de selección de Bosphoras\nEstambul · Galataport'},
it:{subject:'Abbiamo ricevuto la tua candidatura — Bosphoras',body:'Buongiorno,\n\nconfermiamo di aver ricevuto la tua candidatura a Bosphoras. Il nostro team valuterà con attenzione la tua esperienza e ti ricontatterà a breve.\n\nGrazie per l’interesse.\n\nTeam Recruiting Bosphoras\nIstanbul · Galataport'},
pt:{subject:'Recebemos a sua candidatura — Bosphoras',body:'Olá,\n\nConfirmamos a receção da sua candidatura à Bosphoras. A nossa equipa analisará a sua experiência com atenção e entrará em contacto em breve.\n\nAgradecemos o seu interesse.\n\nEquipa de Recrutamento Bosphoras\nIstambul · Galataport'},
zh:{subject:'您的申请已收到 — Bosphoras',body:'您好：\n\n感谢您关注 Bosphoras。您的求职申请已成功收到。我们的团队将认真审阅您的经历，并尽快与您联系。\n\n感谢您的信任。\n\nBosphoras 招聘团队\n伊斯坦布尔 · Galataport'},
};
