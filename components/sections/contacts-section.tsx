"use client"

import { policyData } from "@/lib/policy-data"
import { SectionCard } from "@/components/portal-ui"
import { Mail, Phone, User } from "lucide-react"

export function ContactsSection() {
  const { contacts } = policyData

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Contacts</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Insured parties, producer, underwriter, and lienholder contacts.
        </p>
      </div>

      <SectionCard title="Policy Participants">
        <ul className="divide-y divide-border -my-2">
          {contacts.map((c) => (
            <li key={`${c.name}-${c.role}`} className="flex items-start gap-4 py-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">{c.name}</p>
                <p className="text-sm text-muted-foreground">{c.role}</p>
              </div>
              <div className="hidden sm:flex flex-col items-end gap-1 text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-3.5 h-3.5" />
                  {c.phone}
                </span>
                <span className="flex items-center gap-2 text-primary">
                  <Mail className="w-3.5 h-3.5" />
                  {c.email}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  )
}
