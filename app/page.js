// app/page.js
import AboutPreview from "@/components/Homepage/AboutPreview";
import BlogSection from "@/components/Homepage/blog";
import BlogCTA from "@/components/Homepage/cta";
import Hero from "@/components/Homepage/Hero";
import OurProcess from "@/components/Homepage/process";
import Services from "@/components/Homepage/services";
import Testimonials from "@/components/Homepage/testimonial";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutPreview />
      <Services />
      <OurProcess />
      <Testimonials />
      <BlogSection />
      <BlogCTA />
      {/* Add other sections below */}
    </main>
  );
}
