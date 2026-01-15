"use client"

import { BarChart3, Users } from "lucide-react"

export default function Sidebar({ currentPage, setCurrentPage, isOpen }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "merchants", label: "Merchants", icon: Users },
  ]

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col`}
    >
      {/* Logo */}
      <div className="h-16 border-b border-sidebar-border flex items-center justify-center px-4">
        <div className={`flex items-center gap-2 ${!isOpen && "justify-center"}`}>
          <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-sidebar-primary-foreground">A</span>
          </div>
          {isOpen && <span className="font-bold text-sidebar-foreground truncate">Axipays</span>}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className={`border-t border-sidebar-border p-4 ${!isOpen && "flex justify-center"}`}>
        <div className="text-xs text-sidebar-foreground/60">{isOpen && <p>v1.0.0</p>}</div>
      </div>
    </aside>
  )
}
