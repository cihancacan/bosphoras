'use client';

import { useEffect } from 'react';

type TransferLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

const copy: Record<TransferLocale, { eyebrow: string; title: string; aria: string; p1: string; p2: string; p3: string }> = {
  fr: {
    eyebrow: 'Conformité transport',
    title: 'Réservation minimum 2h à l’avance',
    aria: 'Voir les informations de conformité transport',
    p1: 'La réglementation turque du transport privé impose l’enregistrement préalable des passagers avant le départ du véhicule.',
    p2: 'Après paiement, vous recevrez un accès sécurisé pour compléter les informations nécessaires à la validation officielle de votre transfert.',
    p3: 'Cette procédure permet de garantir une prise en charge conforme, sécurisée et sans blocage à l’aéroport.',
  },
  en: {
    eyebrow: 'Transport compliance',
    title: 'Minimum booking time: 2 hours in advance',
    aria: 'View transport compliance information',
    p1: 'Turkish private transport regulations require passenger registration before the vehicle departure.',
    p2: 'After payment, you will receive secure access to complete the information required for the official validation of your transfer.',
    p3: 'This procedure helps ensure a compliant, secure airport pickup with no unnecessary delay.',
  },
  ru: {
    eyebrow: 'Транспортное соответствие',
    title: 'Бронирование минимум за 2 часа',
    aria: 'Показать информацию о транспортных правилах',
    p1: 'Правила частных перевозок в Турции требуют предварительной регистрации пассажиров до отправления автомобиля.',
    p2: 'После оплаты вы получите безопасный доступ для заполнения данных, необходимых для официального подтверждения трансфера.',
    p3: 'Эта процедура помогает обеспечить законную, безопасную и спокойную встречу в аэропорту.',
  },
  ar: {
    eyebrow: 'امتثال النقل',
    title: 'الحجز قبل ساعتين على الأقل',
    aria: 'عرض معلومات امتثال النقل',
    p1: 'تتطلب لوائح النقل الخاص في تركيا تسجيل الركاب مسبقاً قبل انطلاق المركبة.',
    p2: 'بعد الدفع، ستتلقى رابطاً آمناً لاستكمال المعلومات اللازمة لاعتماد خدمة النقل رسمياً.',
    p3: 'تساعد هذه الخطوة على ضمان استقبال قانوني وآمن في المطار دون تعطيل.',
  },
  zh: {
    eyebrow: '交通合规',
    title: '至少提前2小时预订',
    aria: '查看交通合规信息',
    p1: '土耳其私人交通规定要求车辆出发前提前登记乘客信息。',
    p2: '付款后，您将收到安全访问链接，以填写正式确认接送所需的信息。',
    p3: '该流程有助于确保机场接送合规、安全并避免不必要的延误。',
  },
  de: {
    eyebrow: 'Transportkonformität',
    title: 'Buchung mindestens 2 Stunden im Voraus',
    aria: 'Informationen zur Transportkonformität anzeigen',
    p1: 'Die türkischen Vorschriften für privaten Transport verlangen eine vorherige Registrierung der Passagiere vor Abfahrt des Fahrzeugs.',
    p2: 'Nach der Zahlung erhalten Sie einen sicheren Zugang, um die für die offizielle Bestätigung Ihres Transfers erforderlichen Informationen zu ergänzen.',
    p3: 'Dieses Verfahren sorgt für eine konforme, sichere und reibungslose Abholung am Flughafen.',
  },
  es: {
    eyebrow: 'Conformidad transporte',
    title: 'Reserva mínima con 2 horas de antelación',
    aria: 'Ver información de conformidad del transporte',
    p1: 'La normativa turca de transporte privado exige el registro previo de los pasajeros antes de la salida del vehículo.',
    p2: 'Después del pago, recibirá un acceso seguro para completar la información necesaria para la validación oficial de su traslado.',
    p3: 'Este procedimiento permite garantizar una recogida conforme, segura y sin bloqueos en el aeropuerto.',
  },
  it: {
    eyebrow: 'Conformità trasporto',
    title: 'Prenotazione minima 2 ore prima',
    aria: 'Mostra informazioni sulla conformità del trasporto',
    p1: 'La normativa turca sul trasporto privato richiede la registrazione preventiva dei passeggeri prima della partenza del veicolo.',
    p2: 'Dopo il pagamento, riceverai un accesso sicuro per completare le informazioni necessarie alla validazione ufficiale del transfer.',
    p3: 'Questa procedura garantisce un’accoglienza conforme, sicura e senza blocchi in aeroporto.',
  },
  pt: {
    eyebrow: 'Conformidade transporte',
    title: 'Reserva mínima com 2 horas de antecedência',
    aria: 'Ver informações de conformidade do transporte',
    p1: 'A regulamentação turca de transporte privado exige o registo prévio dos passageiros antes da partida do veículo.',
    p2: 'Após o pagamento, receberá um acesso seguro para completar as informações necessárias à validação oficial do seu transfer.',
    p3: 'Este procedimento ajuda a garantir uma recolha conforme, segura e sem bloqueios no aeroporto.',
  },
};

