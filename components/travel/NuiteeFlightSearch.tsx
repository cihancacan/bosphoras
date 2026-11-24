'use client';

import { useEffect, useId, useState, type FormEvent } from 'react';
import { ArrowLeftRight, Search } from 'lucide-react';
import { getNuiteeFlightSearchHref, type FlightCabin, type FlightLeg, type FlightTrip, type SearchAirport } from '@/lib/travel/nuiteeFlightSearch';

type Airport = [code: string, city: string, name: string];
type LegInput = { from: string; to: string; date: string };
const emptyLeg: LegInput = { from: '', to: '', date: '' };
const paris: Airport = ['PAR', 'Paris', 'Tous les aéroports'];

function normalize(value: string): string {
  return value.normalize('NFD').replace(/\p{Diacritic}/gu, '').trim().toLowerCase();
}

function findAirport(value: string, airports: Airport[]): SearchAirport | null {
  const input = value.trim();
  const query = normalize(input);
  const selectedCode = /\(([A-Z]{3})\)$/.exec(input)?.[1];
  const possibleCode = selectedCode ?? input.toUpperCase();
  const airport = airports.find(([code]) => code === possibleCode);
  if (airport) return { code: airport[0], name: airport[1] || airport[2] };

  if (query === 'paris') return { code: 'PAR', name: 'Paris' };
  if (!query) return null;
  const matches = airports.filter(([,city,name]) => normalize(city) === query || normalize(name) === query);
  if (matches.length === 1) return { code: matches[0][0], name: matches[0][1] || matches[0][2] };
  return matches.length === 0 && /^[A-Z]{3}$/.test(possibleCode) ? { code: possibleCode, name: possibleCode } : null;
}

function AirportField({ label, value, onChange, airports, fieldClass, labelClass, placeholder }: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  airports: Airport[];
  fieldClass: string;
  labelClass: string;
  placeholder: string;
}) {
  const id = useId();
  const query = normalize(value);
  const suggestions = query.length >= 2 && !/\([A-Z]{3}\)$/.test(value)
    ? airports.filter(airport => airport.some(word => normalize(word).includes(query)))
      .sort((a,b) => Number(normalize(b[0]) === query) - Number(normalize(a[0]) === query))
      .slice(0, 25)
    : [];

  return (
    <label className="block min-w-0">
      <span className={labelClass}>{label}</span>
      <input value={value} onChange={event => onChange(event.target.value)} autoComplete="off"
        required maxLength={130} list={id} placeholder={placeholder} className={fieldClass}/>
      <datalist id={id}>
        {suggestions.map(([code,city,name]) => <option key={code} value={`${city ? `${city} · ` : ''}${name} (${code})`}/>)}
      </datalist>
    </label>
  );
}

