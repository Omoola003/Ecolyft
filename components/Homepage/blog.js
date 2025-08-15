"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    title: "How Smart Recycling is Changing Lagos",
    excerpt: "Discover how innovative recycling solutions are transforming waste management in urban Nigeria.",
    image: "/images/blog1.jpg",
    category: "Innovation",
    slug: "/blog/smart-recycling-lagos",
  },
  {
    title: "Eco-Friendly Practices for Startups",
    excerpt: "Learn practical steps startups can take to minimize environmental impact while scaling.",
    image: "/images/blog2.jpg",
    category: "Sustainability",
    slug: "/blog/eco-friendly-startups",
  },
  {
    title: "Community Engagement in Waste Management",
    excerpt: "How local communities are empowered through education and participation in waste initiatives.",
    image: "/images/blog3.jpg",
    category: "Community",
    slug: "/blog/community-engagement",
  },
];

export default function BlogSection() {
  return (
    <section className="pt-15 pb-90 bg-[#2E8B57]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white font-semibold uppercase tracking-widest mb-2">
            OUR BLOG
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug">
            Latest Insights & Updates
          </h2>
        </motion.div>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth touch-pan-x scrollbar-hide">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              className="snap-start flex-shrink-0 w-[80%] sm:w-[60%] md:w-[30%] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col h-[250px]">
                <span className="text-sm text-[#2E8B57] font-semibold mb-2">
                  {blog.category}
                </span>
                <h3 className="font-bold text-lg mb-2 flex-1">{blog.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{blog.excerpt}</p>
                <a
                  href={blog.slug}
                  className="mt-auto text-[#2E8B57] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {/* View All Blogs button */}
        <div className="mt-8 text-center">
          <a
            href="/blog"
            className="inline-flex items-center text-white font-semibold hover:underline text-lg"
          >
            View All Blogs →
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
