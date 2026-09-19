"use client";
import { useState } from "react";
import type { Stage } from "@/app/road-to-the-world/page";

export function Pathway({ stages }: { stages: Stage[] }) {
  const [active, setActive] = useState(0);
  const s = stages[active];
  const num = (i: number) => String(i + 1).padStart(2, "0");
  return (
    <>
      <div className="section">
        <div className="section-label">The Teqball Mumbai pathway</div>
        <div className="pathway" role="tablist">
          {stages.map((st, i) => (
            <button type="button" role="tab" aria-selected={i === active} className={`path-step${i === active ? " active" : ""}`} key={st.name} onClick={() => setActive(i)}>
              <div className="pnum">{num(i)}</div><h3>{st.name}</h3><p>{st.tagline}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="section stage" key={s.name}>
        <div className="section-label">{num(active)} &mdash; {s.name}</div>
        <h2>{s.tagline}</h2>
        {s.intro.map((p, k) => <p className={k === 0 ? "lede" : "stage-body"} key={k}>{p}</p>)}
        <div className="stage-grid">
          <div>
            <div className="section-label">Focus</div>
            <ul className="deflist compact">{s.focus.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div className="stage-goal">
            <div className="section-label">Goal</div>
            <p>{s.goal}</p>
          </div>
        </div>
        <div className="stage-nav">
          <button type="button" className="stage-btn" disabled={active === 0} onClick={() => setActive(active - 1)}>&larr; {active > 0 ? stages[active - 1].name : ""}</button>
          <button type="button" className="stage-btn" disabled={active === stages.length - 1} onClick={() => setActive(active + 1)}>{active < stages.length - 1 ? stages[active + 1].name : ""} &rarr;</button>
        </div>
      </div>

      <div className="section">
        <div className="section-label">The Teqball Mumbai pathway</div>
        <div className="pathway-line">
          {stages.map((st, i) => <span key={st.name}><button type="button" className={i === active ? "active" : ""} onClick={() => setActive(i)}>{st.name.toUpperCase()}</button>{i < stages.length - 1 && <em>&rarr;</em>}</span>)}
        </div>
      </div>
    </>
  );
}
