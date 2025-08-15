"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <Image
              src="/images/ourstory.png"
              alt="EcoLyft recycling community"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
              EcoLyft was born from a vision to tackle Nigeria’s growing waste problem 
              with innovation, technology, and people at its heart. We saw mountains 
              of waste as untapped potential — resources that could be transformed into 
              something valuable.
            </p>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
              From small neighborhood clean-ups to city-wide recycling initiatives, 
              our journey has always been powered by community involvement and the 
              belief that everyone has a role to play in creating a cleaner, greener future.
            </p>

            {/* Fixed & Enhanced See Our Impact Button */}
            <Link
            href="/about-us/#impact"
            scroll={true}
            className="inline-block px-6 py-3 bg-[#2E8B57] text-white font-semibold 
                        rounded-full shadow-md hover:bg-[#276847] hover:scale-105 
                        transition-transform duration-300 
                        focus:outline-none focus:ring-2 focus:ring-[#2E8B57] 
                        focus:ring-offset-2"
            >
            See Our Impact
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
