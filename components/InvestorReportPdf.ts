// @ts-nocheck
'use client';

type ReportLanguage = 'fr'|'en'|'ru';

const COPY:any={
  fr:{
    report:'Analyse d’investissement immobilier',
    confidential:'Document confidentiel · Bosphoras Property & Investment',
    preparedFor:'Préparé pour',property:'Bien analysé',executive:'Synthèse investisseur',
    assumptions:'Hypothèses de l’analyse',payment:'Conditions de paiement',indicators:'Indicateurs clés',
    exit:'Projection de sortie',notes:'Notes du dossier',method:'Méthodologie & limites',
    generated:'Généré le',reference:'Référence',developer:'Promoteur / source',location:'Localisation',surface:'Surface',
    contact:'Contact',email:'E-mail',phone:'Téléphone',budget:'Budget client',capital:'Capital disponible',
    objective:'Objectif',timeframe:'Horizon client',purchasePrice:'Prix d’acquisition',entryCapital:'Capital disponible aujourd’hui',
    requiredCash:'Cash initial estimé requis',liquidityMargin:'Marge de liquidité',totalCost:'Coût total acquisition',
    monthlyRent:'Loyer mensuel',occupancy:'Occupation',charges:'Charges mensuelles',maintenance:'Maintenance annuelle',
    bankFinancing:'Financement bancaire',bankRate:'Taux bancaire',loanTerm:'Durée du prêt',hold:'Durée de détention',
    exitValue:'Valeur de sortie retenue',rentGrowth:'Croissance loyer',exitCosts:'Frais de sortie',
    step:'Étape',due:'Échéance',percent:'Part',amount:'Montant',planTotal:'Total du plan enregistré',
    planWarning:'Le plan de paiement enregistré ne totalise pas 100 %. Les conditions doivent être confirmées avec le promoteur avant remise au client.',
    simulatedPlan:'Échéancier synthétique simulé',deposit:'Acompte initial',monthly:'Mensualité promoteur',
    handover:'Solde à la livraison',cashPrice:'Prix comptant',installmentPrice:'Prix échelonné',
    grossYield:'Rendement brut effectif',netYield:'Rendement net',cashOnCash:'Cash-on-cash',
    noi:'NOI annuel',cashflow:'Cash-flow annuel',priceM2:'Prix / m²',ltv:'LTV',dscr:'DSCR',
    breakEven:'Occupation seuil',netExit:'Valeur nette de sortie',annualized:'Appréciation annualisée',
    futureRent:'Loyer annuel futur',acquisitionCosts:'Frais acquisition',monthlyDebt:'Mensualité bancaire',
    equity:'Equity initiale',fxStress:'Valeur stress devise',commission:'Commission indicative',
    explanation:'Lecture',metric:'Indicateur',value:'Valeur',
    grossYieldHelp:'Loyer annuel après vacance rapporté au prix du bien.',
    netYieldHelp:'NOI rapporté au coût total d’acquisition.',
    cashOnCashHelp:'Cash-flow annuel rapporté au cash initial estimé requis.',
    dscrHelp:'NOI divisé par la dette annuelle. Au-dessus de 1, le revenu couvre la dette simulée.',
    ltvHelp:'Part du prix financée par la banque.',
    breakEvenHelp:'Occupation minimale estimée pour couvrir charges et dette.',
    netExitHelp:'Valeur de sortie après déduction des frais de sortie.',
    methodology:'Cette analyse est une simulation fondée sur les informations du bien et les hypothèses saisies. Elle ne constitue ni une expertise de valeur, ni une garantie de rendement, ni un conseil fiscal, juridique, bancaire ou financier. Les prix, taxes, loyers, frais, taux, conditions promoteur et règles locales doivent être confirmés avant toute décision d’investissement.',
    footer:'Bosphoras · Property & Investment · Analyse indicative et confidentielle',
    page:'Page',freeCalculation:'Calcul libre',notSelected:'Non sélectionné',unknown:'Non renseigné',
    positiveMargin:'Marge disponible',negativeMargin:'Capital complémentaire estimé',
    interestFree:'Sans intérêt / 0 %',interestBearing:'Avec surcoût / intérêt',notSpecified:'Non spécifié',noPlan:'Aucun plan promoteur n’est appliqué à cette simulation. Le cash initial requis est donc calculé sur l’acquisition complète, sauf financement bancaire.',
  },
  en:{
    report:'Real Estate Investment Analysis',
    confidential:'Confidential document · Bosphoras Property & Investment',
    preparedFor:'Prepared for',property:'Property analysed',executive:'Investor summary',
    assumptions:'Analysis assumptions',payment:'Payment terms',indicators:'Key indicators',
    exit:'Exit projection',notes:'File notes',method:'Methodology & limitations',
    generated:'Generated on',reference:'Reference',developer:'Developer / source',location:'Location',surface:'Surface',
    contact:'Contact',email:'Email',phone:'Phone',budget:'Client budget',capital:'Available capital',
    objective:'Objective',timeframe:'Client timeframe',purchasePrice:'Purchase price',entryCapital:'Available capital today',
    requiredCash:'Estimated initial cash required',liquidityMargin:'Liquidity margin',totalCost:'Total acquisition cost',
    monthlyRent:'Monthly rent',occupancy:'Occupancy',charges:'Monthly charges',maintenance:'Annual maintenance',
    bankFinancing:'Bank financing',bankRate:'Bank rate',loanTerm:'Loan term',hold:'Holding period',
    exitValue:'Assumed exit value',rentGrowth:'Rent growth',exitCosts:'Exit costs',
    step:'Step',due:'Due',percent:'Share',amount:'Amount',planTotal:'Recorded plan total',
    planWarning:'The recorded payment plan does not total 100%. Terms should be confirmed with the developer before this document is presented to the client.',
    simulatedPlan:'Simulated summary schedule',deposit:'Initial deposit',monthly:'Developer monthly payment',
    handover:'Balance at handover',cashPrice:'Cash price',installmentPrice:'Installment price',
    grossYield:'Effective gross yield',netYield:'Net yield',cashOnCash:'Cash-on-cash',
    noi:'Annual NOI',cashflow:'Annual cash flow',priceM2:'Price / sqm',ltv:'LTV',dscr:'DSCR',
    breakEven:'Break-even occupancy',netExit:'Net exit value',annualized:'Annualised appreciation',
    futureRent:'Future annual rent',acquisitionCosts:'Acquisition costs',monthlyDebt:'Monthly bank debt',
    equity:'Initial equity',fxStress:'FX stress value',commission:'Indicative commission',
    explanation:'Interpretation',metric:'Metric',value:'Value',
    grossYieldHelp:'Annual rent after vacancy divided by the property price.',
    netYieldHelp:'NOI divided by the total acquisition cost.',
    cashOnCashHelp:'Annual cash flow divided by the estimated initial cash required.',
    dscrHelp:'NOI divided by annual debt service. Above 1 means simulated income covers debt.',
    ltvHelp:'Share of the property price financed by the bank.',
    breakEvenHelp:'Estimated minimum occupancy required to cover operating costs and debt.',
    netExitHelp:'Exit value after estimated disposal costs.',
    methodology:'This analysis is a simulation based on the property information and assumptions entered. It is not a valuation, a guarantee of return, or tax, legal, banking or financial advice. Prices, taxes, rents, fees, rates, developer terms and local rules must be independently confirmed before any investment decision.',
    footer:'Bosphoras · Property & Investment · Indicative and confidential analysis',
    page:'Page',freeCalculation:'Free calculation',notSelected:'Not selected',unknown:'Not provided',
    positiveMargin:'Available margin',negativeMargin:'Estimated additional capital required',
    interestFree:'Interest-free / 0%',interestBearing:'Interest / premium applies',notSpecified:'Not specified',noPlan:'No developer payment plan is applied to this simulation. Initial cash required is therefore based on the full acquisition, unless bank financing is used.',
  },
  ru:{
    report:'Анализ инвестиций в недвижимость',
    confidential:'Конфиденциальный документ · Bosphoras Property & Investment',
    preparedFor:'Подготовлено для',property:'Анализируемый объект',executive:'Резюме для инвестора',
    assumptions:'Параметры анализа',payment:'Условия оплаты',indicators:'Ключевые показатели',
    exit:'Прогноз выхода',notes:'Примечания по досье',method:'Методология и ограничения',
    generated:'Сформировано',reference:'Референс',developer:'Застройщик / источник',location:'Локация',surface:'Площадь',
    contact:'Контакт',email:'E-mail',phone:'Телефон',budget:'Бюджет клиента',capital:'Доступный капитал',
    objective:'Цель',timeframe:'Горизонт клиента',purchasePrice:'Цена покупки',entryCapital:'Доступный капитал сегодня',
    requiredCash:'Оценочный первоначальный капитал',liquidityMargin:'Запас ликвидности',totalCost:'Полная стоимость приобретения',
    monthlyRent:'Месячная аренда',occupancy:'Загрузка',charges:'Ежемесячные расходы',maintenance:'Годовое обслуживание',
    bankFinancing:'Банковское финансирование',bankRate:'Ставка банка',loanTerm:'Срок кредита',hold:'Срок владения',
    exitValue:'Принятая стоимость выхода',rentGrowth:'Рост аренды',exitCosts:'Расходы при выходе',
    step:'Этап',due:'Срок',percent:'Доля',amount:'Сумма',planTotal:'Итого по записанному плану',
    planWarning:'Записанный план оплаты не составляет 100%. Перед передачей документа клиенту условия необходимо подтвердить у застройщика.',
    simulatedPlan:'Сводный моделируемый график',deposit:'Первоначальный взнос',monthly:'Ежемесячный платеж застройщику',
    handover:'Остаток при передаче',cashPrice:'Цена при полной оплате',installmentPrice:'Цена в рассрочку',
    grossYield:'Эффективная валовая доходность',netYield:'Чистая доходность',cashOnCash:'Cash-on-cash',
    noi:'Годовой NOI',cashflow:'Годовой денежный поток',priceM2:'Цена / м²',ltv:'LTV',dscr:'DSCR',
    breakEven:'Порог загрузки',netExit:'Чистая стоимость выхода',annualized:'Среднегодовой рост стоимости',
    futureRent:'Будущая годовая аренда',acquisitionCosts:'Расходы на приобретение',monthlyDebt:'Ежемесячный платеж банку',
    equity:'Первоначальный капитал',fxStress:'Стоимость при валютном стрессе',commission:'Ориентировочная комиссия',
    explanation:'Пояснение',metric:'Показатель',value:'Значение',
    grossYieldHelp:'Годовая аренда с учетом вакантности по отношению к цене объекта.',
    netYieldHelp:'NOI по отношению к полной стоимости приобретения.',
    cashOnCashHelp:'Годовой денежный поток по отношению к оценочному первоначальному капиталу.',
    dscrHelp:'NOI, деленный на годовые платежи по долгу. Значение выше 1 означает покрытие долга доходом.',
    ltvHelp:'Доля стоимости объекта, профинансированная банком.',
    breakEvenHelp:'Минимальная расчетная загрузка для покрытия расходов и долга.',
    netExitHelp:'Стоимость выхода за вычетом предполагаемых расходов на продажу.',
    methodology:'Этот анализ является расчетной моделью на основе информации об объекте и введенных предположений. Он не является оценкой стоимости, гарантией доходности, налоговой, юридической, банковской или финансовой консультацией. Цены, налоги, аренда, расходы, ставки, условия застройщика и местные правила должны быть подтверждены до принятия инвестиционного решения.',
    footer:'Bosphoras · Property & Investment · Ориентировочный конфиденциальный анализ',
    page:'Страница',freeCalculation:'Свободный расчет',notSelected:'Не выбрано',unknown:'Не указано',
    positiveMargin:'Доступный запас',negativeMargin:'Оценочный дополнительный капитал',
    interestFree:'Без процентов / 0%',interestBearing:'С удорожанием / процентами',notSpecified:'Не указано',noPlan:'В этой модели не применяется план оплаты застройщика. Поэтому необходимый первоначальный капитал рассчитывается исходя из полной стоимости приобретения, если не используется банковское финансирование.',
  }
};

