"use client"

import Input from "../common/Input"
import Select from "../common/Select"

export default function MerchantFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  riskFilter,
  setRiskFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="bg-card rounded-lg border border-border p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Input placeholder="Search merchants..." value={search} onChange={(e) => setSearch(e.target.value)} />
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
            { value: "all", label: "All Levels" },
            { value: "Low", label: "Low" },
            { value: "Medium", label: "Medium" },
            { value: "High", label: "High" },
          ]}
        />
        <Select
          label="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          options={[
            { value: "volume", label: "Volume" },
            { value: "chargeback", label: "Chargeback Ratio" },
          ]}
        />
      </div>
    </div>
  )
}
