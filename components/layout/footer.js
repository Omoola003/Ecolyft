"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: <Linkedin size={20} /> },
  { href: "#", label: "Twitter", icon: <Twitter size={20} /> },
  { href: "#", label: "Facebook", icon: <Facebook size={20} /> },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/impact", label: "Impact" },
  { href: "/partners", label: "Partners" },
];

const companyLinks = [
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const hoverFocusClasses =
  "hover:text-[#FFD700] transition-colors duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50";

// Motion variants for columns
const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#2E8B57] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Left Column: Logo + Description + Socials */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={columnVariants}
          className="flex flex-col"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="EcoLyft Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold tracking-wide">EcoLyft</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/90">
            EcoLyft Cycler Technology transforms waste into opportunity,
            powering circular economies and sustainable growth across Nigeria.
          </p>
          <div className="flex gap-4 mt-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={hoverFocusClasses}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Navigation Column */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={columnVariants}
        >
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={hoverFocusClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Company Column */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={columnVariants}
        >
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={hoverFocusClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Us Column */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={columnVariants}
        >
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              Email:{" "}
              <a
                href="mailto:info@ecolyft.com"
                className="underline hover:text-[#FFD700]"
              >
                info@ecolyft.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+234XXXXXXXXXX"
                className="underline hover:text-[#FFD700]"
              >
                +234 XXX XXX XXXX
              </a>
            </li>
            <li>Location: Lagos, Nigeria</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20 py-4 text-center text-xs sm:text-sm text-white/80">
        © {new Date().getFullYear()} EcoLyft Cycler Technology. All rights reserved.
      </div>
    </footer>
  );
}
