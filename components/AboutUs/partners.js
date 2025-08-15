"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const partners = [
  { name: "Trahformas", logo: "/partners/trashformas.png" },
  { name: "Lagos State Govt", logo: "/partners/lagos.png" },
  { name: "WasteTech", logo: "/partners/wastetech.png" },
  { name: "GreenPeace", logo: "/partners/greenpeace.png" },
  { name: "EcoBank", logo: "/partners/ecobank.png" },
  { name: "Blaccole", logo: "/partners/blaccole.png" },
];

export default function PartnersCarousel() {
  const repeatedPartners = [...partners, ...partners];
  const [scrollSpeed, setScrollSpeed] = useState(20); // seconds for one loop
  const [gapSize, setGapSize] = useState("gap-6");

  useEffect(() => {
    // Adjust speed & gap based on screen width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScrollSpeed(30); // slower on mobile
        setGapSize("gap-4");
      } else if (window.innerWidth < 1024) {
        setScrollSpeed(22);
        setGapSize("gap-6");
      } else {
        setScrollSpeed(18); // faster on large screens
        setGapSize("gap-8");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-snug">
          Collaborating for a Sustainable Future
        </h2>
      </div>

      {/* Infinite Scrolling Carousel */}
      <div className="relative">
        <motion.div
          className={`flex ${gapSize} whitespace-nowrap`}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: scrollSpeed,
            ease: "linear",
          }}
        >
          {repeatedPartners.map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-28 sm:w-36 md:w-44 lg:w-48 flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-lg cursor-pointer grayscale hover:grayscale-0 transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hide native scrollbar */}
      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
      `}</style>
    </section>
  );
}
