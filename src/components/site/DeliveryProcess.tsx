import { deliverySteps } from "@/content/siteContent";

export function DeliveryProcess() {
  return (
    <section className="section-shell pemogan-hero-font text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        <h2 className="heading-enterprise text-center text-[28px] text-white sm:text-[36px] md:text-[50px]">
          Delivery Process
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-center text-[18px] leading-[1.7] text-white/60">
          A transparent delivery model built for enterprise predictability, velocity, and quality.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-4 md:gap-5">
          {deliverySteps.map((step, idx) => (
            <div key={step.title} className="panel-enterprise p-6">
              <p className="text-[16px] font-semibold tracking-[0.12em] text-brand-cyan">0{idx + 1}</p>
              <h3 className="mt-3 text-[22px] font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-[18px] leading-[1.7] text-white/65">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
