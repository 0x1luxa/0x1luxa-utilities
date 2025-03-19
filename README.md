# @0x1luxa/utils

A collection of utility functions for various common tasks, including formatting values, handling dates, and interacting with web3.

## Installation

To install the package, use npm:

```bash
npm install @0x1luxa/utils
```

## Usage

### Formatting Utilities

#### Format USD Value

Formats a number to a USD currency string.

```typescript
import { formatUsdValue } from "@0x1luxa/utils"

const formattedValue = formatUsdValue(1234.56)
console.log(formattedValue) // "$1,234.56"
```

#### Format Percent Value

Formats a number to a percentage string.

```typescript
import { formatPercentValue } from "@0x1luxa/utils"

const formattedPercent = formatPercentValue(0.1234)
console.log(formattedPercent) // "12.34%"
```

### Date Utilities

#### Get Days Ago

Calculates how many days ago a given date was.

```typescript
import { getDaysAgo } from "@0x1luxa/utils"

const daysAgo = getDaysAgo("2023-01-01")
console.log(daysAgo) // e.g., "9 months ago"
```

### Web3 Utilities

#### Shorten Address

Shortens an Ethereum address for display purposes.

```typescript
import { shortenAddress } from "@0x1luxa/utils"

const shortAddress = shortenAddress(
  "0x1234567890abcdef1234567890abcdef12345678"
)
console.log(shortAddress) // "0x1234...5678"
```

#### Parse RPC Error

Parses an RPC error to extract useful information.

```typescript
import { parseRpcError } from "@0x1luxa/utils"

const error = new Error("Transaction reverted")
const parsedError = parseRpcError(error)
console.log(parsedError.revertReason) // "Transaction reverted"
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
