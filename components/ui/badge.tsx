import * as React from "react";
import { cn } from "@/lib/utils/cn";

type BadgeVariant =
  | "neutral"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "info";

type BadgeSize = "sm" | "md";

const variants: Record<BadgeVariant, string> = {
  neutral:
    "bg-surfaceElevated text-textSecondary border border-border",
  accent:
    "bg-accentSoft text-accent border border-accent/40",
  success:
    "bg-success/10 text-success border border-success/30",
  warning:
    "bg-warning/10 text-warning border border-warning/30",
  error:
    "bg-error/10 text-error border border-error/30",
  info:
    "bg-info/10 text-info border border-info/30",
};

const sizes: Record<BadgeSize, string> = {
  sm: "h-5 px-2 text-[11px] tracking-wide",
  md: "h-6 px-2.5 text-xs",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  withDot?: boolean;
}

export function Badge({
  variant = "neutral",
  size = "sm",
  withDot = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill font-medium uppercase",
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    >
      {withDot && (
        <span
          aria-hidden="true"
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "success" && "bg-success",
            variant === "warning" && "bg-warning",
            variant === "error" && "bg-error",
            variant === "info" && "bg-info",
            variant === "accent" && "bg-accent",
            variant === "neutral" && "bg-textMuted"
          )}
        />
      )}
      {children}
    </span>
  );
}
