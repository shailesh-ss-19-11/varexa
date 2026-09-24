import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { PlatformDiagram } from "@/components/platform-diagram";
import { serviceCategories, services, type ServiceCategory } from "@/lib/services";
import { industries } from "@/lib/industries";
import { differentiators, processPhases } from "@/lib/approach";
import { siteConfig } from "@/lib/site";

const categoryOrder: ServiceCategory[] = ["workplace", "enterprise", "development"];

const heroStats = [
  { value: "15+", label: "Software modules, one platform" },
  { value: "8", label: "Industries served" },
  { value: "24/7", label: "Support on every deployment" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950">
        <div className="bg-grid-dark absolute inset-0 opacity-70" />
        <div className="glow animate-pulse-glow absolute inset-x-0 top-0 h-[600px]" />
        <Container className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-hero-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
              {siteConfig.legalName}
            </span>
            <h1
              className="animate-hero-fade-up mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl"
              style={{ animationDelay: "100ms" }}
            >
              Technology that{" "}
              <span className="text-gradient">simplifies business</span>
            </h1>
            <p
              className="animate-hero-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
              style={{ animationDelay: "200ms" }}
            >
              One technology partner for workplace management, enterprise
              systems, and custom software — built around how your
              organization already operates, not the other way around.
            </p>
            <div
              className="animate-hero-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <Button href="/contact" variant="primary" className="px-7 py-3.5">
                Request a demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="outline-light" className="px-7 py-3.5">
                Explore services
              </Button>
            </div>
          </div>

          <div
            className="animate-hero-fade-up mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3"
            style={{ animationDelay: "400ms" }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <CountUp value={stat.value} className="text-3xl font-semibold text-white" />
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>

          <Reveal className="mt-16 flex justify-center sm:mt-20">
            <PlatformDiagram />
          </Reveal>
        </Container>
      </section>

      {/* Methodology strip */}
      <section className="border-b border-border bg-surface py-6">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-medium text-muted">
            {siteConfig.methodology.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="text-foreground">{step}</span>
                {i < siteConfig.methodology.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-brand-400" />
                )}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Services overview */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Every system your workplace and business need to run on"
              description="Fifteen modular solutions across three categories — deployed individually or as one connected platform."
            />
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {categoryOrder.map((category, categoryIndex) => (
              <Reveal key={category} delay={categoryIndex * 100}>
                <div className="h-full rounded-2xl border border-border bg-background p-7 transition-shadow duration-300 hover:shadow-lg">
                  <h3 className="text-lg font-semibold">
                    {serviceCategories[category].title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {serviceCategories[category].description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {services
                      .filter((s) => s.category === category)
                      .slice(0, 4)
                      .map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="group flex items-center justify-between gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:shadow-sm"
                          >
                            <span className="flex items-center gap-2.5">
                              <Icon name={service.icon} className="h-4 w-4 text-brand-500" />
                              {service.name}
                            </span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/services" variant="ghost">
              View all services <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Varexa */}
      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Varexa"
              title="Software that adapts to your business, not the other way around"
              description="Six reasons organizations choose Varexa as their single technology partner instead of stitching together point solutions."
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
          <div className="mt-10 text-center">
            <Button href="/why-varexa" variant="ghost">
              More on why teams choose us <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Who we work with"
              title="Built for the industries that run on complex operations"
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 4) * 80}>
                <Link
                  href="/industries"
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-background px-4 py-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-white transition-transform duration-200 group-hover:scale-110">
                    <Icon name={industry.icon} className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{industry.name}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-ink-950 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A seven-step process built on understanding, not assumptions"
              light
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {processPhases.map((phase, i) => (
              <Reveal key={phase.step} delay={(i % 4) * 80} className="bg-ink-950">
                <div className="h-full bg-ink-950 p-6 transition-colors duration-300 hover:bg-white/5">
                  <span className="text-sm font-mono text-accent-400">
                    {phase.step}
                  </span>
                  <h3 className="mt-2 font-semibold text-white">{phase.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {phase.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/approach" variant="outline-light">
              See our full approach <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
