"use client"

import { useState } from "react"
import { TopNav } from "@/components/top-nav"
import { Sidebar, type SectionId } from "@/components/sidebar"
import { RightRail } from "@/components/right-rail"
import { SummarySection } from "@/components/sections/summary-section"
import { PolicyInfoSection } from "@/components/sections/policy-info-section"
import { CoveragesSection } from "@/components/sections/coverages-section"
import { MortgageeSection } from "@/components/sections/mortgagee-section"
import { PropertySection } from "@/components/sections/property-section"
import { BillingSection } from "@/components/sections/billing-section"
import { DocumentsSection } from "@/components/sections/documents-section"
import { ContactsSection } from "@/components/sections/contacts-section"

interface DashboardProps {
  onLogout: () => void
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("summary")

  const showRightRail = activeSection === "summary"

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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopNav onLogout={onLogout} />

      <div className="flex flex-1 min-h-0">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-6">
            <div className={showRightRail ? "grid gap-6 xl:grid-cols-[1fr_360px]" : ""}>
              <div className="min-w-0">{renderSection()}</div>
              {showRightRail && (
                <div className="xl:sticky xl:top-6 self-start">
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
