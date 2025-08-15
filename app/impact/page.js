import ImpactCounter from "@/components/AboutUs/ourImpact";
import ImpactHero from "@/components/impact/hero";
import ImpactPartners from "@/components/impact/partner";
import SuccessStories from "@/components/impact/stories";

export default function impact() {
    return (
        <main className="flex flex-col">
            <ImpactHero />
            <SuccessStories  />
            <ImpactCounter />
            <ImpactPartners />
        </main>
    )
}