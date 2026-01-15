"use client"

import Input from "@/components/common/input"
import Select from "@/components/common/select"
import { Search } from "lucide-react"

interface MerchantFiltersProps {
  search: string
  setSearch: (value: string) => void
  statusFilter: string
  setStatusFilter: (value: string) => void
  riskFilter: string
  setRiskFilter: (value: string) => void
  sortBy: "volume" | "chargeback"
  setSortBy: (value: "volume" | "chargeback") => void
}

export default function MerchantFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  riskFilter,
  setRiskFilter,
  sortBy,
  setSortBy,
}: MerchantFiltersProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2">
          <Input
            placeholder="Search merchants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={Search}
          />
        </div>
        <Select
          label="Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          options={[
            { value: "all", label: "All Status" },
            { value: "Active", label: "Active" },
            { value: "Paused", label: "Paused" },
            { value: "Blocked", label: "Blocked" },
          ]}
        />
        <Select
          label="Risk Level"
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
          options={[
            { value: "all", label: "All Risks" },
            { value: "Low", label: "Low" },
            { value: "Medium", label: "Medium" },
            { value: "High", label: "High" },
          ]}
        />
        <Select
          label="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "volume" | "chargeback")}
          options={[
            { value: "volume", label: "Monthly Volume" },
            { value: "chargeback", label: "Chargeback Ratio" },
          ]}
        />
      </div>
    </div>
  )
}
