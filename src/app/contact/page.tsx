import { Header } from "@/components/layout/Header";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";

export const metadata = {
  title: "Contact | Google Antigravity",
  description: "Get in touch with our team. We're here to help with questions, feedback, and support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[60px]">
        <ContactHero />
        <ContactForm />
        <ContactFAQ />
      </div>
    </main>
  );
}
