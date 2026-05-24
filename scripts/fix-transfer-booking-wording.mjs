import fs from 'node:fs';

const file = 'components/TransferBookingClient.tsx';

if (!fs.existsSync(file)) {
  console.log('[transfer patch] file not found, skipped');
  process.exit(0);
}

let content = fs.readFileSync(file, 'utf8');

const replacements = [
  ['Book your private chauffeur in Istanbul', 'Book your private driver in Istanbul'],
  ['Buchen Sie Ihren privaten Chauffeur in Istanbul', 'Buchen Sie Ihren privaten Fahrer in Istanbul'],
  ['Math.round(oneWayPrice * 2 * 0.85)', 'Math.round(oneWayPrice * 2)'],
  ['const subtotalBeforeDiscount = effectiveVehiclePrice + effectiveTollPrice + extrasTotal;\n  const roundTripDiscount = isRoundTrip ? Math.round(subtotalBeforeDiscount * 0.15) : 0;\n  const total = subtotalBeforeDiscount - roundTripDiscount + tipValue;', 'const total = effectiveVehiclePrice + effectiveTollPrice + extrasTotal + tipValue;'],
  ['{isRoundTrip && <div className="mb-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-black text-emerald-200">{tripModeLabels[l].roundTripDiscount} : -{eur(roundTripDiscount)}</div>}', ''],
  ['          {isRoundTrip && <div className="md:col-span-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-emerald-800">{tripModeLabels[l].roundTripOffer}</div>}\n', ''],
  ['Offre aller-retour : -15% sur le global', ''], ['Aller-retour : retour ajouté au total', ''], ['Round trip offer: 15% off the total', ''], ['Round trip: return added to total', ''],
  ['Предложение туда-обратно: -15% на общий итог', ''], ['Туда-обратно: обратный путь добавлен к итогу', ''], ['عرض الذهاب والعودة: خصم 15% على الإجمالي', ''], ['الذهاب والعودة: يتم إضافة العودة إلى الإجمالي', ''],
  ['往返优惠：总价减15%', ''], ['往返：返程已加入总价', ''], ['Hin und zurück: 15% Rabatt auf den Gesamtpreis', ''], ['Hin und zurück: Rückfahrt im Gesamtpreis enthalten', ''],
  ['Oferta ida y vuelta: -15% sobre el total', ''], ['Ida y vuelta: regreso añadido al total', ''], ['Offerta andata e ritorno: -15% sul totale', ''], ['Andata e ritorno: ritorno aggiunto al totale', ''],
  ['Oferta ida e volta: -15% no total', ''], ['Ida e volta: regresso adicionado ao total', ''], ['Remise aller-retour -15%', 'Aller-retour'], ['Round trip discount -15%', 'Round trip'],
  ['Скидка туда-обратно -15%', 'Туда-обратно'], ['خصم الذهاب والعودة -15%', 'ذهاب وعودة'], ['往返优惠 -15%', '往返'], ['Hin-und-zurück Rabatt -15%', 'Hin und zurück'],
  ['Descuento ida y vuelta -15%', 'Ida y vuelta'], ['Sconto andata e ritorno -15%', 'Andata e ritorno'], ['Desconto ida e volta -15%', 'Ida e volta'],
];

for (const [from, to] of replacements) content = content.split(from).join(to);

if (!content.includes('function addMinutesToDateTime')) {
  content = content.replace(
    "function getTimeOptions(locale: TransferLocale) {",
    `function addMinutesToDateTime(dateValue: string, timeValue: string, minutesToAdd: number) {
  const base = new Date(`${dateValue}T${timeValue}:00`);
  if (Number.isNaN(base.getTime())) return { date: dateValue, time: timeValue };
  base.setMinutes(base.getMinutes() + minutesToAdd);
  const local = new Date(base.getTime() - base.getTimezoneOffset() * 60000);
  return { date: local.toISOString().slice(0, 10), time: local.toISOString().slice(11, 16) };
}

function isReturnLessThanOneHourAfterPickup(dateValue: string, timeValue: string, returnDateValue: string, returnTimeValue: string) {
  const outbound = new Date(`${dateValue}T${timeValue}:00`).getTime();
  const inbound = new Date(`${returnDateValue}T${returnTimeValue}:00`).getTime();
  if (!Number.isFinite(outbound) || !Number.isFinite(inbound)) return false;
  return inbound < outbound + 60 * 60 * 1000;
}

function getTimeOptions(locale: TransferLocale) {`
  );
}

