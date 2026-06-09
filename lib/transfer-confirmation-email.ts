const nodemailer = require('nodemailer');

type BookingEmailData = {
  locale?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  pickup: string;
  dropoff: string;
  vehicle: string;
  date: string;
  flightNumber?: string;
  passengerCount?: string;
  sessionId?: string;
  paymentMode?: string;
  currency?: string;
  amountPaidToday?: string;
  balanceOnBoard?: string;
  refundablePolicy?: string;
  baseUrl: string;
};

const supportPhone = '+905431753724';
const whatsappUrl = 'https://wa.me/905431753724';
const replyEmail = 'contact@bosphoras.com';

type LangPack = {
  subject: string;
  badge: string;
  hello: string;
  intro: string;
  paxTitle: string;
  paxText: string;
  summary: string;
  pickup: string;
  dropoff: string;
  vehicle: string;
  date: string;
  flight: string;
  passengers: string;
  phone: string;
  helpTitle: string;
  helpText: string;
  whatsapp: string;
  website: string;
  paymentTitle: string;
  paymentOnlineTitle: string;
  paymentDepositTitle: string;
  paidToday: string;
  balanceOnBoard: string;
  currency: string;
  refundTitle: string;
  refundText: string;
  depositNotice: string;
  onlineNotice: string;
};

