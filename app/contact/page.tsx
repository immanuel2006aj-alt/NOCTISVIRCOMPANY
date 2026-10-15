"use client";

import * as React from "react";
import { Mail, Clock, MessageSquare, Send } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

type FieldErrors = Partial<
  Record<"name" | "email" | "description", string>
>;

export default function ContactPage() {
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [formError, setFormError] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setErrors({});

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("company") || "").trim();
    const service = String(form.get("service") || "").trim();
    const budget = String(form.get("budget") || "").trim();
    const timeline = String(form.get("timeline") || "").trim();
    const description = String(form.get("description") || "").trim();

    const nextErrors: FieldErrors = {};

    if (name.length < 2) {
      nextErrors.name = "Please enter your name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (description.length < 20) {
      nextErrors.description =
        "Please describe your project in at least 20 characters.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      // Move focus to the first error
      const firstKey = Object.keys(nextErrors)[0];
      const el = document.getElementById(firstKey);
      el?.focus();
      return;
    }

    setSubmitting(true);

    try {
      // Backend not yet wired — simulate a successful submission.
      // Later: POST to /api/contact which forwards via Resend.
      await new Promise((r) => setTimeout(r, 800));

      // Log for now so you can see it working in devtools
      console.info("[NOCTIS contact submission]", {
        name,
        email,
        company,
        service,
        budget,
        timeline,
        description,
      });

      setSubmitted(true);
    } catch {
      setFormError(
        "Something went wrong on our end. Please try again in a moment."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* ==================================================
            INTRO
        ================================================== */}
        <section className="container-content pt-20 pb-12 md:pt-28 md:pb-16">
          <Badge variant="accent" size="md">
            Contact
          </Badge>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-textPrimary sm:text-5xl text-balance">
            Tell us about the project.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-textSecondary text-pretty sm:text-lg">
            The more context you give, the more useful our first reply will be.
            We do not send automated sales sequences.
          </p>
        </section>

        {/* ==================================================
            FORM + SIDE INFO
        ================================================== */}
        <section className="container-content pb-20 md:pb-28">
          <div className="grid gap-12 md:grid-cols-12">
            {/* FORM */}
            <div className="md:col-span-7">
              {submitted ? (
                <div className="rounded-xl border border-success/30 bg-success/5 p-8">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-success/15 text-success">
                    <Send className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 font-display text-xl font-semibold text-textPrimary">
                    Message received.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                    Thank you. We will review your brief and reply by email.
                    This is a placeholder confirmation — no email has been sent
                    yet because the backend is not connected.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-accent hover:text-accentHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md px-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {formError && (
                    <div
                      role="alert"
                      className="rounded-lg border border-error/40 bg-error/10 px-4 py-3 text-sm text-error"
                    >
                      {formError}
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field
                      id="name"
                      label="Name"
                      required
                      error={errors.name}
                    >
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        aria-invalid={errors.name ? "true" : undefined}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={inputClass(!!errors.name)}
                        placeholder="Your full name"
                      />
                    </Field>

                    <Field
                      id="email"
                      label="Email"
                      required
                      error={errors.email}
                    >
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        aria-invalid={errors.email ? "true" : undefined}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={inputClass(!!errors.email)}
                        placeholder="you@company.com"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field id="company" label="Company or project">
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className={inputClass(false)}
                        placeholder="Optional"
                      />
                    </Field>

                    <Field id="service" label="Service interest">
                      <select
                        id="service"
                        name="service"
                        className={inputClass(false)}
                        defaultValue=""
                      >
                        <option value="">Select a service</option>
                        <option value="website">Business website</option>
                        <option value="ecommerce">E-commerce storefront</option>
                        <option value="application">Custom web application</option>
                        <option value="api">API / backend integration</option>
                        <option value="performance">Performance & SEO</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="other">Something else</option>
                      </select>
                    </Field>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field id="budget" label="Budget range">
                      <select
                        id="budget"
                        name="budget"
                        className={inputClass(false)}
                        defaultValue=""
                      >
                        <option value="">Prefer not to say</option>
                        <option value="<1k">Under $1,000</option>
                        <option value="1-5k">$1,000 – $5,000</option>
                        <option value="5-15k">$5,000 – $15,000</option>
                        <option value="15k+">$15,000+</option>
                      </select>
                    </Field>

                    <Field id="timeline" label="Timeline">
                      <select
                        id="timeline"
                        name="timeline"
                        className={inputClass(false)}
                        defaultValue=""
                      >
                        <option value="">Not decided yet</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-3mo">Within 1–3 months</option>
                        <option value="3-6mo">Within 3–6 months</option>
                        <option value="later">Later this year</option>
                      </select>
                    </Field>
                  </div>

                  <Field
                    id="description"
                    label="Project description"
                    required
                    error={errors.description}
                  >
                    <textarea
                      id="description"
                      name="description"
                      rows={6}
                      required
                      aria-invalid={errors.description ? "true" : undefined}
                      aria-describedby={
                        errors.description ? "description-error" : undefined
                      }
                      className={cn(inputClass(!!errors.description), "min-h-[140px] resize-y")}
                      placeholder="What are you building? Who is it for? What does success look like?"
                    />
                  </Field>

                  <div className="flex items-center gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={submitting}
                      rightIcon={!submitting ? <Send className="h-4 w-4" /> : undefined}
                    >
                      {submitting ? "Sending…" : "Send message"}
                    </Button>
                    <p className="text-xs text-textMuted">
                      We don’t share your details with anyone.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* SIDE INFO */}
            <aside className="md:col-span-5 md:pl-8">
              <div className="rounded-xl border border-border bg-surface p-6">
                <h2 className="font-display text-lg font-semibold text-textPrimary">
                  What to expect
                </h2>

                <ul className="mt-5 space-y-5">
                  <InfoItem
                    icon={<MessageSquare className="h-4 w-4" />}
                    title="A reply with questions"
                    body="We will respond with clarifying questions before we propose anything. This is how we avoid scope errors."
                  />
                  <InfoItem
                    icon={<Clock className="h-4 w-4" />}
                    title="A written scope"
                    body="If we’re a fit, you get a written scope, timeline, and price. No verbal estimates."
                  />
                  <InfoItem
                    icon={<Mail className="h-4 w-4" />}
                    title="Direct contact"
                    body="You talk to the CEO. Agents assist with delivery; they do not negotiate on your behalf."
                  />
                </ul>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-surfaceElevated p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-textMuted">
                  Not a fit?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                  If your project isn’t something we can do well, we will tell
                  you in our first reply and — where we can — point you to
                  someone better suited.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

/* ------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------ */

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-lg border bg-background px-4 py-3 text-sm text-textPrimary placeholder:text-textMuted",
    "transition-colors duration-normal ease-out-expo",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    hasError
      ? "border-error"
      : "border-border hover:border-borderStrong"
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-textPrimary"
      >
        {label}
        {required && (
          <span className="ml-1 text-accent" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 text-xs text-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

function InfoItem({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-background text-accent"
      >
        {icon}
      </span>
      <div>
        <h3 className="font-display text-sm font-semibold text-textPrimary">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-textSecondary">
          {body}
        </p>
      </div>
    </li>
  );
}
