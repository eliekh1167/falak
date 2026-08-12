import Link from "next/link";
import { OrbitField, OrbitArc } from "@/components/OrbitArc";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { ProjectCard } from "@/components/ProjectCard";
import { YfpBadge } from "@/components/Logo";
import { projects } from "@/lib/projects";

const HIGHLIGHTS = [
  { value: "8+", label: "Projects & Events" },
  { value: "26000+", label: "Community" },
  { value: "27", label: "Members" },
  { value: "2026", label: "Founded under Youth for Physics" },
];

const UPDATES = [
  {
    date: "Ongoing",
    title: "Nanomaterials project research phase is coming to an end",
    excerpt:
      "The research team at YFP is almost done with researching on the 93 nanomaterials and building the master dataset.",
  },
  {
    date: "Ongoing",
    title: "Fixed-wing UAV planning complete",
    excerpt:
      "Architecture, CFD, FEA, team, components, wiring, and tool selections are completed.",
  },
  {
    date: "Recruiting",
    title: "FALAK is opening new roles",
    excerpt:
      "Engineering and research tracks are open now,  see the Join page to apply.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-void pb-28 pt-20 md:pt-28">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-void/60" />
        <OrbitField className="inset-0" />
        <div className="container-content relative">
          <FadeIn>
            <div className="mb-8">
              <YfpBadge variant="light" />
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.08] text-paper md:text-6xl lg:text-7xl">
              Advancing Frontiers in Aerospace
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-paper/70">
              FALAK is a space and engineering program building 
              UAVs, micro-satellites, micro turbojets,
              ground communications and the research bench behind them, from design through testing.
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                Our Projects
              </Link>
              <Link href="/join" className="btn-secondary">
                Join FALAK
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-y border-line-soft bg-void">
        <div className="container-content grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <FadeIn key={h.label} delay={i * 0.06}>
              <div>
                <p className="font-display text-3xl font-semibold text-copper-light md:text-4xl">
                  {h.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-paper/55">
                  {h.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Featured projects teaser */}
      <section className="bg-void py-24 md:py-32">
        <div className="container-content">
          <FadeIn>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Featured Work"
                title="What FALAK is building right now"
                variant="dark"
              />
              <Link
                href="/projects"
                className="font-mono text-xs uppercase tracking-widest2 text-copper-light transition-colors hover:text-paper"
              >
                All projects →
              </Link>
            </div>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.08}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Updates teaser */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Mission Log"
              title="Latest updates"
              variant="light"
            />
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {UPDATES.map((u, i) => (
              <FadeIn key={u.title} delay={i * 0.08}>
                <div className="border-t border-ink/15 pt-5">
                  <p className="font-mono text-xs uppercase tracking-widest2 text-copper">
                    {u.date}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                    {u.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/65">
                    {u.excerpt}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA band */}
      <section className="relative overflow-hidden bg-indigo py-24 md:py-28">
        <OrbitArc className="absolute -right-32 -top-32 h-[500px] w-[500px] text-line-soft" strokeWidth={0.5} />
        <div className="container-content relative text-center">
          <FadeIn>
            <p className="eyebrow-light">Get Involved</p>
            <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold text-paper md:text-4xl">
                Master the skies and orbit with us.
            </h2>
            <p className="mx-auto mt-4 max-w-md font-body text-paper/65">
              Engineering, research, and operations roles are open across all
              three program pillars.
            </p>
            <div className="mt-8">
              <Link href="/join" className="btn-primary">
                Join FALAK
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
