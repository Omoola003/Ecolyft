"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does EcoLyft provide?",
    answer:
      "EcoLyft offers sustainable waste pickup services, eco-friendly supply solutions, and partnership programs for businesses and organizations that want to reduce their environmental impact.",
  },
  {
    question: "How can I schedule a pickup?",
    answer:
      "You can request a pickup directly through our contact form or by calling our support line. Pickups are scheduled within 24–48 hours depending on your location.",
  },
  {
    question: "What materials do you collect?",
    answer:
      "We collect a wide range of recyclable and reusable materials including plastics, paper, glass, metals, and certain e-waste items. Hazardous waste is not accepted.",
  },
  {
    question: "Do you charge for household pickups?",
    answer:
      "Household pickups are free for standard recyclables. For bulk waste or special items, minimal service fees may apply.",
  },
  {
    question: "How can businesses partner with EcoLyft?",
    answer:
      "Businesses can join our partnership program to benefit from customized supply chains, waste management solutions, and eco-branding opportunities. Contact our team to get started.",
  },
  {
    question: "Do you provide consultation for organizations?",
    answer:
      "Yes! We offer free initial consultations and assessments to identify sustainable solutions tailored to your organization’s needs.",
  },
  {
    question: "How do I track the impact of my contributions?",
    answer:
      "EcoLyft provides detailed reports for business partners and impact updates for households, showing how your recycling and partnerships are making a difference.",
  },
  {
    question: "Where is EcoLyft located?",
    answer:
      "Our headquarters is at 123 Green Street, Eco City, EC 12345. We also serve surrounding communities with dedicated pickup and support teams.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open Monday–Friday, 9:00 AM – 5:00 PM EST. Urgent requests can be directed to our hotline for faster assistance.",
  },
  {
    question: "How quickly will I get a response after contacting EcoLyft?",
    answer:
      "We typically respond within 24 hours for all inquiries submitted through our form, email, or phone.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2E8B57] text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
          Find answers to common questions about our services, processes, and
          partnerships.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center text-left px-4 py-3 sm:px-6 sm:py-4 focus:outline-none"
              >
                <span className="text-base sm:text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-gray-700 text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
