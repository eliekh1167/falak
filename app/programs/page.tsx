import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProgramDetails } from "@/components/ProgramDetails";
import { programs } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "FALAK's three program pillars: UAV Engineering, CubeSat & Small Satellites, and the Research Lab.",
};

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-paper py-24 md:py-28">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Programs"
              title="Three pillars, one discipline: build it properly."
              description="Every FALAK member works within one of three program pillars. Each runs its own full development cycle — design, build, test — rather than treating engineering as a side activity."
              variant="light"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {programs.map((program) => (
                
                  key={program.slug}
                  href={`#${program.slug}`}
                  className="group rounded-sm border border-ink/15 bg-white/40 p-5 transition-colors hover:border-copper"
                >
                  <p className="font-mono text-xs uppercase tracking-widest2 text-copper">
                    {program.shortName}
                  </p>
                  <p className="mt-2 font-display text-base font-semibold text-ink transition-colors group-hover:text-copper">
                    {program.name}
                  </p>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {programs.map((program, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={program.slug}
            id={program.slug}
            className={`border-t border-line-soft py-24 md:py-28 ${
              i % 2 === 0 ? "bg-void" : "bg-indigo"
            }`}
          >
            <div className="container-content">
              <FadeIn>
                <div
                  className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <PlaceholderImage
                    label={`${program.name} — hero image`}
                    path={program.heroPath}
                    aspect="aspect-[4/3]"
                    variant="indigo"
                  />

                  <div>
                    <p className="eyebrow-light">
                      Pillar 0{i + 1} — {program.shortName}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
                      {program.name}
                    </h2>
                    <p className="mt-3 font-body text-base text-paper/60">
                      {program.tagline}
                    </p>
                    <p className="mt-6 font-body text-sm leading-relaxed text-paper/70">
                      {program.description}
                    </p>

                    <ProgramDetails program={program} />

                    <p className="mt-8 font-mono text-xs uppercase tracking-widest2 text-paper/45">
                      Status — {program.status}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

      <section className="bg-void py-24 text-center">
        <FadeIn>
          <div className="container-content">
            <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
              Find your pillar.
            </h2>
            <div className="mt-7">
              <Link href="/join" className="btn-primary">
                Join FALAK
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
