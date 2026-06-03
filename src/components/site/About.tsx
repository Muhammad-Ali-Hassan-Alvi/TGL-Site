import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-6">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-brand-cyan/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-amber-50 to-slate-100 p-8 shadow-inner ring-1 ring-slate-100">
            <p
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-7xl font-black uppercase leading-none text-slate-200/80"
              aria-hidden
            >
              Team
            </p>
            <div className="relative mx-auto flex max-w-sm justify-end">
              <div className="relative">
                <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full bg-brand-cyan" />
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="Team leadership portrait"
                  width={280}
                  height={280}
                  className="relative z-10 rounded-full border-4 border-white object-cover shadow-xl"
                  sizes="280px"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-cyan" />
              <span className="h-2 w-2 rounded-full bg-navy/20" />
              <span className="h-2 w-2 rounded-full bg-navy/20" />
            </div>
          </div>
        </div>

        <div className="order-1 max-w-xl lg:order-2">
          <h2 className="relative text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-4xl">
            <span className="relative z-10">Whatever we do,</span>
            <br />
            <span className="relative z-10">we deliver the best</span>
            <span className="absolute -left-4 top-0 z-0 hidden h-24 w-24 rounded-full bg-brand-cyan/90 md:block" />
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            TGL (The Great Logics) is an offshore software development and outsourcing
            partner with 80+ IT professionals worldwide. Since 2010 we have
            shipped native iOS and Android apps, web platforms, product builds,
            and SQA for teams that expect clarity and velocity.
          </p>
          <p className="mt-4 text-muted">
            Over 900 projects delivered — one team, one standard: products that
            feel premium and perform under real-world load.
          </p>
        </div>
      </div>
    </section>
  );
}
