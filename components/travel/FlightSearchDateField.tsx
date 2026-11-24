'use client';

import { useEffect, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { format, parseISO } from 'date-fns';
import { ar, de, enGB, es, fr, it, ptBR, ru, tr, zhCN } from 'date-fns/locale';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import s from './TravelCollectionPresentation.module.css';

const calendarLocales = { ar, de, en: enGB, es, fr, it, pt: ptBR, ru, tr, zh: zhCN };

export function FlightSearchDateField({ locale, start, end, min, departureLabel, returnLabel, labelClass, fieldClass, onChange }: {
  locale: string;
  start: string;
  end?: string;
  min: string;
  departureLabel: string;
  returnLabel: string;
  labelClass: string;
  fieldClass: string;
  onChange: (start: string, end?: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [choosingReturn, setChoosingReturn] = useState(false);
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 640px)');
    const update = () => setWide(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const isRange = end !== undefined;
  const label = isRange ? departureLabel + ' · ' + returnLabel : departureLabel;
  const from = start ? parseISO(start) : undefined;
  const to = end ? parseISO(end) : undefined;
  const minimum = min ? parseISO(min) : undefined;
  const dayFormat = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' });
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  function choose(day: Date) {
    const value = format(day, 'yyyy-MM-dd');
    if (!isRange) {
      onChange(value);
      setOpen(false);
    } else if (choosingReturn && start && value >= start) {
      onChange(start, value);
      setOpen(false);
    } else {
      onChange(value, '');
      setChoosingReturn(true);
    }
  }

  return (
    <div className={isRange ? 'min-w-0 sm:col-span-2' : 'min-w-0'}>
      <Popover.Root open={open} onOpenChange={value => { setOpen(value); setChoosingReturn(Boolean(from && !to)); }}>
        <Popover.Trigger asChild>
          <button type="button" className="block w-full min-w-0 text-start">
            <span className={labelClass}><CalendarDays size={15} aria-hidden="true"/>{label}</span>
            <span className={fieldClass + ' flex items-center justify-between gap-1'}>
              <span className="truncate">
                {from ? dayFormat.format(from) : departureLabel}
                {isRange && (' – ' + (to ? dayFormat.format(to) : returnLabel))}
              </span>
              <ChevronDown size={15} className="shrink-0" aria-hidden="true"/>
            </span>
          </button>
        </Popover.Trigger>
        <Popover.Content align="end" sideOffset={7} collisionPadding={12} dir={direction} aria-label={label} className={s.calendarPopover}>
          <Calendar
            className={s.calendar}
            dir={direction}
            locale={calendarLocales[locale as keyof typeof calendarLocales] ?? enGB}
            fromDate={minimum}
            defaultMonth={from && (!minimum || from >= minimum) ? from : minimum}
            numberOfMonths={wide ? 2 : 1}
            showOutsideDays={false}
            fixedWeeks
            modifiers={{
              selected: [from, to].filter((day): day is Date => Boolean(day)),
              betweenDates: from && to ? { after: from, before: to } : [],
            }}
            modifiersClassNames={{ selected: s.bookedDate, betweenDates: s.betweenDates }}
            classNames={{
              months: s.calendarMonths,
              month: s.calendarMonth,
              caption: s.calendarCaption,
              caption_label: s.calendarHeading,
              nav_button: s.calendarArrow,
              nav_button_previous: s.calendarPrevious,
              nav_button_next: s.calendarNext,
              head_cell: s.weekday,
              row: 'flex',
              cell: s.calendarCell,
              day: s.calendarDay,
              day_today: s.today,
              day_disabled: s.unavailableDate,
            }}
            onDayClick={choose}
          />
          {isRange && <p className={s.calendarInstruction}>{choosingReturn ? returnLabel : departureLabel}</p>}
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
