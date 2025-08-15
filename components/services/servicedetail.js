"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const detailedServices = [
  {
    title: "Recycling Programs",
    description:
      "We design and implement tailored recycling programs for communities, schools, and businesses. Our goal is to help clients divert waste from landfills and turn recyclables into valuable resources.",
    bullets: [
      "Custom recycling bins and signage",
      "Community engagement campaigns",
      "Tracking and reporting of recycling rates",
    ],
    image: "/images/services/recycling.jpg",
  },
  {
    title: "Waste Audits",
    description:
      "Our waste audit services provide detailed insights into your current waste streams, identifying opportunities to reduce, reuse, and recycle more effectively.",
    bullets: [
      "On-site waste stream analysis",
      "Detailed waste composition reporting",
      "Actionable recommendations for improvement",
    ],
    image: "/images/services/audit.jpg",
  },
  {
    title: "Sustainability Training",
    description:
      "We offer workshops and educational programs to build awareness and drive sustainable behavior in organizations and communities.",
    bullets: [
      "Interactive training sessions",
      "Custom learning materials",
      "Follow-up support and evaluations",
    ],
    image: "/images/services/training.jpg",
  },
];

export default function DetailedServices() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {detailedServices.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 !== 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-[400px] relative rounded-xl overflow-hidden shadow-sm"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 !== 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.bullets.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-[#2E8B57] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
