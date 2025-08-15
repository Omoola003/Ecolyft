"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "In terms of innovation, EcoLyft is setting a new benchmark. Their smart-sorting technology and community-first model prove that waste management can be both scientific and social.",
    rating: 5,
    name: "Dr. Chinedu Okafor",
    designation: "Environmental Researcher",
    image: "/testimonials/18840 1.png",
  },
  {
    quote: "I used to burn our trash because we didn’t know any other way. Since EcoLyft came to our neighborhood, the air is cleaner and the streets are safer. I tell everyone: this is what real progress looks like.",
    rating: 5,
    name: "Mama Bose",
    designation: "Retired Teacher",
    image: "/testimonials/137693 1.png",
  },
  {
    quote: "Partnering with EcoLyft has multiplied our outreach impact. Their approach blends data with empathy—something you don’t see often in the recycling space.",
    rating: 5,
    name: "Rita Agwu",
    designation: "NGO Director",
    image: "/testimonials/2150247801 1.png",
  },
  {
    quote: "EcoLyft blends sustainability with innovation in a way that’s rare in Nigeria. As a startup founder, I admire how they’re solving a critical problem with scalable tech and grassroots empathy.",
    rating: 5,
    name: "Ibrahim Musa",
    designation: "Tech Enthusiast",
    image: "/testimonials/18840 1.png",
  },
  {
    quote: "At my age, you think you’ve seen it all. But EcoLyft is the first to truly involve us elders in environmental education. They don’t just collect waste—they respect people.",
    rating: 5,
    name: "Chief Olalekan",
    designation: "Elder",
    image: "/testimonials/137693 1.png",
  },
  {
    quote: "Now I know not to throw plastic in the gutter. We even made art from old bottles in school! I want to be a recycling hero when I grow up.",
    rating: 5,
    name: "Annabelle",
    designation: "Primary 5 Student",
    image: "/testimonials/2150247801 1.png",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-2 sm:py-3 lg:py-4 bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#2E8B57] font-semibold uppercase tracking-widest mb-2 text-sm sm:text-base">
            Testimonials
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-snug">
            Our Client Reviews
          </h2>
        </motion.div>
      </div>

      {/* Testimonials Scrollable Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 sm:gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth touch-pan-x scrollbar-hide h-[450px]">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              className="snap-center flex-shrink-0 w-[85%] sm:w-[65%] md:w-[50%] lg:w-[35%] bg-[#F8EEE6] rounded-xl p-6 relative shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Top Right Stars */}
              <div className="absolute top-4 right-4 flex gap-1">
                {Array.from({ length: testi.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-800 italic mb-6 mt-2 flex-1">{testi.quote}</p>

              {/* Client Info */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/10">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testi.image}
                    alt={testi.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#2E8B57] font-semibold">{testi.name}</h4>
                  <p className="text-sm text-gray-500">{testi.designation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide native scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
