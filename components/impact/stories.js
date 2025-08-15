"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Waste-to-Wealth Program – Lagos",
    description:
      "Through our Waste-to-Wealth initiative, we empowered local communities by turning collected recyclables into income streams. The program provided training, equipment, and access to recycling markets.",
    results: [
      "120+ households participating",
      "15 tons of waste recycled in 6 months",
      "Generated ₦1.5M in community income",
    ],
    image: "/images/case-lagos.jpg",
  },
  {
    title: "School Recycling Challenge – Abuja",
    description:
      "Partnering with schools, we launched a recycling competition that educated students on sustainable waste management and encouraged eco-friendly habits from a young age.",
    results: [
      "Over 2,000 students engaged",
      "8 schools actively participating",
      "3.5 tons of plastic diverted from landfills",
    ],
    image: "/images/case-abuja.jpg",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2E8B57] uppercase font-semibold tracking-widest text-sm mb-2">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-boldBlack">
            Real Impact in Action
          </h2>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-boldBlack mb-4">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <ul className="space-y-2">
                  {study.results.map((result, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start text-gray-700 text-sm"
                    >
                      <span className="text-[#2E8B57] font-bold mr-2">•</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
