import { ethers, parseEther } from 'ethers'
import { depositABI } from './depositABI'

// Create a wallet from a private key
const privateKey = '0x...'
const wallet = new ethers.Wallet(privateKey)

// Connect the wallet to a provider
const optimismChainId = 10
const provider = new ethers.AlchemyProvider(optimismChainId, 'AlchemyID')
const signer = wallet.connect(provider)

// Replace with address you want to send funds to
const toAddress = wallet.address

// Each chain will receive an equal portion of the value sent
const amount: bigint = parseEther('0.0006')
const amountInWei: string = amount.toString()

// This example is targeting zkSync (51), Polygon zkEVM (52)
const gasZipShortChainIDs = [51, 52]

// Prepare targeted chains parameter for deposit()
const chainsBN = gasZipShortChainIDs.reduce((p, c) => (p << BigInt(8)) + BigInt(c), BigInt(0))

// Create a contract instance
const contract = new ethers.Contract('0x9e22ebec84c7e4c4bd6d4ae7ff6f4d436d6d8390', depositABI, signer)

;(async () => {
  // Call the deposit() function
  await contract.deposit(chainsBN, toAddress, {
    value: amountInWei,
  })
})()
