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
  fs.writeFileSync(file, content, 'utf8');
  console.log(`[transfer booking] premium payment UI detected; entry currency ${removedCurrency ? 'removed' : 'unchanged'}, Google Places ${disabledGoogle ? 'disabled by default' : 'unchanged'}, airport order ${reorderedAirports ? 'updated' : 'unchanged'}`);
  process.exit(0);
}

replaceAll('className="object-cover"', 'className="object-contain object-center"');

fs.writeFileSync(file, content, 'utf8');
console.log('[transfer booking] hero image uses object-contain and no crop');
