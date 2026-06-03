import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { Testimonials } from "@/components/site/Testimonials";

export const metadata: Metadata = {
  title: "Testimonial | TGL",
  description: "What our clients say about our delivery and quality.",
};

export default function TestimonialPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="Testimonial" /></MotionInView>
        <MotionInView><Testimonials /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
