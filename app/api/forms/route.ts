import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Locale = 'fr' | 'en' | 'ru' | 'ar';
type FormKind = 'private-assessment' | 'membership-application';

type FormPayload = {
  locale?: Locale;
  formKind?: FormKind;
  fields?: Record<string, string>;
  sourcePath?: string;
};

const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  ru: 'Русский',
  ar: 'العربية',
};

const formNames: Record<FormKind, Record<Locale, string>> = {
  'private-assessment': {
    fr: 'Diagnostic privé',
    en: 'Private Assessment',
    ru: 'Частная консультация',
    ar: 'تقييم خاص',
  },
  'membership-application': {
    fr: 'Demande d’adhésion',
    en: 'Membership application',
    ru: 'Заявка на членство',
    ar: 'طلب عضوية',
  },
};

const clientCopy: Record<Locale, { subject: string; hello: string; intro: string; follow: string; closing: string; button: string; replyNote: string }> = {
  fr: {
    subject: 'Votre demande privée a bien été reçue — Bosphoras',
    hello: 'Madame, Monsieur,',
    intro: 'Nous vous confirmons la bonne réception de votre demande privée auprès de Bosphoras.',
    follow: 'Votre message va être analysé avec attention afin d’identifier la meilleure manière de vous accompagner en Turquie : installation, fiscalité, société, immobilier, santé, assurance, conciergerie privée ou accès membre.',
    closing: 'Si vous souhaitez compléter votre dossier, ajouter une précision ou modifier une information, vous pouvez simplement répondre à cet email. Cela nous permettra de conserver un suivi clair et confidentiel de votre demande.',
    button: 'Accéder à Bosphoras',
    replyNote: 'Vous pouvez répondre directement à cet email pour compléter ou modifier votre demande.',
  },
  en: {
    subject: 'Your private request has been received — Bosphoras',
    hello: 'Dear Sir or Madam,',
    intro: 'We confirm that your private request has been received by Bosphoras.',
    follow: 'Your message will be reviewed carefully in order to identify the most appropriate way to support you in Turkey: relocation, tax, company formation, property, healthcare, insurance, private concierge or membership access.',
    closing: 'If you wish to complete your file, add information or update any detail, you may simply reply to this email. This will help us keep a clear and confidential follow-up of your request.',
    button: 'Open Bosphoras',
    replyNote: 'You may reply directly to this email to complete or update your request.',
  },
  ru: {
    subject: 'Ваш частный запрос получен — Bosphoras',
    hello: 'Уважаемый клиент,',
    intro: 'Подтверждаем, что ваш частный запрос был получен командой Bosphoras.',
    follow: 'Ваше сообщение будет внимательно рассмотрено, чтобы определить наиболее подходящий формат сопровождения в Турции: переезд, налоги, создание компании, недвижимость, медицина, страхование, частный консьерж-сервис или доступ к членству.',
    closing: 'Если вы хотите дополнить досье, добавить информацию или изменить какие-либо данные, вы можете просто ответить на это письмо. Это позволит нам сохранить понятное и конфиденциальное сопровождение вашего запроса.',
    button: 'Открыть Bosphoras',
    replyNote: 'Вы можете ответить на это письмо, чтобы дополнить или изменить ваш запрос.',
  },
  ar: {
    subject: 'تم استلام طلبكم الخاص — Bosphoras',
    hello: 'السيدة / السيد المحترم،',
    intro: 'نؤكد لكم أنه تم استلام طلبكم الخاص من قبل فريق Bosphoras.',
    follow: 'سيتم تحليل رسالتكم بعناية من أجل تحديد أفضل طريقة لمرافقتكم في تركيا: الانتقال، الضرائب، تأسيس شركة، العقار، الصحة، التأمين، الكونسيرج الخاص أو طلب العضوية.',
    closing: 'إذا كنتم ترغبون في إكمال الملف، إضافة معلومات أو تعديل أي تفاصيل، يمكنكم ببساطة الرد على هذا البريد الإلكتروني. سيساعدنا ذلك على الحفاظ على متابعة واضحة وسرية لطلبكم.',
    button: 'زيارة Bosphoras',
    replyNote: 'يمكنكم الرد مباشرة على هذا البريد الإلكتروني لإكمال أو تعديل طلبكم.',
  },
};

