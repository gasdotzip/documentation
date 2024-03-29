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
        const response = await fetch('https://backend.gas.zip/gas/config')
        const data = await response.json()
        const chainsArray: ChainData[] = Object.entries(data).map(([key, chainData]) => ({
          nativeId: key,
          ...(chainData as Omit<ChainData, 'nativeId'>),
        }))

        const manualRemove = [78, 44]
        const filteredChainsArray = chainsArray.filter(
          (chain) => chain.short <= 256 && !manualRemove.includes(chain.short),
        )

        const mainnetChains = filteredChainsArray
          .filter((chain) => {
            // Skip chains with 'short' values greater than 256
            if (chain.short > 256) return false
            // Skip chains with 'short' values greater than 100, unless they are between 125 and 137 (inclusive)
            if (chain.short > 100 && !(chain.short >= 125 && chain.short <= 137)) return false
            return true
          })
          .sort((a, b) => a.short - b.short)

        const testnetChains = filteredChainsArray
          .filter((chain) => {
            // Skip chains with 'short' values greater than 256 or less than 100
            if (chain.short > 256 || chain.short < 100) return false
            // Additionally, skip chains with 'short' values between 125 and 137 (inclusive)
            if (chain.short >= 125 && chain.short <= 137) return false
            return true
          })
          .sort((a, b) => a.short - b.short)

        setChains({
          mainnet: mainnetChains,
          testnet: testnetChains,
        })
      } catch (error) {
        console.error('Error fetching chain data:', error)
      } finally {
        setIsLoading(false)
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
