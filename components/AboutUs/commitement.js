"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Users } from "lucide-react";

const commitments = [
  {
    title: "Trust & Transparency",
    description:
      "Every transaction is logged, every process is accountable, every partnership is built on integrity.",
    icon: <ShieldCheck size={28} className="text-green-600" />,
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous quality control ensures our recycled materials meet the highest industry standards.",
    icon: <CheckCircle2 size={28} className="text-green-600" />,
  },
  {
    title: "Community Impact",
    description:
      "We're committed to creating lasting positive change in the communities we serve.",
    icon: <Users size={28} className="text-green-600" />,
  },
];

export default function OurCommitment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm sm:text-base"
        >
          OUR COMMITMENT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug max-w-3xl mx-auto mb-12"
        >
          We hold ourselves to the highest standards of accountability and impact
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {commitments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-[#2E8B57] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
