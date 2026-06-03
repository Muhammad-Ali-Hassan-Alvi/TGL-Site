"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  Headphones,
  Layers,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── Content ─────────────────────────────────────────────── */

const HEADLINE = {
  prefix: "Grow Online with",
  highlight: "Digital Marketing",
  trail: "MERN & Next.js Builds",
};

const ABOUT = {
  eyebrow: "About",
  highlightWord: "TGL",
  heading: "Marketing · MERN · Next.js",
  body:
    "TGL (The Great Logics) helps businesses win online — with digital marketing that drives leads, MERN stack apps that scale, and Next.js sites built for speed and SEO. One team for growth and modern web development.",
};

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
];

const SERVICES: { icon: string; title: string; desc: string }[] = [
  {
    icon: "/images/icons/business-consultant-consulting-svgrepo-com.svg",
    title: "Digital Marketing",
    desc:
      "SEO, paid campaigns, social content, and analytics — structured to attract the right audience and convert interest into qualified leads.",
  },
  {
    icon: "/images/icons/team-svgrepo-com.svg",
    title: "MERN Stack",
    desc:
      "MongoDB, Express, React, and Node.js — full-stack products from APIs and admin panels to customer-facing apps your team can maintain.",
  },
  {
    icon: "/images/icons/employee-solid.svg",
    title: "Next.js",
    desc:
      "High-performance React sites with server rendering, clean routing, and SEO-friendly architecture — built to launch fast and rank well.",
  },
];

/** Renders a monochrome SVG file as a brand-colored silhouette via CSS mask. */
function MaskIcon({
  src,
  size = 26,
  color = "#14B8A6",
}: {
  src: string;
  size?: number;
  color?: string;
}) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

const STATS = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 45, suffix: "+", label: "Active Clients" },
  { value: 8, suffix: "+", label: "Years in Business" },
  { value: 3, suffix: "", label: "Core Services" },
];

const VALUE_PROPS: { icon: LucideIcon; text: string }[] = [
  { icon: TrendingUp, text: "Marketing tied to measurable KPIs" },
  { icon: Layers, text: "MERN & Next.js under one roof" },
  { icon: Zap, text: "Fast launches with clear milestones" },
  { icon: ShieldCheck, text: "Transparent reporting & demos" },
  { icon: UserCheck, text: "Dedicated project lead" },
  { icon: Headphones, text: "Support after go-live" },
];

/* ─── Hooks ───────────────────────────────────────────────── */

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const t0 = performance.now();
    let id = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setVal(Math.round((1 - (1 - p) ** 3) * target));
      if (p < 1) id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [active, target, duration]);
  return val;
}

function useIsCompact(breakpoint = 1024) {
  const [compact, setCompact] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false,
  );
  useEffect(() => {
    const check = () => setCompact(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return compact;
}

/* ─── Per-panel scroll-driven helpers ─────────────────────── */

const PANELS = 5;
// At progress p, the track has translated by p * -((PANELS-1)/PANELS) of its own width.
// Panel i is centered when progress = i / (PANELS - 1).
const panelCenter = (i: number) => i / (PANELS - 1);
const PANEL_HALF = 1 / (PANELS - 1) / 2; // half of one panel's progress span

function usePanelOpacity(progress: MotionValue<number>, index: number) {
  const c = panelCenter(index);
  return useTransform(
    progress,
    [
      c - PANEL_HALF * 1.5,
      c - PANEL_HALF * 0.5,
      c + PANEL_HALF * 0.5,
      c + PANEL_HALF * 1.5,
    ],
    [0, 1, 1, 0],
  );
}

function usePanelLift(progress: MotionValue<number>, index: number) {
  const c = panelCenter(index);
  return useTransform(
    progress,
    [c - PANEL_HALF * 1.5, c, c + PANEL_HALF * 1.5],
    [60, 0, -40],
  );
}

/** Trigger a one-shot boolean once `progress` crosses a center-distance threshold. */
function usePanelTrigger(progress: MotionValue<number>, index: number) {
  const [triggered, setTriggered] = useState(false);
  const fired = useRef(false);
  const c = panelCenter(index);
  useEffect(() => {
    return progress.on("change", (v) => {
      if (!fired.current && v >= c - PANEL_HALF) {
        fired.current = true;
        setTriggered(true);
      }
    });
  }, [progress, c]);
  return triggered;
}

/* ─── Main component ──────────────────────────────────────── */

export function HorizontalShowcase() {
  const isCompact = useIsCompact();
  if (isCompact) return <CompactStack />;
  return <HorizontalScroll />;
}

function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.0001,
  });

  // Track is 500vw wide, translates from 0 → -((PANELS-1)/PANELS)*100% = -80%
  const trackX = useTransform(smooth, [0, 1], ["0%", "-80%"]);
  const progressWidth = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="pemogan-hero-font relative text-white"
      style={{ backgroundColor: "#0B1220", height: "500vh" }}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ backgroundColor: "#0B1220" }}
      >
        {/* radial brand glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(20,184,166,0.10) 0%, transparent 70%)",
          }}
        />

        {/* top progress bar (mirrors wcf__progressbar) */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 h-[3px] bg-white/10">
          <motion.div
            className="h-full"
            style={{ width: progressWidth, backgroundColor: "#14B8A6" }}
          />
        </div>

        {/* horizontal track */}
        <motion.div
          className="flex h-full"
          style={{ x: trackX, width: "500vw" }}
        >
          <PanelHeadline progress={smooth} index={0} />
          <PanelAbout progress={smooth} index={1} />
          <PanelServices progress={smooth} index={2} />
          <PanelStats progress={smooth} index={3} />
          <PanelCta progress={smooth} index={4} />
        </motion.div>

        {/* panel index pill (bottom-center) — orientation cue */}
        <ProgressPills progress={smooth} />
      </div>
    </section>
  );
}

