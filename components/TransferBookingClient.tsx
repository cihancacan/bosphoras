'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Baby, CalendarDays, Check, Clock, Flower2, Luggage, MapPin, Plane, Search, Users } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

type BookingMode = 'transfer' | 'hourly';
type VehicleId = 'mercedes-e' | 'mercedes-s' | 'viano-vip' | 'sprinter-vip';
type BookingFor = 'self' | 'other';
type Step = 1 | 2 | 3;

type Vehicle = {
  id: VehicleId;
  name: string;
  label: string;
  image: string;
  hourlyRate: number;
  passengers: string;
  luggage: string;
  description: string;
};

const vehicles: Vehicle[] = [
  { id: 'mercedes-e', name: 'Mercedes Classe E ou équivalent', label: 'Business Sedan', image: '/images/mercedesE.avif', hourlyRate: 250, passengers: 'Jusqu’à 3 passagers', luggage: '2 bagages', description: 'Transfert business, sobre et confortable.' },
  { id: 'mercedes-s', name: 'Mercedes Classe S ou équivalent', label: 'Luxury Sedan', image: '/images/mercedesS.avif', hourlyRate: 400, passengers: 'Jusqu’à 3 passagers', luggage: '2 bagages', description: 'Arrivée discrète, élégante et premium.' },
  { id: 'viano-vip', name: 'Mercedes Viano VIP', label: 'VIP Van', image: '/images/mercdecesVianovip.avif', hourlyRate: 150, passengers: '6 à 7 passagers', luggage: 'Bagages selon configuration', description: 'Idéal familles, groupes et plusieurs bagages.' },
  { id: 'sprinter-vip', name: 'Mercedes Sprinter VIP', label: 'VIP Sprinter', image: '/images/mercedessprintervip.avif', hourlyRate: 200, passengers: 'Jusqu’à 12 passagers', luggage: 'Grand volume de bagages', description: 'Groupes, délégations et transferts premium.' },
];

const popularPickups = ['Istanbul Airport IST', 'Sabiha Gökçen SAW', 'Hotel / Residence', 'Galataport', 'Bosphorus', 'Nişantaşı', 'Bebek', 'Levent', 'Maslak'];
const popularDropoffs = ['Hotel / Residence', 'Istanbul Airport IST', 'Sabiha Gökçen SAW', 'Sultanahmet', 'Taksim', 'Nişantaşı', 'Bosphorus', 'Bebek', 'Levent'];

function roundTransferMinutes(minutes: number) {
  if (minutes <= 60) return 60;
  return Math.ceil(minutes / 30) * 30;
}

function estimateTransferMinutes(pickup: string, dropoff: string) {
  const route = `${pickup} ${dropoff}`.toLowerCase();
  const hasIst = route.includes('istanbul airport') || route.includes(' ist') || route.includes('ist ');
  const hasSaw = route.includes('sabiha') || route.includes('saw');
  const hasFarDistrict = route.includes('sapanca') || route.includes('yalova') || route.includes('bursa');
  if (hasFarDistrict) return 150;
  if (hasSaw && hasIst) return 120;
  if (hasSaw) return 90;
  if (hasIst) return 75;
  return 60;
}

function calculateHourlyPrice(hourlyRate: number, hours: number) {
  const safeHours = Math.max(2, hours);
  const normalHours = Math.min(safeHours, 2);
  const discountedHours = Math.max(safeHours - 2, 0);
  return normalHours * hourlyRate + discountedHours * hourlyRate * 0.8;
}

function formatEuro(amount: number) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
}

function getMinimumDateTimeValue() {
  const date = new Date();
  date.setHours(date.getHours() + 2);
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60_000);
  return local.toISOString().slice(0, 16);
}

