import Link from "next/link";
import { CountUp } from "./CountUp";

export function PageHero({ title, sub, tight = true, children }: { title: React.ReactNode; sub?: string; tight?: boolean; children?: React.ReactNode }) {
  return (
    <div className={`page-hero${tight ? " tight" : ""}`}>
      <h1 className="eyebrowless-title">{title}</h1>
      {sub && <p className="page-sub">{sub}</p>}
      {children}
    </div>
  );
}

export function HeroPhoto({ src, caption, short = false }: { src: string; caption: string; short?: boolean }) {
  return (
    <figure className={`hero-photo${short ? " short" : ""}`} style={{ backgroundImage: `url('${src}')` }}>
      <figcaption className="photo-credit">{caption}</figcaption>
    </figure>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="textlink">{children}</Link>;
}

export function VideoPlaceholder() {
  return <div className="video-ph"><div className="tri" /></div>;
}

export function GalleryRow({ n = 5 }: { n?: number }) {
  return (
    <div className="gallery-row">
      {Array.from({ length: n }, (_, i) => <div className="ph" key={i}>Image</div>)}
    </div>
  );
}

export function HeroStats({ stats }: { stats: { n: string; l: string }[] }) {
  return (
    <div className="hero-stats">
      {stats.map((s) => (
        <div className="hero-stat" key={s.l}><div className="n"><CountUp value={s.n} /></div><div className="l">{s.l}</div></div>
      ))}
    </div>
  );
}
