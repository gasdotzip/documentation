import { encodePacked, parseEther, http, createWalletClient, publicActions } from 'viem'
import { optimism } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'
import { estimateFeesAbi, lzDepositAbi } from './abis'

const account = privateKeyToAccount('0x...')

const client = createWalletClient({
  account,
  chain: optimism,
  transport: http(),
}).extend(publicActions)

type ChainParams = {
  [key: string]: {
    v2LZid: number
    chainId: string
    valueInEther: string
  }
}

const contractParams: ChainParams = {
  gnosis: {
    v2LZid: 30145,
    chainId: '100',
    valueInEther: '0.000002',
  },
  fuse: {
    v2LZid: 30138,
    chainId: '122',
    valueInEther: '0.000002',
  },
}

// Estimate
const createReceiveOptions = (gasLimit: bigint) => {
  return encodePacked(
    ['bytes', 'uint8', 'uint16', 'uint8', 'bytes'],
    [encodePacked(['uint16'], [3]), 1, 16 + 1, 1, encodePacked(['uint128'], [gasLimit])],
  )
}

const createNativeOptions = (gasLimit: bigint, amount: bigint, to: string) => {
  return encodePacked(
    ['bytes', 'uint8', 'uint16', 'uint8', 'bytes'],
    [
      createReceiveOptions(gasLimit),
      1,
      32 + 16 + 1,
      2,
      encodePacked(['uint128', 'bytes32'], [amount, `0x${to.slice(2).padStart(64, '0')}` as `0x${string}`]),
    ],
  )
}

async function estimateFees(): Promise<bigint> {
  const nullAddress = '0x0000000000000000000000000000000000000000'
  const feeChains: {
    v2LZid: number
    chainId: string
  }[] = []
  const options: `0x${string}`[] = []
  const messages: `0x${string}`[] = []

  for (const chain in contractParams) {
    const selection = contractParams[chain]
    feeChains.push({
      v2LZid: selection.v2LZid,
      chainId: selection.chainId,
    })
    options.push(createNativeOptions(BigInt(20_000), parseEther(selection.valueInEther), nullAddress))
    messages.push('0x')
  }

  let fees: bigint[] = []
  try {
    const v2LZids = feeChains.map((feeChain) => feeChain.v2LZid)

    fees = (await client.readContract({
      address: '0x26DA582889f59EaaE9dA1f063bE0140CD93E6a4f',
      abi: estimateFeesAbi,
      functionName: 'estimateFees',
      args: [v2LZids, messages, options],
    })) as bigint[]
  } catch (error) {
    console.error('Read Contract Error', error)
  }

  const lzFees = fees.reduce((p, c) => p + c, BigInt(0))
  return lzFees
}

// Deposit
const createOptimizedAdapterParams = (dstChainId: bigint, nativeAmount: bigint) => {
  return (dstChainId << BigInt(224)) | nativeAmount
}

;(async () => {
  const lzFee = await estimateFees()
  const adapterParamsDeposit: bigint[] = []
  for (const chain in contractParams) {
    const selection = contractParams[chain]
    adapterParamsDeposit.push(
      createOptimizedAdapterParams(BigInt(selection.v2LZid), parseEther(selection.valueInEther)),
    )
  }

  const { request } = await client.simulateContract({
    address: '0x26DA582889f59EaaE9dA1f063bE0140CD93E6a4f',
    abi: lzDepositAbi,
    functionName: 'sendDeposits',
    value: lzFee,
    args: [adapterParamsDeposit, account.address],
  })

  await client.writeContract(request)
})().catch((error) => console.error(error))
