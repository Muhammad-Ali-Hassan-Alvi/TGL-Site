import Image from "next/image";
import Link from "next/link";

type OurApproachProps = {
  ctaLabel?: string;
  /** Match Elementor: label above the number */
  counterLabelFirst?: boolean;
};

export function OurApproach({
  ctaLabel = "Discover Now",
  counterLabelFirst = false,
}: OurApproachProps) {
  return (
    <section
      className="pemogan-hero-font overflow-visible text-white"
      style={{ backgroundColor: "#0B1220" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        {/* Outer bordered container */}
        <div className="relative overflow-visible rounded-2xl border border-white/20 px-6 py-8 md:px-10 md:py-8">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,333px)_1fr] md:gap-8 lg:gap-12">
            {/* Left column */}
            <div className="flex max-w-[333px] flex-col gap-5">
              <h2 className="text-[28px] font-semibold leading-[1.22] text-white sm:text-[36px] md:text-[50px]">
                Our Approach
              </h2>
              <p className="text-[18px] leading-[1.7] text-white/60 md:text-[18px]">
                From campaign briefs to MERN APIs and Next.js launches, we work
                in clear phases — discover, plan, build, and optimize — so you
                always know what ships next and why.
              </p>
              <div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-7 py-3 text-[14px] font-semibold text-white shadow-lg transition hover:scale-95 hover:bg-brand-cyan-bright"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>

            {/* Right column — phones overflow the border */}
            <div className="relative">
              <div className="animate-float relative flex justify-center md:justify-end">
                <Image
                  src="/MobileProjectPNG.png"
                  alt="Our Approach"
                  width={650}
                  height={712}
                  className="-mb-[40px] -mt-[40px] h-auto w-full max-w-[525px] select-none object-contain md:-mb-[180px] md:-mt-[160px]"
                  sizes="(max-width: 768px) 90vw, 525px"
                />
              </div>

              {/* Glass counter card — overlapping the left phone */}
              <div className="pointer-events-none relative z-10 mx-auto mt-6 w-max max-w-full md:absolute md:left-[22%] md:top-1/2 md:mx-0 md:mt-0 md:-translate-y-1/2">
                <div className="pointer-events-auto rounded-2xl border border-white/15 bg-white/10 px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl backdrop-saturate-150">
                  {counterLabelFirst ? (
                    <>
                      <p className="text-[13px] text-white/60">Success Projects</p>
                      <p className="mt-1 text-[40px] font-semibold leading-[1.1] tabular-nums text-white md:text-[50px]">
                        2,554+
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-[40px] font-semibold leading-[1.1] tabular-nums text-white md:text-[50px]">
                        2,554+
                      </p>
                      <p className="mt-1 text-[13px] text-white/60">
                        Success Projects
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
