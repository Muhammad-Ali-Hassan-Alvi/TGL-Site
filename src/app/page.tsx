import { ClientLogos } from "@/components/site/ClientLogos";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";
import { SimpleTestimonials } from "@/components/site/SimpleTestimonials";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
// import StepSection from "@/components/site/StepSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#0b1220]">
        <Hero />
        <ClientLogos />
        <ServicesShowcase />
        <WhyChooseUs />
        <SimpleTestimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
