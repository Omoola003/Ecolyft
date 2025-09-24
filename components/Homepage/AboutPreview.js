"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Repeat, Users, Home, Package } from "lucide-react";

export default function AboutPreview() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
  const cardHover = "hover:scale-[1.03] transition-transform duration-300";

  const leftPoints = [
    "Earn from waste: Transform your plastic waste into immediate rewards.",
    "Secure reliable feedstock: Access consistent supply of high-quality recycled materials.",
    "Scale with ESG solutions: Meet sustainability goals with transparent, accountable processes.",
  ];

  const stats = [
    {
      icon: <Package size={28} className="text-green-600" />,
      number: "300+",
      title: "kg Plastic Recycled",
      description: "Plastic turned into measurable value.",
    },
    {
      icon: <Home size={28} className="text-green-600" />,
      number: "7+",
      title: "Households Rewarded",
      description: "Communities earning from recycling.",
    },
    {
      icon: <Users size={28} className="text-green-600" />,
      number: "1+",
      title: "Jobs Created",
      description: "Sustainable employment opportunities.",
    },
    {
      icon: <Repeat size={28} className="text-green-600" />,
      number: "3+",
      title: "Communities Cleaned",
      description: "Cleaner neighborhoods, better future.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2">
              Why EcoLyft
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
              EcoLyft turns plastic waste into measurable value for people, industry, and the planet.
            </h2>

            {/* Checkpoints */}
            <ul className="space-y-3">
              {leftPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700 text-base">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-[3px]" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Quote Box */}
            <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800 my-4">
              &quot;Every kilogram is logged, every transaction transparent, every partnership accountable.&quot;
            </blockquote>

            {/* CTA Button */}
            <motion.a
              href="/partners"
              className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-green-500 transition-all duration-300 text-center w-max"
              whileHover={{ scale: 1.05 }}
            >
              Partner With Us
            </motion.a>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-xl shadow p-6 flex flex-col items-center text-center ${cardHover}`}
                variants={fadeUp}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-100">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-green-600 mb-1">{stat.number}</h3>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">{stat.title}</h4>
                <p className="text-gray-700 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
