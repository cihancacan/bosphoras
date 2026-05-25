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
replaceAll('className="object-cover"', 'className="object-contain object-center"');

replaceAll(
  "type Quote = { source: string; estimatedMinutes: number; billedMinutes: number; distanceKm: number; vehiclePrice: number; tollPrice: number; total: number };",
  "type Quote = { source: string; estimatedMinutes: number; billedMinutes: number; distanceKm: number; vehiclePrice: number; tollPrice: number; total: number; roundTrip?: boolean; oneWayVehiclePrice?: number; oneWayTollPrice?: number };"
);

if (!content.includes('function addMinutesToDateTime')) {
  const helper = [
    'function addMinutesToDateTime(dateValue: string, timeValue: string, minutesToAdd: number) {',
    "  const base = new Date(dateValue + 'T' + timeValue + ':00');",
    '  if (Number.isNaN(base.getTime())) return { date: dateValue, time: timeValue };',
    '  base.setMinutes(base.getMinutes() + minutesToAdd);',
    '  const local = new Date(base.getTime() - base.getTimezoneOffset() * 60000);',
    "  return { date: local.toISOString().slice(0, 10), time: local.toISOString().slice(11, 16) };",
    '}',
    '',
    'function isReturnLessThanOneHourAfterPickup(dateValue: string, timeValue: string, returnDateValue: string, returnTimeValue: string) {',
    "  const outbound = new Date(dateValue + 'T' + timeValue + ':00').getTime();",
    "  const inbound = new Date(returnDateValue + 'T' + returnTimeValue + ':00').getTime();",
    '  if (!Number.isFinite(outbound) || !Number.isFinite(inbound)) return false;',
    '  return inbound < outbound + 60 * 60 * 1000;',
    '}',
    '',
    'function getTimeOptions(locale: TransferLocale) {'
  ].join('\n');
  replaceAll('function getTimeOptions(locale: TransferLocale) {', helper);
}

if (!content.includes('const tripModeLabels')) {
  const labels = [
    "const tripModeLabels: Record<TransferLocale, { oneWay: string; roundTrip: string; hourly: string; returnDate: string; returnTime: string; returnTrip: string }> = {",
    "  fr: { oneWay: 'Aller simple', roundTrip: 'Aller-retour', hourly: 'À l’heure', returnDate: 'Date retour', returnTime: 'Heure retour', returnTrip: 'Trajet retour' },",
    "  en: { oneWay: 'One way', roundTrip: 'Round trip', hourly: 'Hourly', returnDate: 'Return date', returnTime: 'Return time', returnTrip: 'Return trip' },",
    "  ru: { oneWay: 'В одну сторону', roundTrip: 'Туда-обратно', hourly: 'Почасово', returnDate: 'Дата возврата', returnTime: 'Время возврата', returnTrip: 'Обратный маршрут' },",
    "  ar: { oneWay: 'ذهاب فقط', roundTrip: 'ذهاب وعودة', hourly: 'بالساعة', returnDate: 'تاريخ العودة', returnTime: 'وقت العودة', returnTrip: 'رحلة العودة' },",
    "  zh: { oneWay: '单程', roundTrip: '往返', hourly: '按小时', returnDate: '返程日期', returnTime: '返程时间', returnTrip: '返程路线' },",
    "  de: { oneWay: 'Einfach', roundTrip: 'Hin und zurück', hourly: 'Stundenweise', returnDate: 'Rückdatum', returnTime: 'Rückzeit', returnTrip: 'Rückfahrt' },",
    "  es: { oneWay: 'Solo ida', roundTrip: 'Ida y vuelta', hourly: 'Por horas', returnDate: 'Fecha de regreso', returnTime: 'Hora de regreso', returnTrip: 'Trayecto de regreso' },",
    "  it: { oneWay: 'Solo andata', roundTrip: 'Andata e ritorno', hourly: 'A ore', returnDate: 'Data ritorno', returnTime: 'Ora ritorno', returnTrip: 'Tragitto di ritorno' },",
    "  pt: { oneWay: 'Só ida', roundTrip: 'Ida e volta', hourly: 'Por hora', returnDate: 'Data de regresso', returnTime: 'Hora de regresso', returnTrip: 'Trajeto de regresso' },",
    '};',
    '',
    "const vehicleMeta: Record<TransferLocale, Record<VehicleId, { name: string; label: string; pax: string; bags: string }>> = {"
  ].join('\n');
  replaceAll("const vehicleMeta: Record<TransferLocale, Record<VehicleId, { name: string; label: string; pax: string; bags: string }>> = {", labels);
}

