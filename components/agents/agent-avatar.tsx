"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

type AvatarSize = 28 | 36 | 48 | 64 | 96;

const sizeClass: Record<AvatarSize, string> = {
  28: "h-7 w-7 text-[10px]",
  36: "h-9 w-9 text-xs",
  48: "h-12 w-12 text-sm",
  64: "h-16 w-16 text-base",
  96: "h-24 w-24 text-xl",
};

const DICEBEAR_BASE =
  process.env.NEXT_PUBLIC_DICEBEAR_BASE_URL ??
  "https://api.dicebear.com/9.x/notionists-neutral/svg";

export interface AgentAvatarProps {
  /** Human-readable agent name — used for alt text. */
  name: string;
  /** Stable seed — same seed always yields the same avatar. */
  seed: string;
  /** Two-letter fallback used if the avatar fails to load. */
  initials: string;
  /** Visual size in pixels. */
  size?: AvatarSize;
  className?: string;
}

export function AgentAvatar({
  name,
  seed,
  initials,
  size = 48,
  className,
}: AgentAvatarProps) {
  const [errored, setErrored] = React.useState(false);

  const src = `${DICEBEAR_BASE}?seed=${encodeURIComponent(
    seed
  )}&backgroundColor=121b2a,182437,0e1420`;

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
        "bg-surfaceElevated border border-border",
        sizeClass[size],
        className
      )}
      aria-hidden="true"
    >
      {!errored ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="font-display font-semibold text-textSecondary">
          {initials}
        </span>
      )}
      {/* Screen-reader-only label keeps the avatar accessible without
          duplicating the visible agent name next to it. */}
      <span className="sr-only">{name} avatar</span>
    </span>
  );
}
