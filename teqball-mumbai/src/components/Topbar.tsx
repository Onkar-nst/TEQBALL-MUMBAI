import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-row">
        <Link href="/" className="wordmark-row" style={{ textDecoration: "none" }}>
          <Image className="wordmark-logo" src="/images/crest.png" alt="Teqball Mumbai crest" width={600} height={600} priority />
          <div className="wordmark">TEQBALL <span>MUMBAI</span></div>
        </Link>
        <div className="concept-tag">v2 · built from the club&apos;s master database</div>
      </div>
    </header>
  );
}
