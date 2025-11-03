import PartnerBenefits from "@/components/partners/benefits";
import PartnersCTA from "@/components/partners/cta";
import PartnersHero from "@/components/partners/hero";
import PartnerImageSection from "@/components/partners/imageheader";
import SharedVisionSection from "@/components/partners/vision";
import PartnerInquiryForm from "@/components/partners/inquiry";
import FAQSection from "@/components/FAQs/faq";
import Script from "next/script";

export const metadata = {
  title: "Partner With Us | Ecolyft – Sustainable Business Partnerships",
  description:
    "Collaborate with Ecolyft to promote sustainable waste management, enhance your ESG impact, and join a network of eco-driven organizations across Nigeria.",
  keywords: [
    "Ecolyft partnership",
    "sustainability collaboration",
    "eco business partnership",
    "recycling partnership Nigeria",
    "ESG initiatives",
  ],
  alternates: {
    canonical: "https://www.ecolyft.com/partners",
  },
  openGraph: {
    title: "Partner With Ecolyft | Drive Sustainable Impact Together",
    description:
      "Join Ecolyft’s partnership network to advance recycling, waste management innovation, and community empowerment across Nigeria.",
    url: "https://www.ecolyft.com/partners",
    siteName: "Ecolyft",
    images: [
      {
        url: "https://www.ecolyft.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecolyft Partnership Program",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner With Ecolyft | Build a Greener Future Together",
    description:
      "Collaborate with Ecolyft to drive sustainability, innovation, and measurable environmental impact.",
    images: ["https://www.ecolyft.com/og-image.jpg"],
    creator: "@ecolyft",
  },
};

export default function Partners() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ecolyft",
    url: "https://www.ecolyft.com/partners",
    logo: "https://www.ecolyft.com/logo.png",
    description:
      "Ecolyft partners with organizations and communities to advance recycling innovation and sustainable impact across Nigeria.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Partnership Inquiries",
      email: "info@ecolyft.com",
      telephone: "+2348071116365",
      areaServed: "NG",
      availableLanguage: ["English"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ecolyft Partnership Benefits",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Sustainable Impact",
          description:
            "Collaborate on waste management programs that reduce pollution and promote circular economy models.",
        },
        {
          "@type": "Offer",
          name: "Enhanced Visibility",
          description:
            "Gain exposure through Ecolyft’s sustainability campaigns and shared communication platforms.",
        },
        {
          "@type": "Offer",
          name: "Collaborative Growth",
          description:
            "Join a network of forward-thinking organizations committed to a cleaner future.",
        },
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.ecolyft.com/partners",
    },
  };

  return (
    <main className="flex flex-col">
      {/* JSON-LD structured data */}
      <Script
        id="partners-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Google Analytics tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QM42Y2GB9K"
        strategy="afterInteractive"
      />
      <Script id="ga-partners" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QM42Y2GB9K', {
            page_path: '/partners'
          });
        `}
      </Script>

      {/* Page sections */}
      <PartnersHero />
      <PartnerImageSection />
      <PartnerBenefits />
      <SharedVisionSection />
      <PartnerInquiryForm />
      <FAQSection />
      <PartnersCTA />
    </main>
  );
}
