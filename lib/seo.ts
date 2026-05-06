import type { Metadata } from 'next';
import type { Locale } from './i18n';
import { getCanonicalUrl, getAlternateUrls, siteUrl } from './routes';

interface SeoProps {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  noIndex?: boolean;
  image?: string;
  alternates?: Record<string, string> | null;
}

export function buildMetadata({
  locale,
  path = '/',
  title,
  description,
  noIndex = false,
  image,
  alternates,
}: SeoProps): Metadata {
  const canonical = getCanonicalUrl(locale, path);
  const resolvedAlternates = alternates === undefined ? getAlternateUrls(path) : alternates;
  const ogImage = image ?? `${siteUrl}/og-default.png`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
      ...(resolvedAlternates ? { languages: resolvedAlternates as Record<string, string> } : {}),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Bosphoras',
      locale,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bosphoras',
    legalName: 'Panorama Grup',
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    telephone: '+33188842222',
    email: 'contact@bosphoras.com',
    description:
      'Bureau privé en Turquie pour investisseurs internationaux, familles, entrepreneurs, clients de banque privée et détenteurs de cartes premium.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Paris',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '88 Avenue des Ternes',
      postalCode: '75017',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    areaServed: ['Paris', 'Istanbul', 'London', 'Almaty', 'Moscow', 'Dubai', 'Bodrum', 'Antalya', 'Turkey'],
    knowsLanguage: ['French', 'English', 'Russian', 'Arabic', 'Turkish', 'Kazakh'],
    serviceType: [
      'Private Office',
      'Relocation to Turkey',
      'Legal and Tax Coordination',
      'Company Formation',
      'Accounting Coordination',
      'Health Insurance Coordination',
      'Private Healthcare Access',
      'Property and Living Advisory',
      'VIP Transport and Hospitality',
      'Private Access Membership',
      'Luxury Concierge',
      'Confidential Client Coordination',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33188842222',
      email: 'contact@bosphoras.com',
      contactType: 'private client assistance',
      availableLanguage: ['French', 'English', 'Russian', 'Arabic', 'Turkish', 'Kazakh'],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bosphoras',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(
  faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: 'Bosphoras',
      url: siteUrl,
    },
    areaServed: 'Turkey',
  };
}
