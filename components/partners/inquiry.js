"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PartnerInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/partner-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          organization: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="inquiry" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E8B57] text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Submit Your Inquiry
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#2E8B57]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organization (Optional)
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              placeholder="EcoSolutions Inc."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#2E8B57]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="contact@ecosolutions.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#2E8B57]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 (800) 123-4567"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#2E8B57]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us more about your partnership interests..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-[#2E8B57]"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#2E8B57] text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-[#256d47] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Submitting..." : "Submit Inquiry"}
            </button>
          </div>

          {status === "success" && (
            <p className="text-green-600 text-center mt-4">
              Inquiry submitted successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-4">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
