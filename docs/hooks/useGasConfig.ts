import { useState, useEffect } from 'react'
import { ChainData, ChainsState } from '../types/types'

const useChainData = () => {
  const [chains, setChains] = useState<ChainsState>({
    mainnet: [],
    testnet: [],
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://backend.gas.zip/v2/chains')
        const data = await response.json()
        const chainsArray: ChainData[] = data.chains.map((chain: ChainData) => ({
          bal: chain.bal,
          chain: chain.chain,
          gas: chain.gas,
          gwei: chain.gwei,
          name: chain.name,
          price: chain.price,
          rpcs: chain.rpcs,
          short: chain.short,
          symbol: chain.symbol,
          mainnet: chain.mainnet,
        }))

        const manualRemove = [78, 44, 7979, 2026]
        const filteredChainsArray = chainsArray.filter((chain) => !manualRemove.includes(chain.chain))

        const mainnetChains = filteredChainsArray
          .filter((chain) => chain['mainnet'] !== false)
          .sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            return 0
          })

        const testnetChains = filteredChainsArray
          .filter((chain) => chain['mainnet'] === false)
          .sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            return 0
          })
        setChains({
          mainnet: mainnetChains,
          testnet: testnetChains,
        })
      } catch (error) {
        console.error('Failed to fetch chain data:', error)
      } finally {
        setIsLoading(false)
        console.log('Fetch operation completed')
      }
    }

    fetchData()
  }, [])

  return {
    ...chains,
    isLoading,
  }
}

export default useChainData
