"use client"

import { useState } from "react"
import Modal from "@/components/common/modal"
import Badge from "@/components/common/badge"
import Button from "@/components/common/button"
import Select from "@/components/common/select"
import { AlertCircle } from "lucide-react"

interface MerchantDetailModalProps {
  merchant: any
  onClose: () => void
  onEdit: () => void
  onSave: (id: string, data: any) => void
}

export default function MerchantDetailModal({ merchant, onClose, onEdit, onSave }: MerchantDetailModalProps) {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(merchant.status)
  const [riskLevel, setRiskLevel] = useState(merchant.riskLevel)
  const [showConfirm, setShowConfirm] = useState(false)

  const chargebackWarning = merchant.chargebackRatio > 2 && merchant.status === "Active"
  const riskConfirm = status === "Active" && riskLevel === "High"

  const handleSave = () => {
    if (riskConfirm) {
      setShowConfirm(true)
    } else {
      onSave(merchant.id, { status, riskLevel })
      setEditMode(false)
    }
  }

  return (
    <Modal onClose={onClose} title="Merchant Details">
      <div className="space-y-6">
        {/* Warning Messages */}
        {chargebackWarning && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-900">High Chargeback Ratio</p>
              <p className="text-sm text-yellow-800">
                This merchant has a chargeback ratio of {merchant.chargebackRatio.toFixed(2)}% (above 2% threshold)
              </p>
            </div>
          </div>
        )}

        {showConfirm && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900">Confirm High Risk Activation</p>
              <p className="text-sm text-red-800">
                You are about to set an active merchant with high risk level. Proceed?
              </p>
              <div className="flex gap-2 mt-2">
                <Button
                  size="sm"
                  onClick={() => {
                    onSave(merchant.id, { status, riskLevel })
                    setEditMode(false)
                    setShowConfirm(false)
                  }}
                >
                  Confirm
                </Button>
                <Button size="sm" variant="outline" onClick={() => setShowConfirm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Name</p>
            <p className="font-semibold text-foreground">{merchant.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Country</p>
            <p className="font-semibold text-foreground">{merchant.country}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Monthly Volume</p>
            <p className="font-semibold text-foreground">${(merchant.monthlyVolume / 1000).toFixed(1)}K</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Chargeback Ratio</p>
            <p className="font-semibold text-foreground">{merchant.chargebackRatio.toFixed(2)}%</p>
          </div>
        </div>

        {/* Editable Fields */}
        <div className="border-t border-border pt-4 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Status</label>
            {editMode ? (
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                options={[
                  { value: "Active", label: "Active" },
                  { value: "Paused", label: "Paused" },
                  { value: "Blocked", label: "Blocked" },
                ]}
              />
            ) : (
              <Badge
                variant={
                  merchant.status === "Active" ? "success" : merchant.status === "Paused" ? "warning" : "destructive"
                }
              >
                {merchant.status}
              </Badge>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Risk Level</label>
            {editMode ? (
              <Select
                value={riskLevel}
                onChange={(e) => setRiskLevel(e.target.value)}
                options={[
                  { value: "Low", label: "Low" },
                  { value: "Medium", label: "Medium" },
                  { value: "High", label: "High" },
                ]}
              />
            ) : (
              <Badge
                variant={
                  merchant.riskLevel === "Low" ? "success" : merchant.riskLevel === "Medium" ? "warning" : "destructive"
                }
              >
                {merchant.riskLevel}
              </Badge>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-border">
          {editMode ? (
            <>
              <Button onClick={handleSave} className="flex-1">
                Save Changes
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setEditMode(false)
                  setStatus(merchant.status)
                  setRiskLevel(merchant.riskLevel)
                }}
                className="flex-1"
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => setEditMode(true)} className="flex-1">
                Edit Status & Risk
              </Button>
              <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
                Close
              </Button>
            </>
          )}
        </div>
      </div>
    </Modal>
  )
}