function ProgressPills({ progress }: { progress: MotionValue<number> }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    return progress.on("change", (v) => {
      const i = Math.min(PANELS - 1, Math.max(0, Math.round(v * (PANELS - 1))));
      setActive(i);
    });
  }, [progress]);
  return (
    <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
      {Array.from({ length: PANELS }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 rounded-full transition-all duration-500"
          style={{
            width: i === active ? 28 : 10,
            backgroundColor: i === active ? "#14B8A6" : "rgba(255,255,255,0.25)",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Panel 1: Big headline ───────────────────────────────── */

function PanelHeadline({
  progress,
  index,
}: {
  progress: MotionValue<number>;
  index: number;
}) {
  const opacity = usePanelOpacity(progress, index);
  const y = usePanelLift(progress, index);

  return (
    <div className="flex h-full w-screen items-center justify-center px-6 pt-20 md:px-12">
      <motion.h2
        className="max-w-[1100px] text-center font-semibold leading-[1.08] text-white"
        style={{
          opacity,
          y,
          fontSize: "clamp(2.4rem, 6.2vw, 84px)",
          perspective: "400px",
        }}
      >
        <span className="block">{HEADLINE.prefix}</span>
        <span className="block">
          <span style={{ color: "#14B8A6" }}>{HEADLINE.highlight}</span>
        </span>
        <span className="block">{HEADLINE.trail}</span>
      </motion.h2>
    </div>
  );
}

/* ─── Panel 2: About ──────────────────────────────────────── */

function PanelAbout({
  progress,
  index,
}: {
  progress: MotionValue<number>;
  index: number;
}) {
  const opacity = usePanelOpacity(progress, index);
  const y = usePanelLift(progress, index);
  const c = panelCenter(index);

  // Scroll-driven motion for the 3D ring image — rotates and scales in
  // place so the image stays perfectly centered in its container.
  const imgRotate = useTransform(
    progress,
    [c - PANEL_HALF * 1.6, c, c + PANEL_HALF * 1.6],
    [-65, 0, 65],
  );
  const imgScale = useTransform(
    progress,
    [c - PANEL_HALF * 1.6, c, c + PANEL_HALF * 1.6],
    [0.82, 1, 0.92],
  );

  return (
    <motion.div
      className="flex h-full w-screen items-center pt-20 md:pt-24"
      style={{ opacity, y }}
    >
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 md:grid-cols-[1fr_auto] md:px-10">
        <div>
          <h4 className="text-[18px] font-semibold tracking-wide text-white/80 md:text-[20px]">
            {ABOUT.eyebrow}{" "}
            <span style={{ color: "#14B8A6" }}>{ABOUT.highlightWord}</span>
          </h4>
          <h2 className="mt-4 max-w-[820px] font-semibold leading-[1.18] text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 52px)" }}
          >
            {ABOUT.heading}
          </h2>
          <p className="mt-6 max-w-[640px] text-[16px] leading-[1.85] text-white/65 md:text-[17px]">
            {ABOUT.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-[13px] font-semibold text-white/85 transition hover:border-brand-cyan hover:text-brand-cyan"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* 3D abstract ring — scroll-driven motion */}
        <div className="relative hidden h-[420px] w-[420px] items-center justify-center md:flex">
          {/* radial brand glow behind the image */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(20,184,166,0.32) 0%, rgba(20,184,166,0.08) 45%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
          {/* faint orbiting ring behind the asset */}
          <div
            aria-hidden
            className="absolute inset-10 rounded-full border border-white/10"
          />
          <motion.img
            src="/images/Image-Evaluation-Design-Pemogan-3-1.png"
            alt="TGL engineering excellence"
            className="relative h-full w-full select-none object-contain drop-shadow-[0_30px_80px_rgba(20,184,166,0.22)]"
            style={{
              rotate: imgRotate,
              scale: imgScale,
              willChange: "transform",
              transformOrigin: "50% 50%",
            }}
            draggable={false}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Panel 3: Services with progress bars ────────────────── */

function PanelServices({
  progress,
  index,
}: {
  progress: MotionValue<number>;
  index: number;
}) {
  const opacity = usePanelOpacity(progress, index);
  const y = usePanelLift(progress, index);
  const c = panelCenter(index);
  // bar fills as panel approaches center
  const fill = useTransform(
    progress,
    [c - PANEL_HALF * 1.2, c],
    ["0%", "100%"],
  );

  return (
    <motion.div
      className="flex h-full w-screen items-center pt-20 md:pt-24"
      style={{ opacity, y }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <p className="mb-10 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-cyan">
          What we do
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {SERVICES.map((s) => (
            <div key={s.title} className="flex flex-col gap-5">
              <div className="relative h-[2px] w-full overflow-hidden bg-white/10">
                <motion.div
                  className="absolute left-0 top-0 h-full"
                  style={{ width: fill, backgroundColor: "#14B8A6" }}
                />
              </div>
              <span
                className="flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ backgroundColor: "rgba(20,184,166,0.12)" }}
              >
                <MaskIcon src={s.icon} size={28} />
              </span>
              <h4 className="text-[22px] font-semibold leading-tight text-white md:text-[26px]">
                {s.title}
              </h4>
              <p className="text-[15px] leading-[1.75] text-white/60">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Panel 4: Stats + image ──────────────────────────────── */

function PanelStats({
  progress,
  index,
}: {
  progress: MotionValue<number>;
  index: number;
}) {
  const opacity = usePanelOpacity(progress, index);
  const y = usePanelLift(progress, index);
  const triggered = usePanelTrigger(progress, index);

  return (
    <motion.div
      className="flex h-full w-screen items-center pt-20 md:pt-24"
      style={{ opacity, y }}
    >
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 px-6 md:grid-cols-[1.1fr_1fr] md:gap-14 md:px-10">
        <div>
          <h3
            className="mb-8 max-w-[460px] font-semibold leading-[1.18] text-white"
            style={{ fontSize: "clamp(1.6rem, 3vw, 40px)" }}
          >
            Outcomes that{" "}
            <span style={{ color: "#14B8A6" }}>compound</span>.
          </h3>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {STATS.map((s) => (
              <StatCard key={s.label} stat={s} active={triggered} />
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {VALUE_PROPS.slice(0, 4).map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.text}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(20,184,166,0.15)" }}
                  >
                    <Icon
                      size={15}
                      style={{ color: "#14B8A6" }}
                      strokeWidth={2}
                    />
                  </span>
                  <span className="text-[13px] leading-[1.5] text-white/75">
                    {p.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(20,184,166,0.18), transparent 65%)",
            }}
          />
          <img
            src="/MobileProjectPNG.png"
            alt="TGL engineering work"
            className="animate-float relative h-auto w-full max-w-[480px] select-none object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({
  stat,
  active,
}: {
  stat: { value: number; suffix: string; label: string };
  active: boolean;
}) {
  const count = useCountUp(stat.value, active);
  return (
    <div className="flex flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5">
      <span className="text-[34px] font-semibold leading-none text-white md:text-[44px]">
        {count}
        <span style={{ color: "#14B8A6" }}>{stat.suffix}</span>
      </span>
      <span className="text-[12px] leading-[1.4] text-white/55 md:text-[13px]">
        {stat.label}
      </span>
    </div>
  );
}

/* ─── Panel 5: CTA ────────────────────────────────────────── */

function PanelCta({
  progress,
  index,
}: {
  progress: MotionValue<number>;
  index: number;
}) {
  const opacity = usePanelOpacity(progress, index);
  const y = usePanelLift(progress, index);

  return (
    <motion.div
      className="flex h-full w-screen items-center pt-20 md:pt-24"
      style={{ opacity, y }}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-7 px-6 text-center md:px-10">
        <p className="text-[16px] font-medium tracking-wide text-white/55 md:text-[20px]">
          Have a project in mind?
        </p>
        <h2
          className="max-w-[1000px] font-semibold leading-[1.1] text-white"
          style={{ fontSize: "clamp(2rem, 5.5vw, 72px)" }}
        >
          Let&apos;s make something{" "}
          <span style={{ color: "#14B8A6" }}>great together</span>!
        </h2>

        <Link
          href="/contacts"
          className="group relative mt-4 inline-flex h-[180px] w-[180px] items-center justify-center rounded-full text-center text-[14px] font-semibold uppercase leading-tight tracking-[0.16em] text-white shadow-[0_14px_44px_rgba(20,184,166,0.45)] transition-all duration-300 hover:scale-105"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: "#14B8A6" }}
          />
          <span
            aria-hidden
            className="absolute inset-0 rounded-full border border-white/30"
          />
          <span className="relative">
            Connect
            <br />
            With Us
          </span>
          <ArrowUpRight
            size={20}
            className="absolute right-7 top-7 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── Compact (mobile/tablet) fallback — stacked ──────────── */

function CompactStack() {
  return (
    <section
      className="pemogan-hero-font relative text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      <div className="mx-auto max-w-[1280px] space-y-16 px-4 py-20 sm:px-6 lg:px-8 md:py-28">
        {/* Headline */}
        <div className="text-center">
          <h2
            className="mx-auto max-w-[920px] font-semibold leading-[1.15] text-white"
            style={{ fontSize: "clamp(1.8rem, 7vw, 56px)" }}
          >
            {HEADLINE.prefix}{" "}
            <span style={{ color: "#14B8A6" }}>{HEADLINE.highlight}</span>{" "}
            {HEADLINE.trail}
          </h2>
        </div>

        {/* About */}
        <div>
          <h4 className="text-[18px] font-semibold text-white/80">
            {ABOUT.eyebrow}{" "}
            <span style={{ color: "#14B8A6" }}>{ABOUT.highlightWord}</span>
          </h4>
          <h3
            className="mt-3 font-semibold leading-[1.2] text-white"
            style={{ fontSize: "clamp(1.5rem, 5vw, 38px)" }}
          >
            {ABOUT.heading}
          </h3>
          <p className="mt-4 text-[15px] leading-[1.85] text-white/65">
            {ABOUT.body}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-[13px] font-semibold text-white/85"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="flex flex-col gap-4">
              <div
                className="h-[2px] w-full"
                style={{ backgroundColor: "#14B8A6" }}
              />
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: "rgba(20,184,166,0.12)" }}
              >
                <MaskIcon src={s.icon} size={24} />
              </span>
              <h4 className="text-[20px] font-semibold text-white">
                {s.title}
              </h4>
              <p className="text-[14px] leading-[1.75] text-white/60">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5"
            >
              <p className="text-[34px] font-semibold leading-none text-white">
                {s.value}
                <span style={{ color: "#14B8A6" }}>{s.suffix}</span>
              </p>
              <p className="mt-1 text-[12px] text-white/55">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-[16px] font-medium text-white/55">
            Have a project in mind?
          </p>
          <h2
            className="max-w-[700px] font-semibold leading-[1.2] text-white"
            style={{ fontSize: "clamp(1.8rem, 6vw, 48px)" }}
          >
            Let&apos;s make something{" "}
            <span style={{ color: "#14B8A6" }}>great together</span>!
          </h2>
          <Link
            href="/contacts"
            className="inline-flex h-[140px] w-[140px] items-center justify-center rounded-full text-center text-[13px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg"
            style={{ backgroundColor: "#14B8A6" }}
          >
            Connect
            <br />
            With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
