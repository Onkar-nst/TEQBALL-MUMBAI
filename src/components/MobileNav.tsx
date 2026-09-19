"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_GROUPS } from "./nav";

// Hamburger + dropdown menu, shown only on small screens (see .mobile-nav CSS).
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className={`hamburger${open ? " open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      {open && <div className="mobile-menu-backdrop" onClick={() => setOpen(false)} />}
      <nav className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        {NAV_GROUPS.map((g) => (
          <div className="mobile-group" key={g.label}>
            <div className="navgroup-label">{g.label}</div>
            {g.links.map((l) => (
              <Link key={l.href} href={l.href} className={`navlink${pathname === l.href ? " active" : ""}`}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}
