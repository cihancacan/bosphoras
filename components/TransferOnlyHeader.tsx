'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Globe2, Menu, X } from 'lucide-react';

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

const labels: Record<TransferLocale, { book: string; vehicles: string; airports: string; faq: string; privateOffice: string; title: string }> = {
  fr: { book: 'Réserver', vehicles: 'Véhicules', airports: 'Aéroports IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', title: 'Bosphoras Transfer' },
  en: { book: 'Book', vehicles: 'Vehicles', airports: 'IST / SAW Airports', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', title: 'Bosphoras Transfer' },
  ru: { book: 'Бронь', vehicles: 'Авто', airports: 'Аэропорты IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', title: 'Bosphoras Transfer' },
  ar: { book: 'احجز', vehicles: 'السيارات', airports: 'مطارات IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', title: 'Bosphoras Transfer' },
  zh: { book: '预订', vehicles: '车型', airports: 'IST / SAW 机场', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', title: 'Bosphoras Transfer' },
  de: { book: 'Buchen', vehicles: 'Fahrzeuge', airports: 'Flughäfen IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', title: 'Bosphoras Transfer' },
  es: { book: 'Reservar', vehicles: 'Vehículos', airports: 'Aeropuertos IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', title: 'Bosphoras Transfer' },
  it: { book: 'Prenota', vehicles: 'Veicoli', airports: 'Aeroporti IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', title: 'Bosphoras Transfer' },
  pt: { book: 'Reservar', vehicles: 'Veículos', airports: 'Aeroportos IST / SAW', faq: 'FAQ', privateOffice: 'Bosphoras Private Office', title: 'Bosphoras Transfer' },
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

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/86 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-2xl">
      <div className="mx-auto flex h-[4.75rem] max-w-[1180px] items-center justify-between px-4 md:h-[5.2rem] md:px-8">
        <a href="#reservation" className="group flex flex-col leading-none" aria-label="Bosphoras Transfer — Private Mobility Istanbul">
          <span className="font-serif text-[1.1rem] font-normal uppercase tracking-[0.22em] text-[#0f172a] transition-colors group-hover:text-[#b88932] md:text-[1.28rem]">Bosphoras</span>
          <span className="mt-1 text-[0.55rem] font-black uppercase tracking-[0.30em] text-[#b88932]">Private Mobility Istanbul</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Istanbul transfer navigation">
          {nav.map((item) => <a key={item.href} href={item.href} className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-slate-600 transition hover:text-[#b88932]">{item.label}</a>)}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-[0.64rem] font-black uppercase tracking-[0.16em] text-slate-700 shadow-sm transition hover:border-[#b88932]/60 hover:text-[#b88932]" aria-expanded={langOpen} aria-haspopup="listbox"><Globe2 size={15} />{current.label}</button>
            {langOpen && <div className="absolute right-0 top-full mt-3 grid min-w-[240px] grid-cols-3 gap-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.16)]" role="listbox">
              {transferLocales.map((item) => <Link key={item.code} href={item.href} hrefLang={item.hreflang} onClick={() => setLangOpen(false)} className={`rounded-xl px-3 py-2 text-center text-xs font-black uppercase tracking-[0.1em] transition ${item.code === l ? 'bg-[#0f172a] text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-[#b88932]'}`} role="option" aria-selected={item.code === l}>{item.label}</Link>)}
            </div>}
          </div>
          <Link href="/" className="rounded-full border border-[#b88932]/50 bg-[#b88932]/10 px-5 py-3 text-[0.64rem] font-black uppercase tracking-[0.14em] text-[#8a641f] transition hover:bg-[#b88932] hover:text-white">{text.privateOffice}</Link>
        </div>

        <button className="rounded-full border border-slate-200 bg-white p-3 text-slate-900 shadow-sm lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close transfer menu' : 'Open transfer menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>

      {menuOpen && <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-[0_28px_70px_rgba(15,23,42,0.12)] lg:hidden">
        <div className="mx-auto max-w-[1180px] space-y-2">
          {nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-2xl bg-slate-50 px-4 py-4 text-sm font-black uppercase tracking-[0.12em] text-slate-800">{item.label}</a>)}
          <div className="grid grid-cols-3 gap-2 pt-2">
            {transferLocales.map((item) => <Link key={item.code} href={item.href} hrefLang={item.hreflang} onClick={() => setMenuOpen(false)} className={`rounded-2xl border px-3 py-3 text-center text-xs font-black uppercase tracking-[0.10em] ${item.code === l ? 'border-[#0f172a] bg-[#0f172a] text-white' : 'border-slate-200 bg-white text-slate-600'}`}>{item.label}</Link>)}
          </div>
          <Link href="/" onClick={() => setMenuOpen(false)} className="mt-3 block rounded-2xl border border-[#b88932]/50 bg-[#b88932]/10 px-4 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-[#8a641f]">{text.privateOffice}</Link>
        </div>
      </div>}
    </header>
  );
}
