"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Community Waste Collection",
    description:
      "We partner with local collectors to recover nylon and other plastics from streets, drains, and public spaces - reducing pollution and supporting informal workers with better income.",
  },
  {
    title: "Nylon Sorting & Processing",
    description:
      "Our facility cleans and sorts collected nylon to meet standards for reuse and recycling, keeping value in the local economy.",
  },
  {
    title: "Recycled Material Supply",
    description:
      "We supply sorted, reusable nylon to recycling companies and manufacturers who want to cut plastic waste from their production.",
  },
  {
    title: "EPR & Circular Compliance Support",
    description:
      "We help brands and government partners meet their Extended Producer Responsibility (EPR) goals with traceable recovery systems and data.",
  },
  {
    title: "Impact Reporting & Community Engagement",
    description:
      "We document social and environmental results - jobs created, waste diverted, streets cleaned - and turn that into credible reports for investors and partners.",
  },
];

export default function Services() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
  const cardHover = "hover:scale-105 transition-transform duration-300";

  return (
    <section className="bg-[#F8EEE6] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:text-left"
        >
          <p className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm sm:text-base">
            Our Services
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-black leading-snug">
            Comprehensive Waste Management for a Cleaner Tomorrow
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`bg-white rounded-3xl shadow-lg p-5 flex flex-col justify-between w-full sm:w-[90%] md:w-[600px] h-auto md:h-[220px] ${cardHover}`}
            >
              <div className="mb-3">
                <h3 className="font-semibold text-lg sm:text-xl md:text-xl mb-2">{service.title}</h3>
                <p className="text-sm sm:text-sm md:text-base text-gray-700">{service.description}</p>
              </div>
              <div className="mt-auto">
                <button className="flex items-center gap-1 text-[#2E8B57] font-semibold text-sm hover:underline">
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