export function NuiteeFlightSearch({ locale, trip, labels, fieldClass, labelClass, onSearch }: {
  locale: string;
  trip: FlightTrip;
  labels: {
    from: string; to: string; departure: string; returnDate: string; cabin: string; segment: string;
    add: string; remove: string; swap: string; economy: string; business: string; first: string;
  };
  fieldClass: string;
  labelClass: string;
  onSearch: () => void;
}) {
  const french = locale === 'fr';
  const [airports, setAirports] = useState<Airport[]>([paris]);
  const [legs, setLegs] = useState<LegInput[]>([emptyLeg, emptyLeg]);
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [cabin, setCabin] = useState<FlightCabin>('all');
  const [error, setError] = useState('');
  const [today, setToday] = useState('');

  useEffect(() => {
    setToday(new Date().toLocaleDateString('sv-SE'));
    const controller = new AbortController();
    fetch('/data/nuitee-flight-airports.json', { signal: controller.signal })
      .then(response => response.ok ? response.json() : null)
      .then(data => { if (Array.isArray(data?.airports)) setAirports([paris, ...data.airports]); })
      .catch(() => { /* IATA codes can still be entered if suggestions fail to load. */ });
    return () => controller.abort();
  }, []);

  function setLeg(index: number, changes: Partial<LegInput>) {
    setLegs(previous => previous.map((leg, i) => i === index ? { ...leg, ...changes } : leg));
    setError('');
  }

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const resolved: FlightLeg[] = [];
    for (const leg of trip === 'multi' ? legs : legs.slice(0, 1)) {
      const from = findAirport(leg.from, airports);
      const to = findAirport(leg.to, airports);
      if (!from || !to) {
        setError(french ? 'Choisissez un aéroport dans les suggestions ou saisissez son code IATA, par exemple CDG.' : 'Choose an airport from the suggestions or enter its IATA code, for example CDG.');
        return;
      }
      resolved.push({ from, to, date: leg.date });
    }
    if (trip === 'round') resolved.push({ from: resolved[0].to, to: resolved[0].from, date: returnDate });
    const href = getNuiteeFlightSearchHref({ locale, trip, legs: resolved, adults, cabin });
    if (!href || resolved[0].date < today) {
      setError(french ? 'Vérifiez que les aéroports sont différents et que les dates sont dans l’ordre.' : 'Check that the airports differ and that the dates are in order.');
      return;
    }

    onSearch();
    window.location.assign(href);
  }

  const displayedLegs = trip === 'multi' ? legs : legs.slice(0, 1);
  const airportProps = { airports, fieldClass, labelClass, placeholder: french ? 'Ville ou code IATA' : 'City or IATA code' };

  return (
    <form onSubmit={search} className="space-y-4" aria-label={french ? 'Recherche de vols Nuitée' : 'Nuitée flight search'}>
      {displayedLegs.map((leg, index) => (
        <fieldset key={index} className="min-w-0 rounded-xl border border-[#dde6eb] bg-[#f8fafb] p-3 sm:p-4">
          {trip === 'multi'&&<legend className="px-1 text-sm font-semibold text-[#375264]">{labels.segment} {index + 1}</legend>}
          <div className={`grid min-w-0 items-end gap-3 sm:grid-cols-2 ${trip === 'round' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            <AirportField {...airportProps} label={labels.from} value={leg.from} onChange={from => setLeg(index, {from})}/>
            <AirportField {...airportProps} label={labels.to} value={leg.to} onChange={to => setLeg(index, {to})}/>
            <label className="block min-w-0">
              <span className={labelClass}>{labels.departure}</span>
              <input type="date" required min={index > 0 ? legs[index - 1].date || today : today}
                value={leg.date} onChange={event => setLeg(index, {date: event.target.value})} className={fieldClass}/>
            </label>
            {trip === 'round'&&(
              <label className="block min-w-0">
                <span className={labelClass}>{labels.returnDate}</span>
                <input type="date" required min={leg.date || today} value={returnDate}
                  onChange={event => setReturnDate(event.target.value)} className={fieldClass}/>
              </label>
            )}
          </div>
          <button type="button" onClick={() => setLeg(index, {from: leg.to, to: leg.from})}
            className="mt-1 inline-flex min-h-10 items-center gap-2 rounded-lg px-2 text-xs font-medium text-[#076c9f] hover:bg-[#ecf6fa]">
            <ArrowLeftRight size={16} aria-hidden="true"/>{labels.swap}
          </button>
        </fieldset>
      ))}
      {trip === 'multi'&&(
        <div className="flex flex-wrap gap-2">
          {legs.length < 5&&<button type="button" onClick={() => setLegs(previous => [...previous, {...emptyLeg, from: previous[previous.length - 1].to}])}
            className="rounded-lg border border-[#b8d4e1] px-3 py-2 text-sm font-semibold text-[#026b9d]">+ {labels.add}</button>}
          {legs.length > 2&&<button type="button" onClick={() => setLegs(previous => previous.slice(0, -1))}
            className="rounded-lg border border-[#dde6ec] px-3 py-2 text-sm text-[#4e6473]">{labels.remove}</button>}
        </div>
      )}
      <div className="grid items-end gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">
        <label className="min-w-0">
          <span className={labelClass}>{french ? 'Adultes' : 'Adults'}</span>
          <select value={adults} onChange={event => setAdults(Number(event.target.value))} className={fieldClass}>
            {Array.from({length: 9}, (_,i) => i + 1).map(count => <option key={count}>{count}</option>)}
          </select>
        </label>
        <label className="min-w-0">
          <span className={labelClass}>{labels.cabin}</span>
          <select value={cabin} onChange={event => setCabin(event.target.value as FlightCabin)} className={fieldClass}>
            <option value="all">{french ? 'Toutes les classes' : 'All cabins'}</option>
            <option value="Economy">{labels.economy}</option>
            <option value="Business">{labels.business}</option>
            <option value="First">{labels.first}</option>
          </select>
        </label>
        <button type="submit" className="inline-flex min-h-[58px] items-center justify-center gap-2 rounded-xl bg-[#0071ad] px-6 py-3 text-sm font-semibold text-white hover:bg-[#005b90]">
          <Search size={18} aria-hidden="true"/>{french ? 'Rechercher des vols' : 'Search flights'}
        </button>
      </div>
      {error&&<p role="alert" className="text-sm text-[#a23121]">{error}</p>}
      <p className="text-sm text-[#637782]">{french ? 'Les tarifs et la réservation s’ouvrent sur la marque blanche Nuitée BOSPHORAS.' : 'Flight prices and booking open on the BOSPHORAS Nuitée storefront.'}</p>
    </form>
  );
}