function finite(value:any){const x=Number(value);return Number.isFinite(x)?x:0;}
function local(value:any,lang:ReportLanguage){
  if(!value)return '';
  if(typeof value==='string')return value;
  return value?.[lang]||value?.en||value?.fr||value?.ru||Object.values(value||{})[0]||'';
}
function contactName(c:any){return [c?.first_name,c?.last_name].filter(Boolean).join(' ')||c?.company||c?.email||'';}
function formatMoney(value:any,currency:string,lang:ReportLanguage){
  const locale=lang==='ru'?'ru-RU':lang==='en'?'en-GB':'fr-FR';
  try{return new Intl.NumberFormat(locale,{style:'currency',currency:currency||'EUR',maximumFractionDigits:0}).format(finite(value));}
  catch{return finite(value).toLocaleString(locale)+' '+(currency||'');}
}
function formatPct(value:any,lang:ReportLanguage){return finite(value).toLocaleString(lang==='ru'?'ru-RU':lang==='en'?'en-GB':'fr-FR',{minimumFractionDigits:1,maximumFractionDigits:2})+' %';}
function formatDate(value:any,lang:ReportLanguage){
  const locale=lang==='ru'?'ru-RU':lang==='en'?'en-GB':'fr-FR';
  return new Date(value||Date.now()).toLocaleString(locale,{year:'numeric',month:'long',day:'2-digit',hour:'2-digit',minute:'2-digit'});
}