const lang: Record<string, LangPack> = {
  fr: {
    subject: 'Votre réservation Bosphoras Mobility est confirmée',
    badge: 'Réservation confirmée',
    hello: 'Bonjour',
    intro: 'Votre transfert privé à Istanbul est confirmé. Votre chauffeur vous attendra à la sortie avec votre nom et restera joignable par téléphone pour vous assister si besoin.',
    paxTitle: 'Important — informations passagers',
    paxText: 'Merci de répondre à cet email avec les noms, prénoms et numéros de passeport ou pièce d’identité de chaque passager. La réglementation turque du transport privé impose l’enregistrement des passagers avant le départ du véhicule.',
    summary: 'Résumé',
    pickup: 'Départ',
    dropoff: 'Arrivée',
    vehicle: 'Véhicule',
    date: 'Date',
    flight: 'Vol',
    passengers: 'Passagers',
    phone: 'Téléphone',
    helpTitle: 'Besoin d’aide ?',
    helpText: 'Contactez-nous par WhatsApp ou répondez directement à cet email.',
    whatsapp: 'Assistance WhatsApp',
    website: 'Voir le site',
    paymentTitle: 'Détails du paiement',
    paymentOnlineTitle: 'Paiement total en ligne',
    paymentDepositTitle: 'Acompte payé — solde à bord',
    paidToday: 'Payé aujourd’hui',
    balanceOnBoard: 'Reste à payer à bord',
    currency: 'Devise',
    refundTitle: 'Remboursement',
    refundText: 'Remboursable sans condition jusqu’à 24h avant la prise en charge.',
    depositNotice: 'Votre réservation est bloquée. Le solde restant sera réglé directement à bord du véhicule dans la devise choisie.',
    onlineNotice: 'Votre réservation est confirmée avec paiement total en ligne et remise de 15%.',
  },
  en: {
    subject: 'Your Bosphoras Mobility booking is confirmed',
    badge: 'Booking confirmed',
    hello: 'Hello',
    intro: 'Your private transfer in Istanbul is confirmed. Your chauffeur will wait at the exit with your name and remain reachable by phone if you need support.',
    paxTitle: 'Important — passenger information',
    paxText: 'Please reply to this email with the full names and passport or ID numbers of every passenger. Turkish private transport rules require passenger registration before vehicle departure.',
    summary: 'Summary',
    pickup: 'Pickup',
    dropoff: 'Drop-off',
    vehicle: 'Vehicle',
    date: 'Date',
    flight: 'Flight',
    passengers: 'Passengers',
    phone: 'Phone',
    helpTitle: 'Need help?',
    helpText: 'Contact us on WhatsApp or reply directly to this email.',
    whatsapp: 'WhatsApp assistance',
    website: 'Visit website',
    paymentTitle: 'Payment details',
    paymentOnlineTitle: 'Full online payment',
    paymentDepositTitle: 'Deposit paid — balance on board',
    paidToday: 'Paid today',
    balanceOnBoard: 'Balance to pay on board',
    currency: 'Currency',
    refundTitle: 'Refund',
    refundText: 'Fully refundable without conditions up to 24 hours before pickup.',
    depositNotice: 'Your reservation is secured. The remaining balance will be paid directly on board in the selected currency.',
    onlineNotice: 'Your reservation is confirmed with full online payment and 15% discount.',
  },
  ru: {
    subject: 'Ваше бронирование Bosphoras Mobility подтверждено',
    badge: 'Бронирование подтверждено',
    hello: 'Здравствуйте',
    intro: 'Ваш частный трансфер в Стамбуле подтвержден. Водитель будет ждать у выхода с вашим именем и будет на связи по телефону для помощи.',
    paxTitle: 'Важно — данные пассажиров',
    paxText: 'Пожалуйста, ответьте на это письмо и отправьте имена, фамилии и номера паспортов или документов каждого пассажира. Правила частных перевозок в Турции требуют регистрации пассажиров до отправления автомобиля.',
    summary: 'Детали',
    pickup: 'Откуда',
    dropoff: 'Куда',
    vehicle: 'Автомобиль',
    date: 'Дата',
    flight: 'Рейс',
    passengers: 'Пассажиры',
    phone: 'Телефон',
    helpTitle: 'Нужна помощь?',
    helpText: 'Свяжитесь с нами в WhatsApp или ответьте на это письмо.',
    whatsapp: 'WhatsApp помощь',
    website: 'Сайт',
    paymentTitle: 'Детали оплаты',
    paymentOnlineTitle: 'Полная онлайн-оплата',
    paymentDepositTitle: 'Депозит оплачен — остаток в автомобиле',
    paidToday: 'Оплачено сегодня',
    balanceOnBoard: 'Остаток к оплате в автомобиле',
    currency: 'Валюта',
    refundTitle: 'Возврат',
    refundText: 'Возврат без условий до 24 часов до подачи автомобиля.',
    depositNotice: 'Ваше бронирование закреплено. Остаток будет оплачен напрямую в автомобиле в выбранной валюте.',
    onlineNotice: 'Ваше бронирование подтверждено с полной онлайн-оплатой и скидкой 15%.',
  },
  ar: {
    subject: 'تم تأكيد حجزك مع Bosphoras Mobility',
    badge: 'تم تأكيد الحجز',
    hello: 'مرحباً',
    intro: 'تم تأكيد النقل الخاص بك في إسطنبول. سينتظرك السائق عند المخرج باسمك وسيبقى متاحاً عبر الهاتف للمساعدة.',
    paxTitle: 'مهم — معلومات الركاب',
    paxText: 'يرجى الرد على هذا البريد بأسماء الركاب وأرقام جواز السفر أو الهوية. تتطلب لوائح النقل الخاص في تركيا تسجيل الركاب قبل انطلاق المركبة.',
    summary: 'الملخص',
    pickup: 'نقطة الانطلاق',
    dropoff: 'الوجهة',
    vehicle: 'السيارة',
    date: 'التاريخ',
    flight: 'الرحلة',
    passengers: 'الركاب',
    phone: 'الهاتف',
    helpTitle: 'هل تحتاج مساعدة؟',
    helpText: 'تواصل معنا عبر WhatsApp أو رد مباشرة على هذا البريد.',
    whatsapp: 'مساعدة WhatsApp',
    website: 'زيارة الموقع',
    paymentTitle: 'تفاصيل الدفع',
    paymentOnlineTitle: 'دفع كامل عبر الإنترنت',
    paymentDepositTitle: 'تم دفع العربون — الباقي داخل السيارة',
    paidToday: 'تم الدفع اليوم',
    balanceOnBoard: 'المبلغ المتبقي داخل السيارة',
    currency: 'العملة',
    refundTitle: 'الاسترداد',
    refundText: 'قابل للاسترداد بدون شروط حتى 24 ساعة قبل موعد الاستقبال.',
    depositNotice: 'تم تثبيت حجزك. سيتم دفع المبلغ المتبقي مباشرة داخل السيارة بالعملة المختارة.',
    onlineNotice: 'تم تأكيد حجزك مع دفع كامل عبر الإنترنت وخصم 15%.',
  },
  zh: {
    subject: '您的 Bosphoras Mobility 预订已确认',
    badge: '预订已确认',
    hello: '您好',
    intro: '您在伊斯坦布尔的私人接送已确认。司机将在出口处举您的姓名牌等候，并可通过电话提供协助。',
    paxTitle: '重要 — 乘客信息',
    paxText: '请回复此邮件，提供每位乘客的姓名以及护照或身份证件号码。土耳其私人交通规定要求车辆出发前登记乘客。',
    summary: '摘要',
    pickup: '出发地',
    dropoff: '目的地',
    vehicle: '车辆',
    date: '日期',
    flight: '航班',
    passengers: '乘客',
    phone: '电话',
    helpTitle: '需要帮助？',
    helpText: '请通过 WhatsApp 联系我们或直接回复此邮件。',
    whatsapp: 'WhatsApp 协助',
    website: '访问网站',
    paymentTitle: '付款详情',
    paymentOnlineTitle: '全额在线付款',
    paymentDepositTitle: '订金已支付 — 车上支付余款',
    paidToday: '今天已支付',
    balanceOnBoard: '车上待支付余额',
    currency: '货币',
    refundTitle: '退款',
    refundText: '接送前24小时可无条件退款。',
    depositNotice: '您的预订已锁定。剩余金额将在车上以所选货币支付。',
    onlineNotice: '您的预订已通过全额在线付款确认，并享受15%折扣。',
  },
  de: {
    subject: 'Ihre Bosphoras Mobility Buchung ist bestätigt',
    badge: 'Buchung bestätigt',
    hello: 'Hallo',
    intro: 'Ihr privater Transfer in Istanbul ist bestätigt. Ihr Chauffeur wartet am Ausgang mit Ihrem Namen und bleibt telefonisch erreichbar.',
    paxTitle: 'Wichtig — Passagierdaten',
    paxText: 'Bitte antworten Sie auf diese E-Mail mit Vorname, Nachname und Reisepass- oder Ausweisnummer jedes Passagiers. Türkische Vorschriften verlangen die Registrierung vor Abfahrt.',
    summary: 'Übersicht',
    pickup: 'Abholung',
    dropoff: 'Ziel',
    vehicle: 'Fahrzeug',
    date: 'Datum',
    flight: 'Flug',
    passengers: 'Passagiere',
    phone: 'Telefon',
    helpTitle: 'Brauchen Sie Hilfe?',
    helpText: 'Kontaktieren Sie uns per WhatsApp oder antworten Sie direkt auf diese E-Mail.',
    whatsapp: 'WhatsApp Hilfe',
    website: 'Website besuchen',
    paymentTitle: 'Zahlungsdetails',
    paymentOnlineTitle: 'Vollständige Online-Zahlung',
    paymentDepositTitle: 'Anzahlung bezahlt — Restbetrag im Fahrzeug',
    paidToday: 'Heute bezahlt',
    balanceOnBoard: 'Restbetrag im Fahrzeug',
    currency: 'Währung',
    refundTitle: 'Erstattung',
    refundText: 'Bis 24 Stunden vor Abholung ohne Bedingungen erstattbar.',
    depositNotice: 'Ihre Reservierung ist gesichert. Der Restbetrag wird direkt im Fahrzeug in der gewählten Währung bezahlt.',
    onlineNotice: 'Ihre Reservierung ist mit vollständiger Online-Zahlung und 15% Rabatt bestätigt.',
  },
  es: {
    subject: 'Su reserva Bosphoras Mobility está confirmada',
    badge: 'Reserva confirmada',
    hello: 'Hola',
    intro: 'Su traslado privado en Estambul está confirmado. Su chófer le esperará en la salida con su nombre y seguirá disponible por teléfono.',
    paxTitle: 'Importante — datos de pasajeros',
    paxText: 'Responda a este email con nombres, apellidos y números de pasaporte o documento de cada pasajero. La normativa turca exige registrar los pasajeros antes de la salida.',
    summary: 'Resumen',
    pickup: 'Salida',
    dropoff: 'Llegada',
    vehicle: 'Vehículo',
    date: 'Fecha',
    flight: 'Vuelo',
    passengers: 'Pasajeros',
    phone: 'Teléfono',
    helpTitle: '¿Necesita ayuda?',
    helpText: 'Contáctenos por WhatsApp o responda directamente a este email.',
    whatsapp: 'Asistencia WhatsApp',
    website: 'Ver sitio',
    paymentTitle: 'Detalles del pago',
    paymentOnlineTitle: 'Pago online completo',
    paymentDepositTitle: 'Depósito pagado — saldo a bordo',
    paidToday: 'Pagado hoy',
    balanceOnBoard: 'Saldo a pagar a bordo',
    currency: 'Divisa',
    refundTitle: 'Reembolso',
    refundText: 'Reembolsable sin condiciones hasta 24 horas antes de la recogida.',
    depositNotice: 'Su reserva está asegurada. El saldo restante se pagará directamente a bordo en la divisa elegida.',
    onlineNotice: 'Su reserva está confirmada con pago online completo y 15% de descuento.',
  },
  it: {
    subject: 'La tua prenotazione Bosphoras Mobility è confermata',
    badge: 'Prenotazione confermata',
    hello: 'Ciao',
    intro: 'Il tuo transfer privato a Istanbul è confermato. L’autista ti aspetterà all’uscita con il tuo nome e sarà raggiungibile telefonicamente.',
    paxTitle: 'Importante — dati passeggeri',
    paxText: 'Rispondi a questa email con nome, cognome e numero di passaporto o documento di ogni passeggero. La normativa turca richiede la registrazione prima della partenza.',
    summary: 'Riepilogo',
    pickup: 'Partenza',
    dropoff: 'Arrivo',
    vehicle: 'Veicolo',
    date: 'Data',
    flight: 'Volo',
    passengers: 'Passeggeri',
    phone: 'Telefono',
    helpTitle: 'Hai bisogno di aiuto?',
    helpText: 'Contattaci su WhatsApp o rispondi direttamente a questa email.',
    whatsapp: 'Assistenza WhatsApp',
    website: 'Visita il sito',
    paymentTitle: 'Dettagli pagamento',
    paymentOnlineTitle: 'Pagamento online completo',
    paymentDepositTitle: 'Deposito pagato — saldo a bordo',
    paidToday: 'Pagato oggi',
    balanceOnBoard: 'Saldo da pagare a bordo',
    currency: 'Valuta',
    refundTitle: 'Rimborso',
    refundText: 'Rimborsabile senza condizioni fino a 24 ore prima del pickup.',
    depositNotice: 'La prenotazione è bloccata. Il saldo restante sarà pagato direttamente a bordo nella valuta scelta.',
    onlineNotice: 'La prenotazione è confermata con pagamento online completo e sconto del 15%.',
  },
  pt: {
    subject: 'A sua reserva Bosphoras Mobility está confirmada',
    badge: 'Reserva confirmada',
    hello: 'Olá',
    intro: 'O seu transfer privado em Istambul está confirmado. O motorista aguardará na saída com o seu nome e estará contactável por telefone.',
    paxTitle: 'Importante — dados dos passageiros',
    paxText: 'Responda a este email com nomes, apelidos e números de passaporte ou documento de cada passageiro. A regulamentação turca exige o registo antes da partida.',
    summary: 'Resumo',
    pickup: 'Partida',
    dropoff: 'Destino',
    vehicle: 'Veículo',
    date: 'Data',
    flight: 'Voo',
    passengers: 'Passageiros',
    phone: 'Telefone',
    helpTitle: 'Precisa de ajuda?',
    helpText: 'Contacte-nos por WhatsApp ou responda diretamente a este email.',
    whatsapp: 'Assistência WhatsApp',
    website: 'Ver site',
    paymentTitle: 'Detalhes do pagamento',
    paymentOnlineTitle: 'Pagamento online total',
    paymentDepositTitle: 'Depósito pago — saldo a bordo',
    paidToday: 'Pago hoje',
    balanceOnBoard: 'Saldo a pagar a bordo',
    currency: 'Moeda',
    refundTitle: 'Reembolso',
    refundText: 'Reembolsável sem condições até 24 horas antes da recolha.',
    depositNotice: 'A sua reserva está garantida. O saldo restante será pago diretamente a bordo na moeda escolhida.',
    onlineNotice: 'A sua reserva está confirmada com pagamento online total e 15% de desconto.',
  },
};

