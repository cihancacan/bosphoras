import fs from 'node:fs';

const file = 'components/TransferBookingClient.tsx';

if (!fs.existsSync(file)) {
  console.log('[transfer patch] file not found, skipped');
  process.exit(0);
}

let content = fs.readFileSync(file, 'utf8');

function replaceAll(from, to) {
  content = content.split(from).join(to);
}

function removeFirstStepCurrencySelector() {
  const startMarker = '<div className="mb-4 grid grid-cols-4 rounded-2xl bg-white/45 p-1 backdrop-blur-xl md:bg-gray-100">{([\'EUR\',\'USD\',\'GBP\',\'CHF\'] as Currency[]).map((cur) => <button key={cur} onClick={() => setCurrency(cur)}';
  const start = content.indexOf(startMarker);
  if (start < 0) return false;
  const endMarker = '</button>)}</div>';
  const end = content.indexOf(endMarker, start);
  if (end < 0) return false;
  content = content.slice(0, start) + content.slice(end + endMarker.length);
  return true;
}

function disableGooglePlacesByDefault() {
  if (content.includes('NEXT_PUBLIC_ENABLE_GOOGLE_PLACES')) return false;
  const from = 'useEffect(() => { const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; const connect = () =>';
  const to = "useEffect(() => { const enabled = process.env.NEXT_PUBLIC_ENABLE_GOOGLE_PLACES === 'true'; if (!enabled) return; const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; const connect = () =>";
  if (!content.includes(from)) return false;
  replaceAll(from, to);
  return true;
}

function convertAirportChoicesToInputDropdowns() {
  let changed = false;

  if (!content.includes("const [airportField, setAirportField]")) {
    const from = "  const [drop, setDrop] = useState('');";
    const to = "  const [drop, setDrop] = useState('');\n  const [airportField, setAirportField] = useState<null | 'pickup' | 'drop'>(null);";
    if (content.includes(from)) { replaceAll(from, to); changed = true; }
  }

  const airportDropdown = "  const AirportDropdown = ({ field }: { field: 'pickup' | 'drop' }) => airportField === field ? <div className=\"absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.18)]\">{(['Istanbul Airport IST', 'Sabiha Gökçen Airport SAW'] as const).map((airport) => <button key={airport} type=\"button\" onMouseDown={(e) => e.preventDefault()} onClick={() => { field === 'pickup' ? setPickup(airport) : setDrop(airport); setAirportField(null); }} className=\"block w-full rounded-xl px-4 py-3 text-left text-sm font-black text-slate-800 transition hover:bg-slate-100\">{airport}</button>)}</div> : null;";

  if (content.includes('const AirportQuick = () =>')) {
    content = content.replace(/  const AirportQuick = \(\) => <div className="mt-2 flex flex-wrap gap-2">.*?<\/div>;/, airportDropdown);
    changed = true;
  } else if (!content.includes('const AirportDropdown =')) {
    const anchor = '  const RouteDetails = () =>';
    if (content.includes(anchor)) { replaceAll(anchor, `${airportDropdown}\n${anchor}`); changed = true; }
  }

  const replacements = [
    [
      '<label><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportQuick/></label><label><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/></label>',
      '<label className="relative"><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onFocus={() => setAirportField(\'pickup\')} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportDropdown field="pickup"/></label><label className="relative"><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onFocus={() => setAirportField(\'drop\')} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/><AirportDropdown field="drop"/></label>'
    ],
    [
      '<label className="relative"><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onFocus={() => setAirportField(\'pickup\')} onBlur={() => setTimeout(() => setAirportField(null), 140)} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportDropdown field="pickup"/></label><label className="relative"><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onFocus={() => setAirportField(\'drop\')} onBlur={() => setTimeout(() => setAirportField(null), 140)} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/><AirportDropdown field="drop"/></label>',
      '<label className="relative"><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onFocus={() => setAirportField(\'pickup\')} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportDropdown field="pickup"/></label><label className="relative"><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onFocus={() => setAirportField(\'drop\')} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/><AirportDropdown field="drop"/></label>'
    ]
  ];
  for (const [from, to] of replacements) if (content.includes(from)) { replaceAll(from, to); changed = true; }

  replaceAll('onBlur={() => setTimeout(() => setAirportField(null), 140)} ', '');
  return changed;
}

