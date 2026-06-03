export function ServicesPageHero() {
  return (
    <section
      className="pemogan-hero-font relative overflow-hidden text-white"
      style={{ backgroundColor: "#0b1220" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(20,184,166,0.28) 0%, rgba(99,102,241,0.1) 45%, transparent 72%)",
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 md:py-24 lg:py-28">
        <h1 className="text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-tight tracking-tight text-white">
          Digital Marketing, MERN &amp; Next.js
        </h1>
        <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.7] text-white/55">
          Three focused offerings — grow your audience, build on MERN, or ship with Next.js.
        </p>
      </div>
    </section>
  );
}
