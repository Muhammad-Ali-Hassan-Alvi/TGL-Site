import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { caseStudyItems } from "@/content/siteContent";

type Params = { slug: string };

export function generateStaticParams() {
  return caseStudyItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const item = caseStudyItems.find((study) => study.slug === params.slug);
  if (!item) return { title: "Success Story | TGL" };
  return {
    title: `${item.title} | Success Story`,
    description: item.excerpt,
  };
}

export default function CaseStudyDetailPage({ params }: { params: Params }) {
  const item = caseStudyItems.find((study) => study.slug === params.slug);
  if (!item) return notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title={item!.title} /></MotionInView>
        <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 md:p-10">
              <p className="text-[12px] uppercase tracking-[0.12em] text-brand-cyan">{item!.industry}</p>
              <p className="mt-4 text-[16px] leading-[1.8] text-white/75">{item!.excerpt}</p>
              <h2 className="mt-8 text-[30px] font-semibold text-white">Business Impact</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {item!.impact.map((impact) => (
                  <li key={impact} className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white/90">
                    {impact}
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
