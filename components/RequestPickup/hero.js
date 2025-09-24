"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RequestPickupHero() {
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
          Request a Pickup
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
          / <span className="font-semibold text-gray-900">Request Pickup</span>
        </motion.div>

        {/* Page Description */}
        <motion.p
          className="text-gray-800 text-base sm:text-lg md:text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={heroVariants}
        >
          Schedule your eco-friendly waste pickup in just a few steps.  
          Every request brings us closer to a cleaner, sustainable future.
        </motion.p>
      </div>
    </section>
  );
}
