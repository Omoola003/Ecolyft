import AboutCTA from "@/components/AboutUs/cta";
import ServicesHero from "@/components/services/hero";
import ProcessTimeline from "@/components/services/process";
import DetailedServices from "@/components/services/servicedetail";
import ServicesList from "@/components/services/serviceslist";
import WhyChooseUs from "@/components/services/why";

export default function Services() {
  return (
    <main className="flex flex-col">
        <ServicesHero />
        <ServicesList />
        <DetailedServices />
        <WhyChooseUs />
        <ProcessTimeline />
        <AboutCTA />

    </main>
  );
}