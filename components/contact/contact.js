"use client";

import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";

const checklistItems = [
  "Quick response within 24 hours",
  "Free consultation and assessment",
  "Customized solutions for your needs",
];

const urgentInfo = {
  title: "For Urgent Requests",
  description:
    "Need immediate assistance or have time-sensitive partnership opportunities?",
  phone: "+234 (807) 111-6369",
};

export default function ContactFormSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FFF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-[#2E8B57] mb-3">
              Let&apos;s Talk
            </h2>
            <p className="text-gray-700 mb-5 text-sm">
              Whether you&apos;re interested in our pickup service, looking for
              sustainable supply solutions, or want to explore partnership
              opportunities, we&apos;re here to help.
            </p>

            <form className="space-y-4">
              {/* Name & Organization side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Company or organization name"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 801 234 5678"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Message full width */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your needs, questions, or partnership ideas..."
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-2.5 rounded-lg shadow-md hover:bg-green-500 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Top Right Section - Checklist */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-[#2E8B57]">
                Get Started Today
              </h3>
              <p className="text-gray-700">
                Join thousands of households and businesses already making a
                positive impact through EcoLyft&apos;s sustainable solutions.
              </p>
              <ul className="space-y-3 mt-2">
                {checklistItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
                      strokeWidth={2}
                    />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Right Section - Urgent Call */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-2xl font-bold text-[#2E8B57]">
                {urgentInfo.title}
              </h3>
              <p className="text-gray-700 mb-4">{urgentInfo.description}</p>
              <a
                href={`tel:${urgentInfo.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now: {urgentInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
