export type ServiceItem = {
  slug: string;
  label: string;
  summary: string;
  tags: string[];
  image: string;
  outcomes: string[];
};

export type IndustryItem = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  capabilities: string[];
};

export type CaseStudyItem = {
  slug: string;
  title: string;
  industry: string;
  excerpt: string;
  impact: string[];
  tags: string[];
  image: string;
  type: "web" | "mobile";
};

/* ─────────────────────────────────────────────────────────────
   SERVICES — Digital Marketing, MERN, Next.js only
───────────────────────────────────────────────────────────── */
export const serviceItems: ServiceItem[] = [
  {
    slug: "digital-marketing",
    label: "Digital Marketing",
    summary:
      "TGL builds data-driven marketing systems — SEO, paid ads, social content, and conversion-focused funnels — so your brand reaches the right audience and turns traffic into leads.",
    tags: ["SEO", "Paid Ads", "Social Media", "Analytics"],
    image: "/images/Image-Evaluation-Design-Pemogan-3-1.png",
    outcomes: ["More qualified leads", "Clear campaign ROI", "Consistent brand presence"],
  },
  {
    slug: "mern-stack",
    label: "MERN Stack Development",
    summary:
      "End-to-end web apps with MongoDB, Express, React, and Node.js — from MVP to production APIs, admin dashboards, and integrations built to scale with your business.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "/images/Image-Evaluation-Design-Pemogan-4-1.png",
    outcomes: ["Full-stack delivery", "Scalable APIs", "Maintainable React UI"],
  },
  {
    slug: "next-js",
    label: "Next.js Development",
    summary:
      "Fast, SEO-friendly web experiences with Next.js — server components, App Router, API routes, and deployments tuned for performance, security, and search visibility.",
    tags: ["Next.js", "React", "TypeScript", "Vercel / Node"],
    image: "/images/Image-Evaluation-Design-Pemogan-4-1.png",
    outcomes: ["Better Core Web Vitals", "Strong SEO foundations", "Production-ready launches"],
  },
];

