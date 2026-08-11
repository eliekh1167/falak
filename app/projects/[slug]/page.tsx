import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-void pb-16 pt-16 md:pt-20">
        <div className="container-content">
          <FadeIn>
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-widest2 text-paper/50 transition-colors hover:text-copper-light"
            >
              ← All Projects
            </Link>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-line-soft px-3 py-1 font-mono text-[11px] uppercase tracking-widest2 text-paper/60">
                {project.pillar}
              </span>
              <span className="rounded-full border border-copper/50 px-3 py-1 font-mono text-[11px] uppercase tracking-widest2 text-copper-light">
                {project.status}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-paper md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl font-body text-lg text-paper/65">
              {project.tagline}
            </p>
          </FadeIn>
        </div>
      </section>

      <FadeIn>
        <div className="container-content">
          <PlaceholderImage
            label={`${project.title} — hero image`}
            path={project.heroImage}
            aspect="aspect-[21/9]"
            variant="indigo"
          />
        </div>
      </FadeIn>

      {/* Overview + specs */}
      <section className="bg-void py-20 md:py-24">
        <div className="container-content grid grid-cols-1 gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FadeIn>
              <p className="eyebrow-light">Overview</p>
              <p className="mt-4 font-body text-base leading-relaxed text-paper/75">
                {project.overview}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="eyebrow-light mt-12">Objectives</p>
              <ul className="mt-4 space-y-3">
                {project.objectives.map((obj) => (
                  <li
                    key={obj}
                    className="border-l border-copper/60 pl-4 font-body text-sm leading-relaxed text-paper/70"
                  >
                    {obj}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.14}>
            <div className="rounded-sm border border-line-soft bg-white/[0.03] p-7">
              <p className="eyebrow-light">Technical Specs</p>
              <dl className="mt-5 space-y-4">
                {project.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line-soft/60 pb-3"
                  >
                    <dt className="font-body text-xs uppercase tracking-wide text-paper/50">
                      {spec.label}
                    </dt>
                    <dd className="font-mono text-sm text-paper">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-line-soft bg-void py-20 md:py-24">
        <div className="container-content">
          <FadeIn>
            <p className="eyebrow-light">Gallery</p>
          </FadeIn>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {project.gallery.map((g, i) => (
              <FadeIn key={g.src} delay={i * 0.08}>
                <div>
                  <PlaceholderImage label="Gallery image" path={g.src} aspect="aspect-[4/3]" />
                  <p className="mt-3 font-body text-xs text-paper/50">{g.caption}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Status / timeline */}
      <section className="border-t border-line-soft bg-indigo py-20 md:py-24">
        <div className="container-content">
          <FadeIn>
            <p className="eyebrow-light">Status &amp; Timeline</p>
          </FadeIn>
          <div className="mt-8 space-y-0">
            {project.timeline.map((phase, i) => (
              <FadeIn key={phase.phase} delay={i * 0.05}>
                <div className="flex items-start gap-5 border-t border-line-soft/60 py-5 first:border-none">
                  <span
                    className={`mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full ${
                      phase.done ? "bg-copper" : "border border-line bg-transparent"
                    }`}
                  />
                  <div>
                    <p className="font-display text-base font-semibold text-paper">
                      {phase.phase}
                    </p>
                    <p className="mt-1 font-body text-sm text-paper/60">{phase.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-void py-20 text-center">
        <FadeIn>
          <div className="container-content">
            <p className="font-body text-paper/60">Interested in working on this?</p>
            <div className="mt-6">
              <Link href="/join" className="btn-primary">
                Join the {project.pillar} team
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
