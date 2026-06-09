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

function safeTextFixes() {
  replaceAll('Book your private chauffeur in Istanbul', 'Book your private driver in Istanbul');
  replaceAll('Buchen Sie Ihren privaten Chauffeur in Istanbul', 'Buchen Sie Ihren privaten Fahrer in Istanbul');
  replaceAll('Math.round(oneWayPrice * 2 * 0.85)', 'Math.round(oneWayPrice * 2)');
  replaceAll('Offre aller-retour : -15% sur le global', '');
  replaceAll('Aller-retour : retour ajouté au total', '');
  replaceAll('Round trip offer: 15% off the total', '');
  replaceAll('Round trip: return added to total', '');
  replaceAll('Remise aller-retour -15%', 'Aller-retour');
  replaceAll('Round trip discount -15%', 'Round trip');
  replaceAll('Remboursable sans condition jusqu’à 24h avant', 'Annulation gratuite jusqu’à 24h avant');
  replaceAll('Fully refundable up to 24h before pickup', 'Free cancellation up to 24h before pickup');
  replaceAll('Возврат без условий до 24 часов до подачи', 'Бесплатная отмена до 24 часов до подачи');
  replaceAll("name: 'E-Class', label: 'Business Sedan'", "name: 'E-Class ou équivalent', label: 'Business Sedan'");
  replaceAll("name: 'S-Class', label: 'Luxury Sedan'", "name: 'S-Class ou équivalent', label: 'Luxury Sedan'");
  replaceAll("const [pickup, setPickup] = useState('Istanbul Airport IST');", "const [pickup, setPickup] = useState('');");
}