const PAGE_W=1240;
const PAGE_H=1754;
const M=82;
const NAVY='#10283a';
const GOLD='#b8955d';
const GREEN='#315f52';
const TEXT='#19242c';
const MUTED='#687784';
const BORDER='#d8dee3';
const PALE='#f5f7f8';
const PALE_GREEN='#eef4f1';
const PALE_GOLD='#f8f3ea';

function wrap(ctx:CanvasRenderingContext2D,text:string,maxWidth:number){
  const paras=String(text??'').split(/\n/);
  const lines:string[]=[];
  paras.forEach((para,pi)=>{
    const words=para.trim().split(/\s+/).filter(Boolean);
    if(!words.length){lines.push('');return;}
    let line='';
    words.forEach((word)=>{
      const trial=line?line+' '+word:word;
      if(ctx.measureText(trial).width>maxWidth&&line){lines.push(line);line=word;}else line=trial;
    });
    if(line)lines.push(line);
    if(pi<paras.length-1)lines.push('');
  });
  return lines;
}

function canvasPage(){
  const canvas=document.createElement('canvas');
  canvas.width=PAGE_W;canvas.height=PAGE_H;
  const ctx=canvas.getContext('2d')!;
  ctx.fillStyle='#ffffff';ctx.fillRect(0,0,PAGE_W,PAGE_H);
  return {canvas,ctx,y:150};
}

