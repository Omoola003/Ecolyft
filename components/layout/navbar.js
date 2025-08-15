"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Impact", href: "/impact" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return; // only scroll effect on home page
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const linkClasses = (base = "text-sm lg:text-base font-medium tracking-wide") =>
    `${base} transition-colors duration-300 hover:scale-105 ${
      isScrolled || !isHomePage
        ? "text-boldBlack hover:text-[#2E8B57]"
        : "text-white hover:text-[#FFD700]"
    }`;

  const buttonClasses = (base = "px-5 py-3 rounded-full font-medium text-sm lg:text-base") =>
    `${base} transition-all duration-300 hover:scale-105 ${
      isScrolled || !isHomePage
        ? "bg-[#2E8B57] text-white hover:bg-[#2E8B57]/90"
        : "bg-[#FFD700] text-boldBlack hover:bg-yellow-400"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="EcoLyft Logo"
            width={36}
            height={36}
            className="object-contain sm:w-10 sm:h-10"
          />
          <span
            className={`text-lg sm:text-xl font-bold tracking-wide transition-colors duration-300 ${
              isScrolled || !isHomePage ? "text-boldBlack" : "text-white"
            }`}
          >
            EcoLyft
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={linkClasses()}>
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className={buttonClasses()}>
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={24} className={isScrolled || !isHomePage ? "text-boldBlack" : "text-white"} />
          ) : (
            <Menu size={24} className={isScrolled || !isHomePage ? "text-boldBlack" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[calc(100vh-64px)] opacity-100" : "max-h-0 opacity-0"
        } ${isScrolled || !isHomePage ? "bg-white" : "bg-[#2E8B57]"}`}
      >
        <nav className="flex flex-col gap-4 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={linkClasses()}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={buttonClasses("px-5 py-3 rounded-full font-medium text-center")}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
