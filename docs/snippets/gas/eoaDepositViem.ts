import { parseEther, http, createWalletClient, publicActions, toHex } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { optimism } from 'viem/chains'
import { depositABI } from './depositABI'
import bs58 from 'bs58'
import { PublicKey } from '@solana/web3.js'

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
  // Check if sending to a different address than the sender
  if (to.toLowerCase() !== account.address?.toLowerCase()) {
    if (to.length === 42) {
      // EVM address format (0x + 40 hex chars)
      data += '02' // EVM address type
      data += to.slice(2) // Remove 0x prefix
    } else if (to.length === 66) {
      // MOVE/FUEL address format (0x + 64 hex chars)
      data += '04' // MOVE/FUEL address type
      data += to.slice(2) // Remove 0x prefix
    } else if (new RegExp(/[1-9A-HJ-NP-Za-km-z]{32,44}/).test(to)) {
      // Check if address is base58 encoded
      const decoded = bs58.decode(to)
      if (decoded.length === 32 && PublicKey.isOnCurve(to)) {
        // Solana address (32 bytes, validates on curve)
        data += '03' // Solana address type
        data += Buffer.from(decoded).toString('hex')
      } else {
        // Handle other base58 encoded addresses
        const hexaddr = Buffer.from(decoded).toString('hex')
        if (hexaddr.length === 50) {
          // Base58 encoded EVM address
          data += '02' // EVM address type
          data += hexaddr.slice(2).slice(0, hexaddr.length - 10)
        } else {
          // Other base58 format (e.g. Tron)
          data += '03' // Base58 address type
          data += hexaddr.slice(0, hexaddr.length - 8)
        }
      }
    } else {
      // Invalid address format
      return null
    }
  } else {
    // Sending to self (msg.sender)
    data += '01'
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
