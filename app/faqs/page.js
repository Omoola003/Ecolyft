import Script from "next/script";
import { faqs } from "@/data/faq";
import FAQSection from "@/components/FAQs/FAQSection";
import FAQHero from "@/components/FAQs/hero";
import FAQSupportCTA from "@/components/FAQs/FAQSupportCTA";

// ✅ Static Metadata
export const metadata = {
  title: "EcoLyft FAQ | Recycling Services, Partnerships & Operations",
  description:
    "Find quick answers to common questions about EcoLyft’s recycling pickups, payments, products, and partnerships. Learn how to join our circular economy movement.",
  keywords: [
    "EcoLyft FAQ",
    "EcoLyft recycling questions",
    "EcoLyft partnership",
    "EcoLyft payment",
    "EcoLyft pickup schedule",
    "EcoLyft plastics accepted",
  ],
  openGraph: {
    title: "EcoLyft FAQ | Recycling Services, Partnerships & Operations",
    description:
      "Get answers to frequently asked questions about EcoLyft’s recycling services, materials, and corporate sustainability programs.",
    url: "https://www.ecolyft.com/faq",
    siteName: "EcoLyft",
    images: [
      {
        url: "https://www.ecolyft.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EcoLyft FAQ Page",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoLyft FAQ | Recycling Services, Partnerships & Operations",
    description:
      "Answers to top EcoLyft questions — from pickups and payments to sustainable partnerships.",
    images: ["https://www.ecolyft.com/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.ecolyft.com/faq",
  },
};

// ✅ Page Component
export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does EcoLyft contribute to sustainable operations?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "EcoLyft builds accessible recycling networks and transforms plastic waste into high-value materials for industry, promoting circular economy growth.",
        },
      },
      {
        "@type": "Question",
        name: "What types of plastics does EcoLyft accept for recycling?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "EcoLyft accepts PET bottles, HDPE containers, and PP plastics from households and businesses for responsible recycling.",
        },
      },
      {
        "@type": "Question",
        name: "How do I schedule a pickup for my recyclable materials?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You can schedule a pickup through the EcoLyft platform or contact our team directly. Pickups are available weekly or on demand.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods are accepted for recycling services?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "EcoLyft rewards users in EcoKoins, redeemable as cash transfers or product discounts through verified payment partners.",
        },
      },
      {
        "@type": "Question",
        name: "How can my business get started with a partnership?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Businesses can partner with EcoLyft by reaching out via our contact page to design tailored recycling or CSR programs.",
        },
      },
    ],
  };

  return (
    <main className="flex flex-col">
      {/* --- SEO Structured Data (FAQ Rich Results) --- */}
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <FAQHero />
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((section, i) => (
            <FAQSection
              key={i}
              category={section.category}
              items={section.items}
            />
          ))}
        </div>
      </section>
      <FAQSupportCTA />
    </main>
  );
}
