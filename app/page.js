import Script from "next/script";
import AboutPreview from "@/components/Homepage/AboutPreview";
import CTASection from "@/components/Homepage/cta";
import Hero from "@/components/Homepage/Hero";
import HowItWorks from "@/components/Homepage/HowItWorks";
import TrustedBy from "@/components/Homepage/industry";
import Services from "@/components/Homepage/services";

export const metadata = {
  title: "Ecolyft | Sustainable Business Loans & Financial Growth Solutions",
  description:
    "Ecolyft helps individuals and businesses access sustainable financial support through fast, transparent, and impactful loans that drive real growth.",
  keywords: [
    "business loans Nigeria",
    "personal loans",
    "green financing",
    "SME growth funding",
    "sustainable finance platform",
  ],
  openGraph: {
    title: "Ecolyft | Empowering Financial Growth for Businesses & Individuals",
    description:
      "Access business and personal loans designed for sustainable impact. Join thousands growing with Ecolyft.",
    url: "https://ecolyft.vercel.app",
    siteName: "Ecolyft",
    images: [
      {
        url: "https://ecolyft.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecolyft – Empowering Financial Growth",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecolyft | Sustainable Business & Personal Loans",
    description:
      "Empowering Africa’s entrepreneurs through accessible, transparent, and sustainable finance.",
    images: ["https://ecolyft.vercel.app/og-image.jpg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ecolyft",
    url: "https://ecolyft.vercel.app",
    logo: "https://ecolyft.vercel.app/logo.png",
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
