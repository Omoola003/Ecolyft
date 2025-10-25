import { Montserrat, Merriweather } from 'next/font/google'
import './globals.css'
import Script from "next/script";
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import GoogleAnalytics from './ga/GoogleAnalytics'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: "EcoLyft Cycler Technology",
  description:
    "EcoLyft transforms waste into opportunity, driving circular economy growth and sustainable waste management solutions across Nigeria.",
  keywords: [
    "waste recycling Nigeria",
    "circular economy",
    "sustainable waste management",
    "EcoLyft technology",
  ],
  openGraph: {
    title: "EcoLyft Cycler Technology",
    description:
      "Transforming waste into economic opportunity through innovative recycling technology and circular economy solutions.",
    url: "https://ecolyft.com",
    siteName: "EcoLyft",
    images: [
      {
        url: "https://ecolyft.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EcoLyft circular technology banner",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoLyft Cycler Technology",
    description:
      "Transforming waste into economic opportunity across Nigeria.",
    images: ["https://ecolyft.com/og-image.jpg"],
    creator: "@EcoLyftNG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="9ICjtkXoehk2UUCBpeOwAZuKjg3vVbQ8z2KmdMjQfiU"
        />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5NXFTZXQ');
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${merriweather.variable} antialiased bg-white text-boldBlack`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NXFTZXQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <GoogleAnalytics />

        <Script
          id="structured-data-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EcoLyft Cycler Technology",
              url: "https://ecolyft.com",
              logo: "https://ecolyft.com/logo.png",
              description:
                "EcoLyft transforms waste into opportunity, driving circular economy growth and sustainable waste management solutions across Nigeria.",
              sameAs: [
                "https://www.linkedin.com/company/ecolyft",
                "https://twitter.com/EcoLyftNG",
                "https://facebook.com/ecolyft",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2348071116365",
                contactType: "Customer Service",
                areaServed: "NG",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
