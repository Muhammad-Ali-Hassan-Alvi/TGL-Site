import type { Metadata } from "next";
import { CaseStudies } from "@/components/site/CaseStudies";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Industries } from "@/components/site/Industries";
import { IndustriesPageHero } from "@/components/site/IndustriesPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { OurApproach } from "@/components/site/OurApproach";
import { ServiceDetails } from "@/components/site/ServiceDetails";
import { TechStack } from "@/components/site/TechStack";

export const metadata: Metadata = {
  title: "Industries | TGL",
  description:
    "Industry-focused solutions across real estate, logistics, ecommerce, healthcare, and more with proven delivery approach.",
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><IndustriesPageHero /></MotionInView>
        <MotionInView><Industries /></MotionInView>
        <MotionInView><OurApproach ctaLabel="Discover Now" counterLabelFirst /></MotionInView>
        <MotionInView><ServiceDetails /></MotionInView>
        <MotionInView><TechStack withSalesIntro /></MotionInView>
        <MotionInView><CaseStudies /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
