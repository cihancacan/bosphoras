'use client';

import { useMemo, useState } from 'react';
import { Calculator, Percent, WalletCards } from 'lucide-react';

function n(value: string) {
  const parsed = Number(value.replace(',', '.'));
  return Number.isFinite(parsed) ? parsed : 0;
}

function money(value: number, currency: string) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

function pct(value: number) {
  return `${Number.isFinite(value) ? value.toFixed(2) : '0.00'} %`;
}

export function InvestmentCalculator() {
  const [currency, setCurrency] = useState('EUR');
  const [price, setPrice] = useState('250000');
  const [surface, setSurface] = useState('100');
  const [entry, setEntry] = useState('75000');
  const [acquisitionPct, setAcquisitionPct] = useState('6');
  const [monthlyRent, setMonthlyRent] = useState('1600');
  const [occupancyPct, setOccupancyPct] = useState('92');
  const [monthlyCharges, setMonthlyCharges] = useState('180');
  const [annualMaintenance, setAnnualMaintenance] = useState('1500');
  const [financeAmount, setFinanceAmount] = useState('0');
  const [interest, setInterest] = useState('5');
  const [termYears, setTermYears] = useState('10');
  const [exitValue, setExitValue] = useState('325000');
  const [holdYears, setHoldYears] = useState('5');
  const [commissionPct, setCommissionPct] = useState('3');
  const [developerDepositPct, setDeveloperDepositPct] = useState('30');
  const [developerMonths, setDeveloperMonths] = useState('24');
  const [developerBalloonPct, setDeveloperBalloonPct] = useState('20');

  const result = useMemo(() => {
    const p = n(price);
    const s = n(surface);
    const e = n(entry);
    const costs = p * n(acquisitionPct) / 100;
    const adjustedRent = n(monthlyRent) * 12 * n(occupancyPct) / 100;
    const opCosts = n(monthlyCharges) * 12 + n(annualMaintenance);
    const noi = adjustedRent - opCosts;
    const totalCost = p + costs;
    const financing = n(financeAmount);
    const annualRate = n(interest) / 100;
    const months = Math.max(1, n(termYears) * 12);
    const monthlyRate = annualRate / 12;
    const monthlyDebt = financing <= 0
      ? 0
      : monthlyRate === 0
      ? financing / months
      : financing * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const annualDebt = monthlyDebt * 12;
    const cashInvested = Math.max(1, e + costs);
    const years = Math.max(1, n(holdYears));
    const annualizedAppreciation = p > 0 && n(exitValue) > 0 ? (Math.pow(n(exitValue) / p, 1 / years) - 1) * 100 : 0;
    const depositPct = n(developerDepositPct);
    const balloonPct = n(developerBalloonPct);
    const monthlyPlanPct = Math.max(0, 100 - depositPct - balloonPct);
    const developerMonthly = n(developerMonths) > 0 ? p * monthlyPlanPct / 100 / n(developerMonths) : 0;

    return {
      acquisitionCosts: costs,
      totalCost,
      adjustedRent,
      noi,
      priceM2: s > 0 ? p / s : 0,
      grossYield: p > 0 ? adjustedRent / p * 100 : 0,
      netYield: totalCost > 0 ? noi / totalCost * 100 : 0,
      monthlyDebt,
      annualDebt,
      cashOnCash: cashInvested > 0 ? (noi - annualDebt) / cashInvested * 100 : 0,
      dscr: annualDebt > 0 ? noi / annualDebt : 0,
      ltv: p > 0 ? financing / p * 100 : 0,
      annualizedAppreciation,
      commission: p * n(commissionPct) / 100,
      developerDeposit: p * depositPct / 100,
      developerMonthly,
      developerBalloon: p * balloonPct / 100,
      netAnnualCashflow: noi - annualDebt,
    };
  }, [
    price, surface, entry, acquisitionPct, monthlyRent, occupancyPct, monthlyCharges,
    annualMaintenance, financeAmount, interest, termYears, exitValue, holdYears,
    commissionPct, developerDepositPct, developerMonths, developerBalloonPct,
  ]);

  const inputClass = 'min-h-[42px] w-full border border-[#d8c7a1] bg-white px-3 text-sm text-[#121826]';
  const labelClass = 'grid gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#66707b]';

  return (
    <div className="space-y-8">
      <div className="grid gap-5 border border-[#d8c7a1] bg-white p-6 md:grid-cols-4">
        <label className={labelClass}>Devise
          <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={inputClass}>
            <option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option>
          </select>
        </label>
        <label className={labelClass}>Prix d'achat<input value={price} onChange={(e)=>setPrice(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Surface m²<input value={surface} onChange={(e)=>setSurface(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Capital aujourd'hui<input value={entry} onChange={(e)=>setEntry(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Frais acquisition %<input value={acquisitionPct} onChange={(e)=>setAcquisitionPct(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Loyer mensuel<input value={monthlyRent} onChange={(e)=>setMonthlyRent(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Occupation %<input value={occupancyPct} onChange={(e)=>setOccupancyPct(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Charges mensuelles<input value={monthlyCharges} onChange={(e)=>setMonthlyCharges(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Maintenance annuelle<input value={annualMaintenance} onChange={(e)=>setAnnualMaintenance(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Financement bancaire<input value={financeAmount} onChange={(e)=>setFinanceAmount(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Taux annuel %<input value={interest} onChange={(e)=>setInterest(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Durée prêt années<input value={termYears} onChange={(e)=>setTermYears(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Valeur de sortie<input value={exitValue} onChange={(e)=>setExitValue(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Durée détention années<input value={holdYears} onChange={(e)=>setHoldYears(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Commission %<input value={commissionPct} onChange={(e)=>setCommissionPct(e.target.value)} className={inputClass} inputMode="decimal" /></label>
      </div>

      <div className="grid gap-px bg-[#d8c7a1] sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['Prix / m²', money(result.priceM2, currency)],
          ['Rendement brut', pct(result.grossYield)],
          ['Rendement net', pct(result.netYield)],
          ['Cash-on-cash', pct(result.cashOnCash)],
          ['NOI annuel', money(result.noi, currency)],
          ['Cash-flow annuel', money(result.netAnnualCashflow, currency)],
          ['Mensualité bancaire', money(result.monthlyDebt, currency)],
          ['LTV', pct(result.ltv)],
          ['DSCR', result.dscr ? result.dscr.toFixed(2) : '—'],
          ['Frais acquisition', money(result.acquisitionCosts, currency)],
          ['Commission indicative', money(result.commission, currency)],
          ['Croissance annualisée', pct(result.annualizedAppreciation)],
        ].map(([label, value]) => (
          <div key={label} className="bg-[#101827] p-5 text-white">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#d9b972]">{label}</span>
            <strong className="mt-2 block font-serif text-2xl">{value}</strong>
          </div>
        ))}
      </div>

      <section className="border border-[#d8c7a1] bg-[#f6efe4] p-6">
        <div className="flex items-center gap-3"><WalletCards className="text-[#8a6728]" size={22}/><h3 className="font-serif text-3xl">Plan promoteur</h3></div>
        <p className="mt-2 text-sm leading-6 text-[#66707b]">Simulation commerciale uniquement. Les échéances contractuelles réelles du promoteur restent prioritaires.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <label className={labelClass}>Acompte %<input value={developerDepositPct} onChange={(e)=>setDeveloperDepositPct(e.target.value)} className={inputClass}/></label>
          <label className={labelClass}>Mensualités<input value={developerMonths} onChange={(e)=>setDeveloperMonths(e.target.value)} className={inputClass}/></label>
          <label className={labelClass}>Solde livraison %<input value={developerBalloonPct} onChange={(e)=>setDeveloperBalloonPct(e.target.value)} className={inputClass}/></label>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="bg-white p-5"><span className="text-xs uppercase tracking-[0.1em] text-[#66707b]">Aujourd'hui</span><strong className="mt-2 block font-serif text-2xl">{money(result.developerDeposit, currency)}</strong></div>
          <div className="bg-white p-5"><span className="text-xs uppercase tracking-[0.1em] text-[#66707b]">Mensualité promoteur</span><strong className="mt-2 block font-serif text-2xl">{money(result.developerMonthly, currency)}</strong></div>
          <div className="bg-white p-5"><span className="text-xs uppercase tracking-[0.1em] text-[#66707b]">À la livraison</span><strong className="mt-2 block font-serif text-2xl">{money(result.developerBalloon, currency)}</strong></div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-[#d8c7a1] bg-white p-5">
          <div className="flex items-center gap-2 text-[#8a6728]"><Calculator size={18}/><strong>Ce calculateur aide à comparer.</strong></div>
          <p className="mt-3 text-sm leading-6 text-[#66707b]">Il ne remplace ni une expertise, ni un conseil fiscal, juridique, bancaire ou financier. Les taxes et coûts spécifiques sont saisis manuellement pour éviter de présenter des hypothèses réglementaires comme des certitudes.</p>
        </div>
        <div className="border border-[#d8c7a1] bg-white p-5">
          <div className="flex items-center gap-2 text-[#8a6728]"><Percent size={18}/><strong>Lecture professionnelle.</strong></div>
          <p className="mt-3 text-sm leading-6 text-[#66707b]">Pour un dossier réel, comparez toujours plusieurs scénarios : loyer prudent, vacance plus élevée, coûts de maintenance, variation de devise et prix de sortie inférieur au scénario central.</p>
        </div>
      </div>
    </div>
  );
}
