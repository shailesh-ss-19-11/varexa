import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { serviceCategories, services, type ServiceCategory } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Varexa's full range of software solutions — workplace management, enterprise systems (HRMS, ERP, CRM), custom development, mobile apps, cloud, and support.",
  alternates: { canonical: "/services" },
};

const categoryOrder: ServiceCategory[] = ["workplace", "enterprise", "development"];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="glow animate-pulse-glow absolute inset-x-0 top-0 h-full" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Fifteen solutions. One technology partner."
              description="Every service below is modular — deploy one, or connect all of them into a single operating platform for your business."
              align="center"
              light
            />
          </Reveal>
        </Container>
      </section>

      {categoryOrder.map((category, index) => (
        <section
          key={category}
          className={index % 2 === 1 ? "bg-surface py-20 sm:py-24" : "py-20 sm:py-24"}
        >
          <Container>
            <Reveal className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {serviceCategories[category].title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {serviceCategories[category].description}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === category)
                .map((service, i) => (
                  <Reveal key={service.slug} delay={(i % 3) * 80}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110">
                          <Icon name={service.icon} className="h-5 w-5" />
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      </div>
                      <h3 className="mt-4 font-semibold">{service.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {service.summary}
                      </p>
                    </Link>
                  </Reveal>
                ))}
            </div>
          </Container>
        </section>
      ))}

      <CtaSection />
    </>
  );
}
