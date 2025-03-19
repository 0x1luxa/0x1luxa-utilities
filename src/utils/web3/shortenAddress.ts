/**
 * Shortens an address to a specified number of characters.
 * @param address - The address to shorten.
 * @param chars - The number of characters to shorten the address to.
 * @returns The shortened address.
 */
export function shortenAddress(address: string, chars = 4): string {
  if (address.length > 24) {
    return `${address.slice(
      0,
      Math.max(0, chars + 2)
    )}...${address.slice(Math.max(0, address.length - chars))}`
  }

  return address
}
