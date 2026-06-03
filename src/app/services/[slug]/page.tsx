import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { ServicesIntro } from "@/components/site/ServicesIntro";
import { serviceItems } from "@/content/siteContent";

type Params = { slug: string };

export function generateStaticParams() {
  return serviceItems.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const service = serviceItems.find((item) => item.slug === params.slug);
  if (!service) {
    return { title: "Service | TGL" };
  }
  return {
    title: `${service.label} | TGL`,
    description: service.summary,
  };
}

export default function ServiceDetailTemplatePage({ params }: { params: Params }) {
  const service = serviceItems.find((item) => item.slug === params.slug);
  if (!service) return notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title={service!.label} /></MotionInView>
        <MotionInView><ServicesIntro /></MotionInView>
        <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 md:p-10">
              <p className="text-[16px] leading-[1.8] text-white/75">{service!.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {service!.outcomes.map((outcome) => (
                  <span key={outcome} className="rounded-full border border-white/20 px-4 py-2 text-[13px] text-white/85">
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
