"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, ease: "easeOut" } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  },
};

export default function Hero() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-50 via-white to-green-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column: Text */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(1.9rem,5vw,3.5rem)] font-bold text-[#2E8B57] leading-tight mb-4"
            >
              We Turn Your Everyday Plastic Waste Into Value.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 max-w-xl"
            >
              Recycle with <strong>EcoLyft</strong> and turn bottles and bags into{" "}
              <strong>cash in your pocket</strong> and{" "}
              <strong>cleaner, affordable materials for businesses</strong>. One
              simple pickup creates impact for you, your community, and the planet.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/request-pickup"
                className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-green-500 transition"
              >
                Request a Pickup
              </Link>
              <Link
                href="/partners"
                className="border border-green-600 text-green-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-green-500 hover:text-white transition"
              >
                Partner With Us
              </Link>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-sm text-gray-600"
            >
              🌍 Over <strong>1,000 bottles</strong> recycled and counting.
            </motion.p>
          </motion.div>

          {/* Right Column: Visual with blob */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center"
          >
            <div className="absolute -z-10 w-[120%] h-[120%] rounded-full bg-green-100 blur-3xl opacity-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <Image
              src="/images/hero.png" // transparent PNG/SVG works best
              alt="EcoLyft Recycling"
              width={480}
              height={360}
              className="w-full max-w-sm md:max-w-md h-auto object-contain relative z-10"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
