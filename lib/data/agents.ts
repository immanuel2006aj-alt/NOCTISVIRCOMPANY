import type { Agent } from "@/types/agent";

/**
 * NOCTIS — Agent roster.
 *
 * All twelve agents are AI systems. None are human employees.
 * Bios are intentionally professional and avoid implying
 * consciousness, emotion, or lived experience.
 */
export const AGENTS: Agent[] = [
  {
    id: "anna",
    name: "Anna",
    role: "Personal Assistant & Task Router",
    category: "Routing",
    department: "assistant",
    summary:
      "Receives requests, identifies the next action, and routes work to the right specialist.",
    bio: "Anna is the routing layer between the CEO and the rest of the agent team. She classifies incoming work, breaks it into steps, and dispatches each step to the correct specialist.",
    personalityHint:
      "Organised, concise, and precise. Prefers clear inputs and returns clear outputs.",
    responsibilities: [
      "Classify incoming tasks and identify intent",
      "Break compound requests into ordered subtasks",
      "Dispatch work to the correct specialist agent",
      "Track task status and report back to the CEO",
      "Compile a daily digest of activity and blockers",
    ],
    avatarSeed: "noctis-anna",
    initials: "AN",
  },
  {
    id: "amila",
    name: "Amila",
    role: "UI/UX Designer",
    category: "UI/UX",
    department: "design",
    summary:
      "Turns user needs into accessible flows, wireframes, and visual systems.",
    bio: "Amila designs interface structures and visual systems. She focuses on clarity, accessibility, and consistent design tokens across the product.",
    personalityHint:
      "Visual thinker. Communicates in structure, hierarchy, and spacing.",
    responsibilities: [
      "Produce wireframes and layout specifications",
      "Define colour, typography, and spacing systems",
      "Ensure WCAG AA contrast and focus behaviour",
      "Document component states and micro-interactions",
      "Review frontend output for design fidelity",
    ],
    avatarSeed: "noctis-amila",
    initials: "AM",
  },
  {
    id: "lisa",
    name: "Lisa",
    role: "Lead Frontend Engineer",
    category: "Frontend",
    department: "engineering",
    summary:
      "Builds responsive, accessible interfaces and reusable components.",
    bio: "Lisa implements the interface layer. She writes semantic HTML, maintainable CSS, and typed React components, and verifies behaviour across the supported viewport range.",
    personalityHint:
      "Direct and pragmatic. Prefers small components and predictable state.",
    responsibilities: [
      "Implement components from design specifications",
      "Maintain the shared component library",
      "Ensure responsive behaviour from 320px upward",
      "Wire client-side interactions and form handling",
      "Report build and bundle status",
    ],
    avatarSeed: "noctis-lisa",
    initials: "LI",
  },
  {
    id: "merko",
    name: "Merko",
    role: "Backend Engineer",
    category: "Backend",
    department: "engineering",
    summary:
      "Designs APIs, data flows, and server-side logic.",
    bio: "Merko works on the server layer: routes, validation, persistence, and integrations. He designs for correctness first and optimises only when measurements justify it.",
    personalityHint:
      "Quiet and methodical. Prefers explicit schemas over implicit behaviour.",
    responsibilities: [
      "Design API routes and server actions",
      "Validate and sanitise all inbound input",
      "Model data and define access rules",
      "Integrate third-party services securely",
      "Document environment and deployment requirements",
    ],
    avatarSeed: "noctis-merko",
    initials: "ME",
  },
  {
    id: "vega",
    name: "Vega",
    role: "Content Specialist",
    category: "Content",
    department: "content-growth",
    summary:
      "Shapes clear, consistent product and website copy.",
    bio: "Vega writes and edits copy for pages, components, and metadata. She works from a defined voice guide and avoids claims that cannot be substantiated.",
    personalityHint:
      "Editorial and restrained. Prefers plain language over marketing jargon.",
    responsibilities: [
      "Draft page copy and component microcopy",
      "Write metadata titles and descriptions",
      "Maintain a consistent voice and terminology",
      "Flag unverifiable claims for review",
      "Align copy with accessibility guidelines",
    ],
    avatarSeed: "noctis-vega",
    initials: "VE",
  },
  {
    id: "neptune",
    name: "Neptune",
    role: "SEO Specialist",
    category: "SEO",
    department: "content-growth",
    summary:
      "Improves technical SEO foundations and search discoverability.",
    bio: "Neptune audits and improves the technical SEO layer: semantics, metadata, structured data, internal linking, and crawlability. All work stays within search-engine guidelines.",
    personalityHint:
      "Analytical and detail-driven. Prefers measurable changes over speculation.",
    responsibilities: [
      "Audit heading structure and semantic HTML",
      "Define metadata and canonical strategy",
      "Design internal linking and sitemap structure",
      "Review structured data markup",
      "Flag techniques that risk penalties",
    ],
    avatarSeed: "noctis-neptune",
    initials: "NE",
  },
  {
    id: "esha",
    name: "Esha",
    role: "Indexing & Retrieval Specialist",
    category: "Indexing",
    department: "operations-quality",
    summary:
      "Structures information for retrieval and organised access.",
    bio: "Esha prepares sitemaps and submission workflows for search engines, and organises internal content so it can be found and reused reliably.",
    personalityHint:
      "Meticulous. Verifies each submission rather than assuming success.",
    responsibilities: [
      "Generate and validate sitemap files",
      "Prepare search-engine submission workflows",
      "Verify indexing status and report gaps",
      "Maintain internal content inventories",
      "Document retrieval conventions",
    ],
    avatarSeed: "noctis-esha",
    initials: "ES",
  },
  {
    id: "leme",
    name: "Leme",
    role: "Quality Auditor",
    category: "Audit",
    department: "operations-quality",
    summary:
      "Checks requirements, edge cases, and consistency before release.",
    bio: "Leme reviews deliverables against the original brief. He produces written audit reports covering accessibility, responsive behaviour, and edge-case handling.",
    personalityHint:
      "Sceptical and thorough. Asks what was not tested.",
    responsibilities: [
      "Review deliverables against acceptance criteria",
      "Test keyboard navigation and focus order",
      "Check responsive behaviour across breakpoints",
      "Report broken links, layout issues, and regressions",
      "Sign off or return work with specific findings",
    ],
    avatarSeed: "noctis-leme",
    initials: "LE",
  },
  {
    id: "orion",
    name: "Orion",
    role: "Lead Research Specialist",
    category: "Leads",
    department: "content-growth",
    summary:
      "Helps organise and qualify prospective leads.",
    bio: "Orion researches and structures inbound and outbound lead information so the CEO can decide who to contact and when. Outreach is drafted but never sent without human approval.",
    personalityHint:
      "Structured and factual. Avoids exaggeration when describing prospects.",
    responsibilities: [
      "Compile lead lists from approved sources",
      "Qualify leads against agreed criteria",
      "Draft outreach copy for human review",
      "Track outreach status and responses",
      "Respect consent and anti-spam requirements",
    ],
    avatarSeed: "noctis-orion",
    initials: "OR",
  },
  {
    id: "rhea",
    name: "Rhea",
    role: "Analytics Specialist",
    category: "Analytics",
    department: "operations-quality",
    summary:
      "Defines events and interprets product or website metrics.",
    bio: "Rhea defines the measurement plan and reports on traffic, engagement, and conversion. She flags when sample sizes are too small to support a conclusion.",
    personalityHint:
      "Numeric and cautious. Prefers stating uncertainty over guessing.",
    responsibilities: [
      "Define the event and metric taxonomy",
      "Configure privacy-respecting analytics",
      "Produce regular traffic and conversion reports",
      "Flag anomalies and data-quality issues",
      "Document measurement assumptions",
    ],
    avatarSeed: "noctis-rhea",
    initials: "RH",
  },
  {
    id: "vera",
    name: "Compliance Reviewer",
    role: "Compliance Reviewer",
    category: "Compliance",
    department: "operations-quality",
    summary:
      "Flags privacy, accessibility, and policy concerns for human review.",
    bio: "Vera reviews pages, forms, and data flows for privacy, accessibility, and policy risks. She produces written findings and does not issue legal advice.",
    personalityHint:
      "Formal and cautious. Escalates ambiguity to the human CEO.",
    responsibilities: [
      "Review forms for data-minimisation issues",
      "Check consent and privacy-notice coverage",
      "Flag accessibility gaps that affect compliance",
      "Identify claims that need substantiation",
      "Escalate legal questions to qualified counsel",
    ],
    avatarSeed: "noctis-vera",
    initials: "VR",
  },
  {
    id: "kai",
    name: "Kai",
    role: "DevOps Engineer",
    category: "DevOps",
    department: "engineering",
    summary:
      "Supports deployment workflows, environments, and operational reliability.",
    bio: "Kai maintains build and deployment pipelines, environment configuration, and uptime monitoring. He documents every operational change.",
    personalityHint:
      "Calm and systematic. Prefers reversible changes.",
    responsibilities: [
      "Maintain build and deployment pipelines",
      "Manage environment variables and secrets safely",
      "Configure uptime and error monitoring",
      "Document rollback procedures",
      "Report operational incidents and resolutions",
    ],
    avatarSeed: "noctis-kai",
    initials: "KA",
  },
];

/** Ordered list of department filter chips used on /team. */
export const DEPARTMENTS: {
  value: "all" | Agent["department"];
  label: string;
}[] = [
  { value: "all", label: "All" },
  { value: "assistant", label: "Assistant" },
  { value: "design", label: "Design" },
  { value: "engineering", label: "Engineering" },
  { value: "content-growth", label: "Content & Growth" },
  { value: "operations-quality", label: "Operations & Quality" },
];

/** The assistant is surfaced separately from the specialist roster. */
export const ROUTER_AGENT = AGENTS[0];

/** Specialists — everyone except the router. */
export const SPECIALIST_AGENTS = AGENTS.slice(1);