function applyModernUxPolish() {
  let changed = false;

  const before = content;

  replaceAll('Remboursable sans condition jusqu’à 24h avant', 'Annulation gratuite jusqu’à 24h avant');
  replaceAll('Fully refundable up to 24h before pickup', 'Free cancellation up to 24h before pickup');
  replaceAll('Возврат без условий до 24 часов до подачи', 'Бесплатная отмена до 24 часов до подачи');

  replaceAll("name: 'E-Class', label: 'Business Sedan'", "name: 'E-Class ou équivalent', label: 'Business Sedan'");
  replaceAll("name: 'S-Class', label: 'Luxury Sedan'", "name: 'S-Class ou équivalent', label: 'Luxury Sedan'");

  replaceAll('<p className="mt-3 text-sm font-semibold text-slate-500">{quoteLoading ? c.calculating : `${routeMinutes} min ${c.estimated} · ${routeBilled} min ${c.billed} · ${routeDistance} km`}</p><RouteDetails/>', '<RouteDetails/>');
  replaceAll('<p className="mt-3 text-sm font-semibold text-slate-500">{quoteLoading ? c.calculating : `${routeMinutes} min ${c.estimated} · ${routeBilled} min ${c.billed} · ${routeDistance} km`}</p><RouteDetails />', '<RouteDetails />');

  content = content.replace(/  const RouteDetails = \(\) => <div className="mt-5 grid gap-2 text-xs font-black uppercase tracking-\[0\.08em\] text-slate-700 md:grid-cols-4">.*?<\/div>;/, "  const RouteDetails = () => <div className=\"mt-5 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm\"><div className=\"flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.08em] text-slate-700\"><span>{formattedDate} · {timeLabel}</span><span className=\"h-1 w-1 rounded-full bg-slate-300\"/><span>{routeMinutes} {c.tripMin}</span><span className=\"h-1 w-1 rounded-full bg-slate-300\"/><span>{routeDistance} km</span><span className=\"h-1 w-1 rounded-full bg-slate-300\"/><span className=\"text-emerald-700\">{c.tollIncluded}</span></div></div>;");

  if (!content.includes('const [showExtras, setShowExtras]')) {
    replaceAll('  const [forOther, setForOther] = useState(false);', '  const [forOther, setForOther] = useState(false);\n  const [showExtras, setShowExtras] = useState(false);');
  }

  replaceAll('<textarea placeholder={c.note} rows={4} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-slate-950 focus:ring-4 focus:ring-slate-950/5 md:col-span-2"/>', '');

  const oldOptions = /<div className="mt-6 grid gap-3 md:grid-cols-3"><label className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700 transition hover:border-slate-950"><input type="checkbox" checked=\{child\}.*?<\/div><div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4">/;
  const newOptions = '<div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4"><label className="flex cursor-pointer items-center justify-between gap-4"><span><span className="block text-sm font-black text-slate-900">Services supplémentaires</span><span className="block text-xs font-semibold text-slate-500">Note, souhaits, siège enfant et bouquets</span></span><input type="checkbox" checked={showExtras} onChange={(e) => setShowExtras(e.target.checked)} className="h-5 w-5"/></label>{showExtras && <div className="mt-4 grid gap-3 md:grid-cols-3"><textarea placeholder={c.note} rows={3} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-slate-950 focus:ring-4 focus:ring-slate-950/5 md:col-span-3"/><label className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700 transition hover:border-slate-950"><input type="checkbox" checked={child} onChange={(e) => setChild(e.target.checked)}/> <Baby className="my-2 h-5 w-5"/>{c.child}<br/><b>+{formatMoney(extras.child, currency)}</b></label><label className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700 transition hover:border-slate-950"><input type="checkbox" checked={flowers} onChange={(e) => setFlowers(e.target.checked)}/> <Flower2 className="my-2 h-5 w-5"/>{c.bouquet}<br/><b>+{formatMoney(extras.flowers, currency)}</b></label><label className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700 transition hover:border-slate-950"><input type="checkbox" checked={roses} onChange={(e) => setRoses(e.target.checked)}/> <Flower2 className="my-2 h-5 w-5"/>{c.roses}<br/><b>+{formatMoney(extras.roses, currency)}</b></label></div>}</div><div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4">';
  content = content.replace(oldOptions, newOptions);

  replaceAll('className="h-fit rounded-[28px] bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)]"', 'className="h-fit rounded-[24px] border border-slate-200 bg-white p-5 text-slate-950 shadow-[0_12px_34px_rgba(15,23,42,0.08)]"');
  replaceAll('text-white/45', 'text-[#a97b36]');
  replaceAll('<h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">{c.securePayment}</h3>', '<h3 className="mt-2 text-2xl font-black tracking-[-0.05em]">{c.securePayment}</h3>');
  replaceAll('className="mt-6 space-y-3 text-sm text-white/70"', 'className="mt-4 space-y-2 text-sm text-slate-600"');
  replaceAll('<b className="text-white">', '<b className="text-slate-950">');
  replaceAll('className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-xs leading-6 text-white/70"', 'className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-xs font-semibold leading-5 text-emerald-800"');
  replaceAll('className="mb-2 h-5 w-5 text-[#f5c979]"', 'className="mb-2 h-5 w-5 text-emerald-700"');
  replaceAll('className="mt-6 border-t border-white/15 pt-6"', 'className="mt-4 border-t border-slate-200 pt-4"');
  replaceAll('className="text-sm text-white/60"', 'className="text-sm text-slate-500"');
  replaceAll('className="text-5xl font-black tracking-[-0.06em]"', 'className="text-4xl font-black tracking-[-0.06em]"');
  replaceAll('className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-950"', 'className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white"');

  replaceAll('rounded-[28px] border border-[#eadfca] bg-white p-4 shadow-[0_12px_38px_rgba(15,23,42,0.07)]', 'rounded-[24px] border border-[#eadfca] bg-white p-4 shadow-[0_8px_26px_rgba(15,23,42,0.06)]');
  replaceAll('rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_12px_38px_rgba(15,23,42,0.07)]', 'rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_8px_26px_rgba(15,23,42,0.06)]');

  changed = content !== before;
  return changed;
}

