"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Recycle, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Sustainable Impact",
    description:
      "Join forces to reduce waste, recycle resources, and promote eco-friendly practices.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Work with us to empower local communities through education and participation.",
  },
  {
    icon: Recycle,
    title: "Innovative Solutions",
    description:
      "Leverage cutting-edge recycling and waste management technologies.",
  },
  {
    icon: TrendingUp,
    title: "Brand Growth",
    description:
      "Enhance your brand image by aligning with impactful environmental initiatives.",
  },
];

export default function PartnerBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2E8B57] uppercase font-semibold tracking-widest text-sm mb-2">
            Why Partner With Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-boldBlack">
            Benefits of Collaboration
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#f9f9f9] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-[#2E8B57] text-white rounded-full mx-auto mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-boldBlack mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
