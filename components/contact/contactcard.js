"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactCards = [
  {
    title: "Email",
    icon: FaEnvelope,
    detail: "hello@ecolyft.com",
    actionText: "Send Email",
    href: "mailto:hello@ecolyft.com",
    note: "We're here to help during business hours",
  },
  {
    title: "Phone",
    icon: FaPhone,
    detail: "+234 (555) 123-4567",
    actionText: "Call Now",
    href: "tel:+2345551234567",
    note: "Call us during business hours",
  },
  {
    title: "Office",
    icon: FaMapMarkerAlt,
    detail: "123 Green Street, Eco City, EC 12345",
    actionText: "Get Directions",
    href: "https://www.google.com/maps?q=123+Green+Street,+Eco+City",
    note: "Visit our headquarters",
  },
  {
    title: "Hours",
    icon: FaClock,
    detail: "Mon-Fri 9AM-5PM EST",
    actionText: null,
    href: null,
    note: "Get in touch for partnerships and inquiries",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#EDFDF1] rounded-xl shadow-lg p-6 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-green-600 text-white p-3 rounded-full inline-flex items-center justify-center mb-2">
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-[#2E8B57]">{card.title}</h3>
                <p className="text-gray-700 font-medium">{card.detail}</p>
                <p className="text-gray-600 text-sm">{card.note}</p>
                {card.actionText && card.href && (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-green-500 transition-all duration-300 text-center"
                  >
                    {card.actionText}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
