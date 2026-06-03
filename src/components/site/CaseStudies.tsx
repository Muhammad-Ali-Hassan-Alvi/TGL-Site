"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ─── real project data ─── */
const PROJECTS = [
  {
    title: "Pujahut",
    industry: "E-Commerce",
    excerpt:
      "Embedded a remote team to build a seamless e-commerce platform for spiritual goods.",
    tags: ["E-Commerce", "Web Platform"],
    image: "/WebProjects/Pujahut.png",
    impact: "Boosted online sales",
    offset: false,
  },
  {
    title: "SRV Technology",
    industry: "IT Services",
    excerpt:
      "Provided a dedicated squad of developers to scale their enterprise software offerings and infrastructure.",
    tags: ["Enterprise", "B2B"],
    image: "/WebProjects/SRVTech.png",
    impact: "Accelerated delivery",
    offset: true,
  },
  {
    title: "Kroolo",
    industry: "Productivity SaaS",
    excerpt:
      "Staffed top-tier React and Node.js engineers to help build a comprehensive AI-powered workspace.",
    tags: ["SaaS", "AI Workspace"],
    image: "/WebProjects/Krloo.png",
    impact: "Rapid product launch",
    offset: false,
  },
  {
    title: "WardC Nigeria",
    industry: "Non-Profit Platform",
    excerpt:
      "Developed a secure and accessible platform for the Women Advocates Research and Documentation Centre.",
    tags: ["Web Design", "Accessibility"],
    image: "/WebProjects/Wardc.png",
    impact: "Empowered advocacy",
    offset: false,
  },
  {
    title: "My Pooja Box",
    industry: "E-Commerce",
    excerpt:
      "Scaled an engaging shopping experience with dedicated front-end developers optimizing performance.",
    tags: ["Retail", "D2C"],
    image: "/WebProjects/PoojaBox.png",
    impact: "Higher conversion",
    offset: true,
  },
  {
    title: "Rezo Systems",
    industry: "Enterprise SaaS",
    excerpt:
      "Embedded a dedicated squad to rebuild their cloud-native workflow automation platform — integrated, scalable, shipped on time.",
    tags: ["Enterprise", "Cloud", "SaaS"],
    image: "/WebProjects/RezoSystems.jpeg",
    impact: "40% efficiency gain",
    offset: false,
  },
];

/* ─── intersection observer ─── */
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

/* ─── single project card ─── */
function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = `${0.1 + index * 0.15}s`;

  return (
    <div
      className={`group flex flex-col ${project.offset ? "md:mt-[-60px]" : ""}`}
      style={{
        transition: `opacity 0.75s ease ${delay}, transform 0.75s ease ${delay}`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(48px)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── image wrapper ── */}
      <div
        className="relative overflow-hidden"
        style={{
          transition: "box-shadow 0.5s ease",
          boxShadow: hovered
            ? "0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(20,184,166,0.2)"
            : "0 8px 24px rgba(0,0,0,0.35)",
        }}
      >
        {/* photo */}
        <img
          src={project.image}
          alt={project.title}
          // Using h-auto so the image drives the card height naturally (no empty bars)
          className="h-auto w-full select-none object-cover"
          style={{
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />

        {/* impact badge — bottom left */}
        <div className="absolute bottom-3 left-4">
          <span
            className="rounded-full px-3 py-1 text-[12px] font-semibold text-white"
            style={{ backgroundColor: "rgba(20,184,166,0.85)" }}
          >
            {project.impact}
          </span>
        </div>

        {/* arrow icon — bottom right, appears on hover */}
        <div
          className="absolute bottom-3 right-4 flex h-9 w-9 items-center justify-center rounded-full"
          style={{
            backgroundColor: "rgba(20,184,166,0.9)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1) translateY(0)" : "scale(0.7) translateY(6px)",
          }}
        >
          <ArrowUpRight size={16} className="text-white" />
        </div>
      </div>

      {/* ── meta ── */}
      <div className="mt-4 flex flex-col gap-3 px-1">
        {/* industry label */}
        <span
          className="text-[12px] font-semibold uppercase tracking-widest"
          style={{ color: "#14b8a6" }}
        >
          {project.industry}
        </span>

        {/* title */}
        <h3
          className="text-[22px] font-bold leading-[1.25] text-white md:text-[26px]"
          style={{
            transition: "color 0.3s ease",
            color: hovered ? "#14b8a6" : "#ffffff",
          }}
        >
          {project.title}
        </h3>

        {/* excerpt */}
        <p className="text-[14px] leading-[1.75] text-white/55">
          {project.excerpt}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-[12px] font-medium"
              style={{
                borderColor: "rgba(20,184,166,0.3)",
                color: "rgba(255,255,255,0.6)",
                backgroundColor: "rgba(20,184,166,0.06)",
                transition: "border-color 0.3s, color 0.3s, background-color 0.3s",
                ...(hovered && {
                  borderColor: "rgba(20,184,166,0.7)",
                  color: "#14b8a6",
                  backgroundColor: "rgba(20,184,166,0.12)",
                }),
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── section ─── */
export function CaseStudies() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="case-studies"
      className="pemogan-hero-font relative overflow-hidden text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      {/* subtle bg glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 100%, rgba(20,184,166,0.06) 0%, transparent 70%)",
        }}
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8 md:py-28"
      >
        {/* ── heading block ── */}
        <div className="mb-14 flex flex-col items-center text-center">
          {/* label pill */}
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
            style={{
              borderColor: "rgba(20,184,166,0.35)",
              backgroundColor: "rgba(20,184,166,0.08)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
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
              Featured Projects
            </span>
          </div>

          <h2
            className="text-[clamp(2rem,5vw,52px)] font-bold leading-[1.15] text-white"
            style={{
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(18px)",
            }}
          >
            Work We&apos;ve
            <br />
            <span style={{ color: "#14b8a6" }}>Delivered</span>
          </h2>

          <p
            className="mt-4 max-w-[520px] text-[15px] leading-[1.8] text-white/50"
            style={{
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(18px)",
            }}
          >
            Real companies. Real results. Web platforms shipped with MERN and modern
            stacks — the kind of outcomes TGL delivers for clients today.
          </p>
        </div>

        {/* ── cards grid ── */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          className="mt-16 flex justify-center"
          style={{
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <a
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#14b8a6",
              boxShadow: "0 8px 28px rgba(20,184,166,0.35)",
            }}
          >
            View All Projects
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
