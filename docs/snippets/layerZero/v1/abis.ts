export const lzDepositAbi = [
    {
      inputs: [
        {
          internalType: 'uint256[]',
          name: '_depositParams',
          type: 'uint256[]',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'deposit',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
  ] as const
  
  export const estimateFeesAbi = [
    {
      inputs: [
        {
          internalType: 'uint16[]',
          name: '_dstChainIds',
          type: 'uint16[]',
        },
        {
          internalType: 'bytes[]',
          name: '_adapterParams',
          type: 'bytes[]',
        },
      ],
      name: 'estimateFees',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'nativeFees',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ] as const