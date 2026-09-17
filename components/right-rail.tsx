"use client"

import { policyData, formatCurrency, formatDateShort } from "@/lib/policy-data"
import { StatusPill } from "@/components/portal-ui"
import { StickyNote } from "lucide-react"
import type { SectionId } from "@/components/sidebar"

interface RightRailProps {
  onSectionChange: (section: SectionId) => void
}

export function RightRail({ onSectionChange }: RightRailProps) {
  const { account, billing, notes } = policyData

  return (
    <div className="space-y-1">
      {/* Account card */}
      <section className="bg-card border border-border overflow-hidden">
        <header className="px-2 py-1 border-b border-border bg-secondary">
          <h2 className="text-xs font-bold text-foreground uppercase tracking-wide">Account</h2>
        </header>
        <div className="p-2">
          <dl className="space-y-0.5">
            <RailRow label="Account Name" value={account.name} link />
            <RailRow label="Account Number" value={account.accountNumber} />
            <RailRow
              label="Home Address"
              value={
                <span className="text-right text-xs">
                  {account.homeAddress.street}
                  <br />
                  {account.homeAddress.city}, {account.homeAddress.state} {account.homeAddress.zipcode}
                </span>
              }
            />
            <RailRow label="In Force Premium" value={formatCurrency(account.inForcePremium)} />
            <RailRow label="In Force Policy Count" value={account.inForcePolicyCount} />
            <RailRow label="Open Claims Count" value={account.openClaimsCount} />
          </dl>
        </div>
      </section>

      {/* Notes card */}
      <section className="bg-card border border-border overflow-hidden">
        <header className="flex items-center justify-between px-2 py-1 border-b border-border bg-secondary">
          <h2 className="text-xs font-bold text-foreground uppercase tracking-wide">Notes</h2>
          <button className="bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground hover:bg-primary/90">
            New Note
          </button>
        </header>
        <div className="p-2 space-y-1">
          {notes.map((note, i) => (
            <div key={i} className="flex gap-1.5">
              <StickyNote className="w-3 h-3 text-muted-foreground shrink-0 mt-0.5" />
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">{note.author}</span>
                  <span>{formatDateShort(note.date)}</span>
                </div>
                <p className="text-xs text-foreground leading-snug mt-0.5">{note.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Billing card */}
      <section className="bg-card border border-border overflow-hidden">
        <header className="flex items-center justify-between px-2 py-1 border-b border-border bg-secondary">
          <h2 className="text-xs font-bold text-foreground uppercase tracking-wide">Billing</h2>
          <button
            onClick={() => onSectionChange("billing")}
            className="bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground hover:bg-primary/90"
          >
            Open Billing
          </button>
        </header>
        <div className="p-2">
          <div className="flex items-center justify-between mb-1">
            <div>
              <div className="text-base font-bold text-foreground tabular-nums">
                {formatCurrency(billing.balanceDue)}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide leading-3">Balance Due</div>
            </div>
            <StatusPill variant={billing.accountCurrent ? "positive" : "warning"}>
              {billing.accountCurrent ? "Account Current" : "Past Due"}
            </StatusPill>
          </div>
          <dl className="space-y-0.5">
            <RailRow label="Billing Plan" value={billing.planType} />
            <RailRow label="Payer" value={billing.payer} />
            <RailRow label="Next Due Date" value={formatDateShort(billing.nextDueDate)} />
          </dl>
        </div>
      </section>
    </div>
  )
}

function RailRow({
  label,
  value,
  link,
}: {
  label: string
  value: React.ReactNode
  link?: boolean
}) {
  return (
    <div className="flex items-start justify-between gap-2">
      <dt className="text-xs text-muted-foreground shrink-0">{label}</dt>
      <dd className={`text-xs font-bold text-right ${link ? "text-primary" : "text-foreground"}`}>{value}</dd>
    </div>
  )
}