function drawHeader(page:any,lang:ReportLanguage){
  const {ctx}=page;
  ctx.fillStyle=NAVY;ctx.fillRect(0,0,PAGE_W,96);
  ctx.fillStyle='#fff';ctx.font='700 30px Arial, sans-serif';ctx.fillText('BOSPHORAS',M,58);
  ctx.fillStyle=GOLD;ctx.font='600 14px Arial, sans-serif';ctx.fillText('PROPERTY & INVESTMENT',M+205,57);
  ctx.fillStyle='#d9e3e8';ctx.font='500 13px Arial, sans-serif';ctx.textAlign='right';ctx.fillText(COPY[lang].confidential,PAGE_W-M,57);ctx.textAlign='left';
}
function drawFooter(page:any,lang:ReportLanguage,index:number,total:number){
  const {ctx}=page;
  ctx.strokeStyle=BORDER;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(M,PAGE_H-70);ctx.lineTo(PAGE_W-M,PAGE_H-70);ctx.stroke();
  ctx.font='500 12px Arial, sans-serif';ctx.fillStyle=MUTED;ctx.fillText(COPY[lang].footer,M,PAGE_H-38);
  ctx.textAlign='right';ctx.fillText(COPY[lang].page+' '+index+' / '+total,PAGE_W-M,PAGE_H-38);ctx.textAlign='left';
}
function sectionTitle(page:any,title:string){
  ensure(page,70);
  const {ctx}=page;
  ctx.fillStyle=GREEN;ctx.font='700 15px Arial, sans-serif';ctx.fillText(String(title).toUpperCase(),M,page.y);
  ctx.strokeStyle=BORDER;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(M,page.y+16);ctx.lineTo(PAGE_W-M,page.y+16);ctx.stroke();
  page.y+=48;
}
function ensure(page:any,height:number,newPage?:()=>any){
  if(page.y+height<PAGE_H-110)return page;
  return newPage?newPage():page;
}
function drawWrapped(page:any,text:string,x:number,width:number,opts:any={}){
  const {ctx}=page;
  const size=opts.size||22;const lineHeight=opts.lineHeight||Math.round(size*1.35);
  ctx.font=`${opts.weight||400} ${size}px Arial, sans-serif`;
  ctx.fillStyle=opts.color||TEXT;
  const lines=wrap(ctx,text,width);
  lines.forEach((line:string)=>{ctx.fillText(line,x,page.y);page.y+=lineHeight;});
  return lines.length*lineHeight;
}
function kvGrid(page:any,items:Array<[string,string]>,columns=2){
  const gap=18;
  const width=(PAGE_W-M*2-gap*(columns-1))/columns;
  for(let i=0;i<items.length;i+=columns){
    const row=items.slice(i,i+columns);
    let maxH=94;
    row.forEach(([label,value],idx)=>{
      const x=M+idx*(width+gap);
      page.ctx.fillStyle=PALE;page.ctx.fillRect(x,page.y,width,86);
      page.ctx.fillStyle=MUTED;page.ctx.font='700 12px Arial, sans-serif';page.ctx.fillText(label.toUpperCase(),x+18,page.y+25);
      page.ctx.fillStyle=TEXT;page.ctx.font='600 20px Arial, sans-serif';
      const lines=wrap(page.ctx,value||'—',width-36).slice(0,2);
      lines.forEach((line,j)=>page.ctx.fillText(line,x+18,page.y+53+j*22));
    });
    page.y+=maxH;
  }
}
function summaryCards(page:any,items:Array<[string,string,string?]>){
  const gap=14;const cols=3;const w=(PAGE_W-M*2-gap*(cols-1))/cols;
  for(let i=0;i<items.length;i+=cols){
    const row=items.slice(i,i+cols);
    row.forEach(([label,value,tone],idx)=>{
      const x=M+idx*(w+gap);
      page.ctx.fillStyle=tone==='good'?PALE_GREEN:tone==='warn'?PALE_GOLD:PALE;
      page.ctx.fillRect(x,page.y,w,112);
      page.ctx.fillStyle=MUTED;page.ctx.font='700 11px Arial, sans-serif';page.ctx.fillText(label.toUpperCase(),x+17,page.y+26);
      page.ctx.fillStyle=tone==='good'?GREEN:tone==='warn'?'#8a6230':NAVY;page.ctx.font='700 24px Arial, sans-serif';
      const lines=wrap(page.ctx,value,w-34).slice(0,2);lines.forEach((line,j)=>page.ctx.fillText(line,x+17,page.y+62+j*27));
    });
    page.y+=126;
  }
}
function simpleTable(page:any,headers:string[],rows:string[][],widths?:number[]){
  const total=PAGE_W-M*2;
  const ws=widths||headers.map(()=>total/headers.length);
  const drawRow=(cells:string[],header=false)=>{
    const ctx=page.ctx;
    ctx.font=`${header?700:500} ${header?12:13}px Arial, sans-serif`;
    const wrapped=cells.map((cell,i)=>wrap(ctx,String(cell??''),ws[i]-24));
    const maxLines=Math.max(1,...wrapped.map(x=>x.length));
    const h=Math.max(header?42:46,18+maxLines*(header?17:19));
    if(page.y+h>PAGE_H-112)return false;
    let x=M;
    cells.forEach((cell,i)=>{
      ctx.fillStyle=header?NAVY:(Math.floor((page.y)/h)%2?PALE:'#fff');
      ctx.fillRect(x,page.y,ws[i],h);
      ctx.strokeStyle=BORDER;ctx.strokeRect(x,page.y,ws[i],h);
      ctx.fillStyle=header?'#fff':TEXT;
      wrapped[i].forEach((line,j)=>ctx.fillText(line,x+12,page.y+(header?25:24)+j*(header?17:19)));
      x+=ws[i];
    });
    page.y+=h;
    return true;
  };
  drawRow(headers,true);
  rows.forEach((row)=>drawRow(row,false));
  page.y+=14;
}
function paragraph(page:any,text:string,background?:string){
  const ctx=page.ctx;ctx.font='400 15px Arial, sans-serif';
  const lines=wrap(ctx,text,PAGE_W-M*2-(background?36:0));
  const h=lines.length*22+(background?34:0);
  if(background){ctx.fillStyle=background;ctx.fillRect(M,page.y,PAGE_W-M*2,h);}
  const x=M+(background?18:0);page.y+=background?23:0;
  ctx.fillStyle=MUTED;lines.forEach(line=>{ctx.fillText(line,x,page.y);page.y+=22;});
  if(background)page.y+=11;
}

