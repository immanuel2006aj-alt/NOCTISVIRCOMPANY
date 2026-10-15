import Link from "next/link";
import {
  Layers,
  ShoppingCart,
  Boxes,
  Plug,
  Gauge,
  Wrench,
  ArrowRight,
  Check,
  Minus,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
  title: "Services",
  description:
    "Website design and development, e-commerce storefronts, custom web applications, backend and API integration, performance and SEO foundations.",
};

const services = [
  {
    id: "websites",
    icon: <Layers className="h-5 w-5" />,
    title: "Business websites",
    body: "Marketing and information sites with clear structure, semantic HTML, and fast load times. Built to be edited later without fear.",
    includes: [
      "Up to 6 core pages",
      "Responsive from 320px",
      "Accessibility baseline (WCAG AA target)",
      "Contact form + spam protection",
    ],
  },
  {
    id: "ecommerce",
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "E-commerce storefronts",
    body: "Product discovery, cart, and checkout integrations on supported platforms. Payments and tax handled by the platform you choose.",
    includes: [
      "Product catalogue structure",
      "Cart and checkout flow",
      "Payment provider integration",
      "Order confirmation emails",
    ],
  },
  {
    id: "applications",
    icon: <Boxes className="h-5 w-5" />,
    title: "Custom web applications",
    body: "Dashboards, portals, and role-based interfaces. Built with typed frontends and a documented backend.",
    includes: [
      "Authentication and roles",
      "Data modelling and access rules",
      "Admin and user interfaces",
      "Deployment and monitoring",
    ],
  },
  {
    id: "api",
    icon: <Plug className="h-5 w-5" />,
    title: "API & backend integration",
    body: "Validated data flow between your frontend, third-party services, and internal systems.",
    includes: [
      "REST or GraphQL endpoints",
      "Server-side validation",
      "Webhooks and scheduled jobs",
      "Error handling and logging",
    ],
  },
  {
    id: "performance",
    icon: <Gauge className="h-5 w-5" />,
    title: "Performance & SEO foundations",
    body: "Semantic structure, metadata, and measurable performance improvements. No promises we can’t verify.",
    includes: [
      "Core Web Vitals audit",
      "Metadata and sitemap",
      "Structured data markup",
      "Image and asset optimisation",
    ],
  },
  {
    id: "maintenance",
    icon: <Wrench className="h-5 w-5" />,
    title: "Maintenance & improvements",
    body: "Scoped enhancements, dependency updates, and issue resolution for sites already in production.",
    includes: [
      "Monthly dependency updates",
      "Bug triage and fixes",
      "Small feature additions",
      "Uptime and error monitoring",
    ],
  },
];

const tiers = [
  {
    name: "Starter site",
    tagline: "For a focused marketing site.",
    priceNote: "Starting price to be confirmed.",
    features: {
      "Pages up to 6": true,
      "Responsive layout": true,
      "Accessibility baseline": true,
      "Contact form": true,
      "CMS integration": false,
      "Custom web application": false,
      "Analytics setup": false,
      "Maintenance retainer": false,
    },
  },
  {
    name: "Studio",
    tagline: "For a business with ongoing needs.",
    priceNote: "Starting price to be confirmed.",
    features: {
      "Pages up to 6": true,
      "Responsive layout": true,
      "Accessibility baseline": true,
      "Contact form": true,
      "CMS integration": true,
      "Custom web application": false,
      "Analytics setup": true,
      "Maintenance retainer": false,
    },
  },
  {
    name: "Product",
    tagline: "For a web application or portal.",
    priceNote: "Starting price to be confirmed.",
    features: {
      "Pages up to 6": true,
      "Responsive layout": true,
      "Accessibility baseline": true,
      "Contact form": true,
      "CMS integration": true,
      "Custom web application": true,
      "Analytics setup": true,
      "Maintenance retainer": true,
    },
  },
];

