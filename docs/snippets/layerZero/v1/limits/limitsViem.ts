import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { limitsAbi } from './abis'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const lzId = 102

async function getLimit(lzId: number): Promise<bigint> {
  return (await client.readContract({
    address: '0x902f09715b6303d4173037652fa7377e5b98089e',
    abi: limitsAbi,
    functionName: 'dstConfigLookup',
    args: [lzId, 2],
  })) as bigint
}

getLimit(lzId)
  .then((limit) => {
    console.log(`The limit is: ${limit}`)
  })
  .catch((error) => console.error(error))