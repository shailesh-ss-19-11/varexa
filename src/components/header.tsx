"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Mail, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Icon } from "@/components/icon";
import { mainNav, siteConfig } from "@/lib/site";
import { serviceCategories, services, type ServiceCategory } from "@/lib/services";
import { cn } from "@/lib/cn";

const categoryOrder: ServiceCategory[] = ["workplace", "enterprise", "development"];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-background/85 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-sm" : "",
      )}
    >
      <div
        className={cn(
          "hidden overflow-hidden border-b border-white/10 bg-ink-950 text-white/70 transition-[grid-template-rows] duration-300 sm:grid",
          scrolled ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex items-center justify-end gap-5 py-2 text-xs">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
          </Container>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled ? "border-border" : "border-transparent sm:border-border",
        )}
      >
        <Container className="flex h-16 items-center justify-between py-3">
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src="/logo-icon.png"
              alt=""
              width={36}
              height={36}
              priority
              className="h-9 w-9 transition-transform duration-300 group-hover:rotate-6"
            />
            <span className="text-lg font-semibold tracking-tight">
              {siteConfig.shortName}
              <span className="text-brand-500">.</span>
            </span>
          </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            if (item.label === "Services") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-foreground",
                      pathname.startsWith("/services") && "text-foreground",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180",
                      )}
                    />
                  </Link>
                  <div
                    className={cn(
                      "absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3 transition-all duration-200 ease-out",
                      servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                    <div className="grid grid-cols-3 gap-6 rounded-2xl border border-border bg-background p-6 shadow-xl">
                      {categoryOrder.map((category) => (
                        <div key={category}>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                            {serviceCategories[category].title}
                          </p>
                          <ul className="space-y-2.5">
                            {services
                              .filter((s) => s.category === category)
                              .slice(0, 5)
                              .map((service) => (
                                <li key={service.slug}>
                                  <Link
                                    href={`/services/${service.slug}`}
                                    className="group flex items-start gap-2 text-sm text-foreground/80 transition-colors hover:text-brand-600"
                                  >
                                    <Icon
                                      name={service.icon}
                                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-500 transition-transform duration-200 group-hover:translate-x-0.5"
                                    />
                                    <span>{service.name}</span>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" className="px-5 py-2.5">
            Request a demo
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:bg-surface lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <Menu
              className={cn(
                "absolute h-5 w-5 transition-all duration-200",
                mobileOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
              )}
            />
            <X
              className={cn(
                "absolute h-5 w-5 transition-all duration-200",
                mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0",
              )}
            />
          </span>
        </button>
        </Container>
      </div>

      <div
        className={cn(
          "grid overflow-hidden bg-background transition-all duration-300 ease-out lg:hidden",
          mobileOpen ? "grid-rows-[1fr] border-t border-border opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <Container className="flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-3 justify-center">
              Request a demo
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
