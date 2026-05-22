'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Globe2, Menu, X } from 'lucide-react';

type TransferLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

const transferLocales: Array<{ code: TransferLocale; label: string; flag: string; href: string; hreflang: string }> = [
  { code: 'fr', label: 'Français', flag: '🇫🇷', href: '/transferts-istanbul', hreflang: 'fr' },
  { code: 'en', label: 'English', flag: '🇬🇧', href: '/en/istanbul-airport-transfer', hreflang: 'en' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', href: '/ru/transfer-aeroport-stambul', hreflang: 'ru' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦', href: '/ar/istanbul-airport-transfer', hreflang: 'ar' },
  { code: 'zh', label: '中文', flag: '🇨🇳', href: '/zh/istanbul-airport-transfer', hreflang: 'zh' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', href: '/de/flughafentransfer-istanbul', hreflang: 'de' },
  { code: 'es', label: 'Español', flag: '🇪🇸', href: '/es/traslado-aeropuerto-estambul', hreflang: 'es' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹', href: '/it/transfer-aeroporto-istanbul', hreflang: 'it' },
  { code: 'pt', label: 'Português', flag: '🇵🇹', href: '/pt/transfer-aeroporto-istambul', hreflang: 'pt' },
];

const labels: Record<TransferLocale, { book: string; vehicles: string; airports: string; faq: string; privateOffice: string }> = {
  fr: { book: 'Réserver', vehicles: 'Véhicules', airports: 'Aéroports', faq: 'FAQ', privateOffice: 'Private Office' },
  en: { book: 'Book', vehicles: 'Vehicles', airports: 'Airports', faq: 'FAQ', privateOffice: 'Private Office' },
  ru: { book: 'Бронь', vehicles: 'Авто', airports: 'Аэропорты', faq: 'FAQ', privateOffice: 'Private Office' },
  ar: { book: 'احجز', vehicles: 'السيارات', airports: 'المطارات', faq: 'FAQ', privateOffice: 'Private Office' },
  zh: { book: '预订', vehicles: '车型', airports: '机场', faq: 'FAQ', privateOffice: 'Private Office' },
  de: { book: 'Buchen', vehicles: 'Fahrzeuge', airports: 'Flughäfen', faq: 'FAQ', privateOffice: 'Private Office' },
  es: { book: 'Reservar', vehicles: 'Vehículos', airports: 'Aeropuertos', faq: 'FAQ', privateOffice: 'Private Office' },
  it: { book: 'Prenota', vehicles: 'Veicoli', airports: 'Aeroporti', faq: 'FAQ', privateOffice: 'Private Office' },
  pt: { book: 'Reservar', vehicles: 'Veículos', airports: 'Aeroportos', faq: 'FAQ', privateOffice: 'Private Office' },
};

function normalizeLocale(locale: string): TransferLocale {
  return transferLocales.some((item) => item.code === locale) ? (locale as TransferLocale) : 'en';
}

function BosphorasLogo() {
  return (
    <div className="flex flex-col leading-none">
      <span className="font-serif text-[1.18rem] font-normal uppercase tracking-[0.22em] text-[#0b1220] transition-colors group-hover:text-slate-700 md:text-[1.36rem]">Bosphoras</span>
      <span className="mt-1 text-[0.55rem] font-black uppercase tracking-[0.30em] text-slate-500">Private Mobility Istanbul</span>
    </div>
  );
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

  const LanguageDropdown = ({ mobile = false }: { mobile?: boolean }) => (
    <div className="relative">
      <button onClick={() => setLangOpen(!langOpen)} className={`${mobile ? 'h-11 px-3' : 'px-3 py-2.5'} inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white text-sm font-black text-slate-800 shadow-sm transition hover:bg-slate-50`} aria-expanded={langOpen} aria-haspopup="listbox">
        {mobile ? <Globe2 size={17} /> : <span className="text-base">{current.flag}</span>}
        <span>{mobile ? current.code.toUpperCase() : current.code.toUpperCase()}</span>
        <ChevronDown size={15} />
      </button>
      {langOpen && <div className="absolute right-0 top-full mt-3 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-[0_28px_80px_rgba(15,23,42,0.18)]" role="listbox">
        {transferLocales.map((item) => <Link key={item.code} href={item.href} hrefLang={item.hreflang} onClick={() => { setLangOpen(false); setMenuOpen(false); }} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold transition ${item.code === l ? 'bg-[#0b1220] text-white' : 'text-slate-700 hover:bg-slate-100'}`} role="option" aria-selected={item.code === l}><span className="text-base">{item.flag}</span><span>{item.label}</span></Link>)}
      </div>}
    </div>
  );

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-2xl">
      <div className="mx-auto flex h-[4.65rem] max-w-[1180px] items-center justify-between px-4 md:h-[5.15rem] md:px-8">
        <a href="#reservation" aria-label="Bosphoras — Private Mobility Istanbul" className="group transition hover:opacity-90">
          <BosphorasLogo />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.04)] lg:flex" aria-label="Istanbul transfer navigation">
          {nav.map((item) => <a key={item.href} href={item.href} className="rounded-full px-4 py-2.5 text-[0.72rem] font-black uppercase tracking-[0.08em] text-slate-600 transition hover:bg-[#0b1220] hover:text-white">{item.label}</a>)}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageDropdown />
          <a href="#reservation" className="rounded-full bg-[#0b1220] px-5 py-3 text-[0.72rem] font-black uppercase tracking-[0.08em] text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-[#101a2d]">{text.book}</a>
          <Link href="/" className="rounded-full border border-slate-200 bg-white px-4 py-3 text-[0.68rem] font-black uppercase tracking-[0.08em] text-slate-600 transition hover:text-[#0b1220]">{text.privateOffice}</Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageDropdown mobile />
          <button className="rounded-full border border-slate-200 bg-white p-3 text-slate-900 shadow-sm" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close transfer menu' : 'Open transfer menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>

      {menuOpen && <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-[0_28px_70px_rgba(15,23,42,0.12)] lg:hidden">
        <div className="mx-auto max-w-[1180px] space-y-2">
          {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-2xl bg-white px-4 py-4 text-sm font-black uppercase tracking-[0.08em] text-slate-800 shadow-sm ring-1 ring-slate-200">{item.label}</a>)}
          <Link href="/" onClick={() => setMenuOpen(false)} className="mt-3 block rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-xs font-black uppercase tracking-[0.10em] text-slate-600">{text.privateOffice}</Link>
        </div>
      </div>}
    </header>
  );
}
