"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// I've populated this with the projects from your screenshots!
// You can replace the image paths with your actual local paths (e.g., "/assets/projects/...")
const PROJECTS = [
  // ── Web Applications ──
  {
    id: 1,
    title: "Qutor",
    category: "web",
    desc: "Online platform for learning Quran with Tajweed, Hifz, and Arabic — live classrooms, verified tutors, flexible scheduling.",
    image: "/WebProjects/Qutor.jpeg",
  },
  {
    id: 2,
    title: "Doktor24",
    category: "web",
    desc: "Lifelong digital healthcare platform — online doctor consultations, prescription renewals, and medical history management.",
    image: "/WebProjects/Doktor24.jpeg",
  },
  {
    id: 3,
    title: "Booli",
    category: "web",
    desc: "Sweden's largest property search service — comprehensive listings, price history, neighborhood analytics, and agent connections.",
    image: "/WebProjects/Booli.jpeg",
  },
  {
    id: 4,
    title: "Rezo Systems",
    category: "web",
    desc: "Enterprise solutions for workflow automation and business intelligence — scalable, cloud-native, and integration-ready.",
    image: "/WebProjects/RezoSystems.jpeg",
  },
  {
    id: 5,
    title: "MyHolidayParks",
    category: "web",
    desc: "Booking platform for holiday parks and vacation rentals across Europe — real-time availability and secure payments.",
    image: "/WebProjects/MyHolidayParks.jpeg",
  },
  {
    id: 6,
    title: "Dormoa",
    category: "web",
    desc: "London's curated apartment search and rental platform — handpicked listings, flexible dates, and a city-wide search experience.",
    image: "/WebProjects/Dormoa.jpeg",
  },
  {
    id: 7,
    title: "KetoNatural Pet Foods",
    category: "web",
    desc: "Premium keto pet food e-commerce store — science-backed nutrition, subscription model, loyalty program, and content-rich blog.",
    image: "/WebProjects/Ketonatural.jpeg",
  },

  // ── Mobile Applications ──
  {
    id: 8,
    title: "Qutor App",
    category: "mobile",
    desc: "Mobile app for finding and booking verified Quran tutors — browse profiles, check ratings, and schedule Tajweed, Hifz & Arabic sessions.",
    image: "/MobileProjects/qutor-1.jpeg",
  },
  {
    id: 9,
    title: "Doktor24 App",
    category: "mobile",
    desc: "Swedish digital healthcare app — renew prescriptions, chat with licensed doctors, access medical history, and get cost-free consultations.",
    image: "/MobileProjects/doktor24-1.jpeg",
  },
  {
    id: 10,
    title: "Booli App",
    category: "mobile",
    desc: "Swedish real estate mobile app — save favourite properties, get instant alerts for new listings, and track price history on the go.",
    image: "/MobileProjects/booli-1.jpeg",
  },
];

export function Industries() {
  const [activeTab, setActiveTab] = useState("web");

  // Filter projects based on the active tab
  const filteredProjects = PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section
      className="pemogan-hero-font py-16 sm:py-24 text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8">
        
        {/* ── Top Header & Tabs ── */}
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="text-base leading-relaxed text-white/60 sm:text-lg">
              We build domain-focused software solutions tailored to each
              industry&apos;s operational and compliance requirements. Explore our latest work.
            </p>
          </div>

          {/* Custom Tab Switcher */}
          <div className="flex shrink-0 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("web")}
              className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === "web"
                  ? "bg-[#14B8A6] text-white shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Web Applications
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === "mobile"
                  ? "bg-[#14B8A6] text-white shadow-lg"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Mobile Applications
            </button>
          </div>
        </div>

        {/* ── Projects Grid ── */}
        {/* Adding key allows React to re-animate when the tab changes */}
        <div 
          key={activeTab} 
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1f1f23] transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/50 hover:shadow-[0_8px_30px_rgba(20,184,166,0.1)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  /* object-top is great for screenshots so the headers aren't cut off */
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                />
                {/* Overlay gradient for a polished look */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f23] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-[#14B8A6]">
                    {project.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-white/60">
                    {project.desc}
                  </p>
                </div>
                
                {/* Subtle "View Project" link that appears strong on hover */}
                <div className="mt-6 flex items-center text-sm font-semibold text-[#14B8A6] opacity-80 transition-opacity group-hover:opacity-100">
                  View Case Study
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Global CTA Bottom ── */}
        <div className="mt-16 flex justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#14B8A6] px-8 py-4 text-[15px] font-bold text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all hover:scale-105 hover:bg-[#ff7a33] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]"
          >
            Start Your Project With Us
          </Link>
        </div>

      </div>
    </section>
  );
}