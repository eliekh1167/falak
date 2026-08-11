"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/FadeIn";
import { projects, type ProgramPillar } from "@/lib/projects";

const FILTERS: (ProgramPillar | "All")[] = [
  "All",
  "UAV Engineering",
  "CubeSat & Small Satellites",
  "Research Lab",
];

export default function ProjectsPage() {
  const [active, setActive] = useState<(ProgramPillar | "All")>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.pillar === active);

  return (
    <section className="bg-void py-24 md:py-32">
      <div className="container-content">
        <FadeIn>
          <SectionHeading
            eyebrow="Projects"
            title="Everything FALAK is building"
            description="Active and completed work across all three program pillars."
            variant="dark"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-widest2 transition-colors ${
                  active === f
                    ? "border-copper bg-copper text-paper"
                    : "border-line-soft text-paper/60 hover:border-copper/60 hover:text-paper"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        {visible.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {visible.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.06}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <p className="mt-16 font-body text-paper/50">
            No projects in this pillar yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
