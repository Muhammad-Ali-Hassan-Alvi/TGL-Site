"use client";

import {
  UserCheck,
  Zap,
  ShieldCheck,
  TrendingUp,
  Layers,
  Headphones,
  type LucideIcon,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

/* ─── animated counter ─── */
function useCountUp(target: number, active: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t0 = performance.now();
    let id = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      // ease-out-cubic
      setVal(Math.round((1 - (1 - p) ** 3) * target));
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [active, target, duration]);
  return val;
}

/* ─── intersection observer hook ─── */
function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── single stat card ─── */
function StatCard({
  value,
  suffix,
  label,
  delay,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: string;
  inView: boolean;
}) {
  const count = useCountUp(value, inView);
  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center"
      style={{
        transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
      }}
    >
      <span className="text-[48px] font-bold leading-none text-white md:text-[56px]">
        {count}
        <span style={{ color: "#14b8a6" }}>{suffix}</span>
      </span>
      <span className="mt-2 text-[14px] leading-[1.5] text-white/50">
        {label}
      </span>
    </div>
  );
}

/* ─── value prop pill ─── */
function Prop({
  icon: Icon,
  text,
  delay,
  inView,
}: {
  icon: LucideIcon;
  text: string;
  delay: string;
  inView: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
      style={{
        transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-20px)",
      }}
    >
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: "rgba(20,184,166,0.15)" }}
      >
        <Icon size={17} style={{ color: "#14b8a6" }} strokeWidth={2} />
      </span>
      <span className="text-[14px] leading-[1.5] text-white/75">{text}</span>
    </div>
  );
}

export function OurVision() {
  const { ref, inView } = useInView(0.2);

  const stats = [
    { value: 150, suffix: "+", label: "Developers Placed" },
    { value: 60, suffix: "+", label: "Companies Served" },
    { value: 12, suffix: "+", label: "Years of Experience" },
    { value: 98, suffix: "%", label: "Client Retention Rate" },
  ];

  const props: { icon: LucideIcon; text: string }[] = [
    {
      icon: UserCheck,
      text: "Hand-picked, pre-vetted engineers ready to embed into your team",
    },
    {
      icon: Zap,
      text: "Staff in days, not months — without the hiring overhead",
    },
    {
      icon: ShieldCheck,
      text: "Full IP ownership & NDA-backed engagements for enterprise peace of mind",
    },
    {
      icon: TrendingUp,
      text: "Scale up or down effortlessly as your project demands shift",
    },
    {
      icon: Layers,
      text: "Full-stack, mobile, cloud, AI — every skill your roadmap needs",
    },
    {
      icon: Headphones,
      text: "Dedicated account management with weekly performance reviews",
    },
  ];

  return (
    <section
      className="pemogan-hero-font relative overflow-hidden text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      {/* subtle radial glow in the bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(20,184,166,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 md:py-28"
      >
        {/* ── top label ── */}
        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{
            borderColor: "rgba(20,184,166,0.35)",
            backgroundColor: "rgba(20,184,166,0.08)",
            transition: `opacity 0.6s ease, transform 0.6s ease`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(-12px)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "#14b8a6" }}
          />
          <span
            className="text-[12px] font-semibold uppercase tracking-widest"
            style={{ color: "#14b8a6" }}
          >
            Our Vision
          </span>
        </div>

        {/* ── heading ── */}
        <h2
          className="max-w-[640px] text-[clamp(2rem,5vw,52px)] font-bold leading-[1.15] text-white"
          style={{
            transition: `opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Connecting Great Companies
          <br />
          <span style={{ color: "#14b8a6" }}>
            with End-to-End AI & Software Engineering Talent
          </span>
        </h2>

        {/* ── subtext ── */}
        <p
          className="mt-5 max-w-[580px] text-[16px] leading-[1.85] text-white/55 md:text-[17px]"
          style={{
            transition: `opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          TGL (The Great Logics) is a specialized engineering partner delivering vetted
          talent across AI/ML, full-stack development, mobile, and cloud
          infrastructure. We integrate senior engineers directly into your teams
          to accelerate the development of intelligent, data-driven platforms at
          scale.
        </p>

        {/* ── 2-column layout: props left, stats right ── */}
        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_340px]">
          {/* ── value props ── */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {props.map((p, i) => (
              <Prop
                key={p.text}
                icon={p.icon}
                text={p.text}
                delay={`${0.15 + i * 0.07}s`}
                inView={inView}
              />
            ))}
          </div>

          {/* ── stat cards ── */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <StatCard
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                delay={`${0.2 + i * 0.1}s`}
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* ── bottom CTA strip ── */}
        <div
          className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between"
          style={{
            transition: `opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s`,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(22px)",
          }}
        >
          <p className="text-[15px] leading-[1.6] text-white/65 sm:max-w-[480px]">
            Ready to scale your engineering team without the overhead?{" "}
            <span className="font-semibold text-white">
              Let's talk about your needs.
            </span>
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#14b8a6",
              boxShadow: "0 8px 28px rgba(20,184,166,0.35)",
            }}
          >
            Hire Developers
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
