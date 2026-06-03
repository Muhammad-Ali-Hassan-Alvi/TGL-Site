"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavChild = { label: string; href: string };
type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href: string; children: NavChild[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Services", href: "/services" },
      { label: "Service Detail", href: "/services/mern-stack" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Industries", href: "/industries" },
      { label: "Industry Details", href: "/industries/healthcare" },
    ],
  },
  {
    label: "Success Stories",
    href: "/case-studies",
    children: [
      { label: "Success Stories", href: "/case-studies" },
      { label: "Success Story Details", href: "/case-studies/healthcare-website" },
    ],
  },
  { label: "Careers", href: "/careers" },
  {
    label: "Pages",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Testimonial", href: "/testimonial" },
      // { label: "Our Team", href: "/our-team" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Contacts", href: "/contacts" },
];

const salesNavItems: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Success Stories", href: "/services#case-studies" },
  { label: "Services", href: "/services#services-showcase" },
  { label: "FAQ", href: "#" },
  { label: "Blog", href: "#" },
];

function ChevronDown() {
  return (
    <svg
      className="ml-1 inline-block h-3 w-3 opacity-60"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header({ variant = "marketing" }: { variant?: "marketing" | "sales" }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const isSales = variant === "sales";

  return (
    <header id="masthead" className="sticky top-0 z-50 border-b border-teal-500/20 bg-[#0b1220]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 rounded-xl border border-teal-500/25 bg-[#131d2e] px-3 py-2 shadow-[0_4px_24px_rgba(6,10,18,0.4)] transition hover:border-teal-400/40"
        >
          <Image
            src="/TGL-Logo.svg"
            alt="TGL — The Great Logics"
            width={220}
            height={52}
            className="h-auto w-[170px] object-contain brightness-110 contrast-125 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
            priority
          />
        </Link>

        {/* Desktop nav — centered */}
        <nav className="hidden flex-1 justify-center lg:flex" aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-1">
            {isSales
              ? salesNavItems.map((item) => {
                  const isActive =
                    (item.label === "Home" && pathname === "/") ||
                    (item.label === "Services" && pathname === "/services") ||
                    (item.label === "Industries" && pathname === "/industries");
                  return (
                    <li key={item.label} className="relative">
                      <Link
                        href={item.href}
                        className={`inline-flex items-center px-[15px] py-[15px] text-[15px] font-medium transition ${
                          isActive
                            ? "text-white after:absolute after:bottom-2 after:left-[15px] after:right-[15px] after:h-[2px] after:bg-brand-cyan"
                            : "text-white/85 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })
              : navItems.map((item) => {
                  const hasChildren = !!item.children;
                  const isActive =
                    (item.label === "Home" && pathname === "/") ||
                    (item.label === "Services" &&
                      (pathname.startsWith("/services") || pathname.startsWith("/service-detail"))) ||
                    (item.label === "Industries" &&
                      (pathname.startsWith("/industries") || pathname.startsWith("/industry-details"))) ||
                    (item.label === "Success Stories" &&
                      (pathname.startsWith("/case-study") || pathname.startsWith("/case-studies"))) ||
                    (item.label === "Pages" &&
                      ["/about-us", "/testimonial", "/our-team", "/faq", "/pricing-plan", "/404"].includes(pathname)) ||
                    (item.label === "Contacts" && pathname.startsWith("/contacts"));

                  return (
                    <li key={item.label} className="group relative">
                      <Link
                        href={item.href}
                        className={`inline-flex items-center px-[15px] py-[15px] text-[15px] font-medium transition ${
                          isActive
                            ? "text-white after:absolute after:bottom-2 after:left-[15px] after:right-[15px] after:h-[2px] after:bg-brand-cyan"
                            : "text-white/85 hover:text-white"
                        }`}
                      >
                        {item.label}
                        {hasChildren && <ChevronDown />}
                      </Link>

                      {hasChildren && (
                        <div className="invisible absolute left-0 top-full z-50 min-w-[200px] pt-[11px] opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                          <ul className="overflow-hidden rounded-xl border border-white/8 bg-[rgba(23,23,26,0.9)] py-1 shadow-2xl backdrop-blur-[18px]">
                            {item.children!.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  className="block px-5 py-[22px] text-[14px] text-white/80 transition hover:bg-white/5 hover:text-brand-cyan"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
          </ul>
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href={isSales ? "/services#contact" : "/contacts"}
            className="hidden rounded-full bg-white px-7 py-3 text-[14px] font-semibold text-brand-cyan shadow-lg transition hover:bg-gray-100 hover:scale-95 lg:inline-flex"
          >
            Contact Us
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512" aria-hidden>
                <path d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/6 bg-[rgba(23,23,26,0.85)] px-4 py-4 backdrop-blur-[18px] lg:hidden">
          <ul className="flex flex-col gap-0.5 text-white">
            {isSales
              ? salesNavItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-white/5"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))
              : navItems.map((item) => {
                  const hasChildren = !!item.children;
                  if (!hasChildren) {
                    return (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-3 text-[15px] font-medium hover:bg-white/5"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }
                  const isOpen = openSub === item.label;
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-[15px] font-medium hover:bg-white/5"
                        onClick={() => setOpenSub(isOpen ? null : item.label)}
                      >
                        {item.label}
                        <svg
                          className={`h-3 w-3 transition ${isOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {isOpen && (
                        <ul className="ml-3 border-l border-white/10 pl-3">
                          {item.children!.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block py-2.5 text-[14px] text-white/70 hover:text-brand-cyan"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
            <li>
              <Link
                href={isSales ? "/services#contact" : "/contacts"}
                className="mt-3 block rounded-full bg-white py-3 text-center text-[14px] font-semibold text-brand-cyan"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
