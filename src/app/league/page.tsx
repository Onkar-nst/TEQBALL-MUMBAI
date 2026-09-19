import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, HeroStats } from "@/components/ui";
import { LEAGUE_WINNERS } from "@/data";
export const metadata: Metadata = { title: "Mumbai Teq League" };
export default function LeaguePage() {
  return (
    <>
      <PageHero title="Mumbai Teq League" sub="A season-long city competition, where the club's roster is built.">
        <HeroStats stats={[{ n: "7", l: "Seasons completed" }, { n: "300+", l: "Athletes, all-time" }, { n: "48", l: "Players, Season 7" }, { n: "3×", l: "Titles for Penta TC, the league's most successful team" }]} />
      </PageHero>
      <div className="section">
        <p className="lede">The Mumbai Teq League gives players of every level a competitive, season-long stage, feeding directly into Teqball Mumbai&apos;s wider athlete pathway. Across seven seasons, 300+ athletes from Mumbai have taken part; Season 7 has just concluded with 48 players.</p>
        <div className="strip-label">Season champions</div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Season</th><th>Champion</th><th>Captain</th></tr></thead>
            <tbody>
              {[...LEAGUE_WINNERS].reverse().map((w) => (
                <tr key={w.season} data-type="national"><td className="event-name">Season {w.season}</td><td>{w.team}</td><td>{w.captain}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 20, marginBottom: 0 }}>Kit Partner: <b>Royal Sports</b></p>
        <p style={{ margin: "6px 0 0" }}>Title Sponsor: <b>Max Protein</b></p>
        <p style={{ margin: "6px 0 0" }}>Recovery Partner: <b>Upurfit</b></p>
        <div className="cta-row"><Link className="btn btn-primary" href="/join">Register interest for Season 8</Link></div>
      </div>
    </>
  );
}
