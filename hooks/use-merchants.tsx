"use client"

import { useState, useEffect } from "react"
import { getMerchants, addMerchant as apiAddMerchant, updateMerchant as apiUpdateMerchant } from "@/data/merchants"

export function useMerchants() {
  const [merchants, setMerchants] = useState<any[]>([])

  useEffect(() => {
    setMerchants(getMerchants())
  }, [])

  const addMerchant = (data: any) => {
    const newMerchant = apiAddMerchant(data)
    setMerchants(getMerchants())
  }

  const updateMerchant = (id: string, data: any) => {
    apiUpdateMerchant(id, data)
    setMerchants(getMerchants())
  }

  return { merchants, addMerchant, updateMerchant }
}
