"use client";

import { motion } from "framer-motion";
import { Leaf, Eye, Users } from "lucide-react";

const items = [
  {
    title: "Sustainable Impact",
    description:
      "Contribute to a greener planet by ensuring proper waste management and recycling initiatives.",
    icon: Leaf,
  },
  {
    title: "Enhanced Visibility",
    description:
      "Reach a wider audience through EcoLyft's platform and community engagement efforts.",
    icon: Eye,
  },
  {
    title: "Collaborative Growth",
    description:
      "Join a network of like-minded organizations committed to environmental stewardship.",
    icon: Users,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function WhyPartnerSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E8B57] mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Why Partner with EcoLyft?
        </motion.h2>

        {/* Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-[#F9FDFB] rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
            >
              <item.icon className="w-12 h-12 text-[#2E8B57] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
