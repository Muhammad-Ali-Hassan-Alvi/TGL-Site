import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { industryItems } from "@/content/siteContent";

type Params = { slug: string };

export function generateStaticParams() {
  return industryItems.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const industry = industryItems.find((item) => item.slug === params.slug);
  if (!industry) {
    return { title: "Industry | TGL" };
  }
  return {
    title: `${industry.title} Solutions | TGL`,
    description: industry.desc,
  };
}

export default function IndustryDetailTemplatePage({ params }: { params: Params }) {
  const industry = industryItems.find((item) => item.slug === params.slug);
  if (!industry) return notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title={`${industry!.title} Solutions`} /></MotionInView>
        <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 md:p-10">
              <p className="text-[16px] leading-[1.8] text-white/75">{industry!.desc}</p>
              <h2 className="mt-8 text-[30px] font-semibold text-white">Key Capabilities</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {industry!.capabilities.map((capability) => (
                  <li key={capability} className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white/85">
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