const faqs = [
  {
    q: "How is pricing decided?",
    a: "Pricing depends on scope: number of pages, whether a CMS is required, backend complexity, and integrations. We do not publish fixed numbers until we have reviewed the brief. Any figure shown elsewhere on the site is illustrative only and is not a quote.",
  },
  {
    q: "How long does a project take?",
    a: "A focused marketing site typically takes 2–4 weeks. A custom web application takes longer and depends on scope. We give a written timeline after the discovery step — not before.",
  },
  {
    q: "Do you offer revisions?",
    a: "Each phase includes a defined revision round within scope. Anything beyond scope is quoted separately so there are no surprises on either side.",
  },
  {
    q: "Who owns the code?",
    a: "You do, on final payment. The project is delivered as a Git repository and a deployment configuration you control.",
  },
  {
    q: "Are the agents building my project?",
    a: "AI agents at NOCTIS produce drafts, code, and audits. The human CEO reviews and approves every deliverable before it reaches you. Agents are clearly labelled as AI throughout this site.",
  },
  {
    q: "Can you take over an existing project?",
    a: "Yes, after a short technical review. We will tell you honestly if the existing codebase makes the work impractical and propose an alternative.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* ==================================================
            INTRO
        ================================================== */}
        <section className="container-content pt-20 pb-12 md:pt-28 md:pb-16">
          <Badge variant="accent" size="md">
            Services
          </Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-textPrimary sm:text-5xl text-balance">
            Practical engineering for ambitious digital products.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-textSecondary text-pretty sm:text-lg">
            Six services. Clear deliverables. Honest scope. If something isn’t a
            fit for us, we’ll say so before you commit.
          </p>
        </section>

        {/* ==================================================
            SERVICE CARDS
        ================================================== */}
        <section className="container-content pb-20 md:pb-28">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.id} id={s.id}>
                <Card variant="default" padding="lg" className="h-full">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-accent"
                  >
                    {s.icon}
                  </span>
                  <CardHeader>
                    <CardTitle as="h2" className="mt-5">
                      {s.title}
                    </CardTitle>
                    <CardDescription>{s.body}</CardDescription>
                  </CardHeader>
                  <ul className="mt-5 space-y-2">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-textSecondary"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        {/* ==================================================
            PRICING TIERS
        ================================================== */}
        <section className="border-y border-border bg-surface">
          <div className="container-content py-20 md:py-28">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl">
                Pricing, told honestly.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-textSecondary text-pretty">
                Every project is scoped individually. Below is what each tier
                includes and what it excludes. Real prices are given after
                discovery — never before.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {tiers.map((t) => (
                <Card key={t.name} variant="default" padding="lg" className="h-full">
                  <CardHeader>
                    <CardTitle as="h3">{t.name}</CardTitle>
                    <CardDescription>{t.tagline}</CardDescription>
                  </CardHeader>

                  <p className="mt-5 text-sm text-textMuted">{t.priceNote}</p>

                  <ul className="mt-6 space-y-3">
                    {Object.entries(t.features).map(([label, included]) => (
                      <li
                        key={label}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                      >
                        {included ? (
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                        ) : (
                          <Minus
                            className="mt-0.5 h-4 w-4 shrink-0 text-textMuted"
                            aria-hidden="true"
                          />
                        )}
                        <span
                          className={
                            included
                              ? "text-textSecondary"
                              : "text-textMuted line-through decoration-textMuted/50"
                          }
                        >
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ButtonLink
                      href="/contact"
                      variant="secondary"
                      size="md"
                      fullWidth
                    >
                      Request a quote
                    </ButtonLink>
                  </div>
                </Card>
              ))}
            </div>

            <p className="mt-8 text-xs text-textMuted">
              Prices shown as “to be confirmed” are placeholders until the
              business owner publishes approved figures. Nothing on this page
              is a quote.
            </p>
          </div>
        </section>

        {/* ==================================================
            PROCESS
        ================================================== */}
        <section className="container-content py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl">
              Delivery process
            </h2>
            <p className="mt-4 text-base leading-relaxed text-textSecondary text-pretty">
              Six stages. Each one ends with a written artefact you can review.
            </p>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { n: "01", t: "Discovery", d: "Brief, goals, constraints." },
              { n: "02", t: "Scope", d: "Written scope and timeline." },
              { n: "03", t: "Design", d: "Wireframes and design tokens." },
              { n: "04", t: "Build", d: "Frontend, backend, content." },
              { n: "05", t: "QA", d: "Audit, fixes, sign-off." },
              { n: "06", t: "Handoff", d: "Deploy, docs, ownership." },
            ].map((step) => (
              <li
                key={step.n}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <span className="font-mono text-xs text-accent">
                  {step.n}
                </span>
                <h3 className="mt-2 font-display text-base font-semibold text-textPrimary">
                  {step.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-textSecondary">
                  {step.d}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ==================================================
            FAQ
        ================================================== */}
        <section className="border-t border-border bg-surface">
          <div className="container-content py-20 md:py-28">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl">
                  Questions
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-textSecondary text-pretty">
                  If your question isn’t here, ask it directly — we answer
                  plainly.
                </p>
                <div className="mt-6">
                  <ButtonLink
                    href="/contact"
                    variant="secondary"
                    size="md"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Ask a question
                  </ButtonLink>
                </div>
              </div>

              <div className="md:col-span-8">
                <ul className="divide-y divide-border">
                  {faqs.map((f, i) => (
                    <FaqItem key={f.q} index={i} question={f.q} answer={f.a} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            CTA
        ================================================== */}
        <section className="container-content py-24 md:py-32">
          <div className="rounded-2xl border border-border bg-surfaceElevated p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl text-balance">
                  Ready to scope a project?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-textSecondary text-pretty">
                  Send the brief. We reply with questions first, a proposal
                  second, and a written scope third.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Start a conversation
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

/* ------------------------------------------------------------------
 * FAQ accordion item — no external dependencies.
 * ------------------------------------------------------------------ */
function FaqItem({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: string;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <li className="py-4">
      <details className="group">
        <summary
          id={buttonId}
          aria-controls={panelId}
          className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-md py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          <span className="font-display text-base font-semibold text-textPrimary">
            {question}
          </span>
          <span
            aria-hidden="true"
            className="mt-1 inline-block h-4 w-4 shrink-0 text-accent transition-transform duration-normal ease-out-expo group-open:rotate-45"
          >
            <svg viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3v10M3 8h10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </summary>
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="pt-3 pr-8 text-sm leading-relaxed text-textSecondary text-pretty animate-fade-in"
        >
          {answer}
        </div>
      </details>
    </li>
  );
}
