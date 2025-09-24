import OurCommitment from "@/components/AboutUs/commitement";
import AboutHero from "@/components/AboutUs/hero";
import MissionValues from "@/components/AboutUs/mission";
import ImpactCounter from "@/components/AboutUs/ourImpact";
import OurStory from "@/components/AboutUs/OurStory";
import OurTeam from "@/components/AboutUs/OurTeam";
import CTASection from "@/components/Homepage/cta";
import TrustedBy from "@/components/Homepage/industry";

export default function AboutUs() {
  return (
    <main className="flex flex-col">
        <AboutHero />
        <OurStory />
        <MissionValues />
        <OurCommitment />
        <OurTeam />
        <ImpactCounter />
        <TrustedBy />
        <CTASection />
    </main>
  );
}