import { Container } from "@/components/container";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink-950">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-white/70">
          The page you&apos;re looking for may have moved. Try the homepage or
          browse our services.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/services" variant="outline-light">
            View services
          </Button>
        </div>
      </Container>
    </section>
  );
}
