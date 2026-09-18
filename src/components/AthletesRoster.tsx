"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ATHLETES, STAFF, type Person } from "@/data";

const FILTERS: [string, string][] = [
  ["all", "All"], ["mens", "Men's"], ["womens", "Women's"], ["youth", "Youth"], ["senior", "Senior"],
  ["national-champions", "National Champions"], ["international", "International"], ["alumni", "Alumni"],
];
const ALL = [...ATHLETES, ...STAFF];

function Card({ a, selected, onSelect }: { a: Person; selected: boolean; onSelect: (id: string) => void }) {
  return (
    <button type="button" className={`card${a.real ? " real" : ""}${selected ? " selected" : ""}`} onClick={() => onSelect(a.id)}>
      {a.sample ? <span className="badge">Sample</span> : a.note ? <span className="badge">Roster TBC</span> : null}
      <div className="plate">{a.initials}</div>
      <h3>{a.name}</h3>
      <div className="cat">{a.tag}</div>
      <div className="headline">{a.headline}</div>
    </button>
  );
}

export default function AthletesRoster() {
  const params = useSearchParams();
  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(params.get("id") ?? "atharvasakpal");

  useEffect(() => {
    const id = params.get("id");
    if (id && ALL.some((a) => a.id === id)) setSelectedId(id);
  }, [params]);

  const list = useMemo(() => (filter === "all" ? ATHLETES : ATHLETES.filter((a) => a.categories.includes(filter))), [filter]);
  const a = ALL.find((x) => x.id === selectedId);

  const select = (id: string) => {
    setSelectedId(id);
    document.getElementById("profile")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="filterbar" id="filterbar">
        {FILTERS.map(([k, label]) => (
          <button key={k} type="button" className={`pill${filter === k ? " active" : ""}`} onClick={() => setFilter(k)}>{label}</button>
        ))}
      </div>
      <div className="roster" id="roster">
        {list.map((x) => <Card key={x.id} a={x} selected={x.id === selectedId} onSelect={select} />)}
      </div>
      <div className="staffnote">Coaching staff</div>
      <div className="roster" id="staffroster">
        {STAFF.map((x) => <Card key={x.id} a={x} selected={x.id === selectedId} onSelect={select} />)}
      </div>
      {a && (
        <div className="profile" id="profile">
          <div>
            <div className="plate-lg">{a.initials}</div>
            <dl className="vitals">
              <dt>Club</dt><dd>{a.club || "-"}</dd>
              <dt>Category</dt><dd>{a.tag}</dd>
              {a.coach && <><dt>Head Coach</dt><dd>{a.coach}</dd></>}
            </dl>
          </div>
          <div>
            <h2 className="profile-name">{a.name}</h2>
            <div className="profile-tag">{a.headline}</div>
            <p className={`profile-bio${a.sampleBio ? " sample" : ""}`}>{a.bio}</p>
            {a.note && <p style={{ fontSize: 12, color: "var(--paper-dim)", borderTop: "1px dashed var(--line)", paddingTop: 12, marginTop: 4 }}>{a.note}</p>}
            <ul className="ach-list">{a.achievements.map((x) => <li key={x}>{x}</li>)}</ul>
            <div className="strip-label">Photo gallery (placeholder)</div>
            <div className="gallery-row">{Array.from({ length: 5 }, (_, i) => <div className="ph" key={i}>Image</div>)}</div>
            <div className="strip-label">Video highlight (placeholder)</div>
            <div className="video-ph"><div className="tri" /></div>
            <div className="social-row"><a href="#" onClick={(e) => e.preventDefault()}>Instagram</a><a href="#" onClick={(e) => e.preventDefault()}>YouTube</a></div>
          </div>
        </div>
      )}
    </>
  );
}
