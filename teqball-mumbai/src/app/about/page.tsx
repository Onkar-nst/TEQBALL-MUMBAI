import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "About" };

const JOURNEY = [
  ["2019", "Vinit Jain wins Gold in Men's Singles at the 1st Teqball National Championship, then becomes the first Indian to win an international Teqball match (Rank 5) at the 1st Asian-Pacific Teqball Cup, China."],
  ["2021", "Vinit Jain founds Teqball Mumbai and wins Gold in Men's Doubles at the 1st Teqball Beach National Championship."],
  ["2022", "The club wins Gold at the Senior National Teqball Championship, Erode, and competes internationally at the Teqball World Series (Paris, Poland) and World Championship (Germany)."],
  ["2023", "Teqball Mumbai's busiest international year: tours through Dubai, Spain, Thailand and Vietnam, alongside a National Championship title in Nashik."],
  ["2024", "Vinit Jain wins Gold at the National Championship, Mumbai, and the squad competes at the Teqball World Championship, Vietnam."],
  ["2025", "Atharva Sakpal wins Gold at the National Youth Championship and represents India at the Asian Youth Games, Bahrain (9th, Men's Singles), with Vinit Jain as Team India Coach."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" sub="What Teqball Mumbai is, why it exists, and where it's going." />
      <div className="section">
        <div className="section-label">Our story</div>
        <p className="lede">Teqball Mumbai was founded by Vinit Jain in 2021, two years after he became the first Indian to win an international Teqball match, at the 2019 Asian-Pacific Teqball Cup in China. The full origin story, in Vinit&apos;s own words, is still to come.</p>
      </div>
      <div className="section">
        <div className="section-label">Mission</div>
        <ul className="deflist">
          <li><b>Develop athletes</b>: capable of competing at international standards, from grassroots to elite level.</li>
          <li><b>Create opportunities</b>: competitive pathways through district, national and international competitions.</li>
          <li><b>Build a sustainable ecosystem</b>: club, league, sponsors and community working as one.</li>
          <li><b>Represent India internationally</b>: putting Indian athletes on Asian and world stages.</li>
          <li><b>Grow the grassroots</b>: bringing teqball to schools, colleges and new communities.</li>
        </ul>
      </div>
      <div className="section">
        <h2>The Journey</h2>
        <div className="timeline">
          {JOURNEY.map(([y, t]) => <div className="tl-item" key={y}><div className="tl-year">{y}</div><div className="tl-body">{t}</div></div>)}
          <div className="tl-item unconfirmed"><div className="tl-year">2026</div><div className="tl-body">Mumbai Teq League Season 7 concludes with 48 players, and Vinit Jain tops the Men&apos;s Singles Asian Games Selection Trials in Nashik.</div><div className="tl-tag">Needs confirmation: India&apos;s final Asian Games 2026 squad for Aichi–Nagoya, Japan</div></div>
        </div>
      </div>
    </>
  );
}
