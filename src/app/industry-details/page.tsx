import type { Metadata } from "next";
import { CaseStudies } from "@/components/site/CaseStudies";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Industries } from "@/components/site/Industries";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { OurApproach } from "@/components/site/OurApproach";

export const metadata: Metadata = {
  title: "Industry Details | TGL",
  description: "Detailed industry-specific solutions and delivery approach.",
};

export default function IndustryDetailsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="Industry Details" /></MotionInView>
        <MotionInView><Industries /></MotionInView>
        <MotionInView><OurApproach /></MotionInView>
        <MotionInView><CaseStudies /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
