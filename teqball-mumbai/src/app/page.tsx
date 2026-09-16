import Link from "next/link";
import { PageHero, TextLink, HeroStats } from "@/components/ui";

const STORIES = [
  { cat: "International Journey", title: "Sample: The road to Bahrain" },
  { cat: "Mumbai Teq League", title: "Sample: Inside Season 7" },
  { cat: "Behind the Scenes", title: "Sample: A day of training" },
];

export default function Home() {
  return (
    <>
      <div className="home-hero">
      <PageHero tight={false} title={<>From Mumbai.<br />For India.<br />Built for the world.</>}
        sub="Teqball Mumbai is India's high-performance teqball ecosystem: a national-standard club, a talent pathway, and the training ground behind the country's first Asian Youth Games teqball representative.">
        <div className="cta-row">
          <Link className="btn btn-primary" href="/about">Discover Teqball Mumbai</Link>
          <Link className="btn btn-outline" href="/athletes">Meet Our Athletes</Link>
          <Link className="btn btn-outline" href="/train">Train With Us</Link>
          <Link className="btn btn-outline" href="/sponsors">Partner With Us</Link>
        </div>
        <HeroStats stats={[
          { n: "2021", l: "Founded by Vinit Jain" },
          { n: "7", l: "Mumbai Teq League seasons completed" },
          { n: "300+", l: "Athletes developed since founding" },
          { n: "#86", l: "FITEQ singles world ranking (Vinit Jain)" },
        ]} />
      </PageHero>
      <figure className="home-hero-visual">
        <div className="home-hero-img" style={{ backgroundImage: "url('/images/nationals-nashik-2025.jpg')" }} />
        <figcaption className="photo-credit">Teqball Mumbai athletes at the 6th Teqball Open National Championship, Nashik, June 2025.</figcaption>
      </figure>
      </div>

      <div className="section">
        <div className="section-label">Who we are</div>
        <p className="lede">Teqball Mumbai is a high-performance teqball club and ecosystem founded by Vinit Jain in 2021, running an athlete development pathway, the Mumbai Teq League, and the training ground behind India&apos;s Asian Youth Games teqball representative, built around teqball, the football-based table sport now on the programme at major multi-sport games across Asia.</p>
      </div>

      <div className="section">
        <h2>The Athletes</h2>
        <div className="roster mini">
          <Link href="/athletes?id=vinitjain" className="card real"><div className="plate">VJ</div><h3>Vinit Jain</h3><div className="cat">Founder &amp; Team India Coach</div><div className="headline">Team India Coach, 2025 Asian Youth Games</div></Link>
          <Link href="/athletes?id=shizakhan" className="card real"><div className="plate">SK</div><h3>Shiza Khan</h3><div className="cat">Senior Athlete</div><div className="headline">National Champion, Women&apos;s Doubles, 2022</div></Link>
          <Link href="/athletes?id=atharvasakpal" className="card real"><div className="plate">AS</div><h3>Atharva Sakpal</h3><div className="cat">Youth Athlete</div><div className="headline">National Champion &amp; Asian Youth Games 2025</div></Link>
        </div>
        <p style={{ marginTop: 18 }}><TextLink href="/athletes">View the full roster</TextLink></p>
      </div>

      <div className="section">
        <h2>From Mumbai to the World</h2>
        <div className="timeline">
          <div className="tl-item"><div className="tl-year">2019</div><div className="tl-body">Vinit Jain wins India&apos;s first-ever international Teqball match at the 1st Asian-Pacific Teqball Cup, China (Rank 5), two years before founding the club.</div></div>
          <div className="tl-item"><div className="tl-year">2021</div><div className="tl-body">Vinit Jain founds Teqball Mumbai and wins Gold at the 1st Teqball Beach National Championship.</div></div>
          <div className="tl-item"><div className="tl-year">2022–24</div><div className="tl-body">The squad competes across three continents: World Series (Paris, Poland, Vietnam), World Championships (Germany, Thailand, Vietnam), and tours through Dubai, Spain and Thailand.</div></div>
          <div className="tl-item"><div className="tl-year">2025</div><div className="tl-body">Atharva Sakpal represents India at the Asian Youth Games, Bahrain, ranking 9th, with founder Vinit Jain as Team India Coach.</div></div>
          <div className="tl-item unconfirmed"><div className="tl-year">2026</div><div className="tl-body">Vinit Jain tops the Men&apos;s Singles Asian Games Selection Trials in Nashik.</div><div className="tl-tag">Needs confirmation: final Asian Games 2026 squad not yet announced</div></div>
        </div>
        <p style={{ marginTop: 18 }}><TextLink href="/about">See the full journey</TextLink></p>
      </div>

      <div className="feature-band" style={{ margin: "40px 0" }}>
        <h2>From our club to the Asian stage</h2>
        <p>In October 2025, teqball made its debut at the Asian Youth Games in Bahrain, and Teqball Mumbai&apos;s Atharva Sakpal wore India&apos;s colours and finished 9th in Men&apos;s Singles, with club founder Vinit Jain serving as Team India Coach.</p>
        <p style={{ marginTop: 16 }}><TextLink href="/asian-youth-games">Read the story</TextLink></p>
      </div>

      <div className="section">
        <h2>More Than a Sport</h2>
        <p className="lede">Teqball sharpens the first touch, control and decision-making that footballers rely on, which is why Teqball Mumbai&apos;s ecosystem crosses over with professional football, through partners including Mumbai City FC and All Stars FC.</p>
        <p style={{ marginTop: 14 }}><TextLink href="/more-than-a-sport">See the connection</TextLink></p>
      </div>

      <div className="section">
        <h2>Mumbai Teq League</h2>
        <p className="lede">Now in its 7th season, the Mumbai Teq League has brought 300+ athletes through its ranks. Season 7 has just concluded with 48 players competing.</p>
        <p style={{ marginTop: 14 }}><TextLink href="/league">Explore the league</TextLink></p>
      </div>

      <div className="section">
        <h2>Train With Us</h2>
        <div className="filterbar" style={{ marginTop: 0 }}>
          {["Elite Athlete", "Development", "Beginner & Community", "Corporate & Group", "School & College"].map((p) => (
            <Link href="/train" className="pill" key={p}>{p}</Link>
          ))}
        </div>
        <p style={{ marginTop: 16 }}><TextLink href="/train">Find your programme</TextLink></p>
      </div>

      <div className="section">
        <div className="partner-strip">Built with support from <b>Mumbai City FC</b> · <b>All Stars FC</b> · <b>Royal Sports</b> (Kit Partner) · <b>Max Protein</b> (Protein Partner)</div>
        <p style={{ marginTop: 14 }}><TextLink href="/sponsors">See all partners</TextLink></p>
      </div>

      <div className="section">
        <h2>Stories from the Movement</h2>
        <div className="story-grid">
          {STORIES.map((s) => (
            <div className="story-card" key={s.title}><div className="story-cat">{s.cat}</div><h3>{s.title}</h3><p>Sample story teaser. Replace with real editorial content.</p></div>
          ))}
        </div>
        <p style={{ marginTop: 18 }}><TextLink href="/stories">Read more stories</TextLink></p>
      </div>

      <div className="closing-band">
        <h2>Build the future of Indian teqball with us</h2>
        <div className="cta-row"><Link className="btn btn-primary" href="/join">Join the Movement</Link></div>
      </div>
    </>
  );
}
