"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Eco-Friendly Commitment",
    text: "We prioritize environmentally responsible practices in every solution we provide.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Expertise",
    text: "Our experienced team brings years of hands-on knowledge in waste management and sustainability.",
  },
  {
    icon: Users,
    title: "Community Focused",
    text: "We work hand-in-hand with local communities to create lasting impact and engagement.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    text: "Our clients consistently see measurable improvements in waste reduction and recycling rates.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Why Choose EcoLyft
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We don’t just offer services — we deliver real change. Here’s what
          makes us stand out in sustainability and waste management.
        </motion.p>

        {/* Reason Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <reason.icon className="w-10 h-10 text-[#2E8B57] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
