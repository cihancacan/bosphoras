import Link from 'next/link';
import { CreditCard, Plane, ShieldCheck } from 'lucide-react';

type TransferLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

function safeLocale(locale?: string): TransferLocale {
  return locale === 'fr' || locale === 'en' || locale === 'ru' || locale === 'ar' || locale === 'zh' || locale === 'de' || locale === 'es' || locale === 'it' || locale === 'pt' ? locale : 'en';
}

const labels: Record<TransferLocale, { reserve: string; vehicles: string; airports: string; faq: string; privateOffice: string; flightTracking: string; securePayment: string; instant: string; rights: string }> = {
  fr: { reserve: 'Réserver', vehicles: 'Véhicules', airports: 'Aéroports IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', flightTracking: 'Suivi de vol', securePayment: 'Paiement carte sécurisé', instant: 'Confirmation immédiate', rights: 'Bosphoras Transfer — Chauffeur privé Istanbul.' },
  en: { reserve: 'Book', vehicles: 'Vehicles', airports: 'IST / SAW Airports', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', flightTracking: 'Flight tracking', securePayment: 'Secure card payment', instant: 'Instant confirmation', rights: 'Bosphoras Transfer — Istanbul private chauffeur.' },
  ru: { reserve: 'Бронь', vehicles: 'Авто', airports: 'Аэропорты IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', flightTracking: 'Отслеживание рейса', securePayment: 'Безопасная оплата картой', instant: 'Мгновенное подтверждение', rights: 'Bosphoras Transfer — личный водитель в Стамбуле.' },
  ar: { reserve: 'احجز', vehicles: 'السيارات', airports: 'مطارات IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', flightTracking: 'تتبع الرحلة', securePayment: 'دفع آمن بالبطاقة', instant: 'تأكيد فوري', rights: 'Bosphoras Transfer — سائق خاص في إسطنبول.' },
  zh: { reserve: '预订', vehicles: '车型', airports: 'IST / SAW 机场', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', flightTracking: '航班跟踪', securePayment: '安全银行卡付款', instant: '即时确认', rights: 'Bosphoras Transfer — 伊斯坦布尔私人司机。' },
  de: { reserve: 'Buchen', vehicles: 'Fahrzeuge', airports: 'IST / SAW Flughäfen', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', flightTracking: 'Flugverfolgung', securePayment: 'Sichere Kartenzahlung', instant: 'Sofortige Bestätigung', rights: 'Bosphoras Transfer — Privater Chauffeur Istanbul.' },
  es: { reserve: 'Reservar', vehicles: 'Vehículos', airports: 'Aeropuertos IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', flightTracking: 'Seguimiento de vuelo', securePayment: 'Pago seguro con tarjeta', instant: 'Confirmación inmediata', rights: 'Bosphoras Transfer — Chófer privado Estambul.' },
  it: { reserve: 'Prenota', vehicles: 'Veicoli', airports: 'Aeroporti IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', flightTracking: 'Monitoraggio volo', securePayment: 'Pagamento sicuro con carta', instant: 'Conferma immediata', rights: 'Bosphoras Transfer — Autista privato Istanbul.' },
  pt: { reserve: 'Reservar', vehicles: 'Veículos', airports: 'Aeroportos IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', flightTracking: 'Monitorização do voo', securePayment: 'Pagamento seguro com cartão', instant: 'Confirmação imediata', rights: 'Bosphoras Transfer — Motorista privado Istambul.' },
};

export function TransferOnlyFooter({ locale = 'fr' }: { locale?: string }) {
  const l = safeLocale(locale);
  const text = labels[l];

  return (
    <footer dir={l === 'ar' ? 'rtl' : 'ltr'} className="border-t border-slate-200 bg-white px-5 py-8 text-[#0b1220] md:px-8 md:py-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="#reservation" className="inline-flex flex-col leading-none" aria-label="Bosphoras — Private Mobility Istanbul">
            <span className="font-serif text-[1.16rem] font-normal uppercase tracking-[0.22em] text-[#0b1220]">Bosphoras</span>
            <span className="mt-1 text-[0.54rem] font-black uppercase tracking-[0.30em] text-slate-500">Private Mobility Istanbul</span>
          </a>

          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-black uppercase tracking-[0.12em] text-slate-500" aria-label="Transfer footer navigation">
            <a href="#reservation" className="transition hover:text-[#0b1220]">{text.reserve}</a>
            <a href="#vehicles" className="transition hover:text-[#0b1220]">{text.vehicles}</a>
            <a href="#airports" className="transition hover:text-[#0b1220]">{text.airports}</a>
            <a href="#transfer-faq" className="transition hover:text-[#0b1220]">{text.faq}</a>
            <Link href="/" className="transition hover:text-[#0b1220]">{text.privateOffice}</Link>
          </nav>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2"><Plane size={14} /> {text.flightTracking}</span>
            <span className="inline-flex items-center gap-2"><CreditCard size={14} /> {text.securePayment}</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={14} /> {text.instant}</span>
          </div>
          <p>© {new Date().getFullYear()} {text.rights}</p>
        </div>
      </div>
    </footer>
  );
}