function safeLocale(locale?: string): TransferLocale {
  return locale === 'fr' || locale === 'en' || locale === 'ru' || locale === 'ar' || locale === 'zh' || locale === 'de' || locale === 'es' || locale === 'it' || locale === 'pt' ? locale : 'en';
}

function createNotice(locale: TransferLocale) {
  const text = copy[locale];
  const wrapper = document.createElement('div');
  wrapper.dataset.transferComplianceNotice = 'true';
  wrapper.className = 'mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-900';
  wrapper.dir = locale === 'ar' ? 'rtl' : 'ltr';
  wrapper.innerHTML = `
    <div class="flex items-start justify-between gap-3">
      <div>
        <p class="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">${text.eyebrow}</p>
        <p class="mt-1 text-sm font-black text-slate-950">${text.title}</p>
      </div>
      <button type="button" data-transfer-compliance-toggle="true" aria-label="${text.aria}" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-black text-slate-700 shadow-sm transition hover:border-slate-900 hover:text-slate-950">i</button>
    </div>
    <div data-transfer-compliance-detail="true" class="mt-4 hidden rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-600">
      <p>${text.p1}</p>
      <p class="mt-3">${text.p2}</p>
      <p class="mt-3 font-semibold text-slate-900">${text.p3}</p>
    </div>
  `;
  return wrapper;
}

function insertNotice(locale: TransferLocale) {
  if (document.querySelector('[data-transfer-compliance-notice="true"]')) return;
  const payButton = Array.from(document.querySelectorAll('button')).find((button) => button.textContent?.toLowerCase().includes('payer et confirmer') || button.textContent?.toLowerCase().includes('pay and confirm') || button.textContent?.toLowerCase().includes('bezahlen') || button.textContent?.toLowerCase().includes('pagar') || button.textContent?.toLowerCase().includes('оплатить') || button.textContent?.includes('付款')) as HTMLButtonElement | undefined;
  if (!payButton) return;
  const target = payButton.parentElement;
  if (!target) return;
  target.insertBefore(createNotice(locale), payButton);
}

export function TransferComplianceNotice({ locale = 'fr' }: { locale?: string }) {
  useEffect(() => {
    const l = safeLocale(locale);
    const onClick = (event: MouseEvent) => {
      const button = (event.target as HTMLElement | null)?.closest('[data-transfer-compliance-toggle="true"]');
      if (!button) return;
      const notice = (button as HTMLElement).closest('[data-transfer-compliance-notice="true"]');
      const detail = notice?.querySelector('[data-transfer-compliance-detail="true"]') as HTMLElement | null;
      if (!detail) return;
      detail.classList.toggle('hidden');
    };

    const observer = new MutationObserver(() => insertNotice(l));
    observer.observe(document.body, { childList: true, subtree: true });
    insertNotice(l);
    document.addEventListener('click', onClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', onClick, true);
    };
  }, [locale]);

  return null;
}
