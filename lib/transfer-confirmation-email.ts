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
  baseUrl: string;
};

const supportPhone = '+905431753724';
const whatsappUrl = 'https://wa.me/905431753724';
const replyEmail = 'contact@bosphoras.com';

const lang: Record<string, string[]> = {
  fr: ['Votre réservation Bosphoras Mobility est confirmée','Réservation confirmée','Bonjour','Votre transfert privé à Istanbul est confirmé. Votre chauffeur vous attendra à la sortie avec votre nom et restera joignable par téléphone pour vous assister si besoin.','Important — informations passagers','Merci de répondre à cet email avec les noms, prénoms et numéros de passeport ou pièce d’identité de chaque passager. La réglementation turque du transport privé impose l’enregistrement des passagers avant le départ du véhicule.','Résumé','Départ','Arrivée','Véhicule','Date','Vol','Passagers','Téléphone','Besoin d’aide ?','Contactez-nous par WhatsApp ou répondez directement à cet email.','Assistance WhatsApp','Voir le site'],
  en: ['Your Bosphoras Mobility booking is confirmed','Booking confirmed','Hello','Your private transfer in Istanbul is confirmed. Your chauffeur will wait at the exit with your name and remain reachable by phone if you need support.','Important — passenger information','Please reply to this email with the full names and passport or ID numbers of every passenger. Turkish private transport rules require passenger registration before vehicle departure.','Summary','Pickup','Drop-off','Vehicle','Date','Flight','Passengers','Phone','Need help?','Contact us on WhatsApp or reply directly to this email.','WhatsApp assistance','Visit website'],
  ru: ['Ваше бронирование Bosphoras Mobility подтверждено','Бронирование подтверждено','Здравствуйте','Ваш частный трансфер в Стамбуле подтвержден. Водитель будет ждать у выхода с вашим именем и будет на связи по телефону для помощи.','Важно — данные пассажиров','Пожалуйста, ответьте на это письмо и отправьте имена, фамилии и номера паспортов или документов каждого пассажира. Правила частных перевозок в Турции требуют регистрации пассажиров до отправления автомобиля.','Детали','Откуда','Куда','Автомобиль','Дата','Рейс','Пассажиры','Телефон','Нужна помощь?','Свяжитесь с нами в WhatsApp или ответьте на это письмо.','WhatsApp помощь','Сайт'],
  ar: ['تم تأكيد حجزك مع Bosphoras Mobility','تم تأكيد الحجز','مرحباً','تم تأكيد النقل الخاص بك في إسطنبول. سينتظرك السائق عند المخرج باسمك وسيبقى متاحاً عبر الهاتف للمساعدة.','مهم — معلومات الركاب','يرجى الرد على هذا البريد بأسماء الركاب وأرقام جواز السفر أو الهوية. تتطلب لوائح النقل الخاص في تركيا تسجيل الركاب قبل انطلاق المركبة.','الملخص','نقطة الانطلاق','الوجهة','السيارة','التاريخ','الرحلة','الركاب','الهاتف','هل تحتاج مساعدة؟','تواصل معنا عبر WhatsApp أو رد مباشرة على هذا البريد.','مساعدة WhatsApp','زيارة الموقع'],
  zh: ['您的 Bosphoras Mobility 预订已确认','预订已确认','您好','您在伊斯坦布尔的私人接送已确认。司机将在出口处举您的姓名牌等候，并可通过电话提供协助。','重要 — 乘客信息','请回复此邮件，提供每位乘客的姓名以及护照或身份证件号码。土耳其私人交通规定要求车辆出发前登记乘客。','摘要','出发地','目的地','车辆','日期','航班','乘客','电话','需要帮助？','请通过 WhatsApp 联系我们或直接回复此邮件。','WhatsApp 协助','访问网站'],
  de: ['Ihre Bosphoras Mobility Buchung ist bestätigt','Buchung bestätigt','Hallo','Ihr privater Transfer in Istanbul ist bestätigt. Ihr Chauffeur wartet am Ausgang mit Ihrem Namen und bleibt telefonisch erreichbar.','Wichtig — Passagierdaten','Bitte antworten Sie auf diese E-Mail mit Vorname, Nachname und Reisepass- oder Ausweisnummer jedes Passagiers. Türkische Vorschriften verlangen die Registrierung vor Abfahrt.','Übersicht','Abholung','Ziel','Fahrzeug','Datum','Flug','Passagiere','Telefon','Brauchen Sie Hilfe?','Kontaktieren Sie uns per WhatsApp oder antworten Sie direkt auf diese E-Mail.','WhatsApp Hilfe','Website besuchen'],
  es: ['Su reserva Bosphoras Mobility está confirmada','Reserva confirmada','Hola','Su traslado privado en Estambul está confirmado. Su chófer le esperará en la salida con su nombre y seguirá disponible por teléfono.','Importante — datos de pasajeros','Responda a este email con nombres, apellidos y números de pasaporte o documento de cada pasajero. La normativa turca exige registrar los pasajeros antes de la salida.','Resumen','Salida','Llegada','Vehículo','Fecha','Vuelo','Pasajeros','Teléfono','¿Necesita ayuda?','Contáctenos por WhatsApp o responda directamente a este email.','Asistencia WhatsApp','Ver sitio'],
  it: ['La tua prenotazione Bosphoras Mobility è confermata','Prenotazione confermata','Ciao','Il tuo transfer privato a Istanbul è confermato. L’autista ti aspetterà all’uscita con il tuo nome e sarà raggiungibile telefonicamente.','Importante — dati passeggeri','Rispondi a questa email con nome, cognome e numero di passaporto o documento di ogni passeggero. La normativa turca richiede la registrazione prima della partenza.','Riepilogo','Partenza','Arrivo','Veicolo','Data','Volo','Passeggeri','Telefono','Hai bisogno di aiuto?','Contattaci su WhatsApp o rispondi direttamente a questa email.','Assistenza WhatsApp','Visita il sito'],
  pt: ['A sua reserva Bosphoras Mobility está confirmada','Reserva confirmada','Olá','O seu transfer privado em Istambul está confirmado. O motorista aguardará na saída com o seu nome e estará contactável por telefone.','Importante — dados dos passageiros','Responda a este email com nomes, apelidos e números de passaporte ou documento de cada passageiro. A regulamentação turca exige o registo antes da partida.','Resumo','Partida','Destino','Veículo','Data','Voo','Passageiros','Telefone','Precisa de ajuda?','Contacte-nos por WhatsApp ou responda diretamente a este email.','Assistência WhatsApp','Ver site']
};

