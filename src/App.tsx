import { Route, Routes, useParams } from "react-router-dom";
import { CareersPage } from "@/components/site/CareersPage";
import { CaseStudies } from "@/components/site/CaseStudies";
import { ClientLogos } from "@/components/site/ClientLogos";
import { ContactForm } from "@/components/site/ContactForm";
import { DeliveryShowcase } from "@/components/site/DeliveryShowcase";
// Folded into DeliveryShowcase:
// import { DeliveryProcess } from "@/components/site/DeliveryProcess";
// import { EngagementModels } from "@/components/site/EngagementModels";
import { Footer } from "@/components/site/Footer";
import { GlobalThreeBackground } from "@/components/site/GlobalThreeBackground";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Industries } from "@/components/site/Industries";
import { IndustriesPageHero } from "@/components/site/IndustriesPageHero";
import { InnerPageHero } from "@/components/site/InnerPageHero";
import { MotionInView } from "@/components/site/MotionInView";
import { OurApproach } from "@/components/site/OurApproach";
// import { OurTeams } from "@/components/site/OurTeams";
// import { OurVision } from "@/components/site/OurVision"; // Replaced by HorizontalShowcase
import { ServiceDetails } from "@/components/site/ServiceDetails";
// import { Services } from "@/components/site/Services"; // Folded into HorizontalShowcase
// import { ServicesIntro } from "@/components/site/ServicesIntro"; // Folded into HorizontalShowcase
import { ServicesPageHero } from "@/components/site/ServicesPageHero";
import { ServicesShowcase } from "@/components/site/ServicesShowcase";
// Folded into DeliveryShowcase:
// import { SecurityBadges } from "@/components/site/SecurityBadges";
import { StickyContactCta } from "@/components/site/StickyContactCta";
import { TechStack } from "@/components/site/TechStack";
import { SimpleTestimonials } from "@/components/site/SimpleTestimonials";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
// import StepSection from "@/components/site/StepSection"; // 3D cube — replaced by SimpleTestimonials on home
import { caseStudyItems, industryItems, serviceItems } from "@/content/siteContent";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalThreeBackground />
      <StickyContactCta />
      <div className="relative z-10 flex min-h-full flex-col">{children}</div>
    </>
  );
}

/** Calmer landing: no WebGL particle layer behind the fold */
function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StickyContactCta />
      <div className="relative z-10 flex min-h-full flex-col bg-[#0b1220]">{children}</div>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ClientLogos />
        <ServicesShowcase />
        {/* Sticky scroll — do not wrap in MotionInView */}
        <WhyChooseUs />
        <SimpleTestimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><ServicesPageHero /></MotionInView>
        <MotionInView><ClientLogos /></MotionInView>
        {/* <MotionInView><ServicesIntro /></MotionInView> */}
        <MotionInView><ServicesShowcase /></MotionInView>
        <MotionInView><OurApproach ctaLabel="Request Quote" counterLabelFirst /></MotionInView>
        <MotionInView><DeliveryShowcase /></MotionInView>
        <MotionInView><TechStack withSalesIntro /></MotionInView>
        <MotionInView><CaseStudies /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}

function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><IndustriesPageHero /></MotionInView>
        <MotionInView><Industries /></MotionInView>
        <MotionInView><OurApproach ctaLabel="Discover Now" counterLabelFirst /></MotionInView>
        <MotionInView><ServiceDetails /></MotionInView>
        <MotionInView><TechStack withSalesIntro /></MotionInView>
        <MotionInView><CaseStudies /></MotionInView>
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}

function SimplePage({ title, blocks }: { title: string; blocks: React.ReactNode[] }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title={title} /></MotionInView>
        {blocks.map((b, i) => <MotionInView key={i}>{b}</MotionInView>)}
      </main>
      <Footer />
    </>
  );
}

function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="About Us" /></MotionInView>
        {/* WhyChooseUs is rendered bare (no MotionInView) — perspective on an
            ancestor would break the sticky pin used for the hiring-process scroll. */}
        <WhyChooseUs />
        {/* <MotionInView><OurTeams /></MotionInView> */}
        <MotionInView><ContactForm /></MotionInView>
      </main>
      <Footer />
    </>
  );
}

