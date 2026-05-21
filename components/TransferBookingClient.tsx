'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Baby, CalendarDays, Check, Clock, CreditCard, Flower2, Luggage, MapPin, Plane, Timer, Users } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

type Mode = 'transfer' | 'hourly';
type Step = 1 | 2 | 3;
type VehicleId = 'e' | 's' | 'viano' | 'sprinter';

const vehicles = [
  { id: 'e' as VehicleId, name: 'Mercedes Classe E ou équivalent', label: 'Business Sedan', img: '/images/mercedesE.avif', rate: 250, pax: '3 passagers', bags: '2 bagages' },
  { id: 's' as VehicleId, name: 'Mercedes Classe S ou équivalent', label: 'Luxury Sedan', img: '/images/mercedesS.avif', rate: 400, pax: '3 passagers', bags: '2 bagages' },
  { id: 'viano' as VehicleId, name: 'Mercedes Viano VIP', label: 'VIP Van', img: '/images/mercdecesVianovip.avif', rate: 150, pax: '6 à 7 passagers', bags: 'Bagages selon configuration' },
  { id: 'sprinter' as VehicleId, name: 'Mercedes Sprinter VIP', label: 'VIP Sprinter', img: '/images/mercedessprintervip.avif', rate: 200, pax: '12 passagers', bags: 'Grand volume bagages' },
];

const hints = ['Istanbul Airport IST', 'Sabiha Gökçen SAW', 'Four Seasons Bosphorus', 'Mandarin Oriental Bosphorus', 'Galataport Istanbul', 'Nişantaşı', 'Bebek', 'Levent', 'Maslak', 'Sultanahmet', 'Taksim'];

function initialDateTime() {
  const d = new Date();
  d.setHours(d.getHours() + 2);
  const rounded = Math.ceil(d.getMinutes() / 10) * 10;
  if (rounded === 60) { d.setHours(d.getHours() + 1); d.setMinutes(0, 0, 0); } else { d.setMinutes(rounded, 0, 0); }
  const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
  return { date: local.toISOString().slice(0, 10), time: local.toISOString().slice(11, 16) };
}

function getTimeOptions(locale: Locale) {
  const options: Array<{ value: string; label: string }> = [];
  for (let hour = 0; hour < 24; hour += 1) for (let minute = 0; minute < 60; minute += 10) {
    const value = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    if (locale === 'en') {
      const suffix = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      options.push({ value, label: `${displayHour}:${String(minute).padStart(2, '0')} ${suffix}` });
    } else options.push({ value, label: value });
  }
  return options;
}

function minutes(from: string, to: string) {
  const r = `${from} ${to}`.toLowerCase();
  const ist = r.includes('istanbul airport') || r.includes(' ist');
  const saw = r.includes('sabiha') || r.includes('saw');
  if (ist && saw) return 120; if (saw) return 90; if (ist) return 75; return 60;
}
function billed(min: number) { return min <= 60 ? 60 : Math.ceil(min / 30) * 30; }
function hourly(rate: number, h: number) { return Math.min(h, 2) * rate + Math.max(h - 2, 0) * rate * 0.8; }
function eur(n: number) { return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n); }

