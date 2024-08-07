import { parseEther, http, createWalletClient, publicActions, toHex } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { optimism } from 'viem/chains'
import { depositABI } from './depositABI'
import bs58 from 'bs58'

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

const encodeTransactionInput = (to: string, shorts: number[]) => {
  let data = '0x'
  if (to.toLowerCase() !== account.address?.toLowerCase()) {
    if (to.length === 42) { // evm address
      data += '02'
      data += to.slice(2)
    } else if (new RegExp(/[1-9A-HJ-NP-Za-km-z]{32,44}/).test(to)) { // base58 sol address
      data += '03'
      data += Buffer.from(bs58.decode(to)).toString('hex')
    } else {
      return null
    }
  } else {
    data += '01' // to == sender
  }

  for (const i in shorts) {
    data += toHex(shorts[i]).slice(2).padStart(4, '0')
  }
  return data
}

const txData = encodeTransactionInput(toAddress, gasZipShortChainIDs)

;(async () => {
  // Prepare the contract write configuration
  const hash = await client.sendTransaction({
    address: '0x391E7C679d29bD940d63be94AD22A25d25b5A604',
    value: amount,
    data: txData,
  })
})()
