"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-r from-green-700 to-green-500 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Build the Future. Live Sustainably.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
        >
          Join the circular economy revolution. Every action counts, every partnership matters.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="/request-pickup"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Request a Pickup
          </a>
          <a
            href="/partner"
            className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition-all duration-300"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