if (!content.includes('const tripModeLabels')) {
  content = content.replace(
    "const vehicleMeta: Record<TransferLocale, Record<VehicleId, { name: string; label: string; pax: string; bags: string }>> = {",
    `const tripModeLabels: Record<TransferLocale, { oneWay: string; roundTrip: string; hourly: string; returnDate: string; returnTime: string; returnTrip: string; roundTripDiscount: string; roundTripOffer: string }> = {
  fr: { oneWay: 'Aller simple', roundTrip: 'Aller-retour', hourly: 'À l’heure', returnDate: 'Date retour', returnTime: 'Heure retour', returnTrip: 'Trajet retour', roundTripDiscount: 'Aller-retour', roundTripOffer: '' },
  en: { oneWay: 'One way', roundTrip: 'Round trip', hourly: 'Hourly', returnDate: 'Return date', returnTime: 'Return time', returnTrip: 'Return trip', roundTripDiscount: 'Round trip', roundTripOffer: '' },
  ru: { oneWay: 'В одну сторону', roundTrip: 'Туда-обратно', hourly: 'Почасово', returnDate: 'Дата возврата', returnTime: 'Время возврата', returnTrip: 'Обратный маршрут', roundTripDiscount: 'Туда-обратно', roundTripOffer: '' },
  ar: { oneWay: 'ذهاب فقط', roundTrip: 'ذهاب وعودة', hourly: 'بالساعة', returnDate: 'تاريخ العودة', returnTime: 'وقت العودة', returnTrip: 'رحلة العودة', roundTripDiscount: 'ذهاب وعودة', roundTripOffer: '' },
  zh: { oneWay: '单程', roundTrip: '往返', hourly: '按小时', returnDate: '返程日期', returnTime: '返程时间', returnTrip: '返程路线', roundTripDiscount: '往返', roundTripOffer: '' },
  de: { oneWay: 'Einfach', roundTrip: 'Hin und zurück', hourly: 'Stundenweise', returnDate: 'Rückdatum', returnTime: 'Rückzeit', returnTrip: 'Rückfahrt', roundTripDiscount: 'Hin und zurück', roundTripOffer: '' },
  es: { oneWay: 'Solo ida', roundTrip: 'Ida y vuelta', hourly: 'Por horas', returnDate: 'Fecha de regreso', returnTime: 'Hora de regreso', returnTrip: 'Trayecto de regreso', roundTripDiscount: 'Ida y vuelta', roundTripOffer: '' },
  it: { oneWay: 'Solo andata', roundTrip: 'Andata e ritorno', hourly: 'A ore', returnDate: 'Data ritorno', returnTime: 'Ora ritorno', returnTrip: 'Tragitto di ritorno', roundTripDiscount: 'Andata e ritorno', roundTripOffer: '' },
  pt: { oneWay: 'Só ida', roundTrip: 'Ida e volta', hourly: 'Por hora', returnDate: 'Data de regresso', returnTime: 'Hora de regresso', returnTrip: 'Trajeto de regresso', roundTripDiscount: 'Ida e volta', roundTripOffer: '' },
};

const vehicleMeta: Record<TransferLocale, Record<VehicleId, { name: string; label: string; pax: string; bags: string }>> = {`
  );
}

content = content.replace("  const [mode, setMode] = useState<Mode>('transfer');\n  const [pickup, setPickup] = useState('');", "  const [mode, setMode] = useState<Mode>('transfer');\n  const [roundTrip, setRoundTrip] = useState(false);\n  const [pickup, setPickup] = useState('');");
content = content.replace("  const [date, setDate] = useState(init.date);\n  const [time, setTime] = useState(init.time);", "  const [date, setDate] = useState(init.date);\n  const [time, setTime] = useState(init.time);\n  const [returnDate, setReturnDate] = useState(init.date);\n  const [returnTime, setReturnTime] = useState(init.time);");

