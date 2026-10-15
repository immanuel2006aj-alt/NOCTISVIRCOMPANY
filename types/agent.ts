/**
 * NOCTIS — Agent type definitions.
 *
 * Agents are AI systems with defined roles. They are NOT human
 * employees. Every UI that renders an agent must show the
 * "AI agent" badge and preserve that distinction.
 */

export type AgentDepartment =
  | "assistant"
  | "design"
  | "engineering"
  | "content-growth"
  | "operations-quality";

export type AgentRoleCategory =
  | "Routing"
  | "UI/UX"
  | "Frontend"
  | "Backend"
  | "Content"
  | "SEO"
  | "Indexing"
  | "Audit"
  | "Leads"
  | "Analytics"
  | "Compliance"
  | "DevOps";

export interface Agent {
  /** Stable identifier, kebab-case. Used in URLs and data keys. */
  id: string;

  /** Display name. */
  name: string;

  /** Short role title, e.g. "Lead Frontend Engineer". */
  role: string;

  /** Category used for filtering and badges. */
  category: AgentRoleCategory;

  /** Department bucket used for filter chips. */
  department: AgentDepartment;

  /** One short sentence summarising the agent's job. */
  summary: string;

  /** 1–2 sentence professional bio. No anthropomorphism. */
  bio: string;

  /** A professional tone hint. NOT a claim of emotion or consciousness. */
  personalityHint: string;

  /** Bullet list of responsibilities shown in the expandable panel. */
  responsibilities: string[];

  /** Stable DiceBear seed so the avatar never changes between renders. */
  avatarSeed: string;

  /** Two-letter initials used as fallback if the avatar fails to load. */
  initials: string;
}
