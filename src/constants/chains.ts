/**
 * Maps chain IDs to their corresponding names.
 */
export const CHAIN_NAMES_BY_ID = {
  1: "Ethereum",
  10: "Optimism",
  42_161: "Arbitrum",
  137: "Polygon",
  43_114: "Avalanche",
  8453: "Base",
  5000: "Mantle",
  56: "Binance",
  1088: "Metis",
  2222: "Kava",
  8217: "Klaytn",
  8822: "IOTA",
  1_380_012_617: "RARI",
  14: "Flare",
  1625: "Gravity Alpha",
  167_000: "Taiko",
  1329: "Sei",
  534_352: "Scroll",
  1_313_161_554: "Aurora",
} as const

/**
 * Maps chain names to their corresponding IDs.
 */
export const CHAIN_IDS_BY_NAME = {
  Ethereum: 1,
  Optimism: 10,
  Arbitrum: 42_161,
  Polygon: 137,
  Avalanche: 43_114,
  Base: 8453,
  Mantle: 5000,
  Bsc: 56,
  Metis: 1088,
  Kava: 2222,
  Kaia: 8217,
  IOTA: 8822,
  RARI: 1_380_012_617,
  Flare: 14,
  GravityAlpha: 1625,
  Taiko: 167_000,
  Sei: 1329,
  Scroll: 534_352,
  Aurora: 1_313_161_554,
} as const

/**
 * Maps chain IDs to their corresponding EIDs.
 * ```
 * Ethereum 1 => 30_101
 * BNB Chain 56 => 30_102
 * Polygon 137 => 30_109
 * Arbitrum 42_161 => 30_110
 * Optimism 10 => 30_111
 * Metis 1088 => 30_151
 * Mantle 5000 => 30_181
 * Base 8453 => 30_184
 * Kava 2222 => 30_177
 * Klaytn 8217 => 30_150
 * IOTA 8822 => 30_284
 * RARI 1_380_012_617 => 30_235
 * Flare 14 => 30_295
 * Gravity Alpha 1625 => 30_294
 * Taiko 167_000 => 30_290
 * Sei 1329 => 30_280
 * Scroll 534_352 => 30_214
 * Aurora 1_313_161_554 => 30_211
 * ```
 */
export const EIDS_BY_CHAIN_ID = {
  1: 30_101, // Ethereum
  56: 30_102, // BNB Chain
  137: 30_109, // Polygon
  42_161: 30_110, // Arbitrum
  10: 30_111, // Optimism
  1088: 30_151, // Metis
  5000: 30_181, // Mantle
  8453: 30_184, // Base
  2222: 30_177, // Kava
  8217: 30_150, // Klaytn
  8822: 30_284, // IOTA
  1_380_012_617: 30_235, // RARI
  14: 30_295, // Flare
  1625: 30_294, // Gravity Alpha
  167_000: 30_290, // Taiko
  1329: 30_280, // Sei
  534_352: 30_214, // Scroll
  1_313_161_554: 30_211, // Aurora
} as const

/**
 * Maps chain IDs to their corresponding scan links.
 */
export const SCAN_LINK_BY_CHAIN_ID = {
  1: "https://etherscan.io/",
  42_161: "https://arbiscan.io/",
  137: "https://polygonscan.com/",
  10: "https://optimistic.etherscan.io/",
  1329: "https://seitrace.com/",
  43_114: "https://snowtrace.io/",
  56: "https://bscscan.com/",
  8453: "https://basescan.org/",
  5000: "https://explorer.mantle.xyz/",
  1088: "https://explorer.metis.io/",
  2222: "https://explorer.kava.io/",
  8217: "https://explorer.kaia.io/",
  8822: "https://explorer.iota.org/",
  1_380_012_617: "https://explorer.rarible.org/",
  14: "https://flare.flarescan.com/",
  1625: "https://explorer.gravity.xyz/",
  167_000: "https://explorer.taiko.xyz/",
  534_352: "https://scroll.io/",
  1_313_161_554: "https://explorer.aurora.dev/",
} as const

/**
 * Maps chain IDs to their corresponding scan address paths.
 */
export const SCAN_ADDRESS_PATH_BY_CHAIN_ID = {
  1: "address/",
  42_161: "address/",
  137: "address/",
  10: "address/",
  1329: "address/",
  43_114: "address/",
  56: "address/",
  8453: "address/",
  5000: "address/",
  1088: "address/",
  2222: "address/",
  8217: "address/",
  8822: "address/",
  1_380_012_617: "address/",
  14: "address/",
  1625: "address/",
  167_000: "address/",
  534_352: "address/",
  1_313_161_554: "address/",
} as const

/**
 * Maps chain IDs to their corresponding scan transaction paths.
 */
export const SCAN_TX_PATH_BY_CHAIN_ID = {
  1: "tx/",
  42_161: "tx/",
  137: "tx/",
  10: "tx/",
  1329: "tx/",
  43_114: "tx/",
  56: "tx/",
  8453: "tx/",
  5000: "tx/",
  1088: "tx/",
  2222: "tx/",
  8217: "tx/",
  8822: "tx/",
  1_380_012_617: "tx/",
  14: "tx/",
  1625: "tx/",
  167_000: "tx/",
  534_352: "tx/",
  1_313_161_554: "tx/",
} as const
