import Script from "next/script";
import AboutPreview from "@/components/Homepage/AboutPreview";
import CTASection from "@/components/Homepage/cta";
import Hero from "@/components/Homepage/Hero";
import HowItWorks from "@/components/Homepage/HowItWorks";
import TrustedBy from "@/components/Homepage/industry";
import Services from "@/components/Homepage/services";

export const metadata = {
  title: "EcoLyft | Turning Plastic Waste into Value in Nigeria",
  description:
    "EcoLyft helps households and businesses convert everyday plastic waste into cash and high-quality industrial feed-stocks — building Nigeria’s circular economy infrastructure.",
  keywords: [
    "EcoLyft Nigeria",
    "plastic recycling Nigeria",
    "circular economy Nigeria",
    "waste to resource Nigeria",
    "industrial feedstock recycling"
  ],
  openGraph: {
    title: "EcoLyft | Waste-to-Resource & Circular Economy Solutions",
    description:
      "From household pickups to industrial feedstocks — EcoLyft empowers communities and manufacturers to build a sustainable future.",
    url: "https://www.ecolyft.com",
    siteName: "EcoLyft",
    images: [
      {
        url: "https://www.ecolyft.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EcoLyft – Turn your plastic waste into value"
      }
    ],
    locale: "en_NG",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoLyft | Plastic Waste into Value",
    description:
      "Households. Businesses. Industry. Join Nigeria’s circular economy with EcoLyft’s waste-to-resource platform.",
    images: ["https://www.ecolyft.com/og-image.jpg"]
  },
  alternates: {
    canonical: "https://www.ecolyft.com",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ecolyft",
    url: "https://www.ecolyft.com",
    logo: "https://www.ecolyft.com/logo.png",
    sameAs: [
      "https://twitter.com/ecolyft",
      "https://linkedin.com/company/ecolyft",
      "https://facebook.com/ecolyft",
    ],
    description:
      "Ecolyft provides sustainable financial solutions — empowering businesses and individuals with fast, transparent, and impactful loans.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2348071116365",
      contactType: "Customer Support",
      areaServed: "NG",
      availableLanguage: ["English"],
    },
  };

  return (
    <main className="flex flex-col">
      {/* --- SEO Structured Data --- */}
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- Google Analytics Event Tracker --- */}
      <Script id="ga-events" strategy="afterInteractive">
        {`
          window.addEventListener("DOMContentLoaded", () => {
            const ctaButtons = document.querySelectorAll("button, a");
            ctaButtons.forEach((el) => {
              if (el.textContent.toLowerCase().includes("get started")) {
                el.addEventListener("click", () => {
                  if (window.gtag) {
                    window.gtag("event", "cta_click", {
                      event_category: "Homepage",
                      event_label: "Get Started Button",
                    });
                  }
                });
              }
            });
          });
        `}
      </Script>

      {/* --- Homepage Sections --- */}
      <Hero />
      <HowItWorks />
      <AboutPreview />
      <Services />
      <TrustedBy />
      <CTASection />
    </main>
  );
}
