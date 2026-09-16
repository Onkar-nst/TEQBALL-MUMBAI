import type { Metadata } from "next";
import { GalleryRow, VideoPlaceholder } from "@/components/ui";
export const metadata: Metadata = { title: "Asian Youth Games" };
export default function AygPage() {
  return (
    <>
      <div className="feature-band" style={{ marginTop: 44 }}>
        <h2>From our club to the Asian stage</h2>
        <p>Teqball&apos;s debut at a major Asian multi-sport games, and Teqball Mumbai&apos;s place in that story.</p>
      </div>
      <div className="section">
        <ul className="deflist">
          <li><b>Venue</b>: Exhibition World Bahrain, Sakhir, Bahrain</li>
          <li><b>Dates</b>: 20–23 October 2025</li>
          <li><b>Significance</b>: the first time teqball featured at the Asian Youth Games</li>
          <li><b>India&apos;s representative</b>: Atharva Sakpal, Teqball Mumbai, Men&apos;s Singles, ranked 9th</li>
          <li><b>Team India Coach</b>: Vinit Jain, Founder, Teqball Mumbai</li>
        </ul>
        <div className="confirm-box"><b>Needs confirmation from Teqball Mumbai before publishing:</b> any additional squad members beyond Atharva Sakpal, and behind-the-scenes quotes or footage from Bahrain.</div>
        <div className="strip-label">Photo gallery (placeholder)</div>
        <GalleryRow />
        <div className="strip-label">Video highlight (placeholder)</div>
        <VideoPlaceholder />
      </div>
    </>
  );
}
