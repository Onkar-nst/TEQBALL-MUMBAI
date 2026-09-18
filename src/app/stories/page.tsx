import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Stories" };
const STORIES = [
  ["International Journey", "Sample: The road to Bahrain"], ["Mumbai Teq League", "Sample: Inside Season 7"], ["Behind the Scenes", "Sample: A day of training"],
  ["Championships", "Sample: Inside the national circuit"], ["Brand Collaborations", "Sample: Building the kit"], ["Media Coverage", "Sample: In the press"],
];
export default function StoriesPage() {
  return (
    <>
      <PageHero title="Stories from the Movement" sub="Athlete stories, championships, and the journey from Mumbai to the world." />
      <div className="section">
        <div className="story-grid">
          {STORIES.map(([cat, title]) => <div className="story-card" key={title}><div className="story-cat">{cat}</div><h3>{title}</h3><p>Sample teaser. Replace with real editorial content.</p></div>)}
        </div>
      </div>
    </>
  );
}
