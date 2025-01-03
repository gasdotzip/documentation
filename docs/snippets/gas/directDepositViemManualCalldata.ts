import { parseEther, http, createWalletClient, publicActions, toHex } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import bech32Converting from 'bech32-converting'
import { PublicKey } from '@solana/web3.js'
import { optimism } from 'viem/chains'
import basex from 'base-x'
import bs58 from 'bs58'

const DIRECT_DEPOSIT_ADDRESS = '0x391E7C679d29bD940d63be94AD22A25d25b5A604'

// Create a wallet from a private key
const account = privateKeyToAccount('0x...')

// Connect the wallet to a provider
const client = createWalletClient({
  account,
  chain: optimism, // Target Chain
  transport: http(),
}).extend(publicActions)

// Replace with the destination address. Supported formats:
// - EVM: 0x... (42 chars)
// - Solana: Base58 string (32-44 chars, validates on curve)
// - MOVE/FUEL: 0x... (66 chars)
// - Or leave as account.address to send to self
const toAddress = account.address

// Each chain will receive an equal portion of the value sent
const amount: bigint = parseEther('0.0006')

// This example is targeting zkSync (51), Polygon zkEVM (52)
const gasZipShortChainIDs = [51, 52]

// Helper functions for address type checking
function isEVMAddress(address: string): boolean {
  return address.length === 42
}

function isMOVEAddress(address: string): boolean {
  return address.length === 66
}

function isBase58Address(address: string): boolean {
  return new RegExp(/[1-9A-HJ-NP-Za-km-z]{32,44}/).test(address)
}

function isXRPAddress(address: string): boolean {
  return new RegExp(/r[0-9a-zA-Z]{24,34}/).test(address)
}

function isInitiaAddress(address: string): boolean {
  return /^init[a-zA-Z0-9]{39}$/.test(address)
}

// Helper functions for address encoding
function encodeEVMAddress(address: string): string {
  return '02' + address.slice(2)
}

function encodeSolanaAddress(address: string): string {
  const decoded = bs58.decode(address)
  return '03' + Buffer.from(decoded).toString('hex')
}

function encodeBase58EVMAddress(hexaddr: string): string {
  return '02' + hexaddr.slice(2).slice(0, hexaddr.length - 10)
}

function encodeOtherBase58Address(hexaddr: string): string {
  return '03' + hexaddr.slice(0, hexaddr.length - 8)
}

function encodeMOVEAddress(address: string): string {
  return '04' + address.slice(2)
}

export function encodeXRPAddress(address: string): string {
  const xrpb58 = basex('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz')
  const decoded = xrpb58.decode(address)
  return `05${Buffer.from(decoded).toString('hex')}`
}

export function encodeInitiaAddress(bech32Address: string): string {
  const hexAddress = bech32Converting('init').toHex(bech32Address)
  return `06${hexAddress.slice(2)}`
}

function encodeChainIds(shorts: number[]): string {
  return shorts.reduce((acc, short) => acc + toHex(short).slice(2).padStart(4, '0'), '')
}

const encodeTransactionInput = (to: string, shorts: number[]) => {
  let data = '0x'

  // Return early if sending to self
  if (to.toLowerCase() === account.address?.toLowerCase()) return data + '01' + encodeChainIds(shorts)

  // Handle different address types
  if (isEVMAddress(to)) data += encodeEVMAddress(to)
  else if (isMOVEAddress(to)) data += encodeMOVEAddress(to)
  else if (isXRPAddress(to)) data += encodeXRPAddress(to)
  else if (isInitiaAddress(to)) {
    data += encodeInitiaAddress(to)
  } else if (isBase58Address(to)) {
    const decoded = bs58.decode(to)

    if (decoded.length === 32 && PublicKey.isOnCurve(to)) {
      data += encodeSolanaAddress(to)
    } else {
      const hexaddr = Buffer.from(decoded).toString('hex')
      data += hexaddr.length === 50 ? encodeBase58EVMAddress(hexaddr) : encodeOtherBase58Address(hexaddr)
    }
  } else {
    return null // Invalid address format
  }

  return data + encodeChainIds(shorts)
}

;(async () => {
  const txData = encodeTransactionInput(toAddress, gasZipShortChainIDs)

  if (!txData || !txData.startsWith('0x')) {
    throw new Error('Invalid transaction data')
  }

  const hash = await client.sendTransaction({
    to: DIRECT_DEPOSIT_ADDRESS,
    value: amount,
    data: txData as `0x${string}`,
  })

  console.log('Transaction hash:', hash)
})()
