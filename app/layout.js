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
    url: "https://ecolyft.vercel.app",
    siteName: "EcoLyft",
    images: [
      {
        url: "https://ecolyft.vercel.app/og-image.jpg", // replace with your hero image
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
    images: ["https://ecolyft.vercel.app/og-image.jpg"],
    creator: "@EcoLyftNG", // optional if you have a handle
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${merriweather.variable} antialiased bg-white text-boldBlack`}
      >
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
                url: "https://ecolyft.vercel.app",
                logo: "https://ecolyft.vercel.app/logo.png",
                description:
                  "EcoLyft transforms waste into opportunity, driving circular economy growth and sustainable waste management solutions across Nigeria.",
                sameAs: [
                  "https://www.linkedin.com/company/ecolyft",
                  "https://twitter.com/EcoLyftNG", // add your real handles if available
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
