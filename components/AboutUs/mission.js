"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const values = [
  { title: "Innovation", description: "We leverage cutting-edge technology to create smarter, scalable recycling solutions that make waste management efficient and impactful." },
  { title: "Community", description: "We actively engage and educate local communities, empowering residents to participate in creating cleaner, healthier neighborhoods." },
  { title: "Sustainability", description: "We promote a circular economy, ensuring that every piece of waste is an opportunity to conserve resources and protect the environment." },
  { title: "Integrity", description: "We operate with transparency, accountability, and respect, building trust with communities, partners, and stakeholders alike." },
  { title: "Impact", description: "We are committed to delivering measurable environmental and social outcomes that drive positive change at every level." },
];

export default function MissionValues() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm sm:text-base"
        >
          OUR MISSION & VALUES
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug max-w-3xl mx-auto"
        >
          what drives us our passion
        </motion.h2>

        {/* Desktop Fan Layout */}
        <div className="hidden md:flex justify-center items-end gap-8 h-[300px]">
          {values.map((val, idx) => {
            const heightOffset = Math.sin((idx / (values.length - 1)) * Math.PI) * 50; // fan curve

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="w-44 flex flex-col justify-center items-center p-4 rounded-lg bg-[#F8EEE6] shadow-lg cursor-pointer text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                style={{ marginBottom: `${heightOffset}px` }}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <h3 className="font-semibold text-lg text-[#2E8B57] mb-2">{val.title}</h3>
                {activeIdx === idx && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-[#7F5C4F]"
                  >
                    {val.description}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden flex flex-col gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F8EEE6] p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            >
              <h3 className="font-semibold text-lg text-[#2E8B57] mb-2">{val.title}</h3>
              {activeIdx === idx && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-[#7F5C4F]"
                >
                  {val.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
