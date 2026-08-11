import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { JoinForm } from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Engineering, research, and operations roles are open across all three FALAK program pillars.",
};

const TRACKS = [
  {
    name: "Engineering",
    description:
      "Airframe and satellite structure design, manufacturing, avionics, and systems integration across the UAV and CubeSat pillars.",
    fit: "For students who want to design and build hardware, from CAD through the physical part in your hands.",
  },
  {
    name: "Research",
    description:
      "Materials testing, atmospheric sensing payloads, and the bench work that underpins every build FALAK ships.",
    fit: "For students who want depth over breadth, and enjoy the rigor of a properly run test campaign.",
  },
  {
    name: "Operations & Outreach",
    description:
      "Program logistics, partnerships, documentation, and communicating FALAK's work to YFP's wider community.",
    fit: "For students who want to keep an engineering program actually running, not just building.",
  },
];

export default function JoinPage() {
  return (
    <>
      <section className="bg-void py-24 md:py-28">
        <div className="container-content">
          <FadeIn>
            <SectionHeading
              eyebrow="Join FALAK"
              title="Build something that leaves the ground."
              description="FALAK is looking for engineers, researchers, and operators willing to take a project from a whiteboard sketch to a working system. No prior aerospace experience required — just the willingness to learn the discipline it takes."
              variant="dark"
            />
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-line-soft bg-void py-20 md:py-24">
        <div className="container-content">
          <FadeIn>
            <p className="eyebrow-light">Tracks</p>
          </FadeIn>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TRACKS.map((track, i) => (
              <FadeIn key={track.name} delay={i * 0.08}>
                <Card variant="dark">
                  <p className="font-display text-lg font-semibold text-paper">
                    {track.name}
                  </p>
                  <p className="mt-3 font-body text-sm leading-relaxed text-paper/65">
                    {track.description}
                  </p>
                  <p className="mt-4 border-t border-line-soft pt-4 font-body text-xs italic leading-relaxed text-paper/45">
                    {track.fit}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line-soft bg-paper py-20 md:py-28">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <FadeIn>
                <SectionHeading
                  eyebrow="Application"
                  title="Tell us where you fit."
                  description="A few lines is enough to start. We'll follow up to schedule a short conversation."
                  variant="light"
                />
              </FadeIn>
            </div>
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <JoinForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
