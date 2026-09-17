"use client"

import { useEffect, useState } from "react"
import { policyData } from "@/lib/policy-data"
import { SectionCard, FieldRow, FieldGrid, StatusPill } from "@/components/portal-ui"
import { Landmark, Pencil, Check } from "lucide-react"
import { readLienholders, writeLienholders, type Lienholder } from "@/lib/lienholder-store"
import { notify } from "@/lib/notifications-store"

const seeded: Lienholder[] = policyData.mortgages.map((m) => ({
  name: m.name,
  loanNumber: m.loanNumber,
  street: m.address.street,
  street2: m.address.street2 ?? "",
  city: m.address.city,
  state: m.address.state,
  zipcode: m.address.zipcode,
}))

export function MortgageeSection() {
  const { isEscrow, billing } = policyData

  const [lienholders, setLienholders] = useState<Lienholder[]>(seeded)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [draft, setDraft] = useState<Lienholder | null>(null)
  const [toast, setToast] = useState("")

  // Hydrate from localStorage after mount so the server and client markup match.
  useEffect(() => {
    const stored = readLienholders()
    if (stored?.length) setLienholders(stored)
  }, [])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(""), 3000)
    return () => clearTimeout(t)
  }, [toast])

  const startEdit = (i: number) => {
    setDraft({ ...lienholders[i] })
    setEditingIndex(i)
  }

  const cancelEdit = () => {
    setDraft(null)
    setEditingIndex(null)
  }

  const saveEdit = () => {
    if (draft === null || editingIndex === null) return
    const previousName = lienholders[editingIndex].name
    const next = lienholders.map((l, i) => (i === editingIndex ? draft : l))
    setLienholders(next)
    writeLienholders(next)
    cancelEdit()
    setToast("Lienholder updated")
    notify(
      "Lienholder updated",
      previousName === draft.name
        ? `${draft.name} details updated on policy ${policyData.policyNumber}.`
        : `${previousName} replaced with ${draft.name} on policy ${policyData.policyNumber}.`,
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Mortgagee / Lienholders</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Lienholder clauses, loan references, and escrow billing arrangement.
        </p>
      </div>

      {toast && (
        <div
          role="status"
          data-testid="lienholder-toast"
          className="flex items-center gap-2 border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-medium text-primary"
        >
          <Check className="w-3.5 h-3.5" />
          {toast}
        </div>
      )}

      <SectionCard
        title="Escrow Status"
        badge={
          <StatusPill variant={isEscrow ? "positive" : "neutral"}>
            {isEscrow ? "Escrow Billed" : "Direct Billed"}
          </StatusPill>
        }
      >
        <FieldGrid>
          <div>
            <FieldRow label="Billing Arrangement" value={billing.planType} />
            <FieldRow label="Payer" value={lienholders[0]?.name ?? billing.payer} />
          </div>
          <div>
            <FieldRow label="Payment Method" value={billing.paymentMethod} />
            <FieldRow label="Mortgagee Count" value={lienholders.length} />
          </div>
        </FieldGrid>
      </SectionCard>

      {lienholders.map((m, i) => (
        <SectionCard
          key={i}
          title={`Mortgagee ${i + 1}`}
          badge={
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Landmark className="w-3.5 h-3.5" />
              {i === 0 ? "First Mortgagee" : "Additional Interest"}
            </span>
          }
          action={
            editingIndex === i ? null : (
              <button
                type="button"
                onClick={() => startEdit(i)}
                data-testid={i === 0 ? "edit-lienholder-button" : `edit-lienholder-button-${i}`}
                className="inline-flex items-center gap-1 border border-primary/40 bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary hover:bg-primary/20"
              >
                <Pencil className="w-3 h-3" />
                Edit Lienholder
              </button>
            )
          }
        >
          {editingIndex === i && draft ? (
            <form
              aria-label="Edit lienholder"
              data-testid="lienholder-form"
              onSubmit={(e) => {
                e.preventDefault()
                saveEdit()
              }}
            >
              <div className="grid gap-x-4 gap-y-2 sm:grid-cols-2">
                <LienholderInput
                  id="lienholder-name"
                  label="Lienholder Name"
                  value={draft.name}
                  onChange={(v) => setDraft({ ...draft, name: v })}
                />
                <LienholderInput
                  id="lienholder-loan-number"
                  label="Loan Number"
                  value={draft.loanNumber}
                  onChange={(v) => setDraft({ ...draft, loanNumber: v })}
                />
                <LienholderInput
                  id="lienholder-address"
                  label="Address"
                  value={draft.street}
                  onChange={(v) => setDraft({ ...draft, street: v })}
                />
                <LienholderInput
                  id="lienholder-address-2"
                  label="Address 2"
                  value={draft.street2}
                  onChange={(v) => setDraft({ ...draft, street2: v })}
                />
                <LienholderInput
                  id="lienholder-city"
                  label="City"
                  value={draft.city}
                  onChange={(v) => setDraft({ ...draft, city: v })}
                />
                <LienholderInput
                  id="lienholder-state"
                  label="State"
                  value={draft.state}
                  onChange={(v) => setDraft({ ...draft, state: v })}
                />
                <LienholderInput
                  id="lienholder-zip"
                  label="ZIP"
                  value={draft.zipcode}
                  onChange={(v) => setDraft({ ...draft, zipcode: v })}
                />
              </div>

              <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
                <button
                  type="submit"
                  disabled={!draft.name.trim()}
                  data-testid="lienholder-save-button"
                  className="border border-primary bg-primary px-4 py-1 text-xs font-bold text-primary-foreground hover:brightness-110 disabled:opacity-50"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  data-testid="lienholder-cancel-button"
                  className="border border-border bg-secondary px-4 py-1 text-xs font-bold text-foreground hover:bg-muted"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div data-testid={i === 0 ? "lienholder-section" : `lienholder-section-${i}`}>
              <FieldGrid>
                <div>
                  <FieldRow label="Mortgagee Name" value={m.name} link />
                  <FieldRow label="Loan Number" value={m.loanNumber} />
                  <FieldRow label="Interest Type" value={i === 0 ? "First Mortgagee" : "Additional Interest"} />
                </div>
                <div>
                  <FieldRow
                    label="Mailing Address"
                    value={
                      <span>
                        {m.street}
                        {m.street2 ? (
                          <>
                            <br />
                            {m.street2}
                          </>
                        ) : null}
                        <br />
                        {m.city}, {m.state} {m.zipcode}
                      </span>
                    }
                  />
                </div>
              </FieldGrid>

              <div className="mt-5 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Mortgagee Clause:</span> {m.name}, its successors
                  and/or assigns (ISAOA/ATIMA), {m.city}, {m.state} {m.zipcode}. Loss payable as interest may appear
                  under Loan #{m.loanNumber}.
                </p>
              </div>
            </div>
          )}
        </SectionCard>
      ))}
    </div>
  )
}

function LienholderInput({
  id,
  label,
  value,
  onChange,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex items-center gap-2 py-0.5">
      <label htmlFor={id} className="w-28 shrink-0 text-xs text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-6 w-full border border-border bg-background px-1.5 text-xs text-foreground focus:border-primary focus:outline-none"
      />
    </div>
  )
}
