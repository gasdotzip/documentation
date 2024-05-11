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
    }
  ]
}
// [!endregion chains]

// [!region status]
type Status = 'SEEN' | 'PENDING' | 'CONFIRMED'
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
  signer: string
  status: Status
  time: number
  to: string
  usd: number
  value: string
}
// [!endregion transaction]