export function TransferBookingClient({ locale = 'fr' }: { locale?: Locale }) {
  const init = useMemo(() => initialDateTime(), []);
  const timeOptions = useMemo(() => getTimeOptions(locale), [locale]);
  const pickupRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<Mode>('transfer');
  const [pickup, setPickup] = useState('Istanbul Airport IST');
  const [drop, setDrop] = useState('Hotel / Residence');
  const [date, setDate] = useState(init.date);
  const [time, setTime] = useState(init.time);
  const timeLabel = timeOptions.find((item) => item.value === time)?.label || time;
  const [flightNumber, setFlightNumber] = useState('');
  const [pax, setPax] = useState(2);
  const [hours, setHours] = useState(2);
  const [vehicleId, setVehicleId] = useState<VehicleId>('e');
  const [forOther, setForOther] = useState(false);
  const [child, setChild] = useState(false);
  const [flowers, setFlowers] = useState(false);
  const [roses, setRoses] = useState(false);
  const [tip, setTip] = useState('');

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const connect = () => {
      const google = (window as any).google;
      if (!google?.maps?.places || !pickupRef.current || !dropRef.current) return;
      const opts = { componentRestrictions: { country: 'tr' }, fields: ['formatted_address', 'name'] };
      const a = new google.maps.places.Autocomplete(pickupRef.current, opts);
      const b = new google.maps.places.Autocomplete(dropRef.current, opts);
      a.addListener('place_changed', () => { const p = a.getPlace(); setPickup(p.formatted_address || p.name || pickup); });
      b.addListener('place_changed', () => { const p = b.getPlace(); setDrop(p.formatted_address || p.name || drop); });
    };
    if ((window as any).google?.maps?.places) return connect();
    if (!key || document.getElementById('gmaps-places')) return;
    const s = document.createElement('script');
    s.id = 'gmaps-places'; s.async = true; s.onload = connect;
    s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places&language=${locale}`;
    document.head.appendChild(s);
  }, [pickup, drop, locale]);

  const v = vehicles.find((x) => x.id === vehicleId) || vehicles[0];
  const min = minutes(pickup, drop);
  const bill = billed(min);
  const vehiclePrice = mode === 'transfer' ? v.rate * (bill / 60) : hourly(v.rate, hours);
  const tipValue = Number(tip.replace(',', '.')) > 0 ? Number(tip.replace(',', '.')) : 0;
  const total = vehiclePrice + (child ? 30 : 0) + (flowers ? 150 : 0) + (roses ? 400 : 0) + tipValue;
  const findCars = () => { setLoading(true); setTimeout(() => { setLoading(false); setStep(2); }, 5000); };

  const labelClass = 'mb-1 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.09em] text-black/80 md:text-[11px] md:tracking-[0.14em] md:drop-shadow-[0_1px_10px_rgba(255,255,255,0.9)]';
  const inputClass = 'h-12 w-full rounded-2xl border border-white/60 bg-white/60 px-3 text-base font-semibold text-black outline-none backdrop-blur-xl focus:border-black md:h-14 md:border-gray-200 md:bg-gray-50 md:px-4 md:text-sm';
  const panelClass = 'w-full rounded-[26px] border border-white/60 bg-white/55 p-3 shadow-[0_20px_70px_rgba(17,24,39,0.16)] backdrop-blur-[28px] backdrop-saturate-150 md:rounded-[28px] md:border-0 md:bg-white/55 md:p-6 md:shadow-[0_30px_110px_rgba(0,0,0,0.35)] md:backdrop-blur-[34px]';
  const Stepper = () => <div className="mb-4 grid grid-cols-3 rounded-full bg-white/45 p-1 text-[10px] font-black uppercase tracking-[0.09em] backdrop-blur-xl md:mb-5 md:bg-white/70 md:tracking-[0.12em] md:text-xs">{['Trajet', 'Voiture', 'Paiement'].map((s, i) => <div key={s} className={`rounded-full px-2 py-3 text-center ${step === i + 1 ? 'bg-black text-white shadow-lg' : step > i + 1 ? 'bg-white/80 text-black' : 'text-gray-700'}`}>{i + 1}. {s}</div>)}</div>;

  if (step === 1) return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#eef0f3] px-3 pb-6 pt-20 md:bg-black md:px-8 md:pt-28">
      <Image src="/images/home.driver.jpg" alt="Private driver Istanbul" fill priority className="hidden object-cover md:block" sizes="100vw" />
      <div className="absolute inset-0 hidden bg-gradient-to-b from-black/20 via-black/18 to-black/78 md:block" />

      <div className="relative z-10 mx-auto max-w-[1180px] md:grid md:min-h-[calc(100svh-8rem)] md:items-center md:gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative -mx-3 -mt-20 mb-[-38px] h-[390px] overflow-hidden rounded-b-[2rem] md:hidden">
          <Image src="/images/home.driver.jpg" alt="Chauffeur privé Istanbul" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/72" />
          <div className="absolute bottom-16 left-4 right-4 text-white">
            <div className="mb-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-black backdrop-blur-xl">Istanbul airport transfer</div>
            <h1 className="text-[2.35rem] font-black leading-[0.94] tracking-[-0.065em]">Réservez votre chauffeur privé à Istanbul</h1>
            <div className="mt-4 inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white backdrop-blur-xl">Confirmation immédiate</div>
          </div>
        </div>

        <div className="hidden text-white md:block">
          <div className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-black">Istanbul airport transfer</div>
          <h1 className="max-w-3xl text-7xl font-black leading-[0.94] tracking-[-0.07em]">Réservez votre chauffeur privé à Istanbul</h1>
          <div className="mt-4 inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl">Confirmation immédiate</div>
        </div>

        <div className={panelClass}>
          <Stepper />
          <div className="mb-4 grid grid-cols-2 rounded-2xl bg-white/45 p-1 backdrop-blur-xl md:bg-gray-100">
            <button onClick={() => setMode('transfer')} className={`rounded-xl py-3 text-xs font-black uppercase tracking-[0.14em] transition ${mode === 'transfer' ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>Transfert</button>
            <button onClick={() => setMode('hourly')} className={`rounded-xl py-3 text-xs font-black uppercase tracking-[0.14em] transition ${mode === 'hourly' ? 'bg-black text-white shadow-lg' : 'text-gray-700'}`}>À l’heure</button>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <label><span className={labelClass}><MapPin size={14}/>Départ</span><input ref={pickupRef} list="transfer-hints" value={pickup} onChange={(e) => setPickup(e.target.value)} className={inputClass} placeholder="Adresse ou aéroport" /></label>
            <label><span className={labelClass}><MapPin size={14}/>Arrivée</span><input ref={dropRef} list="transfer-hints" value={drop} onChange={(e) => setDrop(e.target.value)} className={inputClass} placeholder="Adresse ou hôtel" /></label>
            <datalist id="transfer-hints">{hints.map((h) => <option key={h} value={h} />)}</datalist>
            <div className="grid grid-cols-2 gap-2 md:contents">
              <label><span className={labelClass}><CalendarDays size={13}/>Date</span><input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputClass} /></label>
              <label><span className={labelClass}><Clock size={13}/>Heure</span><select value={time} onChange={(e) => setTime(e.target.value)} className={inputClass}>{timeOptions.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></label>
            </div>
            <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(70px,0.65fr)] gap-2 md:contents">
              <label><span className={labelClass}><Plane size={13}/>N° de vol</span><input value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} className={inputClass} placeholder="Pour être accueilli" /></label>
              <label><span className={labelClass}><Users size={13}/>Passagers</span><input type="number" min={1} max={12} value={pax} onChange={(e) => setPax(Number(e.target.value))} className={`${inputClass} text-center`} /></label>
            </div>
            {mode === 'hourly' && <label className="md:col-span-2"><span className={labelClass}><Clock size={14}/>Durée</span><select value={hours} onChange={(e) => setHours(Number(e.target.value))} className={inputClass}>{[2,3,4,5,6,8,12].map((h) => <option key={h} value={h}>{h} heures</option>)}</select></label>}
          </div>
          {loading ? <div className="mt-5 rounded-3xl border border-white/50 bg-white/50 p-6 text-center backdrop-blur-xl md:border-gray-200 md:bg-gray-50"><div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-inner"><div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-black"/><Timer className="relative h-7 w-7"/></div><p className="text-lg font-black tracking-[-0.03em]">Recherche des véhicules disponibles</p><p className="mt-1 text-sm text-gray-500">Vérification du trajet, de l’horaire, du vol et des passagers...</p></div> : <div className="mt-5 flex justify-end"><button onClick={findCars} className="inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-white shadow-xl transition hover:-translate-y-0.5">Voir les véhicules<ArrowRight size={16}/></button></div>}
        </div>
      </div>
    </section>
  );

  return (
    <section className="min-h-screen bg-white px-4 pt-28 md:px-8 md:pt-32">
      <div className="mx-auto max-w-[1180px]"><Stepper />
        {step === 2 && <><div className="mb-6"><p className="text-xs font-black uppercase tracking-[0.18em] text-gray-500">{pickup} → {drop}</p><h2 className="mt-2 text-4xl font-black tracking-[-0.04em]">Sélectionnez votre véhicule</h2><p className="mt-2 text-sm font-semibold text-gray-500">{mode === 'transfer' ? `${min} min estimées · ${bill} min facturées` : `${hours} heures · -20% après 2h`}</p></div><div className="grid gap-4">{vehicles.map((car) => { const selected = car.id === vehicleId; const price = mode === 'transfer' ? car.rate * (bill / 60) : hourly(car.rate, hours); return <button key={car.id} onClick={() => setVehicleId(car.id)} className={`grid gap-4 rounded-[28px] border p-4 text-left shadow-sm transition md:grid-cols-[240px_1fr_auto] md:items-center ${selected ? 'border-black bg-white shadow-2xl' : 'border-gray-200 bg-white hover:border-black'}`}><div className="relative h-40 overflow-hidden rounded-3xl bg-gray-100"><Image src={car.img} alt={car.name} fill className="object-cover" sizes="240px"/></div><div><p className="text-xs font-black uppercase tracking-[0.16em] text-gray-500">{car.label}</p><h3 className="mt-1 text-2xl font-black tracking-[-0.03em]">{car.name}</h3><div className="mt-4 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.1em] text-gray-600"><span className="inline-flex gap-1"><Users size={14}/>{car.pax}</span><span className="inline-flex gap-1"><Luggage size={14}/>{car.bags}</span><span className="inline-flex gap-1"><Plane size={14}/>Suivi vol</span></div></div><div className="md:text-right"><p className="text-4xl font-black tracking-[-0.06em]">{eur(price)}</p><span className={`mt-4 inline-flex rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.12em] ${selected ? 'bg-black text-white' : 'border border-black text-black'}`}>{selected ? 'Sélectionné' : 'Choisir'}</span></div></button>; })}</div><div className="mt-7 flex justify-between"><button onClick={() => setStep(1)} className="rounded-2xl border border-black px-6 py-4 text-xs font-black uppercase tracking-[0.14em]"><ArrowLeft size={14} className="mr-2 inline"/>Retour</button><button onClick={() => setStep(3)} className="rounded-2xl bg-black px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-white">Continuer<ArrowRight size={14} className="ml-2 inline"/></button></div></>}
        {step === 3 && <div className="grid gap-6 lg:grid-cols-[1fr_380px]"><div className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-lg md:p-7"><h2 className="text-4xl font-black tracking-[-0.04em]">Informations passager</h2><div className="mt-5 grid gap-3 md:grid-cols-2"><button onClick={() => setForOther(false)} className={`rounded-2xl border px-4 py-4 text-left text-xs font-black uppercase tracking-[0.12em] ${!forOther ? 'bg-black text-white' : 'text-gray-500'}`}>Pour moi-même</button><button onClick={() => setForOther(true)} className={`rounded-2xl border px-4 py-4 text-left text-xs font-black uppercase tracking-[0.12em] ${forOther ? 'bg-black text-white' : 'text-gray-500'}`}>Autre personne</button>{['Nom','Prénom','Téléphone','Email'].map((x) => <input key={x} placeholder={x} className="h-14 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm font-semibold outline-none focus:border-black"/>)}<textarea placeholder="Note / souhait particulier" rows={4} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold outline-none focus:border-black md:col-span-2"/><input value={flightNumber} onChange={(e) => setFlightNumber(e.target.value)} placeholder="Numéro de vol optionnel" className="h-14 rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm font-semibold outline-none focus:border-black md:col-span-2"/></div><div className="mt-6 grid gap-3 md:grid-cols-3"><label className="rounded-2xl border p-4"><input type="checkbox" checked={child} onChange={(e) => setChild(e.target.checked)}/> <Baby className="my-2"/>Siège enfant<br/><b>+30 €</b></label><label className="rounded-2xl border p-4"><input type="checkbox" checked={flowers} onChange={(e) => setFlowers(e.target.checked)}/> <Flower2 className="my-2"/>Bouquet<br/><b>+150 €</b></label><label className="rounded-2xl border p-4"><input type="checkbox" checked={roses} onChange={(e) => setRoses(e.target.checked)}/> <Flower2 className="my-2"/>33 roses<br/><b>+400 €</b></label></div><input value={tip} onChange={(e) => setTip(e.target.value)} placeholder="Pourboire libre" className="mt-4 h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-sm font-semibold outline-none focus:border-black"/><button onClick={() => setStep(2)} className="mt-6 rounded-2xl border border-black px-6 py-4 text-xs font-black uppercase tracking-[0.14em]">Retour</button></div><aside className="rounded-[28px] bg-black p-6 text-white shadow-2xl"><p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">Résumé</p><h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">Paiement sécurisé</h3><div className="mt-6 space-y-3 text-sm text-white/70"><p><b className="text-white">Trajet :</b> {pickup} → {drop}</p><p><b className="text-white">Date :</b> {date} · {timeLabel}</p><p><b className="text-white">Vol :</b> {flightNumber || 'Non renseigné'}</p><p><b className="text-white">Voiture :</b> {v.name}</p><p><b className="text-white">Passagers :</b> {pax}</p></div><div className="mt-6 border-t border-white/15 pt-6"><div className="flex justify-between"><span>Total</span><span className="text-5xl font-black tracking-[-0.06em]">{eur(total)}</span></div><button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-black"><CreditCard size={16}/>Payer et confirmer</button></div></aside></div>}
      </div>
    </section>
  );
}