function removeEntryCurrencySelector() {
  const marker = '<div className="mb-4 grid grid-cols-4 rounded-2xl bg-white/45 p-1 backdrop-blur-xl md:bg-gray-100">';
  const start = content.indexOf(marker);
  if (start < 0) return false;
  const chunk = content.slice(start, start + 900);
  if (!chunk.includes("['EUR','USD','GBP','CHF']") && !chunk.includes("['EUR', 'USD', 'GBP', 'CHF']")) return false;
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

function applyAirportDropdowns() {
  const before = content;

  if (!content.includes("const [airportField, setAirportField]")) {
    replaceAll("  const [drop, setDrop] = useState('');", "  const [drop, setDrop] = useState('');\n  const [airportField, setAirportField] = useState<null | 'pickup' | 'drop'>(null);");
  }

  const airportDropdown = `  const AirportDropdown = ({ field }: { field: 'pickup' | 'drop' }) => airportField === field ? <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.18)]">{(['Istanbul Airport IST', 'Sabiha Gökçen Airport SAW'] as const).map((airport) => <button key={airport} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => { field === 'pickup' ? setPickup(airport) : setDrop(airport); setAirportField(null); }} className="block w-full rounded-xl px-4 py-3 text-left text-sm font-black text-slate-800 transition hover:bg-slate-100">{airport}</button>)}</div> : null;`;

  if (content.includes('const AirportQuick = () =>')) {
    content = content.replace(/  const AirportQuick = \(\) => <div className="mt-2 flex flex-wrap gap-2">.*?<\/div>;/, airportDropdown);
  } else if (!content.includes('const AirportDropdown =')) {
    replaceAll('  const RouteDetails = () =>', `${airportDropdown}\n  const RouteDetails = () =>`);
  }

  const legacyPair = '<label><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportQuick/></label><label><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/></label>';
  const dropdownPair = '<label className="relative"><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onFocus={() => setAirportField(\'pickup\')} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportDropdown field="pickup"/></label><label className="relative"><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onFocus={() => setAirportField(\'drop\')} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/><AirportDropdown field="drop"/></label>';
  replaceAll(legacyPair, dropdownPair);

  const pairWithBlur = '<label className="relative"><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onFocus={() => setAirportField(\'pickup\')} onBlur={() => setTimeout(() => setAirportField(null), 140)} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportDropdown field="pickup"/></label><label className="relative"><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onFocus={() => setAirportField(\'drop\')} onBlur={() => setTimeout(() => setAirportField(null), 140)} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/><AirportDropdown field="drop"/></label>';
  replaceAll(pairWithBlur, dropdownPair);
  replaceAll('onBlur={() => setTimeout(() => setAirportField(null), 140)} ', '');

  return content !== before;
}

function addMobileHero() {
  const before = content;
  const gridStart = '<div className="relative z-10 mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">';
  if (content.includes(gridStart) && !content.includes('data-transfer-mobile-hero')) {
    const mobileHero = '<div data-transfer-mobile-hero="true" className="relative -mx-3 -mt-20 mb-[-34px] h-[420px] overflow-hidden rounded-b-[2rem] md:hidden"><Image src="/images/home.driver.jpg" alt={c.h1} fill priority className="object-cover" sizes="100vw"/><div className="absolute inset-0 bg-gradient-to-b from-black/8 via-black/18 to-black/76"/><div className="absolute bottom-16 left-4 right-4 text-white"><h1 className="text-[2.25rem] font-black leading-[0.94] tracking-[-0.065em]">{c.h1}</h1><div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur-xl"><span>{c.instant}</span><span>·</span><span>{c.refundable}</span></div></div></div>';
    replaceAll(gridStart, `${gridStart}${mobileHero}`);
  }
  replaceAll('className="object-cover opacity-45"', 'className="hidden object-cover opacity-45 md:block"');
  replaceAll('className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/55 to-slate-950"', 'className="absolute inset-0 hidden bg-gradient-to-b from-slate-950/45 via-slate-950/55 to-slate-950 md:block"');
  replaceAll('className="text-white"><div className="mb-4 inline-flex', 'className="hidden text-white md:block"><div className="mb-4 inline-flex');
  replaceAll('className="relative min-h-[100svh] overflow-hidden bg-slate-950 px-4 pb-8 pt-24 md:px-8 md:pt-28"', 'className="relative min-h-[100svh] overflow-hidden bg-[#eef0f3] px-3 pb-6 pt-20 md:bg-slate-950 md:px-8 md:pt-28"');
  replaceAll('className="rounded-[30px] border border-white/20 bg-white/82 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-6"', 'className="rounded-[28px] border border-white/70 bg-white/92 p-3 shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-2xl md:rounded-[30px] md:border-white/20 md:bg-white/82 md:p-6 md:shadow-[0_30px_120px_rgba(0,0,0,0.35)]"');
  return content !== before;
}

function layoutReservationFields() {
  const before = content;

  const dateTimeOld = '<label><span className={labelClass}><CalendarDays size={13}/>{c.date}</span><input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass}/></label><label><span className={labelClass}><Clock size={13}/>{c.time}</span><select value={time} onChange={(e) => setTime(e.target.value)} className={inputClass}>{timeOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>';
  const dateTimeNew = `<div className="grid grid-cols-2 gap-2 md:contents">${dateTimeOld}</div>`;
  if (content.includes(dateTimeOld) && !content.includes(dateTimeNew)) replaceAll(dateTimeOld, dateTimeNew);

  const hourlyOld = "{mode === 'hourly' && <label className=\"md:col-span-2\"><span className={labelClass}><Clock size={14}/>{c.duration}</span><select value={hours} onChange={(e) => setHours(Number(e.target.value))} className={inputClass}>{[2,3,4,5,6,8,12].map((h) => <option key={h} value={h}>{h} {c.hours}</option>)}</select></label>}<label><span className={labelClass}><Plane size={13}/>{c.flight}</span><input value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} className={inputClass} placeholder={c.flightPlaceholder}/></label><label><span className={labelClass}><Users size={13}/>{c.pax}</span><input type=\"number\" min={1} max={12} value={pax} onChange={(e) => setPax(Number(e.target.value))} className={`${inputClass} text-center`}/></label>";
  const hourlyNew = "{mode === 'hourly' ? <div className=\"grid grid-cols-[1fr_1fr_76px] gap-2 md:contents\"><label><span className={labelClass}><Clock size={14}/>{c.duration}</span><select value={hours} onChange={(e) => setHours(Number(e.target.value))} className={inputClass}>{[2,3,4,5,6,8,12].map((h) => <option key={h} value={h}>{h} {c.hours}</option>)}</select></label><label><span className={labelClass}><Plane size={13}/>{c.flight}</span><input value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} className={inputClass} placeholder={c.flightPlaceholder}/></label><label><span className={labelClass}><Users size={13}/>{c.pax}</span><input type=\"number\" min={1} max={12} value={pax} onChange={(e) => setPax(Number(e.target.value))} className={`${inputClass} text-center px-2`}/></label></div> : <><label><span className={labelClass}><Plane size={13}/>{c.flight}</span><input value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} className={inputClass} placeholder={c.flightPlaceholder}/></label><label><span className={labelClass}><Users size={13}/>{c.pax}</span><input type=\"number\" min={1} max={12} value={pax} onChange={(e) => setPax(Number(e.target.value))} className={`${inputClass} text-center`}/></label></>}";
  if (content.includes(hourlyOld)) replaceAll(hourlyOld, hourlyNew);

  return content !== before;
}

function polishCurrentUi() {
  const before = content;
  replaceAll('<p className="mt-3 text-sm font-semibold text-slate-500">{quoteLoading ? c.calculating : `${routeMinutes} min ${c.estimated} · ${routeBilled} min ${c.billed} · ${routeDistance} km`}</p><RouteDetails/>', '<RouteDetails/>');
  replaceAll('<p className="mt-3 text-sm font-semibold text-slate-500">{quoteLoading ? c.calculating : `${routeMinutes} min ${c.estimated} · ${routeBilled} min ${c.billed} · ${routeDistance} km`}</p><RouteDetails />', '<RouteDetails />');
  content = content.replace(/  const RouteDetails = \(\) => <div className="mt-5 grid gap-2 text-xs font-black uppercase tracking-\[0\.08em\] text-slate-700 md:grid-cols-4">.*?<\/div>;/, '  const RouteDetails = () => <div className="mt-5 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm"><div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.08em] text-slate-700"><span>{formattedDate} · {timeLabel}</span><span className="h-1 w-1 rounded-full bg-slate-300"/><span>{routeMinutes} {c.tripMin}</span><span className="h-1 w-1 rounded-full bg-slate-300"/><span>{routeDistance} km</span><span className="h-1 w-1 rounded-full bg-slate-300"/><span className="text-emerald-700">{c.tollIncluded}</span></div></div>;');
  if (!content.includes('const [showExtras, setShowExtras]')) replaceAll('  const [forOther, setForOther] = useState(false);', '  const [forOther, setForOther] = useState(false);\n  const [showExtras, setShowExtras] = useState(false);');
  replaceAll('<textarea placeholder={c.note} rows={4} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-slate-950 focus:ring-4 focus:ring-slate-950/5 md:col-span-2"/>', '');
  replaceAll('className="h-fit rounded-[28px] bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)]"', 'className="h-fit rounded-[24px] border border-slate-200 bg-white p-5 text-slate-950 shadow-[0_12px_34px_rgba(15,23,42,0.08)]"');
  replaceAll('text-white/45', 'text-[#a97b36]');
  replaceAll('<h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">{c.securePayment}</h3>', '<h3 className="mt-2 text-2xl font-black tracking-[-0.05em]">{c.securePayment}</h3>');
  replaceAll('className="mt-6 space-y-3 text-sm text-white/70"', 'className="mt-4 space-y-2 text-sm text-slate-600"');
  replaceAll('<b className="text-white">', '<b className="text-slate-950">');
  replaceAll('className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-xs leading-6 text-white/70"', 'className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-xs font-semibold leading-5 text-emerald-800"');
  replaceAll('className="mt-6 border-t border-white/15 pt-6"', 'className="mt-4 border-t border-slate-200 pt-4"');
  replaceAll('className="text-sm text-white/60"', 'className="text-sm text-slate-500"');
  replaceAll('className="text-5xl font-black tracking-[-0.06em]"', 'className="text-4xl font-black tracking-[-0.06em]"');
  replaceAll('className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-950"', 'className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white"');
  return content !== before;
}

safeTextFixes();
replaceAll('className="hidden object-cover md:block"', 'className="hidden object-contain object-center md:block"');
replaceAll('className="hidden object-cover object-center scale-[0.92] md:block"', 'className="hidden object-contain object-center md:block"');
replaceAll('className="object-cover" sizes="100vw"', 'className="object-contain object-center" sizes="100vw"');
replaceAll('className="object-cover object-center scale-[0.92]" sizes="100vw"', 'className="object-contain object-center" sizes="100vw"');
replaceAll('className="object-cover object-center scale-[0.92]"', 'className="object-contain object-center"');

const premiumPaymentUi = content.includes("type Currency = 'EUR' | 'USD' | 'GBP' | 'CHF'") && content.includes("type PaymentMode = 'online_full' | 'deposit_onboard'");

if (premiumPaymentUi) {
  const removedCurrency = removeEntryCurrencySelector();
  const disabledGoogle = disableGooglePlacesByDefault();
  const dropdowns = applyAirportDropdowns();
  const hero = addMobileHero();
  const fields = layoutReservationFields();
  const polish = polishCurrentUi();
  fs.writeFileSync(file, content, 'utf8');
  console.log(`[transfer booking] premium UI patched; entry currency ${removedCurrency ? 'removed' : 'unchanged'}, Google Places ${disabledGoogle ? 'disabled by default' : 'unchanged'}, dropdowns ${dropdowns}, mobile hero ${hero}, fields ${fields}, polish ${polish}`);
  process.exit(0);
}

replaceAll('className="object-cover"', 'className="object-contain object-center"');
fs.writeFileSync(file, content, 'utf8');
console.log('[transfer booking] hero image uses object-contain and no crop');
