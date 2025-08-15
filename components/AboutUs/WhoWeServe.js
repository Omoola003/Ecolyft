"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    name: "Residential Communities",
    description:
      "We partner with residential areas to provide organized waste collection and educational programs for households.",
    image: "/images/industries/residential.jpg",
  },
  {
    name: "Schools & Universities",
    description:
      "Educational institutions benefit from our recycling programs, workshops, and student engagement activities.",
    image: "/images/industries/schools.png",
  },
  {
    name: "Corporate Offices",
    description:
      "We help businesses reduce waste and meet sustainability goals through smart recycling and consultancy.",
    image: "/images/industries/office.jpg",
  },
  {
    name: "Local Governments",
    description:
      "We assist municipalities in designing scalable waste management strategies and community awareness campaigns.",
    image: "/images/industries/government.png",
  },
];

export default function WhoWeServe() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm sm:text-base"
        >
          WHO WE SERVE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-16 leading-snug max-w-3xl mx-auto"
        >
          Tailored Solutions for Every Sector
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Image */}
          <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={industries[activeIdx].image}
                  alt={industries[activeIdx].name}
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Tabs & Description */}
          <div className="flex-1 flex flex-col md:justify-left gap-4">
            <div className="flex flex-wrap gap-4 mb-6 justify-left md:justify-start">
              {industries.map((industry, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  aria-pressed={activeIdx === idx}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                    activeIdx === idx
                      ? "bg-[#2E8B57] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-[#2E8B57]/20"
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="text-gray-700 text-base sm:text-lg"
              >
                {industries[activeIdx].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
