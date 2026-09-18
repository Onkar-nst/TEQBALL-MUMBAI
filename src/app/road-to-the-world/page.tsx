import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Road to the World" };
const STEPS = [["Discover", "Grassroots introduction to the sport."], ["Develop", "Structured, coached training."], ["Compete", "Local and national competitions."], ["Perform", "National-level excellence."], ["Represent", "International competition, representing India."], ["Inspire", "Becoming the model for the next generation."]];
export default function RoadPage() {
  return (
    <>
      <PageHero title="The Road to the World" sub="Teqball Mumbai isn't a place you drop in to play once. It's a pathway." />
      <div className="section">
        <div className="pathway">
          {STEPS.map(([h, p], i) => <div className="path-step" key={h}><div className="pnum">{i + 1}</div><h3>{h}</h3><p>{p}</p></div>)}
        </div>
      </div>
    </>
  );
}
