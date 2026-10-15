"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { ButtonLink } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/boardroom", label: "Boardroom" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);

  /* Solid header after scroll */
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close menu on route change */
  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Escape closes the mobile menu, focus returns to trigger */
  React.useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /* Prevent body scroll while the mobile menu is open */
  React.useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-normal ease-out-expo",
        scrolled
          ? "border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="container-content flex h-[76px] items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="NOCTIS TECHNOLOGIES — Home"
        >
          <NoctisMark className="h-6 w-6 text-accent" />
          <span className="font-display text-base font-semibold tracking-tight text-textPrimary">
            NOCTIS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-normal ease-out-expo",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  active
                    ? "text-textPrimary"
                    : "text-textSecondary hover:text-textPrimary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <ButtonLink
            href="/contact"
            variant="primary"
            size="sm"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Discuss a project
          </ButtonLink>
        </div>

        {/* Mobile trigger */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={cn(
            "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md",
            "text-textSecondary hover:text-textPrimary hover:bg-surfaceHover",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <div
          ref={panelRef}
          id="mobile-nav"
          className="lg:hidden border-t border-border bg-background animate-fade-in"
        >
          <nav
            aria-label="Mobile"
            className="container-content flex flex-col gap-1 py-4"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active
                      ? "text-textPrimary bg-surface"
                      : "text-textSecondary hover:text-textPrimary hover:bg-surface"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            <ButtonLink
              href="/contact"
              variant="primary"
              size="md"
              fullWidth
              className="mt-3"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Discuss a project
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------
 * Original NOCTIS monogram — simple geometric SVG, no paid assets.
 * ------------------------------------------------------------------ */
function NoctisMark({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer hexagon */}
      <path
        d="M12 2.5 20.5 7.25v9.5L12 21.5 3.5 16.75v-9.5L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Inner N */}
      <path
        d="M8 15V9l8 6V9"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
    }
