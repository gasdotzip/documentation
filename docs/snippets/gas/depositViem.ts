import { parseEther, http, createWalletClient, publicActions } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { optimism } from 'viem/chains'
import { depositABI } from './depositABI'

// Create a wallet from a private key
const account = privateKeyToAccount('0x...')

// Connect the wallet to a provider
const client = createWalletClient({
  account,
  chain: optimism, // Target Chain
  transport: http(),
}).extend(publicActions)

// Replace with address you want to send funds to
const toAddress = account.address

// Each chain will receive an equal portion of the value sent
const amount: bigint = parseEther('0.0006')

// This example is targeting zkSync (51), Polygon zkEVM (52)
const gasZipShortChainIDs = [51, 52]

// Prepare targeted chains parameter for deposit()
const chainsBN = gasZipShortChainIDs.reduce((p, c) => (p << BigInt(8)) + BigInt(c), BigInt(0))
;(async () => {
  // Prepare the contract write configuration
  const { request } = await client.simulateContract({
    address: '0x9e22ebec84c7e4c4bd6d4ae7ff6f4d436d6d8390', // Targeting Gas.zip Optimism Contract
    abi: depositABI,
    functionName: 'deposit',
    value: amount,
    args: [chainsBN, toAddress],
  })

  // Call the deposit() function
  await client.writeContract(request)
})()
