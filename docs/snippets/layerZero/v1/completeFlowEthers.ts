// [!region import]
import { ethers, formatEther, parseEther } from 'ethers'
import { estimateFeesAbi, lzDepositAbi } from './abis'
// [!endregion import]

// [!region wallet]
const privateKey = '0x...'
const wallet = new ethers.Wallet(privateKey)

// Connect the wallet to a provider
const optimismChainId = 10
const provider = new ethers.AlchemyProvider(optimismChainId, 'AlchemyProviderId')
const signer = wallet.connect(provider)

const lzIds = [110, 175] // Arbitrum and Arbitrum Nova LayerZero chain IDs
// [!endregion wallet]

// [!region estimateFees]
// Estimate
// Define the createAdapterParams function
const createAdapterParams = (gasLimit: bigint, nativeAmount: bigint, to: string) => {
  return ethers.solidityPacked(
    ['uint16', 'uint256', 'uint256', 'address'],
    [2, gasLimit, nativeAmount, to],
  ) as `0x${string}`
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

async function estimateFees(lzIds: number[], adapterParams: `0x${string}`[]): Promise<bigint> {
  const contract = new ethers.Contract(
    '0xbf94ed69281709958c8f60bc15cd1bb6badcd4a4',
    estimateFeesAbi,
    provider,
  )
  const fees = (await contract.estimateFees(lzIds, adapterParams)) as bigint[]

  // Aggregate the fees together to use as a parameter in the `deposit()` function
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

  const contract = new ethers.Contract(
    '0xbf94ed69281709958c8f60bc15cd1bb6badcd4a4',
    lzDepositAbi,
    signer,
  )
  await contract.deposit(adapterParamsDeposit, signer.address, {
    value: lzFees,
  })
})().catch((error) => console.error(error))
// [!endregion deposit]
