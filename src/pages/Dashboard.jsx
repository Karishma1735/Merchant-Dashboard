import { useMerchants } from "../hooks/useMerchants"
import SummaryCard from "../components/dashboard/SummaryCard"
import VolumeChart from "../components/dashboard/VolumeChart"
import { DollarSign, TrendingUp, Users } from "lucide-react"

export default function Dashboard() {
  const { merchants } = useMerchants()

  // Calculate metrics
  const totalVolume = merchants.reduce((sum, m) => sum + m.monthlyVolume, 0)
  const activeMerchants = merchants.filter((m) => m.status === "Active").length
  const avgSuccessRate =
    merchants.length > 0
      ? (merchants.reduce((sum, m) => sum + (100 - m.chargebackRatio), 0) / merchants.length).toFixed(1)
      : "0"

  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Total Monthly Volume"
          value={`$${(totalVolume / 1000).toFixed(1)}K`}
          icon={DollarSign}
          trend={5.2}
        />
        <SummaryCard title="Average Success Rate" value={`${avgSuccessRate}%`} icon={TrendingUp} trend={2.1} />
        <SummaryCard title="Active Merchants" value={activeMerchants.toString()} icon={Users} trend={8.3} />
      </div>

      {/* Chart */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Merchant Count by Risk Level</h2>
        <VolumeChart merchants={merchants} />
      </div>
    </div>
  )
}
