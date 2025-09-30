"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: <Linkedin size={20} /> },
  { href: "#", label: "Twitter", icon: <Twitter size={20} /> },
  { href: "#", label: "Facebook", icon: <Facebook size={20} /> },
  { href: "#", label: "Instagram", icon: <Instagram size={20} /> },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Products & Services" },
  { href: "/contact", label: "Contact" },
  { href: "/partners", label: "Partnership" },
  { href: "/faqs", label: "Frequently Asked Questions" },
];

const ServicesLinks = [
  { href: "/services/#services", label: "Pickup (Trash2Cash)" },
  { href: "/services/#services", label: "Suatainable Feedstock (Recycle Forward)" },
  { href: "/services/#services", label: "Sustainable Solutions (Elevate CSR)" },
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
    <footer className="bg-white text-black/90">
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
              src="/images/logo.png"
              alt="EcoLyft Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-black/80">
            <span className="font-black text-green-600">EcoLyft</span> — Building Africa&apos;s Most Accessible Circular Economy Infrastructure.
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
          <h4 className="font-semibold mb-4">Quick Links</h4>
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
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {ServicesLinks.map((link) => (
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
          <ul className="space-y-2 text-sm text-black/90">
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
                href="tel:+2348071116365"
                className="underline hover:text-[#FFD700]"
              >
                +234 807 111 6365
              </a>
            </li>
            <li>Location: Lekki Lagos, Nigeria</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-black/20 py-4 text-center text-xs sm:text-sm text-black/80">
        © {new Date().getFullYear()} EcoLyft Cycler Technology. All rights reserved. Developed by{" "}
        <a
          href="https://omoolaex.com.ng"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-600"
        >
          OmoolaEx
        </a>
      </div>
    </footer>
  );
}
