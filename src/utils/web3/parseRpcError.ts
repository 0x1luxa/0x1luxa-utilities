/* eslint-disable @typescript-eslint/no-explicit-any */
import { Address, ContractFunctionExecutionError } from "viem"

/**
 * Parses a RPC error.
 * @param error - The error to parse.
 * @returns The parsed error.
 * Example with wagmi:
 * ```ts
 * const {error }= useWriteContract({
 *   onError: (error) => {
 *     const parsedError = parseRpcError(error)
 *     toast.error(parsedError.revertReason || "Transaction reverted")
 *   }
 * })
 * ```
 */
export const parseRpcError = (
  error: any
): {
  revertReason: string
  contractAddress: Address
  functionName: string
  args: any[]
} => {
  if (error instanceof ContractFunctionExecutionError) {
    const errorMessage = error.message

    const revertReason = errorMessage.match(
      /reason:\s*(.*?)\s*(\n|$)/
    )?.[1]

    const { contractAddress } = error
    const { functionName } = error
    const { args } = error

    return {
      revertReason: revertReason || "",
      contractAddress: contractAddress || ("" as Address),
      functionName: functionName || "",
      args: args || [],
    }
  }
  return {
    revertReason: error.message,
    contractAddress: "" as Address,
    functionName: "",
    args: [],
  }
}
