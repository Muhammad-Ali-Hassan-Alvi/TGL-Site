"use client";

import dynamic from "next/dynamic";

const GlobalThreeBackground = dynamic(
  () => import("@/components/site/GlobalThreeBackground").then((m) => m.GlobalThreeBackground),
  { ssr: false },
);

export function GlobalThreeMount() {
  return <GlobalThreeBackground />;
}
