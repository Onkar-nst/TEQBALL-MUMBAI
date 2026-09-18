import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "More Than a Sport" };
export default function FootballPage() {
  return (
    <>
      <PageHero title="More than a sport" sub="Teqball sharpens the touch, control and decision-making that footballers depend on, which is why it keeps crossing paths with professional football." />
      <div className="section">
        <div className="partner-grid">
          {["Mumbai City FC", "All Stars FC"].map((n) => (
            <div className="partner-card" key={n}><h3>{n}</h3><div className="role">Partner</div><p>Details of activations, training sessions or joint content: needs confirmation from Teqball Mumbai before publishing.</p></div>
          ))}
        </div>
        <div className="confirm-box"><b>Needs confirmation from Teqball Mumbai before publishing:</b> the exact nature of each relationship (official partnership, one-off activation, or athlete appearance), and specific dates or events.</div>
      </div>
    </>
  );
}
