"use client";

import Image from "next/image";

import Link from "next/link";

import { useEffect, useRef, useState, type ReactNode } from "react";

const LAPTOP_SRC = "/hero-laptop.png";

const HERO_BG_GRADIENT =
  "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(20,184,166,0.15) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(99,102,241,0.12) 0%, transparent 50%), linear-gradient(180deg, #0b1220 0%, #131d2e 100%)";

function GlassCard({
  children,

  className,
}: {
  children: ReactNode;

  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-teal-500/15 bg-[#131d2e]/80 px-6 py-5 shadow-[0_8px_32px_rgba(6,10,18,0.45)] backdrop-blur-lg ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function Counter() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    const to = 12;

    const dur = 2000;

    const t0 = performance.now();

    let id = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);

      setVal(Math.round((1 - (1 - p) ** 3) * to));

      if (p < 1) id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(id);
  }, []);

  return <span className="tabular-nums">{val}</span>;
}

function AnimatedHeadline({
  text,

  delayMs = 0,
}: {
  text: string;

  delayMs?: number;
}) {
  return (
    <span aria-label={text} role="text">
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          aria-hidden
          className="hero-letter inline-block"
          style={{ animationDelay: `${delayMs + i * 70}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

const HEADLINE_PHRASES: Array<{ top: string; bottom: string }> = [
  { top: "Grow With", bottom: "Digital Marketing" },
  { top: "Ship Faster on", bottom: "MERN Stack" },
  { top: "Launch With", bottom: "Next.js" },
  { top: "Rank Higher", bottom: "On Google" },
  { top: "Convert More", bottom: "Leads Online" },
  { top: "Build Modern", bottom: "Web Products" },
  { top: "Your Brand", bottom: "Built to Scale" },
];
/** Tracks global mouse position and creates a 3D perspective tilt on the target element */

function useLaptopParallax() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;

      if (!el) return;

      const cx = e.clientX / window.innerWidth - 0.5; // -0.5 → 0.5

      const cy = e.clientY / window.innerHeight - 0.5;

      el.style.transform = `perspective(900px) rotateY(${cx * 10}deg) rotateX(${-cy * 8}deg) translateZ(24px)`;

      el.style.transition = "transform 0.12s ease";
    };

    const onLeave = () => {
      const el = ref.current;

      if (!el) return;

      el.style.transform = "";

      el.style.transition = "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)";
    };

    window.addEventListener("mousemove", onMove);

    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);

      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
}

export function Hero() {
  const laptopRef = useLaptopParallax();

  const [phraseIndex, setPhraseIndex] = useState(0);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade+blur out (900ms)

      setVisible(false);

      // Swap text at the peak of the blur — text change is invisible

      setTimeout(() => {
        setPhraseIndex((prev) => (prev + 1) % HEADLINE_PHRASES.length);

        // Fade+blur back in

        setVisible(true);
      }, 900);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const phrase = HEADLINE_PHRASES[phraseIndex];

  // Slow cinematic dissolve: blur + fade + subtle slide

  const headlineStyle = (dir: "up" | "down") => ({
    transition: [
      `opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1)`,

      `transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)`,

      `filter 0.9s cubic-bezier(0.4, 0, 0.2, 1)`,
    ].join(", "),

    opacity: visible ? 1 : 0,

    filter: visible ? "blur(0px)" : "blur(9px)",

    transform: visible
      ? "translateY(0) scale(1)"
      : dir === "up"
        ? "translateY(-14px) scale(0.97)"
        : "translateY(14px)  scale(0.97)",
  });

  return (
    <section
      className="pemogan-hero-font tgl-page-glow relative overflow-hidden text-white"
      style={{
        marginTop: -125,
        paddingTop: 125,
        marginBottom: 0,
        backgroundColor: "#0b1220",
        backgroundImage: HERO_BG_GRADIENT,
      }}
    >
      <div className="relative mx-auto max-w-[1280px] px-8 pb-8 sm:px-6 lg:px-8 md:pb-12">
        {/* ── TOP headline — cycles with animation ── */}

        <h2
          aria-live="polite"
          className="hero-anim-fade-in-right pointer-events-none relative z-1 pt-[10px] text-[clamp(2.2rem,8vw,150px)] font-semibold leading-[1.22] text-white sm:text-[clamp(3rem,11.5vw,150px)]"
          style={headlineStyle("up")}
        >
          {phrase.top}
        </h2>

        {/* ── 3-column content grid ── */}

        <div className="relative z-10 mt-4 grid gap-x-5 gap-y-4 sm:mt-0 md:mt-[-120px] md:grid-cols-[minmax(0,280px)_1fr_minmax(0,270px)] md:gap-x-[20px] lg:mt-[-140px]">
          {/* ═══ LEFT COLUMN — service list + CTA card ═══ */}

          <div className="flex flex-col md:row-span-2 md:pt-2">
            <div className="hidden flex-1 md:block" />

            {/* service list — desktop only */}

            {/* <ul
              className="hero-anim-fade-in-right hidden space-y-[10px] md:block"
              style={{ animationDelay: "300ms" }}
            >
              {(
                [
                  "Evaluation & Design",

                  "Custom software",

                  "Web Development",
                ] as const
              ).map((t) => (
                <li
                  key={t}
                  className="text-[15px] font-normal leading-[1.6] text-white/50 md:text-[16px]"
                >
                  {t}
                </li>
              ))}
            </ul> */}

            <div className="hidden flex-1 md:block" />

            {/* CTA card */}

            <div
              className="hero-anim-fade-in-down mt-4 md:mt-0"
              style={{ animationDelay: "0ms" }}
            >
              <div
                className="flex flex-col justify-center gap-4 rounded-2xl border border-teal-500/20 bg-[#131d2e]/90 p-6 shadow-[0_16px_48px_rgba(6,10,18,0.45)] backdrop-blur-md md:p-8"
              >
                <p className="text-[13px] leading-[1.7] text-white/75">
                  TGL combines digital marketing, MERN stack development, and
                  Next.js builds — so you can attract traffic, ship product, and
                  grow with one team that understands both growth and code.
                </p>

                <div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg transition hover:scale-95 hover:bg-brand-cyan-bright"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ CENTER — LAPTOP ═══ */}

          <div
            ref={laptopRef}
            className="hero-anim-zoom-in relative z-5 flex items-center justify-center md:row-span-2"
            style={{ transformStyle: "preserve-3d", willChange: "transform" }}
          >
            <Image
              src={LAPTOP_SRC}
              alt="Laptop showcasing TGL digital work"
              width={798}
              height={822}
              className="h-auto w-full max-w-[380px] select-none object-contain drop-shadow-[0_24px_64px_rgba(0,0,0,0.5)] sm:max-w-[460px] md:max-w-[520px]"
              priority
              sizes="(max-width: 640px) 80vw, (max-width: 768px) 70vw, 520px"
            />
          </div>

          {/* ═══ RIGHT COLUMN ═══ */}

          <div className="flex flex-col gap-5 md:row-span-2 md:justify-center md:py-4">
            {/* Icon box card */}

            <div
              className="hero-anim-fade-in-left"
              style={{ animationDelay: "400ms" }}
            >
              <GlassCard>
                <span className="mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-brand-cyan text-white">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>

                <p className="text-[14px] leading-[1.7] text-white/80">
                  We develop advanced AI technologies that power automation,
                  predictive intelligence, and data-driven systems at scale.
                </p>
              </GlassCard>
            </div>

            {/* Counter card */}

            <div
              className="hero-anim-fade-in-left"
              style={{ animationDelay: "500ms" }}
            >
              <GlassCard>
                <div className="flex items-baseline gap-3">
                  <span className="text-[36px] font-semibold leading-[1.22] text-white md:text-[50px]">
                    <Counter />

                    <span className="text-brand-cyan">+</span>
                  </span>

                  <span className="text-[14px] leading-[1.4] text-white/50">
                    Years Of
                    <br />
                    Experience
                  </span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* ── BOTTOM headline — desktop only, sits behind laptop ── */}

        <h2
          aria-live="polite"
          className="hero-anim-fade-in-left pointer-events-none relative z-1 hidden text-center text-[clamp(2.5rem,9vw,90px)] font-semibold leading-[1.22] text-white md:mt-[-100px] md:block md:pl-[35%] lg:mt-[-120px]"
          style={headlineStyle("down")}
        >
          {phrase.bottom}
        </h2>
      </div>
    </section>
  );
}
