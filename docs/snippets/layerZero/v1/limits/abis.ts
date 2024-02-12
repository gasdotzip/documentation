export const limitsAbi = [
  {
    constant: true,
    inputs: [
      {
        name: '_key1',
        type: 'uint16',
      },
      {
        name: '_key2',
        type: 'uint16',
      },
    ],
    name: 'dstConfigLookup',
    outputs: [
      {
        components: [
          {
            name: 'dstNativeAmtCap',
            type: 'uint128',
          },
          {
            name: 'baseGas',
            type: 'uint64',
          },
          {
            name: 'gasPerByte',
            type: 'uint64',
          },
        ],
        type: 'tuple',
      },
    ],
    type: 'function',
  },
]
