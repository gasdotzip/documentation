import { ethers } from 'ethers'
import { limitsAbi } from './abis'

// Connect the wallet to a provider
const provider = new ethers.AlchemyProvider(1, 'AlchemyProviderId')
const lzId = 30110

async function getLimit(lzId: number): Promise<bigint> {
  const contract = new ethers.Contract('0x90E595783E43eb89fF07f63d27B8430e6B44bD9c', limitsAbi, provider)
  const config = (await contract.dstConfig(lzId)) as bigint[]
  return config[3]
}

getLimit(lzId)
  .then((limit) => {
    console.log(`The limit is: ${limit}`)
  })
  .catch((error) => console.error(error))
