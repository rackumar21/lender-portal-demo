"use client"

import { policyData, formatDateShort } from "@/lib/policy-data"
import { SectionCard, FieldRow, FieldGrid, StatusPill } from "@/components/portal-ui"

export function PolicyInfoSection() {
  const { insured } = policyData

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Policy Info</h1>
        <p className="text-sm text-muted-foreground mt-1">Contract terms, underwriting, and issuance details.</p>
      </div>

      <SectionCard title="Policy Contract" badge={<StatusPill>{policyData.statusLabel}</StatusPill>}>
        <FieldGrid>
          <div>
            <FieldRow label="Policy Number" value={policyData.policyNumber} />
            <FieldRow label="Product" value={policyData.product} />
            <FieldRow label="Offering" value={policyData.offering} />
            <FieldRow label="Policy Form" value={policyData.policyForm} />
            <FieldRow label="Jurisdiction" value={policyData.jurisdiction} />
            <FieldRow label="Rate State" value={policyData.rateState} />
          </div>
          <div>
            <FieldRow label="Effective Date" value={formatDateShort(policyData.effectiveDate)} />
            <FieldRow label="Expiration Date" value={formatDateShort(policyData.expirationDate)} />
            <FieldRow label="Written Date" value={formatDateShort(policyData.writtenDate)} />
            <FieldRow label="First Issued Date" value={formatDateShort(policyData.firstIssuedDate)} />
            <FieldRow label="Term Number" value={policyData.termNumber} />
            <FieldRow label="Term Length" value={policyData.termLength} />
          </div>
        </FieldGrid>
      </SectionCard>

      <SectionCard title="Underwriting">
        <FieldGrid>
          <div>
            <FieldRow label="Underwriter" value={policyData.underwriter} />
            <FieldRow label="Underwriting Company" value={policyData.underwritingCompany} />
          </div>
          <div>
            <FieldRow label="Producer Organization" value={policyData.producerOrganizationName} />
            <FieldRow label="Responsible Producer" value={policyData.responsibleProducer} />
          </div>
        </FieldGrid>
      </SectionCard>

      <SectionCard title="Named Insured">
        <FieldGrid>
          <div>
            <FieldRow label="Primary Named Insured" value={insured.primaryNamedInsured} link />
            <FieldRow label="Co-Insured" value={insured.coInsured} />
            <FieldRow label="Relationship" value={insured.relationship} />
          </div>
          <div>
            <FieldRow
              label="Mailing Address"
              value={
                <span>
                  {insured.mailingAddress.street}
                  <br />
                  {insured.mailingAddress.city}, {insured.mailingAddress.state} {insured.mailingAddress.zipcode}
                </span>
              }
            />
          </div>
        </FieldGrid>
      </SectionCard>
    </div>
  )
}
