const merchants = [
  {
    id: "1",
    name: "TechFlow Inc",
    country: "United States",
    monthlyVolume: 250000,
    chargebackRatio: 0.8,
    status: "Active",
    riskLevel: "Low",
  },
  {
    id: "2",
    name: "Global Commerce Ltd",
    country: "United Kingdom",
    monthlyVolume: 185000,
    chargebackRatio: 1.5,
    status: "Active",
    riskLevel: "Low",
  },
  {
    id: "3",
    name: "European Traders",
    country: "Germany",
    monthlyVolume: 420000,
    chargebackRatio: 2.3,
    status: "Active",
    riskLevel: "Medium",
  },
  {
    id: "4",
    name: "Pacific Solutions",
    country: "Australia",
    monthlyVolume: 95000,
    chargebackRatio: 4.5,
    status: "Paused",
    riskLevel: "High",
  },
  {
    id: "5",
    name: "StartUp Ventures",
    country: "Canada",
    monthlyVolume: 65000,
    chargebackRatio: 3.2,
    status: "Active",
    riskLevel: "High",
  },
  {
    id: "6",
    name: "Asia Bridge Corp",
    country: "Singapore",
    monthlyVolume: 310000,
    chargebackRatio: 1.1,
    status: "Active",
    riskLevel: "Low",
  },
  {
    id: "7",
    name: "Blocked Merchants Inc",
    country: "Mexico",
    monthlyVolume: 150000,
    chargebackRatio: 5.8,
    status: "Blocked",
    riskLevel: "High",
  },
]

export function getMerchants() {
  return merchants
}

export function addMerchant(data) {
  const newMerchant = {
    id: Math.random().toString(),
    ...data,
  }
  merchants.push(newMerchant)
  return newMerchant
}

export function updateMerchant(id, data) {
  const index = merchants.findIndex((m) => m.id === id)
  if (index !== -1) {
    merchants[index] = { ...merchants[index], ...data }
  }
  return merchants[index]
}
