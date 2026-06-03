import type { ReactNode } from "react";
import Link from "next/link";
import { serviceItems } from "@/content/siteContent";

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-teal-500/25 bg-[#0b1220]/40 px-3 py-1.5 text-[12px] font-medium text-slate-300 sm:px-4 sm:py-2 sm:text-[13px]">
      {children}
    </span>
  );
}

function OutlineNumber({ n }: { n: string }) {
  return (
    <span
      className="select-none text-[clamp(3.5rem,12vw,7.5rem)] font-semibold leading-none tracking-tight text-transparent"
      style={{ WebkitTextStroke: "1px rgba(20,184,166,0.35)" }}
    >
      {n}
    </span>
  );
}

const CARD_STYLES = [
  "relative overflow-hidden rounded-2xl border border-teal-500/20 bg-[#131d2e]/60 p-6 sm:p-8 md:p-10",
  "relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-teal-500/20 bg-[#131d2e]/60 p-6 sm:p-7",
  "relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-teal-500/30 p-6 sm:p-7 shadow-[0_16px_48px_rgba(20,184,166,0.15)]",
] as const;

export function ServicesShowcase() {
  const [featured, second, third] = serviceItems;

  return (
    <section
      id="services-showcase"
      className="pemogan-hero-font section-shell py-14 md:py-18 text-white"
      style={{ backgroundColor: "#0b1220" }}
    >
      <div className="section-container">
        <p className="section-eyebrow text-center">Our Services</p>
        <h2 className="heading-enterprise mt-2 text-center text-2xl text-white sm:text-3xl md:text-4xl">
          Transform Your Business
        </h2>
        <p className="mx-auto mt-3 max-w-[640px] text-center text-[15px] leading-[1.7] text-white/55">
          Digital marketing, MERN stack development, and Next.js — the three pillars of how TGL helps you grow online.
        </p>

        <div className="flex flex-col gap-4 md:gap-5">
          {/* Featured — Digital Marketing */}
          <div className={CARD_STYLES[0]}>
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start md:gap-6">
              <div className="min-w-0 space-y-5">
                <h3 className="text-[22px] font-semibold text-white sm:text-[26px] md:text-[28px]">
                  {featured.label}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {featured.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <p className="max-w-[640px] text-[15px] leading-[1.7] text-white/60">
                  {featured.summary}
                </p>
                <Link
                  href={`/services/${featured.slug}`}
                  className="inline-flex items-center justify-center rounded-lg bg-brand-cyan px-6 py-2.5 text-[13px] font-semibold text-[#0b1220] transition hover:bg-brand-cyan-bright"
                >
                  Learn more
                </Link>
              </div>
              <div className="flex justify-end md:shrink-0 md:pt-1">
                <OutlineNumber n="01" />
              </div>
            </div>
          </div>

          {/* MERN + Next.js */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {[second, third].map((service, i) => {
              const isHighlight = i === 1;
              return (
                <div
                  key={service.slug}
                  className={isHighlight ? CARD_STYLES[2] : CARD_STYLES[1]}
                  style={isHighlight ? { backgroundColor: "rgba(20,184,166,0.12)" } : undefined}
                >
                  <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                    {isHighlight ? (
                      <span className="text-[clamp(3rem,10vw,5.5rem)] font-semibold leading-none text-teal-300">
                        03
                      </span>
                    ) : (
                      <OutlineNumber n="02" />
                    )}
                  </div>
                  <div className="mt-12 flex flex-1 flex-col gap-4 pr-14 sm:mt-14">
                    <h3 className="text-xl font-semibold text-white sm:text-[22px]">
                      {service.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <p className="mt-auto text-[14px] leading-[1.65] text-white/70">
                      {service.summary}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex w-fit items-center text-[13px] font-semibold text-brand-cyan transition hover:text-brand-cyan-bright"
                    >
                      View service →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
