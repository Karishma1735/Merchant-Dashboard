"use client"

import { useState, useCallback } from "react"
import {
  getMerchants as loadMerchants,
  addMerchant as addToMerchants,
  updateMerchant as updateInMerchants,
} from "../data/merchants"

export function useMerchants() {
  const [merchants, setMerchants] = useState(loadMerchants())

  const addMerchant = useCallback((data) => {
    const newMerchant = addToMerchants(data)
    setMerchants(loadMerchants())
  }, [])

  const updateMerchant = useCallback((id, data) => {
    updateInMerchants(id, data)
    setMerchants(loadMerchants())
  }, [])

  return {
    merchants,
    addMerchant,
    updateMerchant,
  }
}
