export function IndustriesPageHero() {
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
        <h1 className="text-[clamp(2rem,5.2vw,3.6rem)] font-semibold leading-tight tracking-tight text-white">
          Daily Inovation
          <br />
          in
          <br />
          Every Industry
        </h1>
      </div>
    </section>
  );
}
