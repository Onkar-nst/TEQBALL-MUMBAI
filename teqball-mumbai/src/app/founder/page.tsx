import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, VideoPlaceholder } from "@/components/ui";
export const metadata: Metadata = { title: "The Founder" };

export default function FounderPage() {
  return (
    <>
      <PageHero title="The journey behind the movement" sub="From representing India to building the country's leading teqball club." />
      <div className="section">
        <div className="founder-grid">
          <div className="founder-side">
            <Image className="founder-photo" src="/images/vinit-ronaldinho-2019.jpg" alt="Vinit Jain with Ronaldinho at the 2019 Asian-Pacific Teqball Cup, China" width={800} height={800} />
            <p style={{ fontSize: 11, color: "var(--paper-dim)", marginTop: 8 }}>Vinit Jain with Ronaldinho at the 2019 Asian-Pacific Teqball Cup, China.</p>
            <dl className="vitals">
              <dt>Role</dt><dd>Founder, President &amp; Team India Coach</dd>
              <dt>Club</dt><dd>Teqball Mumbai</dd>
              <dt>Founded</dt><dd>2021</dd>
              <dt>FITEQ World Ranking</dt><dd>Singles World No. 86</dd>
              <dt>Team India Coach</dt><dd>Asian Youth Games 2025, Bahrain</dd>
            </dl>
            <p style={{ fontSize: 10.5, color: "var(--paper-dim)", marginTop: 8 }}>Ranking per fiteq.org. FITEQ rankings update regularly.</p>
          </div>
          <div className="founder-body">
            <h3>The Beginning</h3>
            <p>Before teqball, Vinit Jain was already a multi-sport athlete: leading India&apos;s U-21 team at the Minifootball World Cup in Prague (2018), and winning Bronze at both the Minifootball National Championship (2018) and the Futsal National Championship (2019).</p>
            <h3>The Athlete</h3>
            <p>Before Teqball Mumbai existed, Vinit Jain was already India&apos;s top competitor, winning Gold in Men&apos;s Singles at the 1st Teqball National Championship in 2019.</p>
            <h3>Representing India</h3>
            <p>That same year, he became the first Indian to win an international Teqball match, finishing Rank 5 at the 1st Asian-Pacific Teqball Cup in China.</p>
            <h3>Building Teqball Mumbai</h3>
            <p>In 2021, Vinit founded Teqball Mumbai, and won Gold in Men&apos;s Doubles at the 1st Teqball Beach National Championship that same year. Over the seasons that followed, he took the club&apos;s athletes across three continents: World Series events in Paris, Poland and Vietnam; World Championships in Germany and Thailand; and national titles in Erode, Nashik and Mumbai, all while continuing to compete himself, winning Gold in Men&apos;s Singles at both the 2023 and 2024 National Championships.</p>
            <h3>The Vision for India</h3>
            <p className="sample">SAMPLE COPY: Vinit&apos;s vision for Indian teqball, in his own words.</p>
            <h3>The Next Chapter</h3>
            <p>In 2025, Vinit stepped into a new role as Team India Coach at the Asian Youth Games in Bahrain, guiding Teqball Mumbai&apos;s Atharva Sakpal to a 9th-place finish on the international stage. In 2026, he topped the Men&apos;s Singles Asian Games Selection Trials in Nashik. <em>Whether that puts him on the plane to the 2026 Asian Games in Aichi–Nagoya, Japan, as coach, athlete, or both, needs confirmation from Teqball Mumbai.</em></p>
            <div className="strip-label">Founder video message (placeholder)</div>
            <VideoPlaceholder />
          </div>
        </div>
      </div>
    </>
  );
}
