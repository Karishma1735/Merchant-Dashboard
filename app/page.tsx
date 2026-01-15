"use client"

import { useState } from "react"
import Sidebar from "@/components/layout/sidebar"
import Topbar from "@/components/layout/topbar"
import Dashboard from "@/components/pages/dashboard"
import Merchants from "@/components/pages/merchants"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"dashboard" | "merchants">("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} currentPage={currentPage} />
        <main className="flex-1 overflow-auto bg-background">
          {currentPage === "dashboard" && <Dashboard />}
          {currentPage === "merchants" && <Merchants />}
        </main>
      </div>
    </div>
  )
}
