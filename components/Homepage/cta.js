"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogCTA() {
  return (
    <section className="relative bg-white mt-10">
      {/* CTA Card */}
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8EEE6] rounded-2xl p-6 md:p-12 shadow-xl flex flex-col md:flex-row items-center md:items-stretch -mt-90 relative z-10 gap-10 h-[450px]"
        >
          {/* Left Column - Email Form */}
          <div className="flex-1 flex flex-col justify-center gap-4">
            <p className="text-xl md:text-5xl font-semibold text-gray-800 mb-4">
              Join us today by dropping your email
            </p>
            <form className="flex w-full max-w-md bg-white rounded-full overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#2E8B57] text-white font-semibold hover:bg-[#276847] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              We’ll send you updates and tips on keeping your environment clean
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 relative w-full h-full">
            <Image
              src="/images/OBJECTS.png"
              alt="CTA Image"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Slight bottom padding to accommodate footer */}
      <div className="h-20 md:h-24"></div>
    </section>
  );
}
