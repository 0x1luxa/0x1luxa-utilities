/**
 * Shortens a string to a specified number of characters.
 * @param parsed - The string to shorten.
 * @param chars - The number of characters to shorten the string to.
 * @returns The shortened string.
 */
export function shortenString(parsed: string, chars = 4): string {
  if (parsed.length > 24) {
    return `${parsed.slice(0, Math.max(0, chars))}...${parsed.slice(
      Math.max(0, parsed.length - chars)
    )}`
  }

  return parsed
}

/**
 * Capitalizes the first letter of a string.
 * @param string - The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalize = (string: string): string => {
  return string[0].toUpperCase() + string.slice(1)
}
