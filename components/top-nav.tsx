"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { ShieldCheck, ChevronDown, Search, Settings, Bell, LogOut } from "lucide-react"
import { policyData, userData } from "@/lib/policy-data"
import {
  subscribe as subscribeNotifications,
  getSnapshot as getNotifications,
  getServerSnapshot as getServerNotifications,
  markAllRead,
  clearAll,
} from "@/lib/notifications-store"

const NAV_MENUS = [
  "File", "Edit", "Areas", "Home", "Locate", "Actions", "Real-Time",
  "On Demand", "Access", "Links", "SMS", "Help"
]

interface TopNavProps {
  onLogout: () => void
}

export function TopNav({ onLogout }: TopNavProps) {
  return (
    <header className="bg-card border-b border-border">
      {/* Top row: brand + menus + utilities */}
      <div className="flex items-center gap-1 px-2 h-10 overflow-x-auto">
        <div className="flex items-center gap-1.5 shrink-0">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span className="text-xs font-semibold text-foreground tracking-tight whitespace-nowrap">
            StradaHub
          </span>
        </div>

        <nav className="flex items-center gap-0 flex-1">
          {NAV_MENUS.map((menu) => {
            const isActive = menu === "Policy"
            const hasCaret = !["Search", "SMS"].includes(menu)
            return (
              <button
                key={menu}
                className={`flex items-center gap-0.5 px-2 py-0.5 rounded-none text-xs transition-colors hover:bg-secondary whitespace-nowrap shrink-0 ${
                  isActive ? "text-primary font-bold underline underline-offset-2" : "text-foreground"
                }`}
              >
                {menu}
                {hasCaret && <ChevronDown className="w-2.5 h-2.5 text-muted-foreground" />}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-0.5 shrink-0">
          <NotificationBell />
          <button
            className="p-1 rounded-none text-muted-foreground hover:bg-secondary hover:text-foreground"
            aria-label="Settings"
          >
            <Settings className="w-3.5 h-3.5" />
          </button>
          <div className="relative hidden sm:block">
            <Search className="absolute left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="h-6 w-32 rounded-none border border-border bg-background pl-6 pr-2 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <div className="flex items-center gap-0.5 pl-1.5 ml-0.5 border-l border-border">
            <div className="w-6 h-6 bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-semibold">
              {userData.initials}
            </div>
            <button
              onClick={onLogout}
              className="p-1 rounded-none text-muted-foreground hover:bg-secondary hover:text-foreground"
              aria-label="Sign out"
              title="Sign out"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Context breadcrumb bar */}
      <div className="flex items-center gap-x-3 gap-y-0.5 flex-wrap px-3 py-1.5 border-t border-border bg-secondary/30 text-xs">
        <span className="flex items-center gap-1 text-foreground font-semibold">
          <ShieldCheck className="w-3 h-3 text-primary" />
          Policy File
        </span>
        <span className="text-muted-foreground text-xs">{policyData.product}</span>
        <span className="text-foreground font-medium text-xs">{policyData.insured.primaryNamedInsured}</span>
        <span className="text-muted-foreground text-xs">
          Account # <span className="text-primary font-semibold text-xs">{policyData.account.accountNumber}</span>
        </span>
        <span className="text-muted-foreground text-xs">
          Policy # <span className="text-foreground font-medium text-xs">{policyData.policyNumber}</span>
        </span>
        <span className="text-muted-foreground text-xs">
          {policyData.statusLabel} (Exp. {new Date(policyData.expirationDate).toLocaleDateString("en-US")})
        </span>
      </div>
    </header>
  )
}

function NotificationBell() {
  const notifications = useSyncExternalStore(
    subscribeNotifications,
    getNotifications,
    getServerNotifications,
  )
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const unread = notifications.filter((n) => !n.read).length

  // Close on outside click so the panel doesn't trap a browser agent mid-run.
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [open])

  const toggle = () => {
    const next = !open
    setOpen(next)
    if (next) markAllRead()
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={toggle}
        data-testid="notifications-button"
        data-unread-count={unread}
        aria-label={unread ? `Notifications, ${unread} unread` : "Notifications"}
        className="relative p-1 rounded-none text-muted-foreground hover:bg-secondary hover:text-foreground"
      >
        <Bell className="w-3.5 h-3.5" />
        {unread > 0 && (
          <span
            data-testid="notifications-badge"
            className="absolute -top-0.5 -right-0.5 flex h-3 min-w-3 items-center justify-center bg-destructive px-0.5 text-[9px] font-bold leading-none text-white"
          >
            {unread}
          </span>
        )}
      </button>

      {open && (
        <div
          data-testid="notifications-panel"
          className="absolute right-0 top-full z-50 mt-1 w-72 border border-border bg-card shadow-lg"
        >
          <div className="flex items-center justify-between border-b border-border bg-secondary px-2 py-1">
            <span className="text-xs font-bold uppercase tracking-wide">Notifications</span>
            {notifications.length > 0 && (
              <button
                onClick={clearAll}
                data-testid="notifications-clear"
                className="text-xs font-bold text-primary hover:underline"
              >
                Clear
              </button>
            )}
          </div>
          {notifications.length === 0 ? (
            <p className="px-2 py-3 text-center text-xs text-muted-foreground">No notifications</p>
          ) : (
            <ul className="max-h-64 divide-y divide-border overflow-y-auto">
              {notifications.map((n) => (
                <li key={n.id} className="px-2 py-1.5">
                  <div className="text-xs font-bold text-foreground">{n.title}</div>
                  <div className="text-xs leading-snug text-muted-foreground">{n.body}</div>
                  <div className="mt-0.5 text-[10px] text-muted-foreground">
                    {new Date(n.timestamp).toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
