"use client"

import { useState } from "react"
import Modal from "../common/Modal"
import Input from "../common/Input"
import Select from "../common/Select"
import Button from "../common/Button"
import { validateMerchant } from "../../utils/validations"

export default function MerchantForm({ merchant, onSave, onClose }) {
  const [formData, setFormData] = useState(
    merchant || {
      name: "",
      country: "",
      monthlyVolume: "",
      chargebackRatio: "",
      status: "Active",
      riskLevel: "Low",
    },
  )
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const validation = validateMerchant(formData)
    if (!validation.valid) {
      setErrors(validation.errors)
      return
    }
    onSave({
      ...formData,
      monthlyVolume: Number.parseInt(formData.monthlyVolume),
      chargebackRatio: Number.parseFloat(formData.chargebackRatio),
    })
  }

  return (
    <Modal onClose={onClose} title={merchant ? "Edit Merchant" : "Add Merchant"}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          placeholder="Enter merchant name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          required
        />
        <Input
          label="Country"
          placeholder="Enter country"
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          error={errors.country}
          required
        />
        <Input
          label="Monthly Volume ($)"
          type="number"
          placeholder="Enter monthly volume"
          value={formData.monthlyVolume}
          onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
          error={errors.monthlyVolume}
          required
        />
        <Input
          label="Chargeback Ratio (%)"
          type="number"
          placeholder="Enter chargeback ratio"
          value={formData.chargebackRatio}
          onChange={(e) => setFormData({ ...formData, chargebackRatio: e.target.value })}
          error={errors.chargebackRatio}
          step="0.01"
          required
        />
        <Select
          label="Status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          options={[
            { value: "Active", label: "Active" },
            { value: "Paused", label: "Paused" },
            { value: "Blocked", label: "Blocked" },
          ]}
        />
        <Select
          label="Risk Level"
          value={formData.riskLevel}
          onChange={(e) => setFormData({ ...formData, riskLevel: e.target.value })}
          options={[
            { value: "Low", label: "Low" },
            { value: "Medium", label: "Medium" },
            { value: "High", label: "High" },
          ]}
        />
        <div className="flex gap-3 pt-4">
          <Button type="submit" className="flex-1">
            {merchant ? "Update" : "Add"} Merchant
          </Button>
          <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  )
}