export function TransferBookingClient({ locale: _locale = 'fr' }: { locale?: Locale }) {
  const minimumDateTime = useMemo(() => getMinimumDateTimeValue(), []);
  const [step, setStep] = useState<Step>(1);
  const [isSearching, setIsSearching] = useState(false);
  const [mode, setMode] = useState<BookingMode>('transfer');
  const [pickup, setPickup] = useState('Istanbul Airport IST');
  const [dropoff, setDropoff] = useState('Hotel / Residence');
  const [dateTime, setDateTime] = useState(minimumDateTime);
  const [passengers, setPassengers] = useState(2);
  const [hours, setHours] = useState(2);
  const [selectedVehicleId, setSelectedVehicleId] = useState<VehicleId>('mercedes-e');
  const [bookingFor, setBookingFor] = useState<BookingFor>('self');
  const [childSeat, setChildSeat] = useState(false);
  const [flowerSelection, setFlowerSelection] = useState(false);
  const [redRoses, setRedRoses] = useState(false);
  const [tip, setTip] = useState('');

  const selectedVehicle = vehicles.find((vehicle) => vehicle.id === selectedVehicleId) ?? vehicles[0];
  const estimatedMinutes = estimateTransferMinutes(pickup, dropoff);
  const billedMinutes = roundTransferMinutes(estimatedMinutes);
  const billedHours = billedMinutes / 60;
  const transferBasePrice = selectedVehicle.hourlyRate * billedHours;
  const hourlyBasePrice = calculateHourlyPrice(selectedVehicle.hourlyRate, hours);
  const childSeatPrice = childSeat ? 30 : 0;
  const flowerSelectionPrice = flowerSelection ? 150 : 0;
  const redRosesPrice = redRoses ? 400 : 0;
  const tipAmount = Number(tip.replace(',', '.')) > 0 ? Number(tip.replace(',', '.')) : 0;
  const vehiclePrice = mode === 'transfer' ? transferBasePrice : hourlyBasePrice;
  const total = vehiclePrice + childSeatPrice + flowerSelectionPrice + redRosesPrice + tipAmount;

  const stepLabels = ['Trajet', 'Véhicule', 'Passager & paiement'];
  const searchVehicles = () => {
    setIsSearching(true);
    window.setTimeout(() => {
      setIsSearching(false);
      setStep(2);
    }, 2000);
  };

  if (isSearching) {
    return (
      <div className="mx-auto max-w-[980px] px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-[2rem] border border-[#d8c7a1] bg-white p-10 text-center shadow-[0_28px_85px_rgba(16,24,39,0.10)] md:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#8a6728] bg-[#fffaf0]">
            <Search className="h-7 w-7 animate-pulse text-[#8a6728]" />
          </div>
          <h2 className="mt-7 font-serif text-4xl tracking-[-0.035em] text-[#121826]">Recherche des véhicules disponibles</h2>
          <p className="mt-4 text-base leading-8 text-[#5c6676]">Nous vérifions les véhicules compatibles avec votre trajet, votre horaire et le nombre de passagers.</p>
          <div className="mt-8 grid gap-3 text-sm text-[#3e4857] md:grid-cols-3">
            <div className="rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] p-4">Trajet<br /><strong>{pickup} → {dropoff}</strong></div>
            <div className="rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] p-4">Passagers<br /><strong>{passengers}</strong></div>
            <div className="rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] p-4">Service<br /><strong>{mode === 'transfer' ? 'Transfert' : `${hours} heures`}</strong></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1180px] px-5 py-10 md:px-8 md:py-14">
      <div className="mb-7 grid grid-cols-3 overflow-hidden rounded-full border border-[#d8c7a1] bg-white p-1 shadow-[0_18px_60px_rgba(16,24,39,0.08)]">
        {stepLabels.map((label, index) => {
          const active = step === index + 1;
          const done = step > index + 1;
          return <div key={label} className={`flex items-center justify-center gap-2 rounded-full px-3 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] ${active ? 'bg-[#121826] text-[#fffaf0]' : done ? 'bg-[#fffaf0] text-[#8a6728]' : 'text-[#5c6676]'}`}>{done && <Check size={14} />}{index + 1}. {label}</div>;
        })}
      </div>

      {step === 1 && (
        <section className="overflow-hidden rounded-[2rem] border border-[#d8c7a1] bg-white p-5 shadow-[0_28px_85px_rgba(16,24,39,0.10)] md:p-8">
          <div className="mb-8 flex flex-col gap-3 rounded-full border border-[#d8c7a1] bg-[#f8f1e7] p-1 sm:flex-row">
            <button onClick={() => setMode('transfer')} className={`flex-1 rounded-full px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] transition ${mode === 'transfer' ? 'bg-[#121826] text-[#fffaf0]' : 'text-[#5c6676] hover:text-[#121826]'}`}>Transfert</button>
            <button onClick={() => setMode('hourly')} className={`flex-1 rounded-full px-6 py-4 text-xs font-bold uppercase tracking-[0.16em] transition ${mode === 'hourly' ? 'bg-[#121826] text-[#fffaf0]' : 'text-[#5c6676] hover:text-[#121826]'}`}>Réserver à l’heure</button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block"><span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]"><MapPin size={15} />Départ</span><input list="pickup-options" value={pickup} onChange={(event) => setPickup(event.target.value)} className="w-full rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] px-4 py-4 text-sm text-[#121826] outline-none transition focus:border-[#8a6728]" placeholder="Adresse, hôtel, aéroport" /></label>
            <label className="block"><span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]"><MapPin size={15} />Arrivée</span><input list="dropoff-options" value={dropoff} onChange={(event) => setDropoff(event.target.value)} className="w-full rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] px-4 py-4 text-sm text-[#121826] outline-none transition focus:border-[#8a6728]" placeholder="Adresse, hôtel, aéroport" /></label>
            <datalist id="pickup-options">{popularPickups.map((item) => <option value={item} key={item} />)}</datalist>
            <datalist id="dropoff-options">{popularDropoffs.map((item) => <option value={item} key={item} />)}</datalist>
            <label className="block"><span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]"><CalendarDays size={15} />Date & heure</span><input type="datetime-local" min={minimumDateTime} value={dateTime} onChange={(event) => setDateTime(event.target.value)} className="w-full rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] px-4 py-4 text-sm text-[#121826] outline-none transition focus:border-[#8a6728]" /></label>
            <label className="block"><span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]"><Users size={15} />Personnes</span><input type="number" min={1} max={12} value={passengers} onChange={(event) => setPassengers(Number(event.target.value))} className="w-full rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] px-4 py-4 text-sm text-[#121826] outline-none transition focus:border-[#8a6728]" /></label>
          </div>
          {mode === 'hourly' && <label className="mt-4 block"><span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]"><Clock size={15} />Durée</span><select value={hours} onChange={(event) => setHours(Number(event.target.value))} className="w-full rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] px-4 py-4 text-sm text-[#121826] outline-none transition focus:border-[#8a6728]">{[2, 3, 4, 5, 6, 8, 12].map((value) => <option value={value} key={value}>{value} heures</option>)}</select><p className="mt-3 text-sm leading-6 text-[#5c6676]">Minimum 2 heures. -20% à partir de la 3e heure.</p></label>}
          <div className="mt-8 flex justify-end"><button onClick={searchVehicles} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0] shadow-[0_18px_50px_rgba(16,24,39,0.18)] transition hover:-translate-y-0.5 hover:bg-[#263246]">Voir les véhicules disponibles<ArrowRight size={16} /></button></div>
        </section>
      )}

      {step === 2 && (
        <section>
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">{pickup} → {dropoff}</p><h2 className="mt-2 font-serif text-4xl tracking-[-0.035em] text-[#121826]">Sélectionnez votre véhicule</h2></div><p className="text-sm text-[#5c6676]">{mode === 'transfer' ? `${estimatedMinutes} min estimées · ${billedMinutes} min facturées` : `${hours} heures · -20% après 2h`}</p></div>
          <div className="grid gap-5">
            {vehicles.map((vehicle) => {
              const isSelected = selectedVehicleId === vehicle.id;
              const basePrice = mode === 'transfer' ? vehicle.hourlyRate * billedHours : calculateHourlyPrice(vehicle.hourlyRate, hours);
              return <button key={vehicle.id} onClick={() => setSelectedVehicleId(vehicle.id)} className={`grid w-full gap-5 rounded-[1.75rem] border p-4 text-left transition md:grid-cols-[260px_1fr_auto] md:items-center ${isSelected ? 'border-[#8a6728] bg-[#fffaf0] shadow-[0_18px_65px_rgba(16,24,39,0.12)]' : 'border-[#d8c7a1] bg-white hover:border-[#8a6728]'}`}><div className="relative h-44 overflow-hidden rounded-[1.25rem] bg-[#f8f1e7] md:h-36"><Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" sizes="(min-width: 768px) 260px, 100vw" /></div><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6728]">{vehicle.label}</p><h3 className="mt-2 font-serif text-3xl leading-tight text-[#121826]">{vehicle.name}</h3><p className="mt-3 text-sm leading-7 text-[#5c6676]">{vehicle.description}</p><div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.10em] text-[#3e4857]"><span className="inline-flex items-center gap-2"><Users size={15} />{vehicle.passengers}</span><span className="inline-flex items-center gap-2"><Luggage size={15} />{vehicle.luggage}</span><span className="inline-flex items-center gap-2"><Plane size={15} />Suivi de vol inclus</span><span className="inline-flex items-center gap-2"><Check size={15} />Accueil inclus</span></div></div><div className="min-w-[190px] border-t border-[#d8c7a1] pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><p className="text-xs uppercase tracking-[0.16em] text-[#5c6676]">Prix</p><p className="mt-2 font-serif text-4xl text-[#121826]">{formatEuro(basePrice)}</p><p className="mt-2 text-xs leading-5 text-[#5c6676]">{formatEuro(vehicle.hourlyRate)} / h</p><span className={`mt-4 inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] ${isSelected ? 'bg-[#121826] text-[#fffaf0]' : 'border border-[#8a6728] text-[#8a6728]'}`}>{isSelected ? 'Sélectionné' : 'Choisir'}</span></div></button>;
            })}
          </div>
          <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row"><button onClick={() => setStep(1)} className="inline-flex items-center justify-center gap-3 rounded-full border border-[#8a6728] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#8a6728]"><ArrowLeft size={15} />Retour</button><button onClick={() => setStep(3)} className="inline-flex items-center justify-center gap-3 rounded-full bg-[#121826] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fffaf0]">Continuer<ArrowRight size={16} /></button></div>
        </section>
      )}

      {step === 3 && (
        <section className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="rounded-[2rem] border border-[#d8c7a1] bg-white p-6 shadow-[0_18px_65px_rgba(16,24,39,0.08)] md:p-8"><h2 className="font-serif text-4xl tracking-[-0.035em] text-[#121826]">Informations passager</h2><div className="mt-7 grid gap-3 sm:grid-cols-2"><button onClick={() => setBookingFor('self')} className={`rounded-2xl border px-5 py-4 text-left text-sm font-bold uppercase tracking-[0.12em] ${bookingFor === 'self' ? 'border-[#8a6728] bg-[#f8f1e7] text-[#121826]' : 'border-[#d8c7a1] text-[#5c6676]'}`}>Pour moi-même</button><button onClick={() => setBookingFor('other')} className={`rounded-2xl border px-5 py-4 text-left text-sm font-bold uppercase tracking-[0.12em] ${bookingFor === 'other' ? 'border-[#8a6728] bg-[#f8f1e7] text-[#121826]' : 'border-[#d8c7a1] text-[#5c6676]'}`}>Pour une autre personne</button></div><div className="mt-6 grid gap-4 md:grid-cols-2">{['Nom', 'Prénom', 'Téléphone WhatsApp', 'Adresse e-mail'].map((label) => <label key={label} className="block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]">{label}</span><input className="w-full rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] px-4 py-4 text-sm outline-none transition focus:border-[#8a6728]" /></label>)}<label className="block md:col-span-2"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]">Note / souhait particulier</span><textarea rows={4} className="w-full rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] px-4 py-4 text-sm outline-none transition focus:border-[#8a6728]" /></label><label className="block md:col-span-2"><span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]"><Plane size={15} />Numéro de vol optionnel</span><input className="w-full rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] px-4 py-4 text-sm outline-none transition focus:border-[#8a6728]" placeholder="Exemple : TK1828" /></label></div><div className="mt-8 border-t border-[#d8c7a1] pt-8"><p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8a6728]">Services additionnels</p><div className="mt-5 grid gap-4 md:grid-cols-3"><label className="flex cursor-pointer gap-3 rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] p-4"><input type="checkbox" checked={childSeat} onChange={(event) => setChildSeat(event.target.checked)} /><span><Baby className="mb-3 h-5 w-5 text-[#8a6728]" /><strong>Siège enfant</strong><br /><span className="text-sm text-[#5c6676]">+30 €</span></span></label><label className="flex cursor-pointer gap-3 rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] p-4"><input type="checkbox" checked={flowerSelection} onChange={(event) => setFlowerSelection(event.target.checked)} /><span><Flower2 className="mb-3 h-5 w-5 text-[#8a6728]" /><strong>Bouquet sélection</strong><br /><span className="text-sm text-[#5c6676]">+150 €</span></span></label><label className="flex cursor-pointer gap-3 rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] p-4"><input type="checkbox" checked={redRoses} onChange={(event) => setRedRoses(event.target.checked)} /><span><Flower2 className="mb-3 h-5 w-5 text-[#8a6728]" /><strong>33 roses rouges</strong><br /><span className="text-sm text-[#5c6676]">+400 €</span></span></label></div><label className="mt-5 block"><span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#8a6728]">Pourboire — montant libre</span><input inputMode="decimal" value={tip} onChange={(event) => setTip(event.target.value)} className="w-full rounded-2xl border border-[#d8c7a1] bg-[#fffaf0] px-4 py-4 text-sm outline-none transition focus:border-[#8a6728]" placeholder="Exemple : 20" /></label></div><div className="mt-8"><button onClick={() => setStep(2)} className="inline-flex items-center justify-center gap-3 rounded-full border border-[#8a6728] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#8a6728]"><ArrowLeft size={15} />Retour</button></div></div>
          <aside className="sticky top-28 self-start rounded-[2rem] border border-[#24334a] bg-[#121826] p-6 text-[#fffaf0] shadow-[0_24px_80px_rgba(16,24,39,0.18)] md:p-8"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d2a863]">Résumé</p><h3 className="mt-4 font-serif text-3xl leading-tight">Paiement sécurisé</h3><div className="mt-6 space-y-4 text-sm leading-7 text-[#d8cfbf]"><p><strong className="text-white">Service :</strong> {mode === 'transfer' ? 'Transfert privé' : `Chauffeur · ${hours}h`}</p><p><strong className="text-white">Trajet :</strong> {pickup} → {dropoff}</p><p><strong className="text-white">Véhicule :</strong> {selectedVehicle.name}</p><p><strong className="text-white">Passagers :</strong> {passengers}</p></div><div className="my-6 h-px bg-[#d2a863]/30" /><div className="space-y-3 text-sm text-[#d8cfbf]"><div className="flex justify-between"><span>Véhicule</span><span>{formatEuro(vehiclePrice)}</span></div>{childSeat && <div className="flex justify-between"><span>Siège enfant</span><span>{formatEuro(30)}</span></div>}{flowerSelection && <div className="flex justify-between"><span>Bouquet sélection</span><span>{formatEuro(150)}</span></div>}{redRoses && <div className="flex justify-between"><span>33 roses rouges</span><span>{formatEuro(400)}</span></div>}{tipAmount > 0 && <div className="flex justify-between"><span>Pourboire</span><span>{formatEuro(tipAmount)}</span></div>}</div><div className="mt-6 flex items-end justify-between border-t border-[#d2a863]/30 pt-6"><span className="text-xs font-bold uppercase tracking-[0.18em] text-[#d2a863]">Total</span><span className="font-serif text-5xl">{formatEuro(total)}</span></div><button className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#d2a863] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#e0bc78]">Payer et confirmer<ArrowRight size={16} /></button><p className="mt-4 text-xs leading-6 text-[#d8cfbf]">Paiement uniquement par carte. Confirmation immédiate après paiement.</p></aside>
        </section>
      )}
    </div>
  );
}
