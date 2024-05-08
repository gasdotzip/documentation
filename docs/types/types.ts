export interface ChainData {
  bal: string
  chain: number
  gas: string
  gwei: string
  name: string
  price: number
  rpcs: string[]
  short: number
  symbol: string
}

export interface ChainsState {
  mainnet: ChainData[]
  testnet: ChainData[]
}

export interface ChainTableProps {
  chains: ChainData[]
  isLoading: boolean
}

type Status = 'SEEN' | 'PENDING' | 'CONFIRMED'

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

interface User {
  user: [
    {
        deposit: Deposit
        txs: Transaction[]
    }
  ]
}