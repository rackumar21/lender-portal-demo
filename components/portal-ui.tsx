import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/* A single label/value row in a Guidewire-style detail grid. */
export function FieldRow({
  label,
  value,
  link,
  className,
}: {
  label: string
  value: ReactNode
  link?: boolean
  className?: string
}) {
  return (
    <div className={cn("flex items-start justify-between gap-2 py-0.5 border-b border-border/60 last:border-0", className)}>
      <dt className="text-xs text-muted-foreground shrink-0">{label}</dt>
      <dd className={cn("text-xs text-right font-medium", link ? "text-primary" : "text-foreground")}>{value}</dd>
    </div>
  )
}

/* A bordered card with a titled header bar. */
export function SectionCard({
  title,
  badge,
  action,
  children,
  className,
}: {
  title: string
  badge?: ReactNode
  action?: ReactNode
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("bg-card border border-border overflow-hidden", className)}>
      <header className="flex items-center justify-between gap-2 px-2 py-1 border-b border-border bg-secondary">
        <div className="flex items-center gap-1.5">
          <h2 className="text-xs font-bold text-foreground uppercase tracking-wide">{title}</h2>
          {badge}
        </div>
        {action}
      </header>
      <div className="p-2">{children}</div>
    </section>
  )
}

/* Status pill — neutral/positive/negative variants. */
export function StatusPill({
  children,
  variant = "positive",
}: {
  children: ReactNode
  variant?: "positive" | "neutral" | "negative" | "warning"
}) {
  const styles: Record<string, string> = {
    positive: "bg-primary/10 text-primary border-primary/30",
    neutral: "bg-muted text-muted-foreground border-border",
    negative: "bg-destructive/10 text-destructive border-destructive/30",
    warning: "bg-amber-500/10 text-amber-700 border-amber-500/30",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 border px-1.5 py-0.5 text-xs font-bold uppercase tracking-wide",
        styles[variant],
      )}
    >
      <span className="w-1 h-1 bg-current opacity-70" />
      {children}
    </span>
  )
}

/* A large financial stat tile. */
export function StatTile({
  value,
  label,
  emphasis,
}: {
  value: ReactNode
  label: string
  emphasis?: boolean
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className={cn("text-lg font-bold tabular-nums", emphasis ? "text-primary" : "text-foreground")}>
        {value}
      </span>
      <span className="text-xs text-muted-foreground uppercase tracking-wide">{label}</span>
    </div>
  )
}

/* Two-column definition grid wrapper. */
export function FieldGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <dl className={cn("grid gap-x-4 gap-y-0 sm:grid-cols-2", className)}>{children}</dl>
}
