import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
// import { OurTeams } from "@/components/site/OurTeams";

export const metadata: Metadata = {
  title: "Our Team | TGL",
  description: "Our team of engineers, designers, and delivery experts.",
};

export default function OurTeamPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="Our Team" /></MotionInView>
        {/* <MotionInView><OurTeams /></MotionInView> */}
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}
