"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  FileText,
  Info,
  Shield,
  Landmark,
  Home,
  Receipt,
  Files,
  Users,
  LayoutDashboard,
  Wrench,
  ChevronDown,
  ListChecks,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type SectionId =
  | "summary"
  | "policy-info"
  | "coverages"
  | "mortgagee"
  | "property"
  | "billing"
  | "documents"
  | "contacts"

interface NavItem {
  id: SectionId
  label: string
  icon: LucideIcon
}

interface NavGroup {
  title: string
  icon: LucideIcon
  items: NavItem[]
}

const NAV_GROUPS: NavGroup[] = [
  {
    title: "Policy Contract",
    icon: FileText,
    items: [
      { id: "summary", label: "Summary", icon: LayoutDashboard },
      { id: "policy-info", label: "Policy Info", icon: Info },
      { id: "coverages", label: "Coverages", icon: Shield },
      { id: "mortgagee", label: "Mortgagee / Lienholders", icon: Landmark },
      { id: "property", label: "Property / Dwelling", icon: Home },
    ],
  },
  {
    title: "Documents & Admin",
    icon: Files,
    items: [
      { id: "documents", label: "Documents & Forms", icon: Files },
      { id: "billing", label: "Billing", icon: Receipt },
      { id: "contacts", label: "Contacts", icon: Users },
    ],
  },
  {
    title: "Additional",
    icon: ListChecks,
    items: [
      { id: "summary", label: "Forms", icon: FileText },
      { id: "documents", label: "Endorsements", icon: Files },
      { id: "billing", label: "Audit Trail", icon: Receipt },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { id: "summary", label: "Export", icon: FileText },
      { id: "documents", label: "Print", icon: Files },
      { id: "contacts", label: "Email", icon: Users },
    ],
  },
  {
    title: "Reports",
    icon: Receipt,
    items: [
      { id: "summary", label: "Loss History", icon: FileText },
      { id: "documents", label: "Claims", icon: Files },
      { id: "billing", label: "Activity Log", icon: Receipt },
    ],
  },
]

interface SidebarProps {
  activeSection: SectionId
  onSectionChange: (section: SectionId) => void
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    "Policy Contract": true,
    Tools: true,
  })

  const toggleGroup = (title: string) =>
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }))

  return (
    <aside className="w-56 shrink-0 bg-card border-r border-border flex flex-col overflow-hidden">
      {/* Actions header */}
      <div className="p-0.5">
        <button className="w-full flex items-center justify-between gap-1 bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground hover:bg-primary/90 transition-colors">
          Actions
          <ListChecks className="w-3.5 h-3.5" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-0.5 pb-0.5">
        {NAV_GROUPS.map((group) => {
          const isOpen = openGroups[group.title]
          const GroupIcon = group.icon
          return (
            <div key={group.title} className="mb-0">
              <button
                onClick={() => toggleGroup(group.title)}
                className="w-full flex items-center justify-between gap-1 px-2 py-0.5 text-xs font-bold text-foreground hover:bg-secondary"
              >
                <span className="flex items-center gap-0.5">
                  <GroupIcon className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="truncate">{group.title}</span>
                </span>
                <ChevronDown
                  className={cn("w-3 h-3 text-muted-foreground transition-transform text-xs shrink-0", !isOpen && "-rotate-90")}
                />
              </button>

              {isOpen && (
                <ul className="mt-0 space-y-0">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon
                    const isActive = activeSection === item.id
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => onSectionChange(item.id)}
                          className={cn(
                            "w-full flex items-center gap-1 pl-6 pr-1 py-0.5 text-xs text-left transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary font-bold"
                              : "text-foreground hover:bg-secondary/50",
                          )}
                        >
                          <ItemIcon className={cn("w-3 h-3 shrink-0", isActive ? "text-primary" : "text-muted-foreground")} />
                          <span className="truncate text-xs leading-3">{item.label}</span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
