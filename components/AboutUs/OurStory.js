"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, CheckCircle2 } from "lucide-react";

const storyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function OurStory() {
  const leftList = [
    "For homes, EcoLyft means rewards and incentives for consistent recycling.",
    "For businesses, it is measurable CSR impact and ethical recognition.",
    "For communities, it is a clean, green, and healthy city.",
  ];

  const rightGoals = [
    "Expand to 50+ cities by 2026",
    "Create 1000+ green jobs",
    "Process 1M+ kg of plastic waste annually",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col gap-6 h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={storyVariants}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2E8B57]">Our Story</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            EcoLyft started as a frustration; from flooded streets, overflowing waste drums, and a littered environment that had become “normal”. Then during a church career development program, there was a kairos moment. What if waste could be valued?
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            That single thought set me on a path of research and discovery. I found that 97% of the world’s population does not know waste can be recycled or reused; nor do they realize the damage improper waste disposal causes to our environment and ecosystem.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            From that moment, EcoLyft was born. Our mission is simple yet urgent: give the Earth life by making recycling accessible and profitable for both the people and the planet.
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            Founded in 2025, we began by offering convenient plastic waste pickups for households and businesses because recycling should not be a burden.
          </p>

          {/* Left List Items with Check Icon */}
          <ul className="flex flex-col gap-2 pl-4">
            {leftList.map((item, idx) => (
              <li key={idx} className="flex items-center text-gray-700 text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-700 text-base sm:text-lg">
            But this is only the beginning. EcoLyft is building the infrastructure for a circular economy where resources flow efficiently, communities prosper, and environmental impact is minimized through innovation and transparency.
          </p>
        </motion.div>

        {/* Right Column: Images + Text Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
          {/* Top 2 Images */}
          <motion.div
            className="relative w-full h-48 sm:h-90 rounded-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={storyVariants}
          >
            <Image
              src="/images/Us-in-action.jpg"
              alt="EcoLyft in action 1"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            className="relative w-full h-55 sm:h-90 rounded-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={storyVariants}
          >
            <Image
              src="/images/What-we-do.jpg"
              alt="EcoLyft in action 2"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Bottom Text Box (spans 2 columns on small screens) */}
          <motion.div
            className="col-span-1 sm:col-span-2 bg-green-50 rounded-xl p-6 flex flex-col gap-2 shadow-md h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={storyVariants}
          >
            <h3 className="text-xl font-semibold text-green-700">
              Where We&apos;re Going
            </h3>
            <ul className="flex flex-col gap-2">
              {rightGoals.map((goal, idx) => (
                <li key={idx} className="flex items-center text-gray-700 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  {goal}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
