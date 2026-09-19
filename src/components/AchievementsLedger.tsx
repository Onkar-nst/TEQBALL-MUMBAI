"use client";
import { useState } from "react";
import { RECORDS } from "@/data";

const TYPE_LABELS: Record<string, string> = { national: "National", international: "International", ayg: "Asian Youth Games", trial: "Selection Trial" };
const years = [...new Set(RECORDS.map((r) => r.year))].sort((a, b) => b - a);

export default function AchievementsLedger() {
  const [year, setYear] = useState(years[0]);
  const rows = RECORDS.filter((r) => r.year === year);
  return (
    <>
      <div className="yeartabs" id="yeartabs">
        {years.map((y) => (
          <button key={y} type="button" className={y === year ? "active" : ""} onClick={() => setYear(y)}>{y}</button>
        ))}
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Event</th><th>Discipline</th><th>Athlete(s)</th><th>Location</th><th>Date</th><th>Result</th><th>Type</th></tr></thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} data-type={r.type}>
                <td className="event-name">{r.event}</td><td>{r.discipline}</td><td>{r.athlete}</td><td>{r.location}</td><td>{r.date}</td>
                <td>{r.result}</td><td><span className={`badge-type ${r.type}`}>{TYPE_LABELS[r.type] || r.type}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
