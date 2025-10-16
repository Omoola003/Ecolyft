import Script from "next/script";
import ContactFormMap from "@/components/contact/contact";
import ContactInfoCards from "@/components/contact/contactcard";
import GoogleMapSection from "@/components/contact/contactmap";
import ContactHero from "@/components/contact/hero";
import FAQSection from "@/components/FAQs/faq";
import CTASection from "@/components/contact/CTASection";

// ✅ Static Metadata
export const metadata = {
  title: "Contact EcoLyft | Get in Touch for Partnerships & Recycling Solutions",
  description:
    "Reach out to EcoLyft for recycling pickups, industrial supply, or partnership inquiries. Quick response within 24 hours and personalized consultation for your needs.",
  keywords: [
    "EcoLyft contact",
    "EcoLyft phone number",
    "Recycling partnership Nigeria",
    "EcoLyft Lagos office",
    "EcoLyft email",
    "EcoLyft pickup request",
    "Sustainability collaboration",
  ],
  openGraph: {
    title: "Contact EcoLyft | Get in Touch for Partnerships & Recycling Solutions",
    description:
      "Have questions or want to collaborate? Contact EcoLyft for household pickups, industrial feedstock, or CSR partnership programs.",
    url: "https://ecolyft.vercel.app/contact",
    siteName: "EcoLyft",
    images: [
      {
        url: "https://ecolyft.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EcoLyft Contact Page",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact EcoLyft | Get in Touch for Partnerships & Recycling Solutions",
    description:
      "Contact EcoLyft for recycling solutions, partnerships, and sustainability consulting.",
    images: ["https://ecolyft.vercel.app/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://ecolyft.vercel.app/contact",
  },
};

// ✅ Page Component
export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "EcoLyft",
    image: "https://ecolyft.vercel.app/images/logo.png",
    url: "https://ecolyft.vercel.app",
    telephone: "+2348071116365",
    email: "info@ecolyft.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lekki, Lagos",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [
      "https://linkedin.com/company/ecolyft",
      "https://twitter.com/ecolyft",
      "https://instagram.com/ecolyft",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+2348071116365",
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        email: "info@ecolyft.com",
        contactType: "sales",
        areaServed: "NG",
      },
    ],
    potentialAction: {
      "@type": "CommunicateAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ecolyft.vercel.app/contact",
        actionPlatform: [
          "https://www.ecolyft.vercel.app",
          "https://m.ecolyft.vercel.app",
        ],
      },
      name: "Submit Contact Form",
      description:
        "Reach out for recycling services, partnership inquiries, or consultations through the contact form.",
    },
  };

  return (
    <main className="flex flex-col">
      {/* --- SEO Structured Data --- */}
      <Script
        id="json-ld-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ContactHero />
      <ContactInfoCards />
      <ContactFormMap />
      <GoogleMapSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
