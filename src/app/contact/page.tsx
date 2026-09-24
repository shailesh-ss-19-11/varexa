import type { Metadata } from "next";
import { Mail, Clock, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a demo or talk to Varexa Infotech about workplace management, enterprise systems, or custom software development.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
        <div className="bg-grid-dark absolute inset-0 opacity-60" />
        <div className="glow animate-pulse-glow absolute inset-x-0 top-0 h-full" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk about what's slowing your team down"
              description="Share a few details and we'll come back with a demo tailored to your workflow — not a generic walkthrough."
              align="center"
              light
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-3">
            <Reveal className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-background p-6 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-6">
              <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-600" />
                  <h3 className="font-semibold">Email us directly</h3>
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 block text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-600" />
                  <h3 className="font-semibold">Call us</h3>
                </div>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="mt-3 block text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-brand-600" />
                  <h3 className="font-semibold">Response time</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We reply to every demo request within one business day.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-600" />
                  <h3 className="font-semibold">{siteConfig.legalName}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {siteConfig.address}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
