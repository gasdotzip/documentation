import { parseEther, solidityPacked, Wallet, AlchemyProvider, Contract } from 'ethers'
import { estimateFeesAbi, lzDepositAbi } from './abis'

const wallet = new Wallet('0x...')
const optimismChainId = 10
const provider = new AlchemyProvider(optimismChainId, 'AlchemyKey')
const signer = wallet.connect(provider)

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
    valueInEther: '0.0000002',
  },
  fuse: {
    v2LZid: 30138,
    chainId: '122',
    valueInEther: '0.000002',
  },
}

// Estimate
const createReceiveOptions = (gasLimit: bigint) => {
  return solidityPacked(
    ['bytes', 'uint8', 'uint16', 'uint8', 'bytes'],
    [solidityPacked(['uint16'], [3]), 1, 16 + 1, 1, solidityPacked(['uint128'], [gasLimit])],
  )
}

const createNativeOptions = (gasLimit: bigint, amount: bigint, to: string) => {
  return solidityPacked(
    ['bytes', 'uint8', 'uint16', 'uint8', 'bytes'],
    [
      createReceiveOptions(gasLimit),
      1,
      32 + 16 + 1,
      2,
      solidityPacked(['uint128', 'bytes32'], [amount, `0x${to.slice(2).padStart(64, '0')}` as string]),
    ],
  )
}

async function estimateFees(): Promise<bigint> {
  const nullAddress = '0x0000000000000000000000000000000000000000'
  const feeChains: {
    v2LZid: number
    chainId: string
  }[] = []
  const options: string[] = []
  const messages: string[] = []

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

    const lzV2contract = new Contract('0x26DA582889f59EaaE9dA1f063bE0140CD93E6a4f', estimateFeesAbi, provider)
    fees = (await lzV2contract.estimateFees(v2LZids, messages, options)) as bigint[]
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

  const contract = new Contract('0x26DA582889f59EaaE9dA1f063bE0140CD93E6a4f', lzDepositAbi, signer)
  await contract.sendDeposits(adapterParamsDeposit, signer.address, {
    value: lzFee,
  })
})().catch((error) => console.error(error))
