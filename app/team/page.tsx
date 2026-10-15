"use client";

import * as React from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Badge } from "@/components/ui/badge";
import { AgentCard } from "@/components/agents/agent-card";
import { AgentAvatar } from "@/components/agents/agent-avatar";
import {
  AGENTS,
  DEPARTMENTS,
  ROUTER_AGENT,
} from "@/lib/data/agents";
import type { Agent } from "@/types/agent";
import { cn } from "@/lib/utils/cn";

export default function TeamPage() {
  const [filter, setFilter] = React.useState<
    "all" | Agent["department"]
  >("all");

  const specialists = AGENTS.filter((a) => a.id !== ROUTER_AGENT.id);

  const visible =
    filter === "all"
      ? specialists
      : specialists.filter((a) => a.department === filter);

  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* ==================================================
            PAGE INTRO
        ================================================== */}
        <section className="container-content pt-20 pb-12 md:pt-28 md:pb-16">
          <Badge variant="accent" size="md">
            AI agents
          </Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-textPrimary sm:text-5xl text-balance">
            A coordinated team. Clear responsibilities.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-textSecondary text-pretty sm:text-lg">
            Every agent on this page is an AI system with one defined role.
            None of them are human employees. The human CEO remains accountable
            for final delivery on every project.
          </p>
        </section>

        {/* ==================================================
            ROUTER — Anna, featured separately
        ================================================== */}
        <section className="border-y border-border bg-surface">
          <div className="container-content py-12 md:py-16">
            <p className="font-mono text-xs uppercase tracking-wider text-textMuted">
              Routing layer
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-3">
                <AgentAvatar
                  name={ROUTER_AGENT.name}
                  seed={ROUTER_AGENT.avatarSeed}
                  initials={ROUTER_AGENT.initials}
                  size={96}
                />
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-textPrimary">
                    {ROUTER_AGENT.name}
                  </h2>
                  <Badge variant="accent" size="sm">
                    AI agent
                  </Badge>
                  <Badge variant="neutral" size="sm">
                    {ROUTER_AGENT.role}
                  </Badge>
                </div>

                <p className="mt-3 text-base leading-relaxed text-textSecondary text-pretty">
                  {ROUTER_AGENT.summary}
                </p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {ROUTER_AGENT.responsibilities.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-relaxed text-textSecondary"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            FILTERS + GRID
        ================================================== */}
        <section className="container-content py-16 md:py-20">
          {/* Filter chips */}
          <div
            role="group"
            aria-label="Filter agents by department"
            className="flex flex-wrap gap-2"
          >
            {DEPARTMENTS.map((d) => {
              const active = filter === d.value;
              return (
                <button
                  key={d.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(d.value)}
                  className={cn(
                    "rounded-pill border px-4 py-2 text-sm font-medium transition-colors duration-normal ease-out-expo",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active
                      ? "border-accent bg-accentSoft text-accent"
                      : "border-border bg-surface text-textSecondary hover:border-borderStrong hover:text-textPrimary"
                  )}
                >
                  {d.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="mt-10">
            {visible.length === 0 ? (
              <div className="rounded-xl border border-border bg-surface p-8 text-center">
                <p className="text-sm text-textSecondary">
                  No agents match this filter yet.
                </p>
              </div>
            ) : (
              <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {visible.map((agent) => (
                  <li key={agent.id}>
                    <AgentCard agent={agent} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* ==================================================
            WORKFLOW STRIP
        ================================================== */}
        <section className="border-t border-border bg-surface">
          <div className="container-content py-16 md:py-20">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-textPrimary sm:text-3xl">
                How a request moves through the team
              </h2>
              <p className="mt-4 text-base leading-relaxed text-textSecondary text-pretty">
                Anna receives the request, identifies the next action, and
                dispatches it. Specialists produce. Leme audits. The CEO
                approves.
              </p>
            </div>

            <ol className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                {
                  n: "01",
                  t: "Route",
                  d: "Anna classifies the request and identifies the next action.",
                },
                {
                  n: "02",
                  t: "Produce",
                  d: "Specialists (design, build, content) create the deliverable.",
                },
                {
                  n: "03",
                  t: "Audit",
                  d: "Leme checks against acceptance criteria and reports.",
                },
                {
                  n: "04",
                  t: "Approve",
                  d: "The human CEO signs off before anything ships.",
                },
              ].map((step) => (
                <li
                  key={step.n}
                  className="rounded-xl border border-border bg-background p-5"
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
