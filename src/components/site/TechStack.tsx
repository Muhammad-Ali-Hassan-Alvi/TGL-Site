"use client";

import { useState } from "react";

type Item = readonly [string, string];

function SkillPill({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2">
      <span className="text-[13px] font-semibold tabular-nums text-[#4E4E4E] sm:text-[15px]">
        {num}
      </span>
      <span className="text-[13px] font-medium text-white sm:text-[14px]">{label}</span>
    </div>
  );
}

function ColumnBlock({
  title,
  items,
  singleLine = false,
}: {
  title: string;
  items: readonly Item[];
  singleLine?: boolean;
}) {
  return (
    <div>
      <h3 className="mb-4 text-[22px] font-semibold text-white md:text-[26px]">
        {title}
      </h3>
      <div className={singleLine ? "grid grid-cols-2 gap-3 md:grid-cols-4" : "flex flex-col gap-3"}>
        {items.map(([num, label]) => (
          <SkillPill key={`${num}-${label}`} num={num} label={label} />
        ))}
      </div>
    </div>
  );
}

const TABS = [
  {
    id: "marketing",
    label: "Digital Marketing",
    content: (
      <ColumnBlock
        title="Channels & tools"
        singleLine
        items={[
          ["01", "Google Ads"],
          ["02", "Meta Ads"],
          ["03", "SEO / Search Console"],
          ["04", "Analytics & GA4"],
          ["05", "Social content"],
          ["06", "Email campaigns"],
        ]}
      />
    ),
  },
  {
    id: "mern",
    label: "MERN Stack",
    content: (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6">
        <ColumnBlock
          title="Frontend"
          items={[
            ["01", "React"],
            ["02", "TypeScript"],
            ["03", "Redux / Context"],
            ["04", "REST clients"],
          ]}
        />
        <ColumnBlock
          title="Backend"
          items={[
            ["01", "Node.js"],
            ["02", "Express"],
            ["03", "MongoDB"],
            ["04", "JWT / Auth"],
          ]}
        />
      </div>
    ),
  },
  {
    id: "next",
    label: "Next.js",
    content: (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr] md:gap-6">
        <div>
          <h3 className="mb-4 text-[22px] font-semibold text-white md:text-[26px]">
            Framework
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <SkillPill num="01" label="Next.js App Router" />
            <SkillPill num="02" label="React Server Components" />
            <SkillPill num="03" label="TypeScript" />
            <SkillPill num="04" label="Tailwind CSS" />
            <SkillPill num="05" label="API Routes" />
            <SkillPill num="06" label="Server Actions" />
          </div>
        </div>
        <ColumnBlock
          title="Deploy & SEO"
          items={[
            ["01", "Vercel"],
            ["02", "SSR / SSG"],
            ["03", "Metadata API"],
            ["04", "Core Web Vitals"],
          ]}
        />
      </div>
    ),
  },
] as const;

export function TechStack({ withSalesIntro = false }: { withSalesIntro?: boolean }) {
  const [active, setActive] = useState(0);

  const tabNav = (
    <nav
      className={`flex shrink-0 flex-row flex-wrap gap-3 ${withSalesIntro ? "lg:w-[220px] lg:flex-col lg:flex-nowrap" : "lg:w-[180px] lg:flex-col lg:flex-nowrap"} lg:gap-3`}
      aria-label="Technology categories"
    >
      {TABS.map((tab, i) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => setActive(i)}
          className={`rounded-full border px-5 py-3 text-center text-[14px] font-medium transition-all duration-300 lg:w-full ${
            i === active
              ? "border-brand-cyan bg-brand-cyan text-white"
              : "border-white/20 text-white hover:border-white/40"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );

  const panel = (
    <div
      key={active}
      className="min-w-0 flex-1 rounded-2xl border border-white/20 p-6 md:p-8"
    >
      {TABS[active].content}
    </div>
  );

  return (
    <section
      className="pemogan-hero-font text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        {withSalesIntro ? (
          <>
            <h2 className="text-[28px] font-semibold leading-[1.22] text-white sm:text-[36px] md:text-[50px]">
              Tools Behind Our
              <br />
              Three Services
            </h2>

            <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-5">
              {tabNav}
              {panel}
            </div>
          </>
        ) : (
          <>
            <h2 className="max-w-[400px] text-[28px] font-semibold leading-[1.22] text-white sm:text-[36px] md:text-[50px]">
              Tools Behind Our
              <br />
              Three Services
            </h2>

            <div className="mt-10 flex flex-col gap-8 lg:mt-14 lg:flex-row lg:gap-5">
              {tabNav}
              {panel}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
