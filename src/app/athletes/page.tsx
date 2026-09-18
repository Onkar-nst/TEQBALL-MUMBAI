import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import AthletesRoster from "@/components/AthletesRoster";

export const metadata: Metadata = { title: "Athletes" };

export default function AthletesPage() {
  return (
    <>
      <PageHero title="The Athletes" sub="Meet the athletes representing the next generation of Indian Teqball." />
      <Suspense fallback={null}><AthletesRoster /></Suspense>
    </>
  );
}
