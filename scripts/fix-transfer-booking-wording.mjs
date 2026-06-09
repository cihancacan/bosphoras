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

function reorderAirportSuggestions() {
  const from = "const airportSuggestions = ['Istanbul Airport IST', 'Sabiha Gökçen Airport SAW'];";
  const to = "const airportSuggestions = ['Istanbul Airport IST', 'Sabiha Gökçen Airport SAW'];";
  if (!content.includes(from)) return false;
  replaceAll(from, to);
  return true;
}

function convertAirportChoicesToInputDropdowns() {
  let changed = false;

  if (!content.includes("const [airportField, setAirportField]")) {
    const from = "  const [drop, setDrop] = useState('');";
    const to = "  const [drop, setDrop] = useState('');\n  const [airportField, setAirportField] = useState<null | 'pickup' | 'drop'>(null);";
    if (content.includes(from)) {
      replaceAll(from, to);
      changed = true;
    }
  }

  const airportDropdown = "  const AirportDropdown = ({ field }: { field: 'pickup' | 'drop' }) => airportField === field ? <div className=\"absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_18px_45px_rgba(15,23,42,0.18)]\">{(['Istanbul Airport IST', 'Sabiha Gökçen Airport SAW'] as const).map((airport) => <button key={airport} type=\"button\" onMouseDown={(e) => e.preventDefault()} onClick={() => { field === 'pickup' ? setPickup(airport) : setDrop(airport); setAirportField(null); }} className=\"block w-full rounded-xl px-4 py-3 text-left text-sm font-black text-slate-800 transition hover:bg-slate-100\">{airport}</button>)}</div> : null;";

  if (content.includes('const AirportQuick = () =>')) {
    content = content.replace(/  const AirportQuick = \(\) => <div className="mt-2 flex flex-wrap gap-2">.*?<\/div>;/, airportDropdown);
    changed = true;
  } else if (!content.includes('const AirportDropdown =')) {
    const anchor = '  const RouteDetails = () =>';
    if (content.includes(anchor)) {
      replaceAll(anchor, `${airportDropdown}\n${anchor}`);
      changed = true;
    }
  }

  const oldLabels = '<label><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportQuick/></label><label><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/></label>';
  const newLabels = '<label className="relative"><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onFocus={() => setAirportField(\'pickup\')} onBlur={() => setTimeout(() => setAirportField(null), 140)} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportDropdown field="pickup"/></label><label className="relative"><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onFocus={() => setAirportField(\'drop\')} onBlur={() => setTimeout(() => setAirportField(null), 140)} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/><AirportDropdown field="drop"/></label>';

  if (content.includes(oldLabels)) {
    replaceAll(oldLabels, newLabels);
    changed = true;
  }

  const oldPickupOnly = '<label><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportQuick/></label>';
  const newPickupOnly = '<label className="relative"><span className={labelClass}><MapPin size={14}/>{c.pickup}</span><input value={pickup} onFocus={() => setAirportField(\'pickup\')} onBlur={() => setTimeout(() => setAirportField(null), 140)} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder={c.pickupPlaceholder}/><AirportDropdown field="pickup"/></label>';
  if (content.includes(oldPickupOnly)) {
    replaceAll(oldPickupOnly, newPickupOnly);
    changed = true;
  }

  const oldDropOnly = '<label><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/></label>';
  const newDropOnly = '<label className="relative"><span className={labelClass}><MapPin size={14}/>{c.drop}</span><input value={drop} onFocus={() => setAirportField(\'drop\')} onBlur={() => setTimeout(() => setAirportField(null), 140)} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder={c.dropPlaceholder}/><AirportDropdown field="drop"/></label>';
  if (content.includes(oldDropOnly)) {
    replaceAll(oldDropOnly, newDropOnly);
    changed = true;
  }

  return changed;
}

function moveAirportQuickChoicesToArrival() {
  return false;
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

// Real dezoom: object-contain shows the full home.driver.jpg instead of cropping it.
replaceAll('className="hidden object-cover md:block"', 'className="hidden object-contain object-center md:block"');
replaceAll('className="hidden object-cover object-center scale-[0.92] md:block"', 'className="hidden object-contain object-center md:block"');
replaceAll('className="object-cover" sizes="100vw"', 'className="object-contain object-center" sizes="100vw"');
replaceAll('className="object-cover object-center scale-[0.92]" sizes="100vw"', 'className="object-contain object-center" sizes="100vw"');
replaceAll('className="object-cover object-center scale-[0.92]"', 'className="object-contain object-center"');

const premiumPaymentUi = content.includes("type Currency = 'EUR' | 'USD' | 'GBP' | 'CHF'") && content.includes("type PaymentMode = 'online_full' | 'deposit_onboard'");

if (premiumPaymentUi) {
  const removedCurrency = removeFirstStepCurrencySelector();
  const disabledGoogle = disableGooglePlacesByDefault();
  const reorderedAirports = reorderAirportSuggestions();
  const movedAirports = moveAirportQuickChoicesToArrival();
  const dropdownAirports = convertAirportChoicesToInputDropdowns();
  fs.writeFileSync(file, content, 'utf8');
  console.log(`[transfer booking] premium payment UI detected; entry currency ${removedCurrency ? 'removed' : 'unchanged'}, Google Places ${disabledGoogle ? 'disabled by default' : 'unchanged'}, airport order ${reorderedAirports ? 'updated' : 'unchanged'}, legacy airport move ${movedAirports ? 'applied' : 'skipped'}, airport dropdowns ${dropdownAirports ? 'applied' : 'unchanged'}`);
  process.exit(0);
}

replaceAll('className="object-cover"', 'className="object-contain object-center"');

fs.writeFileSync(file, content, 'utf8');
console.log('[transfer booking] hero image uses object-contain and no crop');
