import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { caseStudyItems } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Success Stories | TGL",
  description: "Measurable outcomes delivered for enterprise and scaling product teams.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="Success Stories" /></MotionInView>
        <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <div className="grid gap-5 md:grid-cols-3">
              {caseStudyItems.map((item) => (
                <article key={item.slug} className="rounded-2xl border border-white/20 bg-white/5 p-6">
                  <p className="text-[12px] uppercase tracking-[0.12em] text-brand-cyan">{item.industry}</p>
                  <h2 className="mt-2 text-[26px] font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-[14px] leading-[1.7] text-white/65">{item.excerpt}</p>
                  <ul className="mt-4 space-y-1.5 text-[13px] text-white/80">
                    {item.impact.map((i) => (
                      <li key={i}>- {i}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="mt-5 inline-flex rounded-full border border-white/25 px-4 py-2 text-[13px] font-semibold text-white transition hover:border-brand-cyan hover:text-brand-cyan"
                  >
                    View Details
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
