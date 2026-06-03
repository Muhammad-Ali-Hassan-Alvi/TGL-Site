import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { ServiceDetails } from "@/components/site/ServiceDetails";

export const metadata: Metadata = {
  title: "FAQ | TGL",
  description: "Frequently asked topics about services and delivery model.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="FAQ" /></MotionInView>
        <MotionInView><ServiceDetails /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
