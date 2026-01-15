"use client"

import Modal from "../common/Modal"
import Badge from "../common/Badge"
import Button from "../common/Button"

export default function MerchantDetailModal({ merchant, onClose, onEdit, onSave }) {
  return (
    <Modal onClose={onClose} title={merchant.name}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Country</p>
            <p className="font-medium text-foreground">{merchant.country}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <Badge variant={merchant.status === "Active" ? "success" : "destructive"}>{merchant.status}</Badge>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Monthly Volume</p>
            <p className="font-medium text-foreground">${(merchant.monthlyVolume / 1000).toFixed(1)}K</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Chargeback Ratio</p>
            <p className="font-medium text-foreground">{merchant.chargebackRatio.toFixed(2)}%</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Risk Level</p>
            <Badge variant={merchant.riskLevel === "Low" ? "success" : "destructive"}>{merchant.riskLevel}</Badge>
          </div>
        </div>
        <div className="flex gap-3 pt-4">
          <Button onClick={onEdit} className="flex-1">
            Edit
          </Button>
          <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
            Close
          </Button>
        </div>
      </div>
    </Modal>
  )
}
