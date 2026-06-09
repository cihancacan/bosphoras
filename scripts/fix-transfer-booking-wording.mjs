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
  const to = "const airportSuggestions = ['Sabiha Gökçen Airport SAW', 'Istanbul Airport IST'];";
  if (!content.includes(from)) return false;
  replaceAll(from, to);
  return true;
}

function moveAirportQuickChoicesToArrival() {
  let changed = false;

  const pickupDropdown = /\{showAirportSuggestions && <div className="absolute left-0 right-0 top-\[calc\(100%\+6px\)\] z-40 rounded-2xl border border-white\/70 bg-white\/95 p-2 shadow-2xl backdrop-blur-xl">\{airportSuggestions\.map\(\(airport\) => <button type="button" key=\{airport\} onMouseDown=\{\(e\) => e\.preventDefault\(\)\} onClick=\{\(\) => \{ setPickup\(airport\); setShowAirportSuggestions\(false\); \}\} className="block w-full rounded-xl px-4 py-3 text-left text-sm font-black text-gray-900 hover:bg-gray-100">\{airport\}<\/button>\)\}<\/div>\}/;
  if (pickupDropdown.test(content)) {
    content = content.replace(pickupDropdown, '');
    changed = true;
  }

  const pickupFocus = 'ref={pickupRef} value={pickup} onFocus={() => setShowAirportSuggestions(true)} onChange={(e) => setPickup(e.target.value)}';
  const pickupNormal = 'ref={pickupRef} value={pickup} onFocus={() => setShowAirportSuggestions(false)} onChange={(e) => { setPickup(e.target.value); setShowAirportSuggestions(false); }}';
  if (content.includes(pickupFocus)) {
    replaceAll(pickupFocus, pickupNormal);
    changed = true;
  }

  const dropLabel = '</label><label><span className={labelClass}><MapPin size={14}/>{c.drop}</span>';
  if (content.includes(dropLabel)) {
    replaceAll(dropLabel, '</label><label className="relative"><span className={labelClass}><MapPin size={14}/>{c.drop}</span>');
    changed = true;
  }

  const dropInput = '<input ref={dropRef} value={drop} onFocus={() => setShowAirportSuggestions(false)} onChange={(e) => setDrop(e.target.value)} className={`${inputClass} transfer-modern-address-input`} placeholder={c.dropPlaceholder}/>';
  const dropWithChoices = '<input ref={dropRef} value={drop} onFocus={() => setShowAirportSuggestions(true)} onChange={(e) => setDrop(e.target.value)} className={`${inputClass} transfer-modern-address-input`} placeholder={c.dropPlaceholder}/>{showAirportSuggestions && <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-40 rounded-2xl border border-white/70 bg-white/95 p-2 shadow-2xl backdrop-blur-xl">{airportSuggestions.map((airport) => <button type="button" key={airport} onMouseDown={(e) => e.preventDefault()} onClick={() => { setDrop(airport); setShowAirportSuggestions(false); }} className="block w-full rounded-xl px-4 py-3 text-left text-sm font-black text-gray-900 hover:bg-gray-100">{airport}</button>)}</div>}';
  if (content.includes(dropInput) && !content.includes('setDrop(airport); setShowAirportSuggestions(false);')) {
    replaceAll(dropInput, dropWithChoices);
    changed = true;
  }

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
  fs.writeFileSync(file, content, 'utf8');
  console.log(`[transfer booking] premium payment UI detected; entry currency ${removedCurrency ? 'removed' : 'unchanged'}, Google Places ${disabledGoogle ? 'disabled by default' : 'unchanged'}, airport order ${reorderedAirports ? 'updated' : 'unchanged'}, airport choices ${movedAirports ? 'moved to arrival' : 'unchanged'}`);
  process.exit(0);
}

replaceAll('className="object-cover"', 'className="object-contain object-center"');

fs.writeFileSync(file, content, 'utf8');
console.log('[transfer booking] hero image uses object-contain and no crop');