replaceAll(
  "  const [mode, setMode] = useState<Mode>('transfer');\n  const [pickup, setPickup] = useState('');",
  "  const [mode, setMode] = useState<Mode>('transfer');\n  const [roundTrip, setRoundTrip] = useState(false);\n  const modeRef = useRef<Mode>('transfer');\n  const roundTripRef = useRef(false);\n  const isRoundTrip = mode === 'transfer' && (roundTrip || roundTripRef.current);\n  const [pickup, setPickup] = useState('');"
);
replaceAll(
  "  const [mode, setMode] = useState<Mode>('transfer');\n  const [roundTrip, setRoundTrip] = useState(false);\n  const [pickup, setPickup] = useState('');",
  "  const [mode, setMode] = useState<Mode>('transfer');\n  const [roundTrip, setRoundTrip] = useState(false);\n  const modeRef = useRef<Mode>('transfer');\n  const roundTripRef = useRef(false);\n  const isRoundTrip = mode === 'transfer' && (roundTrip || roundTripRef.current);\n  const [pickup, setPickup] = useState('');"
);
replaceAll(
  "const isRoundTrip = mode === 'transfer' && roundTrip;",
  "const isRoundTrip = mode === 'transfer' && (roundTrip || roundTripRef.current);"
);

replaceAll(
  "  const [date, setDate] = useState(init.date);\n  const [time, setTime] = useState(init.time);",
  "  const [date, setDate] = useState(init.date);\n  const [time, setTime] = useState(init.time);\n  const [returnDate, setReturnDate] = useState(init.date);\n  const [returnTime, setReturnTime] = useState(init.time);"
);

replaceAll(
  "  useEffect(() => { stepRef.current = step; }, [step]);",
  "  useEffect(() => { stepRef.current = step; }, [step]);\n  useEffect(() => { modeRef.current = mode; roundTripRef.current = roundTrip; }, [mode, roundTrip]);\n  useEffect(() => {\n    if (!roundTrip) return;\n    if (!returnDate || isReturnLessThanOneHourAfterPickup(date, time, returnDate, returnTime)) {\n      const nextReturn = addMinutesToDateTime(date, time, 60);\n      setReturnDate(nextReturn.date);\n      setReturnTime(nextReturn.time);\n    }\n  }, [roundTrip, date, time, returnDate, returnTime]);"
);

replaceAll(
  "  const vehiclePrice = selectedQuote?.vehiclePrice ?? fallbackPrice(selectedVehicle);\n  const tollPrice = selectedQuote?.tollPrice ?? 0;",
  "  const selectedOneWayVehiclePrice = selectedQuote?.oneWayVehiclePrice ?? (selectedQuote?.roundTrip ? selectedQuote.vehiclePrice / 2 : selectedQuote?.vehiclePrice) ?? fallbackPrice(selectedVehicle);\n  const selectedOneWayTollPrice = selectedQuote?.oneWayTollPrice ?? (selectedQuote?.roundTrip ? selectedQuote.tollPrice / 2 : selectedQuote?.tollPrice) ?? 0;\n  const vehiclePrice = isRoundTrip ? Math.round(selectedOneWayVehiclePrice * 2) : Math.round(selectedOneWayVehiclePrice);\n  const tollPrice = isRoundTrip ? Math.round(selectedOneWayTollPrice * 2) : Math.round(selectedOneWayTollPrice);"
);
replaceAll(
  "  const vehiclePrice = selectedQuote?.vehiclePrice ?? (isRoundTrip ? Math.round(fallbackPrice(selectedVehicle) * 2) : fallbackPrice(selectedVehicle));\n  const tollPrice = selectedQuote?.tollPrice ?? 0;",
  "  const selectedOneWayVehiclePrice = selectedQuote?.oneWayVehiclePrice ?? (selectedQuote?.roundTrip ? selectedQuote.vehiclePrice / 2 : selectedQuote?.vehiclePrice) ?? fallbackPrice(selectedVehicle);\n  const selectedOneWayTollPrice = selectedQuote?.oneWayTollPrice ?? (selectedQuote?.roundTrip ? selectedQuote.tollPrice / 2 : selectedQuote?.tollPrice) ?? 0;\n  const vehiclePrice = isRoundTrip ? Math.round(selectedOneWayVehiclePrice * 2) : Math.round(selectedOneWayVehiclePrice);\n  const tollPrice = isRoundTrip ? Math.round(selectedOneWayTollPrice * 2) : Math.round(selectedOneWayTollPrice);"
);

