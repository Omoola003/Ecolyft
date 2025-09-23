// app/page.js
import AboutPreview from "@/components/Homepage/AboutPreview";
import CTASection from "@/components/Homepage/cta";
import Hero from "@/components/Homepage/Hero";
import HowItWorks from "@/components/Homepage/HowItWorks";
import TrustedBy from "@/components/Homepage/industry";
import Services from "@/components/Homepage/services";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <HowItWorks />
      <AboutPreview />
      <Services />
      <TrustedBy />
      <CTASection />
    </main>
  );
}
