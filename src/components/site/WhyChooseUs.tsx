"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactElement, type ReactNode } from "react";

/* ─── Inline SVG icons ────────────────────────────────────── */

type IconProps = { className?: string };

const Icons = {
  CheckCircle: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Search: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  FileText: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  Code: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Users: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  MessageSquare: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  ShieldCheck: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
};

/* ─── Generic helpers ─────────────────────────────────────── */

/** Mouse-tracking 3D tilt card wrapper. */
function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    el.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${-y}deg) translateZ(12px) scale(1.02)`;
    el.style.transition = "transform 0.08s ease";
    el.style.boxShadow = `${x * -0.8}px ${y * 0.8}px 40px rgba(20,184,166,0.15), 0 20px 60px rgba(0,0,0,0.35)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s ease";
    el.style.boxShadow = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const dur = 2000;
          const t0 = performance.now();
          let id = 0;
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / dur);
            setVal(Math.round((1 - (1 - p) ** 3) * to));
            if (p < 1) id = requestAnimationFrame(tick);
          };
          id = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {val.toLocaleString()}
      <span className="text-brand-cyan">{suffix}</span>
    </span>
  );
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

/* ─── Content ─────────────────────────────────────────────── */

type Step = {
  icon: (props: IconProps) => ReactElement;
  title: string;
  desc: string;
};

/** How TGL delivers marketing, MERN, and Next.js projects. */
const HIRING_STEPS: Step[] = [
  {
    icon: Icons.Search,
    title: "Discovery & Goals",
    desc: "We clarify business objectives — traffic targets for marketing, feature scope for MERN, or SEO and performance goals for Next.js — before work begins.",
  },
  {
    icon: Icons.FileText,
    title: "Strategy & Scope",
    desc: "You receive a concrete plan: channel mix and content calendar, database and API outline, or Next.js sitemap and component architecture with timelines.",
  },
  {
    icon: Icons.Code,
    title: "Build & Launch",
    desc: "Campaigns go live, MERN backends and React frontends ship in sprints, or Next.js pages deploy with staging reviews so nothing surprises you at launch.",
  },
  {
    icon: Icons.Users,
    title: "Review & Feedback",
    desc: "Regular check-ins, shared dashboards, and demo sessions keep stakeholders aligned — whether we are optimizing ads or merging production code.",
  },
  {
    icon: Icons.MessageSquare,
    title: "Measure & Refine",
    desc: "Analytics, ad performance, and app metrics inform the next iteration — we tune copy, spend, APIs, and Core Web Vitals based on real data.",
  },
  {
    icon: Icons.ShieldCheck,
    title: "Handover & Support",
    desc: "Documentation, access, and training so your team can run campaigns or maintain the codebase — with optional ongoing support from TGL.",
  },
];

const WORKFLOW_FEATURES = [
  "Daily check-in and check-out",
  "Detailed daily progress reports",
  "Regular meetings with your team",
  "Weekly CEO review meetings",
  "Full weekly project reports",
  "Continuous feedback alignment",
];

const STATS = [
  { value: 3, label: "Core Services" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "h", label: "Support Availability" },
  { value: 14, suffix: "d", label: "Typical Kickoff" },
];

/* ─── Pinned hiring-process showcase ──────────────────────── */

function HiringProcess() {
  const isCompact = useIsCompact();
  if (isCompact) return <HiringProcessStack />;
  return <HiringProcessScroll />;
}

function HiringProcessScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const total = HIRING_STEPS.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.0001,
  });

  // Track which step is in focus right now (snapped, for header counter & dots).
  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(progress, "change", (p) => {
    const idx = Math.min(total - 1, Math.max(0, Math.floor(p * total)));
    setActiveIndex(idx);
  });

  const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} style={{ height: `${(total + 1) * 80}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* ambient brand glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(20,184,166,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center gap-8 px-6">
          {/* Section heading */}
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-brand-cyan">
              Vetting Process
            </span>
            <h3 className="text-[26px] font-semibold leading-[1.15] text-white md:text-[40px]">
              How We Vet Every Engineer
            </h3>
            <p className="max-w-[600px] text-[14px] leading-[1.65] text-white/55 md:text-[15px]">
              Every developer in your seat has been through this 6-stage filter.
              Here&apos;s exactly what we measure before they ever reach your team.
            </p>
          </div>

          {/* Device-screen mockup */}
          <DeviceScreen
            steps={HIRING_STEPS}
            progress={progress}
            activeIndex={activeIndex}
            progressWidth={progressWidth}
          />

          {/* Step dots */}
          <div className="flex items-center gap-2.5 md:gap-3">
            {HIRING_STEPS.map((_, i) => (
              <StepDot key={i} index={i} total={total} progress={progress} active={i === activeIndex} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeviceScreen({
  steps,
  progress,
  activeIndex,
  progressWidth,
}: {
  steps: Step[];
  progress: MotionValue<number>;
  activeIndex: number;
  progressWidth: MotionValue<string>;
}) {
  const total = steps.length;

  return (
    <div
      className="relative w-full max-w-[820px] overflow-hidden rounded-[22px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%), #1A1A1E",
      }}
    >
      {/* Top chrome bar */}
      <div className="flex items-center gap-3 border-b border-white/8 bg-white/[0.03] px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-auto flex items-center gap-3 text-[12px] tracking-[0.16em] text-white/40">
              <span className="hidden sm:inline">TGL · DELIVERY PROCESS</span>
          <span className="rounded-md bg-white/5 px-2 py-1 font-mono text-[11px] text-white/70">
            Step {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </span>
      </div>

      {/* Stage where step content cycles */}
      <div className="relative h-[420px] md:h-[440px]">
        {steps.map((step, i) => (
          <StepCard key={i} step={step} index={i} total={total} progress={progress} />
        ))}
      </div>

      {/* Progress bar */}
      <div className="relative h-[3px] w-full bg-white/10">
        <motion.div
          className="absolute left-0 top-0 h-full"
          style={{ width: progressWidth, backgroundColor: "#14B8A6" }}
        />
      </div>
    </div>
  );
}

function StepCard({
  step,
  index,
  total,
  progress,
}: {
  step: Step;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const Icon = step.icon;
  const start = index / total;
  const end = (index + 1) / total;
  const buf = 0.045;

  const opacity = useTransform(
    progress,
    [Math.max(0, start - buf), start + buf, end - buf, Math.min(1, end + buf)],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    progress,
    [Math.max(0, start - buf), start + buf, end - buf, Math.min(1, end + buf)],
    [40, 0, 0, -40],
  );

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-8 text-center md:px-14"
      style={{ opacity, y, willChange: "opacity, transform" }}
    >
      <span
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{ backgroundColor: "rgba(20,184,166,0.14)" }}
      >
        <Icon className="h-8 w-8 text-brand-cyan" />
      </span>
      <span className="font-mono text-[12px] tracking-[0.32em] text-white/40">
        STEP {String(index + 1).padStart(2, "0")} OF {String(total).padStart(2, "0")}
      </span>
      <h4 className="max-w-[640px] text-[24px] font-semibold leading-[1.2] text-white md:text-[34px]">
        {step.title}
      </h4>
      <p className="max-w-[620px] text-[14px] leading-[1.7] text-white/60 md:text-[16px]">
        {step.desc}
      </p>
    </motion.div>
  );
}

function StepDot({
  index,
  total,
  progress,
  active,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  active: boolean;
}) {
  // A dot becomes "filled" once we cross into its slice of the scroll.
  const threshold = index / total;
  const fill = useTransform(progress, [threshold - 0.01, threshold + 0.01], [0, 1]);

  return (
    <div className="relative flex flex-col items-center gap-1.5">
      <div className="relative h-2.5 w-2.5 overflow-hidden rounded-full bg-white/15">
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: "#14B8A6", opacity: fill }}
        />
      </div>
      <span
        className={`text-[10px] font-mono tracking-wider transition-colors ${
          active ? "text-brand-cyan" : "text-white/30"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

/* ─── Mobile / small-viewport fallback ────────────────────── */

function HiringProcessStack() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-cyan">
          Vetting Process
        </span>
        <h3 className="text-[26px] font-semibold leading-[1.15] text-white">
          How We Vet Every Engineer
        </h3>
        <p className="max-w-[560px] text-[14px] leading-[1.65] text-white/55">
          Every developer in your seat has been through this 6-stage filter.
        </p>
      </div>

      <div className="relative w-full">
        {/* Vertical accent line */}
        <div
          aria-hidden
          className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-cyan/0 via-brand-cyan/40 to-brand-cyan/0"
        />
        <ol className="flex flex-col gap-5">
          {HIRING_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="relative flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(20,184,166,0.14)" }}
                >
                  <Icon className="h-5 w-5 text-brand-cyan" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] tracking-[0.24em] text-white/40">
                    STEP {String(i + 1).padStart(2, "0")} OF {String(HIRING_STEPS.length).padStart(2, "0")}
                  </span>
                  <h4 className="text-[17px] font-semibold leading-snug text-white">{step.title}</h4>
                  <p className="text-[14px] leading-[1.65] text-white/55">{step.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

/* ─── Main exported component ─────────────────────────────── */

export function WhyChooseUs() {
  return (
    <section
      className="pemogan-hero-font text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-sm font-medium text-brand-cyan">
            How we work
          </span>
          <h2 className="text-[28px] font-semibold leading-[1.22] text-white sm:text-[36px] md:text-[50px]">
            Marketing &amp; Development, Delivered Clearly
          </h2>
          <p className="max-w-[650px] text-[15px] leading-[1.7] text-white/60 md:text-[20px]">
            TGL focuses on three services — digital marketing, MERN stack, and Next.js — with a
            transparent process from first brief to launch and beyond.
          </p>
        </div>

        {/* ── How It Works ── */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 md:mt-16 md:p-10">
          <h3 className="mb-6 text-center text-xl font-semibold text-white md:text-2xl">
            How Our Developers Work With You
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WORKFLOW_FEATURES.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
              >
                <Icons.CheckCircle className="h-5 w-5 shrink-0 text-brand-cyan" />
                <span className="text-[18px] leading-[1.5] text-white/80">{feature}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[16px] text-white/50">
            Every developer works dedicatedly under your defined Standard Operating Procedures (SOPs).
            Weekly review meetings include you, the developer, project manager, and our CEO.
          </p>
        </div>
      </div>

      {/* ── Pinned scroll-driven hiring funnel (full-bleed for the sticky pin) ── */}
      <HiringProcess />

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-16 sm:px-6 lg:px-8 md:pb-24 md:pt-24">
        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <TiltCard
              key={stat.label}
              className={`flex flex-col items-start gap-1 rounded-2xl border bg-white/5 px-4 py-4 backdrop-blur-lg sm:flex-row sm:items-center sm:gap-3 sm:px-5 sm:py-5 ${
                i === 2 ? "border-brand-cyan" : "border-white/10"
              }`}
            >
              <span className="text-[28px] font-semibold leading-[1.2] text-white md:text-[50px]">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[13px] leading-[1.4] text-white/50 md:text-[14px]">
                {stat.label}
              </span>
            </TiltCard>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 text-center md:mt-14">
          <p className="mx-auto max-w-[600px] text-[16px] italic leading-[1.7] text-white/60">
            &ldquo;Let&apos;s build your tech team, the right way, with the right people.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