replaceAll(
  "body: JSON.stringify({ pickup, dropoff: drop, mode, vehicleId: car.id, hours })",
  "body: JSON.stringify({ pickup, dropoff: drop, mode: modeRef.current, vehicleId: car.id, hours, roundTrip: modeRef.current === 'transfer' && roundTripRef.current })"
);
replaceAll(
  "body: JSON.stringify({ pickup, dropoff: drop, mode, vehicleId: car.id, hours, roundTrip: mode === 'transfer' && roundTrip })",
  "body: JSON.stringify({ pickup, dropoff: drop, mode: modeRef.current, vehicleId: car.id, hours, roundTrip: modeRef.current === 'transfer' && roundTripRef.current })"
);

replaceAll(
  "  const findCars = () => { if (!pickup.trim() || !drop.trim()) { alert(c.missingRoute); return; } setVehicleId(null); setQuotes({}); setLoading(true); setTimeout(async () => { setLoading(false); setStep(2); await loadQuotes(); }, 5000); };",
  "  const findCars = () => { if (!pickup.trim() || !drop.trim()) { alert(c.missingRoute); return; } setVehicleId(null); setQuotes({}); setLoading(true); setTimeout(async () => { await loadQuotes(); setLoading(false); setStep(2); }, 700); };"
);
replaceAll(
  "  const chooseVehicle = (id: VehicleId) => { setVehicleId(id); setStep(3); };",
  "  const chooseVehicle = (id: VehicleId) => { if (quoteLoading) return; setVehicleId(id); setStep(3); };"
);

const oldTabs = "<div className=\"mb-4 grid grid-cols-2 rounded-2xl bg-white/45 p-1 backdrop-blur-xl md:bg-gray-100\"><button onClick={() => setMode('transfer')} className={`rounded-xl py-3 text-xs font-black uppercase tracking-[0.14em] transition ${mode === 'transfer' ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>{c.transfer}</button><button onClick={() => setMode('hourly')} className={`rounded-xl py-3 text-xs font-black uppercase tracking-[0.14em] transition ${mode === 'hourly' ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>{c.hourly}</button></div>";
const newTabs = "<div className=\"mb-4 grid grid-cols-3 rounded-2xl bg-white/45 p-1 backdrop-blur-xl md:bg-gray-100\"><button onClick={() => { modeRef.current = 'transfer'; roundTripRef.current = false; setMode('transfer'); setRoundTrip(false); setQuotes({}); }} className={`rounded-xl py-3 text-[10px] font-black uppercase tracking-[0.08em] transition md:text-xs md:tracking-[0.14em] ${mode === 'transfer' && !(roundTrip || roundTripRef.current) ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>{tripModeLabels[l].oneWay}</button><button onClick={() => { modeRef.current = 'transfer'; roundTripRef.current = true; setMode('transfer'); setRoundTrip(true); setQuotes({}); }} className={`rounded-xl py-3 text-[10px] font-black uppercase tracking-[0.08em] transition md:text-xs md:tracking-[0.14em] ${mode === 'transfer' && (roundTrip || roundTripRef.current) ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>{tripModeLabels[l].roundTrip}</button><button onClick={() => { modeRef.current = 'hourly'; roundTripRef.current = false; setMode('hourly'); setRoundTrip(false); setQuotes({}); }} className={`rounded-xl py-3 text-[10px] font-black uppercase tracking-[0.08em] transition md:text-xs md:tracking-[0.14em] ${mode === 'hourly' ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>{tripModeLabels[l].hourly}</button></div>";
replaceAll(oldTabs, newTabs);

