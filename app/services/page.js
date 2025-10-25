import Script from "next/script";
import ServicesHero from "@/components/services/hero";
import ProcessTimeline from "@/components/services/process";
import ServicesList from "@/components/services/serviceslist";
import WhyChooseUs from "@/components/services/why";
import ServicesCTA from "@/components/services/servicecta";

// ✅ SEO Metadata
export const metadata = {
  title: "EcoLyft Services | Circular Economy Solutions for Homes & Industry",
  description:
    "Explore EcoLyft’s full range of recycling and sustainability services — from household pickups (Trash2Cash) to industrial recycled feedstock supply and corporate CSR programs.",
  keywords: [
    "EcoLyft services",
    "Recycling solutions Nigeria",
    "Trash2Cash pickup",
    "Recycled PET HDPE materials",
    "Corporate recycling program",
    "Sustainable supply chain Nigeria",
    "Waste management services",
  ],
  openGraph: {
    title: "EcoLyft Services | Circular Economy Solutions for Homes & Industry",
    description:
      "EcoLyft connects households and industries in the circular economy — from plastic pickup to premium recycled materials and corporate recycling programs.",
    url: "https://ecolyft.com/services",
    siteName: "EcoLyft",
    images: [
      {
        url: "https://ecolyft.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EcoLyft Services - Circular Economy Solutions",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoLyft Services | Circular Economy Solutions for Homes & Industry",
    description:
      "Discover EcoLyft’s innovative recycling and sustainability services for homes, industries, and corporate partners.",
    images: ["https://ecolyft.com/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ecolyft.com/services",
  },
};

// ✅ Page Component
export default function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "EcoLyft Recycling & Sustainability Services",
    provider: {
      "@type": "Organization",
      name: "EcoLyft",
      url: "https://ecolyft.com",
      logo: "https://ecolyft.com/images/logo.png",
      sameAs: [
        "https://linkedin.com/company/ecolyft",
        "https://instagram.com/ecolyft",
        "https://twitter.com/ecolyft",
      ],
    },
    areaServed: {
      "@type": "Place",
      name: "Nigeria",
    },
    serviceType: [
      "Trash2Cash Pickup Service",
      "Recycled Feedstock Supply",
      "Corporate & Community Recycling Solutions",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "EcoLyft Service Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trash2Cash Pickup",
            description:
              "Transform your household plastic waste into cash rewards. We collect PET, PP, and HDPE from households weekly or on-demand.",
            areaServed: "Urban and suburban zones",
            offers: {
              "@type": "Offer",
              price: "1500",
              priceCurrency: "NGN",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                value: "10",
                unitCode: "KGM",
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sustainable Feedstock (Recycle Forward)",
            description:
              "Industrial-grade recycled PET & HDPE flakes and pellets for manufacturing and production purposes.",
            offers: {
              "@type": "Offer",
              priceCurrency: "NGN",
              eligibleQuantity: {
                "@type": "QuantitativeValue",
                value: "5000",
                unitCode: "KGM",
              },
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sustainable Solutions (Corporate Recycling)",
            description:
              "Custom recycling programs for organizations and communities with measurable CSR impact and quarterly reporting.",
          },
        },
      ],
    },
    termsOfService: "https://ecolyft.com/terms",
  };

  return (
    <main className="flex flex-col">
      {/* --- SEO Structured Data --- */}
      <Script
        id="json-ld-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServicesHero />
      <ServicesList />
      <WhyChooseUs />
      <ProcessTimeline />
      <ServicesCTA />
    </main>
  );
}
