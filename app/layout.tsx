import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { getPricingAmount } from '@/data/pricing';

const defaultDescription =
  'Bosphoras accompagne investisseurs, entrepreneurs et familles exigeantes en Turquie avec un bureau privé unique : installation, fiscalité, immobilier, santé, conciergerie VIP et accès confidentiel.';

const ogImage = '/images/og-default.jpg';
const googleAnalyticsId = 'G-LV3SEJ5QM2';

const pricingSync = {
  annualAdmission: getPricingAmount('annualAdmission'),
  monthlyRetainer: getPricingAmount('monthlyRetainer'),
  privateDesk: getPricingAmount('privateDesk'),
};

export const metadata: Metadata = {
  title: {
    default: 'Bosphoras — Bureau Privé en Turquie',
    template: '%s | Bosphoras',
  },
  description: defaultDescription,
  metadataBase: new URL('https://bosphoras.com'),
  openGraph: {
    title: 'Bosphoras — Bureau Privé en Turquie',
    description: defaultDescription,
    siteName: 'Bosphoras',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Bosphoras — Bureau Privé en Turquie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bosphoras — Bureau Privé en Turquie',
    description: defaultDescription,
    images: [ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-[hsl(45,30%,96%)] font-sans antialiased text-[hsl(220,45%,12%)]">
        {children}
        <Script id="bosphoras-pricing-sync" strategy="afterInteractive">
          {`
            (function() {
              var pricing = ${JSON.stringify(pricingSync)};
              var replacements = [
                [/10\\s*000 USD/g, pricing.annualAdmission],
                [/10,000 USD/g, pricing.annualAdmission],
                [/1\\s*000 USD/g, pricing.monthlyRetainer],
                [/1,000 USD/g, pricing.monthlyRetainer],
                [/6\\s*000 USD/g, pricing.privateDesk],
                [/6,000 USD/g, pricing.privateDesk]
              ];

              function replaceTextNode(node) {
                var value = node.nodeValue;
                if (!value || !/(10\\s*000|10,000|1\\s*000|1,000|6\\s*000|6,000) USD/.test(value)) return;
                replacements.forEach(function(pair) {
                  value = value.replace(pair[0], pair[1]);
                });
                node.nodeValue = value;
              }

              function walk(root) {
                var walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, {
                  acceptNode: function(node) {
                    if (!node.nodeValue || !/(10\\s*000|10,000|1\\s*000|1,000|6\\s*000|6,000) USD/.test(node.nodeValue)) {
                      return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                  }
                });
                var nodes = [];
                while (walker.nextNode()) nodes.push(walker.currentNode);
                nodes.forEach(replaceTextNode);
              }

              walk(document.body);
              var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                  mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 3) replaceTextNode(node);
                    if (node.nodeType === 1) walk(node);
                  });
                });
              });
              observer.observe(document.body, { childList: true, subtree: true });
            })();
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
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
