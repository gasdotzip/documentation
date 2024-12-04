import { TransactionInstruction, PublicKey, Transaction, Connection } from '@solana/web3.js'
import { serialize, field, vec, fixedArray } from '@dao-xyz/borsh'
import bs58 from 'bs58'

// Constants
const PROGRAM_ID = new PublicKey('gasZT2bpe7mxu5wMgQbvry84vok5CuF3huCEokyC3qh')
const SYSTEM_PROGRAM_ID = new PublicKey('11111111111111111111111111111111')
const GAS_RECIPIENT = new PublicKey('gasZT2bpe7mxu5wMgQbvry84vok5CuF2huCEokyC3qh')
const PROGRAM_DISCRIMINATOR = [242, 35, 198, 137, 82, 225, 242, 182]

class DepositArgs {
  @field({ type: 'u64' })
  value: bigint

  @field({ type: vec('u16') })
  chains: number[]

  @field({ type: fixedArray('u8', 32) })
  to: number[]

  constructor(value: bigint, chains: number[], to: number[]) {
    this.value = value
    this.chains = chains
    this.to = to
  }
}

interface CreateDepositTransactionParams {
  connection: Connection
  payer: PublicKey
  value: bigint
  destinationChains: number[]
  destinationAddress: string
}

function addressToBytes(address: string): number[] {
  // Handle Solana addresses
  if (new RegExp(/[1-9A-HJ-NP-Za-km-z]{32,44}/).test(address)) {
    const rawAddr = Buffer.from(bs58.decode(address).subarray(1))
    return Array.from(rawAddr)
  }

  // Handle EVM addresses
  const arr: number[] = []
  let cleanAddress = address.slice(2).padStart(64, '0')

  while (cleanAddress !== '') {
    arr.push(Number(`0x${cleanAddress.slice(0, 2)}`) & 0xff)
    cleanAddress = cleanAddress.slice(2)
  }

  return arr
}

export async function createDepositTransaction({
  connection,
  payer,
  value,
  destinationChains,
  destinationAddress,
}: CreateDepositTransactionParams): Promise<Transaction> {
  const args = new DepositArgs(value, destinationChains, addressToBytes(destinationAddress))

  const serializedArgs = serialize(args)

  const instruction = new TransactionInstruction({
    keys: [
      { isSigner: true, isWritable: true, pubkey: payer },
      { isSigner: false, isWritable: false, pubkey: SYSTEM_PROGRAM_ID },
      { isSigner: false, isWritable: true, pubkey: GAS_RECIPIENT },
    ],
    programId: PROGRAM_ID,
    data: Buffer.from(PROGRAM_DISCRIMINATOR.concat(Array.from(serializedArgs))),
  })

  const transaction = new Transaction()
  const latestBlockhash = await connection.getLatestBlockhash()

  transaction.feePayer = payer
  transaction.recentBlockhash = latestBlockhash.blockhash
  transaction.add(instruction)

  return transaction
}

export interface SendDepositTransactionParams extends CreateDepositTransactionParams {
  signTransaction: (transaction: Transaction) => Promise<Transaction>
}

export async function sendDepositTransaction(params: SendDepositTransactionParams): Promise<string> {
  const { signTransaction, connection, ...createParams } = params

  const transaction = await createDepositTransaction({ connection, ...createParams })
  const signedTransaction = await signTransaction(transaction)

  const signature = await connection.sendRawTransaction(signedTransaction.serialize())
  await connection.confirmTransaction(signature)

  return signature
}
