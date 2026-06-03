import type { Metadata } from "next";
import { CaseStudies } from "@/components/site/CaseStudies";
import { ClientLogos } from "@/components/site/ClientLogos";
import { DeliveryProcess } from "@/components/site/DeliveryProcess";
import { EngagementModels } from "@/components/site/EngagementModels";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MotionInView } from "@/components/site/MotionInView";
import { OurApproach } from "@/components/site/OurApproach";
import { ServiceDetails } from "@/components/site/ServiceDetails";
import { ServicesIntro } from "@/components/site/ServicesIntro";
import { ServicesPageHero } from "@/components/site/ServicesPageHero";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";
import { SecurityBadges } from "@/components/site/SecurityBadges";
import { TechStack } from "@/components/site/TechStack";

export const metadata: Metadata = {
  title: "Services | TGL",
  description:
    "TGL services: digital marketing, MERN stack development, and Next.js — built with a clear approach and modern tooling.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><ServicesPageHero /></MotionInView>
        <MotionInView><ClientLogos /></MotionInView>
        <MotionInView><ServicesIntro /></MotionInView>
        <MotionInView><ServicesShowcase /></MotionInView>
        <MotionInView><OurApproach
          ctaLabel="Request Quote"
          counterLabelFirst
        /></MotionInView>
        <MotionInView><ServiceDetails /></MotionInView>
        <MotionInView><DeliveryProcess /></MotionInView>
        <MotionInView><EngagementModels /></MotionInView>
        <MotionInView><TechStack withSalesIntro /></MotionInView>
        <MotionInView><SecurityBadges /></MotionInView>
        <MotionInView><CaseStudies /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
