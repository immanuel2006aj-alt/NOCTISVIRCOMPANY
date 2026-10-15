import Link from "next/link";
import {
  ArrowRight,
  Code2,
  ShieldCheck,
  Gauge,
  Search,
  Layers,
  ShoppingCart,
  Plug,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AgentAvatar } from "@/components/agents/agent-avatar";
import { SPECIALIST_AGENTS } from "@/lib/data/agents";

export default function HomePage() {
  const previewAgents = SPECIALIST_AGENTS.slice(0, 6);

  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* ==================================================
            HERO
        ================================================== */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="grid-backdrop pointer-events-none absolute inset-0 opacity-60"
          />
          <div className="container-content relative py-20 md:py-28 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <Badge variant="accent" size="md" withDot>
                  Web engineering, built with intent
                </Badge>

                <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-textPrimary text-balance sm:text-5xl lg:text-6xl">
                  Digital experiences engineered for what&rsquo;s next.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-textSecondary text-pretty sm:text-lg">
                  NOCTIS TECHNOLOGIES is a virtual web-development agency. We
                  design, build, and ship websites and web applications —
                  combining human-led delivery with a coordinated team of AI
                  agents, each with a defined role.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href="/contact"
                    variant="primary"
                    size="lg"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Discuss a project
                  </ButtonLink>
                  <ButtonLink href="/team" variant="secondary" size="lg">
                    Meet the team
                  </ButtonLink>
                </div>
              </div>

              <div className="lg:col-span-5">
                <HeroDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            TRUST STRIP
        ================================================== */}
        <section
          aria-label="Capabilities"
          className="border-y border-border bg-surface"
        >
          <div className="container-content py-8">
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <TrustItem
                icon={<Layers className="h-4 w-4" />}
                label="Responsive by default"
              />
              <TrustItem
                icon={<ShieldCheck className="h-4 w-4" />}
                label="Accessible interfaces"
              />
              <TrustItem
                icon={<Gauge className="h-4 w-4" />}
                label="Measured performance"
              />
              <TrustItem
                icon={<Sparkles className="h-4 w-4" />}
                label="Human-led delivery"
              />
            </ul>
          </div>
        </section>

        {/* ==================================================
            WHAT NOCTIS DOES
        ================================================== */}
        <section className="container-content py-20 md:py-28">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl text-balance">
              A small studio with a coordinated agent team.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-textSecondary text-pretty sm:text-lg">
              Every project runs through the same process: a specialist
              interprets the brief, another designs, another builds, another
              audits. The CEO approves every deliverable before it ships.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <PrincipleCard
              title="Design with clarity"
              body="Layouts start from structure and accessibility, not decoration. Every interface is built to be understood at first glance."
              icon={<Code2 className="h-5 w-5" />}
            />
            <PrincipleCard
              title="Engineer for reliability"
              body="Typed code, predictable state, and small components. Builds stay green and deploys stay boring."
              icon={<Layers className="h-5 w-5" />}
            />
            <PrincipleCard
              title="Ship with accountability"
              body="AI agents propose and produce. The human CEO reviews and signs off. That boundary is visible throughout this site."
              icon={<ShieldCheck className="h-5 w-5" />}
            />
          </div>
        </section>

        {/* ==================================================
            SERVICES PREVIEW
        ================================================== */}
        <section className="border-y border-border bg-surface">
          <div className="container-content py-20 md:py-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl">
                  What we build
                </h2>
                <p className="mt-4 text-base leading-relaxed text-textSecondary text-pretty">
                  Focused services with clear deliverables. No open-ended
                  retainers, no vague scopes.
                </p>
              </div>
              <ButtonLink
                href="/services"
                variant="secondary"
                size="md"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                All services
              </ButtonLink>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <ServicePreviewCard
                href="/services#websites"
                icon={<Layers className="h-5 w-5" />}
                title="Business websites"
                body="Marketing and information sites with clear structure and fast load times."
              />
              <ServicePreviewCard
                href="/services#ecommerce"
                icon={<ShoppingCart className="h-5 w-5" />}
                title="E-commerce storefronts"
                body="Product discovery, cart, and checkout integrations on supported platforms."
              />
              <ServicePreviewCard
                href="/services#api"
                icon={<Plug className="h-5 w-5" />}
                title="API & backend integration"
                body="Validated data flow between your frontend and third-party services."
              />
              <ServicePreviewCard
                href="/services#performance"
                icon={<Search className="h-5 w-5" />}
                title="Performance & SEO foundations"
                body="Semantic structure, metadata, and measurable performance checks."
              />
            </div>
          </div>
        </section>

        {/* ==================================================
            PROCESS
        ================================================== */}
        <section className="container-content py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl">
              How work moves
            </h2>
            <p className="mt-4 text-base leading-relaxed text-textSecondary text-pretty">
              Five stages. Human approval at every checkpoint.
            </p>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-5">
            {[
              { n: "01", t: "Discover", d: "Clarify goals, constraints, and users." },
              { n: "02", t: "Design", d: "Wireframes, tokens, and hierarchy." },
              { n: "03", t: "Build", d: "Frontend, backend, and content." },
              { n: "04", t: "Review", d: "Audit for access, edge cases, and quality." },
              { n: "05", t: "Launch", d: "Deploy, index, monitor, and hand off." },
            ].map((step) => (
              <li
                key={step.n}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <span className="font-mono text-xs text-accent">{step.n}</span>
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
            AGENT PREVIEW
        ================================================== */}
        <section className="border-y border-border bg-surface">
          <div className="container-content py-20 md:py-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <Badge variant="accent" size="sm">
                  AI agents
                </Badge>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-textPrimary sm:text-4xl">
                  A coordinated team.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-textSecondary text-pretty">
                  Each agent has one job and one area of responsibility. Anna
                  routes requests. Specialists produce the work.
                </p>
              </div>
              <ButtonLink
                href="/team"
                variant="secondary"
                size="md"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                View all agents
              </ButtonLink>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {previewAgents.map((agent) => (
                <li
                  key={agent.id}
                  className="flex items-start gap-4 rounded-xl border border-border bg-background p-4"
                >
                  <AgentAvatar
                    name={agent.name}
                    seed={agent.avatarSeed}
                    initials={agent.initials}
                    size={48}
                  />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-sm font-semibold text-textPrimary">
                        {agent.name}
                      </h3>
                      <Badge variant="accent" size="sm">
                        AI agent
                      </Badge>
                    </div>
                    <p className="mt-0.5 text-xs text-textSecondary">
                      {agent.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
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
                  Have a project in mind?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-textSecondary text-pretty">
                  Tell us what you&rsquo;re building. We&rsquo;ll reply with a
                  clear scope, an honest timeline, and a real price — not a
                  template.
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

/* ==================================================
   Local components
   ================================================== */

function TrustItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li className="flex items-center gap-2.5 text-sm text-textSecondary">
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background text-accent"
      >
        {icon}
      </span>
      <span>{label}</span>
    </li>
  );
}

function PrincipleCard({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <Card variant="default" padding="lg">
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-accent"
      >
        {icon}
      </span>
      <CardHeader>
        <CardTitle as="h3" className="mt-5">
          {title}
        </CardTitle>
        <CardDescription>{body}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function ServicePreviewCard({
  href,
  icon,
  title,
  body,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl border border-border bg-background p-6 transition-colors duration-normal ease-out-expo hover:border-borderStrong hover:bg-surfaceHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent"
      >
        {icon}
      </span>
      <h3 className="mt-5 font-display text-base font-semibold text-textPrimary">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-textSecondary text-pretty">
        {body}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Learn more
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-normal ease-out-expo group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------
 * HeroDiagram — original SVG, conveys "coordinated work" without
 * pretending to be a real dashboard screenshot.
 * ------------------------------------------------------------------ */
function HeroDiagram() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-border bg-surfaceElevated p-6 shadow-card">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-textMuted">
            Routing
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-textSecondary">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
            />
            Anna · online
          </span>
        </div>

        <svg
          viewBox="0 0 320 260"
          className="mt-6 w-full"
          role="img"
          aria-label="Diagram showing Anna routing tasks to specialist agents."
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#39D5FF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7C8CFF" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* Anna node */}
          <circle cx="160" cy="40" r="22" fill="#103140" stroke="#39D5FF" />
          <text
            x="160"
            y="45"
            textAnchor="middle"
            fontSize="10"
            fill="#75E4FF"
            fontFamily="monospace"
          >
            AN
          </text>

          {/* Connector lines */}
          <path
            d="M160 62 C 160 100, 60 90, 60 140"
            stroke="url(#lineGrad)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M160 62 C 160 100, 120 90, 120 140"
            stroke="url(#lineGrad)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M160 62 L 160 140"
            stroke="url(#lineGrad)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M160 62 C 160 100, 200 90, 200 140"
            stroke="url(#lineGrad)"
            strokeWidth="1.25"
            fill="none"
          />
          <path
            d="M160 62 C 160 100, 260 90, 260 140"
            stroke="url(#lineGrad)"
            strokeWidth="1.25"
            fill="none"
          />

          {/* Specialist nodes */}
          {[
            { x: 60, label: "AM" },
            { x: 120, label: "LI" },
            { x: 160, label: "ME" },
            { x: 200, label: "VE" },
            { x: 260, label: "NE" },
          ].map((n) => (
            <g key={n.label}>
              <circle
                cx={n.x}
                cy={165}
                r="18"
                fill="#121B2A"
                stroke="#253247"
              />
              <text
                x={n.x}
                y={169}
                textAnchor="middle"
                fontSize="9"
                fill="#A8B4C7"
                fontFamily="monospace"
              >
                {n.label}
              </text>
            </g>
          ))}

          {/* Baseline */}
          <line
            x1="20"
            y1="215"
            x2="300"
            y2="215"
            stroke="#253247"
            strokeDasharray="3 4"
          />
          <text
            x="20"
            y="234"
            fontSize="9"
            fill="#7D8AA0"
            fontFamily="monospace"
          >
            dispatch · build · audit · ship
          </text>
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
          <Metric label="Agents" value="12" />
          <Metric label="Route" value="1 PA" />
          <Metric label="Sign-off" value="CEO" />
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-sm font-semibold text-textPrimary">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-wider text-textMuted">
        {label}
      </div>
    </div>
  );
}