const flightPaxBlock = "          <div className=\"grid grid-cols-[minmax(0,1.35fr)_minmax(70px,0.65fr)] gap-2 md:contents\"><label><span className={labelClass}><Plane size={13}/>{c.flight}</span><input value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} className={inputClass} placeholder={c.flightPlaceholder} /></label><label><span className={labelClass}><Users size={13}/>{c.pax}</span><input type=\"number\" min={1} max={12} value={pax} onChange={(e) => setPax(Number(e.target.value))} className={`${inputClass} text-center`} /></label></div>";
const returnAndFlightBlock = "          {isRoundTrip && <div className=\"grid grid-cols-2 gap-2 md:contents\"><label><span className={labelClass}><CalendarDays size={13}/>{tripModeLabels[l].returnDate}</span><input type=\"date\" min={date} value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className={inputClass} /></label><label><span className={labelClass}><Clock size={13}/>{tripModeLabels[l].returnTime}</span><select value={returnTime} onChange={(e) => setReturnTime(e.target.value)} className={inputClass}>{timeOptions.filter((item) => returnDate !== date || !isReturnLessThanOneHourAfterPickup(date, time, returnDate, item.value)).map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label></div>}\n" + flightPaxBlock;
if (!content.includes('tripModeLabels[l].returnDate')) replaceAll(flightPaxBlock, returnAndFlightBlock);

replaceAll(
  "{vehicles.map((car) => { const quote = quotes[car.id]; const price = quote?.total ?? fallbackPrice(car); return <button key={car.id}",
  "{vehicles.map((car) => { const quote = quotes[car.id]; const oneWayVehiclePrice = quote?.oneWayVehiclePrice ?? (quote?.roundTrip ? quote.vehiclePrice / 2 : quote?.vehiclePrice) ?? fallbackPrice(car); const oneWayTollPrice = quote?.oneWayTollPrice ?? (quote?.roundTrip ? quote.tollPrice / 2 : quote?.tollPrice) ?? 0; const price = isRoundTrip ? Math.round((oneWayVehiclePrice + oneWayTollPrice) * 2) : Math.round(oneWayVehiclePrice + oneWayTollPrice); return <button key={car.id}"
);
replaceAll(
  "{vehicles.map((car) => { const quote = quotes[car.id]; const price = quote?.total ?? (isRoundTrip ? Math.round(fallbackPrice(car) * 2) : fallbackPrice(car)); return <button key={car.id}",
  "{vehicles.map((car) => { const quote = quotes[car.id]; const oneWayVehiclePrice = quote?.oneWayVehiclePrice ?? (quote?.roundTrip ? quote.vehiclePrice / 2 : quote?.vehiclePrice) ?? fallbackPrice(car); const oneWayTollPrice = quote?.oneWayTollPrice ?? (quote?.roundTrip ? quote.tollPrice / 2 : quote?.tollPrice) ?? 0; const price = isRoundTrip ? Math.round((oneWayVehiclePrice + oneWayTollPrice) * 2) : Math.round(oneWayVehiclePrice + oneWayTollPrice); return <button key={car.id}"
);

replaceAll(
  "<p className=\"mt-2 text-sm font-semibold text-gray-500\">{quoteLoading ? c.calculating : `${routeMinutes} min ${c.estimated} · ${routeBilled} min ${c.billed} · ${routeDistance} km`}</p><RouteDetails />",
  ""
);
replaceAll(
  "<p className=\"mt-2 text-sm font-semibold text-gray-500\">{quoteLoading ? c.calculating : `${routeMinutes} min ${c.tripMin} · ${routeDistance} km`}</p><RouteDetails />",
  ""
);

replaceAll(
  "<span>{quote?.distanceKm ?? routeDistance} km</span><span>{quote?.tollPrice ? `${c.toll} ${eur(quote.tollPrice)} ${c.included}` : c.accordingRoute}</span>",
  "<span>{quote?.estimatedMinutes ?? routeMinutes} {c.tripMin}</span><span>{quote?.distanceKm ?? routeDistance} km</span><span>{c.toll} {c.included}</span>"
);

replaceAll("<p><b className=\"text-white\">{c.billed} :</b> {routeBilled} min</p>", "");
replaceAll(
  "<p><b className=\"text-white\">{c.toll} :</b> {tollPrice ? `${eur(tollPrice)} ${c.included}` : c.notEstimated}</p>",
  "<p><b className=\"text-white\">{c.toll} :</b> {c.included}</p>"
);
replaceAll(
  "<p><b className=\"text-white\">{c.date} :</b> {formattedDate} · {timeLabel}</p>",
  "<p><b className=\"text-white\">{c.date} :</b> {formattedDate} · {timeLabel}</p>{isRoundTrip && <p><b className=\"text-white\">{tripModeLabels[l].returnTrip} :</b> {drop} → {pickup}</p>}"
);

fs.writeFileSync(file, content, 'utf8');
console.log('[transfer booking] hero image uses object-contain and no crop');
