import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { OrbitArc } from "@/components/OrbitArc";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with FALAK — based in Beirut, Lebanon.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-void py-24 md:py-32">
      <OrbitArc className="absolute -right-40 top-0 h-[520px] w-[520px] text-line-soft" strokeWidth={0.5} />
      <div className="container-content relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Questions about the program, partnerships, or press — reach out directly."
            variant="dark"
          />
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-5">
          <div className="space-y-10 lg:col-span-2">
            <FadeIn delay={0.06}>
              <div>
                <p className="eyebrow-light">Location</p>
                <p className="mt-2 font-body text-paper/75">Beirut, Lebanon</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div>
                <p className="eyebrow-light">Email</p>
                <a
                  href="mailto:falak@youthforphysics.org"
                  className="mt-2 block font-body text-paper/75 transition-colors hover:text-copper-light"
                >
                  falak@youthforphysics.org
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div>
                <p className="eyebrow-light">Social</p>
                <a
                  href="https://www.instagram.com/youthforphysics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-body text-paper/75 transition-colors hover:text-copper-light"
                >
                  @youthforphysics
                </a>
              </div>
            </FadeIn>

            {/* Stylized location placeholder, per brief - no live map needed */}
            <FadeIn delay={0.24}>
              <div className="relative flex aspect-square w-full max-w-xs items-center justify-center overflow-hidden rounded-sm border border-line-soft bg-indigo">
                <OrbitArc className="absolute h-[140%] w-[140%] text-line-soft" strokeWidth={0.5} />
                <div className="relative text-center">
                  <p className="font-display text-2xl font-semibold text-paper">33.89°N</p>
                  <p className="font-display text-2xl font-semibold text-paper">35.50°E</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-paper/45">
                    Beirut, Lebanon
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn delay={0.1}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
