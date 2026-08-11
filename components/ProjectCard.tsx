import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-sm border border-line-soft bg-white/[0.03] transition-colors duration-300 hover:border-copper/60"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-indigo">
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-paper/30">
          Image — {project.title}
        </span>
        <div className="absolute left-4 top-4 rounded-full border border-paper/25 bg-void/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-paper/80 backdrop-blur-sm">
          {project.status}
        </div>
      </div>
      <div className="p-6">
        <p className="eyebrow-light">{project.pillar}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-paper transition-colors group-hover:text-copper-light">
          {project.title}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-paper/60">
          {project.tagline}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest2 text-copper-light">
          View project
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
