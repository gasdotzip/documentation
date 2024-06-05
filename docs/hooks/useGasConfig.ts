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
        const chainsArray: ChainData[] = data.chains.map((chain: any) => ({
          bal: chain.bal,
          chain: chain.chain,
          gas: chain.gas,
          gwei: chain.gwei,
          name: chain.name,
          price: chain.price,
          rpcs: chain.rpcs,
          short: chain.short,
          symbol: chain.symbol,
        }))

        const manualRemove = [78, 44]
        const filteredChainsArray = chainsArray.filter((chain) => !manualRemove.includes(chain.chain))

        const mainnetChains = filteredChainsArray
          .filter(
            (chain) =>
              chain.short >= 249 ||
              (chain.short >= 5 && chain.short <= 100) ||
              (chain.short >= 125 && chain.short <= 151),
          )
          .sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            return 0
          })

        const testnetChains = filteredChainsArray
          .filter((chain) => chain.short >= 101 && chain.short <= 220 && !(chain.short >= 125 && chain.short <= 151))
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
