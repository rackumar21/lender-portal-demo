"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { policyData } from "@/lib/policy-data"
import { ChevronLeft } from "lucide-react"

interface PolicyLookupPageProps {
  onLookup: () => void
  onBack?: () => void
}

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
]

export default function PolicyLookupPage({ onLookup, onBack }: PolicyLookupPageProps) {
  const [state, setState] = useState("")
  const [policyNumber, setPolicyNumber] = useState("")
  const [term, setTerm] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Parse the expected policy number parts from policyData
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
      onLookup()
    } else {
      setError("No matching policy found. Please verify your information and try again.")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-primary" />
            <span className="text-lg font-semibold text-foreground">Strada</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl space-y-8">
          {/* Form */}
          <div className="space-y-8 text-center">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to sign in
              </button>
            )}
            <div className="space-y-3">
              <h1 className="text-2xl lg:text-3xl font-semibold text-foreground text-balance">
                Lender Inquiry and Requests
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Streamline your work with our lender portal. Access policy documents, request coverage or mortgagee clause changes, and make payments all in one place. No need for back-and-forth emails or phone calls.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {error && (
                <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                  {error}
                </div>
              )}

              {/* Policy Number */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Policy number</Label>
                <div className="flex items-end gap-2">
                  <div className="flex-1 space-y-1.5">
                    <span className="text-xs text-muted-foreground">State</span>
                    <Select value={state} onValueChange={setState}>
                      <SelectTrigger className="w-full h-11 bg-card">
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        {US_STATES.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <span className="text-muted-foreground pb-3">-</span>
                  <div className="flex-[3] space-y-1.5">
                    <span className="text-xs text-muted-foreground">Number</span>
                    <Input
                      value={policyNumber}
                      onChange={(e) => setPolicyNumber(e.target.value)}
                      placeholder="10011001"
                      className="w-full h-11 bg-card"
                    />
                  </div>
                  <span className="text-muted-foreground pb-3">-</span>
                  <div className="flex-1 space-y-1.5">
                    <span className="text-xs text-muted-foreground">Term</span>
                    <Input
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                      placeholder="00"
                      className="w-full h-11 bg-card"
                    />
                  </div>
                </div>
              </div>

              {/* Zip Code */}
              <div className="space-y-2">
                <Label htmlFor="zipCode" className="text-sm font-medium">
                  Zip code
                </Label>
                <Input
                  id="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="00000"
                  className="h-11 bg-card max-w-32"
                />
              </div>

              <Button type="submit" className="h-11 px-8 w-full">
                Find Policy
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center">
              Demo: Use policy AZ-5969302-01, zip code &quot;98706&quot;
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
