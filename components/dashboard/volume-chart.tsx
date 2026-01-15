"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface VolumeChartProps {
  merchants: any[]
}

export default function VolumeChart({ merchants }: VolumeChartProps) {
  // Count merchants by risk level
  const data = [
    {
      name: "Low",
      count: merchants.filter((m) => m.riskLevel === "Low").length,
    },
    {
      name: "Medium",
      count: merchants.filter((m) => m.riskLevel === "Medium").length,
    },
    {
      name: "High",
      count: merchants.filter((m) => m.riskLevel === "High").length,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
        <XAxis dataKey="name" stroke="var(--color-muted-foreground)" />
        <YAxis stroke="var(--color-muted-foreground)" />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--color-card)",
            border: `1px solid var(--color-border)`,
            borderRadius: "8px",
          }}
        />
        <Bar dataKey="count" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
