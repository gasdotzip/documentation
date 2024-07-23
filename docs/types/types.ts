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
  mainnet: boolean
}

export interface ChainsState {
  mainnet: ChainData[]
  testnet: ChainData[]
}

export interface ChainTableProps {
  chains: ChainData[]
  isLoading: boolean
}
