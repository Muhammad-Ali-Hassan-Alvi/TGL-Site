import { clientLogos } from "@/content/siteContent";

export function ClientLogos() {
  return (
    <section className="pemogan-hero-font border-y border-teal-500/10 text-white" style={{ backgroundColor: "#131d2e" }}>
      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 lg:px-8 md:py-10">
        <p className="text-center text-[12px] uppercase tracking-[0.24em] text-teal-400/70">
          Trusted by product teams and enterprises
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-6">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="flex min-h-[52px] items-center justify-center rounded-xl border border-teal-500/15 bg-[#0b1220]/60 text-[13px] font-semibold tracking-widest text-slate-300"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
