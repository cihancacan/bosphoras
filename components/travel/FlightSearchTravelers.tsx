'use client';

import { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import * as Select from '@radix-ui/react-select';
import { Armchair, Check, ChevronDown, Minus, Plus, UsersRound } from 'lucide-react';
import { maxFlightPassengers, type FlightCabin } from '@/lib/travel/nuiteeFlightSearch';
import s from './TravelCollectionPresentation.module.css';

export type FlightPassengers = { adults: number; children: Array<number | null>; infants: number };

function Counter({ label, description, value, min, max, onChange }: {
  label: string; description?: string; value: number; min: number; max: number; onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-sm font-bold text-[#183341]">{label}</p>
        {description && <p className="mt-0.5 text-xs leading-5 text-[#536d78]">{description}</p>}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <button type="button" className={s.counter} disabled={value <= min} aria-label={label + ' −'} onClick={() => onChange(value - 1)}><Minus size={15} aria-hidden="true"/></button>
        <output className="min-w-5 text-center text-sm font-semibold">{value}</output>
        <button type="button" className={s.counter} disabled={value >= max} aria-label={label + ' +'} onClick={() => onChange(value + 1)}><Plus size={15} aria-hidden="true"/></button>
      </div>
    </div>
  );
}

export function FlightSearchTravelers({ french, passengers, onChange, fieldClass, labelClass }: {
  french: boolean; passengers: FlightPassengers; onChange: (passengers: FlightPassengers) => void; fieldClass: string; labelClass: string;
}) {
  const [open, setOpen] = useState(false);
  const { adults, children, infants } = passengers;
  const total = adults + children.length + infants;
  const remaining = maxFlightPassengers - total;
  const label = french ? 'Passagers' : 'Passengers';
  const count = french ? (total === 1 ? 'passager' : 'passagers') : (total === 1 ? 'traveler' : 'travelers');
  const childAge = french ? 'Âge de l’enfant' : 'Child’s age';

  return (
    <div className="min-w-0">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button type="button" className="block w-full text-start">
            <span className={labelClass}><UsersRound size={15} aria-hidden="true"/>{label}</span>
            <span className={fieldClass + ' flex items-center justify-between gap-2'}>{total} {count}<ChevronDown size={15} aria-hidden="true"/></span>
          </button>
        </Popover.Trigger>
        <Popover.Content align="start" sideOffset={7} collisionPadding={12} aria-label={label} className={s.travelersPopover}>
          <Counter label={french ? 'Adultes' : 'Adults'} description={french ? '12 ans et plus' : 'Ages 12 and over'}
            value={adults} min={Math.max(1, infants)} max={adults + remaining} onChange={value => onChange({ ...passengers, adults: value })}/>
          <Counter label={french ? 'Enfants' : 'Children'} description={french ? 'De 2 à 11 ans' : 'Ages 2–11'}
            value={children.length} min={0} max={children.length + remaining}
            onChange={value => onChange({ ...passengers, children: value > children.length ? [...children, null] : children.slice(0, value) })}/>
          {children.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {children.map((age, index) => (
                <label key={index} className="block text-xs font-semibold text-[#536d78]">
                  {childAge} {index + 1}
                  <select value={age ?? ''} onChange={event => onChange({ ...passengers, children: children.map((old, i) => i === index ? Number(event.target.value) : old) })}
                    className="mt-1 block h-9 w-full rounded-md border border-[#dce6ec] bg-white px-2 text-sm text-[#183341]">
                    <option value="" disabled>{french ? 'À choisir' : 'Select age'}</option>
                    {Array.from({ length: 10 }, (_, i) => i + 2).map(value => <option key={value} value={value}>{value}</option>)}
                  </select>
                </label>
              ))}
              <p className="col-span-2 text-xs text-[#536d78]">{french ? 'Indiquez leur âge à la date du voyage.' : 'Enter their age at the time of travel.'}</p>
            </div>
          )}
          <Counter label={french ? 'Bébés' : 'Infants'} description={french ? 'Moins de 2 ans · sur les genoux, un bébé par adulte' : 'Under 2 · on a lap, one infant per adult'}
            value={infants} min={0} max={Math.min(adults, infants + remaining)} onChange={value => onChange({ ...passengers, infants: value })}/>
          <p className="text-xs leading-5 text-[#536d78]">
            {french ? 'Pour un bébé avec son propre siège, ' : 'For an infant with their own seat, '}
            <a href="#assistance-reservation" onClick={() => setOpen(false)} className="font-semibold text-[#076c9f] underline underline-offset-2">
              {french ? 'contactez l’assistance réservation' : 'contact booking support'}
            </a>.
          </p>
          <button type="button" onClick={() => setOpen(false)} className="w-full rounded-lg bg-[#0071ad] py-2.5 text-sm font-semibold text-white hover:bg-[#005b90]">
            {french ? 'Valider les passagers' : 'Confirm travelers'}
          </button>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}

export function FlightSearchCabin({ value, onChange, label, options, fieldClass, labelClass, rtl }: {
  value: FlightCabin; onChange: (value: FlightCabin) => void; label: string;
  options: Record<FlightCabin, string>; fieldClass: string; labelClass: string; rtl: boolean;
}) {
  return (
    <div className="min-w-0">
      <Select.Root value={value} onValueChange={next => onChange(next as FlightCabin)} dir={rtl ? 'rtl' : 'ltr'}>
        <Select.Trigger aria-label={label} className="block w-full text-start">
          <span className={labelClass}><Armchair size={15} aria-hidden="true"/>{label}</span>
          <span className={fieldClass + ' flex items-center justify-between gap-2'}><Select.Value/><Select.Icon asChild><ChevronDown size={15} aria-hidden="true"/></Select.Icon></span>
        </Select.Trigger>
        <Select.Content position="popper" align="start" sideOffset={6} collisionPadding={12} className={s.cabinMenu}>
          <Select.Viewport>
            {(Object.keys(options) as FlightCabin[]).map(option => (
              <Select.Item key={option} value={option} className={s.cabinOption}>
                <Select.ItemText>{options[option]}</Select.ItemText>
                <Select.ItemIndicator><Check size={16} aria-hidden="true"/></Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
