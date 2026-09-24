import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";

export function CtaSection({
  title = "Let's map your workflow before we talk software.",
  description = "Tell us what's slowing your team down. We'll show you exactly how Varexa would solve it — no generic demo, no obligation.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div className="bg-grid-dark absolute inset-0 opacity-60" />
      <div className="glow animate-pulse-glow absolute inset-x-0 top-0 h-full" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Request a demo
            </Button>
            <Button href="/services" variant="outline-light">
              Explore services
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
