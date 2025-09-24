"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutHero() {
  return (
    <section className="bg-[#EDFDF1] py-8 sm:py-12 flex items-center justify-center text-center">
      <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E8B57] leading-snug mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={heroVariants}
        >
          About Us
        </motion.h1>

        {/* Breadcrumb */}
        <motion.div
          className="text-sm sm:text-base text-gray-600 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={heroVariants}
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          / <span className="font-semibold text-gray-900">About Us</span>
        </motion.div>

        {/* Page Description */}
        <motion.p
          className="text-gray-800 text-base sm:text-lg md:text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={heroVariants}
        >
          We&apos;re building the most accessible infrastructure for a circular
          economy, where waste becomes opportunity and sustainability drives
          prosperity.
        </motion.p>
      </div>
    </section>
  );
}
