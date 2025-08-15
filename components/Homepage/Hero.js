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
    <section className="relative w-full flex items-center overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="EcoLyft Hero"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center max-w-lg md:max-w-2xl text-white py-16 sm:py-20 md:py-0"
          >
            {/* Intro Text */}
            <motion.p
              variants={itemVariants}
              className="uppercase tracking-widest text-[#FFD700] font-semibold mb-3 text-xs sm:text-sm"
            >
              WELCOME TO ECOLYFT
            </motion.p>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-snug sm:leading-tight mb-4"
            >
              Reimagining Waste.
              <br className="hidden sm:block" />
              Building a Greener Nigeria.
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-white/90 mb-6 leading-relaxed"
            >
              At EcoLyft, we transform waste into wealth through innovative
              recycling and circular economy solutions—creating jobs, reducing
              pollution, and powering sustainable growth.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                aria-label="Partner with EcoLyft"
                className="inline-block bg-[#2E8B57] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg hover:scale-105 hover:bg-[#2E8B57]/90 transition-all duration-300 text-sm sm:text-base"
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
