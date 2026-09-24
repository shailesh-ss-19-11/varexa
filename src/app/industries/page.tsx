import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { industries } from "@/lib/industries";
import { getServiceBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Varexa Infotech serves corporate enterprises, IT & technology, manufacturing, automobile, education, healthcare, real estate, and business parks.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="glow animate-pulse-glow absolute inset-x-0 top-0 h-full" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="Built for organizations where operations are genuinely complex"
              description="From corporate campuses to dealer networks, Varexa's modular platform adapts to the operating patterns of each industry we serve."
              align="center"
              light
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950 text-white transition-transform duration-300 hover:scale-110">
                    <Icon name={industry.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold">{industry.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {industry.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {industry.relevantServices.map((slug) => {
                      const service = getServiceBySlug(slug);
                      if (!service) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/services/${slug}`}
                          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-brand-300 hover:text-brand-600"
                        >
                          {service.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Don't see your industry?"
        description="Varexa's platform is modular by design — if your operations involve people, assets, and locations, chances are we can help."
      />
    </>
  );
}