content = content.replace("  useEffect(() => { stepRef.current = step; }, [step]);", "  useEffect(() => { stepRef.current = step; }, [step]);\n  useEffect(() => {\n    if (!roundTrip) return;\n    if (!returnDate || isReturnLessThanOneHourAfterPickup(date, time, returnDate, returnTime)) {\n      const nextReturn = addMinutesToDateTime(date, time, 60);\n      setReturnDate(nextReturn.date);\n      setReturnTime(nextReturn.time);\n    }\n  }, [roundTrip, date, time, returnDate, returnTime]);");

content = content.replace("  const vehiclePrice = selectedQuote?.vehiclePrice ?? fallbackPrice(selectedVehicle);\n  const tollPrice = selectedQuote?.tollPrice ?? 0;", "  const vehiclePrice = selectedQuote?.vehiclePrice ?? fallbackPrice(selectedVehicle);\n  const tollPrice = selectedQuote?.tollPrice ?? 0;\n  const isRoundTrip = mode === 'transfer' && roundTrip;\n  const effectiveVehiclePrice = isRoundTrip ? vehiclePrice * 2 : vehiclePrice;\n  const effectiveTollPrice = isRoundTrip ? tollPrice * 2 : tollPrice;");
content = content.replace("  const total = vehiclePrice + tollPrice + (child ? 30 : 0) + (flowers ? 150 : 0) + (roses ? 400 : 0) + tipValue;", "  const extrasTotal = (child ? 30 : 0) + (flowers ? 150 : 0) + (roses ? 400 : 0);\n  const total = effectiveVehiclePrice + effectiveTollPrice + extrasTotal + tipValue;");

content = content.replace("  const timeLabel = timeOptions.find((x) => x.value === time)?.label || time;\n  const formattedDate = date ? new Intl.DateTimeFormat(l === 'en' ? 'en-US' : l === 'ru' ? 'ru-RU' : l === 'ar' ? 'ar' : l === 'de' ? 'de-DE' : l === 'es' ? 'es-ES' : l === 'it' ? 'it-IT' : l === 'pt' ? 'pt-PT' : l === 'zh' ? 'zh-CN' : 'fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${date}T12:00:00`)) : '';", "  const timeLabel = timeOptions.find((x) => x.value === time)?.label || time;\n  const returnTimeLabel = timeOptions.find((x) => x.value === returnTime)?.label || returnTime;\n  const formatterLocale = l === 'en' ? 'en-US' : l === 'ru' ? 'ru-RU' : l === 'ar' ? 'ar' : l === 'de' ? 'de-DE' : l === 'es' ? 'es-ES' : l === 'it' ? 'it-IT' : l === 'pt' ? 'pt-PT' : l === 'zh' ? 'zh-CN' : 'fr-FR';\n  const formattedDate = date ? new Intl.DateTimeFormat(formatterLocale, { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${date}T12:00:00`)) : '';\n  const formattedReturnDate = returnDate ? new Intl.DateTimeFormat(formatterLocale, { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${returnDate}T12:00:00`)) : '';");
content = content.replace("  const findCars = () => { if (!pickup.trim() || !drop.trim()) { alert(c.missingRoute); return; } setVehicleId(null); setQuotes({}); setLoading(true); setTimeout(async () => { setLoading(false); setStep(2); await loadQuotes(); }, 5000); };", "  const findCars = () => { if (!pickup.trim() || !drop.trim()) { alert(c.missingRoute); return; } setVehicleId(null); setQuotes({}); setLoading(true); setTimeout(async () => { await loadQuotes(); setLoading(false); setStep(2); }, 700); };");
content = content.replace("  const chooseVehicle = (id: VehicleId) => { setVehicleId(id); setStep(3); };", "  const chooseVehicle = (id: VehicleId) => { if (quoteLoading) return; setVehicleId(id); setStep(3); };");

