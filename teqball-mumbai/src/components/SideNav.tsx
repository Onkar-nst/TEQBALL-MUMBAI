"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_GROUPS } from "./nav";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <aside className="sidenav">
      {NAV_GROUPS.map((g) => (
        <div className="navgroup" key={g.label}>
          <div className="navgroup-label">{g.label}</div>
          {g.links.map((l) => (
            <Link key={l.href} href={l.href} className={`navlink${pathname === l.href ? " active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}