function localeKey(locale?: string) { return lang[locale || ''] ? String(locale) : 'en'; }
function esc(v?: string) { return String(v || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] || c)); }
function row(label: string, value?: string) { return value ? `<tr><td style="padding:9px 0;color:#64748b;font-size:13px;width:38%">${esc(label)}</td><td style="padding:9px 0;color:#0f172a;font-size:14px;font-weight:700">${esc(value)}</td></tr>` : ''; }

export function buildTransferConfirmationEmail(data: BookingEmailData) {
  const t = lang[localeKey(data.locale)];
  const dir = localeKey(data.locale) === 'ar' ? 'rtl' : 'ltr';
  const site = data.baseUrl || 'https://bosphoras.com';
  const name = `${data.firstName} ${data.lastName}`.trim();
  const html = `<div dir="${dir}" style="background:#f4f6f8;padding:28px 12px;font-family:Arial,sans-serif;color:#0f172a"><table width="100%" style="max-width:680px;margin:auto;background:#fff;border-radius:28px;overflow:hidden;border:1px solid #e5e7eb"><tr><td style="padding:30px 32px;background:#0b1220;color:#fff"><div style="font-family:Georgia,serif;font-size:24px;letter-spacing:6px;text-transform:uppercase">Bosphoras</div><div style="margin-top:6px;font-size:10px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#cbd5e1">Private Mobility Istanbul</div></td></tr><tr><td style="padding:32px"><div style="display:inline-block;border-radius:999px;background:#ecfdf5;color:#047857;padding:8px 13px;font-size:12px;font-weight:800;text-transform:uppercase">${esc(t[1])}</div><h1 style="font-size:30px;color:#0f172a">${esc(t[2])} ${esc(name)},</h1><p style="font-size:16px;line-height:1.75;color:#334155">${esc(t[3])}</p><div style="margin:26px 0;padding:22px;border-radius:22px;background:#f8fafc;border:1px solid #e5e7eb"><h2>${esc(t[4])}</h2><p><strong>${esc(t[5])}</strong></p></div><h2>${esc(t[6])}</h2><table width="100%" style="border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;margin-bottom:24px">${row(t[7],data.pickup)}${row(t[8],data.dropoff)}${row(t[9],data.vehicle)}${row(t[10],data.date)}${row(t[11],data.flightNumber)}${row(t[12],data.passengerCount)}${row(t[13],data.phone)}${row('Stripe',data.sessionId)}</table><div style="padding:22px;border-radius:22px;background:#0b1220;color:#fff"><h2>${esc(t[14])}</h2><p style="color:#cbd5e1">${esc(t[15])}</p><a href="${whatsappUrl}" style="display:inline-block;background:#fff;color:#0b1220;text-decoration:none;border-radius:999px;padding:13px 18px;font-size:13px;font-weight:800;margin:0 8px 8px 0">${esc(t[16])} ${supportPhone}</a><a href="${site}" style="display:inline-block;border:1px solid rgba(255,255,255,.28);color:#fff;text-decoration:none;border-radius:999px;padding:13px 18px;font-size:13px;font-weight:800">${esc(t[17])}</a></div></td></tr><tr><td style="padding:22px 32px;background:#f8fafc;color:#64748b;font-size:12px">Bosphoras Mobility — Private Mobility Istanbul<br/>${replyEmail} · WhatsApp ${supportPhone}</td></tr></table></div>`;
  const text = `${t[1]}\n\n${t[2]} ${name},\n\n${t[3]}\n\n${t[4]}\n${t[5]}\n\n${t[6]}\n${t[7]}: ${data.pickup}\n${t[8]}: ${data.dropoff}\n${t[9]}: ${data.vehicle}\n${t[10]}: ${data.date}\n${t[11]}: ${data.flightNumber || ''}\n${t[12]}: ${data.passengerCount || ''}\n${t[13]}: ${data.phone}\n\nWhatsApp: ${supportPhone}\n${site}`;
  return { subject: t[0], html, text };
}

export async function sendTransferConfirmationEmail(data: BookingEmailData) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = String(process.env.SMTP_SECURE || 'true') === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.MAIL_FROM || `Bosphoras Mobility <${replyEmail}>`;
  if (!host || !user || !pass) return { skipped: true };
  const transporter = nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
  const email = buildTransferConfirmationEmail(data);
  await transporter.sendMail({ from, to: data.email, replyTo: replyEmail, subject: email.subject, html: email.html, text: email.text });
  return { sent: true };
}
