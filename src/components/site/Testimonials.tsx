import Image from "next/image";

const IMG_1 =
  "https://nva.nirmanavisual.com/pemogan/wp-content/uploads/sites/38/2025/08/Image-Testimonial-Pemogan-2.png";
const IMG_2 =
  "https://nva.nirmanavisual.com/pemogan/wp-content/uploads/sites/38/2025/08/Image-Testimonial-Pemogan-3-1.png";
const IMG_3 =
  "https://nva.nirmanavisual.com/pemogan/wp-content/uploads/sites/38/2025/08/Image-Testimonial-Pemogan-1.png";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="pemogan-hero-font text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      <div className="mx-auto max-w-[1280px] px-[10px] pb-16 pt-12 md:pb-24 md:pt-20">
        {/* Heading */}
        <h2 className="text-center text-[28px] font-semibold leading-[1.22] text-white sm:text-[36px] md:text-[50px]">
          What Our Clients Say
        </h2>

        {/* Stats row — bordered container */}
        <div className="relative mt-12 rounded-2xl border border-white/25 px-6 py-8 md:mt-16 md:px-10 md:py-10">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {/* Left stats */}
            <div>
              <p className="max-w-[430px] text-[18px] leading-[1.7] text-white/60">
                TGL consistently delivers clean architecture, reliable
                releases, and collaborative execution across the full product
                lifecycle.
              </p>
              <div className="mt-6">
                <p className="text-[16px] text-white/60">Success Projects</p>
                <p className="text-[32px] font-semibold leading-none tabular-nums text-white md:text-[50px]">
                  2,554+
                </p>
              </div>
            </div>

            {/* Right stats */}
            <div className="md:text-right">
              <div>
                <p className="text-[16px] text-white/60">
                  Profesional Teams
                </p>
                <p className="text-[32px] font-semibold leading-none tabular-nums text-white md:text-[50px]">
                  154+
                </p>
              </div>
              <p className="mt-6 max-w-[300px] text-[17px] leading-[1.7] text-white/60 md:ml-auto">
                Their team combines technical depth with clear communication,
                helping businesses ship faster with confidence.
              </p>
            </div>
          </div>

          {/* Center image overflows upward from the cards below INTO this box */}

        </div>

        {/* Testimonial cards */}

      </div>
    </section>
  );
}