replaceAll('Book your private chauffeur in Istanbul', 'Book your private driver in Istanbul');
replaceAll('Buchen Sie Ihren privaten Chauffeur in Istanbul', 'Buchen Sie Ihren privaten Fahrer in Istanbul');
replaceAll('Math.round(oneWayPrice * 2 * 0.85)', 'Math.round(oneWayPrice * 2)');
replaceAll('Offre aller-retour : -15% sur le global', '');
replaceAll('Aller-retour : retour ajouté au total', '');
replaceAll('Round trip offer: 15% off the total', '');
replaceAll('Round trip: return added to total', '');
replaceAll('Remise aller-retour -15%', 'Aller-retour');
replaceAll('Round trip discount -15%', 'Round trip');

replaceAll('className="hidden object-cover md:block"', 'className="hidden object-contain object-center md:block"');
replaceAll('className="hidden object-cover object-center scale-[0.92] md:block"', 'className="hidden object-contain object-center md:block"');
replaceAll('className="object-cover" sizes="100vw"', 'className="object-contain object-center" sizes="100vw"');
replaceAll('className="object-cover object-center scale-[0.92]" sizes="100vw"', 'className="object-contain object-center" sizes="100vw"');
replaceAll('className="object-cover object-center scale-[0.92]"', 'className="object-contain object-center"');

const premiumPaymentUi = content.includes("type Currency = 'EUR' | 'USD' | 'GBP' | 'CHF'") && content.includes("type PaymentMode = 'online_full' | 'deposit_onboard'");

if (premiumPaymentUi) {
  const removedCurrency = removeFirstStepCurrencySelector();
  const disabledGoogle = disableGooglePlacesByDefault();
  const dropdownAirports = convertAirportChoicesToInputDropdowns();
  const modernPolish = applyModernUxPolish();
  fs.writeFileSync(file, content, 'utf8');
  console.log(`[transfer booking] premium UI patched; entry currency ${removedCurrency ? 'removed' : 'unchanged'}, Google Places ${disabledGoogle ? 'disabled by default' : 'unchanged'}, airport dropdowns ${dropdownAirports ? 'applied' : 'unchanged'}, modern polish ${modernPolish ? 'applied' : 'unchanged'}`);
  process.exit(0);
}

replaceAll('className="object-cover"', 'className="object-contain object-center"');

fs.writeFileSync(file, content, 'utf8');
console.log('[transfer booking] hero image uses object-contain and no crop');
