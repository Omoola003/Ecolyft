"use client";

import { motion } from "framer-motion";
import {
  Recycle,
  ClipboardList,
  GraduationCap,
  Briefcase,
  CalendarCheck,
  Users
} from "lucide-react";

const services = [
  {
    title: "Recycling Programs",
    description:
      "Custom recycling systems for communities and businesses, designed to maximize material recovery.",
    icon: Recycle,
  },
  {
    title: "Waste Audits",
    description:
      "Data-driven waste analysis to identify reduction opportunities and improve sustainability metrics.",
    icon: ClipboardList,
  },
  {
    title: "Sustainability Training",
    description:
      "Workshops and educational programs to engage employees, students, and community members.",
    icon: GraduationCap,
  },
  {
    title: "Consultancy Services",
    description:
      "Strategic guidance for municipalities and corporations to achieve environmental goals.",
    icon: Briefcase,
  },
  {
    title: "Eco-Event Management",
    description:
      "Plan and execute events with sustainable practices, from zero-waste to eco-friendly materials.",
    icon: CalendarCheck,
  },
  {
    title: "Partnership Programs",
    description:
      "Collaborations with stakeholders to build impactful, long-term sustainability initiatives.",
    icon: Users,
  },
];

export default function ServicesList() {
  return (
    <section id="services-list" className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of services crafted to help you achieve your environmental and sustainability objectives.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center bg-[#E6F4EA] rounded-lg">
                  <Icon className="w-7 h-7 text-[#2E8B57]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
