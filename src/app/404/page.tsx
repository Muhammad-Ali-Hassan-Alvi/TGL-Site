import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { InnerPageHero } from "@/components/site/InnerPageHero";

export const metadata: Metadata = {
  title: "404 | TGL",
  description: "Page not found.",
};

export default function FourOhFourPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InnerPageHero title="404" />
        <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
          <div className="mx-auto max-w-[1280px] px-4 py-16 text-center sm:px-6 lg:px-8 md:py-24">
            <p className="text-[16px] text-white/60">The page you are looking for does not exist.</p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-7 py-3 text-[14px] font-semibold text-white shadow-lg transition hover:scale-95 hover:bg-brand-cyan-bright"
              >
                Back Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
