import type { Metadata } from "next";
import { PageHero, VideoPlaceholder } from "@/components/ui";
import RulesToggle from "@/components/RulesToggle";
export const metadata: Metadata = { title: "What is Teqball" };
export default function SportPage() {
  return (
    <>
      <PageHero title="What is Teqball" sub="A football-based sport played on a specially curved table, explained in under 60 seconds." />
      <div className="section">
        <div className="sport-grid">
          <div className="sport-block"><h3>How do you play</h3><p>Two players or pairs use football touches (no hands) to return the ball across a curved table, scoring points like table tennis.</p></div>
          <div className="sport-block"><h3>Why footballers play it</h3><ul><li>Ball control</li><li>First touch</li><li>Coordination</li><li>Concentration</li><li>Decision-making</li><li>Technical development</li></ul></div>
          <div className="sport-block"><h3>Who can play</h3><p>Beginners through elite athletes, the table adapts the game to every level, with no age or gender restrictions.</p></div>
        </div>
      </div>
      <div className="section">
        <div className="sport-grid">
          <div className="sport-block"><h3>Where it comes from</h3><p>The idea was born in Hungary in 2012, when former footballer Gábor Borsányi began experimenting with a curved table-tennis table to keep the ball bouncing back to his feet. Working with computer scientist Viktor Huszár, the first teqball table was built in 2014. Brazilian football legend Ronaldinho officially unveiled the sport in Budapest in 2016 and remains one of its global ambassadors.</p></div>
          <div className="sport-block"><h3>The table</h3><p>3 m long and 1.7 m wide, arching up to 0.76 m at its peak where the net divides the two sides. Played with a standard size-5 football, kept at a lower pressure than a normal match ball.</p></div>
          <div className="sport-block"><h3>On the global stage</h3><p>Recognised by the Olympic Council of Asia (2018) and the Association of National Olympic Committees of Africa (2019), and a full member of the Global Association of International Sports Federations (2020). Teqball has featured at the Asian Beach Games, the European Games, and (as of 2025) the Asian Youth Games, and is now pursuing full Olympic recognition.</p></div>
        </div>
      </div>
      <div className="section">
        <div className="strip-label">Watch Teqball</div>
        <VideoPlaceholder />
        <RulesToggle />
      </div>
    </>
  );
}
