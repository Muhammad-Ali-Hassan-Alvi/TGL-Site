import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { OurApproach } from "@/components/site/OurApproach";
import { ServiceDetails } from "@/components/site/ServiceDetails";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";

export const metadata: Metadata = {
  title: "Service Detail | TGL",
  description: "Detailed service capabilities and approach.",
};

export default function ServiceDetailPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="Service Detail" /></MotionInView>
        <MotionInView><ServicesShowcase /></MotionInView>
        <MotionInView><OurApproach /></MotionInView>
        <MotionInView><ServiceDetails /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
