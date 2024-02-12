// [!region import]
import { encodePacked, parseEther, http, createWalletClient, publicActions, formatEther } from 'viem'
import { optimism } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'
import { estimateFeesAbi, lzDepositAbi } from './abis'
// [!endregion import]

// [!region wallet]
const account = privateKeyToAccount('0x...')

const client = createWalletClient({
  account,
  chain: optimism,
  transport: http(),
}).extend(publicActions)

const lzIds = [110, 175] // Arbitrum and Arbitrum Nova LayerZero chain IDs
// [!endregion wallet]

// [!region estimateFees]

// Estimate
const createAdapterParams = (gasLimit: bigint, nativeAmount: bigint, to: string) => {
  return encodePacked(['uint16', 'uint256', 'uint256', 'address'], [2, gasLimit, nativeAmount, to as `0x${string}`])
}

// Prepare parameters for Arbitrum and Optimism
const arbitrumParamsEstimate = createAdapterParams(
  BigInt(30_000),
  parseEther('0.000002'),
  '0x0000000000000000000000000000000000000000',
)
const arbitrumNovaParamsEstimate = createAdapterParams(
  BigInt(30_000),
  parseEther('0.000002'),
  '0x0000000000000000000000000000000000000000',
)

// Prepare the final object to send to the estimateFees() function
const adapterParamsEstimate = [arbitrumParamsEstimate, arbitrumNovaParamsEstimate]

async function estimateFees(lzIds: number[], adapterParamsEstimate: `0x${string}`[]): Promise<bigint> {
  const fees = (await client.readContract({
    address: '0xbf94ed69281709958c8f60bc15cd1bb6badcd4a4',
    abi: estimateFeesAbi,
    functionName: 'estimateFees',
    args: [lzIds, adapterParamsEstimate],
  })) as bigint[]

  // Aggregate the fees together to use in the `deposit()` function
  const lzFees = fees.reduce((p, c) => p + c, BigInt(0))

  return lzFees
}
// [!endregion estimateFees]

// [!region deposit]
// Define the createOptimizedAdapterParams function
const createOptimizedAdapterParams = (dstChainId: bigint, nativeAmount: bigint) => {
  return (dstChainId << BigInt(240)) | nativeAmount
}

// Prepare parameters for Arbitrum and Optimism
const arbitrumParamsDeposit = createOptimizedAdapterParams(BigInt(110), parseEther('0.000002'))
const arbitrumNovaParamsDeposit = createOptimizedAdapterParams(BigInt(175), parseEther('0.000002'))

// Prepare the final object to send to the deposit() function
const adapterParamsDeposit = [arbitrumParamsDeposit, arbitrumNovaParamsDeposit]
;(async () => {
  const lzFees = await estimateFees(lzIds, adapterParamsEstimate)
  console.log(`The fees are: ${lzFees}`)
  console.log(`Parsed Fees`, formatEther(lzFees))

  // Prepare the contract write configuration
  const { request } = await client.simulateContract({
    address: '0xbf94ed69281709958c8f60bc15cd1bb6badcd4a4',
    abi: lzDepositAbi,
    functionName: 'deposit',
    value: lzFees,
    args: [adapterParamsDeposit, account.address],
  })

  // Call the deposit() function
  await client.writeContract(request)
})().catch((error) => console.error(error))
// [!endregion deposit]
