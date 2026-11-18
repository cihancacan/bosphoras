'use client';
import {useState} from 'react';
import type {InvestmentListing} from '@/lib/investmentListings';
import {investmentEquityTerms,equityProjection} from '@/data/investmentEquityTerms';
type Locale='fr'|'en'|'ru'|'ar';
const copy={
 fr:{heading:'Participation au capital envisagée',raise:'Levée recherchée',pre:'Valorisation avant levée',post:'Valorisation après levée',share:'Capital ouvert',retain:'Capital des associés actuels après levée',ticket:'Ticket minimum envisagé',note:'Hypothèses de levée à discuter, sous réserve de validation juridique et financière. Les parts ne sont pas encore proposées à la souscription.',title:'Simuler ma participation',intro:'Comparez des scénarios de valorisation, sans supposer de dividendes ni de remboursement contractuel.',amount:'Montant envisagé',future:'Valorisation future hypothétique',ownership:'Part théorique du capital',value:'Valeur théorique des parts',gain:'Plus ou moins-value',multiple:'Multiple de la mise',perf:'Performance totale hypothétique',loss:'Perte totale',down:'Baisse de 50 %',stable:'Stabilité',double:'Doublement',triple:'Triplement',quad:'Quadruplement',custom:'Autre valorisation',invalid:'Saisissez un montant entre le ticket minimum et le montant de la levée.',risk:'Scénarios illustratifs, ni prévisions ni garanties. Ils supposent une levée intégralement réalisée, des titres de mêmes droits et aucune dilution ultérieure. Hors frais, impôts et dividendes éventuels. La valeur des parts peut tomber à zéro ; leur revente n’est pas garantie.',noYield:'Aucun rendement fixe ni remboursement à échéance.'},
 en:{heading:'Proposed equity participation',raise:'Funding target',pre:'Pre-money valuation',post:'Post-money valuation',share:'Equity offered',retain:'Existing shareholders after round',ticket:'Indicative minimum ticket',note:'Financing assumptions for discussion, subject to legal and financial validation. No subscription is open.',title:'Simulate my equity participation',intro:'Compare valuation scenarios without assuming dividends or contractual repayment.',amount:'Indicative amount',future:'Hypothetical future valuation',ownership:'Theoretical ownership',value:'Theoretical equity value',gain:'Potential gain or loss',multiple:'Investment multiple',perf:'Hypothetical total return',loss:'Total loss',down:'50% decline',stable:'Unchanged',double:'Double',triple:'Triple',quad:'Quadruple',custom:'Custom valuation',invalid:'Enter an amount between the minimum ticket and funding target.',risk:'Illustrative scenarios, not forecasts or guarantees. They assume a fully funded round, equal economic rights and no future dilution. Excludes fees, taxes and any dividends. Shares could lose all value; resale is not guaranteed.',noYield:'No fixed return or scheduled repayment.'},
 ru:{heading:'Предполагаемое участие в капитале',raise:'Цель привлечения средств',pre:'Оценка до раунда',post:'Оценка после раунда',share:'Доля для новых инвесторов',retain:'Доля действующих участников после раунда',ticket:'Предполагаемый минимальный взнос',note:'Условия обсуждаются и требуют юридической и финансовой проверки. Подписка на доли пока не открыта.',title:'Рассчитать участие в капитале',intro:'Сравните сценарии оценки без учёта дивидендов и договорного возврата средств.',amount:'Предполагаемая сумма',future:'Гипотетическая будущая оценка',ownership:'Расчётная доля в капитале',value:'Расчётная стоимость доли',gain:'Возможная прибыль или убыток',multiple:'Множитель вложений',perf:'Гипотетическая общая доходность',loss:'Полная потеря',down:'Снижение на 50%',stable:'Без изменений',double:'Удвоение',triple:'Утроение',quad:'Рост в четыре раза',custom:'Другая оценка',invalid:'Введите сумму от минимального взноса до цели раунда.',risk:'Иллюстративные сценарии, не прогнозы и не гарантии. Предполагаются полный сбор средств, одинаковые экономические права и отсутствие дальнейшего размытия долей. Без комиссий, налогов и дивидендов. Возможна полная потеря капитала; продажа долей не гарантируется.',noYield:'Нет фиксированной доходности и обязательного возврата к определённой дате.'},
 ar:{heading:'المشاركة المقترحة في رأس المال',raise:'التمويل المستهدف',pre:'التقييم قبل جولة التمويل',post:'التقييم بعد جولة التمويل',share:'الحصة المطروحة',retain:'حصة الشركاء الحاليين بعد الجولة',ticket:'الحد الأدنى المقترح',note:'افتراضات تمويل قابلة للنقاش وتخضع للتحقق القانوني والمالي. الاكتتاب غير مفتوح حالياً.',title:'محاكاة حصتي في رأس المال',intro:'قارن سيناريوهات التقييم دون افتراض توزيعات أرباح أو سداد تعاقدي.',amount:'المبلغ المقترح',future:'التقييم المستقبلي الافتراضي',ownership:'الحصة النظرية في رأس المال',value:'القيمة النظرية للحصة',gain:'الربح أو الخسارة المحتملة',multiple:'مضاعف الاستثمار',perf:'العائد الإجمالي الافتراضي',loss:'خسارة كاملة',down:'انخفاض بنسبة 50%',stable:'استقرار',double:'تضاعف',triple:'ثلاثة أضعاف',quad:'أربعة أضعاف',custom:'تقييم آخر',invalid:'أدخل مبلغاً بين الحد الأدنى والتمويل المستهدف.',risk:'سيناريوهات توضيحية وليست توقعات أو ضمانات. تفترض اكتمال جمع التمويل وتساوي الحقوق الاقتصادية وعدم تخفيف الحصص لاحقاً. لا تشمل الرسوم والضرائب وتوزيعات الأرباح. قد تُفقد القيمة بالكامل ولا توجد ضمانات لإعادة البيع.',noYield:'لا عائد ثابت ولا سداد في موعد محدد.'}
};
const exitCopy={
  "fr": {
    "intro": "Estimez la valeur de votre participation à la sortie en fonction de vos propres hypothèses.",
    "period": "Horizon de détention (années)",
    "year": "ans",
    "annual": "Rendement annualisé brut (TRI)",
    "invalid": "Vérifiez le montant investi, la valorisation de sortie (zéro autorisé) et l’horizon de détention.",
    "context": "Un horizon de cinq ans est une hypothèse de simulation ; les investissements en capital-risque peuvent nécessiter cinq à dix ans, voire davantage.",
    "future": "Valorisation des capitaux propres à la sortie (hypothèse)",
    "placeholder": "Ex. 3000000"
  },
  "en": {
    "intro": "Estimate your equity value at exit using your own assumptions.",
    "period": "Holding period (years)",
    "year": "years",
    "annual": "Gross annualised return (IRR)",
    "invalid": "Check the investment amount, exit equity valuation (zero is allowed) and holding period.",
    "context": "Five years is a modelling assumption; venture capital investments may require five to ten years or more.",
    "future": "Equity valuation at exit (assumption)",
    "placeholder": "e.g. 3000000"
  },
  "ru": {
    "intro": "Рассчитайте стоимость своей доли при выходе на основе собственных предположений.",
    "period": "Срок владения (лет)",
    "year": "лет",
    "annual": "Годовая доходность до расходов (IRR)",
    "invalid": "Проверьте сумму, оценку капитала при выходе (допускается ноль) и срок владения.",
    "context": "Пять лет — допущение для расчёта; венчурные инвестиции могут требовать от пяти до десяти лет и более.",
    "future": "Оценка собственного капитала при выходе (гипотеза)",
    "placeholder": "Например, 3000000"
  },
  "ar": {
    "intro": "قدّر قيمة حصتك عند التخارج بناءً على افتراضاتك الخاصة.",
    "period": "مدة الاحتفاظ بالسنوات",
    "year": "سنوات",
    "annual": "العائد السنوي الإجمالي (IRR)",
    "invalid": "تحقق من مبلغ الاستثمار وتقييم حقوق الملكية عند التخارج (الصفر مسموح) ومدة الاحتفاظ.",
    "context": "خمس سنوات افتراض للمحاكاة؛ قد تتطلب استثمارات رأس المال الجريء خمس إلى عشر سنوات أو أكثر.",
    "future": "تقييم حقوق الملكية عند التخارج (افتراضي)",
    "placeholder": "مثلاً 3000000"
  }
};
const local={fr:'fr-FR',en:'en-GB',ru:'ru-RU',ar:'ar'};
const money=(v:number,c:string,l:Locale)=>new Intl.NumberFormat(local[l],{style:'currency',currency:c,maximumFractionDigits:2}).format(v);
const pct=(v:number,l:Locale)=>new Intl.NumberFormat(local[l],{maximumFractionDigits:4}).format(v)+' %';
export function EquityRoundFigures({project,locale}:{project:InvestmentListing;locale:Locale}){
 const x=investmentEquityTerms(project);if(!x)return null;const t=copy[locale],fmt=(v:number)=>money(v,x.currency,locale);
 return <section className="min-w-0 max-w-full rounded-lg border border-[#dce4e8] bg-white p-4 break-words"><p className="text-xs font-medium text-[#637781]">{t.heading}</p><div className="mt-4 grid grid-cols-2 gap-4">{[[t.raise,fmt(x.raised)],[t.share,pct(x.share,locale)],[t.pre,fmt(x.pre)],[t.post,fmt(x.post)],[t.ticket,fmt(x.ticket)],[t.retain,pct(100-x.share,locale)]].map(([label,value])=><div key={label} className="min-w-0"><p className="text-xs leading-5 text-[#637781]">{label}</p><p className="mt-1 text-lg font-medium text-[#193344]">{value}</p></div>)}</div><div className="mt-4 flex h-3 w-full overflow-hidden rounded-full bg-[#afc5c7]" role="img" aria-label={t.share+' '+pct(x.share,locale)}><div className="h-full bg-[#193344]" style={{width:(100-x.share)+'%'}}/></div><p className="mt-4 text-xs leading-6 text-[#637781]">{t.note}</p></section>;
}
export function EquityRoundSimulator({project,locale}:{project:InvestmentListing;locale:Locale}){
 const x=investmentEquityTerms(project),t=copy[locale],e=exitCopy[locale],fmt=(v:number)=>money(v,x?.currency||'USD',locale);
 const [amount,setAmount]=useState(String(Math.min(x?.raised||10000,Math.max(x?.ticket||1000,10000)))),[exitValue,setExitValue]=useState(''),[years,setYears]=useState('5');
 if(!x)return null;
 const a=Number(amount),future=Number(exitValue),n=Number(years);
 const valid=amount.trim()!==''&&a>=x.ticket&&a<=x.raised&&Number.isFinite(a)&&exitValue.trim()!==''&&Number.isFinite(future)&&future>=0&&future<=1e12&&Number.isInteger(n)&&n>=1&&n<=20;
 const result=valid?equityProjection(a,x.post,future):null;
 const ownership=amount.trim()!==''&&Number.isFinite(a)&&a>=x.ticket&&a<=x.raised?a/x.post:null;
 const annual=result?(Math.pow(result.value/a,1/n)-1)*100:null;
 const field='mt-2 block w-full min-w-0 max-w-full rounded-lg border border-[#cbd8dd] bg-white px-3 py-3 text-base text-[#193344]';
 const label='block min-w-0 text-sm leading-6 text-[#4d636f]';
 return <section id="simulation" className="min-w-0 max-w-full rounded-xl border border-[#dce4e8] bg-white p-4 sm:p-6 md:p-8" dir={locale==='ar'?'rtl':'ltr'}>
 <h2 className="text-2xl font-medium text-[#193344]">{t.title}</h2><p className="mt-3 text-sm leading-7 text-[#637781]">{e.intro}</p>
 <div className="mt-5 grid gap-3 rounded-lg bg-[#f3f6f7] p-4 sm:grid-cols-2"><div className="min-w-0"><p className="text-xs text-[#637781]">{t.post}</p><p className="mt-1 break-words text-xl font-medium text-[#193344]">{fmt(x.post)}</p></div><div className="min-w-0"><p className="text-xs text-[#637781]">{t.ownership}</p><p className="mt-1 text-xl font-medium text-[#193344]">{ownership===null?'—':pct(ownership*100,locale)}</p></div></div>
 <div className="mt-5 grid min-w-0 gap-4 sm:grid-cols-2">
 <label className={label}>{t.amount} ({x.currency})<input type="number" min={x.ticket} max={x.raised} step="any" value={amount} onChange={ev=>setAmount(ev.target.value)} className={field}/></label>
 <label className={label}>{e.period}<select value={years} onChange={ev=>setYears(ev.target.value)} className={field}>{Array.from({length:20},(_,i)=>i+1).map(y=><option key={y} value={y}>{y}</option>)}</select></label>
 <label className={label+' sm:col-span-2'}>{e.future} ({x.currency})<input type="number" min="0" max="1000000000000" step="any" placeholder={e.placeholder} value={exitValue} onChange={ev=>setExitValue(ev.target.value)} className={field}/></label></div>
 <p className="mt-3 text-xs leading-6 text-[#637781]">{e.context}</p>
 {result&&annual!==null?<div className="mt-6 min-w-0 break-words rounded-xl bg-[#193344] p-4 text-white sm:p-6" aria-live="polite"><p className="text-xs text-[#c1d2da]">{t.value}</p><p className="mt-1 text-3xl font-medium">{fmt(result.value)}</p><div className="mt-5 grid gap-4 border-t border-white/20 pt-4 sm:grid-cols-2">{[[t.gain,fmt(result.gain)],[t.perf,pct((result.value/a-1)*100,locale)],[e.annual,pct(annual,locale)]].map(([label,value])=><div key={label} className="min-w-0"><p className="text-xs text-[#c1d2da]">{label}</p><p className="mt-1 text-lg">{value}</p></div>)}</div></div>:<p role="status" className="mt-5 text-sm text-[#637781]">{e.invalid}</p>}
 <p className="mt-4 text-xs leading-6 text-[#637781]">{t.noYield} {t.risk}</p></section>;
}
