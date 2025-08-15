"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    info: "hello@ecolyft.com",
    link: "mailto:hello@ecolyft.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    info: "+234 800 123 4567",
    link: "tel:+2348001234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "123 Green Street, Lagos, Nigeria",
    link: "https://goo.gl/maps/example",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {contactDetails.map((detail, idx) => {
          const Icon = detail.icon;
          return (
            <motion.a
              key={idx}
              href={detail.link}
              target={detail.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2E8B57] text-white mb-4">
                <Icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-boldBlack mb-1">{detail.title}</h3>
              <p className="text-gray-600 text-sm">{detail.info}</p>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
