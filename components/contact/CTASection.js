"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#2E8B57] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Ready to Make an Impact?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl mb-8 text-green-100"
        >
          Every conversation is a step toward a more sustainable future. 
          Let&apos;s talk about how we can work together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/request-pickup"
            className="bg-white text-[#2E8B57] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
          >
            Request Pickup
          </a>
          <a
            href="/partners"
            className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
