"use client";

import { motion } from "framer-motion";

export default function SharedVisionSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#EDFDF1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E8B57] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Shared Vision for a Greener Future
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At EcoLyft, we believe that collective action is key to building a sustainable world. 
          Our partnerships are more than just collaborations; they are commitments to environmental 
          responsibility, community empowerment, and innovation in waste management. <br />
          <br />
          <span className="font-semibold text-[#2E8B57]">
            Join us in making a tangible difference.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
