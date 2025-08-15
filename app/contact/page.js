import ContactFormMap from "@/components/contact/contact";
import ContactInfoCards from "@/components/contact/contactcard";
import ContactHero from "@/components/contact/hero";

export default function contact () {
    return (
        <main className="flex flex-col">
            <ContactHero/>
            <ContactInfoCards/>
            <ContactFormMap/>
        </main>
    )
}