"use client"

import {
  policyData,
  formatCurrency,
  formatDateShort,
} from "@/lib/policy-data"
import { SectionCard, FieldRow, FieldGrid, StatTile, StatusPill } from "@/components/portal-ui"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function BillingSection() {
  const { billing, financials } = policyData

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Billing</h1>
          <p className="text-sm text-muted-foreground mt-1">Premium, payment plan, and invoice history.</p>
        </div>
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          Make Payment
        </button>
      </div>

      <SectionCard
        title="Account Balance"
        badge={
          <StatusPill variant={billing.accountCurrent ? "positive" : "warning"}>
            {billing.accountCurrent ? "Account Current" : "Past Due"}
          </StatusPill>
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatTile value={formatCurrency(financials.totalPremium)} label="Total Premium" emphasis />
          <StatTile value={formatCurrency(billing.paidToDate)} label="Paid to Date" />
          <StatTile value={formatCurrency(billing.balanceDue)} label="Balance Due" />
          <StatTile value={formatDateShort(billing.nextDueDate)} label="Next Due Date" />
        </div>
      </SectionCard>

      <SectionCard title="Payment Plan">
        <FieldGrid>
          <div>
            <FieldRow label="Billing Plan" value={billing.planType} />
            <FieldRow label="Payer" value={billing.payer} />
          </div>
          <div>
            <FieldRow label="Payment Method" value={billing.paymentMethod} />
            <FieldRow label="Next Due Amount" value={formatCurrency(billing.nextDueAmount)} />
          </div>
        </FieldGrid>
      </SectionCard>

      <SectionCard title="Invoice History">
        <div className="-mx-4 -mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/40">
                <TableHead>Invoice #</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Paid Date</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billing.invoices.map((inv) => (
                <TableRow key={inv.invoiceNumber}>
                  <TableCell className="font-mono text-xs">{inv.invoiceNumber}</TableCell>
                  <TableCell>{formatDateShort(inv.dueDate)}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {inv.paidDate ? formatDateShort(inv.paidDate) : "—"}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">{formatCurrency(inv.amount)}</TableCell>
                  <TableCell className="text-right">
                    <StatusPill variant={inv.status === "Paid" ? "positive" : "warning"}>{inv.status}</StatusPill>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SectionCard>
    </div>
  )
}
