"use client";

import {
  deliverySteps,
  engagementModels,
  securityBadges,
  serviceCapabilities,
} from "@/content/siteContent";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  BadgeCheck,
  Briefcase,
  Cloud,
  FileCheck,
  Globe,
  Layers,
  Lock,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TestTube2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

/* ─── Icon maps ───────────────────────────────────────────── */

const SERVICE_ICONS: Record<string, LucideIcon> = {
  uiux: Palette,
  web: Globe,
  mobile: Smartphone,
  cloud: Cloud,
  ai: Sparkles,
  qa: TestTube2,
};

const ENGAGEMENT_ICONS: LucideIcon[] = [Users, Layers, Briefcase];
const TRUST_ICONS: LucideIcon[] = [Lock, ShieldCheck, FileCheck, BadgeCheck];

/* ─── Tab definition ──────────────────────────────────────── */

type TabId = "services" | "engagement" | "process" | "trust";

const TABS: { id: TabId; label: string }[] = [
  { id: "services", label: "Services" },
  { id: "engagement", label: "Engagement" },
  { id: "process", label: "Process" },
  { id: "trust", label: "Trust" },
];

/* ─── Shared motion variants ──────────────────────────────── */

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Panels ──────────────────────────────────────────────── */

function ServicesPanel() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
    >
      {serviceCapabilities.map((s) => {
        const Icon = SERVICE_ICONS[s.key] ?? Sparkles;
        return (
          <motion.div
            key={s.key}
            variants={item}
            className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-brand-cyan/40 hover:bg-white/[0.05]"
          >
            <span
              className="flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-brand-cyan/20"
              style={{ backgroundColor: "rgba(20,184,166,0.14)" }}
            >
              <Icon className="h-6 w-6 text-brand-cyan" strokeWidth={1.8} />
            </span>
            <h4 className="text-[20px] font-semibold leading-[1.25] text-white md:text-[22px]">
              {s.title}
            </h4>
            <p className="text-[14px] leading-[1.65] text-white/55">
              {s.description}
            </p>
            <ul className="mt-1 flex flex-col gap-2">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-[14px] leading-[1.55] text-white/70"
                >
                  <span
                    className="mt-[8px] inline-block h-1 w-1 shrink-0 rounded-full bg-brand-cyan"
                    aria-hidden
                  />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

function EngagementPanel() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-5 md:grid-cols-3"
    >
      {engagementModels.map((m, i) => {
        const Icon = ENGAGEMENT_ICONS[i] ?? Users;
        return (
          <motion.article
            key={m.title}
            variants={item}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition-colors duration-300 hover:border-brand-cyan/40 md:p-7"
          >
            {/* Hover glow accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ backgroundColor: "rgba(20,184,166,0.18)" }}
            />
            <span
              className="relative flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-brand-cyan/20"
              style={{ backgroundColor: "rgba(20,184,166,0.14)" }}
            >
              <Icon className="h-6 w-6 text-brand-cyan" strokeWidth={1.8} />
            </span>
            <h4 className="relative text-[22px] font-semibold leading-[1.25] text-white md:text-[24px]">
              {m.title}
            </h4>
            <p className="relative text-[15px] leading-[1.7] text-white/60">
              {m.text}
            </p>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

function ProcessPanel() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative"
    >
      {/* Horizontal connector line on lg+ */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 right-6 top-[42px] hidden h-px bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/40 to-brand-cyan/0 lg:block"
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {deliverySteps.map((s, idx) => (
          <motion.div
            key={s.title}
            variants={item}
            className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-brand-cyan/40"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full font-mono text-[15px] font-semibold text-white"
                style={{ backgroundColor: "rgba(20,184,166,0.20)" }}
              >
                0{idx + 1}
              </span>
              <span className="font-mono text-[11px] tracking-[0.22em] text-brand-cyan">
                STEP
              </span>
            </div>
            <h4 className="text-[20px] font-semibold leading-[1.25] text-white md:text-[22px]">
              {s.title}
            </h4>
            <p className="text-[14px] leading-[1.65] text-white/55">
              {s.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function TrustPanel() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-5 md:grid-cols-[1.15fr_1fr]"
    >
      <motion.div
        variants={item}
        className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 md:p-8"
      >
        <span
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: "rgba(20,184,166,0.14)" }}
        >
          <ShieldCheck className="h-6 w-6 text-brand-cyan" strokeWidth={1.8} />
        </span>
        <h4 className="text-[22px] font-semibold leading-[1.25] text-white md:text-[26px]">
          Security & Quality, Built In
        </h4>
        <p className="text-[15px] leading-[1.7] text-white/60">
          Every engagement is wrapped in the trust signals enterprise teams
          expect. Contracts, compliance, IP, and screening are covered up
          front — so your engineers can focus on shipping.
        </p>
      </motion.div>

      <motion.div
        variants={item}
        className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
      >
        <span className="font-mono text-[11px] tracking-[0.22em] text-brand-cyan">
          STANDARDS WE OPERATE BY
        </span>
        <div className="mt-1 flex flex-wrap gap-2.5">
          {securityBadges.map((badge, i) => {
            const Icon = TRUST_ICONS[i] ?? BadgeCheck;
            return (
              <motion.span
                key={badge}
                variants={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[13px] font-medium text-white/85 transition-colors hover:border-brand-cyan/40"
              >
                <Icon className="h-4 w-4 text-brand-cyan" strokeWidth={2} />
                {badge}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main exported component ─────────────────────────────── */

export function DeliveryShowcase() {
  const [active, setActive] = useState<TabId>("services");

  return (
    <section
      className="pemogan-hero-font relative overflow-hidden text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      {/* Ambient brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 30%, rgba(20,184,166,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-brand-cyan">
            How We Deliver
          </span>
          <h2 className="text-[28px] font-semibold leading-[1.18] text-white sm:text-[36px] md:text-[50px]">
            Marketing, MERN &amp; Next.js — How We Deliver
          </h2>
          <p className="max-w-[640px] text-[15px] leading-[1.7] text-white/60 md:text-[17px]">
            Explore our three services, engagement options, delivery steps, and
            the standards we apply on every campaign and codebase.
          </p>
        </motion.div>

        {/* Tab navigation with sliding indicator */}
        <div className="mt-10 flex items-center justify-center md:mt-14">
          <div
            role="tablist"
            className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5"
          >
            {TABS.map((tab) => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.id)}
                  className="relative isolate rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors md:text-[14px]"
                >
                  {isActive && (
                    <motion.span
                      layoutId="delivery-tab-active"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{ backgroundColor: "#14B8A6" }}
                      transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    />
                  )}
                  <span
                    className={
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated panels */}
        <div className="mt-10 md:mt-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {active === "services" && <ServicesPanel />}
              {active === "engagement" && <EngagementPanel />}
              {active === "process" && <ProcessPanel />}
              {active === "trust" && <TrustPanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
