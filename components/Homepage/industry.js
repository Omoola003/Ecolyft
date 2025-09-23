"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logos/partner1.png",
  "/logos/partner2.png",
  "/logos/partner3.png",
  "/logos/partner4.png",
  "/logos/partner5.png",
  "/logos/partner6.png",
];

export default function TrustedBy() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-lg font-semibold text-[#2E8B57] uppercase tracking-wider mb-2">
          Trusted by Industry Leaders
        </h2>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
          Partners powering our recycling mission
        </p>

        {/* Infinite Scroll Wrapper */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-40 h-16 relative">
                <Image
                  src={logo}
                  alt={`Partner logo ${idx}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
