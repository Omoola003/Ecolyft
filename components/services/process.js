"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Lightbulb, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    title: "Consultation & Needs Assessment",
    description:
      "We begin with a thorough discussion to understand your waste management challenges and goals.",
    icon: ClipboardCheck,
  },
  {
    title: "Custom Strategy Design",
    description:
      "Our team designs a tailored recycling and collection strategy that fits your specific needs.",
    icon: Lightbulb,
  },
  {
    title: "Implementation & Training",
    description:
      "We roll out the agreed solution, providing training and resources for smooth adoption.",
    icon: Rocket,
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "We monitor performance, gather feedback, and make continuous improvements.",
    icon: RefreshCw,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-boldBlack">
            How We Work
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200"></div>
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/4"
                >
                  {/* Background Step Number */}
                  <span className="absolute text-[6rem] font-bold text-gray-200 opacity-30 -z-10 top-[-1rem] lg:top-[-2rem] left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 pointer-events-none">
                    {idx + 1}
                  </span>

                  {/* Circle & Icon */}
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#2E8B57] text-white shadow-lg mb-4">
                    <Icon size={28} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold text-boldBlack mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Dot for vertical view */}
                  {idx < steps.length - 1 && (
                    <span className="lg:hidden absolute bottom-[-2rem] w-3 h-3 bg-[#2E8B57] rounded-full"></span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
