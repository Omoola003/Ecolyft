import ServicesHero from "@/components/services/hero";
import ProcessTimeline from "@/components/services/process";
import ServicesList from "@/components/services/serviceslist";
import WhyChooseUs from "@/components/services/why";
import ServicesCTA from "@/components/services/servicecta";

export default function Services() {
  return (
    <main className="flex flex-col">
        <ServicesHero />
        <ServicesList />
        <WhyChooseUs />
        <ProcessTimeline />
        <ServicesCTA />
    </main>
  );
}