function localeKey(locale?: string) { return lang[locale || ''] ? String(locale) : 'en'; }
function esc(v?: string) { return String(v || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] || c)); }
function row(label: string, value?: string) { return value ? `<tr><td style="padding:9px 0;color:#64748b;font-size:13px;width:38%">${esc(label)}</td><td style="padding:9px 0;color:#0f172a;font-size:14px;font-weight:700">${esc(value)}</td></tr>` : ''; }
function textLine(label: string, value?: string) { return value ? `${label} : ${value}\n` : ''; }
function getTransporter() { const host = process.env.SMTP_HOST; const port = Number(process.env.SMTP_PORT || 465); const secure = String(process.env.SMTP_SECURE || 'true') === 'true'; const user = process.env.SMTP_USER; const pass = process.env.SMTP_PASS; if (!host || !user || !pass) return null; return nodemailer.createTransport({ host, port, secure, auth: { user, pass } }); }
function getFrom() { return process.env.MAIL_FROM || `Bosphoras Mobility <${replyEmail}>`; }
function normalizeCurrency(currency?: string) { const value = String(currency || 'EUR').trim().toUpperCase(); return value === 'USD' || value === 'GBP' || value === 'CHF' || value === 'EUR' ? value : 'EUR'; }
function formatMoney(amount?: string, currency?: string) {
  const number = Number(String(amount || '').replace(',', '.'));
  if (!Number.isFinite(number) || number <= 0) return '';
  const cur = normalizeCurrency(currency);
  return new Intl.NumberFormat(cur === 'USD' ? 'en-US' : cur === 'GBP' ? 'en-GB' : cur === 'CHF' ? 'de-CH' : 'fr-FR', { style: 'currency', currency: cur, maximumFractionDigits: number % 1 ? 2 : 0 }).format(number);
}
function isDepositPayment(data: BookingEmailData) { return data.paymentMode === 'deposit_onboard' && Number(String(data.balanceOnBoard || '').replace(',', '.')) > 0; }

