"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import type { Agent } from "@/types/agent";
import { AgentAvatar } from "@/components/agents/agent-avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

export interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const [open, setOpen] = React.useState(false);
  const panelId = `agent-${agent.id}-responsibilities`;

  return (
    <article
      className={cn(
        "group rounded-xl border border-border bg-surface p-5",
        "transition-colors duration-normal ease-out-expo",
        "hover:border-borderStrong hover:bg-surfaceHover"
      )}
    >
      <div className="flex items-start gap-4">
        <AgentAvatar
          name={agent.name}
          seed={agent.avatarSeed}
          initials={agent.initials}
          size={64}
        />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-lg font-semibold tracking-tight text-textPrimary">
              {agent.name}
            </h3>
            <Badge variant="accent" size="sm">
              AI agent
            </Badge>
          </div>

          <p className="mt-1 text-sm font-medium text-textSecondary">
            {agent.role}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-textSecondary text-pretty">
            {agent.summary}
          </p>
        </div>
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <p className="text-xs leading-relaxed text-textMuted italic">
          Working style — {agent.personalityHint}
        </p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            "mt-4 inline-flex items-center gap-1.5 text-sm font-medium",
            "text-accent hover:text-accentHover",
            "rounded-md px-1 py-0.5 -ml-1",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          )}
        >
          <span>{open ? "Hide responsibilities" : "View responsibilities"}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-normal ease-out-expo",
              open && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>

        <div
          id={panelId}
          hidden={!open}
          className="mt-4 animate-fade-in"
        >
          <p className="text-sm leading-relaxed text-textSecondary text-pretty">
            {agent.bio}
          </p>

          <ul className="mt-3 space-y-2">
            {agent.responsibilities.map((item) => (
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
    </article>
  );
}
