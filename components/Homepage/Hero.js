"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const heroVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.25, ease: "easeOut" } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Recycling rotation
const recycleAnimation = {
  animate: {
    rotate: [0, 360],
    transition: { duration: 15, repeat: Infinity, ease: "linear" },
  },
};

// Breathing blob
const blobAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.6, 0.7, 0.6],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-14 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-50 via-white to-green-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          {/* Hero Image (top on mobile, right on desktop) */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center order-first md:order-last"
          >
            <motion.div
              className="absolute -z-10 w-[120%] h-[120%] rounded-full bg-green-100 blur-3xl"
              animate={blobAnimation.animate}
            />
            <motion.div {...recycleAnimation}>
              <Image
                src="/images/hero.png"
                alt="EcoLyft Recycling"
                width={480}
                height={360}
                className="w-full max-w-sm md:max-w-md h-auto object-contain relative z-10"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={heroVariants} className="text-left">
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
              className="flex flex-row flex-wrap gap-4"
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
        </motion.div>
      </div>
    </section>
  );
}
