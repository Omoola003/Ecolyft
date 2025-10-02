"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-[#EDFDF1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E8B57] mb-6"
        >
          Ready to Get Started?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 text-lg sm:text-xl mb-10"
        >
          Join thousands of households and industry partners already benefiting
          from EcoLyft&apos;s sustainable solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <Link
            href="#"
            className="bg-green-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-green-500 transition-all duration-300"
          >
            Request Supply
          </Link>

          <Link
            href="/partners"
            className="bg-white text-green-600 border border-green-600 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-green-100 transition-all duration-300"
          >
            Partner With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
