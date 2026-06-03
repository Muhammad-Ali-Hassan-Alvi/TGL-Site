import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Analytics } from "@/components/site/Analytics";
import { GlobalThreeMount } from "@/components/site/GlobalThreeMount";
import { StickyContactCta } from "@/components/site/StickyContactCta";
import { StructuredData } from "@/components/site/StructuredData";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TGL | The Great Logics — Marketing, MERN & Next.js",
  description:
    "TGL (The Great Logics) — digital marketing, MERN stack development, and Next.js websites for businesses that want to grow online.",
  openGraph: {
    title: "TGL | The Great Logics — Software Development",
    description:
      "TGL (The Great Logics) — offshore software development, mobile and web apps, QA, and DevOps for teams worldwide.",
    siteName: "TGL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <StructuredData />
        <Analytics />
        <GlobalThreeMount />
        <StickyContactCta />
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
