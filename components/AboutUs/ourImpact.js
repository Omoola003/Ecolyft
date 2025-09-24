"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, Users, Leaf, Layers } from "lucide-react";

const stats = [
  { value: 12500, label: "Waste Collected (kg)", icon: <Activity size={36} className="text-[#2E8B57]" /> },
  { value: 75, label: "Communities Reached", icon: <Users size={36} className="text-[#2E8B57]" /> },
  { value: 3400, label: "CO₂ Saved (kg)", icon: <Leaf size={36} className="text-[#2E8B57]" /> },
  { value: 58, label: "Projects Completed", icon: <Layers size={36} className="text-[#2E8B57]" /> },
];

export default function ImpactCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = document.getElementById("impact");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          stats.forEach((stat, i) => {
            const duration = 2000; // 2 seconds
            const steps = 60; // number of updates
            let step = 0;

            const timer = setInterval(() => {
              step++;
              // Ease-out formula: value = end * (1 - (1 - t)^3)
              const easedValue = Math.round(stat.value * (1 - Math.pow(1 - step / steps, 3)));
              setCounts((prev) => {
                const updated = [...prev];
                updated[i] = easedValue;
                return updated;
              });

              if (step >= steps) clearInterval(timer);
            }, duration / steps);
          });

          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="impact" className="relative bg-[#EDFDF1] py-16 text-[#2E8B57] rounded-3xl mr-5 ml-5 mb-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Our Impacts
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="mb-4"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                {stat.icon}
              </motion.div>

              <span className="text-4xl md:text-5xl font-extrabold">
                {counts[idx].toLocaleString()}
              </span>

              <p className="mt-2 text-sm md:text-base text-[#2E8B57]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
