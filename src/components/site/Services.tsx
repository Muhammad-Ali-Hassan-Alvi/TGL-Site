"use client";

import Image from "next/image";
import { useState } from "react";
import { serviceItems } from "@/content/siteContent";
// import { ServicesIntro } from "./ServicesIntro"; // Folded into HorizontalShowcase

export function Services() {
  const [active, setActive] = useState(0);
  const tab = serviceItems[active];

  return (
    <section
      id="services"
      className="pemogan-hero-font text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      {/* <ServicesIntro /> */}
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        {/* ── Tab buttons ── */}
        <div className="-mx-[10px] flex gap-3 overflow-x-auto px-[10px] pb-2 md:mx-0 md:flex-wrap md:justify-center md:gap-[50px] md:overflow-visible md:px-0 md:pb-0">
          {serviceItems.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full border px-4 py-3 text-[14px] font-medium whitespace-nowrap transition-all duration-300 md:px-[15px] md:py-[15px] md:text-[15px] ${
                i === active
                  ? "border-brand-cyan text-white"
                  : "border-white/20 text-white hover:border-white/40"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Tab content ── */}
        <div
          key={active}
          className="mt-8 rounded-2xl border border-white/30 md:mt-[20px]"
        >
          <div className="grid items-end md:grid-cols-2">
            {/* Left — image overflows bottom of card */}
            <div className="flex items-end justify-center px-8 pt-8 md:px-12 md:pt-12">
              <Image
                src={tab.image}
                alt={tab.label}
                width={800}
                height={819}
                className="mb-[-70px] h-auto w-full max-w-[420px] select-none object-contain md:mb-[-100px]"
                sizes="(max-width: 768px) 90vw, 340px"
              />
            </div>

            {/* Right — content */}
            <div className="flex flex-col gap-6 p-8 md:p-12">
              <h2 className="text-[24px] font-semibold leading-[1.2] text-white sm:text-[32px] md:text-[36px]">
                {tab.label}
              </h2>

              <div className="flex flex-wrap gap-3">
                {tab.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-4 py-2 text-[13px] font-medium text-white/80 md:text-[14px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[15px] leading-[1.7] text-white/60 md:text-[16px]">
                {tab.summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
