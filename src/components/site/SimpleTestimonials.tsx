import { clientTestimonials } from "@/content/siteContent";

export function SimpleTestimonials() {
  return (
    <section
      id="testimonials"
      className="pemogan-hero-font section-shell py-14 md:py-18"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-container">
        <p className="section-eyebrow">Client feedback</p>
        <h2
          id="testimonials-heading"
          className="heading-enterprise mt-2 text-2xl text-white sm:text-3xl md:text-4xl"
        >
          What Our Clients Say
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/55">
          Real outcomes from marketing, product builds, and long-term partnerships — without the
          noise of heavy scroll effects.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {clientTestimonials.map((item) => (
            <article
              key={item.company}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#131d2e]/80 p-6 md:p-7"
            >
              <p className="flex-1 text-[15px] leading-[1.7] text-white/75">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-white/50">
                  {item.role} · {item.company}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
