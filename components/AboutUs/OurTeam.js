"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Udi Benita",
    role: "Founder & CEO",
    image: "/images/team/benita.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Chinwe Okafor",
    role: "Head of Operations",
    image: "/images/team/chinwe.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Emeka Obi",
    role: "Community Engagement Lead",
    image: "/images/team/emeka.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Fatima Suleiman",
    role: "Sustainability Officer",
    image: "/images/team/fatima.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-[#F8EEE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm"
        >
          OUR TEAM
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12"
        >
          Meet the People Driving EcoLyft Forward
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
              className="group relative rounded-xl overflow-hidden shadow-lg bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-white text-sm">{member.role}</p>
                  <div className="flex gap-3 mt-3">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="text-white hover:text-[#2E8B57] transition-colors">
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="text-white hover:text-[#2E8B57] transition-colors">
                        <FaTwitter size={20} />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} className="text-white hover:text-[#2E8B57] transition-colors">
                        <FaInstagram size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Static info for mobile */}
              <div className="p-4 md:hidden">
                <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
                <div className="flex gap-3 mt-2">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-[#2E8B57] hover:text-[#276847] transition-colors">
                      <FaLinkedin size={20} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-[#2E8B57] hover:text-[#276847] transition-colors">
                      <FaTwitter size={20} />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} className="text-[#2E8B57] hover:text-[#276847] transition-colors">
                      <FaInstagram size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
