import Link from "next/link";
import { PageHero } from "@/components/ui";
export default function NotFound() {
  return (
    <>
      <PageHero title="Page not found" sub="That page doesn't exist yet." />
      <div className="section"><Link className="btn btn-primary" href="/">Back to home</Link></div>
    </>
  );
}
