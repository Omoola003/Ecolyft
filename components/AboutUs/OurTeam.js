"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function MessageFromFounder() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-3 text-sm sm:text-base text-center"
        >
          MESSAGE FROM THE FOUNDER
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 items-center mt-10">
          {/* Left: Image with Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 relative w-full h-80 md:h-[480px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/team/udi_benita.jpg"
              alt="Benita Udi - Founder, EcoLyft"
              fill
              className="object-cover"
            />

            {/* Social Icons */}
            <div className="absolute bottom-4 left-4 flex space-x-4 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
              <a
                href="https://linkedin.com/in/benitaudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2E8B57] hover:text-[#276847] transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com/benitaudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2E8B57] hover:text-[#276847] transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com/benitaudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2E8B57] hover:text-[#276847] transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right: Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              At EcoLyft, we believe waste isn’t just a problem — it’s potential waiting to be unlocked.
            </h2>

            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                What started as a simple idea to make recycling easier and more rewarding has grown into a mission to build Africa’s most accessible circular economy infrastructure. Our focus is clear: to turn everyday plastic waste into value — cash for people, feedstock for industry, and progress for the planet.
              </p>
              <p>
                Every pickup, every bale, every flake we recycle moves us closer to a future where sustainability isn’t an aspiration, but an accessible reality for everyone.
              </p>
              <p>
                We are not just cleaning up waste — we are rebuilding how value is created, exchanged, and sustained across communities. This is the foundation of EcoLyft: a world where recycling becomes not just a habit, but an economic force where sustainability itself becomes currency.
              </p>
              <p>
                Join us on this journey. Together, we are proving that with the right systems and purpose, waste can truly power growth.
              </p>
            </div>

            <div className="mt-8 items-end flex flex-col text-right">
              <p className="font-semibold text-gray-900 text-2xl">Benita Udi</p>
              <p className="text-gray-600 text-sm">Founder, EcoLyft</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
