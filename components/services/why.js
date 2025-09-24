"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaRecycle, FaClipboardCheck } from "react-icons/fa";

const highlights = [
  {
    title: "Guaranteed Quality",
    description: "Rigorously testing ensures all materials meet industry standards.",
    icon: FaCheckCircle,
  },
  {
    title: "Sustainable Supply",
    description: "Reliable sourcing from our verified collection network.",
    icon: FaRecycle,
  },
  {
    title: "ESG Compliance",
    description: "Detailed reporting for your sustainability goals and transparency.",
    icon: FaClipboardCheck,
  },
];

export default function WhyChooseEcoLyft() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FFF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E8B57] mb-4">
            Why Choose EcoLyft
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Trusted by industry leaders for reliable, sustainable supply chain solutions.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-green-600 text-white p-3 rounded-full inline-flex items-center justify-center mb-2">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#2E8B57]">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
