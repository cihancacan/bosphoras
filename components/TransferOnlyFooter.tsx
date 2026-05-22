import Link from 'next/link';

type TransferLocale = 'fr' | 'en' | 'ru' | 'ar' | 'zh' | 'de' | 'es' | 'it' | 'pt';

const localeLinks: Array<{ code: TransferLocale; label: string; href: string; title: string }> = [
  { code: 'fr', label: 'Français', href: '/transferts-istanbul', title: 'Transfert aéroport Istanbul en français' },
  { code: 'en', label: 'English', href: '/en/istanbul-airport-transfer', title: 'Istanbul airport transfer in English' },
  { code: 'ru', label: 'Русский', href: '/ru/transfer-aeroport-stambul', title: 'Трансфер из аэропорта Стамбула на русском' },
  { code: 'ar', label: 'العربية', href: '/ar/istanbul-airport-transfer', title: 'Istanbul airport transfer in Arabic' },
  { code: 'zh', label: '中文', href: '/zh/istanbul-airport-transfer', title: '伊斯坦布尔机场接送' },
  { code: 'de', label: 'Deutsch', href: '/de/flughafentransfer-istanbul', title: 'Flughafentransfer Istanbul auf Deutsch' },
  { code: 'es', label: 'Español', href: '/es/traslado-aeropuerto-estambul', title: 'Traslado aeropuerto Estambul en español' },
  { code: 'it', label: 'Italiano', href: '/it/transfer-aeroporto-istanbul', title: 'Transfer aeroporto Istanbul in italiano' },
  { code: 'pt', label: 'Português', href: '/pt/transfer-aeroporto-istambul', title: 'Transfer aeroporto Istambul em português' },
];

const seoLinks = [
  { label: 'Istanbul Airport IST Transfer', href: '#reservation' },
  { label: 'Sabiha Gökçen SAW Transfer', href: '#reservation' },
  { label: 'Private Chauffeur Istanbul', href: '#reservation' },
  { label: 'Hourly Chauffeur Istanbul', href: '#reservation' },
  { label: 'Mercedes E-Class Transfer Istanbul', href: '#vehicles' },
  { label: 'Mercedes S-Class Chauffeur Istanbul', href: '#vehicles' },
  { label: 'Viano VIP Transfer Istanbul', href: '#vehicles' },
  { label: 'Sprinter VIP Group Transfer Istanbul', href: '#vehicles' },
];

function normalizeLocale(locale: string): TransferLocale {
  return localeLinks.some((item) => item.code === locale) ? (locale as TransferLocale) : 'en';
}

export function TransferOnlyFooter({ locale = 'fr' }: { locale?: string }) {
  const l = normalizeLocale(locale);
  return (
    <footer className="border-t border-slate-200 bg-[#07111f] px-5 py-12 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.2fr_0.8fr]">
          <div>
            <a href="#reservation" className="inline-flex flex-col leading-none" aria-label="Bosphoras Transfer — Private Mobility Istanbul">
              <span className="font-serif text-[1.35rem] uppercase tracking-[0.22em] text-white">Bosphoras</span>
              <span className="mt-2 text-[0.58rem] font-black uppercase tracking-[0.30em] text-[#d6a448]">Private Mobility Istanbul</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">Istanbul airport transfer, private chauffeur by the hour, VIP Mercedes vehicles, flight tracking, airport meet & greet, card payment and instant confirmation.</p>
            <Link href="/" className="mt-6 inline-flex rounded-full border border-[#d6a448]/45 bg-[#d6a448]/10 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#f0c36a] transition hover:bg-[#d6a448] hover:text-[#07111f]">Bosphoras Private Office</Link>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.20em] text-[#d6a448]">Istanbul transfer SEO navigation</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {seoLinks.map((item) => <a key={item.label} href={item.href} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-[#d6a448]/55 hover:text-[#f0c36a]">{item.label}</a>)}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.20em] text-[#d6a448]">Languages</h2>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {localeLinks.map((item) => <Link key={item.code} href={item.href} hrefLang={item.code} title={item.title} className={`rounded-2xl border px-3 py-3 text-center text-xs font-black uppercase tracking-[0.08em] transition ${item.code === l ? 'border-[#d6a448] bg-[#d6a448] text-[#07111f]' : 'border-white/10 bg-white/[0.035] text-slate-300 hover:border-[#d6a448]/55 hover:text-[#f0c36a]'}`}>{item.label}</Link>)}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-6 text-slate-400 md:flex md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Bosphoras Transfer — Private Mobility Istanbul.</p>
          <p>Airport transfer IST · SAW · Private chauffeur · VIP mobility · Istanbul</p>
        </div>
      </div>
    </footer>
  );
}
