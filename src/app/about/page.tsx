import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";
import { differentiators } from "@/lib/approach";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Varexa Infotech is a single technology partner delivering workplace management, enterprise systems, and custom software that adapts to how your business already runs.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="glow animate-pulse-glow absolute inset-x-0 top-0 h-full" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="About Varexa"
              title="One technology partner, not another vendor to manage"
              description={siteConfig.description}
              align="center"
              light
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight">
                We start with your process, not our product
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Most software forces a business to adapt to its structure.
                Varexa works the other way: we study how your teams actually
                operate — where time is lost, where data breaks between
                systems, where manual work creeps back in — and design
                software around that reality.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                That&apos;s why our platform is modular. A facilities team might
                start with visitor management and parking. An HR team might
                start with attendance and payroll. Both run on the same
                underlying platform, so nothing has to be rebuilt when the
                next department comes on board.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="text-2xl font-semibold tracking-tight">
                How we work
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Every engagement follows the same discipline, whether it&apos;s a
                single workplace module or a full enterprise rollout.
              </p>
              <ol className="mt-6 space-y-4">
                {siteConfig.methodology.map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-semibold text-brand-600">
                      {i + 1}
                    </span>
                    <span className="pt-1 font-medium">{step}</span>
                  </li>
                ))}
              </ol>
              <a
                href="/approach"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                See the full seven-phase process{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we stand for"
              title="Principles that shape every deployment"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <CtaSection
        title="Curious how Varexa would fit your organization?"
        description="Tell us about the systems you're running today. We'll map out where Varexa would connect, replace, or extend them."
      />
    </>
  );
}
