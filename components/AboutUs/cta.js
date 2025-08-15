"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Recycle, Globe2 } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative bg-[#2E8B57] py-16 sm:py-20 overflow-hidden rounded-4xl mb-10 mr-10 ml-10">
      {/* Floating Icons in Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex justify-around items-center pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="text-white"
        >
          <Leaf size={100} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="text-white"
        >
          <Recycle size={120} />
        </motion.div>

        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="text-white"
        >
          <Globe2 size={100} />
        </motion.div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Join the EcoLyft Movement
          </h2>
          <p className="text-white text-lg sm:text-xl mb-6">
            Be part of the change. Sign up to receive updates, volunteer opportunities, and tips on sustainable living.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/join"
              className="px-6 py-3 bg-white text-[#2E8B57] font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Involved
            </a>
          </div>
        </motion.div>

        {/* Right Column - Decorative Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative w-full h-64 sm:h-80 md:h-64 lg:h-80"
        >
        <Image
              src="/images/ecolyft.png"
              alt="EcoLyft community recycling"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
        </motion.div>
      </div>
    </section>
  );
}
