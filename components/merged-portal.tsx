"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { policyData } from "@/lib/policy-data"
import { TopNav } from "@/components/top-nav"
import { Sidebar, type SectionId } from "@/components/sidebar"
import { RightRail } from "@/components/right-rail"
import { LookupDashboard } from "@/components/lookup-dashboard"
import { SummarySection } from "@/components/sections/summary-section"
import { PolicyInfoSection } from "@/components/sections/policy-info-section"
import { CoveragesSection } from "@/components/sections/coverages-section"
import { MortgageeSection } from "@/components/sections/mortgagee-section"
import { PropertySection } from "@/components/sections/property-section"
import { BillingSection } from "@/components/sections/billing-section"
import { DocumentsSection } from "@/components/sections/documents-section"
import { ContactsSection } from "@/components/sections/contacts-section"

interface MergedPortalProps {
  onLogout: () => void
}

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
]

export default function MergedPortal({ onLogout }: MergedPortalProps) {
  const [state, setState] = useState("")
  const [policyNumber, setPolicyNumber] = useState("")
  const [term, setTerm] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [error, setError] = useState("")
  const [policyFound, setPolicyFound] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>("summary")

  const showRightRail = activeSection === "summary"

  const handleLookupSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const expectedParts = policyData.policyNumber.split("-")
    const expectedState = expectedParts[0]
    const expectedNumber = expectedParts[1]
    const expectedTerm = expectedParts[2]

    const isValidPolicy = 
      state === expectedState &&
      policyNumber === expectedNumber &&
      term === expectedTerm &&
      zipCode === "98706"

    if (isValidPolicy) {
      setPolicyFound(true)
    } else {
      setError("No matching policy found. Please verify your information and try again.")
    }
  }

  const renderSection = () => {
    switch (activeSection) {
      case "summary":
        return <SummarySection />
      case "policy-info":
        return <PolicyInfoSection />
      case "coverages":
        return <CoveragesSection />
      case "mortgagee":
        return <MortgageeSection />
      case "property":
        return <PropertySection />
      case "billing":
        return <BillingSection />
      case "documents":
        return <DocumentsSection />
      case "contacts":
        return <ContactsSection />
      default:
        return <SummarySection />
    }
  }

  // Show lookup dashboard if policy not yet found
  if (!policyFound) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <TopNav onLogout={onLogout} />
        
        <main className="flex-1 overflow-y-auto px-2 py-1">
          <div className="w-full space-y-1 flex flex-col items-center">
            <div className="space-y-0.5 mb-1 w-full max-w-2xl">
              <h1 className="text-sm font-bold text-foreground">
                Lender Inquiry and Requests
              </h1>
              <p className="text-xs text-muted-foreground leading-snug">
                Streamline your work with our lender portal. Access policy documents, request coverage or mortgagee clause changes, and make payments all in one place.
              </p>
            </div>

            {/* Lookup Form */}
            <form onSubmit={handleLookupSubmit} className="text-left bg-card border border-border p-2 w-full max-w-2xl mb-1">
              {error && (
                <div className="p-1 text-xs text-destructive bg-destructive/10 leading-snug mb-1">
                  {error}
                </div>
              )}

              <div className="space-y-0.5">
                <Label className="text-xs font-bold">Policy number</Label>
                <div className="flex items-end gap-0.5">
                  <div className="flex-1 space-y-0">
                    <span className="text-xs text-muted-foreground leading-3">State</span>
                    <Select value={state} onValueChange={setState}>
                      <SelectTrigger className="w-full h-6 bg-card text-xs">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent className="max-h-40">
                        {US_STATES.map((s) => (
                          <SelectItem key={s} value={s} className="text-xs">{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <span className="text-muted-foreground text-xs pb-0.5">-</span>
                  <div className="flex-[3] space-y-0">
                    <span className="text-xs text-muted-foreground leading-3">Number</span>
                    <Input
                      value={policyNumber}
                      onChange={(e) => setPolicyNumber(e.target.value)}
                      placeholder="10011001"
                      className="w-full h-6 bg-card text-xs"
                    />
                  </div>
                  <span className="text-muted-foreground text-xs pb-0.5">-</span>
                  <div className="flex-1 space-y-0">
                    <span className="text-xs text-muted-foreground leading-3">Term</span>
                    <Input
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                      placeholder="00"
                      className="w-full h-6 bg-card text-xs"
                    />
                  </div>
                  <div className="flex-1 space-y-0">
                    <span className="text-xs text-muted-foreground leading-3">Zip code</span>
                    <Input
                      id="zipCode"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="00000"
                      className="h-6 bg-card text-xs w-full"
                    />
                  </div>
                  <Button type="submit" className="h-6 px-2 text-xs font-bold shrink-0">
                    Find Policy
                  </Button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-3 mt-1">
                Demo: AZ-5969302-01, zip &quot;98706&quot;
              </p>
            </form>

            {/* Dashboard Content */}
            <div className="w-full">
              <LookupDashboard />
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Show portal dashboard after policy is found
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopNav onLogout={() => { setPolicyFound(false); onLogout(); }} />

      <div className="flex flex-1 min-h-0">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-0.5">
            <div className={showRightRail ? "grid gap-0.5 xl:grid-cols-[1fr_310px]" : ""}>
              <div className="min-w-0">{renderSection()}</div>
              {showRightRail && (
                <div className="xl:sticky xl:top-0.5 self-start">
                  <RightRail onSectionChange={setActiveSection} />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
