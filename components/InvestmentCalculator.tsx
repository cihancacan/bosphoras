// @ts-nocheck
'use client';

import { useMemo, useState } from 'react';
import { Calculator, CheckCircle2, FileDown, History, Info, Landmark, Link2, Percent, Save, TrendingUp, UserRound, WalletCards } from 'lucide-react';
import { getPortalSupabase } from '@/lib/portalSupabase';
import { downloadInvestorReportPdf } from '@/components/InvestorReportPdf';

type DeskLocale='fr'|'en'|'ru';

const C:any={
  fr:{
    dossier:'Préparer le dossier investisseur', dossierText:'Utilisez un calcul libre ou partez d’un client et/ou d’un bien existant. Les données sélectionnées préremplissent le scénario.',
    clientLink:'Lier un client',propertyLink:'Lier un bien',yes:'Oui',no:'Non',client:'Client CRM',property:'Bien / projet',reportLanguage:'Langue du PDF',
    dataTaken:'Données reprises automatiquement',clientTaken:'capital, budget et coordonnées client',propertyTaken:'prix, devise, surface et conditions de paiement du bien',
    mismatch:'La devise du client est différente de celle du bien : le capital client est affiché dans le dossier mais n’est pas converti automatiquement.',
    currency:'Devise',price:'Prix d’achat',surface:'Surface m²',entry:'Capital disponible aujourd’hui',acquisition:'Frais acquisition %',
    rent:'Loyer mensuel',occupancy:'Occupation %',charges:'Charges mensuelles',maintenance:'Maintenance annuelle',
    finance:'Financement bancaire',rate:'Taux annuel %',term:'Durée prêt années',exit:'Valeur de sortie',hold:'Durée détention',
    exitCosts:'Frais de sortie %',rentGrowth:'Croissance loyer % / an',commission:'Commission %',fx:'Stress devise %',
    investment:'Lecture investissement',investmentText:'Les indicateurs se recalculent dès qu’une hypothèse change.',
    plan:'Plan promoteur',planText:'Les conditions du bien sont prioritaires lorsqu’un bien est sélectionné. La simulation synthétique reste ajustable.',planEnabled:'Plan promoteur applicable',
    exactPlan:'Échéancier enregistré sur le bien',step:'Étape',due:'Échéance',share:'Part',amount:'Montant',planTotal:'Total du plan',
    incompletePlan:'Le plan enregistré ne totalise pas 100 %. Vérifiez les conditions du promoteur avant d’envoyer le PDF.',
    deposit:'Acompte %',months:'Nombre de mensualités',balloon:'Solde livraison %',planType:'Type échéancier',markup:'Surcoût total %',cashDiscount:'Remise comptant %',
    interestFree:'Sans intérêt / 0%',interestBearing:'Avec surcoût / intérêt',cashPrice:'Prix comptant',installmentPrice:'Prix échelonné',
    today:"Aujourd’hui",developerMonthly:'Mensualité promoteur',handover:'À la livraison',
    pdf:'Télécharger le dossier PDF',pdfText:'Rapport investisseur complet avec client, bien, hypothèses, échéancier, indicateurs et méthodologie.',
    save:'Enregistrer ce scénario',saveText:'Conservez l’analyse dans le CRM pour la reprendre ou comparer plusieurs hypothèses.',
    scenarioName:'Nom du scénario',deal:'Deal',notes:'Notes',saveButton:'Enregistrer le scénario',saving:'Enregistrement…',
    notLinked:'Non lié',recent:'Scénarios récents',load:'Reprendre',
    compare:'Comparer des scénarios',compareText:'Testez un scénario prudent, central et optimiste. Un dossier robuste doit rester cohérent quand le loyer baisse ou la vacance augmente.',
    debt:'Dette et liquidité',debtText:'Le rapport distingue le capital disponible du cash réellement nécessaire et met en évidence la marge ou le déficit de liquidité.',
    confirm:'Hypothèses à confirmer',confirmText:'Fiscalité, frais officiels, règles bancaires, change, loyers et conditions de paiement doivent être validés dossier par dossier.',
    requiredCash:'Cash initial requis',liquidity:'Marge de liquidité',
    helpPrice:'prix contractuel ou prix demandé',helpEntry:'cash mobilisable maintenant',helpRent:'hypothèse à confirmer avec le marché',
    helpOccupancy:'part de l’année réellement louée',helpFinance:'montant réellement emprunté',helpExit:'valeur estimée à l’horizon choisi',
    msgName:'Donnez un nom au scénario.',msgSaved:'Scénario enregistré dans le dossier.',free:'Calcul libre',loadingReport:'Génération du PDF…',
  },
  en:{
    dossier:'Prepare investor file', dossierText:'Use a free calculation or start from an existing client and/or property. Selected data prefills the scenario.',
    clientLink:'Link a client',propertyLink:'Link a property',yes:'Yes',no:'No',client:'CRM client',property:'Property / project',reportLanguage:'PDF language',
    dataTaken:'Automatically imported data',clientTaken:'client capital, budget and contact details',propertyTaken:'property price, currency, surface and payment terms',
    mismatch:'The client currency differs from the property currency. Client capital is shown in the report but is not automatically converted.',
    currency:'Currency',price:'Purchase price',surface:'Surface sqm',entry:'Available capital today',acquisition:'Acquisition costs %',
    rent:'Monthly rent',occupancy:'Occupancy %',charges:'Monthly charges',maintenance:'Annual maintenance',
    finance:'Bank financing',rate:'Annual rate %',term:'Loan term years',exit:'Exit value',hold:'Holding period years',
    exitCosts:'Exit costs %',rentGrowth:'Annual rent growth %',commission:'Commission %',fx:'FX stress %',
    investment:'Investment reading',investmentText:'Indicators recalculate immediately when an assumption changes.',
    plan:'Developer payment plan',planText:'Property terms take priority when a property is selected. The summary simulation remains adjustable.',planEnabled:'Developer plan applies',
    exactPlan:'Payment schedule recorded for the property',step:'Step',due:'Due',share:'Share',amount:'Amount',planTotal:'Plan total',
    incompletePlan:'The recorded plan does not total 100%. Confirm the developer terms before sending the PDF.',
    deposit:'Deposit %',months:'Number of monthly payments',balloon:'Handover balance %',planType:'Schedule type',markup:'Total premium %',cashDiscount:'Cash discount %',
    interestFree:'Interest-free / 0%',interestBearing:'Interest / premium applies',cashPrice:'Cash price',installmentPrice:'Installment price',
    today:'Today',developerMonthly:'Developer monthly payment',handover:'At handover',
    pdf:'Download investor PDF',pdfText:'Complete investor report with client, property, assumptions, payment schedule, indicators and methodology.',
    save:'Save this scenario',saveText:'Keep the analysis in the CRM to resume it or compare several assumptions.',
    scenarioName:'Scenario name',deal:'Deal',notes:'Notes',saveButton:'Save scenario',saving:'Saving…',
    notLinked:'Not linked',recent:'Recent scenarios',load:'Load',
    compare:'Compare scenarios',compareText:'Test prudent, central and optimistic cases. A robust investment should remain coherent when rent falls or vacancy rises.',
    debt:'Debt & liquidity',debtText:'The report separates available capital from the cash actually required and highlights any liquidity margin or shortfall.',
    confirm:'Assumptions to confirm',confirmText:'Taxes, official fees, banking rules, FX, rents and payment terms must be validated case by case.',
    requiredCash:'Initial cash required',liquidity:'Liquidity margin',
    helpPrice:'contractual or asking price',helpEntry:'cash available now',helpRent:'assumption to confirm against the market',
    helpOccupancy:'share of the year actually rented',helpFinance:'amount actually borrowed',helpExit:'estimated value at selected horizon',
    msgName:'Give the scenario a name.',msgSaved:'Scenario saved to the file.',free:'Free calculation',loadingReport:'Generating PDF…',
  },
  ru:{
    dossier:'Подготовить досье инвестора', dossierText:'Используйте свободный расчет или выберите существующего клиента и/или объект. Данные автоматически заполнят сценарий.',
    clientLink:'Привязать клиента',propertyLink:'Привязать объект',yes:'Да',no:'Нет',client:'Клиент CRM',property:'Объект / проект',reportLanguage:'Язык PDF',
    dataTaken:'Данные заполняются автоматически',clientTaken:'капитал, бюджет и контакты клиента',propertyTaken:'цена, валюта, площадь и условия оплаты объекта',
    mismatch:'Валюта клиента отличается от валюты объекта. Капитал клиента будет указан в отчете, но автоматическая конвертация не выполняется.',
    currency:'Валюта',price:'Цена покупки',surface:'Площадь м²',entry:'Доступный капитал сегодня',acquisition:'Расходы на приобретение %',
    rent:'Месячная аренда',occupancy:'Загрузка %',charges:'Ежемесячные расходы',maintenance:'Годовое обслуживание',
    finance:'Банковское финансирование',rate:'Годовая ставка %',term:'Срок кредита, лет',exit:'Стоимость выхода',hold:'Срок владения, лет',
    exitCosts:'Расходы при выходе %',rentGrowth:'Рост аренды % / год',commission:'Комиссия %',fx:'Валютный стресс %',
    investment:'Инвестиционные показатели',investmentText:'Показатели пересчитываются при каждом изменении предположений.',
    plan:'План оплаты застройщика',planText:'Если выбран объект, его условия имеют приоритет. Сводную модель можно корректировать.',planEnabled:'Применяется план застройщика',
    exactPlan:'График оплаты, записанный для объекта',step:'Этап',due:'Срок',share:'Доля',amount:'Сумма',planTotal:'Итого по плану',
    incompletePlan:'Записанный план не составляет 100%. Подтвердите условия у застройщика перед отправкой PDF.',
    deposit:'Первоначальный взнос %',months:'Количество ежемесячных платежей',balloon:'Остаток при передаче %',planType:'Тип графика',markup:'Общее удорожание %',cashDiscount:'Скидка при полной оплате %',
    interestFree:'Без процентов / 0%',interestBearing:'С удорожанием / процентами',cashPrice:'Цена при полной оплате',installmentPrice:'Цена в рассрочку',
    today:'Сегодня',developerMonthly:'Ежемесячный платеж застройщику',handover:'При передаче',
    pdf:'Скачать PDF для инвестора',pdfText:'Полный отчет: клиент, объект, предположения, график платежей, показатели и методология.',
    save:'Сохранить сценарий',saveText:'Сохраните анализ в CRM, чтобы вернуться к нему или сравнить разные сценарии.',
    scenarioName:'Название сценария',deal:'Сделка',notes:'Примечания',saveButton:'Сохранить сценарий',saving:'Сохранение…',
    notLinked:'Не привязано',recent:'Последние сценарии',load:'Открыть',
    compare:'Сравнение сценариев',compareText:'Проверьте осторожный, базовый и оптимистичный сценарии. Инвестиция должна оставаться логичной при снижении аренды или росте вакантности.',
    debt:'Долг и ликвидность',debtText:'Отчет разделяет доступный капитал и фактически необходимый первоначальный cash и показывает запас или дефицит ликвидности.',
    confirm:'Что необходимо подтвердить',confirmText:'Налоги, официальные расходы, банковские правила, валюту, аренду и условия оплаты необходимо подтверждать по каждому объекту.',
    requiredCash:'Необходимый первоначальный cash',liquidity:'Запас ликвидности',
    helpPrice:'договорная цена или цена предложения',helpEntry:'доступный cash сегодня',helpRent:'предположение, которое нужно подтвердить по рынку',
    helpOccupancy:'доля года, когда объект реально сдается',helpFinance:'фактически заемная сумма',helpExit:'оценка стоимости на выбранном горизонте',
    msgName:'Укажите название сценария.',msgSaved:'Сценарий сохранен в досье.',free:'Свободный расчет',loadingReport:'Формирование PDF…',
  }
};

