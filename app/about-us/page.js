import Script from "next/script";
import OurCommitment from "@/components/AboutUs/commitement";
import AboutHero from "@/components/AboutUs/hero";
import MissionValues from "@/components/AboutUs/mission";
import ImpactCounter from "@/components/AboutUs/ourImpact";
import OurStory from "@/components/AboutUs/OurStory";
import OurTeam from "@/components/AboutUs/OurTeam";
import CTASection from "@/components/Homepage/cta";
import TrustedBy from "@/components/Homepage/industry";

// ✅ Static Metadata
export const metadata = {
  title: "About EcoLyft | Building Africa’s Circular Economy",
  description:
    "Learn about EcoLyft’s mission to make recycling accessible and profitable. Discover our story, values, commitments, and the impact we’re creating across communities.",
  keywords: [
    "EcoLyft",
    "About EcoLyft",
    "Recycling in Africa",
    "Circular economy Nigeria",
    "Sustainability initiative",
    "Waste management startup",
  ],
  openGraph: {
    title: "About EcoLyft | Building Africa’s Circular Economy",
    description:
      "EcoLyft is redefining waste management in Africa — turning plastic waste into value for people, businesses, and the planet.",
    url: "https://www.ecolyft.com/about-us",
    siteName: "EcoLyft",
    images: [
      {
        url: "https://www.ecolyft.com/images/What-we-do.jpg",
        width: 1200,
        height: 630,
        alt: "EcoLyft Team at work",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About EcoLyft | Building Africa’s Circular Economy",
    description:
      "Learn about EcoLyft’s mission to make recycling accessible and profitable across Africa.",
    images: ["https://www.ecolyft.com/images/Us-in-action.jpg"],
  },
  alternates: {
    canonical: "https://www.ecolyft.com/about-us",
  },
};

// ✅ Page Component
export default function AboutUs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EcoLyft",
    url: "https://www.ecolyft.com",
    logo: "https://www.ecolyft.com/images/logo.png",
    sameAs: [
      "https://linkedin.com/company/ecolyft",
      "https://instagram.com/ecolyft",
      "https://twitter.com/ecolyft",
    ],
    description:
      "EcoLyft is a Nigerian circular economy startup creating accessible recycling systems and sustainable community impact.",
    founder: {
      "@type": "Person",
      name: "Benita Udi",
      jobTitle: "Founder & CEO",
      sameAs: [
        "https://linkedin.com/in/benitaudi",
        "https://twitter.com/benitaudi",
      ],
    },
    foundingDate: "2025",
    foundingLocation: {
      "@type": "Place",
      name: "Lagos, Nigeria",
    },
    areaServed: {
      "@type": "Place",
      name: "Nigeria",
    },
  };

  return (
    <main className="flex flex-col">
      {/* --- SEO Structured Data --- */}
      <Script
        id="json-ld-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AboutHero />
      <OurStory />
      <MissionValues />
      <OurCommitment />
      <OurTeam />
      <ImpactCounter />
      <TrustedBy />
      <CTASection />
    </main>
  );
}
