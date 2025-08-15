"use client";

import { motion } from "framer-motion";
import { Handshake, ClipboardList, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Discussion",
    description:
      "We start with a conversation to understand your sustainability goals and potential collaboration areas.",
    icon: Handshake,
  },
  {
    number: "02",
    title: "Proposal & Agreement",
    description:
      "We prepare a tailored proposal outlining the partnership scope, objectives, and benefits.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Launch & Activation",
    description:
      "We kick off joint projects, campaigns, or initiatives that deliver measurable environmental impact.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Ongoing Collaboration",
    description:
      "We maintain close communication, track progress, and explore new opportunities for growth.",
    icon: RefreshCw,
  },
];

export default function PartnershipProcess() {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm">
            Partnership Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-boldBlack">
            How We Collaborate
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200"></div>
          {/* Vertical line (mobile) */}
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
                  {/* Step Number (background) */}
                  <span className="absolute -top-10 left-1/2 lg:left-0 lg:-top-14 transform -translate-x-1/2 lg:translate-x-0 text-gray-100 font-bold text-6xl pointer-events-none select-none">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#2E8B57] text-white shadow-lg mb-4">
                    <Icon size={28} />
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-semibold text-boldBlack mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Dot for vertical view */}
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
