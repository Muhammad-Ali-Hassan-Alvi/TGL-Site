import { securityBadges } from "@/content/siteContent";

export function SecurityBadges() {
  return (
    <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
      <div className="mx-auto max-w-[1280px] px-4 pb-12 sm:px-6 lg:px-8 md:pb-16">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-6 md:p-8">
          <h3 className="text-[24px] font-semibold text-white md:text-[30px]">Security & Quality Standards</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {securityBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/20 px-4 py-2 text-[16px] font-medium text-white/85"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
