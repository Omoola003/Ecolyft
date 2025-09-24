import PartnerBenefits from "@/components/partners/benefits";
import PartnersCTA from "@/components/partners/cta";
import PartnersHero from "@/components/partners/hero";
import PartnerImageSection from "@/components/partners/imageheader";
import SharedVisionSection from "@/components/partners/vision";
import PartnerInquiryForm from "@/components/partners/inquiry";
import FAQSection from "@/components/FAQs/faq";

export default function partners() {
    return (
        <main className="flex flex-col">
            <PartnersHero />
            <PartnerImageSection />
            <PartnerBenefits />
            <SharedVisionSection />
            <PartnerInquiryForm />
            <FAQSection />
            <PartnersCTA/>
        </main>
    )
}