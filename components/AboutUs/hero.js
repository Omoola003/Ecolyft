"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-[#F8EEE6] py-20 sm:py-32">
      <div className="max-w-7xl mx-auto pt-15 px-6 sm:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Turning Waste into Wealth. <br className="hidden sm:block" />
              <span className="text-[#2E8B57]">Empowering Communities</span> for a
              Greener Future.
            </h1>

            <p className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              At EcoLyft, we believe waste is not just something to throw away — 
              it’s an opportunity to create cleaner streets, healthier communities, 
              and a more sustainable planet. Through smart recycling technology 
              and community-driven programs, we’re redefining waste management in Nigeria.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <a
                href="/get-involved"
                className="px-6 py-3 bg-[#2E8B57] text-white font-semibold rounded-full shadow-md hover:bg-[#276847] transition-colors text-center"
              >
                Get Involved
              </a>
              <a
                href="/our-story"
                className="px-6 py-3 border-2 border-[#2E8B57] text-[#2E8B57] font-semibold rounded-full hover:bg-[#2E8B57] hover:text-white transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            <Image
              src="/images/about-hero.png"
              alt="EcoLyft community recycling"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