function n(value:any){const parsed=Number(String(value??'').replace(',','.'));return Number.isFinite(parsed)?parsed:0;}
function localized(value:any,locale:DeskLocale){if(!value)return'';if(typeof value==='string')return value;return value?.[locale]||value?.en||value?.fr||value?.ru||Object.values(value||{})[0]||'';}
function clientName(c:any){return [c?.first_name,c?.last_name].filter(Boolean).join(' ')||c?.company||c?.email||'Contact';}
function money(value:number,currency:string,locale:DeskLocale){
  try{return new Intl.NumberFormat(locale==='ru'?'ru-RU':locale==='en'?'en-GB':'fr-FR',{style:'currency',currency,maximumFractionDigits:0}).format(Number.isFinite(value)?value:0);}
  catch{return String(Math.round(value||0))+' '+currency;}
}
function pct(value:number,locale:DeskLocale){return (Number.isFinite(value)?value:0).toLocaleString(locale==='ru'?'ru-RU':locale==='en'?'en-GB':'fr-FR',{minimumFractionDigits:1,maximumFractionDigits:2})+' %';}
function Help({children}:{children:React.ReactNode}){return <span className="normal-case font-normal tracking-normal text-[#7b8794]">({children})</span>;}

function derivePlan(listing:any){
  const plan=Array.isArray(listing?.payment_plan)?listing.payment_plan.filter(Boolean):[];
  const text=(step:any)=>[localized(step?.label,'en'),localized(step?.due,'en'),localized(step?.label,'fr'),localized(step?.due,'fr'),localized(step?.label,'ru'),localized(step?.due,'ru')].join(' ').toLowerCase();
  const first=plan.find((s:any)=>/booking|reservation|deposit|acompte|réservation|бронир|первонач/.test(text(s)))||plan[0];
  const last=plan.find((s:any)=>/handover|delivery|livraison|remise|передач|сдач/.test(text(s)))||plan[plan.length-1];
  return {
    plan,
    depositPct:first?.percentage!=null?n(first.percentage):0,
    balloonPct:last?.percentage!=null&&last!==first?n(last.percentage):0,
    totalPct:plan.reduce((sum:number,s:any)=>sum+n(s?.percentage),0),
  };
}

