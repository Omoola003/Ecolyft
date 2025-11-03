import ImpactCounter from "@/components/AboutUs/ourImpact";
import TrustedBy from "@/components/Homepage/industry";
import ImpactHero from "@/components/impact/hero";
import SuccessStories from "@/components/impact/stories";
import Script from "next/script";

export const metadata = {
  title: "Our Impact | Ecolyft – Creating a Cleaner Future",
  description:
    "See how Ecolyft empowers communities through recycling programs, waste-to-wealth initiatives, and environmental education across Nigeria.",
  keywords: [
    "Ecolyft impact",
    "community recycling Nigeria",
    "waste management programs",
    "environmental sustainability",
    "Ecolyft success stories",
  ],
  alternates: {
    canonical: "https://www.ecolyft.com/impact",
  },
  openGraph: {
    title: "Ecolyft Community Impact | Real Change, Real Results",
    description:
      "Discover Ecolyft’s measurable impact — from tons of waste recycled to communities empowered through our sustainability initiatives.",
    url: "https://www.ecolyft.com/impact",
    siteName: "Ecolyft",
    images: [
      {
        url: "https://www.ecolyft.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecolyft Impact – Recycling for a Cleaner Future",
      },
    ],
    locale: "en_NG",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecolyft Community Impact | Creating a Cleaner Future",
    description:
      "From waste-to-wealth programs to school recycling challenges, Ecolyft is driving community transformation across Nigeria.",
    images: ["https://www.ecolyft.com/og-image.jpg"],
    creator: "@ecolyft",
  },
};

export default function Impact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Ecolyft",
    url: "https://www.ecolyft.com/impact",
    logo: "https://www.ecolyft.com/logo.png",
    description:
      "Ecolyft drives sustainability through recycling, community empowerment, and waste-to-wealth programs across Nigeria.",
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    sponsor: {
      "@type": "Organization",
      name: "Ecolyft Partners",
    },
    hasPart: [
      {
        "@type": "Project",
        name: "Waste-to-Wealth Program – Lagos",
        description:
          "Empowered 120+ households by turning recyclables into income streams.",
        numberOfParticipants: 120,
        measurableImpact: {
          "@type": "QuantitativeValue",
          value: 15,
          unitText: "tons of waste recycled in 6 months",
        },
      },
      {
        "@type": "Project",
        name: "School Recycling Challenge – Abuja",
        description:
          "Educated 2,000+ students on sustainable waste management.",
        numberOfParticipants: 2000,
        measurableImpact: {
          "@type": "QuantitativeValue",
          value: 3.5,
          unitText: "tons of plastic diverted from landfills",
        },
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.ecolyft.com/impact",
    },
  };

  return (
    <main className="flex flex-col">
      {/* JSON-LD Structured Data */}
      <Script
        id="impact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QM42Y2GB9K"
        strategy="afterInteractive"
      />
      <Script id="ga-impact" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QM42Y2GB9K', {
            page_path: '/impact'
          });
        `}
      </Script>

      {/* Page Sections */}
      <ImpactHero />
      <SuccessStories />
      <ImpactCounter />
      <TrustedBy />
    </main>
  );
}