const oldTabs = "<div className=\"mb-4 grid grid-cols-2 rounded-2xl bg-white/45 p-1 backdrop-blur-xl md:bg-gray-100\"><button onClick={() => setMode('transfer')} className={`rounded-xl py-3 text-xs font-black uppercase tracking-[0.14em] transition ${mode === 'transfer' ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>{c.transfer}</button><button onClick={() => setMode('hourly')} className={`rounded-xl py-3 text-xs font-black uppercase tracking-[0.14em] transition ${mode === 'hourly' ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>{c.hourly}</button></div>";
const newTabs = "<div className=\"mb-4 grid grid-cols-3 rounded-2xl bg-white/45 p-1 backdrop-blur-xl md:bg-gray-100\"><button onClick={() => { setMode('transfer'); setRoundTrip(false); }} className={`rounded-xl py-3 text-[10px] font-black uppercase tracking-[0.08em] transition md:text-xs md:tracking-[0.14em] ${mode === 'transfer' && !roundTrip ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>{tripModeLabels[l].oneWay}</button><button onClick={() => { setMode('transfer'); setRoundTrip(true); }} className={`rounded-xl py-3 text-[10px] font-black uppercase tracking-[0.08em] transition md:text-xs md:tracking-[0.14em] ${mode === 'transfer' && roundTrip ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>{tripModeLabels[l].roundTrip}</button><button onClick={() => { setMode('hourly'); setRoundTrip(false); }} className={`rounded-xl py-3 text-[10px] font-black uppercase tracking-[0.08em] transition md:text-xs md:tracking-[0.14em] ${mode === 'hourly' ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>{tripModeLabels[l].hourly}</button></div>";
content = content.split(oldTabs).join(newTabs);

const flightPaxBlock = "          <div className=\"grid grid-cols-[minmax(0,1.35fr)_minmax(70px,0.65fr)] gap-2 md:contents\"><label><span className={labelClass}><Plane size={13}/>{c.flight}</span><input value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} className={inputClass} placeholder={c.flightPlaceholder} /></label><label><span className={labelClass}><Users size={13}/>{c.pax}</span><input type=\"number\" min={1} max={12} value={pax} onChange={(e) => setPax(Number(e.target.value))} className={`${inputClass} text-center`} /></label></div>";
const returnAndFlightBlock = "          {isRoundTrip && <div className=\"grid grid-cols-2 gap-2 md:contents\"><label><span className={labelClass}><CalendarDays size={13}/>{tripModeLabels[l].returnDate}</span><input type=\"date\" min={date} value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className={inputClass} /></label><label><span className={labelClass}><Clock size={13}/>{tripModeLabels[l].returnTime}</span><select value={returnTime} onChange={(e) => setReturnTime(e.target.value)} className={inputClass}>{timeOptions.filter((item) => returnDate !== date || !isReturnLessThanOneHourAfterPickup(date, time, returnDate, item.value)).map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label></div>}\n" + flightPaxBlock;
content = content.split(flightPaxBlock).join(returnAndFlightBlock);
content = content.replace("{vehicles.map((car) => { const quote = quotes[car.id]; const price = quote?.total ?? fallbackPrice(car); return <button key={car.id}", "{vehicles.map((car) => { const quote = quotes[car.id]; const oneWayPrice = quote?.total ?? fallbackPrice(car); const price = isRoundTrip ? Math.round(oneWayPrice * 2) : oneWayPrice; return <button key={car.id}");
content = content.replace("<p><b className=\"text-white\">{c.date} :</b> {formattedDate} · {timeLabel}</p>", "<p><b className=\"text-white\">{c.date} :</b> {formattedDate} · {timeLabel}</p>{isRoundTrip && <p><b className=\"text-white\">{tripModeLabels[l].returnTrip} :</b> {drop} → {pickup}</p>}{isRoundTrip && <p><b className=\"text-white\">{tripModeLabels[l].returnDate} :</b> {formattedReturnDate} · {returnTimeLabel}</p>}");

fs.writeFileSync(file, content, 'utf8');
console.log('[transfer booking] return time minimum one hour after pickup patched');
