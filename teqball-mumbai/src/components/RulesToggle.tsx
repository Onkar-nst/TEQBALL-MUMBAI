"use client";
import { useState } from "react";
export default function RulesToggle() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="cta-row"><button type="button" className="btn btn-outline" onClick={() => setOpen(!open)}>{open ? "Hide Official Rules" : "Explore Official Rules"}</button></div>
      <div hidden={!open} style={{ marginTop: 24 }}>
        <ul className="deflist">
          <li>Played with a standard football: size 5 is official.</li>
          <li>Singles (1v1) or doubles (2v2).</li>
          <li>Matches are best-of-three sets, each played to 12 points.</li>
          <li>Each serve gets two attempts to land legally; serve rotates every four points.</li>
          <li>No player may touch the ball twice in a row with the same body part, or return it twice in a row with the same body part.</li>
          <li>Each side gets up to three touches to send the ball back, with no hands or arms.</li>
          <li>In doubles, both partners must touch the ball before it crosses back over.</li>
          <li>Touching the table, or reaching into the opponent&apos;s side, isn&apos;t allowed.</li>
          <li>A ball that catches the table&apos;s edge is replayed, not scored.</li>
        </ul>
      </div>
    </>
  );
}
