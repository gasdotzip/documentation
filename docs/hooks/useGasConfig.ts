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
          .filter((chain) => chain.short <= 100)
          .sort((a, b) => a.short - b.short)
        const testnetChains = filteredChainsArray.filter((chain) => chain.short > 100).sort((a, b) => a.short - b.short)

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
