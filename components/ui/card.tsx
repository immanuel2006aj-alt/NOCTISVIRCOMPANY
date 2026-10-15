import * as React from "react";
import { cn } from "@/lib/utils/cn";

type CardVariant = "default" | "interactive" | "selected" | "disabled";

const variants: Record<CardVariant, string> = {
  default: "bg-surface border border-border",
  interactive:
    "bg-surface border border-border hover:border-borderStrong hover:bg-surfaceHover " +
    "transition-colors duration-normal ease-out-expo cursor-pointer",
  selected: "bg-surfaceElevated border border-accent ring-1 ring-accent/30",
  disabled: "bg-surface border border-border opacity-60 pointer-events-none",
};

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: keyof typeof paddings;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  function Card(
    { variant = "default", padding = "md", className, children, ...rest },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl",
          variants[variant],
          paddings[padding],
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

/* ------------------------------------------------------------------
 * CardHeader / CardTitle / CardDescription / CardBody / CardFooter
 * ------------------------------------------------------------------ */

export function CardHeader({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  as: Tag = "h3",
  children,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h2" | "h3" | "h4";
}) {
  return (
    <Tag
      className={cn(
        "font-display text-lg font-semibold tracking-tight text-textPrimary",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function CardDescription({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-textSecondary leading-relaxed", className)}
      {...rest}
    >
      {children}
    </p>
  );
}

export function CardBody({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-4", className)} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-6 pt-4 border-t border-border flex items-center justify-between gap-3",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
