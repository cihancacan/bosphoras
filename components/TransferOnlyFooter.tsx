import Link from 'next/link';
import { CreditCard, Plane, ShieldCheck } from 'lucide-react';

export function TransferOnlyFooter({ locale = 'fr' }: { locale?: string }) {
  const labels = {
    reserve: locale === 'fr' ? 'Réserver' : 'Book',
    vehicles: locale === 'fr' ? 'Véhicules' : 'Vehicles',
    airports: locale === 'fr' ? 'Aéroports IST / SAW' : 'IST / SAW Airports',
    faq: 'FAQ',
    privateOffice: 'Bosphoras Private Office',
  };

  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 text-[#0b1220] md:px-8 md:py-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="#reservation" className="inline-flex flex-col leading-none" aria-label="Bosphoras — Private Mobility Istanbul">
            <span className="font-serif text-[1.16rem] font-normal uppercase tracking-[0.22em] text-[#0b1220]">Bosphoras</span>
            <span className="mt-1 text-[0.54rem] font-black uppercase tracking-[0.30em] text-slate-500">Private Mobility Istanbul</span>
          </a>

          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-black uppercase tracking-[0.12em] text-slate-500" aria-label="Transfer footer navigation">
            <a href="#reservation" className="transition hover:text-[#0b1220]">{labels.reserve}</a>
            <a href="#vehicles" className="transition hover:text-[#0b1220]">{labels.vehicles}</a>
            <a href="#airports" className="transition hover:text-[#0b1220]">{labels.airports}</a>
            <a href="#transfer-faq" className="transition hover:text-[#0b1220]">{labels.faq}</a>
            <Link href="/" className="transition hover:text-[#0b1220]">{labels.privateOffice}</Link>
          </nav>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-2"><Plane size={14} /> Flight tracking</span>
            <span className="inline-flex items-center gap-2"><CreditCard size={14} /> Secure card payment</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck size={14} /> Instant confirmation</span>
          </div>
          <p>© {new Date().getFullYear()} Bosphoras Transfer — Istanbul private chauffeur.</p>
        </div>
      </div>
    </footer>
  );
}