function safe(value: unknown): string {
  return String(value ?? '').replace(/[<>]/g, '').trim();
}

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value.trim().replace(/^['\"]|['\"]$/g, '');
}

function optionalEnv(name: string, fallback: string): string {
  const value = process.env[name];
  return (value ? value.trim().replace(/^['\"]|['\"]$/g, '') : fallback);
}

function getEmail(fields: Record<string, string>): string {
  const possibleKeys = ['Email', 'البريد الإلكتروني', 'Email *', 'البريد الإلكتروني *'];
  for (const key of possibleKeys) {
    if (fields[key] && fields[key].includes('@')) return fields[key];
  }
  const found = Object.entries(fields).find(([key, value]) => key.toLowerCase().includes('email') && value.includes('@'));
  return found?.[1] ?? '';
}

function getName(fields: Record<string, string>): string {
  const possibleKeys = ['Nom complet', 'Full name', 'Полное имя', 'الاسم الكامل'];
  for (const key of possibleKeys) {
    if (fields[key]) return fields[key];
  }
  return '';
}

function rows(fields: Record<string, string>): string {
  return Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `<tr><td style="padding:10px 12px;border-bottom:1px solid #eadfc9;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:.08em;width:35%;">${safe(key)}</td><td style="padding:10px 12px;border-bottom:1px solid #eadfc9;color:#111827;font-size:14px;line-height:1.6;">${safe(value)}</td></tr>`)
    .join('');
}

function premiumShell(content: string, locale: Locale): string {
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const note = clientCopy[locale].replyNote;
  return `<!doctype html><html dir="${dir}"><body style="margin:0;background:#f8f1e7;padding:28px;font-family:Georgia,'Times New Roman',serif;color:#111827;"><div style="max-width:720px;margin:0 auto;background:#fffaf0;border:1px solid #d8c7a1;box-shadow:0 24px 80px rgba(16,24,39,.08);"><div style="padding:34px 34px 22px;border-bottom:1px solid #d8c7a1;background:#121826;color:#fffaf0;"><div style="font-size:22px;letter-spacing:.20em;text-transform:uppercase;">Bosphoras</div><div style="margin-top:8px;color:#d2a863;font-size:11px;letter-spacing:.24em;text-transform:uppercase;">Private Desk · Istanbul</div></div><div style="padding:34px;">${content}</div><div style="padding:24px 34px;border-top:1px solid #d8c7a1;color:#6b7280;font-family:Arial,sans-serif;font-size:13px;line-height:1.7;"><strong style="color:#111827;">Équipe Bosphoras Istanbul</strong><br/>+33 1 88 84 22 22<br/><a href="https://bosphoras.com" style="color:#8a6728;text-decoration:none;">bosphoras.com</a><br/><span style="font-size:12px;">${note}</span></div></div></body></html>`;
}

function clientHtml(locale: Locale): string {
  const copy = clientCopy[locale];
  return premiumShell(`<p style="font-family:Arial,sans-serif;font-size:15px;line-height:1.9;margin:0 0 22px;">${copy.hello}</p><p style="font-family:Arial,sans-serif;font-size:15px;line-height:1.9;margin:0 0 18px;">${copy.intro}</p><p style="font-family:Arial,sans-serif;font-size:15px;line-height:1.9;margin:0 0 18px;">${copy.follow}</p><p style="font-family:Arial,sans-serif;font-size:15px;line-height:1.9;margin:0 0 28px;">${copy.closing}</p><a href="https://bosphoras.com" style="display:inline-block;background:#121826;color:#fffaf0;text-decoration:none;padding:14px 22px;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;letter-spacing:.14em;text-transform:uppercase;">${copy.button}</a>`, locale);
}

function clientText(locale: Locale): string {
  const c = clientCopy[locale];
  return `${c.hello}\n\n${c.intro}\n\n${c.follow}\n\n${c.closing}\n\nÉquipe Bosphoras Istanbul\n+33 1 88 84 22 22\nbosphoras.com`;
}

function internalHtml(payload: { locale: Locale; formKind: FormKind; fields: Record<string, string>; sourcePath: string }, clientEmail: string, clientName: string): string {
  const locale = payload.locale;
  const formKind = payload.formKind;
  return premiumShell(`<p style="font-family:Arial,sans-serif;color:#8a6728;font-size:12px;text-transform:uppercase;letter-spacing:.16em;margin:0 0 12px;">Nouvelle demande Bosphoras</p><h1 style="font-size:30px;line-height:1.2;margin:0 0 18px;color:#111827;">${formNames[formKind][locale]}</h1><p style="font-family:Arial,sans-serif;font-size:14px;line-height:1.8;color:#374151;margin:0 0 22px;"><strong>Langue :</strong> ${localeNames[locale]}<br/><strong>Client :</strong> ${safe(clientName || 'Non renseigné')}<br/><strong>Email :</strong> ${safe(clientEmail || 'Non renseigné')}<br/><strong>Source :</strong> ${safe(payload.sourcePath || '')}</p><table cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #eadfc9;">${rows(payload.fields)}</table>`, 'fr');
}

function classifyError(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);
  if (message.includes('Missing environment variable')) return 'MISSING_ENV';
  if (message.includes('Invalid login') || message.includes('EAUTH')) return 'SMTP_AUTH_FAILED';
  if (message.includes('ECONNECTION') || message.includes('ETIMEDOUT') || message.includes('ECONNREFUSED')) return 'SMTP_CONNECTION_FAILED';
  if (message.includes('Message failed') || message.includes('EENVELOPE')) return 'SMTP_MESSAGE_FAILED';
  return 'SEND_FAILED';
}

export async function POST(request: Request) {
  try {
    const nodemailer = require('nodemailer');
    const body = (await request.json()) as FormPayload;
    const locale: Locale = body.locale && ['fr', 'en', 'ru', 'ar'].includes(body.locale) ? body.locale : 'fr';
    const formKind: FormKind = body.formKind === 'membership-application' ? 'membership-application' : 'private-assessment';
    const fields = Object.fromEntries(Object.entries(body.fields ?? {}).map(([key, value]) => [safe(key), safe(value)]));
    const sourcePath = safe(body.sourcePath ?? '');

    const clientEmail = getEmail(fields);
    const clientName = getName(fields);
    if (!clientEmail || !clientEmail.includes('@')) {
      return NextResponse.json({ ok: false, error: 'INVALID_EMAIL' }, { status: 400 });
    }

    const smtpHost = optionalEnv('SMTP_HOST', 'ssl0.ovh.net');
    const smtpPort = Number(optionalEnv('SMTP_PORT', '465'));
    const smtpSecure = optionalEnv('SMTP_SECURE', 'true') === 'true';
    const smtpUser = requiredEnv('SMTP_USER');
    const smtpPass = requiredEnv('SMTP_PASS');
    const from = optionalEnv('MAIL_FROM', `Bosphoras Private Desk <${smtpUser}>`);
    const to = optionalEnv('MAIL_TO', smtpUser);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPass },
      tls: { servername: smtpHost },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    await transporter.verify();

    const fullPayload = { locale, formKind, fields, sourcePath };

    await transporter.sendMail({
      from,
      to,
      replyTo: clientEmail,
      subject: `${formKind === 'membership-application' ? 'Nouvelle candidature membre' : 'Nouvelle demande privée'} — Bosphoras — ${clientName || clientEmail}`,
      html: internalHtml(fullPayload, clientEmail, clientName),
      text: `Nouvelle demande Bosphoras\nLangue: ${localeNames[locale]}\nFormulaire: ${formNames[formKind][locale]}\nClient: ${clientName}\nEmail: ${clientEmail}\nSource: ${sourcePath}\n\n${Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n')}`,
    });

    await transporter.sendMail({
      from,
      to: clientEmail,
      replyTo: to,
      subject: clientCopy[locale].subject,
      html: clientHtml(locale),
      text: clientText(locale),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    const code = classifyError(error);
    const message = error instanceof Error ? error.message : String(error);
    console.error('Bosphoras form email error', { code, message });
    return NextResponse.json(
      {
        ok: false,
        error: code,
        message: process.env.NODE_ENV === 'production' ? undefined : message,
      },
      { status: 500 }
    );
  }
}
