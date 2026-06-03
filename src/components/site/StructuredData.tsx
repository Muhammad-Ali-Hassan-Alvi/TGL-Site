import Script from "next/script";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TGL",
  alternateName: "The Great Logics",
  url: "/",
  logo: "/TGL-Logo.svg",
  sameAs: ["https://linkedin.com", "https://x.com", "https://instagram.com"],
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TGL",
  alternateName: "The Great Logics",
  url: "/",
  potentialAction: {
    "@type": "SearchAction",
    target: "/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export function StructuredData() {
  return (
    <>
      <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(orgSchema)}
      </Script>
      <Script id="site-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(siteSchema)}
      </Script>
    </>
  );
}
