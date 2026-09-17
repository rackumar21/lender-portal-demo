/* Client-side persistence for lienholder edits.
 * Mirrors the AMS demo: edits survive navigation and reload, and are scoped
 * to the browser so every demo run starts from whatever was last saved.
 * Clear with: localStorage.removeItem("lender-portal-lienholders") */

export interface Lienholder {
  name: string
  loanNumber: string
  street: string
  street2: string
  city: string
  state: string
  zipcode: string
}

const STORAGE_KEY = "lender-portal-lienholders"

export function readLienholders(): Lienholder[] | null {
  if (typeof window === "undefined") return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Lienholder[]) : null
  } catch {
    return null
  }
}

export function writeLienholders(lienholders: Lienholder[]) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lienholders))
  } catch {
    /* Private browsing or quota exceeded — the edit still shows for this session. */
  }
}
