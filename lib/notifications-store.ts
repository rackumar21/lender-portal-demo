/* Tiny client-side notification store.
 * TopNav and the policy sections are siblings with no shared parent state, so
 * this is a module-level store they both subscribe to via useSyncExternalStore.
 * Persisted so a notification survives reload, same as the lienholder edits. */

export interface AppNotification {
  id: string
  title: string
  body: string
  /* ISO string. Stored rather than derived so the list survives a reload. */
  timestamp: string
  read: boolean
}

const STORAGE_KEY = "lender-portal-notifications"

let notifications: AppNotification[] = []
let hydrated = false
const listeners = new Set<() => void>()

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications))
  } catch {
    /* Private browsing or quota exceeded — the list still works in-session. */
  }
}

function emit() {
  listeners.forEach((l) => l())
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return
  hydrated = true
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) notifications = JSON.parse(raw) as AppNotification[]
  } catch {
    notifications = []
  }
}

export function subscribe(listener: () => void) {
  hydrate()
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function getSnapshot(): AppNotification[] {
  hydrate()
  return notifications
}

/* Stable empty array so the server snapshot never trips React's identity check. */
const SERVER_SNAPSHOT: AppNotification[] = []
export function getServerSnapshot(): AppNotification[] {
  return SERVER_SNAPSHOT
}

export function notify(title: string, body: string) {
  hydrate()
  notifications = [
    {
      id: `${Date.now()}-${notifications.length}`,
      title,
      body,
      timestamp: new Date().toISOString(),
      read: false,
    },
    ...notifications,
  ]
  persist()
  emit()
}

export function markAllRead() {
  hydrate()
  if (!notifications.some((n) => !n.read)) return
  notifications = notifications.map((n) => ({ ...n, read: true }))
  persist()
  emit()
}

export function clearAll() {
  hydrate()
  notifications = []
  persist()
  emit()
}
