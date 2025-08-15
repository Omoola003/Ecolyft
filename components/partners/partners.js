"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Partner 1", logo: "/images/partners/logo1.png" },
  { name: "Partner 2", logo: "/images/partners/logo2.png" },
  { name: "Partner 3", logo: "/images/partners/logo3.png" },
  { name: "Partner 4", logo: "/images/partners/logo4.png" },
  { name: "Partner 5", logo: "/images/partners/logo5.png" },
  { name: "Partner 6", logo: "/images/partners/logo6.png" },
];

export default function PartnersShowcase() {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#2E8B57] uppercase font-semibold tracking-widest text-sm mb-2">
            Trusted By
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-boldBlack">
            Our Valued Partners
          </h2>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
