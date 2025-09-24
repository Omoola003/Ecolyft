import FAQSection from "@/components/FAQs/faq";
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