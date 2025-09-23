"use client";

import { motion } from "framer-motion";
import { Truck, Recycle, Building2 } from "lucide-react";

const services = [
  {
    icon: <Truck size={32} className="text-green-600" />,
    title: "Pickup (Trash2Cash)",
    description:
      "Convenient household pickup service that turns your plastic waste into immediate cash rewards.",
  },
  {
    icon: <Recycle size={32} className="text-green-600" />,
    title: "Flakes & Pellets (Recycle Forward)",
    description:
      "Premium quality recycled PET & HDPE materials for industrial manufacturing applications.",
  },
  {
    icon: <Building2 size={32} className="text-green-600" />,
    title: "Sustainable Solutions",
    description:
      "Branded recycling programs and impact reporting for businesses and communities.",
  },
];

export default function ProductsServices() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  const cardHover = "hover:scale-[1.03] hover:shadow-xl transition-all duration-300";

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2">
            Products & Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We Turn Everyday Plastic Waste Into Value and Measurable Impact.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`bg-gray-50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center ${cardHover}`}
              variants={fadeUp}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <motion.a
            href="/request-supply"
            className="inline-block bg-green-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:scale-105 hover:bg-green-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Request Supply
          </motion.a>
        </div>
      </div>
    </section>
  );
}