/* ─────────────────────────────────────────────────────────────
   INDUSTRIES
   We place developers across every major sector — from fintech
   to healthcare — wherever great engineering matters most.
───────────────────────────────────────────────────────────── */
export const industryItems: IndustryItem[] = [
  {
    slug: "fintech",
    title: "Fintech",
    desc: "High-throughput payment systems, trading platforms, and regulatory-compliant financial software.",
    image:
      "https://nva.nirmanavisual.com/pemogan/wp-content/uploads/sites/38/2025/08/Image-Industry-1.png",
    capabilities: ["Payment gateways", "Risk & compliance", "Real-time data pipelines"],
  },
  {
    slug: "saas",
    title: "SaaS Platforms",
    desc: "Multi-tenant cloud products that scale globally — built by engineers who've done it before.",
    image:
      "https://nva.nirmanavisual.com/pemogan/wp-content/uploads/sites/38/2025/08/Image-Industry-2.png",
    capabilities: ["Multi-tenant architecture", "API design", "Subscription & billing"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce",
    desc: "Scalable storefronts, checkout optimization, and the back-end power to handle traffic spikes.",
    image:
      "https://nva.nirmanavisual.com/pemogan/wp-content/uploads/sites/38/2025/08/Image-Industry-3.png",
    capabilities: ["Storefront engineering", "Payments & fraud", "Order management"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    desc: "HIPAA-aware systems, patient portals, and clinical workflow tools built for reliability.",
    image:
      "https://nva.nirmanavisual.com/pemogan/wp-content/uploads/sites/38/2025/08/Image-Industry-2.png",
    capabilities: ["Patient data security", "EHR integrations", "Clinical workflows"],
  },
  {
    slug: "logistics",
    title: "Logistics",
    desc: "Real-time tracking, route optimization, and dispatch automation to keep operations moving.",
    image:
      "https://nva.nirmanavisual.com/pemogan/wp-content/uploads/sites/38/2025/08/Image-Industry-1.png",
    capabilities: ["Fleet tracking", "Dispatch systems", "Operations dashboards"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    desc: "Property platforms, lead automation, and digital customer journeys for modern agencies.",
    image:
      "https://nva.nirmanavisual.com/pemogan/wp-content/uploads/sites/38/2025/08/Image-Industry-3.png",
    capabilities: ["Listing platforms", "Agent CRM", "Portfolio analytics"],
  },
];

/* ─────────────────────────────────────────────────────────────
   CASE STUDIES
───────────────────────────────────────────────────────────── */
export const caseStudyItems: CaseStudyItem[] = [
  {
    slug: "rezo-systems",
    title: "Rezo Systems",
    industry: "Technology",
    excerpt:
      "Embedded a dedicated engineering team to rebuild Rezo's core workflow automation platform — cloud-native, scalable, and integration-ready.",
    impact: ["40% efficiency gain", "Enterprise scale", "Cloud native"],
    tags: ["Enterprise", "SaaS"],
    image: "/WebProjects/RezoSystems.jpeg",
    type: "web",
  },
  {
    slug: "myholidayparks",
    title: "MyHolidayParks",
    industry: "Travel & Hospitality",
    excerpt:
      "Placed full-stack developers to build a booking platform for 500+ holiday parks — real-time availability, multi-language support, and secure payments.",
    impact: ["100K+ bookings", "500+ parks listed", "Multi-language support"],
    tags: ["Travel", "Booking Platform"],
    image: "/WebProjects/MyHolidayParks.jpeg",
    type: "web",
  },
  {
    slug: "dormoa",
    title: "Dormoa",
    industry: "Real Estate",
    excerpt:
      "Staffed a product squad to deliver London's curated apartment rental platform — smart search, flexible dates, and a city-wide listing experience.",
    impact: ["Curated London listings", "Flexible date search", "Multi-language platform"],
    tags: ["Real Estate", "Web Platform"],
    image: "/WebProjects/Dormoa.jpeg",
    type: "web",
  },
  {
    slug: "ketonatural",
    title: "KetoNatural Pet Foods",
    industry: "E-Commerce",
    excerpt:
      "Provided e-commerce engineers to launch a subscription-based keto pet food store — science-backed UX, loyalty programs, and a high-converting storefront.",
    impact: ["90% fewer carbs messaging", "Subscription model", "30-day money-back"],
    tags: ["E-Commerce", "Pet Foods"],
    image: "/WebProjects/Ketonatural.jpeg",
    type: "web",
  },
];

/* ─────────────────────────────────────────────────────────────
   SOCIAL PROOF — client logos
───────────────────────────────────────────────────────────── */
export const clientLogos = [
  "REZO SYSTEMS",
  "MYHOLIDAYPARKS",
  "DORMOA",
  "KETONATURAL",
  "NEXORA",
  "BLUEPEAK",
];

/* ─────────────────────────────────────────────────────────────
   TESTIMONIALS — simple quotes for landing (no 3D carousel)
───────────────────────────────────────────────────────────── */
export const clientTestimonials = [
  {
    quote:
      "TGL took over our paid search and SEO with a clear plan each month. Traffic and qualified leads improved within the first quarter.",
    name: "Operations Lead",
    role: "E-commerce brand",
    company: "Ketonatural",
  },
  {
    quote:
      "The MERN team shipped our admin dashboard and customer portal on schedule. Communication was direct and the code quality was solid.",
    name: "Founder",
    role: "SaaS startup",
    company: "Nexora",
  },
  {
    quote:
      "Our Next.js marketing site loads fast and ranks better. They handled design, build, and deployment without drama.",
    name: "Marketing Director",
    role: "Regional business",
    company: "Bluepeak",
  },
];

/* ─────────────────────────────────────────────────────────────
   HOW WE WORK — delivery steps
───────────────────────────────────────────────────────────── */
export const deliverySteps = [
  {
    title: "Discover",
    detail:
      "We align on goals, audience, and technical scope — whether it's a campaign plan, MERN architecture, or a Next.js product roadmap.",
  },
  {
    title: "Plan",
    detail:
      "You get a clear delivery plan: channel strategy and content calendar for marketing, or sprints, wireframes, and stack decisions for development.",
  },
  {
    title: "Build",
    detail:
      "Our team executes — campaigns go live, MERN APIs and React UIs ship, or Next.js pages and integrations roll out with regular demos and feedback.",
  },
  {
    title: "Optimize",
    detail:
      "We measure results, refine ads and SEO, tune performance, and iterate features so growth and product quality keep improving after launch.",
  },
];

/* ─────────────────────────────────────────────────────────────
   CAPABILITIES — services we deliver (used by DeliveryShowcase)
───────────────────────────────────────────────────────────── */
export const serviceCapabilities = [
  {
    key: "marketing",
    title: "Digital Marketing",
    description:
      "Growth campaigns and content engineered for reach, engagement, and measurable conversions across search and social.",
    bullets: ["SEO & content strategy", "Paid search & social ads", "Analytics & reporting"],
  },
  {
    key: "mern",
    title: "MERN Stack",
    description:
      "Full-stack JavaScript products — MongoDB data layers, Express APIs, and React frontends shipped as one cohesive system.",
    bullets: ["REST & document APIs", "React SPA / dashboards", "Auth, roles & integrations"],
  },
  {
    key: "next",
    title: "Next.js",
    description:
      "Modern React sites and apps with server rendering, routing, and SEO built in from day one.",
    bullets: ["App Router & SSR/SSG", "API routes & server actions", "Performance & deployment"],
  },
] as const;

/* ─────────────────────────────────────────────────────────────
   TRUST SIGNALS — security & quality badges
───────────────────────────────────────────────────────────── */
export const securityBadges = [
  "NDA-Backed Engagements",
  "Full IP Ownership",
  "GDPR Compliant Practices",
  "Rigorous Technical Screening",
];

/* ─────────────────────────────────────────────────────────────
   ENGAGEMENT MODELS
───────────────────────────────────────────────────────────── */
export const engagementModels = [
  {
    title: "Marketing Retainer",
    text: "Ongoing SEO, ads, and content with monthly reporting — ideal for brands that want steady pipeline growth.",
  },
  {
    title: "Fixed-Scope Build",
    text: "A defined MERN or Next.js product with milestones, demos, and a clear launch date.",
  },
  {
    title: "Hybrid Growth + Product",
    text: "Launch or relaunch a Next.js site and run digital marketing in parallel so traffic and product evolve together.",
  },
];
