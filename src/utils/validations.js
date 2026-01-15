export function validateMerchant(data) {
  const errors = {}

  if (!data.name || data.name.length < 3) {
    errors.name = "Name must be at least 3 characters"
  }

  if (!data.country) {
    errors.country = "Country is required"
  }

  if (!data.monthlyVolume || Number.parseInt(data.monthlyVolume) <= 0) {
    errors.monthlyVolume = "Monthly volume must be greater than 0"
  }

  if (data.chargebackRatio === "" || Number.parseFloat(data.chargebackRatio) < 0) {
    errors.chargebackRatio = "Chargeback ratio must be valid"
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
