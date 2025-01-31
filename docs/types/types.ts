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

export interface OutboundChainTableProps {
  chains: ChainData[]
  isLoading: boolean
}

export interface ExplorerConfig {
  url: string
  name: string
}

export interface InboundChain {
  name: string
  chainId: number
  directAddress: string
  contractAddress: string
  explorer: ExplorerConfig
}
