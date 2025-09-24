"use client";

import { motion } from "framer-motion";
import { FaTruck, FaCogs, FaIndustry, FaShippingFast } from "react-icons/fa";

const processSteps = [
  {
    step: "01",
    title: "Collection",
    description: "Scheduled pickup from verified households and businesses.",
    icon: FaTruck,
  },
  {
    step: "02",
    title: "Processing",
    description: "Sorting, cleaning, and quality control at certified facilities.",
    icon: FaCogs,
  },
  {
    step: "03",
    title: "Manufacturing",
    description: "Converting waste into high-quality flakes and pellets.",
    icon: FaIndustry,
  },
  {
    step: "04",
    title: "Delivery",
    description: "Direct supply to industry partners with full traceability.",
    icon: FaShippingFast,
  },
];

export default function OurProcess() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E8B57] mb-4">
            Our Process
          </p>
          <h2 className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            From collection to delivery, transparency and quality at every step
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#EDFDF1] rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-green-600 text-white p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <Icon size={28} />
                </div>
                <span className="text-green-600 font-bold text-xl mb-2">{step.step}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
