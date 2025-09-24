import FAQSection from "@/components/faqs";
import RequestPickupHero from "@/components/RequestPickup/hero";
import RequestPickupForm from "@/components/RequestPickup/RequestPickupForm";

export default function RequestPickup () {
    return (
        <main>
            <RequestPickupHero />
            <RequestPickupForm />
            <FAQSection />
        </main>
    )
}