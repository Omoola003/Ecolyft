"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// Menu items
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      if (scrolled) {
        // Delay sticky header appearance by 200ms
        setTimeout(() => setShowSticky(true), 200);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <header 
    className={`fixed top-0 w-full z-50 bg-white shadow-md py-3 transition-transform duration-500 ${
    isScrolled ? "translate-y-0" : "-translate-y-2"
  }`}
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Ecolyft Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Nav Menu */}
        <nav className="hidden md:flex space-x-10">
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeMenu === item.name;
            return (
              <Link key={item.name} href={item.href}>
                <button
                  onClick={() => setActiveMenu(item.name)}
                  className={`transition-all duration-300 transform ${
                    isActive
                      ? "text-green-700 font-semibold scale-105"
                      : "text-gray-700 hover:text-green-400"
                  }`}
                  style={{
                    animation: `fadeSlideIn 0.5s ease forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {item.name}
                </button>
              </Link>
            );
          })}
        </nav>

        {/* Accent Button */}
        <div
          className="hidden md:block"
          style={{
            animation: `fadeSlideIn 0.5s ease forwards`,
            animationDelay: `${NAV_ITEMS.length * 0.1}s`,
          }}
        >
          <Link href="/request-pickup">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-green-400 hover:scale-105">
              Request Pickup
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 p-8 bg-white">
          {NAV_ITEMS.map((item) => {
            const isActive = activeMenu === item.name;
            return (
              <Link key={item.name} href={item.href}>
                <button
                  onClick={() => {
                    setActiveMenu(item.name);
                    setMobileOpen(false);
                  }}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-green-700 font-semibold scale-105"
                      : "text-gray-700 hover:text-green-400"
                  }`}
                >
                  {item.name}
                </button>
              </Link>
            );
          })}
          <Link href="/request-pickup">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-green-400 hover:scale-105 text-center w-full">
              Request Pickup
            </button>
          </Link>
        </nav>
      </div>

      {/* Tailwind Custom Keyframes */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