function ServiceSlugPage() {
  const { slug } = useParams();
  const service = serviceItems.find((item) => item.slug === slug) ?? serviceItems[0];
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title={service.label} /></MotionInView>
        {/* <MotionInView><ServicesIntro /></MotionInView> */}
        <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 md:p-10">
              <p className="text-[16px] leading-[1.8] text-white/75">{service.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {service.outcomes.map((outcome) => (
                  <span key={outcome} className="rounded-full border border-white/20 px-4 py-2 text-[13px] text-white/85">{outcome}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function IndustrySlugPage() {
  const { slug } = useParams();
  const industry = industryItems.find((item) => item.slug === slug) ?? industryItems[0];
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title={`${industry.title} Solutions`} /></MotionInView>
        <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 md:p-10">
              <p className="text-[16px] leading-[1.8] text-white/75">{industry.desc}</p>
              <h2 className="mt-8 text-[30px] font-semibold text-white">Key Capabilities</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {industry.capabilities.map((capability) => (
                  <li key={capability} className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white/85">{capability}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title="Success Stories" /></MotionInView>
        <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <div className="grid gap-5 md:grid-cols-3">
              {caseStudyItems.map((item) => (
                <article key={item.slug} className="rounded-2xl border border-white/20 bg-white/5 p-6">
                  <p className="text-[12px] uppercase tracking-[0.12em] text-brand-cyan">{item.industry}</p>
                  <h2 className="mt-2 text-[26px] font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-[14px] leading-[1.7] text-white/65">{item.excerpt}</p>
                  <ul className="mt-4 space-y-1.5 text-[13px] text-white/80">
                    {item.impact.map((i) => <li key={i}>- {i}</li>)}
                  </ul>
                  <a href={`/case-studies/${item.slug}`} className="mt-5 inline-flex rounded-full border border-white/25 px-4 py-2 text-[13px] font-semibold text-white transition hover:border-brand-cyan hover:text-brand-cyan">
                    View Details
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CaseSlugPage() {
  const { slug } = useParams();
  const item = caseStudyItems.find((study) => study.slug === slug) ?? caseStudyItems[0];
  return (
    <>
      <Header />
      <main className="flex-1">
        <MotionInView><InnerPageHero title={item.title} /></MotionInView>
        <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 md:py-24">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-8 md:p-10">
              <p className="text-[12px] uppercase tracking-[0.12em] text-brand-cyan">{item.industry}</p>
              <p className="mt-4 text-[16px] leading-[1.8] text-white/75">{item.excerpt}</p>
              <h2 className="mt-8 text-[30px] font-semibold text-white">Business Impact</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {item.impact.map((impact) => (
                  <li key={impact} className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white/90">{impact}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InnerPageHero title="404" />
        <section className="pemogan-hero-font text-white" style={{ backgroundColor: "#0B1220" }}>
          <div className="mx-auto max-w-[1280px] px-4 py-16 text-center sm:px-6 lg:px-8 md:py-24">
            <p className="text-[16px] text-white/60">The page you are looking for does not exist.</p>
            <div className="mt-8">
              <a href="/" className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-7 py-3 text-[14px] font-semibold text-white shadow-lg transition hover:scale-95 hover:bg-brand-cyan-bright">
                Back Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <HomePage />
            </HomeLayout>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contacts" element={<SimplePage title="Contacts" blocks={[<ContactForm />]} />} />
        <Route path="/case-study" element={<SimplePage title="Success Stories" blocks={[<CaseStudies />, <SimpleTestimonials />, <ContactForm />]} />} />
        <Route path="/case-study-details" element={<SimplePage title="Success Story Details" blocks={[<ServiceDetails />, <CaseStudies />, <ContactForm />]} />} />
        <Route path="/faq" element={<SimplePage title="FAQ" blocks={[<ServiceDetails />, <ContactForm />]} />} />
        <Route path="/industry-details" element={<SimplePage title="Industry Details" blocks={[<Industries />, <OurApproach />, <CaseStudies />, <ContactForm />]} />} />
        {/* <Route path="/our-team" element={<SimplePage title="Our Team" blocks={[<OurTeams />, <ContactForm />]} />} /> */}
        <Route path="/pricing-plan" element={<SimplePage title="Pricing Plan" blocks={[<ServicesShowcase />, <ContactForm />]} />} />
        <Route path="/service-detail" element={<SimplePage title="Service Detail" blocks={[<ServicesShowcase />, <OurApproach />, <ServiceDetails />, <ContactForm />]} />} />
        <Route path="/testimonial" element={<SimplePage title="Testimonial" blocks={[<SimpleTestimonials />, <ContactForm />]} />} />
        <Route path="/services/:slug" element={<ServiceSlugPage />} />
        <Route path="/industries/:slug" element={<IndustrySlugPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseSlugPage />} />
        <Route path="/careers" element={<><Header /><main className="flex-1"><CareersPage /></main><Footer /></>} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