function bytesFromDataUrl(dataUrl:string){
  const base64=dataUrl.split(',')[1]||'';
  const binary=atob(base64);const out=new Uint8Array(binary.length);
  for(let i=0;i<binary.length;i++)out[i]=binary.charCodeAt(i);
  return out;
}
function ascii(value:string){return new TextEncoder().encode(value);}
function join(chunks:Uint8Array[]){
  const length=chunks.reduce((s,c)=>s+c.length,0);const out=new Uint8Array(length);let offset=0;
  chunks.forEach(c=>{out.set(c,offset);offset+=c.length;});return out;
}
function pdfObject(id:number,chunks:Uint8Array[]){
  return join([ascii(id+' 0 obj\n'),...chunks,ascii('\nendobj\n')]);
}
function buildImagePdf(canvases:HTMLCanvasElement[]){
  const count=2+canvases.length*3;
  const objects:Array<Uint8Array|null>=Array(count+1).fill(null);
  objects[1]=pdfObject(1,[ascii('<< /Type /Catalog /Pages 2 0 R >>')]);
  const kids=canvases.map((_,i)=>`${3+i*3} 0 R`).join(' ');
  objects[2]=pdfObject(2,[ascii(`<< /Type /Pages /Kids [${kids}] /Count ${canvases.length} >>`)]);
  canvases.forEach((canvas,i)=>{
    const pageId=3+i*3,contentId=pageId+1,imageId=pageId+2;
    const jpg=bytesFromDataUrl(canvas.toDataURL('image/jpeg',0.91));
    const content=ascii('q 595.28 0 0 841.89 0 0 cm /Im1 Do Q');
    objects[pageId]=pdfObject(pageId,[ascii(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im1 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>`)]);
    objects[contentId]=pdfObject(contentId,[ascii(`<< /Length ${content.length} >>\nstream\n`),content,ascii('\nendstream')]);
    objects[imageId]=pdfObject(imageId,[ascii(`<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpg.length} >>\nstream\n`),jpg,ascii('\nendstream')]);
  });
  const header=join([ascii('%PDF-1.4\n%'),new Uint8Array([0xe2,0xe3,0xcf,0xd3]),ascii('\n')]);
  const chunks:Uint8Array[]=[header];const offsets:number[]=[0];let cursor=header.length;
  for(let id=1;id<=count;id++){offsets[id]=cursor;chunks.push(objects[id]!);cursor+=objects[id]!.length;}
  const xrefOffset=cursor;
  let xref=`xref\n0 ${count+1}\n0000000000 65535 f \n`;
  for(let id=1;id<=count;id++)xref+=String(offsets[id]).padStart(10,'0')+' 00000 n \n';
  xref+=`trailer\n<< /Size ${count+1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  chunks.push(ascii(xref));
  return join(chunks);
}
function safeFile(value:string){
  return String(value||'investment-analysis').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'-').replace(/^-|-$/g,'').toLowerCase()||'investment-analysis';
}

export async function downloadInvestorReportPdf(data:any){
  const lang:ReportLanguage=(['fr','en','ru'].includes(data?.language)?data.language:'fr');
  const c=COPY[lang];
  const pages:any[]=[];
  let page:any;
  const addPage=()=>{page=canvasPage();drawHeader(page,lang);pages.push(page);return page;};
  addPage();
  const newPage=()=>addPage();
  const requireSpace=(height:number)=>{if(page.y+height>PAGE_H-120)newPage();};

  page.ctx.fillStyle=GOLD;page.ctx.font='700 15px Arial, sans-serif';page.ctx.fillText(c.report.toUpperCase(),M,page.y);page.y+=38;
  page.ctx.fillStyle=NAVY;page.ctx.font='700 45px Arial, sans-serif';
  const titleLines=wrap(page.ctx,data.scenarioName||c.report,PAGE_W-M*2).slice(0,3);
  titleLines.forEach((line:string)=>{page.ctx.fillText(line,M,page.y);page.y+=53;});
  page.y+=10;
  page.ctx.fillStyle=MUTED;page.ctx.font='500 14px Arial, sans-serif';page.ctx.fillText(c.generated+' '+formatDate(data.generatedAt||Date.now(),lang),M,page.y);page.y+=38;

  if(data.client){
    sectionTitle(page,c.preparedFor);
    kvGrid(page,[
      [c.contact,contactName(data.client)||c.unknown],
      [c.email,data.client.email||c.unknown],
      [c.phone,data.client.whatsapp||data.client.phone||c.unknown],
      [c.capital,data.client.capital_available?formatMoney(data.client.capital_available,data.client.currency||data.currency,lang):c.unknown],
      [c.budget,data.client.budget_max?formatMoney(data.client.budget_max,data.client.currency||data.currency,lang):c.unknown],
      [c.objective,data.client.investment_goal||c.unknown],
      [c.timeframe,data.client.timeframe||c.unknown],
      ['', ''],
    ],2);
  }

  requireSpace(280);
  sectionTitle(page,c.property);
  if(data.property){
    kvGrid(page,[
      [c.property,local(data.property.title,lang)||data.property.external_id||c.unknown],
      [c.reference,data.property.external_id||c.unknown],
      [c.location,[data.property.district,data.property.city_name||data.property.city,data.property.country_name].filter(Boolean).join(', ')||c.unknown],
      [c.developer,data.property.developer||data.property.partner||c.unknown],
      [c.purchasePrice,formatMoney(data.inputs.price,data.currency,lang)],
      [c.surface,data.inputs.surface?finite(data.inputs.surface).toLocaleString(lang==='ru'?'ru-RU':'fr-FR')+' m²':c.unknown],
    ],2);
  }else{
    paragraph(page,c.freeCalculation,PALE);
  }

  requireSpace(360);
  sectionTitle(page,c.executive);
  const margin=finite(data.results.liquidityMargin);
  summaryCards(page,[
    [c.purchasePrice,formatMoney(data.inputs.price,data.currency,lang)],
    [c.requiredCash,formatMoney(data.results.initialCashRequired,data.currency,lang),'warn'],
    [margin>=0?c.positiveMargin:c.negativeMargin,formatMoney(Math.abs(margin),data.currency,lang),margin>=0?'good':'warn'],
    [c.netYield,formatPct(data.results.netYield,lang),'good'],
    [c.cashflow,formatMoney(data.results.netAnnualCashflow,data.currency,lang),data.results.netAnnualCashflow>=0?'good':'warn'],
    [c.netExit,formatMoney(data.results.netExit,data.currency,lang)],
  ]);

  requireSpace(430);
  sectionTitle(page,c.assumptions);
  kvGrid(page,[
    [c.entryCapital,formatMoney(data.inputs.entry,data.currency,lang)],
    [c.totalCost,formatMoney(data.results.totalCost,data.currency,lang)],
    [c.monthlyRent,formatMoney(data.inputs.monthlyRent,data.currency,lang)],
    [c.occupancy,formatPct(data.inputs.occupancyPct,lang)],
    [c.charges,formatMoney(data.inputs.monthlyCharges,data.currency,lang)],
    [c.maintenance,formatMoney(data.inputs.annualMaintenance,data.currency,lang)],
    [c.bankFinancing,formatMoney(data.inputs.financeAmount,data.currency,lang)],
    [c.bankRate,formatPct(data.inputs.interest,lang)],
    [c.loanTerm,String(data.inputs.termYears)+' '+(lang==='ru'?'лет':lang==='en'?'years':'ans')],
    [c.hold,String(data.inputs.holdYears)+' '+(lang==='ru'?'лет':lang==='en'?'years':'ans')],
    [c.exitValue,formatMoney(data.inputs.exitValue,data.currency,lang)],
    [c.exitCosts,formatPct(data.inputs.exitCostsPct,lang)],
  ],2);

  newPage();
  sectionTitle(page,c.payment);
  const plan=Array.isArray(data.paymentPlan)?data.paymentPlan.filter(Boolean):[];
  if(plan.length){
    const totalPct=plan.reduce((sum:number,step:any)=>sum+finite(step.percentage),0);
    const rows=plan.map((step:any,index:number)=>[
      String(index+1),
      local(step.label,lang)||c.unknown,
      local(step.due,lang)||c.unknown,
      step.percentage!==undefined&&step.percentage!==null?formatPct(step.percentage,lang):'—',
      step.amount!==undefined&&step.amount!==null?formatMoney(step.amount,data.currency,lang):(step.percentage!==undefined&&step.percentage!==null?formatMoney(finite(data.inputs.price)*finite(step.percentage)/100,data.currency,lang):'—'),
    ]);
    simpleTable(page,[c.step,c.payment,c.due,c.percent,c.amount],rows,[64,300,285,150,275]);
    page.ctx.fillStyle=NAVY;page.ctx.font='700 15px Arial, sans-serif';page.ctx.fillText(c.planTotal+': '+formatPct(totalPct,lang),M,page.y);page.y+=30;
    if(Math.abs(totalPct-100)>0.5)paragraph(page,c.planWarning,PALE_GOLD);
  }else if(data.inputs.developerPlanEnabled){
    paragraph(page,c.simulatedPlan,PALE);
    kvGrid(page,[
      [c.cashPrice,formatMoney(data.results.developerCashPrice,data.currency,lang)],
      [c.installmentPrice,formatMoney(data.results.developerInstallmentTotal,data.currency,lang)],
      [c.deposit,formatMoney(data.results.developerDeposit,data.currency,lang)],
      [c.monthly,formatMoney(data.results.developerMonthly,data.currency,lang)],
      [c.handover,formatMoney(data.results.developerBalloon,data.currency,lang)],
      [c.payment,data.inputs.developerInterestMode==='interest_free'?c.interestFree:data.inputs.developerInterestMode==='interest_bearing'?c.interestBearing:c.notSpecified],
    ],2);
  }else{
    paragraph(page,c.noPlan,PALE);
    kvGrid(page,[
      [c.purchasePrice,formatMoney(data.inputs.price,data.currency,lang)],
      [c.requiredCash,formatMoney(data.results.initialCashRequired,data.currency,lang)],
    ],2);
  }

  requireSpace(520);
  sectionTitle(page,c.indicators);
  const metricRows=[
    [c.priceM2,formatMoney(data.results.priceM2,data.currency,lang),data.inputs.surface?c.priceM2:'—'],
    [c.grossYield,formatPct(data.results.grossYield,lang),c.grossYieldHelp],
    [c.netYield,formatPct(data.results.netYield,lang),c.netYieldHelp],
    [c.cashOnCash,formatPct(data.results.cashOnCash,lang),c.cashOnCashHelp],
    [c.noi,formatMoney(data.results.noi,data.currency,lang),''],
    [c.cashflow,formatMoney(data.results.netAnnualCashflow,data.currency,lang),''],
    [c.monthlyDebt,formatMoney(data.results.monthlyDebt,data.currency,lang),''],
    [c.ltv,formatPct(data.results.ltv,lang),c.ltvHelp],
    [c.dscr,data.results.dscr?finite(data.results.dscr).toFixed(2):'—',c.dscrHelp],
    [c.breakEven,formatPct(data.results.breakEvenOccupancy,lang),c.breakEvenHelp],
    [c.acquisitionCosts,formatMoney(data.results.acquisitionCosts,data.currency,lang),''],
    [c.netExit,formatMoney(data.results.netExit,data.currency,lang),c.netExitHelp],
  ];
  simpleTable(page,[c.metric,c.value,c.explanation],metricRows,[285,220,585]);

  newPage();
  sectionTitle(page,c.exit);
  summaryCards(page,[
    [c.exitValue,formatMoney(data.inputs.exitValue,data.currency,lang)],
    [c.exitCosts,formatMoney(data.results.exitCosts,data.currency,lang)],
    [c.netExit,formatMoney(data.results.netExit,data.currency,lang),'good'],
    [c.annualized,formatPct(data.results.annualizedAppreciation,lang)],
    [c.futureRent,formatMoney(data.results.futureAnnualRent,data.currency,lang)],
    [c.fxStress,formatMoney(data.results.fxStressValue,data.currency,lang)],
  ]);

  if(data.notes){
    sectionTitle(page,c.notes);
    paragraph(page,String(data.notes),PALE);
  }

  sectionTitle(page,c.method);
  paragraph(page,c.methodology,PALE_GOLD);

  pages.forEach((p:any,index:number)=>drawFooter(p,lang,index+1,pages.length));
  const bytes=buildImagePdf(pages.map((p:any)=>p.canvas));
  const blob=new Blob([bytes],{type:'application/pdf'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  const clientPart=data.client?contactName(data.client):'';
  const propertyPart=data.property?local(data.property.title,lang)||data.property.external_id:'';
  a.href=url;
  a.download='bosphoras-'+safeFile([clientPart,propertyPart,data.scenarioName].filter(Boolean).join('-')||'investment-analysis')+'.pdf';
  document.body.appendChild(a);a.click();a.remove();
  window.setTimeout(()=>URL.revokeObjectURL(url),2000);
}
