import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/Timeline";
import { TeamCard } from "@/components/TeamCard";
import { OrbitArc } from "@/components/OrbitArc";
import { YfpBadge } from "@/components/Logo";

export const metadata: Metadata = {
  title: "About",
  description:
    "FALAK's mission, origin story, and its relationship to Youth for Physics.",
};

const MILESTONES = [
  {
    year: "1960s",
    title: "The Lebanese Rocket Society",
    description:
      "Haigazian College students, led by Manoug Manougian, launch a series of Cedar rockets — Lebanon's first and only sovereign space program.",
  },
  {
    year: "2024",
    title: "Youth for Physics founded",
    description:
      "YFP launches as a MENA-focused physics and engineering outreach community, building the base FALAK would later grow from.",
  },
  {
    year: "2025",
    title: "FALAK established",
    description:
      "YFP's aerospace initiative forms with a clear mandate: UAV engineering, small satellites, and a research bench to support both.",
  },
  {
    year: "Now",
    title: "First builds underway",
    description:
      "The Stingray UAV enters manufacturing and the 1U CubeSat demonstrator moves through subsystem design.",
  },
];

const TEAM = [
  {
    name: "Elie El Khoury",
    role: "President",
    bio: "Leads FALAK's overall direction and its relationship with YFP.",
  },
  {
    name: "Salim Rizkallah",
    role: "Co-President",
    bio: "Co-leads FALAK, with a focus on program structure and technical direction.",
  },
  { name: "", role: "Engineering Lead", placeholder: true },
  { name: "", role: "Research Lead", placeholder: true },
];

export default function AboutPage() {
  return (
    <>
      {/* Mission / origin */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Mission"
              title="Reviving Lebanon's aerospace legacy, one build at a time."
              variant="light"
            />
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <FadeIn>
              <p className="font-body text-base leading-relaxed text-ink/75">
                In the 1960s, a small group of students and faculty at Haigazian
                College — led by Professor Manoug Manougian — designed, built,
                and launched a series of Cedar rockets, putting Lebanon among a
                handful of nations to run a sovereign space program. The
                program ended before it could mature. FALAK exists to pick that
                thread back up.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-body text-base leading-relaxed text-ink/75">
                FALAK (فلك) is the classical Arabic word for a celestial
                sphere — the orbit a body traces around another. It&apos;s a
                deliberate name: we&apos;re a program built around getting
                things into orbit, and around building the discipline,
                structure, and technical depth that takes, one UAV and one
                subsystem at a time.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Relationship to YFP */}
      <section className="border-y border-line-soft bg-void py-20">
        <div className="container-content flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <FadeIn>
            <div>
              <p className="eyebrow-light">Parent Organization</p>
              <h2 className="mt-3 max-w-lg font-display text-2xl font-semibold text-paper md:text-3xl">
                FALAK is Youth for Physics&apos; aerospace and engineering program.
              </h2>
              <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-paper/65">
                Youth for Physics is a MENA-focused physics and engineering
                outreach and research community, founded in 2024. FALAK
                operates under YFP the way a national space agency&apos;s youth
                program relates to its parent agency: independent in its
                day-to-day engineering work, aligned with YFP&apos;s broader
                mission of hands-on STEM education across the region.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <YfpBadge variant="light" />
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-void py-24 md:py-32">
        <OrbitArc className="absolute -left-40 -top-20 h-[500px] w-[500px] text-line-soft" strokeWidth={0.5} />
        <div className="container-content relative">
          <FadeIn>
            <SectionHeading eyebrow="Milestones" title="A short orbit so far" variant="dark" />
          </FadeIn>
          <div className="mt-16">
            <FadeIn>
              <Timeline milestones={MILESTONES} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-void pb-28">
        <div className="container-content">
          <FadeIn>
            <SectionHeading eyebrow="Leadership" title="Who's building FALAK" variant="dark" />
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <FadeIn key={member.role} delay={i * 0.06}>
                <TeamCard member={member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
