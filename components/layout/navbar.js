"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// Menu items
const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md py-3" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 relative">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" legacyBehavior>
          <Image
            src="/images/logo.png"
            alt="Ecolyft Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav Menu */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isActive
                    ? "text-green-700 font-semibold"
                    : "text-gray-700 hover:text-green-500"
                }`}
                legacyBehavior>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/request-pickup"
            className="bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-green-500"
          >
            Request Pickup
          </Link>
                      <Link
              href="/partners/#inquiry"
              onClick={() => setMobileOpen(false)}
              className="bg-white text-green-600 border-green-600 m-4 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-green-500 text-center cursor-pointer border-2 hover:text-white"
            >
              Request Supply
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

        {/* Mobile Menu - now absolute overlay */}
        {mobileOpen && (
          <nav className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-6 md:hidden z-50">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-green-700 font-semibold"
                      : "text-gray-700 hover:text-green-500"
                  }`}
                  legacyBehavior>
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/request-pickup"
              onClick={() => setMobileOpen(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-green-500 text-center"
            >
              Request Pickup
            </Link>
            <Link
              href="/partners/#inquiry"
              onClick={() => setMobileOpen(false)}
              className="bg-white text-green-600 border-green-600 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-green-500 text-center cursor-pointer border-2 hover:text-white"
            >
              Request Supply
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
