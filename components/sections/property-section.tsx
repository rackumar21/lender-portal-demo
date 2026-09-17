"use client"

import { policyData } from "@/lib/policy-data"
import { SectionCard, FieldRow, FieldGrid } from "@/components/portal-ui"

export function PropertySection() {
  const { property } = policyData

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Property / Dwelling</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Risk location, dwelling characteristics, and protection details.
        </p>
      </div>

      <SectionCard title="Risk Location">
        <FieldRow
          label="Property Address"
          value={
            <span>
              {property.locationAddress.street}
              <br />
              {property.locationAddress.city}, {property.locationAddress.state} {property.locationAddress.zipcode}
            </span>
          }
        />
        <FieldGrid className="mt-2">
          <div>
            <FieldRow label="Occupancy" value={property.occupancy} />
            <FieldRow label="Dwelling Use" value={property.dwellingUse} />
          </div>
          <div>
            <FieldRow label="Number of Units" value={property.numberOfUnits} />
            <FieldRow label="Protection Class" value={property.protectionClass} />
          </div>
        </FieldGrid>
      </SectionCard>

      <SectionCard title="Dwelling Characteristics">
        <FieldGrid>
          <div>
            <FieldRow label="Year Built" value={property.yearBuilt} />
            <FieldRow label="Square Footage" value={`${property.squareFootage.toLocaleString()} sq ft`} />
            <FieldRow label="Stories" value={property.stories} />
            <FieldRow label="Construction Type" value={property.constructionType} />
            <FieldRow label="Foundation Type" value={property.foundationType} />
          </div>
          <div>
            <FieldRow label="Roof Type" value={property.roofType} />
            <FieldRow label="Roof Year" value={property.roofYear} />
            <FieldRow label="Garage" value={property.garageType} />
            <FieldRow label="Swimming Pool" value={property.swimmingPool} />
          </div>
        </FieldGrid>
      </SectionCard>

      <SectionCard title="Protection & Fire">
        <FieldGrid>
          <div>
            <FieldRow label="Fire District" value={property.fireDistrict} />
            <FieldRow label="Distance to Fire Station" value={property.distanceToFireStation} />
            <FieldRow label="Distance to Hydrant" value={property.distanceToHydrant} />
          </div>
          <div>
            <FieldRow label="Burglar Alarm" value={property.burglarAlarm} />
            <FieldRow label="Fire Alarm" value={property.fireAlarm} />
          </div>
        </FieldGrid>
      </SectionCard>
    </div>
  )
}
