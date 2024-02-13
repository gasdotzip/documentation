import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { limitsAbi } from './abis'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const lzId = 30110

async function getLimit(lzId: number): Promise<bigint> {
  const config = (await client.readContract({
    address: '0x90E595783E43eb89fF07f63d27B8430e6B44bD9c', // executor
    abi: limitsAbi,
    functionName: 'dstConfig',
    args: [lzId],
  })) as bigint[]

  return config[3]
}

getLimit(lzId)
  .then((limit) => {
    console.log(`The limit is: ${limit}`)
  })
  .catch((error) => console.error(error))
