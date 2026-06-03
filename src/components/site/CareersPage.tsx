"use client";

import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  Users,
  TrendingUp,
  Heart,
  Globe,
  Zap,
  ChevronDown,
} from "lucide-react";

/* ─── data ─── */
const OPEN_ROLES = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full-Time",
    tags: ["React", "Node.js", "PostgreSQL"],
    description:
      "Build and maintain B2B SaaS products for our enterprise clients. You'll work in a dedicated squad embedded inside a client team, shipping real features every sprint.",
  },
  {
    title: "Mobile Developer (React Native)",
    team: "Engineering",
    location: "Remote (Worldwide)",
    type: "Full-Time",
    tags: ["React Native", "iOS", "Android"],
    description:
      "Deliver polished cross-platform mobile experiences for clients across fintech, healthcare, and e-commerce. Strong TypeScript and performance optimization skills required.",
  },
  {
    title: "DevOps / Cloud Engineer",
    team: "Infrastructure",
    location: "Remote (Worldwide)",
    type: "Full-Time",
    tags: ["AWS", "Docker", "CI/CD", "Terraform"],
    description:
      "Own infrastructure, CI/CD pipelines, and cloud deployments for multiple client projects. You'll work closely with engineering squads to keep systems fast and reliable.",
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    location: "Remote (Worldwide)",
    type: "Full-Time",
    tags: ["Figma", "Design Systems", "User Research"],
    description:
      "Design delightful interfaces for web and mobile products. You'll be embedded with engineers and own the whole design process — from discovery to handoff.",
  },
  {
    title: "Business Development Manager",
    team: "Sales",
    location: "Hybrid / On-site",
    type: "Full-Time",
    tags: ["B2B Sales", "SaaS", "Account Management"],
    description:
      "Drive new client acquisition and grow existing accounts. You'll be the bridge between companies that need great developers and the talent we have to offer.",
  },
  {
    title: "Technical Recruiter",
    team: "Talent",
    location: "Remote (Worldwide)",
    type: "Full-Time",
    tags: ["Tech Hiring", "Screening", "Sourcing"],
    description:
      "Build our talent pipeline by identifying and vetting world-class developers. You know what good engineering looks like and can assess it quickly.",
  },
];

const PERKS = [
  { icon: Globe,      label: "Fully Remote",          desc: "Work from anywhere in the world, on your schedule." },
  { icon: TrendingUp, label: "Career Growth",          desc: "Regular reviews, mentorship, and a clear path to senior." },
  { icon: Zap,        label: "Cutting-Edge Projects",  desc: "Work on real products for funded companies and enterprises." },
  { icon: Users,      label: "Great Teams",            desc: "Collaborate with top engineers across the globe." },
  { icon: Heart,      label: "Health Benefits",        desc: "Comprehensive health and wellness support for full-timers." },
  { icon: Sparkles,   label: "Learning Budget",        desc: "Annual budget for courses, conferences, and tools." },
];

/* ─── hooks ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── role card ─── */
function RoleCard({
  role,
  index,
  inView,
}: {
  role: (typeof OPEN_ROLES)[0];
  index: number;
  inView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300"
      style={{
        transition: `opacity 0.65s ease ${0.08 * index}s, transform 0.65s ease ${0.08 * index}s, box-shadow 0.3s ease, border-color 0.3s ease`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 12px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(20,184,166,0.2)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(20,184,166,0.25)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
      }}
    >
      {/* header row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          {/* team badge */}
          <span
            className="mb-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-widest"
            style={{ backgroundColor: "rgba(20,184,166,0.12)", color: "#14b8a6" }}
          >
            {role.team}
          </span>
          <h3 className="text-[18px] font-bold text-white md:text-[20px]">{role.title}</h3>

          {/* meta */}
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 text-[13px] text-white/45">
              <MapPin size={13} /> {role.location}
            </span>
            <span className="flex items-center gap-1 text-[13px] text-white/45">
              <Clock size={13} /> {role.type}
            </span>
          </div>
        </div>

        {/* apply button */}
        <a
          href="mailto:mhussnainashiq@gmail.com?subject=Applying for: {{ role.title }}"
          className="group/btn inline-flex shrink-0 items-center gap-1.5 self-start rounded-full px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "#14b8a6",
            boxShadow: "0 4px 16px rgba(20,184,166,0.3)",
          }}
        >
          Apply Now
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </a>
      </div>

      {/* tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {role.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border px-3 py-0.5 text-[12px] text-white/55"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* description — expandable */}
      <button
        type="button"
        className="mt-4 flex w-full items-center gap-1.5 text-[13px] text-white/40 transition hover:text-white/70"
        onClick={() => setExpanded((v) => !v)}
      >
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
        {expanded ? "Hide details" : "View details"}
      </button>

      <div
        style={{
          maxHeight: expanded ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p className="mt-3 text-[14px] leading-[1.75] text-white/55">{role.description}</p>
      </div>
    </div>
  );
}

