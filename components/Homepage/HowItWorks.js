"use client";

import { motion } from "framer-motion";
import { Calendar, Wallet, Recycle } from "lucide-react";

// Animation variants for staggered entrance
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  hover: { y: [-2, 2, 0], transition: { duration: 0.5, repeat: 1 } },
  initial: { y: 0 },
};

const titleVariants = {
  hover: { y: -3, transition: { duration: 0.3, ease: "easeOut" } },
};

const descVariants = {
  hover: { color: "#2E8B57", transition: { duration: 0.3 } },
};

export default function HowItWorks() {
  const steps = [
    {
      title: "Book a Pickup",
      description:
        "Schedule a convenient pickup time for your plastic wastes through our platform.",
      icon: <Calendar size={28} className="text-green-600" />,
    },
    {
      title: "Earn Cash",
      description:
        "Get paid for your clean plastic waste based on weight and quality assessment.",
      icon: <Wallet size={28} className="text-green-600" />,
    },
    {
      title: "Recycle Forward",
      description:
        "Your waste becomes high-quality feed-stocks for industry, closing the loop.",
      icon: <Recycle size={28} className="text-green-600" />,
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            variants={cardVariants}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg sm:text-xl"
            variants={cardVariants}
          >
            Three simple steps to turn your plastic waste into value.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-[#EDFDF1] rounded-xl p-10 flex flex-col items-center text-center min-h-[340px] cursor-pointer"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Icon with round background + bounce on hover */}
              <motion.div
                className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-100"
                variants={iconVariants}
                whileHover="hover"
                initial="initial"
              >
                {step.icon}
              </motion.div>

              {/* Title with slight upward animation on hover */}
              <motion.h3
                className="text-xl font-semibold text-gray-900 mb-2"
                variants={titleVariants}
                whileHover="hover"
              >
                {step.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-700 text-base"
                variants={descVariants}
                whileHover="hover"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
