import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Reveal } from "@/components/reveal";
import { processPhases } from "@/lib/approach";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How Varexa delivers software: a seven-phase process from discovery to ongoing support, built on understanding your process before writing code.",
  alternates: { canonical: "/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="glow animate-pulse-glow absolute inset-x-0 top-0 h-full" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Our approach"
              title="Understand the process. Then design the system."
              description="Every Varexa deployment follows the same discipline, from a single workplace module to a full enterprise platform."
              align="center"
              light
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mb-16 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 rounded-2xl border border-border bg-surface px-6 py-6 text-sm font-semibold">
            {siteConfig.methodology.map((step, i) => (
              <span key={step} className="flex items-center gap-4">
                <span>{step}</span>
                {i < siteConfig.methodology.length - 1 && (
                  <span className="text-brand-400">→</span>
                )}
              </span>
            ))}
          </div>

          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 hidden w-px bg-border sm:block" />
            <div className="space-y-10">
              {processPhases.map((phase, i) => (
                <Reveal key={phase.step} delay={i * 70} className="relative flex gap-6 sm:pl-0">
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-sm font-mono font-semibold text-brand-600 transition-transform duration-300 hover:scale-110">
                    {phase.step}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted">
                      {phase.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        title="See how this process applies to your systems"
        description="Bring us a workflow that isn't working — we'll walk through exactly how each phase would apply."
      />
    </>
  );
}
