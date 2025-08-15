import PartnerBenefits from "@/components/partners/benefits";
import PartnersCTA from "@/components/partners/cta";
import PartnersHero from "@/components/partners/hero";
import PartnersShowcase from "@/components/partners/partners";
import PartnershipProcess from "@/components/partners/process";

export default function partners() {
    return (
        <main className="flex flex-col">
            <PartnersHero />
            <PartnersShowcase />
            <PartnerBenefits />
            <PartnershipProcess/>
            <PartnersCTA/>
        </main>
    )
}