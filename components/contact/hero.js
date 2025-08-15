"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#2E8B57] uppercase font-semibold tracking-widest text-sm mb-3"
        >
          Get in Touch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-boldBlack leading-snug mb-4"
        >
          We’d Love to Hear From You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed"
        >
          Whether you have a question about our services, want to partner with us,
          or simply want to say hello — our team is ready to listen and respond promptly.
        </motion.p>
      </div>
    </section>
  );
}
