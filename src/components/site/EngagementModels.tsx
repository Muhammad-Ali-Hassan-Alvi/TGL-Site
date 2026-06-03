import { engagementModels } from "@/content/siteContent";

export function EngagementModels() {
  return (
    <section className="section-shell pemogan-hero-font text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        <h2 className="heading-enterprise text-center text-[28px] text-white sm:text-[36px] md:text-[50px]">
          Engagement Models
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
          {engagementModels.map((model) => (
            <article key={model.title} className="panel-enterprise p-6">
              <h3 className="text-[24px] font-semibold text-white">{model.title}</h3>
              <p className="mt-3 text-[18px] leading-[1.75] text-white/65">{model.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
