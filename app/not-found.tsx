import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main
        id="main"
        className="container-content flex min-h-[60vh] flex-col items-center justify-center py-24 text-center"
      >
        <Badge variant="warning" size="md" withDot>
          404 — page not found
        </Badge>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-textPrimary sm:text-5xl text-balance">
          That page doesn’t exist.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-textSecondary text-pretty">
          The link may be broken, or the page may have moved. Head back to the
          homepage, or use the navigation above to find what you were looking
          for.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink
            href="/"
            variant="primary"
            size="lg"
            leftIcon={<ArrowLeft className="h-4 w-4" />}
          >
            Back to home
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="secondary"
            size="lg"
            leftIcon={<Compass className="h-4 w-4" />}
          >
            Contact us
          </ButtonLink>
        </div>

        <p className="mt-12 text-xs text-textMuted">
          If you followed a link from our site and landed here, please{" "}
          <Link
            href="/contact"
            className="text-accent hover:text-accentHover underline underline-offset-2"
          >
            let us know
          </Link>
          .
        </p>
      </main>

      <SiteFooter />
    </>
  );
}
