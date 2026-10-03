// @ts-nocheck
'use client';

import { useMemo, useState } from 'react';
import { Calculator, FileDown, History, Info, Landmark, Percent, Save, TrendingUp, WalletCards } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';

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

function Help({ children }: { children: React.ReactNode }) {
  return <span className="normal-case font-normal tracking-normal text-[#7b8794]">({children})</span>;
}

export function InvestmentCalculator({
  userId,
  partnerId,
  contacts = [],
  deals = [],
  listings = [],
  savedScenarios = [],
  onSaved,
}: {
  userId?: string;
  partnerId?: string | null;
  contacts?: any[];
  deals?: any[];
  listings?: any[];
  savedScenarios?: any[];
  onSaved?: () => void;
} = {}) {
  const supabase = getPortalSupabase();
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
  const [developerInterestMode, setDeveloperInterestMode] = useState('interest_free');
  const [developerMarkupPct, setDeveloperMarkupPct] = useState('0');
  const [developerCashDiscountPct, setDeveloperCashDiscountPct] = useState('0');
  const [annualRentGrowth, setAnnualRentGrowth] = useState('3');
  const [exitCostsPct, setExitCostsPct] = useState('3');
  const [fxStressPct, setFxStressPct] = useState('0');
  const [scenarioName, setScenarioName] = useState('');
  const [scenarioContactId, setScenarioContactId] = useState('');
  const [scenarioDealId, setScenarioDealId] = useState('');
  const [scenarioListingId, setScenarioListingId] = useState('');
  const [scenarioNotes, setScenarioNotes] = useState('');
  const [scenarioBusy, setScenarioBusy] = useState(false);
  const [scenarioMessage, setScenarioMessage] = useState('');

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
    const monthlyDebt =
      financing <= 0
        ? 0
        : monthlyRate === 0
          ? financing / months
          : financing * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

    const annualDebt = monthlyDebt * 12;
    const cashInvested = Math.max(1, e + costs);
    const years = Math.max(1, n(holdYears));
    const grossExit = n(exitValue);
    const exitCosts = grossExit * n(exitCostsPct) / 100;
    const netExit = grossExit - exitCosts;
    const annualizedAppreciation = p > 0 && netExit > 0 ? (Math.pow(netExit / p, 1 / years) - 1) * 100 : 0;
    const rentGrowthFactor = Math.pow(1 + n(annualRentGrowth) / 100, years);
    const futureAnnualRent = adjustedRent * rentGrowthFactor;
    const depositPct = n(developerDepositPct);
    const balloonPct = n(developerBalloonPct);
    const developerInstallmentTotal =
      developerInterestMode === 'interest_bearing' ? p * (1 + n(developerMarkupPct) / 100) : p;
    const developerCashPrice = p * (1 - n(developerCashDiscountPct) / 100);
    const monthlyPlanPct = Math.max(0, 100 - depositPct - balloonPct);
    const developerDeposit = developerInstallmentTotal * depositPct / 100;
    const developerBalloon = developerInstallmentTotal * balloonPct / 100;
    const developerMonthly = n(developerMonths) > 0
      ? developerInstallmentTotal * monthlyPlanPct / 100 / n(developerMonths)
      : 0;
    const breakEvenOccupancy =
      n(monthlyRent) > 0
        ? Math.min(100, ((opCosts + annualDebt) / (n(monthlyRent) * 12)) * 100)
        : 0;
    const fxStressValue = p * (1 + n(fxStressPct) / 100);
    const equity = Math.max(0, p - financing);

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
      developerDeposit,
      developerMonthly,
      developerBalloon,
      developerInstallmentTotal,
      developerCashPrice,
      developerFinancingCost: Math.max(0, developerInstallmentTotal - p),
      developerCashSaving: Math.max(0, p - developerCashPrice),
      netAnnualCashflow: noi - annualDebt,
      breakEvenOccupancy,
      exitCosts,
      netExit,
      futureAnnualRent,
      fxStressValue,
      equity,
    };
  }, [
    price, surface, entry, acquisitionPct, monthlyRent, occupancyPct, monthlyCharges,
    annualMaintenance, financeAmount, interest, termYears, exitValue, holdYears,
    commissionPct, developerDepositPct, developerMonths, developerBalloonPct,
    developerInterestMode, developerMarkupPct, developerCashDiscountPct,
    annualRentGrowth, exitCostsPct, fxStressPct,
  ]);

  const inputClass =
    'min-h-[42px] w-full border border-[#cfd8e3] bg-white px-3 text-sm text-[#162334] outline-none transition focus:border-[#315d7c] focus:ring-2 focus:ring-[#315d7c]/10';
  const labelClass = 'grid gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#51606f]';

  async function saveScenario() {
    if (!userId) return;
    if (!scenarioName.trim()) {
      setScenarioMessage('Donnez un nom au scénario.');
      return;
    }
    setScenarioBusy(true);
    setScenarioMessage('');
    try {
      const inputs = {
        price: n(price),
        surface: n(surface),
        entry: n(entry),
        acquisitionPct: n(acquisitionPct),
        monthlyRent: n(monthlyRent),
        occupancyPct: n(occupancyPct),
        monthlyCharges: n(monthlyCharges),
        annualMaintenance: n(annualMaintenance),
        financeAmount: n(financeAmount),
        interest: n(interest),
        termYears: n(termYears),
        exitValue: n(exitValue),
        holdYears: n(holdYears),
        commissionPct: n(commissionPct),
        developerDepositPct: n(developerDepositPct),
        developerMonths: n(developerMonths),
        developerBalloonPct: n(developerBalloonPct),
        developerInterestMode,
        developerMarkupPct: n(developerMarkupPct),
        developerCashDiscountPct: n(developerCashDiscountPct),
        annualRentGrowth: n(annualRentGrowth),
        exitCostsPct: n(exitCostsPct),
        fxStressPct: n(fxStressPct),
      };
      const outputs = {
        priceM2: result.priceM2,
        grossYield: result.grossYield,
        netYield: result.netYield,
        cashOnCash: result.cashOnCash,
        noi: result.noi,
        netAnnualCashflow: result.netAnnualCashflow,
        monthlyDebt: result.monthlyDebt,
        ltv: result.ltv,
        dscr: result.dscr,
        breakEvenOccupancy: result.breakEvenOccupancy,
        netExit: result.netExit,
        annualizedAppreciation: result.annualizedAppreciation,
        futureAnnualRent: result.futureAnnualRent,
        equity: result.equity,
      };

      const { error } = await supabase.from('investment_scenarios').insert({
        owner_user_id: userId,
        partner_id: partnerId || null,
        contact_id: scenarioContactId || null,
        deal_id: scenarioDealId || null,
        listing_id: scenarioListingId || null,
        name: scenarioName.trim(),
        currency,
        inputs,
        outputs,
        notes: scenarioNotes.trim() || null,
      });
      if (error) throw error;
      setScenarioMessage('Scénario enregistré dans le dossier.');
      setScenarioName('');
      setScenarioNotes('');
      onSaved?.();
    } catch (error) {
      setScenarioMessage(error instanceof Error ? error.message : 'Enregistrement impossible.');
    } finally {
      setScenarioBusy(false);
    }
  }

  function pdfSafe(value:any) {
    return String(value ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g,'')
      .replace(/[’‘]/g,"'")
      .replace(/[“”]/g,'"')
      .replace(/[–—]/g,'-')
      .replace(/[^\x20-\x7E]/g,' ');
  }

  function wrapPdfText(value:string,max=88){
    const words=pdfSafe(value).split(/\s+/).filter(Boolean);
    const lines:string[]=[];
    let line='';
    words.forEach((word)=>{
      const candidate=line?line+' '+word:word;
      if(candidate.length>max&&line){lines.push(line);line=word;}else line=candidate;
    });
    if(line)lines.push(line);
    return lines.length?lines:[''];
  }

  function createPdfBytes(rows:Array<{text:string;size?:number;bold?:boolean;gap?:number}>) {
    const pages:Array<Array<{text:string;size:number;bold:boolean;y:number}>>=[[]];
    let pageIndex=0;
    let y=790;

    const pushLine=(text:string,size=10,bold=false,gap=15)=>{
      if(y<58){pages.push([]);pageIndex+=1;y=790;}
      pages[pageIndex].push({text:pdfSafe(text),size,bold,y});
      y-=gap;
    };

    rows.forEach((row)=>{
      const size=row.size||10;
      const gap=row.gap||Math.max(14,size+4);
      wrapPdfText(row.text,size>=16?58:88).forEach((line,idx)=>pushLine(line,size,Boolean(row.bold),idx===0?gap:Math.max(13,size+2)));
      if(size>=14)y-=4;
    });

    const pageCount=pages.length;
    const regularFontObj=3+pageCount*2;
    const boldFontObj=regularFontObj+1;
    const objects:string[]=[];
    objects[1]='<< /Type /Catalog /Pages 2 0 R >>';
    const kids=pages.map((_,i)=>String(3+i*2)+' 0 R').join(' ');
    objects[2]='<< /Type /Pages /Kids ['+kids+'] /Count '+pageCount+' >>';

    pages.forEach((page,i)=>{
      const pageObj=3+i*2;
      const contentObj=pageObj+1;
      const stream=page.map((line)=>{
        const font=line.bold?'F2':'F1';
        const escaped=line.text.replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
        return 'BT /'+font+' '+line.size+' Tf 1 0 0 1 50 '+line.y+' Tm ('+escaped+') Tj ET';
      }).join('\n');
      objects[pageObj]='<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 '+regularFontObj+' 0 R /F2 '+boldFontObj+' 0 R >> >> /Contents '+contentObj+' 0 R >>';
      objects[contentObj]='<< /Length '+stream.length+' >>\nstream\n'+stream+'\nendstream';
    });
    objects[regularFontObj]='<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
    objects[boldFontObj]='<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';

    let pdf='%PDF-1.4\n% Bosphoras\n';
    const offsets:number[]=[0];
    for(let i=1;i<objects.length;i++){
      offsets[i]=pdf.length;
      pdf+=String(i)+' 0 obj\n'+objects[i]+'\nendobj\n';
    }
    const xref=pdf.length;
    pdf+='xref\n0 '+objects.length+'\n0000000000 65535 f \n';
    for(let i=1;i<objects.length;i++)pdf+=String(offsets[i]).padStart(10,'0')+' 00000 n \n';
    pdf+='trailer\n<< /Size '+objects.length+' /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF';
    return new Uint8Array(Array.from(pdf,(char)=>char.charCodeAt(0)&255));
  }

  function printReport() {
    const reportName=scenarioName.trim()||'Analyse investissement';
    const listing=listings.find((item:any)=>item.id===scenarioListingId);
    const propertyName=listing?.title?.fr||listing?.external_id||'';
    const reportRows:Array<{text:string;size?:number;bold?:boolean;gap?:number}>=[
      {text:'BOSPHORAS PROPERTY & INVESTMENT',size:10,bold:true,gap:22},
      {text:reportName,size:22,bold:true,gap:30},
      {text:(propertyName?propertyName+' - ':'')+'Rapport genere '+new Date().toLocaleString('fr-FR'),size:9,gap:24},
      {text:'SYNTHESE',size:13,bold:true,gap:22},
      {text:'Prix achat : '+money(n(price),currency),size:11,bold:true},
      {text:'Capital disponible : '+money(n(entry),currency),size:11,bold:true},
      {text:'Valeur de sortie : '+money(n(exitValue),currency),size:11,bold:true,gap:24},
      {text:'INDICATEURS INVESTISSEMENT',size:13,bold:true,gap:22},
      ...metrics.flatMap(([metric,value,help])=>[
        {text:metric+' : '+value,size:10,bold:true,gap:14},
        {text:String(help),size:8,gap:13},
      ]),
      {text:'PLAN PROMOTEUR SIMULE',size:13,bold:true,gap:22},
      {text:'Prix comptant : '+money(result.developerCashPrice,currency),size:10,bold:true},
      {text:'Prix echelonne : '+money(result.developerInstallmentTotal,currency),size:10,bold:true},
      {text:"Aujourd'hui : "+money(result.developerDeposit,currency),size:10},
      {text:'Mensualite promoteur : '+money(result.developerMonthly,currency),size:10},
      {text:'A la livraison : '+money(result.developerBalloon,currency),size:10},
      {text:developerInterestMode==='interest_bearing'?'Surcout echeancier saisi : '+developerMarkupPct+'%':'Echeancier indique sans interet / 0%',size:9},
      {text:'Remise comptant saisie : '+developerCashDiscountPct+'%',size:9,gap:24},
      {text:'NOTE DE METHODE',size:12,bold:true,gap:20},
      {text:"Cette simulation compare des hypotheses saisies par l'utilisateur. Elle ne constitue ni une evaluation, ni une promesse de rendement, ni un conseil fiscal, juridique, bancaire ou financier. Les couts, taxes, taux, loyers et conditions de paiement doivent etre verifies sur le dossier reel.",size:8,gap:12},
    ];

    const bytes=createPdfBytes(reportRows);
    const blob=new Blob([bytes],{type:'application/pdf'});
    const url=URL.createObjectURL(blob);
    const link=document.createElement('a');
    const safeName=pdfSafe(reportName).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'analyse-investissement';
    link.href=url;
    link.download='bosphoras-'+safeName+'.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(()=>URL.revokeObjectURL(url),1500);
  }

  const metrics = [
    ['Prix / m²', money(result.priceM2, currency), 'prix du bien ÷ surface'],
    ['Rendement brut', pct(result.grossYield), 'loyers annuels encaissables ÷ prix'],
    ['Rendement net', pct(result.netYield), 'NOI ÷ coût total acquisition'],
    ['Cash-on-cash', pct(result.cashOnCash), 'cash-flow annuel ÷ cash réellement investi'],
    ['NOI annuel', money(result.noi, currency), 'loyers après vacance, charges et maintenance, avant dette'],
    ['Cash-flow annuel', money(result.netAnnualCashflow, currency), 'NOI moins remboursement annuel du financement'],
    ['Mensualité bancaire', money(result.monthlyDebt, currency), 'simulation capital + intérêts'],
    ['LTV', pct(result.ltv), 'montant financé ÷ valeur du bien'],
    ['DSCR', result.dscr ? result.dscr.toFixed(2) : '—', 'NOI ÷ dette annuelle ; > 1 signifie que le revenu couvre la dette'],
    ['Occupation seuil', pct(result.breakEvenOccupancy), 'taux minimum d’occupation pour couvrir charges + dette'],
    ['Frais acquisition', money(result.acquisitionCosts, currency), 'pourcentage saisi appliqué au prix'],
    ['Commission indicative', money(result.commission, currency), 'prix × taux de commission saisi'],
    ['Valeur nette de sortie', money(result.netExit, currency), 'valeur de revente moins frais de sortie'],
    ['Croissance annualisée', pct(result.annualizedAppreciation), 'progression annuelle moyenne du prix net de sortie'],
    ['Loyer annuel futur', money(result.futureAnnualRent, currency), 'projection avec croissance annuelle du loyer'],
    ['Equity initiale', money(result.equity, currency), 'prix moins financement bancaire'],
  ];

  return (
    <div className="space-y-8 [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
      <div className="grid gap-5 border border-[#d9e1e8] bg-white p-6 md:grid-cols-4">
        <label className={labelClass}>Devise <Help>devise de travail du dossier</Help>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={inputClass}>
            <option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option><option>AED</option><option>KZT</option><option>GEL</option>
          </select>
        </label>
        <label className={labelClass}>Prix d'achat <Help>prix contractuel ou prix demandé</Help><input value={price} onChange={(e)=>setPrice(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Surface m² <Help>surface vendable utile à comparer</Help><input value={surface} onChange={(e)=>setSurface(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Capital disponible aujourd'hui <Help>cash mobilisable maintenant</Help><input value={entry} onChange={(e)=>setEntry(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Frais acquisition % <Help>taxes, frais juridiques et transaction à estimer</Help><input value={acquisitionPct} onChange={(e)=>setAcquisitionPct(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Loyer mensuel <Help>hypothèse réaliste, pas le meilleur scénario</Help><input value={monthlyRent} onChange={(e)=>setMonthlyRent(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Occupation % <Help>part de l’année réellement louée</Help><input value={occupancyPct} onChange={(e)=>setOccupancyPct(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Charges mensuelles <Help>site, copropriété, services récurrents</Help><input value={monthlyCharges} onChange={(e)=>setMonthlyCharges(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Maintenance annuelle <Help>réparations, mobilier, renouvellements</Help><input value={annualMaintenance} onChange={(e)=>setAnnualMaintenance(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Financement bancaire <Help>montant réellement emprunté</Help><input value={financeAmount} onChange={(e)=>setFinanceAmount(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Taux annuel % <Help>taux nominal de simulation</Help><input value={interest} onChange={(e)=>setInterest(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Durée prêt années <Help>durée d’amortissement</Help><input value={termYears} onChange={(e)=>setTermYears(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Valeur de sortie <Help>valeur de revente estimée à l’horizon choisi</Help><input value={exitValue} onChange={(e)=>setExitValue(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Durée détention <Help>nombre d’années avant revente</Help><input value={holdYears} onChange={(e)=>setHoldYears(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Frais de sortie % <Help>vente, juridique, agence, friction de sortie</Help><input value={exitCostsPct} onChange={(e)=>setExitCostsPct(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Croissance loyer % / an <Help>hypothèse à stresser à la baisse</Help><input value={annualRentGrowth} onChange={(e)=>setAnnualRentGrowth(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Commission % <Help>commission ou revenu partenaire indicatif</Help><input value={commissionPct} onChange={(e)=>setCommissionPct(e.target.value)} className={inputClass} inputMode="decimal" /></label>
        <label className={labelClass}>Stress devise % <Help>impact théorique d’une variation du taux de change</Help><input value={fxStressPct} onChange={(e)=>setFxStressPct(e.target.value)} className={inputClass} inputMode="decimal" /></label>
      </div>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <TrendingUp size={19} className="text-[#315d7c]" />
          <div>
            <h3 className="text-lg font-semibold text-[#162334]">Lecture investissement</h3>
            <p className="text-xs text-[#7b8794]">Les indicateurs se recalculent dès qu’une hypothèse change.</p>
          </div>
        </div>
        <div className="grid gap-px bg-[#d9e1e8] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([metric, value, help]) => (
            <div key={metric} className="bg-[#132538] p-5 text-white">
              <span className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#a9bfd0]">{metric}</span>
              <strong className="mt-2 block text-2xl font-semibold tracking-[-0.02em]">{value}</strong>
              <span className="mt-2 block text-[0.7rem] leading-5 text-[#91a2b2]">({help})</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-[#d9e1e8] bg-[#edf3f7] p-6">
        <div className="flex items-center gap-3">
          <WalletCards className="text-[#315d7c]" size={22}/>
          <div>
            <h3 className="text-xl font-semibold text-[#162334]">Plan promoteur</h3>
            <p className="mt-1 text-xs text-[#687685]">Pour visualiser ce que le client paie aujourd’hui, pendant le chantier et à la livraison.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          <label className={labelClass}>Acompte % <Help>part due à la réservation/signature</Help><input value={developerDepositPct} onChange={(e)=>setDeveloperDepositPct(e.target.value)} className={inputClass}/></label>
          <label className={labelClass}>Nombre de mensualités <Help>échéances avant livraison</Help><input value={developerMonths} onChange={(e)=>setDeveloperMonths(e.target.value)} className={inputClass}/></label>
          <label className={labelClass}>Solde livraison % <Help>balloon final à la remise des clés</Help><input value={developerBalloonPct} onChange={(e)=>setDeveloperBalloonPct(e.target.value)} className={inputClass}/></label>
          <label className={labelClass}>Type échéancier <Help>selon offre réelle du promoteur</Help><select value={developerInterestMode} onChange={(e)=>setDeveloperInterestMode(e.target.value)} className={inputClass}><option value="interest_free">Sans intérêt / 0%</option><option value="interest_bearing">Avec surcoût / intérêt</option></select></label>
          <label className={labelClass}>Surcoût total % <Help>majoration totale du prix pour paiement échelonné, si applicable</Help><input value={developerMarkupPct} onChange={(e)=>setDeveloperMarkupPct(e.target.value)} className={inputClass} disabled={developerInterestMode!=='interest_bearing'}/></label>
          <label className={labelClass}>Remise comptant % <Help>remise officielle si paiement intégral immédiat</Help><input value={developerCashDiscountPct} onChange={(e)=>setDeveloperCashDiscountPct(e.target.value)} className={inputClass}/></label>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <div className="bg-white p-5"><span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#657586]">Prix comptant</span><strong className="mt-2 block text-2xl font-semibold">{money(result.developerCashPrice, currency)}</strong><small className="mt-1 block text-[#7b8794]">(prix après remise comptant saisie)</small></div>
          <div className="bg-white p-5"><span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#657586]">Prix échelonné</span><strong className="mt-2 block text-2xl font-semibold">{money(result.developerInstallmentTotal, currency)}</strong><small className="mt-1 block text-[#7b8794]">(inclut le surcoût saisi, s’il existe)</small></div>
          <div className="bg-white p-5"><span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#657586]">Aujourd'hui</span><strong className="mt-2 block text-2xl font-semibold">{money(result.developerDeposit, currency)}</strong><small className="mt-1 block text-[#7b8794]">(acompte sur prix échelonné)</small></div>
          <div className="bg-white p-5"><span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#657586]">Mensualité promoteur</span><strong className="mt-2 block text-2xl font-semibold">{money(result.developerMonthly, currency)}</strong><small className="mt-1 block text-[#7b8794]">(hors éventuelles échéances spéciales)</small></div>
          <div className="bg-white p-5"><span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#657586]">À la livraison</span><strong className="mt-2 block text-2xl font-semibold">{money(result.developerBalloon, currency)}</strong><small className="mt-1 block text-[#7b8794]">(solde final simulé)</small></div>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button type="button" onClick={printReport} className="inline-flex min-h-[44px] items-center gap-2 border border-[#12304a] bg-white px-5 text-sm font-semibold text-[#12304a]"><FileDown size={16}/>Télécharger le PDF</button>
          <span className="text-xs leading-5 text-[#687685]">Téléchargement direct d’un rapport PDF Bosphoras avec les hypothèses, indicateurs et conditions du plan promoteur.</span>
        </div>
      </section>

      {userId ? (
        <section className="border border-[#d9e1e8] bg-white p-6">
          <div className="flex items-center gap-3">
            <Save size={19} className="text-[#315d7c]" />
            <div>
              <h3 className="text-lg font-semibold text-[#162334]">Enregistrer ce scénario</h3>
              <p className="text-xs text-[#7b8794]">Conservez l’analyse dans le CRM pour la reprendre avec le client ou comparer plusieurs hypothèses.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <label className={labelClass}>Nom du scénario
              <input value={scenarioName} onChange={(e)=>setScenarioName(e.target.value)} placeholder="Ex. Istanbul 2+1 prudent" className={inputClass}/>
            </label>
            <label className={labelClass}>Contact CRM
              <select value={scenarioContactId} onChange={(e)=>setScenarioContactId(e.target.value)} className={inputClass}>
                <option value="">Non lié</option>
                {contacts.map((contact:any)=><option key={contact.id} value={contact.id}>{[contact.first_name,contact.last_name].filter(Boolean).join(' ')||contact.email||'Contact'}</option>)}
              </select>
            </label>
            <label className={labelClass}>Deal
              <select value={scenarioDealId} onChange={(e)=>setScenarioDealId(e.target.value)} className={inputClass}>
                <option value="">Non lié</option>
                {deals.map((deal:any)=><option key={deal.id} value={deal.id}>{deal.title}</option>)}
              </select>
            </label>
            <label className={labelClass}>Bien / projet
              <select value={scenarioListingId} onChange={(e)=>setScenarioListingId(e.target.value)} className={inputClass}>
                <option value="">Non lié</option>
                {listings.map((listing:any)=><option key={listing.id} value={listing.id}>{listing.title?.fr||listing.external_id}</option>)}
              </select>
            </label>
          </div>
          <label className="mt-4 grid gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#51606f]">Notes
            <textarea value={scenarioNotes} onChange={(e)=>setScenarioNotes(e.target.value)} rows={3} className="border border-[#cfd8e3] bg-white px-3 py-3 text-sm leading-6 outline-none focus:border-[#315d7c]" placeholder="Hypothèses, réserves, prochaine action…"/>
          </label>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button disabled={scenarioBusy} onClick={saveScenario} className="inline-flex min-h-[44px] items-center gap-2 bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50"><Save size={15}/>{scenarioBusy?'Enregistrement…':'Enregistrer le scénario'}</button>
            {scenarioMessage ? <span className="text-sm text-[#5f6e7d]">{scenarioMessage}</span> : null}
          </div>

          {savedScenarios.length ? (
            <div className="mt-7 border-t border-[#e7edf2] pt-5">
              <div className="mb-3 flex items-center gap-2 text-[#315d7c]"><History size={16}/><strong className="text-sm">Scénarios récents</strong></div>
              <div className="grid gap-3 md:grid-cols-2">
                {savedScenarios.slice(0,6).map((scenario:any)=>(
                  <article key={scenario.id} className="border border-[#e1e7ed] bg-[#f8fafb] p-4">
                    <strong className="block text-sm text-[#162334]">{scenario.name}</strong>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#687685]">
                      <span>Rend. net {pct(Number(scenario.outputs?.netYield||0))}</span>
                      <span>Cash-flow {money(Number(scenario.outputs?.netAnnualCashflow||0),scenario.currency||currency)}</span>
                      <span>DSCR {Number(scenario.outputs?.dscr||0).toFixed(2)}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="grid gap-4 md:grid-cols-3">
        <div className="border border-[#d9e1e8] bg-white p-5">
          <div className="flex items-center gap-2 text-[#315d7c]"><Calculator size={18}/><strong>Comparer des scénarios</strong></div>
          <p className="mt-3 text-sm leading-6 text-[#687685]">Dupliquez mentalement le dossier en scénario prudent, central et optimiste. Un investissement doit rester cohérent quand le loyer baisse ou que la vacance augmente.</p>
        </div>
        <div className="border border-[#d9e1e8] bg-white p-5">
          <div className="flex items-center gap-2 text-[#315d7c]"><Landmark size={18}/><strong>Dette et liquidité</strong></div>
          <p className="mt-3 text-sm leading-6 text-[#687685]">LTV et DSCR servent à mesurer le poids du financement. Le capital disponible aujourd’hui doit aussi couvrir les frais et une marge de sécurité.</p>
        </div>
        <div className="border border-[#d9e1e8] bg-white p-5">
          <div className="flex items-center gap-2 text-[#315d7c]"><Info size={18}/><strong>Hypothèses à confirmer</strong></div>
          <p className="mt-3 text-sm leading-6 text-[#687685]">Fiscalité, frais officiels, règles bancaires, change et coûts de transaction doivent être validés dossier par dossier. Le calculateur ne remplace pas les professionnels réglementés.</p>
        </div>
      </section>
    </div>
  );
}
