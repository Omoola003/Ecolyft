"use client";

import { motion } from "framer-motion";

export default function PartnersCTA() {
  return (
    <section className="relative py-20 bg-[#2E8B57] overflow-hidden rounded-3xl mb-10">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Let’s Build a Sustainable Future, Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8"
        >
          Partner with Ecolyft to make measurable environmental impact and 
          empower communities. The time to act is now.
        </motion.p>

        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-block bg-white text-[#2E8B57] px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
        >
          Become a Partner Today
        </motion.a>
      </div>
    </section>
  );
}
