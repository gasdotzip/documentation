export interface ChainData {
  nativeId: string
  gas: number
  gasPrice: number
  rpc: string
  fallback: string
  name: string
  symbol: string
  price: string | number
  short: number
}

export interface ChainsState {
  mainnet: ChainData[]
  testnet: ChainData[]
}

export interface ChainTableProps {
  chains: ChainData[]
  isLoading: boolean
}
