import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export default function VolumeChart({ merchants }) {
  // Count merchants by risk level
  const data = [
    {
      name: "Low",
      value: merchants.filter((m) => m.riskLevel === "Low").length,
    },
    {
      name: "Medium",
      value: merchants.filter((m) => m.riskLevel === "Medium").length,
    },
    {
      name: "High",
      value: merchants.filter((m) => m.riskLevel === "High").length,
    },
  ]

  const COLORS = ["#10b981", "#f59e0b", "#ef4444"]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
