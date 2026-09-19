import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Sponsors" };
export default function SponsorsPage() {
  return (
    <>
      <PageHero title="Built with the support of those who believe in the journey" />
      <div className="section">
        <div className="tier-label">Kit Partner</div>
        <div className="partner-grid"><div className="partner-card"><h3>Royal Sports</h3><div className="role">Kit Partner</div><p>Description and key initiatives: needs confirmation from Teqball Mumbai before publishing.</p></div></div>
        <div className="tier-label">Performance Partner</div>
        <div className="partner-grid"><div className="partner-card"><h3>Max Protein</h3><div className="role">Protein Partner</div><p>Description and key initiatives: needs confirmation from Teqball Mumbai before publishing.</p></div></div>
      </div>
      <div className="closing-band">
        <h2>Partner with Teqball Mumbai</h2>
        <p style={{ color: "var(--paper-dim)", maxWidth: "60ch", marginTop: 12 }}>Athlete partnerships · Jersey branding · National championships · Mumbai Teq League · Digital content · Event branding · Grassroots programmes.</p>
        <div className="cta-row"><Link className="btn btn-primary" href="/join">Build the future of Indian teqball with us</Link></div>
      </div>
    </>
  );
}
