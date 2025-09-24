import ContactFormMap from "@/components/contact/contact";
import ContactInfoCards from "@/components/contact/contactcard";
import GoogleMapSection from "@/components/contact/contactmap";
import ContactHero from "@/components/contact/hero";
import FAQSection from "@/components/FAQs/faq";
import CTASection from "@/components/contact/CTASection";

export default function contact () {
    return (
        <main className="flex flex-col">
            <ContactHero/>
            <ContactInfoCards/>
            <ContactFormMap/>
            <GoogleMapSection/>
            <FAQSection/>
            <CTASection/>
        </main>
    )
}