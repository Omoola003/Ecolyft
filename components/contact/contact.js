"use client";

import { motion } from "framer-motion";

export default function ContactFormMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#f9f9f9] rounded-2xl shadow-md p-8"
        >
          <h2 className="text-2xl font-bold text-boldBlack mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#2E8B57] text-white px-6 py-3 rounded-full font-medium hover:bg-[#246b45] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right: Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.302!2d3.379205!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4d3b9e8cddf%3A0xf1e0d3b7f5a0a!2sLagos!5e0!3m2!1sen!2sng!4v1675184000000!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}
