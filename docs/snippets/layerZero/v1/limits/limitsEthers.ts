import { ethers } from 'ethers'
import { limitsAbi } from './abis'

// Connect the wallet to a provider
const provider = new ethers.AlchemyProvider(1, 'AlchemyProviderId')
const lzId = 102

async function getLimit(lzId: number): Promise<bigint> {
  const contract = new ethers.Contract(
    '0x902f09715b6303d4173037652fa7377e5b98089e',
    limitsAbi,
    provider,
  )
  return (await contract.dstConfigLookup(lzId, 2)) as bigint
}

getLimit(lzId)
  .then((limit) => {
    console.log(`The limit is: ${limit}`)
  })
  .catch((error) => console.error(error))