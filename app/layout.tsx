import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Cormorant, Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const cormorant = Cormorant({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Bosphoras — Bureau Privé en Turquie',
    template: '%s | Bosphoras',
  },
  description:
    'Bosphoras accompagne les investisseurs internationaux, familles et entrepreneurs dans leur relocation, leurs investissements et leur vie privée en Turquie.',
  metadataBase: new URL('https://bosphoras.com'),
  openGraph: {
    siteName: 'Bosphoras',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Bosphoras — Bureau Privé en Turquie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-default.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${cormorantGaramond.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-[hsl(45,30%,96%)] text-[hsl(220,45%,12%)]">
        {children}
      </body>
    </html>
  );
}