export function buildTransferConfirmationEmail(data: BookingEmailData) {
  const key = localeKey(data.locale);
  const t = lang[key];
  const dir = key === 'ar' ? 'rtl' : 'ltr';
  const site = data.baseUrl || 'https://bosphoras.com';
  const name = `${data.firstName} ${data.lastName}`.trim();
  const currency = normalizeCurrency(data.currency);
  const paidToday = formatMoney(data.amountPaidToday, currency);
  const balance = formatMoney(data.balanceOnBoard, currency);
  const depositPayment = isDepositPayment(data);
  const paymentHeadline = depositPayment ? t.paymentDepositTitle : t.paymentOnlineTitle;
  const paymentNotice = depositPayment ? t.depositNotice : t.onlineNotice;
  const paymentRows = `${row(t.currency, currency)}${row(t.paidToday, paidToday)}${depositPayment ? row(t.balanceOnBoard, balance) : ''}`;
  const paymentText = `${t.paymentTitle}\n${paymentHeadline}\n${textLine(t.currency, currency)}${textLine(t.paidToday, paidToday)}${depositPayment ? textLine(t.balanceOnBoard, balance) : ''}${paymentNotice}\n${t.refundText}`;

  const html = `<div dir="${dir}" style="background:#f4f6f8;padding:28px 12px;font-family:Arial,sans-serif;color:#0f172a"><table width="100%" style="max-width:680px;margin:auto;background:#fff;border-radius:28px;overflow:hidden;border:1px solid #e5e7eb"><tr><td style="padding:30px 32px;background:#0b1220;color:#fff"><div style="font-family:Georgia,serif;font-size:24px;letter-spacing:6px;text-transform:uppercase">Bosphoras</div><div style="margin-top:6px;font-size:10px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#cbd5e1">Private Mobility Istanbul</div></td></tr><tr><td style="padding:32px"><div style="display:inline-block;border-radius:999px;background:#ecfdf5;color:#047857;padding:8px 13px;font-size:12px;font-weight:800;text-transform:uppercase">${esc(t.badge)}</div><h1 style="font-size:30px;color:#0f172a">${esc(t.hello)} ${esc(name)},</h1><p style="font-size:16px;line-height:1.75;color:#334155">${esc(t.intro)}</p><div style="margin:26px 0;padding:22px;border-radius:22px;background:#fff7ed;border:1px solid #fed7aa"><h2 style="margin:0 0 12px;color:#0f172a">${esc(t.paymentTitle)}</h2><div style="display:inline-block;border-radius:999px;background:#0b1220;color:#fff;padding:8px 13px;font-size:12px;font-weight:800;margin-bottom:12px">${esc(paymentHeadline)}</div><table width="100%" style="border-top:1px solid #fed7aa;border-bottom:1px solid #fed7aa;margin:6px 0 14px">${paymentRows}</table><p style="font-size:14px;line-height:1.7;color:#334155;margin:0 0 10px"><strong>${esc(paymentNotice)}</strong></p><p style="font-size:13px;line-height:1.7;color:#64748b;margin:0"><strong>${esc(t.refundTitle)}:</strong> ${esc(t.refundText)}</p></div><div style="margin:26px 0;padding:22px;border-radius:22px;background:#f8fafc;border:1px solid #e5e7eb"><h2>${esc(t.paxTitle)}</h2><p><strong>${esc(t.paxText)}</strong></p></div><h2>${esc(t.summary)}</h2><table width="100%" style="border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;margin-bottom:24px">${row(t.pickup,data.pickup)}${row(t.dropoff,data.dropoff)}${row(t.vehicle,data.vehicle)}${row(t.date,data.date)}${row(t.flight,data.flightNumber)}${row(t.passengers,data.passengerCount)}${row(t.phone,data.phone)}${row('Stripe',data.sessionId)}</table><div style="padding:22px;border-radius:22px;background:#0b1220;color:#fff"><h2>${esc(t.helpTitle)}</h2><p style="color:#cbd5e1">${esc(t.helpText)}</p><a href="${whatsappUrl}" style="display:inline-block;background:#fff;color:#0b1220;text-decoration:none;border-radius:999px;padding:13px 18px;font-size:13px;font-weight:800;margin:0 8px 8px 0">${esc(t.whatsapp)} ${supportPhone}</a><a href="${site}" style="display:inline-block;border:1px solid rgba(255,255,255,.28);color:#fff;text-decoration:none;border-radius:999px;padding:13px 18px;font-size:13px;font-weight:800">${esc(t.website)}</a></div></td></tr><tr><td style="padding:22px 32px;background:#f8fafc;color:#64748b;font-size:12px">Bosphoras Mobility — Private Mobility Istanbul<br/>${replyEmail} · WhatsApp ${supportPhone}</td></tr></table></div>`;
  const text = `${t.badge}\n\n${t.hello} ${name},\n\n${t.intro}\n\n${paymentText}\n\n${t.paxTitle}\n${t.paxText}\n\n${t.summary}\n${t.pickup}: ${data.pickup}\n${t.dropoff}: ${data.dropoff}\n${t.vehicle}: ${data.vehicle}\n${t.date}: ${data.date}\n${t.flight}: ${data.flightNumber || ''}\n${t.passengers}: ${data.passengerCount || ''}\n${t.phone}: ${data.phone}\n\nWhatsApp: ${supportPhone}\n${site}`;
  return { subject: t.subject, html, text };
}

