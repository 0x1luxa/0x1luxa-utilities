import {
  SCAN_ADDRESS_PATH_BY_CHAIN_ID,
  SCAN_LINK_BY_CHAIN_ID,
} from "@/constants/chains"
import { Address } from "viem"

type ScanLinkProps = {
  hash: string
  address?: Address
  chainId: number
}

/**
 * Gets the scan link for a given hash and address.
 * @param hash - The hash to get the scan link for.
 * @param address - The address to get the scan link for.
 * @param chainId - The chain id to get the scan link for.
 * @returns The scan link.
 */
export const getScanLink = ({
  hash,
  address,
  chainId,
}: ScanLinkProps) => {
  return (
    SCAN_LINK_BY_CHAIN_ID[
      chainId as keyof typeof SCAN_LINK_BY_CHAIN_ID
    ] +
    SCAN_ADDRESS_PATH_BY_CHAIN_ID[
      chainId as keyof typeof SCAN_ADDRESS_PATH_BY_CHAIN_ID
    ] +
    (address || hash)
  )
}
