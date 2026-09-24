import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { getServiceBySlug, getServicesByCategory, services, serviceCategories } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getServicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },
    areaServed: "IN",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="glow animate-pulse-glow absolute inset-x-0 top-0 h-full" />
        <Container className="relative">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/50">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span>/</span>
            <span className="text-white/80">
              {serviceCategories[service.category].title}
            </span>
          </nav>
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="animate-scale-in flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent-400">
              <Icon name={service.icon} className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {service.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
                {service.summary}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {service.description}
              </p>

              <h2 className="mt-12 text-2xl font-semibold tracking-tight">
                Key features
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature, i) => (
                  <li key={feature}>
                    <Reveal
                      delay={(i % 2) * 60}
                      className="flex items-start gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 text-sm transition-colors duration-200 hover:border-brand-200"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      <span>{feature}</span>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold">Why it matters</h3>
                <ul className="mt-4 space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      <span className="text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {related.length > 0 && (
                <div className="mt-6 rounded-2xl border border-border p-6">
                  <h3 className="font-semibold">Related services</h3>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/services/${r.slug}`}
                          className="group flex items-center gap-2.5 text-sm font-medium text-foreground/80 hover:text-brand-600"
                        >
                          <Icon
                            name={r.icon}
                            className="h-4 w-4 text-brand-500 transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                          {r.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection
        title={`See ${service.name} on your own data`}
        description="We'll walk through a working setup based on how your team actually operates — not a generic script."
      />
    </>
  );
}
