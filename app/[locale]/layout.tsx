import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales
    .filter((l) => l !== 'fr')
    .map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params.locale as Locale;
  if (!locales.includes(locale)) notFound();
  return <>{children}</>;
}
