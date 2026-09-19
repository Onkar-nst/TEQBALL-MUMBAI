import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-row">
        <Link href="/" className="wordmark-row" style={{ textDecoration: "none" }}>
          <Image className="wordmark-logo" src="/images/crest.png" alt="Teqball Mumbai crest" width={600} height={600} priority />
          <div className="wordmark">TEQBALL <span>MUMBAI</span></div>
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
