'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle2, Globe2, Menu, ShieldCheck, X } from 'lucide-react';

type TransferLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

const transferLocales: Array<{ code: TransferLocale; label: string; href: string; hreflang: string }> = [
  { code: 'fr', label: 'FR', href: '/transferts-istanbul', hreflang: 'fr' },
  { code: 'en', label: 'EN', href: '/en/istanbul-airport-transfer', hreflang: 'en' },
  { code: 'ru', label: 'RU', href: '/ru/transfer-aeroport-stambul', hreflang: 'ru' },
  { code: 'ar', label: 'AR', href: '/ar/istanbul-airport-transfer', hreflang: 'ar' },
  { code: 'zh', label: '中文', href: '/zh/istanbul-airport-transfer', hreflang: 'zh' },
  { code: 'de', label: 'DE', href: '/de/flughafentransfer-istanbul', hreflang: 'de' },
  { code: 'es', label: 'ES', href: '/es/traslado-aeropuerto-estambul', hreflang: 'es' },
  { code: 'it', label: 'IT', href: '/it/transfer-aeroporto-istanbul', hreflang: 'it' },
  { code: 'pt', label: 'PT', href: '/pt/transfer-aeroporto-istambul', hreflang: 'pt' },
];

const labels: Record<TransferLocale, { book: string; vehicles: string; airports: string; faq: string; privateOffice: string; trustOne: string; trustTwo: string; trustThree: string }> = {
  fr: { book: 'Réserver', vehicles: 'Véhicules', airports: 'IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', trustOne: 'Confirmation immédiate', trustTwo: 'Paiement sécurisé', trustThree: 'Suivi de vol' },
  en: { book: 'Book', vehicles: 'Vehicles', airports: 'IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', trustOne: 'Instant confirmation', trustTwo: 'Secure card payment', trustThree: 'Flight tracking' },
  ru: { book: 'Бронь', vehicles: 'Авто', airports: 'IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', trustOne: 'Мгновенное подтверждение', trustTwo: 'Безопасная оплата', trustThree: 'Отслеживание рейса' },
  ar: { book: 'احجز', vehicles: 'السيارات', airports: 'IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', trustOne: 'تأكيد فوري', trustTwo: 'دفع آمن', trustThree: 'تتبع الرحلة' },
  zh: { book: '预订', vehicles: '车型', airports: 'IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', trustOne: '即时确认', trustTwo: '安全支付', trustThree: '航班跟踪' },
  de: { book: 'Buchen', vehicles: 'Fahrzeuge', airports: 'IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', trustOne: 'Sofortbestätigung', trustTwo: 'Sichere Zahlung', trustThree: 'Flugverfolgung' },
  es: { book: 'Reservar', vehicles: 'Vehículos', airports: 'IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', trustOne: 'Confirmación inmediata', trustTwo: 'Pago seguro', trustThree: 'Seguimiento de vuelo' },
  it: { book: 'Prenota', vehicles: 'Veicoli', airports: 'IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', trustOne: 'Conferma immediata', trustTwo: 'Pagamento sicuro', trustThree: 'Monitoraggio volo' },
  pt: { book: 'Reservar', vehicles: 'Veículos', airports: 'IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', trustOne: 'Confirmação imediata', trustTwo: 'Pagamento seguro', trustThree: 'Monitorização do voo' },
};

function normalizeLocale(locale: string): TransferLocale {
  return transferLocales.some((item) => item.code === locale) ? (locale as TransferLocale) : 'en';
}

