import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Events & Gallery" };
export default function EventsPage() {
  return (
    <>
      <PageHero title="Events & Community" sub="Where to find Teqball Mumbai next, and where we've already been." />
      <div className="section">
        <div className="section-label">Upcoming</div>
        <div className="event-list">
          <div className="event-card"><div className="ev-date">Sample<br />Date</div><div className="ev-info"><h3>Sample community session</h3><p>Location · Open registration</p></div><Link className="btn btn-outline" href="/join">Register</Link></div>
          <div className="event-card"><div className="ev-date">Sample<br />Date</div><div className="ev-info"><h3>Sample club trial day</h3><p>Location · Selection event</p></div><Link className="btn btn-outline" href="/join">Register</Link></div>
        </div>
        <div className="section-label" style={{ marginTop: 32 }}>Past</div>
        <div className="event-list">
          <div className="event-card"><div className="ev-date">Sample<br />Date</div><div className="ev-info"><h3>Mumbai Teq League: Season 7 Final</h3><p>Mumbai · Results: needs confirmation</p></div></div>
        </div>
        <div className="section-label" style={{ marginTop: 32 }}>Gallery</div>
        <div className="gallery-grid">{Array.from({ length: 8 }, (_, i) => <div className="ph" key={i}>Image</div>)}</div>
      </div>
    </>
  );
}
