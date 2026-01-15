"use client"

import Badge from "../common/Badge"
import { ChevronRight } from "lucide-react"

export default function MerchantTable({ merchants, onSelectMerchant }) {
  if (merchants.length === 0) {
    return (
      <div className="bg-card rounded-lg border border-border p-12 text-center">
        <p className="text-muted-foreground">No merchants found. Try adjusting your filters.</p>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Country</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Monthly Volume</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Chargeback Ratio</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Risk Level</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {merchants.map((merchant) => (
              <tr
                key={merchant.id}
                className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                onClick={() => onSelectMerchant(merchant)}
              >
                <td className="px-6 py-4 text-sm font-medium text-foreground">{merchant.name}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{merchant.country}</td>
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      merchant.status === "Active"
                        ? "success"
                        : merchant.status === "Paused"
                          ? "warning"
                          : "destructive"
                    }
                  >
                    {merchant.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-sm text-foreground">${(merchant.monthlyVolume / 1000).toFixed(1)}K</td>
                <td className="px-6 py-4 text-sm text-foreground">{merchant.chargebackRatio.toFixed(2)}%</td>
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      merchant.riskLevel === "Low"
                        ? "success"
                        : merchant.riskLevel === "Medium"
                          ? "warning"
                          : "destructive"
                    }
                  >
                    {merchant.riskLevel}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-right">
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
