"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="relative w-full bg-[#EDFDF1] flex items-start pt-30 pb-12 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse md:flex-row items-start gap-10 md:gap-16">
        
        {/* Left Column: Text Content */}
        <motion.div
          className="flex-1 text-left md:text-left"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2rem,6vw,4rem)] font-bold text-[#2E8B57] leading-tight mb-4"
          >
            Reimagining Waste
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto md:mx-0"
          >
            EcoLyft transforms <strong>PLASTIC waste</strong> into{" "}
            <strong>cash for households</strong> and{" "}
            <strong>high-quality recycled materials for industry</strong>. Join
            us in building a sustainable future.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/request-pickup"
              className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-green-500 transition-all duration-300 text-center text-sm sm:text-base"
            >
              Request a Pickup
            </Link>

            <Link
              href="/contact"
              className="inline-block bg-transparent border border-green-600 text-boldBlack font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-green-400 transition-all duration-300 text-center text-sm sm:text-base"
            >
              Partner With Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div
          className="flex-1 w-full flex justify-center items-center"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-none h-[250px] sm:h-[350px] md:h-[420px]">
            <Image
              src="/images/hero.png"
              alt="EcoLyft Hero"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
