// [!region chains]
interface Chains {
  chains: [
    {
      name: string
      chain: number
      short: number
      gas: string
      gwei: string
      bal: string
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
