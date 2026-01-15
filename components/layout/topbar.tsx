"use client"

import { Menu } from "lucide-react"

interface TopbarProps {
  onMenuClick: () => void
  currentPage: string
}

export default function Topbar({ onMenuClick, currentPage }: TopbarProps) {
  const pageTitle =
    {
      dashboard: "Dashboard",
      merchants: "Merchants Management",
    }[currentPage as keyof typeof pageTitle] || "Dashboard"

  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-accent rounded-lg transition-colors text-foreground"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold text-foreground">{pageTitle}</h1>
      </div>
    </header>
  )
}
