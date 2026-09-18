import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Train With Us" };
const PROGRAMS = [
  { name: "Elite Athlete Programme", who: "Competitive, selection-track athletes", freq: "Daily, structured", sel: "By trial / invitation", cta: "Apply" },
  { name: "Development Programme", who: "Athletes building toward competition", freq: "3–4 sessions / week", sel: "Open assessment", cta: "Apply" },
  { name: "Beginner & Community", who: "New players, all ages", freq: "Weekly drop-in", sel: "Open", cta: "Join a session" },
  { name: "Corporate & Group", who: "Companies, teams, groups", freq: "Booked sessions", sel: "Open", cta: "Enquire" },
  { name: "School & College", who: "Students, institutions", freq: "Term-based", sel: "Institutional partnership", cta: "Enquire" },
];
export default function TrainPage() {
  return (
    <>
      <PageHero title="Train With Us" sub="Five programmes. One ecosystem. Find where you fit." />
      <div className="section">
        <div className="program-grid">
          {PROGRAMS.map((p) => (
            <div className="program-card" key={p.name}>
              <h3>{p.name}</h3>
              <dl><dt>Who it&apos;s for</dt><dd>{p.who}</dd><dt>Frequency</dt><dd>{p.freq}</dd><dt>Selection</dt><dd>{p.sel}</dd></dl>
              <Link className="btn btn-outline" href="/join">{p.cta}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
