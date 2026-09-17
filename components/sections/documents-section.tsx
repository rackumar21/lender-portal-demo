"use client"

import { policyData, formatDateShort } from "@/lib/policy-data"
import { SectionCard } from "@/components/portal-ui"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FileText, Download } from "lucide-react"

export function DocumentsSection() {
  const { documents } = policyData

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Documents &amp; Forms</h1>
        <p className="text-sm text-muted-foreground mt-1">Policy forms, declarations, endorsements, and notices.</p>
      </div>

      <SectionCard title="Document Library">
        <div className="-mx-4 -mb-4">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/40">
                <TableHead>Document</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Form</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Size</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.name}>
                  <TableCell className="font-medium">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      {doc.name}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{doc.type}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">{doc.form}</TableCell>
                  <TableCell>{formatDateShort(doc.date)}</TableCell>
                  <TableCell className="text-right text-muted-foreground tabular-nums">{doc.size}</TableCell>
                  <TableCell className="text-right">
                    <button
                      className="p-1.5 rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"
                      aria-label={`Download ${doc.name}`}
                    >
                      <Download className="w-4 h-4" />
                    </button>
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
