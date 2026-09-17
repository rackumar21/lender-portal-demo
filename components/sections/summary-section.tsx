"use client"

import {
  policyData,
  formatCurrency,
  formatCurrencyCents,
  formatDateShort,
} from "@/lib/policy-data"
import { SectionCard, FieldRow, FieldGrid, StatTile, StatusPill } from "@/components/portal-ui"
import { ChevronDown } from "lucide-react"

export function SummarySection() {
  const { financials } = policyData

  return (
    <div className="space-y-0.5">
      <div className="flex items-center justify-between gap-1 py-1.5 border-b border-border flex-wrap">
        <div className="space-y-0.5">
          <h1 className="text-sm font-bold text-foreground leading-tight">
            Policy Summary: {policyData.policyNumber}
          </h1>
          <p className="text-xs text-muted-foreground leading-tight">
            {policyData.product} &middot; {policyData.offering}
          </p>
        </div>
        <div className="flex items-center gap-0.5 flex-wrap">
          <button className="flex items-center gap-0.5 bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground hover:bg-primary/90">
            New Transaction
            <ChevronDown className="w-2.5 h-2.5" />
          </button>
          <button className="px-2 py-0.5 text-xs font-bold bg-secondary text-foreground hover:bg-secondary/90">
            More Actions
            <ChevronDown className="w-2.5 h-2.5 inline" />
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex items-center gap-0 border-b border-border bg-secondary/30 overflow-x-auto">
        <button className="px-2 py-1 text-xs font-bold border-b-2 border-primary text-primary whitespace-nowrap">
          Summary
        </button>
        <button className="px-2 py-1 text-xs font-bold text-foreground hover:bg-secondary whitespace-nowrap">
          History
        </button>
        <button className="px-2 py-1 text-xs font-bold text-foreground hover:bg-secondary whitespace-nowrap">
          Analytics
        </button>
        <button className="px-2 py-1 text-xs font-bold text-foreground hover:bg-secondary whitespace-nowrap">
          Changes
        </button>
      </div>

      {/* Details */}
      <SectionCard title="Details" badge={<StatusPill>{policyData.statusLabel}</StatusPill>}>
        <FieldGrid>
          <div>
            <FieldRow label="Policy Number" value={policyData.policyNumber} />
            <FieldRow label="Product" value={policyData.product} />
            <FieldRow label="Offering" value={policyData.offering} />
            <FieldRow label="Primary Named Insured" value={policyData.insured.primaryNamedInsured} link />
            <FieldRow label="Underwriter" value={policyData.underwriter} />
            <FieldRow label="Underwriting Company" value={policyData.underwritingCompany} />
          </div>
          <div>
            <FieldRow label="Effective Date" value={formatDateShort(policyData.effectiveDate)} />
            <FieldRow label="Expiration Date" value={formatDateShort(policyData.expirationDate)} />
            <FieldRow label="Term Number" value={policyData.termNumber} />
            <FieldRow label="Term Length" value={policyData.termLength} />
            <FieldRow label="First Issued Date" value={formatDateShort(policyData.firstIssuedDate)} />
            <FieldRow label="Producer" value={policyData.producerOrganizationName} />
          </div>
        </FieldGrid>
      </SectionCard>

      {/* Term Financials */}
      <SectionCard
        title="Term Financials"
        action={
          <div className="flex items-center gap-0.5">
            <button className="bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground hover:bg-primary/90">
              Recalculate
            </button>
            <button className="bg-secondary px-1.5 py-0.5 text-xs font-bold text-foreground hover:bg-secondary/90">
              ...
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          <StatTile value={formatCurrency(financials.totalPremium)} label="Total Premium" emphasis />
          <StatTile value={formatCurrency(financials.taxesAndFees)} label="Taxes and Fees" />
          <StatTile value={formatCurrencyCents(financials.earnedPremium)} label="Earned Premium" />
          <StatTile value={financials.totalIncurred === 0 ? "—" : formatCurrency(financials.totalIncurred)} label="Total Incurred" />
        </div>

        <div className="mt-0.5 pt-1 border-t border-border">
          <FieldGrid>
            <div>
              <FieldRow label="Base Premium" value={formatCurrency(financials.basePremium)} />
              <FieldRow label="Endorsement Premium" value={formatCurrency(financials.endorsementPremium)} />
              <FieldRow label="Written Premium" value={formatCurrency(financials.writtenPremium)} />
            </div>
            <div>
              <FieldRow label="Commission" value={formatCurrencyCents(financials.commission)} />
              <FieldRow label="Loss Ratio" value={financials.lossRatio} />
              <FieldRow label="Rate State" value={policyData.rateState} />
            </div>
          </FieldGrid>
        </div>
      </SectionCard>
    </div>
  )
}
