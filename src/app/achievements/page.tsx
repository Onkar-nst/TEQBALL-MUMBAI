import type { Metadata } from "next";
import { PageHero, HeroPhoto } from "@/components/ui";
import AchievementsLedger from "@/components/AchievementsLedger";

export const metadata: Metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <>
      <PageHero title="Achievements" sub="The official record of Teqball Mumbai: every championship, appearance, and league season, organised by year and sourced." />
      <HeroPhoto short src="/images/nationals-nashik-2025.jpg" caption="The squad at the 6th Teqball Open National Championship, Nashik, June 2025." />
      <AchievementsLedger />
    </>
  );
}
