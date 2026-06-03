"use client";

import Link from "next/link";

export function StickyContactCta() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50">
      <Link
        href="/contacts"
        className="pointer-events-auto inline-flex items-center rounded-lg bg-brand-cyan px-5 py-3 text-[13px] font-semibold text-[#0b1220] shadow-[0_10px_28px_rgba(20,184,166,0.4)] transition hover:scale-[1.02] hover:bg-brand-cyan-bright"
      >
        Book a Strategy Call
      </Link>
    </div>
  );
}
