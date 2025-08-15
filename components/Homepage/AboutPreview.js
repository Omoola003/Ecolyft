"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Recycle, Globe2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
  const cardHover = "hover:scale-[1.02] transition-transform duration-300";

  return (
    <section className="bg-softGray py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:text-left"
        >
          <p className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2">
            About Us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug">
            Your Partner in Responsible Waste Disposal
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Large Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="w-full h-64 sm:h-80 lg:h-full"
          >
            <Image
              src="/images/about.png"
              alt="EcoLyft Facility"
              width={944}
              height={640}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            {/* Why Us */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`bg-[#F8EEE6] rounded-lg shadow p-6 flex flex-col justify-between flex-1 ${cardHover}`}
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-[#2E8B57] rounded-full mb-4">
                  <Recycle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Why Us?</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Tech-Driven Circular Economy",
                    "Social & Environmental Impact",
                    "Trusted by Partners and Regulators",
                    "Empowering Local Communities",
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E8B57] mt-[2px]" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Supporting Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full h-64 sm:h-80 flex-1"
            >
              <Image
                src="/images/aboutus.png"
                alt="Sorting Waste"
                width={259}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {/* Tech-Driven */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`bg-white rounded-lg shadow p-6 flex flex-col justify-between flex-1 ${cardHover}`}
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-[#2E8B57] rounded-full mb-4">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Tech-Driven Circular Economy</h3>
                <p className="text-sm text-gray-700">
                  EcoLyft is Nigeria’s premier waste sorting and processing facility. We use
                  cutting-edge cycler technology to recover, repurpose, and regenerate materials—giving
                  waste a second life and communities a better future.
                </p>
              </div>
            </motion.div>

            {/* Our Services */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`bg-[#F8EEE6] rounded-lg shadow p-6 flex flex-col justify-between flex-1 ${cardHover}`}
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-[#2E8B57] rounded-full mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Our Services</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Community Waste Collection",
                    "Nylon Sorting & Processing",
                    "Recycled Material Supply",
                    "Impact Reporting & Community Engagement",
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E8B57] mt-[2px]" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
