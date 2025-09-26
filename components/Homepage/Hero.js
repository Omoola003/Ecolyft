"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <section className="relative w-full h-[500px] flex items-start pt-24 pb-16 sm:pb-20">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg" // <-- replace with your chosen bg image
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#EDFDF1]/50" /> {/* overlay */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse md:flex-row items-start gap-10 md:gap-16">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex-1 text-left md:text-left"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2rem,6vw,3.5rem)] font-bold text-[#2E8B57] leading-tight mb-4"
          >
            Turn Your Plastic Into Power
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto md:mx-0"
          >
            Every bottle and bag you recycle with <strong>EcoLyft</strong>{" "}
            becomes <strong>instant cash in your pocket</strong> and{" "}
            <strong>cleaner materials for businesses</strong>. Together, we’re
            rewriting the story of waste—one pickup at a time.
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
              href="/partners"
              className="inline-block bg-transparent border border-green-600 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-green-400 hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
            >
              Partner With Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
