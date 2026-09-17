"use client"

import { policyData, formatCurrency } from "@/lib/policy-data"
import { SectionCard, StatTile } from "@/components/portal-ui"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function CoveragesSection() {
  const { coverageDetail, endorsements, deductibleDetail } = policyData

  const totalCoveragePremium = coverageDetail.reduce((sum, c) => sum + c.premium, 0)
  const totalEndorsementPremium = endorsements.reduce((sum, e) => sum + e.premium, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Coverages</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Section I &amp; II property and liability coverages, endorsements, and deductibles.
        </p>
      </div>

      <SectionCard title="Coverage Summary">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatTile value={formatCurrency(coverageDetail[0].limit)} label="Dwelling (Cov A)" emphasis />
          <StatTile value={formatCurrency(policyData.coverages.e)} label="Personal Liability (Cov E)" />
          <StatTile value={formatCurrency(policyData.deductibles.general)} label="Base Deductible" />
          <StatTile value={formatCurrency(policyData.premium)} label="Annual Premium" />
        </div>
      </SectionCard>

      {/* Primary coverages */}
      <SectionCard title="Property & Liability Coverages">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/40">
                <TableHead className="w-16">Code</TableHead>
                <TableHead>Coverage</TableHead>
                <TableHead className="text-right">Limit</TableHead>
                <TableHead className="text-right">Deductible</TableHead>
                <TableHead className="text-right">Premium</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {coverageDetail.map((c) => (
                <TableRow key={c.code}>
                  <TableCell className="font-semibold text-primary">{c.code}</TableCell>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell className="text-right tabular-nums">{formatCurrency(c.limit)}</TableCell>
                  <TableCell className="text-right tabular-nums text-muted-foreground">
                    {c.deductible ? formatCurrency(c.deductible) : "—"}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">{formatCurrency(c.premium)}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-secondary/30 font-semibold">
                <TableCell colSpan={4} className="text-right">
                  Coverage Premium Subtotal
                </TableCell>
                <TableCell className="text-right tabular-nums">{formatCurrency(totalCoveragePremium)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </SectionCard>

      {/* Endorsements */}
      <SectionCard title="Endorsements & Optional Coverages">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/40">
                <TableHead className="w-28">Form</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Limit</TableHead>
                <TableHead className="text-right">Premium</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {endorsements.map((e) => (
                <TableRow key={e.code}>
                  <TableCell className="font-mono text-xs text-muted-foreground">{e.code}</TableCell>
                  <TableCell className="font-medium">{e.name}</TableCell>
                  <TableCell className="text-right tabular-nums">
                    {typeof e.limit === "number" ? formatCurrency(e.limit) : e.limit}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {e.premium === 0
                      ? "Incl."
                      : e.premium < 0
                        ? `(${formatCurrency(Math.abs(e.premium))})`
                        : formatCurrency(e.premium)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-secondary/30 font-semibold">
                <TableCell colSpan={3} className="text-right">
                  Endorsement Premium Subtotal
                </TableCell>
                <TableCell className="text-right tabular-nums">{formatCurrency(totalEndorsementPremium)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </SectionCard>

      {/* Deductibles */}
      <SectionCard title="Deductible Schedule">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/40">
                <TableHead>Peril</TableHead>
                <TableHead className="text-right">Deductible</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deductibleDetail.map((d) => (
                <TableRow key={d.name}>
                  <TableCell className="font-medium">{d.name}</TableCell>
                  <TableCell className="text-right tabular-nums">{d.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SectionCard>
    </div>
  )
}
