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
}

export function buildMetadata({
  locale,
  path = '/',
  title,
  description,
  noIndex = false,
  image,
}: SeoProps): Metadata {
  const canonical = getCanonicalUrl(locale, path);
  const alternates = getAlternateUrls(path);
  const ogImage = image ?? `${siteUrl}/og-default.jpg`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
      languages: alternates as Record<string, string>,
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
    '@type': 'Organization',
    name: 'Bosphoras',
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    description:
      'Bureau privé en Turquie pour investisseurs internationaux, familles et entrepreneurs.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TR',
    },
    areaServed: ['Istanbul', 'Bodrum', 'Antalya'],
    serviceType: [
      'Relocation',
      'Investment Advisory',
      'Legal & Tax Guidance',
      'Luxury Concierge',
      'Property Advisory',
      'Company Formation',
    ],
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
  faqs: Array<{ question: string; answer: string }>
) {
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
