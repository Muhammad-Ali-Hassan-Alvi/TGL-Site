const SERVICE_COPY =
  "Every engagement follows the same standard: clear scope, regular updates, and deliverables you can measure — whether we are running campaigns or shipping code.";

type ServiceRow = {
  title: string;
  description: string;
  bullets: string[];
  titleOnLeft: boolean;
};

const ROWS: ServiceRow[] = [
  {
    title: "Digital Marketing",
    description:
      "We plan and run growth programs that connect your offer to the right people — with tracking, creative, and optimization built in.",
    bullets: [
      "SEO audits & content plans",
      "Google & Meta ad management",
      "Social posts & brand messaging",
      "Monthly performance reports",
    ],
    titleOnLeft: true,
  },
  {
    title: "MERN Stack Development",
    description:
      "Full-stack JavaScript delivery — one codebase mindset from database schema to React UI, with APIs your team can extend.",
    bullets: [
      "MongoDB modeling & migrations",
      "Express REST / GraphQL APIs",
      "React dashboards & portals",
      "Deployments & handover docs",
    ],
    titleOnLeft: false,
  },
  {
    title: "Next.js Development",
    description:
      "Modern React sites and apps using Next.js — optimized for speed, search engines, and maintainable releases.",
    bullets: [
      "App Router & layouts",
      "SSR, SSG & server actions",
      "CMS & third-party integrations",
      "Core Web Vitals tuning",
    ],
    titleOnLeft: true,
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[14px]">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[18px] leading-normal text-white"
        >
          <span
            className="mt-[6px] size-2 shrink-0 rounded-full bg-brand-cyan"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TitleBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <h3 className="text-[28px] font-semibold leading-[1.22] text-white md:text-[50px]">
        {title}
      </h3>
      <p className="text-[18px] leading-[1.6] text-white/60">{description}</p>
    </div>
  );
}

export function ServiceDetails() {
  return (
    <section
      className="pemogan-hero-font text-white"
      style={{ backgroundColor: "#0b1220" }}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <p className="pb-8 text-center text-[15px] text-white/50 md:pb-12">{SERVICE_COPY}</p>
        {ROWS.map((row, i) => {
          const left = row.titleOnLeft ? (
            <TitleBlock title={row.title} description={row.description} />
          ) : (
            <BulletList items={row.bullets} />
          );
          const right = row.titleOnLeft ? (
            <BulletList items={row.bullets} />
          ) : (
            <TitleBlock title={row.title} description={row.description} />
          );

          return (
            <div
              key={row.title}
              className={`grid min-h-[213px] grid-cols-1 items-center py-[33px] md:grid-cols-[1fr_1px_1fr] ${
                i < ROWS.length - 1 ? "border-b border-white/20" : ""
              }`}
            >
              <div className="border-b border-white/20 px-0 pb-6 md:border-b-0 md:pb-0 md:pr-10">
                {left}
              </div>
              <div className="hidden md:my-0 md:block md:h-full md:border-l md:border-t-0 md:border-white/20" />
              <div className="px-0 pt-6 md:pl-10 md:pt-0">{right}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
