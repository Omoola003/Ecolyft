"use client";

import { motion } from "framer-motion";

export default function PartnerInquiryForm() {
  return (
    <section id="inquiry" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E8B57] text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Submit Your Inquiry
        </motion.h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2E8B57] focus:ring-[#2E8B57] text-gray-900"
              required
            />
          </div>

          {/* Organization */}
          <div>
            <label
              htmlFor="organization"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              placeholder="EcoSolutions Inc."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2E8B57] focus:ring-[#2E8B57] text-gray-900"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="contact@ecosolutions.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2E8B57] focus:ring-[#2E8B57] text-gray-900"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 123-4567"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2E8B57] focus:ring-[#2E8B57] text-gray-900"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us more about your partnership interests..."
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-[#2E8B57] focus:ring-[#2E8B57] text-gray-900"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#2E8B57] text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-[#256d47] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E8B57] transition-colors"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
