import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { Pathway } from "@/components/Pathway";
export const metadata: Metadata = { title: "Road to the World" };

export type Stage = { name: string; tagline: string; intro: string[]; focus: string[]; goal: string };

const STAGES: Stage[] = [
  {
    name: "Discover",
    tagline: "Find the Athlete Within",
    intro: [
      "Every journey begins with an introduction to the sport.",
      "Through grassroots programs, workshops, school and college initiatives, community sessions and open training opportunities, we introduce players to Teqball in an engaging and accessible environment.",
    ],
    focus: [
      "Introduction to Teqball and its fundamentals",
      "Basic ball control and coordination",
      "Movement, balance and agility",
      "Understanding the rules and format",
      "Identifying natural talent and sporting potential",
    ],
    goal: "Create a strong first connection with Teqball and identify players with the potential to progress.",
  },
  {
    name: "Develop",
    tagline: "Build the Foundation",
    intro: [
      "Talent needs the right environment to grow.",
      "Players who want to progress enter a structured training pathway focused on technical ability, movement, fitness, tactical understanding and consistency.",
    ],
    focus: [
      "Structured coaching programs",
      "Technical skill development",
      "Footwork, movement and body control",
      "Match awareness and tactical fundamentals",
      "Physical conditioning and athletic development",
      "Individual performance feedback",
    ],
    goal: "Transform raw potential into a technically sound and disciplined Teqball player.",
  },
  {
    name: "Compete",
    tagline: "Turn Training Into Performance",
    intro: [
      "Training becomes meaningful when athletes learn to perform under pressure.",
      "Players are progressively exposed to competitive environments, giving them the experience required to handle match situations, different opponents and tournament pressure.",
    ],
    focus: [
      "Club and local competitions",
      "Mumbai-level tournaments",
      "State and national competitions",
      "Match preparation and strategy",
      "Competitive mindset",
      "Performance analysis and learning from competition",
    ],
    goal: "Develop athletes who can consistently translate training into competitive performance.",
  },
  {
    name: "Perform",
    tagline: "Compete at the Highest National Level",
    intro: [
      "At this stage, the focus shifts from participation to performance.",
      "Athletes receive more specialised preparation designed around their individual strengths, weaknesses and competitive goals.",
    ],
    focus: [
      "High-performance training",
      "Advanced technical and tactical development",
      "Sport-specific fitness",
      "Competition planning",
      "Performance analysis",
      "Mental preparation and match management",
      "Preparation for elite national competitions",
    ],
    goal: "Develop athletes capable of competing consistently at the highest levels of Indian Teqball.",
  },
  {
    name: "Represent",
    tagline: "Take Mumbai to the World",
    intro: [
      "The ultimate competitive pathway is representing India on the international stage.",
      "Athletes progressing through the system are prepared for the demands of international competition, with exposure to higher levels of play and the opportunity to compete against athletes from around the world.",
    ],
    focus: [
      "International tournament preparation",
      "Representing India in international competitions",
      "International match experience",
      "Advanced tactical preparation",
      "Travel and competition readiness",
      "Maintaining elite-level performance",
    ],
    goal: "Create athletes capable of carrying the Teqball Mumbai journey onto the international stage and representing India with pride.",
  },
  {
    name: "Inspire",
    tagline: "Become the Next Generation’s Role Model",
    intro: [
      "The journey doesn’t end with competition.",
      "Athletes who reach the highest levels become an important part of the ecosystem, inspiring younger players, sharing their experience and helping create the next generation of Teqball athletes.",
    ],
    focus: [
      "Mentoring emerging athletes",
      "Giving back to the Teqball community",
      "Developing leadership qualities",
      "Supporting grassroots growth",
      "Inspiring young players",
      "Creating future coaches, leaders and champions",
    ],
    goal: "Build a self-sustaining sporting ecosystem where today’s athletes inspire tomorrow’s champions.",
  },
];

export default function RoadPage() {
  return (
    <>
      <PageHero title="The Road to the World" sub="Athlete Development Roadmap: from first touch to representing India.">
        <p className="page-sub">Teqball Mumbai isn&apos;t a place you drop in to play once. It&apos;s a pathway.<br />Our development model is designed to take players through every stage of their Teqball journey, from discovering the sport and building fundamentals to competing at the highest levels and inspiring the next generation.</p>
      </PageHero>
      <Pathway stages={STAGES} />
    </>
  );
}
