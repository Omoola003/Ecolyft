"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FAQSupportCTA() {
  return (
    <section className="bg-[#EDFDF1] py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E8B57] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Still Need Help?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-700 text-base sm:text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Can&apos;t find the answer you&apos;re looking for? Our friendly
          support team is here to assist you. Reach out directly and we&apos;ll
          get back to you as soon as possible.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#2E8B57] text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#256d47] transition-colors"
          >
            Contact Support Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
