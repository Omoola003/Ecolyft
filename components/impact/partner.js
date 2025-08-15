"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Green Earth Initiative", logo: "/images/partners/green-earth.png" },
  { name: "Waste-Free Africa", logo: "/images/partners/waste-free.png" },
  { name: "EcoGov Agency", logo: "/images/partners/ecogov.png" },
  { name: "RecyclePlus", logo: "/images/partners/recycleplus.png" },
  { name: "Clean City Project", logo: "/images/partners/clean-city.png" },
  { name: "Nature Alliance", logo: "/images/partners/nature-alliance.png" },
];

export default function ImpactPartners() {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm">
            Community Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-boldBlack">
            Collaborating for Greater Impact
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Our work is amplified by a network of passionate organizations, 
            agencies, and communities committed to sustainability and a cleaner future.
          </p>
        </motion.div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
