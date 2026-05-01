'use client';

import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';

function detectLocale(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/ru')) return 'ru';
  if (pathname.startsWith('/ar')) return 'ar';
  return 'fr';
}

function ctaLabel(locale: Locale) {
  if (locale === 'en') return 'Private Assessment';
  if (locale === 'ru') return 'Частная консультация';
  if (locale === 'ar') return 'تقييم خاص';
  return 'Diagnostic privé';
}

function ctaHref(locale: Locale) {
  if (locale === 'fr') return '/diagnostic-prive';
  return `/${locale}/private-assessment`;
}

export function StickyMobileCTA() {
  const pathname = usePathname() || '/';
  const locale = detectLocale(pathname);

  if (pathname.includes('/diagnostic-prive')) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-[#d2a863]/35 bg-[#121826]/95 px-4 py-3 shadow-[0_-18px_55px_rgba(0,0,0,0.25)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d2a863]/45 text-[#d2a863]">
          <Lock size={16} />
        </div>
        <Link
          href={ctaHref(locale)}
          className="flex min-h-12 flex-1 items-center justify-center gap-2 bg-[#d2a863] px-4 py-3 text-center text-[0.68rem] font-bold uppercase tracking-[0.13em] text-[#101827]"
        >
          {ctaLabel(locale)}
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
