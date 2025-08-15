"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Activity, Layers, Users } from "lucide-react";

const processes = [
  {
    title: "Smart Sorting",
    description: "We sort out our recyclables by material type",
    icon: <Activity size={24} className="text-[#2E8B57]" />,
  },
  {
    title: "Efficient Processing",
    description: "We convert select materials into reusable industrial-grade inputs",
    icon: <Layers size={24} className="text-[#2E8B57]" />,
  },
  {
    title: "Community Education",
    description: "Local awareness campaigns, training for youths and waste workers",
    icon: <Users size={24} className="text-[#2E8B57]" />,
  },
];

export default function OurProcess() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-white">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center sm:text-left">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm sm:text-base">
            Our Process
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-snug">
            Our Seamless Waste Management Process
          </h2>
        </motion.div>
      </div>

      {/* Background Image */}
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-64 sm:h-80 md:h-[500px] rounded-3xl overflow-hidden">
          <Image
            src="/images/process.png"
            alt="Process Background"
            fill
            className="object-cover object-center transition-transform duration-700 ease-in-out hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Process Info Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F8EEE6] p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md mx-auto md:absolute md:top-1/2 md:-translate-y-1/2 md:left-6 lg:left-12"
        >
          <p className="text-[#7F5C4F] mb-6 text-sm sm:text-base">
            We’ve developed an advanced waste sorting and cycler system that processes tons of recyclable material daily. Our technology enables:
          </p>

          <div className="flex flex-col gap-4 max-h-[350px] overflow-x-hidden overflow-y-hidden">
            {processes.map((proc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 15px rgba(0,0,0,0.15)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
                className="flex gap-4 p-4 rounded-lg border border-black/10 bg-white cursor-pointer"
              >
                <div className="flex-shrink-0">{proc.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-[#2E8B57]">{proc.title}</h3>
                  <p className="text-sm sm:text-sm text-[#7F5C4F]">{proc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