export function InvestmentCalculator({
  locale='fr',userId,partnerId,contacts=[],deals=[],listings=[],savedScenarios=[],onSaved,
}:{
  locale?:DeskLocale;userId?:string;partnerId?:string|null;contacts?:any[];deals?:any[];listings?:any[];savedScenarios?:any[];onSaved?:()=>void;
}={}){
  const l=(['fr','en','ru'].includes(locale)?locale:'fr') as DeskLocale;
  const c=C[l];
  const supabase=getPortalSupabase();

  const [useClient,setUseClient]=useState(false);
  const [useProperty,setUseProperty]=useState(false);
  const [reportLanguage,setReportLanguage]=useState<DeskLocale>(l);
  const [currency,setCurrency]=useState('EUR');
  const [price,setPrice]=useState('250000');
  const [surface,setSurface]=useState('100');
  const [entry,setEntry]=useState('75000');
  const [acquisitionPct,setAcquisitionPct]=useState('6');
  const [monthlyRent,setMonthlyRent]=useState('1600');
  const [occupancyPct,setOccupancyPct]=useState('92');
  const [monthlyCharges,setMonthlyCharges]=useState('180');
  const [annualMaintenance,setAnnualMaintenance]=useState('1500');
  const [financeAmount,setFinanceAmount]=useState('0');
  const [interest,setInterest]=useState('5');
  const [termYears,setTermYears]=useState('10');
  const [exitValue,setExitValue]=useState('250000');
  const [holdYears,setHoldYears]=useState('5');
  const [commissionPct,setCommissionPct]=useState('3');
  const [developerPlanEnabled,setDeveloperPlanEnabled]=useState(false);
  const [developerDepositPct,setDeveloperDepositPct]=useState('30');
  const [developerMonths,setDeveloperMonths]=useState('24');
  const [developerBalloonPct,setDeveloperBalloonPct]=useState('20');
  const [developerInterestMode,setDeveloperInterestMode]=useState('interest_free');
  const [developerMarkupPct,setDeveloperMarkupPct]=useState('0');
  const [developerCashDiscountPct,setDeveloperCashDiscountPct]=useState('0');
  const [annualRentGrowth,setAnnualRentGrowth]=useState('3');
  const [exitCostsPct,setExitCostsPct]=useState('3');
  const [fxStressPct,setFxStressPct]=useState('0');
  const [scenarioName,setScenarioName]=useState('');
  const [scenarioContactId,setScenarioContactId]=useState('');
  const [scenarioDealId,setScenarioDealId]=useState('');
  const [scenarioListingId,setScenarioListingId]=useState('');
  const [scenarioNotes,setScenarioNotes]=useState('');
  const [scenarioBusy,setScenarioBusy]=useState(false);
  const [scenarioMessage,setScenarioMessage]=useState('');
  const [reportBusy,setReportBusy]=useState(false);

  const selectedClient=contacts.find((x:any)=>x.id===scenarioContactId)||null;
  const selectedListing=listings.find((x:any)=>x.id===scenarioListingId)||null;
  const propertyPlan=useMemo(()=>derivePlan(selectedListing),[selectedListing]);
  const currencyMismatch=Boolean(useClient&&useProperty&&selectedClient?.currency&&selectedListing?.currency&&selectedClient.currency!==selectedListing.currency);

  const result=useMemo(()=>{
    const p=n(price),s=n(surface),available=n(entry);
    const costs=p*n(acquisitionPct)/100;
    const effectiveRent=n(monthlyRent)*12*n(occupancyPct)/100;
    const opCosts=n(monthlyCharges)*12+n(annualMaintenance);
    const noi=effectiveRent-opCosts;
    const totalCost=p+costs;
    const financing=n(financeAmount);
    const annualRate=n(interest)/100;
    const months=Math.max(1,n(termYears)*12);
    const monthlyRate=annualRate/12;
    const monthlyDebt=financing<=0?0:monthlyRate===0?financing/months:financing*(monthlyRate*Math.pow(1+monthlyRate,months))/(Math.pow(1+monthlyRate,months)-1);
    const annualDebt=monthlyDebt*12;
    const years=Math.max(1,n(holdYears));
    const grossExit=n(exitValue);
    const exitCosts=grossExit*n(exitCostsPct)/100;
    const netExit=grossExit-exitCosts;
    const annualizedAppreciation=p>0&&netExit>0?(Math.pow(netExit/p,1/years)-1)*100:0;
    const futureAnnualRent=effectiveRent*Math.pow(1+n(annualRentGrowth)/100,years);
    const depositPct=n(developerDepositPct),balloonPct=n(developerBalloonPct);
    const developerInstallmentTotal=developerInterestMode==='interest_bearing'?p*(1+n(developerMarkupPct)/100):p;
    const developerCashPrice=p*(1-n(developerCashDiscountPct)/100);
    const monthlyPlanPct=Math.max(0,100-depositPct-balloonPct);
    const developerDeposit=developerInstallmentTotal*depositPct/100;
    const developerBalloon=developerInstallmentTotal*balloonPct/100;
    const developerMonthly=n(developerMonths)>0?developerInstallmentTotal*monthlyPlanPct/100/n(developerMonths):0;
    const bankEquity=Math.max(0,p-financing);
    const initialCashRequired=financing>0?bankEquity+costs:(developerPlanEnabled&&depositPct>0?developerDeposit+costs:p+costs);
    const liquidityMargin=available-initialCashRequired;
    const cashBase=Math.max(1,initialCashRequired);
    const breakEvenOccupancy=n(monthlyRent)>0?Math.min(100,((opCosts+annualDebt)/(n(monthlyRent)*12))*100):0;
    return{
      acquisitionCosts:costs,totalCost,adjustedRent:effectiveRent,noi,
      priceM2:s>0?p/s:0,grossYield:p>0?effectiveRent/p*100:0,netYield:totalCost>0?noi/totalCost*100:0,
      monthlyDebt,annualDebt,cashOnCash:(noi-annualDebt)/cashBase*100,dscr:annualDebt>0?noi/annualDebt:0,ltv:p>0?financing/p*100:0,
      annualizedAppreciation,commission:p*n(commissionPct)/100,developerDeposit,developerMonthly,developerBalloon,developerInstallmentTotal,developerCashPrice,
      developerFinancingCost:Math.max(0,developerInstallmentTotal-p),developerCashSaving:Math.max(0,p-developerCashPrice),
      netAnnualCashflow:noi-annualDebt,breakEvenOccupancy,exitCosts,netExit,futureAnnualRent,fxStressValue:p*(1+n(fxStressPct)/100),
      equity:bankEquity,initialCashRequired,liquidityMargin,
    };
  },[price,surface,entry,acquisitionPct,monthlyRent,occupancyPct,monthlyCharges,annualMaintenance,financeAmount,interest,termYears,exitValue,holdYears,commissionPct,developerDepositPct,developerMonths,developerBalloonPct,developerPlanEnabled,developerInterestMode,developerMarkupPct,developerCashDiscountPct,annualRentGrowth,exitCostsPct,fxStressPct]);

  const inputClass='min-h-[42px] w-full border border-[#cfd8e3] bg-white px-3 text-sm text-[#162334] outline-none transition focus:border-[#315d7c] focus:ring-2 focus:ring-[#315d7c]/10';
  const labelClass='grid gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#51606f]';

  function refreshScenarioName(contact:any,listing:any){
    const parts=[contact?clientName(contact):'',listing?localized(listing.title,l)||listing.external_id:''].filter(Boolean);
    if(parts.length)setScenarioName(parts.join(' · '));
  }
  function applyClient(id:string){
    setScenarioContactId(id);
    const contact=contacts.find((x:any)=>x.id===id);
    if(!contact)return;
    const lang=String(contact.language||'').toLowerCase();
    if(lang.startsWith('en'))setReportLanguage('en');else if(lang.startsWith('ru'))setReportLanguage('ru');else if(lang.startsWith('fr'))setReportLanguage('fr');
    if(!useProperty||!selectedListing){
      if(contact.currency)setCurrency(contact.currency);
      if(contact.capital_available!=null)setEntry(String(contact.capital_available));
    }else if(contact.currency===selectedListing.currency&&contact.capital_available!=null){
      setEntry(String(contact.capital_available));
    }
    refreshScenarioName(contact,selectedListing);
  }
  function applyProperty(id:string){
    setScenarioListingId(id);
    const listing=listings.find((x:any)=>x.id===id);
    if(!listing)return;
    const plan=derivePlan(listing);
    const p=n(listing.total_price||listing.installment_price||listing.cash_price);
    if(listing.currency)setCurrency(listing.currency);
    if(p>0){setPrice(String(p));setExitValue(String(p));}
    if(listing.surface_m2!=null)setSurface(String(listing.surface_m2));
    const contact=contacts.find((x:any)=>x.id===scenarioContactId);
    if(contact&&contact.currency===listing.currency&&contact.capital_available!=null)setEntry(String(contact.capital_available));
    else if(listing.entry_capital!=null)setEntry(String(listing.entry_capital));
    else if(plan.depositPct>0&&p>0)setEntry(String(Math.round(p*plan.depositPct/100)));
    setDeveloperPlanEnabled(Boolean(listing.payment_plan_enabled&&plan.plan.length));
    if(plan.depositPct>0)setDeveloperDepositPct(String(plan.depositPct));
    if(plan.balloonPct>=0)setDeveloperBalloonPct(String(plan.balloonPct));
    if(listing.payment_interest_mode&&listing.payment_interest_mode!=='not_specified')setDeveloperInterestMode(listing.payment_interest_mode);
    if(listing.cash_discount_pct!=null)setDeveloperCashDiscountPct(String(listing.cash_discount_pct));
    else if(listing.cash_price&&p>0)setDeveloperCashDiscountPct(String(Math.max(0,(1-n(listing.cash_price)/p)*100).toFixed(2)));
    if(listing.installment_price&&p>0&&n(listing.installment_price)>p){
      setDeveloperInterestMode('interest_bearing');
      setDeveloperMarkupPct(String(((n(listing.installment_price)/p-1)*100).toFixed(2)));
    }else if(listing.payment_interest_rate!=null){
      setDeveloperMarkupPct(String(listing.payment_interest_rate));
    }
    refreshScenarioName(contact,listing);
  }

  const inputs={
    price:n(price),surface:n(surface),entry:n(entry),acquisitionPct:n(acquisitionPct),monthlyRent:n(monthlyRent),occupancyPct:n(occupancyPct),
    monthlyCharges:n(monthlyCharges),annualMaintenance:n(annualMaintenance),financeAmount:n(financeAmount),interest:n(interest),termYears:n(termYears),
    exitValue:n(exitValue),holdYears:n(holdYears),commissionPct:n(commissionPct),developerDepositPct:n(developerDepositPct),developerMonths:n(developerMonths),
    developerBalloonPct:n(developerBalloonPct),developerPlanEnabled,developerInterestMode,developerMarkupPct:n(developerMarkupPct),developerCashDiscountPct:n(developerCashDiscountPct),
    annualRentGrowth:n(annualRentGrowth),exitCostsPct:n(exitCostsPct),fxStressPct:n(fxStressPct),
  };

  const metricRows=[
    [l==='ru'?'Цена / м²':l==='en'?'Price / sqm':'Prix / m²',money(result.priceM2,currency,l),l==='ru'?'цена ÷ площадь':l==='en'?'price ÷ surface':'prix ÷ surface'],
    [l==='ru'?'Валовая доходность':l==='en'?'Effective gross yield':'Rendement brut effectif',pct(result.grossYield,l),l==='ru'?'аренда после вакантности ÷ цена':l==='en'?'rent after vacancy ÷ price':'loyer après vacance ÷ prix'],
    [l==='ru'?'Чистая доходность':l==='en'?'Net yield':'Rendement net',pct(result.netYield,l),l==='ru'?'NOI ÷ полная стоимость':l==='en'?'NOI ÷ total acquisition cost':'NOI ÷ coût total'],
    ['Cash-on-cash',pct(result.cashOnCash,l),l==='ru'?'денежный поток ÷ необходимый первоначальный cash':l==='en'?'cash flow ÷ estimated initial cash required':'cash-flow ÷ cash initial requis'],
    ['NOI',money(result.noi,currency,l),l==='ru'?'доход после вакантности и расходов, до долга':l==='en'?'income after vacancy and operating costs, before debt':'revenus après vacance et charges, avant dette'],
    [l==='ru'?'Денежный поток':l==='en'?'Annual cash flow':'Cash-flow annuel',money(result.netAnnualCashflow,currency,l),l==='ru'?'NOI минус годовой долг':l==='en'?'NOI minus annual debt service':'NOI moins dette annuelle'],
    ['LTV',pct(result.ltv,l),l==='ru'?'доля цены, финансируемая банком':l==='en'?'share of price financed by bank':'part du prix financée'],
    ['DSCR',result.dscr?result.dscr.toFixed(2):'—',l==='ru'?'NOI ÷ годовой долг':l==='en'?'NOI ÷ annual debt service':'NOI ÷ dette annuelle'],
  ];

  async function generateReport(){
    setReportBusy(true);setScenarioMessage('');
    try{
      await downloadInvestorReportPdf({
        language:reportLanguage,generatedAt:new Date().toISOString(),scenarioName:scenarioName.trim()||c.dossier,
        client:useClient?selectedClient:null,property:useProperty?selectedListing:null,currency,inputs,results:result,
        paymentPlan:developerPlanEnabled&&useProperty&&selectedListing?.payment_plan_enabled?propertyPlan.plan:[],notes:scenarioNotes,
      });
    }catch(error:any){setScenarioMessage(error?.message||'PDF error');}
    finally{setReportBusy(false);}
  }

  async function saveScenario(){
    if(!userId)return;
    if(!scenarioName.trim()){setScenarioMessage(c.msgName);return;}
    setScenarioBusy(true);setScenarioMessage('');
    try{
      const {error}=await supabase.from('investment_scenarios').insert({
        owner_user_id:userId,partner_id:partnerId||null,contact_id:useClient&&scenarioContactId?scenarioContactId:null,
        deal_id:scenarioDealId||null,listing_id:useProperty&&scenarioListingId?scenarioListingId:null,name:scenarioName.trim(),currency,
        inputs:{...inputs,reportLanguage,useClient,useProperty,paymentPlanSnapshot:propertyPlan.plan},
        outputs:{priceM2:result.priceM2,grossYield:result.grossYield,netYield:result.netYield,cashOnCash:result.cashOnCash,noi:result.noi,netAnnualCashflow:result.netAnnualCashflow,monthlyDebt:result.monthlyDebt,ltv:result.ltv,dscr:result.dscr,breakEvenOccupancy:result.breakEvenOccupancy,netExit:result.netExit,annualizedAppreciation:result.annualizedAppreciation,futureAnnualRent:result.futureAnnualRent,equity:result.equity,initialCashRequired:result.initialCashRequired,liquidityMargin:result.liquidityMargin},
        notes:scenarioNotes.trim()||null,
      });
      if(error)throw error;
      setScenarioMessage(c.msgSaved);onSaved?.();
    }catch(error:any){setScenarioMessage(error?.message||'Save error');}
    finally{setScenarioBusy(false);}
  }

  function loadScenario(s:any){
    const x=s.inputs||{};
    setCurrency(s.currency||'EUR');setPrice(String(x.price??250000));setSurface(String(x.surface??100));setEntry(String(x.entry??75000));
    setAcquisitionPct(String(x.acquisitionPct??6));setMonthlyRent(String(x.monthlyRent??1600));setOccupancyPct(String(x.occupancyPct??92));
    setMonthlyCharges(String(x.monthlyCharges??180));setAnnualMaintenance(String(x.annualMaintenance??1500));setFinanceAmount(String(x.financeAmount??0));
    setInterest(String(x.interest??5));setTermYears(String(x.termYears??10));setExitValue(String(x.exitValue??x.price??250000));setHoldYears(String(x.holdYears??5));
    setCommissionPct(String(x.commissionPct??3));setDeveloperDepositPct(String(x.developerDepositPct??30));setDeveloperMonths(String(x.developerMonths??24));
    setDeveloperBalloonPct(String(x.developerBalloonPct??20));setDeveloperPlanEnabled(Boolean(x.developerPlanEnabled));setDeveloperInterestMode(x.developerInterestMode||'interest_free');
    setDeveloperMarkupPct(String(x.developerMarkupPct??0));setDeveloperCashDiscountPct(String(x.developerCashDiscountPct??0));setAnnualRentGrowth(String(x.annualRentGrowth??3));
    setExitCostsPct(String(x.exitCostsPct??3));setFxStressPct(String(x.fxStressPct??0));setReportLanguage(x.reportLanguage||l);
    setUseClient(Boolean(s.contact_id||x.useClient));setUseProperty(Boolean(s.listing_id||x.useProperty));setScenarioContactId(s.contact_id||'');setScenarioListingId(s.listing_id||'');
    setScenarioDealId(s.deal_id||'');setScenarioName(s.name||'');setScenarioNotes(s.notes||'');
  }

  const planTotal=propertyPlan.totalPct;
  const yesNo=(value:boolean,setter:(v:boolean)=>void)=><div className="flex border border-[#cfd8e3] bg-white"><button type="button" onClick={()=>setter(true)} className={`min-h-[42px] flex-1 px-3 text-sm font-semibold ${value?'bg-[#12304a] text-white':'text-[#687685]'}`}>{c.yes}</button><button type="button" onClick={()=>setter(false)} className={`min-h-[42px] flex-1 px-3 text-sm font-semibold ${!value?'bg-[#e9eef2] text-[#243647]':'text-[#687685]'}`}>{c.no}</button></div>;

  return <div className="space-y-8 [font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]">
    <section className="border border-[#cdd9e0] bg-[#f7fafb] p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div><div className="flex items-center gap-2 text-[#315d7c]"><Link2 size={18}/><strong className="text-xs uppercase tracking-[0.12em]">Bosphoras Investor File</strong></div><h2 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[#162334]">{c.dossier}</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-[#687685]">{c.dossierText}</p></div>
        <button type="button" onClick={generateReport} disabled={reportBusy} className="inline-flex min-h-[46px] items-center gap-2 bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50"><FileDown size={16}/>{reportBusy?c.loadingReport:c.pdf}</button>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <label className={labelClass}>{c.clientLink}{yesNo(useClient,(v)=>{setUseClient(v);if(!v)setScenarioContactId('');})}</label>
        {useClient?<label className={labelClass}>{c.client}<select value={scenarioContactId} onChange={(e)=>applyClient(e.target.value)} className={inputClass}><option value="">{c.notLinked}</option>{contacts.map((x:any)=><option key={x.id} value={x.id}>{clientName(x)}{x.capital_available?` · ${money(n(x.capital_available),x.currency||currency,l)}`:''}</option>)}</select></label>:<div/>}
        <label className={labelClass}>{c.propertyLink}{yesNo(useProperty,(v)=>{setUseProperty(v);if(!v)setScenarioListingId('');})}</label>
        {useProperty?<label className={labelClass}>{c.property}<select value={scenarioListingId} onChange={(e)=>applyProperty(e.target.value)} className={inputClass}><option value="">{c.notLinked}</option>{listings.map((x:any)=><option key={x.id} value={x.id}>{localized(x.title,l)||x.external_id} · {money(n(x.total_price),x.currency||'EUR',l)}</option>)}</select></label>:<div/>}
        <label className={labelClass}>{c.reportLanguage}<select value={reportLanguage} onChange={(e)=>setReportLanguage(e.target.value as DeskLocale)} className={inputClass}><option value="fr">Français</option><option value="en">English</option><option value="ru">Русский</option></select></label>
      </div>
      {(useClient||useProperty)?<div className="mt-5 border-l-2 border-[#315f52] bg-white px-4 py-3 text-sm leading-6 text-[#526272]"><strong className="text-[#315f52]">{c.dataTaken} :</strong> {[useClient?c.clientTaken:'',useProperty?c.propertyTaken:''].filter(Boolean).join(' · ')}</div>:null}
      {currencyMismatch?<div className="mt-3 border-l-2 border-[#b58a45] bg-[#fff9ed] px-4 py-3 text-sm text-[#7d6337]">{c.mismatch}</div>:null}
    </section>

    <div className="grid gap-5 border border-[#d9e1e8] bg-white p-5 md:grid-cols-3 xl:grid-cols-4">
      <label className={labelClass}>{c.currency}<select value={currency} onChange={(e)=>setCurrency(e.target.value)} className={inputClass}><option>EUR</option><option>USD</option><option>TRY</option><option>GBP</option><option>CHF</option><option>AED</option><option>KZT</option><option>GEL</option></select></label>
      <label className={labelClass}>{c.price} <Help>{c.helpPrice}</Help><input value={price} onChange={(e)=>setPrice(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.surface}<input value={surface} onChange={(e)=>setSurface(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.entry} <Help>{c.helpEntry}</Help><input value={entry} onChange={(e)=>setEntry(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.acquisition}<input value={acquisitionPct} onChange={(e)=>setAcquisitionPct(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.rent} <Help>{c.helpRent}</Help><input value={monthlyRent} onChange={(e)=>setMonthlyRent(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.occupancy} <Help>{c.helpOccupancy}</Help><input value={occupancyPct} onChange={(e)=>setOccupancyPct(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.charges}<input value={monthlyCharges} onChange={(e)=>setMonthlyCharges(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.maintenance}<input value={annualMaintenance} onChange={(e)=>setAnnualMaintenance(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.finance} <Help>{c.helpFinance}</Help><input value={financeAmount} onChange={(e)=>setFinanceAmount(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.rate}<input value={interest} onChange={(e)=>setInterest(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.term}<input value={termYears} onChange={(e)=>setTermYears(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.exit} <Help>{c.helpExit}</Help><input value={exitValue} onChange={(e)=>setExitValue(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.hold}<input value={holdYears} onChange={(e)=>setHoldYears(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.exitCosts}<input value={exitCostsPct} onChange={(e)=>setExitCostsPct(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.rentGrowth}<input value={annualRentGrowth} onChange={(e)=>setAnnualRentGrowth(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.commission}<input value={commissionPct} onChange={(e)=>setCommissionPct(e.target.value)} className={inputClass} inputMode="decimal"/></label>
      <label className={labelClass}>{c.fx}<input value={fxStressPct} onChange={(e)=>setFxStressPct(e.target.value)} className={inputClass} inputMode="decimal"/></label>
    </div>

    <section>
      <div className="mb-4 flex items-center gap-3"><TrendingUp size={19} className="text-[#315d7c]"/><div><h3 className="text-lg font-semibold text-[#162334]">{c.investment}</h3><p className="text-xs text-[#7b8794]">{c.investmentText}</p></div></div>
      <div className="grid gap-px bg-[#d9e1e8] sm:grid-cols-2 lg:grid-cols-4">
        {metricRows.map(([metric,value,help])=><div key={metric} className="bg-[#132538] p-5 text-white"><span className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#a9bfd0]">{metric}</span><strong className="mt-2 block text-2xl font-semibold tracking-[-0.02em]">{value}</strong><span className="mt-2 block text-[0.7rem] leading-5 text-[#91a2b2]">({help})</span></div>)}
        <div className="bg-[#315f52] p-5 text-white"><span className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#cfe0da]">{c.requiredCash}</span><strong className="mt-2 block text-2xl">{money(result.initialCashRequired,currency,l)}</strong><span className="mt-2 block text-[0.7rem] text-[#cfe0da]">{c.entry}: {money(n(entry),currency,l)}</span></div>
        <div className={`p-5 text-white ${result.liquidityMargin>=0?'bg-[#426d5d]':'bg-[#8b5d4f]'}`}><span className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white/75">{c.liquidity}</span><strong className="mt-2 block text-2xl">{money(result.liquidityMargin,currency,l)}</strong><span className="mt-2 block text-[0.7rem] text-white/70">{result.liquidityMargin>=0?'✓':'!'}</span></div>
      </div>
    </section>

    <section className="border border-[#d9e1e8] bg-[#edf3f7] p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4"><div className="flex items-center gap-3"><WalletCards className="text-[#315d7c]" size={22}/><div><h3 className="text-xl font-semibold text-[#162334]">{c.plan}</h3><p className="mt-1 text-xs text-[#687685]">{c.planText}</p></div></div><div className="min-w-[220px]"><span className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#51606f]">{c.planEnabled}</span>{yesNo(developerPlanEnabled,setDeveloperPlanEnabled)}</div></div>
      {useProperty&&selectedListing&&propertyPlan.plan.length?<div className="mt-6 border border-[#ccd8d2] bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#dde5e1] px-4 py-3"><strong className="text-sm text-[#315f52]">{c.exactPlan}</strong><span className={`text-xs font-semibold ${Math.abs(planTotal-100)>.5?'text-[#9a6a2f]':'text-[#315f52]'}`}>{c.planTotal}: {pct(planTotal,l)}</span></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead><tr className="bg-[#f5f8f6] text-xs uppercase tracking-[0.06em] text-[#687685]"><th className="p-3">{c.step}</th><th className="p-3">{c.due}</th><th className="p-3">{c.share}</th><th className="p-3">{c.amount}</th></tr></thead><tbody>{propertyPlan.plan.map((step:any,index:number)=><tr key={index} className="border-t border-[#edf0ee]"><td className="p-3 font-medium">{localized(step.label,l)||index+1}</td><td className="p-3 text-[#687685]">{localized(step.due,l)||'—'}</td><td className="p-3">{step.percentage!=null?pct(n(step.percentage),l):'—'}</td><td className="p-3 font-semibold">{step.amount!=null?money(n(step.amount),currency,l):step.percentage!=null?money(n(price)*n(step.percentage)/100,currency,l):'—'}</td></tr>)}</tbody></table></div>
        {Math.abs(planTotal-100)>.5?<div className="border-t border-[#ead8bc] bg-[#fff9ed] px-4 py-3 text-xs leading-5 text-[#866630]">{c.incompletePlan}</div>:null}
      </div>:null}
      <div className={`mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6 ${developerPlanEnabled?'':'opacity-45'}`}>
        <label className={labelClass}>{c.deposit}<input disabled={!developerPlanEnabled} value={developerDepositPct} onChange={(e)=>setDeveloperDepositPct(e.target.value)} className={inputClass}/></label>
        <label className={labelClass}>{c.months}<input disabled={!developerPlanEnabled} value={developerMonths} onChange={(e)=>setDeveloperMonths(e.target.value)} className={inputClass}/></label>
        <label className={labelClass}>{c.balloon}<input disabled={!developerPlanEnabled} value={developerBalloonPct} onChange={(e)=>setDeveloperBalloonPct(e.target.value)} className={inputClass}/></label>
        <label className={labelClass}>{c.planType}<select disabled={!developerPlanEnabled} value={developerInterestMode} onChange={(e)=>setDeveloperInterestMode(e.target.value)} className={inputClass}><option value="interest_free">{c.interestFree}</option><option value="interest_bearing">{c.interestBearing}</option></select></label>
        <label className={labelClass}>{c.markup}<input value={developerMarkupPct} onChange={(e)=>setDeveloperMarkupPct(e.target.value)} className={inputClass} disabled={!developerPlanEnabled||developerInterestMode!=='interest_bearing'}/></label>
        <label className={labelClass}>{c.cashDiscount}<input disabled={!developerPlanEnabled} value={developerCashDiscountPct} onChange={(e)=>setDeveloperCashDiscountPct(e.target.value)} className={inputClass}/></label>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {[[c.cashPrice,result.developerCashPrice],[c.installmentPrice,result.developerInstallmentTotal],[c.today,result.developerDeposit],[c.developerMonthly,result.developerMonthly],[c.handover,result.developerBalloon]].map(([label,value])=><div key={label} className="bg-white p-5"><span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#657586]">{label}</span><strong className="mt-2 block text-xl font-semibold">{money(Number(value),currency,l)}</strong></div>)}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3"><button type="button" onClick={generateReport} disabled={reportBusy} className="inline-flex min-h-[44px] items-center gap-2 border border-[#12304a] bg-white px-5 text-sm font-semibold text-[#12304a] disabled:opacity-50"><FileDown size={16}/>{reportBusy?c.loadingReport:c.pdf}</button><span className="max-w-2xl text-xs leading-5 text-[#687685]">{c.pdfText}</span></div>
    </section>

    {userId?<section className="border border-[#d9e1e8] bg-white p-5 md:p-6">
      <div className="flex items-center gap-3"><Save size={19} className="text-[#315d7c]"/><div><h3 className="text-lg font-semibold text-[#162334]">{c.save}</h3><p className="text-xs text-[#7b8794]">{c.saveText}</p></div></div>
      <div className="mt-5 grid gap-4 md:grid-cols-4">
        <label className={labelClass}>{c.scenarioName}<input value={scenarioName} onChange={(e)=>setScenarioName(e.target.value)} className={inputClass}/></label>
        <label className={labelClass}>{c.client}<select value={scenarioContactId} onChange={(e)=>{setUseClient(Boolean(e.target.value));applyClient(e.target.value);}} className={inputClass}><option value="">{c.notLinked}</option>{contacts.map((x:any)=><option key={x.id} value={x.id}>{clientName(x)}</option>)}</select></label>
        <label className={labelClass}>{c.deal}<select value={scenarioDealId} onChange={(e)=>setScenarioDealId(e.target.value)} className={inputClass}><option value="">{c.notLinked}</option>{deals.map((x:any)=><option key={x.id} value={x.id}>{x.title}</option>)}</select></label>
        <label className={labelClass}>{c.property}<select value={scenarioListingId} onChange={(e)=>{setUseProperty(Boolean(e.target.value));applyProperty(e.target.value);}} className={inputClass}><option value="">{c.notLinked}</option>{listings.map((x:any)=><option key={x.id} value={x.id}>{localized(x.title,l)||x.external_id}</option>)}</select></label>
      </div>
      <label className="mt-4 grid gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#51606f]">{c.notes}<textarea value={scenarioNotes} onChange={(e)=>setScenarioNotes(e.target.value)} rows={3} className="border border-[#cfd8e3] bg-white px-3 py-3 text-sm leading-6 outline-none focus:border-[#315d7c]"/></label>
      <div className="mt-4 flex flex-wrap items-center gap-3"><button disabled={scenarioBusy} onClick={saveScenario} className="inline-flex min-h-[44px] items-center gap-2 bg-[#12304a] px-5 text-sm font-semibold text-white disabled:opacity-50"><Save size={15}/>{scenarioBusy?c.saving:c.saveButton}</button>{scenarioMessage?<span className="text-sm text-[#5f6e7d]">{scenarioMessage}</span>:null}</div>
      {savedScenarios.length?<div className="mt-7 border-t border-[#e7edf2] pt-5"><div className="mb-3 flex items-center gap-2 text-[#315d7c]"><History size={16}/><strong className="text-sm">{c.recent}</strong></div><div className="grid gap-3 md:grid-cols-2">{savedScenarios.slice(0,8).map((s:any)=><article key={s.id} className="border border-[#e1e7ed] bg-[#f8fafb] p-4"><div className="flex items-start justify-between gap-3"><div><strong className="block text-sm">{s.name}</strong><div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#687685]"><span>{money(n(s.inputs?.price),s.currency||currency,l)}</span><span>{pct(n(s.outputs?.netYield),l)}</span><span>{money(n(s.outputs?.netAnnualCashflow),s.currency||currency,l)}</span></div></div><button onClick={()=>loadScenario(s)} className="border border-[#315d7c] px-2.5 py-1.5 text-xs font-semibold text-[#315d7c]">{c.load}</button></div></article>)}</div></div>:null}
    </section>:null}

    <section className="grid gap-4 md:grid-cols-3">
      <div className="border border-[#d9e1e8] bg-white p-5"><div className="flex items-center gap-2 text-[#315d7c]"><Calculator size={18}/><strong>{c.compare}</strong></div><p className="mt-3 text-sm leading-6 text-[#687685]">{c.compareText}</p></div>
      <div className="border border-[#d9e1e8] bg-white p-5"><div className="flex items-center gap-2 text-[#315d7c]"><Landmark size={18}/><strong>{c.debt}</strong></div><p className="mt-3 text-sm leading-6 text-[#687685]">{c.debtText}</p></div>
      <div className="border border-[#d9e1e8] bg-white p-5"><div className="flex items-center gap-2 text-[#315d7c]"><Info size={18}/><strong>{c.confirm}</strong></div><p className="mt-3 text-sm leading-6 text-[#687685]">{c.confirmText}</p></div>
    </section>
  </div>;
}
