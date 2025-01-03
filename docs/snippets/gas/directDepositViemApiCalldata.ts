import { parseEther, http, createWalletClient, publicActions } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { optimism } from 'viem/chains'

const DIRECT_DEPOSIT_ADDRESS = '0x391E7C679d29bD940d63be94AD22A25d25b5A604'

// Create a wallet from a private key
const account = privateKeyToAccount('0x...')

// Connect the wallet to a provider
const client = createWalletClient({
  account,
  chain: optimism,
  transport: http(),
}).extend(publicActions)

// Replace with the destination address.
const toAddress = account.address

const amount: bigint = parseEther('0.0006')
const outboundChains = [42161, 10] // Arbitrum (42161), Optimism (10) - These are native chain IDs

async function getCalldata({
  fromAddress,
  toAddress,
  amount,
  chainIds,
}: {
  fromAddress: string
  toAddress: string
  amount: bigint
  chainIds: number[]
}) {
  const chainIdsStr = chainIds.join(',')
  // For CallData API documentation, see: https://docs.gas.zip/gas/api/calldata
  const url = `https://backend.gas.zip/v2/quotes/${optimism.id}/${amount}/${chainIdsStr}?from=${fromAddress}&to=${toAddress}`

  const response = await fetch(url)
  if (!response.ok) throw new Error('Failed to fetch calldata')

  const data = await response.json()
  return data.calldata
}

;(async () => {
  const txData = await getCalldata({
    fromAddress: account.address,
    toAddress,
    amount,
    chainIds: outboundChains,
  })

  const hash = await client.sendTransaction({
    to: DIRECT_DEPOSIT_ADDRESS,
    value: amount,
    data: txData,
  })

  console.log('Transaction hash:', hash)
})()
