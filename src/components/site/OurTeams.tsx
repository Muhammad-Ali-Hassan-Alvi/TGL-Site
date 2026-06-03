"use client";

import Image from "next/image";

const MEMBERS = [
  {
    name: "Ahsan",
    role: "UI/UX Designer",
    image: "/teams/Ahsan.png",
  },
  {
    name: "Ahtisham Maqbool",
    role: "Senior Full Stack Developer",
    image: "/teams/Ahtisham .png",
  },
  {
    name: "Ali Cheema",
    role: "Lead React Native Developer",
    image: "/teams/Ali Cheema.png",
  },
  {
    name: "Muhammad Ali Hassan",
    role: "Full Stack Savant",
    image: "/teams/Ali Hassan.png",
  },
  {
    name: "Bilal",
    role: "Lead Laravel Developer",
    image: "/teams/bilal.png",
  },
  {
    name: "Faizan",
    role: "Lead Business Development Team",
    image: "/teams/Faizan.png",
  },
  {
    name: "Maaz",
    role: "Lead B2B & B2C Team",
    image: "/teams/Maaz.png",
  },
  {
    name: "Nadeem",
    role: "Head of Growth / CEO",
    image: "/teams/Nadeem.png",
  },
  {
    name: "Shoaib",
    role: "Business Generation Manager",
    image: "/teams/Shoaib.png",
  },
  {
    name: "Umar Farooq",
    role: "Cheif Technology Officer",
    image: "/teams/Umar Farooq.png",
  },
  {
    name: "Umar",
    role: "MERN Stack Team Lead",
    image: "/teams/Umar.png",
  },
];

// Duplicated for seamless infinite scroll
const DUPLICATED_MEMBERS = [...MEMBERS, ...MEMBERS];

export function OurTeams() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage:
          "url(https://nva.nirmanavisual.com/pemogan/wp-content/uploads/sites/38/2025/08/BG-Gradient-Our-Teams.png)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Optional: Add a subtle overlay to ensure text readability against the background */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative mx-auto max-w-[1400px] px-4 py-16 sm:px-6 md:px-8 md:py-24">
        {/* ── Heading ── */}
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 sm:mb-16">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[50px]">
            Meet Our Team
          </h2>
          <p className="max-w-2xl text-center text-base text-white/70 sm:text-lg">
            The brilliant minds behind our success. Dedicated, creative, and
            ready to build the future.
          </p>
        </div>

        {/* ── Continuous Scroll Carousel ── */}
        <div className="marquee-container group relative overflow-hidden[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track flex gap-6 py-4 sm:gap-8">
            {DUPLICATED_MEMBERS.map((m, idx) => (
              <div
                key={`${m.name}-${idx}`}
                className="marquee-card shrink-0 w-[260px] sm:w-[300px]"
              >
                {/* ── Card UI ── */}
                <div className="group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)]">
                  {/* Image Container */}
                  <div className="relative h-[380px] w-full overflow-hidden bg-gradient-to-b from-white/5 to-transparent pt-6">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      className={`object-contain object-bottom transition-transform duration-500 ${m.name === "Bilal" ? "scale-[1.5] group-hover/card:scale-[1.65] origin-bottom -translate-x-4" : "group-hover/card:scale-110"}`}
                      sizes="(max-width: 768px) 260px, 300px"
                      unoptimized // Note: Set to false if you move images to the /public folder
                    />
                    {/* Gradient overlay at bottom of image for smooth blending into text */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent" />
                  </div>

                  {/* Text Details */}
                  <div className="relative flex flex-col items-center gap-2 border-t border-white/5 p-6 text-center">
                    <h3 className="text-xl font-semibold tracking-wide text-white transition-colors duration-300">
                      {m.name}
                    </h3>
                    <p className="bg-gradient-to-r from-orange-400 to-[#14B8A6] bg-clip-text text-sm font-medium uppercase tracking-wider text-transparent">
                      {m.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Styles ── */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1.5rem)); /* Adjust based on gap */ }
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }

          /* Pause animation on hover for better UX */
          .marquee-container:hover .marquee-track {
            animation-play-state: paused;
          }

          @media (min-width: 640px) {
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 2rem)); /* Matches sm:gap-8 */ }
            }
          }
        `}</style>
      </div>
    </section>
  );
}
