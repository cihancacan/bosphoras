import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';
import { PeninsulaIstanbulLanding, peninsulaCopy } from '@/components/PeninsulaIstanbulLanding';

const supportedLocales: Locale[] = ['en', 'ru', 'ar'];

function isLocale(value: string): value is Locale {
  return (supportedLocales as string[]).includes(value);
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const path = `/${params.locale}/peninsula-istanbul`;
  return buildMetadata({
    locale: params.locale,
    path,
    title: peninsulaCopy[params.locale].metaTitle,
    description: peninsulaCopy[params.locale].metaDescription,
  });
}

export default function LocalizedPeninsulaIstanbulPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const path = `/${params.locale}/peninsula-istanbul`;
  return <PeninsulaIstanbulLanding locale={params.locale} currentPath={path} />;
}
