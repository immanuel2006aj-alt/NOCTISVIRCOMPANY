import Link from "next/link";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/boardroom", label: "Boardroom" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Services overview" },
  { href: "/services#websites", label: "Business websites" },
  { href: "/services#ecommerce", label: "E-commerce storefronts" },
  { href: "/services#applications", label: "Custom web applications" },
  { href: "/services#api", label: "API & backend integration" },
  { href: "/services#performance", label: "Performance & SEO" },
];

const connectLinks = [
  // Add real URLs only when configured. Never invent handles.
  { href: "/contact", label: "Start a conversation" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-content py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <NoctisMark className="h-6 w-6 text-accent" />
              <span className="font-display text-base font-semibold tracking-tight text-textPrimary">
                NOCTIS
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-textSecondary text-pretty">
              A virtual web-development agency. Human-led delivery, coordinated
              by a defined team of AI agents. We design, engineer, and ship
              websites and web applications.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Explore" className="md:col-span-2">
            <h2 className="font-display text-xs font-semibold uppercase tracking-wider text-textMuted">
              Explore
            </h2>
            <ul className="mt-4 space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-textSecondary hover:text-textPrimary transition-colors duration-normal ease-out-expo"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services" className="md:col-span-3">
            <h2 className="font-display text-xs font-semibold uppercase tracking-wider text-textMuted">
              Services
            </h2>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-textSecondary hover:text-textPrimary transition-colors duration-normal ease-out-expo"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <nav aria-label="Connect" className="md:col-span-2">
            <h2 className="font-display text-xs font-semibold uppercase tracking-wider text-textMuted">
              Connect
            </h2>
            <ul className="mt-4 space-y-2">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-textSecondary hover:text-textPrimary transition-colors duration-normal ease-out-expo"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-textMuted">
            © {year} NOCTIS TECHNOLOGIES. All rights reserved.
          </p>
          <p className="text-xs text-textMuted">
            AI agents are clearly labelled throughout this site. The human CEO
            remains accountable for delivery.
          </p>
        </div>
      </div>
    </footer>
  );
}

function NoctisMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.5 20.5 7.25v9.5L12 21.5 3.5 16.75v-9.5L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
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