/* ─── perk card ─── */
function PerkCard({
  perk,
  index,
  inView,
}: {
  perk: (typeof PERKS)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = perk.icon;
  return (
    <div
      className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
      style={{
        transition: `opacity 0.65s ease ${0.08 * index}s, transform 0.65s ease ${0.08 * index}s`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
      }}
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ backgroundColor: "rgba(20,184,166,0.12)" }}
      >
        <Icon size={19} style={{ color: "#14b8a6" }} strokeWidth={1.8} />
      </span>
      <p className="text-[15px] font-semibold text-white">{perk.label}</p>
      <p className="text-[13px] leading-[1.7] text-white/50">{perk.desc}</p>
    </div>
  );
}

/* ─── main page ─── */
export function CareersPage() {
  const heroSection = useInView(0.1);
  const perksSection = useInView(0.1);
  const rolesSection = useInView(0.05);
  const ctaSection = useInView(0.2);

  return (
    <div
      className="pemogan-hero-font min-h-screen text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      {/* ═══ HERO ═══ */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(20,184,166,0.1) 0%, transparent 65%)",
        }}
      >
        <div
          ref={heroSection.ref}
          className="mx-auto max-w-[1280px] px-4 pb-20 pt-28 text-center sm:px-6 lg:px-8 md:pt-36"
        >
          {/* label */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{
              borderColor: "rgba(20,184,166,0.35)",
              backgroundColor: "rgba(20,184,166,0.08)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
              opacity: heroSection.inView ? 1 : 0,
              transform: heroSection.inView ? "translateY(0)" : "translateY(-14px)",
            }}
          >
            <Briefcase size={13} style={{ color: "#14b8a6" }} />
            <span
              className="text-[12px] font-semibold uppercase tracking-widest"
              style={{ color: "#14b8a6" }}
            >
              We're Hiring
            </span>
          </div>

          {/* heading */}
          <h1
            className="text-[clamp(2.4rem,6vw,64px)] font-bold leading-[1.1] text-white"
            style={{
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
              opacity: heroSection.inView ? 1 : 0,
              transform: heroSection.inView ? "translateY(0)" : "translateY(22px)",
            }}
          >
            Build the Future of
            <br />
            <span style={{ color: "#14b8a6" }}>Digital &amp; Web</span>
          </h1>

          {/* subtext */}
          <p
            className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.85] text-white/50 md:text-[17px]"
            style={{
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              opacity: heroSection.inView ? 1 : 0,
              transform: heroSection.inView ? "translateY(0)" : "translateY(18px)",
            }}
          >
            Join TGL and work on digital marketing campaigns, MERN products, and Next.js
            launches for clients who care about growth and great engineering.
          </p>

          {/* ctas */}
          <div
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
              opacity: heroSection.inView ? 1 : 0,
              transform: heroSection.inView ? "translateY(0)" : "translateY(16px)",
            }}
          >
            <a
              href="#open-roles"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#14b8a6",
                boxShadow: "0 8px 28px rgba(20,184,166,0.35)",
              }}
            >
              See Open Roles
              <ArrowUpRight size={15} />
            </a>
            <a
              href="mailto:mhussnainashiq@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-[14px] font-semibold text-white/75 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              Send Your CV
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PERKS ═══ */}
      <section className="border-t border-white/[0.06]">
        <div
          ref={perksSection.ref}
          className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 md:py-24"
        >
          {/* heading */}
          <div className="mb-12 text-center">
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: "rgba(20,184,166,0.3)",
                backgroundColor: "rgba(20,184,166,0.07)",
                transition: "opacity 0.6s ease",
                opacity: perksSection.inView ? 1 : 0,
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#14b8a6" }} />
              <span
                className="text-[12px] font-semibold uppercase tracking-widest"
                style={{ color: "#14b8a6" }}
              >
                Why TGL
              </span>
            </div>
            <h2
              className="text-[clamp(1.8rem,4vw,42px)] font-bold leading-[1.2] text-white"
              style={{
                transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
                opacity: perksSection.inView ? 1 : 0,
                transform: perksSection.inView ? "translateY(0)" : "translateY(18px)",
              }}
            >
              Perks That Actually Matter
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {PERKS.map((perk, i) => (
              <PerkCard key={perk.label} perk={perk} index={i} inView={perksSection.inView} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OPEN ROLES ═══ */}
      <section id="open-roles" className="border-t border-white/[0.06]">
        <div
          ref={rolesSection.ref}
          className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 md:py-24"
        >
          {/* heading */}
          <div className="mb-12">
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{
                borderColor: "rgba(20,184,166,0.3)",
                backgroundColor: "rgba(20,184,166,0.07)",
                transition: "opacity 0.6s ease",
                opacity: rolesSection.inView ? 1 : 0,
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#14b8a6" }} />
              <span
                className="text-[12px] font-semibold uppercase tracking-widest"
                style={{ color: "#14b8a6" }}
              >
                Open Positions
              </span>
            </div>
            <h2
              className="text-[clamp(1.8rem,4vw,42px)] font-bold leading-[1.2] text-white"
              style={{
                transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
                opacity: rolesSection.inView ? 1 : 0,
                transform: rolesSection.inView ? "translateY(0)" : "translateY(18px)",
              }}
            >
              {OPEN_ROLES.length} Roles Available Right Now
            </h2>
            <p
              className="mt-2 text-[15px] text-white/45"
              style={{
                transition: "opacity 0.7s ease 0.2s",
                opacity: rolesSection.inView ? 1 : 0,
              }}
            >
              All positions are remote-first unless stated otherwise.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {OPEN_ROLES.map((role, i) => (
              <RoleCard key={role.title} role={role} index={i} inView={rolesSection.inView} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="border-t border-white/[0.06]">
        <div
          ref={ctaSection.ref}
          className="mx-auto max-w-[1280px] px-4 py-20 text-center sm:px-6 lg:px-8 md:py-24"
        >
          <h2
            className="text-[clamp(1.8rem,4vw,42px)] font-bold leading-[1.2] text-white"
            style={{
              transition: "opacity 0.7s ease, transform 0.7s ease",
              opacity: ctaSection.inView ? 1 : 0,
              transform: ctaSection.inView ? "translateY(0)" : "translateY(18px)",
            }}
          >
            Don't See a Role That Fits?
          </h2>
          <p
            className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.8] text-white/50"
            style={{
              transition: "opacity 0.7s ease 0.1s",
              opacity: ctaSection.inView ? 1 : 0,
            }}
          >
            We're always looking for talented people. Send us your CV and tell us how
            you'd contribute — we read every application.
          </p>
          <a
            href="mailto:mhussnainashiq@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s, background-color 0.3s",
              opacity: ctaSection.inView ? 1 : 0,
              transform: ctaSection.inView ? "translateY(0)" : "translateY(14px)",
              backgroundColor: "#14b8a6",
              boxShadow: "0 8px 28px rgba(20,184,166,0.35)",
            }}
          >
            Email Us Your CV
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
