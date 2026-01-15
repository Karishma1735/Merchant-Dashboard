"use client"

import { useState } from "react"
import Sidebar from "./components/layout/Sidebar"
import Topbar from "./components/layout/Topbar"
import Dashboard from "./pages/Dashboard"
import Merchants from "./pages/Merchants"
import "./App.css"

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard")
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
