"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/services/eco-services.jpg"
              alt="Eco Services"
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
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Innovative Eco Solutions
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              At EcoLyft, we design tailored sustainability programs that help communities,
              businesses, and governments reduce waste, improve recycling rates, and
              foster a greener future.
            </p>
            <a
              href="#services-list"
              className="inline-flex items-center font-semibold text-[#2E8B57] hover:underline"
            >
              Explore Our Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}