import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

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
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Bosphoras — Bureau Privé en Turquie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-default.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-[hsl(45,30%,96%)] font-sans antialiased text-[hsl(220,45%,12%)]">
        {children}
        <Script id="crisp-chatbox" strategy="afterInteractive">
          {`
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "0f78aef6-518a-4713-92b4-6178b0dda2fd";
            (function() {
              var d = document;
              var s = d.createElement("script");
              s.src = "https://client.crisp.chat/l.js";
              s.async = 1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
