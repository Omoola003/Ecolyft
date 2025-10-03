"use client";

import { useState } from "react";
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
  phone: "+234 (807) 111-6365",
};

export default function ContactFormSection() {
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
      const res = await fetch("/api/contact", {
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
        setTimeout(() => {
          setStatus(null);
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

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
            <h2 className="text-2xl font-bold text-[#2E8B57] mb-3">Let&apos;s Talk</h2>
            <p className="text-gray-700 mb-5 text-sm">
              Whether you&apos;re interested in our pickup service, looking for
              sustainable supply solutions, or want to explore partnership
              opportunities, we&apos;re here to help.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
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
                    placeholder="Company or organization name"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+234 801 234 5678"
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your needs, questions, or partnership ideas..."
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full font-semibold py-2.5 rounded-lg shadow-md transition-all duration-300 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed
                  ${
                    status === "success"
                      ? "bg-green-700 text-white"
                      : status === "error"
                      ? "bg-red-600 text-white hover:bg-red-500"
                      : "bg-green-600 text-white hover:bg-green-500"
                  }`}
              >
                {status === "loading" && "Sending..."}
                {status === "success" && "Message sent successfully!"}
                {status === "error" && "Something went wrong. Please try again."}
                {!status && "Send Message"}
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
            {/* Checklist */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-[#2E8B57]">Get Started Today</h3>
              <p className="text-gray-700">
                Join thousands of households and businesses already making a
                positive impact through EcoLyft&apos;s sustainable solutions.
              </p>
              <ul className="space-y-3 mt-2">
                {checklistItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" strokeWidth={2} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Urgent Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-2xl font-bold text-[#2E8B57]">{urgentInfo.title}</h3>
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
