import * as React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "destructive"
  | "icon";

type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg " +
  "transition-colors duration-normal ease-out-expo " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[#041018] hover:bg-accentHover active:bg-accent " +
    "shadow-subtle",
  secondary:
    "bg-transparent text-textPrimary border border-borderStrong " +
    "hover:bg-surfaceHover hover:border-accent",
  ghost:
    "bg-transparent text-textSecondary hover:text-textPrimary " +
    "hover:bg-surfaceHover",
  destructive:
    "bg-error text-[#1a0509] hover:opacity-90 active:opacity-100",
  icon:
    "bg-transparent text-textSecondary hover:text-textPrimary " +
    "hover:bg-surfaceHover",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

const iconOnlySize: Record<ButtonSize, string> = {
  sm: "h-9 w-9 p-0",
  md: "h-11 w-11 p-0",
  lg: "h-13 w-13 p-0",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      children,
      disabled,
      type = "button",
      ...rest
    },
    ref
  ) {
    const isIconOnly = variant === "icon";
    const sizeClass = isIconOnly ? iconOnlySize[size] : sizes[size];

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        className={cn(
          base,
          variants[variant],
          sizeClass,
          fullWidth && "w-full",
          className
        )}
        {...rest}
      >
        {loading ? (
          <Loader2
            className="h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        ) : (
          leftIcon && (
            <span className="inline-flex shrink-0" aria-hidden="true">
              {leftIcon}
            </span>
          )
        )}
        {!isIconOnly && children}
        {!loading && rightIcon && !isIconOnly && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

/* ------------------------------------------------------------------
 * ButtonLink — same visual system, rendered as a Next.js <Link>.
 * ------------------------------------------------------------------ */

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  external?: boolean;
  children?: React.ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  external = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const isIconOnly = variant === "icon";
  const sizeClass = isIconOnly ? iconOnlySize[size] : sizes[size];

  const classes = cn(
    base,
    variants[variant],
    sizeClass,
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {leftIcon && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      {!isIconOnly && children}
      {rightIcon && !isIconOnly && (
        <span className="inline-flex shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
