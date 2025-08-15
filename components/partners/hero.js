"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnersHero() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2E8B57] uppercase font-semibold tracking-widest text-sm mb-2">
            Our Partners
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-boldBlack leading-snug mb-4">
            Building a Greener Future Together
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            At Ecolyft, we believe collaboration is key to sustainable impact.
            Together with our partners, we create solutions that transform waste
            into resources, foster community engagement, and protect the planet.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#2E8B57] text-white px-6 py-3 rounded-full font-medium hover:bg-[#246b45] transition-all duration-300"
          >
            Become a Partner
          </a>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/partners-hero.jpg" // Replace with actual image path
            alt="Ecolyft partnerships"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
