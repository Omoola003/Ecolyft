"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const storyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function OurStory() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={storyVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2E8B57]">Our Story</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            EcoLyft was born from a simple observation: millions of tons of
            valuable plastic waste end up in landfills while industries struggle
            to find reliable sources of recycled materials. We saw an
            opportunity to create a win-win solution.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Founded in 2025, we started with a pilot program in three
            neighborhoods, connecting households directly with recycling
            facilities. Today, we&apos;ve expanded across multiple cities,
            creating a transparent, efficient network that benefits everyone
            involved.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Our vision extends beyond waste collection. We&apos;re building the
            infrastructure for a circular economy where resources flow
            efficiently, communities prosper, and environmental impact is
            minimized through innovation and transparency.
          </p>
        </motion.div>

        {/* Right Column: Images + Text Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Top 2 Images */}
          <motion.div
            className="relative w-full h-48 sm:h-60 rounded-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={storyVariants}
          >
            <Image
              src="/images/story1.png"
              alt="EcoLyft in action 1"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            className="relative w-full h-55 sm:h-70 rounded-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={storyVariants}
          >
            <Image
              src="/images/story2.png"
              alt="EcoLyft in action 2"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Bottom Text Box (spans 2 columns on small screens) */}
          <motion.div
            className="col-span-1 sm:col-span-2 bg-green-50 rounded-xl p-6 flex flex-col gap-2 shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={storyVariants}
          >
            <h3 className="text-xl font-semibold text-green-700">
              Where We&apos;re Going
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base pl-6">
              <li>Expand to 50+ cities by 2026</li>
              <li>Create 1000+ green jobs</li>
              <li>Process 1M+ kg of plastic waste annually</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
