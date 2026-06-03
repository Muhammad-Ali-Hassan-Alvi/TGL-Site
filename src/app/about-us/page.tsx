import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
// import { OurTeams } from "@/components/site/OurTeams";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | TGL",
  description: "Meet our team and why clients choose TGL (The Great Logics).",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="About Us" /></MotionInView>
        <MotionInView><WhyChooseUs /></MotionInView>
        {/* <MotionInView><OurTeams /></MotionInView> */}
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
