import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { differentiators } from "@/lib/approach";

export const metadata: Metadata = {
  title: "Why Varexa",
  description:
    "Modular architecture, integration-ready systems, and one accountable technology partner — here's why organizations choose Varexa over point solutions.",
  alternates: { canonical: "/why-varexa" },
};

const comparison = [
  {
    label: "Vendor relationship",
    point: "One accountable partner",
    generic: "Multiple vendors, multiple contracts",
  },
  {
    label: "Architecture",
    point: "Modular — add what you need, when you need it",
    generic: "Fixed feature bundles",
  },
  {
    label: "Integration",
    point: "Built to connect with your existing systems",
    generic: "Requires separate integration projects",
  },
  {
    label: "Onboarding",
    point: "Process mapped before implementation",
    generic: "Generic setup, process adapts to software",
  },
  {
    label: "Support",
    point: "24/7 monitoring included from day one",
    generic: "Support tiers sold separately",
  },
];

export default function WhyVarexaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="glow animate-pulse-glow absolute inset-x-0 top-0 h-full" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Why Varexa"
              title="A technology partner built around your workflow, not a license SKU"
              description="Here's what changes when workplace and enterprise systems come from one modular platform instead of five disconnected vendors."
              align="center"
              light
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The difference"
              title="Varexa vs. a patchwork of point solutions"
            />
          </Reveal>
          <Reveal delay={100} className="mt-12 overflow-hidden rounded-2xl border border-border bg-background">
            <div className="grid grid-cols-3 border-b border-border bg-surface px-6 py-4 text-sm font-semibold">
              <span>Area</span>
              <span className="text-brand-600">With Varexa</span>
              <span className="text-muted">Typical point solutions</span>
            </div>
            {comparison.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-3 items-start gap-2 border-b border-border px-6 py-5 text-sm transition-colors duration-200 last:border-b-0 hover:bg-surface"
              >
                <span className="font-medium">{row.label}</span>
                <span className="text-foreground">{row.point}</span>
                <span className="text-muted">{row.generic}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
