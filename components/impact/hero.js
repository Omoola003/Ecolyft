"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImpactHero() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/impact-hero.webp" // Replace with your static image path
            alt="Ecolyft community impact"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[#2E8B57] uppercase font-semibold tracking-widest text-sm mb-2">
            Our Impact
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-boldBlack leading-snug mb-4">
            Creating a Cleaner Future, One Community at a Time
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            At Ecolyft, we measure success by the positive change we create.
            From tons of waste recycled to communities empowered, our mission is
            driven by real, lasting impact.
          </p>

          {/* CTA Button */}
          <a
            href="/brochures/ecolyft-brochure.pdf"
            download
            className="inline-block bg-[#2E8B57] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#256b45] transition-colors duration-300"
          >
            Download Brochure
          </a>
        </motion.div>
      </div>
    </section>
  );
}
