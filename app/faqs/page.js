"use client";

import { faqs } from "@/data/faq";
import FAQSection from "@/components/FAQs/FAQSection";
import FAQHero from "@/components/FAQs/hero";
import FAQSupportCTA from "@/components/FAQs/FAQSupportCTA";

export default function FAQPage() {
  return (
    <>
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
    </>
  );
}
