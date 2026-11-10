'use client';

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

type NavLink = { label: string; href: string; featured?: boolean };
type LanguageLink = { label: string; code: string; href: string };

export function TravelMobileMenu({
  locale,
  links,
  categories,
  languages,
}: {
  locale: string;
  links: NavLink[];
  categories: NavLink[];
  languages: LanguageLink[];
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const fr = locale === 'fr';

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onEscape);
      if (document.contains(trigger.current)) trigger.current?.focus();
    };
  }, [open]);

  const onPanelKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !panel.current) return;
    const focusable = Array.from(panel.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])'));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const dismiss = () => setOpen(false);
  const sectionLabel = fr ? 'Explorer' : 'Explore';

  return <div className="lg:hidden">
    <button
      ref={trigger}
      type="button"
      aria-label={fr ? 'Ouvrir le menu de navigation' : 'Open navigation menu'}
      aria-expanded={open}
      aria-controls={panelId}
      onClick={() => setOpen(true)}
      className="inline-flex min-h-[44px] items-center gap-2 border border-[#d9e0e3] px-3 py-2 text-xs font-semibold tracking-[0.10em] text-[#193344] transition-colors hover:border-[#193344] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#193344]"
    >
      <span>{fr ? 'MENU' : 'MENU'}</span><Menu size={21} strokeWidth={1.7} aria-hidden="true" />
    </button>
    {open && <>
      <div className="fixed inset-0 z-[80] bg-[#07131a]/70 backdrop-blur-[3px]" aria-hidden="true" onClick={dismiss} />
      <div
        ref={panel}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label={fr ? 'Menu de navigation Bosphoras' : 'Bosphoras navigation menu'}
        onKeyDown={onPanelKeyDown}
        className="fixed inset-y-0 right-0 z-[90] flex h-[100dvh] w-[min(25rem,92vw)] flex-col overflow-y-auto overscroll-contain bg-white text-[#202629] shadow-[-18px_0_60px_rgba(0,0,0,.24)]"
      >
        <div className="flex items-center justify-between border-b border-[#e1e5e5] px-6 py-5">
          <span className="text-xs font-semibold uppercase tracking-[0.23em] text-[#193344]">{sectionLabel}</span>
          <button ref={closeButton} type="button" aria-label={fr ? 'Fermer le menu' : 'Close menu'} onClick={dismiss} className="inline-flex h-11 w-11 items-center justify-center border border-[#e1e5e5] text-[#202629] hover:bg-[#f5f5f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#193344]">
            <X size={22} strokeWidth={1.6} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label={fr ? 'Navigation mobile principale' : 'Mobile primary navigation'} className="px-6 pt-5">
          {links.map(item => <Link key={item.href} href={item.href} rel={item.featured ? 'sponsored' : undefined} onClick={dismiss} className={item.featured
            ? 'mb-5 flex min-h-[52px] items-center justify-between bg-[#193344] px-4 py-3 text-sm font-semibold text-white'
            : 'flex min-h-[54px] items-center justify-between border-b border-[#e1e5e5] text-[15px] font-medium text-[#202629]'}>
            {item.label}<ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true"/>
          </Link>)}
        </nav>
        <nav aria-label={fr ? 'Collections de voyage' : 'Travel collections'} className="px-6 pb-6 pt-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#193344]">{fr ? 'Nos collections' : 'Our collections'}</p>
          <div className="grid grid-cols-1 gap-1">
            {categories.map(item => <Link key={item.href} href={item.href} onClick={dismiss} className="flex min-h-[44px] items-center border-b border-[#e1e5e5] py-2 text-sm text-[#35464a] hover:text-[#193344]">{item.label}</Link>)}
          </div>
        </nav>
        <div className="mt-auto border-t border-[#e1e5e5] bg-[#f5f5f3] px-6 py-6">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.19em] text-[#193344]">{fr ? 'Langue' : 'Language'}</p>
          <nav aria-label={fr ? 'Choisir la langue' : 'Choose language'} className="flex flex-wrap gap-2">
            {languages.map(item => <Link key={item.code} href={item.href} hrefLang={item.code === 'pt' ? 'pt-BR' : item.code} lang={item.code} onClick={dismiss} aria-current={item.code === locale ? 'page' : undefined} className={item.code === locale
              ? 'inline-flex min-h-[40px] items-center border border-[#172b2c] bg-[#172b2c] px-3 text-xs font-semibold tracking-wider text-white'
              : 'inline-flex min-h-[40px] items-center border border-[#e1e5e5] bg-white px-3 text-xs tracking-wider text-[#202629] hover:border-[#193344]'}>
              {item.label}
            </Link>)}
          </nav>
        </div>
      </div>
    </>}
  </div>;
}
