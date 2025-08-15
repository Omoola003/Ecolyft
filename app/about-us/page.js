import AboutCTA from "@/components/AboutUs/cta";
import AboutHero from "@/components/AboutUs/hero";
import MissionValues from "@/components/AboutUs/mission";
import ImpactCounter from "@/components/AboutUs/ourImpact";
import OurStory from "@/components/AboutUs/OurStory";
import OurTeam from "@/components/AboutUs/OurTeam";
import PartnersCarousel from "@/components/AboutUs/partners";
import WhoWeServe from "@/components/AboutUs/WhoWeServe";

export default function AboutUs() {
  return (
    <main className="flex flex-col">
        <AboutHero />
        <OurStory />
        <MissionValues />
        <WhoWeServe />
        <OurTeam />
        <ImpactCounter />
        <PartnersCarousel />
        <AboutCTA />

      {/* Add other sections below */}
    </main>
  );
}