export function TransferOnlyHeader({ locale = 'fr' }: { locale?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const l = normalizeLocale(locale);
  const text = labels[l];
  const current = transferLocales.find((item) => item.code === l) || transferLocales[0];
  const nav = [
    { label: text.book, href: '#reservation' },
    { label: text.vehicles, href: '#vehicles' },
    { label: text.airports, href: '#airports' },
    { label: text.faq, href: '#transfer-faq' },
  ];
  const trust = [text.trustOne, text.trustTwo, text.trustThree];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/94 shadow-[0_14px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
      <div className="hidden border-b border-slate-200/75 bg-[#07111f] px-4 py-2 text-white md:block">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between text-[0.65rem] font-black uppercase tracking-[0.16em] text-slate-300">
          <div className="flex items-center gap-2 text-[#d6a448]"><ShieldCheck size={14} /> Private chauffeur & airport transfer Istanbul</div>
          <div className="flex items-center gap-5">
            {trust.map((item) => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 size={13} className="text-[#d6a448]" />{item}</span>)}
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[4.65rem] max-w-[1180px] items-center justify-between px-4 md:h-[5rem] md:px-8">
        <a href="#reservation" className="group flex flex-col leading-none" aria-label="Bosphoras Transfer — Private Mobility Istanbul">
          <span className="font-serif text-[1.08rem] font-normal uppercase tracking-[0.24em] text-[#07111f] transition-colors group-hover:text-[#9b7228] md:text-[1.30rem]">Bosphoras</span>
          <span className="mt-1 text-[0.53rem] font-black uppercase tracking-[0.31em] text-[#9b7228]">Private Mobility Istanbul</span>
        </a>

        <nav className="hidden items-center rounded-full border border-slate-200 bg-slate-50/90 px-2 py-1 lg:flex" aria-label="Istanbul transfer navigation">
          {nav.map((item) => <a key={item.href} href={item.href} className="rounded-full px-4 py-3 text-[0.66rem] font-black uppercase tracking-[0.15em] text-slate-600 transition hover:bg-white hover:text-[#9b7228] hover:shadow-sm">{item.label}</a>)}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-[0.64rem] font-black uppercase tracking-[0.16em] text-slate-700 shadow-sm transition hover:border-[#9b7228]/60 hover:text-[#9b7228]" aria-expanded={langOpen} aria-haspopup="listbox"><Globe2 size={15} />{current.label}</button>
            {langOpen && <div className="absolute right-0 top-full mt-3 grid min-w-[250px] grid-cols-3 gap-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.16)]" role="listbox">
              {transferLocales.map((item) => <Link key={item.code} href={item.href} hrefLang={item.hreflang} onClick={() => setLangOpen(false)} className={`rounded-xl px-3 py-2 text-center text-xs font-black uppercase tracking-[0.1em] transition ${item.code === l ? 'bg-[#07111f] text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-[#9b7228]'}`} role="option" aria-selected={item.code === l}>{item.label}</Link>)}
            </div>}
          </div>
          <a href="#reservation" className="rounded-full bg-[#07111f] px-5 py-3 text-[0.64rem] font-black uppercase tracking-[0.14em] text-white shadow-[0_10px_28px_rgba(7,17,31,0.18)] transition hover:bg-[#0f1d32]">{text.book}</a>
          <Link href="/" className="rounded-full border border-[#d6a448]/55 bg-[#d6a448]/10 px-4 py-3 text-[0.61rem] font-black uppercase tracking-[0.12em] text-[#7b5a1f] transition hover:bg-[#d6a448] hover:text-[#07111f]">{text.privateOffice}</Link>
        </div>

        <button className="rounded-full border border-slate-200 bg-white p-3 text-slate-900 shadow-sm lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close transfer menu' : 'Open transfer menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>

      {menuOpen && <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-[0_28px_70px_rgba(15,23,42,0.12)] lg:hidden">
        <div className="mx-auto max-w-[1180px] space-y-2">
          <div className="mb-3 rounded-2xl bg-[#07111f] p-4 text-xs font-bold leading-6 text-slate-200">
            {trust.map((item) => <span key={item} className="mr-3 inline-flex items-center gap-1"><CheckCircle2 size={13} className="text-[#d6a448]" />{item}</span>)}
          </div>
          {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-2xl bg-slate-50 px-4 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-800">{item.label}</a>)}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {transferLocales.map((item) => <Link key={item.code} href={item.href} hrefLang={item.hreflang} onClick={() => setMenuOpen(false)} className={`rounded-2xl border px-3 py-3 text-center text-xs font-black uppercase tracking-[0.10em] ${item.code === l ? 'border-[#07111f] bg-[#07111f] text-white' : 'border-slate-200 bg-white text-slate-600'}`}>{item.label}</Link>)}
          </div>
          <Link href="/" onClick={() => setMenuOpen(false)} className="mt-3 block rounded-2xl border border-[#d6a448]/50 bg-[#d6a448]/10 px-4 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-[#7b5a1f]">{text.privateOffice}</Link>
        </div>
      </div>}
    </header>
  );
}
