import type { Metadata } from "next";
import { CaseStudies } from "@/components/site/CaseStudies";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { Testimonials } from "@/components/site/Testimonials";

export const metadata: Metadata = {
  title: "Success Stories | TGL",
  description: "Explore success stories across industries and platforms.",
};

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="Success Stories" /></MotionInView>
        <MotionInView><CaseStudies /></MotionInView>
        <MotionInView><Testimonials /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
