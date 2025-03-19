import BigNumber from "bignumber.js"

/**
 * Formats a value to a string with a currency symbol.
 * @param value - The value to format.
 * @param options - The options for the format.
 * @returns The formatted value.
 */
export const formatUsdValue = (
  value: string | number,
  options?: Intl.NumberFormatOptions
) => {
  const parsedValue = Number.parseFloat(value.toString())
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    ...options,
  }).format(parsedValue)
}

/**
 * Formats a value to a string with a percentage symbol.
 * @param value - The value to format.
 * @param options - The options for the format.
 * @returns The formatted value.
 */
export const formatPercentValue = (
  value: string | number,
  options?: Intl.NumberFormatOptions
) => {
  const parsedValue = Number.parseFloat(value.toString())
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
    ...options,
  }).format(parsedValue)
}

/**
 * Formats a value to a string.
 * @param value - The value to format.
 * @param options - The options for the format.
 * @returns The formatted value.
 */
export const formatAmount = (
  value: string | number,
  options?: Intl.NumberFormatOptions
) => {
  if (!value && value !== 0) return ""

  const parsedValue = Number.parseFloat(value.toString())
  if (
    parsedValue !== 0 &&
    parsedValue < 0.001 &&
    parsedValue > -0.001
  ) {
    if (parsedValue > 0) {
      return "<0.001"
    } else {
      return "-<0.001"
    }
  }
  return new Intl.NumberFormat("en-US", {
    roundingMode: "floor",
    ...options,
  }).format(parsedValue)
}

export const cropValue = (
  value?: string | number | BigNumber,
  precision = 6
): string => {
  if (!value) return "0"
  const bigNumber = new BigNumber(value)

  // If the number is zero, return "0"
  if (bigNumber.isZero()) {
    return "0"
  }
  // For all other numbers, use toFixed with dynamic precision
  const integerDigits = bigNumber
    .abs()
    .integerValue()
    .toString().length
  const decimalPlaces = Math.max(0, precision - integerDigits)

  return bigNumber
    .toFixed(decimalPlaces, BigNumber.ROUND_DOWN)
    .replace(/\.0+$/, "")
    .replace(/([,.]\d*?[1-9])0+$/, "$1")
    .replace(/[,.]0*$/, "")
    .replace(/(\.\d*?[1-9])0+$/, "$1")
}
