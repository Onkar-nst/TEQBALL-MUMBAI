import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Join the Movement" };
const EMAIL = "teqballclubofmumbai@gmail.com";
const CARDS = [
  ["I want to play", "Join a beginner or community session.", "Start playing", "Community session enquiry"],
  ["I want to train", "Apply to the development or elite programme.", "Apply to train", "Training programme application"],
  ["I want to represent", "Pursue the pathway toward national selection.", "Register interest", "National pathway interest"],
  ["I want to partner", "Explore sponsorship and brand collaboration.", "Become a partner", "Partnership enquiry"],
  ["I want to host an event", "Bring Teqball Mumbai to your venue or organisation.", "Host an event", "Event hosting enquiry"],
  ["I am media", "Press, interviews and coverage enquiries.", "Media enquiry", "Media enquiry"],
];
export default function JoinPage() {
  return (
    <>
      <PageHero title="Join the Movement" sub="However you want in, there's a path for you." />
      <div className="section">
        <div className="join-grid">
          {CARDS.map(([h, p, cta, subject]) => (
            <div className="join-card" key={h}><h3>{h}</h3><p>{p}</p><a className="btn btn-primary" href={`mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`}>{cta}</a></div>
          ))}
        </div>
      </div>
    </>
  );
}
