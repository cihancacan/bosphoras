'use client';

import { useId, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { CalendarDays, ChevronDown, ChevronUp, Hotel, MapPin, Minus, Plus, Search, Users, X } from 'lucide-react';
import {
  findExactVerifiedHotel, isVerifiedSmartSelection, smartHotelSuggestions,
  type SmartHotelSuggestion,
} from '@/lib/travel/smartHotelSearch';
import type { SearchRoom } from '@/lib/travel/nuiteeWidgetOccupancy';
import s from './HotelReservation.module.css';

type RoomDraft = { adults: number; children: (number | null)[] };
type SmartSearchRequest = {
  selection: SmartHotelSuggestion;
  checkin: string;
  checkout: string;
  rooms: SearchRoom[];
};

const isoToday = () => {
  const date = new Date();
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
};
function followingDay(day: string): string {
  if (!day) return '';
  const date = new Date(day + 'T12:00:00');
  date.setDate(date.getDate() + 1);
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}

export function HotelSmartSearch({
  locale, busy, onSearch, onWorldwide,
}: {
  locale: 'fr' | 'en';
  busy: boolean;
  onSearch: (request: SmartSearchRequest) => void;
  onWorldwide: () => void;
}) {
  const fr = locale === 'fr';
  const listId = useId();
  const dateRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [selection, setSelection] = useState<SmartHotelSuggestion | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState(-1);
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [rooms, setRooms] = useState<RoomDraft[]>([{ adults: 2, children: [] }]);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const suggestions = smartHotelSuggestions(query);
  const totalAdults = rooms.reduce((sum, room) => sum + room.adults, 0);
  const totalChildren = rooms.reduce((sum, room) => sum + room.children.length, 0);

  const choose = (item: SmartHotelSuggestion) => {
    if (!isVerifiedSmartSelection(item)) return;
    setSelection(item);
    setQuery(item.label);
    setExpanded(false);
    setActive(-1);
    setMessage('');
    dateRef.current?.focus();
  };

  const updateRoom = (index: number, change: (room: RoomDraft) => RoomDraft) => {
    setRooms(current => current.map((room, i) => i === index ? change(room) : room));
  };

  const handleKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') { setExpanded(false); return; }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setExpanded(true);
      setActive(index => event.key === 'ArrowDown' ? Math.min(index + 1, suggestions.length - 1) : Math.max(index - 1, 0));
    }
    if (event.key === 'Enter' && expanded && active >= 0 && suggestions[active]) {
      event.preventDefault();
      choose(suggestions[active]);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const exact = selection && selection.label === query ? selection : findExactVerifiedHotel(query);
    if (!exact || !isVerifiedSmartSelection(exact)) {
      setExpanded(true);
      setMessage(fr ? 'Choisissez une suggestion vérifiée ou utilisez la recherche mondiale.' : 'Choose a verified suggestion or use worldwide search.');
      return;
    }
    if (!checkin || !checkout || checkin < isoToday() || checkout <= checkin) {
      setMessage(fr ? 'Sélectionnez des dates valides.' : 'Choose valid dates.');
      return;
    }
    if (rooms.some(room => room.children.some(age => age === null)) || totalAdults > 12) {
      setGuestsOpen(true);
      setMessage(fr ? 'Précisez l’âge de chaque enfant.' : 'Select the age of every child.');
      return;
    }
    setMessage('');
    onSearch({ selection: exact, checkin, checkout, rooms: rooms.map(room => ({ adults: room.adults, children: room.children as number[] })) });
  };

  return <form className={s.smartForm} onSubmit={submit} aria-label={fr ? 'Recherche rapide d’hôtels et de destinations' : 'Quick hotel and destination search'}>
    <div className={s.smartDestination}>
      <label htmlFor={listId + '-field'} className={s.smartFieldLabel}>{fr ? 'Où souhaitez-vous séjourner ?' : 'Where would you like to stay?'}</label>
      <div className={s.smartInputWrap}>
        <Search size={19} aria-hidden="true" />
        <input
          id={listId + '-field'}
          value={query}
          autoComplete="off"
          placeholder={fr ? 'Ville ou nom d’hôtel' : 'City or hotel name'}
          role="combobox"
          aria-controls={listId + '-results'}
          aria-autocomplete="list"
          aria-expanded={expanded}
          aria-activedescendant={expanded && active >= 0 ? listId + '-option-' + active : undefined}
          onChange={event => { setQuery(event.target.value); setSelection(null); setExpanded(true); setActive(-1); setMessage(''); }}
          onFocus={() => setExpanded(true)}
          onBlur={event => { if (!event.currentTarget.parentElement?.parentElement?.contains(event.relatedTarget as Node)) setExpanded(false); }}
          onKeyDown={handleKey}
        />
        {query && <button type="button" className={s.smartClear} aria-label={fr ? 'Effacer' : 'Clear'} onClick={() => { setQuery(''); setSelection(null); setExpanded(true); }}><X size={16}/></button>}
      </div>
      {expanded && <div className={s.smartSuggestions} id={listId + '-results'} role="listbox" aria-label={fr ? 'Suggestions vérifiées' : 'Verified suggestions'}>
        {suggestions.length > 0 ? suggestions.map((item, index) => <button
          id={listId + '-option-' + index}
          key={item.kind + ':' + item.id}
          type="button"
          role="option"
          aria-selected={index === active}
          className={s.smartSuggestion}
          onMouseDown={event => event.preventDefault()}
          onClick={() => choose(item)}
        >
          <span className={s.smartSuggestionIcon}>{item.kind === 'hotel' ? <Hotel size={18}/> : <MapPin size={18}/>}</span>
          <span><strong>{item.label}</strong><small>{item.kind === 'hotel' ? fr ? 'Hôtel identifié · accès direct' : 'Verified hotel · direct access' : fr ? 'Destination · tous les hôtels' : 'Destination · all hotels'}</small></span>
          <span className={s.smartSuggestionArrow}>↗</span>
        </button>) : <p className={s.smartEmpty}>{fr ? 'Pas de correspondance exacte dans notre sélection vérifiée.' : 'No exact match in our verified selection.'}</p>}
        <button type="button" className={s.smartWorldwide} onMouseDown={event => event.preventDefault()} onClick={onWorldwide}>
          <Search size={17} />{fr ? 'Rechercher dans le catalogue mondial Nuitée' : 'Search the worldwide Nuitee catalogue'}
        </button>
      </div>}
    </div>

    <div className={s.smartDates}>
      <label className={s.smartDate}>
        <span className={s.smartFieldLabel}>{fr ? 'Arrivée' : 'Check-in'}</span>
        <span className={s.smartDateInput}><CalendarDays size={17} /><input ref={dateRef} type="date" required min={isoToday()} value={checkin} onChange={event => { const next=event.target.value;setCheckin(next);if(checkout && checkout <= next)setCheckout(''); }} /></span>
      </label>
      <label className={s.smartDate}>
        <span className={s.smartFieldLabel}>{fr ? 'Départ' : 'Check-out'}</span>
        <span className={s.smartDateInput}><CalendarDays size={17}/><input type="date" required min={followingDay(checkin) || followingDay(isoToday())} value={checkout} onChange={event=>setCheckout(event.target.value)} /></span>
      </label>
    </div>
    <div className={s.smartGuestField}>
      <span className={s.smartFieldLabel}>{fr ? 'Voyageurs' : 'Guests'}</span>
      <button type="button" className={s.smartGuestsButton} aria-expanded={guestsOpen} aria-controls={listId + '-guests'} onClick={() => {setGuestsOpen(!guestsOpen);setExpanded(false);}}>
        <Users size={17}/><span>{totalAdults} {fr ? 'adulte(s)' : 'adult(s)'}{totalChildren ? ' · ' + totalChildren + (fr ? ' enfant(s)' : ' child(ren)') : ''} · {rooms.length} {fr ? 'chambre(s)' : 'room(s)'}</span>
        {guestsOpen ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
      </button>
    </div>
    <button className={s.smartSubmit} type="submit" disabled={busy}><Search size={19}/>{busy ? fr ? 'Recherche…' : 'Searching…' : fr ? 'Rechercher' : 'Search'}</button>

    {guestsOpen && <div className={s.smartGuestPanel} id={listId + '-guests'}>
      {rooms.map((room, i) => <div key={i} className={s.smartGuestRoom}>
        <div className={s.smartGuestHeading}><strong>{fr ? 'Chambre' : 'Room'} {i + 1}</strong>{rooms.length > 1 && <button type="button" onClick={() => setRooms(current => current.filter((_, index) => index !== i))}>{fr ? 'Retirer' : 'Remove'}</button>}</div>
        <div className={s.smartGuestCounter}><span>{fr ? 'Adultes' : 'Adults'}</span><div><button type="button" aria-label={fr ? 'Retirer un adulte' : 'Remove adult'} disabled={room.adults <= 1} onClick={() => updateRoom(i,r => ({ ...r, adults:r.adults-1 }))}><Minus size={15}/></button><strong>{room.adults}</strong><button type="button" aria-label={fr ? 'Ajouter un adulte' : 'Add adult'} disabled={totalAdults>=12} onClick={() => updateRoom(i,r=>({...r,adults:r.adults+1}))}><Plus size={15}/></button></div></div>
        <div className={s.smartGuestCounter}><span>{fr ? 'Enfants' : 'Children'}</span><div><button type="button" aria-label={fr ? 'Retirer un enfant' : 'Remove child'} disabled={!room.children.length} onClick={() => updateRoom(i,r=>({...r,children:r.children.slice(0,-1)}))}><Minus size={15}/></button><strong>{room.children.length}</strong><button type="button" aria-label={fr ? 'Ajouter un enfant' : 'Add child'} disabled={room.children.length >= 6} onClick={() => updateRoom(i,r=>({...r,children:[...r.children,null]}))}><Plus size={15}/></button></div></div>
        {room.children.map((age, childIndex) => <label key={childIndex} className={s.smartChildAge}>{fr ? 'Âge de l’enfant' : 'Child age'} {childIndex+1}<select required value={age ?? ''} onChange={event => updateRoom(i,r=>({...r,children:r.children.map((a,j)=>j===childIndex?Number(event.target.value):a)}))}><option value="" disabled>{fr ? 'Choisir' : 'Select'}</option>{Array.from({length:18},(_,n)=><option key={n} value={n}>{n} {fr ? 'ans' : 'years'}</option>)}</select></label>)}
      </div>)}
      <div className={s.smartGuestFooter}><button type="button" disabled={rooms.length >= 6 || totalAdults >= 12} onClick={() => setRooms(current=>[...current,{adults:1,children:[]}])}><Plus size={15}/>{fr ? 'Ajouter une chambre' : 'Add room'}</button><button type="button" onClick={() => setGuestsOpen(false)}>{fr ? 'Terminé' : 'Done'}</button></div>
    </div>}
    {message && <p className={s.smartMessage} role="alert">{message}</p>}
    <div className={s.smartOtherSearch}>
      <span>{fr ? 'Vous ne trouvez pas votre hôtel ?' : 'Can’t find your hotel?'}</span>
      <button type="button" onClick={onWorldwide}>{fr ? 'Rechercher partout dans le monde' : 'Search worldwide'} ↗</button>
    </div>
  </form>;
}