export function buildInternalTransferBookingEmail(data: BookingEmailData) {
  const clientName = `${data.firstName} ${data.lastName}`.trim();
  const currency = normalizeCurrency(data.currency);
  const paidToday = formatMoney(data.amountPaidToday, currency);
  const balance = formatMoney(data.balanceOnBoard, currency);
  const depositPayment = isDepositPayment(data);
  const paymentModeLabel = depositPayment ? 'Acompte payé — solde à bord' : 'Paiement total en ligne -15%';
  const subject = depositPayment ? 'Nouvelle réservation Bosphoras Mobility — acompte payé' : 'Nouvelle réservation Bosphoras Mobility — paiement confirmé';
  const text = `Nouvelle réservation confirmée\n\nUn client vient de confirmer et payer une réservation de transfert Bosphoras Mobility.\n\nPAIEMENT\n${textLine('Mode', paymentModeLabel)}${textLine('Devise', currency)}${textLine('Payé aujourd’hui', paidToday)}${depositPayment ? textLine('Reste à payer à bord', balance) : ''}${textLine('Politique remboursement', 'Remboursable sans condition jusqu’à 24h avant la prise en charge')}\nINFORMATIONS CLIENT\n${textLine('Nom complet', clientName)}${textLine('Email', data.email)}${textLine('Téléphone', data.phone)}${textLine('Langue', data.locale || 'fr')}\nDÉTAILS RÉSERVATION\n${textLine('Départ', data.pickup)}${textLine('Arrivée', data.dropoff)}${textLine('Véhicule', data.vehicle)}${textLine('Date / heure', data.date)}${textLine('Vol', data.flightNumber)}${textLine('Nombre de passagers', data.passengerCount)}${textLine('Session Stripe', data.sessionId)}\nACTION À FAIRE\nAttendre la réponse du client avec les noms, prénoms et numéros de passeport / pièce d’identité des passagers.\n\nLe client a reçu automatiquement un email lui demandant de répondre avec ces informations conformément à la réglementation turque du transport privé.`;
  const html = `<div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6"><h2>Nouvelle réservation confirmée</h2><p>Un client vient de confirmer et payer une réservation de transfert Bosphoras Mobility.</p><h3>Paiement</h3><ul><li><b>Mode :</b> ${esc(paymentModeLabel)}</li><li><b>Devise :</b> ${esc(currency)}</li><li><b>Payé aujourd’hui :</b> ${esc(paidToday)}</li>${depositPayment ? `<li><b>Reste à payer à bord :</b> ${esc(balance)}</li>` : ''}<li><b>Remboursement :</b> Remboursable sans condition jusqu’à 24h avant la prise en charge</li></ul><h3>Informations client</h3><ul><li><b>Nom complet :</b> ${esc(clientName)}</li><li><b>Email :</b> ${esc(data.email)}</li><li><b>Téléphone :</b> ${esc(data.phone)}</li><li><b>Langue :</b> ${esc(data.locale || 'fr')}</li></ul><h3>Détails réservation</h3><ul><li><b>Départ :</b> ${esc(data.pickup)}</li><li><b>Arrivée :</b> ${esc(data.dropoff)}</li><li><b>Véhicule :</b> ${esc(data.vehicle)}</li><li><b>Date / heure :</b> ${esc(data.date)}</li><li><b>Vol :</b> ${esc(data.flightNumber)}</li><li><b>Passagers :</b> ${esc(data.passengerCount)}</li><li><b>Session Stripe :</b> ${esc(data.sessionId)}</li></ul><h3>Action à faire</h3><p>Attendre la réponse du client avec les noms, prénoms et numéros de passeport / pièce d’identité des passagers.</p><p>Le client a reçu automatiquement un email lui demandant de répondre avec ces informations conformément à la réglementation turque du transport privé.</p></div>`;
  return { subject, html, text };
}

export async function sendTransferConfirmationEmail(data: BookingEmailData) {
  const transporter = getTransporter();
  if (!transporter) return { skipped: true };
  const email = buildTransferConfirmationEmail(data);
  await transporter.sendMail({ from: getFrom(), to: data.email, replyTo: replyEmail, subject: email.subject, html: email.html, text: email.text });
  return { sent: true };
}

export async function sendInternalTransferBookingEmail(data: BookingEmailData) {
  const transporter = getTransporter();
  if (!transporter) return { skipped: true };
  const email = buildInternalTransferBookingEmail(data);
  await transporter.sendMail({ from: getFrom(), to: replyEmail, replyTo: data.email || replyEmail, subject: email.subject, html: email.html, text: email.text });
  return { sent: true };
}
