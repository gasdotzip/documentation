// [!region chains]
interface Chains {
  chains: [
    {
      name: string
      chain: number // native chain id
      short: number // unique Gas.zip id
      gas: string // gas usage of a simple transfer
      gwei: string // current gas price
      bal: string // balance of the Gas.zip reloader
      rpcs: string[]
      symbol: string
      price: number
    },
  ]
}
// [!endregion chains]

// [!region status]
type Status = 'SEEN' | 'PENDING' | 'CONFIRMED' | 'PRIORITY' | 'CANCELLED'
// [!endregion status]

// [!region deposit]
interface Deposit {
  block: number
  chain: number
  hash: string
  log: number
  sender: string
  shorts: number[]
  status: Status
  time: number
  to: string
  usd: number
  value: string
}
// [!endregion deposit]

// [!region transaction]
interface Transaction {
  chain: number
  hash: string
  nonce: number
  refund: boolean
  cancelled: boolean
  signer: string
  status: Status
  time: number
  to: string
  usd: number
  value: number
}
// [!endregion transaction]

// [!region transactionStatusData]
interface TransactionStatusData {
  deposit: Deposit
  txs: Transaction[]
}
// [!endregion transactionStatusData]

// [!region userHistory]
interface UserHistory {
  user: [
    {
      deposit: Deposit
      txs: Transaction[]
    },
  ]
}
// [!endregion userHistory]

// [!region quote]
interface Quote {
  quotes: [
      {
        chain: number
        expected: number // estimated output in wei
        gas: number // estimated gas cost in wei
        speed: number // estimated time (s) to inclusion
        usd: number
      }
    | {
        chain: number
        error: string
      },
  ],
  error: string,
  calldata: string, // constructed data for Direct Deposit
  expires: number // time the quote is no longer guaranteed after
}
// [!endregion quote]

// [!region calldataQuoteResponse]
interface CalldataQuoteResponse {
  calldata: string
  quotes: {
    chain: number
    expected: string
    gas: string
    speed: number
    usd: number
  }[]
}
// [!endregion calldataQuoteResponse]
