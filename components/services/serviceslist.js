"use client";

import { motion } from "framer-motion";
import { FaBox, FaRecycle, FaHandsHelping, FaClock, FaMapMarkerAlt, FaMoneyBill, FaDashcube } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    title: "PickUp (Trash2Cash)",
    status: "Active",
    description: "Transform your household plastic waste into immediate cash rewards with our convenient pickup service.",
    specifications: [
      { icon: FaRecycle, label: "Accepted Materials", value: "PET bottles, PP, HDPE containers" },
      { icon: FaBox, label: "Minimum Pickup", value: "5kg per collection" },
      { icon: FaClock, label: "Frequency", value: "Weekly or on-demand" },
      { icon: FaMapMarkerAlt, label: "Service Areas", value: "Urban and suburban zones" },
      { icon: FaMoneyBill, label: "Payment Rate", value: "10kg = 1500 EcoKoins = ₦1,500" },
    ],
    cta: { text: "Request Pickup", href: "/request-pickup" },
    id: "pickup"
  },
  {
    title: "Sustainable Feedstock (Recycle Forward)",
    status: "Active",
    description: "High grade recycled PET & HDPE materials for industrial & manufacturing purposes.",
    specifications: [
      { icon: FaRecycle, label: "Material Types", value: "Bales, Flakes & Pellets (Clear or Mixed)" },
      { icon: FaDashcube, label: "Purity Level", value: "99.5%+ certified" },
      { icon: FaBox, label: "Packaging", value: "25kg bags, bulk containers" },
      { icon: FaClock, label: "Supply Capacity", value: "5+ tons/month" },
      { icon: FaHandsHelping, label: "ESG Compliance", value: "Transparent sourcing & reporting" },
    ],
    cta: { text: "Request Supply", href: "/partners/#inquiry" },
    id: "bales-flakes-pellets"
  },
  {
    title: "Sustainable Solutions",
    status: "Active",
    description: "Custom recycling programs with measurable CSR impact for corporate and community partners.",
    specifications: [
      { icon: FaHandsHelping, label: "Program Type", value: "Corporate, Community & Post-Event Recycling" },
      { icon: FaRecycle, label: "Coverage", value: "Offices, Malls, Estates, Hospitals" },
      { icon: FaClock, label: "Collection Frequency", value: "Scheduled pickups & post-event cleanups" },
      { icon: FaHandsHelping, label: "CSR Visibility", value: "Quarterly measurable impact reports" },
      { icon: FaMoneyBill, label: "CSR Impact", value: "Plastics recovered are converted into annual CSR funds in your organization's name" },
    ],
    cta: { text: "Learn More", href: "/partners/#inquiry" },
    id: "sustainable-solutions"
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E8B57] mb-4">
            Our Services
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Explore our comprehensive solutions for households, industries, and communities to turn waste into opportunity.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#EDFDF1] rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-[#2E8B57]">{service.title}</h3>
                <span className="text-sm font-medium bg-green-600 text-white px-2 py-1 rounded-full">
                  {service.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 text-left">{service.description}</p>

              {/* Specifications */}
              <ul className="space-y-3 mb-6 text-left">
                {service.specifications.map((spec, sidx) => {
                  const Icon = spec.icon;
                  return (
                    <li key={sidx} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1">
                        <Icon size={18} />
                      </span>
                      <div className="text-sm text-gray-800">
                        <span className="font-semibold">{spec.label}:</span> {spec.value}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <Link
                href={service.cta.href}
                className="mt-auto inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition-all duration-300 text-center"
              >
                {service.cta.text}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
