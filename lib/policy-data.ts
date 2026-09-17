export const policyData = {
  // --- Core payload (unchanged) ---
  policyNumber: "AZ-5969302-01",
  status: "The policy is active.",
  effectiveDate: "2025-06-21",
  expirationDate: "2026-06-21",
  premium: 4307,
  isEscrow: true,
  producerOrganizationName: "Gorilla Insurance",
  cancellations: [
    {
      reason: "The policy was canceled.",
    },
  ],
  coverages: {
    a: 691000,
    b: 138200,
    c: 518250,
    d: 207300,
    e: 300000,
    f: 5000,
  },
  deductibles: {
    general: 1000,
  },
  mortgages: [
    {
      name: "Bayland Mortgage, LLC",
      loanNumber: "694002289",
      address: {
        street: "PO Box 900900",
        street2: "PO BOX 888888",
        city: "FLORENCE",
        state: "SC",
        zipcode: "98706",
      },
    },
  ],

  // --- Enriched / derived detail ---
  statusLabel: "In Force",
  product: "Homeowners (HO-3)",
  offering: "Preferred Program",
  policyForm: "HO 00 03 10 00 — Special Form",
  termNumber: 1,
  termLength: "12 Months",
  firstIssuedDate: "2025-06-21",
  writtenDate: "2025-06-14",
  underwriter: "Elizabeth Nyugen",
  underwritingCompany: "Strada Property & Casualty Insurance Co.",
  rateState: "AZ",
  jurisdiction: "Arizona",
  responsibleProducer: "Marcus Webb",

  account: {
    accountNumber: "1262949671",
    name: "Huan Wang",
    type: "Personal Account",
    status: "Active",
    inForcePolicyCount: 1,
    openClaimsCount: 0,
    inForcePremium: 4307,
    homeAddress: {
      street: "742 Evergreen Terrace",
      city: "Phoenix",
      state: "AZ",
      zipcode: "85032",
    },
    primaryEmail: "huan.wang@example.com",
    primaryPhone: "(602) 555-0184",
    dateOfBirth: "1984-03-12",
    customerSince: "2019-04-02",
  },

  insured: {
    primaryNamedInsured: "Huan Wang",
    coInsured: "Mei Wang",
    relationship: "Spouse",
    mailingAddress: {
      street: "742 Evergreen Terrace",
      city: "Phoenix",
      state: "AZ",
      zipcode: "85032",
    },
  },

  property: {
    locationAddress: {
      street: "742 Evergreen Terrace",
      city: "Phoenix",
      state: "AZ",
      zipcode: "85032",
    },
    yearBuilt: 2004,
    squareFootage: 2840,
    stories: 2,
    constructionType: "Masonry / Frame",
    roofType: "Architectural Shingle",
    roofYear: 2018,
    occupancy: "Owner Occupied",
    dwellingUse: "Primary Residence",
    numberOfUnits: 1,
    protectionClass: "3",
    fireDistrict: "Phoenix FD Station 24",
    distanceToFireStation: "1.2 mi",
    distanceToHydrant: "350 ft",
    foundationType: "Slab",
    garageType: "Attached, 2-Car",
    swimmingPool: "Yes — Fenced In-Ground",
    burglarAlarm: "Central Station",
    fireAlarm: "Central Station",
  },

  // Per-coverage detail: limits + allocated premium
  coverageDetail: [
    { code: "A", name: "Dwelling", limit: 691000, premium: 2284, deductible: 1000 },
    { code: "B", name: "Other Structures", limit: 138200, premium: 318, deductible: 1000 },
    { code: "C", name: "Personal Property", limit: 518250, premium: 742, deductible: 1000 },
    { code: "D", name: "Loss of Use", limit: 207300, premium: 196, deductible: null },
    { code: "E", name: "Personal Liability", limit: 300000, premium: 142, deductible: null },
    { code: "F", name: "Medical Payments to Others", limit: 5000, premium: 38, deductible: null },
  ],

  endorsements: [
    { code: "HO 04 90", name: "Personal Property Replacement Cost", limit: "Included", premium: 184 },
    { code: "HO 04 95", name: "Water Backup & Sump Overflow", limit: 10000, premium: 96 },
    { code: "HO 05 24", name: "Identity Fraud Expense Coverage", limit: 15000, premium: 35 },
    { code: "HO 04 16", name: "Premises Alarm or Fire Protection System", limit: "Credit", premium: -68 },
    { code: "HO 04 81", name: "Actual Cash Value Loss Settlement — Roof", limit: "Applies", premium: 0 },
  ],

  deductibleDetail: [
    { name: "All Other Perils (AOP)", value: "$1,000" },
    { name: "Wind / Hail", value: "2% of Coverage A ($13,820)" },
    { name: "Hurricane", value: "Not Applicable" },
  ],

  // Term financials
  financials: {
    totalPremium: 4307,
    basePremium: 3984,
    endorsementPremium: 247,
    taxesAndFees: 76,
    earnedPremium: 1063.21,
    writtenPremium: 4307,
    totalIncurred: 0,
    lossRatio: "0.0%",
    commission: 430.7,
  },

  // Billing
  billing: {
    planType: "Mortgagee Bill — Escrow",
    payer: "Bayland Mortgage, LLC",
    paymentMethod: "Escrow Disbursement",
    paidToDate: 4307,
    balanceDue: 0,
    nextDueDate: "2026-06-21",
    nextDueAmount: 0,
    accountCurrent: true,
    invoices: [
      { invoiceNumber: "INV-100348821", dueDate: "2025-06-21", amount: 4307, status: "Paid", paidDate: "2025-06-18" },
      { invoiceNumber: "INV-100201145", dueDate: "2024-06-21", amount: 4118, status: "Paid", paidDate: "2024-06-19" },
    ],
  },

  documents: [
    { name: "Declarations Page", type: "Policy Declaration", form: "DEC-HO3", date: "2025-06-21", size: "284 KB" },
    { name: "Homeowners Policy Jacket", type: "Policy Form", form: "HO 00 03 10 00", date: "2025-06-21", size: "1.2 MB" },
    { name: "Mortgagee Clause Endorsement", type: "Endorsement", form: "HO 06 10", date: "2025-06-21", size: "96 KB" },
    { name: "Water Backup Endorsement", type: "Endorsement", form: "HO 04 95", date: "2025-06-21", size: "88 KB" },
    { name: "Premium Notice", type: "Billing", form: "BILL-NTC", date: "2025-06-18", size: "64 KB" },
    { name: "Evidence of Insurance", type: "Certificate", form: "EOI-2025", date: "2025-06-21", size: "72 KB" },
  ],

  contacts: [
    { name: "Huan Wang", role: "Primary Named Insured", phone: "(602) 555-0184", email: "huan.wang@example.com" },
    { name: "Mei Wang", role: "Co-Insured", phone: "(602) 555-0185", email: "mei.wang@example.com" },
    { name: "Marcus Webb", role: "Producer / Agent", phone: "(480) 555-0110", email: "mwebb@gorillains.com" },
    { name: "Elizabeth Nyugen", role: "Underwriter", phone: "(800) 555-0190", email: "enyugen@stradapc.com" },
    { name: "Bayland Mortgage, LLC", role: "Mortgagee / Lienholder", phone: "(843) 555-0177", email: "loanservicing@baylandmortgage.com" },
  ],

  notes: [
    { author: "Elizabeth Nyugen", date: "2025-06-19", text: "Roof inspection report received. Architectural shingle, replaced 2018 — acceptable for preferred tier." },
    { author: "Marcus Webb", date: "2025-06-14", text: "Customer requested Water Backup endorsement added at renewal. Bound HO 04 95 at $10,000 limit." },
    { author: "System", date: "2025-06-21", text: "Policy issued. Declarations and forms packet generated and mailed to insured and mortgagee." },
  ],
}

export const userData = {
  name: "Strada",
  email: "demo@getstrada.com",
  initials: "ST",
}

// Helper function to format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Currency with cents (for financials)
export function formatCurrencyCents(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

// Helper function to format date
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

// Short numeric date (MM/DD/YYYY)
export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  })
}
