export default function Loading() {
  return (
    <main
      id="main"
      className="container-content flex min-h-[60vh] flex-col items-center justify-center py-24"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border-2 border-border"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent animate-spin"
          />
        </div>
        <p className="text-sm text-textSecondary">Loading…</p>
      </div>

      {/* Skeleton content below so the layout doesn't jump */}
      <div className="mt-16 w-full max-w-3xl space-y-4">
        <div className="h-8 w-3/4 rounded-md bg-surface animate-pulse" />
        <div className="h-4 w-full rounded-md bg-surface animate-pulse" />
        <div className="h-4 w-5/6 rounded-md bg-surface animate-pulse" />
        <div className="h-4 w-2/3 rounded-md bg-surface animate-pulse" />
      </div>
    </main>
  );
}
