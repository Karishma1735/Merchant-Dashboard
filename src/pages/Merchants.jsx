"use client"

import { useState } from "react"
import { useMerchants } from "../hooks/useMerchants"
import MerchantTable from "../components/merchants/MerchantTable"
import MerchantFilters from "../components/merchants/MerchantFilters"
import MerchantForm from "../components/merchants/MerchantForm"
import MerchantDetailModal from "../components/merchants/MerchantDetailModal"
import Button from "../components/common/Button"
import { Plus } from "lucide-react"

export default function Merchants() {
  const { merchants, addMerchant, updateMerchant } = useMerchants()
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [riskFilter, setRiskFilter] = useState("all")
  const [showForm, setShowForm] = useState(false)
  const [selectedMerchant, setSelectedMerchant] = useState(null)
  const [editingMerchant, setEditingMerchant] = useState(null)
  const [sortBy, setSortBy] = useState("volume")

  // Filter and search logic
  const filtered = merchants.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || m.status === statusFilter
    const matchesRisk = riskFilter === "all" || m.riskLevel === riskFilter
    return matchesSearch && matchesStatus && matchesRisk
  })

  // Sort
  filtered.sort((a, b) => {
    if (sortBy === "volume") {
      return b.monthlyVolume - a.monthlyVolume
    } else {
      return b.chargebackRatio - a.chargebackRatio
    }
  })

  const handleSaveMerchant = (data) => {
    if (editingMerchant) {
      updateMerchant(editingMerchant.id, data)
      setEditingMerchant(null)
    } else {
      addMerchant(data)
    }
    setShowForm(false)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">Merchants</h2>
        <Button
          onClick={() => {
            setEditingMerchant(null)
            setShowForm(true)
          }}
          className="gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Merchant
        </Button>
      </div>

      {/* Filters */}
      <MerchantFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        riskFilter={riskFilter}
        setRiskFilter={setRiskFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Table */}
      <MerchantTable merchants={filtered} onSelectMerchant={setSelectedMerchant} />

      {/* Modals */}
      {showForm && (
        <MerchantForm
          merchant={editingMerchant}
          onSave={handleSaveMerchant}
          onClose={() => {
            setShowForm(false)
            setEditingMerchant(null)
          }}
        />
      )}

      {selectedMerchant && (
        <MerchantDetailModal
          merchant={selectedMerchant}
          onClose={() => setSelectedMerchant(null)}
          onEdit={() => {
            setEditingMerchant(selectedMerchant)
            setShowForm(true)
            setSelectedMerchant(null)
          }}
          onSave={updateMerchant}
        />
      )}
    </div>
  )
}
