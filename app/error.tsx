"use client";

import * as React from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log to the console in dev. In production you would forward
    // this to your monitoring provider.
    console.error("[NOCTIS] runtime error:", error);
  }, [error]);

  return (
    <main
      id="main"
      className="container-content flex min-h-[70vh] flex-col items-center justify-center py-24 text-center"
    >
      <Badge variant="error" size="md" withDot>
        Something went wrong
      </Badge>

      <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-textPrimary sm:text-5xl text-balance">
        An unexpected error occurred.
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-textSecondary text-pretty">
        The page failed to load. This has been logged. You can try again, or go
        back to the homepage.
      </p>

      {error.digest && (
        <p className="mt-4 font-mono text-xs text-textMuted">
          Reference: {error.digest}
        </p>
      )}

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button
          variant="primary"
          size="lg"
          onClick={reset}
          leftIcon={<RotateCcw className="h-4 w-4" />}
        >
          Try again
        </Button>
        <ButtonLink
          href="/"
          variant="secondary"
          size="lg"
          leftIcon={<Home className="h-4 w-4" />}
        >
          Back to home
        </ButtonLink>
      </div>

      <div className="mt-12 flex items-center gap-2 text-xs text-textMuted">
        <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
        <span>
          If this keeps happening, please report it via the contact page.
        </span>
      </div>
    </main>
  );
}
