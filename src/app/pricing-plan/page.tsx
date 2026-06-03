import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";

export const metadata: Metadata = {
  title: "Pricing Plan | TGL",
  description: "Explore our service packages and engagement options.",
};

export default function PricingPlanPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="Pricing Plan" /></MotionInView>
        <MotionInView><ServicesShowcase /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
