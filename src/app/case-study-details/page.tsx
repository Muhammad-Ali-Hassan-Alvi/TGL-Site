import type { Metadata } from "next";
import { CaseStudies } from "@/components/site/CaseStudies";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { ServiceDetails } from "@/components/site/ServiceDetails";

export const metadata: Metadata = {
  title: "Success Story Details | TGL",
  description: "Detailed breakdowns of delivered projects and outcomes.",
};

export default function CaseStudyDetailsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="Success Story Details" /></MotionInView>
        <MotionInView><ServiceDetails /></MotionInView>
        <MotionInView><CaseStudies /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
