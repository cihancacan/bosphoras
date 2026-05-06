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

type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
};

const localeNames: Record<Locale, string> = {
  fr: 'French',
  en: 'English',
  ru: 'Russian',
  ar: 'Arabic',
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

const internalFormNames: Record<FormKind, string> = {
  'private-assessment': 'Private assessment request',
  'membership-application': 'Membership application',
};

const internalSubjectNames: Record<FormKind, string> = {
  'private-assessment': 'New private request',
  'membership-application': 'New membership application',
};

const internalFieldLabels: Record<string, string> = {
  'Nom complet': 'Full name',
  'Full name': 'Full name',
  'Полное имя': 'Full name',
  'الاسم الكامل': 'Full name',
  Téléphone: 'Phone',
  Phone: 'Phone',
  Телефон: 'Phone',
  الهاتف: 'Phone',
  'Téléphone WhatsApp': 'WhatsApp phone',
  'WhatsApp phone': 'WhatsApp phone',
  'Телефон WhatsApp': 'WhatsApp phone',
  'هاتف WhatsApp': 'WhatsApp phone',
  Email: 'Email',
  'البريد الإلكتروني': 'Email',
  'Pays de résidence': 'Country of residence',
  'Country of residence': 'Country of residence',
  'Страна проживания': 'Country of residence',
  'بلد الإقامة': 'Country of residence',
  'Ville ciblée': 'Target city',
  'Target city': 'Target city',
  'Целевой город': 'Target city',
  'المدينة المستهدفة': 'Target city',
  'Sujet principal': 'Main subject',
  'Main subject': 'Main subject',
  'Основная тема': 'Main subject',
  'الموضوع الرئيسي': 'Main subject',
  'Délai souhaité': 'Desired timeline',
  'Desired timeline': 'Desired timeline',
  'Желаемые сроки': 'Desired timeline',
  'المهلة المطلوبة': 'Desired timeline',
  'Budget / enveloppe': 'Budget / envelope',
  'Budget / envelope': 'Budget / envelope',
  'Бюджет / ориентировочная сумма': 'Budget / envelope',
  'الميزانية / الإطار المالي': 'Budget / envelope',
  Message: 'Message',
  Сообщение: 'Message',
  الرسالة: 'Message',
  'Parrain / recommandation': 'Referrer / recommendation',
  'Referrer / recommendation': 'Referrer / recommendation',
  'Рекомендатель / рекомендация': 'Referrer / recommendation',
  'المُرشح / التوصية': 'Referrer / recommendation',
  'Profil principal': 'Main profile',
  'Main profile': 'Main profile',
  'Основной профиль': 'Main profile',
  'الملف الرئيسي': 'Main profile',
  'Société / activité': 'Company / activity',
  'Company / activity': 'Company / activity',
  'Компания / деятельность': 'Company / activity',
  'الشركة / النشاط': 'Company / activity',
  'LinkedIn / site internet': 'LinkedIn / website',
  'LinkedIn / website': 'LinkedIn / website',
  'LinkedIn / сайт': 'LinkedIn / website',
  'LinkedIn / الموقع الإلكتروني': 'LinkedIn / website',
  'Budget annuel estimé': 'Estimated annual budget',
  'Estimated annual budget': 'Estimated annual budget',
  'Ориентировочный годовой бюджет': 'Estimated annual budget',
  'الميزانية السنوية التقديرية': 'Estimated annual budget',
  'Besoin principal': 'Main need',
  'Main need': 'Main need',
  'Главная потребность': 'Main need',
  'الحاجة الرئيسية': 'Main need',
  'Pourquoi souhaitez-vous rejoindre Bosphoras Private Access ?': 'Why do you want to join Bosphoras Private Access?',
  'Why do you want to join Bosphoras Private Access?': 'Why do you want to join Bosphoras Private Access?',
  'Почему вы хотите присоединиться к Bosphoras Private Access?': 'Why do you want to join Bosphoras Private Access?',
  'لماذا ترغبون في الانضمام إلى Bosphoras Private Access؟': 'Why do you want to join Bosphoras Private Access?',
  'Confidentiality accepted': 'Confidentiality accepted',
  'Conditions accepted': 'Conditions accepted',
  'Validation accepted': 'Validation accepted',
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

function cleanEnv(value?: string): string {
  return (value ?? '').trim().replace(/^['\"]|['\"]$/g, '');
}

function readEnv(...names: string[]): string {
  for (const name of names) {
    const value = cleanEnv(process.env[name]);
    if (value) return value;
  }
  return '';
}

function readEnvOrFail(...names: string[]): string {
  const value = readEnv(...names);
  if (!value) throw new Error(`Missing environment variable: ${names.join(' or ')}`);
  return value;
}

function headerSafe(value: string): string {
  return value.replace(/[\r\n]/g, ' ').trim();
}

function getMailConfig(): MailConfig {
  const user = readEnvOrFail('SMTP_USER', 'OVH_SMTP_USER', 'EMAIL_USER');
  const pass = readEnvOrFail('SMTP_PASS', 'SMTP_PASSWORD', 'OVH_SMTP_PASS', 'EMAIL_PASS', 'EMAIL_PASSWORD');
  const host = readEnv('SMTP_HOST', 'OVH_SMTP_HOST') || 'ssl0.ovh.net';
  const port = Number(readEnv('SMTP_PORT', 'OVH_SMTP_PORT') || '465');
  const secure = (readEnv('SMTP_SECURE', 'OVH_SMTP_SECURE') || 'true') === 'true';

  return {
    host,
    port,
    secure,
    user,
    pass,
    from: readEnv('MAIL_FROM', 'EMAIL_FROM') || `Bosphoras <${user}>`,
    to: readEnv('MAIL_TO', 'EMAIL_TO') || 'contact@bosphoras.com',
  };
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

function fieldLabel(key: string): string {
  return internalFieldLabels[key] || internalFieldLabels[key.replace(' *', '')] || key.replace(' *', '');
}

function rows(fields: Record<string, string>, englishLabels = false): string {
  return Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `<tr><td style="padding:10px 12px;border-bottom:1px solid #eadfc9;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:.08em;width:35%;">${safe(englishLabels ? fieldLabel(key) : key)}</td><td style="padding:10px 12px;border-bottom:1px solid #eadfc9;color:#111827;font-size:14px;line-height:1.6;">${safe(value)}</td></tr>`)
    .join('');
}

function premiumShell(content: string, locale: Locale): string {
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const note = clientCopy[locale].replyNote;
  return `<!doctype html><html dir="${dir}"><body style="margin:0;background:#f8f1e7;padding:28px;font-family:Georgia,'Times New Roman',serif;color:#111827;"><div style="max-width:720px;margin:0 auto;background:#fffaf0;border:1px solid #d8c7a1;box-shadow:0 24px 80px rgba(16,24,39,.08);"><div style="padding:34px 34px 22px;border-bottom:1px solid #d8c7a1;background:#121826;color:#fffaf0;"><div style="font-size:22px;letter-spacing:.20em;text-transform:uppercase;">Bosphoras</div><div style="margin-top:8px;color:#d2a863;font-size:11px;letter-spacing:.24em;text-transform:uppercase;">Private Desk · Istanbul</div></div><div style="padding:34px;">${content}</div><div style="padding:24px 34px;border-top:1px solid #d8c7a1;color:#6b7280;font-family:Arial,sans-serif;font-size:13px;line-height:1.7;"><strong style="color:#111827;">Équipe Bosphoras Istanbul</strong><br/>+33 1 88 84 22 22<br/><a href="https://bosphoras.com" style="color:#8a6728;text-decoration:none;">bosphoras.com</a><br/><span style="font-size:12px;">${note}</span></div></div></body></html>`;
}

function internalShell(content: string): string {
  return `<!doctype html><html dir="ltr"><body style="margin:0;background:#f8f1e7;padding:28px;font-family:Georgia,'Times New Roman',serif;color:#111827;"><div style="max-width:720px;margin:0 auto;background:#fffaf0;border:1px solid #d8c7a1;box-shadow:0 24px 80px rgba(16,24,39,.08);"><div style="padding:34px 34px 22px;border-bottom:1px solid #d8c7a1;background:#121826;color:#fffaf0;"><div style="font-size:22px;letter-spacing:.20em;text-transform:uppercase;">Bosphoras</div><div style="margin-top:8px;color:#d2a863;font-size:11px;letter-spacing:.24em;text-transform:uppercase;">Private Desk · Istanbul</div></div><div style="padding:34px;">${content}</div><div style="padding:24px 34px;border-top:1px solid #d8c7a1;color:#6b7280;font-family:Arial,sans-serif;font-size:13px;line-height:1.7;"><strong style="color:#111827;">Bosphoras Istanbul Team</strong><br/>+33 1 88 84 22 22<br/><a href="https://bosphoras.com" style="color:#8a6728;text-decoration:none;">bosphoras.com</a><br/><span style="font-size:12px;">Internal team notification. Reply directly to the client from this email thread.</span></div></div></body></html>`;
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
  return internalShell(`<p style="font-family:Arial,sans-serif;color:#8a6728;font-size:12px;text-transform:uppercase;letter-spacing:.16em;margin:0 0 12px;">New Bosphoras request</p><h1 style="font-size:30px;line-height:1.2;margin:0 0 18px;color:#111827;">${internalFormNames[payload.formKind]}</h1><p style="font-family:Arial,sans-serif;font-size:14px;line-height:1.8;color:#374151;margin:0 0 22px;"><strong>Client language:</strong> ${localeNames[payload.locale]}<br/><strong>Client:</strong> ${safe(clientName || 'Not provided')}<br/><strong>Email:</strong> ${safe(clientEmail || 'Not provided')}<br/><strong>Source:</strong> ${safe(payload.sourcePath || '')}</p><table cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #eadfc9;">${rows(payload.fields, true)}</table>`);
}

function internalText(payload: { locale: Locale; formKind: FormKind; fields: Record<string, string>; sourcePath: string }, clientEmail: string, clientName: string): string {
  return `New Bosphoras request\nClient language: ${localeNames[payload.locale]}\nForm: ${internalFormNames[payload.formKind]}\nClient: ${clientName || 'Not provided'}\nEmail: ${clientEmail || 'Not provided'}\nSource: ${payload.sourcePath}\n\n${Object.entries(payload.fields).map(([k, v]) => `${fieldLabel(k)}: ${v}`).join('\n')}`;
}

function classifyError(error: unknown): string {
  const message = error instanceof Error ? error.message : String(error);
  const code = typeof error === 'object' && error && 'code' in error ? String((error as { code?: unknown }).code) : '';
  if (message.includes('Missing environment variable')) return 'MISSING_ENV';
  if (code === 'EAUTH' || message.includes('Invalid login') || message.includes('Authentication')) return 'SMTP_AUTH_FAILED';
  if (code === 'ECONNECTION' || code === 'ETIMEDOUT' || code === 'ECONNREFUSED' || message.includes('Greeting never received')) return 'SMTP_CONNECTION_FAILED';
  if (code === 'EENVELOPE' || message.includes('Message failed')) return 'SMTP_MESSAGE_FAILED';
  return 'SEND_FAILED';
}

function createTransporter(nodemailer: any, config: MailConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
    tls: { servername: config.host },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
  });
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

    const config = getMailConfig();
    const transporter = createTransporter(nodemailer, config);
    const fullPayload = { locale, formKind, fields, sourcePath };

    await transporter.sendMail({
      from: headerSafe(config.from),
      to: headerSafe(config.to),
      replyTo: headerSafe(clientEmail),
      subject: headerSafe(`${internalSubjectNames[formKind]} — Bosphoras — ${clientName || clientEmail}`),
      html: internalHtml(fullPayload, clientEmail, clientName),
      text: internalText(fullPayload, clientEmail, clientName),
    });

    let confirmationSent = true;
    try {
      await transporter.sendMail({
        from: headerSafe(config.from),
        to: headerSafe(clientEmail),
        replyTo: headerSafe(config.to),
        subject: headerSafe(clientCopy[locale].subject),
        html: clientHtml(locale),
        text: clientText(locale),
      });
    } catch (confirmationError) {
      confirmationSent = false;
      console.error('Bosphoras client confirmation email error', {
        code: classifyError(confirmationError),
        message: confirmationError instanceof Error ? confirmationError.message : String(confirmationError),
      });
    }

    return NextResponse.json({ ok: true, confirmationSent });
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
