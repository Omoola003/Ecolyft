"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Udi Benita",
    role: "CEO & Founder",
    bio: "Environmental engineer with 15+ years in sustainable technology development.",
    image: "/images/team/benita.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Technology leader specializing in circular economy solutions and supply chain optimization.",
    image: "/images/team/michael.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Dr. Amara Okafor",
    role: "Head of Sustainability",
    bio: "PhD in Environmental Science, leading our ESG initiatives and impact measurement.",
    image: "/images/team/amara.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "David Rodriguez",
    role: "Operations Director",
    bio: "Logistics expert ensuring efficient pickup networks and quality control processes.",
    image: "/images/team/david.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm sm:text-base"
        >
          MEET THE TEAM
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          Passionate experts driving innovation in sustainable waste management
        </motion.h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6"
            >
              {/* Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{member.role}</p>

              {/* Bio */}
              <p className="text-gray-700 text-sm text-center mb-4">{member.bio}</p>

              {/* Social Icons */}
              <div className="flex gap-4">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    className="text-[#2E8B57] hover:text-[#276847] transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    className="text-[#2E8B57] hover:text-[#276847] transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    className="text-[#2E8B57] hover:text-[#276847] transition-colors"
                  >
                    <FaInstagram size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
